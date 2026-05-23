// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/logo/ucb-logo/UCBLogo.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import UCBLogoListener from './UCBLogoListener.js';

  import java.util.Map;
  import java.util.HashMap;

const serializedATN = [4,1,26,181,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,39,8,1,1,2,1,
2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,5,4,56,8,4,10,4,12,
4,59,9,4,1,5,1,5,5,5,63,8,5,10,5,12,5,66,9,5,1,5,1,5,5,5,70,8,5,10,5,12,
5,73,9,5,1,5,3,5,76,8,5,1,6,1,6,3,6,80,8,6,1,7,1,7,1,7,1,7,5,7,86,8,7,10,
7,12,7,89,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,5,9,101,8,9,10,9,12,
9,104,9,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,3,10,124,8,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,156,8,10,10,10,12,10,159,
9,10,1,11,1,11,1,11,5,11,164,8,11,10,11,12,11,167,9,11,1,11,1,11,1,12,1,
12,1,12,5,12,174,8,12,10,12,12,12,177,9,12,1,12,1,12,1,12,0,1,20,13,0,2,
4,6,8,10,12,14,16,18,20,22,24,0,3,1,0,4,4,1,0,8,9,1,0,10,11,202,0,29,1,0,
0,0,2,38,1,0,0,0,4,40,1,0,0,0,6,46,1,0,0,0,8,52,1,0,0,0,10,75,1,0,0,0,12,
79,1,0,0,0,14,81,1,0,0,0,16,92,1,0,0,0,18,102,1,0,0,0,20,123,1,0,0,0,22,
160,1,0,0,0,24,170,1,0,0,0,26,28,3,2,1,0,27,26,1,0,0,0,28,31,1,0,0,0,29,
27,1,0,0,0,29,30,1,0,0,0,30,32,1,0,0,0,31,29,1,0,0,0,32,33,5,0,0,1,33,1,
1,0,0,0,34,39,3,4,2,0,35,39,3,6,3,0,36,39,3,14,7,0,37,39,3,16,8,0,38,34,
1,0,0,0,38,35,1,0,0,0,38,36,1,0,0,0,38,37,1,0,0,0,39,3,1,0,0,0,40,41,5,3,
0,0,41,42,5,25,0,0,42,43,3,8,4,0,43,44,3,10,5,0,44,45,6,2,-1,0,45,5,1,0,
0,0,46,47,5,5,0,0,47,48,5,25,0,0,48,49,3,8,4,0,49,50,3,10,5,0,50,51,6,3,
-1,0,51,7,1,0,0,0,52,57,6,4,-1,0,53,54,5,24,0,0,54,56,6,4,-1,0,55,53,1,0,
0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,9,1,0,0,0,59,57,1,0,0,0,
60,64,4,5,0,0,61,63,3,12,6,0,62,61,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,
65,1,0,0,0,65,67,1,0,0,0,66,64,1,0,0,0,67,76,5,4,0,0,68,70,8,0,0,0,69,68,
1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,71,1,
0,0,0,74,76,5,4,0,0,75,60,1,0,0,0,75,71,1,0,0,0,76,11,1,0,0,0,77,80,3,14,
7,0,78,80,3,16,8,0,79,77,1,0,0,0,79,78,1,0,0,0,80,13,1,0,0,0,81,82,5,1,0,
0,82,83,4,7,1,0,83,87,5,25,0,0,84,86,3,20,10,0,85,84,1,0,0,0,86,89,1,0,0,
0,87,85,1,0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,89,87,1,0,0,0,90,91,5,2,0,0,
91,15,1,0,0,0,92,93,4,8,2,0,93,94,5,25,0,0,94,95,3,18,9,0,95,17,1,0,0,0,
96,97,4,9,3,1,97,98,3,20,10,0,98,99,6,9,-1,0,99,101,1,0,0,0,100,96,1,0,0,
0,101,104,1,0,0,0,102,100,1,0,0,0,102,103,1,0,0,0,103,105,1,0,0,0,104,102,
1,0,0,0,105,106,6,9,-1,0,106,19,1,0,0,0,107,108,6,10,-1,0,108,109,5,12,0,
0,109,124,3,20,10,21,110,124,3,14,7,0,111,124,3,16,8,0,112,113,5,1,0,0,113,
114,3,20,10,0,114,115,5,2,0,0,115,124,1,0,0,0,116,124,3,22,11,0,117,124,
3,24,12,0,118,124,5,6,0,0,119,124,5,22,0,0,120,124,5,23,0,0,121,124,5,24,
0,0,122,124,5,25,0,0,123,107,1,0,0,0,123,110,1,0,0,0,123,111,1,0,0,0,123,
112,1,0,0,0,123,116,1,0,0,0,123,117,1,0,0,0,123,118,1,0,0,0,123,119,1,0,
0,0,123,120,1,0,0,0,123,121,1,0,0,0,123,122,1,0,0,0,124,157,1,0,0,0,125,
126,10,10,0,0,126,127,5,14,0,0,127,156,3,20,10,11,128,129,10,9,0,0,129,130,
5,15,0,0,130,156,3,20,10,10,131,132,10,8,0,0,132,133,5,13,0,0,133,156,3,
20,10,9,134,135,10,7,0,0,135,136,5,12,0,0,136,156,3,20,10,8,137,138,10,6,
0,0,138,139,5,16,0,0,139,156,3,20,10,7,140,141,10,5,0,0,141,142,5,17,0,0,
142,156,3,20,10,6,143,144,10,4,0,0,144,145,5,19,0,0,145,156,3,20,10,5,146,
147,10,3,0,0,147,148,5,20,0,0,148,156,3,20,10,4,149,150,10,2,0,0,150,151,
5,18,0,0,151,156,3,20,10,3,152,153,10,1,0,0,153,154,5,21,0,0,154,156,3,20,
10,2,155,125,1,0,0,0,155,128,1,0,0,0,155,131,1,0,0,0,155,134,1,0,0,0,155,
137,1,0,0,0,155,140,1,0,0,0,155,143,1,0,0,0,155,146,1,0,0,0,155,149,1,0,
0,0,155,152,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,
21,1,0,0,0,159,157,1,0,0,0,160,165,5,8,0,0,161,164,8,1,0,0,162,164,3,22,
11,0,163,161,1,0,0,0,163,162,1,0,0,0,164,167,1,0,0,0,165,163,1,0,0,0,165,
166,1,0,0,0,166,168,1,0,0,0,167,165,1,0,0,0,168,169,5,9,0,0,169,23,1,0,0,
0,170,175,5,10,0,0,171,174,8,2,0,0,172,174,3,24,12,0,173,171,1,0,0,0,173,
172,1,0,0,0,174,177,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,178,1,0,
0,0,177,175,1,0,0,0,178,179,5,11,0,0,179,25,1,0,0,0,16,29,38,57,64,71,75,
79,87,102,123,155,157,163,165,173,175];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class UCBLogoParser extends antlr4.Parser {

    static grammarFileName = "UCBLogo.g4";
    static literalNames = [ null, "'('", "')'", null, null, null, null, 
                            null, "'{'", "'}'", "'['", "']'", "'-'", "'+'", 
                            "'*'", "'/'", "'<'", "'>'", "'='", "'<='", "'>='", 
                            "'<>'" ];
    static symbolicNames = [ null, null, null, "TO", "END", "MACRO", "WORD", 
                             "SKIP_", "OPEN_ARRAY", "CLOSE_ARRAY", "OPEN_LIST", 
                             "CLOSE_LIST", "MINUS", "PLUS", "MULT", "DIV", 
                             "LT", "GT", "EQ", "LT_EQ", "GT_EQ", "NOT_EQ", 
                             "QUOTED_WORD", "NUMBER", "VARIABLE", "NAME", 
                             "ANY" ];
    static ruleNames = [ "parse", "instruction", "procedure_def", "macro_def", 
                         "variables", "body_def", "body_instruction", "procedure_call_extra_input", 
                         "procedure_call", "expressions", "expression", 
                         "array_", "list_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = UCBLogoParser.ruleNames;
        this.literalNames = UCBLogoParser.literalNames;
        this.symbolicNames = UCBLogoParser.symbolicNames;


          // A Map keeping track of all procedure (and macro) names and the amount
          // of parameters each procedure expects.
          // Taken from: http://www.cs.berkeley.edu/~bh/usermanual
          final Map<String, Integer> procedures = new HashMap<String, Integer>(){{
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
          }};

          // A flag keeping track if the parser already looked ahead to resolve user
          // defined procedures that will be stored in the 'procedures' map.
          private boolean discoveredAllProcedures = false;

          /**
           * Creates a new instance of a {@code UCBLogoParser} where
           * any user defined procedures will be resolved in an intial
           * parse.
           *
           * @param source
           *         the UCB Logo source to parse.
           */
          public UCBLogoParser(String source) {
            this(new ANTLRInputStream(source));
          }

          /**
           * Creates a new instance of a {@code UCBLogoParser} where
           * any user defined procedures will be resolved in an initial
           * parse.
           *
           * @param input
           *         the inout stream containing the UCB Logo source
           *         to parse.
           */
          public UCBLogoParser(ANTLRInputStream input) {

            this(new CommonTokenStream(new UCBLogoLexer(input)));

            // Create a lexer and parser that will resolve user defined procedures.
            UCBLogoLexer lexer = new UCBLogoLexer(input);
            UCBLogoParser parser = new UCBLogoParser(new CommonTokenStream(lexer));

            ParseTreeWalker.DEFAULT.walk(new UCBLogoBaseListener(){

              @Override
              public void enterProcedure_def(@NotNull UCBLogoParser.Procedure_defContext ctx) {
                // Yes, we found a procedure: save it in the procedures-map.
                procedures.put(ctx.NAME().getText(), ctx.variables.amount);
              }

              @Override
              public void enterMacro_def(@NotNull UCBLogoParser.Macro_defContext ctx) {
                // Yes, we found a macro: save it in the procedures-map.
                procedures.put(ctx.NAME().getText(), ctx.variables.amount);
              }
            }, parser.parse());

            // Reset the input stream after having resolved the user defined procedures.
            input.reset();

            this.discoveredAllProcedures = true;
          }

          /**
           * Returns the amount of parameters the procedure expects. Note
           * that this method will only be called after {@link #procedureNameAhead()}
           * already returned {@code true}.
           *
           * @param procedureName
           *         the name of the procedure.
           *
           * @return the amount of parameters the procedure expects.
           */
          private int amountParams(String procedureName) {
            return procedures.get(procedureName.toLowerCase());
          }

          /**
           * Returns {@code true} iff the next token in the stream is of type
           * {@code NAME} and contains the text defined in {@code name}.
           *
           * @param name
           *         the text the next token should contain.
           *
           * @returns {@code true} iff the next token in the stream is of type
           * {@code NAME} and contains the text defined in {@code name}.
           */
          private boolean nameAhead(String name) {
            Token token = _input.LT(1);
            return token.getType() == NAME && token.getText().equalsIgnoreCase(name);
          }

          /**
           * Returns {@code true} iff the next token in the inout stream is of
           * type {@code NAME} and is present in the {@code procedures}.
           *
           * @returns {@code true} iff the next token in the inout stream is of
           * type {@code NAME} and is present in the {@code procedures}.
           */
          private boolean procedureNameAhead() {
            Token token = _input.LT(1);
            return token.getType() == NAME && procedures.containsKey(token.getText().toLowerCase());
          }

    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 5:
    	    		return this.body_def_sempred(localctx, predIndex);
    	case 7:
    	    		return this.procedure_call_extra_input_sempred(localctx, predIndex);
    	case 8:
    	    		return this.procedure_call_sempred(localctx, predIndex);
    	case 9:
    	    		return this.expressions_sempred(localctx, predIndex);
    	case 10:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    body_def_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return discoveredAllProcedures;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    procedure_call_extra_input_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return procedureNameAhead();
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    procedure_call_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return procedureNameAhead();
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expressions_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return localctx.n < localctx.total;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
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
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, UCBLogoParser.RULE_parse);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 26;
	                this.instruction(); 
	            }
	            this.state = 31;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 32;
	        this.match(UCBLogoParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, UCBLogoParser.RULE_instruction);
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ProcedureDefInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.procedure_def();
	            break;

	        case 2:
	            localctx = new MacroDefInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.macro_def();
	            break;

	        case 3:
	            localctx = new ProcedureCallExtraInputInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 36;
	            this.procedure_call_extra_input();
	            break;

	        case 4:
	            localctx = new ProcedureCallInstructionContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 37;
	            this.procedure_call();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procedure_def() {
	    let localctx = new Procedure_defContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, UCBLogoParser.RULE_procedure_def);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(UCBLogoParser.TO);
	        this.state = 41;
	        localctx._NAME = this.match(UCBLogoParser.NAME);
	        this.state = 42;
	        localctx._variables = this.variables();
	        this.state = 43;
	        this.body_def();

	             procedures.put(localctx._NAME.getText(), localctx._variables.amount);
	           
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	macro_def() {
	    let localctx = new Macro_defContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, UCBLogoParser.RULE_macro_def);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(UCBLogoParser.MACRO);
	        this.state = 47;
	        localctx._NAME = this.match(UCBLogoParser.NAME);
	        this.state = 48;
	        localctx._variables = this.variables();
	        this.state = 49;
	        this.body_def();

	             procedures.put(localctx._NAME.getText(), localctx._variables.amount);
	           
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variables() {
	    let localctx = new VariablesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, UCBLogoParser.RULE_variables);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx.amount =  0
	        this.state = 57;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 53;
	                this.match(UCBLogoParser.VARIABLE);
	                localctx.amount++; 
	            }
	            this.state = 59;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	body_def() {
	    let localctx = new Body_defContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, UCBLogoParser.RULE_body_def);
	    var _la = 0;
	    try {
	        this.state = 75;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            if (!( discoveredAllProcedures)) {
	                throw new antlr4.error.FailedPredicateException(this, "discoveredAllProcedures");
	            }
	            this.state = 64;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 61;
	                    this.body_instruction(); 
	                }
	                this.state = 66;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	            }

	            this.state = 67;
	            this.match(UCBLogoParser.END);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 134217710) !== 0)) {
	                this.state = 68;
	                _la = this._input.LA(1);
	                if(_la<=0 || _la===4) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 73;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 74;
	            this.match(UCBLogoParser.END);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	body_instruction() {
	    let localctx = new Body_instructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, UCBLogoParser.RULE_body_instruction);
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 77;
	            this.procedure_call_extra_input();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 78;
	            this.procedure_call();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procedure_call_extra_input() {
	    let localctx = new Procedure_call_extra_inputContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, UCBLogoParser.RULE_procedure_call_extra_input);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(UCBLogoParser.T__0);
	        this.state = 82;
	        if (!( procedureNameAhead())) {
	            throw new antlr4.error.FailedPredicateException(this, "procedureNameAhead()");
	        }
	        this.state = 83;
	        this.match(UCBLogoParser.NAME);
	        this.state = 87;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 84;
	                this.expression(0); 
	            }
	            this.state = 89;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 90;
	        this.match(UCBLogoParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procedure_call() {
	    let localctx = new Procedure_callContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, UCBLogoParser.RULE_procedure_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        if (!( procedureNameAhead())) {
	            throw new antlr4.error.FailedPredicateException(this, "procedureNameAhead()");
	        }
	        this.state = 93;
	        localctx._NAME = this.match(UCBLogoParser.NAME);
	        this.state = 94;
	        this.expressions(localctx._NAME.getText(), amountParams(localctx._NAME.getText()));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressions(name, total) {
	    let localctx = new ExpressionsContext(this, this._ctx, this.state, name, total);
	    this.enterRule(localctx, 18, UCBLogoParser.RULE_expressions);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 96;
	                if (!( localctx.n < localctx.total)) {
	                    throw new antlr4.error.FailedPredicateException(this, "$n < $total");
	                }
	                this.state = 97;
	                this.expression(0);
	                localctx.n++; 
	            }
	            this.state = 104;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }


	             // Make sure there are enough inputs parsed for 'name'.
	             if (localctx.total > localctx.n) {
	               throw new RuntimeException("not enough inputs to " + name);
	             }
	           
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, UCBLogoParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new UnaryMinusExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 108;
	            this.match(UCBLogoParser.MINUS);
	            this.state = 109;
	            this.expression(21);
	            break;

	        case 2:
	            localctx = new ProcedureCallExtraInputContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 110;
	            this.procedure_call_extra_input();
	            break;

	        case 3:
	            localctx = new ProcedureCallExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 111;
	            this.procedure_call();
	            break;

	        case 4:
	            localctx = new ParensExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 112;
	            this.match(UCBLogoParser.T__0);
	            this.state = 113;
	            this.expression(0);
	            this.state = 114;
	            this.match(UCBLogoParser.T__1);
	            break;

	        case 5:
	            localctx = new ArrayExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 116;
	            this.array_();
	            break;

	        case 6:
	            localctx = new ListExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 117;
	            this.list_();
	            break;

	        case 7:
	            localctx = new WordExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 118;
	            this.match(UCBLogoParser.WORD);
	            break;

	        case 8:
	            localctx = new QuotedWordExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 119;
	            this.match(UCBLogoParser.QUOTED_WORD);
	            break;

	        case 9:
	            localctx = new NumberExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 120;
	            this.match(UCBLogoParser.NUMBER);
	            break;

	        case 10:
	            localctx = new VariableExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 121;
	            this.match(UCBLogoParser.VARIABLE);
	            break;

	        case 11:
	            localctx = new NameExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 122;
	            this.match(UCBLogoParser.NAME);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 157;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 155;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultiplyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, UCBLogoParser.RULE_expression);
	                    this.state = 125;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 126;
	                    this.match(UCBLogoParser.MULT);
	                    this.state = 127;
	                    this.expression(11);
	                    break;

	                case 2:
	                    localctx = new DivideExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, UCBLogoParser.RULE_expression);
	                    this.state = 128;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 129;
	                    this.match(UCBLogoParser.DIV);
	                    this.state = 130;
	                    this.expression(10);
	                    break;

	                case 3:
	                    localctx = new AdditionExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, UCBLogoParser.RULE_expression);
	                    this.state = 131;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 132;
	                    this.match(UCBLogoParser.PLUS);
	                    this.state = 133;
	                    this.expression(9);
	                    break;

	                case 4:
	                    localctx = new SubtractionExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, UCBLogoParser.RULE_expression);
	                    this.state = 134;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 135;
	                    this.match(UCBLogoParser.MINUS);
	                    this.state = 136;
	                    this.expression(8);
	                    break;

	                case 5:
	                    localctx = new LessThanExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, UCBLogoParser.RULE_expression);
	                    this.state = 137;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 138;
	                    this.match(UCBLogoParser.LT);
	                    this.state = 139;
	                    this.expression(7);
	                    break;

	                case 6:
	                    localctx = new GreaterThanExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, UCBLogoParser.RULE_expression);
	                    this.state = 140;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 141;
	                    this.match(UCBLogoParser.GT);
	                    this.state = 142;
	                    this.expression(6);
	                    break;

	                case 7:
	                    localctx = new LessThanEqualsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, UCBLogoParser.RULE_expression);
	                    this.state = 143;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 144;
	                    this.match(UCBLogoParser.LT_EQ);
	                    this.state = 145;
	                    this.expression(5);
	                    break;

	                case 8:
	                    localctx = new GreaterThanEqualsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, UCBLogoParser.RULE_expression);
	                    this.state = 146;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 147;
	                    this.match(UCBLogoParser.GT_EQ);
	                    this.state = 148;
	                    this.expression(4);
	                    break;

	                case 9:
	                    localctx = new EqualsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, UCBLogoParser.RULE_expression);
	                    this.state = 149;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 150;
	                    this.match(UCBLogoParser.EQ);
	                    this.state = 151;
	                    this.expression(3);
	                    break;

	                case 10:
	                    localctx = new NotEqualsExpressionExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, UCBLogoParser.RULE_expression);
	                    this.state = 152;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 153;
	                    this.match(UCBLogoParser.NOT_EQ);
	                    this.state = 154;
	                    this.expression(2);
	                    break;

	                } 
	            }
	            this.state = 159;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	array_() {
	    let localctx = new Array_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, UCBLogoParser.RULE_array_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(UCBLogoParser.OPEN_ARRAY);
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 134217214) !== 0)) {
	            this.state = 163;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	            case 2:
	            case 3:
	            case 4:
	            case 5:
	            case 6:
	            case 7:
	            case 10:
	            case 11:
	            case 12:
	            case 13:
	            case 14:
	            case 15:
	            case 16:
	            case 17:
	            case 18:
	            case 19:
	            case 20:
	            case 21:
	            case 22:
	            case 23:
	            case 24:
	            case 25:
	            case 26:
	                this.state = 161;
	                _la = this._input.LA(1);
	                if(_la<=0 || _la===8 || _la===9) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                break;
	            case 8:
	                this.state = 162;
	                this.array_();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 168;
	        this.match(UCBLogoParser.CLOSE_ARRAY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	list_() {
	    let localctx = new List_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, UCBLogoParser.RULE_list_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this.match(UCBLogoParser.OPEN_LIST);
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 134215678) !== 0)) {
	            this.state = 173;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	            case 2:
	            case 3:
	            case 4:
	            case 5:
	            case 6:
	            case 7:
	            case 8:
	            case 9:
	            case 12:
	            case 13:
	            case 14:
	            case 15:
	            case 16:
	            case 17:
	            case 18:
	            case 19:
	            case 20:
	            case 21:
	            case 22:
	            case 23:
	            case 24:
	            case 25:
	            case 26:
	                this.state = 171;
	                _la = this._input.LA(1);
	                if(_la<=0 || _la===10 || _la===11) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                break;
	            case 10:
	                this.state = 172;
	                this.list_();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 178;
	        this.match(UCBLogoParser.CLOSE_LIST);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

UCBLogoParser.EOF = antlr4.Token.EOF;
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
UCBLogoParser.RULE_array_ = 11;
UCBLogoParser.RULE_list_ = 12;

class ParseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UCBLogoParser.RULE_parse;
    }

	EOF() {
	    return this.getToken(UCBLogoParser.EOF, 0);
	};

	instruction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstructionContext);
	    } else {
	        return this.getTypedRuleContext(InstructionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterParse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitParse(this);
		}
	}


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UCBLogoParser.RULE_instruction;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ProcedureCallInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	procedure_call() {
	    return this.getTypedRuleContext(Procedure_callContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterProcedureCallInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitProcedureCallInstruction(this);
		}
	}


}

UCBLogoParser.ProcedureCallInstructionContext = ProcedureCallInstructionContext;

class MacroDefInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	macro_def() {
	    return this.getTypedRuleContext(Macro_defContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterMacroDefInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitMacroDefInstruction(this);
		}
	}


}

UCBLogoParser.MacroDefInstructionContext = MacroDefInstructionContext;

class ProcedureDefInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	procedure_def() {
	    return this.getTypedRuleContext(Procedure_defContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterProcedureDefInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitProcedureDefInstruction(this);
		}
	}


}

UCBLogoParser.ProcedureDefInstructionContext = ProcedureDefInstructionContext;

class ProcedureCallExtraInputInstructionContext extends InstructionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	procedure_call_extra_input() {
	    return this.getTypedRuleContext(Procedure_call_extra_inputContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterProcedureCallExtraInputInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitProcedureCallExtraInputInstruction(this);
		}
	}


}

UCBLogoParser.ProcedureCallExtraInputInstructionContext = ProcedureCallExtraInputInstructionContext;

class Procedure_defContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UCBLogoParser.RULE_procedure_def;
        this._NAME = null;
        this._variables = null;
    }

	TO() {
	    return this.getToken(UCBLogoParser.TO, 0);
	};

	NAME() {
	    return this.getToken(UCBLogoParser.NAME, 0);
	};

	variables() {
	    return this.getTypedRuleContext(VariablesContext,0);
	};

	body_def() {
	    return this.getTypedRuleContext(Body_defContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterProcedure_def(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitProcedure_def(this);
		}
	}


}



class Macro_defContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UCBLogoParser.RULE_macro_def;
        this._NAME = null;
        this._variables = null;
    }

	MACRO() {
	    return this.getToken(UCBLogoParser.MACRO, 0);
	};

	NAME() {
	    return this.getToken(UCBLogoParser.NAME, 0);
	};

	variables() {
	    return this.getTypedRuleContext(VariablesContext,0);
	};

	body_def() {
	    return this.getTypedRuleContext(Body_defContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterMacro_def(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitMacro_def(this);
		}
	}


}



class VariablesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UCBLogoParser.RULE_variables;
        this.amount = null
    }

	VARIABLE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(UCBLogoParser.VARIABLE);
	    } else {
	        return this.getToken(UCBLogoParser.VARIABLE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterVariables(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitVariables(this);
		}
	}


}



class Body_defContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UCBLogoParser.RULE_body_def;
    }

	END = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(UCBLogoParser.END);
	    } else {
	        return this.getToken(UCBLogoParser.END, i);
	    }
	};


	body_instruction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Body_instructionContext);
	    } else {
	        return this.getTypedRuleContext(Body_instructionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterBody_def(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitBody_def(this);
		}
	}


}



class Body_instructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UCBLogoParser.RULE_body_instruction;
    }

	procedure_call_extra_input() {
	    return this.getTypedRuleContext(Procedure_call_extra_inputContext,0);
	};

	procedure_call() {
	    return this.getTypedRuleContext(Procedure_callContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterBody_instruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitBody_instruction(this);
		}
	}


}



class Procedure_call_extra_inputContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UCBLogoParser.RULE_procedure_call_extra_input;
    }

	NAME() {
	    return this.getToken(UCBLogoParser.NAME, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterProcedure_call_extra_input(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitProcedure_call_extra_input(this);
		}
	}


}



class Procedure_callContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UCBLogoParser.RULE_procedure_call;
        this._NAME = null;
    }

	NAME() {
	    return this.getToken(UCBLogoParser.NAME, 0);
	};

	expressions() {
	    return this.getTypedRuleContext(ExpressionsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterProcedure_call(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitProcedure_call(this);
		}
	}


}



class ExpressionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState, name, total) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UCBLogoParser.RULE_expressions;
        this.name = null
        this.total = null
        this.n = 0
        this.name = name || null;
        this.total = total || null;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterExpressions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitExpressions(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UCBLogoParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NotEqualsExpressionExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	NOT_EQ() {
	    return this.getToken(UCBLogoParser.NOT_EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterNotEqualsExpressionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitNotEqualsExpressionExpression(this);
		}
	}


}

UCBLogoParser.NotEqualsExpressionExpressionContext = NotEqualsExpressionExpressionContext;

class ArrayExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	array_() {
	    return this.getTypedRuleContext(Array_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterArrayExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitArrayExpression(this);
		}
	}


}

UCBLogoParser.ArrayExpressionContext = ArrayExpressionContext;

class AdditionExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	PLUS() {
	    return this.getToken(UCBLogoParser.PLUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterAdditionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitAdditionExpression(this);
		}
	}


}

UCBLogoParser.AdditionExpressionContext = AdditionExpressionContext;

class WordExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	WORD() {
	    return this.getToken(UCBLogoParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterWordExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitWordExpression(this);
		}
	}


}

UCBLogoParser.WordExpressionContext = WordExpressionContext;

class NumberExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(UCBLogoParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterNumberExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitNumberExpression(this);
		}
	}


}

UCBLogoParser.NumberExpressionContext = NumberExpressionContext;

class ParensExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterParensExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitParensExpression(this);
		}
	}


}

UCBLogoParser.ParensExpressionContext = ParensExpressionContext;

class MultiplyExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	MULT() {
	    return this.getToken(UCBLogoParser.MULT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterMultiplyExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitMultiplyExpression(this);
		}
	}


}

UCBLogoParser.MultiplyExpressionContext = MultiplyExpressionContext;

class GreaterThanExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	GT() {
	    return this.getToken(UCBLogoParser.GT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterGreaterThanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitGreaterThanExpression(this);
		}
	}


}

UCBLogoParser.GreaterThanExpressionContext = GreaterThanExpressionContext;

class VariableExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VARIABLE() {
	    return this.getToken(UCBLogoParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterVariableExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitVariableExpression(this);
		}
	}


}

UCBLogoParser.VariableExpressionContext = VariableExpressionContext;

class DivideExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	DIV() {
	    return this.getToken(UCBLogoParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterDivideExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitDivideExpression(this);
		}
	}


}

UCBLogoParser.DivideExpressionContext = DivideExpressionContext;

class LessThanEqualsExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	LT_EQ() {
	    return this.getToken(UCBLogoParser.LT_EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterLessThanEqualsExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitLessThanEqualsExpression(this);
		}
	}


}

UCBLogoParser.LessThanEqualsExpressionContext = LessThanEqualsExpressionContext;

class GreaterThanEqualsExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	GT_EQ() {
	    return this.getToken(UCBLogoParser.GT_EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterGreaterThanEqualsExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitGreaterThanEqualsExpression(this);
		}
	}


}

UCBLogoParser.GreaterThanEqualsExpressionContext = GreaterThanEqualsExpressionContext;

class UnaryMinusExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	MINUS() {
	    return this.getToken(UCBLogoParser.MINUS, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterUnaryMinusExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitUnaryMinusExpression(this);
		}
	}


}

UCBLogoParser.UnaryMinusExpressionContext = UnaryMinusExpressionContext;

class QuotedWordExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	QUOTED_WORD() {
	    return this.getToken(UCBLogoParser.QUOTED_WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterQuotedWordExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitQuotedWordExpression(this);
		}
	}


}

UCBLogoParser.QuotedWordExpressionContext = QuotedWordExpressionContext;

class EqualsExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	EQ() {
	    return this.getToken(UCBLogoParser.EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterEqualsExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitEqualsExpression(this);
		}
	}


}

UCBLogoParser.EqualsExpressionContext = EqualsExpressionContext;

class SubtractionExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	MINUS() {
	    return this.getToken(UCBLogoParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterSubtractionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitSubtractionExpression(this);
		}
	}


}

UCBLogoParser.SubtractionExpressionContext = SubtractionExpressionContext;

class ProcedureCallExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	procedure_call() {
	    return this.getTypedRuleContext(Procedure_callContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterProcedureCallExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitProcedureCallExpression(this);
		}
	}


}

UCBLogoParser.ProcedureCallExpressionContext = ProcedureCallExpressionContext;

class LessThanExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	LT() {
	    return this.getToken(UCBLogoParser.LT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterLessThanExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitLessThanExpression(this);
		}
	}


}

UCBLogoParser.LessThanExpressionContext = LessThanExpressionContext;

class ProcedureCallExtraInputContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	procedure_call_extra_input() {
	    return this.getTypedRuleContext(Procedure_call_extra_inputContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterProcedureCallExtraInput(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitProcedureCallExtraInput(this);
		}
	}


}

UCBLogoParser.ProcedureCallExtraInputContext = ProcedureCallExtraInputContext;

class ListExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	list_() {
	    return this.getTypedRuleContext(List_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterListExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitListExpression(this);
		}
	}


}

UCBLogoParser.ListExpressionContext = ListExpressionContext;

class NameExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NAME() {
	    return this.getToken(UCBLogoParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterNameExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitNameExpression(this);
		}
	}


}

UCBLogoParser.NameExpressionContext = NameExpressionContext;

class Array_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UCBLogoParser.RULE_array_;
    }

	OPEN_ARRAY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(UCBLogoParser.OPEN_ARRAY);
	    } else {
	        return this.getToken(UCBLogoParser.OPEN_ARRAY, i);
	    }
	};


	CLOSE_ARRAY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(UCBLogoParser.CLOSE_ARRAY);
	    } else {
	        return this.getToken(UCBLogoParser.CLOSE_ARRAY, i);
	    }
	};


	array_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Array_Context);
	    } else {
	        return this.getTypedRuleContext(Array_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterArray_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitArray_(this);
		}
	}


}



class List_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UCBLogoParser.RULE_list_;
    }

	OPEN_LIST = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(UCBLogoParser.OPEN_LIST);
	    } else {
	        return this.getToken(UCBLogoParser.OPEN_LIST, i);
	    }
	};


	CLOSE_LIST = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(UCBLogoParser.CLOSE_LIST);
	    } else {
	        return this.getToken(UCBLogoParser.CLOSE_LIST, i);
	    }
	};


	list_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(List_Context);
	    } else {
	        return this.getTypedRuleContext(List_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.enterList_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UCBLogoListener ) {
	        listener.exitList_(this);
		}
	}


}




UCBLogoParser.ParseContext = ParseContext; 
UCBLogoParser.InstructionContext = InstructionContext; 
UCBLogoParser.Procedure_defContext = Procedure_defContext; 
UCBLogoParser.Macro_defContext = Macro_defContext; 
UCBLogoParser.VariablesContext = VariablesContext; 
UCBLogoParser.Body_defContext = Body_defContext; 
UCBLogoParser.Body_instructionContext = Body_instructionContext; 
UCBLogoParser.Procedure_call_extra_inputContext = Procedure_call_extra_inputContext; 
UCBLogoParser.Procedure_callContext = Procedure_callContext; 
UCBLogoParser.ExpressionsContext = ExpressionsContext; 
UCBLogoParser.ExpressionContext = ExpressionContext; 
UCBLogoParser.Array_Context = Array_Context; 
UCBLogoParser.List_Context = List_Context; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
