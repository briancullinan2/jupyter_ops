// Generated from ./sexpression/sexpression.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,7,72,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,0,5,0,24,8,0,10,0,12,0,
27,9,0,1,0,1,0,1,1,4,1,32,8,1,11,1,12,1,33,1,1,1,1,1,2,3,2,39,8,2,1,2,4,
2,42,8,2,11,2,12,2,43,1,2,1,2,4,2,48,8,2,11,2,12,2,49,3,2,52,8,2,1,3,1,3,
1,3,5,3,57,8,3,10,3,12,3,60,9,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,3,7,69,8,7,1,
8,1,8,0,0,9,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,0,17,0,1,0,4,2,0,34,34,92,92,
3,0,9,10,13,13,32,32,2,0,43,43,45,45,4,0,42,43,45,47,65,90,97,122,78,0,1,
1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,
1,0,0,0,1,19,1,0,0,0,3,31,1,0,0,0,5,38,1,0,0,0,7,53,1,0,0,0,9,61,1,0,0,0,
11,63,1,0,0,0,13,65,1,0,0,0,15,68,1,0,0,0,17,70,1,0,0,0,19,25,5,34,0,0,20,
21,5,92,0,0,21,24,9,0,0,0,22,24,8,0,0,0,23,20,1,0,0,0,23,22,1,0,0,0,24,27,
1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,28,1,0,0,0,27,25,1,0,0,0,28,29,5,
34,0,0,29,2,1,0,0,0,30,32,7,1,0,0,31,30,1,0,0,0,32,33,1,0,0,0,33,31,1,0,
0,0,33,34,1,0,0,0,34,35,1,0,0,0,35,36,6,1,0,0,36,4,1,0,0,0,37,39,7,2,0,0,
38,37,1,0,0,0,38,39,1,0,0,0,39,41,1,0,0,0,40,42,3,17,8,0,41,40,1,0,0,0,42,
43,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,51,1,0,0,0,45,47,5,46,0,0,46,48,
3,17,8,0,47,46,1,0,0,0,48,49,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,52,1,
0,0,0,51,45,1,0,0,0,51,52,1,0,0,0,52,6,1,0,0,0,53,58,3,15,7,0,54,57,3,15,
7,0,55,57,3,17,8,0,56,54,1,0,0,0,56,55,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,
0,58,59,1,0,0,0,59,8,1,0,0,0,60,58,1,0,0,0,61,62,5,40,0,0,62,10,1,0,0,0,
63,64,5,41,0,0,64,12,1,0,0,0,65,66,5,46,0,0,66,14,1,0,0,0,67,69,7,3,0,0,
68,67,1,0,0,0,69,16,1,0,0,0,70,71,2,48,57,0,71,18,1,0,0,0,11,0,23,25,33,
38,43,49,51,56,58,68,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class sexpressionLexer extends antlr4.Lexer {

    static grammarFileName = "sexpression.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, null, null, "'('", "')'", "'.'" ];
	static symbolicNames = [ null, "STRING", "WHITESPACE", "NUMBER", "SYMBOL", 
                          "LPAREN", "RPAREN", "DOT" ];
	static ruleNames = [ "STRING", "WHITESPACE", "NUMBER", "SYMBOL", "LPAREN", 
                      "RPAREN", "DOT", "SYMBOL_START", "DIGIT" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

sexpressionLexer.EOF = antlr4.Token.EOF;
sexpressionLexer.STRING = 1;
sexpressionLexer.WHITESPACE = 2;
sexpressionLexer.NUMBER = 3;
sexpressionLexer.SYMBOL = 4;
sexpressionLexer.LPAREN = 5;
sexpressionLexer.RPAREN = 6;
sexpressionLexer.DOT = 7;



