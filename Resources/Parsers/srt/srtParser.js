// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/srt/srt.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import srtListener from './srtListener.js';
const serializedATN = [4,1,7,33,2,0,7,0,2,1,7,1,2,2,7,2,1,0,1,0,1,0,1,1,
1,1,5,1,12,8,1,10,1,12,1,15,9,1,4,1,17,8,1,11,1,12,1,18,1,2,1,2,1,2,1,2,
1,2,1,2,3,2,27,8,2,4,2,29,8,2,11,2,12,2,30,1,2,0,0,3,0,2,4,0,0,33,0,6,1,
0,0,0,2,16,1,0,0,0,4,20,1,0,0,0,6,7,3,2,1,0,7,8,5,0,0,1,8,1,1,0,0,0,9,13,
3,4,2,0,10,12,5,1,0,0,11,10,1,0,0,0,12,15,1,0,0,0,13,11,1,0,0,0,13,14,1,
0,0,0,14,17,1,0,0,0,15,13,1,0,0,0,16,9,1,0,0,0,17,18,1,0,0,0,18,16,1,0,0,
0,18,19,1,0,0,0,19,3,1,0,0,0,20,21,5,2,0,0,21,22,5,1,0,0,22,23,5,6,0,0,23,
28,5,1,0,0,24,26,5,7,0,0,25,27,5,1,0,0,26,25,1,0,0,0,26,27,1,0,0,0,27,29,
1,0,0,0,28,24,1,0,0,0,29,30,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,5,1,0,
0,0,4,13,18,26,30];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class srtParser extends antlr4.Parser {

    static grammarFileName = "srt.g4";
    static literalNames = [ null, null, null, "':'", "','", "' --> '" ];
    static symbolicNames = [ null, "NEWLINE", "NUMBER", "COLON", "COMMA", 
                             "ARROW", "TIMESTAMP", "TEXT" ];
    static ruleNames = [ "file_", "subtitles", "subtitle" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = srtParser.ruleNames;
        this.literalNames = srtParser.literalNames;
        this.symbolicNames = srtParser.symbolicNames;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, srtParser.RULE_file_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 6;
	        this.subtitles();
	        this.state = 7;
	        this.match(srtParser.EOF);
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



	subtitles() {
	    let localctx = new SubtitlesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, srtParser.RULE_subtitles);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 9;
	            this.subtitle();
	            this.state = 13;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===1) {
	                this.state = 10;
	                this.match(srtParser.NEWLINE);
	                this.state = 15;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 18; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2);
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



	subtitle() {
	    let localctx = new SubtitleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, srtParser.RULE_subtitle);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(srtParser.NUMBER);
	        this.state = 21;
	        this.match(srtParser.NEWLINE);
	        this.state = 22;
	        this.match(srtParser.TIMESTAMP);
	        this.state = 23;
	        this.match(srtParser.NEWLINE);
	        this.state = 28; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.match(srtParser.TEXT);
	            this.state = 26;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            if(la_===1) {
	                this.state = 25;
	                this.match(srtParser.NEWLINE);

	            }
	            this.state = 30; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===7);
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

srtParser.EOF = antlr4.Token.EOF;
srtParser.NEWLINE = 1;
srtParser.NUMBER = 2;
srtParser.COLON = 3;
srtParser.COMMA = 4;
srtParser.ARROW = 5;
srtParser.TIMESTAMP = 6;
srtParser.TEXT = 7;

srtParser.RULE_file_ = 0;
srtParser.RULE_subtitles = 1;
srtParser.RULE_subtitle = 2;

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
        this.ruleIndex = srtParser.RULE_file_;
    }

	subtitles() {
	    return this.getTypedRuleContext(SubtitlesContext,0);
	};

	EOF() {
	    return this.getToken(srtParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof srtListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof srtListener ) {
	        listener.exitFile_(this);
		}
	}


}



class SubtitlesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = srtParser.RULE_subtitles;
    }

	subtitle = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubtitleContext);
	    } else {
	        return this.getTypedRuleContext(SubtitleContext,i);
	    }
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(srtParser.NEWLINE);
	    } else {
	        return this.getToken(srtParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof srtListener ) {
	        listener.enterSubtitles(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof srtListener ) {
	        listener.exitSubtitles(this);
		}
	}


}



class SubtitleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = srtParser.RULE_subtitle;
    }

	NUMBER() {
	    return this.getToken(srtParser.NUMBER, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(srtParser.NEWLINE);
	    } else {
	        return this.getToken(srtParser.NEWLINE, i);
	    }
	};


	TIMESTAMP() {
	    return this.getToken(srtParser.TIMESTAMP, 0);
	};

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(srtParser.TEXT);
	    } else {
	        return this.getToken(srtParser.TEXT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof srtListener ) {
	        listener.enterSubtitle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof srtListener ) {
	        listener.exitSubtitle(this);
		}
	}


}




srtParser.File_Context = File_Context; 
srtParser.SubtitlesContext = SubtitlesContext; 
srtParser.SubtitleContext = SubtitleContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
