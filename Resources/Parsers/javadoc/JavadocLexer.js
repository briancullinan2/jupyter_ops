// Generated from ./javadoc/JavadocLexer.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,12,118,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,4,
0,27,8,0,11,0,12,0,28,1,1,1,1,3,1,33,8,1,1,1,1,1,1,1,4,1,38,8,1,11,1,12,
1,39,3,1,42,8,1,1,1,1,1,1,1,1,1,3,1,48,8,1,1,1,1,1,1,1,4,1,53,8,1,11,1,12,
1,54,3,1,57,8,1,1,1,1,1,3,1,61,8,1,1,1,1,1,1,1,4,1,66,8,1,11,1,12,1,67,3,
1,70,8,1,3,1,72,8,1,1,2,4,2,75,8,2,11,2,12,2,76,1,3,4,3,80,8,3,11,3,12,3,
81,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,5,7,95,8,7,10,7,12,7,98,9,
7,1,8,3,8,101,8,8,1,8,5,8,104,8,8,10,8,12,8,107,9,8,1,8,1,8,1,8,1,9,1,9,
1,9,1,10,1,10,1,11,1,11,0,0,12,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
10,21,11,23,12,1,0,3,2,0,65,90,97,122,2,0,9,9,32,32,8,0,9,10,13,13,32,32,
42,42,47,47,64,90,97,123,125,125,134,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,
0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,
0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,26,1,0,0,0,3,71,1,0,0,0,5,74,
1,0,0,0,7,79,1,0,0,0,9,83,1,0,0,0,11,85,1,0,0,0,13,87,1,0,0,0,15,89,1,0,
0,0,17,100,1,0,0,0,19,111,1,0,0,0,21,114,1,0,0,0,23,116,1,0,0,0,25,27,7,
0,0,0,26,25,1,0,0,0,27,28,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,2,1,0,0,
0,30,41,5,10,0,0,31,33,3,5,2,0,32,31,1,0,0,0,32,33,1,0,0,0,33,37,1,0,0,0,
34,35,3,11,5,0,35,36,4,1,0,0,36,38,1,0,0,0,37,34,1,0,0,0,38,39,1,0,0,0,39,
37,1,0,0,0,39,40,1,0,0,0,40,42,1,0,0,0,41,32,1,0,0,0,41,42,1,0,0,0,42,72,
1,0,0,0,43,44,5,13,0,0,44,45,5,10,0,0,45,56,1,0,0,0,46,48,3,5,2,0,47,46,
1,0,0,0,47,48,1,0,0,0,48,52,1,0,0,0,49,50,3,11,5,0,50,51,4,1,1,0,51,53,1,
0,0,0,52,49,1,0,0,0,53,54,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,57,1,0,
0,0,56,47,1,0,0,0,56,57,1,0,0,0,57,72,1,0,0,0,58,69,5,13,0,0,59,61,3,5,2,
0,60,59,1,0,0,0,60,61,1,0,0,0,61,65,1,0,0,0,62,63,3,11,5,0,63,64,4,1,2,0,
64,66,1,0,0,0,65,62,1,0,0,0,66,67,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,
70,1,0,0,0,69,60,1,0,0,0,69,70,1,0,0,0,70,72,1,0,0,0,71,30,1,0,0,0,71,43,
1,0,0,0,71,58,1,0,0,0,72,4,1,0,0,0,73,75,7,1,0,0,74,73,1,0,0,0,75,76,1,0,
0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,6,1,0,0,0,78,80,8,2,0,0,79,78,1,0,0,0,
80,81,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,8,1,0,0,0,83,84,5,64,0,0,84,
10,1,0,0,0,85,86,5,42,0,0,86,12,1,0,0,0,87,88,5,47,0,0,88,14,1,0,0,0,89,
90,5,47,0,0,90,91,5,42,0,0,91,92,5,42,0,0,92,96,1,0,0,0,93,95,3,11,5,0,94,
93,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,97,16,1,0,0,0,98,96,
1,0,0,0,99,101,3,5,2,0,100,99,1,0,0,0,100,101,1,0,0,0,101,105,1,0,0,0,102,
104,3,11,5,0,103,102,1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,0,105,106,1,0,
0,0,106,108,1,0,0,0,107,105,1,0,0,0,108,109,5,42,0,0,109,110,5,47,0,0,110,
18,1,0,0,0,111,112,5,123,0,0,112,113,5,64,0,0,113,20,1,0,0,0,114,115,5,123,
0,0,115,22,1,0,0,0,116,117,5,125,0,0,117,24,1,0,0,0,17,0,28,32,39,41,47,
54,56,60,67,69,71,76,81,96,100,105,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class JavadocLexer extends antlr4.Lexer {

    static grammarFileName = "JavadocLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, null, null, "'@'", "'*'", "'/'", 
                         null, null, "'{@'", "'{'", "'}'" ];
	static symbolicNames = [ null, "NAME", "NEWLINE", "SPACE", "TEXT_CONTENT", 
                          "AT", "STAR", "SLASH", "JAVADOC_START", "JAVADOC_END", 
                          "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE" ];
	static ruleNames = [ "NAME", "NEWLINE", "SPACE", "TEXT_CONTENT", "AT", 
                      "STAR", "SLASH", "JAVADOC_START", "JAVADOC_END", "INLINE_TAG_START", 
                      "BRACE_OPEN", "BRACE_CLOSE" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

JavadocLexer.EOF = antlr4.Token.EOF;
JavadocLexer.NAME = 1;
JavadocLexer.NEWLINE = 2;
JavadocLexer.SPACE = 3;
JavadocLexer.TEXT_CONTENT = 4;
JavadocLexer.AT = 5;
JavadocLexer.STAR = 6;
JavadocLexer.SLASH = 7;
JavadocLexer.JAVADOC_START = 8;
JavadocLexer.JAVADOC_END = 9;
JavadocLexer.INLINE_TAG_START = 10;
JavadocLexer.BRACE_OPEN = 11;
JavadocLexer.BRACE_CLOSE = 12;

JavadocLexer.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch (ruleIndex) {
		case 1:
			return this.NEWLINE_sempred(localctx, predIndex);
    	default:
    		throw "No registered predicate for:" + ruleIndex;
    }
};

JavadocLexer.prototype.NEWLINE_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return _input.LA(1) != '/';
		case 1:
			return _input.LA(1) != '/';
		case 2:
			return _input.LA(1) != '/';
		default:
			throw "No predicate with index:" + predIndex;
	}
};




