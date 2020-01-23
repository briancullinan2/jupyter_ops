"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/ply/ply.g4 by ANTLR 4.7.3-SNAPSHOT
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
var plyParser = /** @class */ (function (_super) {
    __extends(plyParser, _super);
    function plyParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(plyParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(plyParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return plyParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(plyParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "ply.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(plyParser.prototype, "ruleNames", {
        // @Override
        get: function () { return plyParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(plyParser.prototype, "serializedATN", {
        // @Override
        get: function () { return plyParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    plyParser.prototype.ply = function () {
        var _localctx = new PlyContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, plyParser.RULE_ply);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 32;
                this.header();
                this.state = 34;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                    case 1:
                        {
                            this.state = 33;
                            this.vertices();
                        }
                        break;
                }
                this.state = 37;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === plyParser.NUMBER) {
                    {
                        this.state = 36;
                        this.faces();
                    }
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
    plyParser.prototype.header = function () {
        var _localctx = new HeaderContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, plyParser.RULE_header);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 39;
                this.plydeclaration();
                this.state = 40;
                this.format();
                this.state = 45;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === plyParser.T__3 || _la === plyParser.T__4) {
                    {
                        this.state = 43;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case plyParser.T__3:
                                {
                                    this.state = 41;
                                    this.element();
                                }
                                break;
                            case plyParser.T__4:
                                {
                                    this.state = 42;
                                    this.property();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 47;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 48;
                this.end_header();
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
    plyParser.prototype.end_header = function () {
        var _localctx = new End_headerContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, plyParser.RULE_end_header);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 50;
                this.match(plyParser.T__0);
                this.state = 51;
                this.match(plyParser.EOL);
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
    plyParser.prototype.format = function () {
        var _localctx = new FormatContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, plyParser.RULE_format);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 53;
                this.match(plyParser.T__1);
                this.state = 54;
                this.match(plyParser.T__2);
                this.state = 55;
                this.match(plyParser.EOL);
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
    plyParser.prototype.element = function () {
        var _localctx = new ElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, plyParser.RULE_element);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 57;
                this.match(plyParser.T__3);
                this.state = 58;
                this.string();
                this.state = 59;
                this.number();
                this.state = 60;
                this.match(plyParser.EOL);
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
    plyParser.prototype.property = function () {
        var _localctx = new PropertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, plyParser.RULE_property);
        try {
            this.state = 64;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 62;
                        this.scalarproperty();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 63;
                        this.listproperty();
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
    plyParser.prototype.scalarproperty = function () {
        var _localctx = new ScalarpropertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, plyParser.RULE_scalarproperty);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 66;
                this.match(plyParser.T__4);
                this.state = 67;
                this.type();
                this.state = 68;
                this.string();
                this.state = 69;
                this.match(plyParser.EOL);
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
    plyParser.prototype.listproperty = function () {
        var _localctx = new ListpropertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, plyParser.RULE_listproperty);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 71;
                this.match(plyParser.T__4);
                this.state = 72;
                this.match(plyParser.T__5);
                this.state = 73;
                this.type();
                this.state = 74;
                this.type();
                this.state = 75;
                this.string();
                this.state = 76;
                this.match(plyParser.EOL);
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
    plyParser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, plyParser.RULE_type);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 78;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << plyParser.T__6) | (1 << plyParser.T__7) | (1 << plyParser.T__8) | (1 << plyParser.T__9) | (1 << plyParser.T__10) | (1 << plyParser.T__11) | (1 << plyParser.T__12) | (1 << plyParser.T__13) | (1 << plyParser.T__14) | (1 << plyParser.T__15) | (1 << plyParser.T__16))) !== 0))) {
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
    plyParser.prototype.plydeclaration = function () {
        var _localctx = new PlydeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, plyParser.RULE_plydeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 80;
                this.match(plyParser.T__17);
                this.state = 81;
                this.match(plyParser.EOL);
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
    plyParser.prototype.vertices = function () {
        var _localctx = new VerticesContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, plyParser.RULE_vertices);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 84;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 83;
                                    this.vertex();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 86;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
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
    plyParser.prototype.faces = function () {
        var _localctx = new FacesContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, plyParser.RULE_faces);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 89;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 88;
                            this.face();
                        }
                    }
                    this.state = 91;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === plyParser.NUMBER);
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
    plyParser.prototype.vertex = function () {
        var _localctx = new VertexContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, plyParser.RULE_vertex);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 93;
                this.number();
                this.state = 94;
                this.number();
                this.state = 95;
                this.number();
                this.state = 96;
                this.match(plyParser.EOL);
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
    plyParser.prototype.face = function () {
        var _localctx = new FaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, plyParser.RULE_face);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 98;
                this.number();
                this.state = 99;
                this.number();
                this.state = 100;
                this.number();
                this.state = 102;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 101;
                            this.number();
                        }
                    }
                    this.state = 104;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === plyParser.NUMBER);
                this.state = 106;
                this.match(plyParser.EOL);
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
    plyParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, plyParser.RULE_number);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 108;
                this.match(plyParser.NUMBER);
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
    plyParser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, plyParser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 110;
                this.match(plyParser.STRING);
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
    Object.defineProperty(plyParser, "_ATN", {
        get: function () {
            if (!plyParser.__ATN) {
                plyParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(plyParser._serializedATN));
            }
            return plyParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    plyParser.T__0 = 1;
    plyParser.T__1 = 2;
    plyParser.T__2 = 3;
    plyParser.T__3 = 4;
    plyParser.T__4 = 5;
    plyParser.T__5 = 6;
    plyParser.T__6 = 7;
    plyParser.T__7 = 8;
    plyParser.T__8 = 9;
    plyParser.T__9 = 10;
    plyParser.T__10 = 11;
    plyParser.T__11 = 12;
    plyParser.T__12 = 13;
    plyParser.T__13 = 14;
    plyParser.T__14 = 15;
    plyParser.T__15 = 16;
    plyParser.T__16 = 17;
    plyParser.T__17 = 18;
    plyParser.STRING = 19;
    plyParser.NUMBER = 20;
    plyParser.COMMENT = 21;
    plyParser.EOL = 22;
    plyParser.WS = 23;
    plyParser.RULE_ply = 0;
    plyParser.RULE_header = 1;
    plyParser.RULE_end_header = 2;
    plyParser.RULE_format = 3;
    plyParser.RULE_element = 4;
    plyParser.RULE_property = 5;
    plyParser.RULE_scalarproperty = 6;
    plyParser.RULE_listproperty = 7;
    plyParser.RULE_type = 8;
    plyParser.RULE_plydeclaration = 9;
    plyParser.RULE_vertices = 10;
    plyParser.RULE_faces = 11;
    plyParser.RULE_vertex = 12;
    plyParser.RULE_face = 13;
    plyParser.RULE_number = 14;
    plyParser.RULE_string = 15;
    // tslint:disable:no-trailing-whitespace
    plyParser.ruleNames = [
        "ply", "header", "end_header", "format", "element", "property", "scalarproperty",
        "listproperty", "type", "plydeclaration", "vertices", "faces", "vertex",
        "face", "number", "string",
    ];
    plyParser._LITERAL_NAMES = [
        undefined, "'end_header'", "'format'", "'ascii 1.0'", "'element'", "'property'",
        "'list'", "'char'", "'uchar'", "'short'", "'ushort'", "'int'", "'uint'",
        "'float'", "'double'", "'float32'", "'uint8'", "'int32'", "'ply'",
    ];
    plyParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, "STRING", "NUMBER",
        "COMMENT", "EOL", "WS",
    ];
    plyParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(plyParser._LITERAL_NAMES, plyParser._SYMBOLIC_NAMES, []);
    plyParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x19s\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02\x05" +
        "\x02%\n\x02\x03\x02\x05\x02(\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07" +
        "\x03.\n\x03\f\x03\x0E\x031\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
        "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x03\x07\x03\x07\x05\x07C\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03" +
        "\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x06" +
        "\fW\n\f\r\f\x0E\fX\x03\r\x06\r\\\n\r\r\r\x0E\r]\x03\x0E\x03\x0E\x03\x0E" +
        "\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0Fi\n\x0F\r\x0F" +
        "\x0E\x0Fj\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x02" +
        "\x02\x02\x12\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
        "\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\x02\x03" +
        "\x03\x02\t\x13\x02j\x02\"\x03\x02\x02\x02\x04)\x03\x02\x02\x02\x064\x03" +
        "\x02\x02\x02\b7\x03\x02\x02\x02\n;\x03\x02\x02\x02\fB\x03\x02\x02\x02" +
        "\x0ED\x03\x02\x02\x02\x10I\x03\x02\x02\x02\x12P\x03\x02\x02\x02\x14R\x03" +
        "\x02\x02\x02\x16V\x03\x02\x02\x02\x18[\x03\x02\x02\x02\x1A_\x03\x02\x02" +
        "\x02\x1Cd\x03\x02\x02\x02\x1En\x03\x02\x02\x02 p\x03\x02\x02\x02\"$\x05" +
        "\x04\x03\x02#%\x05\x16\f\x02$#\x03\x02\x02\x02$%\x03\x02\x02\x02%\'\x03" +
        "\x02\x02\x02&(\x05\x18\r\x02\'&\x03\x02\x02\x02\'(\x03\x02\x02\x02(\x03" +
        "\x03\x02\x02\x02)*\x05\x14\v\x02*/\x05\b\x05\x02+.\x05\n\x06\x02,.\x05" +
        "\f\x07\x02-+\x03\x02\x02\x02-,\x03\x02\x02\x02.1\x03\x02\x02\x02/-\x03" +
        "\x02\x02\x02/0\x03\x02\x02\x0202\x03\x02\x02\x021/\x03\x02\x02\x0223\x05" +
        "\x06\x04\x023\x05\x03\x02\x02\x0245\x07\x03\x02\x0256\x07\x18\x02\x02" +
        "6\x07\x03\x02\x02\x0278\x07\x04\x02\x0289\x07\x05\x02\x029:\x07\x18\x02" +
        "\x02:\t\x03\x02\x02\x02;<\x07\x06\x02\x02<=\x05 \x11\x02=>\x05\x1E\x10" +
        "\x02>?\x07\x18\x02\x02?\v\x03\x02\x02\x02@C\x05\x0E\b\x02AC\x05\x10\t" +
        "\x02B@\x03\x02\x02\x02BA\x03\x02\x02\x02C\r\x03\x02\x02\x02DE\x07\x07" +
        "\x02\x02EF\x05\x12\n\x02FG\x05 \x11\x02GH\x07\x18\x02\x02H\x0F\x03\x02" +
        "\x02\x02IJ\x07\x07\x02\x02JK\x07\b\x02\x02KL\x05\x12\n\x02LM\x05\x12\n" +
        "\x02MN\x05 \x11\x02NO\x07\x18\x02\x02O\x11\x03\x02\x02\x02PQ\t\x02\x02" +
        "\x02Q\x13\x03\x02\x02\x02RS\x07\x14\x02\x02ST\x07\x18\x02\x02T\x15\x03" +
        "\x02\x02\x02UW\x05\x1A\x0E\x02VU\x03\x02\x02\x02WX\x03\x02\x02\x02XV\x03" +
        "\x02\x02\x02XY\x03\x02\x02\x02Y\x17\x03\x02\x02\x02Z\\\x05\x1C\x0F\x02" +
        "[Z\x03\x02\x02\x02\\]\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02" +
        "\x02^\x19\x03\x02\x02\x02_`\x05\x1E\x10\x02`a\x05\x1E\x10\x02ab\x05\x1E" +
        "\x10\x02bc\x07\x18\x02\x02c\x1B\x03\x02\x02\x02de\x05\x1E\x10\x02ef\x05" +
        "\x1E\x10\x02fh\x05\x1E\x10\x02gi\x05\x1E\x10\x02hg\x03\x02\x02\x02ij\x03" +
        "\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x07" +
        "\x18\x02\x02m\x1D\x03\x02\x02\x02no\x07\x16\x02\x02o\x1F\x03\x02\x02\x02" +
        "pq\x07\x15\x02\x02q!\x03\x02\x02\x02\n$\'-/BX]j";
    return plyParser;
}(Parser_1.Parser));
exports.plyParser = plyParser;
var PlyContext = /** @class */ (function (_super) {
    __extends(PlyContext, _super);
    function PlyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PlyContext.prototype.header = function () {
        return this.getRuleContext(0, HeaderContext);
    };
    PlyContext.prototype.vertices = function () {
        return this.tryGetRuleContext(0, VerticesContext);
    };
    PlyContext.prototype.faces = function () {
        return this.tryGetRuleContext(0, FacesContext);
    };
    Object.defineProperty(PlyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return plyParser.RULE_ply; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PlyContext.prototype.enterRule = function (listener) {
        if (listener.enterPly) {
            listener.enterPly(this);
        }
    };
    // @Override
    PlyContext.prototype.exitRule = function (listener) {
        if (listener.exitPly) {
            listener.exitPly(this);
        }
    };
    // @Override
    PlyContext.prototype.accept = function (visitor) {
        if (visitor.visitPly) {
            return visitor.visitPly(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PlyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PlyContext = PlyContext;
var HeaderContext = /** @class */ (function (_super) {
    __extends(HeaderContext, _super);
    function HeaderContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HeaderContext.prototype.plydeclaration = function () {
        return this.getRuleContext(0, PlydeclarationContext);
    };
    HeaderContext.prototype.format = function () {
        return this.getRuleContext(0, FormatContext);
    };
    HeaderContext.prototype.end_header = function () {
        return this.getRuleContext(0, End_headerContext);
    };
    HeaderContext.prototype.element = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementContext);
        }
        else {
            return this.getRuleContext(i, ElementContext);
        }
    };
    HeaderContext.prototype.property = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }
        else {
            return this.getRuleContext(i, PropertyContext);
        }
    };
    Object.defineProperty(HeaderContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return plyParser.RULE_header; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HeaderContext.prototype.enterRule = function (listener) {
        if (listener.enterHeader) {
            listener.enterHeader(this);
        }
    };
    // @Override
    HeaderContext.prototype.exitRule = function (listener) {
        if (listener.exitHeader) {
            listener.exitHeader(this);
        }
    };
    // @Override
    HeaderContext.prototype.accept = function (visitor) {
        if (visitor.visitHeader) {
            return visitor.visitHeader(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HeaderContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HeaderContext = HeaderContext;
var End_headerContext = /** @class */ (function (_super) {
    __extends(End_headerContext, _super);
    function End_headerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    End_headerContext.prototype.EOL = function () { return this.getToken(plyParser.EOL, 0); };
    Object.defineProperty(End_headerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return plyParser.RULE_end_header; },
        enumerable: true,
        configurable: true
    });
    // @Override
    End_headerContext.prototype.enterRule = function (listener) {
        if (listener.enterEnd_header) {
            listener.enterEnd_header(this);
        }
    };
    // @Override
    End_headerContext.prototype.exitRule = function (listener) {
        if (listener.exitEnd_header) {
            listener.exitEnd_header(this);
        }
    };
    // @Override
    End_headerContext.prototype.accept = function (visitor) {
        if (visitor.visitEnd_header) {
            return visitor.visitEnd_header(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return End_headerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.End_headerContext = End_headerContext;
var FormatContext = /** @class */ (function (_super) {
    __extends(FormatContext, _super);
    function FormatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormatContext.prototype.EOL = function () { return this.getToken(plyParser.EOL, 0); };
    Object.defineProperty(FormatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return plyParser.RULE_format; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormatContext.prototype.enterRule = function (listener) {
        if (listener.enterFormat) {
            listener.enterFormat(this);
        }
    };
    // @Override
    FormatContext.prototype.exitRule = function (listener) {
        if (listener.exitFormat) {
            listener.exitFormat(this);
        }
    };
    // @Override
    FormatContext.prototype.accept = function (visitor) {
        if (visitor.visitFormat) {
            return visitor.visitFormat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormatContext = FormatContext;
var ElementContext = /** @class */ (function (_super) {
    __extends(ElementContext, _super);
    function ElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    ElementContext.prototype.number = function () {
        return this.getRuleContext(0, NumberContext);
    };
    ElementContext.prototype.EOL = function () { return this.getToken(plyParser.EOL, 0); };
    Object.defineProperty(ElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return plyParser.RULE_element; },
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
var PropertyContext = /** @class */ (function (_super) {
    __extends(PropertyContext, _super);
    function PropertyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyContext.prototype.scalarproperty = function () {
        return this.tryGetRuleContext(0, ScalarpropertyContext);
    };
    PropertyContext.prototype.listproperty = function () {
        return this.tryGetRuleContext(0, ListpropertyContext);
    };
    Object.defineProperty(PropertyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return plyParser.RULE_property; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyContext.prototype.enterRule = function (listener) {
        if (listener.enterProperty) {
            listener.enterProperty(this);
        }
    };
    // @Override
    PropertyContext.prototype.exitRule = function (listener) {
        if (listener.exitProperty) {
            listener.exitProperty(this);
        }
    };
    // @Override
    PropertyContext.prototype.accept = function (visitor) {
        if (visitor.visitProperty) {
            return visitor.visitProperty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyContext = PropertyContext;
var ScalarpropertyContext = /** @class */ (function (_super) {
    __extends(ScalarpropertyContext, _super);
    function ScalarpropertyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScalarpropertyContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    ScalarpropertyContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    ScalarpropertyContext.prototype.EOL = function () { return this.getToken(plyParser.EOL, 0); };
    Object.defineProperty(ScalarpropertyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return plyParser.RULE_scalarproperty; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScalarpropertyContext.prototype.enterRule = function (listener) {
        if (listener.enterScalarproperty) {
            listener.enterScalarproperty(this);
        }
    };
    // @Override
    ScalarpropertyContext.prototype.exitRule = function (listener) {
        if (listener.exitScalarproperty) {
            listener.exitScalarproperty(this);
        }
    };
    // @Override
    ScalarpropertyContext.prototype.accept = function (visitor) {
        if (visitor.visitScalarproperty) {
            return visitor.visitScalarproperty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScalarpropertyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScalarpropertyContext = ScalarpropertyContext;
var ListpropertyContext = /** @class */ (function (_super) {
    __extends(ListpropertyContext, _super);
    function ListpropertyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListpropertyContext.prototype.type = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    };
    ListpropertyContext.prototype.string = function () {
        return this.getRuleContext(0, StringContext);
    };
    ListpropertyContext.prototype.EOL = function () { return this.getToken(plyParser.EOL, 0); };
    Object.defineProperty(ListpropertyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return plyParser.RULE_listproperty; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListpropertyContext.prototype.enterRule = function (listener) {
        if (listener.enterListproperty) {
            listener.enterListproperty(this);
        }
    };
    // @Override
    ListpropertyContext.prototype.exitRule = function (listener) {
        if (listener.exitListproperty) {
            listener.exitListproperty(this);
        }
    };
    // @Override
    ListpropertyContext.prototype.accept = function (visitor) {
        if (visitor.visitListproperty) {
            return visitor.visitListproperty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListpropertyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListpropertyContext = ListpropertyContext;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return plyParser.RULE_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeContext.prototype.enterRule = function (listener) {
        if (listener.enterType) {
            listener.enterType(this);
        }
    };
    // @Override
    TypeContext.prototype.exitRule = function (listener) {
        if (listener.exitType) {
            listener.exitType(this);
        }
    };
    // @Override
    TypeContext.prototype.accept = function (visitor) {
        if (visitor.visitType) {
            return visitor.visitType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeContext = TypeContext;
var PlydeclarationContext = /** @class */ (function (_super) {
    __extends(PlydeclarationContext, _super);
    function PlydeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PlydeclarationContext.prototype.EOL = function () { return this.getToken(plyParser.EOL, 0); };
    Object.defineProperty(PlydeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return plyParser.RULE_plydeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PlydeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterPlydeclaration) {
            listener.enterPlydeclaration(this);
        }
    };
    // @Override
    PlydeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitPlydeclaration) {
            listener.exitPlydeclaration(this);
        }
    };
    // @Override
    PlydeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitPlydeclaration) {
            return visitor.visitPlydeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PlydeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PlydeclarationContext = PlydeclarationContext;
var VerticesContext = /** @class */ (function (_super) {
    __extends(VerticesContext, _super);
    function VerticesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VerticesContext.prototype.vertex = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VertexContext);
        }
        else {
            return this.getRuleContext(i, VertexContext);
        }
    };
    Object.defineProperty(VerticesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return plyParser.RULE_vertices; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VerticesContext.prototype.enterRule = function (listener) {
        if (listener.enterVertices) {
            listener.enterVertices(this);
        }
    };
    // @Override
    VerticesContext.prototype.exitRule = function (listener) {
        if (listener.exitVertices) {
            listener.exitVertices(this);
        }
    };
    // @Override
    VerticesContext.prototype.accept = function (visitor) {
        if (visitor.visitVertices) {
            return visitor.visitVertices(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VerticesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VerticesContext = VerticesContext;
var FacesContext = /** @class */ (function (_super) {
    __extends(FacesContext, _super);
    function FacesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FacesContext.prototype.face = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FaceContext);
        }
        else {
            return this.getRuleContext(i, FaceContext);
        }
    };
    Object.defineProperty(FacesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return plyParser.RULE_faces; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FacesContext.prototype.enterRule = function (listener) {
        if (listener.enterFaces) {
            listener.enterFaces(this);
        }
    };
    // @Override
    FacesContext.prototype.exitRule = function (listener) {
        if (listener.exitFaces) {
            listener.exitFaces(this);
        }
    };
    // @Override
    FacesContext.prototype.accept = function (visitor) {
        if (visitor.visitFaces) {
            return visitor.visitFaces(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FacesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FacesContext = FacesContext;
var VertexContext = /** @class */ (function (_super) {
    __extends(VertexContext, _super);
    function VertexContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VertexContext.prototype.number = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        else {
            return this.getRuleContext(i, NumberContext);
        }
    };
    VertexContext.prototype.EOL = function () { return this.getToken(plyParser.EOL, 0); };
    Object.defineProperty(VertexContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return plyParser.RULE_vertex; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VertexContext.prototype.enterRule = function (listener) {
        if (listener.enterVertex) {
            listener.enterVertex(this);
        }
    };
    // @Override
    VertexContext.prototype.exitRule = function (listener) {
        if (listener.exitVertex) {
            listener.exitVertex(this);
        }
    };
    // @Override
    VertexContext.prototype.accept = function (visitor) {
        if (visitor.visitVertex) {
            return visitor.visitVertex(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VertexContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VertexContext = VertexContext;
var FaceContext = /** @class */ (function (_super) {
    __extends(FaceContext, _super);
    function FaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FaceContext.prototype.number = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        else {
            return this.getRuleContext(i, NumberContext);
        }
    };
    FaceContext.prototype.EOL = function () { return this.getToken(plyParser.EOL, 0); };
    Object.defineProperty(FaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return plyParser.RULE_face; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FaceContext.prototype.enterRule = function (listener) {
        if (listener.enterFace) {
            listener.enterFace(this);
        }
    };
    // @Override
    FaceContext.prototype.exitRule = function (listener) {
        if (listener.exitFace) {
            listener.exitFace(this);
        }
    };
    // @Override
    FaceContext.prototype.accept = function (visitor) {
        if (visitor.visitFace) {
            return visitor.visitFace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FaceContext = FaceContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.NUMBER = function () { return this.getToken(plyParser.NUMBER, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return plyParser.RULE_number; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NumberContext.prototype.enterRule = function (listener) {
        if (listener.enterNumber) {
            listener.enterNumber(this);
        }
    };
    // @Override
    NumberContext.prototype.exitRule = function (listener) {
        if (listener.exitNumber) {
            listener.exitNumber(this);
        }
    };
    // @Override
    NumberContext.prototype.accept = function (visitor) {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NumberContext = NumberContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.STRING = function () { return this.getToken(plyParser.STRING, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return plyParser.RULE_string; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringContext.prototype.enterRule = function (listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    };
    // @Override
    StringContext.prototype.exitRule = function (listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    };
    // @Override
    StringContext.prototype.accept = function (visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringContext = StringContext;
