// Generated from ./rfc3080/beep.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,11,70,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,1,1,1,
1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,
1,6,1,6,1,7,4,7,49,8,7,11,7,12,7,50,1,8,1,8,1,9,4,9,56,8,9,11,9,12,9,57,
1,10,1,10,5,10,62,8,10,10,10,12,10,65,9,10,1,10,1,10,1,10,1,10,1,63,0,11,
1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,1,0,2,1,0,48,57,2,0,
10,10,13,13,72,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,
0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,
1,0,0,0,1,23,1,0,0,0,3,25,1,0,0,0,5,27,1,0,0,0,7,31,1,0,0,0,9,35,1,0,0,0,
11,39,1,0,0,0,13,43,1,0,0,0,15,48,1,0,0,0,17,52,1,0,0,0,19,55,1,0,0,0,21,
59,1,0,0,0,23,24,5,46,0,0,24,2,1,0,0,0,25,26,5,42,0,0,26,4,1,0,0,0,27,28,
5,78,0,0,28,29,5,85,0,0,29,30,5,76,0,0,30,6,1,0,0,0,31,32,5,69,0,0,32,33,
5,82,0,0,33,34,5,82,0,0,34,8,1,0,0,0,35,36,5,65,0,0,36,37,5,78,0,0,37,38,
5,83,0,0,38,10,1,0,0,0,39,40,5,82,0,0,40,41,5,80,0,0,41,42,5,89,0,0,42,12,
1,0,0,0,43,44,5,77,0,0,44,45,5,83,0,0,45,46,5,71,0,0,46,14,1,0,0,0,47,49,
7,0,0,0,48,47,1,0,0,0,49,50,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,16,1,
0,0,0,52,53,5,32,0,0,53,18,1,0,0,0,54,56,7,1,0,0,55,54,1,0,0,0,56,57,1,0,
0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,20,1,0,0,0,59,63,3,19,9,0,60,62,9,0,0,
0,61,60,1,0,0,0,62,65,1,0,0,0,63,64,1,0,0,0,63,61,1,0,0,0,64,66,1,0,0,0,
65,63,1,0,0,0,66,67,5,69,0,0,67,68,5,78,0,0,68,69,5,68,0,0,69,22,1,0,0,0,
4,0,50,57,63,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class beepLexer extends antlr4.Lexer {

    static grammarFileName = "beep.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'.'", "'*'", "'NUL'", "'ERR'", "'ANS'", 
                         "'RPY'", "'MSG'", null, "' '" ];
	static symbolicNames = [ null, "DOT", "STAR", "NUL", "ERR", "ANS", "RPY", 
                          "MSG", "NUMBER", "SP", "CRLF", "PAYLOAD_TRAILER" ];
	static ruleNames = [ "DOT", "STAR", "NUL", "ERR", "ANS", "RPY", "MSG", 
                      "NUMBER", "SP", "CRLF", "PAYLOAD_TRAILER" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

beepLexer.EOF = antlr4.Token.EOF;
beepLexer.DOT = 1;
beepLexer.STAR = 2;
beepLexer.NUL = 3;
beepLexer.ERR = 4;
beepLexer.ANS = 5;
beepLexer.RPY = 6;
beepLexer.MSG = 7;
beepLexer.NUMBER = 8;
beepLexer.SP = 9;
beepLexer.CRLF = 10;
beepLexer.PAYLOAD_TRAILER = 11;



