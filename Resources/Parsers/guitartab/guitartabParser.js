// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/guitartab/guitartab.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import guitartabListener from './guitartabListener.js';
const serializedATN = [4,1,18,31,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,4,0,
10,8,0,11,0,12,0,11,1,0,1,0,1,1,1,1,1,1,1,1,4,1,20,8,1,11,1,12,1,21,1,2,
4,2,25,8,2,11,2,12,2,26,1,3,1,3,1,3,0,0,4,0,2,4,6,0,2,1,0,15,16,1,0,1,14,
29,0,9,1,0,0,0,2,15,1,0,0,0,4,24,1,0,0,0,6,28,1,0,0,0,8,10,3,2,1,0,9,8,1,
0,0,0,10,11,1,0,0,0,11,9,1,0,0,0,11,12,1,0,0,0,12,13,1,0,0,0,13,14,5,0,0,
1,14,1,1,0,0,0,15,19,3,6,3,0,16,17,3,4,2,0,17,18,5,17,0,0,18,20,1,0,0,0,
19,16,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,3,1,0,0,0,23,
25,7,0,0,0,24,23,1,0,0,0,25,26,1,0,0,0,26,24,1,0,0,0,26,27,1,0,0,0,27,5,
1,0,0,0,28,29,7,1,0,0,29,7,1,0,0,0,3,11,21,26];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class guitartabParser extends antlr4.Parser {

    static grammarFileName = "guitartab.g4";
    static literalNames = [ null, "'A'", "'B'", "'C'", "'D'", "'E'", "'F'", 
                            "'G'", "'a'", "'b'", "'c'", "'d'", "'e'", "'f'", 
                            "'g'", null, "'-'", "'|'" ];
    static symbolicNames = [ null, "BA", "BB", "BC", "BD", "BE", "BF", "BG", 
                             "LA", "LB", "LC", "LD", "LE", "LF", "LG", "FINGER", 
                             "BARLNE", "FRET", "WHITESPACE" ];
    static ruleNames = [ "tab", "string", "position", "note" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = guitartabParser.ruleNames;
        this.literalNames = guitartabParser.literalNames;
        this.symbolicNames = guitartabParser.symbolicNames;
    }



	tab() {
	    let localctx = new TabContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, guitartabParser.RULE_tab);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 9; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 8;
	            this.string();
	            this.state = 11; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 32766) !== 0));
	        this.state = 13;
	        this.match(guitartabParser.EOF);
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



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, guitartabParser.RULE_string);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this.note();
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.position();
	            this.state = 17;
	            this.match(guitartabParser.FRET);
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15 || _la===16);
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



	position() {
	    let localctx = new PositionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, guitartabParser.RULE_position);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 23;
	            _la = this._input.LA(1);
	            if(!(_la===15 || _la===16)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 26; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===15 || _la===16);
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



	note() {
	    let localctx = new NoteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, guitartabParser.RULE_note);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 32766) !== 0))) {
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

guitartabParser.EOF = antlr4.Token.EOF;
guitartabParser.BA = 1;
guitartabParser.BB = 2;
guitartabParser.BC = 3;
guitartabParser.BD = 4;
guitartabParser.BE = 5;
guitartabParser.BF = 6;
guitartabParser.BG = 7;
guitartabParser.LA = 8;
guitartabParser.LB = 9;
guitartabParser.LC = 10;
guitartabParser.LD = 11;
guitartabParser.LE = 12;
guitartabParser.LF = 13;
guitartabParser.LG = 14;
guitartabParser.FINGER = 15;
guitartabParser.BARLNE = 16;
guitartabParser.FRET = 17;
guitartabParser.WHITESPACE = 18;

guitartabParser.RULE_tab = 0;
guitartabParser.RULE_string = 1;
guitartabParser.RULE_position = 2;
guitartabParser.RULE_note = 3;

class TabContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guitartabParser.RULE_tab;
    }

	EOF() {
	    return this.getToken(guitartabParser.EOF, 0);
	};

	string = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringContext);
	    } else {
	        return this.getTypedRuleContext(StringContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof guitartabListener ) {
	        listener.enterTab(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guitartabListener ) {
	        listener.exitTab(this);
		}
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guitartabParser.RULE_string;
    }

	note() {
	    return this.getTypedRuleContext(NoteContext,0);
	};

	position = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PositionContext);
	    } else {
	        return this.getTypedRuleContext(PositionContext,i);
	    }
	};

	FRET = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(guitartabParser.FRET);
	    } else {
	        return this.getToken(guitartabParser.FRET, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof guitartabListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guitartabListener ) {
	        listener.exitString(this);
		}
	}


}



class PositionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guitartabParser.RULE_position;
    }

	FINGER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(guitartabParser.FINGER);
	    } else {
	        return this.getToken(guitartabParser.FINGER, i);
	    }
	};


	BARLNE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(guitartabParser.BARLNE);
	    } else {
	        return this.getToken(guitartabParser.BARLNE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof guitartabListener ) {
	        listener.enterPosition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guitartabListener ) {
	        listener.exitPosition(this);
		}
	}


}



class NoteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = guitartabParser.RULE_note;
    }

	BA() {
	    return this.getToken(guitartabParser.BA, 0);
	};

	BB() {
	    return this.getToken(guitartabParser.BB, 0);
	};

	BC() {
	    return this.getToken(guitartabParser.BC, 0);
	};

	BD() {
	    return this.getToken(guitartabParser.BD, 0);
	};

	BE() {
	    return this.getToken(guitartabParser.BE, 0);
	};

	BF() {
	    return this.getToken(guitartabParser.BF, 0);
	};

	BG() {
	    return this.getToken(guitartabParser.BG, 0);
	};

	LA() {
	    return this.getToken(guitartabParser.LA, 0);
	};

	LB() {
	    return this.getToken(guitartabParser.LB, 0);
	};

	LC() {
	    return this.getToken(guitartabParser.LC, 0);
	};

	LD() {
	    return this.getToken(guitartabParser.LD, 0);
	};

	LE() {
	    return this.getToken(guitartabParser.LE, 0);
	};

	LF() {
	    return this.getToken(guitartabParser.LF, 0);
	};

	LG() {
	    return this.getToken(guitartabParser.LG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof guitartabListener ) {
	        listener.enterNote(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof guitartabListener ) {
	        listener.exitNote(this);
		}
	}


}




guitartabParser.TabContext = TabContext; 
guitartabParser.StringContext = StringContext; 
guitartabParser.PositionContext = PositionContext; 
guitartabParser.NoteContext = NoteContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
