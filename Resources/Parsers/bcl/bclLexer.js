// Generated from ./bcl/bcl.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,4,24,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,
1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,3,4,3,19,8,3,11,3,12,3,20,1,3,1,3,0,0,4,1,
1,3,2,5,3,7,4,1,0,1,3,0,9,10,13,13,32,32,24,0,1,1,0,0,0,0,3,1,0,0,0,0,5,
1,0,0,0,0,7,1,0,0,0,1,9,1,0,0,0,3,12,1,0,0,0,5,15,1,0,0,0,7,18,1,0,0,0,9,
10,5,48,0,0,10,11,5,48,0,0,11,2,1,0,0,0,12,13,5,48,0,0,13,14,5,49,0,0,14,
4,1,0,0,0,15,16,5,49,0,0,16,6,1,0,0,0,17,19,7,0,0,0,18,17,1,0,0,0,19,20,
1,0,0,0,20,18,1,0,0,0,20,21,1,0,0,0,21,22,1,0,0,0,22,23,6,3,0,0,23,8,1,0,
0,0,2,0,20,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class bclLexer extends antlr4.Lexer {

    static grammarFileName = "bcl.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'00'", "'01'", "'1'" ];
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

bclLexer.EOF = antlr4.Token.EOF;
bclLexer.T__0 = 1;
bclLexer.T__1 = 2;
bclLexer.T__2 = 3;
bclLexer.WS = 4;



