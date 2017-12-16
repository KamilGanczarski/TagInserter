//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as inserter from '../tagInserter';

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", () => {

    // Defines a Mocha unit test
    test("Simple Insertion", () => {
        let mockData = "<div>TEST</div>";
        assert.equal(mockData, inserter.getInsertText("TEST", "div"));
    });

    test("Inserting with classes", () => {
        let mockData = "<div class=\"container\">TEST</div>";
        assert.equal(mockData, inserter.getInsertText("TEST", "div class=\"container\""));
    });

    test("Inserting blank should fail", () => {
        let mockData = "<div class=\"container\">TEST</div>";
        assert.notEqual(mockData, inserter.getInsertText("TEST", ""))
    });
});