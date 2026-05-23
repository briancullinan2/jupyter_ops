// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/unicode/graphemes/Graphemes.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import GraphemesListener from './GraphemesListener.js';
const serializedATN = [4,1,10,42,2,0,7,0,2,1,7,1,2,2,7,2,1,0,1,0,5,0,9,8,
0,10,0,12,0,12,9,0,1,1,1,1,5,1,16,8,1,10,1,12,1,19,9,1,1,1,1,1,1,1,3,1,24,
8,1,1,1,5,1,27,8,1,10,1,12,1,30,9,1,3,1,32,8,1,1,2,5,2,35,8,2,10,2,12,2,
38,9,2,1,2,1,2,1,2,0,0,3,0,2,4,0,2,2,0,4,5,10,10,1,0,1,3,45,0,6,1,0,0,0,
2,31,1,0,0,0,4,36,1,0,0,0,6,10,7,0,0,0,7,9,7,1,0,0,8,7,1,0,0,0,9,12,1,0,
0,0,10,8,1,0,0,0,10,11,1,0,0,0,11,1,1,0,0,0,12,10,1,0,0,0,13,32,5,8,0,0,
14,16,5,6,0,0,15,14,1,0,0,0,16,19,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,
23,1,0,0,0,19,17,1,0,0,0,20,24,3,0,0,0,21,24,5,9,0,0,22,24,5,7,0,0,23,20,
1,0,0,0,23,21,1,0,0,0,23,22,1,0,0,0,24,28,1,0,0,0,25,27,7,1,0,0,26,25,1,
0,0,0,27,30,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,32,1,0,0,0,30,28,1,0,
0,0,31,13,1,0,0,0,31,17,1,0,0,0,32,3,1,0,0,0,33,35,3,2,1,0,34,33,1,0,0,0,
35,38,1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,39,1,0,0,0,38,36,1,0,0,0,39,
40,5,0,0,1,40,5,1,0,0,0,6,10,17,23,28,31,36];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GraphemesParser extends antlr4.Parser {

    static grammarFileName = "Graphemes.g4";
    static literalNames = [ null, null, "'\\u200D'" ];
    static symbolicNames = [ null, "Extend", "ZWJ", "SpacingMark", "EmojiCoreSequence", 
                             "EmojiZWJSequence", "Prepend", "NonControl", 
                             "CRLF", "HangulSyllable", "EmojiTagSequence" ];
    static ruleNames = [ "emoji_sequence", "grapheme_cluster", "graphemes" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GraphemesParser.ruleNames;
        this.literalNames = GraphemesParser.literalNames;
        this.symbolicNames = GraphemesParser.symbolicNames;
    }



	emoji_sequence() {
	    let localctx = new Emoji_sequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GraphemesParser.RULE_emoji_sequence);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 6;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1072) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 10;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 7;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 12;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
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



	grapheme_cluster() {
	    let localctx = new Grapheme_clusterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GraphemesParser.RULE_grapheme_cluster);
	    var _la = 0;
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 13;
	            this.match(GraphemesParser.CRLF);
	            break;
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 9:
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 14;
	                this.match(GraphemesParser.Prepend);
	                this.state = 19;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 23;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 4:
	            case 5:
	            case 10:
	                this.state = 20;
	                this.emoji_sequence();
	                break;
	            case 9:
	                this.state = 21;
	                this.match(GraphemesParser.HangulSyllable);
	                break;
	            case 7:
	                this.state = 22;
	                this.match(GraphemesParser.NonControl);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 28;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0)) {
	                this.state = 25;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 30;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
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



	graphemes() {
	    let localctx = new GraphemesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GraphemesParser.RULE_graphemes);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2032) !== 0)) {
	            this.state = 33;
	            this.grapheme_cluster();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 39;
	        this.match(GraphemesParser.EOF);
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

GraphemesParser.EOF = antlr4.Token.EOF;
GraphemesParser.Extend = 1;
GraphemesParser.ZWJ = 2;
GraphemesParser.SpacingMark = 3;
GraphemesParser.EmojiCoreSequence = 4;
GraphemesParser.EmojiZWJSequence = 5;
GraphemesParser.Prepend = 6;
GraphemesParser.NonControl = 7;
GraphemesParser.CRLF = 8;
GraphemesParser.HangulSyllable = 9;
GraphemesParser.EmojiTagSequence = 10;

GraphemesParser.RULE_emoji_sequence = 0;
GraphemesParser.RULE_grapheme_cluster = 1;
GraphemesParser.RULE_graphemes = 2;

class Emoji_sequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphemesParser.RULE_emoji_sequence;
    }

	EmojiZWJSequence() {
	    return this.getToken(GraphemesParser.EmojiZWJSequence, 0);
	};

	EmojiCoreSequence() {
	    return this.getToken(GraphemesParser.EmojiCoreSequence, 0);
	};

	EmojiTagSequence() {
	    return this.getToken(GraphemesParser.EmojiTagSequence, 0);
	};

	Extend = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GraphemesParser.Extend);
	    } else {
	        return this.getToken(GraphemesParser.Extend, i);
	    }
	};


	ZWJ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GraphemesParser.ZWJ);
	    } else {
	        return this.getToken(GraphemesParser.ZWJ, i);
	    }
	};


	SpacingMark = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GraphemesParser.SpacingMark);
	    } else {
	        return this.getToken(GraphemesParser.SpacingMark, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GraphemesListener ) {
	        listener.enterEmoji_sequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphemesListener ) {
	        listener.exitEmoji_sequence(this);
		}
	}


}



class Grapheme_clusterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphemesParser.RULE_grapheme_cluster;
    }

	CRLF() {
	    return this.getToken(GraphemesParser.CRLF, 0);
	};

	emoji_sequence() {
	    return this.getTypedRuleContext(Emoji_sequenceContext,0);
	};

	HangulSyllable() {
	    return this.getToken(GraphemesParser.HangulSyllable, 0);
	};

	NonControl() {
	    return this.getToken(GraphemesParser.NonControl, 0);
	};

	Prepend = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GraphemesParser.Prepend);
	    } else {
	        return this.getToken(GraphemesParser.Prepend, i);
	    }
	};


	Extend = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GraphemesParser.Extend);
	    } else {
	        return this.getToken(GraphemesParser.Extend, i);
	    }
	};


	ZWJ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GraphemesParser.ZWJ);
	    } else {
	        return this.getToken(GraphemesParser.ZWJ, i);
	    }
	};


	SpacingMark = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GraphemesParser.SpacingMark);
	    } else {
	        return this.getToken(GraphemesParser.SpacingMark, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GraphemesListener ) {
	        listener.enterGrapheme_cluster(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphemesListener ) {
	        listener.exitGrapheme_cluster(this);
		}
	}


}



class GraphemesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphemesParser.RULE_graphemes;
    }

	EOF() {
	    return this.getToken(GraphemesParser.EOF, 0);
	};

	grapheme_cluster = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Grapheme_clusterContext);
	    } else {
	        return this.getTypedRuleContext(Grapheme_clusterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphemesListener ) {
	        listener.enterGraphemes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphemesListener ) {
	        listener.exitGraphemes(this);
		}
	}


}




GraphemesParser.Emoji_sequenceContext = Emoji_sequenceContext; 
GraphemesParser.Grapheme_clusterContext = Grapheme_clusterContext; 
GraphemesParser.GraphemesContext = GraphemesContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
