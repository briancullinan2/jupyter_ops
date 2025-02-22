// Generated from ./p/p.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import pListener from './pListener.js';
const serializedATN = [4,1,5,28,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,4,0,
10,8,0,11,0,12,0,11,1,1,1,1,3,1,16,8,1,1,2,1,2,4,2,20,8,2,11,2,12,2,21,1,
2,1,2,1,3,1,3,1,3,0,0,4,0,2,4,6,0,1,1,0,3,4,26,0,9,1,0,0,0,2,15,1,0,0,0,
4,17,1,0,0,0,6,25,1,0,0,0,8,10,3,2,1,0,9,8,1,0,0,0,10,11,1,0,0,0,11,9,1,
0,0,0,11,12,1,0,0,0,12,1,1,0,0,0,13,16,3,4,2,0,14,16,3,6,3,0,15,13,1,0,0,
0,15,14,1,0,0,0,16,3,1,0,0,0,17,19,5,1,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,
21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,23,24,5,2,0,0,24,5,
1,0,0,0,25,26,7,0,0,0,26,7,1,0,0,0,3,11,15,21];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class pParser extends antlr4.Parser {

    static grammarFileName = "p.g4";
    static literalNames = [ null, "'('", "')'", "'R'", "'\\u03BB'" ];
    static symbolicNames = [ null, null, null, "R", "L", "WS" ];
    static ruleNames = [ "prog", "symbol", "iterate", "atom" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = pParser.ruleNames;
        this.literalNames = pParser.literalNames;
        this.symbolicNames = pParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, pParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 9; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 8;
	            this.symbol();
	            this.state = 11; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pParser.T__0) | (1 << pParser.R) | (1 << pParser.L))) !== 0));
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



	symbol() {
	    let localctx = new SymbolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, pParser.RULE_symbol);
	    try {
	        this.state = 15;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case pParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 13;
	            this.iterate();
	            break;
	        case pParser.R:
	        case pParser.L:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 14;
	            this.atom();
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



	iterate() {
	    let localctx = new IterateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, pParser.RULE_iterate);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.match(pParser.T__0);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.symbol();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << pParser.T__0) | (1 << pParser.R) | (1 << pParser.L))) !== 0));
	        this.state = 23;
	        this.match(pParser.T__1);
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, pParser.RULE_atom);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        _la = this._input.LA(1);
	        if(!(_la===pParser.R || _la===pParser.L)) {
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

pParser.EOF = antlr4.Token.EOF;
pParser.T__0 = 1;
pParser.T__1 = 2;
pParser.R = 3;
pParser.L = 4;
pParser.WS = 5;

pParser.RULE_prog = 0;
pParser.RULE_symbol = 1;
pParser.RULE_iterate = 2;
pParser.RULE_atom = 3;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pParser.RULE_prog;
    }

	symbol = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SymbolContext);
	    } else {
	        return this.getTypedRuleContext(SymbolContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.exitProg(this);
		}
	}


}



class SymbolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pParser.RULE_symbol;
    }

	iterate() {
	    return this.getTypedRuleContext(IterateContext,0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.enterSymbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.exitSymbol(this);
		}
	}


}



class IterateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pParser.RULE_iterate;
    }

	symbol = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SymbolContext);
	    } else {
	        return this.getTypedRuleContext(SymbolContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.enterIterate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.exitIterate(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pParser.RULE_atom;
    }

	R() {
	    return this.getToken(pParser.R, 0);
	};

	L() {
	    return this.getToken(pParser.L, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pListener ) {
	        listener.exitAtom(this);
		}
	}


}




pParser.ProgContext = ProgContext; 
pParser.SymbolContext = SymbolContext; 
pParser.IterateContext = IterateContext; 
pParser.AtomContext = AtomContext; 
