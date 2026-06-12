// Generated from ./quake3/skin/Q3SkinParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import Q3SkinParserListener from './Q3SkinParserListener.js';
const serializedATN = [4,1,9,30,2,0,7,0,2,1,7,1,1,0,5,0,6,8,0,10,0,12,0,
9,9,0,1,0,1,0,1,1,1,1,1,1,3,1,16,8,1,1,1,4,1,19,8,1,11,1,12,1,20,1,1,4,1,
24,8,1,11,1,12,1,25,3,1,28,8,1,1,1,0,0,2,0,2,0,0,32,0,7,1,0,0,0,2,27,1,0,
0,0,4,6,3,2,1,0,5,4,1,0,0,0,6,9,1,0,0,0,7,5,1,0,0,0,7,8,1,0,0,0,8,10,1,0,
0,0,9,7,1,0,0,0,10,11,5,0,0,1,11,1,1,0,0,0,12,13,5,4,0,0,13,15,5,1,0,0,14,
16,5,5,0,0,15,14,1,0,0,0,15,16,1,0,0,0,16,18,1,0,0,0,17,19,5,2,0,0,18,17,
1,0,0,0,19,20,1,0,0,0,20,18,1,0,0,0,20,21,1,0,0,0,21,28,1,0,0,0,22,24,5,
2,0,0,23,22,1,0,0,0,24,25,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,28,1,0,
0,0,27,12,1,0,0,0,27,23,1,0,0,0,28,3,1,0,0,0,5,7,15,20,25,27];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class Q3SkinParser extends antlr4.Parser {

    static grammarFileName = "Q3SkinParser.g4";
    static literalNames = [ null, "','" ];
    static symbolicNames = [ null, "COMMA", "NEWLINE", "PATH_CHAR", "SURFACE_ID", 
                             "ASSET_PATH", "COMMENT", "LINE_COMMENT_SL", 
                             "LINE_COMMENT_BS", "WS" ];
    static ruleNames = [ "skinFile", "skinLine" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Q3SkinParser.ruleNames;
        this.literalNames = Q3SkinParser.literalNames;
        this.symbolicNames = Q3SkinParser.symbolicNames;
    }



	skinFile() {
	    let localctx = new SkinFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Q3SkinParser.RULE_skinFile);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2 || _la===4) {
	            this.state = 4;
	            this.skinLine();
	            this.state = 9;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 10;
	        this.match(Q3SkinParser.EOF);
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



	skinLine() {
	    let localctx = new SkinLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Q3SkinParser.RULE_skinLine);
	    var _la = 0;
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 12;
	            this.match(Q3SkinParser.SURFACE_ID);
	            this.state = 13;
	            this.match(Q3SkinParser.COMMA);
	            this.state = 15;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 14;
	                this.match(Q3SkinParser.ASSET_PATH);
	            }

	            this.state = 18; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 17;
	            		this.match(Q3SkinParser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 20; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 23; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 22;
	            		this.match(Q3SkinParser.NEWLINE);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 25; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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

Q3SkinParser.EOF = antlr4.Token.EOF;
Q3SkinParser.COMMA = 1;
Q3SkinParser.NEWLINE = 2;
Q3SkinParser.PATH_CHAR = 3;
Q3SkinParser.SURFACE_ID = 4;
Q3SkinParser.ASSET_PATH = 5;
Q3SkinParser.COMMENT = 6;
Q3SkinParser.LINE_COMMENT_SL = 7;
Q3SkinParser.LINE_COMMENT_BS = 8;
Q3SkinParser.WS = 9;

Q3SkinParser.RULE_skinFile = 0;
Q3SkinParser.RULE_skinLine = 1;

class SkinFileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3SkinParser.RULE_skinFile;
    }

	EOF() {
	    return this.getToken(Q3SkinParser.EOF, 0);
	};

	skinLine = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SkinLineContext);
	    } else {
	        return this.getTypedRuleContext(SkinLineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3SkinParserListener ) {
	        listener.enterSkinFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3SkinParserListener ) {
	        listener.exitSkinFile(this);
		}
	}


}



class SkinLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3SkinParser.RULE_skinLine;
    }

	SURFACE_ID() {
	    return this.getToken(Q3SkinParser.SURFACE_ID, 0);
	};

	COMMA() {
	    return this.getToken(Q3SkinParser.COMMA, 0);
	};

	ASSET_PATH() {
	    return this.getToken(Q3SkinParser.ASSET_PATH, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Q3SkinParser.NEWLINE);
	    } else {
	        return this.getToken(Q3SkinParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Q3SkinParserListener ) {
	        listener.enterSkinLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3SkinParserListener ) {
	        listener.exitSkinLine(this);
		}
	}


}




Q3SkinParser.SkinFileContext = SkinFileContext; 
Q3SkinParser.SkinLineContext = SkinLineContext; 
