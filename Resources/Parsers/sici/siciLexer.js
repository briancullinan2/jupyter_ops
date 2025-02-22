// Generated from ./sici/sici.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,12,54,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,
0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,
9,1,10,1,10,1,11,4,11,49,8,11,11,11,12,11,50,1,11,1,11,0,0,12,1,1,3,2,5,
3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,1,0,3,2,0,65,90,97,122,1,
0,48,57,3,0,9,10,13,13,32,32,54,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,
1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,
0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,25,1,0,0,0,3,27,1,0,0,0,5,29,1,
0,0,0,7,31,1,0,0,0,9,33,1,0,0,0,11,35,1,0,0,0,13,37,1,0,0,0,15,39,1,0,0,
0,17,41,1,0,0,0,19,43,1,0,0,0,21,45,1,0,0,0,23,48,1,0,0,0,25,26,5,45,0,0,
26,2,1,0,0,0,27,28,5,40,0,0,28,4,1,0,0,0,29,30,5,47,0,0,30,6,1,0,0,0,31,
32,5,41,0,0,32,8,1,0,0,0,33,34,5,58,0,0,34,10,1,0,0,0,35,36,5,60,0,0,36,
12,1,0,0,0,37,38,5,62,0,0,38,14,1,0,0,0,39,40,5,46,0,0,40,16,1,0,0,0,41,
42,5,59,0,0,42,18,1,0,0,0,43,44,7,0,0,0,44,20,1,0,0,0,45,46,7,1,0,0,46,22,
1,0,0,0,47,49,7,2,0,0,48,47,1,0,0,0,49,50,1,0,0,0,50,48,1,0,0,0,50,51,1,
0,0,0,51,52,1,0,0,0,52,53,6,11,0,0,53,24,1,0,0,0,2,0,50,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class siciLexer extends antlr4.Lexer {

    static grammarFileName = "sici.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'-'", "'('", "'/'", "')'", "':'", "'<'", 
                         "'>'", "'.'", "';'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, "LETTER", "DIGIT", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "LETTER", "DIGIT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

siciLexer.EOF = antlr4.Token.EOF;
siciLexer.T__0 = 1;
siciLexer.T__1 = 2;
siciLexer.T__2 = 3;
siciLexer.T__3 = 4;
siciLexer.T__4 = 5;
siciLexer.T__5 = 6;
siciLexer.T__6 = 7;
siciLexer.T__7 = 8;
siciLexer.T__8 = 9;
siciLexer.LETTER = 10;
siciLexer.DIGIT = 11;
siciLexer.WS = 12;



