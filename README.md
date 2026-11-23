# CodersTodo: a VS Code extension

A Visual Studio Code extension that adds a todo list to the activity bar. You can type todos straight into the sidebar or send selected lines from the editor into the list.

## Features
- Custom activity-bar view with a Svelte-powered webview sidebar
- Add todos from the sidebar input and toggle them complete
- **CodersTodo: Add Todo From Selection** command sends the current editor selection to the list. Multi-line selections become one todo per line
- Two-way messaging between the extension host and the webview
- A content security policy with a nonce on the webview

## Tech stack
- **TypeScript**, **VS Code Extension API**
- **Svelte** webviews bundled with **Rollup**
- Extension bundled with **webpack**

## Project structure
```
src/        # extension host: activation, sidebar provider, panel, nonce helper
webviews/   # Svelte components and page entry points
media/      # icons and webview CSS
```

## Run it
```bash
npm install
npm run watch     # builds the extension and webviews
```
Then press **F5** in VS Code to open an Extension Development Host with CodersTodo loaded.

## Author
**Md Junaed Abed**: [Portfolio](https://abed-page.vercel.app) · [GitHub](https://github.com/JunaedAbed)
