// Generated from ./quake3/arena/Q3ArenaParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import Q3ArenaParserListener from './Q3ArenaParserListener.js';
const serializedATN = [4,1,12,31,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,5,0,
10,8,0,10,0,12,0,13,9,0,1,0,1,0,1,1,1,1,5,1,19,8,1,10,1,12,1,22,9,1,1,1,
1,1,1,2,1,2,1,2,1,3,1,3,1,3,0,0,4,0,2,4,6,0,2,1,0,6,8,2,0,1,5,8,8,28,0,11,
1,0,0,0,2,16,1,0,0,0,4,25,1,0,0,0,6,28,1,0,0,0,8,10,3,2,1,0,9,8,1,0,0,0,
10,13,1,0,0,0,11,9,1,0,0,0,11,12,1,0,0,0,12,14,1,0,0,0,13,11,1,0,0,0,14,
15,5,0,0,1,15,1,1,0,0,0,16,20,5,9,0,0,17,19,3,4,2,0,18,17,1,0,0,0,19,22,
1,0,0,0,20,18,1,0,0,0,20,21,1,0,0,0,21,23,1,0,0,0,22,20,1,0,0,0,23,24,5,
10,0,0,24,3,1,0,0,0,25,26,3,6,3,0,26,27,7,0,0,0,27,5,1,0,0,0,28,29,7,1,0,
0,29,7,1,0,0,0,2,11,20];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class Q3ArenaParser extends antlr4.Parser {

    static grammarFileName = "Q3ArenaParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, "'{'", "'}'" ];
    static symbolicNames = [ null, "MAP_KEYWORD", "LONGNAME_KEYWORD", "BOTS_KEYWORD", 
                             "FRAGLIMIT_KEYWORD", "TYPE_KEYWORD", "NUMBER", 
                             "STRING_LITERAL", "IDENTIFIER", "LBRACE", "RBRACE", 
                             "COMMENT", "WS" ];
    static ruleNames = [ "arenaFile", "arenaBlock", "propertyStatement", 
                         "arenaKeyword" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Q3ArenaParser.ruleNames;
        this.literalNames = Q3ArenaParser.literalNames;
        this.symbolicNames = Q3ArenaParser.symbolicNames;
    }



	arenaFile() {
	    let localctx = new ArenaFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Q3ArenaParser.RULE_arenaFile);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 8;
	            this.arenaBlock();
	            this.state = 13;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 14;
	        this.match(Q3ArenaParser.EOF);
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



	arenaBlock() {
	    let localctx = new ArenaBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Q3ArenaParser.RULE_arenaBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.match(Q3ArenaParser.LBRACE);
	        this.state = 20;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 318) !== 0)) {
	            this.state = 17;
	            this.propertyStatement();
	            this.state = 22;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 23;
	        this.match(Q3ArenaParser.RBRACE);
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



	propertyStatement() {
	    let localctx = new PropertyStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Q3ArenaParser.RULE_propertyStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        localctx.keyword = this.arenaKeyword();
	        this.state = 26;
	        localctx.value = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 448) !== 0))) {
	            localctx.value = this._errHandler.recoverInline(this);
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



	arenaKeyword() {
	    let localctx = new ArenaKeywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Q3ArenaParser.RULE_arenaKeyword);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 318) !== 0))) {
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

Q3ArenaParser.EOF = antlr4.Token.EOF;
Q3ArenaParser.MAP_KEYWORD = 1;
Q3ArenaParser.LONGNAME_KEYWORD = 2;
Q3ArenaParser.BOTS_KEYWORD = 3;
Q3ArenaParser.FRAGLIMIT_KEYWORD = 4;
Q3ArenaParser.TYPE_KEYWORD = 5;
Q3ArenaParser.NUMBER = 6;
Q3ArenaParser.STRING_LITERAL = 7;
Q3ArenaParser.IDENTIFIER = 8;
Q3ArenaParser.LBRACE = 9;
Q3ArenaParser.RBRACE = 10;
Q3ArenaParser.COMMENT = 11;
Q3ArenaParser.WS = 12;

Q3ArenaParser.RULE_arenaFile = 0;
Q3ArenaParser.RULE_arenaBlock = 1;
Q3ArenaParser.RULE_propertyStatement = 2;
Q3ArenaParser.RULE_arenaKeyword = 3;

class ArenaFileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ArenaParser.RULE_arenaFile;
    }

	EOF() {
	    return this.getToken(Q3ArenaParser.EOF, 0);
	};

	arenaBlock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArenaBlockContext);
	    } else {
	        return this.getTypedRuleContext(ArenaBlockContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3ArenaParserListener ) {
	        listener.enterArenaFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ArenaParserListener ) {
	        listener.exitArenaFile(this);
		}
	}


}



class ArenaBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ArenaParser.RULE_arenaBlock;
    }

	LBRACE() {
	    return this.getToken(Q3ArenaParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(Q3ArenaParser.RBRACE, 0);
	};

	propertyStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropertyStatementContext);
	    } else {
	        return this.getTypedRuleContext(PropertyStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3ArenaParserListener ) {
	        listener.enterArenaBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ArenaParserListener ) {
	        listener.exitArenaBlock(this);
		}
	}


}



class PropertyStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ArenaParser.RULE_propertyStatement;
        this.keyword = null;
        this.value = null;
    }

	arenaKeyword() {
	    return this.getTypedRuleContext(ArenaKeywordContext,0);
	};

	STRING_LITERAL() {
	    return this.getToken(Q3ArenaParser.STRING_LITERAL, 0);
	};

	NUMBER() {
	    return this.getToken(Q3ArenaParser.NUMBER, 0);
	};

	IDENTIFIER() {
	    return this.getToken(Q3ArenaParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ArenaParserListener ) {
	        listener.enterPropertyStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ArenaParserListener ) {
	        listener.exitPropertyStatement(this);
		}
	}


}



class ArenaKeywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ArenaParser.RULE_arenaKeyword;
    }

	MAP_KEYWORD() {
	    return this.getToken(Q3ArenaParser.MAP_KEYWORD, 0);
	};

	LONGNAME_KEYWORD() {
	    return this.getToken(Q3ArenaParser.LONGNAME_KEYWORD, 0);
	};

	BOTS_KEYWORD() {
	    return this.getToken(Q3ArenaParser.BOTS_KEYWORD, 0);
	};

	FRAGLIMIT_KEYWORD() {
	    return this.getToken(Q3ArenaParser.FRAGLIMIT_KEYWORD, 0);
	};

	TYPE_KEYWORD() {
	    return this.getToken(Q3ArenaParser.TYPE_KEYWORD, 0);
	};

	IDENTIFIER() {
	    return this.getToken(Q3ArenaParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ArenaParserListener ) {
	        listener.enterArenaKeyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ArenaParserListener ) {
	        listener.exitArenaKeyword(this);
		}
	}


}




Q3ArenaParser.ArenaFileContext = ArenaFileContext; 
Q3ArenaParser.ArenaBlockContext = ArenaBlockContext; 
Q3ArenaParser.PropertyStatementContext = PropertyStatementContext; 
Q3ArenaParser.ArenaKeywordContext = ArenaKeywordContext; 
