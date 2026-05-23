// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/pdn/pdn.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import pdnListener from './pdnListener.js';
const serializedATN = [4,1,14,71,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,0,1,1,5,
1,28,8,1,10,1,12,1,31,9,1,1,2,1,2,1,2,1,2,1,2,1,3,4,3,39,8,3,11,3,12,3,40,
1,3,1,3,4,3,45,8,3,11,3,12,3,46,1,4,1,4,4,4,51,8,4,11,4,12,4,52,1,5,1,5,
1,5,3,5,58,8,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,10,0,0,11,
0,2,4,6,8,10,12,14,16,18,20,0,2,1,0,8,9,1,0,5,7,66,0,22,1,0,0,0,2,29,1,0,
0,0,4,32,1,0,0,0,6,38,1,0,0,0,8,48,1,0,0,0,10,54,1,0,0,0,12,59,1,0,0,0,14,
62,1,0,0,0,16,64,1,0,0,0,18,66,1,0,0,0,20,68,1,0,0,0,22,23,3,2,1,0,23,24,
3,6,3,0,24,25,5,0,0,1,25,1,1,0,0,0,26,28,3,4,2,0,27,26,1,0,0,0,28,31,1,0,
0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,3,1,0,0,0,31,29,1,0,0,0,32,33,5,1,0,0,
33,34,3,16,8,0,34,35,3,18,9,0,35,36,5,2,0,0,36,5,1,0,0,0,37,39,3,8,4,0,38,
37,1,0,0,0,39,40,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,44,1,0,0,0,42,45,
3,14,7,0,43,45,5,3,0,0,44,42,1,0,0,0,44,43,1,0,0,0,45,46,1,0,0,0,46,44,1,
0,0,0,46,47,1,0,0,0,47,7,1,0,0,0,48,50,3,12,6,0,49,51,3,10,5,0,50,49,1,0,
0,0,51,52,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,9,1,0,0,0,54,57,7,0,0,0,
55,58,3,14,7,0,56,58,5,3,0,0,57,55,1,0,0,0,57,56,1,0,0,0,57,58,1,0,0,0,58,
11,1,0,0,0,59,60,3,20,10,0,60,61,5,4,0,0,61,13,1,0,0,0,62,63,7,1,0,0,63,
15,1,0,0,0,64,65,5,11,0,0,65,17,1,0,0,0,66,67,5,12,0,0,67,19,1,0,0,0,68,
69,5,10,0,0,69,21,1,0,0,0,6,29,40,44,46,52,57];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class pdnParser extends antlr4.Parser {

    static grammarFileName = "pdn.g4";
    static literalNames = [ null, "'['", "']'", "'*'", "'.'", "'1/2-1/2'", 
                            "'1-0'", "'0-1'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "MOVE1", "MOVE2", "NUMBER", "TEXT", "STRING", 
                             "COMMENT", "WS" ];
    static ruleNames = [ "game", "tags", "tag", "moves", "move", "movespec", 
                         "movenum", "result", "text", "string", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = pdnParser.ruleNames;
        this.literalNames = pdnParser.literalNames;
        this.symbolicNames = pdnParser.symbolicNames;
    }



	game() {
	    let localctx = new GameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, pdnParser.RULE_game);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.tags();
	        this.state = 23;
	        this.moves();
	        this.state = 24;
	        this.match(pdnParser.EOF);
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



	tags() {
	    let localctx = new TagsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, pdnParser.RULE_tags);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 26;
	            this.tag();
	            this.state = 31;
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



	tag() {
	    let localctx = new TagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, pdnParser.RULE_tag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(pdnParser.T__0);
	        this.state = 33;
	        this.text();
	        this.state = 34;
	        this.string();
	        this.state = 35;
	        this.match(pdnParser.T__1);
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



	moves() {
	    let localctx = new MovesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, pdnParser.RULE_moves);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 37;
	            this.move();
	            this.state = 40; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===10);
	        this.state = 44; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 44;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 5:
	            case 6:
	            case 7:
	                this.state = 42;
	                this.result();
	                break;
	            case 3:
	                this.state = 43;
	                this.match(pdnParser.T__2);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 46; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 232) !== 0));
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



	move() {
	    let localctx = new MoveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, pdnParser.RULE_move);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.movenum();
	        this.state = 50; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 49;
	            this.movespec();
	            this.state = 52; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===8 || _la===9);
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



	movespec() {
	    let localctx = new MovespecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, pdnParser.RULE_movespec);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        _la = this._input.LA(1);
	        if(!(_la===8 || _la===9)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 57;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 55;
	            this.result();

	        } else if(la_===2) {
	            this.state = 56;
	            this.match(pdnParser.T__2);

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



	movenum() {
	    let localctx = new MovenumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, pdnParser.RULE_movenum);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.number();
	        this.state = 60;
	        this.match(pdnParser.T__3);
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



	result() {
	    let localctx = new ResultContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, pdnParser.RULE_result);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 224) !== 0))) {
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



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, pdnParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(pdnParser.TEXT);
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
	    this.enterRule(localctx, 18, pdnParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(pdnParser.STRING);
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, pdnParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(pdnParser.NUMBER);
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

pdnParser.EOF = antlr4.Token.EOF;
pdnParser.T__0 = 1;
pdnParser.T__1 = 2;
pdnParser.T__2 = 3;
pdnParser.T__3 = 4;
pdnParser.T__4 = 5;
pdnParser.T__5 = 6;
pdnParser.T__6 = 7;
pdnParser.MOVE1 = 8;
pdnParser.MOVE2 = 9;
pdnParser.NUMBER = 10;
pdnParser.TEXT = 11;
pdnParser.STRING = 12;
pdnParser.COMMENT = 13;
pdnParser.WS = 14;

pdnParser.RULE_game = 0;
pdnParser.RULE_tags = 1;
pdnParser.RULE_tag = 2;
pdnParser.RULE_moves = 3;
pdnParser.RULE_move = 4;
pdnParser.RULE_movespec = 5;
pdnParser.RULE_movenum = 6;
pdnParser.RULE_result = 7;
pdnParser.RULE_text = 8;
pdnParser.RULE_string = 9;
pdnParser.RULE_number = 10;

class GameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdnParser.RULE_game;
    }

	tags() {
	    return this.getTypedRuleContext(TagsContext,0);
	};

	moves() {
	    return this.getTypedRuleContext(MovesContext,0);
	};

	EOF() {
	    return this.getToken(pdnParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.enterGame(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.exitGame(this);
		}
	}


}



class TagsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdnParser.RULE_tags;
    }

	tag = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TagContext);
	    } else {
	        return this.getTypedRuleContext(TagContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.enterTags(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.exitTags(this);
		}
	}


}



class TagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdnParser.RULE_tag;
    }

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.enterTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.exitTag(this);
		}
	}


}



class MovesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdnParser.RULE_moves;
    }

	move = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MoveContext);
	    } else {
	        return this.getTypedRuleContext(MoveContext,i);
	    }
	};

	result = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ResultContext);
	    } else {
	        return this.getTypedRuleContext(ResultContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.enterMoves(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.exitMoves(this);
		}
	}


}



class MoveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdnParser.RULE_move;
    }

	movenum() {
	    return this.getTypedRuleContext(MovenumContext,0);
	};

	movespec = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MovespecContext);
	    } else {
	        return this.getTypedRuleContext(MovespecContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.enterMove(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.exitMove(this);
		}
	}


}



class MovespecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdnParser.RULE_movespec;
    }

	MOVE1() {
	    return this.getToken(pdnParser.MOVE1, 0);
	};

	MOVE2() {
	    return this.getToken(pdnParser.MOVE2, 0);
	};

	result() {
	    return this.getTypedRuleContext(ResultContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.enterMovespec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.exitMovespec(this);
		}
	}


}



class MovenumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdnParser.RULE_movenum;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.enterMovenum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.exitMovenum(this);
		}
	}


}



class ResultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdnParser.RULE_result;
    }


	enterRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.enterResult(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.exitResult(this);
		}
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdnParser.RULE_text;
    }

	TEXT() {
	    return this.getToken(pdnParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.exitText(this);
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
        this.ruleIndex = pdnParser.RULE_string;
    }

	STRING() {
	    return this.getToken(pdnParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.exitString(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pdnParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(pdnParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pdnListener ) {
	        listener.exitNumber(this);
		}
	}


}




pdnParser.GameContext = GameContext; 
pdnParser.TagsContext = TagsContext; 
pdnParser.TagContext = TagContext; 
pdnParser.MovesContext = MovesContext; 
pdnParser.MoveContext = MoveContext; 
pdnParser.MovespecContext = MovespecContext; 
pdnParser.MovenumContext = MovenumContext; 
pdnParser.ResultContext = ResultContext; 
pdnParser.TextContext = TextContext; 
pdnParser.StringContext = StringContext; 
pdnParser.NumberContext = NumberContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
