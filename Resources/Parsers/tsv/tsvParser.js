// Generated from ./tsv/tsv.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import tsvListener from './tsvListener.js';
const serializedATN = [4,1,4,30,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,
5,0,11,8,0,10,0,12,0,14,9,0,1,1,1,1,1,2,1,2,1,2,5,2,21,8,2,10,2,12,2,24,
9,2,1,2,1,2,1,3,1,3,1,3,0,0,4,0,2,4,6,0,1,1,0,3,4,27,0,8,1,0,0,0,2,15,1,
0,0,0,4,17,1,0,0,0,6,27,1,0,0,0,8,12,3,2,1,0,9,11,3,4,2,0,10,9,1,0,0,0,11,
14,1,0,0,0,12,10,1,0,0,0,12,13,1,0,0,0,13,1,1,0,0,0,14,12,1,0,0,0,15,16,
3,4,2,0,16,3,1,0,0,0,17,22,3,6,3,0,18,19,5,1,0,0,19,21,3,6,3,0,20,18,1,0,
0,0,21,24,1,0,0,0,22,20,1,0,0,0,22,23,1,0,0,0,23,25,1,0,0,0,24,22,1,0,0,
0,25,26,5,2,0,0,26,5,1,0,0,0,27,28,7,0,0,0,28,7,1,0,0,0,2,12,22];


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

    get atn() {
        return atn;
    }



	tsvFile() {
	    let localctx = new TsvFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, tsvParser.RULE_tsvFile);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 8;
	        this.hdr();
	        this.state = 12;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tsvParser.TEXT || _la===tsvParser.STRING) {
	            this.state = 9;
	            this.row();
	            this.state = 14;
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



	hdr() {
	    let localctx = new HdrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, tsvParser.RULE_hdr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.field();
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tsvParser.TAB) {
	            this.state = 18;
	            this.match(tsvParser.TAB);
	            this.state = 19;
	            this.field();
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 25;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        _la = this._input.LA(1);
	        if(!(_la===tsvParser.TEXT || _la===tsvParser.STRING)) {
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
