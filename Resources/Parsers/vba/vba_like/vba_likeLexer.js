// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/vba/vba_like/vba_like.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,8,33,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,
1,5,1,6,1,6,1,7,1,7,0,0,8,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,1,0,1,6,0,35,
35,42,42,45,45,63,63,91,91,93,93,32,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,
0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,1,17,1,0,
0,0,3,19,1,0,0,0,5,21,1,0,0,0,7,23,1,0,0,0,9,25,1,0,0,0,11,27,1,0,0,0,13,
29,1,0,0,0,15,31,1,0,0,0,17,18,5,45,0,0,18,2,1,0,0,0,19,20,5,93,0,0,20,4,
1,0,0,0,21,22,5,91,0,0,22,6,1,0,0,0,23,24,5,33,0,0,24,8,1,0,0,0,25,26,8,
0,0,0,26,10,1,0,0,0,27,28,5,63,0,0,28,12,1,0,0,0,29,30,5,42,0,0,30,14,1,
0,0,0,31,32,5,35,0,0,32,16,1,0,0,0,1,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class vba_likeLexer extends antlr4.Lexer {

    static grammarFileName = "vba_like.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'-'", "']'", "'['", "'!'", null, "'?'", 
                         "'*'", "'#'" ];
	static symbolicNames = [ null, null, null, null, null, "CHAR", "WILD_CHAR", 
                          "WILD_SEQ", "WILD_DIGIT" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "CHAR", "WILD_CHAR", 
                      "WILD_SEQ", "WILD_DIGIT" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

vba_likeLexer.EOF = antlr4.Token.EOF;
vba_likeLexer.T__0 = 1;
vba_likeLexer.T__1 = 2;
vba_likeLexer.T__2 = 3;
vba_likeLexer.T__3 = 4;
vba_likeLexer.CHAR = 5;
vba_likeLexer.WILD_CHAR = 6;
vba_likeLexer.WILD_SEQ = 7;
vba_likeLexer.WILD_DIGIT = 8;




// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
