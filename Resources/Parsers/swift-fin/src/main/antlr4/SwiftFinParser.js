"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/swift-fin/src/main/antlr4/SwiftFinParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var SwiftFinParser = /** @class */ (function (_super) {
    __extends(SwiftFinParser, _super);
    function SwiftFinParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(SwiftFinParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(SwiftFinParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return SwiftFinParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiftFinParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "SwiftFinParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiftFinParser.prototype, "ruleNames", {
        // @Override
        get: function () { return SwiftFinParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiftFinParser.prototype, "serializedATN", {
        // @Override
        get: function () { return SwiftFinParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    SwiftFinParser.prototype.messages = function () {
        var _localctx = new MessagesContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, SwiftFinParser.RULE_messages);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 31;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 30;
                            this.message();
                        }
                    }
                    this.state = 33;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SwiftFinParser.BLOCK1);
                this.state = 35;
                this.match(SwiftFinParser.EOF);
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
    SwiftFinParser.prototype.message = function () {
        var _localctx = new MessageContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, SwiftFinParser.RULE_message);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 37;
                this.block1();
                this.state = 39;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SwiftFinParser.BLOCK2) {
                    {
                        this.state = 38;
                        this.block2();
                    }
                }
                this.state = 42;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SwiftFinParser.BLOCK3) {
                    {
                        this.state = 41;
                        this.block3();
                    }
                }
                this.state = 45;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SwiftFinParser.BLOCK4_A || _la === SwiftFinParser.BLOCK4_B) {
                    {
                        this.state = 44;
                        this.block4();
                    }
                }
                this.state = 48;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SwiftFinParser.BLOCK5) {
                    {
                        this.state = 47;
                        this.block5();
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
    SwiftFinParser.prototype.block1 = function () {
        var _localctx = new Block1Context(this._ctx, this.state);
        this.enterRule(_localctx, 4, SwiftFinParser.RULE_block1);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 50;
                this.match(SwiftFinParser.BLOCK1);
                this.state = 51;
                this.value();
                this.state = 52;
                this.match(SwiftFinParser.V_END);
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
    SwiftFinParser.prototype.block2 = function () {
        var _localctx = new Block2Context(this._ctx, this.state);
        this.enterRule(_localctx, 6, SwiftFinParser.RULE_block2);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 54;
                this.match(SwiftFinParser.BLOCK2);
                this.state = 55;
                this.value();
                this.state = 56;
                this.match(SwiftFinParser.V_END);
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
    SwiftFinParser.prototype.block3 = function () {
        var _localctx = new Block3Context(this._ctx, this.state);
        this.enterRule(_localctx, 8, SwiftFinParser.RULE_block3);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 58;
                this.match(SwiftFinParser.BLOCK3);
                this.state = 59;
                this.map();
                this.state = 60;
                this.match(SwiftFinParser.RBRACE);
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
    SwiftFinParser.prototype.block4 = function () {
        var _localctx = new Block4Context(this._ctx, this.state);
        this.enterRule(_localctx, 10, SwiftFinParser.RULE_block4);
        var _la;
        try {
            this.state = 74;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SwiftFinParser.BLOCK4_A:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 62;
                        this.match(SwiftFinParser.BLOCK4_A);
                        this.state = 64;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 63;
                                    this.block4Item();
                                }
                            }
                            this.state = 66;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SwiftFinParser.B4_COLON);
                        this.state = 68;
                        this.match(SwiftFinParser.B4_END);
                    }
                    break;
                case SwiftFinParser.BLOCK4_B:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 70;
                        this.match(SwiftFinParser.BLOCK4_B);
                        this.state = 71;
                        this.map();
                        this.state = 72;
                        this.match(SwiftFinParser.RBRACE);
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
    SwiftFinParser.prototype.block4Item = function () {
        var _localctx = new Block4ItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, SwiftFinParser.RULE_block4Item);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 76;
                this.match(SwiftFinParser.B4_COLON);
                this.state = 77;
                this.block4Field();
                this.state = 78;
                this.match(SwiftFinParser.B4_COLON);
                this.state = 80;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 79;
                                    this.block4Line();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 82;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
    SwiftFinParser.prototype.block4Field = function () {
        var _localctx = new Block4FieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, SwiftFinParser.RULE_block4Field);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 85;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 84;
                            this.match(SwiftFinParser.B4_VALUE);
                        }
                    }
                    this.state = 87;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SwiftFinParser.B4_VALUE);
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
    SwiftFinParser.prototype.block4Line = function () {
        var _localctx = new Block4LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, SwiftFinParser.RULE_block4Line);
        var _la;
        try {
            var _alt = void 0;
            this.state = 138;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 90;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 89;
                                    this.match(SwiftFinParser.B4_VALUE);
                                }
                            }
                            this.state = 92;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SwiftFinParser.B4_VALUE);
                        this.state = 94;
                        this.match(SwiftFinParser.B4_CRLF);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 96;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 95;
                                    this.match(SwiftFinParser.B4_VALUE);
                                }
                            }
                            this.state = 98;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SwiftFinParser.B4_VALUE);
                        this.state = 100;
                        this.match(SwiftFinParser.B4_COLON);
                        this.state = 104;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SwiftFinParser.B4_COLON || _la === SwiftFinParser.B4_VALUE) {
                            {
                                {
                                    this.state = 101;
                                    _la = this._input.LA(1);
                                    if (!(_la === SwiftFinParser.B4_COLON || _la === SwiftFinParser.B4_VALUE)) {
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
                            this.state = 106;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 107;
                        this.match(SwiftFinParser.B4_CRLF);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 108;
                        this.match(SwiftFinParser.B4_COLON);
                        this.state = 110;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 109;
                                            this.match(SwiftFinParser.B4_COLON);
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 112;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 117;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SwiftFinParser.B4_COLON || _la === SwiftFinParser.B4_VALUE) {
                            {
                                {
                                    this.state = 114;
                                    _la = this._input.LA(1);
                                    if (!(_la === SwiftFinParser.B4_COLON || _la === SwiftFinParser.B4_VALUE)) {
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
                            this.state = 119;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 120;
                        this.match(SwiftFinParser.B4_CRLF);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 122;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 121;
                                    this.match(SwiftFinParser.B4_COLON);
                                }
                            }
                            this.state = 124;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SwiftFinParser.B4_COLON);
                        this.state = 127;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 126;
                                    this.match(SwiftFinParser.B4_VALUE);
                                }
                            }
                            this.state = 129;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === SwiftFinParser.B4_VALUE);
                        this.state = 134;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SwiftFinParser.B4_COLON) {
                            {
                                {
                                    this.state = 131;
                                    this.match(SwiftFinParser.B4_COLON);
                                }
                            }
                            this.state = 136;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 137;
                        this.match(SwiftFinParser.B4_CRLF);
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
    SwiftFinParser.prototype.block5 = function () {
        var _localctx = new Block5Context(this._ctx, this.state);
        this.enterRule(_localctx, 18, SwiftFinParser.RULE_block5);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 140;
                this.match(SwiftFinParser.BLOCK5);
                this.state = 141;
                this.map();
                this.state = 142;
                this.match(SwiftFinParser.RBRACE);
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
    SwiftFinParser.prototype.value = function () {
        var _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, SwiftFinParser.RULE_value);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 145;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 144;
                            this.match(SwiftFinParser.V_VALUE);
                        }
                    }
                    this.state = 147;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SwiftFinParser.V_VALUE);
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
    SwiftFinParser.prototype.map = function () {
        var _localctx = new MapContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, SwiftFinParser.RULE_map);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 150;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 149;
                            this.keyValue();
                        }
                    }
                    this.state = 152;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SwiftFinParser.LBRACE);
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
    SwiftFinParser.prototype.keyValue = function () {
        var _localctx = new KeyValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, SwiftFinParser.RULE_keyValue);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                this.match(SwiftFinParser.LBRACE);
                this.state = 155;
                this.mKey();
                this.state = 156;
                this.match(SwiftFinParser.M_COLON);
                this.state = 158;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SwiftFinParser.M_COLON || _la === SwiftFinParser.M_VALUE) {
                    {
                        this.state = 157;
                        this.mValue();
                    }
                }
                this.state = 160;
                this.match(SwiftFinParser.RBRACE);
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
    SwiftFinParser.prototype.mKey = function () {
        var _localctx = new MKeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, SwiftFinParser.RULE_mKey);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 163;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 162;
                            this.match(SwiftFinParser.M_VALUE);
                        }
                    }
                    this.state = 165;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SwiftFinParser.M_VALUE);
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
    SwiftFinParser.prototype.mValue = function () {
        var _localctx = new MValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, SwiftFinParser.RULE_mValue);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 168;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 167;
                            _la = this._input.LA(1);
                            if (!(_la === SwiftFinParser.M_COLON || _la === SwiftFinParser.M_VALUE)) {
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
                    this.state = 170;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SwiftFinParser.M_COLON || _la === SwiftFinParser.M_VALUE);
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
    Object.defineProperty(SwiftFinParser, "_ATN", {
        get: function () {
            if (!SwiftFinParser.__ATN) {
                SwiftFinParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SwiftFinParser._serializedATN));
            }
            return SwiftFinParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    SwiftFinParser.BLOCK1 = 1;
    SwiftFinParser.BLOCK2 = 2;
    SwiftFinParser.BLOCK3 = 3;
    SwiftFinParser.BLOCK4_A = 4;
    SwiftFinParser.BLOCK4_B = 5;
    SwiftFinParser.BLOCK5 = 6;
    SwiftFinParser.LBRACE = 7;
    SwiftFinParser.RBRACE = 8;
    SwiftFinParser.COLON = 9;
    SwiftFinParser.CRLF = 10;
    SwiftFinParser.M_COLON = 11;
    SwiftFinParser.M_VALUE = 12;
    SwiftFinParser.B4_END = 13;
    SwiftFinParser.B4_COLON = 14;
    SwiftFinParser.B4_CRLF = 15;
    SwiftFinParser.B4_VALUE = 16;
    SwiftFinParser.V_END = 17;
    SwiftFinParser.V_VALUE = 18;
    SwiftFinParser.RULE_messages = 0;
    SwiftFinParser.RULE_message = 1;
    SwiftFinParser.RULE_block1 = 2;
    SwiftFinParser.RULE_block2 = 3;
    SwiftFinParser.RULE_block3 = 4;
    SwiftFinParser.RULE_block4 = 5;
    SwiftFinParser.RULE_block4Item = 6;
    SwiftFinParser.RULE_block4Field = 7;
    SwiftFinParser.RULE_block4Line = 8;
    SwiftFinParser.RULE_block5 = 9;
    SwiftFinParser.RULE_value = 10;
    SwiftFinParser.RULE_map = 11;
    SwiftFinParser.RULE_keyValue = 12;
    SwiftFinParser.RULE_mKey = 13;
    SwiftFinParser.RULE_mValue = 14;
    // tslint:disable:no-trailing-whitespace
    SwiftFinParser.ruleNames = [
        "messages", "message", "block1", "block2", "block3", "block4", "block4Item",
        "block4Field", "block4Line", "block5", "value", "map", "keyValue", "mKey",
        "mValue",
    ];
    SwiftFinParser._LITERAL_NAMES = [];
    SwiftFinParser._SYMBOLIC_NAMES = [
        undefined, "BLOCK1", "BLOCK2", "BLOCK3", "BLOCK4_A", "BLOCK4_B", "BLOCK5",
        "LBRACE", "RBRACE", "COLON", "CRLF", "M_COLON", "M_VALUE", "B4_END", "B4_COLON",
        "B4_CRLF", "B4_VALUE", "V_END", "V_VALUE",
    ];
    SwiftFinParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SwiftFinParser._LITERAL_NAMES, SwiftFinParser._SYMBOLIC_NAMES, []);
    SwiftFinParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14\xAF\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x06\x02\"\n\x02\r\x02\x0E" +
        "\x02#\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03*\n\x03\x03\x03\x05\x03-" +
        "\n\x03\x03\x03\x05\x030\n\x03\x03\x03\x05\x033\n\x03\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
        "\x06\x03\x07\x03\x07\x06\x07C\n\x07\r\x07\x0E\x07D\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x05\x07M\n\x07\x03\b\x03\b\x03\b\x03\b\x06" +
        "\bS\n\b\r\b\x0E\bT\x03\t\x06\tX\n\t\r\t\x0E\tY\x03\n\x06\n]\n\n\r\n\x0E" +
        "\n^\x03\n\x03\n\x06\nc\n\n\r\n\x0E\nd\x03\n\x03\n\x07\ni\n\n\f\n\x0E\n" +
        "l\v\n\x03\n\x03\n\x03\n\x06\nq\n\n\r\n\x0E\nr\x03\n\x07\nv\n\n\f\n\x0E" +
        "\ny\v\n\x03\n\x03\n\x06\n}\n\n\r\n\x0E\n~\x03\n\x06\n\x82\n\n\r\n\x0E" +
        "\n\x83\x03\n\x07\n\x87\n\n\f\n\x0E\n\x8A\v\n\x03\n\x05\n\x8D\n\n\x03\v" +
        "\x03\v\x03\v\x03\v\x03\f\x06\f\x94\n\f\r\f\x0E\f\x95\x03\r\x06\r\x99\n" +
        "\r\r\r\x0E\r\x9A\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xA1\n\x0E\x03" +
        "\x0E\x03\x0E\x03\x0F\x06\x0F\xA6\n\x0F\r\x0F\x0E\x0F\xA7\x03\x10\x06\x10" +
        "\xAB\n\x10\r\x10\x0E\x10\xAC\x03\x10\x02\x02\x02\x11\x02\x02\x04\x02\x06" +
        "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
        "\x1A\x02\x1C\x02\x1E\x02\x02\x04\x04\x02\x10\x10\x12\x12\x03\x02\r\x0E" +
        "\x02\xB8\x02!\x03\x02\x02\x02\x04\'\x03\x02\x02\x02\x064\x03\x02\x02\x02" +
        "\b8\x03\x02\x02\x02\n<\x03\x02\x02\x02\fL\x03\x02\x02\x02\x0EN\x03\x02" +
        "\x02\x02\x10W\x03\x02\x02\x02\x12\x8C\x03\x02\x02\x02\x14\x8E\x03\x02" +
        "\x02\x02\x16\x93\x03\x02\x02\x02\x18\x98\x03\x02\x02\x02\x1A\x9C\x03\x02" +
        "\x02\x02\x1C\xA5\x03\x02\x02\x02\x1E\xAA\x03\x02\x02\x02 \"\x05\x04\x03" +
        "\x02! \x03\x02\x02\x02\"#\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02" +
        "\x02\x02$%\x03\x02\x02\x02%&\x07\x02\x02\x03&\x03\x03\x02\x02\x02\')\x05" +
        "\x06\x04\x02(*\x05\b\x05\x02)(\x03\x02\x02\x02)*\x03\x02\x02\x02*,\x03" +
        "\x02\x02\x02+-\x05\n\x06\x02,+\x03\x02\x02\x02,-\x03\x02\x02\x02-/\x03" +
        "\x02\x02\x02.0\x05\f\x07\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0202\x03" +
        "\x02\x02\x0213\x05\x14\v\x0221\x03\x02\x02\x0223\x03\x02\x02\x023\x05" +
        "\x03\x02\x02\x0245\x07\x03\x02\x0256\x05\x16\f\x0267\x07\x13\x02\x027" +
        "\x07\x03\x02\x02\x0289\x07\x04\x02\x029:\x05\x16\f\x02:;\x07\x13\x02\x02" +
        ";\t\x03\x02\x02\x02<=\x07\x05\x02\x02=>\x05\x18\r\x02>?\x07\n\x02\x02" +
        "?\v\x03\x02\x02\x02@B\x07\x06\x02\x02AC\x05\x0E\b\x02BA\x03\x02\x02\x02" +
        "CD\x03\x02\x02\x02DB\x03\x02\x02\x02DE\x03\x02\x02\x02EF\x03\x02\x02\x02" +
        "FG\x07\x0F\x02\x02GM\x03\x02\x02\x02HI\x07\x07\x02\x02IJ\x05\x18\r\x02" +
        "JK\x07\n\x02\x02KM\x03\x02\x02\x02L@\x03\x02\x02\x02LH\x03\x02\x02\x02" +
        "M\r\x03\x02\x02\x02NO\x07\x10\x02\x02OP\x05\x10\t\x02PR\x07\x10\x02\x02" +
        "QS\x05\x12\n\x02RQ\x03\x02\x02\x02ST\x03\x02\x02\x02TR\x03\x02\x02\x02" +
        "TU\x03\x02\x02\x02U\x0F\x03\x02\x02\x02VX\x07\x12\x02\x02WV\x03\x02\x02" +
        "\x02XY\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\x11\x03\x02" +
        "\x02\x02[]\x07\x12\x02\x02\\[\x03\x02\x02\x02]^\x03\x02\x02\x02^\\\x03" +
        "\x02\x02\x02^_\x03\x02\x02\x02_`\x03\x02\x02\x02`\x8D\x07\x11\x02\x02" +
        "ac\x07\x12\x02\x02ba\x03\x02\x02\x02cd\x03\x02\x02\x02db\x03\x02\x02\x02" +
        "de\x03\x02\x02\x02ef\x03\x02\x02\x02fj\x07\x10\x02\x02gi\t\x02\x02\x02" +
        "hg\x03\x02\x02\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02" +
        "km\x03\x02\x02\x02lj\x03\x02\x02\x02m\x8D\x07\x11\x02\x02np\x07\x10\x02" +
        "\x02oq\x07\x10\x02\x02po\x03\x02\x02\x02qr\x03\x02\x02\x02rp\x03\x02\x02" +
        "\x02rs\x03\x02\x02\x02sw\x03\x02\x02\x02tv\t\x02\x02\x02ut\x03\x02\x02" +
        "\x02vy\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02xz\x03\x02\x02" +
        "\x02yw\x03\x02\x02\x02z\x8D\x07\x11\x02\x02{}\x07\x10\x02\x02|{\x03\x02" +
        "\x02\x02}~\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F" +
        "\x81\x03\x02\x02\x02\x80\x82\x07\x12\x02\x02\x81\x80\x03\x02\x02\x02\x82" +
        "\x83\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84" +
        "\x88\x03\x02\x02\x02\x85\x87\x07\x10\x02\x02\x86\x85\x03\x02\x02\x02\x87" +
        "\x8A\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89" +
        "\x8B\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8B\x8D\x07\x11\x02\x02\x8C" +
        "\\\x03\x02\x02\x02\x8Cb\x03\x02\x02\x02\x8Cn\x03\x02\x02\x02\x8C|\x03" +
        "\x02\x02\x02\x8D\x13\x03\x02\x02\x02\x8E\x8F\x07\b\x02\x02\x8F\x90\x05" +
        "\x18\r\x02\x90\x91\x07\n\x02\x02\x91\x15\x03\x02\x02\x02\x92\x94\x07\x14" +
        "\x02\x02\x93\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x93\x03\x02" +
        "\x02\x02\x95\x96\x03\x02\x02\x02\x96\x17\x03\x02\x02\x02\x97\x99\x05\x1A" +
        "\x0E\x02\x98\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x98\x03\x02" +
        "\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x19\x03\x02\x02\x02\x9C\x9D\x07\t" +
        "\x02\x02\x9D\x9E\x05\x1C\x0F\x02\x9E\xA0\x07\r\x02\x02\x9F\xA1\x05\x1E" +
        "\x10\x02\xA0\x9F\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x03\x02" +
        "\x02\x02\xA2\xA3\x07\n\x02\x02\xA3\x1B\x03\x02\x02\x02\xA4\xA6\x07\x0E" +
        "\x02\x02\xA5\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA5\x03\x02" +
        "\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\x1D\x03\x02\x02\x02\xA9\xAB\t\x03" +
        "\x02\x02\xAA\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAA\x03\x02" +
        "\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\x1F\x03\x02\x02\x02\x19#),/2DLTY" +
        "^djrw~\x83\x88\x8C\x95\x9A\xA0\xA7\xAC";
    return SwiftFinParser;
}(Parser_1.Parser));
exports.SwiftFinParser = SwiftFinParser;
var MessagesContext = /** @class */ (function (_super) {
    __extends(MessagesContext, _super);
    function MessagesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MessagesContext.prototype.EOF = function () { return this.getToken(SwiftFinParser.EOF, 0); };
    MessagesContext.prototype.message = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MessageContext);
        }
        else {
            return this.getRuleContext(i, MessageContext);
        }
    };
    Object.defineProperty(MessagesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SwiftFinParser.RULE_messages; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MessagesContext.prototype.enterRule = function (listener) {
        if (listener.enterMessages) {
            listener.enterMessages(this);
        }
    };
    // @Override
    MessagesContext.prototype.exitRule = function (listener) {
        if (listener.exitMessages) {
            listener.exitMessages(this);
        }
    };
    // @Override
    MessagesContext.prototype.accept = function (visitor) {
        if (visitor.visitMessages) {
            return visitor.visitMessages(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MessagesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MessagesContext = MessagesContext;
var MessageContext = /** @class */ (function (_super) {
    __extends(MessageContext, _super);
    function MessageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MessageContext.prototype.block1 = function () {
        return this.getRuleContext(0, Block1Context);
    };
    MessageContext.prototype.block2 = function () {
        return this.tryGetRuleContext(0, Block2Context);
    };
    MessageContext.prototype.block3 = function () {
        return this.tryGetRuleContext(0, Block3Context);
    };
    MessageContext.prototype.block4 = function () {
        return this.tryGetRuleContext(0, Block4Context);
    };
    MessageContext.prototype.block5 = function () {
        return this.tryGetRuleContext(0, Block5Context);
    };
    Object.defineProperty(MessageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SwiftFinParser.RULE_message; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MessageContext.prototype.enterRule = function (listener) {
        if (listener.enterMessage) {
            listener.enterMessage(this);
        }
    };
    // @Override
    MessageContext.prototype.exitRule = function (listener) {
        if (listener.exitMessage) {
            listener.exitMessage(this);
        }
    };
    // @Override
    MessageContext.prototype.accept = function (visitor) {
        if (visitor.visitMessage) {
            return visitor.visitMessage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MessageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MessageContext = MessageContext;
var Block1Context = /** @class */ (function (_super) {
    __extends(Block1Context, _super);
    function Block1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Block1Context.prototype.BLOCK1 = function () { return this.getToken(SwiftFinParser.BLOCK1, 0); };
    Block1Context.prototype.value = function () {
        return this.getRuleContext(0, ValueContext);
    };
    Block1Context.prototype.V_END = function () { return this.getToken(SwiftFinParser.V_END, 0); };
    Object.defineProperty(Block1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SwiftFinParser.RULE_block1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Block1Context.prototype.enterRule = function (listener) {
        if (listener.enterBlock1) {
            listener.enterBlock1(this);
        }
    };
    // @Override
    Block1Context.prototype.exitRule = function (listener) {
        if (listener.exitBlock1) {
            listener.exitBlock1(this);
        }
    };
    // @Override
    Block1Context.prototype.accept = function (visitor) {
        if (visitor.visitBlock1) {
            return visitor.visitBlock1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Block1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Block1Context = Block1Context;
var Block2Context = /** @class */ (function (_super) {
    __extends(Block2Context, _super);
    function Block2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Block2Context.prototype.BLOCK2 = function () { return this.getToken(SwiftFinParser.BLOCK2, 0); };
    Block2Context.prototype.value = function () {
        return this.getRuleContext(0, ValueContext);
    };
    Block2Context.prototype.V_END = function () { return this.getToken(SwiftFinParser.V_END, 0); };
    Object.defineProperty(Block2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SwiftFinParser.RULE_block2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Block2Context.prototype.enterRule = function (listener) {
        if (listener.enterBlock2) {
            listener.enterBlock2(this);
        }
    };
    // @Override
    Block2Context.prototype.exitRule = function (listener) {
        if (listener.exitBlock2) {
            listener.exitBlock2(this);
        }
    };
    // @Override
    Block2Context.prototype.accept = function (visitor) {
        if (visitor.visitBlock2) {
            return visitor.visitBlock2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Block2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Block2Context = Block2Context;
var Block3Context = /** @class */ (function (_super) {
    __extends(Block3Context, _super);
    function Block3Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Block3Context.prototype.BLOCK3 = function () { return this.getToken(SwiftFinParser.BLOCK3, 0); };
    Block3Context.prototype.map = function () {
        return this.getRuleContext(0, MapContext);
    };
    Block3Context.prototype.RBRACE = function () { return this.getToken(SwiftFinParser.RBRACE, 0); };
    Object.defineProperty(Block3Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SwiftFinParser.RULE_block3; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Block3Context.prototype.enterRule = function (listener) {
        if (listener.enterBlock3) {
            listener.enterBlock3(this);
        }
    };
    // @Override
    Block3Context.prototype.exitRule = function (listener) {
        if (listener.exitBlock3) {
            listener.exitBlock3(this);
        }
    };
    // @Override
    Block3Context.prototype.accept = function (visitor) {
        if (visitor.visitBlock3) {
            return visitor.visitBlock3(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Block3Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Block3Context = Block3Context;
var Block4Context = /** @class */ (function (_super) {
    __extends(Block4Context, _super);
    function Block4Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Block4Context.prototype.BLOCK4_A = function () { return this.tryGetToken(SwiftFinParser.BLOCK4_A, 0); };
    Block4Context.prototype.B4_END = function () { return this.tryGetToken(SwiftFinParser.B4_END, 0); };
    Block4Context.prototype.block4Item = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Block4ItemContext);
        }
        else {
            return this.getRuleContext(i, Block4ItemContext);
        }
    };
    Block4Context.prototype.BLOCK4_B = function () { return this.tryGetToken(SwiftFinParser.BLOCK4_B, 0); };
    Block4Context.prototype.map = function () {
        return this.tryGetRuleContext(0, MapContext);
    };
    Block4Context.prototype.RBRACE = function () { return this.tryGetToken(SwiftFinParser.RBRACE, 0); };
    Object.defineProperty(Block4Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SwiftFinParser.RULE_block4; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Block4Context.prototype.enterRule = function (listener) {
        if (listener.enterBlock4) {
            listener.enterBlock4(this);
        }
    };
    // @Override
    Block4Context.prototype.exitRule = function (listener) {
        if (listener.exitBlock4) {
            listener.exitBlock4(this);
        }
    };
    // @Override
    Block4Context.prototype.accept = function (visitor) {
        if (visitor.visitBlock4) {
            return visitor.visitBlock4(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Block4Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Block4Context = Block4Context;
var Block4ItemContext = /** @class */ (function (_super) {
    __extends(Block4ItemContext, _super);
    function Block4ItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Block4ItemContext.prototype.B4_COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(SwiftFinParser.B4_COLON);
        }
        else {
            return this.getToken(SwiftFinParser.B4_COLON, i);
        }
    };
    Block4ItemContext.prototype.block4Field = function () {
        return this.getRuleContext(0, Block4FieldContext);
    };
    Block4ItemContext.prototype.block4Line = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Block4LineContext);
        }
        else {
            return this.getRuleContext(i, Block4LineContext);
        }
    };
    Object.defineProperty(Block4ItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SwiftFinParser.RULE_block4Item; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Block4ItemContext.prototype.enterRule = function (listener) {
        if (listener.enterBlock4Item) {
            listener.enterBlock4Item(this);
        }
    };
    // @Override
    Block4ItemContext.prototype.exitRule = function (listener) {
        if (listener.exitBlock4Item) {
            listener.exitBlock4Item(this);
        }
    };
    // @Override
    Block4ItemContext.prototype.accept = function (visitor) {
        if (visitor.visitBlock4Item) {
            return visitor.visitBlock4Item(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Block4ItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Block4ItemContext = Block4ItemContext;
var Block4FieldContext = /** @class */ (function (_super) {
    __extends(Block4FieldContext, _super);
    function Block4FieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Block4FieldContext.prototype.B4_VALUE = function (i) {
        if (i === undefined) {
            return this.getTokens(SwiftFinParser.B4_VALUE);
        }
        else {
            return this.getToken(SwiftFinParser.B4_VALUE, i);
        }
    };
    Object.defineProperty(Block4FieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SwiftFinParser.RULE_block4Field; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Block4FieldContext.prototype.enterRule = function (listener) {
        if (listener.enterBlock4Field) {
            listener.enterBlock4Field(this);
        }
    };
    // @Override
    Block4FieldContext.prototype.exitRule = function (listener) {
        if (listener.exitBlock4Field) {
            listener.exitBlock4Field(this);
        }
    };
    // @Override
    Block4FieldContext.prototype.accept = function (visitor) {
        if (visitor.visitBlock4Field) {
            return visitor.visitBlock4Field(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Block4FieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Block4FieldContext = Block4FieldContext;
var Block4LineContext = /** @class */ (function (_super) {
    __extends(Block4LineContext, _super);
    function Block4LineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Block4LineContext.prototype.B4_CRLF = function () { return this.getToken(SwiftFinParser.B4_CRLF, 0); };
    Block4LineContext.prototype.B4_VALUE = function (i) {
        if (i === undefined) {
            return this.getTokens(SwiftFinParser.B4_VALUE);
        }
        else {
            return this.getToken(SwiftFinParser.B4_VALUE, i);
        }
    };
    Block4LineContext.prototype.B4_COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(SwiftFinParser.B4_COLON);
        }
        else {
            return this.getToken(SwiftFinParser.B4_COLON, i);
        }
    };
    Object.defineProperty(Block4LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SwiftFinParser.RULE_block4Line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Block4LineContext.prototype.enterRule = function (listener) {
        if (listener.enterBlock4Line) {
            listener.enterBlock4Line(this);
        }
    };
    // @Override
    Block4LineContext.prototype.exitRule = function (listener) {
        if (listener.exitBlock4Line) {
            listener.exitBlock4Line(this);
        }
    };
    // @Override
    Block4LineContext.prototype.accept = function (visitor) {
        if (visitor.visitBlock4Line) {
            return visitor.visitBlock4Line(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Block4LineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Block4LineContext = Block4LineContext;
var Block5Context = /** @class */ (function (_super) {
    __extends(Block5Context, _super);
    function Block5Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Block5Context.prototype.BLOCK5 = function () { return this.getToken(SwiftFinParser.BLOCK5, 0); };
    Block5Context.prototype.map = function () {
        return this.getRuleContext(0, MapContext);
    };
    Block5Context.prototype.RBRACE = function () { return this.getToken(SwiftFinParser.RBRACE, 0); };
    Object.defineProperty(Block5Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return SwiftFinParser.RULE_block5; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Block5Context.prototype.enterRule = function (listener) {
        if (listener.enterBlock5) {
            listener.enterBlock5(this);
        }
    };
    // @Override
    Block5Context.prototype.exitRule = function (listener) {
        if (listener.exitBlock5) {
            listener.exitBlock5(this);
        }
    };
    // @Override
    Block5Context.prototype.accept = function (visitor) {
        if (visitor.visitBlock5) {
            return visitor.visitBlock5(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Block5Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Block5Context = Block5Context;
var ValueContext = /** @class */ (function (_super) {
    __extends(ValueContext, _super);
    function ValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueContext.prototype.V_VALUE = function (i) {
        if (i === undefined) {
            return this.getTokens(SwiftFinParser.V_VALUE);
        }
        else {
            return this.getToken(SwiftFinParser.V_VALUE, i);
        }
    };
    Object.defineProperty(ValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SwiftFinParser.RULE_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValueContext.prototype.enterRule = function (listener) {
        if (listener.enterValue) {
            listener.enterValue(this);
        }
    };
    // @Override
    ValueContext.prototype.exitRule = function (listener) {
        if (listener.exitValue) {
            listener.exitValue(this);
        }
    };
    // @Override
    ValueContext.prototype.accept = function (visitor) {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueContext = ValueContext;
var MapContext = /** @class */ (function (_super) {
    __extends(MapContext, _super);
    function MapContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MapContext.prototype.keyValue = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(KeyValueContext);
        }
        else {
            return this.getRuleContext(i, KeyValueContext);
        }
    };
    Object.defineProperty(MapContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SwiftFinParser.RULE_map; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MapContext.prototype.enterRule = function (listener) {
        if (listener.enterMap) {
            listener.enterMap(this);
        }
    };
    // @Override
    MapContext.prototype.exitRule = function (listener) {
        if (listener.exitMap) {
            listener.exitMap(this);
        }
    };
    // @Override
    MapContext.prototype.accept = function (visitor) {
        if (visitor.visitMap) {
            return visitor.visitMap(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MapContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MapContext = MapContext;
var KeyValueContext = /** @class */ (function (_super) {
    __extends(KeyValueContext, _super);
    function KeyValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeyValueContext.prototype.LBRACE = function () { return this.getToken(SwiftFinParser.LBRACE, 0); };
    KeyValueContext.prototype.mKey = function () {
        return this.getRuleContext(0, MKeyContext);
    };
    KeyValueContext.prototype.M_COLON = function () { return this.getToken(SwiftFinParser.M_COLON, 0); };
    KeyValueContext.prototype.RBRACE = function () { return this.getToken(SwiftFinParser.RBRACE, 0); };
    KeyValueContext.prototype.mValue = function () {
        return this.tryGetRuleContext(0, MValueContext);
    };
    Object.defineProperty(KeyValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SwiftFinParser.RULE_keyValue; },
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
var MKeyContext = /** @class */ (function (_super) {
    __extends(MKeyContext, _super);
    function MKeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MKeyContext.prototype.M_VALUE = function (i) {
        if (i === undefined) {
            return this.getTokens(SwiftFinParser.M_VALUE);
        }
        else {
            return this.getToken(SwiftFinParser.M_VALUE, i);
        }
    };
    Object.defineProperty(MKeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SwiftFinParser.RULE_mKey; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MKeyContext.prototype.enterRule = function (listener) {
        if (listener.enterMKey) {
            listener.enterMKey(this);
        }
    };
    // @Override
    MKeyContext.prototype.exitRule = function (listener) {
        if (listener.exitMKey) {
            listener.exitMKey(this);
        }
    };
    // @Override
    MKeyContext.prototype.accept = function (visitor) {
        if (visitor.visitMKey) {
            return visitor.visitMKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MKeyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MKeyContext = MKeyContext;
var MValueContext = /** @class */ (function (_super) {
    __extends(MValueContext, _super);
    function MValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MValueContext.prototype.M_VALUE = function (i) {
        if (i === undefined) {
            return this.getTokens(SwiftFinParser.M_VALUE);
        }
        else {
            return this.getToken(SwiftFinParser.M_VALUE, i);
        }
    };
    MValueContext.prototype.M_COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(SwiftFinParser.M_COLON);
        }
        else {
            return this.getToken(SwiftFinParser.M_COLON, i);
        }
    };
    Object.defineProperty(MValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return SwiftFinParser.RULE_mValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MValueContext.prototype.enterRule = function (listener) {
        if (listener.enterMValue) {
            listener.enterMValue(this);
        }
    };
    // @Override
    MValueContext.prototype.exitRule = function (listener) {
        if (listener.exitMValue) {
            listener.exitMValue(this);
        }
    };
    // @Override
    MValueContext.prototype.accept = function (visitor) {
        if (visitor.visitMValue) {
            return visitor.visitMValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MValueContext = MValueContext;
