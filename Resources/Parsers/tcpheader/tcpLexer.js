// Generated from Resources/Parsers/tcpheader/tcp.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,2,14,6,-1,2,0,7,0,2,1,7,1,1,0,1,0,1,1,4,1,9,8,
1,11,1,12,1,10,1,1,1,1,0,0,2,1,1,3,2,1,0,1,3,0,9,10,13,13,32,32,14,0,1,1,
0,0,0,0,3,1,0,0,0,1,5,1,0,0,0,3,8,1,0,0,0,5,6,2,0,255,0,6,2,1,0,0,0,7,9,
7,0,0,0,8,7,1,0,0,0,9,10,1,0,0,0,10,8,1,0,0,0,10,11,1,0,0,0,11,12,1,0,0,
0,12,13,6,1,0,0,13,4,1,0,0,0,2,0,10,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class tcpLexer extends antlr4.Lexer {

    static grammarFileName = "tcp.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [  ];
	static symbolicNames = [ null, "BYTE", "WS" ];
	static ruleNames = [ "BYTE", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

tcpLexer.EOF = antlr4.Token.EOF;
tcpLexer.BYTE = 1;
tcpLexer.WS = 2;



