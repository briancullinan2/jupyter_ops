// Generated from ./bcl/bcl.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import bclListener from './bclListener.js';
const serializedATN = [4,1,4,21,2,0,7,0,2,1,7,1,1,0,5,0,6,8,0,10,0,12,0,
9,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,19,8,1,1,1,0,0,2,0,2,0,0,21,0,
7,1,0,0,0,2,18,1,0,0,0,4,6,3,2,1,0,5,4,1,0,0,0,6,9,1,0,0,0,7,5,1,0,0,0,7,
8,1,0,0,0,8,10,1,0,0,0,9,7,1,0,0,0,10,11,5,0,0,1,11,1,1,0,0,0,12,19,5,1,
0,0,13,19,5,2,0,0,14,15,5,3,0,0,15,16,3,2,1,0,16,17,3,2,1,0,17,19,1,0,0,
0,18,12,1,0,0,0,18,13,1,0,0,0,18,14,1,0,0,0,19,3,1,0,0,0,2,7,18];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class bclParser extends antlr4.Parser {

    static grammarFileName = "bcl.g4";
    static literalNames = [ null, "'00'", "'01'", "'1'" ];
    static symbolicNames = [ null, null, null, null, "WS" ];
    static ruleNames = [ "bcl", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = bclParser.ruleNames;
        this.literalNames = bclParser.literalNames;
        this.symbolicNames = bclParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	bcl() {
	    let localctx = new BclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, bclParser.RULE_bcl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << bclParser.T__0) | (1 << bclParser.T__1) | (1 << bclParser.T__2))) !== 0)) {
	            this.state = 4;
	            this.term();
	            this.state = 9;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 10;
	        this.match(bclParser.EOF);
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, bclParser.RULE_term);
	    try {
	        this.state = 18;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case bclParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 12;
	            this.match(bclParser.T__0);
	            break;
	        case bclParser.T__1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 13;
	            this.match(bclParser.T__1);
	            break;
	        case bclParser.T__2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 14;
	            this.match(bclParser.T__2);
	            this.state = 15;
	            this.term();
	            this.state = 16;
	            this.term();
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


}

bclParser.EOF = antlr4.Token.EOF;
bclParser.T__0 = 1;
bclParser.T__1 = 2;
bclParser.T__2 = 3;
bclParser.WS = 4;

bclParser.RULE_bcl = 0;
bclParser.RULE_term = 1;

class BclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bclParser.RULE_bcl;
    }

	EOF() {
	    return this.getToken(bclParser.EOF, 0);
	};

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bclListener ) {
	        listener.enterBcl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bclListener ) {
	        listener.exitBcl(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bclParser.RULE_term;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bclListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bclListener ) {
	        listener.exitTerm(this);
		}
	}


}




bclParser.BclContext = BclContext; 
bclParser.TermContext = TermContext; 
