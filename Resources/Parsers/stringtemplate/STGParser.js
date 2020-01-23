"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stringtemplate/STGParser.g4 by ANTLR 4.7.3-SNAPSHOT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ATN_1 = require("antlr4ts/atn/ATN");
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var STGParser = /** @class */ (function (_super) {
    __extends(STGParser, _super);
    function STGParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(STGParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(STGParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return STGParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(STGParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "STGParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(STGParser.prototype, "ruleNames", {
        // @Override
        get: function () { return STGParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(STGParser.prototype, "serializedATN", {
        // @Override
        get: function () { return STGParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    STGParser.prototype.group = function () {
        var _localctx = new GroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, STGParser.RULE_group);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 23;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === STGParser.DELIMITERS) {
                    {
                        this.state = 22;
                        this.delimiters();
                    }
                }
                this.state = 26;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === STGParser.IMPORT) {
                    {
                        this.state = 25;
                        this.imports();
                    }
                }
                this.state = 30;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 30;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                            case 1:
                                {
                                    this.state = 28;
                                    this.template();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 29;
                                    this.dict();
                                }
                                break;
                        }
                    }
                    this.state = 32;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === STGParser.ID || _la === STGParser.AT);
                this.state = 34;
                this.match(STGParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    STGParser.prototype.delimiters = function () {
        var _localctx = new DelimitersContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, STGParser.RULE_delimiters);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 36;
                this.match(STGParser.DELIMITERS);
                this.state = 37;
                this.match(STGParser.STRING);
                this.state = 38;
                this.match(STGParser.COMMA);
                this.state = 39;
                this.match(STGParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    STGParser.prototype.imports = function () {
        var _localctx = new ImportsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, STGParser.RULE_imports);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 43;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 41;
                            this.match(STGParser.IMPORT);
                            this.state = 42;
                            this.match(STGParser.STRING);
                        }
                    }
                    this.state = 45;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === STGParser.IMPORT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    STGParser.prototype.template = function () {
        var _localctx = new TemplateContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, STGParser.RULE_template);
        var _la;
        try {
            this.state = 66;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 59;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case STGParser.AT:
                                {
                                    this.state = 47;
                                    this.match(STGParser.AT);
                                    this.state = 48;
                                    this.match(STGParser.ID);
                                    this.state = 49;
                                    this.match(STGParser.DOT);
                                    this.state = 50;
                                    this.match(STGParser.ID);
                                    this.state = 51;
                                    this.match(STGParser.LPAREN);
                                    this.state = 52;
                                    this.match(STGParser.RPAREN);
                                }
                                break;
                            case STGParser.ID:
                                {
                                    this.state = 53;
                                    this.match(STGParser.ID);
                                    this.state = 54;
                                    this.match(STGParser.LPAREN);
                                    this.state = 56;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === STGParser.ID) {
                                        {
                                            this.state = 55;
                                            this.formalArgs();
                                        }
                                    }
                                    this.state = 58;
                                    this.match(STGParser.RPAREN);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                        this.state = 61;
                        this.match(STGParser.TMPL_ASSIGN);
                        this.state = 62;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << STGParser.STRING) | (1 << STGParser.BIGSTRING) | (1 << STGParser.BIGSTRING_NO_NL))) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 63;
                        this.match(STGParser.ID);
                        this.state = 64;
                        this.match(STGParser.TMPL_ASSIGN);
                        this.state = 65;
                        this.match(STGParser.ID);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    STGParser.prototype.formalArgs = function () {
        var _localctx = new FormalArgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, STGParser.RULE_formalArgs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 68;
                this.formalArg();
                this.state = 73;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === STGParser.COMMA) {
                    {
                        {
                            this.state = 69;
                            this.match(STGParser.COMMA);
                            this.state = 70;
                            this.formalArg();
                        }
                    }
                    this.state = 75;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    STGParser.prototype.formalArg = function () {
        var _localctx = new FormalArgContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, STGParser.RULE_formalArg);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 76;
                this.match(STGParser.ID);
                this.state = 88;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                    case 1:
                        {
                            this.state = 77;
                            this.match(STGParser.ASSIGN);
                            this.state = 78;
                            this.match(STGParser.STRING);
                        }
                        break;
                    case 2:
                        {
                            this.state = 79;
                            this.match(STGParser.ASSIGN);
                            this.state = 80;
                            this.match(STGParser.ANON_TEMPLATE);
                        }
                        break;
                    case 3:
                        {
                            this.state = 81;
                            this.match(STGParser.ASSIGN);
                            this.state = 82;
                            this.match(STGParser.TRUE);
                        }
                        break;
                    case 4:
                        {
                            this.state = 83;
                            this.match(STGParser.ASSIGN);
                            this.state = 84;
                            this.match(STGParser.FALSE);
                        }
                        break;
                    case 5:
                        {
                            this.state = 85;
                            this.match(STGParser.ASSIGN);
                            this.state = 86;
                            this.match(STGParser.LBRACK);
                            this.state = 87;
                            this.match(STGParser.RBRACK);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    STGParser.prototype.dict = function () {
        var _localctx = new DictContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, STGParser.RULE_dict);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 90;
                this.match(STGParser.ID);
                this.state = 91;
                this.match(STGParser.TMPL_ASSIGN);
                this.state = 92;
                this.match(STGParser.LBRACK);
                this.state = 93;
                this.dictPairs();
                this.state = 94;
                this.match(STGParser.RBRACK);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    STGParser.prototype.dictPairs = function () {
        var _localctx = new DictPairsContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, STGParser.RULE_dictPairs);
        var _la;
        try {
            var _alt = void 0;
            this.state = 109;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case STGParser.STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 96;
                        this.keyValuePair();
                        this.state = 101;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 97;
                                        this.match(STGParser.COMMA);
                                        this.state = 98;
                                        this.keyValuePair();
                                    }
                                }
                            }
                            this.state = 103;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                        }
                        this.state = 106;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === STGParser.COMMA) {
                            {
                                this.state = 104;
                                this.match(STGParser.COMMA);
                                this.state = 105;
                                this.defaultValuePair();
                            }
                        }
                    }
                    break;
                case STGParser.DEFAULT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 108;
                        this.defaultValuePair();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    STGParser.prototype.keyValuePair = function () {
        var _localctx = new KeyValuePairContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, STGParser.RULE_keyValuePair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 111;
                this.match(STGParser.STRING);
                this.state = 112;
                this.match(STGParser.COLON);
                this.state = 113;
                this.keyValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    STGParser.prototype.defaultValuePair = function () {
        var _localctx = new DefaultValuePairContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, STGParser.RULE_defaultValuePair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 115;
                this.match(STGParser.DEFAULT);
                this.state = 116;
                this.match(STGParser.COLON);
                this.state = 117;
                this.keyValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    STGParser.prototype.keyValue = function () {
        var _localctx = new KeyValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, STGParser.RULE_keyValue);
        try {
            this.state = 128;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case STGParser.BIGSTRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 119;
                        this.match(STGParser.BIGSTRING);
                    }
                    break;
                case STGParser.BIGSTRING_NO_NL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 120;
                        this.match(STGParser.BIGSTRING_NO_NL);
                    }
                    break;
                case STGParser.ANON_TEMPLATE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 121;
                        this.match(STGParser.ANON_TEMPLATE);
                    }
                    break;
                case STGParser.STRING:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 122;
                        this.match(STGParser.STRING);
                    }
                    break;
                case STGParser.TRUE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 123;
                        this.match(STGParser.TRUE);
                    }
                    break;
                case STGParser.FALSE:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 124;
                        this.match(STGParser.FALSE);
                    }
                    break;
                case STGParser.LBRACK:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 125;
                        this.match(STGParser.LBRACK);
                        this.state = 126;
                        this.match(STGParser.RBRACK);
                    }
                    break;
                case STGParser.KEY:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 127;
                        this.match(STGParser.KEY);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(STGParser, "_ATN", {
        get: function () {
            if (!STGParser.__ATN) {
                STGParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(STGParser._serializedATN));
            }
            return STGParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    STGParser.DOC_COMMENT = 1;
    STGParser.BLOCK_COMMENT = 2;
    STGParser.LINE_COMMENT = 3;
    STGParser.TMPL_COMMENT = 4;
    STGParser.HORZ_WS = 5;
    STGParser.VERT_WS = 6;
    STGParser.ID = 7;
    STGParser.STRING = 8;
    STGParser.BIGSTRING = 9;
    STGParser.BIGSTRING_NO_NL = 10;
    STGParser.ANON_TEMPLATE = 11;
    STGParser.TMPL_ASSIGN = 12;
    STGParser.ASSIGN = 13;
    STGParser.DOT = 14;
    STGParser.COMMA = 15;
    STGParser.COLON = 16;
    STGParser.LPAREN = 17;
    STGParser.RPAREN = 18;
    STGParser.LBRACK = 19;
    STGParser.RBRACK = 20;
    STGParser.AT = 21;
    STGParser.TRUE = 22;
    STGParser.FALSE = 23;
    STGParser.ELLIPSIS = 24;
    STGParser.DELIMITERS = 25;
    STGParser.IMPORT = 26;
    STGParser.DEFAULT = 27;
    STGParser.KEY = 28;
    STGParser.VALUE = 29;
    STGParser.FIRST = 30;
    STGParser.LAST = 31;
    STGParser.REST = 32;
    STGParser.TRUNC = 33;
    STGParser.STRIP = 34;
    STGParser.TRIM = 35;
    STGParser.LENGTH = 36;
    STGParser.STRLEN = 37;
    STGParser.REVERSE = 38;
    STGParser.GROUP = 39;
    STGParser.WRAP = 40;
    STGParser.ANCHOR = 41;
    STGParser.SEPARATOR = 42;
    STGParser.RULE_group = 0;
    STGParser.RULE_delimiters = 1;
    STGParser.RULE_imports = 2;
    STGParser.RULE_template = 3;
    STGParser.RULE_formalArgs = 4;
    STGParser.RULE_formalArg = 5;
    STGParser.RULE_dict = 6;
    STGParser.RULE_dictPairs = 7;
    STGParser.RULE_keyValuePair = 8;
    STGParser.RULE_defaultValuePair = 9;
    STGParser.RULE_keyValue = 10;
    // tslint:disable:no-trailing-whitespace
    STGParser.ruleNames = [
        "group", "delimiters", "imports", "template", "formalArgs", "formalArg",
        "dict", "dictPairs", "keyValuePair", "defaultValuePair", "keyValue",
    ];
    STGParser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "'delimiters'", "'import'",
        "'default'", "'key'", "'value'", "'first'", "'last'", "'rest'", "'trunc'",
        "'strip'", "'trim'", "'length'", "'strlen'", "'reverse'", "'group'", "'wrap'",
        "'anchor'", "'separator'",
    ];
    STGParser._SYMBOLIC_NAMES = [
        undefined, "DOC_COMMENT", "BLOCK_COMMENT", "LINE_COMMENT", "TMPL_COMMENT",
        "HORZ_WS", "VERT_WS", "ID", "STRING", "BIGSTRING", "BIGSTRING_NO_NL",
        "ANON_TEMPLATE", "TMPL_ASSIGN", "ASSIGN", "DOT", "COMMA", "COLON", "LPAREN",
        "RPAREN", "LBRACK", "RBRACK", "AT", "TRUE", "FALSE", "ELLIPSIS", "DELIMITERS",
        "IMPORT", "DEFAULT", "KEY", "VALUE", "FIRST", "LAST", "REST", "TRUNC",
        "STRIP", "TRIM", "LENGTH", "STRLEN", "REVERSE", "GROUP", "WRAP", "ANCHOR",
        "SEPARATOR",
    ];
    STGParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(STGParser._LITERAL_NAMES, STGParser._SYMBOLIC_NAMES, []);
    STGParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03,\x85\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x05\x02" +
        "\x1A\n\x02\x03\x02\x05\x02\x1D\n\x02\x03\x02\x03\x02\x06\x02!\n\x02\r" +
        "\x02\x0E\x02\"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
        "\x03\x04\x03\x04\x06\x04.\n\x04\r\x04\x0E\x04/\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05;\n\x05\x03\x05" +
        "\x05\x05>\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05E\n\x05" +
        "\x03\x06\x03\x06\x03\x06\x07\x06J\n\x06\f\x06\x0E\x06M\v\x06\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x05\x07[\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t" +
        "\x03\t\x03\t\x07\tf\n\t\f\t\x0E\ti\v\t\x03\t\x03\t\x05\tm\n\t\x03\t\x05" +
        "\tp\n\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\x83\n\f\x03\f\x02\x02\x02" +
        "\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
        "\x02\x16\x02\x02\x03\x03\x02\n\f\x02\x91\x02\x19\x03\x02\x02\x02\x04&" +
        "\x03\x02\x02\x02\x06-\x03\x02\x02\x02\bD\x03\x02\x02\x02\nF\x03\x02\x02" +
        "\x02\fN\x03\x02\x02\x02\x0E\\\x03\x02\x02\x02\x10o\x03\x02\x02\x02\x12" +
        "q\x03\x02\x02\x02\x14u\x03\x02\x02\x02\x16\x82\x03\x02\x02\x02\x18\x1A" +
        "\x05\x04\x03\x02\x19\x18\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1C" +
        "\x03\x02\x02\x02\x1B\x1D\x05\x06\x04\x02\x1C\x1B\x03\x02\x02\x02\x1C\x1D" +
        "\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E!\x05\b\x05\x02\x1F!\x05\x0E" +
        "\b\x02 \x1E\x03\x02\x02\x02 \x1F\x03\x02\x02\x02!\"\x03\x02\x02\x02\"" +
        " \x03\x02\x02\x02\"#\x03\x02\x02\x02#$\x03\x02\x02\x02$%\x07\x02\x02\x03" +
        "%\x03\x03\x02\x02\x02&\'\x07\x1B\x02\x02\'(\x07\n\x02\x02()\x07\x11\x02" +
        "\x02)*\x07\n\x02\x02*\x05\x03\x02\x02\x02+,\x07\x1C\x02\x02,.\x07\n\x02" +
        "\x02-+\x03\x02\x02\x02./\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02" +
        "\x020\x07\x03\x02\x02\x0212\x07\x17\x02\x0223\x07\t\x02\x0234\x07\x10" +
        "\x02\x0245\x07\t\x02\x0256\x07\x13\x02\x026>\x07\x14\x02\x0278\x07\t\x02" +
        "\x028:\x07\x13\x02\x029;\x05\n\x06\x02:9\x03\x02\x02\x02:;\x03\x02\x02" +
        "\x02;<\x03\x02\x02\x02<>\x07\x14\x02\x02=1\x03\x02\x02\x02=7\x03\x02\x02" +
        "\x02>?\x03\x02\x02\x02?@\x07\x0E\x02\x02@E\t\x02\x02\x02AB\x07\t\x02\x02" +
        "BC\x07\x0E\x02\x02CE\x07\t\x02\x02D=\x03\x02\x02\x02DA\x03\x02\x02\x02" +
        "E\t\x03\x02\x02\x02FK\x05\f\x07\x02GH\x07\x11\x02\x02HJ\x05\f\x07\x02" +
        "IG\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02" +
        "L\v\x03\x02\x02\x02MK\x03\x02\x02\x02NZ\x07\t\x02\x02OP\x07\x0F\x02\x02" +
        "P[\x07\n\x02\x02QR\x07\x0F\x02\x02R[\x07\r\x02\x02ST\x07\x0F\x02\x02T" +
        "[\x07\x18\x02\x02UV\x07\x0F\x02\x02V[\x07\x19\x02\x02WX\x07\x0F\x02\x02" +
        "XY\x07\x15\x02\x02Y[\x07\x16\x02\x02ZO\x03\x02\x02\x02ZQ\x03\x02\x02\x02" +
        "ZS\x03\x02\x02\x02ZU\x03\x02\x02\x02ZW\x03\x02\x02\x02Z[\x03\x02\x02\x02" +
        "[\r\x03\x02\x02\x02\\]\x07\t\x02\x02]^\x07\x0E\x02\x02^_\x07\x15\x02\x02" +
        "_`\x05\x10\t\x02`a\x07\x16\x02\x02a\x0F\x03\x02\x02\x02bg\x05\x12\n\x02" +
        "cd\x07\x11\x02\x02df\x05\x12\n\x02ec\x03\x02\x02\x02fi\x03\x02\x02\x02" +
        "ge\x03\x02\x02\x02gh\x03\x02\x02\x02hl\x03\x02\x02\x02ig\x03\x02\x02\x02" +
        "jk\x07\x11\x02\x02km\x05\x14\v\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02" +
        "mp\x03\x02\x02\x02np\x05\x14\v\x02ob\x03\x02\x02\x02on\x03\x02\x02\x02" +
        "p\x11\x03\x02\x02\x02qr\x07\n\x02\x02rs\x07\x12\x02\x02st\x05\x16\f\x02" +
        "t\x13\x03\x02\x02\x02uv\x07\x1D\x02\x02vw\x07\x12\x02\x02wx\x05\x16\f" +
        "\x02x\x15\x03\x02\x02\x02y\x83\x07\v\x02\x02z\x83\x07\f\x02\x02{\x83\x07" +
        "\r\x02\x02|\x83\x07\n\x02\x02}\x83\x07\x18\x02\x02~\x83\x07\x19\x02\x02" +
        "\x7F\x80\x07\x15\x02\x02\x80\x83\x07\x16\x02\x02\x81\x83\x07\x1E\x02\x02" +
        "\x82y\x03\x02\x02\x02\x82z\x03\x02\x02\x02\x82{\x03\x02\x02\x02\x82|\x03" +
        "\x02\x02\x02\x82}\x03\x02\x02\x02\x82~\x03\x02\x02\x02\x82\x7F\x03\x02" +
        "\x02\x02\x82\x81\x03\x02\x02\x02\x83\x17\x03\x02\x02\x02\x10\x19\x1C " +
        "\"/:=DKZglo\x82";
    return STGParser;
}(Parser_1.Parser));
exports.STGParser = STGParser;
var GroupContext = /** @class */ (function (_super) {
    __extends(GroupContext, _super);
    function GroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GroupContext.prototype.EOF = function () { return this.getToken(STGParser.EOF, 0); };
    GroupContext.prototype.delimiters = function () {
        return this.tryGetRuleContext(0, DelimitersContext);
    };
    GroupContext.prototype.imports = function () {
        return this.tryGetRuleContext(0, ImportsContext);
    };
    GroupContext.prototype.template = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TemplateContext);
        }
        else {
            return this.getRuleContext(i, TemplateContext);
        }
    };
    GroupContext.prototype.dict = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DictContext);
        }
        else {
            return this.getRuleContext(i, DictContext);
        }
    };
    Object.defineProperty(GroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return STGParser.RULE_group; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GroupContext.prototype.enterRule = function (listener) {
        if (listener.enterGroup) {
            listener.enterGroup(this);
        }
    };
    // @Override
    GroupContext.prototype.exitRule = function (listener) {
        if (listener.exitGroup) {
            listener.exitGroup(this);
        }
    };
    // @Override
    GroupContext.prototype.accept = function (visitor) {
        if (visitor.visitGroup) {
            return visitor.visitGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GroupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GroupContext = GroupContext;
var DelimitersContext = /** @class */ (function (_super) {
    __extends(DelimitersContext, _super);
    function DelimitersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DelimitersContext.prototype.DELIMITERS = function () { return this.getToken(STGParser.DELIMITERS, 0); };
    DelimitersContext.prototype.STRING = function (i) {
        if (i === undefined) {
            return this.getTokens(STGParser.STRING);
        }
        else {
            return this.getToken(STGParser.STRING, i);
        }
    };
    DelimitersContext.prototype.COMMA = function () { return this.getToken(STGParser.COMMA, 0); };
    Object.defineProperty(DelimitersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return STGParser.RULE_delimiters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DelimitersContext.prototype.enterRule = function (listener) {
        if (listener.enterDelimiters) {
            listener.enterDelimiters(this);
        }
    };
    // @Override
    DelimitersContext.prototype.exitRule = function (listener) {
        if (listener.exitDelimiters) {
            listener.exitDelimiters(this);
        }
    };
    // @Override
    DelimitersContext.prototype.accept = function (visitor) {
        if (visitor.visitDelimiters) {
            return visitor.visitDelimiters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DelimitersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DelimitersContext = DelimitersContext;
var ImportsContext = /** @class */ (function (_super) {
    __extends(ImportsContext, _super);
    function ImportsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImportsContext.prototype.IMPORT = function (i) {
        if (i === undefined) {
            return this.getTokens(STGParser.IMPORT);
        }
        else {
            return this.getToken(STGParser.IMPORT, i);
        }
    };
    ImportsContext.prototype.STRING = function (i) {
        if (i === undefined) {
            return this.getTokens(STGParser.STRING);
        }
        else {
            return this.getToken(STGParser.STRING, i);
        }
    };
    Object.defineProperty(ImportsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return STGParser.RULE_imports; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImportsContext.prototype.enterRule = function (listener) {
        if (listener.enterImports) {
            listener.enterImports(this);
        }
    };
    // @Override
    ImportsContext.prototype.exitRule = function (listener) {
        if (listener.exitImports) {
            listener.exitImports(this);
        }
    };
    // @Override
    ImportsContext.prototype.accept = function (visitor) {
        if (visitor.visitImports) {
            return visitor.visitImports(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImportsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImportsContext = ImportsContext;
var TemplateContext = /** @class */ (function (_super) {
    __extends(TemplateContext, _super);
    function TemplateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TemplateContext.prototype.TMPL_ASSIGN = function () { return this.getToken(STGParser.TMPL_ASSIGN, 0); };
    TemplateContext.prototype.STRING = function () { return this.tryGetToken(STGParser.STRING, 0); };
    TemplateContext.prototype.BIGSTRING = function () { return this.tryGetToken(STGParser.BIGSTRING, 0); };
    TemplateContext.prototype.BIGSTRING_NO_NL = function () { return this.tryGetToken(STGParser.BIGSTRING_NO_NL, 0); };
    TemplateContext.prototype.AT = function () { return this.tryGetToken(STGParser.AT, 0); };
    TemplateContext.prototype.ID = function (i) {
        if (i === undefined) {
            return this.getTokens(STGParser.ID);
        }
        else {
            return this.getToken(STGParser.ID, i);
        }
    };
    TemplateContext.prototype.DOT = function () { return this.tryGetToken(STGParser.DOT, 0); };
    TemplateContext.prototype.LPAREN = function () { return this.tryGetToken(STGParser.LPAREN, 0); };
    TemplateContext.prototype.RPAREN = function () { return this.tryGetToken(STGParser.RPAREN, 0); };
    TemplateContext.prototype.formalArgs = function () {
        return this.tryGetRuleContext(0, FormalArgsContext);
    };
    Object.defineProperty(TemplateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return STGParser.RULE_template; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TemplateContext.prototype.enterRule = function (listener) {
        if (listener.enterTemplate) {
            listener.enterTemplate(this);
        }
    };
    // @Override
    TemplateContext.prototype.exitRule = function (listener) {
        if (listener.exitTemplate) {
            listener.exitTemplate(this);
        }
    };
    // @Override
    TemplateContext.prototype.accept = function (visitor) {
        if (visitor.visitTemplate) {
            return visitor.visitTemplate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TemplateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TemplateContext = TemplateContext;
var FormalArgsContext = /** @class */ (function (_super) {
    __extends(FormalArgsContext, _super);
    function FormalArgsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalArgsContext.prototype.formalArg = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormalArgContext);
        }
        else {
            return this.getRuleContext(i, FormalArgContext);
        }
    };
    FormalArgsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(STGParser.COMMA);
        }
        else {
            return this.getToken(STGParser.COMMA, i);
        }
    };
    Object.defineProperty(FormalArgsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return STGParser.RULE_formalArgs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalArgsContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalArgs) {
            listener.enterFormalArgs(this);
        }
    };
    // @Override
    FormalArgsContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalArgs) {
            listener.exitFormalArgs(this);
        }
    };
    // @Override
    FormalArgsContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalArgs) {
            return visitor.visitFormalArgs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalArgsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalArgsContext = FormalArgsContext;
var FormalArgContext = /** @class */ (function (_super) {
    __extends(FormalArgContext, _super);
    function FormalArgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalArgContext.prototype.ID = function () { return this.getToken(STGParser.ID, 0); };
    FormalArgContext.prototype.ASSIGN = function () { return this.tryGetToken(STGParser.ASSIGN, 0); };
    FormalArgContext.prototype.STRING = function () { return this.tryGetToken(STGParser.STRING, 0); };
    FormalArgContext.prototype.ANON_TEMPLATE = function () { return this.tryGetToken(STGParser.ANON_TEMPLATE, 0); };
    FormalArgContext.prototype.TRUE = function () { return this.tryGetToken(STGParser.TRUE, 0); };
    FormalArgContext.prototype.FALSE = function () { return this.tryGetToken(STGParser.FALSE, 0); };
    FormalArgContext.prototype.LBRACK = function () { return this.tryGetToken(STGParser.LBRACK, 0); };
    FormalArgContext.prototype.RBRACK = function () { return this.tryGetToken(STGParser.RBRACK, 0); };
    Object.defineProperty(FormalArgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return STGParser.RULE_formalArg; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalArgContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalArg) {
            listener.enterFormalArg(this);
        }
    };
    // @Override
    FormalArgContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalArg) {
            listener.exitFormalArg(this);
        }
    };
    // @Override
    FormalArgContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalArg) {
            return visitor.visitFormalArg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalArgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalArgContext = FormalArgContext;
var DictContext = /** @class */ (function (_super) {
    __extends(DictContext, _super);
    function DictContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DictContext.prototype.ID = function () { return this.getToken(STGParser.ID, 0); };
    DictContext.prototype.TMPL_ASSIGN = function () { return this.getToken(STGParser.TMPL_ASSIGN, 0); };
    DictContext.prototype.LBRACK = function () { return this.getToken(STGParser.LBRACK, 0); };
    DictContext.prototype.dictPairs = function () {
        return this.getRuleContext(0, DictPairsContext);
    };
    DictContext.prototype.RBRACK = function () { return this.getToken(STGParser.RBRACK, 0); };
    Object.defineProperty(DictContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return STGParser.RULE_dict; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DictContext.prototype.enterRule = function (listener) {
        if (listener.enterDict) {
            listener.enterDict(this);
        }
    };
    // @Override
    DictContext.prototype.exitRule = function (listener) {
        if (listener.exitDict) {
            listener.exitDict(this);
        }
    };
    // @Override
    DictContext.prototype.accept = function (visitor) {
        if (visitor.visitDict) {
            return visitor.visitDict(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DictContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DictContext = DictContext;
var DictPairsContext = /** @class */ (function (_super) {
    __extends(DictPairsContext, _super);
    function DictPairsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DictPairsContext.prototype.keyValuePair = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KeyValuePairContext);
        }
        else {
            return this.getRuleContext(i, KeyValuePairContext);
        }
    };
    DictPairsContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(STGParser.COMMA);
        }
        else {
            return this.getToken(STGParser.COMMA, i);
        }
    };
    DictPairsContext.prototype.defaultValuePair = function () {
        return this.tryGetRuleContext(0, DefaultValuePairContext);
    };
    Object.defineProperty(DictPairsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return STGParser.RULE_dictPairs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DictPairsContext.prototype.enterRule = function (listener) {
        if (listener.enterDictPairs) {
            listener.enterDictPairs(this);
        }
    };
    // @Override
    DictPairsContext.prototype.exitRule = function (listener) {
        if (listener.exitDictPairs) {
            listener.exitDictPairs(this);
        }
    };
    // @Override
    DictPairsContext.prototype.accept = function (visitor) {
        if (visitor.visitDictPairs) {
            return visitor.visitDictPairs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DictPairsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DictPairsContext = DictPairsContext;
var KeyValuePairContext = /** @class */ (function (_super) {
    __extends(KeyValuePairContext, _super);
    function KeyValuePairContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyValuePairContext.prototype.STRING = function () { return this.getToken(STGParser.STRING, 0); };
    KeyValuePairContext.prototype.COLON = function () { return this.getToken(STGParser.COLON, 0); };
    KeyValuePairContext.prototype.keyValue = function () {
        return this.getRuleContext(0, KeyValueContext);
    };
    Object.defineProperty(KeyValuePairContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return STGParser.RULE_keyValuePair; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyValuePairContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyValuePair) {
            listener.enterKeyValuePair(this);
        }
    };
    // @Override
    KeyValuePairContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyValuePair) {
            listener.exitKeyValuePair(this);
        }
    };
    // @Override
    KeyValuePairContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyValuePair) {
            return visitor.visitKeyValuePair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyValuePairContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyValuePairContext = KeyValuePairContext;
var DefaultValuePairContext = /** @class */ (function (_super) {
    __extends(DefaultValuePairContext, _super);
    function DefaultValuePairContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefaultValuePairContext.prototype.DEFAULT = function () { return this.getToken(STGParser.DEFAULT, 0); };
    DefaultValuePairContext.prototype.COLON = function () { return this.getToken(STGParser.COLON, 0); };
    DefaultValuePairContext.prototype.keyValue = function () {
        return this.getRuleContext(0, KeyValueContext);
    };
    Object.defineProperty(DefaultValuePairContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return STGParser.RULE_defaultValuePair; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefaultValuePairContext.prototype.enterRule = function (listener) {
        if (listener.enterDefaultValuePair) {
            listener.enterDefaultValuePair(this);
        }
    };
    // @Override
    DefaultValuePairContext.prototype.exitRule = function (listener) {
        if (listener.exitDefaultValuePair) {
            listener.exitDefaultValuePair(this);
        }
    };
    // @Override
    DefaultValuePairContext.prototype.accept = function (visitor) {
        if (visitor.visitDefaultValuePair) {
            return visitor.visitDefaultValuePair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefaultValuePairContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefaultValuePairContext = DefaultValuePairContext;
var KeyValueContext = /** @class */ (function (_super) {
    __extends(KeyValueContext, _super);
    function KeyValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyValueContext.prototype.BIGSTRING = function () { return this.tryGetToken(STGParser.BIGSTRING, 0); };
    KeyValueContext.prototype.BIGSTRING_NO_NL = function () { return this.tryGetToken(STGParser.BIGSTRING_NO_NL, 0); };
    KeyValueContext.prototype.ANON_TEMPLATE = function () { return this.tryGetToken(STGParser.ANON_TEMPLATE, 0); };
    KeyValueContext.prototype.STRING = function () { return this.tryGetToken(STGParser.STRING, 0); };
    KeyValueContext.prototype.TRUE = function () { return this.tryGetToken(STGParser.TRUE, 0); };
    KeyValueContext.prototype.FALSE = function () { return this.tryGetToken(STGParser.FALSE, 0); };
    KeyValueContext.prototype.LBRACK = function () { return this.tryGetToken(STGParser.LBRACK, 0); };
    KeyValueContext.prototype.RBRACK = function () { return this.tryGetToken(STGParser.RBRACK, 0); };
    KeyValueContext.prototype.KEY = function () { return this.tryGetToken(STGParser.KEY, 0); };
    Object.defineProperty(KeyValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return STGParser.RULE_keyValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyValueContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyValue) {
            listener.enterKeyValue(this);
        }
    };
    // @Override
    KeyValueContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyValue) {
            listener.exitKeyValue(this);
        }
    };
    // @Override
    KeyValueContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyValue) {
            return visitor.visitKeyValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyValueContext = KeyValueContext;
