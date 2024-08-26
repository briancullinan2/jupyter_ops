// Generated from Resources/Parsers/upnp/Upnp.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import UpnpListener from './UpnpListener.js';
const serializedATN = [4,1,17,103,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,1,0,1,0,3,0,13,8,0,1,1,1,1,1,1,1,1,5,1,19,8,1,10,1,12,1,22,9,1,1,1,1,1,
5,1,26,8,1,10,1,12,1,29,9,1,1,1,1,1,3,1,33,8,1,1,1,1,1,4,1,37,8,1,11,1,12,
1,38,1,1,1,1,4,1,43,8,1,11,1,12,1,44,1,1,5,1,48,8,1,10,1,12,1,51,9,1,1,2,
1,2,4,2,55,8,2,11,2,12,2,56,1,2,1,2,4,2,61,8,2,11,2,12,2,62,1,2,1,2,1,2,
4,2,68,8,2,11,2,12,2,69,1,2,1,2,4,2,74,8,2,11,2,12,2,75,1,2,3,2,79,8,2,1,
3,1,3,1,3,1,3,1,4,5,4,86,8,4,10,4,12,4,89,9,4,1,4,5,4,92,8,4,10,4,12,4,95,
9,4,1,4,5,4,98,8,4,10,4,12,4,101,9,4,1,4,0,1,2,5,0,2,4,6,8,0,0,112,0,12,
1,0,0,0,2,32,1,0,0,0,4,78,1,0,0,0,6,80,1,0,0,0,8,87,1,0,0,0,10,13,3,2,1,
0,11,13,5,16,0,0,12,10,1,0,0,0,12,11,1,0,0,0,13,1,1,0,0,0,14,15,6,1,-1,0,
15,33,3,4,2,0,16,20,5,1,0,0,17,19,5,11,0,0,18,17,1,0,0,0,19,22,1,0,0,0,20,
18,1,0,0,0,20,21,1,0,0,0,21,23,1,0,0,0,22,20,1,0,0,0,23,27,3,2,1,0,24,26,
5,11,0,0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,30,1,
0,0,0,29,27,1,0,0,0,30,31,5,2,0,0,31,33,1,0,0,0,32,14,1,0,0,0,32,16,1,0,
0,0,33,49,1,0,0,0,34,36,10,2,0,0,35,37,5,11,0,0,36,35,1,0,0,0,37,38,1,0,
0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,40,1,0,0,0,40,42,5,5,0,0,41,43,5,11,0,
0,42,41,1,0,0,0,43,44,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,46,1,0,0,0,
46,48,3,2,1,3,47,34,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,
3,1,0,0,0,51,49,1,0,0,0,52,54,5,12,0,0,53,55,5,11,0,0,54,53,1,0,0,0,55,56,
1,0,0,0,56,54,1,0,0,0,56,57,1,0,0,0,57,58,1,0,0,0,58,60,5,6,0,0,59,61,5,
11,0,0,60,59,1,0,0,0,61,62,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,64,1,0,
0,0,64,79,3,6,3,0,65,67,5,12,0,0,66,68,5,11,0,0,67,66,1,0,0,0,68,69,1,0,
0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,71,1,0,0,0,71,73,5,9,0,0,72,74,5,11,0,
0,73,72,1,0,0,0,74,75,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,77,1,0,0,0,
77,79,5,10,0,0,78,52,1,0,0,0,78,65,1,0,0,0,79,5,1,0,0,0,80,81,5,15,0,0,81,
82,3,8,4,0,82,83,5,15,0,0,83,7,1,0,0,0,84,86,5,17,0,0,85,84,1,0,0,0,86,89,
1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,93,1,0,0,0,89,87,1,0,0,0,90,92,5,
11,0,0,91,90,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,99,1,0,
0,0,95,93,1,0,0,0,96,98,5,17,0,0,97,96,1,0,0,0,98,101,1,0,0,0,99,97,1,0,
0,0,99,100,1,0,0,0,100,9,1,0,0,0,101,99,1,0,0,0,15,12,20,27,32,38,44,49,
56,62,69,75,78,87,93,99];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class UpnpParser extends antlr4.Parser {

    static grammarFileName = "Upnp.g4";
    static literalNames = [ null, "'('", "')'", null, null, null, null, 
                            null, null, "'exists'", null, null, null, "'\\t'", 
                            "' '", "'\"'", "'*'" ];
    static symbolicNames = [ null, null, null, "NUMBER", "WHITESPACE", "LOGOP", 
                             "BINOP", "RELOP", "STRINGOP", "EXISTSOP", "BOOLVAL", 
                             "WCHAR", "PROPERTY", "HTAB", "SPACE", "DQUOTE", 
                             "ASTERISK", "STRING_LITERAL" ];
    static ruleNames = [ "searchCrit", "searchExp", "relExp", "quotedVal", 
                         "escapedQuote" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = UpnpParser.ruleNames;
        this.literalNames = UpnpParser.literalNames;
        this.symbolicNames = UpnpParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.searchExp_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    searchExp_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	searchCrit() {
	    let localctx = new SearchCritContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, UpnpParser.RULE_searchCrit);
	    try {
	        this.state = 12;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case UpnpParser.T__0:
	        case UpnpParser.PROPERTY:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 10;
	            this.searchExp(0);
	            break;
	        case UpnpParser.ASTERISK:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 11;
	            this.match(UpnpParser.ASTERISK);
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


	searchExp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new SearchExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, UpnpParser.RULE_searchExp, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case UpnpParser.PROPERTY:
	            this.state = 15;
	            this.relExp();
	            break;
	        case UpnpParser.T__0:
	            this.state = 16;
	            this.match(UpnpParser.T__0);
	            this.state = 20;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===UpnpParser.WCHAR) {
	                this.state = 17;
	                this.match(UpnpParser.WCHAR);
	                this.state = 22;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 23;
	            this.searchExp(0);
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===UpnpParser.WCHAR) {
	                this.state = 24;
	                this.match(UpnpParser.WCHAR);
	                this.state = 29;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 30;
	            this.match(UpnpParser.T__1);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 49;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new SearchExpContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, UpnpParser.RULE_searchExp);
	                this.state = 34;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 36; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 35;
	                    this.match(UpnpParser.WCHAR);
	                    this.state = 38; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===UpnpParser.WCHAR);
	                this.state = 40;
	                this.match(UpnpParser.LOGOP);
	                this.state = 42; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 41;
	                    this.match(UpnpParser.WCHAR);
	                    this.state = 44; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===UpnpParser.WCHAR);
	                this.state = 46;
	                this.searchExp(3); 
	            }
	            this.state = 51;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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



	relExp() {
	    let localctx = new RelExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, UpnpParser.RULE_relExp);
	    var _la = 0; // Token type
	    try {
	        this.state = 78;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.match(UpnpParser.PROPERTY);
	            this.state = 54; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 53;
	                this.match(UpnpParser.WCHAR);
	                this.state = 56; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===UpnpParser.WCHAR);
	            this.state = 58;
	            this.match(UpnpParser.BINOP);
	            this.state = 60; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 59;
	                this.match(UpnpParser.WCHAR);
	                this.state = 62; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===UpnpParser.WCHAR);
	            this.state = 64;
	            this.quotedVal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.match(UpnpParser.PROPERTY);
	            this.state = 67; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 66;
	                this.match(UpnpParser.WCHAR);
	                this.state = 69; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===UpnpParser.WCHAR);
	            this.state = 71;
	            this.match(UpnpParser.EXISTSOP);
	            this.state = 73; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 72;
	                this.match(UpnpParser.WCHAR);
	                this.state = 75; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===UpnpParser.WCHAR);
	            this.state = 77;
	            this.match(UpnpParser.BOOLVAL);
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



	quotedVal() {
	    let localctx = new QuotedValContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, UpnpParser.RULE_quotedVal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(UpnpParser.DQUOTE);
	        this.state = 81;
	        this.escapedQuote();
	        this.state = 82;
	        this.match(UpnpParser.DQUOTE);
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



	escapedQuote() {
	    let localctx = new EscapedQuoteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, UpnpParser.RULE_escapedQuote);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 84;
	                this.match(UpnpParser.STRING_LITERAL); 
	            }
	            this.state = 89;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	        }

	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===UpnpParser.WCHAR) {
	            this.state = 90;
	            this.match(UpnpParser.WCHAR);
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===UpnpParser.STRING_LITERAL) {
	            this.state = 96;
	            this.match(UpnpParser.STRING_LITERAL);
	            this.state = 101;
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


}

UpnpParser.EOF = antlr4.Token.EOF;
UpnpParser.T__0 = 1;
UpnpParser.T__1 = 2;
UpnpParser.NUMBER = 3;
UpnpParser.WHITESPACE = 4;
UpnpParser.LOGOP = 5;
UpnpParser.BINOP = 6;
UpnpParser.RELOP = 7;
UpnpParser.STRINGOP = 8;
UpnpParser.EXISTSOP = 9;
UpnpParser.BOOLVAL = 10;
UpnpParser.WCHAR = 11;
UpnpParser.PROPERTY = 12;
UpnpParser.HTAB = 13;
UpnpParser.SPACE = 14;
UpnpParser.DQUOTE = 15;
UpnpParser.ASTERISK = 16;
UpnpParser.STRING_LITERAL = 17;

UpnpParser.RULE_searchCrit = 0;
UpnpParser.RULE_searchExp = 1;
UpnpParser.RULE_relExp = 2;
UpnpParser.RULE_quotedVal = 3;
UpnpParser.RULE_escapedQuote = 4;

class SearchCritContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UpnpParser.RULE_searchCrit;
    }

	searchExp() {
	    return this.getTypedRuleContext(SearchExpContext,0);
	};

	ASTERISK() {
	    return this.getToken(UpnpParser.ASTERISK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UpnpListener ) {
	        listener.enterSearchCrit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UpnpListener ) {
	        listener.exitSearchCrit(this);
		}
	}


}



class SearchExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UpnpParser.RULE_searchExp;
    }

	relExp() {
	    return this.getTypedRuleContext(RelExpContext,0);
	};

	searchExp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SearchExpContext);
	    } else {
	        return this.getTypedRuleContext(SearchExpContext,i);
	    }
	};

	WCHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(UpnpParser.WCHAR);
	    } else {
	        return this.getToken(UpnpParser.WCHAR, i);
	    }
	};


	LOGOP() {
	    return this.getToken(UpnpParser.LOGOP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UpnpListener ) {
	        listener.enterSearchExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UpnpListener ) {
	        listener.exitSearchExp(this);
		}
	}


}



class RelExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UpnpParser.RULE_relExp;
    }

	PROPERTY() {
	    return this.getToken(UpnpParser.PROPERTY, 0);
	};

	BINOP() {
	    return this.getToken(UpnpParser.BINOP, 0);
	};

	quotedVal() {
	    return this.getTypedRuleContext(QuotedValContext,0);
	};

	WCHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(UpnpParser.WCHAR);
	    } else {
	        return this.getToken(UpnpParser.WCHAR, i);
	    }
	};


	EXISTSOP() {
	    return this.getToken(UpnpParser.EXISTSOP, 0);
	};

	BOOLVAL() {
	    return this.getToken(UpnpParser.BOOLVAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof UpnpListener ) {
	        listener.enterRelExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UpnpListener ) {
	        listener.exitRelExp(this);
		}
	}


}



class QuotedValContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UpnpParser.RULE_quotedVal;
    }

	DQUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(UpnpParser.DQUOTE);
	    } else {
	        return this.getToken(UpnpParser.DQUOTE, i);
	    }
	};


	escapedQuote() {
	    return this.getTypedRuleContext(EscapedQuoteContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof UpnpListener ) {
	        listener.enterQuotedVal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UpnpListener ) {
	        listener.exitQuotedVal(this);
		}
	}


}



class EscapedQuoteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = UpnpParser.RULE_escapedQuote;
    }

	STRING_LITERAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(UpnpParser.STRING_LITERAL);
	    } else {
	        return this.getToken(UpnpParser.STRING_LITERAL, i);
	    }
	};


	WCHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(UpnpParser.WCHAR);
	    } else {
	        return this.getToken(UpnpParser.WCHAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof UpnpListener ) {
	        listener.enterEscapedQuote(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof UpnpListener ) {
	        listener.exitEscapedQuote(this);
		}
	}


}




UpnpParser.SearchCritContext = SearchCritContext; 
UpnpParser.SearchExpContext = SearchExpContext; 
UpnpParser.RelExpContext = RelExpContext; 
UpnpParser.QuotedValContext = QuotedValContext; 
UpnpParser.EscapedQuoteContext = EscapedQuoteContext; 
