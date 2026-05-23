// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/esolang/bio/bio.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import bioListener from './bioListener.js';
const serializedATN = [4,1,12,55,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,0,1,0,1,1,1,1,1,1,1,1,
3,1,27,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,5,4,41,8,4,10,
4,12,4,44,9,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,
12,0,1,1,0,8,10,52,0,17,1,0,0,0,2,26,1,0,0,0,4,28,1,0,0,0,6,32,1,0,0,0,8,
36,1,0,0,0,10,48,1,0,0,0,12,52,1,0,0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,19,
1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,20,1,0,0,0,19,17,1,0,0,0,20,21,5,
0,0,1,21,1,1,0,0,0,22,27,3,4,2,0,23,27,3,6,3,0,24,27,3,8,4,0,25,27,3,10,
5,0,26,22,1,0,0,0,26,23,1,0,0,0,26,24,1,0,0,0,26,25,1,0,0,0,27,3,1,0,0,0,
28,29,5,1,0,0,29,30,3,12,6,0,30,31,5,2,0,0,31,5,1,0,0,0,32,33,5,3,0,0,33,
34,3,12,6,0,34,35,5,2,0,0,35,7,1,0,0,0,36,37,5,4,0,0,37,38,3,12,6,0,38,42,
5,5,0,0,39,41,3,2,1,0,40,39,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,
0,0,0,43,45,1,0,0,0,44,42,1,0,0,0,45,46,5,6,0,0,46,47,5,2,0,0,47,9,1,0,0,
0,48,49,5,7,0,0,49,50,3,12,6,0,50,51,5,2,0,0,51,11,1,0,0,0,52,53,7,0,0,0,
53,13,1,0,0,0,3,17,26,42];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class bioParser extends antlr4.Parser {

    static grammarFileName = "bio.g4";
    static literalNames = [ null, "'0o'", "';'", "'1o'", "'0i'", "'{'", 
                            "'}'", "'1i'", "'x'", "'y'", "'z'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "COMMENT", "WS" ];
    static ruleNames = [ "program", "instruction", "incinstruction", "decinstruction", 
                         "whileinstruction", "outputinstruction", "block" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = bioParser.ruleNames;
        this.literalNames = bioParser.literalNames;
        this.symbolicNames = bioParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, bioParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 154) !== 0)) {
	            this.state = 14;
	            this.instruction();
	            this.state = 19;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 20;
	        this.match(bioParser.EOF);
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
	    this.enterRule(localctx, 2, bioParser.RULE_instruction);
	    try {
	        this.state = 26;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 22;
	            this.incinstruction();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 23;
	            this.decinstruction();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 24;
	            this.whileinstruction();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 25;
	            this.outputinstruction();
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



	incinstruction() {
	    let localctx = new IncinstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, bioParser.RULE_incinstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(bioParser.T__0);
	        this.state = 29;
	        this.block();
	        this.state = 30;
	        this.match(bioParser.T__1);
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



	decinstruction() {
	    let localctx = new DecinstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, bioParser.RULE_decinstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(bioParser.T__2);
	        this.state = 33;
	        this.block();
	        this.state = 34;
	        this.match(bioParser.T__1);
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



	whileinstruction() {
	    let localctx = new WhileinstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, bioParser.RULE_whileinstruction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(bioParser.T__3);
	        this.state = 37;
	        this.block();
	        this.state = 38;
	        this.match(bioParser.T__4);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 154) !== 0)) {
	            this.state = 39;
	            this.instruction();
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 45;
	        this.match(bioParser.T__5);
	        this.state = 46;
	        this.match(bioParser.T__1);
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



	outputinstruction() {
	    let localctx = new OutputinstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, bioParser.RULE_outputinstruction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(bioParser.T__6);
	        this.state = 49;
	        this.block();
	        this.state = 50;
	        this.match(bioParser.T__1);
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, bioParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1792) !== 0))) {
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

bioParser.EOF = antlr4.Token.EOF;
bioParser.T__0 = 1;
bioParser.T__1 = 2;
bioParser.T__2 = 3;
bioParser.T__3 = 4;
bioParser.T__4 = 5;
bioParser.T__5 = 6;
bioParser.T__6 = 7;
bioParser.T__7 = 8;
bioParser.T__8 = 9;
bioParser.T__9 = 10;
bioParser.COMMENT = 11;
bioParser.WS = 12;

bioParser.RULE_program = 0;
bioParser.RULE_instruction = 1;
bioParser.RULE_incinstruction = 2;
bioParser.RULE_decinstruction = 3;
bioParser.RULE_whileinstruction = 4;
bioParser.RULE_outputinstruction = 5;
bioParser.RULE_block = 6;

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
        this.ruleIndex = bioParser.RULE_program;
    }

	EOF() {
	    return this.getToken(bioParser.EOF, 0);
	};

	instruction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstructionContext);
	    } else {
	        return this.getTypedRuleContext(InstructionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bioListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bioListener ) {
	        listener.exitProgram(this);
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
        this.ruleIndex = bioParser.RULE_instruction;
    }

	incinstruction() {
	    return this.getTypedRuleContext(IncinstructionContext,0);
	};

	decinstruction() {
	    return this.getTypedRuleContext(DecinstructionContext,0);
	};

	whileinstruction() {
	    return this.getTypedRuleContext(WhileinstructionContext,0);
	};

	outputinstruction() {
	    return this.getTypedRuleContext(OutputinstructionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bioListener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bioListener ) {
	        listener.exitInstruction(this);
		}
	}


}



class IncinstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bioParser.RULE_incinstruction;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bioListener ) {
	        listener.enterIncinstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bioListener ) {
	        listener.exitIncinstruction(this);
		}
	}


}



class DecinstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bioParser.RULE_decinstruction;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bioListener ) {
	        listener.enterDecinstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bioListener ) {
	        listener.exitDecinstruction(this);
		}
	}


}



class WhileinstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bioParser.RULE_whileinstruction;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	instruction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstructionContext);
	    } else {
	        return this.getTypedRuleContext(InstructionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof bioListener ) {
	        listener.enterWhileinstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bioListener ) {
	        listener.exitWhileinstruction(this);
		}
	}


}



class OutputinstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bioParser.RULE_outputinstruction;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof bioListener ) {
	        listener.enterOutputinstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bioListener ) {
	        listener.exitOutputinstruction(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = bioParser.RULE_block;
    }


	enterRule(listener) {
	    if(listener instanceof bioListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof bioListener ) {
	        listener.exitBlock(this);
		}
	}


}




bioParser.ProgramContext = ProgramContext; 
bioParser.InstructionContext = InstructionContext; 
bioParser.IncinstructionContext = IncinstructionContext; 
bioParser.DecinstructionContext = DecinstructionContext; 
bioParser.WhileinstructionContext = WhileinstructionContext; 
bioParser.OutputinstructionContext = OutputinstructionContext; 
bioParser.BlockContext = BlockContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
