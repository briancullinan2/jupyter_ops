// Generated from ./quakemap/quakemap.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,8,65,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,4,4,
28,8,4,11,4,12,4,29,1,5,3,5,33,8,5,1,5,4,5,36,8,5,11,5,12,5,37,1,5,1,5,4,
5,42,8,5,11,5,12,5,43,3,5,46,8,5,1,6,1,6,1,6,1,6,5,6,52,8,6,10,6,12,6,55,
9,6,1,6,1,6,1,7,4,7,60,8,7,11,7,12,7,61,1,7,1,7,0,0,8,1,1,3,2,5,3,7,4,9,
5,11,6,13,7,15,8,1,0,5,2,0,65,90,97,122,4,0,48,57,65,90,95,95,97,122,2,0,
43,43,45,45,1,0,34,34,3,0,9,10,13,13,32,32,72,0,1,1,0,0,0,0,3,1,0,0,0,0,
5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,
1,17,1,0,0,0,3,19,1,0,0,0,5,21,1,0,0,0,7,23,1,0,0,0,9,25,1,0,0,0,11,32,1,
0,0,0,13,47,1,0,0,0,15,59,1,0,0,0,17,18,5,123,0,0,18,2,1,0,0,0,19,20,5,125,
0,0,20,4,1,0,0,0,21,22,5,40,0,0,22,6,1,0,0,0,23,24,5,41,0,0,24,8,1,0,0,0,
25,27,7,0,0,0,26,28,7,1,0,0,27,26,1,0,0,0,28,29,1,0,0,0,29,27,1,0,0,0,29,
30,1,0,0,0,30,10,1,0,0,0,31,33,7,2,0,0,32,31,1,0,0,0,32,33,1,0,0,0,33,35,
1,0,0,0,34,36,2,48,57,0,35,34,1,0,0,0,36,37,1,0,0,0,37,35,1,0,0,0,37,38,
1,0,0,0,38,45,1,0,0,0,39,41,5,46,0,0,40,42,2,48,57,0,41,40,1,0,0,0,42,43,
1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,46,1,0,0,0,45,39,1,0,0,0,45,46,1,
0,0,0,46,12,1,0,0,0,47,53,5,34,0,0,48,49,5,34,0,0,49,52,5,34,0,0,50,52,8,
3,0,0,51,48,1,0,0,0,51,50,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,
0,0,54,56,1,0,0,0,55,53,1,0,0,0,56,57,5,34,0,0,57,14,1,0,0,0,58,60,7,4,0,
0,59,58,1,0,0,0,60,61,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,63,1,0,0,0,
63,64,6,7,0,0,64,16,1,0,0,0,9,0,29,32,37,43,45,51,53,61,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class quakemapLexer extends antlr4.Lexer {

    static grammarFileName = "quakemap.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'{'", "'}'", "'('", "')'" ];
	static symbolicNames = [ null, null, null, null, null, "TEXT", "NUMBER", 
                          "STRING", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "TEXT", "NUMBER", 
                      "STRING", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

quakemapLexer.EOF = antlr4.Token.EOF;
quakemapLexer.T__0 = 1;
quakemapLexer.T__1 = 2;
quakemapLexer.T__2 = 3;
quakemapLexer.T__3 = 4;
quakemapLexer.TEXT = 5;
quakemapLexer.NUMBER = 6;
quakemapLexer.STRING = 7;
quakemapLexer.WS = 8;



