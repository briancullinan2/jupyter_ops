// Generated from Resources/Parsers/romannumerals/romannumerals.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import romannumeralsListener from './romannumeralsListener.js';
const serializedATN = [4,1,20,86,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,1,1,1,1,1,1,
1,1,1,3,1,30,8,1,1,2,1,2,1,2,1,2,1,2,5,2,37,8,2,10,2,12,2,40,9,2,1,3,1,3,
1,3,1,3,1,3,3,3,47,8,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,55,8,4,1,5,1,5,1,6,1,
6,1,6,1,6,1,6,3,6,64,8,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,72,8,7,1,8,1,8,1,9,
1,9,1,9,1,9,1,9,1,9,3,9,82,8,9,1,10,1,10,1,10,0,1,4,11,0,2,4,6,8,10,12,14,
16,18,20,0,3,1,0,5,7,1,0,11,13,1,0,17,19,93,0,22,1,0,0,0,2,29,1,0,0,0,4,
31,1,0,0,0,6,46,1,0,0,0,8,54,1,0,0,0,10,56,1,0,0,0,12,63,1,0,0,0,14,71,1,
0,0,0,16,73,1,0,0,0,18,81,1,0,0,0,20,83,1,0,0,0,22,23,3,2,1,0,23,1,1,0,0,
0,24,25,3,4,2,0,25,26,3,6,3,0,26,30,1,0,0,0,27,30,3,4,2,0,28,30,3,6,3,0,
29,24,1,0,0,0,29,27,1,0,0,0,29,28,1,0,0,0,30,3,1,0,0,0,31,32,6,2,-1,0,32,
33,5,1,0,0,33,38,1,0,0,0,34,35,10,2,0,0,35,37,5,1,0,0,36,34,1,0,0,0,37,40,
1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,5,1,0,0,0,40,38,1,0,0,0,41,42,3,8,
4,0,42,43,3,12,6,0,43,47,1,0,0,0,44,47,3,8,4,0,45,47,3,12,6,0,46,41,1,0,
0,0,46,44,1,0,0,0,46,45,1,0,0,0,47,7,1,0,0,0,48,55,3,10,5,0,49,55,5,2,0,
0,50,55,5,3,0,0,51,52,5,3,0,0,52,55,3,10,5,0,53,55,5,4,0,0,54,48,1,0,0,0,
54,49,1,0,0,0,54,50,1,0,0,0,54,51,1,0,0,0,54,53,1,0,0,0,55,9,1,0,0,0,56,
57,7,0,0,0,57,11,1,0,0,0,58,59,3,14,7,0,59,60,3,18,9,0,60,64,1,0,0,0,61,
64,3,14,7,0,62,64,3,18,9,0,63,58,1,0,0,0,63,61,1,0,0,0,63,62,1,0,0,0,64,
13,1,0,0,0,65,72,3,16,8,0,66,72,5,8,0,0,67,72,5,9,0,0,68,69,5,9,0,0,69,72,
3,16,8,0,70,72,5,10,0,0,71,65,1,0,0,0,71,66,1,0,0,0,71,67,1,0,0,0,71,68,
1,0,0,0,71,70,1,0,0,0,72,15,1,0,0,0,73,74,7,1,0,0,74,17,1,0,0,0,75,82,3,
20,10,0,76,82,5,14,0,0,77,82,5,15,0,0,78,79,5,15,0,0,79,82,3,20,10,0,80,
82,5,16,0,0,81,75,1,0,0,0,81,76,1,0,0,0,81,77,1,0,0,0,81,78,1,0,0,0,81,80,
1,0,0,0,82,19,1,0,0,0,83,84,7,2,0,0,84,21,1,0,0,0,7,29,38,46,54,63,71,81];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class romannumeralsParser extends antlr4.Parser {

    static grammarFileName = "romannumerals.g4";
    static literalNames = [ null, "'M'", "'CD'", "'D'", "'CM'", "'C'", "'CC'", 
                            "'CCC'", "'XL'", "'L'", "'XC'", "'X'", "'XX'", 
                            "'XXX'", "'IV'", "'V'", "'IX'", "'I'", "'II'", 
                            "'III'" ];
    static symbolicNames = [ null, "M", "CD", "D", "CM", "C", "CC", "CCC", 
                             "XL", "L", "XC", "X", "XX", "XXX", "IV", "V", 
                             "IX", "I", "II", "III", "WS" ];
    static ruleNames = [ "expression", "thousands", "thous_part", "hundreds", 
                         "hun_part", "hun_rep", "tens", "tens_part", "tens_rep", 
                         "ones", "ones_rep" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = romannumeralsParser.ruleNames;
        this.literalNames = romannumeralsParser.literalNames;
        this.symbolicNames = romannumeralsParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.thous_part_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    thous_part_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, romannumeralsParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.thousands();
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



	thousands() {
	    let localctx = new ThousandsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, romannumeralsParser.RULE_thousands);
	    try {
	        this.state = 29;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            this.thous_part(0);
	            this.state = 25;
	            this.hundreds();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.thous_part(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 28;
	            this.hundreds();
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


	thous_part(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Thous_partContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, romannumeralsParser.RULE_thous_part, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(romannumeralsParser.M);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 38;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Thous_partContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, romannumeralsParser.RULE_thous_part);
	                this.state = 34;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 35;
	                this.match(romannumeralsParser.M); 
	            }
	            this.state = 40;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
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



	hundreds() {
	    let localctx = new HundredsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, romannumeralsParser.RULE_hundreds);
	    try {
	        this.state = 46;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.hun_part();
	            this.state = 42;
	            this.tens();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.hun_part();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 45;
	            this.tens();
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



	hun_part() {
	    let localctx = new Hun_partContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, romannumeralsParser.RULE_hun_part);
	    try {
	        this.state = 54;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.hun_rep();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
	            this.match(romannumeralsParser.CD);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 50;
	            this.match(romannumeralsParser.D);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 51;
	            this.match(romannumeralsParser.D);
	            this.state = 52;
	            this.hun_rep();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 53;
	            this.match(romannumeralsParser.CM);
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



	hun_rep() {
	    let localctx = new Hun_repContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, romannumeralsParser.RULE_hun_rep);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << romannumeralsParser.C) | (1 << romannumeralsParser.CC) | (1 << romannumeralsParser.CCC))) !== 0))) {
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



	tens() {
	    let localctx = new TensContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, romannumeralsParser.RULE_tens);
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
	            this.tens_part();
	            this.state = 59;
	            this.ones();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.tens_part();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 62;
	            this.ones();
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



	tens_part() {
	    let localctx = new Tens_partContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, romannumeralsParser.RULE_tens_part);
	    try {
	        this.state = 71;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 65;
	            this.tens_rep();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            this.match(romannumeralsParser.XL);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 67;
	            this.match(romannumeralsParser.L);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 68;
	            this.match(romannumeralsParser.L);
	            this.state = 69;
	            this.tens_rep();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 70;
	            this.match(romannumeralsParser.XC);
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



	tens_rep() {
	    let localctx = new Tens_repContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, romannumeralsParser.RULE_tens_rep);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << romannumeralsParser.X) | (1 << romannumeralsParser.XX) | (1 << romannumeralsParser.XXX))) !== 0))) {
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



	ones() {
	    let localctx = new OnesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, romannumeralsParser.RULE_ones);
	    try {
	        this.state = 81;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 75;
	            this.ones_rep();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
	            this.match(romannumeralsParser.IV);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 77;
	            this.match(romannumeralsParser.V);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 78;
	            this.match(romannumeralsParser.V);
	            this.state = 79;
	            this.ones_rep();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 80;
	            this.match(romannumeralsParser.IX);
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



	ones_rep() {
	    let localctx = new Ones_repContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, romannumeralsParser.RULE_ones_rep);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << romannumeralsParser.I) | (1 << romannumeralsParser.II) | (1 << romannumeralsParser.III))) !== 0))) {
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


}

romannumeralsParser.EOF = antlr4.Token.EOF;
romannumeralsParser.M = 1;
romannumeralsParser.CD = 2;
romannumeralsParser.D = 3;
romannumeralsParser.CM = 4;
romannumeralsParser.C = 5;
romannumeralsParser.CC = 6;
romannumeralsParser.CCC = 7;
romannumeralsParser.XL = 8;
romannumeralsParser.L = 9;
romannumeralsParser.XC = 10;
romannumeralsParser.X = 11;
romannumeralsParser.XX = 12;
romannumeralsParser.XXX = 13;
romannumeralsParser.IV = 14;
romannumeralsParser.V = 15;
romannumeralsParser.IX = 16;
romannumeralsParser.I = 17;
romannumeralsParser.II = 18;
romannumeralsParser.III = 19;
romannumeralsParser.WS = 20;

romannumeralsParser.RULE_expression = 0;
romannumeralsParser.RULE_thousands = 1;
romannumeralsParser.RULE_thous_part = 2;
romannumeralsParser.RULE_hundreds = 3;
romannumeralsParser.RULE_hun_part = 4;
romannumeralsParser.RULE_hun_rep = 5;
romannumeralsParser.RULE_tens = 6;
romannumeralsParser.RULE_tens_part = 7;
romannumeralsParser.RULE_tens_rep = 8;
romannumeralsParser.RULE_ones = 9;
romannumeralsParser.RULE_ones_rep = 10;

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
        this.ruleIndex = romannumeralsParser.RULE_expression;
    }

	thousands() {
	    return this.getTypedRuleContext(ThousandsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.exitExpression(this);
		}
	}


}



class ThousandsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = romannumeralsParser.RULE_thousands;
    }

	thous_part() {
	    return this.getTypedRuleContext(Thous_partContext,0);
	};

	hundreds() {
	    return this.getTypedRuleContext(HundredsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.enterThousands(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.exitThousands(this);
		}
	}


}



class Thous_partContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = romannumeralsParser.RULE_thous_part;
    }

	M() {
	    return this.getToken(romannumeralsParser.M, 0);
	};

	thous_part() {
	    return this.getTypedRuleContext(Thous_partContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.enterThous_part(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.exitThous_part(this);
		}
	}


}



class HundredsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = romannumeralsParser.RULE_hundreds;
    }

	hun_part() {
	    return this.getTypedRuleContext(Hun_partContext,0);
	};

	tens() {
	    return this.getTypedRuleContext(TensContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.enterHundreds(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.exitHundreds(this);
		}
	}


}



class Hun_partContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = romannumeralsParser.RULE_hun_part;
    }

	hun_rep() {
	    return this.getTypedRuleContext(Hun_repContext,0);
	};

	CD() {
	    return this.getToken(romannumeralsParser.CD, 0);
	};

	D() {
	    return this.getToken(romannumeralsParser.D, 0);
	};

	CM() {
	    return this.getToken(romannumeralsParser.CM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.enterHun_part(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.exitHun_part(this);
		}
	}


}



class Hun_repContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = romannumeralsParser.RULE_hun_rep;
    }

	C() {
	    return this.getToken(romannumeralsParser.C, 0);
	};

	CC() {
	    return this.getToken(romannumeralsParser.CC, 0);
	};

	CCC() {
	    return this.getToken(romannumeralsParser.CCC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.enterHun_rep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.exitHun_rep(this);
		}
	}


}



class TensContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = romannumeralsParser.RULE_tens;
    }

	tens_part() {
	    return this.getTypedRuleContext(Tens_partContext,0);
	};

	ones() {
	    return this.getTypedRuleContext(OnesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.enterTens(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.exitTens(this);
		}
	}


}



class Tens_partContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = romannumeralsParser.RULE_tens_part;
    }

	tens_rep() {
	    return this.getTypedRuleContext(Tens_repContext,0);
	};

	XL() {
	    return this.getToken(romannumeralsParser.XL, 0);
	};

	L() {
	    return this.getToken(romannumeralsParser.L, 0);
	};

	XC() {
	    return this.getToken(romannumeralsParser.XC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.enterTens_part(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.exitTens_part(this);
		}
	}


}



class Tens_repContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = romannumeralsParser.RULE_tens_rep;
    }

	X() {
	    return this.getToken(romannumeralsParser.X, 0);
	};

	XX() {
	    return this.getToken(romannumeralsParser.XX, 0);
	};

	XXX() {
	    return this.getToken(romannumeralsParser.XXX, 0);
	};

	enterRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.enterTens_rep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.exitTens_rep(this);
		}
	}


}



class OnesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = romannumeralsParser.RULE_ones;
    }

	ones_rep() {
	    return this.getTypedRuleContext(Ones_repContext,0);
	};

	IV() {
	    return this.getToken(romannumeralsParser.IV, 0);
	};

	V() {
	    return this.getToken(romannumeralsParser.V, 0);
	};

	IX() {
	    return this.getToken(romannumeralsParser.IX, 0);
	};

	enterRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.enterOnes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.exitOnes(this);
		}
	}


}



class Ones_repContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = romannumeralsParser.RULE_ones_rep;
    }

	I() {
	    return this.getToken(romannumeralsParser.I, 0);
	};

	II() {
	    return this.getToken(romannumeralsParser.II, 0);
	};

	III() {
	    return this.getToken(romannumeralsParser.III, 0);
	};

	enterRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.enterOnes_rep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof romannumeralsListener ) {
	        listener.exitOnes_rep(this);
		}
	}


}




romannumeralsParser.ExpressionContext = ExpressionContext; 
romannumeralsParser.ThousandsContext = ThousandsContext; 
romannumeralsParser.Thous_partContext = Thous_partContext; 
romannumeralsParser.HundredsContext = HundredsContext; 
romannumeralsParser.Hun_partContext = Hun_partContext; 
romannumeralsParser.Hun_repContext = Hun_repContext; 
romannumeralsParser.TensContext = TensContext; 
romannumeralsParser.Tens_partContext = Tens_partContext; 
romannumeralsParser.Tens_repContext = Tens_repContext; 
romannumeralsParser.OnesContext = OnesContext; 
romannumeralsParser.Ones_repContext = Ones_repContext; 
