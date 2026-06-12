// Generated from ./asm/asmMASM/asmMASM.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import asmMASMListener from './asmMASMListener.js';
const serializedATN = [4,1,54,349,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,1,0,5,0,96,8,0,10,0,12,
0,99,9,0,1,0,1,0,1,1,1,1,3,1,105,8,1,1,1,1,1,1,1,3,1,110,8,1,1,1,1,1,1,2,
3,2,115,8,2,1,2,1,2,3,2,119,8,2,1,3,1,3,3,3,123,8,3,1,4,1,4,3,4,127,8,4,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,4,5,152,8,5,11,5,12,5,153,3,5,156,8,5,1,6,4,6,159,8,
6,11,6,12,6,160,1,7,1,7,3,7,165,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
5,8,176,8,8,10,8,12,8,179,9,8,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,
11,1,11,5,11,192,8,11,10,11,12,11,195,9,11,1,12,1,12,1,12,3,12,200,8,12,
1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,215,
8,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,
19,1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,23,
1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,27,1,27,1,27,1,28,1,
28,1,28,1,29,1,29,1,29,1,30,1,30,1,31,1,31,1,31,1,32,1,32,1,32,5,32,272,
8,32,10,32,12,32,275,9,32,1,33,1,33,3,33,279,8,33,1,34,1,34,1,34,5,34,284,
8,34,10,34,12,34,287,9,34,1,35,1,35,1,35,5,35,292,8,35,10,35,12,35,295,9,
35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,304,8,36,1,36,1,36,1,36,1,36,
1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,322,8,36,
1,37,1,37,3,37,326,8,37,1,38,1,38,1,39,1,39,1,40,1,40,1,41,1,41,1,42,1,42,
1,43,1,43,1,44,3,44,341,8,44,1,44,1,44,1,45,1,45,1,46,1,46,1,46,0,0,47,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,
54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,0,4,1,0,31,34,
1,0,5,6,3,0,9,9,11,13,22,22,1,0,50,51,361,0,97,1,0,0,0,2,104,1,0,0,0,4,114,
1,0,0,0,6,120,1,0,0,0,8,124,1,0,0,0,10,155,1,0,0,0,12,158,1,0,0,0,14,162,
1,0,0,0,16,166,1,0,0,0,18,180,1,0,0,0,20,184,1,0,0,0,22,186,1,0,0,0,24,196,
1,0,0,0,26,201,1,0,0,0,28,214,1,0,0,0,30,216,1,0,0,0,32,220,1,0,0,0,34,223,
1,0,0,0,36,226,1,0,0,0,38,229,1,0,0,0,40,232,1,0,0,0,42,235,1,0,0,0,44,238,
1,0,0,0,46,241,1,0,0,0,48,244,1,0,0,0,50,247,1,0,0,0,52,251,1,0,0,0,54,254,
1,0,0,0,56,257,1,0,0,0,58,260,1,0,0,0,60,263,1,0,0,0,62,265,1,0,0,0,64,268,
1,0,0,0,66,278,1,0,0,0,68,280,1,0,0,0,70,288,1,0,0,0,72,321,1,0,0,0,74,325,
1,0,0,0,76,327,1,0,0,0,78,329,1,0,0,0,80,331,1,0,0,0,82,333,1,0,0,0,84,335,
1,0,0,0,86,337,1,0,0,0,88,340,1,0,0,0,90,344,1,0,0,0,92,346,1,0,0,0,94,96,
3,2,1,0,95,94,1,0,0,0,96,99,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,100,1,
0,0,0,99,97,1,0,0,0,100,101,5,0,0,1,101,1,1,0,0,0,102,105,3,6,3,0,103,105,
3,8,4,0,104,102,1,0,0,0,104,103,1,0,0,0,104,105,1,0,0,0,105,109,1,0,0,0,
106,110,3,10,5,0,107,110,3,12,6,0,108,110,3,4,2,0,109,106,1,0,0,0,109,107,
1,0,0,0,109,108,1,0,0,0,109,110,1,0,0,0,110,111,1,0,0,0,111,112,5,53,0,0,
112,3,1,0,0,0,113,115,3,92,46,0,114,113,1,0,0,0,114,115,1,0,0,0,115,116,
1,0,0,0,116,118,3,90,45,0,117,119,3,64,32,0,118,117,1,0,0,0,118,119,1,0,
0,0,119,5,1,0,0,0,120,122,3,66,33,0,121,123,5,1,0,0,122,121,1,0,0,0,122,
123,1,0,0,0,123,7,1,0,0,0,124,126,5,10,0,0,125,127,3,86,43,0,126,125,1,0,
0,0,126,127,1,0,0,0,127,9,1,0,0,0,128,156,3,62,31,0,129,156,3,58,29,0,130,
156,3,60,30,0,131,156,3,52,26,0,132,156,3,46,23,0,133,156,3,44,22,0,134,
156,3,48,24,0,135,156,3,42,21,0,136,156,3,34,17,0,137,156,3,36,18,0,138,
156,3,38,19,0,139,156,3,40,20,0,140,156,3,32,16,0,141,156,3,30,15,0,142,
156,3,24,12,0,143,156,3,26,13,0,144,156,3,22,11,0,145,156,3,18,9,0,146,156,
3,16,8,0,147,156,3,54,27,0,148,156,3,56,28,0,149,151,3,20,10,0,150,152,3,
64,32,0,151,150,1,0,0,0,152,153,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,
154,156,1,0,0,0,155,128,1,0,0,0,155,129,1,0,0,0,155,130,1,0,0,0,155,131,
1,0,0,0,155,132,1,0,0,0,155,133,1,0,0,0,155,134,1,0,0,0,155,135,1,0,0,0,
155,136,1,0,0,0,155,137,1,0,0,0,155,138,1,0,0,0,155,139,1,0,0,0,155,140,
1,0,0,0,155,141,1,0,0,0,155,142,1,0,0,0,155,143,1,0,0,0,155,144,1,0,0,0,
155,145,1,0,0,0,155,146,1,0,0,0,155,147,1,0,0,0,155,148,1,0,0,0,155,149,
1,0,0,0,156,11,1,0,0,0,157,159,3,14,7,0,158,157,1,0,0,0,159,160,1,0,0,0,
160,158,1,0,0,0,160,161,1,0,0,0,161,13,1,0,0,0,162,164,5,47,0,0,163,165,
3,64,32,0,164,163,1,0,0,0,164,165,1,0,0,0,165,15,1,0,0,0,166,167,5,40,0,
0,167,168,3,82,41,0,168,169,5,1,0,0,169,177,3,86,43,0,170,171,5,2,0,0,171,
172,3,82,41,0,172,173,5,1,0,0,173,174,3,86,43,0,174,176,1,0,0,0,175,170,
1,0,0,0,176,179,1,0,0,0,177,175,1,0,0,0,177,178,1,0,0,0,178,17,1,0,0,0,179,
177,1,0,0,0,180,181,3,86,43,0,181,182,5,38,0,0,182,183,3,20,10,0,183,19,
1,0,0,0,184,185,7,0,0,0,185,21,1,0,0,0,186,187,3,86,43,0,187,188,5,30,0,
0,188,193,3,86,43,0,189,190,5,2,0,0,190,192,3,86,43,0,191,189,1,0,0,0,192,
195,1,0,0,0,193,191,1,0,0,0,193,194,1,0,0,0,194,23,1,0,0,0,195,193,1,0,0,
0,196,197,3,86,43,0,197,199,5,28,0,0,198,200,3,28,14,0,199,198,1,0,0,0,199,
200,1,0,0,0,200,25,1,0,0,0,201,202,3,86,43,0,202,203,5,29,0,0,203,27,1,0,
0,0,204,215,5,31,0,0,205,215,5,33,0,0,206,215,5,34,0,0,207,215,5,35,0,0,
208,215,5,36,0,0,209,210,5,37,0,0,210,211,5,3,0,0,211,212,3,88,44,0,212,
213,5,4,0,0,213,215,1,0,0,0,214,204,1,0,0,0,214,205,1,0,0,0,214,206,1,0,
0,0,214,207,1,0,0,0,214,208,1,0,0,0,214,209,1,0,0,0,215,29,1,0,0,0,216,217,
3,86,43,0,217,218,5,43,0,0,218,219,3,68,34,0,219,31,1,0,0,0,220,221,5,22,
0,0,221,222,3,64,32,0,222,33,1,0,0,0,223,224,5,18,0,0,224,225,3,64,32,0,
225,35,1,0,0,0,226,227,5,19,0,0,227,228,3,64,32,0,228,37,1,0,0,0,229,230,
5,20,0,0,230,231,3,64,32,0,231,39,1,0,0,0,232,233,5,21,0,0,233,234,3,64,
32,0,234,41,1,0,0,0,235,236,5,17,0,0,236,237,3,64,32,0,237,43,1,0,0,0,238,
239,5,14,0,0,239,240,3,64,32,0,240,45,1,0,0,0,241,242,5,15,0,0,242,243,3,
64,32,0,243,47,1,0,0,0,244,245,5,16,0,0,245,246,3,64,32,0,246,49,1,0,0,0,
247,248,3,88,44,0,248,249,5,39,0,0,249,250,3,68,34,0,250,51,1,0,0,0,251,
252,5,13,0,0,252,253,3,68,34,0,253,53,1,0,0,0,254,255,5,41,0,0,255,256,3,
68,34,0,256,55,1,0,0,0,257,258,5,42,0,0,258,259,3,68,34,0,259,57,1,0,0,0,
260,261,5,12,0,0,261,262,3,68,34,0,262,59,1,0,0,0,263,264,5,11,0,0,264,61,
1,0,0,0,265,266,5,9,0,0,266,267,3,68,34,0,267,63,1,0,0,0,268,273,3,68,34,
0,269,270,5,2,0,0,270,272,3,68,34,0,271,269,1,0,0,0,272,275,1,0,0,0,273,
271,1,0,0,0,273,274,1,0,0,0,274,65,1,0,0,0,275,273,1,0,0,0,276,279,3,86,
43,0,277,279,3,74,37,0,278,276,1,0,0,0,278,277,1,0,0,0,279,67,1,0,0,0,280,
285,3,70,35,0,281,282,5,46,0,0,282,284,3,70,35,0,283,281,1,0,0,0,284,287,
1,0,0,0,285,283,1,0,0,0,285,286,1,0,0,0,286,69,1,0,0,0,287,285,1,0,0,0,288,
293,3,72,36,0,289,290,7,1,0,0,290,292,3,72,36,0,291,289,1,0,0,0,292,295,
1,0,0,0,293,291,1,0,0,0,293,294,1,0,0,0,294,71,1,0,0,0,295,293,1,0,0,0,296,
322,3,88,44,0,297,322,3,78,39,0,298,322,3,80,40,0,299,322,3,82,41,0,300,
301,3,86,43,0,301,302,5,1,0,0,302,304,1,0,0,0,303,300,1,0,0,0,303,304,1,
0,0,0,304,305,1,0,0,0,305,322,3,86,43,0,306,322,3,84,42,0,307,308,5,3,0,
0,308,309,3,68,34,0,309,310,5,4,0,0,310,322,1,0,0,0,311,312,5,7,0,0,312,
313,3,68,34,0,313,314,5,8,0,0,314,322,1,0,0,0,315,316,5,23,0,0,316,322,3,
68,34,0,317,318,5,27,0,0,318,322,3,68,34,0,319,322,3,74,37,0,320,322,3,50,
25,0,321,296,1,0,0,0,321,297,1,0,0,0,321,298,1,0,0,0,321,299,1,0,0,0,321,
303,1,0,0,0,321,306,1,0,0,0,321,307,1,0,0,0,321,311,1,0,0,0,321,315,1,0,
0,0,321,317,1,0,0,0,321,319,1,0,0,0,321,320,1,0,0,0,322,73,1,0,0,0,323,326,
3,90,45,0,324,326,3,76,38,0,325,323,1,0,0,0,325,324,1,0,0,0,326,75,1,0,0,
0,327,328,7,2,0,0,328,77,1,0,0,0,329,330,5,44,0,0,330,79,1,0,0,0,331,332,
5,45,0,0,332,81,1,0,0,0,333,334,5,24,0,0,334,83,1,0,0,0,335,336,7,3,0,0,
336,85,1,0,0,0,337,338,5,48,0,0,338,87,1,0,0,0,339,341,5,46,0,0,340,339,
1,0,0,0,340,341,1,0,0,0,341,342,1,0,0,0,342,343,5,49,0,0,343,89,1,0,0,0,
344,345,5,25,0,0,345,91,1,0,0,0,346,347,5,26,0,0,347,93,1,0,0,0,23,97,104,
109,114,118,122,126,153,155,160,164,177,193,199,214,273,278,285,293,303,
321,325,340];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class asmMASMParser extends antlr4.Parser {

    static grammarFileName = "asmMASM.g4";
    static literalNames = [ null, "':'", "','", "'('", "')'", "'*'", "'/'", 
                            "'['", "']'", "'ORG'", "'END'", "'ENDIF'", "'IF'", 
                            "'EQU'", "'DW'", "'DB'", "'DM'", "'DS'", "'INCLUDE'", 
                            "'INCLUDELIB'", "'INVOKE'", "'OPTION'", "'PUT'", 
                            "'NOT'", null, null, null, "'OFFSET'", "'SEGMENT'", 
                            "'ENDS'", "'GROUP'", "'BYTE'", "'SBYTE'", "'WORD'", 
                            "'DWORD'", "'PARA'", "'PAGE'", "'ALIGN'", "'LABEL'", 
                            "'DUP'", "'ASSUME'", "'EXTERN'", "'PUBLIC'", 
                            "'='", "'$'", "'?'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "ORG", "END", "ENDIF", "IF", "EQU", "DW", 
                             "DB", "DM", "DS", "INCLUDE", "INCLUDELIB", 
                             "INVOKE", "OPTION", "PUT", "NOT", "REGISTER", 
                             "OPCODE", "REP", "OFFSET", "SEGMENT", "SEGMENTEND", 
                             "GROUP", "BYTE", "SBYTE", "WORD", "DWORD", 
                             "PARA", "PAGE", "ALIGN", "LABEL", "DUP", "ASSUME", 
                             "EXTERN", "PUBLIC", "ASSIGN", "DOLLAR", "QUES", 
                             "SIGN", "MASMDIRECTIVE", "NAME", "NUMBER", 
                             "STRING1", "STRING2", "COMMENT", "EOL", "WS" ];
    static ruleNames = [ "prog", "line", "instruction", "lbl", "endlbl", 
                         "assemblerdirective", "masmdirectives", "masmdirective", 
                         "assume", "label_", "type_", "group", "segment", 
                         "endsegment", "align", "assign", "put", "include", 
                         "includelib", "invoke", "option", "ds", "dw", "db", 
                         "dm", "dup", "equ", "extern_", "public_", "if_", 
                         "endif_", "org", "expressionlist", "label", "expression", 
                         "multiplyingExpression", "argument", "gross", "grossrawassemblerdirective", 
                         "dollar", "ques", "register_", "string", "name", 
                         "number", "opcode", "rep" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = asmMASMParser.ruleNames;
        this.literalNames = asmMASMParser.literalNames;
        this.symbolicNames = asmMASMParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, asmMASMParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2256535040) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2197255) !== 0)) {
	            this.state = 94;
	            this.line();
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 100;
	        this.match(asmMASMParser.EOF);
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
	    this.enterRule(localctx, 2, asmMASMParser.RULE_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 102;
	            this.lbl();

	        } else if(la_===2) {
	            this.state = 103;
	            this.endlbl();

	        }
	        this.state = 109;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 9:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 40:
	        case 41:
	        case 42:
	        case 48:
	        	this.state = 106;
	        	this.assemblerdirective();
	        	break;
	        case 47:
	        	this.state = 107;
	        	this.masmdirectives();
	        	break;
	        case 25:
	        case 26:
	        	this.state = 108;
	        	this.instruction();
	        	break;
	        case 53:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 111;
	        this.match(asmMASMParser.EOL);
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
	    this.enterRule(localctx, 4, asmMASMParser.RULE_instruction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26) {
	            this.state = 113;
	            this.rep();
	        }

	        this.state = 116;
	        this.opcode();
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 197147272) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 247) !== 0)) {
	            this.state = 117;
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



	lbl() {
	    let localctx = new LblContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, asmMASMParser.RULE_lbl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.label();
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 121;
	            this.match(asmMASMParser.T__0);
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



	endlbl() {
	    let localctx = new EndlblContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, asmMASMParser.RULE_endlbl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(asmMASMParser.END);
	        this.state = 126;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 125;
	            this.name();

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



	assemblerdirective() {
	    let localctx = new AssemblerdirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, asmMASMParser.RULE_assemblerdirective);
	    var _la = 0;
	    try {
	        this.state = 155;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 128;
	            this.org();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 129;
	            this.if_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 130;
	            this.endif_();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 131;
	            this.equ();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 132;
	            this.db();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 133;
	            this.dw();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 134;
	            this.dm();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 135;
	            this.ds();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 136;
	            this.include();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 137;
	            this.includelib();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 138;
	            this.invoke();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 139;
	            this.option();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 140;
	            this.put();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 141;
	            this.assign();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 142;
	            this.segment();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 143;
	            this.endsegment();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 144;
	            this.group();
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 145;
	            this.label_();
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 146;
	            this.assume();
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 147;
	            this.extern_();
	            break;

	        case 21:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 148;
	            this.public_();
	            break;

	        case 22:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 149;
	            this.type_();
	            this.state = 151; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 150;
	                this.expressionlist();
	                this.state = 153; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 197147272) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 247) !== 0));
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



	masmdirectives() {
	    let localctx = new MasmdirectivesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, asmMASMParser.RULE_masmdirectives);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 157;
	            this.masmdirective();
	            this.state = 160; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===47);
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



	masmdirective() {
	    let localctx = new MasmdirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, asmMASMParser.RULE_masmdirective);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(asmMASMParser.MASMDIRECTIVE);
	        this.state = 164;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 197147272) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 247) !== 0)) {
	            this.state = 163;
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



	assume() {
	    let localctx = new AssumeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, asmMASMParser.RULE_assume);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(asmMASMParser.ASSUME);
	        this.state = 167;
	        this.register_();
	        this.state = 168;
	        this.match(asmMASMParser.T__0);
	        this.state = 169;
	        this.name();
	        this.state = 177;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 170;
	            this.match(asmMASMParser.T__1);
	            this.state = 171;
	            this.register_();
	            this.state = 172;
	            this.match(asmMASMParser.T__0);
	            this.state = 173;
	            this.name();
	            this.state = 179;
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



	label_() {
	    let localctx = new Label_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, asmMASMParser.RULE_label_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.name();
	        this.state = 181;
	        this.match(asmMASMParser.LABEL);
	        this.state = 182;
	        this.type_();
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



	type_() {
	    let localctx = new Type_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, asmMASMParser.RULE_type_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        _la = this._input.LA(1);
	        if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 15) !== 0))) {
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



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, asmMASMParser.RULE_group);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.name();
	        this.state = 187;
	        this.match(asmMASMParser.GROUP);
	        this.state = 188;
	        this.name();
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 189;
	            this.match(asmMASMParser.T__1);
	            this.state = 190;
	            this.name();
	            this.state = 195;
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



	segment() {
	    let localctx = new SegmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, asmMASMParser.RULE_segment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.name();
	        this.state = 197;
	        this.match(asmMASMParser.SEGMENT);
	        this.state = 199;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 125) !== 0)) {
	            this.state = 198;
	            this.align();
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



	endsegment() {
	    let localctx = new EndsegmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, asmMASMParser.RULE_endsegment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.name();
	        this.state = 202;
	        this.match(asmMASMParser.SEGMENTEND);
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



	align() {
	    let localctx = new AlignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, asmMASMParser.RULE_align);
	    try {
	        this.state = 214;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 204;
	            this.match(asmMASMParser.BYTE);
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 205;
	            this.match(asmMASMParser.WORD);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 206;
	            this.match(asmMASMParser.DWORD);
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 207;
	            this.match(asmMASMParser.PARA);
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 208;
	            this.match(asmMASMParser.PAGE);
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 209;
	            this.match(asmMASMParser.ALIGN);
	            this.state = 210;
	            this.match(asmMASMParser.T__2);
	            this.state = 211;
	            this.number();
	            this.state = 212;
	            this.match(asmMASMParser.T__3);
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



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, asmMASMParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.name();
	        this.state = 217;
	        this.match(asmMASMParser.ASSIGN);
	        this.state = 218;
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



	put() {
	    let localctx = new PutContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, asmMASMParser.RULE_put);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.match(asmMASMParser.PUT);
	        this.state = 221;
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



	include() {
	    let localctx = new IncludeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, asmMASMParser.RULE_include);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(asmMASMParser.INCLUDE);
	        this.state = 224;
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



	includelib() {
	    let localctx = new IncludelibContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, asmMASMParser.RULE_includelib);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(asmMASMParser.INCLUDELIB);
	        this.state = 227;
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



	invoke() {
	    let localctx = new InvokeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, asmMASMParser.RULE_invoke);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.match(asmMASMParser.INVOKE);
	        this.state = 230;
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



	option() {
	    let localctx = new OptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, asmMASMParser.RULE_option);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(asmMASMParser.OPTION);
	        this.state = 233;
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



	ds() {
	    let localctx = new DsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, asmMASMParser.RULE_ds);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.match(asmMASMParser.DS);
	        this.state = 236;
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



	dw() {
	    let localctx = new DwContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, asmMASMParser.RULE_dw);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(asmMASMParser.DW);
	        this.state = 239;
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



	db() {
	    let localctx = new DbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, asmMASMParser.RULE_db);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this.match(asmMASMParser.DB);
	        this.state = 242;
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



	dm() {
	    let localctx = new DmContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, asmMASMParser.RULE_dm);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this.match(asmMASMParser.DM);
	        this.state = 245;
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



	dup() {
	    let localctx = new DupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, asmMASMParser.RULE_dup);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this.number();
	        this.state = 248;
	        this.match(asmMASMParser.DUP);
	        this.state = 249;
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



	equ() {
	    let localctx = new EquContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, asmMASMParser.RULE_equ);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        this.match(asmMASMParser.EQU);
	        this.state = 252;
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



	extern_() {
	    let localctx = new Extern_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, asmMASMParser.RULE_extern_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(asmMASMParser.EXTERN);
	        this.state = 255;
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



	public_() {
	    let localctx = new Public_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, asmMASMParser.RULE_public_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this.match(asmMASMParser.PUBLIC);
	        this.state = 258;
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



	if_() {
	    let localctx = new If_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, asmMASMParser.RULE_if_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(asmMASMParser.IF);
	        this.state = 261;
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



	endif_() {
	    let localctx = new Endif_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, asmMASMParser.RULE_endif_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(asmMASMParser.ENDIF);
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



	org() {
	    let localctx = new OrgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, asmMASMParser.RULE_org);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this.match(asmMASMParser.ORG);
	        this.state = 266;
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



	expressionlist() {
	    let localctx = new ExpressionlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, asmMASMParser.RULE_expressionlist);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this.expression();
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 269;
	            this.match(asmMASMParser.T__1);
	            this.state = 270;
	            this.expression();
	            this.state = 275;
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
	    this.enterRule(localctx, 66, asmMASMParser.RULE_label);
	    try {
	        this.state = 278;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 276;
	            this.name();
	            break;
	        case 9:
	        case 11:
	        case 12:
	        case 13:
	        case 22:
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 277;
	            this.gross();
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, asmMASMParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.multiplyingExpression();
	        this.state = 285;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 281;
	                this.match(asmMASMParser.SIGN);
	                this.state = 282;
	                this.multiplyingExpression(); 
	            }
	            this.state = 287;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
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
	    this.enterRule(localctx, 70, asmMASMParser.RULE_multiplyingExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
	        this.argument();
	        this.state = 293;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 289;
	                _la = this._input.LA(1);
	                if(!(_la===5 || _la===6)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 290;
	                this.argument(); 
	            }
	            this.state = 295;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
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
	    this.enterRule(localctx, 72, asmMASMParser.RULE_argument);
	    try {
	        this.state = 321;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 296;
	            this.number();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 297;
	            this.dollar();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 298;
	            this.ques();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 299;
	            this.register_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 303;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	            if(la_===1) {
	                this.state = 300;
	                this.name();
	                this.state = 301;
	                this.match(asmMASMParser.T__0);

	            }
	            this.state = 305;
	            this.name();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 306;
	            this.string();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 307;
	            this.match(asmMASMParser.T__2);
	            this.state = 308;
	            this.expression();
	            this.state = 309;
	            this.match(asmMASMParser.T__3);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 311;
	            this.match(asmMASMParser.T__6);
	            this.state = 312;
	            this.expression();
	            this.state = 313;
	            this.match(asmMASMParser.T__7);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 315;
	            this.match(asmMASMParser.NOT);
	            this.state = 316;
	            this.expression();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 317;
	            this.match(asmMASMParser.OFFSET);
	            this.state = 318;
	            this.expression();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 319;
	            this.gross();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 320;
	            this.dup();
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



	gross() {
	    let localctx = new GrossContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, asmMASMParser.RULE_gross);
	    try {
	        this.state = 325;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 323;
	            this.opcode();
	            break;
	        case 9:
	        case 11:
	        case 12:
	        case 13:
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 324;
	            this.grossrawassemblerdirective();
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



	grossrawassemblerdirective() {
	    let localctx = new GrossrawassemblerdirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, asmMASMParser.RULE_grossrawassemblerdirective);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 327;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4209152) !== 0))) {
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



	dollar() {
	    let localctx = new DollarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, asmMASMParser.RULE_dollar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 329;
	        this.match(asmMASMParser.DOLLAR);
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



	ques() {
	    let localctx = new QuesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, asmMASMParser.RULE_ques);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        this.match(asmMASMParser.QUES);
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
	    this.enterRule(localctx, 82, asmMASMParser.RULE_register_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 333;
	        this.match(asmMASMParser.REGISTER);
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



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, asmMASMParser.RULE_string);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        _la = this._input.LA(1);
	        if(!(_la===50 || _la===51)) {
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, asmMASMParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 337;
	        this.match(asmMASMParser.NAME);
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
	    this.enterRule(localctx, 88, asmMASMParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===46) {
	            this.state = 339;
	            this.match(asmMASMParser.SIGN);
	        }

	        this.state = 342;
	        this.match(asmMASMParser.NUMBER);
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
	    this.enterRule(localctx, 90, asmMASMParser.RULE_opcode);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.match(asmMASMParser.OPCODE);
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



	rep() {
	    let localctx = new RepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, asmMASMParser.RULE_rep);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 346;
	        this.match(asmMASMParser.REP);
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

asmMASMParser.EOF = antlr4.Token.EOF;
asmMASMParser.T__0 = 1;
asmMASMParser.T__1 = 2;
asmMASMParser.T__2 = 3;
asmMASMParser.T__3 = 4;
asmMASMParser.T__4 = 5;
asmMASMParser.T__5 = 6;
asmMASMParser.T__6 = 7;
asmMASMParser.T__7 = 8;
asmMASMParser.ORG = 9;
asmMASMParser.END = 10;
asmMASMParser.ENDIF = 11;
asmMASMParser.IF = 12;
asmMASMParser.EQU = 13;
asmMASMParser.DW = 14;
asmMASMParser.DB = 15;
asmMASMParser.DM = 16;
asmMASMParser.DS = 17;
asmMASMParser.INCLUDE = 18;
asmMASMParser.INCLUDELIB = 19;
asmMASMParser.INVOKE = 20;
asmMASMParser.OPTION = 21;
asmMASMParser.PUT = 22;
asmMASMParser.NOT = 23;
asmMASMParser.REGISTER = 24;
asmMASMParser.OPCODE = 25;
asmMASMParser.REP = 26;
asmMASMParser.OFFSET = 27;
asmMASMParser.SEGMENT = 28;
asmMASMParser.SEGMENTEND = 29;
asmMASMParser.GROUP = 30;
asmMASMParser.BYTE = 31;
asmMASMParser.SBYTE = 32;
asmMASMParser.WORD = 33;
asmMASMParser.DWORD = 34;
asmMASMParser.PARA = 35;
asmMASMParser.PAGE = 36;
asmMASMParser.ALIGN = 37;
asmMASMParser.LABEL = 38;
asmMASMParser.DUP = 39;
asmMASMParser.ASSUME = 40;
asmMASMParser.EXTERN = 41;
asmMASMParser.PUBLIC = 42;
asmMASMParser.ASSIGN = 43;
asmMASMParser.DOLLAR = 44;
asmMASMParser.QUES = 45;
asmMASMParser.SIGN = 46;
asmMASMParser.MASMDIRECTIVE = 47;
asmMASMParser.NAME = 48;
asmMASMParser.NUMBER = 49;
asmMASMParser.STRING1 = 50;
asmMASMParser.STRING2 = 51;
asmMASMParser.COMMENT = 52;
asmMASMParser.EOL = 53;
asmMASMParser.WS = 54;

asmMASMParser.RULE_prog = 0;
asmMASMParser.RULE_line = 1;
asmMASMParser.RULE_instruction = 2;
asmMASMParser.RULE_lbl = 3;
asmMASMParser.RULE_endlbl = 4;
asmMASMParser.RULE_assemblerdirective = 5;
asmMASMParser.RULE_masmdirectives = 6;
asmMASMParser.RULE_masmdirective = 7;
asmMASMParser.RULE_assume = 8;
asmMASMParser.RULE_label_ = 9;
asmMASMParser.RULE_type_ = 10;
asmMASMParser.RULE_group = 11;
asmMASMParser.RULE_segment = 12;
asmMASMParser.RULE_endsegment = 13;
asmMASMParser.RULE_align = 14;
asmMASMParser.RULE_assign = 15;
asmMASMParser.RULE_put = 16;
asmMASMParser.RULE_include = 17;
asmMASMParser.RULE_includelib = 18;
asmMASMParser.RULE_invoke = 19;
asmMASMParser.RULE_option = 20;
asmMASMParser.RULE_ds = 21;
asmMASMParser.RULE_dw = 22;
asmMASMParser.RULE_db = 23;
asmMASMParser.RULE_dm = 24;
asmMASMParser.RULE_dup = 25;
asmMASMParser.RULE_equ = 26;
asmMASMParser.RULE_extern_ = 27;
asmMASMParser.RULE_public_ = 28;
asmMASMParser.RULE_if_ = 29;
asmMASMParser.RULE_endif_ = 30;
asmMASMParser.RULE_org = 31;
asmMASMParser.RULE_expressionlist = 32;
asmMASMParser.RULE_label = 33;
asmMASMParser.RULE_expression = 34;
asmMASMParser.RULE_multiplyingExpression = 35;
asmMASMParser.RULE_argument = 36;
asmMASMParser.RULE_gross = 37;
asmMASMParser.RULE_grossrawassemblerdirective = 38;
asmMASMParser.RULE_dollar = 39;
asmMASMParser.RULE_ques = 40;
asmMASMParser.RULE_register_ = 41;
asmMASMParser.RULE_string = 42;
asmMASMParser.RULE_name = 43;
asmMASMParser.RULE_number = 44;
asmMASMParser.RULE_opcode = 45;
asmMASMParser.RULE_rep = 46;

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
        this.ruleIndex = asmMASMParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(asmMASMParser.EOF, 0);
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
	    if(listener instanceof asmMASMListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
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
        this.ruleIndex = asmMASMParser.RULE_line;
    }

	EOL() {
	    return this.getToken(asmMASMParser.EOL, 0);
	};

	lbl() {
	    return this.getTypedRuleContext(LblContext,0);
	};

	endlbl() {
	    return this.getTypedRuleContext(EndlblContext,0);
	};

	assemblerdirective() {
	    return this.getTypedRuleContext(AssemblerdirectiveContext,0);
	};

	masmdirectives() {
	    return this.getTypedRuleContext(MasmdirectivesContext,0);
	};

	instruction() {
	    return this.getTypedRuleContext(InstructionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
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
        this.ruleIndex = asmMASMParser.RULE_instruction;
    }

	opcode() {
	    return this.getTypedRuleContext(OpcodeContext,0);
	};

	rep() {
	    return this.getTypedRuleContext(RepContext,0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitInstruction(this);
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
        this.ruleIndex = asmMASMParser.RULE_lbl;
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterLbl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitLbl(this);
		}
	}


}



class EndlblContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_endlbl;
    }

	END() {
	    return this.getToken(asmMASMParser.END, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterEndlbl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitEndlbl(this);
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
        this.ruleIndex = asmMASMParser.RULE_assemblerdirective;
    }

	org() {
	    return this.getTypedRuleContext(OrgContext,0);
	};

	if_() {
	    return this.getTypedRuleContext(If_Context,0);
	};

	endif_() {
	    return this.getTypedRuleContext(Endif_Context,0);
	};

	equ() {
	    return this.getTypedRuleContext(EquContext,0);
	};

	db() {
	    return this.getTypedRuleContext(DbContext,0);
	};

	dw() {
	    return this.getTypedRuleContext(DwContext,0);
	};

	dm() {
	    return this.getTypedRuleContext(DmContext,0);
	};

	ds() {
	    return this.getTypedRuleContext(DsContext,0);
	};

	include() {
	    return this.getTypedRuleContext(IncludeContext,0);
	};

	includelib() {
	    return this.getTypedRuleContext(IncludelibContext,0);
	};

	invoke() {
	    return this.getTypedRuleContext(InvokeContext,0);
	};

	option() {
	    return this.getTypedRuleContext(OptionContext,0);
	};

	put() {
	    return this.getTypedRuleContext(PutContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	segment() {
	    return this.getTypedRuleContext(SegmentContext,0);
	};

	endsegment() {
	    return this.getTypedRuleContext(EndsegmentContext,0);
	};

	group() {
	    return this.getTypedRuleContext(GroupContext,0);
	};

	label_() {
	    return this.getTypedRuleContext(Label_Context,0);
	};

	assume() {
	    return this.getTypedRuleContext(AssumeContext,0);
	};

	extern_() {
	    return this.getTypedRuleContext(Extern_Context,0);
	};

	public_() {
	    return this.getTypedRuleContext(Public_Context,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	expressionlist = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionlistContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionlistContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterAssemblerdirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitAssemblerdirective(this);
		}
	}


}



class MasmdirectivesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_masmdirectives;
    }

	masmdirective = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MasmdirectiveContext);
	    } else {
	        return this.getTypedRuleContext(MasmdirectiveContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterMasmdirectives(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitMasmdirectives(this);
		}
	}


}



class MasmdirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_masmdirective;
    }

	MASMDIRECTIVE() {
	    return this.getToken(asmMASMParser.MASMDIRECTIVE, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterMasmdirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitMasmdirective(this);
		}
	}


}



class AssumeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_assume;
    }

	ASSUME() {
	    return this.getToken(asmMASMParser.ASSUME, 0);
	};

	register_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Register_Context);
	    } else {
	        return this.getTypedRuleContext(Register_Context,i);
	    }
	};

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterAssume(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitAssume(this);
		}
	}


}



class Label_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_label_;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	LABEL() {
	    return this.getToken(asmMASMParser.LABEL, 0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterLabel_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitLabel_(this);
		}
	}


}



class Type_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_type_;
    }

	BYTE() {
	    return this.getToken(asmMASMParser.BYTE, 0);
	};

	SBYTE() {
	    return this.getToken(asmMASMParser.SBYTE, 0);
	};

	WORD() {
	    return this.getToken(asmMASMParser.WORD, 0);
	};

	DWORD() {
	    return this.getToken(asmMASMParser.DWORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitType_(this);
		}
	}


}



class GroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_group;
    }

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	GROUP() {
	    return this.getToken(asmMASMParser.GROUP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitGroup(this);
		}
	}


}



class SegmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_segment;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	SEGMENT() {
	    return this.getToken(asmMASMParser.SEGMENT, 0);
	};

	align() {
	    return this.getTypedRuleContext(AlignContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterSegment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitSegment(this);
		}
	}


}



class EndsegmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_endsegment;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	SEGMENTEND() {
	    return this.getToken(asmMASMParser.SEGMENTEND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterEndsegment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitEndsegment(this);
		}
	}


}



class AlignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_align;
    }

	BYTE() {
	    return this.getToken(asmMASMParser.BYTE, 0);
	};

	WORD() {
	    return this.getToken(asmMASMParser.WORD, 0);
	};

	DWORD() {
	    return this.getToken(asmMASMParser.DWORD, 0);
	};

	PARA() {
	    return this.getToken(asmMASMParser.PARA, 0);
	};

	PAGE() {
	    return this.getToken(asmMASMParser.PAGE, 0);
	};

	ALIGN() {
	    return this.getToken(asmMASMParser.ALIGN, 0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterAlign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitAlign(this);
		}
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_assign;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	ASSIGN() {
	    return this.getToken(asmMASMParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitAssign(this);
		}
	}


}



class PutContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_put;
    }

	PUT() {
	    return this.getToken(asmMASMParser.PUT, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterPut(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitPut(this);
		}
	}


}



class IncludeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_include;
    }

	INCLUDE() {
	    return this.getToken(asmMASMParser.INCLUDE, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterInclude(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitInclude(this);
		}
	}


}



class IncludelibContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_includelib;
    }

	INCLUDELIB() {
	    return this.getToken(asmMASMParser.INCLUDELIB, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterIncludelib(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitIncludelib(this);
		}
	}


}



class InvokeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_invoke;
    }

	INVOKE() {
	    return this.getToken(asmMASMParser.INVOKE, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterInvoke(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitInvoke(this);
		}
	}


}



class OptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_option;
    }

	OPTION() {
	    return this.getToken(asmMASMParser.OPTION, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterOption(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitOption(this);
		}
	}


}



class DsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_ds;
    }

	DS() {
	    return this.getToken(asmMASMParser.DS, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterDs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitDs(this);
		}
	}


}



class DwContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_dw;
    }

	DW() {
	    return this.getToken(asmMASMParser.DW, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterDw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitDw(this);
		}
	}


}



class DbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_db;
    }

	DB() {
	    return this.getToken(asmMASMParser.DB, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterDb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitDb(this);
		}
	}


}



class DmContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_dm;
    }

	DM() {
	    return this.getToken(asmMASMParser.DM, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterDm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitDm(this);
		}
	}


}



class DupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_dup;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	DUP() {
	    return this.getToken(asmMASMParser.DUP, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterDup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitDup(this);
		}
	}


}



class EquContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_equ;
    }

	EQU() {
	    return this.getToken(asmMASMParser.EQU, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterEqu(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitEqu(this);
		}
	}


}



class Extern_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_extern_;
    }

	EXTERN() {
	    return this.getToken(asmMASMParser.EXTERN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterExtern_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitExtern_(this);
		}
	}


}



class Public_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_public_;
    }

	PUBLIC() {
	    return this.getToken(asmMASMParser.PUBLIC, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterPublic_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitPublic_(this);
		}
	}


}



class If_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_if_;
    }

	IF() {
	    return this.getToken(asmMASMParser.IF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterIf_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitIf_(this);
		}
	}


}



class Endif_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_endif_;
    }

	ENDIF() {
	    return this.getToken(asmMASMParser.ENDIF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterEndif_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitEndif_(this);
		}
	}


}



class OrgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_org;
    }

	ORG() {
	    return this.getToken(asmMASMParser.ORG, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterOrg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitOrg(this);
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
        this.ruleIndex = asmMASMParser.RULE_expressionlist;
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
	    if(listener instanceof asmMASMListener ) {
	        listener.enterExpressionlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
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
        this.ruleIndex = asmMASMParser.RULE_label;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	gross() {
	    return this.getTypedRuleContext(GrossContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
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
        this.ruleIndex = asmMASMParser.RULE_expression;
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

	SIGN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(asmMASMParser.SIGN);
	    } else {
	        return this.getToken(asmMASMParser.SIGN, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
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
        this.ruleIndex = asmMASMParser.RULE_multiplyingExpression;
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
	    if(listener instanceof asmMASMListener ) {
	        listener.enterMultiplyingExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
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
        this.ruleIndex = asmMASMParser.RULE_argument;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	dollar() {
	    return this.getTypedRuleContext(DollarContext,0);
	};

	ques() {
	    return this.getTypedRuleContext(QuesContext,0);
	};

	register_() {
	    return this.getTypedRuleContext(Register_Context,0);
	};

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	NOT() {
	    return this.getToken(asmMASMParser.NOT, 0);
	};

	OFFSET() {
	    return this.getToken(asmMASMParser.OFFSET, 0);
	};

	gross() {
	    return this.getTypedRuleContext(GrossContext,0);
	};

	dup() {
	    return this.getTypedRuleContext(DupContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitArgument(this);
		}
	}


}



class GrossContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_gross;
    }

	opcode() {
	    return this.getTypedRuleContext(OpcodeContext,0);
	};

	grossrawassemblerdirective() {
	    return this.getTypedRuleContext(GrossrawassemblerdirectiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterGross(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitGross(this);
		}
	}


}



class GrossrawassemblerdirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_grossrawassemblerdirective;
    }

	PUT() {
	    return this.getToken(asmMASMParser.PUT, 0);
	};

	IF() {
	    return this.getToken(asmMASMParser.IF, 0);
	};

	ENDIF() {
	    return this.getToken(asmMASMParser.ENDIF, 0);
	};

	ORG() {
	    return this.getToken(asmMASMParser.ORG, 0);
	};

	EQU() {
	    return this.getToken(asmMASMParser.EQU, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterGrossrawassemblerdirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitGrossrawassemblerdirective(this);
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
        this.ruleIndex = asmMASMParser.RULE_dollar;
    }

	DOLLAR() {
	    return this.getToken(asmMASMParser.DOLLAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterDollar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitDollar(this);
		}
	}


}



class QuesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_ques;
    }

	QUES() {
	    return this.getToken(asmMASMParser.QUES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterQues(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitQues(this);
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
        this.ruleIndex = asmMASMParser.RULE_register_;
    }

	REGISTER() {
	    return this.getToken(asmMASMParser.REGISTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterRegister_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitRegister_(this);
		}
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_string;
    }

	STRING1() {
	    return this.getToken(asmMASMParser.STRING1, 0);
	};

	STRING2() {
	    return this.getToken(asmMASMParser.STRING2, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitString(this);
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
        this.ruleIndex = asmMASMParser.RULE_name;
    }

	NAME() {
	    return this.getToken(asmMASMParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
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
        this.ruleIndex = asmMASMParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(asmMASMParser.NUMBER, 0);
	};

	SIGN() {
	    return this.getToken(asmMASMParser.SIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitNumber(this);
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
        this.ruleIndex = asmMASMParser.RULE_opcode;
    }

	OPCODE() {
	    return this.getToken(asmMASMParser.OPCODE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterOpcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitOpcode(this);
		}
	}


}



class RepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asmMASMParser.RULE_rep;
    }

	REP() {
	    return this.getToken(asmMASMParser.REP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.enterRep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asmMASMListener ) {
	        listener.exitRep(this);
		}
	}


}




asmMASMParser.ProgContext = ProgContext; 
asmMASMParser.LineContext = LineContext; 
asmMASMParser.InstructionContext = InstructionContext; 
asmMASMParser.LblContext = LblContext; 
asmMASMParser.EndlblContext = EndlblContext; 
asmMASMParser.AssemblerdirectiveContext = AssemblerdirectiveContext; 
asmMASMParser.MasmdirectivesContext = MasmdirectivesContext; 
asmMASMParser.MasmdirectiveContext = MasmdirectiveContext; 
asmMASMParser.AssumeContext = AssumeContext; 
asmMASMParser.Label_Context = Label_Context; 
asmMASMParser.Type_Context = Type_Context; 
asmMASMParser.GroupContext = GroupContext; 
asmMASMParser.SegmentContext = SegmentContext; 
asmMASMParser.EndsegmentContext = EndsegmentContext; 
asmMASMParser.AlignContext = AlignContext; 
asmMASMParser.AssignContext = AssignContext; 
asmMASMParser.PutContext = PutContext; 
asmMASMParser.IncludeContext = IncludeContext; 
asmMASMParser.IncludelibContext = IncludelibContext; 
asmMASMParser.InvokeContext = InvokeContext; 
asmMASMParser.OptionContext = OptionContext; 
asmMASMParser.DsContext = DsContext; 
asmMASMParser.DwContext = DwContext; 
asmMASMParser.DbContext = DbContext; 
asmMASMParser.DmContext = DmContext; 
asmMASMParser.DupContext = DupContext; 
asmMASMParser.EquContext = EquContext; 
asmMASMParser.Extern_Context = Extern_Context; 
asmMASMParser.Public_Context = Public_Context; 
asmMASMParser.If_Context = If_Context; 
asmMASMParser.Endif_Context = Endif_Context; 
asmMASMParser.OrgContext = OrgContext; 
asmMASMParser.ExpressionlistContext = ExpressionlistContext; 
asmMASMParser.LabelContext = LabelContext; 
asmMASMParser.ExpressionContext = ExpressionContext; 
asmMASMParser.MultiplyingExpressionContext = MultiplyingExpressionContext; 
asmMASMParser.ArgumentContext = ArgumentContext; 
asmMASMParser.GrossContext = GrossContext; 
asmMASMParser.GrossrawassemblerdirectiveContext = GrossrawassemblerdirectiveContext; 
asmMASMParser.DollarContext = DollarContext; 
asmMASMParser.QuesContext = QuesContext; 
asmMASMParser.Register_Context = Register_Context; 
asmMASMParser.StringContext = StringContext; 
asmMASMParser.NameContext = NameContext; 
asmMASMParser.NumberContext = NumberContext; 
asmMASMParser.OpcodeContext = OpcodeContext; 
asmMASMParser.RepContext = RepContext; 
