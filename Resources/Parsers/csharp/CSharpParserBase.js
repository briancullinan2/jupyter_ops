const antlr4 = require('antlr4');

class CSharpParserBase extends antlr4.Parser {
    constructor(input, output, errorOutput) {
        super(input, output, errorOutput);
    }

    isLocalVariableDeclaration() {
        let localVarDecl = this._ctx instanceof CSharpParser.Local_variable_declarationContext ? this._ctx : null;
        if (!localVarDecl) return true;
        let localVariableType = localVarDecl.local_variable_type();
        if (!localVariableType) return true;
        if (localVariableType.getText() === "var") return false;
        return true;
    }
}

module.exports = CSharpParserBase;
