import { App, Editor, MarkdownView, Plugin, TFile, Notice } from "obsidian";

interface Hotstring {
	trigger: string;
	replacement: string;
}

export default class HotstringsPlugin extends Plugin {
	private hotstrings: Hotstring[] = [];
	private hotstringsFile: string = "hotstrings.md"; // File name for hotstrings

	async onload() {
		// Wait for layout to be ready before loading hotstrings
		this.app.workspace.onLayoutReady(async () => {
			await this.loadHotstrings();
		});

		// Add a command to reload hotstrings
		this.addCommand({
			id: "reload-hotstrings",
			name: "Reload Hotstrings",
			callback: async () => {
				await this.loadHotstrings();
				new Notice("Hotstrings reloaded!");
			},
		});

		// Listen for editor changes to apply hotstrings
		this.registerEvent(
			this.app.workspace.on("editor-change", (editor: Editor) => {
				this.handleEditorChange(editor);
			}),
		);
	}

	// Load hotstrings from the user's `hotstrings` file
	private async loadHotstrings() {
		this.hotstrings = []; // Reset current hotstrings
		const file = this.app.vault.getAbstractFileByPath(this.hotstringsFile);

		if (file instanceof TFile) {
			// If the file exists, read and parse it
			const content = await this.app.vault.read(file);
			this.parseHotstrings(content);
		} else {
			// Create the file with a default comment if it doesn't exist
			await this.app.vault.create(
				this.hotstringsFile,
				`#### Add your hotstrings below in the format:\n# trigger~.~{text string that you want}`,
			);
			new Notice(`Hotstrings file created: ${this.hotstringsFile}`);
		}
	}

	// Parse the content of the `hotstrings` file
	private parseHotstrings(content: string) {
		const lines = content.split("\n");
		lines.forEach((line) => {
			// Ignore comments or empty lines
			if (!line.trim() || line.startsWith("#")) return;

			// Match the trigger~.~{replacement} format
			const match = line.match(/^(.+?)~\.~\{(.+?)\}$/);
			if (match) {
				const [, trigger, replacement] = match;
				this.hotstrings.push({ trigger, replacement });
			}
		});
	}

	// Apply hotstrings in the editor when typing
	private handleEditorChange(editor: Editor) {
		const cursor = editor.getCursor();
		const line = editor.getLine(cursor.line);

		this.hotstrings.forEach(({ trigger, replacement }) => {
			// Check if the line ends with a trigger
			if (line.endsWith(trigger)) {
				// Replace the trigger with the replacement text
				const newLine = line.replace(
					new RegExp(`${trigger}$`),
					replacement,
				);
				editor.setLine(cursor.line, newLine);

				// Move the cursor to the end of the replacement text
				editor.setCursor({ line: cursor.line, ch: newLine.length });
			}
		});
	}

	onunload() {
		console.log("HotstringsPlugin unloaded.");
	}
}
