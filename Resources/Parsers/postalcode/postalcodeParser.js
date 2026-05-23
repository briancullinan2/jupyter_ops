// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/postalcode/postalcode.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import postalcodeListener from './postalcodeListener.js';
const serializedATN = [4,1,3,11,2,0,7,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
1,0,0,0,1,0,0,0,9,0,2,1,0,0,0,2,3,5,2,0,0,3,4,5,1,0,0,4,5,5,2,0,0,5,6,5,
1,0,0,6,7,5,2,0,0,7,8,5,1,0,0,8,9,5,0,0,1,9,1,1,0,0,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class postalcodeParser extends antlr4.Parser {

    static grammarFileName = "postalcode.g4";
    static literalNames = [  ];
    static symbolicNames = [ null, "DIGIT", "LETTER", "WS" ];
    static ruleNames = [ "postalcode" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = postalcodeParser.ruleNames;
        this.literalNames = postalcodeParser.literalNames;
        this.symbolicNames = postalcodeParser.symbolicNames;
    }



	postalcode() {
	    let localctx = new PostalcodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, postalcodeParser.RULE_postalcode);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 2;
	        this.match(postalcodeParser.LETTER);
	        this.state = 3;
	        this.match(postalcodeParser.DIGIT);
	        this.state = 4;
	        this.match(postalcodeParser.LETTER);
	        this.state = 5;
	        this.match(postalcodeParser.DIGIT);
	        this.state = 6;
	        this.match(postalcodeParser.LETTER);
	        this.state = 7;
	        this.match(postalcodeParser.DIGIT);
	        this.state = 8;
	        this.match(postalcodeParser.EOF);
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

postalcodeParser.EOF = antlr4.Token.EOF;
postalcodeParser.DIGIT = 1;
postalcodeParser.LETTER = 2;
postalcodeParser.WS = 3;

postalcodeParser.RULE_postalcode = 0;

class PostalcodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = postalcodeParser.RULE_postalcode;
    }

	LETTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(postalcodeParser.LETTER);
	    } else {
	        return this.getToken(postalcodeParser.LETTER, i);
	    }
	};


	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(postalcodeParser.DIGIT);
	    } else {
	        return this.getToken(postalcodeParser.DIGIT, i);
	    }
	};


	EOF() {
	    return this.getToken(postalcodeParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof postalcodeListener ) {
	        listener.enterPostalcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof postalcodeListener ) {
	        listener.exitPostalcode(this);
		}
	}


}




postalcodeParser.PostalcodeContext = PostalcodeContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
