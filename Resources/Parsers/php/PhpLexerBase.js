/*
 PHP grammar.

 The MIT License (MIT).
 Copyright (c) 2015-2017, Ivan Kochurkin (kvanttt@gmail.com), Positive
 Technologies.
 Copyright (c) 2019, Thierry Marianne (thierry.marianne@weaving-the-web.org)

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
 NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import antlr4 from 'antlr4';

export default class PhpLexerBase extends antlr4.Lexer {
    /**
     * @param {antlr4.CharStream} input 
     */
    constructor(input) {
        super(input);
        
        this.AspTags = true;
        this._scriptTag = false;
        this._styleTag = false;
        this._heredocIdentifier = undefined;
        this._prevTokenType = 0;
        this._htmlNameText = undefined;
        this._phpScript = false;
        this._insideString = false;
    }

    /**
     * Intercepts and transforms HTML / PHP raw boundary transitions
     * @returns {antlr4.Token}
     */
    nextToken() {
        let token = super.nextToken();

        if (token.type === this.PHPEnd || token.type === this.PHPEndSingleLineComment) {
            if (this._mode === this.SingleLineCommentMode) {
                // SingleLineCommentMode for such allowed syntax:
                // // <?php echo "Hello world"; // comment ?>
                this.popMode();
            }
            this.popMode();

            if (token.text === "</script>") {
                this._phpScript = false;
                token.type = this.HtmlScriptClose;
            } else {
                // Add semicolon to the end of statement if it is absent.
                // For example: <?php echo "Hello world" ?>
                if (this._prevTokenType === this.SemiColon || this._prevTokenType === this.Colon || this._prevTokenType === this.OpenCurlyBracket || this._prevTokenType === this.CloseCurlyBracket) {
                    token = super.nextToken();
                } else {
                    // FIX: Standardized constructor invocation mapping (removed the 'type=' bug)
                    token = new antlr4.CommonToken([this, this._input], this.SemiColon, antlr4.Token.DEFAULT_CHANNEL);
                    token.text = ';';
                }
            }
        }

        else if (token.type === this.HtmlName) {
            this._htmlNameText = token.text;
        }

        else if (token.type === this.HtmlDoubleQuoteString) {
            if (token.text === "php" && this._htmlNameText === "language") {
                this._phpScript = true;
            }
        }

        else if (this._mode === this.HereDoc) {
            // Heredoc and Nowdoc syntax support
            if (token.type === this.StartHereDoc || token.type === this.StartNowDoc) {
                this._heredocIdentifier = token.text.slice(3).trim().replace(/\'$/, '');
            }

            if (token.type === this.HereDocText) {
                if (this.CheckHeredocEnd(token.text)) {
                    this.popMode();
                    const heredocIdentifier = this.GetHeredocEnd(token.text);
                    if (token.text.trim().endsWith(';')) {
                        token = new antlr4.CommonToken([this, this._input], this.SemiColon, antlr4.Token.DEFAULT_CHANNEL);
                        token.text = `${heredocIdentifier};\n`;
                    } else {
                        token = super.nextToken();
                        token.text = `${heredocIdentifier}\n;`;
                    }
                }
            }
        }

        else if (this._mode === this.PHP) {
            if (this.channel === antlr4.Lexer.HIDDEN) {
                this._prevTokenType = token.type;
            }
        }

        return token;
    }

    GetHeredocEnd(text) {
        return text.trim().replace(/\;$/, "");
    }

    CheckHeredocEnd(text) {
        return this.GetHeredocEnd(text) === this._heredocIdentifier;
    }

    IsNewLineOrStart(pos) {
        return this._input.LA(pos) <= 0 || 
               this._input.LA(pos) === '\r'.charCodeAt(0) ||
               this._input.LA(pos) === '\n'.charCodeAt(0);
    }

    PushModeOnHtmlClose() {
        this.popMode();
        if (this._scriptTag) {
            if (!this._phpScript) {
                this.pushMode(this.SCRIPT);
            } else {
                this.pushMode(this.PHP);
            }
            this._scriptTag = false;
        } else if (this._styleTag) {
            this.pushMode(this.STYLE);
            this._styleTag = false;
        }
    }

    HasAspTags() {
        return this.AspTags;
    }

    HasPhpScriptTag() {
        return this._phpScript;
    }

    PopModeOnCurlyBracketClose() {
        if (this._insideString) {
            this._insideString = false;
            this.skip(); // FIX: Evaluated raw execution property hook statement cleanly
            this.popMode();
        }
    }

    ShouldPushHereDocMode(pos) {
        return this._input.LA(pos) === '\r'.charCodeAt(0) || this._input.LA(pos) === '\n'.charCodeAt(0);
    }

    IsCurlyDollar(pos) {
        return this._input.LA(pos) === '$'.charCodeAt(0);
    }

    SetInsideString() {
        this._insideString = true;
    }
}