"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __importStar(require("vscode"));
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    const disposable = vscode.commands.registerCommand('example-ext.helloWorld', () => {
        vscode.window.showInformationMessage(`Hello world!`);
    });
    // const reg = vscode.languages.registerOnTypeFormattingEditProvider({
    //   language: "python",
    //   scheme: "file",
    // }, ef, "\n");
    context.subscriptions.push(disposable, vscode.languages.registerDocumentFormattingEditProvider({
        language: "python",
        scheme: "file",
    }, ef), vscode.languages.registerOnTypeFormattingEditProvider({
        language: "python",
        scheme: "file",
    }, ef, "\n"));
}
class ExampleFormatter {
    provideDocumentFormattingEdits(document, options, token) {
        console.log(`Formatting doc`);
        return [{
                range: new vscode.Range(0, 0, 0, 0),
                newText: "format-text",
            }];
    }
    provideOnTypeFormattingEdits(document, position, ch, options, token) {
        console.log(`Formatting on type`);
        return [{
                range: new vscode.Range(0, 0, 0, 0),
                newText: "onType-text",
            }];
    }
}
// This method is called when your extension is deactivated
function deactivate() { }
const ef = new ExampleFormatter();
//# sourceMappingURL=extension.js.map