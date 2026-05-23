import antlr4 from 'antlr4';
// TypeScriptParser will resolve natively via your global/Webpack bundle registry
// import TypeScriptParser from './TypeScriptParser.js';

export default class TypeScriptParserBase extends antlr4.Parser {
    /**
     * @param {antlr4.TokenStream} input 
     */
    constructor(input) {
        super(input);
    }

    /**
     * Short form for prev(String str)
     * @param {string} str
     * @returns {boolean}
     */
    p(str) {
        return this.prev(str);
    }

    /**
     * Whether the previous token value equals to @param str
     * @param {string} str
     * @returns {boolean}
     */
    prev(str) {
        return this._input.LT(-1).text === str;
    }

    /**
     * Short form for next(String str)
     * @param {string} str
     * @returns {boolean}
     */
    n(str) {
        return this.next(str);
    }

    /**
     * Whether the next token value equals to @param str
     * @param {string} str
     * @returns {boolean}
     */
    next(str) {
        return this._input.LT(1).text === str;
    }

    notLineTerminator() {
        return !this.here(TypeScriptParser.LineTerminator);
    }

    notOpenBraceAndNotFunction() {
        const nextTokenType = this._input.LT(1).type;
        return nextTokenType !== TypeScriptParser.OpenBrace && nextTokenType !== TypeScriptParser.Function_;
    }

    closeBrace() {
        return this._input.LT(1).type === TypeScriptParser.CloseBrace;
    }

    /**
     * Returns true if on the current index of the parser's token stream
     * a token of the given type exists on the HIDDEN channel.
     * @param {number} type 
     * @returns {boolean}
     */
    here(type) {
        // Fix: antlr4ts handles currentToken as a property getter field, 
        // vanilla antlr4 requires the method invocation wrapper getCurrentToken()
        const possibleIndexEosToken = this.getCurrentToken().tokenIndex - 1;
        const ahead = this._input.get(possibleIndexEosToken);

        return (ahead.channel === antlr4.Lexer.HIDDEN) && (ahead.type === type);
    }

    /**
     * Automatic Semicolon Insertion (ASI) evaluation lookahead analyzer
     * @returns {boolean}
     */
    lineTerminatorAhead() {
        // Fix: Remapped currentToken property down to getCurrentToken() method logic
        let possibleIndexEosToken = this.getCurrentToken().tokenIndex - 1;
        let ahead = this._input.get(possibleIndexEosToken);

        if (ahead.channel !== antlr4.Lexer.HIDDEN) {
            return false;
        }

        if (ahead.type === TypeScriptParser.LineTerminator) {
            return true;
        }

        if (ahead.type === TypeScriptParser.WhiteSpaces) {
            possibleIndexEosToken = this.getCurrentToken().tokenIndex - 2;
            ahead = this._input.get(possibleIndexEosToken);
        }

        const text = ahead.text;
        const type = ahead.type;

        return (type === TypeScriptParser.MultiLineComment && (text.includes("\r") || text.includes("\n"))) ||
               (type === TypeScriptParser.LineTerminator);
    }
}