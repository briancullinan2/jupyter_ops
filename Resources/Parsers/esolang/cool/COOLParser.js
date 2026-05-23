// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/esolang/cool/COOL.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import COOLListener from './COOLListener.js';
const serializedATN = [4,1,47,213,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,1,0,1,0,1,0,4,0,14,8,0,11,0,12,0,15,1,0,1,0,1,1,1,1,1,1,1,1,3,1,24,8,1,
1,1,1,1,1,1,1,1,5,1,30,8,1,10,1,12,1,33,9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,
5,2,42,8,2,10,2,12,2,45,9,2,3,2,47,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,3,2,61,8,2,3,2,63,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,
1,4,5,4,75,8,4,10,4,12,4,78,9,4,3,4,80,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,4,4,101,8,4,11,4,12,4,102,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,113,8,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,
121,8,4,5,4,123,8,4,10,4,12,4,126,9,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,4,4,140,8,4,11,4,12,4,141,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,166,8,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,3,4,192,8,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,200,8,4,10,4,
12,4,203,9,4,3,4,205,8,4,1,4,5,4,208,8,4,10,4,12,4,211,9,4,1,4,0,1,8,5,0,
2,4,6,8,0,0,248,0,13,1,0,0,0,2,19,1,0,0,0,4,62,1,0,0,0,6,64,1,0,0,0,8,165,
1,0,0,0,10,11,3,2,1,0,11,12,5,1,0,0,12,14,1,0,0,0,13,10,1,0,0,0,14,15,1,
0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,17,1,0,0,0,17,18,5,0,0,1,18,1,1,0,0,
0,19,20,5,10,0,0,20,23,5,31,0,0,21,22,5,16,0,0,22,24,5,31,0,0,23,21,1,0,
0,0,23,24,1,0,0,0,24,25,1,0,0,0,25,31,5,2,0,0,26,27,3,4,2,0,27,28,5,1,0,
0,28,30,1,0,0,0,29,26,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,
32,34,1,0,0,0,33,31,1,0,0,0,34,35,5,3,0,0,35,3,1,0,0,0,36,37,5,32,0,0,37,
46,5,4,0,0,38,43,3,6,3,0,39,40,5,5,0,0,40,42,3,6,3,0,41,39,1,0,0,0,42,45,
1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,46,38,1,
0,0,0,46,47,1,0,0,0,47,48,1,0,0,0,48,49,5,6,0,0,49,50,5,7,0,0,50,51,5,31,
0,0,51,52,5,2,0,0,52,53,3,8,4,0,53,54,5,3,0,0,54,63,1,0,0,0,55,56,5,32,0,
0,56,57,5,7,0,0,57,60,5,31,0,0,58,59,5,33,0,0,59,61,3,8,4,0,60,58,1,0,0,
0,60,61,1,0,0,0,61,63,1,0,0,0,62,36,1,0,0,0,62,55,1,0,0,0,63,5,1,0,0,0,64,
65,5,32,0,0,65,66,5,7,0,0,66,67,5,31,0,0,67,7,1,0,0,0,68,69,6,4,-1,0,69,
70,5,32,0,0,70,79,5,4,0,0,71,76,3,8,4,0,72,73,5,5,0,0,73,75,3,8,4,0,74,72,
1,0,0,0,75,78,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,80,1,0,0,0,78,76,1,
0,0,0,79,71,1,0,0,0,79,80,1,0,0,0,80,81,1,0,0,0,81,166,5,6,0,0,82,83,5,14,
0,0,83,84,3,8,4,0,84,85,5,21,0,0,85,86,3,8,4,0,86,87,5,11,0,0,87,88,3,8,
4,0,88,89,5,13,0,0,89,166,1,0,0,0,90,91,5,22,0,0,91,92,3,8,4,0,92,93,5,19,
0,0,93,94,3,8,4,0,94,95,5,20,0,0,95,166,1,0,0,0,96,100,5,2,0,0,97,98,3,8,
4,0,98,99,5,1,0,0,99,101,1,0,0,0,100,97,1,0,0,0,101,102,1,0,0,0,102,100,
1,0,0,0,102,103,1,0,0,0,103,104,1,0,0,0,104,105,5,3,0,0,105,166,1,0,0,0,
106,107,5,18,0,0,107,108,5,32,0,0,108,109,5,7,0,0,109,112,5,31,0,0,110,111,
5,33,0,0,111,113,3,8,4,0,112,110,1,0,0,0,112,113,1,0,0,0,113,124,1,0,0,0,
114,115,5,5,0,0,115,116,5,32,0,0,116,117,5,7,0,0,117,120,5,31,0,0,118,119,
5,33,0,0,119,121,3,8,4,0,120,118,1,0,0,0,120,121,1,0,0,0,121,123,1,0,0,0,
122,114,1,0,0,0,123,126,1,0,0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,127,
1,0,0,0,126,124,1,0,0,0,127,128,5,15,0,0,128,166,3,8,4,20,129,130,5,23,0,
0,130,131,3,8,4,0,131,139,5,26,0,0,132,133,5,32,0,0,133,134,5,7,0,0,134,
135,5,31,0,0,135,136,5,34,0,0,136,137,3,8,4,0,137,138,5,1,0,0,138,140,1,
0,0,0,139,132,1,0,0,0,140,141,1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,
143,1,0,0,0,143,144,5,24,0,0,144,166,1,0,0,0,145,146,5,25,0,0,146,166,5,
31,0,0,147,148,5,42,0,0,148,166,3,8,4,17,149,150,5,17,0,0,150,166,3,8,4,
16,151,152,5,27,0,0,152,166,3,8,4,8,153,154,5,4,0,0,154,155,3,8,4,0,155,
156,5,6,0,0,156,166,1,0,0,0,157,166,5,32,0,0,158,166,5,30,0,0,159,166,5,
29,0,0,160,166,5,28,0,0,161,166,5,12,0,0,162,163,5,32,0,0,163,164,5,33,0,
0,164,166,3,8,4,1,165,68,1,0,0,0,165,82,1,0,0,0,165,90,1,0,0,0,165,96,1,
0,0,0,165,106,1,0,0,0,165,129,1,0,0,0,165,145,1,0,0,0,165,147,1,0,0,0,165,
149,1,0,0,0,165,151,1,0,0,0,165,153,1,0,0,0,165,157,1,0,0,0,165,158,1,0,
0,0,165,159,1,0,0,0,165,160,1,0,0,0,165,161,1,0,0,0,165,162,1,0,0,0,166,
209,1,0,0,0,167,168,10,15,0,0,168,169,5,37,0,0,169,208,3,8,4,16,170,171,
10,14,0,0,171,172,5,38,0,0,172,208,3,8,4,15,173,174,10,13,0,0,174,175,5,
35,0,0,175,208,3,8,4,14,176,177,10,12,0,0,177,178,5,36,0,0,178,208,3,8,4,
13,179,180,10,11,0,0,180,181,5,39,0,0,181,208,3,8,4,12,182,183,10,10,0,0,
183,184,5,40,0,0,184,208,3,8,4,11,185,186,10,9,0,0,186,187,5,41,0,0,187,
208,3,8,4,10,188,191,10,25,0,0,189,190,5,8,0,0,190,192,5,31,0,0,191,189,
1,0,0,0,191,192,1,0,0,0,192,193,1,0,0,0,193,194,5,9,0,0,194,195,5,32,0,0,
195,204,5,4,0,0,196,201,3,8,4,0,197,198,5,5,0,0,198,200,3,8,4,0,199,197,
1,0,0,0,200,203,1,0,0,0,201,199,1,0,0,0,201,202,1,0,0,0,202,205,1,0,0,0,
203,201,1,0,0,0,204,196,1,0,0,0,204,205,1,0,0,0,205,206,1,0,0,0,206,208,
5,6,0,0,207,167,1,0,0,0,207,170,1,0,0,0,207,173,1,0,0,0,207,176,1,0,0,0,
207,179,1,0,0,0,207,182,1,0,0,0,207,185,1,0,0,0,207,188,1,0,0,0,208,211,
1,0,0,0,209,207,1,0,0,0,209,210,1,0,0,0,210,9,1,0,0,0,211,209,1,0,0,0,20,
15,23,31,43,46,60,62,76,79,102,112,120,124,141,165,191,201,204,207,209];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

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
    static ruleNames = [ "program", "classDefine", "feature", "formal", 
                         "expression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = COOLParser.ruleNames;
        this.literalNames = COOLParser.literalNames;
        this.symbolicNames = COOLParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.classDefine();
	            this.state = 11;
	            this.match(COOLParser.T__0);
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===10);
	        this.state = 17;
	        this.match(COOLParser.EOF);
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
	    this.enterRule(localctx, 2, COOLParser.RULE_classDefine);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.match(COOLParser.CLASS);
	        this.state = 20;
	        this.match(COOLParser.TYPEID);
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 21;
	            this.match(COOLParser.INHERITS);
	            this.state = 22;
	            this.match(COOLParser.TYPEID);
	        }

	        this.state = 25;
	        this.match(COOLParser.T__1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===32) {
	            this.state = 26;
	            this.feature();
	            this.state = 27;
	            this.match(COOLParser.T__0);
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 34;
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
	    this.enterRule(localctx, 4, COOLParser.RULE_feature);
	    var _la = 0;
	    try {
	        this.state = 62;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new MethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.match(COOLParser.OBJECTID);
	            this.state = 37;
	            this.match(COOLParser.T__3);
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===32) {
	                this.state = 38;
	                this.formal();
	                this.state = 43;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===5) {
	                    this.state = 39;
	                    this.match(COOLParser.T__4);
	                    this.state = 40;
	                    this.formal();
	                    this.state = 45;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 48;
	            this.match(COOLParser.T__5);
	            this.state = 49;
	            this.match(COOLParser.T__6);
	            this.state = 50;
	            this.match(COOLParser.TYPEID);
	            this.state = 51;
	            this.match(COOLParser.T__1);
	            this.state = 52;
	            this.expression(0);
	            this.state = 53;
	            this.match(COOLParser.T__2);
	            break;

	        case 2:
	            localctx = new PropertyContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.match(COOLParser.OBJECTID);
	            this.state = 56;
	            this.match(COOLParser.T__6);
	            this.state = 57;
	            this.match(COOLParser.TYPEID);
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===33) {
	                this.state = 58;
	                this.match(COOLParser.ASSIGNMENT);
	                this.state = 59;
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
	    this.enterRule(localctx, 6, COOLParser.RULE_formal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(COOLParser.OBJECTID);
	        this.state = 65;
	        this.match(COOLParser.T__6);
	        this.state = 66;
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
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, COOLParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new OwnMethodCallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 69;
	            this.match(COOLParser.OBJECTID);
	            this.state = 70;
	            this.match(COOLParser.T__3);
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2059816980) !== 0) || _la===32 || _la===42) {
	                this.state = 71;
	                this.expression(0);
	                this.state = 76;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===5) {
	                    this.state = 72;
	                    this.match(COOLParser.T__4);
	                    this.state = 73;
	                    this.expression(0);
	                    this.state = 78;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 81;
	            this.match(COOLParser.T__5);
	            break;

	        case 2:
	            localctx = new IfContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 82;
	            this.match(COOLParser.IF);
	            this.state = 83;
	            this.expression(0);
	            this.state = 84;
	            this.match(COOLParser.THEN);
	            this.state = 85;
	            this.expression(0);
	            this.state = 86;
	            this.match(COOLParser.ELSE);
	            this.state = 87;
	            this.expression(0);
	            this.state = 88;
	            this.match(COOLParser.FI);
	            break;

	        case 3:
	            localctx = new WhileContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 90;
	            this.match(COOLParser.WHILE);
	            this.state = 91;
	            this.expression(0);
	            this.state = 92;
	            this.match(COOLParser.LOOP);
	            this.state = 93;
	            this.expression(0);
	            this.state = 94;
	            this.match(COOLParser.POOL);
	            break;

	        case 4:
	            localctx = new BlockContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 96;
	            this.match(COOLParser.T__1);
	            this.state = 100; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 97;
	                this.expression(0);
	                this.state = 98;
	                this.match(COOLParser.T__0);
	                this.state = 102; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2059816980) !== 0) || _la===32 || _la===42);
	            this.state = 104;
	            this.match(COOLParser.T__2);
	            break;

	        case 5:
	            localctx = new LetInContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 106;
	            this.match(COOLParser.LET);
	            this.state = 107;
	            this.match(COOLParser.OBJECTID);
	            this.state = 108;
	            this.match(COOLParser.T__6);
	            this.state = 109;
	            this.match(COOLParser.TYPEID);
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===33) {
	                this.state = 110;
	                this.match(COOLParser.ASSIGNMENT);
	                this.state = 111;
	                this.expression(0);
	            }

	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5) {
	                this.state = 114;
	                this.match(COOLParser.T__4);
	                this.state = 115;
	                this.match(COOLParser.OBJECTID);
	                this.state = 116;
	                this.match(COOLParser.T__6);
	                this.state = 117;
	                this.match(COOLParser.TYPEID);
	                this.state = 120;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===33) {
	                    this.state = 118;
	                    this.match(COOLParser.ASSIGNMENT);
	                    this.state = 119;
	                    this.expression(0);
	                }

	                this.state = 126;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 127;
	            this.match(COOLParser.IN);
	            this.state = 128;
	            this.expression(20);
	            break;

	        case 6:
	            localctx = new CaseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 129;
	            this.match(COOLParser.CASE);
	            this.state = 130;
	            this.expression(0);
	            this.state = 131;
	            this.match(COOLParser.OF);
	            this.state = 139; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 132;
	                this.match(COOLParser.OBJECTID);
	                this.state = 133;
	                this.match(COOLParser.T__6);
	                this.state = 134;
	                this.match(COOLParser.TYPEID);
	                this.state = 135;
	                this.match(COOLParser.CASE_ARROW);
	                this.state = 136;
	                this.expression(0);
	                this.state = 137;
	                this.match(COOLParser.T__0);
	                this.state = 141; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===32);
	            this.state = 143;
	            this.match(COOLParser.ESAC);
	            break;

	        case 7:
	            localctx = new NewContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 145;
	            this.match(COOLParser.NEW);
	            this.state = 146;
	            this.match(COOLParser.TYPEID);
	            break;

	        case 8:
	            localctx = new NegativeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 147;
	            this.match(COOLParser.INTEGER_NEGATIVE);
	            this.state = 148;
	            this.expression(17);
	            break;

	        case 9:
	            localctx = new IsvoidContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 149;
	            this.match(COOLParser.ISVOID);
	            this.state = 150;
	            this.expression(16);
	            break;

	        case 10:
	            localctx = new BoolNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 151;
	            this.match(COOLParser.NOT);
	            this.state = 152;
	            this.expression(8);
	            break;

	        case 11:
	            localctx = new ParenthesesContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 153;
	            this.match(COOLParser.T__3);
	            this.state = 154;
	            this.expression(0);
	            this.state = 155;
	            this.match(COOLParser.T__5);
	            break;

	        case 12:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 157;
	            this.match(COOLParser.OBJECTID);
	            break;

	        case 13:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 158;
	            this.match(COOLParser.INT);
	            break;

	        case 14:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 159;
	            this.match(COOLParser.STRING);
	            break;

	        case 15:
	            localctx = new TrueContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 160;
	            this.match(COOLParser.TRUE);
	            break;

	        case 16:
	            localctx = new FalseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 161;
	            this.match(COOLParser.FALSE);
	            break;

	        case 17:
	            localctx = new AssignmentContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 162;
	            this.match(COOLParser.OBJECTID);
	            this.state = 163;
	            this.match(COOLParser.ASSIGNMENT);
	            this.state = 164;
	            this.expression(1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 209;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 207;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultiplyContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
	                    this.state = 167;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 168;
	                    this.match(COOLParser.MULTIPLY);
	                    this.state = 169;
	                    this.expression(16);
	                    break;

	                case 2:
	                    localctx = new DivisionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
	                    this.state = 170;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 171;
	                    this.match(COOLParser.DIVISION);
	                    this.state = 172;
	                    this.expression(15);
	                    break;

	                case 3:
	                    localctx = new AddContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
	                    this.state = 173;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 174;
	                    this.match(COOLParser.ADD);
	                    this.state = 175;
	                    this.expression(14);
	                    break;

	                case 4:
	                    localctx = new MinusContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
	                    this.state = 176;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 177;
	                    this.match(COOLParser.MINUS);
	                    this.state = 178;
	                    this.expression(13);
	                    break;

	                case 5:
	                    localctx = new LessThanContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
	                    this.state = 179;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 180;
	                    this.match(COOLParser.LESS_THAN);
	                    this.state = 181;
	                    this.expression(12);
	                    break;

	                case 6:
	                    localctx = new LessEqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
	                    this.state = 182;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 183;
	                    this.match(COOLParser.LESS_EQUAL);
	                    this.state = 184;
	                    this.expression(11);
	                    break;

	                case 7:
	                    localctx = new EqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
	                    this.state = 185;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 186;
	                    this.match(COOLParser.EQUAL);
	                    this.state = 187;
	                    this.expression(10);
	                    break;

	                case 8:
	                    localctx = new MethodCallContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
	                    this.state = 188;
	                    if (!( this.precpred(this._ctx, 25))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
	                    }
	                    this.state = 191;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===8) {
	                        this.state = 189;
	                        this.match(COOLParser.T__7);
	                        this.state = 190;
	                        this.match(COOLParser.TYPEID);
	                    }

	                    this.state = 193;
	                    this.match(COOLParser.T__8);
	                    this.state = 194;
	                    this.match(COOLParser.OBJECTID);
	                    this.state = 195;
	                    this.match(COOLParser.T__3);
	                    this.state = 204;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2059816980) !== 0) || _la===32 || _la===42) {
	                        this.state = 196;
	                        this.expression(0);
	                        this.state = 201;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                        while(_la===5) {
	                            this.state = 197;
	                            this.match(COOLParser.T__4);
	                            this.state = 198;
	                            this.expression(0);
	                            this.state = 203;
	                            this._errHandler.sync(this);
	                            _la = this._input.LA(1);
	                        }
	                    }

	                    this.state = 206;
	                    this.match(COOLParser.T__5);
	                    break;

	                } 
	            }
	            this.state = 211;
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
COOLParser.RULE_classDefine = 1;
COOLParser.RULE_feature = 2;
COOLParser.RULE_formal = 3;
COOLParser.RULE_expression = 4;

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

	EOF() {
	    return this.getToken(COOLParser.EOF, 0);
	};

	classDefine = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassDefineContext);
	    } else {
	        return this.getTypedRuleContext(ClassDefineContext,i);
	    }
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
COOLParser.ClassDefineContext = ClassDefineContext; 
COOLParser.FeatureContext = FeatureContext; 
COOLParser.FormalContext = FormalContext; 
COOLParser.ExpressionContext = ExpressionContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
