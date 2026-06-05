/*
PHP grammar.
The MIT License (MIT).
Copyright (c) 2015-2019, Ivan Kochurkin (kvanttt@gmail.com), Positive Technologies.
Copyright (c) 2019, Thierry Marianne (thierry.marianne@weaving-the-web.org)
*/

import antlr4 from 'antlr4';

export default class PhpLexerBase extends antlr4.Lexer {
    constructor(input) {
        super(input);
        
        // Target property state definitions
        this.AspTags = true;
        this._scriptTag = false;
        this._styleTag = false;
        this._heredocIdentifier = null;
        this._prevTokenType = 0;
        this._htmlNameText = null;
        this._phpScript = false;
        this._insideString = false;
    }

    nextToken() {
        // Pull token reference using standard antlr4 prototype execution
        let token = super.nextToken();

        // Note: The generated Lexer file will bind rule names directly to the instance or prototype.
        // We use 'this' context dynamically to grab type definitions safely.
        if (token.type === this.PHPEnd || token.type === this.PHPEndSingleLineComment) {
            if (this._mode === this.SingleLineCommentMode) {
                this.popMode(); // exit from SingleLineComment mode.
            }
            this.popMode(); // exit from PHP mode.

            if (token.text === "</script>") {
                this._phpScript = false;
                token.type = this.HtmlScriptClose;
            } else {
                // Add semicolon to the end of statement if it is absent.
                if (this._prevTokenType === this.SemiColon || 
                    this._prevTokenType === this.Colon || 
                    this._prevTokenType === this.OpenCurlyBracket || 
                    this._prevTokenType === this.CloseCurlyBracket) {
                    
                    token.channel = this.SkipChannel;
                } else {
                    token.type = this.SemiColon;
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
            switch (token.type) {
                case this.StartHereDoc:
                case this.StartNowDoc:
                    // Equivalent to text.substring(3).trim().replace("'","")
                    this._heredocIdentifier = token.text.substring(3).trim().replace(/'/g, "");
                    break;

                case this.HereDocText:
                    if (this.CheckHeredocEnd(token.text)) {
                        this.popMode();

                        const heredocIdentifier = this.GetHeredocIdentifier(token.text);
                        if (token.text.trim().endsWith(";")) {
                            // Correct ANTLR4 JS Token factory instantiation matching original CommonToken schema
                            token = new antlr4.Token();
                            token.type = this.SemiColon;
                            token.text = heredocIdentifier + ";\n";
                        } else {
                            token = super.nextToken();
                            token.text = heredocIdentifier + "\n;";
                        }
                    }
                    break;
            }
        } 
        else if (this._mode === this.PHP) {
            if (this._channel !== antlr4.Token.HIDDEN_CHANNEL) {
                this._prevTokenType = token.type;
            }
        }

        return token;
    }

    GetHeredocIdentifier(text) {
        const trimmedText = text.trim();
        const semi = (trimmedText.length > 0) ? (trimmedText.charAt(trimmedText.length - 1) === ';') : false;
        return semi ? trimmedText.substring(0, trimmedText.length - 1) : trimmedText;
    }

    CheckHeredocEnd(text) {
        return this.GetHeredocIdentifier(text) === this._heredocIdentifier;
    }

    IsNewLineOrStart(pos) {
        const charCode = this._input.LA(pos);
        // <= 0 handles EOF indicators safely in ANTLR
        return charCode <= 0 || charCode === 13 || charCode === 10; // \r and \n character codes
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
            this.channel = this.SkipChannel;
            this.popMode();
        }
    }

    ShouldPushHereDocMode(pos) {
        const charCode = this._input.LA(pos);
        return charCode === 13 || charCode === 10;
    }

    IsCurlyDollar(pos) {
        return this._input.LA(pos) === 36; // '$'.charCodeAt(0)
    }

    SetInsideString() {
        this._insideString = true;
    }
}

