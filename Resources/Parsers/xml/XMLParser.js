"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/xml/XMLParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var XMLParser = /** @class */ (function (_super) {
    __extends(XMLParser, _super);
    function XMLParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(XMLParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(XMLParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return XMLParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XMLParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "XMLParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XMLParser.prototype, "ruleNames", {
        // @Override
        get: function () { return XMLParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XMLParser.prototype, "serializedATN", {
        // @Override
        get: function () { return XMLParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    XMLParser.prototype.document = function () {
        var _localctx = new DocumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, XMLParser.RULE_document);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 17;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XMLParser.XMLDeclOpen) {
                    {
                        this.state = 16;
                        this.prolog();
                    }
                }
                this.state = 22;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XMLParser.COMMENT) | (1 << XMLParser.SEA_WS) | (1 << XMLParser.PI))) !== 0)) {
                    {
                        {
                            this.state = 19;
                            this.misc();
                        }
                    }
                    this.state = 24;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 25;
                this.element();
                this.state = 29;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XMLParser.COMMENT) | (1 << XMLParser.SEA_WS) | (1 << XMLParser.PI))) !== 0)) {
                    {
                        {
                            this.state = 26;
                            this.misc();
                        }
                    }
                    this.state = 31;
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
    XMLParser.prototype.prolog = function () {
        var _localctx = new PrologContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, XMLParser.RULE_prolog);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 32;
                this.match(XMLParser.XMLDeclOpen);
                this.state = 36;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === XMLParser.Name) {
                    {
                        {
                            this.state = 33;
                            this.attribute();
                        }
                    }
                    this.state = 38;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 39;
                this.match(XMLParser.SPECIAL_CLOSE);
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
    XMLParser.prototype.content = function () {
        var _localctx = new ContentContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, XMLParser.RULE_content);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 42;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === XMLParser.SEA_WS || _la === XMLParser.TEXT) {
                    {
                        this.state = 41;
                        this.chardata();
                    }
                }
                this.state = 56;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 49;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case XMLParser.OPEN:
                                        {
                                            this.state = 44;
                                            this.element();
                                        }
                                        break;
                                    case XMLParser.EntityRef:
                                    case XMLParser.CharRef:
                                        {
                                            this.state = 45;
                                            this.reference();
                                        }
                                        break;
                                    case XMLParser.CDATA:
                                        {
                                            this.state = 46;
                                            this.match(XMLParser.CDATA);
                                        }
                                        break;
                                    case XMLParser.PI:
                                        {
                                            this.state = 47;
                                            this.match(XMLParser.PI);
                                        }
                                        break;
                                    case XMLParser.COMMENT:
                                        {
                                            this.state = 48;
                                            this.match(XMLParser.COMMENT);
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 52;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === XMLParser.SEA_WS || _la === XMLParser.TEXT) {
                                    {
                                        this.state = 51;
                                        this.chardata();
                                    }
                                }
                            }
                        }
                    }
                    this.state = 58;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
    XMLParser.prototype.element = function () {
        var _localctx = new ElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, XMLParser.RULE_element);
        var _la;
        try {
            this.state = 83;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 59;
                        this.match(XMLParser.OPEN);
                        this.state = 60;
                        this.match(XMLParser.Name);
                        this.state = 64;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === XMLParser.Name) {
                            {
                                {
                                    this.state = 61;
                                    this.attribute();
                                }
                            }
                            this.state = 66;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 67;
                        this.match(XMLParser.CLOSE);
                        this.state = 68;
                        this.content();
                        this.state = 69;
                        this.match(XMLParser.OPEN);
                        this.state = 70;
                        this.match(XMLParser.SLASH);
                        this.state = 71;
                        this.match(XMLParser.Name);
                        this.state = 72;
                        this.match(XMLParser.CLOSE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 74;
                        this.match(XMLParser.OPEN);
                        this.state = 75;
                        this.match(XMLParser.Name);
                        this.state = 79;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === XMLParser.Name) {
                            {
                                {
                                    this.state = 76;
                                    this.attribute();
                                }
                            }
                            this.state = 81;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 82;
                        this.match(XMLParser.SLASH_CLOSE);
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
    XMLParser.prototype.reference = function () {
        var _localctx = new ReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, XMLParser.RULE_reference);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 85;
                _la = this._input.LA(1);
                if (!(_la === XMLParser.EntityRef || _la === XMLParser.CharRef)) {
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
    XMLParser.prototype.attribute = function () {
        var _localctx = new AttributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, XMLParser.RULE_attribute);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 87;
                this.match(XMLParser.Name);
                this.state = 88;
                this.match(XMLParser.EQUALS);
                this.state = 89;
                this.match(XMLParser.STRING);
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
    XMLParser.prototype.chardata = function () {
        var _localctx = new ChardataContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, XMLParser.RULE_chardata);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 91;
                _la = this._input.LA(1);
                if (!(_la === XMLParser.SEA_WS || _la === XMLParser.TEXT)) {
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
    XMLParser.prototype.misc = function () {
        var _localctx = new MiscContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, XMLParser.RULE_misc);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 93;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XMLParser.COMMENT) | (1 << XMLParser.SEA_WS) | (1 << XMLParser.PI))) !== 0))) {
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
    Object.defineProperty(XMLParser, "_ATN", {
        get: function () {
            if (!XMLParser.__ATN) {
                XMLParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(XMLParser._serializedATN));
            }
            return XMLParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    XMLParser.COMMENT = 1;
    XMLParser.CDATA = 2;
    XMLParser.DTD = 3;
    XMLParser.EntityRef = 4;
    XMLParser.CharRef = 5;
    XMLParser.SEA_WS = 6;
    XMLParser.OPEN = 7;
    XMLParser.XMLDeclOpen = 8;
    XMLParser.TEXT = 9;
    XMLParser.CLOSE = 10;
    XMLParser.SPECIAL_CLOSE = 11;
    XMLParser.SLASH_CLOSE = 12;
    XMLParser.SLASH = 13;
    XMLParser.EQUALS = 14;
    XMLParser.STRING = 15;
    XMLParser.Name = 16;
    XMLParser.S = 17;
    XMLParser.PI = 18;
    XMLParser.RULE_document = 0;
    XMLParser.RULE_prolog = 1;
    XMLParser.RULE_content = 2;
    XMLParser.RULE_element = 3;
    XMLParser.RULE_reference = 4;
    XMLParser.RULE_attribute = 5;
    XMLParser.RULE_chardata = 6;
    XMLParser.RULE_misc = 7;
    // tslint:disable:no-trailing-whitespace
    XMLParser.ruleNames = [
        "document", "prolog", "content", "element", "reference", "attribute",
        "chardata", "misc",
    ];
    XMLParser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "'<'", undefined, undefined, "'>'", undefined, "'/>'", "'/'", "'='",
    ];
    XMLParser._SYMBOLIC_NAMES = [
        undefined, "COMMENT", "CDATA", "DTD", "EntityRef", "CharRef", "SEA_WS",
        "OPEN", "XMLDeclOpen", "TEXT", "CLOSE", "SPECIAL_CLOSE", "SLASH_CLOSE",
        "SLASH", "EQUALS", "STRING", "Name", "S", "PI",
    ];
    XMLParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(XMLParser._LITERAL_NAMES, XMLParser._SYMBOLIC_NAMES, []);
    XMLParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14b\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x05\x02\x14\n\x02\x03\x02\x07\x02\x17" +
        "\n\x02\f\x02\x0E\x02\x1A\v\x02\x03\x02\x03\x02\x07\x02\x1E\n\x02\f\x02" +
        "\x0E\x02!\v\x02\x03\x03\x03\x03\x07\x03%\n\x03\f\x03\x0E\x03(\v\x03\x03" +
        "\x03\x03\x03\x03\x04\x05\x04-\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x05\x044\n\x04\x03\x04\x05\x047\n\x04\x07\x049\n\x04\f\x04\x0E\x04" +
        "<\v\x04\x03\x05\x03\x05\x03\x05\x07\x05A\n\x05\f\x05\x0E\x05D\v\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x07\x05P\n\x05\f\x05\x0E\x05S\v\x05\x03\x05\x05\x05V\n\x05\x03\x06" +
        "\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t" +
        "\x02\x02\x02\n\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
        "\x02\x05\x03\x02\x06\x07\x04\x02\b\b\v\v\x05\x02\x03\x03\b\b\x14\x14\x02" +
        "g\x02\x13\x03\x02\x02\x02\x04\"\x03\x02\x02\x02\x06,\x03\x02\x02\x02\b" +
        "U\x03\x02\x02\x02\nW\x03\x02\x02\x02\fY\x03\x02\x02\x02\x0E]\x03\x02\x02" +
        "\x02\x10_\x03\x02\x02\x02\x12\x14\x05\x04\x03\x02\x13\x12\x03\x02\x02" +
        "\x02\x13\x14\x03\x02\x02\x02\x14\x18\x03\x02\x02\x02\x15\x17\x05\x10\t" +
        "\x02\x16\x15\x03\x02\x02\x02\x17\x1A\x03\x02\x02\x02\x18\x16\x03\x02\x02" +
        "\x02\x18\x19\x03\x02\x02\x02\x19\x1B\x03\x02\x02\x02\x1A\x18\x03\x02\x02" +
        "\x02\x1B\x1F\x05\b\x05\x02\x1C\x1E\x05\x10\t\x02\x1D\x1C\x03\x02\x02\x02" +
        "\x1E!\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \x03" +
        "\x03\x02\x02\x02!\x1F\x03\x02\x02\x02\"&\x07\n\x02\x02#%\x05\f\x07\x02" +
        "$#\x03\x02\x02\x02%(\x03\x02\x02\x02&$\x03\x02\x02\x02&\'\x03\x02\x02" +
        "\x02\')\x03\x02\x02\x02(&\x03\x02\x02\x02)*\x07\r\x02\x02*\x05\x03\x02" +
        "\x02\x02+-\x05\x0E\b\x02,+\x03\x02\x02\x02,-\x03\x02\x02\x02-:\x03\x02" +
        "\x02\x02.4\x05\b\x05\x02/4\x05\n\x06\x0204\x07\x04\x02\x0214\x07\x14\x02" +
        "\x0224\x07\x03\x02\x023.\x03\x02\x02\x023/\x03\x02\x02\x0230\x03\x02\x02" +
        "\x0231\x03\x02\x02\x0232\x03\x02\x02\x0246\x03\x02\x02\x0257\x05\x0E\b" +
        "\x0265\x03\x02\x02\x0267\x03\x02\x02\x0279\x03\x02\x02\x0283\x03\x02\x02" +
        "\x029<\x03\x02\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;\x07\x03\x02" +
        "\x02\x02<:\x03\x02\x02\x02=>\x07\t\x02\x02>B\x07\x12\x02\x02?A\x05\f\x07" +
        "\x02@?\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02" +
        "\x02CE\x03\x02\x02\x02DB\x03\x02\x02\x02EF\x07\f\x02\x02FG\x05\x06\x04" +
        "\x02GH\x07\t\x02\x02HI\x07\x0F\x02\x02IJ\x07\x12\x02\x02JK\x07\f\x02\x02" +
        "KV\x03\x02\x02\x02LM\x07\t\x02\x02MQ\x07\x12\x02\x02NP\x05\f\x07\x02O" +
        "N\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03\x02\x02\x02QR\x03\x02\x02\x02" +
        "RT\x03\x02\x02\x02SQ\x03\x02\x02\x02TV\x07\x0E\x02\x02U=\x03\x02\x02\x02" +
        "UL\x03\x02\x02\x02V\t\x03\x02\x02\x02WX\t\x02\x02\x02X\v\x03\x02\x02\x02" +
        "YZ\x07\x12\x02\x02Z[\x07\x10\x02\x02[\\\x07\x11\x02\x02\\\r\x03\x02\x02" +
        "\x02]^\t\x03\x02\x02^\x0F\x03\x02\x02\x02_`\t\x04\x02\x02`\x11\x03\x02" +
        "\x02\x02\r\x13\x18\x1F&,36:BQU";
    return XMLParser;
}(Parser_1.Parser));
exports.XMLParser = XMLParser;
var DocumentContext = /** @class */ (function (_super) {
    __extends(DocumentContext, _super);
    function DocumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DocumentContext.prototype.element = function () {
        return this.getRuleContext(0, ElementContext);
    };
    DocumentContext.prototype.prolog = function () {
        return this.tryGetRuleContext(0, PrologContext);
    };
    DocumentContext.prototype.misc = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MiscContext);
        }
        else {
            return this.getRuleContext(i, MiscContext);
        }
    };
    Object.defineProperty(DocumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return XMLParser.RULE_document; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DocumentContext.prototype.enterRule = function (listener) {
        if (listener.enterDocument) {
            listener.enterDocument(this);
        }
    };
    // @Override
    DocumentContext.prototype.exitRule = function (listener) {
        if (listener.exitDocument) {
            listener.exitDocument(this);
        }
    };
    // @Override
    DocumentContext.prototype.accept = function (visitor) {
        if (visitor.visitDocument) {
            return visitor.visitDocument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DocumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DocumentContext = DocumentContext;
var PrologContext = /** @class */ (function (_super) {
    __extends(PrologContext, _super);
    function PrologContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrologContext.prototype.XMLDeclOpen = function () { return this.getToken(XMLParser.XMLDeclOpen, 0); };
    PrologContext.prototype.SPECIAL_CLOSE = function () { return this.getToken(XMLParser.SPECIAL_CLOSE, 0); };
    PrologContext.prototype.attribute = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AttributeContext);
        }
        else {
            return this.getRuleContext(i, AttributeContext);
        }
    };
    Object.defineProperty(PrologContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return XMLParser.RULE_prolog; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrologContext.prototype.enterRule = function (listener) {
        if (listener.enterProlog) {
            listener.enterProlog(this);
        }
    };
    // @Override
    PrologContext.prototype.exitRule = function (listener) {
        if (listener.exitProlog) {
            listener.exitProlog(this);
        }
    };
    // @Override
    PrologContext.prototype.accept = function (visitor) {
        if (visitor.visitProlog) {
            return visitor.visitProlog(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrologContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrologContext = PrologContext;
var ContentContext = /** @class */ (function (_super) {
    __extends(ContentContext, _super);
    function ContentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ContentContext.prototype.chardata = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ChardataContext);
        }
        else {
            return this.getRuleContext(i, ChardataContext);
        }
    };
    ContentContext.prototype.element = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementContext);
        }
        else {
            return this.getRuleContext(i, ElementContext);
        }
    };
    ContentContext.prototype.reference = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ReferenceContext);
        }
        else {
            return this.getRuleContext(i, ReferenceContext);
        }
    };
    ContentContext.prototype.CDATA = function (i) {
        if (i === undefined) {
            return this.getTokens(XMLParser.CDATA);
        }
        else {
            return this.getToken(XMLParser.CDATA, i);
        }
    };
    ContentContext.prototype.PI = function (i) {
        if (i === undefined) {
            return this.getTokens(XMLParser.PI);
        }
        else {
            return this.getToken(XMLParser.PI, i);
        }
    };
    ContentContext.prototype.COMMENT = function (i) {
        if (i === undefined) {
            return this.getTokens(XMLParser.COMMENT);
        }
        else {
            return this.getToken(XMLParser.COMMENT, i);
        }
    };
    Object.defineProperty(ContentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return XMLParser.RULE_content; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ContentContext.prototype.enterRule = function (listener) {
        if (listener.enterContent) {
            listener.enterContent(this);
        }
    };
    // @Override
    ContentContext.prototype.exitRule = function (listener) {
        if (listener.exitContent) {
            listener.exitContent(this);
        }
    };
    // @Override
    ContentContext.prototype.accept = function (visitor) {
        if (visitor.visitContent) {
            return visitor.visitContent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ContentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ContentContext = ContentContext;
var ElementContext = /** @class */ (function (_super) {
    __extends(ElementContext, _super);
    function ElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementContext.prototype.OPEN = function (i) {
        if (i === undefined) {
            return this.getTokens(XMLParser.OPEN);
        }
        else {
            return this.getToken(XMLParser.OPEN, i);
        }
    };
    ElementContext.prototype.Name = function (i) {
        if (i === undefined) {
            return this.getTokens(XMLParser.Name);
        }
        else {
            return this.getToken(XMLParser.Name, i);
        }
    };
    ElementContext.prototype.CLOSE = function (i) {
        if (i === undefined) {
            return this.getTokens(XMLParser.CLOSE);
        }
        else {
            return this.getToken(XMLParser.CLOSE, i);
        }
    };
    ElementContext.prototype.content = function () {
        return this.tryGetRuleContext(0, ContentContext);
    };
    ElementContext.prototype.SLASH = function () { return this.tryGetToken(XMLParser.SLASH, 0); };
    ElementContext.prototype.attribute = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AttributeContext);
        }
        else {
            return this.getRuleContext(i, AttributeContext);
        }
    };
    ElementContext.prototype.SLASH_CLOSE = function () { return this.tryGetToken(XMLParser.SLASH_CLOSE, 0); };
    Object.defineProperty(ElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return XMLParser.RULE_element; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementContext.prototype.enterRule = function (listener) {
        if (listener.enterElement) {
            listener.enterElement(this);
        }
    };
    // @Override
    ElementContext.prototype.exitRule = function (listener) {
        if (listener.exitElement) {
            listener.exitElement(this);
        }
    };
    // @Override
    ElementContext.prototype.accept = function (visitor) {
        if (visitor.visitElement) {
            return visitor.visitElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementContext = ElementContext;
var ReferenceContext = /** @class */ (function (_super) {
    __extends(ReferenceContext, _super);
    function ReferenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReferenceContext.prototype.EntityRef = function () { return this.tryGetToken(XMLParser.EntityRef, 0); };
    ReferenceContext.prototype.CharRef = function () { return this.tryGetToken(XMLParser.CharRef, 0); };
    Object.defineProperty(ReferenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return XMLParser.RULE_reference; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReferenceContext.prototype.enterRule = function (listener) {
        if (listener.enterReference) {
            listener.enterReference(this);
        }
    };
    // @Override
    ReferenceContext.prototype.exitRule = function (listener) {
        if (listener.exitReference) {
            listener.exitReference(this);
        }
    };
    // @Override
    ReferenceContext.prototype.accept = function (visitor) {
        if (visitor.visitReference) {
            return visitor.visitReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReferenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReferenceContext = ReferenceContext;
var AttributeContext = /** @class */ (function (_super) {
    __extends(AttributeContext, _super);
    function AttributeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributeContext.prototype.Name = function () { return this.getToken(XMLParser.Name, 0); };
    AttributeContext.prototype.EQUALS = function () { return this.getToken(XMLParser.EQUALS, 0); };
    AttributeContext.prototype.STRING = function () { return this.getToken(XMLParser.STRING, 0); };
    Object.defineProperty(AttributeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return XMLParser.RULE_attribute; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributeContext.prototype.enterRule = function (listener) {
        if (listener.enterAttribute) {
            listener.enterAttribute(this);
        }
    };
    // @Override
    AttributeContext.prototype.exitRule = function (listener) {
        if (listener.exitAttribute) {
            listener.exitAttribute(this);
        }
    };
    // @Override
    AttributeContext.prototype.accept = function (visitor) {
        if (visitor.visitAttribute) {
            return visitor.visitAttribute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributeContext = AttributeContext;
var ChardataContext = /** @class */ (function (_super) {
    __extends(ChardataContext, _super);
    function ChardataContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ChardataContext.prototype.TEXT = function () { return this.tryGetToken(XMLParser.TEXT, 0); };
    ChardataContext.prototype.SEA_WS = function () { return this.tryGetToken(XMLParser.SEA_WS, 0); };
    Object.defineProperty(ChardataContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return XMLParser.RULE_chardata; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ChardataContext.prototype.enterRule = function (listener) {
        if (listener.enterChardata) {
            listener.enterChardata(this);
        }
    };
    // @Override
    ChardataContext.prototype.exitRule = function (listener) {
        if (listener.exitChardata) {
            listener.exitChardata(this);
        }
    };
    // @Override
    ChardataContext.prototype.accept = function (visitor) {
        if (visitor.visitChardata) {
            return visitor.visitChardata(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ChardataContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ChardataContext = ChardataContext;
var MiscContext = /** @class */ (function (_super) {
    __extends(MiscContext, _super);
    function MiscContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MiscContext.prototype.COMMENT = function () { return this.tryGetToken(XMLParser.COMMENT, 0); };
    MiscContext.prototype.PI = function () { return this.tryGetToken(XMLParser.PI, 0); };
    MiscContext.prototype.SEA_WS = function () { return this.tryGetToken(XMLParser.SEA_WS, 0); };
    Object.defineProperty(MiscContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return XMLParser.RULE_misc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MiscContext.prototype.enterRule = function (listener) {
        if (listener.enterMisc) {
            listener.enterMisc(this);
        }
    };
    // @Override
    MiscContext.prototype.exitRule = function (listener) {
        if (listener.exitMisc) {
            listener.exitMisc(this);
        }
    };
    // @Override
    MiscContext.prototype.accept = function (visitor) {
        if (visitor.visitMisc) {
            return visitor.visitMisc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MiscContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MiscContext = MiscContext;
