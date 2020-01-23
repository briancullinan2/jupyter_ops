"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/mdx/mdx.g4 by ANTLR 4.7.3-SNAPSHOT
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
var mdxParser = /** @class */ (function (_super) {
    __extends(mdxParser, _super);
    function mdxParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(mdxParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(mdxParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return mdxParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(mdxParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "mdx.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(mdxParser.prototype, "ruleNames", {
        // @Override
        get: function () { return mdxParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(mdxParser.prototype, "serializedATN", {
        // @Override
        get: function () { return mdxParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    mdxParser.prototype.mdx_statement = function () {
        var _localctx = new Mdx_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, mdxParser.RULE_mdx_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 96;
                    this.select_statement();
                }
                this.state = 97;
                this.match(mdxParser.EOF);
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
    mdxParser.prototype.select_statement = function () {
        var _localctx = new Select_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, mdxParser.RULE_select_statement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 101;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mdxParser.WITH) {
                    {
                        this.state = 99;
                        this.match(mdxParser.WITH);
                        this.state = 100;
                        this.formula_specification();
                    }
                }
                this.state = 103;
                this.match(mdxParser.SELECT);
                this.state = 105;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mdxParser.LBRACE) | (1 << mdxParser.LPAREN) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS) | (1 << mdxParser.CASE) | (1 << mdxParser.DIMENSION))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (mdxParser.NON - 35)) | (1 << (mdxParser.NOT - 35)) | (1 << (mdxParser.PROPERTIES - 35)) | (1 << (mdxParser.NUMBER - 35)) | (1 << (mdxParser.ID - 35)) | (1 << (mdxParser.QUOTED_ID - 35)) | (1 << (mdxParser.STRING - 35)))) !== 0)) {
                    {
                        this.state = 104;
                        this.axis_specification_list();
                    }
                }
                this.state = 107;
                this.match(mdxParser.FROM);
                this.state = 108;
                this.cube_specification();
                this.state = 111;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mdxParser.WHERE) {
                    {
                        this.state = 109;
                        this.match(mdxParser.WHERE);
                        this.state = 110;
                        this.slicer_specification();
                    }
                }
                this.state = 114;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mdxParser.CELL || _la === mdxParser.PROPERTIES) {
                    {
                        this.state = 113;
                        this.cell_props();
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
    mdxParser.prototype.formula_specification = function () {
        var _localctx = new Formula_specificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, mdxParser.RULE_formula_specification);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 117;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 116;
                            this.single_formula_specification();
                        }
                    }
                    this.state = 119;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === mdxParser.MEMBER || _la === mdxParser.SET);
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
    mdxParser.prototype.single_formula_specification = function () {
        var _localctx = new Single_formula_specificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, mdxParser.RULE_single_formula_specification);
        try {
            this.state = 123;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case mdxParser.MEMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 121;
                        this.member_specification();
                    }
                    break;
                case mdxParser.SET:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 122;
                        this.set_specification();
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
    mdxParser.prototype.set_specification = function () {
        var _localctx = new Set_specificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, mdxParser.RULE_set_specification);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 125;
                this.match(mdxParser.SET);
                this.state = 126;
                this.set_name();
                this.state = 127;
                this.match(mdxParser.AS);
                this.state = 133;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case mdxParser.QUOTE:
                        {
                            this.state = 128;
                            this.match(mdxParser.QUOTE);
                            this.state = 129;
                            this.expression();
                            this.state = 130;
                            this.match(mdxParser.QUOTE);
                        }
                        break;
                    case mdxParser.LBRACE:
                    case mdxParser.LPAREN:
                    case mdxParser.MINUS:
                    case mdxParser.PLUS:
                    case mdxParser.CASE:
                    case mdxParser.DIMENSION:
                    case mdxParser.NOT:
                    case mdxParser.PROPERTIES:
                    case mdxParser.NUMBER:
                    case mdxParser.ID:
                    case mdxParser.QUOTED_ID:
                    case mdxParser.STRING:
                        {
                            this.state = 132;
                            this.expression();
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
    // @RuleVersion(0)
    mdxParser.prototype.member_specification = function () {
        var _localctx = new Member_specificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, mdxParser.RULE_member_specification);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 135;
                this.match(mdxParser.MEMBER);
                this.state = 136;
                this.member_name();
                this.state = 137;
                this.match(mdxParser.AS);
                {
                    this.state = 143;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case mdxParser.QUOTE:
                            {
                                this.state = 138;
                                this.match(mdxParser.QUOTE);
                                this.state = 139;
                                this.value_expression();
                                this.state = 140;
                                this.match(mdxParser.QUOTE);
                            }
                            break;
                        case mdxParser.LBRACE:
                        case mdxParser.LPAREN:
                        case mdxParser.MINUS:
                        case mdxParser.PLUS:
                        case mdxParser.CASE:
                        case mdxParser.DIMENSION:
                        case mdxParser.NOT:
                        case mdxParser.PROPERTIES:
                        case mdxParser.NUMBER:
                        case mdxParser.ID:
                        case mdxParser.QUOTED_ID:
                        case mdxParser.STRING:
                            {
                                this.state = 142;
                                this.value_expression();
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 145;
                    this.match(mdxParser.COMMA);
                    this.state = 147;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (mdxParser.DIMENSION - 27)) | (1 << (mdxParser.PROPERTIES - 27)) | (1 << (mdxParser.ID - 27)) | (1 << (mdxParser.QUOTED_ID - 27)))) !== 0)) {
                        {
                            this.state = 146;
                            this.member_property_def_list();
                        }
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
    mdxParser.prototype.axis_specification_list = function () {
        var _localctx = new Axis_specification_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, mdxParser.RULE_axis_specification_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 149;
                this.axis_specification();
                this.state = 154;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === mdxParser.COMMA) {
                    {
                        {
                            this.state = 150;
                            this.match(mdxParser.COMMA);
                            this.state = 151;
                            this.axis_specification();
                        }
                    }
                    this.state = 156;
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
    mdxParser.prototype.member_property_def_list = function () {
        var _localctx = new Member_property_def_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, mdxParser.RULE_member_property_def_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 157;
                this.member_property_definition();
                this.state = 162;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === mdxParser.COMMA) {
                    {
                        {
                            this.state = 158;
                            this.match(mdxParser.COMMA);
                            this.state = 159;
                            this.member_property_definition();
                        }
                    }
                    this.state = 164;
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
    mdxParser.prototype.member_name = function () {
        var _localctx = new Member_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, mdxParser.RULE_member_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 165;
                this.compound_id();
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
    mdxParser.prototype.member_property_definition = function () {
        var _localctx = new Member_property_definitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, mdxParser.RULE_member_property_definition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 167;
                this.identifier();
                this.state = 168;
                this.match(mdxParser.EQ);
                this.state = 169;
                this.value_expression();
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
    mdxParser.prototype.set_name = function () {
        var _localctx = new Set_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, mdxParser.RULE_set_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 171;
                this.compound_id();
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
    mdxParser.prototype.compound_id = function () {
        var _localctx = new Compound_idContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, mdxParser.RULE_compound_id);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 173;
                this.identifier();
                this.state = 178;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === mdxParser.DOT) {
                    {
                        {
                            this.state = 174;
                            this.match(mdxParser.DOT);
                            this.state = 175;
                            this.identifier();
                        }
                    }
                    this.state = 180;
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
    mdxParser.prototype.axis_specification = function () {
        var _localctx = new Axis_specificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, mdxParser.RULE_axis_specification);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 183;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mdxParser.NON) {
                    {
                        this.state = 181;
                        this.match(mdxParser.NON);
                        this.state = 182;
                        this.match(mdxParser.EMPTY);
                    }
                }
                this.state = 185;
                this.expression();
                this.state = 187;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mdxParser.DIMENSION || _la === mdxParser.PROPERTIES) {
                    {
                        this.state = 186;
                        this.dim_props();
                    }
                }
                this.state = 189;
                this.match(mdxParser.ON);
                this.state = 190;
                this.axis_name();
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
    mdxParser.prototype.axis_name = function () {
        var _localctx = new Axis_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, mdxParser.RULE_axis_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 192;
                this.identifier();
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
    mdxParser.prototype.dim_props = function () {
        var _localctx = new Dim_propsContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, mdxParser.RULE_dim_props);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 195;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mdxParser.DIMENSION) {
                    {
                        this.state = 194;
                        this.match(mdxParser.DIMENSION);
                    }
                }
                this.state = 197;
                this.match(mdxParser.PROPERTIES);
                this.state = 198;
                this.property_list();
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
    mdxParser.prototype.property_list = function () {
        var _localctx = new Property_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, mdxParser.RULE_property_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 200;
                this.property();
                this.state = 205;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === mdxParser.COMMA) {
                    {
                        {
                            this.state = 201;
                            this.match(mdxParser.COMMA);
                            this.state = 202;
                            this.property();
                        }
                    }
                    this.state = 207;
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
    mdxParser.prototype.property = function () {
        var _localctx = new PropertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, mdxParser.RULE_property);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 208;
                this.compound_id();
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
    mdxParser.prototype.cube_specification = function () {
        var _localctx = new Cube_specificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, mdxParser.RULE_cube_specification);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 210;
                this.cube_name();
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
    mdxParser.prototype.cube_name = function () {
        var _localctx = new Cube_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, mdxParser.RULE_cube_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 212;
                this.compound_id();
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
    mdxParser.prototype.slicer_specification = function () {
        var _localctx = new Slicer_specificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, mdxParser.RULE_slicer_specification);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 214;
                this.expression();
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
    mdxParser.prototype.cell_props = function () {
        var _localctx = new Cell_propsContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, mdxParser.RULE_cell_props);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 217;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mdxParser.CELL) {
                    {
                        this.state = 216;
                        this.match(mdxParser.CELL);
                    }
                }
                this.state = 219;
                this.match(mdxParser.PROPERTIES);
                this.state = 220;
                this.cell_property_list();
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
    mdxParser.prototype.cell_property_list = function () {
        var _localctx = new Cell_property_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, mdxParser.RULE_cell_property_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 222;
                this.cell_property();
                this.state = 223;
                this.match(mdxParser.COMMA);
                this.state = 227;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (mdxParser.CELL_ORDINAL - 25)) | (1 << (mdxParser.DIMENSION - 25)) | (1 << (mdxParser.FORMATTED_VALUE - 25)) | (1 << (mdxParser.PROPERTIES - 25)) | (1 << (mdxParser.VALUE - 25)) | (1 << (mdxParser.ID - 25)) | (1 << (mdxParser.QUOTED_ID - 25)))) !== 0)) {
                    {
                        {
                            this.state = 224;
                            this.cell_property();
                        }
                    }
                    this.state = 229;
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
    mdxParser.prototype.cell_property = function () {
        var _localctx = new Cell_propertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, mdxParser.RULE_cell_property);
        try {
            this.state = 232;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case mdxParser.CELL_ORDINAL:
                case mdxParser.FORMATTED_VALUE:
                case mdxParser.VALUE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 230;
                        this.mandatory_cell_property();
                    }
                    break;
                case mdxParser.DIMENSION:
                case mdxParser.PROPERTIES:
                case mdxParser.ID:
                case mdxParser.QUOTED_ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 231;
                        this.provider_specific_cell_property();
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
    mdxParser.prototype.mandatory_cell_property = function () {
        var _localctx = new Mandatory_cell_propertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, mdxParser.RULE_mandatory_cell_property);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 234;
                _la = this._input.LA(1);
                if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (mdxParser.CELL_ORDINAL - 25)) | (1 << (mdxParser.FORMATTED_VALUE - 25)) | (1 << (mdxParser.VALUE - 25)))) !== 0))) {
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
    mdxParser.prototype.provider_specific_cell_property = function () {
        var _localctx = new Provider_specific_cell_propertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, mdxParser.RULE_provider_specific_cell_property);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 236;
                this.identifier();
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
    mdxParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, mdxParser.RULE_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                this.value_expression();
                this.state = 243;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === mdxParser.COLON) {
                    {
                        {
                            this.state = 239;
                            this.match(mdxParser.COLON);
                            this.state = 240;
                            this.value_expression();
                        }
                    }
                    this.state = 245;
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
    mdxParser.prototype.value_expression = function () {
        var _localctx = new Value_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, mdxParser.RULE_value_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 246;
                this.term5();
                this.state = 251;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === mdxParser.OR || _la === mdxParser.XOR) {
                    {
                        this.state = 249;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case mdxParser.XOR:
                                {
                                    this.state = 247;
                                    this.value_xor_expression();
                                }
                                break;
                            case mdxParser.OR:
                                {
                                    this.state = 248;
                                    this.value_or_expression();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 253;
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
    mdxParser.prototype.value_xor_expression = function () {
        var _localctx = new Value_xor_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, mdxParser.RULE_value_xor_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 254;
                this.match(mdxParser.XOR);
                this.state = 255;
                this.term5();
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
    mdxParser.prototype.value_or_expression = function () {
        var _localctx = new Value_or_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, mdxParser.RULE_value_or_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 257;
                this.match(mdxParser.OR);
                this.state = 258;
                this.term5();
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
    mdxParser.prototype.term5 = function () {
        var _localctx = new Term5Context(this._ctx, this.state);
        this.enterRule(_localctx, 58, mdxParser.RULE_term5);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 260;
                this.term4();
                this.state = 265;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === mdxParser.AND) {
                    {
                        {
                            this.state = 261;
                            this.match(mdxParser.AND);
                            this.state = 262;
                            this.term4();
                        }
                    }
                    this.state = 267;
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
    mdxParser.prototype.term4 = function () {
        var _localctx = new Term4Context(this._ctx, this.state);
        this.enterRule(_localctx, 60, mdxParser.RULE_term4);
        try {
            this.state = 271;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case mdxParser.NOT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 268;
                        this.match(mdxParser.NOT);
                        this.state = 269;
                        this.term4();
                    }
                    break;
                case mdxParser.LBRACE:
                case mdxParser.LPAREN:
                case mdxParser.MINUS:
                case mdxParser.PLUS:
                case mdxParser.CASE:
                case mdxParser.DIMENSION:
                case mdxParser.PROPERTIES:
                case mdxParser.NUMBER:
                case mdxParser.ID:
                case mdxParser.QUOTED_ID:
                case mdxParser.STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 270;
                        this.term3();
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
    mdxParser.prototype.term3 = function () {
        var _localctx = new Term3Context(this._ctx, this.state);
        this.enterRule(_localctx, 62, mdxParser.RULE_term3);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 273;
                this.term2();
                this.state = 279;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mdxParser.EQ) | (1 << mdxParser.GE) | (1 << mdxParser.GT) | (1 << mdxParser.LE) | (1 << mdxParser.LT) | (1 << mdxParser.NE))) !== 0)) {
                    {
                        {
                            this.state = 274;
                            this.comp_op();
                            this.state = 275;
                            this.term2();
                        }
                    }
                    this.state = 281;
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
    mdxParser.prototype.term2 = function () {
        var _localctx = new Term2Context(this._ctx, this.state);
        this.enterRule(_localctx, 64, mdxParser.RULE_term2);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 282;
                this.term();
                this.state = 287;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mdxParser.CONCAT) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS))) !== 0)) {
                    {
                        {
                            this.state = 283;
                            _la = this._input.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mdxParser.CONCAT) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS))) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 284;
                            this.term();
                        }
                    }
                    this.state = 289;
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
    mdxParser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, mdxParser.RULE_term);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 290;
                this.factor();
                this.state = 295;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === mdxParser.ASTERISK || _la === mdxParser.SOLIDUS) {
                    {
                        {
                            this.state = 291;
                            _la = this._input.LA(1);
                            if (!(_la === mdxParser.ASTERISK || _la === mdxParser.SOLIDUS)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 292;
                            this.factor();
                        }
                    }
                    this.state = 297;
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
    mdxParser.prototype.factor = function () {
        var _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, mdxParser.RULE_factor);
        try {
            this.state = 303;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case mdxParser.MINUS:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 298;
                        this.match(mdxParser.MINUS);
                        this.state = 299;
                        this.value_expression_primary();
                    }
                    break;
                case mdxParser.PLUS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 300;
                        this.match(mdxParser.PLUS);
                        this.state = 301;
                        this.value_expression_primary();
                    }
                    break;
                case mdxParser.LBRACE:
                case mdxParser.LPAREN:
                case mdxParser.CASE:
                case mdxParser.DIMENSION:
                case mdxParser.PROPERTIES:
                case mdxParser.NUMBER:
                case mdxParser.ID:
                case mdxParser.QUOTED_ID:
                case mdxParser.STRING:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 302;
                        this.value_expression_primary();
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
    mdxParser.prototype.function = function () {
        var _localctx = new FunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, mdxParser.RULE_function);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 305;
                this.identifier();
                this.state = 306;
                this.match(mdxParser.LPAREN);
                this.state = 308;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mdxParser.LBRACE) | (1 << mdxParser.LPAREN) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS) | (1 << mdxParser.CASE) | (1 << mdxParser.DIMENSION))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (mdxParser.NOT - 36)) | (1 << (mdxParser.PROPERTIES - 36)) | (1 << (mdxParser.NUMBER - 36)) | (1 << (mdxParser.ID - 36)) | (1 << (mdxParser.QUOTED_ID - 36)) | (1 << (mdxParser.STRING - 36)))) !== 0)) {
                    {
                        this.state = 307;
                        this.exp_list();
                    }
                }
                this.state = 310;
                this.match(mdxParser.RPAREN);
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
    mdxParser.prototype.value_expression_primary = function () {
        var _localctx = new Value_expression_primaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, mdxParser.RULE_value_expression_primary);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 312;
                this.value_expression_primary0();
                this.state = 322;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === mdxParser.DOT) {
                    {
                        {
                            this.state = 313;
                            this.match(mdxParser.DOT);
                            this.state = 318;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 314;
                                        this.unquoted_identifier();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 315;
                                        this.quoted_identifier();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 316;
                                        this.amp_quoted_identifier();
                                    }
                                    break;
                                case 4:
                                    {
                                        this.state = 317;
                                        this.function();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 324;
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
    mdxParser.prototype.value_expression_primary0 = function () {
        var _localctx = new Value_expression_primary0Context(this._ctx, this.state);
        this.enterRule(_localctx, 74, mdxParser.RULE_value_expression_primary0);
        var _la;
        try {
            this.state = 339;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 325;
                        this.function();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        {
                            this.state = 326;
                            this.match(mdxParser.LPAREN);
                            this.state = 327;
                            this.exp_list();
                            this.state = 328;
                            this.match(mdxParser.RPAREN);
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        {
                            this.state = 330;
                            this.match(mdxParser.LBRACE);
                            this.state = 332;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mdxParser.LBRACE) | (1 << mdxParser.LPAREN) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS) | (1 << mdxParser.CASE) | (1 << mdxParser.DIMENSION))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (mdxParser.NOT - 36)) | (1 << (mdxParser.PROPERTIES - 36)) | (1 << (mdxParser.NUMBER - 36)) | (1 << (mdxParser.ID - 36)) | (1 << (mdxParser.QUOTED_ID - 36)) | (1 << (mdxParser.STRING - 36)))) !== 0)) {
                                {
                                    this.state = 331;
                                    this.exp_list();
                                }
                            }
                            this.state = 334;
                            this.match(mdxParser.RBRACE);
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 335;
                        this.case_expression();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 336;
                        this.match(mdxParser.STRING);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 337;
                        this.match(mdxParser.NUMBER);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 338;
                        this.identifier();
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
    mdxParser.prototype.exp_list = function () {
        var _localctx = new Exp_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, mdxParser.RULE_exp_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 341;
                this.expression();
                this.state = 346;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === mdxParser.COMMA) {
                    {
                        {
                            this.state = 342;
                            this.match(mdxParser.COMMA);
                            this.state = 343;
                            this.expression();
                        }
                    }
                    this.state = 348;
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
    mdxParser.prototype.case_expression = function () {
        var _localctx = new Case_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, mdxParser.RULE_case_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 349;
                this.match(mdxParser.CASE);
                this.state = 351;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mdxParser.LBRACE) | (1 << mdxParser.LPAREN) | (1 << mdxParser.MINUS) | (1 << mdxParser.PLUS) | (1 << mdxParser.CASE) | (1 << mdxParser.DIMENSION))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (mdxParser.NOT - 36)) | (1 << (mdxParser.PROPERTIES - 36)) | (1 << (mdxParser.NUMBER - 36)) | (1 << (mdxParser.ID - 36)) | (1 << (mdxParser.QUOTED_ID - 36)) | (1 << (mdxParser.STRING - 36)))) !== 0)) {
                    {
                        this.state = 350;
                        this.value_expression();
                    }
                }
                this.state = 354;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mdxParser.WHEN) {
                    {
                        this.state = 353;
                        this.when_list();
                    }
                }
                this.state = 358;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === mdxParser.ELSE) {
                    {
                        this.state = 356;
                        this.match(mdxParser.ELSE);
                        this.state = 357;
                        this.value_expression();
                    }
                }
                this.state = 360;
                this.match(mdxParser.END);
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
    mdxParser.prototype.when_list = function () {
        var _localctx = new When_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, mdxParser.RULE_when_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 362;
                this.when_clause();
                this.state = 366;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === mdxParser.WHEN) {
                    {
                        {
                            this.state = 363;
                            this.when_clause();
                        }
                    }
                    this.state = 368;
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
    mdxParser.prototype.when_clause = function () {
        var _localctx = new When_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, mdxParser.RULE_when_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 369;
                this.match(mdxParser.WHEN);
                this.state = 370;
                this.value_expression();
                this.state = 371;
                this.match(mdxParser.THEN);
                this.state = 372;
                this.value_expression();
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
    mdxParser.prototype.comp_op = function () {
        var _localctx = new Comp_opContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, mdxParser.RULE_comp_op);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 374;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mdxParser.EQ) | (1 << mdxParser.GE) | (1 << mdxParser.GT) | (1 << mdxParser.LE) | (1 << mdxParser.LT) | (1 << mdxParser.NE))) !== 0))) {
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
    mdxParser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, mdxParser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 378;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case mdxParser.DIMENSION:
                    case mdxParser.PROPERTIES:
                    case mdxParser.ID:
                        {
                            this.state = 376;
                            this.unquoted_identifier();
                        }
                        break;
                    case mdxParser.QUOTED_ID:
                        {
                            this.state = 377;
                            this.quoted_identifier();
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
    // @RuleVersion(0)
    mdxParser.prototype.unquoted_identifier = function () {
        var _localctx = new Unquoted_identifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, mdxParser.RULE_unquoted_identifier);
        try {
            this.state = 382;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case mdxParser.DIMENSION:
                case mdxParser.PROPERTIES:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 380;
                        this.keyword();
                    }
                    break;
                case mdxParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 381;
                        this.match(mdxParser.ID);
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
    mdxParser.prototype.amp_quoted_identifier = function () {
        var _localctx = new Amp_quoted_identifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, mdxParser.RULE_amp_quoted_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 384;
                this.match(mdxParser.AMP_QUOTED_ID);
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
    mdxParser.prototype.quoted_identifier = function () {
        var _localctx = new Quoted_identifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, mdxParser.RULE_quoted_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 386;
                this.match(mdxParser.QUOTED_ID);
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
    mdxParser.prototype.keyword = function () {
        var _localctx = new KeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, mdxParser.RULE_keyword);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 388;
                _la = this._input.LA(1);
                if (!(_la === mdxParser.DIMENSION || _la === mdxParser.PROPERTIES)) {
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
    Object.defineProperty(mdxParser, "_ATN", {
        get: function () {
            if (!mdxParser.__ATN) {
                mdxParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(mdxParser._serializedATN));
            }
            return mdxParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    mdxParser.QUOTE = 1;
    mdxParser.ASTERISK = 2;
    mdxParser.COLON = 3;
    mdxParser.SEMICOLON = 4;
    mdxParser.COMMA = 5;
    mdxParser.CONCAT = 6;
    mdxParser.DOT = 7;
    mdxParser.EQ = 8;
    mdxParser.GE = 9;
    mdxParser.GT = 10;
    mdxParser.LBRACE = 11;
    mdxParser.LE = 12;
    mdxParser.LPAREN = 13;
    mdxParser.LT = 14;
    mdxParser.MINUS = 15;
    mdxParser.NE = 16;
    mdxParser.PLUS = 17;
    mdxParser.RBRACE = 18;
    mdxParser.RPAREN = 19;
    mdxParser.SOLIDUS = 20;
    mdxParser.AND = 21;
    mdxParser.AS = 22;
    mdxParser.CASE = 23;
    mdxParser.CELL = 24;
    mdxParser.CELL_ORDINAL = 25;
    mdxParser.CREATE = 26;
    mdxParser.DIMENSION = 27;
    mdxParser.ELSE = 28;
    mdxParser.EMPTY = 29;
    mdxParser.END = 30;
    mdxParser.FORMATTED_VALUE = 31;
    mdxParser.FROM = 32;
    mdxParser.GLOBAL = 33;
    mdxParser.MEMBER = 34;
    mdxParser.NON = 35;
    mdxParser.NOT = 36;
    mdxParser.ON = 37;
    mdxParser.OR = 38;
    mdxParser.PROPERTIES = 39;
    mdxParser.SELECT = 40;
    mdxParser.SESSION = 41;
    mdxParser.SET = 42;
    mdxParser.THEN = 43;
    mdxParser.VALUE = 44;
    mdxParser.WHEN = 45;
    mdxParser.WHERE = 46;
    mdxParser.XOR = 47;
    mdxParser.WITH = 48;
    mdxParser.NUMBER = 49;
    mdxParser.F = 50;
    mdxParser.ID = 51;
    mdxParser.AMP_QUOTED_ID = 52;
    mdxParser.QUOTED_ID = 53;
    mdxParser.STRING = 54;
    mdxParser.WS = 55;
    mdxParser.RULE_mdx_statement = 0;
    mdxParser.RULE_select_statement = 1;
    mdxParser.RULE_formula_specification = 2;
    mdxParser.RULE_single_formula_specification = 3;
    mdxParser.RULE_set_specification = 4;
    mdxParser.RULE_member_specification = 5;
    mdxParser.RULE_axis_specification_list = 6;
    mdxParser.RULE_member_property_def_list = 7;
    mdxParser.RULE_member_name = 8;
    mdxParser.RULE_member_property_definition = 9;
    mdxParser.RULE_set_name = 10;
    mdxParser.RULE_compound_id = 11;
    mdxParser.RULE_axis_specification = 12;
    mdxParser.RULE_axis_name = 13;
    mdxParser.RULE_dim_props = 14;
    mdxParser.RULE_property_list = 15;
    mdxParser.RULE_property = 16;
    mdxParser.RULE_cube_specification = 17;
    mdxParser.RULE_cube_name = 18;
    mdxParser.RULE_slicer_specification = 19;
    mdxParser.RULE_cell_props = 20;
    mdxParser.RULE_cell_property_list = 21;
    mdxParser.RULE_cell_property = 22;
    mdxParser.RULE_mandatory_cell_property = 23;
    mdxParser.RULE_provider_specific_cell_property = 24;
    mdxParser.RULE_expression = 25;
    mdxParser.RULE_value_expression = 26;
    mdxParser.RULE_value_xor_expression = 27;
    mdxParser.RULE_value_or_expression = 28;
    mdxParser.RULE_term5 = 29;
    mdxParser.RULE_term4 = 30;
    mdxParser.RULE_term3 = 31;
    mdxParser.RULE_term2 = 32;
    mdxParser.RULE_term = 33;
    mdxParser.RULE_factor = 34;
    mdxParser.RULE_function = 35;
    mdxParser.RULE_value_expression_primary = 36;
    mdxParser.RULE_value_expression_primary0 = 37;
    mdxParser.RULE_exp_list = 38;
    mdxParser.RULE_case_expression = 39;
    mdxParser.RULE_when_list = 40;
    mdxParser.RULE_when_clause = 41;
    mdxParser.RULE_comp_op = 42;
    mdxParser.RULE_identifier = 43;
    mdxParser.RULE_unquoted_identifier = 44;
    mdxParser.RULE_amp_quoted_identifier = 45;
    mdxParser.RULE_quoted_identifier = 46;
    mdxParser.RULE_keyword = 47;
    // tslint:disable:no-trailing-whitespace
    mdxParser.ruleNames = [
        "mdx_statement", "select_statement", "formula_specification", "single_formula_specification",
        "set_specification", "member_specification", "axis_specification_list",
        "member_property_def_list", "member_name", "member_property_definition",
        "set_name", "compound_id", "axis_specification", "axis_name", "dim_props",
        "property_list", "property", "cube_specification", "cube_name", "slicer_specification",
        "cell_props", "cell_property_list", "cell_property", "mandatory_cell_property",
        "provider_specific_cell_property", "expression", "value_expression", "value_xor_expression",
        "value_or_expression", "term5", "term4", "term3", "term2", "term", "factor",
        "function", "value_expression_primary", "value_expression_primary0", "exp_list",
        "case_expression", "when_list", "when_clause", "comp_op", "identifier",
        "unquoted_identifier", "amp_quoted_identifier", "quoted_identifier", "keyword",
    ];
    mdxParser._LITERAL_NAMES = [
        undefined, "'''", "'*'", "':'", "';'", "','", "'||'", "'.'", "'='", "'>='",
        "'>'", "'{'", "'<='", "'('", "'<'", "'-'", "'<>'", "'+'", "'}'", "')'",
        "'/'", "'AND'", "'AS'", "'CASE'", "'CELL'", "'CELL_ORDINAL'", "'CREATE'",
        "'DIMENSION'", "'ELSE'", "'EMPTY'", "'END'", "'FORMATTED_VALUE'", "'FROM'",
        "'GLOBAL'", "'MEMBER'", "'NON'", "'NOT'", "'ON'", "'OR'", "'PROPERTIES'",
        "'SELECT'", "'SESSION'", "'SET'", "'THEN'", "'VALUE'", "'WHEN'", "'WHERE'",
        "'XOR'", "'WITH'",
    ];
    mdxParser._SYMBOLIC_NAMES = [
        undefined, "QUOTE", "ASTERISK", "COLON", "SEMICOLON", "COMMA", "CONCAT",
        "DOT", "EQ", "GE", "GT", "LBRACE", "LE", "LPAREN", "LT", "MINUS", "NE",
        "PLUS", "RBRACE", "RPAREN", "SOLIDUS", "AND", "AS", "CASE", "CELL", "CELL_ORDINAL",
        "CREATE", "DIMENSION", "ELSE", "EMPTY", "END", "FORMATTED_VALUE", "FROM",
        "GLOBAL", "MEMBER", "NON", "NOT", "ON", "OR", "PROPERTIES", "SELECT",
        "SESSION", "SET", "THEN", "VALUE", "WHEN", "WHERE", "XOR", "WITH", "NUMBER",
        "F", "ID", "AMP_QUOTED_ID", "QUOTED_ID", "STRING", "WS",
    ];
    mdxParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(mdxParser._LITERAL_NAMES, mdxParser._SYMBOLIC_NAMES, []);
    mdxParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x039\u0189\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x03\x02\x03\x02\x03\x02" +
        "\x03\x03\x03\x03\x05\x03h\n\x03\x03\x03\x03\x03\x05\x03l\n\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x05\x03r\n\x03\x03\x03\x05\x03u\n\x03\x03\x04" +
        "\x06\x04x\n\x04\r\x04\x0E\x04y\x03\x05\x03\x05\x05\x05~\n\x05\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x88\n" +
        "\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
        "\x07\x92\n\x07\x03\x07\x03\x07\x05\x07\x96\n\x07\x03\b\x03\b\x03\b\x07" +
        "\b\x9B\n\b\f\b\x0E\b\x9E\v\b\x03\t\x03\t\x03\t\x07\t\xA3\n\t\f\t\x0E\t" +
        "\xA6\v\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03" +
        "\r\x07\r\xB3\n\r\f\r\x0E\r\xB6\v\r\x03\x0E\x03\x0E\x05\x0E\xBA\n\x0E\x03" +
        "\x0E\x03\x0E\x05\x0E\xBE\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
        "\x03\x10\x05\x10\xC6\n\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
        "\x11\x07\x11\xCE\n\x11\f\x11\x0E\x11\xD1\v\x11\x03\x12\x03\x12\x03\x13" +
        "\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x05\x16\xDC\n\x16\x03" +
        "\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x07\x17\xE4\n\x17\f\x17\x0E" +
        "\x17\xE7\v\x17\x03\x18\x03\x18\x05\x18\xEB\n\x18\x03\x19\x03\x19\x03\x1A" +
        "\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B\xF4\n\x1B\f\x1B\x0E\x1B\xF7\v" +
        "\x1B\x03\x1C\x03\x1C\x03\x1C\x07\x1C\xFC\n\x1C\f\x1C\x0E\x1C\xFF\v\x1C" +
        "\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
        "\x07\x1F\u010A\n\x1F\f\x1F\x0E\x1F\u010D\v\x1F\x03 \x03 \x03 \x05 \u0112" +
        "\n \x03!\x03!\x03!\x03!\x07!\u0118\n!\f!\x0E!\u011B\v!\x03\"\x03\"\x03" +
        "\"\x07\"\u0120\n\"\f\"\x0E\"\u0123\v\"\x03#\x03#\x03#\x07#\u0128\n#\f" +
        "#\x0E#\u012B\v#\x03$\x03$\x03$\x03$\x03$\x05$\u0132\n$\x03%\x03%\x03%" +
        "\x05%\u0137\n%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u0141\n&\x07" +
        "&\u0143\n&\f&\x0E&\u0146\v&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'" +
        "\x05\'\u014F\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u0156\n\'\x03(\x03" +
        "(\x03(\x07(\u015B\n(\f(\x0E(\u015E\v(\x03)\x03)\x05)\u0162\n)\x03)\x05" +
        ")\u0165\n)\x03)\x03)\x05)\u0169\n)\x03)\x03)\x03*\x03*\x07*\u016F\n*\f" +
        "*\x0E*\u0172\v*\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03-\x03-\x05-\u017D" +
        "\n-\x03.\x03.\x05.\u0181\n.\x03/\x03/\x030\x030\x031\x031\x031\x02\x02" +
        "\x022\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
        "\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
        "(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
        "D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
        "`\x02\x02\x07\x05\x02\x1B\x1B!!..\x05\x02\b\b\x11\x11\x13\x13\x04\x02" +
        "\x04\x04\x16\x16\x06\x02\n\f\x0E\x0E\x10\x10\x12\x12\x04\x02\x1D\x1D)" +
        ")\x02\u0188\x02b\x03\x02\x02\x02\x04g\x03\x02\x02\x02\x06w\x03\x02\x02" +
        "\x02\b}\x03\x02\x02\x02\n\x7F\x03\x02\x02\x02\f\x89\x03\x02\x02\x02\x0E" +
        "\x97\x03\x02\x02\x02\x10\x9F\x03\x02\x02\x02\x12\xA7\x03\x02\x02\x02\x14" +
        "\xA9\x03\x02\x02\x02\x16\xAD\x03\x02\x02\x02\x18\xAF\x03\x02\x02\x02\x1A" +
        "\xB9\x03\x02\x02\x02\x1C\xC2\x03\x02\x02\x02\x1E\xC5\x03\x02\x02\x02 " +
        "\xCA\x03\x02\x02\x02\"\xD2\x03\x02\x02\x02$\xD4\x03\x02\x02\x02&\xD6\x03" +
        "\x02\x02\x02(\xD8\x03\x02\x02\x02*\xDB\x03\x02\x02\x02,\xE0\x03\x02\x02" +
        "\x02.\xEA\x03\x02\x02\x020\xEC\x03\x02\x02\x022\xEE\x03\x02\x02\x024\xF0" +
        "\x03\x02\x02\x026\xF8\x03\x02\x02\x028\u0100\x03\x02\x02\x02:\u0103\x03" +
        "\x02\x02\x02<\u0106\x03\x02\x02\x02>\u0111\x03\x02\x02\x02@\u0113\x03" +
        "\x02\x02\x02B\u011C\x03\x02\x02\x02D\u0124\x03\x02\x02\x02F\u0131\x03" +
        "\x02\x02\x02H\u0133\x03\x02\x02\x02J\u013A\x03\x02\x02\x02L\u0155\x03" +
        "\x02\x02\x02N\u0157\x03\x02\x02\x02P\u015F\x03\x02\x02\x02R\u016C\x03" +
        "\x02\x02\x02T\u0173\x03\x02\x02\x02V\u0178\x03\x02\x02\x02X\u017C\x03" +
        "\x02\x02\x02Z\u0180\x03\x02\x02\x02\\\u0182\x03\x02\x02\x02^\u0184\x03" +
        "\x02\x02\x02`\u0186\x03\x02\x02\x02bc\x05\x04\x03\x02cd\x07\x02\x02\x03" +
        "d\x03\x03\x02\x02\x02ef\x072\x02\x02fh\x05\x06\x04\x02ge\x03\x02\x02\x02" +
        "gh\x03\x02\x02\x02hi\x03\x02\x02\x02ik\x07*\x02\x02jl\x05\x0E\b\x02kj" +
        "\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x03\x02\x02\x02mn\x07\"\x02\x02n" +
        "q\x05$\x13\x02op\x070\x02\x02pr\x05(\x15\x02qo\x03\x02\x02\x02qr\x03\x02" +
        "\x02\x02rt\x03\x02\x02\x02su\x05*\x16\x02ts\x03\x02\x02\x02tu\x03\x02" +
        "\x02\x02u\x05\x03\x02\x02\x02vx\x05\b\x05\x02wv\x03\x02\x02\x02xy\x03" +
        "\x02\x02\x02yw\x03\x02\x02\x02yz\x03\x02\x02\x02z\x07\x03\x02\x02\x02" +
        "{~\x05\f\x07\x02|~\x05\n\x06\x02}{\x03\x02\x02\x02}|\x03\x02\x02\x02~" +
        "\t\x03\x02\x02\x02\x7F\x80\x07,\x02\x02\x80\x81\x05\x16\f\x02\x81\x87" +
        "\x07\x18\x02\x02\x82\x83\x07\x03\x02\x02\x83\x84\x054\x1B\x02\x84\x85" +
        "\x07\x03\x02\x02\x85\x88\x03\x02\x02\x02\x86\x88\x054\x1B\x02\x87\x82" +
        "\x03\x02\x02\x02\x87\x86\x03\x02\x02\x02\x88\v\x03\x02\x02\x02\x89\x8A" +
        "\x07$\x02\x02\x8A\x8B\x05\x12\n\x02\x8B\x91\x07\x18\x02\x02\x8C\x8D\x07" +
        "\x03\x02\x02\x8D\x8E\x056\x1C\x02\x8E\x8F\x07\x03\x02\x02\x8F\x92\x03" +
        "\x02\x02\x02\x90\x92\x056\x1C\x02\x91\x8C\x03\x02\x02\x02\x91\x90\x03" +
        "\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x95\x07\x07\x02\x02\x94\x96\x05" +
        "\x10\t\x02\x95\x94\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\r\x03\x02" +
        "\x02\x02\x97\x9C\x05\x1A\x0E\x02\x98\x99\x07\x07\x02\x02\x99\x9B\x05\x1A" +
        "\x0E\x02\x9A\x98\x03\x02\x02\x02\x9B\x9E\x03\x02\x02\x02\x9C\x9A\x03\x02" +
        "\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x0F\x03\x02\x02\x02\x9E\x9C\x03\x02" +
        "\x02\x02\x9F\xA4\x05\x14\v\x02\xA0\xA1\x07\x07\x02\x02\xA1\xA3\x05\x14" +
        "\v\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA6\x03\x02\x02\x02\xA4\xA2\x03\x02" +
        "\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\x11\x03\x02\x02\x02\xA6\xA4\x03\x02" +
        "\x02\x02\xA7\xA8\x05\x18\r\x02\xA8\x13\x03\x02\x02\x02\xA9\xAA\x05X-\x02" +
        "\xAA\xAB\x07\n\x02\x02\xAB\xAC\x056\x1C\x02\xAC\x15\x03\x02\x02\x02\xAD" +
        "\xAE\x05\x18\r\x02\xAE\x17\x03\x02\x02\x02\xAF\xB4\x05X-\x02\xB0\xB1\x07" +
        "\t\x02\x02\xB1\xB3\x05X-\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB6\x03\x02\x02" +
        "\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\x19\x03\x02\x02" +
        "\x02\xB6\xB4\x03\x02\x02\x02\xB7\xB8\x07%\x02\x02\xB8\xBA\x07\x1F\x02" +
        "\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x03\x02\x02" +
        "\x02\xBB\xBD\x054\x1B\x02\xBC\xBE\x05\x1E\x10\x02\xBD\xBC\x03\x02\x02" +
        "\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC0\x07\'\x02" +
        "\x02\xC0\xC1\x05\x1C\x0F\x02\xC1\x1B\x03\x02\x02\x02\xC2\xC3\x05X-\x02" +
        "\xC3\x1D\x03\x02\x02\x02\xC4\xC6\x07\x1D\x02\x02\xC5\xC4\x03\x02\x02\x02" +
        "\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x07)\x02\x02" +
        "\xC8\xC9\x05 \x11\x02\xC9\x1F\x03\x02\x02\x02\xCA\xCF\x05\"\x12\x02\xCB" +
        "\xCC\x07\x07\x02\x02\xCC\xCE\x05\"\x12\x02\xCD\xCB\x03\x02\x02\x02\xCE" +
        "\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0" +
        "!\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD3\x05\x18\r\x02\xD3#\x03" +
        "\x02\x02\x02\xD4\xD5\x05&\x14\x02\xD5%\x03\x02\x02\x02\xD6\xD7\x05\x18" +
        "\r\x02\xD7\'\x03\x02\x02\x02\xD8\xD9\x054\x1B\x02\xD9)\x03\x02\x02\x02" +
        "\xDA\xDC\x07\x1A\x02\x02\xDB\xDA\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02" +
        "\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x07)\x02\x02\xDE\xDF\x05,\x17\x02\xDF" +
        "+\x03\x02\x02\x02\xE0\xE1\x05.\x18\x02\xE1\xE5\x07\x07\x02\x02\xE2\xE4" +
        "\x05.\x18\x02\xE3\xE2\x03\x02\x02\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3" +
        "\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6-\x03\x02\x02\x02\xE7\xE5" +
        "\x03\x02\x02\x02\xE8\xEB\x050\x19\x02\xE9\xEB\x052\x1A\x02\xEA\xE8\x03" +
        "\x02\x02\x02\xEA\xE9\x03\x02\x02\x02\xEB/\x03\x02\x02\x02\xEC\xED\t\x02" +
        "\x02\x02\xED1\x03\x02\x02\x02\xEE\xEF\x05X-\x02\xEF3\x03\x02\x02\x02\xF0" +
        "\xF5\x056\x1C\x02\xF1\xF2\x07\x05\x02\x02\xF2\xF4\x056\x1C\x02\xF3\xF1" +
        "\x03\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6" +
        "\x03\x02\x02\x02\xF65\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\xFD" +
        "\x05<\x1F\x02\xF9\xFC\x058\x1D\x02\xFA\xFC\x05:\x1E\x02\xFB\xF9\x03\x02" +
        "\x02\x02\xFB\xFA\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02" +
        "\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE7\x03\x02\x02\x02\xFF\xFD\x03\x02" +
        "\x02\x02\u0100\u0101\x071\x02\x02\u0101\u0102\x05<\x1F\x02\u01029\x03" +
        "\x02\x02\x02\u0103\u0104\x07(\x02\x02\u0104\u0105\x05<\x1F\x02\u0105;" +
        "\x03\x02\x02\x02\u0106\u010B\x05> \x02\u0107\u0108\x07\x17\x02\x02\u0108" +
        "\u010A\x05> \x02\u0109\u0107\x03\x02\x02\x02\u010A\u010D\x03\x02\x02\x02" +
        "\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C=\x03\x02" +
        "\x02\x02\u010D\u010B\x03\x02\x02\x02\u010E\u010F\x07&\x02\x02\u010F\u0112" +
        "\x05> \x02\u0110\u0112\x05@!\x02\u0111\u010E\x03\x02\x02\x02\u0111\u0110" +
        "\x03\x02\x02\x02\u0112?\x03\x02\x02\x02\u0113\u0119\x05B\"\x02\u0114\u0115" +
        "\x05V,\x02\u0115\u0116\x05B\"\x02\u0116\u0118\x03\x02\x02\x02\u0117\u0114" +
        "\x03\x02\x02\x02\u0118\u011B\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02" +
        "\u0119\u011A\x03\x02\x02\x02\u011AA\x03\x02\x02\x02\u011B\u0119\x03\x02" +
        "\x02\x02\u011C\u0121\x05D#\x02\u011D\u011E\t\x03\x02\x02\u011E\u0120\x05" +
        "D#\x02\u011F\u011D\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121\u011F" +
        "\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122C\x03\x02\x02\x02\u0123" +
        "\u0121\x03\x02\x02\x02\u0124\u0129\x05F$\x02\u0125\u0126\t\x04\x02\x02" +
        "\u0126\u0128\x05F$\x02\u0127\u0125\x03\x02\x02\x02\u0128\u012B\x03\x02" +
        "\x02\x02\u0129\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A" +
        "E\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C\u012D\x07\x11\x02" +
        "\x02\u012D\u0132\x05J&\x02\u012E\u012F\x07\x13\x02\x02\u012F\u0132\x05" +
        "J&\x02\u0130\u0132\x05J&\x02\u0131\u012C\x03\x02\x02\x02\u0131\u012E\x03" +
        "\x02\x02\x02\u0131\u0130\x03\x02\x02\x02\u0132G\x03\x02\x02\x02\u0133" +
        "\u0134\x05X-\x02\u0134\u0136\x07\x0F\x02\x02\u0135\u0137\x05N(\x02\u0136" +
        "\u0135\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0138\x03\x02" +
        "\x02\x02\u0138\u0139\x07\x15\x02\x02\u0139I\x03\x02\x02\x02\u013A\u0144" +
        "\x05L\'\x02\u013B\u0140\x07\t\x02\x02\u013C\u0141\x05Z.\x02\u013D\u0141" +
        "\x05^0\x02\u013E\u0141\x05\\/\x02\u013F\u0141\x05H%\x02\u0140\u013C\x03" +
        "\x02\x02\x02\u0140\u013D\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140" +
        "\u013F\x03\x02\x02\x02\u0141\u0143\x03\x02\x02\x02\u0142\u013B\x03\x02" +
        "\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0144" +
        "\u0145\x03\x02\x02\x02\u0145K\x03\x02\x02\x02\u0146\u0144\x03\x02\x02" +
        "\x02\u0147\u0156\x05H%\x02\u0148\u0149\x07\x0F\x02\x02\u0149\u014A\x05" +
        "N(\x02\u014A\u014B\x07\x15\x02\x02\u014B\u0156\x03\x02\x02\x02\u014C\u014E" +
        "\x07\r\x02\x02\u014D\u014F\x05N(\x02\u014E\u014D\x03\x02\x02\x02\u014E" +
        "\u014F\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0156\x07\x14" +
        "\x02\x02\u0151\u0156\x05P)\x02\u0152\u0156\x078\x02\x02\u0153\u0156\x07" +
        "3\x02\x02\u0154\u0156\x05X-\x02\u0155\u0147\x03\x02\x02\x02\u0155\u0148" +
        "\x03\x02\x02\x02\u0155\u014C\x03\x02\x02\x02\u0155\u0151\x03\x02\x02\x02" +
        "\u0155\u0152\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155\u0154\x03" +
        "\x02\x02\x02\u0156M\x03\x02\x02\x02\u0157\u015C\x054\x1B\x02\u0158\u0159" +
        "\x07\x07\x02\x02\u0159\u015B\x054\x1B\x02\u015A\u0158\x03\x02\x02\x02" +
        "\u015B\u015E\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015D\x03" +
        "\x02\x02\x02\u015DO\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015F" +
        "\u0161\x07\x19\x02\x02\u0160\u0162\x056\x1C\x02\u0161\u0160\x03\x02\x02" +
        "\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0164\x03\x02\x02\x02\u0163\u0165" +
        "\x05R*\x02\u0164\u0163\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165" +
        "\u0168\x03\x02\x02\x02\u0166\u0167\x07\x1E\x02\x02\u0167\u0169\x056\x1C" +
        "\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016A" +
        "\x03\x02\x02\x02\u016A\u016B\x07 \x02\x02\u016BQ\x03\x02\x02\x02\u016C" +
        "\u0170\x05T+\x02\u016D\u016F\x05T+\x02\u016E\u016D\x03\x02\x02\x02\u016F" +
        "\u0172\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0170\u0171\x03\x02" +
        "\x02\x02\u0171S\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0173\u0174" +
        "\x07/\x02\x02\u0174\u0175\x056\x1C\x02\u0175\u0176\x07-\x02\x02\u0176" +
        "\u0177\x056\x1C\x02\u0177U\x03\x02\x02\x02\u0178\u0179\t\x05\x02\x02\u0179" +
        "W\x03\x02\x02\x02\u017A\u017D\x05Z.\x02\u017B\u017D\x05^0\x02\u017C\u017A" +
        "\x03\x02\x02\x02\u017C\u017B\x03\x02\x02\x02\u017DY\x03\x02\x02\x02\u017E" +
        "\u0181\x05`1\x02\u017F\u0181\x075\x02\x02\u0180\u017E\x03\x02\x02\x02" +
        "\u0180\u017F\x03\x02\x02\x02\u0181[\x03\x02\x02\x02\u0182\u0183\x076\x02" +
        "\x02\u0183]\x03\x02\x02\x02\u0184\u0185\x077\x02\x02\u0185_\x03\x02\x02" +
        "\x02\u0186\u0187\t\x06\x02\x02\u0187a\x03\x02\x02\x02*gkqty}\x87\x91\x95" +
        "\x9C\xA4\xB4\xB9\xBD\xC5\xCF\xDB\xE5\xEA\xF5\xFB\xFD\u010B\u0111\u0119" +
        "\u0121\u0129\u0131\u0136\u0140\u0144\u014E\u0155\u015C\u0161\u0164\u0168" +
        "\u0170\u017C\u0180";
    return mdxParser;
}(Parser_1.Parser));
exports.mdxParser = mdxParser;
var Mdx_statementContext = /** @class */ (function (_super) {
    __extends(Mdx_statementContext, _super);
    function Mdx_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mdx_statementContext.prototype.EOF = function () { return this.getToken(mdxParser.EOF, 0); };
    Mdx_statementContext.prototype.select_statement = function () {
        return this.tryGetRuleContext(0, Select_statementContext);
    };
    Object.defineProperty(Mdx_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_mdx_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mdx_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterMdx_statement) {
            listener.enterMdx_statement(this);
        }
    };
    // @Override
    Mdx_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitMdx_statement) {
            listener.exitMdx_statement(this);
        }
    };
    // @Override
    Mdx_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitMdx_statement) {
            return visitor.visitMdx_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mdx_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mdx_statementContext = Mdx_statementContext;
var Select_statementContext = /** @class */ (function (_super) {
    __extends(Select_statementContext, _super);
    function Select_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Select_statementContext.prototype.SELECT = function () { return this.getToken(mdxParser.SELECT, 0); };
    Select_statementContext.prototype.FROM = function () { return this.getToken(mdxParser.FROM, 0); };
    Select_statementContext.prototype.cube_specification = function () {
        return this.getRuleContext(0, Cube_specificationContext);
    };
    Select_statementContext.prototype.WITH = function () { return this.tryGetToken(mdxParser.WITH, 0); };
    Select_statementContext.prototype.formula_specification = function () {
        return this.tryGetRuleContext(0, Formula_specificationContext);
    };
    Select_statementContext.prototype.axis_specification_list = function () {
        return this.tryGetRuleContext(0, Axis_specification_listContext);
    };
    Select_statementContext.prototype.WHERE = function () { return this.tryGetToken(mdxParser.WHERE, 0); };
    Select_statementContext.prototype.slicer_specification = function () {
        return this.tryGetRuleContext(0, Slicer_specificationContext);
    };
    Select_statementContext.prototype.cell_props = function () {
        return this.tryGetRuleContext(0, Cell_propsContext);
    };
    Object.defineProperty(Select_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_select_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Select_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterSelect_statement) {
            listener.enterSelect_statement(this);
        }
    };
    // @Override
    Select_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitSelect_statement) {
            listener.exitSelect_statement(this);
        }
    };
    // @Override
    Select_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitSelect_statement) {
            return visitor.visitSelect_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Select_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Select_statementContext = Select_statementContext;
var Formula_specificationContext = /** @class */ (function (_super) {
    __extends(Formula_specificationContext, _super);
    function Formula_specificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Formula_specificationContext.prototype.single_formula_specification = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Single_formula_specificationContext);
        }
        else {
            return this.getRuleContext(i, Single_formula_specificationContext);
        }
    };
    Object.defineProperty(Formula_specificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_formula_specification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Formula_specificationContext.prototype.enterRule = function (listener) {
        if (listener.enterFormula_specification) {
            listener.enterFormula_specification(this);
        }
    };
    // @Override
    Formula_specificationContext.prototype.exitRule = function (listener) {
        if (listener.exitFormula_specification) {
            listener.exitFormula_specification(this);
        }
    };
    // @Override
    Formula_specificationContext.prototype.accept = function (visitor) {
        if (visitor.visitFormula_specification) {
            return visitor.visitFormula_specification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Formula_specificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Formula_specificationContext = Formula_specificationContext;
var Single_formula_specificationContext = /** @class */ (function (_super) {
    __extends(Single_formula_specificationContext, _super);
    function Single_formula_specificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Single_formula_specificationContext.prototype.member_specification = function () {
        return this.tryGetRuleContext(0, Member_specificationContext);
    };
    Single_formula_specificationContext.prototype.set_specification = function () {
        return this.tryGetRuleContext(0, Set_specificationContext);
    };
    Object.defineProperty(Single_formula_specificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_single_formula_specification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Single_formula_specificationContext.prototype.enterRule = function (listener) {
        if (listener.enterSingle_formula_specification) {
            listener.enterSingle_formula_specification(this);
        }
    };
    // @Override
    Single_formula_specificationContext.prototype.exitRule = function (listener) {
        if (listener.exitSingle_formula_specification) {
            listener.exitSingle_formula_specification(this);
        }
    };
    // @Override
    Single_formula_specificationContext.prototype.accept = function (visitor) {
        if (visitor.visitSingle_formula_specification) {
            return visitor.visitSingle_formula_specification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Single_formula_specificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Single_formula_specificationContext = Single_formula_specificationContext;
var Set_specificationContext = /** @class */ (function (_super) {
    __extends(Set_specificationContext, _super);
    function Set_specificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Set_specificationContext.prototype.SET = function () { return this.getToken(mdxParser.SET, 0); };
    Set_specificationContext.prototype.set_name = function () {
        return this.getRuleContext(0, Set_nameContext);
    };
    Set_specificationContext.prototype.AS = function () { return this.getToken(mdxParser.AS, 0); };
    Set_specificationContext.prototype.QUOTE = function (i) {
        if (i === undefined) {
            return this.getTokens(mdxParser.QUOTE);
        }
        else {
            return this.getToken(mdxParser.QUOTE, i);
        }
    };
    Set_specificationContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Set_specificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_set_specification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Set_specificationContext.prototype.enterRule = function (listener) {
        if (listener.enterSet_specification) {
            listener.enterSet_specification(this);
        }
    };
    // @Override
    Set_specificationContext.prototype.exitRule = function (listener) {
        if (listener.exitSet_specification) {
            listener.exitSet_specification(this);
        }
    };
    // @Override
    Set_specificationContext.prototype.accept = function (visitor) {
        if (visitor.visitSet_specification) {
            return visitor.visitSet_specification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Set_specificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Set_specificationContext = Set_specificationContext;
var Member_specificationContext = /** @class */ (function (_super) {
    __extends(Member_specificationContext, _super);
    function Member_specificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Member_specificationContext.prototype.MEMBER = function () { return this.getToken(mdxParser.MEMBER, 0); };
    Member_specificationContext.prototype.member_name = function () {
        return this.getRuleContext(0, Member_nameContext);
    };
    Member_specificationContext.prototype.AS = function () { return this.getToken(mdxParser.AS, 0); };
    Member_specificationContext.prototype.COMMA = function () { return this.tryGetToken(mdxParser.COMMA, 0); };
    Member_specificationContext.prototype.QUOTE = function (i) {
        if (i === undefined) {
            return this.getTokens(mdxParser.QUOTE);
        }
        else {
            return this.getToken(mdxParser.QUOTE, i);
        }
    };
    Member_specificationContext.prototype.value_expression = function () {
        return this.tryGetRuleContext(0, Value_expressionContext);
    };
    Member_specificationContext.prototype.member_property_def_list = function () {
        return this.tryGetRuleContext(0, Member_property_def_listContext);
    };
    Object.defineProperty(Member_specificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_member_specification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Member_specificationContext.prototype.enterRule = function (listener) {
        if (listener.enterMember_specification) {
            listener.enterMember_specification(this);
        }
    };
    // @Override
    Member_specificationContext.prototype.exitRule = function (listener) {
        if (listener.exitMember_specification) {
            listener.exitMember_specification(this);
        }
    };
    // @Override
    Member_specificationContext.prototype.accept = function (visitor) {
        if (visitor.visitMember_specification) {
            return visitor.visitMember_specification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Member_specificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Member_specificationContext = Member_specificationContext;
var Axis_specification_listContext = /** @class */ (function (_super) {
    __extends(Axis_specification_listContext, _super);
    function Axis_specification_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Axis_specification_listContext.prototype.axis_specification = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Axis_specificationContext);
        }
        else {
            return this.getRuleContext(i, Axis_specificationContext);
        }
    };
    Axis_specification_listContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(mdxParser.COMMA);
        }
        else {
            return this.getToken(mdxParser.COMMA, i);
        }
    };
    Object.defineProperty(Axis_specification_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_axis_specification_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Axis_specification_listContext.prototype.enterRule = function (listener) {
        if (listener.enterAxis_specification_list) {
            listener.enterAxis_specification_list(this);
        }
    };
    // @Override
    Axis_specification_listContext.prototype.exitRule = function (listener) {
        if (listener.exitAxis_specification_list) {
            listener.exitAxis_specification_list(this);
        }
    };
    // @Override
    Axis_specification_listContext.prototype.accept = function (visitor) {
        if (visitor.visitAxis_specification_list) {
            return visitor.visitAxis_specification_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Axis_specification_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Axis_specification_listContext = Axis_specification_listContext;
var Member_property_def_listContext = /** @class */ (function (_super) {
    __extends(Member_property_def_listContext, _super);
    function Member_property_def_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Member_property_def_listContext.prototype.member_property_definition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Member_property_definitionContext);
        }
        else {
            return this.getRuleContext(i, Member_property_definitionContext);
        }
    };
    Member_property_def_listContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(mdxParser.COMMA);
        }
        else {
            return this.getToken(mdxParser.COMMA, i);
        }
    };
    Object.defineProperty(Member_property_def_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_member_property_def_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Member_property_def_listContext.prototype.enterRule = function (listener) {
        if (listener.enterMember_property_def_list) {
            listener.enterMember_property_def_list(this);
        }
    };
    // @Override
    Member_property_def_listContext.prototype.exitRule = function (listener) {
        if (listener.exitMember_property_def_list) {
            listener.exitMember_property_def_list(this);
        }
    };
    // @Override
    Member_property_def_listContext.prototype.accept = function (visitor) {
        if (visitor.visitMember_property_def_list) {
            return visitor.visitMember_property_def_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Member_property_def_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Member_property_def_listContext = Member_property_def_listContext;
var Member_nameContext = /** @class */ (function (_super) {
    __extends(Member_nameContext, _super);
    function Member_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Member_nameContext.prototype.compound_id = function () {
        return this.getRuleContext(0, Compound_idContext);
    };
    Object.defineProperty(Member_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_member_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Member_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterMember_name) {
            listener.enterMember_name(this);
        }
    };
    // @Override
    Member_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitMember_name) {
            listener.exitMember_name(this);
        }
    };
    // @Override
    Member_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitMember_name) {
            return visitor.visitMember_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Member_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Member_nameContext = Member_nameContext;
var Member_property_definitionContext = /** @class */ (function (_super) {
    __extends(Member_property_definitionContext, _super);
    function Member_property_definitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Member_property_definitionContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Member_property_definitionContext.prototype.EQ = function () { return this.getToken(mdxParser.EQ, 0); };
    Member_property_definitionContext.prototype.value_expression = function () {
        return this.getRuleContext(0, Value_expressionContext);
    };
    Object.defineProperty(Member_property_definitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_member_property_definition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Member_property_definitionContext.prototype.enterRule = function (listener) {
        if (listener.enterMember_property_definition) {
            listener.enterMember_property_definition(this);
        }
    };
    // @Override
    Member_property_definitionContext.prototype.exitRule = function (listener) {
        if (listener.exitMember_property_definition) {
            listener.exitMember_property_definition(this);
        }
    };
    // @Override
    Member_property_definitionContext.prototype.accept = function (visitor) {
        if (visitor.visitMember_property_definition) {
            return visitor.visitMember_property_definition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Member_property_definitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Member_property_definitionContext = Member_property_definitionContext;
var Set_nameContext = /** @class */ (function (_super) {
    __extends(Set_nameContext, _super);
    function Set_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Set_nameContext.prototype.compound_id = function () {
        return this.getRuleContext(0, Compound_idContext);
    };
    Object.defineProperty(Set_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_set_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Set_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterSet_name) {
            listener.enterSet_name(this);
        }
    };
    // @Override
    Set_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitSet_name) {
            listener.exitSet_name(this);
        }
    };
    // @Override
    Set_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitSet_name) {
            return visitor.visitSet_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Set_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Set_nameContext = Set_nameContext;
var Compound_idContext = /** @class */ (function (_super) {
    __extends(Compound_idContext, _super);
    function Compound_idContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Compound_idContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    Compound_idContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(mdxParser.DOT);
        }
        else {
            return this.getToken(mdxParser.DOT, i);
        }
    };
    Object.defineProperty(Compound_idContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_compound_id; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Compound_idContext.prototype.enterRule = function (listener) {
        if (listener.enterCompound_id) {
            listener.enterCompound_id(this);
        }
    };
    // @Override
    Compound_idContext.prototype.exitRule = function (listener) {
        if (listener.exitCompound_id) {
            listener.exitCompound_id(this);
        }
    };
    // @Override
    Compound_idContext.prototype.accept = function (visitor) {
        if (visitor.visitCompound_id) {
            return visitor.visitCompound_id(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Compound_idContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Compound_idContext = Compound_idContext;
var Axis_specificationContext = /** @class */ (function (_super) {
    __extends(Axis_specificationContext, _super);
    function Axis_specificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Axis_specificationContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Axis_specificationContext.prototype.ON = function () { return this.getToken(mdxParser.ON, 0); };
    Axis_specificationContext.prototype.axis_name = function () {
        return this.getRuleContext(0, Axis_nameContext);
    };
    Axis_specificationContext.prototype.NON = function () { return this.tryGetToken(mdxParser.NON, 0); };
    Axis_specificationContext.prototype.EMPTY = function () { return this.tryGetToken(mdxParser.EMPTY, 0); };
    Axis_specificationContext.prototype.dim_props = function () {
        return this.tryGetRuleContext(0, Dim_propsContext);
    };
    Object.defineProperty(Axis_specificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_axis_specification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Axis_specificationContext.prototype.enterRule = function (listener) {
        if (listener.enterAxis_specification) {
            listener.enterAxis_specification(this);
        }
    };
    // @Override
    Axis_specificationContext.prototype.exitRule = function (listener) {
        if (listener.exitAxis_specification) {
            listener.exitAxis_specification(this);
        }
    };
    // @Override
    Axis_specificationContext.prototype.accept = function (visitor) {
        if (visitor.visitAxis_specification) {
            return visitor.visitAxis_specification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Axis_specificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Axis_specificationContext = Axis_specificationContext;
var Axis_nameContext = /** @class */ (function (_super) {
    __extends(Axis_nameContext, _super);
    function Axis_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Axis_nameContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(Axis_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_axis_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Axis_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterAxis_name) {
            listener.enterAxis_name(this);
        }
    };
    // @Override
    Axis_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitAxis_name) {
            listener.exitAxis_name(this);
        }
    };
    // @Override
    Axis_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitAxis_name) {
            return visitor.visitAxis_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Axis_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Axis_nameContext = Axis_nameContext;
var Dim_propsContext = /** @class */ (function (_super) {
    __extends(Dim_propsContext, _super);
    function Dim_propsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Dim_propsContext.prototype.PROPERTIES = function () { return this.getToken(mdxParser.PROPERTIES, 0); };
    Dim_propsContext.prototype.property_list = function () {
        return this.getRuleContext(0, Property_listContext);
    };
    Dim_propsContext.prototype.DIMENSION = function () { return this.tryGetToken(mdxParser.DIMENSION, 0); };
    Object.defineProperty(Dim_propsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_dim_props; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Dim_propsContext.prototype.enterRule = function (listener) {
        if (listener.enterDim_props) {
            listener.enterDim_props(this);
        }
    };
    // @Override
    Dim_propsContext.prototype.exitRule = function (listener) {
        if (listener.exitDim_props) {
            listener.exitDim_props(this);
        }
    };
    // @Override
    Dim_propsContext.prototype.accept = function (visitor) {
        if (visitor.visitDim_props) {
            return visitor.visitDim_props(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Dim_propsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Dim_propsContext = Dim_propsContext;
var Property_listContext = /** @class */ (function (_super) {
    __extends(Property_listContext, _super);
    function Property_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Property_listContext.prototype.property = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(PropertyContext);
        }
        else {
            return this.getRuleContext(i, PropertyContext);
        }
    };
    Property_listContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(mdxParser.COMMA);
        }
        else {
            return this.getToken(mdxParser.COMMA, i);
        }
    };
    Object.defineProperty(Property_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_property_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Property_listContext.prototype.enterRule = function (listener) {
        if (listener.enterProperty_list) {
            listener.enterProperty_list(this);
        }
    };
    // @Override
    Property_listContext.prototype.exitRule = function (listener) {
        if (listener.exitProperty_list) {
            listener.exitProperty_list(this);
        }
    };
    // @Override
    Property_listContext.prototype.accept = function (visitor) {
        if (visitor.visitProperty_list) {
            return visitor.visitProperty_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Property_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Property_listContext = Property_listContext;
var PropertyContext = /** @class */ (function (_super) {
    __extends(PropertyContext, _super);
    function PropertyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyContext.prototype.compound_id = function () {
        return this.getRuleContext(0, Compound_idContext);
    };
    Object.defineProperty(PropertyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_property; },
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
var Cube_specificationContext = /** @class */ (function (_super) {
    __extends(Cube_specificationContext, _super);
    function Cube_specificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cube_specificationContext.prototype.cube_name = function () {
        return this.getRuleContext(0, Cube_nameContext);
    };
    Object.defineProperty(Cube_specificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_cube_specification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cube_specificationContext.prototype.enterRule = function (listener) {
        if (listener.enterCube_specification) {
            listener.enterCube_specification(this);
        }
    };
    // @Override
    Cube_specificationContext.prototype.exitRule = function (listener) {
        if (listener.exitCube_specification) {
            listener.exitCube_specification(this);
        }
    };
    // @Override
    Cube_specificationContext.prototype.accept = function (visitor) {
        if (visitor.visitCube_specification) {
            return visitor.visitCube_specification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cube_specificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cube_specificationContext = Cube_specificationContext;
var Cube_nameContext = /** @class */ (function (_super) {
    __extends(Cube_nameContext, _super);
    function Cube_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cube_nameContext.prototype.compound_id = function () {
        return this.getRuleContext(0, Compound_idContext);
    };
    Object.defineProperty(Cube_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_cube_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cube_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterCube_name) {
            listener.enterCube_name(this);
        }
    };
    // @Override
    Cube_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitCube_name) {
            listener.exitCube_name(this);
        }
    };
    // @Override
    Cube_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitCube_name) {
            return visitor.visitCube_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cube_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cube_nameContext = Cube_nameContext;
var Slicer_specificationContext = /** @class */ (function (_super) {
    __extends(Slicer_specificationContext, _super);
    function Slicer_specificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Slicer_specificationContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Slicer_specificationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_slicer_specification; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Slicer_specificationContext.prototype.enterRule = function (listener) {
        if (listener.enterSlicer_specification) {
            listener.enterSlicer_specification(this);
        }
    };
    // @Override
    Slicer_specificationContext.prototype.exitRule = function (listener) {
        if (listener.exitSlicer_specification) {
            listener.exitSlicer_specification(this);
        }
    };
    // @Override
    Slicer_specificationContext.prototype.accept = function (visitor) {
        if (visitor.visitSlicer_specification) {
            return visitor.visitSlicer_specification(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Slicer_specificationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Slicer_specificationContext = Slicer_specificationContext;
var Cell_propsContext = /** @class */ (function (_super) {
    __extends(Cell_propsContext, _super);
    function Cell_propsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cell_propsContext.prototype.PROPERTIES = function () { return this.getToken(mdxParser.PROPERTIES, 0); };
    Cell_propsContext.prototype.cell_property_list = function () {
        return this.getRuleContext(0, Cell_property_listContext);
    };
    Cell_propsContext.prototype.CELL = function () { return this.tryGetToken(mdxParser.CELL, 0); };
    Object.defineProperty(Cell_propsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_cell_props; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cell_propsContext.prototype.enterRule = function (listener) {
        if (listener.enterCell_props) {
            listener.enterCell_props(this);
        }
    };
    // @Override
    Cell_propsContext.prototype.exitRule = function (listener) {
        if (listener.exitCell_props) {
            listener.exitCell_props(this);
        }
    };
    // @Override
    Cell_propsContext.prototype.accept = function (visitor) {
        if (visitor.visitCell_props) {
            return visitor.visitCell_props(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cell_propsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cell_propsContext = Cell_propsContext;
var Cell_property_listContext = /** @class */ (function (_super) {
    __extends(Cell_property_listContext, _super);
    function Cell_property_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cell_property_listContext.prototype.cell_property = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Cell_propertyContext);
        }
        else {
            return this.getRuleContext(i, Cell_propertyContext);
        }
    };
    Cell_property_listContext.prototype.COMMA = function () { return this.getToken(mdxParser.COMMA, 0); };
    Object.defineProperty(Cell_property_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_cell_property_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cell_property_listContext.prototype.enterRule = function (listener) {
        if (listener.enterCell_property_list) {
            listener.enterCell_property_list(this);
        }
    };
    // @Override
    Cell_property_listContext.prototype.exitRule = function (listener) {
        if (listener.exitCell_property_list) {
            listener.exitCell_property_list(this);
        }
    };
    // @Override
    Cell_property_listContext.prototype.accept = function (visitor) {
        if (visitor.visitCell_property_list) {
            return visitor.visitCell_property_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cell_property_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cell_property_listContext = Cell_property_listContext;
var Cell_propertyContext = /** @class */ (function (_super) {
    __extends(Cell_propertyContext, _super);
    function Cell_propertyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Cell_propertyContext.prototype.mandatory_cell_property = function () {
        return this.tryGetRuleContext(0, Mandatory_cell_propertyContext);
    };
    Cell_propertyContext.prototype.provider_specific_cell_property = function () {
        return this.tryGetRuleContext(0, Provider_specific_cell_propertyContext);
    };
    Object.defineProperty(Cell_propertyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_cell_property; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Cell_propertyContext.prototype.enterRule = function (listener) {
        if (listener.enterCell_property) {
            listener.enterCell_property(this);
        }
    };
    // @Override
    Cell_propertyContext.prototype.exitRule = function (listener) {
        if (listener.exitCell_property) {
            listener.exitCell_property(this);
        }
    };
    // @Override
    Cell_propertyContext.prototype.accept = function (visitor) {
        if (visitor.visitCell_property) {
            return visitor.visitCell_property(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Cell_propertyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Cell_propertyContext = Cell_propertyContext;
var Mandatory_cell_propertyContext = /** @class */ (function (_super) {
    __extends(Mandatory_cell_propertyContext, _super);
    function Mandatory_cell_propertyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Mandatory_cell_propertyContext.prototype.CELL_ORDINAL = function () { return this.tryGetToken(mdxParser.CELL_ORDINAL, 0); };
    Mandatory_cell_propertyContext.prototype.VALUE = function () { return this.tryGetToken(mdxParser.VALUE, 0); };
    Mandatory_cell_propertyContext.prototype.FORMATTED_VALUE = function () { return this.tryGetToken(mdxParser.FORMATTED_VALUE, 0); };
    Object.defineProperty(Mandatory_cell_propertyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_mandatory_cell_property; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Mandatory_cell_propertyContext.prototype.enterRule = function (listener) {
        if (listener.enterMandatory_cell_property) {
            listener.enterMandatory_cell_property(this);
        }
    };
    // @Override
    Mandatory_cell_propertyContext.prototype.exitRule = function (listener) {
        if (listener.exitMandatory_cell_property) {
            listener.exitMandatory_cell_property(this);
        }
    };
    // @Override
    Mandatory_cell_propertyContext.prototype.accept = function (visitor) {
        if (visitor.visitMandatory_cell_property) {
            return visitor.visitMandatory_cell_property(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Mandatory_cell_propertyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Mandatory_cell_propertyContext = Mandatory_cell_propertyContext;
var Provider_specific_cell_propertyContext = /** @class */ (function (_super) {
    __extends(Provider_specific_cell_propertyContext, _super);
    function Provider_specific_cell_propertyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Provider_specific_cell_propertyContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(Provider_specific_cell_propertyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_provider_specific_cell_property; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Provider_specific_cell_propertyContext.prototype.enterRule = function (listener) {
        if (listener.enterProvider_specific_cell_property) {
            listener.enterProvider_specific_cell_property(this);
        }
    };
    // @Override
    Provider_specific_cell_propertyContext.prototype.exitRule = function (listener) {
        if (listener.exitProvider_specific_cell_property) {
            listener.exitProvider_specific_cell_property(this);
        }
    };
    // @Override
    Provider_specific_cell_propertyContext.prototype.accept = function (visitor) {
        if (visitor.visitProvider_specific_cell_property) {
            return visitor.visitProvider_specific_cell_property(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Provider_specific_cell_propertyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Provider_specific_cell_propertyContext = Provider_specific_cell_propertyContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.value_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Value_expressionContext);
        }
        else {
            return this.getRuleContext(i, Value_expressionContext);
        }
    };
    ExpressionContext.prototype.COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(mdxParser.COLON);
        }
        else {
            return this.getToken(mdxParser.COLON, i);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    };
    // @Override
    ExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    };
    // @Override
    ExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionContext = ExpressionContext;
var Value_expressionContext = /** @class */ (function (_super) {
    __extends(Value_expressionContext, _super);
    function Value_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Value_expressionContext.prototype.term5 = function () {
        return this.getRuleContext(0, Term5Context);
    };
    Value_expressionContext.prototype.value_xor_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Value_xor_expressionContext);
        }
        else {
            return this.getRuleContext(i, Value_xor_expressionContext);
        }
    };
    Value_expressionContext.prototype.value_or_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Value_or_expressionContext);
        }
        else {
            return this.getRuleContext(i, Value_or_expressionContext);
        }
    };
    Object.defineProperty(Value_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_value_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Value_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterValue_expression) {
            listener.enterValue_expression(this);
        }
    };
    // @Override
    Value_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitValue_expression) {
            listener.exitValue_expression(this);
        }
    };
    // @Override
    Value_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitValue_expression) {
            return visitor.visitValue_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Value_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Value_expressionContext = Value_expressionContext;
var Value_xor_expressionContext = /** @class */ (function (_super) {
    __extends(Value_xor_expressionContext, _super);
    function Value_xor_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Value_xor_expressionContext.prototype.XOR = function () { return this.getToken(mdxParser.XOR, 0); };
    Value_xor_expressionContext.prototype.term5 = function () {
        return this.getRuleContext(0, Term5Context);
    };
    Object.defineProperty(Value_xor_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_value_xor_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Value_xor_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterValue_xor_expression) {
            listener.enterValue_xor_expression(this);
        }
    };
    // @Override
    Value_xor_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitValue_xor_expression) {
            listener.exitValue_xor_expression(this);
        }
    };
    // @Override
    Value_xor_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitValue_xor_expression) {
            return visitor.visitValue_xor_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Value_xor_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Value_xor_expressionContext = Value_xor_expressionContext;
var Value_or_expressionContext = /** @class */ (function (_super) {
    __extends(Value_or_expressionContext, _super);
    function Value_or_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Value_or_expressionContext.prototype.OR = function () { return this.getToken(mdxParser.OR, 0); };
    Value_or_expressionContext.prototype.term5 = function () {
        return this.getRuleContext(0, Term5Context);
    };
    Object.defineProperty(Value_or_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_value_or_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Value_or_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterValue_or_expression) {
            listener.enterValue_or_expression(this);
        }
    };
    // @Override
    Value_or_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitValue_or_expression) {
            listener.exitValue_or_expression(this);
        }
    };
    // @Override
    Value_or_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitValue_or_expression) {
            return visitor.visitValue_or_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Value_or_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Value_or_expressionContext = Value_or_expressionContext;
var Term5Context = /** @class */ (function (_super) {
    __extends(Term5Context, _super);
    function Term5Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Term5Context.prototype.term4 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Term4Context);
        }
        else {
            return this.getRuleContext(i, Term4Context);
        }
    };
    Term5Context.prototype.AND = function (i) {
        if (i === undefined) {
            return this.getTokens(mdxParser.AND);
        }
        else {
            return this.getToken(mdxParser.AND, i);
        }
    };
    Object.defineProperty(Term5Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_term5; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Term5Context.prototype.enterRule = function (listener) {
        if (listener.enterTerm5) {
            listener.enterTerm5(this);
        }
    };
    // @Override
    Term5Context.prototype.exitRule = function (listener) {
        if (listener.exitTerm5) {
            listener.exitTerm5(this);
        }
    };
    // @Override
    Term5Context.prototype.accept = function (visitor) {
        if (visitor.visitTerm5) {
            return visitor.visitTerm5(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Term5Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Term5Context = Term5Context;
var Term4Context = /** @class */ (function (_super) {
    __extends(Term4Context, _super);
    function Term4Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Term4Context.prototype.NOT = function () { return this.tryGetToken(mdxParser.NOT, 0); };
    Term4Context.prototype.term4 = function () {
        return this.tryGetRuleContext(0, Term4Context);
    };
    Term4Context.prototype.term3 = function () {
        return this.tryGetRuleContext(0, Term3Context);
    };
    Object.defineProperty(Term4Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_term4; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Term4Context.prototype.enterRule = function (listener) {
        if (listener.enterTerm4) {
            listener.enterTerm4(this);
        }
    };
    // @Override
    Term4Context.prototype.exitRule = function (listener) {
        if (listener.exitTerm4) {
            listener.exitTerm4(this);
        }
    };
    // @Override
    Term4Context.prototype.accept = function (visitor) {
        if (visitor.visitTerm4) {
            return visitor.visitTerm4(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Term4Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Term4Context = Term4Context;
var Term3Context = /** @class */ (function (_super) {
    __extends(Term3Context, _super);
    function Term3Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Term3Context.prototype.term2 = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Term2Context);
        }
        else {
            return this.getRuleContext(i, Term2Context);
        }
    };
    Term3Context.prototype.comp_op = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Comp_opContext);
        }
        else {
            return this.getRuleContext(i, Comp_opContext);
        }
    };
    Object.defineProperty(Term3Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_term3; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Term3Context.prototype.enterRule = function (listener) {
        if (listener.enterTerm3) {
            listener.enterTerm3(this);
        }
    };
    // @Override
    Term3Context.prototype.exitRule = function (listener) {
        if (listener.exitTerm3) {
            listener.exitTerm3(this);
        }
    };
    // @Override
    Term3Context.prototype.accept = function (visitor) {
        if (visitor.visitTerm3) {
            return visitor.visitTerm3(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Term3Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Term3Context = Term3Context;
var Term2Context = /** @class */ (function (_super) {
    __extends(Term2Context, _super);
    function Term2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Term2Context.prototype.term = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    };
    Term2Context.prototype.CONCAT = function (i) {
        if (i === undefined) {
            return this.getTokens(mdxParser.CONCAT);
        }
        else {
            return this.getToken(mdxParser.CONCAT, i);
        }
    };
    Term2Context.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(mdxParser.PLUS);
        }
        else {
            return this.getToken(mdxParser.PLUS, i);
        }
    };
    Term2Context.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(mdxParser.MINUS);
        }
        else {
            return this.getToken(mdxParser.MINUS, i);
        }
    };
    Object.defineProperty(Term2Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_term2; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Term2Context.prototype.enterRule = function (listener) {
        if (listener.enterTerm2) {
            listener.enterTerm2(this);
        }
    };
    // @Override
    Term2Context.prototype.exitRule = function (listener) {
        if (listener.exitTerm2) {
            listener.exitTerm2(this);
        }
    };
    // @Override
    Term2Context.prototype.accept = function (visitor) {
        if (visitor.visitTerm2) {
            return visitor.visitTerm2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Term2Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Term2Context = Term2Context;
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermContext.prototype.factor = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FactorContext);
        }
        else {
            return this.getRuleContext(i, FactorContext);
        }
    };
    TermContext.prototype.SOLIDUS = function (i) {
        if (i === undefined) {
            return this.getTokens(mdxParser.SOLIDUS);
        }
        else {
            return this.getToken(mdxParser.SOLIDUS, i);
        }
    };
    TermContext.prototype.ASTERISK = function (i) {
        if (i === undefined) {
            return this.getTokens(mdxParser.ASTERISK);
        }
        else {
            return this.getToken(mdxParser.ASTERISK, i);
        }
    };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_term; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TermContext.prototype.enterRule = function (listener) {
        if (listener.enterTerm) {
            listener.enterTerm(this);
        }
    };
    // @Override
    TermContext.prototype.exitRule = function (listener) {
        if (listener.exitTerm) {
            listener.exitTerm(this);
        }
    };
    // @Override
    TermContext.prototype.accept = function (visitor) {
        if (visitor.visitTerm) {
            return visitor.visitTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TermContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TermContext = TermContext;
var FactorContext = /** @class */ (function (_super) {
    __extends(FactorContext, _super);
    function FactorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FactorContext.prototype.MINUS = function () { return this.tryGetToken(mdxParser.MINUS, 0); };
    FactorContext.prototype.value_expression_primary = function () {
        return this.getRuleContext(0, Value_expression_primaryContext);
    };
    FactorContext.prototype.PLUS = function () { return this.tryGetToken(mdxParser.PLUS, 0); };
    Object.defineProperty(FactorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_factor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FactorContext.prototype.enterRule = function (listener) {
        if (listener.enterFactor) {
            listener.enterFactor(this);
        }
    };
    // @Override
    FactorContext.prototype.exitRule = function (listener) {
        if (listener.exitFactor) {
            listener.exitFactor(this);
        }
    };
    // @Override
    FactorContext.prototype.accept = function (visitor) {
        if (visitor.visitFactor) {
            return visitor.visitFactor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FactorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FactorContext = FactorContext;
var FunctionContext = /** @class */ (function (_super) {
    __extends(FunctionContext, _super);
    function FunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    FunctionContext.prototype.LPAREN = function () { return this.getToken(mdxParser.LPAREN, 0); };
    FunctionContext.prototype.RPAREN = function () { return this.getToken(mdxParser.RPAREN, 0); };
    FunctionContext.prototype.exp_list = function () {
        return this.tryGetRuleContext(0, Exp_listContext);
    };
    Object.defineProperty(FunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_function; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction) {
            listener.enterFunction(this);
        }
    };
    // @Override
    FunctionContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction) {
            listener.exitFunction(this);
        }
    };
    // @Override
    FunctionContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionContext = FunctionContext;
var Value_expression_primaryContext = /** @class */ (function (_super) {
    __extends(Value_expression_primaryContext, _super);
    function Value_expression_primaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Value_expression_primaryContext.prototype.value_expression_primary0 = function () {
        return this.getRuleContext(0, Value_expression_primary0Context);
    };
    Value_expression_primaryContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(mdxParser.DOT);
        }
        else {
            return this.getToken(mdxParser.DOT, i);
        }
    };
    Value_expression_primaryContext.prototype.unquoted_identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Unquoted_identifierContext);
        }
        else {
            return this.getRuleContext(i, Unquoted_identifierContext);
        }
    };
    Value_expression_primaryContext.prototype.quoted_identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Quoted_identifierContext);
        }
        else {
            return this.getRuleContext(i, Quoted_identifierContext);
        }
    };
    Value_expression_primaryContext.prototype.amp_quoted_identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Amp_quoted_identifierContext);
        }
        else {
            return this.getRuleContext(i, Amp_quoted_identifierContext);
        }
    };
    Value_expression_primaryContext.prototype.function = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionContext);
        }
        else {
            return this.getRuleContext(i, FunctionContext);
        }
    };
    Object.defineProperty(Value_expression_primaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_value_expression_primary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Value_expression_primaryContext.prototype.enterRule = function (listener) {
        if (listener.enterValue_expression_primary) {
            listener.enterValue_expression_primary(this);
        }
    };
    // @Override
    Value_expression_primaryContext.prototype.exitRule = function (listener) {
        if (listener.exitValue_expression_primary) {
            listener.exitValue_expression_primary(this);
        }
    };
    // @Override
    Value_expression_primaryContext.prototype.accept = function (visitor) {
        if (visitor.visitValue_expression_primary) {
            return visitor.visitValue_expression_primary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Value_expression_primaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Value_expression_primaryContext = Value_expression_primaryContext;
var Value_expression_primary0Context = /** @class */ (function (_super) {
    __extends(Value_expression_primary0Context, _super);
    function Value_expression_primary0Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Value_expression_primary0Context.prototype.function = function () {
        return this.tryGetRuleContext(0, FunctionContext);
    };
    Value_expression_primary0Context.prototype.LPAREN = function () { return this.tryGetToken(mdxParser.LPAREN, 0); };
    Value_expression_primary0Context.prototype.exp_list = function () {
        return this.tryGetRuleContext(0, Exp_listContext);
    };
    Value_expression_primary0Context.prototype.RPAREN = function () { return this.tryGetToken(mdxParser.RPAREN, 0); };
    Value_expression_primary0Context.prototype.LBRACE = function () { return this.tryGetToken(mdxParser.LBRACE, 0); };
    Value_expression_primary0Context.prototype.RBRACE = function () { return this.tryGetToken(mdxParser.RBRACE, 0); };
    Value_expression_primary0Context.prototype.case_expression = function () {
        return this.tryGetRuleContext(0, Case_expressionContext);
    };
    Value_expression_primary0Context.prototype.STRING = function () { return this.tryGetToken(mdxParser.STRING, 0); };
    Value_expression_primary0Context.prototype.NUMBER = function () { return this.tryGetToken(mdxParser.NUMBER, 0); };
    Value_expression_primary0Context.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(Value_expression_primary0Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_value_expression_primary0; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Value_expression_primary0Context.prototype.enterRule = function (listener) {
        if (listener.enterValue_expression_primary0) {
            listener.enterValue_expression_primary0(this);
        }
    };
    // @Override
    Value_expression_primary0Context.prototype.exitRule = function (listener) {
        if (listener.exitValue_expression_primary0) {
            listener.exitValue_expression_primary0(this);
        }
    };
    // @Override
    Value_expression_primary0Context.prototype.accept = function (visitor) {
        if (visitor.visitValue_expression_primary0) {
            return visitor.visitValue_expression_primary0(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Value_expression_primary0Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Value_expression_primary0Context = Value_expression_primary0Context;
var Exp_listContext = /** @class */ (function (_super) {
    __extends(Exp_listContext, _super);
    function Exp_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Exp_listContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Exp_listContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(mdxParser.COMMA);
        }
        else {
            return this.getToken(mdxParser.COMMA, i);
        }
    };
    Object.defineProperty(Exp_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_exp_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Exp_listContext.prototype.enterRule = function (listener) {
        if (listener.enterExp_list) {
            listener.enterExp_list(this);
        }
    };
    // @Override
    Exp_listContext.prototype.exitRule = function (listener) {
        if (listener.exitExp_list) {
            listener.exitExp_list(this);
        }
    };
    // @Override
    Exp_listContext.prototype.accept = function (visitor) {
        if (visitor.visitExp_list) {
            return visitor.visitExp_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Exp_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Exp_listContext = Exp_listContext;
var Case_expressionContext = /** @class */ (function (_super) {
    __extends(Case_expressionContext, _super);
    function Case_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Case_expressionContext.prototype.CASE = function () { return this.getToken(mdxParser.CASE, 0); };
    Case_expressionContext.prototype.END = function () { return this.getToken(mdxParser.END, 0); };
    Case_expressionContext.prototype.value_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Value_expressionContext);
        }
        else {
            return this.getRuleContext(i, Value_expressionContext);
        }
    };
    Case_expressionContext.prototype.when_list = function () {
        return this.tryGetRuleContext(0, When_listContext);
    };
    Case_expressionContext.prototype.ELSE = function () { return this.tryGetToken(mdxParser.ELSE, 0); };
    Object.defineProperty(Case_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_case_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Case_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterCase_expression) {
            listener.enterCase_expression(this);
        }
    };
    // @Override
    Case_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitCase_expression) {
            listener.exitCase_expression(this);
        }
    };
    // @Override
    Case_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitCase_expression) {
            return visitor.visitCase_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Case_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Case_expressionContext = Case_expressionContext;
var When_listContext = /** @class */ (function (_super) {
    __extends(When_listContext, _super);
    function When_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    When_listContext.prototype.when_clause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(When_clauseContext);
        }
        else {
            return this.getRuleContext(i, When_clauseContext);
        }
    };
    Object.defineProperty(When_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_when_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    When_listContext.prototype.enterRule = function (listener) {
        if (listener.enterWhen_list) {
            listener.enterWhen_list(this);
        }
    };
    // @Override
    When_listContext.prototype.exitRule = function (listener) {
        if (listener.exitWhen_list) {
            listener.exitWhen_list(this);
        }
    };
    // @Override
    When_listContext.prototype.accept = function (visitor) {
        if (visitor.visitWhen_list) {
            return visitor.visitWhen_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return When_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.When_listContext = When_listContext;
var When_clauseContext = /** @class */ (function (_super) {
    __extends(When_clauseContext, _super);
    function When_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    When_clauseContext.prototype.WHEN = function () { return this.getToken(mdxParser.WHEN, 0); };
    When_clauseContext.prototype.value_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Value_expressionContext);
        }
        else {
            return this.getRuleContext(i, Value_expressionContext);
        }
    };
    When_clauseContext.prototype.THEN = function () { return this.getToken(mdxParser.THEN, 0); };
    Object.defineProperty(When_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_when_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    When_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterWhen_clause) {
            listener.enterWhen_clause(this);
        }
    };
    // @Override
    When_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitWhen_clause) {
            listener.exitWhen_clause(this);
        }
    };
    // @Override
    When_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitWhen_clause) {
            return visitor.visitWhen_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return When_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.When_clauseContext = When_clauseContext;
var Comp_opContext = /** @class */ (function (_super) {
    __extends(Comp_opContext, _super);
    function Comp_opContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Comp_opContext.prototype.EQ = function () { return this.tryGetToken(mdxParser.EQ, 0); };
    Comp_opContext.prototype.NE = function () { return this.tryGetToken(mdxParser.NE, 0); };
    Comp_opContext.prototype.LT = function () { return this.tryGetToken(mdxParser.LT, 0); };
    Comp_opContext.prototype.GT = function () { return this.tryGetToken(mdxParser.GT, 0); };
    Comp_opContext.prototype.LE = function () { return this.tryGetToken(mdxParser.LE, 0); };
    Comp_opContext.prototype.GE = function () { return this.tryGetToken(mdxParser.GE, 0); };
    Object.defineProperty(Comp_opContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_comp_op; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Comp_opContext.prototype.enterRule = function (listener) {
        if (listener.enterComp_op) {
            listener.enterComp_op(this);
        }
    };
    // @Override
    Comp_opContext.prototype.exitRule = function (listener) {
        if (listener.exitComp_op) {
            listener.exitComp_op(this);
        }
    };
    // @Override
    Comp_opContext.prototype.accept = function (visitor) {
        if (visitor.visitComp_op) {
            return visitor.visitComp_op(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Comp_opContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Comp_opContext = Comp_opContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.unquoted_identifier = function () {
        return this.tryGetRuleContext(0, Unquoted_identifierContext);
    };
    IdentifierContext.prototype.quoted_identifier = function () {
        return this.tryGetRuleContext(0, Quoted_identifierContext);
    };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_identifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    };
    // @Override
    IdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    };
    // @Override
    IdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierContext = IdentifierContext;
var Unquoted_identifierContext = /** @class */ (function (_super) {
    __extends(Unquoted_identifierContext, _super);
    function Unquoted_identifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Unquoted_identifierContext.prototype.keyword = function () {
        return this.tryGetRuleContext(0, KeywordContext);
    };
    Unquoted_identifierContext.prototype.ID = function () { return this.tryGetToken(mdxParser.ID, 0); };
    Object.defineProperty(Unquoted_identifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_unquoted_identifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Unquoted_identifierContext.prototype.enterRule = function (listener) {
        if (listener.enterUnquoted_identifier) {
            listener.enterUnquoted_identifier(this);
        }
    };
    // @Override
    Unquoted_identifierContext.prototype.exitRule = function (listener) {
        if (listener.exitUnquoted_identifier) {
            listener.exitUnquoted_identifier(this);
        }
    };
    // @Override
    Unquoted_identifierContext.prototype.accept = function (visitor) {
        if (visitor.visitUnquoted_identifier) {
            return visitor.visitUnquoted_identifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Unquoted_identifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Unquoted_identifierContext = Unquoted_identifierContext;
var Amp_quoted_identifierContext = /** @class */ (function (_super) {
    __extends(Amp_quoted_identifierContext, _super);
    function Amp_quoted_identifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Amp_quoted_identifierContext.prototype.AMP_QUOTED_ID = function () { return this.getToken(mdxParser.AMP_QUOTED_ID, 0); };
    Object.defineProperty(Amp_quoted_identifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_amp_quoted_identifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Amp_quoted_identifierContext.prototype.enterRule = function (listener) {
        if (listener.enterAmp_quoted_identifier) {
            listener.enterAmp_quoted_identifier(this);
        }
    };
    // @Override
    Amp_quoted_identifierContext.prototype.exitRule = function (listener) {
        if (listener.exitAmp_quoted_identifier) {
            listener.exitAmp_quoted_identifier(this);
        }
    };
    // @Override
    Amp_quoted_identifierContext.prototype.accept = function (visitor) {
        if (visitor.visitAmp_quoted_identifier) {
            return visitor.visitAmp_quoted_identifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Amp_quoted_identifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Amp_quoted_identifierContext = Amp_quoted_identifierContext;
var Quoted_identifierContext = /** @class */ (function (_super) {
    __extends(Quoted_identifierContext, _super);
    function Quoted_identifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Quoted_identifierContext.prototype.QUOTED_ID = function () { return this.getToken(mdxParser.QUOTED_ID, 0); };
    Object.defineProperty(Quoted_identifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_quoted_identifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Quoted_identifierContext.prototype.enterRule = function (listener) {
        if (listener.enterQuoted_identifier) {
            listener.enterQuoted_identifier(this);
        }
    };
    // @Override
    Quoted_identifierContext.prototype.exitRule = function (listener) {
        if (listener.exitQuoted_identifier) {
            listener.exitQuoted_identifier(this);
        }
    };
    // @Override
    Quoted_identifierContext.prototype.accept = function (visitor) {
        if (visitor.visitQuoted_identifier) {
            return visitor.visitQuoted_identifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Quoted_identifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Quoted_identifierContext = Quoted_identifierContext;
var KeywordContext = /** @class */ (function (_super) {
    __extends(KeywordContext, _super);
    function KeywordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    KeywordContext.prototype.DIMENSION = function () { return this.tryGetToken(mdxParser.DIMENSION, 0); };
    KeywordContext.prototype.PROPERTIES = function () { return this.tryGetToken(mdxParser.PROPERTIES, 0); };
    Object.defineProperty(KeywordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return mdxParser.RULE_keyword; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KeywordContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyword) {
            listener.enterKeyword(this);
        }
    };
    // @Override
    KeywordContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyword) {
            listener.exitKeyword(this);
        }
    };
    // @Override
    KeywordContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyword) {
            return visitor.visitKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KeywordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KeywordContext = KeywordContext;
