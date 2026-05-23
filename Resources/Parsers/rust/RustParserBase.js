import antlr4 from 'antlr4';

export default class RustParserBase extends antlr4.Parser {
    /**
     * @param {antlr4.TokenStream} input 
     */
    constructor(input) {
        super(input);
    }

    /**
     * Token validation lookahead helper
     * @param {string} expect 
     * @returns {boolean}
     */
    next(expect) {
        // Convert to character integer code to match underlying token types
        const expectCode = typeof expect === 'string' ? expect.charCodeAt(0) : expect;
        return this._input.LA(1) === expectCode;
    }
}