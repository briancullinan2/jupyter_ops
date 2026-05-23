// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/lisp/lisp.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,5,44,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,3,3,26,8,3,1,
4,1,4,3,4,30,8,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,4,7,39,8,7,11,7,12,7,40,1,7,
1,7,0,0,8,1,1,3,2,5,3,7,4,9,0,11,0,13,0,15,5,1,0,3,1,0,97,122,1,0,49,57,
3,0,9,10,13,13,32,32,43,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,
0,15,1,0,0,0,1,17,1,0,0,0,3,19,1,0,0,0,5,21,1,0,0,0,7,23,1,0,0,0,9,29,1,
0,0,0,11,33,1,0,0,0,13,35,1,0,0,0,15,38,1,0,0,0,17,18,5,40,0,0,18,2,1,0,
0,0,19,20,5,46,0,0,20,4,1,0,0,0,21,22,5,41,0,0,22,6,1,0,0,0,23,25,3,11,5,
0,24,26,3,9,4,0,25,24,1,0,0,0,25,26,1,0,0,0,26,8,1,0,0,0,27,30,3,11,5,0,
28,30,3,13,6,0,29,27,1,0,0,0,29,28,1,0,0,0,30,31,1,0,0,0,31,32,3,9,4,0,32,
10,1,0,0,0,33,34,7,0,0,0,34,12,1,0,0,0,35,36,7,1,0,0,36,14,1,0,0,0,37,39,
7,2,0,0,38,37,1,0,0,0,39,40,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,42,1,
0,0,0,42,43,6,7,0,0,43,16,1,0,0,0,4,0,25,29,40,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class lispLexer extends antlr4.Lexer {

    static grammarFileName = "lisp.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'('", "'.'", "')'" ];
	static symbolicNames = [ null, null, null, null, "ATOMIC_SYMBOL", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "ATOMIC_SYMBOL", "ATOM_PART", 
                      "LETTER", "NUMBER", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

lispLexer.EOF = antlr4.Token.EOF;
lispLexer.T__0 = 1;
lispLexer.T__1 = 2;
lispLexer.T__2 = 3;
lispLexer.ATOMIC_SYMBOL = 4;
lispLexer.WS = 5;




// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
