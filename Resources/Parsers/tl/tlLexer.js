// Generated from ./tl/tl.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,9,45,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,1,1,1,1,2,4,2,25,8,2,11,2,
12,2,26,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,4,8,40,8,8,11,8,12,8,
41,1,8,1,8,0,0,9,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,1,0,2,1,0,97,122,
3,0,9,10,13,13,32,32,46,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,
0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,1,19,1,0,
0,0,3,21,1,0,0,0,5,24,1,0,0,0,7,28,1,0,0,0,9,30,1,0,0,0,11,32,1,0,0,0,13,
34,1,0,0,0,15,36,1,0,0,0,17,39,1,0,0,0,19,20,5,40,0,0,20,2,1,0,0,0,21,22,
5,41,0,0,22,4,1,0,0,0,23,25,7,0,0,0,24,23,1,0,0,0,25,26,1,0,0,0,26,24,1,
0,0,0,26,27,1,0,0,0,27,6,1,0,0,0,28,29,5,71,0,0,29,8,1,0,0,0,30,31,5,72,
0,0,31,10,1,0,0,0,32,33,5,8744,0,0,33,12,1,0,0,0,34,35,5,8869,0,0,35,14,
1,0,0,0,36,37,5,8976,0,0,37,16,1,0,0,0,38,40,7,1,0,0,39,38,1,0,0,0,40,41,
1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,43,1,0,0,0,43,44,6,8,0,0,44,18,1,
0,0,0,3,0,26,41,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class tlLexer extends antlr4.Lexer {

    static grammarFileName = "tl.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'('", "')'", null, "'G'", "'H'", "'\\u2228'", 
                         "'\\u22A5'", "'\\u2310'" ];
	static symbolicNames = [ null, null, null, "ATOMIC", "TL_ALWAYS", "TL_WAS", 
                          "TL_OR", "TL_UPTACK", "TL_NOT", "WS" ];
	static ruleNames = [ "T__0", "T__1", "ATOMIC", "TL_ALWAYS", "TL_WAS", "TL_OR", 
                      "TL_UPTACK", "TL_NOT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

tlLexer.EOF = antlr4.Token.EOF;
tlLexer.T__0 = 1;
tlLexer.T__1 = 2;
tlLexer.ATOMIC = 3;
tlLexer.TL_ALWAYS = 4;
tlLexer.TL_WAS = 5;
tlLexer.TL_OR = 6;
tlLexer.TL_UPTACK = 7;
tlLexer.TL_NOT = 8;
tlLexer.WS = 9;



