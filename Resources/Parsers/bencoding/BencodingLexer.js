// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/bencoding/BencodingLexer.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


import BencodingLexerBase from './BencodingLexerBase.js';

const serializedATN = [4,0,8,55,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,
3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,3,1,22,8,1,1,1,4,1,25,8,1,
11,1,12,1,26,1,2,4,2,30,8,2,11,2,12,2,31,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,
1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,4,7,50,8,7,11,7,12,7,51,1,7,1,7,0,0,8,2,
1,4,2,6,3,8,4,10,5,12,6,14,7,16,8,2,0,1,1,1,0,48,57,57,0,2,1,0,0,0,0,4,1,
0,0,0,0,6,1,0,0,0,0,8,1,0,0,0,0,10,1,0,0,0,0,12,1,0,0,0,0,14,1,0,0,0,1,16,
1,0,0,0,2,18,1,0,0,0,4,21,1,0,0,0,6,29,1,0,0,0,8,39,1,0,0,0,10,41,1,0,0,
0,12,43,1,0,0,0,14,45,1,0,0,0,16,49,1,0,0,0,18,19,5,105,0,0,19,3,1,0,0,0,
20,22,5,45,0,0,21,20,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,25,7,0,0,0,24,
23,1,0,0,0,25,26,1,0,0,0,26,24,1,0,0,0,26,27,1,0,0,0,27,5,1,0,0,0,28,30,
7,0,0,0,29,28,1,0,0,0,30,31,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,33,1,
0,0,0,33,34,5,58,0,0,34,35,6,2,0,0,35,36,1,0,0,0,36,37,6,2,1,0,37,38,6,2,
2,0,38,7,1,0,0,0,39,40,5,108,0,0,40,9,1,0,0,0,41,42,5,100,0,0,42,11,1,0,
0,0,43,44,5,101,0,0,44,13,1,0,0,0,45,46,9,0,0,0,46,15,1,0,0,0,47,48,4,7,
0,0,48,50,9,0,0,0,49,47,1,0,0,0,50,51,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,
0,52,53,1,0,0,0,53,54,6,7,3,0,54,17,1,0,0,0,6,0,1,21,26,31,51,4,1,2,0,6,
0,0,5,1,0,4,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class BencodingLexer extends BencodingLexerBase {

    static grammarFileName = "BencodingLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE", "StringMode" ];
	static literalNames = [ null, "'i'", null, null, "'l'", "'d'", "'e'" ];
	static symbolicNames = [ null, "INT_START", "INTEGER", "STRING_START", 
                          "LIST_START", "DICT_START", "END", "OTHER", "STRING" ];
	static ruleNames = [ "INT_START", "INTEGER", "STRING_START", "LIST_START", 
                      "DICT_START", "END", "OTHER", "STRING" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

BencodingLexer.EOF = antlr4.Token.EOF;
BencodingLexer.INT_START = 1;
BencodingLexer.INTEGER = 2;
BencodingLexer.STRING_START = 3;
BencodingLexer.LIST_START = 4;
BencodingLexer.DICT_START = 5;
BencodingLexer.END = 6;
BencodingLexer.OTHER = 7;
BencodingLexer.STRING = 8;

BencodingLexer.StringMode = 1;


BencodingLexer.prototype.action = function(localctx, ruleIndex, actionIndex) {
	switch (ruleIndex) {
	case 2:
		this.STRING_START_action(localctx, actionIndex);
		break;
	default:
		throw "No registered action for:" + ruleIndex;
	}
};


BencodingLexer.prototype.STRING_START_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 0:
		setStringLength();
		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};
BencodingLexer.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch (ruleIndex) {
		case 7:
			return this.STRING_sempred(localctx, predIndex);
    	default:
    		throw "No registered predicate for:" + ruleIndex;
    }
};

BencodingLexer.prototype.STRING_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return consumeStringChars();
		default:
			throw "No predicate with index:" + predIndex;
	}
};





// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
