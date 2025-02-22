// Generated from ./ttm/ttm.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,8,50,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,4,1,4,
1,4,1,4,1,5,1,5,4,5,33,8,5,11,5,12,5,34,1,5,1,5,1,6,4,6,40,8,6,11,6,12,6,
41,1,7,4,7,45,8,7,11,7,12,7,46,1,7,1,7,0,0,8,1,1,3,2,5,3,7,4,9,5,11,6,13,
7,15,8,1,0,3,2,0,65,90,97,122,9,0,32,39,42,43,45,46,48,57,61,61,63,90,95,
95,97,122,124,124,3,0,9,10,13,13,32,32,52,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,
0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,1,17,
1,0,0,0,3,19,1,0,0,0,5,21,1,0,0,0,7,23,1,0,0,0,9,26,1,0,0,0,11,30,1,0,0,
0,13,39,1,0,0,0,15,44,1,0,0,0,17,18,5,59,0,0,18,2,1,0,0,0,19,20,5,62,0,0,
20,4,1,0,0,0,21,22,5,60,0,0,22,6,1,0,0,0,23,24,5,35,0,0,24,25,5,60,0,0,25,
8,1,0,0,0,26,27,5,35,0,0,27,28,5,35,0,0,28,29,5,60,0,0,29,10,1,0,0,0,30,
32,5,60,0,0,31,33,7,0,0,0,32,31,1,0,0,0,33,34,1,0,0,0,34,32,1,0,0,0,34,35,
1,0,0,0,35,36,1,0,0,0,36,37,5,62,0,0,37,12,1,0,0,0,38,40,7,1,0,0,39,38,1,
0,0,0,40,41,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,14,1,0,0,0,43,45,7,2,
0,0,44,43,1,0,0,0,45,46,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,48,1,0,0,
0,48,49,6,7,0,0,49,16,1,0,0,0,4,0,34,41,46,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ttmLexer extends antlr4.Lexer {

    static grammarFileName = "ttm.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "';'", "'>'", "'<'", "'#<'", "'##<'" ];
	static symbolicNames = [ null, null, null, null, "ACTIVE", "NEUTRAL", "ESCSTRING", 
                          "STRING", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "ACTIVE", "NEUTRAL", "ESCSTRING", 
                      "STRING", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

ttmLexer.EOF = antlr4.Token.EOF;
ttmLexer.T__0 = 1;
ttmLexer.T__1 = 2;
ttmLexer.T__2 = 3;
ttmLexer.ACTIVE = 4;
ttmLexer.NEUTRAL = 5;
ttmLexer.ESCSTRING = 6;
ttmLexer.STRING = 7;
ttmLexer.WS = 8;



