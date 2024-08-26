// Generated from Resources/Parsers/muparser/MuParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MuParserListener from './MuParserListener.js';
const serializedATN = [4,1,35,83,2,0,7,0,2,1,7,1,2,2,7,2,1,0,1,0,1,0,5,0,
10,8,0,10,0,12,0,13,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,5,1,28,8,1,10,1,12,1,31,9,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,39,8,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,68,8,1,10,1,12,1,71,9,1,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,3,2,81,8,2,1,2,0,1,2,3,0,2,4,0,8,1,0,5,9,1,0,20,21,1,0,
18,19,2,0,12,13,16,17,1,0,14,15,1,0,28,29,1,0,30,31,1,0,32,33,97,0,6,1,0,
0,0,2,38,1,0,0,0,4,80,1,0,0,0,6,11,3,2,1,0,7,8,5,1,0,0,8,10,3,2,1,0,9,7,
1,0,0,0,10,13,1,0,0,0,11,9,1,0,0,0,11,12,1,0,0,0,12,1,1,0,0,0,13,11,1,0,
0,0,14,15,6,1,-1,0,15,16,5,19,0,0,16,39,3,2,1,12,17,18,5,3,0,0,18,19,5,26,
0,0,19,20,3,2,1,0,20,21,5,27,0,0,21,39,1,0,0,0,22,23,5,4,0,0,23,24,5,26,
0,0,24,29,3,2,1,0,25,26,5,2,0,0,26,28,3,2,1,0,27,25,1,0,0,0,28,31,1,0,0,
0,29,27,1,0,0,0,29,30,1,0,0,0,30,32,1,0,0,0,31,29,1,0,0,0,32,33,5,27,0,0,
33,39,1,0,0,0,34,39,3,4,2,0,35,36,5,34,0,0,36,37,7,0,0,0,37,39,3,2,1,1,38,
14,1,0,0,0,38,17,1,0,0,0,38,22,1,0,0,0,38,34,1,0,0,0,38,35,1,0,0,0,39,69,
1,0,0,0,40,41,10,13,0,0,41,42,5,22,0,0,42,68,3,2,1,13,43,44,10,11,0,0,44,
45,7,1,0,0,45,68,3,2,1,12,46,47,10,10,0,0,47,48,7,2,0,0,48,68,3,2,1,11,49,
50,10,9,0,0,50,51,7,3,0,0,51,68,3,2,1,10,52,53,10,8,0,0,53,54,7,4,0,0,54,
68,3,2,1,9,55,56,10,7,0,0,56,57,5,10,0,0,57,68,3,2,1,8,58,59,10,6,0,0,59,
60,5,11,0,0,60,68,3,2,1,7,61,62,10,5,0,0,62,63,5,24,0,0,63,64,3,2,1,0,64,
65,5,25,0,0,65,66,3,2,1,6,66,68,1,0,0,0,67,40,1,0,0,0,67,43,1,0,0,0,67,46,
1,0,0,0,67,49,1,0,0,0,67,52,1,0,0,0,67,55,1,0,0,0,67,58,1,0,0,0,67,61,1,
0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,3,1,0,0,0,71,69,1,0,0,
0,72,73,5,26,0,0,73,74,3,2,1,0,74,75,5,27,0,0,75,81,1,0,0,0,76,81,7,5,0,
0,77,81,7,6,0,0,78,81,7,7,0,0,79,81,5,34,0,0,80,72,1,0,0,0,80,76,1,0,0,0,
80,77,1,0,0,0,80,78,1,0,0,0,80,79,1,0,0,0,81,5,1,0,0,0,6,11,29,38,67,69,
80];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class MuParserParser extends antlr4.Parser {

    static grammarFileName = "MuParser.g4";
    static literalNames = [ null, "'\\n'", "','", null, null, "'='", "'+='", 
                            "'-='", "'*='", "'/='", "'&&'", "'||'", "'<='", 
                            "'>='", "'!='", "'=='", "'<'", "'>'", "'+'", 
                            "'-'", "'*'", "'/'", "'^'", "'!'", "'?'", "':'", 
                            "'('", "')'", null, null, "'true'", "'false'", 
                            "'_e'", "'_pi'" ];
    static symbolicNames = [ null, null, null, "FUNCTION", "FUNCTIONMULTI", 
                             "ASSIGN", "ASSIGNADD", "ASSIGNSUB", "ASSIGNMUL", 
                             "ASSIGNDIV", "AND", "OR", "LTEQ", "GTEQ", "NEQ", 
                             "EQ", "LT", "GT", "ADD", "SUB", "MUL", "DIV", 
                             "POW", "NOT", "QUESTION", "COLON", "OPAR", 
                             "CPAR", "INT", "FLOAT", "TRUE", "FALSE", "E", 
                             "PI", "ID", "SPACE" ];
    static ruleNames = [ "prog", "expr", "atom" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MuParserParser.ruleNames;
        this.literalNames = MuParserParser.literalNames;
        this.symbolicNames = MuParserParser.symbolicNames;
    }

    get atn() {
        return atn;
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
	    var _la = 0; // Token type
	    try {
	        localctx = new ProgExprContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 6;
	        this.expr(0);
	        this.state = 11;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===MuParserParser.T__0) {
	            this.state = 7;
	            this.match(MuParserParser.T__0);
	            this.state = 8;
	            this.expr(0);
	            this.state = 13;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new UnaryMinusExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 15;
	            this.match(MuParserParser.SUB);
	            this.state = 16;
	            this.expr(12);
	            break;

	        case 2:
	            localctx = new FunctionExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 17;
	            localctx.op = this.match(MuParserParser.FUNCTION);
	            this.state = 18;
	            this.match(MuParserParser.OPAR);
	            this.state = 19;
	            this.expr(0);
	            this.state = 20;
	            this.match(MuParserParser.CPAR);
	            break;

	        case 3:
	            localctx = new FunctionMultiExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 22;
	            localctx.op = this.match(MuParserParser.FUNCTIONMULTI);
	            this.state = 23;
	            this.match(MuParserParser.OPAR);
	            this.state = 24;
	            this.expr(0);
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===MuParserParser.T__1) {
	                this.state = 25;
	                this.match(MuParserParser.T__1);
	                this.state = 26;
	                this.expr(0);
	                this.state = 31;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 32;
	            this.match(MuParserParser.CPAR);
	            break;

	        case 4:
	            localctx = new AtomExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 34;
	            this.atom();
	            break;

	        case 5:
	            localctx = new AssignExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 35;
	            this.match(MuParserParser.ID);
	            this.state = 36;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MuParserParser.ASSIGN) | (1 << MuParserParser.ASSIGNADD) | (1 << MuParserParser.ASSIGNSUB) | (1 << MuParserParser.ASSIGNMUL) | (1 << MuParserParser.ASSIGNDIV))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 37;
	            this.expr(1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 69;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 67;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PowExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MuParserParser.RULE_expr);
	                    this.state = 40;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 41;
	                    this.match(MuParserParser.POW);
	                    this.state = 42;
	                    this.expr(13);
	                    break;

	                case 2:
	                    localctx = new MulDivExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MuParserParser.RULE_expr);
	                    this.state = 43;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 44;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===MuParserParser.MUL || _la===MuParserParser.DIV)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 45;
	                    this.expr(12);
	                    break;

	                case 3:
	                    localctx = new AddSubExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MuParserParser.RULE_expr);
	                    this.state = 46;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 47;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===MuParserParser.ADD || _la===MuParserParser.SUB)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 48;
	                    this.expr(11);
	                    break;

	                case 4:
	                    localctx = new RelationalExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MuParserParser.RULE_expr);
	                    this.state = 49;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 50;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MuParserParser.LTEQ) | (1 << MuParserParser.GTEQ) | (1 << MuParserParser.LT) | (1 << MuParserParser.GT))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 51;
	                    this.expr(10);
	                    break;

	                case 5:
	                    localctx = new EqualityExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MuParserParser.RULE_expr);
	                    this.state = 52;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 53;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===MuParserParser.NEQ || _la===MuParserParser.EQ)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 54;
	                    this.expr(9);
	                    break;

	                case 6:
	                    localctx = new AndExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MuParserParser.RULE_expr);
	                    this.state = 55;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 56;
	                    this.match(MuParserParser.AND);
	                    this.state = 57;
	                    this.expr(8);
	                    break;

	                case 7:
	                    localctx = new OrExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MuParserParser.RULE_expr);
	                    this.state = 58;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 59;
	                    this.match(MuParserParser.OR);
	                    this.state = 60;
	                    this.expr(7);
	                    break;

	                case 8:
	                    localctx = new IteExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, MuParserParser.RULE_expr);
	                    this.state = 61;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 62;
	                    this.match(MuParserParser.QUESTION);
	                    this.state = 63;
	                    this.expr(0);
	                    this.state = 64;
	                    this.match(MuParserParser.COLON);
	                    this.state = 65;
	                    this.expr(6);
	                    break;

	                } 
	            }
	            this.state = 71;
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
	    var _la = 0; // Token type
	    try {
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case MuParserParser.OPAR:
	            localctx = new ParExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 72;
	            this.match(MuParserParser.OPAR);
	            this.state = 73;
	            this.expr(0);
	            this.state = 74;
	            this.match(MuParserParser.CPAR);
	            break;
	        case MuParserParser.INT:
	        case MuParserParser.FLOAT:
	            localctx = new NumberAtomContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
	            _la = this._input.LA(1);
	            if(!(_la===MuParserParser.INT || _la===MuParserParser.FLOAT)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case MuParserParser.TRUE:
	        case MuParserParser.FALSE:
	            localctx = new BooleanAtomContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 77;
	            _la = this._input.LA(1);
	            if(!(_la===MuParserParser.TRUE || _la===MuParserParser.FALSE)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case MuParserParser.E:
	        case MuParserParser.PI:
	            localctx = new PredefinedConstantAtomContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 78;
	            _la = this._input.LA(1);
	            if(!(_la===MuParserParser.E || _la===MuParserParser.PI)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case MuParserParser.ID:
	            localctx = new IdAtomContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 79;
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
MuParserParser.T__1 = 2;
MuParserParser.FUNCTION = 3;
MuParserParser.FUNCTIONMULTI = 4;
MuParserParser.ASSIGN = 5;
MuParserParser.ASSIGNADD = 6;
MuParserParser.ASSIGNSUB = 7;
MuParserParser.ASSIGNMUL = 8;
MuParserParser.ASSIGNDIV = 9;
MuParserParser.AND = 10;
MuParserParser.OR = 11;
MuParserParser.LTEQ = 12;
MuParserParser.GTEQ = 13;
MuParserParser.NEQ = 14;
MuParserParser.EQ = 15;
MuParserParser.LT = 16;
MuParserParser.GT = 17;
MuParserParser.ADD = 18;
MuParserParser.SUB = 19;
MuParserParser.MUL = 20;
MuParserParser.DIV = 21;
MuParserParser.POW = 22;
MuParserParser.NOT = 23;
MuParserParser.QUESTION = 24;
MuParserParser.COLON = 25;
MuParserParser.OPAR = 26;
MuParserParser.CPAR = 27;
MuParserParser.INT = 28;
MuParserParser.FLOAT = 29;
MuParserParser.TRUE = 30;
MuParserParser.FALSE = 31;
MuParserParser.E = 32;
MuParserParser.PI = 33;
MuParserParser.ID = 34;
MuParserParser.SPACE = 35;

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
        this.op = null; // Token;
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
        this.op = null; // Token;
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
        this.op = null; // Token;
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
        this.op = null; // Token;
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
        this.op = null; // Token;
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
        this.op = null; // Token;
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
        this.op = null; // Token;
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
