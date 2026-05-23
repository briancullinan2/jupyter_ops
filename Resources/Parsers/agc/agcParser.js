// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/agc/agc.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import agcListener from './agcListener.js';
const serializedATN = [4,1,196,245,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,4,0,50,8,0,11,0,12,0,51,1,0,1,
0,1,1,1,1,1,1,1,1,1,1,3,1,61,8,1,1,2,3,2,64,8,2,1,2,1,2,1,3,3,3,69,8,3,1,
3,1,3,1,3,1,4,3,4,75,8,4,1,4,1,4,1,4,1,4,1,4,3,4,82,8,4,1,4,1,4,1,4,1,4,
5,4,88,8,4,10,4,12,4,91,9,4,1,4,1,4,1,5,3,5,96,8,5,1,5,1,5,1,5,3,5,101,8,
5,1,5,5,5,104,8,5,10,5,12,5,107,9,5,1,5,1,5,1,5,3,5,112,8,5,1,5,1,5,1,6,
1,6,3,6,118,8,6,1,6,1,6,3,6,122,8,6,1,6,5,6,125,8,6,10,6,12,6,128,9,6,1,
6,1,6,1,6,3,6,133,8,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,141,8,7,1,8,1,8,1,8,5,
8,146,8,8,10,8,12,8,149,9,8,1,8,1,8,1,8,3,8,154,8,8,1,9,1,9,1,10,3,10,159,
8,10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,1,12,3,12,169,8,12,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,3,13,179,8,13,1,13,1,13,1,13,1,13,5,13,185,8,13,
10,13,12,13,188,9,13,1,14,1,14,3,14,192,8,14,1,14,1,14,3,14,196,8,14,1,14,
5,14,199,8,14,10,14,12,14,202,9,14,1,15,1,15,3,15,206,8,15,1,15,1,15,3,15,
210,8,15,1,15,5,15,213,8,15,10,15,12,15,216,9,15,1,16,1,16,1,16,1,16,1,16,
3,16,223,8,16,1,17,1,17,1,18,3,18,228,8,18,1,18,1,18,1,19,1,19,1,20,1,20,
1,20,3,20,237,8,20,1,21,1,21,1,22,1,22,1,23,1,23,1,23,0,1,26,24,0,2,4,6,
8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,0,7,2,0,63,63,
184,184,1,0,185,186,1,0,187,188,20,0,1,1,6,7,12,13,18,18,27,32,39,40,60,
61,67,67,70,71,75,75,88,89,91,91,113,117,121,124,126,128,130,130,136,139,
149,149,159,165,179,179,1,0,9,10,11,0,11,11,14,15,36,37,47,47,52,53,79,87,
93,98,101,102,111,111,143,143,152,152,29,0,2,5,8,8,16,17,19,26,33,35,38,
38,41,46,48,51,54,59,62,62,65,66,68,69,72,74,76,78,90,90,92,92,99,100,103,
110,112,112,118,120,125,125,129,129,131,135,140,142,144,148,150,151,153,
158,166,178,180,182,263,0,49,1,0,0,0,2,60,1,0,0,0,4,63,1,0,0,0,6,68,1,0,
0,0,8,74,1,0,0,0,10,95,1,0,0,0,12,115,1,0,0,0,14,136,1,0,0,0,16,147,1,0,
0,0,18,155,1,0,0,0,20,158,1,0,0,0,22,162,1,0,0,0,24,168,1,0,0,0,26,178,1,
0,0,0,28,189,1,0,0,0,30,203,1,0,0,0,32,222,1,0,0,0,34,224,1,0,0,0,36,227,
1,0,0,0,38,231,1,0,0,0,40,236,1,0,0,0,42,238,1,0,0,0,44,240,1,0,0,0,46,242,
1,0,0,0,48,50,3,2,1,0,49,48,1,0,0,0,50,51,1,0,0,0,51,49,1,0,0,0,51,52,1,
0,0,0,52,53,1,0,0,0,53,54,5,0,0,1,54,1,1,0,0,0,55,61,3,6,3,0,56,61,3,4,2,
0,57,61,3,8,4,0,58,61,3,10,5,0,59,61,3,12,6,0,60,55,1,0,0,0,60,56,1,0,0,
0,60,57,1,0,0,0,60,58,1,0,0,0,60,59,1,0,0,0,61,3,1,0,0,0,62,64,3,24,12,0,
63,62,1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,66,3,20,10,0,66,5,1,0,0,0,67,
69,3,18,9,0,68,67,1,0,0,0,68,69,1,0,0,0,69,70,1,0,0,0,70,71,3,22,11,0,71,
72,3,20,10,0,72,7,1,0,0,0,73,75,3,24,12,0,74,73,1,0,0,0,74,75,1,0,0,0,75,
76,1,0,0,0,76,77,3,18,9,0,77,81,3,14,7,0,78,79,3,20,10,0,79,80,3,6,3,0,80,
82,1,0,0,0,81,78,1,0,0,0,81,82,1,0,0,0,82,83,1,0,0,0,83,89,3,16,8,0,84,85,
3,20,10,0,85,86,3,16,8,0,86,88,1,0,0,0,87,84,1,0,0,0,88,91,1,0,0,0,89,87,
1,0,0,0,89,90,1,0,0,0,90,92,1,0,0,0,91,89,1,0,0,0,92,93,3,20,10,0,93,9,1,
0,0,0,94,96,3,26,13,0,95,94,1,0,0,0,95,96,1,0,0,0,96,97,1,0,0,0,97,98,3,
18,9,0,98,105,5,64,0,0,99,101,3,18,9,0,100,99,1,0,0,0,100,101,1,0,0,0,101,
102,1,0,0,0,102,104,3,28,14,0,103,100,1,0,0,0,104,107,1,0,0,0,105,103,1,
0,0,0,105,106,1,0,0,0,106,111,1,0,0,0,107,105,1,0,0,0,108,109,3,18,9,0,109,
110,3,22,11,0,110,112,1,0,0,0,111,108,1,0,0,0,111,112,1,0,0,0,112,113,1,
0,0,0,113,114,3,20,10,0,114,11,1,0,0,0,115,117,3,26,13,0,116,118,3,18,9,
0,117,116,1,0,0,0,117,118,1,0,0,0,118,119,1,0,0,0,119,126,7,0,0,0,120,122,
3,18,9,0,121,120,1,0,0,0,121,122,1,0,0,0,122,123,1,0,0,0,123,125,3,28,14,
0,124,121,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,132,
1,0,0,0,128,126,1,0,0,0,129,130,3,18,9,0,130,131,3,22,11,0,131,133,1,0,0,
0,132,129,1,0,0,0,132,133,1,0,0,0,133,134,1,0,0,0,134,135,3,20,10,0,135,
13,1,0,0,0,136,140,3,40,20,0,137,138,3,18,9,0,138,139,3,40,20,0,139,141,
1,0,0,0,140,137,1,0,0,0,140,141,1,0,0,0,141,15,1,0,0,0,142,143,3,18,9,0,
143,144,3,28,14,0,144,146,1,0,0,0,145,142,1,0,0,0,146,149,1,0,0,0,147,145,
1,0,0,0,147,148,1,0,0,0,148,153,1,0,0,0,149,147,1,0,0,0,150,151,3,18,9,0,
151,152,3,22,11,0,152,154,1,0,0,0,153,150,1,0,0,0,153,154,1,0,0,0,154,17,
1,0,0,0,155,156,5,196,0,0,156,19,1,0,0,0,157,159,5,196,0,0,158,157,1,0,0,
0,158,159,1,0,0,0,159,160,1,0,0,0,160,161,5,192,0,0,161,21,1,0,0,0,162,163,
5,183,0,0,163,23,1,0,0,0,164,169,5,193,0,0,165,169,3,38,19,0,166,169,3,46,
23,0,167,169,3,44,22,0,168,164,1,0,0,0,168,165,1,0,0,0,168,166,1,0,0,0,168,
167,1,0,0,0,169,25,1,0,0,0,170,171,6,13,-1,0,171,179,5,193,0,0,172,179,3,
38,19,0,173,179,3,46,23,0,174,179,3,44,22,0,175,176,5,190,0,0,176,177,5,
193,0,0,177,179,5,191,0,0,178,170,1,0,0,0,178,172,1,0,0,0,178,173,1,0,0,
0,178,174,1,0,0,0,178,175,1,0,0,0,179,186,1,0,0,0,180,181,10,1,0,0,181,182,
5,190,0,0,182,183,5,193,0,0,183,185,5,191,0,0,184,180,1,0,0,0,185,188,1,
0,0,0,186,184,1,0,0,0,186,187,1,0,0,0,187,27,1,0,0,0,188,186,1,0,0,0,189,
200,3,30,15,0,190,192,3,18,9,0,191,190,1,0,0,0,191,192,1,0,0,0,192,193,1,
0,0,0,193,195,7,1,0,0,194,196,3,18,9,0,195,194,1,0,0,0,195,196,1,0,0,0,196,
197,1,0,0,0,197,199,3,30,15,0,198,191,1,0,0,0,199,202,1,0,0,0,200,198,1,
0,0,0,200,201,1,0,0,0,201,29,1,0,0,0,202,200,1,0,0,0,203,214,3,32,16,0,204,
206,3,18,9,0,205,204,1,0,0,0,205,206,1,0,0,0,206,207,1,0,0,0,207,209,7,2,
0,0,208,210,3,18,9,0,209,208,1,0,0,0,209,210,1,0,0,0,210,211,1,0,0,0,211,
213,3,32,16,0,212,205,1,0,0,0,213,216,1,0,0,0,214,212,1,0,0,0,214,215,1,
0,0,0,215,31,1,0,0,0,216,214,1,0,0,0,217,223,3,34,17,0,218,223,3,36,18,0,
219,223,3,26,13,0,220,223,3,24,12,0,221,223,3,38,19,0,222,217,1,0,0,0,222,
218,1,0,0,0,222,219,1,0,0,0,222,220,1,0,0,0,222,221,1,0,0,0,223,33,1,0,0,
0,224,225,5,194,0,0,225,35,1,0,0,0,226,228,7,1,0,0,227,226,1,0,0,0,227,228,
1,0,0,0,228,229,1,0,0,0,229,230,5,195,0,0,230,37,1,0,0,0,231,232,7,3,0,0,
232,39,1,0,0,0,233,237,3,46,23,0,234,237,3,44,22,0,235,237,3,42,21,0,236,
233,1,0,0,0,236,234,1,0,0,0,236,235,1,0,0,0,237,41,1,0,0,0,238,239,7,4,0,
0,239,43,1,0,0,0,240,241,7,5,0,0,241,45,1,0,0,0,242,243,7,6,0,0,243,47,1,
0,0,0,31,51,60,63,68,74,81,89,95,100,105,111,117,121,126,132,140,147,153,
158,168,178,186,191,195,200,205,209,214,222,227,236];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class agcParser extends antlr4.Parser {

    static grammarFileName = "agc.g4";
    static literalNames = [ null, "'A'", "'ABVAL'", "'AD'", "'ADRES'", "'ADS'", 
                            "'ALTM'", "'ARUPT'", "'AUG'", "'AXT,1'", "'AXT,2'", 
                            "'BANK'", "'BB'", "'BBRUPT'", "'BLOCK'", "'BNKSUM'", 
                            "'BOV'", "'BPL'", "'BRUPT'", "'BZF'", "'BZMF'", 
                            "'CA'", "'CAD'", "'CADR'", "'CAE'", "'CAF'", 
                            "'CCS'", "'CDUX'", "'CDUXCMD'", "'CDUY'", "'CDUYCMD'", 
                            "'CDUZ'", "'CDUZCMD'", "'COM'", "'COMP'", "'COS'", 
                            "'COUNT'", "'COUNT*'", "'CS'", "'CYL'", "'CYR'", 
                            "'DAD'", "'DAS'", "'DCA'", "'DCOM'", "'DCS'", 
                            "'DDOUBL'", "'DEC'", "'DIM'", "'DINC'", "'DMOVE'", 
                            "'DMP'", "'DNCHAN'", "'DNPTR'", "'DOUBLE'", 
                            "'DSU'", "'DTCB'", "'DTCF'", "'DV'", "'DXCH'", 
                            "'EB'", "'EDOP'", "'EDRUPT'", "'EQUALS'", "'ERASE'", 
                            "'EXIT'", "'EXTEND'", "'FB'", "'FETCH'", "'GOJ'", 
                            "'GYROCMD'", "'GYROCTR'", "'INCR'", "'INDEX'", 
                            "'INHINT'", "'INLINK'", "'INOTLD'", "'INOTRD'", 
                            "'ITC'", "'1DNADR'", "'2DEC'", "'2DEC*'", "'2DNADR'", 
                            "'2FCADR'", "'3DNADR'", "'4DNADR'", "'5DNADR'", 
                            "'6DNADR'", "'L'", "'LEMONM'", "'LODON'", "'LRUPT'", 
                            "'LXCH'", "'-1DNADR'", "'-2DNADR'", "'-3DNADR'", 
                            "'-4DNADR'", "'-5DNADR'", "'-6DNADR'", "'MASK'", 
                            "'MCDU'", "'-DNCHAN'", "'-DNPTR'", "'MINC'", 
                            "'MOUT'", "'MP'", "'MSK'", "'MSU'", "'NDX'", 
                            "'NOLOD'", "'NOOP'", "'OCT'", "'OCTAL'", "'OPTX'", 
                            "'OPTXCMD'", "'OPTY'", "'OPTYCMD'", "'OUTLINK'", 
                            "'OVSK'", "'PCDU'", "'PINC'", "'PIPAX'", "'PIPAY'", 
                            "'PIPAZ'", "'P-RHCCTR'", "'POUT'", "'Q'", "'Q-RHCCTR'", 
                            "'QRUPT'", "'QXCH'", "'R-RHCCTR'", "'RAND'", 
                            "'READ'", "'RELINT'", "'RESUME'", "'RETURN'", 
                            "'RHCP'", "'RHCR'", "'RHCY'", "'RNRAD'", "'ROR'", 
                            "'RTB'", "'RXOR'", "'SETLOC'", "'SHANC'", "'SHINC'", 
                            "'SIN'", "'SMOVE'", "'SQUARE'", "'SR'", "'STORE'", 
                            "'SU'", "'SUBRO'", "'TC'", "'TCAA'", "'TCF'", 
                            "'TCR'", "'TCSAJ'", "'TEST'", "'THRUST'", "'TIME1'", 
                            "'TIME2'", "'TIME3'", "'TIME4'", "'TIME5'", 
                            "'TIME6'", "'TS'", "'TSLT'", "'UNIT'", "'VAD'", 
                            "'VMOVE'", "'VXSC'", "'VXV'", "'WAND'", "'WOR'", 
                            "'WRITE'", "'XCH'", "'XLQ'", "'XXALQ'", "'Z'", 
                            "'ZL'", "'ZOUT'", "'ZQ'", null, "'='", "'+'", 
                            "'-'", "'*'", "'/'", "','", "'('", "')'" ];
    static symbolicNames = [ null, "A", "ABVAL", "AD", "ADRES", "ADS", "ALTM", 
                             "ARUPT", "AUG", "AXTC1", "AXTC2", "BANK", "BB", 
                             "BBRUPT", "BLOCK", "BNKSUM", "BOV", "BPL", 
                             "BRUPT", "BZF", "BZMF", "CA", "CAD", "CADR", 
                             "CAE", "CAF", "CCS", "CDUX", "CDUXCMD", "CDUY", 
                             "CDUYCMD", "CDUZ", "CDUZCMD", "COM", "COMP", 
                             "COS", "COUNT", "COUNTS", "CS", "CYL", "CYR", 
                             "DAD", "DAS", "DCA", "DCOM", "DCS", "DDOUBL", 
                             "DEC", "DIM", "DINC", "DMOVE", "DMP", "DNCHAN", 
                             "DNPTR", "DOUBLE", "DSU", "DTCB", "DTCF", "DV", 
                             "DXCH", "EB", "EDOP", "EDRUPT", "EQUALS", "ERASE", 
                             "EXIT", "EXTEND", "FB", "FETCH", "GOJ", "GYROCMD", 
                             "GYROCTR", "INCR", "INDEX", "INHINT", "INLINK", 
                             "INOTLD", "INOTRD", "ITC", "K1DNADR", "K2DEC", 
                             "K2DECS", "K2DNADR", "K2FCADR", "K3DNADR", 
                             "K4DNADR", "K5DNADR", "K6DNADR", "L", "LEMONM", 
                             "LODON", "LRUPT", "LXCH", "M1DNADR", "M2DNADR", 
                             "M3DNADR", "M4DNADR", "M5DNADR", "M6DNADR", 
                             "MASK", "MCDU", "MDNCHAN", "MDNPTR", "MINC", 
                             "MOUT", "MP", "MSK", "MSU", "NDX", "NOLOD", 
                             "NOOP", "OCT", "OCTAL", "OPTX", "OPTXCMD", 
                             "OPTY", "OPTYCMD", "OUTLINK", "OVSK", "PCDU", 
                             "PINC", "PIPAX", "PIPAY", "PIPAZ", "PMRHCCTR", 
                             "POUT", "Q", "QMRHCCTR", "QRUPT", "QXCH", "RMRHCCTR", 
                             "RAND", "READ", "RELINT", "RESUME", "RETURN", 
                             "RHCP", "RHCR", "RHCY", "RNRAD", "ROR", "RTB", 
                             "RXOR", "SETLOC", "SHANC", "SHINC", "SIN", 
                             "SMOVE", "SQUARE", "SR", "STORE", "SU", "SUBRO", 
                             "TC", "TCAA", "TCF", "TCR", "TCSAJ", "TEST", 
                             "THRUST", "TIME1", "TIME2", "TIME3", "TIME4", 
                             "TIME5", "TIME6", "TS", "TSLT", "UNIT", "VAD", 
                             "VMOVE", "VXSC", "VXV", "WAND", "WOR", "WRITE", 
                             "XCH", "XLQ", "XXALQ", "Z", "ZL", "ZOUT", "ZQ", 
                             "COMMENT", "EQUAL", "PLUS", "MINUS", "TIMES", 
                             "DIV", "COMMA", "LPAREN", "RPAREN", "EOL", 
                             "LABEL", "INTE", "DECIMAL", "WS" ];
    static ruleNames = [ "prog", "line", "blank_line", "comment_line", "instruction_line", 
                         "erase_line", "assignment_line", "opcodes", "argument", 
                         "ws", "eol", "comment", "label", "variable", "expression", 
                         "multiplyingExpression", "atom", "inte", "decimal", 
                         "register_", "opcode", "axt_opcode", "pseudo_opcode", 
                         "standard_opcode" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = agcParser.ruleNames;
        this.literalNames = agcParser.literalNames;
        this.symbolicNames = agcParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 13:
    	    		return this.variable_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    variable_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, agcParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 48;
	            this.line();
	            this.state = 51; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294965758) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2147483647) !== 0) || ((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 4294967295) !== 0) || ((((_la - 97)) & ~0x1f) === 0 && ((1 << (_la - 97)) & 4294967295) !== 0) || ((((_la - 129)) & ~0x1f) === 0 && ((1 << (_la - 129)) & 4294967295) !== 0) || ((((_la - 161)) & ~0x1f) === 0 && ((1 << (_la - 161)) & 2692743167) !== 0) || _la===193 || _la===196);
	        this.state = 53;
	        this.match(agcParser.EOF);
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
	    this.enterRule(localctx, 2, agcParser.RULE_line);
	    try {
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 55;
	            this.comment_line();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 56;
	            this.blank_line();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 57;
	            this.instruction_line();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 58;
	            this.erase_line();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 59;
	            this.assignment_line();
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



	blank_line() {
	    let localctx = new Blank_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, agcParser.RULE_blank_line);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294965758) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2147483647) !== 0) || ((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 4294967295) !== 0) || ((((_la - 97)) & ~0x1f) === 0 && ((1 << (_la - 97)) & 4294967295) !== 0) || ((((_la - 129)) & ~0x1f) === 0 && ((1 << (_la - 129)) & 4294967295) !== 0) || ((((_la - 161)) & ~0x1f) === 0 && ((1 << (_la - 161)) & 4194303) !== 0) || _la===193) {
	            this.state = 62;
	            this.label();
	        }

	        this.state = 65;
	        this.eol();
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



	comment_line() {
	    let localctx = new Comment_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, agcParser.RULE_comment_line);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===196) {
	            this.state = 67;
	            this.ws();
	        }

	        this.state = 70;
	        this.comment();
	        this.state = 71;
	        this.eol();
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



	instruction_line() {
	    let localctx = new Instruction_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, agcParser.RULE_instruction_line);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294965758) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2147483647) !== 0) || ((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 4294967295) !== 0) || ((((_la - 97)) & ~0x1f) === 0 && ((1 << (_la - 97)) & 4294967295) !== 0) || ((((_la - 129)) & ~0x1f) === 0 && ((1 << (_la - 129)) & 4294967295) !== 0) || ((((_la - 161)) & ~0x1f) === 0 && ((1 << (_la - 161)) & 4194303) !== 0) || _la===193) {
	            this.state = 73;
	            this.label();
	        }

	        this.state = 76;
	        this.ws();
	        this.state = 77;
	        this.opcodes();
	        this.state = 81;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 78;
	            this.eol();
	            this.state = 79;
	            this.comment_line();

	        }
	        this.state = 83;
	        this.argument();
	        this.state = 89;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 84;
	                this.eol();
	                this.state = 85;
	                this.argument(); 
	            }
	            this.state = 91;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	        this.state = 92;
	        this.eol();
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



	erase_line() {
	    let localctx = new Erase_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, agcParser.RULE_erase_line);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294965758) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2147483647) !== 0) || ((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 4294967295) !== 0) || ((((_la - 97)) & ~0x1f) === 0 && ((1 << (_la - 97)) & 4294967295) !== 0) || ((((_la - 129)) & ~0x1f) === 0 && ((1 << (_la - 129)) & 4294967295) !== 0) || ((((_la - 161)) & ~0x1f) === 0 && ((1 << (_la - 161)) & 541065215) !== 0) || _la===193) {
	            this.state = 94;
	            this.variable(0);
	        }

	        this.state = 97;
	        this.ws();
	        this.state = 98;
	        this.match(agcParser.ERASE);
	        this.state = 105;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 100;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===196) {
	                    this.state = 99;
	                    this.ws();
	                }

	                this.state = 102;
	                this.expression(); 
	            }
	            this.state = 107;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	        this.state = 111;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 108;
	            this.ws();
	            this.state = 109;
	            this.comment();

	        }
	        this.state = 113;
	        this.eol();
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



	assignment_line() {
	    let localctx = new Assignment_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, agcParser.RULE_assignment_line);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.variable(0);
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===196) {
	            this.state = 116;
	            this.ws();
	        }

	        this.state = 119;
	        _la = this._input.LA(1);
	        if(!(_la===63 || _la===184)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 126;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 121;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===196) {
	                    this.state = 120;
	                    this.ws();
	                }

	                this.state = 123;
	                this.expression(); 
	            }
	            this.state = 128;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	        this.state = 132;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 129;
	            this.ws();
	            this.state = 130;
	            this.comment();

	        }
	        this.state = 134;
	        this.eol();
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



	opcodes() {
	    let localctx = new OpcodesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, agcParser.RULE_opcodes);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.opcode();
	        this.state = 140;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 137;
	            this.ws();
	            this.state = 138;
	            this.opcode();

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
	    this.enterRule(localctx, 16, agcParser.RULE_argument);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 142;
	                this.ws();
	                this.state = 143;
	                this.expression(); 
	            }
	            this.state = 149;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	        this.state = 153;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 150;
	            this.ws();
	            this.state = 151;
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



	ws() {
	    let localctx = new WsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, agcParser.RULE_ws);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(agcParser.WS);
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



	eol() {
	    let localctx = new EolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, agcParser.RULE_eol);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===196) {
	            this.state = 157;
	            this.match(agcParser.WS);
	        }

	        this.state = 160;
	        this.match(agcParser.EOL);
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
	    this.enterRule(localctx, 22, agcParser.RULE_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(agcParser.COMMENT);
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
	    this.enterRule(localctx, 24, agcParser.RULE_label);
	    try {
	        this.state = 168;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 193:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 164;
	            this.match(agcParser.LABEL);
	            break;
	        case 1:
	        case 6:
	        case 7:
	        case 12:
	        case 13:
	        case 18:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 39:
	        case 40:
	        case 60:
	        case 61:
	        case 67:
	        case 70:
	        case 71:
	        case 75:
	        case 88:
	        case 89:
	        case 91:
	        case 113:
	        case 114:
	        case 115:
	        case 116:
	        case 117:
	        case 121:
	        case 122:
	        case 123:
	        case 124:
	        case 126:
	        case 127:
	        case 128:
	        case 130:
	        case 136:
	        case 137:
	        case 138:
	        case 139:
	        case 149:
	        case 159:
	        case 160:
	        case 161:
	        case 162:
	        case 163:
	        case 164:
	        case 165:
	        case 179:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 165;
	            this.register_();
	            break;
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 8:
	        case 16:
	        case 17:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 33:
	        case 34:
	        case 35:
	        case 38:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 62:
	        case 65:
	        case 66:
	        case 68:
	        case 69:
	        case 72:
	        case 73:
	        case 74:
	        case 76:
	        case 77:
	        case 78:
	        case 90:
	        case 92:
	        case 99:
	        case 100:
	        case 103:
	        case 104:
	        case 105:
	        case 106:
	        case 107:
	        case 108:
	        case 109:
	        case 110:
	        case 112:
	        case 118:
	        case 119:
	        case 120:
	        case 125:
	        case 129:
	        case 131:
	        case 132:
	        case 133:
	        case 134:
	        case 135:
	        case 140:
	        case 141:
	        case 142:
	        case 144:
	        case 145:
	        case 146:
	        case 147:
	        case 148:
	        case 150:
	        case 151:
	        case 153:
	        case 154:
	        case 155:
	        case 156:
	        case 157:
	        case 158:
	        case 166:
	        case 167:
	        case 168:
	        case 169:
	        case 170:
	        case 171:
	        case 172:
	        case 173:
	        case 174:
	        case 175:
	        case 176:
	        case 177:
	        case 178:
	        case 180:
	        case 181:
	        case 182:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 166;
	            this.standard_opcode();
	            break;
	        case 11:
	        case 14:
	        case 15:
	        case 36:
	        case 37:
	        case 47:
	        case 52:
	        case 53:
	        case 79:
	        case 80:
	        case 81:
	        case 82:
	        case 83:
	        case 84:
	        case 85:
	        case 86:
	        case 87:
	        case 93:
	        case 94:
	        case 95:
	        case 96:
	        case 97:
	        case 98:
	        case 101:
	        case 102:
	        case 111:
	        case 143:
	        case 152:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 167;
	            this.pseudo_opcode();
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


	variable(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new VariableContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, agcParser.RULE_variable, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 193:
	            this.state = 171;
	            this.match(agcParser.LABEL);
	            break;
	        case 1:
	        case 6:
	        case 7:
	        case 12:
	        case 13:
	        case 18:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 39:
	        case 40:
	        case 60:
	        case 61:
	        case 67:
	        case 70:
	        case 71:
	        case 75:
	        case 88:
	        case 89:
	        case 91:
	        case 113:
	        case 114:
	        case 115:
	        case 116:
	        case 117:
	        case 121:
	        case 122:
	        case 123:
	        case 124:
	        case 126:
	        case 127:
	        case 128:
	        case 130:
	        case 136:
	        case 137:
	        case 138:
	        case 139:
	        case 149:
	        case 159:
	        case 160:
	        case 161:
	        case 162:
	        case 163:
	        case 164:
	        case 165:
	        case 179:
	            this.state = 172;
	            this.register_();
	            break;
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 8:
	        case 16:
	        case 17:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 33:
	        case 34:
	        case 35:
	        case 38:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 62:
	        case 65:
	        case 66:
	        case 68:
	        case 69:
	        case 72:
	        case 73:
	        case 74:
	        case 76:
	        case 77:
	        case 78:
	        case 90:
	        case 92:
	        case 99:
	        case 100:
	        case 103:
	        case 104:
	        case 105:
	        case 106:
	        case 107:
	        case 108:
	        case 109:
	        case 110:
	        case 112:
	        case 118:
	        case 119:
	        case 120:
	        case 125:
	        case 129:
	        case 131:
	        case 132:
	        case 133:
	        case 134:
	        case 135:
	        case 140:
	        case 141:
	        case 142:
	        case 144:
	        case 145:
	        case 146:
	        case 147:
	        case 148:
	        case 150:
	        case 151:
	        case 153:
	        case 154:
	        case 155:
	        case 156:
	        case 157:
	        case 158:
	        case 166:
	        case 167:
	        case 168:
	        case 169:
	        case 170:
	        case 171:
	        case 172:
	        case 173:
	        case 174:
	        case 175:
	        case 176:
	        case 177:
	        case 178:
	        case 180:
	        case 181:
	        case 182:
	            this.state = 173;
	            this.standard_opcode();
	            break;
	        case 11:
	        case 14:
	        case 15:
	        case 36:
	        case 37:
	        case 47:
	        case 52:
	        case 53:
	        case 79:
	        case 80:
	        case 81:
	        case 82:
	        case 83:
	        case 84:
	        case 85:
	        case 86:
	        case 87:
	        case 93:
	        case 94:
	        case 95:
	        case 96:
	        case 97:
	        case 98:
	        case 101:
	        case 102:
	        case 111:
	        case 143:
	        case 152:
	            this.state = 174;
	            this.pseudo_opcode();
	            break;
	        case 190:
	            this.state = 175;
	            this.match(agcParser.LPAREN);
	            this.state = 176;
	            this.match(agcParser.LABEL);
	            this.state = 177;
	            this.match(agcParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 186;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new VariableContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, agcParser.RULE_variable);
	                this.state = 180;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 181;
	                this.match(agcParser.LPAREN);
	                this.state = 182;
	                this.match(agcParser.LABEL);
	                this.state = 183;
	                this.match(agcParser.RPAREN); 
	            }
	            this.state = 188;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, agcParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.multiplyingExpression();
	        this.state = 200;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 191;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===196) {
	                    this.state = 190;
	                    this.ws();
	                }

	                this.state = 193;
	                _la = this._input.LA(1);
	                if(!(_la===185 || _la===186)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 195;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===196) {
	                    this.state = 194;
	                    this.ws();
	                }

	                this.state = 197;
	                this.multiplyingExpression(); 
	            }
	            this.state = 202;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
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
	    this.enterRule(localctx, 30, agcParser.RULE_multiplyingExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.atom();
	        this.state = 214;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 205;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===196) {
	                    this.state = 204;
	                    this.ws();
	                }

	                this.state = 207;
	                _la = this._input.LA(1);
	                if(!(_la===187 || _la===188)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 209;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===196) {
	                    this.state = 208;
	                    this.ws();
	                }

	                this.state = 211;
	                this.atom(); 
	            }
	            this.state = 216;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, agcParser.RULE_atom);
	    try {
	        this.state = 222;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 217;
	            this.inte();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 218;
	            this.decimal();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 219;
	            this.variable(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 220;
	            this.label();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 221;
	            this.register_();
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



	inte() {
	    let localctx = new InteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, agcParser.RULE_inte);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.match(agcParser.INTE);
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



	decimal() {
	    let localctx = new DecimalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, agcParser.RULE_decimal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===185 || _la===186) {
	            this.state = 226;
	            _la = this._input.LA(1);
	            if(!(_la===185 || _la===186)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 229;
	        this.match(agcParser.DECIMAL);
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
	    this.enterRule(localctx, 38, agcParser.RULE_register_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4161024194) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 805306753) !== 0) || ((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 23068953) !== 0) || ((((_la - 113)) & ~0x1f) === 0 && ((1 << (_la - 113)) & 126021407) !== 0) || ((((_la - 149)) & ~0x1f) === 0 && ((1 << (_la - 149)) & 1073871873) !== 0))) {
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



	opcode() {
	    let localctx = new OpcodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, agcParser.RULE_opcode);
	    try {
	        this.state = 236;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 8:
	        case 16:
	        case 17:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 33:
	        case 34:
	        case 35:
	        case 38:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 62:
	        case 65:
	        case 66:
	        case 68:
	        case 69:
	        case 72:
	        case 73:
	        case 74:
	        case 76:
	        case 77:
	        case 78:
	        case 90:
	        case 92:
	        case 99:
	        case 100:
	        case 103:
	        case 104:
	        case 105:
	        case 106:
	        case 107:
	        case 108:
	        case 109:
	        case 110:
	        case 112:
	        case 118:
	        case 119:
	        case 120:
	        case 125:
	        case 129:
	        case 131:
	        case 132:
	        case 133:
	        case 134:
	        case 135:
	        case 140:
	        case 141:
	        case 142:
	        case 144:
	        case 145:
	        case 146:
	        case 147:
	        case 148:
	        case 150:
	        case 151:
	        case 153:
	        case 154:
	        case 155:
	        case 156:
	        case 157:
	        case 158:
	        case 166:
	        case 167:
	        case 168:
	        case 169:
	        case 170:
	        case 171:
	        case 172:
	        case 173:
	        case 174:
	        case 175:
	        case 176:
	        case 177:
	        case 178:
	        case 180:
	        case 181:
	        case 182:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 233;
	            this.standard_opcode();
	            break;
	        case 11:
	        case 14:
	        case 15:
	        case 36:
	        case 37:
	        case 47:
	        case 52:
	        case 53:
	        case 79:
	        case 80:
	        case 81:
	        case 82:
	        case 83:
	        case 84:
	        case 85:
	        case 86:
	        case 87:
	        case 93:
	        case 94:
	        case 95:
	        case 96:
	        case 97:
	        case 98:
	        case 101:
	        case 102:
	        case 111:
	        case 143:
	        case 152:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 234;
	            this.pseudo_opcode();
	            break;
	        case 9:
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 235;
	            this.axt_opcode();
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



	axt_opcode() {
	    let localctx = new Axt_opcodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, agcParser.RULE_axt_opcode);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===10)) {
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



	pseudo_opcode() {
	    let localctx = new Pseudo_opcodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, agcParser.RULE_pseudo_opcode);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 51200) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 198659) !== 0) || ((((_la - 79)) & ~0x1f) === 0 && ((1 << (_la - 79)) & 13615615) !== 0) || _la===111 || _la===143 || _la===152)) {
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



	standard_opcode() {
	    let localctx = new Standard_opcodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, agcParser.RULE_standard_opcode);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 133890364) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 669499175) !== 0) || ((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 167787419) !== 0) || ((((_la - 99)) & ~0x1f) === 0 && ((1 << (_la - 99)) & 1144532979) !== 0) || ((((_la - 131)) & ~0x1f) === 0 && ((1 << (_la - 131)) & 266071583) !== 0) || ((((_la - 166)) & ~0x1f) === 0 && ((1 << (_la - 166)) & 122879) !== 0))) {
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

agcParser.EOF = antlr4.Token.EOF;
agcParser.A = 1;
agcParser.ABVAL = 2;
agcParser.AD = 3;
agcParser.ADRES = 4;
agcParser.ADS = 5;
agcParser.ALTM = 6;
agcParser.ARUPT = 7;
agcParser.AUG = 8;
agcParser.AXTC1 = 9;
agcParser.AXTC2 = 10;
agcParser.BANK = 11;
agcParser.BB = 12;
agcParser.BBRUPT = 13;
agcParser.BLOCK = 14;
agcParser.BNKSUM = 15;
agcParser.BOV = 16;
agcParser.BPL = 17;
agcParser.BRUPT = 18;
agcParser.BZF = 19;
agcParser.BZMF = 20;
agcParser.CA = 21;
agcParser.CAD = 22;
agcParser.CADR = 23;
agcParser.CAE = 24;
agcParser.CAF = 25;
agcParser.CCS = 26;
agcParser.CDUX = 27;
agcParser.CDUXCMD = 28;
agcParser.CDUY = 29;
agcParser.CDUYCMD = 30;
agcParser.CDUZ = 31;
agcParser.CDUZCMD = 32;
agcParser.COM = 33;
agcParser.COMP = 34;
agcParser.COS = 35;
agcParser.COUNT = 36;
agcParser.COUNTS = 37;
agcParser.CS = 38;
agcParser.CYL = 39;
agcParser.CYR = 40;
agcParser.DAD = 41;
agcParser.DAS = 42;
agcParser.DCA = 43;
agcParser.DCOM = 44;
agcParser.DCS = 45;
agcParser.DDOUBL = 46;
agcParser.DEC = 47;
agcParser.DIM = 48;
agcParser.DINC = 49;
agcParser.DMOVE = 50;
agcParser.DMP = 51;
agcParser.DNCHAN = 52;
agcParser.DNPTR = 53;
agcParser.DOUBLE = 54;
agcParser.DSU = 55;
agcParser.DTCB = 56;
agcParser.DTCF = 57;
agcParser.DV = 58;
agcParser.DXCH = 59;
agcParser.EB = 60;
agcParser.EDOP = 61;
agcParser.EDRUPT = 62;
agcParser.EQUALS = 63;
agcParser.ERASE = 64;
agcParser.EXIT = 65;
agcParser.EXTEND = 66;
agcParser.FB = 67;
agcParser.FETCH = 68;
agcParser.GOJ = 69;
agcParser.GYROCMD = 70;
agcParser.GYROCTR = 71;
agcParser.INCR = 72;
agcParser.INDEX = 73;
agcParser.INHINT = 74;
agcParser.INLINK = 75;
agcParser.INOTLD = 76;
agcParser.INOTRD = 77;
agcParser.ITC = 78;
agcParser.K1DNADR = 79;
agcParser.K2DEC = 80;
agcParser.K2DECS = 81;
agcParser.K2DNADR = 82;
agcParser.K2FCADR = 83;
agcParser.K3DNADR = 84;
agcParser.K4DNADR = 85;
agcParser.K5DNADR = 86;
agcParser.K6DNADR = 87;
agcParser.L = 88;
agcParser.LEMONM = 89;
agcParser.LODON = 90;
agcParser.LRUPT = 91;
agcParser.LXCH = 92;
agcParser.M1DNADR = 93;
agcParser.M2DNADR = 94;
agcParser.M3DNADR = 95;
agcParser.M4DNADR = 96;
agcParser.M5DNADR = 97;
agcParser.M6DNADR = 98;
agcParser.MASK = 99;
agcParser.MCDU = 100;
agcParser.MDNCHAN = 101;
agcParser.MDNPTR = 102;
agcParser.MINC = 103;
agcParser.MOUT = 104;
agcParser.MP = 105;
agcParser.MSK = 106;
agcParser.MSU = 107;
agcParser.NDX = 108;
agcParser.NOLOD = 109;
agcParser.NOOP = 110;
agcParser.OCT = 111;
agcParser.OCTAL = 112;
agcParser.OPTX = 113;
agcParser.OPTXCMD = 114;
agcParser.OPTY = 115;
agcParser.OPTYCMD = 116;
agcParser.OUTLINK = 117;
agcParser.OVSK = 118;
agcParser.PCDU = 119;
agcParser.PINC = 120;
agcParser.PIPAX = 121;
agcParser.PIPAY = 122;
agcParser.PIPAZ = 123;
agcParser.PMRHCCTR = 124;
agcParser.POUT = 125;
agcParser.Q = 126;
agcParser.QMRHCCTR = 127;
agcParser.QRUPT = 128;
agcParser.QXCH = 129;
agcParser.RMRHCCTR = 130;
agcParser.RAND = 131;
agcParser.READ = 132;
agcParser.RELINT = 133;
agcParser.RESUME = 134;
agcParser.RETURN = 135;
agcParser.RHCP = 136;
agcParser.RHCR = 137;
agcParser.RHCY = 138;
agcParser.RNRAD = 139;
agcParser.ROR = 140;
agcParser.RTB = 141;
agcParser.RXOR = 142;
agcParser.SETLOC = 143;
agcParser.SHANC = 144;
agcParser.SHINC = 145;
agcParser.SIN = 146;
agcParser.SMOVE = 147;
agcParser.SQUARE = 148;
agcParser.SR = 149;
agcParser.STORE = 150;
agcParser.SU = 151;
agcParser.SUBRO = 152;
agcParser.TC = 153;
agcParser.TCAA = 154;
agcParser.TCF = 155;
agcParser.TCR = 156;
agcParser.TCSAJ = 157;
agcParser.TEST = 158;
agcParser.THRUST = 159;
agcParser.TIME1 = 160;
agcParser.TIME2 = 161;
agcParser.TIME3 = 162;
agcParser.TIME4 = 163;
agcParser.TIME5 = 164;
agcParser.TIME6 = 165;
agcParser.TS = 166;
agcParser.TSLT = 167;
agcParser.UNIT = 168;
agcParser.VAD = 169;
agcParser.VMOVE = 170;
agcParser.VXSC = 171;
agcParser.VXV = 172;
agcParser.WAND = 173;
agcParser.WOR = 174;
agcParser.WRITE = 175;
agcParser.XCH = 176;
agcParser.XLQ = 177;
agcParser.XXALQ = 178;
agcParser.Z = 179;
agcParser.ZL = 180;
agcParser.ZOUT = 181;
agcParser.ZQ = 182;
agcParser.COMMENT = 183;
agcParser.EQUAL = 184;
agcParser.PLUS = 185;
agcParser.MINUS = 186;
agcParser.TIMES = 187;
agcParser.DIV = 188;
agcParser.COMMA = 189;
agcParser.LPAREN = 190;
agcParser.RPAREN = 191;
agcParser.EOL = 192;
agcParser.LABEL = 193;
agcParser.INTE = 194;
agcParser.DECIMAL = 195;
agcParser.WS = 196;

agcParser.RULE_prog = 0;
agcParser.RULE_line = 1;
agcParser.RULE_blank_line = 2;
agcParser.RULE_comment_line = 3;
agcParser.RULE_instruction_line = 4;
agcParser.RULE_erase_line = 5;
agcParser.RULE_assignment_line = 6;
agcParser.RULE_opcodes = 7;
agcParser.RULE_argument = 8;
agcParser.RULE_ws = 9;
agcParser.RULE_eol = 10;
agcParser.RULE_comment = 11;
agcParser.RULE_label = 12;
agcParser.RULE_variable = 13;
agcParser.RULE_expression = 14;
agcParser.RULE_multiplyingExpression = 15;
agcParser.RULE_atom = 16;
agcParser.RULE_inte = 17;
agcParser.RULE_decimal = 18;
agcParser.RULE_register_ = 19;
agcParser.RULE_opcode = 20;
agcParser.RULE_axt_opcode = 21;
agcParser.RULE_pseudo_opcode = 22;
agcParser.RULE_standard_opcode = 23;

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
        this.ruleIndex = agcParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(agcParser.EOF, 0);
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
	    if(listener instanceof agcListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
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
        this.ruleIndex = agcParser.RULE_line;
    }

	comment_line() {
	    return this.getTypedRuleContext(Comment_lineContext,0);
	};

	blank_line() {
	    return this.getTypedRuleContext(Blank_lineContext,0);
	};

	instruction_line() {
	    return this.getTypedRuleContext(Instruction_lineContext,0);
	};

	erase_line() {
	    return this.getTypedRuleContext(Erase_lineContext,0);
	};

	assignment_line() {
	    return this.getTypedRuleContext(Assignment_lineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitLine(this);
		}
	}


}



class Blank_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_blank_line;
    }

	eol() {
	    return this.getTypedRuleContext(EolContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterBlank_line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitBlank_line(this);
		}
	}


}



class Comment_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_comment_line;
    }

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	eol() {
	    return this.getTypedRuleContext(EolContext,0);
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterComment_line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitComment_line(this);
		}
	}


}



class Instruction_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_instruction_line;
    }

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	opcodes() {
	    return this.getTypedRuleContext(OpcodesContext,0);
	};

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

	eol = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EolContext);
	    } else {
	        return this.getTypedRuleContext(EolContext,i);
	    }
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	comment_line() {
	    return this.getTypedRuleContext(Comment_lineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterInstruction_line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitInstruction_line(this);
		}
	}


}



class Erase_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_erase_line;
    }

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	ERASE() {
	    return this.getToken(agcParser.ERASE, 0);
	};

	eol() {
	    return this.getTypedRuleContext(EolContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
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

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterErase_line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitErase_line(this);
		}
	}


}



class Assignment_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_assignment_line;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	eol() {
	    return this.getTypedRuleContext(EolContext,0);
	};

	EQUAL() {
	    return this.getToken(agcParser.EQUAL, 0);
	};

	EQUALS() {
	    return this.getToken(agcParser.EQUALS, 0);
	};

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
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

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterAssignment_line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitAssignment_line(this);
		}
	}


}



class OpcodesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_opcodes;
    }

	opcode = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OpcodeContext);
	    } else {
	        return this.getTypedRuleContext(OpcodeContext,i);
	    }
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterOpcodes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitOpcodes(this);
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
        this.ruleIndex = agcParser.RULE_argument;
    }

	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
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

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitArgument(this);
		}
	}


}



class WsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_ws;
    }

	WS() {
	    return this.getToken(agcParser.WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterWs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitWs(this);
		}
	}


}



class EolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_eol;
    }

	EOL() {
	    return this.getToken(agcParser.EOL, 0);
	};

	WS() {
	    return this.getToken(agcParser.WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterEol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitEol(this);
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
        this.ruleIndex = agcParser.RULE_comment;
    }

	COMMENT() {
	    return this.getToken(agcParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitComment(this);
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
        this.ruleIndex = agcParser.RULE_label;
    }

	LABEL() {
	    return this.getToken(agcParser.LABEL, 0);
	};

	register_() {
	    return this.getTypedRuleContext(Register_Context,0);
	};

	standard_opcode() {
	    return this.getTypedRuleContext(Standard_opcodeContext,0);
	};

	pseudo_opcode() {
	    return this.getTypedRuleContext(Pseudo_opcodeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitLabel(this);
		}
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_variable;
    }

	LABEL() {
	    return this.getToken(agcParser.LABEL, 0);
	};

	register_() {
	    return this.getTypedRuleContext(Register_Context,0);
	};

	standard_opcode() {
	    return this.getTypedRuleContext(Standard_opcodeContext,0);
	};

	pseudo_opcode() {
	    return this.getTypedRuleContext(Pseudo_opcodeContext,0);
	};

	LPAREN() {
	    return this.getToken(agcParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(agcParser.RPAREN, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitVariable(this);
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
        this.ruleIndex = agcParser.RULE_expression;
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

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(agcParser.PLUS);
	    } else {
	        return this.getToken(agcParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(agcParser.MINUS);
	    } else {
	        return this.getToken(agcParser.MINUS, i);
	    }
	};


	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
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
        this.ruleIndex = agcParser.RULE_multiplyingExpression;
    }

	atom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtomContext);
	    } else {
	        return this.getTypedRuleContext(AtomContext,i);
	    }
	};

	TIMES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(agcParser.TIMES);
	    } else {
	        return this.getToken(agcParser.TIMES, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(agcParser.DIV);
	    } else {
	        return this.getToken(agcParser.DIV, i);
	    }
	};


	ws = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WsContext);
	    } else {
	        return this.getTypedRuleContext(WsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterMultiplyingExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitMultiplyingExpression(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_atom;
    }

	inte() {
	    return this.getTypedRuleContext(InteContext,0);
	};

	decimal() {
	    return this.getTypedRuleContext(DecimalContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	register_() {
	    return this.getTypedRuleContext(Register_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitAtom(this);
		}
	}


}



class InteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_inte;
    }

	INTE() {
	    return this.getToken(agcParser.INTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterInte(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitInte(this);
		}
	}


}



class DecimalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_decimal;
    }

	DECIMAL() {
	    return this.getToken(agcParser.DECIMAL, 0);
	};

	PLUS() {
	    return this.getToken(agcParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(agcParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterDecimal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitDecimal(this);
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
        this.ruleIndex = agcParser.RULE_register_;
    }

	A() {
	    return this.getToken(agcParser.A, 0);
	};

	L() {
	    return this.getToken(agcParser.L, 0);
	};

	Q() {
	    return this.getToken(agcParser.Q, 0);
	};

	EB() {
	    return this.getToken(agcParser.EB, 0);
	};

	FB() {
	    return this.getToken(agcParser.FB, 0);
	};

	Z() {
	    return this.getToken(agcParser.Z, 0);
	};

	BB() {
	    return this.getToken(agcParser.BB, 0);
	};

	ARUPT() {
	    return this.getToken(agcParser.ARUPT, 0);
	};

	LRUPT() {
	    return this.getToken(agcParser.LRUPT, 0);
	};

	QRUPT() {
	    return this.getToken(agcParser.QRUPT, 0);
	};

	BBRUPT() {
	    return this.getToken(agcParser.BBRUPT, 0);
	};

	BRUPT() {
	    return this.getToken(agcParser.BRUPT, 0);
	};

	CYR() {
	    return this.getToken(agcParser.CYR, 0);
	};

	SR() {
	    return this.getToken(agcParser.SR, 0);
	};

	CYL() {
	    return this.getToken(agcParser.CYL, 0);
	};

	EDOP() {
	    return this.getToken(agcParser.EDOP, 0);
	};

	TIME2() {
	    return this.getToken(agcParser.TIME2, 0);
	};

	TIME1() {
	    return this.getToken(agcParser.TIME1, 0);
	};

	TIME3() {
	    return this.getToken(agcParser.TIME3, 0);
	};

	TIME4() {
	    return this.getToken(agcParser.TIME4, 0);
	};

	TIME5() {
	    return this.getToken(agcParser.TIME5, 0);
	};

	TIME6() {
	    return this.getToken(agcParser.TIME6, 0);
	};

	CDUX() {
	    return this.getToken(agcParser.CDUX, 0);
	};

	CDUY() {
	    return this.getToken(agcParser.CDUY, 0);
	};

	CDUZ() {
	    return this.getToken(agcParser.CDUZ, 0);
	};

	OPTY() {
	    return this.getToken(agcParser.OPTY, 0);
	};

	OPTX() {
	    return this.getToken(agcParser.OPTX, 0);
	};

	PIPAX() {
	    return this.getToken(agcParser.PIPAX, 0);
	};

	PIPAY() {
	    return this.getToken(agcParser.PIPAY, 0);
	};

	PIPAZ() {
	    return this.getToken(agcParser.PIPAZ, 0);
	};

	QMRHCCTR() {
	    return this.getToken(agcParser.QMRHCCTR, 0);
	};

	RHCP() {
	    return this.getToken(agcParser.RHCP, 0);
	};

	PMRHCCTR() {
	    return this.getToken(agcParser.PMRHCCTR, 0);
	};

	RHCY() {
	    return this.getToken(agcParser.RHCY, 0);
	};

	RMRHCCTR() {
	    return this.getToken(agcParser.RMRHCCTR, 0);
	};

	RHCR() {
	    return this.getToken(agcParser.RHCR, 0);
	};

	INLINK() {
	    return this.getToken(agcParser.INLINK, 0);
	};

	RNRAD() {
	    return this.getToken(agcParser.RNRAD, 0);
	};

	GYROCTR() {
	    return this.getToken(agcParser.GYROCTR, 0);
	};

	GYROCMD() {
	    return this.getToken(agcParser.GYROCMD, 0);
	};

	CDUXCMD() {
	    return this.getToken(agcParser.CDUXCMD, 0);
	};

	CDUYCMD() {
	    return this.getToken(agcParser.CDUYCMD, 0);
	};

	CDUZCMD() {
	    return this.getToken(agcParser.CDUZCMD, 0);
	};

	OPTYCMD() {
	    return this.getToken(agcParser.OPTYCMD, 0);
	};

	OPTXCMD() {
	    return this.getToken(agcParser.OPTXCMD, 0);
	};

	THRUST() {
	    return this.getToken(agcParser.THRUST, 0);
	};

	LEMONM() {
	    return this.getToken(agcParser.LEMONM, 0);
	};

	OUTLINK() {
	    return this.getToken(agcParser.OUTLINK, 0);
	};

	ALTM() {
	    return this.getToken(agcParser.ALTM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterRegister_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitRegister_(this);
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
        this.ruleIndex = agcParser.RULE_opcode;
    }

	standard_opcode() {
	    return this.getTypedRuleContext(Standard_opcodeContext,0);
	};

	pseudo_opcode() {
	    return this.getTypedRuleContext(Pseudo_opcodeContext,0);
	};

	axt_opcode() {
	    return this.getTypedRuleContext(Axt_opcodeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterOpcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitOpcode(this);
		}
	}


}



class Axt_opcodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_axt_opcode;
    }

	AXTC1() {
	    return this.getToken(agcParser.AXTC1, 0);
	};

	AXTC2() {
	    return this.getToken(agcParser.AXTC2, 0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterAxt_opcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitAxt_opcode(this);
		}
	}


}



class Pseudo_opcodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_pseudo_opcode;
    }

	K1DNADR() {
	    return this.getToken(agcParser.K1DNADR, 0);
	};

	K2DNADR() {
	    return this.getToken(agcParser.K2DNADR, 0);
	};

	K3DNADR() {
	    return this.getToken(agcParser.K3DNADR, 0);
	};

	K4DNADR() {
	    return this.getToken(agcParser.K4DNADR, 0);
	};

	K5DNADR() {
	    return this.getToken(agcParser.K5DNADR, 0);
	};

	K6DNADR() {
	    return this.getToken(agcParser.K6DNADR, 0);
	};

	DNCHAN() {
	    return this.getToken(agcParser.DNCHAN, 0);
	};

	DNPTR() {
	    return this.getToken(agcParser.DNPTR, 0);
	};

	M1DNADR() {
	    return this.getToken(agcParser.M1DNADR, 0);
	};

	M2DNADR() {
	    return this.getToken(agcParser.M2DNADR, 0);
	};

	M3DNADR() {
	    return this.getToken(agcParser.M3DNADR, 0);
	};

	M4DNADR() {
	    return this.getToken(agcParser.M4DNADR, 0);
	};

	M5DNADR() {
	    return this.getToken(agcParser.M5DNADR, 0);
	};

	M6DNADR() {
	    return this.getToken(agcParser.M6DNADR, 0);
	};

	MDNCHAN() {
	    return this.getToken(agcParser.MDNCHAN, 0);
	};

	MDNPTR() {
	    return this.getToken(agcParser.MDNPTR, 0);
	};

	K2DEC() {
	    return this.getToken(agcParser.K2DEC, 0);
	};

	K2DECS() {
	    return this.getToken(agcParser.K2DECS, 0);
	};

	K2FCADR() {
	    return this.getToken(agcParser.K2FCADR, 0);
	};

	BANK() {
	    return this.getToken(agcParser.BANK, 0);
	};

	BLOCK() {
	    return this.getToken(agcParser.BLOCK, 0);
	};

	BNKSUM() {
	    return this.getToken(agcParser.BNKSUM, 0);
	};

	COUNT() {
	    return this.getToken(agcParser.COUNT, 0);
	};

	COUNTS() {
	    return this.getToken(agcParser.COUNTS, 0);
	};

	DEC() {
	    return this.getToken(agcParser.DEC, 0);
	};

	OCT() {
	    return this.getToken(agcParser.OCT, 0);
	};

	SETLOC() {
	    return this.getToken(agcParser.SETLOC, 0);
	};

	SUBRO() {
	    return this.getToken(agcParser.SUBRO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterPseudo_opcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitPseudo_opcode(this);
		}
	}


}



class Standard_opcodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = agcParser.RULE_standard_opcode;
    }

	TC() {
	    return this.getToken(agcParser.TC, 0);
	};

	TCR() {
	    return this.getToken(agcParser.TCR, 0);
	};

	CCS() {
	    return this.getToken(agcParser.CCS, 0);
	};

	TCF() {
	    return this.getToken(agcParser.TCF, 0);
	};

	DAS() {
	    return this.getToken(agcParser.DAS, 0);
	};

	LXCH() {
	    return this.getToken(agcParser.LXCH, 0);
	};

	INCR() {
	    return this.getToken(agcParser.INCR, 0);
	};

	AD() {
	    return this.getToken(agcParser.AD, 0);
	};

	ADS() {
	    return this.getToken(agcParser.ADS, 0);
	};

	CA() {
	    return this.getToken(agcParser.CA, 0);
	};

	CS() {
	    return this.getToken(agcParser.CS, 0);
	};

	INDEX() {
	    return this.getToken(agcParser.INDEX, 0);
	};

	DXCH() {
	    return this.getToken(agcParser.DXCH, 0);
	};

	TS() {
	    return this.getToken(agcParser.TS, 0);
	};

	XCH() {
	    return this.getToken(agcParser.XCH, 0);
	};

	MASK() {
	    return this.getToken(agcParser.MASK, 0);
	};

	MSK() {
	    return this.getToken(agcParser.MSK, 0);
	};

	READ() {
	    return this.getToken(agcParser.READ, 0);
	};

	WRITE() {
	    return this.getToken(agcParser.WRITE, 0);
	};

	RAND() {
	    return this.getToken(agcParser.RAND, 0);
	};

	WAND() {
	    return this.getToken(agcParser.WAND, 0);
	};

	ROR() {
	    return this.getToken(agcParser.ROR, 0);
	};

	WOR() {
	    return this.getToken(agcParser.WOR, 0);
	};

	RXOR() {
	    return this.getToken(agcParser.RXOR, 0);
	};

	EDRUPT() {
	    return this.getToken(agcParser.EDRUPT, 0);
	};

	BZF() {
	    return this.getToken(agcParser.BZF, 0);
	};

	MSU() {
	    return this.getToken(agcParser.MSU, 0);
	};

	QXCH() {
	    return this.getToken(agcParser.QXCH, 0);
	};

	AUG() {
	    return this.getToken(agcParser.AUG, 0);
	};

	DIM() {
	    return this.getToken(agcParser.DIM, 0);
	};

	DCA() {
	    return this.getToken(agcParser.DCA, 0);
	};

	DCS() {
	    return this.getToken(agcParser.DCS, 0);
	};

	SU() {
	    return this.getToken(agcParser.SU, 0);
	};

	BZMF() {
	    return this.getToken(agcParser.BZMF, 0);
	};

	MP() {
	    return this.getToken(agcParser.MP, 0);
	};

	XXALQ() {
	    return this.getToken(agcParser.XXALQ, 0);
	};

	XLQ() {
	    return this.getToken(agcParser.XLQ, 0);
	};

	RETURN() {
	    return this.getToken(agcParser.RETURN, 0);
	};

	RELINT() {
	    return this.getToken(agcParser.RELINT, 0);
	};

	INHINT() {
	    return this.getToken(agcParser.INHINT, 0);
	};

	EXTEND() {
	    return this.getToken(agcParser.EXTEND, 0);
	};

	NOOP() {
	    return this.getToken(agcParser.NOOP, 0);
	};

	DDOUBL() {
	    return this.getToken(agcParser.DDOUBL, 0);
	};

	DTCF() {
	    return this.getToken(agcParser.DTCF, 0);
	};

	COM() {
	    return this.getToken(agcParser.COM, 0);
	};

	ZL() {
	    return this.getToken(agcParser.ZL, 0);
	};

	RESUME() {
	    return this.getToken(agcParser.RESUME, 0);
	};

	DTCB() {
	    return this.getToken(agcParser.DTCB, 0);
	};

	OVSK() {
	    return this.getToken(agcParser.OVSK, 0);
	};

	TCAA() {
	    return this.getToken(agcParser.TCAA, 0);
	};

	DOUBLE() {
	    return this.getToken(agcParser.DOUBLE, 0);
	};

	ZQ() {
	    return this.getToken(agcParser.ZQ, 0);
	};

	DCOM() {
	    return this.getToken(agcParser.DCOM, 0);
	};

	SQUARE() {
	    return this.getToken(agcParser.SQUARE, 0);
	};

	PINC() {
	    return this.getToken(agcParser.PINC, 0);
	};

	PCDU() {
	    return this.getToken(agcParser.PCDU, 0);
	};

	MINC() {
	    return this.getToken(agcParser.MINC, 0);
	};

	MCDU() {
	    return this.getToken(agcParser.MCDU, 0);
	};

	DINC() {
	    return this.getToken(agcParser.DINC, 0);
	};

	SHINC() {
	    return this.getToken(agcParser.SHINC, 0);
	};

	SHANC() {
	    return this.getToken(agcParser.SHANC, 0);
	};

	INOTRD() {
	    return this.getToken(agcParser.INOTRD, 0);
	};

	INOTLD() {
	    return this.getToken(agcParser.INOTLD, 0);
	};

	FETCH() {
	    return this.getToken(agcParser.FETCH, 0);
	};

	STORE() {
	    return this.getToken(agcParser.STORE, 0);
	};

	GOJ() {
	    return this.getToken(agcParser.GOJ, 0);
	};

	TCSAJ() {
	    return this.getToken(agcParser.TCSAJ, 0);
	};

	CAF() {
	    return this.getToken(agcParser.CAF, 0);
	};

	CAE() {
	    return this.getToken(agcParser.CAE, 0);
	};

	CADR() {
	    return this.getToken(agcParser.CADR, 0);
	};

	DMOVE() {
	    return this.getToken(agcParser.DMOVE, 0);
	};

	VMOVE() {
	    return this.getToken(agcParser.VMOVE, 0);
	};

	SMOVE() {
	    return this.getToken(agcParser.SMOVE, 0);
	};

	DSU() {
	    return this.getToken(agcParser.DSU, 0);
	};

	RTB() {
	    return this.getToken(agcParser.RTB, 0);
	};

	ITC() {
	    return this.getToken(agcParser.ITC, 0);
	};

	NOLOD() {
	    return this.getToken(agcParser.NOLOD, 0);
	};

	EXIT() {
	    return this.getToken(agcParser.EXIT, 0);
	};

	BPL() {
	    return this.getToken(agcParser.BPL, 0);
	};

	SIN() {
	    return this.getToken(agcParser.SIN, 0);
	};

	COS() {
	    return this.getToken(agcParser.COS, 0);
	};

	CAD() {
	    return this.getToken(agcParser.CAD, 0);
	};

	TEST() {
	    return this.getToken(agcParser.TEST, 0);
	};

	VXSC() {
	    return this.getToken(agcParser.VXSC, 0);
	};

	DAD() {
	    return this.getToken(agcParser.DAD, 0);
	};

	VXV() {
	    return this.getToken(agcParser.VXV, 0);
	};

	VAD() {
	    return this.getToken(agcParser.VAD, 0);
	};

	DMP() {
	    return this.getToken(agcParser.DMP, 0);
	};

	BOV() {
	    return this.getToken(agcParser.BOV, 0);
	};

	UNIT() {
	    return this.getToken(agcParser.UNIT, 0);
	};

	OCTAL() {
	    return this.getToken(agcParser.OCTAL, 0);
	};

	ADRES() {
	    return this.getToken(agcParser.ADRES, 0);
	};

	ABVAL() {
	    return this.getToken(agcParser.ABVAL, 0);
	};

	COMP() {
	    return this.getToken(agcParser.COMP, 0);
	};

	DV() {
	    return this.getToken(agcParser.DV, 0);
	};

	NDX() {
	    return this.getToken(agcParser.NDX, 0);
	};

	POUT() {
	    return this.getToken(agcParser.POUT, 0);
	};

	MOUT() {
	    return this.getToken(agcParser.MOUT, 0);
	};

	ZOUT() {
	    return this.getToken(agcParser.ZOUT, 0);
	};

	LODON() {
	    return this.getToken(agcParser.LODON, 0);
	};

	TSLT() {
	    return this.getToken(agcParser.TSLT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.enterStandard_opcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof agcListener ) {
	        listener.exitStandard_opcode(this);
		}
	}


}




agcParser.ProgContext = ProgContext; 
agcParser.LineContext = LineContext; 
agcParser.Blank_lineContext = Blank_lineContext; 
agcParser.Comment_lineContext = Comment_lineContext; 
agcParser.Instruction_lineContext = Instruction_lineContext; 
agcParser.Erase_lineContext = Erase_lineContext; 
agcParser.Assignment_lineContext = Assignment_lineContext; 
agcParser.OpcodesContext = OpcodesContext; 
agcParser.ArgumentContext = ArgumentContext; 
agcParser.WsContext = WsContext; 
agcParser.EolContext = EolContext; 
agcParser.CommentContext = CommentContext; 
agcParser.LabelContext = LabelContext; 
agcParser.VariableContext = VariableContext; 
agcParser.ExpressionContext = ExpressionContext; 
agcParser.MultiplyingExpressionContext = MultiplyingExpressionContext; 
agcParser.AtomContext = AtomContext; 
agcParser.InteContext = InteContext; 
agcParser.DecimalContext = DecimalContext; 
agcParser.Register_Context = Register_Context; 
agcParser.OpcodeContext = OpcodeContext; 
agcParser.Axt_opcodeContext = Axt_opcodeContext; 
agcParser.Pseudo_opcodeContext = Pseudo_opcodeContext; 
agcParser.Standard_opcodeContext = Standard_opcodeContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
