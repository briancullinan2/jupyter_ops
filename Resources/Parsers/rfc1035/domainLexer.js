// Generated from ./rfc1035/domain.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,8,50,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,1,1,2,1,2,5,2,24,8,2,10,2,12,2,
27,9,2,1,2,5,2,30,8,2,10,2,12,2,33,9,2,1,3,1,3,3,3,37,8,3,1,4,1,4,3,4,41,
8,4,1,5,1,5,3,5,45,8,5,1,6,1,6,1,7,1,7,0,0,8,1,1,3,2,5,3,7,4,9,5,11,6,13,
7,15,8,1,0,2,2,0,65,90,97,122,1,0,48,57,54,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,
0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,1,17,
1,0,0,0,3,19,1,0,0,0,5,21,1,0,0,0,7,34,1,0,0,0,9,40,1,0,0,0,11,44,1,0,0,
0,13,46,1,0,0,0,15,48,1,0,0,0,17,18,5,32,0,0,18,2,1,0,0,0,19,20,5,46,0,0,
20,4,1,0,0,0,21,31,3,13,6,0,22,24,3,7,3,0,23,22,1,0,0,0,24,27,1,0,0,0,25,
23,1,0,0,0,25,26,1,0,0,0,26,28,1,0,0,0,27,25,1,0,0,0,28,30,3,11,5,0,29,25,
1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,6,1,0,0,0,33,31,1,0,
0,0,34,36,3,9,4,0,35,37,3,7,3,0,36,35,1,0,0,0,36,37,1,0,0,0,37,8,1,0,0,0,
38,41,3,11,5,0,39,41,5,45,0,0,40,38,1,0,0,0,40,39,1,0,0,0,41,10,1,0,0,0,
42,45,3,13,6,0,43,45,3,15,7,0,44,42,1,0,0,0,44,43,1,0,0,0,45,12,1,0,0,0,
46,47,7,0,0,0,47,14,1,0,0,0,48,49,7,1,0,0,49,16,1,0,0,0,6,0,25,31,36,40,
44,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class domainLexer extends antlr4.Lexer {

    static grammarFileName = "domain.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "' '", "'.'" ];
	static symbolicNames = [ null, null, null, "LABEL", "LDH_STR", "LET_DIG_HYP", 
                          "LET_DIG", "LETTER", "DIGIT" ];
	static ruleNames = [ "T__0", "T__1", "LABEL", "LDH_STR", "LET_DIG_HYP", 
                      "LET_DIG", "LETTER", "DIGIT" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

domainLexer.EOF = antlr4.Token.EOF;
domainLexer.T__0 = 1;
domainLexer.T__1 = 2;
domainLexer.LABEL = 3;
domainLexer.LDH_STR = 4;
domainLexer.LET_DIG_HYP = 5;
domainLexer.LET_DIG = 6;
domainLexer.LETTER = 7;
domainLexer.DIGIT = 8;



