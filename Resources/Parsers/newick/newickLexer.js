// Generated from Resources/Parsers/newick/newick.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,8,54,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,
4,5,29,8,5,11,5,12,5,30,1,5,1,5,4,5,35,8,5,11,5,12,5,36,3,5,39,8,5,1,6,1,
6,5,6,43,8,6,10,6,12,6,46,9,6,1,7,4,7,49,8,7,11,7,12,7,50,1,7,1,7,0,0,8,
1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,1,0,4,1,0,48,57,2,0,65,90,97,122,3,0,
48,57,65,90,97,122,3,0,9,10,13,13,32,32,58,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,
0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,1,17,
1,0,0,0,3,19,1,0,0,0,5,21,1,0,0,0,7,23,1,0,0,0,9,25,1,0,0,0,11,28,1,0,0,
0,13,40,1,0,0,0,15,48,1,0,0,0,17,18,5,59,0,0,18,2,1,0,0,0,19,20,5,40,0,0,
20,4,1,0,0,0,21,22,5,41,0,0,22,6,1,0,0,0,23,24,5,44,0,0,24,8,1,0,0,0,25,
26,5,58,0,0,26,10,1,0,0,0,27,29,7,0,0,0,28,27,1,0,0,0,29,30,1,0,0,0,30,28,
1,0,0,0,30,31,1,0,0,0,31,38,1,0,0,0,32,34,5,46,0,0,33,35,7,0,0,0,34,33,1,
0,0,0,35,36,1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,39,1,0,0,0,38,32,1,0,
0,0,38,39,1,0,0,0,39,12,1,0,0,0,40,44,7,1,0,0,41,43,7,2,0,0,42,41,1,0,0,
0,43,46,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,14,1,0,0,0,46,44,1,0,0,0,
47,49,7,3,0,0,48,47,1,0,0,0,49,50,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,
52,1,0,0,0,52,53,6,7,0,0,53,16,1,0,0,0,6,0,30,36,38,44,50,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class newickLexer extends antlr4.Lexer {

    static grammarFileName = "newick.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "';'", "'('", "')'", "','", "':'" ];
	static symbolicNames = [ null, null, null, null, null, null, "NUMBER", 
                          "STRING", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "NUMBER", 
                      "STRING", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

newickLexer.EOF = antlr4.Token.EOF;
newickLexer.T__0 = 1;
newickLexer.T__1 = 2;
newickLexer.T__2 = 3;
newickLexer.T__3 = 4;
newickLexer.T__4 = 5;
newickLexer.NUMBER = 6;
newickLexer.STRING = 7;
newickLexer.WS = 8;


