// Generated from ./pmmn/PMMN.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,12,66,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,
0,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,
7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,11,4,11,61,
8,11,11,11,12,11,62,1,11,1,11,0,0,12,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,
17,9,19,10,21,11,23,12,1,0,1,3,0,9,10,13,13,32,32,66,0,1,1,0,0,0,0,3,1,0,
0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,
0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,25,1,0,0,0,3,
27,1,0,0,0,5,29,1,0,0,0,7,33,1,0,0,0,9,35,1,0,0,0,11,37,1,0,0,0,13,39,1,
0,0,0,15,42,1,0,0,0,17,47,1,0,0,0,19,53,1,0,0,0,21,57,1,0,0,0,23,60,1,0,
0,0,25,26,5,123,0,0,26,2,1,0,0,0,27,28,5,125,0,0,28,4,1,0,0,0,29,30,5,105,
0,0,30,31,5,110,0,0,31,32,5,99,0,0,32,6,1,0,0,0,33,34,5,40,0,0,34,8,1,0,
0,0,35,36,5,41,0,0,36,10,1,0,0,0,37,38,5,59,0,0,38,12,1,0,0,0,39,40,5,105,
0,0,40,41,5,102,0,0,41,14,1,0,0,0,42,43,5,101,0,0,43,44,5,108,0,0,44,45,
5,115,0,0,45,46,5,101,0,0,46,16,1,0,0,0,47,48,5,119,0,0,48,49,5,104,0,0,
49,50,5,105,0,0,50,51,5,108,0,0,51,52,5,101,0,0,52,18,1,0,0,0,53,54,5,100,
0,0,54,55,5,101,0,0,55,56,5,99,0,0,56,20,1,0,0,0,57,58,2,48,57,0,58,22,1,
0,0,0,59,61,7,0,0,0,60,59,1,0,0,0,61,62,1,0,0,0,62,60,1,0,0,0,62,63,1,0,
0,0,63,64,1,0,0,0,64,65,6,11,0,0,65,24,1,0,0,0,2,0,62,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class PMMNLexer extends antlr4.Lexer {

    static grammarFileName = "PMMN.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'{'", "'}'", "'inc'", "'('", "')'", "';'", 
                         "'if'", "'else'", "'while'", "'dec'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, "DIGIT", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "DIGIT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

PMMNLexer.EOF = antlr4.Token.EOF;
PMMNLexer.T__0 = 1;
PMMNLexer.T__1 = 2;
PMMNLexer.T__2 = 3;
PMMNLexer.T__3 = 4;
PMMNLexer.T__4 = 5;
PMMNLexer.T__5 = 6;
PMMNLexer.T__6 = 7;
PMMNLexer.T__7 = 8;
PMMNLexer.T__8 = 9;
PMMNLexer.T__9 = 10;
PMMNLexer.DIGIT = 11;
PMMNLexer.WS = 12;



