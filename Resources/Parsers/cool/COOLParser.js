// Generated from Resources/Parsers/cool/COOL.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import COOLListener from './COOLListener.js';
const serializedATN = [4,1,47,215,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,20,8,1,1,2,1,2,1,2,1,2,3,2,26,
8,2,1,2,1,2,1,2,1,2,5,2,32,8,2,10,2,12,2,35,9,2,1,2,1,2,1,3,1,3,1,3,1,3,
1,3,5,3,44,8,3,10,3,12,3,47,9,3,3,3,49,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,3,3,63,8,3,3,3,65,8,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,
1,5,1,5,5,5,77,8,5,10,5,12,5,80,9,5,3,5,82,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,4,5,103,8,5,11,5,12,5,
104,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,115,8,5,1,5,1,5,1,5,1,5,1,5,1,5,
3,5,123,8,5,5,5,125,8,5,10,5,12,5,128,9,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,4,5,142,8,5,11,5,12,5,143,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,168,8,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,3,5,194,8,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,202,8,5,
10,5,12,5,205,9,5,3,5,207,8,5,1,5,5,5,210,8,5,10,5,12,5,213,9,5,1,5,0,1,
10,6,0,2,4,6,8,10,0,0,249,0,12,1,0,0,0,2,19,1,0,0,0,4,21,1,0,0,0,6,64,1,
0,0,0,8,66,1,0,0,0,10,167,1,0,0,0,12,13,3,2,1,0,13,1,1,0,0,0,14,15,3,4,2,
0,15,16,5,1,0,0,16,17,3,2,1,0,17,20,1,0,0,0,18,20,5,0,0,1,19,14,1,0,0,0,
19,18,1,0,0,0,20,3,1,0,0,0,21,22,5,10,0,0,22,25,5,31,0,0,23,24,5,16,0,0,
24,26,5,31,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,27,1,0,0,0,27,33,5,2,0,0,28,
29,3,6,3,0,29,30,5,1,0,0,30,32,1,0,0,0,31,28,1,0,0,0,32,35,1,0,0,0,33,31,
1,0,0,0,33,34,1,0,0,0,34,36,1,0,0,0,35,33,1,0,0,0,36,37,5,3,0,0,37,5,1,0,
0,0,38,39,5,32,0,0,39,48,5,4,0,0,40,45,3,8,4,0,41,42,5,5,0,0,42,44,3,8,4,
0,43,41,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,49,1,0,0,0,
47,45,1,0,0,0,48,40,1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,0,50,51,5,6,0,0,51,
52,5,7,0,0,52,53,5,31,0,0,53,54,5,2,0,0,54,55,3,10,5,0,55,56,5,3,0,0,56,
65,1,0,0,0,57,58,5,32,0,0,58,59,5,7,0,0,59,62,5,31,0,0,60,61,5,33,0,0,61,
63,3,10,5,0,62,60,1,0,0,0,62,63,1,0,0,0,63,65,1,0,0,0,64,38,1,0,0,0,64,57,
1,0,0,0,65,7,1,0,0,0,66,67,5,32,0,0,67,68,5,7,0,0,68,69,5,31,0,0,69,9,1,
0,0,0,70,71,6,5,-1,0,71,72,5,32,0,0,72,81,5,4,0,0,73,78,3,10,5,0,74,75,5,
5,0,0,75,77,3,10,5,0,76,74,1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,
0,0,79,82,1,0,0,0,80,78,1,0,0,0,81,73,1,0,0,0,81,82,1,0,0,0,82,83,1,0,0,
0,83,168,5,6,0,0,84,85,5,14,0,0,85,86,3,10,5,0,86,87,5,21,0,0,87,88,3,10,
5,0,88,89,5,11,0,0,89,90,3,10,5,0,90,91,5,13,0,0,91,168,1,0,0,0,92,93,5,
22,0,0,93,94,3,10,5,0,94,95,5,19,0,0,95,96,3,10,5,0,96,97,5,20,0,0,97,168,
1,0,0,0,98,102,5,2,0,0,99,100,3,10,5,0,100,101,5,1,0,0,101,103,1,0,0,0,102,
99,1,0,0,0,103,104,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,106,1,0,0,
0,106,107,5,3,0,0,107,168,1,0,0,0,108,109,5,18,0,0,109,110,5,32,0,0,110,
111,5,7,0,0,111,114,5,31,0,0,112,113,5,33,0,0,113,115,3,10,5,0,114,112,1,
0,0,0,114,115,1,0,0,0,115,126,1,0,0,0,116,117,5,5,0,0,117,118,5,32,0,0,118,
119,5,7,0,0,119,122,5,31,0,0,120,121,5,33,0,0,121,123,3,10,5,0,122,120,1,
0,0,0,122,123,1,0,0,0,123,125,1,0,0,0,124,116,1,0,0,0,125,128,1,0,0,0,126,
124,1,0,0,0,126,127,1,0,0,0,127,129,1,0,0,0,128,126,1,0,0,0,129,130,5,15,
0,0,130,168,3,10,5,20,131,132,5,23,0,0,132,133,3,10,5,0,133,141,5,26,0,0,
134,135,5,32,0,0,135,136,5,7,0,0,136,137,5,31,0,0,137,138,5,34,0,0,138,139,
3,10,5,0,139,140,5,1,0,0,140,142,1,0,0,0,141,134,1,0,0,0,142,143,1,0,0,0,
143,141,1,0,0,0,143,144,1,0,0,0,144,145,1,0,0,0,145,146,5,24,0,0,146,168,
1,0,0,0,147,148,5,25,0,0,148,168,5,31,0,0,149,150,5,42,0,0,150,168,3,10,
5,17,151,152,5,17,0,0,152,168,3,10,5,16,153,154,5,27,0,0,154,168,3,10,5,
8,155,156,5,4,0,0,156,157,3,10,5,0,157,158,5,6,0,0,158,168,1,0,0,0,159,168,
5,32,0,0,160,168,5,30,0,0,161,168,5,29,0,0,162,168,5,28,0,0,163,168,5,12,
0,0,164,165,5,32,0,0,165,166,5,33,0,0,166,168,3,10,5,1,167,70,1,0,0,0,167,
84,1,0,0,0,167,92,1,0,0,0,167,98,1,0,0,0,167,108,1,0,0,0,167,131,1,0,0,0,
167,147,1,0,0,0,167,149,1,0,0,0,167,151,1,0,0,0,167,153,1,0,0,0,167,155,
1,0,0,0,167,159,1,0,0,0,167,160,1,0,0,0,167,161,1,0,0,0,167,162,1,0,0,0,
167,163,1,0,0,0,167,164,1,0,0,0,168,211,1,0,0,0,169,170,10,15,0,0,170,171,
5,37,0,0,171,210,3,10,5,16,172,173,10,14,0,0,173,174,5,38,0,0,174,210,3,
10,5,15,175,176,10,13,0,0,176,177,5,35,0,0,177,210,3,10,5,14,178,179,10,
12,0,0,179,180,5,36,0,0,180,210,3,10,5,13,181,182,10,11,0,0,182,183,5,39,
0,0,183,210,3,10,5,12,184,185,10,10,0,0,185,186,5,40,0,0,186,210,3,10,5,
11,187,188,10,9,0,0,188,189,5,41,0,0,189,210,3,10,5,10,190,193,10,25,0,0,
191,192,5,8,0,0,192,194,5,31,0,0,193,191,1,0,0,0,193,194,1,0,0,0,194,195,
1,0,0,0,195,196,5,9,0,0,196,197,5,32,0,0,197,206,5,4,0,0,198,203,3,10,5,
0,199,200,5,5,0,0,200,202,3,10,5,0,201,199,1,0,0,0,202,205,1,0,0,0,203,201,
1,0,0,0,203,204,1,0,0,0,204,207,1,0,0,0,205,203,1,0,0,0,206,198,1,0,0,0,
206,207,1,0,0,0,207,208,1,0,0,0,208,210,5,6,0,0,209,169,1,0,0,0,209,172,
1,0,0,0,209,175,1,0,0,0,209,178,1,0,0,0,209,181,1,0,0,0,209,184,1,0,0,0,
209,187,1,0,0,0,209,190,1,0,0,0,210,213,1,0,0,0,211,209,1,0,0,0,211,212,
1,0,0,0,212,11,1,0,0,0,213,211,1,0,0,0,20,19,25,33,45,48,62,64,78,81,104,
114,122,126,143,167,193,203,206,209,211];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class COOLParser extends antlr4.Parser {

    static grammarFileName = "COOL.g4";
    static literalNames = [ null, "';'", "'{'", "'}'", "'('", "','", "')'", 
                            "':'", "'@'", "'.'", null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, "'<-'", "'=>'", "'+'", "'-'", 
                            "'*'", "'/'", "'<'", "'<='", "'='", "'~'", "'(*'", 
                            "'*)'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "CLASS", "ELSE", "FALSE", "FI", 
                             "IF", "IN", "INHERITS", "ISVOID", "LET", "LOOP", 
                             "POOL", "THEN", "WHILE", "CASE", "ESAC", "NEW", 
                             "OF", "NOT", "TRUE", "STRING", "INT", "TYPEID", 
                             "OBJECTID", "ASSIGNMENT", "CASE_ARROW", "ADD", 
                             "MINUS", "MULTIPLY", "DIVISION", "LESS_THAN", 
                             "LESS_EQUAL", "EQUAL", "INTEGER_NEGATIVE", 
                             "OPEN_COMMENT", "CLOSE_COMMENT", "COMMENT", 
                             "ONE_LINE_COMMENT", "WHITESPACE" ];
    static ruleNames = [ "program", "programBlocks", "classDefine", "feature", 
                         "formal", "expression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = COOLParser.ruleNames;
        this.literalNames = COOLParser.literalNames;
        this.symbolicNames = COOLParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 5:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 15);
    		case 1:
    			return this.precpred(this._ctx, 14);
    		case 2:
    			return this.precpred(this._ctx, 13);
    		case 3:
    			return this.precpred(this._ctx, 12);
    		case 4:
    			return this.precpred(this._ctx, 11);
    		case 5:
    			return this.precpred(this._ctx, 10);
    		case 6:
    			return this.precpred(this._ctx, 9);
    		case 7:
    			return this.precpred(this._ctx, 25);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, COOLParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.programBlocks();
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



	programBlocks() {
	    let localctx = new ProgramBlocksContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, COOLParser.RULE_programBlocks);
	    try {
	        this.state = 19;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case COOLParser.CLASS:
	            localctx = new ClassesContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 14;
	            this.classDefine();
	            this.state = 15;
	            this.match(COOLParser.T__0);
	            this.state = 16;
	            this.programBlocks();
	            break;
	        case COOLParser.EOF:
	            localctx = new EofContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 18;
	            this.match(COOLParser.EOF);
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



	classDefine() {
	    let localctx = new ClassDefineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, COOLParser.RULE_classDefine);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(COOLParser.CLASS);
	        this.state = 22;
	        this.match(COOLParser.TYPEID);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===COOLParser.INHERITS) {
	            this.state = 23;
	            this.match(COOLParser.INHERITS);
	            this.state = 24;
	            this.match(COOLParser.TYPEID);
	        }

	        this.state = 27;
	        this.match(COOLParser.T__1);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===COOLParser.OBJECTID) {
	            this.state = 28;
	            this.feature();
	            this.state = 29;
	            this.match(COOLParser.T__0);
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 36;
	        this.match(COOLParser.T__2);
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



	feature() {
	    let localctx = new FeatureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, COOLParser.RULE_feature);
	    var _la = 0; // Token type
	    try {
	        this.state = 64;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new MethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.match(COOLParser.OBJECTID);
	            this.state = 39;
	            this.match(COOLParser.T__3);
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===COOLParser.OBJECTID) {
	                this.state = 40;
	                this.formal();
	                this.state = 45;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===COOLParser.T__4) {
	                    this.state = 41;
	                    this.match(COOLParser.T__4);
	                    this.state = 42;
	                    this.formal();
	                    this.state = 47;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 50;
	            this.match(COOLParser.T__5);
	            this.state = 51;
	            this.match(COOLParser.T__6);
	            this.state = 52;
	            this.match(COOLParser.TYPEID);
	            this.state = 53;
	            this.match(COOLParser.T__1);
	            this.state = 54;
	            this.expression(0);
	            this.state = 55;
	            this.match(COOLParser.T__2);
	            break;

	        case 2:
	            localctx = new PropertyContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.match(COOLParser.OBJECTID);
	            this.state = 58;
	            this.match(COOLParser.T__6);
	            this.state = 59;
	            this.match(COOLParser.TYPEID);
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===COOLParser.ASSIGNMENT) {
	                this.state = 60;
	                this.match(COOLParser.ASSIGNMENT);
	                this.state = 61;
	                this.expression(0);
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



	formal() {
	    let localctx = new FormalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, COOLParser.RULE_formal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(COOLParser.OBJECTID);
	        this.state = 67;
	        this.match(COOLParser.T__6);
	        this.state = 68;
	        this.match(COOLParser.TYPEID);
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
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, COOLParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OwnMethodCallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 71;
	            this.match(COOLParser.OBJECTID);
	            this.state = 72;
	            this.match(COOLParser.T__3);
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << COOLParser.T__1) | (1 << COOLParser.T__3) | (1 << COOLParser.FALSE) | (1 << COOLParser.IF) | (1 << COOLParser.ISVOID) | (1 << COOLParser.LET) | (1 << COOLParser.WHILE) | (1 << COOLParser.CASE) | (1 << COOLParser.NEW) | (1 << COOLParser.NOT) | (1 << COOLParser.TRUE) | (1 << COOLParser.STRING) | (1 << COOLParser.INT))) !== 0) || _la===COOLParser.OBJECTID || _la===COOLParser.INTEGER_NEGATIVE) {
	                this.state = 73;
	                this.expression(0);
	                this.state = 78;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===COOLParser.T__4) {
	                    this.state = 74;
	                    this.match(COOLParser.T__4);
	                    this.state = 75;
	                    this.expression(0);
	                    this.state = 80;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 83;
	            this.match(COOLParser.T__5);
	            break;

	        case 2:
	            localctx = new IfContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 84;
	            this.match(COOLParser.IF);
	            this.state = 85;
	            this.expression(0);
	            this.state = 86;
	            this.match(COOLParser.THEN);
	            this.state = 87;
	            this.expression(0);
	            this.state = 88;
	            this.match(COOLParser.ELSE);
	            this.state = 89;
	            this.expression(0);
	            this.state = 90;
	            this.match(COOLParser.FI);
	            break;

	        case 3:
	            localctx = new WhileContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 92;
	            this.match(COOLParser.WHILE);
	            this.state = 93;
	            this.expression(0);
	            this.state = 94;
	            this.match(COOLParser.LOOP);
	            this.state = 95;
	            this.expression(0);
	            this.state = 96;
	            this.match(COOLParser.POOL);
	            break;

	        case 4:
	            localctx = new BlockContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 98;
	            this.match(COOLParser.T__1);
	            this.state = 102; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 99;
	                this.expression(0);
	                this.state = 100;
	                this.match(COOLParser.T__0);
	                this.state = 104; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << COOLParser.T__1) | (1 << COOLParser.T__3) | (1 << COOLParser.FALSE) | (1 << COOLParser.IF) | (1 << COOLParser.ISVOID) | (1 << COOLParser.LET) | (1 << COOLParser.WHILE) | (1 << COOLParser.CASE) | (1 << COOLParser.NEW) | (1 << COOLParser.NOT) | (1 << COOLParser.TRUE) | (1 << COOLParser.STRING) | (1 << COOLParser.INT))) !== 0) || _la===COOLParser.OBJECTID || _la===COOLParser.INTEGER_NEGATIVE);
	            this.state = 106;
	            this.match(COOLParser.T__2);
	            break;

	        case 5:
	            localctx = new LetInContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 108;
	            this.match(COOLParser.LET);
	            this.state = 109;
	            this.match(COOLParser.OBJECTID);
	            this.state = 110;
	            this.match(COOLParser.T__6);
	            this.state = 111;
	            this.match(COOLParser.TYPEID);
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===COOLParser.ASSIGNMENT) {
	                this.state = 112;
	                this.match(COOLParser.ASSIGNMENT);
	                this.state = 113;
	                this.expression(0);
	            }

	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===COOLParser.T__4) {
	                this.state = 116;
	                this.match(COOLParser.T__4);
	                this.state = 117;
	                this.match(COOLParser.OBJECTID);
	                this.state = 118;
	                this.match(COOLParser.T__6);
	                this.state = 119;
	                this.match(COOLParser.TYPEID);
	                this.state = 122;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===COOLParser.ASSIGNMENT) {
	                    this.state = 120;
	                    this.match(COOLParser.ASSIGNMENT);
	                    this.state = 121;
	                    this.expression(0);
	                }

	                this.state = 128;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 129;
	            this.match(COOLParser.IN);
	            this.state = 130;
	            this.expression(20);
	            break;

	        case 6:
	            localctx = new CaseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 131;
	            this.match(COOLParser.CASE);
	            this.state = 132;
	            this.expression(0);
	            this.state = 133;
	            this.match(COOLParser.OF);
	            this.state = 141; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 134;
	                this.match(COOLParser.OBJECTID);
	                this.state = 135;
	                this.match(COOLParser.T__6);
	                this.state = 136;
	                this.match(COOLParser.TYPEID);
	                this.state = 137;
	                this.match(COOLParser.CASE_ARROW);
	                this.state = 138;
	                this.expression(0);
	                this.state = 139;
	                this.match(COOLParser.T__0);
	                this.state = 143; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===COOLParser.OBJECTID);
	            this.state = 145;
	            this.match(COOLParser.ESAC);
	            break;

	        case 7:
	            localctx = new NewContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 147;
	            this.match(COOLParser.NEW);
	            this.state = 148;
	            this.match(COOLParser.TYPEID);
	            break;

	        case 8:
	            localctx = new NegativeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 149;
	            this.match(COOLParser.INTEGER_NEGATIVE);
	            this.state = 150;
	            this.expression(17);
	            break;

	        case 9:
	            localctx = new IsvoidContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 151;
	            this.match(COOLParser.ISVOID);
	            this.state = 152;
	            this.expression(16);
	            break;

	        case 10:
	            localctx = new BoolNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 153;
	            this.match(COOLParser.NOT);
	            this.state = 154;
	            this.expression(8);
	            break;

	        case 11:
	            localctx = new ParenthesesContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 155;
	            this.match(COOLParser.T__3);
	            this.state = 156;
	            this.expression(0);
	            this.state = 157;
	            this.match(COOLParser.T__5);
	            break;

	        case 12:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 159;
	            this.match(COOLParser.OBJECTID);
	            break;

	        case 13:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 160;
	            this.match(COOLParser.INT);
	            break;

	        case 14:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 161;
	            this.match(COOLParser.STRING);
	            break;

	        case 15:
	            localctx = new TrueContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 162;
	            this.match(COOLParser.TRUE);
	            break;

	        case 16:
	            localctx = new FalseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 163;
	            this.match(COOLParser.FALSE);
	            break;

	        case 17:
	            localctx = new AssignmentContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 164;
	            this.match(COOLParser.OBJECTID);
	            this.state = 165;
	            this.match(COOLParser.ASSIGNMENT);
	            this.state = 166;
	            this.expression(1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 211;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 209;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultiplyContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
	                    this.state = 169;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 170;
	                    this.match(COOLParser.MULTIPLY);
	                    this.state = 171;
	                    this.expression(16);
	                    break;

	                case 2:
	                    localctx = new DivisionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
	                    this.state = 172;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 173;
	                    this.match(COOLParser.DIVISION);
	                    this.state = 174;
	                    this.expression(15);
	                    break;

	                case 3:
	                    localctx = new AddContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
	                    this.state = 175;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 176;
	                    this.match(COOLParser.ADD);
	                    this.state = 177;
	                    this.expression(14);
	                    break;

	                case 4:
	                    localctx = new MinusContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
	                    this.state = 178;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 179;
	                    this.match(COOLParser.MINUS);
	                    this.state = 180;
	                    this.expression(13);
	                    break;

	                case 5:
	                    localctx = new LessThanContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
	                    this.state = 181;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 182;
	                    this.match(COOLParser.LESS_THAN);
	                    this.state = 183;
	                    this.expression(12);
	                    break;

	                case 6:
	                    localctx = new LessEqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
	                    this.state = 184;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 185;
	                    this.match(COOLParser.LESS_EQUAL);
	                    this.state = 186;
	                    this.expression(11);
	                    break;

	                case 7:
	                    localctx = new EqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
	                    this.state = 187;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 188;
	                    this.match(COOLParser.EQUAL);
	                    this.state = 189;
	                    this.expression(10);
	                    break;

	                case 8:
	                    localctx = new MethodCallContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
	                    this.state = 190;
	                    if (!( this.precpred(this._ctx, 25))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
	                    }
	                    this.state = 193;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===COOLParser.T__7) {
	                        this.state = 191;
	                        this.match(COOLParser.T__7);
	                        this.state = 192;
	                        this.match(COOLParser.TYPEID);
	                    }

	                    this.state = 195;
	                    this.match(COOLParser.T__8);
	                    this.state = 196;
	                    this.match(COOLParser.OBJECTID);
	                    this.state = 197;
	                    this.match(COOLParser.T__3);
	                    this.state = 206;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << COOLParser.T__1) | (1 << COOLParser.T__3) | (1 << COOLParser.FALSE) | (1 << COOLParser.IF) | (1 << COOLParser.ISVOID) | (1 << COOLParser.LET) | (1 << COOLParser.WHILE) | (1 << COOLParser.CASE) | (1 << COOLParser.NEW) | (1 << COOLParser.NOT) | (1 << COOLParser.TRUE) | (1 << COOLParser.STRING) | (1 << COOLParser.INT))) !== 0) || _la===COOLParser.OBJECTID || _la===COOLParser.INTEGER_NEGATIVE) {
	                        this.state = 198;
	                        this.expression(0);
	                        this.state = 203;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                        while(_la===COOLParser.T__4) {
	                            this.state = 199;
	                            this.match(COOLParser.T__4);
	                            this.state = 200;
	                            this.expression(0);
	                            this.state = 205;
	                            this._errHandler.sync(this);
	                            _la = this._input.LA(1);
	                        }
	                    }

	                    this.state = 208;
	                    this.match(COOLParser.T__5);
	                    break;

	                } 
	            }
	            this.state = 213;
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


}

COOLParser.EOF = antlr4.Token.EOF;
COOLParser.T__0 = 1;
COOLParser.T__1 = 2;
COOLParser.T__2 = 3;
COOLParser.T__3 = 4;
COOLParser.T__4 = 5;
COOLParser.T__5 = 6;
COOLParser.T__6 = 7;
COOLParser.T__7 = 8;
COOLParser.T__8 = 9;
COOLParser.CLASS = 10;
COOLParser.ELSE = 11;
COOLParser.FALSE = 12;
COOLParser.FI = 13;
COOLParser.IF = 14;
COOLParser.IN = 15;
COOLParser.INHERITS = 16;
COOLParser.ISVOID = 17;
COOLParser.LET = 18;
COOLParser.LOOP = 19;
COOLParser.POOL = 20;
COOLParser.THEN = 21;
COOLParser.WHILE = 22;
COOLParser.CASE = 23;
COOLParser.ESAC = 24;
COOLParser.NEW = 25;
COOLParser.OF = 26;
COOLParser.NOT = 27;
COOLParser.TRUE = 28;
COOLParser.STRING = 29;
COOLParser.INT = 30;
COOLParser.TYPEID = 31;
COOLParser.OBJECTID = 32;
COOLParser.ASSIGNMENT = 33;
COOLParser.CASE_ARROW = 34;
COOLParser.ADD = 35;
COOLParser.MINUS = 36;
COOLParser.MULTIPLY = 37;
COOLParser.DIVISION = 38;
COOLParser.LESS_THAN = 39;
COOLParser.LESS_EQUAL = 40;
COOLParser.EQUAL = 41;
COOLParser.INTEGER_NEGATIVE = 42;
COOLParser.OPEN_COMMENT = 43;
COOLParser.CLOSE_COMMENT = 44;
COOLParser.COMMENT = 45;
COOLParser.ONE_LINE_COMMENT = 46;
COOLParser.WHITESPACE = 47;

COOLParser.RULE_program = 0;
COOLParser.RULE_programBlocks = 1;
COOLParser.RULE_classDefine = 2;
COOLParser.RULE_feature = 3;
COOLParser.RULE_formal = 4;
COOLParser.RULE_expression = 5;

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
        this.ruleIndex = COOLParser.RULE_program;
    }

	programBlocks() {
	    return this.getTypedRuleContext(ProgramBlocksContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitProgram(this);
		}
	}


}



class ProgramBlocksContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = COOLParser.RULE_programBlocks;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ClassesContext extends ProgramBlocksContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	classDefine() {
	    return this.getTypedRuleContext(ClassDefineContext,0);
	};

	programBlocks() {
	    return this.getTypedRuleContext(ProgramBlocksContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterClasses(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitClasses(this);
		}
	}


}

COOLParser.ClassesContext = ClassesContext;

class EofContext extends ProgramBlocksContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	EOF() {
	    return this.getToken(COOLParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterEof(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitEof(this);
		}
	}


}

COOLParser.EofContext = EofContext;

class ClassDefineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = COOLParser.RULE_classDefine;
    }

	CLASS() {
	    return this.getToken(COOLParser.CLASS, 0);
	};

	TYPEID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(COOLParser.TYPEID);
	    } else {
	        return this.getToken(COOLParser.TYPEID, i);
	    }
	};


	INHERITS() {
	    return this.getToken(COOLParser.INHERITS, 0);
	};

	feature = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FeatureContext);
	    } else {
	        return this.getTypedRuleContext(FeatureContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterClassDefine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitClassDefine(this);
		}
	}


}



class FeatureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = COOLParser.RULE_feature;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MethodContext extends FeatureContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OBJECTID() {
	    return this.getToken(COOLParser.OBJECTID, 0);
	};

	TYPEID() {
	    return this.getToken(COOLParser.TYPEID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	formal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormalContext);
	    } else {
	        return this.getTypedRuleContext(FormalContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitMethod(this);
		}
	}


}

COOLParser.MethodContext = MethodContext;

class PropertyContext extends FeatureContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OBJECTID() {
	    return this.getToken(COOLParser.OBJECTID, 0);
	};

	TYPEID() {
	    return this.getToken(COOLParser.TYPEID, 0);
	};

	ASSIGNMENT() {
	    return this.getToken(COOLParser.ASSIGNMENT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitProperty(this);
		}
	}


}

COOLParser.PropertyContext = PropertyContext;

class FormalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = COOLParser.RULE_formal;
    }

	OBJECTID() {
	    return this.getToken(COOLParser.OBJECTID, 0);
	};

	TYPEID() {
	    return this.getToken(COOLParser.TYPEID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterFormal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitFormal(this);
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
        this.ruleIndex = COOLParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LetInContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LET() {
	    return this.getToken(COOLParser.LET, 0);
	};

	OBJECTID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(COOLParser.OBJECTID);
	    } else {
	        return this.getToken(COOLParser.OBJECTID, i);
	    }
	};


	TYPEID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(COOLParser.TYPEID);
	    } else {
	        return this.getToken(COOLParser.TYPEID, i);
	    }
	};


	IN() {
	    return this.getToken(COOLParser.IN, 0);
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

	ASSIGNMENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(COOLParser.ASSIGNMENT);
	    } else {
	        return this.getToken(COOLParser.ASSIGNMENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterLetIn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitLetIn(this);
		}
	}


}

COOLParser.LetInContext = LetInContext;

class MinusContext extends ExpressionContext {

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
	    return this.getToken(COOLParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterMinus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitMinus(this);
		}
	}


}

COOLParser.MinusContext = MinusContext;

class StringContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(COOLParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitString(this);
		}
	}


}

COOLParser.StringContext = StringContext;

class IsvoidContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ISVOID() {
	    return this.getToken(COOLParser.ISVOID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterIsvoid(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitIsvoid(this);
		}
	}


}

COOLParser.IsvoidContext = IsvoidContext;

class WhileContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	WHILE() {
	    return this.getToken(COOLParser.WHILE, 0);
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

	LOOP() {
	    return this.getToken(COOLParser.LOOP, 0);
	};

	POOL() {
	    return this.getToken(COOLParser.POOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterWhile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitWhile(this);
		}
	}


}

COOLParser.WhileContext = WhileContext;

class DivisionContext extends ExpressionContext {

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

	DIVISION() {
	    return this.getToken(COOLParser.DIVISION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterDivision(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitDivision(this);
		}
	}


}

COOLParser.DivisionContext = DivisionContext;

class NegativeContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INTEGER_NEGATIVE() {
	    return this.getToken(COOLParser.INTEGER_NEGATIVE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterNegative(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitNegative(this);
		}
	}


}

COOLParser.NegativeContext = NegativeContext;

class BoolNotContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(COOLParser.NOT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterBoolNot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitBoolNot(this);
		}
	}


}

COOLParser.BoolNotContext = BoolNotContext;

class LessThanContext extends ExpressionContext {

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

	LESS_THAN() {
	    return this.getToken(COOLParser.LESS_THAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterLessThan(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitLessThan(this);
		}
	}


}

COOLParser.LessThanContext = LessThanContext;

class BlockContext extends ExpressionContext {

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

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitBlock(this);
		}
	}


}

COOLParser.BlockContext = BlockContext;

class IdContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OBJECTID() {
	    return this.getToken(COOLParser.OBJECTID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitId(this);
		}
	}


}

COOLParser.IdContext = IdContext;

class MultiplyContext extends ExpressionContext {

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

	MULTIPLY() {
	    return this.getToken(COOLParser.MULTIPLY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterMultiply(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitMultiply(this);
		}
	}


}

COOLParser.MultiplyContext = MultiplyContext;

class IfContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IF() {
	    return this.getToken(COOLParser.IF, 0);
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

	THEN() {
	    return this.getToken(COOLParser.THEN, 0);
	};

	ELSE() {
	    return this.getToken(COOLParser.ELSE, 0);
	};

	FI() {
	    return this.getToken(COOLParser.FI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterIf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitIf(this);
		}
	}


}

COOLParser.IfContext = IfContext;

class CaseContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CASE() {
	    return this.getToken(COOLParser.CASE, 0);
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

	OF() {
	    return this.getToken(COOLParser.OF, 0);
	};

	ESAC() {
	    return this.getToken(COOLParser.ESAC, 0);
	};

	OBJECTID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(COOLParser.OBJECTID);
	    } else {
	        return this.getToken(COOLParser.OBJECTID, i);
	    }
	};


	TYPEID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(COOLParser.TYPEID);
	    } else {
	        return this.getToken(COOLParser.TYPEID, i);
	    }
	};


	CASE_ARROW = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(COOLParser.CASE_ARROW);
	    } else {
	        return this.getToken(COOLParser.CASE_ARROW, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterCase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitCase(this);
		}
	}


}

COOLParser.CaseContext = CaseContext;

class OwnMethodCallContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OBJECTID() {
	    return this.getToken(COOLParser.OBJECTID, 0);
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
	    if(listener instanceof COOLListener ) {
	        listener.enterOwnMethodCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitOwnMethodCall(this);
		}
	}


}

COOLParser.OwnMethodCallContext = OwnMethodCallContext;

class AddContext extends ExpressionContext {

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

	ADD() {
	    return this.getToken(COOLParser.ADD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterAdd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitAdd(this);
		}
	}


}

COOLParser.AddContext = AddContext;

class NewContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NEW() {
	    return this.getToken(COOLParser.NEW, 0);
	};

	TYPEID() {
	    return this.getToken(COOLParser.TYPEID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterNew(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitNew(this);
		}
	}


}

COOLParser.NewContext = NewContext;

class ParenthesesContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterParentheses(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitParentheses(this);
		}
	}


}

COOLParser.ParenthesesContext = ParenthesesContext;

class AssignmentContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OBJECTID() {
	    return this.getToken(COOLParser.OBJECTID, 0);
	};

	ASSIGNMENT() {
	    return this.getToken(COOLParser.ASSIGNMENT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitAssignment(this);
		}
	}


}

COOLParser.AssignmentContext = AssignmentContext;

class FalseContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FALSE() {
	    return this.getToken(COOLParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterFalse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitFalse(this);
		}
	}


}

COOLParser.FalseContext = FalseContext;

class IntContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(COOLParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterInt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitInt(this);
		}
	}


}

COOLParser.IntContext = IntContext;

class EqualContext extends ExpressionContext {

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

	EQUAL() {
	    return this.getToken(COOLParser.EQUAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterEqual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitEqual(this);
		}
	}


}

COOLParser.EqualContext = EqualContext;

class TrueContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(COOLParser.TRUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterTrue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitTrue(this);
		}
	}


}

COOLParser.TrueContext = TrueContext;

class LessEqualContext extends ExpressionContext {

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

	LESS_EQUAL() {
	    return this.getToken(COOLParser.LESS_EQUAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterLessEqual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitLessEqual(this);
		}
	}


}

COOLParser.LessEqualContext = LessEqualContext;

class MethodCallContext extends ExpressionContext {

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

	OBJECTID() {
	    return this.getToken(COOLParser.OBJECTID, 0);
	};

	TYPEID() {
	    return this.getToken(COOLParser.TYPEID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.enterMethodCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof COOLListener ) {
	        listener.exitMethodCall(this);
		}
	}


}

COOLParser.MethodCallContext = MethodCallContext;


COOLParser.ProgramContext = ProgramContext; 
COOLParser.ProgramBlocksContext = ProgramBlocksContext; 
COOLParser.ClassDefineContext = ClassDefineContext; 
COOLParser.FeatureContext = FeatureContext; 
COOLParser.FormalContext = FormalContext; 
COOLParser.ExpressionContext = ExpressionContext; 
