// Generated from Resources/Parsers/lolcode/lolcode.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import lolcodeListener from './lolcodeListener.js';
const serializedATN = [4,1,44,274,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,1,0,1,0,1,0,3,0,62,8,0,1,1,4,1,65,8,1,11,1,12,1,66,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,78,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,4,1,4,1,4,1,4,1,4,3,4,93,8,4,1,5,1,5,1,5,1,5,1,5,3,5,100,8,5,1,6,1,6,5,
6,104,8,6,10,6,12,6,107,9,6,1,6,3,6,110,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,3,7,123,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
3,8,136,8,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,148,8,10,
10,10,12,10,151,9,10,3,10,153,8,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,
12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,3,12,180,8,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,
1,14,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,
17,1,17,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,
1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,
23,1,23,1,23,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,5,25,245,8,25,10,25,
12,25,248,9,25,1,25,1,25,1,26,1,26,1,26,1,26,5,26,256,8,26,10,26,12,26,259,
9,26,1,26,1,26,1,27,1,27,1,27,1,28,1,28,4,28,268,8,28,11,28,12,28,269,1,
28,1,28,1,28,0,0,29,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,50,52,54,56,0,0,283,0,58,1,0,0,0,2,64,1,0,0,0,4,77,1,0,
0,0,6,79,1,0,0,0,8,92,1,0,0,0,10,99,1,0,0,0,12,101,1,0,0,0,14,122,1,0,0,
0,16,135,1,0,0,0,18,137,1,0,0,0,20,140,1,0,0,0,22,157,1,0,0,0,24,179,1,0,
0,0,26,181,1,0,0,0,28,186,1,0,0,0,30,191,1,0,0,0,32,196,1,0,0,0,34,201,1,
0,0,0,36,206,1,0,0,0,38,211,1,0,0,0,40,216,1,0,0,0,42,221,1,0,0,0,44,226,
1,0,0,0,46,231,1,0,0,0,48,236,1,0,0,0,50,240,1,0,0,0,52,251,1,0,0,0,54,262,
1,0,0,0,56,265,1,0,0,0,58,59,5,1,0,0,59,61,3,2,1,0,60,62,5,2,0,0,61,60,1,
0,0,0,61,62,1,0,0,0,62,1,1,0,0,0,63,65,3,4,2,0,64,63,1,0,0,0,65,66,1,0,0,
0,66,64,1,0,0,0,66,67,1,0,0,0,67,3,1,0,0,0,68,78,3,6,3,0,69,78,3,8,4,0,70,
78,3,10,5,0,71,78,3,12,6,0,72,78,3,14,7,0,73,78,3,18,9,0,74,78,3,20,10,0,
75,78,3,22,11,0,76,78,3,24,12,0,77,68,1,0,0,0,77,69,1,0,0,0,77,70,1,0,0,
0,77,71,1,0,0,0,77,72,1,0,0,0,77,73,1,0,0,0,77,74,1,0,0,0,77,75,1,0,0,0,
77,76,1,0,0,0,78,5,1,0,0,0,79,80,5,3,0,0,80,81,5,41,0,0,81,82,5,4,0,0,82,
83,3,24,12,0,83,84,3,2,1,0,84,85,5,5,0,0,85,86,5,41,0,0,86,7,1,0,0,0,87,
88,5,6,0,0,88,93,5,41,0,0,89,90,5,6,0,0,90,91,5,41,0,0,91,93,5,7,0,0,92,
87,1,0,0,0,92,89,1,0,0,0,93,9,1,0,0,0,94,95,5,8,0,0,95,100,5,43,0,0,96,97,
5,9,0,0,97,98,5,43,0,0,98,100,5,10,0,0,99,94,1,0,0,0,99,96,1,0,0,0,100,11,
1,0,0,0,101,105,5,11,0,0,102,104,3,24,12,0,103,102,1,0,0,0,104,107,1,0,0,
0,105,103,1,0,0,0,105,106,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,108,110,
5,12,0,0,109,108,1,0,0,0,109,110,1,0,0,0,110,13,1,0,0,0,111,112,5,13,0,0,
112,113,5,14,0,0,113,114,3,2,1,0,114,115,5,15,0,0,115,123,1,0,0,0,116,117,
5,13,0,0,117,118,5,14,0,0,118,119,3,2,1,0,119,120,3,16,8,0,120,121,5,15,
0,0,121,123,1,0,0,0,122,111,1,0,0,0,122,116,1,0,0,0,123,15,1,0,0,0,124,125,
5,16,0,0,125,126,3,24,12,0,126,127,3,2,1,0,127,128,3,16,8,0,128,136,1,0,
0,0,129,130,5,17,0,0,130,136,3,2,1,0,131,132,5,16,0,0,132,133,3,24,12,0,
133,134,3,2,1,0,134,136,1,0,0,0,135,124,1,0,0,0,135,129,1,0,0,0,135,131,
1,0,0,0,136,17,1,0,0,0,137,138,5,18,0,0,138,139,5,41,0,0,139,19,1,0,0,0,
140,141,5,19,0,0,141,152,5,41,0,0,142,143,5,20,0,0,143,144,5,41,0,0,144,
149,1,0,0,0,145,146,5,21,0,0,146,148,5,41,0,0,147,145,1,0,0,0,148,151,1,
0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,153,1,0,0,0,151,149,1,0,0,0,152,
142,1,0,0,0,152,153,1,0,0,0,153,154,1,0,0,0,154,155,3,2,1,0,155,156,5,22,
0,0,156,21,1,0,0,0,157,158,5,41,0,0,158,159,5,23,0,0,159,160,3,24,12,0,160,
23,1,0,0,0,161,180,3,26,13,0,162,180,3,30,15,0,163,180,3,28,14,0,164,180,
3,34,17,0,165,180,3,36,18,0,166,180,3,38,19,0,167,180,3,40,20,0,168,180,
3,42,21,0,169,180,3,44,22,0,170,180,3,46,23,0,171,180,3,48,24,0,172,180,
3,32,16,0,173,180,3,50,25,0,174,180,3,52,26,0,175,180,3,54,27,0,176,180,
3,56,28,0,177,180,5,41,0,0,178,180,5,42,0,0,179,161,1,0,0,0,179,162,1,0,
0,0,179,163,1,0,0,0,179,164,1,0,0,0,179,165,1,0,0,0,179,166,1,0,0,0,179,
167,1,0,0,0,179,168,1,0,0,0,179,169,1,0,0,0,179,170,1,0,0,0,179,171,1,0,
0,0,179,172,1,0,0,0,179,173,1,0,0,0,179,174,1,0,0,0,179,175,1,0,0,0,179,
176,1,0,0,0,179,177,1,0,0,0,179,178,1,0,0,0,180,25,1,0,0,0,181,182,5,24,
0,0,182,183,3,24,12,0,183,184,5,25,0,0,184,185,3,24,12,0,185,27,1,0,0,0,
186,187,5,26,0,0,187,188,3,24,12,0,188,189,5,25,0,0,189,190,3,24,12,0,190,
29,1,0,0,0,191,192,5,27,0,0,192,193,3,24,12,0,193,194,5,25,0,0,194,195,3,
24,12,0,195,31,1,0,0,0,196,197,5,28,0,0,197,198,3,24,12,0,198,199,5,25,0,
0,199,200,3,24,12,0,200,33,1,0,0,0,201,202,5,29,0,0,202,203,3,24,12,0,203,
204,5,25,0,0,204,205,3,24,12,0,205,35,1,0,0,0,206,207,5,30,0,0,207,208,3,
24,12,0,208,209,5,25,0,0,209,210,3,24,12,0,210,37,1,0,0,0,211,212,5,31,0,
0,212,213,3,24,12,0,213,214,5,25,0,0,214,215,3,24,12,0,215,39,1,0,0,0,216,
217,5,32,0,0,217,218,3,24,12,0,218,219,5,25,0,0,219,220,3,24,12,0,220,41,
1,0,0,0,221,222,5,33,0,0,222,223,3,24,12,0,223,224,5,25,0,0,224,225,3,24,
12,0,225,43,1,0,0,0,226,227,5,34,0,0,227,228,3,24,12,0,228,229,5,25,0,0,
229,230,3,24,12,0,230,45,1,0,0,0,231,232,5,35,0,0,232,233,3,24,12,0,233,
234,5,25,0,0,234,235,3,24,12,0,235,47,1,0,0,0,236,237,5,36,0,0,237,238,3,
24,12,0,238,239,5,37,0,0,239,49,1,0,0,0,240,241,5,38,0,0,241,246,3,24,12,
0,242,243,5,25,0,0,243,245,3,24,12,0,244,242,1,0,0,0,245,248,1,0,0,0,246,
244,1,0,0,0,246,247,1,0,0,0,247,249,1,0,0,0,248,246,1,0,0,0,249,250,5,12,
0,0,250,51,1,0,0,0,251,252,5,39,0,0,252,257,3,24,12,0,253,254,5,25,0,0,254,
256,3,24,12,0,255,253,1,0,0,0,256,259,1,0,0,0,257,255,1,0,0,0,257,258,1,
0,0,0,258,260,1,0,0,0,259,257,1,0,0,0,260,261,5,12,0,0,261,53,1,0,0,0,262,
263,5,40,0,0,263,264,3,24,12,0,264,55,1,0,0,0,265,267,5,41,0,0,266,268,3,
24,12,0,267,266,1,0,0,0,268,269,1,0,0,0,269,267,1,0,0,0,269,270,1,0,0,0,
270,271,1,0,0,0,271,272,5,12,0,0,272,57,1,0,0,0,15,61,66,77,92,99,105,109,
122,135,149,152,179,246,257,269];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class lolcodeParser extends antlr4.Parser {

    static grammarFileName = "lolcode.g4";
    static literalNames = [ null, "'HAI'", "'KTHXBYE'", "'IM IN YR'", "'WILE'", 
                            "'IM OUTTA YR'", "'I HAS A'", "'ITZ'", "'BTW'", 
                            "'OBTW'", "'TLDR'", "'VISIBLE'", "'MKAY?'", 
                            "'O RLY?'", "'YA RLY'", "'OIC'", "'MEBBE'", 
                            "'NO WAI'", "'GIMMEH'", "'HOW DUZ I'", "'YR'", 
                            "'AN YR'", "'IF U SAY SO'", "'R'", "'BOTH SAEM'", 
                            "'AN'", "'DIFFRINT'", "'BOTH OF'", "'EITHER OF'", 
                            "'BIGGR OF'", "'SMALLR OF'", "'SUM OF'", "'DIFF OF'", 
                            "'PRODUKT OF'", "'QUOSHUNT OF'", "'MOD OF'", 
                            "'MAEK'", "'A'", "'ALL OF'", "'ANY OF'", "'NOT'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "LABEL", "ATOM", "STRING", "WS" ];
    static ruleNames = [ "program", "code_block", "statement", "loop", "declaration", 
                         "comment", "print_block", "if_block", "else_if_block", 
                         "input_block", "func_decl", "assignment", "expression", 
                         "equals", "not_equals", "both", "either", "greater", 
                         "less", "add", "sub", "mul", "div", "mod", "cast", 
                         "all_", "any_", "not_", "func_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = lolcodeParser.ruleNames;
        this.literalNames = lolcodeParser.literalNames;
        this.symbolicNames = lolcodeParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, lolcodeParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(lolcodeParser.T__0);
	        this.state = 59;
	        this.code_block();
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===lolcodeParser.T__1) {
	            this.state = 60;
	            this.match(lolcodeParser.T__1);
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



	code_block() {
	    let localctx = new Code_blockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, lolcodeParser.RULE_code_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 63;
	            this.statement();
	            this.state = 66; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << lolcodeParser.T__2) | (1 << lolcodeParser.T__5) | (1 << lolcodeParser.T__7) | (1 << lolcodeParser.T__8) | (1 << lolcodeParser.T__10) | (1 << lolcodeParser.T__12) | (1 << lolcodeParser.T__17) | (1 << lolcodeParser.T__18) | (1 << lolcodeParser.T__23) | (1 << lolcodeParser.T__25) | (1 << lolcodeParser.T__26) | (1 << lolcodeParser.T__27) | (1 << lolcodeParser.T__28) | (1 << lolcodeParser.T__29) | (1 << lolcodeParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (lolcodeParser.T__31 - 32)) | (1 << (lolcodeParser.T__32 - 32)) | (1 << (lolcodeParser.T__33 - 32)) | (1 << (lolcodeParser.T__34 - 32)) | (1 << (lolcodeParser.T__35 - 32)) | (1 << (lolcodeParser.T__37 - 32)) | (1 << (lolcodeParser.T__38 - 32)) | (1 << (lolcodeParser.T__39 - 32)) | (1 << (lolcodeParser.LABEL - 32)) | (1 << (lolcodeParser.ATOM - 32)))) !== 0));
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
	    this.enterRule(localctx, 4, lolcodeParser.RULE_statement);
	    try {
	        this.state = 77;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.loop();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
	            this.declaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 70;
	            this.comment();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 71;
	            this.print_block();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 72;
	            this.if_block();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 73;
	            this.input_block();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 74;
	            this.func_decl();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 75;
	            this.assignment();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 76;
	            this.expression();
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



	loop() {
	    let localctx = new LoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, lolcodeParser.RULE_loop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(lolcodeParser.T__2);
	        this.state = 80;
	        this.match(lolcodeParser.LABEL);
	        this.state = 81;
	        this.match(lolcodeParser.T__3);
	        this.state = 82;
	        this.expression();
	        this.state = 83;
	        this.code_block();
	        this.state = 84;
	        this.match(lolcodeParser.T__4);
	        this.state = 85;
	        this.match(lolcodeParser.LABEL);
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



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, lolcodeParser.RULE_declaration);
	    try {
	        this.state = 92;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 87;
	            this.match(lolcodeParser.T__5);
	            this.state = 88;
	            this.match(lolcodeParser.LABEL);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 89;
	            this.match(lolcodeParser.T__5);
	            this.state = 90;
	            this.match(lolcodeParser.LABEL);
	            this.state = 91;
	            this.match(lolcodeParser.T__6);
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



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, lolcodeParser.RULE_comment);
	    try {
	        this.state = 99;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case lolcodeParser.T__7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 94;
	            this.match(lolcodeParser.T__7);
	            this.state = 95;
	            this.match(lolcodeParser.STRING);
	            break;
	        case lolcodeParser.T__8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            this.match(lolcodeParser.T__8);
	            this.state = 97;
	            this.match(lolcodeParser.STRING);
	            this.state = 98;
	            this.match(lolcodeParser.T__9);
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



	print_block() {
	    let localctx = new Print_blockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, lolcodeParser.RULE_print_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(lolcodeParser.T__10);
	        this.state = 105;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 102;
	                this.expression(); 
	            }
	            this.state = 107;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===lolcodeParser.T__11) {
	            this.state = 108;
	            this.match(lolcodeParser.T__11);
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



	if_block() {
	    let localctx = new If_blockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, lolcodeParser.RULE_if_block);
	    try {
	        this.state = 122;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.match(lolcodeParser.T__12);
	            this.state = 112;
	            this.match(lolcodeParser.T__13);
	            this.state = 113;
	            this.code_block();
	            this.state = 114;
	            this.match(lolcodeParser.T__14);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 116;
	            this.match(lolcodeParser.T__12);
	            this.state = 117;
	            this.match(lolcodeParser.T__13);
	            this.state = 118;
	            this.code_block();
	            this.state = 119;
	            this.else_if_block();
	            this.state = 120;
	            this.match(lolcodeParser.T__14);
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



	else_if_block() {
	    let localctx = new Else_if_blockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, lolcodeParser.RULE_else_if_block);
	    try {
	        this.state = 135;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 124;
	            this.match(lolcodeParser.T__15);
	            this.state = 125;
	            this.expression();
	            this.state = 126;
	            this.code_block();
	            this.state = 127;
	            this.else_if_block();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 129;
	            this.match(lolcodeParser.T__16);
	            this.state = 130;
	            this.code_block();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 131;
	            this.match(lolcodeParser.T__15);
	            this.state = 132;
	            this.expression();
	            this.state = 133;
	            this.code_block();
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



	input_block() {
	    let localctx = new Input_blockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, lolcodeParser.RULE_input_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(lolcodeParser.T__17);
	        this.state = 138;
	        this.match(lolcodeParser.LABEL);
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



	func_decl() {
	    let localctx = new Func_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, lolcodeParser.RULE_func_decl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(lolcodeParser.T__18);
	        this.state = 141;
	        this.match(lolcodeParser.LABEL);
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===lolcodeParser.T__19) {
	            this.state = 142;
	            this.match(lolcodeParser.T__19);
	            this.state = 143;
	            this.match(lolcodeParser.LABEL);
	            this.state = 149;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===lolcodeParser.T__20) {
	                this.state = 145;
	                this.match(lolcodeParser.T__20);
	                this.state = 146;
	                this.match(lolcodeParser.LABEL);
	                this.state = 151;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 154;
	        this.code_block();
	        this.state = 155;
	        this.match(lolcodeParser.T__21);
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, lolcodeParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(lolcodeParser.LABEL);
	        this.state = 158;
	        this.match(lolcodeParser.T__22);
	        this.state = 159;
	        this.expression();
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
	    this.enterRule(localctx, 24, lolcodeParser.RULE_expression);
	    try {
	        this.state = 179;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 161;
	            this.equals();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 162;
	            this.both();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 163;
	            this.not_equals();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 164;
	            this.greater();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 165;
	            this.less();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 166;
	            this.add();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 167;
	            this.sub();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 168;
	            this.mul();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 169;
	            this.div();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 170;
	            this.mod();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 171;
	            this.cast();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 172;
	            this.either();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 173;
	            this.all_();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 174;
	            this.any_();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 175;
	            this.not_();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 176;
	            this.func_();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 177;
	            this.match(lolcodeParser.LABEL);
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 178;
	            this.match(lolcodeParser.ATOM);
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



	equals() {
	    let localctx = new EqualsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, lolcodeParser.RULE_equals);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this.match(lolcodeParser.T__23);
	        this.state = 182;
	        this.expression();
	        this.state = 183;
	        this.match(lolcodeParser.T__24);
	        this.state = 184;
	        this.expression();
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



	not_equals() {
	    let localctx = new Not_equalsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, lolcodeParser.RULE_not_equals);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(lolcodeParser.T__25);
	        this.state = 187;
	        this.expression();
	        this.state = 188;
	        this.match(lolcodeParser.T__24);
	        this.state = 189;
	        this.expression();
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



	both() {
	    let localctx = new BothContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, lolcodeParser.RULE_both);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(lolcodeParser.T__26);
	        this.state = 192;
	        this.expression();
	        this.state = 193;
	        this.match(lolcodeParser.T__24);
	        this.state = 194;
	        this.expression();
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



	either() {
	    let localctx = new EitherContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, lolcodeParser.RULE_either);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.match(lolcodeParser.T__27);
	        this.state = 197;
	        this.expression();
	        this.state = 198;
	        this.match(lolcodeParser.T__24);
	        this.state = 199;
	        this.expression();
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



	greater() {
	    let localctx = new GreaterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, lolcodeParser.RULE_greater);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.match(lolcodeParser.T__28);
	        this.state = 202;
	        this.expression();
	        this.state = 203;
	        this.match(lolcodeParser.T__24);
	        this.state = 204;
	        this.expression();
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



	less() {
	    let localctx = new LessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, lolcodeParser.RULE_less);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(lolcodeParser.T__29);
	        this.state = 207;
	        this.expression();
	        this.state = 208;
	        this.match(lolcodeParser.T__24);
	        this.state = 209;
	        this.expression();
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



	add() {
	    let localctx = new AddContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, lolcodeParser.RULE_add);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        this.match(lolcodeParser.T__30);
	        this.state = 212;
	        this.expression();
	        this.state = 213;
	        this.match(lolcodeParser.T__24);
	        this.state = 214;
	        this.expression();
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



	sub() {
	    let localctx = new SubContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, lolcodeParser.RULE_sub);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.match(lolcodeParser.T__31);
	        this.state = 217;
	        this.expression();
	        this.state = 218;
	        this.match(lolcodeParser.T__24);
	        this.state = 219;
	        this.expression();
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



	mul() {
	    let localctx = new MulContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, lolcodeParser.RULE_mul);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this.match(lolcodeParser.T__32);
	        this.state = 222;
	        this.expression();
	        this.state = 223;
	        this.match(lolcodeParser.T__24);
	        this.state = 224;
	        this.expression();
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



	div() {
	    let localctx = new DivContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, lolcodeParser.RULE_div);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(lolcodeParser.T__33);
	        this.state = 227;
	        this.expression();
	        this.state = 228;
	        this.match(lolcodeParser.T__24);
	        this.state = 229;
	        this.expression();
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



	mod() {
	    let localctx = new ModContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, lolcodeParser.RULE_mod);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(lolcodeParser.T__34);
	        this.state = 232;
	        this.expression();
	        this.state = 233;
	        this.match(lolcodeParser.T__24);
	        this.state = 234;
	        this.expression();
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



	cast() {
	    let localctx = new CastContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, lolcodeParser.RULE_cast);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.match(lolcodeParser.T__35);
	        this.state = 237;
	        this.expression();
	        this.state = 238;
	        this.match(lolcodeParser.T__36);
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



	all_() {
	    let localctx = new All_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, lolcodeParser.RULE_all_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.match(lolcodeParser.T__37);
	        this.state = 241;
	        this.expression();
	        this.state = 246;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===lolcodeParser.T__24) {
	            this.state = 242;
	            this.match(lolcodeParser.T__24);
	            this.state = 243;
	            this.expression();
	            this.state = 248;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 249;
	        this.match(lolcodeParser.T__11);
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



	any_() {
	    let localctx = new Any_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, lolcodeParser.RULE_any_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        this.match(lolcodeParser.T__38);
	        this.state = 252;
	        this.expression();
	        this.state = 257;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===lolcodeParser.T__24) {
	            this.state = 253;
	            this.match(lolcodeParser.T__24);
	            this.state = 254;
	            this.expression();
	            this.state = 259;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 260;
	        this.match(lolcodeParser.T__11);
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



	not_() {
	    let localctx = new Not_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, lolcodeParser.RULE_not_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.match(lolcodeParser.T__39);
	        this.state = 263;
	        this.expression();
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



	func_() {
	    let localctx = new Func_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, lolcodeParser.RULE_func_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this.match(lolcodeParser.LABEL);
	        this.state = 267; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 266;
	            this.expression();
	            this.state = 269; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 24)) & ~0x1f) == 0 && ((1 << (_la - 24)) & ((1 << (lolcodeParser.T__23 - 24)) | (1 << (lolcodeParser.T__25 - 24)) | (1 << (lolcodeParser.T__26 - 24)) | (1 << (lolcodeParser.T__27 - 24)) | (1 << (lolcodeParser.T__28 - 24)) | (1 << (lolcodeParser.T__29 - 24)) | (1 << (lolcodeParser.T__30 - 24)) | (1 << (lolcodeParser.T__31 - 24)) | (1 << (lolcodeParser.T__32 - 24)) | (1 << (lolcodeParser.T__33 - 24)) | (1 << (lolcodeParser.T__34 - 24)) | (1 << (lolcodeParser.T__35 - 24)) | (1 << (lolcodeParser.T__37 - 24)) | (1 << (lolcodeParser.T__38 - 24)) | (1 << (lolcodeParser.T__39 - 24)) | (1 << (lolcodeParser.LABEL - 24)) | (1 << (lolcodeParser.ATOM - 24)))) !== 0));
	        this.state = 271;
	        this.match(lolcodeParser.T__11);
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

lolcodeParser.EOF = antlr4.Token.EOF;
lolcodeParser.T__0 = 1;
lolcodeParser.T__1 = 2;
lolcodeParser.T__2 = 3;
lolcodeParser.T__3 = 4;
lolcodeParser.T__4 = 5;
lolcodeParser.T__5 = 6;
lolcodeParser.T__6 = 7;
lolcodeParser.T__7 = 8;
lolcodeParser.T__8 = 9;
lolcodeParser.T__9 = 10;
lolcodeParser.T__10 = 11;
lolcodeParser.T__11 = 12;
lolcodeParser.T__12 = 13;
lolcodeParser.T__13 = 14;
lolcodeParser.T__14 = 15;
lolcodeParser.T__15 = 16;
lolcodeParser.T__16 = 17;
lolcodeParser.T__17 = 18;
lolcodeParser.T__18 = 19;
lolcodeParser.T__19 = 20;
lolcodeParser.T__20 = 21;
lolcodeParser.T__21 = 22;
lolcodeParser.T__22 = 23;
lolcodeParser.T__23 = 24;
lolcodeParser.T__24 = 25;
lolcodeParser.T__25 = 26;
lolcodeParser.T__26 = 27;
lolcodeParser.T__27 = 28;
lolcodeParser.T__28 = 29;
lolcodeParser.T__29 = 30;
lolcodeParser.T__30 = 31;
lolcodeParser.T__31 = 32;
lolcodeParser.T__32 = 33;
lolcodeParser.T__33 = 34;
lolcodeParser.T__34 = 35;
lolcodeParser.T__35 = 36;
lolcodeParser.T__36 = 37;
lolcodeParser.T__37 = 38;
lolcodeParser.T__38 = 39;
lolcodeParser.T__39 = 40;
lolcodeParser.LABEL = 41;
lolcodeParser.ATOM = 42;
lolcodeParser.STRING = 43;
lolcodeParser.WS = 44;

lolcodeParser.RULE_program = 0;
lolcodeParser.RULE_code_block = 1;
lolcodeParser.RULE_statement = 2;
lolcodeParser.RULE_loop = 3;
lolcodeParser.RULE_declaration = 4;
lolcodeParser.RULE_comment = 5;
lolcodeParser.RULE_print_block = 6;
lolcodeParser.RULE_if_block = 7;
lolcodeParser.RULE_else_if_block = 8;
lolcodeParser.RULE_input_block = 9;
lolcodeParser.RULE_func_decl = 10;
lolcodeParser.RULE_assignment = 11;
lolcodeParser.RULE_expression = 12;
lolcodeParser.RULE_equals = 13;
lolcodeParser.RULE_not_equals = 14;
lolcodeParser.RULE_both = 15;
lolcodeParser.RULE_either = 16;
lolcodeParser.RULE_greater = 17;
lolcodeParser.RULE_less = 18;
lolcodeParser.RULE_add = 19;
lolcodeParser.RULE_sub = 20;
lolcodeParser.RULE_mul = 21;
lolcodeParser.RULE_div = 22;
lolcodeParser.RULE_mod = 23;
lolcodeParser.RULE_cast = 24;
lolcodeParser.RULE_all_ = 25;
lolcodeParser.RULE_any_ = 26;
lolcodeParser.RULE_not_ = 27;
lolcodeParser.RULE_func_ = 28;

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
        this.ruleIndex = lolcodeParser.RULE_program;
    }

	code_block() {
	    return this.getTypedRuleContext(Code_blockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitProgram(this);
		}
	}


}



class Code_blockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_code_block;
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
	    if(listener instanceof lolcodeListener ) {
	        listener.enterCode_block(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitCode_block(this);
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
        this.ruleIndex = lolcodeParser.RULE_statement;
    }

	loop() {
	    return this.getTypedRuleContext(LoopContext,0);
	};

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	print_block() {
	    return this.getTypedRuleContext(Print_blockContext,0);
	};

	if_block() {
	    return this.getTypedRuleContext(If_blockContext,0);
	};

	input_block() {
	    return this.getTypedRuleContext(Input_blockContext,0);
	};

	func_decl() {
	    return this.getTypedRuleContext(Func_declContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitStatement(this);
		}
	}


}



class LoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_loop;
    }

	LABEL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(lolcodeParser.LABEL);
	    } else {
	        return this.getToken(lolcodeParser.LABEL, i);
	    }
	};


	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	code_block() {
	    return this.getTypedRuleContext(Code_blockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.enterLoop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitLoop(this);
		}
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_declaration;
    }

	LABEL() {
	    return this.getToken(lolcodeParser.LABEL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitDeclaration(this);
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
        this.ruleIndex = lolcodeParser.RULE_comment;
    }

	STRING() {
	    return this.getToken(lolcodeParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitComment(this);
		}
	}


}



class Print_blockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_print_block;
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
	    if(listener instanceof lolcodeListener ) {
	        listener.enterPrint_block(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitPrint_block(this);
		}
	}


}



class If_blockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_if_block;
    }

	code_block() {
	    return this.getTypedRuleContext(Code_blockContext,0);
	};

	else_if_block() {
	    return this.getTypedRuleContext(Else_if_blockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.enterIf_block(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitIf_block(this);
		}
	}


}



class Else_if_blockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_else_if_block;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	code_block() {
	    return this.getTypedRuleContext(Code_blockContext,0);
	};

	else_if_block() {
	    return this.getTypedRuleContext(Else_if_blockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.enterElse_if_block(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitElse_if_block(this);
		}
	}


}



class Input_blockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_input_block;
    }

	LABEL() {
	    return this.getToken(lolcodeParser.LABEL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.enterInput_block(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitInput_block(this);
		}
	}


}



class Func_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_func_decl;
    }

	LABEL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(lolcodeParser.LABEL);
	    } else {
	        return this.getToken(lolcodeParser.LABEL, i);
	    }
	};


	code_block() {
	    return this.getTypedRuleContext(Code_blockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.enterFunc_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitFunc_decl(this);
		}
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_assignment;
    }

	LABEL() {
	    return this.getToken(lolcodeParser.LABEL, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitAssignment(this);
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
        this.ruleIndex = lolcodeParser.RULE_expression;
    }

	equals() {
	    return this.getTypedRuleContext(EqualsContext,0);
	};

	both() {
	    return this.getTypedRuleContext(BothContext,0);
	};

	not_equals() {
	    return this.getTypedRuleContext(Not_equalsContext,0);
	};

	greater() {
	    return this.getTypedRuleContext(GreaterContext,0);
	};

	less() {
	    return this.getTypedRuleContext(LessContext,0);
	};

	add() {
	    return this.getTypedRuleContext(AddContext,0);
	};

	sub() {
	    return this.getTypedRuleContext(SubContext,0);
	};

	mul() {
	    return this.getTypedRuleContext(MulContext,0);
	};

	div() {
	    return this.getTypedRuleContext(DivContext,0);
	};

	mod() {
	    return this.getTypedRuleContext(ModContext,0);
	};

	cast() {
	    return this.getTypedRuleContext(CastContext,0);
	};

	either() {
	    return this.getTypedRuleContext(EitherContext,0);
	};

	all_() {
	    return this.getTypedRuleContext(All_Context,0);
	};

	any_() {
	    return this.getTypedRuleContext(Any_Context,0);
	};

	not_() {
	    return this.getTypedRuleContext(Not_Context,0);
	};

	func_() {
	    return this.getTypedRuleContext(Func_Context,0);
	};

	LABEL() {
	    return this.getToken(lolcodeParser.LABEL, 0);
	};

	ATOM() {
	    return this.getToken(lolcodeParser.ATOM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitExpression(this);
		}
	}


}



class EqualsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_equals;
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
	    if(listener instanceof lolcodeListener ) {
	        listener.enterEquals(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitEquals(this);
		}
	}


}



class Not_equalsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_not_equals;
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
	    if(listener instanceof lolcodeListener ) {
	        listener.enterNot_equals(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitNot_equals(this);
		}
	}


}



class BothContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_both;
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
	    if(listener instanceof lolcodeListener ) {
	        listener.enterBoth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitBoth(this);
		}
	}


}



class EitherContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_either;
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
	    if(listener instanceof lolcodeListener ) {
	        listener.enterEither(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitEither(this);
		}
	}


}



class GreaterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_greater;
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
	    if(listener instanceof lolcodeListener ) {
	        listener.enterGreater(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitGreater(this);
		}
	}


}



class LessContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_less;
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
	    if(listener instanceof lolcodeListener ) {
	        listener.enterLess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitLess(this);
		}
	}


}



class AddContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_add;
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
	    if(listener instanceof lolcodeListener ) {
	        listener.enterAdd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitAdd(this);
		}
	}


}



class SubContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_sub;
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
	    if(listener instanceof lolcodeListener ) {
	        listener.enterSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitSub(this);
		}
	}


}



class MulContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_mul;
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
	    if(listener instanceof lolcodeListener ) {
	        listener.enterMul(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitMul(this);
		}
	}


}



class DivContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_div;
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
	    if(listener instanceof lolcodeListener ) {
	        listener.enterDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitDiv(this);
		}
	}


}



class ModContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_mod;
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
	    if(listener instanceof lolcodeListener ) {
	        listener.enterMod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitMod(this);
		}
	}


}



class CastContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_cast;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.enterCast(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitCast(this);
		}
	}


}



class All_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_all_;
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
	    if(listener instanceof lolcodeListener ) {
	        listener.enterAll_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitAll_(this);
		}
	}


}



class Any_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_any_;
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
	    if(listener instanceof lolcodeListener ) {
	        listener.enterAny_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitAny_(this);
		}
	}


}



class Not_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_not_;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.enterNot_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitNot_(this);
		}
	}


}



class Func_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = lolcodeParser.RULE_func_;
    }

	LABEL() {
	    return this.getToken(lolcodeParser.LABEL, 0);
	};

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
	    if(listener instanceof lolcodeListener ) {
	        listener.enterFunc_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof lolcodeListener ) {
	        listener.exitFunc_(this);
		}
	}


}




lolcodeParser.ProgramContext = ProgramContext; 
lolcodeParser.Code_blockContext = Code_blockContext; 
lolcodeParser.StatementContext = StatementContext; 
lolcodeParser.LoopContext = LoopContext; 
lolcodeParser.DeclarationContext = DeclarationContext; 
lolcodeParser.CommentContext = CommentContext; 
lolcodeParser.Print_blockContext = Print_blockContext; 
lolcodeParser.If_blockContext = If_blockContext; 
lolcodeParser.Else_if_blockContext = Else_if_blockContext; 
lolcodeParser.Input_blockContext = Input_blockContext; 
lolcodeParser.Func_declContext = Func_declContext; 
lolcodeParser.AssignmentContext = AssignmentContext; 
lolcodeParser.ExpressionContext = ExpressionContext; 
lolcodeParser.EqualsContext = EqualsContext; 
lolcodeParser.Not_equalsContext = Not_equalsContext; 
lolcodeParser.BothContext = BothContext; 
lolcodeParser.EitherContext = EitherContext; 
lolcodeParser.GreaterContext = GreaterContext; 
lolcodeParser.LessContext = LessContext; 
lolcodeParser.AddContext = AddContext; 
lolcodeParser.SubContext = SubContext; 
lolcodeParser.MulContext = MulContext; 
lolcodeParser.DivContext = DivContext; 
lolcodeParser.ModContext = ModContext; 
lolcodeParser.CastContext = CastContext; 
lolcodeParser.All_Context = All_Context; 
lolcodeParser.Any_Context = Any_Context; 
lolcodeParser.Not_Context = Not_Context; 
lolcodeParser.Func_Context = Func_Context; 
