// Generated from Resources/Parsers/tsv/tsv.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,4,32,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,
1,0,1,1,4,1,13,8,1,11,1,12,1,14,1,2,4,2,18,8,2,11,2,12,2,19,1,3,1,3,1,3,
1,3,5,3,26,8,3,10,3,12,3,29,9,3,1,3,1,3,0,0,4,1,1,3,2,5,3,7,4,1,0,3,2,0,
10,10,13,13,4,0,10,10,13,13,34,34,44,44,1,0,34,34,35,0,1,1,0,0,0,0,3,1,0,
0,0,0,5,1,0,0,0,0,7,1,0,0,0,1,9,1,0,0,0,3,12,1,0,0,0,5,17,1,0,0,0,7,21,1,
0,0,0,9,10,5,9,0,0,10,2,1,0,0,0,11,13,7,0,0,0,12,11,1,0,0,0,13,14,1,0,0,
0,14,12,1,0,0,0,14,15,1,0,0,0,15,4,1,0,0,0,16,18,8,1,0,0,17,16,1,0,0,0,18,
19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,6,1,0,0,0,21,27,5,34,0,0,22,23,
5,34,0,0,23,26,5,34,0,0,24,26,8,2,0,0,25,22,1,0,0,0,25,24,1,0,0,0,26,29,
1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,30,1,0,0,0,29,27,1,0,0,0,30,31,5,
34,0,0,31,8,1,0,0,0,5,0,14,19,25,27,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class tsvLexer extends antlr4.Lexer {

    static grammarFileName = "tsv.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'\\t'" ];
	static symbolicNames = [ null, "TAB", "EOL", "TEXT", "STRING" ];
	static ruleNames = [ "TAB", "EOL", "TEXT", "STRING" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

tsvLexer.EOF = antlr4.Token.EOF;
tsvLexer.TAB = 1;
tsvLexer.EOL = 2;
tsvLexer.TEXT = 3;
tsvLexer.STRING = 4;



