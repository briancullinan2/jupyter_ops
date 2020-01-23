"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pdp7/pdp7.g4 by ANTLR 4.7.3-SNAPSHOT
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
var pdp7Parser = /** @class */ (function (_super) {
    __extends(pdp7Parser, _super);
    function pdp7Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(pdp7Parser._ATN, _this);
        return _this;
    }
    Object.defineProperty(pdp7Parser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return pdp7Parser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pdp7Parser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "pdp7.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pdp7Parser.prototype, "ruleNames", {
        // @Override
        get: function () { return pdp7Parser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pdp7Parser.prototype, "serializedATN", {
        // @Override
        get: function () { return pdp7Parser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    pdp7Parser.prototype.prog = function () {
        var _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, pdp7Parser.RULE_prog);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 40;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 37;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pdp7Parser.T__3) | (1 << pdp7Parser.T__4) | (1 << pdp7Parser.T__5) | (1 << pdp7Parser.T__6) | (1 << pdp7Parser.T__7) | (1 << pdp7Parser.T__8) | (1 << pdp7Parser.T__9) | (1 << pdp7Parser.T__10) | (1 << pdp7Parser.T__11) | (1 << pdp7Parser.T__12) | (1 << pdp7Parser.T__13) | (1 << pdp7Parser.T__14) | (1 << pdp7Parser.T__15) | (1 << pdp7Parser.T__16) | (1 << pdp7Parser.T__17) | (1 << pdp7Parser.T__18) | (1 << pdp7Parser.T__19) | (1 << pdp7Parser.T__20) | (1 << pdp7Parser.T__21) | (1 << pdp7Parser.T__22) | (1 << pdp7Parser.T__23) | (1 << pdp7Parser.T__24) | (1 << pdp7Parser.T__25) | (1 << pdp7Parser.T__26) | (1 << pdp7Parser.T__27) | (1 << pdp7Parser.T__28) | (1 << pdp7Parser.T__29) | (1 << pdp7Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (pdp7Parser.T__31 - 32)) | (1 << (pdp7Parser.T__32 - 32)) | (1 << (pdp7Parser.T__33 - 32)) | (1 << (pdp7Parser.T__34 - 32)) | (1 << (pdp7Parser.T__35 - 32)) | (1 << (pdp7Parser.T__36 - 32)) | (1 << (pdp7Parser.T__37 - 32)) | (1 << (pdp7Parser.T__38 - 32)) | (1 << (pdp7Parser.T__39 - 32)) | (1 << (pdp7Parser.T__40 - 32)) | (1 << (pdp7Parser.T__41 - 32)) | (1 << (pdp7Parser.T__42 - 32)) | (1 << (pdp7Parser.T__43 - 32)) | (1 << (pdp7Parser.T__44 - 32)) | (1 << (pdp7Parser.T__45 - 32)) | (1 << (pdp7Parser.T__46 - 32)) | (1 << (pdp7Parser.T__47 - 32)) | (1 << (pdp7Parser.T__48 - 32)) | (1 << (pdp7Parser.T__49 - 32)) | (1 << (pdp7Parser.T__50 - 32)) | (1 << (pdp7Parser.T__51 - 32)) | (1 << (pdp7Parser.T__52 - 32)) | (1 << (pdp7Parser.T__53 - 32)) | (1 << (pdp7Parser.T__54 - 32)) | (1 << (pdp7Parser.T__55 - 32)) | (1 << (pdp7Parser.T__56 - 32)) | (1 << (pdp7Parser.T__57 - 32)) | (1 << (pdp7Parser.T__58 - 32)) | (1 << (pdp7Parser.T__59 - 32)) | (1 << (pdp7Parser.T__60 - 32)) | (1 << (pdp7Parser.T__61 - 32)) | (1 << (pdp7Parser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (pdp7Parser.T__63 - 64)) | (1 << (pdp7Parser.T__64 - 64)) | (1 << (pdp7Parser.T__65 - 64)) | (1 << (pdp7Parser.T__66 - 64)) | (1 << (pdp7Parser.T__67 - 64)) | (1 << (pdp7Parser.T__68 - 64)) | (1 << (pdp7Parser.T__69 - 64)) | (1 << (pdp7Parser.T__70 - 64)) | (1 << (pdp7Parser.T__71 - 64)) | (1 << (pdp7Parser.T__72 - 64)) | (1 << (pdp7Parser.T__73 - 64)) | (1 << (pdp7Parser.T__74 - 64)) | (1 << (pdp7Parser.T__75 - 64)) | (1 << (pdp7Parser.T__76 - 64)) | (1 << (pdp7Parser.T__77 - 64)) | (1 << (pdp7Parser.T__78 - 64)) | (1 << (pdp7Parser.T__79 - 64)) | (1 << (pdp7Parser.T__80 - 64)) | (1 << (pdp7Parser.T__81 - 64)) | (1 << (pdp7Parser.T__82 - 64)) | (1 << (pdp7Parser.T__83 - 64)) | (1 << (pdp7Parser.T__84 - 64)) | (1 << (pdp7Parser.T__85 - 64)) | (1 << (pdp7Parser.T__86 - 64)) | (1 << (pdp7Parser.T__87 - 64)) | (1 << (pdp7Parser.T__88 - 64)) | (1 << (pdp7Parser.T__89 - 64)) | (1 << (pdp7Parser.T__90 - 64)) | (1 << (pdp7Parser.T__91 - 64)) | (1 << (pdp7Parser.T__92 - 64)) | (1 << (pdp7Parser.T__93 - 64)) | (1 << (pdp7Parser.LOC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (pdp7Parser.RELOC - 96)) | (1 << (pdp7Parser.MINUS - 96)) | (1 << (pdp7Parser.LABEL - 96)) | (1 << (pdp7Parser.IDENTIFIER - 96)) | (1 << (pdp7Parser.NUMERIC_LITERAL - 96)) | (1 << (pdp7Parser.DECIMAL - 96)) | (1 << (pdp7Parser.OCTAL - 96)) | (1 << (pdp7Parser.DECIMAL_MINUS - 96)) | (1 << (pdp7Parser.STRING - 96)) | (1 << (pdp7Parser.CHAR - 96)) | (1 << (pdp7Parser.COMMENT - 96)))) !== 0)) {
                                        {
                                            this.state = 36;
                                            this.line();
                                        }
                                    }
                                    this.state = 39;
                                    this.eol();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 42;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 45;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pdp7Parser.T__3) | (1 << pdp7Parser.T__4) | (1 << pdp7Parser.T__5) | (1 << pdp7Parser.T__6) | (1 << pdp7Parser.T__7) | (1 << pdp7Parser.T__8) | (1 << pdp7Parser.T__9) | (1 << pdp7Parser.T__10) | (1 << pdp7Parser.T__11) | (1 << pdp7Parser.T__12) | (1 << pdp7Parser.T__13) | (1 << pdp7Parser.T__14) | (1 << pdp7Parser.T__15) | (1 << pdp7Parser.T__16) | (1 << pdp7Parser.T__17) | (1 << pdp7Parser.T__18) | (1 << pdp7Parser.T__19) | (1 << pdp7Parser.T__20) | (1 << pdp7Parser.T__21) | (1 << pdp7Parser.T__22) | (1 << pdp7Parser.T__23) | (1 << pdp7Parser.T__24) | (1 << pdp7Parser.T__25) | (1 << pdp7Parser.T__26) | (1 << pdp7Parser.T__27) | (1 << pdp7Parser.T__28) | (1 << pdp7Parser.T__29) | (1 << pdp7Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (pdp7Parser.T__31 - 32)) | (1 << (pdp7Parser.T__32 - 32)) | (1 << (pdp7Parser.T__33 - 32)) | (1 << (pdp7Parser.T__34 - 32)) | (1 << (pdp7Parser.T__35 - 32)) | (1 << (pdp7Parser.T__36 - 32)) | (1 << (pdp7Parser.T__37 - 32)) | (1 << (pdp7Parser.T__38 - 32)) | (1 << (pdp7Parser.T__39 - 32)) | (1 << (pdp7Parser.T__40 - 32)) | (1 << (pdp7Parser.T__41 - 32)) | (1 << (pdp7Parser.T__42 - 32)) | (1 << (pdp7Parser.T__43 - 32)) | (1 << (pdp7Parser.T__44 - 32)) | (1 << (pdp7Parser.T__45 - 32)) | (1 << (pdp7Parser.T__46 - 32)) | (1 << (pdp7Parser.T__47 - 32)) | (1 << (pdp7Parser.T__48 - 32)) | (1 << (pdp7Parser.T__49 - 32)) | (1 << (pdp7Parser.T__50 - 32)) | (1 << (pdp7Parser.T__51 - 32)) | (1 << (pdp7Parser.T__52 - 32)) | (1 << (pdp7Parser.T__53 - 32)) | (1 << (pdp7Parser.T__54 - 32)) | (1 << (pdp7Parser.T__55 - 32)) | (1 << (pdp7Parser.T__56 - 32)) | (1 << (pdp7Parser.T__57 - 32)) | (1 << (pdp7Parser.T__58 - 32)) | (1 << (pdp7Parser.T__59 - 32)) | (1 << (pdp7Parser.T__60 - 32)) | (1 << (pdp7Parser.T__61 - 32)) | (1 << (pdp7Parser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (pdp7Parser.T__63 - 64)) | (1 << (pdp7Parser.T__64 - 64)) | (1 << (pdp7Parser.T__65 - 64)) | (1 << (pdp7Parser.T__66 - 64)) | (1 << (pdp7Parser.T__67 - 64)) | (1 << (pdp7Parser.T__68 - 64)) | (1 << (pdp7Parser.T__69 - 64)) | (1 << (pdp7Parser.T__70 - 64)) | (1 << (pdp7Parser.T__71 - 64)) | (1 << (pdp7Parser.T__72 - 64)) | (1 << (pdp7Parser.T__73 - 64)) | (1 << (pdp7Parser.T__74 - 64)) | (1 << (pdp7Parser.T__75 - 64)) | (1 << (pdp7Parser.T__76 - 64)) | (1 << (pdp7Parser.T__77 - 64)) | (1 << (pdp7Parser.T__78 - 64)) | (1 << (pdp7Parser.T__79 - 64)) | (1 << (pdp7Parser.T__80 - 64)) | (1 << (pdp7Parser.T__81 - 64)) | (1 << (pdp7Parser.T__82 - 64)) | (1 << (pdp7Parser.T__83 - 64)) | (1 << (pdp7Parser.T__84 - 64)) | (1 << (pdp7Parser.T__85 - 64)) | (1 << (pdp7Parser.T__86 - 64)) | (1 << (pdp7Parser.T__87 - 64)) | (1 << (pdp7Parser.T__88 - 64)) | (1 << (pdp7Parser.T__89 - 64)) | (1 << (pdp7Parser.T__90 - 64)) | (1 << (pdp7Parser.T__91 - 64)) | (1 << (pdp7Parser.T__92 - 64)) | (1 << (pdp7Parser.T__93 - 64)) | (1 << (pdp7Parser.LOC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (pdp7Parser.RELOC - 96)) | (1 << (pdp7Parser.MINUS - 96)) | (1 << (pdp7Parser.LABEL - 96)) | (1 << (pdp7Parser.IDENTIFIER - 96)) | (1 << (pdp7Parser.NUMERIC_LITERAL - 96)) | (1 << (pdp7Parser.DECIMAL - 96)) | (1 << (pdp7Parser.OCTAL - 96)) | (1 << (pdp7Parser.DECIMAL_MINUS - 96)) | (1 << (pdp7Parser.STRING - 96)) | (1 << (pdp7Parser.CHAR - 96)) | (1 << (pdp7Parser.COMMENT - 96)))) !== 0)) {
                    {
                        this.state = 44;
                        this.line();
                    }
                }
                this.state = 47;
                this.match(pdp7Parser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    pdp7Parser.prototype.line = function () {
        var _localctx = new LineContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, pdp7Parser.RULE_line);
        var _la;
        try {
            this.state = 54;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pdp7Parser.T__3:
                case pdp7Parser.T__4:
                case pdp7Parser.T__5:
                case pdp7Parser.T__6:
                case pdp7Parser.T__7:
                case pdp7Parser.T__8:
                case pdp7Parser.T__9:
                case pdp7Parser.T__10:
                case pdp7Parser.T__11:
                case pdp7Parser.T__12:
                case pdp7Parser.T__13:
                case pdp7Parser.T__14:
                case pdp7Parser.T__15:
                case pdp7Parser.T__16:
                case pdp7Parser.T__17:
                case pdp7Parser.T__18:
                case pdp7Parser.T__19:
                case pdp7Parser.T__20:
                case pdp7Parser.T__21:
                case pdp7Parser.T__22:
                case pdp7Parser.T__23:
                case pdp7Parser.T__24:
                case pdp7Parser.T__25:
                case pdp7Parser.T__26:
                case pdp7Parser.T__27:
                case pdp7Parser.T__28:
                case pdp7Parser.T__29:
                case pdp7Parser.T__30:
                case pdp7Parser.T__31:
                case pdp7Parser.T__32:
                case pdp7Parser.T__33:
                case pdp7Parser.T__34:
                case pdp7Parser.T__35:
                case pdp7Parser.T__36:
                case pdp7Parser.T__37:
                case pdp7Parser.T__38:
                case pdp7Parser.T__39:
                case pdp7Parser.T__40:
                case pdp7Parser.T__41:
                case pdp7Parser.T__42:
                case pdp7Parser.T__43:
                case pdp7Parser.T__44:
                case pdp7Parser.T__45:
                case pdp7Parser.T__46:
                case pdp7Parser.T__47:
                case pdp7Parser.T__48:
                case pdp7Parser.T__49:
                case pdp7Parser.T__50:
                case pdp7Parser.T__51:
                case pdp7Parser.T__52:
                case pdp7Parser.T__53:
                case pdp7Parser.T__54:
                case pdp7Parser.T__55:
                case pdp7Parser.T__56:
                case pdp7Parser.T__57:
                case pdp7Parser.T__58:
                case pdp7Parser.T__59:
                case pdp7Parser.T__60:
                case pdp7Parser.T__61:
                case pdp7Parser.T__62:
                case pdp7Parser.T__63:
                case pdp7Parser.T__64:
                case pdp7Parser.T__65:
                case pdp7Parser.T__66:
                case pdp7Parser.T__67:
                case pdp7Parser.T__68:
                case pdp7Parser.T__69:
                case pdp7Parser.T__70:
                case pdp7Parser.T__71:
                case pdp7Parser.T__72:
                case pdp7Parser.T__73:
                case pdp7Parser.T__74:
                case pdp7Parser.T__75:
                case pdp7Parser.T__76:
                case pdp7Parser.T__77:
                case pdp7Parser.T__78:
                case pdp7Parser.T__79:
                case pdp7Parser.T__80:
                case pdp7Parser.T__81:
                case pdp7Parser.T__82:
                case pdp7Parser.T__83:
                case pdp7Parser.T__84:
                case pdp7Parser.T__85:
                case pdp7Parser.T__86:
                case pdp7Parser.T__87:
                case pdp7Parser.T__88:
                case pdp7Parser.T__89:
                case pdp7Parser.T__90:
                case pdp7Parser.T__91:
                case pdp7Parser.T__92:
                case pdp7Parser.T__93:
                case pdp7Parser.LOC:
                case pdp7Parser.RELOC:
                case pdp7Parser.MINUS:
                case pdp7Parser.LABEL:
                case pdp7Parser.IDENTIFIER:
                case pdp7Parser.NUMERIC_LITERAL:
                case pdp7Parser.DECIMAL:
                case pdp7Parser.OCTAL:
                case pdp7Parser.DECIMAL_MINUS:
                case pdp7Parser.STRING:
                case pdp7Parser.CHAR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 49;
                        this.declarations();
                        this.state = 51;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === pdp7Parser.COMMENT) {
                            {
                                this.state = 50;
                                this.comment();
                            }
                        }
                    }
                    break;
                case pdp7Parser.COMMENT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 53;
                        this.comment();
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
    pdp7Parser.prototype.declarations = function () {
        var _localctx = new DeclarationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, pdp7Parser.RULE_declarations);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 56;
                this.declaration();
                this.state = 63;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pdp7Parser.T__0) {
                    {
                        {
                            this.state = 57;
                            this.match(pdp7Parser.T__0);
                            this.state = 59;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pdp7Parser.T__3) | (1 << pdp7Parser.T__4) | (1 << pdp7Parser.T__5) | (1 << pdp7Parser.T__6) | (1 << pdp7Parser.T__7) | (1 << pdp7Parser.T__8) | (1 << pdp7Parser.T__9) | (1 << pdp7Parser.T__10) | (1 << pdp7Parser.T__11) | (1 << pdp7Parser.T__12) | (1 << pdp7Parser.T__13) | (1 << pdp7Parser.T__14) | (1 << pdp7Parser.T__15) | (1 << pdp7Parser.T__16) | (1 << pdp7Parser.T__17) | (1 << pdp7Parser.T__18) | (1 << pdp7Parser.T__19) | (1 << pdp7Parser.T__20) | (1 << pdp7Parser.T__21) | (1 << pdp7Parser.T__22) | (1 << pdp7Parser.T__23) | (1 << pdp7Parser.T__24) | (1 << pdp7Parser.T__25) | (1 << pdp7Parser.T__26) | (1 << pdp7Parser.T__27) | (1 << pdp7Parser.T__28) | (1 << pdp7Parser.T__29) | (1 << pdp7Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (pdp7Parser.T__31 - 32)) | (1 << (pdp7Parser.T__32 - 32)) | (1 << (pdp7Parser.T__33 - 32)) | (1 << (pdp7Parser.T__34 - 32)) | (1 << (pdp7Parser.T__35 - 32)) | (1 << (pdp7Parser.T__36 - 32)) | (1 << (pdp7Parser.T__37 - 32)) | (1 << (pdp7Parser.T__38 - 32)) | (1 << (pdp7Parser.T__39 - 32)) | (1 << (pdp7Parser.T__40 - 32)) | (1 << (pdp7Parser.T__41 - 32)) | (1 << (pdp7Parser.T__42 - 32)) | (1 << (pdp7Parser.T__43 - 32)) | (1 << (pdp7Parser.T__44 - 32)) | (1 << (pdp7Parser.T__45 - 32)) | (1 << (pdp7Parser.T__46 - 32)) | (1 << (pdp7Parser.T__47 - 32)) | (1 << (pdp7Parser.T__48 - 32)) | (1 << (pdp7Parser.T__49 - 32)) | (1 << (pdp7Parser.T__50 - 32)) | (1 << (pdp7Parser.T__51 - 32)) | (1 << (pdp7Parser.T__52 - 32)) | (1 << (pdp7Parser.T__53 - 32)) | (1 << (pdp7Parser.T__54 - 32)) | (1 << (pdp7Parser.T__55 - 32)) | (1 << (pdp7Parser.T__56 - 32)) | (1 << (pdp7Parser.T__57 - 32)) | (1 << (pdp7Parser.T__58 - 32)) | (1 << (pdp7Parser.T__59 - 32)) | (1 << (pdp7Parser.T__60 - 32)) | (1 << (pdp7Parser.T__61 - 32)) | (1 << (pdp7Parser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (pdp7Parser.T__63 - 64)) | (1 << (pdp7Parser.T__64 - 64)) | (1 << (pdp7Parser.T__65 - 64)) | (1 << (pdp7Parser.T__66 - 64)) | (1 << (pdp7Parser.T__67 - 64)) | (1 << (pdp7Parser.T__68 - 64)) | (1 << (pdp7Parser.T__69 - 64)) | (1 << (pdp7Parser.T__70 - 64)) | (1 << (pdp7Parser.T__71 - 64)) | (1 << (pdp7Parser.T__72 - 64)) | (1 << (pdp7Parser.T__73 - 64)) | (1 << (pdp7Parser.T__74 - 64)) | (1 << (pdp7Parser.T__75 - 64)) | (1 << (pdp7Parser.T__76 - 64)) | (1 << (pdp7Parser.T__77 - 64)) | (1 << (pdp7Parser.T__78 - 64)) | (1 << (pdp7Parser.T__79 - 64)) | (1 << (pdp7Parser.T__80 - 64)) | (1 << (pdp7Parser.T__81 - 64)) | (1 << (pdp7Parser.T__82 - 64)) | (1 << (pdp7Parser.T__83 - 64)) | (1 << (pdp7Parser.T__84 - 64)) | (1 << (pdp7Parser.T__85 - 64)) | (1 << (pdp7Parser.T__86 - 64)) | (1 << (pdp7Parser.T__87 - 64)) | (1 << (pdp7Parser.T__88 - 64)) | (1 << (pdp7Parser.T__89 - 64)) | (1 << (pdp7Parser.T__90 - 64)) | (1 << (pdp7Parser.T__91 - 64)) | (1 << (pdp7Parser.T__92 - 64)) | (1 << (pdp7Parser.T__93 - 64)) | (1 << (pdp7Parser.LOC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (pdp7Parser.RELOC - 96)) | (1 << (pdp7Parser.MINUS - 96)) | (1 << (pdp7Parser.LABEL - 96)) | (1 << (pdp7Parser.IDENTIFIER - 96)) | (1 << (pdp7Parser.NUMERIC_LITERAL - 96)) | (1 << (pdp7Parser.DECIMAL - 96)) | (1 << (pdp7Parser.OCTAL - 96)) | (1 << (pdp7Parser.DECIMAL_MINUS - 96)) | (1 << (pdp7Parser.STRING - 96)) | (1 << (pdp7Parser.CHAR - 96)))) !== 0)) {
                                {
                                    this.state = 58;
                                    this.declaration();
                                }
                            }
                        }
                    }
                    this.state = 65;
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
    pdp7Parser.prototype.declaration = function () {
        var _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, pdp7Parser.RULE_declaration);
        var _la;
        try {
            this.state = 82;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pdp7Parser.LABEL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 67;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 66;
                                    this.label();
                                }
                            }
                            this.state = 69;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === pdp7Parser.LABEL);
                        this.state = 74;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pdp7Parser.T__3) | (1 << pdp7Parser.T__4) | (1 << pdp7Parser.T__5) | (1 << pdp7Parser.T__6) | (1 << pdp7Parser.T__7) | (1 << pdp7Parser.T__8) | (1 << pdp7Parser.T__9) | (1 << pdp7Parser.T__10) | (1 << pdp7Parser.T__11) | (1 << pdp7Parser.T__12) | (1 << pdp7Parser.T__13) | (1 << pdp7Parser.T__14) | (1 << pdp7Parser.T__15) | (1 << pdp7Parser.T__16) | (1 << pdp7Parser.T__17) | (1 << pdp7Parser.T__18) | (1 << pdp7Parser.T__19) | (1 << pdp7Parser.T__20) | (1 << pdp7Parser.T__21) | (1 << pdp7Parser.T__22) | (1 << pdp7Parser.T__23) | (1 << pdp7Parser.T__24) | (1 << pdp7Parser.T__25) | (1 << pdp7Parser.T__26) | (1 << pdp7Parser.T__27) | (1 << pdp7Parser.T__28) | (1 << pdp7Parser.T__29) | (1 << pdp7Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (pdp7Parser.T__31 - 32)) | (1 << (pdp7Parser.T__32 - 32)) | (1 << (pdp7Parser.T__33 - 32)) | (1 << (pdp7Parser.T__34 - 32)) | (1 << (pdp7Parser.T__35 - 32)) | (1 << (pdp7Parser.T__36 - 32)) | (1 << (pdp7Parser.T__37 - 32)) | (1 << (pdp7Parser.T__38 - 32)) | (1 << (pdp7Parser.T__39 - 32)) | (1 << (pdp7Parser.T__40 - 32)) | (1 << (pdp7Parser.T__41 - 32)) | (1 << (pdp7Parser.T__42 - 32)) | (1 << (pdp7Parser.T__43 - 32)) | (1 << (pdp7Parser.T__44 - 32)) | (1 << (pdp7Parser.T__45 - 32)) | (1 << (pdp7Parser.T__46 - 32)) | (1 << (pdp7Parser.T__47 - 32)) | (1 << (pdp7Parser.T__48 - 32)) | (1 << (pdp7Parser.T__49 - 32)) | (1 << (pdp7Parser.T__50 - 32)) | (1 << (pdp7Parser.T__51 - 32)) | (1 << (pdp7Parser.T__52 - 32)) | (1 << (pdp7Parser.T__53 - 32)) | (1 << (pdp7Parser.T__54 - 32)) | (1 << (pdp7Parser.T__55 - 32)) | (1 << (pdp7Parser.T__56 - 32)) | (1 << (pdp7Parser.T__57 - 32)) | (1 << (pdp7Parser.T__58 - 32)) | (1 << (pdp7Parser.T__59 - 32)) | (1 << (pdp7Parser.T__60 - 32)) | (1 << (pdp7Parser.T__61 - 32)) | (1 << (pdp7Parser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (pdp7Parser.T__63 - 64)) | (1 << (pdp7Parser.T__64 - 64)) | (1 << (pdp7Parser.T__65 - 64)) | (1 << (pdp7Parser.T__66 - 64)) | (1 << (pdp7Parser.T__67 - 64)) | (1 << (pdp7Parser.T__68 - 64)) | (1 << (pdp7Parser.T__69 - 64)) | (1 << (pdp7Parser.T__70 - 64)) | (1 << (pdp7Parser.T__71 - 64)) | (1 << (pdp7Parser.T__72 - 64)) | (1 << (pdp7Parser.T__73 - 64)) | (1 << (pdp7Parser.T__74 - 64)) | (1 << (pdp7Parser.T__75 - 64)) | (1 << (pdp7Parser.T__76 - 64)) | (1 << (pdp7Parser.T__77 - 64)) | (1 << (pdp7Parser.T__78 - 64)) | (1 << (pdp7Parser.T__79 - 64)) | (1 << (pdp7Parser.T__80 - 64)) | (1 << (pdp7Parser.T__81 - 64)) | (1 << (pdp7Parser.T__82 - 64)) | (1 << (pdp7Parser.T__83 - 64)) | (1 << (pdp7Parser.T__84 - 64)) | (1 << (pdp7Parser.T__85 - 64)) | (1 << (pdp7Parser.T__86 - 64)) | (1 << (pdp7Parser.T__87 - 64)) | (1 << (pdp7Parser.T__88 - 64)) | (1 << (pdp7Parser.T__89 - 64)) | (1 << (pdp7Parser.T__90 - 64)) | (1 << (pdp7Parser.T__91 - 64)) | (1 << (pdp7Parser.T__92 - 64)) | (1 << (pdp7Parser.T__93 - 64)) | (1 << (pdp7Parser.LOC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (pdp7Parser.RELOC - 96)) | (1 << (pdp7Parser.MINUS - 96)) | (1 << (pdp7Parser.IDENTIFIER - 96)) | (1 << (pdp7Parser.NUMERIC_LITERAL - 96)) | (1 << (pdp7Parser.DECIMAL - 96)) | (1 << (pdp7Parser.OCTAL - 96)) | (1 << (pdp7Parser.DECIMAL_MINUS - 96)) | (1 << (pdp7Parser.STRING - 96)) | (1 << (pdp7Parser.CHAR - 96)))) !== 0)) {
                            {
                                {
                                    this.state = 71;
                                    this.declarationRight();
                                }
                            }
                            this.state = 76;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case pdp7Parser.T__3:
                case pdp7Parser.T__4:
                case pdp7Parser.T__5:
                case pdp7Parser.T__6:
                case pdp7Parser.T__7:
                case pdp7Parser.T__8:
                case pdp7Parser.T__9:
                case pdp7Parser.T__10:
                case pdp7Parser.T__11:
                case pdp7Parser.T__12:
                case pdp7Parser.T__13:
                case pdp7Parser.T__14:
                case pdp7Parser.T__15:
                case pdp7Parser.T__16:
                case pdp7Parser.T__17:
                case pdp7Parser.T__18:
                case pdp7Parser.T__19:
                case pdp7Parser.T__20:
                case pdp7Parser.T__21:
                case pdp7Parser.T__22:
                case pdp7Parser.T__23:
                case pdp7Parser.T__24:
                case pdp7Parser.T__25:
                case pdp7Parser.T__26:
                case pdp7Parser.T__27:
                case pdp7Parser.T__28:
                case pdp7Parser.T__29:
                case pdp7Parser.T__30:
                case pdp7Parser.T__31:
                case pdp7Parser.T__32:
                case pdp7Parser.T__33:
                case pdp7Parser.T__34:
                case pdp7Parser.T__35:
                case pdp7Parser.T__36:
                case pdp7Parser.T__37:
                case pdp7Parser.T__38:
                case pdp7Parser.T__39:
                case pdp7Parser.T__40:
                case pdp7Parser.T__41:
                case pdp7Parser.T__42:
                case pdp7Parser.T__43:
                case pdp7Parser.T__44:
                case pdp7Parser.T__45:
                case pdp7Parser.T__46:
                case pdp7Parser.T__47:
                case pdp7Parser.T__48:
                case pdp7Parser.T__49:
                case pdp7Parser.T__50:
                case pdp7Parser.T__51:
                case pdp7Parser.T__52:
                case pdp7Parser.T__53:
                case pdp7Parser.T__54:
                case pdp7Parser.T__55:
                case pdp7Parser.T__56:
                case pdp7Parser.T__57:
                case pdp7Parser.T__58:
                case pdp7Parser.T__59:
                case pdp7Parser.T__60:
                case pdp7Parser.T__61:
                case pdp7Parser.T__62:
                case pdp7Parser.T__63:
                case pdp7Parser.T__64:
                case pdp7Parser.T__65:
                case pdp7Parser.T__66:
                case pdp7Parser.T__67:
                case pdp7Parser.T__68:
                case pdp7Parser.T__69:
                case pdp7Parser.T__70:
                case pdp7Parser.T__71:
                case pdp7Parser.T__72:
                case pdp7Parser.T__73:
                case pdp7Parser.T__74:
                case pdp7Parser.T__75:
                case pdp7Parser.T__76:
                case pdp7Parser.T__77:
                case pdp7Parser.T__78:
                case pdp7Parser.T__79:
                case pdp7Parser.T__80:
                case pdp7Parser.T__81:
                case pdp7Parser.T__82:
                case pdp7Parser.T__83:
                case pdp7Parser.T__84:
                case pdp7Parser.T__85:
                case pdp7Parser.T__86:
                case pdp7Parser.T__87:
                case pdp7Parser.T__88:
                case pdp7Parser.T__89:
                case pdp7Parser.T__90:
                case pdp7Parser.T__91:
                case pdp7Parser.T__92:
                case pdp7Parser.T__93:
                case pdp7Parser.LOC:
                case pdp7Parser.RELOC:
                case pdp7Parser.MINUS:
                case pdp7Parser.IDENTIFIER:
                case pdp7Parser.NUMERIC_LITERAL:
                case pdp7Parser.DECIMAL:
                case pdp7Parser.OCTAL:
                case pdp7Parser.DECIMAL_MINUS:
                case pdp7Parser.STRING:
                case pdp7Parser.CHAR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 78;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 77;
                                    this.declarationRight();
                                }
                            }
                            this.state = 80;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pdp7Parser.T__3) | (1 << pdp7Parser.T__4) | (1 << pdp7Parser.T__5) | (1 << pdp7Parser.T__6) | (1 << pdp7Parser.T__7) | (1 << pdp7Parser.T__8) | (1 << pdp7Parser.T__9) | (1 << pdp7Parser.T__10) | (1 << pdp7Parser.T__11) | (1 << pdp7Parser.T__12) | (1 << pdp7Parser.T__13) | (1 << pdp7Parser.T__14) | (1 << pdp7Parser.T__15) | (1 << pdp7Parser.T__16) | (1 << pdp7Parser.T__17) | (1 << pdp7Parser.T__18) | (1 << pdp7Parser.T__19) | (1 << pdp7Parser.T__20) | (1 << pdp7Parser.T__21) | (1 << pdp7Parser.T__22) | (1 << pdp7Parser.T__23) | (1 << pdp7Parser.T__24) | (1 << pdp7Parser.T__25) | (1 << pdp7Parser.T__26) | (1 << pdp7Parser.T__27) | (1 << pdp7Parser.T__28) | (1 << pdp7Parser.T__29) | (1 << pdp7Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (pdp7Parser.T__31 - 32)) | (1 << (pdp7Parser.T__32 - 32)) | (1 << (pdp7Parser.T__33 - 32)) | (1 << (pdp7Parser.T__34 - 32)) | (1 << (pdp7Parser.T__35 - 32)) | (1 << (pdp7Parser.T__36 - 32)) | (1 << (pdp7Parser.T__37 - 32)) | (1 << (pdp7Parser.T__38 - 32)) | (1 << (pdp7Parser.T__39 - 32)) | (1 << (pdp7Parser.T__40 - 32)) | (1 << (pdp7Parser.T__41 - 32)) | (1 << (pdp7Parser.T__42 - 32)) | (1 << (pdp7Parser.T__43 - 32)) | (1 << (pdp7Parser.T__44 - 32)) | (1 << (pdp7Parser.T__45 - 32)) | (1 << (pdp7Parser.T__46 - 32)) | (1 << (pdp7Parser.T__47 - 32)) | (1 << (pdp7Parser.T__48 - 32)) | (1 << (pdp7Parser.T__49 - 32)) | (1 << (pdp7Parser.T__50 - 32)) | (1 << (pdp7Parser.T__51 - 32)) | (1 << (pdp7Parser.T__52 - 32)) | (1 << (pdp7Parser.T__53 - 32)) | (1 << (pdp7Parser.T__54 - 32)) | (1 << (pdp7Parser.T__55 - 32)) | (1 << (pdp7Parser.T__56 - 32)) | (1 << (pdp7Parser.T__57 - 32)) | (1 << (pdp7Parser.T__58 - 32)) | (1 << (pdp7Parser.T__59 - 32)) | (1 << (pdp7Parser.T__60 - 32)) | (1 << (pdp7Parser.T__61 - 32)) | (1 << (pdp7Parser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (pdp7Parser.T__63 - 64)) | (1 << (pdp7Parser.T__64 - 64)) | (1 << (pdp7Parser.T__65 - 64)) | (1 << (pdp7Parser.T__66 - 64)) | (1 << (pdp7Parser.T__67 - 64)) | (1 << (pdp7Parser.T__68 - 64)) | (1 << (pdp7Parser.T__69 - 64)) | (1 << (pdp7Parser.T__70 - 64)) | (1 << (pdp7Parser.T__71 - 64)) | (1 << (pdp7Parser.T__72 - 64)) | (1 << (pdp7Parser.T__73 - 64)) | (1 << (pdp7Parser.T__74 - 64)) | (1 << (pdp7Parser.T__75 - 64)) | (1 << (pdp7Parser.T__76 - 64)) | (1 << (pdp7Parser.T__77 - 64)) | (1 << (pdp7Parser.T__78 - 64)) | (1 << (pdp7Parser.T__79 - 64)) | (1 << (pdp7Parser.T__80 - 64)) | (1 << (pdp7Parser.T__81 - 64)) | (1 << (pdp7Parser.T__82 - 64)) | (1 << (pdp7Parser.T__83 - 64)) | (1 << (pdp7Parser.T__84 - 64)) | (1 << (pdp7Parser.T__85 - 64)) | (1 << (pdp7Parser.T__86 - 64)) | (1 << (pdp7Parser.T__87 - 64)) | (1 << (pdp7Parser.T__88 - 64)) | (1 << (pdp7Parser.T__89 - 64)) | (1 << (pdp7Parser.T__90 - 64)) | (1 << (pdp7Parser.T__91 - 64)) | (1 << (pdp7Parser.T__92 - 64)) | (1 << (pdp7Parser.T__93 - 64)) | (1 << (pdp7Parser.LOC - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (pdp7Parser.RELOC - 96)) | (1 << (pdp7Parser.MINUS - 96)) | (1 << (pdp7Parser.IDENTIFIER - 96)) | (1 << (pdp7Parser.NUMERIC_LITERAL - 96)) | (1 << (pdp7Parser.DECIMAL - 96)) | (1 << (pdp7Parser.OCTAL - 96)) | (1 << (pdp7Parser.DECIMAL_MINUS - 96)) | (1 << (pdp7Parser.STRING - 96)) | (1 << (pdp7Parser.CHAR - 96)))) !== 0));
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
    pdp7Parser.prototype.declarationRight = function () {
        var _localctx = new DeclarationRightContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, pdp7Parser.RULE_declarationRight);
        try {
            this.state = 87;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 84;
                        this.instruction();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 85;
                        this.assignment();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 86;
                        this.expression();
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
    pdp7Parser.prototype.instruction = function () {
        var _localctx = new InstructionContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, pdp7Parser.RULE_instruction);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 89;
                this.opcode();
                this.state = 93;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 90;
                                this.argument();
                            }
                        }
                    }
                    this.state = 95;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
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
    pdp7Parser.prototype.argument = function () {
        var _localctx = new ArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, pdp7Parser.RULE_argument);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 96;
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
    pdp7Parser.prototype.assignment = function () {
        var _localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, pdp7Parser.RULE_assignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 98;
                this.symbol();
                this.state = 99;
                this.match(pdp7Parser.T__1);
                this.state = 100;
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
    pdp7Parser.prototype.symbol = function () {
        var _localctx = new SymbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, pdp7Parser.RULE_symbol);
        try {
            this.state = 106;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pdp7Parser.T__3:
                case pdp7Parser.T__4:
                case pdp7Parser.T__5:
                case pdp7Parser.T__6:
                case pdp7Parser.T__7:
                case pdp7Parser.T__8:
                case pdp7Parser.T__9:
                case pdp7Parser.T__10:
                case pdp7Parser.T__11:
                case pdp7Parser.T__12:
                case pdp7Parser.T__13:
                case pdp7Parser.T__14:
                case pdp7Parser.T__15:
                case pdp7Parser.T__16:
                case pdp7Parser.T__17:
                case pdp7Parser.T__18:
                case pdp7Parser.T__19:
                case pdp7Parser.T__20:
                case pdp7Parser.T__21:
                case pdp7Parser.T__22:
                case pdp7Parser.T__23:
                case pdp7Parser.T__24:
                case pdp7Parser.T__25:
                case pdp7Parser.T__26:
                case pdp7Parser.T__27:
                case pdp7Parser.T__28:
                case pdp7Parser.T__29:
                case pdp7Parser.T__30:
                case pdp7Parser.T__31:
                case pdp7Parser.T__32:
                case pdp7Parser.T__33:
                case pdp7Parser.T__34:
                case pdp7Parser.T__35:
                case pdp7Parser.T__36:
                case pdp7Parser.T__37:
                case pdp7Parser.T__38:
                case pdp7Parser.T__39:
                case pdp7Parser.T__40:
                case pdp7Parser.T__41:
                case pdp7Parser.T__42:
                case pdp7Parser.T__43:
                case pdp7Parser.T__44:
                case pdp7Parser.T__45:
                case pdp7Parser.T__46:
                case pdp7Parser.T__47:
                case pdp7Parser.T__48:
                case pdp7Parser.T__49:
                case pdp7Parser.T__50:
                case pdp7Parser.T__51:
                case pdp7Parser.T__52:
                case pdp7Parser.T__53:
                case pdp7Parser.T__54:
                case pdp7Parser.T__55:
                case pdp7Parser.T__56:
                case pdp7Parser.T__57:
                case pdp7Parser.T__58:
                case pdp7Parser.T__59:
                case pdp7Parser.T__60:
                case pdp7Parser.T__61:
                case pdp7Parser.T__62:
                case pdp7Parser.T__63:
                case pdp7Parser.T__64:
                case pdp7Parser.T__65:
                case pdp7Parser.T__66:
                case pdp7Parser.T__67:
                case pdp7Parser.T__68:
                case pdp7Parser.T__69:
                case pdp7Parser.T__70:
                case pdp7Parser.T__71:
                case pdp7Parser.T__72:
                case pdp7Parser.T__73:
                case pdp7Parser.T__74:
                case pdp7Parser.T__75:
                case pdp7Parser.T__76:
                case pdp7Parser.T__77:
                case pdp7Parser.T__78:
                case pdp7Parser.T__79:
                case pdp7Parser.T__80:
                case pdp7Parser.T__81:
                case pdp7Parser.T__82:
                case pdp7Parser.T__83:
                case pdp7Parser.T__84:
                case pdp7Parser.T__85:
                case pdp7Parser.T__86:
                case pdp7Parser.T__87:
                case pdp7Parser.T__88:
                case pdp7Parser.T__89:
                case pdp7Parser.T__90:
                case pdp7Parser.T__91:
                case pdp7Parser.T__92:
                case pdp7Parser.T__93:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 102;
                        this.opcode();
                    }
                    break;
                case pdp7Parser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 103;
                        this.variable();
                    }
                    break;
                case pdp7Parser.LOC:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 104;
                        this.match(pdp7Parser.LOC);
                    }
                    break;
                case pdp7Parser.RELOC:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 105;
                        this.match(pdp7Parser.RELOC);
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
    pdp7Parser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, pdp7Parser.RULE_expression);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 108;
                this.multiplyingExpression();
                this.state = 113;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 109;
                                _la = this._input.LA(1);
                                if (!(_la === pdp7Parser.PLUS || _la === pdp7Parser.MINUS)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                        this.matchedEOF = true;
                                    }
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 110;
                                this.multiplyingExpression();
                            }
                        }
                    }
                    this.state = 115;
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
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    pdp7Parser.prototype.multiplyingExpression = function () {
        var _localctx = new MultiplyingExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, pdp7Parser.RULE_multiplyingExpression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 116;
                this.atom();
                this.state = 121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === pdp7Parser.TIMES || _la === pdp7Parser.DIV) {
                    {
                        {
                            this.state = 117;
                            _la = this._input.LA(1);
                            if (!(_la === pdp7Parser.TIMES || _la === pdp7Parser.DIV)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 118;
                            this.atom();
                        }
                    }
                    this.state = 123;
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
    pdp7Parser.prototype.atom = function () {
        var _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, pdp7Parser.RULE_atom);
        try {
            this.state = 135;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case pdp7Parser.IDENTIFIER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 124;
                        this.variable();
                    }
                    break;
                case pdp7Parser.LOC:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 125;
                        this.match(pdp7Parser.LOC);
                    }
                    break;
                case pdp7Parser.CHAR:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 126;
                        this.match(pdp7Parser.CHAR);
                    }
                    break;
                case pdp7Parser.RELOC:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 127;
                        this.match(pdp7Parser.RELOC);
                    }
                    break;
                case pdp7Parser.STRING:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 128;
                        this.string();
                    }
                    break;
                case pdp7Parser.DECIMAL:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 129;
                        this.match(pdp7Parser.DECIMAL);
                    }
                    break;
                case pdp7Parser.DECIMAL_MINUS:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 130;
                        this.match(pdp7Parser.DECIMAL_MINUS);
                    }
                    break;
                case pdp7Parser.OCTAL:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 131;
                        this.match(pdp7Parser.OCTAL);
                    }
                    break;
                case pdp7Parser.NUMERIC_LITERAL:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 132;
                        this.match(pdp7Parser.NUMERIC_LITERAL);
                    }
                    break;
                case pdp7Parser.MINUS:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 133;
                        this.match(pdp7Parser.MINUS);
                        this.state = 134;
                        this.atom();
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
    pdp7Parser.prototype.string = function () {
        var _localctx = new StringContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, pdp7Parser.RULE_string);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 137;
                this.match(pdp7Parser.STRING);
                this.state = 141;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 138;
                                this.match(pdp7Parser.NUMERIC_LITERAL);
                            }
                        }
                    }
                    this.state = 143;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                }
                this.state = 145;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === pdp7Parser.T__2) {
                    {
                        this.state = 144;
                        this.match(pdp7Parser.T__2);
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
    pdp7Parser.prototype.eol = function () {
        var _localctx = new EolContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, pdp7Parser.RULE_eol);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 147;
                this.match(pdp7Parser.EOL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    pdp7Parser.prototype.comment = function () {
        var _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, pdp7Parser.RULE_comment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 149;
                this.match(pdp7Parser.COMMENT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    pdp7Parser.prototype.label = function () {
        var _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, pdp7Parser.RULE_label);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 151;
                this.match(pdp7Parser.LABEL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    pdp7Parser.prototype.variable = function () {
        var _localctx = new VariableContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, pdp7Parser.RULE_variable);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 153;
                this.match(pdp7Parser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    pdp7Parser.prototype.opcode = function () {
        var _localctx = new OpcodeContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, pdp7Parser.RULE_opcode);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 155;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pdp7Parser.T__3) | (1 << pdp7Parser.T__4) | (1 << pdp7Parser.T__5) | (1 << pdp7Parser.T__6) | (1 << pdp7Parser.T__7) | (1 << pdp7Parser.T__8) | (1 << pdp7Parser.T__9) | (1 << pdp7Parser.T__10) | (1 << pdp7Parser.T__11) | (1 << pdp7Parser.T__12) | (1 << pdp7Parser.T__13) | (1 << pdp7Parser.T__14) | (1 << pdp7Parser.T__15) | (1 << pdp7Parser.T__16) | (1 << pdp7Parser.T__17) | (1 << pdp7Parser.T__18) | (1 << pdp7Parser.T__19) | (1 << pdp7Parser.T__20) | (1 << pdp7Parser.T__21) | (1 << pdp7Parser.T__22) | (1 << pdp7Parser.T__23) | (1 << pdp7Parser.T__24) | (1 << pdp7Parser.T__25) | (1 << pdp7Parser.T__26) | (1 << pdp7Parser.T__27) | (1 << pdp7Parser.T__28) | (1 << pdp7Parser.T__29) | (1 << pdp7Parser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (pdp7Parser.T__31 - 32)) | (1 << (pdp7Parser.T__32 - 32)) | (1 << (pdp7Parser.T__33 - 32)) | (1 << (pdp7Parser.T__34 - 32)) | (1 << (pdp7Parser.T__35 - 32)) | (1 << (pdp7Parser.T__36 - 32)) | (1 << (pdp7Parser.T__37 - 32)) | (1 << (pdp7Parser.T__38 - 32)) | (1 << (pdp7Parser.T__39 - 32)) | (1 << (pdp7Parser.T__40 - 32)) | (1 << (pdp7Parser.T__41 - 32)) | (1 << (pdp7Parser.T__42 - 32)) | (1 << (pdp7Parser.T__43 - 32)) | (1 << (pdp7Parser.T__44 - 32)) | (1 << (pdp7Parser.T__45 - 32)) | (1 << (pdp7Parser.T__46 - 32)) | (1 << (pdp7Parser.T__47 - 32)) | (1 << (pdp7Parser.T__48 - 32)) | (1 << (pdp7Parser.T__49 - 32)) | (1 << (pdp7Parser.T__50 - 32)) | (1 << (pdp7Parser.T__51 - 32)) | (1 << (pdp7Parser.T__52 - 32)) | (1 << (pdp7Parser.T__53 - 32)) | (1 << (pdp7Parser.T__54 - 32)) | (1 << (pdp7Parser.T__55 - 32)) | (1 << (pdp7Parser.T__56 - 32)) | (1 << (pdp7Parser.T__57 - 32)) | (1 << (pdp7Parser.T__58 - 32)) | (1 << (pdp7Parser.T__59 - 32)) | (1 << (pdp7Parser.T__60 - 32)) | (1 << (pdp7Parser.T__61 - 32)) | (1 << (pdp7Parser.T__62 - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (pdp7Parser.T__63 - 64)) | (1 << (pdp7Parser.T__64 - 64)) | (1 << (pdp7Parser.T__65 - 64)) | (1 << (pdp7Parser.T__66 - 64)) | (1 << (pdp7Parser.T__67 - 64)) | (1 << (pdp7Parser.T__68 - 64)) | (1 << (pdp7Parser.T__69 - 64)) | (1 << (pdp7Parser.T__70 - 64)) | (1 << (pdp7Parser.T__71 - 64)) | (1 << (pdp7Parser.T__72 - 64)) | (1 << (pdp7Parser.T__73 - 64)) | (1 << (pdp7Parser.T__74 - 64)) | (1 << (pdp7Parser.T__75 - 64)) | (1 << (pdp7Parser.T__76 - 64)) | (1 << (pdp7Parser.T__77 - 64)) | (1 << (pdp7Parser.T__78 - 64)) | (1 << (pdp7Parser.T__79 - 64)) | (1 << (pdp7Parser.T__80 - 64)) | (1 << (pdp7Parser.T__81 - 64)) | (1 << (pdp7Parser.T__82 - 64)) | (1 << (pdp7Parser.T__83 - 64)) | (1 << (pdp7Parser.T__84 - 64)) | (1 << (pdp7Parser.T__85 - 64)) | (1 << (pdp7Parser.T__86 - 64)) | (1 << (pdp7Parser.T__87 - 64)) | (1 << (pdp7Parser.T__88 - 64)) | (1 << (pdp7Parser.T__89 - 64)) | (1 << (pdp7Parser.T__90 - 64)) | (1 << (pdp7Parser.T__91 - 64)) | (1 << (pdp7Parser.T__92 - 64)) | (1 << (pdp7Parser.T__93 - 64)))) !== 0))) {
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
    Object.defineProperty(pdp7Parser, "_ATN", {
        get: function () {
            if (!pdp7Parser.__ATN) {
                pdp7Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(pdp7Parser._serializedATN));
            }
            return pdp7Parser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    pdp7Parser.T__0 = 1;
    pdp7Parser.T__1 = 2;
    pdp7Parser.T__2 = 3;
    pdp7Parser.T__3 = 4;
    pdp7Parser.T__4 = 5;
    pdp7Parser.T__5 = 6;
    pdp7Parser.T__6 = 7;
    pdp7Parser.T__7 = 8;
    pdp7Parser.T__8 = 9;
    pdp7Parser.T__9 = 10;
    pdp7Parser.T__10 = 11;
    pdp7Parser.T__11 = 12;
    pdp7Parser.T__12 = 13;
    pdp7Parser.T__13 = 14;
    pdp7Parser.T__14 = 15;
    pdp7Parser.T__15 = 16;
    pdp7Parser.T__16 = 17;
    pdp7Parser.T__17 = 18;
    pdp7Parser.T__18 = 19;
    pdp7Parser.T__19 = 20;
    pdp7Parser.T__20 = 21;
    pdp7Parser.T__21 = 22;
    pdp7Parser.T__22 = 23;
    pdp7Parser.T__23 = 24;
    pdp7Parser.T__24 = 25;
    pdp7Parser.T__25 = 26;
    pdp7Parser.T__26 = 27;
    pdp7Parser.T__27 = 28;
    pdp7Parser.T__28 = 29;
    pdp7Parser.T__29 = 30;
    pdp7Parser.T__30 = 31;
    pdp7Parser.T__31 = 32;
    pdp7Parser.T__32 = 33;
    pdp7Parser.T__33 = 34;
    pdp7Parser.T__34 = 35;
    pdp7Parser.T__35 = 36;
    pdp7Parser.T__36 = 37;
    pdp7Parser.T__37 = 38;
    pdp7Parser.T__38 = 39;
    pdp7Parser.T__39 = 40;
    pdp7Parser.T__40 = 41;
    pdp7Parser.T__41 = 42;
    pdp7Parser.T__42 = 43;
    pdp7Parser.T__43 = 44;
    pdp7Parser.T__44 = 45;
    pdp7Parser.T__45 = 46;
    pdp7Parser.T__46 = 47;
    pdp7Parser.T__47 = 48;
    pdp7Parser.T__48 = 49;
    pdp7Parser.T__49 = 50;
    pdp7Parser.T__50 = 51;
    pdp7Parser.T__51 = 52;
    pdp7Parser.T__52 = 53;
    pdp7Parser.T__53 = 54;
    pdp7Parser.T__54 = 55;
    pdp7Parser.T__55 = 56;
    pdp7Parser.T__56 = 57;
    pdp7Parser.T__57 = 58;
    pdp7Parser.T__58 = 59;
    pdp7Parser.T__59 = 60;
    pdp7Parser.T__60 = 61;
    pdp7Parser.T__61 = 62;
    pdp7Parser.T__62 = 63;
    pdp7Parser.T__63 = 64;
    pdp7Parser.T__64 = 65;
    pdp7Parser.T__65 = 66;
    pdp7Parser.T__66 = 67;
    pdp7Parser.T__67 = 68;
    pdp7Parser.T__68 = 69;
    pdp7Parser.T__69 = 70;
    pdp7Parser.T__70 = 71;
    pdp7Parser.T__71 = 72;
    pdp7Parser.T__72 = 73;
    pdp7Parser.T__73 = 74;
    pdp7Parser.T__74 = 75;
    pdp7Parser.T__75 = 76;
    pdp7Parser.T__76 = 77;
    pdp7Parser.T__77 = 78;
    pdp7Parser.T__78 = 79;
    pdp7Parser.T__79 = 80;
    pdp7Parser.T__80 = 81;
    pdp7Parser.T__81 = 82;
    pdp7Parser.T__82 = 83;
    pdp7Parser.T__83 = 84;
    pdp7Parser.T__84 = 85;
    pdp7Parser.T__85 = 86;
    pdp7Parser.T__86 = 87;
    pdp7Parser.T__87 = 88;
    pdp7Parser.T__88 = 89;
    pdp7Parser.T__89 = 90;
    pdp7Parser.T__90 = 91;
    pdp7Parser.T__91 = 92;
    pdp7Parser.T__92 = 93;
    pdp7Parser.T__93 = 94;
    pdp7Parser.LOC = 95;
    pdp7Parser.RELOC = 96;
    pdp7Parser.PLUS = 97;
    pdp7Parser.MINUS = 98;
    pdp7Parser.TIMES = 99;
    pdp7Parser.DIV = 100;
    pdp7Parser.LABEL = 101;
    pdp7Parser.IDENTIFIER = 102;
    pdp7Parser.NUMERIC_LITERAL = 103;
    pdp7Parser.DECIMAL = 104;
    pdp7Parser.OCTAL = 105;
    pdp7Parser.DECIMAL_MINUS = 106;
    pdp7Parser.STRING = 107;
    pdp7Parser.CHAR = 108;
    pdp7Parser.COMMENT = 109;
    pdp7Parser.EOL = 110;
    pdp7Parser.WS = 111;
    pdp7Parser.RULE_prog = 0;
    pdp7Parser.RULE_line = 1;
    pdp7Parser.RULE_declarations = 2;
    pdp7Parser.RULE_declaration = 3;
    pdp7Parser.RULE_declarationRight = 4;
    pdp7Parser.RULE_instruction = 5;
    pdp7Parser.RULE_argument = 6;
    pdp7Parser.RULE_assignment = 7;
    pdp7Parser.RULE_symbol = 8;
    pdp7Parser.RULE_expression = 9;
    pdp7Parser.RULE_multiplyingExpression = 10;
    pdp7Parser.RULE_atom = 11;
    pdp7Parser.RULE_string = 12;
    pdp7Parser.RULE_eol = 13;
    pdp7Parser.RULE_comment = 14;
    pdp7Parser.RULE_label = 15;
    pdp7Parser.RULE_variable = 16;
    pdp7Parser.RULE_opcode = 17;
    // tslint:disable:no-trailing-whitespace
    pdp7Parser.ruleNames = [
        "prog", "line", "declarations", "declaration", "declarationRight", "instruction",
        "argument", "assignment", "symbol", "expression", "multiplyingExpression",
        "atom", "string", "eol", "comment", "label", "variable", "opcode",
    ];
    pdp7Parser._LITERAL_NAMES = [
        undefined, "';'", "'='", "'>'", "'dac'", "'jms'", "'dzm'", "'lac'", "'xor'",
        "'add'", "'tad'", "'xct'", "'isz'", "'and'", "'sad'", "'jmp'", "'nop'",
        "'law'", "'cma'", "'las'", "'ral'", "'rar'", "'hlt'", "'sma'", "'sza'",
        "'snl'", "'skp'", "'sna'", "'szl'", "'rtl'", "'rtr'", "'cil'", "'rcl'",
        "'rcr'", "'cia'", "'lrs'", "'lrss'", "'lls'", "'llss'", "'als'", "'alss'",
        "'mul'", "'idiv'", "'lacq'", "'clq'", "'omq'", "'cmq'", "'lmq'", "'dscs'",
        "'dslw'", "'dslm'", "'dsld'", "'dsls'", "'dssf'", "'dsrs'", "'iof'", "'ion'",
        "'caf'", "'clon'", "'clsf'", "'clof'", "'ksf'", "'krb'", "'tsf'", "'tcf'",
        "'tls'", "'sck'", "'cck'", "'lck'", "'rsf'", "'rsa'", "'rrb'", "'psf'",
        "'pcf'", "'psa'", "'cdf'", "'rlpd'", "'lda'", "'wcga'", "'raef'", "'beg'",
        "'spb'", "'cpb'", "'lpb'", "'wbl'", "'dprs'", "'dpsf'", "'dpcf'", "'dprc'",
        "'crsf'", "'crrb'", "'sys'", "'czm'", "'irss'", "'dsm'", "'.'", "'..'",
        "'+'", "'-'", "'*'", "'/'",
    ];
    pdp7Parser._SYMBOLIC_NAMES = [
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
        undefined, undefined, undefined, undefined, "LOC", "RELOC", "PLUS", "MINUS",
        "TIMES", "DIV", "LABEL", "IDENTIFIER", "NUMERIC_LITERAL", "DECIMAL", "OCTAL",
        "DECIMAL_MINUS", "STRING", "CHAR", "COMMENT", "EOL", "WS",
    ];
    pdp7Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(pdp7Parser._LITERAL_NAMES, pdp7Parser._SYMBOLIC_NAMES, []);
    pdp7Parser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03q\xA0\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x03\x02\x05\x02(\n\x02\x03\x02\x06\x02+\n\x02\r\x02\x0E\x02" +
        ",\x03\x02\x05\x020\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x036\n\x03" +
        "\x03\x03\x05\x039\n\x03\x03\x04\x03\x04\x03\x04\x05\x04>\n\x04\x07\x04" +
        "@\n\x04\f\x04\x0E\x04C\v\x04\x03\x05\x06\x05F\n\x05\r\x05\x0E\x05G\x03" +
        "\x05\x07\x05K\n\x05\f\x05\x0E\x05N\v\x05\x03\x05\x06\x05Q\n\x05\r\x05" +
        "\x0E\x05R\x05\x05U\n\x05\x03\x06\x03\x06\x03\x06\x05\x06Z\n\x06\x03\x07" +
        "\x03\x07\x07\x07^\n\x07\f\x07\x0E\x07a\v\x07\x03\b\x03\b\x03\t\x03\t\x03" +
        "\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05\nm\n\n\x03\v\x03\v\x03\v\x07\vr\n" +
        "\v\f\v\x0E\vu\v\v\x03\f\x03\f\x03\f\x07\fz\n\f\f\f\x0E\f}\v\f\x03\r\x03" +
        "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\x8A\n\r" +
        "\x03\x0E\x03\x0E\x07\x0E\x8E\n\x0E\f\x0E\x0E\x0E\x91\v\x0E\x03\x0E\x05" +
        "\x0E\x94\n\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12" +
        "\x03\x12\x03\x13\x03\x13\x03\x13\x02\x02\x02\x14\x02\x02\x04\x02\x06\x02" +
        "\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
        "\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02\x02\x05\x03\x02cd\x03\x02ef\x03\x02" +
        "\x06`\x02\xAB\x02*\x03\x02\x02\x02\x048\x03\x02\x02\x02\x06:\x03\x02\x02" +
        "\x02\bT\x03\x02\x02\x02\nY\x03\x02\x02\x02\f[\x03\x02\x02\x02\x0Eb\x03" +
        "\x02\x02\x02\x10d\x03\x02\x02\x02\x12l\x03\x02\x02\x02\x14n\x03\x02\x02" +
        "\x02\x16v\x03\x02\x02\x02\x18\x89\x03\x02\x02\x02\x1A\x8B\x03\x02\x02" +
        "\x02\x1C\x95\x03\x02\x02\x02\x1E\x97\x03\x02\x02\x02 \x99\x03\x02\x02" +
        "\x02\"\x9B\x03\x02\x02\x02$\x9D\x03\x02\x02\x02&(\x05\x04\x03\x02\'&\x03" +
        "\x02\x02\x02\'(\x03\x02\x02\x02()\x03\x02\x02\x02)+\x05\x1C\x0F\x02*\'" +
        "\x03\x02\x02\x02+,\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02" +
        "-/\x03\x02\x02\x02.0\x05\x04\x03\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x02" +
        "01\x03\x02\x02\x0212\x07\x02\x02\x032\x03\x03\x02\x02\x0235\x05\x06\x04" +
        "\x0246\x05\x1E\x10\x0254\x03\x02\x02\x0256\x03\x02\x02\x0269\x03\x02\x02" +
        "\x0279\x05\x1E\x10\x0283\x03\x02\x02\x0287\x03\x02\x02\x029\x05\x03\x02" +
        "\x02\x02:A\x05\b\x05\x02;=\x07\x03\x02\x02<>\x05\b\x05\x02=<\x03\x02\x02" +
        "\x02=>\x03\x02\x02\x02>@\x03\x02\x02\x02?;\x03\x02\x02\x02@C\x03\x02\x02" +
        "\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02B\x07\x03\x02\x02\x02CA\x03\x02" +
        "\x02\x02DF\x05 \x11\x02ED\x03\x02\x02\x02FG\x03\x02\x02\x02GE\x03\x02" +
        "\x02\x02GH\x03\x02\x02\x02HL\x03\x02\x02\x02IK\x05\n\x06\x02JI\x03\x02" +
        "\x02\x02KN\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02\x02\x02MU\x03\x02" +
        "\x02\x02NL\x03\x02\x02\x02OQ\x05\n\x06\x02PO\x03\x02\x02\x02QR\x03\x02" +
        "\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02SU\x03\x02\x02\x02TE\x03\x02" +
        "\x02\x02TP\x03\x02\x02\x02U\t\x03\x02\x02\x02VZ\x05\f\x07\x02WZ\x05\x10" +
        "\t\x02XZ\x05\x14\v\x02YV\x03\x02\x02\x02YW\x03\x02\x02\x02YX\x03\x02\x02" +
        "\x02Z\v\x03\x02\x02\x02[_\x05$\x13\x02\\^\x05\x0E\b\x02]\\\x03\x02\x02" +
        "\x02^a\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02\x02\x02`\r\x03\x02" +
        "\x02\x02a_\x03\x02\x02\x02bc\x05\x14\v\x02c\x0F\x03\x02\x02\x02de\x05" +
        "\x12\n\x02ef\x07\x04\x02\x02fg\x05\x14\v\x02g\x11\x03\x02\x02\x02hm\x05" +
        "$\x13\x02im\x05\"\x12\x02jm\x07a\x02\x02km\x07b\x02\x02lh\x03\x02\x02" +
        "\x02li\x03\x02\x02\x02lj\x03\x02\x02\x02lk\x03\x02\x02\x02m\x13\x03\x02" +
        "\x02\x02ns\x05\x16\f\x02op\t\x02\x02\x02pr\x05\x16\f\x02qo\x03\x02\x02" +
        "\x02ru\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02t\x15\x03\x02" +
        "\x02\x02us\x03\x02\x02\x02v{\x05\x18\r\x02wx\t\x03\x02\x02xz\x05\x18\r" +
        "\x02yw\x03\x02\x02\x02z}\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02" +
        "\x02|\x17\x03\x02\x02\x02}{\x03\x02\x02\x02~\x8A\x05\"\x12\x02\x7F\x8A" +
        "\x07a\x02\x02\x80\x8A\x07n\x02\x02\x81\x8A\x07b\x02\x02\x82\x8A\x05\x1A" +
        "\x0E\x02\x83\x8A\x07j\x02\x02\x84\x8A\x07l\x02\x02\x85\x8A\x07k\x02\x02" +
        "\x86\x8A\x07i\x02\x02\x87\x88\x07d\x02\x02\x88\x8A\x05\x18\r\x02\x89~" +
        "\x03\x02\x02\x02\x89\x7F\x03\x02\x02\x02\x89\x80\x03\x02\x02\x02\x89\x81" +
        "\x03\x02\x02\x02\x89\x82\x03\x02\x02\x02\x89\x83\x03\x02\x02\x02\x89\x84" +
        "\x03\x02\x02\x02\x89\x85\x03\x02\x02\x02\x89\x86\x03\x02\x02\x02\x89\x87" +
        "\x03\x02\x02\x02\x8A\x19\x03\x02\x02\x02\x8B\x8F\x07m\x02\x02\x8C\x8E" +
        "\x07i\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D" +
        "\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x93\x03\x02\x02\x02\x91\x8F" +
        "\x03\x02\x02\x02\x92\x94\x07\x05\x02\x02\x93\x92\x03\x02\x02\x02\x93\x94" +
        "\x03\x02\x02\x02\x94\x1B\x03\x02\x02\x02\x95\x96\x07p\x02\x02\x96\x1D" +
        "\x03\x02\x02\x02\x97\x98\x07o\x02\x02\x98\x1F\x03\x02\x02\x02\x99\x9A" +
        "\x07g\x02\x02\x9A!\x03\x02\x02\x02\x9B\x9C\x07h\x02\x02\x9C#\x03\x02\x02" +
        "\x02\x9D\x9E\t\x04\x02\x02\x9E%\x03\x02\x02\x02\x15\',/58=AGLRTY_ls{\x89" +
        "\x8F\x93";
    return pdp7Parser;
}(Parser_1.Parser));
exports.pdp7Parser = pdp7Parser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.EOF = function () { return this.getToken(pdp7Parser.EOF, 0); };
    ProgContext.prototype.eol = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EolContext);
        }
        else {
            return this.getRuleContext(i, EolContext);
        }
    };
    ProgContext.prototype.line = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LineContext);
        }
        else {
            return this.getRuleContext(i, LineContext);
        }
    };
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_prog; },
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
var LineContext = /** @class */ (function (_super) {
    __extends(LineContext, _super);
    function LineContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LineContext.prototype.declarations = function () {
        return this.tryGetRuleContext(0, DeclarationsContext);
    };
    LineContext.prototype.comment = function () {
        return this.tryGetRuleContext(0, CommentContext);
    };
    Object.defineProperty(LineContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_line; },
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
var DeclarationsContext = /** @class */ (function (_super) {
    __extends(DeclarationsContext, _super);
    function DeclarationsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationsContext.prototype.declaration = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationContext);
        }
        else {
            return this.getRuleContext(i, DeclarationContext);
        }
    };
    Object.defineProperty(DeclarationsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_declarations; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeclarationsContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclarations) {
            listener.enterDeclarations(this);
        }
    };
    // @Override
    DeclarationsContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclarations) {
            listener.exitDeclarations(this);
        }
    };
    // @Override
    DeclarationsContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclarations) {
            return visitor.visitDeclarations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclarationsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclarationsContext = DeclarationsContext;
var DeclarationContext = /** @class */ (function (_super) {
    __extends(DeclarationContext, _super);
    function DeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationContext.prototype.label = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LabelContext);
        }
        else {
            return this.getRuleContext(i, LabelContext);
        }
    };
    DeclarationContext.prototype.declarationRight = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationRightContext);
        }
        else {
            return this.getRuleContext(i, DeclarationRightContext);
        }
    };
    Object.defineProperty(DeclarationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_declaration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeclarationContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclaration) {
            listener.enterDeclaration(this);
        }
    };
    // @Override
    DeclarationContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclaration) {
            listener.exitDeclaration(this);
        }
    };
    // @Override
    DeclarationContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclaration) {
            return visitor.visitDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclarationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclarationContext = DeclarationContext;
var DeclarationRightContext = /** @class */ (function (_super) {
    __extends(DeclarationRightContext, _super);
    function DeclarationRightContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationRightContext.prototype.instruction = function () {
        return this.tryGetRuleContext(0, InstructionContext);
    };
    DeclarationRightContext.prototype.assignment = function () {
        return this.tryGetRuleContext(0, AssignmentContext);
    };
    DeclarationRightContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(DeclarationRightContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_declarationRight; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DeclarationRightContext.prototype.enterRule = function (listener) {
        if (listener.enterDeclarationRight) {
            listener.enterDeclarationRight(this);
        }
    };
    // @Override
    DeclarationRightContext.prototype.exitRule = function (listener) {
        if (listener.exitDeclarationRight) {
            listener.exitDeclarationRight(this);
        }
    };
    // @Override
    DeclarationRightContext.prototype.accept = function (visitor) {
        if (visitor.visitDeclarationRight) {
            return visitor.visitDeclarationRight(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DeclarationRightContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DeclarationRightContext = DeclarationRightContext;
var InstructionContext = /** @class */ (function (_super) {
    __extends(InstructionContext, _super);
    function InstructionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InstructionContext.prototype.opcode = function () {
        return this.getRuleContext(0, OpcodeContext);
    };
    InstructionContext.prototype.argument = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentContext);
        }
        else {
            return this.getRuleContext(i, ArgumentContext);
        }
    };
    Object.defineProperty(InstructionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_instruction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    InstructionContext.prototype.enterRule = function (listener) {
        if (listener.enterInstruction) {
            listener.enterInstruction(this);
        }
    };
    // @Override
    InstructionContext.prototype.exitRule = function (listener) {
        if (listener.exitInstruction) {
            listener.exitInstruction(this);
        }
    };
    // @Override
    InstructionContext.prototype.accept = function (visitor) {
        if (visitor.visitInstruction) {
            return visitor.visitInstruction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return InstructionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InstructionContext = InstructionContext;
var ArgumentContext = /** @class */ (function (_super) {
    __extends(ArgumentContext, _super);
    function ArgumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArgumentContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ArgumentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_argument; },
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
var AssignmentContext = /** @class */ (function (_super) {
    __extends(AssignmentContext, _super);
    function AssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentContext.prototype.symbol = function () {
        return this.getRuleContext(0, SymbolContext);
    };
    AssignmentContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(AssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_assignment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AssignmentContext.prototype.enterRule = function (listener) {
        if (listener.enterAssignment) {
            listener.enterAssignment(this);
        }
    };
    // @Override
    AssignmentContext.prototype.exitRule = function (listener) {
        if (listener.exitAssignment) {
            listener.exitAssignment(this);
        }
    };
    // @Override
    AssignmentContext.prototype.accept = function (visitor) {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AssignmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentContext = AssignmentContext;
var SymbolContext = /** @class */ (function (_super) {
    __extends(SymbolContext, _super);
    function SymbolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SymbolContext.prototype.opcode = function () {
        return this.tryGetRuleContext(0, OpcodeContext);
    };
    SymbolContext.prototype.variable = function () {
        return this.tryGetRuleContext(0, VariableContext);
    };
    SymbolContext.prototype.LOC = function () { return this.tryGetToken(pdp7Parser.LOC, 0); };
    SymbolContext.prototype.RELOC = function () { return this.tryGetToken(pdp7Parser.RELOC, 0); };
    Object.defineProperty(SymbolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_symbol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    SymbolContext.prototype.enterRule = function (listener) {
        if (listener.enterSymbol) {
            listener.enterSymbol(this);
        }
    };
    // @Override
    SymbolContext.prototype.exitRule = function (listener) {
        if (listener.exitSymbol) {
            listener.exitSymbol(this);
        }
    };
    // @Override
    SymbolContext.prototype.accept = function (visitor) {
        if (visitor.visitSymbol) {
            return visitor.visitSymbol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SymbolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SymbolContext = SymbolContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.multiplyingExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplyingExpressionContext);
        }
        else {
            return this.getRuleContext(i, MultiplyingExpressionContext);
        }
    };
    ExpressionContext.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(pdp7Parser.PLUS);
        }
        else {
            return this.getToken(pdp7Parser.PLUS, i);
        }
    };
    ExpressionContext.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(pdp7Parser.MINUS);
        }
        else {
            return this.getToken(pdp7Parser.MINUS, i);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_expression; },
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
var MultiplyingExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplyingExpressionContext, _super);
    function MultiplyingExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplyingExpressionContext.prototype.atom = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AtomContext);
        }
        else {
            return this.getRuleContext(i, AtomContext);
        }
    };
    MultiplyingExpressionContext.prototype.TIMES = function (i) {
        if (i === undefined) {
            return this.getTokens(pdp7Parser.TIMES);
        }
        else {
            return this.getToken(pdp7Parser.TIMES, i);
        }
    };
    MultiplyingExpressionContext.prototype.DIV = function (i) {
        if (i === undefined) {
            return this.getTokens(pdp7Parser.DIV);
        }
        else {
            return this.getToken(pdp7Parser.DIV, i);
        }
    };
    Object.defineProperty(MultiplyingExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_multiplyingExpression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiplyingExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplyingExpression) {
            listener.enterMultiplyingExpression(this);
        }
    };
    // @Override
    MultiplyingExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplyingExpression) {
            listener.exitMultiplyingExpression(this);
        }
    };
    // @Override
    MultiplyingExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplyingExpression) {
            return visitor.visitMultiplyingExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplyingExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiplyingExpressionContext = MultiplyingExpressionContext;
var AtomContext = /** @class */ (function (_super) {
    __extends(AtomContext, _super);
    function AtomContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AtomContext.prototype.variable = function () {
        return this.tryGetRuleContext(0, VariableContext);
    };
    AtomContext.prototype.LOC = function () { return this.tryGetToken(pdp7Parser.LOC, 0); };
    AtomContext.prototype.CHAR = function () { return this.tryGetToken(pdp7Parser.CHAR, 0); };
    AtomContext.prototype.RELOC = function () { return this.tryGetToken(pdp7Parser.RELOC, 0); };
    AtomContext.prototype.string = function () {
        return this.tryGetRuleContext(0, StringContext);
    };
    AtomContext.prototype.DECIMAL = function () { return this.tryGetToken(pdp7Parser.DECIMAL, 0); };
    AtomContext.prototype.DECIMAL_MINUS = function () { return this.tryGetToken(pdp7Parser.DECIMAL_MINUS, 0); };
    AtomContext.prototype.OCTAL = function () { return this.tryGetToken(pdp7Parser.OCTAL, 0); };
    AtomContext.prototype.NUMERIC_LITERAL = function () { return this.tryGetToken(pdp7Parser.NUMERIC_LITERAL, 0); };
    AtomContext.prototype.MINUS = function () { return this.tryGetToken(pdp7Parser.MINUS, 0); };
    AtomContext.prototype.atom = function () {
        return this.tryGetRuleContext(0, AtomContext);
    };
    Object.defineProperty(AtomContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_atom; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AtomContext.prototype.enterRule = function (listener) {
        if (listener.enterAtom) {
            listener.enterAtom(this);
        }
    };
    // @Override
    AtomContext.prototype.exitRule = function (listener) {
        if (listener.exitAtom) {
            listener.exitAtom(this);
        }
    };
    // @Override
    AtomContext.prototype.accept = function (visitor) {
        if (visitor.visitAtom) {
            return visitor.visitAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AtomContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AtomContext = AtomContext;
var StringContext = /** @class */ (function (_super) {
    __extends(StringContext, _super);
    function StringContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StringContext.prototype.STRING = function () { return this.getToken(pdp7Parser.STRING, 0); };
    StringContext.prototype.NUMERIC_LITERAL = function (i) {
        if (i === undefined) {
            return this.getTokens(pdp7Parser.NUMERIC_LITERAL);
        }
        else {
            return this.getToken(pdp7Parser.NUMERIC_LITERAL, i);
        }
    };
    Object.defineProperty(StringContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_string; },
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
var EolContext = /** @class */ (function (_super) {
    __extends(EolContext, _super);
    function EolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EolContext.prototype.EOL = function () { return this.getToken(pdp7Parser.EOL, 0); };
    Object.defineProperty(EolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_eol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    EolContext.prototype.enterRule = function (listener) {
        if (listener.enterEol) {
            listener.enterEol(this);
        }
    };
    // @Override
    EolContext.prototype.exitRule = function (listener) {
        if (listener.exitEol) {
            listener.exitEol(this);
        }
    };
    // @Override
    EolContext.prototype.accept = function (visitor) {
        if (visitor.visitEol) {
            return visitor.visitEol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.EolContext = EolContext;
var CommentContext = /** @class */ (function (_super) {
    __extends(CommentContext, _super);
    function CommentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CommentContext.prototype.COMMENT = function () { return this.getToken(pdp7Parser.COMMENT, 0); };
    Object.defineProperty(CommentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_comment; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CommentContext.prototype.enterRule = function (listener) {
        if (listener.enterComment) {
            listener.enterComment(this);
        }
    };
    // @Override
    CommentContext.prototype.exitRule = function (listener) {
        if (listener.exitComment) {
            listener.exitComment(this);
        }
    };
    // @Override
    CommentContext.prototype.accept = function (visitor) {
        if (visitor.visitComment) {
            return visitor.visitComment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CommentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CommentContext = CommentContext;
var LabelContext = /** @class */ (function (_super) {
    __extends(LabelContext, _super);
    function LabelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabelContext.prototype.LABEL = function () { return this.getToken(pdp7Parser.LABEL, 0); };
    Object.defineProperty(LabelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_label; },
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
var VariableContext = /** @class */ (function (_super) {
    __extends(VariableContext, _super);
    function VariableContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableContext.prototype.IDENTIFIER = function () { return this.getToken(pdp7Parser.IDENTIFIER, 0); };
    Object.defineProperty(VariableContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_variable; },
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
var OpcodeContext = /** @class */ (function (_super) {
    __extends(OpcodeContext, _super);
    function OpcodeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(OpcodeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return pdp7Parser.RULE_opcode; },
        enumerable: true,
        configurable: true
    });
    // @Override
    OpcodeContext.prototype.enterRule = function (listener) {
        if (listener.enterOpcode) {
            listener.enterOpcode(this);
        }
    };
    // @Override
    OpcodeContext.prototype.exitRule = function (listener) {
        if (listener.exitOpcode) {
            listener.exitOpcode(this);
        }
    };
    // @Override
    OpcodeContext.prototype.accept = function (visitor) {
        if (visitor.visitOpcode) {
            return visitor.visitOpcode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OpcodeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.OpcodeContext = OpcodeContext;
