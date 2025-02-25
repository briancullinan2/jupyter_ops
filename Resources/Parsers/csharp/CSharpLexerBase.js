const antlr4 = require('antlr4');

class CSharpLexerBase extends antlr4.Lexer {
    constructor(input, output, errorOutput) {
        super(input, output, errorOutput);
        this._input = input;
        this.interpolatedStringLevel = 0;
        this.interpolatedVerbatiums = [];
        this.curlyLevels = [];
        this.verbatium = false;
    }

    OnInterpolatedRegularStringStart() {
        this.interpolatedStringLevel++;
        this.interpolatedVerbatiums.push(false);
        this.verbatium = false;
    }

    OnInterpolatedVerbatiumStringStart() {
        this.interpolatedStringLevel++;
        this.interpolatedVerbatiums.push(true);
        this.verbatium = true;
    }

    OnOpenBrace() {
        if (this.interpolatedStringLevel > 0) {
            this.curlyLevels.push((this.curlyLevels.pop() || 0) + 1);
        }
    }

    OnCloseBrace() {
        if (this.interpolatedStringLevel > 0) {
            this.curlyLevels.push((this.curlyLevels.pop() || 0) - 1);
            if (this.curlyLevels.length > 0 && this.curlyLevels[this.curlyLevels.length - 1] === 0) {
                this.curlyLevels.pop();
                this.skip();
                this.popMode();
            }
        }
    }

    OnColon() {
        if (this.interpolatedStringLevel > 0) {
            let ind = 1;
            let switchToFormatString = true;
            while (String.fromCharCode(this._input.LA(ind)) !== '}') {
                if (this._input.LA(ind) === ':'.charCodeAt(0) || this._input.LA(ind) === ')'.charCodeAt(0)) {
                    switchToFormatString = false;
                    break;
                }
                ind++;
            }
            if (switchToFormatString) {
                this.mode(CSharpLexer.INTERPOLATION_FORMAT);
            }
        }
    }

    OpenBraceInside() {
        this.curlyLevels.push(1);
    }

    OnDoubleQuoteInside() {
        this.interpolatedStringLevel--;
        this.interpolatedVerbatiums.pop();
        this.verbatium = this.interpolatedVerbatiums.length > 0 ? this.interpolatedVerbatiums[this.interpolatedVerbatiums.length - 1] : false;
    }

    OnCloseBraceInside() {
        this.curlyLevels.pop();
    }

    IsRegularCharInside() {
        return !this.verbatium;
    }

    IsVerbatiumDoubleQuoteInside() {
        return this.verbatium;
    }
}

module.exports = CSharpLexerBase;
