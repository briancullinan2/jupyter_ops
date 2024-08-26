// Generated from Resources/Parsers/promql/PromQLParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import PromQLParserListener from './PromQLParserListener.js';
const serializedATN = [4,1,43,294,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,1,0,1,0,
1,0,1,1,1,1,1,1,1,1,1,1,3,1,77,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,105,
8,1,10,1,12,1,108,9,1,1,2,1,2,1,3,1,3,3,3,114,8,3,1,4,1,4,3,4,118,8,4,1,
5,1,5,3,5,122,8,5,1,6,1,6,3,6,126,8,6,1,6,3,6,129,8,6,1,7,1,7,3,7,133,8,
7,1,8,1,8,3,8,137,8,8,1,9,1,9,3,9,141,8,9,1,10,1,10,1,10,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,3,11,153,8,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,3,13,
162,8,13,1,13,3,13,165,8,13,1,13,1,13,1,13,1,13,3,13,171,8,13,1,14,1,14,
1,14,1,14,1,15,1,15,1,16,1,16,1,16,5,16,182,8,16,10,16,12,16,185,9,16,1,
17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,198,8,18,1,19,
1,19,1,19,1,19,1,19,5,19,205,8,19,10,19,12,19,208,9,19,1,19,1,19,1,20,1,
20,3,20,214,8,20,1,21,1,21,1,21,1,21,5,21,220,8,21,10,21,12,21,223,9,21,
3,21,225,8,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,3,22,234,8,22,1,22,1,22,
1,22,1,22,1,22,1,22,3,22,242,8,22,3,22,244,8,22,1,23,1,23,1,23,1,24,1,24,
1,24,1,25,1,25,3,25,254,8,25,1,25,1,25,3,25,258,8,25,1,26,1,26,1,26,1,27,
1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,29,1,30,1,30,1,30,3,30,275,8,30,1,31,
1,31,1,31,1,31,5,31,281,8,31,10,31,12,31,284,9,31,3,31,286,8,31,1,31,1,31,
1,32,1,32,1,33,1,33,1,33,0,1,2,34,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,0,7,1,0,3,4,1,0,
5,7,1,0,13,18,2,0,9,9,11,11,3,0,12,12,14,14,19,20,2,0,9,11,21,30,1,0,1,2,
301,0,68,1,0,0,0,2,76,1,0,0,0,4,109,1,0,0,0,6,111,1,0,0,0,8,115,1,0,0,0,
10,119,1,0,0,0,12,123,1,0,0,0,14,130,1,0,0,0,16,134,1,0,0,0,18,138,1,0,0,
0,20,142,1,0,0,0,22,152,1,0,0,0,24,154,1,0,0,0,26,170,1,0,0,0,28,172,1,0,
0,0,30,176,1,0,0,0,32,178,1,0,0,0,34,186,1,0,0,0,36,197,1,0,0,0,38,199,1,
0,0,0,40,213,1,0,0,0,42,215,1,0,0,0,44,243,1,0,0,0,46,245,1,0,0,0,48,248,
1,0,0,0,50,253,1,0,0,0,52,259,1,0,0,0,54,262,1,0,0,0,56,265,1,0,0,0,58,268,
1,0,0,0,60,274,1,0,0,0,62,276,1,0,0,0,64,289,1,0,0,0,66,291,1,0,0,0,68,69,
3,2,1,0,69,70,5,0,0,1,70,1,1,0,0,0,71,72,6,1,-1,0,72,73,3,4,2,0,73,74,3,
2,1,7,74,77,1,0,0,0,75,77,3,22,11,0,76,71,1,0,0,0,76,75,1,0,0,0,77,106,1,
0,0,0,78,79,10,9,0,0,79,80,3,6,3,0,80,81,3,2,1,9,81,105,1,0,0,0,82,83,10,
6,0,0,83,84,3,8,4,0,84,85,3,2,1,7,85,105,1,0,0,0,86,87,10,5,0,0,87,88,3,
10,5,0,88,89,3,2,1,6,89,105,1,0,0,0,90,91,10,4,0,0,91,92,3,12,6,0,92,93,
3,2,1,5,93,105,1,0,0,0,94,95,10,3,0,0,95,96,3,14,7,0,96,97,3,2,1,4,97,105,
1,0,0,0,98,99,10,2,0,0,99,100,3,16,8,0,100,101,3,2,1,3,101,105,1,0,0,0,102,
103,10,8,0,0,103,105,3,18,9,0,104,78,1,0,0,0,104,82,1,0,0,0,104,86,1,0,0,
0,104,90,1,0,0,0,104,94,1,0,0,0,104,98,1,0,0,0,104,102,1,0,0,0,105,108,1,
0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,3,1,0,0,0,108,106,1,0,0,0,109,
110,7,0,0,0,110,5,1,0,0,0,111,113,5,8,0,0,112,114,3,50,25,0,113,112,1,0,
0,0,113,114,1,0,0,0,114,7,1,0,0,0,115,117,7,1,0,0,116,118,3,50,25,0,117,
116,1,0,0,0,117,118,1,0,0,0,118,9,1,0,0,0,119,121,7,0,0,0,120,122,3,50,25,
0,121,120,1,0,0,0,121,122,1,0,0,0,122,11,1,0,0,0,123,125,7,2,0,0,124,126,
5,28,0,0,125,124,1,0,0,0,125,126,1,0,0,0,126,128,1,0,0,0,127,129,3,50,25,
0,128,127,1,0,0,0,128,129,1,0,0,0,129,13,1,0,0,0,130,132,7,3,0,0,131,133,
3,50,25,0,132,131,1,0,0,0,132,133,1,0,0,0,133,15,1,0,0,0,134,136,5,10,0,
0,135,137,3,50,25,0,136,135,1,0,0,0,136,137,1,0,0,0,137,17,1,0,0,0,138,140,
5,38,0,0,139,141,3,20,10,0,140,139,1,0,0,0,140,141,1,0,0,0,141,19,1,0,0,
0,142,143,5,27,0,0,143,144,5,40,0,0,144,21,1,0,0,0,145,153,3,38,19,0,146,
153,3,44,22,0,147,153,3,26,13,0,148,153,3,34,17,0,149,153,3,36,18,0,150,
153,3,66,33,0,151,153,3,24,12,0,152,145,1,0,0,0,152,146,1,0,0,0,152,147,
1,0,0,0,152,148,1,0,0,0,152,149,1,0,0,0,152,150,1,0,0,0,152,151,1,0,0,0,
153,23,1,0,0,0,154,155,5,33,0,0,155,156,3,2,1,0,156,157,5,34,0,0,157,25,
1,0,0,0,158,164,5,41,0,0,159,161,5,31,0,0,160,162,3,32,16,0,161,160,1,0,
0,0,161,162,1,0,0,0,162,163,1,0,0,0,163,165,5,32,0,0,164,159,1,0,0,0,164,
165,1,0,0,0,165,171,1,0,0,0,166,167,5,31,0,0,167,168,3,32,16,0,168,169,5,
32,0,0,169,171,1,0,0,0,170,158,1,0,0,0,170,166,1,0,0,0,171,27,1,0,0,0,172,
173,3,60,30,0,173,174,3,30,15,0,174,175,5,2,0,0,175,29,1,0,0,0,176,177,7,
4,0,0,177,31,1,0,0,0,178,183,3,28,14,0,179,180,5,37,0,0,180,182,3,28,14,
0,181,179,1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,33,
1,0,0,0,185,183,1,0,0,0,186,187,3,26,13,0,187,188,5,39,0,0,188,35,1,0,0,
0,189,190,3,26,13,0,190,191,5,27,0,0,191,192,5,40,0,0,192,198,1,0,0,0,193,
194,3,34,17,0,194,195,5,27,0,0,195,196,5,40,0,0,196,198,1,0,0,0,197,189,
1,0,0,0,197,193,1,0,0,0,198,37,1,0,0,0,199,200,5,30,0,0,200,201,5,33,0,0,
201,206,3,40,20,0,202,203,5,37,0,0,203,205,3,40,20,0,204,202,1,0,0,0,205,
208,1,0,0,0,206,204,1,0,0,0,206,207,1,0,0,0,207,209,1,0,0,0,208,206,1,0,
0,0,209,210,5,34,0,0,210,39,1,0,0,0,211,214,3,66,33,0,212,214,3,2,1,0,213,
211,1,0,0,0,213,212,1,0,0,0,214,41,1,0,0,0,215,224,5,33,0,0,216,221,3,40,
20,0,217,218,5,37,0,0,218,220,3,40,20,0,219,217,1,0,0,0,220,223,1,0,0,0,
221,219,1,0,0,0,221,222,1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,224,216,
1,0,0,0,224,225,1,0,0,0,225,226,1,0,0,0,226,227,5,34,0,0,227,43,1,0,0,0,
228,229,5,29,0,0,229,244,3,42,21,0,230,233,5,29,0,0,231,234,3,46,23,0,232,
234,3,48,24,0,233,231,1,0,0,0,233,232,1,0,0,0,234,235,1,0,0,0,235,236,3,
42,21,0,236,244,1,0,0,0,237,238,5,29,0,0,238,241,3,42,21,0,239,242,3,46,
23,0,240,242,3,48,24,0,241,239,1,0,0,0,241,240,1,0,0,0,242,244,1,0,0,0,243,
228,1,0,0,0,243,230,1,0,0,0,243,237,1,0,0,0,244,45,1,0,0,0,245,246,5,21,
0,0,246,247,3,62,31,0,247,47,1,0,0,0,248,249,5,22,0,0,249,250,3,62,31,0,
250,49,1,0,0,0,251,254,3,52,26,0,252,254,3,54,27,0,253,251,1,0,0,0,253,252,
1,0,0,0,254,257,1,0,0,0,255,258,3,56,28,0,256,258,3,58,29,0,257,255,1,0,
0,0,257,256,1,0,0,0,257,258,1,0,0,0,258,51,1,0,0,0,259,260,5,23,0,0,260,
261,3,62,31,0,261,53,1,0,0,0,262,263,5,24,0,0,263,264,3,62,31,0,264,55,1,
0,0,0,265,266,5,25,0,0,266,267,3,62,31,0,267,57,1,0,0,0,268,269,5,26,0,0,
269,270,3,62,31,0,270,59,1,0,0,0,271,275,3,64,32,0,272,275,5,41,0,0,273,
275,5,42,0,0,274,271,1,0,0,0,274,272,1,0,0,0,274,273,1,0,0,0,275,61,1,0,
0,0,276,285,5,33,0,0,277,282,3,60,30,0,278,279,5,37,0,0,279,281,3,60,30,
0,280,278,1,0,0,0,281,284,1,0,0,0,282,280,1,0,0,0,282,283,1,0,0,0,283,286,
1,0,0,0,284,282,1,0,0,0,285,277,1,0,0,0,285,286,1,0,0,0,286,287,1,0,0,0,
287,288,5,34,0,0,288,63,1,0,0,0,289,290,7,5,0,0,290,65,1,0,0,0,291,292,7,
6,0,0,292,67,1,0,0,0,29,76,104,106,113,117,121,125,128,132,136,140,152,161,
164,170,183,197,206,213,221,224,233,241,243,253,257,274,282,285];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class PromQLParser extends antlr4.Parser {

    static grammarFileName = "PromQLParser.g4";
    static literalNames = [ null, null, null, "'+'", "'-'", "'*'", "'/'", 
                            "'%'", "'^'", "'and'", "'or'", "'unless'", "'='", 
                            "'=='", "'!='", "'>'", "'<'", "'>='", "'<='", 
                            "'=~'", "'!~'", "'by'", "'without'", "'on'", 
                            "'ignoring'", "'group_left'", "'group_right'", 
                            "'offset'", "'bool'", null, null, "'{'", "'}'", 
                            "'('", "')'", "'['", "']'", "','" ];
    static symbolicNames = [ null, "NUMBER", "STRING", "ADD", "SUB", "MULT", 
                             "DIV", "MOD", "POW", "AND", "OR", "UNLESS", 
                             "EQ", "DEQ", "NE", "GT", "LT", "GE", "LE", 
                             "RE", "NRE", "BY", "WITHOUT", "ON", "IGNORING", 
                             "GROUP_LEFT", "GROUP_RIGHT", "OFFSET", "BOOL", 
                             "AGGREGATION_OPERATOR", "FUNCTION", "LEFT_BRACE", 
                             "RIGHT_BRACE", "LEFT_PAREN", "RIGHT_PAREN", 
                             "LEFT_BRACKET", "RIGHT_BRACKET", "COMMA", "SUBQUERY_RANGE", 
                             "TIME_RANGE", "DURATION", "METRIC_NAME", "LABEL_NAME", 
                             "WS" ];
    static ruleNames = [ "expression", "vectorOperation", "unaryOp", "powOp", 
                         "multOp", "addOp", "compareOp", "andUnlessOp", 
                         "orOp", "subqueryOp", "offsetOp", "vector", "parens", 
                         "instantSelector", "labelMatcher", "labelMatcherOperator", 
                         "labelMatcherList", "matrixSelector", "offset", 
                         "function_", "parameter", "parameterList", "aggregation", 
                         "by", "without", "grouping", "on_", "ignoring", 
                         "groupLeft", "groupRight", "labelName", "labelNameList", 
                         "keyword", "literal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PromQLParser.ruleNames;
        this.literalNames = PromQLParser.literalNames;
        this.symbolicNames = PromQLParser.symbolicNames;
    }

    get atn() {
        return atn;
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
    			return this.precpred(this._ctx, 9);
    		case 1:
    			return this.precpred(this._ctx, 6);
    		case 2:
    			return this.precpred(this._ctx, 5);
    		case 3:
    			return this.precpred(this._ctx, 4);
    		case 4:
    			return this.precpred(this._ctx, 3);
    		case 5:
    			return this.precpred(this._ctx, 2);
    		case 6:
    			return this.precpred(this._ctx, 8);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PromQLParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.vectorOperation(0);
	        this.state = 69;
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
	        this.state = 76;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PromQLParser.ADD:
	        case PromQLParser.SUB:
	            this.state = 72;
	            this.unaryOp();
	            this.state = 73;
	            this.vectorOperation(7);
	            break;
	        case PromQLParser.NUMBER:
	        case PromQLParser.STRING:
	        case PromQLParser.AGGREGATION_OPERATOR:
	        case PromQLParser.FUNCTION:
	        case PromQLParser.LEFT_BRACE:
	        case PromQLParser.LEFT_PAREN:
	        case PromQLParser.METRIC_NAME:
	            this.state = 75;
	            this.vector();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 106;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 104;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PromQLParser.RULE_vectorOperation);
	                    this.state = 78;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 79;
	                    this.powOp();
	                    this.state = 80;
	                    this.vectorOperation(9);
	                    break;

	                case 2:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PromQLParser.RULE_vectorOperation);
	                    this.state = 82;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 83;
	                    this.multOp();
	                    this.state = 84;
	                    this.vectorOperation(7);
	                    break;

	                case 3:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PromQLParser.RULE_vectorOperation);
	                    this.state = 86;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 87;
	                    this.addOp();
	                    this.state = 88;
	                    this.vectorOperation(6);
	                    break;

	                case 4:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PromQLParser.RULE_vectorOperation);
	                    this.state = 90;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 91;
	                    this.compareOp();
	                    this.state = 92;
	                    this.vectorOperation(5);
	                    break;

	                case 5:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PromQLParser.RULE_vectorOperation);
	                    this.state = 94;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 95;
	                    this.andUnlessOp();
	                    this.state = 96;
	                    this.vectorOperation(4);
	                    break;

	                case 6:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PromQLParser.RULE_vectorOperation);
	                    this.state = 98;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 99;
	                    this.orOp();
	                    this.state = 100;
	                    this.vectorOperation(3);
	                    break;

	                case 7:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, PromQLParser.RULE_vectorOperation);
	                    this.state = 102;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 103;
	                    this.subqueryOp();
	                    break;

	                } 
	            }
	            this.state = 108;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        _la = this._input.LA(1);
	        if(!(_la===PromQLParser.ADD || _la===PromQLParser.SUB)) {
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(PromQLParser.POW);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PromQLParser.ON || _la===PromQLParser.IGNORING) {
	            this.state = 112;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PromQLParser.MULT) | (1 << PromQLParser.DIV) | (1 << PromQLParser.MOD))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PromQLParser.ON || _la===PromQLParser.IGNORING) {
	            this.state = 116;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        _la = this._input.LA(1);
	        if(!(_la===PromQLParser.ADD || _la===PromQLParser.SUB)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PromQLParser.ON || _la===PromQLParser.IGNORING) {
	            this.state = 120;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PromQLParser.DEQ) | (1 << PromQLParser.NE) | (1 << PromQLParser.GT) | (1 << PromQLParser.LT) | (1 << PromQLParser.GE) | (1 << PromQLParser.LE))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PromQLParser.BOOL) {
	            this.state = 124;
	            this.match(PromQLParser.BOOL);
	        }

	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PromQLParser.ON || _la===PromQLParser.IGNORING) {
	            this.state = 127;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        _la = this._input.LA(1);
	        if(!(_la===PromQLParser.AND || _la===PromQLParser.UNLESS)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PromQLParser.ON || _la===PromQLParser.IGNORING) {
	            this.state = 131;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(PromQLParser.OR);
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PromQLParser.ON || _la===PromQLParser.IGNORING) {
	            this.state = 135;
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
	    this.enterRule(localctx, 18, PromQLParser.RULE_subqueryOp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(PromQLParser.SUBQUERY_RANGE);
	        this.state = 140;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 139;
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
	    this.enterRule(localctx, 20, PromQLParser.RULE_offsetOp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.match(PromQLParser.OFFSET);
	        this.state = 143;
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
	    this.enterRule(localctx, 22, PromQLParser.RULE_vector);
	    try {
	        this.state = 152;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 145;
	            this.function_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 146;
	            this.aggregation();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 147;
	            this.instantSelector();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 148;
	            this.matrixSelector();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 149;
	            this.offset();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 150;
	            this.literal();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 151;
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
	    this.enterRule(localctx, 24, PromQLParser.RULE_parens);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(PromQLParser.LEFT_PAREN);
	        this.state = 155;
	        this.vectorOperation(0);
	        this.state = 156;
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
	    this.enterRule(localctx, 26, PromQLParser.RULE_instantSelector);
	    var _la = 0; // Token type
	    try {
	        this.state = 170;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PromQLParser.METRIC_NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 158;
	            this.match(PromQLParser.METRIC_NAME);
	            this.state = 164;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	            if(la_===1) {
	                this.state = 159;
	                this.match(PromQLParser.LEFT_BRACE);
	                this.state = 161;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PromQLParser.AND) | (1 << PromQLParser.OR) | (1 << PromQLParser.UNLESS) | (1 << PromQLParser.BY) | (1 << PromQLParser.WITHOUT) | (1 << PromQLParser.ON) | (1 << PromQLParser.IGNORING) | (1 << PromQLParser.GROUP_LEFT) | (1 << PromQLParser.GROUP_RIGHT) | (1 << PromQLParser.OFFSET) | (1 << PromQLParser.BOOL) | (1 << PromQLParser.AGGREGATION_OPERATOR) | (1 << PromQLParser.FUNCTION))) !== 0) || _la===PromQLParser.METRIC_NAME || _la===PromQLParser.LABEL_NAME) {
	                    this.state = 160;
	                    this.labelMatcherList();
	                }

	                this.state = 163;
	                this.match(PromQLParser.RIGHT_BRACE);

	            }
	            break;
	        case PromQLParser.LEFT_BRACE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 166;
	            this.match(PromQLParser.LEFT_BRACE);
	            this.state = 167;
	            this.labelMatcherList();
	            this.state = 168;
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
	    this.enterRule(localctx, 28, PromQLParser.RULE_labelMatcher);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.labelName();
	        this.state = 173;
	        this.labelMatcherOperator();
	        this.state = 174;
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
	    this.enterRule(localctx, 30, PromQLParser.RULE_labelMatcherOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PromQLParser.EQ) | (1 << PromQLParser.NE) | (1 << PromQLParser.RE) | (1 << PromQLParser.NRE))) !== 0))) {
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
	    this.enterRule(localctx, 32, PromQLParser.RULE_labelMatcherList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.labelMatcher();
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===PromQLParser.COMMA) {
	            this.state = 179;
	            this.match(PromQLParser.COMMA);
	            this.state = 180;
	            this.labelMatcher();
	            this.state = 185;
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



	matrixSelector() {
	    let localctx = new MatrixSelectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, PromQLParser.RULE_matrixSelector);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.instantSelector();
	        this.state = 187;
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
	    this.enterRule(localctx, 36, PromQLParser.RULE_offset);
	    try {
	        this.state = 197;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 189;
	            this.instantSelector();
	            this.state = 190;
	            this.match(PromQLParser.OFFSET);
	            this.state = 191;
	            this.match(PromQLParser.DURATION);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 193;
	            this.matrixSelector();
	            this.state = 194;
	            this.match(PromQLParser.OFFSET);
	            this.state = 195;
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
	    this.enterRule(localctx, 38, PromQLParser.RULE_function_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(PromQLParser.FUNCTION);
	        this.state = 200;
	        this.match(PromQLParser.LEFT_PAREN);
	        this.state = 201;
	        this.parameter();
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===PromQLParser.COMMA) {
	            this.state = 202;
	            this.match(PromQLParser.COMMA);
	            this.state = 203;
	            this.parameter();
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 209;
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
	    this.enterRule(localctx, 40, PromQLParser.RULE_parameter);
	    try {
	        this.state = 213;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 211;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 212;
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
	    this.enterRule(localctx, 42, PromQLParser.RULE_parameterList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(PromQLParser.LEFT_PAREN);
	        this.state = 224;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PromQLParser.NUMBER) | (1 << PromQLParser.STRING) | (1 << PromQLParser.ADD) | (1 << PromQLParser.SUB) | (1 << PromQLParser.AGGREGATION_OPERATOR) | (1 << PromQLParser.FUNCTION) | (1 << PromQLParser.LEFT_BRACE))) !== 0) || _la===PromQLParser.LEFT_PAREN || _la===PromQLParser.METRIC_NAME) {
	            this.state = 216;
	            this.parameter();
	            this.state = 221;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===PromQLParser.COMMA) {
	                this.state = 217;
	                this.match(PromQLParser.COMMA);
	                this.state = 218;
	                this.parameter();
	                this.state = 223;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 226;
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
	    this.enterRule(localctx, 44, PromQLParser.RULE_aggregation);
	    try {
	        this.state = 243;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 228;
	            this.match(PromQLParser.AGGREGATION_OPERATOR);
	            this.state = 229;
	            this.parameterList();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 230;
	            this.match(PromQLParser.AGGREGATION_OPERATOR);
	            this.state = 233;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case PromQLParser.BY:
	                this.state = 231;
	                this.by();
	                break;
	            case PromQLParser.WITHOUT:
	                this.state = 232;
	                this.without();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 235;
	            this.parameterList();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 237;
	            this.match(PromQLParser.AGGREGATION_OPERATOR);
	            this.state = 238;
	            this.parameterList();
	            this.state = 241;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case PromQLParser.BY:
	                this.state = 239;
	                this.by();
	                break;
	            case PromQLParser.WITHOUT:
	                this.state = 240;
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
	    this.enterRule(localctx, 46, PromQLParser.RULE_by);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        this.match(PromQLParser.BY);
	        this.state = 246;
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
	    this.enterRule(localctx, 48, PromQLParser.RULE_without);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.match(PromQLParser.WITHOUT);
	        this.state = 249;
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
	    this.enterRule(localctx, 50, PromQLParser.RULE_grouping);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PromQLParser.ON:
	            this.state = 251;
	            this.on_();
	            break;
	        case PromQLParser.IGNORING:
	            this.state = 252;
	            this.ignoring();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 257;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case PromQLParser.GROUP_LEFT:
	        	this.state = 255;
	        	this.groupLeft();
	        	break;
	        case PromQLParser.GROUP_RIGHT:
	        	this.state = 256;
	        	this.groupRight();
	        	break;
	        case PromQLParser.NUMBER:
	        case PromQLParser.STRING:
	        case PromQLParser.ADD:
	        case PromQLParser.SUB:
	        case PromQLParser.AGGREGATION_OPERATOR:
	        case PromQLParser.FUNCTION:
	        case PromQLParser.LEFT_BRACE:
	        case PromQLParser.LEFT_PAREN:
	        case PromQLParser.METRIC_NAME:
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
	    this.enterRule(localctx, 52, PromQLParser.RULE_on_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.match(PromQLParser.ON);
	        this.state = 260;
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
	    this.enterRule(localctx, 54, PromQLParser.RULE_ignoring);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.match(PromQLParser.IGNORING);
	        this.state = 263;
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
	    this.enterRule(localctx, 56, PromQLParser.RULE_groupLeft);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this.match(PromQLParser.GROUP_LEFT);
	        this.state = 266;
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



	groupRight() {
	    let localctx = new GroupRightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, PromQLParser.RULE_groupRight);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this.match(PromQLParser.GROUP_RIGHT);
	        this.state = 269;
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



	labelName() {
	    let localctx = new LabelNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, PromQLParser.RULE_labelName);
	    try {
	        this.state = 274;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PromQLParser.AND:
	        case PromQLParser.OR:
	        case PromQLParser.UNLESS:
	        case PromQLParser.BY:
	        case PromQLParser.WITHOUT:
	        case PromQLParser.ON:
	        case PromQLParser.IGNORING:
	        case PromQLParser.GROUP_LEFT:
	        case PromQLParser.GROUP_RIGHT:
	        case PromQLParser.OFFSET:
	        case PromQLParser.BOOL:
	        case PromQLParser.AGGREGATION_OPERATOR:
	        case PromQLParser.FUNCTION:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 271;
	            this.keyword();
	            break;
	        case PromQLParser.METRIC_NAME:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 272;
	            this.match(PromQLParser.METRIC_NAME);
	            break;
	        case PromQLParser.LABEL_NAME:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 273;
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
	    this.enterRule(localctx, 62, PromQLParser.RULE_labelNameList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.match(PromQLParser.LEFT_PAREN);
	        this.state = 285;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PromQLParser.AND) | (1 << PromQLParser.OR) | (1 << PromQLParser.UNLESS) | (1 << PromQLParser.BY) | (1 << PromQLParser.WITHOUT) | (1 << PromQLParser.ON) | (1 << PromQLParser.IGNORING) | (1 << PromQLParser.GROUP_LEFT) | (1 << PromQLParser.GROUP_RIGHT) | (1 << PromQLParser.OFFSET) | (1 << PromQLParser.BOOL) | (1 << PromQLParser.AGGREGATION_OPERATOR) | (1 << PromQLParser.FUNCTION))) !== 0) || _la===PromQLParser.METRIC_NAME || _la===PromQLParser.LABEL_NAME) {
	            this.state = 277;
	            this.labelName();
	            this.state = 282;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===PromQLParser.COMMA) {
	                this.state = 278;
	                this.match(PromQLParser.COMMA);
	                this.state = 279;
	                this.labelName();
	                this.state = 284;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 287;
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
	    this.enterRule(localctx, 64, PromQLParser.RULE_keyword);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 289;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PromQLParser.AND) | (1 << PromQLParser.OR) | (1 << PromQLParser.UNLESS) | (1 << PromQLParser.BY) | (1 << PromQLParser.WITHOUT) | (1 << PromQLParser.ON) | (1 << PromQLParser.IGNORING) | (1 << PromQLParser.GROUP_LEFT) | (1 << PromQLParser.GROUP_RIGHT) | (1 << PromQLParser.OFFSET) | (1 << PromQLParser.BOOL) | (1 << PromQLParser.AGGREGATION_OPERATOR) | (1 << PromQLParser.FUNCTION))) !== 0))) {
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
	    this.enterRule(localctx, 66, PromQLParser.RULE_literal);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 291;
	        _la = this._input.LA(1);
	        if(!(_la===PromQLParser.NUMBER || _la===PromQLParser.STRING)) {
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
PromQLParser.SUBQUERY_RANGE = 38;
PromQLParser.TIME_RANGE = 39;
PromQLParser.DURATION = 40;
PromQLParser.METRIC_NAME = 41;
PromQLParser.LABEL_NAME = 42;
PromQLParser.WS = 43;

PromQLParser.RULE_expression = 0;
PromQLParser.RULE_vectorOperation = 1;
PromQLParser.RULE_unaryOp = 2;
PromQLParser.RULE_powOp = 3;
PromQLParser.RULE_multOp = 4;
PromQLParser.RULE_addOp = 5;
PromQLParser.RULE_compareOp = 6;
PromQLParser.RULE_andUnlessOp = 7;
PromQLParser.RULE_orOp = 8;
PromQLParser.RULE_subqueryOp = 9;
PromQLParser.RULE_offsetOp = 10;
PromQLParser.RULE_vector = 11;
PromQLParser.RULE_parens = 12;
PromQLParser.RULE_instantSelector = 13;
PromQLParser.RULE_labelMatcher = 14;
PromQLParser.RULE_labelMatcherOperator = 15;
PromQLParser.RULE_labelMatcherList = 16;
PromQLParser.RULE_matrixSelector = 17;
PromQLParser.RULE_offset = 18;
PromQLParser.RULE_function_ = 19;
PromQLParser.RULE_parameter = 20;
PromQLParser.RULE_parameterList = 21;
PromQLParser.RULE_aggregation = 22;
PromQLParser.RULE_by = 23;
PromQLParser.RULE_without = 24;
PromQLParser.RULE_grouping = 25;
PromQLParser.RULE_on_ = 26;
PromQLParser.RULE_ignoring = 27;
PromQLParser.RULE_groupLeft = 28;
PromQLParser.RULE_groupRight = 29;
PromQLParser.RULE_labelName = 30;
PromQLParser.RULE_labelNameList = 31;
PromQLParser.RULE_keyword = 32;
PromQLParser.RULE_literal = 33;

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

	RIGHT_PAREN() {
	    return this.getToken(PromQLParser.RIGHT_PAREN, 0);
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
