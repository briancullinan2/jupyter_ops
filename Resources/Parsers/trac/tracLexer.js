// Generated from Resources/Parsers/trac/trac.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,7,38,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,5,4,5,
28,8,5,11,5,12,5,29,1,6,4,6,33,8,6,11,6,12,6,34,1,6,1,6,0,0,7,1,1,3,2,5,
3,7,4,9,5,11,6,13,7,1,0,2,3,0,32,32,65,90,97,122,3,0,9,10,13,13,32,32,39,
0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,
0,13,1,0,0,0,1,15,1,0,0,0,3,17,1,0,0,0,5,19,1,0,0,0,7,21,1,0,0,0,9,23,1,
0,0,0,11,27,1,0,0,0,13,32,1,0,0,0,15,16,5,35,0,0,16,2,1,0,0,0,17,18,5,40,
0,0,18,4,1,0,0,0,19,20,5,44,0,0,20,6,1,0,0,0,21,22,5,41,0,0,22,8,1,0,0,0,
23,24,5,35,0,0,24,25,5,35,0,0,25,10,1,0,0,0,26,28,7,0,0,0,27,26,1,0,0,0,
28,29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,12,1,0,0,0,31,33,7,1,0,0,32,
31,1,0,0,0,33,34,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,36,1,0,0,0,36,37,
6,6,0,0,37,14,1,0,0,0,3,0,29,34,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class tracLexer extends antlr4.Lexer {

    static grammarFileName = "trac.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'#'", "'('", "','", "')'", "'##'" ];
	static symbolicNames = [ null, null, null, null, null, null, "STRING", 
                          "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "STRING", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

tracLexer.EOF = antlr4.Token.EOF;
tracLexer.T__0 = 1;
tracLexer.T__1 = 2;
tracLexer.T__2 = 3;
tracLexer.T__3 = 4;
tracLexer.T__4 = 5;
tracLexer.STRING = 6;
tracLexer.WS = 7;



