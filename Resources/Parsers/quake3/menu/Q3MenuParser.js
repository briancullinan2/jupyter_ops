// Generated from ./quake3/menu/Q3MenuParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import Q3MenuParserListener from './Q3MenuParserListener.js';
const serializedATN = [4,1,15,95,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,5,0,24,8,0,10,0,12,
0,27,9,0,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,5,3,41,8,3,10,3,
12,3,44,9,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,5,5,54,8,5,10,5,12,5,57,9,5,
1,6,1,6,4,6,61,8,6,11,6,12,6,62,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,72,8,7,1,
8,1,8,5,8,76,8,8,10,8,12,8,79,9,8,5,8,81,8,8,10,8,12,8,84,9,8,1,9,1,9,5,
9,88,8,9,10,9,12,9,91,9,9,1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,
20,0,1,3,0,2,2,4,6,8,8,94,0,25,1,0,0,0,2,31,1,0,0,0,4,34,1,0,0,0,6,42,1,
0,0,0,8,45,1,0,0,0,10,55,1,0,0,0,12,58,1,0,0,0,14,71,1,0,0,0,16,82,1,0,0,
0,18,85,1,0,0,0,20,92,1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,0,24,27,1,0,0,0,
25,23,1,0,0,0,25,26,1,0,0,0,26,28,1,0,0,0,27,25,1,0,0,0,28,29,3,4,2,0,29,
30,5,0,0,1,30,1,1,0,0,0,31,32,5,7,0,0,32,33,5,6,0,0,33,3,1,0,0,0,34,35,5,
9,0,0,35,36,3,6,3,0,36,37,5,10,0,0,37,5,1,0,0,0,38,41,3,8,4,0,39,41,3,2,
1,0,40,38,1,0,0,0,40,39,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,
0,43,7,1,0,0,0,44,42,1,0,0,0,45,46,5,1,0,0,46,47,5,9,0,0,47,48,3,10,5,0,
48,49,5,10,0,0,49,9,1,0,0,0,50,54,3,12,6,0,51,54,3,14,7,0,52,54,3,8,4,0,
53,50,1,0,0,0,53,51,1,0,0,0,53,52,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,
56,1,0,0,0,56,11,1,0,0,0,57,55,1,0,0,0,58,60,5,2,0,0,59,61,3,20,10,0,60,
59,1,0,0,0,61,62,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,13,1,0,0,0,64,65,
5,3,0,0,65,66,5,9,0,0,66,67,3,16,8,0,67,68,5,10,0,0,68,72,1,0,0,0,69,70,
5,3,0,0,70,72,3,18,9,0,71,64,1,0,0,0,71,69,1,0,0,0,72,15,1,0,0,0,73,77,3,
18,9,0,74,76,5,11,0,0,75,74,1,0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,
0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,80,73,1,0,0,0,81,84,1,0,0,0,82,80,1,0,
0,0,82,83,1,0,0,0,83,17,1,0,0,0,84,82,1,0,0,0,85,89,5,4,0,0,86,88,3,20,10,
0,87,86,1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,19,1,0,0,0,
91,89,1,0,0,0,92,93,7,0,0,0,93,21,1,0,0,0,10,25,40,42,53,55,62,71,77,82,
89];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class Q3MenuParser extends antlr4.Parser {

    static grammarFileName = "Q3MenuParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, "'{'", "'}'", "';'" ];
    static symbolicNames = [ null, "BLOCK_TYPE", "PROPERTY_KEYWORD", "EVENT_KEYWORD", 
                             "ACTION_COMMAND", "NUMBER", "STRING_LITERAL", 
                             "PREPROCESSOR_DIRECTIVE", "IDENTIFIER", "LBRACE", 
                             "RBRACE", "SEMICOLON", "LINE_COMMENT_SL", "LINE_COMMENT_BS", 
                             "BLOCK_COMMENT", "WS" ];
    static ruleNames = [ "menuFile", "includeDirective", "globalScopeWrapper", 
                         "definitionBody", "blockDeclaration", "blockContentBody", 
                         "propertyStatement", "eventBlockStatement", "actionScriptBody", 
                         "actionCommandStatement", "argument" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Q3MenuParser.ruleNames;
        this.literalNames = Q3MenuParser.literalNames;
        this.symbolicNames = Q3MenuParser.symbolicNames;
    }



	menuFile() {
	    let localctx = new MenuFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Q3MenuParser.RULE_menuFile);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 22;
	            this.includeDirective();
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 28;
	        this.globalScopeWrapper();
	        this.state = 29;
	        this.match(Q3MenuParser.EOF);
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



	includeDirective() {
	    let localctx = new IncludeDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Q3MenuParser.RULE_includeDirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(Q3MenuParser.PREPROCESSOR_DIRECTIVE);
	        this.state = 32;
	        this.match(Q3MenuParser.STRING_LITERAL);
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



	globalScopeWrapper() {
	    let localctx = new GlobalScopeWrapperContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Q3MenuParser.RULE_globalScopeWrapper);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(Q3MenuParser.LBRACE);
	        this.state = 35;
	        this.definitionBody();
	        this.state = 36;
	        this.match(Q3MenuParser.RBRACE);
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



	definitionBody() {
	    let localctx = new DefinitionBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Q3MenuParser.RULE_definitionBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===7) {
	            this.state = 40;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	                this.state = 38;
	                this.blockDeclaration();
	                break;
	            case 7:
	                this.state = 39;
	                this.includeDirective();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 44;
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



	blockDeclaration() {
	    let localctx = new BlockDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, Q3MenuParser.RULE_blockDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(Q3MenuParser.BLOCK_TYPE);
	        this.state = 46;
	        this.match(Q3MenuParser.LBRACE);
	        this.state = 47;
	        this.blockContentBody();
	        this.state = 48;
	        this.match(Q3MenuParser.RBRACE);
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



	blockContentBody() {
	    let localctx = new BlockContentBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, Q3MenuParser.RULE_blockContentBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0)) {
	            this.state = 53;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 2:
	                this.state = 50;
	                this.propertyStatement();
	                break;
	            case 3:
	                this.state = 51;
	                this.eventBlockStatement();
	                break;
	            case 1:
	                this.state = 52;
	                this.blockDeclaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 57;
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



	propertyStatement() {
	    let localctx = new PropertyStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, Q3MenuParser.RULE_propertyStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(Q3MenuParser.PROPERTY_KEYWORD);
	        this.state = 60; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 59;
	        		this.argument();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 62; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	eventBlockStatement() {
	    let localctx = new EventBlockStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, Q3MenuParser.RULE_eventBlockStatement);
	    try {
	        this.state = 71;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.match(Q3MenuParser.EVENT_KEYWORD);
	            this.state = 65;
	            this.match(Q3MenuParser.LBRACE);
	            this.state = 66;
	            this.actionScriptBody();
	            this.state = 67;
	            this.match(Q3MenuParser.RBRACE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
	            this.match(Q3MenuParser.EVENT_KEYWORD);
	            this.state = 70;
	            this.actionCommandStatement();
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



	actionScriptBody() {
	    let localctx = new ActionScriptBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, Q3MenuParser.RULE_actionScriptBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 73;
	            this.actionCommandStatement();
	            this.state = 77;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===11) {
	                this.state = 74;
	                this.match(Q3MenuParser.SEMICOLON);
	                this.state = 79;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 84;
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



	actionCommandStatement() {
	    let localctx = new ActionCommandStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, Q3MenuParser.RULE_actionCommandStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(Q3MenuParser.ACTION_COMMAND);
	        this.state = 89;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 86;
	                this.argument(); 
	            }
	            this.state = 91;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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



	argument() {
	    let localctx = new ArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, Q3MenuParser.RULE_argument);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 372) !== 0))) {
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

Q3MenuParser.EOF = antlr4.Token.EOF;
Q3MenuParser.BLOCK_TYPE = 1;
Q3MenuParser.PROPERTY_KEYWORD = 2;
Q3MenuParser.EVENT_KEYWORD = 3;
Q3MenuParser.ACTION_COMMAND = 4;
Q3MenuParser.NUMBER = 5;
Q3MenuParser.STRING_LITERAL = 6;
Q3MenuParser.PREPROCESSOR_DIRECTIVE = 7;
Q3MenuParser.IDENTIFIER = 8;
Q3MenuParser.LBRACE = 9;
Q3MenuParser.RBRACE = 10;
Q3MenuParser.SEMICOLON = 11;
Q3MenuParser.LINE_COMMENT_SL = 12;
Q3MenuParser.LINE_COMMENT_BS = 13;
Q3MenuParser.BLOCK_COMMENT = 14;
Q3MenuParser.WS = 15;

Q3MenuParser.RULE_menuFile = 0;
Q3MenuParser.RULE_includeDirective = 1;
Q3MenuParser.RULE_globalScopeWrapper = 2;
Q3MenuParser.RULE_definitionBody = 3;
Q3MenuParser.RULE_blockDeclaration = 4;
Q3MenuParser.RULE_blockContentBody = 5;
Q3MenuParser.RULE_propertyStatement = 6;
Q3MenuParser.RULE_eventBlockStatement = 7;
Q3MenuParser.RULE_actionScriptBody = 8;
Q3MenuParser.RULE_actionCommandStatement = 9;
Q3MenuParser.RULE_argument = 10;

class MenuFileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MenuParser.RULE_menuFile;
    }

	globalScopeWrapper() {
	    return this.getTypedRuleContext(GlobalScopeWrapperContext,0);
	};

	EOF() {
	    return this.getToken(Q3MenuParser.EOF, 0);
	};

	includeDirective = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IncludeDirectiveContext);
	    } else {
	        return this.getTypedRuleContext(IncludeDirectiveContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.enterMenuFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.exitMenuFile(this);
		}
	}


}



class IncludeDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MenuParser.RULE_includeDirective;
    }

	PREPROCESSOR_DIRECTIVE() {
	    return this.getToken(Q3MenuParser.PREPROCESSOR_DIRECTIVE, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(Q3MenuParser.STRING_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.enterIncludeDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.exitIncludeDirective(this);
		}
	}


}



class GlobalScopeWrapperContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MenuParser.RULE_globalScopeWrapper;
    }

	LBRACE() {
	    return this.getToken(Q3MenuParser.LBRACE, 0);
	};

	definitionBody() {
	    return this.getTypedRuleContext(DefinitionBodyContext,0);
	};

	RBRACE() {
	    return this.getToken(Q3MenuParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.enterGlobalScopeWrapper(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.exitGlobalScopeWrapper(this);
		}
	}


}



class DefinitionBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MenuParser.RULE_definitionBody;
    }

	blockDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(BlockDeclarationContext,i);
	    }
	};

	includeDirective = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IncludeDirectiveContext);
	    } else {
	        return this.getTypedRuleContext(IncludeDirectiveContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.enterDefinitionBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.exitDefinitionBody(this);
		}
	}


}



class BlockDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MenuParser.RULE_blockDeclaration;
    }

	BLOCK_TYPE() {
	    return this.getToken(Q3MenuParser.BLOCK_TYPE, 0);
	};

	LBRACE() {
	    return this.getToken(Q3MenuParser.LBRACE, 0);
	};

	blockContentBody() {
	    return this.getTypedRuleContext(BlockContentBodyContext,0);
	};

	RBRACE() {
	    return this.getToken(Q3MenuParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.enterBlockDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.exitBlockDeclaration(this);
		}
	}


}



class BlockContentBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MenuParser.RULE_blockContentBody;
    }

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

	eventBlockStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EventBlockStatementContext);
	    } else {
	        return this.getTypedRuleContext(EventBlockStatementContext,i);
	    }
	};

	blockDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(BlockDeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.enterBlockContentBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.exitBlockContentBody(this);
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
        this.ruleIndex = Q3MenuParser.RULE_propertyStatement;
    }

	PROPERTY_KEYWORD() {
	    return this.getToken(Q3MenuParser.PROPERTY_KEYWORD, 0);
	};

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.enterPropertyStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.exitPropertyStatement(this);
		}
	}


}



class EventBlockStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MenuParser.RULE_eventBlockStatement;
    }

	EVENT_KEYWORD() {
	    return this.getToken(Q3MenuParser.EVENT_KEYWORD, 0);
	};

	LBRACE() {
	    return this.getToken(Q3MenuParser.LBRACE, 0);
	};

	actionScriptBody() {
	    return this.getTypedRuleContext(ActionScriptBodyContext,0);
	};

	RBRACE() {
	    return this.getToken(Q3MenuParser.RBRACE, 0);
	};

	actionCommandStatement() {
	    return this.getTypedRuleContext(ActionCommandStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.enterEventBlockStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.exitEventBlockStatement(this);
		}
	}


}



class ActionScriptBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MenuParser.RULE_actionScriptBody;
    }

	actionCommandStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ActionCommandStatementContext);
	    } else {
	        return this.getTypedRuleContext(ActionCommandStatementContext,i);
	    }
	};

	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Q3MenuParser.SEMICOLON);
	    } else {
	        return this.getToken(Q3MenuParser.SEMICOLON, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.enterActionScriptBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.exitActionScriptBody(this);
		}
	}


}



class ActionCommandStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MenuParser.RULE_actionCommandStatement;
    }

	ACTION_COMMAND() {
	    return this.getToken(Q3MenuParser.ACTION_COMMAND, 0);
	};

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.enterActionCommandStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.exitActionCommandStatement(this);
		}
	}


}



class ArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3MenuParser.RULE_argument;
    }

	IDENTIFIER() {
	    return this.getToken(Q3MenuParser.IDENTIFIER, 0);
	};

	NUMBER() {
	    return this.getToken(Q3MenuParser.NUMBER, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(Q3MenuParser.STRING_LITERAL, 0);
	};

	PROPERTY_KEYWORD() {
	    return this.getToken(Q3MenuParser.PROPERTY_KEYWORD, 0);
	};

	ACTION_COMMAND() {
	    return this.getToken(Q3MenuParser.ACTION_COMMAND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3MenuParserListener ) {
	        listener.exitArgument(this);
		}
	}


}




Q3MenuParser.MenuFileContext = MenuFileContext; 
Q3MenuParser.IncludeDirectiveContext = IncludeDirectiveContext; 
Q3MenuParser.GlobalScopeWrapperContext = GlobalScopeWrapperContext; 
Q3MenuParser.DefinitionBodyContext = DefinitionBodyContext; 
Q3MenuParser.BlockDeclarationContext = BlockDeclarationContext; 
Q3MenuParser.BlockContentBodyContext = BlockContentBodyContext; 
Q3MenuParser.PropertyStatementContext = PropertyStatementContext; 
Q3MenuParser.EventBlockStatementContext = EventBlockStatementContext; 
Q3MenuParser.ActionScriptBodyContext = ActionScriptBodyContext; 
Q3MenuParser.ActionCommandStatementContext = ActionCommandStatementContext; 
Q3MenuParser.ArgumentContext = ArgumentContext; 
