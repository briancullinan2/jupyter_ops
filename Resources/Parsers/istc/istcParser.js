// Generated from ./istc/istc.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import istcListener from './istcListener.js';
const serializedATN = [4,1,5,42,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,
1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,0,0,5,0,2,4,6,8,
0,0,36,0,10,1,0,0,0,2,21,1,0,0,0,4,25,1,0,0,0,6,30,1,0,0,0,8,39,1,0,0,0,
10,11,5,1,0,0,11,12,5,2,0,0,12,13,3,2,1,0,13,14,5,3,0,0,14,15,3,4,2,0,15,
16,5,3,0,0,16,17,3,6,3,0,17,18,5,3,0,0,18,19,3,8,4,0,19,20,5,0,0,1,20,1,
1,0,0,0,21,22,5,4,0,0,22,23,5,4,0,0,23,24,5,4,0,0,24,3,1,0,0,0,25,26,5,4,
0,0,26,27,5,4,0,0,27,28,5,4,0,0,28,29,5,4,0,0,29,5,1,0,0,0,30,31,5,4,0,0,
31,32,5,4,0,0,32,33,5,4,0,0,33,34,5,4,0,0,34,35,5,4,0,0,35,36,5,4,0,0,36,
37,5,4,0,0,37,38,5,4,0,0,38,7,1,0,0,0,39,40,5,4,0,0,40,9,1,0,0,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class istcParser extends antlr4.Parser {

    static grammarFileName = "istc.g4";
    static literalNames = [ null, "'ISTC'", "' '" ];
    static symbolicNames = [ null, null, null, "SEP", "CHAR", "WS" ];
    static ruleNames = [ "istc", "registration", "year", "work", "check" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = istcParser.ruleNames;
        this.literalNames = istcParser.literalNames;
        this.symbolicNames = istcParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	istc() {
	    let localctx = new IstcContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, istcParser.RULE_istc);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.match(istcParser.T__0);
	        this.state = 11;
	        this.match(istcParser.T__1);
	        this.state = 12;
	        this.registration();
	        this.state = 13;
	        this.match(istcParser.SEP);
	        this.state = 14;
	        this.year();
	        this.state = 15;
	        this.match(istcParser.SEP);
	        this.state = 16;
	        this.work();
	        this.state = 17;
	        this.match(istcParser.SEP);
	        this.state = 18;
	        this.check();
	        this.state = 19;
	        this.match(istcParser.EOF);
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



	registration() {
	    let localctx = new RegistrationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, istcParser.RULE_registration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(istcParser.CHAR);
	        this.state = 22;
	        this.match(istcParser.CHAR);
	        this.state = 23;
	        this.match(istcParser.CHAR);
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



	year() {
	    let localctx = new YearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, istcParser.RULE_year);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(istcParser.CHAR);
	        this.state = 26;
	        this.match(istcParser.CHAR);
	        this.state = 27;
	        this.match(istcParser.CHAR);
	        this.state = 28;
	        this.match(istcParser.CHAR);
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



	work() {
	    let localctx = new WorkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, istcParser.RULE_work);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(istcParser.CHAR);
	        this.state = 31;
	        this.match(istcParser.CHAR);
	        this.state = 32;
	        this.match(istcParser.CHAR);
	        this.state = 33;
	        this.match(istcParser.CHAR);
	        this.state = 34;
	        this.match(istcParser.CHAR);
	        this.state = 35;
	        this.match(istcParser.CHAR);
	        this.state = 36;
	        this.match(istcParser.CHAR);
	        this.state = 37;
	        this.match(istcParser.CHAR);
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



	check() {
	    let localctx = new CheckContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, istcParser.RULE_check);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(istcParser.CHAR);
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

istcParser.EOF = antlr4.Token.EOF;
istcParser.T__0 = 1;
istcParser.T__1 = 2;
istcParser.SEP = 3;
istcParser.CHAR = 4;
istcParser.WS = 5;

istcParser.RULE_istc = 0;
istcParser.RULE_registration = 1;
istcParser.RULE_year = 2;
istcParser.RULE_work = 3;
istcParser.RULE_check = 4;

class IstcContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = istcParser.RULE_istc;
    }

	registration() {
	    return this.getTypedRuleContext(RegistrationContext,0);
	};

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(istcParser.SEP);
	    } else {
	        return this.getToken(istcParser.SEP, i);
	    }
	};


	year() {
	    return this.getTypedRuleContext(YearContext,0);
	};

	work() {
	    return this.getTypedRuleContext(WorkContext,0);
	};

	check() {
	    return this.getTypedRuleContext(CheckContext,0);
	};

	EOF() {
	    return this.getToken(istcParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof istcListener ) {
	        listener.enterIstc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof istcListener ) {
	        listener.exitIstc(this);
		}
	}


}



class RegistrationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = istcParser.RULE_registration;
    }

	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(istcParser.CHAR);
	    } else {
	        return this.getToken(istcParser.CHAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof istcListener ) {
	        listener.enterRegistration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof istcListener ) {
	        listener.exitRegistration(this);
		}
	}


}



class YearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = istcParser.RULE_year;
    }

	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(istcParser.CHAR);
	    } else {
	        return this.getToken(istcParser.CHAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof istcListener ) {
	        listener.enterYear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof istcListener ) {
	        listener.exitYear(this);
		}
	}


}



class WorkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = istcParser.RULE_work;
    }

	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(istcParser.CHAR);
	    } else {
	        return this.getToken(istcParser.CHAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof istcListener ) {
	        listener.enterWork(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof istcListener ) {
	        listener.exitWork(this);
		}
	}


}



class CheckContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = istcParser.RULE_check;
    }

	CHAR() {
	    return this.getToken(istcParser.CHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof istcListener ) {
	        listener.enterCheck(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof istcListener ) {
	        listener.exitCheck(this);
		}
	}


}




istcParser.IstcContext = IstcContext; 
istcParser.RegistrationContext = RegistrationContext; 
istcParser.YearContext = YearContext; 
istcParser.WorkContext = WorkContext; 
istcParser.CheckContext = CheckContext; 
