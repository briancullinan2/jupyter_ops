// Generated from ./plucid/plucid.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import plucidListener from './plucidListener.js';
const serializedATN = [4,1,55,320,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,1,0,1,0,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,100,8,1,1,1,1,1,1,1,1,1,5,
1,106,8,1,10,1,12,1,109,9,1,1,2,1,2,1,2,1,2,3,2,115,8,2,1,3,1,3,3,3,119,
8,3,1,4,4,4,122,8,4,11,4,12,4,123,1,4,1,4,3,4,128,8,4,1,5,1,5,1,5,5,5,133,
8,5,10,5,12,5,136,9,5,1,6,1,6,1,6,1,6,1,7,1,7,5,7,144,8,7,10,7,12,7,147,
9,7,1,7,4,7,150,8,7,11,7,12,7,151,1,7,1,7,1,7,1,7,3,7,158,8,7,1,8,1,8,1,
8,1,8,5,8,164,8,8,10,8,12,8,167,9,8,1,8,3,8,170,8,8,1,9,1,9,1,9,1,9,3,9,
176,8,9,1,10,1,10,5,10,180,8,10,10,10,12,10,183,9,10,1,11,1,11,1,12,1,12,
1,13,1,13,1,13,5,13,192,8,13,10,13,12,13,195,9,13,1,13,3,13,198,8,13,1,14,
1,14,1,14,1,14,5,14,204,8,14,10,14,12,14,207,9,14,3,14,209,8,14,1,15,1,15,
3,15,213,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,1,17,3,17,231,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,
1,19,1,19,1,20,1,20,1,20,1,20,1,20,5,20,248,8,20,10,20,12,20,251,9,20,1,
20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,
1,23,3,23,269,8,23,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,26,1,26,1,26,
5,26,282,8,26,10,26,12,26,285,9,26,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,
28,5,28,295,8,28,10,28,12,28,298,9,28,1,29,1,29,3,29,302,8,29,1,30,1,30,
1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,3,32,318,8,32,
1,32,0,1,2,33,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
42,44,46,48,50,52,54,56,58,60,62,64,0,2,1,0,41,46,1,0,47,51,333,0,66,1,0,
0,0,2,99,1,0,0,0,4,114,1,0,0,0,6,118,1,0,0,0,8,127,1,0,0,0,10,129,1,0,0,
0,12,137,1,0,0,0,14,157,1,0,0,0,16,169,1,0,0,0,18,175,1,0,0,0,20,177,1,0,
0,0,22,184,1,0,0,0,24,186,1,0,0,0,26,197,1,0,0,0,28,208,1,0,0,0,30,212,1,
0,0,0,32,214,1,0,0,0,34,230,1,0,0,0,36,232,1,0,0,0,38,238,1,0,0,0,40,249,
1,0,0,0,42,254,1,0,0,0,44,258,1,0,0,0,46,268,1,0,0,0,48,270,1,0,0,0,50,275,
1,0,0,0,52,283,1,0,0,0,54,286,1,0,0,0,56,296,1,0,0,0,58,301,1,0,0,0,60,303,
1,0,0,0,62,307,1,0,0,0,64,317,1,0,0,0,66,67,3,2,1,0,67,1,1,0,0,0,68,69,6,
1,-1,0,69,100,3,4,2,0,70,100,3,20,10,0,71,100,5,1,0,0,72,100,5,2,0,0,73,
74,3,22,11,0,74,75,3,2,1,11,75,100,1,0,0,0,76,77,5,3,0,0,77,78,3,2,1,0,78,
79,5,4,0,0,79,80,3,2,1,0,80,81,5,4,0,0,81,82,3,2,1,0,82,100,1,0,0,0,83,84,
5,5,0,0,84,85,3,2,1,0,85,86,5,4,0,0,86,87,3,2,1,0,87,88,5,4,0,0,88,89,3,
2,1,0,89,100,1,0,0,0,90,91,5,6,0,0,91,100,3,2,1,7,92,93,5,7,0,0,93,100,3,
2,1,6,94,100,3,26,13,0,95,100,3,32,16,0,96,100,3,36,18,0,97,100,3,38,19,
0,98,100,3,44,22,0,99,68,1,0,0,0,99,70,1,0,0,0,99,71,1,0,0,0,99,72,1,0,0,
0,99,73,1,0,0,0,99,76,1,0,0,0,99,83,1,0,0,0,99,90,1,0,0,0,99,92,1,0,0,0,
99,94,1,0,0,0,99,95,1,0,0,0,99,96,1,0,0,0,99,97,1,0,0,0,99,98,1,0,0,0,100,
107,1,0,0,0,101,102,10,10,0,0,102,103,3,24,12,0,103,104,3,2,1,11,104,106,
1,0,0,0,105,101,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,
108,3,1,0,0,0,109,107,1,0,0,0,110,115,3,6,3,0,111,115,3,12,6,0,112,115,5,
40,0,0,113,115,3,16,8,0,114,110,1,0,0,0,114,111,1,0,0,0,114,112,1,0,0,0,
114,113,1,0,0,0,115,5,1,0,0,0,116,119,3,8,4,0,117,119,3,10,5,0,118,116,1,
0,0,0,118,117,1,0,0,0,119,7,1,0,0,0,120,122,5,53,0,0,121,120,1,0,0,0,122,
123,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,128,1,0,0,0,125,126,5,34,
0,0,126,128,3,8,4,0,127,121,1,0,0,0,127,125,1,0,0,0,128,9,1,0,0,0,129,130,
3,8,4,0,130,134,5,38,0,0,131,133,5,53,0,0,132,131,1,0,0,0,133,136,1,0,0,
0,134,132,1,0,0,0,134,135,1,0,0,0,135,11,1,0,0,0,136,134,1,0,0,0,137,138,
5,36,0,0,138,139,3,14,7,0,139,140,5,36,0,0,140,13,1,0,0,0,141,145,5,54,0,
0,142,144,5,52,0,0,143,142,1,0,0,0,144,147,1,0,0,0,145,143,1,0,0,0,145,146,
1,0,0,0,146,158,1,0,0,0,147,145,1,0,0,0,148,150,5,35,0,0,149,148,1,0,0,0,
150,151,1,0,0,0,151,149,1,0,0,0,151,152,1,0,0,0,152,158,1,0,0,0,153,158,
5,37,0,0,154,158,5,38,0,0,155,158,5,39,0,0,156,158,5,36,0,0,157,141,1,0,
0,0,157,149,1,0,0,0,157,153,1,0,0,0,157,154,1,0,0,0,157,155,1,0,0,0,157,
156,1,0,0,0,158,15,1,0,0,0,159,170,5,8,0,0,160,170,5,9,0,0,161,165,5,10,
0,0,162,164,3,18,9,0,163,162,1,0,0,0,164,167,1,0,0,0,165,163,1,0,0,0,165,
166,1,0,0,0,166,168,1,0,0,0,167,165,1,0,0,0,168,170,5,11,0,0,169,159,1,0,
0,0,169,160,1,0,0,0,169,161,1,0,0,0,170,17,1,0,0,0,171,176,3,6,3,0,172,176,
3,14,7,0,173,176,5,40,0,0,174,176,3,16,8,0,175,171,1,0,0,0,175,172,1,0,0,
0,175,173,1,0,0,0,175,174,1,0,0,0,176,19,1,0,0,0,177,181,5,54,0,0,178,180,
5,52,0,0,179,178,1,0,0,0,180,183,1,0,0,0,181,179,1,0,0,0,181,182,1,0,0,0,
182,21,1,0,0,0,183,181,1,0,0,0,184,185,7,0,0,0,185,23,1,0,0,0,186,187,7,
1,0,0,187,25,1,0,0,0,188,198,5,12,0,0,189,193,5,13,0,0,190,192,3,28,14,0,
191,190,1,0,0,0,192,195,1,0,0,0,193,191,1,0,0,0,193,194,1,0,0,0,194,196,
1,0,0,0,195,193,1,0,0,0,196,198,5,14,0,0,197,188,1,0,0,0,197,189,1,0,0,0,
198,27,1,0,0,0,199,209,3,30,15,0,200,201,3,30,15,0,201,205,5,4,0,0,202,204,
3,28,14,0,203,202,1,0,0,0,204,207,1,0,0,0,205,203,1,0,0,0,205,206,1,0,0,
0,206,209,1,0,0,0,207,205,1,0,0,0,208,199,1,0,0,0,208,200,1,0,0,0,209,29,
1,0,0,0,210,213,3,2,1,0,211,213,3,26,13,0,212,210,1,0,0,0,212,211,1,0,0,
0,213,31,1,0,0,0,214,215,5,15,0,0,215,216,3,2,1,0,216,217,5,16,0,0,217,218,
3,2,1,0,218,219,3,34,17,0,219,33,1,0,0,0,220,221,5,17,0,0,221,222,3,2,1,
0,222,223,5,18,0,0,223,231,1,0,0,0,224,225,5,19,0,0,225,226,3,2,1,0,226,
227,5,16,0,0,227,228,3,2,1,0,228,229,5,20,0,0,229,231,1,0,0,0,230,220,1,
0,0,0,230,224,1,0,0,0,231,35,1,0,0,0,232,233,5,21,0,0,233,234,3,2,1,0,234,
235,5,22,0,0,235,236,3,40,20,0,236,237,5,23,0,0,237,37,1,0,0,0,238,239,5,
24,0,0,239,240,3,40,20,0,240,241,5,23,0,0,241,39,1,0,0,0,242,243,3,2,1,0,
243,244,5,25,0,0,244,245,3,2,1,0,245,246,5,26,0,0,246,248,1,0,0,0,247,242,
1,0,0,0,248,251,1,0,0,0,249,247,1,0,0,0,249,250,1,0,0,0,250,252,1,0,0,0,
251,249,1,0,0,0,252,253,3,42,21,0,253,41,1,0,0,0,254,255,5,27,0,0,255,256,
5,25,0,0,256,257,3,2,1,0,257,43,1,0,0,0,258,259,3,20,10,0,259,260,5,28,0,
0,260,261,3,46,23,0,261,262,5,29,0,0,262,45,1,0,0,0,263,269,3,2,1,0,264,
265,3,2,1,0,265,266,5,4,0,0,266,267,3,46,23,0,267,269,1,0,0,0,268,263,1,
0,0,0,268,264,1,0,0,0,269,47,1,0,0,0,270,271,3,2,1,0,271,272,5,30,0,0,272,
273,3,50,25,0,273,274,5,23,0,0,274,49,1,0,0,0,275,276,3,52,26,0,276,277,
3,56,28,0,277,51,1,0,0,0,278,279,3,54,27,0,279,280,5,26,0,0,280,282,1,0,
0,0,281,278,1,0,0,0,282,285,1,0,0,0,283,281,1,0,0,0,283,284,1,0,0,0,284,
53,1,0,0,0,285,283,1,0,0,0,286,287,3,20,10,0,287,288,5,31,0,0,288,289,5,
32,0,0,289,290,3,2,1,0,290,55,1,0,0,0,291,292,3,58,29,0,292,293,5,26,0,0,
293,295,1,0,0,0,294,291,1,0,0,0,295,298,1,0,0,0,296,294,1,0,0,0,296,297,
1,0,0,0,297,57,1,0,0,0,298,296,1,0,0,0,299,302,3,60,30,0,300,302,3,62,31,
0,301,299,1,0,0,0,301,300,1,0,0,0,302,59,1,0,0,0,303,304,3,20,10,0,304,305,
5,33,0,0,305,306,3,2,1,0,306,61,1,0,0,0,307,308,3,20,10,0,308,309,3,64,32,
0,309,310,5,33,0,0,310,311,3,2,1,0,311,63,1,0,0,0,312,318,3,20,10,0,313,
314,3,20,10,0,314,315,5,4,0,0,315,316,3,64,32,0,316,318,1,0,0,0,317,312,
1,0,0,0,317,313,1,0,0,0,318,65,1,0,0,0,26,99,107,114,118,123,127,134,145,
151,157,165,169,175,181,193,197,205,208,212,230,249,268,283,296,301,317];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class plucidParser extends antlr4.Parser {

    static grammarFileName = "plucid.g4";
    static literalNames = [ null, "'error'", "'eod'", "'filter'", "','", 
                            "'substr'", "'length'", "'arg'", "'nil'", "'[]'", 
                            "'['", "']'", "'[%%]'", "'[%'", "'%]'", "'if'", 
                            "'then'", "'else'", "'fi'", "'elseif'", "'endif'", 
                            "'case'", "'of'", "'end'", "'cond'", "':'", 
                            "';'", "'default'", "'('", "')'", "'where'", 
                            "'is'", "'current'", "'='", "'\\u02DC'", null, 
                            "'\"'", null, "'.'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "N_SIGN", "SIGN", "QUOTE", "BRACKET", 
                             "PERIOD", "SEPARATOR", "STRING_CONSTANT", "P_NUMERIC_OPERATOR", 
                             "P_WORD_OPERATOR", "P_STRING_OPERATOR", "P_LIST_OPERATOR", 
                             "P_LUCID_OPERATOR", "P_SPECIAL_OPERATOR", "I_NUMERIC_OPERATOR", 
                             "I_WORD_OPERATOR", "I_STRING_OPERATOR", "I_LIST_OPERATOR", 
                             "I_LUCID_OPERATOR", "ALPHANUMERIC", "DIGIT", 
                             "LETTER", "WS" ];
    static ruleNames = [ "program", "expression", "constant", "numeric_constant", 
                         "integer_constant", "real_constant", "word_constant", 
                         "word_constant_less_the_quotes", "list_constant", 
                         "list_constant_element", "identifier", "prefix_operator", 
                         "infix_operator", "list_expression", "expressions_list", 
                         "expression_item", "if_expression", "endif", "case_expression", 
                         "cond_expression", "cbody", "defaultcase", "function_call", 
                         "actuals_list", "where_clause", "body", "declarations_list", 
                         "current_declaration", "definitions_list", "definition", 
                         "simple_definition", "function_definition", "formals_list" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = plucidParser.ruleNames;
        this.literalNames = plucidParser.literalNames;
        this.symbolicNames = plucidParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 10);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, plucidParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.expression(0);
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
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, plucidParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 69;
	            this.constant();
	            break;

	        case 2:
	            this.state = 70;
	            this.identifier();
	            break;

	        case 3:
	            this.state = 71;
	            this.match(plucidParser.T__0);
	            break;

	        case 4:
	            this.state = 72;
	            this.match(plucidParser.T__1);
	            break;

	        case 5:
	            this.state = 73;
	            this.prefix_operator();
	            this.state = 74;
	            this.expression(11);
	            break;

	        case 6:
	            this.state = 76;
	            this.match(plucidParser.T__2);

	            this.state = 77;
	            this.expression(0);
	            this.state = 78;
	            this.match(plucidParser.T__3);
	            this.state = 79;
	            this.expression(0);
	            this.state = 80;
	            this.match(plucidParser.T__3);
	            this.state = 81;
	            this.expression(0);
	            break;

	        case 7:
	            this.state = 83;
	            this.match(plucidParser.T__4);

	            this.state = 84;
	            this.expression(0);
	            this.state = 85;
	            this.match(plucidParser.T__3);
	            this.state = 86;
	            this.expression(0);
	            this.state = 87;
	            this.match(plucidParser.T__3);
	            this.state = 88;
	            this.expression(0);
	            break;

	        case 8:
	            this.state = 90;
	            this.match(plucidParser.T__5);
	            this.state = 91;
	            this.expression(7);
	            break;

	        case 9:
	            this.state = 92;
	            this.match(plucidParser.T__6);
	            this.state = 93;
	            this.expression(6);
	            break;

	        case 10:
	            this.state = 94;
	            this.list_expression();
	            break;

	        case 11:
	            this.state = 95;
	            this.if_expression();
	            break;

	        case 12:
	            this.state = 96;
	            this.case_expression();
	            break;

	        case 13:
	            this.state = 97;
	            this.cond_expression();
	            break;

	        case 14:
	            this.state = 98;
	            this.function_call();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 107;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, plucidParser.RULE_expression);
	                this.state = 101;
	                if (!( this.precpred(this._ctx, 10))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                }
	                this.state = 102;
	                this.infix_operator();
	                this.state = 103;
	                this.expression(11); 
	            }
	            this.state = 109;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
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



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, plucidParser.RULE_constant);
	    try {
	        this.state = 114;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case plucidParser.N_SIGN:
	        case plucidParser.DIGIT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 110;
	            this.numeric_constant();
	            break;
	        case plucidParser.QUOTE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 111;
	            this.word_constant();
	            break;
	        case plucidParser.STRING_CONSTANT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 112;
	            this.match(plucidParser.STRING_CONSTANT);
	            break;
	        case plucidParser.T__7:
	        case plucidParser.T__8:
	        case plucidParser.T__9:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 113;
	            this.list_constant();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	numeric_constant() {
	    let localctx = new Numeric_constantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, plucidParser.RULE_numeric_constant);
	    try {
	        this.state = 118;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 116;
	            this.integer_constant();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 117;
	            this.real_constant();
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



	integer_constant() {
	    let localctx = new Integer_constantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, plucidParser.RULE_integer_constant);
	    try {
	        this.state = 127;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case plucidParser.DIGIT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 121; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 120;
	            		this.match(plucidParser.DIGIT);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 123; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case plucidParser.N_SIGN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 125;
	            this.match(plucidParser.N_SIGN);
	            this.state = 126;
	            this.integer_constant();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	real_constant() {
	    let localctx = new Real_constantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, plucidParser.RULE_real_constant);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.integer_constant();
	        this.state = 130;
	        this.match(plucidParser.PERIOD);
	        this.state = 134;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 131;
	                this.match(plucidParser.DIGIT); 
	            }
	            this.state = 136;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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



	word_constant() {
	    let localctx = new Word_constantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, plucidParser.RULE_word_constant);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(plucidParser.QUOTE);
	        this.state = 138;
	        this.word_constant_less_the_quotes();
	        this.state = 139;
	        this.match(plucidParser.QUOTE);
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



	word_constant_less_the_quotes() {
	    let localctx = new Word_constant_less_the_quotesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, plucidParser.RULE_word_constant_less_the_quotes);
	    var _la = 0; // Token type
	    try {
	        this.state = 157;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case plucidParser.LETTER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 141;
	            this.match(plucidParser.LETTER);
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===plucidParser.ALPHANUMERIC) {
	                this.state = 142;
	                this.match(plucidParser.ALPHANUMERIC);
	                this.state = 147;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case plucidParser.SIGN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 149; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 148;
	            		this.match(plucidParser.SIGN);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 151; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,8, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case plucidParser.BRACKET:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 153;
	            this.match(plucidParser.BRACKET);
	            break;
	        case plucidParser.PERIOD:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 154;
	            this.match(plucidParser.PERIOD);
	            break;
	        case plucidParser.SEPARATOR:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 155;
	            this.match(plucidParser.SEPARATOR);
	            break;
	        case plucidParser.QUOTE:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 156;
	            this.match(plucidParser.QUOTE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	list_constant() {
	    let localctx = new List_constantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, plucidParser.RULE_list_constant);
	    var _la = 0; // Token type
	    try {
	        this.state = 169;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case plucidParser.T__7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 159;
	            this.match(plucidParser.T__7);
	            break;
	        case plucidParser.T__8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 160;
	            this.match(plucidParser.T__8);
	            break;
	        case plucidParser.T__9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 161;
	            this.match(plucidParser.T__9);
	            this.state = 165;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << plucidParser.T__7) | (1 << plucidParser.T__8) | (1 << plucidParser.T__9))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (plucidParser.N_SIGN - 34)) | (1 << (plucidParser.SIGN - 34)) | (1 << (plucidParser.QUOTE - 34)) | (1 << (plucidParser.BRACKET - 34)) | (1 << (plucidParser.PERIOD - 34)) | (1 << (plucidParser.SEPARATOR - 34)) | (1 << (plucidParser.STRING_CONSTANT - 34)) | (1 << (plucidParser.DIGIT - 34)) | (1 << (plucidParser.LETTER - 34)))) !== 0)) {
	                this.state = 162;
	                this.list_constant_element();
	                this.state = 167;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 168;
	            this.match(plucidParser.T__10);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	list_constant_element() {
	    let localctx = new List_constant_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, plucidParser.RULE_list_constant_element);
	    try {
	        this.state = 175;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case plucidParser.N_SIGN:
	        case plucidParser.DIGIT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 171;
	            this.numeric_constant();
	            break;
	        case plucidParser.SIGN:
	        case plucidParser.QUOTE:
	        case plucidParser.BRACKET:
	        case plucidParser.PERIOD:
	        case plucidParser.SEPARATOR:
	        case plucidParser.LETTER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 172;
	            this.word_constant_less_the_quotes();
	            break;
	        case plucidParser.STRING_CONSTANT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 173;
	            this.match(plucidParser.STRING_CONSTANT);
	            break;
	        case plucidParser.T__7:
	        case plucidParser.T__8:
	        case plucidParser.T__9:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 174;
	            this.list_constant();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, plucidParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.match(plucidParser.LETTER);
	        this.state = 181;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 178;
	                this.match(plucidParser.ALPHANUMERIC); 
	            }
	            this.state = 183;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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



	prefix_operator() {
	    let localctx = new Prefix_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, plucidParser.RULE_prefix_operator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        _la = this._input.LA(1);
	        if(!(((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (plucidParser.P_NUMERIC_OPERATOR - 41)) | (1 << (plucidParser.P_WORD_OPERATOR - 41)) | (1 << (plucidParser.P_STRING_OPERATOR - 41)) | (1 << (plucidParser.P_LIST_OPERATOR - 41)) | (1 << (plucidParser.P_LUCID_OPERATOR - 41)) | (1 << (plucidParser.P_SPECIAL_OPERATOR - 41)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	infix_operator() {
	    let localctx = new Infix_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, plucidParser.RULE_infix_operator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        _la = this._input.LA(1);
	        if(!(((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (plucidParser.I_NUMERIC_OPERATOR - 47)) | (1 << (plucidParser.I_WORD_OPERATOR - 47)) | (1 << (plucidParser.I_STRING_OPERATOR - 47)) | (1 << (plucidParser.I_LIST_OPERATOR - 47)) | (1 << (plucidParser.I_LUCID_OPERATOR - 47)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	list_expression() {
	    let localctx = new List_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, plucidParser.RULE_list_expression);
	    var _la = 0; // Token type
	    try {
	        this.state = 197;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case plucidParser.T__11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 188;
	            this.match(plucidParser.T__11);
	            break;
	        case plucidParser.T__12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 189;
	            this.match(plucidParser.T__12);
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << plucidParser.T__0) | (1 << plucidParser.T__1) | (1 << plucidParser.T__2) | (1 << plucidParser.T__4) | (1 << plucidParser.T__5) | (1 << plucidParser.T__6) | (1 << plucidParser.T__7) | (1 << plucidParser.T__8) | (1 << plucidParser.T__9) | (1 << plucidParser.T__11) | (1 << plucidParser.T__12) | (1 << plucidParser.T__14) | (1 << plucidParser.T__20) | (1 << plucidParser.T__23))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (plucidParser.N_SIGN - 34)) | (1 << (plucidParser.QUOTE - 34)) | (1 << (plucidParser.STRING_CONSTANT - 34)) | (1 << (plucidParser.P_NUMERIC_OPERATOR - 34)) | (1 << (plucidParser.P_WORD_OPERATOR - 34)) | (1 << (plucidParser.P_STRING_OPERATOR - 34)) | (1 << (plucidParser.P_LIST_OPERATOR - 34)) | (1 << (plucidParser.P_LUCID_OPERATOR - 34)) | (1 << (plucidParser.P_SPECIAL_OPERATOR - 34)) | (1 << (plucidParser.DIGIT - 34)) | (1 << (plucidParser.LETTER - 34)))) !== 0)) {
	                this.state = 190;
	                this.expressions_list();
	                this.state = 195;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 196;
	            this.match(plucidParser.T__13);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	expressions_list() {
	    let localctx = new Expressions_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, plucidParser.RULE_expressions_list);
	    try {
	        this.state = 208;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 199;
	            this.expression_item();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 200;
	            this.expression_item();
	            this.state = 201;
	            this.match(plucidParser.T__3);
	            this.state = 205;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 202;
	                    this.expressions_list(); 
	                }
	                this.state = 207;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	            }

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



	expression_item() {
	    let localctx = new Expression_itemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, plucidParser.RULE_expression_item);
	    try {
	        this.state = 212;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 210;
	            this.expression(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 211;
	            this.list_expression();
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



	if_expression() {
	    let localctx = new If_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, plucidParser.RULE_if_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.match(plucidParser.T__14);
	        this.state = 215;
	        this.expression(0);
	        this.state = 216;
	        this.match(plucidParser.T__15);
	        this.state = 217;
	        this.expression(0);
	        this.state = 218;
	        this.endif();
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



	endif() {
	    let localctx = new EndifContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, plucidParser.RULE_endif);
	    try {
	        this.state = 230;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case plucidParser.T__16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 220;
	            this.match(plucidParser.T__16);
	            this.state = 221;
	            this.expression(0);
	            this.state = 222;
	            this.match(plucidParser.T__17);
	            break;
	        case plucidParser.T__18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 224;
	            this.match(plucidParser.T__18);
	            this.state = 225;
	            this.expression(0);
	            this.state = 226;
	            this.match(plucidParser.T__15);
	            this.state = 227;
	            this.expression(0);
	            this.state = 228;
	            this.match(plucidParser.T__19);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	case_expression() {
	    let localctx = new Case_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, plucidParser.RULE_case_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(plucidParser.T__20);
	        this.state = 233;
	        this.expression(0);
	        this.state = 234;
	        this.match(plucidParser.T__21);
	        this.state = 235;
	        this.cbody();
	        this.state = 236;
	        this.match(plucidParser.T__22);
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



	cond_expression() {
	    let localctx = new Cond_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, plucidParser.RULE_cond_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(plucidParser.T__23);
	        this.state = 239;
	        this.cbody();
	        this.state = 240;
	        this.match(plucidParser.T__22);
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



	cbody() {
	    let localctx = new CbodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, plucidParser.RULE_cbody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << plucidParser.T__0) | (1 << plucidParser.T__1) | (1 << plucidParser.T__2) | (1 << plucidParser.T__4) | (1 << plucidParser.T__5) | (1 << plucidParser.T__6) | (1 << plucidParser.T__7) | (1 << plucidParser.T__8) | (1 << plucidParser.T__9) | (1 << plucidParser.T__11) | (1 << plucidParser.T__12) | (1 << plucidParser.T__14) | (1 << plucidParser.T__20) | (1 << plucidParser.T__23))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (plucidParser.N_SIGN - 34)) | (1 << (plucidParser.QUOTE - 34)) | (1 << (plucidParser.STRING_CONSTANT - 34)) | (1 << (plucidParser.P_NUMERIC_OPERATOR - 34)) | (1 << (plucidParser.P_WORD_OPERATOR - 34)) | (1 << (plucidParser.P_STRING_OPERATOR - 34)) | (1 << (plucidParser.P_LIST_OPERATOR - 34)) | (1 << (plucidParser.P_LUCID_OPERATOR - 34)) | (1 << (plucidParser.P_SPECIAL_OPERATOR - 34)) | (1 << (plucidParser.DIGIT - 34)) | (1 << (plucidParser.LETTER - 34)))) !== 0)) {
	            this.state = 242;
	            this.expression(0);
	            this.state = 243;
	            this.match(plucidParser.T__24);
	            this.state = 244;
	            this.expression(0);
	            this.state = 245;
	            this.match(plucidParser.T__25);
	            this.state = 251;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 252;
	        this.defaultcase();
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



	defaultcase() {
	    let localctx = new DefaultcaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, plucidParser.RULE_defaultcase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(plucidParser.T__26);
	        this.state = 255;
	        this.match(plucidParser.T__24);
	        this.state = 256;
	        this.expression(0);
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



	function_call() {
	    let localctx = new Function_callContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, plucidParser.RULE_function_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.identifier();
	        this.state = 259;
	        this.match(plucidParser.T__27);
	        this.state = 260;
	        this.actuals_list();
	        this.state = 261;
	        this.match(plucidParser.T__28);
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



	actuals_list() {
	    let localctx = new Actuals_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, plucidParser.RULE_actuals_list);
	    try {
	        this.state = 268;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 263;
	            this.expression(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 264;
	            this.expression(0);
	            this.state = 265;
	            this.match(plucidParser.T__3);
	            this.state = 266;
	            this.actuals_list();
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



	where_clause() {
	    let localctx = new Where_clauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, plucidParser.RULE_where_clause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.expression(0);
	        this.state = 271;
	        this.match(plucidParser.T__29);
	        this.state = 272;
	        this.body();
	        this.state = 273;
	        this.match(plucidParser.T__22);
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



	body() {
	    let localctx = new BodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, plucidParser.RULE_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
	        this.declarations_list();
	        this.state = 276;
	        this.definitions_list();
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



	declarations_list() {
	    let localctx = new Declarations_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, plucidParser.RULE_declarations_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 278;
	                this.current_declaration();
	                this.state = 279;
	                this.match(plucidParser.T__25); 
	            }
	            this.state = 285;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
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



	current_declaration() {
	    let localctx = new Current_declarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, plucidParser.RULE_current_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
	        this.identifier();
	        this.state = 287;
	        this.match(plucidParser.T__30);
	        this.state = 288;
	        this.match(plucidParser.T__31);
	        this.state = 289;
	        this.expression(0);
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



	definitions_list() {
	    let localctx = new Definitions_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, plucidParser.RULE_definitions_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===plucidParser.LETTER) {
	            this.state = 291;
	            this.definition();
	            this.state = 292;
	            this.match(plucidParser.T__25);
	            this.state = 298;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, plucidParser.RULE_definition);
	    try {
	        this.state = 301;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 299;
	            this.simple_definition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 300;
	            this.function_definition();
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



	simple_definition() {
	    let localctx = new Simple_definitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, plucidParser.RULE_simple_definition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 303;
	        this.identifier();
	        this.state = 304;
	        this.match(plucidParser.T__32);
	        this.state = 305;
	        this.expression(0);
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



	function_definition() {
	    let localctx = new Function_definitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, plucidParser.RULE_function_definition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.identifier();

	        this.state = 308;
	        this.formals_list();
	        this.state = 309;
	        this.match(plucidParser.T__32);
	        this.state = 310;
	        this.expression(0);
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



	formals_list() {
	    let localctx = new Formals_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, plucidParser.RULE_formals_list);
	    try {
	        this.state = 317;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 312;
	            this.identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 313;
	            this.identifier();
	            this.state = 314;
	            this.match(plucidParser.T__3);
	            this.state = 315;
	            this.formals_list();
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


}

plucidParser.EOF = antlr4.Token.EOF;
plucidParser.T__0 = 1;
plucidParser.T__1 = 2;
plucidParser.T__2 = 3;
plucidParser.T__3 = 4;
plucidParser.T__4 = 5;
plucidParser.T__5 = 6;
plucidParser.T__6 = 7;
plucidParser.T__7 = 8;
plucidParser.T__8 = 9;
plucidParser.T__9 = 10;
plucidParser.T__10 = 11;
plucidParser.T__11 = 12;
plucidParser.T__12 = 13;
plucidParser.T__13 = 14;
plucidParser.T__14 = 15;
plucidParser.T__15 = 16;
plucidParser.T__16 = 17;
plucidParser.T__17 = 18;
plucidParser.T__18 = 19;
plucidParser.T__19 = 20;
plucidParser.T__20 = 21;
plucidParser.T__21 = 22;
plucidParser.T__22 = 23;
plucidParser.T__23 = 24;
plucidParser.T__24 = 25;
plucidParser.T__25 = 26;
plucidParser.T__26 = 27;
plucidParser.T__27 = 28;
plucidParser.T__28 = 29;
plucidParser.T__29 = 30;
plucidParser.T__30 = 31;
plucidParser.T__31 = 32;
plucidParser.T__32 = 33;
plucidParser.N_SIGN = 34;
plucidParser.SIGN = 35;
plucidParser.QUOTE = 36;
plucidParser.BRACKET = 37;
plucidParser.PERIOD = 38;
plucidParser.SEPARATOR = 39;
plucidParser.STRING_CONSTANT = 40;
plucidParser.P_NUMERIC_OPERATOR = 41;
plucidParser.P_WORD_OPERATOR = 42;
plucidParser.P_STRING_OPERATOR = 43;
plucidParser.P_LIST_OPERATOR = 44;
plucidParser.P_LUCID_OPERATOR = 45;
plucidParser.P_SPECIAL_OPERATOR = 46;
plucidParser.I_NUMERIC_OPERATOR = 47;
plucidParser.I_WORD_OPERATOR = 48;
plucidParser.I_STRING_OPERATOR = 49;
plucidParser.I_LIST_OPERATOR = 50;
plucidParser.I_LUCID_OPERATOR = 51;
plucidParser.ALPHANUMERIC = 52;
plucidParser.DIGIT = 53;
plucidParser.LETTER = 54;
plucidParser.WS = 55;

plucidParser.RULE_program = 0;
plucidParser.RULE_expression = 1;
plucidParser.RULE_constant = 2;
plucidParser.RULE_numeric_constant = 3;
plucidParser.RULE_integer_constant = 4;
plucidParser.RULE_real_constant = 5;
plucidParser.RULE_word_constant = 6;
plucidParser.RULE_word_constant_less_the_quotes = 7;
plucidParser.RULE_list_constant = 8;
plucidParser.RULE_list_constant_element = 9;
plucidParser.RULE_identifier = 10;
plucidParser.RULE_prefix_operator = 11;
plucidParser.RULE_infix_operator = 12;
plucidParser.RULE_list_expression = 13;
plucidParser.RULE_expressions_list = 14;
plucidParser.RULE_expression_item = 15;
plucidParser.RULE_if_expression = 16;
plucidParser.RULE_endif = 17;
plucidParser.RULE_case_expression = 18;
plucidParser.RULE_cond_expression = 19;
plucidParser.RULE_cbody = 20;
plucidParser.RULE_defaultcase = 21;
plucidParser.RULE_function_call = 22;
plucidParser.RULE_actuals_list = 23;
plucidParser.RULE_where_clause = 24;
plucidParser.RULE_body = 25;
plucidParser.RULE_declarations_list = 26;
plucidParser.RULE_current_declaration = 27;
plucidParser.RULE_definitions_list = 28;
plucidParser.RULE_definition = 29;
plucidParser.RULE_simple_definition = 30;
plucidParser.RULE_function_definition = 31;
plucidParser.RULE_formals_list = 32;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_program;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitProgram(this);
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
        this.ruleIndex = plucidParser.RULE_expression;
    }

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	prefix_operator() {
	    return this.getTypedRuleContext(Prefix_operatorContext,0);
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

	list_expression() {
	    return this.getTypedRuleContext(List_expressionContext,0);
	};

	if_expression() {
	    return this.getTypedRuleContext(If_expressionContext,0);
	};

	case_expression() {
	    return this.getTypedRuleContext(Case_expressionContext,0);
	};

	cond_expression() {
	    return this.getTypedRuleContext(Cond_expressionContext,0);
	};

	function_call() {
	    return this.getTypedRuleContext(Function_callContext,0);
	};

	infix_operator() {
	    return this.getTypedRuleContext(Infix_operatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitExpression(this);
		}
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_constant;
    }

	numeric_constant() {
	    return this.getTypedRuleContext(Numeric_constantContext,0);
	};

	word_constant() {
	    return this.getTypedRuleContext(Word_constantContext,0);
	};

	STRING_CONSTANT() {
	    return this.getToken(plucidParser.STRING_CONSTANT, 0);
	};

	list_constant() {
	    return this.getTypedRuleContext(List_constantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitConstant(this);
		}
	}


}



class Numeric_constantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_numeric_constant;
    }

	integer_constant() {
	    return this.getTypedRuleContext(Integer_constantContext,0);
	};

	real_constant() {
	    return this.getTypedRuleContext(Real_constantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterNumeric_constant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitNumeric_constant(this);
		}
	}


}



class Integer_constantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_integer_constant;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(plucidParser.DIGIT);
	    } else {
	        return this.getToken(plucidParser.DIGIT, i);
	    }
	};


	N_SIGN() {
	    return this.getToken(plucidParser.N_SIGN, 0);
	};

	integer_constant() {
	    return this.getTypedRuleContext(Integer_constantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterInteger_constant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitInteger_constant(this);
		}
	}


}



class Real_constantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_real_constant;
    }

	integer_constant() {
	    return this.getTypedRuleContext(Integer_constantContext,0);
	};

	PERIOD() {
	    return this.getToken(plucidParser.PERIOD, 0);
	};

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(plucidParser.DIGIT);
	    } else {
	        return this.getToken(plucidParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterReal_constant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitReal_constant(this);
		}
	}


}



class Word_constantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_word_constant;
    }

	QUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(plucidParser.QUOTE);
	    } else {
	        return this.getToken(plucidParser.QUOTE, i);
	    }
	};


	word_constant_less_the_quotes() {
	    return this.getTypedRuleContext(Word_constant_less_the_quotesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterWord_constant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitWord_constant(this);
		}
	}


}



class Word_constant_less_the_quotesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_word_constant_less_the_quotes;
    }

	LETTER() {
	    return this.getToken(plucidParser.LETTER, 0);
	};

	ALPHANUMERIC = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(plucidParser.ALPHANUMERIC);
	    } else {
	        return this.getToken(plucidParser.ALPHANUMERIC, i);
	    }
	};


	SIGN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(plucidParser.SIGN);
	    } else {
	        return this.getToken(plucidParser.SIGN, i);
	    }
	};


	BRACKET() {
	    return this.getToken(plucidParser.BRACKET, 0);
	};

	PERIOD() {
	    return this.getToken(plucidParser.PERIOD, 0);
	};

	SEPARATOR() {
	    return this.getToken(plucidParser.SEPARATOR, 0);
	};

	QUOTE() {
	    return this.getToken(plucidParser.QUOTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterWord_constant_less_the_quotes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitWord_constant_less_the_quotes(this);
		}
	}


}



class List_constantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_list_constant;
    }

	list_constant_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(List_constant_elementContext);
	    } else {
	        return this.getTypedRuleContext(List_constant_elementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterList_constant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitList_constant(this);
		}
	}


}



class List_constant_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_list_constant_element;
    }

	numeric_constant() {
	    return this.getTypedRuleContext(Numeric_constantContext,0);
	};

	word_constant_less_the_quotes() {
	    return this.getTypedRuleContext(Word_constant_less_the_quotesContext,0);
	};

	STRING_CONSTANT() {
	    return this.getToken(plucidParser.STRING_CONSTANT, 0);
	};

	list_constant() {
	    return this.getTypedRuleContext(List_constantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterList_constant_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitList_constant_element(this);
		}
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_identifier;
    }

	LETTER() {
	    return this.getToken(plucidParser.LETTER, 0);
	};

	ALPHANUMERIC = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(plucidParser.ALPHANUMERIC);
	    } else {
	        return this.getToken(plucidParser.ALPHANUMERIC, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class Prefix_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_prefix_operator;
    }

	P_NUMERIC_OPERATOR() {
	    return this.getToken(plucidParser.P_NUMERIC_OPERATOR, 0);
	};

	P_WORD_OPERATOR() {
	    return this.getToken(plucidParser.P_WORD_OPERATOR, 0);
	};

	P_STRING_OPERATOR() {
	    return this.getToken(plucidParser.P_STRING_OPERATOR, 0);
	};

	P_LIST_OPERATOR() {
	    return this.getToken(plucidParser.P_LIST_OPERATOR, 0);
	};

	P_LUCID_OPERATOR() {
	    return this.getToken(plucidParser.P_LUCID_OPERATOR, 0);
	};

	P_SPECIAL_OPERATOR() {
	    return this.getToken(plucidParser.P_SPECIAL_OPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterPrefix_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitPrefix_operator(this);
		}
	}


}



class Infix_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_infix_operator;
    }

	I_NUMERIC_OPERATOR() {
	    return this.getToken(plucidParser.I_NUMERIC_OPERATOR, 0);
	};

	I_WORD_OPERATOR() {
	    return this.getToken(plucidParser.I_WORD_OPERATOR, 0);
	};

	I_STRING_OPERATOR() {
	    return this.getToken(plucidParser.I_STRING_OPERATOR, 0);
	};

	I_LIST_OPERATOR() {
	    return this.getToken(plucidParser.I_LIST_OPERATOR, 0);
	};

	I_LUCID_OPERATOR() {
	    return this.getToken(plucidParser.I_LUCID_OPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterInfix_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitInfix_operator(this);
		}
	}


}



class List_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_list_expression;
    }

	expressions_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expressions_listContext);
	    } else {
	        return this.getTypedRuleContext(Expressions_listContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterList_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitList_expression(this);
		}
	}


}



class Expressions_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_expressions_list;
    }

	expression_item() {
	    return this.getTypedRuleContext(Expression_itemContext,0);
	};

	expressions_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expressions_listContext);
	    } else {
	        return this.getTypedRuleContext(Expressions_listContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterExpressions_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitExpressions_list(this);
		}
	}


}



class Expression_itemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_expression_item;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	list_expression() {
	    return this.getTypedRuleContext(List_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterExpression_item(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitExpression_item(this);
		}
	}


}



class If_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_if_expression;
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

	endif() {
	    return this.getTypedRuleContext(EndifContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterIf_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitIf_expression(this);
		}
	}


}



class EndifContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_endif;
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
	    if(listener instanceof plucidListener ) {
	        listener.enterEndif(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitEndif(this);
		}
	}


}



class Case_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_case_expression;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	cbody() {
	    return this.getTypedRuleContext(CbodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterCase_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitCase_expression(this);
		}
	}


}



class Cond_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_cond_expression;
    }

	cbody() {
	    return this.getTypedRuleContext(CbodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterCond_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitCond_expression(this);
		}
	}


}



class CbodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_cbody;
    }

	defaultcase() {
	    return this.getTypedRuleContext(DefaultcaseContext,0);
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
	    if(listener instanceof plucidListener ) {
	        listener.enterCbody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitCbody(this);
		}
	}


}



class DefaultcaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_defaultcase;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterDefaultcase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitDefaultcase(this);
		}
	}


}



class Function_callContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_function_call;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	actuals_list() {
	    return this.getTypedRuleContext(Actuals_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterFunction_call(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitFunction_call(this);
		}
	}


}



class Actuals_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_actuals_list;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	actuals_list() {
	    return this.getTypedRuleContext(Actuals_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterActuals_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitActuals_list(this);
		}
	}


}



class Where_clauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_where_clause;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterWhere_clause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitWhere_clause(this);
		}
	}


}



class BodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_body;
    }

	declarations_list() {
	    return this.getTypedRuleContext(Declarations_listContext,0);
	};

	definitions_list() {
	    return this.getTypedRuleContext(Definitions_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitBody(this);
		}
	}


}



class Declarations_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_declarations_list;
    }

	current_declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Current_declarationContext);
	    } else {
	        return this.getTypedRuleContext(Current_declarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterDeclarations_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitDeclarations_list(this);
		}
	}


}



class Current_declarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_current_declaration;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterCurrent_declaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitCurrent_declaration(this);
		}
	}


}



class Definitions_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_definitions_list;
    }

	definition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinitionContext);
	    } else {
	        return this.getTypedRuleContext(DefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterDefinitions_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitDefinitions_list(this);
		}
	}


}



class DefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_definition;
    }

	simple_definition() {
	    return this.getTypedRuleContext(Simple_definitionContext,0);
	};

	function_definition() {
	    return this.getTypedRuleContext(Function_definitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitDefinition(this);
		}
	}


}



class Simple_definitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_simple_definition;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterSimple_definition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitSimple_definition(this);
		}
	}


}



class Function_definitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_function_definition;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	formals_list() {
	    return this.getTypedRuleContext(Formals_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterFunction_definition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitFunction_definition(this);
		}
	}


}



class Formals_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plucidParser.RULE_formals_list;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	formals_list() {
	    return this.getTypedRuleContext(Formals_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.enterFormals_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plucidListener ) {
	        listener.exitFormals_list(this);
		}
	}


}




plucidParser.ProgramContext = ProgramContext; 
plucidParser.ExpressionContext = ExpressionContext; 
plucidParser.ConstantContext = ConstantContext; 
plucidParser.Numeric_constantContext = Numeric_constantContext; 
plucidParser.Integer_constantContext = Integer_constantContext; 
plucidParser.Real_constantContext = Real_constantContext; 
plucidParser.Word_constantContext = Word_constantContext; 
plucidParser.Word_constant_less_the_quotesContext = Word_constant_less_the_quotesContext; 
plucidParser.List_constantContext = List_constantContext; 
plucidParser.List_constant_elementContext = List_constant_elementContext; 
plucidParser.IdentifierContext = IdentifierContext; 
plucidParser.Prefix_operatorContext = Prefix_operatorContext; 
plucidParser.Infix_operatorContext = Infix_operatorContext; 
plucidParser.List_expressionContext = List_expressionContext; 
plucidParser.Expressions_listContext = Expressions_listContext; 
plucidParser.Expression_itemContext = Expression_itemContext; 
plucidParser.If_expressionContext = If_expressionContext; 
plucidParser.EndifContext = EndifContext; 
plucidParser.Case_expressionContext = Case_expressionContext; 
plucidParser.Cond_expressionContext = Cond_expressionContext; 
plucidParser.CbodyContext = CbodyContext; 
plucidParser.DefaultcaseContext = DefaultcaseContext; 
plucidParser.Function_callContext = Function_callContext; 
plucidParser.Actuals_listContext = Actuals_listContext; 
plucidParser.Where_clauseContext = Where_clauseContext; 
plucidParser.BodyContext = BodyContext; 
plucidParser.Declarations_listContext = Declarations_listContext; 
plucidParser.Current_declarationContext = Current_declarationContext; 
plucidParser.Definitions_listContext = Definitions_listContext; 
plucidParser.DefinitionContext = DefinitionContext; 
plucidParser.Simple_definitionContext = Simple_definitionContext; 
plucidParser.Function_definitionContext = Function_definitionContext; 
plucidParser.Formals_listContext = Formals_listContext; 
