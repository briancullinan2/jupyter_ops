"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pascal/pascal.g4 by ANTLR 4.7.3-SNAPSHOT
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
var pascalParser = /** @class */ (function (_super) {
    __extends(pascalParser, _super);
    function pascalParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(pascalParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(pascalParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return pascalParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pascalParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "pascal.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pascalParser.prototype, "ruleNames", {
        // @Override
        get: function () { return pascalParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pascalParser.prototype, "serializedATN", {
        // @Override
        get: function () { return pascalParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    pascalParser.prototype.program = function () {
        var _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, pascalParser.RULE_program);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 194;
                this.programHeading();
                this.state = 196;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.INTERFACE) {
                    {
                        this.state = 195;
                        this.match(pascalParser.INTERFACE);
                    }
                }
                this.state = 198;
                this.block();
                this.state = 199;
                this.match(pascalParser.DOT);
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
    pascalParser.prototype.programHeading = function () {
        var _localctx = new ProgramHeadingContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, pascalParser.RULE_programHeading);
        var _la;
        try {
            this.state = 215;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.PROGRAM:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 201;
                        this.match(pascalParser.PROGRAM);
                        this.state = 202;
                        this.identifier();
                        this.state = 207;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === pascalParser.LPAREN) {
                            {
                                this.state = 203;
                                this.match(pascalParser.LPAREN);
                                this.state = 204;
                                this.identifierList();
                                this.state = 205;
                                this.match(pascalParser.RPAREN);
                            }
                        }
                        this.state = 209;
                        this.match(pascalParser.SEMI);
                    }
                    break;
                case pascalParser.UNIT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 211;
                        this.match(pascalParser.UNIT);
                        this.state = 212;
                        this.identifier();
                        this.state = 213;
                        this.match(pascalParser.SEMI);
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
    pascalParser.prototype.identifier = function () {
        var _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, pascalParser.RULE_identifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 217;
                this.match(pascalParser.IDENT);
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
    pascalParser.prototype.block = function () {
        var _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, pascalParser.RULE_block);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 228;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (pascalParser.CONST - 8)) | (1 << (pascalParser.FUNCTION - 8)) | (1 << (pascalParser.LABEL - 8)) | (1 << (pascalParser.PROCEDURE - 8)) | (1 << (pascalParser.TYPE - 8)) | (1 << (pascalParser.VAR - 8)))) !== 0) || _la === pascalParser.USES || _la === pascalParser.IMPLEMENTATION) {
                    {
                        this.state = 226;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case pascalParser.LABEL:
                                {
                                    this.state = 219;
                                    this.labelDeclarationPart();
                                }
                                break;
                            case pascalParser.CONST:
                                {
                                    this.state = 220;
                                    this.constantDefinitionPart();
                                }
                                break;
                            case pascalParser.TYPE:
                                {
                                    this.state = 221;
                                    this.typeDefinitionPart();
                                }
                                break;
                            case pascalParser.VAR:
                                {
                                    this.state = 222;
                                    this.variableDeclarationPart();
                                }
                                break;
                            case pascalParser.FUNCTION:
                            case pascalParser.PROCEDURE:
                                {
                                    this.state = 223;
                                    this.procedureAndFunctionDeclarationPart();
                                }
                                break;
                            case pascalParser.USES:
                                {
                                    this.state = 224;
                                    this.usesUnitsPart();
                                }
                                break;
                            case pascalParser.IMPLEMENTATION:
                                {
                                    this.state = 225;
                                    this.match(pascalParser.IMPLEMENTATION);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 230;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 231;
                this.compoundStatement();
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
    pascalParser.prototype.usesUnitsPart = function () {
        var _localctx = new UsesUnitsPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, pascalParser.RULE_usesUnitsPart);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 233;
                this.match(pascalParser.USES);
                this.state = 234;
                this.identifierList();
                this.state = 235;
                this.match(pascalParser.SEMI);
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
    pascalParser.prototype.labelDeclarationPart = function () {
        var _localctx = new LabelDeclarationPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, pascalParser.RULE_labelDeclarationPart);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 237;
                this.match(pascalParser.LABEL);
                this.state = 238;
                this.label();
                this.state = 243;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.COMMA) {
                    {
                        {
                            this.state = 239;
                            this.match(pascalParser.COMMA);
                            this.state = 240;
                            this.label();
                        }
                    }
                    this.state = 245;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 246;
                this.match(pascalParser.SEMI);
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
    pascalParser.prototype.label = function () {
        var _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, pascalParser.RULE_label);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 248;
                this.unsignedInteger();
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
    pascalParser.prototype.constantDefinitionPart = function () {
        var _localctx = new ConstantDefinitionPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, pascalParser.RULE_constantDefinitionPart);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 250;
                this.match(pascalParser.CONST);
                this.state = 254;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 251;
                            this.constantDefinition();
                            this.state = 252;
                            this.match(pascalParser.SEMI);
                        }
                    }
                    this.state = 256;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === pascalParser.IDENT);
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
    pascalParser.prototype.constantDefinition = function () {
        var _localctx = new ConstantDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, pascalParser.RULE_constantDefinition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 258;
                this.identifier();
                this.state = 259;
                this.match(pascalParser.EQUAL);
                this.state = 260;
                this.constant();
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
    pascalParser.prototype.constantChr = function () {
        var _localctx = new ConstantChrContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, pascalParser.RULE_constantChr);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 262;
                this.match(pascalParser.CHR);
                this.state = 263;
                this.match(pascalParser.LPAREN);
                this.state = 264;
                this.unsignedInteger();
                this.state = 265;
                this.match(pascalParser.RPAREN);
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
    pascalParser.prototype.constant = function () {
        var _localctx = new ConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, pascalParser.RULE_constant);
        try {
            this.state = 277;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 267;
                        this.unsignedNumber();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 268;
                        this.sign();
                        this.state = 269;
                        this.unsignedNumber();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 271;
                        this.identifier();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 272;
                        this.sign();
                        this.state = 273;
                        this.identifier();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 275;
                        this.string();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 276;
                        this.constantChr();
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
    pascalParser.prototype.unsignedNumber = function () {
        var _localctx = new UnsignedNumberContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, pascalParser.RULE_unsignedNumber);
        try {
            this.state = 281;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.NUM_INT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 279;
                        this.unsignedInteger();
                    }
                    break;
                case pascalParser.NUM_REAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 280;
                        this.unsignedReal();
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
    pascalParser.prototype.unsignedInteger = function () {
        var _localctx = new UnsignedIntegerContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, pascalParser.RULE_unsignedInteger);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 283;
                this.match(pascalParser.NUM_INT);
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
    pascalParser.prototype.unsignedReal = function () {
        var _localctx = new UnsignedRealContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, pascalParser.RULE_unsignedReal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 285;
                this.match(pascalParser.NUM_REAL);
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
    pascalParser.prototype.sign = function () {
        var _localctx = new SignContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, pascalParser.RULE_sign);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 287;
                _la = this._input.LA(1);
                if (!(_la === pascalParser.PLUS || _la === pascalParser.MINUS)) {
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
    pascalParser.prototype.bool = function () {
        var _localctx = new BoolContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, pascalParser.RULE_bool);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 289;
                _la = this._input.LA(1);
                if (!(_la === pascalParser.TRUE || _la === pascalParser.FALSE)) {
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
    pascalParser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, pascalParser.RULE_string);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 291;
                this.match(pascalParser.STRING_LITERAL);
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
    pascalParser.prototype.typeDefinitionPart = function () {
        var _localctx = new TypeDefinitionPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, pascalParser.RULE_typeDefinitionPart);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 293;
                this.match(pascalParser.TYPE);
                this.state = 297;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 294;
                            this.typeDefinition();
                            this.state = 295;
                            this.match(pascalParser.SEMI);
                        }
                    }
                    this.state = 299;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === pascalParser.IDENT);
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
    pascalParser.prototype.typeDefinition = function () {
        var _localctx = new TypeDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, pascalParser.RULE_typeDefinition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 301;
                this.identifier();
                this.state = 302;
                this.match(pascalParser.EQUAL);
                this.state = 306;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case pascalParser.ARRAY:
                    case pascalParser.BOOLEAN:
                    case pascalParser.CHAR:
                    case pascalParser.CHR:
                    case pascalParser.FILE:
                    case pascalParser.INTEGER:
                    case pascalParser.PACKED:
                    case pascalParser.REAL:
                    case pascalParser.RECORD:
                    case pascalParser.SET:
                    case pascalParser.PLUS:
                    case pascalParser.MINUS:
                    case pascalParser.LPAREN:
                    case pascalParser.POINTER:
                    case pascalParser.STRING:
                    case pascalParser.IDENT:
                    case pascalParser.STRING_LITERAL:
                    case pascalParser.NUM_INT:
                    case pascalParser.NUM_REAL:
                        {
                            this.state = 303;
                            this.type();
                        }
                        break;
                    case pascalParser.FUNCTION:
                        {
                            this.state = 304;
                            this.functionType();
                        }
                        break;
                    case pascalParser.PROCEDURE:
                        {
                            this.state = 305;
                            this.procedureType();
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
    pascalParser.prototype.functionType = function () {
        var _localctx = new FunctionTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, pascalParser.RULE_functionType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 308;
                this.match(pascalParser.FUNCTION);
                this.state = 310;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.LPAREN) {
                    {
                        this.state = 309;
                        this.formalParameterList();
                    }
                }
                this.state = 312;
                this.match(pascalParser.COLON);
                this.state = 313;
                this.resultType();
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
    pascalParser.prototype.procedureType = function () {
        var _localctx = new ProcedureTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, pascalParser.RULE_procedureType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 315;
                this.match(pascalParser.PROCEDURE);
                this.state = 317;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.LPAREN) {
                    {
                        this.state = 316;
                        this.formalParameterList();
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
    pascalParser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, pascalParser.RULE_type);
        try {
            this.state = 322;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.BOOLEAN:
                case pascalParser.CHAR:
                case pascalParser.CHR:
                case pascalParser.INTEGER:
                case pascalParser.REAL:
                case pascalParser.PLUS:
                case pascalParser.MINUS:
                case pascalParser.LPAREN:
                case pascalParser.STRING:
                case pascalParser.IDENT:
                case pascalParser.STRING_LITERAL:
                case pascalParser.NUM_INT:
                case pascalParser.NUM_REAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 319;
                        this.simpleType();
                    }
                    break;
                case pascalParser.ARRAY:
                case pascalParser.FILE:
                case pascalParser.PACKED:
                case pascalParser.RECORD:
                case pascalParser.SET:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 320;
                        this.structuredType();
                    }
                    break;
                case pascalParser.POINTER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 321;
                        this.pointerType();
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
    pascalParser.prototype.simpleType = function () {
        var _localctx = new SimpleTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, pascalParser.RULE_simpleType);
        try {
            this.state = 328;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 324;
                        this.scalarType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 325;
                        this.subrangeType();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 326;
                        this.typeIdentifier();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 327;
                        this.stringtype();
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
    pascalParser.prototype.scalarType = function () {
        var _localctx = new ScalarTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, pascalParser.RULE_scalarType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 330;
                this.match(pascalParser.LPAREN);
                this.state = 331;
                this.identifierList();
                this.state = 332;
                this.match(pascalParser.RPAREN);
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
    pascalParser.prototype.subrangeType = function () {
        var _localctx = new SubrangeTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, pascalParser.RULE_subrangeType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 334;
                this.constant();
                this.state = 335;
                this.match(pascalParser.DOTDOT);
                this.state = 336;
                this.constant();
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
    pascalParser.prototype.typeIdentifier = function () {
        var _localctx = new TypeIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, pascalParser.RULE_typeIdentifier);
        var _la;
        try {
            this.state = 340;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.IDENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 338;
                        this.identifier();
                    }
                    break;
                case pascalParser.BOOLEAN:
                case pascalParser.CHAR:
                case pascalParser.INTEGER:
                case pascalParser.REAL:
                case pascalParser.STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 339;
                        _la = this._input.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pascalParser.BOOLEAN) | (1 << pascalParser.CHAR) | (1 << pascalParser.INTEGER) | (1 << pascalParser.REAL))) !== 0) || _la === pascalParser.STRING)) {
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
    pascalParser.prototype.structuredType = function () {
        var _localctx = new StructuredTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, pascalParser.RULE_structuredType);
        try {
            this.state = 345;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.PACKED:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 342;
                        this.match(pascalParser.PACKED);
                        this.state = 343;
                        this.unpackedStructuredType();
                    }
                    break;
                case pascalParser.ARRAY:
                case pascalParser.FILE:
                case pascalParser.RECORD:
                case pascalParser.SET:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 344;
                        this.unpackedStructuredType();
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
    pascalParser.prototype.unpackedStructuredType = function () {
        var _localctx = new UnpackedStructuredTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, pascalParser.RULE_unpackedStructuredType);
        try {
            this.state = 351;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.ARRAY:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 347;
                        this.arrayType();
                    }
                    break;
                case pascalParser.RECORD:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 348;
                        this.recordType();
                    }
                    break;
                case pascalParser.SET:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 349;
                        this.setType();
                    }
                    break;
                case pascalParser.FILE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 350;
                        this.fileType();
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
    pascalParser.prototype.stringtype = function () {
        var _localctx = new StringtypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, pascalParser.RULE_stringtype);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 353;
                this.match(pascalParser.STRING);
                this.state = 354;
                this.match(pascalParser.LBRACK);
                this.state = 357;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case pascalParser.IDENT:
                        {
                            this.state = 355;
                            this.identifier();
                        }
                        break;
                    case pascalParser.NUM_INT:
                    case pascalParser.NUM_REAL:
                        {
                            this.state = 356;
                            this.unsignedNumber();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 359;
                this.match(pascalParser.RBRACK);
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
    pascalParser.prototype.arrayType = function () {
        var _localctx = new ArrayTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, pascalParser.RULE_arrayType);
        try {
            this.state = 375;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 361;
                        this.match(pascalParser.ARRAY);
                        this.state = 362;
                        this.match(pascalParser.LBRACK);
                        this.state = 363;
                        this.typeList();
                        this.state = 364;
                        this.match(pascalParser.RBRACK);
                        this.state = 365;
                        this.match(pascalParser.OF);
                        this.state = 366;
                        this.componentType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 368;
                        this.match(pascalParser.ARRAY);
                        this.state = 369;
                        this.match(pascalParser.LBRACK2);
                        this.state = 370;
                        this.typeList();
                        this.state = 371;
                        this.match(pascalParser.RBRACK2);
                        this.state = 372;
                        this.match(pascalParser.OF);
                        this.state = 373;
                        this.componentType();
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
    pascalParser.prototype.typeList = function () {
        var _localctx = new TypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, pascalParser.RULE_typeList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 377;
                this.indexType();
                this.state = 382;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.COMMA) {
                    {
                        {
                            this.state = 378;
                            this.match(pascalParser.COMMA);
                            this.state = 379;
                            this.indexType();
                        }
                    }
                    this.state = 384;
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
    pascalParser.prototype.indexType = function () {
        var _localctx = new IndexTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, pascalParser.RULE_indexType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 385;
                this.simpleType();
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
    pascalParser.prototype.componentType = function () {
        var _localctx = new ComponentTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, pascalParser.RULE_componentType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 387;
                this.type();
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
    pascalParser.prototype.recordType = function () {
        var _localctx = new RecordTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, pascalParser.RULE_recordType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 389;
                this.match(pascalParser.RECORD);
                this.state = 391;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.CASE || _la === pascalParser.IDENT) {
                    {
                        this.state = 390;
                        this.fieldList();
                    }
                }
                this.state = 393;
                this.match(pascalParser.END);
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
    pascalParser.prototype.fieldList = function () {
        var _localctx = new FieldListContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, pascalParser.RULE_fieldList);
        var _la;
        try {
            this.state = 401;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.IDENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 395;
                        this.fixedPart();
                        this.state = 398;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === pascalParser.SEMI) {
                            {
                                this.state = 396;
                                this.match(pascalParser.SEMI);
                                this.state = 397;
                                this.variantPart();
                            }
                        }
                    }
                    break;
                case pascalParser.CASE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 400;
                        this.variantPart();
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
    pascalParser.prototype.fixedPart = function () {
        var _localctx = new FixedPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, pascalParser.RULE_fixedPart);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 403;
                this.recordSection();
                this.state = 408;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 404;
                                this.match(pascalParser.SEMI);
                                this.state = 405;
                                this.recordSection();
                            }
                        }
                    }
                    this.state = 410;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
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
    pascalParser.prototype.recordSection = function () {
        var _localctx = new RecordSectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, pascalParser.RULE_recordSection);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 411;
                this.identifierList();
                this.state = 412;
                this.match(pascalParser.COLON);
                this.state = 413;
                this.type();
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
    pascalParser.prototype.variantPart = function () {
        var _localctx = new VariantPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, pascalParser.RULE_variantPart);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 415;
                this.match(pascalParser.CASE);
                this.state = 416;
                this.tag();
                this.state = 417;
                this.match(pascalParser.OF);
                this.state = 418;
                this.variant();
                this.state = 423;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.SEMI) {
                    {
                        {
                            this.state = 419;
                            this.match(pascalParser.SEMI);
                            this.state = 420;
                            this.variant();
                        }
                    }
                    this.state = 425;
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
    pascalParser.prototype.tag = function () {
        var _localctx = new TagContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, pascalParser.RULE_tag);
        try {
            this.state = 431;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 426;
                        this.identifier();
                        this.state = 427;
                        this.match(pascalParser.COLON);
                        this.state = 428;
                        this.typeIdentifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 430;
                        this.typeIdentifier();
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
    pascalParser.prototype.variant = function () {
        var _localctx = new VariantContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, pascalParser.RULE_variant);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 433;
                this.constList();
                this.state = 434;
                this.match(pascalParser.COLON);
                this.state = 435;
                this.match(pascalParser.LPAREN);
                this.state = 436;
                this.fieldList();
                this.state = 437;
                this.match(pascalParser.RPAREN);
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
    pascalParser.prototype.setType = function () {
        var _localctx = new SetTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, pascalParser.RULE_setType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 439;
                this.match(pascalParser.SET);
                this.state = 440;
                this.match(pascalParser.OF);
                this.state = 441;
                this.baseType();
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
    pascalParser.prototype.baseType = function () {
        var _localctx = new BaseTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, pascalParser.RULE_baseType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 443;
                this.simpleType();
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
    pascalParser.prototype.fileType = function () {
        var _localctx = new FileTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, pascalParser.RULE_fileType);
        try {
            this.state = 449;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 445;
                        this.match(pascalParser.FILE);
                        this.state = 446;
                        this.match(pascalParser.OF);
                        this.state = 447;
                        this.type();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 448;
                        this.match(pascalParser.FILE);
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
    pascalParser.prototype.pointerType = function () {
        var _localctx = new PointerTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, pascalParser.RULE_pointerType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 451;
                this.match(pascalParser.POINTER);
                this.state = 452;
                this.typeIdentifier();
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
    pascalParser.prototype.variableDeclarationPart = function () {
        var _localctx = new VariableDeclarationPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, pascalParser.RULE_variableDeclarationPart);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 454;
                this.match(pascalParser.VAR);
                this.state = 455;
                this.variableDeclaration();
                this.state = 460;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 456;
                                this.match(pascalParser.SEMI);
                                this.state = 457;
                                this.variableDeclaration();
                            }
                        }
                    }
                    this.state = 462;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
                }
                this.state = 463;
                this.match(pascalParser.SEMI);
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
    pascalParser.prototype.variableDeclaration = function () {
        var _localctx = new VariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, pascalParser.RULE_variableDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 465;
                this.identifierList();
                this.state = 466;
                this.match(pascalParser.COLON);
                this.state = 467;
                this.type();
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
    pascalParser.prototype.procedureAndFunctionDeclarationPart = function () {
        var _localctx = new ProcedureAndFunctionDeclarationPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, pascalParser.RULE_procedureAndFunctionDeclarationPart);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 469;
                this.procedureOrFunctionDeclaration();
                this.state = 470;
                this.match(pascalParser.SEMI);
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
    pascalParser.prototype.procedureOrFunctionDeclaration = function () {
        var _localctx = new ProcedureOrFunctionDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, pascalParser.RULE_procedureOrFunctionDeclaration);
        try {
            this.state = 474;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.PROCEDURE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 472;
                        this.procedureDeclaration();
                    }
                    break;
                case pascalParser.FUNCTION:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 473;
                        this.functionDeclaration();
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
    pascalParser.prototype.procedureDeclaration = function () {
        var _localctx = new ProcedureDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, pascalParser.RULE_procedureDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 476;
                this.match(pascalParser.PROCEDURE);
                this.state = 477;
                this.identifier();
                this.state = 479;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.LPAREN) {
                    {
                        this.state = 478;
                        this.formalParameterList();
                    }
                }
                this.state = 481;
                this.match(pascalParser.SEMI);
                this.state = 482;
                this.block();
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
    pascalParser.prototype.formalParameterList = function () {
        var _localctx = new FormalParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, pascalParser.RULE_formalParameterList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 484;
                this.match(pascalParser.LPAREN);
                this.state = 485;
                this.formalParameterSection();
                this.state = 490;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.SEMI) {
                    {
                        {
                            this.state = 486;
                            this.match(pascalParser.SEMI);
                            this.state = 487;
                            this.formalParameterSection();
                        }
                    }
                    this.state = 492;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 493;
                this.match(pascalParser.RPAREN);
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
    pascalParser.prototype.formalParameterSection = function () {
        var _localctx = new FormalParameterSectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, pascalParser.RULE_formalParameterSection);
        try {
            this.state = 502;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.IDENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 495;
                        this.parameterGroup();
                    }
                    break;
                case pascalParser.VAR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 496;
                        this.match(pascalParser.VAR);
                        this.state = 497;
                        this.parameterGroup();
                    }
                    break;
                case pascalParser.FUNCTION:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 498;
                        this.match(pascalParser.FUNCTION);
                        this.state = 499;
                        this.parameterGroup();
                    }
                    break;
                case pascalParser.PROCEDURE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 500;
                        this.match(pascalParser.PROCEDURE);
                        this.state = 501;
                        this.parameterGroup();
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
    pascalParser.prototype.parameterGroup = function () {
        var _localctx = new ParameterGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, pascalParser.RULE_parameterGroup);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 504;
                this.identifierList();
                this.state = 505;
                this.match(pascalParser.COLON);
                this.state = 506;
                this.typeIdentifier();
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
    pascalParser.prototype.identifierList = function () {
        var _localctx = new IdentifierListContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, pascalParser.RULE_identifierList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 508;
                this.identifier();
                this.state = 513;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.COMMA) {
                    {
                        {
                            this.state = 509;
                            this.match(pascalParser.COMMA);
                            this.state = 510;
                            this.identifier();
                        }
                    }
                    this.state = 515;
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
    pascalParser.prototype.constList = function () {
        var _localctx = new ConstListContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, pascalParser.RULE_constList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 516;
                this.constant();
                this.state = 521;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.COMMA) {
                    {
                        {
                            this.state = 517;
                            this.match(pascalParser.COMMA);
                            this.state = 518;
                            this.constant();
                        }
                    }
                    this.state = 523;
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
    pascalParser.prototype.functionDeclaration = function () {
        var _localctx = new FunctionDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, pascalParser.RULE_functionDeclaration);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 524;
                this.match(pascalParser.FUNCTION);
                this.state = 525;
                this.identifier();
                this.state = 527;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.LPAREN) {
                    {
                        this.state = 526;
                        this.formalParameterList();
                    }
                }
                this.state = 529;
                this.match(pascalParser.COLON);
                this.state = 530;
                this.resultType();
                this.state = 531;
                this.match(pascalParser.SEMI);
                this.state = 532;
                this.block();
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
    pascalParser.prototype.resultType = function () {
        var _localctx = new ResultTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, pascalParser.RULE_resultType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 534;
                this.typeIdentifier();
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
    pascalParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, pascalParser.RULE_statement);
        try {
            this.state = 541;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.NUM_INT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 536;
                        this.label();
                        this.state = 537;
                        this.match(pascalParser.COLON);
                        this.state = 538;
                        this.unlabelledStatement();
                    }
                    break;
                case pascalParser.BEGIN:
                case pascalParser.CASE:
                case pascalParser.ELSE:
                case pascalParser.END:
                case pascalParser.FOR:
                case pascalParser.GOTO:
                case pascalParser.IF:
                case pascalParser.REPEAT:
                case pascalParser.UNTIL:
                case pascalParser.WHILE:
                case pascalParser.WITH:
                case pascalParser.SEMI:
                case pascalParser.AT:
                case pascalParser.IDENT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 540;
                        this.unlabelledStatement();
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
    pascalParser.prototype.unlabelledStatement = function () {
        var _localctx = new UnlabelledStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, pascalParser.RULE_unlabelledStatement);
        try {
            this.state = 545;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.ELSE:
                case pascalParser.END:
                case pascalParser.GOTO:
                case pascalParser.UNTIL:
                case pascalParser.SEMI:
                case pascalParser.AT:
                case pascalParser.IDENT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 543;
                        this.simpleStatement();
                    }
                    break;
                case pascalParser.BEGIN:
                case pascalParser.CASE:
                case pascalParser.FOR:
                case pascalParser.IF:
                case pascalParser.REPEAT:
                case pascalParser.WHILE:
                case pascalParser.WITH:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 544;
                        this.structuredStatement();
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
    pascalParser.prototype.simpleStatement = function () {
        var _localctx = new SimpleStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, pascalParser.RULE_simpleStatement);
        try {
            this.state = 551;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 547;
                        this.assignmentStatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 548;
                        this.procedureStatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 549;
                        this.gotoStatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 550;
                        this.emptyStatement();
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
    pascalParser.prototype.assignmentStatement = function () {
        var _localctx = new AssignmentStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, pascalParser.RULE_assignmentStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 553;
                this.variable();
                this.state = 554;
                this.match(pascalParser.ASSIGN);
                this.state = 555;
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
    pascalParser.prototype.variable = function () {
        var _localctx = new VariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, pascalParser.RULE_variable);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 560;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case pascalParser.AT:
                        {
                            this.state = 557;
                            this.match(pascalParser.AT);
                            this.state = 558;
                            this.identifier();
                        }
                        break;
                    case pascalParser.IDENT:
                        {
                            this.state = 559;
                            this.identifier();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 589;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (pascalParser.LBRACK - 57)) | (1 << (pascalParser.LBRACK2 - 57)) | (1 << (pascalParser.POINTER - 57)) | (1 << (pascalParser.DOT - 57)))) !== 0)) {
                    {
                        this.state = 587;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case pascalParser.LBRACK:
                                {
                                    this.state = 562;
                                    this.match(pascalParser.LBRACK);
                                    this.state = 563;
                                    this.expression();
                                    this.state = 568;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === pascalParser.COMMA) {
                                        {
                                            {
                                                this.state = 564;
                                                this.match(pascalParser.COMMA);
                                                this.state = 565;
                                                this.expression();
                                            }
                                        }
                                        this.state = 570;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 571;
                                    this.match(pascalParser.RBRACK);
                                }
                                break;
                            case pascalParser.LBRACK2:
                                {
                                    this.state = 573;
                                    this.match(pascalParser.LBRACK2);
                                    this.state = 574;
                                    this.expression();
                                    this.state = 579;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === pascalParser.COMMA) {
                                        {
                                            {
                                                this.state = 575;
                                                this.match(pascalParser.COMMA);
                                                this.state = 576;
                                                this.expression();
                                            }
                                        }
                                        this.state = 581;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 582;
                                    this.match(pascalParser.RBRACK2);
                                }
                                break;
                            case pascalParser.DOT:
                                {
                                    this.state = 584;
                                    this.match(pascalParser.DOT);
                                    this.state = 585;
                                    this.identifier();
                                }
                                break;
                            case pascalParser.POINTER:
                                {
                                    this.state = 586;
                                    this.match(pascalParser.POINTER);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 591;
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
    pascalParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, pascalParser.RULE_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 592;
                this.simpleExpression();
                this.state = 596;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.IN || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (pascalParser.EQUAL - 49)) | (1 << (pascalParser.NOT_EQUAL - 49)) | (1 << (pascalParser.LT - 49)) | (1 << (pascalParser.LE - 49)) | (1 << (pascalParser.GE - 49)) | (1 << (pascalParser.GT - 49)))) !== 0)) {
                    {
                        this.state = 593;
                        this.relationaloperator();
                        this.state = 594;
                        this.expression();
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
    pascalParser.prototype.relationaloperator = function () {
        var _localctx = new RelationaloperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, pascalParser.RULE_relationaloperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 598;
                _la = this._input.LA(1);
                if (!(_la === pascalParser.IN || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (pascalParser.EQUAL - 49)) | (1 << (pascalParser.NOT_EQUAL - 49)) | (1 << (pascalParser.LT - 49)) | (1 << (pascalParser.LE - 49)) | (1 << (pascalParser.GE - 49)) | (1 << (pascalParser.GT - 49)))) !== 0))) {
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
    pascalParser.prototype.simpleExpression = function () {
        var _localctx = new SimpleExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, pascalParser.RULE_simpleExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 600;
                this.term();
                this.state = 604;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (pascalParser.OR - 26)) | (1 << (pascalParser.PLUS - 26)) | (1 << (pascalParser.MINUS - 26)))) !== 0)) {
                    {
                        this.state = 601;
                        this.additiveoperator();
                        this.state = 602;
                        this.simpleExpression();
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
    pascalParser.prototype.additiveoperator = function () {
        var _localctx = new AdditiveoperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, pascalParser.RULE_additiveoperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 606;
                _la = this._input.LA(1);
                if (!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (pascalParser.OR - 26)) | (1 << (pascalParser.PLUS - 26)) | (1 << (pascalParser.MINUS - 26)))) !== 0))) {
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
    pascalParser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, pascalParser.RULE_term);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 608;
                this.signedFactor();
                this.state = 612;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pascalParser.AND) | (1 << pascalParser.DIV) | (1 << pascalParser.MOD))) !== 0) || _la === pascalParser.STAR || _la === pascalParser.SLASH) {
                    {
                        this.state = 609;
                        this.multiplicativeoperator();
                        this.state = 610;
                        this.term();
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
    pascalParser.prototype.multiplicativeoperator = function () {
        var _localctx = new MultiplicativeoperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, pascalParser.RULE_multiplicativeoperator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 614;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pascalParser.AND) | (1 << pascalParser.DIV) | (1 << pascalParser.MOD))) !== 0) || _la === pascalParser.STAR || _la === pascalParser.SLASH)) {
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
    pascalParser.prototype.signedFactor = function () {
        var _localctx = new SignedFactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, pascalParser.RULE_signedFactor);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 617;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.PLUS || _la === pascalParser.MINUS) {
                    {
                        this.state = 616;
                        _la = this._input.LA(1);
                        if (!(_la === pascalParser.PLUS || _la === pascalParser.MINUS)) {
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
                this.state = 619;
                this.factor();
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
    pascalParser.prototype.factor = function () {
        var _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, pascalParser.RULE_factor);
        try {
            this.state = 632;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 621;
                        this.variable();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 622;
                        this.match(pascalParser.LPAREN);
                        this.state = 623;
                        this.expression();
                        this.state = 624;
                        this.match(pascalParser.RPAREN);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 626;
                        this.functionDesignator();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 627;
                        this.unsignedConstant();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 628;
                        this.set();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 629;
                        this.match(pascalParser.NOT);
                        this.state = 630;
                        this.factor();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 631;
                        this.bool();
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
    pascalParser.prototype.unsignedConstant = function () {
        var _localctx = new UnsignedConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, pascalParser.RULE_unsignedConstant);
        try {
            this.state = 638;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.NUM_INT:
                case pascalParser.NUM_REAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 634;
                        this.unsignedNumber();
                    }
                    break;
                case pascalParser.CHR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 635;
                        this.constantChr();
                    }
                    break;
                case pascalParser.STRING_LITERAL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 636;
                        this.string();
                    }
                    break;
                case pascalParser.NIL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 637;
                        this.match(pascalParser.NIL);
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
    pascalParser.prototype.functionDesignator = function () {
        var _localctx = new FunctionDesignatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, pascalParser.RULE_functionDesignator);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 640;
                this.identifier();
                this.state = 641;
                this.match(pascalParser.LPAREN);
                this.state = 642;
                this.parameterList();
                this.state = 643;
                this.match(pascalParser.RPAREN);
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
    pascalParser.prototype.parameterList = function () {
        var _localctx = new ParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, pascalParser.RULE_parameterList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 645;
                this.actualParameter();
                this.state = 650;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.COMMA) {
                    {
                        {
                            this.state = 646;
                            this.match(pascalParser.COMMA);
                            this.state = 647;
                            this.actualParameter();
                        }
                    }
                    this.state = 652;
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
    pascalParser.prototype.set = function () {
        var _localctx = new SetContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, pascalParser.RULE_set);
        try {
            this.state = 661;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.LBRACK:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 653;
                        this.match(pascalParser.LBRACK);
                        this.state = 654;
                        this.elementList();
                        this.state = 655;
                        this.match(pascalParser.RBRACK);
                    }
                    break;
                case pascalParser.LBRACK2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 657;
                        this.match(pascalParser.LBRACK2);
                        this.state = 658;
                        this.elementList();
                        this.state = 659;
                        this.match(pascalParser.RBRACK2);
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
    pascalParser.prototype.elementList = function () {
        var _localctx = new ElementListContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, pascalParser.RULE_elementList);
        var _la;
        try {
            this.state = 672;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.CHR:
                case pascalParser.NIL:
                case pascalParser.NOT:
                case pascalParser.PLUS:
                case pascalParser.MINUS:
                case pascalParser.LPAREN:
                case pascalParser.LBRACK:
                case pascalParser.LBRACK2:
                case pascalParser.AT:
                case pascalParser.TRUE:
                case pascalParser.FALSE:
                case pascalParser.IDENT:
                case pascalParser.STRING_LITERAL:
                case pascalParser.NUM_INT:
                case pascalParser.NUM_REAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 663;
                        this.element();
                        this.state = 668;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === pascalParser.COMMA) {
                            {
                                {
                                    this.state = 664;
                                    this.match(pascalParser.COMMA);
                                    this.state = 665;
                                    this.element();
                                }
                            }
                            this.state = 670;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case pascalParser.RBRACK:
                case pascalParser.RBRACK2:
                    this.enterOuterAlt(_localctx, 2);
                    // tslint:disable-next-line:no-empty
                    {
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
    pascalParser.prototype.element = function () {
        var _localctx = new ElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, pascalParser.RULE_element);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 674;
                this.expression();
                this.state = 677;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.DOTDOT) {
                    {
                        this.state = 675;
                        this.match(pascalParser.DOTDOT);
                        this.state = 676;
                        this.expression();
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
    pascalParser.prototype.procedureStatement = function () {
        var _localctx = new ProcedureStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, pascalParser.RULE_procedureStatement);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 679;
                this.identifier();
                this.state = 684;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.LPAREN) {
                    {
                        this.state = 680;
                        this.match(pascalParser.LPAREN);
                        this.state = 681;
                        this.parameterList();
                        this.state = 682;
                        this.match(pascalParser.RPAREN);
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
    pascalParser.prototype.actualParameter = function () {
        var _localctx = new ActualParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, pascalParser.RULE_actualParameter);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 686;
                this.expression();
                this.state = 690;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.COLON) {
                    {
                        {
                            this.state = 687;
                            this.parameterwidth();
                        }
                    }
                    this.state = 692;
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
    pascalParser.prototype.parameterwidth = function () {
        var _localctx = new ParameterwidthContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, pascalParser.RULE_parameterwidth);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 693;
                this.match(pascalParser.COLON);
                this.state = 694;
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
    pascalParser.prototype.gotoStatement = function () {
        var _localctx = new GotoStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, pascalParser.RULE_gotoStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 696;
                this.match(pascalParser.GOTO);
                this.state = 697;
                this.label();
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
    pascalParser.prototype.emptyStatement = function () {
        var _localctx = new EmptyStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, pascalParser.RULE_emptyStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
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
    pascalParser.prototype.empty = function () {
        var _localctx = new EmptyContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, pascalParser.RULE_empty);
        try {
            this.enterOuterAlt(_localctx, 1);
            // tslint:disable-next-line:no-empty
            {
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
    pascalParser.prototype.structuredStatement = function () {
        var _localctx = new StructuredStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, pascalParser.RULE_structuredStatement);
        try {
            this.state = 707;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.BEGIN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 703;
                        this.compoundStatement();
                    }
                    break;
                case pascalParser.CASE:
                case pascalParser.IF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 704;
                        this.conditionalStatement();
                    }
                    break;
                case pascalParser.FOR:
                case pascalParser.REPEAT:
                case pascalParser.WHILE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 705;
                        this.repetetiveStatement();
                    }
                    break;
                case pascalParser.WITH:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 706;
                        this.withStatement();
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
    pascalParser.prototype.compoundStatement = function () {
        var _localctx = new CompoundStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, pascalParser.RULE_compoundStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 709;
                this.match(pascalParser.BEGIN);
                this.state = 710;
                this.statements();
                this.state = 711;
                this.match(pascalParser.END);
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
    pascalParser.prototype.statements = function () {
        var _localctx = new StatementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, pascalParser.RULE_statements);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 713;
                this.statement();
                this.state = 718;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.SEMI) {
                    {
                        {
                            this.state = 714;
                            this.match(pascalParser.SEMI);
                            this.state = 715;
                            this.statement();
                        }
                    }
                    this.state = 720;
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
    pascalParser.prototype.conditionalStatement = function () {
        var _localctx = new ConditionalStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, pascalParser.RULE_conditionalStatement);
        try {
            this.state = 723;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.IF:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 721;
                        this.ifStatement();
                    }
                    break;
                case pascalParser.CASE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 722;
                        this.caseStatement();
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
    pascalParser.prototype.ifStatement = function () {
        var _localctx = new IfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, pascalParser.RULE_ifStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 725;
                this.match(pascalParser.IF);
                this.state = 726;
                this.expression();
                this.state = 727;
                this.match(pascalParser.THEN);
                this.state = 728;
                this.statement();
                this.state = 731;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                    case 1:
                        {
                            this.state = 729;
                            this.match(pascalParser.ELSE);
                            this.state = 730;
                            this.statement();
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
    pascalParser.prototype.caseStatement = function () {
        var _localctx = new CaseStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, pascalParser.RULE_caseStatement);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 733;
                this.match(pascalParser.CASE);
                this.state = 734;
                this.expression();
                this.state = 735;
                this.match(pascalParser.OF);
                this.state = 736;
                this.caseListElement();
                this.state = 741;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 737;
                                this.match(pascalParser.SEMI);
                                this.state = 738;
                                this.caseListElement();
                            }
                        }
                    }
                    this.state = 743;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                }
                this.state = 747;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pascalParser.SEMI) {
                    {
                        this.state = 744;
                        this.match(pascalParser.SEMI);
                        this.state = 745;
                        this.match(pascalParser.ELSE);
                        this.state = 746;
                        this.statements();
                    }
                }
                this.state = 749;
                this.match(pascalParser.END);
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
    pascalParser.prototype.caseListElement = function () {
        var _localctx = new CaseListElementContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, pascalParser.RULE_caseListElement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 751;
                this.constList();
                this.state = 752;
                this.match(pascalParser.COLON);
                this.state = 753;
                this.statement();
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
    pascalParser.prototype.repetetiveStatement = function () {
        var _localctx = new RepetetiveStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, pascalParser.RULE_repetetiveStatement);
        try {
            this.state = 758;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pascalParser.WHILE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 755;
                        this.whileStatement();
                    }
                    break;
                case pascalParser.REPEAT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 756;
                        this.repeatStatement();
                    }
                    break;
                case pascalParser.FOR:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 757;
                        this.forStatement();
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
    pascalParser.prototype.whileStatement = function () {
        var _localctx = new WhileStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, pascalParser.RULE_whileStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 760;
                this.match(pascalParser.WHILE);
                this.state = 761;
                this.expression();
                this.state = 762;
                this.match(pascalParser.DO);
                this.state = 763;
                this.statement();
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
    pascalParser.prototype.repeatStatement = function () {
        var _localctx = new RepeatStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, pascalParser.RULE_repeatStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 765;
                this.match(pascalParser.REPEAT);
                this.state = 766;
                this.statements();
                this.state = 767;
                this.match(pascalParser.UNTIL);
                this.state = 768;
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
    pascalParser.prototype.forStatement = function () {
        var _localctx = new ForStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, pascalParser.RULE_forStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 770;
                this.match(pascalParser.FOR);
                this.state = 771;
                this.identifier();
                this.state = 772;
                this.match(pascalParser.ASSIGN);
                this.state = 773;
                this.forList();
                this.state = 774;
                this.match(pascalParser.DO);
                this.state = 775;
                this.statement();
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
    pascalParser.prototype.forList = function () {
        var _localctx = new ForListContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, pascalParser.RULE_forList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 777;
                this.initialValue();
                this.state = 778;
                _la = this._input.LA(1);
                if (!(_la === pascalParser.DOWNTO || _la === pascalParser.TO)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 779;
                this.finalValue();
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
    pascalParser.prototype.initialValue = function () {
        var _localctx = new InitialValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, pascalParser.RULE_initialValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 781;
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
    pascalParser.prototype.finalValue = function () {
        var _localctx = new FinalValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, pascalParser.RULE_finalValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 783;
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
    pascalParser.prototype.withStatement = function () {
        var _localctx = new WithStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, pascalParser.RULE_withStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 785;
                this.match(pascalParser.WITH);
                this.state = 786;
                this.recordVariableList();
                this.state = 787;
                this.match(pascalParser.DO);
                this.state = 788;
                this.statement();
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
    pascalParser.prototype.recordVariableList = function () {
        var _localctx = new RecordVariableListContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, pascalParser.RULE_recordVariableList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 790;
                this.variable();
                this.state = 795;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pascalParser.COMMA) {
                    {
                        {
                            this.state = 791;
                            this.match(pascalParser.COMMA);
                            this.state = 792;
                            this.variable();
                        }
                    }
                    this.state = 797;
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
    Object.defineProperty(pascalParser, "_ATN", {
        get: function () {
            if (!pascalParser.__ATN) {
                pascalParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(pascalParser._serializedATN));
            }
            return pascalParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    pascalParser.AND = 1;
    pascalParser.ARRAY = 2;
    pascalParser.BEGIN = 3;
    pascalParser.BOOLEAN = 4;
    pascalParser.CASE = 5;
    pascalParser.CHAR = 6;
    pascalParser.CHR = 7;
    pascalParser.CONST = 8;
    pascalParser.DIV = 9;
    pascalParser.DO = 10;
    pascalParser.DOWNTO = 11;
    pascalParser.ELSE = 12;
    pascalParser.END = 13;
    pascalParser.FILE = 14;
    pascalParser.FOR = 15;
    pascalParser.FUNCTION = 16;
    pascalParser.GOTO = 17;
    pascalParser.IF = 18;
    pascalParser.IN = 19;
    pascalParser.INTEGER = 20;
    pascalParser.LABEL = 21;
    pascalParser.MOD = 22;
    pascalParser.NIL = 23;
    pascalParser.NOT = 24;
    pascalParser.OF = 25;
    pascalParser.OR = 26;
    pascalParser.PACKED = 27;
    pascalParser.PROCEDURE = 28;
    pascalParser.PROGRAM = 29;
    pascalParser.REAL = 30;
    pascalParser.RECORD = 31;
    pascalParser.REPEAT = 32;
    pascalParser.SET = 33;
    pascalParser.THEN = 34;
    pascalParser.TO = 35;
    pascalParser.TYPE = 36;
    pascalParser.UNTIL = 37;
    pascalParser.VAR = 38;
    pascalParser.WHILE = 39;
    pascalParser.WITH = 40;
    pascalParser.PLUS = 41;
    pascalParser.MINUS = 42;
    pascalParser.STAR = 43;
    pascalParser.SLASH = 44;
    pascalParser.ASSIGN = 45;
    pascalParser.COMMA = 46;
    pascalParser.SEMI = 47;
    pascalParser.COLON = 48;
    pascalParser.EQUAL = 49;
    pascalParser.NOT_EQUAL = 50;
    pascalParser.LT = 51;
    pascalParser.LE = 52;
    pascalParser.GE = 53;
    pascalParser.GT = 54;
    pascalParser.LPAREN = 55;
    pascalParser.RPAREN = 56;
    pascalParser.LBRACK = 57;
    pascalParser.LBRACK2 = 58;
    pascalParser.RBRACK = 59;
    pascalParser.RBRACK2 = 60;
    pascalParser.POINTER = 61;
    pascalParser.AT = 62;
    pascalParser.DOT = 63;
    pascalParser.DOTDOT = 64;
    pascalParser.LCURLY = 65;
    pascalParser.RCURLY = 66;
    pascalParser.UNIT = 67;
    pascalParser.INTERFACE = 68;
    pascalParser.USES = 69;
    pascalParser.STRING = 70;
    pascalParser.IMPLEMENTATION = 71;
    pascalParser.TRUE = 72;
    pascalParser.FALSE = 73;
    pascalParser.WS = 74;
    pascalParser.COMMENT_1 = 75;
    pascalParser.COMMENT_2 = 76;
    pascalParser.IDENT = 77;
    pascalParser.STRING_LITERAL = 78;
    pascalParser.NUM_INT = 79;
    pascalParser.NUM_REAL = 80;
    pascalParser.RULE_program = 0;
    pascalParser.RULE_programHeading = 1;
    pascalParser.RULE_identifier = 2;
    pascalParser.RULE_block = 3;
    pascalParser.RULE_usesUnitsPart = 4;
    pascalParser.RULE_labelDeclarationPart = 5;
    pascalParser.RULE_label = 6;
    pascalParser.RULE_constantDefinitionPart = 7;
    pascalParser.RULE_constantDefinition = 8;
    pascalParser.RULE_constantChr = 9;
    pascalParser.RULE_constant = 10;
    pascalParser.RULE_unsignedNumber = 11;
    pascalParser.RULE_unsignedInteger = 12;
    pascalParser.RULE_unsignedReal = 13;
    pascalParser.RULE_sign = 14;
    pascalParser.RULE_bool = 15;
    pascalParser.RULE_string = 16;
    pascalParser.RULE_typeDefinitionPart = 17;
    pascalParser.RULE_typeDefinition = 18;
    pascalParser.RULE_functionType = 19;
    pascalParser.RULE_procedureType = 20;
    pascalParser.RULE_type = 21;
    pascalParser.RULE_simpleType = 22;
    pascalParser.RULE_scalarType = 23;
    pascalParser.RULE_subrangeType = 24;
    pascalParser.RULE_typeIdentifier = 25;
    pascalParser.RULE_structuredType = 26;
    pascalParser.RULE_unpackedStructuredType = 27;
    pascalParser.RULE_stringtype = 28;
    pascalParser.RULE_arrayType = 29;
    pascalParser.RULE_typeList = 30;
    pascalParser.RULE_indexType = 31;
    pascalParser.RULE_componentType = 32;
    pascalParser.RULE_recordType = 33;
    pascalParser.RULE_fieldList = 34;
    pascalParser.RULE_fixedPart = 35;
    pascalParser.RULE_recordSection = 36;
    pascalParser.RULE_variantPart = 37;
    pascalParser.RULE_tag = 38;
    pascalParser.RULE_variant = 39;
    pascalParser.RULE_setType = 40;
    pascalParser.RULE_baseType = 41;
    pascalParser.RULE_fileType = 42;
    pascalParser.RULE_pointerType = 43;
    pascalParser.RULE_variableDeclarationPart = 44;
    pascalParser.RULE_variableDeclaration = 45;
    pascalParser.RULE_procedureAndFunctionDeclarationPart = 46;
    pascalParser.RULE_procedureOrFunctionDeclaration = 47;
    pascalParser.RULE_procedureDeclaration = 48;
    pascalParser.RULE_formalParameterList = 49;
    pascalParser.RULE_formalParameterSection = 50;
    pascalParser.RULE_parameterGroup = 51;
    pascalParser.RULE_identifierList = 52;
    pascalParser.RULE_constList = 53;
    pascalParser.RULE_functionDeclaration = 54;
    pascalParser.RULE_resultType = 55;
    pascalParser.RULE_statement = 56;
    pascalParser.RULE_unlabelledStatement = 57;
    pascalParser.RULE_simpleStatement = 58;
    pascalParser.RULE_assignmentStatement = 59;
    pascalParser.RULE_variable = 60;
    pascalParser.RULE_expression = 61;
    pascalParser.RULE_relationaloperator = 62;
    pascalParser.RULE_simpleExpression = 63;
    pascalParser.RULE_additiveoperator = 64;
    pascalParser.RULE_term = 65;
    pascalParser.RULE_multiplicativeoperator = 66;
    pascalParser.RULE_signedFactor = 67;
    pascalParser.RULE_factor = 68;
    pascalParser.RULE_unsignedConstant = 69;
    pascalParser.RULE_functionDesignator = 70;
    pascalParser.RULE_parameterList = 71;
    pascalParser.RULE_set = 72;
    pascalParser.RULE_elementList = 73;
    pascalParser.RULE_element = 74;
    pascalParser.RULE_procedureStatement = 75;
    pascalParser.RULE_actualParameter = 76;
    pascalParser.RULE_parameterwidth = 77;
    pascalParser.RULE_gotoStatement = 78;
    pascalParser.RULE_emptyStatement = 79;
    pascalParser.RULE_empty = 80;
    pascalParser.RULE_structuredStatement = 81;
    pascalParser.RULE_compoundStatement = 82;
    pascalParser.RULE_statements = 83;
    pascalParser.RULE_conditionalStatement = 84;
    pascalParser.RULE_ifStatement = 85;
    pascalParser.RULE_caseStatement = 86;
    pascalParser.RULE_caseListElement = 87;
    pascalParser.RULE_repetetiveStatement = 88;
    pascalParser.RULE_whileStatement = 89;
    pascalParser.RULE_repeatStatement = 90;
    pascalParser.RULE_forStatement = 91;
    pascalParser.RULE_forList = 92;
    pascalParser.RULE_initialValue = 93;
    pascalParser.RULE_finalValue = 94;
    pascalParser.RULE_withStatement = 95;
    pascalParser.RULE_recordVariableList = 96;
    // tslint:disable:no-trailing-whitespace
    pascalParser.ruleNames = [
        "program", "programHeading", "identifier", "block", "usesUnitsPart", "labelDeclarationPart",
        "label", "constantDefinitionPart", "constantDefinition", "constantChr",
        "constant", "unsignedNumber", "unsignedInteger", "unsignedReal", "sign",
        "bool", "string", "typeDefinitionPart", "typeDefinition", "functionType",
        "procedureType", "type", "simpleType", "scalarType", "subrangeType", "typeIdentifier",
        "structuredType", "unpackedStructuredType", "stringtype", "arrayType",
        "typeList", "indexType", "componentType", "recordType", "fieldList", "fixedPart",
        "recordSection", "variantPart", "tag", "variant", "setType", "baseType",
        "fileType", "pointerType", "variableDeclarationPart", "variableDeclaration",
        "procedureAndFunctionDeclarationPart", "procedureOrFunctionDeclaration",
        "procedureDeclaration", "formalParameterList", "formalParameterSection",
        "parameterGroup", "identifierList", "constList", "functionDeclaration",
        "resultType", "statement", "unlabelledStatement", "simpleStatement", "assignmentStatement",
        "variable", "expression", "relationaloperator", "simpleExpression", "additiveoperator",
        "term", "multiplicativeoperator", "signedFactor", "factor", "unsignedConstant",
        "functionDesignator", "parameterList", "set", "elementList", "element",
        "procedureStatement", "actualParameter", "parameterwidth", "gotoStatement",
        "emptyStatement", "empty", "structuredStatement", "compoundStatement",
        "statements", "conditionalStatement", "ifStatement", "caseStatement",
        "caseListElement", "repetetiveStatement", "whileStatement", "repeatStatement",
        "forStatement", "forList", "initialValue", "finalValue", "withStatement",
        "recordVariableList",
    ];
    pascalParser._LITERAL_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, "'+'",
        "'-'", "'*'", "'/'", "':='", "','", "';'", "':'", "'='", "'<>'", "'<'",
        "'<='", "'>='", "'>'", "'('", "')'", "'['", "'(.'", "']'", "'.)'", "'^'",
        "'@'", "'.'", "'..'", "'{'", "'}'",
    ];
    pascalParser._SYMBOLIC_NAMES = [
        undefined, "AND", "ARRAY", "BEGIN", "BOOLEAN", "CASE", "CHAR", "CHR",
        "CONST", "DIV", "DO", "DOWNTO", "ELSE", "END", "FILE", "FOR", "FUNCTION",
        "GOTO", "IF", "IN", "INTEGER", "LABEL", "MOD", "NIL", "NOT", "OF", "OR",
        "PACKED", "PROCEDURE", "PROGRAM", "REAL", "RECORD", "REPEAT", "SET", "THEN",
        "TO", "TYPE", "UNTIL", "VAR", "WHILE", "WITH", "PLUS", "MINUS", "STAR",
        "SLASH", "ASSIGN", "COMMA", "SEMI", "COLON", "EQUAL", "NOT_EQUAL", "LT",
        "LE", "GE", "GT", "LPAREN", "RPAREN", "LBRACK", "LBRACK2", "RBRACK", "RBRACK2",
        "POINTER", "AT", "DOT", "DOTDOT", "LCURLY", "RCURLY", "UNIT", "INTERFACE",
        "USES", "STRING", "IMPLEMENTATION", "TRUE", "FALSE", "WS", "COMMENT_1",
        "COMMENT_2", "IDENT", "STRING_LITERAL", "NUM_INT", "NUM_REAL",
    ];
    pascalParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(pascalParser._LITERAL_NAMES, pascalParser._SYMBOLIC_NAMES, []);
    pascalParser._serializedATNSegments = 2;
    pascalParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03R\u0321\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
        "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
        "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
        "`\x04a\ta\x04b\tb\x03\x02\x03\x02\x05\x02\xC7\n\x02\x03\x02\x03\x02\x03" +
        "\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xD2\n\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xDA\n\x03\x03" +
        "\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07" +
        "\x05\xE5\n\x05\f\x05\x0E\x05\xE8\v\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\xF4\n\x07\f\x07" +
        "\x0E\x07\xF7\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t" +
        "\x06\t\u0101\n\t\r\t\x0E\t\u0102\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03" +
        "\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
        "\f\x05\f\u0118\n\f\x03\r\x03\r\x05\r\u011C\n\r\x03\x0E\x03\x0E\x03\x0F" +
        "\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13" +
        "\x03\x13\x03\x13\x06\x13\u012C\n\x13\r\x13\x0E\x13\u012D\x03\x14\x03\x14" +
        "\x03\x14\x03\x14\x03\x14\x05\x14\u0135\n\x14\x03\x15\x03\x15\x05\x15\u0139" +
        "\n\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u0140\n\x16\x03" +
        "\x17\x03\x17\x03\x17\x05\x17\u0145\n\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
        "\x05\x18\u014B\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
        "\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\u0157\n\x1B\x03\x1C\x03\x1C\x03\x1C" +
        "\x05\x1C\u015C\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0162\n\x1D" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0168\n\x1E\x03\x1E\x03\x1E\x03" +
        "\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
        "\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u017A\n\x1F\x03 \x03 \x03" +
        " \x07 \u017F\n \f \x0E \u0182\v \x03!\x03!\x03\"\x03\"\x03#\x03#\x05#" +
        "\u018A\n#\x03#\x03#\x03$\x03$\x03$\x05$\u0191\n$\x03$\x05$\u0194\n$\x03" +
        "%\x03%\x03%\x07%\u0199\n%\f%\x0E%\u019C\v%\x03&\x03&\x03&\x03&\x03\'\x03" +
        "\'\x03\'\x03\'\x03\'\x03\'\x07\'\u01A8\n\'\f\'\x0E\'\u01AB\v\'\x03(\x03" +
        "(\x03(\x03(\x03(\x05(\u01B2\n(\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03" +
        "*\x03*\x03*\x03+\x03+\x03,\x03,\x03,\x03,\x05,\u01C4\n,\x03-\x03-\x03" +
        "-\x03.\x03.\x03.\x03.\x07.\u01CD\n.\f.\x0E.\u01D0\v.\x03.\x03.\x03/\x03" +
        "/\x03/\x03/\x030\x030\x030\x031\x031\x051\u01DD\n1\x032\x032\x032\x05" +
        "2\u01E2\n2\x032\x032\x032\x033\x033\x033\x033\x073\u01EB\n3\f3\x0E3\u01EE" +
        "\v3\x033\x033\x034\x034\x034\x034\x034\x034\x034\x054\u01F9\n4\x035\x03" +
        "5\x035\x035\x036\x036\x036\x076\u0202\n6\f6\x0E6\u0205\v6\x037\x037\x03" +
        "7\x077\u020A\n7\f7\x0E7\u020D\v7\x038\x038\x038\x058\u0212\n8\x038\x03" +
        "8\x038\x038\x038\x039\x039\x03:\x03:\x03:\x03:\x03:\x05:\u0220\n:\x03" +
        ";\x03;\x05;\u0224\n;\x03<\x03<\x03<\x03<\x05<\u022A\n<\x03=\x03=\x03=" +
        "\x03=\x03>\x03>\x03>\x05>\u0233\n>\x03>\x03>\x03>\x03>\x07>\u0239\n>\f" +
        ">\x0E>\u023C\v>\x03>\x03>\x03>\x03>\x03>\x03>\x07>\u0244\n>\f>\x0E>\u0247" +
        "\v>\x03>\x03>\x03>\x03>\x03>\x07>\u024E\n>\f>\x0E>\u0251\v>\x03?\x03?" +
        "\x03?\x03?\x05?\u0257\n?\x03@\x03@\x03A\x03A\x03A\x03A\x05A\u025F\nA\x03" +
        "B\x03B\x03C\x03C\x03C\x03C\x05C\u0267\nC\x03D\x03D\x03E\x05E\u026C\nE" +
        "\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x05" +
        "F\u027B\nF\x03G\x03G\x03G\x03G\x05G\u0281\nG\x03H\x03H\x03H\x03H\x03H" +
        "\x03I\x03I\x03I\x07I\u028B\nI\fI\x0EI\u028E\vI\x03J\x03J\x03J\x03J\x03" +
        "J\x03J\x03J\x03J\x05J\u0298\nJ\x03K\x03K\x03K\x07K\u029D\nK\fK\x0EK\u02A0" +
        "\vK\x03K\x05K\u02A3\nK\x03L\x03L\x03L\x05L\u02A8\nL\x03M\x03M\x03M\x03" +
        "M\x03M\x05M\u02AF\nM\x03N\x03N\x07N\u02B3\nN\fN\x0EN\u02B6\vN\x03O\x03" +
        "O\x03O\x03P\x03P\x03P\x03Q\x03Q\x03R\x03R\x03S\x03S\x03S\x03S\x05S\u02C6" +
        "\nS\x03T\x03T\x03T\x03T\x03U\x03U\x03U\x07U\u02CF\nU\fU\x0EU\u02D2\vU" +
        "\x03V\x03V\x05V\u02D6\nV\x03W\x03W\x03W\x03W\x03W\x03W\x05W\u02DE\nW\x03" +
        "X\x03X\x03X\x03X\x03X\x03X\x07X\u02E6\nX\fX\x0EX\u02E9\vX\x03X\x03X\x03" +
        "X\x05X\u02EE\nX\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x05Z\u02F9" +
        "\nZ\x03[\x03[\x03[\x03[\x03[\x03\\\x03\\\x03\\\x03\\\x03\\\x03]\x03]\x03" +
        "]\x03]\x03]\x03]\x03]\x03^\x03^\x03^\x03^\x03_\x03_\x03`\x03`\x03a\x03" +
        "a\x03a\x03a\x03a\x03b\x03b\x03b\x07b\u031C\nb\fb\x0Eb\u031F\vb\x03b\x02" +
        "\x02\x02c\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
        "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
        "\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
        "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
        "^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
        "z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
        "\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
        "\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
        "\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02" +
        "\x02\t\x03\x02+,\x03\x02JK\x07\x02\x06\x06\b\b\x16\x16  HH\x04\x02\x15" +
        "\x1538\x04\x02\x1C\x1C+,\x06\x02\x03\x03\v\v\x18\x18-.\x04\x02\r\r%%\x02" +
        "\u031F\x02\xC4\x03\x02\x02\x02\x04\xD9\x03\x02\x02\x02\x06\xDB\x03\x02" +
        "\x02\x02\b\xE6\x03\x02\x02\x02\n\xEB\x03\x02\x02\x02\f\xEF\x03\x02\x02" +
        "\x02\x0E\xFA\x03\x02\x02\x02\x10\xFC\x03\x02\x02\x02\x12\u0104\x03\x02" +
        "\x02\x02\x14\u0108\x03\x02\x02\x02\x16\u0117\x03\x02\x02\x02\x18\u011B" +
        "\x03\x02\x02\x02\x1A\u011D\x03\x02\x02\x02\x1C\u011F\x03\x02\x02\x02\x1E" +
        "\u0121\x03\x02\x02\x02 \u0123\x03\x02\x02\x02\"\u0125\x03\x02\x02\x02" +
        "$\u0127\x03\x02\x02\x02&\u012F\x03\x02\x02\x02(\u0136\x03\x02\x02\x02" +
        "*\u013D\x03\x02\x02\x02,\u0144\x03\x02\x02\x02.\u014A\x03\x02\x02\x02" +
        "0\u014C\x03\x02\x02\x022\u0150\x03\x02\x02\x024\u0156\x03\x02\x02\x02" +
        "6\u015B\x03\x02\x02\x028\u0161\x03\x02\x02\x02:\u0163\x03\x02\x02\x02" +
        "<\u0179\x03\x02\x02\x02>\u017B\x03\x02\x02\x02@\u0183\x03\x02\x02\x02" +
        "B\u0185\x03\x02\x02\x02D\u0187\x03\x02\x02\x02F\u0193\x03\x02\x02\x02" +
        "H\u0195\x03\x02\x02\x02J\u019D\x03\x02\x02\x02L\u01A1\x03\x02\x02\x02" +
        "N\u01B1\x03\x02\x02\x02P\u01B3\x03\x02\x02\x02R\u01B9\x03\x02\x02\x02" +
        "T\u01BD\x03\x02\x02\x02V\u01C3\x03\x02\x02\x02X\u01C5\x03\x02\x02\x02" +
        "Z\u01C8\x03\x02\x02\x02\\\u01D3\x03\x02\x02\x02^\u01D7\x03\x02\x02\x02" +
        "`\u01DC\x03\x02\x02\x02b\u01DE\x03\x02\x02\x02d\u01E6\x03\x02\x02\x02" +
        "f\u01F8\x03\x02\x02\x02h\u01FA\x03\x02\x02\x02j\u01FE\x03\x02\x02\x02" +
        "l\u0206\x03\x02\x02\x02n\u020E\x03\x02\x02\x02p\u0218\x03\x02\x02\x02" +
        "r\u021F\x03\x02\x02\x02t\u0223\x03\x02\x02\x02v\u0229\x03\x02\x02\x02" +
        "x\u022B\x03\x02\x02\x02z\u0232\x03\x02\x02\x02|\u0252\x03\x02\x02\x02" +
        "~\u0258\x03\x02\x02\x02\x80\u025A\x03\x02\x02\x02\x82\u0260\x03\x02\x02" +
        "\x02\x84\u0262\x03\x02\x02\x02\x86\u0268\x03\x02\x02\x02\x88\u026B\x03" +
        "\x02\x02\x02\x8A\u027A\x03\x02\x02\x02\x8C\u0280\x03\x02\x02\x02\x8E\u0282" +
        "\x03\x02\x02\x02\x90\u0287\x03\x02\x02\x02\x92\u0297\x03\x02\x02\x02\x94" +
        "\u02A2\x03\x02\x02\x02\x96\u02A4\x03\x02\x02\x02\x98\u02A9\x03\x02\x02" +
        "\x02\x9A\u02B0\x03\x02\x02\x02\x9C\u02B7\x03\x02\x02\x02\x9E\u02BA\x03" +
        "\x02\x02\x02\xA0\u02BD\x03\x02\x02\x02\xA2\u02BF\x03\x02\x02\x02\xA4\u02C5" +
        "\x03\x02\x02\x02\xA6\u02C7\x03\x02\x02\x02\xA8\u02CB\x03\x02\x02\x02\xAA" +
        "\u02D5\x03\x02\x02\x02\xAC\u02D7\x03\x02\x02\x02\xAE\u02DF\x03\x02\x02" +
        "\x02\xB0\u02F1\x03\x02\x02\x02\xB2\u02F8\x03\x02\x02\x02\xB4\u02FA\x03" +
        "\x02\x02\x02\xB6\u02FF\x03\x02\x02\x02\xB8\u0304\x03\x02\x02\x02\xBA\u030B" +
        "\x03\x02\x02\x02\xBC\u030F\x03\x02\x02\x02\xBE\u0311\x03\x02\x02\x02\xC0" +
        "\u0313\x03\x02\x02\x02\xC2\u0318\x03\x02\x02\x02\xC4\xC6\x05\x04\x03\x02" +
        "\xC5\xC7\x07F\x02\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02" +
        "\xC7\xC8\x03\x02\x02\x02\xC8\xC9\x05\b\x05\x02\xC9\xCA\x07A\x02\x02\xCA" +
        "\x03\x03\x02\x02\x02\xCB\xCC\x07\x1F\x02\x02\xCC\xD1\x05\x06\x04\x02\xCD" +
        "\xCE\x079\x02\x02\xCE\xCF\x05j6\x02\xCF\xD0\x07:\x02\x02\xD0\xD2\x03\x02" +
        "\x02\x02\xD1\xCD\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x03\x02" +
        "\x02\x02\xD3\xD4\x071\x02\x02\xD4\xDA\x03\x02\x02\x02\xD5\xD6\x07E\x02" +
        "\x02\xD6\xD7\x05\x06\x04\x02\xD7\xD8\x071\x02\x02\xD8\xDA\x03\x02\x02" +
        "\x02\xD9\xCB\x03\x02\x02\x02\xD9\xD5\x03\x02\x02\x02\xDA\x05\x03\x02\x02" +
        "\x02\xDB\xDC\x07O\x02\x02\xDC\x07\x03\x02\x02\x02\xDD\xE5\x05\f\x07\x02" +
        "\xDE\xE5\x05\x10\t\x02\xDF\xE5\x05$\x13\x02\xE0\xE5\x05Z.\x02\xE1\xE5" +
        "\x05^0\x02\xE2\xE5\x05\n\x06\x02\xE3\xE5\x07I\x02\x02\xE4\xDD\x03\x02" +
        "\x02\x02\xE4\xDE\x03\x02\x02\x02\xE4\xDF\x03\x02\x02\x02\xE4\xE0\x03\x02" +
        "\x02\x02\xE4\xE1\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE3\x03\x02" +
        "\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02" +
        "\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEA\x05\xA6" +
        "T\x02\xEA\t\x03\x02\x02\x02\xEB\xEC\x07G\x02\x02\xEC\xED\x05j6\x02\xED" +
        "\xEE\x071\x02\x02\xEE\v\x03\x02\x02\x02\xEF\xF0\x07\x17\x02\x02\xF0\xF5" +
        "\x05\x0E\b\x02\xF1\xF2\x070\x02\x02\xF2\xF4\x05\x0E\b\x02\xF3\xF1\x03" +
        "\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03" +
        "\x02\x02\x02\xF6\xF8\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\xF9\x07" +
        "1\x02\x02\xF9\r\x03\x02\x02\x02\xFA\xFB\x05\x1A\x0E\x02\xFB\x0F\x03\x02" +
        "\x02\x02\xFC\u0100\x07\n\x02\x02\xFD\xFE\x05\x12\n\x02\xFE\xFF\x071\x02" +
        "\x02\xFF\u0101\x03\x02\x02\x02\u0100\xFD\x03\x02\x02\x02\u0101\u0102\x03" +
        "\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103" +
        "\x11\x03\x02\x02\x02\u0104\u0105\x05\x06\x04\x02\u0105\u0106\x073\x02" +
        "\x02\u0106\u0107\x05\x16\f\x02\u0107\x13\x03\x02\x02\x02\u0108\u0109\x07" +
        "\t\x02\x02\u0109\u010A\x079\x02\x02\u010A\u010B\x05\x1A\x0E\x02\u010B" +
        "\u010C\x07:\x02\x02\u010C\x15\x03\x02\x02\x02\u010D\u0118\x05\x18\r\x02" +
        "\u010E\u010F\x05\x1E\x10\x02\u010F\u0110\x05\x18\r\x02\u0110\u0118\x03" +
        "\x02\x02\x02\u0111\u0118\x05\x06\x04\x02\u0112\u0113\x05\x1E\x10\x02\u0113" +
        "\u0114\x05\x06\x04\x02\u0114\u0118\x03\x02\x02\x02\u0115\u0118\x05\"\x12" +
        "\x02\u0116\u0118\x05\x14\v\x02\u0117\u010D\x03\x02\x02\x02\u0117\u010E" +
        "\x03\x02\x02\x02\u0117\u0111\x03\x02\x02\x02\u0117\u0112\x03\x02\x02\x02" +
        "\u0117\u0115\x03\x02\x02\x02\u0117\u0116\x03\x02\x02\x02\u0118\x17\x03" +
        "\x02\x02\x02\u0119\u011C\x05\x1A\x0E\x02\u011A\u011C\x05\x1C\x0F\x02\u011B" +
        "\u0119\x03\x02\x02\x02\u011B\u011A\x03\x02\x02\x02\u011C\x19\x03\x02\x02" +
        "\x02\u011D\u011E\x07Q\x02\x02\u011E\x1B\x03\x02\x02\x02\u011F\u0120\x07" +
        "R\x02\x02\u0120\x1D\x03\x02\x02\x02\u0121\u0122\t\x02\x02\x02\u0122\x1F" +
        "\x03\x02\x02\x02\u0123\u0124\t\x03\x02\x02\u0124!\x03\x02\x02\x02\u0125" +
        "\u0126\x07P\x02\x02\u0126#\x03\x02\x02\x02\u0127\u012B\x07&\x02\x02\u0128" +
        "\u0129\x05&\x14\x02\u0129\u012A\x071\x02\x02\u012A\u012C\x03\x02\x02\x02" +
        "\u012B\u0128\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012B\x03" +
        "\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E%\x03\x02\x02\x02\u012F" +
        "\u0130\x05\x06\x04\x02\u0130\u0134\x073\x02\x02\u0131\u0135\x05,\x17\x02" +
        "\u0132\u0135\x05(\x15\x02\u0133\u0135\x05*\x16\x02\u0134\u0131\x03\x02" +
        "\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0133\x03\x02\x02\x02\u0135" +
        "\'\x03\x02\x02\x02\u0136\u0138\x07\x12\x02\x02\u0137\u0139\x05d3\x02\u0138" +
        "\u0137\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013A\x03\x02" +
        "\x02\x02\u013A\u013B\x072\x02\x02\u013B\u013C\x05p9\x02\u013C)\x03\x02" +
        "\x02\x02\u013D\u013F\x07\x1E\x02\x02\u013E\u0140\x05d3\x02\u013F\u013E" +
        "\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140+\x03\x02\x02\x02\u0141" +
        "\u0145\x05.\x18\x02\u0142\u0145\x056\x1C\x02\u0143\u0145\x05X-\x02\u0144" +
        "\u0141\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0143\x03\x02" +
        "\x02\x02\u0145-\x03\x02\x02\x02\u0146\u014B\x050\x19\x02\u0147\u014B\x05" +
        "2\x1A\x02\u0148\u014B\x054\x1B\x02\u0149\u014B\x05:\x1E\x02\u014A\u0146" +
        "\x03\x02\x02\x02\u014A\u0147\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02" +
        "\u014A\u0149\x03\x02\x02\x02\u014B/\x03\x02\x02\x02\u014C\u014D\x079\x02" +
        "\x02\u014D\u014E\x05j6\x02\u014E\u014F\x07:\x02\x02\u014F1\x03\x02\x02" +
        "\x02\u0150\u0151\x05\x16\f\x02\u0151\u0152\x07B\x02\x02\u0152\u0153\x05" +
        "\x16\f\x02\u01533\x03\x02\x02\x02\u0154\u0157\x05\x06\x04\x02\u0155\u0157" +
        "\t\x04\x02\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0155\x03\x02\x02\x02" +
        "\u01575\x03\x02\x02\x02\u0158\u0159\x07\x1D\x02\x02\u0159\u015C\x058\x1D" +
        "\x02\u015A\u015C\x058\x1D\x02\u015B\u0158\x03\x02\x02\x02\u015B\u015A" +
        "\x03\x02\x02\x02\u015C7\x03\x02\x02\x02\u015D\u0162\x05<\x1F\x02\u015E" +
        "\u0162\x05D#\x02\u015F\u0162\x05R*\x02\u0160\u0162\x05V,\x02\u0161\u015D" +
        "\x03\x02\x02\x02\u0161\u015E\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02" +
        "\u0161\u0160\x03\x02\x02\x02\u01629\x03\x02\x02\x02\u0163\u0164\x07H\x02" +
        "\x02\u0164\u0167\x07;\x02\x02\u0165\u0168\x05\x06\x04\x02\u0166\u0168" +
        "\x05\x18\r\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0166\x03\x02\x02\x02" +
        "\u0168\u0169\x03\x02\x02\x02\u0169\u016A\x07=\x02\x02\u016A;\x03\x02\x02" +
        "\x02\u016B\u016C\x07\x04\x02\x02\u016C\u016D\x07;\x02\x02\u016D\u016E" +
        "\x05> \x02\u016E\u016F\x07=\x02\x02\u016F\u0170\x07\x1B\x02\x02\u0170" +
        "\u0171\x05B\"\x02\u0171\u017A\x03\x02\x02\x02\u0172\u0173\x07\x04\x02" +
        "\x02\u0173\u0174\x07<\x02\x02\u0174\u0175\x05> \x02\u0175\u0176\x07>\x02" +
        "\x02\u0176\u0177\x07\x1B\x02\x02\u0177\u0178\x05B\"\x02\u0178\u017A\x03" +
        "\x02\x02\x02\u0179\u016B\x03\x02\x02\x02\u0179\u0172\x03\x02\x02\x02\u017A" +
        "=\x03\x02\x02\x02\u017B\u0180\x05@!\x02\u017C\u017D\x070\x02\x02\u017D" +
        "\u017F\x05@!\x02\u017E\u017C\x03\x02\x02\x02\u017F\u0182\x03\x02\x02\x02" +
        "\u0180\u017E\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181?\x03\x02" +
        "\x02\x02\u0182\u0180\x03\x02\x02\x02\u0183\u0184\x05.\x18\x02\u0184A\x03" +
        "\x02\x02\x02\u0185\u0186\x05,\x17\x02\u0186C\x03\x02\x02\x02\u0187\u0189" +
        "\x07!\x02\x02\u0188\u018A\x05F$\x02\u0189\u0188\x03\x02\x02\x02\u0189" +
        "\u018A\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018C\x07\x0F" +
        "\x02\x02\u018CE\x03\x02\x02\x02\u018D\u0190\x05H%\x02\u018E\u018F\x07" +
        "1\x02\x02\u018F\u0191\x05L\'\x02\u0190\u018E\x03\x02\x02\x02\u0190\u0191" +
        "\x03\x02\x02\x02\u0191\u0194\x03\x02\x02\x02\u0192\u0194\x05L\'\x02\u0193" +
        "\u018D\x03\x02\x02\x02\u0193\u0192\x03\x02\x02\x02\u0194G\x03\x02\x02" +
        "\x02\u0195\u019A\x05J&\x02\u0196\u0197\x071\x02\x02\u0197\u0199\x05J&" +
        "\x02\u0198\u0196\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A\u0198" +
        "\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019BI\x03\x02\x02\x02\u019C" +
        "\u019A\x03\x02\x02\x02\u019D\u019E\x05j6\x02\u019E\u019F\x072\x02\x02" +
        "\u019F\u01A0\x05,\x17\x02\u01A0K\x03\x02\x02\x02\u01A1\u01A2\x07\x07\x02" +
        "\x02\u01A2\u01A3\x05N(\x02\u01A3\u01A4\x07\x1B\x02\x02\u01A4\u01A9\x05" +
        "P)\x02\u01A5\u01A6\x071\x02\x02\u01A6\u01A8\x05P)\x02\u01A7\u01A5\x03" +
        "\x02\x02\x02\u01A8\u01AB\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01A9" +
        "\u01AA\x03\x02\x02\x02\u01AAM\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02" +
        "\x02\u01AC\u01AD\x05\x06\x04\x02\u01AD\u01AE\x072\x02\x02\u01AE\u01AF" +
        "\x054\x1B\x02\u01AF\u01B2\x03\x02\x02\x02\u01B0\u01B2\x054\x1B\x02\u01B1" +
        "\u01AC\x03\x02\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2O\x03\x02\x02" +
        "\x02\u01B3\u01B4\x05l7\x02\u01B4\u01B5\x072\x02\x02\u01B5\u01B6\x079\x02" +
        "\x02\u01B6\u01B7\x05F$\x02\u01B7\u01B8\x07:\x02\x02\u01B8Q\x03\x02\x02" +
        "\x02\u01B9\u01BA\x07#\x02\x02\u01BA\u01BB\x07\x1B\x02\x02\u01BB\u01BC" +
        "\x05T+\x02\u01BCS\x03\x02\x02\x02\u01BD\u01BE\x05.\x18\x02\u01BEU\x03" +
        "\x02\x02\x02\u01BF\u01C0\x07\x10\x02\x02\u01C0\u01C1\x07\x1B\x02\x02\u01C1" +
        "\u01C4\x05,\x17\x02\u01C2\u01C4\x07\x10\x02\x02\u01C3\u01BF\x03\x02\x02" +
        "\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4W\x03\x02\x02\x02\u01C5\u01C6\x07" +
        "?\x02\x02\u01C6\u01C7\x054\x1B\x02\u01C7Y\x03\x02\x02\x02\u01C8\u01C9" +
        "\x07(\x02\x02\u01C9\u01CE\x05\\/\x02\u01CA\u01CB\x071\x02\x02\u01CB\u01CD" +
        "\x05\\/\x02\u01CC\u01CA\x03\x02\x02\x02\u01CD\u01D0\x03\x02\x02\x02\u01CE" +
        "\u01CC\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D1\x03\x02" +
        "\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D1\u01D2\x071\x02\x02\u01D2[\x03" +
        "\x02\x02\x02\u01D3\u01D4\x05j6\x02\u01D4\u01D5\x072\x02\x02\u01D5\u01D6" +
        "\x05,\x17\x02\u01D6]\x03\x02\x02\x02\u01D7\u01D8\x05`1\x02\u01D8\u01D9" +
        "\x071\x02\x02\u01D9_\x03\x02\x02\x02\u01DA\u01DD\x05b2\x02\u01DB\u01DD" +
        "\x05n8\x02\u01DC\u01DA\x03\x02\x02\x02\u01DC\u01DB\x03\x02\x02\x02\u01DD" +
        "a\x03\x02\x02\x02\u01DE\u01DF\x07\x1E\x02\x02\u01DF\u01E1\x05\x06\x04" +
        "\x02\u01E0\u01E2\x05d3\x02\u01E1\u01E0\x03\x02\x02\x02\u01E1\u01E2\x03" +
        "\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E4\x071\x02\x02\u01E4" +
        "\u01E5\x05\b\x05\x02\u01E5c\x03\x02\x02\x02\u01E6\u01E7\x079\x02\x02\u01E7" +
        "\u01EC\x05f4\x02\u01E8\u01E9\x071\x02\x02\u01E9\u01EB\x05f4\x02\u01EA" +
        "\u01E8\x03\x02\x02\x02\u01EB\u01EE\x03\x02\x02\x02\u01EC\u01EA\x03\x02" +
        "\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE" +
        "\u01EC\x03\x02\x02\x02\u01EF\u01F0\x07:\x02\x02\u01F0e\x03\x02\x02\x02" +
        "\u01F1\u01F9\x05h5\x02\u01F2\u01F3\x07(\x02\x02\u01F3\u01F9\x05h5\x02" +
        "\u01F4\u01F5\x07\x12\x02\x02\u01F5\u01F9\x05h5\x02\u01F6\u01F7\x07\x1E" +
        "\x02\x02\u01F7\u01F9\x05h5\x02\u01F8\u01F1\x03\x02\x02\x02\u01F8\u01F2" +
        "\x03\x02\x02\x02\u01F8\u01F4\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02" +
        "\u01F9g\x03\x02\x02\x02\u01FA\u01FB\x05j6\x02\u01FB\u01FC\x072\x02\x02" +
        "\u01FC\u01FD\x054\x1B\x02\u01FDi\x03\x02\x02\x02\u01FE\u0203\x05\x06\x04" +
        "\x02\u01FF\u0200\x070\x02\x02\u0200\u0202\x05\x06\x04\x02\u0201\u01FF" +
        "\x03\x02\x02\x02\u0202\u0205\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02" +
        "\u0203\u0204\x03\x02\x02\x02\u0204k\x03\x02\x02\x02\u0205\u0203\x03\x02" +
        "\x02\x02\u0206\u020B\x05\x16\f\x02\u0207\u0208\x070\x02\x02\u0208\u020A" +
        "\x05\x16\f\x02\u0209\u0207\x03\x02\x02\x02\u020A\u020D\x03\x02\x02\x02" +
        "\u020B\u0209\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020Cm\x03\x02" +
        "\x02\x02\u020D\u020B\x03\x02\x02\x02\u020E\u020F\x07\x12\x02\x02\u020F" +
        "\u0211\x05\x06\x04\x02\u0210\u0212\x05d3\x02\u0211\u0210\x03\x02\x02\x02" +
        "\u0211\u0212\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0214\x07" +
        "2\x02\x02\u0214\u0215\x05p9\x02\u0215\u0216\x071\x02\x02\u0216\u0217\x05" +
        "\b\x05\x02\u0217o\x03\x02\x02\x02\u0218\u0219\x054\x1B\x02\u0219q\x03" +
        "\x02\x02\x02\u021A\u021B\x05\x0E\b\x02\u021B\u021C\x072\x02\x02\u021C" +
        "\u021D\x05t;\x02\u021D\u0220\x03\x02\x02\x02\u021E\u0220\x05t;\x02\u021F" +
        "\u021A\x03\x02\x02\x02\u021F\u021E\x03\x02\x02\x02\u0220s\x03\x02\x02" +
        "\x02\u0221\u0224\x05v<\x02\u0222\u0224\x05\xA4S\x02\u0223\u0221\x03\x02" +
        "\x02\x02\u0223\u0222\x03\x02\x02\x02\u0224u\x03\x02\x02\x02\u0225\u022A" +
        "\x05x=\x02\u0226\u022A\x05\x98M\x02\u0227\u022A\x05\x9EP\x02\u0228\u022A" +
        "\x05\xA0Q\x02\u0229\u0225\x03";
    pascalParser._serializedATNSegment1 = "\x02\x02\x02\u0229\u0226\x03\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u0229" +
        "\u0228\x03\x02\x02\x02\u022Aw\x03\x02\x02\x02\u022B\u022C\x05z>\x02\u022C" +
        "\u022D\x07/\x02\x02\u022D\u022E\x05|?\x02\u022Ey\x03\x02\x02\x02\u022F" +
        "\u0230\x07@\x02\x02\u0230\u0233\x05\x06\x04\x02\u0231\u0233\x05\x06\x04" +
        "\x02\u0232\u022F\x03\x02\x02\x02\u0232\u0231\x03\x02\x02\x02\u0233\u024F" +
        "\x03\x02\x02\x02\u0234\u0235\x07;\x02\x02\u0235\u023A\x05|?\x02\u0236" +
        "\u0237\x070\x02\x02\u0237\u0239\x05|?\x02\u0238\u0236\x03\x02\x02\x02" +
        "\u0239\u023C\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03" +
        "\x02\x02\x02\u023B\u023D\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D" +
        "\u023E\x07=\x02\x02\u023E\u024E\x03\x02\x02\x02\u023F\u0240\x07<\x02\x02" +
        "\u0240\u0245\x05|?\x02\u0241\u0242\x070\x02\x02\u0242\u0244\x05|?\x02" +
        "\u0243\u0241\x03\x02\x02\x02\u0244\u0247\x03\x02\x02\x02\u0245\u0243\x03" +
        "\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0248\x03\x02\x02\x02\u0247" +
        "\u0245\x03\x02\x02\x02\u0248\u0249\x07>\x02\x02\u0249\u024E\x03\x02\x02" +
        "\x02\u024A\u024B\x07A\x02\x02\u024B\u024E\x05\x06\x04\x02\u024C\u024E" +
        "\x07?\x02\x02\u024D\u0234\x03\x02\x02\x02\u024D\u023F\x03\x02\x02\x02" +
        "\u024D\u024A\x03\x02\x02\x02\u024D\u024C\x03\x02\x02\x02\u024E\u0251\x03" +
        "\x02\x02\x02\u024F\u024D\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250" +
        "{\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0252\u0256\x05\x80A\x02" +
        "\u0253\u0254\x05~@\x02\u0254\u0255\x05|?\x02\u0255\u0257\x03\x02\x02\x02" +
        "\u0256\u0253\x03\x02\x02\x02\u0256\u0257\x03\x02\x02\x02\u0257}\x03\x02" +
        "\x02\x02\u0258\u0259\t\x05\x02\x02\u0259\x7F\x03\x02\x02\x02\u025A\u025E" +
        "\x05\x84C\x02\u025B\u025C\x05\x82B\x02\u025C\u025D\x05\x80A\x02\u025D" +
        "\u025F\x03\x02\x02\x02\u025E\u025B\x03\x02\x02\x02\u025E\u025F\x03\x02" +
        "\x02\x02\u025F\x81\x03\x02\x02\x02\u0260\u0261\t\x06\x02\x02\u0261\x83" +
        "\x03\x02\x02\x02\u0262\u0266\x05\x88E\x02\u0263\u0264\x05\x86D\x02\u0264" +
        "\u0265\x05\x84C\x02\u0265\u0267\x03\x02\x02\x02\u0266\u0263\x03\x02\x02" +
        "\x02\u0266\u0267\x03\x02\x02\x02\u0267\x85\x03\x02\x02\x02\u0268\u0269" +
        "\t\x07\x02\x02\u0269\x87\x03\x02\x02\x02\u026A\u026C\t\x02\x02\x02\u026B" +
        "\u026A\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02\u026C\u026D\x03\x02" +
        "\x02\x02\u026D\u026E\x05\x8AF\x02\u026E\x89\x03\x02\x02\x02\u026F\u027B" +
        "\x05z>\x02\u0270\u0271\x079\x02\x02\u0271\u0272\x05|?\x02\u0272\u0273" +
        "\x07:\x02\x02\u0273\u027B\x03\x02\x02\x02\u0274\u027B\x05\x8EH\x02\u0275" +
        "\u027B\x05\x8CG\x02\u0276\u027B\x05\x92J\x02\u0277\u0278\x07\x1A\x02\x02" +
        "\u0278\u027B\x05\x8AF\x02\u0279\u027B\x05 \x11\x02\u027A\u026F\x03\x02" +
        "\x02\x02\u027A\u0270\x03\x02\x02\x02\u027A\u0274\x03\x02\x02\x02\u027A" +
        "\u0275\x03\x02\x02\x02\u027A\u0276\x03\x02\x02\x02\u027A\u0277\x03\x02" +
        "\x02\x02\u027A\u0279\x03\x02\x02\x02\u027B\x8B\x03\x02\x02\x02\u027C\u0281" +
        "\x05\x18\r\x02\u027D\u0281\x05\x14\v\x02\u027E\u0281\x05\"\x12\x02\u027F" +
        "\u0281\x07\x19\x02\x02\u0280\u027C\x03\x02\x02\x02\u0280\u027D\x03\x02" +
        "\x02\x02\u0280\u027E\x03\x02\x02\x02\u0280\u027F\x03\x02\x02\x02\u0281" +
        "\x8D\x03\x02\x02\x02\u0282\u0283\x05\x06\x04\x02\u0283\u0284\x079\x02" +
        "\x02\u0284\u0285\x05\x90I\x02\u0285\u0286\x07:\x02\x02\u0286\x8F\x03\x02" +
        "\x02\x02\u0287\u028C\x05\x9AN\x02\u0288\u0289\x070\x02\x02\u0289\u028B" +
        "\x05\x9AN\x02\u028A\u0288\x03\x02\x02\x02\u028B\u028E\x03\x02\x02\x02" +
        "\u028C\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\x91\x03" +
        "\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F\u0290\x07;\x02\x02\u0290" +
        "\u0291\x05\x94K\x02\u0291\u0292\x07=\x02\x02\u0292\u0298\x03\x02\x02\x02" +
        "\u0293\u0294\x07<\x02\x02\u0294\u0295\x05\x94K\x02\u0295\u0296\x07>\x02" +
        "\x02\u0296\u0298\x03\x02\x02\x02\u0297\u028F\x03\x02\x02\x02\u0297\u0293" +
        "\x03\x02\x02\x02\u0298\x93\x03\x02\x02\x02\u0299\u029E\x05\x96L\x02\u029A" +
        "\u029B\x070\x02\x02\u029B\u029D\x05\x96L\x02\u029C\u029A\x03\x02\x02\x02" +
        "\u029D\u02A0\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029E\u029F\x03" +
        "\x02\x02\x02\u029F\u02A3\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02\u02A1" +
        "\u02A3\x03\x02\x02\x02\u02A2\u0299\x03\x02\x02\x02\u02A2\u02A1\x03\x02" +
        "\x02\x02\u02A3\x95\x03\x02\x02\x02\u02A4\u02A7\x05|?\x02\u02A5\u02A6\x07" +
        "B\x02\x02\u02A6\u02A8\x05|?\x02\u02A7\u02A5\x03\x02\x02\x02\u02A7\u02A8" +
        "\x03\x02\x02\x02\u02A8\x97\x03\x02\x02\x02\u02A9\u02AE\x05\x06\x04\x02" +
        "\u02AA\u02AB\x079\x02\x02\u02AB\u02AC\x05\x90I\x02\u02AC\u02AD\x07:\x02" +
        "\x02\u02AD\u02AF\x03\x02\x02\x02\u02AE\u02AA\x03\x02\x02\x02\u02AE\u02AF" +
        "\x03\x02\x02\x02\u02AF\x99\x03\x02\x02\x02\u02B0\u02B4\x05|?\x02\u02B1" +
        "\u02B3\x05\x9CO\x02\u02B2\u02B1\x03\x02\x02\x02\u02B3\u02B6\x03\x02\x02" +
        "\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\x9B" +
        "\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7\u02B8\x072\x02\x02" +
        "\u02B8\u02B9\x05|?\x02\u02B9\x9D\x03\x02\x02\x02\u02BA\u02BB\x07\x13\x02" +
        "\x02\u02BB\u02BC\x05\x0E\b\x02\u02BC\x9F\x03\x02\x02\x02\u02BD\u02BE\x03" +
        "\x02\x02\x02\u02BE\xA1\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0" +
        "\xA3\x03\x02\x02\x02\u02C1\u02C6\x05\xA6T\x02\u02C2\u02C6\x05\xAAV\x02" +
        "\u02C3\u02C6\x05\xB2Z\x02\u02C4\u02C6\x05\xC0a\x02\u02C5\u02C1\x03\x02" +
        "\x02\x02\u02C5\u02C2\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C5" +
        "\u02C4\x03\x02\x02\x02\u02C6\xA5\x03\x02\x02\x02\u02C7\u02C8\x07\x05\x02" +
        "\x02\u02C8\u02C9\x05\xA8U\x02\u02C9\u02CA\x07\x0F\x02\x02\u02CA\xA7\x03" +
        "\x02\x02\x02\u02CB\u02D0\x05r:\x02\u02CC\u02CD\x071\x02\x02\u02CD\u02CF" +
        "\x05r:\x02\u02CE\u02CC\x03\x02\x02\x02\u02CF\u02D2\x03\x02\x02\x02\u02D0" +
        "\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\xA9\x03\x02\x02" +
        "\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3\u02D6\x05\xACW\x02\u02D4\u02D6" +
        "\x05\xAEX\x02\u02D5\u02D3\x03\x02\x02\x02\u02D5\u02D4\x03\x02\x02\x02" +
        "\u02D6\xAB\x03\x02\x02\x02\u02D7\u02D8\x07\x14\x02\x02\u02D8\u02D9\x05" +
        "|?\x02\u02D9\u02DA\x07$\x02\x02\u02DA\u02DD\x05r:\x02\u02DB\u02DC\x07" +
        "\x0E\x02\x02\u02DC\u02DE\x05r:\x02\u02DD\u02DB\x03\x02\x02\x02\u02DD\u02DE" +
        "\x03\x02\x02\x02\u02DE\xAD\x03\x02\x02\x02\u02DF\u02E0\x07\x07\x02\x02" +
        "\u02E0\u02E1\x05|?\x02\u02E1\u02E2\x07\x1B\x02\x02\u02E2\u02E7\x05\xB0" +
        "Y\x02\u02E3\u02E4\x071\x02\x02\u02E4\u02E6\x05\xB0Y\x02\u02E5\u02E3\x03" +
        "\x02\x02\x02\u02E6\u02E9\x03\x02\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E7" +
        "\u02E8\x03\x02\x02\x02\u02E8\u02ED\x03\x02\x02\x02\u02E9\u02E7\x03\x02" +
        "\x02\x02\u02EA\u02EB\x071\x02\x02\u02EB\u02EC\x07\x0E\x02\x02\u02EC\u02EE" +
        "\x05\xA8U\x02\u02ED\u02EA\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02\x02" +
        "\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F0\x07\x0F\x02\x02\u02F0\xAF\x03" +
        "\x02\x02\x02\u02F1\u02F2\x05l7\x02\u02F2\u02F3\x072\x02\x02\u02F3\u02F4" +
        "\x05r:\x02\u02F4\xB1\x03\x02\x02\x02\u02F5\u02F9\x05\xB4[\x02\u02F6\u02F9" +
        "\x05\xB6\\\x02\u02F7\u02F9\x05\xB8]\x02\u02F8\u02F5\x03\x02\x02\x02\u02F8" +
        "\u02F6\x03\x02\x02\x02\u02F8\u02F7\x03\x02\x02\x02\u02F9\xB3\x03\x02\x02" +
        "\x02\u02FA\u02FB\x07)\x02\x02\u02FB\u02FC\x05|?\x02\u02FC\u02FD\x07\f" +
        "\x02\x02\u02FD\u02FE\x05r:\x02\u02FE\xB5\x03\x02\x02\x02\u02FF\u0300\x07" +
        "\"\x02\x02\u0300\u0301\x05\xA8U\x02\u0301\u0302\x07\'\x02\x02\u0302\u0303" +
        "\x05|?\x02\u0303\xB7\x03\x02\x02\x02\u0304\u0305\x07\x11\x02\x02\u0305" +
        "\u0306\x05\x06\x04\x02\u0306\u0307\x07/\x02\x02\u0307\u0308\x05\xBA^\x02" +
        "\u0308\u0309\x07\f\x02\x02\u0309\u030A\x05r:\x02\u030A\xB9\x03\x02\x02" +
        "\x02\u030B\u030C\x05\xBC_\x02\u030C\u030D\t\b\x02\x02\u030D\u030E\x05" +
        "\xBE`\x02\u030E\xBB\x03\x02\x02\x02\u030F\u0310\x05|?\x02\u0310\xBD\x03" +
        "\x02\x02\x02\u0311\u0312\x05|?\x02\u0312\xBF\x03\x02\x02\x02\u0313\u0314" +
        "\x07*\x02\x02\u0314\u0315\x05\xC2b\x02\u0315\u0316\x07\f\x02\x02\u0316" +
        "\u0317\x05r:\x02\u0317\xC1\x03\x02\x02\x02\u0318\u031D\x05z>\x02\u0319" +
        "\u031A\x070\x02\x02\u031A\u031C\x05z>\x02\u031B\u0319\x03\x02\x02\x02" +
        "\u031C\u031F\x03\x02\x02\x02\u031D\u031B\x03\x02\x02\x02\u031D\u031E\x03" +
        "\x02\x02\x02\u031E\xC3\x03\x02\x02\x02\u031F\u031D\x03\x02\x02\x02C\xC6" +
        "\xD1\xD9\xE4\xE6\xF5\u0102\u0117\u011B\u012D\u0134\u0138\u013F\u0144\u014A" +
        "\u0156\u015B\u0161\u0167\u0179\u0180\u0189\u0190\u0193\u019A\u01A9\u01B1" +
        "\u01C3\u01CE\u01DC\u01E1\u01EC\u01F8\u0203\u020B\u0211\u021F\u0223\u0229" +
        "\u0232\u023A\u0245\u024D\u024F\u0256\u025E\u0266\u026B\u027A\u0280\u028C" +
        "\u0297\u029E\u02A2\u02A7\u02AE\u02B4\u02C5\u02D0\u02D5\u02DD\u02E7\u02ED" +
        "\u02F8\u031D";
    pascalParser._serializedATN = Utils.join([
        pascalParser._serializedATNSegment0,
        pascalParser._serializedATNSegment1,
    ], "");
    return pascalParser;
}(Parser_1.Parser));
exports.pascalParser = pascalParser;
var ProgramContext = /** @class */ (function (_super) {
    __extends(ProgramContext, _super);
    function ProgramContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramContext.prototype.programHeading = function () {
        return this.getRuleContext(0, ProgramHeadingContext);
    };
    ProgramContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    ProgramContext.prototype.DOT = function () { return this.getToken(pascalParser.DOT, 0); };
    ProgramContext.prototype.INTERFACE = function () { return this.tryGetToken(pascalParser.INTERFACE, 0); };
    Object.defineProperty(ProgramContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_program; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProgramContext.prototype.enterRule = function (listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    };
    // @Override
    ProgramContext.prototype.exitRule = function (listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    };
    // @Override
    ProgramContext.prototype.accept = function (visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgramContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgramContext = ProgramContext;
var ProgramHeadingContext = /** @class */ (function (_super) {
    __extends(ProgramHeadingContext, _super);
    function ProgramHeadingContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgramHeadingContext.prototype.PROGRAM = function () { return this.tryGetToken(pascalParser.PROGRAM, 0); };
    ProgramHeadingContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    ProgramHeadingContext.prototype.SEMI = function () { return this.getToken(pascalParser.SEMI, 0); };
    ProgramHeadingContext.prototype.LPAREN = function () { return this.tryGetToken(pascalParser.LPAREN, 0); };
    ProgramHeadingContext.prototype.identifierList = function () {
        return this.tryGetRuleContext(0, IdentifierListContext);
    };
    ProgramHeadingContext.prototype.RPAREN = function () { return this.tryGetToken(pascalParser.RPAREN, 0); };
    ProgramHeadingContext.prototype.UNIT = function () { return this.tryGetToken(pascalParser.UNIT, 0); };
    Object.defineProperty(ProgramHeadingContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_programHeading; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProgramHeadingContext.prototype.enterRule = function (listener) {
        if (listener.enterProgramHeading) {
            listener.enterProgramHeading(this);
        }
    };
    // @Override
    ProgramHeadingContext.prototype.exitRule = function (listener) {
        if (listener.exitProgramHeading) {
            listener.exitProgramHeading(this);
        }
    };
    // @Override
    ProgramHeadingContext.prototype.accept = function (visitor) {
        if (visitor.visitProgramHeading) {
            return visitor.visitProgramHeading(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgramHeadingContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProgramHeadingContext = ProgramHeadingContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.IDENT = function () { return this.getToken(pascalParser.IDENT, 0); };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_identifier; },
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
var BlockContext = /** @class */ (function (_super) {
    __extends(BlockContext, _super);
    function BlockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockContext.prototype.compoundStatement = function () {
        return this.getRuleContext(0, CompoundStatementContext);
    };
    BlockContext.prototype.labelDeclarationPart = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LabelDeclarationPartContext);
        }
        else {
            return this.getRuleContext(i, LabelDeclarationPartContext);
        }
    };
    BlockContext.prototype.constantDefinitionPart = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantDefinitionPartContext);
        }
        else {
            return this.getRuleContext(i, ConstantDefinitionPartContext);
        }
    };
    BlockContext.prototype.typeDefinitionPart = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeDefinitionPartContext);
        }
        else {
            return this.getRuleContext(i, TypeDefinitionPartContext);
        }
    };
    BlockContext.prototype.variableDeclarationPart = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationPartContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclarationPartContext);
        }
    };
    BlockContext.prototype.procedureAndFunctionDeclarationPart = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ProcedureAndFunctionDeclarationPartContext);
        }
        else {
            return this.getRuleContext(i, ProcedureAndFunctionDeclarationPartContext);
        }
    };
    BlockContext.prototype.usesUnitsPart = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UsesUnitsPartContext);
        }
        else {
            return this.getRuleContext(i, UsesUnitsPartContext);
        }
    };
    BlockContext.prototype.IMPLEMENTATION = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.IMPLEMENTATION);
        }
        else {
            return this.getToken(pascalParser.IMPLEMENTATION, i);
        }
    };
    Object.defineProperty(BlockContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_block; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BlockContext.prototype.enterRule = function (listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.exitRule = function (listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    };
    // @Override
    BlockContext.prototype.accept = function (visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BlockContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BlockContext = BlockContext;
var UsesUnitsPartContext = /** @class */ (function (_super) {
    __extends(UsesUnitsPartContext, _super);
    function UsesUnitsPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UsesUnitsPartContext.prototype.USES = function () { return this.getToken(pascalParser.USES, 0); };
    UsesUnitsPartContext.prototype.identifierList = function () {
        return this.getRuleContext(0, IdentifierListContext);
    };
    UsesUnitsPartContext.prototype.SEMI = function () { return this.getToken(pascalParser.SEMI, 0); };
    Object.defineProperty(UsesUnitsPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_usesUnitsPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UsesUnitsPartContext.prototype.enterRule = function (listener) {
        if (listener.enterUsesUnitsPart) {
            listener.enterUsesUnitsPart(this);
        }
    };
    // @Override
    UsesUnitsPartContext.prototype.exitRule = function (listener) {
        if (listener.exitUsesUnitsPart) {
            listener.exitUsesUnitsPart(this);
        }
    };
    // @Override
    UsesUnitsPartContext.prototype.accept = function (visitor) {
        if (visitor.visitUsesUnitsPart) {
            return visitor.visitUsesUnitsPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UsesUnitsPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UsesUnitsPartContext = UsesUnitsPartContext;
var LabelDeclarationPartContext = /** @class */ (function (_super) {
    __extends(LabelDeclarationPartContext, _super);
    function LabelDeclarationPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabelDeclarationPartContext.prototype.LABEL = function () { return this.getToken(pascalParser.LABEL, 0); };
    LabelDeclarationPartContext.prototype.label = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LabelContext);
        }
        else {
            return this.getRuleContext(i, LabelContext);
        }
    };
    LabelDeclarationPartContext.prototype.SEMI = function () { return this.getToken(pascalParser.SEMI, 0); };
    LabelDeclarationPartContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.COMMA);
        }
        else {
            return this.getToken(pascalParser.COMMA, i);
        }
    };
    Object.defineProperty(LabelDeclarationPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_labelDeclarationPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LabelDeclarationPartContext.prototype.enterRule = function (listener) {
        if (listener.enterLabelDeclarationPart) {
            listener.enterLabelDeclarationPart(this);
        }
    };
    // @Override
    LabelDeclarationPartContext.prototype.exitRule = function (listener) {
        if (listener.exitLabelDeclarationPart) {
            listener.exitLabelDeclarationPart(this);
        }
    };
    // @Override
    LabelDeclarationPartContext.prototype.accept = function (visitor) {
        if (visitor.visitLabelDeclarationPart) {
            return visitor.visitLabelDeclarationPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LabelDeclarationPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LabelDeclarationPartContext = LabelDeclarationPartContext;
var LabelContext = /** @class */ (function (_super) {
    __extends(LabelContext, _super);
    function LabelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabelContext.prototype.unsignedInteger = function () {
        return this.getRuleContext(0, UnsignedIntegerContext);
    };
    Object.defineProperty(LabelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_label; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LabelContext.prototype.enterRule = function (listener) {
        if (listener.enterLabel) {
            listener.enterLabel(this);
        }
    };
    // @Override
    LabelContext.prototype.exitRule = function (listener) {
        if (listener.exitLabel) {
            listener.exitLabel(this);
        }
    };
    // @Override
    LabelContext.prototype.accept = function (visitor) {
        if (visitor.visitLabel) {
            return visitor.visitLabel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LabelContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LabelContext = LabelContext;
var ConstantDefinitionPartContext = /** @class */ (function (_super) {
    __extends(ConstantDefinitionPartContext, _super);
    function ConstantDefinitionPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantDefinitionPartContext.prototype.CONST = function () { return this.getToken(pascalParser.CONST, 0); };
    ConstantDefinitionPartContext.prototype.constantDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantDefinitionContext);
        }
        else {
            return this.getRuleContext(i, ConstantDefinitionContext);
        }
    };
    ConstantDefinitionPartContext.prototype.SEMI = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.SEMI);
        }
        else {
            return this.getToken(pascalParser.SEMI, i);
        }
    };
    Object.defineProperty(ConstantDefinitionPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_constantDefinitionPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantDefinitionPartContext.prototype.enterRule = function (listener) {
        if (listener.enterConstantDefinitionPart) {
            listener.enterConstantDefinitionPart(this);
        }
    };
    // @Override
    ConstantDefinitionPartContext.prototype.exitRule = function (listener) {
        if (listener.exitConstantDefinitionPart) {
            listener.exitConstantDefinitionPart(this);
        }
    };
    // @Override
    ConstantDefinitionPartContext.prototype.accept = function (visitor) {
        if (visitor.visitConstantDefinitionPart) {
            return visitor.visitConstantDefinitionPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantDefinitionPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantDefinitionPartContext = ConstantDefinitionPartContext;
var ConstantDefinitionContext = /** @class */ (function (_super) {
    __extends(ConstantDefinitionContext, _super);
    function ConstantDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantDefinitionContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    ConstantDefinitionContext.prototype.EQUAL = function () { return this.getToken(pascalParser.EQUAL, 0); };
    ConstantDefinitionContext.prototype.constant = function () {
        return this.getRuleContext(0, ConstantContext);
    };
    Object.defineProperty(ConstantDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_constantDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterConstantDefinition) {
            listener.enterConstantDefinition(this);
        }
    };
    // @Override
    ConstantDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitConstantDefinition) {
            listener.exitConstantDefinition(this);
        }
    };
    // @Override
    ConstantDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitConstantDefinition) {
            return visitor.visitConstantDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantDefinitionContext = ConstantDefinitionContext;
var ConstantChrContext = /** @class */ (function (_super) {
    __extends(ConstantChrContext, _super);
    function ConstantChrContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantChrContext.prototype.CHR = function () { return this.getToken(pascalParser.CHR, 0); };
    ConstantChrContext.prototype.LPAREN = function () { return this.getToken(pascalParser.LPAREN, 0); };
    ConstantChrContext.prototype.unsignedInteger = function () {
        return this.getRuleContext(0, UnsignedIntegerContext);
    };
    ConstantChrContext.prototype.RPAREN = function () { return this.getToken(pascalParser.RPAREN, 0); };
    Object.defineProperty(ConstantChrContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_constantChr; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantChrContext.prototype.enterRule = function (listener) {
        if (listener.enterConstantChr) {
            listener.enterConstantChr(this);
        }
    };
    // @Override
    ConstantChrContext.prototype.exitRule = function (listener) {
        if (listener.exitConstantChr) {
            listener.exitConstantChr(this);
        }
    };
    // @Override
    ConstantChrContext.prototype.accept = function (visitor) {
        if (visitor.visitConstantChr) {
            return visitor.visitConstantChr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantChrContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantChrContext = ConstantChrContext;
var ConstantContext = /** @class */ (function (_super) {
    __extends(ConstantContext, _super);
    function ConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantContext.prototype.unsignedNumber = function () {
        return this.tryGetRuleContext(0, UnsignedNumberContext);
    };
    ConstantContext.prototype.sign = function () {
        return this.tryGetRuleContext(0, SignContext);
    };
    ConstantContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    ConstantContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    ConstantContext.prototype.constantChr = function () {
        return this.tryGetRuleContext(0, ConstantChrContext);
    };
    Object.defineProperty(ConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_constant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterConstant) {
            listener.enterConstant(this);
        }
    };
    // @Override
    ConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitConstant) {
            listener.exitConstant(this);
        }
    };
    // @Override
    ConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitConstant) {
            return visitor.visitConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstantContext = ConstantContext;
var UnsignedNumberContext = /** @class */ (function (_super) {
    __extends(UnsignedNumberContext, _super);
    function UnsignedNumberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnsignedNumberContext.prototype.unsignedInteger = function () {
        return this.tryGetRuleContext(0, UnsignedIntegerContext);
    };
    UnsignedNumberContext.prototype.unsignedReal = function () {
        return this.tryGetRuleContext(0, UnsignedRealContext);
    };
    Object.defineProperty(UnsignedNumberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_unsignedNumber; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnsignedNumberContext.prototype.enterRule = function (listener) {
        if (listener.enterUnsignedNumber) {
            listener.enterUnsignedNumber(this);
        }
    };
    // @Override
    UnsignedNumberContext.prototype.exitRule = function (listener) {
        if (listener.exitUnsignedNumber) {
            listener.exitUnsignedNumber(this);
        }
    };
    // @Override
    UnsignedNumberContext.prototype.accept = function (visitor) {
        if (visitor.visitUnsignedNumber) {
            return visitor.visitUnsignedNumber(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnsignedNumberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnsignedNumberContext = UnsignedNumberContext;
var UnsignedIntegerContext = /** @class */ (function (_super) {
    __extends(UnsignedIntegerContext, _super);
    function UnsignedIntegerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnsignedIntegerContext.prototype.NUM_INT = function () { return this.getToken(pascalParser.NUM_INT, 0); };
    Object.defineProperty(UnsignedIntegerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_unsignedInteger; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnsignedIntegerContext.prototype.enterRule = function (listener) {
        if (listener.enterUnsignedInteger) {
            listener.enterUnsignedInteger(this);
        }
    };
    // @Override
    UnsignedIntegerContext.prototype.exitRule = function (listener) {
        if (listener.exitUnsignedInteger) {
            listener.exitUnsignedInteger(this);
        }
    };
    // @Override
    UnsignedIntegerContext.prototype.accept = function (visitor) {
        if (visitor.visitUnsignedInteger) {
            return visitor.visitUnsignedInteger(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnsignedIntegerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnsignedIntegerContext = UnsignedIntegerContext;
var UnsignedRealContext = /** @class */ (function (_super) {
    __extends(UnsignedRealContext, _super);
    function UnsignedRealContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnsignedRealContext.prototype.NUM_REAL = function () { return this.getToken(pascalParser.NUM_REAL, 0); };
    Object.defineProperty(UnsignedRealContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_unsignedReal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnsignedRealContext.prototype.enterRule = function (listener) {
        if (listener.enterUnsignedReal) {
            listener.enterUnsignedReal(this);
        }
    };
    // @Override
    UnsignedRealContext.prototype.exitRule = function (listener) {
        if (listener.exitUnsignedReal) {
            listener.exitUnsignedReal(this);
        }
    };
    // @Override
    UnsignedRealContext.prototype.accept = function (visitor) {
        if (visitor.visitUnsignedReal) {
            return visitor.visitUnsignedReal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnsignedRealContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnsignedRealContext = UnsignedRealContext;
var SignContext = /** @class */ (function (_super) {
    __extends(SignContext, _super);
    function SignContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SignContext.prototype.PLUS = function () { return this.tryGetToken(pascalParser.PLUS, 0); };
    SignContext.prototype.MINUS = function () { return this.tryGetToken(pascalParser.MINUS, 0); };
    Object.defineProperty(SignContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_sign; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SignContext.prototype.enterRule = function (listener) {
        if (listener.enterSign) {
            listener.enterSign(this);
        }
    };
    // @Override
    SignContext.prototype.exitRule = function (listener) {
        if (listener.exitSign) {
            listener.exitSign(this);
        }
    };
    // @Override
    SignContext.prototype.accept = function (visitor) {
        if (visitor.visitSign) {
            return visitor.visitSign(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SignContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SignContext = SignContext;
var BoolContext = /** @class */ (function (_super) {
    __extends(BoolContext, _super);
    function BoolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BoolContext.prototype.TRUE = function () { return this.tryGetToken(pascalParser.TRUE, 0); };
    BoolContext.prototype.FALSE = function () { return this.tryGetToken(pascalParser.FALSE, 0); };
    Object.defineProperty(BoolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_bool; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BoolContext.prototype.enterRule = function (listener) {
        if (listener.enterBool) {
            listener.enterBool(this);
        }
    };
    // @Override
    BoolContext.prototype.exitRule = function (listener) {
        if (listener.exitBool) {
            listener.exitBool(this);
        }
    };
    // @Override
    BoolContext.prototype.accept = function (visitor) {
        if (visitor.visitBool) {
            return visitor.visitBool(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BoolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BoolContext = BoolContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.STRING_LITERAL = function () { return this.getToken(pascalParser.STRING_LITERAL, 0); };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_string; },
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
var TypeDefinitionPartContext = /** @class */ (function (_super) {
    __extends(TypeDefinitionPartContext, _super);
    function TypeDefinitionPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeDefinitionPartContext.prototype.TYPE = function () { return this.getToken(pascalParser.TYPE, 0); };
    TypeDefinitionPartContext.prototype.typeDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeDefinitionContext);
        }
        else {
            return this.getRuleContext(i, TypeDefinitionContext);
        }
    };
    TypeDefinitionPartContext.prototype.SEMI = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.SEMI);
        }
        else {
            return this.getToken(pascalParser.SEMI, i);
        }
    };
    Object.defineProperty(TypeDefinitionPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_typeDefinitionPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeDefinitionPartContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeDefinitionPart) {
            listener.enterTypeDefinitionPart(this);
        }
    };
    // @Override
    TypeDefinitionPartContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeDefinitionPart) {
            listener.exitTypeDefinitionPart(this);
        }
    };
    // @Override
    TypeDefinitionPartContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeDefinitionPart) {
            return visitor.visitTypeDefinitionPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeDefinitionPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeDefinitionPartContext = TypeDefinitionPartContext;
var TypeDefinitionContext = /** @class */ (function (_super) {
    __extends(TypeDefinitionContext, _super);
    function TypeDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeDefinitionContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    TypeDefinitionContext.prototype.EQUAL = function () { return this.getToken(pascalParser.EQUAL, 0); };
    TypeDefinitionContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    TypeDefinitionContext.prototype.functionType = function () {
        return this.tryGetRuleContext(0, FunctionTypeContext);
    };
    TypeDefinitionContext.prototype.procedureType = function () {
        return this.tryGetRuleContext(0, ProcedureTypeContext);
    };
    Object.defineProperty(TypeDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_typeDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeDefinition) {
            listener.enterTypeDefinition(this);
        }
    };
    // @Override
    TypeDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeDefinition) {
            listener.exitTypeDefinition(this);
        }
    };
    // @Override
    TypeDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeDefinition) {
            return visitor.visitTypeDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeDefinitionContext = TypeDefinitionContext;
var FunctionTypeContext = /** @class */ (function (_super) {
    __extends(FunctionTypeContext, _super);
    function FunctionTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionTypeContext.prototype.FUNCTION = function () { return this.getToken(pascalParser.FUNCTION, 0); };
    FunctionTypeContext.prototype.COLON = function () { return this.getToken(pascalParser.COLON, 0); };
    FunctionTypeContext.prototype.resultType = function () {
        return this.getRuleContext(0, ResultTypeContext);
    };
    FunctionTypeContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    Object.defineProperty(FunctionTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_functionType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionType) {
            listener.enterFunctionType(this);
        }
    };
    // @Override
    FunctionTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionType) {
            listener.exitFunctionType(this);
        }
    };
    // @Override
    FunctionTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionType) {
            return visitor.visitFunctionType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionTypeContext = FunctionTypeContext;
var ProcedureTypeContext = /** @class */ (function (_super) {
    __extends(ProcedureTypeContext, _super);
    function ProcedureTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcedureTypeContext.prototype.PROCEDURE = function () { return this.getToken(pascalParser.PROCEDURE, 0); };
    ProcedureTypeContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    Object.defineProperty(ProcedureTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_procedureType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcedureTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureType) {
            listener.enterProcedureType(this);
        }
    };
    // @Override
    ProcedureTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureType) {
            listener.exitProcedureType(this);
        }
    };
    // @Override
    ProcedureTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureType) {
            return visitor.visitProcedureType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcedureTypeContext = ProcedureTypeContext;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeContext.prototype.simpleType = function () {
        return this.tryGetRuleContext(0, SimpleTypeContext);
    };
    TypeContext.prototype.structuredType = function () {
        return this.tryGetRuleContext(0, StructuredTypeContext);
    };
    TypeContext.prototype.pointerType = function () {
        return this.tryGetRuleContext(0, PointerTypeContext);
    };
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_type; },
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
var SimpleTypeContext = /** @class */ (function (_super) {
    __extends(SimpleTypeContext, _super);
    function SimpleTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleTypeContext.prototype.scalarType = function () {
        return this.tryGetRuleContext(0, ScalarTypeContext);
    };
    SimpleTypeContext.prototype.subrangeType = function () {
        return this.tryGetRuleContext(0, SubrangeTypeContext);
    };
    SimpleTypeContext.prototype.typeIdentifier = function () {
        return this.tryGetRuleContext(0, TypeIdentifierContext);
    };
    SimpleTypeContext.prototype.stringtype = function () {
        return this.tryGetRuleContext(0, StringtypeContext);
    };
    Object.defineProperty(SimpleTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_simpleType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleType) {
            listener.enterSimpleType(this);
        }
    };
    // @Override
    SimpleTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleType) {
            listener.exitSimpleType(this);
        }
    };
    // @Override
    SimpleTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleType) {
            return visitor.visitSimpleType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleTypeContext = SimpleTypeContext;
var ScalarTypeContext = /** @class */ (function (_super) {
    __extends(ScalarTypeContext, _super);
    function ScalarTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScalarTypeContext.prototype.LPAREN = function () { return this.getToken(pascalParser.LPAREN, 0); };
    ScalarTypeContext.prototype.identifierList = function () {
        return this.getRuleContext(0, IdentifierListContext);
    };
    ScalarTypeContext.prototype.RPAREN = function () { return this.getToken(pascalParser.RPAREN, 0); };
    Object.defineProperty(ScalarTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_scalarType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScalarTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterScalarType) {
            listener.enterScalarType(this);
        }
    };
    // @Override
    ScalarTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitScalarType) {
            listener.exitScalarType(this);
        }
    };
    // @Override
    ScalarTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitScalarType) {
            return visitor.visitScalarType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScalarTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScalarTypeContext = ScalarTypeContext;
var SubrangeTypeContext = /** @class */ (function (_super) {
    __extends(SubrangeTypeContext, _super);
    function SubrangeTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SubrangeTypeContext.prototype.constant = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantContext);
        }
        else {
            return this.getRuleContext(i, ConstantContext);
        }
    };
    SubrangeTypeContext.prototype.DOTDOT = function () { return this.getToken(pascalParser.DOTDOT, 0); };
    Object.defineProperty(SubrangeTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_subrangeType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SubrangeTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterSubrangeType) {
            listener.enterSubrangeType(this);
        }
    };
    // @Override
    SubrangeTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitSubrangeType) {
            listener.exitSubrangeType(this);
        }
    };
    // @Override
    SubrangeTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitSubrangeType) {
            return visitor.visitSubrangeType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubrangeTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SubrangeTypeContext = SubrangeTypeContext;
var TypeIdentifierContext = /** @class */ (function (_super) {
    __extends(TypeIdentifierContext, _super);
    function TypeIdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeIdentifierContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    TypeIdentifierContext.prototype.CHAR = function () { return this.tryGetToken(pascalParser.CHAR, 0); };
    TypeIdentifierContext.prototype.BOOLEAN = function () { return this.tryGetToken(pascalParser.BOOLEAN, 0); };
    TypeIdentifierContext.prototype.INTEGER = function () { return this.tryGetToken(pascalParser.INTEGER, 0); };
    TypeIdentifierContext.prototype.REAL = function () { return this.tryGetToken(pascalParser.REAL, 0); };
    TypeIdentifierContext.prototype.STRING = function () { return this.tryGetToken(pascalParser.STRING, 0); };
    Object.defineProperty(TypeIdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_typeIdentifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeIdentifierContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeIdentifier) {
            listener.enterTypeIdentifier(this);
        }
    };
    // @Override
    TypeIdentifierContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeIdentifier) {
            listener.exitTypeIdentifier(this);
        }
    };
    // @Override
    TypeIdentifierContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeIdentifier) {
            return visitor.visitTypeIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeIdentifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeIdentifierContext = TypeIdentifierContext;
var StructuredTypeContext = /** @class */ (function (_super) {
    __extends(StructuredTypeContext, _super);
    function StructuredTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructuredTypeContext.prototype.PACKED = function () { return this.tryGetToken(pascalParser.PACKED, 0); };
    StructuredTypeContext.prototype.unpackedStructuredType = function () {
        return this.getRuleContext(0, UnpackedStructuredTypeContext);
    };
    Object.defineProperty(StructuredTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_structuredType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructuredTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterStructuredType) {
            listener.enterStructuredType(this);
        }
    };
    // @Override
    StructuredTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitStructuredType) {
            listener.exitStructuredType(this);
        }
    };
    // @Override
    StructuredTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitStructuredType) {
            return visitor.visitStructuredType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructuredTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructuredTypeContext = StructuredTypeContext;
var UnpackedStructuredTypeContext = /** @class */ (function (_super) {
    __extends(UnpackedStructuredTypeContext, _super);
    function UnpackedStructuredTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnpackedStructuredTypeContext.prototype.arrayType = function () {
        return this.tryGetRuleContext(0, ArrayTypeContext);
    };
    UnpackedStructuredTypeContext.prototype.recordType = function () {
        return this.tryGetRuleContext(0, RecordTypeContext);
    };
    UnpackedStructuredTypeContext.prototype.setType = function () {
        return this.tryGetRuleContext(0, SetTypeContext);
    };
    UnpackedStructuredTypeContext.prototype.fileType = function () {
        return this.tryGetRuleContext(0, FileTypeContext);
    };
    Object.defineProperty(UnpackedStructuredTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_unpackedStructuredType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnpackedStructuredTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterUnpackedStructuredType) {
            listener.enterUnpackedStructuredType(this);
        }
    };
    // @Override
    UnpackedStructuredTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitUnpackedStructuredType) {
            listener.exitUnpackedStructuredType(this);
        }
    };
    // @Override
    UnpackedStructuredTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitUnpackedStructuredType) {
            return visitor.visitUnpackedStructuredType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnpackedStructuredTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnpackedStructuredTypeContext = UnpackedStructuredTypeContext;
var StringtypeContext = /** @class */ (function (_super) {
    __extends(StringtypeContext, _super);
    function StringtypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringtypeContext.prototype.STRING = function () { return this.getToken(pascalParser.STRING, 0); };
    StringtypeContext.prototype.LBRACK = function () { return this.getToken(pascalParser.LBRACK, 0); };
    StringtypeContext.prototype.RBRACK = function () { return this.getToken(pascalParser.RBRACK, 0); };
    StringtypeContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    StringtypeContext.prototype.unsignedNumber = function () {
        return this.tryGetRuleContext(0, UnsignedNumberContext);
    };
    Object.defineProperty(StringtypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_stringtype; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringtypeContext.prototype.enterRule = function (listener) {
        if (listener.enterStringtype) {
            listener.enterStringtype(this);
        }
    };
    // @Override
    StringtypeContext.prototype.exitRule = function (listener) {
        if (listener.exitStringtype) {
            listener.exitStringtype(this);
        }
    };
    // @Override
    StringtypeContext.prototype.accept = function (visitor) {
        if (visitor.visitStringtype) {
            return visitor.visitStringtype(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringtypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringtypeContext = StringtypeContext;
var ArrayTypeContext = /** @class */ (function (_super) {
    __extends(ArrayTypeContext, _super);
    function ArrayTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayTypeContext.prototype.ARRAY = function () { return this.getToken(pascalParser.ARRAY, 0); };
    ArrayTypeContext.prototype.LBRACK = function () { return this.tryGetToken(pascalParser.LBRACK, 0); };
    ArrayTypeContext.prototype.typeList = function () {
        return this.getRuleContext(0, TypeListContext);
    };
    ArrayTypeContext.prototype.RBRACK = function () { return this.tryGetToken(pascalParser.RBRACK, 0); };
    ArrayTypeContext.prototype.OF = function () { return this.getToken(pascalParser.OF, 0); };
    ArrayTypeContext.prototype.componentType = function () {
        return this.getRuleContext(0, ComponentTypeContext);
    };
    ArrayTypeContext.prototype.LBRACK2 = function () { return this.tryGetToken(pascalParser.LBRACK2, 0); };
    ArrayTypeContext.prototype.RBRACK2 = function () { return this.tryGetToken(pascalParser.RBRACK2, 0); };
    Object.defineProperty(ArrayTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_arrayType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayType) {
            listener.enterArrayType(this);
        }
    };
    // @Override
    ArrayTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayType) {
            listener.exitArrayType(this);
        }
    };
    // @Override
    ArrayTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayType) {
            return visitor.visitArrayType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayTypeContext = ArrayTypeContext;
var TypeListContext = /** @class */ (function (_super) {
    __extends(TypeListContext, _super);
    function TypeListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeListContext.prototype.indexType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IndexTypeContext);
        }
        else {
            return this.getRuleContext(i, IndexTypeContext);
        }
    };
    TypeListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.COMMA);
        }
        else {
            return this.getToken(pascalParser.COMMA, i);
        }
    };
    Object.defineProperty(TypeListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_typeList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeListContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeList) {
            listener.enterTypeList(this);
        }
    };
    // @Override
    TypeListContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeList) {
            listener.exitTypeList(this);
        }
    };
    // @Override
    TypeListContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeList) {
            return visitor.visitTypeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeListContext = TypeListContext;
var IndexTypeContext = /** @class */ (function (_super) {
    __extends(IndexTypeContext, _super);
    function IndexTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IndexTypeContext.prototype.simpleType = function () {
        return this.getRuleContext(0, SimpleTypeContext);
    };
    Object.defineProperty(IndexTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_indexType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IndexTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterIndexType) {
            listener.enterIndexType(this);
        }
    };
    // @Override
    IndexTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitIndexType) {
            listener.exitIndexType(this);
        }
    };
    // @Override
    IndexTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitIndexType) {
            return visitor.visitIndexType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IndexTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IndexTypeContext = IndexTypeContext;
var ComponentTypeContext = /** @class */ (function (_super) {
    __extends(ComponentTypeContext, _super);
    function ComponentTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComponentTypeContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Object.defineProperty(ComponentTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_componentType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ComponentTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterComponentType) {
            listener.enterComponentType(this);
        }
    };
    // @Override
    ComponentTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitComponentType) {
            listener.exitComponentType(this);
        }
    };
    // @Override
    ComponentTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitComponentType) {
            return visitor.visitComponentType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComponentTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ComponentTypeContext = ComponentTypeContext;
var RecordTypeContext = /** @class */ (function (_super) {
    __extends(RecordTypeContext, _super);
    function RecordTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RecordTypeContext.prototype.RECORD = function () { return this.getToken(pascalParser.RECORD, 0); };
    RecordTypeContext.prototype.END = function () { return this.getToken(pascalParser.END, 0); };
    RecordTypeContext.prototype.fieldList = function () {
        return this.tryGetRuleContext(0, FieldListContext);
    };
    Object.defineProperty(RecordTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_recordType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RecordTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterRecordType) {
            listener.enterRecordType(this);
        }
    };
    // @Override
    RecordTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitRecordType) {
            listener.exitRecordType(this);
        }
    };
    // @Override
    RecordTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitRecordType) {
            return visitor.visitRecordType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RecordTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RecordTypeContext = RecordTypeContext;
var FieldListContext = /** @class */ (function (_super) {
    __extends(FieldListContext, _super);
    function FieldListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldListContext.prototype.fixedPart = function () {
        return this.tryGetRuleContext(0, FixedPartContext);
    };
    FieldListContext.prototype.SEMI = function () { return this.tryGetToken(pascalParser.SEMI, 0); };
    FieldListContext.prototype.variantPart = function () {
        return this.tryGetRuleContext(0, VariantPartContext);
    };
    Object.defineProperty(FieldListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_fieldList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldListContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldList) {
            listener.enterFieldList(this);
        }
    };
    // @Override
    FieldListContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldList) {
            listener.exitFieldList(this);
        }
    };
    // @Override
    FieldListContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldList) {
            return visitor.visitFieldList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldListContext = FieldListContext;
var FixedPartContext = /** @class */ (function (_super) {
    __extends(FixedPartContext, _super);
    function FixedPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FixedPartContext.prototype.recordSection = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RecordSectionContext);
        }
        else {
            return this.getRuleContext(i, RecordSectionContext);
        }
    };
    FixedPartContext.prototype.SEMI = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.SEMI);
        }
        else {
            return this.getToken(pascalParser.SEMI, i);
        }
    };
    Object.defineProperty(FixedPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_fixedPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FixedPartContext.prototype.enterRule = function (listener) {
        if (listener.enterFixedPart) {
            listener.enterFixedPart(this);
        }
    };
    // @Override
    FixedPartContext.prototype.exitRule = function (listener) {
        if (listener.exitFixedPart) {
            listener.exitFixedPart(this);
        }
    };
    // @Override
    FixedPartContext.prototype.accept = function (visitor) {
        if (visitor.visitFixedPart) {
            return visitor.visitFixedPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FixedPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FixedPartContext = FixedPartContext;
var RecordSectionContext = /** @class */ (function (_super) {
    __extends(RecordSectionContext, _super);
    function RecordSectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RecordSectionContext.prototype.identifierList = function () {
        return this.getRuleContext(0, IdentifierListContext);
    };
    RecordSectionContext.prototype.COLON = function () { return this.getToken(pascalParser.COLON, 0); };
    RecordSectionContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Object.defineProperty(RecordSectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_recordSection; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RecordSectionContext.prototype.enterRule = function (listener) {
        if (listener.enterRecordSection) {
            listener.enterRecordSection(this);
        }
    };
    // @Override
    RecordSectionContext.prototype.exitRule = function (listener) {
        if (listener.exitRecordSection) {
            listener.exitRecordSection(this);
        }
    };
    // @Override
    RecordSectionContext.prototype.accept = function (visitor) {
        if (visitor.visitRecordSection) {
            return visitor.visitRecordSection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RecordSectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RecordSectionContext = RecordSectionContext;
var VariantPartContext = /** @class */ (function (_super) {
    __extends(VariantPartContext, _super);
    function VariantPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariantPartContext.prototype.CASE = function () { return this.getToken(pascalParser.CASE, 0); };
    VariantPartContext.prototype.tag = function () {
        return this.getRuleContext(0, TagContext);
    };
    VariantPartContext.prototype.OF = function () { return this.getToken(pascalParser.OF, 0); };
    VariantPartContext.prototype.variant = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariantContext);
        }
        else {
            return this.getRuleContext(i, VariantContext);
        }
    };
    VariantPartContext.prototype.SEMI = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.SEMI);
        }
        else {
            return this.getToken(pascalParser.SEMI, i);
        }
    };
    Object.defineProperty(VariantPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_variantPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariantPartContext.prototype.enterRule = function (listener) {
        if (listener.enterVariantPart) {
            listener.enterVariantPart(this);
        }
    };
    // @Override
    VariantPartContext.prototype.exitRule = function (listener) {
        if (listener.exitVariantPart) {
            listener.exitVariantPart(this);
        }
    };
    // @Override
    VariantPartContext.prototype.accept = function (visitor) {
        if (visitor.visitVariantPart) {
            return visitor.visitVariantPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariantPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariantPartContext = VariantPartContext;
var TagContext = /** @class */ (function (_super) {
    __extends(TagContext, _super);
    function TagContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TagContext.prototype.identifier = function () {
        return this.tryGetRuleContext(0, IdentifierContext);
    };
    TagContext.prototype.COLON = function () { return this.tryGetToken(pascalParser.COLON, 0); };
    TagContext.prototype.typeIdentifier = function () {
        return this.getRuleContext(0, TypeIdentifierContext);
    };
    Object.defineProperty(TagContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_tag; },
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
var VariantContext = /** @class */ (function (_super) {
    __extends(VariantContext, _super);
    function VariantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariantContext.prototype.constList = function () {
        return this.getRuleContext(0, ConstListContext);
    };
    VariantContext.prototype.COLON = function () { return this.getToken(pascalParser.COLON, 0); };
    VariantContext.prototype.LPAREN = function () { return this.getToken(pascalParser.LPAREN, 0); };
    VariantContext.prototype.fieldList = function () {
        return this.getRuleContext(0, FieldListContext);
    };
    VariantContext.prototype.RPAREN = function () { return this.getToken(pascalParser.RPAREN, 0); };
    Object.defineProperty(VariantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_variant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariantContext.prototype.enterRule = function (listener) {
        if (listener.enterVariant) {
            listener.enterVariant(this);
        }
    };
    // @Override
    VariantContext.prototype.exitRule = function (listener) {
        if (listener.exitVariant) {
            listener.exitVariant(this);
        }
    };
    // @Override
    VariantContext.prototype.accept = function (visitor) {
        if (visitor.visitVariant) {
            return visitor.visitVariant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariantContext = VariantContext;
var SetTypeContext = /** @class */ (function (_super) {
    __extends(SetTypeContext, _super);
    function SetTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetTypeContext.prototype.SET = function () { return this.getToken(pascalParser.SET, 0); };
    SetTypeContext.prototype.OF = function () { return this.getToken(pascalParser.OF, 0); };
    SetTypeContext.prototype.baseType = function () {
        return this.getRuleContext(0, BaseTypeContext);
    };
    Object.defineProperty(SetTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_setType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterSetType) {
            listener.enterSetType(this);
        }
    };
    // @Override
    SetTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitSetType) {
            listener.exitSetType(this);
        }
    };
    // @Override
    SetTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitSetType) {
            return visitor.visitSetType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetTypeContext = SetTypeContext;
var BaseTypeContext = /** @class */ (function (_super) {
    __extends(BaseTypeContext, _super);
    function BaseTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BaseTypeContext.prototype.simpleType = function () {
        return this.getRuleContext(0, SimpleTypeContext);
    };
    Object.defineProperty(BaseTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_baseType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BaseTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterBaseType) {
            listener.enterBaseType(this);
        }
    };
    // @Override
    BaseTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitBaseType) {
            listener.exitBaseType(this);
        }
    };
    // @Override
    BaseTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitBaseType) {
            return visitor.visitBaseType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BaseTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BaseTypeContext = BaseTypeContext;
var FileTypeContext = /** @class */ (function (_super) {
    __extends(FileTypeContext, _super);
    function FileTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FileTypeContext.prototype.FILE = function () { return this.getToken(pascalParser.FILE, 0); };
    FileTypeContext.prototype.OF = function () { return this.tryGetToken(pascalParser.OF, 0); };
    FileTypeContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    Object.defineProperty(FileTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_fileType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FileTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterFileType) {
            listener.enterFileType(this);
        }
    };
    // @Override
    FileTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitFileType) {
            listener.exitFileType(this);
        }
    };
    // @Override
    FileTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitFileType) {
            return visitor.visitFileType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FileTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FileTypeContext = FileTypeContext;
var PointerTypeContext = /** @class */ (function (_super) {
    __extends(PointerTypeContext, _super);
    function PointerTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PointerTypeContext.prototype.POINTER = function () { return this.getToken(pascalParser.POINTER, 0); };
    PointerTypeContext.prototype.typeIdentifier = function () {
        return this.getRuleContext(0, TypeIdentifierContext);
    };
    Object.defineProperty(PointerTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_pointerType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PointerTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterPointerType) {
            listener.enterPointerType(this);
        }
    };
    // @Override
    PointerTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitPointerType) {
            listener.exitPointerType(this);
        }
    };
    // @Override
    PointerTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitPointerType) {
            return visitor.visitPointerType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PointerTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PointerTypeContext = PointerTypeContext;
var VariableDeclarationPartContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationPartContext, _super);
    function VariableDeclarationPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationPartContext.prototype.VAR = function () { return this.getToken(pascalParser.VAR, 0); };
    VariableDeclarationPartContext.prototype.variableDeclaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclarationContext);
        }
    };
    VariableDeclarationPartContext.prototype.SEMI = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.SEMI);
        }
        else {
            return this.getToken(pascalParser.SEMI, i);
        }
    };
    Object.defineProperty(VariableDeclarationPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_variableDeclarationPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclarationPartContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclarationPart) {
            listener.enterVariableDeclarationPart(this);
        }
    };
    // @Override
    VariableDeclarationPartContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclarationPart) {
            listener.exitVariableDeclarationPart(this);
        }
    };
    // @Override
    VariableDeclarationPartContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclarationPart) {
            return visitor.visitVariableDeclarationPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclarationPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclarationPartContext = VariableDeclarationPartContext;
var VariableDeclarationContext = /** @class */ (function (_super) {
    __extends(VariableDeclarationContext, _super);
    function VariableDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDeclarationContext.prototype.identifierList = function () {
        return this.getRuleContext(0, IdentifierListContext);
    };
    VariableDeclarationContext.prototype.COLON = function () { return this.getToken(pascalParser.COLON, 0); };
    VariableDeclarationContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Object.defineProperty(VariableDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_variableDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDeclaration) {
            listener.enterVariableDeclaration(this);
        }
    };
    // @Override
    VariableDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDeclaration) {
            listener.exitVariableDeclaration(this);
        }
    };
    // @Override
    VariableDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDeclaration) {
            return visitor.visitVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDeclarationContext = VariableDeclarationContext;
var ProcedureAndFunctionDeclarationPartContext = /** @class */ (function (_super) {
    __extends(ProcedureAndFunctionDeclarationPartContext, _super);
    function ProcedureAndFunctionDeclarationPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcedureAndFunctionDeclarationPartContext.prototype.procedureOrFunctionDeclaration = function () {
        return this.getRuleContext(0, ProcedureOrFunctionDeclarationContext);
    };
    ProcedureAndFunctionDeclarationPartContext.prototype.SEMI = function () { return this.getToken(pascalParser.SEMI, 0); };
    Object.defineProperty(ProcedureAndFunctionDeclarationPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_procedureAndFunctionDeclarationPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcedureAndFunctionDeclarationPartContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureAndFunctionDeclarationPart) {
            listener.enterProcedureAndFunctionDeclarationPart(this);
        }
    };
    // @Override
    ProcedureAndFunctionDeclarationPartContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureAndFunctionDeclarationPart) {
            listener.exitProcedureAndFunctionDeclarationPart(this);
        }
    };
    // @Override
    ProcedureAndFunctionDeclarationPartContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureAndFunctionDeclarationPart) {
            return visitor.visitProcedureAndFunctionDeclarationPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureAndFunctionDeclarationPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcedureAndFunctionDeclarationPartContext = ProcedureAndFunctionDeclarationPartContext;
var ProcedureOrFunctionDeclarationContext = /** @class */ (function (_super) {
    __extends(ProcedureOrFunctionDeclarationContext, _super);
    function ProcedureOrFunctionDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcedureOrFunctionDeclarationContext.prototype.procedureDeclaration = function () {
        return this.tryGetRuleContext(0, ProcedureDeclarationContext);
    };
    ProcedureOrFunctionDeclarationContext.prototype.functionDeclaration = function () {
        return this.tryGetRuleContext(0, FunctionDeclarationContext);
    };
    Object.defineProperty(ProcedureOrFunctionDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_procedureOrFunctionDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcedureOrFunctionDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureOrFunctionDeclaration) {
            listener.enterProcedureOrFunctionDeclaration(this);
        }
    };
    // @Override
    ProcedureOrFunctionDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureOrFunctionDeclaration) {
            listener.exitProcedureOrFunctionDeclaration(this);
        }
    };
    // @Override
    ProcedureOrFunctionDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureOrFunctionDeclaration) {
            return visitor.visitProcedureOrFunctionDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureOrFunctionDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcedureOrFunctionDeclarationContext = ProcedureOrFunctionDeclarationContext;
var ProcedureDeclarationContext = /** @class */ (function (_super) {
    __extends(ProcedureDeclarationContext, _super);
    function ProcedureDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcedureDeclarationContext.prototype.PROCEDURE = function () { return this.getToken(pascalParser.PROCEDURE, 0); };
    ProcedureDeclarationContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    ProcedureDeclarationContext.prototype.SEMI = function () { return this.getToken(pascalParser.SEMI, 0); };
    ProcedureDeclarationContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    ProcedureDeclarationContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    Object.defineProperty(ProcedureDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_procedureDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcedureDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureDeclaration) {
            listener.enterProcedureDeclaration(this);
        }
    };
    // @Override
    ProcedureDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureDeclaration) {
            listener.exitProcedureDeclaration(this);
        }
    };
    // @Override
    ProcedureDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureDeclaration) {
            return visitor.visitProcedureDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcedureDeclarationContext = ProcedureDeclarationContext;
var FormalParameterListContext = /** @class */ (function (_super) {
    __extends(FormalParameterListContext, _super);
    function FormalParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParameterListContext.prototype.LPAREN = function () { return this.getToken(pascalParser.LPAREN, 0); };
    FormalParameterListContext.prototype.formalParameterSection = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FormalParameterSectionContext);
        }
        else {
            return this.getRuleContext(i, FormalParameterSectionContext);
        }
    };
    FormalParameterListContext.prototype.RPAREN = function () { return this.getToken(pascalParser.RPAREN, 0); };
    FormalParameterListContext.prototype.SEMI = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.SEMI);
        }
        else {
            return this.getToken(pascalParser.SEMI, i);
        }
    };
    Object.defineProperty(FormalParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_formalParameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalParameterList) {
            listener.enterFormalParameterList(this);
        }
    };
    // @Override
    FormalParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalParameterList) {
            listener.exitFormalParameterList(this);
        }
    };
    // @Override
    FormalParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalParameterList) {
            return visitor.visitFormalParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalParameterListContext = FormalParameterListContext;
var FormalParameterSectionContext = /** @class */ (function (_super) {
    __extends(FormalParameterSectionContext, _super);
    function FormalParameterSectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FormalParameterSectionContext.prototype.parameterGroup = function () {
        return this.getRuleContext(0, ParameterGroupContext);
    };
    FormalParameterSectionContext.prototype.VAR = function () { return this.tryGetToken(pascalParser.VAR, 0); };
    FormalParameterSectionContext.prototype.FUNCTION = function () { return this.tryGetToken(pascalParser.FUNCTION, 0); };
    FormalParameterSectionContext.prototype.PROCEDURE = function () { return this.tryGetToken(pascalParser.PROCEDURE, 0); };
    Object.defineProperty(FormalParameterSectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_formalParameterSection; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FormalParameterSectionContext.prototype.enterRule = function (listener) {
        if (listener.enterFormalParameterSection) {
            listener.enterFormalParameterSection(this);
        }
    };
    // @Override
    FormalParameterSectionContext.prototype.exitRule = function (listener) {
        if (listener.exitFormalParameterSection) {
            listener.exitFormalParameterSection(this);
        }
    };
    // @Override
    FormalParameterSectionContext.prototype.accept = function (visitor) {
        if (visitor.visitFormalParameterSection) {
            return visitor.visitFormalParameterSection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FormalParameterSectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FormalParameterSectionContext = FormalParameterSectionContext;
var ParameterGroupContext = /** @class */ (function (_super) {
    __extends(ParameterGroupContext, _super);
    function ParameterGroupContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterGroupContext.prototype.identifierList = function () {
        return this.getRuleContext(0, IdentifierListContext);
    };
    ParameterGroupContext.prototype.COLON = function () { return this.getToken(pascalParser.COLON, 0); };
    ParameterGroupContext.prototype.typeIdentifier = function () {
        return this.getRuleContext(0, TypeIdentifierContext);
    };
    Object.defineProperty(ParameterGroupContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_parameterGroup; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterGroupContext.prototype.enterRule = function (listener) {
        if (listener.enterParameterGroup) {
            listener.enterParameterGroup(this);
        }
    };
    // @Override
    ParameterGroupContext.prototype.exitRule = function (listener) {
        if (listener.exitParameterGroup) {
            listener.exitParameterGroup(this);
        }
    };
    // @Override
    ParameterGroupContext.prototype.accept = function (visitor) {
        if (visitor.visitParameterGroup) {
            return visitor.visitParameterGroup(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterGroupContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterGroupContext = ParameterGroupContext;
var IdentifierListContext = /** @class */ (function (_super) {
    __extends(IdentifierListContext, _super);
    function IdentifierListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierListContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    IdentifierListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.COMMA);
        }
        else {
            return this.getToken(pascalParser.COMMA, i);
        }
    };
    Object.defineProperty(IdentifierListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_identifierList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifierListContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifierList) {
            listener.enterIdentifierList(this);
        }
    };
    // @Override
    IdentifierListContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifierList) {
            listener.exitIdentifierList(this);
        }
    };
    // @Override
    IdentifierListContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifierList) {
            return visitor.visitIdentifierList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifierListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifierListContext = IdentifierListContext;
var ConstListContext = /** @class */ (function (_super) {
    __extends(ConstListContext, _super);
    function ConstListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstListContext.prototype.constant = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantContext);
        }
        else {
            return this.getRuleContext(i, ConstantContext);
        }
    };
    ConstListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.COMMA);
        }
        else {
            return this.getToken(pascalParser.COMMA, i);
        }
    };
    Object.defineProperty(ConstListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_constList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstListContext.prototype.enterRule = function (listener) {
        if (listener.enterConstList) {
            listener.enterConstList(this);
        }
    };
    // @Override
    ConstListContext.prototype.exitRule = function (listener) {
        if (listener.exitConstList) {
            listener.exitConstList(this);
        }
    };
    // @Override
    ConstListContext.prototype.accept = function (visitor) {
        if (visitor.visitConstList) {
            return visitor.visitConstList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstListContext = ConstListContext;
var FunctionDeclarationContext = /** @class */ (function (_super) {
    __extends(FunctionDeclarationContext, _super);
    function FunctionDeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionDeclarationContext.prototype.FUNCTION = function () { return this.getToken(pascalParser.FUNCTION, 0); };
    FunctionDeclarationContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    FunctionDeclarationContext.prototype.COLON = function () { return this.getToken(pascalParser.COLON, 0); };
    FunctionDeclarationContext.prototype.resultType = function () {
        return this.getRuleContext(0, ResultTypeContext);
    };
    FunctionDeclarationContext.prototype.SEMI = function () { return this.getToken(pascalParser.SEMI, 0); };
    FunctionDeclarationContext.prototype.block = function () {
        return this.getRuleContext(0, BlockContext);
    };
    FunctionDeclarationContext.prototype.formalParameterList = function () {
        return this.tryGetRuleContext(0, FormalParameterListContext);
    };
    Object.defineProperty(FunctionDeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_functionDeclaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionDeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionDeclaration) {
            listener.enterFunctionDeclaration(this);
        }
    };
    // @Override
    FunctionDeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionDeclaration) {
            listener.exitFunctionDeclaration(this);
        }
    };
    // @Override
    FunctionDeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionDeclaration) {
            return visitor.visitFunctionDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionDeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionDeclarationContext = FunctionDeclarationContext;
var ResultTypeContext = /** @class */ (function (_super) {
    __extends(ResultTypeContext, _super);
    function ResultTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ResultTypeContext.prototype.typeIdentifier = function () {
        return this.getRuleContext(0, TypeIdentifierContext);
    };
    Object.defineProperty(ResultTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_resultType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ResultTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterResultType) {
            listener.enterResultType(this);
        }
    };
    // @Override
    ResultTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitResultType) {
            listener.exitResultType(this);
        }
    };
    // @Override
    ResultTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitResultType) {
            return visitor.visitResultType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ResultTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ResultTypeContext = ResultTypeContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.label = function () {
        return this.tryGetRuleContext(0, LabelContext);
    };
    StatementContext.prototype.COLON = function () { return this.tryGetToken(pascalParser.COLON, 0); };
    StatementContext.prototype.unlabelledStatement = function () {
        return this.getRuleContext(0, UnlabelledStatementContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementContext.prototype.enterRule = function (listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    };
    // @Override
    StatementContext.prototype.exitRule = function (listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    };
    // @Override
    StatementContext.prototype.accept = function (visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementContext = StatementContext;
var UnlabelledStatementContext = /** @class */ (function (_super) {
    __extends(UnlabelledStatementContext, _super);
    function UnlabelledStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnlabelledStatementContext.prototype.simpleStatement = function () {
        return this.tryGetRuleContext(0, SimpleStatementContext);
    };
    UnlabelledStatementContext.prototype.structuredStatement = function () {
        return this.tryGetRuleContext(0, StructuredStatementContext);
    };
    Object.defineProperty(UnlabelledStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_unlabelledStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnlabelledStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterUnlabelledStatement) {
            listener.enterUnlabelledStatement(this);
        }
    };
    // @Override
    UnlabelledStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitUnlabelledStatement) {
            listener.exitUnlabelledStatement(this);
        }
    };
    // @Override
    UnlabelledStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitUnlabelledStatement) {
            return visitor.visitUnlabelledStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnlabelledStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnlabelledStatementContext = UnlabelledStatementContext;
var SimpleStatementContext = /** @class */ (function (_super) {
    __extends(SimpleStatementContext, _super);
    function SimpleStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleStatementContext.prototype.assignmentStatement = function () {
        return this.tryGetRuleContext(0, AssignmentStatementContext);
    };
    SimpleStatementContext.prototype.procedureStatement = function () {
        return this.tryGetRuleContext(0, ProcedureStatementContext);
    };
    SimpleStatementContext.prototype.gotoStatement = function () {
        return this.tryGetRuleContext(0, GotoStatementContext);
    };
    SimpleStatementContext.prototype.emptyStatement = function () {
        return this.tryGetRuleContext(0, EmptyStatementContext);
    };
    Object.defineProperty(SimpleStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_simpleStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleStatement) {
            listener.enterSimpleStatement(this);
        }
    };
    // @Override
    SimpleStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleStatement) {
            listener.exitSimpleStatement(this);
        }
    };
    // @Override
    SimpleStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleStatement) {
            return visitor.visitSimpleStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleStatementContext = SimpleStatementContext;
var AssignmentStatementContext = /** @class */ (function (_super) {
    __extends(AssignmentStatementContext, _super);
    function AssignmentStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentStatementContext.prototype.variable = function () {
        return this.getRuleContext(0, VariableContext);
    };
    AssignmentStatementContext.prototype.ASSIGN = function () { return this.getToken(pascalParser.ASSIGN, 0); };
    AssignmentStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(AssignmentStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_assignmentStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignmentStatement) {
            listener.enterAssignmentStatement(this);
        }
    };
    // @Override
    AssignmentStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignmentStatement) {
            listener.exitAssignmentStatement(this);
        }
    };
    // @Override
    AssignmentStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignmentStatement) {
            return visitor.visitAssignmentStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentStatementContext = AssignmentStatementContext;
var VariableContext = /** @class */ (function (_super) {
    __extends(VariableContext, _super);
    function VariableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableContext.prototype.AT = function () { return this.tryGetToken(pascalParser.AT, 0); };
    VariableContext.prototype.identifier = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        else {
            return this.getRuleContext(i, IdentifierContext);
        }
    };
    VariableContext.prototype.LBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.LBRACK);
        }
        else {
            return this.getToken(pascalParser.LBRACK, i);
        }
    };
    VariableContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    VariableContext.prototype.RBRACK = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.RBRACK);
        }
        else {
            return this.getToken(pascalParser.RBRACK, i);
        }
    };
    VariableContext.prototype.LBRACK2 = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.LBRACK2);
        }
        else {
            return this.getToken(pascalParser.LBRACK2, i);
        }
    };
    VariableContext.prototype.RBRACK2 = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.RBRACK2);
        }
        else {
            return this.getToken(pascalParser.RBRACK2, i);
        }
    };
    VariableContext.prototype.DOT = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.DOT);
        }
        else {
            return this.getToken(pascalParser.DOT, i);
        }
    };
    VariableContext.prototype.POINTER = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.POINTER);
        }
        else {
            return this.getToken(pascalParser.POINTER, i);
        }
    };
    VariableContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.COMMA);
        }
        else {
            return this.getToken(pascalParser.COMMA, i);
        }
    };
    Object.defineProperty(VariableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_variable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableContext.prototype.enterRule = function (listener) {
        if (listener.enterVariable) {
            listener.enterVariable(this);
        }
    };
    // @Override
    VariableContext.prototype.exitRule = function (listener) {
        if (listener.exitVariable) {
            listener.exitVariable(this);
        }
    };
    // @Override
    VariableContext.prototype.accept = function (visitor) {
        if (visitor.visitVariable) {
            return visitor.visitVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableContext = VariableContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.simpleExpression = function () {
        return this.getRuleContext(0, SimpleExpressionContext);
    };
    ExpressionContext.prototype.relationaloperator = function () {
        return this.tryGetRuleContext(0, RelationaloperatorContext);
    };
    ExpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_expression; },
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
var RelationaloperatorContext = /** @class */ (function (_super) {
    __extends(RelationaloperatorContext, _super);
    function RelationaloperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelationaloperatorContext.prototype.EQUAL = function () { return this.tryGetToken(pascalParser.EQUAL, 0); };
    RelationaloperatorContext.prototype.NOT_EQUAL = function () { return this.tryGetToken(pascalParser.NOT_EQUAL, 0); };
    RelationaloperatorContext.prototype.LT = function () { return this.tryGetToken(pascalParser.LT, 0); };
    RelationaloperatorContext.prototype.LE = function () { return this.tryGetToken(pascalParser.LE, 0); };
    RelationaloperatorContext.prototype.GE = function () { return this.tryGetToken(pascalParser.GE, 0); };
    RelationaloperatorContext.prototype.GT = function () { return this.tryGetToken(pascalParser.GT, 0); };
    RelationaloperatorContext.prototype.IN = function () { return this.tryGetToken(pascalParser.IN, 0); };
    Object.defineProperty(RelationaloperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_relationaloperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RelationaloperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterRelationaloperator) {
            listener.enterRelationaloperator(this);
        }
    };
    // @Override
    RelationaloperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitRelationaloperator) {
            listener.exitRelationaloperator(this);
        }
    };
    // @Override
    RelationaloperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitRelationaloperator) {
            return visitor.visitRelationaloperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RelationaloperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RelationaloperatorContext = RelationaloperatorContext;
var SimpleExpressionContext = /** @class */ (function (_super) {
    __extends(SimpleExpressionContext, _super);
    function SimpleExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleExpressionContext.prototype.term = function () {
        return this.getRuleContext(0, TermContext);
    };
    SimpleExpressionContext.prototype.additiveoperator = function () {
        return this.tryGetRuleContext(0, AdditiveoperatorContext);
    };
    SimpleExpressionContext.prototype.simpleExpression = function () {
        return this.tryGetRuleContext(0, SimpleExpressionContext);
    };
    Object.defineProperty(SimpleExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_simpleExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SimpleExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSimpleExpression) {
            listener.enterSimpleExpression(this);
        }
    };
    // @Override
    SimpleExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSimpleExpression) {
            listener.exitSimpleExpression(this);
        }
    };
    // @Override
    SimpleExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSimpleExpression) {
            return visitor.visitSimpleExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SimpleExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleExpressionContext = SimpleExpressionContext;
var AdditiveoperatorContext = /** @class */ (function (_super) {
    __extends(AdditiveoperatorContext, _super);
    function AdditiveoperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AdditiveoperatorContext.prototype.PLUS = function () { return this.tryGetToken(pascalParser.PLUS, 0); };
    AdditiveoperatorContext.prototype.MINUS = function () { return this.tryGetToken(pascalParser.MINUS, 0); };
    AdditiveoperatorContext.prototype.OR = function () { return this.tryGetToken(pascalParser.OR, 0); };
    Object.defineProperty(AdditiveoperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_additiveoperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AdditiveoperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterAdditiveoperator) {
            listener.enterAdditiveoperator(this);
        }
    };
    // @Override
    AdditiveoperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitAdditiveoperator) {
            listener.exitAdditiveoperator(this);
        }
    };
    // @Override
    AdditiveoperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitAdditiveoperator) {
            return visitor.visitAdditiveoperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdditiveoperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AdditiveoperatorContext = AdditiveoperatorContext;
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermContext.prototype.signedFactor = function () {
        return this.getRuleContext(0, SignedFactorContext);
    };
    TermContext.prototype.multiplicativeoperator = function () {
        return this.tryGetRuleContext(0, MultiplicativeoperatorContext);
    };
    TermContext.prototype.term = function () {
        return this.tryGetRuleContext(0, TermContext);
    };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_term; },
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
var MultiplicativeoperatorContext = /** @class */ (function (_super) {
    __extends(MultiplicativeoperatorContext, _super);
    function MultiplicativeoperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplicativeoperatorContext.prototype.STAR = function () { return this.tryGetToken(pascalParser.STAR, 0); };
    MultiplicativeoperatorContext.prototype.SLASH = function () { return this.tryGetToken(pascalParser.SLASH, 0); };
    MultiplicativeoperatorContext.prototype.DIV = function () { return this.tryGetToken(pascalParser.DIV, 0); };
    MultiplicativeoperatorContext.prototype.MOD = function () { return this.tryGetToken(pascalParser.MOD, 0); };
    MultiplicativeoperatorContext.prototype.AND = function () { return this.tryGetToken(pascalParser.AND, 0); };
    Object.defineProperty(MultiplicativeoperatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_multiplicativeoperator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiplicativeoperatorContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplicativeoperator) {
            listener.enterMultiplicativeoperator(this);
        }
    };
    // @Override
    MultiplicativeoperatorContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplicativeoperator) {
            listener.exitMultiplicativeoperator(this);
        }
    };
    // @Override
    MultiplicativeoperatorContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplicativeoperator) {
            return visitor.visitMultiplicativeoperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplicativeoperatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiplicativeoperatorContext = MultiplicativeoperatorContext;
var SignedFactorContext = /** @class */ (function (_super) {
    __extends(SignedFactorContext, _super);
    function SignedFactorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SignedFactorContext.prototype.factor = function () {
        return this.getRuleContext(0, FactorContext);
    };
    SignedFactorContext.prototype.PLUS = function () { return this.tryGetToken(pascalParser.PLUS, 0); };
    SignedFactorContext.prototype.MINUS = function () { return this.tryGetToken(pascalParser.MINUS, 0); };
    Object.defineProperty(SignedFactorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_signedFactor; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SignedFactorContext.prototype.enterRule = function (listener) {
        if (listener.enterSignedFactor) {
            listener.enterSignedFactor(this);
        }
    };
    // @Override
    SignedFactorContext.prototype.exitRule = function (listener) {
        if (listener.exitSignedFactor) {
            listener.exitSignedFactor(this);
        }
    };
    // @Override
    SignedFactorContext.prototype.accept = function (visitor) {
        if (visitor.visitSignedFactor) {
            return visitor.visitSignedFactor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SignedFactorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SignedFactorContext = SignedFactorContext;
var FactorContext = /** @class */ (function (_super) {
    __extends(FactorContext, _super);
    function FactorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FactorContext.prototype.variable = function () {
        return this.tryGetRuleContext(0, VariableContext);
    };
    FactorContext.prototype.LPAREN = function () { return this.tryGetToken(pascalParser.LPAREN, 0); };
    FactorContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    FactorContext.prototype.RPAREN = function () { return this.tryGetToken(pascalParser.RPAREN, 0); };
    FactorContext.prototype.functionDesignator = function () {
        return this.tryGetRuleContext(0, FunctionDesignatorContext);
    };
    FactorContext.prototype.unsignedConstant = function () {
        return this.tryGetRuleContext(0, UnsignedConstantContext);
    };
    FactorContext.prototype.set = function () {
        return this.tryGetRuleContext(0, SetContext);
    };
    FactorContext.prototype.NOT = function () { return this.tryGetToken(pascalParser.NOT, 0); };
    FactorContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    FactorContext.prototype.bool = function () {
        return this.tryGetRuleContext(0, BoolContext);
    };
    Object.defineProperty(FactorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_factor; },
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
var UnsignedConstantContext = /** @class */ (function (_super) {
    __extends(UnsignedConstantContext, _super);
    function UnsignedConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnsignedConstantContext.prototype.unsignedNumber = function () {
        return this.tryGetRuleContext(0, UnsignedNumberContext);
    };
    UnsignedConstantContext.prototype.constantChr = function () {
        return this.tryGetRuleContext(0, ConstantChrContext);
    };
    UnsignedConstantContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    UnsignedConstantContext.prototype.NIL = function () { return this.tryGetToken(pascalParser.NIL, 0); };
    Object.defineProperty(UnsignedConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_unsignedConstant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnsignedConstantContext.prototype.enterRule = function (listener) {
        if (listener.enterUnsignedConstant) {
            listener.enterUnsignedConstant(this);
        }
    };
    // @Override
    UnsignedConstantContext.prototype.exitRule = function (listener) {
        if (listener.exitUnsignedConstant) {
            listener.exitUnsignedConstant(this);
        }
    };
    // @Override
    UnsignedConstantContext.prototype.accept = function (visitor) {
        if (visitor.visitUnsignedConstant) {
            return visitor.visitUnsignedConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnsignedConstantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnsignedConstantContext = UnsignedConstantContext;
var FunctionDesignatorContext = /** @class */ (function (_super) {
    __extends(FunctionDesignatorContext, _super);
    function FunctionDesignatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionDesignatorContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    FunctionDesignatorContext.prototype.LPAREN = function () { return this.getToken(pascalParser.LPAREN, 0); };
    FunctionDesignatorContext.prototype.parameterList = function () {
        return this.getRuleContext(0, ParameterListContext);
    };
    FunctionDesignatorContext.prototype.RPAREN = function () { return this.getToken(pascalParser.RPAREN, 0); };
    Object.defineProperty(FunctionDesignatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_functionDesignator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionDesignatorContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionDesignator) {
            listener.enterFunctionDesignator(this);
        }
    };
    // @Override
    FunctionDesignatorContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionDesignator) {
            listener.exitFunctionDesignator(this);
        }
    };
    // @Override
    FunctionDesignatorContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionDesignator) {
            return visitor.visitFunctionDesignator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionDesignatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionDesignatorContext = FunctionDesignatorContext;
var ParameterListContext = /** @class */ (function (_super) {
    __extends(ParameterListContext, _super);
    function ParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterListContext.prototype.actualParameter = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ActualParameterContext);
        }
        else {
            return this.getRuleContext(i, ActualParameterContext);
        }
    };
    ParameterListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.COMMA);
        }
        else {
            return this.getToken(pascalParser.COMMA, i);
        }
    };
    Object.defineProperty(ParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_parameterList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterListContext.prototype.enterRule = function (listener) {
        if (listener.enterParameterList) {
            listener.enterParameterList(this);
        }
    };
    // @Override
    ParameterListContext.prototype.exitRule = function (listener) {
        if (listener.exitParameterList) {
            listener.exitParameterList(this);
        }
    };
    // @Override
    ParameterListContext.prototype.accept = function (visitor) {
        if (visitor.visitParameterList) {
            return visitor.visitParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterListContext = ParameterListContext;
var SetContext = /** @class */ (function (_super) {
    __extends(SetContext, _super);
    function SetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetContext.prototype.LBRACK = function () { return this.tryGetToken(pascalParser.LBRACK, 0); };
    SetContext.prototype.elementList = function () {
        return this.getRuleContext(0, ElementListContext);
    };
    SetContext.prototype.RBRACK = function () { return this.tryGetToken(pascalParser.RBRACK, 0); };
    SetContext.prototype.LBRACK2 = function () { return this.tryGetToken(pascalParser.LBRACK2, 0); };
    SetContext.prototype.RBRACK2 = function () { return this.tryGetToken(pascalParser.RBRACK2, 0); };
    Object.defineProperty(SetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_set; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetContext.prototype.enterRule = function (listener) {
        if (listener.enterSet) {
            listener.enterSet(this);
        }
    };
    // @Override
    SetContext.prototype.exitRule = function (listener) {
        if (listener.exitSet) {
            listener.exitSet(this);
        }
    };
    // @Override
    SetContext.prototype.accept = function (visitor) {
        if (visitor.visitSet) {
            return visitor.visitSet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetContext = SetContext;
var ElementListContext = /** @class */ (function (_super) {
    __extends(ElementListContext, _super);
    function ElementListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementListContext.prototype.element = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementContext);
        }
        else {
            return this.getRuleContext(i, ElementContext);
        }
    };
    ElementListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.COMMA);
        }
        else {
            return this.getToken(pascalParser.COMMA, i);
        }
    };
    Object.defineProperty(ElementListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_elementList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElementListContext.prototype.enterRule = function (listener) {
        if (listener.enterElementList) {
            listener.enterElementList(this);
        }
    };
    // @Override
    ElementListContext.prototype.exitRule = function (listener) {
        if (listener.exitElementList) {
            listener.exitElementList(this);
        }
    };
    // @Override
    ElementListContext.prototype.accept = function (visitor) {
        if (visitor.visitElementList) {
            return visitor.visitElementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElementListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElementListContext = ElementListContext;
var ElementContext = /** @class */ (function (_super) {
    __extends(ElementContext, _super);
    function ElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElementContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ElementContext.prototype.DOTDOT = function () { return this.tryGetToken(pascalParser.DOTDOT, 0); };
    Object.defineProperty(ElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_element; },
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
var ProcedureStatementContext = /** @class */ (function (_super) {
    __extends(ProcedureStatementContext, _super);
    function ProcedureStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProcedureStatementContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    ProcedureStatementContext.prototype.LPAREN = function () { return this.tryGetToken(pascalParser.LPAREN, 0); };
    ProcedureStatementContext.prototype.parameterList = function () {
        return this.tryGetRuleContext(0, ParameterListContext);
    };
    ProcedureStatementContext.prototype.RPAREN = function () { return this.tryGetToken(pascalParser.RPAREN, 0); };
    Object.defineProperty(ProcedureStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_procedureStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ProcedureStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureStatement) {
            listener.enterProcedureStatement(this);
        }
    };
    // @Override
    ProcedureStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureStatement) {
            listener.exitProcedureStatement(this);
        }
    };
    // @Override
    ProcedureStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureStatement) {
            return visitor.visitProcedureStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ProcedureStatementContext = ProcedureStatementContext;
var ActualParameterContext = /** @class */ (function (_super) {
    __extends(ActualParameterContext, _super);
    function ActualParameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ActualParameterContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ActualParameterContext.prototype.parameterwidth = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterwidthContext);
        }
        else {
            return this.getRuleContext(i, ParameterwidthContext);
        }
    };
    Object.defineProperty(ActualParameterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_actualParameter; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ActualParameterContext.prototype.enterRule = function (listener) {
        if (listener.enterActualParameter) {
            listener.enterActualParameter(this);
        }
    };
    // @Override
    ActualParameterContext.prototype.exitRule = function (listener) {
        if (listener.exitActualParameter) {
            listener.exitActualParameter(this);
        }
    };
    // @Override
    ActualParameterContext.prototype.accept = function (visitor) {
        if (visitor.visitActualParameter) {
            return visitor.visitActualParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ActualParameterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ActualParameterContext = ActualParameterContext;
var ParameterwidthContext = /** @class */ (function (_super) {
    __extends(ParameterwidthContext, _super);
    function ParameterwidthContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterwidthContext.prototype.COLON = function () { return this.getToken(pascalParser.COLON, 0); };
    ParameterwidthContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ParameterwidthContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_parameterwidth; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParameterwidthContext.prototype.enterRule = function (listener) {
        if (listener.enterParameterwidth) {
            listener.enterParameterwidth(this);
        }
    };
    // @Override
    ParameterwidthContext.prototype.exitRule = function (listener) {
        if (listener.exitParameterwidth) {
            listener.exitParameterwidth(this);
        }
    };
    // @Override
    ParameterwidthContext.prototype.accept = function (visitor) {
        if (visitor.visitParameterwidth) {
            return visitor.visitParameterwidth(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParameterwidthContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParameterwidthContext = ParameterwidthContext;
var GotoStatementContext = /** @class */ (function (_super) {
    __extends(GotoStatementContext, _super);
    function GotoStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GotoStatementContext.prototype.GOTO = function () { return this.getToken(pascalParser.GOTO, 0); };
    GotoStatementContext.prototype.label = function () {
        return this.getRuleContext(0, LabelContext);
    };
    Object.defineProperty(GotoStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_gotoStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GotoStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterGotoStatement) {
            listener.enterGotoStatement(this);
        }
    };
    // @Override
    GotoStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitGotoStatement) {
            listener.exitGotoStatement(this);
        }
    };
    // @Override
    GotoStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitGotoStatement) {
            return visitor.visitGotoStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GotoStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GotoStatementContext = GotoStatementContext;
var EmptyStatementContext = /** @class */ (function (_super) {
    __extends(EmptyStatementContext, _super);
    function EmptyStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(EmptyStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_emptyStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EmptyStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterEmptyStatement) {
            listener.enterEmptyStatement(this);
        }
    };
    // @Override
    EmptyStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitEmptyStatement) {
            listener.exitEmptyStatement(this);
        }
    };
    // @Override
    EmptyStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitEmptyStatement) {
            return visitor.visitEmptyStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EmptyStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EmptyStatementContext = EmptyStatementContext;
var EmptyContext = /** @class */ (function (_super) {
    __extends(EmptyContext, _super);
    function EmptyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(EmptyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_empty; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EmptyContext.prototype.enterRule = function (listener) {
        if (listener.enterEmpty) {
            listener.enterEmpty(this);
        }
    };
    // @Override
    EmptyContext.prototype.exitRule = function (listener) {
        if (listener.exitEmpty) {
            listener.exitEmpty(this);
        }
    };
    // @Override
    EmptyContext.prototype.accept = function (visitor) {
        if (visitor.visitEmpty) {
            return visitor.visitEmpty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EmptyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EmptyContext = EmptyContext;
var StructuredStatementContext = /** @class */ (function (_super) {
    __extends(StructuredStatementContext, _super);
    function StructuredStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StructuredStatementContext.prototype.compoundStatement = function () {
        return this.tryGetRuleContext(0, CompoundStatementContext);
    };
    StructuredStatementContext.prototype.conditionalStatement = function () {
        return this.tryGetRuleContext(0, ConditionalStatementContext);
    };
    StructuredStatementContext.prototype.repetetiveStatement = function () {
        return this.tryGetRuleContext(0, RepetetiveStatementContext);
    };
    StructuredStatementContext.prototype.withStatement = function () {
        return this.tryGetRuleContext(0, WithStatementContext);
    };
    Object.defineProperty(StructuredStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_structuredStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StructuredStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterStructuredStatement) {
            listener.enterStructuredStatement(this);
        }
    };
    // @Override
    StructuredStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitStructuredStatement) {
            listener.exitStructuredStatement(this);
        }
    };
    // @Override
    StructuredStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitStructuredStatement) {
            return visitor.visitStructuredStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StructuredStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StructuredStatementContext = StructuredStatementContext;
var CompoundStatementContext = /** @class */ (function (_super) {
    __extends(CompoundStatementContext, _super);
    function CompoundStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompoundStatementContext.prototype.BEGIN = function () { return this.getToken(pascalParser.BEGIN, 0); };
    CompoundStatementContext.prototype.statements = function () {
        return this.getRuleContext(0, StatementsContext);
    };
    CompoundStatementContext.prototype.END = function () { return this.getToken(pascalParser.END, 0); };
    Object.defineProperty(CompoundStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_compoundStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CompoundStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterCompoundStatement) {
            listener.enterCompoundStatement(this);
        }
    };
    // @Override
    CompoundStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitCompoundStatement) {
            listener.exitCompoundStatement(this);
        }
    };
    // @Override
    CompoundStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitCompoundStatement) {
            return visitor.visitCompoundStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CompoundStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CompoundStatementContext = CompoundStatementContext;
var StatementsContext = /** @class */ (function (_super) {
    __extends(StatementsContext, _super);
    function StatementsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementsContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    StatementsContext.prototype.SEMI = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.SEMI);
        }
        else {
            return this.getToken(pascalParser.SEMI, i);
        }
    };
    Object.defineProperty(StatementsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_statements; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementsContext.prototype.enterRule = function (listener) {
        if (listener.enterStatements) {
            listener.enterStatements(this);
        }
    };
    // @Override
    StatementsContext.prototype.exitRule = function (listener) {
        if (listener.exitStatements) {
            listener.exitStatements(this);
        }
    };
    // @Override
    StatementsContext.prototype.accept = function (visitor) {
        if (visitor.visitStatements) {
            return visitor.visitStatements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementsContext = StatementsContext;
var ConditionalStatementContext = /** @class */ (function (_super) {
    __extends(ConditionalStatementContext, _super);
    function ConditionalStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionalStatementContext.prototype.ifStatement = function () {
        return this.tryGetRuleContext(0, IfStatementContext);
    };
    ConditionalStatementContext.prototype.caseStatement = function () {
        return this.tryGetRuleContext(0, CaseStatementContext);
    };
    Object.defineProperty(ConditionalStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_conditionalStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConditionalStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterConditionalStatement) {
            listener.enterConditionalStatement(this);
        }
    };
    // @Override
    ConditionalStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitConditionalStatement) {
            listener.exitConditionalStatement(this);
        }
    };
    // @Override
    ConditionalStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitConditionalStatement) {
            return visitor.visitConditionalStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConditionalStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConditionalStatementContext = ConditionalStatementContext;
var IfStatementContext = /** @class */ (function (_super) {
    __extends(IfStatementContext, _super);
    function IfStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfStatementContext.prototype.IF = function () { return this.getToken(pascalParser.IF, 0); };
    IfStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    IfStatementContext.prototype.THEN = function () { return this.getToken(pascalParser.THEN, 0); };
    IfStatementContext.prototype.statement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    };
    IfStatementContext.prototype.ELSE = function () { return this.tryGetToken(pascalParser.ELSE, 0); };
    Object.defineProperty(IfStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_ifStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IfStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterIfStatement) {
            listener.enterIfStatement(this);
        }
    };
    // @Override
    IfStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitIfStatement) {
            listener.exitIfStatement(this);
        }
    };
    // @Override
    IfStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IfStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IfStatementContext = IfStatementContext;
var CaseStatementContext = /** @class */ (function (_super) {
    __extends(CaseStatementContext, _super);
    function CaseStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseStatementContext.prototype.CASE = function () { return this.getToken(pascalParser.CASE, 0); };
    CaseStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    CaseStatementContext.prototype.OF = function () { return this.getToken(pascalParser.OF, 0); };
    CaseStatementContext.prototype.caseListElement = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(CaseListElementContext);
        }
        else {
            return this.getRuleContext(i, CaseListElementContext);
        }
    };
    CaseStatementContext.prototype.END = function () { return this.getToken(pascalParser.END, 0); };
    CaseStatementContext.prototype.SEMI = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.SEMI);
        }
        else {
            return this.getToken(pascalParser.SEMI, i);
        }
    };
    CaseStatementContext.prototype.ELSE = function () { return this.tryGetToken(pascalParser.ELSE, 0); };
    CaseStatementContext.prototype.statements = function () {
        return this.tryGetRuleContext(0, StatementsContext);
    };
    Object.defineProperty(CaseStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_caseStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseStatement) {
            listener.enterCaseStatement(this);
        }
    };
    // @Override
    CaseStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseStatement) {
            listener.exitCaseStatement(this);
        }
    };
    // @Override
    CaseStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseStatement) {
            return visitor.visitCaseStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseStatementContext = CaseStatementContext;
var CaseListElementContext = /** @class */ (function (_super) {
    __extends(CaseListElementContext, _super);
    function CaseListElementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaseListElementContext.prototype.constList = function () {
        return this.getRuleContext(0, ConstListContext);
    };
    CaseListElementContext.prototype.COLON = function () { return this.getToken(pascalParser.COLON, 0); };
    CaseListElementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(CaseListElementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_caseListElement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CaseListElementContext.prototype.enterRule = function (listener) {
        if (listener.enterCaseListElement) {
            listener.enterCaseListElement(this);
        }
    };
    // @Override
    CaseListElementContext.prototype.exitRule = function (listener) {
        if (listener.exitCaseListElement) {
            listener.exitCaseListElement(this);
        }
    };
    // @Override
    CaseListElementContext.prototype.accept = function (visitor) {
        if (visitor.visitCaseListElement) {
            return visitor.visitCaseListElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaseListElementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CaseListElementContext = CaseListElementContext;
var RepetetiveStatementContext = /** @class */ (function (_super) {
    __extends(RepetetiveStatementContext, _super);
    function RepetetiveStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RepetetiveStatementContext.prototype.whileStatement = function () {
        return this.tryGetRuleContext(0, WhileStatementContext);
    };
    RepetetiveStatementContext.prototype.repeatStatement = function () {
        return this.tryGetRuleContext(0, RepeatStatementContext);
    };
    RepetetiveStatementContext.prototype.forStatement = function () {
        return this.tryGetRuleContext(0, ForStatementContext);
    };
    Object.defineProperty(RepetetiveStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_repetetiveStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RepetetiveStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterRepetetiveStatement) {
            listener.enterRepetetiveStatement(this);
        }
    };
    // @Override
    RepetetiveStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitRepetetiveStatement) {
            listener.exitRepetetiveStatement(this);
        }
    };
    // @Override
    RepetetiveStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitRepetetiveStatement) {
            return visitor.visitRepetetiveStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RepetetiveStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RepetetiveStatementContext = RepetetiveStatementContext;
var WhileStatementContext = /** @class */ (function (_super) {
    __extends(WhileStatementContext, _super);
    function WhileStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WhileStatementContext.prototype.WHILE = function () { return this.getToken(pascalParser.WHILE, 0); };
    WhileStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    WhileStatementContext.prototype.DO = function () { return this.getToken(pascalParser.DO, 0); };
    WhileStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(WhileStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_whileStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WhileStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this);
        }
    };
    // @Override
    WhileStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this);
        }
    };
    // @Override
    WhileStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WhileStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WhileStatementContext = WhileStatementContext;
var RepeatStatementContext = /** @class */ (function (_super) {
    __extends(RepeatStatementContext, _super);
    function RepeatStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RepeatStatementContext.prototype.REPEAT = function () { return this.getToken(pascalParser.REPEAT, 0); };
    RepeatStatementContext.prototype.statements = function () {
        return this.getRuleContext(0, StatementsContext);
    };
    RepeatStatementContext.prototype.UNTIL = function () { return this.getToken(pascalParser.UNTIL, 0); };
    RepeatStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(RepeatStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_repeatStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RepeatStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterRepeatStatement) {
            listener.enterRepeatStatement(this);
        }
    };
    // @Override
    RepeatStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitRepeatStatement) {
            listener.exitRepeatStatement(this);
        }
    };
    // @Override
    RepeatStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitRepeatStatement) {
            return visitor.visitRepeatStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RepeatStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RepeatStatementContext = RepeatStatementContext;
var ForStatementContext = /** @class */ (function (_super) {
    __extends(ForStatementContext, _super);
    function ForStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForStatementContext.prototype.FOR = function () { return this.getToken(pascalParser.FOR, 0); };
    ForStatementContext.prototype.identifier = function () {
        return this.getRuleContext(0, IdentifierContext);
    };
    ForStatementContext.prototype.ASSIGN = function () { return this.getToken(pascalParser.ASSIGN, 0); };
    ForStatementContext.prototype.forList = function () {
        return this.getRuleContext(0, ForListContext);
    };
    ForStatementContext.prototype.DO = function () { return this.getToken(pascalParser.DO, 0); };
    ForStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(ForStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_forStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterForStatement) {
            listener.enterForStatement(this);
        }
    };
    // @Override
    ForStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitForStatement) {
            listener.exitForStatement(this);
        }
    };
    // @Override
    ForStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitForStatement) {
            return visitor.visitForStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForStatementContext = ForStatementContext;
var ForListContext = /** @class */ (function (_super) {
    __extends(ForListContext, _super);
    function ForListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForListContext.prototype.initialValue = function () {
        return this.getRuleContext(0, InitialValueContext);
    };
    ForListContext.prototype.finalValue = function () {
        return this.getRuleContext(0, FinalValueContext);
    };
    ForListContext.prototype.TO = function () { return this.tryGetToken(pascalParser.TO, 0); };
    ForListContext.prototype.DOWNTO = function () { return this.tryGetToken(pascalParser.DOWNTO, 0); };
    Object.defineProperty(ForListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_forList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ForListContext.prototype.enterRule = function (listener) {
        if (listener.enterForList) {
            listener.enterForList(this);
        }
    };
    // @Override
    ForListContext.prototype.exitRule = function (listener) {
        if (listener.exitForList) {
            listener.exitForList(this);
        }
    };
    // @Override
    ForListContext.prototype.accept = function (visitor) {
        if (visitor.visitForList) {
            return visitor.visitForList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ForListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ForListContext = ForListContext;
var InitialValueContext = /** @class */ (function (_super) {
    __extends(InitialValueContext, _super);
    function InitialValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitialValueContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(InitialValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_initialValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InitialValueContext.prototype.enterRule = function (listener) {
        if (listener.enterInitialValue) {
            listener.enterInitialValue(this);
        }
    };
    // @Override
    InitialValueContext.prototype.exitRule = function (listener) {
        if (listener.exitInitialValue) {
            listener.exitInitialValue(this);
        }
    };
    // @Override
    InitialValueContext.prototype.accept = function (visitor) {
        if (visitor.visitInitialValue) {
            return visitor.visitInitialValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InitialValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InitialValueContext = InitialValueContext;
var FinalValueContext = /** @class */ (function (_super) {
    __extends(FinalValueContext, _super);
    function FinalValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FinalValueContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(FinalValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_finalValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FinalValueContext.prototype.enterRule = function (listener) {
        if (listener.enterFinalValue) {
            listener.enterFinalValue(this);
        }
    };
    // @Override
    FinalValueContext.prototype.exitRule = function (listener) {
        if (listener.exitFinalValue) {
            listener.exitFinalValue(this);
        }
    };
    // @Override
    FinalValueContext.prototype.accept = function (visitor) {
        if (visitor.visitFinalValue) {
            return visitor.visitFinalValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FinalValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FinalValueContext = FinalValueContext;
var WithStatementContext = /** @class */ (function (_super) {
    __extends(WithStatementContext, _super);
    function WithStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WithStatementContext.prototype.WITH = function () { return this.getToken(pascalParser.WITH, 0); };
    WithStatementContext.prototype.recordVariableList = function () {
        return this.getRuleContext(0, RecordVariableListContext);
    };
    WithStatementContext.prototype.DO = function () { return this.getToken(pascalParser.DO, 0); };
    WithStatementContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    Object.defineProperty(WithStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_withStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WithStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterWithStatement) {
            listener.enterWithStatement(this);
        }
    };
    // @Override
    WithStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitWithStatement) {
            listener.exitWithStatement(this);
        }
    };
    // @Override
    WithStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitWithStatement) {
            return visitor.visitWithStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WithStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WithStatementContext = WithStatementContext;
var RecordVariableListContext = /** @class */ (function (_super) {
    __extends(RecordVariableListContext, _super);
    function RecordVariableListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RecordVariableListContext.prototype.variable = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableContext);
        }
        else {
            return this.getRuleContext(i, VariableContext);
        }
    };
    RecordVariableListContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(pascalParser.COMMA);
        }
        else {
            return this.getToken(pascalParser.COMMA, i);
        }
    };
    Object.defineProperty(RecordVariableListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pascalParser.RULE_recordVariableList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RecordVariableListContext.prototype.enterRule = function (listener) {
        if (listener.enterRecordVariableList) {
            listener.enterRecordVariableList(this);
        }
    };
    // @Override
    RecordVariableListContext.prototype.exitRule = function (listener) {
        if (listener.exitRecordVariableList) {
            listener.exitRecordVariableList(this);
        }
    };
    // @Override
    RecordVariableListContext.prototype.accept = function (visitor) {
        if (visitor.visitRecordVariableList) {
            return visitor.visitRecordVariableList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RecordVariableListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RecordVariableListContext = RecordVariableListContext;
