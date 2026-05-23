// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/refal/refal.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import refalListener from './refalListener.js';
const serializedATN = [4,1,24,173,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,1,0,1,0,1,0,1,1,1,1,1,1,3,1,53,8,1,1,1,3,1,56,
8,1,1,1,1,1,1,1,1,1,3,1,62,8,1,1,1,1,1,1,1,1,1,5,1,68,8,1,10,1,12,1,71,9,
1,1,2,3,2,74,8,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,3,4,
89,8,4,1,5,1,5,1,6,1,6,1,6,3,6,96,8,6,3,6,98,8,6,1,7,1,7,1,7,1,7,1,7,1,7,
3,7,106,8,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,3,9,116,8,9,1,10,1,10,1,11,1,
11,1,12,1,12,1,13,1,13,1,13,3,13,127,8,13,1,14,1,14,1,14,1,14,1,14,1,14,
3,14,135,8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,3,16,
148,8,16,1,17,1,17,1,18,1,18,1,18,3,18,155,8,18,1,19,1,19,1,19,1,19,1,20,
1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,3,22,171,8,22,1,22,0,1,2,23,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,0,2,1,0,
5,7,1,0,18,19,169,0,46,1,0,0,0,2,61,1,0,0,0,4,73,1,0,0,0,6,80,1,0,0,0,8,
83,1,0,0,0,10,90,1,0,0,0,12,92,1,0,0,0,14,99,1,0,0,0,16,107,1,0,0,0,18,115,
1,0,0,0,20,117,1,0,0,0,22,119,1,0,0,0,24,121,1,0,0,0,26,126,1,0,0,0,28,134,
1,0,0,0,30,136,1,0,0,0,32,147,1,0,0,0,34,149,1,0,0,0,36,154,1,0,0,0,38,156,
1,0,0,0,40,160,1,0,0,0,42,164,1,0,0,0,44,170,1,0,0,0,46,47,3,2,1,0,47,48,
5,0,0,1,48,1,1,0,0,0,49,50,6,1,-1,0,50,55,3,4,2,0,51,53,5,1,0,0,52,51,1,
0,0,0,52,53,1,0,0,0,53,54,1,0,0,0,54,56,3,2,1,0,55,52,1,0,0,0,55,56,1,0,
0,0,56,62,1,0,0,0,57,58,3,6,3,0,58,59,5,1,0,0,59,60,3,2,1,2,60,62,1,0,0,
0,61,49,1,0,0,0,61,57,1,0,0,0,62,69,1,0,0,0,63,64,10,1,0,0,64,65,3,6,3,0,
65,66,5,1,0,0,66,68,1,0,0,0,67,63,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,69,
70,1,0,0,0,70,3,1,0,0,0,71,69,1,0,0,0,72,74,5,2,0,0,73,72,1,0,0,0,73,74,
1,0,0,0,74,75,1,0,0,0,75,76,3,10,5,0,76,77,5,3,0,0,77,78,3,12,6,0,78,79,
5,4,0,0,79,5,1,0,0,0,80,81,7,0,0,0,81,82,3,8,4,0,82,7,1,0,0,0,83,88,3,10,
5,0,84,85,5,8,0,0,85,86,3,8,4,0,86,87,5,1,0,0,87,89,1,0,0,0,88,84,1,0,0,
0,88,89,1,0,0,0,89,9,1,0,0,0,90,91,3,34,17,0,91,11,1,0,0,0,92,97,3,14,7,
0,93,95,5,1,0,0,94,96,3,12,6,0,95,94,1,0,0,0,95,96,1,0,0,0,96,98,1,0,0,0,
97,93,1,0,0,0,97,98,1,0,0,0,98,13,1,0,0,0,99,100,3,16,8,0,100,105,3,18,9,
0,101,102,5,9,0,0,102,106,3,24,12,0,103,104,5,8,0,0,104,106,3,30,15,0,105,
101,1,0,0,0,105,103,1,0,0,0,106,15,1,0,0,0,107,108,3,20,10,0,108,17,1,0,
0,0,109,110,5,8,0,0,110,111,3,22,11,0,111,112,5,10,0,0,112,113,3,20,10,0,
113,114,3,18,9,0,114,116,1,0,0,0,115,109,1,0,0,0,115,116,1,0,0,0,116,19,
1,0,0,0,117,118,3,26,13,0,118,21,1,0,0,0,119,120,3,26,13,0,120,23,1,0,0,
0,121,122,3,26,13,0,122,25,1,0,0,0,123,124,3,28,14,0,124,125,3,26,13,0,125,
127,1,0,0,0,126,123,1,0,0,0,126,127,1,0,0,0,127,27,1,0,0,0,128,135,3,32,
16,0,129,135,3,36,18,0,130,131,5,11,0,0,131,132,3,26,13,0,132,133,5,12,0,
0,133,135,1,0,0,0,134,128,1,0,0,0,134,129,1,0,0,0,134,130,1,0,0,0,135,29,
1,0,0,0,136,137,3,22,11,0,137,138,5,10,0,0,138,139,5,3,0,0,139,140,3,12,
6,0,140,141,5,4,0,0,141,31,1,0,0,0,142,148,3,34,17,0,143,148,5,17,0,0,144,
148,5,19,0,0,145,148,5,20,0,0,146,148,5,21,0,0,147,142,1,0,0,0,147,143,1,
0,0,0,147,144,1,0,0,0,147,145,1,0,0,0,147,146,1,0,0,0,148,33,1,0,0,0,149,
150,7,1,0,0,150,35,1,0,0,0,151,155,3,38,19,0,152,155,3,40,20,0,153,155,3,
42,21,0,154,151,1,0,0,0,154,152,1,0,0,0,154,153,1,0,0,0,155,37,1,0,0,0,156,
157,5,13,0,0,157,158,5,14,0,0,158,159,3,44,22,0,159,39,1,0,0,0,160,161,5,
15,0,0,161,162,5,14,0,0,162,163,3,44,22,0,163,41,1,0,0,0,164,165,5,16,0,
0,165,166,5,14,0,0,166,167,3,44,22,0,167,43,1,0,0,0,168,171,3,34,17,0,169,
171,5,17,0,0,170,168,1,0,0,0,170,169,1,0,0,0,171,45,1,0,0,0,15,52,55,61,
69,73,88,95,97,105,115,126,134,147,154,170];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class refalParser extends antlr4.Parser {

    static grammarFileName = "refal.g4";
    static literalNames = [ null, "';'", "'$ENTRY'", "'{'", "'}'", "'$EXTERNAL'", 
                            "'$EXTERN'", "'$EXTRN'", "','", "'='", "':'", 
                            "'<'", "'>'", "'s'", "'.'", "'t'", "'e'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "DIGITS", "IDENTIFER", "STRING", "STRING2", 
                             "CHAR", "LINE_COMMENT", "BLOCK_COMMENT", "WS" ];
    static ruleNames = [ "file_", "program", "f_definition", "external_decl", 
                         "f_name_list", "f_name", "block_", "sentence", 
                         "left_side", "conditions", "pattern", "arg_", "right_side", 
                         "expression_", "term_", "block_ending", "symbol", 
                         "identifier", "variable", "svar", "tvar", "evar", 
                         "index" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = refalParser.ruleNames;
        this.literalNames = refalParser.literalNames;
        this.symbolicNames = refalParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.program_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    program_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, refalParser.RULE_file_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.program(0);
	        this.state = 47;
	        this.match(refalParser.EOF);
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


	program(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ProgramContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, refalParser.RULE_program, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 18:
	        case 19:
	            this.state = 50;
	            this.f_definition();
	            this.state = 55;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            if(la_===1) {
	                this.state = 52;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===1) {
	                    this.state = 51;
	                    this.match(refalParser.T__0);
	                }

	                this.state = 54;
	                this.program(0);

	            }
	            break;
	        case 5:
	        case 6:
	        case 7:
	            this.state = 57;
	            this.external_decl();
	            this.state = 58;
	            this.match(refalParser.T__0);
	            this.state = 59;
	            this.program(2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 69;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ProgramContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, refalParser.RULE_program);
	                this.state = 63;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 64;
	                this.external_decl();
	                this.state = 65;
	                this.match(refalParser.T__0); 
	            }
	            this.state = 71;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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



	f_definition() {
	    let localctx = new F_definitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, refalParser.RULE_f_definition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 72;
	            this.match(refalParser.T__1);
	        }

	        this.state = 75;
	        this.f_name();
	        this.state = 76;
	        this.match(refalParser.T__2);
	        this.state = 77;
	        this.block_();
	        this.state = 78;
	        this.match(refalParser.T__3);
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



	external_decl() {
	    let localctx = new External_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, refalParser.RULE_external_decl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 224) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 81;
	        this.f_name_list();
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



	f_name_list() {
	    let localctx = new F_name_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, refalParser.RULE_f_name_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.f_name();
	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 84;
	            this.match(refalParser.T__7);
	            this.state = 85;
	            this.f_name_list();
	            this.state = 86;
	            this.match(refalParser.T__0);
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



	f_name() {
	    let localctx = new F_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, refalParser.RULE_f_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.identifier();
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



	block_() {
	    let localctx = new Block_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, refalParser.RULE_block_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.sentence();
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 93;
	            this.match(refalParser.T__0);
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4172544) !== 0)) {
	                this.state = 94;
	                this.block_();
	            }

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



	sentence() {
	    let localctx = new SentenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, refalParser.RULE_sentence);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.left_side();
	        this.state = 100;
	        this.conditions();
	        this.state = 105;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.state = 101;
	            this.match(refalParser.T__8);
	            this.state = 102;
	            this.right_side();
	            break;
	        case 8:
	            this.state = 103;
	            this.match(refalParser.T__7);
	            this.state = 104;
	            this.block_ending();
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



	left_side() {
	    let localctx = new Left_sideContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, refalParser.RULE_left_side);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.pattern();
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



	conditions() {
	    let localctx = new ConditionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, refalParser.RULE_conditions);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 109;
	            this.match(refalParser.T__7);
	            this.state = 110;
	            this.arg_();
	            this.state = 111;
	            this.match(refalParser.T__9);
	            this.state = 112;
	            this.pattern();
	            this.state = 113;
	            this.conditions();

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



	pattern() {
	    let localctx = new PatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, refalParser.RULE_pattern);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.expression_();
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



	arg_() {
	    let localctx = new Arg_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, refalParser.RULE_arg_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.expression_();
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



	right_side() {
	    let localctx = new Right_sideContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, refalParser.RULE_right_side);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.expression_();
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



	expression_() {
	    let localctx = new Expression_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, refalParser.RULE_expression_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4171776) !== 0)) {
	            this.state = 123;
	            this.term_();
	            this.state = 124;
	            this.expression_();
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



	term_() {
	    let localctx = new Term_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, refalParser.RULE_term_);
	    try {
	        this.state = 134;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 128;
	            this.symbol();
	            break;
	        case 13:
	        case 15:
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 129;
	            this.variable();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 130;
	            this.match(refalParser.T__10);
	            this.state = 131;
	            this.expression_();
	            this.state = 132;
	            this.match(refalParser.T__11);
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



	block_ending() {
	    let localctx = new Block_endingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, refalParser.RULE_block_ending);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.arg_();
	        this.state = 137;
	        this.match(refalParser.T__9);
	        this.state = 138;
	        this.match(refalParser.T__2);
	        this.state = 139;
	        this.block_();
	        this.state = 140;
	        this.match(refalParser.T__3);
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



	symbol() {
	    let localctx = new SymbolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, refalParser.RULE_symbol);
	    try {
	        this.state = 147;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 142;
	            this.identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 143;
	            this.match(refalParser.DIGITS);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 144;
	            this.match(refalParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 145;
	            this.match(refalParser.STRING2);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 146;
	            this.match(refalParser.CHAR);
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, refalParser.RULE_identifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        _la = this._input.LA(1);
	        if(!(_la===18 || _la===19)) {
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, refalParser.RULE_variable);
	    try {
	        this.state = 154;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 151;
	            this.svar();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 152;
	            this.tvar();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 153;
	            this.evar();
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



	svar() {
	    let localctx = new SvarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, refalParser.RULE_svar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(refalParser.T__12);
	        this.state = 157;
	        this.match(refalParser.T__13);
	        this.state = 158;
	        this.index();
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



	tvar() {
	    let localctx = new TvarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, refalParser.RULE_tvar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(refalParser.T__14);
	        this.state = 161;
	        this.match(refalParser.T__13);
	        this.state = 162;
	        this.index();
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



	evar() {
	    let localctx = new EvarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, refalParser.RULE_evar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(refalParser.T__15);
	        this.state = 165;
	        this.match(refalParser.T__13);
	        this.state = 166;
	        this.index();
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



	index() {
	    let localctx = new IndexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, refalParser.RULE_index);
	    try {
	        this.state = 170;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 168;
	            this.identifier();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 169;
	            this.match(refalParser.DIGITS);
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


}

refalParser.EOF = antlr4.Token.EOF;
refalParser.T__0 = 1;
refalParser.T__1 = 2;
refalParser.T__2 = 3;
refalParser.T__3 = 4;
refalParser.T__4 = 5;
refalParser.T__5 = 6;
refalParser.T__6 = 7;
refalParser.T__7 = 8;
refalParser.T__8 = 9;
refalParser.T__9 = 10;
refalParser.T__10 = 11;
refalParser.T__11 = 12;
refalParser.T__12 = 13;
refalParser.T__13 = 14;
refalParser.T__14 = 15;
refalParser.T__15 = 16;
refalParser.DIGITS = 17;
refalParser.IDENTIFER = 18;
refalParser.STRING = 19;
refalParser.STRING2 = 20;
refalParser.CHAR = 21;
refalParser.LINE_COMMENT = 22;
refalParser.BLOCK_COMMENT = 23;
refalParser.WS = 24;

refalParser.RULE_file_ = 0;
refalParser.RULE_program = 1;
refalParser.RULE_f_definition = 2;
refalParser.RULE_external_decl = 3;
refalParser.RULE_f_name_list = 4;
refalParser.RULE_f_name = 5;
refalParser.RULE_block_ = 6;
refalParser.RULE_sentence = 7;
refalParser.RULE_left_side = 8;
refalParser.RULE_conditions = 9;
refalParser.RULE_pattern = 10;
refalParser.RULE_arg_ = 11;
refalParser.RULE_right_side = 12;
refalParser.RULE_expression_ = 13;
refalParser.RULE_term_ = 14;
refalParser.RULE_block_ending = 15;
refalParser.RULE_symbol = 16;
refalParser.RULE_identifier = 17;
refalParser.RULE_variable = 18;
refalParser.RULE_svar = 19;
refalParser.RULE_tvar = 20;
refalParser.RULE_evar = 21;
refalParser.RULE_index = 22;

class File_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_file_;
    }

	program() {
	    return this.getTypedRuleContext(ProgramContext,0);
	};

	EOF() {
	    return this.getToken(refalParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitFile_(this);
		}
	}


}



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
        this.ruleIndex = refalParser.RULE_program;
    }

	f_definition() {
	    return this.getTypedRuleContext(F_definitionContext,0);
	};

	program() {
	    return this.getTypedRuleContext(ProgramContext,0);
	};

	external_decl() {
	    return this.getTypedRuleContext(External_declContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitProgram(this);
		}
	}


}



class F_definitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_f_definition;
    }

	f_name() {
	    return this.getTypedRuleContext(F_nameContext,0);
	};

	block_() {
	    return this.getTypedRuleContext(Block_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterF_definition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitF_definition(this);
		}
	}


}



class External_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_external_decl;
    }

	f_name_list() {
	    return this.getTypedRuleContext(F_name_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterExternal_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitExternal_decl(this);
		}
	}


}



class F_name_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_f_name_list;
    }

	f_name() {
	    return this.getTypedRuleContext(F_nameContext,0);
	};

	f_name_list() {
	    return this.getTypedRuleContext(F_name_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterF_name_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitF_name_list(this);
		}
	}


}



class F_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_f_name;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterF_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitF_name(this);
		}
	}


}



class Block_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_block_;
    }

	sentence() {
	    return this.getTypedRuleContext(SentenceContext,0);
	};

	block_() {
	    return this.getTypedRuleContext(Block_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterBlock_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitBlock_(this);
		}
	}


}



class SentenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_sentence;
    }

	left_side() {
	    return this.getTypedRuleContext(Left_sideContext,0);
	};

	conditions() {
	    return this.getTypedRuleContext(ConditionsContext,0);
	};

	right_side() {
	    return this.getTypedRuleContext(Right_sideContext,0);
	};

	block_ending() {
	    return this.getTypedRuleContext(Block_endingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterSentence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitSentence(this);
		}
	}


}



class Left_sideContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_left_side;
    }

	pattern() {
	    return this.getTypedRuleContext(PatternContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterLeft_side(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitLeft_side(this);
		}
	}


}



class ConditionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_conditions;
    }

	arg_() {
	    return this.getTypedRuleContext(Arg_Context,0);
	};

	pattern() {
	    return this.getTypedRuleContext(PatternContext,0);
	};

	conditions() {
	    return this.getTypedRuleContext(ConditionsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterConditions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitConditions(this);
		}
	}


}



class PatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_pattern;
    }

	expression_() {
	    return this.getTypedRuleContext(Expression_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitPattern(this);
		}
	}


}



class Arg_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_arg_;
    }

	expression_() {
	    return this.getTypedRuleContext(Expression_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterArg_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitArg_(this);
		}
	}


}



class Right_sideContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_right_side;
    }

	expression_() {
	    return this.getTypedRuleContext(Expression_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterRight_side(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitRight_side(this);
		}
	}


}



class Expression_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_expression_;
    }

	term_() {
	    return this.getTypedRuleContext(Term_Context,0);
	};

	expression_() {
	    return this.getTypedRuleContext(Expression_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterExpression_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitExpression_(this);
		}
	}


}



class Term_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_term_;
    }

	symbol() {
	    return this.getTypedRuleContext(SymbolContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	expression_() {
	    return this.getTypedRuleContext(Expression_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterTerm_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitTerm_(this);
		}
	}


}



class Block_endingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_block_ending;
    }

	arg_() {
	    return this.getTypedRuleContext(Arg_Context,0);
	};

	block_() {
	    return this.getTypedRuleContext(Block_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterBlock_ending(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitBlock_ending(this);
		}
	}


}



class SymbolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_symbol;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	DIGITS() {
	    return this.getToken(refalParser.DIGITS, 0);
	};

	STRING() {
	    return this.getToken(refalParser.STRING, 0);
	};

	STRING2() {
	    return this.getToken(refalParser.STRING2, 0);
	};

	CHAR() {
	    return this.getToken(refalParser.CHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterSymbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitSymbol(this);
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
        this.ruleIndex = refalParser.RULE_identifier;
    }

	IDENTIFER() {
	    return this.getToken(refalParser.IDENTIFER, 0);
	};

	STRING() {
	    return this.getToken(refalParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_variable;
    }

	svar() {
	    return this.getTypedRuleContext(SvarContext,0);
	};

	tvar() {
	    return this.getTypedRuleContext(TvarContext,0);
	};

	evar() {
	    return this.getTypedRuleContext(EvarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitVariable(this);
		}
	}


}



class SvarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_svar;
    }

	index() {
	    return this.getTypedRuleContext(IndexContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterSvar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitSvar(this);
		}
	}


}



class TvarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_tvar;
    }

	index() {
	    return this.getTypedRuleContext(IndexContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterTvar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitTvar(this);
		}
	}


}



class EvarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_evar;
    }

	index() {
	    return this.getTypedRuleContext(IndexContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterEvar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitEvar(this);
		}
	}


}



class IndexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = refalParser.RULE_index;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	DIGITS() {
	    return this.getToken(refalParser.DIGITS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.enterIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof refalListener ) {
	        listener.exitIndex(this);
		}
	}


}




refalParser.File_Context = File_Context; 
refalParser.ProgramContext = ProgramContext; 
refalParser.F_definitionContext = F_definitionContext; 
refalParser.External_declContext = External_declContext; 
refalParser.F_name_listContext = F_name_listContext; 
refalParser.F_nameContext = F_nameContext; 
refalParser.Block_Context = Block_Context; 
refalParser.SentenceContext = SentenceContext; 
refalParser.Left_sideContext = Left_sideContext; 
refalParser.ConditionsContext = ConditionsContext; 
refalParser.PatternContext = PatternContext; 
refalParser.Arg_Context = Arg_Context; 
refalParser.Right_sideContext = Right_sideContext; 
refalParser.Expression_Context = Expression_Context; 
refalParser.Term_Context = Term_Context; 
refalParser.Block_endingContext = Block_endingContext; 
refalParser.SymbolContext = SymbolContext; 
refalParser.IdentifierContext = IdentifierContext; 
refalParser.VariableContext = VariableContext; 
refalParser.SvarContext = SvarContext; 
refalParser.TvarContext = TvarContext; 
refalParser.EvarContext = EvarContext; 
refalParser.IndexContext = IndexContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
