// Generated from Resources/Parsers/gtin/gtin.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,12,56,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,
0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,
9,1,10,1,10,1,10,1,10,1,11,4,11,51,8,11,11,11,12,11,52,1,11,1,11,0,0,12,
1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,1,0,1,3,0,9,10,
13,13,32,32,56,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,
0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,
1,0,0,0,0,23,1,0,0,0,1,25,1,0,0,0,3,27,1,0,0,0,5,29,1,0,0,0,7,31,1,0,0,0,
9,33,1,0,0,0,11,35,1,0,0,0,13,37,1,0,0,0,15,39,1,0,0,0,17,41,1,0,0,0,19,
43,1,0,0,0,21,45,1,0,0,0,23,50,1,0,0,0,25,26,5,48,0,0,26,2,1,0,0,0,27,28,
5,49,0,0,28,4,1,0,0,0,29,30,5,50,0,0,30,6,1,0,0,0,31,32,5,51,0,0,32,8,1,
0,0,0,33,34,5,52,0,0,34,10,1,0,0,0,35,36,5,53,0,0,36,12,1,0,0,0,37,38,5,
54,0,0,38,14,1,0,0,0,39,40,5,55,0,0,40,16,1,0,0,0,41,42,5,56,0,0,42,18,1,
0,0,0,43,44,5,57,0,0,44,20,1,0,0,0,45,46,5,45,0,0,46,47,1,0,0,0,47,48,6,
10,0,0,48,22,1,0,0,0,49,51,7,0,0,0,50,49,1,0,0,0,51,52,1,0,0,0,52,50,1,0,
0,0,52,53,1,0,0,0,53,54,1,0,0,0,54,55,6,11,0,0,55,24,1,0,0,0,2,0,52,1,6,
0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class gtinLexer extends antlr4.Lexer {

    static grammarFileName = "gtin.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'0'", "'1'", "'2'", "'3'", "'4'", "'5'", 
                         "'6'", "'7'", "'8'", "'9'", "'-'" ];
	static symbolicNames = [ null, "DIGIT_0", "DIGIT_1", "DIGIT_2", "DIGIT_3", 
                          "DIGIT_4", "DIGIT_5", "DIGIT_6", "DIGIT_7", "DIGIT_8", 
                          "DIGIT_9", "HYPHEN", "WS" ];
	static ruleNames = [ "DIGIT_0", "DIGIT_1", "DIGIT_2", "DIGIT_3", "DIGIT_4", 
                      "DIGIT_5", "DIGIT_6", "DIGIT_7", "DIGIT_8", "DIGIT_9", 
                      "HYPHEN", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

gtinLexer.EOF = antlr4.Token.EOF;
gtinLexer.DIGIT_0 = 1;
gtinLexer.DIGIT_1 = 2;
gtinLexer.DIGIT_2 = 3;
gtinLexer.DIGIT_3 = 4;
gtinLexer.DIGIT_4 = 5;
gtinLexer.DIGIT_5 = 6;
gtinLexer.DIGIT_6 = 7;
gtinLexer.DIGIT_7 = 8;
gtinLexer.DIGIT_8 = 9;
gtinLexer.DIGIT_9 = 10;
gtinLexer.HYPHEN = 11;
gtinLexer.WS = 12;



