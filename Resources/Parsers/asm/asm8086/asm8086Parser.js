// Generated from ./asm/asm8086/asm8086.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import asm8086Listener from './asm8086Listener.js';
const serializedATN = [4,1,188,289,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,1,0,5,0,76,8,0,10,0,12,0,79,9,0,1,0,1,0,1,1,3,1,84,
8,1,1,1,1,1,3,1,88,8,1,1,1,1,1,5,1,92,8,1,10,1,12,1,95,9,1,1,1,1,1,1,2,3,
2,100,8,2,1,2,1,2,3,2,104,8,2,1,3,1,3,3,3,108,8,3,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,126,8,4,1,5,3,5,129,8,5,1,
5,1,5,1,5,1,6,3,6,135,8,6,1,6,1,6,1,6,1,7,3,7,141,8,7,1,7,1,7,1,7,1,8,1,
8,3,8,148,8,8,1,9,1,9,3,9,152,8,9,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,
1,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,15,5,15,174,8,15,
10,15,12,15,177,9,15,1,15,1,15,1,15,1,15,3,15,183,8,15,1,16,1,16,1,17,1,
17,1,17,1,17,3,17,191,8,17,1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,21,1,21,
1,21,1,22,1,22,1,22,1,23,1,23,1,23,5,23,209,8,23,10,23,12,23,212,9,23,1,
24,1,24,1,25,1,25,1,25,1,25,5,25,220,8,25,10,25,12,25,223,9,25,1,26,1,26,
1,26,5,26,228,8,26,10,26,12,26,231,9,26,1,27,1,27,1,27,1,27,1,27,1,27,1,
27,1,27,1,27,1,27,1,27,3,27,244,8,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,263,8,27,1,28,3,28,
266,8,28,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,1,32,1,32,1,33,3,33,279,
8,33,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,36,0,0,37,0,2,4,6,8,10,12,
14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,
62,64,66,68,70,72,0,7,1,0,22,23,3,0,24,24,53,53,170,171,1,0,1,3,1,0,26,46,
1,0,47,164,1,0,165,169,1,0,173,174,301,0,77,1,0,0,0,2,83,1,0,0,0,4,99,1,
0,0,0,6,105,1,0,0,0,8,125,1,0,0,0,10,128,1,0,0,0,12,134,1,0,0,0,14,140,1,
0,0,0,16,145,1,0,0,0,18,149,1,0,0,0,20,153,1,0,0,0,22,156,1,0,0,0,24,159,
1,0,0,0,26,162,1,0,0,0,28,166,1,0,0,0,30,182,1,0,0,0,32,184,1,0,0,0,34,190,
1,0,0,0,36,192,1,0,0,0,38,194,1,0,0,0,40,196,1,0,0,0,42,199,1,0,0,0,44,202,
1,0,0,0,46,205,1,0,0,0,48,213,1,0,0,0,50,215,1,0,0,0,52,224,1,0,0,0,54,262,
1,0,0,0,56,265,1,0,0,0,58,269,1,0,0,0,60,271,1,0,0,0,62,273,1,0,0,0,64,275,
1,0,0,0,66,278,1,0,0,0,68,282,1,0,0,0,70,284,1,0,0,0,72,286,1,0,0,0,74,76,
3,2,1,0,75,74,1,0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,80,1,
0,0,0,79,77,1,0,0,0,80,81,5,0,0,1,81,1,1,0,0,0,82,84,3,6,3,0,83,82,1,0,0,
0,83,84,1,0,0,0,84,87,1,0,0,0,85,88,3,8,4,0,86,88,3,4,2,0,87,85,1,0,0,0,
87,86,1,0,0,0,87,88,1,0,0,0,88,93,1,0,0,0,89,90,5,175,0,0,90,92,3,4,2,0,
91,89,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,96,1,0,0,0,95,
93,1,0,0,0,96,97,5,187,0,0,97,3,1,0,0,0,98,100,3,70,35,0,99,98,1,0,0,0,99,
100,1,0,0,0,100,101,1,0,0,0,101,103,3,68,34,0,102,104,3,46,23,0,103,102,
1,0,0,0,103,104,1,0,0,0,104,5,1,0,0,0,105,107,3,48,24,0,106,108,5,176,0,
0,107,106,1,0,0,0,107,108,1,0,0,0,108,7,1,0,0,0,109,126,3,40,20,0,110,126,
3,38,19,0,111,126,3,28,14,0,112,126,3,36,18,0,113,126,3,26,13,0,114,126,
3,22,11,0,115,126,3,20,10,0,116,126,3,16,8,0,117,126,3,24,12,0,118,126,3,
18,9,0,119,126,3,42,21,0,120,126,3,44,22,0,121,126,3,10,5,0,122,126,3,12,
6,0,123,126,3,14,7,0,124,126,5,177,0,0,125,109,1,0,0,0,125,110,1,0,0,0,125,
111,1,0,0,0,125,112,1,0,0,0,125,113,1,0,0,0,125,114,1,0,0,0,125,115,1,0,
0,0,125,116,1,0,0,0,125,117,1,0,0,0,125,118,1,0,0,0,125,119,1,0,0,0,125,
120,1,0,0,0,125,121,1,0,0,0,125,122,1,0,0,0,125,123,1,0,0,0,125,124,1,0,
0,0,126,9,1,0,0,0,127,129,3,64,32,0,128,127,1,0,0,0,128,129,1,0,0,0,129,
130,1,0,0,0,130,131,5,18,0,0,131,132,3,50,25,0,132,11,1,0,0,0,133,135,3,
64,32,0,134,133,1,0,0,0,134,135,1,0,0,0,135,136,1,0,0,0,136,137,5,19,0,0,
137,138,3,50,25,0,138,13,1,0,0,0,139,141,3,64,32,0,140,139,1,0,0,0,140,141,
1,0,0,0,141,142,1,0,0,0,142,143,5,20,0,0,143,144,3,50,25,0,144,15,1,0,0,
0,145,147,5,5,0,0,146,148,3,50,25,0,147,146,1,0,0,0,147,148,1,0,0,0,148,
17,1,0,0,0,149,151,5,4,0,0,150,152,3,50,25,0,151,150,1,0,0,0,151,152,1,0,
0,0,152,19,1,0,0,0,153,154,5,13,0,0,154,155,3,46,23,0,155,21,1,0,0,0,156,
157,5,14,0,0,157,158,3,46,23,0,158,23,1,0,0,0,159,160,5,15,0,0,160,161,3,
46,23,0,161,25,1,0,0,0,162,163,3,64,32,0,163,164,5,12,0,0,164,165,3,50,25,
0,165,27,1,0,0,0,166,167,5,11,0,0,167,168,3,30,15,0,168,29,1,0,0,0,169,175,
3,34,17,0,170,171,3,32,16,0,171,172,3,34,17,0,172,174,1,0,0,0,173,170,1,
0,0,0,174,177,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,183,1,0,0,0,177,
175,1,0,0,0,178,179,5,178,0,0,179,180,3,30,15,0,180,181,5,179,0,0,181,183,
1,0,0,0,182,169,1,0,0,0,182,178,1,0,0,0,183,31,1,0,0,0,184,185,7,0,0,0,185,
33,1,0,0,0,186,191,3,64,32,0,187,191,3,66,33,0,188,189,5,131,0,0,189,191,
3,34,17,0,190,186,1,0,0,0,190,187,1,0,0,0,190,188,1,0,0,0,191,35,1,0,0,0,
192,193,5,10,0,0,193,37,1,0,0,0,194,195,5,8,0,0,195,39,1,0,0,0,196,197,5,
9,0,0,197,198,3,50,25,0,198,41,1,0,0,0,199,200,5,7,0,0,200,201,3,62,31,0,
201,43,1,0,0,0,202,203,5,6,0,0,203,204,3,64,32,0,204,45,1,0,0,0,205,210,
3,50,25,0,206,207,5,180,0,0,207,209,3,50,25,0,208,206,1,0,0,0,209,212,1,
0,0,0,210,208,1,0,0,0,210,211,1,0,0,0,211,47,1,0,0,0,212,210,1,0,0,0,213,
214,3,64,32,0,214,49,1,0,0,0,215,221,3,52,26,0,216,217,3,72,36,0,217,218,
3,52,26,0,218,220,1,0,0,0,219,216,1,0,0,0,220,223,1,0,0,0,221,219,1,0,0,
0,221,222,1,0,0,0,222,51,1,0,0,0,223,221,1,0,0,0,224,229,3,54,27,0,225,226,
7,1,0,0,226,228,3,54,27,0,227,225,1,0,0,0,228,231,1,0,0,0,229,227,1,0,0,
0,229,230,1,0,0,0,230,53,1,0,0,0,231,229,1,0,0,0,232,263,3,66,33,0,233,263,
3,58,29,0,234,263,3,60,30,0,235,263,3,64,32,0,236,263,3,62,31,0,237,238,
5,178,0,0,238,239,3,50,25,0,239,240,5,179,0,0,240,263,1,0,0,0,241,244,3,
66,33,0,242,244,3,64,32,0,243,241,1,0,0,0,243,242,1,0,0,0,243,244,1,0,0,
0,244,245,1,0,0,0,245,246,5,182,0,0,246,247,3,50,25,0,247,248,5,183,0,0,
248,263,1,0,0,0,249,250,3,56,28,0,250,251,3,50,25,0,251,263,1,0,0,0,252,
253,5,131,0,0,253,263,3,50,25,0,254,255,5,17,0,0,255,263,3,50,25,0,256,257,
5,21,0,0,257,263,3,50,25,0,258,259,3,60,30,0,259,260,5,176,0,0,260,261,3,
50,25,0,261,263,1,0,0,0,262,232,1,0,0,0,262,233,1,0,0,0,262,234,1,0,0,0,
262,235,1,0,0,0,262,236,1,0,0,0,262,237,1,0,0,0,262,243,1,0,0,0,262,249,
1,0,0,0,262,252,1,0,0,0,262,254,1,0,0,0,262,256,1,0,0,0,262,258,1,0,0,0,
263,55,1,0,0,0,264,266,7,2,0,0,265,264,1,0,0,0,265,266,1,0,0,0,266,267,1,
0,0,0,267,268,5,16,0,0,268,57,1,0,0,0,269,270,5,172,0,0,270,59,1,0,0,0,271,
272,7,3,0,0,272,61,1,0,0,0,273,274,5,186,0,0,274,63,1,0,0,0,275,276,5,184,
0,0,276,65,1,0,0,0,277,279,3,72,36,0,278,277,1,0,0,0,278,279,1,0,0,0,279,
280,1,0,0,0,280,281,5,185,0,0,281,67,1,0,0,0,282,283,7,4,0,0,283,69,1,0,
0,0,284,285,7,5,0,0,285,71,1,0,0,0,286,287,7,6,0,0,287,73,1,0,0,0,23,77,
83,87,93,99,103,107,125,128,134,140,147,151,175,182,190,210,221,229,243,
262,265,278];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class asm8086Parser extends antlr4.Parser {

    static grammarFileName = "asm8086.g4";
    static literalNames = [ null, "'BYTE'", "'WORD'", "'DWORD'", "'DSEG'", 
                            "'CSEG'", "'INCLUDE'", "'TITLE'", "'END'", "'ORG'", 
                            "'ENDIF'", "'IF'", "'EQU'", "'DW'", "'DB'", 
                            "'DD'", "'PTR'", "'OFFSET'", "'RW'", "'RB'", 
                            "'RS'", "'LENGTH'", "'EQ'", "'NE'", "'MOD'", 
                            null, "'AH'", "'AL'", "'BH'", "'BL'", "'CH'", 
                            "'CL'", "'DH'", "'DL'", "'AX'", "'BX'", "'CX'", 
                            "'DX'", "'CI'", "'DI'", "'BP'", "'SP'", "'IP'", 
                            "'CS'", "'DS'", "'ES'", "'SS'", "'AAA'", "'AAD'", 
                            "'AAM'", "'AAS'", "'ADC'", "'ADD'", "'AND'", 
                            "'CALL'", "'CBW'", "'CLC'", "'CLD'", "'CLI'", 
                            "'CMC'", "'CMP'", "'CMPSB'", "'CMPSW'", "'CWD'", 
                            "'DAA'", "'DAS'", "'DEC'", "'DIV'", "'ESC'", 
                            "'HLT'", "'IDIV'", "'IMUL'", "'IN'", "'INC'", 
                            "'INT'", "'INTO'", "'IRET'", "'JA'", "'JAE'", 
                            "'JB'", "'JBE'", "'JC'", "'JE'", "'JG'", "'JGE'", 
                            "'JL'", "'JLE'", "'JNA'", "'JNAE'", "'JNB'", 
                            "'JNBE'", "'JNC'", "'JNE'", "'JNG'", "'JNGE'", 
                            "'JNL'", "'JNLE'", "'JNO'", "'JNP'", "'JNS'", 
                            "'JNZ'", "'JO'", "'JP'", "'JPE'", "'JPO'", "'JS'", 
                            "'JZ'", "'JCXZ'", "'JMP'", "'JMPS'", "'JMPF'", 
                            "'LAHF'", "'LDS'", "'LEA'", "'LES'", "'LOCK'", 
                            "'LODS'", "'LODSB'", "'LODSW'", "'LOOP'", "'LOOPE'", 
                            "'LOOPNE'", "'LOOPNZ'", "'LOOPZ'", "'MOV'", 
                            "'MOVS'", "'MOVSB'", "'MOVSW'", "'MUL'", "'NEG'", 
                            "'NOP'", "'NOT'", "'OR'", "'OUT'", "'POP'", 
                            "'POPF'", "'PUSH'", "'PUSHF'", "'RCL'", "'RCR'", 
                            "'RET'", "'RETN'", "'RETF'", "'ROL'", "'ROR'", 
                            "'SAHF'", "'SAL'", "'SAR'", "'SALC'", "'SBB'", 
                            "'SCASB'", "'SCASW'", "'SHL'", "'SHR'", "'STC'", 
                            "'STD'", "'STI'", "'STOSB'", "'STOSW'", "'SUB'", 
                            "'TEST'", "'WAIT'", "'XCHG'", "'XLAT'", "'XOR'", 
                            "'REP'", "'REPE'", "'REPNE'", "'REPNZ'", "'REPZ'", 
                            "'*'", "'/'", "'$'", "'+'", "'-'", "'!'", "':'", 
                            "'.'", "'('", "')'", "','", "';'", "'['", "']'" ];
    static symbolicNames = [ null, "BYTE", "WORD", "DWORD", "DSEG", "CSEG", 
                             "INCLUDE", "TITLE", "END", "ORG", "ENDIF", 
                             "IF", "EQU", "DW", "DB", "DD", "PTR", "OFFSET", 
                             "RW", "RB", "RS", "LENGTH", "EQ", "NE", "MOD", 
                             "COMMENT", "AH", "AL", "BH", "BL", "CH", "CL", 
                             "DH", "DL", "AX", "BX", "CX", "DX", "CI", "DI", 
                             "BP", "SP", "IP", "CS", "DS", "ES", "SS", "AAA", 
                             "AAD", "AAM", "AAS", "ADC", "ADD", "AND", "CALL", 
                             "CBW", "CLC", "CLD", "CLI", "CMC", "CMP", "CMPSB", 
                             "CMPSW", "CWD", "DAA", "DAS", "DEC", "DIV", 
                             "ESC", "HLT", "IDIV", "IMUL", "IN", "INC", 
                             "INT", "INTO", "IRET", "JA", "JAE", "JB", "JBE", 
                             "JC", "JE", "JG", "JGE", "JL", "JLE", "JNA", 
                             "JNAE", "JNB", "JNBE", "JNC", "JNE", "JNG", 
                             "JNGE", "JNL", "JNLE", "JNO", "JNP", "JNS", 
                             "JNZ", "JO", "JP", "JPE", "JPO", "JS", "JZ", 
                             "JCXZ", "JMP", "JMPS", "JMPF", "LAHF", "LDS", 
                             "LEA", "LES", "LOCK", "LODS", "LODSB", "LODSW", 
                             "LOOP", "LOOPE", "LOOPNE", "LOOPNZ", "LOOPZ", 
                             "MOV", "MOVS", "MOVSB", "MOVSW", "MUL", "NEG", 
                             "NOP", "NOT", "OR", "OUT", "POP", "POPF", "PUSH", 
                             "PUSHF", "RCL", "RCR", "RET", "RETN", "RETF", 
                             "ROL", "ROR", "SAHF", "SAL", "SAR", "SALC", 
                             "SBB", "SCASB", "SCASW", "SHL", "SHR", "STC", 
                             "STD", "STI", "STOSB", "STOSW", "SUB", "TEST", 
                             "WAIT", "XCHG", "XLAT", "XOR", "REP", "REPE", 
                             "REPNE", "REPNZ", "REPZ", "STAR", "SLASH", 
                             "DOLLAR", "PLUS", "MINUS", "NOT_", "COLON", 
                             "DOT", "RP", "LP", "COMMA", "SEMI", "LB", "RB_", 
                             "NAME", "NUMBER", "STRING", "EOL", "WS" ];
    static ruleNames = [ "prog", "line", "instruction", "lbl", "assemblerdirective", 
                         "rw", "rb", "rs", "cseg", "dseg", "dw", "db", "dd", 
                         "equ", "if_", "assemblerexpression", "assemblerlogical", 
                         "assemblerterm", "endif_", "end", "org", "title", 
                         "include_", "expressionlist", "label", "expression", 
                         "multiplyingExpression", "argument", "ptr", "dollar", 
                         "register_", "string_", "name", "number", "opcode", 
                         "rep", "sign" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = asm8086Parser.ruleNames;
        this.literalNames = asm8086Parser.literalNames;
        this.symbolicNames = asm8086Parser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, asm8086Parser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1896432) !== 0) || ((((_la - 47)) & ~0x1f) === 0 && ((1 << (_la - 47)) & 4294967295) !== 0) || ((((_la - 79)) & ~0x1f) === 0 && ((1 << (_la - 79)) & 4294967295) !== 0) || ((((_la - 111)) & ~0x1f) === 0 && ((1 << (_la - 111)) & 4294967295) !== 0) || ((((_la - 143)) & ~0x1f) === 0 && ((1 << (_la - 143)) & 134217727) !== 0) || ((((_la - 175)) & ~0x1f) === 0 && ((1 << (_la - 175)) & 4613) !== 0)) {
	            this.state = 74;
	            this.line();
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 80;
	        this.match(asm8086Parser.EOF);
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
	    this.enterRule(localctx, 2, asm8086Parser.RULE_line);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 82;
	            this.lbl();

	        }
	        this.state = 87;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 13:
	        case 14:
	        case 15:
	        case 18:
	        case 19:
	        case 20:
	        case 177:
	        case 184:
	        	this.state = 85;
	        	this.assemblerdirective();
	        	break;
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 63:
	        case 64:
	        case 65:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	        case 77:
	        case 78:
	        case 79:
	        case 80:
	        case 81:
	        case 82:
	        case 83:
	        case 84:
	        case 85:
	        case 86:
	        case 87:
	        case 88:
	        case 89:
	        case 90:
	        case 91:
	        case 92:
	        case 93:
	        case 94:
	        case 95:
	        case 96:
	        case 97:
	        case 98:
	        case 99:
	        case 100:
	        case 101:
	        case 102:
	        case 103:
	        case 104:
	        case 105:
	        case 106:
	        case 107:
	        case 108:
	        case 109:
	        case 110:
	        case 111:
	        case 112:
	        case 113:
	        case 114:
	        case 115:
	        case 116:
	        case 117:
	        case 118:
	        case 119:
	        case 120:
	        case 121:
	        case 122:
	        case 123:
	        case 124:
	        case 125:
	        case 126:
	        case 127:
	        case 128:
	        case 129:
	        case 130:
	        case 131:
	        case 132:
	        case 133:
	        case 134:
	        case 135:
	        case 136:
	        case 137:
	        case 138:
	        case 139:
	        case 140:
	        case 141:
	        case 142:
	        case 143:
	        case 144:
	        case 145:
	        case 146:
	        case 147:
	        case 148:
	        case 149:
	        case 150:
	        case 151:
	        case 152:
	        case 153:
	        case 154:
	        case 155:
	        case 156:
	        case 157:
	        case 158:
	        case 159:
	        case 160:
	        case 161:
	        case 162:
	        case 163:
	        case 164:
	        case 165:
	        case 166:
	        case 167:
	        case 168:
	        case 169:
	        	this.state = 86;
	        	this.instruction();
	        	break;
	        case 175:
	        case 187:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===175) {
	            this.state = 89;
	            this.match(asm8086Parser.NOT_);
	            this.state = 90;
	            this.instruction();
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 96;
	        this.match(asm8086Parser.EOL);
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
	    this.enterRule(localctx, 4, asm8086Parser.RULE_instruction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 165)) & ~0x1f) === 0 && ((1 << (_la - 165)) & 31) !== 0)) {
	            this.state = 98;
	            this.rep();
	        }

	        this.state = 101;
	        this.opcode();
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4230152206) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 32767) !== 0) || _la===131 || ((((_la - 172)) & ~0x1f) === 0 && ((1 << (_la - 172)) & 29767) !== 0)) {
	            this.state = 102;
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
	    this.enterRule(localctx, 6, asm8086Parser.RULE_lbl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.label();
	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===176) {
	            this.state = 106;
	            this.match(asm8086Parser.COLON);
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
	    this.enterRule(localctx, 8, asm8086Parser.RULE_assemblerdirective);
	    try {
	        this.state = 125;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 109;
	            this.org();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 110;
	            this.end();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 111;
	            this.if_();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 112;
	            this.endif_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 113;
	            this.equ();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 114;
	            this.db();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 115;
	            this.dw();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 116;
	            this.cseg();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 117;
	            this.dd();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 118;
	            this.dseg();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 119;
	            this.title();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 120;
	            this.include_();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 121;
	            this.rw();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 122;
	            this.rb();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 123;
	            this.rs();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 124;
	            this.match(asm8086Parser.DOT);
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



	rw() {
	    let localctx = new RwContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, asm8086Parser.RULE_rw);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===184) {
	            this.state = 127;
	            this.name();
	        }

	        this.state = 130;
	        this.match(asm8086Parser.RW);
	        this.state = 131;
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



	rb() {
	    let localctx = new RbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, asm8086Parser.RULE_rb);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===184) {
	            this.state = 133;
	            this.name();
	        }

	        this.state = 136;
	        this.match(asm8086Parser.RB);
	        this.state = 137;
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



	rs() {
	    let localctx = new RsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, asm8086Parser.RULE_rs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===184) {
	            this.state = 139;
	            this.name();
	        }

	        this.state = 142;
	        this.match(asm8086Parser.RS);
	        this.state = 143;
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



	cseg() {
	    let localctx = new CsegContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, asm8086Parser.RULE_cseg);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.match(asm8086Parser.CSEG);
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4230152206) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 32767) !== 0) || _la===131 || ((((_la - 172)) & ~0x1f) === 0 && ((1 << (_la - 172)) & 29767) !== 0)) {
	            this.state = 146;
	            this.expression();
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



	dseg() {
	    let localctx = new DsegContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, asm8086Parser.RULE_dseg);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(asm8086Parser.DSEG);
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4230152206) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 32767) !== 0) || _la===131 || ((((_la - 172)) & ~0x1f) === 0 && ((1 << (_la - 172)) & 29767) !== 0)) {
	            this.state = 150;
	            this.expression();
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



	dw() {
	    let localctx = new DwContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, asm8086Parser.RULE_dw);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(asm8086Parser.DW);
	        this.state = 154;
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
	    this.enterRule(localctx, 22, asm8086Parser.RULE_db);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(asm8086Parser.DB);
	        this.state = 157;
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



	dd() {
	    let localctx = new DdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, asm8086Parser.RULE_dd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this.match(asm8086Parser.DD);
	        this.state = 160;
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



	equ() {
	    let localctx = new EquContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, asm8086Parser.RULE_equ);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.name();
	        this.state = 163;
	        this.match(asm8086Parser.EQU);
	        this.state = 164;
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
	    this.enterRule(localctx, 28, asm8086Parser.RULE_if_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(asm8086Parser.IF);
	        this.state = 167;
	        this.assemblerexpression();
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



	assemblerexpression() {
	    let localctx = new AssemblerexpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, asm8086Parser.RULE_assemblerexpression);
	    var _la = 0;
	    try {
	        this.state = 182;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 131:
	        case 173:
	        case 174:
	        case 184:
	        case 185:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 169;
	            this.assemblerterm();
	            this.state = 175;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===22 || _la===23) {
	                this.state = 170;
	                this.assemblerlogical();
	                this.state = 171;
	                this.assemblerterm();
	                this.state = 177;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 178:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 178;
	            this.match(asm8086Parser.RP);
	            this.state = 179;
	            this.assemblerexpression();
	            this.state = 180;
	            this.match(asm8086Parser.LP);
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



	assemblerlogical() {
	    let localctx = new AssemblerlogicalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, asm8086Parser.RULE_assemblerlogical);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        _la = this._input.LA(1);
	        if(!(_la===22 || _la===23)) {
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



	assemblerterm() {
	    let localctx = new AssemblertermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, asm8086Parser.RULE_assemblerterm);
	    try {
	        this.state = 190;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 184:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 186;
	            this.name();
	            break;
	        case 173:
	        case 174:
	        case 185:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 187;
	            this.number();
	            break;
	        case 131:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 188;
	            this.match(asm8086Parser.NOT);
	            this.state = 189;
	            this.assemblerterm();
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



	endif_() {
	    let localctx = new Endif_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, asm8086Parser.RULE_endif_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.match(asm8086Parser.ENDIF);
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



	end() {
	    let localctx = new EndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, asm8086Parser.RULE_end);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.match(asm8086Parser.END);
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
	    this.enterRule(localctx, 40, asm8086Parser.RULE_org);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.match(asm8086Parser.ORG);
	        this.state = 197;
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



	title() {
	    let localctx = new TitleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, asm8086Parser.RULE_title);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(asm8086Parser.TITLE);
	        this.state = 200;
	        this.string_();
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



	include_() {
	    let localctx = new Include_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, asm8086Parser.RULE_include_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(asm8086Parser.INCLUDE);
	        this.state = 203;
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



	expressionlist() {
	    let localctx = new ExpressionlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, asm8086Parser.RULE_expressionlist);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.expression();
	        this.state = 210;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===180) {
	            this.state = 206;
	            this.match(asm8086Parser.COMMA);
	            this.state = 207;
	            this.expression();
	            this.state = 212;
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
	    this.enterRule(localctx, 48, asm8086Parser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
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
	    this.enterRule(localctx, 50, asm8086Parser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.multiplyingExpression();
	        this.state = 221;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 216;
	                this.sign();
	                this.state = 217;
	                this.multiplyingExpression(); 
	            }
	            this.state = 223;
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
	    this.enterRule(localctx, 52, asm8086Parser.RULE_multiplyingExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.argument();
	        this.state = 229;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 225;
	                _la = this._input.LA(1);
	                if(!(_la===24 || _la===53 || _la===170 || _la===171)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 226;
	                this.argument(); 
	            }
	            this.state = 231;
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
	    this.enterRule(localctx, 54, asm8086Parser.RULE_argument);
	    try {
	        this.state = 262;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 232;
	            this.number();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 233;
	            this.dollar();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 234;
	            this.register_();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 235;
	            this.name();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 236;
	            this.string_();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 237;
	            this.match(asm8086Parser.RP);
	            this.state = 238;
	            this.expression();
	            this.state = 239;
	            this.match(asm8086Parser.LP);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 243;
	            this._errHandler.sync(this);
	            switch (this._input.LA(1)) {
	            case 173:
	            case 174:
	            case 185:
	            	this.state = 241;
	            	this.number();
	            	break;
	            case 184:
	            	this.state = 242;
	            	this.name();
	            	break;
	            case 182:
	            	break;
	            default:
	            	break;
	            }
	            this.state = 245;
	            this.match(asm8086Parser.LB);
	            this.state = 246;
	            this.expression();
	            this.state = 247;
	            this.match(asm8086Parser.RB_);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 249;
	            this.ptr();
	            this.state = 250;
	            this.expression();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 252;
	            this.match(asm8086Parser.NOT);
	            this.state = 253;
	            this.expression();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 254;
	            this.match(asm8086Parser.OFFSET);
	            this.state = 255;
	            this.expression();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 256;
	            this.match(asm8086Parser.LENGTH);
	            this.state = 257;
	            this.expression();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 258;
	            this.register_();
	            this.state = 259;
	            this.match(asm8086Parser.COLON);
	            this.state = 260;
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



	ptr() {
	    let localctx = new PtrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, asm8086Parser.RULE_ptr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0)) {
	            this.state = 264;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 267;
	        this.match(asm8086Parser.PTR);
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
	    this.enterRule(localctx, 58, asm8086Parser.RULE_dollar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 269;
	        this.match(asm8086Parser.DOLLAR);
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
	    this.enterRule(localctx, 60, asm8086Parser.RULE_register_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        _la = this._input.LA(1);
	        if(!(((((_la - 26)) & ~0x1f) === 0 && ((1 << (_la - 26)) & 2097151) !== 0))) {
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



	string_() {
	    let localctx = new String_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, asm8086Parser.RULE_string_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.match(asm8086Parser.STRING);
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
	    this.enterRule(localctx, 64, asm8086Parser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
	        this.match(asm8086Parser.NAME);
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
	    this.enterRule(localctx, 66, asm8086Parser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===173 || _la===174) {
	            this.state = 277;
	            this.sign();
	        }

	        this.state = 280;
	        this.match(asm8086Parser.NUMBER);
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
	    this.enterRule(localctx, 68, asm8086Parser.RULE_opcode);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 282;
	        _la = this._input.LA(1);
	        if(!(((((_la - 47)) & ~0x1f) === 0 && ((1 << (_la - 47)) & 4294967295) !== 0) || ((((_la - 79)) & ~0x1f) === 0 && ((1 << (_la - 79)) & 4294967295) !== 0) || ((((_la - 111)) & ~0x1f) === 0 && ((1 << (_la - 111)) & 4294967295) !== 0) || ((((_la - 143)) & ~0x1f) === 0 && ((1 << (_la - 143)) & 4194303) !== 0))) {
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



	rep() {
	    let localctx = new RepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, asm8086Parser.RULE_rep);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        _la = this._input.LA(1);
	        if(!(((((_la - 165)) & ~0x1f) === 0 && ((1 << (_la - 165)) & 31) !== 0))) {
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



	sign() {
	    let localctx = new SignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, asm8086Parser.RULE_sign);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
	        _la = this._input.LA(1);
	        if(!(_la===173 || _la===174)) {
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

asm8086Parser.EOF = antlr4.Token.EOF;
asm8086Parser.BYTE = 1;
asm8086Parser.WORD = 2;
asm8086Parser.DWORD = 3;
asm8086Parser.DSEG = 4;
asm8086Parser.CSEG = 5;
asm8086Parser.INCLUDE = 6;
asm8086Parser.TITLE = 7;
asm8086Parser.END = 8;
asm8086Parser.ORG = 9;
asm8086Parser.ENDIF = 10;
asm8086Parser.IF = 11;
asm8086Parser.EQU = 12;
asm8086Parser.DW = 13;
asm8086Parser.DB = 14;
asm8086Parser.DD = 15;
asm8086Parser.PTR = 16;
asm8086Parser.OFFSET = 17;
asm8086Parser.RW = 18;
asm8086Parser.RB = 19;
asm8086Parser.RS = 20;
asm8086Parser.LENGTH = 21;
asm8086Parser.EQ = 22;
asm8086Parser.NE = 23;
asm8086Parser.MOD = 24;
asm8086Parser.COMMENT = 25;
asm8086Parser.AH = 26;
asm8086Parser.AL = 27;
asm8086Parser.BH = 28;
asm8086Parser.BL = 29;
asm8086Parser.CH = 30;
asm8086Parser.CL = 31;
asm8086Parser.DH = 32;
asm8086Parser.DL = 33;
asm8086Parser.AX = 34;
asm8086Parser.BX = 35;
asm8086Parser.CX = 36;
asm8086Parser.DX = 37;
asm8086Parser.CI = 38;
asm8086Parser.DI = 39;
asm8086Parser.BP = 40;
asm8086Parser.SP = 41;
asm8086Parser.IP = 42;
asm8086Parser.CS = 43;
asm8086Parser.DS = 44;
asm8086Parser.ES = 45;
asm8086Parser.SS = 46;
asm8086Parser.AAA = 47;
asm8086Parser.AAD = 48;
asm8086Parser.AAM = 49;
asm8086Parser.AAS = 50;
asm8086Parser.ADC = 51;
asm8086Parser.ADD = 52;
asm8086Parser.AND = 53;
asm8086Parser.CALL = 54;
asm8086Parser.CBW = 55;
asm8086Parser.CLC = 56;
asm8086Parser.CLD = 57;
asm8086Parser.CLI = 58;
asm8086Parser.CMC = 59;
asm8086Parser.CMP = 60;
asm8086Parser.CMPSB = 61;
asm8086Parser.CMPSW = 62;
asm8086Parser.CWD = 63;
asm8086Parser.DAA = 64;
asm8086Parser.DAS = 65;
asm8086Parser.DEC = 66;
asm8086Parser.DIV = 67;
asm8086Parser.ESC = 68;
asm8086Parser.HLT = 69;
asm8086Parser.IDIV = 70;
asm8086Parser.IMUL = 71;
asm8086Parser.IN = 72;
asm8086Parser.INC = 73;
asm8086Parser.INT = 74;
asm8086Parser.INTO = 75;
asm8086Parser.IRET = 76;
asm8086Parser.JA = 77;
asm8086Parser.JAE = 78;
asm8086Parser.JB = 79;
asm8086Parser.JBE = 80;
asm8086Parser.JC = 81;
asm8086Parser.JE = 82;
asm8086Parser.JG = 83;
asm8086Parser.JGE = 84;
asm8086Parser.JL = 85;
asm8086Parser.JLE = 86;
asm8086Parser.JNA = 87;
asm8086Parser.JNAE = 88;
asm8086Parser.JNB = 89;
asm8086Parser.JNBE = 90;
asm8086Parser.JNC = 91;
asm8086Parser.JNE = 92;
asm8086Parser.JNG = 93;
asm8086Parser.JNGE = 94;
asm8086Parser.JNL = 95;
asm8086Parser.JNLE = 96;
asm8086Parser.JNO = 97;
asm8086Parser.JNP = 98;
asm8086Parser.JNS = 99;
asm8086Parser.JNZ = 100;
asm8086Parser.JO = 101;
asm8086Parser.JP = 102;
asm8086Parser.JPE = 103;
asm8086Parser.JPO = 104;
asm8086Parser.JS = 105;
asm8086Parser.JZ = 106;
asm8086Parser.JCXZ = 107;
asm8086Parser.JMP = 108;
asm8086Parser.JMPS = 109;
asm8086Parser.JMPF = 110;
asm8086Parser.LAHF = 111;
asm8086Parser.LDS = 112;
asm8086Parser.LEA = 113;
asm8086Parser.LES = 114;
asm8086Parser.LOCK = 115;
asm8086Parser.LODS = 116;
asm8086Parser.LODSB = 117;
asm8086Parser.LODSW = 118;
asm8086Parser.LOOP = 119;
asm8086Parser.LOOPE = 120;
asm8086Parser.LOOPNE = 121;
asm8086Parser.LOOPNZ = 122;
asm8086Parser.LOOPZ = 123;
asm8086Parser.MOV = 124;
asm8086Parser.MOVS = 125;
asm8086Parser.MOVSB = 126;
asm8086Parser.MOVSW = 127;
asm8086Parser.MUL = 128;
asm8086Parser.NEG = 129;
asm8086Parser.NOP = 130;
asm8086Parser.NOT = 131;
asm8086Parser.OR = 132;
asm8086Parser.OUT = 133;
asm8086Parser.POP = 134;
asm8086Parser.POPF = 135;
asm8086Parser.PUSH = 136;
asm8086Parser.PUSHF = 137;
asm8086Parser.RCL = 138;
asm8086Parser.RCR = 139;
asm8086Parser.RET = 140;
asm8086Parser.RETN = 141;
asm8086Parser.RETF = 142;
asm8086Parser.ROL = 143;
asm8086Parser.ROR = 144;
asm8086Parser.SAHF = 145;
asm8086Parser.SAL = 146;
asm8086Parser.SAR = 147;
asm8086Parser.SALC = 148;
asm8086Parser.SBB = 149;
asm8086Parser.SCASB = 150;
asm8086Parser.SCASW = 151;
asm8086Parser.SHL = 152;
asm8086Parser.SHR = 153;
asm8086Parser.STC = 154;
asm8086Parser.STD = 155;
asm8086Parser.STI = 156;
asm8086Parser.STOSB = 157;
asm8086Parser.STOSW = 158;
asm8086Parser.SUB = 159;
asm8086Parser.TEST = 160;
asm8086Parser.WAIT = 161;
asm8086Parser.XCHG = 162;
asm8086Parser.XLAT = 163;
asm8086Parser.XOR = 164;
asm8086Parser.REP = 165;
asm8086Parser.REPE = 166;
asm8086Parser.REPNE = 167;
asm8086Parser.REPNZ = 168;
asm8086Parser.REPZ = 169;
asm8086Parser.STAR = 170;
asm8086Parser.SLASH = 171;
asm8086Parser.DOLLAR = 172;
asm8086Parser.PLUS = 173;
asm8086Parser.MINUS = 174;
asm8086Parser.NOT_ = 175;
asm8086Parser.COLON = 176;
asm8086Parser.DOT = 177;
asm8086Parser.RP = 178;
asm8086Parser.LP = 179;
asm8086Parser.COMMA = 180;
asm8086Parser.SEMI = 181;
asm8086Parser.LB = 182;
asm8086Parser.RB_ = 183;
asm8086Parser.NAME = 184;
asm8086Parser.NUMBER = 185;
asm8086Parser.STRING = 186;
asm8086Parser.EOL = 187;
asm8086Parser.WS = 188;

asm8086Parser.RULE_prog = 0;
asm8086Parser.RULE_line = 1;
asm8086Parser.RULE_instruction = 2;
asm8086Parser.RULE_lbl = 3;
asm8086Parser.RULE_assemblerdirective = 4;
asm8086Parser.RULE_rw = 5;
asm8086Parser.RULE_rb = 6;
asm8086Parser.RULE_rs = 7;
asm8086Parser.RULE_cseg = 8;
asm8086Parser.RULE_dseg = 9;
asm8086Parser.RULE_dw = 10;
asm8086Parser.RULE_db = 11;
asm8086Parser.RULE_dd = 12;
asm8086Parser.RULE_equ = 13;
asm8086Parser.RULE_if_ = 14;
asm8086Parser.RULE_assemblerexpression = 15;
asm8086Parser.RULE_assemblerlogical = 16;
asm8086Parser.RULE_assemblerterm = 17;
asm8086Parser.RULE_endif_ = 18;
asm8086Parser.RULE_end = 19;
asm8086Parser.RULE_org = 20;
asm8086Parser.RULE_title = 21;
asm8086Parser.RULE_include_ = 22;
asm8086Parser.RULE_expressionlist = 23;
asm8086Parser.RULE_label = 24;
asm8086Parser.RULE_expression = 25;
asm8086Parser.RULE_multiplyingExpression = 26;
asm8086Parser.RULE_argument = 27;
asm8086Parser.RULE_ptr = 28;
asm8086Parser.RULE_dollar = 29;
asm8086Parser.RULE_register_ = 30;
asm8086Parser.RULE_string_ = 31;
asm8086Parser.RULE_name = 32;
asm8086Parser.RULE_number = 33;
asm8086Parser.RULE_opcode = 34;
asm8086Parser.RULE_rep = 35;
asm8086Parser.RULE_sign = 36;

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
        this.ruleIndex = asm8086Parser.RULE_prog;
    }

	EOF() {
	    return this.getToken(asm8086Parser.EOF, 0);
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
	    if(listener instanceof asm8086Listener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
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
        this.ruleIndex = asm8086Parser.RULE_line;
    }

	EOL() {
	    return this.getToken(asm8086Parser.EOL, 0);
	};

	lbl() {
	    return this.getTypedRuleContext(LblContext,0);
	};

	assemblerdirective() {
	    return this.getTypedRuleContext(AssemblerdirectiveContext,0);
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

	NOT_ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(asm8086Parser.NOT_);
	    } else {
	        return this.getToken(asm8086Parser.NOT_, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
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
        this.ruleIndex = asm8086Parser.RULE_instruction;
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
	    if(listener instanceof asm8086Listener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
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
        this.ruleIndex = asm8086Parser.RULE_lbl;
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	COLON() {
	    return this.getToken(asm8086Parser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterLbl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitLbl(this);
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
        this.ruleIndex = asm8086Parser.RULE_assemblerdirective;
    }

	org() {
	    return this.getTypedRuleContext(OrgContext,0);
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
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

	cseg() {
	    return this.getTypedRuleContext(CsegContext,0);
	};

	dd() {
	    return this.getTypedRuleContext(DdContext,0);
	};

	dseg() {
	    return this.getTypedRuleContext(DsegContext,0);
	};

	title() {
	    return this.getTypedRuleContext(TitleContext,0);
	};

	include_() {
	    return this.getTypedRuleContext(Include_Context,0);
	};

	rw() {
	    return this.getTypedRuleContext(RwContext,0);
	};

	rb() {
	    return this.getTypedRuleContext(RbContext,0);
	};

	rs() {
	    return this.getTypedRuleContext(RsContext,0);
	};

	DOT() {
	    return this.getToken(asm8086Parser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterAssemblerdirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitAssemblerdirective(this);
		}
	}


}



class RwContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_rw;
    }

	RW() {
	    return this.getToken(asm8086Parser.RW, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterRw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitRw(this);
		}
	}


}



class RbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_rb;
    }

	RB() {
	    return this.getToken(asm8086Parser.RB, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterRb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitRb(this);
		}
	}


}



class RsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_rs;
    }

	RS() {
	    return this.getToken(asm8086Parser.RS, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterRs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitRs(this);
		}
	}


}



class CsegContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_cseg;
    }

	CSEG() {
	    return this.getToken(asm8086Parser.CSEG, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterCseg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitCseg(this);
		}
	}


}



class DsegContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_dseg;
    }

	DSEG() {
	    return this.getToken(asm8086Parser.DSEG, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterDseg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitDseg(this);
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
        this.ruleIndex = asm8086Parser.RULE_dw;
    }

	DW() {
	    return this.getToken(asm8086Parser.DW, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterDw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
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
        this.ruleIndex = asm8086Parser.RULE_db;
    }

	DB() {
	    return this.getToken(asm8086Parser.DB, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterDb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitDb(this);
		}
	}


}



class DdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_dd;
    }

	DD() {
	    return this.getToken(asm8086Parser.DD, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterDd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitDd(this);
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
        this.ruleIndex = asm8086Parser.RULE_equ;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	EQU() {
	    return this.getToken(asm8086Parser.EQU, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterEqu(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitEqu(this);
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
        this.ruleIndex = asm8086Parser.RULE_if_;
    }

	IF() {
	    return this.getToken(asm8086Parser.IF, 0);
	};

	assemblerexpression() {
	    return this.getTypedRuleContext(AssemblerexpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterIf_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitIf_(this);
		}
	}


}



class AssemblerexpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_assemblerexpression;
    }

	assemblerterm = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssemblertermContext);
	    } else {
	        return this.getTypedRuleContext(AssemblertermContext,i);
	    }
	};

	assemblerlogical = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssemblerlogicalContext);
	    } else {
	        return this.getTypedRuleContext(AssemblerlogicalContext,i);
	    }
	};

	RP() {
	    return this.getToken(asm8086Parser.RP, 0);
	};

	assemblerexpression() {
	    return this.getTypedRuleContext(AssemblerexpressionContext,0);
	};

	LP() {
	    return this.getToken(asm8086Parser.LP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterAssemblerexpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitAssemblerexpression(this);
		}
	}


}



class AssemblerlogicalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_assemblerlogical;
    }

	EQ() {
	    return this.getToken(asm8086Parser.EQ, 0);
	};

	NE() {
	    return this.getToken(asm8086Parser.NE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterAssemblerlogical(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitAssemblerlogical(this);
		}
	}


}



class AssemblertermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_assemblerterm;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	NOT() {
	    return this.getToken(asm8086Parser.NOT, 0);
	};

	assemblerterm() {
	    return this.getTypedRuleContext(AssemblertermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterAssemblerterm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitAssemblerterm(this);
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
        this.ruleIndex = asm8086Parser.RULE_endif_;
    }

	ENDIF() {
	    return this.getToken(asm8086Parser.ENDIF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterEndif_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitEndif_(this);
		}
	}


}



class EndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_end;
    }

	END() {
	    return this.getToken(asm8086Parser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterEnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitEnd(this);
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
        this.ruleIndex = asm8086Parser.RULE_org;
    }

	ORG() {
	    return this.getToken(asm8086Parser.ORG, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterOrg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitOrg(this);
		}
	}


}



class TitleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_title;
    }

	TITLE() {
	    return this.getToken(asm8086Parser.TITLE, 0);
	};

	string_() {
	    return this.getTypedRuleContext(String_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterTitle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitTitle(this);
		}
	}


}



class Include_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_include_;
    }

	INCLUDE() {
	    return this.getToken(asm8086Parser.INCLUDE, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterInclude_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitInclude_(this);
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
        this.ruleIndex = asm8086Parser.RULE_expressionlist;
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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(asm8086Parser.COMMA);
	    } else {
	        return this.getToken(asm8086Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterExpressionlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
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
        this.ruleIndex = asm8086Parser.RULE_label;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
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
        this.ruleIndex = asm8086Parser.RULE_expression;
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

	sign = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SignContext);
	    } else {
	        return this.getTypedRuleContext(SignContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
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
        this.ruleIndex = asm8086Parser.RULE_multiplyingExpression;
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

	STAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(asm8086Parser.STAR);
	    } else {
	        return this.getToken(asm8086Parser.STAR, i);
	    }
	};


	SLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(asm8086Parser.SLASH);
	    } else {
	        return this.getToken(asm8086Parser.SLASH, i);
	    }
	};


	MOD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(asm8086Parser.MOD);
	    } else {
	        return this.getToken(asm8086Parser.MOD, i);
	    }
	};


	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(asm8086Parser.AND);
	    } else {
	        return this.getToken(asm8086Parser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterMultiplyingExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
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
        this.ruleIndex = asm8086Parser.RULE_argument;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	dollar() {
	    return this.getTypedRuleContext(DollarContext,0);
	};

	register_() {
	    return this.getTypedRuleContext(Register_Context,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	string_() {
	    return this.getTypedRuleContext(String_Context,0);
	};

	RP() {
	    return this.getToken(asm8086Parser.RP, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	LP() {
	    return this.getToken(asm8086Parser.LP, 0);
	};

	LB() {
	    return this.getToken(asm8086Parser.LB, 0);
	};

	RB_() {
	    return this.getToken(asm8086Parser.RB_, 0);
	};

	ptr() {
	    return this.getTypedRuleContext(PtrContext,0);
	};

	NOT() {
	    return this.getToken(asm8086Parser.NOT, 0);
	};

	OFFSET() {
	    return this.getToken(asm8086Parser.OFFSET, 0);
	};

	LENGTH() {
	    return this.getToken(asm8086Parser.LENGTH, 0);
	};

	COLON() {
	    return this.getToken(asm8086Parser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitArgument(this);
		}
	}


}



class PtrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_ptr;
    }

	PTR() {
	    return this.getToken(asm8086Parser.PTR, 0);
	};

	BYTE() {
	    return this.getToken(asm8086Parser.BYTE, 0);
	};

	WORD() {
	    return this.getToken(asm8086Parser.WORD, 0);
	};

	DWORD() {
	    return this.getToken(asm8086Parser.DWORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterPtr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitPtr(this);
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
        this.ruleIndex = asm8086Parser.RULE_dollar;
    }

	DOLLAR() {
	    return this.getToken(asm8086Parser.DOLLAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterDollar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitDollar(this);
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
        this.ruleIndex = asm8086Parser.RULE_register_;
    }

	AH() {
	    return this.getToken(asm8086Parser.AH, 0);
	};

	AL() {
	    return this.getToken(asm8086Parser.AL, 0);
	};

	BH() {
	    return this.getToken(asm8086Parser.BH, 0);
	};

	BL() {
	    return this.getToken(asm8086Parser.BL, 0);
	};

	CH() {
	    return this.getToken(asm8086Parser.CH, 0);
	};

	CL() {
	    return this.getToken(asm8086Parser.CL, 0);
	};

	DH() {
	    return this.getToken(asm8086Parser.DH, 0);
	};

	DL() {
	    return this.getToken(asm8086Parser.DL, 0);
	};

	AX() {
	    return this.getToken(asm8086Parser.AX, 0);
	};

	BX() {
	    return this.getToken(asm8086Parser.BX, 0);
	};

	CX() {
	    return this.getToken(asm8086Parser.CX, 0);
	};

	DX() {
	    return this.getToken(asm8086Parser.DX, 0);
	};

	CI() {
	    return this.getToken(asm8086Parser.CI, 0);
	};

	DI() {
	    return this.getToken(asm8086Parser.DI, 0);
	};

	BP() {
	    return this.getToken(asm8086Parser.BP, 0);
	};

	SP() {
	    return this.getToken(asm8086Parser.SP, 0);
	};

	IP() {
	    return this.getToken(asm8086Parser.IP, 0);
	};

	CS() {
	    return this.getToken(asm8086Parser.CS, 0);
	};

	DS() {
	    return this.getToken(asm8086Parser.DS, 0);
	};

	ES() {
	    return this.getToken(asm8086Parser.ES, 0);
	};

	SS() {
	    return this.getToken(asm8086Parser.SS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterRegister_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitRegister_(this);
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
        this.ruleIndex = asm8086Parser.RULE_string_;
    }

	STRING() {
	    return this.getToken(asm8086Parser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterString_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
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
        this.ruleIndex = asm8086Parser.RULE_name;
    }

	NAME() {
	    return this.getToken(asm8086Parser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
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
        this.ruleIndex = asm8086Parser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(asm8086Parser.NUMBER, 0);
	};

	sign() {
	    return this.getTypedRuleContext(SignContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
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
        this.ruleIndex = asm8086Parser.RULE_opcode;
    }

	AAA() {
	    return this.getToken(asm8086Parser.AAA, 0);
	};

	AAD() {
	    return this.getToken(asm8086Parser.AAD, 0);
	};

	AAM() {
	    return this.getToken(asm8086Parser.AAM, 0);
	};

	AAS() {
	    return this.getToken(asm8086Parser.AAS, 0);
	};

	ADC() {
	    return this.getToken(asm8086Parser.ADC, 0);
	};

	ADD() {
	    return this.getToken(asm8086Parser.ADD, 0);
	};

	AND() {
	    return this.getToken(asm8086Parser.AND, 0);
	};

	CALL() {
	    return this.getToken(asm8086Parser.CALL, 0);
	};

	CBW() {
	    return this.getToken(asm8086Parser.CBW, 0);
	};

	CLC() {
	    return this.getToken(asm8086Parser.CLC, 0);
	};

	CLD() {
	    return this.getToken(asm8086Parser.CLD, 0);
	};

	CLI() {
	    return this.getToken(asm8086Parser.CLI, 0);
	};

	CMC() {
	    return this.getToken(asm8086Parser.CMC, 0);
	};

	CMP() {
	    return this.getToken(asm8086Parser.CMP, 0);
	};

	CMPSB() {
	    return this.getToken(asm8086Parser.CMPSB, 0);
	};

	CMPSW() {
	    return this.getToken(asm8086Parser.CMPSW, 0);
	};

	CWD() {
	    return this.getToken(asm8086Parser.CWD, 0);
	};

	DAA() {
	    return this.getToken(asm8086Parser.DAA, 0);
	};

	DAS() {
	    return this.getToken(asm8086Parser.DAS, 0);
	};

	DEC() {
	    return this.getToken(asm8086Parser.DEC, 0);
	};

	DIV() {
	    return this.getToken(asm8086Parser.DIV, 0);
	};

	ESC() {
	    return this.getToken(asm8086Parser.ESC, 0);
	};

	HLT() {
	    return this.getToken(asm8086Parser.HLT, 0);
	};

	IDIV() {
	    return this.getToken(asm8086Parser.IDIV, 0);
	};

	IMUL() {
	    return this.getToken(asm8086Parser.IMUL, 0);
	};

	IN() {
	    return this.getToken(asm8086Parser.IN, 0);
	};

	INC() {
	    return this.getToken(asm8086Parser.INC, 0);
	};

	INT() {
	    return this.getToken(asm8086Parser.INT, 0);
	};

	INTO() {
	    return this.getToken(asm8086Parser.INTO, 0);
	};

	IRET() {
	    return this.getToken(asm8086Parser.IRET, 0);
	};

	JA() {
	    return this.getToken(asm8086Parser.JA, 0);
	};

	JAE() {
	    return this.getToken(asm8086Parser.JAE, 0);
	};

	JB() {
	    return this.getToken(asm8086Parser.JB, 0);
	};

	JBE() {
	    return this.getToken(asm8086Parser.JBE, 0);
	};

	JC() {
	    return this.getToken(asm8086Parser.JC, 0);
	};

	JE() {
	    return this.getToken(asm8086Parser.JE, 0);
	};

	JG() {
	    return this.getToken(asm8086Parser.JG, 0);
	};

	JGE() {
	    return this.getToken(asm8086Parser.JGE, 0);
	};

	JL() {
	    return this.getToken(asm8086Parser.JL, 0);
	};

	JLE() {
	    return this.getToken(asm8086Parser.JLE, 0);
	};

	JNA() {
	    return this.getToken(asm8086Parser.JNA, 0);
	};

	JNAE() {
	    return this.getToken(asm8086Parser.JNAE, 0);
	};

	JNB() {
	    return this.getToken(asm8086Parser.JNB, 0);
	};

	JNBE() {
	    return this.getToken(asm8086Parser.JNBE, 0);
	};

	JNC() {
	    return this.getToken(asm8086Parser.JNC, 0);
	};

	JNE() {
	    return this.getToken(asm8086Parser.JNE, 0);
	};

	JNG() {
	    return this.getToken(asm8086Parser.JNG, 0);
	};

	JNGE() {
	    return this.getToken(asm8086Parser.JNGE, 0);
	};

	JNL() {
	    return this.getToken(asm8086Parser.JNL, 0);
	};

	JNLE() {
	    return this.getToken(asm8086Parser.JNLE, 0);
	};

	JNO() {
	    return this.getToken(asm8086Parser.JNO, 0);
	};

	JNP() {
	    return this.getToken(asm8086Parser.JNP, 0);
	};

	JNS() {
	    return this.getToken(asm8086Parser.JNS, 0);
	};

	JNZ() {
	    return this.getToken(asm8086Parser.JNZ, 0);
	};

	JO() {
	    return this.getToken(asm8086Parser.JO, 0);
	};

	JP() {
	    return this.getToken(asm8086Parser.JP, 0);
	};

	JPE() {
	    return this.getToken(asm8086Parser.JPE, 0);
	};

	JPO() {
	    return this.getToken(asm8086Parser.JPO, 0);
	};

	JS() {
	    return this.getToken(asm8086Parser.JS, 0);
	};

	JZ() {
	    return this.getToken(asm8086Parser.JZ, 0);
	};

	JCXZ() {
	    return this.getToken(asm8086Parser.JCXZ, 0);
	};

	JMP() {
	    return this.getToken(asm8086Parser.JMP, 0);
	};

	JMPS() {
	    return this.getToken(asm8086Parser.JMPS, 0);
	};

	JMPF() {
	    return this.getToken(asm8086Parser.JMPF, 0);
	};

	LAHF() {
	    return this.getToken(asm8086Parser.LAHF, 0);
	};

	LDS() {
	    return this.getToken(asm8086Parser.LDS, 0);
	};

	LEA() {
	    return this.getToken(asm8086Parser.LEA, 0);
	};

	LES() {
	    return this.getToken(asm8086Parser.LES, 0);
	};

	LOCK() {
	    return this.getToken(asm8086Parser.LOCK, 0);
	};

	LODS() {
	    return this.getToken(asm8086Parser.LODS, 0);
	};

	LODSB() {
	    return this.getToken(asm8086Parser.LODSB, 0);
	};

	LODSW() {
	    return this.getToken(asm8086Parser.LODSW, 0);
	};

	LOOP() {
	    return this.getToken(asm8086Parser.LOOP, 0);
	};

	LOOPE() {
	    return this.getToken(asm8086Parser.LOOPE, 0);
	};

	LOOPNE() {
	    return this.getToken(asm8086Parser.LOOPNE, 0);
	};

	LOOPNZ() {
	    return this.getToken(asm8086Parser.LOOPNZ, 0);
	};

	LOOPZ() {
	    return this.getToken(asm8086Parser.LOOPZ, 0);
	};

	MOV() {
	    return this.getToken(asm8086Parser.MOV, 0);
	};

	MOVS() {
	    return this.getToken(asm8086Parser.MOVS, 0);
	};

	MOVSB() {
	    return this.getToken(asm8086Parser.MOVSB, 0);
	};

	MOVSW() {
	    return this.getToken(asm8086Parser.MOVSW, 0);
	};

	MUL() {
	    return this.getToken(asm8086Parser.MUL, 0);
	};

	NEG() {
	    return this.getToken(asm8086Parser.NEG, 0);
	};

	NOP() {
	    return this.getToken(asm8086Parser.NOP, 0);
	};

	NOT() {
	    return this.getToken(asm8086Parser.NOT, 0);
	};

	OR() {
	    return this.getToken(asm8086Parser.OR, 0);
	};

	OUT() {
	    return this.getToken(asm8086Parser.OUT, 0);
	};

	POP() {
	    return this.getToken(asm8086Parser.POP, 0);
	};

	POPF() {
	    return this.getToken(asm8086Parser.POPF, 0);
	};

	PUSH() {
	    return this.getToken(asm8086Parser.PUSH, 0);
	};

	PUSHF() {
	    return this.getToken(asm8086Parser.PUSHF, 0);
	};

	RCL() {
	    return this.getToken(asm8086Parser.RCL, 0);
	};

	RCR() {
	    return this.getToken(asm8086Parser.RCR, 0);
	};

	RET() {
	    return this.getToken(asm8086Parser.RET, 0);
	};

	RETN() {
	    return this.getToken(asm8086Parser.RETN, 0);
	};

	RETF() {
	    return this.getToken(asm8086Parser.RETF, 0);
	};

	ROL() {
	    return this.getToken(asm8086Parser.ROL, 0);
	};

	ROR() {
	    return this.getToken(asm8086Parser.ROR, 0);
	};

	SAHF() {
	    return this.getToken(asm8086Parser.SAHF, 0);
	};

	SAL() {
	    return this.getToken(asm8086Parser.SAL, 0);
	};

	SAR() {
	    return this.getToken(asm8086Parser.SAR, 0);
	};

	SALC() {
	    return this.getToken(asm8086Parser.SALC, 0);
	};

	SBB() {
	    return this.getToken(asm8086Parser.SBB, 0);
	};

	SCASB() {
	    return this.getToken(asm8086Parser.SCASB, 0);
	};

	SCASW() {
	    return this.getToken(asm8086Parser.SCASW, 0);
	};

	SHL() {
	    return this.getToken(asm8086Parser.SHL, 0);
	};

	SHR() {
	    return this.getToken(asm8086Parser.SHR, 0);
	};

	STC() {
	    return this.getToken(asm8086Parser.STC, 0);
	};

	STD() {
	    return this.getToken(asm8086Parser.STD, 0);
	};

	STI() {
	    return this.getToken(asm8086Parser.STI, 0);
	};

	STOSB() {
	    return this.getToken(asm8086Parser.STOSB, 0);
	};

	STOSW() {
	    return this.getToken(asm8086Parser.STOSW, 0);
	};

	SUB() {
	    return this.getToken(asm8086Parser.SUB, 0);
	};

	TEST() {
	    return this.getToken(asm8086Parser.TEST, 0);
	};

	WAIT() {
	    return this.getToken(asm8086Parser.WAIT, 0);
	};

	XCHG() {
	    return this.getToken(asm8086Parser.XCHG, 0);
	};

	XLAT() {
	    return this.getToken(asm8086Parser.XLAT, 0);
	};

	XOR() {
	    return this.getToken(asm8086Parser.XOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterOpcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
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
        this.ruleIndex = asm8086Parser.RULE_rep;
    }

	REP() {
	    return this.getToken(asm8086Parser.REP, 0);
	};

	REPE() {
	    return this.getToken(asm8086Parser.REPE, 0);
	};

	REPNE() {
	    return this.getToken(asm8086Parser.REPNE, 0);
	};

	REPNZ() {
	    return this.getToken(asm8086Parser.REPNZ, 0);
	};

	REPZ() {
	    return this.getToken(asm8086Parser.REPZ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterRep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitRep(this);
		}
	}


}



class SignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_sign;
    }

	PLUS() {
	    return this.getToken(asm8086Parser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(asm8086Parser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitSign(this);
		}
	}


}




asm8086Parser.ProgContext = ProgContext; 
asm8086Parser.LineContext = LineContext; 
asm8086Parser.InstructionContext = InstructionContext; 
asm8086Parser.LblContext = LblContext; 
asm8086Parser.AssemblerdirectiveContext = AssemblerdirectiveContext; 
asm8086Parser.RwContext = RwContext; 
asm8086Parser.RbContext = RbContext; 
asm8086Parser.RsContext = RsContext; 
asm8086Parser.CsegContext = CsegContext; 
asm8086Parser.DsegContext = DsegContext; 
asm8086Parser.DwContext = DwContext; 
asm8086Parser.DbContext = DbContext; 
asm8086Parser.DdContext = DdContext; 
asm8086Parser.EquContext = EquContext; 
asm8086Parser.If_Context = If_Context; 
asm8086Parser.AssemblerexpressionContext = AssemblerexpressionContext; 
asm8086Parser.AssemblerlogicalContext = AssemblerlogicalContext; 
asm8086Parser.AssemblertermContext = AssemblertermContext; 
asm8086Parser.Endif_Context = Endif_Context; 
asm8086Parser.EndContext = EndContext; 
asm8086Parser.OrgContext = OrgContext; 
asm8086Parser.TitleContext = TitleContext; 
asm8086Parser.Include_Context = Include_Context; 
asm8086Parser.ExpressionlistContext = ExpressionlistContext; 
asm8086Parser.LabelContext = LabelContext; 
asm8086Parser.ExpressionContext = ExpressionContext; 
asm8086Parser.MultiplyingExpressionContext = MultiplyingExpressionContext; 
asm8086Parser.ArgumentContext = ArgumentContext; 
asm8086Parser.PtrContext = PtrContext; 
asm8086Parser.DollarContext = DollarContext; 
asm8086Parser.Register_Context = Register_Context; 
asm8086Parser.String_Context = String_Context; 
asm8086Parser.NameContext = NameContext; 
asm8086Parser.NumberContext = NumberContext; 
asm8086Parser.OpcodeContext = OpcodeContext; 
asm8086Parser.RepContext = RepContext; 
asm8086Parser.SignContext = SignContext; 
