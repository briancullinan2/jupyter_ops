// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/esolang/wheel/wheel.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,4,25,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,
4,0,11,8,0,11,0,12,0,12,1,1,1,1,1,2,1,2,1,3,4,3,20,8,3,11,3,12,3,21,1,3,
1,3,0,0,4,1,1,3,2,5,3,7,4,1,0,3,1,0,48,57,13,0,35,37,42,43,45,45,60,60,62,
62,64,64,67,68,71,71,73,73,76,76,86,86,89,90,94,94,3,0,9,10,13,13,32,32,
26,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,1,10,1,0,0,0,3,14,1,0,
0,0,5,16,1,0,0,0,7,19,1,0,0,0,9,11,3,3,1,0,10,9,1,0,0,0,11,12,1,0,0,0,12,
10,1,0,0,0,12,13,1,0,0,0,13,2,1,0,0,0,14,15,7,0,0,0,15,4,1,0,0,0,16,17,7,
1,0,0,17,6,1,0,0,0,18,20,7,2,0,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,
0,21,22,1,0,0,0,22,23,1,0,0,0,23,24,6,3,0,0,24,8,1,0,0,0,3,0,12,21,1,6,0,
0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class wheelLexer extends antlr4.Lexer {

    static grammarFileName = "wheel.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [  ];
	static symbolicNames = [ null, "VALUE", "DIGIT", "SYMBOL", "WS" ];
	static ruleNames = [ "VALUE", "DIGIT", "SYMBOL", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

wheelLexer.EOF = antlr4.Token.EOF;
wheelLexer.VALUE = 1;
wheelLexer.DIGIT = 2;
wheelLexer.SYMBOL = 3;
wheelLexer.WS = 4;




// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
