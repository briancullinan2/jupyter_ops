// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/databank/databank.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import databankListener from './databankListener.js';
import DatabankParserBase from './DatabankParserBase.js';

const serializedATN = [4,1,5,61,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,0,1,0,3,0,23,8,0,1,0,4,
0,26,8,0,11,0,12,0,27,1,0,5,0,31,8,0,10,0,12,0,34,9,0,1,0,1,0,1,1,1,1,1,
1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,3,5,54,8,5,1,5,3,5,
57,8,5,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,0,59,0,17,1,0,0,0,2,37,1,0,0,
0,4,41,1,0,0,0,6,44,1,0,0,0,8,48,1,0,0,0,10,53,1,0,0,0,12,58,1,0,0,0,14,
16,5,4,0,0,15,14,1,0,0,0,16,19,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,22,
1,0,0,0,19,17,1,0,0,0,20,23,3,2,1,0,21,23,3,4,2,0,22,20,1,0,0,0,22,21,1,
0,0,0,23,25,1,0,0,0,24,26,3,10,5,0,25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,0,
0,0,27,28,1,0,0,0,28,32,1,0,0,0,29,31,5,4,0,0,30,29,1,0,0,0,31,34,1,0,0,
0,32,30,1,0,0,0,32,33,1,0,0,0,33,35,1,0,0,0,34,32,1,0,0,0,35,36,5,0,0,1,
36,1,1,0,0,0,37,38,3,6,3,0,38,39,3,8,4,0,39,40,3,8,4,0,40,3,1,0,0,0,41,42,
3,8,4,0,42,43,3,8,4,0,43,5,1,0,0,0,44,45,5,2,0,0,45,46,4,3,0,0,46,47,5,4,
0,0,47,7,1,0,0,0,48,49,3,12,6,0,49,50,5,4,0,0,50,9,1,0,0,0,51,54,3,12,6,
0,52,54,5,1,0,0,53,51,1,0,0,0,53,52,1,0,0,0,54,56,1,0,0,0,55,57,5,4,0,0,
56,55,1,0,0,0,56,57,1,0,0,0,57,11,1,0,0,0,58,59,5,2,0,0,59,13,1,0,0,0,6,
17,22,27,32,53,56];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class databankParser extends DatabankParserBase {

    static grammarFileName = "databank.g4";
    static literalNames = [ null, "'NA'" ];
    static symbolicNames = [ null, null, "FLOATINGPOINT", "COMMENT", "EOL", 
                             "WS" ];
    static ruleNames = [ "databank", "datedseries", "undatedseries", "datatype", 
                         "dateline", "sample", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = databankParser.ruleNames;
        this.literalNames = databankParser.literalNames;
        this.symbolicNames = databankParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 3:
    	    		return this.datatype_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    datatype_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return  isdatatype() ;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	databank() {
	    let localctx = new DatabankContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, databankParser.RULE_databank);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 14;
	            this.match(databankParser.EOL);
	            this.state = 19;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 22;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 20;
	            this.datedseries();
	            break;

	        case 2:
	            this.state = 21;
	            this.undatedseries();
	            break;

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
	        } while(_la===1 || _la===2);
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 29;
	            this.match(databankParser.EOL);
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 35;
	        this.match(databankParser.EOF);
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
	        this.state = 37;
	        this.datatype();
	        this.state = 38;
	        this.dateline();
	        this.state = 39;
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
	        this.state = 41;
	        this.dateline();
	        this.state = 42;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(databankParser.FLOATINGPOINT);
	        this.state = 45;
	        if (!(  isdatatype() )) {
	            throw new antlr4.error.FailedPredicateException(this, " isdatatype() ");
	        }
	        this.state = 46;
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
	        this.state = 48;
	        this.number();
	        this.state = 49;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.state = 51;
	            this.number();
	            break;
	        case 1:
	            this.state = 52;
	            this.match(databankParser.T__0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 56;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 55;
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
	        this.state = 58;
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
databankParser.FLOATINGPOINT = 2;
databankParser.COMMENT = 3;
databankParser.EOL = 4;
databankParser.WS = 5;

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

	EOF() {
	    return this.getToken(databankParser.EOF, 0);
	};

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

	FLOATINGPOINT() {
	    return this.getToken(databankParser.FLOATINGPOINT, 0);
	};

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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
