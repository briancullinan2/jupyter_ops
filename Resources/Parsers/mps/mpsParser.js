"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/mps/mps.g4 by ANTLR 4.7.3-SNAPSHOT
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
var mpsParser = /** @class */ (function (_super) {
    __extends(mpsParser, _super);
    function mpsParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(mpsParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(mpsParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return mpsParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(mpsParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "mps.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(mpsParser.prototype, "ruleNames", {
        // @Override
        get: function () { return mpsParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(mpsParser.prototype, "serializedATN", {
        // @Override
        get: function () { return mpsParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    mpsParser.prototype.modell = function () {
        var _localctx = new ModellContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, mpsParser.RULE_modell);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 40;
                this.firstrow();
                this.state = 41;
                this.rows();
                this.state = 42;
                this.columns();
                this.state = 43;
                this.rhs();
                this.state = 45;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mpsParser.RANGESINDICATORCARD) {
                    {
                        this.state = 44;
                        this.ranges();
                    }
                }
                this.state = 48;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mpsParser.BOUNDSINDICATORCARD) {
                    {
                        this.state = 47;
                        this.bounds();
                    }
                }
                this.state = 50;
                this.endata();
                this.state = 51;
                this.match(mpsParser.EOF);
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
    mpsParser.prototype.firstrow = function () {
        var _localctx = new FirstrowContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, mpsParser.RULE_firstrow);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 53;
                this.match(mpsParser.NAMEINDICATORCARD);
                this.state = 55;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mpsParser.IDENTIFIER) {
                    {
                        this.state = 54;
                        this.match(mpsParser.IDENTIFIER);
                    }
                }
                this.state = 58;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mpsParser.KEYWORDFREE) {
                    {
                        this.state = 57;
                        this.match(mpsParser.KEYWORDFREE);
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
    mpsParser.prototype.rows = function () {
        var _localctx = new RowsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, mpsParser.RULE_rows);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 60;
                this.match(mpsParser.ROWINDICATORCARD);
                this.state = 62;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 61;
                            this.rowdatacard();
                        }
                    }
                    this.state = 64;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === mpsParser.ROWTYPE);
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
    mpsParser.prototype.columns = function () {
        var _localctx = new ColumnsContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, mpsParser.RULE_columns);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 66;
                this.match(mpsParser.COLUMNINDICATORCARD);
                this.state = 67;
                this.columndatacards();
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
    mpsParser.prototype.rhs = function () {
        var _localctx = new RhsContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, mpsParser.RULE_rhs);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 69;
                this.match(mpsParser.RHSINDICATORCARD);
                this.state = 70;
                this.rhsdatacards();
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
    mpsParser.prototype.ranges = function () {
        var _localctx = new RangesContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, mpsParser.RULE_ranges);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 72;
                this.match(mpsParser.RANGESINDICATORCARD);
                this.state = 73;
                this.rangesdatacards();
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
    mpsParser.prototype.bounds = function () {
        var _localctx = new BoundsContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, mpsParser.RULE_bounds);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 75;
                this.match(mpsParser.BOUNDSINDICATORCARD);
                this.state = 76;
                this.boundsdatacards();
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
    mpsParser.prototype.endata = function () {
        var _localctx = new EndataContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, mpsParser.RULE_endata);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 78;
                this.match(mpsParser.ENDATAINDICATORCARD);
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
    mpsParser.prototype.rowdatacard = function () {
        var _localctx = new RowdatacardContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, mpsParser.RULE_rowdatacard);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 80;
                this.match(mpsParser.ROWTYPE);
                this.state = 81;
                this.match(mpsParser.IDENTIFIER);
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
    mpsParser.prototype.columndatacards = function () {
        var _localctx = new ColumndatacardsContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, mpsParser.RULE_columndatacards);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 85;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        this.state = 85;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                            case 1:
                                {
                                    this.state = 83;
                                    this.columndatacard();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 84;
                                    this.intblock();
                                }
                                break;
                        }
                    }
                    this.state = 87;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === mpsParser.IDENTIFIER);
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
    mpsParser.prototype.rhsdatacards = function () {
        var _localctx = new RhsdatacardsContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, mpsParser.RULE_rhsdatacards);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 90;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 89;
                            this.rhsdatacard();
                        }
                    }
                    this.state = 92;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === mpsParser.RHSINDICATORCARD || _la === mpsParser.IDENTIFIER);
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
    mpsParser.prototype.rangesdatacards = function () {
        var _localctx = new RangesdatacardsContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, mpsParser.RULE_rangesdatacards);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 95;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 94;
                            this.rangesdatacard();
                        }
                    }
                    this.state = 97;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === mpsParser.RANGESINDICATORCARD || _la === mpsParser.IDENTIFIER);
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
    mpsParser.prototype.boundsdatacards = function () {
        var _localctx = new BoundsdatacardsContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, mpsParser.RULE_boundsdatacards);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 100;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 99;
                            this.boundsdatacard();
                        }
                    }
                    this.state = 102;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === mpsParser.BOUNDKEY);
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
    mpsParser.prototype.columndatacard = function () {
        var _localctx = new ColumndatacardContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, mpsParser.RULE_columndatacard);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 104;
                this.match(mpsParser.IDENTIFIER);
                this.state = 105;
                this.match(mpsParser.IDENTIFIER);
                this.state = 106;
                this.match(mpsParser.NUMERICALVALUE);
                this.state = 109;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                    case 1:
                        {
                            this.state = 107;
                            this.match(mpsParser.IDENTIFIER);
                            this.state = 108;
                            this.match(mpsParser.NUMERICALVALUE);
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
    mpsParser.prototype.rhsdatacard = function () {
        var _localctx = new RhsdatacardContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, mpsParser.RULE_rhsdatacard);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 111;
                _la = this._input.LA(1);
                if (!(_la === mpsParser.RHSINDICATORCARD || _la === mpsParser.IDENTIFIER)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 112;
                this.match(mpsParser.IDENTIFIER);
                this.state = 113;
                this.match(mpsParser.NUMERICALVALUE);
                this.state = 116;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                    case 1:
                        {
                            this.state = 114;
                            this.match(mpsParser.IDENTIFIER);
                            this.state = 115;
                            this.match(mpsParser.NUMERICALVALUE);
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
    mpsParser.prototype.rangesdatacard = function () {
        var _localctx = new RangesdatacardContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, mpsParser.RULE_rangesdatacard);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 118;
                _la = this._input.LA(1);
                if (!(_la === mpsParser.RANGESINDICATORCARD || _la === mpsParser.IDENTIFIER)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 119;
                this.match(mpsParser.IDENTIFIER);
                this.state = 120;
                this.match(mpsParser.NUMERICALVALUE);
                this.state = 123;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                    case 1:
                        {
                            this.state = 121;
                            this.match(mpsParser.IDENTIFIER);
                            this.state = 122;
                            this.match(mpsParser.NUMERICALVALUE);
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
    mpsParser.prototype.boundsdatacard = function () {
        var _localctx = new BoundsdatacardContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, mpsParser.RULE_boundsdatacard);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 125;
                this.match(mpsParser.BOUNDKEY);
                this.state = 126;
                _la = this._input.LA(1);
                if (!(_la === mpsParser.BOUNDSINDICATORCARD || _la === mpsParser.IDENTIFIER)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 127;
                this.match(mpsParser.IDENTIFIER);
                this.state = 129;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mpsParser.NUMERICALVALUE) {
                    {
                        this.state = 128;
                        this.match(mpsParser.NUMERICALVALUE);
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
    mpsParser.prototype.intblock = function () {
        var _localctx = new IntblockContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, mpsParser.RULE_intblock);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 131;
                this.startmarker();
                this.state = 133;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 132;
                                    this.columndatacard();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 135;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 137;
                this.endmarker();
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
    mpsParser.prototype.startmarker = function () {
        var _localctx = new StartmarkerContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, mpsParser.RULE_startmarker);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 139;
                this.match(mpsParser.IDENTIFIER);
                this.state = 140;
                this.match(mpsParser.KEYWORDMARKER);
                this.state = 141;
                this.match(mpsParser.STARTMARKER);
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
    mpsParser.prototype.endmarker = function () {
        var _localctx = new EndmarkerContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, mpsParser.RULE_endmarker);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 143;
                this.match(mpsParser.IDENTIFIER);
                this.state = 144;
                this.match(mpsParser.KEYWORDMARKER);
                this.state = 145;
                this.match(mpsParser.ENDMARKER);
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
    Object.defineProperty(mpsParser, "_ATN", {
        get: function () {
            if (!mpsParser.__ATN) {
                mpsParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(mpsParser._serializedATN));
            }
            return mpsParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    mpsParser.NAMEINDICATORCARD = 1;
    mpsParser.ROWINDICATORCARD = 2;
    mpsParser.COLUMNINDICATORCARD = 3;
    mpsParser.RHSINDICATORCARD = 4;
    mpsParser.RANGESINDICATORCARD = 5;
    mpsParser.BOUNDSINDICATORCARD = 6;
    mpsParser.ENDATAINDICATORCARD = 7;
    mpsParser.KEYWORDMARKER = 8;
    mpsParser.STARTMARKER = 9;
    mpsParser.ENDMARKER = 10;
    mpsParser.KEYWORDFREE = 11;
    mpsParser.BOUNDKEY = 12;
    mpsParser.ROWTYPE = 13;
    mpsParser.IDENTIFIER = 14;
    mpsParser.NUMERICALVALUE = 15;
    mpsParser.WS = 16;
    mpsParser.LINE_COMMENT = 17;
    mpsParser.RULE_modell = 0;
    mpsParser.RULE_firstrow = 1;
    mpsParser.RULE_rows = 2;
    mpsParser.RULE_columns = 3;
    mpsParser.RULE_rhs = 4;
    mpsParser.RULE_ranges = 5;
    mpsParser.RULE_bounds = 6;
    mpsParser.RULE_endata = 7;
    mpsParser.RULE_rowdatacard = 8;
    mpsParser.RULE_columndatacards = 9;
    mpsParser.RULE_rhsdatacards = 10;
    mpsParser.RULE_rangesdatacards = 11;
    mpsParser.RULE_boundsdatacards = 12;
    mpsParser.RULE_columndatacard = 13;
    mpsParser.RULE_rhsdatacard = 14;
    mpsParser.RULE_rangesdatacard = 15;
    mpsParser.RULE_boundsdatacard = 16;
    mpsParser.RULE_intblock = 17;
    mpsParser.RULE_startmarker = 18;
    mpsParser.RULE_endmarker = 19;
    // tslint:disable:no-trailing-whitespace
    mpsParser.ruleNames = [
        "modell", "firstrow", "rows", "columns", "rhs", "ranges", "bounds", "endata",
        "rowdatacard", "columndatacards", "rhsdatacards", "rangesdatacards", "boundsdatacards",
        "columndatacard", "rhsdatacard", "rangesdatacard", "boundsdatacard", "intblock",
        "startmarker", "endmarker",
    ];
    mpsParser._LITERAL_NAMES = [
        undefined, "'NAME'", "'ROWS'", "'COLUMNS'", "'RHS'", "'RANGES'", "'BOUNDS'",
        "'ENDATA'", "''ARKER''", "''NTORG''", "''NTEND''", "'FREE'",
    ];
    mpsParser._SYMBOLIC_NAMES = [
        undefined, "NAMEINDICATORCARD", "ROWINDICATORCARD", "COLUMNINDICATORCARD",
        "RHSINDICATORCARD", "RANGESINDICATORCARD", "BOUNDSINDICATORCARD", "ENDATAINDICATORCARD",
        "KEYWORDMARKER", "STARTMARKER", "ENDMARKER", "KEYWORDFREE", "BOUNDKEY",
        "ROWTYPE", "IDENTIFIER", "NUMERICALVALUE", "WS", "LINE_COMMENT",
    ];
    mpsParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(mpsParser._LITERAL_NAMES, mpsParser._SYMBOLIC_NAMES, []);
    mpsParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13\x96\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02\x03\x02" +
        "\x03\x02\x05\x020\n\x02\x03\x02\x05\x023\n\x02\x03\x02\x03\x02\x03\x02" +
        "\x03\x03\x03\x03\x05\x03:\n\x03\x03\x03\x05\x03=\n\x03\x03\x04\x03\x04" +
        "\x06\x04A\n\x04\r\x04\x0E\x04B\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
        "\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03" +
        "\n\x03\n\x03\v\x03\v\x06\vX\n\v\r\v\x0E\vY\x03\f\x06\f]\n\f\r\f\x0E\f" +
        "^\x03\r\x06\rb\n\r\r\r\x0E\rc\x03\x0E\x06\x0Eg\n\x0E\r\x0E\x0E\x0Eh\x03" +
        "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0Fp\n\x0F\x03\x10\x03\x10\x03" +
        "\x10\x03\x10\x03\x10\x05\x10w\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
        "\x11\x05\x11~\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\x84\n\x12" +
        "\x03\x13\x03\x13\x06\x13\x88\n\x13\r\x13\x0E\x13\x89\x03\x13\x03\x13\x03" +
        "\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x02" +
        "\x02\x02\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
        "\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
        "&\x02(\x02\x02\x05\x04\x02\x06\x06\x10\x10\x04\x02\x07\x07\x10\x10\x04" +
        "\x02\b\b\x10\x10\x02\x90\x02*\x03\x02\x02\x02\x047\x03\x02\x02\x02\x06" +
        ">\x03\x02\x02\x02\bD\x03\x02\x02\x02\nG\x03\x02\x02\x02\fJ\x03\x02\x02" +
        "\x02\x0EM\x03\x02\x02\x02\x10P\x03\x02\x02\x02\x12R\x03\x02\x02\x02\x14" +
        "W\x03\x02\x02\x02\x16\\\x03\x02\x02\x02\x18a\x03\x02\x02\x02\x1Af\x03" +
        "\x02\x02\x02\x1Cj\x03\x02\x02\x02\x1Eq\x03\x02\x02\x02 x\x03\x02\x02\x02" +
        "\"\x7F\x03\x02\x02\x02$\x85\x03\x02\x02\x02&\x8D\x03\x02\x02\x02(\x91" +
        "\x03\x02\x02\x02*+\x05\x04\x03\x02+,\x05\x06\x04\x02,-\x05\b\x05\x02-" +
        "/\x05\n\x06\x02.0\x05\f\x07\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0202" +
        "\x03\x02\x02\x0213\x05\x0E\b\x0221\x03\x02\x02\x0223\x03\x02\x02\x023" +
        "4\x03\x02\x02\x0245\x05\x10\t\x0256\x07\x02\x02\x036\x03\x03\x02\x02\x02" +
        "79\x07\x03\x02\x028:\x07\x10\x02\x0298\x03\x02\x02\x029:\x03\x02\x02\x02" +
        ":<\x03\x02\x02\x02;=\x07\r\x02\x02<;\x03\x02\x02\x02<=\x03\x02\x02\x02" +
        "=\x05\x03\x02\x02\x02>@\x07\x04\x02\x02?A\x05\x12\n\x02@?\x03\x02\x02" +
        "\x02AB\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02C\x07\x03\x02" +
        "\x02\x02DE\x07\x05\x02\x02EF\x05\x14\v\x02F\t\x03\x02\x02\x02GH\x07\x06" +
        "\x02\x02HI\x05\x16\f\x02I\v\x03\x02\x02\x02JK\x07\x07\x02\x02KL\x05\x18" +
        "\r\x02L\r\x03\x02\x02\x02MN\x07\b\x02\x02NO\x05\x1A\x0E\x02O\x0F\x03\x02" +
        "\x02\x02PQ\x07\t\x02\x02Q\x11\x03\x02\x02\x02RS\x07\x0F\x02\x02ST\x07" +
        "\x10\x02\x02T\x13\x03\x02\x02\x02UX\x05\x1C\x0F\x02VX\x05$\x13\x02WU\x03" +
        "\x02\x02\x02WV\x03\x02\x02\x02XY\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03" +
        "\x02\x02\x02Z\x15\x03\x02\x02\x02[]\x05\x1E\x10\x02\\[\x03\x02\x02\x02" +
        "]^\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_\x17\x03\x02\x02" +
        "\x02`b\x05 \x11\x02a`\x03\x02\x02\x02bc\x03\x02\x02\x02ca\x03\x02\x02" +
        "\x02cd\x03\x02\x02\x02d\x19\x03\x02\x02\x02eg\x05\"\x12\x02fe\x03\x02" +
        "\x02\x02gh\x03\x02\x02\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02i\x1B\x03" +
        "\x02\x02\x02jk\x07\x10\x02\x02kl\x07\x10\x02\x02lo\x07\x11\x02\x02mn\x07" +
        "\x10\x02\x02np\x07\x11\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02p\x1D" +
        "\x03\x02\x02\x02qr\t\x02\x02\x02rs\x07\x10\x02\x02sv\x07\x11\x02\x02t" +
        "u\x07\x10\x02\x02uw\x07\x11\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02" +
        "w\x1F\x03\x02\x02\x02xy\t\x03\x02\x02yz\x07\x10\x02\x02z}\x07\x11\x02" +
        "\x02{|\x07\x10\x02\x02|~\x07\x11\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02" +
        "\x02~!\x03\x02\x02\x02\x7F\x80\x07\x0E\x02\x02\x80\x81\t\x04\x02\x02\x81" +
        "\x83\x07\x10\x02\x02\x82\x84\x07\x11\x02\x02\x83\x82\x03\x02\x02\x02\x83" +
        "\x84\x03\x02\x02\x02\x84#\x03\x02\x02\x02\x85\x87\x05&\x14\x02\x86\x88" +
        "\x05\x1C\x0F\x02\x87\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x87" +
        "\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C" +
        "\x05(\x15\x02\x8C%\x03\x02\x02\x02\x8D\x8E\x07\x10\x02\x02\x8E\x8F\x07" +
        "\n\x02\x02\x8F\x90\x07\v\x02\x02\x90\'\x03\x02\x02\x02\x91\x92\x07\x10" +
        "\x02\x02\x92\x93\x07\n\x02\x02\x93\x94\x07\f\x02\x02\x94)\x03\x02\x02" +
        "\x02\x11/29<BWY^chov}\x83\x89";
    return mpsParser;
}(Parser_1.Parser));
exports.mpsParser = mpsParser;
var ModellContext = /** @class */ (function (_super) {
    __extends(ModellContext, _super);
    function ModellContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ModellContext.prototype.firstrow = function () {
        return this.getRuleContext(0, FirstrowContext);
    };
    ModellContext.prototype.rows = function () {
        return this.getRuleContext(0, RowsContext);
    };
    ModellContext.prototype.columns = function () {
        return this.getRuleContext(0, ColumnsContext);
    };
    ModellContext.prototype.rhs = function () {
        return this.getRuleContext(0, RhsContext);
    };
    ModellContext.prototype.endata = function () {
        return this.getRuleContext(0, EndataContext);
    };
    ModellContext.prototype.EOF = function () { return this.getToken(mpsParser.EOF, 0); };
    ModellContext.prototype.ranges = function () {
        return this.tryGetRuleContext(0, RangesContext);
    };
    ModellContext.prototype.bounds = function () {
        return this.tryGetRuleContext(0, BoundsContext);
    };
    Object.defineProperty(ModellContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_modell; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModellContext.prototype.enterRule = function (listener) {
        if (listener.enterModell) {
            listener.enterModell(this);
        }
    };
    // @Override
    ModellContext.prototype.exitRule = function (listener) {
        if (listener.exitModell) {
            listener.exitModell(this);
        }
    };
    // @Override
    ModellContext.prototype.accept = function (visitor) {
        if (visitor.visitModell) {
            return visitor.visitModell(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModellContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModellContext = ModellContext;
var FirstrowContext = /** @class */ (function (_super) {
    __extends(FirstrowContext, _super);
    function FirstrowContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FirstrowContext.prototype.NAMEINDICATORCARD = function () { return this.getToken(mpsParser.NAMEINDICATORCARD, 0); };
    FirstrowContext.prototype.IDENTIFIER = function () { return this.tryGetToken(mpsParser.IDENTIFIER, 0); };
    FirstrowContext.prototype.KEYWORDFREE = function () { return this.tryGetToken(mpsParser.KEYWORDFREE, 0); };
    Object.defineProperty(FirstrowContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_firstrow; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FirstrowContext.prototype.enterRule = function (listener) {
        if (listener.enterFirstrow) {
            listener.enterFirstrow(this);
        }
    };
    // @Override
    FirstrowContext.prototype.exitRule = function (listener) {
        if (listener.exitFirstrow) {
            listener.exitFirstrow(this);
        }
    };
    // @Override
    FirstrowContext.prototype.accept = function (visitor) {
        if (visitor.visitFirstrow) {
            return visitor.visitFirstrow(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FirstrowContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FirstrowContext = FirstrowContext;
var RowsContext = /** @class */ (function (_super) {
    __extends(RowsContext, _super);
    function RowsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RowsContext.prototype.ROWINDICATORCARD = function () { return this.getToken(mpsParser.ROWINDICATORCARD, 0); };
    RowsContext.prototype.rowdatacard = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RowdatacardContext);
        }
        else {
            return this.getRuleContext(i, RowdatacardContext);
        }
    };
    Object.defineProperty(RowsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_rows; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RowsContext.prototype.enterRule = function (listener) {
        if (listener.enterRows) {
            listener.enterRows(this);
        }
    };
    // @Override
    RowsContext.prototype.exitRule = function (listener) {
        if (listener.exitRows) {
            listener.exitRows(this);
        }
    };
    // @Override
    RowsContext.prototype.accept = function (visitor) {
        if (visitor.visitRows) {
            return visitor.visitRows(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RowsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RowsContext = RowsContext;
var ColumnsContext = /** @class */ (function (_super) {
    __extends(ColumnsContext, _super);
    function ColumnsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ColumnsContext.prototype.COLUMNINDICATORCARD = function () { return this.getToken(mpsParser.COLUMNINDICATORCARD, 0); };
    ColumnsContext.prototype.columndatacards = function () {
        return this.getRuleContext(0, ColumndatacardsContext);
    };
    Object.defineProperty(ColumnsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_columns; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ColumnsContext.prototype.enterRule = function (listener) {
        if (listener.enterColumns) {
            listener.enterColumns(this);
        }
    };
    // @Override
    ColumnsContext.prototype.exitRule = function (listener) {
        if (listener.exitColumns) {
            listener.exitColumns(this);
        }
    };
    // @Override
    ColumnsContext.prototype.accept = function (visitor) {
        if (visitor.visitColumns) {
            return visitor.visitColumns(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ColumnsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ColumnsContext = ColumnsContext;
var RhsContext = /** @class */ (function (_super) {
    __extends(RhsContext, _super);
    function RhsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RhsContext.prototype.RHSINDICATORCARD = function () { return this.getToken(mpsParser.RHSINDICATORCARD, 0); };
    RhsContext.prototype.rhsdatacards = function () {
        return this.getRuleContext(0, RhsdatacardsContext);
    };
    Object.defineProperty(RhsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_rhs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RhsContext.prototype.enterRule = function (listener) {
        if (listener.enterRhs) {
            listener.enterRhs(this);
        }
    };
    // @Override
    RhsContext.prototype.exitRule = function (listener) {
        if (listener.exitRhs) {
            listener.exitRhs(this);
        }
    };
    // @Override
    RhsContext.prototype.accept = function (visitor) {
        if (visitor.visitRhs) {
            return visitor.visitRhs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RhsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RhsContext = RhsContext;
var RangesContext = /** @class */ (function (_super) {
    __extends(RangesContext, _super);
    function RangesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RangesContext.prototype.RANGESINDICATORCARD = function () { return this.getToken(mpsParser.RANGESINDICATORCARD, 0); };
    RangesContext.prototype.rangesdatacards = function () {
        return this.getRuleContext(0, RangesdatacardsContext);
    };
    Object.defineProperty(RangesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_ranges; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RangesContext.prototype.enterRule = function (listener) {
        if (listener.enterRanges) {
            listener.enterRanges(this);
        }
    };
    // @Override
    RangesContext.prototype.exitRule = function (listener) {
        if (listener.exitRanges) {
            listener.exitRanges(this);
        }
    };
    // @Override
    RangesContext.prototype.accept = function (visitor) {
        if (visitor.visitRanges) {
            return visitor.visitRanges(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RangesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RangesContext = RangesContext;
var BoundsContext = /** @class */ (function (_super) {
    __extends(BoundsContext, _super);
    function BoundsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BoundsContext.prototype.BOUNDSINDICATORCARD = function () { return this.getToken(mpsParser.BOUNDSINDICATORCARD, 0); };
    BoundsContext.prototype.boundsdatacards = function () {
        return this.getRuleContext(0, BoundsdatacardsContext);
    };
    Object.defineProperty(BoundsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_bounds; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BoundsContext.prototype.enterRule = function (listener) {
        if (listener.enterBounds) {
            listener.enterBounds(this);
        }
    };
    // @Override
    BoundsContext.prototype.exitRule = function (listener) {
        if (listener.exitBounds) {
            listener.exitBounds(this);
        }
    };
    // @Override
    BoundsContext.prototype.accept = function (visitor) {
        if (visitor.visitBounds) {
            return visitor.visitBounds(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BoundsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BoundsContext = BoundsContext;
var EndataContext = /** @class */ (function (_super) {
    __extends(EndataContext, _super);
    function EndataContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EndataContext.prototype.ENDATAINDICATORCARD = function () { return this.getToken(mpsParser.ENDATAINDICATORCARD, 0); };
    Object.defineProperty(EndataContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_endata; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EndataContext.prototype.enterRule = function (listener) {
        if (listener.enterEndata) {
            listener.enterEndata(this);
        }
    };
    // @Override
    EndataContext.prototype.exitRule = function (listener) {
        if (listener.exitEndata) {
            listener.exitEndata(this);
        }
    };
    // @Override
    EndataContext.prototype.accept = function (visitor) {
        if (visitor.visitEndata) {
            return visitor.visitEndata(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EndataContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EndataContext = EndataContext;
var RowdatacardContext = /** @class */ (function (_super) {
    __extends(RowdatacardContext, _super);
    function RowdatacardContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RowdatacardContext.prototype.ROWTYPE = function () { return this.getToken(mpsParser.ROWTYPE, 0); };
    RowdatacardContext.prototype.IDENTIFIER = function () { return this.getToken(mpsParser.IDENTIFIER, 0); };
    Object.defineProperty(RowdatacardContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_rowdatacard; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RowdatacardContext.prototype.enterRule = function (listener) {
        if (listener.enterRowdatacard) {
            listener.enterRowdatacard(this);
        }
    };
    // @Override
    RowdatacardContext.prototype.exitRule = function (listener) {
        if (listener.exitRowdatacard) {
            listener.exitRowdatacard(this);
        }
    };
    // @Override
    RowdatacardContext.prototype.accept = function (visitor) {
        if (visitor.visitRowdatacard) {
            return visitor.visitRowdatacard(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RowdatacardContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RowdatacardContext = RowdatacardContext;
var ColumndatacardsContext = /** @class */ (function (_super) {
    __extends(ColumndatacardsContext, _super);
    function ColumndatacardsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ColumndatacardsContext.prototype.columndatacard = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumndatacardContext);
        }
        else {
            return this.getRuleContext(i, ColumndatacardContext);
        }
    };
    ColumndatacardsContext.prototype.intblock = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IntblockContext);
        }
        else {
            return this.getRuleContext(i, IntblockContext);
        }
    };
    Object.defineProperty(ColumndatacardsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_columndatacards; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ColumndatacardsContext.prototype.enterRule = function (listener) {
        if (listener.enterColumndatacards) {
            listener.enterColumndatacards(this);
        }
    };
    // @Override
    ColumndatacardsContext.prototype.exitRule = function (listener) {
        if (listener.exitColumndatacards) {
            listener.exitColumndatacards(this);
        }
    };
    // @Override
    ColumndatacardsContext.prototype.accept = function (visitor) {
        if (visitor.visitColumndatacards) {
            return visitor.visitColumndatacards(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ColumndatacardsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ColumndatacardsContext = ColumndatacardsContext;
var RhsdatacardsContext = /** @class */ (function (_super) {
    __extends(RhsdatacardsContext, _super);
    function RhsdatacardsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RhsdatacardsContext.prototype.rhsdatacard = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RhsdatacardContext);
        }
        else {
            return this.getRuleContext(i, RhsdatacardContext);
        }
    };
    Object.defineProperty(RhsdatacardsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_rhsdatacards; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RhsdatacardsContext.prototype.enterRule = function (listener) {
        if (listener.enterRhsdatacards) {
            listener.enterRhsdatacards(this);
        }
    };
    // @Override
    RhsdatacardsContext.prototype.exitRule = function (listener) {
        if (listener.exitRhsdatacards) {
            listener.exitRhsdatacards(this);
        }
    };
    // @Override
    RhsdatacardsContext.prototype.accept = function (visitor) {
        if (visitor.visitRhsdatacards) {
            return visitor.visitRhsdatacards(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RhsdatacardsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RhsdatacardsContext = RhsdatacardsContext;
var RangesdatacardsContext = /** @class */ (function (_super) {
    __extends(RangesdatacardsContext, _super);
    function RangesdatacardsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RangesdatacardsContext.prototype.rangesdatacard = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RangesdatacardContext);
        }
        else {
            return this.getRuleContext(i, RangesdatacardContext);
        }
    };
    Object.defineProperty(RangesdatacardsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_rangesdatacards; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RangesdatacardsContext.prototype.enterRule = function (listener) {
        if (listener.enterRangesdatacards) {
            listener.enterRangesdatacards(this);
        }
    };
    // @Override
    RangesdatacardsContext.prototype.exitRule = function (listener) {
        if (listener.exitRangesdatacards) {
            listener.exitRangesdatacards(this);
        }
    };
    // @Override
    RangesdatacardsContext.prototype.accept = function (visitor) {
        if (visitor.visitRangesdatacards) {
            return visitor.visitRangesdatacards(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RangesdatacardsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RangesdatacardsContext = RangesdatacardsContext;
var BoundsdatacardsContext = /** @class */ (function (_super) {
    __extends(BoundsdatacardsContext, _super);
    function BoundsdatacardsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BoundsdatacardsContext.prototype.boundsdatacard = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BoundsdatacardContext);
        }
        else {
            return this.getRuleContext(i, BoundsdatacardContext);
        }
    };
    Object.defineProperty(BoundsdatacardsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_boundsdatacards; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BoundsdatacardsContext.prototype.enterRule = function (listener) {
        if (listener.enterBoundsdatacards) {
            listener.enterBoundsdatacards(this);
        }
    };
    // @Override
    BoundsdatacardsContext.prototype.exitRule = function (listener) {
        if (listener.exitBoundsdatacards) {
            listener.exitBoundsdatacards(this);
        }
    };
    // @Override
    BoundsdatacardsContext.prototype.accept = function (visitor) {
        if (visitor.visitBoundsdatacards) {
            return visitor.visitBoundsdatacards(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BoundsdatacardsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BoundsdatacardsContext = BoundsdatacardsContext;
var ColumndatacardContext = /** @class */ (function (_super) {
    __extends(ColumndatacardContext, _super);
    function ColumndatacardContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ColumndatacardContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(mpsParser.IDENTIFIER);
        }
        else {
            return this.getToken(mpsParser.IDENTIFIER, i);
        }
    };
    ColumndatacardContext.prototype.NUMERICALVALUE = function (i) {
        if (i === undefined) {
            return this.getTokens(mpsParser.NUMERICALVALUE);
        }
        else {
            return this.getToken(mpsParser.NUMERICALVALUE, i);
        }
    };
    Object.defineProperty(ColumndatacardContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_columndatacard; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ColumndatacardContext.prototype.enterRule = function (listener) {
        if (listener.enterColumndatacard) {
            listener.enterColumndatacard(this);
        }
    };
    // @Override
    ColumndatacardContext.prototype.exitRule = function (listener) {
        if (listener.exitColumndatacard) {
            listener.exitColumndatacard(this);
        }
    };
    // @Override
    ColumndatacardContext.prototype.accept = function (visitor) {
        if (visitor.visitColumndatacard) {
            return visitor.visitColumndatacard(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ColumndatacardContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ColumndatacardContext = ColumndatacardContext;
var RhsdatacardContext = /** @class */ (function (_super) {
    __extends(RhsdatacardContext, _super);
    function RhsdatacardContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RhsdatacardContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(mpsParser.IDENTIFIER);
        }
        else {
            return this.getToken(mpsParser.IDENTIFIER, i);
        }
    };
    RhsdatacardContext.prototype.NUMERICALVALUE = function (i) {
        if (i === undefined) {
            return this.getTokens(mpsParser.NUMERICALVALUE);
        }
        else {
            return this.getToken(mpsParser.NUMERICALVALUE, i);
        }
    };
    RhsdatacardContext.prototype.RHSINDICATORCARD = function () { return this.tryGetToken(mpsParser.RHSINDICATORCARD, 0); };
    Object.defineProperty(RhsdatacardContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_rhsdatacard; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RhsdatacardContext.prototype.enterRule = function (listener) {
        if (listener.enterRhsdatacard) {
            listener.enterRhsdatacard(this);
        }
    };
    // @Override
    RhsdatacardContext.prototype.exitRule = function (listener) {
        if (listener.exitRhsdatacard) {
            listener.exitRhsdatacard(this);
        }
    };
    // @Override
    RhsdatacardContext.prototype.accept = function (visitor) {
        if (visitor.visitRhsdatacard) {
            return visitor.visitRhsdatacard(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RhsdatacardContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RhsdatacardContext = RhsdatacardContext;
var RangesdatacardContext = /** @class */ (function (_super) {
    __extends(RangesdatacardContext, _super);
    function RangesdatacardContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RangesdatacardContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(mpsParser.IDENTIFIER);
        }
        else {
            return this.getToken(mpsParser.IDENTIFIER, i);
        }
    };
    RangesdatacardContext.prototype.NUMERICALVALUE = function (i) {
        if (i === undefined) {
            return this.getTokens(mpsParser.NUMERICALVALUE);
        }
        else {
            return this.getToken(mpsParser.NUMERICALVALUE, i);
        }
    };
    RangesdatacardContext.prototype.RANGESINDICATORCARD = function () { return this.tryGetToken(mpsParser.RANGESINDICATORCARD, 0); };
    Object.defineProperty(RangesdatacardContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_rangesdatacard; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RangesdatacardContext.prototype.enterRule = function (listener) {
        if (listener.enterRangesdatacard) {
            listener.enterRangesdatacard(this);
        }
    };
    // @Override
    RangesdatacardContext.prototype.exitRule = function (listener) {
        if (listener.exitRangesdatacard) {
            listener.exitRangesdatacard(this);
        }
    };
    // @Override
    RangesdatacardContext.prototype.accept = function (visitor) {
        if (visitor.visitRangesdatacard) {
            return visitor.visitRangesdatacard(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RangesdatacardContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RangesdatacardContext = RangesdatacardContext;
var BoundsdatacardContext = /** @class */ (function (_super) {
    __extends(BoundsdatacardContext, _super);
    function BoundsdatacardContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BoundsdatacardContext.prototype.BOUNDKEY = function () { return this.getToken(mpsParser.BOUNDKEY, 0); };
    BoundsdatacardContext.prototype.IDENTIFIER = function (i) {
        if (i === undefined) {
            return this.getTokens(mpsParser.IDENTIFIER);
        }
        else {
            return this.getToken(mpsParser.IDENTIFIER, i);
        }
    };
    BoundsdatacardContext.prototype.BOUNDSINDICATORCARD = function () { return this.tryGetToken(mpsParser.BOUNDSINDICATORCARD, 0); };
    BoundsdatacardContext.prototype.NUMERICALVALUE = function () { return this.tryGetToken(mpsParser.NUMERICALVALUE, 0); };
    Object.defineProperty(BoundsdatacardContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_boundsdatacard; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BoundsdatacardContext.prototype.enterRule = function (listener) {
        if (listener.enterBoundsdatacard) {
            listener.enterBoundsdatacard(this);
        }
    };
    // @Override
    BoundsdatacardContext.prototype.exitRule = function (listener) {
        if (listener.exitBoundsdatacard) {
            listener.exitBoundsdatacard(this);
        }
    };
    // @Override
    BoundsdatacardContext.prototype.accept = function (visitor) {
        if (visitor.visitBoundsdatacard) {
            return visitor.visitBoundsdatacard(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BoundsdatacardContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BoundsdatacardContext = BoundsdatacardContext;
var IntblockContext = /** @class */ (function (_super) {
    __extends(IntblockContext, _super);
    function IntblockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntblockContext.prototype.startmarker = function () {
        return this.getRuleContext(0, StartmarkerContext);
    };
    IntblockContext.prototype.endmarker = function () {
        return this.getRuleContext(0, EndmarkerContext);
    };
    IntblockContext.prototype.columndatacard = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumndatacardContext);
        }
        else {
            return this.getRuleContext(i, ColumndatacardContext);
        }
    };
    Object.defineProperty(IntblockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_intblock; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntblockContext.prototype.enterRule = function (listener) {
        if (listener.enterIntblock) {
            listener.enterIntblock(this);
        }
    };
    // @Override
    IntblockContext.prototype.exitRule = function (listener) {
        if (listener.exitIntblock) {
            listener.exitIntblock(this);
        }
    };
    // @Override
    IntblockContext.prototype.accept = function (visitor) {
        if (visitor.visitIntblock) {
            return visitor.visitIntblock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntblockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntblockContext = IntblockContext;
var StartmarkerContext = /** @class */ (function (_super) {
    __extends(StartmarkerContext, _super);
    function StartmarkerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StartmarkerContext.prototype.IDENTIFIER = function () { return this.getToken(mpsParser.IDENTIFIER, 0); };
    StartmarkerContext.prototype.KEYWORDMARKER = function () { return this.getToken(mpsParser.KEYWORDMARKER, 0); };
    StartmarkerContext.prototype.STARTMARKER = function () { return this.getToken(mpsParser.STARTMARKER, 0); };
    Object.defineProperty(StartmarkerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_startmarker; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StartmarkerContext.prototype.enterRule = function (listener) {
        if (listener.enterStartmarker) {
            listener.enterStartmarker(this);
        }
    };
    // @Override
    StartmarkerContext.prototype.exitRule = function (listener) {
        if (listener.exitStartmarker) {
            listener.exitStartmarker(this);
        }
    };
    // @Override
    StartmarkerContext.prototype.accept = function (visitor) {
        if (visitor.visitStartmarker) {
            return visitor.visitStartmarker(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StartmarkerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StartmarkerContext = StartmarkerContext;
var EndmarkerContext = /** @class */ (function (_super) {
    __extends(EndmarkerContext, _super);
    function EndmarkerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EndmarkerContext.prototype.IDENTIFIER = function () { return this.getToken(mpsParser.IDENTIFIER, 0); };
    EndmarkerContext.prototype.KEYWORDMARKER = function () { return this.getToken(mpsParser.KEYWORDMARKER, 0); };
    EndmarkerContext.prototype.ENDMARKER = function () { return this.getToken(mpsParser.ENDMARKER, 0); };
    Object.defineProperty(EndmarkerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mpsParser.RULE_endmarker; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EndmarkerContext.prototype.enterRule = function (listener) {
        if (listener.enterEndmarker) {
            listener.enterEndmarker(this);
        }
    };
    // @Override
    EndmarkerContext.prototype.exitRule = function (listener) {
        if (listener.exitEndmarker) {
            listener.exitEndmarker(this);
        }
    };
    // @Override
    EndmarkerContext.prototype.accept = function (visitor) {
        if (visitor.visitEndmarker) {
            return visitor.visitEndmarker(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EndmarkerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EndmarkerContext = EndmarkerContext;
