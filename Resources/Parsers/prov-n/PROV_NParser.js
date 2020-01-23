"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/prov-n/PROV_N.g4 by ANTLR 4.7.3-SNAPSHOT
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
var PROV_NParser = /** @class */ (function (_super) {
    __extends(PROV_NParser, _super);
    function PROV_NParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(PROV_NParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(PROV_NParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return PROV_NParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PROV_NParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "PROV_N.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PROV_NParser.prototype, "ruleNames", {
        // @Override
        get: function () { return PROV_NParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PROV_NParser.prototype, "serializedATN", {
        // @Override
        get: function () { return PROV_NParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    PROV_NParser.prototype.document = function () {
        var _localctx = new DocumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, PROV_NParser.RULE_document);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 102;
                this.match(PROV_NParser.DOCUMENT);
                this.state = 104;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PROV_NParser.T__0 || _la === PROV_NParser.T__1) {
                    {
                        this.state = 103;
                        this.namespaceDeclarations();
                    }
                }
                this.state = 109;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PROV_NParser.T__2) | (1 << PROV_NParser.T__10) | (1 << PROV_NParser.T__11) | (1 << PROV_NParser.T__13) | (1 << PROV_NParser.T__14) | (1 << PROV_NParser.T__15) | (1 << PROV_NParser.T__16) | (1 << PROV_NParser.T__17) | (1 << PROV_NParser.T__18) | (1 << PROV_NParser.T__19) | (1 << PROV_NParser.T__20) | (1 << PROV_NParser.T__21) | (1 << PROV_NParser.T__22) | (1 << PROV_NParser.T__23) | (1 << PROV_NParser.T__24) | (1 << PROV_NParser.T__25) | (1 << PROV_NParser.T__26))) !== 0) || _la === PROV_NParser.PREFX || _la === PROV_NParser.QUALIFIED_NAME) {
                    {
                        {
                            this.state = 106;
                            this.expression();
                        }
                    }
                    this.state = 111;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 119;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PROV_NParser.BUNDLE) {
                    {
                        this.state = 112;
                        this.bundle();
                        this.state = 116;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PROV_NParser.BUNDLE) {
                            {
                                {
                                    this.state = 113;
                                    this.bundle();
                                }
                            }
                            this.state = 118;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 121;
                this.match(PROV_NParser.ENDDOCUMENT);
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
    PROV_NParser.prototype.namespaceDeclarations = function () {
        var _localctx = new NamespaceDeclarationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, PROV_NParser.RULE_namespaceDeclarations);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 125;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PROV_NParser.T__0:
                        {
                            this.state = 123;
                            this.defaultNamespaceDeclaration();
                        }
                        break;
                    case PROV_NParser.T__1:
                        {
                            this.state = 124;
                            this.namespaceDeclaration();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 130;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PROV_NParser.T__1) {
                    {
                        {
                            this.state = 127;
                            this.namespaceDeclaration();
                        }
                    }
                    this.state = 132;
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
    PROV_NParser.prototype.defaultNamespaceDeclaration = function () {
        var _localctx = new DefaultNamespaceDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, PROV_NParser.RULE_defaultNamespaceDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 133;
                this.match(PROV_NParser.T__0);
                this.state = 134;
                this.match(PROV_NParser.IRI_REF);
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
    PROV_NParser.prototype.namespaceDeclaration = function () {
        var _localctx = new NamespaceDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, PROV_NParser.RULE_namespaceDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 136;
                this.match(PROV_NParser.T__1);
                this.state = 137;
                this.match(PROV_NParser.PREFX);
                this.state = 138;
                this.namespace();
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
    PROV_NParser.prototype.namespace = function () {
        var _localctx = new NamespaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, PROV_NParser.RULE_namespace);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 140;
                this.match(PROV_NParser.IRI_REF);
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
    PROV_NParser.prototype.bundle = function () {
        var _localctx = new BundleContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, PROV_NParser.RULE_bundle);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 142;
                this.match(PROV_NParser.BUNDLE);
                this.state = 143;
                this.identifier();
                this.state = 145;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PROV_NParser.T__0 || _la === PROV_NParser.T__1) {
                    {
                        this.state = 144;
                        this.namespaceDeclarations();
                    }
                }
                this.state = 150;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PROV_NParser.T__2) | (1 << PROV_NParser.T__10) | (1 << PROV_NParser.T__11) | (1 << PROV_NParser.T__13) | (1 << PROV_NParser.T__14) | (1 << PROV_NParser.T__15) | (1 << PROV_NParser.T__16) | (1 << PROV_NParser.T__17) | (1 << PROV_NParser.T__18) | (1 << PROV_NParser.T__19) | (1 << PROV_NParser.T__20) | (1 << PROV_NParser.T__21) | (1 << PROV_NParser.T__22) | (1 << PROV_NParser.T__23) | (1 << PROV_NParser.T__24) | (1 << PROV_NParser.T__25) | (1 << PROV_NParser.T__26))) !== 0) || _la === PROV_NParser.PREFX || _la === PROV_NParser.QUALIFIED_NAME) {
                    {
                        {
                            this.state = 147;
                            this.expression();
                        }
                    }
                    this.state = 152;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 153;
                this.match(PROV_NParser.ENDBUNDLE);
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
    PROV_NParser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, PROV_NParser.RULE_identifier);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 155;
                _la = this._input.LA(1);
                if (!(_la === PROV_NParser.PREFX || _la === PROV_NParser.QUALIFIED_NAME)) {
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
    PROV_NParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, PROV_NParser.RULE_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 175;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PROV_NParser.T__2:
                        {
                            this.state = 157;
                            this.entityExpression();
                        }
                        break;
                    case PROV_NParser.T__10:
                        {
                            this.state = 158;
                            this.activityExpression();
                        }
                        break;
                    case PROV_NParser.T__11:
                        {
                            this.state = 159;
                            this.generationExpression();
                        }
                        break;
                    case PROV_NParser.T__13:
                        {
                            this.state = 160;
                            this.usageExpression();
                        }
                        break;
                    case PROV_NParser.T__14:
                        {
                            this.state = 161;
                            this.startExpression();
                        }
                        break;
                    case PROV_NParser.T__15:
                        {
                            this.state = 162;
                            this.endExpression();
                        }
                        break;
                    case PROV_NParser.T__16:
                        {
                            this.state = 163;
                            this.invalidationExpression();
                        }
                        break;
                    case PROV_NParser.T__17:
                        {
                            this.state = 164;
                            this.communicationExpression();
                        }
                        break;
                    case PROV_NParser.T__18:
                        {
                            this.state = 165;
                            this.agentExpression();
                        }
                        break;
                    case PROV_NParser.T__19:
                        {
                            this.state = 166;
                            this.associationExpression();
                        }
                        break;
                    case PROV_NParser.T__20:
                        {
                            this.state = 167;
                            this.attributionExpression();
                        }
                        break;
                    case PROV_NParser.T__21:
                        {
                            this.state = 168;
                            this.delegationExpression();
                        }
                        break;
                    case PROV_NParser.T__22:
                        {
                            this.state = 169;
                            this.derivationExpression();
                        }
                        break;
                    case PROV_NParser.T__23:
                        {
                            this.state = 170;
                            this.influenceExpression();
                        }
                        break;
                    case PROV_NParser.T__24:
                        {
                            this.state = 171;
                            this.alternateExpression();
                        }
                        break;
                    case PROV_NParser.T__25:
                        {
                            this.state = 172;
                            this.specializationExpression();
                        }
                        break;
                    case PROV_NParser.T__26:
                        {
                            this.state = 173;
                            this.membershipExpression();
                        }
                        break;
                    case PROV_NParser.PREFX:
                    case PROV_NParser.QUALIFIED_NAME:
                        {
                            this.state = 174;
                            this.extensibilityExpression();
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
    PROV_NParser.prototype.entityExpression = function () {
        var _localctx = new EntityExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, PROV_NParser.RULE_entityExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 177;
                this.match(PROV_NParser.T__2);
                this.state = 178;
                this.match(PROV_NParser.T__3);
                this.state = 179;
                this.identifier();
                this.state = 180;
                this.optionalAttributeValuePairs();
                this.state = 181;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.optionalAttributeValuePairs = function () {
        var _localctx = new OptionalAttributeValuePairsContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, PROV_NParser.RULE_optionalAttributeValuePairs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 188;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PROV_NParser.T__5) {
                    {
                        this.state = 183;
                        this.match(PROV_NParser.T__5);
                        this.state = 184;
                        this.match(PROV_NParser.T__6);
                        this.state = 185;
                        this.attributeValuePairs();
                        this.state = 186;
                        this.match(PROV_NParser.T__7);
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
    PROV_NParser.prototype.attributeValuePairs = function () {
        var _localctx = new AttributeValuePairsContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, PROV_NParser.RULE_attributeValuePairs);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 199;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PROV_NParser.T__7:
                        // tslint:disable-next-line:no-empty
                        {
                        }
                        break;
                    case PROV_NParser.PREFX:
                    case PROV_NParser.QUALIFIED_NAME:
                        {
                            this.state = 191;
                            this.attributeValuePair();
                            this.state = 196;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === PROV_NParser.T__5) {
                                {
                                    {
                                        this.state = 192;
                                        this.match(PROV_NParser.T__5);
                                        this.state = 193;
                                        this.attributeValuePair();
                                    }
                                }
                                this.state = 198;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
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
    PROV_NParser.prototype.attributeValuePair = function () {
        var _localctx = new AttributeValuePairContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, PROV_NParser.RULE_attributeValuePair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 201;
                this.attribute();
                this.state = 202;
                this.match(PROV_NParser.T__8);
                this.state = 203;
                this.literal();
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
    PROV_NParser.prototype.attribute = function () {
        var _localctx = new AttributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, PROV_NParser.RULE_attribute);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 205;
                _la = this._input.LA(1);
                if (!(_la === PROV_NParser.PREFX || _la === PROV_NParser.QUALIFIED_NAME)) {
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
    PROV_NParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, PROV_NParser.RULE_literal);
        try {
            this.state = 209;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 207;
                        this.typedLiteral();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 208;
                        this.convenienceNotation();
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
    PROV_NParser.prototype.typedLiteral = function () {
        var _localctx = new TypedLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, PROV_NParser.RULE_typedLiteral);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 211;
                this.match(PROV_NParser.STRING_LITERAL);
                this.state = 212;
                this.match(PROV_NParser.T__9);
                this.state = 213;
                this.datatype();
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
    PROV_NParser.prototype.datatype = function () {
        var _localctx = new DatatypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, PROV_NParser.RULE_datatype);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 215;
                _la = this._input.LA(1);
                if (!(_la === PROV_NParser.PREFX || _la === PROV_NParser.QUALIFIED_NAME)) {
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
    PROV_NParser.prototype.convenienceNotation = function () {
        var _localctx = new ConvenienceNotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, PROV_NParser.RULE_convenienceNotation);
        var _la;
        try {
            this.state = 223;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PROV_NParser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 217;
                        this.match(PROV_NParser.STRING_LITERAL);
                        this.state = 219;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PROV_NParser.LANGTAG) {
                            {
                                this.state = 218;
                                this.match(PROV_NParser.LANGTAG);
                            }
                        }
                    }
                    break;
                case PROV_NParser.INT_LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 221;
                        this.match(PROV_NParser.INT_LITERAL);
                    }
                    break;
                case PROV_NParser.QUALIFIED_NAME_LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 222;
                        this.match(PROV_NParser.QUALIFIED_NAME_LITERAL);
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
    PROV_NParser.prototype.activityExpression = function () {
        var _localctx = new ActivityExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, PROV_NParser.RULE_activityExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 225;
                this.match(PROV_NParser.T__10);
                this.state = 226;
                this.match(PROV_NParser.T__3);
                this.state = 227;
                this.identifier();
                this.state = 233;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            this.state = 228;
                            this.match(PROV_NParser.T__5);
                            this.state = 229;
                            this.timeOrMarker();
                            this.state = 230;
                            this.match(PROV_NParser.T__5);
                            this.state = 231;
                            this.timeOrMarker();
                        }
                        break;
                }
                this.state = 235;
                this.optionalAttributeValuePairs();
                this.state = 236;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.timeOrMarker = function () {
        var _localctx = new TimeOrMarkerContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, PROV_NParser.RULE_timeOrMarker);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 240;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PROV_NParser.DATETIME:
                        {
                            this.state = 238;
                            this.time();
                        }
                        break;
                    case PROV_NParser.MINUS:
                        {
                            this.state = 239;
                            this.match(PROV_NParser.MINUS);
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
    PROV_NParser.prototype.time = function () {
        var _localctx = new TimeContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, PROV_NParser.RULE_time);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 242;
                this.match(PROV_NParser.DATETIME);
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
    PROV_NParser.prototype.generationExpression = function () {
        var _localctx = new GenerationExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, PROV_NParser.RULE_generationExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 244;
                this.match(PROV_NParser.T__11);
                this.state = 245;
                this.match(PROV_NParser.T__3);
                this.state = 246;
                this.optionalIdentifier();
                this.state = 247;
                this.eIdentifier();
                this.state = 253;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                    case 1:
                        {
                            this.state = 248;
                            this.match(PROV_NParser.T__5);
                            this.state = 249;
                            this.aIdentifierOrMarker();
                            this.state = 250;
                            this.match(PROV_NParser.T__5);
                            this.state = 251;
                            this.timeOrMarker();
                        }
                        break;
                }
                this.state = 255;
                this.optionalAttributeValuePairs();
                this.state = 256;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.optionalIdentifier = function () {
        var _localctx = new OptionalIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, PROV_NParser.RULE_optionalIdentifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 261;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                    case 1:
                        {
                            this.state = 258;
                            this.identifierOrMarker();
                            this.state = 259;
                            this.match(PROV_NParser.T__12);
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
    PROV_NParser.prototype.identifierOrMarker = function () {
        var _localctx = new IdentifierOrMarkerContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, PROV_NParser.RULE_identifierOrMarker);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 265;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PROV_NParser.PREFX:
                    case PROV_NParser.QUALIFIED_NAME:
                        {
                            this.state = 263;
                            this.identifier();
                        }
                        break;
                    case PROV_NParser.MINUS:
                        {
                            this.state = 264;
                            this.match(PROV_NParser.MINUS);
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
    PROV_NParser.prototype.eIdentifier = function () {
        var _localctx = new EIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, PROV_NParser.RULE_eIdentifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 267;
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
    PROV_NParser.prototype.eIdentifierOrMarker = function () {
        var _localctx = new EIdentifierOrMarkerContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, PROV_NParser.RULE_eIdentifierOrMarker);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 271;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PROV_NParser.PREFX:
                    case PROV_NParser.QUALIFIED_NAME:
                        {
                            this.state = 269;
                            this.eIdentifier();
                        }
                        break;
                    case PROV_NParser.MINUS:
                        {
                            this.state = 270;
                            this.match(PROV_NParser.MINUS);
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
    PROV_NParser.prototype.aIdentifierOrMarker = function () {
        var _localctx = new AIdentifierOrMarkerContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, PROV_NParser.RULE_aIdentifierOrMarker);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 275;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PROV_NParser.PREFX:
                    case PROV_NParser.QUALIFIED_NAME:
                        {
                            this.state = 273;
                            this.aIdentifier();
                        }
                        break;
                    case PROV_NParser.MINUS:
                        {
                            this.state = 274;
                            this.match(PROV_NParser.MINUS);
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
    PROV_NParser.prototype.aIdentifier = function () {
        var _localctx = new AIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, PROV_NParser.RULE_aIdentifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 277;
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
    PROV_NParser.prototype.agIdentifierOrMarker = function () {
        var _localctx = new AgIdentifierOrMarkerContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, PROV_NParser.RULE_agIdentifierOrMarker);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 281;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PROV_NParser.PREFX:
                    case PROV_NParser.QUALIFIED_NAME:
                        {
                            this.state = 279;
                            this.agIdentifier();
                        }
                        break;
                    case PROV_NParser.MINUS:
                        {
                            this.state = 280;
                            this.match(PROV_NParser.MINUS);
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
    PROV_NParser.prototype.agIdentifier = function () {
        var _localctx = new AgIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, PROV_NParser.RULE_agIdentifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 283;
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
    PROV_NParser.prototype.cIdentifier = function () {
        var _localctx = new CIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, PROV_NParser.RULE_cIdentifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 285;
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
    PROV_NParser.prototype.gIdentifier = function () {
        var _localctx = new GIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, PROV_NParser.RULE_gIdentifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 287;
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
    PROV_NParser.prototype.gIdentifierOrMarker = function () {
        var _localctx = new GIdentifierOrMarkerContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, PROV_NParser.RULE_gIdentifierOrMarker);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 291;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PROV_NParser.PREFX:
                    case PROV_NParser.QUALIFIED_NAME:
                        {
                            this.state = 289;
                            this.gIdentifier();
                        }
                        break;
                    case PROV_NParser.MINUS:
                        {
                            this.state = 290;
                            this.match(PROV_NParser.MINUS);
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
    PROV_NParser.prototype.uIdentifier = function () {
        var _localctx = new UIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, PROV_NParser.RULE_uIdentifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 293;
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
    PROV_NParser.prototype.uIdentifierOrMarker = function () {
        var _localctx = new UIdentifierOrMarkerContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, PROV_NParser.RULE_uIdentifierOrMarker);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 297;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case PROV_NParser.PREFX:
                    case PROV_NParser.QUALIFIED_NAME:
                        {
                            this.state = 295;
                            this.uIdentifier();
                        }
                        break;
                    case PROV_NParser.MINUS:
                        {
                            this.state = 296;
                            this.match(PROV_NParser.MINUS);
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
    PROV_NParser.prototype.usageExpression = function () {
        var _localctx = new UsageExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, PROV_NParser.RULE_usageExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 299;
                this.match(PROV_NParser.T__13);
                this.state = 300;
                this.match(PROV_NParser.T__3);
                this.state = 301;
                this.optionalIdentifier();
                this.state = 302;
                this.aIdentifier();
                this.state = 308;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                    case 1:
                        {
                            this.state = 303;
                            this.match(PROV_NParser.T__5);
                            this.state = 304;
                            this.eIdentifierOrMarker();
                            this.state = 305;
                            this.match(PROV_NParser.T__5);
                            this.state = 306;
                            this.timeOrMarker();
                        }
                        break;
                }
                this.state = 310;
                this.optionalAttributeValuePairs();
                this.state = 311;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.startExpression = function () {
        var _localctx = new StartExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, PROV_NParser.RULE_startExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 313;
                this.match(PROV_NParser.T__14);
                this.state = 314;
                this.match(PROV_NParser.T__3);
                this.state = 315;
                this.optionalIdentifier();
                this.state = 316;
                this.aIdentifier();
                this.state = 324;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                    case 1:
                        {
                            this.state = 317;
                            this.match(PROV_NParser.T__5);
                            this.state = 318;
                            this.eIdentifierOrMarker();
                            this.state = 319;
                            this.match(PROV_NParser.T__5);
                            this.state = 320;
                            this.aIdentifierOrMarker();
                            this.state = 321;
                            this.match(PROV_NParser.T__5);
                            this.state = 322;
                            this.timeOrMarker();
                        }
                        break;
                }
                this.state = 326;
                this.optionalAttributeValuePairs();
                this.state = 327;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.endExpression = function () {
        var _localctx = new EndExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, PROV_NParser.RULE_endExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 329;
                this.match(PROV_NParser.T__15);
                this.state = 330;
                this.match(PROV_NParser.T__3);
                this.state = 331;
                this.optionalIdentifier();
                this.state = 332;
                this.aIdentifier();
                this.state = 340;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                    case 1:
                        {
                            this.state = 333;
                            this.match(PROV_NParser.T__5);
                            this.state = 334;
                            this.eIdentifierOrMarker();
                            this.state = 335;
                            this.match(PROV_NParser.T__5);
                            this.state = 336;
                            this.aIdentifierOrMarker();
                            this.state = 337;
                            this.match(PROV_NParser.T__5);
                            this.state = 338;
                            this.timeOrMarker();
                        }
                        break;
                }
                this.state = 342;
                this.optionalAttributeValuePairs();
                this.state = 343;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.invalidationExpression = function () {
        var _localctx = new InvalidationExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, PROV_NParser.RULE_invalidationExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 345;
                this.match(PROV_NParser.T__16);
                this.state = 346;
                this.match(PROV_NParser.T__3);
                this.state = 347;
                this.optionalIdentifier();
                this.state = 348;
                this.eIdentifier();
                this.state = 354;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                    case 1:
                        {
                            this.state = 349;
                            this.match(PROV_NParser.T__5);
                            this.state = 350;
                            this.aIdentifierOrMarker();
                            this.state = 351;
                            this.match(PROV_NParser.T__5);
                            this.state = 352;
                            this.timeOrMarker();
                        }
                        break;
                }
                this.state = 356;
                this.optionalAttributeValuePairs();
                this.state = 357;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.communicationExpression = function () {
        var _localctx = new CommunicationExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, PROV_NParser.RULE_communicationExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 359;
                this.match(PROV_NParser.T__17);
                this.state = 360;
                this.match(PROV_NParser.T__3);
                this.state = 361;
                this.optionalIdentifier();
                this.state = 362;
                this.aIdentifier();
                this.state = 363;
                this.match(PROV_NParser.T__5);
                this.state = 364;
                this.aIdentifier();
                this.state = 365;
                this.optionalAttributeValuePairs();
                this.state = 366;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.agentExpression = function () {
        var _localctx = new AgentExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, PROV_NParser.RULE_agentExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 368;
                this.match(PROV_NParser.T__18);
                this.state = 369;
                this.match(PROV_NParser.T__3);
                this.state = 370;
                this.identifier();
                this.state = 371;
                this.optionalAttributeValuePairs();
                this.state = 372;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.associationExpression = function () {
        var _localctx = new AssociationExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, PROV_NParser.RULE_associationExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 374;
                this.match(PROV_NParser.T__19);
                this.state = 375;
                this.match(PROV_NParser.T__3);
                this.state = 376;
                this.optionalIdentifier();
                this.state = 377;
                this.aIdentifier();
                this.state = 383;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                    case 1:
                        {
                            this.state = 378;
                            this.match(PROV_NParser.T__5);
                            this.state = 379;
                            this.agIdentifierOrMarker();
                            this.state = 380;
                            this.match(PROV_NParser.T__5);
                            this.state = 381;
                            this.eIdentifierOrMarker();
                        }
                        break;
                }
                this.state = 385;
                this.optionalAttributeValuePairs();
                this.state = 386;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.attributionExpression = function () {
        var _localctx = new AttributionExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, PROV_NParser.RULE_attributionExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 388;
                this.match(PROV_NParser.T__20);
                this.state = 389;
                this.match(PROV_NParser.T__3);
                this.state = 390;
                this.optionalIdentifier();
                this.state = 391;
                this.eIdentifier();
                this.state = 392;
                this.match(PROV_NParser.T__5);
                this.state = 393;
                this.agIdentifier();
                this.state = 394;
                this.optionalAttributeValuePairs();
                this.state = 395;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.delegationExpression = function () {
        var _localctx = new DelegationExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, PROV_NParser.RULE_delegationExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 397;
                this.match(PROV_NParser.T__21);
                this.state = 398;
                this.match(PROV_NParser.T__3);
                this.state = 399;
                this.optionalIdentifier();
                this.state = 400;
                this.agIdentifier();
                this.state = 401;
                this.match(PROV_NParser.T__5);
                this.state = 402;
                this.agIdentifier();
                this.state = 405;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                    case 1:
                        {
                            this.state = 403;
                            this.match(PROV_NParser.T__5);
                            this.state = 404;
                            this.aIdentifierOrMarker();
                        }
                        break;
                }
                this.state = 407;
                this.optionalAttributeValuePairs();
                this.state = 408;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.derivationExpression = function () {
        var _localctx = new DerivationExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, PROV_NParser.RULE_derivationExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 410;
                this.match(PROV_NParser.T__22);
                this.state = 411;
                this.match(PROV_NParser.T__3);
                this.state = 412;
                this.optionalIdentifier();
                this.state = 413;
                this.eIdentifier();
                this.state = 414;
                this.match(PROV_NParser.T__5);
                this.state = 415;
                this.eIdentifier();
                this.state = 423;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                    case 1:
                        {
                            this.state = 416;
                            this.match(PROV_NParser.T__5);
                            this.state = 417;
                            this.aIdentifierOrMarker();
                            this.state = 418;
                            this.match(PROV_NParser.T__5);
                            this.state = 419;
                            this.gIdentifierOrMarker();
                            this.state = 420;
                            this.match(PROV_NParser.T__5);
                            this.state = 421;
                            this.uIdentifierOrMarker();
                        }
                        break;
                }
                this.state = 425;
                this.optionalAttributeValuePairs();
                this.state = 426;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.influenceExpression = function () {
        var _localctx = new InfluenceExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, PROV_NParser.RULE_influenceExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 428;
                this.match(PROV_NParser.T__23);
                this.state = 429;
                this.match(PROV_NParser.T__3);
                this.state = 430;
                this.optionalIdentifier();
                this.state = 431;
                this.eIdentifier();
                this.state = 432;
                this.match(PROV_NParser.T__5);
                this.state = 433;
                this.eIdentifier();
                this.state = 434;
                this.optionalAttributeValuePairs();
                this.state = 435;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.alternateExpression = function () {
        var _localctx = new AlternateExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, PROV_NParser.RULE_alternateExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 437;
                this.match(PROV_NParser.T__24);
                this.state = 438;
                this.match(PROV_NParser.T__3);
                this.state = 439;
                this.eIdentifier();
                this.state = 440;
                this.match(PROV_NParser.T__5);
                this.state = 441;
                this.eIdentifier();
                this.state = 442;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.specializationExpression = function () {
        var _localctx = new SpecializationExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, PROV_NParser.RULE_specializationExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 444;
                this.match(PROV_NParser.T__25);
                this.state = 445;
                this.match(PROV_NParser.T__3);
                this.state = 446;
                this.eIdentifier();
                this.state = 447;
                this.match(PROV_NParser.T__5);
                this.state = 448;
                this.eIdentifier();
                this.state = 449;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.membershipExpression = function () {
        var _localctx = new MembershipExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, PROV_NParser.RULE_membershipExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 451;
                this.match(PROV_NParser.T__26);
                this.state = 452;
                this.match(PROV_NParser.T__3);
                this.state = 453;
                this.cIdentifier();
                this.state = 454;
                this.match(PROV_NParser.T__5);
                this.state = 455;
                this.eIdentifier();
                this.state = 456;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.extensibilityExpression = function () {
        var _localctx = new ExtensibilityExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, PROV_NParser.RULE_extensibilityExpression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 458;
                _la = this._input.LA(1);
                if (!(_la === PROV_NParser.PREFX || _la === PROV_NParser.QUALIFIED_NAME)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 459;
                this.match(PROV_NParser.T__3);
                this.state = 460;
                this.optionalIdentifier();
                this.state = 461;
                this.extensibilityArgument();
                this.state = 466;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 462;
                                this.match(PROV_NParser.T__5);
                                this.state = 463;
                                this.extensibilityArgument();
                            }
                        }
                    }
                    this.state = 468;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
                }
                this.state = 469;
                this.optionalAttributeValuePairs();
                this.state = 470;
                this.match(PROV_NParser.T__4);
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
    PROV_NParser.prototype.extensibilityArgument = function () {
        var _localctx = new ExtensibilityArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, PROV_NParser.RULE_extensibilityArgument);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 477;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                    case 1:
                        {
                            this.state = 472;
                            this.identifierOrMarker();
                        }
                        break;
                    case 2:
                        {
                            this.state = 473;
                            this.literal();
                        }
                        break;
                    case 3:
                        {
                            this.state = 474;
                            this.time();
                        }
                        break;
                    case 4:
                        {
                            this.state = 475;
                            this.extensibilityExpression();
                        }
                        break;
                    case 5:
                        {
                            this.state = 476;
                            this.extensibilityTuple();
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
    PROV_NParser.prototype.extensibilityTuple = function () {
        var _localctx = new ExtensibilityTupleContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, PROV_NParser.RULE_extensibilityTuple);
        var _la;
        try {
            this.state = 501;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PROV_NParser.T__27:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 479;
                        this.match(PROV_NParser.T__27);
                        this.state = 480;
                        this.extensibilityArgument();
                        this.state = 485;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PROV_NParser.T__5) {
                            {
                                {
                                    this.state = 481;
                                    this.match(PROV_NParser.T__5);
                                    this.state = 482;
                                    this.extensibilityArgument();
                                }
                            }
                            this.state = 487;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 488;
                        this.match(PROV_NParser.T__28);
                    }
                    break;
                case PROV_NParser.T__3:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 490;
                        this.match(PROV_NParser.T__3);
                        this.state = 491;
                        this.extensibilityArgument();
                        this.state = 496;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PROV_NParser.T__5) {
                            {
                                {
                                    this.state = 492;
                                    this.match(PROV_NParser.T__5);
                                    this.state = 493;
                                    this.extensibilityArgument();
                                }
                            }
                            this.state = 498;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 499;
                        this.match(PROV_NParser.T__4);
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
    Object.defineProperty(PROV_NParser, "_ATN", {
        get: function () {
            if (!PROV_NParser.__ATN) {
                PROV_NParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(PROV_NParser._serializedATN));
            }
            return PROV_NParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    PROV_NParser.T__0 = 1;
    PROV_NParser.T__1 = 2;
    PROV_NParser.T__2 = 3;
    PROV_NParser.T__3 = 4;
    PROV_NParser.T__4 = 5;
    PROV_NParser.T__5 = 6;
    PROV_NParser.T__6 = 7;
    PROV_NParser.T__7 = 8;
    PROV_NParser.T__8 = 9;
    PROV_NParser.T__9 = 10;
    PROV_NParser.T__10 = 11;
    PROV_NParser.T__11 = 12;
    PROV_NParser.T__12 = 13;
    PROV_NParser.T__13 = 14;
    PROV_NParser.T__14 = 15;
    PROV_NParser.T__15 = 16;
    PROV_NParser.T__16 = 17;
    PROV_NParser.T__17 = 18;
    PROV_NParser.T__18 = 19;
    PROV_NParser.T__19 = 20;
    PROV_NParser.T__20 = 21;
    PROV_NParser.T__21 = 22;
    PROV_NParser.T__22 = 23;
    PROV_NParser.T__23 = 24;
    PROV_NParser.T__24 = 25;
    PROV_NParser.T__25 = 26;
    PROV_NParser.T__26 = 27;
    PROV_NParser.T__27 = 28;
    PROV_NParser.T__28 = 29;
    PROV_NParser.DOCUMENT = 30;
    PROV_NParser.ENDDOCUMENT = 31;
    PROV_NParser.BUNDLE = 32;
    PROV_NParser.ENDBUNDLE = 33;
    PROV_NParser.WS = 34;
    PROV_NParser.COMMENT = 35;
    PROV_NParser.LINE_COMMENT = 36;
    PROV_NParser.IRI_REF = 37;
    PROV_NParser.LESS = 38;
    PROV_NParser.GREATER = 39;
    PROV_NParser.DOT = 40;
    PROV_NParser.MINUS = 41;
    PROV_NParser.PREFX = 42;
    PROV_NParser.QUALIFIED_NAME = 43;
    PROV_NParser.HEX = 44;
    PROV_NParser.STRING_LITERAL = 45;
    PROV_NParser.INT_LITERAL = 46;
    PROV_NParser.QUALIFIED_NAME_LITERAL = 47;
    PROV_NParser.ECHAR = 48;
    PROV_NParser.STRING_LITERAL2 = 49;
    PROV_NParser.STRING_LITERAL_LONG2 = 50;
    PROV_NParser.DATETIME = 51;
    PROV_NParser.LANGTAG = 52;
    PROV_NParser.RULE_document = 0;
    PROV_NParser.RULE_namespaceDeclarations = 1;
    PROV_NParser.RULE_defaultNamespaceDeclaration = 2;
    PROV_NParser.RULE_namespaceDeclaration = 3;
    PROV_NParser.RULE_namespace = 4;
    PROV_NParser.RULE_bundle = 5;
    PROV_NParser.RULE_identifier = 6;
    PROV_NParser.RULE_expression = 7;
    PROV_NParser.RULE_entityExpression = 8;
    PROV_NParser.RULE_optionalAttributeValuePairs = 9;
    PROV_NParser.RULE_attributeValuePairs = 10;
    PROV_NParser.RULE_attributeValuePair = 11;
    PROV_NParser.RULE_attribute = 12;
    PROV_NParser.RULE_literal = 13;
    PROV_NParser.RULE_typedLiteral = 14;
    PROV_NParser.RULE_datatype = 15;
    PROV_NParser.RULE_convenienceNotation = 16;
    PROV_NParser.RULE_activityExpression = 17;
    PROV_NParser.RULE_timeOrMarker = 18;
    PROV_NParser.RULE_time = 19;
    PROV_NParser.RULE_generationExpression = 20;
    PROV_NParser.RULE_optionalIdentifier = 21;
    PROV_NParser.RULE_identifierOrMarker = 22;
    PROV_NParser.RULE_eIdentifier = 23;
    PROV_NParser.RULE_eIdentifierOrMarker = 24;
    PROV_NParser.RULE_aIdentifierOrMarker = 25;
    PROV_NParser.RULE_aIdentifier = 26;
    PROV_NParser.RULE_agIdentifierOrMarker = 27;
    PROV_NParser.RULE_agIdentifier = 28;
    PROV_NParser.RULE_cIdentifier = 29;
    PROV_NParser.RULE_gIdentifier = 30;
    PROV_NParser.RULE_gIdentifierOrMarker = 31;
    PROV_NParser.RULE_uIdentifier = 32;
    PROV_NParser.RULE_uIdentifierOrMarker = 33;
    PROV_NParser.RULE_usageExpression = 34;
    PROV_NParser.RULE_startExpression = 35;
    PROV_NParser.RULE_endExpression = 36;
    PROV_NParser.RULE_invalidationExpression = 37;
    PROV_NParser.RULE_communicationExpression = 38;
    PROV_NParser.RULE_agentExpression = 39;
    PROV_NParser.RULE_associationExpression = 40;
    PROV_NParser.RULE_attributionExpression = 41;
    PROV_NParser.RULE_delegationExpression = 42;
    PROV_NParser.RULE_derivationExpression = 43;
    PROV_NParser.RULE_influenceExpression = 44;
    PROV_NParser.RULE_alternateExpression = 45;
    PROV_NParser.RULE_specializationExpression = 46;
    PROV_NParser.RULE_membershipExpression = 47;
    PROV_NParser.RULE_extensibilityExpression = 48;
    PROV_NParser.RULE_extensibilityArgument = 49;
    PROV_NParser.RULE_extensibilityTuple = 50;
    // tslint:disable:no-trailing-whitespace
    PROV_NParser.ruleNames = [
        "document", "namespaceDeclarations", "defaultNamespaceDeclaration", "namespaceDeclaration",
        "namespace", "bundle", "identifier", "expression", "entityExpression",
        "optionalAttributeValuePairs", "attributeValuePairs", "attributeValuePair",
        "attribute", "literal", "typedLiteral", "datatype", "convenienceNotation",
        "activityExpression", "timeOrMarker", "time", "generationExpression",
        "optionalIdentifier", "identifierOrMarker", "eIdentifier", "eIdentifierOrMarker",
        "aIdentifierOrMarker", "aIdentifier", "agIdentifierOrMarker", "agIdentifier",
        "cIdentifier", "gIdentifier", "gIdentifierOrMarker", "uIdentifier", "uIdentifierOrMarker",
        "usageExpression", "startExpression", "endExpression", "invalidationExpression",
        "communicationExpression", "agentExpression", "associationExpression",
        "attributionExpression", "delegationExpression", "derivationExpression",
        "influenceExpression", "alternateExpression", "specializationExpression",
        "membershipExpression", "extensibilityExpression", "extensibilityArgument",
        "extensibilityTuple",
    ];
    PROV_NParser._LITERAL_NAMES = [
        undefined, "'default'", "'prefix'", "'entity'", "'('", "')'", "','", "'['",
        "']'", "'='", "'%%'", "'activity'", "'wasGeneratedBy'", "';'", "'used'",
        "'wasStartedBy'", "'wasEndedBy'", "'wasInvalidatedBy'", "'wasInformedBy'",
        "'agent'", "'wasAssociatedWith'", "'wasAttributedTo'", "'actedOnBehalfOf'",
        "'wasDerivedFrom'", "'wasInfluencedBy'", "'alternateOf'", "'specializationOf'",
        "'hadMember'", "'{'", "'}'", "'document'", "'endDocument'", "'bundle'",
        "'endBundle'", undefined, undefined, undefined, undefined, "'<'", "'>'",
        "'.'", "'-'",
    ];
    PROV_NParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, "DOCUMENT", "ENDDOCUMENT", "BUNDLE", "ENDBUNDLE",
        "WS", "COMMENT", "LINE_COMMENT", "IRI_REF", "LESS", "GREATER", "DOT",
        "MINUS", "PREFX", "QUALIFIED_NAME", "HEX", "STRING_LITERAL", "INT_LITERAL",
        "QUALIFIED_NAME_LITERAL", "ECHAR", "STRING_LITERAL2", "STRING_LITERAL_LONG2",
        "DATETIME", "LANGTAG",
    ];
    PROV_NParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(PROV_NParser._LITERAL_NAMES, PROV_NParser._SYMBOLIC_NAMES, []);
    PROV_NParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x036\u01FA\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
        "\t4\x03\x02\x03\x02\x05\x02k\n\x02\x03\x02\x07\x02n\n\x02\f\x02\x0E\x02" +
        "q\v\x02\x03\x02\x03\x02\x07\x02u\n\x02\f\x02\x0E\x02x\v\x02\x05\x02z\n" +
        "\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\x80\n\x03\x03\x03\x07\x03" +
        "\x83\n\x03\f\x03\x0E\x03\x86\v\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
        "\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x05\x07\x94" +
        "\n\x07\x03\x07\x07\x07\x97\n\x07\f\x07\x0E\x07\x9A\v\x07\x03\x07\x03\x07" +
        "\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
        "\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xB2\n\t\x03\n" +
        "\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xBF" +
        "\n\v\x03\f\x03\f\x03\f\x03\f\x07\f\xC5\n\f\f\f\x0E\f\xC8\v\f\x05\f\xCA" +
        "\n\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\xD4" +
        "\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12" +
        "\x05\x12\xDE\n\x12\x03\x12\x03\x12\x05\x12\xE2\n\x12\x03\x13\x03\x13\x03" +
        "\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xEC\n\x13\x03\x13" +
        "\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\xF3\n\x14\x03\x15\x03\x15\x03" +
        "\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05" +
        "\x16\u0100\n\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x05\x17" +
        "\u0108\n\x17\x03\x18\x03\x18\x05\x18\u010C\n\x18\x03\x19\x03\x19\x03\x1A" +
        "\x03\x1A\x05\x1A\u0112\n\x1A\x03\x1B\x03\x1B\x05\x1B\u0116\n\x1B\x03\x1C" +
        "\x03\x1C\x03\x1D\x03\x1D\x05\x1D\u011C\n\x1D\x03\x1E\x03\x1E\x03\x1F\x03" +
        "\x1F\x03 \x03 \x03!\x03!\x05!\u0126\n!\x03\"\x03\"\x03#\x03#\x05#\u012C" +
        "\n#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u0137\n$\x03$\x03" +
        "$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u0147" +
        "\n%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
        "&\x05&\u0157\n&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
        "\'\x03\'\x03\'\x05\'\u0165\n\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03" +
        "(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03" +
        "*\x03*\x03*\x03*\x03*\x03*\x05*\u0182\n*\x03*\x03*\x03*\x03+\x03+\x03" +
        "+\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
        ",\x05,\u0198\n,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
        "-\x03-\x03-\x03-\x03-\x03-\x05-\u01AA\n-\x03-\x03-\x03-\x03.\x03.\x03" +
        ".\x03.\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
        "0\x030\x030\x030\x030\x030\x030\x031\x031\x031\x031\x031\x031\x031\x03" +
        "2\x032\x032\x032\x032\x032\x072\u01D3\n2\f2\x0E2\u01D6\v2\x032\x032\x03" +
        "2\x033\x033\x033\x033\x033\x053\u01E0\n3\x034\x034\x034\x034\x074\u01E6" +
        "\n4\f4\x0E4\u01E9\v4\x034\x034\x034\x034\x034\x034\x074\u01F1\n4\f4\x0E" +
        "4\u01F4\v4\x034\x034\x054\u01F8\n4\x034\x02\x02\x025\x02\x02\x04\x02\x06" +
        "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
        "\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
        "2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
        "N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02\x02" +
        "\x03\x03\x02,-\x02\u01FF\x02h\x03\x02\x02\x02\x04\x7F\x03\x02\x02\x02" +
        "\x06\x87\x03\x02\x02\x02\b\x8A\x03\x02\x02\x02\n\x8E\x03\x02\x02\x02\f" +
        "\x90\x03\x02\x02\x02\x0E\x9D\x03\x02\x02\x02\x10\xB1\x03\x02\x02\x02\x12" +
        "\xB3\x03\x02\x02\x02\x14\xBE\x03\x02\x02\x02\x16\xC9\x03\x02\x02\x02\x18" +
        "\xCB\x03\x02\x02\x02\x1A\xCF\x03\x02\x02\x02\x1C\xD3\x03\x02\x02\x02\x1E" +
        "\xD5\x03\x02\x02\x02 \xD9\x03\x02\x02\x02\"\xE1\x03\x02\x02\x02$\xE3\x03" +
        "\x02\x02\x02&\xF2\x03\x02\x02\x02(\xF4\x03\x02\x02\x02*\xF6\x03\x02\x02" +
        "\x02,\u0107\x03\x02\x02\x02.\u010B\x03\x02\x02\x020\u010D\x03\x02\x02" +
        "\x022\u0111\x03\x02\x02\x024\u0115\x03\x02\x02\x026\u0117\x03\x02\x02" +
        "\x028\u011B\x03\x02\x02\x02:\u011D\x03\x02\x02\x02<\u011F\x03\x02\x02" +
        "\x02>\u0121\x03\x02\x02\x02@\u0125\x03\x02\x02\x02B\u0127\x03\x02\x02" +
        "\x02D\u012B\x03\x02\x02\x02F\u012D\x03\x02\x02\x02H\u013B\x03\x02\x02" +
        "\x02J\u014B\x03\x02\x02\x02L\u015B\x03\x02\x02\x02N\u0169\x03\x02\x02" +
        "\x02P\u0172\x03\x02\x02\x02R\u0178\x03\x02\x02\x02T\u0186\x03\x02\x02" +
        "\x02V\u018F\x03\x02\x02\x02X\u019C\x03\x02\x02\x02Z\u01AE\x03\x02\x02" +
        "\x02\\\u01B7\x03\x02\x02\x02^\u01BE\x03\x02\x02\x02`\u01C5\x03\x02\x02" +
        "\x02b\u01CC\x03\x02\x02\x02d\u01DF\x03\x02\x02\x02f\u01F7\x03\x02\x02" +
        "\x02hj\x07 \x02\x02ik\x05\x04\x03\x02ji\x03\x02\x02\x02jk\x03\x02\x02" +
        "\x02ko\x03\x02\x02\x02ln\x05\x10\t\x02ml\x03\x02\x02\x02nq\x03\x02\x02" +
        "\x02om\x03\x02\x02\x02op\x03\x02\x02\x02py\x03\x02\x02\x02qo\x03\x02\x02" +
        "\x02rv\x05\f\x07\x02su\x05\f\x07\x02ts\x03\x02\x02\x02ux\x03\x02\x02\x02" +
        "vt\x03\x02\x02\x02vw\x03\x02\x02\x02wz\x03\x02\x02\x02xv\x03\x02\x02\x02" +
        "yr\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x07!\x02\x02" +
        "|\x03\x03\x02\x02\x02}\x80\x05\x06\x04\x02~\x80\x05\b\x05\x02\x7F}\x03" +
        "\x02\x02\x02\x7F~\x03\x02\x02\x02\x80\x84\x03\x02\x02\x02\x81\x83\x05" +
        "\b\x05\x02\x82\x81\x03\x02\x02\x02\x83\x86\x03\x02\x02\x02\x84\x82\x03" +
        "\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x05\x03\x02\x02\x02\x86\x84\x03" +
        "\x02\x02\x02\x87\x88\x07\x03\x02\x02\x88\x89\x07\'\x02\x02\x89\x07\x03" +
        "\x02\x02\x02\x8A\x8B\x07\x04\x02\x02\x8B\x8C\x07,\x02\x02\x8C\x8D\x05" +
        "\n\x06\x02\x8D\t\x03\x02\x02\x02\x8E\x8F\x07\'\x02\x02\x8F\v\x03\x02\x02" +
        "\x02\x90\x91\x07\"\x02\x02\x91\x93\x05\x0E\b\x02\x92\x94\x05\x04\x03\x02" +
        "\x93\x92\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x98\x03\x02\x02\x02" +
        "\x95\x97\x05\x10\t\x02\x96\x95\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02" +
        "\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9B\x03\x02\x02\x02" +
        "\x9A\x98\x03\x02\x02\x02\x9B\x9C\x07#\x02\x02\x9C\r\x03\x02\x02\x02\x9D" +
        "\x9E\t\x02\x02\x02\x9E\x0F\x03\x02\x02\x02\x9F\xB2\x05\x12\n\x02\xA0\xB2" +
        "\x05$\x13\x02\xA1\xB2\x05*\x16\x02\xA2\xB2\x05F$\x02\xA3\xB2\x05H%\x02" +
        "\xA4\xB2\x05J&\x02\xA5\xB2\x05L\'\x02\xA6\xB2\x05N(\x02\xA7\xB2\x05P)" +
        "\x02\xA8\xB2\x05R*\x02\xA9\xB2\x05T+\x02\xAA\xB2\x05V,\x02\xAB\xB2\x05" +
        "X-\x02\xAC\xB2\x05Z.\x02\xAD\xB2\x05\\/\x02\xAE\xB2\x05^0\x02\xAF\xB2" +
        "\x05`1\x02\xB0\xB2\x05b2\x02\xB1\x9F\x03\x02\x02\x02\xB1\xA0\x03\x02\x02" +
        "\x02\xB1\xA1\x03\x02\x02\x02\xB1\xA2\x03\x02\x02\x02\xB1\xA3\x03\x02\x02" +
        "\x02\xB1\xA4\x03\x02\x02\x02\xB1\xA5\x03\x02\x02\x02\xB1\xA6\x03\x02\x02" +
        "\x02\xB1\xA7\x03\x02\x02\x02\xB1\xA8\x03\x02\x02\x02\xB1\xA9\x03\x02\x02" +
        "\x02\xB1\xAA\x03\x02\x02\x02\xB1\xAB\x03\x02\x02\x02\xB1\xAC\x03\x02\x02" +
        "\x02\xB1\xAD\x03\x02\x02\x02\xB1\xAE\x03\x02\x02\x02\xB1\xAF\x03\x02\x02" +
        "\x02\xB1\xB0\x03\x02\x02\x02\xB2\x11\x03\x02\x02\x02\xB3\xB4\x07\x05\x02" +
        "\x02\xB4\xB5\x07\x06\x02\x02\xB5\xB6\x05\x0E\b\x02\xB6\xB7\x05\x14\v\x02" +
        "\xB7\xB8\x07\x07\x02\x02\xB8\x13\x03\x02\x02\x02\xB9\xBA\x07\b\x02\x02" +
        "\xBA\xBB\x07\t\x02\x02\xBB\xBC\x05\x16\f\x02\xBC\xBD\x07\n\x02\x02\xBD" +
        "\xBF\x03\x02\x02\x02\xBE\xB9\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF" +
        "\x15\x03\x02\x02\x02\xC0\xCA\x03\x02\x02\x02\xC1\xC6\x05\x18\r\x02\xC2" +
        "\xC3\x07\b\x02\x02\xC3\xC5\x05\x18\r\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC8" +
        "\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xCA" +
        "\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xC0\x03\x02\x02\x02\xC9\xC1" +
        "\x03\x02\x02\x02\xCA\x17\x03\x02\x02\x02\xCB\xCC\x05\x1A\x0E\x02\xCC\xCD" +
        "\x07\v\x02\x02\xCD\xCE\x05\x1C\x0F\x02\xCE\x19\x03\x02\x02\x02\xCF\xD0" +
        "\t\x02\x02\x02\xD0\x1B\x03\x02\x02\x02\xD1\xD4\x05\x1E\x10\x02\xD2\xD4" +
        "\x05\"\x12\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\x1D" +
        "\x03\x02\x02\x02\xD5\xD6\x07/\x02\x02\xD6\xD7\x07\f\x02\x02\xD7\xD8\x05" +
        " \x11\x02\xD8\x1F\x03\x02\x02\x02\xD9\xDA\t\x02\x02\x02\xDA!\x03\x02\x02" +
        "\x02\xDB\xDD\x07/\x02\x02\xDC\xDE\x076\x02\x02\xDD\xDC\x03\x02\x02\x02" +
        "\xDD\xDE\x03\x02\x02\x02\xDE\xE2\x03\x02\x02\x02\xDF\xE2\x070\x02\x02" +
        "\xE0\xE2\x071\x02\x02\xE1\xDB\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02" +
        "\xE1\xE0\x03\x02\x02\x02\xE2#\x03\x02\x02\x02\xE3\xE4\x07\r\x02\x02\xE4" +
        "\xE5\x07\x06\x02\x02\xE5\xEB\x05\x0E\b\x02\xE6\xE7\x07\b\x02\x02\xE7\xE8" +
        "\x05&\x14\x02\xE8\xE9\x07\b\x02\x02\xE9\xEA\x05&\x14\x02\xEA\xEC\x03\x02" +
        "\x02\x02\xEB\xE6\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xED\x03\x02" +
        "\x02\x02\xED\xEE\x05\x14\v\x02\xEE\xEF\x07\x07\x02\x02\xEF%\x03\x02\x02" +
        "\x02\xF0\xF3\x05(\x15\x02\xF1\xF3\x07+\x02\x02\xF2\xF0\x03\x02\x02\x02" +
        "\xF2\xF1\x03\x02\x02\x02\xF3\'\x03\x02\x02\x02\xF4\xF5\x075\x02\x02\xF5" +
        ")\x03\x02\x02\x02\xF6\xF7\x07\x0E\x02\x02\xF7\xF8\x07\x06\x02\x02\xF8" +
        "\xF9\x05,\x17\x02\xF9\xFF\x050\x19\x02\xFA\xFB\x07\b\x02\x02\xFB\xFC\x05" +
        "4\x1B\x02\xFC\xFD\x07\b\x02\x02\xFD\xFE\x05&\x14\x02\xFE\u0100\x03\x02" +
        "\x02\x02\xFF\xFA\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101" +
        "\x03\x02\x02\x02\u0101\u0102\x05\x14\v\x02\u0102\u0103\x07\x07\x02\x02" +
        "\u0103+\x03\x02\x02\x02\u0104\u0105\x05.\x18\x02\u0105\u0106\x07\x0F\x02" +
        "\x02\u0106\u0108\x03\x02\x02\x02\u0107\u0104\x03\x02\x02\x02\u0107\u0108" +
        "\x03\x02\x02\x02\u0108-\x03\x02\x02\x02\u0109\u010C\x05\x0E\b\x02\u010A" +
        "\u010C\x07+\x02\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010A\x03\x02\x02" +
        "\x02\u010C/\x03\x02\x02\x02\u010D\u010E\x05\x0E\b\x02\u010E1\x03\x02\x02" +
        "\x02\u010F\u0112\x050\x19\x02\u0110\u0112\x07+\x02\x02\u0111\u010F\x03" +
        "\x02\x02\x02\u0111\u0110\x03\x02\x02\x02\u01123\x03\x02\x02\x02\u0113" +
        "\u0116\x056\x1C\x02\u0114\u0116\x07+\x02\x02\u0115\u0113\x03\x02\x02\x02" +
        "\u0115\u0114\x03\x02\x02\x02\u01165\x03\x02\x02\x02\u0117\u0118\x05\x0E" +
        "\b\x02\u01187\x03\x02\x02\x02\u0119\u011C\x05:\x1E\x02\u011A\u011C\x07" +
        "+\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011A\x03\x02\x02\x02\u011C" +
        "9\x03\x02\x02\x02\u011D\u011E\x05\x0E\b\x02\u011E;\x03\x02\x02\x02\u011F" +
        "\u0120\x05\x0E\b\x02\u0120=\x03\x02\x02\x02\u0121\u0122\x05\x0E\b\x02" +
        "\u0122?\x03\x02\x02\x02\u0123\u0126\x05> \x02\u0124\u0126\x07+\x02\x02" +
        "\u0125\u0123\x03\x02\x02\x02\u0125\u0124\x03\x02\x02\x02\u0126A\x03\x02" +
        "\x02\x02\u0127\u0128\x05\x0E\b\x02\u0128C\x03\x02\x02\x02\u0129\u012C" +
        "\x05B\"\x02\u012A\u012C\x07+\x02\x02\u012B\u0129\x03\x02\x02\x02\u012B" +
        "\u012A\x03\x02\x02\x02\u012CE\x03\x02\x02\x02\u012D\u012E\x07\x10\x02" +
        "\x02\u012E\u012F\x07\x06\x02\x02\u012F\u0130\x05,\x17\x02\u0130\u0136" +
        "\x056\x1C\x02\u0131\u0132\x07\b\x02\x02\u0132\u0133\x052\x1A\x02\u0133" +
        "\u0134\x07\b\x02\x02\u0134\u0135\x05&\x14\x02\u0135\u0137\x03\x02\x02" +
        "\x02\u0136\u0131\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0138" +
        "\x03\x02\x02\x02\u0138\u0139\x05\x14\v\x02\u0139\u013A\x07\x07\x02\x02" +
        "\u013AG\x03\x02\x02\x02\u013B\u013C\x07\x11\x02\x02\u013C\u013D\x07\x06" +
        "\x02\x02\u013D\u013E\x05,\x17\x02\u013E\u0146\x056\x1C\x02\u013F\u0140" +
        "\x07\b\x02\x02\u0140\u0141\x052\x1A\x02\u0141\u0142\x07\b\x02\x02\u0142" +
        "\u0143\x054\x1B\x02\u0143\u0144\x07\b\x02\x02\u0144\u0145\x05&\x14\x02" +
        "\u0145\u0147\x03\x02\x02\x02\u0146\u013F\x03\x02\x02\x02\u0146\u0147\x03" +
        "\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u0149\x05\x14\v\x02\u0149" +
        "\u014A\x07\x07\x02\x02\u014AI\x03\x02\x02\x02\u014B\u014C\x07\x12\x02" +
        "\x02\u014C\u014D\x07\x06\x02\x02\u014D\u014E\x05,\x17\x02\u014E\u0156" +
        "\x056\x1C\x02\u014F\u0150\x07\b\x02\x02\u0150\u0151\x052\x1A\x02\u0151" +
        "\u0152\x07\b\x02\x02\u0152\u0153\x054\x1B\x02\u0153\u0154\x07\b\x02\x02" +
        "\u0154\u0155\x05&\x14\x02\u0155\u0157\x03\x02\x02\x02\u0156\u014F\x03" +
        "\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158" +
        "\u0159\x05\x14\v\x02\u0159\u015A\x07\x07\x02\x02\u015AK\x03\x02\x02\x02" +
        "\u015B\u015C\x07\x13\x02\x02\u015C\u015D\x07\x06\x02\x02\u015D\u015E\x05" +
        ",\x17\x02\u015E\u0164\x050\x19\x02\u015F\u0160\x07\b\x02\x02\u0160\u0161" +
        "\x054\x1B\x02\u0161\u0162\x07\b\x02\x02\u0162\u0163\x05&\x14\x02\u0163" +
        "\u0165\x03\x02\x02\x02\u0164\u015F\x03\x02\x02\x02\u0164\u0165\x03\x02" +
        "\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0167\x05\x14\v\x02\u0167\u0168" +
        "\x07\x07\x02\x02\u0168M\x03\x02\x02\x02\u0169\u016A\x07\x14\x02\x02\u016A" +
        "\u016B\x07\x06\x02\x02\u016B\u016C\x05,\x17\x02\u016C\u016D\x056\x1C\x02" +
        "\u016D\u016E\x07\b\x02\x02\u016E\u016F\x056\x1C\x02\u016F\u0170\x05\x14" +
        "\v\x02\u0170\u0171\x07\x07\x02\x02\u0171O\x03\x02\x02\x02\u0172\u0173" +
        "\x07\x15\x02\x02\u0173\u0174\x07\x06\x02\x02\u0174\u0175\x05\x0E\b\x02" +
        "\u0175\u0176\x05\x14\v\x02\u0176\u0177\x07\x07\x02\x02\u0177Q\x03\x02" +
        "\x02\x02\u0178\u0179\x07\x16\x02\x02\u0179\u017A\x07\x06\x02\x02\u017A" +
        "\u017B\x05,\x17\x02\u017B\u0181\x056\x1C\x02\u017C\u017D\x07\b\x02\x02" +
        "\u017D\u017E\x058\x1D\x02\u017E\u017F\x07\b\x02\x02\u017F\u0180\x052\x1A" +
        "\x02\u0180\u0182\x03\x02\x02\x02\u0181\u017C\x03\x02\x02\x02\u0181\u0182" +
        "\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0184\x05\x14\v\x02" +
        "\u0184\u0185\x07\x07\x02\x02\u0185S\x03\x02\x02\x02\u0186\u0187\x07\x17" +
        "\x02\x02\u0187\u0188\x07\x06\x02\x02\u0188\u0189\x05,\x17\x02\u0189\u018A" +
        "\x050\x19\x02\u018A\u018B\x07\b\x02\x02\u018B\u018C\x05:\x1E\x02\u018C" +
        "\u018D\x05\x14\v\x02\u018D\u018E\x07\x07\x02\x02\u018EU\x03\x02\x02\x02" +
        "\u018F\u0190\x07\x18\x02\x02\u0190\u0191\x07\x06\x02\x02\u0191\u0192\x05" +
        ",\x17\x02\u0192\u0193\x05:\x1E\x02\u0193\u0194\x07\b\x02\x02\u0194\u0197" +
        "\x05:\x1E\x02\u0195\u0196\x07\b\x02\x02\u0196\u0198\x054\x1B\x02\u0197" +
        "\u0195\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x03\x02" +
        "\x02\x02\u0199\u019A\x05\x14\v\x02\u019A\u019B\x07\x07\x02\x02\u019BW" +
        "\x03\x02\x02\x02\u019C\u019D\x07\x19\x02\x02\u019D\u019E\x07\x06\x02\x02" +
        "\u019E\u019F\x05,\x17\x02\u019F\u01A0\x050\x19\x02\u01A0\u01A1\x07\b\x02" +
        "\x02\u01A1\u01A9\x050\x19\x02\u01A2\u01A3\x07\b\x02\x02\u01A3\u01A4\x05" +
        "4\x1B\x02\u01A4\u01A5\x07\b\x02\x02\u01A5\u01A6\x05@!\x02\u01A6\u01A7" +
        "\x07\b\x02\x02\u01A7\u01A8\x05D#\x02\u01A8\u01AA\x03\x02\x02\x02\u01A9" +
        "\u01A2\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AB\x03\x02" +
        "\x02\x02\u01AB\u01AC\x05\x14\v\x02\u01AC\u01AD\x07\x07\x02\x02\u01ADY" +
        "\x03\x02\x02\x02\u01AE\u01AF\x07\x1A\x02\x02\u01AF\u01B0\x07\x06\x02\x02" +
        "\u01B0\u01B1\x05,\x17\x02\u01B1\u01B2\x050\x19\x02\u01B2\u01B3\x07\b\x02" +
        "\x02\u01B3\u01B4\x050\x19\x02\u01B4\u01B5\x05\x14\v\x02\u01B5\u01B6\x07" +
        "\x07\x02\x02\u01B6[\x03\x02\x02\x02\u01B7\u01B8\x07\x1B\x02\x02\u01B8" +
        "\u01B9\x07\x06\x02\x02\u01B9\u01BA\x050\x19\x02\u01BA\u01BB\x07\b\x02" +
        "\x02\u01BB\u01BC\x050\x19\x02\u01BC\u01BD\x07\x07\x02\x02\u01BD]\x03\x02" +
        "\x02\x02\u01BE\u01BF\x07\x1C\x02\x02\u01BF\u01C0\x07\x06\x02\x02\u01C0" +
        "\u01C1\x050\x19\x02\u01C1\u01C2\x07\b\x02\x02\u01C2\u01C3\x050\x19\x02" +
        "\u01C3\u01C4\x07\x07\x02\x02\u01C4_\x03\x02\x02\x02\u01C5\u01C6\x07\x1D" +
        "\x02\x02\u01C6\u01C7\x07\x06\x02\x02\u01C7\u01C8\x05<\x1F\x02\u01C8\u01C9" +
        "\x07\b\x02\x02\u01C9\u01CA\x050\x19\x02\u01CA\u01CB\x07\x07\x02\x02\u01CB" +
        "a\x03\x02\x02\x02\u01CC\u01CD\t\x02\x02\x02\u01CD\u01CE\x07\x06\x02\x02" +
        "\u01CE\u01CF\x05,\x17\x02\u01CF\u01D4\x05d3\x02\u01D0\u01D1\x07\b\x02" +
        "\x02\u01D1\u01D3\x05d3\x02\u01D2\u01D0\x03\x02\x02\x02\u01D3\u01D6\x03" +
        "\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5" +
        "\u01D7\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01D8\x05\x14" +
        "\v\x02\u01D8\u01D9\x07\x07\x02\x02\u01D9c\x03\x02\x02\x02\u01DA\u01E0" +
        "\x05.\x18\x02\u01DB\u01E0\x05\x1C\x0F\x02\u01DC\u01E0\x05(\x15\x02\u01DD" +
        "\u01E0\x05b2\x02\u01DE\u01E0\x05f4\x02\u01DF\u01DA\x03\x02\x02\x02\u01DF" +
        "\u01DB\x03\x02\x02\x02\u01DF\u01DC\x03\x02\x02\x02\u01DF\u01DD\x03\x02" +
        "\x02\x02\u01DF\u01DE\x03\x02\x02\x02\u01E0e\x03\x02\x02\x02\u01E1\u01E2" +
        "\x07\x1E\x02\x02\u01E2\u01E7\x05d3\x02\u01E3\u01E4\x07\b\x02\x02\u01E4" +
        "\u01E6\x05d3\x02\u01E5\u01E3\x03\x02\x02\x02\u01E6\u01E9\x03\x02\x02\x02" +
        "\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01EA\x03" +
        "\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA\u01EB\x07\x1F\x02\x02\u01EB" +
        "\u01F8\x03\x02\x02\x02\u01EC\u01ED\x07\x06\x02\x02\u01ED\u01F2\x05d3\x02" +
        "\u01EE\u01EF\x07\b\x02\x02\u01EF\u01F1\x05d3\x02\u01F0\u01EE\x03\x02\x02" +
        "\x02\u01F1\u01F4\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2\u01F3" +
        "\x03\x02\x02\x02\u01F3\u01F5\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02" +
        "\u01F5\u01F6\x07\x07\x02\x02\u01F6\u01F8\x03\x02\x02\x02\u01F7\u01E1\x03" +
        "\x02\x02\x02\u01F7\u01EC\x03\x02\x02\x02\u01F8g\x03\x02\x02\x02\'jovy" +
        "\x7F\x84\x93\x98\xB1\xBE\xC6\xC9\xD3\xDD\xE1\xEB\xF2\xFF\u0107\u010B\u0111" +
        "\u0115\u011B\u0125\u012B\u0136\u0146\u0156\u0164\u0181\u0197\u01A9\u01D4" +
        "\u01DF\u01E7\u01F2\u01F7";
    return PROV_NParser;
}(Parser_1.Parser));
exports.PROV_NParser = PROV_NParser;
var DocumentContext = /** @class */ (function (_super) {
    __extends(DocumentContext, _super);
    function DocumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DocumentContext.prototype.DOCUMENT = function () { return this.getToken(PROV_NParser.DOCUMENT, 0); };
    DocumentContext.prototype.ENDDOCUMENT = function () { return this.getToken(PROV_NParser.ENDDOCUMENT, 0); };
    DocumentContext.prototype.namespaceDeclarations = function () {
        return this.tryGetRuleContext(0, NamespaceDeclarationsContext);
    };
    DocumentContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    DocumentContext.prototype.bundle = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(BundleContext);
        }
        else {
            return this.getRuleContext(i, BundleContext);
        }
    };
    Object.defineProperty(DocumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_document; },
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
var NamespaceDeclarationsContext = /** @class */ (function (_super) {
    __extends(NamespaceDeclarationsContext, _super);
    function NamespaceDeclarationsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespaceDeclarationsContext.prototype.defaultNamespaceDeclaration = function () {
        return this.tryGetRuleContext(0, DefaultNamespaceDeclarationContext);
    };
    NamespaceDeclarationsContext.prototype.namespaceDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NamespaceDeclarationContext);
        }
        else {
            return this.getRuleContext(i, NamespaceDeclarationContext);
        }
    };
    Object.defineProperty(NamespaceDeclarationsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_namespaceDeclarations; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamespaceDeclarationsContext.prototype.enterRule = function (listener) {
        if (listener.enterNamespaceDeclarations) {
            listener.enterNamespaceDeclarations(this);
        }
    };
    // @Override
    NamespaceDeclarationsContext.prototype.exitRule = function (listener) {
        if (listener.exitNamespaceDeclarations) {
            listener.exitNamespaceDeclarations(this);
        }
    };
    // @Override
    NamespaceDeclarationsContext.prototype.accept = function (visitor) {
        if (visitor.visitNamespaceDeclarations) {
            return visitor.visitNamespaceDeclarations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamespaceDeclarationsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamespaceDeclarationsContext = NamespaceDeclarationsContext;
var DefaultNamespaceDeclarationContext = /** @class */ (function (_super) {
    __extends(DefaultNamespaceDeclarationContext, _super);
    function DefaultNamespaceDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefaultNamespaceDeclarationContext.prototype.IRI_REF = function () { return this.getToken(PROV_NParser.IRI_REF, 0); };
    Object.defineProperty(DefaultNamespaceDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_defaultNamespaceDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefaultNamespaceDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterDefaultNamespaceDeclaration) {
            listener.enterDefaultNamespaceDeclaration(this);
        }
    };
    // @Override
    DefaultNamespaceDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitDefaultNamespaceDeclaration) {
            listener.exitDefaultNamespaceDeclaration(this);
        }
    };
    // @Override
    DefaultNamespaceDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitDefaultNamespaceDeclaration) {
            return visitor.visitDefaultNamespaceDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefaultNamespaceDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefaultNamespaceDeclarationContext = DefaultNamespaceDeclarationContext;
var NamespaceDeclarationContext = /** @class */ (function (_super) {
    __extends(NamespaceDeclarationContext, _super);
    function NamespaceDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespaceDeclarationContext.prototype.PREFX = function () { return this.getToken(PROV_NParser.PREFX, 0); };
    NamespaceDeclarationContext.prototype.namespace = function () {
        return this.getRuleContext(0, NamespaceContext);
    };
    Object.defineProperty(NamespaceDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_namespaceDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamespaceDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterNamespaceDeclaration) {
            listener.enterNamespaceDeclaration(this);
        }
    };
    // @Override
    NamespaceDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitNamespaceDeclaration) {
            listener.exitNamespaceDeclaration(this);
        }
    };
    // @Override
    NamespaceDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitNamespaceDeclaration) {
            return visitor.visitNamespaceDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamespaceDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamespaceDeclarationContext = NamespaceDeclarationContext;
var NamespaceContext = /** @class */ (function (_super) {
    __extends(NamespaceContext, _super);
    function NamespaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespaceContext.prototype.IRI_REF = function () { return this.getToken(PROV_NParser.IRI_REF, 0); };
    Object.defineProperty(NamespaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_namespace; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamespaceContext.prototype.enterRule = function (listener) {
        if (listener.enterNamespace) {
            listener.enterNamespace(this);
        }
    };
    // @Override
    NamespaceContext.prototype.exitRule = function (listener) {
        if (listener.exitNamespace) {
            listener.exitNamespace(this);
        }
    };
    // @Override
    NamespaceContext.prototype.accept = function (visitor) {
        if (visitor.visitNamespace) {
            return visitor.visitNamespace(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamespaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamespaceContext = NamespaceContext;
var BundleContext = /** @class */ (function (_super) {
    __extends(BundleContext, _super);
    function BundleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BundleContext.prototype.BUNDLE = function () { return this.getToken(PROV_NParser.BUNDLE, 0); };
    BundleContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    BundleContext.prototype.ENDBUNDLE = function () { return this.getToken(PROV_NParser.ENDBUNDLE, 0); };
    BundleContext.prototype.namespaceDeclarations = function () {
        return this.tryGetRuleContext(0, NamespaceDeclarationsContext);
    };
    BundleContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(BundleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_bundle; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BundleContext.prototype.enterRule = function (listener) {
        if (listener.enterBundle) {
            listener.enterBundle(this);
        }
    };
    // @Override
    BundleContext.prototype.exitRule = function (listener) {
        if (listener.exitBundle) {
            listener.exitBundle(this);
        }
    };
    // @Override
    BundleContext.prototype.accept = function (visitor) {
        if (visitor.visitBundle) {
            return visitor.visitBundle(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BundleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BundleContext = BundleContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.PREFX = function () { return this.tryGetToken(PROV_NParser.PREFX, 0); };
    IdentifierContext.prototype.QUALIFIED_NAME = function () { return this.tryGetToken(PROV_NParser.QUALIFIED_NAME, 0); };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_identifier; },
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
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.entityExpression = function () {
        return this.tryGetRuleContext(0, EntityExpressionContext);
    };
    ExpressionContext.prototype.activityExpression = function () {
        return this.tryGetRuleContext(0, ActivityExpressionContext);
    };
    ExpressionContext.prototype.generationExpression = function () {
        return this.tryGetRuleContext(0, GenerationExpressionContext);
    };
    ExpressionContext.prototype.usageExpression = function () {
        return this.tryGetRuleContext(0, UsageExpressionContext);
    };
    ExpressionContext.prototype.startExpression = function () {
        return this.tryGetRuleContext(0, StartExpressionContext);
    };
    ExpressionContext.prototype.endExpression = function () {
        return this.tryGetRuleContext(0, EndExpressionContext);
    };
    ExpressionContext.prototype.invalidationExpression = function () {
        return this.tryGetRuleContext(0, InvalidationExpressionContext);
    };
    ExpressionContext.prototype.communicationExpression = function () {
        return this.tryGetRuleContext(0, CommunicationExpressionContext);
    };
    ExpressionContext.prototype.agentExpression = function () {
        return this.tryGetRuleContext(0, AgentExpressionContext);
    };
    ExpressionContext.prototype.associationExpression = function () {
        return this.tryGetRuleContext(0, AssociationExpressionContext);
    };
    ExpressionContext.prototype.attributionExpression = function () {
        return this.tryGetRuleContext(0, AttributionExpressionContext);
    };
    ExpressionContext.prototype.delegationExpression = function () {
        return this.tryGetRuleContext(0, DelegationExpressionContext);
    };
    ExpressionContext.prototype.derivationExpression = function () {
        return this.tryGetRuleContext(0, DerivationExpressionContext);
    };
    ExpressionContext.prototype.influenceExpression = function () {
        return this.tryGetRuleContext(0, InfluenceExpressionContext);
    };
    ExpressionContext.prototype.alternateExpression = function () {
        return this.tryGetRuleContext(0, AlternateExpressionContext);
    };
    ExpressionContext.prototype.specializationExpression = function () {
        return this.tryGetRuleContext(0, SpecializationExpressionContext);
    };
    ExpressionContext.prototype.membershipExpression = function () {
        return this.tryGetRuleContext(0, MembershipExpressionContext);
    };
    ExpressionContext.prototype.extensibilityExpression = function () {
        return this.tryGetRuleContext(0, ExtensibilityExpressionContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_expression; },
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
var EntityExpressionContext = /** @class */ (function (_super) {
    __extends(EntityExpressionContext, _super);
    function EntityExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EntityExpressionContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    EntityExpressionContext.prototype.optionalAttributeValuePairs = function () {
        return this.getRuleContext(0, OptionalAttributeValuePairsContext);
    };
    Object.defineProperty(EntityExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_entityExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EntityExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterEntityExpression) {
            listener.enterEntityExpression(this);
        }
    };
    // @Override
    EntityExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitEntityExpression) {
            listener.exitEntityExpression(this);
        }
    };
    // @Override
    EntityExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitEntityExpression) {
            return visitor.visitEntityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EntityExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EntityExpressionContext = EntityExpressionContext;
var OptionalAttributeValuePairsContext = /** @class */ (function (_super) {
    __extends(OptionalAttributeValuePairsContext, _super);
    function OptionalAttributeValuePairsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionalAttributeValuePairsContext.prototype.attributeValuePairs = function () {
        return this.tryGetRuleContext(0, AttributeValuePairsContext);
    };
    Object.defineProperty(OptionalAttributeValuePairsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_optionalAttributeValuePairs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionalAttributeValuePairsContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionalAttributeValuePairs) {
            listener.enterOptionalAttributeValuePairs(this);
        }
    };
    // @Override
    OptionalAttributeValuePairsContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionalAttributeValuePairs) {
            listener.exitOptionalAttributeValuePairs(this);
        }
    };
    // @Override
    OptionalAttributeValuePairsContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionalAttributeValuePairs) {
            return visitor.visitOptionalAttributeValuePairs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionalAttributeValuePairsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionalAttributeValuePairsContext = OptionalAttributeValuePairsContext;
var AttributeValuePairsContext = /** @class */ (function (_super) {
    __extends(AttributeValuePairsContext, _super);
    function AttributeValuePairsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributeValuePairsContext.prototype.attributeValuePair = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AttributeValuePairContext);
        }
        else {
            return this.getRuleContext(i, AttributeValuePairContext);
        }
    };
    Object.defineProperty(AttributeValuePairsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_attributeValuePairs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributeValuePairsContext.prototype.enterRule = function (listener) {
        if (listener.enterAttributeValuePairs) {
            listener.enterAttributeValuePairs(this);
        }
    };
    // @Override
    AttributeValuePairsContext.prototype.exitRule = function (listener) {
        if (listener.exitAttributeValuePairs) {
            listener.exitAttributeValuePairs(this);
        }
    };
    // @Override
    AttributeValuePairsContext.prototype.accept = function (visitor) {
        if (visitor.visitAttributeValuePairs) {
            return visitor.visitAttributeValuePairs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributeValuePairsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributeValuePairsContext = AttributeValuePairsContext;
var AttributeValuePairContext = /** @class */ (function (_super) {
    __extends(AttributeValuePairContext, _super);
    function AttributeValuePairContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributeValuePairContext.prototype.attribute = function () {
        return this.getRuleContext(0, AttributeContext);
    };
    AttributeValuePairContext.prototype.literal = function () {
        return this.getRuleContext(0, LiteralContext);
    };
    Object.defineProperty(AttributeValuePairContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_attributeValuePair; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributeValuePairContext.prototype.enterRule = function (listener) {
        if (listener.enterAttributeValuePair) {
            listener.enterAttributeValuePair(this);
        }
    };
    // @Override
    AttributeValuePairContext.prototype.exitRule = function (listener) {
        if (listener.exitAttributeValuePair) {
            listener.exitAttributeValuePair(this);
        }
    };
    // @Override
    AttributeValuePairContext.prototype.accept = function (visitor) {
        if (visitor.visitAttributeValuePair) {
            return visitor.visitAttributeValuePair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributeValuePairContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributeValuePairContext = AttributeValuePairContext;
var AttributeContext = /** @class */ (function (_super) {
    __extends(AttributeContext, _super);
    function AttributeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributeContext.prototype.PREFX = function () { return this.tryGetToken(PROV_NParser.PREFX, 0); };
    AttributeContext.prototype.QUALIFIED_NAME = function () { return this.tryGetToken(PROV_NParser.QUALIFIED_NAME, 0); };
    Object.defineProperty(AttributeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_attribute; },
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
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.typedLiteral = function () {
        return this.tryGetRuleContext(0, TypedLiteralContext);
    };
    LiteralContext.prototype.convenienceNotation = function () {
        return this.tryGetRuleContext(0, ConvenienceNotationContext);
    };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_literal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterLiteral) {
            listener.enterLiteral(this);
        }
    };
    // @Override
    LiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitLiteral) {
            listener.exitLiteral(this);
        }
    };
    // @Override
    LiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LiteralContext = LiteralContext;
var TypedLiteralContext = /** @class */ (function (_super) {
    __extends(TypedLiteralContext, _super);
    function TypedLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypedLiteralContext.prototype.STRING_LITERAL = function () { return this.getToken(PROV_NParser.STRING_LITERAL, 0); };
    TypedLiteralContext.prototype.datatype = function () {
        return this.getRuleContext(0, DatatypeContext);
    };
    Object.defineProperty(TypedLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_typedLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypedLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterTypedLiteral) {
            listener.enterTypedLiteral(this);
        }
    };
    // @Override
    TypedLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitTypedLiteral) {
            listener.exitTypedLiteral(this);
        }
    };
    // @Override
    TypedLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitTypedLiteral) {
            return visitor.visitTypedLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypedLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypedLiteralContext = TypedLiteralContext;
var DatatypeContext = /** @class */ (function (_super) {
    __extends(DatatypeContext, _super);
    function DatatypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DatatypeContext.prototype.PREFX = function () { return this.tryGetToken(PROV_NParser.PREFX, 0); };
    DatatypeContext.prototype.QUALIFIED_NAME = function () { return this.tryGetToken(PROV_NParser.QUALIFIED_NAME, 0); };
    Object.defineProperty(DatatypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_datatype; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DatatypeContext.prototype.enterRule = function (listener) {
        if (listener.enterDatatype) {
            listener.enterDatatype(this);
        }
    };
    // @Override
    DatatypeContext.prototype.exitRule = function (listener) {
        if (listener.exitDatatype) {
            listener.exitDatatype(this);
        }
    };
    // @Override
    DatatypeContext.prototype.accept = function (visitor) {
        if (visitor.visitDatatype) {
            return visitor.visitDatatype(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DatatypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DatatypeContext = DatatypeContext;
var ConvenienceNotationContext = /** @class */ (function (_super) {
    __extends(ConvenienceNotationContext, _super);
    function ConvenienceNotationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConvenienceNotationContext.prototype.STRING_LITERAL = function () { return this.tryGetToken(PROV_NParser.STRING_LITERAL, 0); };
    ConvenienceNotationContext.prototype.LANGTAG = function () { return this.tryGetToken(PROV_NParser.LANGTAG, 0); };
    ConvenienceNotationContext.prototype.INT_LITERAL = function () { return this.tryGetToken(PROV_NParser.INT_LITERAL, 0); };
    ConvenienceNotationContext.prototype.QUALIFIED_NAME_LITERAL = function () { return this.tryGetToken(PROV_NParser.QUALIFIED_NAME_LITERAL, 0); };
    Object.defineProperty(ConvenienceNotationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_convenienceNotation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConvenienceNotationContext.prototype.enterRule = function (listener) {
        if (listener.enterConvenienceNotation) {
            listener.enterConvenienceNotation(this);
        }
    };
    // @Override
    ConvenienceNotationContext.prototype.exitRule = function (listener) {
        if (listener.exitConvenienceNotation) {
            listener.exitConvenienceNotation(this);
        }
    };
    // @Override
    ConvenienceNotationContext.prototype.accept = function (visitor) {
        if (visitor.visitConvenienceNotation) {
            return visitor.visitConvenienceNotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConvenienceNotationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConvenienceNotationContext = ConvenienceNotationContext;
var ActivityExpressionContext = /** @class */ (function (_super) {
    __extends(ActivityExpressionContext, _super);
    function ActivityExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ActivityExpressionContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    ActivityExpressionContext.prototype.optionalAttributeValuePairs = function () {
        return this.getRuleContext(0, OptionalAttributeValuePairsContext);
    };
    ActivityExpressionContext.prototype.timeOrMarker = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TimeOrMarkerContext);
        }
        else {
            return this.getRuleContext(i, TimeOrMarkerContext);
        }
    };
    Object.defineProperty(ActivityExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_activityExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ActivityExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterActivityExpression) {
            listener.enterActivityExpression(this);
        }
    };
    // @Override
    ActivityExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitActivityExpression) {
            listener.exitActivityExpression(this);
        }
    };
    // @Override
    ActivityExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitActivityExpression) {
            return visitor.visitActivityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ActivityExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ActivityExpressionContext = ActivityExpressionContext;
var TimeOrMarkerContext = /** @class */ (function (_super) {
    __extends(TimeOrMarkerContext, _super);
    function TimeOrMarkerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TimeOrMarkerContext.prototype.time = function () {
        return this.tryGetRuleContext(0, TimeContext);
    };
    TimeOrMarkerContext.prototype.MINUS = function () { return this.tryGetToken(PROV_NParser.MINUS, 0); };
    Object.defineProperty(TimeOrMarkerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_timeOrMarker; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TimeOrMarkerContext.prototype.enterRule = function (listener) {
        if (listener.enterTimeOrMarker) {
            listener.enterTimeOrMarker(this);
        }
    };
    // @Override
    TimeOrMarkerContext.prototype.exitRule = function (listener) {
        if (listener.exitTimeOrMarker) {
            listener.exitTimeOrMarker(this);
        }
    };
    // @Override
    TimeOrMarkerContext.prototype.accept = function (visitor) {
        if (visitor.visitTimeOrMarker) {
            return visitor.visitTimeOrMarker(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TimeOrMarkerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TimeOrMarkerContext = TimeOrMarkerContext;
var TimeContext = /** @class */ (function (_super) {
    __extends(TimeContext, _super);
    function TimeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TimeContext.prototype.DATETIME = function () { return this.getToken(PROV_NParser.DATETIME, 0); };
    Object.defineProperty(TimeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_time; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TimeContext.prototype.enterRule = function (listener) {
        if (listener.enterTime) {
            listener.enterTime(this);
        }
    };
    // @Override
    TimeContext.prototype.exitRule = function (listener) {
        if (listener.exitTime) {
            listener.exitTime(this);
        }
    };
    // @Override
    TimeContext.prototype.accept = function (visitor) {
        if (visitor.visitTime) {
            return visitor.visitTime(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TimeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TimeContext = TimeContext;
var GenerationExpressionContext = /** @class */ (function (_super) {
    __extends(GenerationExpressionContext, _super);
    function GenerationExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GenerationExpressionContext.prototype.optionalIdentifier = function () {
        return this.getRuleContext(0, OptionalIdentifierContext);
    };
    GenerationExpressionContext.prototype.eIdentifier = function () {
        return this.getRuleContext(0, EIdentifierContext);
    };
    GenerationExpressionContext.prototype.optionalAttributeValuePairs = function () {
        return this.getRuleContext(0, OptionalAttributeValuePairsContext);
    };
    GenerationExpressionContext.prototype.aIdentifierOrMarker = function () {
        return this.tryGetRuleContext(0, AIdentifierOrMarkerContext);
    };
    GenerationExpressionContext.prototype.timeOrMarker = function () {
        return this.tryGetRuleContext(0, TimeOrMarkerContext);
    };
    Object.defineProperty(GenerationExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_generationExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GenerationExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterGenerationExpression) {
            listener.enterGenerationExpression(this);
        }
    };
    // @Override
    GenerationExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitGenerationExpression) {
            listener.exitGenerationExpression(this);
        }
    };
    // @Override
    GenerationExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitGenerationExpression) {
            return visitor.visitGenerationExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GenerationExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GenerationExpressionContext = GenerationExpressionContext;
var OptionalIdentifierContext = /** @class */ (function (_super) {
    __extends(OptionalIdentifierContext, _super);
    function OptionalIdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionalIdentifierContext.prototype.identifierOrMarker = function () {
        return this.tryGetRuleContext(0, IdentifierOrMarkerContext);
    };
    Object.defineProperty(OptionalIdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_optionalIdentifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionalIdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionalIdentifier) {
            listener.enterOptionalIdentifier(this);
        }
    };
    // @Override
    OptionalIdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionalIdentifier) {
            listener.exitOptionalIdentifier(this);
        }
    };
    // @Override
    OptionalIdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionalIdentifier) {
            return visitor.visitOptionalIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionalIdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionalIdentifierContext = OptionalIdentifierContext;
var IdentifierOrMarkerContext = /** @class */ (function (_super) {
    __extends(IdentifierOrMarkerContext, _super);
    function IdentifierOrMarkerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierOrMarkerContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    IdentifierOrMarkerContext.prototype.MINUS = function () { return this.tryGetToken(PROV_NParser.MINUS, 0); };
    Object.defineProperty(IdentifierOrMarkerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_identifierOrMarker; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierOrMarkerContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifierOrMarker) {
            listener.enterIdentifierOrMarker(this);
        }
    };
    // @Override
    IdentifierOrMarkerContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifierOrMarker) {
            listener.exitIdentifierOrMarker(this);
        }
    };
    // @Override
    IdentifierOrMarkerContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifierOrMarker) {
            return visitor.visitIdentifierOrMarker(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierOrMarkerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierOrMarkerContext = IdentifierOrMarkerContext;
var EIdentifierContext = /** @class */ (function (_super) {
    __extends(EIdentifierContext, _super);
    function EIdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EIdentifierContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(EIdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_eIdentifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EIdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterEIdentifier) {
            listener.enterEIdentifier(this);
        }
    };
    // @Override
    EIdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitEIdentifier) {
            listener.exitEIdentifier(this);
        }
    };
    // @Override
    EIdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitEIdentifier) {
            return visitor.visitEIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EIdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EIdentifierContext = EIdentifierContext;
var EIdentifierOrMarkerContext = /** @class */ (function (_super) {
    __extends(EIdentifierOrMarkerContext, _super);
    function EIdentifierOrMarkerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EIdentifierOrMarkerContext.prototype.eIdentifier = function () {
        return this.tryGetRuleContext(0, EIdentifierContext);
    };
    EIdentifierOrMarkerContext.prototype.MINUS = function () { return this.tryGetToken(PROV_NParser.MINUS, 0); };
    Object.defineProperty(EIdentifierOrMarkerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_eIdentifierOrMarker; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EIdentifierOrMarkerContext.prototype.enterRule = function (listener) {
        if (listener.enterEIdentifierOrMarker) {
            listener.enterEIdentifierOrMarker(this);
        }
    };
    // @Override
    EIdentifierOrMarkerContext.prototype.exitRule = function (listener) {
        if (listener.exitEIdentifierOrMarker) {
            listener.exitEIdentifierOrMarker(this);
        }
    };
    // @Override
    EIdentifierOrMarkerContext.prototype.accept = function (visitor) {
        if (visitor.visitEIdentifierOrMarker) {
            return visitor.visitEIdentifierOrMarker(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EIdentifierOrMarkerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EIdentifierOrMarkerContext = EIdentifierOrMarkerContext;
var AIdentifierOrMarkerContext = /** @class */ (function (_super) {
    __extends(AIdentifierOrMarkerContext, _super);
    function AIdentifierOrMarkerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AIdentifierOrMarkerContext.prototype.aIdentifier = function () {
        return this.tryGetRuleContext(0, AIdentifierContext);
    };
    AIdentifierOrMarkerContext.prototype.MINUS = function () { return this.tryGetToken(PROV_NParser.MINUS, 0); };
    Object.defineProperty(AIdentifierOrMarkerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_aIdentifierOrMarker; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AIdentifierOrMarkerContext.prototype.enterRule = function (listener) {
        if (listener.enterAIdentifierOrMarker) {
            listener.enterAIdentifierOrMarker(this);
        }
    };
    // @Override
    AIdentifierOrMarkerContext.prototype.exitRule = function (listener) {
        if (listener.exitAIdentifierOrMarker) {
            listener.exitAIdentifierOrMarker(this);
        }
    };
    // @Override
    AIdentifierOrMarkerContext.prototype.accept = function (visitor) {
        if (visitor.visitAIdentifierOrMarker) {
            return visitor.visitAIdentifierOrMarker(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AIdentifierOrMarkerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AIdentifierOrMarkerContext = AIdentifierOrMarkerContext;
var AIdentifierContext = /** @class */ (function (_super) {
    __extends(AIdentifierContext, _super);
    function AIdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AIdentifierContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(AIdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_aIdentifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AIdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterAIdentifier) {
            listener.enterAIdentifier(this);
        }
    };
    // @Override
    AIdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitAIdentifier) {
            listener.exitAIdentifier(this);
        }
    };
    // @Override
    AIdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitAIdentifier) {
            return visitor.visitAIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AIdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AIdentifierContext = AIdentifierContext;
var AgIdentifierOrMarkerContext = /** @class */ (function (_super) {
    __extends(AgIdentifierOrMarkerContext, _super);
    function AgIdentifierOrMarkerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AgIdentifierOrMarkerContext.prototype.agIdentifier = function () {
        return this.tryGetRuleContext(0, AgIdentifierContext);
    };
    AgIdentifierOrMarkerContext.prototype.MINUS = function () { return this.tryGetToken(PROV_NParser.MINUS, 0); };
    Object.defineProperty(AgIdentifierOrMarkerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_agIdentifierOrMarker; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AgIdentifierOrMarkerContext.prototype.enterRule = function (listener) {
        if (listener.enterAgIdentifierOrMarker) {
            listener.enterAgIdentifierOrMarker(this);
        }
    };
    // @Override
    AgIdentifierOrMarkerContext.prototype.exitRule = function (listener) {
        if (listener.exitAgIdentifierOrMarker) {
            listener.exitAgIdentifierOrMarker(this);
        }
    };
    // @Override
    AgIdentifierOrMarkerContext.prototype.accept = function (visitor) {
        if (visitor.visitAgIdentifierOrMarker) {
            return visitor.visitAgIdentifierOrMarker(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AgIdentifierOrMarkerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AgIdentifierOrMarkerContext = AgIdentifierOrMarkerContext;
var AgIdentifierContext = /** @class */ (function (_super) {
    __extends(AgIdentifierContext, _super);
    function AgIdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AgIdentifierContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(AgIdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_agIdentifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AgIdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterAgIdentifier) {
            listener.enterAgIdentifier(this);
        }
    };
    // @Override
    AgIdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitAgIdentifier) {
            listener.exitAgIdentifier(this);
        }
    };
    // @Override
    AgIdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitAgIdentifier) {
            return visitor.visitAgIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AgIdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AgIdentifierContext = AgIdentifierContext;
var CIdentifierContext = /** @class */ (function (_super) {
    __extends(CIdentifierContext, _super);
    function CIdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CIdentifierContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(CIdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_cIdentifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CIdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterCIdentifier) {
            listener.enterCIdentifier(this);
        }
    };
    // @Override
    CIdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitCIdentifier) {
            listener.exitCIdentifier(this);
        }
    };
    // @Override
    CIdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitCIdentifier) {
            return visitor.visitCIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CIdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CIdentifierContext = CIdentifierContext;
var GIdentifierContext = /** @class */ (function (_super) {
    __extends(GIdentifierContext, _super);
    function GIdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GIdentifierContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(GIdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_gIdentifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GIdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterGIdentifier) {
            listener.enterGIdentifier(this);
        }
    };
    // @Override
    GIdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitGIdentifier) {
            listener.exitGIdentifier(this);
        }
    };
    // @Override
    GIdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitGIdentifier) {
            return visitor.visitGIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GIdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GIdentifierContext = GIdentifierContext;
var GIdentifierOrMarkerContext = /** @class */ (function (_super) {
    __extends(GIdentifierOrMarkerContext, _super);
    function GIdentifierOrMarkerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GIdentifierOrMarkerContext.prototype.gIdentifier = function () {
        return this.tryGetRuleContext(0, GIdentifierContext);
    };
    GIdentifierOrMarkerContext.prototype.MINUS = function () { return this.tryGetToken(PROV_NParser.MINUS, 0); };
    Object.defineProperty(GIdentifierOrMarkerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_gIdentifierOrMarker; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GIdentifierOrMarkerContext.prototype.enterRule = function (listener) {
        if (listener.enterGIdentifierOrMarker) {
            listener.enterGIdentifierOrMarker(this);
        }
    };
    // @Override
    GIdentifierOrMarkerContext.prototype.exitRule = function (listener) {
        if (listener.exitGIdentifierOrMarker) {
            listener.exitGIdentifierOrMarker(this);
        }
    };
    // @Override
    GIdentifierOrMarkerContext.prototype.accept = function (visitor) {
        if (visitor.visitGIdentifierOrMarker) {
            return visitor.visitGIdentifierOrMarker(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GIdentifierOrMarkerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GIdentifierOrMarkerContext = GIdentifierOrMarkerContext;
var UIdentifierContext = /** @class */ (function (_super) {
    __extends(UIdentifierContext, _super);
    function UIdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UIdentifierContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    Object.defineProperty(UIdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_uIdentifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UIdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterUIdentifier) {
            listener.enterUIdentifier(this);
        }
    };
    // @Override
    UIdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitUIdentifier) {
            listener.exitUIdentifier(this);
        }
    };
    // @Override
    UIdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitUIdentifier) {
            return visitor.visitUIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UIdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UIdentifierContext = UIdentifierContext;
var UIdentifierOrMarkerContext = /** @class */ (function (_super) {
    __extends(UIdentifierOrMarkerContext, _super);
    function UIdentifierOrMarkerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UIdentifierOrMarkerContext.prototype.uIdentifier = function () {
        return this.tryGetRuleContext(0, UIdentifierContext);
    };
    UIdentifierOrMarkerContext.prototype.MINUS = function () { return this.tryGetToken(PROV_NParser.MINUS, 0); };
    Object.defineProperty(UIdentifierOrMarkerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_uIdentifierOrMarker; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UIdentifierOrMarkerContext.prototype.enterRule = function (listener) {
        if (listener.enterUIdentifierOrMarker) {
            listener.enterUIdentifierOrMarker(this);
        }
    };
    // @Override
    UIdentifierOrMarkerContext.prototype.exitRule = function (listener) {
        if (listener.exitUIdentifierOrMarker) {
            listener.exitUIdentifierOrMarker(this);
        }
    };
    // @Override
    UIdentifierOrMarkerContext.prototype.accept = function (visitor) {
        if (visitor.visitUIdentifierOrMarker) {
            return visitor.visitUIdentifierOrMarker(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UIdentifierOrMarkerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UIdentifierOrMarkerContext = UIdentifierOrMarkerContext;
var UsageExpressionContext = /** @class */ (function (_super) {
    __extends(UsageExpressionContext, _super);
    function UsageExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UsageExpressionContext.prototype.optionalIdentifier = function () {
        return this.getRuleContext(0, OptionalIdentifierContext);
    };
    UsageExpressionContext.prototype.aIdentifier = function () {
        return this.getRuleContext(0, AIdentifierContext);
    };
    UsageExpressionContext.prototype.optionalAttributeValuePairs = function () {
        return this.getRuleContext(0, OptionalAttributeValuePairsContext);
    };
    UsageExpressionContext.prototype.eIdentifierOrMarker = function () {
        return this.tryGetRuleContext(0, EIdentifierOrMarkerContext);
    };
    UsageExpressionContext.prototype.timeOrMarker = function () {
        return this.tryGetRuleContext(0, TimeOrMarkerContext);
    };
    Object.defineProperty(UsageExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_usageExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UsageExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterUsageExpression) {
            listener.enterUsageExpression(this);
        }
    };
    // @Override
    UsageExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitUsageExpression) {
            listener.exitUsageExpression(this);
        }
    };
    // @Override
    UsageExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitUsageExpression) {
            return visitor.visitUsageExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UsageExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UsageExpressionContext = UsageExpressionContext;
var StartExpressionContext = /** @class */ (function (_super) {
    __extends(StartExpressionContext, _super);
    function StartExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StartExpressionContext.prototype.optionalIdentifier = function () {
        return this.getRuleContext(0, OptionalIdentifierContext);
    };
    StartExpressionContext.prototype.aIdentifier = function () {
        return this.getRuleContext(0, AIdentifierContext);
    };
    StartExpressionContext.prototype.optionalAttributeValuePairs = function () {
        return this.getRuleContext(0, OptionalAttributeValuePairsContext);
    };
    StartExpressionContext.prototype.eIdentifierOrMarker = function () {
        return this.tryGetRuleContext(0, EIdentifierOrMarkerContext);
    };
    StartExpressionContext.prototype.aIdentifierOrMarker = function () {
        return this.tryGetRuleContext(0, AIdentifierOrMarkerContext);
    };
    StartExpressionContext.prototype.timeOrMarker = function () {
        return this.tryGetRuleContext(0, TimeOrMarkerContext);
    };
    Object.defineProperty(StartExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_startExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StartExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterStartExpression) {
            listener.enterStartExpression(this);
        }
    };
    // @Override
    StartExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitStartExpression) {
            listener.exitStartExpression(this);
        }
    };
    // @Override
    StartExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitStartExpression) {
            return visitor.visitStartExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StartExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StartExpressionContext = StartExpressionContext;
var EndExpressionContext = /** @class */ (function (_super) {
    __extends(EndExpressionContext, _super);
    function EndExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EndExpressionContext.prototype.optionalIdentifier = function () {
        return this.getRuleContext(0, OptionalIdentifierContext);
    };
    EndExpressionContext.prototype.aIdentifier = function () {
        return this.getRuleContext(0, AIdentifierContext);
    };
    EndExpressionContext.prototype.optionalAttributeValuePairs = function () {
        return this.getRuleContext(0, OptionalAttributeValuePairsContext);
    };
    EndExpressionContext.prototype.eIdentifierOrMarker = function () {
        return this.tryGetRuleContext(0, EIdentifierOrMarkerContext);
    };
    EndExpressionContext.prototype.aIdentifierOrMarker = function () {
        return this.tryGetRuleContext(0, AIdentifierOrMarkerContext);
    };
    EndExpressionContext.prototype.timeOrMarker = function () {
        return this.tryGetRuleContext(0, TimeOrMarkerContext);
    };
    Object.defineProperty(EndExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_endExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EndExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterEndExpression) {
            listener.enterEndExpression(this);
        }
    };
    // @Override
    EndExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitEndExpression) {
            listener.exitEndExpression(this);
        }
    };
    // @Override
    EndExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitEndExpression) {
            return visitor.visitEndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EndExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EndExpressionContext = EndExpressionContext;
var InvalidationExpressionContext = /** @class */ (function (_super) {
    __extends(InvalidationExpressionContext, _super);
    function InvalidationExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InvalidationExpressionContext.prototype.optionalIdentifier = function () {
        return this.getRuleContext(0, OptionalIdentifierContext);
    };
    InvalidationExpressionContext.prototype.eIdentifier = function () {
        return this.getRuleContext(0, EIdentifierContext);
    };
    InvalidationExpressionContext.prototype.optionalAttributeValuePairs = function () {
        return this.getRuleContext(0, OptionalAttributeValuePairsContext);
    };
    InvalidationExpressionContext.prototype.aIdentifierOrMarker = function () {
        return this.tryGetRuleContext(0, AIdentifierOrMarkerContext);
    };
    InvalidationExpressionContext.prototype.timeOrMarker = function () {
        return this.tryGetRuleContext(0, TimeOrMarkerContext);
    };
    Object.defineProperty(InvalidationExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_invalidationExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InvalidationExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterInvalidationExpression) {
            listener.enterInvalidationExpression(this);
        }
    };
    // @Override
    InvalidationExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitInvalidationExpression) {
            listener.exitInvalidationExpression(this);
        }
    };
    // @Override
    InvalidationExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitInvalidationExpression) {
            return visitor.visitInvalidationExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InvalidationExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InvalidationExpressionContext = InvalidationExpressionContext;
var CommunicationExpressionContext = /** @class */ (function (_super) {
    __extends(CommunicationExpressionContext, _super);
    function CommunicationExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommunicationExpressionContext.prototype.optionalIdentifier = function () {
        return this.getRuleContext(0, OptionalIdentifierContext);
    };
    CommunicationExpressionContext.prototype.aIdentifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AIdentifierContext);
        }
        else {
            return this.getRuleContext(i, AIdentifierContext);
        }
    };
    CommunicationExpressionContext.prototype.optionalAttributeValuePairs = function () {
        return this.getRuleContext(0, OptionalAttributeValuePairsContext);
    };
    Object.defineProperty(CommunicationExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_communicationExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommunicationExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterCommunicationExpression) {
            listener.enterCommunicationExpression(this);
        }
    };
    // @Override
    CommunicationExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitCommunicationExpression) {
            listener.exitCommunicationExpression(this);
        }
    };
    // @Override
    CommunicationExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitCommunicationExpression) {
            return visitor.visitCommunicationExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommunicationExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommunicationExpressionContext = CommunicationExpressionContext;
var AgentExpressionContext = /** @class */ (function (_super) {
    __extends(AgentExpressionContext, _super);
    function AgentExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AgentExpressionContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    AgentExpressionContext.prototype.optionalAttributeValuePairs = function () {
        return this.getRuleContext(0, OptionalAttributeValuePairsContext);
    };
    Object.defineProperty(AgentExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_agentExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AgentExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAgentExpression) {
            listener.enterAgentExpression(this);
        }
    };
    // @Override
    AgentExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAgentExpression) {
            listener.exitAgentExpression(this);
        }
    };
    // @Override
    AgentExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAgentExpression) {
            return visitor.visitAgentExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AgentExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AgentExpressionContext = AgentExpressionContext;
var AssociationExpressionContext = /** @class */ (function (_super) {
    __extends(AssociationExpressionContext, _super);
    function AssociationExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssociationExpressionContext.prototype.optionalIdentifier = function () {
        return this.getRuleContext(0, OptionalIdentifierContext);
    };
    AssociationExpressionContext.prototype.aIdentifier = function () {
        return this.getRuleContext(0, AIdentifierContext);
    };
    AssociationExpressionContext.prototype.optionalAttributeValuePairs = function () {
        return this.getRuleContext(0, OptionalAttributeValuePairsContext);
    };
    AssociationExpressionContext.prototype.agIdentifierOrMarker = function () {
        return this.tryGetRuleContext(0, AgIdentifierOrMarkerContext);
    };
    AssociationExpressionContext.prototype.eIdentifierOrMarker = function () {
        return this.tryGetRuleContext(0, EIdentifierOrMarkerContext);
    };
    Object.defineProperty(AssociationExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_associationExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssociationExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAssociationExpression) {
            listener.enterAssociationExpression(this);
        }
    };
    // @Override
    AssociationExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAssociationExpression) {
            listener.exitAssociationExpression(this);
        }
    };
    // @Override
    AssociationExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAssociationExpression) {
            return visitor.visitAssociationExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssociationExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssociationExpressionContext = AssociationExpressionContext;
var AttributionExpressionContext = /** @class */ (function (_super) {
    __extends(AttributionExpressionContext, _super);
    function AttributionExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributionExpressionContext.prototype.optionalIdentifier = function () {
        return this.getRuleContext(0, OptionalIdentifierContext);
    };
    AttributionExpressionContext.prototype.eIdentifier = function () {
        return this.getRuleContext(0, EIdentifierContext);
    };
    AttributionExpressionContext.prototype.agIdentifier = function () {
        return this.getRuleContext(0, AgIdentifierContext);
    };
    AttributionExpressionContext.prototype.optionalAttributeValuePairs = function () {
        return this.getRuleContext(0, OptionalAttributeValuePairsContext);
    };
    Object.defineProperty(AttributionExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_attributionExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributionExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAttributionExpression) {
            listener.enterAttributionExpression(this);
        }
    };
    // @Override
    AttributionExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAttributionExpression) {
            listener.exitAttributionExpression(this);
        }
    };
    // @Override
    AttributionExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAttributionExpression) {
            return visitor.visitAttributionExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributionExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributionExpressionContext = AttributionExpressionContext;
var DelegationExpressionContext = /** @class */ (function (_super) {
    __extends(DelegationExpressionContext, _super);
    function DelegationExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DelegationExpressionContext.prototype.optionalIdentifier = function () {
        return this.getRuleContext(0, OptionalIdentifierContext);
    };
    DelegationExpressionContext.prototype.agIdentifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AgIdentifierContext);
        }
        else {
            return this.getRuleContext(i, AgIdentifierContext);
        }
    };
    DelegationExpressionContext.prototype.optionalAttributeValuePairs = function () {
        return this.getRuleContext(0, OptionalAttributeValuePairsContext);
    };
    DelegationExpressionContext.prototype.aIdentifierOrMarker = function () {
        return this.tryGetRuleContext(0, AIdentifierOrMarkerContext);
    };
    Object.defineProperty(DelegationExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_delegationExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DelegationExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterDelegationExpression) {
            listener.enterDelegationExpression(this);
        }
    };
    // @Override
    DelegationExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitDelegationExpression) {
            listener.exitDelegationExpression(this);
        }
    };
    // @Override
    DelegationExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitDelegationExpression) {
            return visitor.visitDelegationExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DelegationExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DelegationExpressionContext = DelegationExpressionContext;
var DerivationExpressionContext = /** @class */ (function (_super) {
    __extends(DerivationExpressionContext, _super);
    function DerivationExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DerivationExpressionContext.prototype.optionalIdentifier = function () {
        return this.getRuleContext(0, OptionalIdentifierContext);
    };
    DerivationExpressionContext.prototype.eIdentifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EIdentifierContext);
        }
        else {
            return this.getRuleContext(i, EIdentifierContext);
        }
    };
    DerivationExpressionContext.prototype.optionalAttributeValuePairs = function () {
        return this.getRuleContext(0, OptionalAttributeValuePairsContext);
    };
    DerivationExpressionContext.prototype.aIdentifierOrMarker = function () {
        return this.tryGetRuleContext(0, AIdentifierOrMarkerContext);
    };
    DerivationExpressionContext.prototype.gIdentifierOrMarker = function () {
        return this.tryGetRuleContext(0, GIdentifierOrMarkerContext);
    };
    DerivationExpressionContext.prototype.uIdentifierOrMarker = function () {
        return this.tryGetRuleContext(0, UIdentifierOrMarkerContext);
    };
    Object.defineProperty(DerivationExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_derivationExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DerivationExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterDerivationExpression) {
            listener.enterDerivationExpression(this);
        }
    };
    // @Override
    DerivationExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitDerivationExpression) {
            listener.exitDerivationExpression(this);
        }
    };
    // @Override
    DerivationExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitDerivationExpression) {
            return visitor.visitDerivationExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DerivationExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DerivationExpressionContext = DerivationExpressionContext;
var InfluenceExpressionContext = /** @class */ (function (_super) {
    __extends(InfluenceExpressionContext, _super);
    function InfluenceExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InfluenceExpressionContext.prototype.optionalIdentifier = function () {
        return this.getRuleContext(0, OptionalIdentifierContext);
    };
    InfluenceExpressionContext.prototype.eIdentifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EIdentifierContext);
        }
        else {
            return this.getRuleContext(i, EIdentifierContext);
        }
    };
    InfluenceExpressionContext.prototype.optionalAttributeValuePairs = function () {
        return this.getRuleContext(0, OptionalAttributeValuePairsContext);
    };
    Object.defineProperty(InfluenceExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_influenceExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InfluenceExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterInfluenceExpression) {
            listener.enterInfluenceExpression(this);
        }
    };
    // @Override
    InfluenceExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitInfluenceExpression) {
            listener.exitInfluenceExpression(this);
        }
    };
    // @Override
    InfluenceExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitInfluenceExpression) {
            return visitor.visitInfluenceExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InfluenceExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InfluenceExpressionContext = InfluenceExpressionContext;
var AlternateExpressionContext = /** @class */ (function (_super) {
    __extends(AlternateExpressionContext, _super);
    function AlternateExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlternateExpressionContext.prototype.eIdentifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EIdentifierContext);
        }
        else {
            return this.getRuleContext(i, EIdentifierContext);
        }
    };
    Object.defineProperty(AlternateExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_alternateExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AlternateExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAlternateExpression) {
            listener.enterAlternateExpression(this);
        }
    };
    // @Override
    AlternateExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAlternateExpression) {
            listener.exitAlternateExpression(this);
        }
    };
    // @Override
    AlternateExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAlternateExpression) {
            return visitor.visitAlternateExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AlternateExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AlternateExpressionContext = AlternateExpressionContext;
var SpecializationExpressionContext = /** @class */ (function (_super) {
    __extends(SpecializationExpressionContext, _super);
    function SpecializationExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SpecializationExpressionContext.prototype.eIdentifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EIdentifierContext);
        }
        else {
            return this.getRuleContext(i, EIdentifierContext);
        }
    };
    Object.defineProperty(SpecializationExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_specializationExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SpecializationExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSpecializationExpression) {
            listener.enterSpecializationExpression(this);
        }
    };
    // @Override
    SpecializationExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSpecializationExpression) {
            listener.exitSpecializationExpression(this);
        }
    };
    // @Override
    SpecializationExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSpecializationExpression) {
            return visitor.visitSpecializationExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SpecializationExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SpecializationExpressionContext = SpecializationExpressionContext;
var MembershipExpressionContext = /** @class */ (function (_super) {
    __extends(MembershipExpressionContext, _super);
    function MembershipExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MembershipExpressionContext.prototype.cIdentifier = function () {
        return this.getRuleContext(0, CIdentifierContext);
    };
    MembershipExpressionContext.prototype.eIdentifier = function () {
        return this.getRuleContext(0, EIdentifierContext);
    };
    Object.defineProperty(MembershipExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_membershipExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MembershipExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMembershipExpression) {
            listener.enterMembershipExpression(this);
        }
    };
    // @Override
    MembershipExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMembershipExpression) {
            listener.exitMembershipExpression(this);
        }
    };
    // @Override
    MembershipExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMembershipExpression) {
            return visitor.visitMembershipExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MembershipExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MembershipExpressionContext = MembershipExpressionContext;
var ExtensibilityExpressionContext = /** @class */ (function (_super) {
    __extends(ExtensibilityExpressionContext, _super);
    function ExtensibilityExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtensibilityExpressionContext.prototype.optionalIdentifier = function () {
        return this.getRuleContext(0, OptionalIdentifierContext);
    };
    ExtensibilityExpressionContext.prototype.extensibilityArgument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExtensibilityArgumentContext);
        }
        else {
            return this.getRuleContext(i, ExtensibilityArgumentContext);
        }
    };
    ExtensibilityExpressionContext.prototype.optionalAttributeValuePairs = function () {
        return this.getRuleContext(0, OptionalAttributeValuePairsContext);
    };
    ExtensibilityExpressionContext.prototype.PREFX = function () { return this.tryGetToken(PROV_NParser.PREFX, 0); };
    ExtensibilityExpressionContext.prototype.QUALIFIED_NAME = function () { return this.tryGetToken(PROV_NParser.QUALIFIED_NAME, 0); };
    Object.defineProperty(ExtensibilityExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_extensibilityExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtensibilityExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterExtensibilityExpression) {
            listener.enterExtensibilityExpression(this);
        }
    };
    // @Override
    ExtensibilityExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitExtensibilityExpression) {
            listener.exitExtensibilityExpression(this);
        }
    };
    // @Override
    ExtensibilityExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitExtensibilityExpression) {
            return visitor.visitExtensibilityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtensibilityExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtensibilityExpressionContext = ExtensibilityExpressionContext;
var ExtensibilityArgumentContext = /** @class */ (function (_super) {
    __extends(ExtensibilityArgumentContext, _super);
    function ExtensibilityArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtensibilityArgumentContext.prototype.identifierOrMarker = function () {
        return this.tryGetRuleContext(0, IdentifierOrMarkerContext);
    };
    ExtensibilityArgumentContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    ExtensibilityArgumentContext.prototype.time = function () {
        return this.tryGetRuleContext(0, TimeContext);
    };
    ExtensibilityArgumentContext.prototype.extensibilityExpression = function () {
        return this.tryGetRuleContext(0, ExtensibilityExpressionContext);
    };
    ExtensibilityArgumentContext.prototype.extensibilityTuple = function () {
        return this.tryGetRuleContext(0, ExtensibilityTupleContext);
    };
    Object.defineProperty(ExtensibilityArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_extensibilityArgument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtensibilityArgumentContext.prototype.enterRule = function (listener) {
        if (listener.enterExtensibilityArgument) {
            listener.enterExtensibilityArgument(this);
        }
    };
    // @Override
    ExtensibilityArgumentContext.prototype.exitRule = function (listener) {
        if (listener.exitExtensibilityArgument) {
            listener.exitExtensibilityArgument(this);
        }
    };
    // @Override
    ExtensibilityArgumentContext.prototype.accept = function (visitor) {
        if (visitor.visitExtensibilityArgument) {
            return visitor.visitExtensibilityArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtensibilityArgumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtensibilityArgumentContext = ExtensibilityArgumentContext;
var ExtensibilityTupleContext = /** @class */ (function (_super) {
    __extends(ExtensibilityTupleContext, _super);
    function ExtensibilityTupleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtensibilityTupleContext.prototype.extensibilityArgument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExtensibilityArgumentContext);
        }
        else {
            return this.getRuleContext(i, ExtensibilityArgumentContext);
        }
    };
    Object.defineProperty(ExtensibilityTupleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return PROV_NParser.RULE_extensibilityTuple; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtensibilityTupleContext.prototype.enterRule = function (listener) {
        if (listener.enterExtensibilityTuple) {
            listener.enterExtensibilityTuple(this);
        }
    };
    // @Override
    ExtensibilityTupleContext.prototype.exitRule = function (listener) {
        if (listener.exitExtensibilityTuple) {
            listener.exitExtensibilityTuple(this);
        }
    };
    // @Override
    ExtensibilityTupleContext.prototype.accept = function (visitor) {
        if (visitor.visitExtensibilityTuple) {
            return visitor.visitExtensibilityTuple(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtensibilityTupleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtensibilityTupleContext = ExtensibilityTupleContext;
