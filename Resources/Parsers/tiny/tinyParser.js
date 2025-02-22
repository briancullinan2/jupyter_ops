// Generated from ./tiny/tiny.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import tinyListener from './tinyListener.js';
const serializedATN = [4,1,11,103,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,1,36,8,1,10,1,12,1,39,9,1,1,2,1,2,
1,2,3,2,44,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,
6,1,6,5,6,62,8,6,10,6,12,6,65,9,6,1,7,1,7,1,7,1,7,1,7,1,7,5,7,73,8,7,10,
7,12,7,76,9,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,85,8,8,10,8,12,8,88,9,8,1,
9,1,9,3,9,92,8,9,1,10,3,10,95,8,10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,0,
4,2,12,14,16,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,1,1,0,7,8,97,0,26,1,
0,0,0,2,30,1,0,0,0,4,43,1,0,0,0,6,45,1,0,0,0,8,49,1,0,0,0,10,52,1,0,0,0,
12,55,1,0,0,0,14,66,1,0,0,0,16,77,1,0,0,0,18,91,1,0,0,0,20,94,1,0,0,0,22,
98,1,0,0,0,24,100,1,0,0,0,26,27,5,1,0,0,27,28,3,2,1,0,28,29,5,2,0,0,29,1,
1,0,0,0,30,31,6,1,-1,0,31,32,3,4,2,0,32,37,1,0,0,0,33,34,10,2,0,0,34,36,
3,4,2,0,35,33,1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,3,1,0,
0,0,39,37,1,0,0,0,40,44,3,6,3,0,41,44,3,8,4,0,42,44,3,10,5,0,43,40,1,0,0,
0,43,41,1,0,0,0,43,42,1,0,0,0,44,5,1,0,0,0,45,46,3,24,12,0,46,47,5,3,0,0,
47,48,3,16,8,0,48,7,1,0,0,0,49,50,5,4,0,0,50,51,3,12,6,0,51,9,1,0,0,0,52,
53,5,5,0,0,53,54,3,14,7,0,54,11,1,0,0,0,55,56,6,6,-1,0,56,57,3,24,12,0,57,
63,1,0,0,0,58,59,10,2,0,0,59,60,5,6,0,0,60,62,3,24,12,0,61,58,1,0,0,0,62,
65,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,13,1,0,0,0,65,63,1,0,0,0,66,67,
6,7,-1,0,67,68,3,16,8,0,68,74,1,0,0,0,69,70,10,2,0,0,70,71,5,6,0,0,71,73,
3,16,8,0,72,69,1,0,0,0,73,76,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,15,1,
0,0,0,76,74,1,0,0,0,77,78,6,8,-1,0,78,79,3,18,9,0,79,86,1,0,0,0,80,81,10,
2,0,0,81,82,3,22,11,0,82,83,3,18,9,0,83,85,1,0,0,0,84,80,1,0,0,0,85,88,1,
0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,17,1,0,0,0,88,86,1,0,0,0,89,92,3,24,
12,0,90,92,3,20,10,0,91,89,1,0,0,0,91,90,1,0,0,0,92,19,1,0,0,0,93,95,5,7,
0,0,94,93,1,0,0,0,94,95,1,0,0,0,95,96,1,0,0,0,96,97,5,10,0,0,97,21,1,0,0,
0,98,99,7,0,0,0,99,23,1,0,0,0,100,101,5,9,0,0,101,25,1,0,0,0,7,37,43,63,
74,86,91,94];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class tinyParser extends antlr4.Parser {

    static grammarFileName = "tiny.g4";
    static literalNames = [ null, "'BEGIN'", "'END'", "':='", "'READ'", 
                            "'WRITE'", "','", "'-'", "'+'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "ID", "NUMBER", "WS" ];
    static ruleNames = [ "program", "stmt_list", "stmt", "assign_stmt", 
                         "read_stmt", "write_stmt", "id_list", "expr_list", 
                         "expr", "factor", "integer", "op", "ident" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = tinyParser.ruleNames;
        this.literalNames = tinyParser.literalNames;
        this.symbolicNames = tinyParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.stmt_list_sempred(localctx, predIndex);
    	case 6:
    	    		return this.id_list_sempred(localctx, predIndex);
    	case 7:
    	    		return this.expr_list_sempred(localctx, predIndex);
    	case 8:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    stmt_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    id_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expr_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, tinyParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(tinyParser.T__0);
	        this.state = 27;
	        this.stmt_list(0);
	        this.state = 28;
	        this.match(tinyParser.T__1);
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


	stmt_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Stmt_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, tinyParser.RULE_stmt_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.stmt();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 37;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Stmt_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, tinyParser.RULE_stmt_list);
	                this.state = 33;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 34;
	                this.stmt(); 
	            }
	            this.state = 39;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
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



	stmt() {
	    let localctx = new StmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, tinyParser.RULE_stmt);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case tinyParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.assign_stmt();
	            break;
	        case tinyParser.T__3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.read_stmt();
	            break;
	        case tinyParser.T__4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 42;
	            this.write_stmt();
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



	assign_stmt() {
	    let localctx = new Assign_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, tinyParser.RULE_assign_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.ident();
	        this.state = 46;
	        this.match(tinyParser.T__2);
	        this.state = 47;
	        this.expr(0);
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



	read_stmt() {
	    let localctx = new Read_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, tinyParser.RULE_read_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(tinyParser.T__3);
	        this.state = 50;
	        this.id_list(0);
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



	write_stmt() {
	    let localctx = new Write_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, tinyParser.RULE_write_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(tinyParser.T__4);
	        this.state = 53;
	        this.expr_list(0);
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


	id_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Id_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, tinyParser.RULE_id_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.ident();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 63;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Id_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, tinyParser.RULE_id_list);
	                this.state = 58;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 59;
	                this.match(tinyParser.T__5);
	                this.state = 60;
	                this.ident(); 
	            }
	            this.state = 65;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
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


	expr_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Expr_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, tinyParser.RULE_expr_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 74;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Expr_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, tinyParser.RULE_expr_list);
	                this.state = 69;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 70;
	                this.match(tinyParser.T__5);
	                this.state = 71;
	                this.expr(0); 
	            }
	            this.state = 76;
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, tinyParser.RULE_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.factor();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 86;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, tinyParser.RULE_expr);
	                this.state = 80;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 81;
	                this.op();
	                this.state = 82;
	                this.factor(); 
	            }
	            this.state = 88;
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



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, tinyParser.RULE_factor);
	    try {
	        this.state = 91;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case tinyParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 89;
	            this.ident();
	            break;
	        case tinyParser.T__6:
	        case tinyParser.NUMBER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
	            this.integer();
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



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, tinyParser.RULE_integer);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tinyParser.T__6) {
	            this.state = 93;
	            this.match(tinyParser.T__6);
	        }

	        this.state = 96;
	        this.match(tinyParser.NUMBER);
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



	op() {
	    let localctx = new OpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, tinyParser.RULE_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        _la = this._input.LA(1);
	        if(!(_la===tinyParser.T__6 || _la===tinyParser.T__7)) {
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



	ident() {
	    let localctx = new IdentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, tinyParser.RULE_ident);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(tinyParser.ID);
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

tinyParser.EOF = antlr4.Token.EOF;
tinyParser.T__0 = 1;
tinyParser.T__1 = 2;
tinyParser.T__2 = 3;
tinyParser.T__3 = 4;
tinyParser.T__4 = 5;
tinyParser.T__5 = 6;
tinyParser.T__6 = 7;
tinyParser.T__7 = 8;
tinyParser.ID = 9;
tinyParser.NUMBER = 10;
tinyParser.WS = 11;

tinyParser.RULE_program = 0;
tinyParser.RULE_stmt_list = 1;
tinyParser.RULE_stmt = 2;
tinyParser.RULE_assign_stmt = 3;
tinyParser.RULE_read_stmt = 4;
tinyParser.RULE_write_stmt = 5;
tinyParser.RULE_id_list = 6;
tinyParser.RULE_expr_list = 7;
tinyParser.RULE_expr = 8;
tinyParser.RULE_factor = 9;
tinyParser.RULE_integer = 10;
tinyParser.RULE_op = 11;
tinyParser.RULE_ident = 12;

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
        this.ruleIndex = tinyParser.RULE_program;
    }

	stmt_list() {
	    return this.getTypedRuleContext(Stmt_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.exitProgram(this);
		}
	}


}



class Stmt_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinyParser.RULE_stmt_list;
    }

	stmt() {
	    return this.getTypedRuleContext(StmtContext,0);
	};

	stmt_list() {
	    return this.getTypedRuleContext(Stmt_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.enterStmt_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.exitStmt_list(this);
		}
	}


}



class StmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinyParser.RULE_stmt;
    }

	assign_stmt() {
	    return this.getTypedRuleContext(Assign_stmtContext,0);
	};

	read_stmt() {
	    return this.getTypedRuleContext(Read_stmtContext,0);
	};

	write_stmt() {
	    return this.getTypedRuleContext(Write_stmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.enterStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.exitStmt(this);
		}
	}


}



class Assign_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinyParser.RULE_assign_stmt;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.enterAssign_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.exitAssign_stmt(this);
		}
	}


}



class Read_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinyParser.RULE_read_stmt;
    }

	id_list() {
	    return this.getTypedRuleContext(Id_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.enterRead_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.exitRead_stmt(this);
		}
	}


}



class Write_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinyParser.RULE_write_stmt;
    }

	expr_list() {
	    return this.getTypedRuleContext(Expr_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.enterWrite_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.exitWrite_stmt(this);
		}
	}


}



class Id_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinyParser.RULE_id_list;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	id_list() {
	    return this.getTypedRuleContext(Id_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.enterId_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.exitId_list(this);
		}
	}


}



class Expr_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinyParser.RULE_expr_list;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	expr_list() {
	    return this.getTypedRuleContext(Expr_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.enterExpr_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.exitExpr_list(this);
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
        this.ruleIndex = tinyParser.RULE_expr;
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	op() {
	    return this.getTypedRuleContext(OpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.exitExpr(this);
		}
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinyParser.RULE_factor;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.exitFactor(this);
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
        this.ruleIndex = tinyParser.RULE_integer;
    }

	NUMBER() {
	    return this.getToken(tinyParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.exitInteger(this);
		}
	}


}



class OpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinyParser.RULE_op;
    }


	enterRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.enterOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.exitOp(this);
		}
	}


}



class IdentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinyParser.RULE_ident;
    }

	ID() {
	    return this.getToken(tinyParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.enterIdent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinyListener ) {
	        listener.exitIdent(this);
		}
	}


}




tinyParser.ProgramContext = ProgramContext; 
tinyParser.Stmt_listContext = Stmt_listContext; 
tinyParser.StmtContext = StmtContext; 
tinyParser.Assign_stmtContext = Assign_stmtContext; 
tinyParser.Read_stmtContext = Read_stmtContext; 
tinyParser.Write_stmtContext = Write_stmtContext; 
tinyParser.Id_listContext = Id_listContext; 
tinyParser.Expr_listContext = Expr_listContext; 
tinyParser.ExprContext = ExprContext; 
tinyParser.FactorContext = FactorContext; 
tinyParser.IntegerContext = IntegerContext; 
tinyParser.OpContext = OpContext; 
tinyParser.IdentContext = IdentContext; 
