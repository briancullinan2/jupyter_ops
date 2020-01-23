"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/istc/istc.g4 by ANTLR 4.7.3-SNAPSHOT
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
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var istcParser = /** @class */ (function (_super) {
    __extends(istcParser, _super);
    function istcParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(istcParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(istcParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return istcParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(istcParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "istc.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(istcParser.prototype, "ruleNames", {
        // @Override
        get: function () { return istcParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(istcParser.prototype, "serializedATN", {
        // @Override
        get: function () { return istcParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    istcParser.prototype.istc = function () {
        var _localctx = new IstcContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, istcParser.RULE_istc);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 10;
                this.match(istcParser.T__0);
                this.state = 11;
                this.match(istcParser.T__1);
                this.state = 12;
                this.registration();
                this.state = 13;
                this.match(istcParser.SEP);
                this.state = 14;
                this.year();
                this.state = 15;
                this.match(istcParser.SEP);
                this.state = 16;
                this.work();
                this.state = 17;
                this.match(istcParser.SEP);
                this.state = 18;
                this.check();
                this.state = 19;
                this.match(istcParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    istcParser.prototype.registration = function () {
        var _localctx = new RegistrationContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, istcParser.RULE_registration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 21;
                this.match(istcParser.CHAR);
                this.state = 22;
                this.match(istcParser.CHAR);
                this.state = 23;
                this.match(istcParser.CHAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    istcParser.prototype.year = function () {
        var _localctx = new YearContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, istcParser.RULE_year);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 25;
                this.match(istcParser.CHAR);
                this.state = 26;
                this.match(istcParser.CHAR);
                this.state = 27;
                this.match(istcParser.CHAR);
                this.state = 28;
                this.match(istcParser.CHAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    istcParser.prototype.work = function () {
        var _localctx = new WorkContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, istcParser.RULE_work);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 30;
                this.match(istcParser.CHAR);
                this.state = 31;
                this.match(istcParser.CHAR);
                this.state = 32;
                this.match(istcParser.CHAR);
                this.state = 33;
                this.match(istcParser.CHAR);
                this.state = 34;
                this.match(istcParser.CHAR);
                this.state = 35;
                this.match(istcParser.CHAR);
                this.state = 36;
                this.match(istcParser.CHAR);
                this.state = 37;
                this.match(istcParser.CHAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    istcParser.prototype.check = function () {
        var _localctx = new CheckContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, istcParser.RULE_check);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 39;
                this.match(istcParser.CHAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    Object.defineProperty(istcParser, "_ATN", {
        get: function () {
            if (!istcParser.__ATN) {
                istcParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(istcParser._serializedATN));
            }
            return istcParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    istcParser.T__0 = 1;
    istcParser.T__1 = 2;
    istcParser.SEP = 3;
    istcParser.CHAR = 4;
    istcParser.WS = 5;
    istcParser.RULE_istc = 0;
    istcParser.RULE_registration = 1;
    istcParser.RULE_year = 2;
    istcParser.RULE_work = 3;
    istcParser.RULE_check = 4;
    // tslint:disable:no-trailing-whitespace
    istcParser.ruleNames = [
        "istc", "registration", "year", "work", "check",
    ];
    istcParser._LITERAL_NAMES = [
        undefined, "'ISTC'", "' '",
    ];
    istcParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, "SEP", "CHAR", "WS",
    ];
    istcParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(istcParser._LITERAL_NAMES, istcParser._SYMBOLIC_NAMES, []);
    istcParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07,\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
        "\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
        "\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
        "\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
        "\x03\x05\x03\x06\x03\x06\x03\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02" +
        "\b\x02\n\x02\x02\x02\x02&\x02\f\x03\x02\x02\x02\x04\x17\x03\x02\x02\x02" +
        "\x06\x1B\x03\x02\x02\x02\b \x03\x02\x02\x02\n)\x03\x02\x02\x02\f\r\x07" +
        "\x03\x02\x02\r\x0E\x07\x04\x02\x02\x0E\x0F\x05\x04\x03\x02\x0F\x10\x07" +
        "\x05\x02\x02\x10\x11\x05\x06\x04\x02\x11\x12\x07\x05\x02\x02\x12\x13\x05" +
        "\b\x05\x02\x13\x14\x07\x05\x02\x02\x14\x15\x05\n\x06\x02\x15\x16\x07\x02" +
        "\x02\x03\x16\x03\x03\x02\x02\x02\x17\x18\x07\x06\x02\x02\x18\x19\x07\x06" +
        "\x02\x02\x19\x1A\x07\x06\x02\x02\x1A\x05\x03\x02\x02\x02\x1B\x1C\x07\x06" +
        "\x02\x02\x1C\x1D\x07\x06\x02\x02\x1D\x1E\x07\x06\x02\x02\x1E\x1F\x07\x06" +
        "\x02\x02\x1F\x07\x03\x02\x02\x02 !\x07\x06\x02\x02!\"\x07\x06\x02\x02" +
        "\"#\x07\x06\x02\x02#$\x07\x06\x02\x02$%\x07\x06\x02\x02%&\x07\x06\x02" +
        "\x02&\'\x07\x06\x02\x02\'(\x07\x06\x02\x02(\t\x03\x02\x02\x02)*\x07\x06" +
        "\x02\x02*\v\x03\x02\x02\x02\x02";
    return istcParser;
}(Parser_1.Parser));
exports.istcParser = istcParser;
var IstcContext = /** @class */ (function (_super) {
    __extends(IstcContext, _super);
    function IstcContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IstcContext.prototype.registration = function () {
        return this.getRuleContext(0, RegistrationContext);
    };
    IstcContext.prototype.SEP = function (i) {
        if (i === undefined) {
            return this.getTokens(istcParser.SEP);
        }
        else {
            return this.getToken(istcParser.SEP, i);
        }
    };
    IstcContext.prototype.year = function () {
        return this.getRuleContext(0, YearContext);
    };
    IstcContext.prototype.work = function () {
        return this.getRuleContext(0, WorkContext);
    };
    IstcContext.prototype.check = function () {
        return this.getRuleContext(0, CheckContext);
    };
    IstcContext.prototype.EOF = function () { return this.getToken(istcParser.EOF, 0); };
    Object.defineProperty(IstcContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return istcParser.RULE_istc; },
        enumerable: true,
        configurable: true
    });
    // @Override
    IstcContext.prototype.enterRule = function (listener) {
        if (listener.enterIstc) {
            listener.enterIstc(this);
        }
    };
    // @Override
    IstcContext.prototype.exitRule = function (listener) {
        if (listener.exitIstc) {
            listener.exitIstc(this);
        }
    };
    // @Override
    IstcContext.prototype.accept = function (visitor) {
        if (visitor.visitIstc) {
            return visitor.visitIstc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return IstcContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.IstcContext = IstcContext;
var RegistrationContext = /** @class */ (function (_super) {
    __extends(RegistrationContext, _super);
    function RegistrationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RegistrationContext.prototype.CHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(istcParser.CHAR);
        }
        else {
            return this.getToken(istcParser.CHAR, i);
        }
    };
    Object.defineProperty(RegistrationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return istcParser.RULE_registration; },
        enumerable: true,
        configurable: true
    });
    // @Override
    RegistrationContext.prototype.enterRule = function (listener) {
        if (listener.enterRegistration) {
            listener.enterRegistration(this);
        }
    };
    // @Override
    RegistrationContext.prototype.exitRule = function (listener) {
        if (listener.exitRegistration) {
            listener.exitRegistration(this);
        }
    };
    // @Override
    RegistrationContext.prototype.accept = function (visitor) {
        if (visitor.visitRegistration) {
            return visitor.visitRegistration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return RegistrationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.RegistrationContext = RegistrationContext;
var YearContext = /** @class */ (function (_super) {
    __extends(YearContext, _super);
    function YearContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    YearContext.prototype.CHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(istcParser.CHAR);
        }
        else {
            return this.getToken(istcParser.CHAR, i);
        }
    };
    Object.defineProperty(YearContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return istcParser.RULE_year; },
        enumerable: true,
        configurable: true
    });
    // @Override
    YearContext.prototype.enterRule = function (listener) {
        if (listener.enterYear) {
            listener.enterYear(this);
        }
    };
    // @Override
    YearContext.prototype.exitRule = function (listener) {
        if (listener.exitYear) {
            listener.exitYear(this);
        }
    };
    // @Override
    YearContext.prototype.accept = function (visitor) {
        if (visitor.visitYear) {
            return visitor.visitYear(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return YearContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.YearContext = YearContext;
var WorkContext = /** @class */ (function (_super) {
    __extends(WorkContext, _super);
    function WorkContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    WorkContext.prototype.CHAR = function (i) {
        if (i === undefined) {
            return this.getTokens(istcParser.CHAR);
        }
        else {
            return this.getToken(istcParser.CHAR, i);
        }
    };
    Object.defineProperty(WorkContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return istcParser.RULE_work; },
        enumerable: true,
        configurable: true
    });
    // @Override
    WorkContext.prototype.enterRule = function (listener) {
        if (listener.enterWork) {
            listener.enterWork(this);
        }
    };
    // @Override
    WorkContext.prototype.exitRule = function (listener) {
        if (listener.exitWork) {
            listener.exitWork(this);
        }
    };
    // @Override
    WorkContext.prototype.accept = function (visitor) {
        if (visitor.visitWork) {
            return visitor.visitWork(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WorkContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.WorkContext = WorkContext;
var CheckContext = /** @class */ (function (_super) {
    __extends(CheckContext, _super);
    function CheckContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CheckContext.prototype.CHAR = function () { return this.getToken(istcParser.CHAR, 0); };
    Object.defineProperty(CheckContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return istcParser.RULE_check; },
        enumerable: true,
        configurable: true
    });
    // @Override
    CheckContext.prototype.enterRule = function (listener) {
        if (listener.enterCheck) {
            listener.enterCheck(this);
        }
    };
    // @Override
    CheckContext.prototype.exitRule = function (listener) {
        if (listener.exitCheck) {
            listener.exitCheck(this);
        }
    };
    // @Override
    CheckContext.prototype.accept = function (visitor) {
        if (visitor.visitCheck) {
            return visitor.visitCheck(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CheckContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.CheckContext = CheckContext;
