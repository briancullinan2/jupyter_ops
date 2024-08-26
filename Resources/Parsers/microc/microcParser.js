// Generated from Resources/Parsers/microc/microc.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import microcListener from './microcListener.js';
const serializedATN = [4,1,15,102,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,4,0,28,8,0,11,0,12,0,29,1,1,1,1,1,1,1,1,3,1,36,8,1,1,2,1,2,1,2,1,2,1,
2,3,2,43,8,2,1,3,1,3,1,3,1,3,1,4,1,4,5,4,51,8,4,10,4,12,4,54,9,4,1,4,1,4,
1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,3,7,70,8,7,1,8,1,8,1,8,1,
8,1,8,3,8,77,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,88,8,9,10,9,12,
9,91,9,9,1,10,1,10,1,10,3,10,96,8,10,1,11,1,11,1,12,1,12,1,12,0,1,18,13,
0,2,4,6,8,10,12,14,16,18,20,22,24,0,0,100,0,27,1,0,0,0,2,35,1,0,0,0,4,37,
1,0,0,0,6,44,1,0,0,0,8,48,1,0,0,0,10,57,1,0,0,0,12,60,1,0,0,0,14,69,1,0,
0,0,16,76,1,0,0,0,18,78,1,0,0,0,20,95,1,0,0,0,22,97,1,0,0,0,24,99,1,0,0,
0,26,28,3,2,1,0,27,26,1,0,0,0,28,29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,
30,1,1,0,0,0,31,36,3,4,2,0,32,36,3,6,3,0,33,36,3,8,4,0,34,36,3,10,5,0,35,
31,1,0,0,0,35,32,1,0,0,0,35,33,1,0,0,0,35,34,1,0,0,0,36,3,1,0,0,0,37,38,
5,1,0,0,38,39,3,12,6,0,39,42,3,2,1,0,40,41,5,2,0,0,41,43,3,2,1,0,42,40,1,
0,0,0,42,43,1,0,0,0,43,5,1,0,0,0,44,45,5,3,0,0,45,46,3,12,6,0,46,47,3,2,
1,0,47,7,1,0,0,0,48,52,5,4,0,0,49,51,3,2,1,0,50,49,1,0,0,0,51,54,1,0,0,0,
52,50,1,0,0,0,52,53,1,0,0,0,53,55,1,0,0,0,54,52,1,0,0,0,55,56,5,5,0,0,56,
9,1,0,0,0,57,58,3,14,7,0,58,59,5,6,0,0,59,11,1,0,0,0,60,61,5,7,0,0,61,62,
3,14,7,0,62,63,5,8,0,0,63,13,1,0,0,0,64,70,3,16,8,0,65,66,3,22,11,0,66,67,
5,9,0,0,67,68,3,14,7,0,68,70,1,0,0,0,69,64,1,0,0,0,69,65,1,0,0,0,70,15,1,
0,0,0,71,77,3,18,9,0,72,73,3,18,9,0,73,74,5,10,0,0,74,75,3,18,9,0,75,77,
1,0,0,0,76,71,1,0,0,0,76,72,1,0,0,0,77,17,1,0,0,0,78,79,6,9,-1,0,79,80,3,
20,10,0,80,89,1,0,0,0,81,82,10,2,0,0,82,83,5,11,0,0,83,88,3,20,10,0,84,85,
10,1,0,0,85,86,5,12,0,0,86,88,3,20,10,0,87,81,1,0,0,0,87,84,1,0,0,0,88,91,
1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,19,1,0,0,0,91,89,1,0,0,0,92,96,3,
22,11,0,93,96,3,24,12,0,94,96,3,12,6,0,95,92,1,0,0,0,95,93,1,0,0,0,95,94,
1,0,0,0,96,21,1,0,0,0,97,98,5,13,0,0,98,23,1,0,0,0,99,100,5,14,0,0,100,25,
1,0,0,0,9,29,35,42,52,69,76,87,89,95];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class microcParser extends antlr4.Parser {

    static grammarFileName = "microc.g4";
    static literalNames = [ null, "'if'", "'else'", "'while'", "'{'", "'}'", 
                            "';'", "'('", "')'", "'='", "'<'", "'+'", "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "STRING", "INT", 
                             "WS" ];
    static ruleNames = [ "program", "statement", "ifstatement", "whilestatement", 
                         "blockstatement", "exprstatement", "paren_expr", 
                         "expr", "test", "sum_", "term", "id_", "integer" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = microcParser.ruleNames;
        this.literalNames = microcParser.literalNames;
        this.symbolicNames = microcParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 9:
    	    		return this.sum__sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    sum__sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, microcParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 26;
	            this.statement();
	            this.state = 29; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << microcParser.T__0) | (1 << microcParser.T__2) | (1 << microcParser.T__3) | (1 << microcParser.T__6) | (1 << microcParser.STRING) | (1 << microcParser.INT))) !== 0));
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, microcParser.RULE_statement);
	    try {
	        this.state = 35;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case microcParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 31;
	            this.ifstatement();
	            break;
	        case microcParser.T__2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 32;
	            this.whilestatement();
	            break;
	        case microcParser.T__3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 33;
	            this.blockstatement();
	            break;
	        case microcParser.T__6:
	        case microcParser.STRING:
	        case microcParser.INT:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 34;
	            this.exprstatement();
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



	ifstatement() {
	    let localctx = new IfstatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, microcParser.RULE_ifstatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(microcParser.T__0);
	        this.state = 38;
	        this.paren_expr();
	        this.state = 39;
	        this.statement();
	        this.state = 42;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 40;
	            this.match(microcParser.T__1);
	            this.state = 41;
	            this.statement();

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



	whilestatement() {
	    let localctx = new WhilestatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, microcParser.RULE_whilestatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(microcParser.T__2);
	        this.state = 45;
	        this.paren_expr();
	        this.state = 46;
	        this.statement();
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



	blockstatement() {
	    let localctx = new BlockstatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, microcParser.RULE_blockstatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(microcParser.T__3);
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << microcParser.T__0) | (1 << microcParser.T__2) | (1 << microcParser.T__3) | (1 << microcParser.T__6) | (1 << microcParser.STRING) | (1 << microcParser.INT))) !== 0)) {
	            this.state = 49;
	            this.statement();
	            this.state = 54;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 55;
	        this.match(microcParser.T__4);
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



	exprstatement() {
	    let localctx = new ExprstatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, microcParser.RULE_exprstatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.expr();
	        this.state = 58;
	        this.match(microcParser.T__5);
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



	paren_expr() {
	    let localctx = new Paren_exprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, microcParser.RULE_paren_expr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(microcParser.T__6);
	        this.state = 61;
	        this.expr();
	        this.state = 62;
	        this.match(microcParser.T__7);
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



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, microcParser.RULE_expr);
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.test();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.id_();
	            this.state = 66;
	            this.match(microcParser.T__8);
	            this.state = 67;
	            this.expr();
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



	test() {
	    let localctx = new TestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, microcParser.RULE_test);
	    try {
	        this.state = 76;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
	            this.sum_(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 72;
	            this.sum_(0);
	            this.state = 73;
	            this.match(microcParser.T__9);
	            this.state = 74;
	            this.sum_(0);
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


	sum_(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Sum_Context(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, microcParser.RULE_sum_, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.term();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 89;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 87;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Sum_Context(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, microcParser.RULE_sum_);
	                    this.state = 81;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 82;
	                    this.match(microcParser.T__10);
	                    this.state = 83;
	                    this.term();
	                    break;

	                case 2:
	                    localctx = new Sum_Context(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, microcParser.RULE_sum_);
	                    this.state = 84;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 85;
	                    this.match(microcParser.T__11);
	                    this.state = 86;
	                    this.term();
	                    break;

	                } 
	            }
	            this.state = 91;
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, microcParser.RULE_term);
	    try {
	        this.state = 95;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case microcParser.STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 92;
	            this.id_();
	            break;
	        case microcParser.INT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 93;
	            this.integer();
	            break;
	        case microcParser.T__6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 94;
	            this.paren_expr();
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



	id_() {
	    let localctx = new Id_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, microcParser.RULE_id_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(microcParser.STRING);
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



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, microcParser.RULE_integer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(microcParser.INT);
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

microcParser.EOF = antlr4.Token.EOF;
microcParser.T__0 = 1;
microcParser.T__1 = 2;
microcParser.T__2 = 3;
microcParser.T__3 = 4;
microcParser.T__4 = 5;
microcParser.T__5 = 6;
microcParser.T__6 = 7;
microcParser.T__7 = 8;
microcParser.T__8 = 9;
microcParser.T__9 = 10;
microcParser.T__10 = 11;
microcParser.T__11 = 12;
microcParser.STRING = 13;
microcParser.INT = 14;
microcParser.WS = 15;

microcParser.RULE_program = 0;
microcParser.RULE_statement = 1;
microcParser.RULE_ifstatement = 2;
microcParser.RULE_whilestatement = 3;
microcParser.RULE_blockstatement = 4;
microcParser.RULE_exprstatement = 5;
microcParser.RULE_paren_expr = 6;
microcParser.RULE_expr = 7;
microcParser.RULE_test = 8;
microcParser.RULE_sum_ = 9;
microcParser.RULE_term = 10;
microcParser.RULE_id_ = 11;
microcParser.RULE_integer = 12;

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
        this.ruleIndex = microcParser.RULE_program;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = microcParser.RULE_statement;
    }

	ifstatement() {
	    return this.getTypedRuleContext(IfstatementContext,0);
	};

	whilestatement() {
	    return this.getTypedRuleContext(WhilestatementContext,0);
	};

	blockstatement() {
	    return this.getTypedRuleContext(BlockstatementContext,0);
	};

	exprstatement() {
	    return this.getTypedRuleContext(ExprstatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.exitStatement(this);
		}
	}


}



class IfstatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = microcParser.RULE_ifstatement;
    }

	paren_expr() {
	    return this.getTypedRuleContext(Paren_exprContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.enterIfstatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.exitIfstatement(this);
		}
	}


}



class WhilestatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = microcParser.RULE_whilestatement;
    }

	paren_expr() {
	    return this.getTypedRuleContext(Paren_exprContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.enterWhilestatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.exitWhilestatement(this);
		}
	}


}



class BlockstatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = microcParser.RULE_blockstatement;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.enterBlockstatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.exitBlockstatement(this);
		}
	}


}



class ExprstatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = microcParser.RULE_exprstatement;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.enterExprstatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.exitExprstatement(this);
		}
	}


}



class Paren_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = microcParser.RULE_paren_expr;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.enterParen_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.exitParen_expr(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = microcParser.RULE_expr;
    }

	test() {
	    return this.getTypedRuleContext(TestContext,0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.exitExpr(this);
		}
	}


}



class TestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = microcParser.RULE_test;
    }

	sum_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sum_Context);
	    } else {
	        return this.getTypedRuleContext(Sum_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.enterTest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.exitTest(this);
		}
	}


}



class Sum_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = microcParser.RULE_sum_;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	sum_() {
	    return this.getTypedRuleContext(Sum_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.enterSum_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.exitSum_(this);
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
        this.ruleIndex = microcParser.RULE_term;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	paren_expr() {
	    return this.getTypedRuleContext(Paren_exprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.exitTerm(this);
		}
	}


}



class Id_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = microcParser.RULE_id_;
    }

	STRING() {
	    return this.getToken(microcParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.enterId_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.exitId_(this);
		}
	}


}



class IntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = microcParser.RULE_integer;
    }

	INT() {
	    return this.getToken(microcParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof microcListener ) {
	        listener.exitInteger(this);
		}
	}


}




microcParser.ProgramContext = ProgramContext; 
microcParser.StatementContext = StatementContext; 
microcParser.IfstatementContext = IfstatementContext; 
microcParser.WhilestatementContext = WhilestatementContext; 
microcParser.BlockstatementContext = BlockstatementContext; 
microcParser.ExprstatementContext = ExprstatementContext; 
microcParser.Paren_exprContext = Paren_exprContext; 
microcParser.ExprContext = ExprContext; 
microcParser.TestContext = TestContext; 
microcParser.Sum_Context = Sum_Context; 
microcParser.TermContext = TermContext; 
microcParser.Id_Context = Id_Context; 
microcParser.IntegerContext = IntegerContext; 
