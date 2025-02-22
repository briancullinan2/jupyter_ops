// Generated from ./itn/itn.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,4,28,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,
1,0,1,1,4,1,13,8,1,11,1,12,1,14,1,2,4,2,18,8,2,11,2,12,2,19,1,3,4,3,23,8,
3,11,3,12,3,24,1,3,1,3,0,0,4,1,1,3,2,5,3,7,4,1,0,3,1,0,48,57,4,0,32,32,48,
57,65,90,97,122,2,0,9,10,13,13,30,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,
7,1,0,0,0,1,9,1,0,0,0,3,12,1,0,0,0,5,17,1,0,0,0,7,22,1,0,0,0,9,10,5,124,
0,0,10,2,1,0,0,0,11,13,7,0,0,0,12,11,1,0,0,0,13,14,1,0,0,0,14,12,1,0,0,0,
14,15,1,0,0,0,15,4,1,0,0,0,16,18,7,1,0,0,17,16,1,0,0,0,18,19,1,0,0,0,19,
17,1,0,0,0,19,20,1,0,0,0,20,6,1,0,0,0,21,23,7,2,0,0,22,21,1,0,0,0,23,24,
1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,26,1,0,0,0,26,27,6,3,0,0,27,8,1,0,
0,0,4,0,14,19,24,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class itnLexer extends antlr4.Lexer {

    static grammarFileName = "itn.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'|'" ];
	static symbolicNames = [ null, null, "NUM", "TEXT", "WS" ];
	static ruleNames = [ "T__0", "NUM", "TEXT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

itnLexer.EOF = antlr4.Token.EOF;
itnLexer.T__0 = 1;
itnLexer.NUM = 2;
itnLexer.TEXT = 3;
itnLexer.WS = 4;



