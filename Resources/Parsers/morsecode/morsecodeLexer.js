// Generated from ./morsecode/morsecode.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,4,19,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,
1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,0,0,4,1,1,3,2,5,3,7,4,1,0,1,2,0,9,10,
13,13,18,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,1,9,1,0,0,0,3,11,
1,0,0,0,5,13,1,0,0,0,7,15,1,0,0,0,9,10,5,46,0,0,10,2,1,0,0,0,11,12,5,45,
0,0,12,4,1,0,0,0,13,14,5,32,0,0,14,6,1,0,0,0,15,16,7,0,0,0,16,17,1,0,0,0,
17,18,6,3,0,0,18,8,1,0,0,0,1,0,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class morsecodeLexer extends antlr4.Lexer {

    static grammarFileName = "morsecode.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'.'", "'-'", "' '" ];
	static symbolicNames = [ null, "DOT", "DASH", "SPACE", "WS" ];
	static ruleNames = [ "DOT", "DASH", "SPACE", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

morsecodeLexer.EOF = antlr4.Token.EOF;
morsecodeLexer.DOT = 1;
morsecodeLexer.DASH = 2;
morsecodeLexer.SPACE = 3;
morsecodeLexer.WS = 4;



