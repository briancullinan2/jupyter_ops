// Generated from Resources/Parsers/telephone/telephone.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,6,35,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,
1,5,4,5,30,8,5,11,5,12,5,31,1,5,1,5,0,0,6,1,1,3,2,5,3,7,4,9,5,11,6,1,0,2,
1,0,48,57,3,0,10,10,13,13,32,32,35,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,
7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,1,13,1,0,0,0,3,16,1,0,0,0,5,18,1,0,0,
0,7,22,1,0,0,0,9,26,1,0,0,0,11,29,1,0,0,0,13,14,5,43,0,0,14,15,5,49,0,0,
15,2,1,0,0,0,16,17,5,43,0,0,17,4,1,0,0,0,18,19,5,48,0,0,19,20,5,49,0,0,20,
21,5,49,0,0,21,6,1,0,0,0,22,23,5,48,0,0,23,24,5,49,0,0,24,25,5,48,0,0,25,
8,1,0,0,0,26,27,7,0,0,0,27,10,1,0,0,0,28,30,7,1,0,0,29,28,1,0,0,0,30,31,
1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,33,1,0,0,0,33,34,6,5,0,0,34,12,1,
0,0,0,2,0,31,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class telephoneLexer extends antlr4.Lexer {

    static grammarFileName = "telephone.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'+1'", "'+'", "'011'", "'010'" ];
	static symbolicNames = [ null, null, null, null, null, "DIGIT", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "DIGIT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

telephoneLexer.EOF = antlr4.Token.EOF;
telephoneLexer.T__0 = 1;
telephoneLexer.T__1 = 2;
telephoneLexer.T__2 = 3;
telephoneLexer.T__3 = 4;
telephoneLexer.DIGIT = 5;
telephoneLexer.WS = 6;



