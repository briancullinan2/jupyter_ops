// Generated from ./telephone/telephone.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import telephoneListener from './telephoneListener.js';
const serializedATN = [4,1,6,50,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,3,0,16,8,0,1,0,3,0,19,8,0,1,0,1,0,1,1,1,1,3,1,25,8,1,
1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,
1,6,1,6,1,6,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,0,45,0,15,1,0,0,0,2,24,1,
0,0,0,4,26,1,0,0,0,6,31,1,0,0,0,8,35,1,0,0,0,10,39,1,0,0,0,12,44,1,0,0,0,
14,16,5,1,0,0,15,14,1,0,0,0,15,16,1,0,0,0,16,18,1,0,0,0,17,19,5,2,0,0,18,
17,1,0,0,0,18,19,1,0,0,0,19,20,1,0,0,0,20,21,3,2,1,0,21,1,1,0,0,0,22,25,
3,4,2,0,23,25,3,12,6,0,24,22,1,0,0,0,24,23,1,0,0,0,25,3,1,0,0,0,26,27,5,
3,0,0,27,28,3,6,3,0,28,29,3,8,4,0,29,30,3,10,5,0,30,5,1,0,0,0,31,32,5,5,
0,0,32,33,5,5,0,0,33,34,5,5,0,0,34,7,1,0,0,0,35,36,5,5,0,0,36,37,5,5,0,0,
37,38,5,5,0,0,38,9,1,0,0,0,39,40,5,5,0,0,40,41,5,5,0,0,41,42,5,5,0,0,42,
43,5,5,0,0,43,11,1,0,0,0,44,45,5,4,0,0,45,46,3,6,3,0,46,47,3,8,4,0,47,48,
3,10,5,0,48,13,1,0,0,0,3,15,18,24];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class telephoneParser extends antlr4.Parser {

    static grammarFileName = "telephone.g4";
    static literalNames = [ null, "'+1'", "'+'", "'011'", "'010'" ];
    static symbolicNames = [ null, null, null, null, null, "DIGIT", "WS" ];
    static ruleNames = [ "number", "variation", "nanp", "areacode", "exchange", 
                         "subscriber", "japan" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = telephoneParser.ruleNames;
        this.literalNames = telephoneParser.literalNames;
        this.symbolicNames = telephoneParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, telephoneParser.RULE_number);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===telephoneParser.T__0) {
	            this.state = 14;
	            this.match(telephoneParser.T__0);
	        }

	        this.state = 18;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===telephoneParser.T__1) {
	            this.state = 17;
	            this.match(telephoneParser.T__1);
	        }

	        this.state = 20;
	        this.variation();
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



	variation() {
	    let localctx = new VariationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, telephoneParser.RULE_variation);
	    try {
	        this.state = 24;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case telephoneParser.T__2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 22;
	            this.nanp();
	            break;
	        case telephoneParser.T__3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 23;
	            this.japan();
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



	nanp() {
	    let localctx = new NanpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, telephoneParser.RULE_nanp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(telephoneParser.T__2);
	        this.state = 27;
	        this.areacode();
	        this.state = 28;
	        this.exchange();
	        this.state = 29;
	        this.subscriber();
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



	areacode() {
	    let localctx = new AreacodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, telephoneParser.RULE_areacode);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(telephoneParser.DIGIT);
	        this.state = 32;
	        this.match(telephoneParser.DIGIT);
	        this.state = 33;
	        this.match(telephoneParser.DIGIT);
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



	exchange() {
	    let localctx = new ExchangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, telephoneParser.RULE_exchange);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(telephoneParser.DIGIT);
	        this.state = 36;
	        this.match(telephoneParser.DIGIT);
	        this.state = 37;
	        this.match(telephoneParser.DIGIT);
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



	subscriber() {
	    let localctx = new SubscriberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, telephoneParser.RULE_subscriber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(telephoneParser.DIGIT);
	        this.state = 40;
	        this.match(telephoneParser.DIGIT);
	        this.state = 41;
	        this.match(telephoneParser.DIGIT);
	        this.state = 42;
	        this.match(telephoneParser.DIGIT);
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



	japan() {
	    let localctx = new JapanContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, telephoneParser.RULE_japan);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(telephoneParser.T__3);
	        this.state = 45;
	        this.areacode();
	        this.state = 46;
	        this.exchange();
	        this.state = 47;
	        this.subscriber();
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

telephoneParser.EOF = antlr4.Token.EOF;
telephoneParser.T__0 = 1;
telephoneParser.T__1 = 2;
telephoneParser.T__2 = 3;
telephoneParser.T__3 = 4;
telephoneParser.DIGIT = 5;
telephoneParser.WS = 6;

telephoneParser.RULE_number = 0;
telephoneParser.RULE_variation = 1;
telephoneParser.RULE_nanp = 2;
telephoneParser.RULE_areacode = 3;
telephoneParser.RULE_exchange = 4;
telephoneParser.RULE_subscriber = 5;
telephoneParser.RULE_japan = 6;

class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = telephoneParser.RULE_number;
    }

	variation() {
	    return this.getTypedRuleContext(VariationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof telephoneListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof telephoneListener ) {
	        listener.exitNumber(this);
		}
	}


}



class VariationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = telephoneParser.RULE_variation;
    }

	nanp() {
	    return this.getTypedRuleContext(NanpContext,0);
	};

	japan() {
	    return this.getTypedRuleContext(JapanContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof telephoneListener ) {
	        listener.enterVariation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof telephoneListener ) {
	        listener.exitVariation(this);
		}
	}


}



class NanpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = telephoneParser.RULE_nanp;
    }

	areacode() {
	    return this.getTypedRuleContext(AreacodeContext,0);
	};

	exchange() {
	    return this.getTypedRuleContext(ExchangeContext,0);
	};

	subscriber() {
	    return this.getTypedRuleContext(SubscriberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof telephoneListener ) {
	        listener.enterNanp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof telephoneListener ) {
	        listener.exitNanp(this);
		}
	}


}



class AreacodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = telephoneParser.RULE_areacode;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(telephoneParser.DIGIT);
	    } else {
	        return this.getToken(telephoneParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof telephoneListener ) {
	        listener.enterAreacode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof telephoneListener ) {
	        listener.exitAreacode(this);
		}
	}


}



class ExchangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = telephoneParser.RULE_exchange;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(telephoneParser.DIGIT);
	    } else {
	        return this.getToken(telephoneParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof telephoneListener ) {
	        listener.enterExchange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof telephoneListener ) {
	        listener.exitExchange(this);
		}
	}


}



class SubscriberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = telephoneParser.RULE_subscriber;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(telephoneParser.DIGIT);
	    } else {
	        return this.getToken(telephoneParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof telephoneListener ) {
	        listener.enterSubscriber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof telephoneListener ) {
	        listener.exitSubscriber(this);
		}
	}


}



class JapanContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = telephoneParser.RULE_japan;
    }

	areacode() {
	    return this.getTypedRuleContext(AreacodeContext,0);
	};

	exchange() {
	    return this.getTypedRuleContext(ExchangeContext,0);
	};

	subscriber() {
	    return this.getTypedRuleContext(SubscriberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof telephoneListener ) {
	        listener.enterJapan(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof telephoneListener ) {
	        listener.exitJapan(this);
		}
	}


}




telephoneParser.NumberContext = NumberContext; 
telephoneParser.VariationContext = VariationContext; 
telephoneParser.NanpContext = NanpContext; 
telephoneParser.AreacodeContext = AreacodeContext; 
telephoneParser.ExchangeContext = ExchangeContext; 
telephoneParser.SubscriberContext = SubscriberContext; 
telephoneParser.JapanContext = JapanContext; 
