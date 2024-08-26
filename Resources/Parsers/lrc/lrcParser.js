// Generated from Resources/Parsers/lrc/lrcParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import lrcParserListener from './lrcParserListener.js';
const serializedATN = [4,1,7,18,2,0,7,0,2,1,7,1,1,0,5,0,6,8,0,10,0,12,0,
9,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,2,0,2,0,0,16,0,7,1,0,0,0,2,12,
1,0,0,0,4,6,3,2,1,0,5,4,1,0,0,0,6,9,1,0,0,0,7,5,1,0,0,0,7,8,1,0,0,0,8,10,
1,0,0,0,9,7,1,0,0,0,10,11,5,0,0,1,11,1,1,0,0,0,12,13,5,1,0,0,13,14,5,3,0,
0,14,15,5,2,0,0,15,16,5,6,0,0,16,3,1,0,0,0,1,7];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class lrcParser extends antlr4.Parser {

    static grammarFileName = "lrcParser.g4";
    static literalNames = [ null, "'['", "']'" ];
    static symbolicNames = [ null, "LB", "RB", "TIMESTAMP", "NUM", "WS", 
                             "TEXT", "EOL" ];
    static ruleNames = [ "lrc", "line" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = lrcParser.ruleNames;
        this.literalNames = lrcParser.literalNames;
        this.symbolicNames = lrcParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	lrc() {
	    let localctx = new LrcContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, lrcParser.RULE_lrc);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===lrcParser.LB) {
	            this.state = 4;
	            this.line();
	            this.state = 9;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 10;
	        this.match(lrcParser.EOF);
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, lrcParser.RULE_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.match(lrcParser.LB);
	        this.state = 13;
	        this.match(lrcParser.TIMESTAMP);
	        this.state = 14;
	        this.match(lrcParser.RB);
	        this.state = 15;
	        this.match(lrcParser.TEXT);
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

lrcParser.EOF = antlr4.Token.EOF;
lrcParser.LB = 1;
lrcParser.RB = 2;
lrcParser.TIMESTAMP = 3;
lrcParser.NUM = 4;
lrcParser.WS = 5;
lrcParser.TEXT = 6;
lrcParser.EOL = 7;

lrcParser.RULE_lrc = 0;
lrcParser.RULE_line = 1;

class LrcContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lrcParser.RULE_lrc;
    }

	EOF() {
	    return this.getToken(lrcParser.EOF, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof lrcParserListener ) {
	        listener.enterLrc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lrcParserListener ) {
	        listener.exitLrc(this);
		}
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lrcParser.RULE_line;
    }

	LB() {
	    return this.getToken(lrcParser.LB, 0);
	};

	TIMESTAMP() {
	    return this.getToken(lrcParser.TIMESTAMP, 0);
	};

	RB() {
	    return this.getToken(lrcParser.RB, 0);
	};

	TEXT() {
	    return this.getToken(lrcParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lrcParserListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lrcParserListener ) {
	        listener.exitLine(this);
		}
	}


}




lrcParser.LrcContext = LrcContext; 
lrcParser.LineContext = LineContext; 
