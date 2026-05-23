// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/promql/PromQLParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import PromQLParserListener from './PromQLParserListener.js';
const serializedATN = [4,1,45,314,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,79,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,114,8,1,10,1,12,1,117,9,1,1,2,1,2,
1,3,1,3,3,3,123,8,3,1,4,1,4,3,4,127,8,4,1,5,1,5,3,5,131,8,5,1,6,1,6,3,6,
135,8,6,1,6,3,6,138,8,6,1,7,1,7,3,7,142,8,7,1,8,1,8,3,8,146,8,8,1,9,1,9,
3,9,150,8,9,1,10,1,10,3,10,154,8,10,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,
12,1,12,1,12,3,12,166,8,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,3,14,175,8,
14,1,14,3,14,178,8,14,1,14,1,14,1,14,1,14,3,14,184,8,14,1,15,1,15,1,15,1,
15,1,16,1,16,1,17,1,17,1,17,5,17,195,8,17,10,17,12,17,198,9,17,1,17,3,17,
201,8,17,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,214,
8,19,1,20,1,20,1,20,1,20,1,20,5,20,221,8,20,10,20,12,20,224,9,20,3,20,226,
8,20,1,20,1,20,1,21,1,21,3,21,232,8,21,1,22,1,22,1,22,1,22,5,22,238,8,22,
10,22,12,22,241,9,22,3,22,243,8,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,3,
23,252,8,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,260,8,23,3,23,262,8,23,1,
24,1,24,1,24,1,25,1,25,1,25,1,26,1,26,3,26,272,8,26,1,26,1,26,3,26,276,8,
26,1,27,1,27,1,27,1,28,1,28,1,28,1,29,1,29,3,29,286,8,29,1,30,1,30,3,30,
290,8,30,1,31,1,31,1,31,3,31,295,8,31,1,32,1,32,1,32,1,32,5,32,301,8,32,
10,32,12,32,304,9,32,3,32,306,8,32,1,32,1,32,1,33,1,33,1,34,1,34,1,34,0,
1,2,35,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
48,50,52,54,56,58,60,62,64,66,68,0,8,1,0,3,4,1,0,5,7,1,0,13,18,2,0,9,9,11,
11,2,0,11,11,23,23,3,0,12,12,14,14,19,20,2,0,9,11,21,30,1,0,1,2,327,0,70,
1,0,0,0,2,78,1,0,0,0,4,118,1,0,0,0,6,120,1,0,0,0,8,124,1,0,0,0,10,128,1,
0,0,0,12,132,1,0,0,0,14,139,1,0,0,0,16,143,1,0,0,0,18,147,1,0,0,0,20,151,
1,0,0,0,22,155,1,0,0,0,24,165,1,0,0,0,26,167,1,0,0,0,28,183,1,0,0,0,30,185,
1,0,0,0,32,189,1,0,0,0,34,191,1,0,0,0,36,202,1,0,0,0,38,213,1,0,0,0,40,215,
1,0,0,0,42,231,1,0,0,0,44,233,1,0,0,0,46,261,1,0,0,0,48,263,1,0,0,0,50,266,
1,0,0,0,52,271,1,0,0,0,54,277,1,0,0,0,56,280,1,0,0,0,58,283,1,0,0,0,60,287,
1,0,0,0,62,294,1,0,0,0,64,296,1,0,0,0,66,309,1,0,0,0,68,311,1,0,0,0,70,71,
3,2,1,0,71,72,5,0,0,1,72,1,1,0,0,0,73,74,6,1,-1,0,74,75,3,4,2,0,75,76,3,
2,1,9,76,79,1,0,0,0,77,79,3,24,12,0,78,73,1,0,0,0,78,77,1,0,0,0,79,115,1,
0,0,0,80,81,10,11,0,0,81,82,3,6,3,0,82,83,3,2,1,11,83,114,1,0,0,0,84,85,
10,8,0,0,85,86,3,8,4,0,86,87,3,2,1,9,87,114,1,0,0,0,88,89,10,7,0,0,89,90,
3,10,5,0,90,91,3,2,1,8,91,114,1,0,0,0,92,93,10,6,0,0,93,94,3,12,6,0,94,95,
3,2,1,7,95,114,1,0,0,0,96,97,10,5,0,0,97,98,3,14,7,0,98,99,3,2,1,6,99,114,
1,0,0,0,100,101,10,4,0,0,101,102,3,16,8,0,102,103,3,2,1,5,103,114,1,0,0,
0,104,105,10,3,0,0,105,106,3,18,9,0,106,107,3,2,1,4,107,114,1,0,0,0,108,
109,10,2,0,0,109,110,5,38,0,0,110,114,3,2,1,3,111,112,10,10,0,0,112,114,
3,20,10,0,113,80,1,0,0,0,113,84,1,0,0,0,113,88,1,0,0,0,113,92,1,0,0,0,113,
96,1,0,0,0,113,100,1,0,0,0,113,104,1,0,0,0,113,108,1,0,0,0,113,111,1,0,0,
0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,3,1,0,0,0,117,115,
1,0,0,0,118,119,7,0,0,0,119,5,1,0,0,0,120,122,5,8,0,0,121,123,3,52,26,0,
122,121,1,0,0,0,122,123,1,0,0,0,123,7,1,0,0,0,124,126,7,1,0,0,125,127,3,
52,26,0,126,125,1,0,0,0,126,127,1,0,0,0,127,9,1,0,0,0,128,130,7,0,0,0,129,
131,3,52,26,0,130,129,1,0,0,0,130,131,1,0,0,0,131,11,1,0,0,0,132,134,7,2,
0,0,133,135,5,28,0,0,134,133,1,0,0,0,134,135,1,0,0,0,135,137,1,0,0,0,136,
138,3,52,26,0,137,136,1,0,0,0,137,138,1,0,0,0,138,13,1,0,0,0,139,141,7,3,
0,0,140,142,3,52,26,0,141,140,1,0,0,0,141,142,1,0,0,0,142,15,1,0,0,0,143,
145,5,10,0,0,144,146,3,52,26,0,145,144,1,0,0,0,145,146,1,0,0,0,146,17,1,
0,0,0,147,149,7,4,0,0,148,150,3,52,26,0,149,148,1,0,0,0,149,150,1,0,0,0,
150,19,1,0,0,0,151,153,5,39,0,0,152,154,3,22,11,0,153,152,1,0,0,0,153,154,
1,0,0,0,154,21,1,0,0,0,155,156,5,27,0,0,156,157,5,41,0,0,157,23,1,0,0,0,
158,166,3,40,20,0,159,166,3,46,23,0,160,166,3,28,14,0,161,166,3,36,18,0,
162,166,3,38,19,0,163,166,3,68,34,0,164,166,3,26,13,0,165,158,1,0,0,0,165,
159,1,0,0,0,165,160,1,0,0,0,165,161,1,0,0,0,165,162,1,0,0,0,165,163,1,0,
0,0,165,164,1,0,0,0,166,25,1,0,0,0,167,168,5,33,0,0,168,169,3,2,1,0,169,
170,5,34,0,0,170,27,1,0,0,0,171,177,5,42,0,0,172,174,5,31,0,0,173,175,3,
34,17,0,174,173,1,0,0,0,174,175,1,0,0,0,175,176,1,0,0,0,176,178,5,32,0,0,
177,172,1,0,0,0,177,178,1,0,0,0,178,184,1,0,0,0,179,180,5,31,0,0,180,181,
3,34,17,0,181,182,5,32,0,0,182,184,1,0,0,0,183,171,1,0,0,0,183,179,1,0,0,
0,184,29,1,0,0,0,185,186,3,62,31,0,186,187,3,32,16,0,187,188,5,2,0,0,188,
31,1,0,0,0,189,190,7,5,0,0,190,33,1,0,0,0,191,196,3,30,15,0,192,193,5,37,
0,0,193,195,3,30,15,0,194,192,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,0,196,
197,1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,199,201,5,37,0,0,200,199,1,0,
0,0,200,201,1,0,0,0,201,35,1,0,0,0,202,203,3,28,14,0,203,204,5,40,0,0,204,
37,1,0,0,0,205,206,3,28,14,0,206,207,5,27,0,0,207,208,5,41,0,0,208,214,1,
0,0,0,209,210,3,36,18,0,210,211,5,27,0,0,211,212,5,41,0,0,212,214,1,0,0,
0,213,205,1,0,0,0,213,209,1,0,0,0,214,39,1,0,0,0,215,216,5,30,0,0,216,225,
5,33,0,0,217,222,3,42,21,0,218,219,5,37,0,0,219,221,3,42,21,0,220,218,1,
0,0,0,221,224,1,0,0,0,222,220,1,0,0,0,222,223,1,0,0,0,223,226,1,0,0,0,224,
222,1,0,0,0,225,217,1,0,0,0,225,226,1,0,0,0,226,227,1,0,0,0,227,228,5,34,
0,0,228,41,1,0,0,0,229,232,3,68,34,0,230,232,3,2,1,0,231,229,1,0,0,0,231,
230,1,0,0,0,232,43,1,0,0,0,233,242,5,33,0,0,234,239,3,42,21,0,235,236,5,
37,0,0,236,238,3,42,21,0,237,235,1,0,0,0,238,241,1,0,0,0,239,237,1,0,0,0,
239,240,1,0,0,0,240,243,1,0,0,0,241,239,1,0,0,0,242,234,1,0,0,0,242,243,
1,0,0,0,243,244,1,0,0,0,244,245,5,34,0,0,245,45,1,0,0,0,246,247,5,29,0,0,
247,262,3,44,22,0,248,251,5,29,0,0,249,252,3,48,24,0,250,252,3,50,25,0,251,
249,1,0,0,0,251,250,1,0,0,0,252,253,1,0,0,0,253,254,3,44,22,0,254,262,1,
0,0,0,255,256,5,29,0,0,256,259,3,44,22,0,257,260,3,48,24,0,258,260,3,50,
25,0,259,257,1,0,0,0,259,258,1,0,0,0,260,262,1,0,0,0,261,246,1,0,0,0,261,
248,1,0,0,0,261,255,1,0,0,0,262,47,1,0,0,0,263,264,5,21,0,0,264,265,3,64,
32,0,265,49,1,0,0,0,266,267,5,22,0,0,267,268,3,64,32,0,268,51,1,0,0,0,269,
272,3,54,27,0,270,272,3,56,28,0,271,269,1,0,0,0,271,270,1,0,0,0,272,275,
1,0,0,0,273,276,3,58,29,0,274,276,3,60,30,0,275,273,1,0,0,0,275,274,1,0,
0,0,275,276,1,0,0,0,276,53,1,0,0,0,277,278,5,23,0,0,278,279,3,64,32,0,279,
55,1,0,0,0,280,281,5,24,0,0,281,282,3,64,32,0,282,57,1,0,0,0,283,285,5,25,
0,0,284,286,3,64,32,0,285,284,1,0,0,0,285,286,1,0,0,0,286,59,1,0,0,0,287,
289,5,26,0,0,288,290,3,64,32,0,289,288,1,0,0,0,289,290,1,0,0,0,290,61,1,
0,0,0,291,295,3,66,33,0,292,295,5,42,0,0,293,295,5,43,0,0,294,291,1,0,0,
0,294,292,1,0,0,0,294,293,1,0,0,0,295,63,1,0,0,0,296,305,5,33,0,0,297,302,
3,62,31,0,298,299,5,37,0,0,299,301,3,62,31,0,300,298,1,0,0,0,301,304,1,0,
0,0,302,300,1,0,0,0,302,303,1,0,0,0,303,306,1,0,0,0,304,302,1,0,0,0,305,
297,1,0,0,0,305,306,1,0,0,0,306,307,1,0,0,0,307,308,5,34,0,0,308,65,1,0,
0,0,309,310,7,6,0,0,310,67,1,0,0,0,311,312,7,7,0,0,312,69,1,0,0,0,34,78,
113,115,122,126,130,134,137,141,145,149,153,165,174,177,183,196,200,213,
222,225,231,239,242,251,259,261,271,275,285,289,294,302,305];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PromQLParser extends antlr4.Parser {

    static grammarFileName = "PromQLParser.g4";
    static literalNames = [ null, null, null, "'+'", "'-'", "'*'", "'/'", 
                            "'%'", "'^'", "'and'", "'or'", "'unless'", "'='", 
                            "'=='", "'!='", "'>'", "'<'", "'>='", "'<='", 
                            "'=~'", "'!~'", "'by'", "'without'", "'on'", 
                            "'ignoring'", "'group_left'", "'group_right'", 
                            "'offset'", "'bool'", null, null, "'{'", "'}'", 
                            "'('", "')'", "'['", "']'", "','", "'@'" ];
    static symbolicNames = [ null, "NUMBER", "STRING", "ADD", "SUB", "MULT", 
                             "DIV", "MOD", "POW", "AND", "OR", "UNLESS", 
                             "EQ", "DEQ", "NE", "GT", "LT", "GE", "LE", 
                             "RE", "NRE", "BY", "WITHOUT", "ON", "IGNORING", 
                             "GROUP_LEFT", "GROUP_RIGHT", "OFFSET", "BOOL", 
                             "AGGREGATION_OPERATOR", "FUNCTION", "LEFT_BRACE", 
                             "RIGHT_BRACE", "LEFT_PAREN", "RIGHT_PAREN", 
                             "LEFT_BRACKET", "RIGHT_BRACKET", "COMMA", "AT", 
                             "SUBQUERY_RANGE", "TIME_RANGE", "DURATION", 
                             "METRIC_NAME", "LABEL_NAME", "WS", "SL_COMMENT" ];
    static ruleNames = [ "expression", "vectorOperation", "unaryOp", "powOp", 
                         "multOp", "addOp", "compareOp", "andUnlessOp", 
                         "orOp", "vectorMatchOp", "subqueryOp", "offsetOp", 
                         "vector", "parens", "instantSelector", "labelMatcher", 
                         "labelMatcherOperator", "labelMatcherList", "matrixSelector", 
                         "offset", "function_", "parameter", "parameterList", 
                         "aggregation", "by", "without", "grouping", "on_", 
                         "ignoring", "groupLeft", "groupRight", "labelName", 
                         "labelNameList", "keyword", "literal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PromQLParser.ruleNames;
        this.literalNames = PromQLParser.literalNames;
        this.symbolicNames = PromQLParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.vectorOperation_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    vectorOperation_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 11);
    		case 1:
    			return this.precpred(this._ctx, 8);
    		case 2:
    			return this.precpred(this._ctx, 7);
    		case 3:
    			return this.precpred(this._ctx, 6);
    		case 4:
    			return this.precpred(this._ctx, 5);
    		case 5:
    			return this.precpred(this._ctx, 4);
    		case 6:
    			return this.precpred(this._ctx, 3);
    		case 7:
    			return this.precpred(this._ctx, 2);
    		case 8:
    			return this.precpred(this._ctx, 10);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PromQLParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.vectorOperation(0);
	        this.state = 71;
	        this.match(PromQLParser.EOF);
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


	vectorOperation(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new VectorOperationContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, PromQLParser.RULE_vectorOperation, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 4:
	            this.state = 74;
	            this.unaryOp();
	            this.state = 75;
	            this.vectorOperation(9);
	            break;
	        case 1:
	        case 2:
	        case 29:
	        case 30:
	        case 31:
	        case 33:
	        case 42:
	            this.state = 77;
	            this.vector();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 115;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 113;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PromQLParser.RULE_vectorOperation);
	                    this.state = 80;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 81;
	                    this.powOp();
	                    this.state = 82;
	                    this.vectorOperation(11);
	                    break;

	                case 2:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PromQLParser.RULE_vectorOperation);
	                    this.state = 84;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 85;
	                    this.multOp();
	                    this.state = 86;
	                    this.vectorOperation(9);
	                    break;

	                case 3:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PromQLParser.RULE_vectorOperation);
	                    this.state = 88;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 89;
	                    this.addOp();
	                    this.state = 90;
	                    this.vectorOperation(8);
	                    break;

	                case 4:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PromQLParser.RULE_vectorOperation);
	                    this.state = 92;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 93;
	                    this.compareOp();
	                    this.state = 94;
	                    this.vectorOperation(7);
	                    break;

	                case 5:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PromQLParser.RULE_vectorOperation);
	                    this.state = 96;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 97;
	                    this.andUnlessOp();
	                    this.state = 98;
	                    this.vectorOperation(6);
	                    break;

	                case 6:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PromQLParser.RULE_vectorOperation);
	                    this.state = 100;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 101;
	                    this.orOp();
	                    this.state = 102;
	                    this.vectorOperation(5);
	                    break;

	                case 7:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PromQLParser.RULE_vectorOperation);
	                    this.state = 104;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 105;
	                    this.vectorMatchOp();
	                    this.state = 106;
	                    this.vectorOperation(4);
	                    break;

	                case 8:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PromQLParser.RULE_vectorOperation);
	                    this.state = 108;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 109;
	                    this.match(PromQLParser.AT);
	                    this.state = 110;
	                    this.vectorOperation(3);
	                    break;

	                case 9:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PromQLParser.RULE_vectorOperation);
	                    this.state = 111;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 112;
	                    this.subqueryOp();
	                    break;

	                } 
	            }
	            this.state = 117;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
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



	unaryOp() {
	    let localctx = new UnaryOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PromQLParser.RULE_unaryOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
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



	powOp() {
	    let localctx = new PowOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PromQLParser.RULE_powOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(PromQLParser.POW);
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23 || _la===24) {
	            this.state = 121;
	            this.grouping();
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



	multOp() {
	    let localctx = new MultOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PromQLParser.RULE_multOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 224) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23 || _la===24) {
	            this.state = 125;
	            this.grouping();
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



	addOp() {
	    let localctx = new AddOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PromQLParser.RULE_addOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23 || _la===24) {
	            this.state = 129;
	            this.grouping();
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



	compareOp() {
	    let localctx = new CompareOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PromQLParser.RULE_compareOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 516096) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 133;
	            this.match(PromQLParser.BOOL);
	        }

	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23 || _la===24) {
	            this.state = 136;
	            this.grouping();
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



	andUnlessOp() {
	    let localctx = new AndUnlessOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PromQLParser.RULE_andUnlessOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===11)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23 || _la===24) {
	            this.state = 140;
	            this.grouping();
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



	orOp() {
	    let localctx = new OrOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PromQLParser.RULE_orOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.match(PromQLParser.OR);
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23 || _la===24) {
	            this.state = 144;
	            this.grouping();
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



	vectorMatchOp() {
	    let localctx = new VectorMatchOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, PromQLParser.RULE_vectorMatchOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===23)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 149;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23 || _la===24) {
	            this.state = 148;
	            this.grouping();
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



	subqueryOp() {
	    let localctx = new SubqueryOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, PromQLParser.RULE_subqueryOp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(PromQLParser.SUBQUERY_RANGE);
	        this.state = 153;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 152;
	            this.offsetOp();

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



	offsetOp() {
	    let localctx = new OffsetOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, PromQLParser.RULE_offsetOp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(PromQLParser.OFFSET);
	        this.state = 156;
	        this.match(PromQLParser.DURATION);
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



	vector() {
	    let localctx = new VectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, PromQLParser.RULE_vector);
	    try {
	        this.state = 165;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 158;
	            this.function_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 159;
	            this.aggregation();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 160;
	            this.instantSelector();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 161;
	            this.matrixSelector();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 162;
	            this.offset();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 163;
	            this.literal();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 164;
	            this.parens();
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



	parens() {
	    let localctx = new ParensContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, PromQLParser.RULE_parens);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(PromQLParser.LEFT_PAREN);
	        this.state = 168;
	        this.vectorOperation(0);
	        this.state = 169;
	        this.match(PromQLParser.RIGHT_PAREN);
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



	instantSelector() {
	    let localctx = new InstantSelectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, PromQLParser.RULE_instantSelector);
	    var _la = 0;
	    try {
	        this.state = 183;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 171;
	            this.match(PromQLParser.METRIC_NAME);
	            this.state = 177;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	            if(la_===1) {
	                this.state = 172;
	                this.match(PromQLParser.LEFT_BRACE);
	                this.state = 174;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2145390080) !== 0) || _la===42 || _la===43) {
	                    this.state = 173;
	                    this.labelMatcherList();
	                }

	                this.state = 176;
	                this.match(PromQLParser.RIGHT_BRACE);

	            }
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 179;
	            this.match(PromQLParser.LEFT_BRACE);
	            this.state = 180;
	            this.labelMatcherList();
	            this.state = 181;
	            this.match(PromQLParser.RIGHT_BRACE);
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



	labelMatcher() {
	    let localctx = new LabelMatcherContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, PromQLParser.RULE_labelMatcher);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this.labelName();
	        this.state = 186;
	        this.labelMatcherOperator();
	        this.state = 187;
	        this.match(PromQLParser.STRING);
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



	labelMatcherOperator() {
	    let localctx = new LabelMatcherOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, PromQLParser.RULE_labelMatcherOperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1593344) !== 0))) {
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



	labelMatcherList() {
	    let localctx = new LabelMatcherListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, PromQLParser.RULE_labelMatcherList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.labelMatcher();
	        this.state = 196;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 192;
	                this.match(PromQLParser.COMMA);
	                this.state = 193;
	                this.labelMatcher(); 
	            }
	            this.state = 198;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	        this.state = 200;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 199;
	            this.match(PromQLParser.COMMA);
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



	matrixSelector() {
	    let localctx = new MatrixSelectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, PromQLParser.RULE_matrixSelector);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.instantSelector();
	        this.state = 203;
	        this.match(PromQLParser.TIME_RANGE);
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



	offset() {
	    let localctx = new OffsetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, PromQLParser.RULE_offset);
	    try {
	        this.state = 213;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 205;
	            this.instantSelector();
	            this.state = 206;
	            this.match(PromQLParser.OFFSET);
	            this.state = 207;
	            this.match(PromQLParser.DURATION);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 209;
	            this.matrixSelector();
	            this.state = 210;
	            this.match(PromQLParser.OFFSET);
	            this.state = 211;
	            this.match(PromQLParser.DURATION);
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



	function_() {
	    let localctx = new Function_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, PromQLParser.RULE_function_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(PromQLParser.FUNCTION);
	        this.state = 216;
	        this.match(PromQLParser.LEFT_PAREN);
	        this.state = 225;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758096414) !== 0) || _la===33 || _la===42) {
	            this.state = 217;
	            this.parameter();
	            this.state = 222;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===37) {
	                this.state = 218;
	                this.match(PromQLParser.COMMA);
	                this.state = 219;
	                this.parameter();
	                this.state = 224;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 227;
	        this.match(PromQLParser.RIGHT_PAREN);
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



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, PromQLParser.RULE_parameter);
	    try {
	        this.state = 231;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 229;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 230;
	            this.vectorOperation(0);
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



	parameterList() {
	    let localctx = new ParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, PromQLParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this.match(PromQLParser.LEFT_PAREN);
	        this.state = 242;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758096414) !== 0) || _la===33 || _la===42) {
	            this.state = 234;
	            this.parameter();
	            this.state = 239;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===37) {
	                this.state = 235;
	                this.match(PromQLParser.COMMA);
	                this.state = 236;
	                this.parameter();
	                this.state = 241;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 244;
	        this.match(PromQLParser.RIGHT_PAREN);
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



	aggregation() {
	    let localctx = new AggregationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, PromQLParser.RULE_aggregation);
	    try {
	        this.state = 261;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 246;
	            this.match(PromQLParser.AGGREGATION_OPERATOR);
	            this.state = 247;
	            this.parameterList();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 248;
	            this.match(PromQLParser.AGGREGATION_OPERATOR);
	            this.state = 251;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 21:
	                this.state = 249;
	                this.by();
	                break;
	            case 22:
	                this.state = 250;
	                this.without();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 253;
	            this.parameterList();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 255;
	            this.match(PromQLParser.AGGREGATION_OPERATOR);
	            this.state = 256;
	            this.parameterList();
	            this.state = 259;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 21:
	                this.state = 257;
	                this.by();
	                break;
	            case 22:
	                this.state = 258;
	                this.without();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
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



	by() {
	    let localctx = new ByContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, PromQLParser.RULE_by);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(PromQLParser.BY);
	        this.state = 264;
	        this.labelNameList();
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



	without() {
	    let localctx = new WithoutContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, PromQLParser.RULE_without);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 266;
	        this.match(PromQLParser.WITHOUT);
	        this.state = 267;
	        this.labelNameList();
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



	grouping() {
	    let localctx = new GroupingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, PromQLParser.RULE_grouping);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 23:
	            this.state = 269;
	            this.on_();
	            break;
	        case 24:
	            this.state = 270;
	            this.ignoring();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 275;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 25:
	        	this.state = 273;
	        	this.groupLeft();
	        	break;
	        case 26:
	        	this.state = 274;
	        	this.groupRight();
	        	break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 29:
	        case 30:
	        case 31:
	        case 33:
	        case 42:
	        	break;
	        default:
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



	on_() {
	    let localctx = new On_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, PromQLParser.RULE_on_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.match(PromQLParser.ON);
	        this.state = 278;
	        this.labelNameList();
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



	ignoring() {
	    let localctx = new IgnoringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, PromQLParser.RULE_ignoring);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.match(PromQLParser.IGNORING);
	        this.state = 281;
	        this.labelNameList();
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



	groupLeft() {
	    let localctx = new GroupLeftContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, PromQLParser.RULE_groupLeft);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.match(PromQLParser.GROUP_LEFT);
	        this.state = 285;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        if(la_===1) {
	            this.state = 284;
	            this.labelNameList();

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



	groupRight() {
	    let localctx = new GroupRightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, PromQLParser.RULE_groupRight);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 287;
	        this.match(PromQLParser.GROUP_RIGHT);
	        this.state = 289;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        if(la_===1) {
	            this.state = 288;
	            this.labelNameList();

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



	labelName() {
	    let localctx = new LabelNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, PromQLParser.RULE_labelName);
	    try {
	        this.state = 294;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	        case 10:
	        case 11:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 291;
	            this.keyword();
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 292;
	            this.match(PromQLParser.METRIC_NAME);
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 293;
	            this.match(PromQLParser.LABEL_NAME);
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



	labelNameList() {
	    let localctx = new LabelNameListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, PromQLParser.RULE_labelNameList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this.match(PromQLParser.LEFT_PAREN);
	        this.state = 305;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2145390080) !== 0) || _la===42 || _la===43) {
	            this.state = 297;
	            this.labelName();
	            this.state = 302;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===37) {
	                this.state = 298;
	                this.match(PromQLParser.COMMA);
	                this.state = 299;
	                this.labelName();
	                this.state = 304;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 307;
	        this.match(PromQLParser.RIGHT_PAREN);
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



	keyword() {
	    let localctx = new KeywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, PromQLParser.RULE_keyword);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2145390080) !== 0))) {
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, PromQLParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 311;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
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


}

PromQLParser.EOF = antlr4.Token.EOF;
PromQLParser.NUMBER = 1;
PromQLParser.STRING = 2;
PromQLParser.ADD = 3;
PromQLParser.SUB = 4;
PromQLParser.MULT = 5;
PromQLParser.DIV = 6;
PromQLParser.MOD = 7;
PromQLParser.POW = 8;
PromQLParser.AND = 9;
PromQLParser.OR = 10;
PromQLParser.UNLESS = 11;
PromQLParser.EQ = 12;
PromQLParser.DEQ = 13;
PromQLParser.NE = 14;
PromQLParser.GT = 15;
PromQLParser.LT = 16;
PromQLParser.GE = 17;
PromQLParser.LE = 18;
PromQLParser.RE = 19;
PromQLParser.NRE = 20;
PromQLParser.BY = 21;
PromQLParser.WITHOUT = 22;
PromQLParser.ON = 23;
PromQLParser.IGNORING = 24;
PromQLParser.GROUP_LEFT = 25;
PromQLParser.GROUP_RIGHT = 26;
PromQLParser.OFFSET = 27;
PromQLParser.BOOL = 28;
PromQLParser.AGGREGATION_OPERATOR = 29;
PromQLParser.FUNCTION = 30;
PromQLParser.LEFT_BRACE = 31;
PromQLParser.RIGHT_BRACE = 32;
PromQLParser.LEFT_PAREN = 33;
PromQLParser.RIGHT_PAREN = 34;
PromQLParser.LEFT_BRACKET = 35;
PromQLParser.RIGHT_BRACKET = 36;
PromQLParser.COMMA = 37;
PromQLParser.AT = 38;
PromQLParser.SUBQUERY_RANGE = 39;
PromQLParser.TIME_RANGE = 40;
PromQLParser.DURATION = 41;
PromQLParser.METRIC_NAME = 42;
PromQLParser.LABEL_NAME = 43;
PromQLParser.WS = 44;
PromQLParser.SL_COMMENT = 45;

PromQLParser.RULE_expression = 0;
PromQLParser.RULE_vectorOperation = 1;
PromQLParser.RULE_unaryOp = 2;
PromQLParser.RULE_powOp = 3;
PromQLParser.RULE_multOp = 4;
PromQLParser.RULE_addOp = 5;
PromQLParser.RULE_compareOp = 6;
PromQLParser.RULE_andUnlessOp = 7;
PromQLParser.RULE_orOp = 8;
PromQLParser.RULE_vectorMatchOp = 9;
PromQLParser.RULE_subqueryOp = 10;
PromQLParser.RULE_offsetOp = 11;
PromQLParser.RULE_vector = 12;
PromQLParser.RULE_parens = 13;
PromQLParser.RULE_instantSelector = 14;
PromQLParser.RULE_labelMatcher = 15;
PromQLParser.RULE_labelMatcherOperator = 16;
PromQLParser.RULE_labelMatcherList = 17;
PromQLParser.RULE_matrixSelector = 18;
PromQLParser.RULE_offset = 19;
PromQLParser.RULE_function_ = 20;
PromQLParser.RULE_parameter = 21;
PromQLParser.RULE_parameterList = 22;
PromQLParser.RULE_aggregation = 23;
PromQLParser.RULE_by = 24;
PromQLParser.RULE_without = 25;
PromQLParser.RULE_grouping = 26;
PromQLParser.RULE_on_ = 27;
PromQLParser.RULE_ignoring = 28;
PromQLParser.RULE_groupLeft = 29;
PromQLParser.RULE_groupRight = 30;
PromQLParser.RULE_labelName = 31;
PromQLParser.RULE_labelNameList = 32;
PromQLParser.RULE_keyword = 33;
PromQLParser.RULE_literal = 34;

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
        this.ruleIndex = PromQLParser.RULE_expression;
    }

	vectorOperation() {
	    return this.getTypedRuleContext(VectorOperationContext,0);
	};

	EOF() {
	    return this.getToken(PromQLParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitExpression(this);
		}
	}


}



class VectorOperationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_vectorOperation;
    }

	unaryOp() {
	    return this.getTypedRuleContext(UnaryOpContext,0);
	};

	vectorOperation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VectorOperationContext);
	    } else {
	        return this.getTypedRuleContext(VectorOperationContext,i);
	    }
	};

	vector() {
	    return this.getTypedRuleContext(VectorContext,0);
	};

	powOp() {
	    return this.getTypedRuleContext(PowOpContext,0);
	};

	multOp() {
	    return this.getTypedRuleContext(MultOpContext,0);
	};

	addOp() {
	    return this.getTypedRuleContext(AddOpContext,0);
	};

	compareOp() {
	    return this.getTypedRuleContext(CompareOpContext,0);
	};

	andUnlessOp() {
	    return this.getTypedRuleContext(AndUnlessOpContext,0);
	};

	orOp() {
	    return this.getTypedRuleContext(OrOpContext,0);
	};

	vectorMatchOp() {
	    return this.getTypedRuleContext(VectorMatchOpContext,0);
	};

	AT() {
	    return this.getToken(PromQLParser.AT, 0);
	};

	subqueryOp() {
	    return this.getTypedRuleContext(SubqueryOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterVectorOperation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitVectorOperation(this);
		}
	}


}



class UnaryOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_unaryOp;
    }

	ADD() {
	    return this.getToken(PromQLParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(PromQLParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterUnaryOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitUnaryOp(this);
		}
	}


}



class PowOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_powOp;
    }

	POW() {
	    return this.getToken(PromQLParser.POW, 0);
	};

	grouping() {
	    return this.getTypedRuleContext(GroupingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterPowOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitPowOp(this);
		}
	}


}



class MultOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_multOp;
    }

	MULT() {
	    return this.getToken(PromQLParser.MULT, 0);
	};

	DIV() {
	    return this.getToken(PromQLParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(PromQLParser.MOD, 0);
	};

	grouping() {
	    return this.getTypedRuleContext(GroupingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterMultOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitMultOp(this);
		}
	}


}



class AddOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_addOp;
    }

	ADD() {
	    return this.getToken(PromQLParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(PromQLParser.SUB, 0);
	};

	grouping() {
	    return this.getTypedRuleContext(GroupingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterAddOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitAddOp(this);
		}
	}


}



class CompareOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_compareOp;
    }

	DEQ() {
	    return this.getToken(PromQLParser.DEQ, 0);
	};

	NE() {
	    return this.getToken(PromQLParser.NE, 0);
	};

	GT() {
	    return this.getToken(PromQLParser.GT, 0);
	};

	LT() {
	    return this.getToken(PromQLParser.LT, 0);
	};

	GE() {
	    return this.getToken(PromQLParser.GE, 0);
	};

	LE() {
	    return this.getToken(PromQLParser.LE, 0);
	};

	BOOL() {
	    return this.getToken(PromQLParser.BOOL, 0);
	};

	grouping() {
	    return this.getTypedRuleContext(GroupingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterCompareOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitCompareOp(this);
		}
	}


}



class AndUnlessOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_andUnlessOp;
    }

	AND() {
	    return this.getToken(PromQLParser.AND, 0);
	};

	UNLESS() {
	    return this.getToken(PromQLParser.UNLESS, 0);
	};

	grouping() {
	    return this.getTypedRuleContext(GroupingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterAndUnlessOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitAndUnlessOp(this);
		}
	}


}



class OrOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_orOp;
    }

	OR() {
	    return this.getToken(PromQLParser.OR, 0);
	};

	grouping() {
	    return this.getTypedRuleContext(GroupingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterOrOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitOrOp(this);
		}
	}


}



class VectorMatchOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_vectorMatchOp;
    }

	ON() {
	    return this.getToken(PromQLParser.ON, 0);
	};

	UNLESS() {
	    return this.getToken(PromQLParser.UNLESS, 0);
	};

	grouping() {
	    return this.getTypedRuleContext(GroupingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterVectorMatchOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitVectorMatchOp(this);
		}
	}


}



class SubqueryOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_subqueryOp;
    }

	SUBQUERY_RANGE() {
	    return this.getToken(PromQLParser.SUBQUERY_RANGE, 0);
	};

	offsetOp() {
	    return this.getTypedRuleContext(OffsetOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterSubqueryOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitSubqueryOp(this);
		}
	}


}



class OffsetOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_offsetOp;
    }

	OFFSET() {
	    return this.getToken(PromQLParser.OFFSET, 0);
	};

	DURATION() {
	    return this.getToken(PromQLParser.DURATION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterOffsetOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitOffsetOp(this);
		}
	}


}



class VectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_vector;
    }

	function_() {
	    return this.getTypedRuleContext(Function_Context,0);
	};

	aggregation() {
	    return this.getTypedRuleContext(AggregationContext,0);
	};

	instantSelector() {
	    return this.getTypedRuleContext(InstantSelectorContext,0);
	};

	matrixSelector() {
	    return this.getTypedRuleContext(MatrixSelectorContext,0);
	};

	offset() {
	    return this.getTypedRuleContext(OffsetContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	parens() {
	    return this.getTypedRuleContext(ParensContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterVector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitVector(this);
		}
	}


}



class ParensContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_parens;
    }

	LEFT_PAREN() {
	    return this.getToken(PromQLParser.LEFT_PAREN, 0);
	};

	vectorOperation() {
	    return this.getTypedRuleContext(VectorOperationContext,0);
	};

	RIGHT_PAREN() {
	    return this.getToken(PromQLParser.RIGHT_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterParens(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitParens(this);
		}
	}


}



class InstantSelectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_instantSelector;
    }

	METRIC_NAME() {
	    return this.getToken(PromQLParser.METRIC_NAME, 0);
	};

	LEFT_BRACE() {
	    return this.getToken(PromQLParser.LEFT_BRACE, 0);
	};

	RIGHT_BRACE() {
	    return this.getToken(PromQLParser.RIGHT_BRACE, 0);
	};

	labelMatcherList() {
	    return this.getTypedRuleContext(LabelMatcherListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterInstantSelector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitInstantSelector(this);
		}
	}


}



class LabelMatcherContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_labelMatcher;
    }

	labelName() {
	    return this.getTypedRuleContext(LabelNameContext,0);
	};

	labelMatcherOperator() {
	    return this.getTypedRuleContext(LabelMatcherOperatorContext,0);
	};

	STRING() {
	    return this.getToken(PromQLParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterLabelMatcher(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitLabelMatcher(this);
		}
	}


}



class LabelMatcherOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_labelMatcherOperator;
    }

	EQ() {
	    return this.getToken(PromQLParser.EQ, 0);
	};

	NE() {
	    return this.getToken(PromQLParser.NE, 0);
	};

	RE() {
	    return this.getToken(PromQLParser.RE, 0);
	};

	NRE() {
	    return this.getToken(PromQLParser.NRE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterLabelMatcherOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitLabelMatcherOperator(this);
		}
	}


}



class LabelMatcherListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_labelMatcherList;
    }

	labelMatcher = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LabelMatcherContext);
	    } else {
	        return this.getTypedRuleContext(LabelMatcherContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PromQLParser.COMMA);
	    } else {
	        return this.getToken(PromQLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterLabelMatcherList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitLabelMatcherList(this);
		}
	}


}



class MatrixSelectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_matrixSelector;
    }

	instantSelector() {
	    return this.getTypedRuleContext(InstantSelectorContext,0);
	};

	TIME_RANGE() {
	    return this.getToken(PromQLParser.TIME_RANGE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterMatrixSelector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitMatrixSelector(this);
		}
	}


}



class OffsetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_offset;
    }

	instantSelector() {
	    return this.getTypedRuleContext(InstantSelectorContext,0);
	};

	OFFSET() {
	    return this.getToken(PromQLParser.OFFSET, 0);
	};

	DURATION() {
	    return this.getToken(PromQLParser.DURATION, 0);
	};

	matrixSelector() {
	    return this.getTypedRuleContext(MatrixSelectorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterOffset(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitOffset(this);
		}
	}


}



class Function_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_function_;
    }

	FUNCTION() {
	    return this.getToken(PromQLParser.FUNCTION, 0);
	};

	LEFT_PAREN() {
	    return this.getToken(PromQLParser.LEFT_PAREN, 0);
	};

	RIGHT_PAREN() {
	    return this.getToken(PromQLParser.RIGHT_PAREN, 0);
	};

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PromQLParser.COMMA);
	    } else {
	        return this.getToken(PromQLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterFunction_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitFunction_(this);
		}
	}


}



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_parameter;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	vectorOperation() {
	    return this.getTypedRuleContext(VectorOperationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitParameter(this);
		}
	}


}



class ParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_parameterList;
    }

	LEFT_PAREN() {
	    return this.getToken(PromQLParser.LEFT_PAREN, 0);
	};

	RIGHT_PAREN() {
	    return this.getToken(PromQLParser.RIGHT_PAREN, 0);
	};

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PromQLParser.COMMA);
	    } else {
	        return this.getToken(PromQLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterParameterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitParameterList(this);
		}
	}


}



class AggregationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_aggregation;
    }

	AGGREGATION_OPERATOR() {
	    return this.getToken(PromQLParser.AGGREGATION_OPERATOR, 0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	by() {
	    return this.getTypedRuleContext(ByContext,0);
	};

	without() {
	    return this.getTypedRuleContext(WithoutContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterAggregation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitAggregation(this);
		}
	}


}



class ByContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_by;
    }

	BY() {
	    return this.getToken(PromQLParser.BY, 0);
	};

	labelNameList() {
	    return this.getTypedRuleContext(LabelNameListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterBy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitBy(this);
		}
	}


}



class WithoutContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_without;
    }

	WITHOUT() {
	    return this.getToken(PromQLParser.WITHOUT, 0);
	};

	labelNameList() {
	    return this.getTypedRuleContext(LabelNameListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterWithout(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitWithout(this);
		}
	}


}



class GroupingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_grouping;
    }

	on_() {
	    return this.getTypedRuleContext(On_Context,0);
	};

	ignoring() {
	    return this.getTypedRuleContext(IgnoringContext,0);
	};

	groupLeft() {
	    return this.getTypedRuleContext(GroupLeftContext,0);
	};

	groupRight() {
	    return this.getTypedRuleContext(GroupRightContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterGrouping(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitGrouping(this);
		}
	}


}



class On_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_on_;
    }

	ON() {
	    return this.getToken(PromQLParser.ON, 0);
	};

	labelNameList() {
	    return this.getTypedRuleContext(LabelNameListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterOn_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitOn_(this);
		}
	}


}



class IgnoringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_ignoring;
    }

	IGNORING() {
	    return this.getToken(PromQLParser.IGNORING, 0);
	};

	labelNameList() {
	    return this.getTypedRuleContext(LabelNameListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterIgnoring(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitIgnoring(this);
		}
	}


}



class GroupLeftContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_groupLeft;
    }

	GROUP_LEFT() {
	    return this.getToken(PromQLParser.GROUP_LEFT, 0);
	};

	labelNameList() {
	    return this.getTypedRuleContext(LabelNameListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterGroupLeft(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitGroupLeft(this);
		}
	}


}



class GroupRightContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_groupRight;
    }

	GROUP_RIGHT() {
	    return this.getToken(PromQLParser.GROUP_RIGHT, 0);
	};

	labelNameList() {
	    return this.getTypedRuleContext(LabelNameListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterGroupRight(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitGroupRight(this);
		}
	}


}



class LabelNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_labelName;
    }

	keyword() {
	    return this.getTypedRuleContext(KeywordContext,0);
	};

	METRIC_NAME() {
	    return this.getToken(PromQLParser.METRIC_NAME, 0);
	};

	LABEL_NAME() {
	    return this.getToken(PromQLParser.LABEL_NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterLabelName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitLabelName(this);
		}
	}


}



class LabelNameListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_labelNameList;
    }

	LEFT_PAREN() {
	    return this.getToken(PromQLParser.LEFT_PAREN, 0);
	};

	RIGHT_PAREN() {
	    return this.getToken(PromQLParser.RIGHT_PAREN, 0);
	};

	labelName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LabelNameContext);
	    } else {
	        return this.getTypedRuleContext(LabelNameContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PromQLParser.COMMA);
	    } else {
	        return this.getToken(PromQLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterLabelNameList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitLabelNameList(this);
		}
	}


}



class KeywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_keyword;
    }

	AND() {
	    return this.getToken(PromQLParser.AND, 0);
	};

	OR() {
	    return this.getToken(PromQLParser.OR, 0);
	};

	UNLESS() {
	    return this.getToken(PromQLParser.UNLESS, 0);
	};

	BY() {
	    return this.getToken(PromQLParser.BY, 0);
	};

	WITHOUT() {
	    return this.getToken(PromQLParser.WITHOUT, 0);
	};

	ON() {
	    return this.getToken(PromQLParser.ON, 0);
	};

	IGNORING() {
	    return this.getToken(PromQLParser.IGNORING, 0);
	};

	GROUP_LEFT() {
	    return this.getToken(PromQLParser.GROUP_LEFT, 0);
	};

	GROUP_RIGHT() {
	    return this.getToken(PromQLParser.GROUP_RIGHT, 0);
	};

	OFFSET() {
	    return this.getToken(PromQLParser.OFFSET, 0);
	};

	BOOL() {
	    return this.getToken(PromQLParser.BOOL, 0);
	};

	AGGREGATION_OPERATOR() {
	    return this.getToken(PromQLParser.AGGREGATION_OPERATOR, 0);
	};

	FUNCTION() {
	    return this.getToken(PromQLParser.FUNCTION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterKeyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitKeyword(this);
		}
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PromQLParser.RULE_literal;
    }

	NUMBER() {
	    return this.getToken(PromQLParser.NUMBER, 0);
	};

	STRING() {
	    return this.getToken(PromQLParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PromQLParserListener ) {
	        listener.exitLiteral(this);
		}
	}


}




PromQLParser.ExpressionContext = ExpressionContext; 
PromQLParser.VectorOperationContext = VectorOperationContext; 
PromQLParser.UnaryOpContext = UnaryOpContext; 
PromQLParser.PowOpContext = PowOpContext; 
PromQLParser.MultOpContext = MultOpContext; 
PromQLParser.AddOpContext = AddOpContext; 
PromQLParser.CompareOpContext = CompareOpContext; 
PromQLParser.AndUnlessOpContext = AndUnlessOpContext; 
PromQLParser.OrOpContext = OrOpContext; 
PromQLParser.VectorMatchOpContext = VectorMatchOpContext; 
PromQLParser.SubqueryOpContext = SubqueryOpContext; 
PromQLParser.OffsetOpContext = OffsetOpContext; 
PromQLParser.VectorContext = VectorContext; 
PromQLParser.ParensContext = ParensContext; 
PromQLParser.InstantSelectorContext = InstantSelectorContext; 
PromQLParser.LabelMatcherContext = LabelMatcherContext; 
PromQLParser.LabelMatcherOperatorContext = LabelMatcherOperatorContext; 
PromQLParser.LabelMatcherListContext = LabelMatcherListContext; 
PromQLParser.MatrixSelectorContext = MatrixSelectorContext; 
PromQLParser.OffsetContext = OffsetContext; 
PromQLParser.Function_Context = Function_Context; 
PromQLParser.ParameterContext = ParameterContext; 
PromQLParser.ParameterListContext = ParameterListContext; 
PromQLParser.AggregationContext = AggregationContext; 
PromQLParser.ByContext = ByContext; 
PromQLParser.WithoutContext = WithoutContext; 
PromQLParser.GroupingContext = GroupingContext; 
PromQLParser.On_Context = On_Context; 
PromQLParser.IgnoringContext = IgnoringContext; 
PromQLParser.GroupLeftContext = GroupLeftContext; 
PromQLParser.GroupRightContext = GroupRightContext; 
PromQLParser.LabelNameContext = LabelNameContext; 
PromQLParser.LabelNameListContext = LabelNameListContext; 
PromQLParser.KeywordContext = KeywordContext; 
PromQLParser.LiteralContext = LiteralContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
