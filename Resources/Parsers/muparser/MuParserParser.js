// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/muparser/MuParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MuParserListener from './MuParserListener.js';
const serializedATN = [4,1,34,82,2,0,7,0,2,1,7,1,2,2,7,2,1,0,4,0,8,8,0,11,
0,12,0,9,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,
27,8,1,10,1,12,1,30,9,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,38,8,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,5,1,67,8,1,10,1,12,1,70,9,1,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,3,2,80,8,2,1,2,0,1,2,3,0,2,4,0,8,1,0,4,8,1,0,19,20,1,0,17,18,2,
0,11,12,15,16,1,0,13,14,1,0,27,28,1,0,29,30,1,0,31,32,96,0,7,1,0,0,0,2,37,
1,0,0,0,4,79,1,0,0,0,6,8,3,2,1,0,7,6,1,0,0,0,8,9,1,0,0,0,9,7,1,0,0,0,9,10,
1,0,0,0,10,11,1,0,0,0,11,12,5,0,0,1,12,1,1,0,0,0,13,14,6,1,-1,0,14,15,5,
18,0,0,15,38,3,2,1,12,16,17,5,2,0,0,17,18,5,25,0,0,18,19,3,2,1,0,19,20,5,
26,0,0,20,38,1,0,0,0,21,22,5,3,0,0,22,23,5,25,0,0,23,28,3,2,1,0,24,25,5,
1,0,0,25,27,3,2,1,0,26,24,1,0,0,0,27,30,1,0,0,0,28,26,1,0,0,0,28,29,1,0,
0,0,29,31,1,0,0,0,30,28,1,0,0,0,31,32,5,26,0,0,32,38,1,0,0,0,33,38,3,4,2,
0,34,35,5,33,0,0,35,36,7,0,0,0,36,38,3,2,1,1,37,13,1,0,0,0,37,16,1,0,0,0,
37,21,1,0,0,0,37,33,1,0,0,0,37,34,1,0,0,0,38,68,1,0,0,0,39,40,10,13,0,0,
40,41,5,21,0,0,41,67,3,2,1,13,42,43,10,11,0,0,43,44,7,1,0,0,44,67,3,2,1,
12,45,46,10,10,0,0,46,47,7,2,0,0,47,67,3,2,1,11,48,49,10,9,0,0,49,50,7,3,
0,0,50,67,3,2,1,10,51,52,10,8,0,0,52,53,7,4,0,0,53,67,3,2,1,9,54,55,10,7,
0,0,55,56,5,9,0,0,56,67,3,2,1,8,57,58,10,6,0,0,58,59,5,10,0,0,59,67,3,2,
1,7,60,61,10,5,0,0,61,62,5,23,0,0,62,63,3,2,1,0,63,64,5,24,0,0,64,65,3,2,
1,6,65,67,1,0,0,0,66,39,1,0,0,0,66,42,1,0,0,0,66,45,1,0,0,0,66,48,1,0,0,
0,66,51,1,0,0,0,66,54,1,0,0,0,66,57,1,0,0,0,66,60,1,0,0,0,67,70,1,0,0,0,
68,66,1,0,0,0,68,69,1,0,0,0,69,3,1,0,0,0,70,68,1,0,0,0,71,72,5,25,0,0,72,
73,3,2,1,0,73,74,5,26,0,0,74,80,1,0,0,0,75,80,7,5,0,0,76,80,7,6,0,0,77,80,
7,7,0,0,78,80,5,33,0,0,79,71,1,0,0,0,79,75,1,0,0,0,79,76,1,0,0,0,79,77,1,
0,0,0,79,78,1,0,0,0,80,5,1,0,0,0,6,9,28,37,66,68,79];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MuParserParser extends antlr4.Parser {

    static grammarFileName = "MuParser.g4";
    static literalNames = [ null, "','", null, null, "'='", "'+='", "'-='", 
                            "'*='", "'/='", "'&&'", "'||'", "'<='", "'>='", 
                            "'!='", "'=='", "'<'", "'>'", "'+'", "'-'", 
                            "'*'", "'/'", "'^'", "'!'", "'?'", "':'", "'('", 
                            "')'", null, null, "'true'", "'false'", "'_e'", 
                            "'_pi'" ];
    static symbolicNames = [ null, null, "FUNCTION", "FUNCTIONMULTI", "ASSIGN", 
                             "ASSIGNADD", "ASSIGNSUB", "ASSIGNMUL", "ASSIGNDIV", 
                             "AND", "OR", "LTEQ", "GTEQ", "NEQ", "EQ", "LT", 
                             "GT", "ADD", "SUB", "MUL", "DIV", "POW", "NOT", 
                             "QUESTION", "COLON", "OPAR", "CPAR", "INT", 
                             "FLOAT", "TRUE", "FALSE", "E", "PI", "ID", 
                             "SPACE" ];
    static ruleNames = [ "prog", "expr", "atom" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MuParserParser.ruleNames;
        this.literalNames = MuParserParser.literalNames;
        this.symbolicNames = MuParserParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 13);
    		case 1:
    			return this.precpred(this._ctx, 11);
    		case 2:
    			return this.precpred(this._ctx, 10);
    		case 3:
    			return this.precpred(this._ctx, 9);
    		case 4:
    			return this.precpred(this._ctx, 8);
    		case 5:
    			return this.precpred(this._ctx, 7);
    		case 6:
    			return this.precpred(this._ctx, 6);
    		case 7:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MuParserParser.RULE_prog);
	    var _la = 0;
	    try {
	        localctx = new ProgExprContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 6;
	            this.expr(0);
	            this.state = 9; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 2)) & ~0x1f) === 0 && ((1 << (_la - 2)) & 4269867011) !== 0));
	        this.state = 11;
	        this.match(MuParserParser.EOF);
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, MuParserParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new UnaryMinusExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 14;
	            this.match(MuParserParser.SUB);
	            this.state = 15;
	            this.expr(12);
	            break;

	        case 2:
	            localctx = new FunctionExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 16;
	            localctx.op = this.match(MuParserParser.FUNCTION);
	            this.state = 17;
	            this.match(MuParserParser.OPAR);
	            this.state = 18;
	            this.expr(0);
	            this.state = 19;
	            this.match(MuParserParser.CPAR);
	            break;

	        case 3:
	            localctx = new FunctionMultiExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 21;
	            localctx.op = this.match(MuParserParser.FUNCTIONMULTI);
	            this.state = 22;
	            this.match(MuParserParser.OPAR);
	            this.state = 23;
	            this.expr(0);
	            this.state = 28;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===1) {
	                this.state = 24;
	                this.match(MuParserParser.T__0);
	                this.state = 25;
	                this.expr(0);
	                this.state = 30;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 31;
	            this.match(MuParserParser.CPAR);
	            break;

	        case 4:
	            localctx = new AtomExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 33;
	            this.atom();
	            break;

	        case 5:
	            localctx = new AssignExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 34;
	            this.match(MuParserParser.ID);
	            this.state = 35;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 496) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 36;
	            this.expr(1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 68;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 66;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PowExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MuParserParser.RULE_expr);
	                    this.state = 39;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 40;
	                    this.match(MuParserParser.POW);
	                    this.state = 41;
	                    this.expr(13);
	                    break;

	                case 2:
	                    localctx = new MulDivExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MuParserParser.RULE_expr);
	                    this.state = 42;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 43;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===19 || _la===20)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 44;
	                    this.expr(12);
	                    break;

	                case 3:
	                    localctx = new AddSubExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MuParserParser.RULE_expr);
	                    this.state = 45;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 46;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===17 || _la===18)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 47;
	                    this.expr(11);
	                    break;

	                case 4:
	                    localctx = new RelationalExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MuParserParser.RULE_expr);
	                    this.state = 48;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 49;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 104448) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 50;
	                    this.expr(10);
	                    break;

	                case 5:
	                    localctx = new EqualityExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MuParserParser.RULE_expr);
	                    this.state = 51;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 52;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===13 || _la===14)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 53;
	                    this.expr(9);
	                    break;

	                case 6:
	                    localctx = new AndExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MuParserParser.RULE_expr);
	                    this.state = 54;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 55;
	                    this.match(MuParserParser.AND);
	                    this.state = 56;
	                    this.expr(8);
	                    break;

	                case 7:
	                    localctx = new OrExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MuParserParser.RULE_expr);
	                    this.state = 57;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 58;
	                    this.match(MuParserParser.OR);
	                    this.state = 59;
	                    this.expr(7);
	                    break;

	                case 8:
	                    localctx = new IteExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MuParserParser.RULE_expr);
	                    this.state = 60;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 61;
	                    this.match(MuParserParser.QUESTION);
	                    this.state = 62;
	                    this.expr(0);
	                    this.state = 63;
	                    this.match(MuParserParser.COLON);
	                    this.state = 64;
	                    this.expr(6);
	                    break;

	                } 
	            }
	            this.state = 70;
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MuParserParser.RULE_atom);
	    var _la = 0;
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            localctx = new ParExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
	            this.match(MuParserParser.OPAR);
	            this.state = 72;
	            this.expr(0);
	            this.state = 73;
	            this.match(MuParserParser.CPAR);
	            break;
	        case 27:
	        case 28:
	            localctx = new NumberAtomContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            _la = this._input.LA(1);
	            if(!(_la===27 || _la===28)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 29:
	        case 30:
	            localctx = new BooleanAtomContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 76;
	            _la = this._input.LA(1);
	            if(!(_la===29 || _la===30)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 31:
	        case 32:
	            localctx = new PredefinedConstantAtomContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 77;
	            _la = this._input.LA(1);
	            if(!(_la===31 || _la===32)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 33:
	            localctx = new IdAtomContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 78;
	            this.match(MuParserParser.ID);
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

MuParserParser.EOF = antlr4.Token.EOF;
MuParserParser.T__0 = 1;
MuParserParser.FUNCTION = 2;
MuParserParser.FUNCTIONMULTI = 3;
MuParserParser.ASSIGN = 4;
MuParserParser.ASSIGNADD = 5;
MuParserParser.ASSIGNSUB = 6;
MuParserParser.ASSIGNMUL = 7;
MuParserParser.ASSIGNDIV = 8;
MuParserParser.AND = 9;
MuParserParser.OR = 10;
MuParserParser.LTEQ = 11;
MuParserParser.GTEQ = 12;
MuParserParser.NEQ = 13;
MuParserParser.EQ = 14;
MuParserParser.LT = 15;
MuParserParser.GT = 16;
MuParserParser.ADD = 17;
MuParserParser.SUB = 18;
MuParserParser.MUL = 19;
MuParserParser.DIV = 20;
MuParserParser.POW = 21;
MuParserParser.NOT = 22;
MuParserParser.QUESTION = 23;
MuParserParser.COLON = 24;
MuParserParser.OPAR = 25;
MuParserParser.CPAR = 26;
MuParserParser.INT = 27;
MuParserParser.FLOAT = 28;
MuParserParser.TRUE = 29;
MuParserParser.FALSE = 30;
MuParserParser.E = 31;
MuParserParser.PI = 32;
MuParserParser.ID = 33;
MuParserParser.SPACE = 34;

MuParserParser.RULE_prog = 0;
MuParserParser.RULE_expr = 1;
MuParserParser.RULE_atom = 2;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MuParserParser.RULE_prog;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ProgExprContext extends ProgContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	EOF() {
	    return this.getToken(MuParserParser.EOF, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterProgExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitProgExpr(this);
		}
	}


}

MuParserParser.ProgExprContext = ProgExprContext;

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
        this.ruleIndex = MuParserParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class FunctionMultiExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	OPAR() {
	    return this.getToken(MuParserParser.OPAR, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	CPAR() {
	    return this.getToken(MuParserParser.CPAR, 0);
	};

	FUNCTIONMULTI() {
	    return this.getToken(MuParserParser.FUNCTIONMULTI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterFunctionMultiExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitFunctionMultiExpr(this);
		}
	}


}

MuParserParser.FunctionMultiExprContext = FunctionMultiExprContext;

class AddSubExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ADD() {
	    return this.getToken(MuParserParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(MuParserParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterAddSubExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitAddSubExpr(this);
		}
	}


}

MuParserParser.AddSubExprContext = AddSubExprContext;

class AtomExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterAtomExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitAtomExpr(this);
		}
	}


}

MuParserParser.AtomExprContext = AtomExprContext;

class OrExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	OR() {
	    return this.getToken(MuParserParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterOrExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitOrExpr(this);
		}
	}


}

MuParserParser.OrExprContext = OrExprContext;

class RelationalExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	LTEQ() {
	    return this.getToken(MuParserParser.LTEQ, 0);
	};

	GTEQ() {
	    return this.getToken(MuParserParser.GTEQ, 0);
	};

	LT() {
	    return this.getToken(MuParserParser.LT, 0);
	};

	GT() {
	    return this.getToken(MuParserParser.GT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterRelationalExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitRelationalExpr(this);
		}
	}


}

MuParserParser.RelationalExprContext = RelationalExprContext;

class FunctionExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	OPAR() {
	    return this.getToken(MuParserParser.OPAR, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CPAR() {
	    return this.getToken(MuParserParser.CPAR, 0);
	};

	FUNCTION() {
	    return this.getToken(MuParserParser.FUNCTION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterFunctionExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitFunctionExpr(this);
		}
	}


}

MuParserParser.FunctionExprContext = FunctionExprContext;

class UnaryMinusExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SUB() {
	    return this.getToken(MuParserParser.SUB, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterUnaryMinusExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitUnaryMinusExpr(this);
		}
	}


}

MuParserParser.UnaryMinusExprContext = UnaryMinusExprContext;

class PowExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	POW() {
	    return this.getToken(MuParserParser.POW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterPowExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitPowExpr(this);
		}
	}


}

MuParserParser.PowExprContext = PowExprContext;

class AssignExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(MuParserParser.ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ASSIGN() {
	    return this.getToken(MuParserParser.ASSIGN, 0);
	};

	ASSIGNADD() {
	    return this.getToken(MuParserParser.ASSIGNADD, 0);
	};

	ASSIGNSUB() {
	    return this.getToken(MuParserParser.ASSIGNSUB, 0);
	};

	ASSIGNMUL() {
	    return this.getToken(MuParserParser.ASSIGNMUL, 0);
	};

	ASSIGNDIV() {
	    return this.getToken(MuParserParser.ASSIGNDIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterAssignExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitAssignExpr(this);
		}
	}


}

MuParserParser.AssignExprContext = AssignExprContext;

class MulDivExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MUL() {
	    return this.getToken(MuParserParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(MuParserParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterMulDivExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitMulDivExpr(this);
		}
	}


}

MuParserParser.MulDivExprContext = MulDivExprContext;

class EqualityExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	EQ() {
	    return this.getToken(MuParserParser.EQ, 0);
	};

	NEQ() {
	    return this.getToken(MuParserParser.NEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterEqualityExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitEqualityExpr(this);
		}
	}


}

MuParserParser.EqualityExprContext = EqualityExprContext;

class AndExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	AND() {
	    return this.getToken(MuParserParser.AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterAndExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitAndExpr(this);
		}
	}


}

MuParserParser.AndExprContext = AndExprContext;

class IteExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	QUESTION() {
	    return this.getToken(MuParserParser.QUESTION, 0);
	};

	COLON() {
	    return this.getToken(MuParserParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterIteExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitIteExpr(this);
		}
	}


}

MuParserParser.IteExprContext = IteExprContext;

class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MuParserParser.RULE_atom;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParExprContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OPAR() {
	    return this.getToken(MuParserParser.OPAR, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CPAR() {
	    return this.getToken(MuParserParser.CPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterParExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitParExpr(this);
		}
	}


}

MuParserParser.ParExprContext = ParExprContext;

class BooleanAtomContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(MuParserParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(MuParserParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterBooleanAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitBooleanAtom(this);
		}
	}


}

MuParserParser.BooleanAtomContext = BooleanAtomContext;

class IdAtomContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(MuParserParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterIdAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitIdAtom(this);
		}
	}


}

MuParserParser.IdAtomContext = IdAtomContext;

class PredefinedConstantAtomContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	E() {
	    return this.getToken(MuParserParser.E, 0);
	};

	PI() {
	    return this.getToken(MuParserParser.PI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterPredefinedConstantAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitPredefinedConstantAtom(this);
		}
	}


}

MuParserParser.PredefinedConstantAtomContext = PredefinedConstantAtomContext;

class NumberAtomContext extends AtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(MuParserParser.INT, 0);
	};

	FLOAT() {
	    return this.getToken(MuParserParser.FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.enterNumberAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MuParserListener ) {
	        listener.exitNumberAtom(this);
		}
	}


}

MuParserParser.NumberAtomContext = NumberAtomContext;


MuParserParser.ProgContext = ProgContext; 
MuParserParser.ExprContext = ExprContext; 
MuParserParser.AtomContext = AtomContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
