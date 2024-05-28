// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { CodersPanel } from "./CodersPanel";
import { SidebarProvider } from "./SidebarProvider";

export function activate(context: vscode.ExtensionContext) {
  const sidebarProvider = new SidebarProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "coderstodo-sidebar",
      sidebarProvider
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("coderstodo.helloWorld", () => {
      CodersPanel.createOrShow(context.extensionUri);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("coderstodo.refresh", async () => {
      // CodersPanel.kill();
      // CodersPanel.createOrShow(context.extensionUri);
      await vscode.commands.executeCommand("workbench.action.closeSidebar");
      await vscode.commands.executeCommand(
        "workbench.view.extension.coderstodo-sidebar-view"
      );
      // setTimeout(() => {
      //   vscode.commands.executeCommand(
      //     "workbench.action.webview.openDeveloperTools"
      //   );
      // }, 500);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("coderstodo.askQuestion", async () => {
      const answer = await vscode.window.showInformationMessage(
        "How u doin'?",
        "Good",
        "Bad"
      );

      if (answer === "Bad") {
        vscode.window.showInformationMessage("Sorry to hear that!");
      } else {
        console.log({ answer });
      }
    })
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
