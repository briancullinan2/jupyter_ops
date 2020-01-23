"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rexx/RexxParser.g4 by ANTLR 4.7.3-SNAPSHOT
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
var RexxParser = /** @class */ (function (_super) {
    __extends(RexxParser, _super);
    function RexxParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(RexxParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(RexxParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return RexxParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RexxParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "RexxParser.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RexxParser.prototype, "ruleNames", {
        // @Override
        get: function () { return RexxParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RexxParser.prototype, "serializedATN", {
        // @Override
        get: function () { return RexxParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    RexxParser.prototype.file = function () {
        var _localctx = new FileContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, RexxParser.RULE_file);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 192;
                this.program_();
                this.state = 193;
                this.match(RexxParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.program_ = function () {
        var _localctx = new Program_Context(this._ctx, this.state);
        this.enterRule(_localctx, 2, RexxParser.RULE_program_);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 196;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                    case 1:
                        {
                            this.state = 195;
                            this.ncl();
                        }
                        break;
                }
                this.state = 199;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RexxParser.KWD_ADDRESS) | (1 << RexxParser.KWD_ARG) | (1 << RexxParser.KWD_CALL) | (1 << RexxParser.KWD_DIGITS) | (1 << RexxParser.KWD_DO) | (1 << RexxParser.KWD_DROP) | (1 << RexxParser.KWD_EXIT) | (1 << RexxParser.KWD_FORM) | (1 << RexxParser.KWD_FUZZ) | (1 << RexxParser.KWD_IF) | (1 << RexxParser.KWD_INTERPRET) | (1 << RexxParser.KWD_ITERATE) | (1 << RexxParser.KWD_LEAVE) | (1 << RexxParser.KWD_NOP))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RexxParser.KWD_NUMERIC - 33)) | (1 << (RexxParser.KWD_OPTIONS - 33)) | (1 << (RexxParser.KWD_PARSE - 33)) | (1 << (RexxParser.KWD_PROCEDURE - 33)) | (1 << (RexxParser.KWD_PULL - 33)) | (1 << (RexxParser.KWD_PUSH - 33)) | (1 << (RexxParser.KWD_QUEUE - 33)) | (1 << (RexxParser.KWD_RETURN - 33)) | (1 << (RexxParser.KWD_SAY - 33)) | (1 << (RexxParser.KWD_SELECT - 33)) | (1 << (RexxParser.KWD_SIGNAL - 33)) | (1 << (RexxParser.KWD_TRACE - 33)) | (1 << (RexxParser.KWD_UPPER - 33)) | (1 << (RexxParser.KWD_VALUE - 33)) | (1 << (RexxParser.BR_O - 33)) | (1 << (RexxParser.SPECIAL_VAR - 33)) | (1 << (RexxParser.NUMBER - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (RexxParser.CONST_SYMBOL - 65)) | (1 << (RexxParser.VAR_SYMBOL - 65)) | (1 << (RexxParser.STRING - 65)) | (1 << (RexxParser.PLUS - 65)) | (1 << (RexxParser.MINUS - 65)) | (1 << (RexxParser.NOT - 65)))) !== 0)) {
                    {
                        this.state = 198;
                        this.instruction_list();
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
    RexxParser.prototype.ncl = function () {
        var _localctx = new NclContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, RexxParser.RULE_ncl);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 202;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 201;
                                    this.null_clause();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 204;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.null_clause = function () {
        var _localctx = new Null_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, RexxParser.RULE_null_clause);
        try {
            var _alt = void 0;
            this.state = 216;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.EOL:
                case RexxParser.SEMICOL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 207;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 206;
                                            this.delim();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 209;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 212;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                            case 1:
                                {
                                    this.state = 211;
                                    this.label_list();
                                }
                                break;
                        }
                    }
                    break;
                case RexxParser.NUMBER:
                case RexxParser.CONST_SYMBOL:
                case RexxParser.VAR_SYMBOL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 214;
                        this.label_list();
                    }
                    break;
                case RexxParser.STMT_INCLUDE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 215;
                        this.include_statement();
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
    RexxParser.prototype.delim = function () {
        var _localctx = new DelimContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, RexxParser.RULE_delim);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 218;
                _la = this._input.LA(1);
                if (!(_la === RexxParser.EOL || _la === RexxParser.SEMICOL)) {
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
    RexxParser.prototype.label_list = function () {
        var _localctx = new Label_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, RexxParser.RULE_label_list);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 228;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 220;
                                    this.label();
                                    this.state = 221;
                                    this.match(RexxParser.COLON);
                                    this.state = 225;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 222;
                                                    this.delim();
                                                }
                                            }
                                        }
                                        this.state = 227;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                                    }
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 230;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.label = function () {
        var _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, RexxParser.RULE_label);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 232;
                _la = this._input.LA(1);
                if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (RexxParser.NUMBER - 64)) | (1 << (RexxParser.CONST_SYMBOL - 64)) | (1 << (RexxParser.VAR_SYMBOL - 64)))) !== 0))) {
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
    RexxParser.prototype.include_statement = function () {
        var _localctx = new Include_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, RexxParser.RULE_include_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 234;
                this.match(RexxParser.STMT_INCLUDE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.instruction_list = function () {
        var _localctx = new Instruction_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, RexxParser.RULE_instruction_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 237;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 236;
                            this.instruction();
                        }
                    }
                    this.state = 239;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RexxParser.KWD_ADDRESS) | (1 << RexxParser.KWD_ARG) | (1 << RexxParser.KWD_CALL) | (1 << RexxParser.KWD_DIGITS) | (1 << RexxParser.KWD_DO) | (1 << RexxParser.KWD_DROP) | (1 << RexxParser.KWD_EXIT) | (1 << RexxParser.KWD_FORM) | (1 << RexxParser.KWD_FUZZ) | (1 << RexxParser.KWD_IF) | (1 << RexxParser.KWD_INTERPRET) | (1 << RexxParser.KWD_ITERATE) | (1 << RexxParser.KWD_LEAVE) | (1 << RexxParser.KWD_NOP))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RexxParser.KWD_NUMERIC - 33)) | (1 << (RexxParser.KWD_OPTIONS - 33)) | (1 << (RexxParser.KWD_PARSE - 33)) | (1 << (RexxParser.KWD_PROCEDURE - 33)) | (1 << (RexxParser.KWD_PULL - 33)) | (1 << (RexxParser.KWD_PUSH - 33)) | (1 << (RexxParser.KWD_QUEUE - 33)) | (1 << (RexxParser.KWD_RETURN - 33)) | (1 << (RexxParser.KWD_SAY - 33)) | (1 << (RexxParser.KWD_SELECT - 33)) | (1 << (RexxParser.KWD_SIGNAL - 33)) | (1 << (RexxParser.KWD_TRACE - 33)) | (1 << (RexxParser.KWD_UPPER - 33)) | (1 << (RexxParser.KWD_VALUE - 33)) | (1 << (RexxParser.BR_O - 33)) | (1 << (RexxParser.SPECIAL_VAR - 33)) | (1 << (RexxParser.NUMBER - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (RexxParser.CONST_SYMBOL - 65)) | (1 << (RexxParser.VAR_SYMBOL - 65)) | (1 << (RexxParser.STRING - 65)) | (1 << (RexxParser.PLUS - 65)) | (1 << (RexxParser.MINUS - 65)) | (1 << (RexxParser.NOT - 65)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.instruction = function () {
        var _localctx = new InstructionContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, RexxParser.RULE_instruction);
        try {
            this.state = 246;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.KWD_DO:
                case RexxParser.KWD_IF:
                case RexxParser.KWD_SELECT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 241;
                        this.group_();
                    }
                    break;
                case RexxParser.KWD_ADDRESS:
                case RexxParser.KWD_ARG:
                case RexxParser.KWD_CALL:
                case RexxParser.KWD_DIGITS:
                case RexxParser.KWD_DROP:
                case RexxParser.KWD_EXIT:
                case RexxParser.KWD_FORM:
                case RexxParser.KWD_FUZZ:
                case RexxParser.KWD_INTERPRET:
                case RexxParser.KWD_ITERATE:
                case RexxParser.KWD_LEAVE:
                case RexxParser.KWD_NOP:
                case RexxParser.KWD_NUMERIC:
                case RexxParser.KWD_OPTIONS:
                case RexxParser.KWD_PARSE:
                case RexxParser.KWD_PROCEDURE:
                case RexxParser.KWD_PULL:
                case RexxParser.KWD_PUSH:
                case RexxParser.KWD_QUEUE:
                case RexxParser.KWD_RETURN:
                case RexxParser.KWD_SAY:
                case RexxParser.KWD_SIGNAL:
                case RexxParser.KWD_TRACE:
                case RexxParser.KWD_UPPER:
                case RexxParser.KWD_VALUE:
                case RexxParser.BR_O:
                case RexxParser.SPECIAL_VAR:
                case RexxParser.NUMBER:
                case RexxParser.CONST_SYMBOL:
                case RexxParser.VAR_SYMBOL:
                case RexxParser.STRING:
                case RexxParser.PLUS:
                case RexxParser.MINUS:
                case RexxParser.NOT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 242;
                        this.single_instruction();
                        this.state = 244;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                            case 1:
                                {
                                    this.state = 243;
                                    this.ncl();
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
    RexxParser.prototype.single_instruction = function () {
        var _localctx = new Single_instructionContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, RexxParser.RULE_single_instruction);
        try {
            this.state = 251;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 248;
                        this.assignment();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 249;
                        this.keyword_instruction();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 250;
                        this.command_();
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
    RexxParser.prototype.assignment = function () {
        var _localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, RexxParser.RULE_assignment);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 253;
                _la = this._input.LA(1);
                if (!(((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (RexxParser.SPECIAL_VAR - 63)) | (1 << (RexxParser.CONST_SYMBOL - 63)) | (1 << (RexxParser.VAR_SYMBOL - 63)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 254;
                this.match(RexxParser.EQ);
                this.state = 255;
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
    RexxParser.prototype.keyword_instruction = function () {
        var _localctx = new Keyword_instructionContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, RexxParser.RULE_keyword_instruction);
        try {
            this.state = 278;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.KWD_ADDRESS:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 257;
                        this.address_();
                    }
                    break;
                case RexxParser.KWD_ARG:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 258;
                        this.arg_();
                    }
                    break;
                case RexxParser.KWD_CALL:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 259;
                        this.call_();
                    }
                    break;
                case RexxParser.KWD_DROP:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 260;
                        this.drop_();
                    }
                    break;
                case RexxParser.KWD_EXIT:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 261;
                        this.exit_();
                    }
                    break;
                case RexxParser.KWD_INTERPRET:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 262;
                        this.interpret_();
                    }
                    break;
                case RexxParser.KWD_ITERATE:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 263;
                        this.iterate_();
                    }
                    break;
                case RexxParser.KWD_LEAVE:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 264;
                        this.leave_();
                    }
                    break;
                case RexxParser.KWD_NOP:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 265;
                        this.nop_();
                    }
                    break;
                case RexxParser.KWD_NUMERIC:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 266;
                        this.numeric_();
                    }
                    break;
                case RexxParser.KWD_OPTIONS:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 267;
                        this.options_();
                    }
                    break;
                case RexxParser.KWD_PARSE:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 268;
                        this.parse_();
                    }
                    break;
                case RexxParser.KWD_PROCEDURE:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 269;
                        this.procedure_();
                    }
                    break;
                case RexxParser.KWD_PULL:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 270;
                        this.pull_();
                    }
                    break;
                case RexxParser.KWD_PUSH:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 271;
                        this.push_();
                    }
                    break;
                case RexxParser.KWD_QUEUE:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 272;
                        this.queue_();
                    }
                    break;
                case RexxParser.KWD_RETURN:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 273;
                        this.return_();
                    }
                    break;
                case RexxParser.KWD_SAY:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 274;
                        this.say_();
                    }
                    break;
                case RexxParser.KWD_SIGNAL:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 275;
                        this.signal_();
                    }
                    break;
                case RexxParser.KWD_TRACE:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 276;
                        this.trace_();
                    }
                    break;
                case RexxParser.KWD_UPPER:
                    this.enterOuterAlt(_localctx, 21);
                    {
                        this.state = 277;
                        this.upper_();
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
    RexxParser.prototype.command_ = function () {
        var _localctx = new Command_Context(this._ctx, this.state);
        this.enterRule(_localctx, 26, RexxParser.RULE_command_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 280;
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
    RexxParser.prototype.group_ = function () {
        var _localctx = new Group_Context(this._ctx, this.state);
        this.enterRule(_localctx, 28, RexxParser.RULE_group_);
        try {
            this.state = 285;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.KWD_DO:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 282;
                        this.do_();
                    }
                    break;
                case RexxParser.KWD_IF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 283;
                        this.if_();
                    }
                    break;
                case RexxParser.KWD_SELECT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 284;
                        this.select_();
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
    RexxParser.prototype.do_ = function () {
        var _localctx = new Do_Context(this._ctx, this.state);
        this.enterRule(_localctx, 30, RexxParser.RULE_do_);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 287;
                this.match(RexxParser.KWD_DO);
                this.state = 289;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                    case 1:
                        {
                            this.state = 288;
                            this.do_rep();
                        }
                        break;
                }
                this.state = 292;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === RexxParser.KWD_UNTIL || _la === RexxParser.KWD_WHILE) {
                    {
                        this.state = 291;
                        this.do_cond();
                    }
                }
                this.state = 294;
                this.ncl();
                this.state = 296;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RexxParser.KWD_ADDRESS) | (1 << RexxParser.KWD_ARG) | (1 << RexxParser.KWD_CALL) | (1 << RexxParser.KWD_DIGITS) | (1 << RexxParser.KWD_DO) | (1 << RexxParser.KWD_DROP) | (1 << RexxParser.KWD_EXIT) | (1 << RexxParser.KWD_FORM) | (1 << RexxParser.KWD_FUZZ) | (1 << RexxParser.KWD_IF) | (1 << RexxParser.KWD_INTERPRET) | (1 << RexxParser.KWD_ITERATE) | (1 << RexxParser.KWD_LEAVE) | (1 << RexxParser.KWD_NOP))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RexxParser.KWD_NUMERIC - 33)) | (1 << (RexxParser.KWD_OPTIONS - 33)) | (1 << (RexxParser.KWD_PARSE - 33)) | (1 << (RexxParser.KWD_PROCEDURE - 33)) | (1 << (RexxParser.KWD_PULL - 33)) | (1 << (RexxParser.KWD_PUSH - 33)) | (1 << (RexxParser.KWD_QUEUE - 33)) | (1 << (RexxParser.KWD_RETURN - 33)) | (1 << (RexxParser.KWD_SAY - 33)) | (1 << (RexxParser.KWD_SELECT - 33)) | (1 << (RexxParser.KWD_SIGNAL - 33)) | (1 << (RexxParser.KWD_TRACE - 33)) | (1 << (RexxParser.KWD_UPPER - 33)) | (1 << (RexxParser.KWD_VALUE - 33)) | (1 << (RexxParser.BR_O - 33)) | (1 << (RexxParser.SPECIAL_VAR - 33)) | (1 << (RexxParser.NUMBER - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (RexxParser.CONST_SYMBOL - 65)) | (1 << (RexxParser.VAR_SYMBOL - 65)) | (1 << (RexxParser.STRING - 65)) | (1 << (RexxParser.PLUS - 65)) | (1 << (RexxParser.MINUS - 65)) | (1 << (RexxParser.NOT - 65)))) !== 0)) {
                    {
                        this.state = 295;
                        this.instruction_list();
                    }
                }
                this.state = 298;
                this.match(RexxParser.KWD_END);
                this.state = 300;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                    case 1:
                        {
                            this.state = 299;
                            this.var_symbol();
                        }
                        break;
                }
                this.state = 303;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                    case 1:
                        {
                            this.state = 302;
                            this.ncl();
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
    RexxParser.prototype.do_rep = function () {
        var _localctx = new Do_repContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, RexxParser.RULE_do_rep);
        var _la;
        try {
            this.state = 311;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 305;
                        this.assignment();
                        this.state = 307;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RexxParser.KWD_BY || _la === RexxParser.KWD_FOR || _la === RexxParser.KWD_TO) {
                            {
                                this.state = 306;
                                this.do_cnt();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 309;
                        this.match(RexxParser.KWD_FOREVER);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 310;
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
    RexxParser.prototype.do_cnt = function () {
        var _localctx = new Do_cntContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, RexxParser.RULE_do_cnt);
        var _la;
        try {
            this.state = 355;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 313;
                        this.dot();
                        this.state = 315;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RexxParser.KWD_BY) {
                            {
                                this.state = 314;
                                this.dob();
                            }
                        }
                        this.state = 318;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RexxParser.KWD_FOR) {
                            {
                                this.state = 317;
                                this.dof();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 320;
                        this.dot();
                        this.state = 322;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RexxParser.KWD_FOR) {
                            {
                                this.state = 321;
                                this.dof();
                            }
                        }
                        this.state = 325;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RexxParser.KWD_BY) {
                            {
                                this.state = 324;
                                this.dob();
                            }
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 327;
                        this.dob();
                        this.state = 329;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RexxParser.KWD_TO) {
                            {
                                this.state = 328;
                                this.dot();
                            }
                        }
                        this.state = 332;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RexxParser.KWD_FOR) {
                            {
                                this.state = 331;
                                this.dof();
                            }
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 334;
                        this.dob();
                        this.state = 336;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RexxParser.KWD_FOR) {
                            {
                                this.state = 335;
                                this.dof();
                            }
                        }
                        this.state = 339;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RexxParser.KWD_TO) {
                            {
                                this.state = 338;
                                this.dot();
                            }
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 341;
                        this.dof();
                        this.state = 343;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RexxParser.KWD_TO) {
                            {
                                this.state = 342;
                                this.dot();
                            }
                        }
                        this.state = 346;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RexxParser.KWD_BY) {
                            {
                                this.state = 345;
                                this.dob();
                            }
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 348;
                        this.dof();
                        this.state = 350;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RexxParser.KWD_BY) {
                            {
                                this.state = 349;
                                this.dob();
                            }
                        }
                        this.state = 353;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RexxParser.KWD_TO) {
                            {
                                this.state = 352;
                                this.dot();
                            }
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
    RexxParser.prototype.dot = function () {
        var _localctx = new DotContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, RexxParser.RULE_dot);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 357;
                this.match(RexxParser.KWD_TO);
                this.state = 358;
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
    RexxParser.prototype.dob = function () {
        var _localctx = new DobContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, RexxParser.RULE_dob);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 360;
                this.match(RexxParser.KWD_BY);
                this.state = 361;
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
    RexxParser.prototype.dof = function () {
        var _localctx = new DofContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, RexxParser.RULE_dof);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 363;
                this.match(RexxParser.KWD_FOR);
                this.state = 364;
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
    RexxParser.prototype.do_cond = function () {
        var _localctx = new Do_condContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, RexxParser.RULE_do_cond);
        try {
            this.state = 370;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.KWD_WHILE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 366;
                        this.match(RexxParser.KWD_WHILE);
                        this.state = 367;
                        this.expression();
                    }
                    break;
                case RexxParser.KWD_UNTIL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 368;
                        this.match(RexxParser.KWD_UNTIL);
                        this.state = 369;
                        this.expression();
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
    RexxParser.prototype.if_ = function () {
        var _localctx = new If_Context(this._ctx, this.state);
        this.enterRule(_localctx, 44, RexxParser.RULE_if_);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 372;
                this.match(RexxParser.KWD_IF);
                this.state = 373;
                this.expression();
                this.state = 377;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RexxParser.EOL || _la === RexxParser.SEMICOL) {
                    {
                        {
                            this.state = 374;
                            this.delim();
                        }
                    }
                    this.state = 379;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 380;
                this.then_();
                this.state = 388;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 37, this._ctx)) {
                    case 1:
                        {
                            this.state = 382;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 381;
                                        this.delim();
                                    }
                                }
                                this.state = 384;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === RexxParser.EOL || _la === RexxParser.SEMICOL);
                            this.state = 386;
                            this.else_();
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
    RexxParser.prototype.then_ = function () {
        var _localctx = new Then_Context(this._ctx, this.state);
        this.enterRule(_localctx, 46, RexxParser.RULE_then_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 390;
                this.match(RexxParser.KWD_THEN);
                this.state = 392;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                    case 1:
                        {
                            this.state = 391;
                            this.ncl();
                        }
                        break;
                }
                this.state = 394;
                this.instruction();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.else_ = function () {
        var _localctx = new Else_Context(this._ctx, this.state);
        this.enterRule(_localctx, 48, RexxParser.RULE_else_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 396;
                this.match(RexxParser.KWD_ELSE);
                this.state = 398;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                    case 1:
                        {
                            this.state = 397;
                            this.ncl();
                        }
                        break;
                }
                this.state = 400;
                this.instruction();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.select_ = function () {
        var _localctx = new Select_Context(this._ctx, this.state);
        this.enterRule(_localctx, 50, RexxParser.RULE_select_);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 402;
                this.match(RexxParser.KWD_SELECT);
                this.state = 404;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 403;
                            this.delim();
                        }
                    }
                    this.state = 406;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === RexxParser.EOL || _la === RexxParser.SEMICOL);
                this.state = 408;
                this.select_body();
                this.state = 409;
                this.match(RexxParser.KWD_END);
                this.state = 411;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 41, this._ctx)) {
                    case 1:
                        {
                            this.state = 410;
                            this.ncl();
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
    RexxParser.prototype.select_body = function () {
        var _localctx = new Select_bodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, RexxParser.RULE_select_body);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 414;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 413;
                            this.when_();
                        }
                    }
                    this.state = 416;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === RexxParser.KWD_WHEN);
                this.state = 419;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === RexxParser.KWD_OTHERWISE) {
                    {
                        this.state = 418;
                        this.otherwise_();
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
    RexxParser.prototype.when_ = function () {
        var _localctx = new When_Context(this._ctx, this.state);
        this.enterRule(_localctx, 54, RexxParser.RULE_when_);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 421;
                this.match(RexxParser.KWD_WHEN);
                this.state = 422;
                this.expression();
                this.state = 426;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RexxParser.EOL || _la === RexxParser.SEMICOL) {
                    {
                        {
                            this.state = 423;
                            this.delim();
                        }
                    }
                    this.state = 428;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 429;
                this.then_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.otherwise_ = function () {
        var _localctx = new Otherwise_Context(this._ctx, this.state);
        this.enterRule(_localctx, 56, RexxParser.RULE_otherwise_);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 431;
                this.match(RexxParser.KWD_OTHERWISE);
                this.state = 435;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RexxParser.EOL || _la === RexxParser.SEMICOL) {
                    {
                        {
                            this.state = 432;
                            this.delim();
                        }
                    }
                    this.state = 437;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 439;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RexxParser.KWD_ADDRESS) | (1 << RexxParser.KWD_ARG) | (1 << RexxParser.KWD_CALL) | (1 << RexxParser.KWD_DIGITS) | (1 << RexxParser.KWD_DO) | (1 << RexxParser.KWD_DROP) | (1 << RexxParser.KWD_EXIT) | (1 << RexxParser.KWD_FORM) | (1 << RexxParser.KWD_FUZZ) | (1 << RexxParser.KWD_IF) | (1 << RexxParser.KWD_INTERPRET) | (1 << RexxParser.KWD_ITERATE) | (1 << RexxParser.KWD_LEAVE) | (1 << RexxParser.KWD_NOP))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RexxParser.KWD_NUMERIC - 33)) | (1 << (RexxParser.KWD_OPTIONS - 33)) | (1 << (RexxParser.KWD_PARSE - 33)) | (1 << (RexxParser.KWD_PROCEDURE - 33)) | (1 << (RexxParser.KWD_PULL - 33)) | (1 << (RexxParser.KWD_PUSH - 33)) | (1 << (RexxParser.KWD_QUEUE - 33)) | (1 << (RexxParser.KWD_RETURN - 33)) | (1 << (RexxParser.KWD_SAY - 33)) | (1 << (RexxParser.KWD_SELECT - 33)) | (1 << (RexxParser.KWD_SIGNAL - 33)) | (1 << (RexxParser.KWD_TRACE - 33)) | (1 << (RexxParser.KWD_UPPER - 33)) | (1 << (RexxParser.KWD_VALUE - 33)) | (1 << (RexxParser.BR_O - 33)) | (1 << (RexxParser.SPECIAL_VAR - 33)) | (1 << (RexxParser.NUMBER - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (RexxParser.CONST_SYMBOL - 65)) | (1 << (RexxParser.VAR_SYMBOL - 65)) | (1 << (RexxParser.STRING - 65)) | (1 << (RexxParser.PLUS - 65)) | (1 << (RexxParser.MINUS - 65)) | (1 << (RexxParser.NOT - 65)))) !== 0)) {
                    {
                        this.state = 438;
                        this.instruction_list();
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
    RexxParser.prototype.address_ = function () {
        var _localctx = new Address_Context(this._ctx, this.state);
        this.enterRule(_localctx, 58, RexxParser.RULE_address_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 441;
                this.match(RexxParser.KWD_ADDRESS);
                this.state = 447;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                    case 1:
                        {
                            this.state = 442;
                            this.taken_constant();
                            this.state = 444;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 443;
                                        this.expression();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 446;
                            this.valueexp();
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
    RexxParser.prototype.taken_constant = function () {
        var _localctx = new Taken_constantContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, RexxParser.RULE_taken_constant);
        try {
            this.state = 451;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.SPECIAL_VAR:
                case RexxParser.NUMBER:
                case RexxParser.CONST_SYMBOL:
                case RexxParser.VAR_SYMBOL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 449;
                        this.symbol();
                    }
                    break;
                case RexxParser.STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 450;
                        this.match(RexxParser.STRING);
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
    RexxParser.prototype.valueexp = function () {
        var _localctx = new ValueexpContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, RexxParser.RULE_valueexp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 453;
                this.match(RexxParser.KWD_VALUE);
                this.state = 454;
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
    RexxParser.prototype.arg_ = function () {
        var _localctx = new Arg_Context(this._ctx, this.state);
        this.enterRule(_localctx, 64, RexxParser.RULE_arg_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 456;
                this.match(RexxParser.KWD_ARG);
                this.state = 458;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                    case 1:
                        {
                            this.state = 457;
                            this.template_list();
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
    RexxParser.prototype.call_ = function () {
        var _localctx = new Call_Context(this._ctx, this.state);
        this.enterRule(_localctx, 66, RexxParser.RULE_call_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 460;
                this.match(RexxParser.KWD_CALL);
                this.state = 466;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case RexxParser.KWD_OFF:
                    case RexxParser.KWD_ON:
                        {
                            this.state = 461;
                            this.callon_spec();
                        }
                        break;
                    case RexxParser.KWD_ADDRESS:
                    case RexxParser.KWD_ARG:
                    case RexxParser.KWD_DIGITS:
                    case RexxParser.KWD_FORM:
                    case RexxParser.KWD_FUZZ:
                    case RexxParser.KWD_TRACE:
                    case RexxParser.KWD_VALUE:
                    case RexxParser.SPECIAL_VAR:
                    case RexxParser.NUMBER:
                    case RexxParser.CONST_SYMBOL:
                    case RexxParser.VAR_SYMBOL:
                    case RexxParser.STRING:
                        {
                            this.state = 462;
                            this.function_name();
                            this.state = 464;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 463;
                                        this.call_parms();
                                    }
                                    break;
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
    RexxParser.prototype.callon_spec = function () {
        var _localctx = new Callon_specContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, RexxParser.RULE_callon_spec);
        var _la;
        try {
            this.state = 476;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.KWD_ON:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 468;
                        this.match(RexxParser.KWD_ON);
                        this.state = 469;
                        this.callable_condition();
                        this.state = 472;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RexxParser.KWD_NAME) {
                            {
                                this.state = 470;
                                this.match(RexxParser.KWD_NAME);
                                this.state = 471;
                                this.function_name();
                            }
                        }
                    }
                    break;
                case RexxParser.KWD_OFF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 474;
                        this.match(RexxParser.KWD_OFF);
                        this.state = 475;
                        this.callable_condition();
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
    RexxParser.prototype.callable_condition = function () {
        var _localctx = new Callable_conditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, RexxParser.RULE_callable_condition);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 478;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RexxParser.KWD_ERROR) | (1 << RexxParser.KWD_FAILURE) | (1 << RexxParser.KWD_HALT))) !== 0))) {
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
    RexxParser.prototype.call_parms = function () {
        var _localctx = new Call_parmsContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, RexxParser.RULE_call_parms);
        var _la;
        try {
            this.state = 486;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 480;
                        this.match(RexxParser.BR_O);
                        this.state = 482;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RexxParser.KWD_ADDRESS) | (1 << RexxParser.KWD_ARG) | (1 << RexxParser.KWD_DIGITS) | (1 << RexxParser.KWD_FORM) | (1 << RexxParser.KWD_FUZZ))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (RexxParser.KWD_TRACE - 52)) | (1 << (RexxParser.KWD_VALUE - 52)) | (1 << (RexxParser.BR_O - 52)) | (1 << (RexxParser.SPECIAL_VAR - 52)) | (1 << (RexxParser.NUMBER - 52)) | (1 << (RexxParser.CONST_SYMBOL - 52)) | (1 << (RexxParser.VAR_SYMBOL - 52)) | (1 << (RexxParser.STRING - 52)) | (1 << (RexxParser.PLUS - 52)) | (1 << (RexxParser.MINUS - 52)) | (1 << (RexxParser.NOT - 52)))) !== 0) || _la === RexxParser.COMMA) {
                            {
                                this.state = 481;
                                this.expression_list();
                            }
                        }
                        this.state = 484;
                        this.match(RexxParser.BR_C);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 485;
                        this.expression_list();
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
    RexxParser.prototype.expression_list = function () {
        var _localctx = new Expression_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, RexxParser.RULE_expression_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 491;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RexxParser.COMMA) {
                    {
                        {
                            this.state = 488;
                            this.match(RexxParser.COMMA);
                        }
                    }
                    this.state = 493;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 494;
                this.expression();
                this.state = 503;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RexxParser.COMMA) {
                    {
                        {
                            this.state = 496;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 495;
                                        this.match(RexxParser.COMMA);
                                    }
                                }
                                this.state = 498;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === RexxParser.COMMA);
                            this.state = 500;
                            this.expression();
                        }
                    }
                    this.state = 505;
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
    RexxParser.prototype.drop_ = function () {
        var _localctx = new Drop_Context(this._ctx, this.state);
        this.enterRule(_localctx, 76, RexxParser.RULE_drop_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 506;
                this.match(RexxParser.KWD_DROP);
                this.state = 507;
                this.variable_list();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.variable_list = function () {
        var _localctx = new Variable_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, RexxParser.RULE_variable_list);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 511;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 511;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case RexxParser.BR_O:
                                        {
                                            this.state = 509;
                                            this.vref();
                                        }
                                        break;
                                    case RexxParser.SPECIAL_VAR:
                                    case RexxParser.VAR_SYMBOL:
                                        {
                                            this.state = 510;
                                            this.var_symbol();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 513;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.vref = function () {
        var _localctx = new VrefContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, RexxParser.RULE_vref);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 515;
                this.match(RexxParser.BR_O);
                this.state = 516;
                this.var_symbol();
                this.state = 517;
                this.match(RexxParser.BR_C);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.var_symbol = function () {
        var _localctx = new Var_symbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, RexxParser.RULE_var_symbol);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 519;
                _la = this._input.LA(1);
                if (!(_la === RexxParser.SPECIAL_VAR || _la === RexxParser.VAR_SYMBOL)) {
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
    RexxParser.prototype.exit_ = function () {
        var _localctx = new Exit_Context(this._ctx, this.state);
        this.enterRule(_localctx, 84, RexxParser.RULE_exit_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 521;
                this.match(RexxParser.KWD_EXIT);
                this.state = 523;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 62, this._ctx)) {
                    case 1:
                        {
                            this.state = 522;
                            this.expression();
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
    RexxParser.prototype.interpret_ = function () {
        var _localctx = new Interpret_Context(this._ctx, this.state);
        this.enterRule(_localctx, 86, RexxParser.RULE_interpret_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 525;
                this.match(RexxParser.KWD_INTERPRET);
                this.state = 526;
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
    RexxParser.prototype.iterate_ = function () {
        var _localctx = new Iterate_Context(this._ctx, this.state);
        this.enterRule(_localctx, 88, RexxParser.RULE_iterate_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 528;
                this.match(RexxParser.KWD_ITERATE);
                this.state = 530;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                    case 1:
                        {
                            this.state = 529;
                            this.var_symbol();
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
    RexxParser.prototype.leave_ = function () {
        var _localctx = new Leave_Context(this._ctx, this.state);
        this.enterRule(_localctx, 90, RexxParser.RULE_leave_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 532;
                this.match(RexxParser.KWD_LEAVE);
                this.state = 534;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 64, this._ctx)) {
                    case 1:
                        {
                            this.state = 533;
                            this.var_symbol();
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
    RexxParser.prototype.nop_ = function () {
        var _localctx = new Nop_Context(this._ctx, this.state);
        this.enterRule(_localctx, 92, RexxParser.RULE_nop_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 536;
                this.match(RexxParser.KWD_NOP);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.numeric_ = function () {
        var _localctx = new Numeric_Context(this._ctx, this.state);
        this.enterRule(_localctx, 94, RexxParser.RULE_numeric_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 538;
                this.match(RexxParser.KWD_NUMERIC);
                this.state = 542;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case RexxParser.KWD_DIGITS:
                        {
                            this.state = 539;
                            this.numeric_digits();
                        }
                        break;
                    case RexxParser.KWD_FORM:
                        {
                            this.state = 540;
                            this.numeric_form();
                        }
                        break;
                    case RexxParser.KWD_FUZZ:
                        {
                            this.state = 541;
                            this.numeric_fuzz();
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
    RexxParser.prototype.numeric_digits = function () {
        var _localctx = new Numeric_digitsContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, RexxParser.RULE_numeric_digits);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 544;
                this.match(RexxParser.KWD_DIGITS);
                this.state = 546;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 66, this._ctx)) {
                    case 1:
                        {
                            this.state = 545;
                            this.expression();
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
    RexxParser.prototype.numeric_form = function () {
        var _localctx = new Numeric_formContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, RexxParser.RULE_numeric_form);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 548;
                this.match(RexxParser.KWD_FORM);
                this.state = 553;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 67, this._ctx)) {
                    case 1:
                        {
                            this.state = 549;
                            this.match(RexxParser.KWD_ENGINEERING);
                        }
                        break;
                    case 2:
                        {
                            this.state = 550;
                            this.match(RexxParser.KWD_SCIENTIFIC);
                        }
                        break;
                    case 3:
                        {
                            this.state = 551;
                            this.valueexp();
                        }
                        break;
                    case 4:
                        {
                            this.state = 552;
                            this.expression();
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
    RexxParser.prototype.numeric_fuzz = function () {
        var _localctx = new Numeric_fuzzContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, RexxParser.RULE_numeric_fuzz);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 555;
                this.match(RexxParser.KWD_FUZZ);
                this.state = 557;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 68, this._ctx)) {
                    case 1:
                        {
                            this.state = 556;
                            this.expression();
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
    RexxParser.prototype.options_ = function () {
        var _localctx = new Options_Context(this._ctx, this.state);
        this.enterRule(_localctx, 102, RexxParser.RULE_options_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 559;
                this.match(RexxParser.KWD_OPTIONS);
                this.state = 560;
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
    RexxParser.prototype.parse_ = function () {
        var _localctx = new Parse_Context(this._ctx, this.state);
        this.enterRule(_localctx, 104, RexxParser.RULE_parse_);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 562;
                this.match(RexxParser.KWD_PARSE);
                this.state = 564;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === RexxParser.KWD_UPPER) {
                    {
                        this.state = 563;
                        this.match(RexxParser.KWD_UPPER);
                    }
                }
                this.state = 566;
                this.parse_type();
                this.state = 568;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
                    case 1:
                        {
                            this.state = 567;
                            this.template_list();
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
    RexxParser.prototype.parse_type = function () {
        var _localctx = new Parse_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, RexxParser.RULE_parse_type);
        try {
            this.state = 573;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.KWD_ARG:
                case RexxParser.KWD_EXTERNAL:
                case RexxParser.KWD_NUMERIC:
                case RexxParser.KWD_PULL:
                case RexxParser.KWD_SOURCE:
                case RexxParser.KWD_VERSION:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 570;
                        this.parse_key();
                    }
                    break;
                case RexxParser.KWD_VALUE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 571;
                        this.parse_value();
                    }
                    break;
                case RexxParser.KWD_VAR:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 572;
                        this.parse_var();
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
    RexxParser.prototype.parse_key = function () {
        var _localctx = new Parse_keyContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, RexxParser.RULE_parse_key);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 575;
                _la = this._input.LA(1);
                if (!(_la === RexxParser.KWD_ARG || _la === RexxParser.KWD_EXTERNAL || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (RexxParser.KWD_NUMERIC - 33)) | (1 << (RexxParser.KWD_PULL - 33)) | (1 << (RexxParser.KWD_SOURCE - 33)) | (1 << (RexxParser.KWD_VERSION - 33)))) !== 0))) {
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
    RexxParser.prototype.parse_value = function () {
        var _localctx = new Parse_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, RexxParser.RULE_parse_value);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 577;
                this.match(RexxParser.KWD_VALUE);
                this.state = 579;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RexxParser.KWD_ADDRESS) | (1 << RexxParser.KWD_ARG) | (1 << RexxParser.KWD_DIGITS) | (1 << RexxParser.KWD_FORM) | (1 << RexxParser.KWD_FUZZ))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (RexxParser.KWD_TRACE - 52)) | (1 << (RexxParser.KWD_VALUE - 52)) | (1 << (RexxParser.BR_O - 52)) | (1 << (RexxParser.SPECIAL_VAR - 52)) | (1 << (RexxParser.NUMBER - 52)) | (1 << (RexxParser.CONST_SYMBOL - 52)) | (1 << (RexxParser.VAR_SYMBOL - 52)) | (1 << (RexxParser.STRING - 52)) | (1 << (RexxParser.PLUS - 52)) | (1 << (RexxParser.MINUS - 52)) | (1 << (RexxParser.NOT - 52)))) !== 0)) {
                    {
                        this.state = 578;
                        this.expression();
                    }
                }
                this.state = 581;
                this.match(RexxParser.KWD_WITH);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.parse_var = function () {
        var _localctx = new Parse_varContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, RexxParser.RULE_parse_var);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 583;
                this.match(RexxParser.KWD_VAR);
                this.state = 584;
                this.var_symbol();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.procedure_ = function () {
        var _localctx = new Procedure_Context(this._ctx, this.state);
        this.enterRule(_localctx, 114, RexxParser.RULE_procedure_);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 586;
                this.match(RexxParser.KWD_PROCEDURE);
                this.state = 589;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === RexxParser.KWD_EXPOSE) {
                    {
                        this.state = 587;
                        this.match(RexxParser.KWD_EXPOSE);
                        this.state = 588;
                        this.variable_list();
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
    RexxParser.prototype.pull_ = function () {
        var _localctx = new Pull_Context(this._ctx, this.state);
        this.enterRule(_localctx, 116, RexxParser.RULE_pull_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 591;
                this.match(RexxParser.KWD_PULL);
                this.state = 593;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
                    case 1:
                        {
                            this.state = 592;
                            this.template_list();
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
    RexxParser.prototype.push_ = function () {
        var _localctx = new Push_Context(this._ctx, this.state);
        this.enterRule(_localctx, 118, RexxParser.RULE_push_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 595;
                this.match(RexxParser.KWD_PUSH);
                this.state = 597;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
                    case 1:
                        {
                            this.state = 596;
                            this.expression();
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
    RexxParser.prototype.queue_ = function () {
        var _localctx = new Queue_Context(this._ctx, this.state);
        this.enterRule(_localctx, 120, RexxParser.RULE_queue_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 599;
                this.match(RexxParser.KWD_QUEUE);
                this.state = 601;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 76, this._ctx)) {
                    case 1:
                        {
                            this.state = 600;
                            this.expression();
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
    RexxParser.prototype.return_ = function () {
        var _localctx = new Return_Context(this._ctx, this.state);
        this.enterRule(_localctx, 122, RexxParser.RULE_return_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 603;
                this.match(RexxParser.KWD_RETURN);
                this.state = 605;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 77, this._ctx)) {
                    case 1:
                        {
                            this.state = 604;
                            this.expression();
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
    RexxParser.prototype.say_ = function () {
        var _localctx = new Say_Context(this._ctx, this.state);
        this.enterRule(_localctx, 124, RexxParser.RULE_say_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 607;
                this.match(RexxParser.KWD_SAY);
                this.state = 609;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 78, this._ctx)) {
                    case 1:
                        {
                            this.state = 608;
                            this.expression();
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
    RexxParser.prototype.signal_ = function () {
        var _localctx = new Signal_Context(this._ctx, this.state);
        this.enterRule(_localctx, 126, RexxParser.RULE_signal_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 611;
                this.match(RexxParser.KWD_SIGNAL);
                this.state = 615;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case RexxParser.KWD_OFF:
                    case RexxParser.KWD_ON:
                        {
                            this.state = 612;
                            this.signal_spec();
                        }
                        break;
                    case RexxParser.KWD_VALUE:
                        {
                            this.state = 613;
                            this.valueexp();
                        }
                        break;
                    case RexxParser.SPECIAL_VAR:
                    case RexxParser.NUMBER:
                    case RexxParser.CONST_SYMBOL:
                    case RexxParser.VAR_SYMBOL:
                    case RexxParser.STRING:
                        {
                            this.state = 614;
                            this.taken_constant();
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
    RexxParser.prototype.signal_spec = function () {
        var _localctx = new Signal_specContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, RexxParser.RULE_signal_spec);
        var _la;
        try {
            this.state = 625;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.KWD_ON:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 617;
                        this.match(RexxParser.KWD_ON);
                        this.state = 618;
                        this.condition();
                        this.state = 621;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === RexxParser.KWD_NAME) {
                            {
                                this.state = 619;
                                this.match(RexxParser.KWD_NAME);
                                this.state = 620;
                                this.function_name();
                            }
                        }
                    }
                    break;
                case RexxParser.KWD_OFF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 623;
                        this.match(RexxParser.KWD_OFF);
                        this.state = 624;
                        this.condition();
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
    RexxParser.prototype.condition = function () {
        var _localctx = new ConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, RexxParser.RULE_condition);
        try {
            this.state = 630;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.KWD_ERROR:
                case RexxParser.KWD_FAILURE:
                case RexxParser.KWD_HALT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 627;
                        this.callable_condition();
                    }
                    break;
                case RexxParser.KWD_NOVALUE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 628;
                        this.match(RexxParser.KWD_NOVALUE);
                    }
                    break;
                case RexxParser.KWD_SYNTAX:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 629;
                        this.match(RexxParser.KWD_SYNTAX);
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
    RexxParser.prototype.trace_ = function () {
        var _localctx = new Trace_Context(this._ctx, this.state);
        this.enterRule(_localctx, 132, RexxParser.RULE_trace_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 632;
                this.match(RexxParser.KWD_TRACE);
                this.state = 639;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 83, this._ctx)) {
                    case 1:
                        {
                            this.state = 633;
                            this.taken_constant();
                        }
                        break;
                    case 2:
                        {
                            this.state = 634;
                            this.valueexp();
                        }
                        break;
                    case 3:
                        {
                            this.state = 635;
                            this.expression();
                        }
                        break;
                    case 4:
                        {
                            this.state = 636;
                            this.match(RexxParser.KWD_ERROR);
                        }
                        break;
                    case 5:
                        {
                            this.state = 637;
                            this.match(RexxParser.KWD_FAILURE);
                        }
                        break;
                    case 6:
                        {
                            this.state = 638;
                            this.match(RexxParser.KWD_OFF);
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
    RexxParser.prototype.upper_ = function () {
        var _localctx = new Upper_Context(this._ctx, this.state);
        this.enterRule(_localctx, 134, RexxParser.RULE_upper_);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 641;
                this.match(RexxParser.KWD_UPPER);
                this.state = 643;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 642;
                                    this.var_symbol();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 645;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.template_list = function () {
        var _localctx = new Template_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, RexxParser.RULE_template_list);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 650;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RexxParser.COMMA) {
                    {
                        {
                            this.state = 647;
                            this.match(RexxParser.COMMA);
                        }
                    }
                    this.state = 652;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 653;
                this.template_();
                this.state = 662;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RexxParser.COMMA) {
                    {
                        {
                            this.state = 655;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 654;
                                        this.match(RexxParser.COMMA);
                                    }
                                }
                                this.state = 657;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === RexxParser.COMMA);
                            this.state = 659;
                            this.template_();
                        }
                    }
                    this.state = 664;
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
    RexxParser.prototype.template_ = function () {
        var _localctx = new Template_Context(this._ctx, this.state);
        this.enterRule(_localctx, 138, RexxParser.RULE_template_);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 667;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 667;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case RexxParser.BR_O:
                                    case RexxParser.NUMBER:
                                    case RexxParser.STRING:
                                    case RexxParser.EQ:
                                    case RexxParser.PLUS:
                                    case RexxParser.MINUS:
                                        {
                                            this.state = 665;
                                            this.trigger_();
                                        }
                                        break;
                                    case RexxParser.SPECIAL_VAR:
                                    case RexxParser.VAR_SYMBOL:
                                    case RexxParser.STOP:
                                        {
                                            this.state = 666;
                                            this.target_();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 669;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.target_ = function () {
        var _localctx = new Target_Context(this._ctx, this.state);
        this.enterRule(_localctx, 140, RexxParser.RULE_target_);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 671;
                _la = this._input.LA(1);
                if (!(_la === RexxParser.SPECIAL_VAR || _la === RexxParser.VAR_SYMBOL || _la === RexxParser.STOP)) {
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
    RexxParser.prototype.trigger_ = function () {
        var _localctx = new Trigger_Context(this._ctx, this.state);
        this.enterRule(_localctx, 142, RexxParser.RULE_trigger_);
        try {
            this.state = 675;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.BR_O:
                case RexxParser.STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 673;
                        this.pattern_();
                    }
                    break;
                case RexxParser.NUMBER:
                case RexxParser.EQ:
                case RexxParser.PLUS:
                case RexxParser.MINUS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 674;
                        this.positional_();
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
    RexxParser.prototype.pattern_ = function () {
        var _localctx = new Pattern_Context(this._ctx, this.state);
        this.enterRule(_localctx, 144, RexxParser.RULE_pattern_);
        try {
            this.state = 679;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 677;
                        this.match(RexxParser.STRING);
                    }
                    break;
                case RexxParser.BR_O:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 678;
                        this.vref();
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
    RexxParser.prototype.positional_ = function () {
        var _localctx = new Positional_Context(this._ctx, this.state);
        this.enterRule(_localctx, 146, RexxParser.RULE_positional_);
        try {
            this.state = 683;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.NUMBER:
                case RexxParser.EQ:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 681;
                        this.absolute_positional();
                    }
                    break;
                case RexxParser.PLUS:
                case RexxParser.MINUS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 682;
                        this.relative_positional();
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
    RexxParser.prototype.absolute_positional = function () {
        var _localctx = new Absolute_positionalContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, RexxParser.RULE_absolute_positional);
        try {
            this.state = 688;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.NUMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 685;
                        this.match(RexxParser.NUMBER);
                    }
                    break;
                case RexxParser.EQ:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 686;
                        this.match(RexxParser.EQ);
                        this.state = 687;
                        this.position_();
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
    RexxParser.prototype.position_ = function () {
        var _localctx = new Position_Context(this._ctx, this.state);
        this.enterRule(_localctx, 150, RexxParser.RULE_position_);
        try {
            this.state = 692;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.NUMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 690;
                        this.match(RexxParser.NUMBER);
                    }
                    break;
                case RexxParser.BR_O:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 691;
                        this.vref();
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
    RexxParser.prototype.relative_positional = function () {
        var _localctx = new Relative_positionalContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, RexxParser.RULE_relative_positional);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 694;
                _la = this._input.LA(1);
                if (!(_la === RexxParser.PLUS || _la === RexxParser.MINUS)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 695;
                this.position_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.symbol = function () {
        var _localctx = new SymbolContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, RexxParser.RULE_symbol);
        try {
            this.state = 700;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.SPECIAL_VAR:
                case RexxParser.VAR_SYMBOL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 697;
                        this.var_symbol();
                    }
                    break;
                case RexxParser.CONST_SYMBOL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 698;
                        this.match(RexxParser.CONST_SYMBOL);
                    }
                    break;
                case RexxParser.NUMBER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 699;
                        this.match(RexxParser.NUMBER);
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
    RexxParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, RexxParser.RULE_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 702;
                this.and_expression();
                this.state = 708;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RexxParser.OR || _la === RexxParser.XOR) {
                    {
                        {
                            this.state = 703;
                            this.or_operator();
                            this.state = 704;
                            this.and_expression();
                        }
                    }
                    this.state = 710;
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
    RexxParser.prototype.or_operator = function () {
        var _localctx = new Or_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, RexxParser.RULE_or_operator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 711;
                _la = this._input.LA(1);
                if (!(_la === RexxParser.OR || _la === RexxParser.XOR)) {
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
    RexxParser.prototype.and_expression = function () {
        var _localctx = new And_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, RexxParser.RULE_and_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 713;
                this.comparison();
                this.state = 718;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RexxParser.AND) {
                    {
                        {
                            this.state = 714;
                            this.match(RexxParser.AND);
                            this.state = 715;
                            this.comparison();
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
    RexxParser.prototype.comparison = function () {
        var _localctx = new ComparisonContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, RexxParser.RULE_comparison);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 721;
                this.concatenation();
                this.state = 727;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RexxParser.EQ - 69)) | (1 << (RexxParser.CMPS_Eq - 69)) | (1 << (RexxParser.CMPS_Neq - 69)) | (1 << (RexxParser.CMPS_M - 69)) | (1 << (RexxParser.CMPS_L - 69)) | (1 << (RexxParser.CMPS_MEq - 69)) | (1 << (RexxParser.CMPS_LEq - 69)) | (1 << (RexxParser.CMPS_NM - 69)) | (1 << (RexxParser.CMPS_NL - 69)) | (1 << (RexxParser.CMP_NEq - 69)) | (1 << (RexxParser.CMP_LM - 69)) | (1 << (RexxParser.CMP_ML - 69)) | (1 << (RexxParser.CMP_M - 69)) | (1 << (RexxParser.CMP_L - 69)) | (1 << (RexxParser.CMP_MEq - 69)) | (1 << (RexxParser.CMP_LEq - 69)) | (1 << (RexxParser.CMP_NM - 69)) | (1 << (RexxParser.CMP_NL - 69)))) !== 0)) {
                    {
                        {
                            this.state = 722;
                            this.comparison_operator();
                            this.state = 723;
                            this.concatenation();
                        }
                    }
                    this.state = 729;
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
    RexxParser.prototype.comparison_operator = function () {
        var _localctx = new Comparison_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, RexxParser.RULE_comparison_operator);
        try {
            this.state = 732;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.EQ:
                case RexxParser.CMP_NEq:
                case RexxParser.CMP_LM:
                case RexxParser.CMP_ML:
                case RexxParser.CMP_M:
                case RexxParser.CMP_L:
                case RexxParser.CMP_MEq:
                case RexxParser.CMP_LEq:
                case RexxParser.CMP_NM:
                case RexxParser.CMP_NL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 730;
                        this.normal_compare();
                    }
                    break;
                case RexxParser.CMPS_Eq:
                case RexxParser.CMPS_Neq:
                case RexxParser.CMPS_M:
                case RexxParser.CMPS_L:
                case RexxParser.CMPS_MEq:
                case RexxParser.CMPS_LEq:
                case RexxParser.CMPS_NM:
                case RexxParser.CMPS_NL:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 731;
                        this.strict_compare();
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
    RexxParser.prototype.normal_compare = function () {
        var _localctx = new Normal_compareContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, RexxParser.RULE_normal_compare);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 734;
                _la = this._input.LA(1);
                if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (RexxParser.EQ - 69)) | (1 << (RexxParser.CMP_NEq - 69)) | (1 << (RexxParser.CMP_LM - 69)) | (1 << (RexxParser.CMP_ML - 69)) | (1 << (RexxParser.CMP_M - 69)) | (1 << (RexxParser.CMP_L - 69)) | (1 << (RexxParser.CMP_MEq - 69)) | (1 << (RexxParser.CMP_LEq - 69)) | (1 << (RexxParser.CMP_NM - 69)) | (1 << (RexxParser.CMP_NL - 69)))) !== 0))) {
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
    RexxParser.prototype.strict_compare = function () {
        var _localctx = new Strict_compareContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, RexxParser.RULE_strict_compare);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 736;
                _la = this._input.LA(1);
                if (!(((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (RexxParser.CMPS_Eq - 81)) | (1 << (RexxParser.CMPS_Neq - 81)) | (1 << (RexxParser.CMPS_M - 81)) | (1 << (RexxParser.CMPS_L - 81)) | (1 << (RexxParser.CMPS_MEq - 81)) | (1 << (RexxParser.CMPS_LEq - 81)) | (1 << (RexxParser.CMPS_NM - 81)) | (1 << (RexxParser.CMPS_NL - 81)))) !== 0))) {
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
    RexxParser.prototype.concatenation = function () {
        var _localctx = new ConcatenationContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, RexxParser.RULE_concatenation);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 738;
                this.addition();
                this.state = 745;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 740;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === RexxParser.CONCAT) {
                                    {
                                        this.state = 739;
                                        this.match(RexxParser.CONCAT);
                                    }
                                }
                                this.state = 742;
                                this.addition();
                            }
                        }
                    }
                    this.state = 747;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
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
    RexxParser.prototype.addition = function () {
        var _localctx = new AdditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, RexxParser.RULE_addition);
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 748;
                this.multiplication();
                this.state = 754;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 749;
                                this.additive_operator();
                                this.state = 750;
                                this.multiplication();
                            }
                        }
                    }
                    this.state = 756;
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
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.additive_operator = function () {
        var _localctx = new Additive_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, RexxParser.RULE_additive_operator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 757;
                _la = this._input.LA(1);
                if (!(_la === RexxParser.PLUS || _la === RexxParser.MINUS)) {
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
    RexxParser.prototype.multiplication = function () {
        var _localctx = new MultiplicationContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, RexxParser.RULE_multiplication);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 759;
                this.power_expression();
                this.state = 765;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (RexxParser.MUL - 72)) | (1 << (RexxParser.DIV - 72)) | (1 << (RexxParser.QUOTINENT - 72)) | (1 << (RexxParser.REMAINDER - 72)))) !== 0)) {
                    {
                        {
                            this.state = 760;
                            this.multiplicative_operator();
                            this.state = 761;
                            this.power_expression();
                        }
                    }
                    this.state = 767;
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
    RexxParser.prototype.multiplicative_operator = function () {
        var _localctx = new Multiplicative_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, RexxParser.RULE_multiplicative_operator);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 768;
                _la = this._input.LA(1);
                if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (RexxParser.MUL - 72)) | (1 << (RexxParser.DIV - 72)) | (1 << (RexxParser.QUOTINENT - 72)) | (1 << (RexxParser.REMAINDER - 72)))) !== 0))) {
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
    RexxParser.prototype.power_expression = function () {
        var _localctx = new Power_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, RexxParser.RULE_power_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 770;
                this.prefix_expression();
                this.state = 775;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RexxParser.POW) {
                    {
                        {
                            this.state = 771;
                            this.match(RexxParser.POW);
                            this.state = 772;
                            this.prefix_expression();
                        }
                    }
                    this.state = 777;
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
    RexxParser.prototype.prefix_expression = function () {
        var _localctx = new Prefix_expressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, RexxParser.RULE_prefix_expression);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 781;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (RexxParser.PLUS - 70)) | (1 << (RexxParser.MINUS - 70)) | (1 << (RexxParser.NOT - 70)))) !== 0)) {
                    {
                        {
                            this.state = 778;
                            _la = this._input.LA(1);
                            if (!(((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (RexxParser.PLUS - 70)) | (1 << (RexxParser.MINUS - 70)) | (1 << (RexxParser.NOT - 70)))) !== 0))) {
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
                    this.state = 783;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 784;
                this.term();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.term = function () {
        var _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, RexxParser.RULE_term);
        try {
            this.state = 793;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 786;
                        this.function_();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 787;
                        this.match(RexxParser.BR_O);
                        this.state = 788;
                        this.expression();
                        this.state = 789;
                        this.match(RexxParser.BR_C);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 791;
                        this.symbol();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 792;
                        this.match(RexxParser.STRING);
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
    RexxParser.prototype.function_ = function () {
        var _localctx = new Function_Context(this._ctx, this.state);
        this.enterRule(_localctx, 186, RexxParser.RULE_function_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 795;
                this.function_name();
                this.state = 796;
                this.function_parameters();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    RexxParser.prototype.function_name = function () {
        var _localctx = new Function_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, RexxParser.RULE_function_name);
        try {
            this.state = 806;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case RexxParser.KWD_ADDRESS:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 798;
                        this.match(RexxParser.KWD_ADDRESS);
                    }
                    break;
                case RexxParser.KWD_ARG:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 799;
                        this.match(RexxParser.KWD_ARG);
                    }
                    break;
                case RexxParser.KWD_DIGITS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 800;
                        this.match(RexxParser.KWD_DIGITS);
                    }
                    break;
                case RexxParser.KWD_FORM:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 801;
                        this.match(RexxParser.KWD_FORM);
                    }
                    break;
                case RexxParser.KWD_FUZZ:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 802;
                        this.match(RexxParser.KWD_FUZZ);
                    }
                    break;
                case RexxParser.KWD_TRACE:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 803;
                        this.match(RexxParser.KWD_TRACE);
                    }
                    break;
                case RexxParser.KWD_VALUE:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 804;
                        this.match(RexxParser.KWD_VALUE);
                    }
                    break;
                case RexxParser.SPECIAL_VAR:
                case RexxParser.NUMBER:
                case RexxParser.CONST_SYMBOL:
                case RexxParser.VAR_SYMBOL:
                case RexxParser.STRING:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 805;
                        this.taken_constant();
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
    RexxParser.prototype.function_parameters = function () {
        var _localctx = new Function_parametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, RexxParser.RULE_function_parameters);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 808;
                this.match(RexxParser.BR_O);
                this.state = 810;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RexxParser.KWD_ADDRESS) | (1 << RexxParser.KWD_ARG) | (1 << RexxParser.KWD_DIGITS) | (1 << RexxParser.KWD_FORM) | (1 << RexxParser.KWD_FUZZ))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (RexxParser.KWD_TRACE - 52)) | (1 << (RexxParser.KWD_VALUE - 52)) | (1 << (RexxParser.BR_O - 52)) | (1 << (RexxParser.SPECIAL_VAR - 52)) | (1 << (RexxParser.NUMBER - 52)) | (1 << (RexxParser.CONST_SYMBOL - 52)) | (1 << (RexxParser.VAR_SYMBOL - 52)) | (1 << (RexxParser.STRING - 52)) | (1 << (RexxParser.PLUS - 52)) | (1 << (RexxParser.MINUS - 52)) | (1 << (RexxParser.NOT - 52)))) !== 0) || _la === RexxParser.COMMA) {
                    {
                        this.state = 809;
                        this.expression_list();
                    }
                }
                this.state = 812;
                this.match(RexxParser.BR_C);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(RexxParser, "_ATN", {
        get: function () {
            if (!RexxParser.__ATN) {
                RexxParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(RexxParser._serializedATN));
            }
            return RexxParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    RexxParser.STMT_INCLUDE = 1;
    RexxParser.LINE_COMMENT = 2;
    RexxParser.BLOCK_COMMENT = 3;
    RexxParser.WHISPACES = 4;
    RexxParser.CONTINUATION = 5;
    RexxParser.KWD_ADDRESS = 6;
    RexxParser.KWD_ARG = 7;
    RexxParser.KWD_BY = 8;
    RexxParser.KWD_CALL = 9;
    RexxParser.KWD_DIGITS = 10;
    RexxParser.KWD_DO = 11;
    RexxParser.KWD_DROP = 12;
    RexxParser.KWD_ELSE = 13;
    RexxParser.KWD_END = 14;
    RexxParser.KWD_ENGINEERING = 15;
    RexxParser.KWD_ERROR = 16;
    RexxParser.KWD_EXIT = 17;
    RexxParser.KWD_EXPOSE = 18;
    RexxParser.KWD_EXTERNAL = 19;
    RexxParser.KWD_FAILURE = 20;
    RexxParser.KWD_FOR = 21;
    RexxParser.KWD_FOREVER = 22;
    RexxParser.KWD_FORM = 23;
    RexxParser.KWD_FUZZ = 24;
    RexxParser.KWD_HALT = 25;
    RexxParser.KWD_IF = 26;
    RexxParser.KWD_INTERPRET = 27;
    RexxParser.KWD_ITERATE = 28;
    RexxParser.KWD_LEAVE = 29;
    RexxParser.KWD_NAME = 30;
    RexxParser.KWD_NOP = 31;
    RexxParser.KWD_NOVALUE = 32;
    RexxParser.KWD_NUMERIC = 33;
    RexxParser.KWD_OFF = 34;
    RexxParser.KWD_ON = 35;
    RexxParser.KWD_OPTIONS = 36;
    RexxParser.KWD_OTHERWISE = 37;
    RexxParser.KWD_PARSE = 38;
    RexxParser.KWD_PROCEDURE = 39;
    RexxParser.KWD_PULL = 40;
    RexxParser.KWD_PUSH = 41;
    RexxParser.KWD_QUEUE = 42;
    RexxParser.KWD_RETURN = 43;
    RexxParser.KWD_SAY = 44;
    RexxParser.KWD_SCIENTIFIC = 45;
    RexxParser.KWD_SELECT = 46;
    RexxParser.KWD_SIGNAL = 47;
    RexxParser.KWD_SOURCE = 48;
    RexxParser.KWD_SYNTAX = 49;
    RexxParser.KWD_THEN = 50;
    RexxParser.KWD_TO = 51;
    RexxParser.KWD_TRACE = 52;
    RexxParser.KWD_UNTIL = 53;
    RexxParser.KWD_UPPER = 54;
    RexxParser.KWD_VALUE = 55;
    RexxParser.KWD_VAR = 56;
    RexxParser.KWD_VERSION = 57;
    RexxParser.KWD_WHEN = 58;
    RexxParser.KWD_WHILE = 59;
    RexxParser.KWD_WITH = 60;
    RexxParser.BR_O = 61;
    RexxParser.BR_C = 62;
    RexxParser.SPECIAL_VAR = 63;
    RexxParser.NUMBER = 64;
    RexxParser.CONST_SYMBOL = 65;
    RexxParser.VAR_SYMBOL = 66;
    RexxParser.STRING = 67;
    RexxParser.CONCAT = 68;
    RexxParser.EQ = 69;
    RexxParser.PLUS = 70;
    RexxParser.MINUS = 71;
    RexxParser.MUL = 72;
    RexxParser.DIV = 73;
    RexxParser.QUOTINENT = 74;
    RexxParser.REMAINDER = 75;
    RexxParser.POW = 76;
    RexxParser.NOT = 77;
    RexxParser.OR = 78;
    RexxParser.XOR = 79;
    RexxParser.AND = 80;
    RexxParser.CMPS_Eq = 81;
    RexxParser.CMPS_Neq = 82;
    RexxParser.CMPS_M = 83;
    RexxParser.CMPS_L = 84;
    RexxParser.CMPS_MEq = 85;
    RexxParser.CMPS_LEq = 86;
    RexxParser.CMPS_NM = 87;
    RexxParser.CMPS_NL = 88;
    RexxParser.CMP_NEq = 89;
    RexxParser.CMP_LM = 90;
    RexxParser.CMP_ML = 91;
    RexxParser.CMP_M = 92;
    RexxParser.CMP_L = 93;
    RexxParser.CMP_MEq = 94;
    RexxParser.CMP_LEq = 95;
    RexxParser.CMP_NM = 96;
    RexxParser.CMP_NL = 97;
    RexxParser.STOP = 98;
    RexxParser.COMMA = 99;
    RexxParser.COLON = 100;
    RexxParser.EOL = 101;
    RexxParser.SEMICOL = 102;
    RexxParser.UNSUPPORTED_CHARACTER = 103;
    RexxParser.RULE_file = 0;
    RexxParser.RULE_program_ = 1;
    RexxParser.RULE_ncl = 2;
    RexxParser.RULE_null_clause = 3;
    RexxParser.RULE_delim = 4;
    RexxParser.RULE_label_list = 5;
    RexxParser.RULE_label = 6;
    RexxParser.RULE_include_statement = 7;
    RexxParser.RULE_instruction_list = 8;
    RexxParser.RULE_instruction = 9;
    RexxParser.RULE_single_instruction = 10;
    RexxParser.RULE_assignment = 11;
    RexxParser.RULE_keyword_instruction = 12;
    RexxParser.RULE_command_ = 13;
    RexxParser.RULE_group_ = 14;
    RexxParser.RULE_do_ = 15;
    RexxParser.RULE_do_rep = 16;
    RexxParser.RULE_do_cnt = 17;
    RexxParser.RULE_dot = 18;
    RexxParser.RULE_dob = 19;
    RexxParser.RULE_dof = 20;
    RexxParser.RULE_do_cond = 21;
    RexxParser.RULE_if_ = 22;
    RexxParser.RULE_then_ = 23;
    RexxParser.RULE_else_ = 24;
    RexxParser.RULE_select_ = 25;
    RexxParser.RULE_select_body = 26;
    RexxParser.RULE_when_ = 27;
    RexxParser.RULE_otherwise_ = 28;
    RexxParser.RULE_address_ = 29;
    RexxParser.RULE_taken_constant = 30;
    RexxParser.RULE_valueexp = 31;
    RexxParser.RULE_arg_ = 32;
    RexxParser.RULE_call_ = 33;
    RexxParser.RULE_callon_spec = 34;
    RexxParser.RULE_callable_condition = 35;
    RexxParser.RULE_call_parms = 36;
    RexxParser.RULE_expression_list = 37;
    RexxParser.RULE_drop_ = 38;
    RexxParser.RULE_variable_list = 39;
    RexxParser.RULE_vref = 40;
    RexxParser.RULE_var_symbol = 41;
    RexxParser.RULE_exit_ = 42;
    RexxParser.RULE_interpret_ = 43;
    RexxParser.RULE_iterate_ = 44;
    RexxParser.RULE_leave_ = 45;
    RexxParser.RULE_nop_ = 46;
    RexxParser.RULE_numeric_ = 47;
    RexxParser.RULE_numeric_digits = 48;
    RexxParser.RULE_numeric_form = 49;
    RexxParser.RULE_numeric_fuzz = 50;
    RexxParser.RULE_options_ = 51;
    RexxParser.RULE_parse_ = 52;
    RexxParser.RULE_parse_type = 53;
    RexxParser.RULE_parse_key = 54;
    RexxParser.RULE_parse_value = 55;
    RexxParser.RULE_parse_var = 56;
    RexxParser.RULE_procedure_ = 57;
    RexxParser.RULE_pull_ = 58;
    RexxParser.RULE_push_ = 59;
    RexxParser.RULE_queue_ = 60;
    RexxParser.RULE_return_ = 61;
    RexxParser.RULE_say_ = 62;
    RexxParser.RULE_signal_ = 63;
    RexxParser.RULE_signal_spec = 64;
    RexxParser.RULE_condition = 65;
    RexxParser.RULE_trace_ = 66;
    RexxParser.RULE_upper_ = 67;
    RexxParser.RULE_template_list = 68;
    RexxParser.RULE_template_ = 69;
    RexxParser.RULE_target_ = 70;
    RexxParser.RULE_trigger_ = 71;
    RexxParser.RULE_pattern_ = 72;
    RexxParser.RULE_positional_ = 73;
    RexxParser.RULE_absolute_positional = 74;
    RexxParser.RULE_position_ = 75;
    RexxParser.RULE_relative_positional = 76;
    RexxParser.RULE_symbol = 77;
    RexxParser.RULE_expression = 78;
    RexxParser.RULE_or_operator = 79;
    RexxParser.RULE_and_expression = 80;
    RexxParser.RULE_comparison = 81;
    RexxParser.RULE_comparison_operator = 82;
    RexxParser.RULE_normal_compare = 83;
    RexxParser.RULE_strict_compare = 84;
    RexxParser.RULE_concatenation = 85;
    RexxParser.RULE_addition = 86;
    RexxParser.RULE_additive_operator = 87;
    RexxParser.RULE_multiplication = 88;
    RexxParser.RULE_multiplicative_operator = 89;
    RexxParser.RULE_power_expression = 90;
    RexxParser.RULE_prefix_expression = 91;
    RexxParser.RULE_term = 92;
    RexxParser.RULE_function_ = 93;
    RexxParser.RULE_function_name = 94;
    RexxParser.RULE_function_parameters = 95;
    // tslint:disable:no-trailing-whitespace
    RexxParser.ruleNames = [
        "file", "program_", "ncl", "null_clause", "delim", "label_list", "label",
        "include_statement", "instruction_list", "instruction", "single_instruction",
        "assignment", "keyword_instruction", "command_", "group_", "do_", "do_rep",
        "do_cnt", "dot", "dob", "dof", "do_cond", "if_", "then_", "else_", "select_",
        "select_body", "when_", "otherwise_", "address_", "taken_constant", "valueexp",
        "arg_", "call_", "callon_spec", "callable_condition", "call_parms", "expression_list",
        "drop_", "variable_list", "vref", "var_symbol", "exit_", "interpret_",
        "iterate_", "leave_", "nop_", "numeric_", "numeric_digits", "numeric_form",
        "numeric_fuzz", "options_", "parse_", "parse_type", "parse_key", "parse_value",
        "parse_var", "procedure_", "pull_", "push_", "queue_", "return_", "say_",
        "signal_", "signal_spec", "condition", "trace_", "upper_", "template_list",
        "template_", "target_", "trigger_", "pattern_", "positional_", "absolute_positional",
        "position_", "relative_positional", "symbol", "expression", "or_operator",
        "and_expression", "comparison", "comparison_operator", "normal_compare",
        "strict_compare", "concatenation", "addition", "additive_operator", "multiplication",
        "multiplicative_operator", "power_expression", "prefix_expression", "term",
        "function_", "function_name", "function_parameters",
    ];
    RexxParser._LITERAL_NAMES = [];
    RexxParser._SYMBOLIC_NAMES = [
        undefined, "STMT_INCLUDE", "LINE_COMMENT", "BLOCK_COMMENT", "WHISPACES",
        "CONTINUATION", "KWD_ADDRESS", "KWD_ARG", "KWD_BY", "KWD_CALL", "KWD_DIGITS",
        "KWD_DO", "KWD_DROP", "KWD_ELSE", "KWD_END", "KWD_ENGINEERING", "KWD_ERROR",
        "KWD_EXIT", "KWD_EXPOSE", "KWD_EXTERNAL", "KWD_FAILURE", "KWD_FOR", "KWD_FOREVER",
        "KWD_FORM", "KWD_FUZZ", "KWD_HALT", "KWD_IF", "KWD_INTERPRET", "KWD_ITERATE",
        "KWD_LEAVE", "KWD_NAME", "KWD_NOP", "KWD_NOVALUE", "KWD_NUMERIC", "KWD_OFF",
        "KWD_ON", "KWD_OPTIONS", "KWD_OTHERWISE", "KWD_PARSE", "KWD_PROCEDURE",
        "KWD_PULL", "KWD_PUSH", "KWD_QUEUE", "KWD_RETURN", "KWD_SAY", "KWD_SCIENTIFIC",
        "KWD_SELECT", "KWD_SIGNAL", "KWD_SOURCE", "KWD_SYNTAX", "KWD_THEN", "KWD_TO",
        "KWD_TRACE", "KWD_UNTIL", "KWD_UPPER", "KWD_VALUE", "KWD_VAR", "KWD_VERSION",
        "KWD_WHEN", "KWD_WHILE", "KWD_WITH", "BR_O", "BR_C", "SPECIAL_VAR", "NUMBER",
        "CONST_SYMBOL", "VAR_SYMBOL", "STRING", "CONCAT", "EQ", "PLUS", "MINUS",
        "MUL", "DIV", "QUOTINENT", "REMAINDER", "POW", "NOT", "OR", "XOR", "AND",
        "CMPS_Eq", "CMPS_Neq", "CMPS_M", "CMPS_L", "CMPS_MEq", "CMPS_LEq", "CMPS_NM",
        "CMPS_NL", "CMP_NEq", "CMP_LM", "CMP_ML", "CMP_M", "CMP_L", "CMP_MEq",
        "CMP_LEq", "CMP_NM", "CMP_NL", "STOP", "COMMA", "COLON", "EOL", "SEMICOL",
        "UNSUPPORTED_CHARACTER",
    ];
    RexxParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(RexxParser._LITERAL_NAMES, RexxParser._SYMBOLIC_NAMES, []);
    RexxParser._serializedATNSegments = 2;
    RexxParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03i\u0331\x04\x02" +
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
        "`\x04a\ta\x03\x02\x03\x02\x03\x02\x03\x03\x05\x03\xC7\n\x03\x03\x03\x05" +
        "\x03\xCA\n\x03\x03\x04\x06\x04\xCD\n\x04\r\x04\x0E\x04\xCE\x03\x05\x06" +
        "\x05\xD2\n\x05\r\x05\x0E\x05\xD3\x03\x05\x05\x05\xD7\n\x05\x03\x05\x03" +
        "\x05\x05\x05\xDB\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x07\x07" +
        "\xE2\n\x07\f\x07\x0E\x07\xE5\v\x07\x06\x07\xE7\n\x07\r\x07\x0E\x07\xE8" +
        "\x03\b\x03\b\x03\t\x03\t\x03\n\x06\n\xF0\n\n\r\n\x0E\n\xF1\x03\v\x03\v" +
        "\x03\v\x05\v\xF7\n\v\x05\v\xF9\n\v\x03\f\x03\f\x03\f\x05\f\xFE\n\f\x03" +
        "\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
        "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0119\n\x0E\x03\x0F" +
        "\x03\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0120\n\x10\x03\x11\x03\x11\x05" +
        "\x11\u0124\n\x11\x03\x11\x05\x11\u0127\n\x11\x03\x11\x03\x11\x05\x11\u012B" +
        "\n\x11\x03\x11\x03\x11\x05\x11\u012F\n\x11\x03\x11\x05\x11\u0132\n\x11" +
        "\x03\x12\x03\x12\x05\x12\u0136\n\x12\x03\x12\x03\x12\x05\x12\u013A\n\x12" +
        "\x03\x13\x03\x13\x05\x13\u013E\n\x13\x03\x13\x05\x13\u0141\n\x13\x03\x13" +
        "\x03\x13\x05\x13\u0145\n\x13\x03\x13\x05\x13\u0148\n\x13\x03\x13\x03\x13" +
        "\x05\x13\u014C\n\x13\x03\x13\x05\x13\u014F\n\x13\x03\x13\x03\x13\x05\x13" +
        "\u0153\n\x13\x03\x13\x05\x13\u0156\n\x13\x03\x13\x03\x13\x05\x13\u015A" +
        "\n\x13\x03\x13\x05\x13\u015D\n\x13\x03\x13\x03\x13\x05\x13\u0161\n\x13" +
        "\x03\x13\x05\x13\u0164\n\x13\x05\x13\u0166\n\x13\x03\x14\x03\x14\x03\x14" +
        "\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
        "\x03\x17\x05\x17\u0175\n\x17\x03\x18\x03\x18\x03\x18\x07\x18\u017A\n\x18" +
        "\f\x18\x0E\x18\u017D\v\x18\x03\x18\x03\x18\x06\x18\u0181\n\x18\r\x18\x0E" +
        "\x18\u0182\x03\x18\x03\x18\x05\x18\u0187\n\x18\x03\x19\x03\x19\x05\x19" +
        "\u018B\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u0191\n\x1A\x03\x1A" +
        "\x03\x1A\x03\x1B\x03\x1B\x06\x1B\u0197\n\x1B\r\x1B\x0E\x1B\u0198\x03\x1B" +
        "\x03\x1B\x03\x1B\x05\x1B\u019E\n\x1B\x03\x1C\x06\x1C\u01A1\n\x1C\r\x1C" +
        "\x0E\x1C\u01A2\x03\x1C\x05\x1C\u01A6\n\x1C\x03\x1D\x03\x1D\x03\x1D\x07" +
        "\x1D\u01AB\n\x1D\f\x1D\x0E\x1D\u01AE\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03" +
        "\x1E\x07\x1E\u01B4\n\x1E\f\x1E\x0E\x1E\u01B7\v\x1E\x03\x1E\x05\x1E\u01BA" +
        "\n\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01BF\n\x1F\x03\x1F\x05\x1F\u01C2" +
        "\n\x1F\x03 \x03 \x05 \u01C6\n \x03!\x03!\x03!\x03\"\x03\"\x05\"\u01CD" +
        "\n\"\x03#\x03#\x03#\x03#\x05#\u01D3\n#\x05#\u01D5\n#\x03$\x03$\x03$\x03" +
        "$\x05$\u01DB\n$\x03$\x03$\x05$\u01DF\n$\x03%\x03%\x03&\x03&\x05&\u01E5" +
        "\n&\x03&\x03&\x05&\u01E9\n&\x03\'\x07\'\u01EC\n\'\f\'\x0E\'\u01EF\v\'" +
        "\x03\'\x03\'\x06\'\u01F3\n\'\r\'\x0E\'\u01F4\x03\'\x07\'\u01F8\n\'\f\'" +
        "\x0E\'\u01FB\v\'\x03(\x03(\x03(\x03)\x03)\x06)\u0202\n)\r)\x0E)\u0203" +
        "\x03*\x03*\x03*\x03*\x03+\x03+\x03,\x03,\x05,\u020E\n,\x03-\x03-\x03-" +
        "\x03.\x03.\x05.\u0215\n.\x03/\x03/\x05/\u0219\n/\x030\x030\x031\x031\x03" +
        "1\x031\x051\u0221\n1\x032\x032\x052\u0225\n2\x033\x033\x033\x033\x033" +
        "\x053\u022C\n3\x034\x034\x054\u0230\n4\x035\x035\x035\x036\x036\x056\u0237" +
        "\n6\x036\x036\x056\u023B\n6\x037\x037\x037\x057\u0240\n7\x038\x038\x03" +
        "9\x039\x059\u0246\n9\x039\x039\x03:\x03:\x03:\x03;\x03;\x03;\x05;\u0250" +
        "\n;\x03<\x03<\x05<\u0254\n<\x03=\x03=\x05=\u0258\n=\x03>\x03>\x05>\u025C" +
        "\n>\x03?\x03?\x05?\u0260\n?\x03@\x03@\x05@\u0264\n@\x03A\x03A\x03A\x03" +
        "A\x05A\u026A\nA\x03B\x03B\x03B\x03B\x05B\u0270\nB\x03B\x03B\x05B\u0274" +
        "\nB\x03C\x03C\x03C\x05C\u0279\nC\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05" +
        "D\u0282\nD\x03E\x03E\x06E\u0286\nE\rE\x0EE\u0287\x03F\x07F\u028B\nF\f" +
        "F\x0EF\u028E\vF\x03F\x03F\x06F\u0292\nF\rF\x0EF\u0293\x03F\x07F\u0297" +
        "\nF\fF\x0EF\u029A\vF\x03G\x03G\x06G\u029E\nG\rG\x0EG\u029F\x03H\x03H\x03" +
        "I\x03I\x05I\u02A6\nI\x03J\x03J\x05J\u02AA\nJ\x03K\x03K\x05K\u02AE\nK\x03" +
        "L\x03L\x03L\x05L\u02B3\nL\x03M\x03M\x05M\u02B7\nM\x03N\x03N\x03N\x03O" +
        "\x03O\x03O\x05O\u02BF\nO\x03P\x03P\x03P\x03P\x07P\u02C5\nP\fP\x0EP\u02C8" +
        "\vP\x03Q\x03Q\x03R\x03R\x03R\x07R\u02CF\nR\fR\x0ER\u02D2\vR\x03S\x03S" +
        "\x03S\x03S\x07S\u02D8\nS\fS\x0ES\u02DB\vS\x03T\x03T\x05T\u02DF\nT\x03" +
        "U\x03U\x03V\x03V\x03W\x03W\x05W\u02E7\nW\x03W\x07W\u02EA\nW\fW\x0EW\u02ED" +
        "\vW\x03X\x03X\x03X\x03X\x07X\u02F3\nX\fX\x0EX\u02F6\vX\x03Y\x03Y\x03Z" +
        "\x03Z\x03Z\x03Z\x07Z\u02FE\nZ\fZ\x0EZ\u0301\vZ\x03[\x03[\x03\\\x03\\\x03" +
        "\\\x07\\\u0308\n\\\f\\\x0E\\\u030B\v\\\x03]\x07]\u030E\n]\f]\x0E]\u0311" +
        "\v]\x03]\x03]\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u031C\n^\x03_\x03" +
        "_\x03_\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x05`\u0329\n`\x03a\x03" +
        "a\x05a\u032D\na\x03a\x03a\x03a\x02\x02\x02b\x02\x02\x04\x02\x06\x02\b" +
        "\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
        "\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
        "6\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
        "R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
        "n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
        "\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
        "\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
        "\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02" +
        "\xBC\x02\xBE\x02\xC0\x02\x02\x0F\x03\x02gh\x03\x02BD\x04\x02AACD\x05\x02" +
        "\x12\x12\x16\x16\x1B\x1B\x04\x02AADD\b\x02\t\t\x15\x15##**22;;\x05\x02" +
        "AADDdd\x03\x02HI\x03\x02PQ\x04\x02GG[c\x03\x02SZ\x03\x02JM\x04\x02HIO" +
        "O\x02\u036D\x02\xC2\x03\x02\x02\x02\x04\xC6\x03\x02\x02\x02\x06\xCC\x03" +
        "\x02\x02\x02\b\xDA\x03\x02\x02\x02\n\xDC\x03\x02\x02\x02\f\xE6\x03\x02" +
        "\x02\x02\x0E\xEA\x03\x02\x02\x02\x10\xEC\x03\x02\x02\x02\x12\xEF\x03\x02" +
        "\x02\x02\x14\xF8\x03\x02\x02\x02\x16\xFD\x03\x02\x02\x02\x18\xFF\x03\x02" +
        "\x02\x02\x1A\u0118\x03\x02\x02\x02\x1C\u011A\x03\x02\x02\x02\x1E\u011F" +
        "\x03\x02\x02\x02 \u0121\x03\x02\x02\x02\"\u0139\x03\x02\x02\x02$\u0165" +
        "\x03\x02\x02\x02&\u0167\x03\x02\x02\x02(\u016A\x03\x02\x02\x02*\u016D" +
        "\x03\x02\x02\x02,\u0174\x03\x02\x02\x02.\u0176\x03\x02\x02\x020\u0188" +
        "\x03\x02\x02\x022\u018E\x03\x02\x02\x024\u0194\x03\x02\x02\x026\u01A0" +
        "\x03\x02\x02\x028\u01A7\x03\x02\x02\x02:\u01B1\x03\x02\x02\x02<\u01BB" +
        "\x03\x02\x02\x02>\u01C5\x03\x02\x02\x02@\u01C7\x03\x02\x02\x02B\u01CA" +
        "\x03\x02\x02\x02D\u01CE\x03\x02\x02\x02F\u01DE\x03\x02\x02\x02H\u01E0" +
        "\x03\x02\x02\x02J\u01E8\x03\x02\x02\x02L\u01ED\x03\x02\x02\x02N\u01FC" +
        "\x03\x02\x02\x02P\u0201\x03\x02\x02\x02R\u0205\x03\x02\x02\x02T\u0209" +
        "\x03\x02\x02\x02V\u020B\x03\x02\x02\x02X\u020F\x03\x02\x02\x02Z\u0212" +
        "\x03\x02\x02\x02\\\u0216\x03\x02\x02\x02^\u021A\x03\x02\x02\x02`\u021C" +
        "\x03\x02\x02\x02b\u0222\x03\x02\x02\x02d\u0226\x03\x02\x02\x02f\u022D" +
        "\x03\x02\x02\x02h\u0231\x03\x02\x02\x02j\u0234\x03\x02\x02\x02l\u023F" +
        "\x03\x02\x02\x02n\u0241\x03\x02\x02\x02p\u0243\x03\x02\x02\x02r\u0249" +
        "\x03\x02\x02\x02t\u024C\x03\x02\x02\x02v\u0251\x03\x02\x02\x02x\u0255" +
        "\x03\x02\x02\x02z\u0259\x03\x02\x02\x02|\u025D\x03\x02\x02\x02~\u0261" +
        "\x03\x02\x02\x02\x80\u0265\x03\x02\x02\x02\x82\u0273\x03\x02\x02\x02\x84" +
        "\u0278\x03\x02\x02\x02\x86\u027A\x03\x02\x02\x02\x88\u0283\x03\x02\x02" +
        "\x02\x8A\u028C\x03\x02\x02\x02\x8C\u029D\x03\x02\x02\x02\x8E\u02A1\x03" +
        "\x02\x02\x02\x90\u02A5\x03\x02\x02\x02\x92\u02A9\x03\x02\x02\x02\x94\u02AD" +
        "\x03\x02\x02\x02\x96\u02B2\x03\x02\x02\x02\x98\u02B6\x03\x02\x02\x02\x9A" +
        "\u02B8\x03\x02\x02\x02\x9C\u02BE\x03\x02\x02\x02\x9E\u02C0\x03\x02\x02" +
        "\x02\xA0\u02C9\x03\x02\x02\x02\xA2\u02CB\x03\x02\x02\x02\xA4\u02D3\x03" +
        "\x02\x02\x02\xA6\u02DE\x03\x02\x02\x02\xA8\u02E0\x03\x02\x02\x02\xAA\u02E2" +
        "\x03\x02\x02\x02\xAC\u02E4\x03\x02\x02\x02\xAE\u02EE\x03\x02\x02\x02\xB0" +
        "\u02F7\x03\x02\x02\x02\xB2\u02F9\x03\x02\x02\x02\xB4\u0302\x03\x02\x02" +
        "\x02\xB6\u0304\x03\x02\x02\x02\xB8\u030F\x03\x02\x02\x02\xBA\u031B\x03" +
        "\x02\x02\x02\xBC\u031D\x03\x02\x02\x02\xBE\u0328\x03\x02\x02\x02\xC0\u032A" +
        "\x03\x02\x02\x02\xC2\xC3\x05\x04\x03\x02\xC3\xC4\x07\x02\x02\x03\xC4\x03" +
        "\x03\x02\x02\x02\xC5\xC7\x05\x06\x04\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7" +
        "\x03\x02\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8\xCA\x05\x12\n\x02\xC9\xC8" +
        "\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\x05\x03\x02\x02\x02\xCB\xCD" +
        "\x05\b\x05\x02\xCC\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCC" +
        "\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\x07\x03\x02\x02\x02\xD0\xD2" +
        "\x05\n\x06\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD1" +
        "\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5\xD7" +
        "\x05\f\x07\x02\xD6\xD5\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xDB" +
        "\x03\x02\x02\x02\xD8\xDB\x05\f\x07\x02\xD9\xDB\x05\x10\t\x02\xDA\xD1\x03" +
        "\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xD9\x03\x02\x02\x02\xDB\t\x03" +
        "\x02\x02\x02\xDC\xDD\t\x02\x02\x02\xDD\v\x03\x02\x02\x02\xDE\xDF\x05\x0E" +
        "\b\x02\xDF\xE3\x07f\x02\x02\xE0\xE2\x05\n\x06\x02\xE1\xE0\x03\x02\x02" +
        "\x02\xE2\xE5\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02" +
        "\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE6\xDE\x03\x02\x02" +
        "\x02\xE7\xE8\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02" +
        "\x02\xE9\r\x03\x02\x02\x02\xEA\xEB\t\x03\x02\x02\xEB\x0F\x03\x02\x02\x02" +
        "\xEC\xED\x07\x03\x02\x02\xED\x11\x03\x02\x02\x02\xEE\xF0\x05\x14\v\x02" +
        "\xEF\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02" +
        "\xF1\xF2\x03\x02\x02\x02\xF2\x13\x03\x02\x02\x02\xF3\xF9\x05\x1E\x10\x02" +
        "\xF4\xF6\x05\x16\f\x02\xF5\xF7\x05\x06\x04\x02\xF6\xF5\x03\x02\x02\x02" +
        "\xF6\xF7\x03\x02\x02\x02\xF7\xF9\x03\x02\x02\x02\xF8\xF3\x03\x02\x02\x02" +
        "\xF8\xF4\x03\x02\x02\x02\xF9\x15\x03\x02\x02\x02\xFA\xFE\x05\x18\r\x02" +
        "\xFB\xFE\x05\x1A\x0E\x02\xFC\xFE\x05\x1C\x0F\x02\xFD\xFA\x03\x02\x02\x02" +
        "\xFD\xFB\x03\x02\x02\x02\xFD\xFC\x03\x02\x02\x02\xFE\x17\x03\x02\x02\x02" +
        "\xFF\u0100\t\x04\x02\x02\u0100\u0101\x07G\x02\x02\u0101\u0102\x05\x9E" +
        "P\x02\u0102\x19\x03\x02\x02\x02\u0103\u0119\x05<\x1F\x02\u0104\u0119\x05" +
        "B\"\x02\u0105\u0119\x05D#\x02\u0106\u0119\x05N(\x02\u0107\u0119\x05V," +
        "\x02\u0108\u0119\x05X-\x02\u0109\u0119\x05Z.\x02\u010A\u0119\x05\\/\x02" +
        "\u010B\u0119\x05^0\x02\u010C\u0119\x05`1\x02\u010D\u0119\x05h5\x02\u010E" +
        "\u0119\x05j6\x02\u010F\u0119\x05t;\x02\u0110\u0119\x05v<\x02\u0111\u0119" +
        "\x05x=\x02\u0112\u0119\x05z>\x02\u0113\u0119\x05|?\x02\u0114\u0119\x05" +
        "~@\x02\u0115\u0119\x05\x80A\x02\u0116\u0119\x05\x86D\x02\u0117\u0119\x05" +
        "\x88E\x02\u0118\u0103\x03\x02\x02\x02\u0118\u0104\x03\x02\x02\x02\u0118" +
        "\u0105\x03\x02\x02\x02\u0118\u0106\x03\x02\x02\x02\u0118\u0107\x03\x02" +
        "\x02\x02\u0118\u0108\x03\x02\x02\x02\u0118\u0109\x03\x02\x02\x02\u0118" +
        "\u010A\x03\x02\x02\x02\u0118\u010B\x03\x02\x02\x02\u0118\u010C\x03\x02" +
        "\x02\x02\u0118\u010D\x03\x02\x02\x02\u0118\u010E\x03\x02\x02\x02\u0118" +
        "\u010F\x03\x02\x02\x02\u0118\u0110\x03\x02\x02\x02\u0118\u0111\x03\x02" +
        "\x02\x02\u0118\u0112\x03\x02\x02\x02\u0118\u0113\x03\x02\x02\x02\u0118" +
        "\u0114\x03\x02\x02\x02\u0118\u0115\x03\x02\x02\x02\u0118\u0116\x03\x02" +
        "\x02\x02\u0118\u0117\x03\x02\x02\x02\u0119\x1B\x03\x02\x02\x02\u011A\u011B" +
        "\x05\x9EP\x02\u011B\x1D\x03\x02\x02\x02\u011C\u0120\x05 \x11\x02\u011D" +
        "\u0120\x05.\x18\x02\u011E\u0120\x054\x1B\x02\u011F\u011C\x03\x02\x02\x02" +
        "\u011F\u011D\x03\x02\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120\x1F\x03" +
        "\x02\x02\x02\u0121\u0123\x07\r\x02\x02\u0122\u0124\x05\"\x12\x02\u0123" +
        "\u0122\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0126\x03\x02" +
        "\x02\x02\u0125\u0127\x05,\x17\x02\u0126\u0125\x03\x02\x02\x02\u0126\u0127" +
        "\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012A\x05\x06\x04\x02" +
        "\u0129\u012B\x05\x12\n\x02\u012A\u0129\x03\x02\x02\x02\u012A\u012B\x03" +
        "\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012E\x07\x10\x02\x02\u012D" +
        "\u012F\x05T+\x02\u012E\u012D\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02" +
        "\u012F\u0131\x03\x02\x02\x02\u0130\u0132\x05\x06\x04\x02\u0131\u0130\x03" +
        "\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132!\x03\x02\x02\x02\u0133" +
        "\u0135\x05\x18\r\x02\u0134\u0136\x05$\x13\x02\u0135\u0134\x03\x02\x02" +
        "\x02\u0135\u0136\x03\x02\x02\x02\u0136\u013A\x03\x02\x02\x02\u0137\u013A" +
        "\x07\x18\x02\x02\u0138\u013A\x05\x9EP\x02\u0139\u0133\x03\x02\x02\x02" +
        "\u0139\u0137\x03\x02\x02\x02\u0139\u0138\x03\x02\x02\x02\u013A#\x03\x02" +
        "\x02\x02\u013B\u013D\x05&\x14\x02\u013C\u013E\x05(\x15\x02\u013D\u013C" +
        "\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0140\x03\x02\x02\x02" +
        "\u013F\u0141\x05*\x16\x02\u0140\u013F\x03\x02\x02\x02\u0140\u0141\x03" +
        "\x02\x02\x02\u0141\u0166\x03\x02\x02\x02\u0142\u0144\x05&\x14\x02\u0143" +
        "\u0145\x05*\x16\x02\u0144\u0143\x03\x02\x02\x02\u0144\u0145\x03\x02\x02" +
        "\x02\u0145\u0147\x03\x02\x02\x02\u0146\u0148\x05(\x15\x02\u0147\u0146" +
        "\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u0166\x03\x02\x02\x02" +
        "\u0149\u014B\x05(\x15\x02\u014A\u014C\x05&\x14\x02\u014B\u014A\x03\x02" +
        "\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014E\x03\x02\x02\x02\u014D" +
        "\u014F\x05*\x16\x02\u014E\u014D\x03\x02\x02\x02\u014E\u014F\x03\x02\x02" +
        "\x02\u014F\u0166\x03\x02\x02\x02\u0150\u0152\x05(\x15\x02\u0151\u0153" +
        "\x05*\x16\x02\u0152\u0151\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02" +
        "\u0153\u0155\x03\x02\x02\x02\u0154\u0156\x05&\x14\x02\u0155\u0154\x03" +
        "\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0166\x03\x02\x02\x02\u0157" +
        "\u0159\x05*\x16\x02\u0158\u015A\x05&\x14\x02\u0159\u0158\x03\x02\x02\x02" +
        "\u0159\u015A\x03\x02\x02\x02\u015A\u015C\x03\x02\x02\x02\u015B\u015D\x05" +
        "(\x15\x02\u015C\u015B\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D" +
        "\u0166\x03\x02\x02\x02\u015E\u0160\x05*\x16\x02\u015F\u0161\x05(\x15\x02" +
        "\u0160\u015F\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0163\x03" +
        "\x02\x02\x02\u0162\u0164\x05&\x14\x02\u0163\u0162\x03\x02\x02\x02\u0163" +
        "\u0164\x03\x02\x02\x02\u0164\u0166\x03\x02\x02\x02\u0165\u013B\x03\x02" +
        "\x02\x02\u0165\u0142\x03\x02\x02\x02\u0165\u0149\x03\x02\x02\x02\u0165" +
        "\u0150\x03\x02\x02\x02\u0165\u0157\x03\x02\x02\x02\u0165\u015E\x03\x02" +
        "\x02\x02\u0166%\x03\x02\x02\x02\u0167\u0168\x075\x02\x02\u0168\u0169\x05" +
        "\x9EP\x02\u0169\'\x03\x02\x02\x02\u016A\u016B\x07\n\x02\x02\u016B\u016C" +
        "\x05\x9EP\x02\u016C)\x03\x02\x02\x02\u016D\u016E\x07\x17\x02\x02\u016E" +
        "\u016F\x05\x9EP\x02\u016F+\x03\x02\x02\x02\u0170\u0171\x07=\x02\x02\u0171" +
        "\u0175\x05\x9EP\x02\u0172\u0173\x077\x02\x02\u0173\u0175\x05\x9EP\x02" +
        "\u0174\u0170\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0175-\x03\x02" +
        "\x02\x02\u0176\u0177\x07\x1C\x02\x02\u0177\u017B\x05\x9EP\x02\u0178\u017A" +
        "\x05\n\x06\x02\u0179\u0178\x03\x02\x02\x02\u017A\u017D\x03\x02\x02\x02" +
        "\u017B\u0179\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017E\x03" +
        "\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017E\u0186\x050\x19\x02\u017F" +
        "\u0181\x05\n\x06\x02\u0180\u017F\x03\x02\x02\x02\u0181\u0182\x03\x02\x02" +
        "\x02\u0182\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0184" +
        "\x03\x02\x02\x02\u0184\u0185\x052\x1A\x02\u0185\u0187\x03\x02\x02\x02" +
        "\u0186\u0180\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187/\x03\x02" +
        "\x02\x02\u0188\u018A\x074\x02\x02\u0189\u018B\x05\x06\x04\x02\u018A\u0189" +
        "\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02" +
        "\u018C\u018D\x05\x14\v\x02\u018D1\x03\x02\x02\x02\u018E\u0190\x07\x0F" +
        "\x02\x02\u018F\u0191\x05\x06\x04\x02\u0190\u018F\x03\x02\x02\x02\u0190" +
        "\u0191\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0193\x05\x14" +
        "\v\x02\u01933\x03\x02\x02\x02\u0194\u0196\x070\x02\x02\u0195\u0197\x05" +
        "\n\x06\x02\u0196\u0195\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198" +
        "\u0196\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019A\x03\x02" +
        "\x02\x02\u019A\u019B\x056\x1C\x02\u019B\u019D\x07\x10\x02\x02\u019C\u019E" +
        "\x05\x06\x04\x02\u019D\u019C\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02" +
        "\u019E5\x03\x02\x02\x02\u019F\u01A1\x058\x1D\x02\u01A0\u019F\x03\x02\x02" +
        "\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2\u01A3" +
        "\x03\x02\x02\x02\u01A3\u01A5\x03\x02\x02\x02\u01A4\u01A6\x05:\x1E\x02" +
        "\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A67\x03\x02" +
        "\x02\x02\u01A7\u01A8\x07<\x02\x02\u01A8\u01AC\x05\x9EP\x02\u01A9\u01AB" +
        "\x05\n\x06\x02\u01AA\u01A9\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02" +
        "\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AF\x03" +
        "\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AF\u01B0\x050\x19\x02\u01B0" +
        "9\x03\x02\x02\x02\u01B1\u01B5\x07\'\x02\x02\u01B2\u01B4\x05\n\x06\x02" +
        "\u01B3\u01B2\x03\x02\x02\x02\u01B4\u01B7\x03\x02\x02\x02\u01B5\u01B3\x03" +
        "\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B9\x03\x02\x02\x02\u01B7" +
        "\u01B5\x03\x02\x02\x02\u01B8\u01BA\x05\x12\n\x02\u01B9\u01B8\x03\x02\x02" +
        "\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA;\x03\x02\x02\x02\u01BB\u01C1\x07" +
        "\b\x02\x02\u01BC\u01BE\x05> \x02\u01BD\u01BF\x05\x9EP\x02\u01BE\u01BD" +
        "\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C2\x03\x02\x02\x02" +
        "\u01C0\u01C2\x05@!\x02\u01C1\u01BC\x03\x02\x02\x02\u01C1\u01C0\x03\x02" +
        "\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2=\x03\x02\x02\x02\u01C3\u01C6" +
        "\x05\x9CO\x02\u01C4\u01C6\x07E\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5" +
        "\u01C4\x03\x02\x02\x02\u01C6?\x03\x02\x02\x02\u01C7\u01C8\x079\x02\x02" +
        "\u01C8\u01C9\x05\x9EP\x02\u01C9A\x03\x02\x02\x02\u01CA\u01CC\x07\t\x02" +
        "\x02\u01CB\u01CD\x05\x8AF\x02\u01CC\u01CB\x03\x02\x02\x02\u01CC\u01CD" +
        "\x03\x02\x02\x02\u01CDC\x03\x02\x02\x02\u01CE\u01D4\x07\v\x02\x02\u01CF" +
        "\u01D5\x05F$\x02\u01D0\u01D2\x05\xBE`\x02\u01D1\u01D3\x05J&\x02\u01D2" +
        "\u01D1\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D5\x03\x02" +
        "\x02\x02\u01D4\u01CF\x03\x02\x02\x02\u01D4\u01D0\x03\x02\x02\x02\u01D5" +
        "E\x03\x02\x02\x02\u01D6\u01D7\x07%\x02\x02\u01D7\u01DA\x05H%\x02\u01D8" +
        "\u01D9\x07 \x02\x02\u01D9\u01DB\x05\xBE`\x02\u01DA\u01D8\x03\x02\x02\x02" +
        "\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DF\x03\x02\x02\x02\u01DC\u01DD\x07" +
        "$\x02\x02\u01DD\u01DF\x05H%\x02\u01DE\u01D6\x03\x02\x02\x02\u01DE\u01DC" +
        "\x03\x02\x02\x02\u01DFG\x03\x02\x02\x02\u01E0\u01E1\t\x05\x02\x02\u01E1" +
        "I\x03\x02\x02\x02\u01E2\u01E4\x07?\x02\x02\u01E3\u01E5\x05L\'\x02\u01E4" +
        "\u01E3\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E6\x03\x02" +
        "\x02\x02\u01E6\u01E9\x07@\x02\x02\u01E7\u01E9\x05L\'\x02\u01E8\u01E2\x03" +
        "\x02\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9K\x03\x02\x02\x02\u01EA" +
        "\u01EC\x07e\x02\x02\u01EB\u01EA\x03\x02\x02\x02\u01EC\u01EF\x03\x02\x02" +
        "\x02\u01ED\u01EB\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01F0" +
        "\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01F0\u01F9\x05\x9EP\x02" +
        "\u01F1\u01F3\x07e\x02\x02\u01F2\u01F1\x03\x02\x02\x02\u01F3\u01F4\x03" +
        "\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5" +
        "\u01F6\x03\x02\x02";
    RexxParser._serializedATNSegment1 = "\x02\u01F6\u01F8\x05\x9EP\x02\u01F7\u01F2\x03\x02\x02\x02\u01F8\u01FB" +
        "\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02" +
        "\u01FAM\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FC\u01FD\x07\x0E" +
        "\x02\x02\u01FD\u01FE\x05P)\x02\u01FEO\x03\x02\x02\x02\u01FF\u0202\x05" +
        "R*\x02\u0200\u0202\x05T+\x02\u0201\u01FF\x03\x02\x02\x02\u0201\u0200\x03" +
        "\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0203" +
        "\u0204\x03\x02\x02\x02\u0204Q\x03\x02\x02\x02\u0205\u0206\x07?\x02\x02" +
        "\u0206\u0207\x05T+\x02\u0207\u0208\x07@\x02\x02\u0208S\x03\x02\x02\x02" +
        "\u0209\u020A\t\x06\x02\x02\u020AU\x03\x02\x02\x02\u020B\u020D\x07\x13" +
        "\x02\x02\u020C\u020E\x05\x9EP\x02\u020D\u020C\x03\x02\x02\x02\u020D\u020E" +
        "\x03\x02\x02\x02\u020EW\x03\x02\x02\x02\u020F\u0210\x07\x1D\x02\x02\u0210" +
        "\u0211\x05\x9EP\x02\u0211Y\x03\x02\x02\x02\u0212\u0214\x07\x1E\x02\x02" +
        "\u0213\u0215\x05T+\x02\u0214\u0213\x03\x02\x02\x02\u0214\u0215\x03\x02" +
        "\x02\x02\u0215[\x03\x02\x02\x02\u0216\u0218\x07\x1F\x02\x02\u0217\u0219" +
        "\x05T+\x02\u0218\u0217\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219" +
        "]\x03\x02\x02\x02\u021A\u021B\x07!\x02\x02\u021B_\x03\x02\x02\x02\u021C" +
        "\u0220\x07#\x02\x02\u021D\u0221\x05b2\x02\u021E\u0221\x05d3\x02\u021F" +
        "\u0221\x05f4\x02\u0220\u021D\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02" +
        "\u0220\u021F\x03\x02\x02\x02\u0221a\x03\x02\x02\x02\u0222\u0224\x07\f" +
        "\x02\x02\u0223\u0225\x05\x9EP\x02\u0224\u0223\x03\x02\x02\x02\u0224\u0225" +
        "\x03\x02\x02\x02\u0225c\x03\x02\x02\x02\u0226\u022B\x07\x19\x02\x02\u0227" +
        "\u022C\x07\x11\x02\x02\u0228\u022C\x07/\x02\x02\u0229\u022C\x05@!\x02" +
        "\u022A\u022C\x05\x9EP\x02\u022B\u0227\x03\x02\x02\x02\u022B\u0228\x03" +
        "\x02\x02\x02\u022B\u0229\x03\x02\x02\x02\u022B\u022A\x03\x02\x02\x02\u022B" +
        "\u022C\x03\x02\x02\x02\u022Ce\x03\x02\x02\x02\u022D\u022F\x07\x1A\x02" +
        "\x02\u022E\u0230\x05\x9EP\x02\u022F\u022E\x03\x02\x02\x02\u022F\u0230" +
        "\x03\x02\x02\x02\u0230g\x03\x02\x02\x02\u0231\u0232\x07&\x02\x02\u0232" +
        "\u0233\x05\x9EP\x02\u0233i\x03\x02\x02\x02\u0234\u0236\x07(\x02\x02\u0235" +
        "\u0237\x078\x02\x02\u0236\u0235\x03\x02\x02\x02\u0236\u0237\x03\x02\x02" +
        "\x02\u0237\u0238\x03\x02\x02\x02\u0238\u023A\x05l7\x02\u0239\u023B\x05" +
        "\x8AF\x02\u023A\u0239\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B" +
        "k\x03\x02\x02\x02\u023C\u0240\x05n8\x02\u023D\u0240\x05p9\x02\u023E\u0240" +
        "\x05r:\x02\u023F\u023C\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u023F" +
        "\u023E\x03\x02\x02\x02\u0240m\x03\x02\x02\x02\u0241\u0242\t\x07\x02\x02" +
        "\u0242o\x03\x02\x02\x02\u0243\u0245\x079\x02\x02\u0244\u0246\x05\x9EP" +
        "\x02\u0245\u0244\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0247" +
        "\x03\x02\x02\x02\u0247\u0248\x07>\x02\x02\u0248q\x03\x02\x02\x02\u0249" +
        "\u024A\x07:\x02\x02\u024A\u024B\x05T+\x02\u024Bs\x03\x02\x02\x02\u024C" +
        "\u024F\x07)\x02\x02\u024D\u024E\x07\x14\x02\x02\u024E\u0250\x05P)\x02" +
        "\u024F\u024D\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250u\x03\x02" +
        "\x02\x02\u0251\u0253\x07*\x02\x02\u0252\u0254\x05\x8AF\x02\u0253\u0252" +
        "\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254w\x03\x02\x02\x02\u0255" +
        "\u0257\x07+\x02\x02\u0256\u0258\x05\x9EP\x02\u0257\u0256\x03\x02\x02\x02" +
        "\u0257\u0258\x03\x02\x02\x02\u0258y\x03\x02\x02\x02\u0259\u025B\x07,\x02" +
        "\x02\u025A\u025C\x05\x9EP\x02\u025B\u025A\x03\x02\x02\x02\u025B\u025C" +
        "\x03\x02\x02\x02\u025C{\x03\x02\x02\x02\u025D\u025F\x07-\x02\x02\u025E" +
        "\u0260\x05\x9EP\x02\u025F\u025E\x03\x02\x02\x02\u025F\u0260\x03\x02\x02" +
        "\x02\u0260}\x03\x02\x02\x02\u0261\u0263\x07.\x02\x02\u0262\u0264\x05\x9E" +
        "P\x02\u0263\u0262\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\x7F" +
        "\x03\x02\x02\x02\u0265\u0269\x071\x02\x02\u0266\u026A\x05\x82B\x02\u0267" +
        "\u026A\x05@!\x02\u0268\u026A\x05> \x02\u0269\u0266\x03\x02\x02\x02\u0269" +
        "\u0267\x03\x02\x02\x02\u0269\u0268\x03\x02\x02\x02\u026A\x81\x03\x02\x02" +
        "\x02\u026B\u026C\x07%\x02\x02\u026C\u026F\x05\x84C\x02\u026D\u026E\x07" +
        " \x02\x02\u026E\u0270\x05\xBE`\x02\u026F\u026D\x03\x02\x02\x02\u026F\u0270" +
        "\x03\x02\x02\x02\u0270\u0274\x03\x02\x02\x02\u0271\u0272\x07$\x02\x02" +
        "\u0272\u0274\x05\x84C\x02\u0273\u026B\x03\x02\x02\x02\u0273\u0271\x03" +
        "\x02\x02\x02\u0274\x83\x03\x02\x02\x02\u0275\u0279\x05H%\x02\u0276\u0279" +
        "\x07\"\x02\x02\u0277\u0279\x073\x02\x02\u0278\u0275\x03\x02\x02\x02\u0278" +
        "\u0276\x03\x02\x02\x02\u0278\u0277\x03\x02\x02\x02\u0279\x85\x03\x02\x02" +
        "\x02\u027A\u0281\x076\x02\x02\u027B\u0282\x05> \x02\u027C\u0282\x05@!" +
        "\x02\u027D\u0282\x05\x9EP\x02\u027E\u0282\x07\x12\x02\x02\u027F\u0282" +
        "\x07\x16\x02\x02\u0280\u0282\x07$\x02\x02\u0281\u027B\x03\x02\x02\x02" +
        "\u0281\u027C\x03\x02\x02\x02\u0281\u027D\x03\x02\x02\x02\u0281\u027E\x03" +
        "\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0281\u0280\x03\x02\x02\x02\u0282" +
        "\x87\x03\x02\x02\x02\u0283\u0285\x078\x02\x02\u0284\u0286\x05T+\x02\u0285" +
        "\u0284\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287\u0285\x03\x02" +
        "\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288\x89\x03\x02\x02\x02\u0289\u028B" +
        "\x07e\x02\x02\u028A\u0289\x03\x02\x02\x02\u028B\u028E\x03\x02\x02\x02" +
        "\u028C\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\u028F\x03" +
        "\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F\u0298\x05\x8CG\x02\u0290" +
        "\u0292\x07e\x02\x02\u0291\u0290\x03\x02\x02\x02\u0292\u0293\x03\x02\x02" +
        "\x02\u0293\u0291\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0295" +
        "\x03\x02\x02\x02\u0295\u0297\x05\x8CG\x02\u0296\u0291\x03\x02\x02\x02" +
        "\u0297\u029A\x03\x02\x02\x02\u0298\u0296\x03\x02\x02\x02\u0298\u0299\x03" +
        "\x02\x02\x02\u0299\x8B\x03\x02\x02\x02\u029A\u0298\x03\x02\x02\x02\u029B" +
        "\u029E\x05\x90I\x02\u029C\u029E\x05\x8EH\x02\u029D\u029B\x03\x02\x02\x02" +
        "\u029D\u029C\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F\u029D\x03" +
        "\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02\u02A0\x8D\x03\x02\x02\x02\u02A1" +
        "\u02A2\t\b\x02\x02\u02A2\x8F\x03\x02\x02\x02\u02A3\u02A6\x05\x92J\x02" +
        "\u02A4\u02A6\x05\x94K\x02\u02A5\u02A3\x03\x02\x02\x02\u02A5\u02A4\x03" +
        "\x02\x02\x02\u02A6\x91\x03\x02\x02\x02\u02A7\u02AA\x07E\x02\x02\u02A8" +
        "\u02AA\x05R*\x02\u02A9\u02A7\x03\x02\x02\x02\u02A9\u02A8\x03\x02\x02\x02" +
        "\u02AA\x93\x03\x02\x02\x02\u02AB\u02AE\x05\x96L\x02\u02AC\u02AE\x05\x9A" +
        "N\x02\u02AD\u02AB\x03\x02\x02\x02\u02AD\u02AC\x03\x02\x02\x02\u02AE\x95" +
        "\x03\x02\x02\x02\u02AF\u02B3\x07B\x02\x02\u02B0\u02B1\x07G\x02\x02\u02B1" +
        "\u02B3\x05\x98M\x02\u02B2\u02AF\x03\x02\x02\x02\u02B2\u02B0\x03\x02\x02" +
        "\x02\u02B3\x97\x03\x02\x02\x02\u02B4\u02B7\x07B\x02\x02\u02B5\u02B7\x05" +
        "R*\x02\u02B6\u02B4\x03\x02\x02\x02\u02B6\u02B5\x03\x02\x02\x02\u02B7\x99" +
        "\x03\x02\x02\x02\u02B8\u02B9\t\t\x02\x02\u02B9\u02BA\x05\x98M\x02\u02BA" +
        "\x9B\x03\x02\x02\x02\u02BB\u02BF\x05T+\x02\u02BC\u02BF\x07C\x02\x02\u02BD" +
        "\u02BF\x07B\x02\x02\u02BE\u02BB\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02" +
        "\x02\u02BE\u02BD\x03\x02\x02\x02\u02BF\x9D\x03\x02\x02\x02\u02C0\u02C6" +
        "\x05\xA2R\x02\u02C1\u02C2\x05\xA0Q\x02\u02C2\u02C3\x05\xA2R\x02\u02C3" +
        "\u02C5\x03\x02\x02\x02\u02C4\u02C1\x03\x02\x02\x02\u02C5\u02C8\x03\x02" +
        "\x02\x02\u02C6\u02C4\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7" +
        "\x9F\x03\x02\x02\x02\u02C8\u02C6\x03\x02\x02\x02\u02C9\u02CA\t\n\x02\x02" +
        "\u02CA\xA1\x03\x02\x02\x02\u02CB\u02D0\x05\xA4S\x02\u02CC\u02CD\x07R\x02" +
        "\x02\u02CD\u02CF\x05\xA4S\x02\u02CE\u02CC\x03\x02\x02\x02\u02CF\u02D2" +
        "\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02" +
        "\u02D1\xA3\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3\u02D9\x05" +
        "\xACW\x02\u02D4\u02D5\x05\xA6T\x02\u02D5\u02D6\x05\xACW\x02\u02D6\u02D8" +
        "\x03\x02\x02\x02\u02D7\u02D4\x03\x02\x02\x02\u02D8\u02DB\x03\x02\x02\x02" +
        "\u02D9\u02D7\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\xA5\x03" +
        "\x02\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DC\u02DF\x05\xA8U\x02\u02DD" +
        "\u02DF\x05\xAAV\x02\u02DE\u02DC\x03\x02\x02\x02\u02DE\u02DD\x03\x02\x02" +
        "\x02\u02DF\xA7\x03\x02\x02\x02\u02E0\u02E1\t\v\x02\x02\u02E1\xA9\x03\x02" +
        "\x02\x02\u02E2\u02E3\t\f\x02\x02\u02E3\xAB\x03\x02\x02\x02\u02E4\u02EB" +
        "\x05\xAEX\x02\u02E5\u02E7\x07F\x02\x02\u02E6\u02E5\x03\x02\x02\x02\u02E6" +
        "\u02E7\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8\u02EA\x05\xAE" +
        "X\x02\u02E9\u02E6\x03\x02\x02\x02\u02EA\u02ED\x03\x02\x02\x02\u02EB\u02E9" +
        "\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\xAD\x03\x02\x02\x02" +
        "\u02ED\u02EB\x03\x02\x02\x02\u02EE\u02F4\x05\xB2Z\x02\u02EF\u02F0\x05" +
        "\xB0Y\x02\u02F0\u02F1\x05\xB2Z\x02\u02F1\u02F3\x03\x02\x02\x02\u02F2\u02EF" +
        "\x03\x02\x02\x02\u02F3\u02F6\x03\x02\x02\x02\u02F4\u02F2\x03\x02\x02\x02" +
        "\u02F4\u02F5\x03\x02\x02\x02\u02F5\xAF\x03\x02\x02\x02\u02F6\u02F4\x03" +
        "\x02\x02\x02\u02F7\u02F8\t\t\x02\x02\u02F8\xB1\x03\x02\x02\x02\u02F9\u02FF" +
        "\x05\xB6\\\x02\u02FA\u02FB\x05\xB4[\x02\u02FB\u02FC\x05\xB6\\\x02\u02FC" +
        "\u02FE\x03\x02\x02\x02\u02FD\u02FA\x03\x02\x02\x02\u02FE\u0301\x03\x02" +
        "\x02\x02\u02FF\u02FD\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300" +
        "\xB3\x03\x02\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0302\u0303\t\r\x02\x02" +
        "\u0303\xB5\x03\x02\x02\x02\u0304\u0309\x05\xB8]\x02\u0305\u0306\x07N\x02" +
        "\x02\u0306\u0308\x05\xB8]\x02\u0307\u0305\x03\x02\x02\x02\u0308\u030B" +
        "\x03\x02\x02\x02\u0309\u0307\x03\x02\x02\x02\u0309\u030A\x03\x02\x02\x02" +
        "\u030A\xB7\x03\x02\x02\x02\u030B\u0309\x03\x02\x02\x02\u030C\u030E\t\x0E" +
        "\x02\x02\u030D\u030C\x03\x02\x02\x02\u030E\u0311\x03\x02\x02\x02\u030F" +
        "\u030D\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02\u0310\u0312\x03\x02" +
        "\x02\x02\u0311\u030F\x03\x02\x02\x02\u0312\u0313\x05\xBA^\x02\u0313\xB9" +
        "\x03\x02\x02\x02\u0314\u031C\x05\xBC_\x02\u0315\u0316\x07?\x02\x02\u0316" +
        "\u0317\x05\x9EP\x02\u0317\u0318\x07@\x02\x02\u0318\u031C\x03\x02\x02\x02" +
        "\u0319\u031C\x05\x9CO\x02\u031A\u031C\x07E\x02\x02\u031B\u0314\x03\x02" +
        "\x02\x02\u031B\u0315\x03\x02\x02\x02\u031B\u0319\x03\x02\x02\x02\u031B" +
        "\u031A\x03\x02\x02\x02\u031C\xBB\x03\x02\x02\x02\u031D\u031E\x05\xBE`" +
        "\x02\u031E\u031F\x05\xC0a\x02\u031F\xBD\x03\x02\x02\x02\u0320\u0329\x07" +
        "\b\x02\x02\u0321\u0329\x07\t\x02\x02\u0322\u0329\x07\f\x02\x02\u0323\u0329" +
        "\x07\x19\x02\x02\u0324\u0329\x07\x1A\x02\x02\u0325\u0329\x076\x02\x02" +
        "\u0326\u0329\x079\x02\x02\u0327\u0329\x05> \x02\u0328\u0320\x03\x02\x02" +
        "\x02\u0328\u0321\x03\x02\x02\x02\u0328\u0322\x03\x02\x02\x02\u0328\u0323" +
        "\x03\x02\x02\x02\u0328\u0324\x03\x02\x02\x02\u0328\u0325\x03\x02\x02\x02" +
        "\u0328\u0326\x03\x02\x02\x02\u0328\u0327\x03\x02\x02\x02\u0329\xBF\x03" +
        "\x02\x02\x02\u032A\u032C\x07?\x02\x02\u032B\u032D\x05L\'\x02\u032C\u032B" +
        "\x03\x02\x02\x02\u032C\u032D\x03\x02\x02\x02\u032D\u032E\x03\x02\x02\x02" +
        "\u032E\u032F\x07@\x02\x02\u032F\xC1\x03\x02\x02\x02o\xC6\xC9\xCE\xD3\xD6" +
        "\xDA\xE3\xE8\xF1\xF6\xF8\xFD\u0118\u011F\u0123\u0126\u012A\u012E\u0131" +
        "\u0135\u0139\u013D\u0140\u0144\u0147\u014B\u014E\u0152\u0155\u0159\u015C" +
        "\u0160\u0163\u0165\u0174\u017B\u0182\u0186\u018A\u0190\u0198\u019D\u01A2" +
        "\u01A5\u01AC\u01B5\u01B9\u01BE\u01C1\u01C5\u01CC\u01D2\u01D4\u01DA\u01DE" +
        "\u01E4\u01E8\u01ED\u01F4\u01F9\u0201\u0203\u020D\u0214\u0218\u0220\u0224" +
        "\u022B\u022F\u0236\u023A\u023F\u0245\u024F\u0253\u0257\u025B\u025F\u0263" +
        "\u0269\u026F\u0273\u0278\u0281\u0287\u028C\u0293\u0298\u029D\u029F\u02A5" +
        "\u02A9\u02AD\u02B2\u02B6\u02BE\u02C6\u02D0\u02D9\u02DE\u02E6\u02EB\u02F4" +
        "\u02FF\u0309\u030F\u031B\u0328\u032C";
    RexxParser._serializedATN = Utils.join([
        RexxParser._serializedATNSegment0,
        RexxParser._serializedATNSegment1,
    ], "");
    return RexxParser;
}(Parser_1.Parser));
exports.RexxParser = RexxParser;
var FileContext = /** @class */ (function (_super) {
    __extends(FileContext, _super);
    function FileContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FileContext.prototype.program_ = function () {
        return this.getRuleContext(0, Program_Context);
    };
    FileContext.prototype.EOF = function () { return this.getToken(RexxParser.EOF, 0); };
    Object.defineProperty(FileContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_file; },
        enumerable: true,
        configurable: true
    });
    // @Override
    FileContext.prototype.enterRule = function (listener) {
        if (listener.enterFile) {
            listener.enterFile(this);
        }
    };
    // @Override
    FileContext.prototype.exitRule = function (listener) {
        if (listener.exitFile) {
            listener.exitFile(this);
        }
    };
    // @Override
    FileContext.prototype.accept = function (visitor) {
        if (visitor.visitFile) {
            return visitor.visitFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FileContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FileContext = FileContext;
var Program_Context = /** @class */ (function (_super) {
    __extends(Program_Context, _super);
    function Program_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Program_Context.prototype.ncl = function () {
        return this.tryGetRuleContext(0, NclContext);
    };
    Program_Context.prototype.instruction_list = function () {
        return this.tryGetRuleContext(0, Instruction_listContext);
    };
    Object.defineProperty(Program_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_program_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Program_Context.prototype.enterRule = function (listener) {
        if (listener.enterProgram_) {
            listener.enterProgram_(this);
        }
    };
    // @Override
    Program_Context.prototype.exitRule = function (listener) {
        if (listener.exitProgram_) {
            listener.exitProgram_(this);
        }
    };
    // @Override
    Program_Context.prototype.accept = function (visitor) {
        if (visitor.visitProgram_) {
            return visitor.visitProgram_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Program_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Program_Context = Program_Context;
var NclContext = /** @class */ (function (_super) {
    __extends(NclContext, _super);
    function NclContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NclContext.prototype.null_clause = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Null_clauseContext);
        }
        else {
            return this.getRuleContext(i, Null_clauseContext);
        }
    };
    Object.defineProperty(NclContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_ncl; },
        enumerable: true,
        configurable: true
    });
    // @Override
    NclContext.prototype.enterRule = function (listener) {
        if (listener.enterNcl) {
            listener.enterNcl(this);
        }
    };
    // @Override
    NclContext.prototype.exitRule = function (listener) {
        if (listener.exitNcl) {
            listener.exitNcl(this);
        }
    };
    // @Override
    NclContext.prototype.accept = function (visitor) {
        if (visitor.visitNcl) {
            return visitor.visitNcl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NclContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.NclContext = NclContext;
var Null_clauseContext = /** @class */ (function (_super) {
    __extends(Null_clauseContext, _super);
    function Null_clauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Null_clauseContext.prototype.delim = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DelimContext);
        }
        else {
            return this.getRuleContext(i, DelimContext);
        }
    };
    Null_clauseContext.prototype.label_list = function () {
        return this.tryGetRuleContext(0, Label_listContext);
    };
    Null_clauseContext.prototype.include_statement = function () {
        return this.tryGetRuleContext(0, Include_statementContext);
    };
    Object.defineProperty(Null_clauseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_null_clause; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Null_clauseContext.prototype.enterRule = function (listener) {
        if (listener.enterNull_clause) {
            listener.enterNull_clause(this);
        }
    };
    // @Override
    Null_clauseContext.prototype.exitRule = function (listener) {
        if (listener.exitNull_clause) {
            listener.exitNull_clause(this);
        }
    };
    // @Override
    Null_clauseContext.prototype.accept = function (visitor) {
        if (visitor.visitNull_clause) {
            return visitor.visitNull_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Null_clauseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Null_clauseContext = Null_clauseContext;
var DelimContext = /** @class */ (function (_super) {
    __extends(DelimContext, _super);
    function DelimContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DelimContext.prototype.SEMICOL = function () { return this.tryGetToken(RexxParser.SEMICOL, 0); };
    DelimContext.prototype.EOL = function () { return this.tryGetToken(RexxParser.EOL, 0); };
    Object.defineProperty(DelimContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_delim; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DelimContext.prototype.enterRule = function (listener) {
        if (listener.enterDelim) {
            listener.enterDelim(this);
        }
    };
    // @Override
    DelimContext.prototype.exitRule = function (listener) {
        if (listener.exitDelim) {
            listener.exitDelim(this);
        }
    };
    // @Override
    DelimContext.prototype.accept = function (visitor) {
        if (visitor.visitDelim) {
            return visitor.visitDelim(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DelimContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DelimContext = DelimContext;
var Label_listContext = /** @class */ (function (_super) {
    __extends(Label_listContext, _super);
    function Label_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Label_listContext.prototype.label = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(LabelContext);
        }
        else {
            return this.getRuleContext(i, LabelContext);
        }
    };
    Label_listContext.prototype.COLON = function (i) {
        if (i === undefined) {
            return this.getTokens(RexxParser.COLON);
        }
        else {
            return this.getToken(RexxParser.COLON, i);
        }
    };
    Label_listContext.prototype.delim = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DelimContext);
        }
        else {
            return this.getRuleContext(i, DelimContext);
        }
    };
    Object.defineProperty(Label_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_label_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Label_listContext.prototype.enterRule = function (listener) {
        if (listener.enterLabel_list) {
            listener.enterLabel_list(this);
        }
    };
    // @Override
    Label_listContext.prototype.exitRule = function (listener) {
        if (listener.exitLabel_list) {
            listener.exitLabel_list(this);
        }
    };
    // @Override
    Label_listContext.prototype.accept = function (visitor) {
        if (visitor.visitLabel_list) {
            return visitor.visitLabel_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Label_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Label_listContext = Label_listContext;
var LabelContext = /** @class */ (function (_super) {
    __extends(LabelContext, _super);
    function LabelContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabelContext.prototype.VAR_SYMBOL = function () { return this.tryGetToken(RexxParser.VAR_SYMBOL, 0); };
    LabelContext.prototype.CONST_SYMBOL = function () { return this.tryGetToken(RexxParser.CONST_SYMBOL, 0); };
    LabelContext.prototype.NUMBER = function () { return this.tryGetToken(RexxParser.NUMBER, 0); };
    Object.defineProperty(LabelContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_label; },
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
var Include_statementContext = /** @class */ (function (_super) {
    __extends(Include_statementContext, _super);
    function Include_statementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Include_statementContext.prototype.STMT_INCLUDE = function () { return this.getToken(RexxParser.STMT_INCLUDE, 0); };
    Object.defineProperty(Include_statementContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_include_statement; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Include_statementContext.prototype.enterRule = function (listener) {
        if (listener.enterInclude_statement) {
            listener.enterInclude_statement(this);
        }
    };
    // @Override
    Include_statementContext.prototype.exitRule = function (listener) {
        if (listener.exitInclude_statement) {
            listener.exitInclude_statement(this);
        }
    };
    // @Override
    Include_statementContext.prototype.accept = function (visitor) {
        if (visitor.visitInclude_statement) {
            return visitor.visitInclude_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Include_statementContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Include_statementContext = Include_statementContext;
var Instruction_listContext = /** @class */ (function (_super) {
    __extends(Instruction_listContext, _super);
    function Instruction_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Instruction_listContext.prototype.instruction = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InstructionContext);
        }
        else {
            return this.getRuleContext(i, InstructionContext);
        }
    };
    Object.defineProperty(Instruction_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_instruction_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Instruction_listContext.prototype.enterRule = function (listener) {
        if (listener.enterInstruction_list) {
            listener.enterInstruction_list(this);
        }
    };
    // @Override
    Instruction_listContext.prototype.exitRule = function (listener) {
        if (listener.exitInstruction_list) {
            listener.exitInstruction_list(this);
        }
    };
    // @Override
    Instruction_listContext.prototype.accept = function (visitor) {
        if (visitor.visitInstruction_list) {
            return visitor.visitInstruction_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Instruction_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Instruction_listContext = Instruction_listContext;
var InstructionContext = /** @class */ (function (_super) {
    __extends(InstructionContext, _super);
    function InstructionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InstructionContext.prototype.group_ = function () {
        return this.tryGetRuleContext(0, Group_Context);
    };
    InstructionContext.prototype.single_instruction = function () {
        return this.tryGetRuleContext(0, Single_instructionContext);
    };
    InstructionContext.prototype.ncl = function () {
        return this.tryGetRuleContext(0, NclContext);
    };
    Object.defineProperty(InstructionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_instruction; },
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
var Single_instructionContext = /** @class */ (function (_super) {
    __extends(Single_instructionContext, _super);
    function Single_instructionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Single_instructionContext.prototype.assignment = function () {
        return this.tryGetRuleContext(0, AssignmentContext);
    };
    Single_instructionContext.prototype.keyword_instruction = function () {
        return this.tryGetRuleContext(0, Keyword_instructionContext);
    };
    Single_instructionContext.prototype.command_ = function () {
        return this.tryGetRuleContext(0, Command_Context);
    };
    Object.defineProperty(Single_instructionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_single_instruction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Single_instructionContext.prototype.enterRule = function (listener) {
        if (listener.enterSingle_instruction) {
            listener.enterSingle_instruction(this);
        }
    };
    // @Override
    Single_instructionContext.prototype.exitRule = function (listener) {
        if (listener.exitSingle_instruction) {
            listener.exitSingle_instruction(this);
        }
    };
    // @Override
    Single_instructionContext.prototype.accept = function (visitor) {
        if (visitor.visitSingle_instruction) {
            return visitor.visitSingle_instruction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Single_instructionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Single_instructionContext = Single_instructionContext;
var AssignmentContext = /** @class */ (function (_super) {
    __extends(AssignmentContext, _super);
    function AssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentContext.prototype.EQ = function () { return this.getToken(RexxParser.EQ, 0); };
    AssignmentContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    AssignmentContext.prototype.VAR_SYMBOL = function () { return this.tryGetToken(RexxParser.VAR_SYMBOL, 0); };
    AssignmentContext.prototype.SPECIAL_VAR = function () { return this.tryGetToken(RexxParser.SPECIAL_VAR, 0); };
    AssignmentContext.prototype.CONST_SYMBOL = function () { return this.tryGetToken(RexxParser.CONST_SYMBOL, 0); };
    Object.defineProperty(AssignmentContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_assignment; },
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
var Keyword_instructionContext = /** @class */ (function (_super) {
    __extends(Keyword_instructionContext, _super);
    function Keyword_instructionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Keyword_instructionContext.prototype.address_ = function () {
        return this.tryGetRuleContext(0, Address_Context);
    };
    Keyword_instructionContext.prototype.arg_ = function () {
        return this.tryGetRuleContext(0, Arg_Context);
    };
    Keyword_instructionContext.prototype.call_ = function () {
        return this.tryGetRuleContext(0, Call_Context);
    };
    Keyword_instructionContext.prototype.drop_ = function () {
        return this.tryGetRuleContext(0, Drop_Context);
    };
    Keyword_instructionContext.prototype.exit_ = function () {
        return this.tryGetRuleContext(0, Exit_Context);
    };
    Keyword_instructionContext.prototype.interpret_ = function () {
        return this.tryGetRuleContext(0, Interpret_Context);
    };
    Keyword_instructionContext.prototype.iterate_ = function () {
        return this.tryGetRuleContext(0, Iterate_Context);
    };
    Keyword_instructionContext.prototype.leave_ = function () {
        return this.tryGetRuleContext(0, Leave_Context);
    };
    Keyword_instructionContext.prototype.nop_ = function () {
        return this.tryGetRuleContext(0, Nop_Context);
    };
    Keyword_instructionContext.prototype.numeric_ = function () {
        return this.tryGetRuleContext(0, Numeric_Context);
    };
    Keyword_instructionContext.prototype.options_ = function () {
        return this.tryGetRuleContext(0, Options_Context);
    };
    Keyword_instructionContext.prototype.parse_ = function () {
        return this.tryGetRuleContext(0, Parse_Context);
    };
    Keyword_instructionContext.prototype.procedure_ = function () {
        return this.tryGetRuleContext(0, Procedure_Context);
    };
    Keyword_instructionContext.prototype.pull_ = function () {
        return this.tryGetRuleContext(0, Pull_Context);
    };
    Keyword_instructionContext.prototype.push_ = function () {
        return this.tryGetRuleContext(0, Push_Context);
    };
    Keyword_instructionContext.prototype.queue_ = function () {
        return this.tryGetRuleContext(0, Queue_Context);
    };
    Keyword_instructionContext.prototype.return_ = function () {
        return this.tryGetRuleContext(0, Return_Context);
    };
    Keyword_instructionContext.prototype.say_ = function () {
        return this.tryGetRuleContext(0, Say_Context);
    };
    Keyword_instructionContext.prototype.signal_ = function () {
        return this.tryGetRuleContext(0, Signal_Context);
    };
    Keyword_instructionContext.prototype.trace_ = function () {
        return this.tryGetRuleContext(0, Trace_Context);
    };
    Keyword_instructionContext.prototype.upper_ = function () {
        return this.tryGetRuleContext(0, Upper_Context);
    };
    Object.defineProperty(Keyword_instructionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_keyword_instruction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Keyword_instructionContext.prototype.enterRule = function (listener) {
        if (listener.enterKeyword_instruction) {
            listener.enterKeyword_instruction(this);
        }
    };
    // @Override
    Keyword_instructionContext.prototype.exitRule = function (listener) {
        if (listener.exitKeyword_instruction) {
            listener.exitKeyword_instruction(this);
        }
    };
    // @Override
    Keyword_instructionContext.prototype.accept = function (visitor) {
        if (visitor.visitKeyword_instruction) {
            return visitor.visitKeyword_instruction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Keyword_instructionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Keyword_instructionContext = Keyword_instructionContext;
var Command_Context = /** @class */ (function (_super) {
    __extends(Command_Context, _super);
    function Command_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Command_Context.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Command_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_command_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Command_Context.prototype.enterRule = function (listener) {
        if (listener.enterCommand_) {
            listener.enterCommand_(this);
        }
    };
    // @Override
    Command_Context.prototype.exitRule = function (listener) {
        if (listener.exitCommand_) {
            listener.exitCommand_(this);
        }
    };
    // @Override
    Command_Context.prototype.accept = function (visitor) {
        if (visitor.visitCommand_) {
            return visitor.visitCommand_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Command_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Command_Context = Command_Context;
var Group_Context = /** @class */ (function (_super) {
    __extends(Group_Context, _super);
    function Group_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Group_Context.prototype.do_ = function () {
        return this.tryGetRuleContext(0, Do_Context);
    };
    Group_Context.prototype.if_ = function () {
        return this.tryGetRuleContext(0, If_Context);
    };
    Group_Context.prototype.select_ = function () {
        return this.tryGetRuleContext(0, Select_Context);
    };
    Object.defineProperty(Group_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_group_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Group_Context.prototype.enterRule = function (listener) {
        if (listener.enterGroup_) {
            listener.enterGroup_(this);
        }
    };
    // @Override
    Group_Context.prototype.exitRule = function (listener) {
        if (listener.exitGroup_) {
            listener.exitGroup_(this);
        }
    };
    // @Override
    Group_Context.prototype.accept = function (visitor) {
        if (visitor.visitGroup_) {
            return visitor.visitGroup_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Group_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Group_Context = Group_Context;
var Do_Context = /** @class */ (function (_super) {
    __extends(Do_Context, _super);
    function Do_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Do_Context.prototype.KWD_DO = function () { return this.getToken(RexxParser.KWD_DO, 0); };
    Do_Context.prototype.ncl = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(NclContext);
        }
        else {
            return this.getRuleContext(i, NclContext);
        }
    };
    Do_Context.prototype.KWD_END = function () { return this.getToken(RexxParser.KWD_END, 0); };
    Do_Context.prototype.do_rep = function () {
        return this.tryGetRuleContext(0, Do_repContext);
    };
    Do_Context.prototype.do_cond = function () {
        return this.tryGetRuleContext(0, Do_condContext);
    };
    Do_Context.prototype.instruction_list = function () {
        return this.tryGetRuleContext(0, Instruction_listContext);
    };
    Do_Context.prototype.var_symbol = function () {
        return this.tryGetRuleContext(0, Var_symbolContext);
    };
    Object.defineProperty(Do_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_do_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Do_Context.prototype.enterRule = function (listener) {
        if (listener.enterDo_) {
            listener.enterDo_(this);
        }
    };
    // @Override
    Do_Context.prototype.exitRule = function (listener) {
        if (listener.exitDo_) {
            listener.exitDo_(this);
        }
    };
    // @Override
    Do_Context.prototype.accept = function (visitor) {
        if (visitor.visitDo_) {
            return visitor.visitDo_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Do_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Do_Context = Do_Context;
var Do_repContext = /** @class */ (function (_super) {
    __extends(Do_repContext, _super);
    function Do_repContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Do_repContext.prototype.assignment = function () {
        return this.tryGetRuleContext(0, AssignmentContext);
    };
    Do_repContext.prototype.do_cnt = function () {
        return this.tryGetRuleContext(0, Do_cntContext);
    };
    Do_repContext.prototype.KWD_FOREVER = function () { return this.tryGetToken(RexxParser.KWD_FOREVER, 0); };
    Do_repContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Do_repContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_do_rep; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Do_repContext.prototype.enterRule = function (listener) {
        if (listener.enterDo_rep) {
            listener.enterDo_rep(this);
        }
    };
    // @Override
    Do_repContext.prototype.exitRule = function (listener) {
        if (listener.exitDo_rep) {
            listener.exitDo_rep(this);
        }
    };
    // @Override
    Do_repContext.prototype.accept = function (visitor) {
        if (visitor.visitDo_rep) {
            return visitor.visitDo_rep(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Do_repContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Do_repContext = Do_repContext;
var Do_cntContext = /** @class */ (function (_super) {
    __extends(Do_cntContext, _super);
    function Do_cntContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Do_cntContext.prototype.dot = function () {
        return this.tryGetRuleContext(0, DotContext);
    };
    Do_cntContext.prototype.dob = function () {
        return this.tryGetRuleContext(0, DobContext);
    };
    Do_cntContext.prototype.dof = function () {
        return this.tryGetRuleContext(0, DofContext);
    };
    Object.defineProperty(Do_cntContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_do_cnt; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Do_cntContext.prototype.enterRule = function (listener) {
        if (listener.enterDo_cnt) {
            listener.enterDo_cnt(this);
        }
    };
    // @Override
    Do_cntContext.prototype.exitRule = function (listener) {
        if (listener.exitDo_cnt) {
            listener.exitDo_cnt(this);
        }
    };
    // @Override
    Do_cntContext.prototype.accept = function (visitor) {
        if (visitor.visitDo_cnt) {
            return visitor.visitDo_cnt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Do_cntContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Do_cntContext = Do_cntContext;
var DotContext = /** @class */ (function (_super) {
    __extends(DotContext, _super);
    function DotContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DotContext.prototype.KWD_TO = function () { return this.getToken(RexxParser.KWD_TO, 0); };
    DotContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(DotContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_dot; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DotContext.prototype.enterRule = function (listener) {
        if (listener.enterDot) {
            listener.enterDot(this);
        }
    };
    // @Override
    DotContext.prototype.exitRule = function (listener) {
        if (listener.exitDot) {
            listener.exitDot(this);
        }
    };
    // @Override
    DotContext.prototype.accept = function (visitor) {
        if (visitor.visitDot) {
            return visitor.visitDot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DotContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DotContext = DotContext;
var DobContext = /** @class */ (function (_super) {
    __extends(DobContext, _super);
    function DobContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DobContext.prototype.KWD_BY = function () { return this.getToken(RexxParser.KWD_BY, 0); };
    DobContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(DobContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_dob; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DobContext.prototype.enterRule = function (listener) {
        if (listener.enterDob) {
            listener.enterDob(this);
        }
    };
    // @Override
    DobContext.prototype.exitRule = function (listener) {
        if (listener.exitDob) {
            listener.exitDob(this);
        }
    };
    // @Override
    DobContext.prototype.accept = function (visitor) {
        if (visitor.visitDob) {
            return visitor.visitDob(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DobContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DobContext = DobContext;
var DofContext = /** @class */ (function (_super) {
    __extends(DofContext, _super);
    function DofContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DofContext.prototype.KWD_FOR = function () { return this.getToken(RexxParser.KWD_FOR, 0); };
    DofContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(DofContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_dof; },
        enumerable: true,
        configurable: true
    });
    // @Override
    DofContext.prototype.enterRule = function (listener) {
        if (listener.enterDof) {
            listener.enterDof(this);
        }
    };
    // @Override
    DofContext.prototype.exitRule = function (listener) {
        if (listener.exitDof) {
            listener.exitDof(this);
        }
    };
    // @Override
    DofContext.prototype.accept = function (visitor) {
        if (visitor.visitDof) {
            return visitor.visitDof(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DofContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.DofContext = DofContext;
var Do_condContext = /** @class */ (function (_super) {
    __extends(Do_condContext, _super);
    function Do_condContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Do_condContext.prototype.KWD_WHILE = function () { return this.tryGetToken(RexxParser.KWD_WHILE, 0); };
    Do_condContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Do_condContext.prototype.KWD_UNTIL = function () { return this.tryGetToken(RexxParser.KWD_UNTIL, 0); };
    Object.defineProperty(Do_condContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_do_cond; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Do_condContext.prototype.enterRule = function (listener) {
        if (listener.enterDo_cond) {
            listener.enterDo_cond(this);
        }
    };
    // @Override
    Do_condContext.prototype.exitRule = function (listener) {
        if (listener.exitDo_cond) {
            listener.exitDo_cond(this);
        }
    };
    // @Override
    Do_condContext.prototype.accept = function (visitor) {
        if (visitor.visitDo_cond) {
            return visitor.visitDo_cond(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Do_condContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Do_condContext = Do_condContext;
var If_Context = /** @class */ (function (_super) {
    __extends(If_Context, _super);
    function If_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    If_Context.prototype.KWD_IF = function () { return this.getToken(RexxParser.KWD_IF, 0); };
    If_Context.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    If_Context.prototype.then_ = function () {
        return this.getRuleContext(0, Then_Context);
    };
    If_Context.prototype.delim = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DelimContext);
        }
        else {
            return this.getRuleContext(i, DelimContext);
        }
    };
    If_Context.prototype.else_ = function () {
        return this.tryGetRuleContext(0, Else_Context);
    };
    Object.defineProperty(If_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_if_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    If_Context.prototype.enterRule = function (listener) {
        if (listener.enterIf_) {
            listener.enterIf_(this);
        }
    };
    // @Override
    If_Context.prototype.exitRule = function (listener) {
        if (listener.exitIf_) {
            listener.exitIf_(this);
        }
    };
    // @Override
    If_Context.prototype.accept = function (visitor) {
        if (visitor.visitIf_) {
            return visitor.visitIf_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return If_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.If_Context = If_Context;
var Then_Context = /** @class */ (function (_super) {
    __extends(Then_Context, _super);
    function Then_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Then_Context.prototype.KWD_THEN = function () { return this.getToken(RexxParser.KWD_THEN, 0); };
    Then_Context.prototype.instruction = function () {
        return this.getRuleContext(0, InstructionContext);
    };
    Then_Context.prototype.ncl = function () {
        return this.tryGetRuleContext(0, NclContext);
    };
    Object.defineProperty(Then_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_then_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Then_Context.prototype.enterRule = function (listener) {
        if (listener.enterThen_) {
            listener.enterThen_(this);
        }
    };
    // @Override
    Then_Context.prototype.exitRule = function (listener) {
        if (listener.exitThen_) {
            listener.exitThen_(this);
        }
    };
    // @Override
    Then_Context.prototype.accept = function (visitor) {
        if (visitor.visitThen_) {
            return visitor.visitThen_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Then_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Then_Context = Then_Context;
var Else_Context = /** @class */ (function (_super) {
    __extends(Else_Context, _super);
    function Else_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Else_Context.prototype.KWD_ELSE = function () { return this.getToken(RexxParser.KWD_ELSE, 0); };
    Else_Context.prototype.instruction = function () {
        return this.getRuleContext(0, InstructionContext);
    };
    Else_Context.prototype.ncl = function () {
        return this.tryGetRuleContext(0, NclContext);
    };
    Object.defineProperty(Else_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_else_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Else_Context.prototype.enterRule = function (listener) {
        if (listener.enterElse_) {
            listener.enterElse_(this);
        }
    };
    // @Override
    Else_Context.prototype.exitRule = function (listener) {
        if (listener.exitElse_) {
            listener.exitElse_(this);
        }
    };
    // @Override
    Else_Context.prototype.accept = function (visitor) {
        if (visitor.visitElse_) {
            return visitor.visitElse_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Else_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Else_Context = Else_Context;
var Select_Context = /** @class */ (function (_super) {
    __extends(Select_Context, _super);
    function Select_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Select_Context.prototype.KWD_SELECT = function () { return this.getToken(RexxParser.KWD_SELECT, 0); };
    Select_Context.prototype.select_body = function () {
        return this.getRuleContext(0, Select_bodyContext);
    };
    Select_Context.prototype.KWD_END = function () { return this.getToken(RexxParser.KWD_END, 0); };
    Select_Context.prototype.delim = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DelimContext);
        }
        else {
            return this.getRuleContext(i, DelimContext);
        }
    };
    Select_Context.prototype.ncl = function () {
        return this.tryGetRuleContext(0, NclContext);
    };
    Object.defineProperty(Select_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_select_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Select_Context.prototype.enterRule = function (listener) {
        if (listener.enterSelect_) {
            listener.enterSelect_(this);
        }
    };
    // @Override
    Select_Context.prototype.exitRule = function (listener) {
        if (listener.exitSelect_) {
            listener.exitSelect_(this);
        }
    };
    // @Override
    Select_Context.prototype.accept = function (visitor) {
        if (visitor.visitSelect_) {
            return visitor.visitSelect_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Select_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Select_Context = Select_Context;
var Select_bodyContext = /** @class */ (function (_super) {
    __extends(Select_bodyContext, _super);
    function Select_bodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Select_bodyContext.prototype.when_ = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(When_Context);
        }
        else {
            return this.getRuleContext(i, When_Context);
        }
    };
    Select_bodyContext.prototype.otherwise_ = function () {
        return this.tryGetRuleContext(0, Otherwise_Context);
    };
    Object.defineProperty(Select_bodyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_select_body; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Select_bodyContext.prototype.enterRule = function (listener) {
        if (listener.enterSelect_body) {
            listener.enterSelect_body(this);
        }
    };
    // @Override
    Select_bodyContext.prototype.exitRule = function (listener) {
        if (listener.exitSelect_body) {
            listener.exitSelect_body(this);
        }
    };
    // @Override
    Select_bodyContext.prototype.accept = function (visitor) {
        if (visitor.visitSelect_body) {
            return visitor.visitSelect_body(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Select_bodyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Select_bodyContext = Select_bodyContext;
var When_Context = /** @class */ (function (_super) {
    __extends(When_Context, _super);
    function When_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    When_Context.prototype.KWD_WHEN = function () { return this.getToken(RexxParser.KWD_WHEN, 0); };
    When_Context.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    When_Context.prototype.then_ = function () {
        return this.getRuleContext(0, Then_Context);
    };
    When_Context.prototype.delim = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DelimContext);
        }
        else {
            return this.getRuleContext(i, DelimContext);
        }
    };
    Object.defineProperty(When_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_when_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    When_Context.prototype.enterRule = function (listener) {
        if (listener.enterWhen_) {
            listener.enterWhen_(this);
        }
    };
    // @Override
    When_Context.prototype.exitRule = function (listener) {
        if (listener.exitWhen_) {
            listener.exitWhen_(this);
        }
    };
    // @Override
    When_Context.prototype.accept = function (visitor) {
        if (visitor.visitWhen_) {
            return visitor.visitWhen_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return When_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.When_Context = When_Context;
var Otherwise_Context = /** @class */ (function (_super) {
    __extends(Otherwise_Context, _super);
    function Otherwise_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Otherwise_Context.prototype.KWD_OTHERWISE = function () { return this.getToken(RexxParser.KWD_OTHERWISE, 0); };
    Otherwise_Context.prototype.delim = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(DelimContext);
        }
        else {
            return this.getRuleContext(i, DelimContext);
        }
    };
    Otherwise_Context.prototype.instruction_list = function () {
        return this.tryGetRuleContext(0, Instruction_listContext);
    };
    Object.defineProperty(Otherwise_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_otherwise_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Otherwise_Context.prototype.enterRule = function (listener) {
        if (listener.enterOtherwise_) {
            listener.enterOtherwise_(this);
        }
    };
    // @Override
    Otherwise_Context.prototype.exitRule = function (listener) {
        if (listener.exitOtherwise_) {
            listener.exitOtherwise_(this);
        }
    };
    // @Override
    Otherwise_Context.prototype.accept = function (visitor) {
        if (visitor.visitOtherwise_) {
            return visitor.visitOtherwise_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Otherwise_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Otherwise_Context = Otherwise_Context;
var Address_Context = /** @class */ (function (_super) {
    __extends(Address_Context, _super);
    function Address_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Address_Context.prototype.KWD_ADDRESS = function () { return this.getToken(RexxParser.KWD_ADDRESS, 0); };
    Address_Context.prototype.taken_constant = function () {
        return this.tryGetRuleContext(0, Taken_constantContext);
    };
    Address_Context.prototype.valueexp = function () {
        return this.tryGetRuleContext(0, ValueexpContext);
    };
    Address_Context.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Address_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_address_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Address_Context.prototype.enterRule = function (listener) {
        if (listener.enterAddress_) {
            listener.enterAddress_(this);
        }
    };
    // @Override
    Address_Context.prototype.exitRule = function (listener) {
        if (listener.exitAddress_) {
            listener.exitAddress_(this);
        }
    };
    // @Override
    Address_Context.prototype.accept = function (visitor) {
        if (visitor.visitAddress_) {
            return visitor.visitAddress_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Address_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Address_Context = Address_Context;
var Taken_constantContext = /** @class */ (function (_super) {
    __extends(Taken_constantContext, _super);
    function Taken_constantContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Taken_constantContext.prototype.symbol = function () {
        return this.tryGetRuleContext(0, SymbolContext);
    };
    Taken_constantContext.prototype.STRING = function () { return this.tryGetToken(RexxParser.STRING, 0); };
    Object.defineProperty(Taken_constantContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_taken_constant; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Taken_constantContext.prototype.enterRule = function (listener) {
        if (listener.enterTaken_constant) {
            listener.enterTaken_constant(this);
        }
    };
    // @Override
    Taken_constantContext.prototype.exitRule = function (listener) {
        if (listener.exitTaken_constant) {
            listener.exitTaken_constant(this);
        }
    };
    // @Override
    Taken_constantContext.prototype.accept = function (visitor) {
        if (visitor.visitTaken_constant) {
            return visitor.visitTaken_constant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Taken_constantContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Taken_constantContext = Taken_constantContext;
var ValueexpContext = /** @class */ (function (_super) {
    __extends(ValueexpContext, _super);
    function ValueexpContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValueexpContext.prototype.KWD_VALUE = function () { return this.getToken(RexxParser.KWD_VALUE, 0); };
    ValueexpContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ValueexpContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_valueexp; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ValueexpContext.prototype.enterRule = function (listener) {
        if (listener.enterValueexp) {
            listener.enterValueexp(this);
        }
    };
    // @Override
    ValueexpContext.prototype.exitRule = function (listener) {
        if (listener.exitValueexp) {
            listener.exitValueexp(this);
        }
    };
    // @Override
    ValueexpContext.prototype.accept = function (visitor) {
        if (visitor.visitValueexp) {
            return visitor.visitValueexp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValueexpContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ValueexpContext = ValueexpContext;
var Arg_Context = /** @class */ (function (_super) {
    __extends(Arg_Context, _super);
    function Arg_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Arg_Context.prototype.KWD_ARG = function () { return this.getToken(RexxParser.KWD_ARG, 0); };
    Arg_Context.prototype.template_list = function () {
        return this.tryGetRuleContext(0, Template_listContext);
    };
    Object.defineProperty(Arg_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_arg_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Arg_Context.prototype.enterRule = function (listener) {
        if (listener.enterArg_) {
            listener.enterArg_(this);
        }
    };
    // @Override
    Arg_Context.prototype.exitRule = function (listener) {
        if (listener.exitArg_) {
            listener.exitArg_(this);
        }
    };
    // @Override
    Arg_Context.prototype.accept = function (visitor) {
        if (visitor.visitArg_) {
            return visitor.visitArg_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Arg_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Arg_Context = Arg_Context;
var Call_Context = /** @class */ (function (_super) {
    __extends(Call_Context, _super);
    function Call_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Call_Context.prototype.KWD_CALL = function () { return this.getToken(RexxParser.KWD_CALL, 0); };
    Call_Context.prototype.callon_spec = function () {
        return this.tryGetRuleContext(0, Callon_specContext);
    };
    Call_Context.prototype.function_name = function () {
        return this.tryGetRuleContext(0, Function_nameContext);
    };
    Call_Context.prototype.call_parms = function () {
        return this.tryGetRuleContext(0, Call_parmsContext);
    };
    Object.defineProperty(Call_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_call_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Call_Context.prototype.enterRule = function (listener) {
        if (listener.enterCall_) {
            listener.enterCall_(this);
        }
    };
    // @Override
    Call_Context.prototype.exitRule = function (listener) {
        if (listener.exitCall_) {
            listener.exitCall_(this);
        }
    };
    // @Override
    Call_Context.prototype.accept = function (visitor) {
        if (visitor.visitCall_) {
            return visitor.visitCall_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Call_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Call_Context = Call_Context;
var Callon_specContext = /** @class */ (function (_super) {
    __extends(Callon_specContext, _super);
    function Callon_specContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Callon_specContext.prototype.KWD_ON = function () { return this.tryGetToken(RexxParser.KWD_ON, 0); };
    Callon_specContext.prototype.callable_condition = function () {
        return this.getRuleContext(0, Callable_conditionContext);
    };
    Callon_specContext.prototype.KWD_NAME = function () { return this.tryGetToken(RexxParser.KWD_NAME, 0); };
    Callon_specContext.prototype.function_name = function () {
        return this.tryGetRuleContext(0, Function_nameContext);
    };
    Callon_specContext.prototype.KWD_OFF = function () { return this.tryGetToken(RexxParser.KWD_OFF, 0); };
    Object.defineProperty(Callon_specContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_callon_spec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Callon_specContext.prototype.enterRule = function (listener) {
        if (listener.enterCallon_spec) {
            listener.enterCallon_spec(this);
        }
    };
    // @Override
    Callon_specContext.prototype.exitRule = function (listener) {
        if (listener.exitCallon_spec) {
            listener.exitCallon_spec(this);
        }
    };
    // @Override
    Callon_specContext.prototype.accept = function (visitor) {
        if (visitor.visitCallon_spec) {
            return visitor.visitCallon_spec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Callon_specContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Callon_specContext = Callon_specContext;
var Callable_conditionContext = /** @class */ (function (_super) {
    __extends(Callable_conditionContext, _super);
    function Callable_conditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Callable_conditionContext.prototype.KWD_ERROR = function () { return this.tryGetToken(RexxParser.KWD_ERROR, 0); };
    Callable_conditionContext.prototype.KWD_FAILURE = function () { return this.tryGetToken(RexxParser.KWD_FAILURE, 0); };
    Callable_conditionContext.prototype.KWD_HALT = function () { return this.tryGetToken(RexxParser.KWD_HALT, 0); };
    Object.defineProperty(Callable_conditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_callable_condition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Callable_conditionContext.prototype.enterRule = function (listener) {
        if (listener.enterCallable_condition) {
            listener.enterCallable_condition(this);
        }
    };
    // @Override
    Callable_conditionContext.prototype.exitRule = function (listener) {
        if (listener.exitCallable_condition) {
            listener.exitCallable_condition(this);
        }
    };
    // @Override
    Callable_conditionContext.prototype.accept = function (visitor) {
        if (visitor.visitCallable_condition) {
            return visitor.visitCallable_condition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Callable_conditionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Callable_conditionContext = Callable_conditionContext;
var Call_parmsContext = /** @class */ (function (_super) {
    __extends(Call_parmsContext, _super);
    function Call_parmsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Call_parmsContext.prototype.BR_O = function () { return this.tryGetToken(RexxParser.BR_O, 0); };
    Call_parmsContext.prototype.BR_C = function () { return this.tryGetToken(RexxParser.BR_C, 0); };
    Call_parmsContext.prototype.expression_list = function () {
        return this.tryGetRuleContext(0, Expression_listContext);
    };
    Object.defineProperty(Call_parmsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_call_parms; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Call_parmsContext.prototype.enterRule = function (listener) {
        if (listener.enterCall_parms) {
            listener.enterCall_parms(this);
        }
    };
    // @Override
    Call_parmsContext.prototype.exitRule = function (listener) {
        if (listener.exitCall_parms) {
            listener.exitCall_parms(this);
        }
    };
    // @Override
    Call_parmsContext.prototype.accept = function (visitor) {
        if (visitor.visitCall_parms) {
            return visitor.visitCall_parms(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Call_parmsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Call_parmsContext = Call_parmsContext;
var Expression_listContext = /** @class */ (function (_super) {
    __extends(Expression_listContext, _super);
    function Expression_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Expression_listContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Expression_listContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(RexxParser.COMMA);
        }
        else {
            return this.getToken(RexxParser.COMMA, i);
        }
    };
    Object.defineProperty(Expression_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_expression_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Expression_listContext.prototype.enterRule = function (listener) {
        if (listener.enterExpression_list) {
            listener.enterExpression_list(this);
        }
    };
    // @Override
    Expression_listContext.prototype.exitRule = function (listener) {
        if (listener.exitExpression_list) {
            listener.exitExpression_list(this);
        }
    };
    // @Override
    Expression_listContext.prototype.accept = function (visitor) {
        if (visitor.visitExpression_list) {
            return visitor.visitExpression_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Expression_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Expression_listContext = Expression_listContext;
var Drop_Context = /** @class */ (function (_super) {
    __extends(Drop_Context, _super);
    function Drop_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Drop_Context.prototype.KWD_DROP = function () { return this.getToken(RexxParser.KWD_DROP, 0); };
    Drop_Context.prototype.variable_list = function () {
        return this.getRuleContext(0, Variable_listContext);
    };
    Object.defineProperty(Drop_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_drop_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Drop_Context.prototype.enterRule = function (listener) {
        if (listener.enterDrop_) {
            listener.enterDrop_(this);
        }
    };
    // @Override
    Drop_Context.prototype.exitRule = function (listener) {
        if (listener.exitDrop_) {
            listener.exitDrop_(this);
        }
    };
    // @Override
    Drop_Context.prototype.accept = function (visitor) {
        if (visitor.visitDrop_) {
            return visitor.visitDrop_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Drop_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Drop_Context = Drop_Context;
var Variable_listContext = /** @class */ (function (_super) {
    __extends(Variable_listContext, _super);
    function Variable_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Variable_listContext.prototype.vref = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VrefContext);
        }
        else {
            return this.getRuleContext(i, VrefContext);
        }
    };
    Variable_listContext.prototype.var_symbol = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Var_symbolContext);
        }
        else {
            return this.getRuleContext(i, Var_symbolContext);
        }
    };
    Object.defineProperty(Variable_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_variable_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Variable_listContext.prototype.enterRule = function (listener) {
        if (listener.enterVariable_list) {
            listener.enterVariable_list(this);
        }
    };
    // @Override
    Variable_listContext.prototype.exitRule = function (listener) {
        if (listener.exitVariable_list) {
            listener.exitVariable_list(this);
        }
    };
    // @Override
    Variable_listContext.prototype.accept = function (visitor) {
        if (visitor.visitVariable_list) {
            return visitor.visitVariable_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Variable_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Variable_listContext = Variable_listContext;
var VrefContext = /** @class */ (function (_super) {
    __extends(VrefContext, _super);
    function VrefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VrefContext.prototype.BR_O = function () { return this.getToken(RexxParser.BR_O, 0); };
    VrefContext.prototype.var_symbol = function () {
        return this.getRuleContext(0, Var_symbolContext);
    };
    VrefContext.prototype.BR_C = function () { return this.getToken(RexxParser.BR_C, 0); };
    Object.defineProperty(VrefContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_vref; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VrefContext.prototype.enterRule = function (listener) {
        if (listener.enterVref) {
            listener.enterVref(this);
        }
    };
    // @Override
    VrefContext.prototype.exitRule = function (listener) {
        if (listener.exitVref) {
            listener.exitVref(this);
        }
    };
    // @Override
    VrefContext.prototype.accept = function (visitor) {
        if (visitor.visitVref) {
            return visitor.visitVref(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VrefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VrefContext = VrefContext;
var Var_symbolContext = /** @class */ (function (_super) {
    __extends(Var_symbolContext, _super);
    function Var_symbolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Var_symbolContext.prototype.VAR_SYMBOL = function () { return this.tryGetToken(RexxParser.VAR_SYMBOL, 0); };
    Var_symbolContext.prototype.SPECIAL_VAR = function () { return this.tryGetToken(RexxParser.SPECIAL_VAR, 0); };
    Object.defineProperty(Var_symbolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_var_symbol; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Var_symbolContext.prototype.enterRule = function (listener) {
        if (listener.enterVar_symbol) {
            listener.enterVar_symbol(this);
        }
    };
    // @Override
    Var_symbolContext.prototype.exitRule = function (listener) {
        if (listener.exitVar_symbol) {
            listener.exitVar_symbol(this);
        }
    };
    // @Override
    Var_symbolContext.prototype.accept = function (visitor) {
        if (visitor.visitVar_symbol) {
            return visitor.visitVar_symbol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Var_symbolContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Var_symbolContext = Var_symbolContext;
var Exit_Context = /** @class */ (function (_super) {
    __extends(Exit_Context, _super);
    function Exit_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Exit_Context.prototype.KWD_EXIT = function () { return this.getToken(RexxParser.KWD_EXIT, 0); };
    Exit_Context.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Exit_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_exit_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Exit_Context.prototype.enterRule = function (listener) {
        if (listener.enterExit_) {
            listener.enterExit_(this);
        }
    };
    // @Override
    Exit_Context.prototype.exitRule = function (listener) {
        if (listener.exitExit_) {
            listener.exitExit_(this);
        }
    };
    // @Override
    Exit_Context.prototype.accept = function (visitor) {
        if (visitor.visitExit_) {
            return visitor.visitExit_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Exit_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Exit_Context = Exit_Context;
var Interpret_Context = /** @class */ (function (_super) {
    __extends(Interpret_Context, _super);
    function Interpret_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Interpret_Context.prototype.KWD_INTERPRET = function () { return this.getToken(RexxParser.KWD_INTERPRET, 0); };
    Interpret_Context.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Interpret_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_interpret_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Interpret_Context.prototype.enterRule = function (listener) {
        if (listener.enterInterpret_) {
            listener.enterInterpret_(this);
        }
    };
    // @Override
    Interpret_Context.prototype.exitRule = function (listener) {
        if (listener.exitInterpret_) {
            listener.exitInterpret_(this);
        }
    };
    // @Override
    Interpret_Context.prototype.accept = function (visitor) {
        if (visitor.visitInterpret_) {
            return visitor.visitInterpret_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Interpret_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Interpret_Context = Interpret_Context;
var Iterate_Context = /** @class */ (function (_super) {
    __extends(Iterate_Context, _super);
    function Iterate_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Iterate_Context.prototype.KWD_ITERATE = function () { return this.getToken(RexxParser.KWD_ITERATE, 0); };
    Iterate_Context.prototype.var_symbol = function () {
        return this.tryGetRuleContext(0, Var_symbolContext);
    };
    Object.defineProperty(Iterate_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_iterate_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Iterate_Context.prototype.enterRule = function (listener) {
        if (listener.enterIterate_) {
            listener.enterIterate_(this);
        }
    };
    // @Override
    Iterate_Context.prototype.exitRule = function (listener) {
        if (listener.exitIterate_) {
            listener.exitIterate_(this);
        }
    };
    // @Override
    Iterate_Context.prototype.accept = function (visitor) {
        if (visitor.visitIterate_) {
            return visitor.visitIterate_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Iterate_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Iterate_Context = Iterate_Context;
var Leave_Context = /** @class */ (function (_super) {
    __extends(Leave_Context, _super);
    function Leave_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Leave_Context.prototype.KWD_LEAVE = function () { return this.getToken(RexxParser.KWD_LEAVE, 0); };
    Leave_Context.prototype.var_symbol = function () {
        return this.tryGetRuleContext(0, Var_symbolContext);
    };
    Object.defineProperty(Leave_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_leave_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Leave_Context.prototype.enterRule = function (listener) {
        if (listener.enterLeave_) {
            listener.enterLeave_(this);
        }
    };
    // @Override
    Leave_Context.prototype.exitRule = function (listener) {
        if (listener.exitLeave_) {
            listener.exitLeave_(this);
        }
    };
    // @Override
    Leave_Context.prototype.accept = function (visitor) {
        if (visitor.visitLeave_) {
            return visitor.visitLeave_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Leave_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Leave_Context = Leave_Context;
var Nop_Context = /** @class */ (function (_super) {
    __extends(Nop_Context, _super);
    function Nop_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Nop_Context.prototype.KWD_NOP = function () { return this.getToken(RexxParser.KWD_NOP, 0); };
    Object.defineProperty(Nop_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_nop_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Nop_Context.prototype.enterRule = function (listener) {
        if (listener.enterNop_) {
            listener.enterNop_(this);
        }
    };
    // @Override
    Nop_Context.prototype.exitRule = function (listener) {
        if (listener.exitNop_) {
            listener.exitNop_(this);
        }
    };
    // @Override
    Nop_Context.prototype.accept = function (visitor) {
        if (visitor.visitNop_) {
            return visitor.visitNop_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Nop_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Nop_Context = Nop_Context;
var Numeric_Context = /** @class */ (function (_super) {
    __extends(Numeric_Context, _super);
    function Numeric_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Numeric_Context.prototype.KWD_NUMERIC = function () { return this.getToken(RexxParser.KWD_NUMERIC, 0); };
    Numeric_Context.prototype.numeric_digits = function () {
        return this.tryGetRuleContext(0, Numeric_digitsContext);
    };
    Numeric_Context.prototype.numeric_form = function () {
        return this.tryGetRuleContext(0, Numeric_formContext);
    };
    Numeric_Context.prototype.numeric_fuzz = function () {
        return this.tryGetRuleContext(0, Numeric_fuzzContext);
    };
    Object.defineProperty(Numeric_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_numeric_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Numeric_Context.prototype.enterRule = function (listener) {
        if (listener.enterNumeric_) {
            listener.enterNumeric_(this);
        }
    };
    // @Override
    Numeric_Context.prototype.exitRule = function (listener) {
        if (listener.exitNumeric_) {
            listener.exitNumeric_(this);
        }
    };
    // @Override
    Numeric_Context.prototype.accept = function (visitor) {
        if (visitor.visitNumeric_) {
            return visitor.visitNumeric_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Numeric_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Numeric_Context = Numeric_Context;
var Numeric_digitsContext = /** @class */ (function (_super) {
    __extends(Numeric_digitsContext, _super);
    function Numeric_digitsContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Numeric_digitsContext.prototype.KWD_DIGITS = function () { return this.getToken(RexxParser.KWD_DIGITS, 0); };
    Numeric_digitsContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Numeric_digitsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_numeric_digits; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Numeric_digitsContext.prototype.enterRule = function (listener) {
        if (listener.enterNumeric_digits) {
            listener.enterNumeric_digits(this);
        }
    };
    // @Override
    Numeric_digitsContext.prototype.exitRule = function (listener) {
        if (listener.exitNumeric_digits) {
            listener.exitNumeric_digits(this);
        }
    };
    // @Override
    Numeric_digitsContext.prototype.accept = function (visitor) {
        if (visitor.visitNumeric_digits) {
            return visitor.visitNumeric_digits(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Numeric_digitsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Numeric_digitsContext = Numeric_digitsContext;
var Numeric_formContext = /** @class */ (function (_super) {
    __extends(Numeric_formContext, _super);
    function Numeric_formContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Numeric_formContext.prototype.KWD_FORM = function () { return this.getToken(RexxParser.KWD_FORM, 0); };
    Numeric_formContext.prototype.KWD_ENGINEERING = function () { return this.tryGetToken(RexxParser.KWD_ENGINEERING, 0); };
    Numeric_formContext.prototype.KWD_SCIENTIFIC = function () { return this.tryGetToken(RexxParser.KWD_SCIENTIFIC, 0); };
    Numeric_formContext.prototype.valueexp = function () {
        return this.tryGetRuleContext(0, ValueexpContext);
    };
    Numeric_formContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Numeric_formContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_numeric_form; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Numeric_formContext.prototype.enterRule = function (listener) {
        if (listener.enterNumeric_form) {
            listener.enterNumeric_form(this);
        }
    };
    // @Override
    Numeric_formContext.prototype.exitRule = function (listener) {
        if (listener.exitNumeric_form) {
            listener.exitNumeric_form(this);
        }
    };
    // @Override
    Numeric_formContext.prototype.accept = function (visitor) {
        if (visitor.visitNumeric_form) {
            return visitor.visitNumeric_form(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Numeric_formContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Numeric_formContext = Numeric_formContext;
var Numeric_fuzzContext = /** @class */ (function (_super) {
    __extends(Numeric_fuzzContext, _super);
    function Numeric_fuzzContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Numeric_fuzzContext.prototype.KWD_FUZZ = function () { return this.getToken(RexxParser.KWD_FUZZ, 0); };
    Numeric_fuzzContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Numeric_fuzzContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_numeric_fuzz; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Numeric_fuzzContext.prototype.enterRule = function (listener) {
        if (listener.enterNumeric_fuzz) {
            listener.enterNumeric_fuzz(this);
        }
    };
    // @Override
    Numeric_fuzzContext.prototype.exitRule = function (listener) {
        if (listener.exitNumeric_fuzz) {
            listener.exitNumeric_fuzz(this);
        }
    };
    // @Override
    Numeric_fuzzContext.prototype.accept = function (visitor) {
        if (visitor.visitNumeric_fuzz) {
            return visitor.visitNumeric_fuzz(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Numeric_fuzzContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Numeric_fuzzContext = Numeric_fuzzContext;
var Options_Context = /** @class */ (function (_super) {
    __extends(Options_Context, _super);
    function Options_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Options_Context.prototype.KWD_OPTIONS = function () { return this.getToken(RexxParser.KWD_OPTIONS, 0); };
    Options_Context.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Options_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_options_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Options_Context.prototype.enterRule = function (listener) {
        if (listener.enterOptions_) {
            listener.enterOptions_(this);
        }
    };
    // @Override
    Options_Context.prototype.exitRule = function (listener) {
        if (listener.exitOptions_) {
            listener.exitOptions_(this);
        }
    };
    // @Override
    Options_Context.prototype.accept = function (visitor) {
        if (visitor.visitOptions_) {
            return visitor.visitOptions_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Options_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Options_Context = Options_Context;
var Parse_Context = /** @class */ (function (_super) {
    __extends(Parse_Context, _super);
    function Parse_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Parse_Context.prototype.KWD_PARSE = function () { return this.getToken(RexxParser.KWD_PARSE, 0); };
    Parse_Context.prototype.parse_type = function () {
        return this.getRuleContext(0, Parse_typeContext);
    };
    Parse_Context.prototype.KWD_UPPER = function () { return this.tryGetToken(RexxParser.KWD_UPPER, 0); };
    Parse_Context.prototype.template_list = function () {
        return this.tryGetRuleContext(0, Template_listContext);
    };
    Object.defineProperty(Parse_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_parse_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Parse_Context.prototype.enterRule = function (listener) {
        if (listener.enterParse_) {
            listener.enterParse_(this);
        }
    };
    // @Override
    Parse_Context.prototype.exitRule = function (listener) {
        if (listener.exitParse_) {
            listener.exitParse_(this);
        }
    };
    // @Override
    Parse_Context.prototype.accept = function (visitor) {
        if (visitor.visitParse_) {
            return visitor.visitParse_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Parse_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Parse_Context = Parse_Context;
var Parse_typeContext = /** @class */ (function (_super) {
    __extends(Parse_typeContext, _super);
    function Parse_typeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Parse_typeContext.prototype.parse_key = function () {
        return this.tryGetRuleContext(0, Parse_keyContext);
    };
    Parse_typeContext.prototype.parse_value = function () {
        return this.tryGetRuleContext(0, Parse_valueContext);
    };
    Parse_typeContext.prototype.parse_var = function () {
        return this.tryGetRuleContext(0, Parse_varContext);
    };
    Object.defineProperty(Parse_typeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_parse_type; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Parse_typeContext.prototype.enterRule = function (listener) {
        if (listener.enterParse_type) {
            listener.enterParse_type(this);
        }
    };
    // @Override
    Parse_typeContext.prototype.exitRule = function (listener) {
        if (listener.exitParse_type) {
            listener.exitParse_type(this);
        }
    };
    // @Override
    Parse_typeContext.prototype.accept = function (visitor) {
        if (visitor.visitParse_type) {
            return visitor.visitParse_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Parse_typeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Parse_typeContext = Parse_typeContext;
var Parse_keyContext = /** @class */ (function (_super) {
    __extends(Parse_keyContext, _super);
    function Parse_keyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Parse_keyContext.prototype.KWD_ARG = function () { return this.tryGetToken(RexxParser.KWD_ARG, 0); };
    Parse_keyContext.prototype.KWD_EXTERNAL = function () { return this.tryGetToken(RexxParser.KWD_EXTERNAL, 0); };
    Parse_keyContext.prototype.KWD_NUMERIC = function () { return this.tryGetToken(RexxParser.KWD_NUMERIC, 0); };
    Parse_keyContext.prototype.KWD_PULL = function () { return this.tryGetToken(RexxParser.KWD_PULL, 0); };
    Parse_keyContext.prototype.KWD_SOURCE = function () { return this.tryGetToken(RexxParser.KWD_SOURCE, 0); };
    Parse_keyContext.prototype.KWD_VERSION = function () { return this.tryGetToken(RexxParser.KWD_VERSION, 0); };
    Object.defineProperty(Parse_keyContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_parse_key; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Parse_keyContext.prototype.enterRule = function (listener) {
        if (listener.enterParse_key) {
            listener.enterParse_key(this);
        }
    };
    // @Override
    Parse_keyContext.prototype.exitRule = function (listener) {
        if (listener.exitParse_key) {
            listener.exitParse_key(this);
        }
    };
    // @Override
    Parse_keyContext.prototype.accept = function (visitor) {
        if (visitor.visitParse_key) {
            return visitor.visitParse_key(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Parse_keyContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Parse_keyContext = Parse_keyContext;
var Parse_valueContext = /** @class */ (function (_super) {
    __extends(Parse_valueContext, _super);
    function Parse_valueContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Parse_valueContext.prototype.KWD_VALUE = function () { return this.getToken(RexxParser.KWD_VALUE, 0); };
    Parse_valueContext.prototype.KWD_WITH = function () { return this.getToken(RexxParser.KWD_WITH, 0); };
    Parse_valueContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Parse_valueContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_parse_value; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Parse_valueContext.prototype.enterRule = function (listener) {
        if (listener.enterParse_value) {
            listener.enterParse_value(this);
        }
    };
    // @Override
    Parse_valueContext.prototype.exitRule = function (listener) {
        if (listener.exitParse_value) {
            listener.exitParse_value(this);
        }
    };
    // @Override
    Parse_valueContext.prototype.accept = function (visitor) {
        if (visitor.visitParse_value) {
            return visitor.visitParse_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Parse_valueContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Parse_valueContext = Parse_valueContext;
var Parse_varContext = /** @class */ (function (_super) {
    __extends(Parse_varContext, _super);
    function Parse_varContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Parse_varContext.prototype.KWD_VAR = function () { return this.getToken(RexxParser.KWD_VAR, 0); };
    Parse_varContext.prototype.var_symbol = function () {
        return this.getRuleContext(0, Var_symbolContext);
    };
    Object.defineProperty(Parse_varContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_parse_var; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Parse_varContext.prototype.enterRule = function (listener) {
        if (listener.enterParse_var) {
            listener.enterParse_var(this);
        }
    };
    // @Override
    Parse_varContext.prototype.exitRule = function (listener) {
        if (listener.exitParse_var) {
            listener.exitParse_var(this);
        }
    };
    // @Override
    Parse_varContext.prototype.accept = function (visitor) {
        if (visitor.visitParse_var) {
            return visitor.visitParse_var(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Parse_varContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Parse_varContext = Parse_varContext;
var Procedure_Context = /** @class */ (function (_super) {
    __extends(Procedure_Context, _super);
    function Procedure_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Procedure_Context.prototype.KWD_PROCEDURE = function () { return this.getToken(RexxParser.KWD_PROCEDURE, 0); };
    Procedure_Context.prototype.KWD_EXPOSE = function () { return this.tryGetToken(RexxParser.KWD_EXPOSE, 0); };
    Procedure_Context.prototype.variable_list = function () {
        return this.tryGetRuleContext(0, Variable_listContext);
    };
    Object.defineProperty(Procedure_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_procedure_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Procedure_Context.prototype.enterRule = function (listener) {
        if (listener.enterProcedure_) {
            listener.enterProcedure_(this);
        }
    };
    // @Override
    Procedure_Context.prototype.exitRule = function (listener) {
        if (listener.exitProcedure_) {
            listener.exitProcedure_(this);
        }
    };
    // @Override
    Procedure_Context.prototype.accept = function (visitor) {
        if (visitor.visitProcedure_) {
            return visitor.visitProcedure_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Procedure_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Procedure_Context = Procedure_Context;
var Pull_Context = /** @class */ (function (_super) {
    __extends(Pull_Context, _super);
    function Pull_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Pull_Context.prototype.KWD_PULL = function () { return this.getToken(RexxParser.KWD_PULL, 0); };
    Pull_Context.prototype.template_list = function () {
        return this.tryGetRuleContext(0, Template_listContext);
    };
    Object.defineProperty(Pull_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_pull_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Pull_Context.prototype.enterRule = function (listener) {
        if (listener.enterPull_) {
            listener.enterPull_(this);
        }
    };
    // @Override
    Pull_Context.prototype.exitRule = function (listener) {
        if (listener.exitPull_) {
            listener.exitPull_(this);
        }
    };
    // @Override
    Pull_Context.prototype.accept = function (visitor) {
        if (visitor.visitPull_) {
            return visitor.visitPull_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Pull_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Pull_Context = Pull_Context;
var Push_Context = /** @class */ (function (_super) {
    __extends(Push_Context, _super);
    function Push_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Push_Context.prototype.KWD_PUSH = function () { return this.getToken(RexxParser.KWD_PUSH, 0); };
    Push_Context.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Push_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_push_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Push_Context.prototype.enterRule = function (listener) {
        if (listener.enterPush_) {
            listener.enterPush_(this);
        }
    };
    // @Override
    Push_Context.prototype.exitRule = function (listener) {
        if (listener.exitPush_) {
            listener.exitPush_(this);
        }
    };
    // @Override
    Push_Context.prototype.accept = function (visitor) {
        if (visitor.visitPush_) {
            return visitor.visitPush_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Push_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Push_Context = Push_Context;
var Queue_Context = /** @class */ (function (_super) {
    __extends(Queue_Context, _super);
    function Queue_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Queue_Context.prototype.KWD_QUEUE = function () { return this.getToken(RexxParser.KWD_QUEUE, 0); };
    Queue_Context.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Queue_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_queue_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Queue_Context.prototype.enterRule = function (listener) {
        if (listener.enterQueue_) {
            listener.enterQueue_(this);
        }
    };
    // @Override
    Queue_Context.prototype.exitRule = function (listener) {
        if (listener.exitQueue_) {
            listener.exitQueue_(this);
        }
    };
    // @Override
    Queue_Context.prototype.accept = function (visitor) {
        if (visitor.visitQueue_) {
            return visitor.visitQueue_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Queue_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Queue_Context = Queue_Context;
var Return_Context = /** @class */ (function (_super) {
    __extends(Return_Context, _super);
    function Return_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Return_Context.prototype.KWD_RETURN = function () { return this.getToken(RexxParser.KWD_RETURN, 0); };
    Return_Context.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Return_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_return_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Return_Context.prototype.enterRule = function (listener) {
        if (listener.enterReturn_) {
            listener.enterReturn_(this);
        }
    };
    // @Override
    Return_Context.prototype.exitRule = function (listener) {
        if (listener.exitReturn_) {
            listener.exitReturn_(this);
        }
    };
    // @Override
    Return_Context.prototype.accept = function (visitor) {
        if (visitor.visitReturn_) {
            return visitor.visitReturn_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Return_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Return_Context = Return_Context;
var Say_Context = /** @class */ (function (_super) {
    __extends(Say_Context, _super);
    function Say_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Say_Context.prototype.KWD_SAY = function () { return this.getToken(RexxParser.KWD_SAY, 0); };
    Say_Context.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(Say_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_say_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Say_Context.prototype.enterRule = function (listener) {
        if (listener.enterSay_) {
            listener.enterSay_(this);
        }
    };
    // @Override
    Say_Context.prototype.exitRule = function (listener) {
        if (listener.exitSay_) {
            listener.exitSay_(this);
        }
    };
    // @Override
    Say_Context.prototype.accept = function (visitor) {
        if (visitor.visitSay_) {
            return visitor.visitSay_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Say_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Say_Context = Say_Context;
var Signal_Context = /** @class */ (function (_super) {
    __extends(Signal_Context, _super);
    function Signal_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Signal_Context.prototype.KWD_SIGNAL = function () { return this.getToken(RexxParser.KWD_SIGNAL, 0); };
    Signal_Context.prototype.signal_spec = function () {
        return this.tryGetRuleContext(0, Signal_specContext);
    };
    Signal_Context.prototype.valueexp = function () {
        return this.tryGetRuleContext(0, ValueexpContext);
    };
    Signal_Context.prototype.taken_constant = function () {
        return this.tryGetRuleContext(0, Taken_constantContext);
    };
    Object.defineProperty(Signal_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_signal_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Signal_Context.prototype.enterRule = function (listener) {
        if (listener.enterSignal_) {
            listener.enterSignal_(this);
        }
    };
    // @Override
    Signal_Context.prototype.exitRule = function (listener) {
        if (listener.exitSignal_) {
            listener.exitSignal_(this);
        }
    };
    // @Override
    Signal_Context.prototype.accept = function (visitor) {
        if (visitor.visitSignal_) {
            return visitor.visitSignal_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Signal_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Signal_Context = Signal_Context;
var Signal_specContext = /** @class */ (function (_super) {
    __extends(Signal_specContext, _super);
    function Signal_specContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Signal_specContext.prototype.KWD_ON = function () { return this.tryGetToken(RexxParser.KWD_ON, 0); };
    Signal_specContext.prototype.condition = function () {
        return this.getRuleContext(0, ConditionContext);
    };
    Signal_specContext.prototype.KWD_NAME = function () { return this.tryGetToken(RexxParser.KWD_NAME, 0); };
    Signal_specContext.prototype.function_name = function () {
        return this.tryGetRuleContext(0, Function_nameContext);
    };
    Signal_specContext.prototype.KWD_OFF = function () { return this.tryGetToken(RexxParser.KWD_OFF, 0); };
    Object.defineProperty(Signal_specContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_signal_spec; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Signal_specContext.prototype.enterRule = function (listener) {
        if (listener.enterSignal_spec) {
            listener.enterSignal_spec(this);
        }
    };
    // @Override
    Signal_specContext.prototype.exitRule = function (listener) {
        if (listener.exitSignal_spec) {
            listener.exitSignal_spec(this);
        }
    };
    // @Override
    Signal_specContext.prototype.accept = function (visitor) {
        if (visitor.visitSignal_spec) {
            return visitor.visitSignal_spec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Signal_specContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Signal_specContext = Signal_specContext;
var ConditionContext = /** @class */ (function (_super) {
    __extends(ConditionContext, _super);
    function ConditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionContext.prototype.callable_condition = function () {
        return this.tryGetRuleContext(0, Callable_conditionContext);
    };
    ConditionContext.prototype.KWD_NOVALUE = function () { return this.tryGetToken(RexxParser.KWD_NOVALUE, 0); };
    ConditionContext.prototype.KWD_SYNTAX = function () { return this.tryGetToken(RexxParser.KWD_SYNTAX, 0); };
    Object.defineProperty(ConditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_condition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConditionContext.prototype.enterRule = function (listener) {
        if (listener.enterCondition) {
            listener.enterCondition(this);
        }
    };
    // @Override
    ConditionContext.prototype.exitRule = function (listener) {
        if (listener.exitCondition) {
            listener.exitCondition(this);
        }
    };
    // @Override
    ConditionContext.prototype.accept = function (visitor) {
        if (visitor.visitCondition) {
            return visitor.visitCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConditionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConditionContext = ConditionContext;
var Trace_Context = /** @class */ (function (_super) {
    __extends(Trace_Context, _super);
    function Trace_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Trace_Context.prototype.KWD_TRACE = function () { return this.getToken(RexxParser.KWD_TRACE, 0); };
    Trace_Context.prototype.taken_constant = function () {
        return this.tryGetRuleContext(0, Taken_constantContext);
    };
    Trace_Context.prototype.valueexp = function () {
        return this.tryGetRuleContext(0, ValueexpContext);
    };
    Trace_Context.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    Trace_Context.prototype.KWD_ERROR = function () { return this.tryGetToken(RexxParser.KWD_ERROR, 0); };
    Trace_Context.prototype.KWD_FAILURE = function () { return this.tryGetToken(RexxParser.KWD_FAILURE, 0); };
    Trace_Context.prototype.KWD_OFF = function () { return this.tryGetToken(RexxParser.KWD_OFF, 0); };
    Object.defineProperty(Trace_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_trace_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Trace_Context.prototype.enterRule = function (listener) {
        if (listener.enterTrace_) {
            listener.enterTrace_(this);
        }
    };
    // @Override
    Trace_Context.prototype.exitRule = function (listener) {
        if (listener.exitTrace_) {
            listener.exitTrace_(this);
        }
    };
    // @Override
    Trace_Context.prototype.accept = function (visitor) {
        if (visitor.visitTrace_) {
            return visitor.visitTrace_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Trace_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Trace_Context = Trace_Context;
var Upper_Context = /** @class */ (function (_super) {
    __extends(Upper_Context, _super);
    function Upper_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Upper_Context.prototype.KWD_UPPER = function () { return this.getToken(RexxParser.KWD_UPPER, 0); };
    Upper_Context.prototype.var_symbol = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Var_symbolContext);
        }
        else {
            return this.getRuleContext(i, Var_symbolContext);
        }
    };
    Object.defineProperty(Upper_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_upper_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Upper_Context.prototype.enterRule = function (listener) {
        if (listener.enterUpper_) {
            listener.enterUpper_(this);
        }
    };
    // @Override
    Upper_Context.prototype.exitRule = function (listener) {
        if (listener.exitUpper_) {
            listener.exitUpper_(this);
        }
    };
    // @Override
    Upper_Context.prototype.accept = function (visitor) {
        if (visitor.visitUpper_) {
            return visitor.visitUpper_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Upper_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Upper_Context = Upper_Context;
var Template_listContext = /** @class */ (function (_super) {
    __extends(Template_listContext, _super);
    function Template_listContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Template_listContext.prototype.template_ = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Template_Context);
        }
        else {
            return this.getRuleContext(i, Template_Context);
        }
    };
    Template_listContext.prototype.COMMA = function (i) {
        if (i === undefined) {
            return this.getTokens(RexxParser.COMMA);
        }
        else {
            return this.getToken(RexxParser.COMMA, i);
        }
    };
    Object.defineProperty(Template_listContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_template_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Template_listContext.prototype.enterRule = function (listener) {
        if (listener.enterTemplate_list) {
            listener.enterTemplate_list(this);
        }
    };
    // @Override
    Template_listContext.prototype.exitRule = function (listener) {
        if (listener.exitTemplate_list) {
            listener.exitTemplate_list(this);
        }
    };
    // @Override
    Template_listContext.prototype.accept = function (visitor) {
        if (visitor.visitTemplate_list) {
            return visitor.visitTemplate_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Template_listContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Template_listContext = Template_listContext;
var Template_Context = /** @class */ (function (_super) {
    __extends(Template_Context, _super);
    function Template_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Template_Context.prototype.trigger_ = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Trigger_Context);
        }
        else {
            return this.getRuleContext(i, Trigger_Context);
        }
    };
    Template_Context.prototype.target_ = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Target_Context);
        }
        else {
            return this.getRuleContext(i, Target_Context);
        }
    };
    Object.defineProperty(Template_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_template_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Template_Context.prototype.enterRule = function (listener) {
        if (listener.enterTemplate_) {
            listener.enterTemplate_(this);
        }
    };
    // @Override
    Template_Context.prototype.exitRule = function (listener) {
        if (listener.exitTemplate_) {
            listener.exitTemplate_(this);
        }
    };
    // @Override
    Template_Context.prototype.accept = function (visitor) {
        if (visitor.visitTemplate_) {
            return visitor.visitTemplate_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Template_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Template_Context = Template_Context;
var Target_Context = /** @class */ (function (_super) {
    __extends(Target_Context, _super);
    function Target_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Target_Context.prototype.VAR_SYMBOL = function () { return this.tryGetToken(RexxParser.VAR_SYMBOL, 0); };
    Target_Context.prototype.SPECIAL_VAR = function () { return this.tryGetToken(RexxParser.SPECIAL_VAR, 0); };
    Target_Context.prototype.STOP = function () { return this.tryGetToken(RexxParser.STOP, 0); };
    Object.defineProperty(Target_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_target_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Target_Context.prototype.enterRule = function (listener) {
        if (listener.enterTarget_) {
            listener.enterTarget_(this);
        }
    };
    // @Override
    Target_Context.prototype.exitRule = function (listener) {
        if (listener.exitTarget_) {
            listener.exitTarget_(this);
        }
    };
    // @Override
    Target_Context.prototype.accept = function (visitor) {
        if (visitor.visitTarget_) {
            return visitor.visitTarget_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Target_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Target_Context = Target_Context;
var Trigger_Context = /** @class */ (function (_super) {
    __extends(Trigger_Context, _super);
    function Trigger_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Trigger_Context.prototype.pattern_ = function () {
        return this.tryGetRuleContext(0, Pattern_Context);
    };
    Trigger_Context.prototype.positional_ = function () {
        return this.tryGetRuleContext(0, Positional_Context);
    };
    Object.defineProperty(Trigger_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_trigger_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Trigger_Context.prototype.enterRule = function (listener) {
        if (listener.enterTrigger_) {
            listener.enterTrigger_(this);
        }
    };
    // @Override
    Trigger_Context.prototype.exitRule = function (listener) {
        if (listener.exitTrigger_) {
            listener.exitTrigger_(this);
        }
    };
    // @Override
    Trigger_Context.prototype.accept = function (visitor) {
        if (visitor.visitTrigger_) {
            return visitor.visitTrigger_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Trigger_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Trigger_Context = Trigger_Context;
var Pattern_Context = /** @class */ (function (_super) {
    __extends(Pattern_Context, _super);
    function Pattern_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Pattern_Context.prototype.STRING = function () { return this.tryGetToken(RexxParser.STRING, 0); };
    Pattern_Context.prototype.vref = function () {
        return this.tryGetRuleContext(0, VrefContext);
    };
    Object.defineProperty(Pattern_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_pattern_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Pattern_Context.prototype.enterRule = function (listener) {
        if (listener.enterPattern_) {
            listener.enterPattern_(this);
        }
    };
    // @Override
    Pattern_Context.prototype.exitRule = function (listener) {
        if (listener.exitPattern_) {
            listener.exitPattern_(this);
        }
    };
    // @Override
    Pattern_Context.prototype.accept = function (visitor) {
        if (visitor.visitPattern_) {
            return visitor.visitPattern_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Pattern_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Pattern_Context = Pattern_Context;
var Positional_Context = /** @class */ (function (_super) {
    __extends(Positional_Context, _super);
    function Positional_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Positional_Context.prototype.absolute_positional = function () {
        return this.tryGetRuleContext(0, Absolute_positionalContext);
    };
    Positional_Context.prototype.relative_positional = function () {
        return this.tryGetRuleContext(0, Relative_positionalContext);
    };
    Object.defineProperty(Positional_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_positional_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Positional_Context.prototype.enterRule = function (listener) {
        if (listener.enterPositional_) {
            listener.enterPositional_(this);
        }
    };
    // @Override
    Positional_Context.prototype.exitRule = function (listener) {
        if (listener.exitPositional_) {
            listener.exitPositional_(this);
        }
    };
    // @Override
    Positional_Context.prototype.accept = function (visitor) {
        if (visitor.visitPositional_) {
            return visitor.visitPositional_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Positional_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Positional_Context = Positional_Context;
var Absolute_positionalContext = /** @class */ (function (_super) {
    __extends(Absolute_positionalContext, _super);
    function Absolute_positionalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Absolute_positionalContext.prototype.NUMBER = function () { return this.tryGetToken(RexxParser.NUMBER, 0); };
    Absolute_positionalContext.prototype.EQ = function () { return this.tryGetToken(RexxParser.EQ, 0); };
    Absolute_positionalContext.prototype.position_ = function () {
        return this.tryGetRuleContext(0, Position_Context);
    };
    Object.defineProperty(Absolute_positionalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_absolute_positional; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Absolute_positionalContext.prototype.enterRule = function (listener) {
        if (listener.enterAbsolute_positional) {
            listener.enterAbsolute_positional(this);
        }
    };
    // @Override
    Absolute_positionalContext.prototype.exitRule = function (listener) {
        if (listener.exitAbsolute_positional) {
            listener.exitAbsolute_positional(this);
        }
    };
    // @Override
    Absolute_positionalContext.prototype.accept = function (visitor) {
        if (visitor.visitAbsolute_positional) {
            return visitor.visitAbsolute_positional(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Absolute_positionalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Absolute_positionalContext = Absolute_positionalContext;
var Position_Context = /** @class */ (function (_super) {
    __extends(Position_Context, _super);
    function Position_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Position_Context.prototype.NUMBER = function () { return this.tryGetToken(RexxParser.NUMBER, 0); };
    Position_Context.prototype.vref = function () {
        return this.tryGetRuleContext(0, VrefContext);
    };
    Object.defineProperty(Position_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_position_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Position_Context.prototype.enterRule = function (listener) {
        if (listener.enterPosition_) {
            listener.enterPosition_(this);
        }
    };
    // @Override
    Position_Context.prototype.exitRule = function (listener) {
        if (listener.exitPosition_) {
            listener.exitPosition_(this);
        }
    };
    // @Override
    Position_Context.prototype.accept = function (visitor) {
        if (visitor.visitPosition_) {
            return visitor.visitPosition_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Position_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Position_Context = Position_Context;
var Relative_positionalContext = /** @class */ (function (_super) {
    __extends(Relative_positionalContext, _super);
    function Relative_positionalContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Relative_positionalContext.prototype.position_ = function () {
        return this.getRuleContext(0, Position_Context);
    };
    Relative_positionalContext.prototype.PLUS = function () { return this.tryGetToken(RexxParser.PLUS, 0); };
    Relative_positionalContext.prototype.MINUS = function () { return this.tryGetToken(RexxParser.MINUS, 0); };
    Object.defineProperty(Relative_positionalContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_relative_positional; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Relative_positionalContext.prototype.enterRule = function (listener) {
        if (listener.enterRelative_positional) {
            listener.enterRelative_positional(this);
        }
    };
    // @Override
    Relative_positionalContext.prototype.exitRule = function (listener) {
        if (listener.exitRelative_positional) {
            listener.exitRelative_positional(this);
        }
    };
    // @Override
    Relative_positionalContext.prototype.accept = function (visitor) {
        if (visitor.visitRelative_positional) {
            return visitor.visitRelative_positional(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Relative_positionalContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Relative_positionalContext = Relative_positionalContext;
var SymbolContext = /** @class */ (function (_super) {
    __extends(SymbolContext, _super);
    function SymbolContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SymbolContext.prototype.var_symbol = function () {
        return this.tryGetRuleContext(0, Var_symbolContext);
    };
    SymbolContext.prototype.CONST_SYMBOL = function () { return this.tryGetToken(RexxParser.CONST_SYMBOL, 0); };
    SymbolContext.prototype.NUMBER = function () { return this.tryGetToken(RexxParser.NUMBER, 0); };
    Object.defineProperty(SymbolContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_symbol; },
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
    ExpressionContext.prototype.and_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(And_expressionContext);
        }
        else {
            return this.getRuleContext(i, And_expressionContext);
        }
    };
    ExpressionContext.prototype.or_operator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Or_operatorContext);
        }
        else {
            return this.getRuleContext(i, Or_operatorContext);
        }
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_expression; },
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
var Or_operatorContext = /** @class */ (function (_super) {
    __extends(Or_operatorContext, _super);
    function Or_operatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Or_operatorContext.prototype.OR = function () { return this.tryGetToken(RexxParser.OR, 0); };
    Or_operatorContext.prototype.XOR = function () { return this.tryGetToken(RexxParser.XOR, 0); };
    Object.defineProperty(Or_operatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_or_operator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Or_operatorContext.prototype.enterRule = function (listener) {
        if (listener.enterOr_operator) {
            listener.enterOr_operator(this);
        }
    };
    // @Override
    Or_operatorContext.prototype.exitRule = function (listener) {
        if (listener.exitOr_operator) {
            listener.exitOr_operator(this);
        }
    };
    // @Override
    Or_operatorContext.prototype.accept = function (visitor) {
        if (visitor.visitOr_operator) {
            return visitor.visitOr_operator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Or_operatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Or_operatorContext = Or_operatorContext;
var And_expressionContext = /** @class */ (function (_super) {
    __extends(And_expressionContext, _super);
    function And_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    And_expressionContext.prototype.comparison = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ComparisonContext);
        }
        else {
            return this.getRuleContext(i, ComparisonContext);
        }
    };
    And_expressionContext.prototype.AND = function (i) {
        if (i === undefined) {
            return this.getTokens(RexxParser.AND);
        }
        else {
            return this.getToken(RexxParser.AND, i);
        }
    };
    Object.defineProperty(And_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_and_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    And_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAnd_expression) {
            listener.enterAnd_expression(this);
        }
    };
    // @Override
    And_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAnd_expression) {
            listener.exitAnd_expression(this);
        }
    };
    // @Override
    And_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAnd_expression) {
            return visitor.visitAnd_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return And_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.And_expressionContext = And_expressionContext;
var ComparisonContext = /** @class */ (function (_super) {
    __extends(ComparisonContext, _super);
    function ComparisonContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ComparisonContext.prototype.concatenation = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ConcatenationContext);
        }
        else {
            return this.getRuleContext(i, ConcatenationContext);
        }
    };
    ComparisonContext.prototype.comparison_operator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Comparison_operatorContext);
        }
        else {
            return this.getRuleContext(i, Comparison_operatorContext);
        }
    };
    Object.defineProperty(ComparisonContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_comparison; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ComparisonContext.prototype.enterRule = function (listener) {
        if (listener.enterComparison) {
            listener.enterComparison(this);
        }
    };
    // @Override
    ComparisonContext.prototype.exitRule = function (listener) {
        if (listener.exitComparison) {
            listener.exitComparison(this);
        }
    };
    // @Override
    ComparisonContext.prototype.accept = function (visitor) {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ComparisonContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ComparisonContext = ComparisonContext;
var Comparison_operatorContext = /** @class */ (function (_super) {
    __extends(Comparison_operatorContext, _super);
    function Comparison_operatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Comparison_operatorContext.prototype.normal_compare = function () {
        return this.tryGetRuleContext(0, Normal_compareContext);
    };
    Comparison_operatorContext.prototype.strict_compare = function () {
        return this.tryGetRuleContext(0, Strict_compareContext);
    };
    Object.defineProperty(Comparison_operatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_comparison_operator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Comparison_operatorContext.prototype.enterRule = function (listener) {
        if (listener.enterComparison_operator) {
            listener.enterComparison_operator(this);
        }
    };
    // @Override
    Comparison_operatorContext.prototype.exitRule = function (listener) {
        if (listener.exitComparison_operator) {
            listener.exitComparison_operator(this);
        }
    };
    // @Override
    Comparison_operatorContext.prototype.accept = function (visitor) {
        if (visitor.visitComparison_operator) {
            return visitor.visitComparison_operator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Comparison_operatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Comparison_operatorContext = Comparison_operatorContext;
var Normal_compareContext = /** @class */ (function (_super) {
    __extends(Normal_compareContext, _super);
    function Normal_compareContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Normal_compareContext.prototype.EQ = function () { return this.tryGetToken(RexxParser.EQ, 0); };
    Normal_compareContext.prototype.CMP_NEq = function () { return this.tryGetToken(RexxParser.CMP_NEq, 0); };
    Normal_compareContext.prototype.CMP_LM = function () { return this.tryGetToken(RexxParser.CMP_LM, 0); };
    Normal_compareContext.prototype.CMP_ML = function () { return this.tryGetToken(RexxParser.CMP_ML, 0); };
    Normal_compareContext.prototype.CMP_M = function () { return this.tryGetToken(RexxParser.CMP_M, 0); };
    Normal_compareContext.prototype.CMP_L = function () { return this.tryGetToken(RexxParser.CMP_L, 0); };
    Normal_compareContext.prototype.CMP_MEq = function () { return this.tryGetToken(RexxParser.CMP_MEq, 0); };
    Normal_compareContext.prototype.CMP_LEq = function () { return this.tryGetToken(RexxParser.CMP_LEq, 0); };
    Normal_compareContext.prototype.CMP_NM = function () { return this.tryGetToken(RexxParser.CMP_NM, 0); };
    Normal_compareContext.prototype.CMP_NL = function () { return this.tryGetToken(RexxParser.CMP_NL, 0); };
    Object.defineProperty(Normal_compareContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_normal_compare; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Normal_compareContext.prototype.enterRule = function (listener) {
        if (listener.enterNormal_compare) {
            listener.enterNormal_compare(this);
        }
    };
    // @Override
    Normal_compareContext.prototype.exitRule = function (listener) {
        if (listener.exitNormal_compare) {
            listener.exitNormal_compare(this);
        }
    };
    // @Override
    Normal_compareContext.prototype.accept = function (visitor) {
        if (visitor.visitNormal_compare) {
            return visitor.visitNormal_compare(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Normal_compareContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Normal_compareContext = Normal_compareContext;
var Strict_compareContext = /** @class */ (function (_super) {
    __extends(Strict_compareContext, _super);
    function Strict_compareContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Strict_compareContext.prototype.CMPS_Eq = function () { return this.tryGetToken(RexxParser.CMPS_Eq, 0); };
    Strict_compareContext.prototype.CMPS_Neq = function () { return this.tryGetToken(RexxParser.CMPS_Neq, 0); };
    Strict_compareContext.prototype.CMPS_M = function () { return this.tryGetToken(RexxParser.CMPS_M, 0); };
    Strict_compareContext.prototype.CMPS_L = function () { return this.tryGetToken(RexxParser.CMPS_L, 0); };
    Strict_compareContext.prototype.CMPS_MEq = function () { return this.tryGetToken(RexxParser.CMPS_MEq, 0); };
    Strict_compareContext.prototype.CMPS_LEq = function () { return this.tryGetToken(RexxParser.CMPS_LEq, 0); };
    Strict_compareContext.prototype.CMPS_NM = function () { return this.tryGetToken(RexxParser.CMPS_NM, 0); };
    Strict_compareContext.prototype.CMPS_NL = function () { return this.tryGetToken(RexxParser.CMPS_NL, 0); };
    Object.defineProperty(Strict_compareContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_strict_compare; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Strict_compareContext.prototype.enterRule = function (listener) {
        if (listener.enterStrict_compare) {
            listener.enterStrict_compare(this);
        }
    };
    // @Override
    Strict_compareContext.prototype.exitRule = function (listener) {
        if (listener.exitStrict_compare) {
            listener.exitStrict_compare(this);
        }
    };
    // @Override
    Strict_compareContext.prototype.accept = function (visitor) {
        if (visitor.visitStrict_compare) {
            return visitor.visitStrict_compare(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Strict_compareContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Strict_compareContext = Strict_compareContext;
var ConcatenationContext = /** @class */ (function (_super) {
    __extends(ConcatenationContext, _super);
    function ConcatenationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConcatenationContext.prototype.addition = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(AdditionContext);
        }
        else {
            return this.getRuleContext(i, AdditionContext);
        }
    };
    ConcatenationContext.prototype.CONCAT = function (i) {
        if (i === undefined) {
            return this.getTokens(RexxParser.CONCAT);
        }
        else {
            return this.getToken(RexxParser.CONCAT, i);
        }
    };
    Object.defineProperty(ConcatenationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_concatenation; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ConcatenationContext.prototype.enterRule = function (listener) {
        if (listener.enterConcatenation) {
            listener.enterConcatenation(this);
        }
    };
    // @Override
    ConcatenationContext.prototype.exitRule = function (listener) {
        if (listener.exitConcatenation) {
            listener.exitConcatenation(this);
        }
    };
    // @Override
    ConcatenationContext.prototype.accept = function (visitor) {
        if (visitor.visitConcatenation) {
            return visitor.visitConcatenation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ConcatenationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ConcatenationContext = ConcatenationContext;
var AdditionContext = /** @class */ (function (_super) {
    __extends(AdditionContext, _super);
    function AdditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AdditionContext.prototype.multiplication = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicationContext);
        }
        else {
            return this.getRuleContext(i, MultiplicationContext);
        }
    };
    AdditionContext.prototype.additive_operator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Additive_operatorContext);
        }
        else {
            return this.getRuleContext(i, Additive_operatorContext);
        }
    };
    Object.defineProperty(AdditionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_addition; },
        enumerable: true,
        configurable: true
    });
    // @Override
    AdditionContext.prototype.enterRule = function (listener) {
        if (listener.enterAddition) {
            listener.enterAddition(this);
        }
    };
    // @Override
    AdditionContext.prototype.exitRule = function (listener) {
        if (listener.exitAddition) {
            listener.exitAddition(this);
        }
    };
    // @Override
    AdditionContext.prototype.accept = function (visitor) {
        if (visitor.visitAddition) {
            return visitor.visitAddition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdditionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AdditionContext = AdditionContext;
var Additive_operatorContext = /** @class */ (function (_super) {
    __extends(Additive_operatorContext, _super);
    function Additive_operatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Additive_operatorContext.prototype.PLUS = function () { return this.tryGetToken(RexxParser.PLUS, 0); };
    Additive_operatorContext.prototype.MINUS = function () { return this.tryGetToken(RexxParser.MINUS, 0); };
    Object.defineProperty(Additive_operatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_additive_operator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Additive_operatorContext.prototype.enterRule = function (listener) {
        if (listener.enterAdditive_operator) {
            listener.enterAdditive_operator(this);
        }
    };
    // @Override
    Additive_operatorContext.prototype.exitRule = function (listener) {
        if (listener.exitAdditive_operator) {
            listener.exitAdditive_operator(this);
        }
    };
    // @Override
    Additive_operatorContext.prototype.accept = function (visitor) {
        if (visitor.visitAdditive_operator) {
            return visitor.visitAdditive_operator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Additive_operatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Additive_operatorContext = Additive_operatorContext;
var MultiplicationContext = /** @class */ (function (_super) {
    __extends(MultiplicationContext, _super);
    function MultiplicationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplicationContext.prototype.power_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Power_expressionContext);
        }
        else {
            return this.getRuleContext(i, Power_expressionContext);
        }
    };
    MultiplicationContext.prototype.multiplicative_operator = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Multiplicative_operatorContext);
        }
        else {
            return this.getRuleContext(i, Multiplicative_operatorContext);
        }
    };
    Object.defineProperty(MultiplicationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_multiplication; },
        enumerable: true,
        configurable: true
    });
    // @Override
    MultiplicationContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplication) {
            listener.enterMultiplication(this);
        }
    };
    // @Override
    MultiplicationContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplication) {
            listener.exitMultiplication(this);
        }
    };
    // @Override
    MultiplicationContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplication) {
            return visitor.visitMultiplication(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplicationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.MultiplicationContext = MultiplicationContext;
var Multiplicative_operatorContext = /** @class */ (function (_super) {
    __extends(Multiplicative_operatorContext, _super);
    function Multiplicative_operatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Multiplicative_operatorContext.prototype.MUL = function () { return this.tryGetToken(RexxParser.MUL, 0); };
    Multiplicative_operatorContext.prototype.DIV = function () { return this.tryGetToken(RexxParser.DIV, 0); };
    Multiplicative_operatorContext.prototype.QUOTINENT = function () { return this.tryGetToken(RexxParser.QUOTINENT, 0); };
    Multiplicative_operatorContext.prototype.REMAINDER = function () { return this.tryGetToken(RexxParser.REMAINDER, 0); };
    Object.defineProperty(Multiplicative_operatorContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_multiplicative_operator; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Multiplicative_operatorContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplicative_operator) {
            listener.enterMultiplicative_operator(this);
        }
    };
    // @Override
    Multiplicative_operatorContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplicative_operator) {
            listener.exitMultiplicative_operator(this);
        }
    };
    // @Override
    Multiplicative_operatorContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplicative_operator) {
            return visitor.visitMultiplicative_operator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Multiplicative_operatorContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Multiplicative_operatorContext = Multiplicative_operatorContext;
var Power_expressionContext = /** @class */ (function (_super) {
    __extends(Power_expressionContext, _super);
    function Power_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Power_expressionContext.prototype.prefix_expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Prefix_expressionContext);
        }
        else {
            return this.getRuleContext(i, Prefix_expressionContext);
        }
    };
    Power_expressionContext.prototype.POW = function (i) {
        if (i === undefined) {
            return this.getTokens(RexxParser.POW);
        }
        else {
            return this.getToken(RexxParser.POW, i);
        }
    };
    Object.defineProperty(Power_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_power_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Power_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPower_expression) {
            listener.enterPower_expression(this);
        }
    };
    // @Override
    Power_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPower_expression) {
            listener.exitPower_expression(this);
        }
    };
    // @Override
    Power_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPower_expression) {
            return visitor.visitPower_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Power_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Power_expressionContext = Power_expressionContext;
var Prefix_expressionContext = /** @class */ (function (_super) {
    __extends(Prefix_expressionContext, _super);
    function Prefix_expressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Prefix_expressionContext.prototype.term = function () {
        return this.getRuleContext(0, TermContext);
    };
    Prefix_expressionContext.prototype.PLUS = function (i) {
        if (i === undefined) {
            return this.getTokens(RexxParser.PLUS);
        }
        else {
            return this.getToken(RexxParser.PLUS, i);
        }
    };
    Prefix_expressionContext.prototype.MINUS = function (i) {
        if (i === undefined) {
            return this.getTokens(RexxParser.MINUS);
        }
        else {
            return this.getToken(RexxParser.MINUS, i);
        }
    };
    Prefix_expressionContext.prototype.NOT = function (i) {
        if (i === undefined) {
            return this.getTokens(RexxParser.NOT);
        }
        else {
            return this.getToken(RexxParser.NOT, i);
        }
    };
    Object.defineProperty(Prefix_expressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_prefix_expression; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Prefix_expressionContext.prototype.enterRule = function (listener) {
        if (listener.enterPrefix_expression) {
            listener.enterPrefix_expression(this);
        }
    };
    // @Override
    Prefix_expressionContext.prototype.exitRule = function (listener) {
        if (listener.exitPrefix_expression) {
            listener.exitPrefix_expression(this);
        }
    };
    // @Override
    Prefix_expressionContext.prototype.accept = function (visitor) {
        if (visitor.visitPrefix_expression) {
            return visitor.visitPrefix_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Prefix_expressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Prefix_expressionContext = Prefix_expressionContext;
var TermContext = /** @class */ (function (_super) {
    __extends(TermContext, _super);
    function TermContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TermContext.prototype.function_ = function () {
        return this.tryGetRuleContext(0, Function_Context);
    };
    TermContext.prototype.BR_O = function () { return this.tryGetToken(RexxParser.BR_O, 0); };
    TermContext.prototype.expression = function () {
        return this.tryGetRuleContext(0, ExpressionContext);
    };
    TermContext.prototype.BR_C = function () { return this.tryGetToken(RexxParser.BR_C, 0); };
    TermContext.prototype.symbol = function () {
        return this.tryGetRuleContext(0, SymbolContext);
    };
    TermContext.prototype.STRING = function () { return this.tryGetToken(RexxParser.STRING, 0); };
    Object.defineProperty(TermContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_term; },
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
var Function_Context = /** @class */ (function (_super) {
    __extends(Function_Context, _super);
    function Function_Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_Context.prototype.function_name = function () {
        return this.getRuleContext(0, Function_nameContext);
    };
    Function_Context.prototype.function_parameters = function () {
        return this.getRuleContext(0, Function_parametersContext);
    };
    Object.defineProperty(Function_Context.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_function_; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_Context.prototype.enterRule = function (listener) {
        if (listener.enterFunction_) {
            listener.enterFunction_(this);
        }
    };
    // @Override
    Function_Context.prototype.exitRule = function (listener) {
        if (listener.exitFunction_) {
            listener.exitFunction_(this);
        }
    };
    // @Override
    Function_Context.prototype.accept = function (visitor) {
        if (visitor.visitFunction_) {
            return visitor.visitFunction_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_Context;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_Context = Function_Context;
var Function_nameContext = /** @class */ (function (_super) {
    __extends(Function_nameContext, _super);
    function Function_nameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_nameContext.prototype.KWD_ADDRESS = function () { return this.tryGetToken(RexxParser.KWD_ADDRESS, 0); };
    Function_nameContext.prototype.KWD_ARG = function () { return this.tryGetToken(RexxParser.KWD_ARG, 0); };
    Function_nameContext.prototype.KWD_DIGITS = function () { return this.tryGetToken(RexxParser.KWD_DIGITS, 0); };
    Function_nameContext.prototype.KWD_FORM = function () { return this.tryGetToken(RexxParser.KWD_FORM, 0); };
    Function_nameContext.prototype.KWD_FUZZ = function () { return this.tryGetToken(RexxParser.KWD_FUZZ, 0); };
    Function_nameContext.prototype.KWD_TRACE = function () { return this.tryGetToken(RexxParser.KWD_TRACE, 0); };
    Function_nameContext.prototype.KWD_VALUE = function () { return this.tryGetToken(RexxParser.KWD_VALUE, 0); };
    Function_nameContext.prototype.taken_constant = function () {
        return this.tryGetRuleContext(0, Taken_constantContext);
    };
    Object.defineProperty(Function_nameContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_function_name; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_nameContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_name) {
            listener.enterFunction_name(this);
        }
    };
    // @Override
    Function_nameContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_name) {
            listener.exitFunction_name(this);
        }
    };
    // @Override
    Function_nameContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_name) {
            return visitor.visitFunction_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_nameContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_nameContext = Function_nameContext;
var Function_parametersContext = /** @class */ (function (_super) {
    __extends(Function_parametersContext, _super);
    function Function_parametersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Function_parametersContext.prototype.BR_O = function () { return this.getToken(RexxParser.BR_O, 0); };
    Function_parametersContext.prototype.BR_C = function () { return this.getToken(RexxParser.BR_C, 0); };
    Function_parametersContext.prototype.expression_list = function () {
        return this.tryGetRuleContext(0, Expression_listContext);
    };
    Object.defineProperty(Function_parametersContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return RexxParser.RULE_function_parameters; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Function_parametersContext.prototype.enterRule = function (listener) {
        if (listener.enterFunction_parameters) {
            listener.enterFunction_parameters(this);
        }
    };
    // @Override
    Function_parametersContext.prototype.exitRule = function (listener) {
        if (listener.exitFunction_parameters) {
            listener.exitFunction_parameters(this);
        }
    };
    // @Override
    Function_parametersContext.prototype.accept = function (visitor) {
        if (visitor.visitFunction_parameters) {
            return visitor.visitFunction_parameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Function_parametersContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Function_parametersContext = Function_parametersContext;
