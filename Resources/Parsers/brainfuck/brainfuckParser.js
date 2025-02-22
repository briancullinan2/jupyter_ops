// Generated from ./brainfuck/brainfuck.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import brainfuckListener from './brainfuckListener.js';
const serializedATN = [4,1,9,26,2,0,7,0,2,1,7,1,2,2,7,2,1,0,5,0,8,8,0,10,
0,12,0,11,9,0,1,1,1,1,1,1,5,1,16,8,1,10,1,12,1,19,9,1,1,1,3,1,22,8,1,1,2,
1,2,1,2,0,0,3,0,2,4,0,1,1,0,1,6,25,0,9,1,0,0,0,2,21,1,0,0,0,4,23,1,0,0,0,
6,8,3,2,1,0,7,6,1,0,0,0,8,11,1,0,0,0,9,7,1,0,0,0,9,10,1,0,0,0,10,1,1,0,0,
0,11,9,1,0,0,0,12,22,3,4,2,0,13,17,5,7,0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,
19,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,20,1,0,0,0,19,17,1,0,0,0,20,22,
5,8,0,0,21,12,1,0,0,0,21,13,1,0,0,0,22,3,1,0,0,0,23,24,7,0,0,0,24,5,1,0,
0,0,3,9,17,21];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class brainfuckParser extends antlr4.Parser {

    static grammarFileName = "brainfuck.g4";
    static literalNames = [ null, "'>'", "'<'", "'+'", "'-'", "'.'", "','", 
                            "'['", "']'" ];
    static symbolicNames = [ null, "GT", "LT", "PLUS", "MINUS", "DOT", "COMMA", 
                             "LPAREN", "RPAREN", "WS" ];
    static ruleNames = [ "file_", "statement", "opcode" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = brainfuckParser.ruleNames;
        this.literalNames = brainfuckParser.literalNames;
        this.symbolicNames = brainfuckParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, brainfuckParser.RULE_file_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 9;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << brainfuckParser.GT) | (1 << brainfuckParser.LT) | (1 << brainfuckParser.PLUS) | (1 << brainfuckParser.MINUS) | (1 << brainfuckParser.DOT) | (1 << brainfuckParser.COMMA) | (1 << brainfuckParser.LPAREN))) !== 0)) {
	            this.state = 6;
	            this.statement();
	            this.state = 11;
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
	    this.enterRule(localctx, 2, brainfuckParser.RULE_statement);
	    var _la = 0; // Token type
	    try {
	        this.state = 21;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case brainfuckParser.GT:
	        case brainfuckParser.LT:
	        case brainfuckParser.PLUS:
	        case brainfuckParser.MINUS:
	        case brainfuckParser.DOT:
	        case brainfuckParser.COMMA:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 12;
	            this.opcode();
	            break;
	        case brainfuckParser.LPAREN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 13;
	            this.match(brainfuckParser.LPAREN);
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << brainfuckParser.GT) | (1 << brainfuckParser.LT) | (1 << brainfuckParser.PLUS) | (1 << brainfuckParser.MINUS) | (1 << brainfuckParser.DOT) | (1 << brainfuckParser.COMMA) | (1 << brainfuckParser.LPAREN))) !== 0)) {
	                this.state = 14;
	                this.statement();
	                this.state = 19;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 20;
	            this.match(brainfuckParser.RPAREN);
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



	opcode() {
	    let localctx = new OpcodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, brainfuckParser.RULE_opcode);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << brainfuckParser.GT) | (1 << brainfuckParser.LT) | (1 << brainfuckParser.PLUS) | (1 << brainfuckParser.MINUS) | (1 << brainfuckParser.DOT) | (1 << brainfuckParser.COMMA))) !== 0))) {
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

brainfuckParser.EOF = antlr4.Token.EOF;
brainfuckParser.GT = 1;
brainfuckParser.LT = 2;
brainfuckParser.PLUS = 3;
brainfuckParser.MINUS = 4;
brainfuckParser.DOT = 5;
brainfuckParser.COMMA = 6;
brainfuckParser.LPAREN = 7;
brainfuckParser.RPAREN = 8;
brainfuckParser.WS = 9;

brainfuckParser.RULE_file_ = 0;
brainfuckParser.RULE_statement = 1;
brainfuckParser.RULE_opcode = 2;

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
        this.ruleIndex = brainfuckParser.RULE_file_;
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

	enterRule(listener) {
	    if(listener instanceof brainfuckListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof brainfuckListener ) {
	        listener.exitFile_(this);
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
        this.ruleIndex = brainfuckParser.RULE_statement;
    }

	opcode() {
	    return this.getTypedRuleContext(OpcodeContext,0);
	};

	LPAREN() {
	    return this.getToken(brainfuckParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(brainfuckParser.RPAREN, 0);
	};

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

	enterRule(listener) {
	    if(listener instanceof brainfuckListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof brainfuckListener ) {
	        listener.exitStatement(this);
		}
	}


}



class OpcodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = brainfuckParser.RULE_opcode;
    }

	GT() {
	    return this.getToken(brainfuckParser.GT, 0);
	};

	LT() {
	    return this.getToken(brainfuckParser.LT, 0);
	};

	PLUS() {
	    return this.getToken(brainfuckParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(brainfuckParser.MINUS, 0);
	};

	DOT() {
	    return this.getToken(brainfuckParser.DOT, 0);
	};

	COMMA() {
	    return this.getToken(brainfuckParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof brainfuckListener ) {
	        listener.enterOpcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof brainfuckListener ) {
	        listener.exitOpcode(this);
		}
	}


}




brainfuckParser.File_Context = File_Context; 
brainfuckParser.StatementContext = StatementContext; 
brainfuckParser.OpcodeContext = OpcodeContext; 
