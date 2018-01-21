// Tag-inserter/extension.ts
// Author: Szymon 'l7ssha' Uglis
import * as vscode from 'vscode';

export async function insertTag() {
    const tag = await vscode.window.showInputBox();
    if(tag == null && tag.trim() != "")
        return;

    let selection = vscode.window.activeTextEditor.selection;
    const document_lang = vscode.window.activeTextEditor.document.languageId;

    if(!selection.isEmpty && (document_lang  == "html" || document_lang == "xml")) {
        vscode.window.activeTextEditor.edit(builder => {
            builder.replace(selection, getInsertText(vscode.window.activeTextEditor.document.getText(selection), tag));
        });
    }
    else
        vscode.window.showErrorMessage("Your selection is empty or you're trying to run command in non html file.");
};

// Need more secure here. We can easily crack this.
export function getInsertText(selection: string, tag: string) {
    if(tag.includes("=\"") == true)
    {
        const t = tag.split(" ", 1);
        return "<" + tag +">" + selection + "</" + t[0] + ">";
    }
    else
        return "<" + tag +">" + selection + "</" + tag + ">";
}
