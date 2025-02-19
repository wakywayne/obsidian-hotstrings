# Hotstrings Plugin

A plugin for [Obsidian](https://obsidian.md) that allows you to create custom text expansions (hotstrings) that automatically expand as you type.

## Features

-   Create custom text expansions that trigger automatically while typing
-   Supports both simple and complex text replacements
-   Easy to configure through the plugin settings
-   Works in any note or editor within Obsidian
-   Hotstrings can be reloaded without restarting Obsidian

## Installation

1. Open Obsidian Settings
2. Go to Community Plugins and disable Safe Mode
3. Click Browse and search for "Hotstrings"
4. Install the plugin and enable it

## Usage

### Creating Hotstrings

1. Open Obsidian Settings
2. Navigate to the Hotstrings plugin settings
3. Add new hotstrings in the format:
    - Trigger: The text you type
    - Expansion: The text it expands to

Example:
LOL~.~{Laugh Out Loud}

### Using Hotstrings

Simply type your trigger text anywhere in Obsidian. The plugin will automatically replace it with your defined expansion.

### Reloading Hotstrings

If you make changes to your hotstrings, you can reload them using the command palette:

1. Press `Ctrl/Cmd + P` to open the command palette
2. Search for "Reload Hotstrings"
3. Select the command to reload your changes
   _Alternatively you can add a hotkey by clicking the plus button in the hotkey settings_

## Examples

Here are some useful hotstring examples:

-   `SIG~.~{Your signature saying how you are a nice person and proffesional or something}` → Your signature
-   `SUPA~.~{supercalifragilisticexpialidocious}` → Long word that you don't want to have to type
-   `MAILAD` → Your email address

## Tips

-   Use the quick add community plugin to easily add hotstrings to the hotstring file [git-repo](https://github.com/chhoumann/quickadd)
-   Hotstrings are case-sensitive by default
-   Triggers must be unique
-   Use the reload command after adding new hotstrings

## Troubleshooting

If hotstrings aren't working:

1. Check if the plugin is enabled under Community Plugins
2. Try reloading the hotstrings using the command palette
3. Ensure there are no conflicts with your hotstrings
4. Restart Obsidian if issues persist

## Support

If you encounter any issues or have suggestions:

-   Open an issue on the GitHub repository
-   Include steps to reproduce the problem
-   Provide your Obsidian version and operating system

## Contributing

Contributions are always welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b featureName`)
3. Make your changes
4. Test the code for a week or few days if you are a heavy user
5. Commit your changes
6. Push to the branch (`git push origin feature/improvement`)
7. Create a Pull Request

### Development Setup

1. Clone your fork of the repository
2. Install dependencies with `npm install`
3. Make your changes in the `main.ts` file
4. Build the plugin with `npm run dev`

Please ensure your PR:

-   Follows the existing code style
-   Includes relevant documentation updates
-   Describes the changes made
-   References any related issues
