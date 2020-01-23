"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/guido/guido.g4 by ANTLR 4.7.3-SNAPSHOT
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
var guidoParser = /** @class */ (function (_super) {
    __extends(guidoParser, _super);
    function guidoParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(guidoParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(guidoParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return guidoParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(guidoParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "guido.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(guidoParser.prototype, "ruleNames", {
        // @Override
        get: function () { return guidoParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(guidoParser.prototype, "serializedATN", {
        // @Override
        get: function () { return guidoParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    guidoParser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, guidoParser.RULE_prog);
        var _la;
        try {
            this.state = 64;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case guidoParser.T__0:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 59;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 58;
                                        this.segment();
                                    }
                                }
                                this.state = 61;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === guidoParser.T__0);
                        }
                    }
                    break;
                case guidoParser.T__3:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 63;
                        this.sequencelist();
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
    guidoParser.prototype.segment = function () {
        var _localctx = new SegmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, guidoParser.RULE_segment);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 66;
                this.match(guidoParser.T__0);
                this.state = 68;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 67;
                            this.sequencelist();
                        }
                    }
                    this.state = 70;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === guidoParser.T__3);
                this.state = 72;
                this.match(guidoParser.T__1);
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
    guidoParser.prototype.sequencelist = function () {
        var _localctx = new SequencelistContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, guidoParser.RULE_sequencelist);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 74;
                this.sequence();
                this.state = 79;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === guidoParser.T__2) {
                    {
                        {
                            this.state = 75;
                            this.match(guidoParser.T__2);
                            this.state = 76;
                            this.sequence();
                        }
                    }
                    this.state = 81;
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
    guidoParser.prototype.sequence = function () {
        var _localctx = new SequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, guidoParser.RULE_sequence);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 82;
                this.match(guidoParser.T__3);
                this.state = 86;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 86;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case guidoParser.TAGSTART:
                                {
                                    this.state = 83;
                                    this.tag();
                                }
                                break;
                            case guidoParser.REST:
                            case guidoParser.STRING:
                                {
                                    this.state = 84;
                                    this.note();
                                }
                                break;
                            case guidoParser.T__0:
                                {
                                    this.state = 85;
                                    this.chord();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 88;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << guidoParser.T__0) | (1 << guidoParser.TAGSTART) | (1 << guidoParser.REST) | (1 << guidoParser.STRING))) !== 0));
                this.state = 90;
                this.match(guidoParser.T__4);
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
    guidoParser.prototype.tag = function () {
        var _localctx = new TagContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, guidoParser.RULE_tag);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 92;
                this.match(guidoParser.TAGSTART);
                this.state = 93;
                this.tagname();
                this.state = 95;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === guidoParser.T__5) {
                    {
                        this.state = 94;
                        this.parameters();
                    }
                }
                this.state = 98;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === guidoParser.T__8) {
                    {
                        this.state = 97;
                        this.notes();
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
    guidoParser.prototype.tagname = function () {
        var _localctx = new TagnameContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, guidoParser.RULE_tagname);
        try {
            this.state = 110;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case guidoParser.T__17:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 100;
                        this.title();
                    }
                    break;
                case guidoParser.T__18:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 101;
                        this.tempo();
                    }
                    break;
                case guidoParser.T__19:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 102;
                        this.clef();
                    }
                    break;
                case guidoParser.T__20:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 103;
                        this.meter();
                    }
                    break;
                case guidoParser.T__21:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 104;
                        this.slur();
                    }
                    break;
                case guidoParser.T__22:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 105;
                        this.key();
                    }
                    break;
                case guidoParser.T__23:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 106;
                        this.barformat();
                    }
                    break;
                case guidoParser.T__24:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 107;
                        this.staff();
                    }
                    break;
                case guidoParser.T__26:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 108;
                        this.t();
                    }
                    break;
                case guidoParser.T__25:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 109;
                        this.repeatEnd();
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
    guidoParser.prototype.parameters = function () {
        var _localctx = new ParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, guidoParser.RULE_parameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 112;
                this.match(guidoParser.T__5);
                this.state = 113;
                this.parameter();
                this.state = 118;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === guidoParser.T__2) {
                    {
                        {
                            this.state = 114;
                            this.match(guidoParser.T__2);
                            this.state = 115;
                            this.parameter();
                        }
                    }
                    this.state = 120;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 121;
                this.match(guidoParser.T__6);
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
    guidoParser.prototype.parameter = function () {
        var _localctx = new ParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, guidoParser.RULE_parameter);
        try {
            this.state = 126;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case guidoParser.STRINGLITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 123;
                        this.match(guidoParser.STRINGLITERAL);
                    }
                    break;
                case guidoParser.T__12:
                case guidoParser.T__13:
                case guidoParser.NUMBER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 124;
                        this.number();
                    }
                    break;
                case guidoParser.STRING:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 125;
                        this.kvpair();
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
    guidoParser.prototype.kvpair = function () {
        var _localctx = new KvpairContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, guidoParser.RULE_kvpair);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 128;
                this.match(guidoParser.STRING);
                this.state = 129;
                this.match(guidoParser.T__7);
                this.state = 131;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 130;
                            _la = this._input.LA(1);
                            if (!(_la === guidoParser.NUMBER || _la === guidoParser.STRING)) {
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
                    this.state = 133;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === guidoParser.NUMBER || _la === guidoParser.STRING);
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
    guidoParser.prototype.notes = function () {
        var _localctx = new NotesContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, guidoParser.RULE_notes);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 135;
                this.match(guidoParser.T__8);
                this.state = 138;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 138;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case guidoParser.REST:
                            case guidoParser.STRING:
                                {
                                    this.state = 136;
                                    this.note();
                                }
                                break;
                            case guidoParser.T__0:
                                {
                                    this.state = 137;
                                    this.chord();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 140;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << guidoParser.T__0) | (1 << guidoParser.REST) | (1 << guidoParser.STRING))) !== 0));
                this.state = 142;
                this.match(guidoParser.T__9);
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
    guidoParser.prototype.note = function () {
        var _localctx = new NoteContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, guidoParser.RULE_note);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 144;
                this.notename();
                this.state = 146;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === guidoParser.T__10 || _la === guidoParser.T__11) {
                    {
                        this.state = 145;
                        this.accidental();
                    }
                }
                this.state = 149;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            this.state = 148;
                            this.octave();
                        }
                        break;
                }
                this.state = 152;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                    case 1:
                        {
                            this.state = 151;
                            this.duration();
                        }
                        break;
                }
                this.state = 155;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === guidoParser.T__16) {
                    {
                        this.state = 154;
                        this.dotting();
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
    guidoParser.prototype.chord = function () {
        var _localctx = new ChordContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, guidoParser.RULE_chord);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 157;
                this.match(guidoParser.T__0);
                this.state = 158;
                this.note();
                this.state = 163;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === guidoParser.T__2) {
                    {
                        {
                            this.state = 159;
                            this.match(guidoParser.T__2);
                            this.state = 160;
                            this.note();
                        }
                    }
                    this.state = 165;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 166;
                this.match(guidoParser.T__1);
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
    guidoParser.prototype.notename = function () {
        var _localctx = new NotenameContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, guidoParser.RULE_notename);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 168;
                _la = this._input.LA(1);
                if (!(_la === guidoParser.REST || _la === guidoParser.STRING)) {
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
    guidoParser.prototype.accidental = function () {
        var _localctx = new AccidentalContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, guidoParser.RULE_accidental);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 170;
                _la = this._input.LA(1);
                if (!(_la === guidoParser.T__10 || _la === guidoParser.T__11)) {
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
    guidoParser.prototype.number = function () {
        var _localctx = new NumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, guidoParser.RULE_number);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 173;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === guidoParser.T__12 || _la === guidoParser.T__13) {
                    {
                        this.state = 172;
                        _la = this._input.LA(1);
                        if (!(_la === guidoParser.T__12 || _la === guidoParser.T__13)) {
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
                this.state = 175;
                this.match(guidoParser.NUMBER);
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
    guidoParser.prototype.octave = function () {
        var _localctx = new OctaveContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, guidoParser.RULE_octave);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 177;
                this.number();
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
    guidoParser.prototype.fraction = function () {
        var _localctx = new FractionContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, guidoParser.RULE_fraction);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 180;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << guidoParser.T__12) | (1 << guidoParser.T__13) | (1 << guidoParser.NUMBER))) !== 0)) {
                    {
                        this.state = 179;
                        this.number();
                    }
                }
                this.state = 184;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === guidoParser.T__14) {
                    {
                        this.state = 182;
                        this.match(guidoParser.T__14);
                        this.state = 183;
                        this.number();
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
    guidoParser.prototype.duration = function () {
        var _localctx = new DurationContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, guidoParser.RULE_duration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 187;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === guidoParser.T__15) {
                    {
                        this.state = 186;
                        this.match(guidoParser.T__15);
                    }
                }
                this.state = 189;
                this.fraction();
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
    guidoParser.prototype.dotting = function () {
        var _localctx = new DottingContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, guidoParser.RULE_dotting);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 192;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 191;
                            this.match(guidoParser.T__16);
                        }
                    }
                    this.state = 194;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === guidoParser.T__16);
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
    guidoParser.prototype.title = function () {
        var _localctx = new TitleContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, guidoParser.RULE_title);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 196;
                this.match(guidoParser.T__17);
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
    guidoParser.prototype.tempo = function () {
        var _localctx = new TempoContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, guidoParser.RULE_tempo);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 198;
                this.match(guidoParser.T__18);
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
    guidoParser.prototype.clef = function () {
        var _localctx = new ClefContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, guidoParser.RULE_clef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 200;
                this.match(guidoParser.T__19);
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
    guidoParser.prototype.meter = function () {
        var _localctx = new MeterContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, guidoParser.RULE_meter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 202;
                this.match(guidoParser.T__20);
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
    guidoParser.prototype.slur = function () {
        var _localctx = new SlurContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, guidoParser.RULE_slur);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 204;
                this.match(guidoParser.T__21);
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
    guidoParser.prototype.key = function () {
        var _localctx = new KeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, guidoParser.RULE_key);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                this.match(guidoParser.T__22);
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
    guidoParser.prototype.barformat = function () {
        var _localctx = new BarformatContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, guidoParser.RULE_barformat);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 208;
                this.match(guidoParser.T__23);
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
    guidoParser.prototype.staff = function () {
        var _localctx = new StaffContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, guidoParser.RULE_staff);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 210;
                this.match(guidoParser.T__24);
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
    guidoParser.prototype.repeatEnd = function () {
        var _localctx = new RepeatEndContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, guidoParser.RULE_repeatEnd);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 212;
                this.match(guidoParser.T__25);
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
    guidoParser.prototype.t = function () {
        var _localctx = new TContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, guidoParser.RULE_t);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 214;
                this.match(guidoParser.T__26);
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
    Object.defineProperty(guidoParser, "_ATN", {
        get: function () {
            if (!guidoParser.__ATN) {
                guidoParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(guidoParser._serializedATN));
            }
            return guidoParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    guidoParser.T__0 = 1;
    guidoParser.T__1 = 2;
    guidoParser.T__2 = 3;
    guidoParser.T__3 = 4;
    guidoParser.T__4 = 5;
    guidoParser.T__5 = 6;
    guidoParser.T__6 = 7;
    guidoParser.T__7 = 8;
    guidoParser.T__8 = 9;
    guidoParser.T__9 = 10;
    guidoParser.T__10 = 11;
    guidoParser.T__11 = 12;
    guidoParser.T__12 = 13;
    guidoParser.T__13 = 14;
    guidoParser.T__14 = 15;
    guidoParser.T__15 = 16;
    guidoParser.T__16 = 17;
    guidoParser.T__17 = 18;
    guidoParser.T__18 = 19;
    guidoParser.T__19 = 20;
    guidoParser.T__20 = 21;
    guidoParser.T__21 = 22;
    guidoParser.T__22 = 23;
    guidoParser.T__23 = 24;
    guidoParser.T__24 = 25;
    guidoParser.T__25 = 26;
    guidoParser.T__26 = 27;
    guidoParser.TAGSTART = 28;
    guidoParser.REST = 29;
    guidoParser.NUMBER = 30;
    guidoParser.STRING = 31;
    guidoParser.STRINGLITERAL = 32;
    guidoParser.COMMENT = 33;
    guidoParser.WS = 34;
    guidoParser.RULE_prog = 0;
    guidoParser.RULE_segment = 1;
    guidoParser.RULE_sequencelist = 2;
    guidoParser.RULE_sequence = 3;
    guidoParser.RULE_tag = 4;
    guidoParser.RULE_tagname = 5;
    guidoParser.RULE_parameters = 6;
    guidoParser.RULE_parameter = 7;
    guidoParser.RULE_kvpair = 8;
    guidoParser.RULE_notes = 9;
    guidoParser.RULE_note = 10;
    guidoParser.RULE_chord = 11;
    guidoParser.RULE_notename = 12;
    guidoParser.RULE_accidental = 13;
    guidoParser.RULE_number = 14;
    guidoParser.RULE_octave = 15;
    guidoParser.RULE_fraction = 16;
    guidoParser.RULE_duration = 17;
    guidoParser.RULE_dotting = 18;
    guidoParser.RULE_title = 19;
    guidoParser.RULE_tempo = 20;
    guidoParser.RULE_clef = 21;
    guidoParser.RULE_meter = 22;
    guidoParser.RULE_slur = 23;
    guidoParser.RULE_key = 24;
    guidoParser.RULE_barformat = 25;
    guidoParser.RULE_staff = 26;
    guidoParser.RULE_repeatEnd = 27;
    guidoParser.RULE_t = 28;
    // tslint:disable:no-trailing-whitespace
    guidoParser.ruleNames = [
        "prog", "segment", "sequencelist", "sequence", "tag", "tagname", "parameters",
        "parameter", "kvpair", "notes", "note", "chord", "notename", "accidental",
        "number", "octave", "fraction", "duration", "dotting", "title", "tempo",
        "clef", "meter", "slur", "key", "barformat", "staff", "repeatEnd", "t",
    ];
    guidoParser._LITERAL_NAMES = [
        undefined, "'{'", "'}'", "','", "'['", "']'", "'<'", "'>'", "'='", "'('",
        "')'", "'#'", "'&'", "'-'", "'+'", "'/'", "'*'", "'.'", "'title'", "'tempo'",
        "'clef'", "'meter'", "'slur'", "'key'", "'barFormat'", "'staff'", "'repeatEnd'",
        "'t'", "'\\'", "'_'",
    ];
    guidoParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "TAGSTART", "REST", "NUMBER", "STRING", "STRINGLITERAL", "COMMENT", "WS",
    ];
    guidoParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(guidoParser._LITERAL_NAMES, guidoParser._SYMBOLIC_NAMES, []);
    guidoParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03$\xDB\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x03\x02\x06\x02>\n\x02\r\x02\x0E\x02?\x03\x02" +
        "\x05\x02C\n\x02\x03\x03\x03\x03\x06\x03G\n\x03\r\x03\x0E\x03H\x03\x03" +
        "\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04P\n\x04\f\x04\x0E\x04S\v\x04\x03" +
        "\x05\x03\x05\x03\x05\x03\x05\x06\x05Y\n\x05\r\x05\x0E\x05Z\x03\x05\x03" +
        "\x05\x03\x06\x03\x06\x03\x06\x05\x06b\n\x06\x03\x06\x05\x06e\n\x06\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
        "\x07\x05\x07q\n\x07\x03\b\x03\b\x03\b\x03\b\x07\bw\n\b\f\b\x0E\bz\v\b" +
        "\x03\b\x03\b\x03\t\x03\t\x03\t\x05\t\x81\n\t\x03\n\x03\n\x03\n\x06\n\x86" +
        "\n\n\r\n\x0E\n\x87\x03\v\x03\v\x03\v\x06\v\x8D\n\v\r\v\x0E\v\x8E\x03\v" +
        "\x03\v\x03\f\x03\f\x05\f\x95\n\f\x03\f\x05\f\x98\n\f\x03\f\x05\f\x9B\n" +
        "\f\x03\f\x05\f\x9E\n\f\x03\r\x03\r\x03\r\x03\r\x07\r\xA4\n\r\f\r\x0E\r" +
        "\xA7\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x05\x10\xB0" +
        "\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x05\x12\xB7\n\x12\x03\x12" +
        "\x03\x12\x05\x12\xBB\n\x12\x03\x13\x05\x13\xBE\n\x13\x03\x13\x03\x13\x03" +
        "\x14\x06\x14\xC3\n\x14\r\x14\x0E\x14\xC4\x03\x15\x03\x15\x03\x16\x03\x16" +
        "\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B" +
        "\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x02\x02" +
        "\x02\x1F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
        "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
        "\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02\x02\x06\x03\x02" +
        " !\x04\x02\x1F\x1F!!\x03\x02\r\x0E\x03\x02\x0F\x10\x02\xDF\x02B\x03\x02" +
        "\x02\x02\x04D\x03\x02\x02\x02\x06L\x03\x02\x02\x02\bT\x03\x02\x02\x02" +
        "\n^\x03\x02\x02\x02\fp\x03\x02\x02\x02\x0Er\x03\x02\x02\x02\x10\x80\x03" +
        "\x02\x02\x02\x12\x82\x03\x02\x02\x02\x14\x89\x03\x02\x02\x02\x16\x92\x03" +
        "\x02\x02\x02\x18\x9F\x03\x02\x02\x02\x1A\xAA\x03\x02\x02\x02\x1C\xAC\x03" +
        "\x02\x02\x02\x1E\xAF\x03\x02\x02\x02 \xB3\x03\x02\x02\x02\"\xB6\x03\x02" +
        "\x02\x02$\xBD\x03\x02\x02\x02&\xC2\x03\x02\x02\x02(\xC6\x03\x02\x02\x02" +
        "*\xC8\x03\x02\x02\x02,\xCA\x03\x02\x02\x02.\xCC\x03\x02\x02\x020\xCE\x03" +
        "\x02\x02\x022\xD0\x03\x02\x02\x024\xD2\x03\x02\x02\x026\xD4\x03\x02\x02" +
        "\x028\xD6\x03\x02\x02\x02:\xD8\x03\x02\x02\x02<>\x05\x04\x03\x02=<\x03" +
        "\x02\x02\x02>?\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@C\x03" +
        "\x02\x02\x02AC\x05\x06\x04\x02B=\x03\x02\x02\x02BA\x03\x02\x02\x02C\x03" +
        "\x03\x02\x02\x02DF\x07\x03\x02\x02EG\x05\x06\x04\x02FE\x03\x02\x02\x02" +
        "GH\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02IJ\x03\x02\x02\x02" +
        "JK\x07\x04\x02\x02K\x05\x03\x02\x02\x02LQ\x05\b\x05\x02MN\x07\x05\x02" +
        "\x02NP\x05\b\x05\x02OM\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03\x02\x02" +
        "\x02QR\x03\x02\x02\x02R\x07\x03\x02\x02\x02SQ\x03\x02\x02\x02TX\x07\x06" +
        "\x02\x02UY\x05\n\x06\x02VY\x05\x16\f\x02WY\x05\x18\r\x02XU\x03\x02\x02" +
        "\x02XV\x03\x02\x02\x02XW\x03\x02\x02\x02YZ\x03\x02\x02\x02ZX\x03\x02\x02" +
        "\x02Z[\x03\x02\x02\x02[\\\x03\x02\x02\x02\\]\x07\x07\x02\x02]\t\x03\x02" +
        "\x02\x02^_\x07\x1E\x02\x02_a\x05\f\x07\x02`b\x05\x0E\b\x02a`\x03\x02\x02" +
        "\x02ab\x03\x02\x02\x02bd\x03\x02\x02\x02ce\x05\x14\v\x02dc\x03\x02\x02" +
        "\x02de\x03\x02\x02\x02e\v\x03\x02\x02\x02fq\x05(\x15\x02gq\x05*\x16\x02" +
        "hq\x05,\x17\x02iq\x05.\x18\x02jq\x050\x19\x02kq\x052\x1A\x02lq\x054\x1B" +
        "\x02mq\x056\x1C\x02nq\x05:\x1E\x02oq\x058\x1D\x02pf\x03\x02\x02\x02pg" +
        "\x03\x02\x02\x02ph\x03\x02\x02\x02pi\x03\x02\x02\x02pj\x03\x02\x02\x02" +
        "pk\x03\x02\x02\x02pl\x03\x02\x02\x02pm\x03\x02\x02\x02pn\x03\x02\x02\x02" +
        "po\x03\x02\x02\x02q\r\x03\x02\x02\x02rs\x07\b\x02\x02sx\x05\x10\t\x02" +
        "tu\x07\x05\x02\x02uw\x05\x10\t\x02vt\x03\x02\x02\x02wz\x03\x02\x02\x02" +
        "xv\x03\x02\x02\x02xy\x03\x02\x02\x02y{\x03\x02\x02\x02zx\x03\x02\x02\x02" +
        "{|\x07\t\x02\x02|\x0F\x03\x02\x02\x02}\x81\x07\"\x02\x02~\x81\x05\x1E" +
        "\x10\x02\x7F\x81\x05\x12\n\x02\x80}\x03\x02\x02\x02\x80~\x03\x02\x02\x02" +
        "\x80\x7F\x03\x02\x02\x02\x81\x11\x03\x02\x02\x02\x82\x83\x07!\x02\x02" +
        "\x83\x85\x07\n\x02\x02\x84\x86\t\x02\x02\x02\x85\x84\x03\x02\x02\x02\x86" +
        "\x87\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88" +
        "\x13\x03\x02\x02\x02\x89\x8C\x07\v\x02\x02\x8A\x8D\x05\x16\f\x02\x8B\x8D" +
        "\x05\x18\r\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D\x8E" +
        "\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90" +
        "\x03\x02\x02\x02\x90\x91\x07\f\x02\x02\x91\x15\x03\x02\x02\x02\x92\x94" +
        "\x05\x1A\x0E\x02\x93\x95\x05\x1C\x0F\x02\x94\x93\x03\x02\x02\x02\x94\x95" +
        "\x03\x02\x02\x02\x95\x97\x03\x02\x02\x02\x96\x98\x05 \x11\x02\x97\x96" +
        "\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9A\x03\x02\x02\x02\x99\x9B" +
        "\x05$\x13\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9D" +
        "\x03\x02\x02\x02\x9C\x9E\x05&\x14\x02\x9D\x9C\x03\x02\x02\x02\x9D\x9E" +
        "\x03\x02\x02\x02\x9E\x17\x03\x02\x02\x02\x9F\xA0\x07\x03\x02\x02\xA0\xA5" +
        "\x05\x16\f\x02\xA1\xA2\x07\x05\x02\x02\xA2\xA4\x05\x16\f\x02\xA3\xA1\x03" +
        "\x02\x02\x02\xA4\xA7\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA6\x03" +
        "\x02\x02\x02\xA6\xA8\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xA9\x07" +
        "\x04\x02\x02\xA9\x19\x03\x02\x02\x02\xAA\xAB\t\x03\x02\x02\xAB\x1B\x03" +
        "\x02\x02\x02\xAC\xAD\t\x04\x02\x02\xAD\x1D\x03\x02\x02\x02\xAE\xB0\t\x05" +
        "\x02\x02\xAF\xAE\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\x03\x02" +
        "\x02\x02\xB1\xB2\x07 \x02\x02\xB2\x1F\x03\x02\x02\x02\xB3\xB4\x05\x1E" +
        "\x10\x02\xB4!\x03\x02\x02\x02\xB5\xB7\x05\x1E\x10\x02\xB6\xB5\x03\x02" +
        "\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB9\x07\x11" +
        "\x02\x02\xB9\xBB\x05\x1E\x10\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02" +
        "\x02\x02\xBB#\x03\x02\x02\x02\xBC\xBE\x07\x12\x02\x02\xBD\xBC\x03\x02" +
        "\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC0\x05\"" +
        "\x12\x02\xC0%\x03\x02\x02\x02\xC1\xC3\x07\x13\x02\x02\xC2\xC1\x03\x02" +
        "\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02" +
        "\x02\x02\xC5\'\x03\x02\x02\x02\xC6\xC7\x07\x14\x02\x02\xC7)\x03\x02\x02" +
        "\x02\xC8\xC9\x07\x15\x02\x02\xC9+\x03\x02\x02\x02\xCA\xCB\x07\x16\x02" +
        "\x02\xCB-\x03\x02\x02\x02\xCC\xCD\x07\x17\x02\x02\xCD/\x03\x02\x02\x02" +
        "\xCE\xCF\x07\x18\x02\x02\xCF1\x03\x02\x02\x02\xD0\xD1\x07\x19\x02\x02" +
        "\xD13\x03\x02\x02\x02\xD2\xD3\x07\x1A\x02\x02\xD35\x03\x02\x02\x02\xD4" +
        "\xD5\x07\x1B\x02\x02\xD57\x03\x02\x02\x02\xD6\xD7\x07\x1C\x02\x02\xD7" +
        "9\x03\x02\x02\x02\xD8\xD9\x07\x1D\x02\x02\xD9;\x03\x02\x02\x02\x1A?BH" +
        "QXZadpx\x80\x87\x8C\x8E\x94\x97\x9A\x9D\xA5\xAF\xB6\xBA\xBD\xC4";
    return guidoParser;
}(Parser_1.Parser));
exports.guidoParser = guidoParser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.segment = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SegmentContext);
        }
        else {
            return this.getRuleContext(i, SegmentContext);
        }
    };
    ProgContext.prototype.sequencelist = function () {
        return this.tryGetRuleContext(0, SequencelistContext);
    };
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_prog; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProgContext.prototype.enterRule = function (listener) {
        if (listener.enterProg) {
            listener.enterProg(this);
        }
    };
    // @Override
    ProgContext.prototype.exitRule = function (listener) {
        if (listener.exitProg) {
            listener.exitProg(this);
        }
    };
    // @Override
    ProgContext.prototype.accept = function (visitor) {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgContext = ProgContext;
var SegmentContext = /** @class */ (function (_super) {
    __extends(SegmentContext, _super);
    function SegmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SegmentContext.prototype.sequencelist = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SequencelistContext);
        }
        else {
            return this.getRuleContext(i, SequencelistContext);
        }
    };
    Object.defineProperty(SegmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_segment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SegmentContext.prototype.enterRule = function (listener) {
        if (listener.enterSegment) {
            listener.enterSegment(this);
        }
    };
    // @Override
    SegmentContext.prototype.exitRule = function (listener) {
        if (listener.exitSegment) {
            listener.exitSegment(this);
        }
    };
    // @Override
    SegmentContext.prototype.accept = function (visitor) {
        if (visitor.visitSegment) {
            return visitor.visitSegment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SegmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SegmentContext = SegmentContext;
var SequencelistContext = /** @class */ (function (_super) {
    __extends(SequencelistContext, _super);
    function SequencelistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SequencelistContext.prototype.sequence = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SequenceContext);
        }
        else {
            return this.getRuleContext(i, SequenceContext);
        }
    };
    Object.defineProperty(SequencelistContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_sequencelist; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SequencelistContext.prototype.enterRule = function (listener) {
        if (listener.enterSequencelist) {
            listener.enterSequencelist(this);
        }
    };
    // @Override
    SequencelistContext.prototype.exitRule = function (listener) {
        if (listener.exitSequencelist) {
            listener.exitSequencelist(this);
        }
    };
    // @Override
    SequencelistContext.prototype.accept = function (visitor) {
        if (visitor.visitSequencelist) {
            return visitor.visitSequencelist(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SequencelistContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SequencelistContext = SequencelistContext;
var SequenceContext = /** @class */ (function (_super) {
    __extends(SequenceContext, _super);
    function SequenceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SequenceContext.prototype.tag = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TagContext);
        }
        else {
            return this.getRuleContext(i, TagContext);
        }
    };
    SequenceContext.prototype.note = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NoteContext);
        }
        else {
            return this.getRuleContext(i, NoteContext);
        }
    };
    SequenceContext.prototype.chord = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ChordContext);
        }
        else {
            return this.getRuleContext(i, ChordContext);
        }
    };
    Object.defineProperty(SequenceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_sequence; },
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
var TagContext = /** @class */ (function (_super) {
    __extends(TagContext, _super);
    function TagContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TagContext.prototype.TAGSTART = function () { return this.getToken(guidoParser.TAGSTART, 0); };
    TagContext.prototype.tagname = function () {
        return this.getRuleContext(0, TagnameContext);
    };
    TagContext.prototype.parameters = function () {
        return this.tryGetRuleContext(0, ParametersContext);
    };
    TagContext.prototype.notes = function () {
        return this.tryGetRuleContext(0, NotesContext);
    };
    Object.defineProperty(TagContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_tag; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TagContext.prototype.enterRule = function (listener) {
        if (listener.enterTag) {
            listener.enterTag(this);
        }
    };
    // @Override
    TagContext.prototype.exitRule = function (listener) {
        if (listener.exitTag) {
            listener.exitTag(this);
        }
    };
    // @Override
    TagContext.prototype.accept = function (visitor) {
        if (visitor.visitTag) {
            return visitor.visitTag(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TagContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TagContext = TagContext;
var TagnameContext = /** @class */ (function (_super) {
    __extends(TagnameContext, _super);
    function TagnameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TagnameContext.prototype.title = function () {
        return this.tryGetRuleContext(0, TitleContext);
    };
    TagnameContext.prototype.tempo = function () {
        return this.tryGetRuleContext(0, TempoContext);
    };
    TagnameContext.prototype.clef = function () {
        return this.tryGetRuleContext(0, ClefContext);
    };
    TagnameContext.prototype.meter = function () {
        return this.tryGetRuleContext(0, MeterContext);
    };
    TagnameContext.prototype.slur = function () {
        return this.tryGetRuleContext(0, SlurContext);
    };
    TagnameContext.prototype.key = function () {
        return this.tryGetRuleContext(0, KeyContext);
    };
    TagnameContext.prototype.barformat = function () {
        return this.tryGetRuleContext(0, BarformatContext);
    };
    TagnameContext.prototype.staff = function () {
        return this.tryGetRuleContext(0, StaffContext);
    };
    TagnameContext.prototype.t = function () {
        return this.tryGetRuleContext(0, TContext);
    };
    TagnameContext.prototype.repeatEnd = function () {
        return this.tryGetRuleContext(0, RepeatEndContext);
    };
    Object.defineProperty(TagnameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_tagname; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TagnameContext.prototype.enterRule = function (listener) {
        if (listener.enterTagname) {
            listener.enterTagname(this);
        }
    };
    // @Override
    TagnameContext.prototype.exitRule = function (listener) {
        if (listener.exitTagname) {
            listener.exitTagname(this);
        }
    };
    // @Override
    TagnameContext.prototype.accept = function (visitor) {
        if (visitor.visitTagname) {
            return visitor.visitTagname(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TagnameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TagnameContext = TagnameContext;
var ParametersContext = /** @class */ (function (_super) {
    __extends(ParametersContext, _super);
    function ParametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParametersContext.prototype.parameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }
        else {
            return this.getRuleContext(i, ParameterContext);
        }
    };
    Object.defineProperty(ParametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_parameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParametersContext.prototype.enterRule = function (listener) {
        if (listener.enterParameters) {
            listener.enterParameters(this);
        }
    };
    // @Override
    ParametersContext.prototype.exitRule = function (listener) {
        if (listener.exitParameters) {
            listener.exitParameters(this);
        }
    };
    // @Override
    ParametersContext.prototype.accept = function (visitor) {
        if (visitor.visitParameters) {
            return visitor.visitParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParametersContext = ParametersContext;
var ParameterContext = /** @class */ (function (_super) {
    __extends(ParameterContext, _super);
    function ParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterContext.prototype.STRINGLITERAL = function () { return this.tryGetToken(guidoParser.STRINGLITERAL, 0); };
    ParameterContext.prototype.number = function () {
        return this.tryGetRuleContext(0, NumberContext);
    };
    ParameterContext.prototype.kvpair = function () {
        return this.tryGetRuleContext(0, KvpairContext);
    };
    Object.defineProperty(ParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_parameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterParameter) {
            listener.enterParameter(this);
        }
    };
    // @Override
    ParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitParameter) {
            listener.exitParameter(this);
        }
    };
    // @Override
    ParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterContext = ParameterContext;
var KvpairContext = /** @class */ (function (_super) {
    __extends(KvpairContext, _super);
    function KvpairContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KvpairContext.prototype.STRING = function (i) {
        if (i === undefined) {
            return this.getTokens(guidoParser.STRING);
        }
        else {
            return this.getToken(guidoParser.STRING, i);
        }
    };
    KvpairContext.prototype.NUMBER = function (i) {
        if (i === undefined) {
            return this.getTokens(guidoParser.NUMBER);
        }
        else {
            return this.getToken(guidoParser.NUMBER, i);
        }
    };
    Object.defineProperty(KvpairContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_kvpair; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KvpairContext.prototype.enterRule = function (listener) {
        if (listener.enterKvpair) {
            listener.enterKvpair(this);
        }
    };
    // @Override
    KvpairContext.prototype.exitRule = function (listener) {
        if (listener.exitKvpair) {
            listener.exitKvpair(this);
        }
    };
    // @Override
    KvpairContext.prototype.accept = function (visitor) {
        if (visitor.visitKvpair) {
            return visitor.visitKvpair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KvpairContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KvpairContext = KvpairContext;
var NotesContext = /** @class */ (function (_super) {
    __extends(NotesContext, _super);
    function NotesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NotesContext.prototype.note = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NoteContext);
        }
        else {
            return this.getRuleContext(i, NoteContext);
        }
    };
    NotesContext.prototype.chord = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ChordContext);
        }
        else {
            return this.getRuleContext(i, ChordContext);
        }
    };
    Object.defineProperty(NotesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_notes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NotesContext.prototype.enterRule = function (listener) {
        if (listener.enterNotes) {
            listener.enterNotes(this);
        }
    };
    // @Override
    NotesContext.prototype.exitRule = function (listener) {
        if (listener.exitNotes) {
            listener.exitNotes(this);
        }
    };
    // @Override
    NotesContext.prototype.accept = function (visitor) {
        if (visitor.visitNotes) {
            return visitor.visitNotes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NotesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NotesContext = NotesContext;
var NoteContext = /** @class */ (function (_super) {
    __extends(NoteContext, _super);
    function NoteContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NoteContext.prototype.notename = function () {
        return this.getRuleContext(0, NotenameContext);
    };
    NoteContext.prototype.accidental = function () {
        return this.tryGetRuleContext(0, AccidentalContext);
    };
    NoteContext.prototype.octave = function () {
        return this.tryGetRuleContext(0, OctaveContext);
    };
    NoteContext.prototype.duration = function () {
        return this.tryGetRuleContext(0, DurationContext);
    };
    NoteContext.prototype.dotting = function () {
        return this.tryGetRuleContext(0, DottingContext);
    };
    Object.defineProperty(NoteContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_note; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NoteContext.prototype.enterRule = function (listener) {
        if (listener.enterNote) {
            listener.enterNote(this);
        }
    };
    // @Override
    NoteContext.prototype.exitRule = function (listener) {
        if (listener.exitNote) {
            listener.exitNote(this);
        }
    };
    // @Override
    NoteContext.prototype.accept = function (visitor) {
        if (visitor.visitNote) {
            return visitor.visitNote(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NoteContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NoteContext = NoteContext;
var ChordContext = /** @class */ (function (_super) {
    __extends(ChordContext, _super);
    function ChordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ChordContext.prototype.note = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NoteContext);
        }
        else {
            return this.getRuleContext(i, NoteContext);
        }
    };
    Object.defineProperty(ChordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_chord; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ChordContext.prototype.enterRule = function (listener) {
        if (listener.enterChord) {
            listener.enterChord(this);
        }
    };
    // @Override
    ChordContext.prototype.exitRule = function (listener) {
        if (listener.exitChord) {
            listener.exitChord(this);
        }
    };
    // @Override
    ChordContext.prototype.accept = function (visitor) {
        if (visitor.visitChord) {
            return visitor.visitChord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ChordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ChordContext = ChordContext;
var NotenameContext = /** @class */ (function (_super) {
    __extends(NotenameContext, _super);
    function NotenameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NotenameContext.prototype.STRING = function () { return this.tryGetToken(guidoParser.STRING, 0); };
    NotenameContext.prototype.REST = function () { return this.tryGetToken(guidoParser.REST, 0); };
    Object.defineProperty(NotenameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_notename; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NotenameContext.prototype.enterRule = function (listener) {
        if (listener.enterNotename) {
            listener.enterNotename(this);
        }
    };
    // @Override
    NotenameContext.prototype.exitRule = function (listener) {
        if (listener.exitNotename) {
            listener.exitNotename(this);
        }
    };
    // @Override
    NotenameContext.prototype.accept = function (visitor) {
        if (visitor.visitNotename) {
            return visitor.visitNotename(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NotenameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NotenameContext = NotenameContext;
var AccidentalContext = /** @class */ (function (_super) {
    __extends(AccidentalContext, _super);
    function AccidentalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(AccidentalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_accidental; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AccidentalContext.prototype.enterRule = function (listener) {
        if (listener.enterAccidental) {
            listener.enterAccidental(this);
        }
    };
    // @Override
    AccidentalContext.prototype.exitRule = function (listener) {
        if (listener.exitAccidental) {
            listener.exitAccidental(this);
        }
    };
    // @Override
    AccidentalContext.prototype.accept = function (visitor) {
        if (visitor.visitAccidental) {
            return visitor.visitAccidental(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AccidentalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AccidentalContext = AccidentalContext;
var NumberContext = /** @class */ (function (_super) {
    __extends(NumberContext, _super);
    function NumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NumberContext.prototype.NUMBER = function () { return this.getToken(guidoParser.NUMBER, 0); };
    Object.defineProperty(NumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_number; },
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
var OctaveContext = /** @class */ (function (_super) {
    __extends(OctaveContext, _super);
    function OctaveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OctaveContext.prototype.number = function () {
        return this.getRuleContext(0, NumberContext);
    };
    Object.defineProperty(OctaveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_octave; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OctaveContext.prototype.enterRule = function (listener) {
        if (listener.enterOctave) {
            listener.enterOctave(this);
        }
    };
    // @Override
    OctaveContext.prototype.exitRule = function (listener) {
        if (listener.exitOctave) {
            listener.exitOctave(this);
        }
    };
    // @Override
    OctaveContext.prototype.accept = function (visitor) {
        if (visitor.visitOctave) {
            return visitor.visitOctave(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OctaveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OctaveContext = OctaveContext;
var FractionContext = /** @class */ (function (_super) {
    __extends(FractionContext, _super);
    function FractionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FractionContext.prototype.number = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NumberContext);
        }
        else {
            return this.getRuleContext(i, NumberContext);
        }
    };
    Object.defineProperty(FractionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_fraction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FractionContext.prototype.enterRule = function (listener) {
        if (listener.enterFraction) {
            listener.enterFraction(this);
        }
    };
    // @Override
    FractionContext.prototype.exitRule = function (listener) {
        if (listener.exitFraction) {
            listener.exitFraction(this);
        }
    };
    // @Override
    FractionContext.prototype.accept = function (visitor) {
        if (visitor.visitFraction) {
            return visitor.visitFraction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FractionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FractionContext = FractionContext;
var DurationContext = /** @class */ (function (_super) {
    __extends(DurationContext, _super);
    function DurationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DurationContext.prototype.fraction = function () {
        return this.getRuleContext(0, FractionContext);
    };
    Object.defineProperty(DurationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_duration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DurationContext.prototype.enterRule = function (listener) {
        if (listener.enterDuration) {
            listener.enterDuration(this);
        }
    };
    // @Override
    DurationContext.prototype.exitRule = function (listener) {
        if (listener.exitDuration) {
            listener.exitDuration(this);
        }
    };
    // @Override
    DurationContext.prototype.accept = function (visitor) {
        if (visitor.visitDuration) {
            return visitor.visitDuration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DurationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DurationContext = DurationContext;
var DottingContext = /** @class */ (function (_super) {
    __extends(DottingContext, _super);
    function DottingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(DottingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_dotting; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DottingContext.prototype.enterRule = function (listener) {
        if (listener.enterDotting) {
            listener.enterDotting(this);
        }
    };
    // @Override
    DottingContext.prototype.exitRule = function (listener) {
        if (listener.exitDotting) {
            listener.exitDotting(this);
        }
    };
    // @Override
    DottingContext.prototype.accept = function (visitor) {
        if (visitor.visitDotting) {
            return visitor.visitDotting(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DottingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DottingContext = DottingContext;
var TitleContext = /** @class */ (function (_super) {
    __extends(TitleContext, _super);
    function TitleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(TitleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_title; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TitleContext.prototype.enterRule = function (listener) {
        if (listener.enterTitle) {
            listener.enterTitle(this);
        }
    };
    // @Override
    TitleContext.prototype.exitRule = function (listener) {
        if (listener.exitTitle) {
            listener.exitTitle(this);
        }
    };
    // @Override
    TitleContext.prototype.accept = function (visitor) {
        if (visitor.visitTitle) {
            return visitor.visitTitle(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TitleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TitleContext = TitleContext;
var TempoContext = /** @class */ (function (_super) {
    __extends(TempoContext, _super);
    function TempoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(TempoContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_tempo; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TempoContext.prototype.enterRule = function (listener) {
        if (listener.enterTempo) {
            listener.enterTempo(this);
        }
    };
    // @Override
    TempoContext.prototype.exitRule = function (listener) {
        if (listener.exitTempo) {
            listener.exitTempo(this);
        }
    };
    // @Override
    TempoContext.prototype.accept = function (visitor) {
        if (visitor.visitTempo) {
            return visitor.visitTempo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TempoContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TempoContext = TempoContext;
var ClefContext = /** @class */ (function (_super) {
    __extends(ClefContext, _super);
    function ClefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ClefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_clef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ClefContext.prototype.enterRule = function (listener) {
        if (listener.enterClef) {
            listener.enterClef(this);
        }
    };
    // @Override
    ClefContext.prototype.exitRule = function (listener) {
        if (listener.exitClef) {
            listener.exitClef(this);
        }
    };
    // @Override
    ClefContext.prototype.accept = function (visitor) {
        if (visitor.visitClef) {
            return visitor.visitClef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ClefContext = ClefContext;
var MeterContext = /** @class */ (function (_super) {
    __extends(MeterContext, _super);
    function MeterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(MeterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_meter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MeterContext.prototype.enterRule = function (listener) {
        if (listener.enterMeter) {
            listener.enterMeter(this);
        }
    };
    // @Override
    MeterContext.prototype.exitRule = function (listener) {
        if (listener.exitMeter) {
            listener.exitMeter(this);
        }
    };
    // @Override
    MeterContext.prototype.accept = function (visitor) {
        if (visitor.visitMeter) {
            return visitor.visitMeter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MeterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MeterContext = MeterContext;
var SlurContext = /** @class */ (function (_super) {
    __extends(SlurContext, _super);
    function SlurContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(SlurContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_slur; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SlurContext.prototype.enterRule = function (listener) {
        if (listener.enterSlur) {
            listener.enterSlur(this);
        }
    };
    // @Override
    SlurContext.prototype.exitRule = function (listener) {
        if (listener.exitSlur) {
            listener.exitSlur(this);
        }
    };
    // @Override
    SlurContext.prototype.accept = function (visitor) {
        if (visitor.visitSlur) {
            return visitor.visitSlur(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SlurContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SlurContext = SlurContext;
var KeyContext = /** @class */ (function (_super) {
    __extends(KeyContext, _super);
    function KeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(KeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_key; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeyContext.prototype.enterRule = function (listener) {
        if (listener.enterKey) {
            listener.enterKey(this);
        }
    };
    // @Override
    KeyContext.prototype.exitRule = function (listener) {
        if (listener.exitKey) {
            listener.exitKey(this);
        }
    };
    // @Override
    KeyContext.prototype.accept = function (visitor) {
        if (visitor.visitKey) {
            return visitor.visitKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeyContext = KeyContext;
var BarformatContext = /** @class */ (function (_super) {
    __extends(BarformatContext, _super);
    function BarformatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(BarformatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_barformat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BarformatContext.prototype.enterRule = function (listener) {
        if (listener.enterBarformat) {
            listener.enterBarformat(this);
        }
    };
    // @Override
    BarformatContext.prototype.exitRule = function (listener) {
        if (listener.exitBarformat) {
            listener.exitBarformat(this);
        }
    };
    // @Override
    BarformatContext.prototype.accept = function (visitor) {
        if (visitor.visitBarformat) {
            return visitor.visitBarformat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BarformatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BarformatContext = BarformatContext;
var StaffContext = /** @class */ (function (_super) {
    __extends(StaffContext, _super);
    function StaffContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(StaffContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_staff; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StaffContext.prototype.enterRule = function (listener) {
        if (listener.enterStaff) {
            listener.enterStaff(this);
        }
    };
    // @Override
    StaffContext.prototype.exitRule = function (listener) {
        if (listener.exitStaff) {
            listener.exitStaff(this);
        }
    };
    // @Override
    StaffContext.prototype.accept = function (visitor) {
        if (visitor.visitStaff) {
            return visitor.visitStaff(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StaffContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StaffContext = StaffContext;
var RepeatEndContext = /** @class */ (function (_super) {
    __extends(RepeatEndContext, _super);
    function RepeatEndContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(RepeatEndContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_repeatEnd; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RepeatEndContext.prototype.enterRule = function (listener) {
        if (listener.enterRepeatEnd) {
            listener.enterRepeatEnd(this);
        }
    };
    // @Override
    RepeatEndContext.prototype.exitRule = function (listener) {
        if (listener.exitRepeatEnd) {
            listener.exitRepeatEnd(this);
        }
    };
    // @Override
    RepeatEndContext.prototype.accept = function (visitor) {
        if (visitor.visitRepeatEnd) {
            return visitor.visitRepeatEnd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RepeatEndContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RepeatEndContext = RepeatEndContext;
var TContext = /** @class */ (function (_super) {
    __extends(TContext, _super);
    function TContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(TContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return guidoParser.RULE_t; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TContext.prototype.enterRule = function (listener) {
        if (listener.enterT) {
            listener.enterT(this);
        }
    };
    // @Override
    TContext.prototype.exitRule = function (listener) {
        if (listener.exitT) {
            listener.exitT(this);
        }
    };
    // @Override
    TContext.prototype.accept = function (visitor) {
        if (visitor.visitT) {
            return visitor.visitT(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TContext = TContext;
