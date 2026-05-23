// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/esolang/bio/bio.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,12,63,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,
0,1,0,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,7,1,
7,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,4,10,54,8,10,11,10,12,10,55,1,10,1,
10,1,11,1,11,1,11,1,11,0,0,12,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
10,21,11,23,12,1,0,2,2,0,10,10,13,13,3,0,10,10,13,13,32,32,63,0,1,1,0,0,
0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,
0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,25,
1,0,0,0,3,28,1,0,0,0,5,30,1,0,0,0,7,33,1,0,0,0,9,36,1,0,0,0,11,38,1,0,0,
0,13,40,1,0,0,0,15,43,1,0,0,0,17,45,1,0,0,0,19,47,1,0,0,0,21,49,1,0,0,0,
23,59,1,0,0,0,25,26,5,48,0,0,26,27,5,111,0,0,27,2,1,0,0,0,28,29,5,59,0,0,
29,4,1,0,0,0,30,31,5,49,0,0,31,32,5,111,0,0,32,6,1,0,0,0,33,34,5,48,0,0,
34,35,5,105,0,0,35,8,1,0,0,0,36,37,5,123,0,0,37,10,1,0,0,0,38,39,5,125,0,
0,39,12,1,0,0,0,40,41,5,49,0,0,41,42,5,105,0,0,42,14,1,0,0,0,43,44,5,120,
0,0,44,16,1,0,0,0,45,46,5,121,0,0,46,18,1,0,0,0,47,48,5,122,0,0,48,20,1,
0,0,0,49,50,5,47,0,0,50,51,5,47,0,0,51,53,1,0,0,0,52,54,8,0,0,0,53,52,1,
0,0,0,54,55,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,58,6,10,
0,0,58,22,1,0,0,0,59,60,7,1,0,0,60,61,1,0,0,0,61,62,6,11,0,0,62,24,1,0,0,
0,2,0,55,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class bioLexer extends antlr4.Lexer {

    static grammarFileName = "bio.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'0o'", "';'", "'1o'", "'0i'", "'{'", "'}'", 
                         "'1i'", "'x'", "'y'", "'z'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, "COMMENT", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "COMMENT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

bioLexer.EOF = antlr4.Token.EOF;
bioLexer.T__0 = 1;
bioLexer.T__1 = 2;
bioLexer.T__2 = 3;
bioLexer.T__3 = 4;
bioLexer.T__4 = 5;
bioLexer.T__5 = 6;
bioLexer.T__6 = 7;
bioLexer.T__7 = 8;
bioLexer.T__8 = 9;
bioLexer.T__9 = 10;
bioLexer.COMMENT = 11;
bioLexer.WS = 12;




// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
