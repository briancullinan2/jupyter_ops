// Generated from Resources/Parsers/ltl/ltl.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,16,80,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,
1,1,1,2,1,2,1,3,1,3,1,4,4,4,50,8,4,11,4,12,4,51,1,5,1,5,1,6,1,6,1,7,1,7,
1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,4,
15,75,8,15,11,15,12,15,76,1,15,1,15,0,0,16,1,1,3,2,5,3,7,4,9,5,11,6,13,7,
15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,1,0,2,1,0,97,122,3,0,
9,10,13,13,32,32,81,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,
1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,
0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,
0,0,0,1,33,1,0,0,0,3,38,1,0,0,0,5,44,1,0,0,0,7,46,1,0,0,0,9,49,1,0,0,0,11,
53,1,0,0,0,13,55,1,0,0,0,15,57,1,0,0,0,17,59,1,0,0,0,19,61,1,0,0,0,21,63,
1,0,0,0,23,65,1,0,0,0,25,67,1,0,0,0,27,69,1,0,0,0,29,71,1,0,0,0,31,74,1,
0,0,0,33,34,5,116,0,0,34,35,5,114,0,0,35,36,5,117,0,0,36,37,5,101,0,0,37,
2,1,0,0,0,38,39,5,102,0,0,39,40,5,97,0,0,40,41,5,108,0,0,41,42,5,115,0,0,
42,43,5,101,0,0,43,4,1,0,0,0,44,45,5,40,0,0,45,6,1,0,0,0,46,47,5,41,0,0,
47,8,1,0,0,0,48,50,7,0,0,0,49,48,1,0,0,0,50,51,1,0,0,0,51,49,1,0,0,0,51,
52,1,0,0,0,52,10,1,0,0,0,53,54,5,85,0,0,54,12,1,0,0,0,55,56,5,71,0,0,56,
14,1,0,0,0,57,58,5,70,0,0,58,16,1,0,0,0,59,60,5,88,0,0,60,18,1,0,0,0,61,
62,5,87,0,0,62,20,1,0,0,0,63,64,5,82,0,0,64,22,1,0,0,0,65,66,5,8594,0,0,
66,24,1,0,0,0,67,68,5,8743,0,0,68,26,1,0,0,0,69,70,5,8744,0,0,70,28,1,0,
0,0,71,72,5,8976,0,0,72,30,1,0,0,0,73,75,7,1,0,0,74,73,1,0,0,0,75,76,1,0,
0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,78,1,0,0,0,78,79,6,15,0,0,79,32,1,0,0,
0,3,0,51,76,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ltlLexer extends antlr4.Lexer {

    static grammarFileName = "ltl.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'true'", "'false'", "'('", "')'", null, 
                         "'U'", "'G'", "'F'", "'X'", "'W'", "'R'", "'\\u2192'", 
                         "'\\u2227'", "'\\u2228'", "'\\u2310'" ];
	static symbolicNames = [ null, null, null, null, null, "ATOMIC", "LTL_UNTIL", 
                          "LTL_GLOBALLY", "LTL_FINALLY", "LTL_NEXT", "LTL_WEAK", 
                          "LTL_RELEASE", "LTL_RIGHTWARDS_SINGLE_ARROW", 
                          "LTL_AND", "LTL_OR", "LTL_NOT", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "ATOMIC", "LTL_UNTIL", 
                      "LTL_GLOBALLY", "LTL_FINALLY", "LTL_NEXT", "LTL_WEAK", 
                      "LTL_RELEASE", "LTL_RIGHTWARDS_SINGLE_ARROW", "LTL_AND", 
                      "LTL_OR", "LTL_NOT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

ltlLexer.EOF = antlr4.Token.EOF;
ltlLexer.T__0 = 1;
ltlLexer.T__1 = 2;
ltlLexer.T__2 = 3;
ltlLexer.T__3 = 4;
ltlLexer.ATOMIC = 5;
ltlLexer.LTL_UNTIL = 6;
ltlLexer.LTL_GLOBALLY = 7;
ltlLexer.LTL_FINALLY = 8;
ltlLexer.LTL_NEXT = 9;
ltlLexer.LTL_WEAK = 10;
ltlLexer.LTL_RELEASE = 11;
ltlLexer.LTL_RIGHTWARDS_SINGLE_ARROW = 12;
ltlLexer.LTL_AND = 13;
ltlLexer.LTL_OR = 14;
ltlLexer.LTL_NOT = 15;
ltlLexer.WS = 16;


