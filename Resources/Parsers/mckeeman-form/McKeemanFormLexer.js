// Generated from ./mckeeman-form/McKeemanForm.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,9,83,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,1,1,1,1,
2,1,2,1,3,1,3,1,4,1,4,1,4,3,4,35,8,4,1,5,4,5,38,8,5,11,5,12,5,39,1,6,1,6,
1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,54,8,7,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,3,8,64,8,8,1,8,1,8,1,8,1,8,1,8,3,8,71,8,8,1,9,1,9,1,10,1,10,5,
10,77,8,10,10,10,12,10,80,9,10,1,10,1,10,1,78,0,11,1,1,3,2,5,3,7,4,9,5,11,
6,13,7,15,8,17,0,19,0,21,9,1,0,3,2,0,10,10,13,13,3,0,65,90,95,95,97,122,
3,0,48,57,65,70,97,102,86,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,
0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,21,1,0,0,0,1,23,1,
0,0,0,3,25,1,0,0,0,5,27,1,0,0,0,7,29,1,0,0,0,9,34,1,0,0,0,11,37,1,0,0,0,
13,41,1,0,0,0,15,53,1,0,0,0,17,70,1,0,0,0,19,72,1,0,0,0,21,74,1,0,0,0,23,
24,5,34,0,0,24,2,1,0,0,0,25,26,5,46,0,0,26,4,1,0,0,0,27,28,5,45,0,0,28,6,
1,0,0,0,29,30,5,32,0,0,30,8,1,0,0,0,31,35,7,0,0,0,32,33,5,13,0,0,33,35,5,
10,0,0,34,31,1,0,0,0,34,32,1,0,0,0,35,10,1,0,0,0,36,38,7,1,0,0,37,36,1,0,
0,0,38,39,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,12,1,0,0,0,41,42,5,32,0,
0,42,43,5,32,0,0,43,44,5,32,0,0,44,45,5,32,0,0,45,14,1,0,0,0,46,47,5,39,
0,0,47,48,9,0,0,0,48,54,5,39,0,0,49,50,5,39,0,0,50,51,3,17,8,0,51,52,5,39,
0,0,52,54,1,0,0,0,53,46,1,0,0,0,53,49,1,0,0,0,54,16,1,0,0,0,55,56,5,49,0,
0,56,57,5,48,0,0,57,58,3,19,9,0,58,59,3,19,9,0,59,60,3,19,9,0,60,61,3,19,
9,0,61,71,1,0,0,0,62,64,3,19,9,0,63,62,1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,
0,65,66,3,19,9,0,66,67,3,19,9,0,67,68,3,19,9,0,68,69,3,19,9,0,69,71,1,0,
0,0,70,55,1,0,0,0,70,63,1,0,0,0,71,18,1,0,0,0,72,73,7,2,0,0,73,20,1,0,0,
0,74,78,5,34,0,0,75,77,9,0,0,0,76,75,1,0,0,0,77,80,1,0,0,0,78,79,1,0,0,0,
78,76,1,0,0,0,79,81,1,0,0,0,80,78,1,0,0,0,81,82,5,34,0,0,82,22,1,0,0,0,7,
0,34,39,53,63,70,78,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class McKeemanFormLexer extends antlr4.Lexer {

    static grammarFileName = "McKeemanForm.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'\"'", "'.'", "'-'", "' '", null, null, 
                         "'    '" ];
	static symbolicNames = [ null, null, null, null, "Space", "Newline", "Name", 
                          "Indentation", "Singleton", "String" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "Space", "Newline", "Name", 
                      "Indentation", "Singleton", "HexCode", "Hex", "String" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

McKeemanFormLexer.EOF = antlr4.Token.EOF;
McKeemanFormLexer.T__0 = 1;
McKeemanFormLexer.T__1 = 2;
McKeemanFormLexer.T__2 = 3;
McKeemanFormLexer.Space = 4;
McKeemanFormLexer.Newline = 5;
McKeemanFormLexer.Name = 6;
McKeemanFormLexer.Indentation = 7;
McKeemanFormLexer.Singleton = 8;
McKeemanFormLexer.String = 9;



