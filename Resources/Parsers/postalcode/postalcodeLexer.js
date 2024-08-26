// Generated from Resources/Parsers/postalcode/postalcode.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,3,15,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,1,0,1,0,1,1,
1,1,1,2,1,2,1,2,1,2,0,0,3,1,1,3,2,5,3,1,0,1,3,0,9,10,13,13,32,32,14,0,1,
1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,1,7,1,0,0,0,3,9,1,0,0,0,5,11,1,0,0,0,7,8,
2,48,57,0,8,2,1,0,0,0,9,10,2,65,90,0,10,4,1,0,0,0,11,12,7,0,0,0,12,13,1,
0,0,0,13,14,6,2,0,0,14,6,1,0,0,0,1,0,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class postalcodeLexer extends antlr4.Lexer {

    static grammarFileName = "postalcode.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [  ];
	static symbolicNames = [ null, "DIGIT", "LETTER", "WS" ];
	static ruleNames = [ "DIGIT", "LETTER", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

postalcodeLexer.EOF = antlr4.Token.EOF;
postalcodeLexer.DIGIT = 1;
postalcodeLexer.LETTER = 2;
postalcodeLexer.WS = 3;



