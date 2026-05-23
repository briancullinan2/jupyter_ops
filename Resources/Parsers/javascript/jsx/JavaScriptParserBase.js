import antlr4 from 'antlr4';
// JavaScriptParser will be resolved globally or via your Webpack bundle ecosystem
// import JavaScriptParser from './JavaScriptParser.js';

export default class JavaScriptParserBase extends antlr4.Parser {
    /**
     * @param {antlr4.TokenStream} input 
     */
    constructor(input) {
        super(input);
        
        // JSX Tag stack tracking
        this._tagNames = [];
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
        return !this.here(JavaScriptParser.LineTerminator);
    }

    notOpenBraceAndNotFunction() {
        const nextTokenType = this._input.LT(1).type;
        return nextTokenType !== JavaScriptParser.OpenBrace && nextTokenType !== JavaScriptParser.Function_;
    }

    closeBrace() {
        return this._input.LT(1).type === JavaScriptParser.CloseBrace;
    }

    /**
     * Returns true if on the current index of the parser's token stream
     * a token of the given type exists on the HIDDEN channel.
     * @param {number} type 
     * @returns {boolean}
     */
    here(type) {
        const possibleIndexEosToken = this.getCurrentToken().tokenIndex - 1;
        const ahead = this._input.get(possibleIndexEosToken);

        // Lexer.HIDDEN maps to antlr4.Lexer.HIDDEN in the JS runtime target
        return (ahead.channel === antlr4.Lexer.HIDDEN) && (ahead.type === type);
    }

    /**
     * Automatic Semicolon Insertion (ASI) evaluation lookahead analyzer
     * @returns {boolean}
     */
    lineTerminatorAhead() {
        let possibleIndexEosToken = this.getCurrentToken().tokenIndex - 1;
        let ahead = this._input.get(possibleIndexEosToken);

        if (ahead.channel !== antlr4.Lexer.HIDDEN) {
            return false;
        }

        if (ahead.type === JavaScriptParser.LineTerminator) {
            return true;
        }

        if (ahead.type === JavaScriptParser.WhiteSpaces) {
            possibleIndexEosToken = this.getCurrentToken().tokenIndex - 2;
            ahead = this._input.get(possibleIndexEosToken);
        }

        const text = ahead.text;
        const type = ahead.type;

        return (type === JavaScriptParser.MultiLineComment && (text.includes("\r") || text.includes("\n"))) ||
               (type === JavaScriptParser.LineTerminator);
    }

    // --- JSX Tag Lifecycle Hook Blocks ---
    
    /**
     * @param {string} tagName 
     */
    pushHtmlTagName(tagName) {
        this._tagNames.push(tagName);
    }

    /**
     * @param {string} tagName 
     * @returns {boolean}
     */
    popHtmlTagName(tagName) {
        if (this._tagNames.length === 0) return false;
        
        const popped = this._tagNames.pop();
        // JavaScript case-insensitive comparison framework emulation
        return tagName.toLowerCase() === popped.toLowerCase();
    }
}