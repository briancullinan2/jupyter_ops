// Generated from ./doiurl/doiurl.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,7,68,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,5,3,5,43,8,5,1,
6,1,6,1,6,3,6,48,8,6,1,7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,
1,12,4,12,63,8,12,11,12,12,12,64,1,12,1,12,0,0,13,1,1,3,2,5,3,7,4,9,5,11,
6,13,0,15,0,17,0,19,0,21,0,23,0,25,7,1,0,6,6,0,36,36,38,38,43,44,58,59,61,
61,64,64,5,0,33,33,39,42,45,46,95,95,126,126,2,0,65,90,97,122,1,0,48,57,
2,0,48,57,65,70,3,0,9,10,13,13,32,32,66,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,
0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,25,1,0,0,0,1,27,1,0,0,0,3,29,
1,0,0,0,5,31,1,0,0,0,7,33,1,0,0,0,9,37,1,0,0,0,11,42,1,0,0,0,13,47,1,0,0,
0,15,49,1,0,0,0,17,53,1,0,0,0,19,55,1,0,0,0,21,57,1,0,0,0,23,59,1,0,0,0,
25,62,1,0,0,0,27,28,5,58,0,0,28,2,1,0,0,0,29,30,5,63,0,0,30,4,1,0,0,0,31,
32,5,35,0,0,32,6,1,0,0,0,33,34,5,100,0,0,34,35,5,111,0,0,35,36,5,105,0,0,
36,8,1,0,0,0,37,38,5,47,0,0,38,10,1,0,0,0,39,43,3,13,6,0,40,43,3,15,7,0,
41,43,7,0,0,0,42,39,1,0,0,0,42,40,1,0,0,0,42,41,1,0,0,0,43,12,1,0,0,0,44,
48,3,19,9,0,45,48,3,21,10,0,46,48,3,17,8,0,47,44,1,0,0,0,47,45,1,0,0,0,47,
46,1,0,0,0,48,14,1,0,0,0,49,50,5,37,0,0,50,51,3,23,11,0,51,52,3,23,11,0,
52,16,1,0,0,0,53,54,7,1,0,0,54,18,1,0,0,0,55,56,7,2,0,0,56,20,1,0,0,0,57,
58,7,3,0,0,58,22,1,0,0,0,59,60,7,4,0,0,60,24,1,0,0,0,61,63,7,5,0,0,62,61,
1,0,0,0,63,64,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,66,1,0,0,0,66,67,6,
12,0,0,67,26,1,0,0,0,4,0,42,47,64,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class doiurlLexer extends antlr4.Lexer {

    static grammarFileName = "doiurl.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "':'", "'?'", "'#'", "'doi'", "'/'" ];
	static symbolicNames = [ null, null, null, null, null, null, "PCHAR", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "PCHAR", "UNRESERVED", 
                      "ESCAPED", "MARK", "ALPHA", "DIGIT", "HEXDIG", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

doiurlLexer.EOF = antlr4.Token.EOF;
doiurlLexer.T__0 = 1;
doiurlLexer.T__1 = 2;
doiurlLexer.T__2 = 3;
doiurlLexer.T__3 = 4;
doiurlLexer.T__4 = 5;
doiurlLexer.PCHAR = 6;
doiurlLexer.WS = 7;



