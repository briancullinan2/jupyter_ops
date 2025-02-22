// Generated from ./guitartab/guitartab.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,18,78,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,1,1,1,1,2,
1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,
11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,4,17,73,8,
17,11,17,12,17,74,1,17,1,17,0,0,18,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,
9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,1,0,2,2,0,111,111,
120,120,3,0,9,10,13,13,32,32,78,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,
1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,
0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,
0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,1,37,1,0,0,0,3,39,1,0,0,0,5,
41,1,0,0,0,7,43,1,0,0,0,9,45,1,0,0,0,11,47,1,0,0,0,13,49,1,0,0,0,15,51,1,
0,0,0,17,53,1,0,0,0,19,55,1,0,0,0,21,57,1,0,0,0,23,59,1,0,0,0,25,61,1,0,
0,0,27,63,1,0,0,0,29,65,1,0,0,0,31,67,1,0,0,0,33,69,1,0,0,0,35,72,1,0,0,
0,37,38,5,65,0,0,38,2,1,0,0,0,39,40,5,66,0,0,40,4,1,0,0,0,41,42,5,67,0,0,
42,6,1,0,0,0,43,44,5,68,0,0,44,8,1,0,0,0,45,46,5,69,0,0,46,10,1,0,0,0,47,
48,5,70,0,0,48,12,1,0,0,0,49,50,5,71,0,0,50,14,1,0,0,0,51,52,5,97,0,0,52,
16,1,0,0,0,53,54,5,98,0,0,54,18,1,0,0,0,55,56,5,99,0,0,56,20,1,0,0,0,57,
58,5,100,0,0,58,22,1,0,0,0,59,60,5,101,0,0,60,24,1,0,0,0,61,62,5,102,0,0,
62,26,1,0,0,0,63,64,5,103,0,0,64,28,1,0,0,0,65,66,7,0,0,0,66,30,1,0,0,0,
67,68,5,45,0,0,68,32,1,0,0,0,69,70,5,124,0,0,70,34,1,0,0,0,71,73,7,1,0,0,
72,71,1,0,0,0,73,74,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,76,1,0,0,0,76,
77,6,17,0,0,77,36,1,0,0,0,2,0,74,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class guitartabLexer extends antlr4.Lexer {

    static grammarFileName = "guitartab.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'A'", "'B'", "'C'", "'D'", "'E'", "'F'", 
                         "'G'", "'a'", "'b'", "'c'", "'d'", "'e'", "'f'", 
                         "'g'", null, "'-'", "'|'" ];
	static symbolicNames = [ null, "BA", "BB", "BC", "BD", "BE", "BF", "BG", 
                          "LA", "LB", "LC", "LD", "LE", "LF", "LG", "FINGER", 
                          "BARLNE", "FRET", "WHITESPACE" ];
	static ruleNames = [ "BA", "BB", "BC", "BD", "BE", "BF", "BG", "LA", "LB", 
                      "LC", "LD", "LE", "LF", "LG", "FINGER", "BARLNE", 
                      "FRET", "WHITESPACE" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

guitartabLexer.EOF = antlr4.Token.EOF;
guitartabLexer.BA = 1;
guitartabLexer.BB = 2;
guitartabLexer.BC = 3;
guitartabLexer.BD = 4;
guitartabLexer.BE = 5;
guitartabLexer.BF = 6;
guitartabLexer.BG = 7;
guitartabLexer.LA = 8;
guitartabLexer.LB = 9;
guitartabLexer.LC = 10;
guitartabLexer.LD = 11;
guitartabLexer.LE = 12;
guitartabLexer.LF = 13;
guitartabLexer.LG = 14;
guitartabLexer.FINGER = 15;
guitartabLexer.BARLNE = 16;
guitartabLexer.FRET = 17;
guitartabLexer.WHITESPACE = 18;



