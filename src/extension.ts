// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  const disposable = vscode.commands.registerCommand('example-ext.helloWorld', () => {
    vscode.window.showInformationMessage(`Hello world!`);
  });

  // const reg = vscode.languages.registerOnTypeFormattingEditProvider({
  //   language: "python",
  //   scheme: "file",
  // }, ef, "\n");

  context.subscriptions.push(
    disposable,
    vscode.languages.registerDocumentFormattingEditProvider({
      language: "python",
      scheme: "file",
    }, ef),
    vscode.languages.registerOnTypeFormattingEditProvider({
      language: "python",
      scheme: "file",
    }, ef, "\n"),
  );
}

class ExampleFormatter implements vscode.DocumentFormattingEditProvider, vscode.OnTypeFormattingEditProvider {

  provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
    console.log(`Formatting doc`);
    return [{
      range: new vscode.Range(0, 0, 0, 0),
      newText: "format-text",
    }];
  }

  provideOnTypeFormattingEdits(document: vscode.TextDocument, position: vscode.Position, ch: string, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
    console.log(`Formatting on type`);
    return [{
      range: new vscode.Range(0, 0, 0, 0),
      newText: "onType-text",
    }];
  }


}

// This method is called when your extension is deactivated
export function deactivate() { }

const ef = new ExampleFormatter();
