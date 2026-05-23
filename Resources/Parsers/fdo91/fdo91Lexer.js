// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/fdo91/fdo91.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,10,75,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,0,1,0,1,0,1,
1,1,1,1,2,1,2,1,3,1,3,1,4,4,4,35,8,4,11,4,12,4,36,1,5,1,5,1,5,1,5,1,5,3,
5,44,8,5,1,6,4,6,47,8,6,11,6,12,6,48,1,7,1,7,5,7,53,8,7,10,7,12,7,56,9,7,
1,7,1,7,1,8,1,8,5,8,62,8,8,10,8,12,8,65,9,8,1,8,1,8,1,9,4,9,70,8,9,11,9,
12,9,71,1,9,1,9,0,0,10,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,1,0,
5,3,0,65,90,95,95,97,122,1,0,48,57,3,0,10,10,13,13,34,34,2,0,10,10,13,13,
3,0,9,10,13,13,32,32,80,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,
0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,
0,0,1,21,1,0,0,0,3,27,1,0,0,0,5,29,1,0,0,0,7,31,1,0,0,0,9,34,1,0,0,0,11,
38,1,0,0,0,13,46,1,0,0,0,15,50,1,0,0,0,17,59,1,0,0,0,19,69,1,0,0,0,21,22,
5,97,0,0,22,23,5,116,0,0,23,24,5,111,0,0,24,25,5,109,0,0,25,26,5,36,0,0,
26,2,1,0,0,0,27,28,5,60,0,0,28,4,1,0,0,0,29,30,5,44,0,0,30,6,1,0,0,0,31,
32,5,62,0,0,32,8,1,0,0,0,33,35,7,0,0,0,34,33,1,0,0,0,35,36,1,0,0,0,36,34,
1,0,0,0,36,37,1,0,0,0,37,10,1,0,0,0,38,39,3,13,6,0,39,40,5,45,0,0,40,43,
3,13,6,0,41,42,5,45,0,0,42,44,3,13,6,0,43,41,1,0,0,0,43,44,1,0,0,0,44,12,
1,0,0,0,45,47,7,1,0,0,46,45,1,0,0,0,47,48,1,0,0,0,48,46,1,0,0,0,48,49,1,
0,0,0,49,14,1,0,0,0,50,54,5,34,0,0,51,53,8,2,0,0,52,51,1,0,0,0,53,56,1,0,
0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,57,1,0,0,0,56,54,1,0,0,0,57,58,5,34,0,
0,58,16,1,0,0,0,59,63,5,35,0,0,60,62,8,3,0,0,61,60,1,0,0,0,62,65,1,0,0,0,
63,61,1,0,0,0,63,64,1,0,0,0,64,66,1,0,0,0,65,63,1,0,0,0,66,67,6,8,0,0,67,
18,1,0,0,0,68,70,7,4,0,0,69,68,1,0,0,0,70,71,1,0,0,0,71,69,1,0,0,0,71,72,
1,0,0,0,72,73,1,0,0,0,73,74,6,9,0,0,74,20,1,0,0,0,7,0,36,43,48,54,63,71,
1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class fdo91Lexer extends antlr4.Lexer {

    static grammarFileName = "fdo91.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'atom$'", "'<'", "','", "'>'" ];
	static symbolicNames = [ null, null, null, null, null, "ID", "GID", "NUMBER", 
                          "STRING", "COMMENT", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "ID", "GID", "NUMBER", 
                      "STRING", "COMMENT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

fdo91Lexer.EOF = antlr4.Token.EOF;
fdo91Lexer.T__0 = 1;
fdo91Lexer.T__1 = 2;
fdo91Lexer.T__2 = 3;
fdo91Lexer.T__3 = 4;
fdo91Lexer.ID = 5;
fdo91Lexer.GID = 6;
fdo91Lexer.NUMBER = 7;
fdo91Lexer.STRING = 8;
fdo91Lexer.COMMENT = 9;
fdo91Lexer.WS = 10;




// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
