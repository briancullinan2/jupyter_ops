// Generated from ./propcalc/propcalc.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,12,59,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,
0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,
7,1,8,1,8,1,9,1,9,1,10,3,10,51,8,10,1,11,4,11,54,8,11,11,11,12,11,55,1,11,
1,11,0,0,12,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,1,
0,2,2,0,65,90,97,122,3,0,9,10,13,13,32,32,59,0,1,1,0,0,0,0,3,1,0,0,0,0,5,
1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,
17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,25,1,0,0,0,3,27,1,0,
0,0,5,29,1,0,0,0,7,31,1,0,0,0,9,33,1,0,0,0,11,35,1,0,0,0,13,38,1,0,0,0,15,
41,1,0,0,0,17,45,1,0,0,0,19,47,1,0,0,0,21,50,1,0,0,0,23,53,1,0,0,0,25,26,
5,44,0,0,26,2,1,0,0,0,27,28,5,94,0,0,28,4,1,0,0,0,29,30,5,118,0,0,30,6,1,
0,0,0,31,32,5,33,0,0,32,8,1,0,0,0,33,34,5,61,0,0,34,10,1,0,0,0,35,36,5,45,
0,0,36,37,5,62,0,0,37,12,1,0,0,0,38,39,5,124,0,0,39,40,5,45,0,0,40,14,1,
0,0,0,41,42,5,60,0,0,42,43,5,45,0,0,43,44,5,62,0,0,44,16,1,0,0,0,45,46,5,
40,0,0,46,18,1,0,0,0,47,48,5,41,0,0,48,20,1,0,0,0,49,51,7,0,0,0,50,49,1,
0,0,0,51,22,1,0,0,0,52,54,7,1,0,0,53,52,1,0,0,0,54,55,1,0,0,0,55,53,1,0,
0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,58,6,11,0,0,58,24,1,0,0,0,3,0,50,55,1,
0,1,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class propcalcLexer extends antlr4.Lexer {

    static grammarFileName = "propcalc.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "','", "'^'", "'v'", "'!'", "'='", "'->'", 
                         "'|-'", "'<->'", "'('", "')'" ];
	static symbolicNames = [ null, null, "AND", "OR", "NOT", "EQ", "IMPLIES", 
                          "THEREFORE", "EQUIV", "LPAREN", "RPAREN", "LETTER", 
                          "WS" ];
	static ruleNames = [ "T__0", "AND", "OR", "NOT", "EQ", "IMPLIES", "THEREFORE", 
                      "EQUIV", "LPAREN", "RPAREN", "LETTER", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

propcalcLexer.EOF = antlr4.Token.EOF;
propcalcLexer.T__0 = 1;
propcalcLexer.AND = 2;
propcalcLexer.OR = 3;
propcalcLexer.NOT = 4;
propcalcLexer.EQ = 5;
propcalcLexer.IMPLIES = 6;
propcalcLexer.THEREFORE = 7;
propcalcLexer.EQUIV = 8;
propcalcLexer.LPAREN = 9;
propcalcLexer.RPAREN = 10;
propcalcLexer.LETTER = 11;
propcalcLexer.WS = 12;



