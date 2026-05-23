// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/verilog/verilog/VerilogPreParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import VerilogPreParserListener from './VerilogPreParserListener.js';
const serializedATN = [4,1,245,321,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,1,0,5,0,96,8,0,10,0,12,
0,99,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,3,1,118,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,
1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,
1,10,1,11,1,11,1,12,1,12,5,12,157,8,12,10,12,12,12,160,9,12,1,13,1,13,1,
14,1,14,1,14,1,14,1,14,5,14,169,8,14,10,14,12,14,172,9,14,1,14,3,14,175,
8,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,5,15,184,8,15,10,15,12,15,187,9,
15,1,15,3,15,190,8,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,
22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,5,25,228,8,25,
10,25,12,25,231,9,25,1,26,1,26,1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,30,1,
30,1,30,1,30,1,30,1,30,5,30,248,8,30,10,30,12,30,251,9,30,3,30,253,8,30,
1,31,1,31,1,31,3,31,258,8,31,1,31,1,31,1,32,1,32,1,33,1,33,1,34,1,34,1,34,
1,34,5,34,270,8,34,10,34,12,34,273,9,34,1,34,1,34,1,34,1,34,1,34,3,34,280,
8,34,1,35,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,39,1,
39,1,39,1,40,1,40,1,40,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,43,
1,43,1,43,1,43,1,44,1,44,1,45,1,45,1,45,1,45,1,46,1,46,1,46,0,0,47,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,0,0,309,0,97,1,
0,0,0,2,117,1,0,0,0,4,119,1,0,0,0,6,125,1,0,0,0,8,128,1,0,0,0,10,132,1,0,
0,0,12,134,1,0,0,0,14,138,1,0,0,0,16,143,1,0,0,0,18,146,1,0,0,0,20,149,1,
0,0,0,22,152,1,0,0,0,24,158,1,0,0,0,26,161,1,0,0,0,28,163,1,0,0,0,30,178,
1,0,0,0,32,193,1,0,0,0,34,199,1,0,0,0,36,201,1,0,0,0,38,209,1,0,0,0,40,211,
1,0,0,0,42,213,1,0,0,0,44,215,1,0,0,0,46,217,1,0,0,0,48,219,1,0,0,0,50,229,
1,0,0,0,52,232,1,0,0,0,54,234,1,0,0,0,56,236,1,0,0,0,58,239,1,0,0,0,60,241,
1,0,0,0,62,257,1,0,0,0,64,261,1,0,0,0,66,263,1,0,0,0,68,279,1,0,0,0,70,281,
1,0,0,0,72,284,1,0,0,0,74,286,1,0,0,0,76,288,1,0,0,0,78,293,1,0,0,0,80,296,
1,0,0,0,82,299,1,0,0,0,84,302,1,0,0,0,86,308,1,0,0,0,88,312,1,0,0,0,90,314,
1,0,0,0,92,318,1,0,0,0,94,96,3,2,1,0,95,94,1,0,0,0,96,99,1,0,0,0,97,95,1,
0,0,0,97,98,1,0,0,0,98,1,1,0,0,0,99,97,1,0,0,0,100,118,3,4,2,0,101,118,3,
6,3,0,102,118,3,8,4,0,103,118,3,16,8,0,104,118,3,18,9,0,105,118,3,28,14,
0,106,118,3,30,15,0,107,118,3,32,16,0,108,118,3,36,18,0,109,118,3,56,28,
0,110,118,3,60,30,0,111,118,3,70,35,0,112,118,3,76,38,0,113,118,3,78,39,
0,114,118,3,84,42,0,115,118,3,86,43,0,116,118,3,90,45,0,117,100,1,0,0,0,
117,101,1,0,0,0,117,102,1,0,0,0,117,103,1,0,0,0,117,104,1,0,0,0,117,105,
1,0,0,0,117,106,1,0,0,0,117,107,1,0,0,0,117,108,1,0,0,0,117,109,1,0,0,0,
117,110,1,0,0,0,117,111,1,0,0,0,117,112,1,0,0,0,117,113,1,0,0,0,117,114,
1,0,0,0,117,115,1,0,0,0,117,116,1,0,0,0,118,3,1,0,0,0,119,120,5,158,0,0,
120,121,5,212,0,0,121,122,5,149,0,0,122,123,3,92,46,0,123,124,5,149,0,0,
124,5,1,0,0,0,125,126,5,158,0,0,126,127,5,213,0,0,127,7,1,0,0,0,128,129,
5,158,0,0,129,130,5,214,0,0,130,131,3,10,5,0,131,9,1,0,0,0,132,133,5,233,
0,0,133,11,1,0,0,0,134,135,5,158,0,0,135,136,5,216,0,0,136,137,3,24,12,0,
137,13,1,0,0,0,138,139,5,158,0,0,139,140,5,217,0,0,140,141,3,44,22,0,141,
142,3,24,12,0,142,15,1,0,0,0,143,144,5,158,0,0,144,145,5,218,0,0,145,17,
1,0,0,0,146,147,5,158,0,0,147,148,5,219,0,0,148,19,1,0,0,0,149,150,5,158,
0,0,150,151,5,220,0,0,151,21,1,0,0,0,152,153,5,235,0,0,153,23,1,0,0,0,154,
157,3,72,36,0,155,157,3,2,1,0,156,154,1,0,0,0,156,155,1,0,0,0,157,160,1,
0,0,0,158,156,1,0,0,0,158,159,1,0,0,0,159,25,1,0,0,0,160,158,1,0,0,0,161,
162,5,198,0,0,162,27,1,0,0,0,163,164,5,158,0,0,164,165,5,221,0,0,165,166,
3,44,22,0,166,170,3,24,12,0,167,169,3,14,7,0,168,167,1,0,0,0,169,172,1,0,
0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,174,1,0,0,0,172,170,1,0,0,0,173,
175,3,12,6,0,174,173,1,0,0,0,174,175,1,0,0,0,175,176,1,0,0,0,176,177,3,20,
10,0,177,29,1,0,0,0,178,179,5,158,0,0,179,180,5,222,0,0,180,181,3,44,22,
0,181,185,3,24,12,0,182,184,3,14,7,0,183,182,1,0,0,0,184,187,1,0,0,0,185,
183,1,0,0,0,185,186,1,0,0,0,186,189,1,0,0,0,187,185,1,0,0,0,188,190,3,12,
6,0,189,188,1,0,0,0,189,190,1,0,0,0,190,191,1,0,0,0,191,192,3,20,10,0,192,
31,1,0,0,0,193,194,5,158,0,0,194,195,5,223,0,0,195,196,5,149,0,0,196,197,
3,22,11,0,197,198,5,149,0,0,198,33,1,0,0,0,199,200,5,201,0,0,200,35,1,0,
0,0,201,202,5,158,0,0,202,203,5,224,0,0,203,204,3,58,29,0,204,205,5,149,
0,0,205,206,3,22,11,0,206,207,5,149,0,0,207,208,3,34,17,0,208,37,1,0,0,0,
209,210,5,236,0,0,210,39,1,0,0,0,211,212,5,237,0,0,212,41,1,0,0,0,213,214,
5,238,0,0,214,43,1,0,0,0,215,216,5,245,0,0,216,45,1,0,0,0,217,218,5,234,
0,0,218,47,1,0,0,0,219,220,5,239,0,0,220,49,1,0,0,0,221,228,3,52,26,0,222,
228,3,38,19,0,223,228,3,40,20,0,224,228,3,42,21,0,225,228,3,48,24,0,226,
228,3,74,37,0,227,221,1,0,0,0,227,222,1,0,0,0,227,223,1,0,0,0,227,224,1,
0,0,0,227,225,1,0,0,0,227,226,1,0,0,0,228,231,1,0,0,0,229,227,1,0,0,0,229,
230,1,0,0,0,230,51,1,0,0,0,231,229,1,0,0,0,232,233,5,240,0,0,233,53,1,0,
0,0,234,235,5,231,0,0,235,55,1,0,0,0,236,237,5,158,0,0,237,238,5,225,0,0,
238,57,1,0,0,0,239,240,5,201,0,0,240,59,1,0,0,0,241,242,5,158,0,0,242,243,
5,226,0,0,243,252,3,66,33,0,244,249,3,62,31,0,245,246,5,147,0,0,246,248,
3,62,31,0,247,245,1,0,0,0,248,251,1,0,0,0,249,247,1,0,0,0,249,250,1,0,0,
0,250,253,1,0,0,0,251,249,1,0,0,0,252,244,1,0,0,0,252,253,1,0,0,0,253,61,
1,0,0,0,254,255,3,64,32,0,255,256,5,154,0,0,256,258,1,0,0,0,257,254,1,0,
0,0,257,258,1,0,0,0,258,259,1,0,0,0,259,260,3,68,34,0,260,63,1,0,0,0,261,
262,5,198,0,0,262,65,1,0,0,0,263,264,5,198,0,0,264,67,1,0,0,0,265,266,5,
166,0,0,266,271,3,62,31,0,267,268,5,147,0,0,268,270,3,62,31,0,269,267,1,
0,0,0,270,273,1,0,0,0,271,269,1,0,0,0,271,272,1,0,0,0,272,274,1,0,0,0,273,
271,1,0,0,0,274,275,5,180,0,0,275,280,1,0,0,0,276,280,3,58,29,0,277,280,
3,74,37,0,278,280,3,26,13,0,279,265,1,0,0,0,279,276,1,0,0,0,279,277,1,0,
0,0,279,278,1,0,0,0,280,69,1,0,0,0,281,282,5,158,0,0,282,283,5,227,0,0,283,
71,1,0,0,0,284,285,5,241,0,0,285,73,1,0,0,0,286,287,5,199,0,0,287,75,1,0,
0,0,288,289,5,158,0,0,289,290,5,215,0,0,290,291,3,46,23,0,291,292,3,50,25,
0,292,77,1,0,0,0,293,294,5,158,0,0,294,295,3,54,27,0,295,79,1,0,0,0,296,
297,5,243,0,0,297,298,5,242,0,0,298,81,1,0,0,0,299,300,5,243,0,0,300,301,
5,242,0,0,301,83,1,0,0,0,302,303,5,158,0,0,303,304,5,228,0,0,304,305,3,82,
41,0,305,306,5,182,0,0,306,307,3,80,40,0,307,85,1,0,0,0,308,309,5,158,0,
0,309,310,5,229,0,0,310,311,3,88,44,0,311,87,1,0,0,0,312,313,5,244,0,0,313,
89,1,0,0,0,314,315,5,158,0,0,315,316,5,230,0,0,316,317,3,44,22,0,317,91,
1,0,0,0,318,319,5,232,0,0,319,93,1,0,0,0,15,97,117,156,158,170,174,185,189,
227,229,249,252,257,271,279];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class VerilogPreParser extends antlr4.Parser {

    static grammarFileName = "VerilogPreParser.g4";
    static literalNames = [ null, "'always'", "'and'", "'assign'", "'automatic'", 
                            "'begin'", "'buf'", "'bufif1'", "'bufif0'", 
                            "'case'", "'casex'", "'casez'", "'cell'", "'cmos'", 
                            "'config'", "'deassign'", "'default'", "'defparam'", 
                            "'design'", "'disable'", "'$fullskew'", "'$hold'", 
                            "'$nochange'", "'$period'", "'$recovery'", "'$recrem'", 
                            "'$removal'", "'$setup'", "'$setuphold'", "'$skew'", 
                            "'$timeskew'", "'$width'", "'edge'", "'else'", 
                            "'end'", "'endcase'", "'endconfig'", "'endfunction'", 
                            "'endgenerate'", "'endmodule'", "'endprimitive'", 
                            "'endspecify'", "'endtable'", "'endtask'", "'event'", 
                            "'for'", "'force'", "'forever'", "'fork'", "'function'", 
                            "'generate'", "'genvar'", "'highz1'", "'highz0'", 
                            "'if'", "'ifnone'", "'include'", "'initial'", 
                            "'inout'", "'input'", "'instance'", "'integer'", 
                            "'join'", "'large'", "'liblist'", "'library'", 
                            "'localparam'", "'macromodule'", "'medium'", 
                            "'-incdir'", "'module'", "'nand'", "'negedge'", 
                            "'nmos'", "'nor'", "'noshowcancelled'", "'not'", 
                            "'notif1'", "'notif0'", "'or'", "'output'", 
                            "'parameter'", "'PATHPULSE$'", "'pmos'", "'posedge'", 
                            "'primitive'", "'pulldown'", "'pull1'", "'pullup'", 
                            "'pull0'", "'pulsestyle_ondetect'", "'pulsestyle_onevent'", 
                            "'rcmos'", "'real'", "'realtime'", "'reg'", 
                            "'release'", "'repeat'", "'rnmos'", "'rpmos'", 
                            "'rtran'", "'rtranif1'", "'rtranif0'", "'scalared'", 
                            "'showcancelled'", "'signed'", "'small'", "'specify'", 
                            "'specparam'", "'strong1'", "'strong0'", "'supply1'", 
                            "'supply0'", "'table'", "'task'", "'time'", 
                            "'tran'", "'tranif1'", "'tranif0'", "'tri'", 
                            "'triand'", "'tri1'", "'trior'", "'trireg'", 
                            "'tri0'", "'use'", "'uwire'", "'vectored'", 
                            "'wait'", "'wand'", "'weak1'", "'weak0'", "'while'", 
                            "'wire'", "'wor'", "'xnor'", "'xor'", "'&'", 
                            "'&&'", "'&&&'", "'*'", "'**'", "'*>'", "'@'", 
                            "'^'", "'^~'", "':'", "','", "'$'", "'\"'", 
                            "'.'", "'!'", "'!='", "'!=='", "'='", "'=='", 
                            "'==='", "'=>'", null, "'>'", "'>='", "'>>'", 
                            "'>>>'", "'#'", "'['", "'{'", "'('", "'<'", 
                            "'<='", "'<<'", "'<<<'", "'-'", "'-:'", "'->'", 
                            "'%'", "'+'", "'+:'", "'?'", "']'", "'}'", "')'", 
                            "';'", "'/'", "'~'", "'~&'", "'~^'", "'~|'", 
                            "'|'", "'||'", null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, "'celldefine'", null, null, 
                            null, null, "'end_keywords'", "'endcelldefine'", 
                            null, null, null, null, null, "'nounconnected_drive'", 
                            null, "'resetall'", null, null, null, null, 
                            null, null, null, null, "'``'", null, "'`\\`\"'", 
                            "'`\"'" ];
    static symbolicNames = [ null, "ALWAYS", "AND", "ASSIGN", "AUTOMATIC", 
                             "BEGIN", "BUF", "BUFIFONE", "BUFIFZERO", "CASE", 
                             "CASEX", "CASEZ", "CELL", "CMOS", "CONFIG", 
                             "DEASSIGN", "DEFAULT", "DEFPARAM", "DESIGN", 
                             "DISABLE", "DLFULLSKEW", "DLHOLD", "DLNOCHANGE", 
                             "DLPERIOD", "DLRECOVERY", "DLRECREM", "DLREMOVAL", 
                             "DLSETUP", "DLSETUPHOLD", "DLSKEW", "DLTIMESKEW", 
                             "DLWIDTH", "EDGE", "ELSE", "END", "ENDCASE", 
                             "ENDCONFIG", "ENDFUNCTION", "ENDGENERATE", 
                             "ENDMODULE", "ENDPRIMITIVE", "ENDSPECIFY", 
                             "ENDTABLE", "ENDTASK", "EVENT", "FOR", "FORCE", 
                             "FOREVER", "FORK", "FUNCTION", "GENERATE", 
                             "GENVAR", "HIGHZONE", "HIGHZZERO", "IF", "IFNONE", 
                             "INCLUDE", "INITIAL", "INOUT", "INPUT", "INSTANCE", 
                             "INTEGER", "JOIN", "LARGE", "LIBLIST", "LIBRARY", 
                             "LOCALPARAM", "MACROMODULE", "MEDIUM", "MIINCDIR", 
                             "MODULE", "NAND", "NEGEDGE", "NMOS", "NOR", 
                             "NOSHOWCANCELLED", "NOT", "NOTIFONE", "NOTIFZERO", 
                             "OR", "OUTPUT", "PARAMETER", "PATHPULSEDL", 
                             "PMOS", "POSEDGE", "PRIMITIVE", "PULLDOWN", 
                             "PULLONE", "PULLUP", "PULLZERO", "PULSESTYLE_ONDETECT", 
                             "PULSESTYLE_ONEVENT", "RCMOS", "REAL", "REALTIME", 
                             "REG", "RELEASE", "REPEAT", "RNMOS", "RPMOS", 
                             "RTRAN", "RTRANIFONE", "RTRANIFZERO", "SCALARED", 
                             "SHOWCANCELLED", "SIGNED", "SMALL", "SPECIFY", 
                             "SPECPARAM", "STRONGONE", "STRONGZERO", "SUPPLYONE", 
                             "SUPPLYZERO", "TABLE", "TASK", "TIME", "TRAN", 
                             "TRANIFONE", "TRANIFZERO", "TRI", "TRIAND", 
                             "TRIONE", "TRIOR", "TRIREG", "TRIZERO", "USE", 
                             "UWIRE", "VECTORED", "WAIT", "WAND", "WEAKONE", 
                             "WEAKZERO", "WHILE", "WIRE", "WOR", "XNOR", 
                             "XOR", "AM", "AMAM", "AMAMAM", "AS", "ASAS", 
                             "ASGT", "AT", "CA", "CATI", "CL", "CO", "DL", 
                             "DQ", "DT", "EM", "EMEQ", "EMEQEQ", "EQ", "EQEQ", 
                             "EQEQEQ", "EQGT", "GA", "GT", "GTEQ", "GTGT", 
                             "GTGTGT", "HA", "LB", "LC", "LP", "LT", "LTEQ", 
                             "LTLT", "LTLTLT", "MI", "MICL", "MIGT", "MO", 
                             "PL", "PLCL", "QM", "RB", "RC", "RP", "SC", 
                             "SL", "TI", "TIAM", "TICA", "TIVL", "VL", "VLVL", 
                             "BINARY_BASE", "BLOCK_COMMENT", "DECIMAL_BASE", 
                             "ESCAPED_IDENTIFIER", "EXPONENTIAL_NUMBER", 
                             "FIXED_POINT_NUMBER", "HEX_BASE", "LINE_COMMENT", 
                             "OCTAL_BASE", "SIMPLE_IDENTIFIER", "STRING", 
                             "SYSTEM_TF_IDENTIFIER", "UNSIGNED_NUMBER", 
                             "WHITE_SPACE", "BINARY_VALUE", "X_OR_Z_UNDERSCORE", 
                             "EDGE_DESCRIPTOR", "HEX_VALUE", "FILE_PATH_SPEC", 
                             "OCTAL_VALUE", "EDGE_SYMBOL", "LEVEL_ONLY_SYMBOL", 
                             "OUTPUT_OR_LEVEL_SYMBOL", "BEGIN_KEYWORDS_DIRECTIVE", 
                             "CELLDEFINE_DIRECTIVE", "DEFAULT_NETTYPE_DIRECTIVE", 
                             "DEFINE_DIRECTIVE", "ELSE_DIRECTIVE", "ELSIF_DIRECTIVE", 
                             "END_KEYWORDS_DIRECTIVE", "ENDCELLDEFINE_DIRECTIVE", 
                             "ENDIF_DIRECTIVE", "IFDEF_DIRECTIVE", "IFNDEF_DIRECTIVE", 
                             "INCLUDE_DIRECTIVE", "LINE_DIRECTIVE", "NOUNCONNECTED_DRIVE_DIRECTIVE", 
                             "PRAGMA_DIRECTIVE", "RESETALL_DIRECTIVE", "TIMESCALE_DIRECTIVE", 
                             "UNCONNECTED_DRIVE_DIRECTIVE", "UNDEF_DIRECTIVE", 
                             "MACRO_USAGE", "VERSION_SPECIFIER", "DEFAULT_NETTYPE_VALUE", 
                             "MACRO_NAME", "FILENAME", "MACRO_DELIMITER", 
                             "MACRO_ESC_NEWLINE", "MACRO_ESC_QUOTE", "MACRO_QUOTE", 
                             "MACRO_TEXT", "SOURCE_TEXT", "TIME_UNIT", "TIME_VALUE", 
                             "UNCONNECTED_DRIVE_VALUE", "MACRO_IDENTIFIER" ];
    static ruleNames = [ "source_text", "compiler_directive", "begin_keywords_directive", 
                         "celldefine_directive", "default_nettype_directive", 
                         "default_nettype_value", "else_directive", "elsif_directive", 
                         "end_keywords_directive", "endcelldefine_directive", 
                         "endif_directive", "filename", "group_of_lines", 
                         "identifier", "ifdef_directive", "ifndef_directive", 
                         "include_directive", "level", "line_directive", 
                         "macro_delimiter", "macro_esc_newline", "macro_esc_quote", 
                         "macro_identifier", "macro_name", "macro_quote", 
                         "macro_text", "macro_text_", "macro_usage", "nounconnected_drive_directive", 
                         "number", "pragma_directive", "pragma_expression", 
                         "pragma_keyword", "pragma_name", "pragma_value", 
                         "resetall_directive", "source_text_", "string_", 
                         "text_macro_definition", "text_macro_usage", "time_precision", 
                         "time_unit", "timescale_directive", "unconnected_drive_directive", 
                         "unconnected_drive_value", "undef_directive", "version_specifier" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = VerilogPreParser.ruleNames;
        this.literalNames = VerilogPreParser.literalNames;
        this.symbolicNames = VerilogPreParser.symbolicNames;
    }



	source_text() {
	    let localctx = new Source_textContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, VerilogPreParser.RULE_source_text);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===158) {
	            this.state = 94;
	            this.compiler_directive();
	            this.state = 99;
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



	compiler_directive() {
	    let localctx = new Compiler_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, VerilogPreParser.RULE_compiler_directive);
	    try {
	        this.state = 117;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 100;
	            this.begin_keywords_directive();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 101;
	            this.celldefine_directive();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 102;
	            this.default_nettype_directive();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 103;
	            this.end_keywords_directive();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 104;
	            this.endcelldefine_directive();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 105;
	            this.ifdef_directive();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 106;
	            this.ifndef_directive();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 107;
	            this.include_directive();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 108;
	            this.line_directive();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 109;
	            this.nounconnected_drive_directive();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 110;
	            this.pragma_directive();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 111;
	            this.resetall_directive();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 112;
	            this.text_macro_definition();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 113;
	            this.text_macro_usage();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 114;
	            this.timescale_directive();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 115;
	            this.unconnected_drive_directive();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 116;
	            this.undef_directive();
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



	begin_keywords_directive() {
	    let localctx = new Begin_keywords_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, VerilogPreParser.RULE_begin_keywords_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(VerilogPreParser.GA);
	        this.state = 120;
	        this.match(VerilogPreParser.BEGIN_KEYWORDS_DIRECTIVE);
	        this.state = 121;
	        this.match(VerilogPreParser.DQ);
	        this.state = 122;
	        this.version_specifier();
	        this.state = 123;
	        this.match(VerilogPreParser.DQ);
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



	celldefine_directive() {
	    let localctx = new Celldefine_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, VerilogPreParser.RULE_celldefine_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(VerilogPreParser.GA);
	        this.state = 126;
	        this.match(VerilogPreParser.CELLDEFINE_DIRECTIVE);
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



	default_nettype_directive() {
	    let localctx = new Default_nettype_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, VerilogPreParser.RULE_default_nettype_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(VerilogPreParser.GA);
	        this.state = 129;
	        this.match(VerilogPreParser.DEFAULT_NETTYPE_DIRECTIVE);
	        this.state = 130;
	        this.default_nettype_value();
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



	default_nettype_value() {
	    let localctx = new Default_nettype_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, VerilogPreParser.RULE_default_nettype_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(VerilogPreParser.DEFAULT_NETTYPE_VALUE);
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



	else_directive() {
	    let localctx = new Else_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, VerilogPreParser.RULE_else_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(VerilogPreParser.GA);
	        this.state = 135;
	        this.match(VerilogPreParser.ELSE_DIRECTIVE);
	        this.state = 136;
	        this.group_of_lines();
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



	elsif_directive() {
	    let localctx = new Elsif_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, VerilogPreParser.RULE_elsif_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(VerilogPreParser.GA);
	        this.state = 139;
	        this.match(VerilogPreParser.ELSIF_DIRECTIVE);
	        this.state = 140;
	        this.macro_identifier();
	        this.state = 141;
	        this.group_of_lines();
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



	end_keywords_directive() {
	    let localctx = new End_keywords_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, VerilogPreParser.RULE_end_keywords_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.match(VerilogPreParser.GA);
	        this.state = 144;
	        this.match(VerilogPreParser.END_KEYWORDS_DIRECTIVE);
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



	endcelldefine_directive() {
	    let localctx = new Endcelldefine_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, VerilogPreParser.RULE_endcelldefine_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(VerilogPreParser.GA);
	        this.state = 147;
	        this.match(VerilogPreParser.ENDCELLDEFINE_DIRECTIVE);
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



	endif_directive() {
	    let localctx = new Endif_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, VerilogPreParser.RULE_endif_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(VerilogPreParser.GA);
	        this.state = 150;
	        this.match(VerilogPreParser.ENDIF_DIRECTIVE);
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



	filename() {
	    let localctx = new FilenameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, VerilogPreParser.RULE_filename);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(VerilogPreParser.FILENAME);
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



	group_of_lines() {
	    let localctx = new Group_of_linesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, VerilogPreParser.RULE_group_of_lines);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 156;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 241:
	                    this.state = 154;
	                    this.source_text_();
	                    break;
	                case 158:
	                    this.state = 155;
	                    this.compiler_directive();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 160;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, VerilogPreParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(VerilogPreParser.SIMPLE_IDENTIFIER);
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



	ifdef_directive() {
	    let localctx = new Ifdef_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, VerilogPreParser.RULE_ifdef_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(VerilogPreParser.GA);
	        this.state = 164;
	        this.match(VerilogPreParser.IFDEF_DIRECTIVE);
	        this.state = 165;
	        this.macro_identifier();
	        this.state = 166;
	        this.group_of_lines();
	        this.state = 170;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 167;
	                this.elsif_directive(); 
	            }
	            this.state = 172;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	        this.state = 174;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 173;
	            this.else_directive();

	        }
	        this.state = 176;
	        this.endif_directive();
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



	ifndef_directive() {
	    let localctx = new Ifndef_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, VerilogPreParser.RULE_ifndef_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(VerilogPreParser.GA);
	        this.state = 179;
	        this.match(VerilogPreParser.IFNDEF_DIRECTIVE);
	        this.state = 180;
	        this.macro_identifier();
	        this.state = 181;
	        this.group_of_lines();
	        this.state = 185;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 182;
	                this.elsif_directive(); 
	            }
	            this.state = 187;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	        this.state = 189;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 188;
	            this.else_directive();

	        }
	        this.state = 191;
	        this.endif_directive();
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



	include_directive() {
	    let localctx = new Include_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, VerilogPreParser.RULE_include_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(VerilogPreParser.GA);
	        this.state = 194;
	        this.match(VerilogPreParser.INCLUDE_DIRECTIVE);
	        this.state = 195;
	        this.match(VerilogPreParser.DQ);
	        this.state = 196;
	        this.filename();
	        this.state = 197;
	        this.match(VerilogPreParser.DQ);
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



	level() {
	    let localctx = new LevelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, VerilogPreParser.RULE_level);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(VerilogPreParser.UNSIGNED_NUMBER);
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



	line_directive() {
	    let localctx = new Line_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, VerilogPreParser.RULE_line_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.match(VerilogPreParser.GA);
	        this.state = 202;
	        this.match(VerilogPreParser.LINE_DIRECTIVE);
	        this.state = 203;
	        this.number();
	        this.state = 204;
	        this.match(VerilogPreParser.DQ);
	        this.state = 205;
	        this.filename();
	        this.state = 206;
	        this.match(VerilogPreParser.DQ);
	        this.state = 207;
	        this.level();
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



	macro_delimiter() {
	    let localctx = new Macro_delimiterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, VerilogPreParser.RULE_macro_delimiter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.match(VerilogPreParser.MACRO_DELIMITER);
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



	macro_esc_newline() {
	    let localctx = new Macro_esc_newlineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, VerilogPreParser.RULE_macro_esc_newline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        this.match(VerilogPreParser.MACRO_ESC_NEWLINE);
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



	macro_esc_quote() {
	    let localctx = new Macro_esc_quoteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, VerilogPreParser.RULE_macro_esc_quote);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.match(VerilogPreParser.MACRO_ESC_QUOTE);
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



	macro_identifier() {
	    let localctx = new Macro_identifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, VerilogPreParser.RULE_macro_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(VerilogPreParser.MACRO_IDENTIFIER);
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



	macro_name() {
	    let localctx = new Macro_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, VerilogPreParser.RULE_macro_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.match(VerilogPreParser.MACRO_NAME);
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



	macro_quote() {
	    let localctx = new Macro_quoteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, VerilogPreParser.RULE_macro_quote);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        this.match(VerilogPreParser.MACRO_QUOTE);
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



	macro_text() {
	    let localctx = new Macro_textContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, VerilogPreParser.RULE_macro_text);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===199 || ((((_la - 236)) & ~0x1f) === 0 && ((1 << (_la - 236)) & 31) !== 0)) {
	            this.state = 227;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 240:
	                this.state = 221;
	                this.macro_text_();
	                break;
	            case 236:
	                this.state = 222;
	                this.macro_delimiter();
	                break;
	            case 237:
	                this.state = 223;
	                this.macro_esc_newline();
	                break;
	            case 238:
	                this.state = 224;
	                this.macro_esc_quote();
	                break;
	            case 239:
	                this.state = 225;
	                this.macro_quote();
	                break;
	            case 199:
	                this.state = 226;
	                this.string_();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 231;
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



	macro_text_() {
	    let localctx = new Macro_text_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, VerilogPreParser.RULE_macro_text_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(VerilogPreParser.MACRO_TEXT);
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



	macro_usage() {
	    let localctx = new Macro_usageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, VerilogPreParser.RULE_macro_usage);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.match(VerilogPreParser.MACRO_USAGE);
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



	nounconnected_drive_directive() {
	    let localctx = new Nounconnected_drive_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, VerilogPreParser.RULE_nounconnected_drive_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.match(VerilogPreParser.GA);
	        this.state = 237;
	        this.match(VerilogPreParser.NOUNCONNECTED_DRIVE_DIRECTIVE);
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, VerilogPreParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(VerilogPreParser.UNSIGNED_NUMBER);
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



	pragma_directive() {
	    let localctx = new Pragma_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, VerilogPreParser.RULE_pragma_directive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this.match(VerilogPreParser.GA);
	        this.state = 242;
	        this.match(VerilogPreParser.PRAGMA_DIRECTIVE);
	        this.state = 243;
	        this.pragma_name();
	        this.state = 252;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===166 || ((((_la - 198)) & ~0x1f) === 0 && ((1 << (_la - 198)) & 11) !== 0)) {
	            this.state = 244;
	            this.pragma_expression();
	            this.state = 249;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===147) {
	                this.state = 245;
	                this.match(VerilogPreParser.CO);
	                this.state = 246;
	                this.pragma_expression();
	                this.state = 251;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
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



	pragma_expression() {
	    let localctx = new Pragma_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, VerilogPreParser.RULE_pragma_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 254;
	            this.pragma_keyword();
	            this.state = 255;
	            this.match(VerilogPreParser.EQ);

	        }
	        this.state = 259;
	        this.pragma_value();
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



	pragma_keyword() {
	    let localctx = new Pragma_keywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, VerilogPreParser.RULE_pragma_keyword);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.match(VerilogPreParser.SIMPLE_IDENTIFIER);
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



	pragma_name() {
	    let localctx = new Pragma_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, VerilogPreParser.RULE_pragma_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(VerilogPreParser.SIMPLE_IDENTIFIER);
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



	pragma_value() {
	    let localctx = new Pragma_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, VerilogPreParser.RULE_pragma_value);
	    var _la = 0;
	    try {
	        this.state = 279;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 166:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 265;
	            this.match(VerilogPreParser.LP);
	            this.state = 266;
	            this.pragma_expression();
	            this.state = 271;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===147) {
	                this.state = 267;
	                this.match(VerilogPreParser.CO);
	                this.state = 268;
	                this.pragma_expression();
	                this.state = 273;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 274;
	            this.match(VerilogPreParser.RP);
	            break;
	        case 201:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 276;
	            this.number();
	            break;
	        case 199:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 277;
	            this.string_();
	            break;
	        case 198:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 278;
	            this.identifier();
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



	resetall_directive() {
	    let localctx = new Resetall_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, VerilogPreParser.RULE_resetall_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        this.match(VerilogPreParser.GA);
	        this.state = 282;
	        this.match(VerilogPreParser.RESETALL_DIRECTIVE);
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



	source_text_() {
	    let localctx = new Source_text_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, VerilogPreParser.RULE_source_text_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this.match(VerilogPreParser.SOURCE_TEXT);
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



	string_() {
	    let localctx = new String_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, VerilogPreParser.RULE_string_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
	        this.match(VerilogPreParser.STRING);
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



	text_macro_definition() {
	    let localctx = new Text_macro_definitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, VerilogPreParser.RULE_text_macro_definition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
	        this.match(VerilogPreParser.GA);
	        this.state = 289;
	        this.match(VerilogPreParser.DEFINE_DIRECTIVE);
	        this.state = 290;
	        this.macro_name();
	        this.state = 291;
	        this.macro_text();
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



	text_macro_usage() {
	    let localctx = new Text_macro_usageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, VerilogPreParser.RULE_text_macro_usage);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293;
	        this.match(VerilogPreParser.GA);
	        this.state = 294;
	        this.macro_usage();
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



	time_precision() {
	    let localctx = new Time_precisionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, VerilogPreParser.RULE_time_precision);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this.match(VerilogPreParser.TIME_VALUE);
	        this.state = 297;
	        this.match(VerilogPreParser.TIME_UNIT);
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



	time_unit() {
	    let localctx = new Time_unitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, VerilogPreParser.RULE_time_unit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 299;
	        this.match(VerilogPreParser.TIME_VALUE);
	        this.state = 300;
	        this.match(VerilogPreParser.TIME_UNIT);
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



	timescale_directive() {
	    let localctx = new Timescale_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, VerilogPreParser.RULE_timescale_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.match(VerilogPreParser.GA);
	        this.state = 303;
	        this.match(VerilogPreParser.TIMESCALE_DIRECTIVE);
	        this.state = 304;
	        this.time_unit();
	        this.state = 305;
	        this.match(VerilogPreParser.SL);
	        this.state = 306;
	        this.time_precision();
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



	unconnected_drive_directive() {
	    let localctx = new Unconnected_drive_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, VerilogPreParser.RULE_unconnected_drive_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        this.match(VerilogPreParser.GA);
	        this.state = 309;
	        this.match(VerilogPreParser.UNCONNECTED_DRIVE_DIRECTIVE);
	        this.state = 310;
	        this.unconnected_drive_value();
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



	unconnected_drive_value() {
	    let localctx = new Unconnected_drive_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, VerilogPreParser.RULE_unconnected_drive_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
	        this.match(VerilogPreParser.UNCONNECTED_DRIVE_VALUE);
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



	undef_directive() {
	    let localctx = new Undef_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, VerilogPreParser.RULE_undef_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this.match(VerilogPreParser.GA);
	        this.state = 315;
	        this.match(VerilogPreParser.UNDEF_DIRECTIVE);
	        this.state = 316;
	        this.macro_identifier();
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



	version_specifier() {
	    let localctx = new Version_specifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, VerilogPreParser.RULE_version_specifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
	        this.match(VerilogPreParser.VERSION_SPECIFIER);
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

VerilogPreParser.EOF = antlr4.Token.EOF;
VerilogPreParser.ALWAYS = 1;
VerilogPreParser.AND = 2;
VerilogPreParser.ASSIGN = 3;
VerilogPreParser.AUTOMATIC = 4;
VerilogPreParser.BEGIN = 5;
VerilogPreParser.BUF = 6;
VerilogPreParser.BUFIFONE = 7;
VerilogPreParser.BUFIFZERO = 8;
VerilogPreParser.CASE = 9;
VerilogPreParser.CASEX = 10;
VerilogPreParser.CASEZ = 11;
VerilogPreParser.CELL = 12;
VerilogPreParser.CMOS = 13;
VerilogPreParser.CONFIG = 14;
VerilogPreParser.DEASSIGN = 15;
VerilogPreParser.DEFAULT = 16;
VerilogPreParser.DEFPARAM = 17;
VerilogPreParser.DESIGN = 18;
VerilogPreParser.DISABLE = 19;
VerilogPreParser.DLFULLSKEW = 20;
VerilogPreParser.DLHOLD = 21;
VerilogPreParser.DLNOCHANGE = 22;
VerilogPreParser.DLPERIOD = 23;
VerilogPreParser.DLRECOVERY = 24;
VerilogPreParser.DLRECREM = 25;
VerilogPreParser.DLREMOVAL = 26;
VerilogPreParser.DLSETUP = 27;
VerilogPreParser.DLSETUPHOLD = 28;
VerilogPreParser.DLSKEW = 29;
VerilogPreParser.DLTIMESKEW = 30;
VerilogPreParser.DLWIDTH = 31;
VerilogPreParser.EDGE = 32;
VerilogPreParser.ELSE = 33;
VerilogPreParser.END = 34;
VerilogPreParser.ENDCASE = 35;
VerilogPreParser.ENDCONFIG = 36;
VerilogPreParser.ENDFUNCTION = 37;
VerilogPreParser.ENDGENERATE = 38;
VerilogPreParser.ENDMODULE = 39;
VerilogPreParser.ENDPRIMITIVE = 40;
VerilogPreParser.ENDSPECIFY = 41;
VerilogPreParser.ENDTABLE = 42;
VerilogPreParser.ENDTASK = 43;
VerilogPreParser.EVENT = 44;
VerilogPreParser.FOR = 45;
VerilogPreParser.FORCE = 46;
VerilogPreParser.FOREVER = 47;
VerilogPreParser.FORK = 48;
VerilogPreParser.FUNCTION = 49;
VerilogPreParser.GENERATE = 50;
VerilogPreParser.GENVAR = 51;
VerilogPreParser.HIGHZONE = 52;
VerilogPreParser.HIGHZZERO = 53;
VerilogPreParser.IF = 54;
VerilogPreParser.IFNONE = 55;
VerilogPreParser.INCLUDE = 56;
VerilogPreParser.INITIAL = 57;
VerilogPreParser.INOUT = 58;
VerilogPreParser.INPUT = 59;
VerilogPreParser.INSTANCE = 60;
VerilogPreParser.INTEGER = 61;
VerilogPreParser.JOIN = 62;
VerilogPreParser.LARGE = 63;
VerilogPreParser.LIBLIST = 64;
VerilogPreParser.LIBRARY = 65;
VerilogPreParser.LOCALPARAM = 66;
VerilogPreParser.MACROMODULE = 67;
VerilogPreParser.MEDIUM = 68;
VerilogPreParser.MIINCDIR = 69;
VerilogPreParser.MODULE = 70;
VerilogPreParser.NAND = 71;
VerilogPreParser.NEGEDGE = 72;
VerilogPreParser.NMOS = 73;
VerilogPreParser.NOR = 74;
VerilogPreParser.NOSHOWCANCELLED = 75;
VerilogPreParser.NOT = 76;
VerilogPreParser.NOTIFONE = 77;
VerilogPreParser.NOTIFZERO = 78;
VerilogPreParser.OR = 79;
VerilogPreParser.OUTPUT = 80;
VerilogPreParser.PARAMETER = 81;
VerilogPreParser.PATHPULSEDL = 82;
VerilogPreParser.PMOS = 83;
VerilogPreParser.POSEDGE = 84;
VerilogPreParser.PRIMITIVE = 85;
VerilogPreParser.PULLDOWN = 86;
VerilogPreParser.PULLONE = 87;
VerilogPreParser.PULLUP = 88;
VerilogPreParser.PULLZERO = 89;
VerilogPreParser.PULSESTYLE_ONDETECT = 90;
VerilogPreParser.PULSESTYLE_ONEVENT = 91;
VerilogPreParser.RCMOS = 92;
VerilogPreParser.REAL = 93;
VerilogPreParser.REALTIME = 94;
VerilogPreParser.REG = 95;
VerilogPreParser.RELEASE = 96;
VerilogPreParser.REPEAT = 97;
VerilogPreParser.RNMOS = 98;
VerilogPreParser.RPMOS = 99;
VerilogPreParser.RTRAN = 100;
VerilogPreParser.RTRANIFONE = 101;
VerilogPreParser.RTRANIFZERO = 102;
VerilogPreParser.SCALARED = 103;
VerilogPreParser.SHOWCANCELLED = 104;
VerilogPreParser.SIGNED = 105;
VerilogPreParser.SMALL = 106;
VerilogPreParser.SPECIFY = 107;
VerilogPreParser.SPECPARAM = 108;
VerilogPreParser.STRONGONE = 109;
VerilogPreParser.STRONGZERO = 110;
VerilogPreParser.SUPPLYONE = 111;
VerilogPreParser.SUPPLYZERO = 112;
VerilogPreParser.TABLE = 113;
VerilogPreParser.TASK = 114;
VerilogPreParser.TIME = 115;
VerilogPreParser.TRAN = 116;
VerilogPreParser.TRANIFONE = 117;
VerilogPreParser.TRANIFZERO = 118;
VerilogPreParser.TRI = 119;
VerilogPreParser.TRIAND = 120;
VerilogPreParser.TRIONE = 121;
VerilogPreParser.TRIOR = 122;
VerilogPreParser.TRIREG = 123;
VerilogPreParser.TRIZERO = 124;
VerilogPreParser.USE = 125;
VerilogPreParser.UWIRE = 126;
VerilogPreParser.VECTORED = 127;
VerilogPreParser.WAIT = 128;
VerilogPreParser.WAND = 129;
VerilogPreParser.WEAKONE = 130;
VerilogPreParser.WEAKZERO = 131;
VerilogPreParser.WHILE = 132;
VerilogPreParser.WIRE = 133;
VerilogPreParser.WOR = 134;
VerilogPreParser.XNOR = 135;
VerilogPreParser.XOR = 136;
VerilogPreParser.AM = 137;
VerilogPreParser.AMAM = 138;
VerilogPreParser.AMAMAM = 139;
VerilogPreParser.AS = 140;
VerilogPreParser.ASAS = 141;
VerilogPreParser.ASGT = 142;
VerilogPreParser.AT = 143;
VerilogPreParser.CA = 144;
VerilogPreParser.CATI = 145;
VerilogPreParser.CL = 146;
VerilogPreParser.CO = 147;
VerilogPreParser.DL = 148;
VerilogPreParser.DQ = 149;
VerilogPreParser.DT = 150;
VerilogPreParser.EM = 151;
VerilogPreParser.EMEQ = 152;
VerilogPreParser.EMEQEQ = 153;
VerilogPreParser.EQ = 154;
VerilogPreParser.EQEQ = 155;
VerilogPreParser.EQEQEQ = 156;
VerilogPreParser.EQGT = 157;
VerilogPreParser.GA = 158;
VerilogPreParser.GT = 159;
VerilogPreParser.GTEQ = 160;
VerilogPreParser.GTGT = 161;
VerilogPreParser.GTGTGT = 162;
VerilogPreParser.HA = 163;
VerilogPreParser.LB = 164;
VerilogPreParser.LC = 165;
VerilogPreParser.LP = 166;
VerilogPreParser.LT = 167;
VerilogPreParser.LTEQ = 168;
VerilogPreParser.LTLT = 169;
VerilogPreParser.LTLTLT = 170;
VerilogPreParser.MI = 171;
VerilogPreParser.MICL = 172;
VerilogPreParser.MIGT = 173;
VerilogPreParser.MO = 174;
VerilogPreParser.PL = 175;
VerilogPreParser.PLCL = 176;
VerilogPreParser.QM = 177;
VerilogPreParser.RB = 178;
VerilogPreParser.RC = 179;
VerilogPreParser.RP = 180;
VerilogPreParser.SC = 181;
VerilogPreParser.SL = 182;
VerilogPreParser.TI = 183;
VerilogPreParser.TIAM = 184;
VerilogPreParser.TICA = 185;
VerilogPreParser.TIVL = 186;
VerilogPreParser.VL = 187;
VerilogPreParser.VLVL = 188;
VerilogPreParser.BINARY_BASE = 189;
VerilogPreParser.BLOCK_COMMENT = 190;
VerilogPreParser.DECIMAL_BASE = 191;
VerilogPreParser.ESCAPED_IDENTIFIER = 192;
VerilogPreParser.EXPONENTIAL_NUMBER = 193;
VerilogPreParser.FIXED_POINT_NUMBER = 194;
VerilogPreParser.HEX_BASE = 195;
VerilogPreParser.LINE_COMMENT = 196;
VerilogPreParser.OCTAL_BASE = 197;
VerilogPreParser.SIMPLE_IDENTIFIER = 198;
VerilogPreParser.STRING = 199;
VerilogPreParser.SYSTEM_TF_IDENTIFIER = 200;
VerilogPreParser.UNSIGNED_NUMBER = 201;
VerilogPreParser.WHITE_SPACE = 202;
VerilogPreParser.BINARY_VALUE = 203;
VerilogPreParser.X_OR_Z_UNDERSCORE = 204;
VerilogPreParser.EDGE_DESCRIPTOR = 205;
VerilogPreParser.HEX_VALUE = 206;
VerilogPreParser.FILE_PATH_SPEC = 207;
VerilogPreParser.OCTAL_VALUE = 208;
VerilogPreParser.EDGE_SYMBOL = 209;
VerilogPreParser.LEVEL_ONLY_SYMBOL = 210;
VerilogPreParser.OUTPUT_OR_LEVEL_SYMBOL = 211;
VerilogPreParser.BEGIN_KEYWORDS_DIRECTIVE = 212;
VerilogPreParser.CELLDEFINE_DIRECTIVE = 213;
VerilogPreParser.DEFAULT_NETTYPE_DIRECTIVE = 214;
VerilogPreParser.DEFINE_DIRECTIVE = 215;
VerilogPreParser.ELSE_DIRECTIVE = 216;
VerilogPreParser.ELSIF_DIRECTIVE = 217;
VerilogPreParser.END_KEYWORDS_DIRECTIVE = 218;
VerilogPreParser.ENDCELLDEFINE_DIRECTIVE = 219;
VerilogPreParser.ENDIF_DIRECTIVE = 220;
VerilogPreParser.IFDEF_DIRECTIVE = 221;
VerilogPreParser.IFNDEF_DIRECTIVE = 222;
VerilogPreParser.INCLUDE_DIRECTIVE = 223;
VerilogPreParser.LINE_DIRECTIVE = 224;
VerilogPreParser.NOUNCONNECTED_DRIVE_DIRECTIVE = 225;
VerilogPreParser.PRAGMA_DIRECTIVE = 226;
VerilogPreParser.RESETALL_DIRECTIVE = 227;
VerilogPreParser.TIMESCALE_DIRECTIVE = 228;
VerilogPreParser.UNCONNECTED_DRIVE_DIRECTIVE = 229;
VerilogPreParser.UNDEF_DIRECTIVE = 230;
VerilogPreParser.MACRO_USAGE = 231;
VerilogPreParser.VERSION_SPECIFIER = 232;
VerilogPreParser.DEFAULT_NETTYPE_VALUE = 233;
VerilogPreParser.MACRO_NAME = 234;
VerilogPreParser.FILENAME = 235;
VerilogPreParser.MACRO_DELIMITER = 236;
VerilogPreParser.MACRO_ESC_NEWLINE = 237;
VerilogPreParser.MACRO_ESC_QUOTE = 238;
VerilogPreParser.MACRO_QUOTE = 239;
VerilogPreParser.MACRO_TEXT = 240;
VerilogPreParser.SOURCE_TEXT = 241;
VerilogPreParser.TIME_UNIT = 242;
VerilogPreParser.TIME_VALUE = 243;
VerilogPreParser.UNCONNECTED_DRIVE_VALUE = 244;
VerilogPreParser.MACRO_IDENTIFIER = 245;

VerilogPreParser.RULE_source_text = 0;
VerilogPreParser.RULE_compiler_directive = 1;
VerilogPreParser.RULE_begin_keywords_directive = 2;
VerilogPreParser.RULE_celldefine_directive = 3;
VerilogPreParser.RULE_default_nettype_directive = 4;
VerilogPreParser.RULE_default_nettype_value = 5;
VerilogPreParser.RULE_else_directive = 6;
VerilogPreParser.RULE_elsif_directive = 7;
VerilogPreParser.RULE_end_keywords_directive = 8;
VerilogPreParser.RULE_endcelldefine_directive = 9;
VerilogPreParser.RULE_endif_directive = 10;
VerilogPreParser.RULE_filename = 11;
VerilogPreParser.RULE_group_of_lines = 12;
VerilogPreParser.RULE_identifier = 13;
VerilogPreParser.RULE_ifdef_directive = 14;
VerilogPreParser.RULE_ifndef_directive = 15;
VerilogPreParser.RULE_include_directive = 16;
VerilogPreParser.RULE_level = 17;
VerilogPreParser.RULE_line_directive = 18;
VerilogPreParser.RULE_macro_delimiter = 19;
VerilogPreParser.RULE_macro_esc_newline = 20;
VerilogPreParser.RULE_macro_esc_quote = 21;
VerilogPreParser.RULE_macro_identifier = 22;
VerilogPreParser.RULE_macro_name = 23;
VerilogPreParser.RULE_macro_quote = 24;
VerilogPreParser.RULE_macro_text = 25;
VerilogPreParser.RULE_macro_text_ = 26;
VerilogPreParser.RULE_macro_usage = 27;
VerilogPreParser.RULE_nounconnected_drive_directive = 28;
VerilogPreParser.RULE_number = 29;
VerilogPreParser.RULE_pragma_directive = 30;
VerilogPreParser.RULE_pragma_expression = 31;
VerilogPreParser.RULE_pragma_keyword = 32;
VerilogPreParser.RULE_pragma_name = 33;
VerilogPreParser.RULE_pragma_value = 34;
VerilogPreParser.RULE_resetall_directive = 35;
VerilogPreParser.RULE_source_text_ = 36;
VerilogPreParser.RULE_string_ = 37;
VerilogPreParser.RULE_text_macro_definition = 38;
VerilogPreParser.RULE_text_macro_usage = 39;
VerilogPreParser.RULE_time_precision = 40;
VerilogPreParser.RULE_time_unit = 41;
VerilogPreParser.RULE_timescale_directive = 42;
VerilogPreParser.RULE_unconnected_drive_directive = 43;
VerilogPreParser.RULE_unconnected_drive_value = 44;
VerilogPreParser.RULE_undef_directive = 45;
VerilogPreParser.RULE_version_specifier = 46;

class Source_textContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_source_text;
    }

	compiler_directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Compiler_directiveContext);
	    } else {
	        return this.getTypedRuleContext(Compiler_directiveContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterSource_text(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitSource_text(this);
		}
	}


}



class Compiler_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_compiler_directive;
    }

	begin_keywords_directive() {
	    return this.getTypedRuleContext(Begin_keywords_directiveContext,0);
	};

	celldefine_directive() {
	    return this.getTypedRuleContext(Celldefine_directiveContext,0);
	};

	default_nettype_directive() {
	    return this.getTypedRuleContext(Default_nettype_directiveContext,0);
	};

	end_keywords_directive() {
	    return this.getTypedRuleContext(End_keywords_directiveContext,0);
	};

	endcelldefine_directive() {
	    return this.getTypedRuleContext(Endcelldefine_directiveContext,0);
	};

	ifdef_directive() {
	    return this.getTypedRuleContext(Ifdef_directiveContext,0);
	};

	ifndef_directive() {
	    return this.getTypedRuleContext(Ifndef_directiveContext,0);
	};

	include_directive() {
	    return this.getTypedRuleContext(Include_directiveContext,0);
	};

	line_directive() {
	    return this.getTypedRuleContext(Line_directiveContext,0);
	};

	nounconnected_drive_directive() {
	    return this.getTypedRuleContext(Nounconnected_drive_directiveContext,0);
	};

	pragma_directive() {
	    return this.getTypedRuleContext(Pragma_directiveContext,0);
	};

	resetall_directive() {
	    return this.getTypedRuleContext(Resetall_directiveContext,0);
	};

	text_macro_definition() {
	    return this.getTypedRuleContext(Text_macro_definitionContext,0);
	};

	text_macro_usage() {
	    return this.getTypedRuleContext(Text_macro_usageContext,0);
	};

	timescale_directive() {
	    return this.getTypedRuleContext(Timescale_directiveContext,0);
	};

	unconnected_drive_directive() {
	    return this.getTypedRuleContext(Unconnected_drive_directiveContext,0);
	};

	undef_directive() {
	    return this.getTypedRuleContext(Undef_directiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterCompiler_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitCompiler_directive(this);
		}
	}


}



class Begin_keywords_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_begin_keywords_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	BEGIN_KEYWORDS_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.BEGIN_KEYWORDS_DIRECTIVE, 0);
	};

	DQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VerilogPreParser.DQ);
	    } else {
	        return this.getToken(VerilogPreParser.DQ, i);
	    }
	};


	version_specifier() {
	    return this.getTypedRuleContext(Version_specifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterBegin_keywords_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitBegin_keywords_directive(this);
		}
	}


}



class Celldefine_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_celldefine_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	CELLDEFINE_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.CELLDEFINE_DIRECTIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterCelldefine_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitCelldefine_directive(this);
		}
	}


}



class Default_nettype_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_default_nettype_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	DEFAULT_NETTYPE_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.DEFAULT_NETTYPE_DIRECTIVE, 0);
	};

	default_nettype_value() {
	    return this.getTypedRuleContext(Default_nettype_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterDefault_nettype_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitDefault_nettype_directive(this);
		}
	}


}



class Default_nettype_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_default_nettype_value;
    }

	DEFAULT_NETTYPE_VALUE() {
	    return this.getToken(VerilogPreParser.DEFAULT_NETTYPE_VALUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterDefault_nettype_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitDefault_nettype_value(this);
		}
	}


}



class Else_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_else_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	ELSE_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.ELSE_DIRECTIVE, 0);
	};

	group_of_lines() {
	    return this.getTypedRuleContext(Group_of_linesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterElse_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitElse_directive(this);
		}
	}


}



class Elsif_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_elsif_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	ELSIF_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.ELSIF_DIRECTIVE, 0);
	};

	macro_identifier() {
	    return this.getTypedRuleContext(Macro_identifierContext,0);
	};

	group_of_lines() {
	    return this.getTypedRuleContext(Group_of_linesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterElsif_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitElsif_directive(this);
		}
	}


}



class End_keywords_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_end_keywords_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	END_KEYWORDS_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.END_KEYWORDS_DIRECTIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterEnd_keywords_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitEnd_keywords_directive(this);
		}
	}


}



class Endcelldefine_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_endcelldefine_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	ENDCELLDEFINE_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.ENDCELLDEFINE_DIRECTIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterEndcelldefine_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitEndcelldefine_directive(this);
		}
	}


}



class Endif_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_endif_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	ENDIF_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.ENDIF_DIRECTIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterEndif_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitEndif_directive(this);
		}
	}


}



class FilenameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_filename;
    }

	FILENAME() {
	    return this.getToken(VerilogPreParser.FILENAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterFilename(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitFilename(this);
		}
	}


}



class Group_of_linesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_group_of_lines;
    }

	source_text_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Source_text_Context);
	    } else {
	        return this.getTypedRuleContext(Source_text_Context,i);
	    }
	};

	compiler_directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Compiler_directiveContext);
	    } else {
	        return this.getTypedRuleContext(Compiler_directiveContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterGroup_of_lines(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitGroup_of_lines(this);
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
        this.ruleIndex = VerilogPreParser.RULE_identifier;
    }

	SIMPLE_IDENTIFIER() {
	    return this.getToken(VerilogPreParser.SIMPLE_IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class Ifdef_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_ifdef_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	IFDEF_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.IFDEF_DIRECTIVE, 0);
	};

	macro_identifier() {
	    return this.getTypedRuleContext(Macro_identifierContext,0);
	};

	group_of_lines() {
	    return this.getTypedRuleContext(Group_of_linesContext,0);
	};

	endif_directive() {
	    return this.getTypedRuleContext(Endif_directiveContext,0);
	};

	elsif_directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Elsif_directiveContext);
	    } else {
	        return this.getTypedRuleContext(Elsif_directiveContext,i);
	    }
	};

	else_directive() {
	    return this.getTypedRuleContext(Else_directiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterIfdef_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitIfdef_directive(this);
		}
	}


}



class Ifndef_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_ifndef_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	IFNDEF_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.IFNDEF_DIRECTIVE, 0);
	};

	macro_identifier() {
	    return this.getTypedRuleContext(Macro_identifierContext,0);
	};

	group_of_lines() {
	    return this.getTypedRuleContext(Group_of_linesContext,0);
	};

	endif_directive() {
	    return this.getTypedRuleContext(Endif_directiveContext,0);
	};

	elsif_directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Elsif_directiveContext);
	    } else {
	        return this.getTypedRuleContext(Elsif_directiveContext,i);
	    }
	};

	else_directive() {
	    return this.getTypedRuleContext(Else_directiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterIfndef_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitIfndef_directive(this);
		}
	}


}



class Include_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_include_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	INCLUDE_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.INCLUDE_DIRECTIVE, 0);
	};

	DQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VerilogPreParser.DQ);
	    } else {
	        return this.getToken(VerilogPreParser.DQ, i);
	    }
	};


	filename() {
	    return this.getTypedRuleContext(FilenameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterInclude_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitInclude_directive(this);
		}
	}


}



class LevelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_level;
    }

	UNSIGNED_NUMBER() {
	    return this.getToken(VerilogPreParser.UNSIGNED_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterLevel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitLevel(this);
		}
	}


}



class Line_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_line_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	LINE_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.LINE_DIRECTIVE, 0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	DQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VerilogPreParser.DQ);
	    } else {
	        return this.getToken(VerilogPreParser.DQ, i);
	    }
	};


	filename() {
	    return this.getTypedRuleContext(FilenameContext,0);
	};

	level() {
	    return this.getTypedRuleContext(LevelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterLine_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitLine_directive(this);
		}
	}


}



class Macro_delimiterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_macro_delimiter;
    }

	MACRO_DELIMITER() {
	    return this.getToken(VerilogPreParser.MACRO_DELIMITER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterMacro_delimiter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitMacro_delimiter(this);
		}
	}


}



class Macro_esc_newlineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_macro_esc_newline;
    }

	MACRO_ESC_NEWLINE() {
	    return this.getToken(VerilogPreParser.MACRO_ESC_NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterMacro_esc_newline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitMacro_esc_newline(this);
		}
	}


}



class Macro_esc_quoteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_macro_esc_quote;
    }

	MACRO_ESC_QUOTE() {
	    return this.getToken(VerilogPreParser.MACRO_ESC_QUOTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterMacro_esc_quote(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitMacro_esc_quote(this);
		}
	}


}



class Macro_identifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_macro_identifier;
    }

	MACRO_IDENTIFIER() {
	    return this.getToken(VerilogPreParser.MACRO_IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterMacro_identifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitMacro_identifier(this);
		}
	}


}



class Macro_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_macro_name;
    }

	MACRO_NAME() {
	    return this.getToken(VerilogPreParser.MACRO_NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterMacro_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitMacro_name(this);
		}
	}


}



class Macro_quoteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_macro_quote;
    }

	MACRO_QUOTE() {
	    return this.getToken(VerilogPreParser.MACRO_QUOTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterMacro_quote(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitMacro_quote(this);
		}
	}


}



class Macro_textContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_macro_text;
    }

	macro_text_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Macro_text_Context);
	    } else {
	        return this.getTypedRuleContext(Macro_text_Context,i);
	    }
	};

	macro_delimiter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Macro_delimiterContext);
	    } else {
	        return this.getTypedRuleContext(Macro_delimiterContext,i);
	    }
	};

	macro_esc_newline = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Macro_esc_newlineContext);
	    } else {
	        return this.getTypedRuleContext(Macro_esc_newlineContext,i);
	    }
	};

	macro_esc_quote = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Macro_esc_quoteContext);
	    } else {
	        return this.getTypedRuleContext(Macro_esc_quoteContext,i);
	    }
	};

	macro_quote = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Macro_quoteContext);
	    } else {
	        return this.getTypedRuleContext(Macro_quoteContext,i);
	    }
	};

	string_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(String_Context);
	    } else {
	        return this.getTypedRuleContext(String_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterMacro_text(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitMacro_text(this);
		}
	}


}



class Macro_text_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_macro_text_;
    }

	MACRO_TEXT() {
	    return this.getToken(VerilogPreParser.MACRO_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterMacro_text_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitMacro_text_(this);
		}
	}


}



class Macro_usageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_macro_usage;
    }

	MACRO_USAGE() {
	    return this.getToken(VerilogPreParser.MACRO_USAGE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterMacro_usage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitMacro_usage(this);
		}
	}


}



class Nounconnected_drive_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_nounconnected_drive_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	NOUNCONNECTED_DRIVE_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.NOUNCONNECTED_DRIVE_DIRECTIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterNounconnected_drive_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitNounconnected_drive_directive(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_number;
    }

	UNSIGNED_NUMBER() {
	    return this.getToken(VerilogPreParser.UNSIGNED_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitNumber(this);
		}
	}


}



class Pragma_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_pragma_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	PRAGMA_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.PRAGMA_DIRECTIVE, 0);
	};

	pragma_name() {
	    return this.getTypedRuleContext(Pragma_nameContext,0);
	};

	pragma_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Pragma_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Pragma_expressionContext,i);
	    }
	};

	CO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VerilogPreParser.CO);
	    } else {
	        return this.getToken(VerilogPreParser.CO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterPragma_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitPragma_directive(this);
		}
	}


}



class Pragma_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_pragma_expression;
    }

	pragma_value() {
	    return this.getTypedRuleContext(Pragma_valueContext,0);
	};

	pragma_keyword() {
	    return this.getTypedRuleContext(Pragma_keywordContext,0);
	};

	EQ() {
	    return this.getToken(VerilogPreParser.EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterPragma_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitPragma_expression(this);
		}
	}


}



class Pragma_keywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_pragma_keyword;
    }

	SIMPLE_IDENTIFIER() {
	    return this.getToken(VerilogPreParser.SIMPLE_IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterPragma_keyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitPragma_keyword(this);
		}
	}


}



class Pragma_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_pragma_name;
    }

	SIMPLE_IDENTIFIER() {
	    return this.getToken(VerilogPreParser.SIMPLE_IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterPragma_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitPragma_name(this);
		}
	}


}



class Pragma_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_pragma_value;
    }

	LP() {
	    return this.getToken(VerilogPreParser.LP, 0);
	};

	pragma_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Pragma_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Pragma_expressionContext,i);
	    }
	};

	RP() {
	    return this.getToken(VerilogPreParser.RP, 0);
	};

	CO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VerilogPreParser.CO);
	    } else {
	        return this.getToken(VerilogPreParser.CO, i);
	    }
	};


	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	string_() {
	    return this.getTypedRuleContext(String_Context,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterPragma_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitPragma_value(this);
		}
	}


}



class Resetall_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_resetall_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	RESETALL_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.RESETALL_DIRECTIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterResetall_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitResetall_directive(this);
		}
	}


}



class Source_text_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_source_text_;
    }

	SOURCE_TEXT() {
	    return this.getToken(VerilogPreParser.SOURCE_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterSource_text_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitSource_text_(this);
		}
	}


}



class String_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_string_;
    }

	STRING() {
	    return this.getToken(VerilogPreParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterString_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitString_(this);
		}
	}


}



class Text_macro_definitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_text_macro_definition;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	DEFINE_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.DEFINE_DIRECTIVE, 0);
	};

	macro_name() {
	    return this.getTypedRuleContext(Macro_nameContext,0);
	};

	macro_text() {
	    return this.getTypedRuleContext(Macro_textContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterText_macro_definition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitText_macro_definition(this);
		}
	}


}



class Text_macro_usageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_text_macro_usage;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	macro_usage() {
	    return this.getTypedRuleContext(Macro_usageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterText_macro_usage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitText_macro_usage(this);
		}
	}


}



class Time_precisionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_time_precision;
    }

	TIME_VALUE() {
	    return this.getToken(VerilogPreParser.TIME_VALUE, 0);
	};

	TIME_UNIT() {
	    return this.getToken(VerilogPreParser.TIME_UNIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterTime_precision(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitTime_precision(this);
		}
	}


}



class Time_unitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_time_unit;
    }

	TIME_VALUE() {
	    return this.getToken(VerilogPreParser.TIME_VALUE, 0);
	};

	TIME_UNIT() {
	    return this.getToken(VerilogPreParser.TIME_UNIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterTime_unit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitTime_unit(this);
		}
	}


}



class Timescale_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_timescale_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	TIMESCALE_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.TIMESCALE_DIRECTIVE, 0);
	};

	time_unit() {
	    return this.getTypedRuleContext(Time_unitContext,0);
	};

	SL() {
	    return this.getToken(VerilogPreParser.SL, 0);
	};

	time_precision() {
	    return this.getTypedRuleContext(Time_precisionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterTimescale_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitTimescale_directive(this);
		}
	}


}



class Unconnected_drive_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_unconnected_drive_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	UNCONNECTED_DRIVE_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.UNCONNECTED_DRIVE_DIRECTIVE, 0);
	};

	unconnected_drive_value() {
	    return this.getTypedRuleContext(Unconnected_drive_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterUnconnected_drive_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitUnconnected_drive_directive(this);
		}
	}


}



class Unconnected_drive_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_unconnected_drive_value;
    }

	UNCONNECTED_DRIVE_VALUE() {
	    return this.getToken(VerilogPreParser.UNCONNECTED_DRIVE_VALUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterUnconnected_drive_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitUnconnected_drive_value(this);
		}
	}


}



class Undef_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_undef_directive;
    }

	GA() {
	    return this.getToken(VerilogPreParser.GA, 0);
	};

	UNDEF_DIRECTIVE() {
	    return this.getToken(VerilogPreParser.UNDEF_DIRECTIVE, 0);
	};

	macro_identifier() {
	    return this.getTypedRuleContext(Macro_identifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterUndef_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitUndef_directive(this);
		}
	}


}



class Version_specifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VerilogPreParser.RULE_version_specifier;
    }

	VERSION_SPECIFIER() {
	    return this.getToken(VerilogPreParser.VERSION_SPECIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.enterVersion_specifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VerilogPreParserListener ) {
	        listener.exitVersion_specifier(this);
		}
	}


}




VerilogPreParser.Source_textContext = Source_textContext; 
VerilogPreParser.Compiler_directiveContext = Compiler_directiveContext; 
VerilogPreParser.Begin_keywords_directiveContext = Begin_keywords_directiveContext; 
VerilogPreParser.Celldefine_directiveContext = Celldefine_directiveContext; 
VerilogPreParser.Default_nettype_directiveContext = Default_nettype_directiveContext; 
VerilogPreParser.Default_nettype_valueContext = Default_nettype_valueContext; 
VerilogPreParser.Else_directiveContext = Else_directiveContext; 
VerilogPreParser.Elsif_directiveContext = Elsif_directiveContext; 
VerilogPreParser.End_keywords_directiveContext = End_keywords_directiveContext; 
VerilogPreParser.Endcelldefine_directiveContext = Endcelldefine_directiveContext; 
VerilogPreParser.Endif_directiveContext = Endif_directiveContext; 
VerilogPreParser.FilenameContext = FilenameContext; 
VerilogPreParser.Group_of_linesContext = Group_of_linesContext; 
VerilogPreParser.IdentifierContext = IdentifierContext; 
VerilogPreParser.Ifdef_directiveContext = Ifdef_directiveContext; 
VerilogPreParser.Ifndef_directiveContext = Ifndef_directiveContext; 
VerilogPreParser.Include_directiveContext = Include_directiveContext; 
VerilogPreParser.LevelContext = LevelContext; 
VerilogPreParser.Line_directiveContext = Line_directiveContext; 
VerilogPreParser.Macro_delimiterContext = Macro_delimiterContext; 
VerilogPreParser.Macro_esc_newlineContext = Macro_esc_newlineContext; 
VerilogPreParser.Macro_esc_quoteContext = Macro_esc_quoteContext; 
VerilogPreParser.Macro_identifierContext = Macro_identifierContext; 
VerilogPreParser.Macro_nameContext = Macro_nameContext; 
VerilogPreParser.Macro_quoteContext = Macro_quoteContext; 
VerilogPreParser.Macro_textContext = Macro_textContext; 
VerilogPreParser.Macro_text_Context = Macro_text_Context; 
VerilogPreParser.Macro_usageContext = Macro_usageContext; 
VerilogPreParser.Nounconnected_drive_directiveContext = Nounconnected_drive_directiveContext; 
VerilogPreParser.NumberContext = NumberContext; 
VerilogPreParser.Pragma_directiveContext = Pragma_directiveContext; 
VerilogPreParser.Pragma_expressionContext = Pragma_expressionContext; 
VerilogPreParser.Pragma_keywordContext = Pragma_keywordContext; 
VerilogPreParser.Pragma_nameContext = Pragma_nameContext; 
VerilogPreParser.Pragma_valueContext = Pragma_valueContext; 
VerilogPreParser.Resetall_directiveContext = Resetall_directiveContext; 
VerilogPreParser.Source_text_Context = Source_text_Context; 
VerilogPreParser.String_Context = String_Context; 
VerilogPreParser.Text_macro_definitionContext = Text_macro_definitionContext; 
VerilogPreParser.Text_macro_usageContext = Text_macro_usageContext; 
VerilogPreParser.Time_precisionContext = Time_precisionContext; 
VerilogPreParser.Time_unitContext = Time_unitContext; 
VerilogPreParser.Timescale_directiveContext = Timescale_directiveContext; 
VerilogPreParser.Unconnected_drive_directiveContext = Unconnected_drive_directiveContext; 
VerilogPreParser.Unconnected_drive_valueContext = Unconnected_drive_valueContext; 
VerilogPreParser.Undef_directiveContext = Undef_directiveContext; 
VerilogPreParser.Version_specifierContext = Version_specifierContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
