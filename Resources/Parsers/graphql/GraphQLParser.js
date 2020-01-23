"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/graphql/GraphQL.g4 by ANTLR 4.7.3-SNAPSHOT
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
var FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var GraphQLParser = /** @class */ (function (_super) {
    __extends(GraphQLParser, _super);
    function GraphQLParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(GraphQLParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(GraphQLParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return GraphQLParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphQLParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "GraphQL.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphQLParser.prototype, "ruleNames", {
        // @Override
        get: function () { return GraphQLParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphQLParser.prototype, "serializedATN", {
        // @Override
        get: function () { return GraphQLParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    GraphQLParser.prototype.document = function () {
        var _localctx = new DocumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, GraphQLParser.RULE_document);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 127;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 124;
                                this.description();
                            }
                        }
                    }
                    this.state = 129;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                }
                this.state = 131;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 130;
                            this.definition();
                        }
                    }
                    this.state = 133;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GraphQLParser.T__0) | (1 << GraphQLParser.T__1) | (1 << GraphQLParser.T__5) | (1 << GraphQLParser.T__6) | (1 << GraphQLParser.T__11) | (1 << GraphQLParser.T__12) | (1 << GraphQLParser.T__15) | (1 << GraphQLParser.T__16) | (1 << GraphQLParser.T__17) | (1 << GraphQLParser.T__18))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (GraphQLParser.T__39 - 40)) | (1 << (GraphQLParser.T__40 - 40)) | (1 << (GraphQLParser.T__41 - 40)) | (1 << (GraphQLParser.T__43 - 40)) | (1 << (GraphQLParser.String_ - 40)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.definition = function () {
        var _localctx = new DefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, GraphQLParser.RULE_definition);
        try {
            this.state = 138;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case GraphQLParser.T__1:
                case GraphQLParser.T__39:
                case GraphQLParser.T__40:
                case GraphQLParser.T__41:
                case GraphQLParser.T__43:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 135;
                        this.execDefinition();
                    }
                    break;
                case GraphQLParser.T__0:
                case GraphQLParser.T__5:
                case GraphQLParser.T__6:
                case GraphQLParser.T__11:
                case GraphQLParser.T__12:
                case GraphQLParser.T__16:
                case GraphQLParser.T__17:
                case GraphQLParser.T__18:
                case GraphQLParser.String_:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 136;
                        this.typeSystemDefinition();
                    }
                    break;
                case GraphQLParser.T__15:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 137;
                        this.typeSystemExtension();
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
    GraphQLParser.prototype.typeSystemDefinition = function () {
        var _localctx = new TypeSystemDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, GraphQLParser.RULE_typeSystemDefinition);
        try {
            this.state = 143;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 140;
                        this.schemaDefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 141;
                        this.typeDefinition();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 142;
                        this.directiveDefinition();
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
    GraphQLParser.prototype.schemaDefinition = function () {
        var _localctx = new SchemaDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, GraphQLParser.RULE_schemaDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 145;
                this.match(GraphQLParser.T__0);
                this.state = 147;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__19) {
                    {
                        this.state = 146;
                        this.directives();
                    }
                }
                this.state = 149;
                this.rootOperationTypeDefinitionList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.rootOperationTypeDefinitionList = function () {
        var _localctx = new RootOperationTypeDefinitionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, GraphQLParser.RULE_rootOperationTypeDefinitionList);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 151;
                this.match(GraphQLParser.T__1);
                this.state = 152;
                this.rootOperationTypeDefinition();
                this.state = 159;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === GraphQLParser.T__2 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (GraphQLParser.T__39 - 40)) | (1 << (GraphQLParser.T__40 - 40)) | (1 << (GraphQLParser.T__41 - 40)))) !== 0)) {
                    {
                        {
                            this.state = 154;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === GraphQLParser.T__2) {
                                {
                                    this.state = 153;
                                    this.match(GraphQLParser.T__2);
                                }
                            }
                            this.state = 156;
                            this.rootOperationTypeDefinition();
                        }
                    }
                    this.state = 161;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 162;
                this.match(GraphQLParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.rootOperationTypeDefinition = function () {
        var _localctx = new RootOperationTypeDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, GraphQLParser.RULE_rootOperationTypeDefinition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 164;
                this.operationType();
                this.state = 165;
                this.match(GraphQLParser.T__4);
                this.state = 166;
                this.namedType();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.namedType = function () {
        var _localctx = new NamedTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, GraphQLParser.RULE_namedType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 168;
                this.match(GraphQLParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.typeDefinition = function () {
        var _localctx = new TypeDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, GraphQLParser.RULE_typeDefinition);
        try {
            this.state = 176;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 170;
                        this.scalarTypeDefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 171;
                        this.objectTypeDefinition();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 172;
                        this.interfaceTypeDefinition();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 173;
                        this.unionTypeDefinition();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 174;
                        this.enumTypeDefinition();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 175;
                        this.inputObjectTypeDefinition();
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
    GraphQLParser.prototype.scalarTypeDefinition = function () {
        var _localctx = new ScalarTypeDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, GraphQLParser.RULE_scalarTypeDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 179;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.String_) {
                    {
                        this.state = 178;
                        this.description();
                    }
                }
                this.state = 181;
                this.match(GraphQLParser.T__5);
                this.state = 182;
                this.match(GraphQLParser.NAME);
                this.state = 183;
                this.directives();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.description = function () {
        var _localctx = new DescriptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, GraphQLParser.RULE_description);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 185;
                this.match(GraphQLParser.String_);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.objectTypeDefinition = function () {
        var _localctx = new ObjectTypeDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, GraphQLParser.RULE_objectTypeDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 188;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.String_) {
                    {
                        this.state = 187;
                        this.description();
                    }
                }
                this.state = 190;
                this.match(GraphQLParser.T__6);
                this.state = 191;
                this.match(GraphQLParser.NAME);
                this.state = 193;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__7) {
                    {
                        this.state = 192;
                        this.implementsInterfaces(0);
                    }
                }
                this.state = 196;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__19) {
                    {
                        this.state = 195;
                        this.directives();
                    }
                }
                this.state = 199;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                    case 1:
                        {
                            this.state = 198;
                            this.fieldsDefinitions();
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
    GraphQLParser.prototype.implementsInterfaces = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ImplementsInterfacesContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 22;
        this.enterRecursionRule(_localctx, 22, GraphQLParser.RULE_implementsInterfaces, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 202;
                    this.match(GraphQLParser.T__7);
                    this.state = 204;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === GraphQLParser.T__8) {
                        {
                            this.state = 203;
                            this.match(GraphQLParser.T__8);
                        }
                    }
                    this.state = 206;
                    this.type_();
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 213;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ImplementsInterfacesContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, GraphQLParser.RULE_implementsInterfaces);
                                this.state = 208;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 209;
                                this.match(GraphQLParser.T__8);
                                this.state = 210;
                                this.type_();
                            }
                        }
                    }
                    this.state = 215;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.fieldsDefinitions = function () {
        var _localctx = new FieldsDefinitionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, GraphQLParser.RULE_fieldsDefinitions);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 216;
                this.match(GraphQLParser.T__1);
                this.state = 218;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 217;
                            this.fieldsDefinition();
                        }
                    }
                    this.state = 220;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === GraphQLParser.NAME || _la === GraphQLParser.String_);
                this.state = 222;
                this.match(GraphQLParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.fieldsDefinition = function () {
        var _localctx = new FieldsDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, GraphQLParser.RULE_fieldsDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 225;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.String_) {
                    {
                        this.state = 224;
                        this.description();
                    }
                }
                this.state = 227;
                this.match(GraphQLParser.NAME);
                this.state = 229;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__9) {
                    {
                        this.state = 228;
                        this.argumentsDefinition();
                    }
                }
                this.state = 231;
                this.match(GraphQLParser.T__4);
                this.state = 232;
                this.type_();
                this.state = 234;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__19) {
                    {
                        this.state = 233;
                        this.directives();
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
    GraphQLParser.prototype.argumentsDefinition = function () {
        var _localctx = new ArgumentsDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, GraphQLParser.RULE_argumentsDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 236;
                this.match(GraphQLParser.T__9);
                this.state = 237;
                this.inputValueDefinition();
                this.state = 242;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === GraphQLParser.T__2) {
                    {
                        {
                            this.state = 238;
                            this.match(GraphQLParser.T__2);
                            this.state = 239;
                            this.inputValueDefinition();
                        }
                    }
                    this.state = 244;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 245;
                this.match(GraphQLParser.T__10);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.inputValueDefinition = function () {
        var _localctx = new InputValueDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, GraphQLParser.RULE_inputValueDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 248;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.String_) {
                    {
                        this.state = 247;
                        this.description();
                    }
                }
                this.state = 250;
                this.match(GraphQLParser.NAME);
                this.state = 251;
                this.match(GraphQLParser.T__4);
                this.state = 252;
                this.type_();
                this.state = 254;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__13) {
                    {
                        this.state = 253;
                        this.defaultValue();
                    }
                }
                this.state = 257;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__19) {
                    {
                        this.state = 256;
                        this.directives();
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
    GraphQLParser.prototype.interfaceTypeDefinition = function () {
        var _localctx = new InterfaceTypeDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, GraphQLParser.RULE_interfaceTypeDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 260;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.String_) {
                    {
                        this.state = 259;
                        this.description();
                    }
                }
                this.state = 262;
                this.match(GraphQLParser.T__11);
                this.state = 263;
                this.match(GraphQLParser.NAME);
                this.state = 265;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__19) {
                    {
                        this.state = 264;
                        this.directives();
                    }
                }
                this.state = 268;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                    case 1:
                        {
                            this.state = 267;
                            this.fieldsDefinitions();
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
    GraphQLParser.prototype.unionTypeDefinition = function () {
        var _localctx = new UnionTypeDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, GraphQLParser.RULE_unionTypeDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 271;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.String_) {
                    {
                        this.state = 270;
                        this.description();
                    }
                }
                this.state = 273;
                this.match(GraphQLParser.T__12);
                this.state = 274;
                this.match(GraphQLParser.NAME);
                this.state = 276;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__19) {
                    {
                        this.state = 275;
                        this.directives();
                    }
                }
                this.state = 279;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__13) {
                    {
                        this.state = 278;
                        this.unionMemberTypes();
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
    GraphQLParser.prototype.unionMemberTypes = function () {
        var _localctx = new UnionMemberTypesContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, GraphQLParser.RULE_unionMemberTypes);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 281;
                this.match(GraphQLParser.T__13);
                this.state = 282;
                this.type_();
                this.state = 287;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === GraphQLParser.T__14) {
                    {
                        {
                            this.state = 283;
                            this.match(GraphQLParser.T__14);
                            this.state = 284;
                            this.type_();
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
    GraphQLParser.prototype.unionTypeExtension = function () {
        var _localctx = new UnionTypeExtensionContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, GraphQLParser.RULE_unionTypeExtension);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 290;
                this.match(GraphQLParser.T__15);
                this.state = 291;
                this.unionTypeDefinition();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.enumTypeDefinition = function () {
        var _localctx = new EnumTypeDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, GraphQLParser.RULE_enumTypeDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 294;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.String_) {
                    {
                        this.state = 293;
                        this.description();
                    }
                }
                this.state = 296;
                this.match(GraphQLParser.T__16);
                this.state = 297;
                this.match(GraphQLParser.NAME);
                this.state = 299;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__19) {
                    {
                        this.state = 298;
                        this.directives();
                    }
                }
                this.state = 302;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                    case 1:
                        {
                            this.state = 301;
                            this.enumValuesDefinitions();
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
    GraphQLParser.prototype.enumValuesDefinitions = function () {
        var _localctx = new EnumValuesDefinitionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, GraphQLParser.RULE_enumValuesDefinitions);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 304;
                this.match(GraphQLParser.T__1);
                this.state = 312;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 306;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === GraphQLParser.String_) {
                                {
                                    this.state = 305;
                                    this.description();
                                }
                            }
                            this.state = 308;
                            this.enumValue();
                            this.state = 310;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === GraphQLParser.T__19) {
                                {
                                    this.state = 309;
                                    this.directives();
                                }
                            }
                        }
                    }
                    this.state = 314;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === GraphQLParser.NAME || _la === GraphQLParser.String_);
                this.state = 316;
                this.match(GraphQLParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.enumValue = function () {
        var _localctx = new EnumValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, GraphQLParser.RULE_enumValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 318;
                this.match(GraphQLParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.enumTypeExtension = function () {
        var _localctx = new EnumTypeExtensionContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, GraphQLParser.RULE_enumTypeExtension);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 320;
                this.match(GraphQLParser.T__15);
                this.state = 321;
                this.enumTypeDefinition();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.inputObjectTypeDefinition = function () {
        var _localctx = new InputObjectTypeDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, GraphQLParser.RULE_inputObjectTypeDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 324;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.String_) {
                    {
                        this.state = 323;
                        this.description();
                    }
                }
                this.state = 326;
                this.match(GraphQLParser.T__17);
                this.state = 327;
                this.match(GraphQLParser.NAME);
                this.state = 329;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__19) {
                    {
                        this.state = 328;
                        this.directives();
                    }
                }
                this.state = 332;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                    case 1:
                        {
                            this.state = 331;
                            this.inputFieldsDefinition();
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
    GraphQLParser.prototype.inputFieldsDefinition = function () {
        var _localctx = new InputFieldsDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, GraphQLParser.RULE_inputFieldsDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 334;
                this.match(GraphQLParser.T__1);
                this.state = 336;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 335;
                            this.inputValueDefinition();
                        }
                    }
                    this.state = 338;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === GraphQLParser.NAME || _la === GraphQLParser.String_);
                this.state = 340;
                this.match(GraphQLParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.directiveDefinition = function () {
        var _localctx = new DirectiveDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, GraphQLParser.RULE_directiveDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 343;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.String_) {
                    {
                        this.state = 342;
                        this.description();
                    }
                }
                this.state = 345;
                this.match(GraphQLParser.T__18);
                this.state = 346;
                this.match(GraphQLParser.T__19);
                this.state = 347;
                this.match(GraphQLParser.NAME);
                this.state = 349;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__9) {
                    {
                        this.state = 348;
                        this.argumentsDefinition();
                    }
                }
                this.state = 351;
                this.match(GraphQLParser.T__20);
                this.state = 352;
                this.directiveLocations();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.directiveLocations = function () {
        var _localctx = new DirectiveLocationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, GraphQLParser.RULE_directiveLocations);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 354;
                this.directiveLocation();
                this.state = 359;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 355;
                                this.match(GraphQLParser.T__14);
                                this.state = 356;
                                this.directiveLocations();
                            }
                        }
                    }
                    this.state = 361;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
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
    GraphQLParser.prototype.directiveLocation = function () {
        var _localctx = new DirectiveLocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, GraphQLParser.RULE_directiveLocation);
        try {
            this.state = 364;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case GraphQLParser.T__21:
                case GraphQLParser.T__22:
                case GraphQLParser.T__23:
                case GraphQLParser.T__24:
                case GraphQLParser.T__25:
                case GraphQLParser.T__26:
                case GraphQLParser.T__27:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 362;
                        this.executableDirectiveLocation();
                    }
                    break;
                case GraphQLParser.T__28:
                case GraphQLParser.T__29:
                case GraphQLParser.T__30:
                case GraphQLParser.T__31:
                case GraphQLParser.T__32:
                case GraphQLParser.T__33:
                case GraphQLParser.T__34:
                case GraphQLParser.T__35:
                case GraphQLParser.T__36:
                case GraphQLParser.T__37:
                case GraphQLParser.T__38:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 363;
                        this.typeSystemDirectiveLocation();
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
    GraphQLParser.prototype.executableDirectiveLocation = function () {
        var _localctx = new ExecutableDirectiveLocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, GraphQLParser.RULE_executableDirectiveLocation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 366;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GraphQLParser.T__21) | (1 << GraphQLParser.T__22) | (1 << GraphQLParser.T__23) | (1 << GraphQLParser.T__24) | (1 << GraphQLParser.T__25) | (1 << GraphQLParser.T__26) | (1 << GraphQLParser.T__27))) !== 0))) {
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
    GraphQLParser.prototype.typeSystemDirectiveLocation = function () {
        var _localctx = new TypeSystemDirectiveLocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, GraphQLParser.RULE_typeSystemDirectiveLocation);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 368;
                _la = this._input.LA(1);
                if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (GraphQLParser.T__28 - 29)) | (1 << (GraphQLParser.T__29 - 29)) | (1 << (GraphQLParser.T__30 - 29)) | (1 << (GraphQLParser.T__31 - 29)) | (1 << (GraphQLParser.T__32 - 29)) | (1 << (GraphQLParser.T__33 - 29)) | (1 << (GraphQLParser.T__34 - 29)) | (1 << (GraphQLParser.T__35 - 29)) | (1 << (GraphQLParser.T__36 - 29)) | (1 << (GraphQLParser.T__37 - 29)) | (1 << (GraphQLParser.T__38 - 29)))) !== 0))) {
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
    GraphQLParser.prototype.typeSystemExtension = function () {
        var _localctx = new TypeSystemExtensionContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, GraphQLParser.RULE_typeSystemExtension);
        try {
            this.state = 372;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 370;
                        this.schemaExtension();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 371;
                        this.typeExtension();
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
    GraphQLParser.prototype.schemaExtension = function () {
        var _localctx = new SchemaExtensionContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, GraphQLParser.RULE_schemaExtension);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 374;
                this.match(GraphQLParser.T__15);
                this.state = 375;
                this.schemaDefinition();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.typeExtension = function () {
        var _localctx = new TypeExtensionContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, GraphQLParser.RULE_typeExtension);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 377;
                this.match(GraphQLParser.T__15);
                this.state = 378;
                this.typeDefinition();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.execDefinition = function () {
        var _localctx = new ExecDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, GraphQLParser.RULE_execDefinition);
        try {
            this.state = 382;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case GraphQLParser.T__1:
                case GraphQLParser.T__39:
                case GraphQLParser.T__40:
                case GraphQLParser.T__41:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 380;
                        this.operationDefinition();
                    }
                    break;
                case GraphQLParser.T__43:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 381;
                        this.fragmentDefinition();
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
    GraphQLParser.prototype.operationDefinition = function () {
        var _localctx = new OperationDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, GraphQLParser.RULE_operationDefinition);
        var _la;
        try {
            this.state = 395;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case GraphQLParser.T__1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 384;
                        this.selectionSet();
                    }
                    break;
                case GraphQLParser.T__39:
                case GraphQLParser.T__40:
                case GraphQLParser.T__41:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 385;
                        this.operationType();
                        this.state = 386;
                        this.match(GraphQLParser.NAME);
                        this.state = 388;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === GraphQLParser.T__9) {
                            {
                                this.state = 387;
                                this.variableDefinitions();
                            }
                        }
                        this.state = 391;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === GraphQLParser.T__19) {
                            {
                                this.state = 390;
                                this.directives();
                            }
                        }
                        this.state = 393;
                        this.selectionSet();
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
    GraphQLParser.prototype.selectionSet = function () {
        var _localctx = new SelectionSetContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, GraphQLParser.RULE_selectionSet);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 397;
                this.match(GraphQLParser.T__1);
                this.state = 398;
                this.selection();
                this.state = 405;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === GraphQLParser.T__2 || _la === GraphQLParser.T__42 || _la === GraphQLParser.NAME) {
                    {
                        {
                            this.state = 400;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === GraphQLParser.T__2) {
                                {
                                    this.state = 399;
                                    this.match(GraphQLParser.T__2);
                                }
                            }
                            this.state = 402;
                            this.selection();
                        }
                    }
                    this.state = 407;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 408;
                this.match(GraphQLParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.operationType = function () {
        var _localctx = new OperationTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, GraphQLParser.RULE_operationType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 410;
                _la = this._input.LA(1);
                if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (GraphQLParser.T__39 - 40)) | (1 << (GraphQLParser.T__40 - 40)) | (1 << (GraphQLParser.T__41 - 40)))) !== 0))) {
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
    GraphQLParser.prototype.selection = function () {
        var _localctx = new SelectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, GraphQLParser.RULE_selection);
        try {
            this.state = 415;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 412;
                        this.field();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 413;
                        this.fragmentSpread();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 414;
                        this.inlineFragment();
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
    GraphQLParser.prototype.field = function () {
        var _localctx = new FieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, GraphQLParser.RULE_field);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 417;
                this.fieldName();
                this.state = 419;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__9) {
                    {
                        this.state = 418;
                        this.arguments();
                    }
                }
                this.state = 422;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__19) {
                    {
                        this.state = 421;
                        this.directives();
                    }
                }
                this.state = 425;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__1) {
                    {
                        this.state = 424;
                        this.selectionSet();
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
    GraphQLParser.prototype.fieldName = function () {
        var _localctx = new FieldNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, GraphQLParser.RULE_fieldName);
        try {
            this.state = 429;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 427;
                        this.alias();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 428;
                        this.match(GraphQLParser.NAME);
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
    GraphQLParser.prototype.alias = function () {
        var _localctx = new AliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, GraphQLParser.RULE_alias);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 431;
                this.match(GraphQLParser.NAME);
                this.state = 432;
                this.match(GraphQLParser.T__4);
                this.state = 433;
                this.match(GraphQLParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.arguments = function () {
        var _localctx = new ArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, GraphQLParser.RULE_arguments);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 435;
                this.match(GraphQLParser.T__9);
                this.state = 436;
                this.argument();
                this.state = 441;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === GraphQLParser.T__2) {
                    {
                        {
                            this.state = 437;
                            this.match(GraphQLParser.T__2);
                            this.state = 438;
                            this.argument();
                        }
                    }
                    this.state = 443;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 444;
                this.match(GraphQLParser.T__10);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.argument = function () {
        var _localctx = new ArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, GraphQLParser.RULE_argument);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 446;
                this.match(GraphQLParser.NAME);
                this.state = 447;
                this.match(GraphQLParser.T__4);
                this.state = 448;
                this.valueOrVariable();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.fragmentSpread = function () {
        var _localctx = new FragmentSpreadContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, GraphQLParser.RULE_fragmentSpread);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 450;
                this.match(GraphQLParser.T__42);
                this.state = 451;
                this.fragmentName();
                this.state = 453;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__19) {
                    {
                        this.state = 452;
                        this.directives();
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
    GraphQLParser.prototype.inlineFragment = function () {
        var _localctx = new InlineFragmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, GraphQLParser.RULE_inlineFragment);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 455;
                this.match(GraphQLParser.T__42);
                this.state = 456;
                this.match(GraphQLParser.T__20);
                this.state = 457;
                this.typeCondition();
                this.state = 459;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__19) {
                    {
                        this.state = 458;
                        this.directives();
                    }
                }
                this.state = 461;
                this.selectionSet();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.fragmentDefinition = function () {
        var _localctx = new FragmentDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, GraphQLParser.RULE_fragmentDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 463;
                this.match(GraphQLParser.T__43);
                this.state = 464;
                this.fragmentName();
                this.state = 465;
                this.match(GraphQLParser.T__20);
                this.state = 466;
                this.typeCondition();
                this.state = 468;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__19) {
                    {
                        this.state = 467;
                        this.directives();
                    }
                }
                this.state = 470;
                this.selectionSet();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.fragmentName = function () {
        var _localctx = new FragmentNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, GraphQLParser.RULE_fragmentName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 472;
                this.match(GraphQLParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.directives = function () {
        var _localctx = new DirectivesContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, GraphQLParser.RULE_directives);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 475;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 474;
                            this.directive();
                        }
                    }
                    this.state = 477;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === GraphQLParser.T__19);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.directive = function () {
        var _localctx = new DirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, GraphQLParser.RULE_directive);
        try {
            this.state = 491;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 479;
                        this.match(GraphQLParser.T__19);
                        this.state = 480;
                        this.match(GraphQLParser.NAME);
                        this.state = 481;
                        this.match(GraphQLParser.T__4);
                        this.state = 482;
                        this.valueOrVariable();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 483;
                        this.match(GraphQLParser.T__19);
                        this.state = 484;
                        this.match(GraphQLParser.NAME);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 485;
                        this.match(GraphQLParser.T__19);
                        this.state = 486;
                        this.match(GraphQLParser.NAME);
                        this.state = 487;
                        this.match(GraphQLParser.T__9);
                        this.state = 488;
                        this.argument();
                        this.state = 489;
                        this.match(GraphQLParser.T__10);
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
    GraphQLParser.prototype.typeCondition = function () {
        var _localctx = new TypeConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, GraphQLParser.RULE_typeCondition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 493;
                this.typeName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.variableDefinitions = function () {
        var _localctx = new VariableDefinitionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, GraphQLParser.RULE_variableDefinitions);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 495;
                this.match(GraphQLParser.T__9);
                this.state = 496;
                this.variableDefinition();
                this.state = 501;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === GraphQLParser.T__2) {
                    {
                        {
                            this.state = 497;
                            this.match(GraphQLParser.T__2);
                            this.state = 498;
                            this.variableDefinition();
                        }
                    }
                    this.state = 503;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 504;
                this.match(GraphQLParser.T__10);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.variableDefinition = function () {
        var _localctx = new VariableDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, GraphQLParser.RULE_variableDefinition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 506;
                this.variable();
                this.state = 507;
                this.match(GraphQLParser.T__4);
                this.state = 508;
                this.type_();
                this.state = 510;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === GraphQLParser.T__13) {
                    {
                        this.state = 509;
                        this.defaultValue();
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
    GraphQLParser.prototype.variable = function () {
        var _localctx = new VariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, GraphQLParser.RULE_variable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 512;
                this.match(GraphQLParser.T__44);
                this.state = 513;
                this.match(GraphQLParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.defaultValue = function () {
        var _localctx = new DefaultValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, GraphQLParser.RULE_defaultValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 515;
                this.match(GraphQLParser.T__13);
                this.state = 516;
                this.value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.valueOrVariable = function () {
        var _localctx = new ValueOrVariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, GraphQLParser.RULE_valueOrVariable);
        try {
            this.state = 520;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case GraphQLParser.T__45:
                case GraphQLParser.T__46:
                case GraphQLParser.BooleanLiteral:
                case GraphQLParser.String_:
                case GraphQLParser.ID:
                case GraphQLParser.NUMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 518;
                        this.value();
                    }
                    break;
                case GraphQLParser.T__44:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 519;
                        this.variable();
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
    GraphQLParser.prototype.value = function () {
        var _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, GraphQLParser.RULE_value);
        try {
            this.state = 528;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case GraphQLParser.String_:
                    _localctx = new StringValueContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 522;
                        this.match(GraphQLParser.String_);
                    }
                    break;
                case GraphQLParser.NUMBER:
                    _localctx = new NumberValueContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 523;
                        this.match(GraphQLParser.NUMBER);
                    }
                    break;
                case GraphQLParser.BooleanLiteral:
                    _localctx = new BooleanValueContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 524;
                        this.match(GraphQLParser.BooleanLiteral);
                    }
                    break;
                case GraphQLParser.T__46:
                    _localctx = new ArrayValueContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 525;
                        this.array();
                    }
                    break;
                case GraphQLParser.ID:
                    _localctx = new IdValueContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 526;
                        this.match(GraphQLParser.ID);
                    }
                    break;
                case GraphQLParser.T__45:
                    _localctx = new NullValueContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 527;
                        this.match(GraphQLParser.T__45);
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
    GraphQLParser.prototype.type_ = function () {
        var _localctx = new Type_Context(this._ctx, this.state);
        this.enterRule(_localctx, 114, GraphQLParser.RULE_type_);
        try {
            this.state = 538;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case GraphQLParser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 530;
                        this.typeName();
                        this.state = 532;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 66, this._ctx)) {
                            case 1:
                                {
                                    this.state = 531;
                                    this.nonNullType();
                                }
                                break;
                        }
                    }
                    break;
                case GraphQLParser.T__46:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 534;
                        this.listType();
                        this.state = 536;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 67, this._ctx)) {
                            case 1:
                                {
                                    this.state = 535;
                                    this.nonNullType();
                                }
                                break;
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
    GraphQLParser.prototype.typeName = function () {
        var _localctx = new TypeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, GraphQLParser.RULE_typeName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 540;
                this.match(GraphQLParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.listType = function () {
        var _localctx = new ListTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, GraphQLParser.RULE_listType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 542;
                this.match(GraphQLParser.T__46);
                this.state = 543;
                this.type_();
                this.state = 544;
                this.match(GraphQLParser.T__47);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.nonNullType = function () {
        var _localctx = new NonNullTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, GraphQLParser.RULE_nonNullType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 546;
                this.match(GraphQLParser.T__48);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    GraphQLParser.prototype.array = function () {
        var _localctx = new ArrayContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, GraphQLParser.RULE_array);
        var _la;
        try {
            this.state = 561;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 548;
                        this.match(GraphQLParser.T__46);
                        this.state = 549;
                        this.value();
                        this.state = 554;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === GraphQLParser.T__2) {
                            {
                                {
                                    this.state = 550;
                                    this.match(GraphQLParser.T__2);
                                    this.state = 551;
                                    this.value();
                                }
                            }
                            this.state = 556;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 557;
                        this.match(GraphQLParser.T__47);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 559;
                        this.match(GraphQLParser.T__46);
                        this.state = 560;
                        this.match(GraphQLParser.T__47);
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
    GraphQLParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 11:
                return this.implementsInterfaces_sempred(_localctx, predIndex);
        }
        return true;
    };
    GraphQLParser.prototype.implementsInterfaces_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    Object.defineProperty(GraphQLParser, "_ATN", {
        get: function () {
            if (!GraphQLParser.__ATN) {
                GraphQLParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(GraphQLParser._serializedATN));
            }
            return GraphQLParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    GraphQLParser.T__0 = 1;
    GraphQLParser.T__1 = 2;
    GraphQLParser.T__2 = 3;
    GraphQLParser.T__3 = 4;
    GraphQLParser.T__4 = 5;
    GraphQLParser.T__5 = 6;
    GraphQLParser.T__6 = 7;
    GraphQLParser.T__7 = 8;
    GraphQLParser.T__8 = 9;
    GraphQLParser.T__9 = 10;
    GraphQLParser.T__10 = 11;
    GraphQLParser.T__11 = 12;
    GraphQLParser.T__12 = 13;
    GraphQLParser.T__13 = 14;
    GraphQLParser.T__14 = 15;
    GraphQLParser.T__15 = 16;
    GraphQLParser.T__16 = 17;
    GraphQLParser.T__17 = 18;
    GraphQLParser.T__18 = 19;
    GraphQLParser.T__19 = 20;
    GraphQLParser.T__20 = 21;
    GraphQLParser.T__21 = 22;
    GraphQLParser.T__22 = 23;
    GraphQLParser.T__23 = 24;
    GraphQLParser.T__24 = 25;
    GraphQLParser.T__25 = 26;
    GraphQLParser.T__26 = 27;
    GraphQLParser.T__27 = 28;
    GraphQLParser.T__28 = 29;
    GraphQLParser.T__29 = 30;
    GraphQLParser.T__30 = 31;
    GraphQLParser.T__31 = 32;
    GraphQLParser.T__32 = 33;
    GraphQLParser.T__33 = 34;
    GraphQLParser.T__34 = 35;
    GraphQLParser.T__35 = 36;
    GraphQLParser.T__36 = 37;
    GraphQLParser.T__37 = 38;
    GraphQLParser.T__38 = 39;
    GraphQLParser.T__39 = 40;
    GraphQLParser.T__40 = 41;
    GraphQLParser.T__41 = 42;
    GraphQLParser.T__42 = 43;
    GraphQLParser.T__43 = 44;
    GraphQLParser.T__44 = 45;
    GraphQLParser.T__45 = 46;
    GraphQLParser.T__46 = 47;
    GraphQLParser.T__47 = 48;
    GraphQLParser.T__48 = 49;
    GraphQLParser.BooleanLiteral = 50;
    GraphQLParser.NAME = 51;
    GraphQLParser.String_ = 52;
    GraphQLParser.STRING = 53;
    GraphQLParser.BLOCK_STRING = 54;
    GraphQLParser.ID = 55;
    GraphQLParser.NUMBER = 56;
    GraphQLParser.WS = 57;
    GraphQLParser.LineComment = 58;
    GraphQLParser.RULE_document = 0;
    GraphQLParser.RULE_definition = 1;
    GraphQLParser.RULE_typeSystemDefinition = 2;
    GraphQLParser.RULE_schemaDefinition = 3;
    GraphQLParser.RULE_rootOperationTypeDefinitionList = 4;
    GraphQLParser.RULE_rootOperationTypeDefinition = 5;
    GraphQLParser.RULE_namedType = 6;
    GraphQLParser.RULE_typeDefinition = 7;
    GraphQLParser.RULE_scalarTypeDefinition = 8;
    GraphQLParser.RULE_description = 9;
    GraphQLParser.RULE_objectTypeDefinition = 10;
    GraphQLParser.RULE_implementsInterfaces = 11;
    GraphQLParser.RULE_fieldsDefinitions = 12;
    GraphQLParser.RULE_fieldsDefinition = 13;
    GraphQLParser.RULE_argumentsDefinition = 14;
    GraphQLParser.RULE_inputValueDefinition = 15;
    GraphQLParser.RULE_interfaceTypeDefinition = 16;
    GraphQLParser.RULE_unionTypeDefinition = 17;
    GraphQLParser.RULE_unionMemberTypes = 18;
    GraphQLParser.RULE_unionTypeExtension = 19;
    GraphQLParser.RULE_enumTypeDefinition = 20;
    GraphQLParser.RULE_enumValuesDefinitions = 21;
    GraphQLParser.RULE_enumValue = 22;
    GraphQLParser.RULE_enumTypeExtension = 23;
    GraphQLParser.RULE_inputObjectTypeDefinition = 24;
    GraphQLParser.RULE_inputFieldsDefinition = 25;
    GraphQLParser.RULE_directiveDefinition = 26;
    GraphQLParser.RULE_directiveLocations = 27;
    GraphQLParser.RULE_directiveLocation = 28;
    GraphQLParser.RULE_executableDirectiveLocation = 29;
    GraphQLParser.RULE_typeSystemDirectiveLocation = 30;
    GraphQLParser.RULE_typeSystemExtension = 31;
    GraphQLParser.RULE_schemaExtension = 32;
    GraphQLParser.RULE_typeExtension = 33;
    GraphQLParser.RULE_execDefinition = 34;
    GraphQLParser.RULE_operationDefinition = 35;
    GraphQLParser.RULE_selectionSet = 36;
    GraphQLParser.RULE_operationType = 37;
    GraphQLParser.RULE_selection = 38;
    GraphQLParser.RULE_field = 39;
    GraphQLParser.RULE_fieldName = 40;
    GraphQLParser.RULE_alias = 41;
    GraphQLParser.RULE_arguments = 42;
    GraphQLParser.RULE_argument = 43;
    GraphQLParser.RULE_fragmentSpread = 44;
    GraphQLParser.RULE_inlineFragment = 45;
    GraphQLParser.RULE_fragmentDefinition = 46;
    GraphQLParser.RULE_fragmentName = 47;
    GraphQLParser.RULE_directives = 48;
    GraphQLParser.RULE_directive = 49;
    GraphQLParser.RULE_typeCondition = 50;
    GraphQLParser.RULE_variableDefinitions = 51;
    GraphQLParser.RULE_variableDefinition = 52;
    GraphQLParser.RULE_variable = 53;
    GraphQLParser.RULE_defaultValue = 54;
    GraphQLParser.RULE_valueOrVariable = 55;
    GraphQLParser.RULE_value = 56;
    GraphQLParser.RULE_type_ = 57;
    GraphQLParser.RULE_typeName = 58;
    GraphQLParser.RULE_listType = 59;
    GraphQLParser.RULE_nonNullType = 60;
    GraphQLParser.RULE_array = 61;
    // tslint:disable:no-trailing-whitespace
    GraphQLParser.ruleNames = [
        "document", "definition", "typeSystemDefinition", "schemaDefinition",
        "rootOperationTypeDefinitionList", "rootOperationTypeDefinition", "namedType",
        "typeDefinition", "scalarTypeDefinition", "description", "objectTypeDefinition",
        "implementsInterfaces", "fieldsDefinitions", "fieldsDefinition", "argumentsDefinition",
        "inputValueDefinition", "interfaceTypeDefinition", "unionTypeDefinition",
        "unionMemberTypes", "unionTypeExtension", "enumTypeDefinition", "enumValuesDefinitions",
        "enumValue", "enumTypeExtension", "inputObjectTypeDefinition", "inputFieldsDefinition",
        "directiveDefinition", "directiveLocations", "directiveLocation", "executableDirectiveLocation",
        "typeSystemDirectiveLocation", "typeSystemExtension", "schemaExtension",
        "typeExtension", "execDefinition", "operationDefinition", "selectionSet",
        "operationType", "selection", "field", "fieldName", "alias", "arguments",
        "argument", "fragmentSpread", "inlineFragment", "fragmentDefinition",
        "fragmentName", "directives", "directive", "typeCondition", "variableDefinitions",
        "variableDefinition", "variable", "defaultValue", "valueOrVariable", "value",
        "type_", "typeName", "listType", "nonNullType", "array",
    ];
    GraphQLParser._LITERAL_NAMES = [
        undefined, "'schema'", "'{'", "','", "'}'", "':'", "'scalar'", "'type'",
        "'implements'", "'&'", "'('", "')'", "'interface'", "'union'", "'='",
        "'|'", "'extend'", "'enum'", "'input'", "'directive'", "'@'", "'on'",
        "'QUERY'", "'MUTATION'", "'SUBSCRIPTION'", "'FIELD'", "'FRAGMENT_DEFINITION'",
        "'FRAGMENT_SPREAD'", "'INLINE_FRAGMENT'", "'SCHEMA'", "'SCALAR'", "'OBJECT'",
        "'FIELD_DEFINITION'", "'ARGUMENT_DEFINITION'", "'INTERFACE'", "'UNION'",
        "'ENUM'", "'ENUM_VALUE'", "'INPUT_OBJECT'", "'INPUT_FIELD_DEFINITION'",
        "'query'", "'mutation'", "'subscription'", "'...'", "'fragment'", "'$'",
        "'null'", "'['", "']'", "'!'",
    ];
    GraphQLParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, "BooleanLiteral", "NAME", "String_", "STRING", "BLOCK_STRING",
        "ID", "NUMBER", "WS", "LineComment",
    ];
    GraphQLParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(GraphQLParser._LITERAL_NAMES, GraphQLParser._SYMBOLIC_NAMES, []);
    GraphQLParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03<\u0236\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
        "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x03\x02\x07\x02\x80\n\x02\f\x02\x0E\x02\x83\v\x02" +
        "\x03\x02\x06\x02\x86\n\x02\r\x02\x0E\x02\x87\x03\x03\x03\x03\x03\x03\x05" +
        "\x03\x8D\n\x03\x03\x04\x03\x04\x03\x04\x05\x04\x92\n\x04\x03\x05\x03\x05" +
        "\x05\x05\x96\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x05\x06\x9D" +
        "\n\x06\x03\x06\x07\x06\xA0\n\x06\f\x06\x0E\x06\xA3\v\x06\x03\x06\x03\x06" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
        "\t\x03\t\x05\t\xB3\n\t\x03\n\x05\n\xB6\n\n\x03\n\x03\n\x03\n\x03\n\x03" +
        "\v\x03\v\x03\f\x05\f\xBF\n\f\x03\f\x03\f\x03\f\x05\f\xC4\n\f\x03\f\x05" +
        "\f\xC7\n\f\x03\f\x05\f\xCA\n\f\x03\r\x03\r\x03\r\x05\r\xCF\n\r\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x07\r\xD6\n\r\f\r\x0E\r\xD9\v\r\x03\x0E\x03\x0E\x06" +
        "\x0E\xDD\n\x0E\r\x0E\x0E\x0E\xDE\x03\x0E\x03\x0E\x03\x0F\x05\x0F\xE4\n" +
        "\x0F\x03\x0F\x03\x0F\x05\x0F\xE8\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
        "\xED\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xF3\n\x10\f\x10\x0E" +
        "\x10\xF6\v\x10\x03\x10\x03\x10\x03\x11\x05\x11\xFB\n\x11\x03\x11\x03\x11" +
        "\x03\x11\x03\x11\x05\x11\u0101\n\x11\x03\x11\x05\x11\u0104\n\x11\x03\x12" +
        "\x05\x12\u0107\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\u010C\n\x12\x03\x12" +
        "\x05\x12\u010F\n\x12\x03\x13\x05\x13\u0112\n\x13\x03\x13\x03\x13\x03\x13" +
        "\x05\x13\u0117\n\x13\x03\x13\x05\x13\u011A\n\x13\x03\x14\x03\x14\x03\x14" +
        "\x03\x14\x07\x14\u0120\n\x14\f\x14\x0E\x14\u0123\v\x14\x03\x15\x03\x15" +
        "\x03\x15\x03\x16\x05\x16\u0129\n\x16\x03\x16\x03\x16\x03\x16\x05\x16\u012E" +
        "\n\x16\x03\x16\x05\x16\u0131\n\x16\x03\x17\x03\x17\x05\x17\u0135\n\x17" +
        "\x03\x17\x03\x17\x05\x17\u0139\n\x17\x06\x17\u013B\n\x17\r\x17\x0E\x17" +
        "\u013C\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x1A" +
        "\x05\x1A\u0147\n\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u014C\n\x1A\x03\x1A" +
        "\x05\x1A\u014F\n\x1A\x03\x1B\x03\x1B\x06\x1B\u0153\n\x1B\r\x1B\x0E\x1B" +
        "\u0154\x03\x1B\x03\x1B\x03\x1C\x05\x1C\u015A\n\x1C\x03\x1C\x03\x1C\x03" +
        "\x1C\x03\x1C\x05\x1C\u0160\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
        "\x03\x1D\x07\x1D\u0168\n\x1D\f\x1D\x0E\x1D\u016B\v\x1D\x03\x1E\x03\x1E" +
        "\x05\x1E\u016F\n\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x05!\u0177\n" +
        "!\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$\x05$\u0181\n$\x03%\x03%\x03" +
        "%\x03%\x05%\u0187\n%\x03%\x05%\u018A\n%\x03%\x03%\x05%\u018E\n%\x03&\x03" +
        "&\x03&\x05&\u0193\n&\x03&\x07&\u0196\n&\f&\x0E&\u0199\v&\x03&\x03&\x03" +
        "\'\x03\'\x03(\x03(\x03(\x05(\u01A2\n(\x03)\x03)\x05)\u01A6\n)\x03)\x05" +
        ")\u01A9\n)\x03)\x05)\u01AC\n)\x03*\x03*\x05*\u01B0\n*\x03+\x03+\x03+\x03" +
        "+\x03,\x03,\x03,\x03,\x07,\u01BA\n,\f,\x0E,\u01BD\v,\x03,\x03,\x03-\x03" +
        "-\x03-\x03-\x03.\x03.\x03.\x05.\u01C8\n.\x03/\x03/\x03/\x03/\x05/\u01CE" +
        "\n/\x03/\x03/\x030\x030\x030\x030\x030\x050\u01D7\n0\x030\x030\x031\x03" +
        "1\x032\x062\u01DE\n2\r2\x0E2\u01DF\x033\x033\x033\x033\x033\x033\x033" +
        "\x033\x033\x033\x033\x033\x053\u01EE\n3\x034\x034\x035\x035\x035\x035" +
        "\x075\u01F6\n5\f5\x0E5\u01F9\v5\x035\x035\x036\x036\x036\x036\x056\u0201" +
        "\n6\x037\x037\x037\x038\x038\x038\x039\x039\x059\u020B\n9\x03:\x03:\x03" +
        ":\x03:\x03:\x03:\x05:\u0213\n:\x03;\x03;\x05;\u0217\n;\x03;\x03;\x05;" +
        "\u021B\n;\x05;\u021D\n;\x03<\x03<\x03=\x03=\x03=\x03=\x03>\x03>\x03?\x03" +
        "?\x03?\x03?\x07?\u022B\n?\f?\x0E?\u022E\v?\x03?\x03?\x03?\x03?\x05?\u0234" +
        "\n?\x03?\x02\x02\x03\x18@\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
        "\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
        "\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
        "<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
        "X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
        "t\x02v\x02x\x02z\x02|\x02\x02\x05\x03\x02\x18\x1E\x03\x02\x1F)\x03\x02" +
        "*,\x02\u024A\x02\x81\x03\x02\x02\x02\x04\x8C\x03\x02\x02\x02\x06\x91\x03" +
        "\x02\x02\x02\b\x93\x03\x02\x02\x02\n\x99\x03\x02\x02\x02\f\xA6\x03\x02" +
        "\x02\x02\x0E\xAA\x03\x02\x02\x02\x10\xB2\x03\x02\x02\x02\x12\xB5\x03\x02" +
        "\x02\x02\x14\xBB\x03\x02\x02\x02\x16\xBE\x03\x02\x02\x02\x18\xCB\x03\x02" +
        "\x02\x02\x1A\xDA\x03\x02\x02\x02\x1C\xE3\x03\x02\x02\x02\x1E\xEE\x03\x02" +
        "\x02\x02 \xFA\x03\x02\x02\x02\"\u0106\x03\x02\x02\x02$\u0111\x03\x02\x02" +
        "\x02&\u011B\x03\x02\x02\x02(\u0124\x03\x02\x02\x02*\u0128\x03\x02\x02" +
        "\x02,\u0132\x03\x02\x02\x02.\u0140\x03\x02\x02\x020\u0142\x03\x02\x02" +
        "\x022\u0146\x03\x02\x02\x024\u0150\x03\x02\x02\x026\u0159\x03\x02\x02" +
        "\x028\u0164\x03\x02\x02\x02:\u016E\x03\x02\x02\x02<\u0170\x03\x02\x02" +
        "\x02>\u0172\x03\x02\x02\x02@\u0176\x03\x02\x02\x02B\u0178\x03\x02\x02" +
        "\x02D\u017B\x03\x02\x02\x02F\u0180\x03\x02\x02\x02H\u018D\x03\x02\x02" +
        "\x02J\u018F\x03\x02\x02\x02L\u019C\x03\x02\x02\x02N\u01A1\x03\x02\x02" +
        "\x02P\u01A3\x03\x02\x02\x02R\u01AF\x03\x02\x02\x02T\u01B1\x03\x02\x02" +
        "\x02V\u01B5\x03\x02\x02\x02X\u01C0\x03\x02\x02\x02Z\u01C4\x03\x02\x02" +
        "\x02\\\u01C9\x03\x02\x02\x02^\u01D1\x03\x02\x02\x02`\u01DA\x03\x02\x02" +
        "\x02b\u01DD\x03\x02\x02\x02d\u01ED\x03\x02\x02\x02f\u01EF\x03\x02\x02" +
        "\x02h\u01F1\x03\x02\x02\x02j\u01FC\x03\x02\x02\x02l\u0202\x03\x02\x02" +
        "\x02n\u0205\x03\x02\x02\x02p\u020A\x03\x02\x02\x02r\u0212\x03\x02\x02" +
        "\x02t\u021C\x03\x02\x02\x02v\u021E\x03\x02\x02\x02x\u0220\x03\x02\x02" +
        "\x02z\u0224\x03\x02\x02\x02|\u0233\x03\x02\x02\x02~\x80\x05\x14\v\x02" +
        "\x7F~\x03\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02" +
        "\x81\x82\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02" +
        "\x84\x86\x05\x04\x03\x02\x85\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02" +
        "\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x03\x03\x02\x02\x02" +
        "\x89\x8D\x05F$\x02\x8A\x8D\x05\x06\x04\x02\x8B\x8D\x05@!\x02\x8C\x89\x03" +
        "\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D\x05\x03" +
        "\x02\x02\x02\x8E\x92\x05\b\x05\x02\x8F\x92\x05\x10\t\x02\x90\x92\x056" +
        "\x1C\x02\x91\x8E\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x90\x03\x02" +
        "\x02\x02\x92\x07\x03\x02\x02\x02\x93\x95\x07\x03\x02\x02\x94\x96\x05b" +
        "2\x02\x95\x94\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97\x03\x02" +
        "\x02\x02\x97\x98\x05\n\x06\x02\x98\t\x03\x02\x02\x02\x99\x9A\x07\x04\x02" +
        "\x02\x9A\xA1\x05\f\x07\x02\x9B\x9D\x07\x05\x02\x02\x9C\x9B\x03\x02\x02" +
        "\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA0\x05\f\x07" +
        "\x02\x9F\x9C\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02" +
        "\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA4\x03\x02\x02\x02\xA3\xA1\x03\x02\x02" +
        "\x02\xA4\xA5\x07\x06\x02\x02\xA5\v\x03\x02\x02\x02\xA6\xA7\x05L\'\x02" +
        "\xA7\xA8\x07\x07\x02\x02\xA8\xA9\x05\x0E\b\x02\xA9\r\x03\x02\x02\x02\xAA" +
        "\xAB\x075\x02\x02\xAB\x0F\x03\x02\x02\x02\xAC\xB3\x05\x12\n\x02\xAD\xB3" +
        "\x05\x16\f\x02\xAE\xB3\x05\"\x12\x02\xAF\xB3\x05$\x13\x02\xB0\xB3\x05" +
        "*\x16\x02\xB1\xB3\x052\x1A\x02\xB2\xAC\x03\x02\x02\x02\xB2\xAD\x03\x02" +
        "\x02\x02\xB2\xAE\x03\x02\x02\x02\xB2\xAF\x03\x02\x02\x02\xB2\xB0\x03\x02" +
        "\x02\x02\xB2\xB1\x03\x02\x02\x02\xB3\x11\x03\x02\x02\x02\xB4\xB6\x05\x14" +
        "\v\x02\xB5\xB4\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x03\x02" +
        "\x02\x02\xB7\xB8\x07\b\x02\x02\xB8\xB9\x075\x02\x02\xB9\xBA\x05b2\x02" +
        "\xBA\x13\x03\x02\x02\x02\xBB\xBC\x076\x02\x02\xBC\x15\x03\x02\x02\x02" +
        "\xBD\xBF\x05\x14\v\x02\xBE\xBD\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02" +
        "\xBF\xC0\x03\x02\x02\x02\xC0\xC1\x07\t\x02\x02\xC1\xC3\x075\x02\x02\xC2" +
        "\xC4\x05\x18\r\x02\xC3\xC2\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4" +
        "\xC6\x03\x02\x02\x02\xC5\xC7\x05b2\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7" +
        "\x03\x02\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8\xCA\x05\x1A\x0E\x02\xC9\xC8" +
        "\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\x17\x03\x02\x02\x02\xCB\xCC" +
        "\b\r\x01\x02\xCC\xCE\x07\n\x02\x02\xCD\xCF\x07\v\x02\x02\xCE\xCD\x03\x02" +
        "\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x05t" +
        ";\x02\xD1\xD7\x03\x02\x02\x02\xD2\xD3\f\x03\x02\x02\xD3\xD4\x07\v\x02" +
        "\x02\xD4\xD6\x05t;\x02\xD5\xD2\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02" +
        "\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\x19\x03\x02\x02\x02" +
        "\xD9\xD7\x03\x02\x02\x02\xDA\xDC\x07\x04\x02\x02\xDB\xDD\x05\x1C\x0F\x02" +
        "\xDC\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02" +
        "\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x07\x06\x02\x02" +
        "\xE1\x1B\x03\x02\x02\x02\xE2\xE4\x05\x14\v\x02\xE3\xE2\x03\x02\x02\x02" +
        "\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE7\x075\x02\x02" +
        "\xE6\xE8\x05\x1E\x10\x02\xE7\xE6\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02" +
        "\xE8\xE9\x03\x02\x02\x02\xE9\xEA\x07\x07\x02\x02\xEA\xEC\x05t;\x02\xEB" +
        "\xED\x05b2\x02\xEC\xEB\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\x1D" +
        "\x03\x02\x02\x02\xEE\xEF\x07\f\x02\x02\xEF\xF4\x05 \x11\x02\xF0\xF1\x07" +
        "\x05\x02\x02\xF1\xF3\x05 \x11\x02\xF2\xF0\x03\x02\x02\x02\xF3\xF6\x03" +
        "\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF7\x03" +
        "\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF8\x07\r\x02\x02\xF8\x1F\x03" +
        "\x02\x02\x02\xF9\xFB\x05\x14\v\x02\xFA\xF9\x03\x02\x02\x02\xFA\xFB\x03" +
        "\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFD\x075\x02\x02\xFD\xFE\x07" +
        "\x07\x02\x02\xFE\u0100\x05t;\x02\xFF\u0101\x05n8\x02\u0100\xFF\x03\x02" +
        "\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0103\x03\x02\x02\x02\u0102" +
        "\u0104\x05b2\x02\u0103\u0102\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02" +
        "\u0104!\x03\x02\x02\x02\u0105\u0107\x05\x14\v\x02\u0106\u0105\x03\x02" +
        "\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108" +
        "\u0109\x07\x0E\x02\x02\u0109\u010B\x075\x02\x02\u010A\u010C\x05b2\x02" +
        "\u010B\u010A\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010E\x03" +
        "\x02\x02\x02\u010D\u010F\x05\x1A\x0E\x02\u010E\u010D\x03\x02\x02\x02\u010E" +
        "\u010F\x03\x02\x02\x02\u010F#\x03\x02\x02\x02\u0110\u0112\x05\x14\v\x02" +
        "\u0111\u0110\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0113\x03" +
        "\x02\x02\x02\u0113\u0114\x07\x0F\x02\x02\u0114\u0116\x075\x02\x02\u0115" +
        "\u0117\x05b2\x02\u0116\u0115\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02" +
        "\u0117\u0119\x03\x02\x02\x02\u0118\u011A\x05&\x14\x02\u0119\u0118\x03" +
        "\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A%\x03\x02\x02\x02\u011B" +
        "\u011C\x07\x10\x02\x02\u011C\u0121\x05t;\x02\u011D\u011E\x07\x11\x02\x02" +
        "\u011E\u0120\x05t;\x02\u011F\u011D\x03\x02\x02\x02\u0120\u0123\x03\x02" +
        "\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122" +
        "\'\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124\u0125\x07\x12\x02" +
        "\x02\u0125\u0126\x05$\x13\x02\u0126)\x03\x02\x02\x02\u0127\u0129\x05\x14" +
        "\v\x02\u0128\u0127\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012A" +
        "\x03\x02\x02\x02\u012A\u012B\x07\x13\x02\x02\u012B\u012D\x075\x02\x02" +
        "\u012C\u012E\x05b2\x02\u012D\u012C\x03\x02\x02\x02\u012D\u012E\x03\x02" +
        "\x02\x02\u012E\u0130\x03\x02\x02\x02\u012F\u0131\x05,\x17\x02\u0130\u012F" +
        "\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131+\x03\x02\x02\x02\u0132" +
        "\u013A\x07\x04\x02\x02\u0133\u0135\x05\x14\v\x02\u0134\u0133\x03\x02\x02" +
        "\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0138" +
        "\x05.\x18\x02\u0137\u0139\x05b2\x02\u0138\u0137\x03\x02\x02\x02\u0138" +
        "\u0139\x03\x02\x02\x02\u0139\u013B\x03\x02\x02\x02\u013A\u0134\x03\x02" +
        "\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013C" +
        "\u013D\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013F\x07\x06" +
        "\x02\x02\u013F-\x03\x02\x02\x02\u0140\u0141\x075\x02\x02\u0141/\x03\x02" +
        "\x02\x02\u0142\u0143\x07\x12\x02\x02\u0143\u0144\x05*\x16\x02\u01441\x03" +
        "\x02\x02\x02\u0145\u0147\x05\x14\v\x02\u0146\u0145\x03\x02\x02\x02\u0146" +
        "\u0147\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u0149\x07\x14" +
        "\x02\x02\u0149\u014B\x075\x02\x02\u014A\u014C\x05b2\x02\u014B\u014A\x03" +
        "\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014E\x03\x02\x02\x02\u014D" +
        "\u014F\x054\x1B\x02\u014E\u014D\x03\x02\x02\x02\u014E\u014F\x03\x02\x02" +
        "\x02\u014F3\x03\x02\x02\x02\u0150\u0152\x07\x04\x02\x02\u0151\u0153\x05" +
        " \x11\x02\u0152\u0151\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154" +
        "\u0152\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0156\x03\x02" +
        "\x02\x02\u0156\u0157\x07\x06\x02\x02\u01575\x03\x02\x02\x02\u0158\u015A" +
        "\x05\x14\v\x02\u0159\u0158\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02" +
        "\u015A\u015B\x03\x02\x02\x02\u015B\u015C\x07\x15\x02\x02\u015C\u015D\x07" +
        "\x16\x02\x02\u015D\u015F\x075\x02\x02\u015E\u0160\x05\x1E\x10\x02\u015F" +
        "\u015E\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0161\x03\x02" +
        "\x02\x02\u0161\u0162\x07\x17\x02\x02\u0162\u0163\x058\x1D\x02\u01637\x03" +
        "\x02\x02\x02\u0164\u0169\x05:\x1E\x02\u0165\u0166\x07\x11\x02\x02\u0166" +
        "\u0168\x058\x1D\x02\u0167\u0165\x03\x02\x02\x02\u0168\u016B\x03\x02\x02" +
        "\x02\u0169\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A9\x03" +
        "\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016C\u016F\x05<\x1F\x02\u016D" +
        "\u016F\x05> \x02\u016E\u016C\x03\x02\x02\x02\u016E\u016D\x03\x02\x02\x02" +
        "\u016F;\x03\x02\x02\x02\u0170\u0171\t\x02\x02\x02\u0171=\x03\x02\x02\x02" +
        "\u0172\u0173\t\x03\x02\x02\u0173?\x03\x02\x02\x02\u0174\u0177\x05B\"\x02" +
        "\u0175\u0177\x05D#\x02\u0176\u0174\x03\x02\x02\x02\u0176\u0175\x03\x02" +
        "\x02\x02\u0177A\x03\x02\x02\x02\u0178\u0179\x07\x12\x02\x02\u0179\u017A" +
        "\x05\b\x05\x02\u017AC\x03\x02\x02\x02\u017B\u017C\x07\x12\x02\x02\u017C" +
        "\u017D\x05\x10\t\x02\u017DE\x03\x02\x02\x02\u017E\u0181\x05H%\x02\u017F" +
        "\u0181\x05^0\x02\u0180\u017E\x03\x02\x02\x02\u0180\u017F\x03\x02\x02\x02" +
        "\u0181G\x03\x02\x02\x02\u0182\u018E\x05J&\x02\u0183\u0184\x05L\'\x02\u0184" +
        "\u0186\x075\x02\x02\u0185\u0187\x05h5\x02\u0186\u0185\x03\x02\x02\x02" +
        "\u0186\u0187\x03\x02\x02\x02\u0187\u0189\x03\x02\x02\x02\u0188\u018A\x05" +
        "b2\x02\u0189\u0188\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B" +
        "\x03\x02\x02\x02\u018B\u018C\x05J&\x02\u018C\u018E\x03\x02\x02\x02\u018D" +
        "\u0182\x03\x02\x02\x02\u018D\u0183\x03\x02\x02\x02\u018EI\x03\x02\x02" +
        "\x02\u018F\u0190\x07\x04\x02\x02\u0190\u0197\x05N(\x02\u0191\u0193\x07" +
        "\x05\x02\x02\u0192\u0191\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193" +
        "\u0194\x03\x02\x02\x02\u0194\u0196\x05N(\x02\u0195\u0192\x03\x02\x02\x02" +
        "\u0196\u0199\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0197\u0198\x03" +
        "\x02\x02\x02\u0198\u019A\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u019A" +
        "\u019B\x07\x06\x02\x02\u019BK\x03\x02\x02\x02\u019C\u019D\t\x04\x02\x02" +
        "\u019DM\x03\x02\x02\x02\u019E\u01A2\x05P)\x02\u019F\u01A2\x05Z.\x02\u01A0" +
        "\u01A2\x05\\/\x02\u01A1\u019E\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02" +
        "\x02\u01A1\u01A0\x03\x02\x02\x02\u01A2O\x03\x02\x02\x02\u01A3\u01A5\x05" +
        "R*\x02\u01A4\u01A6\x05V,\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03" +
        "\x02\x02\x02\u01A6\u01A8\x03\x02\x02\x02\u01A7\u01A9\x05b2\x02\u01A8\u01A7" +
        "\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02" +
        "\u01AA\u01AC\x05J&\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC\x03\x02" +
        "\x02\x02\u01ACQ\x03\x02\x02\x02\u01AD\u01B0\x05T+\x02\u01AE\u01B0\x07" +
        "5\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01B0" +
        "S\x03\x02\x02\x02\u01B1\u01B2\x075\x02\x02\u01B2\u01B3\x07\x07\x02\x02" +
        "\u01B3\u01B4\x075\x02\x02\u01B4U\x03\x02\x02\x02\u01B5\u01B6\x07\f\x02" +
        "\x02\u01B6\u01BB\x05X-\x02\u01B7\u01B8\x07\x05\x02\x02\u01B8\u01BA\x05" +
        "X-\x02\u01B9\u01B7\x03\x02\x02\x02\u01BA\u01BD\x03\x02\x02\x02\u01BB\u01B9" +
        "\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01BE\x03\x02\x02\x02" +
        "\u01BD\u01BB\x03\x02\x02\x02\u01BE\u01BF\x07\r\x02\x02\u01BFW\x03\x02" +
        "\x02\x02\u01C0\u01C1\x075\x02\x02\u01C1\u01C2\x07\x07\x02\x02\u01C2\u01C3" +
        "\x05p9\x02\u01C3Y\x03\x02\x02\x02\u01C4\u01C5\x07-\x02\x02\u01C5\u01C7" +
        "\x05`1\x02\u01C6\u01C8\x05b2\x02\u01C7\u01C6\x03\x02\x02\x02\u01C7\u01C8" +
        "\x03\x02\x02\x02\u01C8[\x03\x02\x02\x02\u01C9\u01CA\x07-\x02\x02\u01CA" +
        "\u01CB\x07\x17\x02\x02\u01CB\u01CD\x05f4\x02\u01CC\u01CE\x05b2\x02\u01CD" +
        "\u01CC\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01CF\x03\x02" +
        "\x02\x02\u01CF\u01D0\x05J&\x02\u01D0]\x03\x02\x02\x02\u01D1\u01D2\x07" +
        ".\x02\x02\u01D2\u01D3\x05`1\x02\u01D3\u01D4\x07\x17\x02\x02\u01D4\u01D6" +
        "\x05f4\x02\u01D5\u01D7\x05b2\x02\u01D6\u01D5\x03\x02\x02\x02\u01D6\u01D7" +
        "\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01D9\x05J&\x02\u01D9" +
        "_\x03\x02\x02\x02\u01DA\u01DB\x075\x02\x02\u01DBa\x03\x02\x02\x02\u01DC" +
        "\u01DE\x05d3\x02\u01DD\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02" +
        "\u01DF\u01DD\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0c\x03\x02" +
        "\x02\x02\u01E1\u01E2\x07\x16\x02\x02\u01E2\u01E3\x075\x02\x02\u01E3\u01E4" +
        "\x07\x07\x02\x02\u01E4\u01EE\x05p9\x02\u01E5\u01E6\x07\x16\x02\x02\u01E6" +
        "\u01EE\x075\x02\x02\u01E7\u01E8\x07\x16\x02\x02\u01E8\u01E9\x075\x02\x02" +
        "\u01E9\u01EA\x07\f\x02\x02\u01EA\u01EB\x05X-\x02\u01EB\u01EC\x07\r\x02" +
        "\x02\u01EC\u01EE\x03\x02\x02\x02\u01ED\u01E1\x03\x02\x02\x02\u01ED\u01E5" +
        "\x03\x02\x02\x02\u01ED\u01E7\x03\x02\x02\x02\u01EEe\x03\x02\x02\x02\u01EF" +
        "\u01F0\x05v<\x02\u01F0g\x03\x02\x02\x02\u01F1\u01F2\x07\f\x02\x02\u01F2" +
        "\u01F7\x05j6\x02\u01F3\u01F4\x07\x05\x02\x02\u01F4\u01F6\x05j6\x02\u01F5" +
        "\u01F3\x03\x02\x02\x02\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5\x03\x02" +
        "\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01FA\x03\x02\x02\x02\u01F9" +
        "\u01F7\x03\x02\x02\x02\u01FA\u01FB\x07\r\x02\x02\u01FBi\x03\x02\x02\x02" +
        "\u01FC\u01FD\x05l7\x02\u01FD\u01FE\x07\x07\x02\x02\u01FE\u0200\x05t;\x02" +
        "\u01FF\u0201\x05n8\x02\u0200\u01FF\x03\x02\x02\x02\u0200\u0201\x03\x02" +
        "\x02\x02\u0201k\x03\x02\x02\x02\u0202\u0203\x07/\x02\x02\u0203\u0204\x07" +
        "5\x02\x02\u0204m\x03\x02\x02\x02\u0205\u0206\x07\x10\x02\x02\u0206\u0207" +
        "\x05r:\x02\u0207o\x03\x02\x02\x02\u0208\u020B\x05r:\x02\u0209\u020B\x05" +
        "l7\x02\u020A\u0208\x03\x02\x02\x02\u020A\u0209\x03\x02\x02\x02\u020Bq" +
        "\x03\x02\x02\x02\u020C\u0213\x076\x02\x02\u020D\u0213\x07:\x02\x02\u020E" +
        "\u0213\x074\x02\x02\u020F\u0213\x05|?\x02\u0210\u0213\x079\x02\x02\u0211" +
        "\u0213\x070\x02\x02\u0212\u020C\x03\x02\x02\x02\u0212\u020D\x03\x02\x02" +
        "\x02\u0212\u020E\x03\x02\x02\x02\u0212\u020F\x03\x02\x02\x02\u0212\u0210" +
        "\x03\x02\x02\x02\u0212\u0211\x03\x02\x02\x02\u0213s\x03\x02\x02\x02\u0214" +
        "\u0216\x05v<\x02\u0215\u0217\x05z>\x02\u0216\u0215\x03\x02\x02\x02\u0216" +
        "\u0217\x03\x02\x02\x02\u0217\u021D\x03\x02\x02\x02\u0218\u021A\x05x=\x02" +
        "\u0219\u021B\x05z>\x02\u021A\u0219\x03\x02\x02\x02\u021A\u021B\x03\x02" +
        "\x02\x02\u021B\u021D\x03\x02\x02\x02\u021C\u0214\x03\x02\x02\x02\u021C" +
        "\u0218\x03\x02\x02\x02\u021Du\x03\x02\x02\x02\u021E\u021F\x075\x02\x02" +
        "\u021Fw\x03\x02\x02\x02\u0220\u0221\x071\x02\x02\u0221\u0222\x05t;\x02" +
        "\u0222\u0223\x072\x02\x02\u0223y\x03\x02\x02\x02\u0224\u0225\x073\x02" +
        "\x02\u0225{\x03\x02\x02\x02\u0226\u0227\x071\x02\x02\u0227\u022C\x05r" +
        ":\x02\u0228\u0229\x07\x05\x02\x02\u0229\u022B\x05r:\x02\u022A\u0228\x03" +
        "\x02\x02\x02\u022B\u022E\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022C" +
        "\u022D\x03\x02\x02\x02\u022D\u022F\x03\x02\x02\x02\u022E\u022C\x03\x02" +
        "\x02\x02\u022F\u0230\x072\x02\x02\u0230\u0234\x03\x02\x02\x02\u0231\u0232" +
        "\x071\x02\x02\u0232\u0234\x072\x02\x02\u0233\u0226\x03\x02\x02\x02\u0233" +
        "\u0231\x03\x02\x02\x02\u0234}\x03\x02\x02\x02I\x81\x87\x8C\x91\x95\x9C" +
        "\xA1\xB2\xB5\xBE\xC3\xC6\xC9\xCE\xD7\xDE\xE3\xE7\xEC\xF4\xFA\u0100\u0103" +
        "\u0106\u010B\u010E\u0111\u0116\u0119\u0121\u0128\u012D\u0130\u0134\u0138" +
        "\u013C\u0146\u014B\u014E\u0154\u0159\u015F\u0169\u016E\u0176\u0180\u0186" +
        "\u0189\u018D\u0192\u0197\u01A1\u01A5\u01A8\u01AB\u01AF\u01BB\u01C7\u01CD" +
        "\u01D6\u01DF\u01ED\u01F7\u0200\u020A\u0212\u0216\u021A\u021C\u022C\u0233";
    return GraphQLParser;
}(Parser_1.Parser));
exports.GraphQLParser = GraphQLParser;
var DocumentContext = /** @class */ (function (_super) {
    __extends(DocumentContext, _super);
    function DocumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DocumentContext.prototype.description = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DescriptionContext);
        }
        else {
            return this.getRuleContext(i, DescriptionContext);
        }
    };
    DocumentContext.prototype.definition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DefinitionContext);
        }
        else {
            return this.getRuleContext(i, DefinitionContext);
        }
    };
    Object.defineProperty(DocumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_document; },
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
var DefinitionContext = /** @class */ (function (_super) {
    __extends(DefinitionContext, _super);
    function DefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefinitionContext.prototype.execDefinition = function () {
        return this.tryGetRuleContext(0, ExecDefinitionContext);
    };
    DefinitionContext.prototype.typeSystemDefinition = function () {
        return this.tryGetRuleContext(0, TypeSystemDefinitionContext);
    };
    DefinitionContext.prototype.typeSystemExtension = function () {
        return this.tryGetRuleContext(0, TypeSystemExtensionContext);
    };
    Object.defineProperty(DefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_definition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterDefinition) {
            listener.enterDefinition(this);
        }
    };
    // @Override
    DefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitDefinition) {
            listener.exitDefinition(this);
        }
    };
    // @Override
    DefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitDefinition) {
            return visitor.visitDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefinitionContext = DefinitionContext;
var TypeSystemDefinitionContext = /** @class */ (function (_super) {
    __extends(TypeSystemDefinitionContext, _super);
    function TypeSystemDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeSystemDefinitionContext.prototype.schemaDefinition = function () {
        return this.tryGetRuleContext(0, SchemaDefinitionContext);
    };
    TypeSystemDefinitionContext.prototype.typeDefinition = function () {
        return this.tryGetRuleContext(0, TypeDefinitionContext);
    };
    TypeSystemDefinitionContext.prototype.directiveDefinition = function () {
        return this.tryGetRuleContext(0, DirectiveDefinitionContext);
    };
    Object.defineProperty(TypeSystemDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_typeSystemDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeSystemDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeSystemDefinition) {
            listener.enterTypeSystemDefinition(this);
        }
    };
    // @Override
    TypeSystemDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeSystemDefinition) {
            listener.exitTypeSystemDefinition(this);
        }
    };
    // @Override
    TypeSystemDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeSystemDefinition) {
            return visitor.visitTypeSystemDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeSystemDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeSystemDefinitionContext = TypeSystemDefinitionContext;
var SchemaDefinitionContext = /** @class */ (function (_super) {
    __extends(SchemaDefinitionContext, _super);
    function SchemaDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SchemaDefinitionContext.prototype.rootOperationTypeDefinitionList = function () {
        return this.getRuleContext(0, RootOperationTypeDefinitionListContext);
    };
    SchemaDefinitionContext.prototype.directives = function () {
        return this.tryGetRuleContext(0, DirectivesContext);
    };
    Object.defineProperty(SchemaDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_schemaDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SchemaDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterSchemaDefinition) {
            listener.enterSchemaDefinition(this);
        }
    };
    // @Override
    SchemaDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitSchemaDefinition) {
            listener.exitSchemaDefinition(this);
        }
    };
    // @Override
    SchemaDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitSchemaDefinition) {
            return visitor.visitSchemaDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SchemaDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SchemaDefinitionContext = SchemaDefinitionContext;
var RootOperationTypeDefinitionListContext = /** @class */ (function (_super) {
    __extends(RootOperationTypeDefinitionListContext, _super);
    function RootOperationTypeDefinitionListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RootOperationTypeDefinitionListContext.prototype.rootOperationTypeDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(RootOperationTypeDefinitionContext);
        }
        else {
            return this.getRuleContext(i, RootOperationTypeDefinitionContext);
        }
    };
    Object.defineProperty(RootOperationTypeDefinitionListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_rootOperationTypeDefinitionList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RootOperationTypeDefinitionListContext.prototype.enterRule = function (listener) {
        if (listener.enterRootOperationTypeDefinitionList) {
            listener.enterRootOperationTypeDefinitionList(this);
        }
    };
    // @Override
    RootOperationTypeDefinitionListContext.prototype.exitRule = function (listener) {
        if (listener.exitRootOperationTypeDefinitionList) {
            listener.exitRootOperationTypeDefinitionList(this);
        }
    };
    // @Override
    RootOperationTypeDefinitionListContext.prototype.accept = function (visitor) {
        if (visitor.visitRootOperationTypeDefinitionList) {
            return visitor.visitRootOperationTypeDefinitionList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RootOperationTypeDefinitionListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RootOperationTypeDefinitionListContext = RootOperationTypeDefinitionListContext;
var RootOperationTypeDefinitionContext = /** @class */ (function (_super) {
    __extends(RootOperationTypeDefinitionContext, _super);
    function RootOperationTypeDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RootOperationTypeDefinitionContext.prototype.operationType = function () {
        return this.getRuleContext(0, OperationTypeContext);
    };
    RootOperationTypeDefinitionContext.prototype.namedType = function () {
        return this.getRuleContext(0, NamedTypeContext);
    };
    Object.defineProperty(RootOperationTypeDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_rootOperationTypeDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RootOperationTypeDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterRootOperationTypeDefinition) {
            listener.enterRootOperationTypeDefinition(this);
        }
    };
    // @Override
    RootOperationTypeDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitRootOperationTypeDefinition) {
            listener.exitRootOperationTypeDefinition(this);
        }
    };
    // @Override
    RootOperationTypeDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitRootOperationTypeDefinition) {
            return visitor.visitRootOperationTypeDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RootOperationTypeDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RootOperationTypeDefinitionContext = RootOperationTypeDefinitionContext;
var NamedTypeContext = /** @class */ (function (_super) {
    __extends(NamedTypeContext, _super);
    function NamedTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamedTypeContext.prototype.NAME = function () { return this.getToken(GraphQLParser.NAME, 0); };
    Object.defineProperty(NamedTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_namedType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NamedTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterNamedType) {
            listener.enterNamedType(this);
        }
    };
    // @Override
    NamedTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitNamedType) {
            listener.exitNamedType(this);
        }
    };
    // @Override
    NamedTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitNamedType) {
            return visitor.visitNamedType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NamedTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NamedTypeContext = NamedTypeContext;
var TypeDefinitionContext = /** @class */ (function (_super) {
    __extends(TypeDefinitionContext, _super);
    function TypeDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeDefinitionContext.prototype.scalarTypeDefinition = function () {
        return this.tryGetRuleContext(0, ScalarTypeDefinitionContext);
    };
    TypeDefinitionContext.prototype.objectTypeDefinition = function () {
        return this.tryGetRuleContext(0, ObjectTypeDefinitionContext);
    };
    TypeDefinitionContext.prototype.interfaceTypeDefinition = function () {
        return this.tryGetRuleContext(0, InterfaceTypeDefinitionContext);
    };
    TypeDefinitionContext.prototype.unionTypeDefinition = function () {
        return this.tryGetRuleContext(0, UnionTypeDefinitionContext);
    };
    TypeDefinitionContext.prototype.enumTypeDefinition = function () {
        return this.tryGetRuleContext(0, EnumTypeDefinitionContext);
    };
    TypeDefinitionContext.prototype.inputObjectTypeDefinition = function () {
        return this.tryGetRuleContext(0, InputObjectTypeDefinitionContext);
    };
    Object.defineProperty(TypeDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_typeDefinition; },
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
var ScalarTypeDefinitionContext = /** @class */ (function (_super) {
    __extends(ScalarTypeDefinitionContext, _super);
    function ScalarTypeDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScalarTypeDefinitionContext.prototype.NAME = function () { return this.getToken(GraphQLParser.NAME, 0); };
    ScalarTypeDefinitionContext.prototype.directives = function () {
        return this.getRuleContext(0, DirectivesContext);
    };
    ScalarTypeDefinitionContext.prototype.description = function () {
        return this.tryGetRuleContext(0, DescriptionContext);
    };
    Object.defineProperty(ScalarTypeDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_scalarTypeDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScalarTypeDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterScalarTypeDefinition) {
            listener.enterScalarTypeDefinition(this);
        }
    };
    // @Override
    ScalarTypeDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitScalarTypeDefinition) {
            listener.exitScalarTypeDefinition(this);
        }
    };
    // @Override
    ScalarTypeDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitScalarTypeDefinition) {
            return visitor.visitScalarTypeDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScalarTypeDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScalarTypeDefinitionContext = ScalarTypeDefinitionContext;
var DescriptionContext = /** @class */ (function (_super) {
    __extends(DescriptionContext, _super);
    function DescriptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DescriptionContext.prototype.String_ = function () { return this.getToken(GraphQLParser.String_, 0); };
    Object.defineProperty(DescriptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_description; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DescriptionContext.prototype.enterRule = function (listener) {
        if (listener.enterDescription) {
            listener.enterDescription(this);
        }
    };
    // @Override
    DescriptionContext.prototype.exitRule = function (listener) {
        if (listener.exitDescription) {
            listener.exitDescription(this);
        }
    };
    // @Override
    DescriptionContext.prototype.accept = function (visitor) {
        if (visitor.visitDescription) {
            return visitor.visitDescription(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DescriptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DescriptionContext = DescriptionContext;
var ObjectTypeDefinitionContext = /** @class */ (function (_super) {
    __extends(ObjectTypeDefinitionContext, _super);
    function ObjectTypeDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ObjectTypeDefinitionContext.prototype.NAME = function () { return this.getToken(GraphQLParser.NAME, 0); };
    ObjectTypeDefinitionContext.prototype.description = function () {
        return this.tryGetRuleContext(0, DescriptionContext);
    };
    ObjectTypeDefinitionContext.prototype.implementsInterfaces = function () {
        return this.tryGetRuleContext(0, ImplementsInterfacesContext);
    };
    ObjectTypeDefinitionContext.prototype.directives = function () {
        return this.tryGetRuleContext(0, DirectivesContext);
    };
    ObjectTypeDefinitionContext.prototype.fieldsDefinitions = function () {
        return this.tryGetRuleContext(0, FieldsDefinitionsContext);
    };
    Object.defineProperty(ObjectTypeDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_objectTypeDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ObjectTypeDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterObjectTypeDefinition) {
            listener.enterObjectTypeDefinition(this);
        }
    };
    // @Override
    ObjectTypeDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitObjectTypeDefinition) {
            listener.exitObjectTypeDefinition(this);
        }
    };
    // @Override
    ObjectTypeDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitObjectTypeDefinition) {
            return visitor.visitObjectTypeDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ObjectTypeDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ObjectTypeDefinitionContext = ObjectTypeDefinitionContext;
var ImplementsInterfacesContext = /** @class */ (function (_super) {
    __extends(ImplementsInterfacesContext, _super);
    function ImplementsInterfacesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImplementsInterfacesContext.prototype.type_ = function () {
        return this.getRuleContext(0, Type_Context);
    };
    ImplementsInterfacesContext.prototype.implementsInterfaces = function () {
        return this.tryGetRuleContext(0, ImplementsInterfacesContext);
    };
    Object.defineProperty(ImplementsInterfacesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_implementsInterfaces; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImplementsInterfacesContext.prototype.enterRule = function (listener) {
        if (listener.enterImplementsInterfaces) {
            listener.enterImplementsInterfaces(this);
        }
    };
    // @Override
    ImplementsInterfacesContext.prototype.exitRule = function (listener) {
        if (listener.exitImplementsInterfaces) {
            listener.exitImplementsInterfaces(this);
        }
    };
    // @Override
    ImplementsInterfacesContext.prototype.accept = function (visitor) {
        if (visitor.visitImplementsInterfaces) {
            return visitor.visitImplementsInterfaces(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImplementsInterfacesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImplementsInterfacesContext = ImplementsInterfacesContext;
var FieldsDefinitionsContext = /** @class */ (function (_super) {
    __extends(FieldsDefinitionsContext, _super);
    function FieldsDefinitionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldsDefinitionsContext.prototype.fieldsDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldsDefinitionContext);
        }
        else {
            return this.getRuleContext(i, FieldsDefinitionContext);
        }
    };
    Object.defineProperty(FieldsDefinitionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_fieldsDefinitions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldsDefinitionsContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldsDefinitions) {
            listener.enterFieldsDefinitions(this);
        }
    };
    // @Override
    FieldsDefinitionsContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldsDefinitions) {
            listener.exitFieldsDefinitions(this);
        }
    };
    // @Override
    FieldsDefinitionsContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldsDefinitions) {
            return visitor.visitFieldsDefinitions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldsDefinitionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldsDefinitionsContext = FieldsDefinitionsContext;
var FieldsDefinitionContext = /** @class */ (function (_super) {
    __extends(FieldsDefinitionContext, _super);
    function FieldsDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldsDefinitionContext.prototype.NAME = function () { return this.getToken(GraphQLParser.NAME, 0); };
    FieldsDefinitionContext.prototype.type_ = function () {
        return this.getRuleContext(0, Type_Context);
    };
    FieldsDefinitionContext.prototype.description = function () {
        return this.tryGetRuleContext(0, DescriptionContext);
    };
    FieldsDefinitionContext.prototype.argumentsDefinition = function () {
        return this.tryGetRuleContext(0, ArgumentsDefinitionContext);
    };
    FieldsDefinitionContext.prototype.directives = function () {
        return this.tryGetRuleContext(0, DirectivesContext);
    };
    Object.defineProperty(FieldsDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_fieldsDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldsDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldsDefinition) {
            listener.enterFieldsDefinition(this);
        }
    };
    // @Override
    FieldsDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldsDefinition) {
            listener.exitFieldsDefinition(this);
        }
    };
    // @Override
    FieldsDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldsDefinition) {
            return visitor.visitFieldsDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldsDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldsDefinitionContext = FieldsDefinitionContext;
var ArgumentsDefinitionContext = /** @class */ (function (_super) {
    __extends(ArgumentsDefinitionContext, _super);
    function ArgumentsDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentsDefinitionContext.prototype.inputValueDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InputValueDefinitionContext);
        }
        else {
            return this.getRuleContext(i, InputValueDefinitionContext);
        }
    };
    Object.defineProperty(ArgumentsDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_argumentsDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentsDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterArgumentsDefinition) {
            listener.enterArgumentsDefinition(this);
        }
    };
    // @Override
    ArgumentsDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitArgumentsDefinition) {
            listener.exitArgumentsDefinition(this);
        }
    };
    // @Override
    ArgumentsDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitArgumentsDefinition) {
            return visitor.visitArgumentsDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentsDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentsDefinitionContext = ArgumentsDefinitionContext;
var InputValueDefinitionContext = /** @class */ (function (_super) {
    __extends(InputValueDefinitionContext, _super);
    function InputValueDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InputValueDefinitionContext.prototype.NAME = function () { return this.getToken(GraphQLParser.NAME, 0); };
    InputValueDefinitionContext.prototype.type_ = function () {
        return this.getRuleContext(0, Type_Context);
    };
    InputValueDefinitionContext.prototype.description = function () {
        return this.tryGetRuleContext(0, DescriptionContext);
    };
    InputValueDefinitionContext.prototype.defaultValue = function () {
        return this.tryGetRuleContext(0, DefaultValueContext);
    };
    InputValueDefinitionContext.prototype.directives = function () {
        return this.tryGetRuleContext(0, DirectivesContext);
    };
    Object.defineProperty(InputValueDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_inputValueDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InputValueDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterInputValueDefinition) {
            listener.enterInputValueDefinition(this);
        }
    };
    // @Override
    InputValueDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitInputValueDefinition) {
            listener.exitInputValueDefinition(this);
        }
    };
    // @Override
    InputValueDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitInputValueDefinition) {
            return visitor.visitInputValueDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InputValueDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InputValueDefinitionContext = InputValueDefinitionContext;
var InterfaceTypeDefinitionContext = /** @class */ (function (_super) {
    __extends(InterfaceTypeDefinitionContext, _super);
    function InterfaceTypeDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterfaceTypeDefinitionContext.prototype.NAME = function () { return this.getToken(GraphQLParser.NAME, 0); };
    InterfaceTypeDefinitionContext.prototype.description = function () {
        return this.tryGetRuleContext(0, DescriptionContext);
    };
    InterfaceTypeDefinitionContext.prototype.directives = function () {
        return this.tryGetRuleContext(0, DirectivesContext);
    };
    InterfaceTypeDefinitionContext.prototype.fieldsDefinitions = function () {
        return this.tryGetRuleContext(0, FieldsDefinitionsContext);
    };
    Object.defineProperty(InterfaceTypeDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_interfaceTypeDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterfaceTypeDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterInterfaceTypeDefinition) {
            listener.enterInterfaceTypeDefinition(this);
        }
    };
    // @Override
    InterfaceTypeDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitInterfaceTypeDefinition) {
            listener.exitInterfaceTypeDefinition(this);
        }
    };
    // @Override
    InterfaceTypeDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitInterfaceTypeDefinition) {
            return visitor.visitInterfaceTypeDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterfaceTypeDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterfaceTypeDefinitionContext = InterfaceTypeDefinitionContext;
var UnionTypeDefinitionContext = /** @class */ (function (_super) {
    __extends(UnionTypeDefinitionContext, _super);
    function UnionTypeDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnionTypeDefinitionContext.prototype.NAME = function () { return this.getToken(GraphQLParser.NAME, 0); };
    UnionTypeDefinitionContext.prototype.description = function () {
        return this.tryGetRuleContext(0, DescriptionContext);
    };
    UnionTypeDefinitionContext.prototype.directives = function () {
        return this.tryGetRuleContext(0, DirectivesContext);
    };
    UnionTypeDefinitionContext.prototype.unionMemberTypes = function () {
        return this.tryGetRuleContext(0, UnionMemberTypesContext);
    };
    Object.defineProperty(UnionTypeDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_unionTypeDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnionTypeDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnionTypeDefinition) {
            listener.enterUnionTypeDefinition(this);
        }
    };
    // @Override
    UnionTypeDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnionTypeDefinition) {
            listener.exitUnionTypeDefinition(this);
        }
    };
    // @Override
    UnionTypeDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnionTypeDefinition) {
            return visitor.visitUnionTypeDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnionTypeDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnionTypeDefinitionContext = UnionTypeDefinitionContext;
var UnionMemberTypesContext = /** @class */ (function (_super) {
    __extends(UnionMemberTypesContext, _super);
    function UnionMemberTypesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnionMemberTypesContext.prototype.type_ = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Type_Context);
        }
        else {
            return this.getRuleContext(i, Type_Context);
        }
    };
    Object.defineProperty(UnionMemberTypesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_unionMemberTypes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnionMemberTypesContext.prototype.enterRule = function (listener) {
        if (listener.enterUnionMemberTypes) {
            listener.enterUnionMemberTypes(this);
        }
    };
    // @Override
    UnionMemberTypesContext.prototype.exitRule = function (listener) {
        if (listener.exitUnionMemberTypes) {
            listener.exitUnionMemberTypes(this);
        }
    };
    // @Override
    UnionMemberTypesContext.prototype.accept = function (visitor) {
        if (visitor.visitUnionMemberTypes) {
            return visitor.visitUnionMemberTypes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnionMemberTypesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnionMemberTypesContext = UnionMemberTypesContext;
var UnionTypeExtensionContext = /** @class */ (function (_super) {
    __extends(UnionTypeExtensionContext, _super);
    function UnionTypeExtensionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnionTypeExtensionContext.prototype.unionTypeDefinition = function () {
        return this.getRuleContext(0, UnionTypeDefinitionContext);
    };
    Object.defineProperty(UnionTypeExtensionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_unionTypeExtension; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnionTypeExtensionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnionTypeExtension) {
            listener.enterUnionTypeExtension(this);
        }
    };
    // @Override
    UnionTypeExtensionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnionTypeExtension) {
            listener.exitUnionTypeExtension(this);
        }
    };
    // @Override
    UnionTypeExtensionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnionTypeExtension) {
            return visitor.visitUnionTypeExtension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnionTypeExtensionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnionTypeExtensionContext = UnionTypeExtensionContext;
var EnumTypeDefinitionContext = /** @class */ (function (_super) {
    __extends(EnumTypeDefinitionContext, _super);
    function EnumTypeDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumTypeDefinitionContext.prototype.NAME = function () { return this.getToken(GraphQLParser.NAME, 0); };
    EnumTypeDefinitionContext.prototype.description = function () {
        return this.tryGetRuleContext(0, DescriptionContext);
    };
    EnumTypeDefinitionContext.prototype.directives = function () {
        return this.tryGetRuleContext(0, DirectivesContext);
    };
    EnumTypeDefinitionContext.prototype.enumValuesDefinitions = function () {
        return this.tryGetRuleContext(0, EnumValuesDefinitionsContext);
    };
    Object.defineProperty(EnumTypeDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_enumTypeDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumTypeDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumTypeDefinition) {
            listener.enterEnumTypeDefinition(this);
        }
    };
    // @Override
    EnumTypeDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumTypeDefinition) {
            listener.exitEnumTypeDefinition(this);
        }
    };
    // @Override
    EnumTypeDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumTypeDefinition) {
            return visitor.visitEnumTypeDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumTypeDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumTypeDefinitionContext = EnumTypeDefinitionContext;
var EnumValuesDefinitionsContext = /** @class */ (function (_super) {
    __extends(EnumValuesDefinitionsContext, _super);
    function EnumValuesDefinitionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumValuesDefinitionsContext.prototype.enumValue = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumValueContext);
        }
        else {
            return this.getRuleContext(i, EnumValueContext);
        }
    };
    EnumValuesDefinitionsContext.prototype.description = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DescriptionContext);
        }
        else {
            return this.getRuleContext(i, DescriptionContext);
        }
    };
    EnumValuesDefinitionsContext.prototype.directives = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DirectivesContext);
        }
        else {
            return this.getRuleContext(i, DirectivesContext);
        }
    };
    Object.defineProperty(EnumValuesDefinitionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_enumValuesDefinitions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumValuesDefinitionsContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumValuesDefinitions) {
            listener.enterEnumValuesDefinitions(this);
        }
    };
    // @Override
    EnumValuesDefinitionsContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumValuesDefinitions) {
            listener.exitEnumValuesDefinitions(this);
        }
    };
    // @Override
    EnumValuesDefinitionsContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumValuesDefinitions) {
            return visitor.visitEnumValuesDefinitions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumValuesDefinitionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumValuesDefinitionsContext = EnumValuesDefinitionsContext;
var EnumValueContext = /** @class */ (function (_super) {
    __extends(EnumValueContext, _super);
    function EnumValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumValueContext.prototype.NAME = function () { return this.getToken(GraphQLParser.NAME, 0); };
    Object.defineProperty(EnumValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_enumValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumValueContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumValue) {
            listener.enterEnumValue(this);
        }
    };
    // @Override
    EnumValueContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumValue) {
            listener.exitEnumValue(this);
        }
    };
    // @Override
    EnumValueContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumValue) {
            return visitor.visitEnumValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumValueContext = EnumValueContext;
var EnumTypeExtensionContext = /** @class */ (function (_super) {
    __extends(EnumTypeExtensionContext, _super);
    function EnumTypeExtensionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumTypeExtensionContext.prototype.enumTypeDefinition = function () {
        return this.getRuleContext(0, EnumTypeDefinitionContext);
    };
    Object.defineProperty(EnumTypeExtensionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_enumTypeExtension; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumTypeExtensionContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumTypeExtension) {
            listener.enterEnumTypeExtension(this);
        }
    };
    // @Override
    EnumTypeExtensionContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumTypeExtension) {
            listener.exitEnumTypeExtension(this);
        }
    };
    // @Override
    EnumTypeExtensionContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumTypeExtension) {
            return visitor.visitEnumTypeExtension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumTypeExtensionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumTypeExtensionContext = EnumTypeExtensionContext;
var InputObjectTypeDefinitionContext = /** @class */ (function (_super) {
    __extends(InputObjectTypeDefinitionContext, _super);
    function InputObjectTypeDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InputObjectTypeDefinitionContext.prototype.NAME = function () { return this.getToken(GraphQLParser.NAME, 0); };
    InputObjectTypeDefinitionContext.prototype.description = function () {
        return this.tryGetRuleContext(0, DescriptionContext);
    };
    InputObjectTypeDefinitionContext.prototype.directives = function () {
        return this.tryGetRuleContext(0, DirectivesContext);
    };
    InputObjectTypeDefinitionContext.prototype.inputFieldsDefinition = function () {
        return this.tryGetRuleContext(0, InputFieldsDefinitionContext);
    };
    Object.defineProperty(InputObjectTypeDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_inputObjectTypeDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InputObjectTypeDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterInputObjectTypeDefinition) {
            listener.enterInputObjectTypeDefinition(this);
        }
    };
    // @Override
    InputObjectTypeDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitInputObjectTypeDefinition) {
            listener.exitInputObjectTypeDefinition(this);
        }
    };
    // @Override
    InputObjectTypeDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitInputObjectTypeDefinition) {
            return visitor.visitInputObjectTypeDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InputObjectTypeDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InputObjectTypeDefinitionContext = InputObjectTypeDefinitionContext;
var InputFieldsDefinitionContext = /** @class */ (function (_super) {
    __extends(InputFieldsDefinitionContext, _super);
    function InputFieldsDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InputFieldsDefinitionContext.prototype.inputValueDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InputValueDefinitionContext);
        }
        else {
            return this.getRuleContext(i, InputValueDefinitionContext);
        }
    };
    Object.defineProperty(InputFieldsDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_inputFieldsDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InputFieldsDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterInputFieldsDefinition) {
            listener.enterInputFieldsDefinition(this);
        }
    };
    // @Override
    InputFieldsDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitInputFieldsDefinition) {
            listener.exitInputFieldsDefinition(this);
        }
    };
    // @Override
    InputFieldsDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitInputFieldsDefinition) {
            return visitor.visitInputFieldsDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InputFieldsDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InputFieldsDefinitionContext = InputFieldsDefinitionContext;
var DirectiveDefinitionContext = /** @class */ (function (_super) {
    __extends(DirectiveDefinitionContext, _super);
    function DirectiveDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DirectiveDefinitionContext.prototype.NAME = function () { return this.getToken(GraphQLParser.NAME, 0); };
    DirectiveDefinitionContext.prototype.directiveLocations = function () {
        return this.getRuleContext(0, DirectiveLocationsContext);
    };
    DirectiveDefinitionContext.prototype.description = function () {
        return this.tryGetRuleContext(0, DescriptionContext);
    };
    DirectiveDefinitionContext.prototype.argumentsDefinition = function () {
        return this.tryGetRuleContext(0, ArgumentsDefinitionContext);
    };
    Object.defineProperty(DirectiveDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_directiveDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DirectiveDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterDirectiveDefinition) {
            listener.enterDirectiveDefinition(this);
        }
    };
    // @Override
    DirectiveDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitDirectiveDefinition) {
            listener.exitDirectiveDefinition(this);
        }
    };
    // @Override
    DirectiveDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitDirectiveDefinition) {
            return visitor.visitDirectiveDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DirectiveDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DirectiveDefinitionContext = DirectiveDefinitionContext;
var DirectiveLocationsContext = /** @class */ (function (_super) {
    __extends(DirectiveLocationsContext, _super);
    function DirectiveLocationsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DirectiveLocationsContext.prototype.directiveLocation = function () {
        return this.getRuleContext(0, DirectiveLocationContext);
    };
    DirectiveLocationsContext.prototype.directiveLocations = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DirectiveLocationsContext);
        }
        else {
            return this.getRuleContext(i, DirectiveLocationsContext);
        }
    };
    Object.defineProperty(DirectiveLocationsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_directiveLocations; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DirectiveLocationsContext.prototype.enterRule = function (listener) {
        if (listener.enterDirectiveLocations) {
            listener.enterDirectiveLocations(this);
        }
    };
    // @Override
    DirectiveLocationsContext.prototype.exitRule = function (listener) {
        if (listener.exitDirectiveLocations) {
            listener.exitDirectiveLocations(this);
        }
    };
    // @Override
    DirectiveLocationsContext.prototype.accept = function (visitor) {
        if (visitor.visitDirectiveLocations) {
            return visitor.visitDirectiveLocations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DirectiveLocationsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DirectiveLocationsContext = DirectiveLocationsContext;
var DirectiveLocationContext = /** @class */ (function (_super) {
    __extends(DirectiveLocationContext, _super);
    function DirectiveLocationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DirectiveLocationContext.prototype.executableDirectiveLocation = function () {
        return this.tryGetRuleContext(0, ExecutableDirectiveLocationContext);
    };
    DirectiveLocationContext.prototype.typeSystemDirectiveLocation = function () {
        return this.tryGetRuleContext(0, TypeSystemDirectiveLocationContext);
    };
    Object.defineProperty(DirectiveLocationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_directiveLocation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DirectiveLocationContext.prototype.enterRule = function (listener) {
        if (listener.enterDirectiveLocation) {
            listener.enterDirectiveLocation(this);
        }
    };
    // @Override
    DirectiveLocationContext.prototype.exitRule = function (listener) {
        if (listener.exitDirectiveLocation) {
            listener.exitDirectiveLocation(this);
        }
    };
    // @Override
    DirectiveLocationContext.prototype.accept = function (visitor) {
        if (visitor.visitDirectiveLocation) {
            return visitor.visitDirectiveLocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DirectiveLocationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DirectiveLocationContext = DirectiveLocationContext;
var ExecutableDirectiveLocationContext = /** @class */ (function (_super) {
    __extends(ExecutableDirectiveLocationContext, _super);
    function ExecutableDirectiveLocationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ExecutableDirectiveLocationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_executableDirectiveLocation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExecutableDirectiveLocationContext.prototype.enterRule = function (listener) {
        if (listener.enterExecutableDirectiveLocation) {
            listener.enterExecutableDirectiveLocation(this);
        }
    };
    // @Override
    ExecutableDirectiveLocationContext.prototype.exitRule = function (listener) {
        if (listener.exitExecutableDirectiveLocation) {
            listener.exitExecutableDirectiveLocation(this);
        }
    };
    // @Override
    ExecutableDirectiveLocationContext.prototype.accept = function (visitor) {
        if (visitor.visitExecutableDirectiveLocation) {
            return visitor.visitExecutableDirectiveLocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExecutableDirectiveLocationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExecutableDirectiveLocationContext = ExecutableDirectiveLocationContext;
var TypeSystemDirectiveLocationContext = /** @class */ (function (_super) {
    __extends(TypeSystemDirectiveLocationContext, _super);
    function TypeSystemDirectiveLocationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(TypeSystemDirectiveLocationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_typeSystemDirectiveLocation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeSystemDirectiveLocationContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeSystemDirectiveLocation) {
            listener.enterTypeSystemDirectiveLocation(this);
        }
    };
    // @Override
    TypeSystemDirectiveLocationContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeSystemDirectiveLocation) {
            listener.exitTypeSystemDirectiveLocation(this);
        }
    };
    // @Override
    TypeSystemDirectiveLocationContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeSystemDirectiveLocation) {
            return visitor.visitTypeSystemDirectiveLocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeSystemDirectiveLocationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeSystemDirectiveLocationContext = TypeSystemDirectiveLocationContext;
var TypeSystemExtensionContext = /** @class */ (function (_super) {
    __extends(TypeSystemExtensionContext, _super);
    function TypeSystemExtensionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeSystemExtensionContext.prototype.schemaExtension = function () {
        return this.tryGetRuleContext(0, SchemaExtensionContext);
    };
    TypeSystemExtensionContext.prototype.typeExtension = function () {
        return this.tryGetRuleContext(0, TypeExtensionContext);
    };
    Object.defineProperty(TypeSystemExtensionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_typeSystemExtension; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeSystemExtensionContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeSystemExtension) {
            listener.enterTypeSystemExtension(this);
        }
    };
    // @Override
    TypeSystemExtensionContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeSystemExtension) {
            listener.exitTypeSystemExtension(this);
        }
    };
    // @Override
    TypeSystemExtensionContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeSystemExtension) {
            return visitor.visitTypeSystemExtension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeSystemExtensionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeSystemExtensionContext = TypeSystemExtensionContext;
var SchemaExtensionContext = /** @class */ (function (_super) {
    __extends(SchemaExtensionContext, _super);
    function SchemaExtensionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SchemaExtensionContext.prototype.schemaDefinition = function () {
        return this.getRuleContext(0, SchemaDefinitionContext);
    };
    Object.defineProperty(SchemaExtensionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_schemaExtension; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SchemaExtensionContext.prototype.enterRule = function (listener) {
        if (listener.enterSchemaExtension) {
            listener.enterSchemaExtension(this);
        }
    };
    // @Override
    SchemaExtensionContext.prototype.exitRule = function (listener) {
        if (listener.exitSchemaExtension) {
            listener.exitSchemaExtension(this);
        }
    };
    // @Override
    SchemaExtensionContext.prototype.accept = function (visitor) {
        if (visitor.visitSchemaExtension) {
            return visitor.visitSchemaExtension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SchemaExtensionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SchemaExtensionContext = SchemaExtensionContext;
var TypeExtensionContext = /** @class */ (function (_super) {
    __extends(TypeExtensionContext, _super);
    function TypeExtensionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeExtensionContext.prototype.typeDefinition = function () {
        return this.getRuleContext(0, TypeDefinitionContext);
    };
    Object.defineProperty(TypeExtensionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_typeExtension; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeExtensionContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeExtension) {
            listener.enterTypeExtension(this);
        }
    };
    // @Override
    TypeExtensionContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeExtension) {
            listener.exitTypeExtension(this);
        }
    };
    // @Override
    TypeExtensionContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeExtension) {
            return visitor.visitTypeExtension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeExtensionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeExtensionContext = TypeExtensionContext;
var ExecDefinitionContext = /** @class */ (function (_super) {
    __extends(ExecDefinitionContext, _super);
    function ExecDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExecDefinitionContext.prototype.operationDefinition = function () {
        return this.tryGetRuleContext(0, OperationDefinitionContext);
    };
    ExecDefinitionContext.prototype.fragmentDefinition = function () {
        return this.tryGetRuleContext(0, FragmentDefinitionContext);
    };
    Object.defineProperty(ExecDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_execDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExecDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterExecDefinition) {
            listener.enterExecDefinition(this);
        }
    };
    // @Override
    ExecDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitExecDefinition) {
            listener.exitExecDefinition(this);
        }
    };
    // @Override
    ExecDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitExecDefinition) {
            return visitor.visitExecDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExecDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExecDefinitionContext = ExecDefinitionContext;
var OperationDefinitionContext = /** @class */ (function (_super) {
    __extends(OperationDefinitionContext, _super);
    function OperationDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperationDefinitionContext.prototype.selectionSet = function () {
        return this.getRuleContext(0, SelectionSetContext);
    };
    OperationDefinitionContext.prototype.operationType = function () {
        return this.tryGetRuleContext(0, OperationTypeContext);
    };
    OperationDefinitionContext.prototype.NAME = function () { return this.tryGetToken(GraphQLParser.NAME, 0); };
    OperationDefinitionContext.prototype.variableDefinitions = function () {
        return this.tryGetRuleContext(0, VariableDefinitionsContext);
    };
    OperationDefinitionContext.prototype.directives = function () {
        return this.tryGetRuleContext(0, DirectivesContext);
    };
    Object.defineProperty(OperationDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_operationDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperationDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterOperationDefinition) {
            listener.enterOperationDefinition(this);
        }
    };
    // @Override
    OperationDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitOperationDefinition) {
            listener.exitOperationDefinition(this);
        }
    };
    // @Override
    OperationDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitOperationDefinition) {
            return visitor.visitOperationDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperationDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperationDefinitionContext = OperationDefinitionContext;
var SelectionSetContext = /** @class */ (function (_super) {
    __extends(SelectionSetContext, _super);
    function SelectionSetContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelectionSetContext.prototype.selection = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SelectionContext);
        }
        else {
            return this.getRuleContext(i, SelectionContext);
        }
    };
    Object.defineProperty(SelectionSetContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_selectionSet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SelectionSetContext.prototype.enterRule = function (listener) {
        if (listener.enterSelectionSet) {
            listener.enterSelectionSet(this);
        }
    };
    // @Override
    SelectionSetContext.prototype.exitRule = function (listener) {
        if (listener.exitSelectionSet) {
            listener.exitSelectionSet(this);
        }
    };
    // @Override
    SelectionSetContext.prototype.accept = function (visitor) {
        if (visitor.visitSelectionSet) {
            return visitor.visitSelectionSet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SelectionSetContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SelectionSetContext = SelectionSetContext;
var OperationTypeContext = /** @class */ (function (_super) {
    __extends(OperationTypeContext, _super);
    function OperationTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OperationTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_operationType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperationTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterOperationType) {
            listener.enterOperationType(this);
        }
    };
    // @Override
    OperationTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitOperationType) {
            listener.exitOperationType(this);
        }
    };
    // @Override
    OperationTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitOperationType) {
            return visitor.visitOperationType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperationTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperationTypeContext = OperationTypeContext;
var SelectionContext = /** @class */ (function (_super) {
    __extends(SelectionContext, _super);
    function SelectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelectionContext.prototype.field = function () {
        return this.tryGetRuleContext(0, FieldContext);
    };
    SelectionContext.prototype.fragmentSpread = function () {
        return this.tryGetRuleContext(0, FragmentSpreadContext);
    };
    SelectionContext.prototype.inlineFragment = function () {
        return this.tryGetRuleContext(0, InlineFragmentContext);
    };
    Object.defineProperty(SelectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_selection; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SelectionContext.prototype.enterRule = function (listener) {
        if (listener.enterSelection) {
            listener.enterSelection(this);
        }
    };
    // @Override
    SelectionContext.prototype.exitRule = function (listener) {
        if (listener.exitSelection) {
            listener.exitSelection(this);
        }
    };
    // @Override
    SelectionContext.prototype.accept = function (visitor) {
        if (visitor.visitSelection) {
            return visitor.visitSelection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SelectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SelectionContext = SelectionContext;
var FieldContext = /** @class */ (function (_super) {
    __extends(FieldContext, _super);
    function FieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldContext.prototype.fieldName = function () {
        return this.getRuleContext(0, FieldNameContext);
    };
    FieldContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    FieldContext.prototype.directives = function () {
        return this.tryGetRuleContext(0, DirectivesContext);
    };
    FieldContext.prototype.selectionSet = function () {
        return this.tryGetRuleContext(0, SelectionSetContext);
    };
    Object.defineProperty(FieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_field; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldContext.prototype.enterRule = function (listener) {
        if (listener.enterField) {
            listener.enterField(this);
        }
    };
    // @Override
    FieldContext.prototype.exitRule = function (listener) {
        if (listener.exitField) {
            listener.exitField(this);
        }
    };
    // @Override
    FieldContext.prototype.accept = function (visitor) {
        if (visitor.visitField) {
            return visitor.visitField(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldContext = FieldContext;
var FieldNameContext = /** @class */ (function (_super) {
    __extends(FieldNameContext, _super);
    function FieldNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldNameContext.prototype.alias = function () {
        return this.tryGetRuleContext(0, AliasContext);
    };
    FieldNameContext.prototype.NAME = function () { return this.tryGetToken(GraphQLParser.NAME, 0); };
    Object.defineProperty(FieldNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_fieldName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldNameContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldName) {
            listener.enterFieldName(this);
        }
    };
    // @Override
    FieldNameContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldName) {
            listener.exitFieldName(this);
        }
    };
    // @Override
    FieldNameContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldName) {
            return visitor.visitFieldName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldNameContext = FieldNameContext;
var AliasContext = /** @class */ (function (_super) {
    __extends(AliasContext, _super);
    function AliasContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AliasContext.prototype.NAME = function (i) {
        if (i === undefined) {
            return this.getTokens(GraphQLParser.NAME);
        }
        else {
            return this.getToken(GraphQLParser.NAME, i);
        }
    };
    Object.defineProperty(AliasContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_alias; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AliasContext.prototype.enterRule = function (listener) {
        if (listener.enterAlias) {
            listener.enterAlias(this);
        }
    };
    // @Override
    AliasContext.prototype.exitRule = function (listener) {
        if (listener.exitAlias) {
            listener.exitAlias(this);
        }
    };
    // @Override
    AliasContext.prototype.accept = function (visitor) {
        if (visitor.visitAlias) {
            return visitor.visitAlias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AliasContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AliasContext = AliasContext;
var ArgumentsContext = /** @class */ (function (_super) {
    __extends(ArgumentsContext, _super);
    function ArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentsContext.prototype.argument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentContext);
        }
        else {
            return this.getRuleContext(i, ArgumentContext);
        }
    };
    Object.defineProperty(ArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_arguments; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentsContext.prototype.enterRule = function (listener) {
        if (listener.enterArguments) {
            listener.enterArguments(this);
        }
    };
    // @Override
    ArgumentsContext.prototype.exitRule = function (listener) {
        if (listener.exitArguments) {
            listener.exitArguments(this);
        }
    };
    // @Override
    ArgumentsContext.prototype.accept = function (visitor) {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentsContext = ArgumentsContext;
var ArgumentContext = /** @class */ (function (_super) {
    __extends(ArgumentContext, _super);
    function ArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentContext.prototype.NAME = function () { return this.getToken(GraphQLParser.NAME, 0); };
    ArgumentContext.prototype.valueOrVariable = function () {
        return this.getRuleContext(0, ValueOrVariableContext);
    };
    Object.defineProperty(ArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_argument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentContext.prototype.enterRule = function (listener) {
        if (listener.enterArgument) {
            listener.enterArgument(this);
        }
    };
    // @Override
    ArgumentContext.prototype.exitRule = function (listener) {
        if (listener.exitArgument) {
            listener.exitArgument(this);
        }
    };
    // @Override
    ArgumentContext.prototype.accept = function (visitor) {
        if (visitor.visitArgument) {
            return visitor.visitArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentContext = ArgumentContext;
var FragmentSpreadContext = /** @class */ (function (_super) {
    __extends(FragmentSpreadContext, _super);
    function FragmentSpreadContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FragmentSpreadContext.prototype.fragmentName = function () {
        return this.getRuleContext(0, FragmentNameContext);
    };
    FragmentSpreadContext.prototype.directives = function () {
        return this.tryGetRuleContext(0, DirectivesContext);
    };
    Object.defineProperty(FragmentSpreadContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_fragmentSpread; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FragmentSpreadContext.prototype.enterRule = function (listener) {
        if (listener.enterFragmentSpread) {
            listener.enterFragmentSpread(this);
        }
    };
    // @Override
    FragmentSpreadContext.prototype.exitRule = function (listener) {
        if (listener.exitFragmentSpread) {
            listener.exitFragmentSpread(this);
        }
    };
    // @Override
    FragmentSpreadContext.prototype.accept = function (visitor) {
        if (visitor.visitFragmentSpread) {
            return visitor.visitFragmentSpread(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FragmentSpreadContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FragmentSpreadContext = FragmentSpreadContext;
var InlineFragmentContext = /** @class */ (function (_super) {
    __extends(InlineFragmentContext, _super);
    function InlineFragmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InlineFragmentContext.prototype.typeCondition = function () {
        return this.getRuleContext(0, TypeConditionContext);
    };
    InlineFragmentContext.prototype.selectionSet = function () {
        return this.getRuleContext(0, SelectionSetContext);
    };
    InlineFragmentContext.prototype.directives = function () {
        return this.tryGetRuleContext(0, DirectivesContext);
    };
    Object.defineProperty(InlineFragmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_inlineFragment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InlineFragmentContext.prototype.enterRule = function (listener) {
        if (listener.enterInlineFragment) {
            listener.enterInlineFragment(this);
        }
    };
    // @Override
    InlineFragmentContext.prototype.exitRule = function (listener) {
        if (listener.exitInlineFragment) {
            listener.exitInlineFragment(this);
        }
    };
    // @Override
    InlineFragmentContext.prototype.accept = function (visitor) {
        if (visitor.visitInlineFragment) {
            return visitor.visitInlineFragment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InlineFragmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InlineFragmentContext = InlineFragmentContext;
var FragmentDefinitionContext = /** @class */ (function (_super) {
    __extends(FragmentDefinitionContext, _super);
    function FragmentDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FragmentDefinitionContext.prototype.fragmentName = function () {
        return this.getRuleContext(0, FragmentNameContext);
    };
    FragmentDefinitionContext.prototype.typeCondition = function () {
        return this.getRuleContext(0, TypeConditionContext);
    };
    FragmentDefinitionContext.prototype.selectionSet = function () {
        return this.getRuleContext(0, SelectionSetContext);
    };
    FragmentDefinitionContext.prototype.directives = function () {
        return this.tryGetRuleContext(0, DirectivesContext);
    };
    Object.defineProperty(FragmentDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_fragmentDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FragmentDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterFragmentDefinition) {
            listener.enterFragmentDefinition(this);
        }
    };
    // @Override
    FragmentDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitFragmentDefinition) {
            listener.exitFragmentDefinition(this);
        }
    };
    // @Override
    FragmentDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitFragmentDefinition) {
            return visitor.visitFragmentDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FragmentDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FragmentDefinitionContext = FragmentDefinitionContext;
var FragmentNameContext = /** @class */ (function (_super) {
    __extends(FragmentNameContext, _super);
    function FragmentNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FragmentNameContext.prototype.NAME = function () { return this.getToken(GraphQLParser.NAME, 0); };
    Object.defineProperty(FragmentNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_fragmentName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FragmentNameContext.prototype.enterRule = function (listener) {
        if (listener.enterFragmentName) {
            listener.enterFragmentName(this);
        }
    };
    // @Override
    FragmentNameContext.prototype.exitRule = function (listener) {
        if (listener.exitFragmentName) {
            listener.exitFragmentName(this);
        }
    };
    // @Override
    FragmentNameContext.prototype.accept = function (visitor) {
        if (visitor.visitFragmentName) {
            return visitor.visitFragmentName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FragmentNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FragmentNameContext = FragmentNameContext;
var DirectivesContext = /** @class */ (function (_super) {
    __extends(DirectivesContext, _super);
    function DirectivesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DirectivesContext.prototype.directive = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DirectiveContext);
        }
        else {
            return this.getRuleContext(i, DirectiveContext);
        }
    };
    Object.defineProperty(DirectivesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_directives; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DirectivesContext.prototype.enterRule = function (listener) {
        if (listener.enterDirectives) {
            listener.enterDirectives(this);
        }
    };
    // @Override
    DirectivesContext.prototype.exitRule = function (listener) {
        if (listener.exitDirectives) {
            listener.exitDirectives(this);
        }
    };
    // @Override
    DirectivesContext.prototype.accept = function (visitor) {
        if (visitor.visitDirectives) {
            return visitor.visitDirectives(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DirectivesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DirectivesContext = DirectivesContext;
var DirectiveContext = /** @class */ (function (_super) {
    __extends(DirectiveContext, _super);
    function DirectiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DirectiveContext.prototype.NAME = function () { return this.getToken(GraphQLParser.NAME, 0); };
    DirectiveContext.prototype.valueOrVariable = function () {
        return this.tryGetRuleContext(0, ValueOrVariableContext);
    };
    DirectiveContext.prototype.argument = function () {
        return this.tryGetRuleContext(0, ArgumentContext);
    };
    Object.defineProperty(DirectiveContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_directive; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DirectiveContext.prototype.enterRule = function (listener) {
        if (listener.enterDirective) {
            listener.enterDirective(this);
        }
    };
    // @Override
    DirectiveContext.prototype.exitRule = function (listener) {
        if (listener.exitDirective) {
            listener.exitDirective(this);
        }
    };
    // @Override
    DirectiveContext.prototype.accept = function (visitor) {
        if (visitor.visitDirective) {
            return visitor.visitDirective(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DirectiveContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DirectiveContext = DirectiveContext;
var TypeConditionContext = /** @class */ (function (_super) {
    __extends(TypeConditionContext, _super);
    function TypeConditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeConditionContext.prototype.typeName = function () {
        return this.getRuleContext(0, TypeNameContext);
    };
    Object.defineProperty(TypeConditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_typeCondition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeConditionContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeCondition) {
            listener.enterTypeCondition(this);
        }
    };
    // @Override
    TypeConditionContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeCondition) {
            listener.exitTypeCondition(this);
        }
    };
    // @Override
    TypeConditionContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeCondition) {
            return visitor.visitTypeCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeConditionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeConditionContext = TypeConditionContext;
var VariableDefinitionsContext = /** @class */ (function (_super) {
    __extends(VariableDefinitionsContext, _super);
    function VariableDefinitionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDefinitionsContext.prototype.variableDefinition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDefinitionContext);
        }
        else {
            return this.getRuleContext(i, VariableDefinitionContext);
        }
    };
    Object.defineProperty(VariableDefinitionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_variableDefinitions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDefinitionsContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDefinitions) {
            listener.enterVariableDefinitions(this);
        }
    };
    // @Override
    VariableDefinitionsContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDefinitions) {
            listener.exitVariableDefinitions(this);
        }
    };
    // @Override
    VariableDefinitionsContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDefinitions) {
            return visitor.visitVariableDefinitions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDefinitionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDefinitionsContext = VariableDefinitionsContext;
var VariableDefinitionContext = /** @class */ (function (_super) {
    __extends(VariableDefinitionContext, _super);
    function VariableDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableDefinitionContext.prototype.variable = function () {
        return this.getRuleContext(0, VariableContext);
    };
    VariableDefinitionContext.prototype.type_ = function () {
        return this.getRuleContext(0, Type_Context);
    };
    VariableDefinitionContext.prototype.defaultValue = function () {
        return this.tryGetRuleContext(0, DefaultValueContext);
    };
    Object.defineProperty(VariableDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_variableDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariableDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableDefinition) {
            listener.enterVariableDefinition(this);
        }
    };
    // @Override
    VariableDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableDefinition) {
            listener.exitVariableDefinition(this);
        }
    };
    // @Override
    VariableDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableDefinition) {
            return visitor.visitVariableDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableDefinitionContext = VariableDefinitionContext;
var VariableContext = /** @class */ (function (_super) {
    __extends(VariableContext, _super);
    function VariableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableContext.prototype.NAME = function () { return this.getToken(GraphQLParser.NAME, 0); };
    Object.defineProperty(VariableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_variable; },
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
var DefaultValueContext = /** @class */ (function (_super) {
    __extends(DefaultValueContext, _super);
    function DefaultValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefaultValueContext.prototype.value = function () {
        return this.getRuleContext(0, ValueContext);
    };
    Object.defineProperty(DefaultValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_defaultValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefaultValueContext.prototype.enterRule = function (listener) {
        if (listener.enterDefaultValue) {
            listener.enterDefaultValue(this);
        }
    };
    // @Override
    DefaultValueContext.prototype.exitRule = function (listener) {
        if (listener.exitDefaultValue) {
            listener.exitDefaultValue(this);
        }
    };
    // @Override
    DefaultValueContext.prototype.accept = function (visitor) {
        if (visitor.visitDefaultValue) {
            return visitor.visitDefaultValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefaultValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefaultValueContext = DefaultValueContext;
var ValueOrVariableContext = /** @class */ (function (_super) {
    __extends(ValueOrVariableContext, _super);
    function ValueOrVariableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueOrVariableContext.prototype.value = function () {
        return this.tryGetRuleContext(0, ValueContext);
    };
    ValueOrVariableContext.prototype.variable = function () {
        return this.tryGetRuleContext(0, VariableContext);
    };
    Object.defineProperty(ValueOrVariableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_valueOrVariable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValueOrVariableContext.prototype.enterRule = function (listener) {
        if (listener.enterValueOrVariable) {
            listener.enterValueOrVariable(this);
        }
    };
    // @Override
    ValueOrVariableContext.prototype.exitRule = function (listener) {
        if (listener.exitValueOrVariable) {
            listener.exitValueOrVariable(this);
        }
    };
    // @Override
    ValueOrVariableContext.prototype.accept = function (visitor) {
        if (visitor.visitValueOrVariable) {
            return visitor.visitValueOrVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValueOrVariableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueOrVariableContext = ValueOrVariableContext;
var ValueContext = /** @class */ (function (_super) {
    __extends(ValueContext, _super);
    function ValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_value; },
        enumerable: true,
        configurable: true
    });
    ValueContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return ValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueContext = ValueContext;
var StringValueContext = /** @class */ (function (_super) {
    __extends(StringValueContext, _super);
    function StringValueContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    StringValueContext.prototype.String_ = function () { return this.getToken(GraphQLParser.String_, 0); };
    // @Override
    StringValueContext.prototype.enterRule = function (listener) {
        if (listener.enterStringValue) {
            listener.enterStringValue(this);
        }
    };
    // @Override
    StringValueContext.prototype.exitRule = function (listener) {
        if (listener.exitStringValue) {
            listener.exitStringValue(this);
        }
    };
    // @Override
    StringValueContext.prototype.accept = function (visitor) {
        if (visitor.visitStringValue) {
            return visitor.visitStringValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringValueContext;
}(ValueContext));
exports.StringValueContext = StringValueContext;
var NumberValueContext = /** @class */ (function (_super) {
    __extends(NumberValueContext, _super);
    function NumberValueContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NumberValueContext.prototype.NUMBER = function () { return this.getToken(GraphQLParser.NUMBER, 0); };
    // @Override
    NumberValueContext.prototype.enterRule = function (listener) {
        if (listener.enterNumberValue) {
            listener.enterNumberValue(this);
        }
    };
    // @Override
    NumberValueContext.prototype.exitRule = function (listener) {
        if (listener.exitNumberValue) {
            listener.exitNumberValue(this);
        }
    };
    // @Override
    NumberValueContext.prototype.accept = function (visitor) {
        if (visitor.visitNumberValue) {
            return visitor.visitNumberValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumberValueContext;
}(ValueContext));
exports.NumberValueContext = NumberValueContext;
var BooleanValueContext = /** @class */ (function (_super) {
    __extends(BooleanValueContext, _super);
    function BooleanValueContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    BooleanValueContext.prototype.BooleanLiteral = function () { return this.getToken(GraphQLParser.BooleanLiteral, 0); };
    // @Override
    BooleanValueContext.prototype.enterRule = function (listener) {
        if (listener.enterBooleanValue) {
            listener.enterBooleanValue(this);
        }
    };
    // @Override
    BooleanValueContext.prototype.exitRule = function (listener) {
        if (listener.exitBooleanValue) {
            listener.exitBooleanValue(this);
        }
    };
    // @Override
    BooleanValueContext.prototype.accept = function (visitor) {
        if (visitor.visitBooleanValue) {
            return visitor.visitBooleanValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BooleanValueContext;
}(ValueContext));
exports.BooleanValueContext = BooleanValueContext;
var ArrayValueContext = /** @class */ (function (_super) {
    __extends(ArrayValueContext, _super);
    function ArrayValueContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ArrayValueContext.prototype.array = function () {
        return this.getRuleContext(0, ArrayContext);
    };
    // @Override
    ArrayValueContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayValue) {
            listener.enterArrayValue(this);
        }
    };
    // @Override
    ArrayValueContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayValue) {
            listener.exitArrayValue(this);
        }
    };
    // @Override
    ArrayValueContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayValue) {
            return visitor.visitArrayValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayValueContext;
}(ValueContext));
exports.ArrayValueContext = ArrayValueContext;
var IdValueContext = /** @class */ (function (_super) {
    __extends(IdValueContext, _super);
    function IdValueContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    IdValueContext.prototype.ID = function () { return this.getToken(GraphQLParser.ID, 0); };
    // @Override
    IdValueContext.prototype.enterRule = function (listener) {
        if (listener.enterIdValue) {
            listener.enterIdValue(this);
        }
    };
    // @Override
    IdValueContext.prototype.exitRule = function (listener) {
        if (listener.exitIdValue) {
            listener.exitIdValue(this);
        }
    };
    // @Override
    IdValueContext.prototype.accept = function (visitor) {
        if (visitor.visitIdValue) {
            return visitor.visitIdValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdValueContext;
}(ValueContext));
exports.IdValueContext = IdValueContext;
var NullValueContext = /** @class */ (function (_super) {
    __extends(NullValueContext, _super);
    function NullValueContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    // @Override
    NullValueContext.prototype.enterRule = function (listener) {
        if (listener.enterNullValue) {
            listener.enterNullValue(this);
        }
    };
    // @Override
    NullValueContext.prototype.exitRule = function (listener) {
        if (listener.exitNullValue) {
            listener.exitNullValue(this);
        }
    };
    // @Override
    NullValueContext.prototype.accept = function (visitor) {
        if (visitor.visitNullValue) {
            return visitor.visitNullValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NullValueContext;
}(ValueContext));
exports.NullValueContext = NullValueContext;
var Type_Context = /** @class */ (function (_super) {
    __extends(Type_Context, _super);
    function Type_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Type_Context.prototype.typeName = function () {
        return this.tryGetRuleContext(0, TypeNameContext);
    };
    Type_Context.prototype.nonNullType = function () {
        return this.tryGetRuleContext(0, NonNullTypeContext);
    };
    Type_Context.prototype.listType = function () {
        return this.tryGetRuleContext(0, ListTypeContext);
    };
    Object.defineProperty(Type_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_type_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Type_Context.prototype.enterRule = function (listener) {
        if (listener.enterType_) {
            listener.enterType_(this);
        }
    };
    // @Override
    Type_Context.prototype.exitRule = function (listener) {
        if (listener.exitType_) {
            listener.exitType_(this);
        }
    };
    // @Override
    Type_Context.prototype.accept = function (visitor) {
        if (visitor.visitType_) {
            return visitor.visitType_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Type_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Type_Context = Type_Context;
var TypeNameContext = /** @class */ (function (_super) {
    __extends(TypeNameContext, _super);
    function TypeNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeNameContext.prototype.NAME = function () { return this.getToken(GraphQLParser.NAME, 0); };
    Object.defineProperty(TypeNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_typeName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypeNameContext.prototype.enterRule = function (listener) {
        if (listener.enterTypeName) {
            listener.enterTypeName(this);
        }
    };
    // @Override
    TypeNameContext.prototype.exitRule = function (listener) {
        if (listener.exitTypeName) {
            listener.exitTypeName(this);
        }
    };
    // @Override
    TypeNameContext.prototype.accept = function (visitor) {
        if (visitor.visitTypeName) {
            return visitor.visitTypeName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypeNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypeNameContext = TypeNameContext;
var ListTypeContext = /** @class */ (function (_super) {
    __extends(ListTypeContext, _super);
    function ListTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListTypeContext.prototype.type_ = function () {
        return this.getRuleContext(0, Type_Context);
    };
    Object.defineProperty(ListTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_listType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterListType) {
            listener.enterListType(this);
        }
    };
    // @Override
    ListTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitListType) {
            listener.exitListType(this);
        }
    };
    // @Override
    ListTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitListType) {
            return visitor.visitListType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListTypeContext = ListTypeContext;
var NonNullTypeContext = /** @class */ (function (_super) {
    __extends(NonNullTypeContext, _super);
    function NonNullTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(NonNullTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_nonNullType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NonNullTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterNonNullType) {
            listener.enterNonNullType(this);
        }
    };
    // @Override
    NonNullTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitNonNullType) {
            listener.exitNonNullType(this);
        }
    };
    // @Override
    NonNullTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitNonNullType) {
            return visitor.visitNonNullType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NonNullTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NonNullTypeContext = NonNullTypeContext;
var ArrayContext = /** @class */ (function (_super) {
    __extends(ArrayContext, _super);
    function ArrayContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayContext.prototype.value = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }
        else {
            return this.getRuleContext(i, ValueContext);
        }
    };
    Object.defineProperty(ArrayContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return GraphQLParser.RULE_array; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArrayContext.prototype.enterRule = function (listener) {
        if (listener.enterArray) {
            listener.enterArray(this);
        }
    };
    // @Override
    ArrayContext.prototype.exitRule = function (listener) {
        if (listener.exitArray) {
            listener.exitArray(this);
        }
    };
    // @Override
    ArrayContext.prototype.accept = function (visitor) {
        if (visitor.visitArray) {
            return visitor.visitArray(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArrayContext = ArrayContext;
