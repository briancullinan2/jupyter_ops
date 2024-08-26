// Generated from Resources/Parsers/callable/callable_.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,9,54,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,
4,3,29,8,3,11,3,12,3,30,1,4,1,4,5,4,35,8,4,10,4,12,4,38,9,4,1,4,1,4,1,5,
1,5,1,6,1,6,1,7,1,7,1,8,4,8,49,8,8,11,8,12,8,50,1,8,1,8,0,0,9,1,1,3,2,5,
3,7,4,9,5,11,6,13,7,15,8,17,9,1,0,5,1,0,34,34,1,0,65,90,1,0,97,122,2,0,10,
10,13,13,2,0,9,9,32,32,58,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,
0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,1,19,1,
0,0,0,3,21,1,0,0,0,5,23,1,0,0,0,7,28,1,0,0,0,9,32,1,0,0,0,11,41,1,0,0,0,
13,43,1,0,0,0,15,45,1,0,0,0,17,48,1,0,0,0,19,20,5,40,0,0,20,2,1,0,0,0,21,
22,5,41,0,0,22,4,1,0,0,0,23,24,5,44,0,0,24,6,1,0,0,0,25,29,3,11,5,0,26,29,
3,13,6,0,27,29,5,45,0,0,28,25,1,0,0,0,28,26,1,0,0,0,28,27,1,0,0,0,29,30,
1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,8,1,0,0,0,32,36,5,34,0,0,33,35,8,
0,0,0,34,33,1,0,0,0,35,38,1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,39,1,0,
0,0,38,36,1,0,0,0,39,40,5,34,0,0,40,10,1,0,0,0,41,42,7,1,0,0,42,12,1,0,0,
0,43,44,7,2,0,0,44,14,1,0,0,0,45,46,7,3,0,0,46,16,1,0,0,0,47,49,7,4,0,0,
48,47,1,0,0,0,49,50,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,52,1,0,0,0,52,
53,6,8,0,0,53,18,1,0,0,0,5,0,28,30,36,50,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class callable_Lexer extends antlr4.Lexer {

    static grammarFileName = "callable_.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'('", "')'", "','" ];
	static symbolicNames = [ null, null, null, null, "ID", "STRING", "LETTER_UPPER", 
                          "LETTER_LOWER", "EOL", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "ID", "STRING", "LETTER_UPPER", 
                      "LETTER_LOWER", "EOL", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

callable_Lexer.EOF = antlr4.Token.EOF;
callable_Lexer.T__0 = 1;
callable_Lexer.T__1 = 2;
callable_Lexer.T__2 = 3;
callable_Lexer.ID = 4;
callable_Lexer.STRING = 5;
callable_Lexer.LETTER_UPPER = 6;
callable_Lexer.LETTER_LOWER = 7;
callable_Lexer.EOL = 8;
callable_Lexer.WS = 9;



