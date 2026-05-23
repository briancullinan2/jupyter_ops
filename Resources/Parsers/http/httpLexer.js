// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/http/http.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,33,139,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,
27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,1,0,1,0,1,0,1,
0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,
9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,
16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,
1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,
31,1,31,1,32,1,32,1,32,3,32,138,8,32,0,0,33,1,1,3,2,5,3,7,4,9,5,11,6,13,
7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,
39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,
63,32,65,33,1,0,3,1,0,48,57,1,0,65,70,2,0,65,90,97,122,139,0,1,1,0,0,0,0,
3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,
0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,
0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,
37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,
0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,
1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,1,67,1,0,0,0,3,72,1,0,0,0,
5,74,1,0,0,0,7,76,1,0,0,0,9,78,1,0,0,0,11,80,1,0,0,0,13,82,1,0,0,0,15,84,
1,0,0,0,17,86,1,0,0,0,19,88,1,0,0,0,21,90,1,0,0,0,23,92,1,0,0,0,25,94,1,
0,0,0,27,96,1,0,0,0,29,98,1,0,0,0,31,100,1,0,0,0,33,102,1,0,0,0,35,104,1,
0,0,0,37,106,1,0,0,0,39,108,1,0,0,0,41,110,1,0,0,0,43,112,1,0,0,0,45,114,
1,0,0,0,47,116,1,0,0,0,49,118,1,0,0,0,51,120,1,0,0,0,53,122,1,0,0,0,55,124,
1,0,0,0,57,126,1,0,0,0,59,128,1,0,0,0,61,130,1,0,0,0,63,132,1,0,0,0,65,137,
1,0,0,0,67,68,5,72,0,0,68,69,5,84,0,0,69,70,5,84,0,0,70,71,5,80,0,0,71,2,
1,0,0,0,72,73,5,40,0,0,73,4,1,0,0,0,74,75,5,41,0,0,75,6,1,0,0,0,76,77,5,
59,0,0,77,8,1,0,0,0,78,79,5,61,0,0,79,10,1,0,0,0,80,81,5,44,0,0,81,12,1,
0,0,0,82,83,5,45,0,0,83,14,1,0,0,0,84,85,5,46,0,0,85,16,1,0,0,0,86,87,5,
95,0,0,87,18,1,0,0,0,88,89,5,126,0,0,89,20,1,0,0,0,90,91,5,63,0,0,91,22,
1,0,0,0,92,93,5,47,0,0,93,24,1,0,0,0,94,95,5,33,0,0,95,26,1,0,0,0,96,97,
5,58,0,0,97,28,1,0,0,0,98,99,5,64,0,0,99,30,1,0,0,0,100,101,5,36,0,0,101,
32,1,0,0,0,102,103,5,35,0,0,103,34,1,0,0,0,104,105,5,38,0,0,105,36,1,0,0,
0,106,107,5,37,0,0,107,38,1,0,0,0,108,109,5,39,0,0,109,40,1,0,0,0,110,111,
5,42,0,0,111,42,1,0,0,0,112,113,5,43,0,0,113,44,1,0,0,0,114,115,5,94,0,0,
115,46,1,0,0,0,116,117,5,96,0,0,117,48,1,0,0,0,118,119,5,124,0,0,119,50,
1,0,0,0,120,121,7,0,0,0,121,52,1,0,0,0,122,123,7,1,0,0,123,54,1,0,0,0,124,
125,7,2,0,0,125,56,1,0,0,0,126,127,2,33,126,0,127,58,1,0,0,0,128,129,2,128,
255,0,129,60,1,0,0,0,130,131,5,32,0,0,131,62,1,0,0,0,132,133,5,9,0,0,133,
64,1,0,0,0,134,135,5,13,0,0,135,138,5,10,0,0,136,138,5,10,0,0,137,134,1,
0,0,0,137,136,1,0,0,0,138,66,1,0,0,0,2,0,137,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class httpLexer extends antlr4.Lexer {

    static grammarFileName = "http.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'HTTP'", "'('", "')'", "';'", "'='", "','", 
                         "'-'", "'.'", "'_'", "'~'", "'?'", "'/'", "'!'", 
                         "':'", "'@'", "'$'", "'#'", "'&'", "'%'", "'''", 
                         "'*'", "'+'", "'^'", "'`'", "'|'", null, null, 
                         null, null, null, "' '", "'\\t'" ];
	static symbolicNames = [ null, null, "LCOLUMN", "RCOLUMN", "SEMICOLON", 
                          "EQUALS", "PERIOD", "MINUS", "DOT", "UNDERSCORE", 
                          "TILDE", "QUESTION_MARK", "SLASH", "EXCLAMATION_MARK", 
                          "COLON", "AT", "DOLLAR_SIGN", "HASHTAG", "AMPERSAND", 
                          "PERCENT", "SQUOTE", "STAR", "PLUS", "CARET", 
                          "BACK_QUOTE", "VBAR", "DIGIT", "HEX_LETTER", "ALPHA", 
                          "VCHAR", "OBS_TEXT", "SP", "HTAB", "CRLF" ];
	static ruleNames = [ "T__0", "LCOLUMN", "RCOLUMN", "SEMICOLON", "EQUALS", 
                      "PERIOD", "MINUS", "DOT", "UNDERSCORE", "TILDE", "QUESTION_MARK", 
                      "SLASH", "EXCLAMATION_MARK", "COLON", "AT", "DOLLAR_SIGN", 
                      "HASHTAG", "AMPERSAND", "PERCENT", "SQUOTE", "STAR", 
                      "PLUS", "CARET", "BACK_QUOTE", "VBAR", "DIGIT", "HEX_LETTER", 
                      "ALPHA", "VCHAR", "OBS_TEXT", "SP", "HTAB", "CRLF" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

httpLexer.EOF = antlr4.Token.EOF;
httpLexer.T__0 = 1;
httpLexer.LCOLUMN = 2;
httpLexer.RCOLUMN = 3;
httpLexer.SEMICOLON = 4;
httpLexer.EQUALS = 5;
httpLexer.PERIOD = 6;
httpLexer.MINUS = 7;
httpLexer.DOT = 8;
httpLexer.UNDERSCORE = 9;
httpLexer.TILDE = 10;
httpLexer.QUESTION_MARK = 11;
httpLexer.SLASH = 12;
httpLexer.EXCLAMATION_MARK = 13;
httpLexer.COLON = 14;
httpLexer.AT = 15;
httpLexer.DOLLAR_SIGN = 16;
httpLexer.HASHTAG = 17;
httpLexer.AMPERSAND = 18;
httpLexer.PERCENT = 19;
httpLexer.SQUOTE = 20;
httpLexer.STAR = 21;
httpLexer.PLUS = 22;
httpLexer.CARET = 23;
httpLexer.BACK_QUOTE = 24;
httpLexer.VBAR = 25;
httpLexer.DIGIT = 26;
httpLexer.HEX_LETTER = 27;
httpLexer.ALPHA = 28;
httpLexer.VCHAR = 29;
httpLexer.OBS_TEXT = 30;
httpLexer.SP = 31;
httpLexer.HTAB = 32;
httpLexer.CRLF = 33;




// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
