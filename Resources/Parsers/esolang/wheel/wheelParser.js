// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/esolang/wheel/wheel.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import wheelListener from './wheelListener.js';
const serializedATN = [4,1,4,17,2,0,7,0,2,1,7,1,1,0,5,0,6,8,0,10,0,12,0,
9,9,0,1,0,1,0,1,1,1,1,3,1,15,8,1,1,1,0,0,2,0,2,0,0,16,0,7,1,0,0,0,2,12,1,
0,0,0,4,6,3,2,1,0,5,4,1,0,0,0,6,9,1,0,0,0,7,5,1,0,0,0,7,8,1,0,0,0,8,10,1,
0,0,0,9,7,1,0,0,0,10,11,5,0,0,1,11,1,1,0,0,0,12,14,5,3,0,0,13,15,5,1,0,0,
14,13,1,0,0,0,14,15,1,0,0,0,15,3,1,0,0,0,2,7,14];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class wheelParser extends antlr4.Parser {

    static grammarFileName = "wheel.g4";
    static literalNames = [  ];
    static symbolicNames = [ null, "VALUE", "DIGIT", "SYMBOL", "WS" ];
    static ruleNames = [ "file_", "codon" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = wheelParser.ruleNames;
        this.literalNames = wheelParser.literalNames;
        this.symbolicNames = wheelParser.symbolicNames;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, wheelParser.RULE_file_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 4;
	            this.codon();
	            this.state = 9;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 10;
	        this.match(wheelParser.EOF);
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



	codon() {
	    let localctx = new CodonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, wheelParser.RULE_codon);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.match(wheelParser.SYMBOL);
	        this.state = 14;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 13;
	            this.match(wheelParser.VALUE);
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

wheelParser.EOF = antlr4.Token.EOF;
wheelParser.VALUE = 1;
wheelParser.DIGIT = 2;
wheelParser.SYMBOL = 3;
wheelParser.WS = 4;

wheelParser.RULE_file_ = 0;
wheelParser.RULE_codon = 1;

class File_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheelParser.RULE_file_;
    }

	EOF() {
	    return this.getToken(wheelParser.EOF, 0);
	};

	codon = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CodonContext);
	    } else {
	        return this.getTypedRuleContext(CodonContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof wheelListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheelListener ) {
	        listener.exitFile_(this);
		}
	}


}



class CodonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = wheelParser.RULE_codon;
    }

	SYMBOL() {
	    return this.getToken(wheelParser.SYMBOL, 0);
	};

	VALUE() {
	    return this.getToken(wheelParser.VALUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof wheelListener ) {
	        listener.enterCodon(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof wheelListener ) {
	        listener.exitCodon(this);
		}
	}


}




wheelParser.File_Context = File_Context; 
wheelParser.CodonContext = CodonContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
