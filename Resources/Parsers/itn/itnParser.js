// Generated from ./itn/itn.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import itnListener from './itnListener.js';
const serializedATN = [4,1,4,38,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,5,0,14,8,0,10,0,12,0,17,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,0,32,
0,15,1,0,0,0,2,20,1,0,0,0,4,29,1,0,0,0,6,31,1,0,0,0,8,33,1,0,0,0,10,35,1,
0,0,0,12,14,3,2,1,0,13,12,1,0,0,0,14,17,1,0,0,0,15,13,1,0,0,0,15,16,1,0,
0,0,16,18,1,0,0,0,17,15,1,0,0,0,18,19,5,0,0,1,19,1,1,0,0,0,20,21,3,4,2,0,
21,22,5,1,0,0,22,23,3,6,3,0,23,24,5,1,0,0,24,25,3,8,4,0,25,26,5,1,0,0,26,
27,3,10,5,0,27,28,5,1,0,0,28,3,1,0,0,0,29,30,5,2,0,0,30,5,1,0,0,0,31,32,
5,2,0,0,32,7,1,0,0,0,33,34,5,3,0,0,34,9,1,0,0,0,35,36,5,2,0,0,36,11,1,0,
0,0,1,15];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class itnParser extends antlr4.Parser {

    static grammarFileName = "itn.g4";
    static literalNames = [ null, "'|'" ];
    static symbolicNames = [ null, null, "NUM", "TEXT", "WS" ];
    static ruleNames = [ "itinerary", "line", "longitude", "latitude", "descr", 
                         "flag" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = itnParser.ruleNames;
        this.literalNames = itnParser.literalNames;
        this.symbolicNames = itnParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	itinerary() {
	    let localctx = new ItineraryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, itnParser.RULE_itinerary);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===itnParser.NUM) {
	            this.state = 12;
	            this.line();
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 18;
	        this.match(itnParser.EOF);
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, itnParser.RULE_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.longitude();
	        this.state = 21;
	        this.match(itnParser.T__0);
	        this.state = 22;
	        this.latitude();
	        this.state = 23;
	        this.match(itnParser.T__0);
	        this.state = 24;
	        this.descr();
	        this.state = 25;
	        this.match(itnParser.T__0);
	        this.state = 26;
	        this.flag();
	        this.state = 27;
	        this.match(itnParser.T__0);
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



	longitude() {
	    let localctx = new LongitudeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, itnParser.RULE_longitude);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(itnParser.NUM);
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



	latitude() {
	    let localctx = new LatitudeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, itnParser.RULE_latitude);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(itnParser.NUM);
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



	descr() {
	    let localctx = new DescrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, itnParser.RULE_descr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(itnParser.TEXT);
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



	flag() {
	    let localctx = new FlagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, itnParser.RULE_flag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(itnParser.NUM);
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

itnParser.EOF = antlr4.Token.EOF;
itnParser.T__0 = 1;
itnParser.NUM = 2;
itnParser.TEXT = 3;
itnParser.WS = 4;

itnParser.RULE_itinerary = 0;
itnParser.RULE_line = 1;
itnParser.RULE_longitude = 2;
itnParser.RULE_latitude = 3;
itnParser.RULE_descr = 4;
itnParser.RULE_flag = 5;

class ItineraryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = itnParser.RULE_itinerary;
    }

	EOF() {
	    return this.getToken(itnParser.EOF, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof itnListener ) {
	        listener.enterItinerary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof itnListener ) {
	        listener.exitItinerary(this);
		}
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = itnParser.RULE_line;
    }

	longitude() {
	    return this.getTypedRuleContext(LongitudeContext,0);
	};

	latitude() {
	    return this.getTypedRuleContext(LatitudeContext,0);
	};

	descr() {
	    return this.getTypedRuleContext(DescrContext,0);
	};

	flag() {
	    return this.getTypedRuleContext(FlagContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof itnListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof itnListener ) {
	        listener.exitLine(this);
		}
	}


}



class LongitudeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = itnParser.RULE_longitude;
    }

	NUM() {
	    return this.getToken(itnParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof itnListener ) {
	        listener.enterLongitude(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof itnListener ) {
	        listener.exitLongitude(this);
		}
	}


}



class LatitudeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = itnParser.RULE_latitude;
    }

	NUM() {
	    return this.getToken(itnParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof itnListener ) {
	        listener.enterLatitude(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof itnListener ) {
	        listener.exitLatitude(this);
		}
	}


}



class DescrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = itnParser.RULE_descr;
    }

	TEXT() {
	    return this.getToken(itnParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof itnListener ) {
	        listener.enterDescr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof itnListener ) {
	        listener.exitDescr(this);
		}
	}


}



class FlagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = itnParser.RULE_flag;
    }

	NUM() {
	    return this.getToken(itnParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof itnListener ) {
	        listener.enterFlag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof itnListener ) {
	        listener.exitFlag(this);
		}
	}


}




itnParser.ItineraryContext = ItineraryContext; 
itnParser.LineContext = LineContext; 
itnParser.LongitudeContext = LongitudeContext; 
itnParser.LatitudeContext = LatitudeContext; 
itnParser.DescrContext = DescrContext; 
itnParser.FlagContext = FlagContext; 
