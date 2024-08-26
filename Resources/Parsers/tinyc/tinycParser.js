// Generated from Resources/Parsers/tinyc/tinyc.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import tinycListener from './tinycListener.js';
const serializedATN = [4,1,16,99,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,5,1,46,8,1,10,1,12,1,49,9,1,1,1,1,1,1,1,1,1,1,1,3,1,56,8,1,1,2,1,2,1,
2,1,2,1,3,1,3,1,3,1,3,1,3,3,3,67,8,3,1,4,1,4,1,4,1,4,1,4,3,4,74,8,4,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,85,8,5,10,5,12,5,88,9,5,1,6,1,6,1,6,
3,6,93,8,6,1,7,1,7,1,8,1,8,1,8,0,1,10,9,0,2,4,6,8,10,12,14,16,0,0,103,0,
19,1,0,0,0,2,55,1,0,0,0,4,57,1,0,0,0,6,66,1,0,0,0,8,73,1,0,0,0,10,75,1,0,
0,0,12,92,1,0,0,0,14,94,1,0,0,0,16,96,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,
0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,1,1,0,0,0,23,24,5,1,0,0,24,
25,3,4,2,0,25,26,3,2,1,0,26,56,1,0,0,0,27,28,5,1,0,0,28,29,3,4,2,0,29,30,
3,2,1,0,30,31,5,2,0,0,31,32,3,2,1,0,32,56,1,0,0,0,33,34,5,3,0,0,34,35,3,
4,2,0,35,36,3,2,1,0,36,56,1,0,0,0,37,38,5,4,0,0,38,39,3,2,1,0,39,40,5,3,
0,0,40,41,3,4,2,0,41,42,5,5,0,0,42,56,1,0,0,0,43,47,5,6,0,0,44,46,3,2,1,
0,45,44,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,50,1,0,0,0,
49,47,1,0,0,0,50,56,5,7,0,0,51,52,3,6,3,0,52,53,5,5,0,0,53,56,1,0,0,0,54,
56,5,5,0,0,55,23,1,0,0,0,55,27,1,0,0,0,55,33,1,0,0,0,55,37,1,0,0,0,55,43,
1,0,0,0,55,51,1,0,0,0,55,54,1,0,0,0,56,3,1,0,0,0,57,58,5,8,0,0,58,59,3,6,
3,0,59,60,5,9,0,0,60,5,1,0,0,0,61,67,3,8,4,0,62,63,3,14,7,0,63,64,5,10,0,
0,64,65,3,6,3,0,65,67,1,0,0,0,66,61,1,0,0,0,66,62,1,0,0,0,67,7,1,0,0,0,68,
74,3,10,5,0,69,70,3,10,5,0,70,71,5,11,0,0,71,72,3,10,5,0,72,74,1,0,0,0,73,
68,1,0,0,0,73,69,1,0,0,0,74,9,1,0,0,0,75,76,6,5,-1,0,76,77,3,12,6,0,77,86,
1,0,0,0,78,79,10,2,0,0,79,80,5,12,0,0,80,85,3,12,6,0,81,82,10,1,0,0,82,83,
5,13,0,0,83,85,3,12,6,0,84,78,1,0,0,0,84,81,1,0,0,0,85,88,1,0,0,0,86,84,
1,0,0,0,86,87,1,0,0,0,87,11,1,0,0,0,88,86,1,0,0,0,89,93,3,14,7,0,90,93,3,
16,8,0,91,93,3,4,2,0,92,89,1,0,0,0,92,90,1,0,0,0,92,91,1,0,0,0,93,13,1,0,
0,0,94,95,5,14,0,0,95,15,1,0,0,0,96,97,5,15,0,0,97,17,1,0,0,0,8,21,47,55,
66,73,84,86,92];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class tinycParser extends antlr4.Parser {

    static grammarFileName = "tinyc.g4";
    static literalNames = [ null, "'if'", "'else'", "'while'", "'do'", "';'", 
                            "'{'", "'}'", "'('", "')'", "'='", "'<'", "'+'", 
                            "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "STRING", 
                             "INT", "WS" ];
    static ruleNames = [ "program", "statement", "paren_expr", "expr", "test", 
                         "sum_", "term", "id_", "integer" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = tinycParser.ruleNames;
        this.literalNames = tinycParser.literalNames;
        this.symbolicNames = tinycParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 5:
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
	    this.enterRule(localctx, 0, tinycParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.statement();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tinycParser.T__0) | (1 << tinycParser.T__2) | (1 << tinycParser.T__3) | (1 << tinycParser.T__4) | (1 << tinycParser.T__5) | (1 << tinycParser.T__7) | (1 << tinycParser.STRING) | (1 << tinycParser.INT))) !== 0));
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
	    this.enterRule(localctx, 2, tinycParser.RULE_statement);
	    var _la = 0; // Token type
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 23;
	            this.match(tinycParser.T__0);
	            this.state = 24;
	            this.paren_expr();
	            this.state = 25;
	            this.statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.match(tinycParser.T__0);
	            this.state = 28;
	            this.paren_expr();
	            this.state = 29;
	            this.statement();
	            this.state = 30;
	            this.match(tinycParser.T__1);
	            this.state = 31;
	            this.statement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 33;
	            this.match(tinycParser.T__2);
	            this.state = 34;
	            this.paren_expr();
	            this.state = 35;
	            this.statement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 37;
	            this.match(tinycParser.T__3);
	            this.state = 38;
	            this.statement();
	            this.state = 39;
	            this.match(tinycParser.T__2);
	            this.state = 40;
	            this.paren_expr();
	            this.state = 41;
	            this.match(tinycParser.T__4);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 43;
	            this.match(tinycParser.T__5);
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tinycParser.T__0) | (1 << tinycParser.T__2) | (1 << tinycParser.T__3) | (1 << tinycParser.T__4) | (1 << tinycParser.T__5) | (1 << tinycParser.T__7) | (1 << tinycParser.STRING) | (1 << tinycParser.INT))) !== 0)) {
	                this.state = 44;
	                this.statement();
	                this.state = 49;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 50;
	            this.match(tinycParser.T__6);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 51;
	            this.expr();
	            this.state = 52;
	            this.match(tinycParser.T__4);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 54;
	            this.match(tinycParser.T__4);
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



	paren_expr() {
	    let localctx = new Paren_exprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, tinycParser.RULE_paren_expr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(tinycParser.T__7);
	        this.state = 58;
	        this.expr();
	        this.state = 59;
	        this.match(tinycParser.T__8);
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
	    this.enterRule(localctx, 6, tinycParser.RULE_expr);
	    try {
	        this.state = 66;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 61;
	            this.test();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 62;
	            this.id_();
	            this.state = 63;
	            this.match(tinycParser.T__9);
	            this.state = 64;
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
	    this.enterRule(localctx, 8, tinycParser.RULE_test);
	    try {
	        this.state = 73;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.sum_(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
	            this.sum_(0);
	            this.state = 70;
	            this.match(tinycParser.T__10);
	            this.state = 71;
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
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, tinycParser.RULE_sum_, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.term();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 86;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 84;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Sum_Context(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, tinycParser.RULE_sum_);
	                    this.state = 78;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 79;
	                    this.match(tinycParser.T__11);
	                    this.state = 80;
	                    this.term();
	                    break;

	                case 2:
	                    localctx = new Sum_Context(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, tinycParser.RULE_sum_);
	                    this.state = 81;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 82;
	                    this.match(tinycParser.T__12);
	                    this.state = 83;
	                    this.term();
	                    break;

	                } 
	            }
	            this.state = 88;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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
	    this.enterRule(localctx, 12, tinycParser.RULE_term);
	    try {
	        this.state = 92;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case tinycParser.STRING:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 89;
	            this.id_();
	            break;
	        case tinycParser.INT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
	            this.integer();
	            break;
	        case tinycParser.T__7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 91;
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
	    this.enterRule(localctx, 14, tinycParser.RULE_id_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(tinycParser.STRING);
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
	    this.enterRule(localctx, 16, tinycParser.RULE_integer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(tinycParser.INT);
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

tinycParser.EOF = antlr4.Token.EOF;
tinycParser.T__0 = 1;
tinycParser.T__1 = 2;
tinycParser.T__2 = 3;
tinycParser.T__3 = 4;
tinycParser.T__4 = 5;
tinycParser.T__5 = 6;
tinycParser.T__6 = 7;
tinycParser.T__7 = 8;
tinycParser.T__8 = 9;
tinycParser.T__9 = 10;
tinycParser.T__10 = 11;
tinycParser.T__11 = 12;
tinycParser.T__12 = 13;
tinycParser.STRING = 14;
tinycParser.INT = 15;
tinycParser.WS = 16;

tinycParser.RULE_program = 0;
tinycParser.RULE_statement = 1;
tinycParser.RULE_paren_expr = 2;
tinycParser.RULE_expr = 3;
tinycParser.RULE_test = 4;
tinycParser.RULE_sum_ = 5;
tinycParser.RULE_term = 6;
tinycParser.RULE_id_ = 7;
tinycParser.RULE_integer = 8;

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
        this.ruleIndex = tinycParser.RULE_program;
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
	    if(listener instanceof tinycListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinycListener ) {
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
        this.ruleIndex = tinycParser.RULE_statement;
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinycListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinycListener ) {
	        listener.exitStatement(this);
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
        this.ruleIndex = tinycParser.RULE_paren_expr;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinycListener ) {
	        listener.enterParen_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinycListener ) {
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
        this.ruleIndex = tinycParser.RULE_expr;
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
	    if(listener instanceof tinycListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinycListener ) {
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
        this.ruleIndex = tinycParser.RULE_test;
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
	    if(listener instanceof tinycListener ) {
	        listener.enterTest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinycListener ) {
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
        this.ruleIndex = tinycParser.RULE_sum_;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	sum_() {
	    return this.getTypedRuleContext(Sum_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinycListener ) {
	        listener.enterSum_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinycListener ) {
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
        this.ruleIndex = tinycParser.RULE_term;
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
	    if(listener instanceof tinycListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinycListener ) {
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
        this.ruleIndex = tinycParser.RULE_id_;
    }

	STRING() {
	    return this.getToken(tinycParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinycListener ) {
	        listener.enterId_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinycListener ) {
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
        this.ruleIndex = tinycParser.RULE_integer;
    }

	INT() {
	    return this.getToken(tinycParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinycListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinycListener ) {
	        listener.exitInteger(this);
		}
	}


}




tinycParser.ProgramContext = ProgramContext; 
tinycParser.StatementContext = StatementContext; 
tinycParser.Paren_exprContext = Paren_exprContext; 
tinycParser.ExprContext = ExprContext; 
tinycParser.TestContext = TestContext; 
tinycParser.Sum_Context = Sum_Context; 
tinycParser.TermContext = TermContext; 
tinycParser.Id_Context = Id_Context; 
tinycParser.IntegerContext = IntegerContext; 
