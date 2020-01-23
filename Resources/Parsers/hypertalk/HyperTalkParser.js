"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/hypertalk/HyperTalk.g4 by ANTLR 4.7.3-SNAPSHOT
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
var HyperTalkParser = /** @class */ (function (_super) {
    __extends(HyperTalkParser, _super);
    function HyperTalkParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(HyperTalkParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(HyperTalkParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return HyperTalkParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HyperTalkParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "HyperTalk.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HyperTalkParser.prototype, "ruleNames", {
        // @Override
        get: function () { return HyperTalkParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HyperTalkParser.prototype, "serializedATN", {
        // @Override
        get: function () { return HyperTalkParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    HyperTalkParser.prototype.script = function () {
        var _localctx = new ScriptContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, HyperTalkParser.RULE_script);
        try {
            this.state = 179;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case HyperTalkParser.T__0:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 170;
                        this.handler();
                        this.state = 171;
                        this.script();
                    }
                    break;
                case HyperTalkParser.T__2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 173;
                        this.function();
                        this.state = 174;
                        this.script();
                    }
                    break;
                case HyperTalkParser.NEWLINE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 176;
                        this.match(HyperTalkParser.NEWLINE);
                        this.state = 177;
                        this.script();
                    }
                    break;
                case HyperTalkParser.EOF:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 178;
                        this.match(HyperTalkParser.EOF);
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
    HyperTalkParser.prototype.scriptlet = function () {
        var _localctx = new ScriptletContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, HyperTalkParser.RULE_scriptlet);
        try {
            this.state = 185;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 181;
                        this.statement();
                        this.state = 182;
                        this.match(HyperTalkParser.EOF);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 184;
                        this.multilineScriptlet();
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
    HyperTalkParser.prototype.multilineScriptlet = function () {
        var _localctx = new MultilineScriptletContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, HyperTalkParser.RULE_multilineScriptlet);
        try {
            this.state = 197;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 187;
                        this.statement();
                        this.state = 188;
                        this.match(HyperTalkParser.NEWLINE);
                        this.state = 189;
                        this.multilineScriptlet();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 191;
                        this.statement();
                        this.state = 192;
                        this.match(HyperTalkParser.EOF);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 194;
                        this.match(HyperTalkParser.NEWLINE);
                        this.state = 195;
                        this.multilineScriptlet();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 196;
                        this.match(HyperTalkParser.EOF);
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
    HyperTalkParser.prototype.handler = function () {
        var _localctx = new HandlerContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, HyperTalkParser.RULE_handler);
        var _la;
        try {
            this.state = 226;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 199;
                        this.match(HyperTalkParser.T__0);
                        this.state = 200;
                        this.handlerName();
                        this.state = 202;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 201;
                                    this.match(HyperTalkParser.NEWLINE);
                                }
                            }
                            this.state = 204;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === HyperTalkParser.NEWLINE);
                        this.state = 207;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HyperTalkParser.T__4) | (1 << HyperTalkParser.T__5) | (1 << HyperTalkParser.T__6) | (1 << HyperTalkParser.T__9) | (1 << HyperTalkParser.T__10) | (1 << HyperTalkParser.T__12) | (1 << HyperTalkParser.T__15) | (1 << HyperTalkParser.T__17) | (1 << HyperTalkParser.T__18) | (1 << HyperTalkParser.T__19) | (1 << HyperTalkParser.T__20) | (1 << HyperTalkParser.T__22) | (1 << HyperTalkParser.T__23) | (1 << HyperTalkParser.T__25) | (1 << HyperTalkParser.T__26) | (1 << HyperTalkParser.T__27) | (1 << HyperTalkParser.T__28) | (1 << HyperTalkParser.T__29) | (1 << HyperTalkParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (HyperTalkParser.T__32 - 33)) | (1 << (HyperTalkParser.T__33 - 33)) | (1 << (HyperTalkParser.T__34 - 33)) | (1 << (HyperTalkParser.T__35 - 33)) | (1 << (HyperTalkParser.T__36 - 33)) | (1 << (HyperTalkParser.T__37 - 33)) | (1 << (HyperTalkParser.T__38 - 33)) | (1 << (HyperTalkParser.T__39 - 33)) | (1 << (HyperTalkParser.T__41 - 33)) | (1 << (HyperTalkParser.T__43 - 33)) | (1 << (HyperTalkParser.T__45 - 33)) | (1 << (HyperTalkParser.T__46 - 33)) | (1 << (HyperTalkParser.T__47 - 33)) | (1 << (HyperTalkParser.T__48 - 33)) | (1 << (HyperTalkParser.T__50 - 33)) | (1 << (HyperTalkParser.T__52 - 33)) | (1 << (HyperTalkParser.T__53 - 33)) | (1 << (HyperTalkParser.T__55 - 33)) | (1 << (HyperTalkParser.T__56 - 33)) | (1 << (HyperTalkParser.T__57 - 33)) | (1 << (HyperTalkParser.T__58 - 33)) | (1 << (HyperTalkParser.T__59 - 33)) | (1 << (HyperTalkParser.T__60 - 33)) | (1 << (HyperTalkParser.T__61 - 33)) | (1 << (HyperTalkParser.T__62 - 33)) | (1 << (HyperTalkParser.T__63 - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (HyperTalkParser.T__66 - 67)) | (1 << (HyperTalkParser.T__68 - 67)) | (1 << (HyperTalkParser.T__69 - 67)) | (1 << (HyperTalkParser.T__73 - 67)) | (1 << (HyperTalkParser.T__74 - 67)) | (1 << (HyperTalkParser.T__75 - 67)) | (1 << (HyperTalkParser.T__76 - 67)) | (1 << (HyperTalkParser.T__77 - 67)) | (1 << (HyperTalkParser.T__78 - 67)) | (1 << (HyperTalkParser.T__79 - 67)) | (1 << (HyperTalkParser.T__85 - 67)) | (1 << (HyperTalkParser.T__86 - 67)) | (1 << (HyperTalkParser.T__87 - 67)) | (1 << (HyperTalkParser.T__88 - 67)) | (1 << (HyperTalkParser.T__89 - 67)) | (1 << (HyperTalkParser.T__90 - 67)) | (1 << (HyperTalkParser.T__92 - 67)) | (1 << (HyperTalkParser.T__96 - 67)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (HyperTalkParser.T__101 - 102)) | (1 << (HyperTalkParser.T__102 - 102)) | (1 << (HyperTalkParser.T__103 - 102)) | (1 << (HyperTalkParser.T__104 - 102)) | (1 << (HyperTalkParser.T__105 - 102)) | (1 << (HyperTalkParser.T__106 - 102)) | (1 << (HyperTalkParser.T__107 - 102)) | (1 << (HyperTalkParser.T__108 - 102)) | (1 << (HyperTalkParser.T__116 - 102)) | (1 << (HyperTalkParser.T__117 - 102)) | (1 << (HyperTalkParser.T__119 - 102)) | (1 << (HyperTalkParser.T__120 - 102)) | (1 << (HyperTalkParser.T__121 - 102)) | (1 << (HyperTalkParser.T__122 - 102)) | (1 << (HyperTalkParser.T__124 - 102)) | (1 << (HyperTalkParser.T__125 - 102)) | (1 << (HyperTalkParser.T__126 - 102)) | (1 << (HyperTalkParser.T__127 - 102)) | (1 << (HyperTalkParser.T__128 - 102)) | (1 << (HyperTalkParser.T__129 - 102)) | (1 << (HyperTalkParser.T__130 - 102)) | (1 << (HyperTalkParser.T__131 - 102)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (HyperTalkParser.T__159 - 160)) | (1 << (HyperTalkParser.T__161 - 160)) | (1 << (HyperTalkParser.T__162 - 160)) | (1 << (HyperTalkParser.T__164 - 160)) | (1 << (HyperTalkParser.T__165 - 160)) | (1 << (HyperTalkParser.T__166 - 160)) | (1 << (HyperTalkParser.T__172 - 160)) | (1 << (HyperTalkParser.T__173 - 160)) | (1 << (HyperTalkParser.T__176 - 160)) | (1 << (HyperTalkParser.T__180 - 160)) | (1 << (HyperTalkParser.T__181 - 160)) | (1 << (HyperTalkParser.T__184 - 160)) | (1 << (HyperTalkParser.T__189 - 160)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (HyperTalkParser.T__195 - 196)) | (1 << (HyperTalkParser.T__196 - 196)) | (1 << (HyperTalkParser.T__197 - 196)) | (1 << (HyperTalkParser.T__198 - 196)) | (1 << (HyperTalkParser.T__200 - 196)) | (1 << (HyperTalkParser.T__201 - 196)) | (1 << (HyperTalkParser.T__202 - 196)) | (1 << (HyperTalkParser.T__203 - 196)) | (1 << (HyperTalkParser.T__204 - 196)) | (1 << (HyperTalkParser.T__205 - 196)) | (1 << (HyperTalkParser.T__206 - 196)) | (1 << (HyperTalkParser.T__207 - 196)) | (1 << (HyperTalkParser.T__208 - 196)) | (1 << (HyperTalkParser.T__209 - 196)) | (1 << (HyperTalkParser.T__210 - 196)) | (1 << (HyperTalkParser.T__211 - 196)) | (1 << (HyperTalkParser.T__212 - 196)) | (1 << (HyperTalkParser.T__213 - 196)) | (1 << (HyperTalkParser.T__214 - 196)) | (1 << (HyperTalkParser.T__215 - 196)) | (1 << (HyperTalkParser.T__216 - 196)) | (1 << (HyperTalkParser.T__217 - 196)) | (1 << (HyperTalkParser.T__218 - 196)) | (1 << (HyperTalkParser.T__219 - 196)) | (1 << (HyperTalkParser.T__220 - 196)) | (1 << (HyperTalkParser.T__221 - 196)) | (1 << (HyperTalkParser.T__223 - 196)) | (1 << (HyperTalkParser.T__224 - 196)) | (1 << (HyperTalkParser.T__225 - 196)) | (1 << (HyperTalkParser.T__226 - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (HyperTalkParser.T__227 - 228)) | (1 << (HyperTalkParser.T__228 - 228)) | (1 << (HyperTalkParser.T__229 - 228)) | (1 << (HyperTalkParser.T__230 - 228)) | (1 << (HyperTalkParser.T__231 - 228)) | (1 << (HyperTalkParser.T__232 - 228)) | (1 << (HyperTalkParser.T__233 - 228)) | (1 << (HyperTalkParser.T__234 - 228)) | (1 << (HyperTalkParser.T__235 - 228)) | (1 << (HyperTalkParser.T__236 - 228)) | (1 << (HyperTalkParser.T__237 - 228)) | (1 << (HyperTalkParser.T__238 - 228)) | (1 << (HyperTalkParser.T__239 - 228)) | (1 << (HyperTalkParser.T__240 - 228)) | (1 << (HyperTalkParser.T__241 - 228)) | (1 << (HyperTalkParser.T__242 - 228)) | (1 << (HyperTalkParser.T__243 - 228)) | (1 << (HyperTalkParser.T__244 - 228)) | (1 << (HyperTalkParser.T__245 - 228)) | (1 << (HyperTalkParser.T__246 - 228)) | (1 << (HyperTalkParser.T__247 - 228)) | (1 << (HyperTalkParser.T__248 - 228)) | (1 << (HyperTalkParser.T__249 - 228)) | (1 << (HyperTalkParser.T__250 - 228)) | (1 << (HyperTalkParser.T__251 - 228)) | (1 << (HyperTalkParser.T__252 - 228)) | (1 << (HyperTalkParser.T__253 - 228)) | (1 << (HyperTalkParser.T__254 - 228)) | (1 << (HyperTalkParser.T__255 - 228)) | (1 << (HyperTalkParser.T__256 - 228)) | (1 << (HyperTalkParser.T__257 - 228)) | (1 << (HyperTalkParser.T__258 - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (HyperTalkParser.T__259 - 260)) | (1 << (HyperTalkParser.T__260 - 260)) | (1 << (HyperTalkParser.T__261 - 260)) | (1 << (HyperTalkParser.T__262 - 260)) | (1 << (HyperTalkParser.T__263 - 260)) | (1 << (HyperTalkParser.T__264 - 260)) | (1 << (HyperTalkParser.T__265 - 260)) | (1 << (HyperTalkParser.T__266 - 260)) | (1 << (HyperTalkParser.T__267 - 260)) | (1 << (HyperTalkParser.T__268 - 260)) | (1 << (HyperTalkParser.T__269 - 260)) | (1 << (HyperTalkParser.T__270 - 260)) | (1 << (HyperTalkParser.T__271 - 260)) | (1 << (HyperTalkParser.T__272 - 260)) | (1 << (HyperTalkParser.T__273 - 260)) | (1 << (HyperTalkParser.T__274 - 260)) | (1 << (HyperTalkParser.T__275 - 260)) | (1 << (HyperTalkParser.T__276 - 260)) | (1 << (HyperTalkParser.T__287 - 260)))) !== 0) || ((((_la - 293)) & ~0x1F) === 0 && ((1 << (_la - 293)) & ((1 << (HyperTalkParser.T__292 - 293)) | (1 << (HyperTalkParser.T__293 - 293)) | (1 << (HyperTalkParser.T__295 - 293)) | (1 << (HyperTalkParser.T__296 - 293)) | (1 << (HyperTalkParser.T__297 - 293)) | (1 << (HyperTalkParser.T__298 - 293)) | (1 << (HyperTalkParser.T__299 - 293)) | (1 << (HyperTalkParser.T__301 - 293)) | (1 << (HyperTalkParser.T__302 - 293)) | (1 << (HyperTalkParser.T__306 - 293)) | (1 << (HyperTalkParser.T__307 - 293)) | (1 << (HyperTalkParser.T__308 - 293)) | (1 << (HyperTalkParser.T__312 - 293)) | (1 << (HyperTalkParser.T__313 - 293)) | (1 << (HyperTalkParser.T__314 - 293)) | (1 << (HyperTalkParser.T__315 - 293)) | (1 << (HyperTalkParser.T__316 - 293)) | (1 << (HyperTalkParser.T__317 - 293)) | (1 << (HyperTalkParser.T__318 - 293)) | (1 << (HyperTalkParser.T__319 - 293)) | (1 << (HyperTalkParser.T__320 - 293)) | (1 << (HyperTalkParser.T__321 - 293)) | (1 << (HyperTalkParser.T__322 - 293)) | (1 << (HyperTalkParser.T__323 - 293)))) !== 0) || ((((_la - 325)) & ~0x1F) === 0 && ((1 << (_la - 325)) & ((1 << (HyperTalkParser.T__324 - 325)) | (1 << (HyperTalkParser.T__325 - 325)) | (1 << (HyperTalkParser.T__326 - 325)) | (1 << (HyperTalkParser.T__327 - 325)) | (1 << (HyperTalkParser.T__328 - 325)) | (1 << (HyperTalkParser.T__329 - 325)) | (1 << (HyperTalkParser.T__330 - 325)) | (1 << (HyperTalkParser.T__331 - 325)) | (1 << (HyperTalkParser.ID - 325)) | (1 << (HyperTalkParser.LITERAL - 325)))) !== 0)) {
                            {
                                this.state = 206;
                                this.statementList();
                            }
                        }
                        this.state = 209;
                        this.match(HyperTalkParser.T__1);
                        this.state = 210;
                        this.handlerName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 212;
                        this.match(HyperTalkParser.T__0);
                        this.state = 213;
                        this.handlerName();
                        this.state = 214;
                        this.parameterList(0);
                        this.state = 216;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 215;
                                    this.match(HyperTalkParser.NEWLINE);
                                }
                            }
                            this.state = 218;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === HyperTalkParser.NEWLINE);
                        this.state = 221;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HyperTalkParser.T__4) | (1 << HyperTalkParser.T__5) | (1 << HyperTalkParser.T__6) | (1 << HyperTalkParser.T__9) | (1 << HyperTalkParser.T__10) | (1 << HyperTalkParser.T__12) | (1 << HyperTalkParser.T__15) | (1 << HyperTalkParser.T__17) | (1 << HyperTalkParser.T__18) | (1 << HyperTalkParser.T__19) | (1 << HyperTalkParser.T__20) | (1 << HyperTalkParser.T__22) | (1 << HyperTalkParser.T__23) | (1 << HyperTalkParser.T__25) | (1 << HyperTalkParser.T__26) | (1 << HyperTalkParser.T__27) | (1 << HyperTalkParser.T__28) | (1 << HyperTalkParser.T__29) | (1 << HyperTalkParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (HyperTalkParser.T__32 - 33)) | (1 << (HyperTalkParser.T__33 - 33)) | (1 << (HyperTalkParser.T__34 - 33)) | (1 << (HyperTalkParser.T__35 - 33)) | (1 << (HyperTalkParser.T__36 - 33)) | (1 << (HyperTalkParser.T__37 - 33)) | (1 << (HyperTalkParser.T__38 - 33)) | (1 << (HyperTalkParser.T__39 - 33)) | (1 << (HyperTalkParser.T__41 - 33)) | (1 << (HyperTalkParser.T__43 - 33)) | (1 << (HyperTalkParser.T__45 - 33)) | (1 << (HyperTalkParser.T__46 - 33)) | (1 << (HyperTalkParser.T__47 - 33)) | (1 << (HyperTalkParser.T__48 - 33)) | (1 << (HyperTalkParser.T__50 - 33)) | (1 << (HyperTalkParser.T__52 - 33)) | (1 << (HyperTalkParser.T__53 - 33)) | (1 << (HyperTalkParser.T__55 - 33)) | (1 << (HyperTalkParser.T__56 - 33)) | (1 << (HyperTalkParser.T__57 - 33)) | (1 << (HyperTalkParser.T__58 - 33)) | (1 << (HyperTalkParser.T__59 - 33)) | (1 << (HyperTalkParser.T__60 - 33)) | (1 << (HyperTalkParser.T__61 - 33)) | (1 << (HyperTalkParser.T__62 - 33)) | (1 << (HyperTalkParser.T__63 - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (HyperTalkParser.T__66 - 67)) | (1 << (HyperTalkParser.T__68 - 67)) | (1 << (HyperTalkParser.T__69 - 67)) | (1 << (HyperTalkParser.T__73 - 67)) | (1 << (HyperTalkParser.T__74 - 67)) | (1 << (HyperTalkParser.T__75 - 67)) | (1 << (HyperTalkParser.T__76 - 67)) | (1 << (HyperTalkParser.T__77 - 67)) | (1 << (HyperTalkParser.T__78 - 67)) | (1 << (HyperTalkParser.T__79 - 67)) | (1 << (HyperTalkParser.T__85 - 67)) | (1 << (HyperTalkParser.T__86 - 67)) | (1 << (HyperTalkParser.T__87 - 67)) | (1 << (HyperTalkParser.T__88 - 67)) | (1 << (HyperTalkParser.T__89 - 67)) | (1 << (HyperTalkParser.T__90 - 67)) | (1 << (HyperTalkParser.T__92 - 67)) | (1 << (HyperTalkParser.T__96 - 67)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (HyperTalkParser.T__101 - 102)) | (1 << (HyperTalkParser.T__102 - 102)) | (1 << (HyperTalkParser.T__103 - 102)) | (1 << (HyperTalkParser.T__104 - 102)) | (1 << (HyperTalkParser.T__105 - 102)) | (1 << (HyperTalkParser.T__106 - 102)) | (1 << (HyperTalkParser.T__107 - 102)) | (1 << (HyperTalkParser.T__108 - 102)) | (1 << (HyperTalkParser.T__116 - 102)) | (1 << (HyperTalkParser.T__117 - 102)) | (1 << (HyperTalkParser.T__119 - 102)) | (1 << (HyperTalkParser.T__120 - 102)) | (1 << (HyperTalkParser.T__121 - 102)) | (1 << (HyperTalkParser.T__122 - 102)) | (1 << (HyperTalkParser.T__124 - 102)) | (1 << (HyperTalkParser.T__125 - 102)) | (1 << (HyperTalkParser.T__126 - 102)) | (1 << (HyperTalkParser.T__127 - 102)) | (1 << (HyperTalkParser.T__128 - 102)) | (1 << (HyperTalkParser.T__129 - 102)) | (1 << (HyperTalkParser.T__130 - 102)) | (1 << (HyperTalkParser.T__131 - 102)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (HyperTalkParser.T__159 - 160)) | (1 << (HyperTalkParser.T__161 - 160)) | (1 << (HyperTalkParser.T__162 - 160)) | (1 << (HyperTalkParser.T__164 - 160)) | (1 << (HyperTalkParser.T__165 - 160)) | (1 << (HyperTalkParser.T__166 - 160)) | (1 << (HyperTalkParser.T__172 - 160)) | (1 << (HyperTalkParser.T__173 - 160)) | (1 << (HyperTalkParser.T__176 - 160)) | (1 << (HyperTalkParser.T__180 - 160)) | (1 << (HyperTalkParser.T__181 - 160)) | (1 << (HyperTalkParser.T__184 - 160)) | (1 << (HyperTalkParser.T__189 - 160)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (HyperTalkParser.T__195 - 196)) | (1 << (HyperTalkParser.T__196 - 196)) | (1 << (HyperTalkParser.T__197 - 196)) | (1 << (HyperTalkParser.T__198 - 196)) | (1 << (HyperTalkParser.T__200 - 196)) | (1 << (HyperTalkParser.T__201 - 196)) | (1 << (HyperTalkParser.T__202 - 196)) | (1 << (HyperTalkParser.T__203 - 196)) | (1 << (HyperTalkParser.T__204 - 196)) | (1 << (HyperTalkParser.T__205 - 196)) | (1 << (HyperTalkParser.T__206 - 196)) | (1 << (HyperTalkParser.T__207 - 196)) | (1 << (HyperTalkParser.T__208 - 196)) | (1 << (HyperTalkParser.T__209 - 196)) | (1 << (HyperTalkParser.T__210 - 196)) | (1 << (HyperTalkParser.T__211 - 196)) | (1 << (HyperTalkParser.T__212 - 196)) | (1 << (HyperTalkParser.T__213 - 196)) | (1 << (HyperTalkParser.T__214 - 196)) | (1 << (HyperTalkParser.T__215 - 196)) | (1 << (HyperTalkParser.T__216 - 196)) | (1 << (HyperTalkParser.T__217 - 196)) | (1 << (HyperTalkParser.T__218 - 196)) | (1 << (HyperTalkParser.T__219 - 196)) | (1 << (HyperTalkParser.T__220 - 196)) | (1 << (HyperTalkParser.T__221 - 196)) | (1 << (HyperTalkParser.T__223 - 196)) | (1 << (HyperTalkParser.T__224 - 196)) | (1 << (HyperTalkParser.T__225 - 196)) | (1 << (HyperTalkParser.T__226 - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (HyperTalkParser.T__227 - 228)) | (1 << (HyperTalkParser.T__228 - 228)) | (1 << (HyperTalkParser.T__229 - 228)) | (1 << (HyperTalkParser.T__230 - 228)) | (1 << (HyperTalkParser.T__231 - 228)) | (1 << (HyperTalkParser.T__232 - 228)) | (1 << (HyperTalkParser.T__233 - 228)) | (1 << (HyperTalkParser.T__234 - 228)) | (1 << (HyperTalkParser.T__235 - 228)) | (1 << (HyperTalkParser.T__236 - 228)) | (1 << (HyperTalkParser.T__237 - 228)) | (1 << (HyperTalkParser.T__238 - 228)) | (1 << (HyperTalkParser.T__239 - 228)) | (1 << (HyperTalkParser.T__240 - 228)) | (1 << (HyperTalkParser.T__241 - 228)) | (1 << (HyperTalkParser.T__242 - 228)) | (1 << (HyperTalkParser.T__243 - 228)) | (1 << (HyperTalkParser.T__244 - 228)) | (1 << (HyperTalkParser.T__245 - 228)) | (1 << (HyperTalkParser.T__246 - 228)) | (1 << (HyperTalkParser.T__247 - 228)) | (1 << (HyperTalkParser.T__248 - 228)) | (1 << (HyperTalkParser.T__249 - 228)) | (1 << (HyperTalkParser.T__250 - 228)) | (1 << (HyperTalkParser.T__251 - 228)) | (1 << (HyperTalkParser.T__252 - 228)) | (1 << (HyperTalkParser.T__253 - 228)) | (1 << (HyperTalkParser.T__254 - 228)) | (1 << (HyperTalkParser.T__255 - 228)) | (1 << (HyperTalkParser.T__256 - 228)) | (1 << (HyperTalkParser.T__257 - 228)) | (1 << (HyperTalkParser.T__258 - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (HyperTalkParser.T__259 - 260)) | (1 << (HyperTalkParser.T__260 - 260)) | (1 << (HyperTalkParser.T__261 - 260)) | (1 << (HyperTalkParser.T__262 - 260)) | (1 << (HyperTalkParser.T__263 - 260)) | (1 << (HyperTalkParser.T__264 - 260)) | (1 << (HyperTalkParser.T__265 - 260)) | (1 << (HyperTalkParser.T__266 - 260)) | (1 << (HyperTalkParser.T__267 - 260)) | (1 << (HyperTalkParser.T__268 - 260)) | (1 << (HyperTalkParser.T__269 - 260)) | (1 << (HyperTalkParser.T__270 - 260)) | (1 << (HyperTalkParser.T__271 - 260)) | (1 << (HyperTalkParser.T__272 - 260)) | (1 << (HyperTalkParser.T__273 - 260)) | (1 << (HyperTalkParser.T__274 - 260)) | (1 << (HyperTalkParser.T__275 - 260)) | (1 << (HyperTalkParser.T__276 - 260)) | (1 << (HyperTalkParser.T__287 - 260)))) !== 0) || ((((_la - 293)) & ~0x1F) === 0 && ((1 << (_la - 293)) & ((1 << (HyperTalkParser.T__292 - 293)) | (1 << (HyperTalkParser.T__293 - 293)) | (1 << (HyperTalkParser.T__295 - 293)) | (1 << (HyperTalkParser.T__296 - 293)) | (1 << (HyperTalkParser.T__297 - 293)) | (1 << (HyperTalkParser.T__298 - 293)) | (1 << (HyperTalkParser.T__299 - 293)) | (1 << (HyperTalkParser.T__301 - 293)) | (1 << (HyperTalkParser.T__302 - 293)) | (1 << (HyperTalkParser.T__306 - 293)) | (1 << (HyperTalkParser.T__307 - 293)) | (1 << (HyperTalkParser.T__308 - 293)) | (1 << (HyperTalkParser.T__312 - 293)) | (1 << (HyperTalkParser.T__313 - 293)) | (1 << (HyperTalkParser.T__314 - 293)) | (1 << (HyperTalkParser.T__315 - 293)) | (1 << (HyperTalkParser.T__316 - 293)) | (1 << (HyperTalkParser.T__317 - 293)) | (1 << (HyperTalkParser.T__318 - 293)) | (1 << (HyperTalkParser.T__319 - 293)) | (1 << (HyperTalkParser.T__320 - 293)) | (1 << (HyperTalkParser.T__321 - 293)) | (1 << (HyperTalkParser.T__322 - 293)) | (1 << (HyperTalkParser.T__323 - 293)))) !== 0) || ((((_la - 325)) & ~0x1F) === 0 && ((1 << (_la - 325)) & ((1 << (HyperTalkParser.T__324 - 325)) | (1 << (HyperTalkParser.T__325 - 325)) | (1 << (HyperTalkParser.T__326 - 325)) | (1 << (HyperTalkParser.T__327 - 325)) | (1 << (HyperTalkParser.T__328 - 325)) | (1 << (HyperTalkParser.T__329 - 325)) | (1 << (HyperTalkParser.T__330 - 325)) | (1 << (HyperTalkParser.T__331 - 325)) | (1 << (HyperTalkParser.ID - 325)) | (1 << (HyperTalkParser.LITERAL - 325)))) !== 0)) {
                            {
                                this.state = 220;
                                this.statementList();
                            }
                        }
                        this.state = 223;
                        this.match(HyperTalkParser.T__1);
                        this.state = 224;
                        this.handlerName();
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
    HyperTalkParser.prototype.function = function () {
        var _localctx = new FunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, HyperTalkParser.RULE_function);
        var _la;
        try {
            this.state = 254;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 228;
                        this.match(HyperTalkParser.T__2);
                        this.state = 229;
                        this.match(HyperTalkParser.ID);
                        this.state = 231;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 230;
                                    this.match(HyperTalkParser.NEWLINE);
                                }
                            }
                            this.state = 233;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === HyperTalkParser.NEWLINE);
                        this.state = 236;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HyperTalkParser.T__4) | (1 << HyperTalkParser.T__5) | (1 << HyperTalkParser.T__6) | (1 << HyperTalkParser.T__9) | (1 << HyperTalkParser.T__10) | (1 << HyperTalkParser.T__12) | (1 << HyperTalkParser.T__15) | (1 << HyperTalkParser.T__17) | (1 << HyperTalkParser.T__18) | (1 << HyperTalkParser.T__19) | (1 << HyperTalkParser.T__20) | (1 << HyperTalkParser.T__22) | (1 << HyperTalkParser.T__23) | (1 << HyperTalkParser.T__25) | (1 << HyperTalkParser.T__26) | (1 << HyperTalkParser.T__27) | (1 << HyperTalkParser.T__28) | (1 << HyperTalkParser.T__29) | (1 << HyperTalkParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (HyperTalkParser.T__32 - 33)) | (1 << (HyperTalkParser.T__33 - 33)) | (1 << (HyperTalkParser.T__34 - 33)) | (1 << (HyperTalkParser.T__35 - 33)) | (1 << (HyperTalkParser.T__36 - 33)) | (1 << (HyperTalkParser.T__37 - 33)) | (1 << (HyperTalkParser.T__38 - 33)) | (1 << (HyperTalkParser.T__39 - 33)) | (1 << (HyperTalkParser.T__41 - 33)) | (1 << (HyperTalkParser.T__43 - 33)) | (1 << (HyperTalkParser.T__45 - 33)) | (1 << (HyperTalkParser.T__46 - 33)) | (1 << (HyperTalkParser.T__47 - 33)) | (1 << (HyperTalkParser.T__48 - 33)) | (1 << (HyperTalkParser.T__50 - 33)) | (1 << (HyperTalkParser.T__52 - 33)) | (1 << (HyperTalkParser.T__53 - 33)) | (1 << (HyperTalkParser.T__55 - 33)) | (1 << (HyperTalkParser.T__56 - 33)) | (1 << (HyperTalkParser.T__57 - 33)) | (1 << (HyperTalkParser.T__58 - 33)) | (1 << (HyperTalkParser.T__59 - 33)) | (1 << (HyperTalkParser.T__60 - 33)) | (1 << (HyperTalkParser.T__61 - 33)) | (1 << (HyperTalkParser.T__62 - 33)) | (1 << (HyperTalkParser.T__63 - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (HyperTalkParser.T__66 - 67)) | (1 << (HyperTalkParser.T__68 - 67)) | (1 << (HyperTalkParser.T__69 - 67)) | (1 << (HyperTalkParser.T__73 - 67)) | (1 << (HyperTalkParser.T__74 - 67)) | (1 << (HyperTalkParser.T__75 - 67)) | (1 << (HyperTalkParser.T__76 - 67)) | (1 << (HyperTalkParser.T__77 - 67)) | (1 << (HyperTalkParser.T__78 - 67)) | (1 << (HyperTalkParser.T__79 - 67)) | (1 << (HyperTalkParser.T__85 - 67)) | (1 << (HyperTalkParser.T__86 - 67)) | (1 << (HyperTalkParser.T__87 - 67)) | (1 << (HyperTalkParser.T__88 - 67)) | (1 << (HyperTalkParser.T__89 - 67)) | (1 << (HyperTalkParser.T__90 - 67)) | (1 << (HyperTalkParser.T__92 - 67)) | (1 << (HyperTalkParser.T__96 - 67)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (HyperTalkParser.T__101 - 102)) | (1 << (HyperTalkParser.T__102 - 102)) | (1 << (HyperTalkParser.T__103 - 102)) | (1 << (HyperTalkParser.T__104 - 102)) | (1 << (HyperTalkParser.T__105 - 102)) | (1 << (HyperTalkParser.T__106 - 102)) | (1 << (HyperTalkParser.T__107 - 102)) | (1 << (HyperTalkParser.T__108 - 102)) | (1 << (HyperTalkParser.T__116 - 102)) | (1 << (HyperTalkParser.T__117 - 102)) | (1 << (HyperTalkParser.T__119 - 102)) | (1 << (HyperTalkParser.T__120 - 102)) | (1 << (HyperTalkParser.T__121 - 102)) | (1 << (HyperTalkParser.T__122 - 102)) | (1 << (HyperTalkParser.T__124 - 102)) | (1 << (HyperTalkParser.T__125 - 102)) | (1 << (HyperTalkParser.T__126 - 102)) | (1 << (HyperTalkParser.T__127 - 102)) | (1 << (HyperTalkParser.T__128 - 102)) | (1 << (HyperTalkParser.T__129 - 102)) | (1 << (HyperTalkParser.T__130 - 102)) | (1 << (HyperTalkParser.T__131 - 102)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (HyperTalkParser.T__159 - 160)) | (1 << (HyperTalkParser.T__161 - 160)) | (1 << (HyperTalkParser.T__162 - 160)) | (1 << (HyperTalkParser.T__164 - 160)) | (1 << (HyperTalkParser.T__165 - 160)) | (1 << (HyperTalkParser.T__166 - 160)) | (1 << (HyperTalkParser.T__172 - 160)) | (1 << (HyperTalkParser.T__173 - 160)) | (1 << (HyperTalkParser.T__176 - 160)) | (1 << (HyperTalkParser.T__180 - 160)) | (1 << (HyperTalkParser.T__181 - 160)) | (1 << (HyperTalkParser.T__184 - 160)) | (1 << (HyperTalkParser.T__189 - 160)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (HyperTalkParser.T__195 - 196)) | (1 << (HyperTalkParser.T__196 - 196)) | (1 << (HyperTalkParser.T__197 - 196)) | (1 << (HyperTalkParser.T__198 - 196)) | (1 << (HyperTalkParser.T__200 - 196)) | (1 << (HyperTalkParser.T__201 - 196)) | (1 << (HyperTalkParser.T__202 - 196)) | (1 << (HyperTalkParser.T__203 - 196)) | (1 << (HyperTalkParser.T__204 - 196)) | (1 << (HyperTalkParser.T__205 - 196)) | (1 << (HyperTalkParser.T__206 - 196)) | (1 << (HyperTalkParser.T__207 - 196)) | (1 << (HyperTalkParser.T__208 - 196)) | (1 << (HyperTalkParser.T__209 - 196)) | (1 << (HyperTalkParser.T__210 - 196)) | (1 << (HyperTalkParser.T__211 - 196)) | (1 << (HyperTalkParser.T__212 - 196)) | (1 << (HyperTalkParser.T__213 - 196)) | (1 << (HyperTalkParser.T__214 - 196)) | (1 << (HyperTalkParser.T__215 - 196)) | (1 << (HyperTalkParser.T__216 - 196)) | (1 << (HyperTalkParser.T__217 - 196)) | (1 << (HyperTalkParser.T__218 - 196)) | (1 << (HyperTalkParser.T__219 - 196)) | (1 << (HyperTalkParser.T__220 - 196)) | (1 << (HyperTalkParser.T__221 - 196)) | (1 << (HyperTalkParser.T__223 - 196)) | (1 << (HyperTalkParser.T__224 - 196)) | (1 << (HyperTalkParser.T__225 - 196)) | (1 << (HyperTalkParser.T__226 - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (HyperTalkParser.T__227 - 228)) | (1 << (HyperTalkParser.T__228 - 228)) | (1 << (HyperTalkParser.T__229 - 228)) | (1 << (HyperTalkParser.T__230 - 228)) | (1 << (HyperTalkParser.T__231 - 228)) | (1 << (HyperTalkParser.T__232 - 228)) | (1 << (HyperTalkParser.T__233 - 228)) | (1 << (HyperTalkParser.T__234 - 228)) | (1 << (HyperTalkParser.T__235 - 228)) | (1 << (HyperTalkParser.T__236 - 228)) | (1 << (HyperTalkParser.T__237 - 228)) | (1 << (HyperTalkParser.T__238 - 228)) | (1 << (HyperTalkParser.T__239 - 228)) | (1 << (HyperTalkParser.T__240 - 228)) | (1 << (HyperTalkParser.T__241 - 228)) | (1 << (HyperTalkParser.T__242 - 228)) | (1 << (HyperTalkParser.T__243 - 228)) | (1 << (HyperTalkParser.T__244 - 228)) | (1 << (HyperTalkParser.T__245 - 228)) | (1 << (HyperTalkParser.T__246 - 228)) | (1 << (HyperTalkParser.T__247 - 228)) | (1 << (HyperTalkParser.T__248 - 228)) | (1 << (HyperTalkParser.T__249 - 228)) | (1 << (HyperTalkParser.T__250 - 228)) | (1 << (HyperTalkParser.T__251 - 228)) | (1 << (HyperTalkParser.T__252 - 228)) | (1 << (HyperTalkParser.T__253 - 228)) | (1 << (HyperTalkParser.T__254 - 228)) | (1 << (HyperTalkParser.T__255 - 228)) | (1 << (HyperTalkParser.T__256 - 228)) | (1 << (HyperTalkParser.T__257 - 228)) | (1 << (HyperTalkParser.T__258 - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (HyperTalkParser.T__259 - 260)) | (1 << (HyperTalkParser.T__260 - 260)) | (1 << (HyperTalkParser.T__261 - 260)) | (1 << (HyperTalkParser.T__262 - 260)) | (1 << (HyperTalkParser.T__263 - 260)) | (1 << (HyperTalkParser.T__264 - 260)) | (1 << (HyperTalkParser.T__265 - 260)) | (1 << (HyperTalkParser.T__266 - 260)) | (1 << (HyperTalkParser.T__267 - 260)) | (1 << (HyperTalkParser.T__268 - 260)) | (1 << (HyperTalkParser.T__269 - 260)) | (1 << (HyperTalkParser.T__270 - 260)) | (1 << (HyperTalkParser.T__271 - 260)) | (1 << (HyperTalkParser.T__272 - 260)) | (1 << (HyperTalkParser.T__273 - 260)) | (1 << (HyperTalkParser.T__274 - 260)) | (1 << (HyperTalkParser.T__275 - 260)) | (1 << (HyperTalkParser.T__276 - 260)) | (1 << (HyperTalkParser.T__287 - 260)))) !== 0) || ((((_la - 293)) & ~0x1F) === 0 && ((1 << (_la - 293)) & ((1 << (HyperTalkParser.T__292 - 293)) | (1 << (HyperTalkParser.T__293 - 293)) | (1 << (HyperTalkParser.T__295 - 293)) | (1 << (HyperTalkParser.T__296 - 293)) | (1 << (HyperTalkParser.T__297 - 293)) | (1 << (HyperTalkParser.T__298 - 293)) | (1 << (HyperTalkParser.T__299 - 293)) | (1 << (HyperTalkParser.T__301 - 293)) | (1 << (HyperTalkParser.T__302 - 293)) | (1 << (HyperTalkParser.T__306 - 293)) | (1 << (HyperTalkParser.T__307 - 293)) | (1 << (HyperTalkParser.T__308 - 293)) | (1 << (HyperTalkParser.T__312 - 293)) | (1 << (HyperTalkParser.T__313 - 293)) | (1 << (HyperTalkParser.T__314 - 293)) | (1 << (HyperTalkParser.T__315 - 293)) | (1 << (HyperTalkParser.T__316 - 293)) | (1 << (HyperTalkParser.T__317 - 293)) | (1 << (HyperTalkParser.T__318 - 293)) | (1 << (HyperTalkParser.T__319 - 293)) | (1 << (HyperTalkParser.T__320 - 293)) | (1 << (HyperTalkParser.T__321 - 293)) | (1 << (HyperTalkParser.T__322 - 293)) | (1 << (HyperTalkParser.T__323 - 293)))) !== 0) || ((((_la - 325)) & ~0x1F) === 0 && ((1 << (_la - 325)) & ((1 << (HyperTalkParser.T__324 - 325)) | (1 << (HyperTalkParser.T__325 - 325)) | (1 << (HyperTalkParser.T__326 - 325)) | (1 << (HyperTalkParser.T__327 - 325)) | (1 << (HyperTalkParser.T__328 - 325)) | (1 << (HyperTalkParser.T__329 - 325)) | (1 << (HyperTalkParser.T__330 - 325)) | (1 << (HyperTalkParser.T__331 - 325)) | (1 << (HyperTalkParser.ID - 325)) | (1 << (HyperTalkParser.LITERAL - 325)))) !== 0)) {
                            {
                                this.state = 235;
                                this.statementList();
                            }
                        }
                        this.state = 238;
                        this.match(HyperTalkParser.T__1);
                        this.state = 239;
                        this.match(HyperTalkParser.ID);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 240;
                        this.match(HyperTalkParser.T__2);
                        this.state = 241;
                        this.match(HyperTalkParser.ID);
                        this.state = 242;
                        this.parameterList(0);
                        this.state = 244;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 243;
                                    this.match(HyperTalkParser.NEWLINE);
                                }
                            }
                            this.state = 246;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === HyperTalkParser.NEWLINE);
                        this.state = 249;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HyperTalkParser.T__4) | (1 << HyperTalkParser.T__5) | (1 << HyperTalkParser.T__6) | (1 << HyperTalkParser.T__9) | (1 << HyperTalkParser.T__10) | (1 << HyperTalkParser.T__12) | (1 << HyperTalkParser.T__15) | (1 << HyperTalkParser.T__17) | (1 << HyperTalkParser.T__18) | (1 << HyperTalkParser.T__19) | (1 << HyperTalkParser.T__20) | (1 << HyperTalkParser.T__22) | (1 << HyperTalkParser.T__23) | (1 << HyperTalkParser.T__25) | (1 << HyperTalkParser.T__26) | (1 << HyperTalkParser.T__27) | (1 << HyperTalkParser.T__28) | (1 << HyperTalkParser.T__29) | (1 << HyperTalkParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (HyperTalkParser.T__32 - 33)) | (1 << (HyperTalkParser.T__33 - 33)) | (1 << (HyperTalkParser.T__34 - 33)) | (1 << (HyperTalkParser.T__35 - 33)) | (1 << (HyperTalkParser.T__36 - 33)) | (1 << (HyperTalkParser.T__37 - 33)) | (1 << (HyperTalkParser.T__38 - 33)) | (1 << (HyperTalkParser.T__39 - 33)) | (1 << (HyperTalkParser.T__41 - 33)) | (1 << (HyperTalkParser.T__43 - 33)) | (1 << (HyperTalkParser.T__45 - 33)) | (1 << (HyperTalkParser.T__46 - 33)) | (1 << (HyperTalkParser.T__47 - 33)) | (1 << (HyperTalkParser.T__48 - 33)) | (1 << (HyperTalkParser.T__50 - 33)) | (1 << (HyperTalkParser.T__52 - 33)) | (1 << (HyperTalkParser.T__53 - 33)) | (1 << (HyperTalkParser.T__55 - 33)) | (1 << (HyperTalkParser.T__56 - 33)) | (1 << (HyperTalkParser.T__57 - 33)) | (1 << (HyperTalkParser.T__58 - 33)) | (1 << (HyperTalkParser.T__59 - 33)) | (1 << (HyperTalkParser.T__60 - 33)) | (1 << (HyperTalkParser.T__61 - 33)) | (1 << (HyperTalkParser.T__62 - 33)) | (1 << (HyperTalkParser.T__63 - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (HyperTalkParser.T__66 - 67)) | (1 << (HyperTalkParser.T__68 - 67)) | (1 << (HyperTalkParser.T__69 - 67)) | (1 << (HyperTalkParser.T__73 - 67)) | (1 << (HyperTalkParser.T__74 - 67)) | (1 << (HyperTalkParser.T__75 - 67)) | (1 << (HyperTalkParser.T__76 - 67)) | (1 << (HyperTalkParser.T__77 - 67)) | (1 << (HyperTalkParser.T__78 - 67)) | (1 << (HyperTalkParser.T__79 - 67)) | (1 << (HyperTalkParser.T__85 - 67)) | (1 << (HyperTalkParser.T__86 - 67)) | (1 << (HyperTalkParser.T__87 - 67)) | (1 << (HyperTalkParser.T__88 - 67)) | (1 << (HyperTalkParser.T__89 - 67)) | (1 << (HyperTalkParser.T__90 - 67)) | (1 << (HyperTalkParser.T__92 - 67)) | (1 << (HyperTalkParser.T__96 - 67)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (HyperTalkParser.T__101 - 102)) | (1 << (HyperTalkParser.T__102 - 102)) | (1 << (HyperTalkParser.T__103 - 102)) | (1 << (HyperTalkParser.T__104 - 102)) | (1 << (HyperTalkParser.T__105 - 102)) | (1 << (HyperTalkParser.T__106 - 102)) | (1 << (HyperTalkParser.T__107 - 102)) | (1 << (HyperTalkParser.T__108 - 102)) | (1 << (HyperTalkParser.T__116 - 102)) | (1 << (HyperTalkParser.T__117 - 102)) | (1 << (HyperTalkParser.T__119 - 102)) | (1 << (HyperTalkParser.T__120 - 102)) | (1 << (HyperTalkParser.T__121 - 102)) | (1 << (HyperTalkParser.T__122 - 102)) | (1 << (HyperTalkParser.T__124 - 102)) | (1 << (HyperTalkParser.T__125 - 102)) | (1 << (HyperTalkParser.T__126 - 102)) | (1 << (HyperTalkParser.T__127 - 102)) | (1 << (HyperTalkParser.T__128 - 102)) | (1 << (HyperTalkParser.T__129 - 102)) | (1 << (HyperTalkParser.T__130 - 102)) | (1 << (HyperTalkParser.T__131 - 102)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (HyperTalkParser.T__159 - 160)) | (1 << (HyperTalkParser.T__161 - 160)) | (1 << (HyperTalkParser.T__162 - 160)) | (1 << (HyperTalkParser.T__164 - 160)) | (1 << (HyperTalkParser.T__165 - 160)) | (1 << (HyperTalkParser.T__166 - 160)) | (1 << (HyperTalkParser.T__172 - 160)) | (1 << (HyperTalkParser.T__173 - 160)) | (1 << (HyperTalkParser.T__176 - 160)) | (1 << (HyperTalkParser.T__180 - 160)) | (1 << (HyperTalkParser.T__181 - 160)) | (1 << (HyperTalkParser.T__184 - 160)) | (1 << (HyperTalkParser.T__189 - 160)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (HyperTalkParser.T__195 - 196)) | (1 << (HyperTalkParser.T__196 - 196)) | (1 << (HyperTalkParser.T__197 - 196)) | (1 << (HyperTalkParser.T__198 - 196)) | (1 << (HyperTalkParser.T__200 - 196)) | (1 << (HyperTalkParser.T__201 - 196)) | (1 << (HyperTalkParser.T__202 - 196)) | (1 << (HyperTalkParser.T__203 - 196)) | (1 << (HyperTalkParser.T__204 - 196)) | (1 << (HyperTalkParser.T__205 - 196)) | (1 << (HyperTalkParser.T__206 - 196)) | (1 << (HyperTalkParser.T__207 - 196)) | (1 << (HyperTalkParser.T__208 - 196)) | (1 << (HyperTalkParser.T__209 - 196)) | (1 << (HyperTalkParser.T__210 - 196)) | (1 << (HyperTalkParser.T__211 - 196)) | (1 << (HyperTalkParser.T__212 - 196)) | (1 << (HyperTalkParser.T__213 - 196)) | (1 << (HyperTalkParser.T__214 - 196)) | (1 << (HyperTalkParser.T__215 - 196)) | (1 << (HyperTalkParser.T__216 - 196)) | (1 << (HyperTalkParser.T__217 - 196)) | (1 << (HyperTalkParser.T__218 - 196)) | (1 << (HyperTalkParser.T__219 - 196)) | (1 << (HyperTalkParser.T__220 - 196)) | (1 << (HyperTalkParser.T__221 - 196)) | (1 << (HyperTalkParser.T__223 - 196)) | (1 << (HyperTalkParser.T__224 - 196)) | (1 << (HyperTalkParser.T__225 - 196)) | (1 << (HyperTalkParser.T__226 - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (HyperTalkParser.T__227 - 228)) | (1 << (HyperTalkParser.T__228 - 228)) | (1 << (HyperTalkParser.T__229 - 228)) | (1 << (HyperTalkParser.T__230 - 228)) | (1 << (HyperTalkParser.T__231 - 228)) | (1 << (HyperTalkParser.T__232 - 228)) | (1 << (HyperTalkParser.T__233 - 228)) | (1 << (HyperTalkParser.T__234 - 228)) | (1 << (HyperTalkParser.T__235 - 228)) | (1 << (HyperTalkParser.T__236 - 228)) | (1 << (HyperTalkParser.T__237 - 228)) | (1 << (HyperTalkParser.T__238 - 228)) | (1 << (HyperTalkParser.T__239 - 228)) | (1 << (HyperTalkParser.T__240 - 228)) | (1 << (HyperTalkParser.T__241 - 228)) | (1 << (HyperTalkParser.T__242 - 228)) | (1 << (HyperTalkParser.T__243 - 228)) | (1 << (HyperTalkParser.T__244 - 228)) | (1 << (HyperTalkParser.T__245 - 228)) | (1 << (HyperTalkParser.T__246 - 228)) | (1 << (HyperTalkParser.T__247 - 228)) | (1 << (HyperTalkParser.T__248 - 228)) | (1 << (HyperTalkParser.T__249 - 228)) | (1 << (HyperTalkParser.T__250 - 228)) | (1 << (HyperTalkParser.T__251 - 228)) | (1 << (HyperTalkParser.T__252 - 228)) | (1 << (HyperTalkParser.T__253 - 228)) | (1 << (HyperTalkParser.T__254 - 228)) | (1 << (HyperTalkParser.T__255 - 228)) | (1 << (HyperTalkParser.T__256 - 228)) | (1 << (HyperTalkParser.T__257 - 228)) | (1 << (HyperTalkParser.T__258 - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (HyperTalkParser.T__259 - 260)) | (1 << (HyperTalkParser.T__260 - 260)) | (1 << (HyperTalkParser.T__261 - 260)) | (1 << (HyperTalkParser.T__262 - 260)) | (1 << (HyperTalkParser.T__263 - 260)) | (1 << (HyperTalkParser.T__264 - 260)) | (1 << (HyperTalkParser.T__265 - 260)) | (1 << (HyperTalkParser.T__266 - 260)) | (1 << (HyperTalkParser.T__267 - 260)) | (1 << (HyperTalkParser.T__268 - 260)) | (1 << (HyperTalkParser.T__269 - 260)) | (1 << (HyperTalkParser.T__270 - 260)) | (1 << (HyperTalkParser.T__271 - 260)) | (1 << (HyperTalkParser.T__272 - 260)) | (1 << (HyperTalkParser.T__273 - 260)) | (1 << (HyperTalkParser.T__274 - 260)) | (1 << (HyperTalkParser.T__275 - 260)) | (1 << (HyperTalkParser.T__276 - 260)) | (1 << (HyperTalkParser.T__287 - 260)))) !== 0) || ((((_la - 293)) & ~0x1F) === 0 && ((1 << (_la - 293)) & ((1 << (HyperTalkParser.T__292 - 293)) | (1 << (HyperTalkParser.T__293 - 293)) | (1 << (HyperTalkParser.T__295 - 293)) | (1 << (HyperTalkParser.T__296 - 293)) | (1 << (HyperTalkParser.T__297 - 293)) | (1 << (HyperTalkParser.T__298 - 293)) | (1 << (HyperTalkParser.T__299 - 293)) | (1 << (HyperTalkParser.T__301 - 293)) | (1 << (HyperTalkParser.T__302 - 293)) | (1 << (HyperTalkParser.T__306 - 293)) | (1 << (HyperTalkParser.T__307 - 293)) | (1 << (HyperTalkParser.T__308 - 293)) | (1 << (HyperTalkParser.T__312 - 293)) | (1 << (HyperTalkParser.T__313 - 293)) | (1 << (HyperTalkParser.T__314 - 293)) | (1 << (HyperTalkParser.T__315 - 293)) | (1 << (HyperTalkParser.T__316 - 293)) | (1 << (HyperTalkParser.T__317 - 293)) | (1 << (HyperTalkParser.T__318 - 293)) | (1 << (HyperTalkParser.T__319 - 293)) | (1 << (HyperTalkParser.T__320 - 293)) | (1 << (HyperTalkParser.T__321 - 293)) | (1 << (HyperTalkParser.T__322 - 293)) | (1 << (HyperTalkParser.T__323 - 293)))) !== 0) || ((((_la - 325)) & ~0x1F) === 0 && ((1 << (_la - 325)) & ((1 << (HyperTalkParser.T__324 - 325)) | (1 << (HyperTalkParser.T__325 - 325)) | (1 << (HyperTalkParser.T__326 - 325)) | (1 << (HyperTalkParser.T__327 - 325)) | (1 << (HyperTalkParser.T__328 - 325)) | (1 << (HyperTalkParser.T__329 - 325)) | (1 << (HyperTalkParser.T__330 - 325)) | (1 << (HyperTalkParser.T__331 - 325)) | (1 << (HyperTalkParser.ID - 325)) | (1 << (HyperTalkParser.LITERAL - 325)))) !== 0)) {
                            {
                                this.state = 248;
                                this.statementList();
                            }
                        }
                        this.state = 251;
                        this.match(HyperTalkParser.T__1);
                        this.state = 252;
                        this.match(HyperTalkParser.ID);
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
    HyperTalkParser.prototype.handlerName = function () {
        var _localctx = new HandlerNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, HyperTalkParser.RULE_handlerName);
        try {
            this.state = 258;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case HyperTalkParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 256;
                        this.match(HyperTalkParser.ID);
                    }
                    break;
                case HyperTalkParser.T__10:
                case HyperTalkParser.T__12:
                case HyperTalkParser.T__15:
                case HyperTalkParser.T__17:
                case HyperTalkParser.T__18:
                case HyperTalkParser.T__20:
                case HyperTalkParser.T__22:
                case HyperTalkParser.T__25:
                case HyperTalkParser.T__27:
                case HyperTalkParser.T__28:
                case HyperTalkParser.T__29:
                case HyperTalkParser.T__30:
                case HyperTalkParser.T__33:
                case HyperTalkParser.T__34:
                case HyperTalkParser.T__38:
                case HyperTalkParser.T__41:
                case HyperTalkParser.T__43:
                case HyperTalkParser.T__46:
                case HyperTalkParser.T__47:
                case HyperTalkParser.T__48:
                case HyperTalkParser.T__50:
                case HyperTalkParser.T__52:
                case HyperTalkParser.T__53:
                case HyperTalkParser.T__55:
                case HyperTalkParser.T__57:
                case HyperTalkParser.T__58:
                case HyperTalkParser.T__59:
                case HyperTalkParser.T__62:
                case HyperTalkParser.T__63:
                case HyperTalkParser.T__66:
                case HyperTalkParser.T__68:
                case HyperTalkParser.T__73:
                case HyperTalkParser.T__74:
                case HyperTalkParser.T__75:
                case HyperTalkParser.T__76:
                case HyperTalkParser.T__85:
                case HyperTalkParser.T__86:
                case HyperTalkParser.T__89:
                case HyperTalkParser.T__90:
                case HyperTalkParser.T__92:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 257;
                        this.commandName();
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
    HyperTalkParser.prototype.parameterList = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ParameterListContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 12;
        this.enterRecursionRule(_localctx, 12, HyperTalkParser.RULE_parameterList, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 261;
                    this.match(HyperTalkParser.ID);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 268;
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
                                _localctx = new ParameterListContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, HyperTalkParser.RULE_parameterList);
                                this.state = 263;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 264;
                                this.match(HyperTalkParser.T__3);
                                this.state = 265;
                                this.match(HyperTalkParser.ID);
                            }
                        }
                    }
                    this.state = 270;
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
    HyperTalkParser.prototype.statementList = function () {
        var _localctx = new StatementListContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, HyperTalkParser.RULE_statementList);
        var _la;
        try {
            this.state = 285;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 271;
                        this.statement();
                        this.state = 273;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 272;
                                    this.match(HyperTalkParser.NEWLINE);
                                }
                            }
                            this.state = 275;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === HyperTalkParser.NEWLINE);
                        this.state = 277;
                        this.statementList();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 279;
                        this.statement();
                        this.state = 281;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 280;
                                    this.match(HyperTalkParser.NEWLINE);
                                }
                            }
                            this.state = 283;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === HyperTalkParser.NEWLINE);
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
    HyperTalkParser.prototype.statement = function () {
        var _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, HyperTalkParser.RULE_statement);
        try {
            this.state = 295;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 287;
                        this.commandStmnt();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 288;
                        this.functionCall();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 289;
                        this.messageStatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 290;
                        this.expression(0);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 291;
                        this.ifStatement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 292;
                        this.repeatStatement();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 293;
                        this.globalStmnt();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 294;
                        this.returnStmnt();
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
    HyperTalkParser.prototype.globalStmnt = function () {
        var _localctx = new GlobalStmntContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, HyperTalkParser.RULE_globalStmnt);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 297;
                this.match(HyperTalkParser.T__4);
                this.state = 298;
                this.parameterList(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    HyperTalkParser.prototype.returnStmnt = function () {
        var _localctx = new ReturnStmntContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, HyperTalkParser.RULE_returnStmnt);
        try {
            this.state = 303;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 300;
                        this.match(HyperTalkParser.T__5);
                        this.state = 301;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 302;
                        this.match(HyperTalkParser.T__5);
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
    HyperTalkParser.prototype.ifStatement = function () {
        var _localctx = new IfStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, HyperTalkParser.RULE_ifStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 305;
                this.match(HyperTalkParser.T__6);
                this.state = 306;
                this.expression(0);
                this.state = 307;
                this.thenStatement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    HyperTalkParser.prototype.thenStatement = function () {
        var _localctx = new ThenStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, HyperTalkParser.RULE_thenStatement);
        var _la;
        try {
            this.state = 342;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 310;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.NEWLINE) {
                            {
                                this.state = 309;
                                this.match(HyperTalkParser.NEWLINE);
                            }
                        }
                        this.state = 312;
                        this.match(HyperTalkParser.T__7);
                        this.state = 313;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 315;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.NEWLINE) {
                            {
                                this.state = 314;
                                this.match(HyperTalkParser.NEWLINE);
                            }
                        }
                        this.state = 317;
                        this.match(HyperTalkParser.T__7);
                        this.state = 318;
                        this.statement();
                        this.state = 320;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                            case 1:
                                {
                                    this.state = 319;
                                    this.match(HyperTalkParser.NEWLINE);
                                }
                                break;
                        }
                        this.state = 323;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                            case 1:
                                {
                                    this.state = 322;
                                    this.elseStatement();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 326;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.NEWLINE) {
                            {
                                this.state = 325;
                                this.match(HyperTalkParser.NEWLINE);
                            }
                        }
                        this.state = 328;
                        this.match(HyperTalkParser.T__7);
                        this.state = 330;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 329;
                                    this.match(HyperTalkParser.NEWLINE);
                                }
                            }
                            this.state = 332;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === HyperTalkParser.NEWLINE);
                        this.state = 335;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HyperTalkParser.T__4) | (1 << HyperTalkParser.T__5) | (1 << HyperTalkParser.T__6) | (1 << HyperTalkParser.T__9) | (1 << HyperTalkParser.T__10) | (1 << HyperTalkParser.T__12) | (1 << HyperTalkParser.T__15) | (1 << HyperTalkParser.T__17) | (1 << HyperTalkParser.T__18) | (1 << HyperTalkParser.T__19) | (1 << HyperTalkParser.T__20) | (1 << HyperTalkParser.T__22) | (1 << HyperTalkParser.T__23) | (1 << HyperTalkParser.T__25) | (1 << HyperTalkParser.T__26) | (1 << HyperTalkParser.T__27) | (1 << HyperTalkParser.T__28) | (1 << HyperTalkParser.T__29) | (1 << HyperTalkParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (HyperTalkParser.T__32 - 33)) | (1 << (HyperTalkParser.T__33 - 33)) | (1 << (HyperTalkParser.T__34 - 33)) | (1 << (HyperTalkParser.T__35 - 33)) | (1 << (HyperTalkParser.T__36 - 33)) | (1 << (HyperTalkParser.T__37 - 33)) | (1 << (HyperTalkParser.T__38 - 33)) | (1 << (HyperTalkParser.T__39 - 33)) | (1 << (HyperTalkParser.T__41 - 33)) | (1 << (HyperTalkParser.T__43 - 33)) | (1 << (HyperTalkParser.T__45 - 33)) | (1 << (HyperTalkParser.T__46 - 33)) | (1 << (HyperTalkParser.T__47 - 33)) | (1 << (HyperTalkParser.T__48 - 33)) | (1 << (HyperTalkParser.T__50 - 33)) | (1 << (HyperTalkParser.T__52 - 33)) | (1 << (HyperTalkParser.T__53 - 33)) | (1 << (HyperTalkParser.T__55 - 33)) | (1 << (HyperTalkParser.T__56 - 33)) | (1 << (HyperTalkParser.T__57 - 33)) | (1 << (HyperTalkParser.T__58 - 33)) | (1 << (HyperTalkParser.T__59 - 33)) | (1 << (HyperTalkParser.T__60 - 33)) | (1 << (HyperTalkParser.T__61 - 33)) | (1 << (HyperTalkParser.T__62 - 33)) | (1 << (HyperTalkParser.T__63 - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (HyperTalkParser.T__66 - 67)) | (1 << (HyperTalkParser.T__68 - 67)) | (1 << (HyperTalkParser.T__69 - 67)) | (1 << (HyperTalkParser.T__73 - 67)) | (1 << (HyperTalkParser.T__74 - 67)) | (1 << (HyperTalkParser.T__75 - 67)) | (1 << (HyperTalkParser.T__76 - 67)) | (1 << (HyperTalkParser.T__77 - 67)) | (1 << (HyperTalkParser.T__78 - 67)) | (1 << (HyperTalkParser.T__79 - 67)) | (1 << (HyperTalkParser.T__85 - 67)) | (1 << (HyperTalkParser.T__86 - 67)) | (1 << (HyperTalkParser.T__87 - 67)) | (1 << (HyperTalkParser.T__88 - 67)) | (1 << (HyperTalkParser.T__89 - 67)) | (1 << (HyperTalkParser.T__90 - 67)) | (1 << (HyperTalkParser.T__92 - 67)) | (1 << (HyperTalkParser.T__96 - 67)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (HyperTalkParser.T__101 - 102)) | (1 << (HyperTalkParser.T__102 - 102)) | (1 << (HyperTalkParser.T__103 - 102)) | (1 << (HyperTalkParser.T__104 - 102)) | (1 << (HyperTalkParser.T__105 - 102)) | (1 << (HyperTalkParser.T__106 - 102)) | (1 << (HyperTalkParser.T__107 - 102)) | (1 << (HyperTalkParser.T__108 - 102)) | (1 << (HyperTalkParser.T__116 - 102)) | (1 << (HyperTalkParser.T__117 - 102)) | (1 << (HyperTalkParser.T__119 - 102)) | (1 << (HyperTalkParser.T__120 - 102)) | (1 << (HyperTalkParser.T__121 - 102)) | (1 << (HyperTalkParser.T__122 - 102)) | (1 << (HyperTalkParser.T__124 - 102)) | (1 << (HyperTalkParser.T__125 - 102)) | (1 << (HyperTalkParser.T__126 - 102)) | (1 << (HyperTalkParser.T__127 - 102)) | (1 << (HyperTalkParser.T__128 - 102)) | (1 << (HyperTalkParser.T__129 - 102)) | (1 << (HyperTalkParser.T__130 - 102)) | (1 << (HyperTalkParser.T__131 - 102)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (HyperTalkParser.T__159 - 160)) | (1 << (HyperTalkParser.T__161 - 160)) | (1 << (HyperTalkParser.T__162 - 160)) | (1 << (HyperTalkParser.T__164 - 160)) | (1 << (HyperTalkParser.T__165 - 160)) | (1 << (HyperTalkParser.T__166 - 160)) | (1 << (HyperTalkParser.T__172 - 160)) | (1 << (HyperTalkParser.T__173 - 160)) | (1 << (HyperTalkParser.T__176 - 160)) | (1 << (HyperTalkParser.T__180 - 160)) | (1 << (HyperTalkParser.T__181 - 160)) | (1 << (HyperTalkParser.T__184 - 160)) | (1 << (HyperTalkParser.T__189 - 160)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (HyperTalkParser.T__195 - 196)) | (1 << (HyperTalkParser.T__196 - 196)) | (1 << (HyperTalkParser.T__197 - 196)) | (1 << (HyperTalkParser.T__198 - 196)) | (1 << (HyperTalkParser.T__200 - 196)) | (1 << (HyperTalkParser.T__201 - 196)) | (1 << (HyperTalkParser.T__202 - 196)) | (1 << (HyperTalkParser.T__203 - 196)) | (1 << (HyperTalkParser.T__204 - 196)) | (1 << (HyperTalkParser.T__205 - 196)) | (1 << (HyperTalkParser.T__206 - 196)) | (1 << (HyperTalkParser.T__207 - 196)) | (1 << (HyperTalkParser.T__208 - 196)) | (1 << (HyperTalkParser.T__209 - 196)) | (1 << (HyperTalkParser.T__210 - 196)) | (1 << (HyperTalkParser.T__211 - 196)) | (1 << (HyperTalkParser.T__212 - 196)) | (1 << (HyperTalkParser.T__213 - 196)) | (1 << (HyperTalkParser.T__214 - 196)) | (1 << (HyperTalkParser.T__215 - 196)) | (1 << (HyperTalkParser.T__216 - 196)) | (1 << (HyperTalkParser.T__217 - 196)) | (1 << (HyperTalkParser.T__218 - 196)) | (1 << (HyperTalkParser.T__219 - 196)) | (1 << (HyperTalkParser.T__220 - 196)) | (1 << (HyperTalkParser.T__221 - 196)) | (1 << (HyperTalkParser.T__223 - 196)) | (1 << (HyperTalkParser.T__224 - 196)) | (1 << (HyperTalkParser.T__225 - 196)) | (1 << (HyperTalkParser.T__226 - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (HyperTalkParser.T__227 - 228)) | (1 << (HyperTalkParser.T__228 - 228)) | (1 << (HyperTalkParser.T__229 - 228)) | (1 << (HyperTalkParser.T__230 - 228)) | (1 << (HyperTalkParser.T__231 - 228)) | (1 << (HyperTalkParser.T__232 - 228)) | (1 << (HyperTalkParser.T__233 - 228)) | (1 << (HyperTalkParser.T__234 - 228)) | (1 << (HyperTalkParser.T__235 - 228)) | (1 << (HyperTalkParser.T__236 - 228)) | (1 << (HyperTalkParser.T__237 - 228)) | (1 << (HyperTalkParser.T__238 - 228)) | (1 << (HyperTalkParser.T__239 - 228)) | (1 << (HyperTalkParser.T__240 - 228)) | (1 << (HyperTalkParser.T__241 - 228)) | (1 << (HyperTalkParser.T__242 - 228)) | (1 << (HyperTalkParser.T__243 - 228)) | (1 << (HyperTalkParser.T__244 - 228)) | (1 << (HyperTalkParser.T__245 - 228)) | (1 << (HyperTalkParser.T__246 - 228)) | (1 << (HyperTalkParser.T__247 - 228)) | (1 << (HyperTalkParser.T__248 - 228)) | (1 << (HyperTalkParser.T__249 - 228)) | (1 << (HyperTalkParser.T__250 - 228)) | (1 << (HyperTalkParser.T__251 - 228)) | (1 << (HyperTalkParser.T__252 - 228)) | (1 << (HyperTalkParser.T__253 - 228)) | (1 << (HyperTalkParser.T__254 - 228)) | (1 << (HyperTalkParser.T__255 - 228)) | (1 << (HyperTalkParser.T__256 - 228)) | (1 << (HyperTalkParser.T__257 - 228)) | (1 << (HyperTalkParser.T__258 - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (HyperTalkParser.T__259 - 260)) | (1 << (HyperTalkParser.T__260 - 260)) | (1 << (HyperTalkParser.T__261 - 260)) | (1 << (HyperTalkParser.T__262 - 260)) | (1 << (HyperTalkParser.T__263 - 260)) | (1 << (HyperTalkParser.T__264 - 260)) | (1 << (HyperTalkParser.T__265 - 260)) | (1 << (HyperTalkParser.T__266 - 260)) | (1 << (HyperTalkParser.T__267 - 260)) | (1 << (HyperTalkParser.T__268 - 260)) | (1 << (HyperTalkParser.T__269 - 260)) | (1 << (HyperTalkParser.T__270 - 260)) | (1 << (HyperTalkParser.T__271 - 260)) | (1 << (HyperTalkParser.T__272 - 260)) | (1 << (HyperTalkParser.T__273 - 260)) | (1 << (HyperTalkParser.T__274 - 260)) | (1 << (HyperTalkParser.T__275 - 260)) | (1 << (HyperTalkParser.T__276 - 260)) | (1 << (HyperTalkParser.T__287 - 260)))) !== 0) || ((((_la - 293)) & ~0x1F) === 0 && ((1 << (_la - 293)) & ((1 << (HyperTalkParser.T__292 - 293)) | (1 << (HyperTalkParser.T__293 - 293)) | (1 << (HyperTalkParser.T__295 - 293)) | (1 << (HyperTalkParser.T__296 - 293)) | (1 << (HyperTalkParser.T__297 - 293)) | (1 << (HyperTalkParser.T__298 - 293)) | (1 << (HyperTalkParser.T__299 - 293)) | (1 << (HyperTalkParser.T__301 - 293)) | (1 << (HyperTalkParser.T__302 - 293)) | (1 << (HyperTalkParser.T__306 - 293)) | (1 << (HyperTalkParser.T__307 - 293)) | (1 << (HyperTalkParser.T__308 - 293)) | (1 << (HyperTalkParser.T__312 - 293)) | (1 << (HyperTalkParser.T__313 - 293)) | (1 << (HyperTalkParser.T__314 - 293)) | (1 << (HyperTalkParser.T__315 - 293)) | (1 << (HyperTalkParser.T__316 - 293)) | (1 << (HyperTalkParser.T__317 - 293)) | (1 << (HyperTalkParser.T__318 - 293)) | (1 << (HyperTalkParser.T__319 - 293)) | (1 << (HyperTalkParser.T__320 - 293)) | (1 << (HyperTalkParser.T__321 - 293)) | (1 << (HyperTalkParser.T__322 - 293)) | (1 << (HyperTalkParser.T__323 - 293)))) !== 0) || ((((_la - 325)) & ~0x1F) === 0 && ((1 << (_la - 325)) & ((1 << (HyperTalkParser.T__324 - 325)) | (1 << (HyperTalkParser.T__325 - 325)) | (1 << (HyperTalkParser.T__326 - 325)) | (1 << (HyperTalkParser.T__327 - 325)) | (1 << (HyperTalkParser.T__328 - 325)) | (1 << (HyperTalkParser.T__329 - 325)) | (1 << (HyperTalkParser.T__330 - 325)) | (1 << (HyperTalkParser.T__331 - 325)) | (1 << (HyperTalkParser.ID - 325)) | (1 << (HyperTalkParser.LITERAL - 325)))) !== 0)) {
                            {
                                this.state = 334;
                                this.statementList();
                            }
                        }
                        this.state = 340;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case HyperTalkParser.T__8:
                                {
                                    this.state = 337;
                                    this.elseStatement();
                                }
                                break;
                            case HyperTalkParser.T__1:
                                {
                                    this.state = 338;
                                    this.match(HyperTalkParser.T__1);
                                    this.state = 339;
                                    this.match(HyperTalkParser.T__6);
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
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
    HyperTalkParser.prototype.elseStatement = function () {
        var _localctx = new ElseStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, HyperTalkParser.RULE_elseStatement);
        var _la;
        try {
            this.state = 366;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 344;
                        this.match(HyperTalkParser.T__8);
                        this.state = 345;
                        this.statement();
                        this.state = 353;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                            case 1:
                                {
                                    this.state = 347;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    do {
                                        {
                                            {
                                                this.state = 346;
                                                this.match(HyperTalkParser.NEWLINE);
                                            }
                                        }
                                        this.state = 349;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    } while (_la === HyperTalkParser.NEWLINE);
                                    this.state = 351;
                                    this.match(HyperTalkParser.T__1);
                                    this.state = 352;
                                    this.match(HyperTalkParser.T__6);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 355;
                        this.match(HyperTalkParser.T__8);
                        this.state = 357;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 356;
                                    this.match(HyperTalkParser.NEWLINE);
                                }
                            }
                            this.state = 359;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === HyperTalkParser.NEWLINE);
                        this.state = 362;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HyperTalkParser.T__4) | (1 << HyperTalkParser.T__5) | (1 << HyperTalkParser.T__6) | (1 << HyperTalkParser.T__9) | (1 << HyperTalkParser.T__10) | (1 << HyperTalkParser.T__12) | (1 << HyperTalkParser.T__15) | (1 << HyperTalkParser.T__17) | (1 << HyperTalkParser.T__18) | (1 << HyperTalkParser.T__19) | (1 << HyperTalkParser.T__20) | (1 << HyperTalkParser.T__22) | (1 << HyperTalkParser.T__23) | (1 << HyperTalkParser.T__25) | (1 << HyperTalkParser.T__26) | (1 << HyperTalkParser.T__27) | (1 << HyperTalkParser.T__28) | (1 << HyperTalkParser.T__29) | (1 << HyperTalkParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (HyperTalkParser.T__32 - 33)) | (1 << (HyperTalkParser.T__33 - 33)) | (1 << (HyperTalkParser.T__34 - 33)) | (1 << (HyperTalkParser.T__35 - 33)) | (1 << (HyperTalkParser.T__36 - 33)) | (1 << (HyperTalkParser.T__37 - 33)) | (1 << (HyperTalkParser.T__38 - 33)) | (1 << (HyperTalkParser.T__39 - 33)) | (1 << (HyperTalkParser.T__41 - 33)) | (1 << (HyperTalkParser.T__43 - 33)) | (1 << (HyperTalkParser.T__45 - 33)) | (1 << (HyperTalkParser.T__46 - 33)) | (1 << (HyperTalkParser.T__47 - 33)) | (1 << (HyperTalkParser.T__48 - 33)) | (1 << (HyperTalkParser.T__50 - 33)) | (1 << (HyperTalkParser.T__52 - 33)) | (1 << (HyperTalkParser.T__53 - 33)) | (1 << (HyperTalkParser.T__55 - 33)) | (1 << (HyperTalkParser.T__56 - 33)) | (1 << (HyperTalkParser.T__57 - 33)) | (1 << (HyperTalkParser.T__58 - 33)) | (1 << (HyperTalkParser.T__59 - 33)) | (1 << (HyperTalkParser.T__60 - 33)) | (1 << (HyperTalkParser.T__61 - 33)) | (1 << (HyperTalkParser.T__62 - 33)) | (1 << (HyperTalkParser.T__63 - 33)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (HyperTalkParser.T__66 - 67)) | (1 << (HyperTalkParser.T__68 - 67)) | (1 << (HyperTalkParser.T__69 - 67)) | (1 << (HyperTalkParser.T__73 - 67)) | (1 << (HyperTalkParser.T__74 - 67)) | (1 << (HyperTalkParser.T__75 - 67)) | (1 << (HyperTalkParser.T__76 - 67)) | (1 << (HyperTalkParser.T__77 - 67)) | (1 << (HyperTalkParser.T__78 - 67)) | (1 << (HyperTalkParser.T__79 - 67)) | (1 << (HyperTalkParser.T__85 - 67)) | (1 << (HyperTalkParser.T__86 - 67)) | (1 << (HyperTalkParser.T__87 - 67)) | (1 << (HyperTalkParser.T__88 - 67)) | (1 << (HyperTalkParser.T__89 - 67)) | (1 << (HyperTalkParser.T__90 - 67)) | (1 << (HyperTalkParser.T__92 - 67)) | (1 << (HyperTalkParser.T__96 - 67)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (HyperTalkParser.T__101 - 102)) | (1 << (HyperTalkParser.T__102 - 102)) | (1 << (HyperTalkParser.T__103 - 102)) | (1 << (HyperTalkParser.T__104 - 102)) | (1 << (HyperTalkParser.T__105 - 102)) | (1 << (HyperTalkParser.T__106 - 102)) | (1 << (HyperTalkParser.T__107 - 102)) | (1 << (HyperTalkParser.T__108 - 102)) | (1 << (HyperTalkParser.T__116 - 102)) | (1 << (HyperTalkParser.T__117 - 102)) | (1 << (HyperTalkParser.T__119 - 102)) | (1 << (HyperTalkParser.T__120 - 102)) | (1 << (HyperTalkParser.T__121 - 102)) | (1 << (HyperTalkParser.T__122 - 102)) | (1 << (HyperTalkParser.T__124 - 102)) | (1 << (HyperTalkParser.T__125 - 102)) | (1 << (HyperTalkParser.T__126 - 102)) | (1 << (HyperTalkParser.T__127 - 102)) | (1 << (HyperTalkParser.T__128 - 102)) | (1 << (HyperTalkParser.T__129 - 102)) | (1 << (HyperTalkParser.T__130 - 102)) | (1 << (HyperTalkParser.T__131 - 102)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (HyperTalkParser.T__159 - 160)) | (1 << (HyperTalkParser.T__161 - 160)) | (1 << (HyperTalkParser.T__162 - 160)) | (1 << (HyperTalkParser.T__164 - 160)) | (1 << (HyperTalkParser.T__165 - 160)) | (1 << (HyperTalkParser.T__166 - 160)) | (1 << (HyperTalkParser.T__172 - 160)) | (1 << (HyperTalkParser.T__173 - 160)) | (1 << (HyperTalkParser.T__176 - 160)) | (1 << (HyperTalkParser.T__180 - 160)) | (1 << (HyperTalkParser.T__181 - 160)) | (1 << (HyperTalkParser.T__184 - 160)) | (1 << (HyperTalkParser.T__189 - 160)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (HyperTalkParser.T__195 - 196)) | (1 << (HyperTalkParser.T__196 - 196)) | (1 << (HyperTalkParser.T__197 - 196)) | (1 << (HyperTalkParser.T__198 - 196)) | (1 << (HyperTalkParser.T__200 - 196)) | (1 << (HyperTalkParser.T__201 - 196)) | (1 << (HyperTalkParser.T__202 - 196)) | (1 << (HyperTalkParser.T__203 - 196)) | (1 << (HyperTalkParser.T__204 - 196)) | (1 << (HyperTalkParser.T__205 - 196)) | (1 << (HyperTalkParser.T__206 - 196)) | (1 << (HyperTalkParser.T__207 - 196)) | (1 << (HyperTalkParser.T__208 - 196)) | (1 << (HyperTalkParser.T__209 - 196)) | (1 << (HyperTalkParser.T__210 - 196)) | (1 << (HyperTalkParser.T__211 - 196)) | (1 << (HyperTalkParser.T__212 - 196)) | (1 << (HyperTalkParser.T__213 - 196)) | (1 << (HyperTalkParser.T__214 - 196)) | (1 << (HyperTalkParser.T__215 - 196)) | (1 << (HyperTalkParser.T__216 - 196)) | (1 << (HyperTalkParser.T__217 - 196)) | (1 << (HyperTalkParser.T__218 - 196)) | (1 << (HyperTalkParser.T__219 - 196)) | (1 << (HyperTalkParser.T__220 - 196)) | (1 << (HyperTalkParser.T__221 - 196)) | (1 << (HyperTalkParser.T__223 - 196)) | (1 << (HyperTalkParser.T__224 - 196)) | (1 << (HyperTalkParser.T__225 - 196)) | (1 << (HyperTalkParser.T__226 - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (HyperTalkParser.T__227 - 228)) | (1 << (HyperTalkParser.T__228 - 228)) | (1 << (HyperTalkParser.T__229 - 228)) | (1 << (HyperTalkParser.T__230 - 228)) | (1 << (HyperTalkParser.T__231 - 228)) | (1 << (HyperTalkParser.T__232 - 228)) | (1 << (HyperTalkParser.T__233 - 228)) | (1 << (HyperTalkParser.T__234 - 228)) | (1 << (HyperTalkParser.T__235 - 228)) | (1 << (HyperTalkParser.T__236 - 228)) | (1 << (HyperTalkParser.T__237 - 228)) | (1 << (HyperTalkParser.T__238 - 228)) | (1 << (HyperTalkParser.T__239 - 228)) | (1 << (HyperTalkParser.T__240 - 228)) | (1 << (HyperTalkParser.T__241 - 228)) | (1 << (HyperTalkParser.T__242 - 228)) | (1 << (HyperTalkParser.T__243 - 228)) | (1 << (HyperTalkParser.T__244 - 228)) | (1 << (HyperTalkParser.T__245 - 228)) | (1 << (HyperTalkParser.T__246 - 228)) | (1 << (HyperTalkParser.T__247 - 228)) | (1 << (HyperTalkParser.T__248 - 228)) | (1 << (HyperTalkParser.T__249 - 228)) | (1 << (HyperTalkParser.T__250 - 228)) | (1 << (HyperTalkParser.T__251 - 228)) | (1 << (HyperTalkParser.T__252 - 228)) | (1 << (HyperTalkParser.T__253 - 228)) | (1 << (HyperTalkParser.T__254 - 228)) | (1 << (HyperTalkParser.T__255 - 228)) | (1 << (HyperTalkParser.T__256 - 228)) | (1 << (HyperTalkParser.T__257 - 228)) | (1 << (HyperTalkParser.T__258 - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (HyperTalkParser.T__259 - 260)) | (1 << (HyperTalkParser.T__260 - 260)) | (1 << (HyperTalkParser.T__261 - 260)) | (1 << (HyperTalkParser.T__262 - 260)) | (1 << (HyperTalkParser.T__263 - 260)) | (1 << (HyperTalkParser.T__264 - 260)) | (1 << (HyperTalkParser.T__265 - 260)) | (1 << (HyperTalkParser.T__266 - 260)) | (1 << (HyperTalkParser.T__267 - 260)) | (1 << (HyperTalkParser.T__268 - 260)) | (1 << (HyperTalkParser.T__269 - 260)) | (1 << (HyperTalkParser.T__270 - 260)) | (1 << (HyperTalkParser.T__271 - 260)) | (1 << (HyperTalkParser.T__272 - 260)) | (1 << (HyperTalkParser.T__273 - 260)) | (1 << (HyperTalkParser.T__274 - 260)) | (1 << (HyperTalkParser.T__275 - 260)) | (1 << (HyperTalkParser.T__276 - 260)) | (1 << (HyperTalkParser.T__287 - 260)))) !== 0) || ((((_la - 293)) & ~0x1F) === 0 && ((1 << (_la - 293)) & ((1 << (HyperTalkParser.T__292 - 293)) | (1 << (HyperTalkParser.T__293 - 293)) | (1 << (HyperTalkParser.T__295 - 293)) | (1 << (HyperTalkParser.T__296 - 293)) | (1 << (HyperTalkParser.T__297 - 293)) | (1 << (HyperTalkParser.T__298 - 293)) | (1 << (HyperTalkParser.T__299 - 293)) | (1 << (HyperTalkParser.T__301 - 293)) | (1 << (HyperTalkParser.T__302 - 293)) | (1 << (HyperTalkParser.T__306 - 293)) | (1 << (HyperTalkParser.T__307 - 293)) | (1 << (HyperTalkParser.T__308 - 293)) | (1 << (HyperTalkParser.T__312 - 293)) | (1 << (HyperTalkParser.T__313 - 293)) | (1 << (HyperTalkParser.T__314 - 293)) | (1 << (HyperTalkParser.T__315 - 293)) | (1 << (HyperTalkParser.T__316 - 293)) | (1 << (HyperTalkParser.T__317 - 293)) | (1 << (HyperTalkParser.T__318 - 293)) | (1 << (HyperTalkParser.T__319 - 293)) | (1 << (HyperTalkParser.T__320 - 293)) | (1 << (HyperTalkParser.T__321 - 293)) | (1 << (HyperTalkParser.T__322 - 293)) | (1 << (HyperTalkParser.T__323 - 293)))) !== 0) || ((((_la - 325)) & ~0x1F) === 0 && ((1 << (_la - 325)) & ((1 << (HyperTalkParser.T__324 - 325)) | (1 << (HyperTalkParser.T__325 - 325)) | (1 << (HyperTalkParser.T__326 - 325)) | (1 << (HyperTalkParser.T__327 - 325)) | (1 << (HyperTalkParser.T__328 - 325)) | (1 << (HyperTalkParser.T__329 - 325)) | (1 << (HyperTalkParser.T__330 - 325)) | (1 << (HyperTalkParser.T__331 - 325)) | (1 << (HyperTalkParser.ID - 325)) | (1 << (HyperTalkParser.LITERAL - 325)))) !== 0)) {
                            {
                                this.state = 361;
                                this.statementList();
                            }
                        }
                        this.state = 364;
                        this.match(HyperTalkParser.T__1);
                        this.state = 365;
                        this.match(HyperTalkParser.T__6);
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
    HyperTalkParser.prototype.repeatStatement = function () {
        var _localctx = new RepeatStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, HyperTalkParser.RULE_repeatStatement);
        var _la;
        try {
            this.state = 389;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 368;
                        this.match(HyperTalkParser.T__9);
                        this.state = 369;
                        this.repeatRange();
                        this.state = 371;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 370;
                                    this.match(HyperTalkParser.NEWLINE);
                                }
                            }
                            this.state = 373;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === HyperTalkParser.NEWLINE);
                        this.state = 375;
                        this.statementList();
                        this.state = 376;
                        this.match(HyperTalkParser.T__1);
                        this.state = 377;
                        this.match(HyperTalkParser.T__9);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 379;
                        this.match(HyperTalkParser.T__9);
                        this.state = 380;
                        this.repeatRange();
                        this.state = 382;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 381;
                                    this.match(HyperTalkParser.NEWLINE);
                                }
                            }
                            this.state = 384;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === HyperTalkParser.NEWLINE);
                        this.state = 386;
                        this.match(HyperTalkParser.T__1);
                        this.state = 387;
                        this.match(HyperTalkParser.T__9);
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
    HyperTalkParser.prototype.messageStatement = function () {
        var _localctx = new MessageStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, HyperTalkParser.RULE_messageStatement);
        try {
            this.state = 394;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 391;
                        this.match(HyperTalkParser.ID);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 392;
                        this.match(HyperTalkParser.ID);
                        this.state = 393;
                        this.listExpression();
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
    HyperTalkParser.prototype.commandStmnt = function () {
        var _localctx = new CommandStmntContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, HyperTalkParser.RULE_commandStmnt);
        var _la;
        try {
            this.state = 917;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 396;
                        this.match(HyperTalkParser.T__10);
                        this.state = 397;
                        this.expression(0);
                        this.state = 398;
                        this.match(HyperTalkParser.T__11);
                        this.state = 399;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 401;
                        this.match(HyperTalkParser.T__12);
                        this.state = 402;
                        this.expression(0);
                        this.state = 403;
                        this.match(HyperTalkParser.T__13);
                        this.state = 404;
                        this.factor();
                        this.state = 405;
                        this.match(HyperTalkParser.T__14);
                        this.state = 406;
                        this.factor();
                        this.state = 407;
                        this.match(HyperTalkParser.T__14);
                        this.state = 408;
                        this.factor();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 410;
                        this.match(HyperTalkParser.T__12);
                        this.state = 411;
                        this.expression(0);
                        this.state = 412;
                        this.match(HyperTalkParser.T__13);
                        this.state = 413;
                        this.factor();
                        this.state = 414;
                        this.match(HyperTalkParser.T__14);
                        this.state = 415;
                        this.factor();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 417;
                        this.match(HyperTalkParser.T__12);
                        this.state = 418;
                        this.expression(0);
                        this.state = 419;
                        this.match(HyperTalkParser.T__13);
                        this.state = 420;
                        this.factor();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 422;
                        this.match(HyperTalkParser.T__12);
                        this.state = 423;
                        this.expression(0);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 424;
                        this.match(HyperTalkParser.T__15);
                        this.state = 425;
                        this.expression(0);
                        this.state = 426;
                        this.match(HyperTalkParser.T__13);
                        this.state = 427;
                        this.expression(0);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 429;
                        this.match(HyperTalkParser.T__15);
                        this.state = 430;
                        this.expression(0);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 431;
                        this.match(HyperTalkParser.T__15);
                        this.state = 432;
                        this.match(HyperTalkParser.T__16);
                        this.state = 433;
                        this.expression(0);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 434;
                        this.match(HyperTalkParser.T__15);
                        this.state = 435;
                        this.match(HyperTalkParser.T__16);
                        this.state = 436;
                        this.expression(0);
                        this.state = 437;
                        this.match(HyperTalkParser.T__13);
                        this.state = 438;
                        this.expression(0);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 440;
                        this.match(HyperTalkParser.T__17);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 441;
                        this.match(HyperTalkParser.T__17);
                        this.state = 442;
                        this.expression(0);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 443;
                        this.match(HyperTalkParser.T__18);
                        this.state = 444;
                        this.toolExpression();
                        this.state = 446;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__19) {
                            {
                                this.state = 445;
                                this.match(HyperTalkParser.T__19);
                            }
                        }
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 448;
                        this.match(HyperTalkParser.T__18);
                        this.state = 449;
                        this.match(HyperTalkParser.T__19);
                        this.state = 450;
                        this.toolExpression();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 451;
                        this.match(HyperTalkParser.T__20);
                        this.state = 452;
                        this.match(HyperTalkParser.T__21);
                        this.state = 453;
                        this.listExpression();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 454;
                        this.match(HyperTalkParser.T__20);
                        this.state = 455;
                        this.match(HyperTalkParser.T__21);
                        this.state = 456;
                        this.listExpression();
                        this.state = 457;
                        this.match(HyperTalkParser.T__13);
                        this.state = 458;
                        this.listExpression();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 460;
                        this.match(HyperTalkParser.T__22);
                        this.state = 461;
                        this.match(HyperTalkParser.T__16);
                        this.state = 462;
                        this.expression(0);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 463;
                        this.match(HyperTalkParser.T__23);
                        this.state = 464;
                        this.container();
                        this.state = 465;
                        this.match(HyperTalkParser.T__11);
                        this.state = 466;
                        this.convertible();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 468;
                        this.match(HyperTalkParser.T__23);
                        this.state = 469;
                        this.container();
                        this.state = 470;
                        this.match(HyperTalkParser.T__24);
                        this.state = 471;
                        this.convertible();
                        this.state = 472;
                        this.match(HyperTalkParser.T__11);
                        this.state = 473;
                        this.convertible();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 475;
                        this.match(HyperTalkParser.T__23);
                        this.state = 476;
                        this.expression(0);
                        this.state = 477;
                        this.match(HyperTalkParser.T__11);
                        this.state = 478;
                        this.convertible();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 480;
                        this.match(HyperTalkParser.T__23);
                        this.state = 481;
                        this.expression(0);
                        this.state = 482;
                        this.match(HyperTalkParser.T__24);
                        this.state = 483;
                        this.convertible();
                        this.state = 484;
                        this.match(HyperTalkParser.T__11);
                        this.state = 485;
                        this.convertible();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 487;
                        this.match(HyperTalkParser.T__25);
                        this.state = 488;
                        this.match(HyperTalkParser.T__26);
                        this.state = 489;
                        this.expression(0);
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 490;
                        this.match(HyperTalkParser.T__27);
                        this.state = 491;
                        this.expression(0);
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 492;
                        this.match(HyperTalkParser.T__28);
                        this.state = 493;
                        this.expression(0);
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 494;
                        this.match(HyperTalkParser.T__29);
                        this.state = 495;
                        this.expression(0);
                    }
                    break;
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 496;
                        this.match(HyperTalkParser.T__30);
                        this.state = 497;
                        this.expression(0);
                        this.state = 498;
                        this.match(HyperTalkParser.T__31);
                        this.state = 499;
                        this.expression(0);
                    }
                    break;
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 501;
                        this.match(HyperTalkParser.T__32);
                        this.state = 502;
                        this.expression(0);
                    }
                    break;
                case 27:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 503;
                        this.match(HyperTalkParser.T__33);
                        this.state = 504;
                        this.expression(0);
                    }
                    break;
                case 28:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 505;
                        this.match(HyperTalkParser.T__34);
                        this.state = 506;
                        this.match(HyperTalkParser.T__24);
                        this.state = 507;
                        this.listExpression();
                        this.state = 508;
                        this.match(HyperTalkParser.T__11);
                        this.state = 509;
                        this.listExpression();
                    }
                    break;
                case 29:
                    this.enterOuterAlt(_localctx, 29);
                    {
                        this.state = 511;
                        this.match(HyperTalkParser.T__34);
                        this.state = 512;
                        this.match(HyperTalkParser.T__24);
                        this.state = 513;
                        this.listExpression();
                        this.state = 514;
                        this.match(HyperTalkParser.T__11);
                        this.state = 515;
                        this.listExpression();
                        this.state = 516;
                        this.match(HyperTalkParser.T__13);
                        this.state = 517;
                        this.listExpression();
                    }
                    break;
                case 30:
                    this.enterOuterAlt(_localctx, 30);
                    {
                        this.state = 519;
                        this.match(HyperTalkParser.T__35);
                        this.state = 521;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 520;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 523;
                        this.match(HyperTalkParser.T__37);
                        this.state = 524;
                        this.of();
                        this.state = 525;
                        this.expression(0);
                    }
                    break;
                case 31:
                    this.enterOuterAlt(_localctx, 31);
                    {
                        this.state = 527;
                        this.match(HyperTalkParser.T__38);
                        this.state = 528;
                        this.expression(0);
                    }
                    break;
                case 32:
                    this.enterOuterAlt(_localctx, 32);
                    {
                        this.state = 529;
                        this.match(HyperTalkParser.T__39);
                        this.state = 530;
                        this.handlerName();
                    }
                    break;
                case 33:
                    this.enterOuterAlt(_localctx, 33);
                    {
                        this.state = 531;
                        this.match(HyperTalkParser.T__39);
                        this.state = 532;
                        this.match(HyperTalkParser.T__9);
                    }
                    break;
                case 34:
                    this.enterOuterAlt(_localctx, 34);
                    {
                        this.state = 533;
                        this.match(HyperTalkParser.T__39);
                        this.state = 534;
                        this.match(HyperTalkParser.T__11);
                        this.state = 535;
                        this.match(HyperTalkParser.T__40);
                    }
                    break;
                case 35:
                    this.enterOuterAlt(_localctx, 35);
                    {
                        this.state = 536;
                        this.match(HyperTalkParser.T__41);
                        this.state = 537;
                        this.match(HyperTalkParser.T__42);
                        this.state = 538;
                        this.match(HyperTalkParser.T__11);
                        this.state = 539;
                        this.match(HyperTalkParser.T__16);
                        this.state = 540;
                        this.expression(0);
                    }
                    break;
                case 36:
                    this.enterOuterAlt(_localctx, 36);
                    {
                        this.state = 541;
                        this.match(HyperTalkParser.T__43);
                        this.state = 543;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                            case 1:
                                {
                                    this.state = 542;
                                    this.expression(0);
                                }
                                break;
                        }
                        this.state = 546;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__44) {
                            {
                                this.state = 545;
                                this.match(HyperTalkParser.T__44);
                            }
                        }
                        this.state = 548;
                        this.expression(0);
                        this.state = 549;
                        this.of();
                        this.state = 550;
                        this.expression(0);
                        this.state = 551;
                        this.of();
                        this.state = 552;
                        this.match(HyperTalkParser.T__45);
                        this.state = 553;
                        this.cards();
                    }
                    break;
                case 37:
                    this.enterOuterAlt(_localctx, 37);
                    {
                        this.state = 555;
                        this.match(HyperTalkParser.T__43);
                        this.state = 557;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                            case 1:
                                {
                                    this.state = 556;
                                    this.expression(0);
                                }
                                break;
                        }
                        this.state = 560;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__44) {
                            {
                                this.state = 559;
                                this.match(HyperTalkParser.T__44);
                            }
                        }
                        this.state = 562;
                        this.expression(0);
                        this.state = 563;
                        this.of();
                        this.state = 564;
                        this.expression(0);
                    }
                    break;
                case 38:
                    this.enterOuterAlt(_localctx, 38);
                    {
                        this.state = 566;
                        this.match(HyperTalkParser.T__43);
                        this.state = 568;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
                            case 1:
                                {
                                    this.state = 567;
                                    this.expression(0);
                                }
                                break;
                        }
                        this.state = 571;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__44) {
                            {
                                this.state = 570;
                                this.match(HyperTalkParser.T__44);
                            }
                        }
                        this.state = 573;
                        this.expression(0);
                        this.state = 574;
                        this.of();
                        this.state = 575;
                        this.match(HyperTalkParser.T__45);
                        this.state = 576;
                        this.cards();
                    }
                    break;
                case 39:
                    this.enterOuterAlt(_localctx, 39);
                    {
                        this.state = 578;
                        this.match(HyperTalkParser.T__43);
                        this.state = 580;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
                            case 1:
                                {
                                    this.state = 579;
                                    this.expression(0);
                                }
                                break;
                        }
                        this.state = 583;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__44) {
                            {
                                this.state = 582;
                                this.match(HyperTalkParser.T__44);
                            }
                        }
                        this.state = 585;
                        this.expression(0);
                    }
                    break;
                case 40:
                    this.enterOuterAlt(_localctx, 40);
                    {
                        this.state = 586;
                        this.match(HyperTalkParser.T__46);
                        this.state = 587;
                        this.expression(0);
                    }
                    break;
                case 41:
                    this.enterOuterAlt(_localctx, 41);
                    {
                        this.state = 588;
                        this.match(HyperTalkParser.T__47);
                        this.state = 590;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__11) {
                            {
                                this.state = 589;
                                this.match(HyperTalkParser.T__11);
                            }
                        }
                        this.state = 592;
                        this.expression(0);
                        this.state = 593;
                        this.match(HyperTalkParser.T__13);
                        this.state = 594;
                        this.match(HyperTalkParser.T__48);
                        this.state = 595;
                        this.expression(0);
                    }
                    break;
                case 42:
                    this.enterOuterAlt(_localctx, 42);
                    {
                        this.state = 597;
                        this.match(HyperTalkParser.T__47);
                        this.state = 599;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__11) {
                            {
                                this.state = 598;
                                this.match(HyperTalkParser.T__11);
                            }
                        }
                        this.state = 601;
                        this.expression(0);
                        this.state = 602;
                        this.remoteNavOption();
                    }
                    break;
                case 43:
                    this.enterOuterAlt(_localctx, 43);
                    {
                        this.state = 604;
                        this.match(HyperTalkParser.T__47);
                        this.state = 605;
                        this.match(HyperTalkParser.T__49);
                    }
                    break;
                case 44:
                    this.enterOuterAlt(_localctx, 44);
                    {
                        this.state = 606;
                        this.match(HyperTalkParser.T__47);
                        this.state = 607;
                        this.match(HyperTalkParser.T__49);
                        this.state = 608;
                        this.match(HyperTalkParser.T__13);
                        this.state = 609;
                        this.match(HyperTalkParser.T__48);
                        this.state = 610;
                        this.expression(0);
                    }
                    break;
                case 45:
                    this.enterOuterAlt(_localctx, 45);
                    {
                        this.state = 611;
                        this.match(HyperTalkParser.T__50);
                        this.state = 612;
                        this.expression(0);
                    }
                    break;
                case 46:
                    this.enterOuterAlt(_localctx, 46);
                    {
                        this.state = 613;
                        this.match(HyperTalkParser.T__50);
                        this.state = 614;
                        this.card();
                        this.state = 615;
                        this.picture();
                    }
                    break;
                case 47:
                    this.enterOuterAlt(_localctx, 47);
                    {
                        this.state = 617;
                        this.match(HyperTalkParser.T__50);
                        this.state = 618;
                        this.background();
                        this.state = 619;
                        this.picture();
                    }
                    break;
                case 48:
                    this.enterOuterAlt(_localctx, 48);
                    {
                        this.state = 621;
                        this.match(HyperTalkParser.T__50);
                        this.state = 622;
                        this.picture();
                        this.state = 623;
                        this.of();
                        this.state = 624;
                        this.expression(0);
                    }
                    break;
                case 49:
                    this.enterOuterAlt(_localctx, 49);
                    {
                        this.state = 626;
                        this.match(HyperTalkParser.T__50);
                        this.state = 627;
                        this.match(HyperTalkParser.T__51);
                    }
                    break;
                case 50:
                    this.enterOuterAlt(_localctx, 50);
                    {
                        this.state = 628;
                        this.match(HyperTalkParser.T__52);
                        this.state = 629;
                        this.match(HyperTalkParser.T__42);
                        this.state = 630;
                        this.match(HyperTalkParser.T__24);
                        this.state = 631;
                        this.match(HyperTalkParser.T__16);
                        this.state = 632;
                        this.expression(0);
                    }
                    break;
                case 51:
                    this.enterOuterAlt(_localctx, 51);
                    {
                        this.state = 633;
                        this.match(HyperTalkParser.T__53);
                        this.state = 634;
                        this.match(HyperTalkParser.T__54);
                    }
                    break;
                case 52:
                    this.enterOuterAlt(_localctx, 52);
                    {
                        this.state = 635;
                        this.match(HyperTalkParser.T__55);
                        this.state = 636;
                        this.expression(0);
                        this.state = 637;
                        this.match(HyperTalkParser.T__31);
                        this.state = 638;
                        this.expression(0);
                    }
                    break;
                case 53:
                    this.enterOuterAlt(_localctx, 53);
                    {
                        this.state = 640;
                        this.match(HyperTalkParser.T__56);
                        this.state = 641;
                        this.match(HyperTalkParser.T__9);
                    }
                    break;
                case 54:
                    this.enterOuterAlt(_localctx, 54);
                    {
                        this.state = 642;
                        this.match(HyperTalkParser.T__57);
                        this.state = 643;
                        this.match(HyperTalkParser.T__16);
                        this.state = 644;
                        this.expression(0);
                    }
                    break;
                case 55:
                    this.enterOuterAlt(_localctx, 55);
                    {
                        this.state = 645;
                        this.match(HyperTalkParser.T__58);
                        this.state = 646;
                        this.handlerName();
                    }
                    break;
                case 56:
                    this.enterOuterAlt(_localctx, 56);
                    {
                        this.state = 647;
                        this.match(HyperTalkParser.T__59);
                        this.state = 648;
                        this.musicExpression();
                    }
                    break;
                case 57:
                    this.enterOuterAlt(_localctx, 57);
                    {
                        this.state = 649;
                        this.match(HyperTalkParser.T__60);
                        this.state = 650;
                        this.card();
                    }
                    break;
                case 58:
                    this.enterOuterAlt(_localctx, 58);
                    {
                        this.state = 651;
                        this.match(HyperTalkParser.T__61);
                        this.state = 652;
                        this.card();
                    }
                    break;
                case 59:
                    this.enterOuterAlt(_localctx, 59);
                    {
                        this.state = 653;
                        this.match(HyperTalkParser.T__61);
                        this.state = 654;
                        this.expression(0);
                    }
                    break;
                case 60:
                    this.enterOuterAlt(_localctx, 60);
                    {
                        this.state = 655;
                        this.match(HyperTalkParser.T__62);
                        this.state = 656;
                        this.listExpression();
                    }
                    break;
                case 61:
                    this.enterOuterAlt(_localctx, 61);
                    {
                        this.state = 657;
                        this.match(HyperTalkParser.T__62);
                        this.state = 658;
                        this.listExpression();
                        this.state = 659;
                        this.preposition();
                        this.state = 660;
                        this.expression(0);
                    }
                    break;
                case 62:
                    this.enterOuterAlt(_localctx, 62);
                    {
                        this.state = 662;
                        this.match(HyperTalkParser.T__63);
                        this.state = 663;
                        this.match(HyperTalkParser.T__24);
                        this.state = 664;
                        this.match(HyperTalkParser.T__16);
                        this.state = 665;
                        this.expression(0);
                    }
                    break;
                case 63:
                    this.enterOuterAlt(_localctx, 63);
                    {
                        this.state = 666;
                        this.match(HyperTalkParser.T__63);
                        this.state = 667;
                        this.match(HyperTalkParser.T__24);
                        this.state = 668;
                        this.match(HyperTalkParser.T__16);
                        this.state = 669;
                        this.expression(0);
                        this.state = 670;
                        this.match(HyperTalkParser.T__64);
                        this.state = 671;
                        this.expression(0);
                    }
                    break;
                case 64:
                    this.enterOuterAlt(_localctx, 64);
                    {
                        this.state = 673;
                        this.match(HyperTalkParser.T__63);
                        this.state = 674;
                        this.match(HyperTalkParser.T__24);
                        this.state = 675;
                        this.match(HyperTalkParser.T__16);
                        this.state = 676;
                        this.expression(0);
                        this.state = 677;
                        this.match(HyperTalkParser.T__21);
                        this.state = 678;
                        this.expression(0);
                        this.state = 679;
                        this.match(HyperTalkParser.T__64);
                        this.state = 680;
                        this.expression(0);
                    }
                    break;
                case 65:
                    this.enterOuterAlt(_localctx, 65);
                    {
                        this.state = 682;
                        this.match(HyperTalkParser.T__63);
                        this.state = 683;
                        this.match(HyperTalkParser.T__24);
                        this.state = 684;
                        this.match(HyperTalkParser.T__16);
                        this.state = 685;
                        this.expression(0);
                        this.state = 686;
                        this.match(HyperTalkParser.T__65);
                        this.state = 687;
                        this.expression(0);
                    }
                    break;
                case 66:
                    this.enterOuterAlt(_localctx, 66);
                    {
                        this.state = 689;
                        this.match(HyperTalkParser.T__66);
                        this.state = 691;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 690;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 693;
                        this.match(HyperTalkParser.T__67);
                    }
                    break;
                case 67:
                    this.enterOuterAlt(_localctx, 67);
                    {
                        this.state = 694;
                        this.match(HyperTalkParser.T__66);
                        this.state = 695;
                        this.match(HyperTalkParser.T__42);
                    }
                    break;
                case 68:
                    this.enterOuterAlt(_localctx, 68);
                    {
                        this.state = 696;
                        this.match(HyperTalkParser.T__68);
                        this.state = 697;
                        this.match(HyperTalkParser.T__69);
                    }
                    break;
                case 69:
                    this.enterOuterAlt(_localctx, 69);
                    {
                        this.state = 698;
                        this.match(HyperTalkParser.T__68);
                        this.state = 699;
                        this.match(HyperTalkParser.T__70);
                        this.state = 700;
                        this.of();
                        this.state = 701;
                        this.expression(0);
                    }
                    break;
                case 70:
                    this.enterOuterAlt(_localctx, 70);
                    {
                        this.state = 703;
                        this.match(HyperTalkParser.T__68);
                        this.state = 704;
                        this.match(HyperTalkParser.T__71);
                        this.state = 705;
                        this.match(HyperTalkParser.T__70);
                        this.state = 706;
                        this.of();
                        this.state = 707;
                        this.expression(0);
                    }
                    break;
                case 71:
                    this.enterOuterAlt(_localctx, 71);
                    {
                        this.state = 709;
                        this.match(HyperTalkParser.T__68);
                        this.state = 710;
                        this.match(HyperTalkParser.T__72);
                        this.state = 711;
                        this.match(HyperTalkParser.T__70);
                        this.state = 712;
                        this.of();
                        this.state = 713;
                        this.expression(0);
                    }
                    break;
                case 72:
                    this.enterOuterAlt(_localctx, 72);
                    {
                        this.state = 715;
                        this.match(HyperTalkParser.T__68);
                        this.state = 716;
                        this.expression(0);
                    }
                    break;
                case 73:
                    this.enterOuterAlt(_localctx, 73);
                    {
                        this.state = 717;
                        this.match(HyperTalkParser.T__68);
                        this.state = 718;
                        this.match(HyperTalkParser.T__71);
                        this.state = 719;
                        this.expression(0);
                    }
                    break;
                case 74:
                    this.enterOuterAlt(_localctx, 74);
                    {
                        this.state = 720;
                        this.match(HyperTalkParser.T__68);
                        this.state = 721;
                        this.match(HyperTalkParser.T__72);
                        this.state = 722;
                        this.expression(0);
                    }
                    break;
                case 75:
                    this.enterOuterAlt(_localctx, 75);
                    {
                        this.state = 723;
                        this.match(HyperTalkParser.T__73);
                        this.state = 724;
                        this.property();
                        this.state = 725;
                        this.match(HyperTalkParser.T__11);
                        this.state = 726;
                        this.propertyValue();
                    }
                    break;
                case 76:
                    this.enterOuterAlt(_localctx, 76);
                    {
                        this.state = 728;
                        this.match(HyperTalkParser.T__74);
                        this.state = 729;
                        this.listExpression();
                        this.state = 730;
                        this.match(HyperTalkParser.T__11);
                        this.state = 731;
                        this.expression(0);
                    }
                    break;
                case 77:
                    this.enterOuterAlt(_localctx, 77);
                    {
                        this.state = 733;
                        this.match(HyperTalkParser.T__75);
                        this.state = 734;
                        this.expression(0);
                    }
                    break;
                case 78:
                    this.enterOuterAlt(_localctx, 78);
                    {
                        this.state = 735;
                        this.match(HyperTalkParser.T__75);
                        this.state = 736;
                        this.card();
                        this.state = 737;
                        this.picture();
                    }
                    break;
                case 79:
                    this.enterOuterAlt(_localctx, 79);
                    {
                        this.state = 739;
                        this.match(HyperTalkParser.T__75);
                        this.state = 740;
                        this.background();
                        this.state = 741;
                        this.picture();
                    }
                    break;
                case 80:
                    this.enterOuterAlt(_localctx, 80);
                    {
                        this.state = 743;
                        this.match(HyperTalkParser.T__75);
                        this.state = 744;
                        this.picture();
                        this.state = 745;
                        this.of();
                        this.state = 746;
                        this.expression(0);
                    }
                    break;
                case 81:
                    this.enterOuterAlt(_localctx, 81);
                    {
                        this.state = 748;
                        this.match(HyperTalkParser.T__75);
                        this.state = 749;
                        this.match(HyperTalkParser.T__51);
                    }
                    break;
                case 82:
                    this.enterOuterAlt(_localctx, 82);
                    {
                        this.state = 750;
                        this.match(HyperTalkParser.T__76);
                        this.state = 751;
                        this.sortChunkType();
                        this.state = 752;
                        this.expression(0);
                        this.state = 753;
                        this.sortDirection();
                        this.state = 754;
                        this.sortStyle();
                    }
                    break;
                case 83:
                    this.enterOuterAlt(_localctx, 83);
                    {
                        this.state = 756;
                        this.match(HyperTalkParser.T__76);
                        this.state = 757;
                        this.sortChunkType();
                        this.state = 758;
                        this.expression(0);
                        this.state = 759;
                        this.sortDirection();
                        this.state = 760;
                        this.sortStyle();
                        this.state = 761;
                        this.match(HyperTalkParser.T__31);
                        this.state = 762;
                        this.expression(0);
                    }
                    break;
                case 84:
                    this.enterOuterAlt(_localctx, 84);
                    {
                        this.state = 764;
                        this.match(HyperTalkParser.T__76);
                        this.state = 765;
                        this.sortDirection();
                        this.state = 766;
                        this.sortStyle();
                        this.state = 767;
                        this.match(HyperTalkParser.T__31);
                        this.state = 768;
                        this.expression(0);
                    }
                    break;
                case 85:
                    this.enterOuterAlt(_localctx, 85);
                    {
                        this.state = 770;
                        this.match(HyperTalkParser.T__76);
                        this.state = 772;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__77) {
                            {
                                this.state = 771;
                                this.match(HyperTalkParser.T__77);
                            }
                        }
                        this.state = 774;
                        this.match(HyperTalkParser.T__78);
                        this.state = 775;
                        this.sortDirection();
                        this.state = 776;
                        this.sortStyle();
                        this.state = 777;
                        this.match(HyperTalkParser.T__31);
                        this.state = 778;
                        this.expression(0);
                    }
                    break;
                case 86:
                    this.enterOuterAlt(_localctx, 86);
                    {
                        this.state = 780;
                        this.match(HyperTalkParser.T__76);
                        this.state = 782;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 781;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 784;
                        this.cards();
                        this.state = 789;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__24 || _la === HyperTalkParser.T__185 || _la === HyperTalkParser.T__303) {
                            {
                                this.state = 785;
                                this.of();
                                this.state = 786;
                                this.match(HyperTalkParser.T__77);
                                this.state = 787;
                                this.match(HyperTalkParser.T__78);
                            }
                        }
                        this.state = 791;
                        this.sortDirection();
                        this.state = 792;
                        this.sortStyle();
                        this.state = 793;
                        this.match(HyperTalkParser.T__31);
                        this.state = 794;
                        this.expression(0);
                    }
                    break;
                case 87:
                    this.enterOuterAlt(_localctx, 87);
                    {
                        this.state = 796;
                        this.match(HyperTalkParser.T__76);
                        this.state = 798;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 797;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 800;
                        this.match(HyperTalkParser.T__45);
                        this.state = 801;
                        this.cards();
                        this.state = 806;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__24 || _la === HyperTalkParser.T__185 || _la === HyperTalkParser.T__303) {
                            {
                                this.state = 802;
                                this.of();
                                this.state = 803;
                                this.match(HyperTalkParser.T__77);
                                this.state = 804;
                                this.match(HyperTalkParser.T__78);
                            }
                        }
                        this.state = 808;
                        this.sortDirection();
                        this.state = 809;
                        this.sortStyle();
                        this.state = 810;
                        this.match(HyperTalkParser.T__31);
                        this.state = 811;
                        this.expression(0);
                    }
                    break;
                case 88:
                    this.enterOuterAlt(_localctx, 88);
                    {
                        this.state = 813;
                        this.match(HyperTalkParser.T__76);
                        this.state = 814;
                        this.expression(0);
                        this.state = 815;
                        this.sortDirection();
                        this.state = 816;
                        this.sortStyle();
                        this.state = 817;
                        this.match(HyperTalkParser.T__31);
                        this.state = 818;
                        this.expression(0);
                    }
                    break;
                case 89:
                    this.enterOuterAlt(_localctx, 89);
                    {
                        this.state = 820;
                        this.match(HyperTalkParser.T__76);
                        this.state = 822;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 821;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 824;
                        this.cards();
                        this.state = 825;
                        this.of();
                        this.state = 826;
                        this.expression(0);
                        this.state = 827;
                        this.sortDirection();
                        this.state = 828;
                        this.sortStyle();
                        this.state = 829;
                        this.match(HyperTalkParser.T__31);
                        this.state = 830;
                        this.expression(0);
                    }
                    break;
                case 90:
                    this.enterOuterAlt(_localctx, 90);
                    {
                        this.state = 832;
                        this.match(HyperTalkParser.T__76);
                        this.state = 834;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 833;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 836;
                        this.match(HyperTalkParser.T__45);
                        this.state = 837;
                        this.cards();
                        this.state = 838;
                        this.of();
                        this.state = 839;
                        this.expression(0);
                        this.state = 840;
                        this.sortDirection();
                        this.state = 841;
                        this.sortStyle();
                        this.state = 842;
                        this.match(HyperTalkParser.T__31);
                        this.state = 843;
                        this.expression(0);
                    }
                    break;
                case 91:
                    this.enterOuterAlt(_localctx, 91);
                    {
                        this.state = 845;
                        this.match(HyperTalkParser.T__79);
                        this.state = 846;
                        this.expression(0);
                    }
                    break;
                case 92:
                    this.enterOuterAlt(_localctx, 92);
                    {
                        this.state = 847;
                        this.match(HyperTalkParser.T__79);
                        this.state = 848;
                        this.expression(0);
                        this.state = 849;
                        this.match(HyperTalkParser.T__13);
                        this.state = 850;
                        _localctx._gender = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (HyperTalkParser.T__80 - 81)) | (1 << (HyperTalkParser.T__81 - 81)) | (1 << (HyperTalkParser.T__82 - 81)) | (1 << (HyperTalkParser.T__83 - 81)))) !== 0))) {
                            _localctx._gender = this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 851;
                        this.match(HyperTalkParser.T__84);
                    }
                    break;
                case 93:
                    this.enterOuterAlt(_localctx, 93);
                    {
                        this.state = 853;
                        this.match(HyperTalkParser.T__79);
                        this.state = 854;
                        this.expression(0);
                        this.state = 855;
                        this.match(HyperTalkParser.T__13);
                        this.state = 856;
                        this.match(HyperTalkParser.T__84);
                        this.state = 857;
                        this.expression(0);
                    }
                    break;
                case 94:
                    this.enterOuterAlt(_localctx, 94);
                    {
                        this.state = 859;
                        this.match(HyperTalkParser.T__85);
                        this.state = 860;
                        this.expression(0);
                        this.state = 861;
                        this.match(HyperTalkParser.T__24);
                        this.state = 862;
                        this.expression(0);
                    }
                    break;
                case 95:
                    this.enterOuterAlt(_localctx, 95);
                    {
                        this.state = 864;
                        this.match(HyperTalkParser.T__86);
                        this.state = 865;
                        this.expression(0);
                    }
                    break;
                case 96:
                    this.enterOuterAlt(_localctx, 96);
                    {
                        this.state = 866;
                        this.match(HyperTalkParser.T__86);
                        this.state = 867;
                        this.expression(0);
                        this.state = 868;
                        this.match(HyperTalkParser.T__13);
                        this.state = 869;
                        _la = this._input.LA(1);
                        if (!(_la === HyperTalkParser.T__87 || _la === HyperTalkParser.T__88)) {
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
                case 97:
                    this.enterOuterAlt(_localctx, 97);
                    {
                        this.state = 871;
                        this.match(HyperTalkParser.T__89);
                        this.state = 872;
                        this.match(HyperTalkParser.T__54);
                    }
                    break;
                case 98:
                    this.enterOuterAlt(_localctx, 98);
                    {
                        this.state = 873;
                        this.match(HyperTalkParser.T__89);
                        this.state = 874;
                        this.match(HyperTalkParser.T__54);
                        this.state = 875;
                        this.match(HyperTalkParser.T__13);
                        this.state = 876;
                        this.match(HyperTalkParser.T__48);
                        this.state = 877;
                        this.expression(0);
                    }
                    break;
                case 99:
                    this.enterOuterAlt(_localctx, 99);
                    {
                        this.state = 878;
                        this.match(HyperTalkParser.T__48);
                        this.state = 879;
                        this.expression(0);
                    }
                    break;
                case 100:
                    this.enterOuterAlt(_localctx, 100);
                    {
                        this.state = 880;
                        this.match(HyperTalkParser.T__90);
                        this.state = 881;
                        this.expression(0);
                        this.state = 882;
                        this.timeUnit();
                    }
                    break;
                case 101:
                    this.enterOuterAlt(_localctx, 101);
                    {
                        this.state = 884;
                        this.match(HyperTalkParser.T__90);
                        this.state = 885;
                        this.match(HyperTalkParser.T__64);
                        this.state = 886;
                        this.expression(0);
                        this.state = 887;
                        this.timeUnit();
                    }
                    break;
                case 102:
                    this.enterOuterAlt(_localctx, 102);
                    {
                        this.state = 889;
                        this.match(HyperTalkParser.T__90);
                        this.state = 890;
                        this.match(HyperTalkParser.T__65);
                        this.state = 891;
                        this.expression(0);
                    }
                    break;
                case 103:
                    this.enterOuterAlt(_localctx, 103);
                    {
                        this.state = 892;
                        this.match(HyperTalkParser.T__90);
                        this.state = 893;
                        this.match(HyperTalkParser.T__91);
                        this.state = 894;
                        this.expression(0);
                    }
                    break;
                case 104:
                    this.enterOuterAlt(_localctx, 104);
                    {
                        this.state = 895;
                        this.match(HyperTalkParser.T__92);
                        this.state = 896;
                        this.expression(0);
                        this.state = 897;
                        this.match(HyperTalkParser.T__11);
                        this.state = 898;
                        this.match(HyperTalkParser.T__16);
                        this.state = 899;
                        this.expression(0);
                    }
                    break;
                case 105:
                    this.enterOuterAlt(_localctx, 105);
                    {
                        this.state = 901;
                        this.match(HyperTalkParser.T__92);
                        this.state = 902;
                        this.expression(0);
                        this.state = 903;
                        this.match(HyperTalkParser.T__11);
                        this.state = 904;
                        this.match(HyperTalkParser.T__16);
                        this.state = 905;
                        this.expression(0);
                        this.state = 906;
                        this.match(HyperTalkParser.T__21);
                        this.state = 907;
                        _la = this._input.LA(1);
                        if (!(_la === HyperTalkParser.T__1 || _la === HyperTalkParser.T__93)) {
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
                case 106:
                    this.enterOuterAlt(_localctx, 106);
                    {
                        this.state = 909;
                        this.match(HyperTalkParser.T__92);
                        this.state = 910;
                        this.expression(0);
                        this.state = 911;
                        this.match(HyperTalkParser.T__11);
                        this.state = 912;
                        this.match(HyperTalkParser.T__16);
                        this.state = 913;
                        this.expression(0);
                        this.state = 914;
                        this.match(HyperTalkParser.T__21);
                        this.state = 915;
                        this.expression(0);
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
    HyperTalkParser.prototype.remoteNavOption = function () {
        var _localctx = new RemoteNavOptionContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, HyperTalkParser.RULE_remoteNavOption);
        try {
            this.state = 930;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 919;
                        this.match(HyperTalkParser.T__94);
                        this.state = 920;
                        this.match(HyperTalkParser.T__95);
                        this.state = 921;
                        this.match(HyperTalkParser.T__96);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 922;
                        this.match(HyperTalkParser.T__94);
                        this.state = 923;
                        this.match(HyperTalkParser.T__95);
                        this.state = 924;
                        this.match(HyperTalkParser.T__96);
                        this.state = 925;
                        this.match(HyperTalkParser.T__97);
                        this.state = 926;
                        this.match(HyperTalkParser.T__98);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 927;
                        this.match(HyperTalkParser.T__97);
                        this.state = 928;
                        this.match(HyperTalkParser.T__98);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    // tslint:disable-next-line:no-empty
                    {
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
    HyperTalkParser.prototype.convertible = function () {
        var _localctx = new ConvertibleContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, HyperTalkParser.RULE_convertible);
        try {
            this.state = 937;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 932;
                        this.conversionFormat();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 933;
                        this.conversionFormat();
                        this.state = 934;
                        this.match(HyperTalkParser.T__99);
                        this.state = 935;
                        this.conversionFormat();
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
    HyperTalkParser.prototype.conversionFormat = function () {
        var _localctx = new ConversionFormatContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, HyperTalkParser.RULE_conversionFormat);
        try {
            this.state = 947;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 939;
                        this.seconds();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 940;
                        this.match(HyperTalkParser.T__100);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 941;
                        this.length();
                        this.state = 942;
                        this.match(HyperTalkParser.T__101);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 944;
                        this.length();
                        this.state = 945;
                        this.match(HyperTalkParser.T__102);
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
    HyperTalkParser.prototype.length = function () {
        var _localctx = new LengthContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, HyperTalkParser.RULE_length);
        var _la;
        try {
            this.state = 953;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case HyperTalkParser.T__103:
                case HyperTalkParser.T__104:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 949;
                        _la = this._input.LA(1);
                        if (!(_la === HyperTalkParser.T__103 || _la === HyperTalkParser.T__104)) {
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
                case HyperTalkParser.T__105:
                case HyperTalkParser.T__106:
                case HyperTalkParser.T__107:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 950;
                        _la = this._input.LA(1);
                        if (!(((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (HyperTalkParser.T__105 - 106)) | (1 << (HyperTalkParser.T__106 - 106)) | (1 << (HyperTalkParser.T__107 - 106)))) !== 0))) {
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
                case HyperTalkParser.T__108:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 951;
                        this.match(HyperTalkParser.T__108);
                    }
                    break;
                case HyperTalkParser.T__37:
                case HyperTalkParser.T__45:
                case HyperTalkParser.T__101:
                case HyperTalkParser.T__102:
                case HyperTalkParser.T__120:
                case HyperTalkParser.T__121:
                case HyperTalkParser.T__172:
                case HyperTalkParser.T__173:
                case HyperTalkParser.T__184:
                case HyperTalkParser.T__266:
                case HyperTalkParser.T__267:
                case HyperTalkParser.T__268:
                case HyperTalkParser.T__269:
                case HyperTalkParser.T__270:
                case HyperTalkParser.T__271:
                case HyperTalkParser.T__272:
                case HyperTalkParser.T__273:
                case HyperTalkParser.T__274:
                case HyperTalkParser.T__275:
                case HyperTalkParser.ID:
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
    HyperTalkParser.prototype.sortDirection = function () {
        var _localctx = new SortDirectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, HyperTalkParser.RULE_sortDirection);
        try {
            this.state = 958;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case HyperTalkParser.T__109:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 955;
                        this.match(HyperTalkParser.T__109);
                    }
                    break;
                case HyperTalkParser.T__110:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 956;
                        this.match(HyperTalkParser.T__110);
                    }
                    break;
                case HyperTalkParser.EOF:
                case HyperTalkParser.T__8:
                case HyperTalkParser.T__31:
                case HyperTalkParser.T__44:
                case HyperTalkParser.T__70:
                case HyperTalkParser.T__111:
                case HyperTalkParser.T__112:
                case HyperTalkParser.NEWLINE:
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
    HyperTalkParser.prototype.sortChunkType = function () {
        var _localctx = new SortChunkTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, HyperTalkParser.RULE_sortChunkType);
        var _la;
        try {
            this.state = 985;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 961;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 960;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 963;
                        this.line();
                        this.state = 964;
                        this.of();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 967;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 966;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 969;
                        this.item();
                        this.state = 970;
                        this.of();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 973;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 972;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 975;
                        this.word();
                        this.state = 976;
                        this.of();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 979;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 978;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 981;
                        this.character();
                        this.state = 982;
                        this.of();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    // tslint:disable-next-line:no-empty
                    {
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
    HyperTalkParser.prototype.sortStyle = function () {
        var _localctx = new SortStyleContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, HyperTalkParser.RULE_sortStyle);
        try {
            this.state = 992;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case HyperTalkParser.T__70:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 987;
                        this.match(HyperTalkParser.T__70);
                    }
                    break;
                case HyperTalkParser.T__111:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 988;
                        this.match(HyperTalkParser.T__111);
                    }
                    break;
                case HyperTalkParser.T__44:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 989;
                        this.match(HyperTalkParser.T__44);
                    }
                    break;
                case HyperTalkParser.T__112:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 990;
                        this.match(HyperTalkParser.T__112);
                    }
                    break;
                case HyperTalkParser.EOF:
                case HyperTalkParser.T__8:
                case HyperTalkParser.T__31:
                case HyperTalkParser.NEWLINE:
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
    HyperTalkParser.prototype.repeatRange = function () {
        var _localctx = new RepeatRangeContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, HyperTalkParser.RULE_repeatRange);
        try {
            this.state = 1002;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case HyperTalkParser.T__65:
                case HyperTalkParser.T__91:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 994;
                        this.duration();
                    }
                    break;
                case HyperTalkParser.T__5:
                case HyperTalkParser.T__19:
                case HyperTalkParser.T__26:
                case HyperTalkParser.T__36:
                case HyperTalkParser.T__37:
                case HyperTalkParser.T__45:
                case HyperTalkParser.T__56:
                case HyperTalkParser.T__61:
                case HyperTalkParser.T__64:
                case HyperTalkParser.T__69:
                case HyperTalkParser.T__77:
                case HyperTalkParser.T__78:
                case HyperTalkParser.T__87:
                case HyperTalkParser.T__88:
                case HyperTalkParser.T__96:
                case HyperTalkParser.T__101:
                case HyperTalkParser.T__102:
                case HyperTalkParser.T__103:
                case HyperTalkParser.T__104:
                case HyperTalkParser.T__105:
                case HyperTalkParser.T__106:
                case HyperTalkParser.T__107:
                case HyperTalkParser.T__108:
                case HyperTalkParser.T__116:
                case HyperTalkParser.T__117:
                case HyperTalkParser.T__119:
                case HyperTalkParser.T__120:
                case HyperTalkParser.T__121:
                case HyperTalkParser.T__122:
                case HyperTalkParser.T__124:
                case HyperTalkParser.T__125:
                case HyperTalkParser.T__126:
                case HyperTalkParser.T__127:
                case HyperTalkParser.T__128:
                case HyperTalkParser.T__129:
                case HyperTalkParser.T__130:
                case HyperTalkParser.T__131:
                case HyperTalkParser.T__159:
                case HyperTalkParser.T__161:
                case HyperTalkParser.T__162:
                case HyperTalkParser.T__164:
                case HyperTalkParser.T__165:
                case HyperTalkParser.T__166:
                case HyperTalkParser.T__172:
                case HyperTalkParser.T__173:
                case HyperTalkParser.T__176:
                case HyperTalkParser.T__180:
                case HyperTalkParser.T__181:
                case HyperTalkParser.T__184:
                case HyperTalkParser.T__189:
                case HyperTalkParser.T__195:
                case HyperTalkParser.T__196:
                case HyperTalkParser.T__197:
                case HyperTalkParser.T__198:
                case HyperTalkParser.T__200:
                case HyperTalkParser.T__201:
                case HyperTalkParser.T__202:
                case HyperTalkParser.T__203:
                case HyperTalkParser.T__204:
                case HyperTalkParser.T__205:
                case HyperTalkParser.T__206:
                case HyperTalkParser.T__207:
                case HyperTalkParser.T__208:
                case HyperTalkParser.T__209:
                case HyperTalkParser.T__210:
                case HyperTalkParser.T__211:
                case HyperTalkParser.T__212:
                case HyperTalkParser.T__213:
                case HyperTalkParser.T__214:
                case HyperTalkParser.T__215:
                case HyperTalkParser.T__216:
                case HyperTalkParser.T__217:
                case HyperTalkParser.T__218:
                case HyperTalkParser.T__219:
                case HyperTalkParser.T__220:
                case HyperTalkParser.T__221:
                case HyperTalkParser.T__223:
                case HyperTalkParser.T__224:
                case HyperTalkParser.T__225:
                case HyperTalkParser.T__226:
                case HyperTalkParser.T__227:
                case HyperTalkParser.T__228:
                case HyperTalkParser.T__229:
                case HyperTalkParser.T__230:
                case HyperTalkParser.T__231:
                case HyperTalkParser.T__232:
                case HyperTalkParser.T__233:
                case HyperTalkParser.T__234:
                case HyperTalkParser.T__235:
                case HyperTalkParser.T__236:
                case HyperTalkParser.T__237:
                case HyperTalkParser.T__238:
                case HyperTalkParser.T__239:
                case HyperTalkParser.T__240:
                case HyperTalkParser.T__241:
                case HyperTalkParser.T__242:
                case HyperTalkParser.T__243:
                case HyperTalkParser.T__244:
                case HyperTalkParser.T__245:
                case HyperTalkParser.T__246:
                case HyperTalkParser.T__247:
                case HyperTalkParser.T__248:
                case HyperTalkParser.T__249:
                case HyperTalkParser.T__250:
                case HyperTalkParser.T__251:
                case HyperTalkParser.T__252:
                case HyperTalkParser.T__253:
                case HyperTalkParser.T__254:
                case HyperTalkParser.T__255:
                case HyperTalkParser.T__256:
                case HyperTalkParser.T__257:
                case HyperTalkParser.T__258:
                case HyperTalkParser.T__259:
                case HyperTalkParser.T__260:
                case HyperTalkParser.T__261:
                case HyperTalkParser.T__262:
                case HyperTalkParser.T__263:
                case HyperTalkParser.T__264:
                case HyperTalkParser.T__265:
                case HyperTalkParser.T__266:
                case HyperTalkParser.T__267:
                case HyperTalkParser.T__268:
                case HyperTalkParser.T__269:
                case HyperTalkParser.T__270:
                case HyperTalkParser.T__271:
                case HyperTalkParser.T__272:
                case HyperTalkParser.T__273:
                case HyperTalkParser.T__274:
                case HyperTalkParser.T__275:
                case HyperTalkParser.T__276:
                case HyperTalkParser.T__287:
                case HyperTalkParser.T__292:
                case HyperTalkParser.T__293:
                case HyperTalkParser.T__295:
                case HyperTalkParser.T__296:
                case HyperTalkParser.T__297:
                case HyperTalkParser.T__298:
                case HyperTalkParser.T__299:
                case HyperTalkParser.T__301:
                case HyperTalkParser.T__302:
                case HyperTalkParser.T__306:
                case HyperTalkParser.T__307:
                case HyperTalkParser.T__308:
                case HyperTalkParser.T__312:
                case HyperTalkParser.T__313:
                case HyperTalkParser.T__314:
                case HyperTalkParser.T__315:
                case HyperTalkParser.T__316:
                case HyperTalkParser.T__317:
                case HyperTalkParser.T__318:
                case HyperTalkParser.T__319:
                case HyperTalkParser.T__320:
                case HyperTalkParser.T__321:
                case HyperTalkParser.T__322:
                case HyperTalkParser.T__323:
                case HyperTalkParser.T__324:
                case HyperTalkParser.T__325:
                case HyperTalkParser.T__326:
                case HyperTalkParser.T__327:
                case HyperTalkParser.T__328:
                case HyperTalkParser.T__329:
                case HyperTalkParser.T__330:
                case HyperTalkParser.T__331:
                case HyperTalkParser.ID:
                case HyperTalkParser.LITERAL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 995;
                        this.count();
                    }
                    break;
                case HyperTalkParser.T__13:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 996;
                        this.match(HyperTalkParser.T__13);
                        this.state = 997;
                        this.match(HyperTalkParser.ID);
                        this.state = 998;
                        this.match(HyperTalkParser.T__113);
                        this.state = 999;
                        this.range();
                    }
                    break;
                case HyperTalkParser.T__114:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1000;
                        this.match(HyperTalkParser.T__114);
                    }
                    break;
                case HyperTalkParser.NEWLINE:
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
    HyperTalkParser.prototype.duration = function () {
        var _localctx = new DurationContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, HyperTalkParser.RULE_duration);
        try {
            this.state = 1008;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case HyperTalkParser.T__65:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1004;
                        this.match(HyperTalkParser.T__65);
                        this.state = 1005;
                        this.expression(0);
                    }
                    break;
                case HyperTalkParser.T__91:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1006;
                        this.match(HyperTalkParser.T__91);
                        this.state = 1007;
                        this.expression(0);
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
    HyperTalkParser.prototype.count = function () {
        var _localctx = new CountContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, HyperTalkParser.RULE_count);
        try {
            this.state = 1020;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1010;
                        this.match(HyperTalkParser.T__64);
                        this.state = 1011;
                        this.expression(0);
                        this.state = 1012;
                        this.match(HyperTalkParser.T__115);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1014;
                        this.match(HyperTalkParser.T__64);
                        this.state = 1015;
                        this.expression(0);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1016;
                        this.expression(0);
                        this.state = 1017;
                        this.match(HyperTalkParser.T__115);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1019;
                        this.expression(0);
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
    HyperTalkParser.prototype.range = function () {
        var _localctx = new RangeContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, HyperTalkParser.RULE_range);
        try {
            this.state = 1031;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1022;
                        this.expression(0);
                        this.state = 1023;
                        this.match(HyperTalkParser.T__116);
                        this.state = 1024;
                        this.match(HyperTalkParser.T__11);
                        this.state = 1025;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1027;
                        this.expression(0);
                        this.state = 1028;
                        this.match(HyperTalkParser.T__11);
                        this.state = 1029;
                        this.expression(0);
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
    HyperTalkParser.prototype.chunk = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ChunkContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 56;
        this.enterRecursionRule(_localctx, 56, HyperTalkParser.RULE_chunk, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1090;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
                    case 1:
                        {
                            this.state = 1034;
                            this.ordinal();
                            this.state = 1035;
                            this.character();
                            this.state = 1036;
                            this.of();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1038;
                            this.character();
                            this.state = 1039;
                            this.expression(0);
                            this.state = 1040;
                            this.match(HyperTalkParser.T__11);
                            this.state = 1041;
                            this.expression(0);
                            this.state = 1042;
                            this.of();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1044;
                            this.character();
                            this.state = 1045;
                            this.expression(0);
                            this.state = 1046;
                            this.of();
                        }
                        break;
                    case 4:
                        {
                            this.state = 1048;
                            this.ordinal();
                            this.state = 1049;
                            this.word();
                            this.state = 1050;
                            this.of();
                        }
                        break;
                    case 5:
                        {
                            this.state = 1052;
                            this.word();
                            this.state = 1053;
                            this.expression(0);
                            this.state = 1054;
                            this.match(HyperTalkParser.T__11);
                            this.state = 1055;
                            this.expression(0);
                            this.state = 1056;
                            this.of();
                        }
                        break;
                    case 6:
                        {
                            this.state = 1058;
                            this.word();
                            this.state = 1059;
                            this.expression(0);
                            this.state = 1060;
                            this.of();
                        }
                        break;
                    case 7:
                        {
                            this.state = 1062;
                            this.ordinal();
                            this.state = 1063;
                            this.item();
                            this.state = 1064;
                            this.of();
                        }
                        break;
                    case 8:
                        {
                            this.state = 1066;
                            this.item();
                            this.state = 1067;
                            this.expression(0);
                            this.state = 1068;
                            this.match(HyperTalkParser.T__11);
                            this.state = 1069;
                            this.expression(0);
                            this.state = 1070;
                            this.of();
                        }
                        break;
                    case 9:
                        {
                            this.state = 1072;
                            this.item();
                            this.state = 1073;
                            this.expression(0);
                            this.state = 1074;
                            this.of();
                        }
                        break;
                    case 10:
                        {
                            this.state = 1076;
                            this.ordinal();
                            this.state = 1077;
                            this.line();
                            this.state = 1078;
                            this.of();
                        }
                        break;
                    case 11:
                        {
                            this.state = 1080;
                            this.line();
                            this.state = 1081;
                            this.expression(0);
                            this.state = 1082;
                            this.match(HyperTalkParser.T__11);
                            this.state = 1083;
                            this.expression(0);
                            this.state = 1084;
                            this.of();
                        }
                        break;
                    case 12:
                        {
                            this.state = 1086;
                            this.line();
                            this.state = 1087;
                            this.expression(0);
                            this.state = 1088;
                            this.of();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1096;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ChunkContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, HyperTalkParser.RULE_chunk);
                                this.state = 1092;
                                if (!(this.precpred(this._ctx, 13))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                                }
                                this.state = 1093;
                                this.chunk(14);
                            }
                        }
                    }
                    this.state = 1098;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
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
    HyperTalkParser.prototype.menu = function () {
        var _localctx = new MenuContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, HyperTalkParser.RULE_menu);
        try {
            this.state = 1104;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case HyperTalkParser.T__26:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1099;
                        this.match(HyperTalkParser.T__26);
                        this.state = 1100;
                        this.factor();
                    }
                    break;
                case HyperTalkParser.T__36:
                case HyperTalkParser.T__242:
                case HyperTalkParser.T__243:
                case HyperTalkParser.T__244:
                case HyperTalkParser.T__245:
                case HyperTalkParser.T__246:
                case HyperTalkParser.T__247:
                case HyperTalkParser.T__248:
                case HyperTalkParser.T__249:
                case HyperTalkParser.T__250:
                case HyperTalkParser.T__251:
                case HyperTalkParser.T__252:
                case HyperTalkParser.T__253:
                case HyperTalkParser.T__254:
                case HyperTalkParser.T__255:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1101;
                        this.ordinal();
                        this.state = 1102;
                        this.match(HyperTalkParser.T__26);
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
    HyperTalkParser.prototype.menuItem = function () {
        var _localctx = new MenuItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, HyperTalkParser.RULE_menuItem);
        try {
            this.state = 1116;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case HyperTalkParser.T__117:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1106;
                        this.match(HyperTalkParser.T__117);
                        this.state = 1107;
                        this.factor();
                        this.state = 1108;
                        this.of();
                        this.state = 1109;
                        this.menu();
                    }
                    break;
                case HyperTalkParser.T__36:
                case HyperTalkParser.T__242:
                case HyperTalkParser.T__243:
                case HyperTalkParser.T__244:
                case HyperTalkParser.T__245:
                case HyperTalkParser.T__246:
                case HyperTalkParser.T__247:
                case HyperTalkParser.T__248:
                case HyperTalkParser.T__249:
                case HyperTalkParser.T__250:
                case HyperTalkParser.T__251:
                case HyperTalkParser.T__252:
                case HyperTalkParser.T__253:
                case HyperTalkParser.T__254:
                case HyperTalkParser.T__255:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1111;
                        this.ordinal();
                        this.state = 1112;
                        this.match(HyperTalkParser.T__117);
                        this.state = 1113;
                        this.of();
                        this.state = 1114;
                        this.menu();
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
    HyperTalkParser.prototype.property = function () {
        var _localctx = new PropertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, HyperTalkParser.RULE_property);
        try {
            this.state = 1120;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 78, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1118;
                        this.partProperty();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1119;
                        this.globalProperty();
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
    HyperTalkParser.prototype.globalProperty = function () {
        var _localctx = new GlobalPropertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, HyperTalkParser.RULE_globalProperty);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1123;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === HyperTalkParser.T__36) {
                    {
                        this.state = 1122;
                        this.match(HyperTalkParser.T__36);
                    }
                }
                this.state = 1125;
                this.propertyName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    HyperTalkParser.prototype.partProperty = function () {
        var _localctx = new PartPropertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, HyperTalkParser.RULE_partProperty);
        var _la;
        try {
            this.state = 1142;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 82, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1128;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 1127;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 1130;
                        this.propertyName();
                        this.state = 1131;
                        this.of();
                        this.state = 1132;
                        this.factor();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1135;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 1134;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 1137;
                        this.length();
                        this.state = 1138;
                        this.propertyName();
                        this.state = 1139;
                        this.of();
                        this.state = 1140;
                        this.factor();
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
    HyperTalkParser.prototype.part = function () {
        var _localctx = new PartContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, HyperTalkParser.RULE_part);
        try {
            this.state = 1160;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 83, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1144;
                        this.message();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1145;
                        this.card();
                        this.state = 1146;
                        this.match(HyperTalkParser.T__118);
                        this.state = 1147;
                        this.factor();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1149;
                        this.background();
                        this.state = 1150;
                        this.match(HyperTalkParser.T__118);
                        this.state = 1151;
                        this.factor();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1153;
                        this.match(HyperTalkParser.T__119);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1154;
                        this.buttonPart(0);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1155;
                        this.fieldPart(0);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1156;
                        this.bkgndPart(0);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1157;
                        this.cardPart(0);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1158;
                        this.stackPart();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1159;
                        this.windowPart();
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
    HyperTalkParser.prototype.stackPart = function () {
        var _localctx = new StackPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, HyperTalkParser.RULE_stackPart);
        var _la;
        try {
            this.state = 1169;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1163;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__77) {
                            {
                                this.state = 1162;
                                this.match(HyperTalkParser.T__77);
                            }
                        }
                        this.state = 1165;
                        this.stack();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1166;
                        this.stack();
                        this.state = 1167;
                        this.factor();
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
    HyperTalkParser.prototype.buttonPart = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ButtonPartContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 72;
        this.enterRecursionRule(_localctx, 72, HyperTalkParser.RULE_buttonPart, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1204;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
                    case 1:
                        {
                            this.state = 1173;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === HyperTalkParser.T__287 || _la === HyperTalkParser.T__312) {
                                {
                                    this.state = 1172;
                                    this.card();
                                }
                            }
                            this.state = 1175;
                            this.button();
                            this.state = 1176;
                            this.match(HyperTalkParser.T__120);
                            this.state = 1177;
                            this.factor();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1179;
                            this.background();
                            this.state = 1180;
                            this.button();
                            this.state = 1181;
                            this.match(HyperTalkParser.T__120);
                            this.state = 1182;
                            this.factor();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1185;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === HyperTalkParser.T__287 || _la === HyperTalkParser.T__312) {
                                {
                                    this.state = 1184;
                                    this.card();
                                }
                            }
                            this.state = 1187;
                            this.button();
                            this.state = 1188;
                            this.factor();
                        }
                        break;
                    case 4:
                        {
                            this.state = 1190;
                            this.background();
                            this.state = 1191;
                            this.button();
                            this.state = 1192;
                            this.factor();
                        }
                        break;
                    case 5:
                        {
                            this.state = 1194;
                            this.ordinal();
                            this.state = 1196;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === HyperTalkParser.T__287 || _la === HyperTalkParser.T__312) {
                                {
                                    this.state = 1195;
                                    this.card();
                                }
                            }
                            this.state = 1198;
                            this.button();
                        }
                        break;
                    case 6:
                        {
                            this.state = 1200;
                            this.ordinal();
                            this.state = 1201;
                            this.background();
                            this.state = 1202;
                            this.button();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1212;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ButtonPartContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, HyperTalkParser.RULE_buttonPart);
                                this.state = 1206;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 1207;
                                this.of();
                                this.state = 1208;
                                this.cardPart(0);
                            }
                        }
                    }
                    this.state = 1214;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
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
    HyperTalkParser.prototype.fieldPart = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new FieldPartContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 74;
        this.enterRecursionRule(_localctx, 74, HyperTalkParser.RULE_fieldPart, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1248;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 94, this._ctx)) {
                    case 1:
                        {
                            this.state = 1216;
                            this.card();
                            this.state = 1217;
                            this.field();
                            this.state = 1218;
                            this.match(HyperTalkParser.T__120);
                            this.state = 1219;
                            this.factor();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1222;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 314)) & ~0x1F) === 0 && ((1 << (_la - 314)) & ((1 << (HyperTalkParser.T__313 - 314)) | (1 << (HyperTalkParser.T__314 - 314)) | (1 << (HyperTalkParser.T__315 - 314)) | (1 << (HyperTalkParser.T__316 - 314)) | (1 << (HyperTalkParser.T__317 - 314)) | (1 << (HyperTalkParser.T__318 - 314)))) !== 0)) {
                                {
                                    this.state = 1221;
                                    this.background();
                                }
                            }
                            this.state = 1224;
                            this.field();
                            this.state = 1225;
                            this.match(HyperTalkParser.T__120);
                            this.state = 1226;
                            this.factor();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1228;
                            this.card();
                            this.state = 1229;
                            this.field();
                            this.state = 1230;
                            this.factor();
                        }
                        break;
                    case 4:
                        {
                            this.state = 1233;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 314)) & ~0x1F) === 0 && ((1 << (_la - 314)) & ((1 << (HyperTalkParser.T__313 - 314)) | (1 << (HyperTalkParser.T__314 - 314)) | (1 << (HyperTalkParser.T__315 - 314)) | (1 << (HyperTalkParser.T__316 - 314)) | (1 << (HyperTalkParser.T__317 - 314)) | (1 << (HyperTalkParser.T__318 - 314)))) !== 0)) {
                                {
                                    this.state = 1232;
                                    this.background();
                                }
                            }
                            this.state = 1235;
                            this.field();
                            this.state = 1236;
                            this.factor();
                        }
                        break;
                    case 5:
                        {
                            this.state = 1238;
                            this.ordinal();
                            this.state = 1239;
                            this.card();
                            this.state = 1240;
                            this.field();
                        }
                        break;
                    case 6:
                        {
                            this.state = 1242;
                            this.ordinal();
                            this.state = 1244;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (((((_la - 314)) & ~0x1F) === 0 && ((1 << (_la - 314)) & ((1 << (HyperTalkParser.T__313 - 314)) | (1 << (HyperTalkParser.T__314 - 314)) | (1 << (HyperTalkParser.T__315 - 314)) | (1 << (HyperTalkParser.T__316 - 314)) | (1 << (HyperTalkParser.T__317 - 314)) | (1 << (HyperTalkParser.T__318 - 314)))) !== 0)) {
                                {
                                    this.state = 1243;
                                    this.background();
                                }
                            }
                            this.state = 1246;
                            this.field();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1256;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new FieldPartContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, HyperTalkParser.RULE_fieldPart);
                                this.state = 1250;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 1251;
                                this.of();
                                this.state = 1252;
                                this.cardPart(0);
                            }
                        }
                    }
                    this.state = 1258;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
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
    HyperTalkParser.prototype.cardPart = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new CardPartContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 76;
        this.enterRecursionRule(_localctx, 76, HyperTalkParser.RULE_cardPart, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1277;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                    case 1:
                        {
                            this.state = 1261;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === HyperTalkParser.T__77) {
                                {
                                    this.state = 1260;
                                    this.match(HyperTalkParser.T__77);
                                }
                            }
                            this.state = 1263;
                            this.card();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1264;
                            this.card();
                            this.state = 1265;
                            this.match(HyperTalkParser.T__120);
                            this.state = 1266;
                            this.factor();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1268;
                            this.position();
                            this.state = 1269;
                            this.card();
                        }
                        break;
                    case 4:
                        {
                            this.state = 1271;
                            this.ordinal();
                            this.state = 1272;
                            this.card();
                        }
                        break;
                    case 5:
                        {
                            this.state = 1274;
                            this.card();
                            this.state = 1275;
                            this.factor();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1289;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 1287;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 98, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new CardPartContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, HyperTalkParser.RULE_cardPart);
                                        this.state = 1279;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 1280;
                                        this.of();
                                        this.state = 1281;
                                        this.bkgndPart(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new CardPartContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, HyperTalkParser.RULE_cardPart);
                                        this.state = 1283;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 1284;
                                        this.of();
                                        this.state = 1285;
                                        this.stackPart();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1291;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
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
    HyperTalkParser.prototype.bkgndPart = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new BkgndPartContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 78;
        this.enterRecursionRule(_localctx, 78, HyperTalkParser.RULE_bkgndPart, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1310;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 101, this._ctx)) {
                    case 1:
                        {
                            this.state = 1294;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === HyperTalkParser.T__77) {
                                {
                                    this.state = 1293;
                                    this.match(HyperTalkParser.T__77);
                                }
                            }
                            this.state = 1296;
                            this.background();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1297;
                            this.background();
                            this.state = 1298;
                            this.match(HyperTalkParser.T__120);
                            this.state = 1299;
                            this.factor();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1301;
                            this.background();
                            this.state = 1302;
                            this.factor();
                        }
                        break;
                    case 4:
                        {
                            this.state = 1304;
                            this.ordinal();
                            this.state = 1305;
                            this.background();
                        }
                        break;
                    case 5:
                        {
                            this.state = 1307;
                            this.position();
                            this.state = 1308;
                            this.background();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1318;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new BkgndPartContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(_localctx, _startState, HyperTalkParser.RULE_bkgndPart);
                                this.state = 1312;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                }
                                this.state = 1313;
                                this.of();
                                this.state = 1314;
                                this.stackPart();
                            }
                        }
                    }
                    this.state = 1320;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
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
    HyperTalkParser.prototype.windowPart = function () {
        var _localctx = new WindowPartContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, HyperTalkParser.RULE_windowPart);
        var _la;
        try {
            this.state = 1352;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1322;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 1321;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 1324;
                        this.card();
                        this.state = 1325;
                        this.match(HyperTalkParser.T__96);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1328;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 1327;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 1330;
                        this.match(HyperTalkParser.T__19);
                        this.state = 1331;
                        this.match(HyperTalkParser.T__96);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1333;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 1332;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 1335;
                        this.match(HyperTalkParser.T__121);
                        this.state = 1336;
                        this.match(HyperTalkParser.T__96);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1338;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 1337;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 1340;
                        this.match(HyperTalkParser.T__122);
                        this.state = 1341;
                        this.match(HyperTalkParser.T__123);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1343;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 1342;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 1345;
                        this.match(HyperTalkParser.T__124);
                        this.state = 1346;
                        this.match(HyperTalkParser.T__123);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1347;
                        this.match(HyperTalkParser.T__96);
                        this.state = 1348;
                        this.expression(0);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1349;
                        this.match(HyperTalkParser.T__96);
                        this.state = 1350;
                        this.match(HyperTalkParser.T__120);
                        this.state = 1351;
                        this.expression(0);
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
    HyperTalkParser.prototype.listExpression = function () {
        var _localctx = new ListExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, HyperTalkParser.RULE_listExpression);
        try {
            this.state = 1359;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 109, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1354;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1355;
                        this.expression(0);
                        this.state = 1356;
                        this.match(HyperTalkParser.T__3);
                        this.state = 1357;
                        this.listExpression();
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
    HyperTalkParser.prototype.expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new ExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 84;
        this.enterRecursionRule(_localctx, 84, HyperTalkParser.RULE_expression, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1369;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
                    case 1:
                        {
                            this.state = 1362;
                            this.factor();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1363;
                            this.match(HyperTalkParser.T__125);
                            this.state = 1364;
                            this.expression(11);
                        }
                        break;
                    case 3:
                        {
                            this.state = 1365;
                            this.match(HyperTalkParser.T__126);
                            this.state = 1366;
                            this.expression(10);
                        }
                        break;
                    case 4:
                        {
                            this.state = 1367;
                            _localctx._op = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (HyperTalkParser.T__127 - 128)) | (1 << (HyperTalkParser.T__128 - 128)) | (1 << (HyperTalkParser.T__129 - 128)) | (1 << (HyperTalkParser.T__130 - 128)) | (1 << (HyperTalkParser.T__131 - 128)))) !== 0))) {
                                _localctx._op = this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1368;
                            this.expression(9);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1397;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 1395;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 111, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, HyperTalkParser.RULE_expression);
                                        this.state = 1371;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 1372;
                                        this.match(HyperTalkParser.T__132);
                                        this.state = 1373;
                                        this.expression(9);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, HyperTalkParser.RULE_expression);
                                        this.state = 1374;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 1375;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (HyperTalkParser.T__133 - 134)) | (1 << (HyperTalkParser.T__134 - 134)) | (1 << (HyperTalkParser.T__135 - 134)) | (1 << (HyperTalkParser.T__136 - 134)))) !== 0))) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1376;
                                        this.expression(8);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, HyperTalkParser.RULE_expression);
                                        this.state = 1377;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 1378;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === HyperTalkParser.T__126 || _la === HyperTalkParser.T__137)) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1379;
                                        this.expression(7);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, HyperTalkParser.RULE_expression);
                                        this.state = 1380;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 1381;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === HyperTalkParser.T__138 || _la === HyperTalkParser.T__139)) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1382;
                                        this.expression(6);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, HyperTalkParser.RULE_expression);
                                        this.state = 1383;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 1384;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 141)) & ~0x1F) === 0 && ((1 << (_la - 141)) & ((1 << (HyperTalkParser.T__140 - 141)) | (1 << (HyperTalkParser.T__141 - 141)) | (1 << (HyperTalkParser.T__142 - 141)) | (1 << (HyperTalkParser.T__143 - 141)) | (1 << (HyperTalkParser.T__144 - 141)) | (1 << (HyperTalkParser.T__145 - 141)) | (1 << (HyperTalkParser.T__146 - 141)) | (1 << (HyperTalkParser.T__147 - 141)) | (1 << (HyperTalkParser.T__148 - 141)) | (1 << (HyperTalkParser.T__149 - 141)) | (1 << (HyperTalkParser.T__150 - 141)) | (1 << (HyperTalkParser.T__151 - 141)) | (1 << (HyperTalkParser.T__152 - 141)) | (1 << (HyperTalkParser.T__153 - 141)) | (1 << (HyperTalkParser.T__154 - 141)))) !== 0))) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1385;
                                        this.expression(5);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, HyperTalkParser.RULE_expression);
                                        this.state = 1386;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 1387;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === HyperTalkParser.T__113 || ((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & ((1 << (HyperTalkParser.T__155 - 156)) | (1 << (HyperTalkParser.T__156 - 156)) | (1 << (HyperTalkParser.T__157 - 156)) | (1 << (HyperTalkParser.T__158 - 156)))) !== 0))) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1388;
                                        this.expression(4);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, HyperTalkParser.RULE_expression);
                                        this.state = 1389;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 1390;
                                        this.match(HyperTalkParser.T__99);
                                        this.state = 1391;
                                        this.expression(3);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, HyperTalkParser.RULE_expression);
                                        this.state = 1392;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 1393;
                                        this.match(HyperTalkParser.T__14);
                                        this.state = 1394;
                                        this.expression(2);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1399;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
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
    HyperTalkParser.prototype.factor = function () {
        var _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, HyperTalkParser.RULE_factor);
        try {
            this.state = 1413;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1400;
                        this.literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1401;
                        this.match(HyperTalkParser.T__126);
                        this.state = 1402;
                        this.literal();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1403;
                        this.match(HyperTalkParser.T__159);
                        this.state = 1404;
                        this.expression(0);
                        this.state = 1405;
                        this.match(HyperTalkParser.T__160);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1407;
                        this.effectExpression();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1408;
                        this.functionCall();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1409;
                        this.container();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1410;
                        this.chunk(0);
                        this.state = 1411;
                        this.factor();
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
    HyperTalkParser.prototype.container = function () {
        var _localctx = new ContainerContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, HyperTalkParser.RULE_container);
        var _la;
        try {
            this.state = 1428;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 115, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1415;
                        this.match(HyperTalkParser.ID);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1417;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 1416;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 1419;
                        this.match(HyperTalkParser.T__161);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1420;
                        this.match(HyperTalkParser.T__162);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1421;
                        this.property();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1422;
                        this.menu();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1423;
                        this.menuItem();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1424;
                        this.part();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1425;
                        this.chunk(0);
                        this.state = 1426;
                        this.container();
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
    HyperTalkParser.prototype.musicExpression = function () {
        var _localctx = new MusicExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, HyperTalkParser.RULE_musicExpression);
        try {
            this.state = 1443;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 116, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1430;
                        this.expression(0);
                        this.state = 1431;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1433;
                        this.expression(0);
                        this.state = 1434;
                        this.match(HyperTalkParser.T__163);
                        this.state = 1435;
                        this.expression(0);
                        this.state = 1436;
                        this.expression(0);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1438;
                        this.expression(0);
                        this.state = 1439;
                        this.match(HyperTalkParser.T__163);
                        this.state = 1440;
                        this.expression(0);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1442;
                        this.expression(0);
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
    HyperTalkParser.prototype.toolExpression = function () {
        var _localctx = new ToolExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, HyperTalkParser.RULE_toolExpression);
        var _la;
        try {
            this.state = 1463;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 120, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1445;
                        this.match(HyperTalkParser.T__70);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1446;
                        this.match(HyperTalkParser.T__68);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1447;
                        this.match(HyperTalkParser.T__164);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1448;
                        this.match(HyperTalkParser.T__165);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1449;
                        this.match(HyperTalkParser.T__166);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1451;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__167 || _la === HyperTalkParser.T__168) {
                            {
                                this.state = 1450;
                                _la = this._input.LA(1);
                                if (!(_la === HyperTalkParser.T__167 || _la === HyperTalkParser.T__168)) {
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
                        this.state = 1453;
                        _la = this._input.LA(1);
                        if (!(_la === HyperTalkParser.T__169 || _la === HyperTalkParser.T__170)) {
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
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1455;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__171) {
                            {
                                this.state = 1454;
                                this.match(HyperTalkParser.T__171);
                            }
                        }
                        this.state = 1457;
                        _la = this._input.LA(1);
                        if (!(_la === HyperTalkParser.T__172 || _la === HyperTalkParser.T__173)) {
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
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1458;
                        this.match(HyperTalkParser.T__174);
                        this.state = 1460;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__175) {
                            {
                                this.state = 1459;
                                this.match(HyperTalkParser.T__175);
                            }
                        }
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1462;
                        this.expression(0);
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
    HyperTalkParser.prototype.effectExpression = function () {
        var _localctx = new EffectExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, HyperTalkParser.RULE_effectExpression);
        var _la;
        try {
            this.state = 1490;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 125, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1466;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__176) {
                            {
                                this.state = 1465;
                                this.match(HyperTalkParser.T__176);
                            }
                        }
                        this.state = 1468;
                        this.effect();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1470;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__176) {
                            {
                                this.state = 1469;
                                this.match(HyperTalkParser.T__176);
                            }
                        }
                        this.state = 1472;
                        this.effect();
                        this.state = 1473;
                        this.match(HyperTalkParser.T__11);
                        this.state = 1474;
                        this.image();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1477;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__176) {
                            {
                                this.state = 1476;
                                this.match(HyperTalkParser.T__176);
                            }
                        }
                        this.state = 1479;
                        this.effect();
                        this.state = 1480;
                        this.speed();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1483;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__176) {
                            {
                                this.state = 1482;
                                this.match(HyperTalkParser.T__176);
                            }
                        }
                        this.state = 1485;
                        this.effect();
                        this.state = 1486;
                        this.speed();
                        this.state = 1487;
                        this.match(HyperTalkParser.T__11);
                        this.state = 1488;
                        this.image();
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
    HyperTalkParser.prototype.functionCall = function () {
        var _localctx = new FunctionCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, HyperTalkParser.RULE_functionCall);
        var _la;
        try {
            this.state = 1499;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case HyperTalkParser.T__36:
                case HyperTalkParser.T__184:
                case HyperTalkParser.T__189:
                case HyperTalkParser.T__195:
                case HyperTalkParser.T__196:
                case HyperTalkParser.T__197:
                case HyperTalkParser.T__198:
                case HyperTalkParser.T__200:
                case HyperTalkParser.T__201:
                case HyperTalkParser.T__202:
                case HyperTalkParser.T__203:
                case HyperTalkParser.T__204:
                case HyperTalkParser.T__205:
                case HyperTalkParser.T__206:
                case HyperTalkParser.T__207:
                case HyperTalkParser.T__208:
                case HyperTalkParser.T__209:
                case HyperTalkParser.T__210:
                case HyperTalkParser.T__211:
                case HyperTalkParser.T__212:
                case HyperTalkParser.T__213:
                case HyperTalkParser.T__214:
                case HyperTalkParser.T__215:
                case HyperTalkParser.T__216:
                case HyperTalkParser.T__217:
                case HyperTalkParser.T__218:
                case HyperTalkParser.T__219:
                case HyperTalkParser.T__220:
                case HyperTalkParser.T__221:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1492;
                        this.builtInFunc();
                    }
                    break;
                case HyperTalkParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1493;
                        this.match(HyperTalkParser.ID);
                        this.state = 1494;
                        this.match(HyperTalkParser.T__159);
                        this.state = 1496;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HyperTalkParser.T__5) | (1 << HyperTalkParser.T__19) | (1 << HyperTalkParser.T__26))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (HyperTalkParser.T__36 - 37)) | (1 << (HyperTalkParser.T__37 - 37)) | (1 << (HyperTalkParser.T__45 - 37)) | (1 << (HyperTalkParser.T__56 - 37)) | (1 << (HyperTalkParser.T__61 - 37)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (HyperTalkParser.T__69 - 70)) | (1 << (HyperTalkParser.T__77 - 70)) | (1 << (HyperTalkParser.T__78 - 70)) | (1 << (HyperTalkParser.T__87 - 70)) | (1 << (HyperTalkParser.T__88 - 70)) | (1 << (HyperTalkParser.T__96 - 70)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (HyperTalkParser.T__101 - 102)) | (1 << (HyperTalkParser.T__102 - 102)) | (1 << (HyperTalkParser.T__103 - 102)) | (1 << (HyperTalkParser.T__104 - 102)) | (1 << (HyperTalkParser.T__105 - 102)) | (1 << (HyperTalkParser.T__106 - 102)) | (1 << (HyperTalkParser.T__107 - 102)) | (1 << (HyperTalkParser.T__108 - 102)) | (1 << (HyperTalkParser.T__116 - 102)) | (1 << (HyperTalkParser.T__117 - 102)) | (1 << (HyperTalkParser.T__119 - 102)) | (1 << (HyperTalkParser.T__120 - 102)) | (1 << (HyperTalkParser.T__121 - 102)) | (1 << (HyperTalkParser.T__122 - 102)) | (1 << (HyperTalkParser.T__124 - 102)) | (1 << (HyperTalkParser.T__125 - 102)) | (1 << (HyperTalkParser.T__126 - 102)) | (1 << (HyperTalkParser.T__127 - 102)) | (1 << (HyperTalkParser.T__128 - 102)) | (1 << (HyperTalkParser.T__129 - 102)) | (1 << (HyperTalkParser.T__130 - 102)) | (1 << (HyperTalkParser.T__131 - 102)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (HyperTalkParser.T__159 - 160)) | (1 << (HyperTalkParser.T__161 - 160)) | (1 << (HyperTalkParser.T__162 - 160)) | (1 << (HyperTalkParser.T__164 - 160)) | (1 << (HyperTalkParser.T__165 - 160)) | (1 << (HyperTalkParser.T__166 - 160)) | (1 << (HyperTalkParser.T__172 - 160)) | (1 << (HyperTalkParser.T__173 - 160)) | (1 << (HyperTalkParser.T__176 - 160)) | (1 << (HyperTalkParser.T__180 - 160)) | (1 << (HyperTalkParser.T__181 - 160)) | (1 << (HyperTalkParser.T__184 - 160)) | (1 << (HyperTalkParser.T__189 - 160)))) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & ((1 << (HyperTalkParser.T__195 - 196)) | (1 << (HyperTalkParser.T__196 - 196)) | (1 << (HyperTalkParser.T__197 - 196)) | (1 << (HyperTalkParser.T__198 - 196)) | (1 << (HyperTalkParser.T__200 - 196)) | (1 << (HyperTalkParser.T__201 - 196)) | (1 << (HyperTalkParser.T__202 - 196)) | (1 << (HyperTalkParser.T__203 - 196)) | (1 << (HyperTalkParser.T__204 - 196)) | (1 << (HyperTalkParser.T__205 - 196)) | (1 << (HyperTalkParser.T__206 - 196)) | (1 << (HyperTalkParser.T__207 - 196)) | (1 << (HyperTalkParser.T__208 - 196)) | (1 << (HyperTalkParser.T__209 - 196)) | (1 << (HyperTalkParser.T__210 - 196)) | (1 << (HyperTalkParser.T__211 - 196)) | (1 << (HyperTalkParser.T__212 - 196)) | (1 << (HyperTalkParser.T__213 - 196)) | (1 << (HyperTalkParser.T__214 - 196)) | (1 << (HyperTalkParser.T__215 - 196)) | (1 << (HyperTalkParser.T__216 - 196)) | (1 << (HyperTalkParser.T__217 - 196)) | (1 << (HyperTalkParser.T__218 - 196)) | (1 << (HyperTalkParser.T__219 - 196)) | (1 << (HyperTalkParser.T__220 - 196)) | (1 << (HyperTalkParser.T__221 - 196)) | (1 << (HyperTalkParser.T__223 - 196)) | (1 << (HyperTalkParser.T__224 - 196)) | (1 << (HyperTalkParser.T__225 - 196)) | (1 << (HyperTalkParser.T__226 - 196)))) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & ((1 << (HyperTalkParser.T__227 - 228)) | (1 << (HyperTalkParser.T__228 - 228)) | (1 << (HyperTalkParser.T__229 - 228)) | (1 << (HyperTalkParser.T__230 - 228)) | (1 << (HyperTalkParser.T__231 - 228)) | (1 << (HyperTalkParser.T__232 - 228)) | (1 << (HyperTalkParser.T__233 - 228)) | (1 << (HyperTalkParser.T__234 - 228)) | (1 << (HyperTalkParser.T__235 - 228)) | (1 << (HyperTalkParser.T__236 - 228)) | (1 << (HyperTalkParser.T__237 - 228)) | (1 << (HyperTalkParser.T__238 - 228)) | (1 << (HyperTalkParser.T__239 - 228)) | (1 << (HyperTalkParser.T__240 - 228)) | (1 << (HyperTalkParser.T__241 - 228)) | (1 << (HyperTalkParser.T__242 - 228)) | (1 << (HyperTalkParser.T__243 - 228)) | (1 << (HyperTalkParser.T__244 - 228)) | (1 << (HyperTalkParser.T__245 - 228)) | (1 << (HyperTalkParser.T__246 - 228)) | (1 << (HyperTalkParser.T__247 - 228)) | (1 << (HyperTalkParser.T__248 - 228)) | (1 << (HyperTalkParser.T__249 - 228)) | (1 << (HyperTalkParser.T__250 - 228)) | (1 << (HyperTalkParser.T__251 - 228)) | (1 << (HyperTalkParser.T__252 - 228)) | (1 << (HyperTalkParser.T__253 - 228)) | (1 << (HyperTalkParser.T__254 - 228)) | (1 << (HyperTalkParser.T__255 - 228)) | (1 << (HyperTalkParser.T__256 - 228)) | (1 << (HyperTalkParser.T__257 - 228)) | (1 << (HyperTalkParser.T__258 - 228)))) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & ((1 << (HyperTalkParser.T__259 - 260)) | (1 << (HyperTalkParser.T__260 - 260)) | (1 << (HyperTalkParser.T__261 - 260)) | (1 << (HyperTalkParser.T__262 - 260)) | (1 << (HyperTalkParser.T__263 - 260)) | (1 << (HyperTalkParser.T__264 - 260)) | (1 << (HyperTalkParser.T__265 - 260)) | (1 << (HyperTalkParser.T__266 - 260)) | (1 << (HyperTalkParser.T__267 - 260)) | (1 << (HyperTalkParser.T__268 - 260)) | (1 << (HyperTalkParser.T__269 - 260)) | (1 << (HyperTalkParser.T__270 - 260)) | (1 << (HyperTalkParser.T__271 - 260)) | (1 << (HyperTalkParser.T__272 - 260)) | (1 << (HyperTalkParser.T__273 - 260)) | (1 << (HyperTalkParser.T__274 - 260)) | (1 << (HyperTalkParser.T__275 - 260)) | (1 << (HyperTalkParser.T__276 - 260)) | (1 << (HyperTalkParser.T__287 - 260)))) !== 0) || ((((_la - 293)) & ~0x1F) === 0 && ((1 << (_la - 293)) & ((1 << (HyperTalkParser.T__292 - 293)) | (1 << (HyperTalkParser.T__293 - 293)) | (1 << (HyperTalkParser.T__295 - 293)) | (1 << (HyperTalkParser.T__296 - 293)) | (1 << (HyperTalkParser.T__297 - 293)) | (1 << (HyperTalkParser.T__298 - 293)) | (1 << (HyperTalkParser.T__299 - 293)) | (1 << (HyperTalkParser.T__301 - 293)) | (1 << (HyperTalkParser.T__302 - 293)) | (1 << (HyperTalkParser.T__306 - 293)) | (1 << (HyperTalkParser.T__307 - 293)) | (1 << (HyperTalkParser.T__308 - 293)) | (1 << (HyperTalkParser.T__312 - 293)) | (1 << (HyperTalkParser.T__313 - 293)) | (1 << (HyperTalkParser.T__314 - 293)) | (1 << (HyperTalkParser.T__315 - 293)) | (1 << (HyperTalkParser.T__316 - 293)) | (1 << (HyperTalkParser.T__317 - 293)) | (1 << (HyperTalkParser.T__318 - 293)) | (1 << (HyperTalkParser.T__319 - 293)) | (1 << (HyperTalkParser.T__320 - 293)) | (1 << (HyperTalkParser.T__321 - 293)) | (1 << (HyperTalkParser.T__322 - 293)) | (1 << (HyperTalkParser.T__323 - 293)))) !== 0) || ((((_la - 325)) & ~0x1F) === 0 && ((1 << (_la - 325)) & ((1 << (HyperTalkParser.T__324 - 325)) | (1 << (HyperTalkParser.T__325 - 325)) | (1 << (HyperTalkParser.T__326 - 325)) | (1 << (HyperTalkParser.T__327 - 325)) | (1 << (HyperTalkParser.T__328 - 325)) | (1 << (HyperTalkParser.T__329 - 325)) | (1 << (HyperTalkParser.T__330 - 325)) | (1 << (HyperTalkParser.T__331 - 325)) | (1 << (HyperTalkParser.ID - 325)) | (1 << (HyperTalkParser.LITERAL - 325)))) !== 0)) {
                            {
                                this.state = 1495;
                                this.listExpression();
                            }
                        }
                        this.state = 1498;
                        this.match(HyperTalkParser.T__160);
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
    HyperTalkParser.prototype.builtInFunc = function () {
        var _localctx = new BuiltInFuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, HyperTalkParser.RULE_builtInFunc);
        var _la;
        try {
            this.state = 1520;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1501;
                        this.match(HyperTalkParser.T__36);
                        this.state = 1502;
                        this.zeroArgFunc();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1504;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 1503;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 1506;
                        this.singleArgFunc();
                        this.state = 1507;
                        this.of();
                        this.state = 1508;
                        this.factor();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1510;
                        this.singleArgFunc();
                        this.state = 1511;
                        this.match(HyperTalkParser.T__159);
                        this.state = 1512;
                        this.listExpression();
                        this.state = 1513;
                        this.match(HyperTalkParser.T__160);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1515;
                        this.multiArgFunc();
                        this.state = 1516;
                        this.match(HyperTalkParser.T__159);
                        this.state = 1517;
                        this.listExpression();
                        this.state = 1518;
                        this.match(HyperTalkParser.T__160);
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
    HyperTalkParser.prototype.zeroArgFunc = function () {
        var _localctx = new ZeroArgFuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, HyperTalkParser.RULE_zeroArgFunc);
        var _la;
        try {
            this.state = 1596;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 133, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1522;
                        this.match(HyperTalkParser.T__177);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1523;
                        this.match(HyperTalkParser.T__178);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1524;
                        this.match(HyperTalkParser.T__179);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1525;
                        _la = this._input.LA(1);
                        if (!(_la === HyperTalkParser.T__87 || _la === HyperTalkParser.T__88)) {
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
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1526;
                        this.match(HyperTalkParser.T__180);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1527;
                        this.match(HyperTalkParser.T__181);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1528;
                        this.match(HyperTalkParser.T__182);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1529;
                        this.seconds();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1530;
                        this.length();
                        this.state = 1531;
                        this.match(HyperTalkParser.T__102);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1533;
                        this.length();
                        this.state = 1534;
                        this.match(HyperTalkParser.T__101);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1536;
                        this.match(HyperTalkParser.T__19);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1537;
                        this.match(HyperTalkParser.T__183);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 1538;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1539;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1541;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__287 || _la === HyperTalkParser.T__312) {
                            {
                                this.state = 1540;
                                this.card();
                            }
                        }
                        this.state = 1543;
                        this.match(HyperTalkParser.T__186);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 1544;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1545;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1546;
                        this.background();
                        this.state = 1547;
                        this.match(HyperTalkParser.T__186);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 1549;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1550;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1552;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__287 || _la === HyperTalkParser.T__312) {
                            {
                                this.state = 1551;
                                this.card();
                            }
                        }
                        this.state = 1554;
                        this.button();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 1555;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1556;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1557;
                        this.background();
                        this.state = 1558;
                        this.button();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 1560;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1561;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1562;
                        this.card();
                        this.state = 1563;
                        this.field();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 1565;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1566;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1568;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 314)) & ~0x1F) === 0 && ((1 << (_la - 314)) & ((1 << (HyperTalkParser.T__313 - 314)) | (1 << (HyperTalkParser.T__314 - 314)) | (1 << (HyperTalkParser.T__315 - 314)) | (1 << (HyperTalkParser.T__316 - 314)) | (1 << (HyperTalkParser.T__317 - 314)) | (1 << (HyperTalkParser.T__318 - 314)))) !== 0)) {
                            {
                                this.state = 1567;
                                this.background();
                            }
                        }
                        this.state = 1570;
                        this.field();
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 1571;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1572;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1573;
                        this.cards();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 1574;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1575;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1576;
                        this.background();
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 1577;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1578;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1579;
                        this.match(HyperTalkParser.T__45);
                        this.state = 1580;
                        this.cards();
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 1581;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1582;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1583;
                        this.match(HyperTalkParser.T__187);
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 1584;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1585;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1586;
                        this.match(HyperTalkParser.T__188);
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 1587;
                        this.match(HyperTalkParser.T__187);
                    }
                    break;
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 1588;
                        this.match(HyperTalkParser.T__189);
                    }
                    break;
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 1589;
                        this.match(HyperTalkParser.T__190);
                    }
                    break;
                case 27:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 1590;
                        this.match(HyperTalkParser.T__191);
                    }
                    break;
                case 28:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 1591;
                        this.match(HyperTalkParser.T__162);
                    }
                    break;
                case 29:
                    this.enterOuterAlt(_localctx, 29);
                    {
                        this.state = 1592;
                        this.match(HyperTalkParser.T__192);
                    }
                    break;
                case 30:
                    this.enterOuterAlt(_localctx, 30);
                    {
                        this.state = 1593;
                        this.match(HyperTalkParser.T__193);
                    }
                    break;
                case 31:
                    this.enterOuterAlt(_localctx, 31);
                    {
                        this.state = 1594;
                        this.match(HyperTalkParser.T__188);
                    }
                    break;
                case 32:
                    this.enterOuterAlt(_localctx, 32);
                    {
                        this.state = 1595;
                        this.match(HyperTalkParser.T__194);
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
    HyperTalkParser.prototype.singleArgFunc = function () {
        var _localctx = new SingleArgFuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, HyperTalkParser.RULE_singleArgFunc);
        var _la;
        try {
            this.state = 1684;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1598;
                        this.match(HyperTalkParser.T__195);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1599;
                        this.match(HyperTalkParser.T__196);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1600;
                        this.match(HyperTalkParser.T__197);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1601;
                        this.match(HyperTalkParser.T__198);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1602;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1603;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1605;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__287 || _la === HyperTalkParser.T__312) {
                            {
                                this.state = 1604;
                                this.card();
                            }
                        }
                        this.state = 1607;
                        this.match(HyperTalkParser.T__186);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1608;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1609;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1610;
                        this.background();
                        this.state = 1611;
                        this.match(HyperTalkParser.T__186);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1613;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1614;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1616;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__287 || _la === HyperTalkParser.T__312) {
                            {
                                this.state = 1615;
                                this.card();
                            }
                        }
                        this.state = 1618;
                        this.button();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1619;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1620;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1621;
                        this.background();
                        this.state = 1622;
                        this.button();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1624;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1625;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1626;
                        this.card();
                        this.state = 1627;
                        this.field();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1629;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1630;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1632;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 314)) & ~0x1F) === 0 && ((1 << (_la - 314)) & ((1 << (HyperTalkParser.T__313 - 314)) | (1 << (HyperTalkParser.T__314 - 314)) | (1 << (HyperTalkParser.T__315 - 314)) | (1 << (HyperTalkParser.T__316 - 314)) | (1 << (HyperTalkParser.T__317 - 314)) | (1 << (HyperTalkParser.T__318 - 314)))) !== 0)) {
                            {
                                this.state = 1631;
                                this.background();
                            }
                        }
                        this.state = 1634;
                        this.field();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1635;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1636;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1637;
                        this.cards();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1638;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1639;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1640;
                        this.background();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 1641;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1642;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1643;
                        this.match(HyperTalkParser.T__45);
                        this.state = 1644;
                        this.cards();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 1645;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1646;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1647;
                        this.character();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 1648;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1649;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1650;
                        this.word();
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 1651;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1652;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1653;
                        this.item();
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 1654;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1655;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1656;
                        this.line();
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 1657;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1658;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1659;
                        this.match(HyperTalkParser.T__199);
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 1660;
                        this.match(HyperTalkParser.T__184);
                        this.state = 1661;
                        this.match(HyperTalkParser.T__185);
                        this.state = 1662;
                        this.cards();
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 1663;
                        this.match(HyperTalkParser.T__184);
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 1664;
                        this.match(HyperTalkParser.T__200);
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 1665;
                        this.match(HyperTalkParser.T__201);
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 1666;
                        this.match(HyperTalkParser.T__202);
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 1667;
                        this.match(HyperTalkParser.T__203);
                    }
                    break;
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 1668;
                        this.match(HyperTalkParser.T__204);
                    }
                    break;
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 1669;
                        this.match(HyperTalkParser.T__205);
                    }
                    break;
                case 27:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 1670;
                        this.match(HyperTalkParser.T__206);
                    }
                    break;
                case 28:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 1671;
                        this.match(HyperTalkParser.T__207);
                    }
                    break;
                case 29:
                    this.enterOuterAlt(_localctx, 29);
                    {
                        this.state = 1672;
                        this.match(HyperTalkParser.T__208);
                    }
                    break;
                case 30:
                    this.enterOuterAlt(_localctx, 30);
                    {
                        this.state = 1673;
                        this.match(HyperTalkParser.T__209);
                    }
                    break;
                case 31:
                    this.enterOuterAlt(_localctx, 31);
                    {
                        this.state = 1674;
                        this.match(HyperTalkParser.T__210);
                    }
                    break;
                case 32:
                    this.enterOuterAlt(_localctx, 32);
                    {
                        this.state = 1675;
                        this.match(HyperTalkParser.T__211);
                    }
                    break;
                case 33:
                    this.enterOuterAlt(_localctx, 33);
                    {
                        this.state = 1676;
                        this.match(HyperTalkParser.T__212);
                    }
                    break;
                case 34:
                    this.enterOuterAlt(_localctx, 34);
                    {
                        this.state = 1677;
                        this.match(HyperTalkParser.T__213);
                    }
                    break;
                case 35:
                    this.enterOuterAlt(_localctx, 35);
                    {
                        this.state = 1678;
                        this.match(HyperTalkParser.T__214);
                    }
                    break;
                case 36:
                    this.enterOuterAlt(_localctx, 36);
                    {
                        this.state = 1679;
                        this.match(HyperTalkParser.T__215);
                    }
                    break;
                case 37:
                    this.enterOuterAlt(_localctx, 37);
                    {
                        this.state = 1680;
                        this.match(HyperTalkParser.T__216);
                    }
                    break;
                case 38:
                    this.enterOuterAlt(_localctx, 38);
                    {
                        this.state = 1681;
                        this.match(HyperTalkParser.T__217);
                    }
                    break;
                case 39:
                    this.enterOuterAlt(_localctx, 39);
                    {
                        this.state = 1682;
                        this.match(HyperTalkParser.T__189);
                    }
                    break;
                case 40:
                    this.enterOuterAlt(_localctx, 40);
                    {
                        this.state = 1683;
                        this.match(HyperTalkParser.T__218);
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
    HyperTalkParser.prototype.multiArgFunc = function () {
        var _localctx = new MultiArgFuncContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, HyperTalkParser.RULE_multiArgFunc);
        try {
            this.state = 1690;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case HyperTalkParser.T__184:
                case HyperTalkParser.T__189:
                case HyperTalkParser.T__195:
                case HyperTalkParser.T__196:
                case HyperTalkParser.T__197:
                case HyperTalkParser.T__198:
                case HyperTalkParser.T__200:
                case HyperTalkParser.T__201:
                case HyperTalkParser.T__202:
                case HyperTalkParser.T__203:
                case HyperTalkParser.T__204:
                case HyperTalkParser.T__205:
                case HyperTalkParser.T__206:
                case HyperTalkParser.T__207:
                case HyperTalkParser.T__208:
                case HyperTalkParser.T__209:
                case HyperTalkParser.T__210:
                case HyperTalkParser.T__211:
                case HyperTalkParser.T__212:
                case HyperTalkParser.T__213:
                case HyperTalkParser.T__214:
                case HyperTalkParser.T__215:
                case HyperTalkParser.T__216:
                case HyperTalkParser.T__217:
                case HyperTalkParser.T__218:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1686;
                        this.singleArgFunc();
                    }
                    break;
                case HyperTalkParser.T__219:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1687;
                        this.match(HyperTalkParser.T__219);
                    }
                    break;
                case HyperTalkParser.T__220:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1688;
                        this.match(HyperTalkParser.T__220);
                    }
                    break;
                case HyperTalkParser.T__221:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1689;
                        this.match(HyperTalkParser.T__221);
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
    HyperTalkParser.prototype.literal = function () {
        var _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, HyperTalkParser.RULE_literal);
        try {
            this.state = 1698;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case HyperTalkParser.T__5:
                case HyperTalkParser.T__69:
                case HyperTalkParser.T__223:
                case HyperTalkParser.T__224:
                case HyperTalkParser.T__225:
                case HyperTalkParser.T__226:
                case HyperTalkParser.T__227:
                case HyperTalkParser.T__228:
                case HyperTalkParser.T__229:
                case HyperTalkParser.T__230:
                case HyperTalkParser.T__231:
                case HyperTalkParser.T__232:
                case HyperTalkParser.T__233:
                case HyperTalkParser.T__234:
                case HyperTalkParser.T__235:
                case HyperTalkParser.T__236:
                case HyperTalkParser.T__237:
                case HyperTalkParser.T__238:
                case HyperTalkParser.T__239:
                case HyperTalkParser.T__240:
                case HyperTalkParser.T__241:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1692;
                        this.constant();
                    }
                    break;
                case HyperTalkParser.T__87:
                case HyperTalkParser.T__88:
                case HyperTalkParser.T__180:
                case HyperTalkParser.T__181:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1693;
                        this.modifierKey();
                    }
                    break;
                case HyperTalkParser.T__116:
                case HyperTalkParser.T__256:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1694;
                        this.mouseState();
                    }
                    break;
                case HyperTalkParser.T__101:
                case HyperTalkParser.T__172:
                case HyperTalkParser.T__173:
                case HyperTalkParser.T__184:
                case HyperTalkParser.T__257:
                case HyperTalkParser.T__258:
                case HyperTalkParser.T__259:
                case HyperTalkParser.T__260:
                case HyperTalkParser.T__261:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1695;
                        this.knownType();
                    }
                    break;
                case HyperTalkParser.T__262:
                case HyperTalkParser.T__263:
                case HyperTalkParser.T__264:
                case HyperTalkParser.T__265:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1696;
                        this.findType();
                    }
                    break;
                case HyperTalkParser.LITERAL:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1697;
                        this.match(HyperTalkParser.LITERAL);
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
    HyperTalkParser.prototype.preposition = function () {
        var _localctx = new PrepositionContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, HyperTalkParser.RULE_preposition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1700;
                _la = this._input.LA(1);
                if (!(_la === HyperTalkParser.T__71 || _la === HyperTalkParser.T__72 || _la === HyperTalkParser.T__222)) {
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
    HyperTalkParser.prototype.constant = function () {
        var _localctx = new ConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, HyperTalkParser.RULE_constant);
        try {
            this.state = 1713;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case HyperTalkParser.T__231:
                case HyperTalkParser.T__232:
                case HyperTalkParser.T__233:
                case HyperTalkParser.T__234:
                case HyperTalkParser.T__235:
                case HyperTalkParser.T__236:
                case HyperTalkParser.T__237:
                case HyperTalkParser.T__238:
                case HyperTalkParser.T__239:
                case HyperTalkParser.T__240:
                case HyperTalkParser.T__241:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1702;
                        this.cardinalValue();
                    }
                    break;
                case HyperTalkParser.T__69:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1703;
                        this.match(HyperTalkParser.T__69);
                    }
                    break;
                case HyperTalkParser.T__223:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1704;
                        this.match(HyperTalkParser.T__223);
                    }
                    break;
                case HyperTalkParser.T__224:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1705;
                        this.match(HyperTalkParser.T__224);
                    }
                    break;
                case HyperTalkParser.T__5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1706;
                        this.match(HyperTalkParser.T__5);
                    }
                    break;
                case HyperTalkParser.T__225:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1707;
                        this.match(HyperTalkParser.T__225);
                    }
                    break;
                case HyperTalkParser.T__226:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1708;
                        this.match(HyperTalkParser.T__226);
                    }
                    break;
                case HyperTalkParser.T__227:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1709;
                        this.match(HyperTalkParser.T__227);
                    }
                    break;
                case HyperTalkParser.T__228:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1710;
                        this.match(HyperTalkParser.T__228);
                    }
                    break;
                case HyperTalkParser.T__229:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1711;
                        this.match(HyperTalkParser.T__229);
                    }
                    break;
                case HyperTalkParser.T__230:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1712;
                        this.match(HyperTalkParser.T__230);
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
    HyperTalkParser.prototype.cardinalValue = function () {
        var _localctx = new CardinalValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, HyperTalkParser.RULE_cardinalValue);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1715;
                _la = this._input.LA(1);
                if (!(((((_la - 232)) & ~0x1F) === 0 && ((1 << (_la - 232)) & ((1 << (HyperTalkParser.T__231 - 232)) | (1 << (HyperTalkParser.T__232 - 232)) | (1 << (HyperTalkParser.T__233 - 232)) | (1 << (HyperTalkParser.T__234 - 232)) | (1 << (HyperTalkParser.T__235 - 232)) | (1 << (HyperTalkParser.T__236 - 232)) | (1 << (HyperTalkParser.T__237 - 232)) | (1 << (HyperTalkParser.T__238 - 232)) | (1 << (HyperTalkParser.T__239 - 232)) | (1 << (HyperTalkParser.T__240 - 232)) | (1 << (HyperTalkParser.T__241 - 232)))) !== 0))) {
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
    HyperTalkParser.prototype.ordinal = function () {
        var _localctx = new OrdinalContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, HyperTalkParser.RULE_ordinal);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1718;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === HyperTalkParser.T__36) {
                    {
                        this.state = 1717;
                        this.match(HyperTalkParser.T__36);
                    }
                }
                this.state = 1720;
                this.ordinalValue();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    HyperTalkParser.prototype.ordinalValue = function () {
        var _localctx = new OrdinalValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, HyperTalkParser.RULE_ordinalValue);
        var _la;
        try {
            this.state = 1735;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case HyperTalkParser.T__242:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1722;
                        this.match(HyperTalkParser.T__242);
                    }
                    break;
                case HyperTalkParser.T__243:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1723;
                        this.match(HyperTalkParser.T__243);
                    }
                    break;
                case HyperTalkParser.T__244:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1724;
                        this.match(HyperTalkParser.T__244);
                    }
                    break;
                case HyperTalkParser.T__245:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1725;
                        this.match(HyperTalkParser.T__245);
                    }
                    break;
                case HyperTalkParser.T__246:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1726;
                        this.match(HyperTalkParser.T__246);
                    }
                    break;
                case HyperTalkParser.T__247:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1727;
                        this.match(HyperTalkParser.T__247);
                    }
                    break;
                case HyperTalkParser.T__248:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1728;
                        this.match(HyperTalkParser.T__248);
                    }
                    break;
                case HyperTalkParser.T__249:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1729;
                        this.match(HyperTalkParser.T__249);
                    }
                    break;
                case HyperTalkParser.T__250:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1730;
                        this.match(HyperTalkParser.T__250);
                    }
                    break;
                case HyperTalkParser.T__251:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1731;
                        this.match(HyperTalkParser.T__251);
                    }
                    break;
                case HyperTalkParser.T__252:
                case HyperTalkParser.T__253:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1732;
                        _la = this._input.LA(1);
                        if (!(_la === HyperTalkParser.T__252 || _la === HyperTalkParser.T__253)) {
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
                case HyperTalkParser.T__254:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1733;
                        this.match(HyperTalkParser.T__254);
                    }
                    break;
                case HyperTalkParser.T__255:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 1734;
                        this.match(HyperTalkParser.T__255);
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
    HyperTalkParser.prototype.mouseState = function () {
        var _localctx = new MouseStateContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, HyperTalkParser.RULE_mouseState);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1737;
                _la = this._input.LA(1);
                if (!(_la === HyperTalkParser.T__116 || _la === HyperTalkParser.T__256)) {
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
    HyperTalkParser.prototype.modifierKey = function () {
        var _localctx = new ModifierKeyContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, HyperTalkParser.RULE_modifierKey);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1739;
                _la = this._input.LA(1);
                if (!(_la === HyperTalkParser.T__87 || _la === HyperTalkParser.T__88 || _la === HyperTalkParser.T__180 || _la === HyperTalkParser.T__181)) {
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
    HyperTalkParser.prototype.knownType = function () {
        var _localctx = new KnownTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, HyperTalkParser.RULE_knownType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1741;
                _la = this._input.LA(1);
                if (!(_la === HyperTalkParser.T__101 || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (HyperTalkParser.T__172 - 173)) | (1 << (HyperTalkParser.T__173 - 173)) | (1 << (HyperTalkParser.T__184 - 173)))) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & ((1 << (HyperTalkParser.T__257 - 258)) | (1 << (HyperTalkParser.T__258 - 258)) | (1 << (HyperTalkParser.T__259 - 258)) | (1 << (HyperTalkParser.T__260 - 258)) | (1 << (HyperTalkParser.T__261 - 258)))) !== 0))) {
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
    HyperTalkParser.prototype.findType = function () {
        var _localctx = new FindTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, HyperTalkParser.RULE_findType);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1743;
                _la = this._input.LA(1);
                if (!(((((_la - 263)) & ~0x1F) === 0 && ((1 << (_la - 263)) & ((1 << (HyperTalkParser.T__262 - 263)) | (1 << (HyperTalkParser.T__263 - 263)) | (1 << (HyperTalkParser.T__264 - 263)) | (1 << (HyperTalkParser.T__265 - 263)))) !== 0))) {
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
    HyperTalkParser.prototype.propertyName = function () {
        var _localctx = new PropertyNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, HyperTalkParser.RULE_propertyName);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1745;
                _la = this._input.LA(1);
                if (!(_la === HyperTalkParser.T__37 || _la === HyperTalkParser.T__45 || _la === HyperTalkParser.T__120 || _la === HyperTalkParser.T__121 || ((((_la - 173)) & ~0x1F) === 0 && ((1 << (_la - 173)) & ((1 << (HyperTalkParser.T__172 - 173)) | (1 << (HyperTalkParser.T__173 - 173)) | (1 << (HyperTalkParser.T__184 - 173)))) !== 0) || ((((_la - 267)) & ~0x1F) === 0 && ((1 << (_la - 267)) & ((1 << (HyperTalkParser.T__266 - 267)) | (1 << (HyperTalkParser.T__267 - 267)) | (1 << (HyperTalkParser.T__268 - 267)) | (1 << (HyperTalkParser.T__269 - 267)) | (1 << (HyperTalkParser.T__270 - 267)) | (1 << (HyperTalkParser.T__271 - 267)) | (1 << (HyperTalkParser.T__272 - 267)) | (1 << (HyperTalkParser.T__273 - 267)) | (1 << (HyperTalkParser.T__274 - 267)) | (1 << (HyperTalkParser.T__275 - 267)))) !== 0) || _la === HyperTalkParser.ID)) {
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
    HyperTalkParser.prototype.propertyValue = function () {
        var _localctx = new PropertyValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, HyperTalkParser.RULE_propertyValue);
        try {
            this.state = 1755;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 143, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1747;
                        this.match(HyperTalkParser.T__276);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1748;
                        this.match(HyperTalkParser.T__26);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1749;
                        this.match(HyperTalkParser.T__270);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1750;
                        this.match(HyperTalkParser.T__271);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1751;
                        this.match(HyperTalkParser.T__272);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1752;
                        this.match(HyperTalkParser.T__273);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1753;
                        this.match(HyperTalkParser.T__274);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1754;
                        this.listExpression();
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
    HyperTalkParser.prototype.commandName = function () {
        var _localctx = new CommandNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, HyperTalkParser.RULE_commandName);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1757;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HyperTalkParser.T__10) | (1 << HyperTalkParser.T__12) | (1 << HyperTalkParser.T__15) | (1 << HyperTalkParser.T__17) | (1 << HyperTalkParser.T__18) | (1 << HyperTalkParser.T__20) | (1 << HyperTalkParser.T__22) | (1 << HyperTalkParser.T__25) | (1 << HyperTalkParser.T__27) | (1 << HyperTalkParser.T__28) | (1 << HyperTalkParser.T__29) | (1 << HyperTalkParser.T__30))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (HyperTalkParser.T__33 - 34)) | (1 << (HyperTalkParser.T__34 - 34)) | (1 << (HyperTalkParser.T__38 - 34)) | (1 << (HyperTalkParser.T__41 - 34)) | (1 << (HyperTalkParser.T__43 - 34)) | (1 << (HyperTalkParser.T__46 - 34)) | (1 << (HyperTalkParser.T__47 - 34)) | (1 << (HyperTalkParser.T__48 - 34)) | (1 << (HyperTalkParser.T__50 - 34)) | (1 << (HyperTalkParser.T__52 - 34)) | (1 << (HyperTalkParser.T__53 - 34)) | (1 << (HyperTalkParser.T__55 - 34)) | (1 << (HyperTalkParser.T__57 - 34)) | (1 << (HyperTalkParser.T__58 - 34)) | (1 << (HyperTalkParser.T__59 - 34)) | (1 << (HyperTalkParser.T__62 - 34)) | (1 << (HyperTalkParser.T__63 - 34)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (HyperTalkParser.T__66 - 67)) | (1 << (HyperTalkParser.T__68 - 67)) | (1 << (HyperTalkParser.T__73 - 67)) | (1 << (HyperTalkParser.T__74 - 67)) | (1 << (HyperTalkParser.T__75 - 67)) | (1 << (HyperTalkParser.T__76 - 67)) | (1 << (HyperTalkParser.T__85 - 67)) | (1 << (HyperTalkParser.T__86 - 67)) | (1 << (HyperTalkParser.T__89 - 67)) | (1 << (HyperTalkParser.T__90 - 67)) | (1 << (HyperTalkParser.T__92 - 67)))) !== 0))) {
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
    HyperTalkParser.prototype.picture = function () {
        var _localctx = new PictureContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, HyperTalkParser.RULE_picture);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1759;
                _la = this._input.LA(1);
                if (!(_la === HyperTalkParser.T__277 || _la === HyperTalkParser.T__278)) {
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
    HyperTalkParser.prototype.seconds = function () {
        var _localctx = new SecondsContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, HyperTalkParser.RULE_seconds);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1761;
                _la = this._input.LA(1);
                if (!(_la === HyperTalkParser.T__243 || ((((_la - 280)) & ~0x1F) === 0 && ((1 << (_la - 280)) & ((1 << (HyperTalkParser.T__279 - 280)) | (1 << (HyperTalkParser.T__280 - 280)) | (1 << (HyperTalkParser.T__281 - 280)))) !== 0))) {
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
    HyperTalkParser.prototype.speed = function () {
        var _localctx = new SpeedContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, HyperTalkParser.RULE_speed);
        var _la;
        try {
            this.state = 1769;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 144, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1763;
                        this.match(HyperTalkParser.T__282);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1764;
                        _la = this._input.LA(1);
                        if (!(_la === HyperTalkParser.T__283 || _la === HyperTalkParser.T__284)) {
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
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1765;
                        this.match(HyperTalkParser.T__285);
                        this.state = 1766;
                        this.match(HyperTalkParser.T__282);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1767;
                        this.match(HyperTalkParser.T__285);
                        this.state = 1768;
                        _la = this._input.LA(1);
                        if (!(_la === HyperTalkParser.T__283 || _la === HyperTalkParser.T__284)) {
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
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    HyperTalkParser.prototype.image = function () {
        var _localctx = new ImageContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, HyperTalkParser.RULE_image);
        var _la;
        try {
            this.state = 1776;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case HyperTalkParser.T__286:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1771;
                        this.match(HyperTalkParser.T__286);
                    }
                    break;
                case HyperTalkParser.T__287:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1772;
                        this.match(HyperTalkParser.T__287);
                    }
                    break;
                case HyperTalkParser.T__288:
                case HyperTalkParser.T__289:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1773;
                        _la = this._input.LA(1);
                        if (!(_la === HyperTalkParser.T__288 || _la === HyperTalkParser.T__289)) {
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
                case HyperTalkParser.T__290:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1774;
                        this.match(HyperTalkParser.T__290);
                    }
                    break;
                case HyperTalkParser.T__291:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1775;
                        this.match(HyperTalkParser.T__291);
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
    HyperTalkParser.prototype.effect = function () {
        var _localctx = new EffectContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, HyperTalkParser.RULE_effect);
        try {
            this.state = 1843;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1778;
                        this.match(HyperTalkParser.T__292);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1779;
                        this.match(HyperTalkParser.T__293);
                        this.state = 1780;
                        this.match(HyperTalkParser.T__294);
                        this.state = 1781;
                        this.match(HyperTalkParser.T__57);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1782;
                        this.match(HyperTalkParser.T__293);
                        this.state = 1783;
                        this.match(HyperTalkParser.T__294);
                        this.state = 1784;
                        this.match(HyperTalkParser.T__22);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1785;
                        this.match(HyperTalkParser.T__295);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1786;
                        this.match(HyperTalkParser.T__296);
                        this.state = 1787;
                        this.match(HyperTalkParser.T__57);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 1788;
                        this.match(HyperTalkParser.T__296);
                        this.state = 1789;
                        this.match(HyperTalkParser.T__22);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 1790;
                        this.match(HyperTalkParser.T__276);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 1791;
                        this.match(HyperTalkParser.T__61);
                        this.state = 1792;
                        this.match(HyperTalkParser.T__256);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 1793;
                        this.match(HyperTalkParser.T__61);
                        this.state = 1794;
                        this.match(HyperTalkParser.T__116);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 1795;
                        this.match(HyperTalkParser.T__61);
                        this.state = 1796;
                        this.match(HyperTalkParser.T__271);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 1797;
                        this.match(HyperTalkParser.T__61);
                        this.state = 1798;
                        this.match(HyperTalkParser.T__272);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 1799;
                        this.match(HyperTalkParser.T__275);
                        this.state = 1800;
                        this.match(HyperTalkParser.T__116);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 1801;
                        this.match(HyperTalkParser.T__275);
                        this.state = 1802;
                        this.match(HyperTalkParser.T__256);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 1803;
                        this.match(HyperTalkParser.T__275);
                        this.state = 1804;
                        this.match(HyperTalkParser.T__271);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 1805;
                        this.match(HyperTalkParser.T__275);
                        this.state = 1806;
                        this.match(HyperTalkParser.T__272);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 1807;
                        this.match(HyperTalkParser.T__297);
                        this.state = 1808;
                        this.match(HyperTalkParser.T__11);
                        this.state = 1809;
                        this.match(HyperTalkParser.T__273);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 1810;
                        this.match(HyperTalkParser.T__297);
                        this.state = 1811;
                        this.match(HyperTalkParser.T__11);
                        this.state = 1812;
                        this.match(HyperTalkParser.T__274);
                    }
                    break;
                case 18:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 1813;
                        this.match(HyperTalkParser.T__297);
                        this.state = 1814;
                        this.match(HyperTalkParser.T__11);
                        this.state = 1815;
                        this.match(HyperTalkParser.T__270);
                    }
                    break;
                case 19:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 1816;
                        this.match(HyperTalkParser.T__298);
                        this.state = 1817;
                        this.match(HyperTalkParser.T__24);
                        this.state = 1818;
                        this.match(HyperTalkParser.T__273);
                    }
                    break;
                case 20:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 1819;
                        this.match(HyperTalkParser.T__298);
                        this.state = 1820;
                        this.match(HyperTalkParser.T__24);
                        this.state = 1821;
                        this.match(HyperTalkParser.T__274);
                    }
                    break;
                case 21:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 1822;
                        this.match(HyperTalkParser.T__298);
                        this.state = 1823;
                        this.match(HyperTalkParser.T__24);
                        this.state = 1824;
                        this.match(HyperTalkParser.T__270);
                    }
                    break;
                case 22:
                    this.enterOuterAlt(_localctx, 22);
                    {
                        this.state = 1825;
                        this.match(HyperTalkParser.T__299);
                        this.state = 1826;
                        this.match(HyperTalkParser.T__300);
                    }
                    break;
                case 23:
                    this.enterOuterAlt(_localctx, 23);
                    {
                        this.state = 1827;
                        this.match(HyperTalkParser.T__301);
                        this.state = 1828;
                        this.match(HyperTalkParser.T__256);
                    }
                    break;
                case 24:
                    this.enterOuterAlt(_localctx, 24);
                    {
                        this.state = 1829;
                        this.match(HyperTalkParser.T__301);
                        this.state = 1830;
                        this.match(HyperTalkParser.T__116);
                    }
                    break;
                case 25:
                    this.enterOuterAlt(_localctx, 25);
                    {
                        this.state = 1831;
                        this.match(HyperTalkParser.T__301);
                        this.state = 1832;
                        this.match(HyperTalkParser.T__271);
                    }
                    break;
                case 26:
                    this.enterOuterAlt(_localctx, 26);
                    {
                        this.state = 1833;
                        this.match(HyperTalkParser.T__301);
                        this.state = 1834;
                        this.match(HyperTalkParser.T__272);
                    }
                    break;
                case 27:
                    this.enterOuterAlt(_localctx, 27);
                    {
                        this.state = 1835;
                        this.match(HyperTalkParser.T__302);
                        this.state = 1836;
                        this.match(HyperTalkParser.T__303);
                    }
                    break;
                case 28:
                    this.enterOuterAlt(_localctx, 28);
                    {
                        this.state = 1837;
                        this.match(HyperTalkParser.T__302);
                        this.state = 1838;
                        this.match(HyperTalkParser.T__304);
                    }
                    break;
                case 29:
                    this.enterOuterAlt(_localctx, 29);
                    {
                        this.state = 1839;
                        this.match(HyperTalkParser.T__302);
                        this.state = 1840;
                        this.match(HyperTalkParser.T__57);
                    }
                    break;
                case 30:
                    this.enterOuterAlt(_localctx, 30);
                    {
                        this.state = 1841;
                        this.match(HyperTalkParser.T__302);
                        this.state = 1842;
                        this.match(HyperTalkParser.T__22);
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
    HyperTalkParser.prototype.timeUnit = function () {
        var _localctx = new TimeUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, HyperTalkParser.RULE_timeUnit);
        try {
            this.state = 1848;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case HyperTalkParser.T__182:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1845;
                        this.match(HyperTalkParser.T__182);
                    }
                    break;
                case HyperTalkParser.T__305:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1846;
                        this.match(HyperTalkParser.T__305);
                    }
                    break;
                case HyperTalkParser.T__243:
                case HyperTalkParser.T__279:
                case HyperTalkParser.T__280:
                case HyperTalkParser.T__281:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1847;
                        this.seconds();
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
    HyperTalkParser.prototype.position = function () {
        var _localctx = new PositionContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, HyperTalkParser.RULE_position);
        var _la;
        try {
            this.state = 1859;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 150, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1851;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 1850;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 1853;
                        this.match(HyperTalkParser.T__56);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1855;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === HyperTalkParser.T__36) {
                            {
                                this.state = 1854;
                                this.match(HyperTalkParser.T__36);
                            }
                        }
                        this.state = 1857;
                        _la = this._input.LA(1);
                        if (!(_la === HyperTalkParser.T__306 || _la === HyperTalkParser.T__307)) {
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
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1858;
                        this.match(HyperTalkParser.T__77);
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
    HyperTalkParser.prototype.message = function () {
        var _localctx = new MessageContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, HyperTalkParser.RULE_message);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1862;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === HyperTalkParser.T__36) {
                    {
                        this.state = 1861;
                        this.match(HyperTalkParser.T__36);
                    }
                }
                this.state = 1864;
                _la = this._input.LA(1);
                if (!(_la === HyperTalkParser.T__122 || _la === HyperTalkParser.T__308)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1868;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 152, this._ctx)) {
                    case 1:
                        {
                            this.state = 1865;
                            this.match(HyperTalkParser.T__309);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1866;
                            this.match(HyperTalkParser.T__96);
                        }
                        break;
                    case 3:
                        // tslint:disable-next-line:no-empty
                        {
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
    HyperTalkParser.prototype.cards = function () {
        var _localctx = new CardsContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, HyperTalkParser.RULE_cards);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1870;
                _la = this._input.LA(1);
                if (!(_la === HyperTalkParser.T__310 || _la === HyperTalkParser.T__311)) {
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
    HyperTalkParser.prototype.card = function () {
        var _localctx = new CardContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, HyperTalkParser.RULE_card);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1872;
                _la = this._input.LA(1);
                if (!(_la === HyperTalkParser.T__287 || _la === HyperTalkParser.T__312)) {
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
    HyperTalkParser.prototype.background = function () {
        var _localctx = new BackgroundContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, HyperTalkParser.RULE_background);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1874;
                _la = this._input.LA(1);
                if (!(((((_la - 314)) & ~0x1F) === 0 && ((1 << (_la - 314)) & ((1 << (HyperTalkParser.T__313 - 314)) | (1 << (HyperTalkParser.T__314 - 314)) | (1 << (HyperTalkParser.T__315 - 314)) | (1 << (HyperTalkParser.T__316 - 314)) | (1 << (HyperTalkParser.T__317 - 314)) | (1 << (HyperTalkParser.T__318 - 314)))) !== 0))) {
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
    HyperTalkParser.prototype.button = function () {
        var _localctx = new ButtonContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, HyperTalkParser.RULE_button);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1876;
                _la = this._input.LA(1);
                if (!(_la === HyperTalkParser.T__165 || ((((_la - 320)) & ~0x1F) === 0 && ((1 << (_la - 320)) & ((1 << (HyperTalkParser.T__319 - 320)) | (1 << (HyperTalkParser.T__320 - 320)) | (1 << (HyperTalkParser.T__321 - 320)))) !== 0))) {
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
    HyperTalkParser.prototype.field = function () {
        var _localctx = new FieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, HyperTalkParser.RULE_field);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1878;
                _la = this._input.LA(1);
                if (!(_la === HyperTalkParser.T__164 || ((((_la - 323)) & ~0x1F) === 0 && ((1 << (_la - 323)) & ((1 << (HyperTalkParser.T__322 - 323)) | (1 << (HyperTalkParser.T__323 - 323)) | (1 << (HyperTalkParser.T__324 - 323)))) !== 0))) {
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
    HyperTalkParser.prototype.stack = function () {
        var _localctx = new StackContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, HyperTalkParser.RULE_stack);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1880;
                this.match(HyperTalkParser.T__78);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    HyperTalkParser.prototype.character = function () {
        var _localctx = new CharacterContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, HyperTalkParser.RULE_character);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1882;
                _la = this._input.LA(1);
                if (!(_la === HyperTalkParser.T__263 || ((((_la - 326)) & ~0x1F) === 0 && ((1 << (_la - 326)) & ((1 << (HyperTalkParser.T__325 - 326)) | (1 << (HyperTalkParser.T__326 - 326)) | (1 << (HyperTalkParser.T__327 - 326)))) !== 0))) {
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
    HyperTalkParser.prototype.word = function () {
        var _localctx = new WordContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, HyperTalkParser.RULE_word);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1884;
                _la = this._input.LA(1);
                if (!(_la === HyperTalkParser.T__262 || _la === HyperTalkParser.T__328)) {
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
    HyperTalkParser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, HyperTalkParser.RULE_line);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1886;
                _la = this._input.LA(1);
                if (!(_la === HyperTalkParser.T__166 || _la === HyperTalkParser.T__329)) {
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
    HyperTalkParser.prototype.item = function () {
        var _localctx = new ItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, HyperTalkParser.RULE_item);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1888;
                _la = this._input.LA(1);
                if (!(_la === HyperTalkParser.T__330 || _la === HyperTalkParser.T__331)) {
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
    HyperTalkParser.prototype.of = function () {
        var _localctx = new OfContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, HyperTalkParser.RULE_of);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1890;
                _la = this._input.LA(1);
                if (!(_la === HyperTalkParser.T__24 || _la === HyperTalkParser.T__185 || _la === HyperTalkParser.T__303)) {
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
    HyperTalkParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 6:
                return this.parameterList_sempred(_localctx, predIndex);
            case 28:
                return this.chunk_sempred(_localctx, predIndex);
            case 36:
                return this.buttonPart_sempred(_localctx, predIndex);
            case 37:
                return this.fieldPart_sempred(_localctx, predIndex);
            case 38:
                return this.cardPart_sempred(_localctx, predIndex);
            case 39:
                return this.bkgndPart_sempred(_localctx, predIndex);
            case 42:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    };
    HyperTalkParser.prototype.parameterList_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    HyperTalkParser.prototype.chunk_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 13);
        }
        return true;
    };
    HyperTalkParser.prototype.buttonPart_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    HyperTalkParser.prototype.fieldPart_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 3:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    HyperTalkParser.prototype.cardPart_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 4:
                return this.precpred(this._ctx, 2);
            case 5:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    HyperTalkParser.prototype.bkgndPart_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 6:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    HyperTalkParser.prototype.expression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 7:
                return this.precpred(this._ctx, 8);
            case 8:
                return this.precpred(this._ctx, 7);
            case 9:
                return this.precpred(this._ctx, 6);
            case 10:
                return this.precpred(this._ctx, 5);
            case 11:
                return this.precpred(this._ctx, 4);
            case 12:
                return this.precpred(this._ctx, 3);
            case 13:
                return this.precpred(this._ctx, 2);
            case 14:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    Object.defineProperty(HyperTalkParser, "_ATN", {
        get: function () {
            if (!HyperTalkParser.__ATN) {
                HyperTalkParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(HyperTalkParser._serializedATN));
            }
            return HyperTalkParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    HyperTalkParser.T__0 = 1;
    HyperTalkParser.T__1 = 2;
    HyperTalkParser.T__2 = 3;
    HyperTalkParser.T__3 = 4;
    HyperTalkParser.T__4 = 5;
    HyperTalkParser.T__5 = 6;
    HyperTalkParser.T__6 = 7;
    HyperTalkParser.T__7 = 8;
    HyperTalkParser.T__8 = 9;
    HyperTalkParser.T__9 = 10;
    HyperTalkParser.T__10 = 11;
    HyperTalkParser.T__11 = 12;
    HyperTalkParser.T__12 = 13;
    HyperTalkParser.T__13 = 14;
    HyperTalkParser.T__14 = 15;
    HyperTalkParser.T__15 = 16;
    HyperTalkParser.T__16 = 17;
    HyperTalkParser.T__17 = 18;
    HyperTalkParser.T__18 = 19;
    HyperTalkParser.T__19 = 20;
    HyperTalkParser.T__20 = 21;
    HyperTalkParser.T__21 = 22;
    HyperTalkParser.T__22 = 23;
    HyperTalkParser.T__23 = 24;
    HyperTalkParser.T__24 = 25;
    HyperTalkParser.T__25 = 26;
    HyperTalkParser.T__26 = 27;
    HyperTalkParser.T__27 = 28;
    HyperTalkParser.T__28 = 29;
    HyperTalkParser.T__29 = 30;
    HyperTalkParser.T__30 = 31;
    HyperTalkParser.T__31 = 32;
    HyperTalkParser.T__32 = 33;
    HyperTalkParser.T__33 = 34;
    HyperTalkParser.T__34 = 35;
    HyperTalkParser.T__35 = 36;
    HyperTalkParser.T__36 = 37;
    HyperTalkParser.T__37 = 38;
    HyperTalkParser.T__38 = 39;
    HyperTalkParser.T__39 = 40;
    HyperTalkParser.T__40 = 41;
    HyperTalkParser.T__41 = 42;
    HyperTalkParser.T__42 = 43;
    HyperTalkParser.T__43 = 44;
    HyperTalkParser.T__44 = 45;
    HyperTalkParser.T__45 = 46;
    HyperTalkParser.T__46 = 47;
    HyperTalkParser.T__47 = 48;
    HyperTalkParser.T__48 = 49;
    HyperTalkParser.T__49 = 50;
    HyperTalkParser.T__50 = 51;
    HyperTalkParser.T__51 = 52;
    HyperTalkParser.T__52 = 53;
    HyperTalkParser.T__53 = 54;
    HyperTalkParser.T__54 = 55;
    HyperTalkParser.T__55 = 56;
    HyperTalkParser.T__56 = 57;
    HyperTalkParser.T__57 = 58;
    HyperTalkParser.T__58 = 59;
    HyperTalkParser.T__59 = 60;
    HyperTalkParser.T__60 = 61;
    HyperTalkParser.T__61 = 62;
    HyperTalkParser.T__62 = 63;
    HyperTalkParser.T__63 = 64;
    HyperTalkParser.T__64 = 65;
    HyperTalkParser.T__65 = 66;
    HyperTalkParser.T__66 = 67;
    HyperTalkParser.T__67 = 68;
    HyperTalkParser.T__68 = 69;
    HyperTalkParser.T__69 = 70;
    HyperTalkParser.T__70 = 71;
    HyperTalkParser.T__71 = 72;
    HyperTalkParser.T__72 = 73;
    HyperTalkParser.T__73 = 74;
    HyperTalkParser.T__74 = 75;
    HyperTalkParser.T__75 = 76;
    HyperTalkParser.T__76 = 77;
    HyperTalkParser.T__77 = 78;
    HyperTalkParser.T__78 = 79;
    HyperTalkParser.T__79 = 80;
    HyperTalkParser.T__80 = 81;
    HyperTalkParser.T__81 = 82;
    HyperTalkParser.T__82 = 83;
    HyperTalkParser.T__83 = 84;
    HyperTalkParser.T__84 = 85;
    HyperTalkParser.T__85 = 86;
    HyperTalkParser.T__86 = 87;
    HyperTalkParser.T__87 = 88;
    HyperTalkParser.T__88 = 89;
    HyperTalkParser.T__89 = 90;
    HyperTalkParser.T__90 = 91;
    HyperTalkParser.T__91 = 92;
    HyperTalkParser.T__92 = 93;
    HyperTalkParser.T__93 = 94;
    HyperTalkParser.T__94 = 95;
    HyperTalkParser.T__95 = 96;
    HyperTalkParser.T__96 = 97;
    HyperTalkParser.T__97 = 98;
    HyperTalkParser.T__98 = 99;
    HyperTalkParser.T__99 = 100;
    HyperTalkParser.T__100 = 101;
    HyperTalkParser.T__101 = 102;
    HyperTalkParser.T__102 = 103;
    HyperTalkParser.T__103 = 104;
    HyperTalkParser.T__104 = 105;
    HyperTalkParser.T__105 = 106;
    HyperTalkParser.T__106 = 107;
    HyperTalkParser.T__107 = 108;
    HyperTalkParser.T__108 = 109;
    HyperTalkParser.T__109 = 110;
    HyperTalkParser.T__110 = 111;
    HyperTalkParser.T__111 = 112;
    HyperTalkParser.T__112 = 113;
    HyperTalkParser.T__113 = 114;
    HyperTalkParser.T__114 = 115;
    HyperTalkParser.T__115 = 116;
    HyperTalkParser.T__116 = 117;
    HyperTalkParser.T__117 = 118;
    HyperTalkParser.T__118 = 119;
    HyperTalkParser.T__119 = 120;
    HyperTalkParser.T__120 = 121;
    HyperTalkParser.T__121 = 122;
    HyperTalkParser.T__122 = 123;
    HyperTalkParser.T__123 = 124;
    HyperTalkParser.T__124 = 125;
    HyperTalkParser.T__125 = 126;
    HyperTalkParser.T__126 = 127;
    HyperTalkParser.T__127 = 128;
    HyperTalkParser.T__128 = 129;
    HyperTalkParser.T__129 = 130;
    HyperTalkParser.T__130 = 131;
    HyperTalkParser.T__131 = 132;
    HyperTalkParser.T__132 = 133;
    HyperTalkParser.T__133 = 134;
    HyperTalkParser.T__134 = 135;
    HyperTalkParser.T__135 = 136;
    HyperTalkParser.T__136 = 137;
    HyperTalkParser.T__137 = 138;
    HyperTalkParser.T__138 = 139;
    HyperTalkParser.T__139 = 140;
    HyperTalkParser.T__140 = 141;
    HyperTalkParser.T__141 = 142;
    HyperTalkParser.T__142 = 143;
    HyperTalkParser.T__143 = 144;
    HyperTalkParser.T__144 = 145;
    HyperTalkParser.T__145 = 146;
    HyperTalkParser.T__146 = 147;
    HyperTalkParser.T__147 = 148;
    HyperTalkParser.T__148 = 149;
    HyperTalkParser.T__149 = 150;
    HyperTalkParser.T__150 = 151;
    HyperTalkParser.T__151 = 152;
    HyperTalkParser.T__152 = 153;
    HyperTalkParser.T__153 = 154;
    HyperTalkParser.T__154 = 155;
    HyperTalkParser.T__155 = 156;
    HyperTalkParser.T__156 = 157;
    HyperTalkParser.T__157 = 158;
    HyperTalkParser.T__158 = 159;
    HyperTalkParser.T__159 = 160;
    HyperTalkParser.T__160 = 161;
    HyperTalkParser.T__161 = 162;
    HyperTalkParser.T__162 = 163;
    HyperTalkParser.T__163 = 164;
    HyperTalkParser.T__164 = 165;
    HyperTalkParser.T__165 = 166;
    HyperTalkParser.T__166 = 167;
    HyperTalkParser.T__167 = 168;
    HyperTalkParser.T__168 = 169;
    HyperTalkParser.T__169 = 170;
    HyperTalkParser.T__170 = 171;
    HyperTalkParser.T__171 = 172;
    HyperTalkParser.T__172 = 173;
    HyperTalkParser.T__173 = 174;
    HyperTalkParser.T__174 = 175;
    HyperTalkParser.T__175 = 176;
    HyperTalkParser.T__176 = 177;
    HyperTalkParser.T__177 = 178;
    HyperTalkParser.T__178 = 179;
    HyperTalkParser.T__179 = 180;
    HyperTalkParser.T__180 = 181;
    HyperTalkParser.T__181 = 182;
    HyperTalkParser.T__182 = 183;
    HyperTalkParser.T__183 = 184;
    HyperTalkParser.T__184 = 185;
    HyperTalkParser.T__185 = 186;
    HyperTalkParser.T__186 = 187;
    HyperTalkParser.T__187 = 188;
    HyperTalkParser.T__188 = 189;
    HyperTalkParser.T__189 = 190;
    HyperTalkParser.T__190 = 191;
    HyperTalkParser.T__191 = 192;
    HyperTalkParser.T__192 = 193;
    HyperTalkParser.T__193 = 194;
    HyperTalkParser.T__194 = 195;
    HyperTalkParser.T__195 = 196;
    HyperTalkParser.T__196 = 197;
    HyperTalkParser.T__197 = 198;
    HyperTalkParser.T__198 = 199;
    HyperTalkParser.T__199 = 200;
    HyperTalkParser.T__200 = 201;
    HyperTalkParser.T__201 = 202;
    HyperTalkParser.T__202 = 203;
    HyperTalkParser.T__203 = 204;
    HyperTalkParser.T__204 = 205;
    HyperTalkParser.T__205 = 206;
    HyperTalkParser.T__206 = 207;
    HyperTalkParser.T__207 = 208;
    HyperTalkParser.T__208 = 209;
    HyperTalkParser.T__209 = 210;
    HyperTalkParser.T__210 = 211;
    HyperTalkParser.T__211 = 212;
    HyperTalkParser.T__212 = 213;
    HyperTalkParser.T__213 = 214;
    HyperTalkParser.T__214 = 215;
    HyperTalkParser.T__215 = 216;
    HyperTalkParser.T__216 = 217;
    HyperTalkParser.T__217 = 218;
    HyperTalkParser.T__218 = 219;
    HyperTalkParser.T__219 = 220;
    HyperTalkParser.T__220 = 221;
    HyperTalkParser.T__221 = 222;
    HyperTalkParser.T__222 = 223;
    HyperTalkParser.T__223 = 224;
    HyperTalkParser.T__224 = 225;
    HyperTalkParser.T__225 = 226;
    HyperTalkParser.T__226 = 227;
    HyperTalkParser.T__227 = 228;
    HyperTalkParser.T__228 = 229;
    HyperTalkParser.T__229 = 230;
    HyperTalkParser.T__230 = 231;
    HyperTalkParser.T__231 = 232;
    HyperTalkParser.T__232 = 233;
    HyperTalkParser.T__233 = 234;
    HyperTalkParser.T__234 = 235;
    HyperTalkParser.T__235 = 236;
    HyperTalkParser.T__236 = 237;
    HyperTalkParser.T__237 = 238;
    HyperTalkParser.T__238 = 239;
    HyperTalkParser.T__239 = 240;
    HyperTalkParser.T__240 = 241;
    HyperTalkParser.T__241 = 242;
    HyperTalkParser.T__242 = 243;
    HyperTalkParser.T__243 = 244;
    HyperTalkParser.T__244 = 245;
    HyperTalkParser.T__245 = 246;
    HyperTalkParser.T__246 = 247;
    HyperTalkParser.T__247 = 248;
    HyperTalkParser.T__248 = 249;
    HyperTalkParser.T__249 = 250;
    HyperTalkParser.T__250 = 251;
    HyperTalkParser.T__251 = 252;
    HyperTalkParser.T__252 = 253;
    HyperTalkParser.T__253 = 254;
    HyperTalkParser.T__254 = 255;
    HyperTalkParser.T__255 = 256;
    HyperTalkParser.T__256 = 257;
    HyperTalkParser.T__257 = 258;
    HyperTalkParser.T__258 = 259;
    HyperTalkParser.T__259 = 260;
    HyperTalkParser.T__260 = 261;
    HyperTalkParser.T__261 = 262;
    HyperTalkParser.T__262 = 263;
    HyperTalkParser.T__263 = 264;
    HyperTalkParser.T__264 = 265;
    HyperTalkParser.T__265 = 266;
    HyperTalkParser.T__266 = 267;
    HyperTalkParser.T__267 = 268;
    HyperTalkParser.T__268 = 269;
    HyperTalkParser.T__269 = 270;
    HyperTalkParser.T__270 = 271;
    HyperTalkParser.T__271 = 272;
    HyperTalkParser.T__272 = 273;
    HyperTalkParser.T__273 = 274;
    HyperTalkParser.T__274 = 275;
    HyperTalkParser.T__275 = 276;
    HyperTalkParser.T__276 = 277;
    HyperTalkParser.T__277 = 278;
    HyperTalkParser.T__278 = 279;
    HyperTalkParser.T__279 = 280;
    HyperTalkParser.T__280 = 281;
    HyperTalkParser.T__281 = 282;
    HyperTalkParser.T__282 = 283;
    HyperTalkParser.T__283 = 284;
    HyperTalkParser.T__284 = 285;
    HyperTalkParser.T__285 = 286;
    HyperTalkParser.T__286 = 287;
    HyperTalkParser.T__287 = 288;
    HyperTalkParser.T__288 = 289;
    HyperTalkParser.T__289 = 290;
    HyperTalkParser.T__290 = 291;
    HyperTalkParser.T__291 = 292;
    HyperTalkParser.T__292 = 293;
    HyperTalkParser.T__293 = 294;
    HyperTalkParser.T__294 = 295;
    HyperTalkParser.T__295 = 296;
    HyperTalkParser.T__296 = 297;
    HyperTalkParser.T__297 = 298;
    HyperTalkParser.T__298 = 299;
    HyperTalkParser.T__299 = 300;
    HyperTalkParser.T__300 = 301;
    HyperTalkParser.T__301 = 302;
    HyperTalkParser.T__302 = 303;
    HyperTalkParser.T__303 = 304;
    HyperTalkParser.T__304 = 305;
    HyperTalkParser.T__305 = 306;
    HyperTalkParser.T__306 = 307;
    HyperTalkParser.T__307 = 308;
    HyperTalkParser.T__308 = 309;
    HyperTalkParser.T__309 = 310;
    HyperTalkParser.T__310 = 311;
    HyperTalkParser.T__311 = 312;
    HyperTalkParser.T__312 = 313;
    HyperTalkParser.T__313 = 314;
    HyperTalkParser.T__314 = 315;
    HyperTalkParser.T__315 = 316;
    HyperTalkParser.T__316 = 317;
    HyperTalkParser.T__317 = 318;
    HyperTalkParser.T__318 = 319;
    HyperTalkParser.T__319 = 320;
    HyperTalkParser.T__320 = 321;
    HyperTalkParser.T__321 = 322;
    HyperTalkParser.T__322 = 323;
    HyperTalkParser.T__323 = 324;
    HyperTalkParser.T__324 = 325;
    HyperTalkParser.T__325 = 326;
    HyperTalkParser.T__326 = 327;
    HyperTalkParser.T__327 = 328;
    HyperTalkParser.T__328 = 329;
    HyperTalkParser.T__329 = 330;
    HyperTalkParser.T__330 = 331;
    HyperTalkParser.T__331 = 332;
    HyperTalkParser.ID = 333;
    HyperTalkParser.BREAK = 334;
    HyperTalkParser.LITERAL = 335;
    HyperTalkParser.INTEGER_LITERAL = 336;
    HyperTalkParser.NUMBER_LITERAL = 337;
    HyperTalkParser.STRING_LITERAL = 338;
    HyperTalkParser.ALPHA = 339;
    HyperTalkParser.DIGIT = 340;
    HyperTalkParser.COMMENT = 341;
    HyperTalkParser.NEWLINE = 342;
    HyperTalkParser.WHITESPACE = 343;
    HyperTalkParser.UNLEXED_CHAR = 344;
    HyperTalkParser.RULE_script = 0;
    HyperTalkParser.RULE_scriptlet = 1;
    HyperTalkParser.RULE_multilineScriptlet = 2;
    HyperTalkParser.RULE_handler = 3;
    HyperTalkParser.RULE_function = 4;
    HyperTalkParser.RULE_handlerName = 5;
    HyperTalkParser.RULE_parameterList = 6;
    HyperTalkParser.RULE_statementList = 7;
    HyperTalkParser.RULE_statement = 8;
    HyperTalkParser.RULE_globalStmnt = 9;
    HyperTalkParser.RULE_returnStmnt = 10;
    HyperTalkParser.RULE_ifStatement = 11;
    HyperTalkParser.RULE_thenStatement = 12;
    HyperTalkParser.RULE_elseStatement = 13;
    HyperTalkParser.RULE_repeatStatement = 14;
    HyperTalkParser.RULE_messageStatement = 15;
    HyperTalkParser.RULE_commandStmnt = 16;
    HyperTalkParser.RULE_remoteNavOption = 17;
    HyperTalkParser.RULE_convertible = 18;
    HyperTalkParser.RULE_conversionFormat = 19;
    HyperTalkParser.RULE_length = 20;
    HyperTalkParser.RULE_sortDirection = 21;
    HyperTalkParser.RULE_sortChunkType = 22;
    HyperTalkParser.RULE_sortStyle = 23;
    HyperTalkParser.RULE_repeatRange = 24;
    HyperTalkParser.RULE_duration = 25;
    HyperTalkParser.RULE_count = 26;
    HyperTalkParser.RULE_range = 27;
    HyperTalkParser.RULE_chunk = 28;
    HyperTalkParser.RULE_menu = 29;
    HyperTalkParser.RULE_menuItem = 30;
    HyperTalkParser.RULE_property = 31;
    HyperTalkParser.RULE_globalProperty = 32;
    HyperTalkParser.RULE_partProperty = 33;
    HyperTalkParser.RULE_part = 34;
    HyperTalkParser.RULE_stackPart = 35;
    HyperTalkParser.RULE_buttonPart = 36;
    HyperTalkParser.RULE_fieldPart = 37;
    HyperTalkParser.RULE_cardPart = 38;
    HyperTalkParser.RULE_bkgndPart = 39;
    HyperTalkParser.RULE_windowPart = 40;
    HyperTalkParser.RULE_listExpression = 41;
    HyperTalkParser.RULE_expression = 42;
    HyperTalkParser.RULE_factor = 43;
    HyperTalkParser.RULE_container = 44;
    HyperTalkParser.RULE_musicExpression = 45;
    HyperTalkParser.RULE_toolExpression = 46;
    HyperTalkParser.RULE_effectExpression = 47;
    HyperTalkParser.RULE_functionCall = 48;
    HyperTalkParser.RULE_builtInFunc = 49;
    HyperTalkParser.RULE_zeroArgFunc = 50;
    HyperTalkParser.RULE_singleArgFunc = 51;
    HyperTalkParser.RULE_multiArgFunc = 52;
    HyperTalkParser.RULE_literal = 53;
    HyperTalkParser.RULE_preposition = 54;
    HyperTalkParser.RULE_constant = 55;
    HyperTalkParser.RULE_cardinalValue = 56;
    HyperTalkParser.RULE_ordinal = 57;
    HyperTalkParser.RULE_ordinalValue = 58;
    HyperTalkParser.RULE_mouseState = 59;
    HyperTalkParser.RULE_modifierKey = 60;
    HyperTalkParser.RULE_knownType = 61;
    HyperTalkParser.RULE_findType = 62;
    HyperTalkParser.RULE_propertyName = 63;
    HyperTalkParser.RULE_propertyValue = 64;
    HyperTalkParser.RULE_commandName = 65;
    HyperTalkParser.RULE_picture = 66;
    HyperTalkParser.RULE_seconds = 67;
    HyperTalkParser.RULE_speed = 68;
    HyperTalkParser.RULE_image = 69;
    HyperTalkParser.RULE_effect = 70;
    HyperTalkParser.RULE_timeUnit = 71;
    HyperTalkParser.RULE_position = 72;
    HyperTalkParser.RULE_message = 73;
    HyperTalkParser.RULE_cards = 74;
    HyperTalkParser.RULE_card = 75;
    HyperTalkParser.RULE_background = 76;
    HyperTalkParser.RULE_button = 77;
    HyperTalkParser.RULE_field = 78;
    HyperTalkParser.RULE_stack = 79;
    HyperTalkParser.RULE_character = 80;
    HyperTalkParser.RULE_word = 81;
    HyperTalkParser.RULE_line = 82;
    HyperTalkParser.RULE_item = 83;
    HyperTalkParser.RULE_of = 84;
    // tslint:disable:no-trailing-whitespace
    HyperTalkParser.ruleNames = [
        "script", "scriptlet", "multilineScriptlet", "handler", "function", "handlerName",
        "parameterList", "statementList", "statement", "globalStmnt", "returnStmnt",
        "ifStatement", "thenStatement", "elseStatement", "repeatStatement", "messageStatement",
        "commandStmnt", "remoteNavOption", "convertible", "conversionFormat",
        "length", "sortDirection", "sortChunkType", "sortStyle", "repeatRange",
        "duration", "count", "range", "chunk", "menu", "menuItem", "property",
        "globalProperty", "partProperty", "part", "stackPart", "buttonPart", "fieldPart",
        "cardPart", "bkgndPart", "windowPart", "listExpression", "expression",
        "factor", "container", "musicExpression", "toolExpression", "effectExpression",
        "functionCall", "builtInFunc", "zeroArgFunc", "singleArgFunc", "multiArgFunc",
        "literal", "preposition", "constant", "cardinalValue", "ordinal", "ordinalValue",
        "mouseState", "modifierKey", "knownType", "findType", "propertyName",
        "propertyValue", "commandName", "picture", "seconds", "speed", "image",
        "effect", "timeUnit", "position", "message", "cards", "card", "background",
        "button", "field", "stack", "character", "word", "line", "item", "of",
    ];
    HyperTalkParser._LITERAL_NAMES = [
        undefined, "'on'", "'end'", "'function'", "','", "'global'", "'return'",
        "'if'", "'then'", "'else'", "'repeat'", "'add'", "'to'", "'answer'", "'with'",
        "'or'", "'ask'", "'file'", "'beep'", "'choose'", "'tool'", "'click'",
        "'at'", "'close'", "'convert'", "'from'", "'create'", "'menu'", "'delete'",
        "'dial'", "'disable'", "'divide'", "'by'", "'do'", "'domenu'", "'drag'",
        "'edit'", "'the'", "'script'", "'enable'", "'exit'", "'hypercard'", "'export'",
        "'paint'", "'find'", "'international'", "'marked'", "'get'", "'go'", "'visual'",
        "'back'", "'hide'", "'titlebar'", "'import'", "'lock'", "'screen'", "'multiply'",
        "'next'", "'open'", "'pass'", "'play'", "'pop'", "'push'", "'put'", "'read'",
        "'for'", "'until'", "'reset'", "'menubar'", "'select'", "'empty'", "'text'",
        "'before'", "'after'", "'set'", "'send'", "'show'", "'sort'", "'this'",
        "'stack'", "'speak'", "'male'", "'female'", "'neuter'", "'robotic'", "'voice'",
        "'subtract'", "'type'", "'commandkey'", "'cmdkey'", "'unlock'", "'wait'",
        "'while'", "'write'", "'eof'", "'in a'", "'new'", "'window'", "'without'",
        "'dialog'", "'and'", "'dateitems'", "'date'", "'time'", "'english'", "'long'",
        "'abbreviated'", "'abbrev'", "'abbr'", "'short'", "'ascending'", "'descending'",
        "'numeric'", "'datetime'", "'='", "'forever'", "'times'", "'down'", "'menuitem'",
        "'part'", "'me'", "'id'", "'pattern'", "'message'", "'watcher'", "'variable'",
        "'not'", "'-'", "'there is a'", "'there is an'", "'there is no'", "'there is not a'",
        "'there is not an'", "'^'", "'mod'", "'div'", "'/'", "'*'", "'+'", "'&&'",
        "'&'", "'>='", "'<='", "'\u2264'", "'\u2265'", "'<'", "'>'", "'contains'",
        "'is in'", "'is not in'", "'is a'", "'is an'", "'is not a'", "'is not an'",
        "'is within'", "'is not within'", "'is not'", "'is'", "'<>'", "'\u2260'",
        "'('", "')'", "'selection'", "'target'", "'tempo'", "'field'", "'button'",
        "'line'", "'reg'", "'regular'", "'poly'", "'polygon'", "'round'", "'rect'",
        "'rectangle'", "'spray'", "'can'", "'effect'", "'mouse'", "'mouseloc'",
        "'result'", "'shiftkey'", "'optionkey'", "'ticks'", "'mouseclick'", "'number'",
        "'of'", "'parts'", "'menus'", "'windows'", "'diskspace'", "'params'",
        "'paramcount'", "'speech'", "'voices'", "'stacks'", "'average'", "'min'",
        "'max'", "'sum'", "'menuitems'", "'random'", "'sqrt'", "'trunc'", "'sin'",
        "'cos'", "'tan'", "'atan'", "'exp'", "'exp1'", "'exp2'", "'ln'", "'ln1'",
        "'log2'", "'abs'", "'chartonum'", "'numtochar'", "'value'", "'length'",
        "'param'", "'annuity'", "'compound'", "'offset'", "'into'", "'pi'", "'quote'",
        "'space'", "'tab'", "'formfeed'", "'linefeed'", "'comma'", "'colon'",
        "'zero'", "'one'", "'two'", "'three'", "'four'", "'five'", "'six'", "'seven'",
        "'eight'", "'nine'", "'ten'", "'first'", "'second'", "'third'", "'fourth'",
        "'fifth'", "'sixth'", "'seventh'", "'eighth'", "'ninth'", "'tenth'", "'mid'",
        "'middle'", "'last'", "'any'", "'up'", "'integer'", "'point'", "'logical'",
        "'boolean'", "'bool'", "'word'", "'chars'", "'whole'", "'string'", "'selectedtext'",
        "'selectedchunk'", "'selectedfield'", "'selectedline'", "'bottom'", "'left'",
        "'right'", "'top'", "'center'", "'scroll'", "'plain'", "'picture'", "'pict'",
        "'seconds'", "'secs'", "'sec'", "'fast'", "'slow'", "'slowly'", "'very'",
        "'black'", "'card'", "'gray'", "'grey'", "'inverse'", "'white'", "'dissolve'",
        "'barn'", "'door'", "'checkerboard'", "'iris'", "'shrink'", "'stretch'",
        "'venetian'", "'blinds'", "'wipe'", "'zoom'", "'in'", "'out'", "'tick'",
        "'prev'", "'previous'", "'msg'", "'box'", "'cards'", "'cds'", "'cd'",
        "'background'", "'backgrounds'", "'bkgnd'", "'bkgnds'", "'bg'", "'bgs'",
        "'buttons'", "'btn'", "'btns'", "'fields'", "'fld'", "'flds'", "'character'",
        "'characters'", "'char'", "'words'", "'lines'", "'item'", "'items'",
    ];
    HyperTalkParser._SYMBOLIC_NAMES = [
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
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        undefined, undefined, undefined, undefined, "ID", "BREAK", "LITERAL",
        "INTEGER_LITERAL", "NUMBER_LITERAL", "STRING_LITERAL", "ALPHA", "DIGIT",
        "COMMENT", "NEWLINE", "WHITESPACE", "UNLEXED_CHAR",
    ];
    HyperTalkParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(HyperTalkParser._LITERAL_NAMES, HyperTalkParser._SYMBOLIC_NAMES, []);
    HyperTalkParser._serializedATNSegments = 4;
    HyperTalkParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u015A\u0767\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
        "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
        "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
        "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
        "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
        "#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
        "+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
        "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\xB6" +
        "\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xBC\n\x03\x03\x04\x03\x04" +
        "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
        "\xC8\n\x04\x03\x05\x03\x05\x03\x05\x06\x05\xCD\n\x05\r\x05\x0E\x05\xCE" +
        "\x03\x05\x05\x05\xD2\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x05\x06\x05\xDB\n\x05\r\x05\x0E\x05\xDC\x03\x05\x05\x05\xE0\n" +
        "\x05\x03\x05\x03\x05\x03\x05\x05\x05\xE5\n\x05\x03\x06\x03\x06\x03\x06" +
        "\x06\x06\xEA\n\x06\r\x06\x0E\x06\xEB\x03\x06\x05\x06\xEF\n\x06\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06\xF7\n\x06\r\x06\x0E\x06" +
        "\xF8\x03\x06\x05\x06\xFC\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0101\n" +
        "\x06\x03\x07\x03\x07\x05\x07\u0105\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b" +
        "\x03\b\x07\b\u010D\n\b\f\b\x0E\b\u0110\v\b\x03\t\x03\t\x06\t\u0114\n\t" +
        "\r\t\x0E\t\u0115\x03\t\x03\t\x03\t\x03\t\x06\t\u011C\n\t\r\t\x0E\t\u011D" +
        "\x05\t\u0120\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n" +
        "\u012A\n\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x05\f\u0132\n\f\x03\r\x03" +
        "\r\x03\r\x03\r\x03\x0E\x05\x0E\u0139\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
        "\x0E\u013E\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0143\n\x0E\x03\x0E\x05" +
        "\x0E\u0146\n\x0E\x03\x0E\x05\x0E\u0149\n\x0E\x03\x0E\x03\x0E\x06\x0E\u014D" +
        "\n\x0E\r\x0E\x0E\x0E\u014E\x03\x0E\x05\x0E\u0152\n\x0E\x03\x0E\x03\x0E" +
        "\x03\x0E\x05\x0E\u0157\n\x0E\x05\x0E\u0159\n\x0E\x03\x0F\x03\x0F\x03\x0F" +
        "\x06\x0F\u015E\n\x0F\r\x0F\x0E\x0F\u015F\x03\x0F\x03\x0F\x05\x0F\u0164" +
        "\n\x0F\x03\x0F\x03\x0F\x06\x0F\u0168\n\x0F\r\x0F\x0E\x0F\u0169\x03\x0F" +
        "\x05\x0F\u016D\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0171\n\x0F\x03\x10\x03\x10" +
        "\x03\x10\x06\x10\u0176\n\x10\r\x10\x0E\x10\u0177\x03\x10\x03\x10\x03\x10" +
        "\x03\x10\x03\x10\x03\x10\x03\x10\x06\x10\u0181\n\x10\r\x10\x0E\x10\u0182" +
        "\x03\x10\x03\x10\x03\x10\x05\x10\u0188\n\x10\x03\x11\x03\x11\x03\x11\x05" +
        "\x11\u018D\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01C1" +
        "\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x05\x12\u020C\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0222\n\x12" +
        "\x03\x12\x05\x12\u0225\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0230\n\x12\x03\x12\x05\x12\u0233" +
        "\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u023B\n" +
        "\x12\x03\x12\x05\x12\u023E\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x05\x12\u0247\n\x12\x03\x12\x05\x12\u024A\n\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0251\n\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u025A\n\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u02B6" +
        "\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12" +
        "\u0307\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x05\x12\u0311\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12" +
        "\u0318\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05" +
        "\x12\u0321\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12" +
        "\u0329\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0339\n\x12" +
        "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
        "\x03\x12\x05\x12\u0345\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0398\n\x12\x03\x13\x03\x13\x03\x13" +
        "\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13" +
        "\u03A5\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u03AC\n\x14" +
        "\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15" +
        "\u03B6\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u03BC\n\x16\x03\x17" +
        "\x03\x17\x03\x17\x05\x17\u03C1\n\x17\x03\x18\x05\x18\u03C4\n\x18\x03\x18" +
        "\x03\x18\x03\x18\x03\x18\x05\x18\u03CA\n\x18\x03\x18\x03\x18\x03\x18\x03" +
        "\x18\x05\x18\u03D0\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u03D6" +
        "\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u03DC\n\x18\x03\x19\x03" +
        "\x19\x03\x19\x03\x19\x03\x19\x05\x19\u03E3\n\x19\x03\x1A\x03\x1A\x03\x1A" +
        "\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u03ED\n\x1A\x03\x1B\x03" +
        "\x1B\x03\x1B\x03\x1B\x05\x1B\u03F3\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
        "\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u03FF\n\x1C\x03" +
        "\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05" +
        "\x1D\u040A\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
        "\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0445\n\x1E\x03\x1E\x03" +
        "\x1E\x07\x1E\u0449\n\x1E\f\x1E\x0E\x1E\u044C\v\x1E\x03\x1F\x03\x1F\x03" +
        "\x1F\x03\x1F\x03\x1F\x05\x1F\u0453\n\x1F\x03 \x03 \x03 \x03 \x03 \x03" +
        " \x03 \x03 \x03 \x03 \x05 \u045F\n \x03!\x03!\x05!\u0463\n!\x03\"\x05" +
        "\"\u0466\n\"\x03\"\x03\"\x03#\x05#\u046B\n#\x03#\x03#\x03#\x03#\x03#\x05" +
        "#\u0472\n#\x03#\x03#\x03#\x03#\x03#\x05#\u0479\n#\x03$\x03$\x03$\x03$" +
        "\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u048B" +
        "\n$\x03%\x05%\u048E\n%\x03%\x03%\x03%\x03%\x05%\u0494\n%\x03&\x03&\x05" +
        "&\u0498\n&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u04A4" +
        "\n&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u04AF\n&\x03&\x03" +
        "&\x03&\x03&\x03&\x03&\x05&\u04B7\n&\x03&\x03&\x03&\x03&\x07&\u04BD\n&" +
        "\f&\x0E&\u04C0\v&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u04C9" +
        "\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u04D4" +
        "\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u04DF" +
        "\n\'\x03\'\x03\'\x05\'\u04E3\n\'\x03\'\x03\'\x03\'\x03\'\x07\'\u04E9\n" +
        "\'\f\'\x0E\'\u04EC\v\'\x03(\x03(\x05(\u04F0\n(\x03(\x03(\x03(\x03(\x03" +
        "(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0500\n(\x03(\x03" +
        "(\x03(\x03(\x03(\x03(\x03(\x03(\x07(\u050A\n(\f(\x0E(\u050D\v(\x03)\x03" +
        ")\x05)\u0511\n)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
        ")\x03)\x03)\x03)\x05)\u0521\n)\x03)\x03)\x03)\x03)\x07)\u0527\n)\f)\x0E" +
        ")\u052A\v)\x03*\x05*\u052D\n*\x03*\x03*\x03*\x03*\x05*\u0533\n*\x03*\x03" +
        "*\x03*\x05*\u0538\n*\x03*\x03*\x03*\x05*\u053D\n*\x03*\x03*\x03*\x05*" +
        "\u0542\n*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u054B\n*\x03+\x03+\x03" +
        "+\x03+\x03+\x05+\u0552\n+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05" +
        ",\u055C\n,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
        ",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x07,\u0576" +
        "\n,\f,\x0E,\u0579\v,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
        "-\x03-\x03-\x03-\x05-\u0588\n-\x03.\x03.\x05.\u058C\n.\x03.\x03.\x03." +
        "\x03.\x03.\x03.\x03.\x03.\x03.\x05.\u0597\n.\x03/\x03/\x03/\x03/\x03/" +
        "\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x05/\u05A6\n/\x030\x030\x030" +
        "\x030\x030\x030\x050\u05AE\n0\x030\x030\x050\u05B2\n0\x030\x030\x030\x05" +
        "0\u05B7\n0\x030\x050\u05BA\n0\x031\x051\u05BD\n1\x031\x031\x051\u05C1" +
        "\n1\x031\x031\x031\x031\x031\x051\u05C8\n1\x031\x031\x031\x031\x051\u05CE" +
        "\n1\x031\x031\x031\x031\x031\x051\u05D5\n1\x032\x032\x032\x032\x052\u05DB" +
        "\n2\x032\x052\u05DE\n2\x033\x033\x033\x053\u05E3\n3\x033\x033\x033\x03" +
        "3\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x053\u05F3\n3\x03" +
        "4\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x03" +
        "4\x034\x034\x034\x034\x054\u0608\n4\x034\x034\x034\x034\x034\x034\x03" +
        "4\x034\x034\x054\u0613\n4\x034\x034\x034\x034\x034\x034\x034\x034\x03" +
        "4\x034\x034\x034\x034\x034\x054\u0623\n4\x034\x034\x034\x034\x034\x03" +
        "4\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x03" +
        "4\x034\x034\x034\x034\x034\x034\x054\u063F\n4\x035\x035\x035\x035\x03" +
        "5\x035\x035\x055\u0648\n5\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
        "5\x055\u0653\n5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
        "5\x035\x035\x035\x055\u0663\n5\x035\x035\x035\x035\x035\x035\x035\x03" +
        "5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
        "5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
        "5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x035\x03" +
        "5\x055\u0697\n5\x036\x036\x036\x036\x056\u069D\n6\x037\x037\x037\x037" +
        "\x037\x037\x057\u06A5\n7\x038\x038\x039\x039\x039\x039\x039\x039\x039" +
        "\x039\x039\x039\x039\x059\u06B4\n9\x03:\x03:\x03;\x05;\u06B9\n;\x03;\x03" +
        ";\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05" +
        "<\u06CA\n<\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x03A\x03A\x03B\x03" +
        "B\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u06DE\nB\x03C\x03C\x03D\x03D\x03" +
        "E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u06EC\nF\x03G\x03G\x03G\x03" +
        "G\x03G\x05G\u06F3\nG\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
        "H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
        "H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
        "H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
        "H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05" +
        "H\u0736\nH\x03I\x03I\x03I\x05I\u073B\nI\x03J\x05J\u073E\nJ\x03J\x03J\x05" +
        "J\u0742\nJ\x03J\x03J\x05J\u0746\nJ\x03K\x05K\u0749\nK\x03K\x03K\x03K\x03" +
        "K\x05K\u074F\nK\x03L\x03L\x03M\x03M\x03N\x03N\x03O\x03O\x03P\x03P\x03" +
        "Q\x03Q\x03R\x03R\x03S\x03S\x03T\x03T\x03U\x03U\x03V\x03V\x03V\x02\x02" +
        "\t\x0E:JLNPVW\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
        "\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
        "&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
        "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
        "^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
        "z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
        "\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
        "\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\x02)\x03\x02SV\x03\x02" +
        "Z[\x04\x02\x04\x04``\x03\x02jk\x03\x02ln\x03\x02\x82\x86\x03\x02\x88\x8B" +
        "\x04\x02\x81\x81\x8C\x8C\x03\x02\x8D\x8E\x03\x02\x8F\x9D\x04\x02tt\x9E" +
        "\xA1\x03\x02\xAA\xAB\x03\x02\xAC\xAD\x03\x02\xAF\xB0\x04\x02JK\xE1\xE1" +
        "\x03\x02\xEA\xF4\x03\x02\xFF\u0100\x04\x02ww\u0103\u0103\x04\x02Z[\xB7" +
        "\xB8\x06\x02hh\xAF\xB0\xBB\xBB\u0104\u0108\x03\x02\u0109\u010C\t\x02(" +
        "(00{|\xAF\xB0\xBB\xBB\u010D\u0116\u014F\u014F\x1A\x02\r\r\x0F\x0F\x12" +
        "\x12\x14\x15\x17\x17\x19\x19\x1C\x1C\x1E!$%)),,..135578::<>ABEEGGLOXY" +
        "\\]__\x03\x02\u0118\u0119\x04\x02\xF6\xF6\u011A\u011C\x03\x02\u011E\u011F" +
        "\x03\x02\u0123\u0124\x03\x02\u0135\u0136\x04\x02}}\u0137\u0137\x03\x02" +
        "\u0139\u013A\x04\x02\u0122\u0122\u013B\u013B\x03\x02\u013C\u0141\x04\x02" +
        "\xA8\xA8\u0142\u0144\x04\x02\xA7\xA7\u0145\u0147\x04\x02\u010A\u010A\u0148" +
        "\u014A\x04\x02\u0109\u0109\u014B\u014B\x04\x02\xA9\xA9\u014C\u014C\x03" +
        "\x02\u014D\u014E\x05\x02\x1B\x1B\xBC\xBC\u0132\u0132\x02\u08FC\x02\xB5" +
        "\x03\x02\x02\x02\x04\xBB\x03\x02\x02\x02\x06\xC7\x03\x02\x02\x02\b\xE4" +
        "\x03\x02\x02\x02\n\u0100\x03\x02\x02\x02\f\u0104\x03\x02\x02\x02\x0E\u0106" +
        "\x03\x02\x02\x02\x10\u011F\x03\x02\x02\x02\x12\u0129\x03\x02\x02\x02\x14" +
        "\u012B\x03\x02\x02\x02\x16\u0131\x03\x02\x02\x02\x18\u0133\x03\x02\x02" +
        "\x02\x1A\u0158\x03\x02\x02\x02\x1C\u0170\x03\x02\x02\x02\x1E\u0187\x03" +
        "\x02\x02\x02 \u018C\x03\x02\x02\x02\"\u0397\x03\x02\x02\x02$\u03A4\x03" +
        "\x02\x02\x02&\u03AB\x03\x02\x02\x02(\u03B5\x03\x02\x02\x02*\u03BB\x03" +
        "\x02\x02\x02,\u03C0\x03\x02\x02\x02.\u03DB\x03\x02\x02\x020\u03E2\x03" +
        "\x02\x02\x022\u03EC\x03\x02\x02\x024\u03F2\x03\x02\x02\x026\u03FE\x03" +
        "\x02\x02\x028\u0409\x03\x02\x02\x02:\u0444\x03\x02\x02\x02<\u0452\x03" +
        "\x02\x02\x02>\u045E\x03\x02\x02\x02@\u0462\x03\x02\x02\x02B\u0465\x03" +
        "\x02\x02\x02D\u0478\x03\x02\x02\x02F\u048A\x03\x02\x02\x02H\u0493\x03" +
        "\x02\x02\x02J\u04B6\x03\x02\x02\x02L\u04E2\x03\x02\x02\x02N\u04FF\x03" +
        "\x02\x02\x02P\u0520\x03\x02\x02\x02R\u054A\x03\x02\x02\x02T\u0551\x03" +
        "\x02\x02\x02V\u055B\x03\x02\x02\x02X\u0587\x03\x02\x02\x02Z\u0596\x03" +
        "\x02\x02\x02\\\u05A5\x03\x02\x02\x02^\u05B9\x03\x02\x02\x02`\u05D4\x03" +
        "\x02\x02\x02b\u05DD\x03\x02\x02\x02d\u05F2\x03\x02\x02\x02f\u063E\x03" +
        "\x02\x02\x02h\u0696\x03\x02\x02\x02j\u069C\x03\x02\x02\x02l\u06A4\x03" +
        "\x02\x02\x02n\u06A6\x03\x02\x02\x02p\u06B3\x03\x02\x02\x02r\u06B5\x03" +
        "\x02\x02\x02t\u06B8\x03\x02\x02\x02v\u06C9\x03\x02\x02\x02x\u06CB\x03" +
        "\x02\x02\x02z\u06CD\x03\x02\x02\x02|\u06CF\x03\x02\x02\x02~\u06D1\x03" +
        "\x02\x02\x02\x80\u06D3\x03\x02\x02\x02\x82\u06DD\x03\x02\x02\x02\x84\u06DF" +
        "\x03\x02\x02\x02\x86\u06E1\x03\x02\x02\x02\x88\u06E3\x03\x02\x02\x02\x8A" +
        "\u06EB\x03\x02\x02\x02\x8C\u06F2\x03\x02\x02\x02\x8E\u0735\x03\x02\x02" +
        "\x02\x90\u073A\x03\x02\x02\x02\x92\u0745\x03\x02\x02\x02\x94\u0748\x03" +
        "\x02\x02\x02\x96\u0750\x03\x02\x02\x02\x98\u0752\x03\x02\x02\x02\x9A\u0754" +
        "\x03\x02\x02\x02\x9C\u0756\x03\x02\x02\x02\x9E\u0758\x03\x02\x02\x02\xA0" +
        "\u075A\x03\x02\x02\x02\xA2\u075C\x03\x02\x02\x02\xA4\u075E\x03\x02\x02" +
        "\x02\xA6\u0760\x03\x02\x02\x02\xA8\u0762\x03\x02\x02\x02\xAA\u0764\x03" +
        "\x02\x02\x02\xAC\xAD\x05\b\x05\x02\xAD\xAE\x05\x02\x02\x02\xAE\xB6\x03" +
        "\x02\x02\x02\xAF\xB0\x05\n\x06\x02\xB0\xB1\x05\x02\x02\x02\xB1\xB6\x03" +
        "\x02\x02\x02\xB2\xB3\x07\u0158\x02\x02\xB3\xB6\x05\x02\x02\x02\xB4\xB6" +
        "\x07\x02\x02\x03\xB5\xAC\x03\x02\x02\x02\xB5\xAF\x03\x02\x02\x02\xB5\xB2" +
        "\x03\x02\x02\x02\xB5\xB4\x03\x02\x02\x02\xB6\x03\x03\x02\x02\x02\xB7\xB8";
    HyperTalkParser._serializedATNSegment1 = "\x05\x12\n\x02\xB8\xB9\x07\x02\x02\x03\xB9\xBC\x03\x02\x02\x02\xBA\xBC" +
        "\x05\x06\x04\x02\xBB\xB7\x03\x02\x02\x02\xBB\xBA\x03\x02\x02\x02\xBC\x05" +
        "\x03\x02\x02\x02\xBD\xBE\x05\x12\n\x02\xBE\xBF\x07\u0158\x02\x02\xBF\xC0" +
        "\x05\x06\x04\x02\xC0\xC8\x03\x02\x02\x02\xC1\xC2\x05\x12\n\x02\xC2\xC3" +
        "\x07\x02\x02\x03\xC3\xC8\x03\x02\x02\x02\xC4\xC5\x07\u0158\x02\x02\xC5" +
        "\xC8\x05\x06\x04\x02\xC6\xC8\x07\x02\x02\x03\xC7\xBD\x03\x02\x02\x02\xC7" +
        "\xC1\x03\x02\x02\x02\xC7\xC4\x03\x02\x02\x02\xC7\xC6\x03\x02\x02\x02\xC8" +
        "\x07\x03\x02\x02\x02\xC9\xCA\x07\x03\x02\x02\xCA\xCC\x05\f\x07\x02\xCB" +
        "\xCD\x07\u0158\x02\x02\xCC\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02" +
        "\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD1\x03\x02\x02\x02" +
        "\xD0\xD2\x05\x10\t\x02\xD1\xD0\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02" +
        "\xD2\xD3\x03\x02\x02\x02\xD3\xD4\x07\x04\x02\x02\xD4\xD5\x05\f\x07\x02" +
        "\xD5\xE5\x03\x02\x02\x02\xD6\xD7\x07\x03\x02\x02\xD7\xD8\x05\f\x07\x02" +
        "\xD8\xDA\x05\x0E\b\x02\xD9\xDB\x07\u0158\x02\x02\xDA\xD9\x03\x02\x02\x02" +
        "\xDB\xDC\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02" +
        "\xDD\xDF\x03\x02\x02\x02\xDE\xE0\x05\x10\t\x02\xDF\xDE\x03\x02\x02\x02" +
        "\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE2\x07\x04\x02\x02" +
        "\xE2\xE3\x05\f\x07\x02\xE3\xE5\x03\x02\x02\x02\xE4\xC9\x03\x02\x02\x02" +
        "\xE4\xD6\x03\x02\x02\x02\xE5\t\x03\x02\x02\x02\xE6\xE7\x07\x05\x02\x02" +
        "\xE7\xE9\x07\u014F\x02\x02\xE8\xEA\x07\u0158\x02\x02\xE9\xE8\x03\x02\x02" +
        "\x02\xEA\xEB\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02" +
        "\x02\xEC\xEE\x03\x02\x02\x02\xED\xEF\x05\x10\t\x02\xEE\xED\x03\x02\x02" +
        "\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x07\x04\x02" +
        "\x02\xF1\u0101\x07\u014F\x02\x02\xF2\xF3\x07\x05\x02\x02\xF3\xF4\x07\u014F" +
        "\x02\x02\xF4\xF6\x05\x0E\b\x02\xF5\xF7\x07\u0158\x02\x02\xF6\xF5\x03\x02" +
        "\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02" +
        "\x02\x02\xF9\xFB\x03\x02\x02\x02\xFA\xFC\x05\x10\t\x02\xFB\xFA\x03\x02" +
        "\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x07\x04" +
        "\x02\x02\xFE\xFF\x07\u014F\x02\x02\xFF\u0101\x03\x02\x02\x02\u0100\xE6" +
        "\x03\x02\x02\x02\u0100\xF2\x03\x02\x02\x02\u0101\v\x03\x02\x02\x02\u0102" +
        "\u0105\x07\u014F\x02\x02\u0103\u0105\x05\x84C\x02\u0104\u0102\x03\x02" +
        "\x02\x02\u0104\u0103\x03\x02\x02\x02\u0105\r\x03\x02\x02\x02\u0106\u0107" +
        "\b\b\x01\x02\u0107\u0108\x07\u014F\x02\x02\u0108\u010E\x03\x02\x02\x02" +
        "\u0109\u010A\f\x03\x02\x02\u010A\u010B\x07\x06\x02\x02\u010B\u010D\x07" +
        "\u014F\x02\x02\u010C\u0109\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02" +
        "\u010E\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\x0F\x03" +
        "\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0111\u0113\x05\x12\n\x02\u0112" +
        "\u0114\x07\u0158\x02\x02\u0113\u0112\x03\x02\x02\x02\u0114\u0115\x03\x02" +
        "\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116" +
        "\u0117\x03\x02\x02\x02\u0117\u0118\x05\x10\t\x02\u0118\u0120\x03\x02\x02" +
        "\x02\u0119\u011B\x05\x12\n\x02\u011A\u011C\x07\u0158\x02\x02\u011B\u011A" +
        "\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02" +
        "\u011D\u011E\x03\x02\x02\x02\u011E\u0120\x03\x02\x02\x02\u011F\u0111\x03" +
        "\x02\x02\x02\u011F\u0119\x03\x02\x02\x02\u0120\x11\x03\x02\x02\x02\u0121" +
        "\u012A\x05\"\x12\x02\u0122\u012A\x05b2\x02\u0123\u012A\x05 \x11\x02\u0124" +
        "\u012A\x05V,\x02\u0125\u012A\x05\x18\r\x02\u0126\u012A\x05\x1E\x10\x02" +
        "\u0127\u012A\x05\x14\v\x02\u0128\u012A\x05\x16\f\x02\u0129\u0121\x03\x02" +
        "\x02\x02\u0129\u0122\x03\x02\x02\x02\u0129\u0123\x03\x02\x02\x02\u0129" +
        "\u0124\x03\x02\x02\x02\u0129\u0125\x03\x02\x02\x02\u0129\u0126\x03\x02" +
        "\x02\x02\u0129\u0127\x03\x02\x02\x02\u0129\u0128\x03\x02\x02\x02\u012A" +
        "\x13\x03\x02\x02\x02\u012B\u012C\x07\x07\x02\x02\u012C\u012D\x05\x0E\b" +
        "\x02\u012D\x15\x03\x02\x02\x02\u012E\u012F\x07\b\x02\x02\u012F\u0132\x05" +
        "V,\x02\u0130\u0132\x07\b\x02\x02\u0131\u012E\x03\x02\x02\x02\u0131\u0130" +
        "\x03\x02\x02\x02\u0132\x17\x03\x02\x02\x02\u0133\u0134\x07\t\x02\x02\u0134" +
        "\u0135\x05V,\x02\u0135\u0136\x05\x1A\x0E\x02\u0136\x19\x03\x02\x02\x02" +
        "\u0137\u0139\x07\u0158\x02\x02\u0138\u0137\x03\x02\x02\x02\u0138\u0139" +
        "\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013B\x07\n\x02\x02" +
        "\u013B\u0159\x05\x12\n\x02\u013C\u013E\x07\u0158\x02\x02\u013D\u013C\x03" +
        "\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F" +
        "\u0140\x07\n\x02\x02\u0140\u0142\x05\x12\n\x02\u0141\u0143\x07\u0158\x02" +
        "\x02\u0142\u0141\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0145" +
        "\x03\x02\x02\x02\u0144\u0146\x05\x1C\x0F\x02\u0145\u0144\x03\x02\x02\x02" +
        "\u0145\u0146\x03\x02\x02\x02\u0146\u0159\x03\x02\x02\x02\u0147\u0149\x07" +
        "\u0158\x02\x02\u0148\u0147\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02" +
        "\u0149\u014A\x03\x02\x02\x02\u014A\u014C\x07\n\x02\x02\u014B\u014D\x07" +
        "\u0158\x02\x02\u014C\u014B\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02" +
        "\u014E\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0151\x03" +
        "\x02\x02\x02\u0150\u0152\x05\x10\t\x02\u0151\u0150\x03\x02\x02\x02\u0151" +
        "\u0152\x03\x02\x02\x02\u0152\u0156\x03\x02\x02\x02\u0153\u0157\x05\x1C" +
        "\x0F\x02\u0154\u0155\x07\x04\x02\x02\u0155\u0157\x07\t\x02\x02\u0156\u0153" +
        "\x03\x02\x02\x02\u0156\u0154\x03\x02\x02\x02\u0157\u0159\x03\x02\x02\x02" +
        "\u0158\u0138\x03\x02\x02\x02\u0158\u013D\x03\x02\x02\x02\u0158\u0148\x03" +
        "\x02\x02\x02\u0159\x1B\x03\x02\x02\x02\u015A\u015B\x07\v\x02\x02\u015B" +
        "\u0163\x05\x12\n\x02\u015C\u015E\x07\u0158\x02\x02\u015D\u015C\x03\x02" +
        "\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u015F" +
        "\u0160\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x07\x04" +
        "\x02\x02\u0162\u0164\x07\t\x02\x02\u0163\u015D\x03\x02\x02\x02\u0163\u0164" +
        "\x03\x02\x02\x02\u0164\u0171\x03\x02\x02\x02\u0165\u0167\x07\v\x02\x02" +
        "\u0166\u0168\x07\u0158\x02\x02\u0167\u0166\x03\x02\x02\x02\u0168\u0169" +
        "\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02" +
        "\u016A\u016C\x03\x02\x02\x02\u016B\u016D\x05\x10\t\x02\u016C\u016B\x03" +
        "\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E" +
        "\u016F\x07\x04\x02\x02\u016F\u0171\x07\t\x02\x02\u0170\u015A\x03\x02\x02" +
        "\x02\u0170\u0165\x03\x02\x02\x02\u0171\x1D\x03\x02\x02\x02\u0172\u0173" +
        "\x07\f\x02\x02\u0173\u0175\x052\x1A\x02\u0174\u0176\x07\u0158\x02\x02" +
        "\u0175\u0174\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0175\x03" +
        "\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179" +
        "\u017A\x05\x10\t\x02\u017A\u017B\x07\x04\x02\x02\u017B\u017C\x07\f\x02" +
        "\x02\u017C\u0188\x03\x02\x02\x02\u017D\u017E\x07\f\x02\x02\u017E\u0180" +
        "\x052\x1A\x02\u017F\u0181\x07\u0158\x02\x02\u0180\u017F\x03\x02\x02\x02" +
        "\u0181\u0182\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0182\u0183\x03" +
        "\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0185\x07\x04\x02\x02\u0185" +
        "\u0186\x07\f\x02\x02\u0186\u0188\x03\x02\x02\x02\u0187\u0172\x03\x02\x02" +
        "\x02\u0187\u017D\x03\x02\x02\x02\u0188\x1F\x03\x02\x02\x02\u0189\u018D" +
        "\x07\u014F\x02\x02\u018A\u018B\x07\u014F\x02\x02\u018B\u018D\x05T+\x02" +
        "\u018C\u0189\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018D!\x03\x02" +
        "\x02\x02\u018E\u018F\x07\r\x02\x02\u018F\u0190\x05V,\x02\u0190\u0191\x07" +
        "\x0E\x02\x02\u0191\u0192\x05V,\x02\u0192\u0398\x03\x02\x02\x02\u0193\u0194" +
        "\x07\x0F\x02\x02\u0194\u0195\x05V,\x02\u0195\u0196\x07\x10\x02\x02\u0196" +
        "\u0197\x05X-\x02\u0197\u0198\x07\x11\x02\x02\u0198\u0199\x05X-\x02\u0199" +
        "\u019A\x07\x11\x02\x02\u019A\u019B\x05X-\x02\u019B\u0398\x03\x02\x02\x02" +
        "\u019C\u019D\x07\x0F\x02\x02\u019D\u019E\x05V,\x02\u019E\u019F\x07\x10" +
        "\x02\x02\u019F\u01A0\x05X-\x02\u01A0\u01A1\x07\x11\x02\x02\u01A1\u01A2" +
        "\x05X-\x02\u01A2\u0398\x03\x02\x02\x02\u01A3\u01A4\x07\x0F\x02\x02\u01A4" +
        "\u01A5\x05V,\x02\u01A5\u01A6\x07\x10\x02\x02\u01A6\u01A7\x05X-\x02\u01A7" +
        "\u0398\x03\x02\x02\x02\u01A8\u01A9\x07\x0F\x02\x02\u01A9\u0398\x05V,\x02" +
        "\u01AA\u01AB\x07\x12\x02\x02\u01AB\u01AC\x05V,\x02\u01AC\u01AD\x07\x10" +
        "\x02\x02\u01AD\u01AE\x05V,\x02\u01AE\u0398\x03\x02\x02\x02\u01AF\u01B0" +
        "\x07\x12\x02\x02\u01B0\u0398\x05V,\x02\u01B1\u01B2\x07\x12\x02\x02\u01B2" +
        "\u01B3\x07\x13\x02\x02\u01B3\u0398\x05V,\x02\u01B4\u01B5\x07\x12\x02\x02" +
        "\u01B5\u01B6\x07\x13\x02\x02\u01B6\u01B7\x05V,\x02\u01B7\u01B8\x07\x10" +
        "\x02\x02\u01B8\u01B9\x05V,\x02\u01B9\u0398\x03\x02\x02\x02\u01BA\u0398" +
        "\x07\x14\x02\x02\u01BB\u01BC\x07\x14\x02\x02\u01BC\u0398\x05V,\x02\u01BD" +
        "\u01BE\x07\x15\x02\x02\u01BE\u01C0\x05^0\x02\u01BF\u01C1\x07\x16\x02\x02" +
        "\u01C0\u01BF\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u0398\x03" +
        "\x02\x02\x02\u01C2\u01C3\x07\x15\x02\x02\u01C3\u01C4\x07\x16\x02\x02\u01C4" +
        "\u0398\x05^0\x02\u01C5\u01C6\x07\x17\x02\x02\u01C6\u01C7\x07\x18\x02\x02" +
        "\u01C7\u0398\x05T+\x02\u01C8\u01C9\x07\x17\x02\x02\u01C9\u01CA\x07\x18" +
        "\x02\x02\u01CA\u01CB\x05T+\x02\u01CB\u01CC\x07\x10\x02\x02\u01CC\u01CD" +
        "\x05T+\x02\u01CD\u0398\x03\x02\x02\x02\u01CE\u01CF\x07\x19\x02\x02\u01CF" +
        "\u01D0\x07\x13\x02\x02\u01D0\u0398\x05V,\x02\u01D1\u01D2\x07\x1A\x02\x02" +
        "\u01D2\u01D3\x05Z.\x02\u01D3\u01D4\x07\x0E\x02\x02\u01D4\u01D5\x05&\x14" +
        "\x02\u01D5\u0398\x03\x02\x02\x02\u01D6\u01D7\x07\x1A\x02\x02\u01D7\u01D8" +
        "\x05Z.\x02\u01D8\u01D9\x07\x1B\x02\x02\u01D9\u01DA\x05&\x14\x02\u01DA" +
        "\u01DB\x07\x0E\x02\x02\u01DB\u01DC\x05&\x14\x02\u01DC\u0398\x03\x02\x02" +
        "\x02\u01DD\u01DE\x07\x1A\x02\x02\u01DE\u01DF\x05V,\x02\u01DF\u01E0\x07" +
        "\x0E\x02\x02\u01E0\u01E1\x05&\x14\x02\u01E1\u0398\x03\x02\x02\x02\u01E2" +
        "\u01E3\x07\x1A\x02\x02\u01E3\u01E4\x05V,\x02\u01E4\u01E5\x07\x1B\x02\x02" +
        "\u01E5\u01E6\x05&\x14\x02\u01E6\u01E7\x07\x0E\x02\x02\u01E7\u01E8\x05" +
        "&\x14\x02\u01E8\u0398\x03\x02\x02\x02\u01E9\u01EA\x07\x1C\x02\x02\u01EA" +
        "\u01EB\x07\x1D\x02\x02\u01EB\u0398\x05V,\x02\u01EC\u01ED\x07\x1E\x02\x02" +
        "\u01ED\u0398\x05V,\x02\u01EE\u01EF\x07\x1F\x02\x02\u01EF\u0398\x05V,\x02" +
        "\u01F0\u01F1\x07 \x02\x02\u01F1\u0398\x05V,\x02\u01F2\u01F3\x07!\x02\x02" +
        "\u01F3\u01F4\x05V,\x02\u01F4\u01F5\x07\"\x02\x02\u01F5\u01F6\x05V,\x02" +
        "\u01F6\u0398\x03\x02\x02\x02\u01F7\u01F8\x07#\x02\x02\u01F8\u0398\x05" +
        "V,\x02\u01F9\u01FA\x07$\x02\x02\u01FA\u0398\x05V,\x02\u01FB\u01FC\x07" +
        "%\x02\x02\u01FC\u01FD\x07\x1B\x02\x02\u01FD\u01FE\x05T+\x02\u01FE\u01FF" +
        "\x07\x0E\x02\x02\u01FF\u0200\x05T+\x02\u0200\u0398\x03\x02\x02\x02\u0201" +
        "\u0202\x07%\x02\x02\u0202\u0203\x07\x1B\x02\x02\u0203\u0204\x05T+\x02" +
        "\u0204\u0205\x07\x0E\x02\x02\u0205\u0206\x05T+\x02\u0206\u0207\x07\x10" +
        "\x02\x02\u0207\u0208\x05T+\x02\u0208\u0398\x03\x02\x02\x02\u0209\u020B" +
        "\x07&\x02\x02\u020A\u020C\x07\'\x02\x02\u020B\u020A\x03\x02\x02\x02\u020B" +
        "\u020C\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u020E\x07(\x02" +
        "\x02\u020E\u020F\x05\xAAV\x02\u020F\u0210\x05V,\x02\u0210\u0398\x03\x02" +
        "\x02\x02\u0211\u0212\x07)\x02\x02\u0212\u0398\x05V,\x02\u0213\u0214\x07" +
        "*\x02\x02\u0214\u0398\x05\f\x07\x02\u0215\u0216\x07*\x02\x02\u0216\u0398" +
        "\x07\f\x02\x02\u0217\u0218\x07*\x02\x02\u0218\u0219\x07\x0E\x02\x02\u0219" +
        "\u0398\x07+\x02\x02\u021A\u021B\x07,\x02\x02\u021B\u021C\x07-\x02\x02" +
        "\u021C\u021D\x07\x0E\x02\x02\u021D\u021E\x07\x13\x02\x02\u021E\u0398\x05" +
        "V,\x02\u021F\u0221\x07.\x02\x02\u0220\u0222\x05V,\x02\u0221\u0220\x03" +
        "\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0224\x03\x02\x02\x02\u0223" +
        "\u0225\x07/\x02\x02\u0224\u0223\x03\x02\x02\x02\u0224\u0225\x03\x02\x02" +
        "\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0227\x05V,\x02\u0227\u0228\x05" +
        "\xAAV\x02\u0228\u0229\x05V,\x02\u0229\u022A\x05\xAAV\x02\u022A\u022B\x07" +
        "0\x02\x02\u022B\u022C\x05\x96L\x02\u022C\u0398\x03\x02\x02\x02\u022D\u022F" +
        "\x07.\x02\x02\u022E\u0230\x05V,\x02\u022F\u022E\x03\x02\x02\x02\u022F" +
        "\u0230\x03\x02\x02\x02\u0230\u0232\x03\x02\x02\x02\u0231\u0233\x07/\x02" +
        "\x02\u0232\u0231\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0234" +
        "\x03\x02\x02\x02\u0234\u0235\x05V,\x02\u0235\u0236\x05\xAAV\x02\u0236" +
        "\u0237\x05V,\x02\u0237\u0398\x03\x02\x02\x02\u0238\u023A\x07.\x02\x02" +
        "\u0239\u023B\x05V,\x02\u023A\u0239\x03\x02\x02\x02\u023A\u023B\x03\x02" +
        "\x02\x02\u023B\u023D\x03\x02\x02\x02\u023C\u023E\x07/\x02\x02\u023D\u023C" +
        "\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02" +
        "\u023F\u0240\x05V,\x02\u0240\u0241\x05\xAAV\x02\u0241\u0242\x070\x02\x02" +
        "\u0242\u0243\x05\x96L\x02\u0243\u0398\x03\x02\x02\x02\u0244\u0246\x07" +
        ".\x02\x02\u0245\u0247\x05V,\x02\u0246\u0245\x03\x02\x02\x02\u0246\u0247" +
        "\x03\x02\x02\x02\u0247\u0249\x03\x02\x02\x02\u0248\u024A\x07/\x02\x02" +
        "\u0249\u0248\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024B\x03" +
        "\x02\x02\x02\u024B\u0398\x05V,\x02\u024C\u024D\x071\x02\x02\u024D\u0398" +
        "\x05V,\x02\u024E\u0250\x072\x02\x02\u024F\u0251\x07\x0E\x02\x02\u0250" +
        "\u024F\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251\u0252\x03\x02" +
        "\x02\x02\u0252\u0253\x05V,\x02\u0253\u0254\x07\x10\x02\x02\u0254\u0255" +
        "\x073\x02\x02\u0255\u0256\x05V,\x02\u0256\u0398\x03\x02\x02\x02\u0257" +
        "\u0259\x072\x02\x02\u0258\u025A\x07\x0E\x02\x02\u0259\u0258\x03\x02\x02" +
        "\x02\u0259\u025A\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025C" +
        "\x05V,\x02\u025C\u025D\x05$\x13\x02\u025D\u0398\x03\x02\x02\x02\u025E" +
        "\u025F\x072\x02\x02\u025F\u0398\x074\x02\x02\u0260\u0261\x072\x02\x02" +
        "\u0261\u0262\x074\x02\x02\u0262\u0263\x07\x10\x02\x02\u0263\u0264\x07" +
        "3\x02\x02\u0264\u0398\x05V,\x02\u0265\u0266\x075\x02\x02\u0266\u0398\x05" +
        "V,\x02\u0267\u0268\x075\x02\x02\u0268\u0269\x05\x98M\x02\u0269\u026A\x05" +
        "\x86D\x02\u026A\u0398\x03\x02\x02\x02\u026B\u026C\x075\x02\x02\u026C\u026D" +
        "\x05\x9AN\x02\u026D\u026E\x05\x86D\x02\u026E\u0398\x03\x02\x02\x02\u026F" +
        "\u0270\x075\x02\x02\u0270\u0271\x05\x86D\x02\u0271\u0272\x05\xAAV\x02" +
        "\u0272\u0273\x05V,\x02\u0273\u0398\x03\x02\x02\x02\u0274\u0275\x075\x02" +
        "\x02\u0275\u0398\x076\x02\x02\u0276\u0277\x077\x02\x02\u0277\u0278\x07" +
        "-\x02\x02\u0278\u0279\x07\x1B\x02\x02\u0279\u027A\x07\x13\x02\x02\u027A" +
        "\u0398\x05V,\x02\u027B\u027C\x078\x02\x02\u027C\u0398\x079\x02\x02\u027D" +
        "\u027E\x07:\x02\x02\u027E\u027F\x05V,\x02\u027F\u0280\x07\"\x02\x02\u0280" +
        "\u0281\x05V,\x02\u0281\u0398\x03\x02\x02\x02\u0282\u0283\x07;\x02\x02" +
        "\u0283\u0398\x07\f\x02\x02\u0284\u0285\x07<\x02\x02\u0285\u0286\x07\x13" +
        "\x02\x02\u0286\u0398\x05V,\x02\u0287\u0288\x07=\x02\x02\u0288\u0398\x05" +
        "\f\x07\x02\u0289\u028A\x07>\x02\x02\u028A\u0398\x05\\/\x02\u028B\u028C" +
        "\x07?\x02\x02\u028C\u0398\x05\x98M\x02\u028D\u028E\x07@\x02\x02\u028E" +
        "\u0398\x05\x98M\x02\u028F\u0290\x07@\x02\x02\u0290\u0398\x05V,\x02\u0291" +
        "\u0292\x07A\x02\x02\u0292\u0398\x05T+\x02\u0293\u0294\x07A\x02\x02\u0294" +
        "\u0295\x05T+\x02\u0295\u0296\x05n8\x02\u0296\u0297\x05V,\x02\u0297\u0398" +
        "\x03\x02\x02\x02\u0298\u0299\x07B\x02\x02\u0299\u029A\x07\x1B\x02\x02" +
        "\u029A\u029B\x07\x13\x02\x02\u029B\u0398\x05V,\x02\u029C\u029D\x07B\x02" +
        "\x02\u029D\u029E\x07\x1B\x02\x02\u029E\u029F\x07\x13\x02\x02\u029F\u02A0" +
        "\x05V,\x02\u02A0\u02A1\x07C\x02\x02\u02A1\u02A2\x05V,\x02\u02A2\u0398" +
        "\x03\x02\x02\x02\u02A3\u02A4\x07B\x02\x02\u02A4\u02A5\x07\x1B\x02\x02" +
        "\u02A5\u02A6\x07\x13\x02\x02\u02A6\u02A7\x05V,\x02\u02A7\u02A8\x07\x18" +
        "\x02\x02\u02A8\u02A9\x05V,\x02\u02A9\u02AA\x07C\x02\x02\u02AA\u02AB\x05" +
        "V,\x02\u02AB\u0398\x03\x02\x02\x02\u02AC\u02AD\x07B\x02\x02\u02AD\u02AE" +
        "\x07\x1B\x02\x02\u02AE\u02AF\x07\x13\x02\x02\u02AF\u02B0\x05V,\x02\u02B0" +
        "\u02B1\x07D\x02\x02\u02B1\u02B2\x05V,\x02\u02B2\u0398\x03\x02\x02\x02" +
        "\u02B3\u02B5\x07E\x02\x02\u02B4\u02B6\x07\'\x02\x02\u02B5\u02B4\x03\x02" +
        "\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7" +
        "\u0398\x07F\x02\x02\u02B8\u02B9\x07E\x02\x02\u02B9\u0398\x07-\x02\x02" +
        "\u02BA\u02BB\x07G\x02\x02\u02BB\u0398\x07H\x02\x02\u02BC\u02BD\x07G\x02" +
        "\x02\u02BD\u02BE\x07I\x02\x02\u02BE\u02BF\x05\xAAV\x02\u02BF\u02C0\x05" +
        "V,\x02\u02C0\u0398\x03\x02\x02\x02\u02C1\u02C2\x07G\x02\x02\u02C2\u02C3" +
        "\x07J\x02\x02\u02C3\u02C4\x07I\x02\x02\u02C4\u02C5\x05\xAAV\x02\u02C5" +
        "\u02C6\x05V,\x02\u02C6\u0398\x03\x02\x02\x02\u02C7\u02C8\x07G\x02\x02" +
        "\u02C8\u02C9\x07K\x02\x02\u02C9\u02CA\x07I\x02\x02\u02CA\u02CB\x05\xAA" +
        "V\x02\u02CB\u02CC\x05V,\x02\u02CC\u0398\x03\x02\x02\x02\u02CD\u02CE\x07" +
        "G\x02\x02\u02CE\u0398\x05V,\x02\u02CF\u02D0\x07G\x02\x02\u02D0\u02D1\x07" +
        "J\x02\x02\u02D1\u0398\x05V,\x02\u02D2\u02D3\x07G\x02\x02\u02D3\u02D4\x07" +
        "K\x02\x02\u02D4\u0398\x05V,\x02\u02D5\u02D6\x07L\x02\x02\u02D6\u02D7\x05" +
        "@!\x02\u02D7\u02D8\x07\x0E\x02\x02\u02D8\u02D9\x05\x82B\x02\u02D9\u0398" +
        "\x03\x02\x02\x02\u02DA\u02DB\x07M\x02\x02\u02DB\u02DC\x05T+\x02\u02DC" +
        "\u02DD\x07\x0E\x02\x02\u02DD\u02DE\x05V,\x02\u02DE\u0398\x03\x02\x02\x02" +
        "\u02DF\u02E0\x07N\x02\x02\u02E0\u0398\x05V,\x02\u02E1\u02E2\x07N\x02\x02" +
        "\u02E2\u02E3\x05\x98M\x02\u02E3\u02E4\x05\x86D\x02\u02E4\u0398\x03\x02" +
        "\x02\x02\u02E5\u02E6\x07N\x02\x02\u02E6\u02E7\x05\x9AN\x02\u02E7\u02E8" +
        "\x05\x86D\x02\u02E8\u0398\x03\x02\x02\x02\u02E9\u02EA\x07N\x02\x02\u02EA" +
        "\u02EB\x05\x86D\x02\u02EB\u02EC\x05\xAAV\x02\u02EC\u02ED\x05V,\x02\u02ED" +
        "\u0398\x03\x02\x02\x02\u02EE\u02EF\x07N\x02\x02\u02EF\u0398\x076\x02\x02" +
        "\u02F0\u02F1\x07O\x02\x02\u02F1\u02F2\x05.\x18\x02\u02F2\u02F3\x05V,\x02" +
        "\u02F3\u02F4\x05,\x17\x02\u02F4\u02F5\x050\x19\x02\u02F5\u0398\x03\x02" +
        "\x02\x02\u02F6\u02F7\x07O\x02\x02\u02F7\u02F8\x05.\x18\x02\u02F8\u02F9" +
        "\x05V,\x02\u02F9\u02FA\x05,\x17\x02\u02FA\u02FB\x050\x19\x02\u02FB\u02FC" +
        "\x07\"\x02\x02\u02FC\u02FD\x05V,\x02\u02FD\u0398\x03\x02\x02\x02\u02FE" +
        "\u02FF\x07O\x02\x02\u02FF\u0300\x05,\x17\x02\u0300\u0301\x050\x19\x02" +
        "\u0301\u0302\x07\"\x02\x02\u0302\u0303\x05V,\x02\u0303\u0398\x03\x02\x02" +
        "\x02\u0304\u0306\x07O\x02\x02\u0305\u0307\x07P\x02\x02\u0306\u0305\x03" +
        "\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308" +
        "\u0309\x07Q\x02\x02\u0309\u030A\x05,\x17\x02\u030A\u030B\x050\x19\x02" +
        "\u030B\u030C\x07\"\x02\x02\u030C\u030D\x05V,\x02\u030D\u0398\x03\x02\x02" +
        "\x02\u030E\u0310\x07O\x02\x02\u030F\u0311\x07\'\x02\x02\u0310\u030F\x03" +
        "\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312" +
        "\u0317\x05\x96L\x02\u0313\u0314\x05\xAAV\x02\u0314\u0315\x07P\x02\x02" +
        "\u0315\u0316\x07Q\x02\x02\u0316\u0318\x03\x02\x02\x02\u0317\u0313\x03" +
        "\x02\x02\x02\u0317\u0318\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319" +
        "\u031A\x05,\x17\x02\u031A\u031B\x050\x19\x02\u031B\u031C\x07\"\x02\x02" +
        "\u031C\u031D\x05V,\x02\u031D\u0398\x03\x02\x02\x02\u031E\u0320\x07O\x02" +
        "\x02\u031F\u0321\x07\'\x02\x02\u0320\u031F\x03\x02\x02\x02\u0320\u0321" +
        "\x03\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0323\x070\x02\x02" +
        "\u0323\u0328\x05\x96L\x02\u0324\u0325\x05\xAAV\x02\u0325\u0326\x07P\x02" +
        "\x02\u0326\u0327\x07Q\x02\x02\u0327\u0329\x03\x02\x02\x02\u0328\u0324" +
        "\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02" +
        "\u032A\u032B\x05,\x17\x02\u032B\u032C\x050\x19\x02\u032C\u032D\x07\"\x02" +
        "\x02\u032D\u032E\x05V,\x02\u032E\u0398\x03\x02\x02\x02\u032F\u0330\x07" +
        "O\x02\x02\u0330\u0331\x05V,\x02\u0331\u0332\x05,\x17\x02\u0332\u0333\x05" +
        "0\x19\x02\u0333\u0334\x07\"\x02\x02\u0334\u0335\x05V,\x02\u0335\u0398" +
        "\x03\x02\x02\x02\u0336\u0338\x07O\x02\x02\u0337\u0339\x07\'\x02\x02\u0338" +
        "\u0337\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339\u033A\x03\x02" +
        "\x02\x02\u033A\u033B\x05\x96L\x02\u033B\u033C\x05\xAAV\x02\u033C\u033D" +
        "\x05V,\x02\u033D\u033E\x05,\x17\x02\u033E\u033F\x050\x19\x02\u033F\u0340" +
        "\x07\"\x02\x02\u0340\u0341\x05V,\x02\u0341\u0398\x03\x02\x02\x02\u0342" +
        "\u0344\x07O\x02\x02\u0343\u0345\x07\'\x02\x02\u0344\u0343\x03\x02\x02" +
        "\x02\u0344\u0345\x03\x02\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u0347" +
        "\x070\x02\x02\u0347\u0348\x05\x96L\x02\u0348\u0349\x05\xAAV\x02\u0349" +
        "\u034A\x05V,\x02\u034A\u034B\x05,\x17\x02\u034B\u034C\x050\x19\x02\u034C" +
        "\u034D\x07\"\x02\x02\u034D\u034E\x05V,\x02\u034E\u0398\x03\x02\x02\x02" +
        "\u034F\u0350\x07R\x02\x02\u0350\u0398\x05V,\x02\u0351\u0352\x07R\x02\x02" +
        "\u0352\u0353\x05V,\x02\u0353\u0354\x07\x10\x02\x02\u0354\u0355\t\x02\x02" +
        "\x02\u0355\u0356\x07W\x02\x02\u0356\u0398\x03\x02\x02\x02\u0357\u0358" +
        "\x07R\x02\x02\u0358\u0359\x05V,\x02\u0359\u035A\x07\x10\x02\x02\u035A" +
        "\u035B\x07W\x02\x02\u035B\u035C\x05V,\x02\u035C\u0398\x03\x02\x02\x02" +
        "\u035D\u035E\x07X\x02\x02\u035E\u035F\x05V,\x02\u035F\u0360\x07\x1B\x02" +
        "\x02\u0360\u0361\x05V,\x02\u0361\u0398\x03\x02\x02\x02\u0362\u0363\x07" +
        "Y\x02\x02\u0363\u0398\x05V,\x02\u0364\u0365\x07Y\x02\x02\u0365\u0366\x05" +
        "V,\x02\u0366\u0367\x07\x10\x02\x02\u0367\u0368\t\x03\x02\x02\u0368\u0398" +
        "\x03\x02\x02\x02\u0369\u036A\x07\\\x02\x02\u036A\u0398\x079\x02\x02\u036B" +
        "\u036C\x07\\\x02\x02\u036C\u036D\x079\x02\x02\u036D\u036E\x07\x10\x02" +
        "\x02\u036E\u036F\x073\x02\x02\u036F\u0398\x05V,\x02\u0370\u0371\x073\x02" +
        "\x02\u0371\u0398\x05V,\x02\u0372\u0373\x07]\x02\x02\u0373\u0374\x05V," +
        "\x02\u0374\u0375\x05\x90I\x02\u0375\u0398\x03\x02\x02\x02\u0376\u0377" +
        "\x07]\x02\x02\u0377\u0378\x07C\x02\x02\u0378\u0379\x05V,\x02\u0379\u037A" +
        "\x05\x90I\x02\u037A\u0398\x03\x02\x02\x02\u037B\u037C\x07]\x02\x02\u037C" +
        "\u037D\x07D\x02\x02\u037D\u0398\x05V,\x02\u037E\u037F\x07]\x02\x02\u037F" +
        "\u0380\x07^\x02\x02\u0380\u0398\x05V,\x02\u0381\u0382\x07_\x02\x02\u0382" +
        "\u0383\x05V,\x02\u0383\u0384\x07\x0E\x02\x02\u0384\u0385\x07\x13\x02\x02" +
        "\u0385\u0386\x05V,\x02\u0386\u0398\x03\x02\x02\x02\u0387\u0388\x07_\x02" +
        "\x02\u0388\u0389\x05V,\x02\u0389\u038A\x07\x0E\x02\x02\u038A\u038B\x07" +
        "\x13\x02\x02\u038B\u038C\x05V,\x02\u038C\u038D\x07\x18\x02\x02\u038D\u038E" +
        "\t\x04\x02\x02\u038E\u0398\x03\x02\x02\x02\u038F\u0390\x07_\x02\x02\u0390" +
        "\u0391\x05V,\x02\u0391\u0392\x07\x0E\x02\x02\u0392\u0393\x07\x13\x02\x02" +
        "\u0393\u0394\x05V,\x02\u0394\u0395\x07\x18\x02\x02\u0395\u0396\x05V,\x02" +
        "\u0396\u0398\x03\x02\x02\x02\u0397\u018E\x03\x02\x02\x02\u0397\u0193\x03" +
        "\x02\x02\x02\u0397\u019C\x03\x02\x02\x02\u0397\u01A3\x03\x02\x02\x02\u0397" +
        "\u01A8\x03\x02\x02\x02\u0397\u01AA\x03\x02\x02\x02\u0397\u01AF\x03\x02" +
        "\x02\x02\u0397\u01B1\x03\x02\x02\x02\u0397\u01B4\x03\x02\x02\x02\u0397" +
        "\u01BA\x03\x02\x02\x02\u0397\u01BB\x03\x02\x02\x02\u0397\u01BD\x03\x02" +
        "\x02\x02\u0397\u01C2\x03\x02\x02\x02\u0397\u01C5\x03\x02\x02\x02\u0397" +
        "\u01C8\x03\x02\x02\x02\u0397\u01CE\x03\x02\x02\x02\u0397\u01D1\x03\x02" +
        "\x02\x02\u0397\u01D6\x03\x02\x02\x02\u0397\u01DD\x03\x02\x02\x02\u0397" +
        "\u01E2\x03\x02\x02\x02\u0397\u01E9\x03\x02\x02\x02\u0397\u01EC\x03\x02" +
        "\x02\x02\u0397\u01EE\x03\x02\x02\x02\u0397\u01F0\x03\x02\x02\x02\u0397" +
        "\u01F2\x03\x02\x02\x02\u0397\u01F7\x03\x02\x02\x02\u0397\u01F9\x03\x02" +
        "\x02\x02\u0397\u01FB\x03\x02\x02\x02\u0397\u0201\x03\x02\x02\x02\u0397" +
        "\u0209\x03\x02\x02\x02\u0397\u0211\x03\x02\x02\x02\u0397\u0213\x03\x02";
    HyperTalkParser._serializedATNSegment2 = "\x02\x02\u0397\u0215\x03\x02\x02\x02\u0397\u0217\x03\x02\x02\x02\u0397" +
        "\u021A\x03\x02\x02\x02\u0397\u021F\x03\x02\x02\x02\u0397\u022D\x03\x02" +
        "\x02\x02\u0397\u0238\x03\x02\x02\x02\u0397\u0244\x03\x02\x02\x02\u0397" +
        "\u024C\x03\x02\x02\x02\u0397\u024E\x03\x02\x02\x02\u0397\u0257\x03\x02" +
        "\x02\x02\u0397\u025E\x03\x02\x02\x02\u0397\u0260\x03\x02\x02\x02\u0397" +
        "\u0265\x03\x02\x02\x02\u0397\u0267\x03\x02\x02\x02\u0397\u026B\x03\x02" +
        "\x02\x02\u0397\u026F\x03\x02\x02\x02\u0397\u0274\x03\x02\x02\x02\u0397" +
        "\u0276\x03\x02\x02\x02\u0397\u027B\x03\x02\x02\x02\u0397\u027D\x03\x02" +
        "\x02\x02\u0397\u0282\x03\x02\x02\x02\u0397\u0284\x03\x02\x02\x02\u0397" +
        "\u0287\x03\x02\x02\x02\u0397\u0289\x03\x02\x02\x02\u0397\u028B\x03\x02" +
        "\x02\x02\u0397\u028D\x03\x02\x02\x02\u0397\u028F\x03\x02\x02\x02\u0397" +
        "\u0291\x03\x02\x02\x02\u0397\u0293\x03\x02\x02\x02\u0397\u0298\x03\x02" +
        "\x02\x02\u0397\u029C\x03\x02\x02\x02\u0397\u02A3\x03\x02\x02\x02\u0397" +
        "\u02AC\x03\x02\x02\x02\u0397\u02B3\x03\x02\x02\x02\u0397\u02B8\x03\x02" +
        "\x02\x02\u0397\u02BA\x03\x02\x02\x02\u0397\u02BC\x03\x02\x02\x02\u0397" +
        "\u02C1\x03\x02\x02\x02\u0397\u02C7\x03\x02\x02\x02\u0397\u02CD\x03\x02" +
        "\x02\x02\u0397\u02CF\x03\x02\x02\x02\u0397\u02D2\x03\x02\x02\x02\u0397" +
        "\u02D5\x03\x02\x02\x02\u0397\u02DA\x03\x02\x02\x02\u0397\u02DF\x03\x02" +
        "\x02\x02\u0397\u02E1\x03\x02\x02\x02\u0397\u02E5\x03\x02\x02\x02\u0397" +
        "\u02E9\x03\x02\x02\x02\u0397\u02EE\x03\x02\x02\x02\u0397\u02F0\x03\x02" +
        "\x02\x02\u0397\u02F6\x03\x02\x02\x02\u0397\u02FE\x03\x02\x02\x02\u0397" +
        "\u0304\x03\x02\x02\x02\u0397\u030E\x03\x02\x02\x02\u0397\u031E\x03\x02" +
        "\x02\x02\u0397\u032F\x03\x02\x02\x02\u0397\u0336\x03\x02\x02\x02\u0397" +
        "\u0342\x03\x02\x02\x02\u0397\u034F\x03\x02\x02\x02\u0397\u0351\x03\x02" +
        "\x02\x02\u0397\u0357\x03\x02\x02\x02\u0397\u035D\x03\x02\x02\x02\u0397" +
        "\u0362\x03\x02\x02\x02\u0397\u0364\x03\x02\x02\x02\u0397\u0369\x03\x02" +
        "\x02\x02\u0397\u036B\x03\x02\x02\x02\u0397\u0370\x03\x02\x02\x02\u0397" +
        "\u0372\x03\x02\x02\x02\u0397\u0376\x03\x02\x02\x02\u0397\u037B\x03\x02" +
        "\x02\x02\u0397\u037E\x03\x02\x02\x02\u0397\u0381\x03\x02\x02\x02\u0397" +
        "\u0387\x03\x02\x02\x02\u0397\u038F\x03\x02\x02\x02\u0398#\x03\x02\x02" +
        "\x02\u0399\u039A\x07a\x02\x02\u039A\u039B\x07b\x02\x02\u039B\u03A5\x07" +
        "c\x02\x02\u039C\u039D\x07a\x02\x02\u039D\u039E\x07b\x02\x02\u039E\u039F" +
        "\x07c\x02\x02\u039F\u03A0\x07d\x02\x02\u03A0\u03A5\x07e\x02\x02\u03A1" +
        "\u03A2\x07d\x02\x02\u03A2\u03A5\x07e\x02\x02\u03A3\u03A5\x03\x02\x02\x02" +
        "\u03A4\u0399\x03\x02\x02\x02\u03A4\u039C\x03\x02\x02\x02\u03A4\u03A1\x03" +
        "\x02\x02\x02\u03A4\u03A3\x03\x02\x02\x02\u03A5%\x03\x02\x02\x02\u03A6" +
        "\u03AC\x05(\x15\x02\u03A7\u03A8\x05(\x15\x02\u03A8\u03A9\x07f\x02\x02" +
        "\u03A9\u03AA\x05(\x15\x02\u03AA\u03AC\x03\x02\x02\x02\u03AB\u03A6\x03" +
        "\x02\x02\x02\u03AB\u03A7\x03\x02\x02\x02\u03AC\'\x03\x02\x02\x02\u03AD" +
        "\u03B6\x05\x88E\x02\u03AE\u03B6\x07g\x02\x02\u03AF\u03B0\x05*\x16\x02" +
        "\u03B0\u03B1\x07h\x02\x02\u03B1\u03B6\x03\x02\x02\x02\u03B2\u03B3\x05" +
        "*\x16\x02\u03B3\u03B4\x07i\x02\x02\u03B4\u03B6\x03\x02\x02\x02\u03B5\u03AD" +
        "\x03\x02\x02\x02\u03B5\u03AE\x03\x02\x02\x02\u03B5\u03AF\x03\x02\x02\x02" +
        "\u03B5\u03B2\x03\x02\x02\x02\u03B6)\x03\x02\x02\x02\u03B7\u03BC\t\x05" +
        "\x02\x02\u03B8\u03BC\t\x06\x02\x02\u03B9\u03BC\x07o\x02\x02\u03BA\u03BC" +
        "\x03\x02\x02\x02\u03BB\u03B7\x03\x02\x02\x02\u03BB\u03B8\x03\x02\x02\x02" +
        "\u03BB\u03B9\x03\x02\x02\x02\u03BB\u03BA\x03\x02\x02\x02\u03BC+\x03\x02" +
        "\x02\x02\u03BD\u03C1\x07p\x02\x02\u03BE\u03C1\x07q\x02\x02\u03BF\u03C1" +
        "\x03\x02\x02\x02\u03C0\u03BD\x03\x02\x02\x02\u03C0\u03BE\x03\x02\x02\x02" +
        "\u03C0\u03BF\x03\x02\x02\x02\u03C1-\x03\x02\x02\x02\u03C2\u03C4\x07\'" +
        "\x02\x02\u03C3\u03C2\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4" +
        "\u03C5\x03\x02\x02\x02\u03C5\u03C6\x05\xA6T\x02\u03C6\u03C7\x05\xAAV\x02" +
        "\u03C7\u03DC\x03\x02\x02\x02\u03C8\u03CA\x07\'\x02\x02\u03C9\u03C8\x03" +
        "\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CB" +
        "\u03CC\x05\xA8U\x02\u03CC\u03CD\x05\xAAV\x02\u03CD\u03DC\x03\x02\x02\x02" +
        "\u03CE\u03D0\x07\'\x02\x02\u03CF\u03CE\x03\x02\x02\x02\u03CF\u03D0\x03" +
        "\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1\u03D2\x05\xA4S\x02\u03D2" +
        "\u03D3\x05\xAAV\x02\u03D3\u03DC\x03\x02\x02\x02\u03D4\u03D6\x07\'\x02" +
        "\x02\u03D5\u03D4\x03\x02\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6\u03D7" +
        "\x03\x02\x02\x02\u03D7\u03D8\x05\xA2R\x02\u03D8\u03D9\x05\xAAV\x02\u03D9" +
        "\u03DC\x03\x02\x02\x02\u03DA\u03DC\x03\x02\x02\x02\u03DB\u03C3\x03\x02" +
        "\x02\x02\u03DB\u03C9\x03\x02\x02\x02\u03DB\u03CF\x03\x02\x02\x02\u03DB" +
        "\u03D5\x03\x02\x02\x02\u03DB\u03DA\x03\x02\x02\x02\u03DC/\x03\x02\x02" +
        "\x02\u03DD\u03E3\x07I\x02\x02\u03DE\u03E3\x07r\x02\x02\u03DF\u03E3\x07" +
        "/\x02\x02\u03E0\u03E3\x07s\x02\x02\u03E1\u03E3\x03\x02\x02\x02\u03E2\u03DD" +
        "\x03\x02\x02\x02\u03E2\u03DE\x03\x02\x02\x02\u03E2\u03DF\x03\x02\x02\x02" +
        "\u03E2\u03E0\x03\x02\x02\x02\u03E2\u03E1\x03\x02\x02\x02\u03E31\x03\x02" +
        "\x02\x02\u03E4\u03ED\x054\x1B\x02\u03E5\u03ED\x056\x1C\x02\u03E6\u03E7" +
        "\x07\x10\x02\x02\u03E7\u03E8\x07\u014F\x02\x02\u03E8\u03E9\x07t\x02\x02" +
        "\u03E9\u03ED\x058\x1D\x02\u03EA\u03ED\x07u\x02\x02\u03EB\u03ED\x03\x02" +
        "\x02\x02\u03EC\u03E4\x03\x02\x02\x02\u03EC\u03E5\x03\x02\x02\x02\u03EC" +
        "\u03E6\x03\x02\x02\x02\u03EC\u03EA\x03\x02\x02\x02\u03EC\u03EB\x03\x02" +
        "\x02\x02\u03ED3\x03\x02\x02\x02\u03EE\u03EF\x07D\x02\x02\u03EF\u03F3\x05" +
        "V,\x02\u03F0\u03F1\x07^\x02\x02\u03F1\u03F3\x05V,\x02\u03F2\u03EE\x03" +
        "\x02\x02\x02\u03F2\u03F0\x03\x02\x02\x02\u03F35\x03\x02\x02\x02\u03F4" +
        "\u03F5\x07C\x02\x02\u03F5\u03F6\x05V,\x02\u03F6\u03F7\x07v\x02\x02\u03F7" +
        "\u03FF\x03\x02\x02\x02\u03F8\u03F9\x07C\x02\x02\u03F9\u03FF\x05V,\x02" +
        "\u03FA\u03FB\x05V,\x02\u03FB\u03FC\x07v\x02\x02\u03FC\u03FF\x03\x02\x02" +
        "\x02\u03FD\u03FF\x05V,\x02\u03FE\u03F4\x03\x02\x02\x02\u03FE\u03F8\x03" +
        "\x02\x02\x02\u03FE\u03FA\x03\x02\x02\x02\u03FE\u03FD\x03\x02\x02\x02\u03FF" +
        "7\x03\x02\x02\x02\u0400\u0401\x05V,\x02\u0401\u0402\x07w\x02\x02\u0402" +
        "\u0403\x07\x0E\x02\x02\u0403\u0404\x05V,\x02\u0404\u040A\x03\x02\x02\x02" +
        "\u0405\u0406\x05V,\x02\u0406\u0407\x07\x0E\x02\x02\u0407\u0408\x05V,\x02" +
        "\u0408\u040A\x03\x02\x02\x02\u0409\u0400\x03\x02\x02\x02\u0409\u0405\x03" +
        "\x02\x02\x02\u040A9\x03\x02\x02\x02\u040B\u040C\b\x1E\x01\x02\u040C\u040D" +
        "\x05t;\x02\u040D\u040E\x05\xA2R\x02\u040E\u040F\x05\xAAV\x02\u040F\u0445" +
        "\x03\x02\x02\x02\u0410\u0411\x05\xA2R\x02\u0411\u0412\x05V,\x02\u0412" +
        "\u0413\x07\x0E\x02\x02\u0413\u0414\x05V,\x02\u0414\u0415\x05\xAAV\x02" +
        "\u0415\u0445\x03\x02\x02\x02\u0416\u0417\x05\xA2R\x02\u0417\u0418\x05" +
        "V,\x02\u0418\u0419\x05\xAAV\x02\u0419\u0445\x03\x02\x02\x02\u041A\u041B" +
        "\x05t;\x02\u041B\u041C\x05\xA4S\x02\u041C\u041D\x05\xAAV\x02\u041D\u0445" +
        "\x03\x02\x02\x02\u041E\u041F\x05\xA4S\x02\u041F\u0420\x05V,\x02\u0420" +
        "\u0421\x07\x0E\x02\x02\u0421\u0422\x05V,\x02\u0422\u0423\x05\xAAV\x02" +
        "\u0423\u0445\x03\x02\x02\x02\u0424\u0425\x05\xA4S\x02\u0425\u0426\x05" +
        "V,\x02\u0426\u0427\x05\xAAV\x02\u0427\u0445\x03\x02\x02\x02\u0428\u0429" +
        "\x05t;\x02\u0429\u042A\x05\xA8U\x02\u042A\u042B\x05\xAAV\x02\u042B\u0445" +
        "\x03\x02\x02\x02\u042C\u042D\x05\xA8U\x02\u042D\u042E\x05V,\x02\u042E" +
        "\u042F\x07\x0E\x02\x02\u042F\u0430\x05V,\x02\u0430\u0431\x05\xAAV\x02" +
        "\u0431\u0445\x03\x02\x02\x02\u0432\u0433\x05\xA8U\x02\u0433\u0434\x05" +
        "V,\x02\u0434\u0435\x05\xAAV\x02\u0435\u0445\x03\x02\x02\x02\u0436\u0437" +
        "\x05t;\x02\u0437\u0438\x05\xA6T\x02\u0438\u0439\x05\xAAV\x02\u0439\u0445" +
        "\x03\x02\x02\x02\u043A\u043B\x05\xA6T\x02\u043B\u043C\x05V,\x02\u043C" +
        "\u043D\x07\x0E\x02\x02\u043D\u043E\x05V,\x02\u043E\u043F\x05\xAAV\x02" +
        "\u043F\u0445\x03\x02\x02\x02\u0440\u0441\x05\xA6T\x02\u0441\u0442\x05" +
        "V,\x02\u0442\u0443\x05\xAAV\x02\u0443\u0445\x03\x02\x02\x02\u0444\u040B" +
        "\x03\x02\x02\x02\u0444\u0410\x03\x02\x02\x02\u0444\u0416\x03\x02\x02\x02" +
        "\u0444\u041A\x03\x02\x02\x02\u0444\u041E\x03\x02\x02\x02\u0444\u0424\x03" +
        "\x02\x02\x02\u0444\u0428\x03\x02\x02\x02\u0444\u042C\x03\x02\x02\x02\u0444" +
        "\u0432\x03\x02\x02\x02\u0444\u0436\x03\x02\x02\x02\u0444\u043A\x03\x02" +
        "\x02\x02\u0444\u0440\x03\x02\x02\x02\u0445\u044A\x03\x02\x02\x02\u0446" +
        "\u0447\f\x0F\x02\x02\u0447\u0449\x05:\x1E\x10\u0448\u0446\x03\x02\x02" +
        "\x02\u0449\u044C\x03\x02\x02\x02\u044A\u0448\x03\x02\x02\x02\u044A\u044B" +
        "\x03\x02\x02\x02\u044B;\x03\x02\x02\x02\u044C\u044A\x03\x02\x02\x02\u044D" +
        "\u044E\x07\x1D\x02\x02\u044E\u0453\x05X-\x02\u044F\u0450\x05t;\x02\u0450" +
        "\u0451\x07\x1D\x02\x02\u0451\u0453\x03\x02\x02\x02\u0452\u044D\x03\x02" +
        "\x02\x02\u0452\u044F\x03\x02\x02\x02\u0453=\x03\x02\x02\x02\u0454\u0455" +
        "\x07x\x02\x02\u0455\u0456\x05X-\x02\u0456\u0457\x05\xAAV\x02\u0457\u0458" +
        "\x05<\x1F\x02\u0458\u045F\x03\x02\x02\x02\u0459\u045A\x05t;\x02\u045A" +
        "\u045B\x07x\x02\x02\u045B\u045C\x05\xAAV\x02\u045C\u045D\x05<\x1F\x02" +
        "\u045D\u045F\x03\x02\x02\x02\u045E\u0454\x03\x02\x02\x02\u045E\u0459\x03" +
        "\x02\x02\x02\u045F?\x03\x02\x02\x02\u0460\u0463\x05D#\x02\u0461\u0463" +
        "\x05B\"\x02\u0462\u0460\x03\x02\x02\x02\u0462\u0461\x03\x02\x02\x02\u0463" +
        "A\x03\x02\x02\x02\u0464\u0466\x07\'\x02\x02\u0465\u0464\x03\x02\x02\x02" +
        "\u0465\u0466\x03\x02\x02\x02\u0466\u0467\x03\x02\x02\x02\u0467\u0468\x05" +
        "\x80A\x02\u0468C\x03\x02\x02\x02\u0469\u046B\x07\'\x02\x02\u046A\u0469" +
        "\x03\x02\x02\x02\u046A\u046B\x03\x02\x02\x02\u046B\u046C\x03\x02\x02\x02" +
        "\u046C\u046D\x05\x80A\x02\u046D\u046E\x05\xAAV\x02\u046E\u046F\x05X-\x02" +
        "\u046F\u0479\x03\x02\x02\x02\u0470\u0472\x07\'\x02\x02\u0471\u0470\x03" +
        "\x02\x02\x02\u0471\u0472\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473" +
        "\u0474\x05*\x16\x02\u0474\u0475\x05\x80A\x02\u0475\u0476\x05\xAAV\x02" +
        "\u0476\u0477\x05X-\x02\u0477\u0479\x03\x02\x02\x02\u0478\u046A\x03\x02" +
        "\x02\x02\u0478\u0471\x03\x02\x02\x02\u0479E\x03\x02\x02\x02\u047A\u048B" +
        "\x05\x94K\x02\u047B\u047C\x05\x98M\x02\u047C\u047D\x07y\x02\x02\u047D" +
        "\u047E\x05X-\x02\u047E\u048B\x03\x02\x02\x02\u047F\u0480\x05\x9AN\x02" +
        "\u0480\u0481\x07y\x02\x02\u0481\u0482\x05X-\x02\u0482\u048B\x03\x02\x02" +
        "\x02\u0483\u048B\x07z\x02\x02\u0484\u048B\x05J&\x02\u0485\u048B\x05L\'" +
        "\x02\u0486\u048B\x05P)\x02\u0487\u048B\x05N(\x02\u0488\u048B\x05H%\x02" +
        "\u0489\u048B\x05R*\x02\u048A\u047A\x03\x02\x02\x02\u048A\u047B\x03\x02" +
        "\x02\x02\u048A\u047F\x03\x02\x02\x02\u048A\u0483\x03\x02\x02\x02\u048A" +
        "\u0484\x03\x02\x02\x02\u048A\u0485\x03\x02\x02\x02\u048A\u0486\x03\x02" +
        "\x02\x02\u048A\u0487\x03\x02\x02\x02\u048A\u0488\x03\x02\x02\x02\u048A" +
        "\u0489\x03\x02\x02\x02\u048BG\x03\x02\x02\x02\u048C\u048E\x07P\x02\x02" +
        "\u048D\u048C\x03\x02\x02\x02\u048D\u048E\x03\x02\x02\x02\u048E\u048F\x03" +
        "\x02\x02\x02\u048F\u0494\x05\xA0Q\x02\u0490\u0491\x05\xA0Q\x02\u0491\u0492" +
        "\x05X-\x02\u0492\u0494\x03\x02\x02\x02\u0493\u048D\x03\x02\x02\x02\u0493" +
        "\u0490\x03\x02\x02\x02\u0494I\x03\x02\x02\x02\u0495\u0497\b&\x01\x02\u0496" +
        "\u0498\x05\x98M\x02\u0497\u0496\x03\x02\x02\x02\u0497\u0498\x03\x02\x02" +
        "\x02\u0498\u0499\x03\x02\x02\x02\u0499\u049A\x05\x9CO\x02\u049A\u049B" +
        "\x07{\x02\x02\u049B\u049C\x05X-\x02\u049C\u04B7\x03\x02\x02\x02\u049D" +
        "\u049E\x05\x9AN\x02\u049E\u049F\x05\x9CO\x02\u049F\u04A0\x07{\x02\x02" +
        "\u04A0\u04A1\x05X-\x02\u04A1\u04B7\x03\x02\x02\x02\u04A2\u04A4\x05\x98" +
        "M\x02\u04A3\u04A2\x03\x02\x02\x02\u04A3\u04A4\x03\x02\x02\x02\u04A4\u04A5" +
        "\x03\x02\x02\x02\u04A5\u04A6\x05\x9CO\x02\u04A6\u04A7\x05X-\x02\u04A7" +
        "\u04B7\x03\x02\x02\x02\u04A8\u04A9\x05\x9AN\x02\u04A9\u04AA\x05\x9CO\x02" +
        "\u04AA\u04AB\x05X-\x02\u04AB\u04B7\x03\x02\x02\x02\u04AC\u04AE\x05t;\x02" +
        "\u04AD\u04AF\x05\x98M\x02\u04AE\u04AD\x03\x02\x02\x02\u04AE\u04AF\x03" +
        "\x02\x02\x02\u04AF\u04B0\x03\x02\x02\x02\u04B0\u04B1\x05\x9CO\x02\u04B1" +
        "\u04B7\x03\x02\x02\x02\u04B2\u04B3\x05t;\x02\u04B3\u04B4\x05\x9AN\x02" +
        "\u04B4\u04B5\x05\x9CO\x02\u04B5\u04B7\x03\x02\x02\x02\u04B6\u0495\x03" +
        "\x02\x02\x02\u04B6\u049D\x03\x02\x02\x02\u04B6\u04A3\x03\x02\x02\x02\u04B6" +
        "\u04A8\x03\x02\x02\x02\u04B6\u04AC\x03\x02\x02\x02\u04B6\u04B2\x03\x02" +
        "\x02\x02\u04B7\u04BE\x03\x02\x02\x02\u04B8\u04B9\f\x03\x02\x02\u04B9\u04BA" +
        "\x05\xAAV\x02\u04BA\u04BB\x05N(\x02\u04BB\u04BD\x03\x02\x02\x02\u04BC" +
        "\u04B8\x03\x02\x02\x02\u04BD\u04C0\x03\x02\x02\x02\u04BE\u04BC\x03\x02" +
        "\x02\x02\u04BE\u04BF\x03\x02\x02\x02\u04BFK\x03\x02\x02\x02\u04C0\u04BE" +
        "\x03\x02\x02\x02\u04C1\u04C2\b\'\x01\x02\u04C2\u04C3\x05\x98M\x02\u04C3" +
        "\u04C4\x05\x9EP\x02\u04C4\u04C5\x07{\x02\x02\u04C5\u04C6\x05X-\x02\u04C6" +
        "\u04E3\x03\x02\x02\x02\u04C7\u04C9\x05\x9AN\x02\u04C8\u04C7\x03\x02\x02" +
        "\x02\u04C8\u04C9\x03\x02\x02\x02\u04C9\u04CA\x03\x02\x02\x02\u04CA\u04CB" +
        "\x05\x9EP\x02\u04CB\u04CC\x07{\x02\x02\u04CC\u04CD\x05X-\x02\u04CD\u04E3" +
        "\x03\x02\x02\x02\u04CE\u04CF\x05\x98M\x02\u04CF\u04D0\x05\x9EP\x02\u04D0" +
        "\u04D1\x05X-\x02\u04D1\u04E3\x03\x02\x02\x02\u04D2\u04D4\x05\x9AN\x02" +
        "\u04D3\u04D2\x03\x02\x02\x02\u04D3\u04D4\x03\x02\x02\x02\u04D4\u04D5\x03" +
        "\x02\x02\x02\u04D5\u04D6\x05\x9EP\x02\u04D6\u04D7\x05X-\x02\u04D7\u04E3" +
        "\x03\x02\x02\x02\u04D8\u04D9\x05t;\x02\u04D9\u04DA\x05\x98M\x02\u04DA" +
        "\u04DB\x05\x9EP\x02\u04DB\u04E3\x03\x02\x02\x02\u04DC\u04DE\x05t;\x02" +
        "\u04DD\u04DF\x05\x9AN\x02\u04DE\u04DD\x03\x02\x02\x02\u04DE\u04DF\x03" +
        "\x02\x02\x02\u04DF\u04E0\x03\x02\x02\x02\u04E0\u04E1\x05\x9EP\x02\u04E1" +
        "\u04E3\x03\x02\x02\x02\u04E2\u04C1\x03\x02\x02\x02\u04E2\u04C8\x03\x02" +
        "\x02\x02\u04E2\u04CE\x03\x02\x02\x02\u04E2\u04D3\x03\x02\x02\x02\u04E2" +
        "\u04D8\x03\x02\x02\x02\u04E2\u04DC\x03\x02\x02\x02\u04E3\u04EA\x03\x02" +
        "\x02\x02\u04E4\u04E5\f\x03\x02\x02\u04E5\u04E6\x05\xAAV\x02\u04E6\u04E7" +
        "\x05N(\x02\u04E7\u04E9\x03\x02\x02\x02\u04E8\u04E4\x03\x02\x02\x02\u04E9" +
        "\u04EC\x03\x02\x02\x02\u04EA\u04E8\x03\x02\x02\x02\u04EA\u04EB\x03\x02" +
        "\x02\x02\u04EBM\x03\x02\x02\x02\u04EC\u04EA\x03\x02\x02\x02\u04ED\u04EF" +
        "\b(\x01\x02\u04EE\u04F0\x07P\x02\x02\u04EF\u04EE\x03\x02\x02\x02\u04EF" +
        "\u04F0\x03\x02\x02\x02\u04F0\u04F1\x03\x02\x02\x02\u04F1\u0500\x05\x98" +
        "M\x02\u04F2\u04F3\x05\x98M\x02\u04F3\u04F4\x07{\x02\x02\u04F4\u04F5\x05" +
        "X-\x02\u04F5\u0500\x03\x02\x02\x02\u04F6\u04F7\x05\x92J\x02\u04F7\u04F8" +
        "\x05\x98M\x02\u04F8\u0500\x03\x02\x02\x02\u04F9\u04FA\x05t;\x02\u04FA" +
        "\u04FB\x05\x98M\x02\u04FB\u0500\x03\x02\x02\x02\u04FC\u04FD\x05\x98M\x02" +
        "\u04FD\u04FE\x05X-\x02\u04FE\u0500\x03\x02\x02\x02\u04FF\u04ED\x03\x02" +
        "\x02\x02\u04FF\u04F2\x03\x02\x02\x02\u04FF\u04F6\x03\x02\x02\x02\u04FF" +
        "\u04F9\x03\x02\x02\x02\u04FF\u04FC\x03\x02\x02\x02\u0500\u050B\x03\x02" +
        "\x02\x02\u0501\u0502\f\x04\x02\x02\u0502\u0503\x05\xAAV\x02\u0503\u0504" +
        "\x05P)\x02\u0504\u050A\x03\x02\x02\x02\u0505\u0506\f\x03\x02\x02\u0506" +
        "\u0507\x05\xAAV\x02\u0507\u0508\x05H%\x02\u0508\u050A\x03\x02\x02\x02" +
        "\u0509\u0501\x03\x02\x02\x02\u0509\u0505\x03\x02\x02\x02\u050A\u050D\x03" +
        "\x02\x02\x02\u050B\u0509\x03\x02\x02\x02\u050B\u050C\x03\x02\x02\x02\u050C" +
        "O\x03\x02\x02\x02\u050D\u050B\x03\x02\x02\x02\u050E\u0510\b)\x01\x02\u050F" +
        "\u0511\x07P\x02\x02\u0510\u050F\x03\x02\x02\x02\u0510\u0511\x03\x02\x02" +
        "\x02\u0511\u0512\x03\x02\x02\x02\u0512\u0521\x05\x9AN\x02\u0513\u0514" +
        "\x05\x9AN\x02\u0514\u0515\x07{\x02\x02\u0515\u0516\x05X-\x02\u0516\u0521" +
        "\x03\x02\x02\x02\u0517\u0518\x05\x9AN\x02\u0518\u0519\x05X-\x02\u0519" +
        "\u0521\x03\x02\x02\x02\u051A\u051B\x05t;\x02\u051B\u051C\x05\x9AN\x02" +
        "\u051C\u0521\x03\x02\x02\x02\u051D\u051E\x05\x92J\x02\u051E\u051F\x05" +
        "\x9AN\x02\u051F\u0521\x03\x02\x02\x02\u0520\u050E\x03\x02\x02\x02\u0520" +
        "\u0513\x03\x02\x02\x02\u0520\u0517\x03\x02\x02\x02\u0520\u051A\x03\x02" +
        "\x02\x02\u0520\u051D\x03\x02\x02\x02\u0521\u0528\x03\x02\x02\x02\u0522" +
        "\u0523\f\x03\x02\x02\u0523\u0524\x05\xAAV\x02\u0524\u0525\x05H%\x02\u0525" +
        "\u0527\x03\x02\x02\x02\u0526\u0522\x03\x02\x02\x02\u0527\u052A\x03\x02" +
        "\x02\x02\u0528\u0526\x03\x02\x02\x02\u0528\u0529\x03\x02\x02\x02\u0529" +
        "Q\x03\x02\x02\x02\u052A\u0528\x03\x02\x02\x02\u052B\u052D\x07\'\x02\x02" +
        "\u052C\u052B\x03\x02\x02\x02\u052C\u052D\x03\x02\x02\x02\u052D\u052E\x03" +
        "\x02\x02\x02\u052E\u052F\x05\x98M\x02\u052F\u0530\x07c\x02\x02\u0530\u054B" +
        "\x03\x02\x02\x02\u0531\u0533\x07\'\x02\x02\u0532\u0531\x03\x02\x02\x02" +
        "\u0532\u0533\x03\x02\x02\x02\u0533\u0534\x03\x02\x02\x02\u0534\u0535\x07" +
        "\x16\x02\x02\u0535\u054B\x07c\x02\x02\u0536\u0538\x07\'\x02\x02\u0537" +
        "\u0536\x03\x02\x02\x02\u0537\u0538\x03\x02\x02\x02\u0538\u0539\x03\x02" +
        "\x02\x02\u0539\u053A\x07|\x02\x02\u053A\u054B\x07c\x02\x02\u053B\u053D" +
        "\x07\'\x02\x02\u053C\u053B\x03\x02\x02\x02\u053C\u053D\x03\x02\x02\x02" +
        "\u053D\u053E\x03\x02\x02\x02\u053E\u053F\x07}\x02\x02\u053F\u054B\x07" +
        "~\x02\x02\u0540\u0542\x07\'\x02\x02\u0541\u0540\x03\x02\x02\x02\u0541" +
        "\u0542\x03\x02\x02\x02\u0542\u0543\x03\x02\x02\x02\u0543\u0544\x07\x7F" +
        "\x02\x02\u0544\u054B\x07~\x02\x02\u0545\u0546\x07c\x02\x02\u0546\u054B" +
        "\x05V,\x02\u0547\u0548\x07c\x02\x02\u0548\u0549\x07{\x02\x02\u0549\u054B" +
        "\x05V,\x02\u054A\u052C\x03\x02\x02\x02\u054A\u0532\x03\x02\x02\x02\u054A" +
        "\u0537\x03\x02\x02\x02\u054A\u053C\x03\x02\x02\x02\u054A\u0541\x03\x02" +
        "\x02\x02\u054A\u0545\x03\x02\x02\x02\u054A\u0547\x03\x02\x02\x02\u054B" +
        "S\x03\x02\x02\x02\u054C\u0552\x05V,\x02\u054D\u054E\x05V,\x02\u054E\u054F" +
        "\x07\x06\x02\x02\u054F\u0550\x05T+\x02\u0550\u0552\x03\x02\x02\x02\u0551" +
        "\u054C\x03\x02\x02\x02\u0551\u054D\x03\x02\x02\x02\u0552U\x03\x02\x02" +
        "\x02\u0553\u0554\b,\x01\x02\u0554\u055C\x05X-\x02\u0555\u0556\x07\x80" +
        "\x02\x02\u0556\u055C\x05V,\r\u0557\u0558\x07\x81\x02\x02\u0558\u055C\x05" +
        "V,\f\u0559\u055A\t\x07\x02\x02\u055A\u055C\x05V,\v\u055B\u0553\x03\x02" +
        "\x02\x02\u055B\u0555\x03\x02\x02\x02\u055B\u0557\x03\x02\x02\x02\u055B" +
        "\u0559\x03\x02\x02\x02\u055C\u0577\x03\x02\x02\x02\u055D\u055E\f\n\x02" +
        "\x02\u055E\u055F\x07\x87\x02\x02\u055F\u0576\x05V,\v\u0560\u0561\f\t\x02" +
        "\x02\u0561\u0562\t\b\x02\x02\u0562\u0576\x05V,\n\u0563\u0564\f\b\x02\x02" +
        "\u0564\u0565\t\t\x02\x02\u0565\u0576\x05V,\t\u0566\u0567\f\x07\x02\x02" +
        "\u0567\u0568\t\n\x02\x02\u0568\u0576\x05V,\b\u0569\u056A\f\x06\x02\x02" +
        "\u056A\u056B\t\v\x02\x02\u056B\u0576\x05V,\x07\u056C\u056D\f\x05\x02\x02" +
        "\u056D\u056E\t\f\x02\x02\u056E\u0576\x05V,\x06\u056F\u0570\f\x04\x02\x02" +
        "\u0570\u0571\x07f\x02\x02\u0571\u0576\x05V,\x05\u0572\u0573\f\x03\x02" +
        "\x02\u0573\u0574\x07\x11\x02\x02\u0574\u0576\x05V,\x04\u0575\u055D\x03" +
        "\x02\x02\x02\u0575\u0560\x03\x02\x02\x02\u0575\u0563\x03\x02\x02\x02\u0575" +
        "\u0566\x03\x02\x02\x02\u0575\u0569\x03\x02\x02\x02\u0575\u056C\x03\x02" +
        "\x02\x02\u0575\u056F\x03\x02\x02\x02\u0575\u0572\x03\x02\x02\x02\u0576" +
        "\u0579\x03\x02\x02\x02\u0577\u0575\x03\x02\x02\x02\u0577\u0578\x03\x02" +
        "\x02\x02\u0578W\x03\x02\x02\x02\u0579\u0577\x03\x02\x02\x02\u057A\u0588" +
        "\x05l7\x02\u057B\u057C\x07\x81\x02\x02\u057C\u0588\x05l7\x02\u057D\u057E" +
        "\x07\xA2\x02\x02\u057E\u057F\x05V,\x02\u057F\u0580\x07\xA3\x02\x02\u0580" +
        "\u0588\x03\x02\x02\x02\u0581\u0588\x05`1\x02\u0582\u0588\x05b2\x02\u0583" +
        "\u0588\x05Z.\x02\u0584\u0585\x05:\x1E\x02\u0585\u0586\x05X-\x02\u0586" +
        "\u0588\x03\x02\x02\x02\u0587\u057A\x03\x02\x02\x02\u0587\u057B\x03\x02" +
        "\x02\x02\u0587\u057D\x03\x02\x02\x02\u0587\u0581\x03\x02\x02\x02\u0587" +
        "\u0582\x03\x02\x02\x02\u0587\u0583\x03\x02\x02\x02\u0587\u0584\x03\x02" +
        "\x02\x02\u0588Y\x03\x02\x02\x02\u0589\u0597\x07\u014F\x02\x02\u058A\u058C" +
        "\x07\'\x02\x02\u058B\u058A\x03\x02\x02\x02\u058B\u058C\x03\x02\x02\x02" +
        "\u058C\u058D\x03\x02\x02\x02\u058D\u0597\x07\xA4\x02\x02\u058E\u0597\x07" +
        "\xA5\x02\x02\u058F\u0597\x05@!\x02\u0590\u0597\x05<\x1F\x02\u0591\u0597" +
        "\x05> \x02\u0592\u0597\x05F$\x02\u0593\u0594\x05:\x1E\x02\u0594\u0595" +
        "\x05Z.\x02\u0595\u0597\x03\x02\x02\x02\u0596\u0589\x03\x02\x02\x02\u0596" +
        "\u058B\x03\x02\x02\x02\u0596\u058E\x03\x02\x02\x02\u0596\u058F\x03\x02" +
        "\x02\x02\u0596\u0590\x03\x02\x02\x02\u0596\u0591\x03\x02\x02\x02\u0596" +
        "\u0592\x03\x02\x02\x02\u0596\u0593\x03\x02\x02\x02\u0597[\x03\x02\x02" +
        "\x02\u0598\u0599\x05V,\x02\u0599\u059A\x05V,\x02\u059A\u05A6\x03\x02\x02" +
        "\x02\u059B\u059C\x05V,\x02\u059C\u059D\x07\xA6\x02\x02\u059D\u059E\x05" +
        "V,\x02\u059E\u059F\x05V,\x02\u059F\u05A6\x03\x02\x02\x02\u05A0\u05A1\x05" +
        "V,\x02\u05A1\u05A2\x07\xA6\x02\x02\u05A2\u05A3\x05V,\x02\u05A3\u05A6\x03" +
        "\x02\x02\x02\u05A4\u05A6\x05V,\x02\u05A5\u0598\x03\x02\x02\x02\u05A5\u059B" +
        "\x03\x02\x02\x02\u05A5\u05A0\x03\x02\x02\x02\u05A5\u05A4\x03\x02\x02\x02" +
        "\u05A6]\x03\x02\x02\x02\u05A7\u05BA\x07I\x02\x02\u05A8\u05BA\x07G\x02" +
        "\x02\u05A9\u05BA\x07\xA7\x02\x02\u05AA\u05BA\x07\xA8\x02\x02\u05AB\u05BA" +
        "\x07\xA9\x02\x02\u05AC\u05AE\t\r\x02\x02\u05AD\u05AC\x03\x02\x02\x02\u05AD" +
        "\u05AE\x03\x02\x02\x02\u05AE\u05AF\x03\x02\x02\x02\u05AF\u05BA\t\x0E\x02" +
        "\x02\u05B0\u05B2\x07\xAE\x02\x02\u05B1\u05B0\x03\x02\x02\x02\u05B1\u05B2" +
        "\x03\x02\x02\x02\u05B2\u05B3\x03\x02\x02\x02\u05B3\u05BA\t\x0F\x02\x02" +
        "\u05B4\u05B6\x07\xB1\x02\x02\u05B5\u05B7\x07\xB2\x02\x02\u05B6\u05B5\x03" +
        "\x02\x02\x02\u05B6\u05B7\x03\x02\x02\x02\u05B7\u05BA\x03\x02\x02\x02\u05B8" +
        "\u05BA\x05V,\x02\u05B9\u05A7\x03\x02\x02\x02\u05B9\u05A8\x03\x02\x02\x02" +
        "\u05B9\u05A9\x03\x02\x02\x02\u05B9\u05AA\x03\x02\x02\x02\u05B9\u05AB\x03" +
        "\x02\x02\x02\u05B9\u05AD\x03\x02\x02\x02\u05B9\u05B1\x03\x02\x02\x02\u05B9" +
        "\u05B4\x03\x02\x02\x02\u05B9\u05B8\x03\x02\x02\x02\u05BA_\x03\x02\x02" +
        "\x02\u05BB\u05BD\x07\xB3\x02\x02\u05BC\u05BB\x03\x02\x02\x02\u05BC\u05BD" +
        "\x03\x02\x02\x02\u05BD\u05BE\x03\x02\x02\x02\u05BE\u05D5\x05\x8EH\x02" +
        "\u05BF\u05C1\x07\xB3\x02\x02\u05C0\u05BF\x03\x02\x02\x02\u05C0\u05C1\x03" +
        "\x02\x02\x02\u05C1\u05C2\x03\x02\x02\x02\u05C2\u05C3\x05\x8EH\x02\u05C3" +
        "\u05C4\x07\x0E\x02\x02\u05C4\u05C5\x05\x8CG\x02\u05C5\u05D5\x03\x02\x02" +
        "\x02\u05C6\u05C8\x07\xB3\x02\x02\u05C7\u05C6\x03\x02\x02\x02\u05C7\u05C8" +
        "\x03\x02\x02\x02\u05C8\u05C9\x03\x02\x02\x02\u05C9\u05CA\x05\x8EH\x02" +
        "\u05CA\u05CB\x05\x8AF\x02\u05CB\u05D5\x03\x02\x02\x02\u05CC\u05CE\x07" +
        "\xB3\x02\x02\u05CD\u05CC\x03\x02\x02\x02\u05CD\u05CE\x03\x02\x02\x02\u05CE" +
        "\u05CF\x03\x02\x02\x02\u05CF\u05D0\x05\x8EH\x02\u05D0\u05D1\x05\x8AF\x02" +
        "\u05D1\u05D2\x07\x0E\x02\x02\u05D2\u05D3\x05\x8CG\x02\u05D3\u05D5\x03" +
        "\x02\x02\x02\u05D4\u05BC\x03\x02\x02\x02\u05D4\u05C0\x03\x02\x02\x02\u05D4" +
        "\u05C7\x03\x02\x02\x02\u05D4\u05CD\x03\x02\x02\x02\u05D5a\x03\x02\x02" +
        "\x02\u05D6\u05DE\x05d3\x02\u05D7\u05D8\x07\u014F\x02\x02\u05D8\u05DA\x07" +
        "\xA2\x02\x02\u05D9\u05DB\x05T+\x02\u05DA\u05D9\x03\x02\x02\x02\u05DA\u05DB" +
        "\x03\x02\x02\x02\u05DB\u05DC\x03\x02\x02\x02\u05DC\u05DE\x07\xA3\x02\x02" +
        "\u05DD\u05D6\x03\x02\x02\x02\u05DD\u05D7\x03\x02\x02\x02\u05DEc\x03\x02" +
        "\x02\x02\u05DF\u05E0\x07\'\x02\x02\u05E0\u05F3\x05f4\x02\u05E1\u05E3\x07" +
        "\'\x02\x02\u05E2\u05E1\x03\x02\x02\x02\u05E2\u05E3\x03\x02\x02\x02\u05E3" +
        "\u05E4\x03\x02\x02\x02\u05E4\u05E5\x05h5\x02\u05E5\u05E6\x05\xAAV\x02" +
        "\u05E6\u05E7\x05X-\x02\u05E7\u05F3\x03\x02\x02\x02\u05E8\u05E9\x05h5\x02" +
        "\u05E9\u05EA\x07\xA2\x02\x02\u05EA\u05EB\x05T+\x02\u05EB\u05EC\x07\xA3" +
        "\x02\x02\u05EC\u05F3\x03\x02\x02\x02\u05ED\u05EE\x05j6\x02\u05EE\u05EF" +
        "\x07\xA2\x02\x02\u05EF\u05F0\x05T+\x02\u05F0\u05F1\x07\xA3\x02\x02\u05F1" +
        "\u05F3\x03\x02\x02\x02\u05F2\u05DF\x03\x02\x02\x02\u05F2\u05E2\x03\x02" +
        "\x02\x02";
    HyperTalkParser._serializedATNSegment3 = "\u05F2\u05E8\x03\x02\x02\x02\u05F2\u05ED\x03\x02\x02\x02\u05F3e\x03\x02" +
        "\x02\x02\u05F4\u063F\x07\xB4\x02\x02\u05F5\u063F\x07\xB5\x02\x02\u05F6" +
        "\u063F\x07\xB6\x02\x02\u05F7\u063F\t\x03\x02\x02\u05F8\u063F\x07\xB7\x02" +
        "\x02\u05F9\u063F\x07\xB8\x02\x02\u05FA\u063F\x07\xB9\x02\x02\u05FB\u063F" +
        "\x05\x88E\x02\u05FC\u05FD\x05*\x16\x02\u05FD\u05FE\x07i\x02\x02\u05FE" +
        "\u063F\x03\x02\x02\x02\u05FF\u0600\x05*\x16\x02\u0600\u0601\x07h\x02\x02" +
        "\u0601\u063F\x03\x02\x02\x02\u0602\u063F\x07\x16\x02\x02\u0603\u063F\x07" +
        "\xBA\x02\x02\u0604\u0605\x07\xBB\x02\x02\u0605\u0607\x07\xBC\x02\x02\u0606" +
        "\u0608\x05\x98M\x02\u0607\u0606\x03\x02\x02\x02\u0607\u0608\x03\x02\x02" +
        "\x02\u0608\u0609\x03\x02\x02\x02\u0609\u063F\x07\xBD\x02\x02\u060A\u060B" +
        "\x07\xBB\x02\x02\u060B\u060C\x07\xBC\x02\x02\u060C\u060D\x05\x9AN\x02" +
        "\u060D\u060E\x07\xBD\x02\x02\u060E\u063F\x03\x02\x02\x02\u060F\u0610\x07" +
        "\xBB\x02\x02\u0610\u0612\x07\xBC\x02\x02\u0611\u0613\x05\x98M\x02\u0612" +
        "\u0611\x03\x02\x02\x02\u0612\u0613\x03\x02\x02\x02\u0613\u0614\x03\x02" +
        "\x02\x02\u0614\u063F\x05\x9CO\x02\u0615\u0616\x07\xBB\x02\x02\u0616\u0617" +
        "\x07\xBC\x02\x02\u0617\u0618\x05\x9AN\x02\u0618\u0619\x05\x9CO\x02\u0619" +
        "\u063F\x03\x02\x02\x02\u061A\u061B\x07\xBB\x02\x02\u061B\u061C\x07\xBC" +
        "\x02\x02\u061C\u061D\x05\x98M\x02\u061D\u061E\x05\x9EP\x02\u061E\u063F" +
        "\x03\x02\x02\x02\u061F\u0620\x07\xBB\x02\x02\u0620\u0622\x07\xBC\x02\x02" +
        "\u0621\u0623\x05\x9AN\x02\u0622\u0621\x03\x02\x02\x02\u0622\u0623\x03" +
        "\x02\x02\x02\u0623\u0624\x03\x02\x02\x02\u0624\u063F\x05\x9EP\x02\u0625" +
        "\u0626\x07\xBB\x02\x02\u0626\u0627\x07\xBC\x02\x02\u0627\u063F\x05\x96" +
        "L\x02\u0628\u0629\x07\xBB\x02\x02\u0629\u062A\x07\xBC\x02\x02\u062A\u063F" +
        "\x05\x9AN\x02\u062B\u062C\x07\xBB\x02\x02\u062C\u062D\x07\xBC\x02\x02" +
        "\u062D\u062E\x070\x02\x02\u062E\u063F\x05\x96L\x02\u062F\u0630\x07\xBB" +
        "\x02\x02\u0630\u0631\x07\xBC\x02\x02\u0631\u063F\x07\xBE\x02\x02\u0632" +
        "\u0633\x07\xBB\x02\x02\u0633\u0634\x07\xBC\x02\x02\u0634\u063F\x07\xBF" +
        "\x02\x02\u0635\u063F\x07\xBE\x02\x02\u0636\u063F\x07\xC0\x02\x02\u0637" +
        "\u063F\x07\xC1\x02\x02\u0638\u063F\x07\xC2\x02\x02\u0639\u063F\x07\xA5" +
        "\x02\x02\u063A\u063F\x07\xC3\x02\x02\u063B\u063F\x07\xC4\x02\x02\u063C" +
        "\u063F\x07\xBF\x02\x02\u063D\u063F\x07\xC5\x02\x02\u063E\u05F4\x03\x02" +
        "\x02\x02\u063E\u05F5\x03\x02\x02\x02\u063E\u05F6\x03\x02\x02\x02\u063E" +
        "\u05F7\x03\x02\x02\x02\u063E\u05F8\x03\x02\x02\x02\u063E\u05F9\x03\x02" +
        "\x02\x02\u063E\u05FA\x03\x02\x02\x02\u063E\u05FB\x03\x02\x02\x02\u063E" +
        "\u05FC\x03\x02\x02\x02\u063E\u05FF\x03\x02\x02\x02\u063E\u0602\x03\x02" +
        "\x02\x02\u063E\u0603\x03\x02\x02\x02\u063E\u0604\x03\x02\x02\x02\u063E" +
        "\u060A\x03\x02\x02\x02\u063E\u060F\x03\x02\x02\x02\u063E\u0615\x03\x02" +
        "\x02\x02\u063E\u061A\x03\x02\x02\x02\u063E\u061F\x03\x02\x02\x02\u063E" +
        "\u0625\x03\x02\x02\x02\u063E\u0628\x03\x02\x02\x02\u063E\u062B\x03\x02" +
        "\x02\x02\u063E\u062F\x03\x02\x02\x02\u063E\u0632\x03\x02\x02\x02\u063E" +
        "\u0635\x03\x02\x02\x02\u063E\u0636\x03\x02\x02\x02\u063E\u0637\x03\x02" +
        "\x02\x02\u063E\u0638\x03\x02\x02\x02\u063E\u0639\x03\x02\x02\x02\u063E" +
        "\u063A\x03\x02\x02\x02\u063E\u063B\x03\x02\x02\x02\u063E\u063C\x03\x02" +
        "\x02\x02\u063E\u063D\x03\x02\x02\x02\u063Fg\x03\x02\x02\x02\u0640\u0697" +
        "\x07\xC6\x02\x02\u0641\u0697\x07\xC7\x02\x02\u0642\u0697\x07\xC8\x02\x02" +
        "\u0643\u0697\x07\xC9\x02\x02\u0644\u0645\x07\xBB\x02\x02\u0645\u0647\x07" +
        "\xBC\x02\x02\u0646\u0648\x05\x98M\x02\u0647\u0646\x03\x02\x02\x02\u0647" +
        "\u0648\x03\x02\x02\x02\u0648\u0649\x03\x02\x02\x02\u0649\u0697\x07\xBD" +
        "\x02\x02\u064A\u064B\x07\xBB\x02\x02\u064B\u064C\x07\xBC\x02\x02\u064C" +
        "\u064D\x05\x9AN\x02\u064D\u064E\x07\xBD\x02\x02\u064E\u0697\x03\x02\x02" +
        "\x02\u064F\u0650\x07\xBB\x02\x02\u0650\u0652\x07\xBC\x02\x02\u0651\u0653" +
        "\x05\x98M\x02\u0652\u0651\x03\x02\x02\x02\u0652\u0653\x03\x02\x02\x02" +
        "\u0653\u0654\x03\x02\x02\x02\u0654\u0697\x05\x9CO\x02\u0655\u0656\x07" +
        "\xBB\x02\x02\u0656\u0657\x07\xBC\x02\x02\u0657\u0658\x05\x9AN\x02\u0658" +
        "\u0659\x05\x9CO\x02\u0659\u0697\x03\x02\x02\x02\u065A\u065B\x07\xBB\x02" +
        "\x02\u065B\u065C\x07\xBC\x02\x02\u065C\u065D\x05\x98M\x02\u065D\u065E" +
        "\x05\x9EP\x02\u065E\u0697\x03\x02\x02\x02\u065F\u0660\x07\xBB\x02\x02" +
        "\u0660\u0662\x07\xBC\x02\x02\u0661\u0663\x05\x9AN\x02\u0662\u0661\x03" +
        "\x02\x02\x02\u0662\u0663\x03\x02\x02\x02\u0663\u0664\x03\x02\x02\x02\u0664" +
        "\u0697\x05\x9EP\x02\u0665\u0666\x07\xBB\x02\x02\u0666\u0667\x07\xBC\x02" +
        "\x02\u0667\u0697\x05\x96L\x02\u0668\u0669\x07\xBB\x02\x02\u0669\u066A" +
        "\x07\xBC\x02\x02\u066A\u0697\x05\x9AN\x02\u066B\u066C\x07\xBB\x02\x02" +
        "\u066C\u066D\x07\xBC\x02\x02\u066D\u066E\x070\x02\x02\u066E\u0697\x05" +
        "\x96L\x02\u066F\u0670\x07\xBB\x02\x02\u0670\u0671\x07\xBC\x02\x02\u0671" +
        "\u0697\x05\xA2R\x02\u0672\u0673\x07\xBB\x02\x02\u0673\u0674\x07\xBC\x02" +
        "\x02\u0674\u0697\x05\xA4S\x02\u0675\u0676\x07\xBB\x02\x02\u0676\u0677" +
        "\x07\xBC\x02\x02\u0677\u0697\x05\xA8U\x02\u0678\u0679\x07\xBB\x02\x02" +
        "\u0679\u067A\x07\xBC\x02\x02\u067A\u0697\x05\xA6T\x02\u067B\u067C\x07" +
        "\xBB\x02\x02\u067C\u067D\x07\xBC\x02\x02\u067D\u0697\x07\xCA\x02\x02\u067E" +
        "\u067F\x07\xBB\x02\x02\u067F\u0680\x07\xBC\x02\x02\u0680\u0697\x05\x96" +
        "L\x02\u0681\u0697\x07\xBB\x02\x02\u0682\u0697\x07\xCB\x02\x02\u0683\u0697" +
        "\x07\xCC\x02\x02\u0684\u0697\x07\xCD\x02\x02\u0685\u0697\x07\xCE\x02\x02" +
        "\u0686\u0697\x07\xCF\x02\x02\u0687\u0697\x07\xD0\x02\x02\u0688\u0697\x07" +
        "\xD1\x02\x02\u0689\u0697\x07\xD2\x02\x02\u068A\u0697\x07\xD3\x02\x02\u068B" +
        "\u0697\x07\xD4\x02\x02\u068C\u0697\x07\xD5\x02\x02\u068D\u0697\x07\xD6" +
        "\x02\x02\u068E\u0697\x07\xD7\x02\x02\u068F\u0697\x07\xD8\x02\x02\u0690" +
        "\u0697\x07\xD9\x02\x02\u0691\u0697\x07\xDA\x02\x02\u0692\u0697\x07\xDB" +
        "\x02\x02\u0693\u0697\x07\xDC\x02\x02\u0694\u0697\x07\xC0\x02\x02\u0695" +
        "\u0697\x07\xDD\x02\x02\u0696\u0640\x03\x02\x02\x02\u0696\u0641\x03\x02" +
        "\x02\x02\u0696\u0642\x03\x02\x02\x02\u0696\u0643\x03\x02\x02\x02\u0696" +
        "\u0644\x03\x02\x02\x02\u0696\u064A\x03\x02\x02\x02\u0696\u064F\x03\x02" +
        "\x02\x02\u0696\u0655\x03\x02\x02\x02\u0696\u065A\x03\x02\x02\x02\u0696" +
        "\u065F\x03\x02\x02\x02\u0696\u0665\x03\x02\x02\x02\u0696\u0668\x03\x02" +
        "\x02\x02\u0696\u066B\x03\x02\x02\x02\u0696\u066F\x03\x02\x02\x02\u0696" +
        "\u0672\x03\x02\x02\x02\u0696\u0675\x03\x02\x02\x02\u0696\u0678\x03\x02" +
        "\x02\x02\u0696\u067B\x03\x02\x02\x02\u0696\u067E\x03\x02\x02\x02\u0696" +
        "\u0681\x03\x02\x02\x02\u0696\u0682\x03\x02\x02\x02\u0696\u0683\x03\x02" +
        "\x02\x02\u0696\u0684\x03\x02\x02\x02\u0696\u0685\x03\x02\x02\x02\u0696" +
        "\u0686\x03\x02\x02\x02\u0696\u0687\x03\x02\x02\x02\u0696\u0688\x03\x02" +
        "\x02\x02\u0696\u0689\x03\x02\x02\x02\u0696\u068A\x03\x02\x02\x02\u0696" +
        "\u068B\x03\x02\x02\x02\u0696\u068C\x03\x02\x02\x02\u0696\u068D\x03\x02" +
        "\x02\x02\u0696\u068E\x03\x02\x02\x02\u0696\u068F\x03\x02\x02\x02\u0696" +
        "\u0690\x03\x02\x02\x02\u0696\u0691\x03\x02\x02\x02\u0696\u0692\x03\x02" +
        "\x02\x02\u0696\u0693\x03\x02\x02\x02\u0696\u0694\x03\x02\x02\x02\u0696" +
        "\u0695\x03\x02\x02\x02\u0697i\x03\x02\x02\x02\u0698\u069D\x05h5\x02\u0699" +
        "\u069D\x07\xDE\x02\x02\u069A\u069D\x07\xDF\x02\x02\u069B\u069D\x07\xE0" +
        "\x02\x02\u069C\u0698\x03\x02\x02\x02\u069C\u0699\x03\x02\x02\x02\u069C" +
        "\u069A\x03\x02\x02\x02\u069C\u069B\x03\x02\x02\x02\u069Dk\x03\x02\x02" +
        "\x02\u069E\u06A5\x05p9\x02\u069F\u06A5\x05z>\x02\u06A0\u06A5\x05x=\x02" +
        "\u06A1\u06A5\x05|?\x02\u06A2\u06A5\x05~@\x02\u06A3\u06A5\x07\u0151\x02" +
        "\x02\u06A4\u069E\x03\x02\x02\x02\u06A4\u069F\x03\x02\x02\x02\u06A4\u06A0" +
        "\x03\x02\x02\x02\u06A4\u06A1\x03\x02\x02\x02\u06A4\u06A2\x03\x02\x02\x02" +
        "\u06A4\u06A3\x03\x02\x02\x02\u06A5m\x03\x02\x02\x02\u06A6\u06A7\t\x10" +
        "\x02\x02\u06A7o\x03\x02\x02\x02\u06A8\u06B4\x05r:\x02\u06A9\u06B4\x07" +
        "H\x02\x02\u06AA\u06B4\x07\xE2\x02\x02\u06AB\u06B4\x07\xE3\x02\x02\u06AC" +
        "\u06B4\x07\b\x02\x02\u06AD\u06B4\x07\xE4\x02\x02\u06AE\u06B4\x07\xE5\x02" +
        "\x02\u06AF\u06B4\x07\xE6\x02\x02\u06B0\u06B4\x07\xE7\x02\x02\u06B1\u06B4" +
        "\x07\xE8\x02\x02\u06B2\u06B4\x07\xE9\x02\x02\u06B3\u06A8\x03\x02\x02\x02" +
        "\u06B3\u06A9\x03\x02\x02\x02\u06B3\u06AA\x03\x02\x02\x02\u06B3\u06AB\x03" +
        "\x02\x02\x02\u06B3\u06AC\x03\x02\x02\x02\u06B3\u06AD\x03\x02\x02\x02\u06B3" +
        "\u06AE\x03\x02\x02\x02\u06B3\u06AF\x03\x02\x02\x02\u06B3\u06B0\x03\x02" +
        "\x02\x02\u06B3\u06B1\x03\x02\x02\x02\u06B3\u06B2\x03\x02\x02\x02\u06B4" +
        "q\x03\x02\x02\x02\u06B5\u06B6\t\x11\x02\x02\u06B6s\x03\x02\x02\x02\u06B7" +
        "\u06B9\x07\'\x02\x02\u06B8\u06B7\x03\x02\x02\x02\u06B8\u06B9\x03\x02\x02" +
        "\x02\u06B9\u06BA\x03\x02\x02\x02\u06BA\u06BB\x05v<\x02\u06BBu\x03\x02" +
        "\x02\x02\u06BC\u06CA\x07\xF5\x02\x02\u06BD\u06CA\x07\xF6\x02\x02\u06BE" +
        "\u06CA\x07\xF7\x02\x02\u06BF\u06CA\x07\xF8\x02\x02\u06C0\u06CA\x07\xF9" +
        "\x02\x02\u06C1\u06CA\x07\xFA\x02\x02\u06C2\u06CA\x07\xFB\x02\x02\u06C3" +
        "\u06CA\x07\xFC\x02\x02\u06C4\u06CA\x07\xFD\x02\x02\u06C5\u06CA\x07\xFE" +
        "\x02\x02\u06C6\u06CA\t\x12\x02\x02\u06C7\u06CA\x07\u0101\x02\x02\u06C8" +
        "\u06CA\x07\u0102\x02\x02\u06C9\u06BC\x03\x02\x02\x02\u06C9\u06BD\x03\x02" +
        "\x02\x02\u06C9\u06BE\x03\x02\x02\x02\u06C9\u06BF\x03\x02\x02\x02\u06C9" +
        "\u06C0\x03\x02\x02\x02\u06C9\u06C1\x03\x02\x02\x02\u06C9\u06C2\x03\x02" +
        "\x02\x02\u06C9\u06C3\x03\x02\x02\x02\u06C9\u06C4\x03\x02\x02\x02\u06C9" +
        "\u06C5\x03\x02\x02\x02\u06C9\u06C6\x03\x02\x02\x02\u06C9\u06C7\x03\x02" +
        "\x02\x02\u06C9\u06C8\x03\x02\x02\x02\u06CAw\x03\x02\x02\x02\u06CB\u06CC" +
        "\t\x13\x02\x02\u06CCy\x03\x02\x02\x02\u06CD\u06CE\t\x14\x02\x02\u06CE" +
        "{\x03\x02\x02\x02\u06CF\u06D0\t\x15\x02\x02\u06D0}\x03\x02\x02\x02\u06D1" +
        "\u06D2\t\x16\x02\x02\u06D2\x7F\x03\x02\x02\x02\u06D3\u06D4\t\x17\x02\x02" +
        "\u06D4\x81\x03\x02\x02\x02\u06D5\u06DE\x07\u0117\x02\x02\u06D6\u06DE\x07" +
        "\x1D\x02\x02\u06D7\u06DE\x07\u0111\x02\x02\u06D8\u06DE\x07\u0112\x02\x02" +
        "\u06D9\u06DE\x07\u0113\x02\x02\u06DA\u06DE\x07\u0114\x02\x02\u06DB\u06DE" +
        "\x07\u0115\x02\x02\u06DC\u06DE\x05T+\x02\u06DD\u06D5\x03\x02\x02\x02\u06DD" +
        "\u06D6\x03\x02\x02\x02\u06DD\u06D7\x03\x02\x02\x02\u06DD\u06D8\x03\x02" +
        "\x02\x02\u06DD\u06D9\x03\x02\x02\x02\u06DD\u06DA\x03\x02\x02\x02\u06DD" +
        "\u06DB\x03\x02\x02\x02\u06DD\u06DC\x03\x02\x02\x02\u06DE\x83\x03\x02\x02" +
        "\x02\u06DF\u06E0\t\x18\x02\x02\u06E0\x85\x03\x02\x02\x02\u06E1\u06E2\t" +
        "\x19\x02\x02\u06E2\x87\x03\x02\x02\x02\u06E3\u06E4\t\x1A\x02\x02\u06E4" +
        "\x89\x03\x02\x02\x02\u06E5\u06EC\x07\u011D\x02\x02\u06E6\u06EC\t\x1B\x02" +
        "\x02\u06E7\u06E8\x07\u0120\x02\x02\u06E8\u06EC\x07\u011D\x02\x02\u06E9" +
        "\u06EA\x07\u0120\x02\x02\u06EA\u06EC\t\x1B\x02\x02\u06EB\u06E5\x03\x02" +
        "\x02\x02\u06EB\u06E6\x03\x02\x02\x02\u06EB\u06E7\x03\x02\x02\x02\u06EB" +
        "\u06E9\x03\x02\x02\x02\u06EC\x8B\x03\x02\x02\x02\u06ED\u06F3\x07\u0121" +
        "\x02\x02\u06EE\u06F3\x07\u0122\x02\x02\u06EF\u06F3\t\x1C\x02\x02\u06F0" +
        "\u06F3\x07\u0125\x02\x02\u06F1\u06F3\x07\u0126\x02\x02\u06F2\u06ED\x03" +
        "\x02\x02\x02\u06F2\u06EE\x03\x02\x02\x02\u06F2\u06EF\x03\x02\x02\x02\u06F2" +
        "\u06F0\x03\x02\x02\x02\u06F2\u06F1\x03\x02\x02\x02\u06F3\x8D\x03\x02\x02" +
        "\x02\u06F4\u0736\x07\u0127\x02\x02\u06F5\u06F6\x07\u0128\x02\x02\u06F6" +
        "\u06F7\x07\u0129\x02\x02\u06F7\u0736\x07<\x02\x02\u06F8\u06F9\x07\u0128" +
        "\x02\x02\u06F9\u06FA\x07\u0129\x02\x02\u06FA\u0736\x07\x19\x02\x02\u06FB" +
        "\u0736\x07\u012A\x02\x02\u06FC\u06FD\x07\u012B\x02\x02\u06FD\u0736\x07" +
        "<\x02\x02\u06FE\u06FF\x07\u012B\x02\x02\u06FF\u0736\x07\x19\x02\x02\u0700" +
        "\u0736\x07\u0117\x02\x02\u0701\u0702\x07@\x02\x02\u0702\u0736\x07\u0103" +
        "\x02\x02\u0703\u0704\x07@\x02\x02\u0704\u0736\x07w\x02\x02\u0705\u0706" +
        "\x07@\x02\x02\u0706\u0736\x07\u0112\x02\x02\u0707\u0708\x07@\x02\x02\u0708" +
        "\u0736\x07\u0113\x02\x02\u0709\u070A\x07\u0116\x02\x02\u070A\u0736\x07" +
        "w\x02\x02\u070B\u070C\x07\u0116\x02\x02\u070C\u0736\x07\u0103\x02\x02" +
        "\u070D\u070E\x07\u0116\x02\x02\u070E\u0736\x07\u0112\x02\x02\u070F\u0710" +
        "\x07\u0116\x02\x02\u0710\u0736\x07\u0113\x02\x02\u0711\u0712\x07\u012C" +
        "\x02\x02\u0712\u0713\x07\x0E\x02\x02\u0713\u0736\x07\u0114\x02\x02\u0714" +
        "\u0715\x07\u012C\x02\x02\u0715\u0716\x07\x0E\x02\x02\u0716\u0736\x07\u0115" +
        "\x02\x02\u0717\u0718\x07\u012C\x02\x02\u0718\u0719\x07\x0E\x02\x02\u0719" +
        "\u0736\x07\u0111\x02\x02\u071A\u071B\x07\u012D\x02\x02\u071B\u071C\x07" +
        "\x1B\x02\x02\u071C\u0736\x07\u0114\x02\x02\u071D\u071E\x07\u012D\x02\x02" +
        "\u071E\u071F\x07\x1B\x02\x02\u071F\u0736\x07\u0115\x02\x02\u0720\u0721" +
        "\x07\u012D\x02\x02\u0721\u0722\x07\x1B\x02\x02\u0722\u0736\x07\u0111\x02" +
        "\x02\u0723\u0724\x07\u012E\x02\x02\u0724\u0736\x07\u012F\x02\x02\u0725" +
        "\u0726\x07\u0130\x02\x02\u0726\u0736\x07\u0103\x02\x02\u0727\u0728\x07" +
        "\u0130\x02\x02\u0728\u0736\x07w\x02\x02\u0729\u072A\x07\u0130\x02\x02" +
        "\u072A\u0736\x07\u0112\x02\x02\u072B\u072C\x07\u0130\x02\x02\u072C\u0736" +
        "\x07\u0113\x02\x02\u072D\u072E\x07\u0131\x02\x02\u072E\u0736\x07\u0132" +
        "\x02\x02\u072F\u0730\x07\u0131\x02\x02\u0730\u0736\x07\u0133\x02\x02\u0731" +
        "\u0732\x07\u0131\x02\x02\u0732\u0736\x07<\x02\x02\u0733\u0734\x07\u0131" +
        "\x02\x02\u0734\u0736\x07\x19\x02\x02\u0735\u06F4\x03\x02\x02\x02\u0735" +
        "\u06F5\x03\x02\x02\x02\u0735\u06F8\x03\x02\x02\x02\u0735\u06FB\x03\x02" +
        "\x02\x02\u0735\u06FC\x03\x02\x02\x02\u0735\u06FE\x03\x02\x02\x02\u0735" +
        "\u0700\x03\x02\x02\x02\u0735\u0701\x03\x02\x02\x02\u0735\u0703\x03\x02" +
        "\x02\x02\u0735\u0705\x03\x02\x02\x02\u0735\u0707\x03\x02\x02\x02\u0735" +
        "\u0709\x03\x02\x02\x02\u0735\u070B\x03\x02\x02\x02\u0735\u070D\x03\x02" +
        "\x02\x02\u0735\u070F\x03\x02\x02\x02\u0735\u0711\x03\x02\x02\x02\u0735" +
        "\u0714\x03\x02\x02\x02\u0735\u0717\x03\x02\x02\x02\u0735\u071A\x03\x02" +
        "\x02\x02\u0735\u071D\x03\x02\x02\x02\u0735\u0720\x03\x02\x02\x02\u0735" +
        "\u0723\x03\x02\x02\x02\u0735\u0725\x03\x02\x02\x02\u0735\u0727\x03\x02" +
        "\x02\x02\u0735\u0729\x03\x02\x02\x02\u0735\u072B\x03\x02\x02\x02\u0735" +
        "\u072D\x03\x02\x02\x02\u0735\u072F\x03\x02\x02\x02\u0735\u0731\x03\x02" +
        "\x02\x02\u0735\u0733\x03\x02\x02\x02\u0736\x8F\x03\x02\x02\x02\u0737\u073B" +
        "\x07\xB9\x02\x02\u0738\u073B\x07\u0134\x02\x02\u0739\u073B\x05\x88E\x02" +
        "\u073A\u0737\x03\x02\x02\x02\u073A\u0738\x03\x02\x02\x02\u073A\u0739\x03" +
        "\x02\x02\x02\u073B\x91\x03\x02\x02\x02\u073C\u073E\x07\'\x02\x02\u073D" +
        "\u073C\x03\x02\x02\x02\u073D\u073E\x03\x02\x02\x02\u073E\u073F\x03\x02" +
        "\x02\x02\u073F\u0746\x07;\x02\x02\u0740\u0742\x07\'\x02\x02\u0741\u0740" +
        "\x03\x02\x02\x02\u0741\u0742\x03\x02\x02\x02\u0742\u0743\x03\x02\x02\x02" +
        "\u0743\u0746\t\x1D\x02\x02\u0744\u0746\x07P\x02\x02\u0745\u073D\x03\x02" +
        "\x02\x02\u0745\u0741\x03\x02\x02\x02\u0745\u0744\x03\x02\x02\x02\u0746" +
        "\x93\x03\x02\x02\x02\u0747\u0749\x07\'\x02\x02\u0748\u0747\x03\x02\x02" +
        "\x02\u0748\u0749\x03\x02\x02\x02\u0749\u074A\x03\x02\x02\x02\u074A\u074E" +
        "\t\x1E\x02\x02\u074B\u074F\x07\u0138\x02\x02\u074C\u074F\x07c\x02\x02" +
        "\u074D\u074F\x03\x02\x02\x02\u074E\u074B\x03\x02\x02\x02\u074E\u074C\x03" +
        "\x02\x02\x02\u074E\u074D\x03\x02\x02\x02\u074F\x95\x03\x02\x02\x02\u0750" +
        "\u0751\t\x1F\x02\x02\u0751\x97\x03\x02\x02\x02\u0752\u0753\t \x02\x02" +
        "\u0753\x99\x03\x02\x02\x02\u0754\u0755\t!\x02\x02\u0755\x9B\x03\x02\x02" +
        "\x02\u0756\u0757\t\"\x02\x02\u0757\x9D\x03\x02\x02\x02\u0758\u0759\t#" +
        "\x02\x02\u0759\x9F\x03\x02\x02\x02\u075A\u075B\x07Q\x02\x02\u075B\xA1" +
        "\x03\x02\x02\x02\u075C\u075D\t$\x02\x02\u075D\xA3\x03\x02\x02\x02\u075E" +
        "\u075F\t%\x02\x02\u075F\xA5\x03\x02\x02\x02\u0760\u0761\t&\x02\x02\u0761" +
        "\xA7\x03\x02\x02\x02\u0762\u0763\t\'\x02\x02\u0763\xA9\x03\x02\x02\x02" +
        "\u0764\u0765\t(\x02\x02\u0765\xAB\x03\x02\x02\x02\x9B\xB5\xBB\xC7\xCE" +
        "\xD1\xDC\xDF\xE4\xEB\xEE\xF8\xFB\u0100\u0104\u010E\u0115\u011D\u011F\u0129" +
        "\u0131\u0138\u013D\u0142\u0145\u0148\u014E\u0151\u0156\u0158\u015F\u0163" +
        "\u0169\u016C\u0170\u0177\u0182\u0187\u018C\u01C0\u020B\u0221\u0224\u022F" +
        "\u0232\u023A\u023D\u0246\u0249\u0250\u0259\u02B5\u0306\u0310\u0317\u0320" +
        "\u0328\u0338\u0344\u0397\u03A4\u03AB\u03B5\u03BB\u03C0\u03C3\u03C9\u03CF" +
        "\u03D5\u03DB\u03E2\u03EC\u03F2\u03FE\u0409\u0444\u044A\u0452\u045E\u0462" +
        "\u0465\u046A\u0471\u0478\u048A\u048D\u0493\u0497\u04A3\u04AE\u04B6\u04BE" +
        "\u04C8\u04D3\u04DE\u04E2\u04EA\u04EF\u04FF\u0509\u050B\u0510\u0520\u0528" +
        "\u052C\u0532\u0537\u053C\u0541\u054A\u0551\u055B\u0575\u0577\u0587\u058B" +
        "\u0596\u05A5\u05AD\u05B1\u05B6\u05B9\u05BC\u05C0\u05C7\u05CD\u05D4\u05DA" +
        "\u05DD\u05E2\u05F2\u0607\u0612\u0622\u063E\u0647\u0652\u0662\u0696\u069C" +
        "\u06A4\u06B3\u06B8\u06C9\u06DD\u06EB\u06F2\u0735\u073A\u073D\u0741\u0745" +
        "\u0748\u074E";
    HyperTalkParser._serializedATN = Utils.join([
        HyperTalkParser._serializedATNSegment0,
        HyperTalkParser._serializedATNSegment1,
        HyperTalkParser._serializedATNSegment2,
        HyperTalkParser._serializedATNSegment3,
    ], "");
    return HyperTalkParser;
}(Parser_1.Parser));
exports.HyperTalkParser = HyperTalkParser;
var ScriptContext = /** @class */ (function (_super) {
    __extends(ScriptContext, _super);
    function ScriptContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScriptContext.prototype.handler = function () {
        return this.tryGetRuleContext(0, HandlerContext);
    };
    ScriptContext.prototype.script = function () {
        return this.tryGetRuleContext(0, ScriptContext);
    };
    ScriptContext.prototype.function = function () {
        return this.tryGetRuleContext(0, FunctionContext);
    };
    ScriptContext.prototype.NEWLINE = function () { return this.tryGetToken(HyperTalkParser.NEWLINE, 0); };
    ScriptContext.prototype.EOF = function () { return this.tryGetToken(HyperTalkParser.EOF, 0); };
    Object.defineProperty(ScriptContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_script; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScriptContext.prototype.enterRule = function (listener) {
        if (listener.enterScript) {
            listener.enterScript(this);
        }
    };
    // @Override
    ScriptContext.prototype.exitRule = function (listener) {
        if (listener.exitScript) {
            listener.exitScript(this);
        }
    };
    // @Override
    ScriptContext.prototype.accept = function (visitor) {
        if (visitor.visitScript) {
            return visitor.visitScript(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScriptContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScriptContext = ScriptContext;
var ScriptletContext = /** @class */ (function (_super) {
    __extends(ScriptletContext, _super);
    function ScriptletContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScriptletContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    ScriptletContext.prototype.EOF = function () { return this.tryGetToken(HyperTalkParser.EOF, 0); };
    ScriptletContext.prototype.multilineScriptlet = function () {
        return this.tryGetRuleContext(0, MultilineScriptletContext);
    };
    Object.defineProperty(ScriptletContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_scriptlet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScriptletContext.prototype.enterRule = function (listener) {
        if (listener.enterScriptlet) {
            listener.enterScriptlet(this);
        }
    };
    // @Override
    ScriptletContext.prototype.exitRule = function (listener) {
        if (listener.exitScriptlet) {
            listener.exitScriptlet(this);
        }
    };
    // @Override
    ScriptletContext.prototype.accept = function (visitor) {
        if (visitor.visitScriptlet) {
            return visitor.visitScriptlet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScriptletContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScriptletContext = ScriptletContext;
var MultilineScriptletContext = /** @class */ (function (_super) {
    __extends(MultilineScriptletContext, _super);
    function MultilineScriptletContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultilineScriptletContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    MultilineScriptletContext.prototype.NEWLINE = function () { return this.tryGetToken(HyperTalkParser.NEWLINE, 0); };
    MultilineScriptletContext.prototype.multilineScriptlet = function () {
        return this.tryGetRuleContext(0, MultilineScriptletContext);
    };
    MultilineScriptletContext.prototype.EOF = function () { return this.tryGetToken(HyperTalkParser.EOF, 0); };
    Object.defineProperty(MultilineScriptletContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_multilineScriptlet; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultilineScriptletContext.prototype.enterRule = function (listener) {
        if (listener.enterMultilineScriptlet) {
            listener.enterMultilineScriptlet(this);
        }
    };
    // @Override
    MultilineScriptletContext.prototype.exitRule = function (listener) {
        if (listener.exitMultilineScriptlet) {
            listener.exitMultilineScriptlet(this);
        }
    };
    // @Override
    MultilineScriptletContext.prototype.accept = function (visitor) {
        if (visitor.visitMultilineScriptlet) {
            return visitor.visitMultilineScriptlet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultilineScriptletContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultilineScriptletContext = MultilineScriptletContext;
var HandlerContext = /** @class */ (function (_super) {
    __extends(HandlerContext, _super);
    function HandlerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HandlerContext.prototype.handlerName = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(HandlerNameContext);
        }
        else {
            return this.getRuleContext(i, HandlerNameContext);
        }
    };
    HandlerContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(HyperTalkParser.NEWLINE);
        }
        else {
            return this.getToken(HyperTalkParser.NEWLINE, i);
        }
    };
    HandlerContext.prototype.statementList = function () {
        return this.tryGetRuleContext(0, StatementListContext);
    };
    HandlerContext.prototype.parameterList = function () {
        return this.tryGetRuleContext(0, ParameterListContext);
    };
    Object.defineProperty(HandlerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_handler; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HandlerContext.prototype.enterRule = function (listener) {
        if (listener.enterHandler) {
            listener.enterHandler(this);
        }
    };
    // @Override
    HandlerContext.prototype.exitRule = function (listener) {
        if (listener.exitHandler) {
            listener.exitHandler(this);
        }
    };
    // @Override
    HandlerContext.prototype.accept = function (visitor) {
        if (visitor.visitHandler) {
            return visitor.visitHandler(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HandlerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HandlerContext = HandlerContext;
var FunctionContext = /** @class */ (function (_super) {
    __extends(FunctionContext, _super);
    function FunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionContext.prototype.ID = function (i) {
        if (i === undefined) {
            return this.getTokens(HyperTalkParser.ID);
        }
        else {
            return this.getToken(HyperTalkParser.ID, i);
        }
    };
    FunctionContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(HyperTalkParser.NEWLINE);
        }
        else {
            return this.getToken(HyperTalkParser.NEWLINE, i);
        }
    };
    FunctionContext.prototype.statementList = function () {
        return this.tryGetRuleContext(0, StatementListContext);
    };
    FunctionContext.prototype.parameterList = function () {
        return this.tryGetRuleContext(0, ParameterListContext);
    };
    Object.defineProperty(FunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_function; },
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
var HandlerNameContext = /** @class */ (function (_super) {
    __extends(HandlerNameContext, _super);
    function HandlerNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HandlerNameContext.prototype.ID = function () { return this.tryGetToken(HyperTalkParser.ID, 0); };
    HandlerNameContext.prototype.commandName = function () {
        return this.tryGetRuleContext(0, CommandNameContext);
    };
    Object.defineProperty(HandlerNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_handlerName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    HandlerNameContext.prototype.enterRule = function (listener) {
        if (listener.enterHandlerName) {
            listener.enterHandlerName(this);
        }
    };
    // @Override
    HandlerNameContext.prototype.exitRule = function (listener) {
        if (listener.exitHandlerName) {
            listener.exitHandlerName(this);
        }
    };
    // @Override
    HandlerNameContext.prototype.accept = function (visitor) {
        if (visitor.visitHandlerName) {
            return visitor.visitHandlerName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return HandlerNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.HandlerNameContext = HandlerNameContext;
var ParameterListContext = /** @class */ (function (_super) {
    __extends(ParameterListContext, _super);
    function ParameterListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterListContext.prototype.ID = function () { return this.getToken(HyperTalkParser.ID, 0); };
    ParameterListContext.prototype.parameterList = function () {
        return this.tryGetRuleContext(0, ParameterListContext);
    };
    Object.defineProperty(ParameterListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_parameterList; },
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
var StatementListContext = /** @class */ (function (_super) {
    __extends(StatementListContext, _super);
    function StatementListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementListContext.prototype.statement = function () {
        return this.getRuleContext(0, StatementContext);
    };
    StatementListContext.prototype.statementList = function () {
        return this.tryGetRuleContext(0, StatementListContext);
    };
    StatementListContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(HyperTalkParser.NEWLINE);
        }
        else {
            return this.getToken(HyperTalkParser.NEWLINE, i);
        }
    };
    Object.defineProperty(StatementListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_statementList; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StatementListContext.prototype.enterRule = function (listener) {
        if (listener.enterStatementList) {
            listener.enterStatementList(this);
        }
    };
    // @Override
    StatementListContext.prototype.exitRule = function (listener) {
        if (listener.exitStatementList) {
            listener.exitStatementList(this);
        }
    };
    // @Override
    StatementListContext.prototype.accept = function (visitor) {
        if (visitor.visitStatementList) {
            return visitor.visitStatementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StatementListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StatementListContext = StatementListContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.commandStmnt = function () {
        return this.tryGetRuleContext(0, CommandStmntContext);
    };
    StatementContext.prototype.functionCall = function () {
        return this.tryGetRuleContext(0, FunctionCallContext);
    };
    StatementContext.prototype.messageStatement = function () {
        return this.tryGetRuleContext(0, MessageStatementContext);
    };
    StatementContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    StatementContext.prototype.ifStatement = function () {
        return this.tryGetRuleContext(0, IfStatementContext);
    };
    StatementContext.prototype.repeatStatement = function () {
        return this.tryGetRuleContext(0, RepeatStatementContext);
    };
    StatementContext.prototype.globalStmnt = function () {
        return this.tryGetRuleContext(0, GlobalStmntContext);
    };
    StatementContext.prototype.returnStmnt = function () {
        return this.tryGetRuleContext(0, ReturnStmntContext);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_statement; },
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
var GlobalStmntContext = /** @class */ (function (_super) {
    __extends(GlobalStmntContext, _super);
    function GlobalStmntContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GlobalStmntContext.prototype.parameterList = function () {
        return this.getRuleContext(0, ParameterListContext);
    };
    Object.defineProperty(GlobalStmntContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_globalStmnt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GlobalStmntContext.prototype.enterRule = function (listener) {
        if (listener.enterGlobalStmnt) {
            listener.enterGlobalStmnt(this);
        }
    };
    // @Override
    GlobalStmntContext.prototype.exitRule = function (listener) {
        if (listener.exitGlobalStmnt) {
            listener.exitGlobalStmnt(this);
        }
    };
    // @Override
    GlobalStmntContext.prototype.accept = function (visitor) {
        if (visitor.visitGlobalStmnt) {
            return visitor.visitGlobalStmnt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GlobalStmntContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GlobalStmntContext = GlobalStmntContext;
var ReturnStmntContext = /** @class */ (function (_super) {
    __extends(ReturnStmntContext, _super);
    function ReturnStmntContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ReturnStmntContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ReturnStmntContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_returnStmnt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ReturnStmntContext.prototype.enterRule = function (listener) {
        if (listener.enterReturnStmnt) {
            listener.enterReturnStmnt(this);
        }
    };
    // @Override
    ReturnStmntContext.prototype.exitRule = function (listener) {
        if (listener.exitReturnStmnt) {
            listener.exitReturnStmnt(this);
        }
    };
    // @Override
    ReturnStmntContext.prototype.accept = function (visitor) {
        if (visitor.visitReturnStmnt) {
            return visitor.visitReturnStmnt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ReturnStmntContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ReturnStmntContext = ReturnStmntContext;
var IfStatementContext = /** @class */ (function (_super) {
    __extends(IfStatementContext, _super);
    function IfStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IfStatementContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    IfStatementContext.prototype.thenStatement = function () {
        return this.getRuleContext(0, ThenStatementContext);
    };
    Object.defineProperty(IfStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_ifStatement; },
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
var ThenStatementContext = /** @class */ (function (_super) {
    __extends(ThenStatementContext, _super);
    function ThenStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ThenStatementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    ThenStatementContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(HyperTalkParser.NEWLINE);
        }
        else {
            return this.getToken(HyperTalkParser.NEWLINE, i);
        }
    };
    ThenStatementContext.prototype.elseStatement = function () {
        return this.tryGetRuleContext(0, ElseStatementContext);
    };
    ThenStatementContext.prototype.statementList = function () {
        return this.tryGetRuleContext(0, StatementListContext);
    };
    Object.defineProperty(ThenStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_thenStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ThenStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterThenStatement) {
            listener.enterThenStatement(this);
        }
    };
    // @Override
    ThenStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitThenStatement) {
            listener.exitThenStatement(this);
        }
    };
    // @Override
    ThenStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitThenStatement) {
            return visitor.visitThenStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ThenStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ThenStatementContext = ThenStatementContext;
var ElseStatementContext = /** @class */ (function (_super) {
    __extends(ElseStatementContext, _super);
    function ElseStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElseStatementContext.prototype.statement = function () {
        return this.tryGetRuleContext(0, StatementContext);
    };
    ElseStatementContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(HyperTalkParser.NEWLINE);
        }
        else {
            return this.getToken(HyperTalkParser.NEWLINE, i);
        }
    };
    ElseStatementContext.prototype.statementList = function () {
        return this.tryGetRuleContext(0, StatementListContext);
    };
    Object.defineProperty(ElseStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_elseStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ElseStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterElseStatement) {
            listener.enterElseStatement(this);
        }
    };
    // @Override
    ElseStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitElseStatement) {
            listener.exitElseStatement(this);
        }
    };
    // @Override
    ElseStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitElseStatement) {
            return visitor.visitElseStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ElseStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ElseStatementContext = ElseStatementContext;
var RepeatStatementContext = /** @class */ (function (_super) {
    __extends(RepeatStatementContext, _super);
    function RepeatStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RepeatStatementContext.prototype.repeatRange = function () {
        return this.getRuleContext(0, RepeatRangeContext);
    };
    RepeatStatementContext.prototype.statementList = function () {
        return this.tryGetRuleContext(0, StatementListContext);
    };
    RepeatStatementContext.prototype.NEWLINE = function (i) {
        if (i === undefined) {
            return this.getTokens(HyperTalkParser.NEWLINE);
        }
        else {
            return this.getToken(HyperTalkParser.NEWLINE, i);
        }
    };
    Object.defineProperty(RepeatStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_repeatStatement; },
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
var MessageStatementContext = /** @class */ (function (_super) {
    __extends(MessageStatementContext, _super);
    function MessageStatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MessageStatementContext.prototype.ID = function () { return this.getToken(HyperTalkParser.ID, 0); };
    MessageStatementContext.prototype.listExpression = function () {
        return this.tryGetRuleContext(0, ListExpressionContext);
    };
    Object.defineProperty(MessageStatementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_messageStatement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MessageStatementContext.prototype.enterRule = function (listener) {
        if (listener.enterMessageStatement) {
            listener.enterMessageStatement(this);
        }
    };
    // @Override
    MessageStatementContext.prototype.exitRule = function (listener) {
        if (listener.exitMessageStatement) {
            listener.exitMessageStatement(this);
        }
    };
    // @Override
    MessageStatementContext.prototype.accept = function (visitor) {
        if (visitor.visitMessageStatement) {
            return visitor.visitMessageStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MessageStatementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MessageStatementContext = MessageStatementContext;
var CommandStmntContext = /** @class */ (function (_super) {
    __extends(CommandStmntContext, _super);
    function CommandStmntContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommandStmntContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    CommandStmntContext.prototype.factor = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(FactorContext);
        }
        else {
            return this.getRuleContext(i, FactorContext);
        }
    };
    CommandStmntContext.prototype.toolExpression = function () {
        return this.tryGetRuleContext(0, ToolExpressionContext);
    };
    CommandStmntContext.prototype.listExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ListExpressionContext);
        }
        else {
            return this.getRuleContext(i, ListExpressionContext);
        }
    };
    CommandStmntContext.prototype.container = function () {
        return this.tryGetRuleContext(0, ContainerContext);
    };
    CommandStmntContext.prototype.convertible = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConvertibleContext);
        }
        else {
            return this.getRuleContext(i, ConvertibleContext);
        }
    };
    CommandStmntContext.prototype.of = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(OfContext);
        }
        else {
            return this.getRuleContext(i, OfContext);
        }
    };
    CommandStmntContext.prototype.handlerName = function () {
        return this.tryGetRuleContext(0, HandlerNameContext);
    };
    CommandStmntContext.prototype.cards = function () {
        return this.tryGetRuleContext(0, CardsContext);
    };
    CommandStmntContext.prototype.remoteNavOption = function () {
        return this.tryGetRuleContext(0, RemoteNavOptionContext);
    };
    CommandStmntContext.prototype.card = function () {
        return this.tryGetRuleContext(0, CardContext);
    };
    CommandStmntContext.prototype.picture = function () {
        return this.tryGetRuleContext(0, PictureContext);
    };
    CommandStmntContext.prototype.background = function () {
        return this.tryGetRuleContext(0, BackgroundContext);
    };
    CommandStmntContext.prototype.musicExpression = function () {
        return this.tryGetRuleContext(0, MusicExpressionContext);
    };
    CommandStmntContext.prototype.preposition = function () {
        return this.tryGetRuleContext(0, PrepositionContext);
    };
    CommandStmntContext.prototype.property = function () {
        return this.tryGetRuleContext(0, PropertyContext);
    };
    CommandStmntContext.prototype.propertyValue = function () {
        return this.tryGetRuleContext(0, PropertyValueContext);
    };
    CommandStmntContext.prototype.sortChunkType = function () {
        return this.tryGetRuleContext(0, SortChunkTypeContext);
    };
    CommandStmntContext.prototype.sortDirection = function () {
        return this.tryGetRuleContext(0, SortDirectionContext);
    };
    CommandStmntContext.prototype.sortStyle = function () {
        return this.tryGetRuleContext(0, SortStyleContext);
    };
    CommandStmntContext.prototype.timeUnit = function () {
        return this.tryGetRuleContext(0, TimeUnitContext);
    };
    Object.defineProperty(CommandStmntContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_commandStmnt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommandStmntContext.prototype.enterRule = function (listener) {
        if (listener.enterCommandStmnt) {
            listener.enterCommandStmnt(this);
        }
    };
    // @Override
    CommandStmntContext.prototype.exitRule = function (listener) {
        if (listener.exitCommandStmnt) {
            listener.exitCommandStmnt(this);
        }
    };
    // @Override
    CommandStmntContext.prototype.accept = function (visitor) {
        if (visitor.visitCommandStmnt) {
            return visitor.visitCommandStmnt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommandStmntContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommandStmntContext = CommandStmntContext;
var RemoteNavOptionContext = /** @class */ (function (_super) {
    __extends(RemoteNavOptionContext, _super);
    function RemoteNavOptionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(RemoteNavOptionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_remoteNavOption; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RemoteNavOptionContext.prototype.enterRule = function (listener) {
        if (listener.enterRemoteNavOption) {
            listener.enterRemoteNavOption(this);
        }
    };
    // @Override
    RemoteNavOptionContext.prototype.exitRule = function (listener) {
        if (listener.exitRemoteNavOption) {
            listener.exitRemoteNavOption(this);
        }
    };
    // @Override
    RemoteNavOptionContext.prototype.accept = function (visitor) {
        if (visitor.visitRemoteNavOption) {
            return visitor.visitRemoteNavOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RemoteNavOptionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RemoteNavOptionContext = RemoteNavOptionContext;
var ConvertibleContext = /** @class */ (function (_super) {
    __extends(ConvertibleContext, _super);
    function ConvertibleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConvertibleContext.prototype.conversionFormat = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConversionFormatContext);
        }
        else {
            return this.getRuleContext(i, ConversionFormatContext);
        }
    };
    Object.defineProperty(ConvertibleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_convertible; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConvertibleContext.prototype.enterRule = function (listener) {
        if (listener.enterConvertible) {
            listener.enterConvertible(this);
        }
    };
    // @Override
    ConvertibleContext.prototype.exitRule = function (listener) {
        if (listener.exitConvertible) {
            listener.exitConvertible(this);
        }
    };
    // @Override
    ConvertibleContext.prototype.accept = function (visitor) {
        if (visitor.visitConvertible) {
            return visitor.visitConvertible(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConvertibleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConvertibleContext = ConvertibleContext;
var ConversionFormatContext = /** @class */ (function (_super) {
    __extends(ConversionFormatContext, _super);
    function ConversionFormatContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConversionFormatContext.prototype.seconds = function () {
        return this.tryGetRuleContext(0, SecondsContext);
    };
    ConversionFormatContext.prototype.length = function () {
        return this.tryGetRuleContext(0, LengthContext);
    };
    Object.defineProperty(ConversionFormatContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_conversionFormat; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConversionFormatContext.prototype.enterRule = function (listener) {
        if (listener.enterConversionFormat) {
            listener.enterConversionFormat(this);
        }
    };
    // @Override
    ConversionFormatContext.prototype.exitRule = function (listener) {
        if (listener.exitConversionFormat) {
            listener.exitConversionFormat(this);
        }
    };
    // @Override
    ConversionFormatContext.prototype.accept = function (visitor) {
        if (visitor.visitConversionFormat) {
            return visitor.visitConversionFormat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConversionFormatContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConversionFormatContext = ConversionFormatContext;
var LengthContext = /** @class */ (function (_super) {
    __extends(LengthContext, _super);
    function LengthContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(LengthContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_length; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LengthContext.prototype.enterRule = function (listener) {
        if (listener.enterLength) {
            listener.enterLength(this);
        }
    };
    // @Override
    LengthContext.prototype.exitRule = function (listener) {
        if (listener.exitLength) {
            listener.exitLength(this);
        }
    };
    // @Override
    LengthContext.prototype.accept = function (visitor) {
        if (visitor.visitLength) {
            return visitor.visitLength(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LengthContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LengthContext = LengthContext;
var SortDirectionContext = /** @class */ (function (_super) {
    __extends(SortDirectionContext, _super);
    function SortDirectionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(SortDirectionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_sortDirection; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SortDirectionContext.prototype.enterRule = function (listener) {
        if (listener.enterSortDirection) {
            listener.enterSortDirection(this);
        }
    };
    // @Override
    SortDirectionContext.prototype.exitRule = function (listener) {
        if (listener.exitSortDirection) {
            listener.exitSortDirection(this);
        }
    };
    // @Override
    SortDirectionContext.prototype.accept = function (visitor) {
        if (visitor.visitSortDirection) {
            return visitor.visitSortDirection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SortDirectionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SortDirectionContext = SortDirectionContext;
var SortChunkTypeContext = /** @class */ (function (_super) {
    __extends(SortChunkTypeContext, _super);
    function SortChunkTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SortChunkTypeContext.prototype.line = function () {
        return this.tryGetRuleContext(0, LineContext);
    };
    SortChunkTypeContext.prototype.of = function () {
        return this.tryGetRuleContext(0, OfContext);
    };
    SortChunkTypeContext.prototype.item = function () {
        return this.tryGetRuleContext(0, ItemContext);
    };
    SortChunkTypeContext.prototype.word = function () {
        return this.tryGetRuleContext(0, WordContext);
    };
    SortChunkTypeContext.prototype.character = function () {
        return this.tryGetRuleContext(0, CharacterContext);
    };
    Object.defineProperty(SortChunkTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_sortChunkType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SortChunkTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterSortChunkType) {
            listener.enterSortChunkType(this);
        }
    };
    // @Override
    SortChunkTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitSortChunkType) {
            listener.exitSortChunkType(this);
        }
    };
    // @Override
    SortChunkTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitSortChunkType) {
            return visitor.visitSortChunkType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SortChunkTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SortChunkTypeContext = SortChunkTypeContext;
var SortStyleContext = /** @class */ (function (_super) {
    __extends(SortStyleContext, _super);
    function SortStyleContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(SortStyleContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_sortStyle; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SortStyleContext.prototype.enterRule = function (listener) {
        if (listener.enterSortStyle) {
            listener.enterSortStyle(this);
        }
    };
    // @Override
    SortStyleContext.prototype.exitRule = function (listener) {
        if (listener.exitSortStyle) {
            listener.exitSortStyle(this);
        }
    };
    // @Override
    SortStyleContext.prototype.accept = function (visitor) {
        if (visitor.visitSortStyle) {
            return visitor.visitSortStyle(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SortStyleContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SortStyleContext = SortStyleContext;
var RepeatRangeContext = /** @class */ (function (_super) {
    __extends(RepeatRangeContext, _super);
    function RepeatRangeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RepeatRangeContext.prototype.duration = function () {
        return this.tryGetRuleContext(0, DurationContext);
    };
    RepeatRangeContext.prototype.count = function () {
        return this.tryGetRuleContext(0, CountContext);
    };
    RepeatRangeContext.prototype.ID = function () { return this.tryGetToken(HyperTalkParser.ID, 0); };
    RepeatRangeContext.prototype.range = function () {
        return this.tryGetRuleContext(0, RangeContext);
    };
    Object.defineProperty(RepeatRangeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_repeatRange; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RepeatRangeContext.prototype.enterRule = function (listener) {
        if (listener.enterRepeatRange) {
            listener.enterRepeatRange(this);
        }
    };
    // @Override
    RepeatRangeContext.prototype.exitRule = function (listener) {
        if (listener.exitRepeatRange) {
            listener.exitRepeatRange(this);
        }
    };
    // @Override
    RepeatRangeContext.prototype.accept = function (visitor) {
        if (visitor.visitRepeatRange) {
            return visitor.visitRepeatRange(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RepeatRangeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RepeatRangeContext = RepeatRangeContext;
var DurationContext = /** @class */ (function (_super) {
    __extends(DurationContext, _super);
    function DurationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DurationContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(DurationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_duration; },
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
var CountContext = /** @class */ (function (_super) {
    __extends(CountContext, _super);
    function CountContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CountContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(CountContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_count; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CountContext.prototype.enterRule = function (listener) {
        if (listener.enterCount) {
            listener.enterCount(this);
        }
    };
    // @Override
    CountContext.prototype.exitRule = function (listener) {
        if (listener.exitCount) {
            listener.exitCount(this);
        }
    };
    // @Override
    CountContext.prototype.accept = function (visitor) {
        if (visitor.visitCount) {
            return visitor.visitCount(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CountContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CountContext = CountContext;
var RangeContext = /** @class */ (function (_super) {
    __extends(RangeContext, _super);
    function RangeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RangeContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(RangeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_range; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RangeContext.prototype.enterRule = function (listener) {
        if (listener.enterRange) {
            listener.enterRange(this);
        }
    };
    // @Override
    RangeContext.prototype.exitRule = function (listener) {
        if (listener.exitRange) {
            listener.exitRange(this);
        }
    };
    // @Override
    RangeContext.prototype.accept = function (visitor) {
        if (visitor.visitRange) {
            return visitor.visitRange(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RangeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RangeContext = RangeContext;
var ChunkContext = /** @class */ (function (_super) {
    __extends(ChunkContext, _super);
    function ChunkContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ChunkContext.prototype.chunk = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ChunkContext);
        }
        else {
            return this.getRuleContext(i, ChunkContext);
        }
    };
    ChunkContext.prototype.ordinal = function () {
        return this.tryGetRuleContext(0, OrdinalContext);
    };
    ChunkContext.prototype.character = function () {
        return this.tryGetRuleContext(0, CharacterContext);
    };
    ChunkContext.prototype.of = function () {
        return this.tryGetRuleContext(0, OfContext);
    };
    ChunkContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    ChunkContext.prototype.word = function () {
        return this.tryGetRuleContext(0, WordContext);
    };
    ChunkContext.prototype.item = function () {
        return this.tryGetRuleContext(0, ItemContext);
    };
    ChunkContext.prototype.line = function () {
        return this.tryGetRuleContext(0, LineContext);
    };
    Object.defineProperty(ChunkContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_chunk; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ChunkContext.prototype.enterRule = function (listener) {
        if (listener.enterChunk) {
            listener.enterChunk(this);
        }
    };
    // @Override
    ChunkContext.prototype.exitRule = function (listener) {
        if (listener.exitChunk) {
            listener.exitChunk(this);
        }
    };
    // @Override
    ChunkContext.prototype.accept = function (visitor) {
        if (visitor.visitChunk) {
            return visitor.visitChunk(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ChunkContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ChunkContext = ChunkContext;
var MenuContext = /** @class */ (function (_super) {
    __extends(MenuContext, _super);
    function MenuContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MenuContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    MenuContext.prototype.ordinal = function () {
        return this.tryGetRuleContext(0, OrdinalContext);
    };
    Object.defineProperty(MenuContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_menu; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MenuContext.prototype.enterRule = function (listener) {
        if (listener.enterMenu) {
            listener.enterMenu(this);
        }
    };
    // @Override
    MenuContext.prototype.exitRule = function (listener) {
        if (listener.exitMenu) {
            listener.exitMenu(this);
        }
    };
    // @Override
    MenuContext.prototype.accept = function (visitor) {
        if (visitor.visitMenu) {
            return visitor.visitMenu(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MenuContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MenuContext = MenuContext;
var MenuItemContext = /** @class */ (function (_super) {
    __extends(MenuItemContext, _super);
    function MenuItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MenuItemContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    MenuItemContext.prototype.of = function () {
        return this.getRuleContext(0, OfContext);
    };
    MenuItemContext.prototype.menu = function () {
        return this.getRuleContext(0, MenuContext);
    };
    MenuItemContext.prototype.ordinal = function () {
        return this.tryGetRuleContext(0, OrdinalContext);
    };
    Object.defineProperty(MenuItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_menuItem; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MenuItemContext.prototype.enterRule = function (listener) {
        if (listener.enterMenuItem) {
            listener.enterMenuItem(this);
        }
    };
    // @Override
    MenuItemContext.prototype.exitRule = function (listener) {
        if (listener.exitMenuItem) {
            listener.exitMenuItem(this);
        }
    };
    // @Override
    MenuItemContext.prototype.accept = function (visitor) {
        if (visitor.visitMenuItem) {
            return visitor.visitMenuItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MenuItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MenuItemContext = MenuItemContext;
var PropertyContext = /** @class */ (function (_super) {
    __extends(PropertyContext, _super);
    function PropertyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyContext.prototype.partProperty = function () {
        return this.tryGetRuleContext(0, PartPropertyContext);
    };
    PropertyContext.prototype.globalProperty = function () {
        return this.tryGetRuleContext(0, GlobalPropertyContext);
    };
    Object.defineProperty(PropertyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_property; },
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
var GlobalPropertyContext = /** @class */ (function (_super) {
    __extends(GlobalPropertyContext, _super);
    function GlobalPropertyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    GlobalPropertyContext.prototype.propertyName = function () {
        return this.getRuleContext(0, PropertyNameContext);
    };
    Object.defineProperty(GlobalPropertyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_globalProperty; },
        enumerable: true,
        configurable: true
    });
    // @Override
    GlobalPropertyContext.prototype.enterRule = function (listener) {
        if (listener.enterGlobalProperty) {
            listener.enterGlobalProperty(this);
        }
    };
    // @Override
    GlobalPropertyContext.prototype.exitRule = function (listener) {
        if (listener.exitGlobalProperty) {
            listener.exitGlobalProperty(this);
        }
    };
    // @Override
    GlobalPropertyContext.prototype.accept = function (visitor) {
        if (visitor.visitGlobalProperty) {
            return visitor.visitGlobalProperty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GlobalPropertyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.GlobalPropertyContext = GlobalPropertyContext;
var PartPropertyContext = /** @class */ (function (_super) {
    __extends(PartPropertyContext, _super);
    function PartPropertyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PartPropertyContext.prototype.propertyName = function () {
        return this.getRuleContext(0, PropertyNameContext);
    };
    PartPropertyContext.prototype.of = function () {
        return this.getRuleContext(0, OfContext);
    };
    PartPropertyContext.prototype.factor = function () {
        return this.getRuleContext(0, FactorContext);
    };
    PartPropertyContext.prototype.length = function () {
        return this.tryGetRuleContext(0, LengthContext);
    };
    Object.defineProperty(PartPropertyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_partProperty; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PartPropertyContext.prototype.enterRule = function (listener) {
        if (listener.enterPartProperty) {
            listener.enterPartProperty(this);
        }
    };
    // @Override
    PartPropertyContext.prototype.exitRule = function (listener) {
        if (listener.exitPartProperty) {
            listener.exitPartProperty(this);
        }
    };
    // @Override
    PartPropertyContext.prototype.accept = function (visitor) {
        if (visitor.visitPartProperty) {
            return visitor.visitPartProperty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PartPropertyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PartPropertyContext = PartPropertyContext;
var PartContext = /** @class */ (function (_super) {
    __extends(PartContext, _super);
    function PartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PartContext.prototype.message = function () {
        return this.tryGetRuleContext(0, MessageContext);
    };
    PartContext.prototype.card = function () {
        return this.tryGetRuleContext(0, CardContext);
    };
    PartContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    PartContext.prototype.background = function () {
        return this.tryGetRuleContext(0, BackgroundContext);
    };
    PartContext.prototype.buttonPart = function () {
        return this.tryGetRuleContext(0, ButtonPartContext);
    };
    PartContext.prototype.fieldPart = function () {
        return this.tryGetRuleContext(0, FieldPartContext);
    };
    PartContext.prototype.bkgndPart = function () {
        return this.tryGetRuleContext(0, BkgndPartContext);
    };
    PartContext.prototype.cardPart = function () {
        return this.tryGetRuleContext(0, CardPartContext);
    };
    PartContext.prototype.stackPart = function () {
        return this.tryGetRuleContext(0, StackPartContext);
    };
    PartContext.prototype.windowPart = function () {
        return this.tryGetRuleContext(0, WindowPartContext);
    };
    Object.defineProperty(PartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_part; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PartContext.prototype.enterRule = function (listener) {
        if (listener.enterPart) {
            listener.enterPart(this);
        }
    };
    // @Override
    PartContext.prototype.exitRule = function (listener) {
        if (listener.exitPart) {
            listener.exitPart(this);
        }
    };
    // @Override
    PartContext.prototype.accept = function (visitor) {
        if (visitor.visitPart) {
            return visitor.visitPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PartContext = PartContext;
var StackPartContext = /** @class */ (function (_super) {
    __extends(StackPartContext, _super);
    function StackPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StackPartContext.prototype.stack = function () {
        return this.getRuleContext(0, StackContext);
    };
    StackPartContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    Object.defineProperty(StackPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_stackPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StackPartContext.prototype.enterRule = function (listener) {
        if (listener.enterStackPart) {
            listener.enterStackPart(this);
        }
    };
    // @Override
    StackPartContext.prototype.exitRule = function (listener) {
        if (listener.exitStackPart) {
            listener.exitStackPart(this);
        }
    };
    // @Override
    StackPartContext.prototype.accept = function (visitor) {
        if (visitor.visitStackPart) {
            return visitor.visitStackPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StackPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StackPartContext = StackPartContext;
var ButtonPartContext = /** @class */ (function (_super) {
    __extends(ButtonPartContext, _super);
    function ButtonPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ButtonPartContext.prototype.button = function () {
        return this.tryGetRuleContext(0, ButtonContext);
    };
    ButtonPartContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    ButtonPartContext.prototype.card = function () {
        return this.tryGetRuleContext(0, CardContext);
    };
    ButtonPartContext.prototype.background = function () {
        return this.tryGetRuleContext(0, BackgroundContext);
    };
    ButtonPartContext.prototype.ordinal = function () {
        return this.tryGetRuleContext(0, OrdinalContext);
    };
    ButtonPartContext.prototype.buttonPart = function () {
        return this.tryGetRuleContext(0, ButtonPartContext);
    };
    ButtonPartContext.prototype.of = function () {
        return this.tryGetRuleContext(0, OfContext);
    };
    ButtonPartContext.prototype.cardPart = function () {
        return this.tryGetRuleContext(0, CardPartContext);
    };
    Object.defineProperty(ButtonPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_buttonPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ButtonPartContext.prototype.enterRule = function (listener) {
        if (listener.enterButtonPart) {
            listener.enterButtonPart(this);
        }
    };
    // @Override
    ButtonPartContext.prototype.exitRule = function (listener) {
        if (listener.exitButtonPart) {
            listener.exitButtonPart(this);
        }
    };
    // @Override
    ButtonPartContext.prototype.accept = function (visitor) {
        if (visitor.visitButtonPart) {
            return visitor.visitButtonPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ButtonPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ButtonPartContext = ButtonPartContext;
var FieldPartContext = /** @class */ (function (_super) {
    __extends(FieldPartContext, _super);
    function FieldPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FieldPartContext.prototype.card = function () {
        return this.tryGetRuleContext(0, CardContext);
    };
    FieldPartContext.prototype.field = function () {
        return this.tryGetRuleContext(0, FieldContext);
    };
    FieldPartContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    FieldPartContext.prototype.background = function () {
        return this.tryGetRuleContext(0, BackgroundContext);
    };
    FieldPartContext.prototype.ordinal = function () {
        return this.tryGetRuleContext(0, OrdinalContext);
    };
    FieldPartContext.prototype.fieldPart = function () {
        return this.tryGetRuleContext(0, FieldPartContext);
    };
    FieldPartContext.prototype.of = function () {
        return this.tryGetRuleContext(0, OfContext);
    };
    FieldPartContext.prototype.cardPart = function () {
        return this.tryGetRuleContext(0, CardPartContext);
    };
    Object.defineProperty(FieldPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_fieldPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FieldPartContext.prototype.enterRule = function (listener) {
        if (listener.enterFieldPart) {
            listener.enterFieldPart(this);
        }
    };
    // @Override
    FieldPartContext.prototype.exitRule = function (listener) {
        if (listener.exitFieldPart) {
            listener.exitFieldPart(this);
        }
    };
    // @Override
    FieldPartContext.prototype.accept = function (visitor) {
        if (visitor.visitFieldPart) {
            return visitor.visitFieldPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FieldPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FieldPartContext = FieldPartContext;
var CardPartContext = /** @class */ (function (_super) {
    __extends(CardPartContext, _super);
    function CardPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CardPartContext.prototype.card = function () {
        return this.tryGetRuleContext(0, CardContext);
    };
    CardPartContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    CardPartContext.prototype.position = function () {
        return this.tryGetRuleContext(0, PositionContext);
    };
    CardPartContext.prototype.ordinal = function () {
        return this.tryGetRuleContext(0, OrdinalContext);
    };
    CardPartContext.prototype.cardPart = function () {
        return this.tryGetRuleContext(0, CardPartContext);
    };
    CardPartContext.prototype.of = function () {
        return this.tryGetRuleContext(0, OfContext);
    };
    CardPartContext.prototype.bkgndPart = function () {
        return this.tryGetRuleContext(0, BkgndPartContext);
    };
    CardPartContext.prototype.stackPart = function () {
        return this.tryGetRuleContext(0, StackPartContext);
    };
    Object.defineProperty(CardPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_cardPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CardPartContext.prototype.enterRule = function (listener) {
        if (listener.enterCardPart) {
            listener.enterCardPart(this);
        }
    };
    // @Override
    CardPartContext.prototype.exitRule = function (listener) {
        if (listener.exitCardPart) {
            listener.exitCardPart(this);
        }
    };
    // @Override
    CardPartContext.prototype.accept = function (visitor) {
        if (visitor.visitCardPart) {
            return visitor.visitCardPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CardPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CardPartContext = CardPartContext;
var BkgndPartContext = /** @class */ (function (_super) {
    __extends(BkgndPartContext, _super);
    function BkgndPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BkgndPartContext.prototype.background = function () {
        return this.tryGetRuleContext(0, BackgroundContext);
    };
    BkgndPartContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    BkgndPartContext.prototype.ordinal = function () {
        return this.tryGetRuleContext(0, OrdinalContext);
    };
    BkgndPartContext.prototype.position = function () {
        return this.tryGetRuleContext(0, PositionContext);
    };
    BkgndPartContext.prototype.bkgndPart = function () {
        return this.tryGetRuleContext(0, BkgndPartContext);
    };
    BkgndPartContext.prototype.of = function () {
        return this.tryGetRuleContext(0, OfContext);
    };
    BkgndPartContext.prototype.stackPart = function () {
        return this.tryGetRuleContext(0, StackPartContext);
    };
    Object.defineProperty(BkgndPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_bkgndPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BkgndPartContext.prototype.enterRule = function (listener) {
        if (listener.enterBkgndPart) {
            listener.enterBkgndPart(this);
        }
    };
    // @Override
    BkgndPartContext.prototype.exitRule = function (listener) {
        if (listener.exitBkgndPart) {
            listener.exitBkgndPart(this);
        }
    };
    // @Override
    BkgndPartContext.prototype.accept = function (visitor) {
        if (visitor.visitBkgndPart) {
            return visitor.visitBkgndPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BkgndPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BkgndPartContext = BkgndPartContext;
var WindowPartContext = /** @class */ (function (_super) {
    __extends(WindowPartContext, _super);
    function WindowPartContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WindowPartContext.prototype.card = function () {
        return this.tryGetRuleContext(0, CardContext);
    };
    WindowPartContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(WindowPartContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_windowPart; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WindowPartContext.prototype.enterRule = function (listener) {
        if (listener.enterWindowPart) {
            listener.enterWindowPart(this);
        }
    };
    // @Override
    WindowPartContext.prototype.exitRule = function (listener) {
        if (listener.exitWindowPart) {
            listener.exitWindowPart(this);
        }
    };
    // @Override
    WindowPartContext.prototype.accept = function (visitor) {
        if (visitor.visitWindowPart) {
            return visitor.visitWindowPart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WindowPartContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WindowPartContext = WindowPartContext;
var ListExpressionContext = /** @class */ (function (_super) {
    __extends(ListExpressionContext, _super);
    function ListExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    ListExpressionContext.prototype.listExpression = function () {
        return this.tryGetRuleContext(0, ListExpressionContext);
    };
    Object.defineProperty(ListExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_listExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterListExpression) {
            listener.enterListExpression(this);
        }
    };
    // @Override
    ListExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitListExpression) {
            listener.exitListExpression(this);
        }
    };
    // @Override
    ListExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitListExpression) {
            return visitor.visitListExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListExpressionContext = ListExpressionContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    ExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_expression; },
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
var FactorContext = /** @class */ (function (_super) {
    __extends(FactorContext, _super);
    function FactorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FactorContext.prototype.literal = function () {
        return this.tryGetRuleContext(0, LiteralContext);
    };
    FactorContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    FactorContext.prototype.effectExpression = function () {
        return this.tryGetRuleContext(0, EffectExpressionContext);
    };
    FactorContext.prototype.functionCall = function () {
        return this.tryGetRuleContext(0, FunctionCallContext);
    };
    FactorContext.prototype.container = function () {
        return this.tryGetRuleContext(0, ContainerContext);
    };
    FactorContext.prototype.chunk = function () {
        return this.tryGetRuleContext(0, ChunkContext);
    };
    FactorContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    Object.defineProperty(FactorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_factor; },
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
var ContainerContext = /** @class */ (function (_super) {
    __extends(ContainerContext, _super);
    function ContainerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ContainerContext.prototype.ID = function () { return this.tryGetToken(HyperTalkParser.ID, 0); };
    ContainerContext.prototype.property = function () {
        return this.tryGetRuleContext(0, PropertyContext);
    };
    ContainerContext.prototype.menu = function () {
        return this.tryGetRuleContext(0, MenuContext);
    };
    ContainerContext.prototype.menuItem = function () {
        return this.tryGetRuleContext(0, MenuItemContext);
    };
    ContainerContext.prototype.part = function () {
        return this.tryGetRuleContext(0, PartContext);
    };
    ContainerContext.prototype.chunk = function () {
        return this.tryGetRuleContext(0, ChunkContext);
    };
    ContainerContext.prototype.container = function () {
        return this.tryGetRuleContext(0, ContainerContext);
    };
    Object.defineProperty(ContainerContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_container; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ContainerContext.prototype.enterRule = function (listener) {
        if (listener.enterContainer) {
            listener.enterContainer(this);
        }
    };
    // @Override
    ContainerContext.prototype.exitRule = function (listener) {
        if (listener.exitContainer) {
            listener.exitContainer(this);
        }
    };
    // @Override
    ContainerContext.prototype.accept = function (visitor) {
        if (visitor.visitContainer) {
            return visitor.visitContainer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ContainerContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ContainerContext = ContainerContext;
var MusicExpressionContext = /** @class */ (function (_super) {
    __extends(MusicExpressionContext, _super);
    function MusicExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MusicExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(MusicExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_musicExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MusicExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMusicExpression) {
            listener.enterMusicExpression(this);
        }
    };
    // @Override
    MusicExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMusicExpression) {
            listener.exitMusicExpression(this);
        }
    };
    // @Override
    MusicExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMusicExpression) {
            return visitor.visitMusicExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MusicExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MusicExpressionContext = MusicExpressionContext;
var ToolExpressionContext = /** @class */ (function (_super) {
    __extends(ToolExpressionContext, _super);
    function ToolExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ToolExpressionContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ToolExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_toolExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ToolExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterToolExpression) {
            listener.enterToolExpression(this);
        }
    };
    // @Override
    ToolExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitToolExpression) {
            listener.exitToolExpression(this);
        }
    };
    // @Override
    ToolExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitToolExpression) {
            return visitor.visitToolExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ToolExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ToolExpressionContext = ToolExpressionContext;
var EffectExpressionContext = /** @class */ (function (_super) {
    __extends(EffectExpressionContext, _super);
    function EffectExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EffectExpressionContext.prototype.effect = function () {
        return this.getRuleContext(0, EffectContext);
    };
    EffectExpressionContext.prototype.image = function () {
        return this.tryGetRuleContext(0, ImageContext);
    };
    EffectExpressionContext.prototype.speed = function () {
        return this.tryGetRuleContext(0, SpeedContext);
    };
    Object.defineProperty(EffectExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_effectExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EffectExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterEffectExpression) {
            listener.enterEffectExpression(this);
        }
    };
    // @Override
    EffectExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitEffectExpression) {
            listener.exitEffectExpression(this);
        }
    };
    // @Override
    EffectExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitEffectExpression) {
            return visitor.visitEffectExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EffectExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EffectExpressionContext = EffectExpressionContext;
var FunctionCallContext = /** @class */ (function (_super) {
    __extends(FunctionCallContext, _super);
    function FunctionCallContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionCallContext.prototype.builtInFunc = function () {
        return this.tryGetRuleContext(0, BuiltInFuncContext);
    };
    FunctionCallContext.prototype.ID = function () { return this.tryGetToken(HyperTalkParser.ID, 0); };
    FunctionCallContext.prototype.listExpression = function () {
        return this.tryGetRuleContext(0, ListExpressionContext);
    };
    Object.defineProperty(FunctionCallContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_functionCall; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FunctionCallContext.prototype.enterRule = function (listener) {
        if (listener.enterFunctionCall) {
            listener.enterFunctionCall(this);
        }
    };
    // @Override
    FunctionCallContext.prototype.exitRule = function (listener) {
        if (listener.exitFunctionCall) {
            listener.exitFunctionCall(this);
        }
    };
    // @Override
    FunctionCallContext.prototype.accept = function (visitor) {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FunctionCallContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionCallContext = FunctionCallContext;
var BuiltInFuncContext = /** @class */ (function (_super) {
    __extends(BuiltInFuncContext, _super);
    function BuiltInFuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BuiltInFuncContext.prototype.zeroArgFunc = function () {
        return this.tryGetRuleContext(0, ZeroArgFuncContext);
    };
    BuiltInFuncContext.prototype.singleArgFunc = function () {
        return this.tryGetRuleContext(0, SingleArgFuncContext);
    };
    BuiltInFuncContext.prototype.of = function () {
        return this.tryGetRuleContext(0, OfContext);
    };
    BuiltInFuncContext.prototype.factor = function () {
        return this.tryGetRuleContext(0, FactorContext);
    };
    BuiltInFuncContext.prototype.listExpression = function () {
        return this.tryGetRuleContext(0, ListExpressionContext);
    };
    BuiltInFuncContext.prototype.multiArgFunc = function () {
        return this.tryGetRuleContext(0, MultiArgFuncContext);
    };
    Object.defineProperty(BuiltInFuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_builtInFunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BuiltInFuncContext.prototype.enterRule = function (listener) {
        if (listener.enterBuiltInFunc) {
            listener.enterBuiltInFunc(this);
        }
    };
    // @Override
    BuiltInFuncContext.prototype.exitRule = function (listener) {
        if (listener.exitBuiltInFunc) {
            listener.exitBuiltInFunc(this);
        }
    };
    // @Override
    BuiltInFuncContext.prototype.accept = function (visitor) {
        if (visitor.visitBuiltInFunc) {
            return visitor.visitBuiltInFunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BuiltInFuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BuiltInFuncContext = BuiltInFuncContext;
var ZeroArgFuncContext = /** @class */ (function (_super) {
    __extends(ZeroArgFuncContext, _super);
    function ZeroArgFuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ZeroArgFuncContext.prototype.seconds = function () {
        return this.tryGetRuleContext(0, SecondsContext);
    };
    ZeroArgFuncContext.prototype.length = function () {
        return this.tryGetRuleContext(0, LengthContext);
    };
    ZeroArgFuncContext.prototype.card = function () {
        return this.tryGetRuleContext(0, CardContext);
    };
    ZeroArgFuncContext.prototype.background = function () {
        return this.tryGetRuleContext(0, BackgroundContext);
    };
    ZeroArgFuncContext.prototype.button = function () {
        return this.tryGetRuleContext(0, ButtonContext);
    };
    ZeroArgFuncContext.prototype.field = function () {
        return this.tryGetRuleContext(0, FieldContext);
    };
    ZeroArgFuncContext.prototype.cards = function () {
        return this.tryGetRuleContext(0, CardsContext);
    };
    Object.defineProperty(ZeroArgFuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_zeroArgFunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ZeroArgFuncContext.prototype.enterRule = function (listener) {
        if (listener.enterZeroArgFunc) {
            listener.enterZeroArgFunc(this);
        }
    };
    // @Override
    ZeroArgFuncContext.prototype.exitRule = function (listener) {
        if (listener.exitZeroArgFunc) {
            listener.exitZeroArgFunc(this);
        }
    };
    // @Override
    ZeroArgFuncContext.prototype.accept = function (visitor) {
        if (visitor.visitZeroArgFunc) {
            return visitor.visitZeroArgFunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ZeroArgFuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ZeroArgFuncContext = ZeroArgFuncContext;
var SingleArgFuncContext = /** @class */ (function (_super) {
    __extends(SingleArgFuncContext, _super);
    function SingleArgFuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SingleArgFuncContext.prototype.card = function () {
        return this.tryGetRuleContext(0, CardContext);
    };
    SingleArgFuncContext.prototype.background = function () {
        return this.tryGetRuleContext(0, BackgroundContext);
    };
    SingleArgFuncContext.prototype.button = function () {
        return this.tryGetRuleContext(0, ButtonContext);
    };
    SingleArgFuncContext.prototype.field = function () {
        return this.tryGetRuleContext(0, FieldContext);
    };
    SingleArgFuncContext.prototype.cards = function () {
        return this.tryGetRuleContext(0, CardsContext);
    };
    SingleArgFuncContext.prototype.character = function () {
        return this.tryGetRuleContext(0, CharacterContext);
    };
    SingleArgFuncContext.prototype.word = function () {
        return this.tryGetRuleContext(0, WordContext);
    };
    SingleArgFuncContext.prototype.item = function () {
        return this.tryGetRuleContext(0, ItemContext);
    };
    SingleArgFuncContext.prototype.line = function () {
        return this.tryGetRuleContext(0, LineContext);
    };
    Object.defineProperty(SingleArgFuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_singleArgFunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SingleArgFuncContext.prototype.enterRule = function (listener) {
        if (listener.enterSingleArgFunc) {
            listener.enterSingleArgFunc(this);
        }
    };
    // @Override
    SingleArgFuncContext.prototype.exitRule = function (listener) {
        if (listener.exitSingleArgFunc) {
            listener.exitSingleArgFunc(this);
        }
    };
    // @Override
    SingleArgFuncContext.prototype.accept = function (visitor) {
        if (visitor.visitSingleArgFunc) {
            return visitor.visitSingleArgFunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SingleArgFuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SingleArgFuncContext = SingleArgFuncContext;
var MultiArgFuncContext = /** @class */ (function (_super) {
    __extends(MultiArgFuncContext, _super);
    function MultiArgFuncContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiArgFuncContext.prototype.singleArgFunc = function () {
        return this.tryGetRuleContext(0, SingleArgFuncContext);
    };
    Object.defineProperty(MultiArgFuncContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_multiArgFunc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiArgFuncContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiArgFunc) {
            listener.enterMultiArgFunc(this);
        }
    };
    // @Override
    MultiArgFuncContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiArgFunc) {
            listener.exitMultiArgFunc(this);
        }
    };
    // @Override
    MultiArgFuncContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiArgFunc) {
            return visitor.visitMultiArgFunc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiArgFuncContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiArgFuncContext = MultiArgFuncContext;
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.constant = function () {
        return this.tryGetRuleContext(0, ConstantContext);
    };
    LiteralContext.prototype.modifierKey = function () {
        return this.tryGetRuleContext(0, ModifierKeyContext);
    };
    LiteralContext.prototype.mouseState = function () {
        return this.tryGetRuleContext(0, MouseStateContext);
    };
    LiteralContext.prototype.knownType = function () {
        return this.tryGetRuleContext(0, KnownTypeContext);
    };
    LiteralContext.prototype.findType = function () {
        return this.tryGetRuleContext(0, FindTypeContext);
    };
    LiteralContext.prototype.LITERAL = function () { return this.tryGetToken(HyperTalkParser.LITERAL, 0); };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_literal; },
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
var PrepositionContext = /** @class */ (function (_super) {
    __extends(PrepositionContext, _super);
    function PrepositionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(PrepositionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_preposition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PrepositionContext.prototype.enterRule = function (listener) {
        if (listener.enterPreposition) {
            listener.enterPreposition(this);
        }
    };
    // @Override
    PrepositionContext.prototype.exitRule = function (listener) {
        if (listener.exitPreposition) {
            listener.exitPreposition(this);
        }
    };
    // @Override
    PrepositionContext.prototype.accept = function (visitor) {
        if (visitor.visitPreposition) {
            return visitor.visitPreposition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PrepositionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PrepositionContext = PrepositionContext;
var ConstantContext = /** @class */ (function (_super) {
    __extends(ConstantContext, _super);
    function ConstantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantContext.prototype.cardinalValue = function () {
        return this.tryGetRuleContext(0, CardinalValueContext);
    };
    Object.defineProperty(ConstantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_constant; },
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
var CardinalValueContext = /** @class */ (function (_super) {
    __extends(CardinalValueContext, _super);
    function CardinalValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(CardinalValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_cardinalValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CardinalValueContext.prototype.enterRule = function (listener) {
        if (listener.enterCardinalValue) {
            listener.enterCardinalValue(this);
        }
    };
    // @Override
    CardinalValueContext.prototype.exitRule = function (listener) {
        if (listener.exitCardinalValue) {
            listener.exitCardinalValue(this);
        }
    };
    // @Override
    CardinalValueContext.prototype.accept = function (visitor) {
        if (visitor.visitCardinalValue) {
            return visitor.visitCardinalValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CardinalValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CardinalValueContext = CardinalValueContext;
var OrdinalContext = /** @class */ (function (_super) {
    __extends(OrdinalContext, _super);
    function OrdinalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OrdinalContext.prototype.ordinalValue = function () {
        return this.getRuleContext(0, OrdinalValueContext);
    };
    Object.defineProperty(OrdinalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_ordinal; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OrdinalContext.prototype.enterRule = function (listener) {
        if (listener.enterOrdinal) {
            listener.enterOrdinal(this);
        }
    };
    // @Override
    OrdinalContext.prototype.exitRule = function (listener) {
        if (listener.exitOrdinal) {
            listener.exitOrdinal(this);
        }
    };
    // @Override
    OrdinalContext.prototype.accept = function (visitor) {
        if (visitor.visitOrdinal) {
            return visitor.visitOrdinal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OrdinalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OrdinalContext = OrdinalContext;
var OrdinalValueContext = /** @class */ (function (_super) {
    __extends(OrdinalValueContext, _super);
    function OrdinalValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OrdinalValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_ordinalValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OrdinalValueContext.prototype.enterRule = function (listener) {
        if (listener.enterOrdinalValue) {
            listener.enterOrdinalValue(this);
        }
    };
    // @Override
    OrdinalValueContext.prototype.exitRule = function (listener) {
        if (listener.exitOrdinalValue) {
            listener.exitOrdinalValue(this);
        }
    };
    // @Override
    OrdinalValueContext.prototype.accept = function (visitor) {
        if (visitor.visitOrdinalValue) {
            return visitor.visitOrdinalValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OrdinalValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OrdinalValueContext = OrdinalValueContext;
var MouseStateContext = /** @class */ (function (_super) {
    __extends(MouseStateContext, _super);
    function MouseStateContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(MouseStateContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_mouseState; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MouseStateContext.prototype.enterRule = function (listener) {
        if (listener.enterMouseState) {
            listener.enterMouseState(this);
        }
    };
    // @Override
    MouseStateContext.prototype.exitRule = function (listener) {
        if (listener.exitMouseState) {
            listener.exitMouseState(this);
        }
    };
    // @Override
    MouseStateContext.prototype.accept = function (visitor) {
        if (visitor.visitMouseState) {
            return visitor.visitMouseState(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MouseStateContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MouseStateContext = MouseStateContext;
var ModifierKeyContext = /** @class */ (function (_super) {
    __extends(ModifierKeyContext, _super);
    function ModifierKeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ModifierKeyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_modifierKey; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ModifierKeyContext.prototype.enterRule = function (listener) {
        if (listener.enterModifierKey) {
            listener.enterModifierKey(this);
        }
    };
    // @Override
    ModifierKeyContext.prototype.exitRule = function (listener) {
        if (listener.exitModifierKey) {
            listener.exitModifierKey(this);
        }
    };
    // @Override
    ModifierKeyContext.prototype.accept = function (visitor) {
        if (visitor.visitModifierKey) {
            return visitor.visitModifierKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ModifierKeyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ModifierKeyContext = ModifierKeyContext;
var KnownTypeContext = /** @class */ (function (_super) {
    __extends(KnownTypeContext, _super);
    function KnownTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(KnownTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_knownType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    KnownTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterKnownType) {
            listener.enterKnownType(this);
        }
    };
    // @Override
    KnownTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitKnownType) {
            listener.exitKnownType(this);
        }
    };
    // @Override
    KnownTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitKnownType) {
            return visitor.visitKnownType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return KnownTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.KnownTypeContext = KnownTypeContext;
var FindTypeContext = /** @class */ (function (_super) {
    __extends(FindTypeContext, _super);
    function FindTypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(FindTypeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_findType; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FindTypeContext.prototype.enterRule = function (listener) {
        if (listener.enterFindType) {
            listener.enterFindType(this);
        }
    };
    // @Override
    FindTypeContext.prototype.exitRule = function (listener) {
        if (listener.exitFindType) {
            listener.exitFindType(this);
        }
    };
    // @Override
    FindTypeContext.prototype.accept = function (visitor) {
        if (visitor.visitFindType) {
            return visitor.visitFindType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FindTypeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FindTypeContext = FindTypeContext;
var PropertyNameContext = /** @class */ (function (_super) {
    __extends(PropertyNameContext, _super);
    function PropertyNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyNameContext.prototype.ID = function () { return this.getToken(HyperTalkParser.ID, 0); };
    Object.defineProperty(PropertyNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_propertyName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyNameContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyName) {
            listener.enterPropertyName(this);
        }
    };
    // @Override
    PropertyNameContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyName) {
            listener.exitPropertyName(this);
        }
    };
    // @Override
    PropertyNameContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyName) {
            return visitor.visitPropertyName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyNameContext = PropertyNameContext;
var PropertyValueContext = /** @class */ (function (_super) {
    __extends(PropertyValueContext, _super);
    function PropertyValueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PropertyValueContext.prototype.listExpression = function () {
        return this.tryGetRuleContext(0, ListExpressionContext);
    };
    Object.defineProperty(PropertyValueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_propertyValue; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PropertyValueContext.prototype.enterRule = function (listener) {
        if (listener.enterPropertyValue) {
            listener.enterPropertyValue(this);
        }
    };
    // @Override
    PropertyValueContext.prototype.exitRule = function (listener) {
        if (listener.exitPropertyValue) {
            listener.exitPropertyValue(this);
        }
    };
    // @Override
    PropertyValueContext.prototype.accept = function (visitor) {
        if (visitor.visitPropertyValue) {
            return visitor.visitPropertyValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PropertyValueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PropertyValueContext = PropertyValueContext;
var CommandNameContext = /** @class */ (function (_super) {
    __extends(CommandNameContext, _super);
    function CommandNameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(CommandNameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_commandName; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommandNameContext.prototype.enterRule = function (listener) {
        if (listener.enterCommandName) {
            listener.enterCommandName(this);
        }
    };
    // @Override
    CommandNameContext.prototype.exitRule = function (listener) {
        if (listener.exitCommandName) {
            listener.exitCommandName(this);
        }
    };
    // @Override
    CommandNameContext.prototype.accept = function (visitor) {
        if (visitor.visitCommandName) {
            return visitor.visitCommandName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommandNameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommandNameContext = CommandNameContext;
var PictureContext = /** @class */ (function (_super) {
    __extends(PictureContext, _super);
    function PictureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(PictureContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_picture; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PictureContext.prototype.enterRule = function (listener) {
        if (listener.enterPicture) {
            listener.enterPicture(this);
        }
    };
    // @Override
    PictureContext.prototype.exitRule = function (listener) {
        if (listener.exitPicture) {
            listener.exitPicture(this);
        }
    };
    // @Override
    PictureContext.prototype.accept = function (visitor) {
        if (visitor.visitPicture) {
            return visitor.visitPicture(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PictureContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PictureContext = PictureContext;
var SecondsContext = /** @class */ (function (_super) {
    __extends(SecondsContext, _super);
    function SecondsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(SecondsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_seconds; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SecondsContext.prototype.enterRule = function (listener) {
        if (listener.enterSeconds) {
            listener.enterSeconds(this);
        }
    };
    // @Override
    SecondsContext.prototype.exitRule = function (listener) {
        if (listener.exitSeconds) {
            listener.exitSeconds(this);
        }
    };
    // @Override
    SecondsContext.prototype.accept = function (visitor) {
        if (visitor.visitSeconds) {
            return visitor.visitSeconds(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SecondsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SecondsContext = SecondsContext;
var SpeedContext = /** @class */ (function (_super) {
    __extends(SpeedContext, _super);
    function SpeedContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(SpeedContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_speed; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SpeedContext.prototype.enterRule = function (listener) {
        if (listener.enterSpeed) {
            listener.enterSpeed(this);
        }
    };
    // @Override
    SpeedContext.prototype.exitRule = function (listener) {
        if (listener.exitSpeed) {
            listener.exitSpeed(this);
        }
    };
    // @Override
    SpeedContext.prototype.accept = function (visitor) {
        if (visitor.visitSpeed) {
            return visitor.visitSpeed(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SpeedContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SpeedContext = SpeedContext;
var ImageContext = /** @class */ (function (_super) {
    __extends(ImageContext, _super);
    function ImageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ImageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_image; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ImageContext.prototype.enterRule = function (listener) {
        if (listener.enterImage) {
            listener.enterImage(this);
        }
    };
    // @Override
    ImageContext.prototype.exitRule = function (listener) {
        if (listener.exitImage) {
            listener.exitImage(this);
        }
    };
    // @Override
    ImageContext.prototype.accept = function (visitor) {
        if (visitor.visitImage) {
            return visitor.visitImage(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ImageContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ImageContext = ImageContext;
var EffectContext = /** @class */ (function (_super) {
    __extends(EffectContext, _super);
    function EffectContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(EffectContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_effect; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EffectContext.prototype.enterRule = function (listener) {
        if (listener.enterEffect) {
            listener.enterEffect(this);
        }
    };
    // @Override
    EffectContext.prototype.exitRule = function (listener) {
        if (listener.exitEffect) {
            listener.exitEffect(this);
        }
    };
    // @Override
    EffectContext.prototype.accept = function (visitor) {
        if (visitor.visitEffect) {
            return visitor.visitEffect(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EffectContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EffectContext = EffectContext;
var TimeUnitContext = /** @class */ (function (_super) {
    __extends(TimeUnitContext, _super);
    function TimeUnitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TimeUnitContext.prototype.seconds = function () {
        return this.tryGetRuleContext(0, SecondsContext);
    };
    Object.defineProperty(TimeUnitContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_timeUnit; },
        enumerable: true,
        configurable: true
    });
    // @Override
    TimeUnitContext.prototype.enterRule = function (listener) {
        if (listener.enterTimeUnit) {
            listener.enterTimeUnit(this);
        }
    };
    // @Override
    TimeUnitContext.prototype.exitRule = function (listener) {
        if (listener.exitTimeUnit) {
            listener.exitTimeUnit(this);
        }
    };
    // @Override
    TimeUnitContext.prototype.accept = function (visitor) {
        if (visitor.visitTimeUnit) {
            return visitor.visitTimeUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TimeUnitContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.TimeUnitContext = TimeUnitContext;
var PositionContext = /** @class */ (function (_super) {
    __extends(PositionContext, _super);
    function PositionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(PositionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_position; },
        enumerable: true,
        configurable: true
    });
    // @Override
    PositionContext.prototype.enterRule = function (listener) {
        if (listener.enterPosition) {
            listener.enterPosition(this);
        }
    };
    // @Override
    PositionContext.prototype.exitRule = function (listener) {
        if (listener.exitPosition) {
            listener.exitPosition(this);
        }
    };
    // @Override
    PositionContext.prototype.accept = function (visitor) {
        if (visitor.visitPosition) {
            return visitor.visitPosition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return PositionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.PositionContext = PositionContext;
var MessageContext = /** @class */ (function (_super) {
    __extends(MessageContext, _super);
    function MessageContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(MessageContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_message; },
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
var CardsContext = /** @class */ (function (_super) {
    __extends(CardsContext, _super);
    function CardsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(CardsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_cards; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CardsContext.prototype.enterRule = function (listener) {
        if (listener.enterCards) {
            listener.enterCards(this);
        }
    };
    // @Override
    CardsContext.prototype.exitRule = function (listener) {
        if (listener.exitCards) {
            listener.exitCards(this);
        }
    };
    // @Override
    CardsContext.prototype.accept = function (visitor) {
        if (visitor.visitCards) {
            return visitor.visitCards(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CardsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CardsContext = CardsContext;
var CardContext = /** @class */ (function (_super) {
    __extends(CardContext, _super);
    function CardContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(CardContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_card; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CardContext.prototype.enterRule = function (listener) {
        if (listener.enterCard) {
            listener.enterCard(this);
        }
    };
    // @Override
    CardContext.prototype.exitRule = function (listener) {
        if (listener.exitCard) {
            listener.exitCard(this);
        }
    };
    // @Override
    CardContext.prototype.accept = function (visitor) {
        if (visitor.visitCard) {
            return visitor.visitCard(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CardContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CardContext = CardContext;
var BackgroundContext = /** @class */ (function (_super) {
    __extends(BackgroundContext, _super);
    function BackgroundContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(BackgroundContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_background; },
        enumerable: true,
        configurable: true
    });
    // @Override
    BackgroundContext.prototype.enterRule = function (listener) {
        if (listener.enterBackground) {
            listener.enterBackground(this);
        }
    };
    // @Override
    BackgroundContext.prototype.exitRule = function (listener) {
        if (listener.exitBackground) {
            listener.exitBackground(this);
        }
    };
    // @Override
    BackgroundContext.prototype.accept = function (visitor) {
        if (visitor.visitBackground) {
            return visitor.visitBackground(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return BackgroundContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.BackgroundContext = BackgroundContext;
var ButtonContext = /** @class */ (function (_super) {
    __extends(ButtonContext, _super);
    function ButtonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ButtonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_button; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ButtonContext.prototype.enterRule = function (listener) {
        if (listener.enterButton) {
            listener.enterButton(this);
        }
    };
    // @Override
    ButtonContext.prototype.exitRule = function (listener) {
        if (listener.exitButton) {
            listener.exitButton(this);
        }
    };
    // @Override
    ButtonContext.prototype.accept = function (visitor) {
        if (visitor.visitButton) {
            return visitor.visitButton(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ButtonContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ButtonContext = ButtonContext;
var FieldContext = /** @class */ (function (_super) {
    __extends(FieldContext, _super);
    function FieldContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(FieldContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_field; },
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
var StackContext = /** @class */ (function (_super) {
    __extends(StackContext, _super);
    function StackContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(StackContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_stack; },
        enumerable: true,
        configurable: true
    });
    // @Override
    StackContext.prototype.enterRule = function (listener) {
        if (listener.enterStack) {
            listener.enterStack(this);
        }
    };
    // @Override
    StackContext.prototype.exitRule = function (listener) {
        if (listener.exitStack) {
            listener.exitStack(this);
        }
    };
    // @Override
    StackContext.prototype.accept = function (visitor) {
        if (visitor.visitStack) {
            return visitor.visitStack(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return StackContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.StackContext = StackContext;
var CharacterContext = /** @class */ (function (_super) {
    __extends(CharacterContext, _super);
    function CharacterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(CharacterContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_character; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CharacterContext.prototype.enterRule = function (listener) {
        if (listener.enterCharacter) {
            listener.enterCharacter(this);
        }
    };
    // @Override
    CharacterContext.prototype.exitRule = function (listener) {
        if (listener.exitCharacter) {
            listener.exitCharacter(this);
        }
    };
    // @Override
    CharacterContext.prototype.accept = function (visitor) {
        if (visitor.visitCharacter) {
            return visitor.visitCharacter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CharacterContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CharacterContext = CharacterContext;
var WordContext = /** @class */ (function (_super) {
    __extends(WordContext, _super);
    function WordContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(WordContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_word; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WordContext.prototype.enterRule = function (listener) {
        if (listener.enterWord) {
            listener.enterWord(this);
        }
    };
    // @Override
    WordContext.prototype.exitRule = function (listener) {
        if (listener.exitWord) {
            listener.exitWord(this);
        }
    };
    // @Override
    WordContext.prototype.accept = function (visitor) {
        if (visitor.visitWord) {
            return visitor.visitWord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WordContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WordContext = WordContext;
var LineContext = /** @class */ (function (_super) {
    __extends(LineContext, _super);
    function LineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_line; },
        enumerable: true,
        configurable: true
    });
    // @Override
    LineContext.prototype.enterRule = function (listener) {
        if (listener.enterLine) {
            listener.enterLine(this);
        }
    };
    // @Override
    LineContext.prototype.exitRule = function (listener) {
        if (listener.exitLine) {
            listener.exitLine(this);
        }
    };
    // @Override
    LineContext.prototype.accept = function (visitor) {
        if (visitor.visitLine) {
            return visitor.visitLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LineContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.LineContext = LineContext;
var ItemContext = /** @class */ (function (_super) {
    __extends(ItemContext, _super);
    function ItemContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ItemContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_item; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ItemContext.prototype.enterRule = function (listener) {
        if (listener.enterItem) {
            listener.enterItem(this);
        }
    };
    // @Override
    ItemContext.prototype.exitRule = function (listener) {
        if (listener.exitItem) {
            listener.exitItem(this);
        }
    };
    // @Override
    ItemContext.prototype.accept = function (visitor) {
        if (visitor.visitItem) {
            return visitor.visitItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ItemContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ItemContext = ItemContext;
var OfContext = /** @class */ (function (_super) {
    __extends(OfContext, _super);
    function OfContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OfContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return HyperTalkParser.RULE_of; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OfContext.prototype.enterRule = function (listener) {
        if (listener.enterOf) {
            listener.enterOf(this);
        }
    };
    // @Override
    OfContext.prototype.exitRule = function (listener) {
        if (listener.exitOf) {
            listener.exitOf(this);
        }
    };
    // @Override
    OfContext.prototype.accept = function (visitor) {
        if (visitor.visitOf) {
            return visitor.visitOf(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OfContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OfContext = OfContext;
