"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lambda/lambda.g4 by ANTLR 4.7.3-SNAPSHOT
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
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var lambdaParser = /** @class */ (function (_super) {
    __extends(lambdaParser, _super);
    function lambdaParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(lambdaParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(lambdaParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return lambdaParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lambdaParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "lambda.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lambdaParser.prototype, "ruleNames", {
        // @Override
        get: function () { return lambdaParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(lambdaParser.prototype, "serializedATN", {
        // @Override
        get: function () { return lambdaParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    // @RuleVersion(0)
    lambdaParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, lambdaParser.RULE_expression);
        try {
            this.state = 11;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case lambdaParser.VARIABLE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 8;
                        this.match(lambdaParser.VARIABLE);
                    }
                    break;
                case lambdaParser.T__0:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 9;
                        this.function();
                    }
                    break;
                case lambdaParser.T__2:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 10;
                        this.application();
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
    lambdaParser.prototype.function = function () {
        var _localctx = new FunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, lambdaParser.RULE_function);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 13;
                this.match(lambdaParser.T__0);
                this.state = 14;
                this.match(lambdaParser.VARIABLE);
                this.state = 15;
                this.match(lambdaParser.T__1);
                this.state = 16;
                this.scope();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    lambdaParser.prototype.application = function () {
        var _localctx = new ApplicationContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, lambdaParser.RULE_application);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 18;
                this.match(lambdaParser.T__2);
                this.state = 19;
                this.expression();
                this.state = 20;
                this.expression();
                this.state = 21;
                this.match(lambdaParser.T__3);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    // @RuleVersion(0)
    lambdaParser.prototype.scope = function () {
        var _localctx = new ScopeContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, lambdaParser.RULE_scope);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 23;
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
    Object.defineProperty(lambdaParser, "_ATN", {
        get: function () {
            if (!lambdaParser.__ATN) {
                lambdaParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(lambdaParser._serializedATN));
            }
            return lambdaParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    lambdaParser.T__0 = 1;
    lambdaParser.T__1 = 2;
    lambdaParser.T__2 = 3;
    lambdaParser.T__3 = 4;
    lambdaParser.VARIABLE = 5;
    lambdaParser.WS = 6;
    lambdaParser.RULE_expression = 0;
    lambdaParser.RULE_function = 1;
    lambdaParser.RULE_application = 2;
    lambdaParser.RULE_scope = 3;
    // tslint:disable:no-trailing-whitespace
    lambdaParser.ruleNames = [
        "expression", "function", "application", "scope",
    ];
    lambdaParser._LITERAL_NAMES = [
        undefined, "'\u03BB'", "'.'", "'('", "')'",
    ];
    lambdaParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, undefined, undefined, "VARIABLE", "WS",
    ];
    lambdaParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(lambdaParser._LITERAL_NAMES, lambdaParser._SYMBOLIC_NAMES, []);
    lambdaParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\b\x1C\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02\x03\x02" +
        "\x05\x02\x0E\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x02\x02\x02\x06\x02" +
        "\x02\x04\x02\x06\x02\b\x02\x02\x02\x02\x19\x02\r\x03\x02\x02\x02\x04\x0F" +
        "\x03\x02\x02\x02\x06\x14\x03\x02\x02\x02\b\x19\x03\x02\x02\x02\n\x0E\x07" +
        "\x07\x02\x02\v\x0E\x05\x04\x03\x02\f\x0E\x05\x06\x04\x02\r\n\x03\x02\x02" +
        "\x02\r\v\x03\x02\x02\x02\r\f\x03\x02\x02\x02\x0E\x03\x03\x02\x02\x02\x0F" +
        "\x10\x07\x03\x02\x02\x10\x11\x07\x07\x02\x02\x11\x12\x07\x04\x02\x02\x12" +
        "\x13\x05\b\x05\x02\x13\x05\x03\x02\x02\x02\x14\x15\x07\x05\x02\x02\x15" +
        "\x16\x05\x02\x02\x02\x16\x17\x05\x02\x02\x02\x17\x18\x07\x06\x02\x02\x18" +
        "\x07\x03\x02\x02\x02\x19\x1A\x05\x02\x02\x02\x1A\t\x03\x02\x02\x02\x03" +
        "\r";
    return lambdaParser;
}(Parser_1.Parser));
exports.lambdaParser = lambdaParser;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.VARIABLE = function () { return this.tryGetToken(lambdaParser.VARIABLE, 0); };
    ExpressionContext.prototype.function = function () {
        return this.tryGetRuleContext(0, FunctionContext);
    };
    ExpressionContext.prototype.application = function () {
        return this.tryGetRuleContext(0, ApplicationContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lambdaParser.RULE_expression; },
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
var FunctionContext = /** @class */ (function (_super) {
    __extends(FunctionContext, _super);
    function FunctionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionContext.prototype.VARIABLE = function () { return this.getToken(lambdaParser.VARIABLE, 0); };
    FunctionContext.prototype.scope = function () {
        return this.getRuleContext(0, ScopeContext);
    };
    Object.defineProperty(FunctionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lambdaParser.RULE_function; },
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
var ApplicationContext = /** @class */ (function (_super) {
    __extends(ApplicationContext, _super);
    function ApplicationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ApplicationContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ApplicationContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lambdaParser.RULE_application; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ApplicationContext.prototype.enterRule = function (listener) {
        if (listener.enterApplication) {
            listener.enterApplication(this);
        }
    };
    // @Override
    ApplicationContext.prototype.exitRule = function (listener) {
        if (listener.exitApplication) {
            listener.exitApplication(this);
        }
    };
    // @Override
    ApplicationContext.prototype.accept = function (visitor) {
        if (visitor.visitApplication) {
            return visitor.visitApplication(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ApplicationContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ApplicationContext = ApplicationContext;
var ScopeContext = /** @class */ (function (_super) {
    __extends(ScopeContext, _super);
    function ScopeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ScopeContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    Object.defineProperty(ScopeContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return lambdaParser.RULE_scope; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ScopeContext.prototype.enterRule = function (listener) {
        if (listener.enterScope) {
            listener.enterScope(this);
        }
    };
    // @Override
    ScopeContext.prototype.exitRule = function (listener) {
        if (listener.exitScope) {
            listener.exitScope(this);
        }
    };
    // @Override
    ScopeContext.prototype.accept = function (visitor) {
        if (visitor.visitScope) {
            return visitor.visitScope(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ScopeContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ScopeContext = ScopeContext;
