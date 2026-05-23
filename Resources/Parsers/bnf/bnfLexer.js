// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/bnf/bnfLexer.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,15,79,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,
5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,
1,11,1,11,4,11,64,8,11,11,11,12,11,65,1,12,4,12,69,8,12,11,12,12,12,70,1,
13,4,13,74,8,13,11,13,12,13,75,1,14,1,14,0,0,15,1,1,3,2,5,3,7,4,9,5,11,6,
13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,1,0,4,2,0,65,90,97,122,
5,0,45,45,48,57,65,90,95,95,97,122,2,0,9,9,32,32,2,0,10,10,13,13,81,0,1,
1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,
1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,
0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,1,31,1,0,0,0,3,33,1,0,0,0,5,35,1,
0,0,0,7,37,1,0,0,0,9,39,1,0,0,0,11,43,1,0,0,0,13,46,1,0,0,0,15,50,1,0,0,
0,17,52,1,0,0,0,19,54,1,0,0,0,21,59,1,0,0,0,23,61,1,0,0,0,25,68,1,0,0,0,
27,73,1,0,0,0,29,77,1,0,0,0,31,32,5,60,0,0,32,2,1,0,0,0,33,34,5,62,0,0,34,
4,1,0,0,0,35,36,5,34,0,0,36,6,1,0,0,0,37,38,5,39,0,0,38,8,1,0,0,0,39,40,
5,58,0,0,40,41,5,58,0,0,41,42,5,61,0,0,42,10,1,0,0,0,43,44,5,58,0,0,44,45,
5,8801,0,0,45,12,1,0,0,0,46,47,5,45,0,0,47,48,5,45,0,0,48,49,5,62,0,0,49,
14,1,0,0,0,50,51,5,8594,0,0,51,16,1,0,0,0,52,53,5,124,0,0,53,18,1,0,0,0,
54,55,5,111,0,0,55,56,5,8254,0,0,56,57,5,114,0,0,57,58,5,8254,0,0,58,20,
1,0,0,0,59,60,5,8739,0,0,60,22,1,0,0,0,61,63,7,0,0,0,62,64,7,1,0,0,63,62,
1,0,0,0,64,65,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,24,1,0,0,0,67,69,7,
2,0,0,68,67,1,0,0,0,69,70,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,26,1,0,
0,0,72,74,7,3,0,0,73,72,1,0,0,0,74,75,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,
0,76,28,1,0,0,0,77,78,9,0,0,0,78,30,1,0,0,0,4,0,65,70,75,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class bnfLexer extends antlr4.Lexer {

    static grammarFileName = "bnfLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'<'", "'>'", "'\"'", "'''", "'::='", null, 
                         "'-->'", "'\\u2192'", "'|'", null, "'\\u2223'" ];
	static symbolicNames = [ null, "X1", "X2", "X3", "X4", "ASSIGN1", "ASSIGN2", 
                          "ASSIGN3", "ASSIGN4", "OR1", "OR2", "OR3", "ID", 
                          "WS", "NL", "TEXT" ];
	static ruleNames = [ "X1", "X2", "X3", "X4", "ASSIGN1", "ASSIGN2", "ASSIGN3", 
                      "ASSIGN4", "OR1", "OR2", "OR3", "ID", "WS", "NL", 
                      "TEXT" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

bnfLexer.EOF = antlr4.Token.EOF;
bnfLexer.X1 = 1;
bnfLexer.X2 = 2;
bnfLexer.X3 = 3;
bnfLexer.X4 = 4;
bnfLexer.ASSIGN1 = 5;
bnfLexer.ASSIGN2 = 6;
bnfLexer.ASSIGN3 = 7;
bnfLexer.ASSIGN4 = 8;
bnfLexer.OR1 = 9;
bnfLexer.OR2 = 10;
bnfLexer.OR3 = 11;
bnfLexer.ID = 12;
bnfLexer.WS = 13;
bnfLexer.NL = 14;
bnfLexer.TEXT = 15;




// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
