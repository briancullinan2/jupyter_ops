// Generated from Resources/Parsers/scotty/scotty.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,12,53,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,
0,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,
8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,0,0,12,1,1,3,2,5,3,7,4,9,5,11,6,
13,7,15,8,17,9,19,10,21,11,23,12,1,0,3,1,0,48,57,2,0,65,90,97,122,3,0,9,
10,13,13,32,32,52,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,
0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,
21,1,0,0,0,0,23,1,0,0,0,1,25,1,0,0,0,3,27,1,0,0,0,5,31,1,0,0,0,7,33,1,0,
0,0,9,35,1,0,0,0,11,37,1,0,0,0,13,39,1,0,0,0,15,41,1,0,0,0,17,43,1,0,0,0,
19,45,1,0,0,0,21,47,1,0,0,0,23,49,1,0,0,0,25,26,5,61,0,0,26,2,1,0,0,0,27,
28,5,102,0,0,28,29,5,117,0,0,29,30,5,110,0,0,30,4,1,0,0,0,31,32,5,43,0,0,
32,6,1,0,0,0,33,34,5,45,0,0,34,8,1,0,0,0,35,36,5,42,0,0,36,10,1,0,0,0,37,
38,5,47,0,0,38,12,1,0,0,0,39,40,5,40,0,0,40,14,1,0,0,0,41,42,5,41,0,0,42,
16,1,0,0,0,43,44,5,46,0,0,44,18,1,0,0,0,45,46,7,0,0,0,46,20,1,0,0,0,47,48,
7,1,0,0,48,22,1,0,0,0,49,50,7,2,0,0,50,51,1,0,0,0,51,52,6,11,0,0,52,24,1,
0,0,0,1,0,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class scottyLexer extends antlr4.Lexer {

    static grammarFileName = "scotty.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'='", "'fun'", "'+'", "'-'", "'*'", "'/'", 
                         "'('", "')'", "'.'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, "DIGIT", "LETTER", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "DIGIT", "LETTER", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

scottyLexer.EOF = antlr4.Token.EOF;
scottyLexer.T__0 = 1;
scottyLexer.T__1 = 2;
scottyLexer.T__2 = 3;
scottyLexer.T__3 = 4;
scottyLexer.T__4 = 5;
scottyLexer.T__5 = 6;
scottyLexer.T__6 = 7;
scottyLexer.T__7 = 8;
scottyLexer.T__8 = 9;
scottyLexer.DIGIT = 10;
scottyLexer.LETTER = 11;
scottyLexer.WS = 12;



