"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/webidl/WebIDL.g4 by ANTLR 4.7.3-SNAPSHOT
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
var WebIDLParser = /** @class */ (function (_super) {
    __extends(WebIDLParser, _super);
    function WebIDLParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(WebIDLParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(WebIDLParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return WebIDLParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIDLParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "WebIDL.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIDLParser.prototype, "ruleNames", {
        // @Override
        get: function () { return WebIDLParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebIDLParser.prototype, "serializedATN", {
        // @Override
        get: function () { return WebIDLParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    WebIDLParser.prototype.webIDL = function () {
        var _localctx = new WebIDLContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, WebIDLParser.RULE_webIDL);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 198;
                this.definitions();
                this.state = 199;
                this.match(WebIDLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.definitions = function () {
        var _localctx = new DefinitionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, WebIDLParser.RULE_definitions);
        try {
            this.state = 206;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__0:
                case WebIDLParser.T__1:
                case WebIDLParser.T__5:
                case WebIDLParser.T__6:
                case WebIDLParser.T__7:
                case WebIDLParser.T__8:
                case WebIDLParser.T__10:
                case WebIDLParser.T__14:
                case WebIDLParser.T__16:
                case WebIDLParser.T__18:
                case WebIDLParser.T__20:
                case WebIDLParser.T__27:
                case WebIDLParser.T__28:
                case WebIDLParser.T__29:
                case WebIDLParser.T__30:
                case WebIDLParser.T__31:
                case WebIDLParser.T__32:
                case WebIDLParser.T__33:
                case WebIDLParser.T__34:
                case WebIDLParser.T__35:
                case WebIDLParser.T__36:
                case WebIDLParser.T__37:
                case WebIDLParser.T__39:
                case WebIDLParser.T__42:
                case WebIDLParser.T__43:
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__64:
                case WebIDLParser.T__65:
                case WebIDLParser.T__66:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.T__78:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 201;
                        this.extendedAttributeList();
                        this.state = 202;
                        this.definition();
                        this.state = 203;
                        this.definitions();
                    }
                    break;
                case WebIDLParser.EOF:
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
    WebIDLParser.prototype.definition = function () {
        var _localctx = new DefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, WebIDLParser.RULE_definition);
        try {
            this.state = 214;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__0:
                case WebIDLParser.T__1:
                case WebIDLParser.T__5:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 208;
                        this.callbackOrInterface();
                    }
                    break;
                case WebIDLParser.T__6:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 209;
                        this.partial();
                    }
                    break;
                case WebIDLParser.T__7:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 210;
                        this.dictionary();
                    }
                    break;
                case WebIDLParser.T__14:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 211;
                        this.enum_();
                    }
                    break;
                case WebIDLParser.T__18:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 212;
                        this.typedef();
                    }
                    break;
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 213;
                        this.implementsStatement();
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
    WebIDLParser.prototype.callbackOrInterface = function () {
        var _localctx = new CallbackOrInterfaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, WebIDLParser.RULE_callbackOrInterface);
        try {
            this.state = 220;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__0:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 216;
                        this.match(WebIDLParser.T__0);
                        this.state = 217;
                        this.callbackRestOrInterface();
                    }
                    break;
                case WebIDLParser.T__1:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 218;
                        this.interface_();
                    }
                    break;
                case WebIDLParser.T__5:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 219;
                        this.class_();
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
    WebIDLParser.prototype.callbackRestOrInterface = function () {
        var _localctx = new CallbackRestOrInterfaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, WebIDLParser.RULE_callbackRestOrInterface);
        try {
            this.state = 224;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 222;
                        this.callbackRest();
                    }
                    break;
                case WebIDLParser.T__1:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 223;
                        this.interface_();
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
    WebIDLParser.prototype.interface_ = function () {
        var _localctx = new Interface_Context(this._ctx, this.state);
        this.enterRule(_localctx, 10, WebIDLParser.RULE_interface_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 226;
                this.match(WebIDLParser.T__1);
                this.state = 227;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 228;
                this.inheritance();
                this.state = 229;
                this.match(WebIDLParser.T__2);
                this.state = 230;
                this.interfaceMembers();
                this.state = 231;
                this.match(WebIDLParser.T__3);
                this.state = 232;
                this.match(WebIDLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.class_ = function () {
        var _localctx = new Class_Context(this._ctx, this.state);
        this.enterRule(_localctx, 12, WebIDLParser.RULE_class_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 234;
                this.match(WebIDLParser.T__5);
                this.state = 235;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 236;
                this.extension();
                this.state = 237;
                this.match(WebIDLParser.T__2);
                this.state = 238;
                this.interfaceMembers();
                this.state = 239;
                this.match(WebIDLParser.T__3);
                this.state = 240;
                this.match(WebIDLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.partial = function () {
        var _localctx = new PartialContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, WebIDLParser.RULE_partial);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 242;
                this.match(WebIDLParser.T__6);
                this.state = 243;
                this.partialDefinition();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.partialDefinition = function () {
        var _localctx = new PartialDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, WebIDLParser.RULE_partialDefinition);
        try {
            this.state = 247;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 245;
                        this.partialInterface();
                    }
                    break;
                case WebIDLParser.T__7:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 246;
                        this.partialDictionary();
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
    WebIDLParser.prototype.partialInterface = function () {
        var _localctx = new PartialInterfaceContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, WebIDLParser.RULE_partialInterface);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 249;
                this.match(WebIDLParser.T__1);
                this.state = 250;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 251;
                this.match(WebIDLParser.T__2);
                this.state = 252;
                this.interfaceMembers();
                this.state = 253;
                this.match(WebIDLParser.T__3);
                this.state = 254;
                this.match(WebIDLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.interfaceMembers = function () {
        var _localctx = new InterfaceMembersContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, WebIDLParser.RULE_interfaceMembers);
        try {
            this.state = 261;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__0:
                case WebIDLParser.T__1:
                case WebIDLParser.T__5:
                case WebIDLParser.T__6:
                case WebIDLParser.T__7:
                case WebIDLParser.T__8:
                case WebIDLParser.T__10:
                case WebIDLParser.T__14:
                case WebIDLParser.T__16:
                case WebIDLParser.T__18:
                case WebIDLParser.T__20:
                case WebIDLParser.T__27:
                case WebIDLParser.T__28:
                case WebIDLParser.T__29:
                case WebIDLParser.T__30:
                case WebIDLParser.T__31:
                case WebIDLParser.T__32:
                case WebIDLParser.T__33:
                case WebIDLParser.T__34:
                case WebIDLParser.T__35:
                case WebIDLParser.T__36:
                case WebIDLParser.T__37:
                case WebIDLParser.T__39:
                case WebIDLParser.T__42:
                case WebIDLParser.T__43:
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__64:
                case WebIDLParser.T__65:
                case WebIDLParser.T__66:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.T__78:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 256;
                        this.extendedAttributeList();
                        this.state = 257;
                        this.interfaceMember();
                        this.state = 258;
                        this.interfaceMembers();
                    }
                    break;
                case WebIDLParser.T__3:
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
    WebIDLParser.prototype.interfaceMember = function () {
        var _localctx = new InterfaceMemberContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, WebIDLParser.RULE_interfaceMember);
        try {
            this.state = 273;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__20:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 263;
                        this.const_();
                    }
                    break;
                case WebIDLParser.T__16:
                case WebIDLParser.T__28:
                case WebIDLParser.T__34:
                case WebIDLParser.T__35:
                case WebIDLParser.T__36:
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__64:
                case WebIDLParser.T__65:
                case WebIDLParser.T__66:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.T__78:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 264;
                        this.operation();
                    }
                    break;
                case WebIDLParser.T__27:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 265;
                        this.serializer();
                    }
                    break;
                case WebIDLParser.T__30:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 266;
                        this.stringifier();
                    }
                    break;
                case WebIDLParser.T__31:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 267;
                        this.staticMember();
                    }
                    break;
                case WebIDLParser.T__39:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 268;
                        this.iterable();
                    }
                    break;
                case WebIDLParser.T__32:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 269;
                        this.readonlyMember();
                    }
                    break;
                case WebIDLParser.T__29:
                case WebIDLParser.T__33:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 270;
                        this.readWriteAttribute();
                    }
                    break;
                case WebIDLParser.T__42:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 271;
                        this.readWriteMaplike();
                    }
                    break;
                case WebIDLParser.T__43:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 272;
                        this.readWriteSetlike();
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
    WebIDLParser.prototype.dictionary = function () {
        var _localctx = new DictionaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, WebIDLParser.RULE_dictionary);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 275;
                this.match(WebIDLParser.T__7);
                this.state = 276;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 277;
                this.inheritance();
                this.state = 278;
                this.match(WebIDLParser.T__2);
                this.state = 279;
                this.dictionaryMembers();
                this.state = 280;
                this.match(WebIDLParser.T__3);
                this.state = 281;
                this.match(WebIDLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.dictionaryMembers = function () {
        var _localctx = new DictionaryMembersContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, WebIDLParser.RULE_dictionaryMembers);
        try {
            this.state = 288;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__0:
                case WebIDLParser.T__1:
                case WebIDLParser.T__5:
                case WebIDLParser.T__6:
                case WebIDLParser.T__7:
                case WebIDLParser.T__8:
                case WebIDLParser.T__10:
                case WebIDLParser.T__14:
                case WebIDLParser.T__16:
                case WebIDLParser.T__18:
                case WebIDLParser.T__20:
                case WebIDLParser.T__27:
                case WebIDLParser.T__28:
                case WebIDLParser.T__29:
                case WebIDLParser.T__30:
                case WebIDLParser.T__31:
                case WebIDLParser.T__32:
                case WebIDLParser.T__33:
                case WebIDLParser.T__34:
                case WebIDLParser.T__35:
                case WebIDLParser.T__36:
                case WebIDLParser.T__37:
                case WebIDLParser.T__39:
                case WebIDLParser.T__42:
                case WebIDLParser.T__43:
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__64:
                case WebIDLParser.T__65:
                case WebIDLParser.T__66:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.T__78:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 283;
                        this.extendedAttributeList();
                        this.state = 284;
                        this.dictionaryMember();
                        this.state = 285;
                        this.dictionaryMembers();
                    }
                    break;
                case WebIDLParser.T__3:
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
    WebIDLParser.prototype.dictionaryMember = function () {
        var _localctx = new DictionaryMemberContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, WebIDLParser.RULE_dictionaryMember);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 290;
                this.required();
                this.state = 291;
                this.type();
                this.state = 292;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 293;
                this.default_();
                this.state = 294;
                this.match(WebIDLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.required = function () {
        var _localctx = new RequiredContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, WebIDLParser.RULE_required);
        try {
            this.state = 298;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__8:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 296;
                        this.match(WebIDLParser.T__8);
                    }
                    break;
                case WebIDLParser.T__16:
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__65:
                case WebIDLParser.T__66:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.T__78:
                case WebIDLParser.IDENTIFIER_WEBIDL:
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
    WebIDLParser.prototype.partialDictionary = function () {
        var _localctx = new PartialDictionaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, WebIDLParser.RULE_partialDictionary);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 300;
                this.match(WebIDLParser.T__7);
                this.state = 301;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 302;
                this.match(WebIDLParser.T__2);
                this.state = 303;
                this.dictionaryMembers();
                this.state = 304;
                this.match(WebIDLParser.T__3);
                this.state = 305;
                this.match(WebIDLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.default_ = function () {
        var _localctx = new Default_Context(this._ctx, this.state);
        this.enterRule(_localctx, 34, WebIDLParser.RULE_default_);
        try {
            this.state = 310;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__9:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 307;
                        this.match(WebIDLParser.T__9);
                        this.state = 308;
                        this.defaultValue();
                    }
                    break;
                case WebIDLParser.T__4:
                case WebIDLParser.T__15:
                case WebIDLParser.T__17:
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
    WebIDLParser.prototype.defaultValue = function () {
        var _localctx = new DefaultValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, WebIDLParser.RULE_defaultValue);
        try {
            this.state = 316;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__21:
                case WebIDLParser.T__22:
                case WebIDLParser.T__23:
                case WebIDLParser.T__24:
                case WebIDLParser.T__25:
                case WebIDLParser.T__26:
                case WebIDLParser.INTEGER_WEBIDL:
                case WebIDLParser.FLOAT_WEBIDL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 312;
                        this.constValue();
                    }
                    break;
                case WebIDLParser.STRING_WEBIDL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 313;
                        this.match(WebIDLParser.STRING_WEBIDL);
                    }
                    break;
                case WebIDLParser.T__10:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 314;
                        this.match(WebIDLParser.T__10);
                        this.state = 315;
                        this.match(WebIDLParser.T__11);
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
    WebIDLParser.prototype.inheritance = function () {
        var _localctx = new InheritanceContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, WebIDLParser.RULE_inheritance);
        try {
            this.state = 321;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__12:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 318;
                        this.match(WebIDLParser.T__12);
                        this.state = 319;
                        this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                    }
                    break;
                case WebIDLParser.T__2:
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
    WebIDLParser.prototype.extension = function () {
        var _localctx = new ExtensionContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, WebIDLParser.RULE_extension);
        try {
            this.state = 326;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__13:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 323;
                        this.match(WebIDLParser.T__13);
                        this.state = 324;
                        this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                    }
                    break;
                case WebIDLParser.T__2:
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
    WebIDLParser.prototype.enum_ = function () {
        var _localctx = new Enum_Context(this._ctx, this.state);
        this.enterRule(_localctx, 42, WebIDLParser.RULE_enum_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 328;
                this.match(WebIDLParser.T__14);
                this.state = 329;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 330;
                this.match(WebIDLParser.T__2);
                this.state = 331;
                this.enumValueList();
                this.state = 332;
                this.match(WebIDLParser.T__3);
                this.state = 333;
                this.match(WebIDLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.enumValueList = function () {
        var _localctx = new EnumValueListContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, WebIDLParser.RULE_enumValueList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 335;
                this.match(WebIDLParser.STRING_WEBIDL);
                this.state = 336;
                this.enumValueListComma();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.enumValueListComma = function () {
        var _localctx = new EnumValueListCommaContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, WebIDLParser.RULE_enumValueListComma);
        try {
            this.state = 341;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 338;
                        this.match(WebIDLParser.T__15);
                        this.state = 339;
                        this.enumValueListString();
                    }
                    break;
                case WebIDLParser.T__3:
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
    WebIDLParser.prototype.enumValueListString = function () {
        var _localctx = new EnumValueListStringContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, WebIDLParser.RULE_enumValueListString);
        try {
            this.state = 346;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.STRING_WEBIDL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 343;
                        this.match(WebIDLParser.STRING_WEBIDL);
                        this.state = 344;
                        this.enumValueListComma();
                    }
                    break;
                case WebIDLParser.T__3:
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
    WebIDLParser.prototype.callbackRest = function () {
        var _localctx = new CallbackRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, WebIDLParser.RULE_callbackRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 348;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 349;
                this.match(WebIDLParser.T__9);
                this.state = 350;
                this.returnType();
                this.state = 351;
                this.match(WebIDLParser.T__16);
                this.state = 352;
                this.argumentList();
                this.state = 353;
                this.match(WebIDLParser.T__17);
                this.state = 354;
                this.match(WebIDLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.typedef = function () {
        var _localctx = new TypedefContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, WebIDLParser.RULE_typedef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 356;
                this.match(WebIDLParser.T__18);
                this.state = 357;
                this.type();
                this.state = 358;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 359;
                this.match(WebIDLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.implementsStatement = function () {
        var _localctx = new ImplementsStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, WebIDLParser.RULE_implementsStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 361;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 362;
                this.match(WebIDLParser.T__19);
                this.state = 363;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 364;
                this.match(WebIDLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.const_ = function () {
        var _localctx = new Const_Context(this._ctx, this.state);
        this.enterRule(_localctx, 56, WebIDLParser.RULE_const_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 366;
                this.match(WebIDLParser.T__20);
                this.state = 367;
                this.constType();
                this.state = 368;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 369;
                this.match(WebIDLParser.T__9);
                this.state = 370;
                this.constValue();
                this.state = 371;
                this.match(WebIDLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.constValue = function () {
        var _localctx = new ConstValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, WebIDLParser.RULE_constValue);
        try {
            this.state = 377;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__22:
                case WebIDLParser.T__23:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 373;
                        this.booleanLiteral();
                    }
                    break;
                case WebIDLParser.T__24:
                case WebIDLParser.T__25:
                case WebIDLParser.T__26:
                case WebIDLParser.FLOAT_WEBIDL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 374;
                        this.floatLiteral();
                    }
                    break;
                case WebIDLParser.INTEGER_WEBIDL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 375;
                        this.match(WebIDLParser.INTEGER_WEBIDL);
                    }
                    break;
                case WebIDLParser.T__21:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 376;
                        this.match(WebIDLParser.T__21);
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
    WebIDLParser.prototype.booleanLiteral = function () {
        var _localctx = new BooleanLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, WebIDLParser.RULE_booleanLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 379;
                _la = this._input.LA(1);
                if (!(_la === WebIDLParser.T__22 || _la === WebIDLParser.T__23)) {
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
    WebIDLParser.prototype.floatLiteral = function () {
        var _localctx = new FloatLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, WebIDLParser.RULE_floatLiteral);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 381;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WebIDLParser.T__24) | (1 << WebIDLParser.T__25) | (1 << WebIDLParser.T__26))) !== 0) || _la === WebIDLParser.FLOAT_WEBIDL)) {
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
    WebIDLParser.prototype.serializer = function () {
        var _localctx = new SerializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, WebIDLParser.RULE_serializer);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 383;
                this.match(WebIDLParser.T__27);
                this.state = 384;
                this.serializerRest();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.serializerRest = function () {
        var _localctx = new SerializerRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, WebIDLParser.RULE_serializerRest);
        try {
            this.state = 392;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__16:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 386;
                        this.operationRest();
                    }
                    break;
                case WebIDLParser.T__9:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 387;
                        this.match(WebIDLParser.T__9);
                        this.state = 388;
                        this.serializationPattern();
                        this.state = 389;
                        this.match(WebIDLParser.T__4);
                    }
                    break;
                case WebIDLParser.T__4:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 391;
                        this.match(WebIDLParser.T__4);
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
    WebIDLParser.prototype.serializationPattern = function () {
        var _localctx = new SerializationPatternContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, WebIDLParser.RULE_serializationPattern);
        try {
            this.state = 403;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__2:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 394;
                        this.match(WebIDLParser.T__2);
                        this.state = 395;
                        this.serializationPatternMap();
                        this.state = 396;
                        this.match(WebIDLParser.T__3);
                    }
                    break;
                case WebIDLParser.T__10:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 398;
                        this.match(WebIDLParser.T__10);
                        this.state = 399;
                        this.serializationPatternList();
                        this.state = 400;
                        this.match(WebIDLParser.T__11);
                    }
                    break;
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 402;
                        this.match(WebIDLParser.IDENTIFIER_WEBIDL);
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
    WebIDLParser.prototype.serializationPatternMap = function () {
        var _localctx = new SerializationPatternMapContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, WebIDLParser.RULE_serializationPatternMap);
        try {
            this.state = 411;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__28:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 405;
                        this.match(WebIDLParser.T__28);
                    }
                    break;
                case WebIDLParser.T__29:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 406;
                        this.match(WebIDLParser.T__29);
                        this.state = 407;
                        this.identifiers();
                    }
                    break;
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 408;
                        this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                        this.state = 409;
                        this.identifiers();
                    }
                    break;
                case WebIDLParser.T__3:
                    this.enterOuterAlt(_localctx, 4);
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
    WebIDLParser.prototype.serializationPatternList = function () {
        var _localctx = new SerializationPatternListContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, WebIDLParser.RULE_serializationPatternList);
        try {
            this.state = 417;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__28:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 413;
                        this.match(WebIDLParser.T__28);
                    }
                    break;
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 414;
                        this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                        this.state = 415;
                        this.identifiers();
                    }
                    break;
                case WebIDLParser.T__11:
                    this.enterOuterAlt(_localctx, 3);
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
    WebIDLParser.prototype.stringifier = function () {
        var _localctx = new StringifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, WebIDLParser.RULE_stringifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 419;
                this.match(WebIDLParser.T__30);
                this.state = 420;
                this.stringifierRest();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.stringifierRest = function () {
        var _localctx = new StringifierRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, WebIDLParser.RULE_stringifierRest);
        try {
            this.state = 429;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__32:
                case WebIDLParser.T__33:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 422;
                        this.readOnly();
                        this.state = 423;
                        this.attributeRest();
                    }
                    break;
                case WebIDLParser.T__16:
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__64:
                case WebIDLParser.T__65:
                case WebIDLParser.T__66:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.T__78:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 425;
                        this.returnType();
                        this.state = 426;
                        this.operationRest();
                    }
                    break;
                case WebIDLParser.T__4:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 428;
                        this.match(WebIDLParser.T__4);
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
    WebIDLParser.prototype.staticMember = function () {
        var _localctx = new StaticMemberContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, WebIDLParser.RULE_staticMember);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 431;
                this.match(WebIDLParser.T__31);
                this.state = 432;
                this.staticMemberRest();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.staticMemberRest = function () {
        var _localctx = new StaticMemberRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, WebIDLParser.RULE_staticMemberRest);
        try {
            this.state = 440;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__32:
                case WebIDLParser.T__33:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 434;
                        this.readOnly();
                        this.state = 435;
                        this.attributeRest();
                    }
                    break;
                case WebIDLParser.T__16:
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__64:
                case WebIDLParser.T__65:
                case WebIDLParser.T__66:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.T__78:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 437;
                        this.returnType();
                        this.state = 438;
                        this.operationRest();
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
    WebIDLParser.prototype.readonlyMember = function () {
        var _localctx = new ReadonlyMemberContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, WebIDLParser.RULE_readonlyMember);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 442;
                this.match(WebIDLParser.T__32);
                this.state = 443;
                this.readonlyMemberRest();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.readonlyMemberRest = function () {
        var _localctx = new ReadonlyMemberRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, WebIDLParser.RULE_readonlyMemberRest);
        try {
            this.state = 448;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__33:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 445;
                        this.attributeRest();
                    }
                    break;
                case WebIDLParser.T__42:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 446;
                        this.readWriteMaplike();
                    }
                    break;
                case WebIDLParser.T__43:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 447;
                        this.readWriteSetlike();
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
    WebIDLParser.prototype.readWriteAttribute = function () {
        var _localctx = new ReadWriteAttributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, WebIDLParser.RULE_readWriteAttribute);
        try {
            this.state = 455;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__29:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 450;
                        this.match(WebIDLParser.T__29);
                        this.state = 451;
                        this.readOnly();
                        this.state = 452;
                        this.attributeRest();
                    }
                    break;
                case WebIDLParser.T__33:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 454;
                        this.attributeRest();
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
    WebIDLParser.prototype.attributeRest = function () {
        var _localctx = new AttributeRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, WebIDLParser.RULE_attributeRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 457;
                this.match(WebIDLParser.T__33);
                this.state = 458;
                this.type();
                this.state = 459;
                this.attributeName();
                this.state = 460;
                this.match(WebIDLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.attributeName = function () {
        var _localctx = new AttributeNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, WebIDLParser.RULE_attributeName);
        try {
            this.state = 464;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__8:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 462;
                        this.attributeNameKeyword();
                    }
                    break;
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 463;
                        this.match(WebIDLParser.IDENTIFIER_WEBIDL);
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
    WebIDLParser.prototype.attributeNameKeyword = function () {
        var _localctx = new AttributeNameKeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, WebIDLParser.RULE_attributeNameKeyword);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 466;
                this.match(WebIDLParser.T__8);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.inherit = function () {
        var _localctx = new InheritContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, WebIDLParser.RULE_inherit);
        try {
            this.state = 470;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__29:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 468;
                        this.match(WebIDLParser.T__29);
                    }
                    break;
                case WebIDLParser.EOF:
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
    WebIDLParser.prototype.readOnly = function () {
        var _localctx = new ReadOnlyContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, WebIDLParser.RULE_readOnly);
        try {
            this.state = 474;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__32:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 472;
                        this.match(WebIDLParser.T__32);
                    }
                    break;
                case WebIDLParser.T__33:
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
    WebIDLParser.prototype.operation = function () {
        var _localctx = new OperationContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, WebIDLParser.RULE_operation);
        try {
            this.state = 480;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__16:
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__64:
                case WebIDLParser.T__65:
                case WebIDLParser.T__66:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.T__78:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 476;
                        this.returnType();
                        this.state = 477;
                        this.operationRest();
                    }
                    break;
                case WebIDLParser.T__28:
                case WebIDLParser.T__34:
                case WebIDLParser.T__35:
                case WebIDLParser.T__36:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 479;
                        this.specialOperation();
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
    WebIDLParser.prototype.specialOperation = function () {
        var _localctx = new SpecialOperationContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, WebIDLParser.RULE_specialOperation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 482;
                this.special();
                this.state = 483;
                this.specials();
                this.state = 484;
                this.returnType();
                this.state = 485;
                this.operationRest();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.specials = function () {
        var _localctx = new SpecialsContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, WebIDLParser.RULE_specials);
        try {
            this.state = 491;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__28:
                case WebIDLParser.T__34:
                case WebIDLParser.T__35:
                case WebIDLParser.T__36:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 487;
                        this.special();
                        this.state = 488;
                        this.specials();
                    }
                    break;
                case WebIDLParser.T__16:
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__64:
                case WebIDLParser.T__65:
                case WebIDLParser.T__66:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.T__78:
                case WebIDLParser.IDENTIFIER_WEBIDL:
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
    WebIDLParser.prototype.special = function () {
        var _localctx = new SpecialContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, WebIDLParser.RULE_special);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 493;
                _la = this._input.LA(1);
                if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (WebIDLParser.T__28 - 29)) | (1 << (WebIDLParser.T__34 - 29)) | (1 << (WebIDLParser.T__35 - 29)) | (1 << (WebIDLParser.T__36 - 29)))) !== 0))) {
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
    WebIDLParser.prototype.operationRest = function () {
        var _localctx = new OperationRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, WebIDLParser.RULE_operationRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 495;
                this.optionalIdentifier();
                this.state = 496;
                this.match(WebIDLParser.T__16);
                this.state = 497;
                this.argumentList();
                this.state = 498;
                this.match(WebIDLParser.T__17);
                this.state = 499;
                this.match(WebIDLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.optionalIdentifier = function () {
        var _localctx = new OptionalIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, WebIDLParser.RULE_optionalIdentifier);
        try {
            this.state = 503;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 501;
                        this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                    }
                    break;
                case WebIDLParser.T__16:
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
    WebIDLParser.prototype.argumentList = function () {
        var _localctx = new ArgumentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, WebIDLParser.RULE_argumentList);
        try {
            this.state = 509;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__0:
                case WebIDLParser.T__1:
                case WebIDLParser.T__5:
                case WebIDLParser.T__6:
                case WebIDLParser.T__7:
                case WebIDLParser.T__8:
                case WebIDLParser.T__10:
                case WebIDLParser.T__14:
                case WebIDLParser.T__16:
                case WebIDLParser.T__18:
                case WebIDLParser.T__20:
                case WebIDLParser.T__27:
                case WebIDLParser.T__28:
                case WebIDLParser.T__29:
                case WebIDLParser.T__30:
                case WebIDLParser.T__31:
                case WebIDLParser.T__32:
                case WebIDLParser.T__33:
                case WebIDLParser.T__34:
                case WebIDLParser.T__35:
                case WebIDLParser.T__36:
                case WebIDLParser.T__37:
                case WebIDLParser.T__39:
                case WebIDLParser.T__42:
                case WebIDLParser.T__43:
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__64:
                case WebIDLParser.T__65:
                case WebIDLParser.T__66:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.T__78:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 505;
                        this.argument();
                        this.state = 506;
                        this.arguments();
                    }
                    break;
                case WebIDLParser.T__17:
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
    WebIDLParser.prototype.arguments = function () {
        var _localctx = new ArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, WebIDLParser.RULE_arguments);
        try {
            this.state = 516;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 511;
                        this.match(WebIDLParser.T__15);
                        this.state = 512;
                        this.argument();
                        this.state = 513;
                        this.arguments();
                    }
                    break;
                case WebIDLParser.T__17:
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
    WebIDLParser.prototype.argument = function () {
        var _localctx = new ArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, WebIDLParser.RULE_argument);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 518;
                this.extendedAttributeList();
                this.state = 519;
                this.optionalOrRequiredArgument();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.optionalOrRequiredArgument = function () {
        var _localctx = new OptionalOrRequiredArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, WebIDLParser.RULE_optionalOrRequiredArgument);
        try {
            this.state = 530;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__37:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 521;
                        this.match(WebIDLParser.T__37);
                        this.state = 522;
                        this.type();
                        this.state = 523;
                        this.argumentName();
                        this.state = 524;
                        this.default_();
                    }
                    break;
                case WebIDLParser.T__16:
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__65:
                case WebIDLParser.T__66:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.T__78:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 526;
                        this.type();
                        this.state = 527;
                        this.ellipsis();
                        this.state = 528;
                        this.argumentName();
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
    WebIDLParser.prototype.argumentName = function () {
        var _localctx = new ArgumentNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, WebIDLParser.RULE_argumentName);
        try {
            this.state = 534;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__0:
                case WebIDLParser.T__1:
                case WebIDLParser.T__6:
                case WebIDLParser.T__7:
                case WebIDLParser.T__8:
                case WebIDLParser.T__14:
                case WebIDLParser.T__18:
                case WebIDLParser.T__19:
                case WebIDLParser.T__20:
                case WebIDLParser.T__27:
                case WebIDLParser.T__28:
                case WebIDLParser.T__29:
                case WebIDLParser.T__30:
                case WebIDLParser.T__31:
                case WebIDLParser.T__33:
                case WebIDLParser.T__34:
                case WebIDLParser.T__35:
                case WebIDLParser.T__36:
                case WebIDLParser.T__39:
                case WebIDLParser.T__42:
                case WebIDLParser.T__43:
                case WebIDLParser.T__65:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 532;
                        this.argumentNameKeyword();
                    }
                    break;
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 533;
                        this.match(WebIDLParser.IDENTIFIER_WEBIDL);
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
    WebIDLParser.prototype.ellipsis = function () {
        var _localctx = new EllipsisContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, WebIDLParser.RULE_ellipsis);
        try {
            this.state = 538;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__38:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 536;
                        this.match(WebIDLParser.T__38);
                    }
                    break;
                case WebIDLParser.T__0:
                case WebIDLParser.T__1:
                case WebIDLParser.T__6:
                case WebIDLParser.T__7:
                case WebIDLParser.T__8:
                case WebIDLParser.T__14:
                case WebIDLParser.T__18:
                case WebIDLParser.T__19:
                case WebIDLParser.T__20:
                case WebIDLParser.T__27:
                case WebIDLParser.T__28:
                case WebIDLParser.T__29:
                case WebIDLParser.T__30:
                case WebIDLParser.T__31:
                case WebIDLParser.T__33:
                case WebIDLParser.T__34:
                case WebIDLParser.T__35:
                case WebIDLParser.T__36:
                case WebIDLParser.T__39:
                case WebIDLParser.T__42:
                case WebIDLParser.T__43:
                case WebIDLParser.T__65:
                case WebIDLParser.IDENTIFIER_WEBIDL:
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
    WebIDLParser.prototype.iterable = function () {
        var _localctx = new IterableContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, WebIDLParser.RULE_iterable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 540;
                this.match(WebIDLParser.T__39);
                this.state = 541;
                this.match(WebIDLParser.T__40);
                this.state = 542;
                this.type();
                this.state = 543;
                this.optionalType();
                this.state = 544;
                this.match(WebIDLParser.T__41);
                this.state = 545;
                this.match(WebIDLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.optionalType = function () {
        var _localctx = new OptionalTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, WebIDLParser.RULE_optionalType);
        try {
            this.state = 550;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 547;
                        this.match(WebIDLParser.T__15);
                        this.state = 548;
                        this.type();
                    }
                    break;
                case WebIDLParser.T__41:
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
    WebIDLParser.prototype.readWriteMaplike = function () {
        var _localctx = new ReadWriteMaplikeContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, WebIDLParser.RULE_readWriteMaplike);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 552;
                this.maplikeRest();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.readWriteSetlike = function () {
        var _localctx = new ReadWriteSetlikeContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, WebIDLParser.RULE_readWriteSetlike);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 554;
                this.setlikeRest();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.maplikeRest = function () {
        var _localctx = new MaplikeRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, WebIDLParser.RULE_maplikeRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 556;
                this.match(WebIDLParser.T__42);
                this.state = 557;
                this.match(WebIDLParser.T__40);
                this.state = 558;
                this.type();
                this.state = 559;
                this.match(WebIDLParser.T__15);
                this.state = 560;
                this.type();
                this.state = 561;
                this.match(WebIDLParser.T__41);
                this.state = 562;
                this.match(WebIDLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.setlikeRest = function () {
        var _localctx = new SetlikeRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, WebIDLParser.RULE_setlikeRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 564;
                this.match(WebIDLParser.T__43);
                this.state = 565;
                this.match(WebIDLParser.T__40);
                this.state = 566;
                this.type();
                this.state = 567;
                this.match(WebIDLParser.T__41);
                this.state = 568;
                this.match(WebIDLParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.extendedAttributeList = function () {
        var _localctx = new ExtendedAttributeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, WebIDLParser.RULE_extendedAttributeList);
        try {
            this.state = 576;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__10:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 570;
                        this.match(WebIDLParser.T__10);
                        this.state = 571;
                        this.extendedAttribute();
                        this.state = 572;
                        this.extendedAttributes();
                        this.state = 573;
                        this.match(WebIDLParser.T__11);
                    }
                    break;
                case WebIDLParser.T__0:
                case WebIDLParser.T__1:
                case WebIDLParser.T__5:
                case WebIDLParser.T__6:
                case WebIDLParser.T__7:
                case WebIDLParser.T__8:
                case WebIDLParser.T__14:
                case WebIDLParser.T__16:
                case WebIDLParser.T__18:
                case WebIDLParser.T__20:
                case WebIDLParser.T__27:
                case WebIDLParser.T__28:
                case WebIDLParser.T__29:
                case WebIDLParser.T__30:
                case WebIDLParser.T__31:
                case WebIDLParser.T__32:
                case WebIDLParser.T__33:
                case WebIDLParser.T__34:
                case WebIDLParser.T__35:
                case WebIDLParser.T__36:
                case WebIDLParser.T__37:
                case WebIDLParser.T__39:
                case WebIDLParser.T__42:
                case WebIDLParser.T__43:
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__64:
                case WebIDLParser.T__65:
                case WebIDLParser.T__66:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.T__78:
                case WebIDLParser.IDENTIFIER_WEBIDL:
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
    WebIDLParser.prototype.extendedAttributes = function () {
        var _localctx = new ExtendedAttributesContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, WebIDLParser.RULE_extendedAttributes);
        try {
            this.state = 583;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 578;
                        this.match(WebIDLParser.T__15);
                        this.state = 579;
                        this.extendedAttribute();
                        this.state = 580;
                        this.extendedAttributes();
                    }
                    break;
                case WebIDLParser.T__11:
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
    WebIDLParser.prototype.extendedAttribute = function () {
        var _localctx = new ExtendedAttributeContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, WebIDLParser.RULE_extendedAttribute);
        try {
            this.state = 603;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__16:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 585;
                        this.match(WebIDLParser.T__16);
                        this.state = 586;
                        this.extendedAttributeInner();
                        this.state = 587;
                        this.match(WebIDLParser.T__17);
                        this.state = 588;
                        this.extendedAttributeRest();
                    }
                    break;
                case WebIDLParser.T__10:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 590;
                        this.match(WebIDLParser.T__10);
                        this.state = 591;
                        this.extendedAttributeInner();
                        this.state = 592;
                        this.match(WebIDLParser.T__11);
                        this.state = 593;
                        this.extendedAttributeRest();
                    }
                    break;
                case WebIDLParser.T__2:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 595;
                        this.match(WebIDLParser.T__2);
                        this.state = 596;
                        this.extendedAttributeInner();
                        this.state = 597;
                        this.match(WebIDLParser.T__3);
                        this.state = 598;
                        this.extendedAttributeRest();
                    }
                    break;
                case WebIDLParser.T__0:
                case WebIDLParser.T__1:
                case WebIDLParser.T__4:
                case WebIDLParser.T__6:
                case WebIDLParser.T__7:
                case WebIDLParser.T__8:
                case WebIDLParser.T__9:
                case WebIDLParser.T__12:
                case WebIDLParser.T__14:
                case WebIDLParser.T__18:
                case WebIDLParser.T__19:
                case WebIDLParser.T__20:
                case WebIDLParser.T__21:
                case WebIDLParser.T__22:
                case WebIDLParser.T__23:
                case WebIDLParser.T__24:
                case WebIDLParser.T__25:
                case WebIDLParser.T__26:
                case WebIDLParser.T__27:
                case WebIDLParser.T__28:
                case WebIDLParser.T__29:
                case WebIDLParser.T__30:
                case WebIDLParser.T__31:
                case WebIDLParser.T__33:
                case WebIDLParser.T__34:
                case WebIDLParser.T__35:
                case WebIDLParser.T__36:
                case WebIDLParser.T__37:
                case WebIDLParser.T__38:
                case WebIDLParser.T__39:
                case WebIDLParser.T__40:
                case WebIDLParser.T__41:
                case WebIDLParser.T__42:
                case WebIDLParser.T__43:
                case WebIDLParser.T__44:
                case WebIDLParser.T__45:
                case WebIDLParser.T__46:
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__60:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__64:
                case WebIDLParser.T__65:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.INTEGER_WEBIDL:
                case WebIDLParser.FLOAT_WEBIDL:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                case WebIDLParser.STRING_WEBIDL:
                case WebIDLParser.OTHER_WEBIDL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 600;
                        this.other();
                        this.state = 601;
                        this.extendedAttributeRest();
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
    WebIDLParser.prototype.extendedAttributeRest = function () {
        var _localctx = new ExtendedAttributeRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, WebIDLParser.RULE_extendedAttributeRest);
        try {
            this.state = 607;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__0:
                case WebIDLParser.T__1:
                case WebIDLParser.T__2:
                case WebIDLParser.T__4:
                case WebIDLParser.T__6:
                case WebIDLParser.T__7:
                case WebIDLParser.T__8:
                case WebIDLParser.T__9:
                case WebIDLParser.T__10:
                case WebIDLParser.T__12:
                case WebIDLParser.T__14:
                case WebIDLParser.T__16:
                case WebIDLParser.T__18:
                case WebIDLParser.T__19:
                case WebIDLParser.T__20:
                case WebIDLParser.T__21:
                case WebIDLParser.T__22:
                case WebIDLParser.T__23:
                case WebIDLParser.T__24:
                case WebIDLParser.T__25:
                case WebIDLParser.T__26:
                case WebIDLParser.T__27:
                case WebIDLParser.T__28:
                case WebIDLParser.T__29:
                case WebIDLParser.T__30:
                case WebIDLParser.T__31:
                case WebIDLParser.T__33:
                case WebIDLParser.T__34:
                case WebIDLParser.T__35:
                case WebIDLParser.T__36:
                case WebIDLParser.T__37:
                case WebIDLParser.T__38:
                case WebIDLParser.T__39:
                case WebIDLParser.T__40:
                case WebIDLParser.T__41:
                case WebIDLParser.T__42:
                case WebIDLParser.T__43:
                case WebIDLParser.T__44:
                case WebIDLParser.T__45:
                case WebIDLParser.T__46:
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__60:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__64:
                case WebIDLParser.T__65:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.INTEGER_WEBIDL:
                case WebIDLParser.FLOAT_WEBIDL:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                case WebIDLParser.STRING_WEBIDL:
                case WebIDLParser.OTHER_WEBIDL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 605;
                        this.extendedAttribute();
                    }
                    break;
                case WebIDLParser.T__11:
                case WebIDLParser.T__15:
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
    WebIDLParser.prototype.extendedAttributeInner = function () {
        var _localctx = new ExtendedAttributeInnerContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, WebIDLParser.RULE_extendedAttributeInner);
        try {
            this.state = 628;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__16:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 609;
                        this.match(WebIDLParser.T__16);
                        this.state = 610;
                        this.extendedAttributeInner();
                        this.state = 611;
                        this.match(WebIDLParser.T__17);
                        this.state = 612;
                        this.extendedAttributeInner();
                    }
                    break;
                case WebIDLParser.T__10:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 614;
                        this.match(WebIDLParser.T__10);
                        this.state = 615;
                        this.extendedAttributeInner();
                        this.state = 616;
                        this.match(WebIDLParser.T__11);
                        this.state = 617;
                        this.extendedAttributeInner();
                    }
                    break;
                case WebIDLParser.T__2:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 619;
                        this.match(WebIDLParser.T__2);
                        this.state = 620;
                        this.extendedAttributeInner();
                        this.state = 621;
                        this.match(WebIDLParser.T__3);
                        this.state = 622;
                        this.extendedAttributeInner();
                    }
                    break;
                case WebIDLParser.T__0:
                case WebIDLParser.T__1:
                case WebIDLParser.T__4:
                case WebIDLParser.T__6:
                case WebIDLParser.T__7:
                case WebIDLParser.T__8:
                case WebIDLParser.T__9:
                case WebIDLParser.T__12:
                case WebIDLParser.T__14:
                case WebIDLParser.T__15:
                case WebIDLParser.T__18:
                case WebIDLParser.T__19:
                case WebIDLParser.T__20:
                case WebIDLParser.T__21:
                case WebIDLParser.T__22:
                case WebIDLParser.T__23:
                case WebIDLParser.T__24:
                case WebIDLParser.T__25:
                case WebIDLParser.T__26:
                case WebIDLParser.T__27:
                case WebIDLParser.T__28:
                case WebIDLParser.T__29:
                case WebIDLParser.T__30:
                case WebIDLParser.T__31:
                case WebIDLParser.T__33:
                case WebIDLParser.T__34:
                case WebIDLParser.T__35:
                case WebIDLParser.T__36:
                case WebIDLParser.T__37:
                case WebIDLParser.T__38:
                case WebIDLParser.T__39:
                case WebIDLParser.T__40:
                case WebIDLParser.T__41:
                case WebIDLParser.T__42:
                case WebIDLParser.T__43:
                case WebIDLParser.T__44:
                case WebIDLParser.T__45:
                case WebIDLParser.T__46:
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__60:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__64:
                case WebIDLParser.T__65:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.INTEGER_WEBIDL:
                case WebIDLParser.FLOAT_WEBIDL:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                case WebIDLParser.STRING_WEBIDL:
                case WebIDLParser.OTHER_WEBIDL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 624;
                        this.otherOrComma();
                        this.state = 625;
                        this.extendedAttributeInner();
                    }
                    break;
                case WebIDLParser.T__3:
                case WebIDLParser.T__11:
                case WebIDLParser.T__17:
                    this.enterOuterAlt(_localctx, 5);
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
    WebIDLParser.prototype.other = function () {
        var _localctx = new OtherContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, WebIDLParser.RULE_other);
        try {
            this.state = 671;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.INTEGER_WEBIDL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 630;
                        this.match(WebIDLParser.INTEGER_WEBIDL);
                    }
                    break;
                case WebIDLParser.FLOAT_WEBIDL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 631;
                        this.match(WebIDLParser.FLOAT_WEBIDL);
                    }
                    break;
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 632;
                        this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                    }
                    break;
                case WebIDLParser.STRING_WEBIDL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 633;
                        this.match(WebIDLParser.STRING_WEBIDL);
                    }
                    break;
                case WebIDLParser.OTHER_WEBIDL:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 634;
                        this.match(WebIDLParser.OTHER_WEBIDL);
                    }
                    break;
                case WebIDLParser.T__44:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 635;
                        this.match(WebIDLParser.T__44);
                    }
                    break;
                case WebIDLParser.T__24:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 636;
                        this.match(WebIDLParser.T__24);
                    }
                    break;
                case WebIDLParser.T__45:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 637;
                        this.match(WebIDLParser.T__45);
                    }
                    break;
                case WebIDLParser.T__38:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 638;
                        this.match(WebIDLParser.T__38);
                    }
                    break;
                case WebIDLParser.T__12:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 639;
                        this.match(WebIDLParser.T__12);
                    }
                    break;
                case WebIDLParser.T__4:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 640;
                        this.match(WebIDLParser.T__4);
                    }
                    break;
                case WebIDLParser.T__40:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 641;
                        this.match(WebIDLParser.T__40);
                    }
                    break;
                case WebIDLParser.T__9:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 642;
                        this.match(WebIDLParser.T__9);
                    }
                    break;
                case WebIDLParser.T__41:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 643;
                        this.match(WebIDLParser.T__41);
                    }
                    break;
                case WebIDLParser.T__46:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 644;
                        this.match(WebIDLParser.T__46);
                    }
                    break;
                case WebIDLParser.T__47:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 645;
                        this.match(WebIDLParser.T__47);
                    }
                    break;
                case WebIDLParser.T__48:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 646;
                        this.match(WebIDLParser.T__48);
                    }
                    break;
                case WebIDLParser.T__49:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 647;
                        this.match(WebIDLParser.T__49);
                    }
                    break;
                case WebIDLParser.T__25:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 648;
                        this.match(WebIDLParser.T__25);
                    }
                    break;
                case WebIDLParser.T__26:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 649;
                        this.match(WebIDLParser.T__26);
                    }
                    break;
                case WebIDLParser.T__50:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 650;
                        this.match(WebIDLParser.T__50);
                    }
                    break;
                case WebIDLParser.T__51:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 651;
                        this.match(WebIDLParser.T__51);
                    }
                    break;
                case WebIDLParser.T__52:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 652;
                        this.match(WebIDLParser.T__52);
                    }
                    break;
                case WebIDLParser.T__53:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 653;
                        this.match(WebIDLParser.T__53);
                    }
                    break;
                case WebIDLParser.T__54:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 654;
                        this.match(WebIDLParser.T__54);
                    }
                    break;
                case WebIDLParser.T__55:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 655;
                        this.match(WebIDLParser.T__55);
                    }
                    break;
                case WebIDLParser.T__23:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 656;
                        this.match(WebIDLParser.T__23);
                    }
                    break;
                case WebIDLParser.T__56:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 657;
                        this.match(WebIDLParser.T__56);
                    }
                    break;
                case WebIDLParser.T__57:
                    this.enterOuterAlt(_localctx, 29);
                    {
                        this.state = 658;
                        this.match(WebIDLParser.T__57);
                    }
                    break;
                case WebIDLParser.T__21:
                    this.enterOuterAlt(_localctx, 30);
                    {
                        this.state = 659;
                        this.match(WebIDLParser.T__21);
                    }
                    break;
                case WebIDLParser.T__58:
                    this.enterOuterAlt(_localctx, 31);
                    {
                        this.state = 660;
                        this.match(WebIDLParser.T__58);
                    }
                    break;
                case WebIDLParser.T__59:
                    this.enterOuterAlt(_localctx, 32);
                    {
                        this.state = 661;
                        this.match(WebIDLParser.T__59);
                    }
                    break;
                case WebIDLParser.T__60:
                    this.enterOuterAlt(_localctx, 33);
                    {
                        this.state = 662;
                        this.match(WebIDLParser.T__60);
                    }
                    break;
                case WebIDLParser.T__37:
                    this.enterOuterAlt(_localctx, 34);
                    {
                        this.state = 663;
                        this.match(WebIDLParser.T__37);
                    }
                    break;
                case WebIDLParser.T__61:
                    this.enterOuterAlt(_localctx, 35);
                    {
                        this.state = 664;
                        this.match(WebIDLParser.T__61);
                    }
                    break;
                case WebIDLParser.T__62:
                    this.enterOuterAlt(_localctx, 36);
                    {
                        this.state = 665;
                        this.match(WebIDLParser.T__62);
                    }
                    break;
                case WebIDLParser.T__22:
                    this.enterOuterAlt(_localctx, 37);
                    {
                        this.state = 666;
                        this.match(WebIDLParser.T__22);
                    }
                    break;
                case WebIDLParser.T__63:
                    this.enterOuterAlt(_localctx, 38);
                    {
                        this.state = 667;
                        this.match(WebIDLParser.T__63);
                    }
                    break;
                case WebIDLParser.T__64:
                    this.enterOuterAlt(_localctx, 39);
                    {
                        this.state = 668;
                        this.match(WebIDLParser.T__64);
                    }
                    break;
                case WebIDLParser.T__0:
                case WebIDLParser.T__1:
                case WebIDLParser.T__6:
                case WebIDLParser.T__7:
                case WebIDLParser.T__8:
                case WebIDLParser.T__14:
                case WebIDLParser.T__18:
                case WebIDLParser.T__19:
                case WebIDLParser.T__20:
                case WebIDLParser.T__27:
                case WebIDLParser.T__28:
                case WebIDLParser.T__29:
                case WebIDLParser.T__30:
                case WebIDLParser.T__31:
                case WebIDLParser.T__33:
                case WebIDLParser.T__34:
                case WebIDLParser.T__35:
                case WebIDLParser.T__36:
                case WebIDLParser.T__39:
                case WebIDLParser.T__42:
                case WebIDLParser.T__43:
                case WebIDLParser.T__65:
                    this.enterOuterAlt(_localctx, 40);
                    {
                        this.state = 669;
                        this.argumentNameKeyword();
                    }
                    break;
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                    this.enterOuterAlt(_localctx, 41);
                    {
                        this.state = 670;
                        this.bufferRelatedType();
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
    WebIDLParser.prototype.argumentNameKeyword = function () {
        var _localctx = new ArgumentNameKeywordContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, WebIDLParser.RULE_argumentNameKeyword);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 673;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WebIDLParser.T__0) | (1 << WebIDLParser.T__1) | (1 << WebIDLParser.T__6) | (1 << WebIDLParser.T__7) | (1 << WebIDLParser.T__8) | (1 << WebIDLParser.T__14) | (1 << WebIDLParser.T__18) | (1 << WebIDLParser.T__19) | (1 << WebIDLParser.T__20) | (1 << WebIDLParser.T__27) | (1 << WebIDLParser.T__28) | (1 << WebIDLParser.T__29) | (1 << WebIDLParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (WebIDLParser.T__31 - 32)) | (1 << (WebIDLParser.T__33 - 32)) | (1 << (WebIDLParser.T__34 - 32)) | (1 << (WebIDLParser.T__35 - 32)) | (1 << (WebIDLParser.T__36 - 32)) | (1 << (WebIDLParser.T__39 - 32)) | (1 << (WebIDLParser.T__42 - 32)) | (1 << (WebIDLParser.T__43 - 32)))) !== 0) || _la === WebIDLParser.T__65)) {
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
    WebIDLParser.prototype.otherOrComma = function () {
        var _localctx = new OtherOrCommaContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, WebIDLParser.RULE_otherOrComma);
        try {
            this.state = 677;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__0:
                case WebIDLParser.T__1:
                case WebIDLParser.T__4:
                case WebIDLParser.T__6:
                case WebIDLParser.T__7:
                case WebIDLParser.T__8:
                case WebIDLParser.T__9:
                case WebIDLParser.T__12:
                case WebIDLParser.T__14:
                case WebIDLParser.T__18:
                case WebIDLParser.T__19:
                case WebIDLParser.T__20:
                case WebIDLParser.T__21:
                case WebIDLParser.T__22:
                case WebIDLParser.T__23:
                case WebIDLParser.T__24:
                case WebIDLParser.T__25:
                case WebIDLParser.T__26:
                case WebIDLParser.T__27:
                case WebIDLParser.T__28:
                case WebIDLParser.T__29:
                case WebIDLParser.T__30:
                case WebIDLParser.T__31:
                case WebIDLParser.T__33:
                case WebIDLParser.T__34:
                case WebIDLParser.T__35:
                case WebIDLParser.T__36:
                case WebIDLParser.T__37:
                case WebIDLParser.T__38:
                case WebIDLParser.T__39:
                case WebIDLParser.T__40:
                case WebIDLParser.T__41:
                case WebIDLParser.T__42:
                case WebIDLParser.T__43:
                case WebIDLParser.T__44:
                case WebIDLParser.T__45:
                case WebIDLParser.T__46:
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__60:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__64:
                case WebIDLParser.T__65:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.INTEGER_WEBIDL:
                case WebIDLParser.FLOAT_WEBIDL:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                case WebIDLParser.STRING_WEBIDL:
                case WebIDLParser.OTHER_WEBIDL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 675;
                        this.other();
                    }
                    break;
                case WebIDLParser.T__15:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 676;
                        this.match(WebIDLParser.T__15);
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
    WebIDLParser.prototype.type = function () {
        var _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, WebIDLParser.RULE_type);
        try {
            this.state = 683;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__65:
                case WebIDLParser.T__66:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.T__78:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 679;
                        this.singleType();
                    }
                    break;
                case WebIDLParser.T__16:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 680;
                        this.unionType();
                        this.state = 681;
                        this.null_();
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
    WebIDLParser.prototype.singleType = function () {
        var _localctx = new SingleTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, WebIDLParser.RULE_singleType);
        try {
            this.state = 687;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__65:
                case WebIDLParser.T__66:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.T__78:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 685;
                        this.nonAnyType();
                    }
                    break;
                case WebIDLParser.T__52:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 686;
                        this.match(WebIDLParser.T__52);
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
    WebIDLParser.prototype.unionType = function () {
        var _localctx = new UnionTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, WebIDLParser.RULE_unionType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 689;
                this.match(WebIDLParser.T__16);
                this.state = 690;
                this.unionMemberType();
                this.state = 691;
                this.match(WebIDLParser.T__60);
                this.state = 692;
                this.unionMemberType();
                this.state = 693;
                this.unionMemberTypes();
                this.state = 694;
                this.match(WebIDLParser.T__17);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.unionMemberType = function () {
        var _localctx = new UnionMemberTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, WebIDLParser.RULE_unionMemberType);
        try {
            this.state = 700;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__65:
                case WebIDLParser.T__66:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.T__78:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 696;
                        this.nonAnyType();
                    }
                    break;
                case WebIDLParser.T__16:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 697;
                        this.unionType();
                        this.state = 698;
                        this.null_();
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
    WebIDLParser.prototype.unionMemberTypes = function () {
        var _localctx = new UnionMemberTypesContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, WebIDLParser.RULE_unionMemberTypes);
        try {
            this.state = 707;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__60:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 702;
                        this.match(WebIDLParser.T__60);
                        this.state = 703;
                        this.unionMemberType();
                        this.state = 704;
                        this.unionMemberTypes();
                    }
                    break;
                case WebIDLParser.T__17:
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
    WebIDLParser.prototype.nonAnyType = function () {
        var _localctx = new NonAnyTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, WebIDLParser.RULE_nonAnyType);
        try {
            this.state = 744;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__59:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__65:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 709;
                        this.primitiveType();
                        this.state = 710;
                        this.null_();
                    }
                    break;
                case WebIDLParser.T__78:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 712;
                        this.promiseType();
                        this.state = 713;
                        this.null_();
                    }
                    break;
                case WebIDLParser.T__47:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 715;
                        this.match(WebIDLParser.T__47);
                        this.state = 716;
                        this.null_();
                    }
                    break;
                case WebIDLParser.T__48:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 717;
                        this.match(WebIDLParser.T__48);
                        this.state = 718;
                        this.null_();
                    }
                    break;
                case WebIDLParser.T__51:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 719;
                        this.match(WebIDLParser.T__51);
                        this.state = 720;
                        this.null_();
                    }
                    break;
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 721;
                        this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                        this.state = 722;
                        this.null_();
                    }
                    break;
                case WebIDLParser.T__61:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 723;
                        this.match(WebIDLParser.T__61);
                        this.state = 724;
                        this.match(WebIDLParser.T__40);
                        this.state = 725;
                        this.type();
                        this.state = 726;
                        this.match(WebIDLParser.T__41);
                        this.state = 727;
                        this.null_();
                    }
                    break;
                case WebIDLParser.T__58:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 729;
                        this.match(WebIDLParser.T__58);
                        this.state = 730;
                        this.null_();
                    }
                    break;
                case WebIDLParser.T__50:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 731;
                        this.match(WebIDLParser.T__50);
                        this.state = 732;
                        this.null_();
                    }
                    break;
                case WebIDLParser.T__66:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 733;
                        this.match(WebIDLParser.T__66);
                        this.state = 734;
                        this.null_();
                    }
                    break;
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 735;
                        this.bufferRelatedType();
                        this.state = 736;
                        this.null_();
                    }
                    break;
                case WebIDLParser.T__49:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 738;
                        this.match(WebIDLParser.T__49);
                        this.state = 739;
                        this.match(WebIDLParser.T__40);
                        this.state = 740;
                        this.type();
                        this.state = 741;
                        this.match(WebIDLParser.T__41);
                        this.state = 742;
                        this.null_();
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
    WebIDLParser.prototype.bufferRelatedType = function () {
        var _localctx = new BufferRelatedTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, WebIDLParser.RULE_bufferRelatedType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 746;
                _la = this._input.LA(1);
                if (!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (WebIDLParser.T__67 - 68)) | (1 << (WebIDLParser.T__68 - 68)) | (1 << (WebIDLParser.T__69 - 68)) | (1 << (WebIDLParser.T__70 - 68)) | (1 << (WebIDLParser.T__71 - 68)) | (1 << (WebIDLParser.T__72 - 68)) | (1 << (WebIDLParser.T__73 - 68)) | (1 << (WebIDLParser.T__74 - 68)) | (1 << (WebIDLParser.T__75 - 68)) | (1 << (WebIDLParser.T__76 - 68)) | (1 << (WebIDLParser.T__77 - 68)))) !== 0))) {
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
    WebIDLParser.prototype.constType = function () {
        var _localctx = new ConstTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, WebIDLParser.RULE_constType);
        try {
            this.state = 753;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__59:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__65:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 748;
                        this.primitiveType();
                        this.state = 749;
                        this.null_();
                    }
                    break;
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 751;
                        this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                        this.state = 752;
                        this.null_();
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
    WebIDLParser.prototype.primitiveType = function () {
        var _localctx = new PrimitiveTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, WebIDLParser.RULE_primitiveType);
        try {
            this.state = 760;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__57:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 755;
                        this.unsignedIntegerType();
                    }
                    break;
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__65:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 756;
                        this.unrestrictedFloatType();
                    }
                    break;
                case WebIDLParser.T__53:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 757;
                        this.match(WebIDLParser.T__53);
                    }
                    break;
                case WebIDLParser.T__54:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 758;
                        this.match(WebIDLParser.T__54);
                    }
                    break;
                case WebIDLParser.T__59:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 759;
                        this.match(WebIDLParser.T__59);
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
    WebIDLParser.prototype.unrestrictedFloatType = function () {
        var _localctx = new UnrestrictedFloatTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, WebIDLParser.RULE_unrestrictedFloatType);
        try {
            this.state = 765;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__65:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 762;
                        this.match(WebIDLParser.T__65);
                        this.state = 763;
                        this.floatType();
                    }
                    break;
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 764;
                        this.floatType();
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
    WebIDLParser.prototype.floatType = function () {
        var _localctx = new FloatTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, WebIDLParser.RULE_floatType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 767;
                _la = this._input.LA(1);
                if (!(_la === WebIDLParser.T__55 || _la === WebIDLParser.T__56)) {
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
    WebIDLParser.prototype.unsignedIntegerType = function () {
        var _localctx = new UnsignedIntegerTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, WebIDLParser.RULE_unsignedIntegerType);
        try {
            this.state = 772;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__63:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 769;
                        this.match(WebIDLParser.T__63);
                        this.state = 770;
                        this.integerType();
                    }
                    break;
                case WebIDLParser.T__57:
                case WebIDLParser.T__62:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 771;
                        this.integerType();
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
    WebIDLParser.prototype.integerType = function () {
        var _localctx = new IntegerTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, WebIDLParser.RULE_integerType);
        try {
            this.state = 777;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__62:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 774;
                        this.match(WebIDLParser.T__62);
                    }
                    break;
                case WebIDLParser.T__57:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 775;
                        this.match(WebIDLParser.T__57);
                        this.state = 776;
                        this.optionalLong();
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
    WebIDLParser.prototype.optionalLong = function () {
        var _localctx = new OptionalLongContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, WebIDLParser.RULE_optionalLong);
        try {
            this.state = 781;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__57:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 779;
                        this.match(WebIDLParser.T__57);
                    }
                    break;
                case WebIDLParser.T__0:
                case WebIDLParser.T__1:
                case WebIDLParser.T__6:
                case WebIDLParser.T__7:
                case WebIDLParser.T__8:
                case WebIDLParser.T__14:
                case WebIDLParser.T__15:
                case WebIDLParser.T__16:
                case WebIDLParser.T__17:
                case WebIDLParser.T__18:
                case WebIDLParser.T__19:
                case WebIDLParser.T__20:
                case WebIDLParser.T__27:
                case WebIDLParser.T__28:
                case WebIDLParser.T__29:
                case WebIDLParser.T__30:
                case WebIDLParser.T__31:
                case WebIDLParser.T__33:
                case WebIDLParser.T__34:
                case WebIDLParser.T__35:
                case WebIDLParser.T__36:
                case WebIDLParser.T__38:
                case WebIDLParser.T__39:
                case WebIDLParser.T__41:
                case WebIDLParser.T__42:
                case WebIDLParser.T__43:
                case WebIDLParser.T__46:
                case WebIDLParser.T__60:
                case WebIDLParser.T__65:
                case WebIDLParser.IDENTIFIER_WEBIDL:
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
    WebIDLParser.prototype.promiseType = function () {
        var _localctx = new PromiseTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, WebIDLParser.RULE_promiseType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 783;
                this.match(WebIDLParser.T__78);
                this.state = 784;
                this.match(WebIDLParser.T__40);
                this.state = 785;
                this.returnType();
                this.state = 786;
                this.match(WebIDLParser.T__41);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.null_ = function () {
        var _localctx = new Null_Context(this._ctx, this.state);
        this.enterRule(_localctx, 180, WebIDLParser.RULE_null_);
        try {
            this.state = 790;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__46:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 788;
                        this.match(WebIDLParser.T__46);
                    }
                    break;
                case WebIDLParser.T__0:
                case WebIDLParser.T__1:
                case WebIDLParser.T__6:
                case WebIDLParser.T__7:
                case WebIDLParser.T__8:
                case WebIDLParser.T__14:
                case WebIDLParser.T__15:
                case WebIDLParser.T__16:
                case WebIDLParser.T__17:
                case WebIDLParser.T__18:
                case WebIDLParser.T__19:
                case WebIDLParser.T__20:
                case WebIDLParser.T__27:
                case WebIDLParser.T__28:
                case WebIDLParser.T__29:
                case WebIDLParser.T__30:
                case WebIDLParser.T__31:
                case WebIDLParser.T__33:
                case WebIDLParser.T__34:
                case WebIDLParser.T__35:
                case WebIDLParser.T__36:
                case WebIDLParser.T__38:
                case WebIDLParser.T__39:
                case WebIDLParser.T__41:
                case WebIDLParser.T__42:
                case WebIDLParser.T__43:
                case WebIDLParser.T__60:
                case WebIDLParser.T__65:
                case WebIDLParser.IDENTIFIER_WEBIDL:
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
    WebIDLParser.prototype.returnType = function () {
        var _localctx = new ReturnTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, WebIDLParser.RULE_returnType);
        try {
            this.state = 794;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__16:
                case WebIDLParser.T__47:
                case WebIDLParser.T__48:
                case WebIDLParser.T__49:
                case WebIDLParser.T__50:
                case WebIDLParser.T__51:
                case WebIDLParser.T__52:
                case WebIDLParser.T__53:
                case WebIDLParser.T__54:
                case WebIDLParser.T__55:
                case WebIDLParser.T__56:
                case WebIDLParser.T__57:
                case WebIDLParser.T__58:
                case WebIDLParser.T__59:
                case WebIDLParser.T__61:
                case WebIDLParser.T__62:
                case WebIDLParser.T__63:
                case WebIDLParser.T__65:
                case WebIDLParser.T__66:
                case WebIDLParser.T__67:
                case WebIDLParser.T__68:
                case WebIDLParser.T__69:
                case WebIDLParser.T__70:
                case WebIDLParser.T__71:
                case WebIDLParser.T__72:
                case WebIDLParser.T__73:
                case WebIDLParser.T__74:
                case WebIDLParser.T__75:
                case WebIDLParser.T__76:
                case WebIDLParser.T__77:
                case WebIDLParser.T__78:
                case WebIDLParser.IDENTIFIER_WEBIDL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 792;
                        this.type();
                    }
                    break;
                case WebIDLParser.T__64:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 793;
                        this.match(WebIDLParser.T__64);
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
    WebIDLParser.prototype.identifierList = function () {
        var _localctx = new IdentifierListContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, WebIDLParser.RULE_identifierList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 796;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 797;
                this.identifiers();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.identifiers = function () {
        var _localctx = new IdentifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, WebIDLParser.RULE_identifiers);
        try {
            this.state = 803;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case WebIDLParser.T__15:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 799;
                        this.match(WebIDLParser.T__15);
                        this.state = 800;
                        this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                        this.state = 801;
                        this.identifiers();
                    }
                    break;
                case WebIDLParser.T__3:
                case WebIDLParser.T__11:
                case WebIDLParser.T__17:
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
    WebIDLParser.prototype.extendedAttributeNoArgs = function () {
        var _localctx = new ExtendedAttributeNoArgsContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, WebIDLParser.RULE_extendedAttributeNoArgs);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 805;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.extendedAttributeArgList = function () {
        var _localctx = new ExtendedAttributeArgListContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, WebIDLParser.RULE_extendedAttributeArgList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 807;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 808;
                this.match(WebIDLParser.T__16);
                this.state = 809;
                this.argumentList();
                this.state = 810;
                this.match(WebIDLParser.T__17);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.extendedAttributeIdent = function () {
        var _localctx = new ExtendedAttributeIdentContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, WebIDLParser.RULE_extendedAttributeIdent);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 812;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 813;
                this.match(WebIDLParser.T__9);
                this.state = 814;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.extendedAttributeIdentList = function () {
        var _localctx = new ExtendedAttributeIdentListContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, WebIDLParser.RULE_extendedAttributeIdentList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 816;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 817;
                this.match(WebIDLParser.T__9);
                this.state = 818;
                this.match(WebIDLParser.T__16);
                this.state = 819;
                this.identifierList();
                this.state = 820;
                this.match(WebIDLParser.T__17);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    WebIDLParser.prototype.extendedAttributeNamedArgList = function () {
        var _localctx = new ExtendedAttributeNamedArgListContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, WebIDLParser.RULE_extendedAttributeNamedArgList);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 822;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 823;
                this.match(WebIDLParser.T__9);
                this.state = 824;
                this.match(WebIDLParser.IDENTIFIER_WEBIDL);
                this.state = 825;
                this.match(WebIDLParser.T__16);
                this.state = 826;
                this.argumentList();
                this.state = 827;
                this.match(WebIDLParser.T__17);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(WebIDLParser, "_ATN", {
        get: function () {
            if (!WebIDLParser.__ATN) {
                WebIDLParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(WebIDLParser._serializedATN));
            }
            return WebIDLParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    WebIDLParser.T__0 = 1;
    WebIDLParser.T__1 = 2;
    WebIDLParser.T__2 = 3;
    WebIDLParser.T__3 = 4;
    WebIDLParser.T__4 = 5;
    WebIDLParser.T__5 = 6;
    WebIDLParser.T__6 = 7;
    WebIDLParser.T__7 = 8;
    WebIDLParser.T__8 = 9;
    WebIDLParser.T__9 = 10;
    WebIDLParser.T__10 = 11;
    WebIDLParser.T__11 = 12;
    WebIDLParser.T__12 = 13;
    WebIDLParser.T__13 = 14;
    WebIDLParser.T__14 = 15;
    WebIDLParser.T__15 = 16;
    WebIDLParser.T__16 = 17;
    WebIDLParser.T__17 = 18;
    WebIDLParser.T__18 = 19;
    WebIDLParser.T__19 = 20;
    WebIDLParser.T__20 = 21;
    WebIDLParser.T__21 = 22;
    WebIDLParser.T__22 = 23;
    WebIDLParser.T__23 = 24;
    WebIDLParser.T__24 = 25;
    WebIDLParser.T__25 = 26;
    WebIDLParser.T__26 = 27;
    WebIDLParser.T__27 = 28;
    WebIDLParser.T__28 = 29;
    WebIDLParser.T__29 = 30;
    WebIDLParser.T__30 = 31;
    WebIDLParser.T__31 = 32;
    WebIDLParser.T__32 = 33;
    WebIDLParser.T__33 = 34;
    WebIDLParser.T__34 = 35;
    WebIDLParser.T__35 = 36;
    WebIDLParser.T__36 = 37;
    WebIDLParser.T__37 = 38;
    WebIDLParser.T__38 = 39;
    WebIDLParser.T__39 = 40;
    WebIDLParser.T__40 = 41;
    WebIDLParser.T__41 = 42;
    WebIDLParser.T__42 = 43;
    WebIDLParser.T__43 = 44;
    WebIDLParser.T__44 = 45;
    WebIDLParser.T__45 = 46;
    WebIDLParser.T__46 = 47;
    WebIDLParser.T__47 = 48;
    WebIDLParser.T__48 = 49;
    WebIDLParser.T__49 = 50;
    WebIDLParser.T__50 = 51;
    WebIDLParser.T__51 = 52;
    WebIDLParser.T__52 = 53;
    WebIDLParser.T__53 = 54;
    WebIDLParser.T__54 = 55;
    WebIDLParser.T__55 = 56;
    WebIDLParser.T__56 = 57;
    WebIDLParser.T__57 = 58;
    WebIDLParser.T__58 = 59;
    WebIDLParser.T__59 = 60;
    WebIDLParser.T__60 = 61;
    WebIDLParser.T__61 = 62;
    WebIDLParser.T__62 = 63;
    WebIDLParser.T__63 = 64;
    WebIDLParser.T__64 = 65;
    WebIDLParser.T__65 = 66;
    WebIDLParser.T__66 = 67;
    WebIDLParser.T__67 = 68;
    WebIDLParser.T__68 = 69;
    WebIDLParser.T__69 = 70;
    WebIDLParser.T__70 = 71;
    WebIDLParser.T__71 = 72;
    WebIDLParser.T__72 = 73;
    WebIDLParser.T__73 = 74;
    WebIDLParser.T__74 = 75;
    WebIDLParser.T__75 = 76;
    WebIDLParser.T__76 = 77;
    WebIDLParser.T__77 = 78;
    WebIDLParser.T__78 = 79;
    WebIDLParser.INTEGER_WEBIDL = 80;
    WebIDLParser.FLOAT_WEBIDL = 81;
    WebIDLParser.IDENTIFIER_WEBIDL = 82;
    WebIDLParser.STRING_WEBIDL = 83;
    WebIDLParser.WHITESPACE_WEBIDL = 84;
    WebIDLParser.COMMENT_WEBIDL = 85;
    WebIDLParser.OTHER_WEBIDL = 86;
    WebIDLParser.RULE_webIDL = 0;
    WebIDLParser.RULE_definitions = 1;
    WebIDLParser.RULE_definition = 2;
    WebIDLParser.RULE_callbackOrInterface = 3;
    WebIDLParser.RULE_callbackRestOrInterface = 4;
    WebIDLParser.RULE_interface_ = 5;
    WebIDLParser.RULE_class_ = 6;
    WebIDLParser.RULE_partial = 7;
    WebIDLParser.RULE_partialDefinition = 8;
    WebIDLParser.RULE_partialInterface = 9;
    WebIDLParser.RULE_interfaceMembers = 10;
    WebIDLParser.RULE_interfaceMember = 11;
    WebIDLParser.RULE_dictionary = 12;
    WebIDLParser.RULE_dictionaryMembers = 13;
    WebIDLParser.RULE_dictionaryMember = 14;
    WebIDLParser.RULE_required = 15;
    WebIDLParser.RULE_partialDictionary = 16;
    WebIDLParser.RULE_default_ = 17;
    WebIDLParser.RULE_defaultValue = 18;
    WebIDLParser.RULE_inheritance = 19;
    WebIDLParser.RULE_extension = 20;
    WebIDLParser.RULE_enum_ = 21;
    WebIDLParser.RULE_enumValueList = 22;
    WebIDLParser.RULE_enumValueListComma = 23;
    WebIDLParser.RULE_enumValueListString = 24;
    WebIDLParser.RULE_callbackRest = 25;
    WebIDLParser.RULE_typedef = 26;
    WebIDLParser.RULE_implementsStatement = 27;
    WebIDLParser.RULE_const_ = 28;
    WebIDLParser.RULE_constValue = 29;
    WebIDLParser.RULE_booleanLiteral = 30;
    WebIDLParser.RULE_floatLiteral = 31;
    WebIDLParser.RULE_serializer = 32;
    WebIDLParser.RULE_serializerRest = 33;
    WebIDLParser.RULE_serializationPattern = 34;
    WebIDLParser.RULE_serializationPatternMap = 35;
    WebIDLParser.RULE_serializationPatternList = 36;
    WebIDLParser.RULE_stringifier = 37;
    WebIDLParser.RULE_stringifierRest = 38;
    WebIDLParser.RULE_staticMember = 39;
    WebIDLParser.RULE_staticMemberRest = 40;
    WebIDLParser.RULE_readonlyMember = 41;
    WebIDLParser.RULE_readonlyMemberRest = 42;
    WebIDLParser.RULE_readWriteAttribute = 43;
    WebIDLParser.RULE_attributeRest = 44;
    WebIDLParser.RULE_attributeName = 45;
    WebIDLParser.RULE_attributeNameKeyword = 46;
    WebIDLParser.RULE_inherit = 47;
    WebIDLParser.RULE_readOnly = 48;
    WebIDLParser.RULE_operation = 49;
    WebIDLParser.RULE_specialOperation = 50;
    WebIDLParser.RULE_specials = 51;
    WebIDLParser.RULE_special = 52;
    WebIDLParser.RULE_operationRest = 53;
    WebIDLParser.RULE_optionalIdentifier = 54;
    WebIDLParser.RULE_argumentList = 55;
    WebIDLParser.RULE_arguments = 56;
    WebIDLParser.RULE_argument = 57;
    WebIDLParser.RULE_optionalOrRequiredArgument = 58;
    WebIDLParser.RULE_argumentName = 59;
    WebIDLParser.RULE_ellipsis = 60;
    WebIDLParser.RULE_iterable = 61;
    WebIDLParser.RULE_optionalType = 62;
    WebIDLParser.RULE_readWriteMaplike = 63;
    WebIDLParser.RULE_readWriteSetlike = 64;
    WebIDLParser.RULE_maplikeRest = 65;
    WebIDLParser.RULE_setlikeRest = 66;
    WebIDLParser.RULE_extendedAttributeList = 67;
    WebIDLParser.RULE_extendedAttributes = 68;
    WebIDLParser.RULE_extendedAttribute = 69;
    WebIDLParser.RULE_extendedAttributeRest = 70;
    WebIDLParser.RULE_extendedAttributeInner = 71;
    WebIDLParser.RULE_other = 72;
    WebIDLParser.RULE_argumentNameKeyword = 73;
    WebIDLParser.RULE_otherOrComma = 74;
    WebIDLParser.RULE_type = 75;
    WebIDLParser.RULE_singleType = 76;
    WebIDLParser.RULE_unionType = 77;
    WebIDLParser.RULE_unionMemberType = 78;
    WebIDLParser.RULE_unionMemberTypes = 79;
    WebIDLParser.RULE_nonAnyType = 80;
    WebIDLParser.RULE_bufferRelatedType = 81;
    WebIDLParser.RULE_constType = 82;
    WebIDLParser.RULE_primitiveType = 83;
    WebIDLParser.RULE_unrestrictedFloatType = 84;
    WebIDLParser.RULE_floatType = 85;
    WebIDLParser.RULE_unsignedIntegerType = 86;
    WebIDLParser.RULE_integerType = 87;
    WebIDLParser.RULE_optionalLong = 88;
    WebIDLParser.RULE_promiseType = 89;
    WebIDLParser.RULE_null_ = 90;
    WebIDLParser.RULE_returnType = 91;
    WebIDLParser.RULE_identifierList = 92;
    WebIDLParser.RULE_identifiers = 93;
    WebIDLParser.RULE_extendedAttributeNoArgs = 94;
    WebIDLParser.RULE_extendedAttributeArgList = 95;
    WebIDLParser.RULE_extendedAttributeIdent = 96;
    WebIDLParser.RULE_extendedAttributeIdentList = 97;
    WebIDLParser.RULE_extendedAttributeNamedArgList = 98;
    // tslint:disable:no-trailing-whitespace
    WebIDLParser.ruleNames = [
        "webIDL", "definitions", "definition", "callbackOrInterface", "callbackRestOrInterface",
        "interface_", "class_", "partial", "partialDefinition", "partialInterface",
        "interfaceMembers", "interfaceMember", "dictionary", "dictionaryMembers",
        "dictionaryMember", "required", "partialDictionary", "default_", "defaultValue",
        "inheritance", "extension", "enum_", "enumValueList", "enumValueListComma",
        "enumValueListString", "callbackRest", "typedef", "implementsStatement",
        "const_", "constValue", "booleanLiteral", "floatLiteral", "serializer",
        "serializerRest", "serializationPattern", "serializationPatternMap", "serializationPatternList",
        "stringifier", "stringifierRest", "staticMember", "staticMemberRest",
        "readonlyMember", "readonlyMemberRest", "readWriteAttribute", "attributeRest",
        "attributeName", "attributeNameKeyword", "inherit", "readOnly", "operation",
        "specialOperation", "specials", "special", "operationRest", "optionalIdentifier",
        "argumentList", "arguments", "argument", "optionalOrRequiredArgument",
        "argumentName", "ellipsis", "iterable", "optionalType", "readWriteMaplike",
        "readWriteSetlike", "maplikeRest", "setlikeRest", "extendedAttributeList",
        "extendedAttributes", "extendedAttribute", "extendedAttributeRest", "extendedAttributeInner",
        "other", "argumentNameKeyword", "otherOrComma", "type", "singleType",
        "unionType", "unionMemberType", "unionMemberTypes", "nonAnyType", "bufferRelatedType",
        "constType", "primitiveType", "unrestrictedFloatType", "floatType", "unsignedIntegerType",
        "integerType", "optionalLong", "promiseType", "null_", "returnType", "identifierList",
        "identifiers", "extendedAttributeNoArgs", "extendedAttributeArgList",
        "extendedAttributeIdent", "extendedAttributeIdentList", "extendedAttributeNamedArgList",
    ];
    WebIDLParser._LITERAL_NAMES = [
        undefined, "'callback'", "'interface'", "'{'", "'}'", "';'", "'class'",
        "'partial'", "'dictionary'", "'required'", "'='", "'['", "']'", "':'",
        "'extends'", "'enum'", "','", "'('", "')'", "'typedef'", "'implements'",
        "'const'", "'null'", "'true'", "'false'", "'-Infinity'", "'Infinity'",
        "'NaN'", "'serializer'", "'getter'", "'inherit'", "'stringifier'", "'static'",
        "'readonly'", "'attribute'", "'setter'", "'deleter'", "'legacycaller'",
        "'optional'", "'...'", "'iterable'", "'<'", "'>'", "'maplike'", "'setlike'",
        "'-'", "'.'", "'?'", "'ByteString'", "'DOMString'", "'FrozenArray'", "'RegExp'",
        "'USVString'", "'any'", "'boolean'", "'byte'", "'double'", "'float'",
        "'long'", "'object'", "'octet'", "'or'", "'sequence'", "'short'", "'unsigned'",
        "'void'", "'unrestricted'", "'DOMException'", "'ArrayBuffer'", "'DataView'",
        "'Int8Array'", "'Int16Array'", "'Int32Array'", "'Uint8Array'", "'Uint16Array'",
        "'Uint32Array'", "'Uint8ClampedArray'", "'Float32Array'", "'Float64Array'",
        "'Promise'",
    ];
    WebIDLParser._SYMBOLIC_NAMES = [
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
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, "INTEGER_WEBIDL", "FLOAT_WEBIDL", "IDENTIFIER_WEBIDL",
        "STRING_WEBIDL", "WHITESPACE_WEBIDL", "COMMENT_WEBIDL", "OTHER_WEBIDL",
    ];
    WebIDLParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(WebIDLParser._LITERAL_NAMES, WebIDLParser._SYMBOLIC_NAMES, []);
    WebIDLParser._serializedATNSegments = 2;
    WebIDLParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03X\u0340\x04\x02" +
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
        "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
        "\x03\x03\x03\x03\x03\x03\x03\x05\x03\xD1\n\x03\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x05\x04\xD9\n\x04\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x05\x05\xDF\n\x05\x03\x06\x03\x06\x05\x06\xE3\n\x06\x03\x07\x03\x07" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03" +
        "\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x05\n\xFA\n\n" +
        "\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
        "\f\x05\f\u0108\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\r\x05\r\u0114\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
        "\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0123" +
        "\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
        "\x05\x11\u012D\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x13\x03\x13\x03\x13\x05\x13\u0139\n\x13\x03\x14\x03\x14\x03\x14" +
        "\x03\x14\x05\x14\u013F\n\x14\x03\x15\x03\x15\x03\x15\x05\x15\u0144\n\x15" +
        "\x03\x16\x03\x16\x03\x16\x05\x16\u0149\n\x16\x03\x17\x03\x17\x03\x17\x03" +
        "\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
        "\x19\x05\x19\u0158\n\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u015D\n\x1A\x03" +
        "\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03" +
        "\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
        "\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
        "\x1F\x03\x1F\x05\x1F\u017C\n\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03\"" +
        "\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u018B\n#\x03$\x03$\x03$\x03$\x03$" +
        "\x03$\x03$\x03$\x03$\x05$\u0196\n$\x03%\x03%\x03%\x03%\x03%\x03%\x05%" +
        "\u019E\n%\x03&\x03&\x03&\x03&\x05&\u01A4\n&\x03\'\x03\'\x03\'\x03(\x03" +
        "(\x03(\x03(\x03(\x03(\x03(\x05(\u01B0\n(\x03)\x03)\x03)\x03*\x03*\x03" +
        "*\x03*\x03*\x03*\x05*\u01BB\n*\x03+\x03+\x03+\x03,\x03,\x03,\x05,\u01C3" +
        "\n,\x03-\x03-\x03-\x03-\x03-\x05-\u01CA\n-\x03.\x03.\x03.\x03.\x03.\x03" +
        "/\x03/\x05/\u01D3\n/\x030\x030\x031\x031\x051\u01D9\n1\x032\x032\x052" +
        "\u01DD\n2\x033\x033\x033\x033\x053\u01E3\n3\x034\x034\x034\x034\x034\x03" +
        "5\x035\x035\x035\x055\u01EE\n5\x036\x036\x037\x037\x037\x037\x037\x03" +
        "7\x038\x038\x058\u01FA\n8\x039\x039\x039\x039\x059\u0200\n9\x03:\x03:" +
        "\x03:\x03:\x03:\x05:\u0207\n:\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x03<" +
        "\x03<\x03<\x03<\x03<\x05<\u0215\n<\x03=\x03=\x05=\u0219\n=\x03>\x03>\x05" +
        ">\u021D\n>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x05@\u0229" +
        "\n@\x03A\x03A\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03D\x03" +
        "D\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u0243\nE\x03" +
        "F\x03F\x03F\x03F\x03F\x05F\u024A\nF\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
        "G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u025E\n" +
        "G\x03H\x03H\x05H\u0262\nH\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
        "I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u0277\nI\x03" +
        "J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
        "J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
        "J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u02A2" +
        "\nJ\x03K\x03K\x03L\x03L\x05L\u02A8\nL\x03M\x03M\x03M\x03M\x05M\u02AE\n" +
        "M\x03N\x03N\x05N\u02B2\nN\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03P\x03" +
        "P\x03P\x03P\x05P\u02BF\nP\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u02C6\nQ\x03R" +
        "\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03" +
        "R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03" +
        "R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u02EB\nR\x03S\x03S\x03T\x03T\x03" +
        "T\x03T\x03T\x05T\u02F4\nT\x03U\x03U\x03U\x03U\x03U\x05U\u02FB\nU\x03V" +
        "\x03V\x03V\x05V\u0300\nV\x03W\x03W\x03X\x03X\x03X\x05X\u0307\nX\x03Y\x03" +
        "Y\x03Y\x05Y\u030C\nY\x03Z\x03Z\x05Z\u0310\nZ\x03[\x03[\x03[\x03[\x03[" +
        "\x03\\\x03\\\x05\\\u0319\n\\\x03]\x03]\x05]\u031D\n]\x03^\x03^\x03^\x03" +
        "_\x03_\x03_\x03_\x05_\u0326\n_\x03`\x03`\x03a\x03a\x03a\x03a\x03a\x03" +
        "b\x03b\x03b\x03b\x03c\x03c\x03c\x03c\x03c\x03c\x03d\x03d\x03d\x03d\x03" +
        "d\x03d\x03d\x03d\x02\x02\x02e\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
        "\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
        " \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
        "<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
        "X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
        "t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
        "\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
        "\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
        "\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
        "\xC0\x02\xC2\x02\xC4\x02\xC6\x02\x02\b\x03\x02\x19\x1A\x04\x02\x1B\x1D" +
        "SS\x04\x02\x1F\x1F%\'\v\x02\x03\x04\t\v\x11\x11\x15\x17\x1E\"$\'**-.D" +
        "D\x03\x02FP\x03\x02:;\x02\u0365\x02\xC8\x03\x02\x02\x02\x04\xD0\x03\x02" +
        "\x02\x02\x06\xD8\x03\x02\x02\x02\b\xDE\x03\x02\x02\x02\n\xE2\x03\x02\x02" +
        "\x02\f\xE4\x03\x02\x02\x02\x0E\xEC\x03\x02\x02\x02\x10\xF4\x03\x02\x02" +
        "\x02\x12\xF9\x03\x02\x02\x02\x14\xFB\x03\x02\x02\x02\x16\u0107\x03\x02" +
        "\x02\x02\x18\u0113\x03\x02\x02\x02\x1A\u0115\x03\x02\x02\x02\x1C\u0122" +
        "\x03\x02\x02\x02\x1E\u0124\x03\x02\x02\x02 \u012C\x03\x02\x02\x02\"\u012E" +
        "\x03\x02\x02\x02$\u0138\x03\x02\x02\x02&\u013E\x03\x02\x02\x02(\u0143" +
        "\x03\x02\x02\x02*\u0148\x03\x02\x02\x02,\u014A\x03\x02\x02\x02.\u0151" +
        "\x03\x02\x02\x020\u0157\x03\x02\x02\x022\u015C\x03\x02\x02\x024\u015E" +
        "\x03\x02\x02\x026\u0166\x03\x02\x02\x028\u016B\x03\x02\x02\x02:\u0170" +
        "\x03\x02\x02\x02<\u017B\x03\x02\x02\x02>\u017D\x03\x02\x02\x02@\u017F" +
        "\x03\x02\x02\x02B\u0181\x03\x02\x02\x02D\u018A\x03\x02\x02\x02F\u0195" +
        "\x03\x02\x02\x02H\u019D\x03\x02\x02\x02J\u01A3\x03\x02\x02\x02L\u01A5" +
        "\x03\x02\x02\x02N\u01AF\x03\x02\x02\x02P\u01B1\x03\x02\x02\x02R\u01BA" +
        "\x03\x02\x02\x02T\u01BC\x03\x02\x02\x02V\u01C2\x03\x02\x02\x02X\u01C9" +
        "\x03\x02\x02\x02Z\u01CB\x03\x02\x02\x02\\\u01D2\x03\x02\x02\x02^\u01D4" +
        "\x03\x02\x02\x02`\u01D8\x03\x02\x02\x02b\u01DC\x03\x02\x02\x02d\u01E2" +
        "\x03\x02\x02\x02f\u01E4\x03\x02\x02\x02h\u01ED\x03\x02\x02\x02j\u01EF" +
        "\x03\x02\x02\x02l\u01F1\x03\x02\x02\x02n\u01F9\x03\x02\x02\x02p\u01FF" +
        "\x03\x02\x02\x02r\u0206\x03\x02\x02\x02t\u0208\x03\x02\x02\x02v\u0214" +
        "\x03\x02\x02\x02x\u0218\x03\x02\x02\x02z\u021C\x03\x02\x02\x02|\u021E" +
        "\x03\x02\x02\x02~\u0228\x03\x02\x02\x02\x80\u022A\x03\x02\x02\x02\x82" +
        "\u022C\x03\x02\x02\x02\x84\u022E\x03\x02\x02\x02\x86\u0236\x03\x02\x02" +
        "\x02\x88\u0242\x03\x02\x02\x02\x8A\u0249\x03\x02\x02\x02\x8C\u025D\x03" +
        "\x02\x02\x02\x8E\u0261\x03\x02\x02\x02\x90\u0276\x03\x02\x02\x02\x92\u02A1" +
        "\x03\x02\x02\x02\x94\u02A3\x03\x02\x02\x02\x96\u02A7\x03\x02\x02\x02\x98" +
        "\u02AD\x03\x02\x02\x02\x9A\u02B1\x03\x02\x02\x02\x9C\u02B3\x03\x02\x02" +
        "\x02\x9E\u02BE\x03\x02\x02\x02\xA0\u02C5\x03\x02\x02\x02\xA2\u02EA\x03" +
        "\x02\x02\x02\xA4\u02EC\x03\x02\x02\x02\xA6\u02F3\x03\x02\x02\x02\xA8\u02FA" +
        "\x03\x02\x02\x02\xAA\u02FF\x03\x02\x02\x02\xAC\u0301\x03\x02\x02\x02\xAE" +
        "\u0306\x03\x02\x02\x02\xB0\u030B\x03\x02\x02\x02\xB2\u030F\x03\x02\x02" +
        "\x02\xB4\u0311\x03\x02\x02\x02\xB6\u0318\x03\x02\x02\x02\xB8\u031C\x03" +
        "\x02\x02\x02\xBA\u031E\x03\x02\x02\x02\xBC\u0325\x03\x02\x02\x02\xBE\u0327" +
        "\x03\x02\x02\x02\xC0\u0329\x03\x02\x02\x02\xC2\u032E\x03\x02\x02\x02\xC4" +
        "\u0332\x03\x02\x02\x02\xC6\u0338\x03\x02\x02\x02\xC8\xC9\x05\x04\x03\x02" +
        "\xC9\xCA\x07\x02\x02\x03\xCA\x03\x03\x02\x02\x02\xCB\xCC\x05\x88E\x02" +
        "\xCC\xCD\x05\x06\x04\x02\xCD\xCE\x05\x04\x03\x02\xCE\xD1\x03\x02\x02\x02" +
        "\xCF\xD1\x03\x02\x02\x02\xD0\xCB\x03\x02\x02\x02\xD0\xCF\x03\x02\x02\x02" +
        "\xD1\x05\x03\x02\x02\x02\xD2\xD9\x05\b\x05\x02\xD3\xD9\x05\x10\t\x02\xD4" +
        "\xD9\x05\x1A\x0E\x02\xD5\xD9\x05,\x17\x02\xD6\xD9\x056\x1C\x02\xD7\xD9" +
        "\x058\x1D\x02\xD8\xD2\x03\x02\x02\x02\xD8\xD3\x03\x02\x02\x02\xD8\xD4" +
        "\x03\x02\x02\x02\xD8\xD5\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD7" +
        "\x03\x02\x02\x02\xD9\x07\x03\x02\x02\x02\xDA\xDB\x07\x03\x02\x02\xDB\xDF" +
        "\x05\n\x06\x02\xDC\xDF\x05\f\x07\x02\xDD\xDF\x05\x0E\b\x02\xDE\xDA\x03" +
        "\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDD\x03\x02\x02\x02\xDF\t\x03" +
        "\x02\x02\x02\xE0\xE3\x054\x1B\x02\xE1\xE3\x05\f\x07\x02\xE2\xE0\x03\x02" +
        "\x02\x02\xE2\xE1\x03\x02\x02\x02\xE3\v\x03\x02\x02\x02\xE4\xE5\x07\x04" +
        "\x02\x02\xE5\xE6\x07T\x02\x02\xE6\xE7\x05(\x15\x02\xE7\xE8\x07\x05\x02" +
        "\x02\xE8\xE9\x05\x16\f\x02\xE9\xEA\x07\x06\x02\x02\xEA\xEB\x07\x07\x02" +
        "\x02\xEB\r\x03\x02\x02\x02\xEC\xED\x07\b\x02\x02\xED\xEE\x07T\x02\x02" +
        "\xEE\xEF\x05*\x16\x02\xEF\xF0\x07\x05\x02\x02\xF0\xF1\x05\x16\f\x02\xF1" +
        "\xF2\x07\x06\x02\x02\xF2\xF3\x07\x07\x02\x02\xF3\x0F\x03\x02\x02\x02\xF4" +
        "\xF5\x07\t\x02\x02\xF5\xF6\x05\x12\n\x02\xF6\x11\x03\x02\x02\x02\xF7\xFA" +
        "\x05\x14\v\x02\xF8\xFA\x05\"\x12\x02\xF9\xF7\x03\x02\x02\x02\xF9\xF8\x03" +
        "\x02\x02\x02\xFA\x13\x03\x02\x02\x02\xFB\xFC\x07\x04\x02\x02\xFC\xFD\x07" +
        "T\x02\x02\xFD\xFE\x07\x05\x02\x02\xFE\xFF\x05\x16\f\x02\xFF\u0100\x07" +
        "\x06\x02\x02\u0100\u0101\x07\x07\x02\x02\u0101\x15\x03\x02\x02\x02\u0102" +
        "\u0103\x05\x88E\x02\u0103\u0104\x05\x18\r\x02\u0104\u0105\x05\x16\f\x02" +
        "\u0105\u0108\x03\x02\x02\x02\u0106\u0108\x03\x02\x02\x02\u0107\u0102\x03" +
        "\x02\x02\x02\u0107\u0106\x03\x02\x02\x02\u0108\x17\x03\x02\x02\x02\u0109" +
        "\u0114\x05:\x1E\x02\u010A\u0114\x05d3\x02\u010B\u0114\x05B\"\x02\u010C" +
        "\u0114\x05L\'\x02\u010D\u0114\x05P)\x02\u010E\u0114\x05|?\x02\u010F\u0114" +
        "\x05T+\x02\u0110\u0114\x05X-\x02\u0111\u0114\x05\x80A\x02\u0112\u0114" +
        "\x05\x82B\x02\u0113\u0109\x03\x02\x02\x02\u0113\u010A\x03\x02\x02\x02" +
        "\u0113\u010B\x03\x02\x02\x02\u0113\u010C\x03\x02\x02\x02\u0113\u010D\x03" +
        "\x02\x02\x02\u0113\u010E\x03\x02\x02\x02\u0113\u010F\x03\x02\x02\x02\u0113" +
        "\u0110\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0112\x03\x02" +
        "\x02\x02\u0114\x19\x03\x02\x02\x02\u0115\u0116\x07\n\x02\x02\u0116\u0117" +
        "\x07T\x02\x02\u0117\u0118\x05(\x15\x02\u0118\u0119\x07\x05\x02\x02\u0119" +
        "\u011A\x05\x1C\x0F\x02\u011A\u011B\x07\x06\x02\x02\u011B\u011C\x07\x07" +
        "\x02\x02\u011C\x1B\x03\x02\x02\x02\u011D\u011E\x05\x88E\x02\u011E\u011F" +
        "\x05\x1E\x10\x02\u011F\u0120\x05\x1C\x0F\x02\u0120\u0123\x03\x02\x02\x02" +
        "\u0121\u0123\x03\x02\x02\x02\u0122\u011D\x03\x02\x02\x02\u0122\u0121\x03" +
        "\x02\x02\x02\u0123\x1D\x03\x02\x02\x02\u0124\u0125\x05 \x11\x02\u0125" +
        "\u0126\x05\x98M\x02\u0126\u0127\x07T\x02\x02\u0127\u0128\x05$\x13\x02" +
        "\u0128\u0129\x07\x07\x02\x02\u0129\x1F\x03\x02\x02\x02\u012A\u012D\x07" +
        "\v\x02\x02\u012B\u012D\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C" +
        "\u012B\x03\x02\x02\x02\u012D!\x03\x02\x02\x02\u012E\u012F\x07\n\x02\x02" +
        "\u012F\u0130\x07T\x02\x02\u0130\u0131\x07\x05\x02\x02\u0131\u0132\x05" +
        "\x1C\x0F\x02\u0132\u0133\x07\x06\x02\x02\u0133\u0134\x07\x07\x02\x02\u0134" +
        "#\x03\x02\x02\x02\u0135\u0136\x07\f\x02\x02\u0136\u0139\x05&\x14\x02\u0137" +
        "\u0139\x03\x02\x02\x02\u0138\u0135\x03\x02\x02\x02\u0138\u0137\x03\x02" +
        "\x02\x02\u0139%\x03\x02\x02\x02\u013A\u013F\x05<\x1F\x02\u013B\u013F\x07" +
        "U\x02\x02\u013C\u013D\x07\r\x02\x02\u013D\u013F\x07\x0E\x02\x02\u013E" +
        "\u013A\x03\x02\x02\x02\u013E\u013B\x03\x02\x02\x02\u013E\u013C\x03\x02" +
        "\x02\x02\u013F\'\x03\x02\x02\x02\u0140\u0141\x07\x0F\x02\x02\u0141\u0144" +
        "\x07T\x02\x02\u0142\u0144\x03\x02\x02\x02\u0143\u0140\x03\x02\x02\x02" +
        "\u0143\u0142\x03\x02\x02\x02\u0144)\x03\x02\x02\x02\u0145\u0146\x07\x10" +
        "\x02\x02\u0146\u0149\x07T\x02\x02\u0147\u0149\x03\x02\x02\x02\u0148\u0145" +
        "\x03\x02\x02\x02\u0148\u0147\x03\x02\x02\x02\u0149+\x03\x02\x02\x02\u014A" +
        "\u014B\x07\x11\x02\x02\u014B\u014C\x07T\x02\x02\u014C\u014D\x07\x05\x02" +
        "\x02\u014D\u014E\x05.\x18\x02\u014E\u014F\x07\x06\x02\x02\u014F\u0150" +
        "\x07\x07\x02\x02\u0150-\x03\x02\x02\x02\u0151\u0152\x07U\x02\x02\u0152" +
        "\u0153\x050\x19\x02\u0153/\x03\x02\x02\x02\u0154\u0155\x07\x12\x02\x02" +
        "\u0155\u0158\x052\x1A\x02\u0156\u0158\x03\x02\x02\x02\u0157\u0154\x03" +
        "\x02\x02\x02\u0157\u0156\x03\x02\x02\x02\u01581\x03\x02\x02\x02\u0159" +
        "\u015A\x07U\x02\x02\u015A\u015D\x050\x19\x02\u015B\u015D\x03\x02\x02\x02" +
        "\u015C\u0159\x03\x02\x02\x02\u015C\u015B\x03\x02\x02\x02\u015D3\x03\x02" +
        "\x02\x02\u015E\u015F\x07T\x02\x02\u015F\u0160\x07\f\x02\x02\u0160\u0161" +
        "\x05\xB8]\x02\u0161\u0162\x07\x13\x02\x02\u0162\u0163\x05p9\x02\u0163" +
        "\u0164\x07\x14\x02\x02\u0164\u0165\x07\x07\x02\x02\u01655\x03\x02\x02" +
        "\x02\u0166\u0167\x07\x15\x02\x02\u0167\u0168\x05\x98M\x02\u0168\u0169" +
        "\x07T\x02\x02\u0169\u016A\x07\x07\x02\x02\u016A7\x03\x02\x02\x02\u016B" +
        "\u016C\x07T\x02\x02\u016C\u016D\x07\x16\x02\x02\u016D\u016E\x07T\x02\x02" +
        "\u016E\u016F\x07\x07\x02\x02\u016F9\x03\x02\x02\x02\u0170\u0171\x07\x17" +
        "\x02\x02\u0171\u0172\x05\xA6T\x02\u0172\u0173\x07T\x02\x02\u0173\u0174" +
        "\x07\f\x02\x02\u0174\u0175\x05<\x1F\x02\u0175\u0176\x07\x07\x02\x02\u0176" +
        ";\x03\x02\x02\x02\u0177\u017C\x05> \x02\u0178\u017C\x05@!\x02\u0179\u017C" +
        "\x07R\x02\x02\u017A\u017C\x07\x18\x02\x02\u017B\u0177\x03\x02\x02\x02" +
        "\u017B\u0178\x03\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017A\x03" +
        "\x02\x02\x02\u017C=\x03\x02\x02\x02\u017D\u017E\t\x02\x02\x02\u017E?\x03" +
        "\x02\x02\x02\u017F\u0180\t\x03\x02\x02\u0180A\x03\x02\x02\x02\u0181\u0182" +
        "\x07\x1E\x02\x02\u0182\u0183\x05D#\x02\u0183C\x03\x02\x02\x02\u0184\u018B" +
        "\x05l7\x02\u0185\u0186\x07\f\x02\x02\u0186\u0187\x05F$\x02\u0187\u0188" +
        "\x07\x07\x02\x02\u0188\u018B\x03\x02\x02\x02\u0189\u018B\x07\x07\x02\x02" +
        "\u018A\u0184\x03\x02\x02\x02\u018A\u0185\x03\x02\x02\x02\u018A\u0189\x03" +
        "\x02\x02\x02\u018BE\x03\x02\x02\x02\u018C\u018D\x07\x05\x02\x02\u018D" +
        "\u018E\x05H%\x02\u018E\u018F\x07\x06\x02\x02\u018F\u0196\x03\x02\x02\x02" +
        "\u0190\u0191\x07\r\x02\x02\u0191\u0192\x05J&\x02\u0192\u0193\x07\x0E\x02" +
        "\x02\u0193\u0196\x03\x02\x02\x02\u0194\u0196\x07T\x02\x02\u0195\u018C" +
        "\x03\x02\x02\x02\u0195\u0190\x03\x02\x02\x02\u0195\u0194\x03\x02\x02\x02" +
        "\u0196G\x03\x02\x02\x02\u0197\u019E\x07\x1F\x02\x02\u0198\u0199\x07 \x02" +
        "\x02\u0199\u019E\x05\xBC_\x02\u019A\u019B\x07T\x02\x02\u019B\u019E\x05" +
        "\xBC_\x02\u019C\u019E\x03\x02\x02\x02\u019D\u0197\x03\x02\x02\x02\u019D" +
        "\u0198\x03\x02\x02\x02\u019D\u019A\x03\x02\x02\x02\u019D\u019C\x03\x02" +
        "\x02\x02\u019EI\x03\x02\x02\x02\u019F\u01A4\x07\x1F\x02\x02\u01A0\u01A1" +
        "\x07T\x02\x02\u01A1\u01A4\x05\xBC_\x02\u01A2\u01A4\x03\x02\x02\x02\u01A3" +
        "\u019F\x03\x02\x02\x02\u01A3\u01A0\x03\x02\x02\x02\u01A3\u01A2\x03\x02" +
        "\x02\x02\u01A4K\x03\x02\x02\x02\u01A5\u01A6\x07!\x02\x02\u01A6\u01A7\x05" +
        "N(\x02\u01A7M\x03\x02\x02\x02\u01A8\u01A9\x05b2\x02\u01A9\u01AA\x05Z." +
        "\x02\u01AA\u01B0\x03\x02\x02\x02\u01AB\u01AC\x05\xB8]\x02\u01AC\u01AD" +
        "\x05l7\x02\u01AD\u01B0\x03\x02\x02\x02\u01AE\u01B0\x07\x07\x02\x02\u01AF" +
        "\u01A8\x03\x02\x02\x02\u01AF\u01AB\x03\x02\x02\x02\u01AF\u01AE\x03\x02" +
        "\x02\x02\u01B0O\x03\x02\x02\x02\u01B1\u01B2\x07\"\x02\x02\u01B2\u01B3" +
        "\x05R*\x02\u01B3Q\x03\x02\x02\x02\u01B4\u01B5\x05b2\x02\u01B5\u01B6\x05" +
        "Z.\x02\u01B6\u01BB\x03\x02\x02\x02\u01B7\u01B8\x05\xB8]\x02\u01B8\u01B9" +
        "\x05l7\x02\u01B9\u01BB\x03\x02\x02\x02\u01BA\u01B4\x03\x02\x02\x02\u01BA" +
        "\u01B7\x03\x02\x02\x02\u01BBS\x03\x02\x02\x02\u01BC\u01BD\x07#\x02\x02" +
        "\u01BD\u01BE\x05V,\x02\u01BEU\x03\x02\x02\x02\u01BF\u01C3\x05Z.\x02\u01C0" +
        "\u01C3\x05\x80A\x02\u01C1\u01C3\x05\x82B\x02\u01C2\u01BF\x03\x02\x02\x02" +
        "\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C1\x03\x02\x02\x02\u01C3W\x03\x02" +
        "\x02\x02\u01C4\u01C5\x07 \x02\x02\u01C5\u01C6\x05b2\x02\u01C6\u01C7\x05" +
        "Z.\x02\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01CA\x05Z.\x02\u01C9\u01C4\x03" +
        "\x02\x02\x02\u01C9\u01C8\x03\x02\x02\x02\u01CAY\x03\x02\x02\x02\u01CB" +
        "\u01CC\x07$\x02\x02\u01CC\u01CD\x05\x98M\x02\u01CD\u01CE\x05\\/\x02\u01CE" +
        "\u01CF\x07\x07\x02\x02\u01CF[\x03\x02\x02\x02\u01D0\u01D3\x05^0\x02\u01D1" +
        "\u01D3\x07T\x02\x02\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D1\x03\x02\x02" +
        "\x02\u01D3]\x03\x02\x02\x02\u01D4\u01D5\x07\v\x02\x02\u01D5_\x03\x02\x02" +
        "\x02\u01D6\u01D9\x07 \x02\x02\u01D7\u01D9\x03\x02\x02\x02\u01D8\u01D6" +
        "\x03\x02\x02\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9a\x03\x02\x02\x02\u01DA" +
        "\u01DD\x07#\x02\x02\u01DB\u01DD\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02" +
        "\x02\u01DC\u01DB\x03\x02\x02\x02\u01DDc\x03\x02\x02\x02\u01DE\u01DF\x05" +
        "\xB8]\x02\u01DF\u01E0\x05l7\x02\u01E0\u01E3\x03\x02\x02\x02\u01E1\u01E3" +
        "\x05f4\x02\u01E2\u01DE\x03\x02\x02\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3" +
        "e\x03\x02\x02\x02\u01E4\u01E5\x05j6\x02\u01E5\u01E6\x05h5\x02\u01E6\u01E7" +
        "\x05\xB8]\x02\u01E7\u01E8\x05l7\x02\u01E8g\x03\x02\x02\x02\u01E9\u01EA" +
        "\x05j6\x02\u01EA\u01EB\x05h5\x02\u01EB\u01EE\x03\x02\x02\x02\u01EC\u01EE" +
        "\x03\x02\x02\x02\u01ED\u01E9\x03\x02\x02\x02\u01ED\u01EC\x03\x02\x02\x02" +
        "\u01EEi\x03\x02\x02\x02\u01EF\u01F0\t\x04\x02\x02\u01F0k\x03\x02\x02\x02" +
        "\u01F1\u01F2\x05n8\x02\u01F2\u01F3\x07\x13\x02\x02\u01F3\u01F4\x05p9\x02" +
        "\u01F4\u01F5\x07\x14\x02\x02\u01F5\u01F6\x07\x07\x02\x02\u01F6m\x03\x02" +
        "\x02\x02\u01F7\u01FA\x07T\x02\x02\u01F8\u01FA\x03\x02\x02\x02\u01F9\u01F7" +
        "\x03\x02\x02\x02\u01F9\u01F8\x03\x02\x02\x02\u01FAo\x03\x02\x02\x02\u01FB" +
        "\u01FC\x05t;\x02\u01FC\u01FD\x05r:\x02\u01FD\u0200\x03\x02\x02\x02\u01FE" +
        "\u0200\x03\x02\x02\x02\u01FF\u01FB\x03\x02\x02\x02\u01FF\u01FE\x03\x02" +
        "\x02\x02\u0200q\x03\x02\x02\x02\u0201\u0202\x07\x12\x02\x02\u0202\u0203" +
        "\x05t;\x02\u0203\u0204\x05r:\x02\u0204\u0207\x03\x02\x02\x02\u0205\u0207" +
        "\x03\x02\x02\x02\u0206\u0201\x03\x02\x02\x02\u0206\u0205\x03\x02\x02\x02" +
        "\u0207s\x03\x02\x02\x02\u0208\u0209\x05\x88E\x02\u0209\u020A\x05v<\x02" +
        "\u020Au\x03\x02\x02\x02\u020B\u020C\x07(\x02\x02\u020C\u020D\x05\x98M" +
        "\x02\u020D\u020E\x05x=\x02\u020E\u020F\x05$\x13\x02\u020F\u0215\x03\x02" +
        "\x02\x02\u0210\u0211\x05\x98M\x02\u0211\u0212\x05z>\x02\u0212\u0213\x05" +
        "x=\x02\u0213\u0215\x03\x02\x02\x02\u0214\u020B\x03\x02\x02\x02\u0214\u0210" +
        "\x03\x02\x02\x02\u0215w\x03\x02\x02\x02\u0216\u0219\x05\x94K\x02\u0217" +
        "\u0219\x07T\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0217\x03\x02\x02" +
        "\x02\u0219y\x03\x02\x02\x02\u021A\u021D\x07)\x02\x02\u021B\u021D\x03\x02" +
        "\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021B\x03\x02\x02\x02\u021D" +
        "{\x03\x02\x02\x02\u021E\u021F\x07*\x02\x02\u021F\u0220\x07+\x02\x02\u0220" +
        "\u0221\x05\x98M\x02\u0221\u0222\x05~@\x02\u0222\u0223\x07";
    WebIDLParser._serializedATNSegment1 = ",\x02\x02\u0223\u0224\x07\x07\x02\x02\u0224}\x03\x02\x02\x02\u0225\u0226" +
        "\x07\x12\x02\x02\u0226\u0229\x05\x98M\x02\u0227\u0229\x03\x02\x02\x02" +
        "\u0228\u0225\x03\x02\x02\x02\u0228\u0227\x03\x02\x02\x02\u0229\x7F\x03" +
        "\x02\x02\x02\u022A\u022B\x05\x84C\x02\u022B\x81\x03\x02\x02\x02\u022C" +
        "\u022D\x05\x86D\x02\u022D\x83\x03\x02\x02\x02\u022E\u022F\x07-\x02\x02" +
        "\u022F\u0230\x07+\x02\x02\u0230\u0231\x05\x98M\x02\u0231\u0232\x07\x12" +
        "\x02\x02\u0232\u0233\x05\x98M\x02\u0233\u0234\x07,\x02\x02\u0234\u0235" +
        "\x07\x07\x02\x02\u0235\x85\x03\x02\x02\x02\u0236\u0237\x07.\x02\x02\u0237" +
        "\u0238\x07+\x02\x02\u0238\u0239\x05\x98M\x02\u0239\u023A\x07,\x02\x02" +
        "\u023A\u023B\x07\x07\x02\x02\u023B\x87\x03\x02\x02\x02\u023C\u023D\x07" +
        "\r\x02\x02\u023D\u023E\x05\x8CG\x02\u023E\u023F\x05\x8AF\x02\u023F\u0240" +
        "\x07\x0E\x02\x02\u0240\u0243\x03\x02\x02\x02\u0241\u0243\x03\x02\x02\x02" +
        "\u0242\u023C\x03\x02\x02\x02\u0242\u0241\x03\x02\x02\x02\u0243\x89\x03" +
        "\x02\x02\x02\u0244\u0245\x07\x12\x02\x02\u0245\u0246\x05\x8CG\x02\u0246" +
        "\u0247\x05\x8AF\x02\u0247\u024A\x03\x02\x02\x02\u0248\u024A\x03\x02\x02" +
        "\x02\u0249\u0244\x03\x02\x02\x02\u0249\u0248\x03\x02\x02\x02\u024A\x8B" +
        "\x03\x02\x02\x02\u024B\u024C\x07\x13\x02\x02\u024C\u024D\x05\x90I\x02" +
        "\u024D\u024E\x07\x14\x02\x02\u024E\u024F\x05\x8EH\x02\u024F\u025E\x03" +
        "\x02\x02\x02\u0250\u0251\x07\r\x02\x02\u0251\u0252\x05\x90I\x02\u0252" +
        "\u0253\x07\x0E\x02\x02\u0253\u0254\x05\x8EH\x02\u0254\u025E\x03\x02\x02" +
        "\x02\u0255\u0256\x07\x05\x02\x02\u0256\u0257\x05\x90I\x02\u0257\u0258" +
        "\x07\x06\x02\x02\u0258\u0259\x05\x8EH\x02\u0259\u025E\x03\x02\x02\x02" +
        "\u025A\u025B\x05\x92J\x02\u025B\u025C\x05\x8EH\x02\u025C\u025E\x03\x02" +
        "\x02\x02\u025D\u024B\x03\x02\x02\x02\u025D\u0250\x03\x02\x02\x02\u025D" +
        "\u0255\x03\x02\x02\x02\u025D\u025A\x03\x02\x02\x02\u025E\x8D\x03\x02\x02" +
        "\x02\u025F\u0262\x05\x8CG\x02\u0260\u0262\x03\x02\x02\x02\u0261\u025F" +
        "\x03\x02\x02\x02\u0261\u0260\x03\x02\x02\x02\u0262\x8F\x03\x02\x02\x02" +
        "\u0263\u0264\x07\x13\x02\x02\u0264\u0265\x05\x90I\x02\u0265\u0266\x07" +
        "\x14\x02\x02\u0266\u0267\x05\x90I\x02\u0267\u0277\x03\x02\x02\x02\u0268" +
        "\u0269\x07\r\x02\x02\u0269\u026A\x05\x90I\x02\u026A\u026B\x07\x0E\x02" +
        "\x02\u026B\u026C\x05\x90I\x02\u026C\u0277\x03\x02\x02\x02\u026D\u026E" +
        "\x07\x05\x02\x02\u026E\u026F\x05\x90I\x02\u026F\u0270\x07\x06\x02\x02" +
        "\u0270\u0271\x05\x90I\x02\u0271\u0277\x03\x02\x02\x02\u0272\u0273\x05" +
        "\x96L\x02\u0273\u0274\x05\x90I\x02\u0274\u0277\x03\x02\x02\x02\u0275\u0277" +
        "\x03\x02\x02\x02\u0276\u0263\x03\x02\x02\x02\u0276\u0268\x03\x02\x02\x02" +
        "\u0276\u026D\x03\x02\x02\x02\u0276\u0272\x03\x02\x02\x02\u0276\u0275\x03" +
        "\x02\x02\x02\u0277\x91\x03\x02\x02\x02\u0278\u02A2\x07R\x02\x02\u0279" +
        "\u02A2\x07S\x02\x02\u027A\u02A2\x07T\x02\x02\u027B\u02A2\x07U\x02\x02" +
        "\u027C\u02A2\x07X\x02\x02\u027D\u02A2\x07/\x02\x02\u027E\u02A2\x07\x1B" +
        "\x02\x02\u027F\u02A2\x070\x02\x02\u0280\u02A2\x07)\x02\x02\u0281\u02A2" +
        "\x07\x0F\x02\x02\u0282\u02A2\x07\x07\x02\x02\u0283\u02A2\x07+\x02\x02" +
        "\u0284\u02A2\x07\f\x02\x02\u0285\u02A2\x07,\x02\x02\u0286\u02A2\x071\x02" +
        "\x02\u0287\u02A2\x072\x02\x02\u0288\u02A2\x073\x02\x02\u0289\u02A2\x07" +
        "4\x02\x02\u028A\u02A2\x07\x1C\x02\x02\u028B\u02A2\x07\x1D\x02\x02\u028C" +
        "\u02A2\x075\x02\x02\u028D\u02A2\x076\x02\x02\u028E\u02A2\x077\x02\x02" +
        "\u028F\u02A2\x078\x02\x02\u0290\u02A2\x079\x02\x02\u0291\u02A2\x07:\x02" +
        "\x02\u0292\u02A2\x07\x1A\x02\x02\u0293\u02A2\x07;\x02\x02\u0294\u02A2" +
        "\x07<\x02\x02\u0295\u02A2\x07\x18\x02\x02\u0296\u02A2\x07=\x02\x02\u0297" +
        "\u02A2\x07>\x02\x02\u0298\u02A2\x07?\x02\x02\u0299\u02A2\x07(\x02\x02" +
        "\u029A\u02A2\x07@\x02\x02\u029B\u02A2\x07A\x02\x02\u029C\u02A2\x07\x19" +
        "\x02\x02\u029D\u02A2\x07B\x02\x02\u029E\u02A2\x07C\x02\x02\u029F\u02A2" +
        "\x05\x94K\x02\u02A0\u02A2\x05\xA4S\x02\u02A1\u0278\x03\x02\x02\x02\u02A1" +
        "\u0279\x03\x02\x02\x02\u02A1\u027A\x03\x02\x02\x02\u02A1\u027B\x03\x02" +
        "\x02\x02\u02A1\u027C\x03\x02\x02\x02\u02A1\u027D\x03\x02\x02\x02\u02A1" +
        "\u027E\x03\x02\x02\x02\u02A1\u027F\x03\x02\x02\x02\u02A1\u0280\x03\x02" +
        "\x02\x02\u02A1\u0281\x03\x02\x02\x02\u02A1\u0282\x03\x02\x02\x02\u02A1" +
        "\u0283\x03\x02\x02\x02\u02A1\u0284\x03\x02\x02\x02\u02A1\u0285\x03\x02" +
        "\x02\x02\u02A1\u0286\x03\x02\x02\x02\u02A1\u0287\x03\x02\x02\x02\u02A1" +
        "\u0288\x03\x02\x02\x02\u02A1\u0289\x03\x02\x02\x02\u02A1\u028A\x03\x02" +
        "\x02\x02\u02A1\u028B\x03\x02\x02\x02\u02A1\u028C\x03\x02\x02\x02\u02A1" +
        "\u028D\x03\x02\x02\x02\u02A1\u028E\x03\x02\x02\x02\u02A1\u028F\x03\x02" +
        "\x02\x02\u02A1\u0290\x03\x02\x02\x02\u02A1\u0291\x03\x02\x02\x02\u02A1" +
        "\u0292\x03\x02\x02\x02\u02A1\u0293\x03\x02\x02\x02\u02A1\u0294\x03\x02" +
        "\x02\x02\u02A1\u0295\x03\x02\x02\x02\u02A1\u0296\x03\x02\x02\x02\u02A1" +
        "\u0297\x03\x02\x02\x02\u02A1\u0298\x03\x02\x02\x02\u02A1\u0299\x03\x02" +
        "\x02\x02\u02A1\u029A\x03\x02\x02\x02\u02A1\u029B\x03\x02\x02\x02\u02A1" +
        "\u029C\x03\x02\x02\x02\u02A1\u029D\x03\x02\x02\x02\u02A1\u029E\x03\x02" +
        "\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A1\u02A0\x03\x02\x02\x02\u02A2" +
        "\x93\x03\x02\x02\x02\u02A3\u02A4\t\x05\x02\x02\u02A4\x95\x03\x02\x02\x02" +
        "\u02A5\u02A8\x05\x92J\x02\u02A6\u02A8\x07\x12\x02\x02\u02A7\u02A5\x03" +
        "\x02\x02\x02\u02A7\u02A6\x03\x02\x02\x02\u02A8\x97\x03\x02\x02\x02\u02A9" +
        "\u02AE\x05\x9AN\x02\u02AA\u02AB\x05\x9CO\x02\u02AB\u02AC\x05\xB6\\\x02" +
        "\u02AC\u02AE\x03\x02\x02\x02\u02AD\u02A9\x03\x02\x02\x02\u02AD\u02AA\x03" +
        "\x02\x02\x02\u02AE\x99\x03\x02\x02\x02\u02AF\u02B2\x05\xA2R\x02\u02B0" +
        "\u02B2\x077\x02\x02\u02B1\u02AF\x03\x02\x02\x02\u02B1\u02B0\x03\x02\x02" +
        "\x02\u02B2\x9B\x03\x02\x02\x02\u02B3\u02B4\x07\x13\x02\x02\u02B4\u02B5" +
        "\x05\x9EP\x02\u02B5\u02B6\x07?\x02\x02\u02B6\u02B7\x05\x9EP\x02\u02B7" +
        "\u02B8\x05\xA0Q\x02\u02B8\u02B9\x07\x14\x02\x02\u02B9\x9D\x03\x02\x02" +
        "\x02\u02BA\u02BF\x05\xA2R\x02\u02BB\u02BC\x05\x9CO\x02\u02BC\u02BD\x05" +
        "\xB6\\\x02\u02BD\u02BF\x03\x02\x02\x02\u02BE\u02BA\x03\x02\x02\x02\u02BE" +
        "\u02BB\x03\x02\x02\x02\u02BF\x9F\x03\x02\x02\x02\u02C0\u02C1\x07?\x02" +
        "\x02\u02C1\u02C2\x05\x9EP\x02\u02C2\u02C3\x05\xA0Q\x02\u02C3\u02C6\x03" +
        "\x02\x02\x02\u02C4\u02C6\x03\x02\x02\x02\u02C5\u02C0\x03\x02\x02\x02\u02C5" +
        "\u02C4\x03\x02\x02\x02\u02C6\xA1\x03\x02\x02\x02\u02C7\u02C8\x05\xA8U" +
        "\x02\u02C8\u02C9\x05\xB6\\\x02\u02C9\u02EB\x03\x02\x02\x02\u02CA\u02CB" +
        "\x05\xB4[\x02\u02CB\u02CC\x05\xB6\\\x02\u02CC\u02EB\x03\x02\x02\x02\u02CD" +
        "\u02CE\x072\x02\x02\u02CE\u02EB\x05\xB6\\\x02\u02CF\u02D0\x073\x02\x02" +
        "\u02D0\u02EB\x05\xB6\\\x02\u02D1\u02D2\x076\x02\x02\u02D2\u02EB\x05\xB6" +
        "\\\x02\u02D3\u02D4\x07T\x02\x02\u02D4\u02EB\x05\xB6\\\x02\u02D5\u02D6" +
        "\x07@\x02\x02\u02D6\u02D7\x07+\x02\x02\u02D7\u02D8\x05\x98M\x02\u02D8" +
        "\u02D9\x07,\x02\x02\u02D9\u02DA\x05\xB6\\\x02\u02DA\u02EB\x03\x02\x02" +
        "\x02\u02DB\u02DC\x07=\x02\x02\u02DC\u02EB\x05\xB6\\\x02\u02DD\u02DE\x07" +
        "5\x02\x02\u02DE\u02EB\x05\xB6\\\x02\u02DF\u02E0\x07E\x02\x02\u02E0\u02EB" +
        "\x05\xB6\\\x02\u02E1\u02E2\x05\xA4S\x02\u02E2\u02E3\x05\xB6\\\x02\u02E3" +
        "\u02EB\x03\x02\x02\x02\u02E4\u02E5\x074\x02\x02\u02E5\u02E6\x07+\x02\x02" +
        "\u02E6\u02E7\x05\x98M\x02\u02E7\u02E8\x07,\x02\x02\u02E8\u02E9\x05\xB6" +
        "\\\x02\u02E9\u02EB\x03\x02\x02\x02\u02EA\u02C7\x03\x02\x02\x02\u02EA\u02CA" +
        "\x03\x02\x02\x02\u02EA\u02CD\x03\x02\x02\x02\u02EA\u02CF\x03\x02\x02\x02" +
        "\u02EA\u02D1\x03\x02\x02\x02\u02EA\u02D3\x03\x02\x02\x02\u02EA\u02D5\x03" +
        "\x02\x02\x02\u02EA\u02DB\x03\x02\x02\x02\u02EA\u02DD\x03\x02\x02\x02\u02EA" +
        "\u02DF\x03\x02\x02\x02\u02EA\u02E1\x03\x02\x02\x02\u02EA\u02E4\x03\x02" +
        "\x02\x02\u02EB\xA3\x03\x02\x02\x02\u02EC\u02ED\t\x06\x02\x02\u02ED\xA5" +
        "\x03\x02\x02\x02\u02EE\u02EF\x05\xA8U\x02\u02EF\u02F0\x05\xB6\\\x02\u02F0" +
        "\u02F4\x03\x02\x02\x02\u02F1\u02F2\x07T\x02\x02\u02F2\u02F4\x05\xB6\\" +
        "\x02\u02F3\u02EE\x03\x02\x02\x02\u02F3\u02F1\x03\x02\x02\x02\u02F4\xA7" +
        "\x03\x02\x02\x02\u02F5\u02FB\x05\xAEX\x02\u02F6\u02FB\x05\xAAV\x02\u02F7" +
        "\u02FB\x078\x02\x02\u02F8\u02FB\x079\x02\x02\u02F9\u02FB\x07>\x02\x02" +
        "\u02FA\u02F5\x03\x02\x02\x02\u02FA\u02F6\x03\x02\x02\x02\u02FA\u02F7\x03" +
        "\x02\x02\x02\u02FA\u02F8\x03\x02\x02\x02\u02FA\u02F9\x03\x02\x02\x02\u02FB" +
        "\xA9\x03\x02\x02\x02\u02FC\u02FD\x07D\x02\x02\u02FD\u0300\x05\xACW\x02" +
        "\u02FE\u0300\x05\xACW\x02\u02FF\u02FC\x03\x02\x02\x02\u02FF\u02FE\x03" +
        "\x02\x02\x02\u0300\xAB\x03\x02\x02\x02\u0301\u0302\t\x07\x02\x02\u0302" +
        "\xAD\x03\x02\x02\x02\u0303\u0304\x07B\x02\x02\u0304\u0307\x05\xB0Y\x02" +
        "\u0305\u0307\x05\xB0Y\x02\u0306\u0303\x03\x02\x02\x02\u0306\u0305\x03" +
        "\x02\x02\x02\u0307\xAF\x03\x02\x02\x02\u0308\u030C\x07A\x02\x02\u0309" +
        "\u030A\x07<\x02\x02\u030A\u030C\x05\xB2Z\x02\u030B\u0308\x03\x02\x02\x02" +
        "\u030B\u0309\x03\x02\x02\x02\u030C\xB1\x03\x02\x02\x02\u030D\u0310\x07" +
        "<\x02\x02\u030E\u0310\x03\x02\x02\x02\u030F\u030D\x03\x02\x02\x02\u030F" +
        "\u030E\x03\x02\x02\x02\u0310\xB3\x03\x02\x02\x02\u0311\u0312\x07Q\x02" +
        "\x02\u0312\u0313\x07+\x02\x02\u0313\u0314\x05\xB8]\x02\u0314\u0315\x07" +
        ",\x02\x02\u0315\xB5\x03\x02\x02\x02\u0316\u0319\x071\x02\x02\u0317\u0319" +
        "\x03\x02\x02\x02\u0318\u0316\x03\x02\x02\x02\u0318\u0317\x03\x02\x02\x02" +
        "\u0319\xB7\x03\x02\x02\x02\u031A\u031D\x05\x98M\x02\u031B\u031D\x07C\x02" +
        "\x02\u031C\u031A\x03\x02\x02\x02\u031C\u031B\x03\x02\x02\x02\u031D\xB9" +
        "\x03\x02\x02\x02\u031E\u031F\x07T\x02\x02\u031F\u0320\x05\xBC_\x02\u0320" +
        "\xBB\x03\x02\x02\x02\u0321\u0322\x07\x12\x02\x02\u0322\u0323\x07T\x02" +
        "\x02\u0323\u0326\x05\xBC_\x02\u0324\u0326\x03\x02\x02\x02\u0325\u0321" +
        "\x03\x02\x02\x02\u0325\u0324\x03\x02\x02\x02\u0326\xBD\x03\x02\x02\x02" +
        "\u0327\u0328\x07T\x02\x02\u0328\xBF\x03\x02\x02\x02\u0329\u032A\x07T\x02" +
        "\x02\u032A\u032B\x07\x13\x02\x02\u032B\u032C\x05p9\x02\u032C\u032D\x07" +
        "\x14\x02\x02\u032D\xC1\x03\x02\x02\x02\u032E\u032F\x07T\x02\x02\u032F" +
        "\u0330\x07\f\x02\x02\u0330\u0331\x07T\x02\x02\u0331\xC3\x03\x02\x02\x02" +
        "\u0332\u0333\x07T\x02\x02\u0333\u0334\x07\f\x02\x02\u0334\u0335\x07\x13" +
        "\x02\x02\u0335\u0336\x05\xBA^\x02\u0336\u0337\x07\x14\x02\x02\u0337\xC5" +
        "\x03\x02\x02\x02\u0338\u0339\x07T\x02\x02\u0339\u033A\x07\f\x02\x02\u033A" +
        "\u033B\x07T\x02\x02\u033B\u033C\x07\x13\x02\x02\u033C\u033D\x05p9\x02" +
        "\u033D\u033E\x07\x14\x02\x02\u033E\xC7\x03\x02\x02\x02;\xD0\xD8\xDE\xE2" +
        "\xF9\u0107\u0113\u0122\u012C\u0138\u013E\u0143\u0148\u0157\u015C\u017B" +
        "\u018A\u0195\u019D\u01A3\u01AF\u01BA\u01C2\u01C9\u01D2\u01D8\u01DC\u01E2" +
        "\u01ED\u01F9\u01FF\u0206\u0214\u0218\u021C\u0228\u0242\u0249\u025D\u0261" +
        "\u0276\u02A1\u02A7\u02AD\u02B1\u02BE\u02C5\u02EA\u02F3\u02FA\u02FF\u0306" +
        "\u030B\u030F\u0318\u031C\u0325";
    WebIDLParser._serializedATN = Utils.join([
        WebIDLParser._serializedATNSegment0,
        WebIDLParser._serializedATNSegment1,
    ], "");
    return WebIDLParser;
}(Parser_1.Parser));
exports.WebIDLParser = WebIDLParser;
var WebIDLContext = /** @class */ (function (_super) {
    __extends(WebIDLContext, _super);
    function WebIDLContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WebIDLContext.prototype.definitions = function () {
        return this.getRuleContext(0, DefinitionsContext);
    };
    WebIDLContext.prototype.EOF = function () { return this.getToken(WebIDLParser.EOF, 0); };
    Object.defineProperty(WebIDLContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_webIDL; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WebIDLContext.prototype.enterRule = function (listener) {
        if (listener.enterWebIDL) {
            listener.enterWebIDL(this);
        }
    };
    // @Override
    WebIDLContext.prototype.exitRule = function (listener) {
        if (listener.exitWebIDL) {
            listener.exitWebIDL(this);
        }
    };
    // @Override
    WebIDLContext.prototype.accept = function (visitor) {
        if (visitor.visitWebIDL) {
            return visitor.visitWebIDL(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WebIDLContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WebIDLContext = WebIDLContext;
var DefinitionsContext = /** @class */ (function (_super) {
    __extends(DefinitionsContext, _super);
    function DefinitionsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefinitionsContext.prototype.extendedAttributeList = function () {
        return this.tryGetRuleContext(0, ExtendedAttributeListContext);
    };
    DefinitionsContext.prototype.definition = function () {
        return this.tryGetRuleContext(0, DefinitionContext);
    };
    DefinitionsContext.prototype.definitions = function () {
        return this.tryGetRuleContext(0, DefinitionsContext);
    };
    Object.defineProperty(DefinitionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_definitions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DefinitionsContext.prototype.enterRule = function (listener) {
        if (listener.enterDefinitions) {
            listener.enterDefinitions(this);
        }
    };
    // @Override
    DefinitionsContext.prototype.exitRule = function (listener) {
        if (listener.exitDefinitions) {
            listener.exitDefinitions(this);
        }
    };
    // @Override
    DefinitionsContext.prototype.accept = function (visitor) {
        if (visitor.visitDefinitions) {
            return visitor.visitDefinitions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DefinitionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DefinitionsContext = DefinitionsContext;
var DefinitionContext = /** @class */ (function (_super) {
    __extends(DefinitionContext, _super);
    function DefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefinitionContext.prototype.callbackOrInterface = function () {
        return this.tryGetRuleContext(0, CallbackOrInterfaceContext);
    };
    DefinitionContext.prototype.partial = function () {
        return this.tryGetRuleContext(0, PartialContext);
    };
    DefinitionContext.prototype.dictionary = function () {
        return this.tryGetRuleContext(0, DictionaryContext);
    };
    DefinitionContext.prototype.enum_ = function () {
        return this.tryGetRuleContext(0, Enum_Context);
    };
    DefinitionContext.prototype.typedef = function () {
        return this.tryGetRuleContext(0, TypedefContext);
    };
    DefinitionContext.prototype.implementsStatement = function () {
        return this.tryGetRuleContext(0, ImplementsStatementContext);
    };
    Object.defineProperty(DefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_definition; },
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
var CallbackOrInterfaceContext = /** @class */ (function (_super) {
    __extends(CallbackOrInterfaceContext, _super);
    function CallbackOrInterfaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CallbackOrInterfaceContext.prototype.callbackRestOrInterface = function () {
        return this.tryGetRuleContext(0, CallbackRestOrInterfaceContext);
    };
    CallbackOrInterfaceContext.prototype.interface_ = function () {
        return this.tryGetRuleContext(0, Interface_Context);
    };
    CallbackOrInterfaceContext.prototype.class_ = function () {
        return this.tryGetRuleContext(0, Class_Context);
    };
    Object.defineProperty(CallbackOrInterfaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_callbackOrInterface; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CallbackOrInterfaceContext.prototype.enterRule = function (listener) {
        if (listener.enterCallbackOrInterface) {
            listener.enterCallbackOrInterface(this);
        }
    };
    // @Override
    CallbackOrInterfaceContext.prototype.exitRule = function (listener) {
        if (listener.exitCallbackOrInterface) {
            listener.exitCallbackOrInterface(this);
        }
    };
    // @Override
    CallbackOrInterfaceContext.prototype.accept = function (visitor) {
        if (visitor.visitCallbackOrInterface) {
            return visitor.visitCallbackOrInterface(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CallbackOrInterfaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CallbackOrInterfaceContext = CallbackOrInterfaceContext;
var CallbackRestOrInterfaceContext = /** @class */ (function (_super) {
    __extends(CallbackRestOrInterfaceContext, _super);
    function CallbackRestOrInterfaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CallbackRestOrInterfaceContext.prototype.callbackRest = function () {
        return this.tryGetRuleContext(0, CallbackRestContext);
    };
    CallbackRestOrInterfaceContext.prototype.interface_ = function () {
        return this.tryGetRuleContext(0, Interface_Context);
    };
    Object.defineProperty(CallbackRestOrInterfaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_callbackRestOrInterface; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CallbackRestOrInterfaceContext.prototype.enterRule = function (listener) {
        if (listener.enterCallbackRestOrInterface) {
            listener.enterCallbackRestOrInterface(this);
        }
    };
    // @Override
    CallbackRestOrInterfaceContext.prototype.exitRule = function (listener) {
        if (listener.exitCallbackRestOrInterface) {
            listener.exitCallbackRestOrInterface(this);
        }
    };
    // @Override
    CallbackRestOrInterfaceContext.prototype.accept = function (visitor) {
        if (visitor.visitCallbackRestOrInterface) {
            return visitor.visitCallbackRestOrInterface(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CallbackRestOrInterfaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CallbackRestOrInterfaceContext = CallbackRestOrInterfaceContext;
var Interface_Context = /** @class */ (function (_super) {
    __extends(Interface_Context, _super);
    function Interface_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Interface_Context.prototype.IDENTIFIER_WEBIDL = function () { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    Interface_Context.prototype.inheritance = function () {
        return this.getRuleContext(0, InheritanceContext);
    };
    Interface_Context.prototype.interfaceMembers = function () {
        return this.getRuleContext(0, InterfaceMembersContext);
    };
    Object.defineProperty(Interface_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_interface_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Interface_Context.prototype.enterRule = function (listener) {
        if (listener.enterInterface_) {
            listener.enterInterface_(this);
        }
    };
    // @Override
    Interface_Context.prototype.exitRule = function (listener) {
        if (listener.exitInterface_) {
            listener.exitInterface_(this);
        }
    };
    // @Override
    Interface_Context.prototype.accept = function (visitor) {
        if (visitor.visitInterface_) {
            return visitor.visitInterface_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Interface_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Interface_Context = Interface_Context;
var Class_Context = /** @class */ (function (_super) {
    __extends(Class_Context, _super);
    function Class_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Class_Context.prototype.IDENTIFIER_WEBIDL = function () { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    Class_Context.prototype.extension = function () {
        return this.getRuleContext(0, ExtensionContext);
    };
    Class_Context.prototype.interfaceMembers = function () {
        return this.getRuleContext(0, InterfaceMembersContext);
    };
    Object.defineProperty(Class_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_class_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Class_Context.prototype.enterRule = function (listener) {
        if (listener.enterClass_) {
            listener.enterClass_(this);
        }
    };
    // @Override
    Class_Context.prototype.exitRule = function (listener) {
        if (listener.exitClass_) {
            listener.exitClass_(this);
        }
    };
    // @Override
    Class_Context.prototype.accept = function (visitor) {
        if (visitor.visitClass_) {
            return visitor.visitClass_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Class_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Class_Context = Class_Context;
var PartialContext = /** @class */ (function (_super) {
    __extends(PartialContext, _super);
    function PartialContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PartialContext.prototype.partialDefinition = function () {
        return this.getRuleContext(0, PartialDefinitionContext);
    };
    Object.defineProperty(PartialContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_partial; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PartialContext.prototype.enterRule = function (listener) {
        if (listener.enterPartial) {
            listener.enterPartial(this);
        }
    };
    // @Override
    PartialContext.prototype.exitRule = function (listener) {
        if (listener.exitPartial) {
            listener.exitPartial(this);
        }
    };
    // @Override
    PartialContext.prototype.accept = function (visitor) {
        if (visitor.visitPartial) {
            return visitor.visitPartial(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PartialContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PartialContext = PartialContext;
var PartialDefinitionContext = /** @class */ (function (_super) {
    __extends(PartialDefinitionContext, _super);
    function PartialDefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PartialDefinitionContext.prototype.partialInterface = function () {
        return this.tryGetRuleContext(0, PartialInterfaceContext);
    };
    PartialDefinitionContext.prototype.partialDictionary = function () {
        return this.tryGetRuleContext(0, PartialDictionaryContext);
    };
    Object.defineProperty(PartialDefinitionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_partialDefinition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PartialDefinitionContext.prototype.enterRule = function (listener) {
        if (listener.enterPartialDefinition) {
            listener.enterPartialDefinition(this);
        }
    };
    // @Override
    PartialDefinitionContext.prototype.exitRule = function (listener) {
        if (listener.exitPartialDefinition) {
            listener.exitPartialDefinition(this);
        }
    };
    // @Override
    PartialDefinitionContext.prototype.accept = function (visitor) {
        if (visitor.visitPartialDefinition) {
            return visitor.visitPartialDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PartialDefinitionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PartialDefinitionContext = PartialDefinitionContext;
var PartialInterfaceContext = /** @class */ (function (_super) {
    __extends(PartialInterfaceContext, _super);
    function PartialInterfaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PartialInterfaceContext.prototype.IDENTIFIER_WEBIDL = function () { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    PartialInterfaceContext.prototype.interfaceMembers = function () {
        return this.getRuleContext(0, InterfaceMembersContext);
    };
    Object.defineProperty(PartialInterfaceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_partialInterface; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PartialInterfaceContext.prototype.enterRule = function (listener) {
        if (listener.enterPartialInterface) {
            listener.enterPartialInterface(this);
        }
    };
    // @Override
    PartialInterfaceContext.prototype.exitRule = function (listener) {
        if (listener.exitPartialInterface) {
            listener.exitPartialInterface(this);
        }
    };
    // @Override
    PartialInterfaceContext.prototype.accept = function (visitor) {
        if (visitor.visitPartialInterface) {
            return visitor.visitPartialInterface(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PartialInterfaceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PartialInterfaceContext = PartialInterfaceContext;
var InterfaceMembersContext = /** @class */ (function (_super) {
    __extends(InterfaceMembersContext, _super);
    function InterfaceMembersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterfaceMembersContext.prototype.extendedAttributeList = function () {
        return this.tryGetRuleContext(0, ExtendedAttributeListContext);
    };
    InterfaceMembersContext.prototype.interfaceMember = function () {
        return this.tryGetRuleContext(0, InterfaceMemberContext);
    };
    InterfaceMembersContext.prototype.interfaceMembers = function () {
        return this.tryGetRuleContext(0, InterfaceMembersContext);
    };
    Object.defineProperty(InterfaceMembersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_interfaceMembers; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterfaceMembersContext.prototype.enterRule = function (listener) {
        if (listener.enterInterfaceMembers) {
            listener.enterInterfaceMembers(this);
        }
    };
    // @Override
    InterfaceMembersContext.prototype.exitRule = function (listener) {
        if (listener.exitInterfaceMembers) {
            listener.exitInterfaceMembers(this);
        }
    };
    // @Override
    InterfaceMembersContext.prototype.accept = function (visitor) {
        if (visitor.visitInterfaceMembers) {
            return visitor.visitInterfaceMembers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterfaceMembersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterfaceMembersContext = InterfaceMembersContext;
var InterfaceMemberContext = /** @class */ (function (_super) {
    __extends(InterfaceMemberContext, _super);
    function InterfaceMemberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InterfaceMemberContext.prototype.const_ = function () {
        return this.tryGetRuleContext(0, Const_Context);
    };
    InterfaceMemberContext.prototype.operation = function () {
        return this.tryGetRuleContext(0, OperationContext);
    };
    InterfaceMemberContext.prototype.serializer = function () {
        return this.tryGetRuleContext(0, SerializerContext);
    };
    InterfaceMemberContext.prototype.stringifier = function () {
        return this.tryGetRuleContext(0, StringifierContext);
    };
    InterfaceMemberContext.prototype.staticMember = function () {
        return this.tryGetRuleContext(0, StaticMemberContext);
    };
    InterfaceMemberContext.prototype.iterable = function () {
        return this.tryGetRuleContext(0, IterableContext);
    };
    InterfaceMemberContext.prototype.readonlyMember = function () {
        return this.tryGetRuleContext(0, ReadonlyMemberContext);
    };
    InterfaceMemberContext.prototype.readWriteAttribute = function () {
        return this.tryGetRuleContext(0, ReadWriteAttributeContext);
    };
    InterfaceMemberContext.prototype.readWriteMaplike = function () {
        return this.tryGetRuleContext(0, ReadWriteMaplikeContext);
    };
    InterfaceMemberContext.prototype.readWriteSetlike = function () {
        return this.tryGetRuleContext(0, ReadWriteSetlikeContext);
    };
    Object.defineProperty(InterfaceMemberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_interfaceMember; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InterfaceMemberContext.prototype.enterRule = function (listener) {
        if (listener.enterInterfaceMember) {
            listener.enterInterfaceMember(this);
        }
    };
    // @Override
    InterfaceMemberContext.prototype.exitRule = function (listener) {
        if (listener.exitInterfaceMember) {
            listener.exitInterfaceMember(this);
        }
    };
    // @Override
    InterfaceMemberContext.prototype.accept = function (visitor) {
        if (visitor.visitInterfaceMember) {
            return visitor.visitInterfaceMember(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InterfaceMemberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InterfaceMemberContext = InterfaceMemberContext;
var DictionaryContext = /** @class */ (function (_super) {
    __extends(DictionaryContext, _super);
    function DictionaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DictionaryContext.prototype.IDENTIFIER_WEBIDL = function () { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    DictionaryContext.prototype.inheritance = function () {
        return this.getRuleContext(0, InheritanceContext);
    };
    DictionaryContext.prototype.dictionaryMembers = function () {
        return this.getRuleContext(0, DictionaryMembersContext);
    };
    Object.defineProperty(DictionaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_dictionary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DictionaryContext.prototype.enterRule = function (listener) {
        if (listener.enterDictionary) {
            listener.enterDictionary(this);
        }
    };
    // @Override
    DictionaryContext.prototype.exitRule = function (listener) {
        if (listener.exitDictionary) {
            listener.exitDictionary(this);
        }
    };
    // @Override
    DictionaryContext.prototype.accept = function (visitor) {
        if (visitor.visitDictionary) {
            return visitor.visitDictionary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DictionaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DictionaryContext = DictionaryContext;
var DictionaryMembersContext = /** @class */ (function (_super) {
    __extends(DictionaryMembersContext, _super);
    function DictionaryMembersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DictionaryMembersContext.prototype.extendedAttributeList = function () {
        return this.tryGetRuleContext(0, ExtendedAttributeListContext);
    };
    DictionaryMembersContext.prototype.dictionaryMember = function () {
        return this.tryGetRuleContext(0, DictionaryMemberContext);
    };
    DictionaryMembersContext.prototype.dictionaryMembers = function () {
        return this.tryGetRuleContext(0, DictionaryMembersContext);
    };
    Object.defineProperty(DictionaryMembersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_dictionaryMembers; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DictionaryMembersContext.prototype.enterRule = function (listener) {
        if (listener.enterDictionaryMembers) {
            listener.enterDictionaryMembers(this);
        }
    };
    // @Override
    DictionaryMembersContext.prototype.exitRule = function (listener) {
        if (listener.exitDictionaryMembers) {
            listener.exitDictionaryMembers(this);
        }
    };
    // @Override
    DictionaryMembersContext.prototype.accept = function (visitor) {
        if (visitor.visitDictionaryMembers) {
            return visitor.visitDictionaryMembers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DictionaryMembersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DictionaryMembersContext = DictionaryMembersContext;
var DictionaryMemberContext = /** @class */ (function (_super) {
    __extends(DictionaryMemberContext, _super);
    function DictionaryMemberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DictionaryMemberContext.prototype.required = function () {
        return this.getRuleContext(0, RequiredContext);
    };
    DictionaryMemberContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    DictionaryMemberContext.prototype.IDENTIFIER_WEBIDL = function () { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    DictionaryMemberContext.prototype.default_ = function () {
        return this.getRuleContext(0, Default_Context);
    };
    Object.defineProperty(DictionaryMemberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_dictionaryMember; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DictionaryMemberContext.prototype.enterRule = function (listener) {
        if (listener.enterDictionaryMember) {
            listener.enterDictionaryMember(this);
        }
    };
    // @Override
    DictionaryMemberContext.prototype.exitRule = function (listener) {
        if (listener.exitDictionaryMember) {
            listener.exitDictionaryMember(this);
        }
    };
    // @Override
    DictionaryMemberContext.prototype.accept = function (visitor) {
        if (visitor.visitDictionaryMember) {
            return visitor.visitDictionaryMember(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DictionaryMemberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DictionaryMemberContext = DictionaryMemberContext;
var RequiredContext = /** @class */ (function (_super) {
    __extends(RequiredContext, _super);
    function RequiredContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(RequiredContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_required; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RequiredContext.prototype.enterRule = function (listener) {
        if (listener.enterRequired) {
            listener.enterRequired(this);
        }
    };
    // @Override
    RequiredContext.prototype.exitRule = function (listener) {
        if (listener.exitRequired) {
            listener.exitRequired(this);
        }
    };
    // @Override
    RequiredContext.prototype.accept = function (visitor) {
        if (visitor.visitRequired) {
            return visitor.visitRequired(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RequiredContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RequiredContext = RequiredContext;
var PartialDictionaryContext = /** @class */ (function (_super) {
    __extends(PartialDictionaryContext, _super);
    function PartialDictionaryContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PartialDictionaryContext.prototype.IDENTIFIER_WEBIDL = function () { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    PartialDictionaryContext.prototype.dictionaryMembers = function () {
        return this.getRuleContext(0, DictionaryMembersContext);
    };
    Object.defineProperty(PartialDictionaryContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_partialDictionary; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PartialDictionaryContext.prototype.enterRule = function (listener) {
        if (listener.enterPartialDictionary) {
            listener.enterPartialDictionary(this);
        }
    };
    // @Override
    PartialDictionaryContext.prototype.exitRule = function (listener) {
        if (listener.exitPartialDictionary) {
            listener.exitPartialDictionary(this);
        }
    };
    // @Override
    PartialDictionaryContext.prototype.accept = function (visitor) {
        if (visitor.visitPartialDictionary) {
            return visitor.visitPartialDictionary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PartialDictionaryContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PartialDictionaryContext = PartialDictionaryContext;
var Default_Context = /** @class */ (function (_super) {
    __extends(Default_Context, _super);
    function Default_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Default_Context.prototype.defaultValue = function () {
        return this.tryGetRuleContext(0, DefaultValueContext);
    };
    Object.defineProperty(Default_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_default_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Default_Context.prototype.enterRule = function (listener) {
        if (listener.enterDefault_) {
            listener.enterDefault_(this);
        }
    };
    // @Override
    Default_Context.prototype.exitRule = function (listener) {
        if (listener.exitDefault_) {
            listener.exitDefault_(this);
        }
    };
    // @Override
    Default_Context.prototype.accept = function (visitor) {
        if (visitor.visitDefault_) {
            return visitor.visitDefault_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Default_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Default_Context = Default_Context;
var DefaultValueContext = /** @class */ (function (_super) {
    __extends(DefaultValueContext, _super);
    function DefaultValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DefaultValueContext.prototype.constValue = function () {
        return this.tryGetRuleContext(0, ConstValueContext);
    };
    DefaultValueContext.prototype.STRING_WEBIDL = function () { return this.tryGetToken(WebIDLParser.STRING_WEBIDL, 0); };
    Object.defineProperty(DefaultValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_defaultValue; },
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
var InheritanceContext = /** @class */ (function (_super) {
    __extends(InheritanceContext, _super);
    function InheritanceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InheritanceContext.prototype.IDENTIFIER_WEBIDL = function () { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    Object.defineProperty(InheritanceContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_inheritance; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InheritanceContext.prototype.enterRule = function (listener) {
        if (listener.enterInheritance) {
            listener.enterInheritance(this);
        }
    };
    // @Override
    InheritanceContext.prototype.exitRule = function (listener) {
        if (listener.exitInheritance) {
            listener.exitInheritance(this);
        }
    };
    // @Override
    InheritanceContext.prototype.accept = function (visitor) {
        if (visitor.visitInheritance) {
            return visitor.visitInheritance(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InheritanceContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InheritanceContext = InheritanceContext;
var ExtensionContext = /** @class */ (function (_super) {
    __extends(ExtensionContext, _super);
    function ExtensionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtensionContext.prototype.IDENTIFIER_WEBIDL = function () { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    Object.defineProperty(ExtensionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_extension; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtensionContext.prototype.enterRule = function (listener) {
        if (listener.enterExtension) {
            listener.enterExtension(this);
        }
    };
    // @Override
    ExtensionContext.prototype.exitRule = function (listener) {
        if (listener.exitExtension) {
            listener.exitExtension(this);
        }
    };
    // @Override
    ExtensionContext.prototype.accept = function (visitor) {
        if (visitor.visitExtension) {
            return visitor.visitExtension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtensionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtensionContext = ExtensionContext;
var Enum_Context = /** @class */ (function (_super) {
    __extends(Enum_Context, _super);
    function Enum_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Enum_Context.prototype.IDENTIFIER_WEBIDL = function () { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    Enum_Context.prototype.enumValueList = function () {
        return this.getRuleContext(0, EnumValueListContext);
    };
    Object.defineProperty(Enum_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_enum_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Enum_Context.prototype.enterRule = function (listener) {
        if (listener.enterEnum_) {
            listener.enterEnum_(this);
        }
    };
    // @Override
    Enum_Context.prototype.exitRule = function (listener) {
        if (listener.exitEnum_) {
            listener.exitEnum_(this);
        }
    };
    // @Override
    Enum_Context.prototype.accept = function (visitor) {
        if (visitor.visitEnum_) {
            return visitor.visitEnum_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Enum_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Enum_Context = Enum_Context;
var EnumValueListContext = /** @class */ (function (_super) {
    __extends(EnumValueListContext, _super);
    function EnumValueListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumValueListContext.prototype.STRING_WEBIDL = function () { return this.getToken(WebIDLParser.STRING_WEBIDL, 0); };
    EnumValueListContext.prototype.enumValueListComma = function () {
        return this.getRuleContext(0, EnumValueListCommaContext);
    };
    Object.defineProperty(EnumValueListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_enumValueList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumValueListContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumValueList) {
            listener.enterEnumValueList(this);
        }
    };
    // @Override
    EnumValueListContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumValueList) {
            listener.exitEnumValueList(this);
        }
    };
    // @Override
    EnumValueListContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumValueList) {
            return visitor.visitEnumValueList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumValueListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumValueListContext = EnumValueListContext;
var EnumValueListCommaContext = /** @class */ (function (_super) {
    __extends(EnumValueListCommaContext, _super);
    function EnumValueListCommaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumValueListCommaContext.prototype.enumValueListString = function () {
        return this.tryGetRuleContext(0, EnumValueListStringContext);
    };
    Object.defineProperty(EnumValueListCommaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_enumValueListComma; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumValueListCommaContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumValueListComma) {
            listener.enterEnumValueListComma(this);
        }
    };
    // @Override
    EnumValueListCommaContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumValueListComma) {
            listener.exitEnumValueListComma(this);
        }
    };
    // @Override
    EnumValueListCommaContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumValueListComma) {
            return visitor.visitEnumValueListComma(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumValueListCommaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumValueListCommaContext = EnumValueListCommaContext;
var EnumValueListStringContext = /** @class */ (function (_super) {
    __extends(EnumValueListStringContext, _super);
    function EnumValueListStringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumValueListStringContext.prototype.STRING_WEBIDL = function () { return this.tryGetToken(WebIDLParser.STRING_WEBIDL, 0); };
    EnumValueListStringContext.prototype.enumValueListComma = function () {
        return this.tryGetRuleContext(0, EnumValueListCommaContext);
    };
    Object.defineProperty(EnumValueListStringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_enumValueListString; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EnumValueListStringContext.prototype.enterRule = function (listener) {
        if (listener.enterEnumValueListString) {
            listener.enterEnumValueListString(this);
        }
    };
    // @Override
    EnumValueListStringContext.prototype.exitRule = function (listener) {
        if (listener.exitEnumValueListString) {
            listener.exitEnumValueListString(this);
        }
    };
    // @Override
    EnumValueListStringContext.prototype.accept = function (visitor) {
        if (visitor.visitEnumValueListString) {
            return visitor.visitEnumValueListString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EnumValueListStringContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EnumValueListStringContext = EnumValueListStringContext;
var CallbackRestContext = /** @class */ (function (_super) {
    __extends(CallbackRestContext, _super);
    function CallbackRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CallbackRestContext.prototype.IDENTIFIER_WEBIDL = function () { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    CallbackRestContext.prototype.returnType = function () {
        return this.getRuleContext(0, ReturnTypeContext);
    };
    CallbackRestContext.prototype.argumentList = function () {
        return this.getRuleContext(0, ArgumentListContext);
    };
    Object.defineProperty(CallbackRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_callbackRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CallbackRestContext.prototype.enterRule = function (listener) {
        if (listener.enterCallbackRest) {
            listener.enterCallbackRest(this);
        }
    };
    // @Override
    CallbackRestContext.prototype.exitRule = function (listener) {
        if (listener.exitCallbackRest) {
            listener.exitCallbackRest(this);
        }
    };
    // @Override
    CallbackRestContext.prototype.accept = function (visitor) {
        if (visitor.visitCallbackRest) {
            return visitor.visitCallbackRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CallbackRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CallbackRestContext = CallbackRestContext;
var TypedefContext = /** @class */ (function (_super) {
    __extends(TypedefContext, _super);
    function TypedefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypedefContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    TypedefContext.prototype.IDENTIFIER_WEBIDL = function () { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    Object.defineProperty(TypedefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_typedef; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TypedefContext.prototype.enterRule = function (listener) {
        if (listener.enterTypedef) {
            listener.enterTypedef(this);
        }
    };
    // @Override
    TypedefContext.prototype.exitRule = function (listener) {
        if (listener.exitTypedef) {
            listener.exitTypedef(this);
        }
    };
    // @Override
    TypedefContext.prototype.accept = function (visitor) {
        if (visitor.visitTypedef) {
            return visitor.visitTypedef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TypedefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TypedefContext = TypedefContext;
var ImplementsStatementContext = /** @class */ (function (_super) {
    __extends(ImplementsStatementContext, _super);
    function ImplementsStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ImplementsStatementContext.prototype.IDENTIFIER_WEBIDL = function (i) {
        if (i === undefined) {
            return this.getTokens(WebIDLParser.IDENTIFIER_WEBIDL);
        }
        else {
            return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, i);
        }
    };
    Object.defineProperty(ImplementsStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_implementsStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImplementsStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterImplementsStatement) {
            listener.enterImplementsStatement(this);
        }
    };
    // @Override
    ImplementsStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitImplementsStatement) {
            listener.exitImplementsStatement(this);
        }
    };
    // @Override
    ImplementsStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitImplementsStatement) {
            return visitor.visitImplementsStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImplementsStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImplementsStatementContext = ImplementsStatementContext;
var Const_Context = /** @class */ (function (_super) {
    __extends(Const_Context, _super);
    function Const_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Const_Context.prototype.constType = function () {
        return this.getRuleContext(0, ConstTypeContext);
    };
    Const_Context.prototype.IDENTIFIER_WEBIDL = function () { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    Const_Context.prototype.constValue = function () {
        return this.getRuleContext(0, ConstValueContext);
    };
    Object.defineProperty(Const_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_const_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Const_Context.prototype.enterRule = function (listener) {
        if (listener.enterConst_) {
            listener.enterConst_(this);
        }
    };
    // @Override
    Const_Context.prototype.exitRule = function (listener) {
        if (listener.exitConst_) {
            listener.exitConst_(this);
        }
    };
    // @Override
    Const_Context.prototype.accept = function (visitor) {
        if (visitor.visitConst_) {
            return visitor.visitConst_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Const_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Const_Context = Const_Context;
var ConstValueContext = /** @class */ (function (_super) {
    __extends(ConstValueContext, _super);
    function ConstValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstValueContext.prototype.booleanLiteral = function () {
        return this.tryGetRuleContext(0, BooleanLiteralContext);
    };
    ConstValueContext.prototype.floatLiteral = function () {
        return this.tryGetRuleContext(0, FloatLiteralContext);
    };
    ConstValueContext.prototype.INTEGER_WEBIDL = function () { return this.tryGetToken(WebIDLParser.INTEGER_WEBIDL, 0); };
    Object.defineProperty(ConstValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_constValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstValueContext.prototype.enterRule = function (listener) {
        if (listener.enterConstValue) {
            listener.enterConstValue(this);
        }
    };
    // @Override
    ConstValueContext.prototype.exitRule = function (listener) {
        if (listener.exitConstValue) {
            listener.exitConstValue(this);
        }
    };
    // @Override
    ConstValueContext.prototype.accept = function (visitor) {
        if (visitor.visitConstValue) {
            return visitor.visitConstValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstValueContext = ConstValueContext;
var BooleanLiteralContext = /** @class */ (function (_super) {
    __extends(BooleanLiteralContext, _super);
    function BooleanLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(BooleanLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_booleanLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BooleanLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterBooleanLiteral) {
            listener.enterBooleanLiteral(this);
        }
    };
    // @Override
    BooleanLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitBooleanLiteral) {
            listener.exitBooleanLiteral(this);
        }
    };
    // @Override
    BooleanLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BooleanLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BooleanLiteralContext = BooleanLiteralContext;
var FloatLiteralContext = /** @class */ (function (_super) {
    __extends(FloatLiteralContext, _super);
    function FloatLiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FloatLiteralContext.prototype.FLOAT_WEBIDL = function () { return this.getToken(WebIDLParser.FLOAT_WEBIDL, 0); };
    Object.defineProperty(FloatLiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_floatLiteral; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FloatLiteralContext.prototype.enterRule = function (listener) {
        if (listener.enterFloatLiteral) {
            listener.enterFloatLiteral(this);
        }
    };
    // @Override
    FloatLiteralContext.prototype.exitRule = function (listener) {
        if (listener.exitFloatLiteral) {
            listener.exitFloatLiteral(this);
        }
    };
    // @Override
    FloatLiteralContext.prototype.accept = function (visitor) {
        if (visitor.visitFloatLiteral) {
            return visitor.visitFloatLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FloatLiteralContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FloatLiteralContext = FloatLiteralContext;
var SerializerContext = /** @class */ (function (_super) {
    __extends(SerializerContext, _super);
    function SerializerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SerializerContext.prototype.serializerRest = function () {
        return this.getRuleContext(0, SerializerRestContext);
    };
    Object.defineProperty(SerializerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_serializer; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SerializerContext.prototype.enterRule = function (listener) {
        if (listener.enterSerializer) {
            listener.enterSerializer(this);
        }
    };
    // @Override
    SerializerContext.prototype.exitRule = function (listener) {
        if (listener.exitSerializer) {
            listener.exitSerializer(this);
        }
    };
    // @Override
    SerializerContext.prototype.accept = function (visitor) {
        if (visitor.visitSerializer) {
            return visitor.visitSerializer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SerializerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SerializerContext = SerializerContext;
var SerializerRestContext = /** @class */ (function (_super) {
    __extends(SerializerRestContext, _super);
    function SerializerRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SerializerRestContext.prototype.operationRest = function () {
        return this.tryGetRuleContext(0, OperationRestContext);
    };
    SerializerRestContext.prototype.serializationPattern = function () {
        return this.tryGetRuleContext(0, SerializationPatternContext);
    };
    Object.defineProperty(SerializerRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_serializerRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SerializerRestContext.prototype.enterRule = function (listener) {
        if (listener.enterSerializerRest) {
            listener.enterSerializerRest(this);
        }
    };
    // @Override
    SerializerRestContext.prototype.exitRule = function (listener) {
        if (listener.exitSerializerRest) {
            listener.exitSerializerRest(this);
        }
    };
    // @Override
    SerializerRestContext.prototype.accept = function (visitor) {
        if (visitor.visitSerializerRest) {
            return visitor.visitSerializerRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SerializerRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SerializerRestContext = SerializerRestContext;
var SerializationPatternContext = /** @class */ (function (_super) {
    __extends(SerializationPatternContext, _super);
    function SerializationPatternContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SerializationPatternContext.prototype.serializationPatternMap = function () {
        return this.tryGetRuleContext(0, SerializationPatternMapContext);
    };
    SerializationPatternContext.prototype.serializationPatternList = function () {
        return this.tryGetRuleContext(0, SerializationPatternListContext);
    };
    SerializationPatternContext.prototype.IDENTIFIER_WEBIDL = function () { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    Object.defineProperty(SerializationPatternContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_serializationPattern; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SerializationPatternContext.prototype.enterRule = function (listener) {
        if (listener.enterSerializationPattern) {
            listener.enterSerializationPattern(this);
        }
    };
    // @Override
    SerializationPatternContext.prototype.exitRule = function (listener) {
        if (listener.exitSerializationPattern) {
            listener.exitSerializationPattern(this);
        }
    };
    // @Override
    SerializationPatternContext.prototype.accept = function (visitor) {
        if (visitor.visitSerializationPattern) {
            return visitor.visitSerializationPattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SerializationPatternContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SerializationPatternContext = SerializationPatternContext;
var SerializationPatternMapContext = /** @class */ (function (_super) {
    __extends(SerializationPatternMapContext, _super);
    function SerializationPatternMapContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SerializationPatternMapContext.prototype.identifiers = function () {
        return this.tryGetRuleContext(0, IdentifiersContext);
    };
    SerializationPatternMapContext.prototype.IDENTIFIER_WEBIDL = function () { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    Object.defineProperty(SerializationPatternMapContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_serializationPatternMap; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SerializationPatternMapContext.prototype.enterRule = function (listener) {
        if (listener.enterSerializationPatternMap) {
            listener.enterSerializationPatternMap(this);
        }
    };
    // @Override
    SerializationPatternMapContext.prototype.exitRule = function (listener) {
        if (listener.exitSerializationPatternMap) {
            listener.exitSerializationPatternMap(this);
        }
    };
    // @Override
    SerializationPatternMapContext.prototype.accept = function (visitor) {
        if (visitor.visitSerializationPatternMap) {
            return visitor.visitSerializationPatternMap(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SerializationPatternMapContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SerializationPatternMapContext = SerializationPatternMapContext;
var SerializationPatternListContext = /** @class */ (function (_super) {
    __extends(SerializationPatternListContext, _super);
    function SerializationPatternListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SerializationPatternListContext.prototype.IDENTIFIER_WEBIDL = function () { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    SerializationPatternListContext.prototype.identifiers = function () {
        return this.tryGetRuleContext(0, IdentifiersContext);
    };
    Object.defineProperty(SerializationPatternListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_serializationPatternList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SerializationPatternListContext.prototype.enterRule = function (listener) {
        if (listener.enterSerializationPatternList) {
            listener.enterSerializationPatternList(this);
        }
    };
    // @Override
    SerializationPatternListContext.prototype.exitRule = function (listener) {
        if (listener.exitSerializationPatternList) {
            listener.exitSerializationPatternList(this);
        }
    };
    // @Override
    SerializationPatternListContext.prototype.accept = function (visitor) {
        if (visitor.visitSerializationPatternList) {
            return visitor.visitSerializationPatternList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SerializationPatternListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SerializationPatternListContext = SerializationPatternListContext;
var StringifierContext = /** @class */ (function (_super) {
    __extends(StringifierContext, _super);
    function StringifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringifierContext.prototype.stringifierRest = function () {
        return this.getRuleContext(0, StringifierRestContext);
    };
    Object.defineProperty(StringifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_stringifier; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringifierContext.prototype.enterRule = function (listener) {
        if (listener.enterStringifier) {
            listener.enterStringifier(this);
        }
    };
    // @Override
    StringifierContext.prototype.exitRule = function (listener) {
        if (listener.exitStringifier) {
            listener.exitStringifier(this);
        }
    };
    // @Override
    StringifierContext.prototype.accept = function (visitor) {
        if (visitor.visitStringifier) {
            return visitor.visitStringifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringifierContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringifierContext = StringifierContext;
var StringifierRestContext = /** @class */ (function (_super) {
    __extends(StringifierRestContext, _super);
    function StringifierRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringifierRestContext.prototype.readOnly = function () {
        return this.tryGetRuleContext(0, ReadOnlyContext);
    };
    StringifierRestContext.prototype.attributeRest = function () {
        return this.tryGetRuleContext(0, AttributeRestContext);
    };
    StringifierRestContext.prototype.returnType = function () {
        return this.tryGetRuleContext(0, ReturnTypeContext);
    };
    StringifierRestContext.prototype.operationRest = function () {
        return this.tryGetRuleContext(0, OperationRestContext);
    };
    Object.defineProperty(StringifierRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_stringifierRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StringifierRestContext.prototype.enterRule = function (listener) {
        if (listener.enterStringifierRest) {
            listener.enterStringifierRest(this);
        }
    };
    // @Override
    StringifierRestContext.prototype.exitRule = function (listener) {
        if (listener.exitStringifierRest) {
            listener.exitStringifierRest(this);
        }
    };
    // @Override
    StringifierRestContext.prototype.accept = function (visitor) {
        if (visitor.visitStringifierRest) {
            return visitor.visitStringifierRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StringifierRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StringifierRestContext = StringifierRestContext;
var StaticMemberContext = /** @class */ (function (_super) {
    __extends(StaticMemberContext, _super);
    function StaticMemberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StaticMemberContext.prototype.staticMemberRest = function () {
        return this.getRuleContext(0, StaticMemberRestContext);
    };
    Object.defineProperty(StaticMemberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_staticMember; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StaticMemberContext.prototype.enterRule = function (listener) {
        if (listener.enterStaticMember) {
            listener.enterStaticMember(this);
        }
    };
    // @Override
    StaticMemberContext.prototype.exitRule = function (listener) {
        if (listener.exitStaticMember) {
            listener.exitStaticMember(this);
        }
    };
    // @Override
    StaticMemberContext.prototype.accept = function (visitor) {
        if (visitor.visitStaticMember) {
            return visitor.visitStaticMember(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StaticMemberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StaticMemberContext = StaticMemberContext;
var StaticMemberRestContext = /** @class */ (function (_super) {
    __extends(StaticMemberRestContext, _super);
    function StaticMemberRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StaticMemberRestContext.prototype.readOnly = function () {
        return this.tryGetRuleContext(0, ReadOnlyContext);
    };
    StaticMemberRestContext.prototype.attributeRest = function () {
        return this.tryGetRuleContext(0, AttributeRestContext);
    };
    StaticMemberRestContext.prototype.returnType = function () {
        return this.tryGetRuleContext(0, ReturnTypeContext);
    };
    StaticMemberRestContext.prototype.operationRest = function () {
        return this.tryGetRuleContext(0, OperationRestContext);
    };
    Object.defineProperty(StaticMemberRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_staticMemberRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StaticMemberRestContext.prototype.enterRule = function (listener) {
        if (listener.enterStaticMemberRest) {
            listener.enterStaticMemberRest(this);
        }
    };
    // @Override
    StaticMemberRestContext.prototype.exitRule = function (listener) {
        if (listener.exitStaticMemberRest) {
            listener.exitStaticMemberRest(this);
        }
    };
    // @Override
    StaticMemberRestContext.prototype.accept = function (visitor) {
        if (visitor.visitStaticMemberRest) {
            return visitor.visitStaticMemberRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StaticMemberRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StaticMemberRestContext = StaticMemberRestContext;
var ReadonlyMemberContext = /** @class */ (function (_super) {
    __extends(ReadonlyMemberContext, _super);
    function ReadonlyMemberContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReadonlyMemberContext.prototype.readonlyMemberRest = function () {
        return this.getRuleContext(0, ReadonlyMemberRestContext);
    };
    Object.defineProperty(ReadonlyMemberContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_readonlyMember; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReadonlyMemberContext.prototype.enterRule = function (listener) {
        if (listener.enterReadonlyMember) {
            listener.enterReadonlyMember(this);
        }
    };
    // @Override
    ReadonlyMemberContext.prototype.exitRule = function (listener) {
        if (listener.exitReadonlyMember) {
            listener.exitReadonlyMember(this);
        }
    };
    // @Override
    ReadonlyMemberContext.prototype.accept = function (visitor) {
        if (visitor.visitReadonlyMember) {
            return visitor.visitReadonlyMember(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReadonlyMemberContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReadonlyMemberContext = ReadonlyMemberContext;
var ReadonlyMemberRestContext = /** @class */ (function (_super) {
    __extends(ReadonlyMemberRestContext, _super);
    function ReadonlyMemberRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReadonlyMemberRestContext.prototype.attributeRest = function () {
        return this.tryGetRuleContext(0, AttributeRestContext);
    };
    ReadonlyMemberRestContext.prototype.readWriteMaplike = function () {
        return this.tryGetRuleContext(0, ReadWriteMaplikeContext);
    };
    ReadonlyMemberRestContext.prototype.readWriteSetlike = function () {
        return this.tryGetRuleContext(0, ReadWriteSetlikeContext);
    };
    Object.defineProperty(ReadonlyMemberRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_readonlyMemberRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReadonlyMemberRestContext.prototype.enterRule = function (listener) {
        if (listener.enterReadonlyMemberRest) {
            listener.enterReadonlyMemberRest(this);
        }
    };
    // @Override
    ReadonlyMemberRestContext.prototype.exitRule = function (listener) {
        if (listener.exitReadonlyMemberRest) {
            listener.exitReadonlyMemberRest(this);
        }
    };
    // @Override
    ReadonlyMemberRestContext.prototype.accept = function (visitor) {
        if (visitor.visitReadonlyMemberRest) {
            return visitor.visitReadonlyMemberRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReadonlyMemberRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReadonlyMemberRestContext = ReadonlyMemberRestContext;
var ReadWriteAttributeContext = /** @class */ (function (_super) {
    __extends(ReadWriteAttributeContext, _super);
    function ReadWriteAttributeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReadWriteAttributeContext.prototype.readOnly = function () {
        return this.tryGetRuleContext(0, ReadOnlyContext);
    };
    ReadWriteAttributeContext.prototype.attributeRest = function () {
        return this.getRuleContext(0, AttributeRestContext);
    };
    Object.defineProperty(ReadWriteAttributeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_readWriteAttribute; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReadWriteAttributeContext.prototype.enterRule = function (listener) {
        if (listener.enterReadWriteAttribute) {
            listener.enterReadWriteAttribute(this);
        }
    };
    // @Override
    ReadWriteAttributeContext.prototype.exitRule = function (listener) {
        if (listener.exitReadWriteAttribute) {
            listener.exitReadWriteAttribute(this);
        }
    };
    // @Override
    ReadWriteAttributeContext.prototype.accept = function (visitor) {
        if (visitor.visitReadWriteAttribute) {
            return visitor.visitReadWriteAttribute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReadWriteAttributeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReadWriteAttributeContext = ReadWriteAttributeContext;
var AttributeRestContext = /** @class */ (function (_super) {
    __extends(AttributeRestContext, _super);
    function AttributeRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributeRestContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    AttributeRestContext.prototype.attributeName = function () {
        return this.getRuleContext(0, AttributeNameContext);
    };
    Object.defineProperty(AttributeRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_attributeRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributeRestContext.prototype.enterRule = function (listener) {
        if (listener.enterAttributeRest) {
            listener.enterAttributeRest(this);
        }
    };
    // @Override
    AttributeRestContext.prototype.exitRule = function (listener) {
        if (listener.exitAttributeRest) {
            listener.exitAttributeRest(this);
        }
    };
    // @Override
    AttributeRestContext.prototype.accept = function (visitor) {
        if (visitor.visitAttributeRest) {
            return visitor.visitAttributeRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributeRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributeRestContext = AttributeRestContext;
var AttributeNameContext = /** @class */ (function (_super) {
    __extends(AttributeNameContext, _super);
    function AttributeNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributeNameContext.prototype.attributeNameKeyword = function () {
        return this.tryGetRuleContext(0, AttributeNameKeywordContext);
    };
    AttributeNameContext.prototype.IDENTIFIER_WEBIDL = function () { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    Object.defineProperty(AttributeNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_attributeName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributeNameContext.prototype.enterRule = function (listener) {
        if (listener.enterAttributeName) {
            listener.enterAttributeName(this);
        }
    };
    // @Override
    AttributeNameContext.prototype.exitRule = function (listener) {
        if (listener.exitAttributeName) {
            listener.exitAttributeName(this);
        }
    };
    // @Override
    AttributeNameContext.prototype.accept = function (visitor) {
        if (visitor.visitAttributeName) {
            return visitor.visitAttributeName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributeNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributeNameContext = AttributeNameContext;
var AttributeNameKeywordContext = /** @class */ (function (_super) {
    __extends(AttributeNameKeywordContext, _super);
    function AttributeNameKeywordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(AttributeNameKeywordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_attributeNameKeyword; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AttributeNameKeywordContext.prototype.enterRule = function (listener) {
        if (listener.enterAttributeNameKeyword) {
            listener.enterAttributeNameKeyword(this);
        }
    };
    // @Override
    AttributeNameKeywordContext.prototype.exitRule = function (listener) {
        if (listener.exitAttributeNameKeyword) {
            listener.exitAttributeNameKeyword(this);
        }
    };
    // @Override
    AttributeNameKeywordContext.prototype.accept = function (visitor) {
        if (visitor.visitAttributeNameKeyword) {
            return visitor.visitAttributeNameKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AttributeNameKeywordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AttributeNameKeywordContext = AttributeNameKeywordContext;
var InheritContext = /** @class */ (function (_super) {
    __extends(InheritContext, _super);
    function InheritContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(InheritContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_inherit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InheritContext.prototype.enterRule = function (listener) {
        if (listener.enterInherit) {
            listener.enterInherit(this);
        }
    };
    // @Override
    InheritContext.prototype.exitRule = function (listener) {
        if (listener.exitInherit) {
            listener.exitInherit(this);
        }
    };
    // @Override
    InheritContext.prototype.accept = function (visitor) {
        if (visitor.visitInherit) {
            return visitor.visitInherit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InheritContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InheritContext = InheritContext;
var ReadOnlyContext = /** @class */ (function (_super) {
    __extends(ReadOnlyContext, _super);
    function ReadOnlyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ReadOnlyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_readOnly; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReadOnlyContext.prototype.enterRule = function (listener) {
        if (listener.enterReadOnly) {
            listener.enterReadOnly(this);
        }
    };
    // @Override
    ReadOnlyContext.prototype.exitRule = function (listener) {
        if (listener.exitReadOnly) {
            listener.exitReadOnly(this);
        }
    };
    // @Override
    ReadOnlyContext.prototype.accept = function (visitor) {
        if (visitor.visitReadOnly) {
            return visitor.visitReadOnly(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReadOnlyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReadOnlyContext = ReadOnlyContext;
var OperationContext = /** @class */ (function (_super) {
    __extends(OperationContext, _super);
    function OperationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperationContext.prototype.returnType = function () {
        return this.tryGetRuleContext(0, ReturnTypeContext);
    };
    OperationContext.prototype.operationRest = function () {
        return this.tryGetRuleContext(0, OperationRestContext);
    };
    OperationContext.prototype.specialOperation = function () {
        return this.tryGetRuleContext(0, SpecialOperationContext);
    };
    Object.defineProperty(OperationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_operation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperationContext.prototype.enterRule = function (listener) {
        if (listener.enterOperation) {
            listener.enterOperation(this);
        }
    };
    // @Override
    OperationContext.prototype.exitRule = function (listener) {
        if (listener.exitOperation) {
            listener.exitOperation(this);
        }
    };
    // @Override
    OperationContext.prototype.accept = function (visitor) {
        if (visitor.visitOperation) {
            return visitor.visitOperation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperationContext = OperationContext;
var SpecialOperationContext = /** @class */ (function (_super) {
    __extends(SpecialOperationContext, _super);
    function SpecialOperationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SpecialOperationContext.prototype.special = function () {
        return this.getRuleContext(0, SpecialContext);
    };
    SpecialOperationContext.prototype.specials = function () {
        return this.getRuleContext(0, SpecialsContext);
    };
    SpecialOperationContext.prototype.returnType = function () {
        return this.getRuleContext(0, ReturnTypeContext);
    };
    SpecialOperationContext.prototype.operationRest = function () {
        return this.getRuleContext(0, OperationRestContext);
    };
    Object.defineProperty(SpecialOperationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_specialOperation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SpecialOperationContext.prototype.enterRule = function (listener) {
        if (listener.enterSpecialOperation) {
            listener.enterSpecialOperation(this);
        }
    };
    // @Override
    SpecialOperationContext.prototype.exitRule = function (listener) {
        if (listener.exitSpecialOperation) {
            listener.exitSpecialOperation(this);
        }
    };
    // @Override
    SpecialOperationContext.prototype.accept = function (visitor) {
        if (visitor.visitSpecialOperation) {
            return visitor.visitSpecialOperation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SpecialOperationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SpecialOperationContext = SpecialOperationContext;
var SpecialsContext = /** @class */ (function (_super) {
    __extends(SpecialsContext, _super);
    function SpecialsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SpecialsContext.prototype.special = function () {
        return this.tryGetRuleContext(0, SpecialContext);
    };
    SpecialsContext.prototype.specials = function () {
        return this.tryGetRuleContext(0, SpecialsContext);
    };
    Object.defineProperty(SpecialsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_specials; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SpecialsContext.prototype.enterRule = function (listener) {
        if (listener.enterSpecials) {
            listener.enterSpecials(this);
        }
    };
    // @Override
    SpecialsContext.prototype.exitRule = function (listener) {
        if (listener.exitSpecials) {
            listener.exitSpecials(this);
        }
    };
    // @Override
    SpecialsContext.prototype.accept = function (visitor) {
        if (visitor.visitSpecials) {
            return visitor.visitSpecials(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SpecialsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SpecialsContext = SpecialsContext;
var SpecialContext = /** @class */ (function (_super) {
    __extends(SpecialContext, _super);
    function SpecialContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(SpecialContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_special; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SpecialContext.prototype.enterRule = function (listener) {
        if (listener.enterSpecial) {
            listener.enterSpecial(this);
        }
    };
    // @Override
    SpecialContext.prototype.exitRule = function (listener) {
        if (listener.exitSpecial) {
            listener.exitSpecial(this);
        }
    };
    // @Override
    SpecialContext.prototype.accept = function (visitor) {
        if (visitor.visitSpecial) {
            return visitor.visitSpecial(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SpecialContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SpecialContext = SpecialContext;
var OperationRestContext = /** @class */ (function (_super) {
    __extends(OperationRestContext, _super);
    function OperationRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperationRestContext.prototype.optionalIdentifier = function () {
        return this.getRuleContext(0, OptionalIdentifierContext);
    };
    OperationRestContext.prototype.argumentList = function () {
        return this.getRuleContext(0, ArgumentListContext);
    };
    Object.defineProperty(OperationRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_operationRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OperationRestContext.prototype.enterRule = function (listener) {
        if (listener.enterOperationRest) {
            listener.enterOperationRest(this);
        }
    };
    // @Override
    OperationRestContext.prototype.exitRule = function (listener) {
        if (listener.exitOperationRest) {
            listener.exitOperationRest(this);
        }
    };
    // @Override
    OperationRestContext.prototype.accept = function (visitor) {
        if (visitor.visitOperationRest) {
            return visitor.visitOperationRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperationRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OperationRestContext = OperationRestContext;
var OptionalIdentifierContext = /** @class */ (function (_super) {
    __extends(OptionalIdentifierContext, _super);
    function OptionalIdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionalIdentifierContext.prototype.IDENTIFIER_WEBIDL = function () { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    Object.defineProperty(OptionalIdentifierContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_optionalIdentifier; },
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
var ArgumentListContext = /** @class */ (function (_super) {
    __extends(ArgumentListContext, _super);
    function ArgumentListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentListContext.prototype.argument = function () {
        return this.tryGetRuleContext(0, ArgumentContext);
    };
    ArgumentListContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    Object.defineProperty(ArgumentListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_argumentList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentListContext.prototype.enterRule = function (listener) {
        if (listener.enterArgumentList) {
            listener.enterArgumentList(this);
        }
    };
    // @Override
    ArgumentListContext.prototype.exitRule = function (listener) {
        if (listener.exitArgumentList) {
            listener.exitArgumentList(this);
        }
    };
    // @Override
    ArgumentListContext.prototype.accept = function (visitor) {
        if (visitor.visitArgumentList) {
            return visitor.visitArgumentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentListContext = ArgumentListContext;
var ArgumentsContext = /** @class */ (function (_super) {
    __extends(ArgumentsContext, _super);
    function ArgumentsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentsContext.prototype.argument = function () {
        return this.tryGetRuleContext(0, ArgumentContext);
    };
    ArgumentsContext.prototype.arguments = function () {
        return this.tryGetRuleContext(0, ArgumentsContext);
    };
    Object.defineProperty(ArgumentsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_arguments; },
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
    ArgumentContext.prototype.extendedAttributeList = function () {
        return this.getRuleContext(0, ExtendedAttributeListContext);
    };
    ArgumentContext.prototype.optionalOrRequiredArgument = function () {
        return this.getRuleContext(0, OptionalOrRequiredArgumentContext);
    };
    Object.defineProperty(ArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_argument; },
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
var OptionalOrRequiredArgumentContext = /** @class */ (function (_super) {
    __extends(OptionalOrRequiredArgumentContext, _super);
    function OptionalOrRequiredArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionalOrRequiredArgumentContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    OptionalOrRequiredArgumentContext.prototype.argumentName = function () {
        return this.getRuleContext(0, ArgumentNameContext);
    };
    OptionalOrRequiredArgumentContext.prototype.default_ = function () {
        return this.tryGetRuleContext(0, Default_Context);
    };
    OptionalOrRequiredArgumentContext.prototype.ellipsis = function () {
        return this.tryGetRuleContext(0, EllipsisContext);
    };
    Object.defineProperty(OptionalOrRequiredArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_optionalOrRequiredArgument; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionalOrRequiredArgumentContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionalOrRequiredArgument) {
            listener.enterOptionalOrRequiredArgument(this);
        }
    };
    // @Override
    OptionalOrRequiredArgumentContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionalOrRequiredArgument) {
            listener.exitOptionalOrRequiredArgument(this);
        }
    };
    // @Override
    OptionalOrRequiredArgumentContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionalOrRequiredArgument) {
            return visitor.visitOptionalOrRequiredArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionalOrRequiredArgumentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionalOrRequiredArgumentContext = OptionalOrRequiredArgumentContext;
var ArgumentNameContext = /** @class */ (function (_super) {
    __extends(ArgumentNameContext, _super);
    function ArgumentNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentNameContext.prototype.argumentNameKeyword = function () {
        return this.tryGetRuleContext(0, ArgumentNameKeywordContext);
    };
    ArgumentNameContext.prototype.IDENTIFIER_WEBIDL = function () { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    Object.defineProperty(ArgumentNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_argumentName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentNameContext.prototype.enterRule = function (listener) {
        if (listener.enterArgumentName) {
            listener.enterArgumentName(this);
        }
    };
    // @Override
    ArgumentNameContext.prototype.exitRule = function (listener) {
        if (listener.exitArgumentName) {
            listener.exitArgumentName(this);
        }
    };
    // @Override
    ArgumentNameContext.prototype.accept = function (visitor) {
        if (visitor.visitArgumentName) {
            return visitor.visitArgumentName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentNameContext = ArgumentNameContext;
var EllipsisContext = /** @class */ (function (_super) {
    __extends(EllipsisContext, _super);
    function EllipsisContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(EllipsisContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_ellipsis; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EllipsisContext.prototype.enterRule = function (listener) {
        if (listener.enterEllipsis) {
            listener.enterEllipsis(this);
        }
    };
    // @Override
    EllipsisContext.prototype.exitRule = function (listener) {
        if (listener.exitEllipsis) {
            listener.exitEllipsis(this);
        }
    };
    // @Override
    EllipsisContext.prototype.accept = function (visitor) {
        if (visitor.visitEllipsis) {
            return visitor.visitEllipsis(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EllipsisContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EllipsisContext = EllipsisContext;
var IterableContext = /** @class */ (function (_super) {
    __extends(IterableContext, _super);
    function IterableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IterableContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    IterableContext.prototype.optionalType = function () {
        return this.getRuleContext(0, OptionalTypeContext);
    };
    Object.defineProperty(IterableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_iterable; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IterableContext.prototype.enterRule = function (listener) {
        if (listener.enterIterable) {
            listener.enterIterable(this);
        }
    };
    // @Override
    IterableContext.prototype.exitRule = function (listener) {
        if (listener.exitIterable) {
            listener.exitIterable(this);
        }
    };
    // @Override
    IterableContext.prototype.accept = function (visitor) {
        if (visitor.visitIterable) {
            return visitor.visitIterable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IterableContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IterableContext = IterableContext;
var OptionalTypeContext = /** @class */ (function (_super) {
    __extends(OptionalTypeContext, _super);
    function OptionalTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OptionalTypeContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    Object.defineProperty(OptionalTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_optionalType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionalTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionalType) {
            listener.enterOptionalType(this);
        }
    };
    // @Override
    OptionalTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionalType) {
            listener.exitOptionalType(this);
        }
    };
    // @Override
    OptionalTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionalType) {
            return visitor.visitOptionalType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionalTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionalTypeContext = OptionalTypeContext;
var ReadWriteMaplikeContext = /** @class */ (function (_super) {
    __extends(ReadWriteMaplikeContext, _super);
    function ReadWriteMaplikeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReadWriteMaplikeContext.prototype.maplikeRest = function () {
        return this.getRuleContext(0, MaplikeRestContext);
    };
    Object.defineProperty(ReadWriteMaplikeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_readWriteMaplike; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReadWriteMaplikeContext.prototype.enterRule = function (listener) {
        if (listener.enterReadWriteMaplike) {
            listener.enterReadWriteMaplike(this);
        }
    };
    // @Override
    ReadWriteMaplikeContext.prototype.exitRule = function (listener) {
        if (listener.exitReadWriteMaplike) {
            listener.exitReadWriteMaplike(this);
        }
    };
    // @Override
    ReadWriteMaplikeContext.prototype.accept = function (visitor) {
        if (visitor.visitReadWriteMaplike) {
            return visitor.visitReadWriteMaplike(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReadWriteMaplikeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReadWriteMaplikeContext = ReadWriteMaplikeContext;
var ReadWriteSetlikeContext = /** @class */ (function (_super) {
    __extends(ReadWriteSetlikeContext, _super);
    function ReadWriteSetlikeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReadWriteSetlikeContext.prototype.setlikeRest = function () {
        return this.getRuleContext(0, SetlikeRestContext);
    };
    Object.defineProperty(ReadWriteSetlikeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_readWriteSetlike; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReadWriteSetlikeContext.prototype.enterRule = function (listener) {
        if (listener.enterReadWriteSetlike) {
            listener.enterReadWriteSetlike(this);
        }
    };
    // @Override
    ReadWriteSetlikeContext.prototype.exitRule = function (listener) {
        if (listener.exitReadWriteSetlike) {
            listener.exitReadWriteSetlike(this);
        }
    };
    // @Override
    ReadWriteSetlikeContext.prototype.accept = function (visitor) {
        if (visitor.visitReadWriteSetlike) {
            return visitor.visitReadWriteSetlike(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReadWriteSetlikeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReadWriteSetlikeContext = ReadWriteSetlikeContext;
var MaplikeRestContext = /** @class */ (function (_super) {
    __extends(MaplikeRestContext, _super);
    function MaplikeRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MaplikeRestContext.prototype.type = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        }
        else {
            return this.getRuleContext(i, TypeContext);
        }
    };
    Object.defineProperty(MaplikeRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_maplikeRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MaplikeRestContext.prototype.enterRule = function (listener) {
        if (listener.enterMaplikeRest) {
            listener.enterMaplikeRest(this);
        }
    };
    // @Override
    MaplikeRestContext.prototype.exitRule = function (listener) {
        if (listener.exitMaplikeRest) {
            listener.exitMaplikeRest(this);
        }
    };
    // @Override
    MaplikeRestContext.prototype.accept = function (visitor) {
        if (visitor.visitMaplikeRest) {
            return visitor.visitMaplikeRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MaplikeRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MaplikeRestContext = MaplikeRestContext;
var SetlikeRestContext = /** @class */ (function (_super) {
    __extends(SetlikeRestContext, _super);
    function SetlikeRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SetlikeRestContext.prototype.type = function () {
        return this.getRuleContext(0, TypeContext);
    };
    Object.defineProperty(SetlikeRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_setlikeRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SetlikeRestContext.prototype.enterRule = function (listener) {
        if (listener.enterSetlikeRest) {
            listener.enterSetlikeRest(this);
        }
    };
    // @Override
    SetlikeRestContext.prototype.exitRule = function (listener) {
        if (listener.exitSetlikeRest) {
            listener.exitSetlikeRest(this);
        }
    };
    // @Override
    SetlikeRestContext.prototype.accept = function (visitor) {
        if (visitor.visitSetlikeRest) {
            return visitor.visitSetlikeRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SetlikeRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SetlikeRestContext = SetlikeRestContext;
var ExtendedAttributeListContext = /** @class */ (function (_super) {
    __extends(ExtendedAttributeListContext, _super);
    function ExtendedAttributeListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtendedAttributeListContext.prototype.extendedAttribute = function () {
        return this.tryGetRuleContext(0, ExtendedAttributeContext);
    };
    ExtendedAttributeListContext.prototype.extendedAttributes = function () {
        return this.tryGetRuleContext(0, ExtendedAttributesContext);
    };
    Object.defineProperty(ExtendedAttributeListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_extendedAttributeList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtendedAttributeListContext.prototype.enterRule = function (listener) {
        if (listener.enterExtendedAttributeList) {
            listener.enterExtendedAttributeList(this);
        }
    };
    // @Override
    ExtendedAttributeListContext.prototype.exitRule = function (listener) {
        if (listener.exitExtendedAttributeList) {
            listener.exitExtendedAttributeList(this);
        }
    };
    // @Override
    ExtendedAttributeListContext.prototype.accept = function (visitor) {
        if (visitor.visitExtendedAttributeList) {
            return visitor.visitExtendedAttributeList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtendedAttributeListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtendedAttributeListContext = ExtendedAttributeListContext;
var ExtendedAttributesContext = /** @class */ (function (_super) {
    __extends(ExtendedAttributesContext, _super);
    function ExtendedAttributesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtendedAttributesContext.prototype.extendedAttribute = function () {
        return this.tryGetRuleContext(0, ExtendedAttributeContext);
    };
    ExtendedAttributesContext.prototype.extendedAttributes = function () {
        return this.tryGetRuleContext(0, ExtendedAttributesContext);
    };
    Object.defineProperty(ExtendedAttributesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_extendedAttributes; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtendedAttributesContext.prototype.enterRule = function (listener) {
        if (listener.enterExtendedAttributes) {
            listener.enterExtendedAttributes(this);
        }
    };
    // @Override
    ExtendedAttributesContext.prototype.exitRule = function (listener) {
        if (listener.exitExtendedAttributes) {
            listener.exitExtendedAttributes(this);
        }
    };
    // @Override
    ExtendedAttributesContext.prototype.accept = function (visitor) {
        if (visitor.visitExtendedAttributes) {
            return visitor.visitExtendedAttributes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtendedAttributesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtendedAttributesContext = ExtendedAttributesContext;
var ExtendedAttributeContext = /** @class */ (function (_super) {
    __extends(ExtendedAttributeContext, _super);
    function ExtendedAttributeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtendedAttributeContext.prototype.extendedAttributeInner = function () {
        return this.tryGetRuleContext(0, ExtendedAttributeInnerContext);
    };
    ExtendedAttributeContext.prototype.extendedAttributeRest = function () {
        return this.getRuleContext(0, ExtendedAttributeRestContext);
    };
    ExtendedAttributeContext.prototype.other = function () {
        return this.tryGetRuleContext(0, OtherContext);
    };
    Object.defineProperty(ExtendedAttributeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_extendedAttribute; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtendedAttributeContext.prototype.enterRule = function (listener) {
        if (listener.enterExtendedAttribute) {
            listener.enterExtendedAttribute(this);
        }
    };
    // @Override
    ExtendedAttributeContext.prototype.exitRule = function (listener) {
        if (listener.exitExtendedAttribute) {
            listener.exitExtendedAttribute(this);
        }
    };
    // @Override
    ExtendedAttributeContext.prototype.accept = function (visitor) {
        if (visitor.visitExtendedAttribute) {
            return visitor.visitExtendedAttribute(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtendedAttributeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtendedAttributeContext = ExtendedAttributeContext;
var ExtendedAttributeRestContext = /** @class */ (function (_super) {
    __extends(ExtendedAttributeRestContext, _super);
    function ExtendedAttributeRestContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtendedAttributeRestContext.prototype.extendedAttribute = function () {
        return this.tryGetRuleContext(0, ExtendedAttributeContext);
    };
    Object.defineProperty(ExtendedAttributeRestContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_extendedAttributeRest; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtendedAttributeRestContext.prototype.enterRule = function (listener) {
        if (listener.enterExtendedAttributeRest) {
            listener.enterExtendedAttributeRest(this);
        }
    };
    // @Override
    ExtendedAttributeRestContext.prototype.exitRule = function (listener) {
        if (listener.exitExtendedAttributeRest) {
            listener.exitExtendedAttributeRest(this);
        }
    };
    // @Override
    ExtendedAttributeRestContext.prototype.accept = function (visitor) {
        if (visitor.visitExtendedAttributeRest) {
            return visitor.visitExtendedAttributeRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtendedAttributeRestContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtendedAttributeRestContext = ExtendedAttributeRestContext;
var ExtendedAttributeInnerContext = /** @class */ (function (_super) {
    __extends(ExtendedAttributeInnerContext, _super);
    function ExtendedAttributeInnerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtendedAttributeInnerContext.prototype.extendedAttributeInner = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExtendedAttributeInnerContext);
        }
        else {
            return this.getRuleContext(i, ExtendedAttributeInnerContext);
        }
    };
    ExtendedAttributeInnerContext.prototype.otherOrComma = function () {
        return this.tryGetRuleContext(0, OtherOrCommaContext);
    };
    Object.defineProperty(ExtendedAttributeInnerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_extendedAttributeInner; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtendedAttributeInnerContext.prototype.enterRule = function (listener) {
        if (listener.enterExtendedAttributeInner) {
            listener.enterExtendedAttributeInner(this);
        }
    };
    // @Override
    ExtendedAttributeInnerContext.prototype.exitRule = function (listener) {
        if (listener.exitExtendedAttributeInner) {
            listener.exitExtendedAttributeInner(this);
        }
    };
    // @Override
    ExtendedAttributeInnerContext.prototype.accept = function (visitor) {
        if (visitor.visitExtendedAttributeInner) {
            return visitor.visitExtendedAttributeInner(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtendedAttributeInnerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtendedAttributeInnerContext = ExtendedAttributeInnerContext;
var OtherContext = /** @class */ (function (_super) {
    __extends(OtherContext, _super);
    function OtherContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OtherContext.prototype.INTEGER_WEBIDL = function () { return this.tryGetToken(WebIDLParser.INTEGER_WEBIDL, 0); };
    OtherContext.prototype.FLOAT_WEBIDL = function () { return this.tryGetToken(WebIDLParser.FLOAT_WEBIDL, 0); };
    OtherContext.prototype.IDENTIFIER_WEBIDL = function () { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    OtherContext.prototype.STRING_WEBIDL = function () { return this.tryGetToken(WebIDLParser.STRING_WEBIDL, 0); };
    OtherContext.prototype.OTHER_WEBIDL = function () { return this.tryGetToken(WebIDLParser.OTHER_WEBIDL, 0); };
    OtherContext.prototype.argumentNameKeyword = function () {
        return this.tryGetRuleContext(0, ArgumentNameKeywordContext);
    };
    OtherContext.prototype.bufferRelatedType = function () {
        return this.tryGetRuleContext(0, BufferRelatedTypeContext);
    };
    Object.defineProperty(OtherContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_other; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OtherContext.prototype.enterRule = function (listener) {
        if (listener.enterOther) {
            listener.enterOther(this);
        }
    };
    // @Override
    OtherContext.prototype.exitRule = function (listener) {
        if (listener.exitOther) {
            listener.exitOther(this);
        }
    };
    // @Override
    OtherContext.prototype.accept = function (visitor) {
        if (visitor.visitOther) {
            return visitor.visitOther(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OtherContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OtherContext = OtherContext;
var ArgumentNameKeywordContext = /** @class */ (function (_super) {
    __extends(ArgumentNameKeywordContext, _super);
    function ArgumentNameKeywordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ArgumentNameKeywordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_argumentNameKeyword; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ArgumentNameKeywordContext.prototype.enterRule = function (listener) {
        if (listener.enterArgumentNameKeyword) {
            listener.enterArgumentNameKeyword(this);
        }
    };
    // @Override
    ArgumentNameKeywordContext.prototype.exitRule = function (listener) {
        if (listener.exitArgumentNameKeyword) {
            listener.exitArgumentNameKeyword(this);
        }
    };
    // @Override
    ArgumentNameKeywordContext.prototype.accept = function (visitor) {
        if (visitor.visitArgumentNameKeyword) {
            return visitor.visitArgumentNameKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArgumentNameKeywordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ArgumentNameKeywordContext = ArgumentNameKeywordContext;
var OtherOrCommaContext = /** @class */ (function (_super) {
    __extends(OtherOrCommaContext, _super);
    function OtherOrCommaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OtherOrCommaContext.prototype.other = function () {
        return this.tryGetRuleContext(0, OtherContext);
    };
    Object.defineProperty(OtherOrCommaContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_otherOrComma; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OtherOrCommaContext.prototype.enterRule = function (listener) {
        if (listener.enterOtherOrComma) {
            listener.enterOtherOrComma(this);
        }
    };
    // @Override
    OtherOrCommaContext.prototype.exitRule = function (listener) {
        if (listener.exitOtherOrComma) {
            listener.exitOtherOrComma(this);
        }
    };
    // @Override
    OtherOrCommaContext.prototype.accept = function (visitor) {
        if (visitor.visitOtherOrComma) {
            return visitor.visitOtherOrComma(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OtherOrCommaContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OtherOrCommaContext = OtherOrCommaContext;
var TypeContext = /** @class */ (function (_super) {
    __extends(TypeContext, _super);
    function TypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeContext.prototype.singleType = function () {
        return this.tryGetRuleContext(0, SingleTypeContext);
    };
    TypeContext.prototype.unionType = function () {
        return this.tryGetRuleContext(0, UnionTypeContext);
    };
    TypeContext.prototype.null_ = function () {
        return this.tryGetRuleContext(0, Null_Context);
    };
    Object.defineProperty(TypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_type; },
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
var SingleTypeContext = /** @class */ (function (_super) {
    __extends(SingleTypeContext, _super);
    function SingleTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SingleTypeContext.prototype.nonAnyType = function () {
        return this.tryGetRuleContext(0, NonAnyTypeContext);
    };
    Object.defineProperty(SingleTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_singleType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SingleTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterSingleType) {
            listener.enterSingleType(this);
        }
    };
    // @Override
    SingleTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitSingleType) {
            listener.exitSingleType(this);
        }
    };
    // @Override
    SingleTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitSingleType) {
            return visitor.visitSingleType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SingleTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SingleTypeContext = SingleTypeContext;
var UnionTypeContext = /** @class */ (function (_super) {
    __extends(UnionTypeContext, _super);
    function UnionTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnionTypeContext.prototype.unionMemberType = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(UnionMemberTypeContext);
        }
        else {
            return this.getRuleContext(i, UnionMemberTypeContext);
        }
    };
    UnionTypeContext.prototype.unionMemberTypes = function () {
        return this.getRuleContext(0, UnionMemberTypesContext);
    };
    Object.defineProperty(UnionTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_unionType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnionTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterUnionType) {
            listener.enterUnionType(this);
        }
    };
    // @Override
    UnionTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitUnionType) {
            listener.exitUnionType(this);
        }
    };
    // @Override
    UnionTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitUnionType) {
            return visitor.visitUnionType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnionTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnionTypeContext = UnionTypeContext;
var UnionMemberTypeContext = /** @class */ (function (_super) {
    __extends(UnionMemberTypeContext, _super);
    function UnionMemberTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnionMemberTypeContext.prototype.nonAnyType = function () {
        return this.tryGetRuleContext(0, NonAnyTypeContext);
    };
    UnionMemberTypeContext.prototype.unionType = function () {
        return this.tryGetRuleContext(0, UnionTypeContext);
    };
    UnionMemberTypeContext.prototype.null_ = function () {
        return this.tryGetRuleContext(0, Null_Context);
    };
    Object.defineProperty(UnionMemberTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_unionMemberType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnionMemberTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterUnionMemberType) {
            listener.enterUnionMemberType(this);
        }
    };
    // @Override
    UnionMemberTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitUnionMemberType) {
            listener.exitUnionMemberType(this);
        }
    };
    // @Override
    UnionMemberTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitUnionMemberType) {
            return visitor.visitUnionMemberType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnionMemberTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnionMemberTypeContext = UnionMemberTypeContext;
var UnionMemberTypesContext = /** @class */ (function (_super) {
    __extends(UnionMemberTypesContext, _super);
    function UnionMemberTypesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnionMemberTypesContext.prototype.unionMemberType = function () {
        return this.tryGetRuleContext(0, UnionMemberTypeContext);
    };
    UnionMemberTypesContext.prototype.unionMemberTypes = function () {
        return this.tryGetRuleContext(0, UnionMemberTypesContext);
    };
    Object.defineProperty(UnionMemberTypesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_unionMemberTypes; },
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
var NonAnyTypeContext = /** @class */ (function (_super) {
    __extends(NonAnyTypeContext, _super);
    function NonAnyTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NonAnyTypeContext.prototype.primitiveType = function () {
        return this.tryGetRuleContext(0, PrimitiveTypeContext);
    };
    NonAnyTypeContext.prototype.null_ = function () {
        return this.getRuleContext(0, Null_Context);
    };
    NonAnyTypeContext.prototype.promiseType = function () {
        return this.tryGetRuleContext(0, PromiseTypeContext);
    };
    NonAnyTypeContext.prototype.IDENTIFIER_WEBIDL = function () { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    NonAnyTypeContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    NonAnyTypeContext.prototype.bufferRelatedType = function () {
        return this.tryGetRuleContext(0, BufferRelatedTypeContext);
    };
    Object.defineProperty(NonAnyTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_nonAnyType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NonAnyTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterNonAnyType) {
            listener.enterNonAnyType(this);
        }
    };
    // @Override
    NonAnyTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitNonAnyType) {
            listener.exitNonAnyType(this);
        }
    };
    // @Override
    NonAnyTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitNonAnyType) {
            return visitor.visitNonAnyType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NonAnyTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NonAnyTypeContext = NonAnyTypeContext;
var BufferRelatedTypeContext = /** @class */ (function (_super) {
    __extends(BufferRelatedTypeContext, _super);
    function BufferRelatedTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(BufferRelatedTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_bufferRelatedType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BufferRelatedTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterBufferRelatedType) {
            listener.enterBufferRelatedType(this);
        }
    };
    // @Override
    BufferRelatedTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitBufferRelatedType) {
            listener.exitBufferRelatedType(this);
        }
    };
    // @Override
    BufferRelatedTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitBufferRelatedType) {
            return visitor.visitBufferRelatedType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BufferRelatedTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BufferRelatedTypeContext = BufferRelatedTypeContext;
var ConstTypeContext = /** @class */ (function (_super) {
    __extends(ConstTypeContext, _super);
    function ConstTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstTypeContext.prototype.primitiveType = function () {
        return this.tryGetRuleContext(0, PrimitiveTypeContext);
    };
    ConstTypeContext.prototype.null_ = function () {
        return this.getRuleContext(0, Null_Context);
    };
    ConstTypeContext.prototype.IDENTIFIER_WEBIDL = function () { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    Object.defineProperty(ConstTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_constType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConstTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterConstType) {
            listener.enterConstType(this);
        }
    };
    // @Override
    ConstTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitConstType) {
            listener.exitConstType(this);
        }
    };
    // @Override
    ConstTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitConstType) {
            return visitor.visitConstType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConstTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConstTypeContext = ConstTypeContext;
var PrimitiveTypeContext = /** @class */ (function (_super) {
    __extends(PrimitiveTypeContext, _super);
    function PrimitiveTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimitiveTypeContext.prototype.unsignedIntegerType = function () {
        return this.tryGetRuleContext(0, UnsignedIntegerTypeContext);
    };
    PrimitiveTypeContext.prototype.unrestrictedFloatType = function () {
        return this.tryGetRuleContext(0, UnrestrictedFloatTypeContext);
    };
    Object.defineProperty(PrimitiveTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_primitiveType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrimitiveTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterPrimitiveType) {
            listener.enterPrimitiveType(this);
        }
    };
    // @Override
    PrimitiveTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitPrimitiveType) {
            listener.exitPrimitiveType(this);
        }
    };
    // @Override
    PrimitiveTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitPrimitiveType) {
            return visitor.visitPrimitiveType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrimitiveTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrimitiveTypeContext = PrimitiveTypeContext;
var UnrestrictedFloatTypeContext = /** @class */ (function (_super) {
    __extends(UnrestrictedFloatTypeContext, _super);
    function UnrestrictedFloatTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnrestrictedFloatTypeContext.prototype.floatType = function () {
        return this.getRuleContext(0, FloatTypeContext);
    };
    Object.defineProperty(UnrestrictedFloatTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_unrestrictedFloatType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnrestrictedFloatTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterUnrestrictedFloatType) {
            listener.enterUnrestrictedFloatType(this);
        }
    };
    // @Override
    UnrestrictedFloatTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitUnrestrictedFloatType) {
            listener.exitUnrestrictedFloatType(this);
        }
    };
    // @Override
    UnrestrictedFloatTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitUnrestrictedFloatType) {
            return visitor.visitUnrestrictedFloatType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnrestrictedFloatTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnrestrictedFloatTypeContext = UnrestrictedFloatTypeContext;
var FloatTypeContext = /** @class */ (function (_super) {
    __extends(FloatTypeContext, _super);
    function FloatTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(FloatTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_floatType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FloatTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterFloatType) {
            listener.enterFloatType(this);
        }
    };
    // @Override
    FloatTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitFloatType) {
            listener.exitFloatType(this);
        }
    };
    // @Override
    FloatTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitFloatType) {
            return visitor.visitFloatType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FloatTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FloatTypeContext = FloatTypeContext;
var UnsignedIntegerTypeContext = /** @class */ (function (_super) {
    __extends(UnsignedIntegerTypeContext, _super);
    function UnsignedIntegerTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnsignedIntegerTypeContext.prototype.integerType = function () {
        return this.getRuleContext(0, IntegerTypeContext);
    };
    Object.defineProperty(UnsignedIntegerTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_unsignedIntegerType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UnsignedIntegerTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterUnsignedIntegerType) {
            listener.enterUnsignedIntegerType(this);
        }
    };
    // @Override
    UnsignedIntegerTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitUnsignedIntegerType) {
            listener.exitUnsignedIntegerType(this);
        }
    };
    // @Override
    UnsignedIntegerTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitUnsignedIntegerType) {
            return visitor.visitUnsignedIntegerType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnsignedIntegerTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.UnsignedIntegerTypeContext = UnsignedIntegerTypeContext;
var IntegerTypeContext = /** @class */ (function (_super) {
    __extends(IntegerTypeContext, _super);
    function IntegerTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IntegerTypeContext.prototype.optionalLong = function () {
        return this.tryGetRuleContext(0, OptionalLongContext);
    };
    Object.defineProperty(IntegerTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_integerType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IntegerTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterIntegerType) {
            listener.enterIntegerType(this);
        }
    };
    // @Override
    IntegerTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitIntegerType) {
            listener.exitIntegerType(this);
        }
    };
    // @Override
    IntegerTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitIntegerType) {
            return visitor.visitIntegerType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IntegerTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IntegerTypeContext = IntegerTypeContext;
var OptionalLongContext = /** @class */ (function (_super) {
    __extends(OptionalLongContext, _super);
    function OptionalLongContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OptionalLongContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_optionalLong; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OptionalLongContext.prototype.enterRule = function (listener) {
        if (listener.enterOptionalLong) {
            listener.enterOptionalLong(this);
        }
    };
    // @Override
    OptionalLongContext.prototype.exitRule = function (listener) {
        if (listener.exitOptionalLong) {
            listener.exitOptionalLong(this);
        }
    };
    // @Override
    OptionalLongContext.prototype.accept = function (visitor) {
        if (visitor.visitOptionalLong) {
            return visitor.visitOptionalLong(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OptionalLongContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OptionalLongContext = OptionalLongContext;
var PromiseTypeContext = /** @class */ (function (_super) {
    __extends(PromiseTypeContext, _super);
    function PromiseTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PromiseTypeContext.prototype.returnType = function () {
        return this.getRuleContext(0, ReturnTypeContext);
    };
    Object.defineProperty(PromiseTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_promiseType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PromiseTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterPromiseType) {
            listener.enterPromiseType(this);
        }
    };
    // @Override
    PromiseTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitPromiseType) {
            listener.exitPromiseType(this);
        }
    };
    // @Override
    PromiseTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitPromiseType) {
            return visitor.visitPromiseType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PromiseTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PromiseTypeContext = PromiseTypeContext;
var Null_Context = /** @class */ (function (_super) {
    __extends(Null_Context, _super);
    function Null_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Null_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_null_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Null_Context.prototype.enterRule = function (listener) {
        if (listener.enterNull_) {
            listener.enterNull_(this);
        }
    };
    // @Override
    Null_Context.prototype.exitRule = function (listener) {
        if (listener.exitNull_) {
            listener.exitNull_(this);
        }
    };
    // @Override
    Null_Context.prototype.accept = function (visitor) {
        if (visitor.visitNull_) {
            return visitor.visitNull_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Null_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Null_Context = Null_Context;
var ReturnTypeContext = /** @class */ (function (_super) {
    __extends(ReturnTypeContext, _super);
    function ReturnTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturnTypeContext.prototype.type = function () {
        return this.tryGetRuleContext(0, TypeContext);
    };
    Object.defineProperty(ReturnTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_returnType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReturnTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterReturnType) {
            listener.enterReturnType(this);
        }
    };
    // @Override
    ReturnTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitReturnType) {
            listener.exitReturnType(this);
        }
    };
    // @Override
    ReturnTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitReturnType) {
            return visitor.visitReturnType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReturnTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReturnTypeContext = ReturnTypeContext;
var IdentifierListContext = /** @class */ (function (_super) {
    __extends(IdentifierListContext, _super);
    function IdentifierListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierListContext.prototype.IDENTIFIER_WEBIDL = function () { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    IdentifierListContext.prototype.identifiers = function () {
        return this.getRuleContext(0, IdentifiersContext);
    };
    Object.defineProperty(IdentifierListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_identifierList; },
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
var IdentifiersContext = /** @class */ (function (_super) {
    __extends(IdentifiersContext, _super);
    function IdentifiersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifiersContext.prototype.IDENTIFIER_WEBIDL = function () { return this.tryGetToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    IdentifiersContext.prototype.identifiers = function () {
        return this.tryGetRuleContext(0, IdentifiersContext);
    };
    Object.defineProperty(IdentifiersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_identifiers; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IdentifiersContext.prototype.enterRule = function (listener) {
        if (listener.enterIdentifiers) {
            listener.enterIdentifiers(this);
        }
    };
    // @Override
    IdentifiersContext.prototype.exitRule = function (listener) {
        if (listener.exitIdentifiers) {
            listener.exitIdentifiers(this);
        }
    };
    // @Override
    IdentifiersContext.prototype.accept = function (visitor) {
        if (visitor.visitIdentifiers) {
            return visitor.visitIdentifiers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IdentifiersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IdentifiersContext = IdentifiersContext;
var ExtendedAttributeNoArgsContext = /** @class */ (function (_super) {
    __extends(ExtendedAttributeNoArgsContext, _super);
    function ExtendedAttributeNoArgsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtendedAttributeNoArgsContext.prototype.IDENTIFIER_WEBIDL = function () { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    Object.defineProperty(ExtendedAttributeNoArgsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_extendedAttributeNoArgs; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtendedAttributeNoArgsContext.prototype.enterRule = function (listener) {
        if (listener.enterExtendedAttributeNoArgs) {
            listener.enterExtendedAttributeNoArgs(this);
        }
    };
    // @Override
    ExtendedAttributeNoArgsContext.prototype.exitRule = function (listener) {
        if (listener.exitExtendedAttributeNoArgs) {
            listener.exitExtendedAttributeNoArgs(this);
        }
    };
    // @Override
    ExtendedAttributeNoArgsContext.prototype.accept = function (visitor) {
        if (visitor.visitExtendedAttributeNoArgs) {
            return visitor.visitExtendedAttributeNoArgs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtendedAttributeNoArgsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtendedAttributeNoArgsContext = ExtendedAttributeNoArgsContext;
var ExtendedAttributeArgListContext = /** @class */ (function (_super) {
    __extends(ExtendedAttributeArgListContext, _super);
    function ExtendedAttributeArgListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtendedAttributeArgListContext.prototype.IDENTIFIER_WEBIDL = function () { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    ExtendedAttributeArgListContext.prototype.argumentList = function () {
        return this.getRuleContext(0, ArgumentListContext);
    };
    Object.defineProperty(ExtendedAttributeArgListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_extendedAttributeArgList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtendedAttributeArgListContext.prototype.enterRule = function (listener) {
        if (listener.enterExtendedAttributeArgList) {
            listener.enterExtendedAttributeArgList(this);
        }
    };
    // @Override
    ExtendedAttributeArgListContext.prototype.exitRule = function (listener) {
        if (listener.exitExtendedAttributeArgList) {
            listener.exitExtendedAttributeArgList(this);
        }
    };
    // @Override
    ExtendedAttributeArgListContext.prototype.accept = function (visitor) {
        if (visitor.visitExtendedAttributeArgList) {
            return visitor.visitExtendedAttributeArgList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtendedAttributeArgListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtendedAttributeArgListContext = ExtendedAttributeArgListContext;
var ExtendedAttributeIdentContext = /** @class */ (function (_super) {
    __extends(ExtendedAttributeIdentContext, _super);
    function ExtendedAttributeIdentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtendedAttributeIdentContext.prototype.IDENTIFIER_WEBIDL = function (i) {
        if (i === undefined) {
            return this.getTokens(WebIDLParser.IDENTIFIER_WEBIDL);
        }
        else {
            return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, i);
        }
    };
    Object.defineProperty(ExtendedAttributeIdentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_extendedAttributeIdent; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtendedAttributeIdentContext.prototype.enterRule = function (listener) {
        if (listener.enterExtendedAttributeIdent) {
            listener.enterExtendedAttributeIdent(this);
        }
    };
    // @Override
    ExtendedAttributeIdentContext.prototype.exitRule = function (listener) {
        if (listener.exitExtendedAttributeIdent) {
            listener.exitExtendedAttributeIdent(this);
        }
    };
    // @Override
    ExtendedAttributeIdentContext.prototype.accept = function (visitor) {
        if (visitor.visitExtendedAttributeIdent) {
            return visitor.visitExtendedAttributeIdent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtendedAttributeIdentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtendedAttributeIdentContext = ExtendedAttributeIdentContext;
var ExtendedAttributeIdentListContext = /** @class */ (function (_super) {
    __extends(ExtendedAttributeIdentListContext, _super);
    function ExtendedAttributeIdentListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtendedAttributeIdentListContext.prototype.IDENTIFIER_WEBIDL = function () { return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, 0); };
    ExtendedAttributeIdentListContext.prototype.identifierList = function () {
        return this.getRuleContext(0, IdentifierListContext);
    };
    Object.defineProperty(ExtendedAttributeIdentListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_extendedAttributeIdentList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtendedAttributeIdentListContext.prototype.enterRule = function (listener) {
        if (listener.enterExtendedAttributeIdentList) {
            listener.enterExtendedAttributeIdentList(this);
        }
    };
    // @Override
    ExtendedAttributeIdentListContext.prototype.exitRule = function (listener) {
        if (listener.exitExtendedAttributeIdentList) {
            listener.exitExtendedAttributeIdentList(this);
        }
    };
    // @Override
    ExtendedAttributeIdentListContext.prototype.accept = function (visitor) {
        if (visitor.visitExtendedAttributeIdentList) {
            return visitor.visitExtendedAttributeIdentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtendedAttributeIdentListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtendedAttributeIdentListContext = ExtendedAttributeIdentListContext;
var ExtendedAttributeNamedArgListContext = /** @class */ (function (_super) {
    __extends(ExtendedAttributeNamedArgListContext, _super);
    function ExtendedAttributeNamedArgListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtendedAttributeNamedArgListContext.prototype.IDENTIFIER_WEBIDL = function (i) {
        if (i === undefined) {
            return this.getTokens(WebIDLParser.IDENTIFIER_WEBIDL);
        }
        else {
            return this.getToken(WebIDLParser.IDENTIFIER_WEBIDL, i);
        }
    };
    ExtendedAttributeNamedArgListContext.prototype.argumentList = function () {
        return this.getRuleContext(0, ArgumentListContext);
    };
    Object.defineProperty(ExtendedAttributeNamedArgListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return WebIDLParser.RULE_extendedAttributeNamedArgList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExtendedAttributeNamedArgListContext.prototype.enterRule = function (listener) {
        if (listener.enterExtendedAttributeNamedArgList) {
            listener.enterExtendedAttributeNamedArgList(this);
        }
    };
    // @Override
    ExtendedAttributeNamedArgListContext.prototype.exitRule = function (listener) {
        if (listener.exitExtendedAttributeNamedArgList) {
            listener.exitExtendedAttributeNamedArgList(this);
        }
    };
    // @Override
    ExtendedAttributeNamedArgListContext.prototype.accept = function (visitor) {
        if (visitor.visitExtendedAttributeNamedArgList) {
            return visitor.visitExtendedAttributeNamedArgList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExtendedAttributeNamedArgListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExtendedAttributeNamedArgListContext = ExtendedAttributeNamedArgListContext;
