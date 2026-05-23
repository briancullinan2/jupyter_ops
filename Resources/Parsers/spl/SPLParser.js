// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/spl/SPLParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SPLParserListener from './SPLParserListener.js';
const serializedATN = [4,1,43,224,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,5,0,26,8,
0,10,0,12,0,29,9,0,1,0,1,0,1,1,3,1,34,8,1,1,1,3,1,37,8,1,1,1,4,1,40,8,1,
11,1,12,1,41,1,1,3,1,45,8,1,1,2,1,2,4,2,49,8,2,11,2,12,2,50,1,2,3,2,54,8,
2,1,3,1,3,1,3,1,3,5,3,60,8,3,10,3,12,3,63,9,3,1,3,1,3,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,78,8,4,10,4,12,4,81,9,4,3,4,83,8,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,4,4,112,8,4,11,4,12,4,113,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,129,8,4,1,4,1,4,1,4,1,4,1,4,1,4,5,
4,137,8,4,10,4,12,4,140,9,4,1,5,1,5,1,5,1,5,1,5,1,5,5,5,148,8,5,10,5,12,
5,151,9,5,3,5,153,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,1,5,1,5,4,5,170,8,5,11,5,12,5,171,1,5,3,5,175,8,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,191,8,5,10,5,12,5,194,9,5,1,6,1,
6,1,6,1,6,3,6,200,8,6,1,6,3,6,203,8,6,1,7,3,7,206,8,7,1,7,1,7,3,7,210,8,
7,1,7,3,7,213,8,7,1,8,1,8,1,8,3,8,218,8,8,1,9,1,9,1,10,1,10,1,10,0,2,8,10,
11,0,2,4,6,8,10,12,14,16,18,20,0,6,1,0,27,28,1,0,10,15,2,0,3,3,5,5,1,0,1,
2,3,0,30,30,32,32,34,36,1,0,31,33,258,0,22,1,0,0,0,2,33,1,0,0,0,4,46,1,0,
0,0,6,55,1,0,0,0,8,128,1,0,0,0,10,174,1,0,0,0,12,202,1,0,0,0,14,212,1,0,
0,0,16,217,1,0,0,0,18,219,1,0,0,0,20,221,1,0,0,0,22,27,3,2,1,0,23,24,5,16,
0,0,24,26,3,4,2,0,25,23,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,
0,28,30,1,0,0,0,29,27,1,0,0,0,30,31,5,0,0,1,31,1,1,0,0,0,32,34,5,16,0,0,
33,32,1,0,0,0,33,34,1,0,0,0,34,36,1,0,0,0,35,37,5,31,0,0,36,35,1,0,0,0,36,
37,1,0,0,0,37,39,1,0,0,0,38,40,3,8,4,0,39,38,1,0,0,0,40,41,1,0,0,0,41,39,
1,0,0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,45,3,6,3,0,44,43,1,0,0,0,44,45,1,
0,0,0,45,3,1,0,0,0,46,48,3,20,10,0,47,49,3,8,4,0,48,47,1,0,0,0,49,50,1,0,
0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,53,1,0,0,0,52,54,3,6,3,0,53,52,1,0,0,
0,53,54,1,0,0,0,54,5,1,0,0,0,55,56,5,19,0,0,56,61,3,2,1,0,57,58,5,16,0,0,
58,60,3,4,2,0,59,57,1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,
64,1,0,0,0,63,61,1,0,0,0,64,65,5,20,0,0,65,7,1,0,0,0,66,67,6,4,-1,0,67,68,
3,10,5,0,68,69,5,30,0,0,69,70,3,12,6,0,70,129,1,0,0,0,71,72,3,10,5,0,72,
73,5,29,0,0,73,82,5,17,0,0,74,79,3,10,5,0,75,76,5,21,0,0,76,78,3,10,5,0,
77,75,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,83,1,0,0,0,81,
79,1,0,0,0,82,74,1,0,0,0,82,83,1,0,0,0,83,84,1,0,0,0,84,85,5,18,0,0,85,129,
1,0,0,0,86,87,5,9,0,0,87,129,3,8,4,9,88,89,3,10,5,0,89,90,7,0,0,0,90,91,
3,16,8,0,91,129,1,0,0,0,92,93,3,10,5,0,93,94,3,10,5,0,94,95,5,27,0,0,95,
96,3,16,8,0,96,97,5,21,0,0,97,98,3,16,8,0,98,129,1,0,0,0,99,100,3,10,5,0,
100,101,3,10,5,0,101,102,3,10,5,0,102,103,7,0,0,0,103,104,3,16,8,0,104,105,
5,21,0,0,105,106,3,16,8,0,106,107,5,21,0,0,107,108,3,16,8,0,108,129,1,0,
0,0,109,111,5,26,0,0,110,112,3,16,8,0,111,110,1,0,0,0,112,113,1,0,0,0,113,
111,1,0,0,0,113,114,1,0,0,0,114,129,1,0,0,0,115,116,3,10,5,0,116,117,5,25,
0,0,117,118,3,16,8,0,118,129,1,0,0,0,119,120,3,16,8,0,120,121,7,1,0,0,121,
122,3,10,5,0,122,129,1,0,0,0,123,129,3,10,5,0,124,125,5,17,0,0,125,126,3,
8,4,0,126,127,5,18,0,0,127,129,1,0,0,0,128,66,1,0,0,0,128,71,1,0,0,0,128,
86,1,0,0,0,128,88,1,0,0,0,128,92,1,0,0,0,128,99,1,0,0,0,128,109,1,0,0,0,
128,115,1,0,0,0,128,119,1,0,0,0,128,123,1,0,0,0,128,124,1,0,0,0,129,138,
1,0,0,0,130,131,10,13,0,0,131,132,5,7,0,0,132,137,3,8,4,14,133,134,10,12,
0,0,134,135,5,8,0,0,135,137,3,8,4,13,136,130,1,0,0,0,136,133,1,0,0,0,137,
140,1,0,0,0,138,136,1,0,0,0,138,139,1,0,0,0,139,9,1,0,0,0,140,138,1,0,0,
0,141,142,6,5,-1,0,142,143,3,18,9,0,143,152,5,17,0,0,144,149,3,10,5,0,145,
146,5,21,0,0,146,148,3,10,5,0,147,145,1,0,0,0,148,151,1,0,0,0,149,147,1,
0,0,0,149,150,1,0,0,0,150,153,1,0,0,0,151,149,1,0,0,0,152,144,1,0,0,0,152,
153,1,0,0,0,153,154,1,0,0,0,154,155,5,18,0,0,155,175,1,0,0,0,156,157,5,17,
0,0,157,158,3,10,5,0,158,159,5,18,0,0,159,175,1,0,0,0,160,161,5,3,0,0,161,
162,3,10,5,0,162,163,5,3,0,0,163,175,1,0,0,0,164,165,5,3,0,0,165,175,3,10,
5,6,166,175,5,3,0,0,167,168,5,4,0,0,168,170,3,16,8,0,169,167,1,0,0,0,170,
171,1,0,0,0,171,169,1,0,0,0,171,172,1,0,0,0,172,175,1,0,0,0,173,175,3,12,
6,0,174,141,1,0,0,0,174,156,1,0,0,0,174,160,1,0,0,0,174,164,1,0,0,0,174,
166,1,0,0,0,174,169,1,0,0,0,174,173,1,0,0,0,175,192,1,0,0,0,176,177,10,10,
0,0,177,178,5,6,0,0,178,191,3,10,5,10,179,180,10,9,0,0,180,181,7,2,0,0,181,
191,3,10,5,10,182,183,10,8,0,0,183,184,5,4,0,0,184,191,3,10,5,9,185,186,
10,2,0,0,186,187,7,3,0,0,187,191,3,10,5,3,188,189,10,5,0,0,189,191,5,3,0,
0,190,176,1,0,0,0,190,179,1,0,0,0,190,182,1,0,0,0,190,185,1,0,0,0,190,188,
1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,0,192,193,1,0,0,0,193,11,1,0,0,0,194,
192,1,0,0,0,195,203,3,14,7,0,196,203,5,39,0,0,197,203,3,16,8,0,198,200,7,
3,0,0,199,198,1,0,0,0,199,200,1,0,0,0,200,201,1,0,0,0,201,203,5,38,0,0,202,
195,1,0,0,0,202,196,1,0,0,0,202,197,1,0,0,0,202,199,1,0,0,0,203,13,1,0,0,
0,204,206,5,24,0,0,205,204,1,0,0,0,205,206,1,0,0,0,206,207,1,0,0,0,207,209,
5,35,0,0,208,210,5,24,0,0,209,208,1,0,0,0,209,210,1,0,0,0,210,213,1,0,0,
0,211,213,5,37,0,0,212,205,1,0,0,0,212,211,1,0,0,0,213,15,1,0,0,0,214,218,
5,40,0,0,215,218,3,20,10,0,216,218,3,18,9,0,217,214,1,0,0,0,217,215,1,0,
0,0,217,216,1,0,0,0,218,17,1,0,0,0,219,220,7,4,0,0,220,19,1,0,0,0,221,222,
7,5,0,0,222,21,1,0,0,0,26,27,33,36,41,44,50,53,61,79,82,113,128,136,138,
149,152,171,174,190,192,199,202,205,209,212,217];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SPLParser extends antlr4.Parser {

    static grammarFileName = "SPLParser.g4";
    static literalNames = [ null, "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", 
                            "'AND'", "'OR'", "'NOT'", "'='", "'!='", "'>'", 
                            "'<'", "'>='", "'<='", "'|'", "'('", "')'", 
                            "'['", "']'", "','", "':'", "'@'", "'\"'", "'AS'", 
                            "'BY'", "'OUTPUT'", "'OUTPUTNEW'", "'IN'", "'LIKE'", 
                            null, null, null, null, "'now'" ];
    static symbolicNames = [ null, "ADD", "SUB", "MULT", "DIV", "MOD", "POW", 
                             "AND", "OR", "NOT", "EQ", "NE", "GT", "LT", 
                             "GE", "LE", "PIPE", "LPAREN", "RPAREN", "LBRACK", 
                             "RBRACK", "COMMA", "COLON", "AT", "QUOTE", 
                             "AS", "BY", "OUTPUT", "OUTPUTNEW", "IN", "LIKE", 
                             "INIT_COMMAND", "STD_COMMAND_AND_FUNCTION", 
                             "STD_COMMAND", "MODIFIER_AND_FUNCTION", "TIME_AND_FUNCTION", 
                             "FUNCTION", "TIME", "NUMBER", "STRING", "IDENTIFIER", 
                             "WS", "LINE_COMMENT", "BLOCK_COMMENT" ];
    static ruleNames = [ "query", "initCommand", "nextCommand", "subquery", 
                         "operation", "expression", "value", "date", "id", 
                         "function", "command" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SPLParser.ruleNames;
        this.literalNames = SPLParser.literalNames;
        this.symbolicNames = SPLParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.operation_sempred(localctx, predIndex);
    	case 5:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    operation_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 13);
    		case 1:
    			return this.precpred(this._ctx, 12);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 10);
    		case 3:
    			return this.precpred(this._ctx, 9);
    		case 4:
    			return this.precpred(this._ctx, 8);
    		case 5:
    			return this.precpred(this._ctx, 2);
    		case 6:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SPLParser.RULE_query);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.initCommand();
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 23;
	            this.match(SPLParser.PIPE);
	            this.state = 24;
	            this.nextCommand();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 30;
	        this.match(SPLParser.EOF);
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



	initCommand() {
	    let localctx = new InitCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SPLParser.RULE_initCommand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 32;
	            this.match(SPLParser.PIPE);
	        }

	        this.state = 36;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 35;
	            this.match(SPLParser.INIT_COMMAND);

	        }
	        this.state = 39; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 38;
	            this.operation(0);
	            this.state = 41; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3305243166) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 511) !== 0));
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 43;
	            this.subquery();
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



	nextCommand() {
	    let localctx = new NextCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SPLParser.RULE_nextCommand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.command();
	        this.state = 48; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 47;
	            this.operation(0);
	            this.state = 50; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3305243166) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 511) !== 0));
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 52;
	            this.subquery();
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



	subquery() {
	    let localctx = new SubqueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SPLParser.RULE_subquery);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(SPLParser.LBRACK);
	        this.state = 56;
	        this.initCommand();
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 57;
	            this.match(SPLParser.PIPE);
	            this.state = 58;
	            this.nextCommand();
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 64;
	        this.match(SPLParser.RBRACK);
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


	operation(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new OperationContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, SPLParser.RULE_operation, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 67;
	            this.expression(0);
	            this.state = 68;
	            this.match(SPLParser.LIKE);
	            this.state = 69;
	            this.value();
	            break;

	        case 2:
	            this.state = 71;
	            this.expression(0);
	            this.state = 72;
	            this.match(SPLParser.IN);
	            this.state = 73;
	            this.match(SPLParser.LPAREN);
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3238133790) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 511) !== 0)) {
	                this.state = 74;
	                this.expression(0);
	                this.state = 79;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===21) {
	                    this.state = 75;
	                    this.match(SPLParser.COMMA);
	                    this.state = 76;
	                    this.expression(0);
	                    this.state = 81;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 84;
	            this.match(SPLParser.RPAREN);
	            break;

	        case 3:
	            this.state = 86;
	            this.match(SPLParser.NOT);
	            this.state = 87;
	            this.operation(9);
	            break;

	        case 4:
	            this.state = 88;
	            this.expression(0);
	            this.state = 89;
	            _la = this._input.LA(1);
	            if(!(_la===27 || _la===28)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 90;
	            this.id();
	            break;

	        case 5:
	            this.state = 92;
	            this.expression(0);
	            this.state = 93;
	            this.expression(0);
	            this.state = 94;
	            this.match(SPLParser.OUTPUT);
	            this.state = 95;
	            this.id();
	            this.state = 96;
	            this.match(SPLParser.COMMA);
	            this.state = 97;
	            this.id();
	            break;

	        case 6:
	            this.state = 99;
	            this.expression(0);
	            this.state = 100;
	            this.expression(0);
	            this.state = 101;
	            this.expression(0);
	            this.state = 102;
	            _la = this._input.LA(1);
	            if(!(_la===27 || _la===28)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 103;
	            this.id();
	            this.state = 104;
	            this.match(SPLParser.COMMA);
	            this.state = 105;
	            this.id();
	            this.state = 106;
	            this.match(SPLParser.COMMA);
	            this.state = 107;
	            this.id();
	            break;

	        case 7:
	            this.state = 109;
	            this.match(SPLParser.BY);
	            this.state = 111; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 110;
	            		this.id();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 113; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,10, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 8:
	            this.state = 115;
	            this.expression(0);
	            this.state = 116;
	            this.match(SPLParser.AS);
	            this.state = 117;
	            this.id();
	            break;

	        case 9:
	            this.state = 119;
	            this.id();
	            this.state = 120;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 64512) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 121;
	            this.expression(0);
	            break;

	        case 10:
	            this.state = 123;
	            this.expression(0);
	            break;

	        case 11:
	            this.state = 124;
	            this.match(SPLParser.LPAREN);
	            this.state = 125;
	            this.operation(0);
	            this.state = 126;
	            this.match(SPLParser.RPAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 138;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 136;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new OperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SPLParser.RULE_operation);
	                    this.state = 130;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 131;
	                    this.match(SPLParser.AND);
	                    this.state = 132;
	                    this.operation(14);
	                    break;

	                case 2:
	                    localctx = new OperationContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SPLParser.RULE_operation);
	                    this.state = 133;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 134;
	                    this.match(SPLParser.OR);
	                    this.state = 135;
	                    this.operation(13);
	                    break;

	                } 
	            }
	            this.state = 140;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, SPLParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 142;
	            this.function_();
	            this.state = 143;
	            this.match(SPLParser.LPAREN);
	            this.state = 152;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3238133790) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 511) !== 0)) {
	                this.state = 144;
	                this.expression(0);
	                this.state = 149;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===21) {
	                    this.state = 145;
	                    this.match(SPLParser.COMMA);
	                    this.state = 146;
	                    this.expression(0);
	                    this.state = 151;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 154;
	            this.match(SPLParser.RPAREN);
	            break;

	        case 2:
	            this.state = 156;
	            this.match(SPLParser.LPAREN);
	            this.state = 157;
	            this.expression(0);
	            this.state = 158;
	            this.match(SPLParser.RPAREN);
	            break;

	        case 3:
	            this.state = 160;
	            this.match(SPLParser.MULT);
	            this.state = 161;
	            this.expression(0);
	            this.state = 162;
	            this.match(SPLParser.MULT);
	            break;

	        case 4:
	            this.state = 164;
	            this.match(SPLParser.MULT);
	            this.state = 165;
	            this.expression(6);
	            break;

	        case 5:
	            this.state = 166;
	            this.match(SPLParser.MULT);
	            break;

	        case 6:
	            this.state = 169; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 167;
	            		this.match(SPLParser.DIV);
	            		this.state = 168;
	            		this.id();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 171; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,16, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 7:
	            this.state = 173;
	            this.value();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 192;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 190;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SPLParser.RULE_expression);
	                    this.state = 176;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 177;
	                    this.match(SPLParser.POW);
	                    this.state = 178;
	                    this.expression(10);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SPLParser.RULE_expression);
	                    this.state = 179;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 180;
	                    _la = this._input.LA(1);
	                    if(!(_la===3 || _la===5)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 181;
	                    this.expression(10);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SPLParser.RULE_expression);
	                    this.state = 182;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 183;
	                    this.match(SPLParser.DIV);
	                    this.state = 184;
	                    this.expression(9);
	                    break;

	                case 4:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SPLParser.RULE_expression);
	                    this.state = 185;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 186;
	                    _la = this._input.LA(1);
	                    if(!(_la===1 || _la===2)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 187;
	                    this.expression(3);
	                    break;

	                case 5:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, SPLParser.RULE_expression);
	                    this.state = 188;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 189;
	                    this.match(SPLParser.MULT);
	                    break;

	                } 
	            }
	            this.state = 194;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SPLParser.RULE_value);
	    var _la = 0;
	    try {
	        this.state = 202;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 195;
	            this.date();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 196;
	            this.match(SPLParser.STRING);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 197;
	            this.id();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 199;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1 || _la===2) {
	                this.state = 198;
	                _la = this._input.LA(1);
	                if(!(_la===1 || _la===2)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 201;
	            this.match(SPLParser.NUMBER);
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



	date() {
	    let localctx = new DateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SPLParser.RULE_date);
	    var _la = 0;
	    try {
	        this.state = 212;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	        case 35:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 205;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===24) {
	                this.state = 204;
	                this.match(SPLParser.QUOTE);
	            }

	            this.state = 207;
	            this.match(SPLParser.TIME_AND_FUNCTION);
	            this.state = 209;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	            if(la_===1) {
	                this.state = 208;
	                this.match(SPLParser.QUOTE);

	            }
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 211;
	            this.match(SPLParser.TIME);
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



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SPLParser.RULE_id);
	    try {
	        this.state = 217;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 214;
	            this.match(SPLParser.IDENTIFIER);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 215;
	            this.command();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 216;
	            this.function_();
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
	    let localctx = new FunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SPLParser.RULE_function);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        _la = this._input.LA(1);
	        if(!(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 117) !== 0))) {
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



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SPLParser.RULE_command);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        _la = this._input.LA(1);
	        if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0))) {
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

SPLParser.EOF = antlr4.Token.EOF;
SPLParser.ADD = 1;
SPLParser.SUB = 2;
SPLParser.MULT = 3;
SPLParser.DIV = 4;
SPLParser.MOD = 5;
SPLParser.POW = 6;
SPLParser.AND = 7;
SPLParser.OR = 8;
SPLParser.NOT = 9;
SPLParser.EQ = 10;
SPLParser.NE = 11;
SPLParser.GT = 12;
SPLParser.LT = 13;
SPLParser.GE = 14;
SPLParser.LE = 15;
SPLParser.PIPE = 16;
SPLParser.LPAREN = 17;
SPLParser.RPAREN = 18;
SPLParser.LBRACK = 19;
SPLParser.RBRACK = 20;
SPLParser.COMMA = 21;
SPLParser.COLON = 22;
SPLParser.AT = 23;
SPLParser.QUOTE = 24;
SPLParser.AS = 25;
SPLParser.BY = 26;
SPLParser.OUTPUT = 27;
SPLParser.OUTPUTNEW = 28;
SPLParser.IN = 29;
SPLParser.LIKE = 30;
SPLParser.INIT_COMMAND = 31;
SPLParser.STD_COMMAND_AND_FUNCTION = 32;
SPLParser.STD_COMMAND = 33;
SPLParser.MODIFIER_AND_FUNCTION = 34;
SPLParser.TIME_AND_FUNCTION = 35;
SPLParser.FUNCTION = 36;
SPLParser.TIME = 37;
SPLParser.NUMBER = 38;
SPLParser.STRING = 39;
SPLParser.IDENTIFIER = 40;
SPLParser.WS = 41;
SPLParser.LINE_COMMENT = 42;
SPLParser.BLOCK_COMMENT = 43;

SPLParser.RULE_query = 0;
SPLParser.RULE_initCommand = 1;
SPLParser.RULE_nextCommand = 2;
SPLParser.RULE_subquery = 3;
SPLParser.RULE_operation = 4;
SPLParser.RULE_expression = 5;
SPLParser.RULE_value = 6;
SPLParser.RULE_date = 7;
SPLParser.RULE_id = 8;
SPLParser.RULE_function = 9;
SPLParser.RULE_command = 10;

class QueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SPLParser.RULE_query;
    }

	initCommand() {
	    return this.getTypedRuleContext(InitCommandContext,0);
	};

	EOF() {
	    return this.getToken(SPLParser.EOF, 0);
	};

	PIPE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SPLParser.PIPE);
	    } else {
	        return this.getToken(SPLParser.PIPE, i);
	    }
	};


	nextCommand = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NextCommandContext);
	    } else {
	        return this.getTypedRuleContext(NextCommandContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.enterQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.exitQuery(this);
		}
	}


}



class InitCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SPLParser.RULE_initCommand;
    }

	PIPE() {
	    return this.getToken(SPLParser.PIPE, 0);
	};

	INIT_COMMAND() {
	    return this.getToken(SPLParser.INIT_COMMAND, 0);
	};

	operation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperationContext);
	    } else {
	        return this.getTypedRuleContext(OperationContext,i);
	    }
	};

	subquery() {
	    return this.getTypedRuleContext(SubqueryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.enterInitCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.exitInitCommand(this);
		}
	}


}



class NextCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SPLParser.RULE_nextCommand;
    }

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	operation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperationContext);
	    } else {
	        return this.getTypedRuleContext(OperationContext,i);
	    }
	};

	subquery() {
	    return this.getTypedRuleContext(SubqueryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.enterNextCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.exitNextCommand(this);
		}
	}


}



class SubqueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SPLParser.RULE_subquery;
    }

	LBRACK() {
	    return this.getToken(SPLParser.LBRACK, 0);
	};

	initCommand() {
	    return this.getTypedRuleContext(InitCommandContext,0);
	};

	RBRACK() {
	    return this.getToken(SPLParser.RBRACK, 0);
	};

	PIPE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SPLParser.PIPE);
	    } else {
	        return this.getToken(SPLParser.PIPE, i);
	    }
	};


	nextCommand = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NextCommandContext);
	    } else {
	        return this.getTypedRuleContext(NextCommandContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.enterSubquery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.exitSubquery(this);
		}
	}


}



class OperationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SPLParser.RULE_operation;
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

	LIKE() {
	    return this.getToken(SPLParser.LIKE, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	IN() {
	    return this.getToken(SPLParser.IN, 0);
	};

	LPAREN() {
	    return this.getToken(SPLParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(SPLParser.RPAREN, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SPLParser.COMMA);
	    } else {
	        return this.getToken(SPLParser.COMMA, i);
	    }
	};


	NOT() {
	    return this.getToken(SPLParser.NOT, 0);
	};

	operation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperationContext);
	    } else {
	        return this.getTypedRuleContext(OperationContext,i);
	    }
	};

	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	OUTPUT() {
	    return this.getToken(SPLParser.OUTPUT, 0);
	};

	OUTPUTNEW() {
	    return this.getToken(SPLParser.OUTPUTNEW, 0);
	};

	BY() {
	    return this.getToken(SPLParser.BY, 0);
	};

	AS() {
	    return this.getToken(SPLParser.AS, 0);
	};

	EQ() {
	    return this.getToken(SPLParser.EQ, 0);
	};

	NE() {
	    return this.getToken(SPLParser.NE, 0);
	};

	GT() {
	    return this.getToken(SPLParser.GT, 0);
	};

	LT() {
	    return this.getToken(SPLParser.LT, 0);
	};

	GE() {
	    return this.getToken(SPLParser.GE, 0);
	};

	LE() {
	    return this.getToken(SPLParser.LE, 0);
	};

	AND() {
	    return this.getToken(SPLParser.AND, 0);
	};

	OR() {
	    return this.getToken(SPLParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.enterOperation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.exitOperation(this);
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
        this.ruleIndex = SPLParser.RULE_expression;
    }

	function_() {
	    return this.getTypedRuleContext(FunctionContext,0);
	};

	LPAREN() {
	    return this.getToken(SPLParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(SPLParser.RPAREN, 0);
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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SPLParser.COMMA);
	    } else {
	        return this.getToken(SPLParser.COMMA, i);
	    }
	};


	MULT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SPLParser.MULT);
	    } else {
	        return this.getToken(SPLParser.MULT, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SPLParser.DIV);
	    } else {
	        return this.getToken(SPLParser.DIV, i);
	    }
	};


	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	POW() {
	    return this.getToken(SPLParser.POW, 0);
	};

	MOD() {
	    return this.getToken(SPLParser.MOD, 0);
	};

	ADD() {
	    return this.getToken(SPLParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(SPLParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.exitExpression(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SPLParser.RULE_value;
    }

	date() {
	    return this.getTypedRuleContext(DateContext,0);
	};

	STRING() {
	    return this.getToken(SPLParser.STRING, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	NUMBER() {
	    return this.getToken(SPLParser.NUMBER, 0);
	};

	ADD() {
	    return this.getToken(SPLParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(SPLParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.exitValue(this);
		}
	}


}



class DateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SPLParser.RULE_date;
    }

	TIME_AND_FUNCTION() {
	    return this.getToken(SPLParser.TIME_AND_FUNCTION, 0);
	};

	QUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SPLParser.QUOTE);
	    } else {
	        return this.getToken(SPLParser.QUOTE, i);
	    }
	};


	TIME() {
	    return this.getToken(SPLParser.TIME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.enterDate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.exitDate(this);
		}
	}


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SPLParser.RULE_id;
    }

	IDENTIFIER() {
	    return this.getToken(SPLParser.IDENTIFIER, 0);
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	function_() {
	    return this.getTypedRuleContext(FunctionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.exitId(this);
		}
	}


}



class FunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SPLParser.RULE_function;
    }

	FUNCTION() {
	    return this.getToken(SPLParser.FUNCTION, 0);
	};

	STD_COMMAND_AND_FUNCTION() {
	    return this.getToken(SPLParser.STD_COMMAND_AND_FUNCTION, 0);
	};

	MODIFIER_AND_FUNCTION() {
	    return this.getToken(SPLParser.MODIFIER_AND_FUNCTION, 0);
	};

	TIME_AND_FUNCTION() {
	    return this.getToken(SPLParser.TIME_AND_FUNCTION, 0);
	};

	LIKE() {
	    return this.getToken(SPLParser.LIKE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.exitFunction(this);
		}
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SPLParser.RULE_command;
    }

	INIT_COMMAND() {
	    return this.getToken(SPLParser.INIT_COMMAND, 0);
	};

	STD_COMMAND() {
	    return this.getToken(SPLParser.STD_COMMAND, 0);
	};

	STD_COMMAND_AND_FUNCTION() {
	    return this.getToken(SPLParser.STD_COMMAND_AND_FUNCTION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SPLParserListener ) {
	        listener.exitCommand(this);
		}
	}


}




SPLParser.QueryContext = QueryContext; 
SPLParser.InitCommandContext = InitCommandContext; 
SPLParser.NextCommandContext = NextCommandContext; 
SPLParser.SubqueryContext = SubqueryContext; 
SPLParser.OperationContext = OperationContext; 
SPLParser.ExpressionContext = ExpressionContext; 
SPLParser.ValueContext = ValueContext; 
SPLParser.DateContext = DateContext; 
SPLParser.IdContext = IdContext; 
SPLParser.FunctionContext = FunctionContext; 
SPLParser.CommandContext = CommandContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
