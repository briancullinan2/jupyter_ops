"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gtin/gtin.g4 by ANTLR 4.7.3-SNAPSHOT
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
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var gtinParser = /** @class */ (function (_super) {
    __extends(gtinParser, _super);
    function gtinParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(gtinParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(gtinParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return gtinParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gtinParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "gtin.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gtinParser.prototype, "ruleNames", {
        // @Override
        get: function () { return gtinParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(gtinParser.prototype, "serializedATN", {
        // @Override
        get: function () { return gtinParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    gtinParser.prototype.gtin = function () {
        var _localctx = new GtinContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, gtinParser.RULE_gtin);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 79;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                    case 1:
                        {
                            this.state = 74;
                            this.gtin8();
                        }
                        break;
                    case 2:
                        {
                            this.state = 75;
                            this.gtin12();
                        }
                        break;
                    case 3:
                        {
                            this.state = 76;
                            this.gtin13();
                        }
                        break;
                    case 4:
                        {
                            this.state = 77;
                            this.gtin14();
                        }
                        break;
                    case 5:
                        {
                            this.state = 78;
                            this.supplemental_code();
                        }
                        break;
                }
                this.state = 81;
                this.match(gtinParser.EOF);
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
    gtinParser.prototype.gtin8 = function () {
        var _localctx = new Gtin8Context(this._ctx, this.state);
        this.enterRule(_localctx, 2, gtinParser.RULE_gtin8);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 83;
                this.ean8();
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
    gtinParser.prototype.ean8 = function () {
        var _localctx = new Ean8Context(this._ctx, this.state);
        this.enterRule(_localctx, 4, gtinParser.RULE_ean8);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 85;
                this.any_digit();
                this.state = 86;
                this.any_digit();
                this.state = 87;
                this.any_digit();
                this.state = 88;
                this.any_digit();
                this.state = 89;
                this.any_digit();
                this.state = 90;
                this.any_digit();
                this.state = 91;
                this.any_digit();
                this.state = 92;
                this.any_digit();
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
    gtinParser.prototype.gtin12 = function () {
        var _localctx = new Gtin12Context(this._ctx, this.state);
        this.enterRule(_localctx, 6, gtinParser.RULE_gtin12);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 94;
                this.upc();
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
    gtinParser.prototype.gtin13 = function () {
        var _localctx = new Gtin13Context(this._ctx, this.state);
        this.enterRule(_localctx, 8, gtinParser.RULE_gtin13);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 96;
                this.ean13();
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
    gtinParser.prototype.gtin14 = function () {
        var _localctx = new Gtin14Context(this._ctx, this.state);
        this.enterRule(_localctx, 10, gtinParser.RULE_gtin14);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 98;
                this.ean14();
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
    gtinParser.prototype.upc = function () {
        var _localctx = new UpcContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, gtinParser.RULE_upc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 102;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                    case 1:
                        {
                            this.state = 100;
                            this.upc_a();
                        }
                        break;
                    case 2:
                        {
                            this.state = 101;
                            this.upc_e();
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
    gtinParser.prototype.upc_a = function () {
        var _localctx = new Upc_aContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, gtinParser.RULE_upc_a);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 104;
                this.num_system();
                this.state = 105;
                this.upc_a_manufacturer();
                this.state = 106;
                this.upc_a_product();
                this.state = 107;
                this.check_code();
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
    gtinParser.prototype.upc_a_manufacturer = function () {
        var _localctx = new Upc_a_manufacturerContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, gtinParser.RULE_upc_a_manufacturer);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 109;
                this.upc_a_5();
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
    gtinParser.prototype.upc_a_product = function () {
        var _localctx = new Upc_a_productContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, gtinParser.RULE_upc_a_product);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 111;
                this.upc_a_5();
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
    gtinParser.prototype.upc_a_5 = function () {
        var _localctx = new Upc_a_5Context(this._ctx, this.state);
        this.enterRule(_localctx, 20, gtinParser.RULE_upc_a_5);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 113;
                this.any_digit();
                this.state = 114;
                this.any_digit();
                this.state = 115;
                this.any_digit();
                this.state = 116;
                this.any_digit();
                this.state = 117;
                this.any_digit();
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
    gtinParser.prototype.upc_e = function () {
        var _localctx = new Upc_eContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, gtinParser.RULE_upc_e);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 119;
                this.any_digit();
                this.state = 120;
                this.any_digit();
                this.state = 121;
                this.any_digit();
                this.state = 122;
                this.any_digit();
                this.state = 123;
                this.any_digit();
                this.state = 124;
                this.any_digit();
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
    gtinParser.prototype.num_system = function () {
        var _localctx = new Num_systemContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, gtinParser.RULE_num_system);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 126;
                this.any_digit();
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
    gtinParser.prototype.check_code = function () {
        var _localctx = new Check_codeContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, gtinParser.RULE_check_code);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 128;
                this.any_digit();
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
    gtinParser.prototype.supplemental_code = function () {
        var _localctx = new Supplemental_codeContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, gtinParser.RULE_supplemental_code);
        try {
            this.state = 132;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 130;
                        this.supplemental_code_5();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 131;
                        this.supplemental_code_2();
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
    gtinParser.prototype.supplemental_code_5 = function () {
        var _localctx = new Supplemental_code_5Context(this._ctx, this.state);
        this.enterRule(_localctx, 30, gtinParser.RULE_supplemental_code_5);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 134;
                this.any_digit();
                this.state = 135;
                this.any_digit();
                this.state = 136;
                this.any_digit();
                this.state = 137;
                this.any_digit();
                this.state = 138;
                this.any_digit();
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
    gtinParser.prototype.supplemental_code_2 = function () {
        var _localctx = new Supplemental_code_2Context(this._ctx, this.state);
        this.enterRule(_localctx, 32, gtinParser.RULE_supplemental_code_2);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 140;
                this.any_digit();
                this.state = 141;
                this.any_digit();
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
    gtinParser.prototype.ean13 = function () {
        var _localctx = new Ean13Context(this._ctx, this.state);
        this.enterRule(_localctx, 34, gtinParser.RULE_ean13);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 147;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                    case 1:
                        {
                            this.state = 143;
                            this.ean13_ismn();
                        }
                        break;
                    case 2:
                        {
                            this.state = 144;
                            this.ean13_issn();
                        }
                        break;
                    case 3:
                        {
                            this.state = 145;
                            this.ean13_bookland();
                        }
                        break;
                    case 4:
                        {
                            this.state = 146;
                            this.ean13_generic();
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
    gtinParser.prototype.ean13_generic = function () {
        var _localctx = new Ean13_genericContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, gtinParser.RULE_ean13_generic);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 149;
                this.gs1_prefix();
                this.state = 150;
                this.ean_13_manprod();
                this.state = 151;
                this.check_code();
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
    gtinParser.prototype.ean13_ismn = function () {
        var _localctx = new Ean13_ismnContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, gtinParser.RULE_ean13_ismn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 153;
                this.gs1_prefix_ismn();
                this.state = 154;
                this.ismn_publisher_number();
                this.state = 155;
                this.ismn_item_number();
                this.state = 156;
                this.check_code();
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
    gtinParser.prototype.gs1_prefix_ismn = function () {
        var _localctx = new Gs1_prefix_ismnContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, gtinParser.RULE_gs1_prefix_ismn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 158;
                this.match(gtinParser.DIGIT_9);
                this.state = 159;
                this.match(gtinParser.DIGIT_7);
                this.state = 160;
                this.match(gtinParser.DIGIT_9);
                this.state = 161;
                this.match(gtinParser.DIGIT_0);
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
    gtinParser.prototype.ismn_publisher_number = function () {
        var _localctx = new Ismn_publisher_numberContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, gtinParser.RULE_ismn_publisher_number);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 163;
                this.any_digit();
                this.state = 164;
                this.any_digit();
                this.state = 165;
                this.any_digit();
                this.state = 166;
                this.any_digit();
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
    gtinParser.prototype.ismn_item_number = function () {
        var _localctx = new Ismn_item_numberContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, gtinParser.RULE_ismn_item_number);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 168;
                this.any_digit();
                this.state = 169;
                this.any_digit();
                this.state = 170;
                this.any_digit();
                this.state = 171;
                this.any_digit();
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
    gtinParser.prototype.ean13_bookland = function () {
        var _localctx = new Ean13_booklandContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, gtinParser.RULE_ean13_bookland);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 175;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                    case 1:
                        {
                            this.state = 173;
                            this.gs1_prefix_bookland_1();
                        }
                        break;
                    case 2:
                        {
                            this.state = 174;
                            this.gs1_prefix_bookland_2();
                        }
                        break;
                }
                this.state = 177;
                this.bookland_isbn();
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
    gtinParser.prototype.bookland_isbn = function () {
        var _localctx = new Bookland_isbnContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, gtinParser.RULE_bookland_isbn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 179;
                this.any_digit();
                this.state = 180;
                this.any_digit();
                this.state = 181;
                this.any_digit();
                this.state = 182;
                this.any_digit();
                this.state = 183;
                this.any_digit();
                this.state = 184;
                this.any_digit();
                this.state = 185;
                this.any_digit();
                this.state = 186;
                this.any_digit();
                this.state = 187;
                this.any_digit();
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
    gtinParser.prototype.gs1_prefix_bookland_1 = function () {
        var _localctx = new Gs1_prefix_bookland_1Context(this._ctx, this.state);
        this.enterRule(_localctx, 50, gtinParser.RULE_gs1_prefix_bookland_1);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 189;
                this.match(gtinParser.DIGIT_9);
                this.state = 190;
                this.match(gtinParser.DIGIT_7);
                this.state = 191;
                this.match(gtinParser.DIGIT_9);
                this.state = 192;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << gtinParser.DIGIT_1) | (1 << gtinParser.DIGIT_2) | (1 << gtinParser.DIGIT_3) | (1 << gtinParser.DIGIT_4) | (1 << gtinParser.DIGIT_5) | (1 << gtinParser.DIGIT_6) | (1 << gtinParser.DIGIT_7) | (1 << gtinParser.DIGIT_8) | (1 << gtinParser.DIGIT_9))) !== 0))) {
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
    gtinParser.prototype.gs1_prefix_bookland_2 = function () {
        var _localctx = new Gs1_prefix_bookland_2Context(this._ctx, this.state);
        this.enterRule(_localctx, 52, gtinParser.RULE_gs1_prefix_bookland_2);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 194;
                this.match(gtinParser.DIGIT_9);
                this.state = 195;
                this.match(gtinParser.DIGIT_7);
                this.state = 196;
                this.match(gtinParser.DIGIT_8);
                this.state = 197;
                this.any_digit();
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
    gtinParser.prototype.gs1_prefix_issn = function () {
        var _localctx = new Gs1_prefix_issnContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, gtinParser.RULE_gs1_prefix_issn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 199;
                this.match(gtinParser.DIGIT_9);
                this.state = 200;
                this.match(gtinParser.DIGIT_7);
                this.state = 201;
                this.match(gtinParser.DIGIT_7);
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
    gtinParser.prototype.ean13_issn = function () {
        var _localctx = new Ean13_issnContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, gtinParser.RULE_ean13_issn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 203;
                this.gs1_prefix_issn();
                this.state = 204;
                this.issn();
                this.state = 205;
                this.check_code();
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
    gtinParser.prototype.issn = function () {
        var _localctx = new IssnContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, gtinParser.RULE_issn);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 207;
                this.any_digit();
                this.state = 208;
                this.any_digit();
                this.state = 209;
                this.any_digit();
                this.state = 210;
                this.any_digit();
                this.state = 211;
                this.any_digit();
                this.state = 212;
                this.any_digit();
                this.state = 213;
                this.any_digit();
                this.state = 214;
                this.any_digit();
                this.state = 215;
                this.any_digit();
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
    gtinParser.prototype.ean_13_manprod = function () {
        var _localctx = new Ean_13_manprodContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, gtinParser.RULE_ean_13_manprod);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 217;
                this.any_digit();
                this.state = 218;
                this.any_digit();
                this.state = 219;
                this.any_digit();
                this.state = 220;
                this.any_digit();
                this.state = 221;
                this.any_digit();
                this.state = 222;
                this.any_digit();
                this.state = 223;
                this.any_digit();
                this.state = 224;
                this.any_digit();
                this.state = 225;
                this.any_digit();
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
    gtinParser.prototype.gs1_prefix = function () {
        var _localctx = new Gs1_prefixContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, gtinParser.RULE_gs1_prefix);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 227;
                this.any_digit();
                this.state = 228;
                this.any_digit();
                this.state = 229;
                this.any_digit();
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
    gtinParser.prototype.ean14 = function () {
        var _localctx = new Ean14Context(this._ctx, this.state);
        this.enterRule(_localctx, 64, gtinParser.RULE_ean14);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 231;
                this.ean14_packaging();
                this.state = 232;
                this.ean14_product();
                this.state = 233;
                this.check_code();
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
    gtinParser.prototype.ean14_appid = function () {
        var _localctx = new Ean14_appidContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, gtinParser.RULE_ean14_appid);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 235;
                this.any_digit();
                this.state = 236;
                this.any_digit();
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
    gtinParser.prototype.ean14_packaging = function () {
        var _localctx = new Ean14_packagingContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, gtinParser.RULE_ean14_packaging);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << gtinParser.DIGIT_0) | (1 << gtinParser.DIGIT_1) | (1 << gtinParser.DIGIT_2) | (1 << gtinParser.DIGIT_3) | (1 << gtinParser.DIGIT_4) | (1 << gtinParser.DIGIT_5) | (1 << gtinParser.DIGIT_6) | (1 << gtinParser.DIGIT_7) | (1 << gtinParser.DIGIT_8))) !== 0))) {
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
    gtinParser.prototype.ean14_product = function () {
        var _localctx = new Ean14_productContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, gtinParser.RULE_ean14_product);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 240;
                this.any_digit();
                this.state = 241;
                this.any_digit();
                this.state = 242;
                this.any_digit();
                this.state = 243;
                this.any_digit();
                this.state = 244;
                this.any_digit();
                this.state = 245;
                this.any_digit();
                this.state = 246;
                this.any_digit();
                this.state = 247;
                this.any_digit();
                this.state = 248;
                this.any_digit();
                this.state = 249;
                this.any_digit();
                this.state = 250;
                this.any_digit();
                this.state = 251;
                this.any_digit();
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
    gtinParser.prototype.any_digit = function () {
        var _localctx = new Any_digitContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, gtinParser.RULE_any_digit);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 253;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << gtinParser.DIGIT_0) | (1 << gtinParser.DIGIT_1) | (1 << gtinParser.DIGIT_2) | (1 << gtinParser.DIGIT_3) | (1 << gtinParser.DIGIT_4) | (1 << gtinParser.DIGIT_5) | (1 << gtinParser.DIGIT_6) | (1 << gtinParser.DIGIT_7) | (1 << gtinParser.DIGIT_8) | (1 << gtinParser.DIGIT_9))) !== 0))) {
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
    Object.defineProperty(gtinParser, "_ATN", {
        get: function () {
            if (!gtinParser.__ATN) {
                gtinParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(gtinParser._serializedATN));
            }
            return gtinParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    gtinParser.DIGIT_0 = 1;
    gtinParser.DIGIT_1 = 2;
    gtinParser.DIGIT_2 = 3;
    gtinParser.DIGIT_3 = 4;
    gtinParser.DIGIT_4 = 5;
    gtinParser.DIGIT_5 = 6;
    gtinParser.DIGIT_6 = 7;
    gtinParser.DIGIT_7 = 8;
    gtinParser.DIGIT_8 = 9;
    gtinParser.DIGIT_9 = 10;
    gtinParser.HYPHEN = 11;
    gtinParser.WS = 12;
    gtinParser.RULE_gtin = 0;
    gtinParser.RULE_gtin8 = 1;
    gtinParser.RULE_ean8 = 2;
    gtinParser.RULE_gtin12 = 3;
    gtinParser.RULE_gtin13 = 4;
    gtinParser.RULE_gtin14 = 5;
    gtinParser.RULE_upc = 6;
    gtinParser.RULE_upc_a = 7;
    gtinParser.RULE_upc_a_manufacturer = 8;
    gtinParser.RULE_upc_a_product = 9;
    gtinParser.RULE_upc_a_5 = 10;
    gtinParser.RULE_upc_e = 11;
    gtinParser.RULE_num_system = 12;
    gtinParser.RULE_check_code = 13;
    gtinParser.RULE_supplemental_code = 14;
    gtinParser.RULE_supplemental_code_5 = 15;
    gtinParser.RULE_supplemental_code_2 = 16;
    gtinParser.RULE_ean13 = 17;
    gtinParser.RULE_ean13_generic = 18;
    gtinParser.RULE_ean13_ismn = 19;
    gtinParser.RULE_gs1_prefix_ismn = 20;
    gtinParser.RULE_ismn_publisher_number = 21;
    gtinParser.RULE_ismn_item_number = 22;
    gtinParser.RULE_ean13_bookland = 23;
    gtinParser.RULE_bookland_isbn = 24;
    gtinParser.RULE_gs1_prefix_bookland_1 = 25;
    gtinParser.RULE_gs1_prefix_bookland_2 = 26;
    gtinParser.RULE_gs1_prefix_issn = 27;
    gtinParser.RULE_ean13_issn = 28;
    gtinParser.RULE_issn = 29;
    gtinParser.RULE_ean_13_manprod = 30;
    gtinParser.RULE_gs1_prefix = 31;
    gtinParser.RULE_ean14 = 32;
    gtinParser.RULE_ean14_appid = 33;
    gtinParser.RULE_ean14_packaging = 34;
    gtinParser.RULE_ean14_product = 35;
    gtinParser.RULE_any_digit = 36;
    // tslint:disable:no-trailing-whitespace
    gtinParser.ruleNames = [
        "gtin", "gtin8", "ean8", "gtin12", "gtin13", "gtin14", "upc", "upc_a",
        "upc_a_manufacturer", "upc_a_product", "upc_a_5", "upc_e", "num_system",
        "check_code", "supplemental_code", "supplemental_code_5", "supplemental_code_2",
        "ean13", "ean13_generic", "ean13_ismn", "gs1_prefix_ismn", "ismn_publisher_number",
        "ismn_item_number", "ean13_bookland", "bookland_isbn", "gs1_prefix_bookland_1",
        "gs1_prefix_bookland_2", "gs1_prefix_issn", "ean13_issn", "issn", "ean_13_manprod",
        "gs1_prefix", "ean14", "ean14_appid", "ean14_packaging", "ean14_product",
        "any_digit",
    ];
    gtinParser._LITERAL_NAMES = [
        undefined, "'0'", "'1'", "'2'", "'3'", "'4'", "'5'", "'6'", "'7'", "'8'",
        "'9'", "'-'",
    ];
    gtinParser._SYMBOLIC_NAMES = [
        undefined, "DIGIT_0", "DIGIT_1", "DIGIT_2", "DIGIT_3", "DIGIT_4", "DIGIT_5",
        "DIGIT_6", "DIGIT_7", "DIGIT_8", "DIGIT_9", "HYPHEN", "WS",
    ];
    gtinParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(gtinParser._LITERAL_NAMES, gtinParser._SYMBOLIC_NAMES, []);
    gtinParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0E\u0102\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
        "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
        "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
        "#\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05" +
        "\x02R\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
        "\x06\x03\x07\x03\x07\x03\b\x03\b\x05\bi\n\b\x03\t\x03\t\x03\t\x03\t\x03" +
        "\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10" +
        "\x03\x10\x05\x10\x87\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
        "\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\x96" +
        "\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
        "\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
        "\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19" +
        "\x05\x19\xB2\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
        "\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
        "\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03" +
        "\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
        "\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
        " \x03 \x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"" +
        "\x03\"\x03#\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03" +
        "%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x02\x02\x02\'\x02\x02\x04\x02" +
        "\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
        "\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
        "0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
        "\x02\x05\x03\x02\x04\f\x03\x02\x03\v\x03\x02\x03\f\x02\xE6\x02Q\x03\x02" +
        "\x02\x02\x04U\x03\x02\x02\x02\x06W\x03\x02\x02\x02\b`\x03\x02\x02\x02" +
        "\nb\x03\x02\x02\x02\fd\x03\x02\x02\x02\x0Eh\x03\x02\x02\x02\x10j\x03\x02" +
        "\x02\x02\x12o\x03\x02\x02\x02\x14q\x03\x02\x02\x02\x16s\x03\x02\x02\x02" +
        "\x18y\x03\x02\x02\x02\x1A\x80\x03\x02\x02\x02\x1C\x82\x03\x02\x02\x02" +
        "\x1E\x86\x03\x02\x02\x02 \x88\x03\x02\x02\x02\"\x8E\x03\x02\x02\x02$\x95" +
        "\x03\x02\x02\x02&\x97\x03\x02\x02\x02(\x9B\x03\x02\x02\x02*\xA0\x03\x02" +
        "\x02\x02,\xA5\x03\x02\x02\x02.\xAA\x03\x02\x02\x020\xB1\x03\x02\x02\x02" +
        "2\xB5\x03\x02\x02\x024\xBF\x03\x02\x02\x026\xC4\x03\x02\x02\x028\xC9\x03" +
        "\x02\x02\x02:\xCD\x03\x02\x02\x02<\xD1\x03\x02\x02\x02>\xDB\x03\x02\x02" +
        "\x02@\xE5\x03\x02\x02\x02B\xE9\x03\x02\x02\x02D\xED\x03\x02\x02\x02F\xF0" +
        "\x03\x02\x02\x02H\xF2\x03\x02\x02\x02J\xFF\x03\x02\x02\x02LR\x05\x04\x03" +
        "\x02MR\x05\b\x05\x02NR\x05\n\x06\x02OR\x05\f\x07\x02PR\x05\x1E\x10\x02" +
        "QL\x03\x02\x02\x02QM\x03\x02\x02\x02QN\x03\x02\x02\x02QO\x03\x02\x02\x02" +
        "QP\x03\x02\x02\x02RS\x03\x02\x02\x02ST\x07\x02\x02\x03T\x03\x03\x02\x02" +
        "\x02UV\x05\x06\x04\x02V\x05\x03\x02\x02\x02WX\x05J&\x02XY\x05J&\x02YZ" +
        "\x05J&\x02Z[\x05J&\x02[\\\x05J&\x02\\]\x05J&\x02]^\x05J&\x02^_\x05J&\x02" +
        "_\x07\x03\x02\x02\x02`a\x05\x0E\b\x02a\t\x03\x02\x02\x02bc\x05$\x13\x02" +
        "c\v\x03\x02\x02\x02de\x05B\"\x02e\r\x03\x02\x02\x02fi\x05\x10\t\x02gi" +
        "\x05\x18\r\x02hf\x03\x02\x02\x02hg\x03\x02\x02\x02i\x0F\x03\x02\x02\x02" +
        "jk\x05\x1A\x0E\x02kl\x05\x12\n\x02lm\x05\x14\v\x02mn\x05\x1C\x0F\x02n" +
        "\x11\x03\x02\x02\x02op\x05\x16\f\x02p\x13\x03\x02\x02\x02qr\x05\x16\f" +
        "\x02r\x15\x03\x02\x02\x02st\x05J&\x02tu\x05J&\x02uv\x05J&\x02vw\x05J&" +
        "\x02wx\x05J&\x02x\x17\x03\x02\x02\x02yz\x05J&\x02z{\x05J&\x02{|\x05J&" +
        "\x02|}\x05J&\x02}~\x05J&\x02~\x7F\x05J&\x02\x7F\x19\x03\x02\x02\x02\x80" +
        "\x81\x05J&\x02\x81\x1B\x03\x02\x02\x02\x82\x83\x05J&\x02\x83\x1D\x03\x02" +
        "\x02\x02\x84\x87\x05 \x11\x02\x85\x87\x05\"\x12\x02\x86\x84\x03\x02\x02" +
        "\x02\x86\x85\x03\x02\x02\x02\x87\x1F\x03\x02\x02\x02\x88\x89\x05J&\x02" +
        "\x89\x8A\x05J&\x02\x8A\x8B\x05J&\x02\x8B\x8C\x05J&\x02\x8C\x8D\x05J&\x02" +
        "\x8D!\x03\x02\x02\x02\x8E\x8F\x05J&\x02\x8F\x90\x05J&\x02\x90#\x03\x02" +
        "\x02\x02\x91\x96\x05(\x15\x02\x92\x96\x05:\x1E\x02\x93\x96\x050\x19\x02" +
        "\x94\x96\x05&\x14\x02\x95\x91\x03\x02\x02\x02\x95\x92\x03\x02\x02\x02" +
        "\x95\x93\x03\x02\x02\x02\x95\x94\x03\x02\x02\x02\x96%\x03\x02\x02\x02" +
        "\x97\x98\x05@!\x02\x98\x99\x05> \x02\x99\x9A\x05\x1C\x0F\x02\x9A\'\x03" +
        "\x02\x02\x02\x9B\x9C\x05*\x16\x02\x9C\x9D\x05,\x17\x02\x9D\x9E\x05.\x18" +
        "\x02\x9E\x9F\x05\x1C\x0F\x02\x9F)\x03\x02\x02\x02\xA0\xA1\x07\f\x02\x02" +
        "\xA1\xA2\x07\n\x02\x02\xA2\xA3\x07\f\x02\x02\xA3\xA4\x07\x03\x02\x02\xA4" +
        "+\x03\x02\x02\x02\xA5\xA6\x05J&\x02\xA6\xA7\x05J&\x02\xA7\xA8\x05J&\x02" +
        "\xA8\xA9\x05J&\x02\xA9-\x03\x02\x02\x02\xAA\xAB\x05J&\x02\xAB\xAC\x05" +
        "J&\x02\xAC\xAD\x05J&\x02\xAD\xAE\x05J&\x02\xAE/\x03\x02\x02\x02\xAF\xB2" +
        "\x054\x1B\x02\xB0\xB2\x056\x1C\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB0\x03" +
        "\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x052\x1A\x02\xB41\x03\x02" +
        "\x02\x02\xB5\xB6\x05J&\x02\xB6\xB7\x05J&\x02\xB7\xB8\x05J&\x02\xB8\xB9" +
        "\x05J&\x02\xB9\xBA\x05J&\x02\xBA\xBB\x05J&\x02\xBB\xBC\x05J&\x02\xBC\xBD" +
        "\x05J&\x02\xBD\xBE\x05J&\x02\xBE3\x03\x02\x02\x02\xBF\xC0\x07\f\x02\x02" +
        "\xC0\xC1\x07\n\x02\x02\xC1\xC2\x07\f\x02\x02\xC2\xC3\t\x02\x02\x02\xC3" +
        "5\x03\x02\x02\x02\xC4\xC5\x07\f\x02\x02\xC5\xC6\x07\n\x02\x02\xC6\xC7" +
        "\x07\v\x02\x02\xC7\xC8\x05J&\x02\xC87\x03\x02\x02\x02\xC9\xCA\x07\f\x02" +
        "\x02\xCA\xCB\x07\n\x02\x02\xCB\xCC\x07\n\x02\x02\xCC9\x03\x02\x02\x02" +
        "\xCD\xCE\x058\x1D\x02\xCE\xCF\x05<\x1F\x02\xCF\xD0\x05\x1C\x0F\x02\xD0" +
        ";\x03\x02\x02\x02\xD1\xD2\x05J&\x02\xD2\xD3\x05J&\x02\xD3\xD4\x05J&\x02" +
        "\xD4\xD5\x05J&\x02\xD5\xD6\x05J&\x02\xD6\xD7\x05J&\x02\xD7\xD8\x05J&\x02" +
        "\xD8\xD9\x05J&\x02\xD9\xDA\x05J&\x02\xDA=\x03\x02\x02\x02\xDB\xDC\x05" +
        "J&\x02\xDC\xDD\x05J&\x02\xDD\xDE\x05J&\x02\xDE\xDF\x05J&\x02\xDF\xE0\x05" +
        "J&\x02\xE0\xE1\x05J&\x02\xE1\xE2\x05J&\x02\xE2\xE3\x05J&\x02\xE3\xE4\x05" +
        "J&\x02\xE4?\x03\x02\x02\x02\xE5\xE6\x05J&\x02\xE6\xE7\x05J&\x02\xE7\xE8" +
        "\x05J&\x02\xE8A\x03\x02\x02\x02\xE9\xEA\x05F$\x02\xEA\xEB\x05H%\x02\xEB" +
        "\xEC\x05\x1C\x0F\x02\xECC\x03\x02\x02\x02\xED\xEE\x05J&\x02\xEE\xEF\x05" +
        "J&\x02\xEFE\x03\x02\x02\x02\xF0\xF1\t\x03\x02\x02\xF1G\x03\x02\x02\x02" +
        "\xF2\xF3\x05J&\x02\xF3\xF4\x05J&\x02\xF4\xF5\x05J&\x02\xF5\xF6\x05J&\x02" +
        "\xF6\xF7\x05J&\x02\xF7\xF8\x05J&\x02\xF8\xF9\x05J&\x02\xF9\xFA\x05J&\x02" +
        "\xFA\xFB\x05J&\x02\xFB\xFC\x05J&\x02\xFC\xFD\x05J&\x02\xFD\xFE\x05J&\x02" +
        "\xFEI\x03\x02\x02\x02\xFF\u0100\t\x04\x02\x02\u0100K\x03\x02\x02\x02\x07" +
        "Qh\x86\x95\xB1";
    return gtinParser;
}(Parser_1.Parser));
exports.gtinParser = gtinParser;
var GtinContext = /** @class */ (function (_super) {
    __extends(GtinContext, _super);
    function GtinContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GtinContext.prototype.EOF = function () { return this.getToken(gtinParser.EOF, 0); };
    GtinContext.prototype.gtin8 = function () {
        return this.tryGetRuleContext(0, Gtin8Context);
    };
    GtinContext.prototype.gtin12 = function () {
        return this.tryGetRuleContext(0, Gtin12Context);
    };
    GtinContext.prototype.gtin13 = function () {
        return this.tryGetRuleContext(0, Gtin13Context);
    };
    GtinContext.prototype.gtin14 = function () {
        return this.tryGetRuleContext(0, Gtin14Context);
    };
    GtinContext.prototype.supplemental_code = function () {
        return this.tryGetRuleContext(0, Supplemental_codeContext);
    };
    Object.defineProperty(GtinContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_gtin; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GtinContext.prototype.enterRule = function (listener) {
        if (listener.enterGtin) {
            listener.enterGtin(this);
        }
    };
    // @Override
    GtinContext.prototype.exitRule = function (listener) {
        if (listener.exitGtin) {
            listener.exitGtin(this);
        }
    };
    // @Override
    GtinContext.prototype.accept = function (visitor) {
        if (visitor.visitGtin) {
            return visitor.visitGtin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GtinContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GtinContext = GtinContext;
var Gtin8Context = /** @class */ (function (_super) {
    __extends(Gtin8Context, _super);
    function Gtin8Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Gtin8Context.prototype.ean8 = function () {
        return this.getRuleContext(0, Ean8Context);
    };
    Object.defineProperty(Gtin8Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_gtin8; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Gtin8Context.prototype.enterRule = function (listener) {
        if (listener.enterGtin8) {
            listener.enterGtin8(this);
        }
    };
    // @Override
    Gtin8Context.prototype.exitRule = function (listener) {
        if (listener.exitGtin8) {
            listener.exitGtin8(this);
        }
    };
    // @Override
    Gtin8Context.prototype.accept = function (visitor) {
        if (visitor.visitGtin8) {
            return visitor.visitGtin8(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Gtin8Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Gtin8Context = Gtin8Context;
var Ean8Context = /** @class */ (function (_super) {
    __extends(Ean8Context, _super);
    function Ean8Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ean8Context.prototype.any_digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Any_digitContext);
        }
        else {
            return this.getRuleContext(i, Any_digitContext);
        }
    };
    Object.defineProperty(Ean8Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_ean8; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ean8Context.prototype.enterRule = function (listener) {
        if (listener.enterEan8) {
            listener.enterEan8(this);
        }
    };
    // @Override
    Ean8Context.prototype.exitRule = function (listener) {
        if (listener.exitEan8) {
            listener.exitEan8(this);
        }
    };
    // @Override
    Ean8Context.prototype.accept = function (visitor) {
        if (visitor.visitEan8) {
            return visitor.visitEan8(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ean8Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ean8Context = Ean8Context;
var Gtin12Context = /** @class */ (function (_super) {
    __extends(Gtin12Context, _super);
    function Gtin12Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Gtin12Context.prototype.upc = function () {
        return this.getRuleContext(0, UpcContext);
    };
    Object.defineProperty(Gtin12Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_gtin12; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Gtin12Context.prototype.enterRule = function (listener) {
        if (listener.enterGtin12) {
            listener.enterGtin12(this);
        }
    };
    // @Override
    Gtin12Context.prototype.exitRule = function (listener) {
        if (listener.exitGtin12) {
            listener.exitGtin12(this);
        }
    };
    // @Override
    Gtin12Context.prototype.accept = function (visitor) {
        if (visitor.visitGtin12) {
            return visitor.visitGtin12(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Gtin12Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Gtin12Context = Gtin12Context;
var Gtin13Context = /** @class */ (function (_super) {
    __extends(Gtin13Context, _super);
    function Gtin13Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Gtin13Context.prototype.ean13 = function () {
        return this.getRuleContext(0, Ean13Context);
    };
    Object.defineProperty(Gtin13Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_gtin13; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Gtin13Context.prototype.enterRule = function (listener) {
        if (listener.enterGtin13) {
            listener.enterGtin13(this);
        }
    };
    // @Override
    Gtin13Context.prototype.exitRule = function (listener) {
        if (listener.exitGtin13) {
            listener.exitGtin13(this);
        }
    };
    // @Override
    Gtin13Context.prototype.accept = function (visitor) {
        if (visitor.visitGtin13) {
            return visitor.visitGtin13(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Gtin13Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Gtin13Context = Gtin13Context;
var Gtin14Context = /** @class */ (function (_super) {
    __extends(Gtin14Context, _super);
    function Gtin14Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Gtin14Context.prototype.ean14 = function () {
        return this.getRuleContext(0, Ean14Context);
    };
    Object.defineProperty(Gtin14Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_gtin14; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Gtin14Context.prototype.enterRule = function (listener) {
        if (listener.enterGtin14) {
            listener.enterGtin14(this);
        }
    };
    // @Override
    Gtin14Context.prototype.exitRule = function (listener) {
        if (listener.exitGtin14) {
            listener.exitGtin14(this);
        }
    };
    // @Override
    Gtin14Context.prototype.accept = function (visitor) {
        if (visitor.visitGtin14) {
            return visitor.visitGtin14(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Gtin14Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Gtin14Context = Gtin14Context;
var UpcContext = /** @class */ (function (_super) {
    __extends(UpcContext, _super);
    function UpcContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UpcContext.prototype.upc_a = function () {
        return this.tryGetRuleContext(0, Upc_aContext);
    };
    UpcContext.prototype.upc_e = function () {
        return this.tryGetRuleContext(0, Upc_eContext);
    };
    Object.defineProperty(UpcContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_upc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UpcContext.prototype.enterRule = function (listener) {
        if (listener.enterUpc) {
            listener.enterUpc(this);
        }
    };
    // @Override
    UpcContext.prototype.exitRule = function (listener) {
        if (listener.exitUpc) {
            listener.exitUpc(this);
        }
    };
    // @Override
    UpcContext.prototype.accept = function (visitor) {
        if (visitor.visitUpc) {
            return visitor.visitUpc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UpcContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UpcContext = UpcContext;
var Upc_aContext = /** @class */ (function (_super) {
    __extends(Upc_aContext, _super);
    function Upc_aContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Upc_aContext.prototype.num_system = function () {
        return this.getRuleContext(0, Num_systemContext);
    };
    Upc_aContext.prototype.upc_a_manufacturer = function () {
        return this.getRuleContext(0, Upc_a_manufacturerContext);
    };
    Upc_aContext.prototype.upc_a_product = function () {
        return this.getRuleContext(0, Upc_a_productContext);
    };
    Upc_aContext.prototype.check_code = function () {
        return this.getRuleContext(0, Check_codeContext);
    };
    Object.defineProperty(Upc_aContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_upc_a; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Upc_aContext.prototype.enterRule = function (listener) {
        if (listener.enterUpc_a) {
            listener.enterUpc_a(this);
        }
    };
    // @Override
    Upc_aContext.prototype.exitRule = function (listener) {
        if (listener.exitUpc_a) {
            listener.exitUpc_a(this);
        }
    };
    // @Override
    Upc_aContext.prototype.accept = function (visitor) {
        if (visitor.visitUpc_a) {
            return visitor.visitUpc_a(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Upc_aContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Upc_aContext = Upc_aContext;
var Upc_a_manufacturerContext = /** @class */ (function (_super) {
    __extends(Upc_a_manufacturerContext, _super);
    function Upc_a_manufacturerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Upc_a_manufacturerContext.prototype.upc_a_5 = function () {
        return this.getRuleContext(0, Upc_a_5Context);
    };
    Object.defineProperty(Upc_a_manufacturerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_upc_a_manufacturer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Upc_a_manufacturerContext.prototype.enterRule = function (listener) {
        if (listener.enterUpc_a_manufacturer) {
            listener.enterUpc_a_manufacturer(this);
        }
    };
    // @Override
    Upc_a_manufacturerContext.prototype.exitRule = function (listener) {
        if (listener.exitUpc_a_manufacturer) {
            listener.exitUpc_a_manufacturer(this);
        }
    };
    // @Override
    Upc_a_manufacturerContext.prototype.accept = function (visitor) {
        if (visitor.visitUpc_a_manufacturer) {
            return visitor.visitUpc_a_manufacturer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Upc_a_manufacturerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Upc_a_manufacturerContext = Upc_a_manufacturerContext;
var Upc_a_productContext = /** @class */ (function (_super) {
    __extends(Upc_a_productContext, _super);
    function Upc_a_productContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Upc_a_productContext.prototype.upc_a_5 = function () {
        return this.getRuleContext(0, Upc_a_5Context);
    };
    Object.defineProperty(Upc_a_productContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_upc_a_product; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Upc_a_productContext.prototype.enterRule = function (listener) {
        if (listener.enterUpc_a_product) {
            listener.enterUpc_a_product(this);
        }
    };
    // @Override
    Upc_a_productContext.prototype.exitRule = function (listener) {
        if (listener.exitUpc_a_product) {
            listener.exitUpc_a_product(this);
        }
    };
    // @Override
    Upc_a_productContext.prototype.accept = function (visitor) {
        if (visitor.visitUpc_a_product) {
            return visitor.visitUpc_a_product(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Upc_a_productContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Upc_a_productContext = Upc_a_productContext;
var Upc_a_5Context = /** @class */ (function (_super) {
    __extends(Upc_a_5Context, _super);
    function Upc_a_5Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Upc_a_5Context.prototype.any_digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Any_digitContext);
        }
        else {
            return this.getRuleContext(i, Any_digitContext);
        }
    };
    Object.defineProperty(Upc_a_5Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_upc_a_5; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Upc_a_5Context.prototype.enterRule = function (listener) {
        if (listener.enterUpc_a_5) {
            listener.enterUpc_a_5(this);
        }
    };
    // @Override
    Upc_a_5Context.prototype.exitRule = function (listener) {
        if (listener.exitUpc_a_5) {
            listener.exitUpc_a_5(this);
        }
    };
    // @Override
    Upc_a_5Context.prototype.accept = function (visitor) {
        if (visitor.visitUpc_a_5) {
            return visitor.visitUpc_a_5(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Upc_a_5Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Upc_a_5Context = Upc_a_5Context;
var Upc_eContext = /** @class */ (function (_super) {
    __extends(Upc_eContext, _super);
    function Upc_eContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Upc_eContext.prototype.any_digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Any_digitContext);
        }
        else {
            return this.getRuleContext(i, Any_digitContext);
        }
    };
    Object.defineProperty(Upc_eContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_upc_e; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Upc_eContext.prototype.enterRule = function (listener) {
        if (listener.enterUpc_e) {
            listener.enterUpc_e(this);
        }
    };
    // @Override
    Upc_eContext.prototype.exitRule = function (listener) {
        if (listener.exitUpc_e) {
            listener.exitUpc_e(this);
        }
    };
    // @Override
    Upc_eContext.prototype.accept = function (visitor) {
        if (visitor.visitUpc_e) {
            return visitor.visitUpc_e(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Upc_eContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Upc_eContext = Upc_eContext;
var Num_systemContext = /** @class */ (function (_super) {
    __extends(Num_systemContext, _super);
    function Num_systemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Num_systemContext.prototype.any_digit = function () {
        return this.getRuleContext(0, Any_digitContext);
    };
    Object.defineProperty(Num_systemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_num_system; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Num_systemContext.prototype.enterRule = function (listener) {
        if (listener.enterNum_system) {
            listener.enterNum_system(this);
        }
    };
    // @Override
    Num_systemContext.prototype.exitRule = function (listener) {
        if (listener.exitNum_system) {
            listener.exitNum_system(this);
        }
    };
    // @Override
    Num_systemContext.prototype.accept = function (visitor) {
        if (visitor.visitNum_system) {
            return visitor.visitNum_system(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Num_systemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Num_systemContext = Num_systemContext;
var Check_codeContext = /** @class */ (function (_super) {
    __extends(Check_codeContext, _super);
    function Check_codeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Check_codeContext.prototype.any_digit = function () {
        return this.getRuleContext(0, Any_digitContext);
    };
    Object.defineProperty(Check_codeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_check_code; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Check_codeContext.prototype.enterRule = function (listener) {
        if (listener.enterCheck_code) {
            listener.enterCheck_code(this);
        }
    };
    // @Override
    Check_codeContext.prototype.exitRule = function (listener) {
        if (listener.exitCheck_code) {
            listener.exitCheck_code(this);
        }
    };
    // @Override
    Check_codeContext.prototype.accept = function (visitor) {
        if (visitor.visitCheck_code) {
            return visitor.visitCheck_code(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Check_codeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Check_codeContext = Check_codeContext;
var Supplemental_codeContext = /** @class */ (function (_super) {
    __extends(Supplemental_codeContext, _super);
    function Supplemental_codeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Supplemental_codeContext.prototype.supplemental_code_5 = function () {
        return this.tryGetRuleContext(0, Supplemental_code_5Context);
    };
    Supplemental_codeContext.prototype.supplemental_code_2 = function () {
        return this.tryGetRuleContext(0, Supplemental_code_2Context);
    };
    Object.defineProperty(Supplemental_codeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_supplemental_code; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Supplemental_codeContext.prototype.enterRule = function (listener) {
        if (listener.enterSupplemental_code) {
            listener.enterSupplemental_code(this);
        }
    };
    // @Override
    Supplemental_codeContext.prototype.exitRule = function (listener) {
        if (listener.exitSupplemental_code) {
            listener.exitSupplemental_code(this);
        }
    };
    // @Override
    Supplemental_codeContext.prototype.accept = function (visitor) {
        if (visitor.visitSupplemental_code) {
            return visitor.visitSupplemental_code(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Supplemental_codeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Supplemental_codeContext = Supplemental_codeContext;
var Supplemental_code_5Context = /** @class */ (function (_super) {
    __extends(Supplemental_code_5Context, _super);
    function Supplemental_code_5Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Supplemental_code_5Context.prototype.any_digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Any_digitContext);
        }
        else {
            return this.getRuleContext(i, Any_digitContext);
        }
    };
    Object.defineProperty(Supplemental_code_5Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_supplemental_code_5; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Supplemental_code_5Context.prototype.enterRule = function (listener) {
        if (listener.enterSupplemental_code_5) {
            listener.enterSupplemental_code_5(this);
        }
    };
    // @Override
    Supplemental_code_5Context.prototype.exitRule = function (listener) {
        if (listener.exitSupplemental_code_5) {
            listener.exitSupplemental_code_5(this);
        }
    };
    // @Override
    Supplemental_code_5Context.prototype.accept = function (visitor) {
        if (visitor.visitSupplemental_code_5) {
            return visitor.visitSupplemental_code_5(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Supplemental_code_5Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Supplemental_code_5Context = Supplemental_code_5Context;
var Supplemental_code_2Context = /** @class */ (function (_super) {
    __extends(Supplemental_code_2Context, _super);
    function Supplemental_code_2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Supplemental_code_2Context.prototype.any_digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Any_digitContext);
        }
        else {
            return this.getRuleContext(i, Any_digitContext);
        }
    };
    Object.defineProperty(Supplemental_code_2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_supplemental_code_2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Supplemental_code_2Context.prototype.enterRule = function (listener) {
        if (listener.enterSupplemental_code_2) {
            listener.enterSupplemental_code_2(this);
        }
    };
    // @Override
    Supplemental_code_2Context.prototype.exitRule = function (listener) {
        if (listener.exitSupplemental_code_2) {
            listener.exitSupplemental_code_2(this);
        }
    };
    // @Override
    Supplemental_code_2Context.prototype.accept = function (visitor) {
        if (visitor.visitSupplemental_code_2) {
            return visitor.visitSupplemental_code_2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Supplemental_code_2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Supplemental_code_2Context = Supplemental_code_2Context;
var Ean13Context = /** @class */ (function (_super) {
    __extends(Ean13Context, _super);
    function Ean13Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ean13Context.prototype.ean13_ismn = function () {
        return this.tryGetRuleContext(0, Ean13_ismnContext);
    };
    Ean13Context.prototype.ean13_issn = function () {
        return this.tryGetRuleContext(0, Ean13_issnContext);
    };
    Ean13Context.prototype.ean13_bookland = function () {
        return this.tryGetRuleContext(0, Ean13_booklandContext);
    };
    Ean13Context.prototype.ean13_generic = function () {
        return this.tryGetRuleContext(0, Ean13_genericContext);
    };
    Object.defineProperty(Ean13Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_ean13; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ean13Context.prototype.enterRule = function (listener) {
        if (listener.enterEan13) {
            listener.enterEan13(this);
        }
    };
    // @Override
    Ean13Context.prototype.exitRule = function (listener) {
        if (listener.exitEan13) {
            listener.exitEan13(this);
        }
    };
    // @Override
    Ean13Context.prototype.accept = function (visitor) {
        if (visitor.visitEan13) {
            return visitor.visitEan13(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ean13Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ean13Context = Ean13Context;
var Ean13_genericContext = /** @class */ (function (_super) {
    __extends(Ean13_genericContext, _super);
    function Ean13_genericContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ean13_genericContext.prototype.gs1_prefix = function () {
        return this.getRuleContext(0, Gs1_prefixContext);
    };
    Ean13_genericContext.prototype.ean_13_manprod = function () {
        return this.getRuleContext(0, Ean_13_manprodContext);
    };
    Ean13_genericContext.prototype.check_code = function () {
        return this.getRuleContext(0, Check_codeContext);
    };
    Object.defineProperty(Ean13_genericContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_ean13_generic; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ean13_genericContext.prototype.enterRule = function (listener) {
        if (listener.enterEan13_generic) {
            listener.enterEan13_generic(this);
        }
    };
    // @Override
    Ean13_genericContext.prototype.exitRule = function (listener) {
        if (listener.exitEan13_generic) {
            listener.exitEan13_generic(this);
        }
    };
    // @Override
    Ean13_genericContext.prototype.accept = function (visitor) {
        if (visitor.visitEan13_generic) {
            return visitor.visitEan13_generic(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ean13_genericContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ean13_genericContext = Ean13_genericContext;
var Ean13_ismnContext = /** @class */ (function (_super) {
    __extends(Ean13_ismnContext, _super);
    function Ean13_ismnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ean13_ismnContext.prototype.gs1_prefix_ismn = function () {
        return this.getRuleContext(0, Gs1_prefix_ismnContext);
    };
    Ean13_ismnContext.prototype.ismn_publisher_number = function () {
        return this.getRuleContext(0, Ismn_publisher_numberContext);
    };
    Ean13_ismnContext.prototype.ismn_item_number = function () {
        return this.getRuleContext(0, Ismn_item_numberContext);
    };
    Ean13_ismnContext.prototype.check_code = function () {
        return this.getRuleContext(0, Check_codeContext);
    };
    Object.defineProperty(Ean13_ismnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_ean13_ismn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ean13_ismnContext.prototype.enterRule = function (listener) {
        if (listener.enterEan13_ismn) {
            listener.enterEan13_ismn(this);
        }
    };
    // @Override
    Ean13_ismnContext.prototype.exitRule = function (listener) {
        if (listener.exitEan13_ismn) {
            listener.exitEan13_ismn(this);
        }
    };
    // @Override
    Ean13_ismnContext.prototype.accept = function (visitor) {
        if (visitor.visitEan13_ismn) {
            return visitor.visitEan13_ismn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ean13_ismnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ean13_ismnContext = Ean13_ismnContext;
var Gs1_prefix_ismnContext = /** @class */ (function (_super) {
    __extends(Gs1_prefix_ismnContext, _super);
    function Gs1_prefix_ismnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Gs1_prefix_ismnContext.prototype.DIGIT_9 = function (i) {
        if (i === undefined) {
            return this.getTokens(gtinParser.DIGIT_9);
        }
        else {
            return this.getToken(gtinParser.DIGIT_9, i);
        }
    };
    Gs1_prefix_ismnContext.prototype.DIGIT_7 = function () { return this.getToken(gtinParser.DIGIT_7, 0); };
    Gs1_prefix_ismnContext.prototype.DIGIT_0 = function () { return this.getToken(gtinParser.DIGIT_0, 0); };
    Object.defineProperty(Gs1_prefix_ismnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_gs1_prefix_ismn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Gs1_prefix_ismnContext.prototype.enterRule = function (listener) {
        if (listener.enterGs1_prefix_ismn) {
            listener.enterGs1_prefix_ismn(this);
        }
    };
    // @Override
    Gs1_prefix_ismnContext.prototype.exitRule = function (listener) {
        if (listener.exitGs1_prefix_ismn) {
            listener.exitGs1_prefix_ismn(this);
        }
    };
    // @Override
    Gs1_prefix_ismnContext.prototype.accept = function (visitor) {
        if (visitor.visitGs1_prefix_ismn) {
            return visitor.visitGs1_prefix_ismn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Gs1_prefix_ismnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Gs1_prefix_ismnContext = Gs1_prefix_ismnContext;
var Ismn_publisher_numberContext = /** @class */ (function (_super) {
    __extends(Ismn_publisher_numberContext, _super);
    function Ismn_publisher_numberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ismn_publisher_numberContext.prototype.any_digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Any_digitContext);
        }
        else {
            return this.getRuleContext(i, Any_digitContext);
        }
    };
    Object.defineProperty(Ismn_publisher_numberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_ismn_publisher_number; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ismn_publisher_numberContext.prototype.enterRule = function (listener) {
        if (listener.enterIsmn_publisher_number) {
            listener.enterIsmn_publisher_number(this);
        }
    };
    // @Override
    Ismn_publisher_numberContext.prototype.exitRule = function (listener) {
        if (listener.exitIsmn_publisher_number) {
            listener.exitIsmn_publisher_number(this);
        }
    };
    // @Override
    Ismn_publisher_numberContext.prototype.accept = function (visitor) {
        if (visitor.visitIsmn_publisher_number) {
            return visitor.visitIsmn_publisher_number(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ismn_publisher_numberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ismn_publisher_numberContext = Ismn_publisher_numberContext;
var Ismn_item_numberContext = /** @class */ (function (_super) {
    __extends(Ismn_item_numberContext, _super);
    function Ismn_item_numberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ismn_item_numberContext.prototype.any_digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Any_digitContext);
        }
        else {
            return this.getRuleContext(i, Any_digitContext);
        }
    };
    Object.defineProperty(Ismn_item_numberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_ismn_item_number; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ismn_item_numberContext.prototype.enterRule = function (listener) {
        if (listener.enterIsmn_item_number) {
            listener.enterIsmn_item_number(this);
        }
    };
    // @Override
    Ismn_item_numberContext.prototype.exitRule = function (listener) {
        if (listener.exitIsmn_item_number) {
            listener.exitIsmn_item_number(this);
        }
    };
    // @Override
    Ismn_item_numberContext.prototype.accept = function (visitor) {
        if (visitor.visitIsmn_item_number) {
            return visitor.visitIsmn_item_number(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ismn_item_numberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ismn_item_numberContext = Ismn_item_numberContext;
var Ean13_booklandContext = /** @class */ (function (_super) {
    __extends(Ean13_booklandContext, _super);
    function Ean13_booklandContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ean13_booklandContext.prototype.bookland_isbn = function () {
        return this.getRuleContext(0, Bookland_isbnContext);
    };
    Ean13_booklandContext.prototype.gs1_prefix_bookland_1 = function () {
        return this.tryGetRuleContext(0, Gs1_prefix_bookland_1Context);
    };
    Ean13_booklandContext.prototype.gs1_prefix_bookland_2 = function () {
        return this.tryGetRuleContext(0, Gs1_prefix_bookland_2Context);
    };
    Object.defineProperty(Ean13_booklandContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_ean13_bookland; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ean13_booklandContext.prototype.enterRule = function (listener) {
        if (listener.enterEan13_bookland) {
            listener.enterEan13_bookland(this);
        }
    };
    // @Override
    Ean13_booklandContext.prototype.exitRule = function (listener) {
        if (listener.exitEan13_bookland) {
            listener.exitEan13_bookland(this);
        }
    };
    // @Override
    Ean13_booklandContext.prototype.accept = function (visitor) {
        if (visitor.visitEan13_bookland) {
            return visitor.visitEan13_bookland(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ean13_booklandContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ean13_booklandContext = Ean13_booklandContext;
var Bookland_isbnContext = /** @class */ (function (_super) {
    __extends(Bookland_isbnContext, _super);
    function Bookland_isbnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Bookland_isbnContext.prototype.any_digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Any_digitContext);
        }
        else {
            return this.getRuleContext(i, Any_digitContext);
        }
    };
    Object.defineProperty(Bookland_isbnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_bookland_isbn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Bookland_isbnContext.prototype.enterRule = function (listener) {
        if (listener.enterBookland_isbn) {
            listener.enterBookland_isbn(this);
        }
    };
    // @Override
    Bookland_isbnContext.prototype.exitRule = function (listener) {
        if (listener.exitBookland_isbn) {
            listener.exitBookland_isbn(this);
        }
    };
    // @Override
    Bookland_isbnContext.prototype.accept = function (visitor) {
        if (visitor.visitBookland_isbn) {
            return visitor.visitBookland_isbn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Bookland_isbnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Bookland_isbnContext = Bookland_isbnContext;
var Gs1_prefix_bookland_1Context = /** @class */ (function (_super) {
    __extends(Gs1_prefix_bookland_1Context, _super);
    function Gs1_prefix_bookland_1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Gs1_prefix_bookland_1Context.prototype.DIGIT_9 = function (i) {
        if (i === undefined) {
            return this.getTokens(gtinParser.DIGIT_9);
        }
        else {
            return this.getToken(gtinParser.DIGIT_9, i);
        }
    };
    Gs1_prefix_bookland_1Context.prototype.DIGIT_7 = function (i) {
        if (i === undefined) {
            return this.getTokens(gtinParser.DIGIT_7);
        }
        else {
            return this.getToken(gtinParser.DIGIT_7, i);
        }
    };
    Gs1_prefix_bookland_1Context.prototype.DIGIT_1 = function () { return this.tryGetToken(gtinParser.DIGIT_1, 0); };
    Gs1_prefix_bookland_1Context.prototype.DIGIT_2 = function () { return this.tryGetToken(gtinParser.DIGIT_2, 0); };
    Gs1_prefix_bookland_1Context.prototype.DIGIT_3 = function () { return this.tryGetToken(gtinParser.DIGIT_3, 0); };
    Gs1_prefix_bookland_1Context.prototype.DIGIT_4 = function () { return this.tryGetToken(gtinParser.DIGIT_4, 0); };
    Gs1_prefix_bookland_1Context.prototype.DIGIT_5 = function () { return this.tryGetToken(gtinParser.DIGIT_5, 0); };
    Gs1_prefix_bookland_1Context.prototype.DIGIT_6 = function () { return this.tryGetToken(gtinParser.DIGIT_6, 0); };
    Gs1_prefix_bookland_1Context.prototype.DIGIT_8 = function () { return this.tryGetToken(gtinParser.DIGIT_8, 0); };
    Object.defineProperty(Gs1_prefix_bookland_1Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_gs1_prefix_bookland_1; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Gs1_prefix_bookland_1Context.prototype.enterRule = function (listener) {
        if (listener.enterGs1_prefix_bookland_1) {
            listener.enterGs1_prefix_bookland_1(this);
        }
    };
    // @Override
    Gs1_prefix_bookland_1Context.prototype.exitRule = function (listener) {
        if (listener.exitGs1_prefix_bookland_1) {
            listener.exitGs1_prefix_bookland_1(this);
        }
    };
    // @Override
    Gs1_prefix_bookland_1Context.prototype.accept = function (visitor) {
        if (visitor.visitGs1_prefix_bookland_1) {
            return visitor.visitGs1_prefix_bookland_1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Gs1_prefix_bookland_1Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Gs1_prefix_bookland_1Context = Gs1_prefix_bookland_1Context;
var Gs1_prefix_bookland_2Context = /** @class */ (function (_super) {
    __extends(Gs1_prefix_bookland_2Context, _super);
    function Gs1_prefix_bookland_2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Gs1_prefix_bookland_2Context.prototype.DIGIT_9 = function () { return this.getToken(gtinParser.DIGIT_9, 0); };
    Gs1_prefix_bookland_2Context.prototype.DIGIT_7 = function () { return this.getToken(gtinParser.DIGIT_7, 0); };
    Gs1_prefix_bookland_2Context.prototype.DIGIT_8 = function () { return this.getToken(gtinParser.DIGIT_8, 0); };
    Gs1_prefix_bookland_2Context.prototype.any_digit = function () {
        return this.getRuleContext(0, Any_digitContext);
    };
    Object.defineProperty(Gs1_prefix_bookland_2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_gs1_prefix_bookland_2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Gs1_prefix_bookland_2Context.prototype.enterRule = function (listener) {
        if (listener.enterGs1_prefix_bookland_2) {
            listener.enterGs1_prefix_bookland_2(this);
        }
    };
    // @Override
    Gs1_prefix_bookland_2Context.prototype.exitRule = function (listener) {
        if (listener.exitGs1_prefix_bookland_2) {
            listener.exitGs1_prefix_bookland_2(this);
        }
    };
    // @Override
    Gs1_prefix_bookland_2Context.prototype.accept = function (visitor) {
        if (visitor.visitGs1_prefix_bookland_2) {
            return visitor.visitGs1_prefix_bookland_2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Gs1_prefix_bookland_2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Gs1_prefix_bookland_2Context = Gs1_prefix_bookland_2Context;
var Gs1_prefix_issnContext = /** @class */ (function (_super) {
    __extends(Gs1_prefix_issnContext, _super);
    function Gs1_prefix_issnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Gs1_prefix_issnContext.prototype.DIGIT_9 = function () { return this.getToken(gtinParser.DIGIT_9, 0); };
    Gs1_prefix_issnContext.prototype.DIGIT_7 = function (i) {
        if (i === undefined) {
            return this.getTokens(gtinParser.DIGIT_7);
        }
        else {
            return this.getToken(gtinParser.DIGIT_7, i);
        }
    };
    Object.defineProperty(Gs1_prefix_issnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_gs1_prefix_issn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Gs1_prefix_issnContext.prototype.enterRule = function (listener) {
        if (listener.enterGs1_prefix_issn) {
            listener.enterGs1_prefix_issn(this);
        }
    };
    // @Override
    Gs1_prefix_issnContext.prototype.exitRule = function (listener) {
        if (listener.exitGs1_prefix_issn) {
            listener.exitGs1_prefix_issn(this);
        }
    };
    // @Override
    Gs1_prefix_issnContext.prototype.accept = function (visitor) {
        if (visitor.visitGs1_prefix_issn) {
            return visitor.visitGs1_prefix_issn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Gs1_prefix_issnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Gs1_prefix_issnContext = Gs1_prefix_issnContext;
var Ean13_issnContext = /** @class */ (function (_super) {
    __extends(Ean13_issnContext, _super);
    function Ean13_issnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ean13_issnContext.prototype.gs1_prefix_issn = function () {
        return this.getRuleContext(0, Gs1_prefix_issnContext);
    };
    Ean13_issnContext.prototype.issn = function () {
        return this.getRuleContext(0, IssnContext);
    };
    Ean13_issnContext.prototype.check_code = function () {
        return this.getRuleContext(0, Check_codeContext);
    };
    Object.defineProperty(Ean13_issnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_ean13_issn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ean13_issnContext.prototype.enterRule = function (listener) {
        if (listener.enterEan13_issn) {
            listener.enterEan13_issn(this);
        }
    };
    // @Override
    Ean13_issnContext.prototype.exitRule = function (listener) {
        if (listener.exitEan13_issn) {
            listener.exitEan13_issn(this);
        }
    };
    // @Override
    Ean13_issnContext.prototype.accept = function (visitor) {
        if (visitor.visitEan13_issn) {
            return visitor.visitEan13_issn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ean13_issnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ean13_issnContext = Ean13_issnContext;
var IssnContext = /** @class */ (function (_super) {
    __extends(IssnContext, _super);
    function IssnContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IssnContext.prototype.any_digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Any_digitContext);
        }
        else {
            return this.getRuleContext(i, Any_digitContext);
        }
    };
    Object.defineProperty(IssnContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_issn; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IssnContext.prototype.enterRule = function (listener) {
        if (listener.enterIssn) {
            listener.enterIssn(this);
        }
    };
    // @Override
    IssnContext.prototype.exitRule = function (listener) {
        if (listener.exitIssn) {
            listener.exitIssn(this);
        }
    };
    // @Override
    IssnContext.prototype.accept = function (visitor) {
        if (visitor.visitIssn) {
            return visitor.visitIssn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IssnContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IssnContext = IssnContext;
var Ean_13_manprodContext = /** @class */ (function (_super) {
    __extends(Ean_13_manprodContext, _super);
    function Ean_13_manprodContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ean_13_manprodContext.prototype.any_digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Any_digitContext);
        }
        else {
            return this.getRuleContext(i, Any_digitContext);
        }
    };
    Object.defineProperty(Ean_13_manprodContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_ean_13_manprod; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ean_13_manprodContext.prototype.enterRule = function (listener) {
        if (listener.enterEan_13_manprod) {
            listener.enterEan_13_manprod(this);
        }
    };
    // @Override
    Ean_13_manprodContext.prototype.exitRule = function (listener) {
        if (listener.exitEan_13_manprod) {
            listener.exitEan_13_manprod(this);
        }
    };
    // @Override
    Ean_13_manprodContext.prototype.accept = function (visitor) {
        if (visitor.visitEan_13_manprod) {
            return visitor.visitEan_13_manprod(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ean_13_manprodContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ean_13_manprodContext = Ean_13_manprodContext;
var Gs1_prefixContext = /** @class */ (function (_super) {
    __extends(Gs1_prefixContext, _super);
    function Gs1_prefixContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Gs1_prefixContext.prototype.any_digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Any_digitContext);
        }
        else {
            return this.getRuleContext(i, Any_digitContext);
        }
    };
    Object.defineProperty(Gs1_prefixContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_gs1_prefix; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Gs1_prefixContext.prototype.enterRule = function (listener) {
        if (listener.enterGs1_prefix) {
            listener.enterGs1_prefix(this);
        }
    };
    // @Override
    Gs1_prefixContext.prototype.exitRule = function (listener) {
        if (listener.exitGs1_prefix) {
            listener.exitGs1_prefix(this);
        }
    };
    // @Override
    Gs1_prefixContext.prototype.accept = function (visitor) {
        if (visitor.visitGs1_prefix) {
            return visitor.visitGs1_prefix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Gs1_prefixContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Gs1_prefixContext = Gs1_prefixContext;
var Ean14Context = /** @class */ (function (_super) {
    __extends(Ean14Context, _super);
    function Ean14Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ean14Context.prototype.ean14_packaging = function () {
        return this.getRuleContext(0, Ean14_packagingContext);
    };
    Ean14Context.prototype.ean14_product = function () {
        return this.getRuleContext(0, Ean14_productContext);
    };
    Ean14Context.prototype.check_code = function () {
        return this.getRuleContext(0, Check_codeContext);
    };
    Object.defineProperty(Ean14Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_ean14; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ean14Context.prototype.enterRule = function (listener) {
        if (listener.enterEan14) {
            listener.enterEan14(this);
        }
    };
    // @Override
    Ean14Context.prototype.exitRule = function (listener) {
        if (listener.exitEan14) {
            listener.exitEan14(this);
        }
    };
    // @Override
    Ean14Context.prototype.accept = function (visitor) {
        if (visitor.visitEan14) {
            return visitor.visitEan14(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ean14Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ean14Context = Ean14Context;
var Ean14_appidContext = /** @class */ (function (_super) {
    __extends(Ean14_appidContext, _super);
    function Ean14_appidContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ean14_appidContext.prototype.any_digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Any_digitContext);
        }
        else {
            return this.getRuleContext(i, Any_digitContext);
        }
    };
    Object.defineProperty(Ean14_appidContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_ean14_appid; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ean14_appidContext.prototype.enterRule = function (listener) {
        if (listener.enterEan14_appid) {
            listener.enterEan14_appid(this);
        }
    };
    // @Override
    Ean14_appidContext.prototype.exitRule = function (listener) {
        if (listener.exitEan14_appid) {
            listener.exitEan14_appid(this);
        }
    };
    // @Override
    Ean14_appidContext.prototype.accept = function (visitor) {
        if (visitor.visitEan14_appid) {
            return visitor.visitEan14_appid(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ean14_appidContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ean14_appidContext = Ean14_appidContext;
var Ean14_packagingContext = /** @class */ (function (_super) {
    __extends(Ean14_packagingContext, _super);
    function Ean14_packagingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ean14_packagingContext.prototype.DIGIT_0 = function () { return this.tryGetToken(gtinParser.DIGIT_0, 0); };
    Ean14_packagingContext.prototype.DIGIT_1 = function () { return this.tryGetToken(gtinParser.DIGIT_1, 0); };
    Ean14_packagingContext.prototype.DIGIT_2 = function () { return this.tryGetToken(gtinParser.DIGIT_2, 0); };
    Ean14_packagingContext.prototype.DIGIT_3 = function () { return this.tryGetToken(gtinParser.DIGIT_3, 0); };
    Ean14_packagingContext.prototype.DIGIT_4 = function () { return this.tryGetToken(gtinParser.DIGIT_4, 0); };
    Ean14_packagingContext.prototype.DIGIT_5 = function () { return this.tryGetToken(gtinParser.DIGIT_5, 0); };
    Ean14_packagingContext.prototype.DIGIT_6 = function () { return this.tryGetToken(gtinParser.DIGIT_6, 0); };
    Ean14_packagingContext.prototype.DIGIT_7 = function () { return this.tryGetToken(gtinParser.DIGIT_7, 0); };
    Ean14_packagingContext.prototype.DIGIT_8 = function () { return this.tryGetToken(gtinParser.DIGIT_8, 0); };
    Object.defineProperty(Ean14_packagingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_ean14_packaging; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ean14_packagingContext.prototype.enterRule = function (listener) {
        if (listener.enterEan14_packaging) {
            listener.enterEan14_packaging(this);
        }
    };
    // @Override
    Ean14_packagingContext.prototype.exitRule = function (listener) {
        if (listener.exitEan14_packaging) {
            listener.exitEan14_packaging(this);
        }
    };
    // @Override
    Ean14_packagingContext.prototype.accept = function (visitor) {
        if (visitor.visitEan14_packaging) {
            return visitor.visitEan14_packaging(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ean14_packagingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ean14_packagingContext = Ean14_packagingContext;
var Ean14_productContext = /** @class */ (function (_super) {
    __extends(Ean14_productContext, _super);
    function Ean14_productContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Ean14_productContext.prototype.any_digit = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Any_digitContext);
        }
        else {
            return this.getRuleContext(i, Any_digitContext);
        }
    };
    Object.defineProperty(Ean14_productContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_ean14_product; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Ean14_productContext.prototype.enterRule = function (listener) {
        if (listener.enterEan14_product) {
            listener.enterEan14_product(this);
        }
    };
    // @Override
    Ean14_productContext.prototype.exitRule = function (listener) {
        if (listener.exitEan14_product) {
            listener.exitEan14_product(this);
        }
    };
    // @Override
    Ean14_productContext.prototype.accept = function (visitor) {
        if (visitor.visitEan14_product) {
            return visitor.visitEan14_product(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Ean14_productContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Ean14_productContext = Ean14_productContext;
var Any_digitContext = /** @class */ (function (_super) {
    __extends(Any_digitContext, _super);
    function Any_digitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Any_digitContext.prototype.DIGIT_0 = function () { return this.tryGetToken(gtinParser.DIGIT_0, 0); };
    Any_digitContext.prototype.DIGIT_1 = function () { return this.tryGetToken(gtinParser.DIGIT_1, 0); };
    Any_digitContext.prototype.DIGIT_2 = function () { return this.tryGetToken(gtinParser.DIGIT_2, 0); };
    Any_digitContext.prototype.DIGIT_3 = function () { return this.tryGetToken(gtinParser.DIGIT_3, 0); };
    Any_digitContext.prototype.DIGIT_4 = function () { return this.tryGetToken(gtinParser.DIGIT_4, 0); };
    Any_digitContext.prototype.DIGIT_5 = function () { return this.tryGetToken(gtinParser.DIGIT_5, 0); };
    Any_digitContext.prototype.DIGIT_6 = function () { return this.tryGetToken(gtinParser.DIGIT_6, 0); };
    Any_digitContext.prototype.DIGIT_7 = function () { return this.tryGetToken(gtinParser.DIGIT_7, 0); };
    Any_digitContext.prototype.DIGIT_8 = function () { return this.tryGetToken(gtinParser.DIGIT_8, 0); };
    Any_digitContext.prototype.DIGIT_9 = function () { return this.tryGetToken(gtinParser.DIGIT_9, 0); };
    Object.defineProperty(Any_digitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return gtinParser.RULE_any_digit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Any_digitContext.prototype.enterRule = function (listener) {
        if (listener.enterAny_digit) {
            listener.enterAny_digit(this);
        }
    };
    // @Override
    Any_digitContext.prototype.exitRule = function (listener) {
        if (listener.exitAny_digit) {
            listener.exitAny_digit(this);
        }
    };
    // @Override
    Any_digitContext.prototype.accept = function (visitor) {
        if (visitor.visitAny_digit) {
            return visitor.visitAny_digit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Any_digitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Any_digitContext = Any_digitContext;
