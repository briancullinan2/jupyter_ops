// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/redcode/redcode.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import redcodeListener from './redcodeListener.js';
const serializedATN = [4,1,36,62,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,0,1,0,1,1,1,1,3,1,
26,8,1,1,1,1,1,1,2,1,2,1,2,3,2,33,8,2,1,2,3,2,36,8,2,1,2,1,2,1,2,3,2,41,
8,2,1,2,3,2,44,8,2,1,2,3,2,47,8,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,3,6,56,8,6,
1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,4,1,0,17,32,1,0,10,16,1,0,
3,7,1,0,8,9,61,0,17,1,0,0,0,2,25,1,0,0,0,4,29,1,0,0,0,6,48,1,0,0,0,8,50,
1,0,0,0,10,52,1,0,0,0,12,55,1,0,0,0,14,59,1,0,0,0,16,18,3,2,1,0,17,16,1,
0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,21,1,0,0,0,21,22,5,0,
0,1,22,1,1,0,0,0,23,26,3,14,7,0,24,26,3,4,2,0,25,23,1,0,0,0,25,24,1,0,0,
0,26,27,1,0,0,0,27,28,5,35,0,0,28,3,1,0,0,0,29,32,3,6,3,0,30,31,5,1,0,0,
31,33,3,8,4,0,32,30,1,0,0,0,32,33,1,0,0,0,33,35,1,0,0,0,34,36,3,10,5,0,35,
34,1,0,0,0,35,36,1,0,0,0,36,37,1,0,0,0,37,43,3,12,6,0,38,40,5,2,0,0,39,41,
3,10,5,0,40,39,1,0,0,0,40,41,1,0,0,0,41,42,1,0,0,0,42,44,3,12,6,0,43,38,
1,0,0,0,43,44,1,0,0,0,44,46,1,0,0,0,45,47,3,14,7,0,46,45,1,0,0,0,46,47,1,
0,0,0,47,5,1,0,0,0,48,49,7,0,0,0,49,7,1,0,0,0,50,51,7,1,0,0,51,9,1,0,0,0,
52,53,7,2,0,0,53,11,1,0,0,0,54,56,7,3,0,0,55,54,1,0,0,0,55,56,1,0,0,0,56,
57,1,0,0,0,57,58,5,33,0,0,58,13,1,0,0,0,59,60,5,34,0,0,60,15,1,0,0,0,8,19,
25,32,35,40,43,46,55];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class redcodeParser extends antlr4.Parser {

    static grammarFileName = "redcode.g4";
    static literalNames = [ null, "'.'", "','", "'#'", "'$'", "'@'", "'<'", 
                            "'>'", "'+'", "'-'", "'A'", "'B'", "'AB'", "'BA'", 
                            "'F'", "'X'", "'I'", "'DAT'", "'MOV'", "'ADD'", 
                            "'SUB'", "'MUL'", "'DIV'", "'MOD'", "'JMP'", 
                            "'JMZ'", "'JMN'", "'DJN'", "'CMP'", "'SLT'", 
                            "'DJZ'", "'SPL'", "'ORG'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "A", "B", "AB", "BA", "F", "X", 
                             "I", "DAT", "MOV", "ADD", "SUB", "MUL", "DIV", 
                             "MOD", "JMP", "JMZ", "JMN", "DJN", "CMP", "SLT", 
                             "DJZ", "SPL", "ORG", "NUMBER", "COMMENT", "EOL", 
                             "WS" ];
    static ruleNames = [ "file_", "line", "instruction", "opcode", "modifier", 
                         "mmode", "number", "comment" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = redcodeParser.ruleNames;
        this.literalNames = redcodeParser.literalNames;
        this.symbolicNames = redcodeParser.symbolicNames;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, redcodeParser.RULE_file_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.line();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 196607) !== 0));
	        this.state = 21;
	        this.match(redcodeParser.EOF);
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, redcodeParser.RULE_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 34:
	            this.state = 23;
	            this.comment();
	            break;
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	            this.state = 24;
	            this.instruction();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 27;
	        this.match(redcodeParser.EOL);
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



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, redcodeParser.RULE_instruction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.opcode();
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 30;
	            this.match(redcodeParser.T__0);
	            this.state = 31;
	            this.modifier();
	        }

	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 248) !== 0)) {
	            this.state = 34;
	            this.mmode();
	        }

	        this.state = 37;
	        this.number();
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 38;
	            this.match(redcodeParser.T__1);
	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 248) !== 0)) {
	                this.state = 39;
	                this.mmode();
	            }

	            this.state = 42;
	            this.number();
	        }

	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 45;
	            this.comment();
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
	    this.enterRule(localctx, 6, redcodeParser.RULE_opcode);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        _la = this._input.LA(1);
	        if(!(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 65535) !== 0))) {
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



	modifier() {
	    let localctx = new ModifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, redcodeParser.RULE_modifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 130048) !== 0))) {
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



	mmode() {
	    let localctx = new MmodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, redcodeParser.RULE_mmode);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 248) !== 0))) {
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, redcodeParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8 || _la===9) {
	            this.state = 54;
	            _la = this._input.LA(1);
	            if(!(_la===8 || _la===9)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 57;
	        this.match(redcodeParser.NUMBER);
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



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, redcodeParser.RULE_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(redcodeParser.COMMENT);
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

redcodeParser.EOF = antlr4.Token.EOF;
redcodeParser.T__0 = 1;
redcodeParser.T__1 = 2;
redcodeParser.T__2 = 3;
redcodeParser.T__3 = 4;
redcodeParser.T__4 = 5;
redcodeParser.T__5 = 6;
redcodeParser.T__6 = 7;
redcodeParser.T__7 = 8;
redcodeParser.T__8 = 9;
redcodeParser.A = 10;
redcodeParser.B = 11;
redcodeParser.AB = 12;
redcodeParser.BA = 13;
redcodeParser.F = 14;
redcodeParser.X = 15;
redcodeParser.I = 16;
redcodeParser.DAT = 17;
redcodeParser.MOV = 18;
redcodeParser.ADD = 19;
redcodeParser.SUB = 20;
redcodeParser.MUL = 21;
redcodeParser.DIV = 22;
redcodeParser.MOD = 23;
redcodeParser.JMP = 24;
redcodeParser.JMZ = 25;
redcodeParser.JMN = 26;
redcodeParser.DJN = 27;
redcodeParser.CMP = 28;
redcodeParser.SLT = 29;
redcodeParser.DJZ = 30;
redcodeParser.SPL = 31;
redcodeParser.ORG = 32;
redcodeParser.NUMBER = 33;
redcodeParser.COMMENT = 34;
redcodeParser.EOL = 35;
redcodeParser.WS = 36;

redcodeParser.RULE_file_ = 0;
redcodeParser.RULE_line = 1;
redcodeParser.RULE_instruction = 2;
redcodeParser.RULE_opcode = 3;
redcodeParser.RULE_modifier = 4;
redcodeParser.RULE_mmode = 5;
redcodeParser.RULE_number = 6;
redcodeParser.RULE_comment = 7;

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
        this.ruleIndex = redcodeParser.RULE_file_;
    }

	EOF() {
	    return this.getToken(redcodeParser.EOF, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof redcodeListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof redcodeListener ) {
	        listener.exitFile_(this);
		}
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = redcodeParser.RULE_line;
    }

	EOL() {
	    return this.getToken(redcodeParser.EOL, 0);
	};

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	instruction() {
	    return this.getTypedRuleContext(InstructionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof redcodeListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof redcodeListener ) {
	        listener.exitLine(this);
		}
	}


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = redcodeParser.RULE_instruction;
    }

	opcode() {
	    return this.getTypedRuleContext(OpcodeContext,0);
	};

	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	modifier() {
	    return this.getTypedRuleContext(ModifierContext,0);
	};

	mmode = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MmodeContext);
	    } else {
	        return this.getTypedRuleContext(MmodeContext,i);
	    }
	};

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof redcodeListener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof redcodeListener ) {
	        listener.exitInstruction(this);
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
        this.ruleIndex = redcodeParser.RULE_opcode;
    }

	DAT() {
	    return this.getToken(redcodeParser.DAT, 0);
	};

	MOV() {
	    return this.getToken(redcodeParser.MOV, 0);
	};

	ADD() {
	    return this.getToken(redcodeParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(redcodeParser.SUB, 0);
	};

	MUL() {
	    return this.getToken(redcodeParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(redcodeParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(redcodeParser.MOD, 0);
	};

	JMP() {
	    return this.getToken(redcodeParser.JMP, 0);
	};

	JMZ() {
	    return this.getToken(redcodeParser.JMZ, 0);
	};

	JMN() {
	    return this.getToken(redcodeParser.JMN, 0);
	};

	DJN() {
	    return this.getToken(redcodeParser.DJN, 0);
	};

	CMP() {
	    return this.getToken(redcodeParser.CMP, 0);
	};

	SLT() {
	    return this.getToken(redcodeParser.SLT, 0);
	};

	SPL() {
	    return this.getToken(redcodeParser.SPL, 0);
	};

	ORG() {
	    return this.getToken(redcodeParser.ORG, 0);
	};

	DJZ() {
	    return this.getToken(redcodeParser.DJZ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof redcodeListener ) {
	        listener.enterOpcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof redcodeListener ) {
	        listener.exitOpcode(this);
		}
	}


}



class ModifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = redcodeParser.RULE_modifier;
    }

	A() {
	    return this.getToken(redcodeParser.A, 0);
	};

	B() {
	    return this.getToken(redcodeParser.B, 0);
	};

	AB() {
	    return this.getToken(redcodeParser.AB, 0);
	};

	BA() {
	    return this.getToken(redcodeParser.BA, 0);
	};

	F() {
	    return this.getToken(redcodeParser.F, 0);
	};

	X() {
	    return this.getToken(redcodeParser.X, 0);
	};

	I() {
	    return this.getToken(redcodeParser.I, 0);
	};

	enterRule(listener) {
	    if(listener instanceof redcodeListener ) {
	        listener.enterModifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof redcodeListener ) {
	        listener.exitModifier(this);
		}
	}


}



class MmodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = redcodeParser.RULE_mmode;
    }


	enterRule(listener) {
	    if(listener instanceof redcodeListener ) {
	        listener.enterMmode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof redcodeListener ) {
	        listener.exitMmode(this);
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
        this.ruleIndex = redcodeParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(redcodeParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof redcodeListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof redcodeListener ) {
	        listener.exitNumber(this);
		}
	}


}



class CommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = redcodeParser.RULE_comment;
    }

	COMMENT() {
	    return this.getToken(redcodeParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof redcodeListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof redcodeListener ) {
	        listener.exitComment(this);
		}
	}


}




redcodeParser.File_Context = File_Context; 
redcodeParser.LineContext = LineContext; 
redcodeParser.InstructionContext = InstructionContext; 
redcodeParser.OpcodeContext = OpcodeContext; 
redcodeParser.ModifierContext = ModifierContext; 
redcodeParser.MmodeContext = MmodeContext; 
redcodeParser.NumberContext = NumberContext; 
redcodeParser.CommentContext = CommentContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
