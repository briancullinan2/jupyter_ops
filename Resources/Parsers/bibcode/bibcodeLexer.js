// Generated from Resources/Parsers/bibcode/bibcode.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,5,26,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,4,4,21,8,4,11,4,12,4,22,1,4,1,4,
0,0,5,1,1,3,2,5,3,7,4,9,5,1,0,4,1,0,65,90,1,0,97,122,1,0,48,57,3,0,9,10,
13,13,32,32,26,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,
0,1,11,1,0,0,0,3,13,1,0,0,0,5,15,1,0,0,0,7,17,1,0,0,0,9,20,1,0,0,0,11,12,
5,46,0,0,12,2,1,0,0,0,13,14,7,0,0,0,14,4,1,0,0,0,15,16,7,1,0,0,16,6,1,0,
0,0,17,18,7,2,0,0,18,8,1,0,0,0,19,21,7,3,0,0,20,19,1,0,0,0,21,22,1,0,0,0,
22,20,1,0,0,0,22,23,1,0,0,0,23,24,1,0,0,0,24,25,6,4,0,0,25,10,1,0,0,0,2,
0,22,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class bibcodeLexer extends antlr4.Lexer {

    static grammarFileName = "bibcode.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'.'" ];
	static symbolicNames = [ null, "DOT", "UPPERLETTER", "LOWERLETTER", "DIGIT", 
                          "WS" ];
	static ruleNames = [ "DOT", "UPPERLETTER", "LOWERLETTER", "DIGIT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

bibcodeLexer.EOF = antlr4.Token.EOF;
bibcodeLexer.DOT = 1;
bibcodeLexer.UPPERLETTER = 2;
bibcodeLexer.LOWERLETTER = 3;
bibcodeLexer.DIGIT = 4;
bibcodeLexer.WS = 5;



