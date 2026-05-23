// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/vba/vba_like/vba_like.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import vba_likeListener from './vba_likeListener.js';
const serializedATN = [4,1,8,75,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,
1,1,1,1,1,1,3,1,30,8,1,1,2,1,2,1,3,1,3,1,4,1,4,3,4,38,8,4,1,4,3,4,41,8,4,
1,4,1,4,1,5,1,5,5,5,47,8,5,10,5,12,5,50,9,5,1,5,3,5,53,8,5,1,5,4,5,56,8,
5,11,5,12,5,57,1,5,3,5,61,8,5,3,5,63,8,5,1,6,1,6,3,6,67,8,6,1,7,1,7,1,8,
1,8,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,3,2,0,1,2,5,5,1,0,6,8,2,0,
3,3,5,8,76,0,21,1,0,0,0,2,29,1,0,0,0,4,31,1,0,0,0,6,33,1,0,0,0,8,35,1,0,
0,0,10,62,1,0,0,0,12,66,1,0,0,0,14,68,1,0,0,0,16,70,1,0,0,0,18,20,3,2,1,
0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,
23,21,1,0,0,0,24,25,5,0,0,1,25,1,1,0,0,0,26,30,3,4,2,0,27,30,3,8,4,0,28,
30,3,6,3,0,29,26,1,0,0,0,29,27,1,0,0,0,29,28,1,0,0,0,30,3,1,0,0,0,31,32,
7,0,0,0,32,5,1,0,0,0,33,34,7,1,0,0,34,7,1,0,0,0,35,37,5,3,0,0,36,38,5,4,
0,0,37,36,1,0,0,0,37,38,1,0,0,0,38,40,1,0,0,0,39,41,3,10,5,0,40,39,1,0,0,
0,40,41,1,0,0,0,41,42,1,0,0,0,42,43,5,2,0,0,43,9,1,0,0,0,44,48,5,1,0,0,45,
47,3,12,6,0,46,45,1,0,0,0,47,50,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,52,
1,0,0,0,50,48,1,0,0,0,51,53,5,1,0,0,52,51,1,0,0,0,52,53,1,0,0,0,53,63,1,
0,0,0,54,56,3,12,6,0,55,54,1,0,0,0,56,57,1,0,0,0,57,55,1,0,0,0,57,58,1,0,
0,0,58,60,1,0,0,0,59,61,5,1,0,0,60,59,1,0,0,0,60,61,1,0,0,0,61,63,1,0,0,
0,62,44,1,0,0,0,62,55,1,0,0,0,63,11,1,0,0,0,64,67,3,14,7,0,65,67,3,16,8,
0,66,64,1,0,0,0,66,65,1,0,0,0,67,13,1,0,0,0,68,69,7,2,0,0,69,15,1,0,0,0,
70,71,3,14,7,0,71,72,5,1,0,0,72,73,3,14,7,0,73,17,1,0,0,0,10,21,29,37,40,
48,52,57,60,62,66];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class vba_likeParser extends antlr4.Parser {

    static grammarFileName = "vba_like.g4";
    static literalNames = [ null, "'-'", "']'", "'['", "'!'", null, "'?'", 
                            "'*'", "'#'" ];
    static symbolicNames = [ null, null, null, null, null, "CHAR", "WILD_CHAR", 
                             "WILD_SEQ", "WILD_DIGIT" ];
    static ruleNames = [ "program", "likePatternElement", "likePatternChar", 
                         "wildcard", "likePatternCharlist", "charList", 
                         "charListElement", "charlistChar", "charRange" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = vba_likeParser.ruleNames;
        this.literalNames = vba_likeParser.literalNames;
        this.symbolicNames = vba_likeParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, vba_likeParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 494) !== 0)) {
	            this.state = 18;
	            this.likePatternElement();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 24;
	        this.match(vba_likeParser.EOF);
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



	likePatternElement() {
	    let localctx = new LikePatternElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, vba_likeParser.RULE_likePatternElement);
	    try {
	        this.state = 29;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.likePatternChar();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.likePatternCharlist();
	            break;
	        case 6:
	        case 7:
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 28;
	            this.wildcard();
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



	likePatternChar() {
	    let localctx = new LikePatternCharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, vba_likeParser.RULE_likePatternChar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 38) !== 0))) {
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



	wildcard() {
	    let localctx = new WildcardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, vba_likeParser.RULE_wildcard);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 448) !== 0))) {
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



	likePatternCharlist() {
	    let localctx = new LikePatternCharlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, vba_likeParser.RULE_likePatternCharlist);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(vba_likeParser.T__2);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 36;
	            this.match(vba_likeParser.T__3);
	        }

	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 490) !== 0)) {
	            this.state = 39;
	            this.charList();
	        }

	        this.state = 42;
	        this.match(vba_likeParser.T__1);
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



	charList() {
	    let localctx = new CharListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, vba_likeParser.RULE_charList);
	    var _la = 0;
	    try {
	        this.state = 62;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.match(vba_likeParser.T__0);
	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 488) !== 0)) {
	                this.state = 45;
	                this.charListElement();
	                this.state = 50;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 51;
	                this.match(vba_likeParser.T__0);
	            }

	            break;
	        case 3:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 54;
	                this.charListElement();
	                this.state = 57; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 488) !== 0));
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 59;
	                this.match(vba_likeParser.T__0);
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



	charListElement() {
	    let localctx = new CharListElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, vba_likeParser.RULE_charListElement);
	    try {
	        this.state = 66;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.charlistChar();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.charRange();
	            break;

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



	charlistChar() {
	    let localctx = new CharlistCharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, vba_likeParser.RULE_charlistChar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 488) !== 0))) {
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



	charRange() {
	    let localctx = new CharRangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, vba_likeParser.RULE_charRange);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.charlistChar();
	        this.state = 71;
	        this.match(vba_likeParser.T__0);
	        this.state = 72;
	        this.charlistChar();
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

vba_likeParser.EOF = antlr4.Token.EOF;
vba_likeParser.T__0 = 1;
vba_likeParser.T__1 = 2;
vba_likeParser.T__2 = 3;
vba_likeParser.T__3 = 4;
vba_likeParser.CHAR = 5;
vba_likeParser.WILD_CHAR = 6;
vba_likeParser.WILD_SEQ = 7;
vba_likeParser.WILD_DIGIT = 8;

vba_likeParser.RULE_program = 0;
vba_likeParser.RULE_likePatternElement = 1;
vba_likeParser.RULE_likePatternChar = 2;
vba_likeParser.RULE_wildcard = 3;
vba_likeParser.RULE_likePatternCharlist = 4;
vba_likeParser.RULE_charList = 5;
vba_likeParser.RULE_charListElement = 6;
vba_likeParser.RULE_charlistChar = 7;
vba_likeParser.RULE_charRange = 8;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_likeParser.RULE_program;
    }

	EOF() {
	    return this.getToken(vba_likeParser.EOF, 0);
	};

	likePatternElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LikePatternElementContext);
	    } else {
	        return this.getTypedRuleContext(LikePatternElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.exitProgram(this);
		}
	}


}



class LikePatternElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_likeParser.RULE_likePatternElement;
    }

	likePatternChar() {
	    return this.getTypedRuleContext(LikePatternCharContext,0);
	};

	likePatternCharlist() {
	    return this.getTypedRuleContext(LikePatternCharlistContext,0);
	};

	wildcard() {
	    return this.getTypedRuleContext(WildcardContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.enterLikePatternElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.exitLikePatternElement(this);
		}
	}


}



class LikePatternCharContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_likeParser.RULE_likePatternChar;
    }

	CHAR() {
	    return this.getToken(vba_likeParser.CHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.enterLikePatternChar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.exitLikePatternChar(this);
		}
	}


}



class WildcardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_likeParser.RULE_wildcard;
    }

	WILD_CHAR() {
	    return this.getToken(vba_likeParser.WILD_CHAR, 0);
	};

	WILD_SEQ() {
	    return this.getToken(vba_likeParser.WILD_SEQ, 0);
	};

	WILD_DIGIT() {
	    return this.getToken(vba_likeParser.WILD_DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.enterWildcard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.exitWildcard(this);
		}
	}


}



class LikePatternCharlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_likeParser.RULE_likePatternCharlist;
    }

	charList() {
	    return this.getTypedRuleContext(CharListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.enterLikePatternCharlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.exitLikePatternCharlist(this);
		}
	}


}



class CharListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_likeParser.RULE_charList;
    }

	charListElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CharListElementContext);
	    } else {
	        return this.getTypedRuleContext(CharListElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.enterCharList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.exitCharList(this);
		}
	}


}



class CharListElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_likeParser.RULE_charListElement;
    }

	charlistChar() {
	    return this.getTypedRuleContext(CharlistCharContext,0);
	};

	charRange() {
	    return this.getTypedRuleContext(CharRangeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.enterCharListElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.exitCharListElement(this);
		}
	}


}



class CharlistCharContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_likeParser.RULE_charlistChar;
    }

	CHAR() {
	    return this.getToken(vba_likeParser.CHAR, 0);
	};

	WILD_SEQ() {
	    return this.getToken(vba_likeParser.WILD_SEQ, 0);
	};

	WILD_DIGIT() {
	    return this.getToken(vba_likeParser.WILD_DIGIT, 0);
	};

	WILD_CHAR() {
	    return this.getToken(vba_likeParser.WILD_CHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.enterCharlistChar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.exitCharlistChar(this);
		}
	}


}



class CharRangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vba_likeParser.RULE_charRange;
    }

	charlistChar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CharlistCharContext);
	    } else {
	        return this.getTypedRuleContext(CharlistCharContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.enterCharRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vba_likeListener ) {
	        listener.exitCharRange(this);
		}
	}


}




vba_likeParser.ProgramContext = ProgramContext; 
vba_likeParser.LikePatternElementContext = LikePatternElementContext; 
vba_likeParser.LikePatternCharContext = LikePatternCharContext; 
vba_likeParser.WildcardContext = WildcardContext; 
vba_likeParser.LikePatternCharlistContext = LikePatternCharlistContext; 
vba_likeParser.CharListContext = CharListContext; 
vba_likeParser.CharListElementContext = CharListElementContext; 
vba_likeParser.CharlistCharContext = CharlistCharContext; 
vba_likeParser.CharRangeContext = CharRangeContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
