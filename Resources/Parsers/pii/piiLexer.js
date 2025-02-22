// Generated from ./pii/pii.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,8,44,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,
1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,4,7,39,8,7,11,7,12,7,40,1,7,1,7,
0,0,8,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,1,0,2,1,0,48,57,3,0,9,10,13,13,
32,32,44,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,1,17,1,0,0,0,3,19,1,0,0,0,5,21,1,0,0,0,
7,23,1,0,0,0,9,25,1,0,0,0,11,29,1,0,0,0,13,33,1,0,0,0,15,38,1,0,0,0,17,18,
5,83,0,0,18,2,1,0,0,0,19,20,5,66,0,0,20,4,1,0,0,0,21,22,5,88,0,0,22,6,1,
0,0,0,23,24,7,0,0,0,24,8,1,0,0,0,25,26,5,40,0,0,26,27,1,0,0,0,27,28,6,4,
0,0,28,10,1,0,0,0,29,30,5,41,0,0,30,31,1,0,0,0,31,32,6,5,0,0,32,12,1,0,0,
0,33,34,5,45,0,0,34,35,1,0,0,0,35,36,6,6,0,0,36,14,1,0,0,0,37,39,7,1,0,0,
38,37,1,0,0,0,39,40,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,42,1,0,0,0,42,
43,6,7,0,0,43,16,1,0,0,0,2,0,40,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class piiLexer extends antlr4.Lexer {

    static grammarFileName = "pii.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'S'", "'B'", "'X'", null, "'('", "')'", 
                         "'-'" ];
	static symbolicNames = [ null, null, null, null, "DIGIT", "LPAREN", "RPAREN", 
                          "DASH", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "DIGIT", "LPAREN", "RPAREN", 
                      "DASH", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

piiLexer.EOF = antlr4.Token.EOF;
piiLexer.T__0 = 1;
piiLexer.T__1 = 2;
piiLexer.T__2 = 3;
piiLexer.DIGIT = 4;
piiLexer.LPAREN = 5;
piiLexer.RPAREN = 6;
piiLexer.DASH = 7;
piiLexer.WS = 8;



