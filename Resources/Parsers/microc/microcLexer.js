// Generated from Resources/Parsers/microc/microc.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,15,77,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,
2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,
1,11,1,11,1,12,4,12,65,8,12,11,12,12,12,66,1,13,4,13,70,8,13,11,13,12,13,
71,1,14,1,14,1,14,1,14,0,0,15,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
10,21,11,23,12,25,13,27,14,29,15,1,0,3,1,0,97,122,1,0,48,57,3,0,9,10,13,
13,32,32,78,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,
0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,
0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,1,31,1,0,0,0,3,
34,1,0,0,0,5,39,1,0,0,0,7,45,1,0,0,0,9,47,1,0,0,0,11,49,1,0,0,0,13,51,1,
0,0,0,15,53,1,0,0,0,17,55,1,0,0,0,19,57,1,0,0,0,21,59,1,0,0,0,23,61,1,0,
0,0,25,64,1,0,0,0,27,69,1,0,0,0,29,73,1,0,0,0,31,32,5,105,0,0,32,33,5,102,
0,0,33,2,1,0,0,0,34,35,5,101,0,0,35,36,5,108,0,0,36,37,5,115,0,0,37,38,5,
101,0,0,38,4,1,0,0,0,39,40,5,119,0,0,40,41,5,104,0,0,41,42,5,105,0,0,42,
43,5,108,0,0,43,44,5,101,0,0,44,6,1,0,0,0,45,46,5,123,0,0,46,8,1,0,0,0,47,
48,5,125,0,0,48,10,1,0,0,0,49,50,5,59,0,0,50,12,1,0,0,0,51,52,5,40,0,0,52,
14,1,0,0,0,53,54,5,41,0,0,54,16,1,0,0,0,55,56,5,61,0,0,56,18,1,0,0,0,57,
58,5,60,0,0,58,20,1,0,0,0,59,60,5,43,0,0,60,22,1,0,0,0,61,62,5,45,0,0,62,
24,1,0,0,0,63,65,7,0,0,0,64,63,1,0,0,0,65,66,1,0,0,0,66,64,1,0,0,0,66,67,
1,0,0,0,67,26,1,0,0,0,68,70,7,1,0,0,69,68,1,0,0,0,70,71,1,0,0,0,71,69,1,
0,0,0,71,72,1,0,0,0,72,28,1,0,0,0,73,74,7,2,0,0,74,75,1,0,0,0,75,76,6,14,
0,0,76,30,1,0,0,0,3,0,66,71,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class microcLexer extends antlr4.Lexer {

    static grammarFileName = "microc.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'if'", "'else'", "'while'", "'{'", "'}'", 
                         "';'", "'('", "')'", "'='", "'<'", "'+'", "'-'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, "STRING", "INT", 
                          "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "T__11", "STRING", 
                      "INT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

microcLexer.EOF = antlr4.Token.EOF;
microcLexer.T__0 = 1;
microcLexer.T__1 = 2;
microcLexer.T__2 = 3;
microcLexer.T__3 = 4;
microcLexer.T__4 = 5;
microcLexer.T__5 = 6;
microcLexer.T__6 = 7;
microcLexer.T__7 = 8;
microcLexer.T__8 = 9;
microcLexer.T__9 = 10;
microcLexer.T__10 = 11;
microcLexer.T__11 = 12;
microcLexer.STRING = 13;
microcLexer.INT = 14;
microcLexer.WS = 15;


