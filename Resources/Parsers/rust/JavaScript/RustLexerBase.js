import antlr4 from 'antlr4';
// RustLexer is resolved globally or via your Webpack bundler layout
// import RustLexer from './RustLexer.js';

export default class RustLexerBase extends antlr4.Lexer {
    /**
     * @param {antlr4.CharStream} input 
     */
    constructor(input) {
        super(input);
        
        this.lt1 = null;
        this.lt2 = null;
    }

    /**
     * Tracks a two-token sliding lookback history window on the default channel
     * @returns {antlr4.Token}
     */
    nextToken() {
        const next = super.nextToken();

        if (next.channel === antlr4.Token.DEFAULT_CHANNEL) {
            this.lt2 = this.lt1;
            this.lt1 = next;
        }

        return next;
    }

    /**
     * Start Of File Validation Predicate
     * @returns {boolean}
     */
    SOF() {
        return this._input.LA(-1) <= 0;
    }

    /**
     * Character validation lookahead helper
     * @param {string} expect 
     * @returns {boolean}
     */
    next(expect) {
        // Convert input integer character code to a string to match comparison schemas
        const expectCode = expect.charCodeAt(0);
        return this._input.LA(1) === expectCode;
    }

    /**
     * Resolves trailing dot ambiguity contexts (e.g. '1.', '1.f32', '1.method()')
     * @returns {boolean}
     */
    floatDotPossible() {
        const nextCharInt = this._input.LA(1);
        const nextChar = String.fromCharCode(nextCharInt);

        // Block dot, underscores, or identifier letters immediately following a float definition
        if (nextChar === '.' || nextChar === '_') return false;
        
        if (nextChar === 'f') {
            // Handle explicit type suffixes: 1.f32
            if (String.fromCharCode(this._input.LA(2)) === '3' && String.fromCharCode(this._input.LA(3)) === '2') {
                return true;
            }
            // Handle explicit type suffixes: 1.f64
            if (String.fromCharCode(this._input.LA(2)) === '6' && String.fromCharCode(this._input.LA(3)) === '4') {
                return true;
            }
            return false;
        }

        // Replicate character code range checks safely inside JavaScript bounds
        if (nextCharInt >= 97 && nextCharInt <= 122) return false; // 'a' through 'z'
        if (nextCharInt >= 65 && nextCharInt <= 90)  return false; // 'A' through 'Z'
        
        return true;
    }

    /**
     * Validates whether token pairings allow compiling a literal value block
     * @returns {boolean}
     */
    floatLiteralPossible() {
        if (this.lt1 === null || this.lt2 === null) return true;
        if (this.lt1.type !== RustLexer.DOT) return true;
        
        switch (this.lt2.type) {
            case RustLexer.CHAR_LITERAL:
            case RustLexer.STRING_LITERAL:
            case RustLexer.RAW_STRING_LITERAL:
            case RustLexer.BYTE_LITERAL:
            case RustLexer.BYTE_STRING_LITERAL:
            case RustLexer.RAW_BYTE_STRING_LITERAL:
            case RustLexer.INTEGER_LITERAL:
            case RustLexer.DEC_LITERAL:
            case RustLexer.HEX_LITERAL:
            case RustLexer.OCT_LITERAL:
            case RustLexer.BIN_LITERAL:

            case RustLexer.KW_SUPER:
            case RustLexer.KW_SELFVALUE:
            case RustLexer.KW_SELFTYPE:
            case RustLexer.KW_CRATE:
            case RustLexer.KW_DOLLARCRATE:

            case RustLexer.GT:
            case RustLexer.RCURLYBRACE:
            case RustLexer.RSQUAREBRACKET:
            case RustLexer.RPAREN:

            case RustLexer.KW_AWAIT:

            case RustLexer.NON_KEYWORD_IDENTIFIER:
            case RustLexer.RAW_IDENTIFIER:
            case RustLexer.KW_MACRORULES:
                return false;
            default:
                return true;
        }
    }
}