// Generated from ./tiny/tiny.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,11,67,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,0,
1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,
1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,4,8,55,8,8,11,8,12,8,56,1,9,4,9,60,8,
9,11,9,12,9,61,1,10,1,10,1,10,1,10,0,0,11,1,1,3,2,5,3,7,4,9,5,11,6,13,7,
15,8,17,9,19,10,21,11,1,0,2,2,0,65,90,97,122,3,0,10,10,13,13,32,32,68,0,
1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,
13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,1,23,1,0,
0,0,3,29,1,0,0,0,5,33,1,0,0,0,7,36,1,0,0,0,9,41,1,0,0,0,11,47,1,0,0,0,13,
49,1,0,0,0,15,51,1,0,0,0,17,54,1,0,0,0,19,59,1,0,0,0,21,63,1,0,0,0,23,24,
5,66,0,0,24,25,5,69,0,0,25,26,5,71,0,0,26,27,5,73,0,0,27,28,5,78,0,0,28,
2,1,0,0,0,29,30,5,69,0,0,30,31,5,78,0,0,31,32,5,68,0,0,32,4,1,0,0,0,33,34,
5,58,0,0,34,35,5,61,0,0,35,6,1,0,0,0,36,37,5,82,0,0,37,38,5,69,0,0,38,39,
5,65,0,0,39,40,5,68,0,0,40,8,1,0,0,0,41,42,5,87,0,0,42,43,5,82,0,0,43,44,
5,73,0,0,44,45,5,84,0,0,45,46,5,69,0,0,46,10,1,0,0,0,47,48,5,44,0,0,48,12,
1,0,0,0,49,50,5,45,0,0,50,14,1,0,0,0,51,52,5,43,0,0,52,16,1,0,0,0,53,55,
7,0,0,0,54,53,1,0,0,0,55,56,1,0,0,0,56,54,1,0,0,0,56,57,1,0,0,0,57,18,1,
0,0,0,58,60,2,48,57,0,59,58,1,0,0,0,60,61,1,0,0,0,61,59,1,0,0,0,61,62,1,
0,0,0,62,20,1,0,0,0,63,64,7,1,0,0,64,65,1,0,0,0,65,66,6,10,0,0,66,22,1,0,
0,0,3,0,56,61,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class tinyLexer extends antlr4.Lexer {

    static grammarFileName = "tiny.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'BEGIN'", "'END'", "':='", "'READ'", "'WRITE'", 
                         "','", "'-'", "'+'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, "ID", "NUMBER", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "ID", "NUMBER", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

tinyLexer.EOF = antlr4.Token.EOF;
tinyLexer.T__0 = 1;
tinyLexer.T__1 = 2;
tinyLexer.T__2 = 3;
tinyLexer.T__3 = 4;
tinyLexer.T__4 = 5;
tinyLexer.T__5 = 6;
tinyLexer.T__6 = 7;
tinyLexer.T__7 = 8;
tinyLexer.ID = 9;
tinyLexer.NUMBER = 10;
tinyLexer.WS = 11;



