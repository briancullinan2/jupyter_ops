// Generated from Resources/Parsers/muddb/muddb.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,4,45,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,
1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
3,1,29,8,1,1,1,4,1,32,8,1,11,1,12,1,33,1,2,4,2,37,8,2,11,2,12,2,38,1,3,3,
3,42,8,3,1,3,1,3,0,0,4,1,1,3,2,5,3,7,4,1,0,2,1,0,48,57,6,0,9,9,32,35,39,
91,93,93,95,123,125,125,48,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,
0,1,9,1,0,0,0,3,28,1,0,0,0,5,36,1,0,0,0,7,41,1,0,0,0,9,10,5,42,0,0,10,11,
5,42,0,0,11,12,5,42,0,0,12,13,5,69,0,0,13,14,5,78,0,0,14,15,5,68,0,0,15,
16,5,32,0,0,16,17,5,79,0,0,17,18,5,70,0,0,18,19,5,32,0,0,19,20,5,68,0,0,
20,21,5,85,0,0,21,22,5,77,0,0,22,23,5,80,0,0,23,24,5,42,0,0,24,25,5,42,0,
0,25,26,5,42,0,0,26,2,1,0,0,0,27,29,5,45,0,0,28,27,1,0,0,0,28,29,1,0,0,0,
29,31,1,0,0,0,30,32,7,0,0,0,31,30,1,0,0,0,32,33,1,0,0,0,33,31,1,0,0,0,33,
34,1,0,0,0,34,4,1,0,0,0,35,37,7,1,0,0,36,35,1,0,0,0,37,38,1,0,0,0,38,36,
1,0,0,0,38,39,1,0,0,0,39,6,1,0,0,0,40,42,5,13,0,0,41,40,1,0,0,0,41,42,1,
0,0,0,42,43,1,0,0,0,43,44,5,10,0,0,44,8,1,0,0,0,5,0,28,33,38,41,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class muddbLexer extends antlr4.Lexer {

    static grammarFileName = "muddb.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'***END OF DUMP***'" ];
	static symbolicNames = [ null, "END", "NUM", "STRING", "EOL" ];
	static ruleNames = [ "END", "NUM", "STRING", "EOL" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

muddbLexer.EOF = antlr4.Token.EOF;
muddbLexer.END = 1;
muddbLexer.NUM = 2;
muddbLexer.STRING = 3;
muddbLexer.EOL = 4;



