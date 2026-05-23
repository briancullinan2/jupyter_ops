import antlr4 from 'antlr4';
// Note: GoParser is imported dynamically or referenced globally based on your layout.
// If bundled, it will be available via your unified namespace.

export default class GoParserBase extends antlr4.Parser {
    /**
     * @param {antlr4.TokenStream} input 
     */
    constructor(input) {
        super(input);
    }

    /**
     * Returns true if the current Token is a closing bracket (")" or "}")
     * @returns {boolean}
     */
    closingBracket() {
        const stream = this._input;
        const prevTokenType = stream.LA(1);
        
        // References tokens exported natively by your compiled GoParser module
        return prevTokenType === GoParser.R_CURLY || prevTokenType === GoParser.R_PAREN;
    }
}
