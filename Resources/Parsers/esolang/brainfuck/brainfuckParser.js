// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/esolang/brainfuck/brainfuck.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import brainfuckListener from './brainfuckListener.js';
const serializedATN = [4,1,9,28,2,0,7,0,2,1,7,1,2,2,7,2,1,0,5,0,8,8,0,10,
0,12,0,11,9,0,1,0,1,0,1,1,1,1,1,1,5,1,18,8,1,10,1,12,1,21,9,1,1,1,3,1,24,
8,1,1,2,1,2,1,2,0,0,3,0,2,4,0,1,1,0,1,6,27,0,9,1,0,0,0,2,23,1,0,0,0,4,25,
1,0,0,0,6,8,3,2,1,0,7,6,1,0,0,0,8,11,1,0,0,0,9,7,1,0,0,0,9,10,1,0,0,0,10,
12,1,0,0,0,11,9,1,0,0,0,12,13,5,0,0,1,13,1,1,0,0,0,14,24,3,4,2,0,15,19,5,
7,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,20,1,0,
0,0,20,22,1,0,0,0,21,19,1,0,0,0,22,24,5,8,0,0,23,14,1,0,0,0,23,15,1,0,0,
0,24,3,1,0,0,0,25,26,7,0,0,0,26,5,1,0,0,0,3,9,19,23];


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



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, brainfuckParser.RULE_file_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 9;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 254) !== 0)) {
	            this.state = 6;
	            this.statement();
	            this.state = 11;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 12;
	        this.match(brainfuckParser.EOF);
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
	    var _la = 0;
	    try {
	        this.state = 23;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 14;
	            this.opcode();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 15;
	            this.match(brainfuckParser.LPAREN);
	            this.state = 19;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 254) !== 0)) {
	                this.state = 16;
	                this.statement();
	                this.state = 21;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 22;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 126) !== 0))) {
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

	EOF() {
	    return this.getToken(brainfuckParser.EOF, 0);
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

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
