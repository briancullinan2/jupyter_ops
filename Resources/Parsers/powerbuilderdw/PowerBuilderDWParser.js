// Generated from ./powerbuilderdw/PowerBuilderDWParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import PowerBuilderDWParserListener from './PowerBuilderDWParserListener.js';
const serializedATN = [4,1,155,355,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,3,0,46,8,0,1,0,4,0,49,8,0,11,0,12,0,50,1,0,1,0,1,1,
5,1,56,8,1,10,1,12,1,59,9,1,1,1,1,1,1,1,3,1,64,8,1,1,2,4,2,67,8,2,11,2,12,
2,68,1,3,1,3,1,3,5,3,74,8,3,10,3,12,3,77,9,3,1,3,1,3,1,3,1,3,1,3,4,3,84,
8,3,11,3,12,3,85,1,3,1,3,1,3,1,3,1,3,5,3,93,8,3,10,3,12,3,96,9,3,1,3,3,3,
99,8,3,1,4,1,4,3,4,103,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,4,5,115,
8,5,11,5,12,5,116,1,5,1,5,1,6,1,6,3,6,123,8,6,1,6,3,6,126,8,6,1,7,1,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,137,8,7,1,7,1,7,4,7,141,8,7,11,7,12,7,142,
1,7,1,7,3,7,147,8,7,3,7,149,8,7,1,7,3,7,152,8,7,1,8,1,8,1,8,3,8,157,8,8,
1,8,3,8,160,8,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,168,8,8,5,8,170,8,8,10,8,12,
8,173,9,8,1,9,1,9,1,10,1,10,1,10,3,10,180,8,10,1,10,1,10,1,10,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,199,8,10,
1,10,1,10,1,10,3,10,204,8,10,3,10,206,8,10,1,10,1,10,1,10,1,10,1,10,3,10,
213,8,10,1,10,1,10,1,10,3,10,218,8,10,3,10,220,8,10,1,10,1,10,5,10,224,8,
10,10,10,12,10,227,9,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,235,8,10,3,10,
237,8,10,1,11,1,11,1,12,1,12,1,13,1,13,3,13,245,8,13,1,14,1,14,1,14,3,14,
250,8,14,1,14,1,14,1,14,3,14,255,8,14,1,14,3,14,258,8,14,1,14,1,14,3,14,
262,8,14,1,14,1,14,1,14,3,14,267,8,14,1,14,3,14,270,8,14,5,14,272,8,14,10,
14,12,14,275,9,14,3,14,277,8,14,1,14,3,14,280,8,14,1,15,1,15,1,15,1,15,1,
15,1,15,1,15,3,15,289,8,15,1,16,3,16,292,8,16,1,16,1,16,1,16,3,16,297,8,
16,1,16,5,16,300,8,16,10,16,12,16,303,9,16,1,17,1,17,3,17,307,8,17,1,17,
1,17,3,17,311,8,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,3,18,321,8,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,335,8,18,
1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,349,8,19,
1,20,1,20,1,21,1,21,1,21,0,0,22,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,32,34,36,38,40,42,0,4,1,0,8,30,1,0,114,115,1,0,85,86,1,0,31,32,421,0,
45,1,0,0,0,2,57,1,0,0,0,4,66,1,0,0,0,6,98,1,0,0,0,8,102,1,0,0,0,10,104,1,
0,0,0,12,120,1,0,0,0,14,148,1,0,0,0,16,156,1,0,0,0,18,174,1,0,0,0,20,236,
1,0,0,0,22,238,1,0,0,0,24,240,1,0,0,0,26,244,1,0,0,0,28,279,1,0,0,0,30,288,
1,0,0,0,32,291,1,0,0,0,34,306,1,0,0,0,36,334,1,0,0,0,38,348,1,0,0,0,40,350,
1,0,0,0,42,352,1,0,0,0,44,46,3,2,1,0,45,44,1,0,0,0,45,46,1,0,0,0,46,48,1,
0,0,0,47,49,3,4,2,0,48,47,1,0,0,0,49,50,1,0,0,0,50,48,1,0,0,0,50,51,1,0,
0,0,51,52,1,0,0,0,52,53,5,0,0,1,53,1,1,0,0,0,54,56,5,146,0,0,55,54,1,0,0,
0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,63,1,0,0,0,59,57,1,0,0,0,
60,61,5,84,0,0,61,62,5,141,0,0,62,64,5,133,0,0,63,60,1,0,0,0,63,64,1,0,0,
0,64,3,1,0,0,0,65,67,3,6,3,0,66,65,1,0,0,0,67,68,1,0,0,0,68,66,1,0,0,0,68,
69,1,0,0,0,69,5,1,0,0,0,70,71,3,16,8,0,71,75,5,134,0,0,72,74,3,14,7,0,73,
72,1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,78,1,0,0,0,77,75,
1,0,0,0,78,79,5,135,0,0,79,99,1,0,0,0,80,81,5,1,0,0,81,83,5,134,0,0,82,84,
3,8,4,0,83,82,1,0,0,0,84,85,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,87,1,
0,0,0,87,88,5,135,0,0,88,99,1,0,0,0,89,90,5,2,0,0,90,94,5,134,0,0,91,93,
3,14,7,0,92,91,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,97,1,
0,0,0,96,94,1,0,0,0,97,99,5,135,0,0,98,70,1,0,0,0,98,80,1,0,0,0,98,89,1,
0,0,0,99,7,1,0,0,0,100,103,3,10,5,0,101,103,3,12,6,0,102,100,1,0,0,0,102,
101,1,0,0,0,103,9,1,0,0,0,104,105,5,2,0,0,105,106,5,108,0,0,106,107,5,134,
0,0,107,108,5,45,0,0,108,109,5,108,0,0,109,110,3,24,12,0,110,111,5,134,0,
0,111,112,3,22,11,0,112,114,5,135,0,0,113,115,3,14,7,0,114,113,1,0,0,0,115,
116,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,118,1,0,0,0,118,119,5,135,
0,0,119,11,1,0,0,0,120,122,5,149,0,0,121,123,5,150,0,0,122,121,1,0,0,0,122,
123,1,0,0,0,123,125,1,0,0,0,124,126,5,151,0,0,125,124,1,0,0,0,125,126,1,
0,0,0,126,13,1,0,0,0,127,149,5,50,0,0,128,149,3,22,11,0,129,149,5,130,0,
0,130,149,5,143,0,0,131,149,5,144,0,0,132,133,3,16,8,0,133,146,5,108,0,0,
134,136,3,20,10,0,135,137,3,28,14,0,136,135,1,0,0,0,136,137,1,0,0,0,137,
147,1,0,0,0,138,140,5,134,0,0,139,141,3,14,7,0,140,139,1,0,0,0,141,142,1,
0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,144,1,0,0,0,144,145,5,135,0,0,
145,147,1,0,0,0,146,134,1,0,0,0,146,138,1,0,0,0,147,149,1,0,0,0,148,127,
1,0,0,0,148,128,1,0,0,0,148,129,1,0,0,0,148,130,1,0,0,0,148,131,1,0,0,0,
148,132,1,0,0,0,149,151,1,0,0,0,150,152,5,132,0,0,151,150,1,0,0,0,151,152,
1,0,0,0,152,15,1,0,0,0,153,157,3,18,9,0,154,157,5,45,0,0,155,157,5,51,0,
0,156,153,1,0,0,0,156,154,1,0,0,0,156,155,1,0,0,0,157,159,1,0,0,0,158,160,
5,141,0,0,159,158,1,0,0,0,159,160,1,0,0,0,160,171,1,0,0,0,161,167,5,142,
0,0,162,168,3,18,9,0,163,168,5,52,0,0,164,168,5,45,0,0,165,168,5,46,0,0,
166,168,5,53,0,0,167,162,1,0,0,0,167,163,1,0,0,0,167,164,1,0,0,0,167,165,
1,0,0,0,167,166,1,0,0,0,168,170,1,0,0,0,169,161,1,0,0,0,170,173,1,0,0,0,
171,169,1,0,0,0,171,172,1,0,0,0,172,17,1,0,0,0,173,171,1,0,0,0,174,175,5,
148,0,0,175,19,1,0,0,0,176,237,3,34,17,0,177,237,3,40,20,0,178,180,5,115,
0,0,179,178,1,0,0,0,179,180,1,0,0,0,180,181,1,0,0,0,181,237,3,22,11,0,182,
237,3,42,21,0,183,237,5,147,0,0,184,237,5,130,0,0,185,237,5,131,0,0,186,
237,5,143,0,0,187,237,5,144,0,0,188,237,5,45,0,0,189,237,5,47,0,0,190,237,
5,48,0,0,191,237,5,49,0,0,192,237,5,50,0,0,193,237,5,62,0,0,194,195,5,134,
0,0,195,198,5,134,0,0,196,199,3,26,13,0,197,199,3,24,12,0,198,196,1,0,0,
0,198,197,1,0,0,0,199,205,1,0,0,0,200,203,5,132,0,0,201,204,3,26,13,0,202,
204,3,24,12,0,203,201,1,0,0,0,203,202,1,0,0,0,204,206,1,0,0,0,205,200,1,
0,0,0,205,206,1,0,0,0,206,207,1,0,0,0,207,225,5,135,0,0,208,209,5,132,0,
0,209,212,5,134,0,0,210,213,3,26,13,0,211,213,3,24,12,0,212,210,1,0,0,0,
212,211,1,0,0,0,213,219,1,0,0,0,214,217,5,132,0,0,215,218,3,26,13,0,216,
218,3,24,12,0,217,215,1,0,0,0,217,216,1,0,0,0,218,220,1,0,0,0,219,214,1,
0,0,0,219,220,1,0,0,0,220,221,1,0,0,0,221,222,5,135,0,0,222,224,1,0,0,0,
223,208,1,0,0,0,224,227,1,0,0,0,225,223,1,0,0,0,225,226,1,0,0,0,226,228,
1,0,0,0,227,225,1,0,0,0,228,229,5,135,0,0,229,237,1,0,0,0,230,234,3,24,12,
0,231,232,5,134,0,0,232,233,5,141,0,0,233,235,5,135,0,0,234,231,1,0,0,0,
234,235,1,0,0,0,235,237,1,0,0,0,236,176,1,0,0,0,236,177,1,0,0,0,236,179,
1,0,0,0,236,182,1,0,0,0,236,183,1,0,0,0,236,184,1,0,0,0,236,185,1,0,0,0,
236,186,1,0,0,0,236,187,1,0,0,0,236,188,1,0,0,0,236,189,1,0,0,0,236,190,
1,0,0,0,236,191,1,0,0,0,236,192,1,0,0,0,236,193,1,0,0,0,236,194,1,0,0,0,
236,230,1,0,0,0,237,21,1,0,0,0,238,239,5,141,0,0,239,23,1,0,0,0,240,241,
7,0,0,0,241,25,1,0,0,0,242,245,3,30,15,0,243,245,5,124,0,0,244,242,1,0,0,
0,244,243,1,0,0,0,245,27,1,0,0,0,246,280,5,128,0,0,247,276,5,126,0,0,248,
250,7,1,0,0,249,248,1,0,0,0,249,250,1,0,0,0,250,251,1,0,0,0,251,257,5,141,
0,0,252,254,5,47,0,0,253,255,7,1,0,0,254,253,1,0,0,0,254,255,1,0,0,0,255,
256,1,0,0,0,256,258,5,141,0,0,257,252,1,0,0,0,257,258,1,0,0,0,258,273,1,
0,0,0,259,261,5,132,0,0,260,262,7,1,0,0,261,260,1,0,0,0,261,262,1,0,0,0,
262,263,1,0,0,0,263,269,5,141,0,0,264,266,5,47,0,0,265,267,7,1,0,0,266,265,
1,0,0,0,266,267,1,0,0,0,267,268,1,0,0,0,268,270,5,141,0,0,269,264,1,0,0,
0,269,270,1,0,0,0,270,272,1,0,0,0,271,259,1,0,0,0,272,275,1,0,0,0,273,271,
1,0,0,0,273,274,1,0,0,0,274,277,1,0,0,0,275,273,1,0,0,0,276,249,1,0,0,0,
276,277,1,0,0,0,277,278,1,0,0,0,278,280,5,127,0,0,279,246,1,0,0,0,279,247,
1,0,0,0,280,29,1,0,0,0,281,282,5,76,0,0,282,283,5,134,0,0,283,284,3,32,16,
0,284,285,5,135,0,0,285,289,1,0,0,0,286,287,5,99,0,0,287,289,5,76,0,0,288,
281,1,0,0,0,288,286,1,0,0,0,289,31,1,0,0,0,290,292,5,49,0,0,291,290,1,0,
0,0,291,292,1,0,0,0,292,293,1,0,0,0,293,301,3,26,13,0,294,296,5,132,0,0,
295,297,5,49,0,0,296,295,1,0,0,0,296,297,1,0,0,0,297,298,1,0,0,0,298,300,
3,26,13,0,299,294,1,0,0,0,300,303,1,0,0,0,301,299,1,0,0,0,301,302,1,0,0,
0,302,33,1,0,0,0,303,301,1,0,0,0,304,307,3,36,18,0,305,307,5,93,0,0,306,
304,1,0,0,0,306,305,1,0,0,0,307,308,1,0,0,0,308,310,5,134,0,0,309,311,3,
32,16,0,310,309,1,0,0,0,310,311,1,0,0,0,311,312,1,0,0,0,312,313,5,135,0,
0,313,35,1,0,0,0,314,335,3,18,9,0,315,316,5,100,0,0,316,320,5,118,0,0,317,
321,5,85,0,0,318,321,5,86,0,0,319,321,3,38,19,0,320,317,1,0,0,0,320,318,
1,0,0,0,320,319,1,0,0,0,321,335,1,0,0,0,322,323,3,18,9,0,323,324,5,118,0,
0,324,325,7,2,0,0,325,335,1,0,0,0,326,327,3,18,9,0,327,328,5,142,0,0,328,
329,7,2,0,0,329,335,1,0,0,0,330,331,3,18,9,0,331,332,5,118,0,0,332,333,3,
38,19,0,333,335,1,0,0,0,334,314,1,0,0,0,334,315,1,0,0,0,334,322,1,0,0,0,
334,326,1,0,0,0,334,330,1,0,0,0,335,37,1,0,0,0,336,349,3,18,9,0,337,349,
5,90,0,0,338,349,5,45,0,0,339,349,5,51,0,0,340,349,5,91,0,0,341,349,5,62,
0,0,342,349,5,76,0,0,343,349,5,63,0,0,344,349,5,92,0,0,345,349,5,93,0,0,
346,349,5,144,0,0,347,349,5,43,0,0,348,336,1,0,0,0,348,337,1,0,0,0,348,338,
1,0,0,0,348,339,1,0,0,0,348,340,1,0,0,0,348,341,1,0,0,0,348,342,1,0,0,0,
348,343,1,0,0,0,348,344,1,0,0,0,348,345,1,0,0,0,348,346,1,0,0,0,348,347,
1,0,0,0,349,39,1,0,0,0,350,351,3,36,18,0,351,41,1,0,0,0,352,353,7,3,0,0,
353,43,1,0,0,0,51,45,50,57,63,68,75,85,94,98,102,116,122,125,136,142,146,
148,151,156,159,167,171,179,198,203,205,212,217,219,225,234,236,244,249,
254,257,261,266,269,273,276,279,288,291,296,301,306,310,320,334,348];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PowerBuilderDWParser extends antlr4.Parser {

    static grammarFileName = "PowerBuilderDWParser.g4";
    static literalNames = [ null, "'TABLE'", "'COLUMN'", "'RETRIEVE'", "'PBSELECT'", 
                            "'VERSION'", "'ARGUMENTS'", "'SORT'", "'ANY'", 
                            "'BLOB'", "'BOOLEAN'", "'BYTE'", "'CHARACTER'", 
                            "'CHAR'", "'DATE'", "'DATETIME'", "'DECIMAL'", 
                            "'DEC'", "'DOUBLE'", "'INTEGER'", "'INT'", "'LONG'", 
                            "'LONGLONG'", "'REAL'", "'STRING'", "'TIME'", 
                            "'UNSIGNEDINTEGER'", "'UINT'", "'UNSIGNEDLONG'", 
                            "'ULONG'", "'WINDOW'", "'TRUE'", "'FALSE'", 
                            "'GLOBAL'", "'SHARED'", "'END'", "'INDIRECT'", 
                            "'VARIABLES'", "'FORWARD'", "'PUBLIC'", "'PRIVATE'", 
                            "'FUNCTION'", "'SUBROUTINE'", "'READONLY'", 
                            "'PROTOTYPES'", "'TYPE'", "'ON'", "'TO'", "'FROM'", 
                            "'REF'", "'NULL'", "'UPDATE'", "'CASE'", "'DYNAMIC'", 
                            "'WITHIN'", "'PRIVATEWRITE'", "'PROTECTED'", 
                            "'PRIVATEREAD'", "'PROTECTEDREAD'", "'PROTECTEDWRITE'", 
                            "'LOCAL'", "'EVENT'", "'OPEN'", "'GOTO'", "'ELSE'", 
                            "'IF'", "'THEN'", "'ELSEIF'", "'TRY'", "'EXIT'", 
                            "'CHOOSE'", "'IS'", "'CONTINUE'", "'DO'", "'WHILE'", 
                            "'FOR'", "'CLOSE'", "'NEXT'", "'LOOP'", "'UNTIL'", 
                            "'STEP'", "'CATCH'", "'FINALLY'", "'THROW'", 
                            "'RELEASE'", "'CREATE'", "'DESTROY'", "'USING'", 
                            "'POST'", "'TRIGGER'", "'SELECT'", "'DELETE'", 
                            "'INSERT'", "'DESCRIBE'", "'RETURN'", "'OR'", 
                            "'AND'", "'NOT'", "'CALL'", "'HALT'", "'SUPER'", 
                            "'LIBRARY'", "'SYSTEM'", "'RPCFUNC'", "'ALIAS'", 
                            "'THROWS'", "'AUTOINSTANTIATE'", "'DESCRIPTOR'", 
                            "'='", "'>'", "'>='", "'<'", "'<='", "'<>'", 
                            "'+'", "'-'", "'+='", "'-='", "'::'", "'*'", 
                            "'/'", "'*='", "'/='", "'^'", "'{'", "'}'", 
                            "'['", "']'", "'[]'", "'`'", null, null, "','", 
                            "';'", "'('", "')'", "':'", "'\"'", "'???'", 
                            "'||'", "'...'", null, "'.'" ];
    static symbolicNames = [ null, "TABLE", "COLUMN", "RETRIEVE", "PBSELECT", 
                             "VERSION", "ARGUMENTS", "SORT", "ANY", "BLOB", 
                             "BOOLEAN", "BYTE", "CHARACTER", "CHAR", "DATE_TYPE", 
                             "DATETIME", "DECIMAL", "DEC", "DOUBLE", "INTEGER", 
                             "INT", "LONG", "LONGLONG", "REAL", "STRING", 
                             "TIME_TYPE", "UNSIGNEDINTEGER", "UINT", "UNSIGNEDLONG", 
                             "ULONG", "WINDOW", "TRUE", "FALSE", "GLOBAL", 
                             "SHARED", "END", "INDIRECT", "VARIABLES", "FORWARD", 
                             "PUBLIC", "PRIVATE", "FUNCTION", "SUBROUTINE", 
                             "READONLY", "PROTOTYPES", "TYPE", "ON", "TO", 
                             "FROM", "REF", "NULL_", "UPDATE", "CASE", "DYNAMIC", 
                             "WITHIN", "PRIVATEWRITE", "PROTECTED", "PRIVATEREAD", 
                             "PROTECTEDREAD", "PROTECTEDWRITE", "LOCAL", 
                             "EVENT", "OPEN", "GOTO", "ELSE", "IF", "THEN", 
                             "ELSEIF", "TRY", "EXIT", "CHOOSE", "IS", "CONTINUE", 
                             "DO", "WHILE", "FOR", "CLOSE", "NEXT", "LOOP", 
                             "UNTIL", "STEP", "CATCH", "FINALLY", "THROW", 
                             "RELEASE", "CREATE", "DESTROY", "USING", "POST", 
                             "TRIGGER", "SELECT", "DELETE", "INSERT", "DESCRIBE", 
                             "RETURN", "OR", "AND", "NOT", "CALL", "HALT", 
                             "SUPER", "LIBRARY", "SYSTEM", "RPCFUNC", "ALIAS", 
                             "THROWS", "AUTOINSTANTIATE", "DESCRIPTOR", 
                             "EQ", "GT", "GTE", "LT", "LTE", "GTLT", "PLUS", 
                             "MINUS", "PLUSEQ", "MINUSEQ", "COLONCOLON", 
                             "MULT", "DIV", "MULTEQ", "DIVEQ", "CARAT", 
                             "LCURLY", "RCURLY", "LBRACE", "RBRACE", "BRACES", 
                             "TICK", "DQUOTED_STRING", "QUOTED_STRING", 
                             "COMMA", "SEMI", "LPAREN", "RPAREN", "COLON", 
                             "DQUOTE", "TQ", "DOUBLE_PIPE", "DOTDOTDOT", 
                             "NUMBER", "DOT", "DATE", "TIME", "BINDPAR", 
                             "EXPORT_HEADER", "ENUM", "ID", "RET_LIT", "ARGS_LIT", 
                             "SORT_LIT", "LINE_CONTINUATION", "SL_COMMENT", 
                             "ML_COMMENT", "WS" ];
    static ruleNames = [ "start_rule", "header_rule", "datawindow_rule", 
                         "datawindow_property", "table_attribute", "column_attribute", 
                         "retrieve_attribute", "datawindow_property_attribute_sub", 
                         "attribute_name", "identifier_name", "attribute_value", 
                         "numeric_atom", "dataTypeSub", "expression", "array_decl_sub", 
                         "close_call_sub", "expression_list", "atom_sub_call1", 
                         "identifier", "identifier_name_ex", "atom_sub_member1", 
                         "boolean_atom" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PowerBuilderDWParser.ruleNames;
        this.literalNames = PowerBuilderDWParser.literalNames;
        this.symbolicNames = PowerBuilderDWParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	start_rule() {
	    let localctx = new Start_ruleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PowerBuilderDWParser.RULE_start_rule);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        if(la_===1) {
	            this.state = 44;
	            this.header_rule();

	        }
	        this.state = 48; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 47;
	            this.datawindow_rule();
	            this.state = 50; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===PowerBuilderDWParser.TABLE || _la===PowerBuilderDWParser.COLUMN || _la===PowerBuilderDWParser.TYPE || _la===PowerBuilderDWParser.UPDATE || _la===PowerBuilderDWParser.ID);
	        this.state = 52;
	        this.match(PowerBuilderDWParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	header_rule() {
	    let localctx = new Header_ruleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PowerBuilderDWParser.RULE_header_rule);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===PowerBuilderDWParser.EXPORT_HEADER) {
	            this.state = 54;
	            this.match(PowerBuilderDWParser.EXPORT_HEADER);
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerBuilderDWParser.RELEASE) {
	            this.state = 60;
	            this.match(PowerBuilderDWParser.RELEASE);
	            this.state = 61;
	            this.match(PowerBuilderDWParser.NUMBER);
	            this.state = 62;
	            this.match(PowerBuilderDWParser.SEMI);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	datawindow_rule() {
	    let localctx = new Datawindow_ruleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PowerBuilderDWParser.RULE_datawindow_rule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 65;
	        		this.datawindow_property();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 68; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	datawindow_property() {
	    let localctx = new Datawindow_propertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PowerBuilderDWParser.RULE_datawindow_property);
	    var _la = 0; // Token type
	    try {
	        this.state = 98;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PowerBuilderDWParser.TYPE:
	        case PowerBuilderDWParser.UPDATE:
	        case PowerBuilderDWParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 70;
	            this.attribute_name();
	            this.state = 71;
	            this.match(PowerBuilderDWParser.LPAREN);
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (PowerBuilderDWParser.TYPE - 45)) | (1 << (PowerBuilderDWParser.NULL_ - 45)) | (1 << (PowerBuilderDWParser.UPDATE - 45)))) !== 0) || ((((_la - 130)) & ~0x1f) == 0 && ((1 << (_la - 130)) & ((1 << (PowerBuilderDWParser.DQUOTED_STRING - 130)) | (1 << (PowerBuilderDWParser.NUMBER - 130)) | (1 << (PowerBuilderDWParser.DATE - 130)) | (1 << (PowerBuilderDWParser.TIME - 130)) | (1 << (PowerBuilderDWParser.ID - 130)))) !== 0)) {
	                this.state = 72;
	                this.datawindow_property_attribute_sub();
	                this.state = 77;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 78;
	            this.match(PowerBuilderDWParser.RPAREN);
	            break;
	        case PowerBuilderDWParser.TABLE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 80;
	            this.match(PowerBuilderDWParser.TABLE);
	            this.state = 81;
	            this.match(PowerBuilderDWParser.LPAREN);
	            this.state = 83; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 82;
	                this.table_attribute();
	                this.state = 85; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===PowerBuilderDWParser.COLUMN || _la===PowerBuilderDWParser.RET_LIT);
	            this.state = 87;
	            this.match(PowerBuilderDWParser.RPAREN);
	            break;
	        case PowerBuilderDWParser.COLUMN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 89;
	            this.match(PowerBuilderDWParser.COLUMN);
	            this.state = 90;
	            this.match(PowerBuilderDWParser.LPAREN);
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (PowerBuilderDWParser.TYPE - 45)) | (1 << (PowerBuilderDWParser.NULL_ - 45)) | (1 << (PowerBuilderDWParser.UPDATE - 45)))) !== 0) || ((((_la - 130)) & ~0x1f) == 0 && ((1 << (_la - 130)) & ((1 << (PowerBuilderDWParser.DQUOTED_STRING - 130)) | (1 << (PowerBuilderDWParser.NUMBER - 130)) | (1 << (PowerBuilderDWParser.DATE - 130)) | (1 << (PowerBuilderDWParser.TIME - 130)) | (1 << (PowerBuilderDWParser.ID - 130)))) !== 0)) {
	                this.state = 91;
	                this.datawindow_property_attribute_sub();
	                this.state = 96;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 97;
	            this.match(PowerBuilderDWParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	table_attribute() {
	    let localctx = new Table_attributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PowerBuilderDWParser.RULE_table_attribute);
	    try {
	        this.state = 102;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PowerBuilderDWParser.COLUMN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 100;
	            this.column_attribute();
	            break;
	        case PowerBuilderDWParser.RET_LIT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 101;
	            this.retrieve_attribute();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	column_attribute() {
	    let localctx = new Column_attributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PowerBuilderDWParser.RULE_column_attribute);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(PowerBuilderDWParser.COLUMN);
	        this.state = 105;
	        this.match(PowerBuilderDWParser.EQ);
	        this.state = 106;
	        this.match(PowerBuilderDWParser.LPAREN);
	        this.state = 107;
	        this.match(PowerBuilderDWParser.TYPE);
	        this.state = 108;
	        this.match(PowerBuilderDWParser.EQ);
	        this.state = 109;
	        this.dataTypeSub();
	        this.state = 110;
	        this.match(PowerBuilderDWParser.LPAREN);
	        this.state = 111;
	        this.numeric_atom();
	        this.state = 112;
	        this.match(PowerBuilderDWParser.RPAREN);
	        this.state = 114; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 113;
	            this.datawindow_property_attribute_sub();
	            this.state = 116; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (PowerBuilderDWParser.TYPE - 45)) | (1 << (PowerBuilderDWParser.NULL_ - 45)) | (1 << (PowerBuilderDWParser.UPDATE - 45)))) !== 0) || ((((_la - 130)) & ~0x1f) == 0 && ((1 << (_la - 130)) & ((1 << (PowerBuilderDWParser.DQUOTED_STRING - 130)) | (1 << (PowerBuilderDWParser.NUMBER - 130)) | (1 << (PowerBuilderDWParser.DATE - 130)) | (1 << (PowerBuilderDWParser.TIME - 130)) | (1 << (PowerBuilderDWParser.ID - 130)))) !== 0));
	        this.state = 118;
	        this.match(PowerBuilderDWParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retrieve_attribute() {
	    let localctx = new Retrieve_attributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PowerBuilderDWParser.RULE_retrieve_attribute);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(PowerBuilderDWParser.RET_LIT);
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerBuilderDWParser.ARGS_LIT) {
	            this.state = 121;
	            this.match(PowerBuilderDWParser.ARGS_LIT);
	        }

	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerBuilderDWParser.SORT_LIT) {
	            this.state = 124;
	            this.match(PowerBuilderDWParser.SORT_LIT);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	datawindow_property_attribute_sub() {
	    let localctx = new Datawindow_property_attribute_subContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PowerBuilderDWParser.RULE_datawindow_property_attribute_sub);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PowerBuilderDWParser.NULL_:
	            this.state = 127;
	            this.match(PowerBuilderDWParser.NULL_);
	            break;
	        case PowerBuilderDWParser.NUMBER:
	            this.state = 128;
	            this.numeric_atom();
	            break;
	        case PowerBuilderDWParser.DQUOTED_STRING:
	            this.state = 129;
	            this.match(PowerBuilderDWParser.DQUOTED_STRING);
	            break;
	        case PowerBuilderDWParser.DATE:
	            this.state = 130;
	            this.match(PowerBuilderDWParser.DATE);
	            break;
	        case PowerBuilderDWParser.TIME:
	            this.state = 131;
	            this.match(PowerBuilderDWParser.TIME);
	            break;
	        case PowerBuilderDWParser.TYPE:
	        case PowerBuilderDWParser.UPDATE:
	        case PowerBuilderDWParser.ID:
	            this.state = 132;
	            this.attribute_name();
	            this.state = 133;
	            localctx.eq = this.match(PowerBuilderDWParser.EQ);
	            this.state = 146;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 134;
	                this.attribute_value();
	                this.state = 136;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===PowerBuilderDWParser.LBRACE || _la===PowerBuilderDWParser.BRACES) {
	                    this.state = 135;
	                    this.array_decl_sub();
	                }

	                break;

	            case 2:
	                this.state = 138;
	                this.match(PowerBuilderDWParser.LPAREN);
	                this.state = 140; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 139;
	                    this.datawindow_property_attribute_sub();
	                    this.state = 142; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (PowerBuilderDWParser.TYPE - 45)) | (1 << (PowerBuilderDWParser.NULL_ - 45)) | (1 << (PowerBuilderDWParser.UPDATE - 45)))) !== 0) || ((((_la - 130)) & ~0x1f) == 0 && ((1 << (_la - 130)) & ((1 << (PowerBuilderDWParser.DQUOTED_STRING - 130)) | (1 << (PowerBuilderDWParser.NUMBER - 130)) | (1 << (PowerBuilderDWParser.DATE - 130)) | (1 << (PowerBuilderDWParser.TIME - 130)) | (1 << (PowerBuilderDWParser.ID - 130)))) !== 0));
	                this.state = 144;
	                this.match(PowerBuilderDWParser.RPAREN);
	                break;

	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerBuilderDWParser.COMMA) {
	            this.state = 150;
	            this.match(PowerBuilderDWParser.COMMA);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attribute_name() {
	    let localctx = new Attribute_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PowerBuilderDWParser.RULE_attribute_name);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PowerBuilderDWParser.ID:
	            this.state = 153;
	            this.identifier_name();
	            break;
	        case PowerBuilderDWParser.TYPE:
	            this.state = 154;
	            this.match(PowerBuilderDWParser.TYPE);
	            break;
	        case PowerBuilderDWParser.UPDATE:
	            this.state = 155;
	            this.match(PowerBuilderDWParser.UPDATE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerBuilderDWParser.NUMBER) {
	            this.state = 158;
	            this.match(PowerBuilderDWParser.NUMBER);
	        }

	        this.state = 171;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===PowerBuilderDWParser.DOT) {
	            this.state = 161;
	            this.match(PowerBuilderDWParser.DOT);
	            this.state = 167;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case PowerBuilderDWParser.ID:
	                this.state = 162;
	                this.identifier_name();
	                break;
	            case PowerBuilderDWParser.CASE:
	                this.state = 163;
	                this.match(PowerBuilderDWParser.CASE);
	                break;
	            case PowerBuilderDWParser.TYPE:
	                this.state = 164;
	                this.match(PowerBuilderDWParser.TYPE);
	                break;
	            case PowerBuilderDWParser.ON:
	                this.state = 165;
	                this.match(PowerBuilderDWParser.ON);
	                break;
	            case PowerBuilderDWParser.DYNAMIC:
	                this.state = 166;
	                this.match(PowerBuilderDWParser.DYNAMIC);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 173;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier_name() {
	    let localctx = new Identifier_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, PowerBuilderDWParser.RULE_identifier_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(PowerBuilderDWParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attribute_value() {
	    let localctx = new Attribute_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, PowerBuilderDWParser.RULE_attribute_value);
	    var _la = 0; // Token type
	    try {
	        this.state = 236;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 176;
	            this.atom_sub_call1();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 177;
	            this.atom_sub_member1();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 179;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PowerBuilderDWParser.MINUS) {
	                this.state = 178;
	                this.match(PowerBuilderDWParser.MINUS);
	            }

	            this.state = 181;
	            this.numeric_atom();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 182;
	            this.boolean_atom();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 183;
	            this.match(PowerBuilderDWParser.ENUM);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 184;
	            this.match(PowerBuilderDWParser.DQUOTED_STRING);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 185;
	            this.match(PowerBuilderDWParser.QUOTED_STRING);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 186;
	            this.match(PowerBuilderDWParser.DATE);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 187;
	            this.match(PowerBuilderDWParser.TIME);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 188;
	            this.match(PowerBuilderDWParser.TYPE);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 189;
	            this.match(PowerBuilderDWParser.TO);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 190;
	            this.match(PowerBuilderDWParser.FROM);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 191;
	            this.match(PowerBuilderDWParser.REF);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 192;
	            this.match(PowerBuilderDWParser.NULL_);
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 193;
	            this.match(PowerBuilderDWParser.OPEN);
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 194;
	            this.match(PowerBuilderDWParser.LPAREN);
	            this.state = 195;
	            this.match(PowerBuilderDWParser.LPAREN);
	            this.state = 198;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case PowerBuilderDWParser.CLOSE:
	            case PowerBuilderDWParser.HALT:
	            case PowerBuilderDWParser.LCURLY:
	                this.state = 196;
	                this.expression();
	                break;
	            case PowerBuilderDWParser.ANY:
	            case PowerBuilderDWParser.BLOB:
	            case PowerBuilderDWParser.BOOLEAN:
	            case PowerBuilderDWParser.BYTE:
	            case PowerBuilderDWParser.CHARACTER:
	            case PowerBuilderDWParser.CHAR:
	            case PowerBuilderDWParser.DATE_TYPE:
	            case PowerBuilderDWParser.DATETIME:
	            case PowerBuilderDWParser.DECIMAL:
	            case PowerBuilderDWParser.DEC:
	            case PowerBuilderDWParser.DOUBLE:
	            case PowerBuilderDWParser.INTEGER:
	            case PowerBuilderDWParser.INT:
	            case PowerBuilderDWParser.LONG:
	            case PowerBuilderDWParser.LONGLONG:
	            case PowerBuilderDWParser.REAL:
	            case PowerBuilderDWParser.STRING:
	            case PowerBuilderDWParser.TIME_TYPE:
	            case PowerBuilderDWParser.UNSIGNEDINTEGER:
	            case PowerBuilderDWParser.UINT:
	            case PowerBuilderDWParser.UNSIGNEDLONG:
	            case PowerBuilderDWParser.ULONG:
	            case PowerBuilderDWParser.WINDOW:
	                this.state = 197;
	                this.dataTypeSub();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 205;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PowerBuilderDWParser.COMMA) {
	                this.state = 200;
	                this.match(PowerBuilderDWParser.COMMA);
	                this.state = 203;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case PowerBuilderDWParser.CLOSE:
	                case PowerBuilderDWParser.HALT:
	                case PowerBuilderDWParser.LCURLY:
	                    this.state = 201;
	                    this.expression();
	                    break;
	                case PowerBuilderDWParser.ANY:
	                case PowerBuilderDWParser.BLOB:
	                case PowerBuilderDWParser.BOOLEAN:
	                case PowerBuilderDWParser.BYTE:
	                case PowerBuilderDWParser.CHARACTER:
	                case PowerBuilderDWParser.CHAR:
	                case PowerBuilderDWParser.DATE_TYPE:
	                case PowerBuilderDWParser.DATETIME:
	                case PowerBuilderDWParser.DECIMAL:
	                case PowerBuilderDWParser.DEC:
	                case PowerBuilderDWParser.DOUBLE:
	                case PowerBuilderDWParser.INTEGER:
	                case PowerBuilderDWParser.INT:
	                case PowerBuilderDWParser.LONG:
	                case PowerBuilderDWParser.LONGLONG:
	                case PowerBuilderDWParser.REAL:
	                case PowerBuilderDWParser.STRING:
	                case PowerBuilderDWParser.TIME_TYPE:
	                case PowerBuilderDWParser.UNSIGNEDINTEGER:
	                case PowerBuilderDWParser.UINT:
	                case PowerBuilderDWParser.UNSIGNEDLONG:
	                case PowerBuilderDWParser.ULONG:
	                case PowerBuilderDWParser.WINDOW:
	                    this.state = 202;
	                    this.dataTypeSub();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	            }

	            this.state = 207;
	            this.match(PowerBuilderDWParser.RPAREN);
	            this.state = 225;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===PowerBuilderDWParser.COMMA) {
	                this.state = 208;
	                this.match(PowerBuilderDWParser.COMMA);
	                this.state = 209;
	                this.match(PowerBuilderDWParser.LPAREN);
	                this.state = 212;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case PowerBuilderDWParser.CLOSE:
	                case PowerBuilderDWParser.HALT:
	                case PowerBuilderDWParser.LCURLY:
	                    this.state = 210;
	                    this.expression();
	                    break;
	                case PowerBuilderDWParser.ANY:
	                case PowerBuilderDWParser.BLOB:
	                case PowerBuilderDWParser.BOOLEAN:
	                case PowerBuilderDWParser.BYTE:
	                case PowerBuilderDWParser.CHARACTER:
	                case PowerBuilderDWParser.CHAR:
	                case PowerBuilderDWParser.DATE_TYPE:
	                case PowerBuilderDWParser.DATETIME:
	                case PowerBuilderDWParser.DECIMAL:
	                case PowerBuilderDWParser.DEC:
	                case PowerBuilderDWParser.DOUBLE:
	                case PowerBuilderDWParser.INTEGER:
	                case PowerBuilderDWParser.INT:
	                case PowerBuilderDWParser.LONG:
	                case PowerBuilderDWParser.LONGLONG:
	                case PowerBuilderDWParser.REAL:
	                case PowerBuilderDWParser.STRING:
	                case PowerBuilderDWParser.TIME_TYPE:
	                case PowerBuilderDWParser.UNSIGNEDINTEGER:
	                case PowerBuilderDWParser.UINT:
	                case PowerBuilderDWParser.UNSIGNEDLONG:
	                case PowerBuilderDWParser.ULONG:
	                case PowerBuilderDWParser.WINDOW:
	                    this.state = 211;
	                    this.dataTypeSub();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 219;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===PowerBuilderDWParser.COMMA) {
	                    this.state = 214;
	                    this.match(PowerBuilderDWParser.COMMA);
	                    this.state = 217;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case PowerBuilderDWParser.CLOSE:
	                    case PowerBuilderDWParser.HALT:
	                    case PowerBuilderDWParser.LCURLY:
	                        this.state = 215;
	                        this.expression();
	                        break;
	                    case PowerBuilderDWParser.ANY:
	                    case PowerBuilderDWParser.BLOB:
	                    case PowerBuilderDWParser.BOOLEAN:
	                    case PowerBuilderDWParser.BYTE:
	                    case PowerBuilderDWParser.CHARACTER:
	                    case PowerBuilderDWParser.CHAR:
	                    case PowerBuilderDWParser.DATE_TYPE:
	                    case PowerBuilderDWParser.DATETIME:
	                    case PowerBuilderDWParser.DECIMAL:
	                    case PowerBuilderDWParser.DEC:
	                    case PowerBuilderDWParser.DOUBLE:
	                    case PowerBuilderDWParser.INTEGER:
	                    case PowerBuilderDWParser.INT:
	                    case PowerBuilderDWParser.LONG:
	                    case PowerBuilderDWParser.LONGLONG:
	                    case PowerBuilderDWParser.REAL:
	                    case PowerBuilderDWParser.STRING:
	                    case PowerBuilderDWParser.TIME_TYPE:
	                    case PowerBuilderDWParser.UNSIGNEDINTEGER:
	                    case PowerBuilderDWParser.UINT:
	                    case PowerBuilderDWParser.UNSIGNEDLONG:
	                    case PowerBuilderDWParser.ULONG:
	                    case PowerBuilderDWParser.WINDOW:
	                        this.state = 216;
	                        this.dataTypeSub();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                }

	                this.state = 221;
	                this.match(PowerBuilderDWParser.RPAREN);
	                this.state = 227;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 228;
	            this.match(PowerBuilderDWParser.RPAREN);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 230;
	            this.dataTypeSub();
	            this.state = 234;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PowerBuilderDWParser.LPAREN) {
	                this.state = 231;
	                this.match(PowerBuilderDWParser.LPAREN);
	                this.state = 232;
	                this.match(PowerBuilderDWParser.NUMBER);
	                this.state = 233;
	                this.match(PowerBuilderDWParser.RPAREN);
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numeric_atom() {
	    let localctx = new Numeric_atomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, PowerBuilderDWParser.RULE_numeric_atom);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(PowerBuilderDWParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dataTypeSub() {
	    let localctx = new DataTypeSubContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, PowerBuilderDWParser.RULE_dataTypeSub);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PowerBuilderDWParser.ANY) | (1 << PowerBuilderDWParser.BLOB) | (1 << PowerBuilderDWParser.BOOLEAN) | (1 << PowerBuilderDWParser.BYTE) | (1 << PowerBuilderDWParser.CHARACTER) | (1 << PowerBuilderDWParser.CHAR) | (1 << PowerBuilderDWParser.DATE_TYPE) | (1 << PowerBuilderDWParser.DATETIME) | (1 << PowerBuilderDWParser.DECIMAL) | (1 << PowerBuilderDWParser.DEC) | (1 << PowerBuilderDWParser.DOUBLE) | (1 << PowerBuilderDWParser.INTEGER) | (1 << PowerBuilderDWParser.INT) | (1 << PowerBuilderDWParser.LONG) | (1 << PowerBuilderDWParser.LONGLONG) | (1 << PowerBuilderDWParser.REAL) | (1 << PowerBuilderDWParser.STRING) | (1 << PowerBuilderDWParser.TIME_TYPE) | (1 << PowerBuilderDWParser.UNSIGNEDINTEGER) | (1 << PowerBuilderDWParser.UINT) | (1 << PowerBuilderDWParser.UNSIGNEDLONG) | (1 << PowerBuilderDWParser.ULONG) | (1 << PowerBuilderDWParser.WINDOW))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, PowerBuilderDWParser.RULE_expression);
	    try {
	        this.state = 244;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PowerBuilderDWParser.CLOSE:
	        case PowerBuilderDWParser.HALT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 242;
	            this.close_call_sub();
	            break;
	        case PowerBuilderDWParser.LCURLY:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 243;
	            this.match(PowerBuilderDWParser.LCURLY);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array_decl_sub() {
	    let localctx = new Array_decl_subContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, PowerBuilderDWParser.RULE_array_decl_sub);
	    var _la = 0; // Token type
	    try {
	        this.state = 279;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PowerBuilderDWParser.BRACES:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 246;
	            this.match(PowerBuilderDWParser.BRACES);
	            break;
	        case PowerBuilderDWParser.LBRACE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 247;
	            this.match(PowerBuilderDWParser.LBRACE);
	            this.state = 276;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 114)) & ~0x1f) == 0 && ((1 << (_la - 114)) & ((1 << (PowerBuilderDWParser.PLUS - 114)) | (1 << (PowerBuilderDWParser.MINUS - 114)) | (1 << (PowerBuilderDWParser.NUMBER - 114)))) !== 0)) {
	                this.state = 249;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===PowerBuilderDWParser.PLUS || _la===PowerBuilderDWParser.MINUS) {
	                    this.state = 248;
	                    _la = this._input.LA(1);
	                    if(!(_la===PowerBuilderDWParser.PLUS || _la===PowerBuilderDWParser.MINUS)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                }

	                this.state = 251;
	                this.match(PowerBuilderDWParser.NUMBER);
	                this.state = 257;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===PowerBuilderDWParser.TO) {
	                    this.state = 252;
	                    this.match(PowerBuilderDWParser.TO);
	                    this.state = 254;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===PowerBuilderDWParser.PLUS || _la===PowerBuilderDWParser.MINUS) {
	                        this.state = 253;
	                        _la = this._input.LA(1);
	                        if(!(_la===PowerBuilderDWParser.PLUS || _la===PowerBuilderDWParser.MINUS)) {
	                        this._errHandler.recoverInline(this);
	                        }
	                        else {
	                        	this._errHandler.reportMatch(this);
	                            this.consume();
	                        }
	                    }

	                    this.state = 256;
	                    this.match(PowerBuilderDWParser.NUMBER);
	                }

	                this.state = 273;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===PowerBuilderDWParser.COMMA) {
	                    this.state = 259;
	                    this.match(PowerBuilderDWParser.COMMA);
	                    this.state = 261;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===PowerBuilderDWParser.PLUS || _la===PowerBuilderDWParser.MINUS) {
	                        this.state = 260;
	                        _la = this._input.LA(1);
	                        if(!(_la===PowerBuilderDWParser.PLUS || _la===PowerBuilderDWParser.MINUS)) {
	                        this._errHandler.recoverInline(this);
	                        }
	                        else {
	                        	this._errHandler.reportMatch(this);
	                            this.consume();
	                        }
	                    }

	                    this.state = 263;
	                    this.match(PowerBuilderDWParser.NUMBER);
	                    this.state = 269;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===PowerBuilderDWParser.TO) {
	                        this.state = 264;
	                        this.match(PowerBuilderDWParser.TO);
	                        this.state = 266;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                        if(_la===PowerBuilderDWParser.PLUS || _la===PowerBuilderDWParser.MINUS) {
	                            this.state = 265;
	                            _la = this._input.LA(1);
	                            if(!(_la===PowerBuilderDWParser.PLUS || _la===PowerBuilderDWParser.MINUS)) {
	                            this._errHandler.recoverInline(this);
	                            }
	                            else {
	                            	this._errHandler.reportMatch(this);
	                                this.consume();
	                            }
	                        }

	                        this.state = 268;
	                        this.match(PowerBuilderDWParser.NUMBER);
	                    }

	                    this.state = 275;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 278;
	            this.match(PowerBuilderDWParser.RBRACE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	close_call_sub() {
	    let localctx = new Close_call_subContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, PowerBuilderDWParser.RULE_close_call_sub);
	    try {
	        this.state = 288;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PowerBuilderDWParser.CLOSE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 281;
	            this.match(PowerBuilderDWParser.CLOSE);
	            this.state = 282;
	            this.match(PowerBuilderDWParser.LPAREN);
	            this.state = 283;
	            this.expression_list();
	            this.state = 284;
	            this.match(PowerBuilderDWParser.RPAREN);
	            break;
	        case PowerBuilderDWParser.HALT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 286;
	            this.match(PowerBuilderDWParser.HALT);
	            this.state = 287;
	            this.match(PowerBuilderDWParser.CLOSE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression_list() {
	    let localctx = new Expression_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, PowerBuilderDWParser.RULE_expression_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 291;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerBuilderDWParser.REF) {
	            this.state = 290;
	            this.match(PowerBuilderDWParser.REF);
	        }

	        this.state = 293;
	        this.expression();
	        this.state = 301;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===PowerBuilderDWParser.COMMA) {
	            this.state = 294;
	            this.match(PowerBuilderDWParser.COMMA);
	            this.state = 296;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===PowerBuilderDWParser.REF) {
	                this.state = 295;
	                this.match(PowerBuilderDWParser.REF);
	            }

	            this.state = 298;
	            this.expression();
	            this.state = 303;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_sub_call1() {
	    let localctx = new Atom_sub_call1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, PowerBuilderDWParser.RULE_atom_sub_call1);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PowerBuilderDWParser.SUPER:
	        case PowerBuilderDWParser.ID:
	            this.state = 304;
	            this.identifier();
	            break;
	        case PowerBuilderDWParser.DESCRIBE:
	            this.state = 305;
	            this.match(PowerBuilderDWParser.DESCRIBE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 308;
	        this.match(PowerBuilderDWParser.LPAREN);
	        this.state = 310;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===PowerBuilderDWParser.REF || _la===PowerBuilderDWParser.CLOSE || _la===PowerBuilderDWParser.HALT || _la===PowerBuilderDWParser.LCURLY) {
	            this.state = 309;
	            this.expression_list();
	        }

	        this.state = 312;
	        this.match(PowerBuilderDWParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, PowerBuilderDWParser.RULE_identifier);
	    var _la = 0; // Token type
	    try {
	        this.state = 334;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 314;
	            this.identifier_name();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 315;
	            this.match(PowerBuilderDWParser.SUPER);
	            this.state = 316;
	            this.match(PowerBuilderDWParser.COLONCOLON);
	            this.state = 320;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case PowerBuilderDWParser.CREATE:
	                this.state = 317;
	                this.match(PowerBuilderDWParser.CREATE);
	                break;
	            case PowerBuilderDWParser.DESTROY:
	                this.state = 318;
	                this.match(PowerBuilderDWParser.DESTROY);
	                break;
	            case PowerBuilderDWParser.READONLY:
	            case PowerBuilderDWParser.TYPE:
	            case PowerBuilderDWParser.UPDATE:
	            case PowerBuilderDWParser.OPEN:
	            case PowerBuilderDWParser.GOTO:
	            case PowerBuilderDWParser.CLOSE:
	            case PowerBuilderDWParser.SELECT:
	            case PowerBuilderDWParser.DELETE:
	            case PowerBuilderDWParser.INSERT:
	            case PowerBuilderDWParser.DESCRIBE:
	            case PowerBuilderDWParser.TIME:
	            case PowerBuilderDWParser.ID:
	                this.state = 319;
	                this.identifier_name_ex();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 322;
	            this.identifier_name();
	            this.state = 323;
	            this.match(PowerBuilderDWParser.COLONCOLON);
	            this.state = 324;
	            _la = this._input.LA(1);
	            if(!(_la===PowerBuilderDWParser.CREATE || _la===PowerBuilderDWParser.DESTROY)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 326;
	            this.identifier_name();
	            this.state = 327;
	            this.match(PowerBuilderDWParser.DOT);
	            this.state = 328;
	            _la = this._input.LA(1);
	            if(!(_la===PowerBuilderDWParser.CREATE || _la===PowerBuilderDWParser.DESTROY)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 330;
	            this.identifier_name();
	            this.state = 331;
	            this.match(PowerBuilderDWParser.COLONCOLON);
	            this.state = 332;
	            this.identifier_name_ex();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier_name_ex() {
	    let localctx = new Identifier_name_exContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, PowerBuilderDWParser.RULE_identifier_name_ex);
	    try {
	        this.state = 348;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PowerBuilderDWParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 336;
	            this.identifier_name();
	            break;
	        case PowerBuilderDWParser.SELECT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 337;
	            this.match(PowerBuilderDWParser.SELECT);
	            break;
	        case PowerBuilderDWParser.TYPE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 338;
	            this.match(PowerBuilderDWParser.TYPE);
	            break;
	        case PowerBuilderDWParser.UPDATE:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 339;
	            this.match(PowerBuilderDWParser.UPDATE);
	            break;
	        case PowerBuilderDWParser.DELETE:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 340;
	            this.match(PowerBuilderDWParser.DELETE);
	            break;
	        case PowerBuilderDWParser.OPEN:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 341;
	            this.match(PowerBuilderDWParser.OPEN);
	            break;
	        case PowerBuilderDWParser.CLOSE:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 342;
	            this.match(PowerBuilderDWParser.CLOSE);
	            break;
	        case PowerBuilderDWParser.GOTO:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 343;
	            this.match(PowerBuilderDWParser.GOTO);
	            break;
	        case PowerBuilderDWParser.INSERT:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 344;
	            this.match(PowerBuilderDWParser.INSERT);
	            break;
	        case PowerBuilderDWParser.DESCRIBE:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 345;
	            this.match(PowerBuilderDWParser.DESCRIBE);
	            break;
	        case PowerBuilderDWParser.TIME:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 346;
	            this.match(PowerBuilderDWParser.TIME);
	            break;
	        case PowerBuilderDWParser.READONLY:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 347;
	            this.match(PowerBuilderDWParser.READONLY);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom_sub_member1() {
	    let localctx = new Atom_sub_member1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, PowerBuilderDWParser.RULE_atom_sub_member1);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 350;
	        this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	boolean_atom() {
	    let localctx = new Boolean_atomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, PowerBuilderDWParser.RULE_boolean_atom);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
	        _la = this._input.LA(1);
	        if(!(_la===PowerBuilderDWParser.TRUE || _la===PowerBuilderDWParser.FALSE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

PowerBuilderDWParser.EOF = antlr4.Token.EOF;
PowerBuilderDWParser.TABLE = 1;
PowerBuilderDWParser.COLUMN = 2;
PowerBuilderDWParser.RETRIEVE = 3;
PowerBuilderDWParser.PBSELECT = 4;
PowerBuilderDWParser.VERSION = 5;
PowerBuilderDWParser.ARGUMENTS = 6;
PowerBuilderDWParser.SORT = 7;
PowerBuilderDWParser.ANY = 8;
PowerBuilderDWParser.BLOB = 9;
PowerBuilderDWParser.BOOLEAN = 10;
PowerBuilderDWParser.BYTE = 11;
PowerBuilderDWParser.CHARACTER = 12;
PowerBuilderDWParser.CHAR = 13;
PowerBuilderDWParser.DATE_TYPE = 14;
PowerBuilderDWParser.DATETIME = 15;
PowerBuilderDWParser.DECIMAL = 16;
PowerBuilderDWParser.DEC = 17;
PowerBuilderDWParser.DOUBLE = 18;
PowerBuilderDWParser.INTEGER = 19;
PowerBuilderDWParser.INT = 20;
PowerBuilderDWParser.LONG = 21;
PowerBuilderDWParser.LONGLONG = 22;
PowerBuilderDWParser.REAL = 23;
PowerBuilderDWParser.STRING = 24;
PowerBuilderDWParser.TIME_TYPE = 25;
PowerBuilderDWParser.UNSIGNEDINTEGER = 26;
PowerBuilderDWParser.UINT = 27;
PowerBuilderDWParser.UNSIGNEDLONG = 28;
PowerBuilderDWParser.ULONG = 29;
PowerBuilderDWParser.WINDOW = 30;
PowerBuilderDWParser.TRUE = 31;
PowerBuilderDWParser.FALSE = 32;
PowerBuilderDWParser.GLOBAL = 33;
PowerBuilderDWParser.SHARED = 34;
PowerBuilderDWParser.END = 35;
PowerBuilderDWParser.INDIRECT = 36;
PowerBuilderDWParser.VARIABLES = 37;
PowerBuilderDWParser.FORWARD = 38;
PowerBuilderDWParser.PUBLIC = 39;
PowerBuilderDWParser.PRIVATE = 40;
PowerBuilderDWParser.FUNCTION = 41;
PowerBuilderDWParser.SUBROUTINE = 42;
PowerBuilderDWParser.READONLY = 43;
PowerBuilderDWParser.PROTOTYPES = 44;
PowerBuilderDWParser.TYPE = 45;
PowerBuilderDWParser.ON = 46;
PowerBuilderDWParser.TO = 47;
PowerBuilderDWParser.FROM = 48;
PowerBuilderDWParser.REF = 49;
PowerBuilderDWParser.NULL_ = 50;
PowerBuilderDWParser.UPDATE = 51;
PowerBuilderDWParser.CASE = 52;
PowerBuilderDWParser.DYNAMIC = 53;
PowerBuilderDWParser.WITHIN = 54;
PowerBuilderDWParser.PRIVATEWRITE = 55;
PowerBuilderDWParser.PROTECTED = 56;
PowerBuilderDWParser.PRIVATEREAD = 57;
PowerBuilderDWParser.PROTECTEDREAD = 58;
PowerBuilderDWParser.PROTECTEDWRITE = 59;
PowerBuilderDWParser.LOCAL = 60;
PowerBuilderDWParser.EVENT = 61;
PowerBuilderDWParser.OPEN = 62;
PowerBuilderDWParser.GOTO = 63;
PowerBuilderDWParser.ELSE = 64;
PowerBuilderDWParser.IF = 65;
PowerBuilderDWParser.THEN = 66;
PowerBuilderDWParser.ELSEIF = 67;
PowerBuilderDWParser.TRY = 68;
PowerBuilderDWParser.EXIT = 69;
PowerBuilderDWParser.CHOOSE = 70;
PowerBuilderDWParser.IS = 71;
PowerBuilderDWParser.CONTINUE = 72;
PowerBuilderDWParser.DO = 73;
PowerBuilderDWParser.WHILE = 74;
PowerBuilderDWParser.FOR = 75;
PowerBuilderDWParser.CLOSE = 76;
PowerBuilderDWParser.NEXT = 77;
PowerBuilderDWParser.LOOP = 78;
PowerBuilderDWParser.UNTIL = 79;
PowerBuilderDWParser.STEP = 80;
PowerBuilderDWParser.CATCH = 81;
PowerBuilderDWParser.FINALLY = 82;
PowerBuilderDWParser.THROW = 83;
PowerBuilderDWParser.RELEASE = 84;
PowerBuilderDWParser.CREATE = 85;
PowerBuilderDWParser.DESTROY = 86;
PowerBuilderDWParser.USING = 87;
PowerBuilderDWParser.POST = 88;
PowerBuilderDWParser.TRIGGER = 89;
PowerBuilderDWParser.SELECT = 90;
PowerBuilderDWParser.DELETE = 91;
PowerBuilderDWParser.INSERT = 92;
PowerBuilderDWParser.DESCRIBE = 93;
PowerBuilderDWParser.RETURN = 94;
PowerBuilderDWParser.OR = 95;
PowerBuilderDWParser.AND = 96;
PowerBuilderDWParser.NOT = 97;
PowerBuilderDWParser.CALL = 98;
PowerBuilderDWParser.HALT = 99;
PowerBuilderDWParser.SUPER = 100;
PowerBuilderDWParser.LIBRARY = 101;
PowerBuilderDWParser.SYSTEM = 102;
PowerBuilderDWParser.RPCFUNC = 103;
PowerBuilderDWParser.ALIAS = 104;
PowerBuilderDWParser.THROWS = 105;
PowerBuilderDWParser.AUTOINSTANTIATE = 106;
PowerBuilderDWParser.DESCRIPTOR = 107;
PowerBuilderDWParser.EQ = 108;
PowerBuilderDWParser.GT = 109;
PowerBuilderDWParser.GTE = 110;
PowerBuilderDWParser.LT = 111;
PowerBuilderDWParser.LTE = 112;
PowerBuilderDWParser.GTLT = 113;
PowerBuilderDWParser.PLUS = 114;
PowerBuilderDWParser.MINUS = 115;
PowerBuilderDWParser.PLUSEQ = 116;
PowerBuilderDWParser.MINUSEQ = 117;
PowerBuilderDWParser.COLONCOLON = 118;
PowerBuilderDWParser.MULT = 119;
PowerBuilderDWParser.DIV = 120;
PowerBuilderDWParser.MULTEQ = 121;
PowerBuilderDWParser.DIVEQ = 122;
PowerBuilderDWParser.CARAT = 123;
PowerBuilderDWParser.LCURLY = 124;
PowerBuilderDWParser.RCURLY = 125;
PowerBuilderDWParser.LBRACE = 126;
PowerBuilderDWParser.RBRACE = 127;
PowerBuilderDWParser.BRACES = 128;
PowerBuilderDWParser.TICK = 129;
PowerBuilderDWParser.DQUOTED_STRING = 130;
PowerBuilderDWParser.QUOTED_STRING = 131;
PowerBuilderDWParser.COMMA = 132;
PowerBuilderDWParser.SEMI = 133;
PowerBuilderDWParser.LPAREN = 134;
PowerBuilderDWParser.RPAREN = 135;
PowerBuilderDWParser.COLON = 136;
PowerBuilderDWParser.DQUOTE = 137;
PowerBuilderDWParser.TQ = 138;
PowerBuilderDWParser.DOUBLE_PIPE = 139;
PowerBuilderDWParser.DOTDOTDOT = 140;
PowerBuilderDWParser.NUMBER = 141;
PowerBuilderDWParser.DOT = 142;
PowerBuilderDWParser.DATE = 143;
PowerBuilderDWParser.TIME = 144;
PowerBuilderDWParser.BINDPAR = 145;
PowerBuilderDWParser.EXPORT_HEADER = 146;
PowerBuilderDWParser.ENUM = 147;
PowerBuilderDWParser.ID = 148;
PowerBuilderDWParser.RET_LIT = 149;
PowerBuilderDWParser.ARGS_LIT = 150;
PowerBuilderDWParser.SORT_LIT = 151;
PowerBuilderDWParser.LINE_CONTINUATION = 152;
PowerBuilderDWParser.SL_COMMENT = 153;
PowerBuilderDWParser.ML_COMMENT = 154;
PowerBuilderDWParser.WS = 155;

PowerBuilderDWParser.RULE_start_rule = 0;
PowerBuilderDWParser.RULE_header_rule = 1;
PowerBuilderDWParser.RULE_datawindow_rule = 2;
PowerBuilderDWParser.RULE_datawindow_property = 3;
PowerBuilderDWParser.RULE_table_attribute = 4;
PowerBuilderDWParser.RULE_column_attribute = 5;
PowerBuilderDWParser.RULE_retrieve_attribute = 6;
PowerBuilderDWParser.RULE_datawindow_property_attribute_sub = 7;
PowerBuilderDWParser.RULE_attribute_name = 8;
PowerBuilderDWParser.RULE_identifier_name = 9;
PowerBuilderDWParser.RULE_attribute_value = 10;
PowerBuilderDWParser.RULE_numeric_atom = 11;
PowerBuilderDWParser.RULE_dataTypeSub = 12;
PowerBuilderDWParser.RULE_expression = 13;
PowerBuilderDWParser.RULE_array_decl_sub = 14;
PowerBuilderDWParser.RULE_close_call_sub = 15;
PowerBuilderDWParser.RULE_expression_list = 16;
PowerBuilderDWParser.RULE_atom_sub_call1 = 17;
PowerBuilderDWParser.RULE_identifier = 18;
PowerBuilderDWParser.RULE_identifier_name_ex = 19;
PowerBuilderDWParser.RULE_atom_sub_member1 = 20;
PowerBuilderDWParser.RULE_boolean_atom = 21;

class Start_ruleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_start_rule;
    }

	EOF() {
	    return this.getToken(PowerBuilderDWParser.EOF, 0);
	};

	header_rule() {
	    return this.getTypedRuleContext(Header_ruleContext,0);
	};

	datawindow_rule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Datawindow_ruleContext);
	    } else {
	        return this.getTypedRuleContext(Datawindow_ruleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterStart_rule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitStart_rule(this);
		}
	}


}



class Header_ruleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_header_rule;
    }

	EXPORT_HEADER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.EXPORT_HEADER);
	    } else {
	        return this.getToken(PowerBuilderDWParser.EXPORT_HEADER, i);
	    }
	};


	RELEASE() {
	    return this.getToken(PowerBuilderDWParser.RELEASE, 0);
	};

	NUMBER() {
	    return this.getToken(PowerBuilderDWParser.NUMBER, 0);
	};

	SEMI() {
	    return this.getToken(PowerBuilderDWParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterHeader_rule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitHeader_rule(this);
		}
	}


}



class Datawindow_ruleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_datawindow_rule;
    }

	datawindow_property = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Datawindow_propertyContext);
	    } else {
	        return this.getTypedRuleContext(Datawindow_propertyContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterDatawindow_rule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitDatawindow_rule(this);
		}
	}


}



class Datawindow_propertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_datawindow_property;
    }

	attribute_name() {
	    return this.getTypedRuleContext(Attribute_nameContext,0);
	};

	LPAREN() {
	    return this.getToken(PowerBuilderDWParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(PowerBuilderDWParser.RPAREN, 0);
	};

	datawindow_property_attribute_sub = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Datawindow_property_attribute_subContext);
	    } else {
	        return this.getTypedRuleContext(Datawindow_property_attribute_subContext,i);
	    }
	};

	TABLE() {
	    return this.getToken(PowerBuilderDWParser.TABLE, 0);
	};

	table_attribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Table_attributeContext);
	    } else {
	        return this.getTypedRuleContext(Table_attributeContext,i);
	    }
	};

	COLUMN() {
	    return this.getToken(PowerBuilderDWParser.COLUMN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterDatawindow_property(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitDatawindow_property(this);
		}
	}


}



class Table_attributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_table_attribute;
    }

	column_attribute() {
	    return this.getTypedRuleContext(Column_attributeContext,0);
	};

	retrieve_attribute() {
	    return this.getTypedRuleContext(Retrieve_attributeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterTable_attribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitTable_attribute(this);
		}
	}


}



class Column_attributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_column_attribute;
    }

	COLUMN() {
	    return this.getToken(PowerBuilderDWParser.COLUMN, 0);
	};

	EQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.EQ);
	    } else {
	        return this.getToken(PowerBuilderDWParser.EQ, i);
	    }
	};


	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.LPAREN);
	    } else {
	        return this.getToken(PowerBuilderDWParser.LPAREN, i);
	    }
	};


	TYPE() {
	    return this.getToken(PowerBuilderDWParser.TYPE, 0);
	};

	dataTypeSub() {
	    return this.getTypedRuleContext(DataTypeSubContext,0);
	};

	numeric_atom() {
	    return this.getTypedRuleContext(Numeric_atomContext,0);
	};

	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.RPAREN);
	    } else {
	        return this.getToken(PowerBuilderDWParser.RPAREN, i);
	    }
	};


	datawindow_property_attribute_sub = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Datawindow_property_attribute_subContext);
	    } else {
	        return this.getTypedRuleContext(Datawindow_property_attribute_subContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterColumn_attribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitColumn_attribute(this);
		}
	}


}



class Retrieve_attributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_retrieve_attribute;
    }

	RET_LIT() {
	    return this.getToken(PowerBuilderDWParser.RET_LIT, 0);
	};

	ARGS_LIT() {
	    return this.getToken(PowerBuilderDWParser.ARGS_LIT, 0);
	};

	SORT_LIT() {
	    return this.getToken(PowerBuilderDWParser.SORT_LIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterRetrieve_attribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitRetrieve_attribute(this);
		}
	}


}



class Datawindow_property_attribute_subContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_datawindow_property_attribute_sub;
        this.eq = null; // Token
    }

	NULL_() {
	    return this.getToken(PowerBuilderDWParser.NULL_, 0);
	};

	numeric_atom() {
	    return this.getTypedRuleContext(Numeric_atomContext,0);
	};

	DQUOTED_STRING() {
	    return this.getToken(PowerBuilderDWParser.DQUOTED_STRING, 0);
	};

	DATE() {
	    return this.getToken(PowerBuilderDWParser.DATE, 0);
	};

	TIME() {
	    return this.getToken(PowerBuilderDWParser.TIME, 0);
	};

	attribute_name() {
	    return this.getTypedRuleContext(Attribute_nameContext,0);
	};

	EQ() {
	    return this.getToken(PowerBuilderDWParser.EQ, 0);
	};

	COMMA() {
	    return this.getToken(PowerBuilderDWParser.COMMA, 0);
	};

	attribute_value() {
	    return this.getTypedRuleContext(Attribute_valueContext,0);
	};

	LPAREN() {
	    return this.getToken(PowerBuilderDWParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(PowerBuilderDWParser.RPAREN, 0);
	};

	array_decl_sub() {
	    return this.getTypedRuleContext(Array_decl_subContext,0);
	};

	datawindow_property_attribute_sub = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Datawindow_property_attribute_subContext);
	    } else {
	        return this.getTypedRuleContext(Datawindow_property_attribute_subContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterDatawindow_property_attribute_sub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitDatawindow_property_attribute_sub(this);
		}
	}


}



class Attribute_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_attribute_name;
    }

	identifier_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Identifier_nameContext);
	    } else {
	        return this.getTypedRuleContext(Identifier_nameContext,i);
	    }
	};

	TYPE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.TYPE);
	    } else {
	        return this.getToken(PowerBuilderDWParser.TYPE, i);
	    }
	};


	UPDATE() {
	    return this.getToken(PowerBuilderDWParser.UPDATE, 0);
	};

	NUMBER() {
	    return this.getToken(PowerBuilderDWParser.NUMBER, 0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.DOT);
	    } else {
	        return this.getToken(PowerBuilderDWParser.DOT, i);
	    }
	};


	CASE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.CASE);
	    } else {
	        return this.getToken(PowerBuilderDWParser.CASE, i);
	    }
	};


	ON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.ON);
	    } else {
	        return this.getToken(PowerBuilderDWParser.ON, i);
	    }
	};


	DYNAMIC = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.DYNAMIC);
	    } else {
	        return this.getToken(PowerBuilderDWParser.DYNAMIC, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterAttribute_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitAttribute_name(this);
		}
	}


}



class Identifier_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_identifier_name;
    }

	ID() {
	    return this.getToken(PowerBuilderDWParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterIdentifier_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitIdentifier_name(this);
		}
	}


}



class Attribute_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_attribute_value;
    }

	atom_sub_call1() {
	    return this.getTypedRuleContext(Atom_sub_call1Context,0);
	};

	atom_sub_member1() {
	    return this.getTypedRuleContext(Atom_sub_member1Context,0);
	};

	numeric_atom() {
	    return this.getTypedRuleContext(Numeric_atomContext,0);
	};

	MINUS() {
	    return this.getToken(PowerBuilderDWParser.MINUS, 0);
	};

	boolean_atom() {
	    return this.getTypedRuleContext(Boolean_atomContext,0);
	};

	ENUM() {
	    return this.getToken(PowerBuilderDWParser.ENUM, 0);
	};

	DQUOTED_STRING() {
	    return this.getToken(PowerBuilderDWParser.DQUOTED_STRING, 0);
	};

	QUOTED_STRING() {
	    return this.getToken(PowerBuilderDWParser.QUOTED_STRING, 0);
	};

	DATE() {
	    return this.getToken(PowerBuilderDWParser.DATE, 0);
	};

	TIME() {
	    return this.getToken(PowerBuilderDWParser.TIME, 0);
	};

	TYPE() {
	    return this.getToken(PowerBuilderDWParser.TYPE, 0);
	};

	TO() {
	    return this.getToken(PowerBuilderDWParser.TO, 0);
	};

	FROM() {
	    return this.getToken(PowerBuilderDWParser.FROM, 0);
	};

	REF() {
	    return this.getToken(PowerBuilderDWParser.REF, 0);
	};

	NULL_() {
	    return this.getToken(PowerBuilderDWParser.NULL_, 0);
	};

	OPEN() {
	    return this.getToken(PowerBuilderDWParser.OPEN, 0);
	};

	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.LPAREN);
	    } else {
	        return this.getToken(PowerBuilderDWParser.LPAREN, i);
	    }
	};


	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.RPAREN);
	    } else {
	        return this.getToken(PowerBuilderDWParser.RPAREN, i);
	    }
	};


	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	dataTypeSub = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DataTypeSubContext);
	    } else {
	        return this.getTypedRuleContext(DataTypeSubContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.COMMA);
	    } else {
	        return this.getToken(PowerBuilderDWParser.COMMA, i);
	    }
	};


	NUMBER() {
	    return this.getToken(PowerBuilderDWParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterAttribute_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitAttribute_value(this);
		}
	}


}



class Numeric_atomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_numeric_atom;
    }

	NUMBER() {
	    return this.getToken(PowerBuilderDWParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterNumeric_atom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitNumeric_atom(this);
		}
	}


}



class DataTypeSubContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_dataTypeSub;
    }

	ANY() {
	    return this.getToken(PowerBuilderDWParser.ANY, 0);
	};

	BLOB() {
	    return this.getToken(PowerBuilderDWParser.BLOB, 0);
	};

	BOOLEAN() {
	    return this.getToken(PowerBuilderDWParser.BOOLEAN, 0);
	};

	BYTE() {
	    return this.getToken(PowerBuilderDWParser.BYTE, 0);
	};

	CHARACTER() {
	    return this.getToken(PowerBuilderDWParser.CHARACTER, 0);
	};

	CHAR() {
	    return this.getToken(PowerBuilderDWParser.CHAR, 0);
	};

	DATE_TYPE() {
	    return this.getToken(PowerBuilderDWParser.DATE_TYPE, 0);
	};

	DATETIME() {
	    return this.getToken(PowerBuilderDWParser.DATETIME, 0);
	};

	DECIMAL() {
	    return this.getToken(PowerBuilderDWParser.DECIMAL, 0);
	};

	DEC() {
	    return this.getToken(PowerBuilderDWParser.DEC, 0);
	};

	DOUBLE() {
	    return this.getToken(PowerBuilderDWParser.DOUBLE, 0);
	};

	INTEGER() {
	    return this.getToken(PowerBuilderDWParser.INTEGER, 0);
	};

	INT() {
	    return this.getToken(PowerBuilderDWParser.INT, 0);
	};

	LONG() {
	    return this.getToken(PowerBuilderDWParser.LONG, 0);
	};

	LONGLONG() {
	    return this.getToken(PowerBuilderDWParser.LONGLONG, 0);
	};

	REAL() {
	    return this.getToken(PowerBuilderDWParser.REAL, 0);
	};

	STRING() {
	    return this.getToken(PowerBuilderDWParser.STRING, 0);
	};

	TIME_TYPE() {
	    return this.getToken(PowerBuilderDWParser.TIME_TYPE, 0);
	};

	UNSIGNEDINTEGER() {
	    return this.getToken(PowerBuilderDWParser.UNSIGNEDINTEGER, 0);
	};

	UINT() {
	    return this.getToken(PowerBuilderDWParser.UINT, 0);
	};

	UNSIGNEDLONG() {
	    return this.getToken(PowerBuilderDWParser.UNSIGNEDLONG, 0);
	};

	ULONG() {
	    return this.getToken(PowerBuilderDWParser.ULONG, 0);
	};

	WINDOW() {
	    return this.getToken(PowerBuilderDWParser.WINDOW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterDataTypeSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitDataTypeSub(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_expression;
    }

	close_call_sub() {
	    return this.getTypedRuleContext(Close_call_subContext,0);
	};

	LCURLY() {
	    return this.getToken(PowerBuilderDWParser.LCURLY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitExpression(this);
		}
	}


}



class Array_decl_subContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_array_decl_sub;
    }

	BRACES() {
	    return this.getToken(PowerBuilderDWParser.BRACES, 0);
	};

	LBRACE() {
	    return this.getToken(PowerBuilderDWParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(PowerBuilderDWParser.RBRACE, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.NUMBER);
	    } else {
	        return this.getToken(PowerBuilderDWParser.NUMBER, i);
	    }
	};


	TO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.TO);
	    } else {
	        return this.getToken(PowerBuilderDWParser.TO, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.COMMA);
	    } else {
	        return this.getToken(PowerBuilderDWParser.COMMA, i);
	    }
	};


	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.PLUS);
	    } else {
	        return this.getToken(PowerBuilderDWParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.MINUS);
	    } else {
	        return this.getToken(PowerBuilderDWParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterArray_decl_sub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitArray_decl_sub(this);
		}
	}


}



class Close_call_subContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_close_call_sub;
    }

	CLOSE() {
	    return this.getToken(PowerBuilderDWParser.CLOSE, 0);
	};

	LPAREN() {
	    return this.getToken(PowerBuilderDWParser.LPAREN, 0);
	};

	expression_list() {
	    return this.getTypedRuleContext(Expression_listContext,0);
	};

	RPAREN() {
	    return this.getToken(PowerBuilderDWParser.RPAREN, 0);
	};

	HALT() {
	    return this.getToken(PowerBuilderDWParser.HALT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterClose_call_sub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitClose_call_sub(this);
		}
	}


}



class Expression_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_expression_list;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	REF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.REF);
	    } else {
	        return this.getToken(PowerBuilderDWParser.REF, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PowerBuilderDWParser.COMMA);
	    } else {
	        return this.getToken(PowerBuilderDWParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterExpression_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitExpression_list(this);
		}
	}


}



class Atom_sub_call1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_atom_sub_call1;
    }

	LPAREN() {
	    return this.getToken(PowerBuilderDWParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(PowerBuilderDWParser.RPAREN, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	DESCRIBE() {
	    return this.getToken(PowerBuilderDWParser.DESCRIBE, 0);
	};

	expression_list() {
	    return this.getTypedRuleContext(Expression_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterAtom_sub_call1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitAtom_sub_call1(this);
		}
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_identifier;
    }

	identifier_name() {
	    return this.getTypedRuleContext(Identifier_nameContext,0);
	};

	SUPER() {
	    return this.getToken(PowerBuilderDWParser.SUPER, 0);
	};

	COLONCOLON() {
	    return this.getToken(PowerBuilderDWParser.COLONCOLON, 0);
	};

	CREATE() {
	    return this.getToken(PowerBuilderDWParser.CREATE, 0);
	};

	DESTROY() {
	    return this.getToken(PowerBuilderDWParser.DESTROY, 0);
	};

	identifier_name_ex() {
	    return this.getTypedRuleContext(Identifier_name_exContext,0);
	};

	DOT() {
	    return this.getToken(PowerBuilderDWParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class Identifier_name_exContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_identifier_name_ex;
    }

	identifier_name() {
	    return this.getTypedRuleContext(Identifier_nameContext,0);
	};

	SELECT() {
	    return this.getToken(PowerBuilderDWParser.SELECT, 0);
	};

	TYPE() {
	    return this.getToken(PowerBuilderDWParser.TYPE, 0);
	};

	UPDATE() {
	    return this.getToken(PowerBuilderDWParser.UPDATE, 0);
	};

	DELETE() {
	    return this.getToken(PowerBuilderDWParser.DELETE, 0);
	};

	OPEN() {
	    return this.getToken(PowerBuilderDWParser.OPEN, 0);
	};

	CLOSE() {
	    return this.getToken(PowerBuilderDWParser.CLOSE, 0);
	};

	GOTO() {
	    return this.getToken(PowerBuilderDWParser.GOTO, 0);
	};

	INSERT() {
	    return this.getToken(PowerBuilderDWParser.INSERT, 0);
	};

	DESCRIBE() {
	    return this.getToken(PowerBuilderDWParser.DESCRIBE, 0);
	};

	TIME() {
	    return this.getToken(PowerBuilderDWParser.TIME, 0);
	};

	READONLY() {
	    return this.getToken(PowerBuilderDWParser.READONLY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterIdentifier_name_ex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitIdentifier_name_ex(this);
		}
	}


}



class Atom_sub_member1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_atom_sub_member1;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterAtom_sub_member1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitAtom_sub_member1(this);
		}
	}


}



class Boolean_atomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PowerBuilderDWParser.RULE_boolean_atom;
    }

	TRUE() {
	    return this.getToken(PowerBuilderDWParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(PowerBuilderDWParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.enterBoolean_atom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PowerBuilderDWParserListener ) {
	        listener.exitBoolean_atom(this);
		}
	}


}




PowerBuilderDWParser.Start_ruleContext = Start_ruleContext; 
PowerBuilderDWParser.Header_ruleContext = Header_ruleContext; 
PowerBuilderDWParser.Datawindow_ruleContext = Datawindow_ruleContext; 
PowerBuilderDWParser.Datawindow_propertyContext = Datawindow_propertyContext; 
PowerBuilderDWParser.Table_attributeContext = Table_attributeContext; 
PowerBuilderDWParser.Column_attributeContext = Column_attributeContext; 
PowerBuilderDWParser.Retrieve_attributeContext = Retrieve_attributeContext; 
PowerBuilderDWParser.Datawindow_property_attribute_subContext = Datawindow_property_attribute_subContext; 
PowerBuilderDWParser.Attribute_nameContext = Attribute_nameContext; 
PowerBuilderDWParser.Identifier_nameContext = Identifier_nameContext; 
PowerBuilderDWParser.Attribute_valueContext = Attribute_valueContext; 
PowerBuilderDWParser.Numeric_atomContext = Numeric_atomContext; 
PowerBuilderDWParser.DataTypeSubContext = DataTypeSubContext; 
PowerBuilderDWParser.ExpressionContext = ExpressionContext; 
PowerBuilderDWParser.Array_decl_subContext = Array_decl_subContext; 
PowerBuilderDWParser.Close_call_subContext = Close_call_subContext; 
PowerBuilderDWParser.Expression_listContext = Expression_listContext; 
PowerBuilderDWParser.Atom_sub_call1Context = Atom_sub_call1Context; 
PowerBuilderDWParser.IdentifierContext = IdentifierContext; 
PowerBuilderDWParser.Identifier_name_exContext = Identifier_name_exContext; 
PowerBuilderDWParser.Atom_sub_member1Context = Atom_sub_member1Context; 
PowerBuilderDWParser.Boolean_atomContext = Boolean_atomContext; 
