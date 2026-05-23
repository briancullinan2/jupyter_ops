import antlr4 from 'antlr4';
// PythonLexer is resolved globally or via your Webpack bundler ecosystem
// import PythonLexer from './PythonLexer.js';

export default class PythonLexerBase extends antlr4.Lexer {
    /**
     * @param {antlr4.CharStream} charStream 
     */
    constructor(charStream) {
        super(charStream);

        // Track opening braces, brackets, and parentheses to suspend indentation scoping
        this._opened = 0;

        // Stack keeping track of indentation levels
        this._indents = [];

        // Circular queue buffer primitives for synthetic token injections
        this._firstTokensInd = 0;
        this._lastTokenInd = 0;
        this._buffer = new Array(32).fill(null);
        this._lastToken = null;
    }

    // Static runtime configuration defaults
    static TabSize = 8;

    /**
     * Pushes tokens into the circular ring buffer, growing it dynamically when full
     * @param {antlr4.Token} token 
     */
    emit(token) {
        this._token = token; // Sync vanilla antlr4 core single-token slot

        if (this._buffer[this._firstTokensInd] !== null) {
            this._lastTokenInd = this._incTokenInd(this._lastTokenInd);

            if (this._lastTokenInd === this._firstTokensInd) {
                // Circular queue is saturated! Grow array footprint exponentially
                const oldLength = this._buffer.length;
                const newArray = new Array(oldLength * 2).fill(null);
                const destInd = newArray.length - (oldLength - this._firstTokensInd);

                // Re-align head and tail fragments into the enlarged array buffer
                for (let i = 0; i < this._firstTokensInd; i++) {
                    newArray[i] = this._buffer[i];
                }
                for (let i = this._firstTokensInd; i < oldLength; i++) {
                    newArray[destInd + (i - this._firstTokensInd)] = this._buffer[i];
                }

                this._firstTokensInd = destInd;
                this._buffer = newArray;
            }
        }

        this._buffer[this._lastTokenInd] = token;
        this._lastToken = token;
    }

    /**
     * Intercepts the parser demand to drain the circular ring queue cleanly
     * @returns {antlr4.Token}
     */
    nextToken() {
        // Check if End-Of-File is reached while indentations are still dangling on the stack
        if (this._input.LA(1) === antlr4.Token.EOF && this._indents.length > 0) {
            if (this._buffer[this._lastTokenInd] === null || this._buffer[this._lastTokenInd].type !== PythonLexer.LINE_BREAK) {
                this.emitCustom(PythonLexer.LINE_BREAK);
            }

            // Flush remaining indents out by emitting equivalent DEDENT tags
            while (this._indents.length !== 0) {
                this.emitCustom(PythonLexer.DEDENT);
                this._indents.pop();
            }
        }

        const next = super.nextToken();

        if (this._buffer[this._firstTokensInd] === null) {
            return next;
        }

        const result = this._buffer[this._firstTokensInd];
        this._buffer[this._firstTokensInd] = null;

        if (this._firstTokensInd !== this._lastTokenInd) {
            this._firstTokensInd = this._incTokenInd(this._firstTokensInd);
        }

        return result;
    }

    HandleNewLine() {
        this.emitCustom(PythonLexer.NEWLINE, antlr4.Lexer.HIDDEN, this.text);

        const nextChar = String.fromCharCode(this._input.LA(1));

        if (nextChar !== ' ' && nextChar !== '\t' && this._isNotNewLineOrComment(nextChar)) {
            this._processNewLine(0);
        }
    }

    HandleSpaces() {
        const nextChar = String.fromCharCode(this._input.LA(1));

        if ((this._lastToken === null || this._lastToken.type === PythonLexer.NEWLINE) && this._isNotNewLineOrComment(nextChar)) {
            let indent = 0;
            const currentText = this.text;

            // Compute structural tab stops dynamically
            for (let i = 0; i < currentText.length; i++) {
                const c = currentText[i];
                indent += c === '\t' ? (PythonLexerBase.TabSize - (indent % PythonLexerBase.TabSize)) : 1;
            }

            this._processNewLine(indent);
        }

        this.emitCustom(PythonLexer.WS, antlr4.Lexer.HIDDEN, this.text);
    }

    IncIndentLevel() {
        this._opened++;
    }

    DecIndentLevel() {
        if (this._opened > 0) {
            this._opened--;
        }
    }

    /**
     * @param {string} next 
     * @returns {boolean}
     */
    _isNotNewLineOrComment(next) {
        return this._opened === 0 && next !== '\r' && next !== '\n' && next !== '\f' && next !== '#';
    }

    /**
     * @param {number} indent 
     */
    _processNewLine(indent) {
        this.emitCustom(PythonLexer.LINE_BREAK);

        const previous = this._indents.length === 0 ? 0 : this._indents[this._indents.length - 1];

        if (indent > previous) {
            this._indents.push(indent);
            this.emitCustom(PythonLexer.INDENT);
        } else {
            while (this._indents.length !== 0 && this._indents[this._indents.length - 1] > indent) {
                this.emitCustom(PythonLexer.DEDENT);
                this._indents.pop();
            }
        }
    }

    /**
     * @param {number} ind 
     * @returns {number}
     */
    _incTokenInd(ind) {
        return (ind + 1) % this._buffer.length;
    }

    /**
     * Emulates custom overloaded token creation mechanisms for the JS runtime target
     * @param {number} tokenType 
     * @param {number} channel 
     * @param {string} text 
     */
    emitCustom(tokenType, channel = antlr4.Token.DEFAULT_CHANNEL, text = "") {
        // Calculate dynamic boundaries off character index locations
        const charIndex = this.charIndex;
        const start = charIndex - text.length;
        const stop = Math.max(start, charIndex - 1);

        const token = new antlr4.CommonToken(
            [this, this._input], 
            tokenType, 
            channel, 
            start, 
            stop
        );
        
        token.line = this.line;
        token.column = this.column;
        token.text = text;

        this.emit(token);
    }
}