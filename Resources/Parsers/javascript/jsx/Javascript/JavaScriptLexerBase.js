import antlr4 from 'antlr4';
// JavaScriptLexer will be resolved globally or via your Webpack namespace bundle bundle
// import JavaScriptLexer from './JavaScriptLexer.js';

export default class JavaScriptLexerBase extends antlr4.Lexer {
    /**
     * @param {antlr4.CharStream} input 
     */
    constructor(input) {
        super(input);
        
        // Java Stacks collapse directly down to native JavaScript arrays
        this.scopeStrictModes = [];
        this.lastToken = null;
        this.useStrictDefault = false;
        this.useStrictCurrent = false;
        this.templateDepth = 0;
    }

    IsStartOfFile() {
        return this.lastToken === null;
    }

    getStrictDefault() {
        return this.useStrictDefault;
    }

    setUseStrictDefault(value) {
        this.useStrictDefault = value;
        this.useStrictCurrent = value;
    }

    IsStrictMode() {
        return this.useStrictCurrent;
    }

    IsInTemplateString() {
        return this.templateDepth > 0;
    }

    /**
     * Tracks tokens on the default channel to negotiate Division vs Regex literal contexts
     * @returns {antlr4.Token}
     */
    nextToken() {
        const next = super.nextToken();

        if (next.channel === antlr4.Token.DEFAULT_CHANNEL) {
            // Keep track of the last token on the default channel.
            this.lastToken = next;
        }

        return next;
    }

    ProcessOpenBrace() {
        this.useStrictCurrent = (this.scopeStrictModes.length > 0 && this.scopeStrictModes[this.scopeStrictModes.length - 1]) 
            ? true 
            : this.useStrictDefault;
        this.scopeStrictModes.push(this.useStrictCurrent);
    }

    ProcessCloseBrace() {
        this.useStrictCurrent = this.scopeStrictModes.length > 0 
            ? this.scopeStrictModes.pop() 
            : this.useStrictDefault;
    }

    ProcessStringLiteral() {
        if (this.lastToken === null || this.lastToken.type === JavaScriptLexer.OpenBrace) {
            const text = this.text; // ANTLR4 JS runtime exposes token text via a native getter property
            if (text === '"use strict"' || text === "'use strict'") {
                if (this.scopeStrictModes.length > 0) {
                    this.scopeStrictModes.pop();
                }
                this.useStrictCurrent = true;
                this.scopeStrictModes.push(this.useStrictCurrent);
            }
        }
    }

    IncreaseTemplateDepth() {
        this.templateDepth++;
    }

    DecreaseTemplateDepth() {
        this.templateDepth--;
    }

    /**
     * Disambiguates forward-slash usages between Regular Expressions and division operators
     * @returns {boolean}
     */
    IsRegexPossible() {
        if (this.lastToken === null) {
            // No token has been produced yet: at the start of the input,
            // no division is possible, so a regex literal _is_ possible.
            return true;
        }
        
        switch (this.lastToken.type) {
            case JavaScriptLexer.Identifier:
            case JavaScriptLexer.NullLiteral:
            case JavaScriptLexer.BooleanLiteral:
            case JavaScriptLexer.This:
            case JavaScriptLexer.CloseBracket:
            case JavaScriptLexer.CloseParen:
            case JavaScriptLexer.OctalIntegerLiteral:
            case JavaScriptLexer.DecimalLiteral:
            case JavaScriptLexer.HexIntegerLiteral:
            case JavaScriptLexer.StringLiteral:
            case JavaScriptLexer.PlusPlus:
            case JavaScriptLexer.MinusMinus:
                // After any of the tokens above, no regex literal can follow.
                return false;
            default:
                // In all other cases, a regex literal _is_ possible.
                return true;
        }
    }
}