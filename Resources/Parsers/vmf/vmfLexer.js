// Generated from Resources/Parsers/vmf/vmf.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,5,35,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,5,2,20,8,2,10,2,12,2,23,9,2,1,2,1,2,
1,3,4,3,28,8,3,11,3,12,3,29,1,4,1,4,1,4,1,4,0,0,5,1,1,3,2,5,3,7,4,9,5,1,
0,4,4,0,10,10,13,13,34,34,92,92,2,0,34,34,92,92,10,0,36,36,40,41,45,45,47,
57,60,60,62,62,64,91,93,93,95,95,97,122,3,0,9,10,13,13,32,32,37,0,1,1,0,
0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,1,11,1,0,0,0,3,13,1,
0,0,0,5,15,1,0,0,0,7,27,1,0,0,0,9,31,1,0,0,0,11,12,5,123,0,0,12,2,1,0,0,
0,13,14,5,125,0,0,14,4,1,0,0,0,15,21,5,34,0,0,16,20,8,0,0,0,17,18,5,92,0,
0,18,20,7,1,0,0,19,16,1,0,0,0,19,17,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,
21,22,1,0,0,0,22,24,1,0,0,0,23,21,1,0,0,0,24,25,5,34,0,0,25,6,1,0,0,0,26,
28,7,2,0,0,27,26,1,0,0,0,28,29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,8,
1,0,0,0,31,32,7,3,0,0,32,33,1,0,0,0,33,34,6,4,0,0,34,10,1,0,0,0,4,0,19,21,
29,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class vmfLexer extends antlr4.Lexer {

    static grammarFileName = "vmf.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'{'", "'}'" ];
	static symbolicNames = [ null, null, null, "QUOTEDSTTRING", "STRING", "WS" ];
	static ruleNames = [ "T__0", "T__1", "QUOTEDSTTRING", "STRING", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

vmfLexer.EOF = antlr4.Token.EOF;
vmfLexer.T__0 = 1;
vmfLexer.T__1 = 2;
vmfLexer.QUOTEDSTTRING = 3;
vmfLexer.STRING = 4;
vmfLexer.WS = 5;


