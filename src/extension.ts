import * as vscode from 'vscode';

const snippets: any = {
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

export function activate(context: vscode.ExtensionContext) {
  console.log('Extension "react-rn-snippet-ex" is now active!');

  let disposable = vscode.commands.registerCommand('extension.showSnippets', async () => {
    const snippetNames = Object.keys(snippets); 
    
    const selectedSnippet = await vscode.window.showQuickPick(snippetNames, {
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
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
