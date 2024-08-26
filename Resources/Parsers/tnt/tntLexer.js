// Generated from Resources/Parsers/tnt/tnt.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,18,75,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,1,1,1,1,2,
1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,
11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,17,
1,17,0,0,18,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,
13,27,14,29,15,31,16,33,17,35,18,1,0,1,3,0,9,10,13,13,32,32,74,0,1,1,0,0,
0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,
0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,
1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,
1,37,1,0,0,0,3,39,1,0,0,0,5,41,1,0,0,0,7,43,1,0,0,0,9,45,1,0,0,0,11,47,1,
0,0,0,13,49,1,0,0,0,15,51,1,0,0,0,17,53,1,0,0,0,19,55,1,0,0,0,21,57,1,0,
0,0,23,59,1,0,0,0,25,61,1,0,0,0,27,63,1,0,0,0,29,65,1,0,0,0,31,67,1,0,0,
0,33,69,1,0,0,0,35,71,1,0,0,0,37,38,5,61,0,0,38,2,1,0,0,0,39,40,5,43,0,0,
40,4,1,0,0,0,41,42,5,42,0,0,42,6,1,0,0,0,43,44,5,40,0,0,44,8,1,0,0,0,45,
46,5,41,0,0,46,10,1,0,0,0,47,48,5,126,0,0,48,12,1,0,0,0,49,50,5,58,0,0,50,
14,1,0,0,0,51,52,5,48,0,0,52,16,1,0,0,0,53,54,5,83,0,0,54,18,1,0,0,0,55,
56,5,97,0,0,56,20,1,0,0,0,57,58,5,98,0,0,58,22,1,0,0,0,59,60,5,99,0,0,60,
24,1,0,0,0,61,62,5,100,0,0,62,26,1,0,0,0,63,64,5,101,0,0,64,28,1,0,0,0,65,
66,5,39,0,0,66,30,1,0,0,0,67,68,5,65,0,0,68,32,1,0,0,0,69,70,5,69,0,0,70,
34,1,0,0,0,71,72,7,0,0,0,72,73,1,0,0,0,73,74,6,17,0,0,74,36,1,0,0,0,1,0,
1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class tntLexer extends antlr4.Lexer {

    static grammarFileName = "tnt.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'='", "'+'", "'*'", "'('", "')'", "'~'", 
                         "':'", "'0'", "'S'", "'a'", "'b'", "'c'", "'d'", 
                         "'e'", "'''", "'A'", "'E'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          "ZERO", "SUCCESSOR", "A", "B", "C", "D", "E", 
                          "PRIME", "FOREVERY", "EXISTS", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "ZERO", "SUCCESSOR", "A", "B", "C", "D", "E", "PRIME", 
                      "FOREVERY", "EXISTS", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

tntLexer.EOF = antlr4.Token.EOF;
tntLexer.T__0 = 1;
tntLexer.T__1 = 2;
tntLexer.T__2 = 3;
tntLexer.T__3 = 4;
tntLexer.T__4 = 5;
tntLexer.T__5 = 6;
tntLexer.T__6 = 7;
tntLexer.ZERO = 8;
tntLexer.SUCCESSOR = 9;
tntLexer.A = 10;
tntLexer.B = 11;
tntLexer.C = 12;
tntLexer.D = 13;
tntLexer.E = 14;
tntLexer.PRIME = 15;
tntLexer.FOREVERY = 16;
tntLexer.EXISTS = 17;
tntLexer.WS = 18;



