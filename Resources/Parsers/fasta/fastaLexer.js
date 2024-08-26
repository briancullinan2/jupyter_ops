// Generated from Resources/Parsers/fasta/fasta.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,5,62,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,
1,1,1,1,1,1,1,1,5,1,31,8,1,10,1,12,1,34,9,1,1,1,1,1,1,2,1,2,1,2,4,2,41,8,
2,11,2,12,2,42,1,3,3,3,46,8,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,4,7,57,
8,7,11,7,12,7,58,1,7,1,7,1,21,0,8,1,1,3,2,5,3,7,4,9,0,11,0,13,0,15,5,1,0,
3,1,0,48,57,2,0,65,90,97,122,7,0,32,32,38,41,43,47,58,58,91,91,93,93,95,
95,65,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,15,1,0,0,0,1,17,
1,0,0,0,3,26,1,0,0,0,5,40,1,0,0,0,7,45,1,0,0,0,9,49,1,0,0,0,11,51,1,0,0,
0,13,53,1,0,0,0,15,56,1,0,0,0,17,21,5,59,0,0,18,20,9,0,0,0,19,18,1,0,0,0,
20,23,1,0,0,0,21,22,1,0,0,0,21,19,1,0,0,0,22,24,1,0,0,0,23,21,1,0,0,0,24,
25,3,7,3,0,25,2,1,0,0,0,26,27,5,62,0,0,27,32,3,5,2,0,28,29,5,124,0,0,29,
31,3,5,2,0,30,28,1,0,0,0,31,34,1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,35,
1,0,0,0,34,32,1,0,0,0,35,36,3,7,3,0,36,4,1,0,0,0,37,41,3,9,4,0,38,41,3,11,
5,0,39,41,3,13,6,0,40,37,1,0,0,0,40,38,1,0,0,0,40,39,1,0,0,0,41,42,1,0,0,
0,42,40,1,0,0,0,42,43,1,0,0,0,43,6,1,0,0,0,44,46,5,13,0,0,45,44,1,0,0,0,
45,46,1,0,0,0,46,47,1,0,0,0,47,48,5,10,0,0,48,8,1,0,0,0,49,50,7,0,0,0,50,
10,1,0,0,0,51,52,7,1,0,0,52,12,1,0,0,0,53,54,7,2,0,0,54,14,1,0,0,0,55,57,
3,11,5,0,56,55,1,0,0,0,57,58,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,60,1,
0,0,0,60,61,3,7,3,0,61,16,1,0,0,0,7,0,21,32,40,42,45,58,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class fastaLexer extends antlr4.Lexer {

    static grammarFileName = "fasta.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [  ];
	static symbolicNames = [ null, "COMMENTLINE", "DESCRIPTIONLINE", "TEXT", 
                          "EOL", "SEQUENCELINE" ];
	static ruleNames = [ "COMMENTLINE", "DESCRIPTIONLINE", "TEXT", "EOL", "DIGIT", 
                      "LETTER", "SYMBOL", "SEQUENCELINE" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

fastaLexer.EOF = antlr4.Token.EOF;
fastaLexer.COMMENTLINE = 1;
fastaLexer.DESCRIPTIONLINE = 2;
fastaLexer.TEXT = 3;
fastaLexer.EOL = 4;
fastaLexer.SEQUENCELINE = 5;



