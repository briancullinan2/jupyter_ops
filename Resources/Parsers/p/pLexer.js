// Generated from ./p/p.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,5,23,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,0,0,5,1,1,3,2,5,3,7,
4,9,5,1,0,1,3,0,9,10,13,13,32,32,22,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,
0,7,1,0,0,0,0,9,1,0,0,0,1,11,1,0,0,0,3,13,1,0,0,0,5,15,1,0,0,0,7,17,1,0,
0,0,9,19,1,0,0,0,11,12,5,40,0,0,12,2,1,0,0,0,13,14,5,41,0,0,14,4,1,0,0,0,
15,16,5,82,0,0,16,6,1,0,0,0,17,18,5,955,0,0,18,8,1,0,0,0,19,20,7,0,0,0,20,
21,1,0,0,0,21,22,6,4,0,0,22,10,1,0,0,0,1,0,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class pLexer extends antlr4.Lexer {

    static grammarFileName = "p.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'('", "')'", "'R'", "'\\u03BB'" ];
	static symbolicNames = [ null, null, null, "R", "L", "WS" ];
	static ruleNames = [ "T__0", "T__1", "R", "L", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

pLexer.EOF = antlr4.Token.EOF;
pLexer.T__0 = 1;
pLexer.T__1 = 2;
pLexer.R = 3;
pLexer.L = 4;
pLexer.WS = 5;



