import antlr4 from 'antlr4';
// TypeScriptLexer will resolve natively via your global/Webpack bundle registry
// import TypeScriptLexer from './TypeScriptLexer.js';

export default class TypeScriptLexerBase extends antlr4.Lexer {
    /**
     * @param {antlr4.CharStream} input 
     */
    constructor(input) {
        super(input);

        this.scopeStrictModes = [];
        this.lastToken = null;
        this.useStrictDefault = false;
        this.useStrictCurrent = false;
        this.templateDepth = 0;
    }

    get UseStrictDefault() {
        return this.useStrictDefault;
    }

    set UseStrictDefault(value) {
        this.useStrictDefault = value;
        this.useStrictCurrent = value;
    }

    IsStartOfFile() {
        return this.lastToken === null;
    }

    IsStrictMode() {
        return this.useStrictCurrent;
    }

    IsInTemplateString() {
        return this.templateDepth > 0;
    }

    /**
     * Track tokens on the default channel to negotiate Division vs Regex literal contexts
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
            : this.UseStrictDefault;
        this.scopeStrictModes.push(this.useStrictCurrent);
    }

    ProcessCloseBrace() {
        this.useStrictCurrent = this.scopeStrictModes.length > 0 
            ? this.scopeStrictModes.pop() 
            : this.UseStrictDefault;
    }

    ProcessStringLiteral() {
        if (this.lastToken === null || this.lastToken.type === TypeScriptLexer.OpenBrace) {
            const text = this.text; // ANTLR4 JS runtime getter property abstraction map
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
            case TypeScriptLexer.Identifier:
            case TypeScriptLexer.NullLiteral:
            case TypeScriptLexer.BooleanLiteral:
            case TypeScriptLexer.This:
            case TypeScriptLexer.CloseBracket:
            case TypeScriptLexer.CloseParen:
            case TypeScriptLexer.OctalIntegerLiteral:
            case TypeScriptLexer.DecimalLiteral:
            case TypeScriptLexer.HexIntegerLiteral:
            case TypeScriptLexer.StringLiteral:
            case TypeScriptLexer.PlusPlus:
            case TypeScriptLexer.MinusMinus:
                // After any of the tokens above, no regex literal can follow.
                return false;
            default:
                // In all other cases, a regex literal _is_ possible.
                return true;
        }
    }
}