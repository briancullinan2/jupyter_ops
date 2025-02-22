// Generated from ./databank/databank.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import databankListener from './databankListener.js';
const serializedATN = [4,1,8,52,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,0,1,0,3,0,23,8,0,1,0,4,
0,26,8,0,11,0,12,0,27,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,
4,1,5,1,5,3,5,45,8,5,1,5,3,5,48,8,5,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,
1,1,0,1,3,49,0,17,1,0,0,0,2,29,1,0,0,0,4,33,1,0,0,0,6,36,1,0,0,0,8,39,1,
0,0,0,10,44,1,0,0,0,12,49,1,0,0,0,14,16,5,7,0,0,15,14,1,0,0,0,16,19,1,0,
0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,22,1,0,0,0,19,17,1,0,0,0,20,23,3,2,1,
0,21,23,3,4,2,0,22,20,1,0,0,0,22,21,1,0,0,0,23,25,1,0,0,0,24,26,3,10,5,0,
25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,1,1,0,0,0,29,
30,3,6,3,0,30,31,3,8,4,0,31,32,3,8,4,0,32,3,1,0,0,0,33,34,3,8,4,0,34,35,
3,8,4,0,35,5,1,0,0,0,36,37,7,0,0,0,37,38,5,7,0,0,38,7,1,0,0,0,39,40,3,12,
6,0,40,41,5,7,0,0,41,9,1,0,0,0,42,45,3,12,6,0,43,45,5,4,0,0,44,42,1,0,0,
0,44,43,1,0,0,0,45,47,1,0,0,0,46,48,5,7,0,0,47,46,1,0,0,0,47,48,1,0,0,0,
48,11,1,0,0,0,49,50,5,5,0,0,50,13,1,0,0,0,5,17,22,27,44,47];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class databankParser extends antlr4.Parser {

    static grammarFileName = "databank.g4";
    static literalNames = [ null, "'-1'", "'-4'", "'-12'", "'NA'" ];
    static symbolicNames = [ null, null, null, null, null, "FLOATINGPOINT", 
                             "COMMENT", "EOL", "WS" ];
    static ruleNames = [ "databank", "datedseries", "undatedseries", "datatype", 
                         "dateline", "sample", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = databankParser.ruleNames;
        this.literalNames = databankParser.literalNames;
        this.symbolicNames = databankParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	databank() {
	    let localctx = new DatabankContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, databankParser.RULE_databank);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===databankParser.EOL) {
	            this.state = 14;
	            this.match(databankParser.EOL);
	            this.state = 19;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 22;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case databankParser.T__0:
	        case databankParser.T__1:
	        case databankParser.T__2:
	            this.state = 20;
	            this.datedseries();
	            break;
	        case databankParser.FLOATINGPOINT:
	            this.state = 21;
	            this.undatedseries();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.sample();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===databankParser.T__3 || _la===databankParser.FLOATINGPOINT);
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



	datedseries() {
	    let localctx = new DatedseriesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, databankParser.RULE_datedseries);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.datatype();
	        this.state = 30;
	        this.dateline();
	        this.state = 31;
	        this.dateline();
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



	undatedseries() {
	    let localctx = new UndatedseriesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, databankParser.RULE_undatedseries);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.dateline();
	        this.state = 34;
	        this.dateline();
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



	datatype() {
	    let localctx = new DatatypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, databankParser.RULE_datatype);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << databankParser.T__0) | (1 << databankParser.T__1) | (1 << databankParser.T__2))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 37;
	        this.match(databankParser.EOL);
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



	dateline() {
	    let localctx = new DatelineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, databankParser.RULE_dateline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.number();
	        this.state = 40;
	        this.match(databankParser.EOL);
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



	sample() {
	    let localctx = new SampleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, databankParser.RULE_sample);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case databankParser.FLOATINGPOINT:
	            this.state = 42;
	            this.number();
	            break;
	        case databankParser.T__3:
	            this.state = 43;
	            this.match(databankParser.T__3);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===databankParser.EOL) {
	            this.state = 46;
	            this.match(databankParser.EOL);
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, databankParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(databankParser.FLOATINGPOINT);
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

databankParser.EOF = antlr4.Token.EOF;
databankParser.T__0 = 1;
databankParser.T__1 = 2;
databankParser.T__2 = 3;
databankParser.T__3 = 4;
databankParser.FLOATINGPOINT = 5;
databankParser.COMMENT = 6;
databankParser.EOL = 7;
databankParser.WS = 8;

databankParser.RULE_databank = 0;
databankParser.RULE_datedseries = 1;
databankParser.RULE_undatedseries = 2;
databankParser.RULE_datatype = 3;
databankParser.RULE_dateline = 4;
databankParser.RULE_sample = 5;
databankParser.RULE_number = 6;

class DatabankContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = databankParser.RULE_databank;
    }

	datedseries() {
	    return this.getTypedRuleContext(DatedseriesContext,0);
	};

	undatedseries() {
	    return this.getTypedRuleContext(UndatedseriesContext,0);
	};

	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(databankParser.EOL);
	    } else {
	        return this.getToken(databankParser.EOL, i);
	    }
	};


	sample = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SampleContext);
	    } else {
	        return this.getTypedRuleContext(SampleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof databankListener ) {
	        listener.enterDatabank(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof databankListener ) {
	        listener.exitDatabank(this);
		}
	}


}



class DatedseriesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = databankParser.RULE_datedseries;
    }

	datatype() {
	    return this.getTypedRuleContext(DatatypeContext,0);
	};

	dateline = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DatelineContext);
	    } else {
	        return this.getTypedRuleContext(DatelineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof databankListener ) {
	        listener.enterDatedseries(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof databankListener ) {
	        listener.exitDatedseries(this);
		}
	}


}



class UndatedseriesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = databankParser.RULE_undatedseries;
    }

	dateline = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DatelineContext);
	    } else {
	        return this.getTypedRuleContext(DatelineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof databankListener ) {
	        listener.enterUndatedseries(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof databankListener ) {
	        listener.exitUndatedseries(this);
		}
	}


}



class DatatypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = databankParser.RULE_datatype;
    }

	EOL() {
	    return this.getToken(databankParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof databankListener ) {
	        listener.enterDatatype(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof databankListener ) {
	        listener.exitDatatype(this);
		}
	}


}



class DatelineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = databankParser.RULE_dateline;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	EOL() {
	    return this.getToken(databankParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof databankListener ) {
	        listener.enterDateline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof databankListener ) {
	        listener.exitDateline(this);
		}
	}


}



class SampleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = databankParser.RULE_sample;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	EOL() {
	    return this.getToken(databankParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof databankListener ) {
	        listener.enterSample(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof databankListener ) {
	        listener.exitSample(this);
		}
	}


}



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
        this.ruleIndex = databankParser.RULE_number;
    }

	FLOATINGPOINT() {
	    return this.getToken(databankParser.FLOATINGPOINT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof databankListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof databankListener ) {
	        listener.exitNumber(this);
		}
	}


}




databankParser.DatabankContext = DatabankContext; 
databankParser.DatedseriesContext = DatedseriesContext; 
databankParser.UndatedseriesContext = UndatedseriesContext; 
databankParser.DatatypeContext = DatatypeContext; 
databankParser.DatelineContext = DatelineContext; 
databankParser.SampleContext = SampleContext; 
databankParser.NumberContext = NumberContext; 
