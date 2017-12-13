import * as vscode from 'vscode';

export async function insertTag() {
    const tag = await vscode.window.showInputBox();
    if(tag == null)
        return;

    let selection = vscode.window.activeTextEditor.selection;

    if(!selection.isEmpty) {
        vscode.window.activeTextEditor.edit(builder => {
            builder.replace(selection, getInsertText(vscode.window.activeTextEditor.document.getText(selection), tag));
        });
    }
};

export function getInsertText(selection: string, tag: string) {
    return "<" + tag +">" + selection + "</" + tag + ">"
}