"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sgf/sgf.g4 by ANTLR 4.7.3-SNAPSHOT
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
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var sgfParser = /** @class */ (function (_super) {
    __extends(sgfParser, _super);
    function sgfParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(sgfParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(sgfParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return sgfParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sgfParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "sgf.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sgfParser.prototype, "ruleNames", {
        // @Override
        get: function () { return sgfParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sgfParser.prototype, "serializedATN", {
        // @Override
        get: function () { return sgfParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    sgfParser.prototype.collection = function () {
        var _localctx = new CollectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, sgfParser.RULE_collection);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 35;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 34;
                            this.gameTree();
                        }
                    }
                    this.state = 37;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === sgfParser.T__0);
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
    sgfParser.prototype.gameTree = function () {
        var _localctx = new GameTreeContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, sgfParser.RULE_gameTree);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 39;
                this.match(sgfParser.T__0);
                this.state = 40;
                this.sequence();
                this.state = 44;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === sgfParser.T__0) {
                    {
                        {
                            this.state = 41;
                            this.gameTree();
                        }
                    }
                    this.state = 46;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 47;
                this.match(sgfParser.T__1);
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
    sgfParser.prototype.sequence = function () {
        var _localctx = new SequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, sgfParser.RULE_sequence);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 50;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 49;
                            this.node();
                        }
                    }
                    this.state = 52;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === sgfParser.T__2);
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
    sgfParser.prototype.node = function () {
        var _localctx = new NodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, sgfParser.RULE_node);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 54;
                this.match(sgfParser.T__2);
                this.state = 58;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sgfParser.T__3) | (1 << sgfParser.T__4) | (1 << sgfParser.T__5) | (1 << sgfParser.T__6) | (1 << sgfParser.T__7) | (1 << sgfParser.T__8) | (1 << sgfParser.T__9) | (1 << sgfParser.T__10) | (1 << sgfParser.T__11) | (1 << sgfParser.T__12) | (1 << sgfParser.T__13) | (1 << sgfParser.T__14) | (1 << sgfParser.T__15) | (1 << sgfParser.T__16) | (1 << sgfParser.T__17) | (1 << sgfParser.T__18) | (1 << sgfParser.T__19) | (1 << sgfParser.T__20) | (1 << sgfParser.T__21) | (1 << sgfParser.T__22) | (1 << sgfParser.T__23) | (1 << sgfParser.T__24) | (1 << sgfParser.T__25) | (1 << sgfParser.T__26) | (1 << sgfParser.T__27) | (1 << sgfParser.T__28) | (1 << sgfParser.T__29) | (1 << sgfParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (sgfParser.T__31 - 32)) | (1 << (sgfParser.T__32 - 32)) | (1 << (sgfParser.T__33 - 32)) | (1 << (sgfParser.T__34 - 32)) | (1 << (sgfParser.T__35 - 32)) | (1 << (sgfParser.T__36 - 32)) | (1 << (sgfParser.T__37 - 32)) | (1 << (sgfParser.T__38 - 32)) | (1 << (sgfParser.T__39 - 32)) | (1 << (sgfParser.T__40 - 32)) | (1 << (sgfParser.T__41 - 32)) | (1 << (sgfParser.T__42 - 32)) | (1 << (sgfParser.T__43 - 32)) | (1 << (sgfParser.T__44 - 32)) | (1 << (sgfParser.T__45 - 32)) | (1 << (sgfParser.T__46 - 32)) | (1 << (sgfParser.T__47 - 32)) | (1 << (sgfParser.T__48 - 32)) | (1 << (sgfParser.T__49 - 32)) | (1 << (sgfParser.T__50 - 32)) | (1 << (sgfParser.T__51 - 32)) | (1 << (sgfParser.T__52 - 32)) | (1 << (sgfParser.T__53 - 32)) | (1 << (sgfParser.T__54 - 32)) | (1 << (sgfParser.T__55 - 32)) | (1 << (sgfParser.T__56 - 32)) | (1 << (sgfParser.T__57 - 32)) | (1 << (sgfParser.T__58 - 32)) | (1 << (sgfParser.T__59 - 32)) | (1 << (sgfParser.T__60 - 32)) | (1 << (sgfParser.T__61 - 32)) | (1 << (sgfParser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (sgfParser.T__63 - 64)) | (1 << (sgfParser.T__64 - 64)) | (1 << (sgfParser.T__65 - 64)) | (1 << (sgfParser.T__66 - 64)) | (1 << (sgfParser.T__67 - 64)) | (1 << (sgfParser.T__68 - 64)) | (1 << (sgfParser.T__69 - 64)) | (1 << (sgfParser.T__70 - 64)) | (1 << (sgfParser.T__71 - 64)) | (1 << (sgfParser.T__72 - 64)) | (1 << (sgfParser.COLOR - 64)) | (1 << (sgfParser.UCLETTER - 64)))) !== 0)) {
                    {
                        {
                            this.state = 55;
                            this.property();
                        }
                    }
                    this.state = 60;
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
    sgfParser.prototype.property = function () {
        var _localctx = new PropertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, sgfParser.RULE_property);
        try {
            this.state = 73;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sgfParser.T__3:
                case sgfParser.T__4:
                case sgfParser.COLOR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 61;
                        this.move();
                    }
                    break;
                case sgfParser.T__5:
                case sgfParser.T__6:
                case sgfParser.T__7:
                case sgfParser.T__8:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 62;
                        this.setup();
                    }
                    break;
                case sgfParser.T__9:
                case sgfParser.T__10:
                case sgfParser.T__11:
                case sgfParser.T__12:
                case sgfParser.T__13:
                case sgfParser.T__14:
                case sgfParser.T__15:
                case sgfParser.T__16:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 63;
                        this.nodeAnnotation();
                    }
                    break;
                case sgfParser.T__17:
                case sgfParser.T__18:
                case sgfParser.T__19:
                case sgfParser.T__20:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 64;
                        this.moveAnnotation();
                    }
                    break;
                case sgfParser.T__21:
                case sgfParser.T__22:
                case sgfParser.T__23:
                case sgfParser.T__24:
                case sgfParser.T__25:
                case sgfParser.T__26:
                case sgfParser.T__27:
                case sgfParser.T__28:
                case sgfParser.T__29:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 65;
                        this.markup();
                    }
                    break;
                case sgfParser.T__30:
                case sgfParser.T__31:
                case sgfParser.T__32:
                case sgfParser.T__33:
                case sgfParser.T__34:
                case sgfParser.T__35:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 66;
                        this.root();
                    }
                    break;
                case sgfParser.T__36:
                case sgfParser.T__37:
                case sgfParser.T__38:
                case sgfParser.T__39:
                case sgfParser.T__40:
                case sgfParser.T__41:
                case sgfParser.T__42:
                case sgfParser.T__43:
                case sgfParser.T__44:
                case sgfParser.T__45:
                case sgfParser.T__46:
                case sgfParser.T__47:
                case sgfParser.T__48:
                case sgfParser.T__49:
                case sgfParser.T__50:
                case sgfParser.T__51:
                case sgfParser.T__52:
                case sgfParser.T__53:
                case sgfParser.T__54:
                case sgfParser.T__55:
                case sgfParser.T__56:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 67;
                        this.gameInfo();
                    }
                    break;
                case sgfParser.T__57:
                case sgfParser.T__58:
                case sgfParser.T__59:
                case sgfParser.T__60:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 68;
                        this.timing();
                    }
                    break;
                case sgfParser.T__61:
                case sgfParser.T__62:
                case sgfParser.T__63:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 69;
                        this.misc();
                    }
                    break;
                case sgfParser.T__64:
                case sgfParser.T__65:
                case sgfParser.T__66:
                case sgfParser.T__67:
                case sgfParser.T__68:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 70;
                        this.loa();
                    }
                    break;
                case sgfParser.T__69:
                case sgfParser.T__70:
                case sgfParser.T__71:
                case sgfParser.T__72:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 71;
                        this.go();
                    }
                    break;
                case sgfParser.UCLETTER:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 72;
                        this.privateProp();
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
    sgfParser.prototype.move = function () {
        var _localctx = new MoveContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, sgfParser.RULE_move);
        var _la;
        try {
            this.state = 81;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sgfParser.COLOR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 75;
                        this.match(sgfParser.COLOR);
                        this.state = 76;
                        _la = this._input.LA(1);
                        if (!(_la === sgfParser.NONE || _la === sgfParser.TEXT)) {
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
                case sgfParser.T__3:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 77;
                        this.match(sgfParser.T__3);
                        this.state = 78;
                        this.match(sgfParser.NONE);
                    }
                    break;
                case sgfParser.T__4:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 79;
                        this.match(sgfParser.T__4);
                        this.state = 80;
                        this.match(sgfParser.TEXT);
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
    sgfParser.prototype.setup = function () {
        var _localctx = new SetupContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, sgfParser.RULE_setup);
        var _la;
        try {
            this.state = 103;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sgfParser.T__5:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 83;
                        this.match(sgfParser.T__5);
                        this.state = 85;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 84;
                                    this.match(sgfParser.TEXT);
                                }
                            }
                            this.state = 87;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__6:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 89;
                        this.match(sgfParser.T__6);
                        this.state = 91;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 90;
                                    this.match(sgfParser.TEXT);
                                }
                            }
                            this.state = 93;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__7:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 95;
                        this.match(sgfParser.T__7);
                        this.state = 97;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 96;
                                    this.match(sgfParser.TEXT);
                                }
                            }
                            this.state = 99;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__8:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 101;
                        this.match(sgfParser.T__8);
                        this.state = 102;
                        this.match(sgfParser.TEXT);
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
    sgfParser.prototype.nodeAnnotation = function () {
        var _localctx = new NodeAnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, sgfParser.RULE_nodeAnnotation);
        try {
            this.state = 121;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sgfParser.T__9:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 105;
                        this.match(sgfParser.T__9);
                        this.state = 106;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__10:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 107;
                        this.match(sgfParser.T__10);
                        this.state = 108;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__11:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 109;
                        this.match(sgfParser.T__11);
                        this.state = 110;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__12:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 111;
                        this.match(sgfParser.T__12);
                        this.state = 112;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__13:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 113;
                        this.match(sgfParser.T__13);
                        this.state = 114;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__14:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 115;
                        this.match(sgfParser.T__14);
                        this.state = 116;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__15:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 117;
                        this.match(sgfParser.T__15);
                        this.state = 118;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__16:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 119;
                        this.match(sgfParser.T__16);
                        this.state = 120;
                        this.match(sgfParser.TEXT);
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
    sgfParser.prototype.moveAnnotation = function () {
        var _localctx = new MoveAnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, sgfParser.RULE_moveAnnotation);
        try {
            this.state = 131;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sgfParser.T__17:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 123;
                        this.match(sgfParser.T__17);
                        this.state = 124;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__18:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 125;
                        this.match(sgfParser.T__18);
                        this.state = 126;
                        this.match(sgfParser.NONE);
                    }
                    break;
                case sgfParser.T__19:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 127;
                        this.match(sgfParser.T__19);
                        this.state = 128;
                        this.match(sgfParser.NONE);
                    }
                    break;
                case sgfParser.T__20:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 129;
                        this.match(sgfParser.T__20);
                        this.state = 130;
                        this.match(sgfParser.TEXT);
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
    sgfParser.prototype.markup = function () {
        var _localctx = new MarkupContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, sgfParser.RULE_markup);
        var _la;
        try {
            this.state = 190;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sgfParser.T__21:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 133;
                        this.match(sgfParser.T__21);
                        this.state = 135;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 134;
                                    this.match(sgfParser.TEXT);
                                }
                            }
                            this.state = 137;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__22:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 139;
                        this.match(sgfParser.T__22);
                        this.state = 141;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 140;
                                    this.match(sgfParser.TEXT);
                                }
                            }
                            this.state = 143;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__23:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 145;
                        this.match(sgfParser.T__23);
                        this.state = 152;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case sgfParser.NONE:
                                {
                                    this.state = 146;
                                    this.match(sgfParser.NONE);
                                }
                                break;
                            case sgfParser.TEXT:
                                {
                                    this.state = 148;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 147;
                                                this.match(sgfParser.TEXT);
                                            }
                                        }
                                        this.state = 150;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === sgfParser.TEXT);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case sgfParser.T__24:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 154;
                        this.match(sgfParser.T__24);
                        this.state = 156;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 155;
                                    this.match(sgfParser.TEXT);
                                }
                            }
                            this.state = 158;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__25:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 160;
                        this.match(sgfParser.T__25);
                        this.state = 162;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 161;
                                    this.match(sgfParser.TEXT);
                                }
                            }
                            this.state = 164;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__26:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 166;
                        this.match(sgfParser.T__26);
                        this.state = 168;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 167;
                                    this.match(sgfParser.TEXT);
                                }
                            }
                            this.state = 170;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__27:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 172;
                        this.match(sgfParser.T__27);
                        this.state = 174;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 173;
                                    this.match(sgfParser.TEXT);
                                }
                            }
                            this.state = 176;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__28:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 178;
                        this.match(sgfParser.T__28);
                        this.state = 180;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 179;
                                    this.match(sgfParser.TEXT);
                                }
                            }
                            this.state = 182;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__29:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 184;
                        this.match(sgfParser.T__29);
                        this.state = 186;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 185;
                                    this.match(sgfParser.TEXT);
                                }
                            }
                            this.state = 188;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === sgfParser.TEXT);
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
    sgfParser.prototype.root = function () {
        var _localctx = new RootContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, sgfParser.RULE_root);
        try {
            this.state = 204;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sgfParser.T__30:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 192;
                        this.match(sgfParser.T__30);
                        this.state = 193;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__31:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 194;
                        this.match(sgfParser.T__31);
                        this.state = 195;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__32:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 196;
                        this.match(sgfParser.T__32);
                        this.state = 197;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__33:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 198;
                        this.match(sgfParser.T__33);
                        this.state = 199;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__34:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 200;
                        this.match(sgfParser.T__34);
                        this.state = 201;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__35:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 202;
                        this.match(sgfParser.T__35);
                        this.state = 203;
                        this.match(sgfParser.TEXT);
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
    sgfParser.prototype.gameInfo = function () {
        var _localctx = new GameInfoContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, sgfParser.RULE_gameInfo);
        try {
            this.state = 248;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sgfParser.T__36:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 206;
                        this.match(sgfParser.T__36);
                        this.state = 207;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__37:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 208;
                        this.match(sgfParser.T__37);
                        this.state = 209;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__38:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 210;
                        this.match(sgfParser.T__38);
                        this.state = 211;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__39:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 212;
                        this.match(sgfParser.T__39);
                        this.state = 213;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__40:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 214;
                        this.match(sgfParser.T__40);
                        this.state = 215;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__41:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 216;
                        this.match(sgfParser.T__41);
                        this.state = 217;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__42:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 218;
                        this.match(sgfParser.T__42);
                        this.state = 219;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__43:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 220;
                        this.match(sgfParser.T__43);
                        this.state = 221;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__44:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 222;
                        this.match(sgfParser.T__44);
                        this.state = 223;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__45:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 224;
                        this.match(sgfParser.T__45);
                        this.state = 225;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__46:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 226;
                        this.match(sgfParser.T__46);
                        this.state = 227;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__47:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 228;
                        this.match(sgfParser.T__47);
                        this.state = 229;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__48:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 230;
                        this.match(sgfParser.T__48);
                        this.state = 231;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__49:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 232;
                        this.match(sgfParser.T__49);
                        this.state = 233;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__50:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 234;
                        this.match(sgfParser.T__50);
                        this.state = 235;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__51:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 236;
                        this.match(sgfParser.T__51);
                        this.state = 237;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__52:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 238;
                        this.match(sgfParser.T__52);
                        this.state = 239;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__53:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 240;
                        this.match(sgfParser.T__53);
                        this.state = 241;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__54:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 242;
                        this.match(sgfParser.T__54);
                        this.state = 243;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__55:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 244;
                        this.match(sgfParser.T__55);
                        this.state = 245;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__56:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 246;
                        this.match(sgfParser.T__56);
                        this.state = 247;
                        this.match(sgfParser.TEXT);
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
    sgfParser.prototype.timing = function () {
        var _localctx = new TimingContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, sgfParser.RULE_timing);
        try {
            this.state = 258;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sgfParser.T__57:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 250;
                        this.match(sgfParser.T__57);
                        this.state = 251;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__58:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 252;
                        this.match(sgfParser.T__58);
                        this.state = 253;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__59:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 254;
                        this.match(sgfParser.T__59);
                        this.state = 255;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__60:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 256;
                        this.match(sgfParser.T__60);
                        this.state = 257;
                        this.match(sgfParser.TEXT);
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
    sgfParser.prototype.misc = function () {
        var _localctx = new MiscContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, sgfParser.RULE_misc);
        var _la;
        try {
            this.state = 270;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sgfParser.T__61:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 260;
                        this.match(sgfParser.T__61);
                        this.state = 261;
                        _la = this._input.LA(1);
                        if (!(_la === sgfParser.NONE || _la === sgfParser.TEXT)) {
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
                case sgfParser.T__62:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 262;
                        this.match(sgfParser.T__62);
                        this.state = 263;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__63:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 264;
                        this.match(sgfParser.T__63);
                        this.state = 266;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 265;
                                    this.match(sgfParser.TEXT);
                                }
                            }
                            this.state = 268;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === sgfParser.TEXT);
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
    sgfParser.prototype.loa = function () {
        var _localctx = new LoaContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, sgfParser.RULE_loa);
        try {
            this.state = 282;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sgfParser.T__64:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 272;
                        this.match(sgfParser.T__64);
                        this.state = 273;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__65:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 274;
                        this.match(sgfParser.T__65);
                        this.state = 275;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__66:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 276;
                        this.match(sgfParser.T__66);
                        this.state = 277;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__67:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 278;
                        this.match(sgfParser.T__67);
                        this.state = 279;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__68:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 280;
                        this.match(sgfParser.T__68);
                        this.state = 281;
                        this.match(sgfParser.TEXT);
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
    sgfParser.prototype.go = function () {
        var _localctx = new GoContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, sgfParser.RULE_go);
        var _la;
        try {
            this.state = 306;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case sgfParser.T__69:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 284;
                        this.match(sgfParser.T__69);
                        this.state = 285;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__70:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 286;
                        this.match(sgfParser.T__70);
                        this.state = 287;
                        this.match(sgfParser.TEXT);
                    }
                    break;
                case sgfParser.T__71:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 288;
                        this.match(sgfParser.T__71);
                        this.state = 295;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case sgfParser.NONE:
                                {
                                    this.state = 289;
                                    this.match(sgfParser.NONE);
                                }
                                break;
                            case sgfParser.TEXT:
                                {
                                    this.state = 291;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 290;
                                                this.match(sgfParser.TEXT);
                                            }
                                        }
                                        this.state = 293;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === sgfParser.TEXT);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    break;
                case sgfParser.T__72:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 297;
                        this.match(sgfParser.T__72);
                        this.state = 304;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case sgfParser.NONE:
                                {
                                    this.state = 298;
                                    this.match(sgfParser.NONE);
                                }
                                break;
                            case sgfParser.TEXT:
                                {
                                    this.state = 300;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 299;
                                                this.match(sgfParser.TEXT);
                                            }
                                        }
                                        this.state = 302;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === sgfParser.TEXT);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
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
    sgfParser.prototype.privateProp = function () {
        var _localctx = new PrivatePropContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, sgfParser.RULE_privateProp);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 308;
                this.match(sgfParser.UCLETTER);
                this.state = 315;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case sgfParser.NONE:
                        {
                            this.state = 309;
                            this.match(sgfParser.NONE);
                        }
                        break;
                    case sgfParser.TEXT:
                        {
                            this.state = 311;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 310;
                                        this.match(sgfParser.TEXT);
                                    }
                                }
                                this.state = 313;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === sgfParser.TEXT);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
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
    Object.defineProperty(sgfParser, "_ATN", {
        get: function () {
            if (!sgfParser.__ATN) {
                sgfParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(sgfParser._serializedATN));
            }
            return sgfParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    sgfParser.T__0 = 1;
    sgfParser.T__1 = 2;
    sgfParser.T__2 = 3;
    sgfParser.T__3 = 4;
    sgfParser.T__4 = 5;
    sgfParser.T__5 = 6;
    sgfParser.T__6 = 7;
    sgfParser.T__7 = 8;
    sgfParser.T__8 = 9;
    sgfParser.T__9 = 10;
    sgfParser.T__10 = 11;
    sgfParser.T__11 = 12;
    sgfParser.T__12 = 13;
    sgfParser.T__13 = 14;
    sgfParser.T__14 = 15;
    sgfParser.T__15 = 16;
    sgfParser.T__16 = 17;
    sgfParser.T__17 = 18;
    sgfParser.T__18 = 19;
    sgfParser.T__19 = 20;
    sgfParser.T__20 = 21;
    sgfParser.T__21 = 22;
    sgfParser.T__22 = 23;
    sgfParser.T__23 = 24;
    sgfParser.T__24 = 25;
    sgfParser.T__25 = 26;
    sgfParser.T__26 = 27;
    sgfParser.T__27 = 28;
    sgfParser.T__28 = 29;
    sgfParser.T__29 = 30;
    sgfParser.T__30 = 31;
    sgfParser.T__31 = 32;
    sgfParser.T__32 = 33;
    sgfParser.T__33 = 34;
    sgfParser.T__34 = 35;
    sgfParser.T__35 = 36;
    sgfParser.T__36 = 37;
    sgfParser.T__37 = 38;
    sgfParser.T__38 = 39;
    sgfParser.T__39 = 40;
    sgfParser.T__40 = 41;
    sgfParser.T__41 = 42;
    sgfParser.T__42 = 43;
    sgfParser.T__43 = 44;
    sgfParser.T__44 = 45;
    sgfParser.T__45 = 46;
    sgfParser.T__46 = 47;
    sgfParser.T__47 = 48;
    sgfParser.T__48 = 49;
    sgfParser.T__49 = 50;
    sgfParser.T__50 = 51;
    sgfParser.T__51 = 52;
    sgfParser.T__52 = 53;
    sgfParser.T__53 = 54;
    sgfParser.T__54 = 55;
    sgfParser.T__55 = 56;
    sgfParser.T__56 = 57;
    sgfParser.T__57 = 58;
    sgfParser.T__58 = 59;
    sgfParser.T__59 = 60;
    sgfParser.T__60 = 61;
    sgfParser.T__61 = 62;
    sgfParser.T__62 = 63;
    sgfParser.T__63 = 64;
    sgfParser.T__64 = 65;
    sgfParser.T__65 = 66;
    sgfParser.T__66 = 67;
    sgfParser.T__67 = 68;
    sgfParser.T__68 = 69;
    sgfParser.T__69 = 70;
    sgfParser.T__70 = 71;
    sgfParser.T__71 = 72;
    sgfParser.T__72 = 73;
    sgfParser.COLOR = 74;
    sgfParser.UCLETTER = 75;
    sgfParser.NONE = 76;
    sgfParser.TEXT = 77;
    sgfParser.WS = 78;
    sgfParser.RULE_collection = 0;
    sgfParser.RULE_gameTree = 1;
    sgfParser.RULE_sequence = 2;
    sgfParser.RULE_node = 3;
    sgfParser.RULE_property = 4;
    sgfParser.RULE_move = 5;
    sgfParser.RULE_setup = 6;
    sgfParser.RULE_nodeAnnotation = 7;
    sgfParser.RULE_moveAnnotation = 8;
    sgfParser.RULE_markup = 9;
    sgfParser.RULE_root = 10;
    sgfParser.RULE_gameInfo = 11;
    sgfParser.RULE_timing = 12;
    sgfParser.RULE_misc = 13;
    sgfParser.RULE_loa = 14;
    sgfParser.RULE_go = 15;
    sgfParser.RULE_privateProp = 16;
    // tslint:disable:no-trailing-whitespace
    sgfParser.ruleNames = [
        "collection", "gameTree", "sequence", "node", "property", "move", "setup",
        "nodeAnnotation", "moveAnnotation", "markup", "root", "gameInfo", "timing",
        "misc", "loa", "go", "privateProp",
    ];
    sgfParser._LITERAL_NAMES = [
        undefined, "'('", "')'", "';'", "'KO'", "'MN'", "'AB'", "'AE'", "'AW'",
        "'PL'", "'C'", "'DM'", "'GB'", "'GW'", "'HO'", "'N'", "'UC'", "'V'", "'BM'",
        "'DO'", "'IT'", "'TE'", "'AR'", "'CR'", "'DD'", "'LB'", "'LN'", "'MA'",
        "'SL'", "'SQ'", "'TR'", "'AP'", "'CA'", "'FF'", "'GM'", "'ST'", "'SZ'",
        "'AN'", "'BR'", "'BT'", "'CP'", "'DT'", "'EV'", "'GN'", "'GC'", "'ON'",
        "'OT'", "'PB'", "'PC'", "'PW'", "'RE'", "'RO'", "'RU'", "'SO'", "'TM'",
        "'US'", "'WR'", "'WT'", "'BL'", "'OB'", "'OW'", "'WL'", "'FG'", "'PM'",
        "'VW'", "'AS'", "'IP'", "'IY'", "'SE'", "'SU'", "'HA'", "'KM'", "'TB'",
        "'TW'", undefined, undefined, "'[]'",
    ];
    sgfParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "COLOR", "UCLETTER", "NONE",
        "TEXT", "WS",
    ];
    sgfParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(sgfParser._LITERAL_NAMES, sgfParser._SYMBOLIC_NAMES, []);
    sgfParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03P\u0140\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
        "\x02\x06\x02&\n\x02\r\x02\x0E\x02\'\x03\x03\x03\x03\x03\x03\x07\x03-\n" +
        "\x03\f\x03\x0E\x030\v\x03\x03\x03\x03\x03\x03\x04\x06\x045\n\x04\r\x04" +
        "\x0E\x046\x03\x05\x03\x05\x07\x05;\n\x05\f\x05\x0E\x05>\v\x05\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x05\x06L\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x05\x07T\n\x07\x03\b\x03\b\x06\bX\n\b\r\b\x0E\bY\x03\b\x03\b" +
        "\x06\b^\n\b\r\b\x0E\b_\x03\b\x03\b\x06\bd\n\b\r\b\x0E\be\x03\b\x03\b\x05" +
        "\bj\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
        "\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t|\n\t\x03\n\x03\n\x03\n\x03\n\x03" +
        "\n\x03\n\x03\n\x03\n\x05\n\x86\n\n\x03\v\x03\v\x06\v\x8A\n\v\r\v\x0E\v" +
        "\x8B\x03\v\x03\v\x06\v\x90\n\v\r\v\x0E\v\x91\x03\v\x03\v\x03\v\x06\v\x97" +
        "\n\v\r\v\x0E\v\x98\x05\v\x9B\n\v\x03\v\x03\v\x06\v\x9F\n\v\r\v\x0E\v\xA0" +
        "\x03\v\x03\v\x06\v\xA5\n\v\r\v\x0E\v\xA6\x03\v\x03\v\x06\v\xAB\n\v\r\v" +
        "\x0E\v\xAC\x03\v\x03\v\x06\v\xB1\n\v\r\v\x0E\v\xB2\x03\v\x03\v\x06\v\xB7" +
        "\n\v\r\v\x0E\v\xB8\x03\v\x03\v\x06\v\xBD\n\v\r\v\x0E\v\xBE\x05\v\xC1\n" +
        "\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
        "\f\x05\f\xCF\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
        "\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xFB\n\r" +
        "\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
        "\u0105\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0F\u010D" +
        "\n\x0F\r\x0F\x0E\x0F\u010E\x05\x0F\u0111\n\x0F\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u011D" +
        "\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x06\x11" +
        "\u0126\n\x11\r\x11\x0E\x11\u0127\x05\x11\u012A\n\x11\x03\x11\x03\x11\x03" +
        "\x11\x06\x11\u012F\n\x11\r\x11\x0E\x11\u0130\x05\x11\u0133\n\x11\x05\x11" +
        "\u0135\n\x11\x03\x12\x03\x12\x03\x12\x06\x12\u013A\n\x12\r\x12\x0E\x12" +
        "\u013B\x05\x12\u013E\n\x12\x03\x12\x02\x02\x02\x13\x02\x02\x04\x02\x06" +
        "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
        "\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02\x02\x03\x03\x02NO\x02\u018D\x02%\x03" +
        "\x02\x02\x02\x04)\x03\x02\x02\x02\x064\x03\x02\x02\x02\b8\x03\x02\x02" +
        "\x02\nK\x03\x02\x02\x02\fS\x03\x02\x02\x02\x0Ei\x03\x02\x02\x02\x10{\x03" +
        "\x02\x02\x02\x12\x85\x03\x02\x02\x02\x14\xC0\x03\x02\x02\x02\x16\xCE\x03" +
        "\x02\x02\x02\x18\xFA\x03\x02\x02\x02\x1A\u0104\x03\x02\x02\x02\x1C\u0110" +
        "\x03\x02\x02\x02\x1E\u011C\x03\x02\x02\x02 \u0134\x03\x02\x02\x02\"\u0136" +
        "\x03\x02\x02\x02$&\x05\x04\x03\x02%$\x03\x02\x02\x02&\'\x03\x02\x02\x02" +
        "\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02(\x03\x03\x02\x02\x02)*\x07\x03" +
        "\x02\x02*.\x05\x06\x04\x02+-\x05\x04\x03\x02,+\x03\x02\x02\x02-0\x03\x02" +
        "\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/1\x03\x02\x02\x020.\x03\x02" +
        "\x02\x0212\x07\x04\x02\x022\x05\x03\x02\x02\x0235\x05\b\x05\x0243\x03" +
        "\x02\x02\x0256\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02\x02\x027\x07" +
        "\x03\x02\x02\x028<\x07\x05\x02\x029;\x05\n\x06\x02:9\x03\x02\x02\x02;" +
        ">\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=\t\x03\x02\x02\x02" +
        "><\x03\x02\x02\x02?L\x05\f\x07\x02@L\x05\x0E\b\x02AL\x05\x10\t\x02BL\x05" +
        "\x12\n\x02CL\x05\x14\v\x02DL\x05\x16\f\x02EL\x05\x18\r\x02FL\x05\x1A\x0E" +
        "\x02GL\x05\x1C\x0F\x02HL\x05\x1E\x10\x02IL\x05 \x11\x02JL\x05\"\x12\x02" +
        "K?\x03\x02\x02\x02K@\x03\x02\x02\x02KA\x03\x02\x02\x02KB\x03\x02\x02\x02" +
        "KC\x03\x02\x02\x02KD\x03\x02\x02\x02KE\x03\x02\x02\x02KF\x03\x02\x02\x02" +
        "KG\x03\x02\x02\x02KH\x03\x02\x02\x02KI\x03\x02\x02\x02KJ\x03\x02\x02\x02" +
        "L\v\x03\x02\x02\x02MN\x07L\x02\x02NT\t\x02\x02\x02OP\x07\x06\x02\x02P" +
        "T\x07N\x02\x02QR\x07\x07\x02\x02RT\x07O\x02\x02SM\x03\x02\x02\x02SO\x03" +
        "\x02\x02\x02SQ\x03\x02\x02\x02T\r\x03\x02\x02\x02UW\x07\b\x02\x02VX\x07" +
        "O\x02\x02WV\x03\x02\x02\x02XY\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03" +
        "\x02\x02\x02Zj\x03\x02\x02\x02[]\x07\t\x02\x02\\^\x07O\x02\x02]\\\x03" +
        "\x02\x02\x02^_\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02\x02\x02`j\x03" +
        "\x02\x02\x02ac\x07\n\x02\x02bd\x07O\x02\x02cb\x03\x02\x02\x02de\x03\x02" +
        "\x02\x02ec\x03\x02\x02\x02ef\x03\x02\x02\x02fj\x03\x02\x02\x02gh\x07\v" +
        "\x02\x02hj\x07O\x02\x02iU\x03\x02\x02\x02i[\x03\x02\x02\x02ia\x03\x02" +
        "\x02\x02ig\x03\x02\x02\x02j\x0F\x03\x02\x02\x02kl\x07\f\x02\x02l|\x07" +
        "O\x02\x02mn\x07\r\x02\x02n|\x07O\x02\x02op\x07\x0E\x02\x02p|\x07O\x02" +
        "\x02qr\x07\x0F\x02\x02r|\x07O\x02\x02st\x07\x10\x02\x02t|\x07O\x02\x02" +
        "uv\x07\x11\x02\x02v|\x07O\x02\x02wx\x07\x12\x02\x02x|\x07O\x02\x02yz\x07" +
        "\x13\x02\x02z|\x07O\x02\x02{k\x03\x02\x02\x02{m\x03\x02\x02\x02{o\x03" +
        "\x02\x02\x02{q\x03\x02\x02\x02{s\x03\x02\x02\x02{u\x03\x02\x02\x02{w\x03" +
        "\x02\x02\x02{y\x03\x02\x02\x02|\x11\x03\x02\x02\x02}~\x07\x14\x02\x02" +
        "~\x86\x07O\x02\x02\x7F\x80\x07\x15\x02\x02\x80\x86\x07N\x02\x02\x81\x82" +
        "\x07\x16\x02\x02\x82\x86\x07N\x02\x02\x83\x84\x07\x17\x02\x02\x84\x86" +
        "\x07O\x02\x02\x85}\x03\x02\x02\x02\x85\x7F\x03\x02\x02\x02\x85\x81\x03" +
        "\x02\x02\x02\x85\x83\x03\x02\x02\x02\x86\x13\x03\x02\x02\x02\x87\x89\x07" +
        "\x18\x02\x02\x88\x8A\x07O\x02\x02\x89\x88\x03\x02\x02\x02\x8A\x8B\x03" +
        "\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\xC1\x03" +
        "\x02\x02\x02\x8D\x8F\x07\x19\x02\x02\x8E\x90\x07O\x02\x02\x8F\x8E\x03" +
        "\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x92\x03" +
        "\x02\x02\x02\x92\xC1\x03\x02\x02\x02\x93\x9A\x07\x1A\x02\x02\x94\x9B\x07" +
        "N\x02\x02\x95\x97\x07O\x02\x02\x96\x95\x03\x02\x02\x02\x97\x98\x03\x02" +
        "\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9B\x03\x02" +
        "\x02\x02\x9A\x94\x03\x02\x02\x02\x9A\x96\x03\x02\x02\x02\x9B\xC1\x03\x02" +
        "\x02\x02\x9C\x9E\x07\x1B\x02\x02\x9D\x9F\x07O\x02\x02\x9E\x9D\x03\x02" +
        "\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02" +
        "\x02\x02\xA1\xC1\x03\x02\x02\x02\xA2\xA4\x07\x1C\x02\x02\xA3\xA5\x07O" +
        "\x02\x02\xA4\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA4\x03\x02" +
        "\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xC1\x03\x02\x02\x02\xA8\xAA\x07\x1D" +
        "\x02\x02\xA9\xAB\x07O\x02\x02\xAA\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02" +
        "\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xC1\x03\x02" +
        "\x02\x02\xAE\xB0\x07\x1E\x02\x02\xAF\xB1\x07O\x02\x02\xB0\xAF\x03\x02" +
        "\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02" +
        "\x02\x02\xB3\xC1\x03\x02\x02\x02\xB4\xB6\x07\x1F\x02\x02\xB5\xB7\x07O" +
        "\x02\x02\xB6\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB6\x03\x02" +
        "\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xC1\x03\x02\x02\x02\xBA\xBC\x07 " +
        "\x02\x02\xBB\xBD\x07O\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02" +
        "\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02" +
        "\x02\x02\xC0\x87\x03\x02\x02\x02\xC0\x8D\x03\x02\x02\x02\xC0\x93\x03\x02" +
        "\x02\x02\xC0\x9C\x03\x02\x02\x02\xC0\xA2\x03\x02\x02\x02\xC0\xA8\x03\x02" +
        "\x02\x02\xC0\xAE\x03\x02\x02\x02\xC0\xB4\x03\x02\x02\x02\xC0\xBA\x03\x02" +
        "\x02\x02\xC1\x15\x03\x02\x02\x02\xC2\xC3\x07!\x02\x02\xC3\xCF\x07O\x02" +
        "\x02\xC4\xC5\x07\"\x02\x02\xC5\xCF\x07O\x02\x02\xC6\xC7\x07#\x02\x02\xC7" +
        "\xCF\x07O\x02\x02\xC8\xC9\x07$\x02\x02\xC9\xCF\x07O\x02\x02\xCA\xCB\x07" +
        "%\x02\x02\xCB\xCF\x07O\x02\x02\xCC\xCD\x07&\x02\x02\xCD\xCF\x07O\x02\x02" +
        "\xCE\xC2\x03\x02\x02\x02\xCE\xC4\x03\x02\x02\x02\xCE\xC6\x03\x02\x02\x02" +
        "\xCE\xC8\x03\x02\x02\x02\xCE\xCA\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02" +
        "\xCF\x17\x03\x02\x02\x02\xD0\xD1\x07\'\x02\x02\xD1\xFB\x07O\x02\x02\xD2" +
        "\xD3\x07(\x02\x02\xD3\xFB\x07O\x02\x02\xD4\xD5\x07)\x02\x02\xD5\xFB\x07" +
        "O\x02\x02\xD6\xD7\x07*\x02\x02\xD7\xFB\x07O\x02\x02\xD8\xD9\x07+\x02\x02" +
        "\xD9\xFB\x07O\x02\x02\xDA\xDB\x07,\x02\x02\xDB\xFB\x07O\x02\x02\xDC\xDD" +
        "\x07-\x02\x02\xDD\xFB\x07O\x02\x02\xDE\xDF\x07.\x02\x02\xDF\xFB\x07O\x02" +
        "\x02\xE0\xE1\x07/\x02\x02\xE1\xFB\x07O\x02\x02\xE2\xE3\x070\x02\x02\xE3" +
        "\xFB\x07O\x02\x02\xE4\xE5\x071\x02\x02\xE5\xFB\x07O\x02\x02\xE6\xE7\x07" +
        "2\x02\x02\xE7\xFB\x07O\x02\x02\xE8\xE9\x073\x02\x02\xE9\xFB\x07O\x02\x02" +
        "\xEA\xEB\x074\x02\x02\xEB\xFB\x07O\x02\x02\xEC\xED\x075\x02\x02\xED\xFB" +
        "\x07O\x02\x02\xEE\xEF\x076\x02\x02\xEF\xFB\x07O\x02\x02\xF0\xF1\x077\x02" +
        "\x02\xF1\xFB\x07O\x02\x02\xF2\xF3\x078\x02\x02\xF3\xFB\x07O\x02\x02\xF4" +
        "\xF5\x079\x02\x02\xF5\xFB\x07O\x02\x02\xF6\xF7\x07:\x02\x02\xF7\xFB\x07" +
        "O\x02\x02\xF8\xF9\x07;\x02\x02\xF9\xFB\x07O\x02\x02\xFA\xD0\x03\x02\x02" +
        "\x02\xFA\xD2\x03\x02\x02\x02\xFA\xD4\x03\x02\x02\x02\xFA\xD6\x03\x02\x02" +
        "\x02\xFA\xD8\x03\x02\x02\x02\xFA\xDA\x03\x02\x02\x02\xFA\xDC\x03\x02\x02" +
        "\x02\xFA\xDE\x03\x02\x02\x02\xFA\xE0\x03\x02\x02\x02\xFA\xE2\x03\x02\x02" +
        "\x02\xFA\xE4\x03\x02\x02\x02\xFA\xE6\x03\x02\x02\x02\xFA\xE8\x03\x02\x02" +
        "\x02\xFA\xEA\x03\x02\x02\x02\xFA\xEC\x03\x02\x02\x02\xFA\xEE\x03\x02\x02" +
        "\x02\xFA\xF0\x03\x02\x02\x02\xFA\xF2\x03\x02\x02\x02\xFA\xF4\x03\x02\x02" +
        "\x02\xFA\xF6\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\x19\x03\x02\x02" +
        "\x02\xFC\xFD\x07<\x02\x02\xFD\u0105\x07O\x02\x02\xFE\xFF\x07=\x02\x02" +
        "\xFF\u0105\x07O\x02\x02\u0100\u0101\x07>\x02\x02\u0101\u0105\x07O\x02" +
        "\x02\u0102\u0103\x07?\x02\x02\u0103\u0105\x07O\x02\x02\u0104\xFC\x03\x02" +
        "\x02\x02\u0104\xFE\x03\x02\x02\x02\u0104\u0100\x03\x02\x02\x02\u0104\u0102" +
        "\x03\x02\x02\x02\u0105\x1B\x03\x02\x02\x02\u0106\u0107\x07@\x02\x02\u0107" +
        "\u0111\t\x02\x02\x02\u0108\u0109\x07A\x02\x02\u0109\u0111\x07O\x02\x02" +
        "\u010A\u010C\x07B\x02\x02\u010B\u010D\x07O\x02\x02\u010C\u010B\x03\x02" +
        "\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010E" +
        "\u010F\x03\x02\x02\x02\u010F\u0111\x03\x02\x02\x02\u0110\u0106\x03\x02" +
        "\x02\x02\u0110\u0108\x03\x02\x02\x02\u0110\u010A\x03\x02\x02\x02\u0111" +
        "\x1D\x03\x02\x02\x02\u0112\u0113\x07C\x02\x02\u0113\u011D\x07O\x02\x02" +
        "\u0114\u0115\x07D\x02\x02\u0115\u011D\x07O\x02\x02\u0116\u0117\x07E\x02" +
        "\x02\u0117\u011D\x07O\x02\x02\u0118\u0119\x07F\x02\x02\u0119\u011D\x07" +
        "O\x02\x02\u011A\u011B\x07G\x02\x02\u011B\u011D\x07O\x02\x02\u011C\u0112" +
        "\x03\x02\x02\x02\u011C\u0114\x03\x02\x02\x02\u011C\u0116\x03\x02\x02\x02" +
        "\u011C\u0118\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011D\x1F\x03" +
        "\x02\x02\x02\u011E\u011F\x07H\x02\x02\u011F\u0135\x07O\x02\x02\u0120\u0121" +
        "\x07I\x02\x02\u0121\u0135\x07O\x02\x02\u0122\u0129\x07J\x02\x02\u0123" +
        "\u012A\x07N\x02\x02\u0124\u0126\x07O\x02\x02\u0125\u0124\x03\x02\x02\x02" +
        "\u0126\u0127\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03" +
        "\x02\x02\x02\u0128\u012A\x03\x02\x02\x02\u0129\u0123\x03\x02\x02\x02\u0129" +
        "\u0125\x03\x02\x02\x02\u012A\u0135\x03\x02\x02\x02\u012B\u0132\x07K\x02" +
        "\x02\u012C\u0133\x07N\x02\x02\u012D\u012F\x07O\x02\x02\u012E\u012D\x03" +
        "\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130" +
        "\u0131\x03\x02\x02\x02\u0131\u0133\x03\x02\x02\x02\u0132\u012C\x03\x02" +
        "\x02\x02\u0132\u012E\x03\x02\x02\x02\u0133\u0135\x03\x02\x02\x02\u0134" +
        "\u011E\x03\x02\x02\x02\u0134\u0120\x03\x02\x02\x02\u0134\u0122\x03\x02" +
        "\x02\x02\u0134\u012B\x03\x02\x02\x02\u0135!\x03\x02\x02\x02\u0136\u013D" +
        "\x07M\x02\x02\u0137\u013E\x07N\x02\x02\u0138\u013A\x07O\x02\x02\u0139" +
        "\u0138\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u0139\x03\x02" +
        "\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013E\x03\x02\x02\x02\u013D" +
        "\u0137\x03\x02\x02\x02\u013D\u0139\x03\x02\x02\x02\u013E#\x03\x02\x02" +
        "\x02&\'.6<KSY_ei{\x85\x8B\x91\x98\x9A\xA0\xA6\xAC\xB2\xB8\xBE\xC0\xCE" +
        "\xFA\u0104\u010E\u0110\u011C\u0127\u0129\u0130\u0132\u0134\u013B\u013D";
    return sgfParser;
}(Parser_1.Parser));
exports.sgfParser = sgfParser;
var CollectionContext = /** @class */ (function (_super) {
    __extends(CollectionContext, _super);
    function CollectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CollectionContext.prototype.gameTree = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(GameTreeContext);
        }
        else {
            return this.getRuleContext(i, GameTreeContext);
        }
    };
    Object.defineProperty(CollectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sgfParser.RULE_collection; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CollectionContext.prototype.enterRule = function (listener) {
        if (listener.enterCollection) {
            listener.enterCollection(this);
        }
    };
    // @Override
    CollectionContext.prototype.exitRule = function (listener) {
        if (listener.exitCollection) {
            listener.exitCollection(this);
        }
    };
    // @Override
    CollectionContext.prototype.accept = function (visitor) {
        if (visitor.visitCollection) {
            return visitor.visitCollection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CollectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CollectionContext = CollectionContext;
var GameTreeContext = /** @class */ (function (_super) {
    __extends(GameTreeContext, _super);
    function GameTreeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GameTreeContext.prototype.sequence = function () {
        return this.getRuleContext(0, SequenceContext);
    };
    GameTreeContext.prototype.gameTree = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(GameTreeContext);
        }
        else {
            return this.getRuleContext(i, GameTreeContext);
        }
    };
    Object.defineProperty(GameTreeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sgfParser.RULE_gameTree; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GameTreeContext.prototype.enterRule = function (listener) {
        if (listener.enterGameTree) {
            listener.enterGameTree(this);
        }
    };
    // @Override
    GameTreeContext.prototype.exitRule = function (listener) {
        if (listener.exitGameTree) {
            listener.exitGameTree(this);
        }
    };
    // @Override
    GameTreeContext.prototype.accept = function (visitor) {
        if (visitor.visitGameTree) {
            return visitor.visitGameTree(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GameTreeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GameTreeContext = GameTreeContext;
var SequenceContext = /** @class */ (function (_super) {
    __extends(SequenceContext, _super);
    function SequenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SequenceContext.prototype.node = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NodeContext);
        }
        else {
            return this.getRuleContext(i, NodeContext);
        }
    };
    Object.defineProperty(SequenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sgfParser.RULE_sequence; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SequenceContext.prototype.enterRule = function (listener) {
        if (listener.enterSequence) {
            listener.enterSequence(this);
        }
    };
    // @Override
    SequenceContext.prototype.exitRule = function (listener) {
        if (listener.exitSequence) {
            listener.exitSequence(this);
        }
    };
    // @Override
    SequenceContext.prototype.accept = function (visitor) {
        if (visitor.visitSequence) {
            return visitor.visitSequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SequenceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SequenceContext = SequenceContext;
var NodeContext = /** @class */ (function (_super) {
    __extends(NodeContext, _super);
    function NodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NodeContext.prototype.property = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }
        else {
            return this.getRuleContext(i, PropertyContext);
        }
    };
    Object.defineProperty(NodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sgfParser.RULE_node; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NodeContext.prototype.enterRule = function (listener) {
        if (listener.enterNode) {
            listener.enterNode(this);
        }
    };
    // @Override
    NodeContext.prototype.exitRule = function (listener) {
        if (listener.exitNode) {
            listener.exitNode(this);
        }
    };
    // @Override
    NodeContext.prototype.accept = function (visitor) {
        if (visitor.visitNode) {
            return visitor.visitNode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NodeContext = NodeContext;
var PropertyContext = /** @class */ (function (_super) {
    __extends(PropertyContext, _super);
    function PropertyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyContext.prototype.move = function () {
        return this.tryGetRuleContext(0, MoveContext);
    };
    PropertyContext.prototype.setup = function () {
        return this.tryGetRuleContext(0, SetupContext);
    };
    PropertyContext.prototype.nodeAnnotation = function () {
        return this.tryGetRuleContext(0, NodeAnnotationContext);
    };
    PropertyContext.prototype.moveAnnotation = function () {
        return this.tryGetRuleContext(0, MoveAnnotationContext);
    };
    PropertyContext.prototype.markup = function () {
        return this.tryGetRuleContext(0, MarkupContext);
    };
    PropertyContext.prototype.root = function () {
        return this.tryGetRuleContext(0, RootContext);
    };
    PropertyContext.prototype.gameInfo = function () {
        return this.tryGetRuleContext(0, GameInfoContext);
    };
    PropertyContext.prototype.timing = function () {
        return this.tryGetRuleContext(0, TimingContext);
    };
    PropertyContext.prototype.misc = function () {
        return this.tryGetRuleContext(0, MiscContext);
    };
    PropertyContext.prototype.loa = function () {
        return this.tryGetRuleContext(0, LoaContext);
    };
    PropertyContext.prototype.go = function () {
        return this.tryGetRuleContext(0, GoContext);
    };
    PropertyContext.prototype.privateProp = function () {
        return this.tryGetRuleContext(0, PrivatePropContext);
    };
    Object.defineProperty(PropertyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sgfParser.RULE_property; },
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
var MoveContext = /** @class */ (function (_super) {
    __extends(MoveContext, _super);
    function MoveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MoveContext.prototype.COLOR = function () { return this.tryGetToken(sgfParser.COLOR, 0); };
    MoveContext.prototype.NONE = function () { return this.tryGetToken(sgfParser.NONE, 0); };
    MoveContext.prototype.TEXT = function () { return this.tryGetToken(sgfParser.TEXT, 0); };
    Object.defineProperty(MoveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sgfParser.RULE_move; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MoveContext.prototype.enterRule = function (listener) {
        if (listener.enterMove) {
            listener.enterMove(this);
        }
    };
    // @Override
    MoveContext.prototype.exitRule = function (listener) {
        if (listener.exitMove) {
            listener.exitMove(this);
        }
    };
    // @Override
    MoveContext.prototype.accept = function (visitor) {
        if (visitor.visitMove) {
            return visitor.visitMove(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MoveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MoveContext = MoveContext;
var SetupContext = /** @class */ (function (_super) {
    __extends(SetupContext, _super);
    function SetupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetupContext.prototype.TEXT = function (i) {
        if (i === undefined) {
            return this.getTokens(sgfParser.TEXT);
        }
        else {
            return this.getToken(sgfParser.TEXT, i);
        }
    };
    Object.defineProperty(SetupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sgfParser.RULE_setup; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetupContext.prototype.enterRule = function (listener) {
        if (listener.enterSetup) {
            listener.enterSetup(this);
        }
    };
    // @Override
    SetupContext.prototype.exitRule = function (listener) {
        if (listener.exitSetup) {
            listener.exitSetup(this);
        }
    };
    // @Override
    SetupContext.prototype.accept = function (visitor) {
        if (visitor.visitSetup) {
            return visitor.visitSetup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetupContext = SetupContext;
var NodeAnnotationContext = /** @class */ (function (_super) {
    __extends(NodeAnnotationContext, _super);
    function NodeAnnotationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NodeAnnotationContext.prototype.TEXT = function () { return this.getToken(sgfParser.TEXT, 0); };
    Object.defineProperty(NodeAnnotationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sgfParser.RULE_nodeAnnotation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NodeAnnotationContext.prototype.enterRule = function (listener) {
        if (listener.enterNodeAnnotation) {
            listener.enterNodeAnnotation(this);
        }
    };
    // @Override
    NodeAnnotationContext.prototype.exitRule = function (listener) {
        if (listener.exitNodeAnnotation) {
            listener.exitNodeAnnotation(this);
        }
    };
    // @Override
    NodeAnnotationContext.prototype.accept = function (visitor) {
        if (visitor.visitNodeAnnotation) {
            return visitor.visitNodeAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NodeAnnotationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NodeAnnotationContext = NodeAnnotationContext;
var MoveAnnotationContext = /** @class */ (function (_super) {
    __extends(MoveAnnotationContext, _super);
    function MoveAnnotationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MoveAnnotationContext.prototype.TEXT = function () { return this.tryGetToken(sgfParser.TEXT, 0); };
    MoveAnnotationContext.prototype.NONE = function () { return this.tryGetToken(sgfParser.NONE, 0); };
    Object.defineProperty(MoveAnnotationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sgfParser.RULE_moveAnnotation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MoveAnnotationContext.prototype.enterRule = function (listener) {
        if (listener.enterMoveAnnotation) {
            listener.enterMoveAnnotation(this);
        }
    };
    // @Override
    MoveAnnotationContext.prototype.exitRule = function (listener) {
        if (listener.exitMoveAnnotation) {
            listener.exitMoveAnnotation(this);
        }
    };
    // @Override
    MoveAnnotationContext.prototype.accept = function (visitor) {
        if (visitor.visitMoveAnnotation) {
            return visitor.visitMoveAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MoveAnnotationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MoveAnnotationContext = MoveAnnotationContext;
var MarkupContext = /** @class */ (function (_super) {
    __extends(MarkupContext, _super);
    function MarkupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MarkupContext.prototype.TEXT = function (i) {
        if (i === undefined) {
            return this.getTokens(sgfParser.TEXT);
        }
        else {
            return this.getToken(sgfParser.TEXT, i);
        }
    };
    MarkupContext.prototype.NONE = function () { return this.tryGetToken(sgfParser.NONE, 0); };
    Object.defineProperty(MarkupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sgfParser.RULE_markup; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MarkupContext.prototype.enterRule = function (listener) {
        if (listener.enterMarkup) {
            listener.enterMarkup(this);
        }
    };
    // @Override
    MarkupContext.prototype.exitRule = function (listener) {
        if (listener.exitMarkup) {
            listener.exitMarkup(this);
        }
    };
    // @Override
    MarkupContext.prototype.accept = function (visitor) {
        if (visitor.visitMarkup) {
            return visitor.visitMarkup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MarkupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MarkupContext = MarkupContext;
var RootContext = /** @class */ (function (_super) {
    __extends(RootContext, _super);
    function RootContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RootContext.prototype.TEXT = function () { return this.getToken(sgfParser.TEXT, 0); };
    Object.defineProperty(RootContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sgfParser.RULE_root; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RootContext.prototype.enterRule = function (listener) {
        if (listener.enterRoot) {
            listener.enterRoot(this);
        }
    };
    // @Override
    RootContext.prototype.exitRule = function (listener) {
        if (listener.exitRoot) {
            listener.exitRoot(this);
        }
    };
    // @Override
    RootContext.prototype.accept = function (visitor) {
        if (visitor.visitRoot) {
            return visitor.visitRoot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RootContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RootContext = RootContext;
var GameInfoContext = /** @class */ (function (_super) {
    __extends(GameInfoContext, _super);
    function GameInfoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GameInfoContext.prototype.TEXT = function () { return this.getToken(sgfParser.TEXT, 0); };
    Object.defineProperty(GameInfoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sgfParser.RULE_gameInfo; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GameInfoContext.prototype.enterRule = function (listener) {
        if (listener.enterGameInfo) {
            listener.enterGameInfo(this);
        }
    };
    // @Override
    GameInfoContext.prototype.exitRule = function (listener) {
        if (listener.exitGameInfo) {
            listener.exitGameInfo(this);
        }
    };
    // @Override
    GameInfoContext.prototype.accept = function (visitor) {
        if (visitor.visitGameInfo) {
            return visitor.visitGameInfo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GameInfoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GameInfoContext = GameInfoContext;
var TimingContext = /** @class */ (function (_super) {
    __extends(TimingContext, _super);
    function TimingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TimingContext.prototype.TEXT = function () { return this.getToken(sgfParser.TEXT, 0); };
    Object.defineProperty(TimingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sgfParser.RULE_timing; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TimingContext.prototype.enterRule = function (listener) {
        if (listener.enterTiming) {
            listener.enterTiming(this);
        }
    };
    // @Override
    TimingContext.prototype.exitRule = function (listener) {
        if (listener.exitTiming) {
            listener.exitTiming(this);
        }
    };
    // @Override
    TimingContext.prototype.accept = function (visitor) {
        if (visitor.visitTiming) {
            return visitor.visitTiming(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TimingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TimingContext = TimingContext;
var MiscContext = /** @class */ (function (_super) {
    __extends(MiscContext, _super);
    function MiscContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MiscContext.prototype.NONE = function () { return this.tryGetToken(sgfParser.NONE, 0); };
    MiscContext.prototype.TEXT = function (i) {
        if (i === undefined) {
            return this.getTokens(sgfParser.TEXT);
        }
        else {
            return this.getToken(sgfParser.TEXT, i);
        }
    };
    Object.defineProperty(MiscContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sgfParser.RULE_misc; },
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
var LoaContext = /** @class */ (function (_super) {
    __extends(LoaContext, _super);
    function LoaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LoaContext.prototype.TEXT = function () { return this.getToken(sgfParser.TEXT, 0); };
    Object.defineProperty(LoaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sgfParser.RULE_loa; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LoaContext.prototype.enterRule = function (listener) {
        if (listener.enterLoa) {
            listener.enterLoa(this);
        }
    };
    // @Override
    LoaContext.prototype.exitRule = function (listener) {
        if (listener.exitLoa) {
            listener.exitLoa(this);
        }
    };
    // @Override
    LoaContext.prototype.accept = function (visitor) {
        if (visitor.visitLoa) {
            return visitor.visitLoa(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LoaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LoaContext = LoaContext;
var GoContext = /** @class */ (function (_super) {
    __extends(GoContext, _super);
    function GoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GoContext.prototype.TEXT = function (i) {
        if (i === undefined) {
            return this.getTokens(sgfParser.TEXT);
        }
        else {
            return this.getToken(sgfParser.TEXT, i);
        }
    };
    GoContext.prototype.NONE = function () { return this.tryGetToken(sgfParser.NONE, 0); };
    Object.defineProperty(GoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sgfParser.RULE_go; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GoContext.prototype.enterRule = function (listener) {
        if (listener.enterGo) {
            listener.enterGo(this);
        }
    };
    // @Override
    GoContext.prototype.exitRule = function (listener) {
        if (listener.exitGo) {
            listener.exitGo(this);
        }
    };
    // @Override
    GoContext.prototype.accept = function (visitor) {
        if (visitor.visitGo) {
            return visitor.visitGo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GoContext = GoContext;
var PrivatePropContext = /** @class */ (function (_super) {
    __extends(PrivatePropContext, _super);
    function PrivatePropContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrivatePropContext.prototype.UCLETTER = function () { return this.getToken(sgfParser.UCLETTER, 0); };
    PrivatePropContext.prototype.NONE = function () { return this.tryGetToken(sgfParser.NONE, 0); };
    PrivatePropContext.prototype.TEXT = function (i) {
        if (i === undefined) {
            return this.getTokens(sgfParser.TEXT);
        }
        else {
            return this.getToken(sgfParser.TEXT, i);
        }
    };
    Object.defineProperty(PrivatePropContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return sgfParser.RULE_privateProp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrivatePropContext.prototype.enterRule = function (listener) {
        if (listener.enterPrivateProp) {
            listener.enterPrivateProp(this);
        }
    };
    // @Override
    PrivatePropContext.prototype.exitRule = function (listener) {
        if (listener.exitPrivateProp) {
            listener.exitPrivateProp(this);
        }
    };
    // @Override
    PrivatePropContext.prototype.accept = function (visitor) {
        if (visitor.visitPrivateProp) {
            return visitor.visitPrivateProp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrivatePropContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrivatePropContext = PrivatePropContext;
