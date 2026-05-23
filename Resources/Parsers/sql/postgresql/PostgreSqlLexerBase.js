import antlr4 from 'antlr4';
// PostgreSQLLexer is resolved globally or via your Webpack bundler layout
// import PostgreSQLLexer from './PostgreSQLLexer.js';

// Shared global queue space across lexer instances matching C#'s static semantics
const tags = [];

export default class PostgreSQLLexerBase extends antlr4.Lexer {
    /**
     * @param {antlr4.CharStream} input 
     */
    constructor(input) {
        super(input);
    }

    /**
     * Pushes a dollar-quoted tag name into the tracking queue
     */
    pushTag() {
        tags.push(this.text);
    }

    /**
     * Validates if the current token text matches the front tag in the queue
     * @returns {boolean}
     */
    isTag() {
        if (tags.length === 0) return false;
        return this.text === tags[0];
    }

    /**
     * Dequeues the tracking tag upon finding the matching close block target
     */
    popTag() {
        if (tags.length > 0) {
            tags.shift(); // shift() matches standard Queue.Dequeue FIFO behavior
        }
    }

    UnterminatedBlockCommentDebugAssert() {
        // Assert condition: EOF evaluation check mirror
        if (this._input.LA(1) !== antlr4.Token.EOF) {
            console.assert(false, "Unterminated block comment assert failed.");
        }
    }

    /**
     * @param {number|string} c 
     * @returns {boolean}
     */
    checkLA(c) {
        const targetCode = typeof c === 'string' ? c.charCodeAt(0) : c;
        return this._input.LA(1) !== targetCode;
    }

    /**
     * Validates if the last matched character is an alphabet letter
     * @returns {boolean}
     */
    charIsLetter() {
        const lastCharInt = this._input.LA(-1);
        if (lastCharInt <= 0) return false;
        
        const lastChar = String.fromCharCode(lastCharInt);
        // Regex validation matching unicode alphabet definitions safely
        return /^[a-zA-Z\p{L}]$/u.test(lastChar);
    }

    /**
     * Rewinds the stream position pointer by two elements to gracefully fallback
     */
    HandleNumericFail() {
        this._input.seek(this._input.index - 2);
        this.type = PostgreSQLLexer.Integral;
    }

    HandleLessLessGreaterGreater() {
        const currentText = this.text;
        if (currentText === "<<") this.type = PostgreSQLLexer.LESS_LESS;
        if (currentText === ">>") this.type = PostgreSQLLexer.GREATER_GREATER;
    }

    /**
     * Handles look-back boundary checks for surrogate-paired Unicode characters
     * @returns {boolean}
     */
    CheckIfUtf32Letter() {
        const charCode2 = this._input.LA(-2);
        const charCode1 = this._input.LA(-1);

        if (charCode2 <= 0 || charCode1 <= 0) return false;

        // Reconstruct high and low surrogate points natively from the input integer states
        const char2 = String.fromCharCode(charCode2);
        const char1 = String.fromCharCode(charCode1);
        const combinedString = char2 + char1;

        return /^\p{L}$/u.test(combinedString.charAt(0));
    }
}