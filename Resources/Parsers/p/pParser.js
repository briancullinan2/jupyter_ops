// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/p/p.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import pListener from './pListener.js';
const serializedATN = [4,1,5,30,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,4,0,
10,8,0,11,0,12,0,11,1,0,1,0,1,1,1,1,3,1,18,8,1,1,2,1,2,4,2,22,8,2,11,2,12,
2,23,1,2,1,2,1,3,1,3,1,3,0,0,4,0,2,4,6,0,1,1,0,3,4,28,0,9,1,0,0,0,2,17,1,
0,0,0,4,19,1,0,0,0,6,27,1,0,0,0,8,10,3,2,1,0,9,8,1,0,0,0,10,11,1,0,0,0,11,
9,1,0,0,0,11,12,1,0,0,0,12,13,1,0,0,0,13,14,5,0,0,1,14,1,1,0,0,0,15,18,3,
4,2,0,16,18,3,6,3,0,17,15,1,0,0,0,17,16,1,0,0,0,18,3,1,0,0,0,19,21,5,1,0,
0,20,22,3,2,1,0,21,20,1,0,0,0,22,23,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,
24,25,1,0,0,0,25,26,5,2,0,0,26,5,1,0,0,0,27,28,7,0,0,0,28,7,1,0,0,0,3,11,
17,23];


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



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, pParser.RULE_prog);
	    var _la = 0;
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
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 26) !== 0));
	        this.state = 13;
	        this.match(pParser.EOF);
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
	        this.state = 17;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 15;
	            this.iterate();
	            break;
	        case 3:
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 16;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.match(pParser.T__0);
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.symbol();
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 26) !== 0));
	        this.state = 25;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
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

	EOF() {
	    return this.getToken(pParser.EOF, 0);
	};

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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
