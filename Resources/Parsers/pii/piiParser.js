// Generated from ./pii/pii.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import piiListener from './piiListener.js';
const serializedATN = [4,1,8,55,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,3,0,15,8,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,
3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,1,1,0,3,4,49,
0,14,1,0,0,0,2,20,1,0,0,0,4,31,1,0,0,0,6,43,1,0,0,0,8,46,1,0,0,0,10,52,1,
0,0,0,12,15,3,2,1,0,13,15,3,4,2,0,14,12,1,0,0,0,14,13,1,0,0,0,15,16,1,0,
0,0,16,17,3,8,4,0,17,18,3,10,5,0,18,19,5,0,0,1,19,1,1,0,0,0,20,21,5,1,0,
0,21,22,5,4,0,0,22,23,5,4,0,0,23,24,5,4,0,0,24,25,5,4,0,0,25,26,5,4,0,0,
26,27,5,4,0,0,27,28,5,4,0,0,28,29,5,4,0,0,29,30,3,6,3,0,30,3,1,0,0,0,31,
32,5,2,0,0,32,33,5,4,0,0,33,34,5,4,0,0,34,35,5,4,0,0,35,36,5,4,0,0,36,37,
5,4,0,0,37,38,5,4,0,0,38,39,5,4,0,0,39,40,5,4,0,0,40,41,5,4,0,0,41,42,5,
4,0,0,42,5,1,0,0,0,43,44,5,4,0,0,44,45,5,4,0,0,45,7,1,0,0,0,46,47,5,4,0,
0,47,48,5,4,0,0,48,49,5,4,0,0,49,50,5,4,0,0,50,51,5,4,0,0,51,9,1,0,0,0,52,
53,7,0,0,0,53,11,1,0,0,0,1,14];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class piiParser extends antlr4.Parser {

    static grammarFileName = "pii.g4";
    static literalNames = [ null, "'S'", "'B'", "'X'", null, "'('", "')'", 
                            "'-'" ];
    static symbolicNames = [ null, null, null, null, "DIGIT", "LPAREN", 
                             "RPAREN", "DASH", "WS" ];
    static ruleNames = [ "pii", "issn", "isbn", "year", "item", "check" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = piiParser.ruleNames;
        this.literalNames = piiParser.literalNames;
        this.symbolicNames = piiParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	pii() {
	    let localctx = new PiiContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, piiParser.RULE_pii);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case piiParser.T__0:
	            this.state = 12;
	            this.issn();
	            break;
	        case piiParser.T__1:
	            this.state = 13;
	            this.isbn();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 16;
	        this.item();
	        this.state = 17;
	        this.check();
	        this.state = 18;
	        this.match(piiParser.EOF);
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



	issn() {
	    let localctx = new IssnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, piiParser.RULE_issn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(piiParser.T__0);
	        this.state = 21;
	        this.match(piiParser.DIGIT);
	        this.state = 22;
	        this.match(piiParser.DIGIT);
	        this.state = 23;
	        this.match(piiParser.DIGIT);
	        this.state = 24;
	        this.match(piiParser.DIGIT);
	        this.state = 25;
	        this.match(piiParser.DIGIT);
	        this.state = 26;
	        this.match(piiParser.DIGIT);
	        this.state = 27;
	        this.match(piiParser.DIGIT);
	        this.state = 28;
	        this.match(piiParser.DIGIT);
	        this.state = 29;
	        this.year();
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



	isbn() {
	    let localctx = new IsbnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, piiParser.RULE_isbn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(piiParser.T__1);
	        this.state = 32;
	        this.match(piiParser.DIGIT);
	        this.state = 33;
	        this.match(piiParser.DIGIT);
	        this.state = 34;
	        this.match(piiParser.DIGIT);
	        this.state = 35;
	        this.match(piiParser.DIGIT);
	        this.state = 36;
	        this.match(piiParser.DIGIT);
	        this.state = 37;
	        this.match(piiParser.DIGIT);
	        this.state = 38;
	        this.match(piiParser.DIGIT);
	        this.state = 39;
	        this.match(piiParser.DIGIT);
	        this.state = 40;
	        this.match(piiParser.DIGIT);
	        this.state = 41;
	        this.match(piiParser.DIGIT);
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
	    this.enterRule(localctx, 6, piiParser.RULE_year);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(piiParser.DIGIT);
	        this.state = 44;
	        this.match(piiParser.DIGIT);
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
	    this.enterRule(localctx, 8, piiParser.RULE_item);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(piiParser.DIGIT);
	        this.state = 47;
	        this.match(piiParser.DIGIT);
	        this.state = 48;
	        this.match(piiParser.DIGIT);
	        this.state = 49;
	        this.match(piiParser.DIGIT);
	        this.state = 50;
	        this.match(piiParser.DIGIT);
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
	    this.enterRule(localctx, 10, piiParser.RULE_check);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        _la = this._input.LA(1);
	        if(!(_la===piiParser.T__2 || _la===piiParser.DIGIT)) {
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

piiParser.EOF = antlr4.Token.EOF;
piiParser.T__0 = 1;
piiParser.T__1 = 2;
piiParser.T__2 = 3;
piiParser.DIGIT = 4;
piiParser.LPAREN = 5;
piiParser.RPAREN = 6;
piiParser.DASH = 7;
piiParser.WS = 8;

piiParser.RULE_pii = 0;
piiParser.RULE_issn = 1;
piiParser.RULE_isbn = 2;
piiParser.RULE_year = 3;
piiParser.RULE_item = 4;
piiParser.RULE_check = 5;

class PiiContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = piiParser.RULE_pii;
    }

	item() {
	    return this.getTypedRuleContext(ItemContext,0);
	};

	check() {
	    return this.getTypedRuleContext(CheckContext,0);
	};

	EOF() {
	    return this.getToken(piiParser.EOF, 0);
	};

	issn() {
	    return this.getTypedRuleContext(IssnContext,0);
	};

	isbn() {
	    return this.getTypedRuleContext(IsbnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof piiListener ) {
	        listener.enterPii(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof piiListener ) {
	        listener.exitPii(this);
		}
	}


}



class IssnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = piiParser.RULE_issn;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(piiParser.DIGIT);
	    } else {
	        return this.getToken(piiParser.DIGIT, i);
	    }
	};


	year() {
	    return this.getTypedRuleContext(YearContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof piiListener ) {
	        listener.enterIssn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof piiListener ) {
	        listener.exitIssn(this);
		}
	}


}



class IsbnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = piiParser.RULE_isbn;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(piiParser.DIGIT);
	    } else {
	        return this.getToken(piiParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof piiListener ) {
	        listener.enterIsbn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof piiListener ) {
	        listener.exitIsbn(this);
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
        this.ruleIndex = piiParser.RULE_year;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(piiParser.DIGIT);
	    } else {
	        return this.getToken(piiParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof piiListener ) {
	        listener.enterYear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof piiListener ) {
	        listener.exitYear(this);
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
        this.ruleIndex = piiParser.RULE_item;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(piiParser.DIGIT);
	    } else {
	        return this.getToken(piiParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof piiListener ) {
	        listener.enterItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof piiListener ) {
	        listener.exitItem(this);
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
        this.ruleIndex = piiParser.RULE_check;
    }

	DIGIT() {
	    return this.getToken(piiParser.DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof piiListener ) {
	        listener.enterCheck(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof piiListener ) {
	        listener.exitCheck(this);
		}
	}


}




piiParser.PiiContext = PiiContext; 
piiParser.IssnContext = IssnContext; 
piiParser.IsbnContext = IsbnContext; 
piiParser.YearContext = YearContext; 
piiParser.ItemContext = ItemContext; 
piiParser.CheckContext = CheckContext; 
