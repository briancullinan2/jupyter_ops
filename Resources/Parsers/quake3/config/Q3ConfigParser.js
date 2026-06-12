// Generated from ./quake3/config/Q3ConfigParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import Q3ConfigParserListener from './Q3ConfigParserListener.js';
const serializedATN = [4,1,10,69,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,1,1,1,5,1,24,8,1,10,1,12,1,
27,9,1,5,1,29,8,1,10,1,12,1,32,9,1,1,2,1,2,1,2,3,2,37,8,2,1,3,1,3,1,3,1,
3,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,5,7,53,8,7,10,7,12,7,56,9,7,1,
7,1,7,5,7,60,8,7,10,7,12,7,63,9,7,3,7,65,8,7,1,8,1,8,1,8,0,0,9,0,2,4,6,8,
10,12,14,16,0,3,2,0,4,4,7,7,2,0,5,5,7,7,2,0,1,1,3,7,66,0,18,1,0,0,0,2,30,
1,0,0,0,4,36,1,0,0,0,6,38,1,0,0,0,8,42,1,0,0,0,10,44,1,0,0,0,12,48,1,0,0,
0,14,64,1,0,0,0,16,66,1,0,0,0,18,19,3,2,1,0,19,20,5,0,0,1,20,1,1,0,0,0,21,
25,3,4,2,0,22,24,5,8,0,0,23,22,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,
1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,28,21,1,0,0,0,29,32,1,0,0,0,30,28,1,
0,0,0,30,31,1,0,0,0,31,3,1,0,0,0,32,30,1,0,0,0,33,37,3,6,3,0,34,37,3,10,
5,0,35,37,3,14,7,0,36,33,1,0,0,0,36,34,1,0,0,0,36,35,1,0,0,0,37,5,1,0,0,
0,38,39,5,1,0,0,39,40,3,8,4,0,40,41,3,16,8,0,41,7,1,0,0,0,42,43,7,0,0,0,
43,9,1,0,0,0,44,45,5,2,0,0,45,46,3,12,6,0,46,47,3,16,8,0,47,11,1,0,0,0,48,
49,7,1,0,0,49,13,1,0,0,0,50,54,5,3,0,0,51,53,3,16,8,0,52,51,1,0,0,0,53,56,
1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,65,1,0,0,0,56,54,1,0,0,0,57,61,5,
7,0,0,58,60,3,16,8,0,59,58,1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,0,61,62,1,0,
0,0,62,65,1,0,0,0,63,61,1,0,0,0,64,50,1,0,0,0,64,57,1,0,0,0,65,15,1,0,0,
0,66,67,7,2,0,0,67,17,1,0,0,0,6,25,30,36,54,61,64];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class Q3ConfigParser extends antlr4.Parser {

    static grammarFileName = "Q3ConfigParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            "';'" ];
    static symbolicNames = [ null, "ASSIGNMENT_KEYWORD", "BIND_KEYWORD", 
                             "COMMAND_KEYWORD", "KNOWN_CVAR", "NUMBER", 
                             "STRING_LITERAL", "IDENTIFIER", "SEMICOLON", 
                             "COMMENT", "WS" ];
    static ruleNames = [ "configFile", "statementList", "statement", "assignmentExpression", 
                         "targetCvar", "bindExpression", "bindKey", "commandExpression", 
                         "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Q3ConfigParser.ruleNames;
        this.literalNames = Q3ConfigParser.literalNames;
        this.symbolicNames = Q3ConfigParser.symbolicNames;
    }



	configFile() {
	    let localctx = new ConfigFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Q3ConfigParser.RULE_configFile);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.statementList();
	        this.state = 19;
	        this.match(Q3ConfigParser.EOF);
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



	statementList() {
	    let localctx = new StatementListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Q3ConfigParser.RULE_statementList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 142) !== 0)) {
	            this.state = 21;
	            this.statement();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 22;
	                this.match(Q3ConfigParser.SEMICOLON);
	                this.state = 27;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 32;
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Q3ConfigParser.RULE_statement);
	    try {
	        this.state = 36;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 33;
	            this.assignmentExpression();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 34;
	            this.bindExpression();
	            break;
	        case 3:
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 35;
	            this.commandExpression();
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



	assignmentExpression() {
	    let localctx = new AssignmentExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Q3ConfigParser.RULE_assignmentExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(Q3ConfigParser.ASSIGNMENT_KEYWORD);
	        this.state = 39;
	        this.targetCvar();
	        this.state = 40;
	        this.value();
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



	targetCvar() {
	    let localctx = new TargetCvarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, Q3ConfigParser.RULE_targetCvar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===7)) {
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



	bindExpression() {
	    let localctx = new BindExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, Q3ConfigParser.RULE_bindExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(Q3ConfigParser.BIND_KEYWORD);
	        this.state = 45;
	        this.bindKey();
	        this.state = 46;
	        this.value();
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



	bindKey() {
	    let localctx = new BindKeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, Q3ConfigParser.RULE_bindKey);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===7)) {
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



	commandExpression() {
	    let localctx = new CommandExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, Q3ConfigParser.RULE_commandExpression);
	    try {
	        this.state = 64;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.match(Q3ConfigParser.COMMAND_KEYWORD);
	            this.state = 54;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 51;
	                    this.value(); 
	                }
	                this.state = 56;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	            }

	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.match(Q3ConfigParser.IDENTIFIER);
	            this.state = 61;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 58;
	                    this.value(); 
	                }
	                this.state = 63;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, Q3ConfigParser.RULE_value);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 250) !== 0))) {
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

Q3ConfigParser.EOF = antlr4.Token.EOF;
Q3ConfigParser.ASSIGNMENT_KEYWORD = 1;
Q3ConfigParser.BIND_KEYWORD = 2;
Q3ConfigParser.COMMAND_KEYWORD = 3;
Q3ConfigParser.KNOWN_CVAR = 4;
Q3ConfigParser.NUMBER = 5;
Q3ConfigParser.STRING_LITERAL = 6;
Q3ConfigParser.IDENTIFIER = 7;
Q3ConfigParser.SEMICOLON = 8;
Q3ConfigParser.COMMENT = 9;
Q3ConfigParser.WS = 10;

Q3ConfigParser.RULE_configFile = 0;
Q3ConfigParser.RULE_statementList = 1;
Q3ConfigParser.RULE_statement = 2;
Q3ConfigParser.RULE_assignmentExpression = 3;
Q3ConfigParser.RULE_targetCvar = 4;
Q3ConfigParser.RULE_bindExpression = 5;
Q3ConfigParser.RULE_bindKey = 6;
Q3ConfigParser.RULE_commandExpression = 7;
Q3ConfigParser.RULE_value = 8;

class ConfigFileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ConfigParser.RULE_configFile;
    }

	statementList() {
	    return this.getTypedRuleContext(StatementListContext,0);
	};

	EOF() {
	    return this.getToken(Q3ConfigParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.enterConfigFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.exitConfigFile(this);
		}
	}


}



class StatementListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ConfigParser.RULE_statementList;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Q3ConfigParser.SEMICOLON);
	    } else {
	        return this.getToken(Q3ConfigParser.SEMICOLON, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.enterStatementList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.exitStatementList(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ConfigParser.RULE_statement;
    }

	assignmentExpression() {
	    return this.getTypedRuleContext(AssignmentExpressionContext,0);
	};

	bindExpression() {
	    return this.getTypedRuleContext(BindExpressionContext,0);
	};

	commandExpression() {
	    return this.getTypedRuleContext(CommandExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.exitStatement(this);
		}
	}


}



class AssignmentExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ConfigParser.RULE_assignmentExpression;
    }

	ASSIGNMENT_KEYWORD() {
	    return this.getToken(Q3ConfigParser.ASSIGNMENT_KEYWORD, 0);
	};

	targetCvar() {
	    return this.getTypedRuleContext(TargetCvarContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.enterAssignmentExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.exitAssignmentExpression(this);
		}
	}


}



class TargetCvarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ConfigParser.RULE_targetCvar;
    }

	KNOWN_CVAR() {
	    return this.getToken(Q3ConfigParser.KNOWN_CVAR, 0);
	};

	IDENTIFIER() {
	    return this.getToken(Q3ConfigParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.enterTargetCvar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.exitTargetCvar(this);
		}
	}


}



class BindExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ConfigParser.RULE_bindExpression;
    }

	BIND_KEYWORD() {
	    return this.getToken(Q3ConfigParser.BIND_KEYWORD, 0);
	};

	bindKey() {
	    return this.getTypedRuleContext(BindKeyContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.enterBindExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.exitBindExpression(this);
		}
	}


}



class BindKeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ConfigParser.RULE_bindKey;
    }

	IDENTIFIER() {
	    return this.getToken(Q3ConfigParser.IDENTIFIER, 0);
	};

	NUMBER() {
	    return this.getToken(Q3ConfigParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.enterBindKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.exitBindKey(this);
		}
	}


}



class CommandExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ConfigParser.RULE_commandExpression;
    }

	COMMAND_KEYWORD() {
	    return this.getToken(Q3ConfigParser.COMMAND_KEYWORD, 0);
	};

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	IDENTIFIER() {
	    return this.getToken(Q3ConfigParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.enterCommandExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.exitCommandExpression(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Q3ConfigParser.RULE_value;
    }

	STRING_LITERAL() {
	    return this.getToken(Q3ConfigParser.STRING_LITERAL, 0);
	};

	NUMBER() {
	    return this.getToken(Q3ConfigParser.NUMBER, 0);
	};

	IDENTIFIER() {
	    return this.getToken(Q3ConfigParser.IDENTIFIER, 0);
	};

	KNOWN_CVAR() {
	    return this.getToken(Q3ConfigParser.KNOWN_CVAR, 0);
	};

	ASSIGNMENT_KEYWORD() {
	    return this.getToken(Q3ConfigParser.ASSIGNMENT_KEYWORD, 0);
	};

	COMMAND_KEYWORD() {
	    return this.getToken(Q3ConfigParser.COMMAND_KEYWORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Q3ConfigParserListener ) {
	        listener.exitValue(this);
		}
	}


}




Q3ConfigParser.ConfigFileContext = ConfigFileContext; 
Q3ConfigParser.StatementListContext = StatementListContext; 
Q3ConfigParser.StatementContext = StatementContext; 
Q3ConfigParser.AssignmentExpressionContext = AssignmentExpressionContext; 
Q3ConfigParser.TargetCvarContext = TargetCvarContext; 
Q3ConfigParser.BindExpressionContext = BindExpressionContext; 
Q3ConfigParser.BindKeyContext = BindKeyContext; 
Q3ConfigParser.CommandExpressionContext = CommandExpressionContext; 
Q3ConfigParser.ValueContext = ValueContext; 
