// Generated from Resources/Parsers/brainflak/brainflak.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,9,39,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,
1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,0,0,9,1,1,3,2,5,3,7,4,9,5,11,
6,13,7,15,8,17,9,1,0,0,38,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,
0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,1,19,1,
0,0,0,3,21,1,0,0,0,5,23,1,0,0,0,7,25,1,0,0,0,9,27,1,0,0,0,11,29,1,0,0,0,
13,31,1,0,0,0,15,33,1,0,0,0,17,35,1,0,0,0,19,20,5,40,0,0,20,2,1,0,0,0,21,
22,5,41,0,0,22,4,1,0,0,0,23,24,5,62,0,0,24,6,1,0,0,0,25,26,5,60,0,0,26,8,
1,0,0,0,27,28,5,123,0,0,28,10,1,0,0,0,29,30,5,125,0,0,30,12,1,0,0,0,31,32,
5,91,0,0,32,14,1,0,0,0,33,34,5,93,0,0,34,16,1,0,0,0,35,36,9,0,0,0,36,37,
1,0,0,0,37,38,6,8,0,0,38,18,1,0,0,0,1,0,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class brainflakLexer extends antlr4.Lexer {

    static grammarFileName = "brainflak.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'('", "')'", "'>'", "'<'", "'{'", "'}'", 
                         "'['", "']'" ];
	static symbolicNames = [ null, "LPAREN", "RPAREN", "GT", "LT", "LBRACE", 
                          "RBRACE", "LBRACK", "RBRACK", "WS" ];
	static ruleNames = [ "LPAREN", "RPAREN", "GT", "LT", "LBRACE", "RBRACE", 
                      "LBRACK", "RBRACK", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

brainflakLexer.EOF = antlr4.Token.EOF;
brainflakLexer.LPAREN = 1;
brainflakLexer.RPAREN = 2;
brainflakLexer.GT = 3;
brainflakLexer.LT = 4;
brainflakLexer.LBRACE = 5;
brainflakLexer.RBRACE = 6;
brainflakLexer.LBRACK = 7;
brainflakLexer.RBRACK = 8;
brainflakLexer.WS = 9;



