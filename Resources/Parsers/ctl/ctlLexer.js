// Generated from ./ctl/ctl.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,20,89,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,4,4,51,8,4,11,4,12,4,52,1,5,1,5,1,6,
1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,
1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,4,19,84,8,19,11,19,12,
19,85,1,19,1,19,0,0,20,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,
11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,1,0,2,1,0,97,122,
3,0,9,10,13,13,32,32,90,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,
0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,
0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,
1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,1,41,1,0,0,0,
3,43,1,0,0,0,5,45,1,0,0,0,7,47,1,0,0,0,9,50,1,0,0,0,11,54,1,0,0,0,13,56,
1,0,0,0,15,58,1,0,0,0,17,60,1,0,0,0,19,62,1,0,0,0,21,64,1,0,0,0,23,66,1,
0,0,0,25,68,1,0,0,0,27,70,1,0,0,0,29,72,1,0,0,0,31,74,1,0,0,0,33,76,1,0,
0,0,35,78,1,0,0,0,37,80,1,0,0,0,39,83,1,0,0,0,41,42,5,91,0,0,42,2,1,0,0,
0,43,44,5,93,0,0,44,4,1,0,0,0,45,46,5,40,0,0,46,6,1,0,0,0,47,48,5,41,0,0,
48,8,1,0,0,0,49,51,7,0,0,0,50,49,1,0,0,0,51,52,1,0,0,0,52,50,1,0,0,0,52,
53,1,0,0,0,53,10,1,0,0,0,54,55,5,85,0,0,55,12,1,0,0,0,56,57,5,71,0,0,57,
14,1,0,0,0,58,59,5,70,0,0,59,16,1,0,0,0,60,61,5,88,0,0,61,18,1,0,0,0,62,
63,5,65,0,0,63,20,1,0,0,0,64,65,5,69,0,0,65,22,1,0,0,0,66,67,5,8709,0,0,
67,24,1,0,0,0,68,69,5,8660,0,0,69,26,1,0,0,0,70,71,5,8658,0,0,71,28,1,0,
0,0,72,73,5,8743,0,0,73,30,1,0,0,0,74,75,5,8744,0,0,75,32,1,0,0,0,76,77,
5,8868,0,0,77,34,1,0,0,0,78,79,5,8869,0,0,79,36,1,0,0,0,80,81,5,8976,0,0,
81,38,1,0,0,0,82,84,7,1,0,0,83,82,1,0,0,0,84,85,1,0,0,0,85,83,1,0,0,0,85,
86,1,0,0,0,86,87,1,0,0,0,87,88,6,19,0,0,88,40,1,0,0,0,3,0,52,85,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ctlLexer extends antlr4.Lexer {

    static grammarFileName = "ctl.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'['", "']'", "'('", "')'", null, "'U'", 
                         "'G'", "'F'", "'X'", "'A'", "'E'", "'\\u2205'", 
                         "'\\u21D4'", "'\\u21D2'", "'\\u2227'", "'\\u2228'", 
                         "'\\u22A4'", "'\\u22A5'", "'\\u2310'" ];
	static symbolicNames = [ null, null, null, null, null, "ATOMIC", "CTL_UNTIL", 
                          "CTL_GLOBALLY", "CTL_FINALLY", "CTL_NEXT", "CTL_INEVITABLE", 
                          "CTL_EXISTS", "CTL_PROPOSITION", "CTL_LEFT_RIGHT_DOUBLE_ARROW", 
                          "CTL_RIGHTWARDS_DOUBLE_ARROW", "CTL_AND", "CTL_OR", 
                          "CTL_DOWNTACK", "CTL_UPTACK", "CTL_NOT", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "ATOMIC", "CTL_UNTIL", 
                      "CTL_GLOBALLY", "CTL_FINALLY", "CTL_NEXT", "CTL_INEVITABLE", 
                      "CTL_EXISTS", "CTL_PROPOSITION", "CTL_LEFT_RIGHT_DOUBLE_ARROW", 
                      "CTL_RIGHTWARDS_DOUBLE_ARROW", "CTL_AND", "CTL_OR", 
                      "CTL_DOWNTACK", "CTL_UPTACK", "CTL_NOT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

ctlLexer.EOF = antlr4.Token.EOF;
ctlLexer.T__0 = 1;
ctlLexer.T__1 = 2;
ctlLexer.T__2 = 3;
ctlLexer.T__3 = 4;
ctlLexer.ATOMIC = 5;
ctlLexer.CTL_UNTIL = 6;
ctlLexer.CTL_GLOBALLY = 7;
ctlLexer.CTL_FINALLY = 8;
ctlLexer.CTL_NEXT = 9;
ctlLexer.CTL_INEVITABLE = 10;
ctlLexer.CTL_EXISTS = 11;
ctlLexer.CTL_PROPOSITION = 12;
ctlLexer.CTL_LEFT_RIGHT_DOUBLE_ARROW = 13;
ctlLexer.CTL_RIGHTWARDS_DOUBLE_ARROW = 14;
ctlLexer.CTL_AND = 15;
ctlLexer.CTL_OR = 16;
ctlLexer.CTL_DOWNTACK = 17;
ctlLexer.CTL_UPTACK = 18;
ctlLexer.CTL_NOT = 19;
ctlLexer.WS = 20;



