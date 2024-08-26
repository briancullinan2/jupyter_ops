// Generated from Resources/Parsers/metric/metric.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import metricListener from './metricListener.js';
const serializedATN = [4,1,48,43,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,5,0,18,8,0,10,0,12,0,21,9,0,1,1,3,1,24,8,1,1,
1,1,1,3,1,28,8,1,1,2,1,2,1,2,1,3,1,3,1,4,1,4,3,4,37,8,4,1,5,1,5,1,6,1,6,
1,6,0,0,7,0,2,4,6,8,10,12,0,4,1,0,1,2,1,0,4,19,2,0,14,14,20,25,2,0,6,6,26,
46,39,0,14,1,0,0,0,2,23,1,0,0,0,4,29,1,0,0,0,6,32,1,0,0,0,8,36,1,0,0,0,10,
38,1,0,0,0,12,40,1,0,0,0,14,19,3,2,1,0,15,16,7,0,0,0,16,18,3,2,1,0,17,15,
1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,1,1,0,0,0,21,19,1,0,
0,0,22,24,3,6,3,0,23,22,1,0,0,0,23,24,1,0,0,0,24,25,1,0,0,0,25,27,3,8,4,
0,26,28,3,4,2,0,27,26,1,0,0,0,27,28,1,0,0,0,28,3,1,0,0,0,29,30,5,3,0,0,30,
31,5,47,0,0,31,5,1,0,0,0,32,33,7,1,0,0,33,7,1,0,0,0,34,37,3,10,5,0,35,37,
3,12,6,0,36,34,1,0,0,0,36,35,1,0,0,0,37,9,1,0,0,0,38,39,7,2,0,0,39,11,1,
0,0,0,40,41,7,3,0,0,41,13,1,0,0,0,4,19,23,27,36];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class metricParser extends antlr4.Parser {

    static grammarFileName = "metric.g4";
    static literalNames = [ null, "'*'", "'/'", "'^'", "'E'", "'P'", "'T'", 
                            "'G'", "'M'", "'k'", "'h'", "'da'", "'d'", "'c'", 
                            "'m'", "'\\u00B5'", "'n'", "'p'", "'f'", "'a'", 
                            "'g'", "'s'", "'A'", "'K'", "'mol'", "'cd'", 
                            "'rad'", "'Hz'", "'sr'", "'N'", "'Pa'", "'J'", 
                            "'W'", "'C'", "'V'", "'F'", "'\\u03A9'", "'S'", 
                            "'Wb'", "'H'", "'\\u02DAC'", "'lm'", "'lx'", 
                            "'Bq'", "'Gy'", "'Sv'", "'kat'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "INTE", 
                             "WS" ];
    static ruleNames = [ "uom", "measure", "exponent", "prefix_", "unit", 
                         "baseunit", "derivedunit" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = metricParser.ruleNames;
        this.literalNames = metricParser.literalNames;
        this.symbolicNames = metricParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	uom() {
	    let localctx = new UomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, metricParser.RULE_uom);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.measure();
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===metricParser.T__0 || _la===metricParser.T__1) {
	            this.state = 15;
	            _la = this._input.LA(1);
	            if(!(_la===metricParser.T__0 || _la===metricParser.T__1)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 16;
	            this.measure();
	            this.state = 21;
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



	measure() {
	    let localctx = new MeasureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, metricParser.RULE_measure);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 22;
	            this.prefix_();

	        }
	        this.state = 25;
	        this.unit();
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===metricParser.T__2) {
	            this.state = 26;
	            this.exponent();
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



	exponent() {
	    let localctx = new ExponentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, metricParser.RULE_exponent);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(metricParser.T__2);
	        this.state = 30;
	        this.match(metricParser.INTE);
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



	prefix_() {
	    let localctx = new Prefix_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, metricParser.RULE_prefix_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << metricParser.T__3) | (1 << metricParser.T__4) | (1 << metricParser.T__5) | (1 << metricParser.T__6) | (1 << metricParser.T__7) | (1 << metricParser.T__8) | (1 << metricParser.T__9) | (1 << metricParser.T__10) | (1 << metricParser.T__11) | (1 << metricParser.T__12) | (1 << metricParser.T__13) | (1 << metricParser.T__14) | (1 << metricParser.T__15) | (1 << metricParser.T__16) | (1 << metricParser.T__17) | (1 << metricParser.T__18))) !== 0))) {
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



	unit() {
	    let localctx = new UnitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, metricParser.RULE_unit);
	    try {
	        this.state = 36;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case metricParser.T__13:
	        case metricParser.T__19:
	        case metricParser.T__20:
	        case metricParser.T__21:
	        case metricParser.T__22:
	        case metricParser.T__23:
	        case metricParser.T__24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.baseunit();
	            break;
	        case metricParser.T__5:
	        case metricParser.T__25:
	        case metricParser.T__26:
	        case metricParser.T__27:
	        case metricParser.T__28:
	        case metricParser.T__29:
	        case metricParser.T__30:
	        case metricParser.T__31:
	        case metricParser.T__32:
	        case metricParser.T__33:
	        case metricParser.T__34:
	        case metricParser.T__35:
	        case metricParser.T__36:
	        case metricParser.T__37:
	        case metricParser.T__38:
	        case metricParser.T__39:
	        case metricParser.T__40:
	        case metricParser.T__41:
	        case metricParser.T__42:
	        case metricParser.T__43:
	        case metricParser.T__44:
	        case metricParser.T__45:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.derivedunit();
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



	baseunit() {
	    let localctx = new BaseunitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, metricParser.RULE_baseunit);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << metricParser.T__13) | (1 << metricParser.T__19) | (1 << metricParser.T__20) | (1 << metricParser.T__21) | (1 << metricParser.T__22) | (1 << metricParser.T__23) | (1 << metricParser.T__24))) !== 0))) {
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



	derivedunit() {
	    let localctx = new DerivedunitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, metricParser.RULE_derivedunit);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << metricParser.T__5) | (1 << metricParser.T__25) | (1 << metricParser.T__26) | (1 << metricParser.T__27) | (1 << metricParser.T__28) | (1 << metricParser.T__29) | (1 << metricParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (metricParser.T__31 - 32)) | (1 << (metricParser.T__32 - 32)) | (1 << (metricParser.T__33 - 32)) | (1 << (metricParser.T__34 - 32)) | (1 << (metricParser.T__35 - 32)) | (1 << (metricParser.T__36 - 32)) | (1 << (metricParser.T__37 - 32)) | (1 << (metricParser.T__38 - 32)) | (1 << (metricParser.T__39 - 32)) | (1 << (metricParser.T__40 - 32)) | (1 << (metricParser.T__41 - 32)) | (1 << (metricParser.T__42 - 32)) | (1 << (metricParser.T__43 - 32)) | (1 << (metricParser.T__44 - 32)) | (1 << (metricParser.T__45 - 32)))) !== 0))) {
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

metricParser.EOF = antlr4.Token.EOF;
metricParser.T__0 = 1;
metricParser.T__1 = 2;
metricParser.T__2 = 3;
metricParser.T__3 = 4;
metricParser.T__4 = 5;
metricParser.T__5 = 6;
metricParser.T__6 = 7;
metricParser.T__7 = 8;
metricParser.T__8 = 9;
metricParser.T__9 = 10;
metricParser.T__10 = 11;
metricParser.T__11 = 12;
metricParser.T__12 = 13;
metricParser.T__13 = 14;
metricParser.T__14 = 15;
metricParser.T__15 = 16;
metricParser.T__16 = 17;
metricParser.T__17 = 18;
metricParser.T__18 = 19;
metricParser.T__19 = 20;
metricParser.T__20 = 21;
metricParser.T__21 = 22;
metricParser.T__22 = 23;
metricParser.T__23 = 24;
metricParser.T__24 = 25;
metricParser.T__25 = 26;
metricParser.T__26 = 27;
metricParser.T__27 = 28;
metricParser.T__28 = 29;
metricParser.T__29 = 30;
metricParser.T__30 = 31;
metricParser.T__31 = 32;
metricParser.T__32 = 33;
metricParser.T__33 = 34;
metricParser.T__34 = 35;
metricParser.T__35 = 36;
metricParser.T__36 = 37;
metricParser.T__37 = 38;
metricParser.T__38 = 39;
metricParser.T__39 = 40;
metricParser.T__40 = 41;
metricParser.T__41 = 42;
metricParser.T__42 = 43;
metricParser.T__43 = 44;
metricParser.T__44 = 45;
metricParser.T__45 = 46;
metricParser.INTE = 47;
metricParser.WS = 48;

metricParser.RULE_uom = 0;
metricParser.RULE_measure = 1;
metricParser.RULE_exponent = 2;
metricParser.RULE_prefix_ = 3;
metricParser.RULE_unit = 4;
metricParser.RULE_baseunit = 5;
metricParser.RULE_derivedunit = 6;

class UomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metricParser.RULE_uom;
    }

	measure = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MeasureContext);
	    } else {
	        return this.getTypedRuleContext(MeasureContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof metricListener ) {
	        listener.enterUom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metricListener ) {
	        listener.exitUom(this);
		}
	}


}



class MeasureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metricParser.RULE_measure;
    }

	unit() {
	    return this.getTypedRuleContext(UnitContext,0);
	};

	prefix_() {
	    return this.getTypedRuleContext(Prefix_Context,0);
	};

	exponent() {
	    return this.getTypedRuleContext(ExponentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof metricListener ) {
	        listener.enterMeasure(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metricListener ) {
	        listener.exitMeasure(this);
		}
	}


}



class ExponentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metricParser.RULE_exponent;
    }

	INTE() {
	    return this.getToken(metricParser.INTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof metricListener ) {
	        listener.enterExponent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metricListener ) {
	        listener.exitExponent(this);
		}
	}


}



class Prefix_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metricParser.RULE_prefix_;
    }


	enterRule(listener) {
	    if(listener instanceof metricListener ) {
	        listener.enterPrefix_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metricListener ) {
	        listener.exitPrefix_(this);
		}
	}


}



class UnitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metricParser.RULE_unit;
    }

	baseunit() {
	    return this.getTypedRuleContext(BaseunitContext,0);
	};

	derivedunit() {
	    return this.getTypedRuleContext(DerivedunitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof metricListener ) {
	        listener.enterUnit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metricListener ) {
	        listener.exitUnit(this);
		}
	}


}



class BaseunitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metricParser.RULE_baseunit;
    }


	enterRule(listener) {
	    if(listener instanceof metricListener ) {
	        listener.enterBaseunit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metricListener ) {
	        listener.exitBaseunit(this);
		}
	}


}



class DerivedunitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = metricParser.RULE_derivedunit;
    }


	enterRule(listener) {
	    if(listener instanceof metricListener ) {
	        listener.enterDerivedunit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof metricListener ) {
	        listener.exitDerivedunit(this);
		}
	}


}




metricParser.UomContext = UomContext; 
metricParser.MeasureContext = MeasureContext; 
metricParser.ExponentContext = ExponentContext; 
metricParser.Prefix_Context = Prefix_Context; 
metricParser.UnitContext = UnitContext; 
metricParser.BaseunitContext = BaseunitContext; 
metricParser.DerivedunitContext = DerivedunitContext; 
