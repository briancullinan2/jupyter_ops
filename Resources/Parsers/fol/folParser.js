// Generated from Resources/Parsers/fol/fol.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import folListener from './folListener.js';
const serializedATN = [4,1,18,132,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,5,0,22,8,0,10,0,12,0,25,9,
0,1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,5,1,61,8,1,10,1,12,1,64,9,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,72,8,1,1,1,1,1,
1,1,1,1,5,1,78,8,1,10,1,12,1,81,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,
91,8,2,10,2,12,2,94,9,2,1,2,1,2,3,2,98,8,2,1,3,1,3,1,4,1,4,5,4,104,8,4,10,
4,12,4,107,9,4,1,5,1,5,5,5,111,8,5,10,5,12,5,114,9,5,1,6,1,6,5,6,118,8,6,
10,6,12,6,121,9,6,1,7,1,7,5,7,125,8,7,10,7,12,7,128,9,7,1,8,1,8,1,8,0,1,
2,9,0,2,4,6,8,10,12,14,16,0,1,1,0,13,16,138,0,18,1,0,0,0,2,71,1,0,0,0,4,
97,1,0,0,0,6,99,1,0,0,0,8,101,1,0,0,0,10,108,1,0,0,0,12,115,1,0,0,0,14,122,
1,0,0,0,16,129,1,0,0,0,18,23,3,2,1,0,19,20,5,17,0,0,20,22,3,2,1,0,21,19,
1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,29,1,0,0,0,25,23,1,
0,0,0,26,28,5,17,0,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,
0,0,30,32,1,0,0,0,31,29,1,0,0,0,32,33,5,0,0,1,33,1,1,0,0,0,34,35,6,1,-1,
0,35,36,5,9,0,0,36,37,3,2,1,0,37,38,3,6,3,0,38,39,3,2,1,6,39,72,1,0,0,0,
40,41,5,9,0,0,41,72,3,2,1,5,42,43,5,10,0,0,43,44,5,6,0,0,44,45,3,8,4,0,45,
46,5,7,0,0,46,47,3,2,1,4,47,72,1,0,0,0,48,49,5,11,0,0,49,50,5,6,0,0,50,51,
3,8,4,0,51,52,5,7,0,0,52,53,3,2,1,3,53,72,1,0,0,0,54,55,3,10,5,0,55,56,5,
6,0,0,56,62,3,4,2,0,57,58,3,16,8,0,58,59,3,4,2,0,59,61,1,0,0,0,60,57,1,0,
0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,65,1,0,0,0,64,62,1,0,0,
0,65,66,5,7,0,0,66,72,1,0,0,0,67,68,3,4,2,0,68,69,5,8,0,0,69,70,3,4,2,0,
70,72,1,0,0,0,71,34,1,0,0,0,71,40,1,0,0,0,71,42,1,0,0,0,71,48,1,0,0,0,71,
54,1,0,0,0,71,67,1,0,0,0,72,79,1,0,0,0,73,74,10,7,0,0,74,75,3,6,3,0,75,76,
3,2,1,8,76,78,1,0,0,0,77,73,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,
0,0,0,80,3,1,0,0,0,81,79,1,0,0,0,82,98,3,12,6,0,83,98,3,8,4,0,84,85,3,14,
7,0,85,86,5,6,0,0,86,92,3,4,2,0,87,88,3,16,8,0,88,89,3,4,2,0,89,91,1,0,0,
0,90,87,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,95,1,0,0,0,
94,92,1,0,0,0,95,96,5,7,0,0,96,98,1,0,0,0,97,82,1,0,0,0,97,83,1,0,0,0,97,
84,1,0,0,0,98,5,1,0,0,0,99,100,7,0,0,0,100,7,1,0,0,0,101,105,5,1,0,0,102,
104,5,12,0,0,103,102,1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,0,105,106,1,0,
0,0,106,9,1,0,0,0,107,105,1,0,0,0,108,112,5,2,0,0,109,111,5,12,0,0,110,109,
1,0,0,0,111,114,1,0,0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,11,1,0,0,0,114,
112,1,0,0,0,115,119,5,3,0,0,116,118,5,12,0,0,117,116,1,0,0,0,118,121,1,0,
0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,13,1,0,0,0,121,119,1,0,0,0,122,126,
5,4,0,0,123,125,5,12,0,0,124,123,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,
126,127,1,0,0,0,127,15,1,0,0,0,128,126,1,0,0,0,129,130,5,5,0,0,130,17,1,
0,0,0,11,23,29,62,71,79,92,97,105,112,119,126];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class folParser extends antlr4.Parser {

    static grammarFileName = "fol.g4";
    static literalNames = [ null, "'?'", "'_'", "'#'", "'.'", "','", "'('", 
                            "')'", "'='", "'!'", "'Forall'", "'Exists'", 
                            null, "'\\/'", "'^'", "'->'", "'<->'" ];
    static symbolicNames = [ null, null, null, null, null, null, "LPAREN", 
                             "RPAREN", "EQUAL", "NOT", "FORALL", "EXISTS", 
                             "CHARACTER", "CONJ", "DISJ", "IMPL", "BICOND", 
                             "ENDLINE", "WHITESPACE" ];
    static ruleNames = [ "condition", "formula", "term", "bin_connective", 
                         "variable", "pred_constant", "ind_constant", "func_constant", 
                         "separator" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = folParser.ruleNames;
        this.literalNames = folParser.literalNames;
        this.symbolicNames = folParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.formula_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    formula_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 7);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, folParser.RULE_condition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.formula(0);
	        this.state = 23;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 19;
	                this.match(folParser.ENDLINE);
	                this.state = 20;
	                this.formula(0); 
	            }
	            this.state = 25;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===folParser.ENDLINE) {
	            this.state = 26;
	            this.match(folParser.ENDLINE);
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 32;
	        this.match(folParser.EOF);
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


	formula(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new FormulaContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, folParser.RULE_formula, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 35;
	            this.match(folParser.NOT);
	            this.state = 36;
	            this.formula(0);
	            this.state = 37;
	            this.bin_connective();
	            this.state = 38;
	            this.formula(6);
	            break;

	        case 2:
	            this.state = 40;
	            this.match(folParser.NOT);
	            this.state = 41;
	            this.formula(5);
	            break;

	        case 3:
	            this.state = 42;
	            this.match(folParser.FORALL);
	            this.state = 43;
	            this.match(folParser.LPAREN);
	            this.state = 44;
	            this.variable();
	            this.state = 45;
	            this.match(folParser.RPAREN);
	            this.state = 46;
	            this.formula(4);
	            break;

	        case 4:
	            this.state = 48;
	            this.match(folParser.EXISTS);
	            this.state = 49;
	            this.match(folParser.LPAREN);
	            this.state = 50;
	            this.variable();
	            this.state = 51;
	            this.match(folParser.RPAREN);
	            this.state = 52;
	            this.formula(3);
	            break;

	        case 5:
	            this.state = 54;
	            this.pred_constant();
	            this.state = 55;
	            this.match(folParser.LPAREN);
	            this.state = 56;
	            this.term();
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===folParser.T__4) {
	                this.state = 57;
	                this.separator();
	                this.state = 58;
	                this.term();
	                this.state = 64;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 65;
	            this.match(folParser.RPAREN);
	            break;

	        case 6:
	            this.state = 67;
	            this.term();
	            this.state = 68;
	            this.match(folParser.EQUAL);
	            this.state = 69;
	            this.term();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 79;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new FormulaContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, folParser.RULE_formula);
	                this.state = 73;
	                if (!( this.precpred(this._ctx, 7))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                }
	                this.state = 74;
	                this.bin_connective();
	                this.state = 75;
	                this.formula(8); 
	            }
	            this.state = 81;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, folParser.RULE_term);
	    var _la = 0; // Token type
	    try {
	        this.state = 97;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case folParser.T__2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.ind_constant();
	            break;
	        case folParser.T__0:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.variable();
	            break;
	        case folParser.T__3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 84;
	            this.func_constant();
	            this.state = 85;
	            this.match(folParser.LPAREN);
	            this.state = 86;
	            this.term();
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===folParser.T__4) {
	                this.state = 87;
	                this.separator();
	                this.state = 88;
	                this.term();
	                this.state = 94;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 95;
	            this.match(folParser.RPAREN);
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



	bin_connective() {
	    let localctx = new Bin_connectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, folParser.RULE_bin_connective);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << folParser.CONJ) | (1 << folParser.DISJ) | (1 << folParser.IMPL) | (1 << folParser.BICOND))) !== 0))) {
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
	    this.enterRule(localctx, 8, folParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(folParser.T__0);
	        this.state = 105;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 102;
	                this.match(folParser.CHARACTER); 
	            }
	            this.state = 107;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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



	pred_constant() {
	    let localctx = new Pred_constantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, folParser.RULE_pred_constant);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(folParser.T__1);
	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===folParser.CHARACTER) {
	            this.state = 109;
	            this.match(folParser.CHARACTER);
	            this.state = 114;
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



	ind_constant() {
	    let localctx = new Ind_constantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, folParser.RULE_ind_constant);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(folParser.T__2);
	        this.state = 119;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 116;
	                this.match(folParser.CHARACTER); 
	            }
	            this.state = 121;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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



	func_constant() {
	    let localctx = new Func_constantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, folParser.RULE_func_constant);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(folParser.T__3);
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===folParser.CHARACTER) {
	            this.state = 123;
	            this.match(folParser.CHARACTER);
	            this.state = 128;
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



	separator() {
	    let localctx = new SeparatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, folParser.RULE_separator);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(folParser.T__4);
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

folParser.EOF = antlr4.Token.EOF;
folParser.T__0 = 1;
folParser.T__1 = 2;
folParser.T__2 = 3;
folParser.T__3 = 4;
folParser.T__4 = 5;
folParser.LPAREN = 6;
folParser.RPAREN = 7;
folParser.EQUAL = 8;
folParser.NOT = 9;
folParser.FORALL = 10;
folParser.EXISTS = 11;
folParser.CHARACTER = 12;
folParser.CONJ = 13;
folParser.DISJ = 14;
folParser.IMPL = 15;
folParser.BICOND = 16;
folParser.ENDLINE = 17;
folParser.WHITESPACE = 18;

folParser.RULE_condition = 0;
folParser.RULE_formula = 1;
folParser.RULE_term = 2;
folParser.RULE_bin_connective = 3;
folParser.RULE_variable = 4;
folParser.RULE_pred_constant = 5;
folParser.RULE_ind_constant = 6;
folParser.RULE_func_constant = 7;
folParser.RULE_separator = 8;

class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = folParser.RULE_condition;
    }

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	EOF() {
	    return this.getToken(folParser.EOF, 0);
	};

	ENDLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(folParser.ENDLINE);
	    } else {
	        return this.getToken(folParser.ENDLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.exitCondition(this);
		}
	}


}



class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = folParser.RULE_formula;
    }

	NOT() {
	    return this.getToken(folParser.NOT, 0);
	};

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	bin_connective() {
	    return this.getTypedRuleContext(Bin_connectiveContext,0);
	};

	FORALL() {
	    return this.getToken(folParser.FORALL, 0);
	};

	LPAREN() {
	    return this.getToken(folParser.LPAREN, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	RPAREN() {
	    return this.getToken(folParser.RPAREN, 0);
	};

	EXISTS() {
	    return this.getToken(folParser.EXISTS, 0);
	};

	pred_constant() {
	    return this.getTypedRuleContext(Pred_constantContext,0);
	};

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	separator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SeparatorContext);
	    } else {
	        return this.getTypedRuleContext(SeparatorContext,i);
	    }
	};

	EQUAL() {
	    return this.getToken(folParser.EQUAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.enterFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.exitFormula(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = folParser.RULE_term;
    }

	ind_constant() {
	    return this.getTypedRuleContext(Ind_constantContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	func_constant() {
	    return this.getTypedRuleContext(Func_constantContext,0);
	};

	LPAREN() {
	    return this.getToken(folParser.LPAREN, 0);
	};

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(folParser.RPAREN, 0);
	};

	separator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SeparatorContext);
	    } else {
	        return this.getTypedRuleContext(SeparatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.exitTerm(this);
		}
	}


}



class Bin_connectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = folParser.RULE_bin_connective;
    }

	CONJ() {
	    return this.getToken(folParser.CONJ, 0);
	};

	DISJ() {
	    return this.getToken(folParser.DISJ, 0);
	};

	IMPL() {
	    return this.getToken(folParser.IMPL, 0);
	};

	BICOND() {
	    return this.getToken(folParser.BICOND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.enterBin_connective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.exitBin_connective(this);
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
        this.ruleIndex = folParser.RULE_variable;
    }

	CHARACTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(folParser.CHARACTER);
	    } else {
	        return this.getToken(folParser.CHARACTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.exitVariable(this);
		}
	}


}



class Pred_constantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = folParser.RULE_pred_constant;
    }

	CHARACTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(folParser.CHARACTER);
	    } else {
	        return this.getToken(folParser.CHARACTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.enterPred_constant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.exitPred_constant(this);
		}
	}


}



class Ind_constantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = folParser.RULE_ind_constant;
    }

	CHARACTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(folParser.CHARACTER);
	    } else {
	        return this.getToken(folParser.CHARACTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.enterInd_constant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.exitInd_constant(this);
		}
	}


}



class Func_constantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = folParser.RULE_func_constant;
    }

	CHARACTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(folParser.CHARACTER);
	    } else {
	        return this.getToken(folParser.CHARACTER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.enterFunc_constant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.exitFunc_constant(this);
		}
	}


}



class SeparatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = folParser.RULE_separator;
    }


	enterRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.enterSeparator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof folListener ) {
	        listener.exitSeparator(this);
		}
	}


}




folParser.ConditionContext = ConditionContext; 
folParser.FormulaContext = FormulaContext; 
folParser.TermContext = TermContext; 
folParser.Bin_connectiveContext = Bin_connectiveContext; 
folParser.VariableContext = VariableContext; 
folParser.Pred_constantContext = Pred_constantContext; 
folParser.Ind_constantContext = Ind_constantContext; 
folParser.Func_constantContext = Func_constantContext; 
folParser.SeparatorContext = SeparatorContext; 
