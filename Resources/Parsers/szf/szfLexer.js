// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/szf/szf.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,7,72,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,5,3,37,8,3,10,3,12,3,40,9,3,1,4,4,4,43,8,
4,11,4,12,4,44,1,4,1,4,4,4,49,8,4,11,4,12,4,50,3,4,53,8,4,1,5,1,5,1,5,1,
5,5,5,59,8,5,10,5,12,5,62,9,5,1,5,1,5,1,6,4,6,67,8,6,11,6,12,6,68,1,6,1,
6,0,0,7,1,1,3,2,5,3,7,4,9,5,11,6,13,7,1,0,5,2,0,65,90,97,122,5,0,35,35,46,
57,65,90,95,95,97,122,1,0,48,57,2,0,10,10,13,13,3,0,9,10,13,13,32,32,77,
0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,
0,13,1,0,0,0,1,15,1,0,0,0,3,17,1,0,0,0,5,25,1,0,0,0,7,34,1,0,0,0,9,42,1,
0,0,0,11,54,1,0,0,0,13,66,1,0,0,0,15,16,5,61,0,0,16,2,1,0,0,0,17,18,5,60,
0,0,18,19,5,103,0,0,19,20,5,114,0,0,20,21,5,111,0,0,21,22,5,117,0,0,22,23,
5,112,0,0,23,24,5,62,0,0,24,4,1,0,0,0,25,26,5,60,0,0,26,27,5,114,0,0,27,
28,5,101,0,0,28,29,5,103,0,0,29,30,5,105,0,0,30,31,5,111,0,0,31,32,5,110,
0,0,32,33,5,62,0,0,33,6,1,0,0,0,34,38,7,0,0,0,35,37,7,1,0,0,36,35,1,0,0,
0,37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,8,1,0,0,0,40,38,1,0,0,0,41,
43,7,2,0,0,42,41,1,0,0,0,43,44,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,52,
1,0,0,0,46,48,5,46,0,0,47,49,7,2,0,0,48,47,1,0,0,0,49,50,1,0,0,0,50,48,1,
0,0,0,50,51,1,0,0,0,51,53,1,0,0,0,52,46,1,0,0,0,52,53,1,0,0,0,53,10,1,0,
0,0,54,55,5,47,0,0,55,56,5,47,0,0,56,60,1,0,0,0,57,59,8,3,0,0,58,57,1,0,
0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,63,1,0,0,0,62,60,1,0,0,
0,63,64,6,5,0,0,64,12,1,0,0,0,65,67,7,4,0,0,66,65,1,0,0,0,67,68,1,0,0,0,
68,66,1,0,0,0,68,69,1,0,0,0,69,70,1,0,0,0,70,71,6,6,0,0,71,14,1,0,0,0,7,
0,38,44,50,52,60,68,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class szfLexer extends antlr4.Lexer {

    static grammarFileName = "szf.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'='", "'<group>'", "'<region>'" ];
	static symbolicNames = [ null, null, "HEADER_START", "REGION_START", "ID", 
                          "NUM", "COMMENT", "WS" ];
	static ruleNames = [ "T__0", "HEADER_START", "REGION_START", "ID", "NUM", 
                      "COMMENT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

szfLexer.EOF = antlr4.Token.EOF;
szfLexer.T__0 = 1;
szfLexer.HEADER_START = 2;
szfLexer.REGION_START = 3;
szfLexer.ID = 4;
szfLexer.NUM = 5;
szfLexer.COMMENT = 6;
szfLexer.WS = 7;




// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
