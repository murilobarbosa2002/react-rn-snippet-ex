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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const snippets = {
    "React Native Route": {
        "prefix": "rnr",
        "description": "Creates a screen route in React Native with naming convention."
    },
    "React Native Component Export": {
        "prefix": "rnc",
        "description": "Creates a basic React Native component with export."
    },
    "React Native Component Export with Types": {
        "prefix": "rncwt",
        "description": "Creates a React Native component with TypeScript types and props."
    },
    "React Native Section Export": {
        "prefix": "rns",
        "description": "Creates a basic section in React Native with export."
    },
    "React Native Section Export with Types": {
        "prefix": "rnswt",
        "description": "Creates a section in React Native with TypeScript types and props."
    },
    "React Native Screen Export": {
        "prefix": "rnsn",
        "description": "Creates a basic screen in React Native with export."
    },
    "React Native Screen Export with Types": {
        "prefix": "rnsnwt",
        "description": "Creates a screen in React Native with TypeScript types and props."
    }
};
function activate(context) {
    console.log('Extension "react-rn-snippet-ex" is now active!');
    let disposable = vscode.commands.registerCommand('extension.showSnippets', () => __awaiter(this, void 0, void 0, function* () {
        const snippetNames = Object.keys(snippets);
        const selectedSnippet = yield vscode.window.showQuickPick(snippetNames, {
            placeHolder: 'Choose a snippet to view the description'
        });
        if (selectedSnippet) {
            const snippet = snippets[selectedSnippet];
            vscode.window.showInformationMessage(`${selectedSnippet}: ${snippet.description}`);
            const editor = vscode.window.activeTextEditor;
            if (editor) {
                const position = editor.selection.active;
                editor.insertSnippet(new vscode.SnippetString(snippet.prefix), position);
            }
        }
    }));
    context.subscriptions.push(disposable);
}
function deactivate() { }
