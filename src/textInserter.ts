import * as vscode from 'vscode';

export async function insertTag() {
    const tag = await vscode.window.showInputBox();
    if(tag == null)
        return;

    let selection = vscode.window.activeTextEditor.selection;

    if(!selection.isEmpty) {
        vscode.window.activeTextEditor.edit(builder => {
            builder.replace(selection, getIsertText(selection, tag));
        });
    }
};

function getIsertText(selection: vscode.Selection, tag: string) {
    return "<" + tag +">" + vscode.window.activeTextEditor.document.getText(selection) + "</" + tag + ">"
}
