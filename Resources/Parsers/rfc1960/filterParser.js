// Generated from Resources/Parsers/rfc1960/filter.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import filterListener from './filterListener.js';
const serializedATN = [4,1,12,100,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,
3,1,43,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,5,3,5,58,8,
5,1,6,1,6,1,6,3,6,63,8,6,1,7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,
10,3,10,77,8,10,1,10,1,10,3,10,81,8,10,1,11,1,11,1,12,1,12,3,12,87,8,12,
1,13,1,13,1,13,3,13,92,8,13,1,14,1,14,1,15,1,15,1,16,1,16,1,16,0,0,17,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,1,1,0,8,11,92,0,34,1,0,0,0,
2,42,1,0,0,0,4,44,1,0,0,0,6,47,1,0,0,0,8,50,1,0,0,0,10,57,1,0,0,0,12,62,
1,0,0,0,14,64,1,0,0,0,16,68,1,0,0,0,18,70,1,0,0,0,20,73,1,0,0,0,22,82,1,
0,0,0,24,84,1,0,0,0,26,88,1,0,0,0,28,93,1,0,0,0,30,95,1,0,0,0,32,97,1,0,
0,0,34,35,5,1,0,0,35,36,3,2,1,0,36,37,5,2,0,0,37,1,1,0,0,0,38,43,3,4,2,0,
39,43,3,6,3,0,40,43,3,8,4,0,41,43,3,12,6,0,42,38,1,0,0,0,42,39,1,0,0,0,42,
40,1,0,0,0,42,41,1,0,0,0,43,3,1,0,0,0,44,45,5,3,0,0,45,46,3,10,5,0,46,5,
1,0,0,0,47,48,5,4,0,0,48,49,3,10,5,0,49,7,1,0,0,0,50,51,5,5,0,0,51,52,3,
0,0,0,52,9,1,0,0,0,53,58,3,0,0,0,54,55,3,0,0,0,55,56,3,10,5,0,56,58,1,0,
0,0,57,53,1,0,0,0,57,54,1,0,0,0,58,11,1,0,0,0,59,63,3,14,7,0,60,63,3,18,
9,0,61,63,3,20,10,0,62,59,1,0,0,0,62,60,1,0,0,0,62,61,1,0,0,0,63,13,1,0,
0,0,64,65,3,30,15,0,65,66,3,16,8,0,66,67,3,32,16,0,67,15,1,0,0,0,68,69,7,
0,0,0,69,17,1,0,0,0,70,71,3,30,15,0,71,72,5,6,0,0,72,19,1,0,0,0,73,74,3,
30,15,0,74,76,5,8,0,0,75,77,3,22,11,0,76,75,1,0,0,0,76,77,1,0,0,0,77,78,
1,0,0,0,78,80,3,24,12,0,79,81,3,28,14,0,80,79,1,0,0,0,80,81,1,0,0,0,81,21,
1,0,0,0,82,83,3,32,16,0,83,23,1,0,0,0,84,86,5,7,0,0,85,87,3,26,13,0,86,85,
1,0,0,0,86,87,1,0,0,0,87,25,1,0,0,0,88,89,3,32,16,0,89,91,5,7,0,0,90,92,
3,26,13,0,91,90,1,0,0,0,91,92,1,0,0,0,92,27,1,0,0,0,93,94,3,32,16,0,94,29,
1,0,0,0,95,96,5,12,0,0,96,31,1,0,0,0,97,98,5,12,0,0,98,33,1,0,0,0,7,42,57,
62,76,80,86,91];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class filterParser extends antlr4.Parser {

    static grammarFileName = "filter.g4";
    static literalNames = [ null, "'('", "')'", "'&'", "'|'", "'!'", "'=*'", 
                            "'*'", "'='", "'~='", "'>='", "'<='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "EQUAL", "APPROX", "GREATER", "LESS", "OCTETSTRING" ];
    static ruleNames = [ "filter_", "filtercomp", "and_", "or_", "not_", 
                         "filterlist", "item", "simple", "filtertype", "present", 
                         "substring", "initial", "any_", "starval", "final_", 
                         "attr", "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = filterParser.ruleNames;
        this.literalNames = filterParser.literalNames;
        this.symbolicNames = filterParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	filter_() {
	    let localctx = new Filter_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, filterParser.RULE_filter_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(filterParser.T__0);
	        this.state = 35;
	        this.filtercomp();
	        this.state = 36;
	        this.match(filterParser.T__1);
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



	filtercomp() {
	    let localctx = new FiltercompContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, filterParser.RULE_filtercomp);
	    try {
	        this.state = 42;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case filterParser.T__2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.and_();
	            break;
	        case filterParser.T__3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.or_();
	            break;
	        case filterParser.T__4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 40;
	            this.not_();
	            break;
	        case filterParser.OCTETSTRING:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 41;
	            this.item();
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



	and_() {
	    let localctx = new And_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, filterParser.RULE_and_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(filterParser.T__2);
	        this.state = 45;
	        this.filterlist();
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



	or_() {
	    let localctx = new Or_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, filterParser.RULE_or_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(filterParser.T__3);
	        this.state = 48;
	        this.filterlist();
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



	not_() {
	    let localctx = new Not_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, filterParser.RULE_not_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(filterParser.T__4);
	        this.state = 51;
	        this.filter_();
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



	filterlist() {
	    let localctx = new FilterlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, filterParser.RULE_filterlist);
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.filter_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.filter_();
	            this.state = 55;
	            this.filterlist();
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



	item() {
	    let localctx = new ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, filterParser.RULE_item);
	    try {
	        this.state = 62;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 59;
	            this.simple();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.present();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 61;
	            this.substring();
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



	simple() {
	    let localctx = new SimpleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, filterParser.RULE_simple);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.attr();
	        this.state = 65;
	        this.filtertype();
	        this.state = 66;
	        this.value();
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



	filtertype() {
	    let localctx = new FiltertypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, filterParser.RULE_filtertype);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << filterParser.EQUAL) | (1 << filterParser.APPROX) | (1 << filterParser.GREATER) | (1 << filterParser.LESS))) !== 0))) {
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



	present() {
	    let localctx = new PresentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, filterParser.RULE_present);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.attr();
	        this.state = 71;
	        this.match(filterParser.T__5);
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



	substring() {
	    let localctx = new SubstringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, filterParser.RULE_substring);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.attr();
	        this.state = 74;
	        this.match(filterParser.EQUAL);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===filterParser.OCTETSTRING) {
	            this.state = 75;
	            this.initial();
	        }

	        this.state = 78;
	        this.any_();
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===filterParser.OCTETSTRING) {
	            this.state = 79;
	            this.final_();
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



	initial() {
	    let localctx = new InitialContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, filterParser.RULE_initial);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.value();
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



	any_() {
	    let localctx = new Any_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, filterParser.RULE_any_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(filterParser.T__6);
	        this.state = 86;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 85;
	            this.starval();

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



	starval() {
	    let localctx = new StarvalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, filterParser.RULE_starval);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.value();
	        this.state = 89;
	        this.match(filterParser.T__6);
	        this.state = 91;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 90;
	            this.starval();

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



	final_() {
	    let localctx = new Final_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, filterParser.RULE_final_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.value();
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



	attr() {
	    let localctx = new AttrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, filterParser.RULE_attr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(filterParser.OCTETSTRING);
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, filterParser.RULE_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(filterParser.OCTETSTRING);
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

filterParser.EOF = antlr4.Token.EOF;
filterParser.T__0 = 1;
filterParser.T__1 = 2;
filterParser.T__2 = 3;
filterParser.T__3 = 4;
filterParser.T__4 = 5;
filterParser.T__5 = 6;
filterParser.T__6 = 7;
filterParser.EQUAL = 8;
filterParser.APPROX = 9;
filterParser.GREATER = 10;
filterParser.LESS = 11;
filterParser.OCTETSTRING = 12;

filterParser.RULE_filter_ = 0;
filterParser.RULE_filtercomp = 1;
filterParser.RULE_and_ = 2;
filterParser.RULE_or_ = 3;
filterParser.RULE_not_ = 4;
filterParser.RULE_filterlist = 5;
filterParser.RULE_item = 6;
filterParser.RULE_simple = 7;
filterParser.RULE_filtertype = 8;
filterParser.RULE_present = 9;
filterParser.RULE_substring = 10;
filterParser.RULE_initial = 11;
filterParser.RULE_any_ = 12;
filterParser.RULE_starval = 13;
filterParser.RULE_final_ = 14;
filterParser.RULE_attr = 15;
filterParser.RULE_value = 16;

class Filter_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = filterParser.RULE_filter_;
    }

	filtercomp() {
	    return this.getTypedRuleContext(FiltercompContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.enterFilter_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.exitFilter_(this);
		}
	}


}



class FiltercompContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = filterParser.RULE_filtercomp;
    }

	and_() {
	    return this.getTypedRuleContext(And_Context,0);
	};

	or_() {
	    return this.getTypedRuleContext(Or_Context,0);
	};

	not_() {
	    return this.getTypedRuleContext(Not_Context,0);
	};

	item() {
	    return this.getTypedRuleContext(ItemContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.enterFiltercomp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.exitFiltercomp(this);
		}
	}


}



class And_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = filterParser.RULE_and_;
    }

	filterlist() {
	    return this.getTypedRuleContext(FilterlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.enterAnd_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.exitAnd_(this);
		}
	}


}



class Or_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = filterParser.RULE_or_;
    }

	filterlist() {
	    return this.getTypedRuleContext(FilterlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.enterOr_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.exitOr_(this);
		}
	}


}



class Not_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = filterParser.RULE_not_;
    }

	filter_() {
	    return this.getTypedRuleContext(Filter_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.enterNot_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.exitNot_(this);
		}
	}


}



class FilterlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = filterParser.RULE_filterlist;
    }

	filter_() {
	    return this.getTypedRuleContext(Filter_Context,0);
	};

	filterlist() {
	    return this.getTypedRuleContext(FilterlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.enterFilterlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.exitFilterlist(this);
		}
	}


}



class ItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = filterParser.RULE_item;
    }

	simple() {
	    return this.getTypedRuleContext(SimpleContext,0);
	};

	present() {
	    return this.getTypedRuleContext(PresentContext,0);
	};

	substring() {
	    return this.getTypedRuleContext(SubstringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.enterItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.exitItem(this);
		}
	}


}



class SimpleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = filterParser.RULE_simple;
    }

	attr() {
	    return this.getTypedRuleContext(AttrContext,0);
	};

	filtertype() {
	    return this.getTypedRuleContext(FiltertypeContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.enterSimple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.exitSimple(this);
		}
	}


}



class FiltertypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = filterParser.RULE_filtertype;
    }

	EQUAL() {
	    return this.getToken(filterParser.EQUAL, 0);
	};

	APPROX() {
	    return this.getToken(filterParser.APPROX, 0);
	};

	GREATER() {
	    return this.getToken(filterParser.GREATER, 0);
	};

	LESS() {
	    return this.getToken(filterParser.LESS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.enterFiltertype(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.exitFiltertype(this);
		}
	}


}



class PresentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = filterParser.RULE_present;
    }

	attr() {
	    return this.getTypedRuleContext(AttrContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.enterPresent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.exitPresent(this);
		}
	}


}



class SubstringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = filterParser.RULE_substring;
    }

	attr() {
	    return this.getTypedRuleContext(AttrContext,0);
	};

	EQUAL() {
	    return this.getToken(filterParser.EQUAL, 0);
	};

	any_() {
	    return this.getTypedRuleContext(Any_Context,0);
	};

	initial() {
	    return this.getTypedRuleContext(InitialContext,0);
	};

	final_() {
	    return this.getTypedRuleContext(Final_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.enterSubstring(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.exitSubstring(this);
		}
	}


}



class InitialContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = filterParser.RULE_initial;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.enterInitial(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.exitInitial(this);
		}
	}


}



class Any_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = filterParser.RULE_any_;
    }

	starval() {
	    return this.getTypedRuleContext(StarvalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.enterAny_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.exitAny_(this);
		}
	}


}



class StarvalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = filterParser.RULE_starval;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	starval() {
	    return this.getTypedRuleContext(StarvalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.enterStarval(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.exitStarval(this);
		}
	}


}



class Final_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = filterParser.RULE_final_;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.enterFinal_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.exitFinal_(this);
		}
	}


}



class AttrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = filterParser.RULE_attr;
    }

	OCTETSTRING() {
	    return this.getToken(filterParser.OCTETSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.enterAttr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.exitAttr(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = filterParser.RULE_value;
    }

	OCTETSTRING() {
	    return this.getToken(filterParser.OCTETSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof filterListener ) {
	        listener.exitValue(this);
		}
	}


}




filterParser.Filter_Context = Filter_Context; 
filterParser.FiltercompContext = FiltercompContext; 
filterParser.And_Context = And_Context; 
filterParser.Or_Context = Or_Context; 
filterParser.Not_Context = Not_Context; 
filterParser.FilterlistContext = FilterlistContext; 
filterParser.ItemContext = ItemContext; 
filterParser.SimpleContext = SimpleContext; 
filterParser.FiltertypeContext = FiltertypeContext; 
filterParser.PresentContext = PresentContext; 
filterParser.SubstringContext = SubstringContext; 
filterParser.InitialContext = InitialContext; 
filterParser.Any_Context = Any_Context; 
filterParser.StarvalContext = StarvalContext; 
filterParser.Final_Context = Final_Context; 
filterParser.AttrContext = AttrContext; 
filterParser.ValueContext = ValueContext; 
