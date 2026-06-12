// Generated from ./quake3/skin/Q3SkinLexer.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,7,54,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,1,0,1,0,1,1,4,1,19,8,1,11,1,12,1,20,1,2,1,2,1,3,1,3,
5,3,27,8,3,10,3,12,3,30,9,3,1,4,4,4,33,8,4,11,4,12,4,34,1,5,1,5,1,5,1,5,
5,5,41,8,5,10,5,12,5,44,9,5,1,5,1,5,1,6,4,6,49,8,6,11,6,12,6,50,1,6,1,6,
0,0,7,1,1,3,2,5,3,7,4,9,5,11,6,13,7,1,0,5,2,0,10,10,13,13,4,0,45,57,65,90,
95,95,97,122,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,2,0,9,9,
32,32,58,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
1,0,0,0,0,13,1,0,0,0,1,15,1,0,0,0,3,18,1,0,0,0,5,22,1,0,0,0,7,24,1,0,0,0,
9,32,1,0,0,0,11,36,1,0,0,0,13,48,1,0,0,0,15,16,5,44,0,0,16,2,1,0,0,0,17,
19,7,0,0,0,18,17,1,0,0,0,19,20,1,0,0,0,20,18,1,0,0,0,20,21,1,0,0,0,21,4,
1,0,0,0,22,23,7,1,0,0,23,6,1,0,0,0,24,28,7,2,0,0,25,27,7,3,0,0,26,25,1,0,
0,0,27,30,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,8,1,0,0,0,30,28,1,0,0,0,
31,33,3,5,2,0,32,31,1,0,0,0,33,34,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,
10,1,0,0,0,36,37,5,47,0,0,37,38,5,47,0,0,38,42,1,0,0,0,39,41,8,0,0,0,40,
39,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,45,1,0,0,0,44,42,
1,0,0,0,45,46,6,5,0,0,46,12,1,0,0,0,47,49,7,4,0,0,48,47,1,0,0,0,49,50,1,
0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,52,1,0,0,0,52,53,6,6,1,0,53,14,1,0,
0,0,6,0,20,28,34,42,50,2,0,1,0,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class Q3SkinLexer extends antlr4.Lexer {

    static grammarFileName = "Q3SkinLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "','" ];
	static symbolicNames = [ null, "COMMA", "NEWLINE", "PATH_CHAR", "SURFACE_ID", 
                          "ASSET_PATH", "COMMENT", "WS" ];
	static ruleNames = [ "COMMA", "NEWLINE", "PATH_CHAR", "SURFACE_ID", "ASSET_PATH", 
                      "COMMENT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

Q3SkinLexer.EOF = antlr4.Token.EOF;
Q3SkinLexer.COMMA = 1;
Q3SkinLexer.NEWLINE = 2;
Q3SkinLexer.PATH_CHAR = 3;
Q3SkinLexer.SURFACE_ID = 4;
Q3SkinLexer.ASSET_PATH = 5;
Q3SkinLexer.COMMENT = 6;
Q3SkinLexer.WS = 7;



