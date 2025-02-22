// Generated from ./nanofuck/nanofuck.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,4,19,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,
1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,0,0,4,1,1,3,2,5,3,7,4,1,0,1,3,0,9,10,
13,13,32,32,18,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,1,9,1,0,0,
0,3,11,1,0,0,0,5,13,1,0,0,0,7,15,1,0,0,0,9,10,5,42,0,0,10,2,1,0,0,0,11,12,
5,123,0,0,12,4,1,0,0,0,13,14,5,125,0,0,14,6,1,0,0,0,15,16,7,0,0,0,16,17,
1,0,0,0,17,18,6,3,0,0,18,8,1,0,0,0,1,0,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class nanofuckLexer extends antlr4.Lexer {

    static grammarFileName = "nanofuck.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'*'", "'{'", "'}'" ];
	static symbolicNames = [ null, null, null, null, "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

nanofuckLexer.EOF = antlr4.Token.EOF;
nanofuckLexer.T__0 = 1;
nanofuckLexer.T__1 = 2;
nanofuckLexer.T__2 = 3;
nanofuckLexer.WS = 4;



