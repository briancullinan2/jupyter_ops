// Generated from Resources/Parsers/refal/refal.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import refalListener from './refalListener.js';
const serializedATN = [4,1,24,168,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,1,0,1,0,3,0,48,8,0,1,0,3,0,51,8,0,1,0,1,0,1,0,1,0,
3,0,57,8,0,1,0,1,0,1,0,1,0,5,0,63,8,0,10,0,12,0,66,9,0,1,1,3,1,69,8,1,1,
1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,3,3,84,8,3,1,4,1,4,1,5,
1,5,1,5,3,5,91,8,5,3,5,93,8,5,1,6,1,6,1,6,1,6,1,6,1,6,3,6,101,8,6,1,7,1,
7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,111,8,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,
12,1,12,3,12,122,8,12,1,13,1,13,1,13,1,13,1,13,1,13,3,13,130,8,13,1,14,1,
14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,3,15,143,8,15,1,16,1,16,
1,17,1,17,1,17,3,17,150,8,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,20,
1,20,1,20,1,20,1,21,1,21,3,21,166,8,21,1,21,0,1,0,22,0,2,4,6,8,10,12,14,
16,18,20,22,24,26,28,30,32,34,36,38,40,42,0,2,1,0,5,7,1,0,18,19,165,0,56,
1,0,0,0,2,68,1,0,0,0,4,75,1,0,0,0,6,78,1,0,0,0,8,85,1,0,0,0,10,87,1,0,0,
0,12,94,1,0,0,0,14,102,1,0,0,0,16,110,1,0,0,0,18,112,1,0,0,0,20,114,1,0,
0,0,22,116,1,0,0,0,24,121,1,0,0,0,26,129,1,0,0,0,28,131,1,0,0,0,30,142,1,
0,0,0,32,144,1,0,0,0,34,149,1,0,0,0,36,151,1,0,0,0,38,155,1,0,0,0,40,159,
1,0,0,0,42,165,1,0,0,0,44,45,6,0,-1,0,45,50,3,2,1,0,46,48,5,1,0,0,47,46,
1,0,0,0,47,48,1,0,0,0,48,49,1,0,0,0,49,51,3,0,0,0,50,47,1,0,0,0,50,51,1,
0,0,0,51,57,1,0,0,0,52,53,3,4,2,0,53,54,5,1,0,0,54,55,3,0,0,2,55,57,1,0,
0,0,56,44,1,0,0,0,56,52,1,0,0,0,57,64,1,0,0,0,58,59,10,1,0,0,59,60,3,4,2,
0,60,61,5,1,0,0,61,63,1,0,0,0,62,58,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,
64,65,1,0,0,0,65,1,1,0,0,0,66,64,1,0,0,0,67,69,5,2,0,0,68,67,1,0,0,0,68,
69,1,0,0,0,69,70,1,0,0,0,70,71,3,8,4,0,71,72,5,3,0,0,72,73,3,10,5,0,73,74,
5,4,0,0,74,3,1,0,0,0,75,76,7,0,0,0,76,77,3,6,3,0,77,5,1,0,0,0,78,83,3,8,
4,0,79,80,5,8,0,0,80,81,3,6,3,0,81,82,5,1,0,0,82,84,1,0,0,0,83,79,1,0,0,
0,83,84,1,0,0,0,84,7,1,0,0,0,85,86,3,32,16,0,86,9,1,0,0,0,87,92,3,12,6,0,
88,90,5,1,0,0,89,91,3,10,5,0,90,89,1,0,0,0,90,91,1,0,0,0,91,93,1,0,0,0,92,
88,1,0,0,0,92,93,1,0,0,0,93,11,1,0,0,0,94,95,3,14,7,0,95,100,3,16,8,0,96,
97,5,9,0,0,97,101,3,22,11,0,98,99,5,8,0,0,99,101,3,28,14,0,100,96,1,0,0,
0,100,98,1,0,0,0,101,13,1,0,0,0,102,103,3,18,9,0,103,15,1,0,0,0,104,105,
5,8,0,0,105,106,3,20,10,0,106,107,5,10,0,0,107,108,3,18,9,0,108,109,3,16,
8,0,109,111,1,0,0,0,110,104,1,0,0,0,110,111,1,0,0,0,111,17,1,0,0,0,112,113,
3,24,12,0,113,19,1,0,0,0,114,115,3,24,12,0,115,21,1,0,0,0,116,117,3,24,12,
0,117,23,1,0,0,0,118,119,3,26,13,0,119,120,3,24,12,0,120,122,1,0,0,0,121,
118,1,0,0,0,121,122,1,0,0,0,122,25,1,0,0,0,123,130,3,30,15,0,124,130,3,34,
17,0,125,126,5,11,0,0,126,127,3,24,12,0,127,128,5,12,0,0,128,130,1,0,0,0,
129,123,1,0,0,0,129,124,1,0,0,0,129,125,1,0,0,0,130,27,1,0,0,0,131,132,3,
20,10,0,132,133,5,10,0,0,133,134,5,3,0,0,134,135,3,10,5,0,135,136,5,4,0,
0,136,29,1,0,0,0,137,143,3,32,16,0,138,143,5,17,0,0,139,143,5,19,0,0,140,
143,5,20,0,0,141,143,5,21,0,0,142,137,1,0,0,0,142,138,1,0,0,0,142,139,1,
0,0,0,142,140,1,0,0,0,142,141,1,0,0,0,143,31,1,0,0,0,144,145,7,1,0,0,145,
33,1,0,0,0,146,150,3,36,18,0,147,150,3,38,19,0,148,150,3,40,20,0,149,146,
1,0,0,0,149,147,1,0,0,0,149,148,1,0,0,0,150,35,1,0,0,0,151,152,5,13,0,0,
152,153,5,14,0,0,153,154,3,42,21,0,154,37,1,0,0,0,155,156,5,15,0,0,156,157,
5,14,0,0,157,158,3,42,21,0,158,39,1,0,0,0,159,160,5,16,0,0,160,161,5,14,
0,0,161,162,3,42,21,0,162,41,1,0,0,0,163,166,3,32,16,0,164,166,5,17,0,0,
165,163,1,0,0,0,165,164,1,0,0,0,166,43,1,0,0,0,15,47,50,56,64,68,83,90,92,
100,110,121,129,142,149,165];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class refalParser extends antlr4.Parser {

    static grammarFileName = "refal.g4";
    static literalNames = [ null, "';'", "'$ENTRY'", "'{'", "'}'", "'$EXTERNAL'", 
                            "'$EXTERN'", "'$EXTRN'", "','", "'='", "':'", 
                            "'<'", "'>'", "'s'", "'.'", "'t'", "'e'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "DIGITS", "IDENTIFER", "STRING", "STRING2", 
                             "CHAR", "LINE_COMMENT", "BLOCK_COMMENT", "WS" ];
    static ruleNames = [ "program", "f_definition", "external_decl", "f_name_list", 
                         "f_name", "block_", "sentence", "left_side", "conditions", 
                         "pattern", "arg_", "right_side", "expression_", 
                         "term_", "block_ending", "symbol", "identifier", 
                         "variable", "svar", "tvar", "evar", "index" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = refalParser.ruleNames;
        this.literalNames = refalParser.literalNames;
        this.symbolicNames = refalParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 0:
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



	program(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ProgramContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 0;
	    this.enterRecursionRule(localctx, 0, refalParser.RULE_program, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case refalParser.T__1:
	        case refalParser.IDENTIFER:
	        case refalParser.STRING:
	            this.state = 45;
	            this.f_definition();
	            this.state = 50;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            if(la_===1) {
	                this.state = 47;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===refalParser.T__0) {
	                    this.state = 46;
	                    this.match(refalParser.T__0);
	                }

	                this.state = 49;
	                this.program(0);

	            }
	            break;
	        case refalParser.T__4:
	        case refalParser.T__5:
	        case refalParser.T__6:
	            this.state = 52;
	            this.external_decl();
	            this.state = 53;
	            this.match(refalParser.T__0);
	            this.state = 54;
	            this.program(2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 64;
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
	                this.state = 58;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 59;
	                this.external_decl();
	                this.state = 60;
	                this.match(refalParser.T__0); 
	            }
	            this.state = 66;
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
	    this.enterRule(localctx, 2, refalParser.RULE_f_definition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===refalParser.T__1) {
	            this.state = 67;
	            this.match(refalParser.T__1);
	        }

	        this.state = 70;
	        this.f_name();
	        this.state = 71;
	        this.match(refalParser.T__2);
	        this.state = 72;
	        this.block_();
	        this.state = 73;
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
	    this.enterRule(localctx, 4, refalParser.RULE_external_decl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << refalParser.T__4) | (1 << refalParser.T__5) | (1 << refalParser.T__6))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 76;
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
	    this.enterRule(localctx, 6, refalParser.RULE_f_name_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.f_name();
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===refalParser.T__7) {
	            this.state = 79;
	            this.match(refalParser.T__7);
	            this.state = 80;
	            this.f_name_list();
	            this.state = 81;
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
	    this.enterRule(localctx, 8, refalParser.RULE_f_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
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
	    this.enterRule(localctx, 10, refalParser.RULE_block_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.sentence();
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===refalParser.T__0) {
	            this.state = 88;
	            this.match(refalParser.T__0);
	            this.state = 90;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << refalParser.T__7) | (1 << refalParser.T__8) | (1 << refalParser.T__10) | (1 << refalParser.T__12) | (1 << refalParser.T__14) | (1 << refalParser.T__15) | (1 << refalParser.DIGITS) | (1 << refalParser.IDENTIFER) | (1 << refalParser.STRING) | (1 << refalParser.STRING2) | (1 << refalParser.CHAR))) !== 0)) {
	                this.state = 89;
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
	    this.enterRule(localctx, 12, refalParser.RULE_sentence);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.left_side();
	        this.state = 95;
	        this.conditions();
	        this.state = 100;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case refalParser.T__8:
	            this.state = 96;
	            this.match(refalParser.T__8);
	            this.state = 97;
	            this.right_side();
	            break;
	        case refalParser.T__7:
	            this.state = 98;
	            this.match(refalParser.T__7);
	            this.state = 99;
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
	    this.enterRule(localctx, 14, refalParser.RULE_left_side);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
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
	    this.enterRule(localctx, 16, refalParser.RULE_conditions);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 104;
	            this.match(refalParser.T__7);
	            this.state = 105;
	            this.arg_();
	            this.state = 106;
	            this.match(refalParser.T__9);
	            this.state = 107;
	            this.pattern();
	            this.state = 108;
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
	    this.enterRule(localctx, 18, refalParser.RULE_pattern);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
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
	    this.enterRule(localctx, 20, refalParser.RULE_arg_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
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
	    this.enterRule(localctx, 22, refalParser.RULE_right_side);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
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
	    this.enterRule(localctx, 24, refalParser.RULE_expression_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << refalParser.T__10) | (1 << refalParser.T__12) | (1 << refalParser.T__14) | (1 << refalParser.T__15) | (1 << refalParser.DIGITS) | (1 << refalParser.IDENTIFER) | (1 << refalParser.STRING) | (1 << refalParser.STRING2) | (1 << refalParser.CHAR))) !== 0)) {
	            this.state = 118;
	            this.term_();
	            this.state = 119;
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
	    this.enterRule(localctx, 26, refalParser.RULE_term_);
	    try {
	        this.state = 129;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case refalParser.DIGITS:
	        case refalParser.IDENTIFER:
	        case refalParser.STRING:
	        case refalParser.STRING2:
	        case refalParser.CHAR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 123;
	            this.symbol();
	            break;
	        case refalParser.T__12:
	        case refalParser.T__14:
	        case refalParser.T__15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 124;
	            this.variable();
	            break;
	        case refalParser.T__10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 125;
	            this.match(refalParser.T__10);
	            this.state = 126;
	            this.expression_();
	            this.state = 127;
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
	    this.enterRule(localctx, 28, refalParser.RULE_block_ending);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.arg_();
	        this.state = 132;
	        this.match(refalParser.T__9);
	        this.state = 133;
	        this.match(refalParser.T__2);
	        this.state = 134;
	        this.block_();
	        this.state = 135;
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
	    this.enterRule(localctx, 30, refalParser.RULE_symbol);
	    try {
	        this.state = 142;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 137;
	            this.identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 138;
	            this.match(refalParser.DIGITS);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 139;
	            this.match(refalParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 140;
	            this.match(refalParser.STRING2);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 141;
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
	    this.enterRule(localctx, 32, refalParser.RULE_identifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        _la = this._input.LA(1);
	        if(!(_la===refalParser.IDENTIFER || _la===refalParser.STRING)) {
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
	    this.enterRule(localctx, 34, refalParser.RULE_variable);
	    try {
	        this.state = 149;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case refalParser.T__12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 146;
	            this.svar();
	            break;
	        case refalParser.T__14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 147;
	            this.tvar();
	            break;
	        case refalParser.T__15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 148;
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
	    this.enterRule(localctx, 36, refalParser.RULE_svar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(refalParser.T__12);
	        this.state = 152;
	        this.match(refalParser.T__13);
	        this.state = 153;
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
	    this.enterRule(localctx, 38, refalParser.RULE_tvar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(refalParser.T__14);
	        this.state = 156;
	        this.match(refalParser.T__13);
	        this.state = 157;
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
	    this.enterRule(localctx, 40, refalParser.RULE_evar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this.match(refalParser.T__15);
	        this.state = 160;
	        this.match(refalParser.T__13);
	        this.state = 161;
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
	    this.enterRule(localctx, 42, refalParser.RULE_index);
	    try {
	        this.state = 165;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case refalParser.IDENTIFER:
	        case refalParser.STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 163;
	            this.identifier();
	            break;
	        case refalParser.DIGITS:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 164;
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

refalParser.RULE_program = 0;
refalParser.RULE_f_definition = 1;
refalParser.RULE_external_decl = 2;
refalParser.RULE_f_name_list = 3;
refalParser.RULE_f_name = 4;
refalParser.RULE_block_ = 5;
refalParser.RULE_sentence = 6;
refalParser.RULE_left_side = 7;
refalParser.RULE_conditions = 8;
refalParser.RULE_pattern = 9;
refalParser.RULE_arg_ = 10;
refalParser.RULE_right_side = 11;
refalParser.RULE_expression_ = 12;
refalParser.RULE_term_ = 13;
refalParser.RULE_block_ending = 14;
refalParser.RULE_symbol = 15;
refalParser.RULE_identifier = 16;
refalParser.RULE_variable = 17;
refalParser.RULE_svar = 18;
refalParser.RULE_tvar = 19;
refalParser.RULE_evar = 20;
refalParser.RULE_index = 21;

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
