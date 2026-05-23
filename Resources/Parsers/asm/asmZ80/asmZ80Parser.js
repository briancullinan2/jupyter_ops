// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/asm/asmZ80/asmZ80.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import asmZ80Listener from './asmZ80Listener.js';
const serializedATN = [4,1,18,146,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,5,0,38,8,0,10,0,12,
0,41,9,0,1,0,1,0,1,0,5,0,46,8,0,10,0,12,0,49,9,0,1,0,1,0,5,0,53,8,0,10,0,
12,0,56,9,0,3,0,58,8,0,1,0,1,0,1,1,3,1,63,8,1,1,1,1,1,3,1,67,8,1,1,1,3,1,
70,8,1,1,1,1,1,3,1,74,8,1,1,1,3,1,77,8,1,1,2,1,2,3,2,81,8,2,1,3,1,3,1,4,
1,4,1,5,3,5,88,8,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,3,7,97,8,7,1,8,1,8,1,8,5,
8,102,8,8,10,8,12,8,105,9,8,1,9,1,9,1,10,1,10,1,10,5,10,112,8,10,10,10,12,
10,115,9,10,1,11,1,11,1,11,5,11,120,8,11,10,11,12,11,123,9,11,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,134,8,12,1,13,1,13,1,14,1,14,1,15,
1,15,1,16,1,16,1,17,1,17,1,17,0,0,18,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,0,2,1,0,3,4,1,0,5,6,148,0,39,1,0,0,0,2,76,1,0,0,0,4,78,1,0,0,
0,6,82,1,0,0,0,8,84,1,0,0,0,10,87,1,0,0,0,12,92,1,0,0,0,14,94,1,0,0,0,16,
98,1,0,0,0,18,106,1,0,0,0,20,108,1,0,0,0,22,116,1,0,0,0,24,133,1,0,0,0,26,
135,1,0,0,0,28,137,1,0,0,0,30,139,1,0,0,0,32,141,1,0,0,0,34,143,1,0,0,0,
36,38,5,17,0,0,37,36,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,
57,1,0,0,0,41,39,1,0,0,0,42,43,3,2,1,0,43,44,5,17,0,0,44,46,1,0,0,0,45,42,
1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,50,1,0,0,0,49,47,1,
0,0,0,50,54,3,2,1,0,51,53,5,17,0,0,52,51,1,0,0,0,53,56,1,0,0,0,54,52,1,0,
0,0,54,55,1,0,0,0,55,58,1,0,0,0,56,54,1,0,0,0,57,47,1,0,0,0,57,58,1,0,0,
0,58,59,1,0,0,0,59,60,5,0,0,1,60,1,1,0,0,0,61,63,3,14,7,0,62,61,1,0,0,0,
62,63,1,0,0,0,63,66,1,0,0,0,64,67,3,4,2,0,65,67,3,10,5,0,66,64,1,0,0,0,66,
65,1,0,0,0,67,69,1,0,0,0,68,70,3,34,17,0,69,68,1,0,0,0,69,70,1,0,0,0,70,
77,1,0,0,0,71,73,3,14,7,0,72,74,3,34,17,0,73,72,1,0,0,0,73,74,1,0,0,0,74,
77,1,0,0,0,75,77,3,34,17,0,76,62,1,0,0,0,76,71,1,0,0,0,76,75,1,0,0,0,77,
3,1,0,0,0,78,80,3,6,3,0,79,81,3,16,8,0,80,79,1,0,0,0,80,81,1,0,0,0,81,5,
1,0,0,0,82,83,5,12,0,0,83,7,1,0,0,0,84,85,5,10,0,0,85,9,1,0,0,0,86,88,3,
24,12,0,87,86,1,0,0,0,87,88,1,0,0,0,88,89,1,0,0,0,89,90,3,12,6,0,90,91,3,
16,8,0,91,11,1,0,0,0,92,93,5,11,0,0,93,13,1,0,0,0,94,96,3,18,9,0,95,97,5,
1,0,0,96,95,1,0,0,0,96,97,1,0,0,0,97,15,1,0,0,0,98,103,3,20,10,0,99,100,
5,2,0,0,100,102,3,20,10,0,101,99,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,
103,104,1,0,0,0,104,17,1,0,0,0,105,103,1,0,0,0,106,107,3,30,15,0,107,19,
1,0,0,0,108,113,3,22,11,0,109,110,7,0,0,0,110,112,3,22,11,0,111,109,1,0,
0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,21,1,0,0,0,115,113,
1,0,0,0,116,121,3,24,12,0,117,118,7,1,0,0,118,120,3,24,12,0,119,117,1,0,
0,0,120,123,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,23,1,0,0,0,123,121,
1,0,0,0,124,134,3,32,16,0,125,134,3,8,4,0,126,134,3,26,13,0,127,134,3,30,
15,0,128,134,3,28,14,0,129,130,5,7,0,0,130,131,3,20,10,0,131,132,5,8,0,0,
132,134,1,0,0,0,133,124,1,0,0,0,133,125,1,0,0,0,133,126,1,0,0,0,133,127,
1,0,0,0,133,128,1,0,0,0,133,129,1,0,0,0,134,25,1,0,0,0,135,136,5,9,0,0,136,
27,1,0,0,0,137,138,5,16,0,0,138,29,1,0,0,0,139,140,5,13,0,0,140,31,1,0,0,
0,141,142,5,14,0,0,142,33,1,0,0,0,143,144,5,15,0,0,144,35,1,0,0,0,16,39,
47,54,57,62,66,69,73,76,80,87,96,103,113,121,133];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class asmZ80Parser extends antlr4.Parser {

    static grammarFileName = "asmZ80.g4";
    static literalNames = [ null, "':'", "','", "'+'", "'-'", "'*'", "'/'", 
                            "'('", "')'", "'$'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "REGISTER", "ASSEMBLER_DIRECTIVE", 
                             "OPCODE", "NAME", "NUMBER", "COMMENT", "STRING", 
                             "EOL", "WS" ];
    static ruleNames = [ "prog", "line", "instruction", "opcode", "register_", 
                         "directive", "assemblerdirective", "lbl", "expressionlist", 
                         "label", "expression", "multiplyingExpression", 
                         "argument", "dollar", "string_", "name", "number", 
                         "comment" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = asmZ80Parser.ruleNames;
        this.literalNames = asmZ80Parser.literalNames;
        this.symbolicNames = asmZ80Parser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, asmZ80Parser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 36;
	            this.match(asmZ80Parser.EOL);
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 130688) !== 0)) {
	            this.state = 47;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 42;
	                    this.line();
	                    this.state = 43;
	                    this.match(asmZ80Parser.EOL); 
	                }
	                this.state = 49;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	            }

	            this.state = 50;
	            this.line();
	            this.state = 54;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===17) {
	                this.state = 51;
	                this.match(asmZ80Parser.EOL);
	                this.state = 56;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 59;
	        this.match(asmZ80Parser.EOF);
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
	    this.enterRule(localctx, 2, asmZ80Parser.RULE_line);
	    var _la = 0;
	    try {
	        this.state = 76;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 61;
	                this.lbl();

	            }
	            this.state = 66;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 12:
	                this.state = 64;
	                this.instruction();
	                break;
	            case 7:
	            case 9:
	            case 10:
	            case 11:
	            case 13:
	            case 14:
	            case 16:
	                this.state = 65;
	                this.directive();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15) {
	                this.state = 68;
	                this.comment();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.lbl();
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15) {
	                this.state = 72;
	                this.comment();
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 75;
	            this.comment();
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



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, asmZ80Parser.RULE_instruction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.opcode();
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 91776) !== 0)) {
	            this.state = 79;
	            this.expressionlist();
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
	    this.enterRule(localctx, 6, asmZ80Parser.RULE_opcode);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(asmZ80Parser.OPCODE);
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



	register_() {
	    let localctx = new Register_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, asmZ80Parser.RULE_register_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(asmZ80Parser.REGISTER);
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



	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, asmZ80Parser.RULE_directive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 91776) !== 0)) {
	            this.state = 86;
	            this.argument();
	        }

	        this.state = 89;
	        this.assemblerdirective();
	        this.state = 90;
	        this.expressionlist();
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



	assemblerdirective() {
	    let localctx = new AssemblerdirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, asmZ80Parser.RULE_assemblerdirective);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(asmZ80Parser.ASSEMBLER_DIRECTIVE);
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



	lbl() {
	    let localctx = new LblContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, asmZ80Parser.RULE_lbl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.label();
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 95;
	            this.match(asmZ80Parser.T__0);
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



	expressionlist() {
	    let localctx = new ExpressionlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, asmZ80Parser.RULE_expressionlist);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.expression();
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 99;
	            this.match(asmZ80Parser.T__1);
	            this.state = 100;
	            this.expression();
	            this.state = 105;
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



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, asmZ80Parser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.name();
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, asmZ80Parser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.multiplyingExpression();
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===4) {
	            this.state = 109;
	            _la = this._input.LA(1);
	            if(!(_la===3 || _la===4)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 110;
	            this.multiplyingExpression();
	            this.state = 115;
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



	multiplyingExpression() {
	    let localctx = new MultiplyingExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, asmZ80Parser.RULE_multiplyingExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.argument();
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5 || _la===6) {
	            this.state = 117;
	            _la = this._input.LA(1);
	            if(!(_la===5 || _la===6)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 118;
	            this.argument();
	            this.state = 123;
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



	argument() {
	    let localctx = new ArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, asmZ80Parser.RULE_argument);
	    try {
	        this.state = 133;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 124;
	            this.number();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 125;
	            this.register_();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 126;
	            this.dollar();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 127;
	            this.name();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 128;
	            this.string_();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 129;
	            this.match(asmZ80Parser.T__6);
	            this.state = 130;
	            this.expression();
	            this.state = 131;
	            this.match(asmZ80Parser.T__7);
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



	dollar() {
	    let localctx = new DollarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, asmZ80Parser.RULE_dollar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(asmZ80Parser.T__8);
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



	string_() {
	    let localctx = new String_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, asmZ80Parser.RULE_string_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(asmZ80Parser.STRING);
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, asmZ80Parser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.match(asmZ80Parser.NAME);
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
	    this.enterRule(localctx, 32, asmZ80Parser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match(asmZ80Parser.NUMBER);
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
	    this.enterRule(localctx, 34, asmZ80Parser.RULE_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.match(asmZ80Parser.COMMENT);
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

asmZ80Parser.EOF = antlr4.Token.EOF;
asmZ80Parser.T__0 = 1;
asmZ80Parser.T__1 = 2;
asmZ80Parser.T__2 = 3;
asmZ80Parser.T__3 = 4;
asmZ80Parser.T__4 = 5;
asmZ80Parser.T__5 = 6;
asmZ80Parser.T__6 = 7;
asmZ80Parser.T__7 = 8;
asmZ80Parser.T__8 = 9;
asmZ80Parser.REGISTER = 10;
asmZ80Parser.ASSEMBLER_DIRECTIVE = 11;
asmZ80Parser.OPCODE = 12;
asmZ80Parser.NAME = 13;
asmZ80Parser.NUMBER = 14;
asmZ80Parser.COMMENT = 15;
asmZ80Parser.STRING = 16;
asmZ80Parser.EOL = 17;
asmZ80Parser.WS = 18;

asmZ80Parser.RULE_prog = 0;
asmZ80Parser.RULE_line = 1;
asmZ80Parser.RULE_instruction = 2;
asmZ80Parser.RULE_opcode = 3;
asmZ80Parser.RULE_register_ = 4;
asmZ80Parser.RULE_directive = 5;
asmZ80Parser.RULE_assemblerdirective = 6;
asmZ80Parser.RULE_lbl = 7;
asmZ80Parser.RULE_expressionlist = 8;
asmZ80Parser.RULE_label = 9;
asmZ80Parser.RULE_expression = 10;
asmZ80Parser.RULE_multiplyingExpression = 11;
asmZ80Parser.RULE_argument = 12;
asmZ80Parser.RULE_dollar = 13;
asmZ80Parser.RULE_string_ = 14;
asmZ80Parser.RULE_name = 15;
asmZ80Parser.RULE_number = 16;
asmZ80Parser.RULE_comment = 17;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmZ80Parser.RULE_prog;
    }

	EOF() {
	    return this.getToken(asmZ80Parser.EOF, 0);
	};

	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(asmZ80Parser.EOL);
	    } else {
	        return this.getToken(asmZ80Parser.EOL, i);
	    }
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
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.exitProg(this);
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
        this.ruleIndex = asmZ80Parser.RULE_line;
    }

	instruction() {
	    return this.getTypedRuleContext(InstructionContext,0);
	};

	directive() {
	    return this.getTypedRuleContext(DirectiveContext,0);
	};

	lbl() {
	    return this.getTypedRuleContext(LblContext,0);
	};

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
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
        this.ruleIndex = asmZ80Parser.RULE_instruction;
    }

	opcode() {
	    return this.getTypedRuleContext(OpcodeContext,0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
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
        this.ruleIndex = asmZ80Parser.RULE_opcode;
    }

	OPCODE() {
	    return this.getToken(asmZ80Parser.OPCODE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterOpcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.exitOpcode(this);
		}
	}


}



class Register_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmZ80Parser.RULE_register_;
    }

	REGISTER() {
	    return this.getToken(asmZ80Parser.REGISTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterRegister_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.exitRegister_(this);
		}
	}


}



class DirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmZ80Parser.RULE_directive;
    }

	assemblerdirective() {
	    return this.getTypedRuleContext(AssemblerdirectiveContext,0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	argument() {
	    return this.getTypedRuleContext(ArgumentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.exitDirective(this);
		}
	}


}



class AssemblerdirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmZ80Parser.RULE_assemblerdirective;
    }

	ASSEMBLER_DIRECTIVE() {
	    return this.getToken(asmZ80Parser.ASSEMBLER_DIRECTIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterAssemblerdirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.exitAssemblerdirective(this);
		}
	}


}



class LblContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmZ80Parser.RULE_lbl;
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterLbl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.exitLbl(this);
		}
	}


}



class ExpressionlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmZ80Parser.RULE_expressionlist;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterExpressionlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.exitExpressionlist(this);
		}
	}


}



class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmZ80Parser.RULE_label;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.exitLabel(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmZ80Parser.RULE_expression;
    }

	multiplyingExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplyingExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MultiplyingExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.exitExpression(this);
		}
	}


}



class MultiplyingExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmZ80Parser.RULE_multiplyingExpression;
    }

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
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterMultiplyingExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.exitMultiplyingExpression(this);
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
        this.ruleIndex = asmZ80Parser.RULE_argument;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	register_() {
	    return this.getTypedRuleContext(Register_Context,0);
	};

	dollar() {
	    return this.getTypedRuleContext(DollarContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	string_() {
	    return this.getTypedRuleContext(String_Context,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.exitArgument(this);
		}
	}


}



class DollarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmZ80Parser.RULE_dollar;
    }


	enterRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterDollar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.exitDollar(this);
		}
	}


}



class String_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmZ80Parser.RULE_string_;
    }

	STRING() {
	    return this.getToken(asmZ80Parser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterString_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.exitString_(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmZ80Parser.RULE_name;
    }

	NAME() {
	    return this.getToken(asmZ80Parser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.exitName(this);
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
        this.ruleIndex = asmZ80Parser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(asmZ80Parser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
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
        this.ruleIndex = asmZ80Parser.RULE_comment;
    }

	COMMENT() {
	    return this.getToken(asmZ80Parser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmZ80Listener ) {
	        listener.exitComment(this);
		}
	}


}




asmZ80Parser.ProgContext = ProgContext; 
asmZ80Parser.LineContext = LineContext; 
asmZ80Parser.InstructionContext = InstructionContext; 
asmZ80Parser.OpcodeContext = OpcodeContext; 
asmZ80Parser.Register_Context = Register_Context; 
asmZ80Parser.DirectiveContext = DirectiveContext; 
asmZ80Parser.AssemblerdirectiveContext = AssemblerdirectiveContext; 
asmZ80Parser.LblContext = LblContext; 
asmZ80Parser.ExpressionlistContext = ExpressionlistContext; 
asmZ80Parser.LabelContext = LabelContext; 
asmZ80Parser.ExpressionContext = ExpressionContext; 
asmZ80Parser.MultiplyingExpressionContext = MultiplyingExpressionContext; 
asmZ80Parser.ArgumentContext = ArgumentContext; 
asmZ80Parser.DollarContext = DollarContext; 
asmZ80Parser.String_Context = String_Context; 
asmZ80Parser.NameContext = NameContext; 
asmZ80Parser.NumberContext = NumberContext; 
asmZ80Parser.CommentContext = CommentContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
