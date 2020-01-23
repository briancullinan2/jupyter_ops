"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/logo/ucb-logo/UCBLogo.g4 by ANTLR 4.7.3-SNAPSHOT
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
var RuleContext_1 = require("antlr4ts/RuleContext");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var UCBLogoParser = /** @class */ (function (_super) {
    __extends(UCBLogoParser, _super);
    function UCBLogoParser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.procedures = new HashMap();
        return _this;
    }
    Object.defineProperty(UCBLogoParser.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return UCBLogoParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UCBLogoParser.prototype, "grammarFileName", {
        // tslint:enable:no-trailing-whitespace
        // @Override
        get: function () { return "UCBLogo.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UCBLogoParser.prototype, "ruleNames", {
        // @Override
        get: function () { return UCBLogoParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UCBLogoParser.prototype, "serializedATN", {
        // @Override
        get: function () { return UCBLogoParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    UCBLogoParser.T__0 = 1;
    UCBLogoParser.T__1 = 2;
    UCBLogoParser.TO = 3;
    UCBLogoParser.END = 4;
    UCBLogoParser.MACRO = 5;
    UCBLogoParser.WORD = 6;
    UCBLogoParser.SKIP_ = 7;
    UCBLogoParser.OPEN_ARRAY = 8;
    UCBLogoParser.CLOSE_ARRAY = 9;
    UCBLogoParser.OPEN_LIST = 10;
    UCBLogoParser.CLOSE_LIST = 11;
    UCBLogoParser.MINUS = 12;
    UCBLogoParser.PLUS = 13;
    UCBLogoParser.MULT = 14;
    UCBLogoParser.DIV = 15;
    UCBLogoParser.LT = 16;
    UCBLogoParser.GT = 17;
    UCBLogoParser.EQ = 18;
    UCBLogoParser.LT_EQ = 19;
    UCBLogoParser.GT_EQ = 20;
    UCBLogoParser.NOT_EQ = 21;
    UCBLogoParser.QUOTED_WORD = 22;
    UCBLogoParser.NUMBER = 23;
    UCBLogoParser.VARIABLE = 24;
    UCBLogoParser.NAME = 25;
    UCBLogoParser.ANY = 26;
    UCBLogoParser.RULE_parse = 0;
    UCBLogoParser.RULE_instruction = 1;
    UCBLogoParser.RULE_procedure_def = 2;
    UCBLogoParser.RULE_macro_def = 3;
    UCBLogoParser.RULE_variables = 4;
    UCBLogoParser.RULE_body_def = 5;
    UCBLogoParser.RULE_body_instruction = 6;
    UCBLogoParser.RULE_procedure_call_extra_input = 7;
    UCBLogoParser.RULE_procedure_call = 8;
    UCBLogoParser.RULE_expressions = 9;
    UCBLogoParser.RULE_expression = 10;
    UCBLogoParser.RULE_array = 11;
    UCBLogoParser.RULE_list = 12;
    // tslint:disable:no-trailing-whitespace
    UCBLogoParser.ruleNames = [
        "parse", "instruction", "procedure_def", "macro_def", "variables", "body_def",
        "body_instruction", "procedure_call_extra_input", "procedure_call", "expressions",
        "expression", "array", "list",
    ];
    UCBLogoParser._LITERAL_NAMES = [
        undefined, "'('", "')'", undefined, undefined, undefined, undefined, undefined,
        "'{'", "'}'", "'['", "']'", "'-'", "'+'", "'*'", "'/'", "'<'", "'>'",
        "'='", "'<='", "'>='", "'<>'",
    ];
    UCBLogoParser._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, "TO", "END", "MACRO", "WORD", "SKIP_",
        "OPEN_ARRAY", "CLOSE_ARRAY", "OPEN_LIST", "CLOSE_LIST", "MINUS", "PLUS",
        "MULT", "DIV", "LT", "GT", "EQ", "LT_EQ", "GT_EQ", "NOT_EQ", "QUOTED_WORD",
        "NUMBER", "VARIABLE", "NAME", "ANY",
    ];
    UCBLogoParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(UCBLogoParser._LITERAL_NAMES, UCBLogoParser._SYMBOLIC_NAMES, []);
    return UCBLogoParser;
}(Parser_1.Parser));
exports.UCBLogoParser = UCBLogoParser;
{
    {
        put("word", 2);
        put("list", 2);
        put("sentence", 2);
        put("se", 2);
        put("fput", 2);
        put("lput", 2);
        put("array", 1);
        put("mdarray", 1);
        put("listtoarray", 1);
        put("arraytolist", 1);
        put("combine", 2);
        put("reverse", 1);
        put("gensym", 0);
        put("first", 1);
        put("firsts", 1);
        put("last", 1);
        put("butfirst", 1);
        put("bf", 1);
        put("butfirsts", 1);
        put("bfs", 1);
        put("butlast", 1);
        put("bl", 1);
        put("item", 2);
        put("mditem", 2);
        put("pick", 1);
        put("remove", 2);
        put("remdup", 1);
        put("quoted", 1);
        put("setitem", 3);
        put("mdsetitem", 3);
        put(".setfirst", 2);
        put(".setbf", 2);
        put(".setitem", 3);
        put("push", 2);
        put("pop", 1);
        put("queue", 2);
        put("dequeue", 1);
        put("wordp", 1);
        put("word?", 1);
        put("listp", 1);
        put("list?", 1);
        put("arrayp", 1);
        put("array?", 1);
        put("emptyp", 1);
        put("empty?", 1);
        put("equalp", 2);
        put("equal?", 2);
        put("notequalp", 2);
        put("notequal?", 2);
        put("beforep", 2);
        put("before?", 2);
        put(".eq", 2);
        put("memberp", 2);
        put("member?", 2);
        put("substringp", 2);
        put("substring?", 2);
        put("numberp", 1);
        put("number?", 1);
        put("vbarredp", 1);
        put("vbarred?", 1);
        put("backslashedp", 1);
        put("backslashed?", 1);
        put("count", 1);
        put("ascii", 1);
        put("rawascii", 1);
        put("char", 1);
        put("member", 2);
        put("lowercase", 1);
        put("uppercase", 1);
        put("standout", 1);
        put("parse", 1);
        put("runparse", 1);
        put("print", 1);
        put("pr", 1);
        put("type", 1);
        put("show", 1);
        put("readlist", 0);
        put("rl", 0);
        put("readword", 0);
        put("rw", 0);
        put("readrawline", 0);
        put("readchar", 0);
        put("rc", 0);
        put("readchars", 1);
        put("rcs", 1);
        put("shell", 1);
        put("setprefix", 1);
        put("prefix", 0);
        put("openread", 1);
        put("openwrite", 1);
        put("openappend", 1);
        put("openupdate", 1);
        put("close", 1);
        put("allopen", 0);
        put("closeall", 0);
        put("erasefile", 1);
        put("erf", 1);
        put("dribble", 1);
        put("nodribble", 0);
        put("setread", 1);
        put("setwrite", 1);
        put("reader", 0);
        put("writer", 0);
        put("setreadpos", 1);
        put("setwritepos", 1);
        put("readpos", 0);
        put("writepos", 0);
        put("eofp", 0);
        put("eof?", 0);
        put("filep", 1);
        put("file?", 1);
        put("keyp", 0);
        put("key?", 0);
        put("cleartext", 0);
        put("ct", 0);
        put("setcursor", 1);
        put("cursor", 0);
        put("setmargins", 1);
        put("settextcolor", 2);
        put("settc", 2);
        put("increasefont", 0);
        put("decreasefont", 0);
        put("settextsize", 1);
        put("textsize", 0);
        put("setfont", 1);
        put("font", 0);
        put("sum", 2);
        put("difference", 2);
        put("minus", 1);
        put("product", 2);
        put("quotient", 2);
        put("remainder", 2);
        put("modulo", 2);
        put("int", 1);
        put("round", 1);
        put("sqrt", 1);
        put("power", 2);
        put("exp", 1);
        put("log10", 1);
        put("ln", 1);
        put("sin", 1);
        put("radsin", 1);
        put("cos", 1);
        put("radcos", 1);
        put("arctan", 1);
        put("radarctan", 1);
        put("iseq", 2);
        put("rseq", 3);
        put("lessp", 2);
        put("less?", 2);
        put("greaterp", 2);
        put("greater?", 2);
        put("lessequalp", 2);
        put("lessequal?", 2);
        put("greaterequalp", 2);
        put("greaterequal?", 2);
        put("random", 1);
        put("rerandom", 0);
        put("form", 3);
        put("bitand", 2);
        put("bitor", 2);
        put("bitxor", 2);
        put("bitnot", 1);
        put("ashift", 2);
        put("lshift", 2);
        put("and", 2);
        put("or", 2);
        put("not", 1);
        put("forward", 1);
        put("fd", 1);
        put("back", 1);
        put("bk", 1);
        put("left", 1);
        put("lt", 1);
        put("right", 1);
        put("rt", 1);
        put("setpos", 1);
        put("setxy", 2);
        put("setx", 1);
        put("sety", 1);
        put("setheading", 1);
        put("seth", 1);
        put("home", 0);
        put("arc", 2);
        put("pos", 0);
        put("xcor", 0);
        put("ycor", 0);
        put("heading", 0);
        put("towards", 1);
        put("scrunch", 0);
        put("showturtle", 0);
        put("st", 0);
        put("hideturtle", 0);
        put("ht", 0);
        put("clean", 0);
        put("clearscreen", 0);
        put("cs", 0);
        put("wrap", 0);
        put("window", 0);
        put("fence", 0);
        put("fill", 0);
        put("filled", 2);
        put("label", 1);
        put("setlabelheight", 1);
        put("textscreen", 0);
        put("ts", 0);
        put("fullscreen", 0);
        put("fs", 0);
        put("splitscreen", 0);
        put("ss", 0);
        put("setscrunch", 2);
        put("refresh", 0);
        put("norefresh", 0);
        put("shownp", 0);
        put("shown?", 0);
        put("screenmode", 0);
        put("turtlemode", 0);
        put("labelsize", 0);
        put("pendown", 0);
        put("pd", 0);
        put("penup", 0);
        put("pu", 0);
        put("penpaint", 0);
        put("ppt", 0);
        put("penerase", 0);
        put("pe", 0);
        put("penreverse", 0);
        put("px", 0);
        put("setpencolor", 1);
        put("setpc", 1);
        put("setpalette", 2);
        put("setpensize", 1);
        put("setpenpattern", 1);
        put("setpen", 1);
        put("setbackground", 1);
        put("setbg", 1);
        put("pendownp", 0);
        put("pendown?", 0);
        put("penmode", 0);
        put("pencolor", 0);
        put("pc", 0);
        put("palette", 1);
        put("pensize", 0);
        put("penpattern", 0);
        put("pen", 0);
        put("background", 0);
        put("bg", 0);
        put("savepict", 1);
        put("loadpict", 1);
        put("epspict", 1);
        put("mousepos", 0);
        put("clickpos", 0);
        put("buttonp", 0);
        put("button?", 0);
        put("button", 0);
        put("define", 2);
        put("text", 1);
        put("fulltext", 1);
        put("copydef", 2);
        put("make", 2);
        put("name", 2);
        put("local", 1);
        put("localmake", 2);
        put("thing", 1);
        put(":quoted.varname", 0);
        put("global", 1);
        put("pprop", 3);
        put("gprop", 2);
        put("remprop", 2);
        put("plist", 1);
        put("procedurep", 1);
        put("procedure?", 1);
        put("primitivep", 1);
        put("primitive?", 1);
        put("definedp", 1);
        put("defined?", 1);
        put("namep", 1);
        put("name?", 1);
        put("plistp", 1);
        put("plist?", 1);
        put("contents", 0);
        put("buried", 0);
        put("traced", 0);
        put("stepped", 0);
        put("procedures", 0);
        put("primitives", 0);
        put("names", 0);
        put("plists", 0);
        put("namelist", 1);
        put("pllist", 1);
        put("arity", 1);
        put("nodes", 0);
        put("printout", 1);
        put("po", 1);
        put("poall", 0);
        put("pops", 0);
        put("pons", 0);
        put("popls", 0);
        put("pon", 1);
        put("popl", 1);
        put("pot", 1);
        put("pots", 0);
        put("erase", 1);
        put("er", 1);
        put("erall", 0);
        put("erps", 0);
        put("erns", 0);
        put("erpls", 0);
        put("ern", 1);
        put("erpl", 1);
        put("bury", 1);
        put("buryall", 0);
        put("buryname", 1);
        put("unbury", 1);
        put("unburyall", 0);
        put("unburyname", 1);
        put("buriedp", 1);
        put("buried?", 1);
        put("trace", 1);
        put("untrace", 1);
        put("tracedp", 1);
        put("traced?", 1);
        put("step", 1);
        put("unstep", 1);
        put("steppedp", 1);
        put("stepped?", 1);
        put("edit", 1);
        put("ed", 1);
        put("editfile", 1);
        put("edall", 0);
        put("edps", 0);
        put("edns", 0);
        put("edpls", 0);
        put("edn", 1);
        put("edpl", 1);
        put("save", 1);
        put("savel", 2);
        put("load", 1);
        put("cslsload", 1);
        put("help", 1);
        put("seteditor", 1);
        put("setlibloc", 1);
        put("sethelploc", 1);
        put("setcslsloc", 1);
        put("settemploc", 1);
        put("gc", 0);
        put(".setsegmentsize", 1);
        put("run", 1);
        put("runresult", 1);
        put("repeat", 2);
        put("forever", 1);
        put("repcount", 0);
        put("if", 2);
        put("ifelse", 3);
        put("test", 1);
        put("iftrue", 1);
        put("ift", 1);
        put("iffalse", 1);
        put("iff", 1);
        put("stop", 0);
        put("output", 1);
        put("op", 1);
        put("catch", 2);
        put("throw", 1);
        put("error", 0);
        put("pause", 0);
        put("continue", 1);
        put("co", 1);
        put("wait", 1);
        put("bye", 0);
        put(".maybeoutput", 1);
        put("goto", 1);
        put("tag", 1);
        put("ignore", 1);
        put("`", 1);
        put("for", 2);
        put("do.while", 2);
        put("while", 2);
        put("do.until", 2);
        put("until", 2);
        put("case", 2);
        put("cond", 1);
        put("apply", 2);
        put("invoke", 2);
        put("foreach", 2);
        put("map", 2);
        put("map.se", 2);
        put("filter", 2);
        put("find", 2);
        put("reduce", 2);
        put("crossmap", 2);
        put("cascade", 3);
        put("cascade.2", 5);
        put("transfer", 3);
        put(".defmacro", 2);
        put("macrop", 1);
        put("macro?", 1);
        put("macroexpand", 1);
    }
}
;
boolean;
discoveredAllProcedures = false;
UCBLogoParser(String, source);
{
    this(new ANTLRInputStream(source));
}
UCBLogoParser(ANTLRInputStream, input);
{
    this(new CommonTokenStream(new UCBLogoLexer(input)));
    // Create a lexer and parser that will resolve user defined procedures.
    UCBLogoLexer;
    lexer = new UCBLogoLexer(input);
    UCBLogoParser;
    parser = new UCBLogoParser(new CommonTokenStream(lexer));
    ParseTreeWalker.DEFAULT.walk(new UCBLogoBaseListener(), {});
    void enterProcedure_def();
    UCBLogoParser.Procedure_defContext;
    ctx;
    {
        // Yes, we found a procedure: save it in the procedures-map.
        procedures.put(ctx.NAME().getText(), ctx.variables.amount);
    }
    void enterMacro_def();
    UCBLogoParser.Macro_defContext;
    ctx;
    {
        // Yes, we found a macro: save it in the procedures-map.
        procedures.put(ctx.NAME().getText(), ctx.variables.amount);
    }
}
parser.parse();
;
// Reset the input stream after having resolved the user defined procedures.
input.reset();
this.discoveredAllProcedures = true;
int;
amountParams(String, procedureName);
{
    return procedures.get(procedureName.toLowerCase());
}
boolean;
nameAhead(String, name);
{
    Token_1.Token;
    token = _input.LT(1);
    return token.getType() == NAME && token.getText().equalsIgnoreCase(name);
}
boolean;
procedureNameAhead();
{
    Token_1.Token;
    token = _input.LT(1);
    return token.getType() == NAME && procedures.containsKey(token.getText().toLowerCase());
}
constructor(input, TokenStream);
{
    _this = _super.call(this, input) || this;
    this._interp = new ParserATNSimulator_1.ParserATNSimulator(UCBLogoParser._ATN, this);
}
parse();
ParseContext;
{
    var _localctx = new ParseContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, UCBLogoParser.RULE_parse);
    try {
        var _alt = void 0;
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 29;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                        {
                            this.state = 26;
                            this.instruction();
                        }
                    }
                }
                this.state = 31;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
            }
            this.state = 32;
            this.match(UCBLogoParser.EOF);
        }
    }
    catch (re) {
        if (re instanceof RecognitionException_1.RecognitionException) {
            _localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return _localctx;
}
instruction();
InstructionContext;
{
    var _localctx = new InstructionContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, UCBLogoParser.RULE_instruction);
    try {
        this.state = 38;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
            case 1:
                _localctx = new ProcedureDefInstructionContext(_localctx);
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 34;
                    this.procedure_def();
                }
                break;
            case 2:
                _localctx = new MacroDefInstructionContext(_localctx);
                this.enterOuterAlt(_localctx, 2);
                {
                    this.state = 35;
                    this.macro_def();
                }
                break;
            case 3:
                _localctx = new ProcedureCallExtraInputInstructionContext(_localctx);
                this.enterOuterAlt(_localctx, 3);
                {
                    this.state = 36;
                    this.procedure_call_extra_input();
                }
                break;
            case 4:
                _localctx = new ProcedureCallInstructionContext(_localctx);
                this.enterOuterAlt(_localctx, 4);
                {
                    this.state = 37;
                    this.procedure_call();
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
}
procedure_def();
Procedure_defContext;
{
    var _localctx = new Procedure_defContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, UCBLogoParser.RULE_procedure_def);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 40;
            this.match(UCBLogoParser.TO);
            this.state = 41;
            _localctx._NAME = this.match(UCBLogoParser.NAME);
            this.state = 42;
            _localctx._variables = this.variables();
            this.state = 43;
            this.body_def();
            procedures.put(_localctx._NAME.getText(), _localctx._variables.amount);
        }
    }
    catch (re) {
        if (re instanceof RecognitionException_1.RecognitionException) {
            _localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return _localctx;
}
macro_def();
Macro_defContext;
{
    var _localctx = new Macro_defContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, UCBLogoParser.RULE_macro_def);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 46;
            this.match(UCBLogoParser.MACRO);
            this.state = 47;
            _localctx._NAME = this.match(UCBLogoParser.NAME);
            this.state = 48;
            _localctx._variables = this.variables();
            this.state = 49;
            this.body_def();
            procedures.put(_localctx._NAME.getText(), _localctx._variables.amount);
        }
    }
    catch (re) {
        if (re instanceof RecognitionException_1.RecognitionException) {
            _localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return _localctx;
}
variables();
VariablesContext;
{
    var _localctx = new VariablesContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, UCBLogoParser.RULE_variables);
    try {
        var _alt = void 0;
        this.enterOuterAlt(_localctx, 1);
        {
            _localctx.amount = 0;
            this.state = 57;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                        {
                            this.state = 53;
                            this.match(UCBLogoParser.VARIABLE);
                            _localctx.amount++;
                        }
                    }
                }
                this.state = 59;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
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
}
body_def();
Body_defContext;
{
    var _localctx = new Body_defContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, UCBLogoParser.RULE_body_def);
    var _la = void 0;
    try {
        var _alt = void 0;
        this.state = 75;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
            case 1:
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 60;
                    if (!(discoveredAllProcedures)) {
                        throw new FailedPredicateException_1.FailedPredicateException(this, "discoveredAllProcedures");
                    }
                    this.state = 64;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 61;
                                    this.body_instruction();
                                }
                            }
                        }
                        this.state = 66;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                    }
                    this.state = 67;
                    this.match(UCBLogoParser.END);
                }
                break;
            case 2:
                this.enterOuterAlt(_localctx, 2);
                {
                    this.state = 71;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UCBLogoParser.T__0) | (1 << UCBLogoParser.T__1) | (1 << UCBLogoParser.TO) | (1 << UCBLogoParser.MACRO) | (1 << UCBLogoParser.WORD) | (1 << UCBLogoParser.SKIP_) | (1 << UCBLogoParser.OPEN_ARRAY) | (1 << UCBLogoParser.CLOSE_ARRAY) | (1 << UCBLogoParser.OPEN_LIST) | (1 << UCBLogoParser.CLOSE_LIST) | (1 << UCBLogoParser.MINUS) | (1 << UCBLogoParser.PLUS) | (1 << UCBLogoParser.MULT) | (1 << UCBLogoParser.DIV) | (1 << UCBLogoParser.LT) | (1 << UCBLogoParser.GT) | (1 << UCBLogoParser.EQ) | (1 << UCBLogoParser.LT_EQ) | (1 << UCBLogoParser.GT_EQ) | (1 << UCBLogoParser.NOT_EQ) | (1 << UCBLogoParser.QUOTED_WORD) | (1 << UCBLogoParser.NUMBER) | (1 << UCBLogoParser.VARIABLE) | (1 << UCBLogoParser.NAME) | (1 << UCBLogoParser.ANY))) !== 0)) {
                        {
                            {
                                this.state = 68;
                                _la = this._input.LA(1);
                                if (_la <= 0 || (_la === UCBLogoParser.END)) {
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
                        this.state = 73;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 74;
                    this.match(UCBLogoParser.END);
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
}
body_instruction();
Body_instructionContext;
{
    var _localctx = new Body_instructionContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, UCBLogoParser.RULE_body_instruction);
    try {
        this.state = 79;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
            case 1:
                this.enterOuterAlt(_localctx, 1);
                {
                    this.state = 77;
                    this.procedure_call_extra_input();
                }
                break;
            case 2:
                this.enterOuterAlt(_localctx, 2);
                {
                    this.state = 78;
                    this.procedure_call();
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
}
procedure_call_extra_input();
Procedure_call_extra_inputContext;
{
    var _localctx = new Procedure_call_extra_inputContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, UCBLogoParser.RULE_procedure_call_extra_input);
    try {
        var _alt = void 0;
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 81;
            this.match(UCBLogoParser.T__0);
            this.state = 82;
            if (!(procedureNameAhead())) {
                throw new FailedPredicateException_1.FailedPredicateException(this, "procedureNameAhead()");
            }
            this.state = 83;
            this.match(UCBLogoParser.NAME);
            this.state = 87;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                        {
                            this.state = 84;
                            this.expression(0);
                        }
                    }
                }
                this.state = 89;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
            }
            this.state = 90;
            this.match(UCBLogoParser.T__1);
        }
    }
    catch (re) {
        if (re instanceof RecognitionException_1.RecognitionException) {
            _localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return _localctx;
}
procedure_call();
Procedure_callContext;
{
    var _localctx = new Procedure_callContext(this._ctx, this.state);
    this.enterRule(_localctx, 16, UCBLogoParser.RULE_procedure_call);
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 92;
            if (!(procedureNameAhead())) {
                throw new FailedPredicateException_1.FailedPredicateException(this, "procedureNameAhead()");
            }
            this.state = 93;
            _localctx._NAME = this.match(UCBLogoParser.NAME);
            this.state = 94;
            this.expressions(_localctx._NAME.getText(), amountParams(_localctx._NAME.getText()));
        }
    }
    catch (re) {
        if (re instanceof RecognitionException_1.RecognitionException) {
            _localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return _localctx;
}
expressions(name, String, total, int);
ExpressionsContext;
{
    var _localctx = new ExpressionsContext(this._ctx, this.state, name, total);
    this.enterRule(_localctx, 18, UCBLogoParser.RULE_expressions);
    try {
        var _alt = void 0;
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 102;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                        {
                            this.state = 96;
                            if (!(_localctx.n < _localctx.total)) {
                                throw new FailedPredicateException_1.FailedPredicateException(this, "$n < $total");
                            }
                            this.state = 97;
                            this.expression(0);
                            _localctx.n++;
                        }
                    }
                }
                this.state = 104;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
            }
            // Make sure there are enough inputs parsed for 'name'.
            if (_localctx.total > _localctx.n) {
                throw new RuntimeException("not enough inputs to " + name);
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
}
expression();
ExpressionContext;
expression(_p, number);
ExpressionContext;
expression(_p ?  : number);
ExpressionContext;
{
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var _localctx = new ExpressionContext(this._ctx, _parentState);
    var _prevctx = _localctx;
    var _startState = 20;
    this.enterRecursionRule(_localctx, 20, UCBLogoParser.RULE_expression, _p);
    try {
        var _alt = void 0;
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 123;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    {
                        _localctx = new UnaryMinusExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 108;
                        this.match(UCBLogoParser.MINUS);
                        this.state = 109;
                        this.expression(21);
                    }
                    break;
                case 2:
                    {
                        _localctx = new ProcedureCallExtraInputContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 110;
                        this.procedure_call_extra_input();
                    }
                    break;
                case 3:
                    {
                        _localctx = new ProcedureCallExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 111;
                        this.procedure_call();
                    }
                    break;
                case 4:
                    {
                        _localctx = new ParensExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 112;
                        this.match(UCBLogoParser.T__0);
                        this.state = 113;
                        this.expression(0);
                        this.state = 114;
                        this.match(UCBLogoParser.T__1);
                    }
                    break;
                case 5:
                    {
                        _localctx = new ArrayExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 116;
                        this.array();
                    }
                    break;
                case 6:
                    {
                        _localctx = new ListExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 117;
                        this.list();
                    }
                    break;
                case 7:
                    {
                        _localctx = new WordExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 118;
                        this.match(UCBLogoParser.WORD);
                    }
                    break;
                case 8:
                    {
                        _localctx = new QuotedWordExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 119;
                        this.match(UCBLogoParser.QUOTED_WORD);
                    }
                    break;
                case 9:
                    {
                        _localctx = new NumberExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 120;
                        this.match(UCBLogoParser.NUMBER);
                    }
                    break;
                case 10:
                    {
                        _localctx = new VariableExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 121;
                        this.match(UCBLogoParser.VARIABLE);
                    }
                    break;
                case 11:
                    {
                        _localctx = new NameExpressionContext(_localctx);
                        this._ctx = _localctx;
                        _prevctx = _localctx;
                        this.state = 122;
                        this.match(UCBLogoParser.NAME);
                    }
                    break;
            }
            this._ctx._stop = this._input.tryLT(-1);
            this.state = 157;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = _localctx;
                    {
                        this.state = 155;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                            case 1:
                                {
                                    _localctx = new MultiplyExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, UCBLogoParser.RULE_expression);
                                    this.state = 125;
                                    if (!(this.precpred(this._ctx, 10))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                                    }
                                    this.state = 126;
                                    this.match(UCBLogoParser.MULT);
                                    this.state = 127;
                                    this.expression(11);
                                }
                                break;
                            case 2:
                                {
                                    _localctx = new DivideExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, UCBLogoParser.RULE_expression);
                                    this.state = 128;
                                    if (!(this.precpred(this._ctx, 9))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                    }
                                    this.state = 129;
                                    this.match(UCBLogoParser.DIV);
                                    this.state = 130;
                                    this.expression(10);
                                }
                                break;
                            case 3:
                                {
                                    _localctx = new AdditionExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, UCBLogoParser.RULE_expression);
                                    this.state = 131;
                                    if (!(this.precpred(this._ctx, 8))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                    }
                                    this.state = 132;
                                    this.match(UCBLogoParser.PLUS);
                                    this.state = 133;
                                    this.expression(9);
                                }
                                break;
                            case 4:
                                {
                                    _localctx = new SubtractionExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, UCBLogoParser.RULE_expression);
                                    this.state = 134;
                                    if (!(this.precpred(this._ctx, 7))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                    }
                                    this.state = 135;
                                    this.match(UCBLogoParser.MINUS);
                                    this.state = 136;
                                    this.expression(8);
                                }
                                break;
                            case 5:
                                {
                                    _localctx = new LessThanExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, UCBLogoParser.RULE_expression);
                                    this.state = 137;
                                    if (!(this.precpred(this._ctx, 6))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                    }
                                    this.state = 138;
                                    this.match(UCBLogoParser.LT);
                                    this.state = 139;
                                    this.expression(7);
                                }
                                break;
                            case 6:
                                {
                                    _localctx = new GreaterThanExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, UCBLogoParser.RULE_expression);
                                    this.state = 140;
                                    if (!(this.precpred(this._ctx, 5))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                    }
                                    this.state = 141;
                                    this.match(UCBLogoParser.GT);
                                    this.state = 142;
                                    this.expression(6);
                                }
                                break;
                            case 7:
                                {
                                    _localctx = new LessThanEqualsExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, UCBLogoParser.RULE_expression);
                                    this.state = 143;
                                    if (!(this.precpred(this._ctx, 4))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                    }
                                    this.state = 144;
                                    this.match(UCBLogoParser.LT_EQ);
                                    this.state = 145;
                                    this.expression(5);
                                }
                                break;
                            case 8:
                                {
                                    _localctx = new GreaterThanEqualsExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, UCBLogoParser.RULE_expression);
                                    this.state = 146;
                                    if (!(this.precpred(this._ctx, 3))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                    }
                                    this.state = 147;
                                    this.match(UCBLogoParser.GT_EQ);
                                    this.state = 148;
                                    this.expression(4);
                                }
                                break;
                            case 9:
                                {
                                    _localctx = new EqualsExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, UCBLogoParser.RULE_expression);
                                    this.state = 149;
                                    if (!(this.precpred(this._ctx, 2))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                    }
                                    this.state = 150;
                                    this.match(UCBLogoParser.EQ);
                                    this.state = 151;
                                    this.expression(3);
                                }
                                break;
                            case 10:
                                {
                                    _localctx = new NotEqualsExpressionExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                    this.pushNewRecursionContext(_localctx, _startState, UCBLogoParser.RULE_expression);
                                    this.state = 152;
                                    if (!(this.precpred(this._ctx, 1))) {
                                        throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                    }
                                    this.state = 153;
                                    this.match(UCBLogoParser.NOT_EQ);
                                    this.state = 154;
                                    this.expression(2);
                                }
                                break;
                        }
                    }
                }
                this.state = 159;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
}
array();
ArrayContext;
{
    var _localctx = new ArrayContext(this._ctx, this.state);
    this.enterRule(_localctx, 22, UCBLogoParser.RULE_array);
    var _la = void 0;
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 160;
            this.match(UCBLogoParser.OPEN_ARRAY);
            this.state = 165;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UCBLogoParser.T__0) | (1 << UCBLogoParser.T__1) | (1 << UCBLogoParser.TO) | (1 << UCBLogoParser.END) | (1 << UCBLogoParser.MACRO) | (1 << UCBLogoParser.WORD) | (1 << UCBLogoParser.SKIP_) | (1 << UCBLogoParser.OPEN_ARRAY) | (1 << UCBLogoParser.OPEN_LIST) | (1 << UCBLogoParser.CLOSE_LIST) | (1 << UCBLogoParser.MINUS) | (1 << UCBLogoParser.PLUS) | (1 << UCBLogoParser.MULT) | (1 << UCBLogoParser.DIV) | (1 << UCBLogoParser.LT) | (1 << UCBLogoParser.GT) | (1 << UCBLogoParser.EQ) | (1 << UCBLogoParser.LT_EQ) | (1 << UCBLogoParser.GT_EQ) | (1 << UCBLogoParser.NOT_EQ) | (1 << UCBLogoParser.QUOTED_WORD) | (1 << UCBLogoParser.NUMBER) | (1 << UCBLogoParser.VARIABLE) | (1 << UCBLogoParser.NAME) | (1 << UCBLogoParser.ANY))) !== 0)) {
                {
                    this.state = 163;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case UCBLogoParser.T__0:
                        case UCBLogoParser.T__1:
                        case UCBLogoParser.TO:
                        case UCBLogoParser.END:
                        case UCBLogoParser.MACRO:
                        case UCBLogoParser.WORD:
                        case UCBLogoParser.SKIP_:
                        case UCBLogoParser.OPEN_LIST:
                        case UCBLogoParser.CLOSE_LIST:
                        case UCBLogoParser.MINUS:
                        case UCBLogoParser.PLUS:
                        case UCBLogoParser.MULT:
                        case UCBLogoParser.DIV:
                        case UCBLogoParser.LT:
                        case UCBLogoParser.GT:
                        case UCBLogoParser.EQ:
                        case UCBLogoParser.LT_EQ:
                        case UCBLogoParser.GT_EQ:
                        case UCBLogoParser.NOT_EQ:
                        case UCBLogoParser.QUOTED_WORD:
                        case UCBLogoParser.NUMBER:
                        case UCBLogoParser.VARIABLE:
                        case UCBLogoParser.NAME:
                        case UCBLogoParser.ANY:
                            {
                                this.state = 161;
                                _la = this._input.LA(1);
                                if (_la <= 0 || (_la === UCBLogoParser.OPEN_ARRAY || _la === UCBLogoParser.CLOSE_ARRAY)) {
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
                        case UCBLogoParser.OPEN_ARRAY:
                            {
                                this.state = 162;
                                this.array();
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                }
                this.state = 167;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 168;
            this.match(UCBLogoParser.CLOSE_ARRAY);
        }
    }
    catch (re) {
        if (re instanceof RecognitionException_1.RecognitionException) {
            _localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return _localctx;
}
list();
ListContext;
{
    var _localctx = new ListContext(this._ctx, this.state);
    this.enterRule(_localctx, 24, UCBLogoParser.RULE_list);
    var _la = void 0;
    try {
        this.enterOuterAlt(_localctx, 1);
        {
            this.state = 170;
            this.match(UCBLogoParser.OPEN_LIST);
            this.state = 175;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << UCBLogoParser.T__0) | (1 << UCBLogoParser.T__1) | (1 << UCBLogoParser.TO) | (1 << UCBLogoParser.END) | (1 << UCBLogoParser.MACRO) | (1 << UCBLogoParser.WORD) | (1 << UCBLogoParser.SKIP_) | (1 << UCBLogoParser.OPEN_ARRAY) | (1 << UCBLogoParser.CLOSE_ARRAY) | (1 << UCBLogoParser.OPEN_LIST) | (1 << UCBLogoParser.MINUS) | (1 << UCBLogoParser.PLUS) | (1 << UCBLogoParser.MULT) | (1 << UCBLogoParser.DIV) | (1 << UCBLogoParser.LT) | (1 << UCBLogoParser.GT) | (1 << UCBLogoParser.EQ) | (1 << UCBLogoParser.LT_EQ) | (1 << UCBLogoParser.GT_EQ) | (1 << UCBLogoParser.NOT_EQ) | (1 << UCBLogoParser.QUOTED_WORD) | (1 << UCBLogoParser.NUMBER) | (1 << UCBLogoParser.VARIABLE) | (1 << UCBLogoParser.NAME) | (1 << UCBLogoParser.ANY))) !== 0)) {
                {
                    this.state = 173;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case UCBLogoParser.T__0:
                        case UCBLogoParser.T__1:
                        case UCBLogoParser.TO:
                        case UCBLogoParser.END:
                        case UCBLogoParser.MACRO:
                        case UCBLogoParser.WORD:
                        case UCBLogoParser.SKIP_:
                        case UCBLogoParser.OPEN_ARRAY:
                        case UCBLogoParser.CLOSE_ARRAY:
                        case UCBLogoParser.MINUS:
                        case UCBLogoParser.PLUS:
                        case UCBLogoParser.MULT:
                        case UCBLogoParser.DIV:
                        case UCBLogoParser.LT:
                        case UCBLogoParser.GT:
                        case UCBLogoParser.EQ:
                        case UCBLogoParser.LT_EQ:
                        case UCBLogoParser.GT_EQ:
                        case UCBLogoParser.NOT_EQ:
                        case UCBLogoParser.QUOTED_WORD:
                        case UCBLogoParser.NUMBER:
                        case UCBLogoParser.VARIABLE:
                        case UCBLogoParser.NAME:
                        case UCBLogoParser.ANY:
                            {
                                this.state = 171;
                                _la = this._input.LA(1);
                                if (_la <= 0 || (_la === UCBLogoParser.OPEN_LIST || _la === UCBLogoParser.CLOSE_LIST)) {
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
                        case UCBLogoParser.OPEN_LIST:
                            {
                                this.state = 172;
                                this.list();
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                }
                this.state = 177;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 178;
            this.match(UCBLogoParser.CLOSE_LIST);
        }
    }
    catch (re) {
        if (re instanceof RecognitionException_1.RecognitionException) {
            _localctx.exception = re;
            this._errHandler.reportError(this, re);
            this._errHandler.recover(this, re);
        }
        else {
            throw re;
        }
    }
    finally {
        this.exitRule();
    }
    return _localctx;
}
sempred(_localctx, RuleContext_1.RuleContext, ruleIndex, number, predIndex, number);
boolean;
{
    switch (ruleIndex) {
        case 5:
            return this.body_def_sempred(_localctx, predIndex);
        case 7:
            return this.procedure_call_extra_input_sempred(_localctx, predIndex);
        case 8:
            return this.procedure_call_sempred(_localctx, predIndex);
        case 9:
            return this.expressions_sempred(_localctx, predIndex);
        case 10:
            return this.expression_sempred(_localctx, predIndex);
    }
    return true;
}
body_def_sempred(_localctx, Body_defContext, predIndex, number);
boolean;
{
    switch (predIndex) {
        case 0:
            return discoveredAllProcedures;
    }
    return true;
}
procedure_call_extra_input_sempred(_localctx, Procedure_call_extra_inputContext, predIndex, number);
boolean;
{
    switch (predIndex) {
        case 1:
            return procedureNameAhead();
    }
    return true;
}
procedure_call_sempred(_localctx, Procedure_callContext, predIndex, number);
boolean;
{
    switch (predIndex) {
        case 2:
            return procedureNameAhead();
    }
    return true;
}
expressions_sempred(_localctx, ExpressionsContext, predIndex, number);
boolean;
{
    switch (predIndex) {
        case 3:
            return _localctx.n < _localctx.total;
    }
    return true;
}
expression_sempred(_localctx, ExpressionContext, predIndex, number);
boolean;
{
    switch (predIndex) {
        case 4:
            return this.precpred(this._ctx, 10);
        case 5:
            return this.precpred(this._ctx, 9);
        case 6:
            return this.precpred(this._ctx, 8);
        case 7:
            return this.precpred(this._ctx, 7);
        case 8:
            return this.precpred(this._ctx, 6);
        case 9:
            return this.precpred(this._ctx, 5);
        case 10:
            return this.precpred(this._ctx, 4);
        case 11:
            return this.precpred(this._ctx, 3);
        case 12:
            return this.precpred(this._ctx, 2);
        case 13:
            return this.precpred(this._ctx, 1);
    }
    return true;
}
_serializedATN: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1C\xB7\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02!\v\x02\x03\x02\x03" +
        "\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03)\n\x03\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x05\x03\x06\x03\x06\x03\x06\x07\x06:\n\x06\f\x06\x0E\x06=\v\x06\x03\x07" +
        "\x03\x07\x07\x07A\n\x07\f\x07\x0E\x07D\v\x07\x03\x07\x03\x07\x07\x07H" +
        "\n\x07\f\x07\x0E\x07K\v\x07\x03\x07\x05\x07N\n\x07\x03\b\x03\b\x05\bR" +
        "\n\b\x03\t\x03\t\x03\t\x03\t\x07\tX\n\t\f\t\x0E\t[\v\t\x03\t\x03\t\x03" +
        "\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x07\vg\n\v\f\v\x0E\vj\v\v" +
        "\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f~\n\f\x03\f\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
        "\f\x03\f\x03\f\x07\f\x9E\n\f\f\f\x0E\f\xA1\v\f\x03\r\x03\r\x03\r\x07\r" +
        "\xA6\n\r\f\r\x0E\r\xA9\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E" +
        "\xB0\n\x0E\f\x0E\x0E\x0E\xB3\v\x0E\x03\x0E\x03\x0E\x03\x0E\x02\x02\x03" +
        "\x16\x0F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
        "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x02\x05\x03\x02\x06\x06\x03\x02\n" +
        "\v\x03\x02\f\r\x02\xCC\x02\x1F\x03\x02\x02\x02\x04(\x03\x02\x02\x02\x06" +
        "*\x03\x02\x02\x02\b0\x03\x02\x02\x02\n6\x03\x02\x02\x02\fM\x03\x02\x02" +
        "\x02\x0EQ\x03\x02\x02\x02\x10S\x03\x02\x02\x02\x12^\x03\x02\x02\x02\x14" +
        "h\x03\x02\x02\x02\x16}\x03\x02\x02\x02\x18\xA2\x03\x02\x02\x02\x1A\xAC" +
        "\x03\x02\x02\x02\x1C\x1E\x05\x04\x03\x02\x1D\x1C\x03\x02\x02\x02\x1E!" +
        "\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \"\x03\x02" +
        "\x02\x02!\x1F\x03\x02\x02\x02\"#\x07\x02\x02\x03#\x03\x03\x02\x02\x02" +
        "$)\x05\x06\x04\x02%)\x05\b\x05\x02&)\x05\x10\t\x02\')\x05\x12\n\x02($" +
        "\x03\x02\x02\x02(%\x03\x02\x02\x02(&\x03\x02\x02\x02(\'\x03\x02\x02\x02" +
        ")\x05\x03\x02\x02\x02*+\x07\x05\x02\x02+,\x07\x1B\x02\x02,-\x05\n\x06" +
        "\x02-.\x05\f\x07\x02./\b\x04\x01\x02/\x07\x03\x02\x02\x0201\x07\x07\x02" +
        "\x0212\x07\x1B\x02\x0223\x05\n\x06\x0234\x05\f\x07\x0245\b\x05\x01\x02" +
        "5\t\x03\x02\x02\x026;\b\x06\x01\x0278\x07\x1A\x02\x028:\b\x06\x01\x02" +
        "97\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02" +
        "<\v\x03\x02\x02\x02=;\x03\x02\x02\x02>B\x06\x07\x02\x02?A\x05\x0E\b\x02" +
        "@?\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02" +
        "CE\x03\x02\x02\x02DB\x03\x02\x02\x02EN\x07\x06\x02\x02FH\n\x02\x02\x02" +
        "GF\x03\x02\x02\x02HK\x03\x02\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02" +
        "JL\x03\x02\x02\x02KI\x03\x02\x02\x02LN\x07\x06\x02\x02M>\x03\x02\x02\x02" +
        "MI\x03\x02\x02\x02N\r\x03\x02\x02\x02OR\x05\x10\t\x02PR\x05\x12\n\x02" +
        "QO\x03\x02\x02\x02QP\x03\x02\x02\x02R\x0F\x03\x02\x02\x02ST\x07\x03\x02" +
        "\x02TU\x06\t\x03\x02UY\x07\x1B\x02\x02VX\x05\x16\f\x02WV\x03\x02\x02\x02" +
        "X[\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\\\x03\x02\x02" +
        "\x02[Y\x03\x02\x02\x02\\]\x07\x04\x02\x02]\x11\x03\x02\x02\x02^_\x06\n" +
        "\x04\x02_`\x07\x1B\x02\x02`a\x05\x14\v\x02a\x13\x03\x02\x02\x02bc\x06" +
        "\v\x05\x03cd\x05\x16\f\x02de\b\v\x01\x02eg\x03\x02\x02\x02fb\x03\x02\x02" +
        "\x02gj\x03\x02\x02\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02ik\x03\x02\x02" +
        "\x02jh\x03\x02\x02\x02kl\b\v\x01\x02l\x15\x03\x02\x02\x02mn\b\f\x01\x02" +
        "no\x07\x0E\x02\x02o~\x05\x16\f\x17p~\x05\x10\t\x02q~\x05\x12\n\x02rs\x07" +
        "\x03\x02\x02st\x05\x16\f\x02tu\x07\x04\x02\x02u~\x03\x02\x02\x02v~\x05" +
        "\x18\r\x02w~\x05\x1A\x0E\x02x~\x07\b\x02\x02y~\x07\x18\x02\x02z~\x07\x19" +
        "\x02\x02{~\x07\x1A\x02\x02|~\x07\x1B\x02\x02}m\x03\x02\x02\x02}p\x03\x02" +
        "\x02\x02}q\x03\x02\x02\x02}r\x03\x02\x02\x02}v\x03\x02\x02\x02}w\x03\x02" +
        "\x02\x02}x\x03\x02\x02\x02}y\x03\x02\x02\x02}z\x03\x02\x02\x02}{\x03\x02" +
        "\x02\x02}|\x03\x02\x02\x02~\x9F\x03\x02\x02\x02\x7F\x80\f\f\x02\x02\x80" +
        "\x81\x07\x10\x02\x02\x81\x9E\x05\x16\f\r\x82\x83\f\v\x02\x02\x83\x84\x07" +
        "\x11\x02\x02\x84\x9E\x05\x16\f\f\x85\x86\f\n\x02\x02\x86\x87\x07\x0F\x02" +
        "\x02\x87\x9E\x05\x16\f\v\x88\x89\f\t\x02\x02\x89\x8A\x07\x0E\x02\x02\x8A" +
        "\x9E\x05\x16\f\n\x8B\x8C\f\b\x02\x02\x8C\x8D\x07\x12\x02\x02\x8D\x9E\x05" +
        "\x16\f\t\x8E\x8F\f\x07\x02\x02\x8F\x90\x07\x13\x02\x02\x90\x9E\x05\x16" +
        "\f\b\x91\x92\f\x06\x02\x02\x92\x93\x07\x15\x02\x02\x93\x9E\x05\x16\f\x07" +
        "\x94\x95\f\x05\x02\x02\x95\x96\x07\x16\x02\x02\x96\x9E\x05\x16\f\x06\x97" +
        "\x98\f\x04\x02\x02\x98\x99\x07\x14\x02\x02\x99\x9E\x05\x16\f\x05\x9A\x9B" +
        "\f\x03\x02\x02\x9B\x9C\x07\x17\x02\x02\x9C\x9E\x05\x16\f\x04\x9D\x7F\x03" +
        "\x02\x02\x02\x9D\x82\x03\x02\x02\x02\x9D\x85\x03\x02\x02\x02\x9D\x88\x03" +
        "\x02\x02\x02\x9D\x8B\x03\x02\x02\x02\x9D\x8E\x03\x02\x02\x02\x9D\x91\x03" +
        "\x02\x02\x02\x9D\x94\x03\x02\x02\x02\x9D\x97\x03\x02\x02\x02\x9D\x9A\x03" +
        "\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03" +
        "\x02\x02\x02\xA0\x17\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA7\x07" +
        "\n\x02\x02\xA3\xA6\n\x03\x02\x02\xA4\xA6\x05\x18\r\x02\xA5\xA3\x03\x02" +
        "\x02\x02\xA5\xA4\x03\x02\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02" +
        "\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAA\x03\x02\x02\x02\xA9\xA7\x03\x02" +
        "\x02\x02\xAA\xAB\x07\v\x02\x02\xAB\x19\x03\x02\x02\x02\xAC\xB1\x07\f\x02" +
        "\x02\xAD\xB0\n\x04\x02\x02\xAE\xB0\x05\x1A\x0E\x02\xAF\xAD\x03\x02\x02" +
        "\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB3\x03\x02\x02\x02\xB1\xAF\x03\x02\x02" +
        "\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x03\x02\x02\x02\xB3\xB1\x03\x02\x02" +
        "\x02\xB4\xB5\x07\r\x02\x02\xB5\x1B\x03\x02\x02\x02\x12\x1F(;BIMQYh}\x9D" +
        "\x9F\xA5\xA7\xAF\xB1";
__ATN: ATN_1.ATN;
get;
_ATN();
ATN_1.ATN;
{
    if (!UCBLogoParser.__ATN) {
        UCBLogoParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(UCBLogoParser._serializedATN));
    }
    return UCBLogoParser.__ATN;
}
var ParseContext = /** @class */ (function (_super) {
    __extends(ParseContext, _super);
    function ParseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParseContext.prototype.EOF = function () { return this.getToken(UCBLogoParser.EOF, 0); };
    ParseContext.prototype.instruction = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(InstructionContext);
        }
        else {
            return this.getRuleContext(i, InstructionContext);
        }
    };
    Object.defineProperty(ParseContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UCBLogoParser.RULE_parse; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ParseContext.prototype.enterRule = function (listener) {
        if (listener.enterParse) {
            listener.enterParse(this);
        }
    };
    // @Override
    ParseContext.prototype.exitRule = function (listener) {
        if (listener.exitParse) {
            listener.exitParse(this);
        }
    };
    // @Override
    ParseContext.prototype.accept = function (visitor) {
        if (visitor.visitParse) {
            return visitor.visitParse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParseContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ParseContext = ParseContext;
var InstructionContext = /** @class */ (function (_super) {
    __extends(InstructionContext, _super);
    function InstructionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(InstructionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UCBLogoParser.RULE_instruction; },
        enumerable: true,
        configurable: true
    });
    InstructionContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return InstructionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.InstructionContext = InstructionContext;
var ProcedureDefInstructionContext = /** @class */ (function (_super) {
    __extends(ProcedureDefInstructionContext, _super);
    function ProcedureDefInstructionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ProcedureDefInstructionContext.prototype.procedure_def = function () {
        return this.getRuleContext(0, Procedure_defContext);
    };
    // @Override
    ProcedureDefInstructionContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureDefInstruction) {
            listener.enterProcedureDefInstruction(this);
        }
    };
    // @Override
    ProcedureDefInstructionContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureDefInstruction) {
            listener.exitProcedureDefInstruction(this);
        }
    };
    // @Override
    ProcedureDefInstructionContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureDefInstruction) {
            return visitor.visitProcedureDefInstruction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureDefInstructionContext;
}(InstructionContext));
exports.ProcedureDefInstructionContext = ProcedureDefInstructionContext;
var MacroDefInstructionContext = /** @class */ (function (_super) {
    __extends(MacroDefInstructionContext, _super);
    function MacroDefInstructionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MacroDefInstructionContext.prototype.macro_def = function () {
        return this.getRuleContext(0, Macro_defContext);
    };
    // @Override
    MacroDefInstructionContext.prototype.enterRule = function (listener) {
        if (listener.enterMacroDefInstruction) {
            listener.enterMacroDefInstruction(this);
        }
    };
    // @Override
    MacroDefInstructionContext.prototype.exitRule = function (listener) {
        if (listener.exitMacroDefInstruction) {
            listener.exitMacroDefInstruction(this);
        }
    };
    // @Override
    MacroDefInstructionContext.prototype.accept = function (visitor) {
        if (visitor.visitMacroDefInstruction) {
            return visitor.visitMacroDefInstruction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MacroDefInstructionContext;
}(InstructionContext));
exports.MacroDefInstructionContext = MacroDefInstructionContext;
var ProcedureCallExtraInputInstructionContext = /** @class */ (function (_super) {
    __extends(ProcedureCallExtraInputInstructionContext, _super);
    function ProcedureCallExtraInputInstructionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ProcedureCallExtraInputInstructionContext.prototype.procedure_call_extra_input = function () {
        return this.getRuleContext(0, Procedure_call_extra_inputContext);
    };
    // @Override
    ProcedureCallExtraInputInstructionContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureCallExtraInputInstruction) {
            listener.enterProcedureCallExtraInputInstruction(this);
        }
    };
    // @Override
    ProcedureCallExtraInputInstructionContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureCallExtraInputInstruction) {
            listener.exitProcedureCallExtraInputInstruction(this);
        }
    };
    // @Override
    ProcedureCallExtraInputInstructionContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureCallExtraInputInstruction) {
            return visitor.visitProcedureCallExtraInputInstruction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureCallExtraInputInstructionContext;
}(InstructionContext));
exports.ProcedureCallExtraInputInstructionContext = ProcedureCallExtraInputInstructionContext;
var ProcedureCallInstructionContext = /** @class */ (function (_super) {
    __extends(ProcedureCallInstructionContext, _super);
    function ProcedureCallInstructionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ProcedureCallInstructionContext.prototype.procedure_call = function () {
        return this.getRuleContext(0, Procedure_callContext);
    };
    // @Override
    ProcedureCallInstructionContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureCallInstruction) {
            listener.enterProcedureCallInstruction(this);
        }
    };
    // @Override
    ProcedureCallInstructionContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureCallInstruction) {
            listener.exitProcedureCallInstruction(this);
        }
    };
    // @Override
    ProcedureCallInstructionContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureCallInstruction) {
            return visitor.visitProcedureCallInstruction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureCallInstructionContext;
}(InstructionContext));
exports.ProcedureCallInstructionContext = ProcedureCallInstructionContext;
var Procedure_defContext = /** @class */ (function (_super) {
    __extends(Procedure_defContext, _super);
    function Procedure_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Procedure_defContext.prototype.TO = function () { return this.getToken(UCBLogoParser.TO, 0); };
    Procedure_defContext.prototype.NAME = function () { return this.getToken(UCBLogoParser.NAME, 0); };
    Procedure_defContext.prototype.variables = function () {
        return this.getRuleContext(0, VariablesContext);
    };
    Procedure_defContext.prototype.body_def = function () {
        return this.getRuleContext(0, Body_defContext);
    };
    Object.defineProperty(Procedure_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UCBLogoParser.RULE_procedure_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Procedure_defContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedure_def) {
            listener.enterProcedure_def(this);
        }
    };
    // @Override
    Procedure_defContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedure_def) {
            listener.exitProcedure_def(this);
        }
    };
    // @Override
    Procedure_defContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedure_def) {
            return visitor.visitProcedure_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Procedure_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Procedure_defContext = Procedure_defContext;
var Macro_defContext = /** @class */ (function (_super) {
    __extends(Macro_defContext, _super);
    function Macro_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Macro_defContext.prototype.MACRO = function () { return this.getToken(UCBLogoParser.MACRO, 0); };
    Macro_defContext.prototype.NAME = function () { return this.getToken(UCBLogoParser.NAME, 0); };
    Macro_defContext.prototype.variables = function () {
        return this.getRuleContext(0, VariablesContext);
    };
    Macro_defContext.prototype.body_def = function () {
        return this.getRuleContext(0, Body_defContext);
    };
    Object.defineProperty(Macro_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UCBLogoParser.RULE_macro_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Macro_defContext.prototype.enterRule = function (listener) {
        if (listener.enterMacro_def) {
            listener.enterMacro_def(this);
        }
    };
    // @Override
    Macro_defContext.prototype.exitRule = function (listener) {
        if (listener.exitMacro_def) {
            listener.exitMacro_def(this);
        }
    };
    // @Override
    Macro_defContext.prototype.accept = function (visitor) {
        if (visitor.visitMacro_def) {
            return visitor.visitMacro_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Macro_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Macro_defContext = Macro_defContext;
var VariablesContext = /** @class */ (function (_super) {
    __extends(VariablesContext, _super);
    function VariablesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariablesContext.prototype.VARIABLE = function (i) {
        if (i === undefined) {
            return this.getTokens(UCBLogoParser.VARIABLE);
        }
        else {
            return this.getToken(UCBLogoParser.VARIABLE, i);
        }
    };
    Object.defineProperty(VariablesContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UCBLogoParser.RULE_variables; },
        enumerable: true,
        configurable: true
    });
    // @Override
    VariablesContext.prototype.enterRule = function (listener) {
        if (listener.enterVariables) {
            listener.enterVariables(this);
        }
    };
    // @Override
    VariablesContext.prototype.exitRule = function (listener) {
        if (listener.exitVariables) {
            listener.exitVariables(this);
        }
    };
    // @Override
    VariablesContext.prototype.accept = function (visitor) {
        if (visitor.visitVariables) {
            return visitor.visitVariables(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariablesContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariablesContext = VariablesContext;
var Body_defContext = /** @class */ (function (_super) {
    __extends(Body_defContext, _super);
    function Body_defContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Body_defContext.prototype.END = function (i) {
        if (i === undefined) {
            return this.getTokens(UCBLogoParser.END);
        }
        else {
            return this.getToken(UCBLogoParser.END, i);
        }
    };
    Body_defContext.prototype.body_instruction = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(Body_instructionContext);
        }
        else {
            return this.getRuleContext(i, Body_instructionContext);
        }
    };
    Object.defineProperty(Body_defContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UCBLogoParser.RULE_body_def; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Body_defContext.prototype.enterRule = function (listener) {
        if (listener.enterBody_def) {
            listener.enterBody_def(this);
        }
    };
    // @Override
    Body_defContext.prototype.exitRule = function (listener) {
        if (listener.exitBody_def) {
            listener.exitBody_def(this);
        }
    };
    // @Override
    Body_defContext.prototype.accept = function (visitor) {
        if (visitor.visitBody_def) {
            return visitor.visitBody_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Body_defContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Body_defContext = Body_defContext;
var Body_instructionContext = /** @class */ (function (_super) {
    __extends(Body_instructionContext, _super);
    function Body_instructionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Body_instructionContext.prototype.procedure_call_extra_input = function () {
        return this.tryGetRuleContext(0, Procedure_call_extra_inputContext);
    };
    Body_instructionContext.prototype.procedure_call = function () {
        return this.tryGetRuleContext(0, Procedure_callContext);
    };
    Object.defineProperty(Body_instructionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UCBLogoParser.RULE_body_instruction; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Body_instructionContext.prototype.enterRule = function (listener) {
        if (listener.enterBody_instruction) {
            listener.enterBody_instruction(this);
        }
    };
    // @Override
    Body_instructionContext.prototype.exitRule = function (listener) {
        if (listener.exitBody_instruction) {
            listener.exitBody_instruction(this);
        }
    };
    // @Override
    Body_instructionContext.prototype.accept = function (visitor) {
        if (visitor.visitBody_instruction) {
            return visitor.visitBody_instruction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Body_instructionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Body_instructionContext = Body_instructionContext;
var Procedure_call_extra_inputContext = /** @class */ (function (_super) {
    __extends(Procedure_call_extra_inputContext, _super);
    function Procedure_call_extra_inputContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Procedure_call_extra_inputContext.prototype.NAME = function () { return this.getToken(UCBLogoParser.NAME, 0); };
    Procedure_call_extra_inputContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(Procedure_call_extra_inputContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UCBLogoParser.RULE_procedure_call_extra_input; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Procedure_call_extra_inputContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedure_call_extra_input) {
            listener.enterProcedure_call_extra_input(this);
        }
    };
    // @Override
    Procedure_call_extra_inputContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedure_call_extra_input) {
            listener.exitProcedure_call_extra_input(this);
        }
    };
    // @Override
    Procedure_call_extra_inputContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedure_call_extra_input) {
            return visitor.visitProcedure_call_extra_input(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Procedure_call_extra_inputContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Procedure_call_extra_inputContext = Procedure_call_extra_inputContext;
var Procedure_callContext = /** @class */ (function (_super) {
    __extends(Procedure_callContext, _super);
    function Procedure_callContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Procedure_callContext.prototype.NAME = function () { return this.getToken(UCBLogoParser.NAME, 0); };
    Procedure_callContext.prototype.expressions = function () {
        return this.getRuleContext(0, ExpressionsContext);
    };
    Object.defineProperty(Procedure_callContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UCBLogoParser.RULE_procedure_call; },
        enumerable: true,
        configurable: true
    });
    // @Override
    Procedure_callContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedure_call) {
            listener.enterProcedure_call(this);
        }
    };
    // @Override
    Procedure_callContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedure_call) {
            listener.exitProcedure_call(this);
        }
    };
    // @Override
    Procedure_callContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedure_call) {
            return visitor.visitProcedure_call(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return Procedure_callContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.Procedure_callContext = Procedure_callContext;
var ExpressionsContext = /** @class */ (function (_super) {
    __extends(ExpressionsContext, _super);
    function ExpressionsContext(parent, invokingState, name, total) {
        var _this = _super.call(this, parent, invokingState) || this;
        _this.n = 0;
        _this.name = name;
        _this.total = total;
        return _this;
    }
    ExpressionsContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    Object.defineProperty(ExpressionsContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UCBLogoParser.RULE_expressions; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ExpressionsContext.prototype.enterRule = function (listener) {
        if (listener.enterExpressions) {
            listener.enterExpressions(this);
        }
    };
    // @Override
    ExpressionsContext.prototype.exitRule = function (listener) {
        if (listener.exitExpressions) {
            listener.exitExpressions(this);
        }
    };
    // @Override
    ExpressionsContext.prototype.accept = function (visitor) {
        if (visitor.visitExpressions) {
            return visitor.visitExpressions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ExpressionsContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionsContext = ExpressionsContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UCBLogoParser.RULE_expression; },
        enumerable: true,
        configurable: true
    });
    ExpressionContext.prototype.copyFrom = function (ctx) {
        _super.prototype.copyFrom.call(this, ctx);
    };
    return ExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionContext = ExpressionContext;
var UnaryMinusExpressionContext = /** @class */ (function (_super) {
    __extends(UnaryMinusExpressionContext, _super);
    function UnaryMinusExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    UnaryMinusExpressionContext.prototype.MINUS = function () { return this.getToken(UCBLogoParser.MINUS, 0); };
    UnaryMinusExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    // @Override
    UnaryMinusExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterUnaryMinusExpression) {
            listener.enterUnaryMinusExpression(this);
        }
    };
    // @Override
    UnaryMinusExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitUnaryMinusExpression) {
            listener.exitUnaryMinusExpression(this);
        }
    };
    // @Override
    UnaryMinusExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitUnaryMinusExpression) {
            return visitor.visitUnaryMinusExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return UnaryMinusExpressionContext;
}(ExpressionContext));
exports.UnaryMinusExpressionContext = UnaryMinusExpressionContext;
var ProcedureCallExtraInputContext = /** @class */ (function (_super) {
    __extends(ProcedureCallExtraInputContext, _super);
    function ProcedureCallExtraInputContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ProcedureCallExtraInputContext.prototype.procedure_call_extra_input = function () {
        return this.getRuleContext(0, Procedure_call_extra_inputContext);
    };
    // @Override
    ProcedureCallExtraInputContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureCallExtraInput) {
            listener.enterProcedureCallExtraInput(this);
        }
    };
    // @Override
    ProcedureCallExtraInputContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureCallExtraInput) {
            listener.exitProcedureCallExtraInput(this);
        }
    };
    // @Override
    ProcedureCallExtraInputContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureCallExtraInput) {
            return visitor.visitProcedureCallExtraInput(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureCallExtraInputContext;
}(ExpressionContext));
exports.ProcedureCallExtraInputContext = ProcedureCallExtraInputContext;
var ProcedureCallExpressionContext = /** @class */ (function (_super) {
    __extends(ProcedureCallExpressionContext, _super);
    function ProcedureCallExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ProcedureCallExpressionContext.prototype.procedure_call = function () {
        return this.getRuleContext(0, Procedure_callContext);
    };
    // @Override
    ProcedureCallExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterProcedureCallExpression) {
            listener.enterProcedureCallExpression(this);
        }
    };
    // @Override
    ProcedureCallExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitProcedureCallExpression) {
            listener.exitProcedureCallExpression(this);
        }
    };
    // @Override
    ProcedureCallExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitProcedureCallExpression) {
            return visitor.visitProcedureCallExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProcedureCallExpressionContext;
}(ExpressionContext));
exports.ProcedureCallExpressionContext = ProcedureCallExpressionContext;
var ParensExpressionContext = /** @class */ (function (_super) {
    __extends(ParensExpressionContext, _super);
    function ParensExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ParensExpressionContext.prototype.expression = function () {
        return this.getRuleContext(0, ExpressionContext);
    };
    // @Override
    ParensExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterParensExpression) {
            listener.enterParensExpression(this);
        }
    };
    // @Override
    ParensExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitParensExpression) {
            listener.exitParensExpression(this);
        }
    };
    // @Override
    ParensExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitParensExpression) {
            return visitor.visitParensExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ParensExpressionContext;
}(ExpressionContext));
exports.ParensExpressionContext = ParensExpressionContext;
var ArrayExpressionContext = /** @class */ (function (_super) {
    __extends(ArrayExpressionContext, _super);
    function ArrayExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ArrayExpressionContext.prototype.array = function () {
        return this.getRuleContext(0, ArrayContext);
    };
    // @Override
    ArrayExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterArrayExpression) {
            listener.enterArrayExpression(this);
        }
    };
    // @Override
    ArrayExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitArrayExpression) {
            listener.exitArrayExpression(this);
        }
    };
    // @Override
    ArrayExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitArrayExpression) {
            return visitor.visitArrayExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ArrayExpressionContext;
}(ExpressionContext));
exports.ArrayExpressionContext = ArrayExpressionContext;
var ListExpressionContext = /** @class */ (function (_super) {
    __extends(ListExpressionContext, _super);
    function ListExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    ListExpressionContext.prototype.list = function () {
        return this.getRuleContext(0, ListContext);
    };
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
}(ExpressionContext));
exports.ListExpressionContext = ListExpressionContext;
var WordExpressionContext = /** @class */ (function (_super) {
    __extends(WordExpressionContext, _super);
    function WordExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    WordExpressionContext.prototype.WORD = function () { return this.getToken(UCBLogoParser.WORD, 0); };
    // @Override
    WordExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterWordExpression) {
            listener.enterWordExpression(this);
        }
    };
    // @Override
    WordExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitWordExpression) {
            listener.exitWordExpression(this);
        }
    };
    // @Override
    WordExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitWordExpression) {
            return visitor.visitWordExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return WordExpressionContext;
}(ExpressionContext));
exports.WordExpressionContext = WordExpressionContext;
var QuotedWordExpressionContext = /** @class */ (function (_super) {
    __extends(QuotedWordExpressionContext, _super);
    function QuotedWordExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    QuotedWordExpressionContext.prototype.QUOTED_WORD = function () { return this.getToken(UCBLogoParser.QUOTED_WORD, 0); };
    // @Override
    QuotedWordExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterQuotedWordExpression) {
            listener.enterQuotedWordExpression(this);
        }
    };
    // @Override
    QuotedWordExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitQuotedWordExpression) {
            listener.exitQuotedWordExpression(this);
        }
    };
    // @Override
    QuotedWordExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitQuotedWordExpression) {
            return visitor.visitQuotedWordExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return QuotedWordExpressionContext;
}(ExpressionContext));
exports.QuotedWordExpressionContext = QuotedWordExpressionContext;
var NumberExpressionContext = /** @class */ (function (_super) {
    __extends(NumberExpressionContext, _super);
    function NumberExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NumberExpressionContext.prototype.NUMBER = function () { return this.getToken(UCBLogoParser.NUMBER, 0); };
    // @Override
    NumberExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterNumberExpression) {
            listener.enterNumberExpression(this);
        }
    };
    // @Override
    NumberExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitNumberExpression) {
            listener.exitNumberExpression(this);
        }
    };
    // @Override
    NumberExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitNumberExpression) {
            return visitor.visitNumberExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NumberExpressionContext;
}(ExpressionContext));
exports.NumberExpressionContext = NumberExpressionContext;
var VariableExpressionContext = /** @class */ (function (_super) {
    __extends(VariableExpressionContext, _super);
    function VariableExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    VariableExpressionContext.prototype.VARIABLE = function () { return this.getToken(UCBLogoParser.VARIABLE, 0); };
    // @Override
    VariableExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterVariableExpression) {
            listener.enterVariableExpression(this);
        }
    };
    // @Override
    VariableExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitVariableExpression) {
            listener.exitVariableExpression(this);
        }
    };
    // @Override
    VariableExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableExpression) {
            return visitor.visitVariableExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableExpressionContext;
}(ExpressionContext));
exports.VariableExpressionContext = VariableExpressionContext;
var NameExpressionContext = /** @class */ (function (_super) {
    __extends(NameExpressionContext, _super);
    function NameExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NameExpressionContext.prototype.NAME = function () { return this.getToken(UCBLogoParser.NAME, 0); };
    // @Override
    NameExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterNameExpression) {
            listener.enterNameExpression(this);
        }
    };
    // @Override
    NameExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitNameExpression) {
            listener.exitNameExpression(this);
        }
    };
    // @Override
    NameExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitNameExpression) {
            return visitor.visitNameExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NameExpressionContext;
}(ExpressionContext));
exports.NameExpressionContext = NameExpressionContext;
var MultiplyExpressionContext = /** @class */ (function (_super) {
    __extends(MultiplyExpressionContext, _super);
    function MultiplyExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    MultiplyExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    MultiplyExpressionContext.prototype.MULT = function () { return this.getToken(UCBLogoParser.MULT, 0); };
    // @Override
    MultiplyExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterMultiplyExpression) {
            listener.enterMultiplyExpression(this);
        }
    };
    // @Override
    MultiplyExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitMultiplyExpression) {
            listener.exitMultiplyExpression(this);
        }
    };
    // @Override
    MultiplyExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitMultiplyExpression) {
            return visitor.visitMultiplyExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return MultiplyExpressionContext;
}(ExpressionContext));
exports.MultiplyExpressionContext = MultiplyExpressionContext;
var DivideExpressionContext = /** @class */ (function (_super) {
    __extends(DivideExpressionContext, _super);
    function DivideExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    DivideExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    DivideExpressionContext.prototype.DIV = function () { return this.getToken(UCBLogoParser.DIV, 0); };
    // @Override
    DivideExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterDivideExpression) {
            listener.enterDivideExpression(this);
        }
    };
    // @Override
    DivideExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitDivideExpression) {
            listener.exitDivideExpression(this);
        }
    };
    // @Override
    DivideExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitDivideExpression) {
            return visitor.visitDivideExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DivideExpressionContext;
}(ExpressionContext));
exports.DivideExpressionContext = DivideExpressionContext;
var AdditionExpressionContext = /** @class */ (function (_super) {
    __extends(AdditionExpressionContext, _super);
    function AdditionExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    AdditionExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    AdditionExpressionContext.prototype.PLUS = function () { return this.getToken(UCBLogoParser.PLUS, 0); };
    // @Override
    AdditionExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterAdditionExpression) {
            listener.enterAdditionExpression(this);
        }
    };
    // @Override
    AdditionExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitAdditionExpression) {
            listener.exitAdditionExpression(this);
        }
    };
    // @Override
    AdditionExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitAdditionExpression) {
            return visitor.visitAdditionExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AdditionExpressionContext;
}(ExpressionContext));
exports.AdditionExpressionContext = AdditionExpressionContext;
var SubtractionExpressionContext = /** @class */ (function (_super) {
    __extends(SubtractionExpressionContext, _super);
    function SubtractionExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    SubtractionExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    SubtractionExpressionContext.prototype.MINUS = function () { return this.getToken(UCBLogoParser.MINUS, 0); };
    // @Override
    SubtractionExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterSubtractionExpression) {
            listener.enterSubtractionExpression(this);
        }
    };
    // @Override
    SubtractionExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitSubtractionExpression) {
            listener.exitSubtractionExpression(this);
        }
    };
    // @Override
    SubtractionExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitSubtractionExpression) {
            return visitor.visitSubtractionExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return SubtractionExpressionContext;
}(ExpressionContext));
exports.SubtractionExpressionContext = SubtractionExpressionContext;
var LessThanExpressionContext = /** @class */ (function (_super) {
    __extends(LessThanExpressionContext, _super);
    function LessThanExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LessThanExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    LessThanExpressionContext.prototype.LT = function () { return this.getToken(UCBLogoParser.LT, 0); };
    // @Override
    LessThanExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLessThanExpression) {
            listener.enterLessThanExpression(this);
        }
    };
    // @Override
    LessThanExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLessThanExpression) {
            listener.exitLessThanExpression(this);
        }
    };
    // @Override
    LessThanExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLessThanExpression) {
            return visitor.visitLessThanExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LessThanExpressionContext;
}(ExpressionContext));
exports.LessThanExpressionContext = LessThanExpressionContext;
var GreaterThanExpressionContext = /** @class */ (function (_super) {
    __extends(GreaterThanExpressionContext, _super);
    function GreaterThanExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    GreaterThanExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    GreaterThanExpressionContext.prototype.GT = function () { return this.getToken(UCBLogoParser.GT, 0); };
    // @Override
    GreaterThanExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterGreaterThanExpression) {
            listener.enterGreaterThanExpression(this);
        }
    };
    // @Override
    GreaterThanExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitGreaterThanExpression) {
            listener.exitGreaterThanExpression(this);
        }
    };
    // @Override
    GreaterThanExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitGreaterThanExpression) {
            return visitor.visitGreaterThanExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GreaterThanExpressionContext;
}(ExpressionContext));
exports.GreaterThanExpressionContext = GreaterThanExpressionContext;
var LessThanEqualsExpressionContext = /** @class */ (function (_super) {
    __extends(LessThanEqualsExpressionContext, _super);
    function LessThanEqualsExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    LessThanEqualsExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    LessThanEqualsExpressionContext.prototype.LT_EQ = function () { return this.getToken(UCBLogoParser.LT_EQ, 0); };
    // @Override
    LessThanEqualsExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterLessThanEqualsExpression) {
            listener.enterLessThanEqualsExpression(this);
        }
    };
    // @Override
    LessThanEqualsExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitLessThanEqualsExpression) {
            listener.exitLessThanEqualsExpression(this);
        }
    };
    // @Override
    LessThanEqualsExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitLessThanEqualsExpression) {
            return visitor.visitLessThanEqualsExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return LessThanEqualsExpressionContext;
}(ExpressionContext));
exports.LessThanEqualsExpressionContext = LessThanEqualsExpressionContext;
var GreaterThanEqualsExpressionContext = /** @class */ (function (_super) {
    __extends(GreaterThanEqualsExpressionContext, _super);
    function GreaterThanEqualsExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    GreaterThanEqualsExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    GreaterThanEqualsExpressionContext.prototype.GT_EQ = function () { return this.getToken(UCBLogoParser.GT_EQ, 0); };
    // @Override
    GreaterThanEqualsExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterGreaterThanEqualsExpression) {
            listener.enterGreaterThanEqualsExpression(this);
        }
    };
    // @Override
    GreaterThanEqualsExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitGreaterThanEqualsExpression) {
            listener.exitGreaterThanEqualsExpression(this);
        }
    };
    // @Override
    GreaterThanEqualsExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitGreaterThanEqualsExpression) {
            return visitor.visitGreaterThanEqualsExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return GreaterThanEqualsExpressionContext;
}(ExpressionContext));
exports.GreaterThanEqualsExpressionContext = GreaterThanEqualsExpressionContext;
var EqualsExpressionContext = /** @class */ (function (_super) {
    __extends(EqualsExpressionContext, _super);
    function EqualsExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    EqualsExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    EqualsExpressionContext.prototype.EQ = function () { return this.getToken(UCBLogoParser.EQ, 0); };
    // @Override
    EqualsExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterEqualsExpression) {
            listener.enterEqualsExpression(this);
        }
    };
    // @Override
    EqualsExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitEqualsExpression) {
            listener.exitEqualsExpression(this);
        }
    };
    // @Override
    EqualsExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitEqualsExpression) {
            return visitor.visitEqualsExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EqualsExpressionContext;
}(ExpressionContext));
exports.EqualsExpressionContext = EqualsExpressionContext;
var NotEqualsExpressionExpressionContext = /** @class */ (function (_super) {
    __extends(NotEqualsExpressionExpressionContext, _super);
    function NotEqualsExpressionExpressionContext(ctx) {
        var _this = _super.call(this, ctx.parent, ctx.invokingState) || this;
        _this.copyFrom(ctx);
        return _this;
    }
    NotEqualsExpressionExpressionContext.prototype.expression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    };
    NotEqualsExpressionExpressionContext.prototype.NOT_EQ = function () { return this.getToken(UCBLogoParser.NOT_EQ, 0); };
    // @Override
    NotEqualsExpressionExpressionContext.prototype.enterRule = function (listener) {
        if (listener.enterNotEqualsExpressionExpression) {
            listener.enterNotEqualsExpressionExpression(this);
        }
    };
    // @Override
    NotEqualsExpressionExpressionContext.prototype.exitRule = function (listener) {
        if (listener.exitNotEqualsExpressionExpression) {
            listener.exitNotEqualsExpressionExpression(this);
        }
    };
    // @Override
    NotEqualsExpressionExpressionContext.prototype.accept = function (visitor) {
        if (visitor.visitNotEqualsExpressionExpression) {
            return visitor.visitNotEqualsExpressionExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NotEqualsExpressionExpressionContext;
}(ExpressionContext));
exports.NotEqualsExpressionExpressionContext = NotEqualsExpressionExpressionContext;
var ArrayContext = /** @class */ (function (_super) {
    __extends(ArrayContext, _super);
    function ArrayContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ArrayContext.prototype.OPEN_ARRAY = function (i) {
        if (i === undefined) {
            return this.getTokens(UCBLogoParser.OPEN_ARRAY);
        }
        else {
            return this.getToken(UCBLogoParser.OPEN_ARRAY, i);
        }
    };
    ArrayContext.prototype.CLOSE_ARRAY = function (i) {
        if (i === undefined) {
            return this.getTokens(UCBLogoParser.CLOSE_ARRAY);
        }
        else {
            return this.getToken(UCBLogoParser.CLOSE_ARRAY, i);
        }
    };
    ArrayContext.prototype.array = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ArrayContext);
        }
        else {
            return this.getRuleContext(i, ArrayContext);
        }
    };
    Object.defineProperty(ArrayContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UCBLogoParser.RULE_array; },
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
var ListContext = /** @class */ (function (_super) {
    __extends(ListContext, _super);
    function ListContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListContext.prototype.OPEN_LIST = function (i) {
        if (i === undefined) {
            return this.getTokens(UCBLogoParser.OPEN_LIST);
        }
        else {
            return this.getToken(UCBLogoParser.OPEN_LIST, i);
        }
    };
    ListContext.prototype.CLOSE_LIST = function (i) {
        if (i === undefined) {
            return this.getTokens(UCBLogoParser.CLOSE_LIST);
        }
        else {
            return this.getToken(UCBLogoParser.CLOSE_LIST, i);
        }
    };
    ListContext.prototype.list = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ListContext);
        }
        else {
            return this.getRuleContext(i, ListContext);
        }
    };
    Object.defineProperty(ListContext.prototype, "ruleIndex", {
        // @Override
        get: function () { return UCBLogoParser.RULE_list; },
        enumerable: true,
        configurable: true
    });
    // @Override
    ListContext.prototype.enterRule = function (listener) {
        if (listener.enterList) {
            listener.enterList(this);
        }
    };
    // @Override
    ListContext.prototype.exitRule = function (listener) {
        if (listener.exitList) {
            listener.exitList(this);
        }
    };
    // @Override
    ListContext.prototype.accept = function (visitor) {
        if (visitor.visitList) {
            return visitor.visitList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ListContext = ListContext;
