// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/caql/CaQL.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CaQLListener from './CaQLListener.js';
const serializedATN = [4,1,44,258,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,71,8,2,
10,2,12,2,74,9,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,87,8,2,
1,2,5,2,90,8,2,10,2,12,2,93,9,2,1,2,1,2,5,2,97,8,2,10,2,12,2,100,9,2,1,2,
1,2,1,2,3,2,105,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,136,
8,2,1,2,1,2,5,2,140,8,2,10,2,12,2,143,9,2,1,3,1,3,1,4,1,4,3,4,149,8,4,1,
5,1,5,3,5,153,8,5,1,6,1,6,3,6,157,8,6,1,7,1,7,3,7,161,8,7,1,7,3,7,164,8,
7,1,8,1,8,3,8,168,8,8,1,9,1,9,3,9,172,8,9,1,10,1,10,3,10,176,8,10,1,11,1,
11,3,11,180,8,11,1,12,1,12,1,12,1,13,1,13,3,13,187,8,13,1,14,1,14,1,14,1,
14,5,14,193,8,14,10,14,12,14,196,9,14,3,14,198,8,14,1,14,1,14,1,15,1,15,
1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,3,19,217,
8,19,1,19,1,19,3,19,221,8,19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,3,22,
231,8,22,1,23,1,23,3,23,235,8,23,1,24,1,24,3,24,239,8,24,1,25,1,25,1,25,
1,25,5,25,245,8,25,10,25,12,25,248,9,25,3,25,250,8,25,1,25,1,25,1,26,1,26,
1,27,1,27,1,27,0,1,4,28,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
36,38,40,42,44,46,48,50,52,54,0,8,2,0,1,2,43,43,1,0,3,4,1,0,5,7,1,0,13,18,
2,0,9,9,11,11,2,0,11,11,23,23,2,0,9,11,21,28,1,0,1,2,268,0,56,1,0,0,0,2,
59,1,0,0,0,4,104,1,0,0,0,6,144,1,0,0,0,8,146,1,0,0,0,10,150,1,0,0,0,12,154,
1,0,0,0,14,158,1,0,0,0,16,165,1,0,0,0,18,169,1,0,0,0,20,173,1,0,0,0,22,177,
1,0,0,0,24,181,1,0,0,0,26,186,1,0,0,0,28,188,1,0,0,0,30,201,1,0,0,0,32,205,
1,0,0,0,34,208,1,0,0,0,36,211,1,0,0,0,38,216,1,0,0,0,40,222,1,0,0,0,42,225,
1,0,0,0,44,228,1,0,0,0,46,232,1,0,0,0,48,238,1,0,0,0,50,240,1,0,0,0,52,253,
1,0,0,0,54,255,1,0,0,0,56,57,3,2,1,0,57,58,5,0,0,1,58,1,1,0,0,0,59,60,3,
4,2,0,60,3,1,0,0,0,61,62,6,2,-1,0,62,63,3,6,3,0,63,64,3,4,2,14,64,105,1,
0,0,0,65,66,3,48,24,0,66,67,5,29,0,0,67,72,3,4,2,0,68,69,5,35,0,0,69,71,
3,4,2,0,70,68,1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,75,1,
0,0,0,74,72,1,0,0,0,75,76,5,30,0,0,76,105,1,0,0,0,77,78,5,31,0,0,78,79,3,
4,2,0,79,80,5,32,0,0,80,105,1,0,0,0,81,82,3,48,24,0,82,83,5,31,0,0,83,91,
7,0,0,0,84,86,5,35,0,0,85,87,5,42,0,0,86,85,1,0,0,0,86,87,1,0,0,0,87,88,
1,0,0,0,88,90,7,0,0,0,89,84,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,
0,0,0,92,94,1,0,0,0,93,91,1,0,0,0,94,98,5,32,0,0,95,97,3,30,15,0,96,95,1,
0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,105,1,0,0,0,100,98,1,
0,0,0,101,105,5,1,0,0,102,105,5,2,0,0,103,105,5,43,0,0,104,61,1,0,0,0,104,
65,1,0,0,0,104,77,1,0,0,0,104,81,1,0,0,0,104,101,1,0,0,0,104,102,1,0,0,0,
104,103,1,0,0,0,105,141,1,0,0,0,106,107,10,13,0,0,107,108,3,10,5,0,108,109,
3,4,2,14,109,140,1,0,0,0,110,111,10,12,0,0,111,112,3,12,6,0,112,113,3,4,
2,13,113,140,1,0,0,0,114,115,10,11,0,0,115,116,3,14,7,0,116,117,3,4,2,12,
117,140,1,0,0,0,118,119,10,10,0,0,119,120,3,16,8,0,120,121,3,4,2,11,121,
140,1,0,0,0,122,123,10,9,0,0,123,124,3,18,9,0,124,125,3,4,2,10,125,140,1,
0,0,0,126,127,10,8,0,0,127,128,3,20,10,0,128,129,3,4,2,9,129,140,1,0,0,0,
130,135,10,15,0,0,131,132,3,8,4,0,132,133,3,4,2,0,133,136,1,0,0,0,134,136,
3,22,11,0,135,131,1,0,0,0,135,134,1,0,0,0,136,140,1,0,0,0,137,138,10,4,0,
0,138,140,3,30,15,0,139,106,1,0,0,0,139,110,1,0,0,0,139,114,1,0,0,0,139,
118,1,0,0,0,139,122,1,0,0,0,139,126,1,0,0,0,139,130,1,0,0,0,139,137,1,0,
0,0,140,143,1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,5,1,0,0,0,143,141,
1,0,0,0,144,145,7,1,0,0,145,7,1,0,0,0,146,148,5,8,0,0,147,149,3,38,19,0,
148,147,1,0,0,0,148,149,1,0,0,0,149,9,1,0,0,0,150,152,7,2,0,0,151,153,3,
38,19,0,152,151,1,0,0,0,152,153,1,0,0,0,153,11,1,0,0,0,154,156,7,1,0,0,155,
157,3,38,19,0,156,155,1,0,0,0,156,157,1,0,0,0,157,13,1,0,0,0,158,160,7,3,
0,0,159,161,5,28,0,0,160,159,1,0,0,0,160,161,1,0,0,0,161,163,1,0,0,0,162,
164,3,38,19,0,163,162,1,0,0,0,163,164,1,0,0,0,164,15,1,0,0,0,165,167,7,4,
0,0,166,168,3,38,19,0,167,166,1,0,0,0,167,168,1,0,0,0,168,17,1,0,0,0,169,
171,5,10,0,0,170,172,3,38,19,0,171,170,1,0,0,0,171,172,1,0,0,0,172,19,1,
0,0,0,173,175,7,5,0,0,174,176,3,38,19,0,175,174,1,0,0,0,175,176,1,0,0,0,
176,21,1,0,0,0,177,179,5,38,0,0,178,180,3,24,12,0,179,178,1,0,0,0,179,180,
1,0,0,0,180,23,1,0,0,0,181,182,5,27,0,0,182,183,5,40,0,0,183,25,1,0,0,0,
184,187,3,54,27,0,185,187,3,4,2,0,186,184,1,0,0,0,186,185,1,0,0,0,187,27,
1,0,0,0,188,197,5,31,0,0,189,194,3,26,13,0,190,191,5,35,0,0,191,193,3,26,
13,0,192,190,1,0,0,0,193,196,1,0,0,0,194,192,1,0,0,0,194,195,1,0,0,0,195,
198,1,0,0,0,196,194,1,0,0,0,197,189,1,0,0,0,197,198,1,0,0,0,198,199,1,0,
0,0,199,200,5,32,0,0,200,29,1,0,0,0,201,202,5,36,0,0,202,203,3,48,24,0,203,
204,3,28,14,0,204,31,1,0,0,0,205,206,5,35,0,0,206,207,3,4,2,0,207,33,1,0,
0,0,208,209,5,21,0,0,209,210,3,50,25,0,210,35,1,0,0,0,211,212,5,22,0,0,212,
213,3,50,25,0,213,37,1,0,0,0,214,217,3,40,20,0,215,217,3,42,21,0,216,214,
1,0,0,0,216,215,1,0,0,0,217,220,1,0,0,0,218,221,3,44,22,0,219,221,3,46,23,
0,220,218,1,0,0,0,220,219,1,0,0,0,220,221,1,0,0,0,221,39,1,0,0,0,222,223,
5,23,0,0,223,224,3,50,25,0,224,41,1,0,0,0,225,226,5,24,0,0,226,227,3,50,
25,0,227,43,1,0,0,0,228,230,5,25,0,0,229,231,3,50,25,0,230,229,1,0,0,0,230,
231,1,0,0,0,231,45,1,0,0,0,232,234,5,26,0,0,233,235,3,50,25,0,234,233,1,
0,0,0,234,235,1,0,0,0,235,47,1,0,0,0,236,239,3,52,26,0,237,239,5,41,0,0,
238,236,1,0,0,0,238,237,1,0,0,0,239,49,1,0,0,0,240,249,5,31,0,0,241,246,
3,48,24,0,242,243,5,35,0,0,243,245,3,48,24,0,244,242,1,0,0,0,245,248,1,0,
0,0,246,244,1,0,0,0,246,247,1,0,0,0,247,250,1,0,0,0,248,246,1,0,0,0,249,
241,1,0,0,0,249,250,1,0,0,0,250,251,1,0,0,0,251,252,5,32,0,0,252,51,1,0,
0,0,253,254,7,6,0,0,254,53,1,0,0,0,255,256,7,7,0,0,256,55,1,0,0,0,27,72,
86,91,98,104,135,139,141,148,152,156,160,163,167,171,175,179,186,194,197,
216,220,230,234,238,246,249];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CaQLParser extends antlr4.Parser {

    static grammarFileName = "CaQL.g4";
    static literalNames = [ null, null, null, "'+'", "'-'", "'*'", "'/'", 
                            "'%'", "'^'", "'and'", "'or'", "'unless'", "'='", 
                            "'=='", "'!='", "'>'", "'<'", "'>='", "'<='", 
                            "'=~'", "'!~'", "'by'", "'without'", "'on'", 
                            "'ignoring'", "'group_left'", "'group_right'", 
                            "'offset'", "'bool'", "'{'", "'}'", "'('", "')'", 
                            "'['", "']'", "','", "'|'", "':'", null, null, 
                            null, null, "'limit='" ];
    static symbolicNames = [ null, "NUMBER", "STRING", "ADD", "SUB", "MULT", 
                             "DIV", "MOD", "POW", "AND", "OR", "UNLESS", 
                             "EQ", "DEQ", "NE", "GT", "LT", "GE", "LE", 
                             "RE", "NRE", "BY", "WITHOUT", "ON", "IGNORING", 
                             "GROUP_LEFT", "GROUP_RIGHT", "OFFSET", "BOOL", 
                             "LEFT_BRACE", "RIGHT_BRACE", "LEFT_PAREN", 
                             "RIGHT_PAREN", "LEFT_BRACKET", "RIGHT_BRACKET", 
                             "COMMA", "LINE_", "COLON", "SUBQUERY_RANGE", 
                             "TIME_RANGE", "DURATION", "NAME", "LIMIT", 
                             "UUID", "WS" ];
    static ruleNames = [ "start_", "expression", "vectorOperation", "unaryOp", 
                         "powOp", "multOp", "addOp", "compareOp", "andUnlessOp", 
                         "orOp", "vectorMatchOp", "subqueryOp", "offsetOp", 
                         "parameter", "parameterList", "metricsAggregation", 
                         "multMetrics", "by", "without", "grouping", "on_", 
                         "ignoring", "groupLeft", "groupRight", "name", 
                         "labelNameList", "keyword", "literal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CaQLParser.ruleNames;
        this.literalNames = CaQLParser.literalNames;
        this.symbolicNames = CaQLParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.vectorOperation_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    vectorOperation_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 13);
    		case 1:
    			return this.precpred(this._ctx, 12);
    		case 2:
    			return this.precpred(this._ctx, 11);
    		case 3:
    			return this.precpred(this._ctx, 10);
    		case 4:
    			return this.precpred(this._ctx, 9);
    		case 5:
    			return this.precpred(this._ctx, 8);
    		case 6:
    			return this.precpred(this._ctx, 15);
    		case 7:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start_() {
	    let localctx = new Start_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CaQLParser.RULE_start_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.expression();
	        this.state = 57;
	        this.match(CaQLParser.EOF);
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CaQLParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.vectorOperation(0);
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
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, CaQLParser.RULE_vectorOperation, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 62;
	            this.unaryOp();
	            this.state = 63;
	            this.vectorOperation(14);
	            break;

	        case 2:
	            this.state = 65;
	            this.name();
	            this.state = 66;
	            this.match(CaQLParser.LEFT_BRACE);
	            this.state = 67;
	            this.vectorOperation(0);
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===35) {
	                this.state = 68;
	                this.match(CaQLParser.COMMA);
	                this.state = 69;
	                this.vectorOperation(0);
	                this.state = 74;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 75;
	            this.match(CaQLParser.RIGHT_BRACE);
	            break;

	        case 3:
	            this.state = 77;
	            this.match(CaQLParser.LEFT_PAREN);
	            this.state = 78;
	            this.vectorOperation(0);
	            this.state = 79;
	            this.match(CaQLParser.RIGHT_PAREN);
	            break;

	        case 4:
	            this.state = 81;
	            this.name();
	            this.state = 82;
	            this.match(CaQLParser.LEFT_PAREN);
	            this.state = 83;
	            _la = this._input.LA(1);
	            if(!(_la===1 || _la===2 || _la===43)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===35) {
	                this.state = 84;
	                this.match(CaQLParser.COMMA);
	                this.state = 86;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===42) {
	                    this.state = 85;
	                    this.match(CaQLParser.LIMIT);
	                }

	                this.state = 88;
	                _la = this._input.LA(1);
	                if(!(_la===1 || _la===2 || _la===43)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 93;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 94;
	            this.match(CaQLParser.RIGHT_PAREN);
	            this.state = 98;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 95;
	                    this.metricsAggregation(); 
	                }
	                this.state = 100;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	            }

	            break;

	        case 5:
	            this.state = 101;
	            this.match(CaQLParser.NUMBER);
	            break;

	        case 6:
	            this.state = 102;
	            this.match(CaQLParser.STRING);
	            break;

	        case 7:
	            this.state = 103;
	            this.match(CaQLParser.UUID);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 141;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 139;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CaQLParser.RULE_vectorOperation);
	                    this.state = 106;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 107;
	                    this.multOp();
	                    this.state = 108;
	                    this.vectorOperation(14);
	                    break;

	                case 2:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CaQLParser.RULE_vectorOperation);
	                    this.state = 110;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 111;
	                    this.addOp();
	                    this.state = 112;
	                    this.vectorOperation(13);
	                    break;

	                case 3:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CaQLParser.RULE_vectorOperation);
	                    this.state = 114;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 115;
	                    this.compareOp();
	                    this.state = 116;
	                    this.vectorOperation(12);
	                    break;

	                case 4:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CaQLParser.RULE_vectorOperation);
	                    this.state = 118;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 119;
	                    this.andUnlessOp();
	                    this.state = 120;
	                    this.vectorOperation(11);
	                    break;

	                case 5:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CaQLParser.RULE_vectorOperation);
	                    this.state = 122;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 123;
	                    this.orOp();
	                    this.state = 124;
	                    this.vectorOperation(10);
	                    break;

	                case 6:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CaQLParser.RULE_vectorOperation);
	                    this.state = 126;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 127;
	                    this.vectorMatchOp();
	                    this.state = 128;
	                    this.vectorOperation(9);
	                    break;

	                case 7:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CaQLParser.RULE_vectorOperation);
	                    this.state = 130;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 135;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 8:
	                        this.state = 131;
	                        this.powOp();
	                        this.state = 132;
	                        this.vectorOperation(0);
	                        break;
	                    case 38:
	                        this.state = 134;
	                        this.subqueryOp();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    break;

	                case 8:
	                    localctx = new VectorOperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CaQLParser.RULE_vectorOperation);
	                    this.state = 137;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 138;
	                    this.metricsAggregation();
	                    break;

	                } 
	            }
	            this.state = 143;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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
	    this.enterRule(localctx, 6, CaQLParser.RULE_unaryOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
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
	    this.enterRule(localctx, 8, CaQLParser.RULE_powOp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(CaQLParser.POW);
	        this.state = 148;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 147;
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
	    this.enterRule(localctx, 10, CaQLParser.RULE_multOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 224) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 152;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 151;
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
	    this.enterRule(localctx, 12, CaQLParser.RULE_addOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 156;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 155;
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
	    this.enterRule(localctx, 14, CaQLParser.RULE_compareOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 516096) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 160;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 159;
	            this.match(CaQLParser.BOOL);

	        }
	        this.state = 163;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 162;
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
	    this.enterRule(localctx, 16, CaQLParser.RULE_andUnlessOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===11)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 167;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 166;
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
	    this.enterRule(localctx, 18, CaQLParser.RULE_orOp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.match(CaQLParser.OR);
	        this.state = 171;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 170;
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
	    this.enterRule(localctx, 20, CaQLParser.RULE_vectorMatchOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===23)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 175;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 174;
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
	    this.enterRule(localctx, 22, CaQLParser.RULE_subqueryOp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.match(CaQLParser.SUBQUERY_RANGE);
	        this.state = 179;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        if(la_===1) {
	            this.state = 178;
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
	    this.enterRule(localctx, 24, CaQLParser.RULE_offsetOp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this.match(CaQLParser.OFFSET);
	        this.state = 182;
	        this.match(CaQLParser.DURATION);
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
	    this.enterRule(localctx, 26, CaQLParser.RULE_parameter);
	    try {
	        this.state = 186;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 184;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 185;
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
	    this.enterRule(localctx, 28, CaQLParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.match(CaQLParser.LEFT_PAREN);
	        this.state = 197;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2682261022) !== 0) || _la===41 || _la===43) {
	            this.state = 189;
	            this.parameter();
	            this.state = 194;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===35) {
	                this.state = 190;
	                this.match(CaQLParser.COMMA);
	                this.state = 191;
	                this.parameter();
	                this.state = 196;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 199;
	        this.match(CaQLParser.RIGHT_PAREN);
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



	metricsAggregation() {
	    let localctx = new MetricsAggregationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, CaQLParser.RULE_metricsAggregation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.match(CaQLParser.LINE_);
	        this.state = 202;
	        this.name();
	        this.state = 203;
	        this.parameterList();
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



	multMetrics() {
	    let localctx = new MultMetricsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, CaQLParser.RULE_multMetrics);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.match(CaQLParser.COMMA);
	        this.state = 206;
	        this.vectorOperation(0);
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
	    this.enterRule(localctx, 34, CaQLParser.RULE_by);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.match(CaQLParser.BY);
	        this.state = 209;
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
	    this.enterRule(localctx, 36, CaQLParser.RULE_without);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        this.match(CaQLParser.WITHOUT);
	        this.state = 212;
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
	    this.enterRule(localctx, 38, CaQLParser.RULE_grouping);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 23:
	            this.state = 214;
	            this.on_();
	            break;
	        case 24:
	            this.state = 215;
	            this.ignoring();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 220;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        if(la_===1) {
	            this.state = 218;
	            this.groupLeft();

	        } else if(la_===2) {
	            this.state = 219;
	            this.groupRight();

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
	    this.enterRule(localctx, 40, CaQLParser.RULE_on_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(CaQLParser.ON);
	        this.state = 223;
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
	    this.enterRule(localctx, 42, CaQLParser.RULE_ignoring);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this.match(CaQLParser.IGNORING);
	        this.state = 226;
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
	    this.enterRule(localctx, 44, CaQLParser.RULE_groupLeft);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(CaQLParser.GROUP_LEFT);
	        this.state = 230;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        if(la_===1) {
	            this.state = 229;
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
	    this.enterRule(localctx, 46, CaQLParser.RULE_groupRight);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(CaQLParser.GROUP_RIGHT);
	        this.state = 234;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        if(la_===1) {
	            this.state = 233;
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, CaQLParser.RULE_name);
	    try {
	        this.state = 238;
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
	            this.enterOuterAlt(localctx, 1);
	            this.state = 236;
	            this.keyword();
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 237;
	            this.match(CaQLParser.NAME);
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
	    this.enterRule(localctx, 50, CaQLParser.RULE_labelNameList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.match(CaQLParser.LEFT_PAREN);
	        this.state = 249;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 534777344) !== 0) || _la===41) {
	            this.state = 241;
	            this.name();
	            this.state = 246;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===35) {
	                this.state = 242;
	                this.match(CaQLParser.COMMA);
	                this.state = 243;
	                this.name();
	                this.state = 248;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 251;
	        this.match(CaQLParser.RIGHT_PAREN);
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
	    this.enterRule(localctx, 52, CaQLParser.RULE_keyword);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 534777344) !== 0))) {
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
	    this.enterRule(localctx, 54, CaQLParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 255;
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

CaQLParser.EOF = antlr4.Token.EOF;
CaQLParser.NUMBER = 1;
CaQLParser.STRING = 2;
CaQLParser.ADD = 3;
CaQLParser.SUB = 4;
CaQLParser.MULT = 5;
CaQLParser.DIV = 6;
CaQLParser.MOD = 7;
CaQLParser.POW = 8;
CaQLParser.AND = 9;
CaQLParser.OR = 10;
CaQLParser.UNLESS = 11;
CaQLParser.EQ = 12;
CaQLParser.DEQ = 13;
CaQLParser.NE = 14;
CaQLParser.GT = 15;
CaQLParser.LT = 16;
CaQLParser.GE = 17;
CaQLParser.LE = 18;
CaQLParser.RE = 19;
CaQLParser.NRE = 20;
CaQLParser.BY = 21;
CaQLParser.WITHOUT = 22;
CaQLParser.ON = 23;
CaQLParser.IGNORING = 24;
CaQLParser.GROUP_LEFT = 25;
CaQLParser.GROUP_RIGHT = 26;
CaQLParser.OFFSET = 27;
CaQLParser.BOOL = 28;
CaQLParser.LEFT_BRACE = 29;
CaQLParser.RIGHT_BRACE = 30;
CaQLParser.LEFT_PAREN = 31;
CaQLParser.RIGHT_PAREN = 32;
CaQLParser.LEFT_BRACKET = 33;
CaQLParser.RIGHT_BRACKET = 34;
CaQLParser.COMMA = 35;
CaQLParser.LINE_ = 36;
CaQLParser.COLON = 37;
CaQLParser.SUBQUERY_RANGE = 38;
CaQLParser.TIME_RANGE = 39;
CaQLParser.DURATION = 40;
CaQLParser.NAME = 41;
CaQLParser.LIMIT = 42;
CaQLParser.UUID = 43;
CaQLParser.WS = 44;

CaQLParser.RULE_start_ = 0;
CaQLParser.RULE_expression = 1;
CaQLParser.RULE_vectorOperation = 2;
CaQLParser.RULE_unaryOp = 3;
CaQLParser.RULE_powOp = 4;
CaQLParser.RULE_multOp = 5;
CaQLParser.RULE_addOp = 6;
CaQLParser.RULE_compareOp = 7;
CaQLParser.RULE_andUnlessOp = 8;
CaQLParser.RULE_orOp = 9;
CaQLParser.RULE_vectorMatchOp = 10;
CaQLParser.RULE_subqueryOp = 11;
CaQLParser.RULE_offsetOp = 12;
CaQLParser.RULE_parameter = 13;
CaQLParser.RULE_parameterList = 14;
CaQLParser.RULE_metricsAggregation = 15;
CaQLParser.RULE_multMetrics = 16;
CaQLParser.RULE_by = 17;
CaQLParser.RULE_without = 18;
CaQLParser.RULE_grouping = 19;
CaQLParser.RULE_on_ = 20;
CaQLParser.RULE_ignoring = 21;
CaQLParser.RULE_groupLeft = 22;
CaQLParser.RULE_groupRight = 23;
CaQLParser.RULE_name = 24;
CaQLParser.RULE_labelNameList = 25;
CaQLParser.RULE_keyword = 26;
CaQLParser.RULE_literal = 27;

class Start_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CaQLParser.RULE_start_;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EOF() {
	    return this.getToken(CaQLParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterStart_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.exitStart_(this);
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
        this.ruleIndex = CaQLParser.RULE_expression;
    }

	vectorOperation() {
	    return this.getTypedRuleContext(VectorOperationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_vectorOperation;
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

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	LEFT_BRACE() {
	    return this.getToken(CaQLParser.LEFT_BRACE, 0);
	};

	RIGHT_BRACE() {
	    return this.getToken(CaQLParser.RIGHT_BRACE, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CaQLParser.COMMA);
	    } else {
	        return this.getToken(CaQLParser.COMMA, i);
	    }
	};


	LEFT_PAREN() {
	    return this.getToken(CaQLParser.LEFT_PAREN, 0);
	};

	RIGHT_PAREN() {
	    return this.getToken(CaQLParser.RIGHT_PAREN, 0);
	};

	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CaQLParser.STRING);
	    } else {
	        return this.getToken(CaQLParser.STRING, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CaQLParser.NUMBER);
	    } else {
	        return this.getToken(CaQLParser.NUMBER, i);
	    }
	};


	UUID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CaQLParser.UUID);
	    } else {
	        return this.getToken(CaQLParser.UUID, i);
	    }
	};


	metricsAggregation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MetricsAggregationContext);
	    } else {
	        return this.getTypedRuleContext(MetricsAggregationContext,i);
	    }
	};

	LIMIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CaQLParser.LIMIT);
	    } else {
	        return this.getToken(CaQLParser.LIMIT, i);
	    }
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

	powOp() {
	    return this.getTypedRuleContext(PowOpContext,0);
	};

	subqueryOp() {
	    return this.getTypedRuleContext(SubqueryOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterVectorOperation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_unaryOp;
    }

	ADD() {
	    return this.getToken(CaQLParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(CaQLParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterUnaryOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_powOp;
    }

	POW() {
	    return this.getToken(CaQLParser.POW, 0);
	};

	grouping() {
	    return this.getTypedRuleContext(GroupingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterPowOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_multOp;
    }

	MULT() {
	    return this.getToken(CaQLParser.MULT, 0);
	};

	DIV() {
	    return this.getToken(CaQLParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(CaQLParser.MOD, 0);
	};

	grouping() {
	    return this.getTypedRuleContext(GroupingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterMultOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_addOp;
    }

	ADD() {
	    return this.getToken(CaQLParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(CaQLParser.SUB, 0);
	};

	grouping() {
	    return this.getTypedRuleContext(GroupingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterAddOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_compareOp;
    }

	DEQ() {
	    return this.getToken(CaQLParser.DEQ, 0);
	};

	NE() {
	    return this.getToken(CaQLParser.NE, 0);
	};

	GT() {
	    return this.getToken(CaQLParser.GT, 0);
	};

	LT() {
	    return this.getToken(CaQLParser.LT, 0);
	};

	GE() {
	    return this.getToken(CaQLParser.GE, 0);
	};

	LE() {
	    return this.getToken(CaQLParser.LE, 0);
	};

	BOOL() {
	    return this.getToken(CaQLParser.BOOL, 0);
	};

	grouping() {
	    return this.getTypedRuleContext(GroupingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterCompareOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_andUnlessOp;
    }

	AND() {
	    return this.getToken(CaQLParser.AND, 0);
	};

	UNLESS() {
	    return this.getToken(CaQLParser.UNLESS, 0);
	};

	grouping() {
	    return this.getTypedRuleContext(GroupingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterAndUnlessOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_orOp;
    }

	OR() {
	    return this.getToken(CaQLParser.OR, 0);
	};

	grouping() {
	    return this.getTypedRuleContext(GroupingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterOrOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_vectorMatchOp;
    }

	ON() {
	    return this.getToken(CaQLParser.ON, 0);
	};

	UNLESS() {
	    return this.getToken(CaQLParser.UNLESS, 0);
	};

	grouping() {
	    return this.getTypedRuleContext(GroupingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterVectorMatchOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_subqueryOp;
    }

	SUBQUERY_RANGE() {
	    return this.getToken(CaQLParser.SUBQUERY_RANGE, 0);
	};

	offsetOp() {
	    return this.getTypedRuleContext(OffsetOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterSubqueryOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_offsetOp;
    }

	OFFSET() {
	    return this.getToken(CaQLParser.OFFSET, 0);
	};

	DURATION() {
	    return this.getToken(CaQLParser.DURATION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterOffsetOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.exitOffsetOp(this);
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
        this.ruleIndex = CaQLParser.RULE_parameter;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	vectorOperation() {
	    return this.getTypedRuleContext(VectorOperationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_parameterList;
    }

	LEFT_PAREN() {
	    return this.getToken(CaQLParser.LEFT_PAREN, 0);
	};

	RIGHT_PAREN() {
	    return this.getToken(CaQLParser.RIGHT_PAREN, 0);
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
	        return this.getTokens(CaQLParser.COMMA);
	    } else {
	        return this.getToken(CaQLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterParameterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.exitParameterList(this);
		}
	}


}



class MetricsAggregationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CaQLParser.RULE_metricsAggregation;
    }

	LINE_() {
	    return this.getToken(CaQLParser.LINE_, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterMetricsAggregation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.exitMetricsAggregation(this);
		}
	}


}



class MultMetricsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CaQLParser.RULE_multMetrics;
    }

	COMMA() {
	    return this.getToken(CaQLParser.COMMA, 0);
	};

	vectorOperation() {
	    return this.getTypedRuleContext(VectorOperationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterMultMetrics(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.exitMultMetrics(this);
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
        this.ruleIndex = CaQLParser.RULE_by;
    }

	BY() {
	    return this.getToken(CaQLParser.BY, 0);
	};

	labelNameList() {
	    return this.getTypedRuleContext(LabelNameListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterBy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_without;
    }

	WITHOUT() {
	    return this.getToken(CaQLParser.WITHOUT, 0);
	};

	labelNameList() {
	    return this.getTypedRuleContext(LabelNameListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterWithout(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_grouping;
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
	    if(listener instanceof CaQLListener ) {
	        listener.enterGrouping(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_on_;
    }

	ON() {
	    return this.getToken(CaQLParser.ON, 0);
	};

	labelNameList() {
	    return this.getTypedRuleContext(LabelNameListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterOn_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_ignoring;
    }

	IGNORING() {
	    return this.getToken(CaQLParser.IGNORING, 0);
	};

	labelNameList() {
	    return this.getTypedRuleContext(LabelNameListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterIgnoring(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_groupLeft;
    }

	GROUP_LEFT() {
	    return this.getToken(CaQLParser.GROUP_LEFT, 0);
	};

	labelNameList() {
	    return this.getTypedRuleContext(LabelNameListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterGroupLeft(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_groupRight;
    }

	GROUP_RIGHT() {
	    return this.getToken(CaQLParser.GROUP_RIGHT, 0);
	};

	labelNameList() {
	    return this.getTypedRuleContext(LabelNameListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterGroupRight(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.exitGroupRight(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CaQLParser.RULE_name;
    }

	keyword() {
	    return this.getTypedRuleContext(KeywordContext,0);
	};

	NAME() {
	    return this.getToken(CaQLParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.exitName(this);
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
        this.ruleIndex = CaQLParser.RULE_labelNameList;
    }

	LEFT_PAREN() {
	    return this.getToken(CaQLParser.LEFT_PAREN, 0);
	};

	RIGHT_PAREN() {
	    return this.getToken(CaQLParser.RIGHT_PAREN, 0);
	};

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CaQLParser.COMMA);
	    } else {
	        return this.getToken(CaQLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterLabelNameList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_keyword;
    }

	AND() {
	    return this.getToken(CaQLParser.AND, 0);
	};

	OR() {
	    return this.getToken(CaQLParser.OR, 0);
	};

	UNLESS() {
	    return this.getToken(CaQLParser.UNLESS, 0);
	};

	BY() {
	    return this.getToken(CaQLParser.BY, 0);
	};

	WITHOUT() {
	    return this.getToken(CaQLParser.WITHOUT, 0);
	};

	ON() {
	    return this.getToken(CaQLParser.ON, 0);
	};

	IGNORING() {
	    return this.getToken(CaQLParser.IGNORING, 0);
	};

	GROUP_LEFT() {
	    return this.getToken(CaQLParser.GROUP_LEFT, 0);
	};

	GROUP_RIGHT() {
	    return this.getToken(CaQLParser.GROUP_RIGHT, 0);
	};

	OFFSET() {
	    return this.getToken(CaQLParser.OFFSET, 0);
	};

	BOOL() {
	    return this.getToken(CaQLParser.BOOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterKeyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
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
        this.ruleIndex = CaQLParser.RULE_literal;
    }

	NUMBER() {
	    return this.getToken(CaQLParser.NUMBER, 0);
	};

	STRING() {
	    return this.getToken(CaQLParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CaQLListener ) {
	        listener.exitLiteral(this);
		}
	}


}




CaQLParser.Start_Context = Start_Context; 
CaQLParser.ExpressionContext = ExpressionContext; 
CaQLParser.VectorOperationContext = VectorOperationContext; 
CaQLParser.UnaryOpContext = UnaryOpContext; 
CaQLParser.PowOpContext = PowOpContext; 
CaQLParser.MultOpContext = MultOpContext; 
CaQLParser.AddOpContext = AddOpContext; 
CaQLParser.CompareOpContext = CompareOpContext; 
CaQLParser.AndUnlessOpContext = AndUnlessOpContext; 
CaQLParser.OrOpContext = OrOpContext; 
CaQLParser.VectorMatchOpContext = VectorMatchOpContext; 
CaQLParser.SubqueryOpContext = SubqueryOpContext; 
CaQLParser.OffsetOpContext = OffsetOpContext; 
CaQLParser.ParameterContext = ParameterContext; 
CaQLParser.ParameterListContext = ParameterListContext; 
CaQLParser.MetricsAggregationContext = MetricsAggregationContext; 
CaQLParser.MultMetricsContext = MultMetricsContext; 
CaQLParser.ByContext = ByContext; 
CaQLParser.WithoutContext = WithoutContext; 
CaQLParser.GroupingContext = GroupingContext; 
CaQLParser.On_Context = On_Context; 
CaQLParser.IgnoringContext = IgnoringContext; 
CaQLParser.GroupLeftContext = GroupLeftContext; 
CaQLParser.GroupRightContext = GroupRightContext; 
CaQLParser.NameContext = NameContext; 
CaQLParser.LabelNameListContext = LabelNameListContext; 
CaQLParser.KeywordContext = KeywordContext; 
CaQLParser.LiteralContext = LiteralContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
