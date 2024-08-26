// Generated from Resources/Parsers/cookie/cookie.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,6,37,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,1,0,1,0,1,1,1,1,1,2,1,2,5,2,20,8,2,10,2,12,2,23,9,2,1,2,1,2,
1,3,4,3,28,8,3,11,3,12,3,29,1,4,1,4,1,5,1,5,1,5,1,5,0,0,6,1,1,3,2,5,3,7,
4,9,5,11,6,1,0,3,2,0,10,10,34,34,6,0,32,32,44,45,47,58,65,90,95,95,97,122,
2,0,9,10,13,13,38,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,
0,0,0,0,11,1,0,0,0,1,13,1,0,0,0,3,15,1,0,0,0,5,17,1,0,0,0,7,27,1,0,0,0,9,
31,1,0,0,0,11,33,1,0,0,0,13,14,5,59,0,0,14,2,1,0,0,0,15,16,5,61,0,0,16,4,
1,0,0,0,17,21,5,34,0,0,18,20,8,0,0,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,
0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,21,1,0,0,0,24,25,5,34,0,0,25,6,1,0,
0,0,26,28,7,1,0,0,27,26,1,0,0,0,28,29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,
0,30,8,1,0,0,0,31,32,2,48,57,0,32,10,1,0,0,0,33,34,7,2,0,0,34,35,1,0,0,0,
35,36,6,5,0,0,36,12,1,0,0,0,3,0,21,29,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class cookieLexer extends antlr4.Lexer {

    static grammarFileName = "cookie.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "';'", "'='" ];
	static symbolicNames = [ null, null, null, "STRING", "TOKEN", "DIGIT", 
                          "WS" ];
	static ruleNames = [ "T__0", "T__1", "STRING", "TOKEN", "DIGIT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

cookieLexer.EOF = antlr4.Token.EOF;
cookieLexer.T__0 = 1;
cookieLexer.T__1 = 2;
cookieLexer.STRING = 3;
cookieLexer.TOKEN = 4;
cookieLexer.DIGIT = 5;
cookieLexer.WS = 6;



