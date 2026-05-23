// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/recfile/recfile.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,7,48,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,5,3,24,8,3,10,3,12,3,
27,9,3,1,4,4,4,30,8,4,11,4,12,4,31,1,5,1,5,4,5,36,8,5,11,5,12,5,37,1,5,1,
5,1,6,4,6,43,8,6,11,6,12,6,44,1,6,1,6,0,0,7,1,1,3,2,5,3,7,4,9,5,11,6,13,
7,1,0,4,5,0,39,39,46,46,48,57,65,90,97,122,7,0,32,32,39,39,46,46,48,57,65,
90,95,95,97,122,2,0,10,10,13,13,2,0,9,9,32,32,51,0,1,1,0,0,0,0,3,1,0,0,0,
0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,1,15,1,0,0,
0,3,17,1,0,0,0,5,19,1,0,0,0,7,21,1,0,0,0,9,29,1,0,0,0,11,33,1,0,0,0,13,42,
1,0,0,0,15,16,5,37,0,0,16,2,1,0,0,0,17,18,5,58,0,0,18,4,1,0,0,0,19,20,5,
43,0,0,20,6,1,0,0,0,21,25,7,0,0,0,22,24,7,1,0,0,23,22,1,0,0,0,24,27,1,0,
0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,8,1,0,0,0,27,25,1,0,0,0,28,30,7,2,0,0,
29,28,1,0,0,0,30,31,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,10,1,0,0,0,33,
35,5,35,0,0,34,36,8,2,0,0,35,34,1,0,0,0,36,37,1,0,0,0,37,35,1,0,0,0,37,38,
1,0,0,0,38,39,1,0,0,0,39,40,6,5,0,0,40,12,1,0,0,0,41,43,7,3,0,0,42,41,1,
0,0,0,43,44,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,46,1,0,0,0,46,47,6,6,
0,0,47,14,1,0,0,0,5,0,25,31,37,44,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class recfileLexer extends antlr4.Lexer {

    static grammarFileName = "recfile.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'%'", "':'", "'+'" ];
	static symbolicNames = [ null, null, null, null, "STRING", "EOL", "COMMENT", 
                          "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "STRING", "EOL", "COMMENT", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

recfileLexer.EOF = antlr4.Token.EOF;
recfileLexer.T__0 = 1;
recfileLexer.T__1 = 2;
recfileLexer.T__2 = 3;
recfileLexer.STRING = 4;
recfileLexer.EOL = 5;
recfileLexer.COMMENT = 6;
recfileLexer.WS = 7;




// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
