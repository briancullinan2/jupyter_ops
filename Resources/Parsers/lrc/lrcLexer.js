// Generated from ./lrc/lrcLexer.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,7,53,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,
3,2,4,7,4,2,5,7,5,2,6,7,6,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,
2,1,3,4,3,30,8,3,11,3,12,3,31,1,4,4,4,35,8,4,11,4,12,4,36,1,4,1,4,1,5,4,
5,42,8,5,11,5,12,5,43,1,6,4,6,47,8,6,11,6,12,6,48,1,6,1,6,1,6,0,0,7,2,1,
4,2,6,3,8,4,10,5,12,6,14,7,2,0,1,3,1,0,48,57,3,0,9,10,13,13,32,32,2,0,10,
10,13,13,55,0,2,1,0,0,0,0,4,1,0,0,0,0,6,1,0,0,0,0,8,1,0,0,0,0,10,1,0,0,0,
1,12,1,0,0,0,1,14,1,0,0,0,2,16,1,0,0,0,4,18,1,0,0,0,6,22,1,0,0,0,8,29,1,
0,0,0,10,34,1,0,0,0,12,41,1,0,0,0,14,46,1,0,0,0,16,17,5,91,0,0,17,3,1,0,
0,0,18,19,5,93,0,0,19,20,1,0,0,0,20,21,6,1,0,0,21,5,1,0,0,0,22,23,3,8,3,
0,23,24,5,58,0,0,24,25,3,8,3,0,25,26,5,46,0,0,26,27,3,8,3,0,27,7,1,0,0,0,
28,30,7,0,0,0,29,28,1,0,0,0,30,31,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,
9,1,0,0,0,33,35,7,1,0,0,34,33,1,0,0,0,35,36,1,0,0,0,36,34,1,0,0,0,36,37,
1,0,0,0,37,38,1,0,0,0,38,39,6,4,1,0,39,11,1,0,0,0,40,42,8,2,0,0,41,40,1,
0,0,0,42,43,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,13,1,0,0,0,45,47,7,2,
0,0,46,45,1,0,0,0,47,48,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,
0,50,51,6,6,1,0,51,52,6,6,2,0,52,15,1,0,0,0,6,0,1,31,36,43,48,3,5,1,0,6,
0,0,4,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class lrcLexer extends antlr4.Lexer {

    static grammarFileName = "lrcLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE", "LINETEXT" ];
	static literalNames = [ null, "'['", "']'" ];
	static symbolicNames = [ null, "LB", "RB", "TIMESTAMP", "NUM", "WS", "TEXT", 
                          "EOL" ];
	static ruleNames = [ "LB", "RB", "TIMESTAMP", "NUM", "WS", "TEXT", "EOL" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

lrcLexer.EOF = antlr4.Token.EOF;
lrcLexer.LB = 1;
lrcLexer.RB = 2;
lrcLexer.TIMESTAMP = 3;
lrcLexer.NUM = 4;
lrcLexer.WS = 5;
lrcLexer.TEXT = 6;
lrcLexer.EOL = 7;

lrcLexer.LINETEXT = 1;




