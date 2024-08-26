// Generated from Resources/Parsers/redcode/redcode.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import redcodeListener from './redcodeListener.js';
const serializedATN = [4,1,36,60,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,1,1,1,3,1,24,8,1,1,
1,1,1,1,2,1,2,1,2,3,2,31,8,2,1,2,3,2,34,8,2,1,2,1,2,1,2,3,2,39,8,2,1,2,3,
2,42,8,2,1,2,3,2,45,8,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,3,6,54,8,6,1,6,1,6,1,
7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,4,1,0,17,32,1,0,10,16,1,0,3,7,1,0,8,
9,59,0,17,1,0,0,0,2,23,1,0,0,0,4,27,1,0,0,0,6,46,1,0,0,0,8,48,1,0,0,0,10,
50,1,0,0,0,12,53,1,0,0,0,14,57,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,19,
1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,1,1,0,0,0,21,24,3,14,7,0,22,24,3,
4,2,0,23,21,1,0,0,0,23,22,1,0,0,0,24,25,1,0,0,0,25,26,5,35,0,0,26,3,1,0,
0,0,27,30,3,6,3,0,28,29,5,1,0,0,29,31,3,8,4,0,30,28,1,0,0,0,30,31,1,0,0,
0,31,33,1,0,0,0,32,34,3,10,5,0,33,32,1,0,0,0,33,34,1,0,0,0,34,35,1,0,0,0,
35,41,3,12,6,0,36,38,5,2,0,0,37,39,3,10,5,0,38,37,1,0,0,0,38,39,1,0,0,0,
39,40,1,0,0,0,40,42,3,12,6,0,41,36,1,0,0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,
45,3,14,7,0,44,43,1,0,0,0,44,45,1,0,0,0,45,5,1,0,0,0,46,47,7,0,0,0,47,7,
1,0,0,0,48,49,7,1,0,0,49,9,1,0,0,0,50,51,7,2,0,0,51,11,1,0,0,0,52,54,7,3,
0,0,53,52,1,0,0,0,53,54,1,0,0,0,54,55,1,0,0,0,55,56,5,33,0,0,56,13,1,0,0,
0,57,58,5,34,0,0,58,15,1,0,0,0,8,19,23,30,33,38,41,44,53];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

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

    get atn() {
        return atn;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, redcodeParser.RULE_file_);
	    var _la = 0; // Token type
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
	        } while(((((_la - 17)) & ~0x1f) == 0 && ((1 << (_la - 17)) & ((1 << (redcodeParser.DAT - 17)) | (1 << (redcodeParser.MOV - 17)) | (1 << (redcodeParser.ADD - 17)) | (1 << (redcodeParser.SUB - 17)) | (1 << (redcodeParser.MUL - 17)) | (1 << (redcodeParser.DIV - 17)) | (1 << (redcodeParser.MOD - 17)) | (1 << (redcodeParser.JMP - 17)) | (1 << (redcodeParser.JMZ - 17)) | (1 << (redcodeParser.JMN - 17)) | (1 << (redcodeParser.DJN - 17)) | (1 << (redcodeParser.CMP - 17)) | (1 << (redcodeParser.SLT - 17)) | (1 << (redcodeParser.DJZ - 17)) | (1 << (redcodeParser.SPL - 17)) | (1 << (redcodeParser.ORG - 17)) | (1 << (redcodeParser.COMMENT - 17)))) !== 0));
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
	        this.state = 23;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case redcodeParser.COMMENT:
	            this.state = 21;
	            this.comment();
	            break;
	        case redcodeParser.DAT:
	        case redcodeParser.MOV:
	        case redcodeParser.ADD:
	        case redcodeParser.SUB:
	        case redcodeParser.MUL:
	        case redcodeParser.DIV:
	        case redcodeParser.MOD:
	        case redcodeParser.JMP:
	        case redcodeParser.JMZ:
	        case redcodeParser.JMN:
	        case redcodeParser.DJN:
	        case redcodeParser.CMP:
	        case redcodeParser.SLT:
	        case redcodeParser.DJZ:
	        case redcodeParser.SPL:
	        case redcodeParser.ORG:
	            this.state = 22;
	            this.instruction();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 25;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.opcode();
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===redcodeParser.T__0) {
	            this.state = 28;
	            this.match(redcodeParser.T__0);
	            this.state = 29;
	            this.modifier();
	        }

	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << redcodeParser.T__2) | (1 << redcodeParser.T__3) | (1 << redcodeParser.T__4) | (1 << redcodeParser.T__5) | (1 << redcodeParser.T__6))) !== 0)) {
	            this.state = 32;
	            this.mmode();
	        }

	        this.state = 35;
	        this.number();
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===redcodeParser.T__1) {
	            this.state = 36;
	            this.match(redcodeParser.T__1);
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << redcodeParser.T__2) | (1 << redcodeParser.T__3) | (1 << redcodeParser.T__4) | (1 << redcodeParser.T__5) | (1 << redcodeParser.T__6))) !== 0)) {
	                this.state = 37;
	                this.mmode();
	            }

	            this.state = 40;
	            this.number();
	        }

	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===redcodeParser.COMMENT) {
	            this.state = 43;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        _la = this._input.LA(1);
	        if(!(((((_la - 17)) & ~0x1f) == 0 && ((1 << (_la - 17)) & ((1 << (redcodeParser.DAT - 17)) | (1 << (redcodeParser.MOV - 17)) | (1 << (redcodeParser.ADD - 17)) | (1 << (redcodeParser.SUB - 17)) | (1 << (redcodeParser.MUL - 17)) | (1 << (redcodeParser.DIV - 17)) | (1 << (redcodeParser.MOD - 17)) | (1 << (redcodeParser.JMP - 17)) | (1 << (redcodeParser.JMZ - 17)) | (1 << (redcodeParser.JMN - 17)) | (1 << (redcodeParser.DJN - 17)) | (1 << (redcodeParser.CMP - 17)) | (1 << (redcodeParser.SLT - 17)) | (1 << (redcodeParser.DJZ - 17)) | (1 << (redcodeParser.SPL - 17)) | (1 << (redcodeParser.ORG - 17)))) !== 0))) {
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << redcodeParser.A) | (1 << redcodeParser.B) | (1 << redcodeParser.AB) | (1 << redcodeParser.BA) | (1 << redcodeParser.F) | (1 << redcodeParser.X) | (1 << redcodeParser.I))) !== 0))) {
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << redcodeParser.T__2) | (1 << redcodeParser.T__3) | (1 << redcodeParser.T__4) | (1 << redcodeParser.T__5) | (1 << redcodeParser.T__6))) !== 0))) {
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===redcodeParser.T__7 || _la===redcodeParser.T__8) {
	            this.state = 52;
	            _la = this._input.LA(1);
	            if(!(_la===redcodeParser.T__7 || _la===redcodeParser.T__8)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 55;
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
	        this.state = 57;
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
