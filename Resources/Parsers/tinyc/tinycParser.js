// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/tinyc/tinyc.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import tinycListener from './tinycListener.js';
const serializedATN = [4,1,16,101,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,1,0,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,5,1,48,8,1,10,1,12,1,51,9,1,1,1,1,1,1,1,1,1,1,1,3,1,58,8,1,
1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,3,3,69,8,3,1,4,1,4,1,4,1,4,1,4,3,4,76,
8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,87,8,5,10,5,12,5,90,9,5,1,6,
1,6,1,6,3,6,95,8,6,1,7,1,7,1,8,1,8,1,8,0,1,10,9,0,2,4,6,8,10,12,14,16,0,
0,105,0,19,1,0,0,0,2,57,1,0,0,0,4,59,1,0,0,0,6,68,1,0,0,0,8,75,1,0,0,0,10,
77,1,0,0,0,12,94,1,0,0,0,14,96,1,0,0,0,16,98,1,0,0,0,18,20,3,2,1,0,19,18,
1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,23,24,5,
0,0,1,24,1,1,0,0,0,25,26,5,1,0,0,26,27,3,4,2,0,27,28,3,2,1,0,28,58,1,0,0,
0,29,30,5,1,0,0,30,31,3,4,2,0,31,32,3,2,1,0,32,33,5,2,0,0,33,34,3,2,1,0,
34,58,1,0,0,0,35,36,5,3,0,0,36,37,3,4,2,0,37,38,3,2,1,0,38,58,1,0,0,0,39,
40,5,4,0,0,40,41,3,2,1,0,41,42,5,3,0,0,42,43,3,4,2,0,43,44,5,5,0,0,44,58,
1,0,0,0,45,49,5,6,0,0,46,48,3,2,1,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,
0,0,0,49,50,1,0,0,0,50,52,1,0,0,0,51,49,1,0,0,0,52,58,5,7,0,0,53,54,3,6,
3,0,54,55,5,5,0,0,55,58,1,0,0,0,56,58,5,5,0,0,57,25,1,0,0,0,57,29,1,0,0,
0,57,35,1,0,0,0,57,39,1,0,0,0,57,45,1,0,0,0,57,53,1,0,0,0,57,56,1,0,0,0,
58,3,1,0,0,0,59,60,5,8,0,0,60,61,3,6,3,0,61,62,5,9,0,0,62,5,1,0,0,0,63,69,
3,8,4,0,64,65,3,14,7,0,65,66,5,10,0,0,66,67,3,6,3,0,67,69,1,0,0,0,68,63,
1,0,0,0,68,64,1,0,0,0,69,7,1,0,0,0,70,76,3,10,5,0,71,72,3,10,5,0,72,73,5,
11,0,0,73,74,3,10,5,0,74,76,1,0,0,0,75,70,1,0,0,0,75,71,1,0,0,0,76,9,1,0,
0,0,77,78,6,5,-1,0,78,79,3,12,6,0,79,88,1,0,0,0,80,81,10,2,0,0,81,82,5,12,
0,0,82,87,3,12,6,0,83,84,10,1,0,0,84,85,5,13,0,0,85,87,3,12,6,0,86,80,1,
0,0,0,86,83,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,11,1,0,
0,0,90,88,1,0,0,0,91,95,3,14,7,0,92,95,3,16,8,0,93,95,3,4,2,0,94,91,1,0,
0,0,94,92,1,0,0,0,94,93,1,0,0,0,95,13,1,0,0,0,96,97,5,14,0,0,97,15,1,0,0,
0,98,99,5,15,0,0,99,17,1,0,0,0,8,21,49,57,68,75,86,88,94];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

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
	    var _la = 0;
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
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 49530) !== 0));
	        this.state = 23;
	        this.match(tinycParser.EOF);
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
	    var _la = 0;
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.match(tinycParser.T__0);
	            this.state = 26;
	            this.paren_expr();
	            this.state = 27;
	            this.statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 29;
	            this.match(tinycParser.T__0);
	            this.state = 30;
	            this.paren_expr();
	            this.state = 31;
	            this.statement();
	            this.state = 32;
	            this.match(tinycParser.T__1);
	            this.state = 33;
	            this.statement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 35;
	            this.match(tinycParser.T__2);
	            this.state = 36;
	            this.paren_expr();
	            this.state = 37;
	            this.statement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 39;
	            this.match(tinycParser.T__3);
	            this.state = 40;
	            this.statement();
	            this.state = 41;
	            this.match(tinycParser.T__2);
	            this.state = 42;
	            this.paren_expr();
	            this.state = 43;
	            this.match(tinycParser.T__4);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 45;
	            this.match(tinycParser.T__5);
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 49530) !== 0)) {
	                this.state = 46;
	                this.statement();
	                this.state = 51;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 52;
	            this.match(tinycParser.T__6);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 53;
	            this.expr();
	            this.state = 54;
	            this.match(tinycParser.T__4);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 56;
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
	        this.state = 59;
	        this.match(tinycParser.T__7);
	        this.state = 60;
	        this.expr();
	        this.state = 61;
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
	        this.state = 68;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 63;
	            this.test();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 64;
	            this.id_();
	            this.state = 65;
	            this.match(tinycParser.T__9);
	            this.state = 66;
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
	        this.state = 75;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 70;
	            this.sum_(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.sum_(0);
	            this.state = 72;
	            this.match(tinycParser.T__10);
	            this.state = 73;
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
	        this.state = 78;
	        this.term();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 88;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 86;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Sum_Context(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, tinycParser.RULE_sum_);
	                    this.state = 80;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 81;
	                    this.match(tinycParser.T__11);
	                    this.state = 82;
	                    this.term();
	                    break;

	                case 2:
	                    localctx = new Sum_Context(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, tinycParser.RULE_sum_);
	                    this.state = 83;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 84;
	                    this.match(tinycParser.T__12);
	                    this.state = 85;
	                    this.term();
	                    break;

	                } 
	            }
	            this.state = 90;
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
	        this.state = 94;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 91;
	            this.id_();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 92;
	            this.integer();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 93;
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
	        this.state = 96;
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
	        this.state = 98;
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

	EOF() {
	    return this.getToken(tinycParser.EOF, 0);
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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
