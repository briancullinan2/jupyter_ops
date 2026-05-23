// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/tsv/tsv.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import tsvListener from './tsvListener.js';
const serializedATN = [4,1,4,32,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,
5,0,11,8,0,10,0,12,0,14,9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,5,2,23,8,2,10,2,
12,2,26,9,2,1,2,1,2,1,3,1,3,1,3,0,0,4,0,2,4,6,0,1,1,0,3,4,29,0,8,1,0,0,0,
2,17,1,0,0,0,4,19,1,0,0,0,6,29,1,0,0,0,8,12,3,2,1,0,9,11,3,4,2,0,10,9,1,
0,0,0,11,14,1,0,0,0,12,10,1,0,0,0,12,13,1,0,0,0,13,15,1,0,0,0,14,12,1,0,
0,0,15,16,5,0,0,1,16,1,1,0,0,0,17,18,3,4,2,0,18,3,1,0,0,0,19,24,3,6,3,0,
20,21,5,1,0,0,21,23,3,6,3,0,22,20,1,0,0,0,23,26,1,0,0,0,24,22,1,0,0,0,24,
25,1,0,0,0,25,27,1,0,0,0,26,24,1,0,0,0,27,28,5,2,0,0,28,5,1,0,0,0,29,30,
7,0,0,0,30,7,1,0,0,0,2,12,24];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class tsvParser extends antlr4.Parser {

    static grammarFileName = "tsv.g4";
    static literalNames = [ null, "'\\t'" ];
    static symbolicNames = [ null, "TAB", "EOL", "TEXT", "STRING" ];
    static ruleNames = [ "tsvFile", "hdr", "row", "field" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = tsvParser.ruleNames;
        this.literalNames = tsvParser.literalNames;
        this.symbolicNames = tsvParser.symbolicNames;
    }



	tsvFile() {
	    let localctx = new TsvFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, tsvParser.RULE_tsvFile);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 8;
	        this.hdr();
	        this.state = 12;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===4) {
	            this.state = 9;
	            this.row();
	            this.state = 14;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 15;
	        this.match(tsvParser.EOF);
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



	hdr() {
	    let localctx = new HdrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, tsvParser.RULE_hdr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.row();
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



	row() {
	    let localctx = new RowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, tsvParser.RULE_row);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.field();
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 20;
	            this.match(tsvParser.TAB);
	            this.state = 21;
	            this.field();
	            this.state = 26;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 27;
	        this.match(tsvParser.EOL);
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



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, tsvParser.RULE_field);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
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

tsvParser.EOF = antlr4.Token.EOF;
tsvParser.TAB = 1;
tsvParser.EOL = 2;
tsvParser.TEXT = 3;
tsvParser.STRING = 4;

tsvParser.RULE_tsvFile = 0;
tsvParser.RULE_hdr = 1;
tsvParser.RULE_row = 2;
tsvParser.RULE_field = 3;

class TsvFileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tsvParser.RULE_tsvFile;
    }

	hdr() {
	    return this.getTypedRuleContext(HdrContext,0);
	};

	EOF() {
	    return this.getToken(tsvParser.EOF, 0);
	};

	row = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RowContext);
	    } else {
	        return this.getTypedRuleContext(RowContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tsvListener ) {
	        listener.enterTsvFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tsvListener ) {
	        listener.exitTsvFile(this);
		}
	}


}



class HdrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tsvParser.RULE_hdr;
    }

	row() {
	    return this.getTypedRuleContext(RowContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tsvListener ) {
	        listener.enterHdr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tsvListener ) {
	        listener.exitHdr(this);
		}
	}


}



class RowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tsvParser.RULE_row;
    }

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	EOL() {
	    return this.getToken(tsvParser.EOL, 0);
	};

	TAB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tsvParser.TAB);
	    } else {
	        return this.getToken(tsvParser.TAB, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tsvListener ) {
	        listener.enterRow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tsvListener ) {
	        listener.exitRow(this);
		}
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tsvParser.RULE_field;
    }

	TEXT() {
	    return this.getToken(tsvParser.TEXT, 0);
	};

	STRING() {
	    return this.getToken(tsvParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tsvListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tsvListener ) {
	        listener.exitField(this);
		}
	}


}




tsvParser.TsvFileContext = TsvFileContext; 
tsvParser.HdrContext = HdrContext; 
tsvParser.RowContext = RowContext; 
tsvParser.FieldContext = FieldContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
