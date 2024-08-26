// Generated from Resources/Parsers/flowmatic/flowmatic.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import flowmaticListener from './flowmaticListener.js';
const serializedATN = [4,1,34,205,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,1,0,5,0,54,8,0,
10,0,12,0,57,9,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,66,8,1,10,1,12,1,69,9,1,
1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,5,3,93,8,3,10,3,12,3,96,9,3,1,4,1,4,1,4,1,5,1,5,1,5,1,5,
4,5,105,8,5,11,5,12,5,106,1,6,1,6,1,6,1,6,4,6,113,8,6,11,6,12,6,114,1,7,
1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,
11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,14,1,14,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,
16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,5,19,187,8,19,10,19,12,19,190,
9,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,
25,0,0,26,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,
46,48,50,0,2,2,0,29,29,33,33,2,0,26,27,31,31,199,0,55,1,0,0,0,2,61,1,0,0,
0,4,72,1,0,0,0,6,94,1,0,0,0,8,97,1,0,0,0,10,100,1,0,0,0,12,108,1,0,0,0,14,
116,1,0,0,0,16,120,1,0,0,0,18,123,1,0,0,0,20,126,1,0,0,0,22,131,1,0,0,0,
24,136,1,0,0,0,26,140,1,0,0,0,28,143,1,0,0,0,30,145,1,0,0,0,32,156,1,0,0,
0,34,167,1,0,0,0,36,173,1,0,0,0,38,181,1,0,0,0,40,191,1,0,0,0,42,193,1,0,
0,0,44,195,1,0,0,0,46,197,1,0,0,0,48,199,1,0,0,0,50,202,1,0,0,0,52,54,3,
2,1,0,53,52,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,58,1,0,
0,0,57,55,1,0,0,0,58,59,5,28,0,0,59,60,5,0,0,1,60,1,1,0,0,0,61,62,3,4,2,
0,62,67,3,6,3,0,63,64,5,1,0,0,64,66,3,6,3,0,65,63,1,0,0,0,66,69,1,0,0,0,
67,65,1,0,0,0,67,68,1,0,0,0,68,70,1,0,0,0,69,67,1,0,0,0,70,71,5,2,0,0,71,
3,1,0,0,0,72,73,5,3,0,0,73,74,5,33,0,0,74,75,5,4,0,0,75,5,1,0,0,0,76,93,
3,38,19,0,77,93,3,36,18,0,78,93,3,34,17,0,79,93,3,32,16,0,80,93,3,30,15,
0,81,93,3,24,12,0,82,93,3,28,14,0,83,93,3,26,13,0,84,93,3,20,10,0,85,93,
3,18,9,0,86,93,3,14,7,0,87,93,3,16,8,0,88,93,3,12,6,0,89,93,3,8,4,0,90,93,
3,10,5,0,91,93,3,22,11,0,92,76,1,0,0,0,92,77,1,0,0,0,92,78,1,0,0,0,92,79,
1,0,0,0,92,80,1,0,0,0,92,81,1,0,0,0,92,82,1,0,0,0,92,83,1,0,0,0,92,84,1,
0,0,0,92,85,1,0,0,0,92,86,1,0,0,0,92,87,1,0,0,0,92,88,1,0,0,0,92,89,1,0,
0,0,92,90,1,0,0,0,92,91,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,
0,95,7,1,0,0,0,96,94,1,0,0,0,97,98,5,5,0,0,98,99,3,44,22,0,99,9,1,0,0,0,
100,104,5,6,0,0,101,102,3,42,21,0,102,103,3,44,22,0,103,105,1,0,0,0,104,
101,1,0,0,0,105,106,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,11,1,0,0,
0,108,112,5,7,0,0,109,110,3,42,21,0,110,111,3,44,22,0,111,113,1,0,0,0,112,
109,1,0,0,0,113,114,1,0,0,0,114,112,1,0,0,0,114,115,1,0,0,0,115,13,1,0,0,
0,116,117,5,8,0,0,117,118,5,9,0,0,118,119,3,48,24,0,119,15,1,0,0,0,120,121,
5,10,0,0,121,122,3,44,22,0,122,17,1,0,0,0,123,124,5,11,0,0,124,125,3,44,
22,0,125,19,1,0,0,0,126,127,5,12,0,0,127,128,3,44,22,0,128,129,5,9,0,0,129,
130,3,44,22,0,130,21,1,0,0,0,131,132,5,13,0,0,132,133,3,50,25,0,133,134,
5,30,0,0,134,135,3,48,24,0,135,23,1,0,0,0,136,137,5,14,0,0,137,138,5,30,
0,0,138,139,3,48,24,0,139,25,1,0,0,0,140,141,5,15,0,0,141,142,3,44,22,0,
142,27,1,0,0,0,143,144,5,16,0,0,144,29,1,0,0,0,145,146,5,17,0,0,146,147,
3,46,23,0,147,148,5,3,0,0,148,149,3,44,22,0,149,150,5,4,0,0,150,151,5,18,
0,0,151,152,3,46,23,0,152,153,5,3,0,0,153,154,3,44,22,0,154,155,5,4,0,0,
155,31,1,0,0,0,156,157,5,19,0,0,157,158,3,46,23,0,158,159,5,3,0,0,159,160,
3,44,22,0,160,161,5,4,0,0,161,162,5,9,0,0,162,163,3,46,23,0,163,164,5,3,
0,0,164,165,3,44,22,0,165,166,5,4,0,0,166,33,1,0,0,0,167,168,5,20,0,0,168,
169,3,48,24,0,169,170,5,9,0,0,170,171,5,30,0,0,171,172,3,48,24,0,172,35,
1,0,0,0,173,174,5,21,0,0,174,175,3,46,23,0,175,176,5,3,0,0,176,177,3,44,
22,0,177,178,5,4,0,0,178,179,5,22,0,0,179,180,3,40,20,0,180,37,1,0,0,0,181,
182,5,23,0,0,182,183,5,24,0,0,183,188,3,44,22,0,184,185,5,1,0,0,185,187,
3,44,22,0,186,184,1,0,0,0,187,190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,
0,189,39,1,0,0,0,190,188,1,0,0,0,191,192,7,0,0,0,192,41,1,0,0,0,193,194,
5,32,0,0,194,43,1,0,0,0,195,196,5,32,0,0,196,45,1,0,0,0,197,198,5,32,0,0,
198,47,1,0,0,0,199,200,5,25,0,0,200,201,5,33,0,0,201,49,1,0,0,0,202,203,
7,1,0,0,203,51,1,0,0,0,7,55,67,92,94,106,114,188];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class flowmaticParser extends antlr4.Parser {

    static grammarFileName = "flowmatic.g4";
    static literalNames = [ null, "';'", "'.'", "'('", "')'", "'HSP'", "'OUTPUT'", 
                            "'INPUT'", "'JUMP'", "'TO'", "'READ-ITEM'", 
                            "'WRITE-ITEM'", "'TRANSFER'", "'IF'", "'OTHERWISE'", 
                            "'REWIND'", "'STOP'", "'COMPARE'", "'WITH'", 
                            "'MOVE'", "'SET'", "'TEST'", "'AGAINST'", "'CLOSE-OUT'", 
                            "'FILES'", "'OPERATION'", "'EQUAL'", "'GREATER'", 
                            null, null, "'GO TO'", "'END OF DATA'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "END", "ZERO", "GOTO", 
                             "EOD", "ID", "NUM", "WS" ];
    static ruleNames = [ "flowmatic", "line", "label", "statement", "hsp_statement", 
                         "output_statement", "input_statement", "jumpto_statement", 
                         "readitem_statement", "writeitem_statement", "transfer_statement", 
                         "if_statement", "otherwise_statement", "rewind_statement", 
                         "stop_statement", "compare_statement", "move_statement", 
                         "set_statement", "test_statement", "closeout_statement", 
                         "num", "filename", "fileletter", "fieldname", "operation", 
                         "op" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = flowmaticParser.ruleNames;
        this.literalNames = flowmaticParser.literalNames;
        this.symbolicNames = flowmaticParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	flowmatic() {
	    let localctx = new FlowmaticContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, flowmaticParser.RULE_flowmatic);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===flowmaticParser.T__2) {
	            this.state = 52;
	            this.line();
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 58;
	        this.match(flowmaticParser.END);
	        this.state = 59;
	        this.match(flowmaticParser.EOF);
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
	    this.enterRule(localctx, 2, flowmaticParser.RULE_line);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.label();
	        this.state = 62;
	        this.statement();
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===flowmaticParser.T__0) {
	            this.state = 63;
	            this.match(flowmaticParser.T__0);
	            this.state = 64;
	            this.statement();
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 70;
	        this.match(flowmaticParser.T__1);
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
	    this.enterRule(localctx, 4, flowmaticParser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(flowmaticParser.T__2);
	        this.state = 73;
	        this.match(flowmaticParser.NUM);
	        this.state = 74;
	        this.match(flowmaticParser.T__3);
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
	    this.enterRule(localctx, 6, flowmaticParser.RULE_statement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << flowmaticParser.T__4) | (1 << flowmaticParser.T__5) | (1 << flowmaticParser.T__6) | (1 << flowmaticParser.T__7) | (1 << flowmaticParser.T__9) | (1 << flowmaticParser.T__10) | (1 << flowmaticParser.T__11) | (1 << flowmaticParser.T__12) | (1 << flowmaticParser.T__13) | (1 << flowmaticParser.T__14) | (1 << flowmaticParser.T__15) | (1 << flowmaticParser.T__16) | (1 << flowmaticParser.T__18) | (1 << flowmaticParser.T__19) | (1 << flowmaticParser.T__20) | (1 << flowmaticParser.T__22))) !== 0)) {
	            this.state = 92;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case flowmaticParser.T__22:
	                this.state = 76;
	                this.closeout_statement();
	                break;
	            case flowmaticParser.T__20:
	                this.state = 77;
	                this.test_statement();
	                break;
	            case flowmaticParser.T__19:
	                this.state = 78;
	                this.set_statement();
	                break;
	            case flowmaticParser.T__18:
	                this.state = 79;
	                this.move_statement();
	                break;
	            case flowmaticParser.T__16:
	                this.state = 80;
	                this.compare_statement();
	                break;
	            case flowmaticParser.T__13:
	                this.state = 81;
	                this.otherwise_statement();
	                break;
	            case flowmaticParser.T__15:
	                this.state = 82;
	                this.stop_statement();
	                break;
	            case flowmaticParser.T__14:
	                this.state = 83;
	                this.rewind_statement();
	                break;
	            case flowmaticParser.T__11:
	                this.state = 84;
	                this.transfer_statement();
	                break;
	            case flowmaticParser.T__10:
	                this.state = 85;
	                this.writeitem_statement();
	                break;
	            case flowmaticParser.T__7:
	                this.state = 86;
	                this.jumpto_statement();
	                break;
	            case flowmaticParser.T__9:
	                this.state = 87;
	                this.readitem_statement();
	                break;
	            case flowmaticParser.T__6:
	                this.state = 88;
	                this.input_statement();
	                break;
	            case flowmaticParser.T__4:
	                this.state = 89;
	                this.hsp_statement();
	                break;
	            case flowmaticParser.T__5:
	                this.state = 90;
	                this.output_statement();
	                break;
	            case flowmaticParser.T__12:
	                this.state = 91;
	                this.if_statement();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 96;
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



	hsp_statement() {
	    let localctx = new Hsp_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, flowmaticParser.RULE_hsp_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(flowmaticParser.T__4);
	        this.state = 98;
	        this.fileletter();
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



	output_statement() {
	    let localctx = new Output_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, flowmaticParser.RULE_output_statement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(flowmaticParser.T__5);
	        this.state = 104; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 101;
	            this.filename();
	            this.state = 102;
	            this.fileletter();
	            this.state = 106; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===flowmaticParser.ID);
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



	input_statement() {
	    let localctx = new Input_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, flowmaticParser.RULE_input_statement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(flowmaticParser.T__6);
	        this.state = 112; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 109;
	            this.filename();
	            this.state = 110;
	            this.fileletter();
	            this.state = 114; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===flowmaticParser.ID);
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



	jumpto_statement() {
	    let localctx = new Jumpto_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, flowmaticParser.RULE_jumpto_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(flowmaticParser.T__7);
	        this.state = 117;
	        this.match(flowmaticParser.T__8);
	        this.state = 118;
	        this.operation();
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



	readitem_statement() {
	    let localctx = new Readitem_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, flowmaticParser.RULE_readitem_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(flowmaticParser.T__9);
	        this.state = 121;
	        this.fileletter();
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



	writeitem_statement() {
	    let localctx = new Writeitem_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, flowmaticParser.RULE_writeitem_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(flowmaticParser.T__10);
	        this.state = 124;
	        this.fileletter();
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



	transfer_statement() {
	    let localctx = new Transfer_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, flowmaticParser.RULE_transfer_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(flowmaticParser.T__11);
	        this.state = 127;
	        this.fileletter();
	        this.state = 128;
	        this.match(flowmaticParser.T__8);
	        this.state = 129;
	        this.fileletter();
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



	if_statement() {
	    let localctx = new If_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, flowmaticParser.RULE_if_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(flowmaticParser.T__12);
	        this.state = 132;
	        this.op();
	        this.state = 133;
	        this.match(flowmaticParser.GOTO);
	        this.state = 134;
	        this.operation();
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



	otherwise_statement() {
	    let localctx = new Otherwise_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, flowmaticParser.RULE_otherwise_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(flowmaticParser.T__13);
	        this.state = 137;
	        this.match(flowmaticParser.GOTO);
	        this.state = 138;
	        this.operation();
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



	rewind_statement() {
	    let localctx = new Rewind_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, flowmaticParser.RULE_rewind_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(flowmaticParser.T__14);
	        this.state = 141;
	        this.fileletter();
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



	stop_statement() {
	    let localctx = new Stop_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, flowmaticParser.RULE_stop_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.match(flowmaticParser.T__15);
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



	compare_statement() {
	    let localctx = new Compare_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, flowmaticParser.RULE_compare_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.match(flowmaticParser.T__16);
	        this.state = 146;
	        this.fieldname();
	        this.state = 147;
	        this.match(flowmaticParser.T__2);
	        this.state = 148;
	        this.fileletter();
	        this.state = 149;
	        this.match(flowmaticParser.T__3);
	        this.state = 150;
	        this.match(flowmaticParser.T__17);
	        this.state = 151;
	        this.fieldname();
	        this.state = 152;
	        this.match(flowmaticParser.T__2);
	        this.state = 153;
	        this.fileletter();
	        this.state = 154;
	        this.match(flowmaticParser.T__3);
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



	move_statement() {
	    let localctx = new Move_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, flowmaticParser.RULE_move_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(flowmaticParser.T__18);
	        this.state = 157;
	        this.fieldname();
	        this.state = 158;
	        this.match(flowmaticParser.T__2);
	        this.state = 159;
	        this.fileletter();
	        this.state = 160;
	        this.match(flowmaticParser.T__3);
	        this.state = 161;
	        this.match(flowmaticParser.T__8);
	        this.state = 162;
	        this.fieldname();
	        this.state = 163;
	        this.match(flowmaticParser.T__2);
	        this.state = 164;
	        this.fileletter();
	        this.state = 165;
	        this.match(flowmaticParser.T__3);
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



	set_statement() {
	    let localctx = new Set_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, flowmaticParser.RULE_set_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(flowmaticParser.T__19);
	        this.state = 168;
	        this.operation();
	        this.state = 169;
	        this.match(flowmaticParser.T__8);
	        this.state = 170;
	        this.match(flowmaticParser.GOTO);
	        this.state = 171;
	        this.operation();
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



	test_statement() {
	    let localctx = new Test_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, flowmaticParser.RULE_test_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(flowmaticParser.T__20);
	        this.state = 174;
	        this.fieldname();
	        this.state = 175;
	        this.match(flowmaticParser.T__2);
	        this.state = 176;
	        this.fileletter();
	        this.state = 177;
	        this.match(flowmaticParser.T__3);
	        this.state = 178;
	        this.match(flowmaticParser.T__21);
	        this.state = 179;
	        this.num();
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



	closeout_statement() {
	    let localctx = new Closeout_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, flowmaticParser.RULE_closeout_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this.match(flowmaticParser.T__22);
	        this.state = 182;
	        this.match(flowmaticParser.T__23);
	        this.state = 183;
	        this.fileletter();
	        this.state = 188;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 184;
	                this.match(flowmaticParser.T__0);
	                this.state = 185;
	                this.fileletter(); 
	            }
	            this.state = 190;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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



	num() {
	    let localctx = new NumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, flowmaticParser.RULE_num);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        _la = this._input.LA(1);
	        if(!(_la===flowmaticParser.ZERO || _la===flowmaticParser.NUM)) {
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



	filename() {
	    let localctx = new FilenameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, flowmaticParser.RULE_filename);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(flowmaticParser.ID);
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



	fileletter() {
	    let localctx = new FileletterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, flowmaticParser.RULE_fileletter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(flowmaticParser.ID);
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



	fieldname() {
	    let localctx = new FieldnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, flowmaticParser.RULE_fieldname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.match(flowmaticParser.ID);
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



	operation() {
	    let localctx = new OperationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, flowmaticParser.RULE_operation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(flowmaticParser.T__24);
	        this.state = 200;
	        this.match(flowmaticParser.NUM);
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



	op() {
	    let localctx = new OpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, flowmaticParser.RULE_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << flowmaticParser.T__25) | (1 << flowmaticParser.T__26) | (1 << flowmaticParser.EOD))) !== 0))) {
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

flowmaticParser.EOF = antlr4.Token.EOF;
flowmaticParser.T__0 = 1;
flowmaticParser.T__1 = 2;
flowmaticParser.T__2 = 3;
flowmaticParser.T__3 = 4;
flowmaticParser.T__4 = 5;
flowmaticParser.T__5 = 6;
flowmaticParser.T__6 = 7;
flowmaticParser.T__7 = 8;
flowmaticParser.T__8 = 9;
flowmaticParser.T__9 = 10;
flowmaticParser.T__10 = 11;
flowmaticParser.T__11 = 12;
flowmaticParser.T__12 = 13;
flowmaticParser.T__13 = 14;
flowmaticParser.T__14 = 15;
flowmaticParser.T__15 = 16;
flowmaticParser.T__16 = 17;
flowmaticParser.T__17 = 18;
flowmaticParser.T__18 = 19;
flowmaticParser.T__19 = 20;
flowmaticParser.T__20 = 21;
flowmaticParser.T__21 = 22;
flowmaticParser.T__22 = 23;
flowmaticParser.T__23 = 24;
flowmaticParser.T__24 = 25;
flowmaticParser.T__25 = 26;
flowmaticParser.T__26 = 27;
flowmaticParser.END = 28;
flowmaticParser.ZERO = 29;
flowmaticParser.GOTO = 30;
flowmaticParser.EOD = 31;
flowmaticParser.ID = 32;
flowmaticParser.NUM = 33;
flowmaticParser.WS = 34;

flowmaticParser.RULE_flowmatic = 0;
flowmaticParser.RULE_line = 1;
flowmaticParser.RULE_label = 2;
flowmaticParser.RULE_statement = 3;
flowmaticParser.RULE_hsp_statement = 4;
flowmaticParser.RULE_output_statement = 5;
flowmaticParser.RULE_input_statement = 6;
flowmaticParser.RULE_jumpto_statement = 7;
flowmaticParser.RULE_readitem_statement = 8;
flowmaticParser.RULE_writeitem_statement = 9;
flowmaticParser.RULE_transfer_statement = 10;
flowmaticParser.RULE_if_statement = 11;
flowmaticParser.RULE_otherwise_statement = 12;
flowmaticParser.RULE_rewind_statement = 13;
flowmaticParser.RULE_stop_statement = 14;
flowmaticParser.RULE_compare_statement = 15;
flowmaticParser.RULE_move_statement = 16;
flowmaticParser.RULE_set_statement = 17;
flowmaticParser.RULE_test_statement = 18;
flowmaticParser.RULE_closeout_statement = 19;
flowmaticParser.RULE_num = 20;
flowmaticParser.RULE_filename = 21;
flowmaticParser.RULE_fileletter = 22;
flowmaticParser.RULE_fieldname = 23;
flowmaticParser.RULE_operation = 24;
flowmaticParser.RULE_op = 25;

class FlowmaticContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_flowmatic;
    }

	END() {
	    return this.getToken(flowmaticParser.END, 0);
	};

	EOF() {
	    return this.getToken(flowmaticParser.EOF, 0);
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
	    if(listener instanceof flowmaticListener ) {
	        listener.enterFlowmatic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitFlowmatic(this);
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
        this.ruleIndex = flowmaticParser.RULE_line;
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
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
	    if(listener instanceof flowmaticListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitLine(this);
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
        this.ruleIndex = flowmaticParser.RULE_label;
    }

	NUM() {
	    return this.getToken(flowmaticParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitLabel(this);
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
        this.ruleIndex = flowmaticParser.RULE_statement;
    }

	closeout_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Closeout_statementContext);
	    } else {
	        return this.getTypedRuleContext(Closeout_statementContext,i);
	    }
	};

	test_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Test_statementContext);
	    } else {
	        return this.getTypedRuleContext(Test_statementContext,i);
	    }
	};

	set_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Set_statementContext);
	    } else {
	        return this.getTypedRuleContext(Set_statementContext,i);
	    }
	};

	move_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Move_statementContext);
	    } else {
	        return this.getTypedRuleContext(Move_statementContext,i);
	    }
	};

	compare_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Compare_statementContext);
	    } else {
	        return this.getTypedRuleContext(Compare_statementContext,i);
	    }
	};

	otherwise_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Otherwise_statementContext);
	    } else {
	        return this.getTypedRuleContext(Otherwise_statementContext,i);
	    }
	};

	stop_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Stop_statementContext);
	    } else {
	        return this.getTypedRuleContext(Stop_statementContext,i);
	    }
	};

	rewind_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rewind_statementContext);
	    } else {
	        return this.getTypedRuleContext(Rewind_statementContext,i);
	    }
	};

	transfer_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Transfer_statementContext);
	    } else {
	        return this.getTypedRuleContext(Transfer_statementContext,i);
	    }
	};

	writeitem_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Writeitem_statementContext);
	    } else {
	        return this.getTypedRuleContext(Writeitem_statementContext,i);
	    }
	};

	jumpto_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Jumpto_statementContext);
	    } else {
	        return this.getTypedRuleContext(Jumpto_statementContext,i);
	    }
	};

	readitem_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Readitem_statementContext);
	    } else {
	        return this.getTypedRuleContext(Readitem_statementContext,i);
	    }
	};

	input_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Input_statementContext);
	    } else {
	        return this.getTypedRuleContext(Input_statementContext,i);
	    }
	};

	hsp_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Hsp_statementContext);
	    } else {
	        return this.getTypedRuleContext(Hsp_statementContext,i);
	    }
	};

	output_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Output_statementContext);
	    } else {
	        return this.getTypedRuleContext(Output_statementContext,i);
	    }
	};

	if_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(If_statementContext);
	    } else {
	        return this.getTypedRuleContext(If_statementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitStatement(this);
		}
	}


}



class Hsp_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_hsp_statement;
    }

	fileletter() {
	    return this.getTypedRuleContext(FileletterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterHsp_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitHsp_statement(this);
		}
	}


}



class Output_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_output_statement;
    }

	filename = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FilenameContext);
	    } else {
	        return this.getTypedRuleContext(FilenameContext,i);
	    }
	};

	fileletter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FileletterContext);
	    } else {
	        return this.getTypedRuleContext(FileletterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterOutput_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitOutput_statement(this);
		}
	}


}



class Input_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_input_statement;
    }

	filename = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FilenameContext);
	    } else {
	        return this.getTypedRuleContext(FilenameContext,i);
	    }
	};

	fileletter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FileletterContext);
	    } else {
	        return this.getTypedRuleContext(FileletterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterInput_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitInput_statement(this);
		}
	}


}



class Jumpto_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_jumpto_statement;
    }

	operation() {
	    return this.getTypedRuleContext(OperationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterJumpto_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitJumpto_statement(this);
		}
	}


}



class Readitem_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_readitem_statement;
    }

	fileletter() {
	    return this.getTypedRuleContext(FileletterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterReaditem_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitReaditem_statement(this);
		}
	}


}



class Writeitem_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_writeitem_statement;
    }

	fileletter() {
	    return this.getTypedRuleContext(FileletterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterWriteitem_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitWriteitem_statement(this);
		}
	}


}



class Transfer_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_transfer_statement;
    }

	fileletter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FileletterContext);
	    } else {
	        return this.getTypedRuleContext(FileletterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterTransfer_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitTransfer_statement(this);
		}
	}


}



class If_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_if_statement;
    }

	op() {
	    return this.getTypedRuleContext(OpContext,0);
	};

	GOTO() {
	    return this.getToken(flowmaticParser.GOTO, 0);
	};

	operation() {
	    return this.getTypedRuleContext(OperationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterIf_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitIf_statement(this);
		}
	}


}



class Otherwise_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_otherwise_statement;
    }

	GOTO() {
	    return this.getToken(flowmaticParser.GOTO, 0);
	};

	operation() {
	    return this.getTypedRuleContext(OperationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterOtherwise_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitOtherwise_statement(this);
		}
	}


}



class Rewind_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_rewind_statement;
    }

	fileletter() {
	    return this.getTypedRuleContext(FileletterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterRewind_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitRewind_statement(this);
		}
	}


}



class Stop_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_stop_statement;
    }


	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterStop_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitStop_statement(this);
		}
	}


}



class Compare_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_compare_statement;
    }

	fieldname = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldnameContext);
	    } else {
	        return this.getTypedRuleContext(FieldnameContext,i);
	    }
	};

	fileletter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FileletterContext);
	    } else {
	        return this.getTypedRuleContext(FileletterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterCompare_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitCompare_statement(this);
		}
	}


}



class Move_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_move_statement;
    }

	fieldname = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldnameContext);
	    } else {
	        return this.getTypedRuleContext(FieldnameContext,i);
	    }
	};

	fileletter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FileletterContext);
	    } else {
	        return this.getTypedRuleContext(FileletterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterMove_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitMove_statement(this);
		}
	}


}



class Set_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_set_statement;
    }

	operation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperationContext);
	    } else {
	        return this.getTypedRuleContext(OperationContext,i);
	    }
	};

	GOTO() {
	    return this.getToken(flowmaticParser.GOTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterSet_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitSet_statement(this);
		}
	}


}



class Test_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_test_statement;
    }

	fieldname() {
	    return this.getTypedRuleContext(FieldnameContext,0);
	};

	fileletter() {
	    return this.getTypedRuleContext(FileletterContext,0);
	};

	num() {
	    return this.getTypedRuleContext(NumContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterTest_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitTest_statement(this);
		}
	}


}



class Closeout_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_closeout_statement;
    }

	fileletter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FileletterContext);
	    } else {
	        return this.getTypedRuleContext(FileletterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterCloseout_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitCloseout_statement(this);
		}
	}


}



class NumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_num;
    }

	NUM() {
	    return this.getToken(flowmaticParser.NUM, 0);
	};

	ZERO() {
	    return this.getToken(flowmaticParser.ZERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitNum(this);
		}
	}


}



class FilenameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_filename;
    }

	ID() {
	    return this.getToken(flowmaticParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterFilename(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitFilename(this);
		}
	}


}



class FileletterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_fileletter;
    }

	ID() {
	    return this.getToken(flowmaticParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterFileletter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitFileletter(this);
		}
	}


}



class FieldnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_fieldname;
    }

	ID() {
	    return this.getToken(flowmaticParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterFieldname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitFieldname(this);
		}
	}


}



class OperationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_operation;
    }

	NUM() {
	    return this.getToken(flowmaticParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterOperation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitOperation(this);
		}
	}


}



class OpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = flowmaticParser.RULE_op;
    }

	EOD() {
	    return this.getToken(flowmaticParser.EOD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.enterOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof flowmaticListener ) {
	        listener.exitOp(this);
		}
	}


}




flowmaticParser.FlowmaticContext = FlowmaticContext; 
flowmaticParser.LineContext = LineContext; 
flowmaticParser.LabelContext = LabelContext; 
flowmaticParser.StatementContext = StatementContext; 
flowmaticParser.Hsp_statementContext = Hsp_statementContext; 
flowmaticParser.Output_statementContext = Output_statementContext; 
flowmaticParser.Input_statementContext = Input_statementContext; 
flowmaticParser.Jumpto_statementContext = Jumpto_statementContext; 
flowmaticParser.Readitem_statementContext = Readitem_statementContext; 
flowmaticParser.Writeitem_statementContext = Writeitem_statementContext; 
flowmaticParser.Transfer_statementContext = Transfer_statementContext; 
flowmaticParser.If_statementContext = If_statementContext; 
flowmaticParser.Otherwise_statementContext = Otherwise_statementContext; 
flowmaticParser.Rewind_statementContext = Rewind_statementContext; 
flowmaticParser.Stop_statementContext = Stop_statementContext; 
flowmaticParser.Compare_statementContext = Compare_statementContext; 
flowmaticParser.Move_statementContext = Move_statementContext; 
flowmaticParser.Set_statementContext = Set_statementContext; 
flowmaticParser.Test_statementContext = Test_statementContext; 
flowmaticParser.Closeout_statementContext = Closeout_statementContext; 
flowmaticParser.NumContext = NumContext; 
flowmaticParser.FilenameContext = FilenameContext; 
flowmaticParser.FileletterContext = FileletterContext; 
flowmaticParser.FieldnameContext = FieldnameContext; 
flowmaticParser.OperationContext = OperationContext; 
flowmaticParser.OpContext = OpContext; 
