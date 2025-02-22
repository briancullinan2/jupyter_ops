// Generated from ./properties/properties.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,5,43,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,1,0,1,0,1,1,4,1,15,8,1,11,1,12,1,16,1,2,1,2,1,2,1,2,5,2,23,8,2,10,2,
12,2,26,9,2,1,2,1,2,1,3,1,3,5,3,32,8,3,10,3,12,3,35,9,3,1,4,4,4,38,8,4,11,
4,12,4,39,1,4,1,4,0,0,5,1,1,3,2,5,3,7,4,9,5,1,0,3,7,0,32,32,37,37,44,58,
64,90,95,95,97,123,125,125,1,0,34,34,2,0,10,10,13,13,47,0,1,1,0,0,0,0,3,
1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,1,11,1,0,0,0,3,14,1,0,0,0,5,
18,1,0,0,0,7,29,1,0,0,0,9,37,1,0,0,0,11,12,5,61,0,0,12,2,1,0,0,0,13,15,7,
0,0,0,14,13,1,0,0,0,15,16,1,0,0,0,16,14,1,0,0,0,16,17,1,0,0,0,17,4,1,0,0,
0,18,24,5,34,0,0,19,20,5,34,0,0,20,23,5,34,0,0,21,23,8,1,0,0,22,19,1,0,0,
0,22,21,1,0,0,0,23,26,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,27,1,0,0,0,
26,24,1,0,0,0,27,28,5,34,0,0,28,6,1,0,0,0,29,33,5,35,0,0,30,32,8,2,0,0,31,
30,1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,8,1,0,0,0,35,33,
1,0,0,0,36,38,7,2,0,0,37,36,1,0,0,0,38,39,1,0,0,0,39,37,1,0,0,0,39,40,1,
0,0,0,40,41,1,0,0,0,41,42,6,4,0,0,42,10,1,0,0,0,6,0,16,22,24,33,39,1,0,1,
0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class propertiesLexer extends antlr4.Lexer {

    static grammarFileName = "properties.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'='" ];
	static symbolicNames = [ null, null, "TEXT", "STRING", "COMMENT", "TERMINATOR" ];
	static ruleNames = [ "T__0", "TEXT", "STRING", "COMMENT", "TERMINATOR" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

propertiesLexer.EOF = antlr4.Token.EOF;
propertiesLexer.T__0 = 1;
propertiesLexer.TEXT = 2;
propertiesLexer.STRING = 3;
propertiesLexer.COMMENT = 4;
propertiesLexer.TERMINATOR = 5;



