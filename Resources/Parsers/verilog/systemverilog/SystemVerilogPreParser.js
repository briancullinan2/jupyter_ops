// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/verilog/systemverilog/SystemVerilogPreParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SystemVerilogPreParserListener from './SystemVerilogPreParserListener.js';
const serializedATN = [4,1,418,346,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,1,0,5,0,102,8,0,10,0,12,0,105,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,127,8,1,1,2,1,2,1,
2,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,
7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,11,1,12,
1,12,1,13,1,13,5,13,169,8,13,10,13,12,13,172,9,13,1,14,1,14,1,15,1,15,1,
15,1,15,1,15,5,15,181,8,15,10,15,12,15,184,9,15,1,15,3,15,187,8,15,1,15,
1,15,1,16,1,16,1,16,1,16,1,16,5,16,196,8,16,10,16,12,16,199,9,16,1,16,3,
16,202,8,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
1,17,3,17,217,8,17,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,20,
1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,1,
27,1,27,1,27,1,27,1,27,1,27,5,27,250,8,27,10,27,12,27,253,9,27,1,28,1,28,
1,29,1,29,1,30,1,30,1,30,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,5,32,270,
8,32,10,32,12,32,273,9,32,3,32,275,8,32,1,33,1,33,1,33,3,33,280,8,33,1,33,
1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,36,1,36,5,36,292,8,36,10,36,12,36,295,
9,36,1,36,1,36,1,36,1,36,1,36,3,36,302,8,36,1,37,1,37,1,37,1,38,1,38,1,39,
1,39,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,42,1,42,1,42,1,43,1,43,1,
43,1,44,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,46,1,46,1,47,1,47,
1,47,1,47,1,48,1,48,1,48,1,49,1,49,1,49,0,0,50,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,
68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,0,0,336,0,103,1,0,0,0,2,
126,1,0,0,0,4,128,1,0,0,0,6,134,1,0,0,0,8,137,1,0,0,0,10,141,1,0,0,0,12,
143,1,0,0,0,14,147,1,0,0,0,16,152,1,0,0,0,18,155,1,0,0,0,20,158,1,0,0,0,
22,161,1,0,0,0,24,164,1,0,0,0,26,170,1,0,0,0,28,173,1,0,0,0,30,175,1,0,0,
0,32,190,1,0,0,0,34,205,1,0,0,0,36,218,1,0,0,0,38,220,1,0,0,0,40,228,1,0,
0,0,42,231,1,0,0,0,44,233,1,0,0,0,46,235,1,0,0,0,48,237,1,0,0,0,50,239,1,
0,0,0,52,241,1,0,0,0,54,251,1,0,0,0,56,254,1,0,0,0,58,256,1,0,0,0,60,258,
1,0,0,0,62,261,1,0,0,0,64,263,1,0,0,0,66,279,1,0,0,0,68,283,1,0,0,0,70,285,
1,0,0,0,72,301,1,0,0,0,74,303,1,0,0,0,76,306,1,0,0,0,78,308,1,0,0,0,80,310,
1,0,0,0,82,315,1,0,0,0,84,318,1,0,0,0,86,321,1,0,0,0,88,324,1,0,0,0,90,330,
1,0,0,0,92,334,1,0,0,0,94,336,1,0,0,0,96,340,1,0,0,0,98,343,1,0,0,0,100,
102,3,2,1,0,101,100,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,
0,0,104,1,1,0,0,0,105,103,1,0,0,0,106,127,3,4,2,0,107,127,3,6,3,0,108,127,
3,8,4,0,109,127,3,16,8,0,110,127,3,18,9,0,111,127,3,22,11,0,112,127,3,30,
15,0,113,127,3,32,16,0,114,127,3,34,17,0,115,127,3,38,19,0,116,127,3,40,
20,0,117,127,3,60,30,0,118,127,3,64,32,0,119,127,3,74,37,0,120,127,3,80,
40,0,121,127,3,82,41,0,122,127,3,88,44,0,123,127,3,90,45,0,124,127,3,94,
47,0,125,127,3,96,48,0,126,106,1,0,0,0,126,107,1,0,0,0,126,108,1,0,0,0,126,
109,1,0,0,0,126,110,1,0,0,0,126,111,1,0,0,0,126,112,1,0,0,0,126,113,1,0,
0,0,126,114,1,0,0,0,126,115,1,0,0,0,126,116,1,0,0,0,126,117,1,0,0,0,126,
118,1,0,0,0,126,119,1,0,0,0,126,120,1,0,0,0,126,121,1,0,0,0,126,122,1,0,
0,0,126,123,1,0,0,0,126,124,1,0,0,0,126,125,1,0,0,0,127,3,1,0,0,0,128,129,
5,308,0,0,129,130,5,382,0,0,130,131,5,296,0,0,131,132,3,98,49,0,132,133,
5,296,0,0,133,5,1,0,0,0,134,135,5,308,0,0,135,136,5,383,0,0,136,7,1,0,0,
0,137,138,5,308,0,0,138,139,5,384,0,0,139,140,3,10,5,0,140,9,1,0,0,0,141,
142,5,406,0,0,142,11,1,0,0,0,143,144,5,308,0,0,144,145,5,386,0,0,145,146,
3,26,13,0,146,13,1,0,0,0,147,148,5,308,0,0,148,149,5,387,0,0,149,150,3,48,
24,0,150,151,3,26,13,0,151,15,1,0,0,0,152,153,5,308,0,0,153,154,5,388,0,
0,154,17,1,0,0,0,155,156,5,308,0,0,156,157,5,389,0,0,157,19,1,0,0,0,158,
159,5,308,0,0,159,160,5,390,0,0,160,21,1,0,0,0,161,162,5,308,0,0,162,163,
5,391,0,0,163,23,1,0,0,0,164,165,5,408,0,0,165,25,1,0,0,0,166,169,3,76,38,
0,167,169,3,2,1,0,168,166,1,0,0,0,168,167,1,0,0,0,169,172,1,0,0,0,170,168,
1,0,0,0,170,171,1,0,0,0,171,27,1,0,0,0,172,170,1,0,0,0,173,174,5,366,0,0,
174,29,1,0,0,0,175,176,5,308,0,0,176,177,5,392,0,0,177,178,3,48,24,0,178,
182,3,26,13,0,179,181,3,14,7,0,180,179,1,0,0,0,181,184,1,0,0,0,182,180,1,
0,0,0,182,183,1,0,0,0,183,186,1,0,0,0,184,182,1,0,0,0,185,187,3,12,6,0,186,
185,1,0,0,0,186,187,1,0,0,0,187,188,1,0,0,0,188,189,3,20,10,0,189,31,1,0,
0,0,190,191,5,308,0,0,191,192,5,393,0,0,192,193,3,48,24,0,193,197,3,26,13,
0,194,196,3,14,7,0,195,194,1,0,0,0,196,199,1,0,0,0,197,195,1,0,0,0,197,198,
1,0,0,0,198,201,1,0,0,0,199,197,1,0,0,0,200,202,3,12,6,0,201,200,1,0,0,0,
201,202,1,0,0,0,202,203,1,0,0,0,203,204,3,20,10,0,204,33,1,0,0,0,205,206,
5,308,0,0,206,216,5,394,0,0,207,208,5,296,0,0,208,209,3,24,12,0,209,210,
5,296,0,0,210,217,1,0,0,0,211,212,5,322,0,0,212,213,3,24,12,0,213,214,5,
309,0,0,214,217,1,0,0,0,215,217,3,82,41,0,216,207,1,0,0,0,216,211,1,0,0,
0,216,215,1,0,0,0,217,35,1,0,0,0,218,219,5,371,0,0,219,37,1,0,0,0,220,221,
5,308,0,0,221,222,5,395,0,0,222,223,3,62,31,0,223,224,5,296,0,0,224,225,
3,24,12,0,225,226,5,296,0,0,226,227,3,36,18,0,227,39,1,0,0,0,228,229,5,308,
0,0,229,230,5,396,0,0,230,41,1,0,0,0,231,232,5,409,0,0,232,43,1,0,0,0,233,
234,5,410,0,0,234,45,1,0,0,0,235,236,5,411,0,0,236,47,1,0,0,0,237,238,5,
418,0,0,238,49,1,0,0,0,239,240,5,407,0,0,240,51,1,0,0,0,241,242,5,412,0,
0,242,53,1,0,0,0,243,250,3,56,28,0,244,250,3,42,21,0,245,250,3,44,22,0,246,
250,3,46,23,0,247,250,3,52,26,0,248,250,3,78,39,0,249,243,1,0,0,0,249,244,
1,0,0,0,249,245,1,0,0,0,249,246,1,0,0,0,249,247,1,0,0,0,249,248,1,0,0,0,
250,253,1,0,0,0,251,249,1,0,0,0,251,252,1,0,0,0,252,55,1,0,0,0,253,251,1,
0,0,0,254,255,5,413,0,0,255,57,1,0,0,0,256,257,5,404,0,0,257,59,1,0,0,0,
258,259,5,308,0,0,259,260,5,397,0,0,260,61,1,0,0,0,261,262,5,371,0,0,262,
63,1,0,0,0,263,264,5,308,0,0,264,265,5,398,0,0,265,274,3,70,35,0,266,271,
3,66,33,0,267,268,5,294,0,0,268,270,3,66,33,0,269,267,1,0,0,0,270,273,1,
0,0,0,271,269,1,0,0,0,271,272,1,0,0,0,272,275,1,0,0,0,273,271,1,0,0,0,274,
266,1,0,0,0,274,275,1,0,0,0,275,65,1,0,0,0,276,277,3,68,34,0,277,278,5,303,
0,0,278,280,1,0,0,0,279,276,1,0,0,0,279,280,1,0,0,0,280,281,1,0,0,0,281,
282,3,72,36,0,282,67,1,0,0,0,283,284,5,366,0,0,284,69,1,0,0,0,285,286,5,
366,0,0,286,71,1,0,0,0,287,288,5,321,0,0,288,293,3,66,33,0,289,290,5,294,
0,0,290,292,3,66,33,0,291,289,1,0,0,0,292,295,1,0,0,0,293,291,1,0,0,0,293,
294,1,0,0,0,294,296,1,0,0,0,295,293,1,0,0,0,296,297,5,344,0,0,297,302,1,
0,0,0,298,302,3,62,31,0,299,302,3,78,39,0,300,302,3,28,14,0,301,287,1,0,
0,0,301,298,1,0,0,0,301,299,1,0,0,0,301,300,1,0,0,0,302,73,1,0,0,0,303,304,
5,308,0,0,304,305,5,399,0,0,305,75,1,0,0,0,306,307,5,414,0,0,307,77,1,0,
0,0,308,309,5,367,0,0,309,79,1,0,0,0,310,311,5,308,0,0,311,312,5,385,0,0,
312,313,3,50,25,0,313,314,3,54,27,0,314,81,1,0,0,0,315,316,5,308,0,0,316,
317,3,58,29,0,317,83,1,0,0,0,318,319,5,416,0,0,319,320,5,415,0,0,320,85,
1,0,0,0,321,322,5,416,0,0,322,323,5,415,0,0,323,87,1,0,0,0,324,325,5,308,
0,0,325,326,5,400,0,0,326,327,3,86,43,0,327,328,5,346,0,0,328,329,3,84,42,
0,329,89,1,0,0,0,330,331,5,308,0,0,331,332,5,401,0,0,332,333,3,92,46,0,333,
91,1,0,0,0,334,335,5,417,0,0,335,93,1,0,0,0,336,337,5,308,0,0,337,338,5,
402,0,0,338,339,3,48,24,0,339,95,1,0,0,0,340,341,5,308,0,0,341,342,5,403,
0,0,342,97,1,0,0,0,343,344,5,405,0,0,344,99,1,0,0,0,16,103,126,168,170,182,
186,197,201,216,249,251,271,274,279,293,301];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SystemVerilogPreParser extends antlr4.Parser {

    static grammarFileName = "SystemVerilogPreParser.g4";
    static literalNames = [ null, "'accept_on'", "'alias'", "'always'", 
                            "'always_comb'", "'always_ff'", "'always_latch'", 
                            "'and'", "'assert'", "'assign'", "'assume'", 
                            "'automatic'", "'before'", "'begin'", "'bind'", 
                            "'bins'", "'binsof'", "'bit'", "'break'", "'buf'", 
                            "'bufif1'", "'bufif0'", "'byte'", "'case'", 
                            "'casex'", "'casez'", "'cell'", "'chandle'", 
                            "'checker'", "'class'", "'clocking'", "'cmos'", 
                            "'config'", "'const'", "'constraint'", "'context'", 
                            "'continue'", "'cover'", "'covergroup'", "'coverpoint'", 
                            "'cross'", "'deassign'", "'default'", "'defparam'", 
                            "'design'", "'disable'", "'dist'", "'$error'", 
                            "'$fatal'", "'$fullskew'", "'$hold'", "'$info'", 
                            "'$nochange'", "'$period'", "'$recovery'", "'$recrem'", 
                            "'$removal'", "'$root'", "'$setup'", "'$setuphold'", 
                            "'$skew'", "'$timeskew'", "'$unit'", "'$warning'", 
                            "'$width'", "'do'", "'\"DPI\"'", "'\"DPI-C\"'", 
                            "'edge'", "'else'", "'end'", "'endcase'", "'endchecker'", 
                            "'endclass'", "'endclocking'", "'endconfig'", 
                            "'endfunction'", "'endgenerate'", "'endgroup'", 
                            "'endinterface'", "'endmodule'", "'endpackage'", 
                            "'endprimitive'", "'endprogram'", "'endproperty'", 
                            "'endsequence'", "'endspecify'", "'endtable'", 
                            "'endtask'", "'enum'", "'event'", "'eventually'", 
                            "'expect'", "'export'", "'extends'", "'extern'", 
                            "'final'", "'first_match'", "'for'", "'force'", 
                            "'foreach'", "'forever'", "'fork'", "'forkjoin'", 
                            "'function'", "'generate'", "'genvar'", "'global'", 
                            "'highz1'", "'highz0'", "'if'", "'iff'", "'ifnone'", 
                            "'ignore_bins'", "'illegal_bins'", "'implements'", 
                            "'implies'", "'import'", "'include'", "'initial'", 
                            "'inout'", "'input'", "'inside'", "'instance'", 
                            "'int'", "'integer'", "'interconnect'", "'interface'", 
                            "'intersect'", "'join'", "'join_any'", "'join_none'", 
                            "'large'", "'let'", "'liblist'", "'library'", 
                            "'local'", "'localparam'", "'logic'", "'longint'", 
                            "'macromodule'", "'matches'", "'medium'", "'-incdir'", 
                            "'modport'", "'module'", "'nand'", "'negedge'", 
                            "'nettype'", "'new'", "'nexttime'", "'nmos'", 
                            "'nor'", "'noshowcancelled'", "'not'", "'notif1'", 
                            "'notif0'", "'null'", "'1step'", "'option'", 
                            "'or'", "'output'", "'package'", "'packed'", 
                            "'parameter'", "'PATHPULSE$'", "'pmos'", "'posedge'", 
                            "'primitive'", "'priority'", "'program'", "'property'", 
                            "'protected'", "'pulldown'", "'pull1'", "'pullup'", 
                            "'pull0'", "'pulsestyle_ondetect'", "'pulsestyle_onevent'", 
                            "'pure'", "'rand'", "'randc'", "'randcase'", 
                            "'randomize'", "'randsequence'", "'rcmos'", 
                            "'real'", "'realtime'", "'ref'", "'reg'", "'reject_on'", 
                            "'release'", "'repeat'", "'restrict'", "'return'", 
                            "'rnmos'", "'rpmos'", "'rtran'", "'rtranif1'", 
                            "'rtranif0'", "'s_always'", "'s_eventually'", 
                            "'s_nexttime'", "'s_until'", "'s_until_with'", 
                            "'sample'", "'scalared'", "'sequence'", "'shortint'", 
                            "'shortreal'", "'showcancelled'", "'signed'", 
                            "'small'", "'soft'", "'solve'", "'specify'", 
                            "'specparam'", "'static'", "'std'", "'string'", 
                            "'strong'", "'strong1'", "'strong0'", "'struct'", 
                            "'super'", "'supply1'", "'supply0'", "'sync_accept_on'", 
                            "'sync_reject_on'", "'table'", "'tagged'", "'task'", 
                            "'this'", "'throughout'", "'time'", "'timeprecision'", 
                            "'timeunit'", "'tran'", "'tranif1'", "'tranif0'", 
                            "'tri'", "'triand'", "'tri1'", "'trior'", "'trireg'", 
                            "'tri0'", "'type'", "'type_option'", "'typedef'", 
                            "'union'", "'unique'", "'unique0'", "'unsigned'", 
                            "'until'", "'until_with'", "'untyped'", "'use'", 
                            "'uwire'", "'var'", "'vectored'", "'virtual'", 
                            "'void'", "'wait'", "'wait_order'", "'wand'", 
                            "'weak'", "'weak1'", "'weak0'", "'while'", "'wildcard'", 
                            "'wire'", "'with'", "'within'", "'wor'", "'xnor'", 
                            "'xor'", "'&'", "'&&'", "'&&&'", "'&='", "'''", 
                            "'*'", "'**'", "'*='", "'*>'", "'@'", "'@@'", 
                            "'^'", "'^='", "'^~'", "':'", "'::'", "':='", 
                            "':/'", "','", "'$'", "'\"'", "'.'", "'.*'", 
                            "'!'", "'!='", "'!=='", "'!=?'", "'='", "'=='", 
                            "'==='", "'==?'", "'=>'", null, "'>'", "'>='", 
                            "'>>'", "'>>='", "'>>>'", "'>>>='", "'#'", "'#=#'", 
                            "'##'", "'#-#'", "'['", "'{'", "'('", "'<'", 
                            "'<='", "'<<'", "'<<='", "'<<<'", "'<<<='", 
                            "'<->'", "'-'", "'-:'", "'-='", "'->'", "'->>'", 
                            "'--'", "'%'", "'%='", "'+'", "'+:'", "'+='", 
                            "'++'", "'?'", "']'", "'}'", "')'", "';'", "'/'", 
                            "'/='", "'~'", "'~&'", "'~^'", "'~|'", "'|'", 
                            "'|='", "'|=>'", "'|->'", "'||'", null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            "'celldefine'", null, null, null, null, "'end_keywords'", 
                            "'endcelldefine'", null, "'__FILE__'", null, 
                            null, null, null, "'__LINE__'", "'nounconnected_drive'", 
                            null, "'resetall'", null, null, null, "'undefineall'", 
                            null, null, null, null, null, "'``'", null, 
                            "'`\\`\"'", "'`\"'" ];
    static symbolicNames = [ null, "ACCEPT_ON", "ALIAS", "ALWAYS", "ALWAYS_COMB", 
                             "ALWAYS_FF", "ALWAYS_LATCH", "AND", "ASSERT", 
                             "ASSIGN", "ASSUME", "AUTOMATIC", "BEFORE", 
                             "BEGIN", "BIND", "BINS", "BINSOF", "BIT", "BREAK", 
                             "BUF", "BUFIFONE", "BUFIFZERO", "BYTE", "CASE", 
                             "CASEX", "CASEZ", "CELL", "CHANDLE", "CHECKER", 
                             "CLASS", "CLOCKING", "CMOS", "CONFIG", "CONST", 
                             "CONSTRAINT", "CONTEXT", "CONTINUE", "COVER", 
                             "COVERGROUP", "COVERPOINT", "CROSS", "DEASSIGN", 
                             "DEFAULT", "DEFPARAM", "DESIGN", "DISABLE", 
                             "DIST", "DLERROR", "DLFATAL", "DLFULLSKEW", 
                             "DLHOLD", "DLINFO", "DLNOCHANGE", "DLPERIOD", 
                             "DLRECOVERY", "DLRECREM", "DLREMOVAL", "DLROOT", 
                             "DLSETUP", "DLSETUPHOLD", "DLSKEW", "DLTIMESKEW", 
                             "DLUNIT", "DLWARNING", "DLWIDTH", "DO", "DQDPIDQ", 
                             "DQDPIMICDQ", "EDGE", "ELSE", "END", "ENDCASE", 
                             "ENDCHECKER", "ENDCLASS", "ENDCLOCKING", "ENDCONFIG", 
                             "ENDFUNCTION", "ENDGENERATE", "ENDGROUP", "ENDINTERFACE", 
                             "ENDMODULE", "ENDPACKAGE", "ENDPRIMITIVE", 
                             "ENDPROGRAM", "ENDPROPERTY", "ENDSEQUENCE", 
                             "ENDSPECIFY", "ENDTABLE", "ENDTASK", "ENUM", 
                             "EVENT", "EVENTUALLY", "EXPECT", "EXPORT", 
                             "EXTENDS", "EXTERN", "FINAL", "FIRST_MATCH", 
                             "FOR", "FORCE", "FOREACH", "FOREVER", "FORK", 
                             "FORKJOIN", "FUNCTION", "GENERATE", "GENVAR", 
                             "GLOBAL", "HIGHZONE", "HIGHZZERO", "IF", "IFF", 
                             "IFNONE", "IGNORE_BINS", "ILLEGAL_BINS", "IMPLEMENTS", 
                             "IMPLIES", "IMPORT", "INCLUDE", "INITIAL", 
                             "INOUT", "INPUT", "INSIDE", "INSTANCE", "INT", 
                             "INTEGER", "INTERCONNECT", "INTERFACE", "INTERSECT", 
                             "JOIN", "JOIN_ANY", "JOIN_NONE", "LARGE", "LET", 
                             "LIBLIST", "LIBRARY", "LOCAL", "LOCALPARAM", 
                             "LOGIC", "LONGINT", "MACROMODULE", "MATCHES", 
                             "MEDIUM", "MIINCDIR", "MODPORT", "MODULE", 
                             "NAND", "NEGEDGE", "NETTYPE", "NEW", "NEXTTIME", 
                             "NMOS", "NOR", "NOSHOWCANCELLED", "NOT", "NOTIFONE", 
                             "NOTIFZERO", "NULL", "ONESTEP", "OPTION", "OR", 
                             "OUTPUT", "PACKAGE", "PACKED", "PARAMETER", 
                             "PATHPULSEDL", "PMOS", "POSEDGE", "PRIMITIVE", 
                             "PRIORITY", "PROGRAM", "PROPERTY", "PROTECTED", 
                             "PULLDOWN", "PULLONE", "PULLUP", "PULLZERO", 
                             "PULSESTYLE_ONDETECT", "PULSESTYLE_ONEVENT", 
                             "PURE", "RAND", "RANDC", "RANDCASE", "RANDOMIZE", 
                             "RANDSEQUENCE", "RCMOS", "REAL", "REALTIME", 
                             "REF", "REG", "REJECT_ON", "RELEASE", "REPEAT", 
                             "RESTRICT", "RETURN", "RNMOS", "RPMOS", "RTRAN", 
                             "RTRANIFONE", "RTRANIFZERO", "S_ALWAYS", "S_EVENTUALLY", 
                             "S_NEXTTIME", "S_UNTIL", "S_UNTIL_WITH", "SAMPLE", 
                             "SCALARED", "SEQUENCE", "SHORTINT", "SHORTREAL", 
                             "SHOWCANCELLED", "SIGNED", "SMALL", "SOFT", 
                             "SOLVE", "SPECIFY", "SPECPARAM", "STATIC", 
                             "STD", "STRING", "STRONG", "STRONGONE", "STRONGZERO", 
                             "STRUCT", "SUPER", "SUPPLYONE", "SUPPLYZERO", 
                             "SYNC_ACCEPT_ON", "SYNC_REJECT_ON", "TABLE", 
                             "TAGGED", "TASK", "THIS", "THROUGHOUT", "TIME", 
                             "TIMEPRECISION", "TIMEUNIT", "TRAN", "TRANIFONE", 
                             "TRANIFZERO", "TRI", "TRIAND", "TRIONE", "TRIOR", 
                             "TRIREG", "TRIZERO", "TYPE", "TYPE_OPTION", 
                             "TYPEDEF", "UNION", "UNIQUE", "UNIQUEZERO", 
                             "UNSIGNED", "UNTIL", "UNTIL_WITH", "UNTYPED", 
                             "USE", "UWIRE", "VAR", "VECTORED", "VIRTUAL", 
                             "VOID", "WAIT", "WAIT_ORDER", "WAND", "WEAK", 
                             "WEAKONE", "WEAKZERO", "WHILE", "WILDCARD", 
                             "WIRE", "WITH", "WITHIN", "WOR", "XNOR", "XOR", 
                             "AM", "AMAM", "AMAMAM", "AMEQ", "AP", "AS", 
                             "ASAS", "ASEQ", "ASGT", "AT", "ATAT", "CA", 
                             "CAEQ", "CATI", "CL", "CLCL", "CLEQ", "CLSL", 
                             "CO", "DL", "DQ", "DT", "DTAS", "EM", "EMEQ", 
                             "EMEQEQ", "EMEQQM", "EQ", "EQEQ", "EQEQEQ", 
                             "EQEQQM", "EQGT", "GA", "GT", "GTEQ", "GTGT", 
                             "GTGTEQ", "GTGTGT", "GTGTGTEQ", "HA", "HAEQHA", 
                             "HAHA", "HAMIHA", "LB", "LC", "LP", "LT", "LTEQ", 
                             "LTLT", "LTLTEQ", "LTLTLT", "LTLTLTEQ", "LTMIGT", 
                             "MI", "MICL", "MIEQ", "MIGT", "MIGTGT", "MIMI", 
                             "MO", "MOEQ", "PL", "PLCL", "PLEQ", "PLPL", 
                             "QM", "RB", "RC", "RP", "SC", "SL", "SLEQ", 
                             "TI", "TIAM", "TICA", "TIVL", "VL", "VLEQ", 
                             "VLEQGT", "VLMIGT", "VLVL", "BINARY_BASE", 
                             "BLOCK_COMMENT", "DECIMAL_BASE", "ESCAPED_IDENTIFIER", 
                             "EXPONENTIAL_NUMBER", "FIXED_POINT_NUMBER", 
                             "HEX_BASE", "LINE_COMMENT", "OCTAL_BASE", "SIMPLE_IDENTIFIER", 
                             "STRING_LITERAL", "SYSTEM_TF_IDENTIFIER", "TIME_LITERAL", 
                             "UNBASED_UNSIZED_LITERAL", "UNSIGNED_NUMBER", 
                             "WHITE_SPACE", "ZERO_OR_ONE_X_OR_Z", "BINARY_VALUE", 
                             "X_OR_Z_UNDERSCORE", "HEX_VALUE", "FILE_PATH_SPEC", 
                             "OCTAL_VALUE", "EDGE_SYMBOL", "LEVEL_ONLY_SYMBOL", 
                             "OUTPUT_OR_LEVEL_SYMBOL", "BEGIN_KEYWORDS_DIRECTIVE", 
                             "CELLDEFINE_DIRECTIVE", "DEFAULT_NETTYPE_DIRECTIVE", 
                             "DEFINE_DIRECTIVE", "ELSE_DIRECTIVE", "ELSIF_DIRECTIVE", 
                             "END_KEYWORDS_DIRECTIVE", "ENDCELLDEFINE_DIRECTIVE", 
                             "ENDIF_DIRECTIVE", "FILE_DIRECTIVE", "IFDEF_DIRECTIVE", 
                             "IFNDEF_DIRECTIVE", "INCLUDE_DIRECTIVE", "LINE_DIRECTIVE", 
                             "LINE_DIRECTIVE_", "NOUNCONNECTED_DRIVE_DIRECTIVE", 
                             "PRAGMA_DIRECTIVE", "RESETALL_DIRECTIVE", "TIMESCALE_DIRECTIVE", 
                             "UNCONNECTED_DRIVE_DIRECTIVE", "UNDEF_DIRECTIVE", 
                             "UNDEFINEALL_DIRECTIVE", "MACRO_USAGE", "VERSION_SPECIFIER", 
                             "DEFAULT_NETTYPE_VALUE", "MACRO_NAME", "FILENAME", 
                             "MACRO_DELIMITER", "MACRO_ESC_NEWLINE", "MACRO_ESC_QUOTE", 
                             "MACRO_QUOTE", "MACRO_TEXT", "SOURCE_TEXT", 
                             "TIME_UNIT", "TIME_VALUE", "UNCONNECTED_DRIVE_VALUE", 
                             "MACRO_IDENTIFIER" ];
    static ruleNames = [ "source_text", "compiler_directive", "begin_keywords_directive", 
                         "celldefine_directive", "default_nettype_directive", 
                         "default_nettype_value", "else_directive", "elsif_directive", 
                         "end_keywords_directive", "endcelldefine_directive", 
                         "endif_directive", "file_directive", "filename", 
                         "group_of_lines", "identifier", "ifdef_directive", 
                         "ifndef_directive", "include_directive", "level", 
                         "line_directive", "line_directive_", "macro_delimiter", 
                         "macro_esc_newline", "macro_esc_quote", "macro_identifier", 
                         "macro_name", "macro_quote", "macro_text", "macro_text_", 
                         "macro_usage", "nounconnected_drive_directive", 
                         "number", "pragma_directive", "pragma_expression", 
                         "pragma_keyword", "pragma_name", "pragma_value", 
                         "resetall_directive", "source_text_", "string_literal", 
                         "text_macro_definition", "text_macro_usage", "time_precision", 
                         "time_unit", "timescale_directive", "unconnected_drive_directive", 
                         "unconnected_drive_value", "undef_directive", "undefineall_directive", 
                         "version_specifier" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SystemVerilogPreParser.ruleNames;
        this.literalNames = SystemVerilogPreParser.literalNames;
        this.symbolicNames = SystemVerilogPreParser.symbolicNames;
    }



	source_text() {
	    let localctx = new Source_textContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SystemVerilogPreParser.RULE_source_text);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===308) {
	            this.state = 100;
	            this.compiler_directive();
	            this.state = 105;
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
	    this.enterRule(localctx, 2, SystemVerilogPreParser.RULE_compiler_directive);
	    try {
	        this.state = 126;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 106;
	            this.begin_keywords_directive();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 107;
	            this.celldefine_directive();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 108;
	            this.default_nettype_directive();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 109;
	            this.end_keywords_directive();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 110;
	            this.endcelldefine_directive();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 111;
	            this.file_directive();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 112;
	            this.ifdef_directive();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 113;
	            this.ifndef_directive();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 114;
	            this.include_directive();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 115;
	            this.line_directive();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 116;
	            this.line_directive_();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 117;
	            this.nounconnected_drive_directive();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 118;
	            this.pragma_directive();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 119;
	            this.resetall_directive();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 120;
	            this.text_macro_definition();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 121;
	            this.text_macro_usage();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 122;
	            this.timescale_directive();
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 123;
	            this.unconnected_drive_directive();
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 124;
	            this.undef_directive();
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 125;
	            this.undefineall_directive();
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
	    this.enterRule(localctx, 4, SystemVerilogPreParser.RULE_begin_keywords_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 129;
	        this.match(SystemVerilogPreParser.BEGIN_KEYWORDS_DIRECTIVE);
	        this.state = 130;
	        this.match(SystemVerilogPreParser.DQ);
	        this.state = 131;
	        this.version_specifier();
	        this.state = 132;
	        this.match(SystemVerilogPreParser.DQ);
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
	    this.enterRule(localctx, 6, SystemVerilogPreParser.RULE_celldefine_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 135;
	        this.match(SystemVerilogPreParser.CELLDEFINE_DIRECTIVE);
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
	    this.enterRule(localctx, 8, SystemVerilogPreParser.RULE_default_nettype_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 138;
	        this.match(SystemVerilogPreParser.DEFAULT_NETTYPE_DIRECTIVE);
	        this.state = 139;
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
	    this.enterRule(localctx, 10, SystemVerilogPreParser.RULE_default_nettype_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match(SystemVerilogPreParser.DEFAULT_NETTYPE_VALUE);
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
	    this.enterRule(localctx, 12, SystemVerilogPreParser.RULE_else_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 144;
	        this.match(SystemVerilogPreParser.ELSE_DIRECTIVE);
	        this.state = 145;
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
	    this.enterRule(localctx, 14, SystemVerilogPreParser.RULE_elsif_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 148;
	        this.match(SystemVerilogPreParser.ELSIF_DIRECTIVE);
	        this.state = 149;
	        this.macro_identifier();
	        this.state = 150;
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
	    this.enterRule(localctx, 16, SystemVerilogPreParser.RULE_end_keywords_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 153;
	        this.match(SystemVerilogPreParser.END_KEYWORDS_DIRECTIVE);
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
	    this.enterRule(localctx, 18, SystemVerilogPreParser.RULE_endcelldefine_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 156;
	        this.match(SystemVerilogPreParser.ENDCELLDEFINE_DIRECTIVE);
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
	    this.enterRule(localctx, 20, SystemVerilogPreParser.RULE_endif_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 159;
	        this.match(SystemVerilogPreParser.ENDIF_DIRECTIVE);
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



	file_directive() {
	    let localctx = new File_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SystemVerilogPreParser.RULE_file_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 162;
	        this.match(SystemVerilogPreParser.FILE_DIRECTIVE);
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
	    this.enterRule(localctx, 24, SystemVerilogPreParser.RULE_filename);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(SystemVerilogPreParser.FILENAME);
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
	    this.enterRule(localctx, 26, SystemVerilogPreParser.RULE_group_of_lines);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 168;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 414:
	                    this.state = 166;
	                    this.source_text_();
	                    break;
	                case 308:
	                    this.state = 167;
	                    this.compiler_directive();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 172;
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
	    this.enterRule(localctx, 28, SystemVerilogPreParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(SystemVerilogPreParser.SIMPLE_IDENTIFIER);
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
	    this.enterRule(localctx, 30, SystemVerilogPreParser.RULE_ifdef_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 176;
	        this.match(SystemVerilogPreParser.IFDEF_DIRECTIVE);
	        this.state = 177;
	        this.macro_identifier();
	        this.state = 178;
	        this.group_of_lines();
	        this.state = 182;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 179;
	                this.elsif_directive(); 
	            }
	            this.state = 184;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	        this.state = 186;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 185;
	            this.else_directive();

	        }
	        this.state = 188;
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
	    this.enterRule(localctx, 32, SystemVerilogPreParser.RULE_ifndef_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 191;
	        this.match(SystemVerilogPreParser.IFNDEF_DIRECTIVE);
	        this.state = 192;
	        this.macro_identifier();
	        this.state = 193;
	        this.group_of_lines();
	        this.state = 197;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 194;
	                this.elsif_directive(); 
	            }
	            this.state = 199;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	        this.state = 201;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 200;
	            this.else_directive();

	        }
	        this.state = 203;
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
	    this.enterRule(localctx, 34, SystemVerilogPreParser.RULE_include_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 206;
	        this.match(SystemVerilogPreParser.INCLUDE_DIRECTIVE);
	        this.state = 216;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 296:
	            this.state = 207;
	            this.match(SystemVerilogPreParser.DQ);
	            this.state = 208;
	            this.filename();
	            this.state = 209;
	            this.match(SystemVerilogPreParser.DQ);
	            break;
	        case 322:
	            this.state = 211;
	            this.match(SystemVerilogPreParser.LT);
	            this.state = 212;
	            this.filename();
	            this.state = 213;
	            this.match(SystemVerilogPreParser.GT);
	            break;
	        case 308:
	            this.state = 215;
	            this.text_macro_usage();
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



	level() {
	    let localctx = new LevelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, SystemVerilogPreParser.RULE_level);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        this.match(SystemVerilogPreParser.UNSIGNED_NUMBER);
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
	    this.enterRule(localctx, 38, SystemVerilogPreParser.RULE_line_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 221;
	        this.match(SystemVerilogPreParser.LINE_DIRECTIVE);
	        this.state = 222;
	        this.number();
	        this.state = 223;
	        this.match(SystemVerilogPreParser.DQ);
	        this.state = 224;
	        this.filename();
	        this.state = 225;
	        this.match(SystemVerilogPreParser.DQ);
	        this.state = 226;
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



	line_directive_() {
	    let localctx = new Line_directive_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, SystemVerilogPreParser.RULE_line_directive_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 229;
	        this.match(SystemVerilogPreParser.LINE_DIRECTIVE_);
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
	    this.enterRule(localctx, 42, SystemVerilogPreParser.RULE_macro_delimiter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(SystemVerilogPreParser.MACRO_DELIMITER);
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
	    this.enterRule(localctx, 44, SystemVerilogPreParser.RULE_macro_esc_newline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this.match(SystemVerilogPreParser.MACRO_ESC_NEWLINE);
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
	    this.enterRule(localctx, 46, SystemVerilogPreParser.RULE_macro_esc_quote);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.match(SystemVerilogPreParser.MACRO_ESC_QUOTE);
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
	    this.enterRule(localctx, 48, SystemVerilogPreParser.RULE_macro_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        this.match(SystemVerilogPreParser.MACRO_IDENTIFIER);
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
	    this.enterRule(localctx, 50, SystemVerilogPreParser.RULE_macro_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(SystemVerilogPreParser.MACRO_NAME);
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
	    this.enterRule(localctx, 52, SystemVerilogPreParser.RULE_macro_quote);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this.match(SystemVerilogPreParser.MACRO_QUOTE);
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
	    this.enterRule(localctx, 54, SystemVerilogPreParser.RULE_macro_text);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===367 || ((((_la - 409)) & ~0x1f) === 0 && ((1 << (_la - 409)) & 31) !== 0)) {
	            this.state = 249;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 413:
	                this.state = 243;
	                this.macro_text_();
	                break;
	            case 409:
	                this.state = 244;
	                this.macro_delimiter();
	                break;
	            case 410:
	                this.state = 245;
	                this.macro_esc_newline();
	                break;
	            case 411:
	                this.state = 246;
	                this.macro_esc_quote();
	                break;
	            case 412:
	                this.state = 247;
	                this.macro_quote();
	                break;
	            case 367:
	                this.state = 248;
	                this.string_literal();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 253;
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
	    this.enterRule(localctx, 56, SystemVerilogPreParser.RULE_macro_text_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(SystemVerilogPreParser.MACRO_TEXT);
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
	    this.enterRule(localctx, 58, SystemVerilogPreParser.RULE_macro_usage);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.match(SystemVerilogPreParser.MACRO_USAGE);
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
	    this.enterRule(localctx, 60, SystemVerilogPreParser.RULE_nounconnected_drive_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 259;
	        this.match(SystemVerilogPreParser.NOUNCONNECTED_DRIVE_DIRECTIVE);
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
	    this.enterRule(localctx, 62, SystemVerilogPreParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.match(SystemVerilogPreParser.UNSIGNED_NUMBER);
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
	    this.enterRule(localctx, 64, SystemVerilogPreParser.RULE_pragma_directive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 264;
	        this.match(SystemVerilogPreParser.PRAGMA_DIRECTIVE);
	        this.state = 265;
	        this.pragma_name();
	        this.state = 274;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===321 || ((((_la - 366)) & ~0x1f) === 0 && ((1 << (_la - 366)) & 35) !== 0)) {
	            this.state = 266;
	            this.pragma_expression();
	            this.state = 271;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===294) {
	                this.state = 267;
	                this.match(SystemVerilogPreParser.CO);
	                this.state = 268;
	                this.pragma_expression();
	                this.state = 273;
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
	    this.enterRule(localctx, 66, SystemVerilogPreParser.RULE_pragma_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 276;
	            this.pragma_keyword();
	            this.state = 277;
	            this.match(SystemVerilogPreParser.EQ);

	        }
	        this.state = 281;
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
	    this.enterRule(localctx, 68, SystemVerilogPreParser.RULE_pragma_keyword);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.match(SystemVerilogPreParser.SIMPLE_IDENTIFIER);
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
	    this.enterRule(localctx, 70, SystemVerilogPreParser.RULE_pragma_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
	        this.match(SystemVerilogPreParser.SIMPLE_IDENTIFIER);
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
	    this.enterRule(localctx, 72, SystemVerilogPreParser.RULE_pragma_value);
	    var _la = 0;
	    try {
	        this.state = 301;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 321:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 287;
	            this.match(SystemVerilogPreParser.LP);
	            this.state = 288;
	            this.pragma_expression();
	            this.state = 293;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===294) {
	                this.state = 289;
	                this.match(SystemVerilogPreParser.CO);
	                this.state = 290;
	                this.pragma_expression();
	                this.state = 295;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 296;
	            this.match(SystemVerilogPreParser.RP);
	            break;
	        case 371:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 298;
	            this.number();
	            break;
	        case 367:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 299;
	            this.string_literal();
	            break;
	        case 366:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 300;
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
	    this.enterRule(localctx, 74, SystemVerilogPreParser.RULE_resetall_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 303;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 304;
	        this.match(SystemVerilogPreParser.RESETALL_DIRECTIVE);
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
	    this.enterRule(localctx, 76, SystemVerilogPreParser.RULE_source_text_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this.match(SystemVerilogPreParser.SOURCE_TEXT);
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



	string_literal() {
	    let localctx = new String_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, SystemVerilogPreParser.RULE_string_literal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        this.match(SystemVerilogPreParser.STRING_LITERAL);
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
	    this.enterRule(localctx, 80, SystemVerilogPreParser.RULE_text_macro_definition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 311;
	        this.match(SystemVerilogPreParser.DEFINE_DIRECTIVE);
	        this.state = 312;
	        this.macro_name();
	        this.state = 313;
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
	    this.enterRule(localctx, 82, SystemVerilogPreParser.RULE_text_macro_usage);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 315;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 316;
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
	    this.enterRule(localctx, 84, SystemVerilogPreParser.RULE_time_precision);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
	        this.match(SystemVerilogPreParser.TIME_VALUE);
	        this.state = 319;
	        this.match(SystemVerilogPreParser.TIME_UNIT);
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
	    this.enterRule(localctx, 86, SystemVerilogPreParser.RULE_time_unit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 321;
	        this.match(SystemVerilogPreParser.TIME_VALUE);
	        this.state = 322;
	        this.match(SystemVerilogPreParser.TIME_UNIT);
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
	    this.enterRule(localctx, 88, SystemVerilogPreParser.RULE_timescale_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 324;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 325;
	        this.match(SystemVerilogPreParser.TIMESCALE_DIRECTIVE);
	        this.state = 326;
	        this.time_unit();
	        this.state = 327;
	        this.match(SystemVerilogPreParser.SL);
	        this.state = 328;
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
	    this.enterRule(localctx, 90, SystemVerilogPreParser.RULE_unconnected_drive_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 331;
	        this.match(SystemVerilogPreParser.UNCONNECTED_DRIVE_DIRECTIVE);
	        this.state = 332;
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
	    this.enterRule(localctx, 92, SystemVerilogPreParser.RULE_unconnected_drive_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
	        this.match(SystemVerilogPreParser.UNCONNECTED_DRIVE_VALUE);
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
	    this.enterRule(localctx, 94, SystemVerilogPreParser.RULE_undef_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 337;
	        this.match(SystemVerilogPreParser.UNDEF_DIRECTIVE);
	        this.state = 338;
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



	undefineall_directive() {
	    let localctx = new Undefineall_directiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, SystemVerilogPreParser.RULE_undefineall_directive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
	        this.match(SystemVerilogPreParser.GA);
	        this.state = 341;
	        this.match(SystemVerilogPreParser.UNDEFINEALL_DIRECTIVE);
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
	    this.enterRule(localctx, 98, SystemVerilogPreParser.RULE_version_specifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 343;
	        this.match(SystemVerilogPreParser.VERSION_SPECIFIER);
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

SystemVerilogPreParser.EOF = antlr4.Token.EOF;
SystemVerilogPreParser.ACCEPT_ON = 1;
SystemVerilogPreParser.ALIAS = 2;
SystemVerilogPreParser.ALWAYS = 3;
SystemVerilogPreParser.ALWAYS_COMB = 4;
SystemVerilogPreParser.ALWAYS_FF = 5;
SystemVerilogPreParser.ALWAYS_LATCH = 6;
SystemVerilogPreParser.AND = 7;
SystemVerilogPreParser.ASSERT = 8;
SystemVerilogPreParser.ASSIGN = 9;
SystemVerilogPreParser.ASSUME = 10;
SystemVerilogPreParser.AUTOMATIC = 11;
SystemVerilogPreParser.BEFORE = 12;
SystemVerilogPreParser.BEGIN = 13;
SystemVerilogPreParser.BIND = 14;
SystemVerilogPreParser.BINS = 15;
SystemVerilogPreParser.BINSOF = 16;
SystemVerilogPreParser.BIT = 17;
SystemVerilogPreParser.BREAK = 18;
SystemVerilogPreParser.BUF = 19;
SystemVerilogPreParser.BUFIFONE = 20;
SystemVerilogPreParser.BUFIFZERO = 21;
SystemVerilogPreParser.BYTE = 22;
SystemVerilogPreParser.CASE = 23;
SystemVerilogPreParser.CASEX = 24;
SystemVerilogPreParser.CASEZ = 25;
SystemVerilogPreParser.CELL = 26;
SystemVerilogPreParser.CHANDLE = 27;
SystemVerilogPreParser.CHECKER = 28;
SystemVerilogPreParser.CLASS = 29;
SystemVerilogPreParser.CLOCKING = 30;
SystemVerilogPreParser.CMOS = 31;
SystemVerilogPreParser.CONFIG = 32;
SystemVerilogPreParser.CONST = 33;
SystemVerilogPreParser.CONSTRAINT = 34;
SystemVerilogPreParser.CONTEXT = 35;
SystemVerilogPreParser.CONTINUE = 36;
SystemVerilogPreParser.COVER = 37;
SystemVerilogPreParser.COVERGROUP = 38;
SystemVerilogPreParser.COVERPOINT = 39;
SystemVerilogPreParser.CROSS = 40;
SystemVerilogPreParser.DEASSIGN = 41;
SystemVerilogPreParser.DEFAULT = 42;
SystemVerilogPreParser.DEFPARAM = 43;
SystemVerilogPreParser.DESIGN = 44;
SystemVerilogPreParser.DISABLE = 45;
SystemVerilogPreParser.DIST = 46;
SystemVerilogPreParser.DLERROR = 47;
SystemVerilogPreParser.DLFATAL = 48;
SystemVerilogPreParser.DLFULLSKEW = 49;
SystemVerilogPreParser.DLHOLD = 50;
SystemVerilogPreParser.DLINFO = 51;
SystemVerilogPreParser.DLNOCHANGE = 52;
SystemVerilogPreParser.DLPERIOD = 53;
SystemVerilogPreParser.DLRECOVERY = 54;
SystemVerilogPreParser.DLRECREM = 55;
SystemVerilogPreParser.DLREMOVAL = 56;
SystemVerilogPreParser.DLROOT = 57;
SystemVerilogPreParser.DLSETUP = 58;
SystemVerilogPreParser.DLSETUPHOLD = 59;
SystemVerilogPreParser.DLSKEW = 60;
SystemVerilogPreParser.DLTIMESKEW = 61;
SystemVerilogPreParser.DLUNIT = 62;
SystemVerilogPreParser.DLWARNING = 63;
SystemVerilogPreParser.DLWIDTH = 64;
SystemVerilogPreParser.DO = 65;
SystemVerilogPreParser.DQDPIDQ = 66;
SystemVerilogPreParser.DQDPIMICDQ = 67;
SystemVerilogPreParser.EDGE = 68;
SystemVerilogPreParser.ELSE = 69;
SystemVerilogPreParser.END = 70;
SystemVerilogPreParser.ENDCASE = 71;
SystemVerilogPreParser.ENDCHECKER = 72;
SystemVerilogPreParser.ENDCLASS = 73;
SystemVerilogPreParser.ENDCLOCKING = 74;
SystemVerilogPreParser.ENDCONFIG = 75;
SystemVerilogPreParser.ENDFUNCTION = 76;
SystemVerilogPreParser.ENDGENERATE = 77;
SystemVerilogPreParser.ENDGROUP = 78;
SystemVerilogPreParser.ENDINTERFACE = 79;
SystemVerilogPreParser.ENDMODULE = 80;
SystemVerilogPreParser.ENDPACKAGE = 81;
SystemVerilogPreParser.ENDPRIMITIVE = 82;
SystemVerilogPreParser.ENDPROGRAM = 83;
SystemVerilogPreParser.ENDPROPERTY = 84;
SystemVerilogPreParser.ENDSEQUENCE = 85;
SystemVerilogPreParser.ENDSPECIFY = 86;
SystemVerilogPreParser.ENDTABLE = 87;
SystemVerilogPreParser.ENDTASK = 88;
SystemVerilogPreParser.ENUM = 89;
SystemVerilogPreParser.EVENT = 90;
SystemVerilogPreParser.EVENTUALLY = 91;
SystemVerilogPreParser.EXPECT = 92;
SystemVerilogPreParser.EXPORT = 93;
SystemVerilogPreParser.EXTENDS = 94;
SystemVerilogPreParser.EXTERN = 95;
SystemVerilogPreParser.FINAL = 96;
SystemVerilogPreParser.FIRST_MATCH = 97;
SystemVerilogPreParser.FOR = 98;
SystemVerilogPreParser.FORCE = 99;
SystemVerilogPreParser.FOREACH = 100;
SystemVerilogPreParser.FOREVER = 101;
SystemVerilogPreParser.FORK = 102;
SystemVerilogPreParser.FORKJOIN = 103;
SystemVerilogPreParser.FUNCTION = 104;
SystemVerilogPreParser.GENERATE = 105;
SystemVerilogPreParser.GENVAR = 106;
SystemVerilogPreParser.GLOBAL = 107;
SystemVerilogPreParser.HIGHZONE = 108;
SystemVerilogPreParser.HIGHZZERO = 109;
SystemVerilogPreParser.IF = 110;
SystemVerilogPreParser.IFF = 111;
SystemVerilogPreParser.IFNONE = 112;
SystemVerilogPreParser.IGNORE_BINS = 113;
SystemVerilogPreParser.ILLEGAL_BINS = 114;
SystemVerilogPreParser.IMPLEMENTS = 115;
SystemVerilogPreParser.IMPLIES = 116;
SystemVerilogPreParser.IMPORT = 117;
SystemVerilogPreParser.INCLUDE = 118;
SystemVerilogPreParser.INITIAL = 119;
SystemVerilogPreParser.INOUT = 120;
SystemVerilogPreParser.INPUT = 121;
SystemVerilogPreParser.INSIDE = 122;
SystemVerilogPreParser.INSTANCE = 123;
SystemVerilogPreParser.INT = 124;
SystemVerilogPreParser.INTEGER = 125;
SystemVerilogPreParser.INTERCONNECT = 126;
SystemVerilogPreParser.INTERFACE = 127;
SystemVerilogPreParser.INTERSECT = 128;
SystemVerilogPreParser.JOIN = 129;
SystemVerilogPreParser.JOIN_ANY = 130;
SystemVerilogPreParser.JOIN_NONE = 131;
SystemVerilogPreParser.LARGE = 132;
SystemVerilogPreParser.LET = 133;
SystemVerilogPreParser.LIBLIST = 134;
SystemVerilogPreParser.LIBRARY = 135;
SystemVerilogPreParser.LOCAL = 136;
SystemVerilogPreParser.LOCALPARAM = 137;
SystemVerilogPreParser.LOGIC = 138;
SystemVerilogPreParser.LONGINT = 139;
SystemVerilogPreParser.MACROMODULE = 140;
SystemVerilogPreParser.MATCHES = 141;
SystemVerilogPreParser.MEDIUM = 142;
SystemVerilogPreParser.MIINCDIR = 143;
SystemVerilogPreParser.MODPORT = 144;
SystemVerilogPreParser.MODULE = 145;
SystemVerilogPreParser.NAND = 146;
SystemVerilogPreParser.NEGEDGE = 147;
SystemVerilogPreParser.NETTYPE = 148;
SystemVerilogPreParser.NEW = 149;
SystemVerilogPreParser.NEXTTIME = 150;
SystemVerilogPreParser.NMOS = 151;
SystemVerilogPreParser.NOR = 152;
SystemVerilogPreParser.NOSHOWCANCELLED = 153;
SystemVerilogPreParser.NOT = 154;
SystemVerilogPreParser.NOTIFONE = 155;
SystemVerilogPreParser.NOTIFZERO = 156;
SystemVerilogPreParser.NULL = 157;
SystemVerilogPreParser.ONESTEP = 158;
SystemVerilogPreParser.OPTION = 159;
SystemVerilogPreParser.OR = 160;
SystemVerilogPreParser.OUTPUT = 161;
SystemVerilogPreParser.PACKAGE = 162;
SystemVerilogPreParser.PACKED = 163;
SystemVerilogPreParser.PARAMETER = 164;
SystemVerilogPreParser.PATHPULSEDL = 165;
SystemVerilogPreParser.PMOS = 166;
SystemVerilogPreParser.POSEDGE = 167;
SystemVerilogPreParser.PRIMITIVE = 168;
SystemVerilogPreParser.PRIORITY = 169;
SystemVerilogPreParser.PROGRAM = 170;
SystemVerilogPreParser.PROPERTY = 171;
SystemVerilogPreParser.PROTECTED = 172;
SystemVerilogPreParser.PULLDOWN = 173;
SystemVerilogPreParser.PULLONE = 174;
SystemVerilogPreParser.PULLUP = 175;
SystemVerilogPreParser.PULLZERO = 176;
SystemVerilogPreParser.PULSESTYLE_ONDETECT = 177;
SystemVerilogPreParser.PULSESTYLE_ONEVENT = 178;
SystemVerilogPreParser.PURE = 179;
SystemVerilogPreParser.RAND = 180;
SystemVerilogPreParser.RANDC = 181;
SystemVerilogPreParser.RANDCASE = 182;
SystemVerilogPreParser.RANDOMIZE = 183;
SystemVerilogPreParser.RANDSEQUENCE = 184;
SystemVerilogPreParser.RCMOS = 185;
SystemVerilogPreParser.REAL = 186;
SystemVerilogPreParser.REALTIME = 187;
SystemVerilogPreParser.REF = 188;
SystemVerilogPreParser.REG = 189;
SystemVerilogPreParser.REJECT_ON = 190;
SystemVerilogPreParser.RELEASE = 191;
SystemVerilogPreParser.REPEAT = 192;
SystemVerilogPreParser.RESTRICT = 193;
SystemVerilogPreParser.RETURN = 194;
SystemVerilogPreParser.RNMOS = 195;
SystemVerilogPreParser.RPMOS = 196;
SystemVerilogPreParser.RTRAN = 197;
SystemVerilogPreParser.RTRANIFONE = 198;
SystemVerilogPreParser.RTRANIFZERO = 199;
SystemVerilogPreParser.S_ALWAYS = 200;
SystemVerilogPreParser.S_EVENTUALLY = 201;
SystemVerilogPreParser.S_NEXTTIME = 202;
SystemVerilogPreParser.S_UNTIL = 203;
SystemVerilogPreParser.S_UNTIL_WITH = 204;
SystemVerilogPreParser.SAMPLE = 205;
SystemVerilogPreParser.SCALARED = 206;
SystemVerilogPreParser.SEQUENCE = 207;
SystemVerilogPreParser.SHORTINT = 208;
SystemVerilogPreParser.SHORTREAL = 209;
SystemVerilogPreParser.SHOWCANCELLED = 210;
SystemVerilogPreParser.SIGNED = 211;
SystemVerilogPreParser.SMALL = 212;
SystemVerilogPreParser.SOFT = 213;
SystemVerilogPreParser.SOLVE = 214;
SystemVerilogPreParser.SPECIFY = 215;
SystemVerilogPreParser.SPECPARAM = 216;
SystemVerilogPreParser.STATIC = 217;
SystemVerilogPreParser.STD = 218;
SystemVerilogPreParser.STRING = 219;
SystemVerilogPreParser.STRONG = 220;
SystemVerilogPreParser.STRONGONE = 221;
SystemVerilogPreParser.STRONGZERO = 222;
SystemVerilogPreParser.STRUCT = 223;
SystemVerilogPreParser.SUPER = 224;
SystemVerilogPreParser.SUPPLYONE = 225;
SystemVerilogPreParser.SUPPLYZERO = 226;
SystemVerilogPreParser.SYNC_ACCEPT_ON = 227;
SystemVerilogPreParser.SYNC_REJECT_ON = 228;
SystemVerilogPreParser.TABLE = 229;
SystemVerilogPreParser.TAGGED = 230;
SystemVerilogPreParser.TASK = 231;
SystemVerilogPreParser.THIS = 232;
SystemVerilogPreParser.THROUGHOUT = 233;
SystemVerilogPreParser.TIME = 234;
SystemVerilogPreParser.TIMEPRECISION = 235;
SystemVerilogPreParser.TIMEUNIT = 236;
SystemVerilogPreParser.TRAN = 237;
SystemVerilogPreParser.TRANIFONE = 238;
SystemVerilogPreParser.TRANIFZERO = 239;
SystemVerilogPreParser.TRI = 240;
SystemVerilogPreParser.TRIAND = 241;
SystemVerilogPreParser.TRIONE = 242;
SystemVerilogPreParser.TRIOR = 243;
SystemVerilogPreParser.TRIREG = 244;
SystemVerilogPreParser.TRIZERO = 245;
SystemVerilogPreParser.TYPE = 246;
SystemVerilogPreParser.TYPE_OPTION = 247;
SystemVerilogPreParser.TYPEDEF = 248;
SystemVerilogPreParser.UNION = 249;
SystemVerilogPreParser.UNIQUE = 250;
SystemVerilogPreParser.UNIQUEZERO = 251;
SystemVerilogPreParser.UNSIGNED = 252;
SystemVerilogPreParser.UNTIL = 253;
SystemVerilogPreParser.UNTIL_WITH = 254;
SystemVerilogPreParser.UNTYPED = 255;
SystemVerilogPreParser.USE = 256;
SystemVerilogPreParser.UWIRE = 257;
SystemVerilogPreParser.VAR = 258;
SystemVerilogPreParser.VECTORED = 259;
SystemVerilogPreParser.VIRTUAL = 260;
SystemVerilogPreParser.VOID = 261;
SystemVerilogPreParser.WAIT = 262;
SystemVerilogPreParser.WAIT_ORDER = 263;
SystemVerilogPreParser.WAND = 264;
SystemVerilogPreParser.WEAK = 265;
SystemVerilogPreParser.WEAKONE = 266;
SystemVerilogPreParser.WEAKZERO = 267;
SystemVerilogPreParser.WHILE = 268;
SystemVerilogPreParser.WILDCARD = 269;
SystemVerilogPreParser.WIRE = 270;
SystemVerilogPreParser.WITH = 271;
SystemVerilogPreParser.WITHIN = 272;
SystemVerilogPreParser.WOR = 273;
SystemVerilogPreParser.XNOR = 274;
SystemVerilogPreParser.XOR = 275;
SystemVerilogPreParser.AM = 276;
SystemVerilogPreParser.AMAM = 277;
SystemVerilogPreParser.AMAMAM = 278;
SystemVerilogPreParser.AMEQ = 279;
SystemVerilogPreParser.AP = 280;
SystemVerilogPreParser.AS = 281;
SystemVerilogPreParser.ASAS = 282;
SystemVerilogPreParser.ASEQ = 283;
SystemVerilogPreParser.ASGT = 284;
SystemVerilogPreParser.AT = 285;
SystemVerilogPreParser.ATAT = 286;
SystemVerilogPreParser.CA = 287;
SystemVerilogPreParser.CAEQ = 288;
SystemVerilogPreParser.CATI = 289;
SystemVerilogPreParser.CL = 290;
SystemVerilogPreParser.CLCL = 291;
SystemVerilogPreParser.CLEQ = 292;
SystemVerilogPreParser.CLSL = 293;
SystemVerilogPreParser.CO = 294;
SystemVerilogPreParser.DL = 295;
SystemVerilogPreParser.DQ = 296;
SystemVerilogPreParser.DT = 297;
SystemVerilogPreParser.DTAS = 298;
SystemVerilogPreParser.EM = 299;
SystemVerilogPreParser.EMEQ = 300;
SystemVerilogPreParser.EMEQEQ = 301;
SystemVerilogPreParser.EMEQQM = 302;
SystemVerilogPreParser.EQ = 303;
SystemVerilogPreParser.EQEQ = 304;
SystemVerilogPreParser.EQEQEQ = 305;
SystemVerilogPreParser.EQEQQM = 306;
SystemVerilogPreParser.EQGT = 307;
SystemVerilogPreParser.GA = 308;
SystemVerilogPreParser.GT = 309;
SystemVerilogPreParser.GTEQ = 310;
SystemVerilogPreParser.GTGT = 311;
SystemVerilogPreParser.GTGTEQ = 312;
SystemVerilogPreParser.GTGTGT = 313;
SystemVerilogPreParser.GTGTGTEQ = 314;
SystemVerilogPreParser.HA = 315;
SystemVerilogPreParser.HAEQHA = 316;
SystemVerilogPreParser.HAHA = 317;
SystemVerilogPreParser.HAMIHA = 318;
SystemVerilogPreParser.LB = 319;
SystemVerilogPreParser.LC = 320;
SystemVerilogPreParser.LP = 321;
SystemVerilogPreParser.LT = 322;
SystemVerilogPreParser.LTEQ = 323;
SystemVerilogPreParser.LTLT = 324;
SystemVerilogPreParser.LTLTEQ = 325;
SystemVerilogPreParser.LTLTLT = 326;
SystemVerilogPreParser.LTLTLTEQ = 327;
SystemVerilogPreParser.LTMIGT = 328;
SystemVerilogPreParser.MI = 329;
SystemVerilogPreParser.MICL = 330;
SystemVerilogPreParser.MIEQ = 331;
SystemVerilogPreParser.MIGT = 332;
SystemVerilogPreParser.MIGTGT = 333;
SystemVerilogPreParser.MIMI = 334;
SystemVerilogPreParser.MO = 335;
SystemVerilogPreParser.MOEQ = 336;
SystemVerilogPreParser.PL = 337;
SystemVerilogPreParser.PLCL = 338;
SystemVerilogPreParser.PLEQ = 339;
SystemVerilogPreParser.PLPL = 340;
SystemVerilogPreParser.QM = 341;
SystemVerilogPreParser.RB = 342;
SystemVerilogPreParser.RC = 343;
SystemVerilogPreParser.RP = 344;
SystemVerilogPreParser.SC = 345;
SystemVerilogPreParser.SL = 346;
SystemVerilogPreParser.SLEQ = 347;
SystemVerilogPreParser.TI = 348;
SystemVerilogPreParser.TIAM = 349;
SystemVerilogPreParser.TICA = 350;
SystemVerilogPreParser.TIVL = 351;
SystemVerilogPreParser.VL = 352;
SystemVerilogPreParser.VLEQ = 353;
SystemVerilogPreParser.VLEQGT = 354;
SystemVerilogPreParser.VLMIGT = 355;
SystemVerilogPreParser.VLVL = 356;
SystemVerilogPreParser.BINARY_BASE = 357;
SystemVerilogPreParser.BLOCK_COMMENT = 358;
SystemVerilogPreParser.DECIMAL_BASE = 359;
SystemVerilogPreParser.ESCAPED_IDENTIFIER = 360;
SystemVerilogPreParser.EXPONENTIAL_NUMBER = 361;
SystemVerilogPreParser.FIXED_POINT_NUMBER = 362;
SystemVerilogPreParser.HEX_BASE = 363;
SystemVerilogPreParser.LINE_COMMENT = 364;
SystemVerilogPreParser.OCTAL_BASE = 365;
SystemVerilogPreParser.SIMPLE_IDENTIFIER = 366;
SystemVerilogPreParser.STRING_LITERAL = 367;
SystemVerilogPreParser.SYSTEM_TF_IDENTIFIER = 368;
SystemVerilogPreParser.TIME_LITERAL = 369;
SystemVerilogPreParser.UNBASED_UNSIZED_LITERAL = 370;
SystemVerilogPreParser.UNSIGNED_NUMBER = 371;
SystemVerilogPreParser.WHITE_SPACE = 372;
SystemVerilogPreParser.ZERO_OR_ONE_X_OR_Z = 373;
SystemVerilogPreParser.BINARY_VALUE = 374;
SystemVerilogPreParser.X_OR_Z_UNDERSCORE = 375;
SystemVerilogPreParser.HEX_VALUE = 376;
SystemVerilogPreParser.FILE_PATH_SPEC = 377;
SystemVerilogPreParser.OCTAL_VALUE = 378;
SystemVerilogPreParser.EDGE_SYMBOL = 379;
SystemVerilogPreParser.LEVEL_ONLY_SYMBOL = 380;
SystemVerilogPreParser.OUTPUT_OR_LEVEL_SYMBOL = 381;
SystemVerilogPreParser.BEGIN_KEYWORDS_DIRECTIVE = 382;
SystemVerilogPreParser.CELLDEFINE_DIRECTIVE = 383;
SystemVerilogPreParser.DEFAULT_NETTYPE_DIRECTIVE = 384;
SystemVerilogPreParser.DEFINE_DIRECTIVE = 385;
SystemVerilogPreParser.ELSE_DIRECTIVE = 386;
SystemVerilogPreParser.ELSIF_DIRECTIVE = 387;
SystemVerilogPreParser.END_KEYWORDS_DIRECTIVE = 388;
SystemVerilogPreParser.ENDCELLDEFINE_DIRECTIVE = 389;
SystemVerilogPreParser.ENDIF_DIRECTIVE = 390;
SystemVerilogPreParser.FILE_DIRECTIVE = 391;
SystemVerilogPreParser.IFDEF_DIRECTIVE = 392;
SystemVerilogPreParser.IFNDEF_DIRECTIVE = 393;
SystemVerilogPreParser.INCLUDE_DIRECTIVE = 394;
SystemVerilogPreParser.LINE_DIRECTIVE = 395;
SystemVerilogPreParser.LINE_DIRECTIVE_ = 396;
SystemVerilogPreParser.NOUNCONNECTED_DRIVE_DIRECTIVE = 397;
SystemVerilogPreParser.PRAGMA_DIRECTIVE = 398;
SystemVerilogPreParser.RESETALL_DIRECTIVE = 399;
SystemVerilogPreParser.TIMESCALE_DIRECTIVE = 400;
SystemVerilogPreParser.UNCONNECTED_DRIVE_DIRECTIVE = 401;
SystemVerilogPreParser.UNDEF_DIRECTIVE = 402;
SystemVerilogPreParser.UNDEFINEALL_DIRECTIVE = 403;
SystemVerilogPreParser.MACRO_USAGE = 404;
SystemVerilogPreParser.VERSION_SPECIFIER = 405;
SystemVerilogPreParser.DEFAULT_NETTYPE_VALUE = 406;
SystemVerilogPreParser.MACRO_NAME = 407;
SystemVerilogPreParser.FILENAME = 408;
SystemVerilogPreParser.MACRO_DELIMITER = 409;
SystemVerilogPreParser.MACRO_ESC_NEWLINE = 410;
SystemVerilogPreParser.MACRO_ESC_QUOTE = 411;
SystemVerilogPreParser.MACRO_QUOTE = 412;
SystemVerilogPreParser.MACRO_TEXT = 413;
SystemVerilogPreParser.SOURCE_TEXT = 414;
SystemVerilogPreParser.TIME_UNIT = 415;
SystemVerilogPreParser.TIME_VALUE = 416;
SystemVerilogPreParser.UNCONNECTED_DRIVE_VALUE = 417;
SystemVerilogPreParser.MACRO_IDENTIFIER = 418;

SystemVerilogPreParser.RULE_source_text = 0;
SystemVerilogPreParser.RULE_compiler_directive = 1;
SystemVerilogPreParser.RULE_begin_keywords_directive = 2;
SystemVerilogPreParser.RULE_celldefine_directive = 3;
SystemVerilogPreParser.RULE_default_nettype_directive = 4;
SystemVerilogPreParser.RULE_default_nettype_value = 5;
SystemVerilogPreParser.RULE_else_directive = 6;
SystemVerilogPreParser.RULE_elsif_directive = 7;
SystemVerilogPreParser.RULE_end_keywords_directive = 8;
SystemVerilogPreParser.RULE_endcelldefine_directive = 9;
SystemVerilogPreParser.RULE_endif_directive = 10;
SystemVerilogPreParser.RULE_file_directive = 11;
SystemVerilogPreParser.RULE_filename = 12;
SystemVerilogPreParser.RULE_group_of_lines = 13;
SystemVerilogPreParser.RULE_identifier = 14;
SystemVerilogPreParser.RULE_ifdef_directive = 15;
SystemVerilogPreParser.RULE_ifndef_directive = 16;
SystemVerilogPreParser.RULE_include_directive = 17;
SystemVerilogPreParser.RULE_level = 18;
SystemVerilogPreParser.RULE_line_directive = 19;
SystemVerilogPreParser.RULE_line_directive_ = 20;
SystemVerilogPreParser.RULE_macro_delimiter = 21;
SystemVerilogPreParser.RULE_macro_esc_newline = 22;
SystemVerilogPreParser.RULE_macro_esc_quote = 23;
SystemVerilogPreParser.RULE_macro_identifier = 24;
SystemVerilogPreParser.RULE_macro_name = 25;
SystemVerilogPreParser.RULE_macro_quote = 26;
SystemVerilogPreParser.RULE_macro_text = 27;
SystemVerilogPreParser.RULE_macro_text_ = 28;
SystemVerilogPreParser.RULE_macro_usage = 29;
SystemVerilogPreParser.RULE_nounconnected_drive_directive = 30;
SystemVerilogPreParser.RULE_number = 31;
SystemVerilogPreParser.RULE_pragma_directive = 32;
SystemVerilogPreParser.RULE_pragma_expression = 33;
SystemVerilogPreParser.RULE_pragma_keyword = 34;
SystemVerilogPreParser.RULE_pragma_name = 35;
SystemVerilogPreParser.RULE_pragma_value = 36;
SystemVerilogPreParser.RULE_resetall_directive = 37;
SystemVerilogPreParser.RULE_source_text_ = 38;
SystemVerilogPreParser.RULE_string_literal = 39;
SystemVerilogPreParser.RULE_text_macro_definition = 40;
SystemVerilogPreParser.RULE_text_macro_usage = 41;
SystemVerilogPreParser.RULE_time_precision = 42;
SystemVerilogPreParser.RULE_time_unit = 43;
SystemVerilogPreParser.RULE_timescale_directive = 44;
SystemVerilogPreParser.RULE_unconnected_drive_directive = 45;
SystemVerilogPreParser.RULE_unconnected_drive_value = 46;
SystemVerilogPreParser.RULE_undef_directive = 47;
SystemVerilogPreParser.RULE_undefineall_directive = 48;
SystemVerilogPreParser.RULE_version_specifier = 49;

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
        this.ruleIndex = SystemVerilogPreParser.RULE_source_text;
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
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterSource_text(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_compiler_directive;
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

	file_directive() {
	    return this.getTypedRuleContext(File_directiveContext,0);
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

	line_directive_() {
	    return this.getTypedRuleContext(Line_directive_Context,0);
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

	undefineall_directive() {
	    return this.getTypedRuleContext(Undefineall_directiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterCompiler_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_begin_keywords_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	BEGIN_KEYWORDS_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.BEGIN_KEYWORDS_DIRECTIVE, 0);
	};

	DQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SystemVerilogPreParser.DQ);
	    } else {
	        return this.getToken(SystemVerilogPreParser.DQ, i);
	    }
	};


	version_specifier() {
	    return this.getTypedRuleContext(Version_specifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterBegin_keywords_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_celldefine_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	CELLDEFINE_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.CELLDEFINE_DIRECTIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterCelldefine_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_default_nettype_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	DEFAULT_NETTYPE_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.DEFAULT_NETTYPE_DIRECTIVE, 0);
	};

	default_nettype_value() {
	    return this.getTypedRuleContext(Default_nettype_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterDefault_nettype_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_default_nettype_value;
    }

	DEFAULT_NETTYPE_VALUE() {
	    return this.getToken(SystemVerilogPreParser.DEFAULT_NETTYPE_VALUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterDefault_nettype_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_else_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	ELSE_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.ELSE_DIRECTIVE, 0);
	};

	group_of_lines() {
	    return this.getTypedRuleContext(Group_of_linesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterElse_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_elsif_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	ELSIF_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.ELSIF_DIRECTIVE, 0);
	};

	macro_identifier() {
	    return this.getTypedRuleContext(Macro_identifierContext,0);
	};

	group_of_lines() {
	    return this.getTypedRuleContext(Group_of_linesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterElsif_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_end_keywords_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	END_KEYWORDS_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.END_KEYWORDS_DIRECTIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterEnd_keywords_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_endcelldefine_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	ENDCELLDEFINE_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.ENDCELLDEFINE_DIRECTIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterEndcelldefine_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_endif_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	ENDIF_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.ENDIF_DIRECTIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterEndif_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.exitEndif_directive(this);
		}
	}


}



class File_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SystemVerilogPreParser.RULE_file_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	FILE_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.FILE_DIRECTIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterFile_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.exitFile_directive(this);
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
        this.ruleIndex = SystemVerilogPreParser.RULE_filename;
    }

	FILENAME() {
	    return this.getToken(SystemVerilogPreParser.FILENAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterFilename(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_group_of_lines;
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
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterGroup_of_lines(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_identifier;
    }

	SIMPLE_IDENTIFIER() {
	    return this.getToken(SystemVerilogPreParser.SIMPLE_IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_ifdef_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	IFDEF_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.IFDEF_DIRECTIVE, 0);
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
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterIfdef_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_ifndef_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	IFNDEF_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.IFNDEF_DIRECTIVE, 0);
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
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterIfndef_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_include_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	INCLUDE_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.INCLUDE_DIRECTIVE, 0);
	};

	DQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SystemVerilogPreParser.DQ);
	    } else {
	        return this.getToken(SystemVerilogPreParser.DQ, i);
	    }
	};


	filename() {
	    return this.getTypedRuleContext(FilenameContext,0);
	};

	LT() {
	    return this.getToken(SystemVerilogPreParser.LT, 0);
	};

	GT() {
	    return this.getToken(SystemVerilogPreParser.GT, 0);
	};

	text_macro_usage() {
	    return this.getTypedRuleContext(Text_macro_usageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterInclude_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_level;
    }

	UNSIGNED_NUMBER() {
	    return this.getToken(SystemVerilogPreParser.UNSIGNED_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterLevel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_line_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	LINE_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.LINE_DIRECTIVE, 0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	DQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SystemVerilogPreParser.DQ);
	    } else {
	        return this.getToken(SystemVerilogPreParser.DQ, i);
	    }
	};


	filename() {
	    return this.getTypedRuleContext(FilenameContext,0);
	};

	level() {
	    return this.getTypedRuleContext(LevelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterLine_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.exitLine_directive(this);
		}
	}


}



class Line_directive_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SystemVerilogPreParser.RULE_line_directive_;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	LINE_DIRECTIVE_() {
	    return this.getToken(SystemVerilogPreParser.LINE_DIRECTIVE_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterLine_directive_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.exitLine_directive_(this);
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
        this.ruleIndex = SystemVerilogPreParser.RULE_macro_delimiter;
    }

	MACRO_DELIMITER() {
	    return this.getToken(SystemVerilogPreParser.MACRO_DELIMITER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterMacro_delimiter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_macro_esc_newline;
    }

	MACRO_ESC_NEWLINE() {
	    return this.getToken(SystemVerilogPreParser.MACRO_ESC_NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterMacro_esc_newline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_macro_esc_quote;
    }

	MACRO_ESC_QUOTE() {
	    return this.getToken(SystemVerilogPreParser.MACRO_ESC_QUOTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterMacro_esc_quote(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_macro_identifier;
    }

	MACRO_IDENTIFIER() {
	    return this.getToken(SystemVerilogPreParser.MACRO_IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterMacro_identifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_macro_name;
    }

	MACRO_NAME() {
	    return this.getToken(SystemVerilogPreParser.MACRO_NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterMacro_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_macro_quote;
    }

	MACRO_QUOTE() {
	    return this.getToken(SystemVerilogPreParser.MACRO_QUOTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterMacro_quote(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_macro_text;
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

	string_literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(String_literalContext);
	    } else {
	        return this.getTypedRuleContext(String_literalContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterMacro_text(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_macro_text_;
    }

	MACRO_TEXT() {
	    return this.getToken(SystemVerilogPreParser.MACRO_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterMacro_text_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_macro_usage;
    }

	MACRO_USAGE() {
	    return this.getToken(SystemVerilogPreParser.MACRO_USAGE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterMacro_usage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_nounconnected_drive_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	NOUNCONNECTED_DRIVE_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.NOUNCONNECTED_DRIVE_DIRECTIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterNounconnected_drive_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_number;
    }

	UNSIGNED_NUMBER() {
	    return this.getToken(SystemVerilogPreParser.UNSIGNED_NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_pragma_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	PRAGMA_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.PRAGMA_DIRECTIVE, 0);
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
	        return this.getTokens(SystemVerilogPreParser.CO);
	    } else {
	        return this.getToken(SystemVerilogPreParser.CO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterPragma_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_pragma_expression;
    }

	pragma_value() {
	    return this.getTypedRuleContext(Pragma_valueContext,0);
	};

	pragma_keyword() {
	    return this.getTypedRuleContext(Pragma_keywordContext,0);
	};

	EQ() {
	    return this.getToken(SystemVerilogPreParser.EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterPragma_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_pragma_keyword;
    }

	SIMPLE_IDENTIFIER() {
	    return this.getToken(SystemVerilogPreParser.SIMPLE_IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterPragma_keyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_pragma_name;
    }

	SIMPLE_IDENTIFIER() {
	    return this.getToken(SystemVerilogPreParser.SIMPLE_IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterPragma_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_pragma_value;
    }

	LP() {
	    return this.getToken(SystemVerilogPreParser.LP, 0);
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
	    return this.getToken(SystemVerilogPreParser.RP, 0);
	};

	CO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SystemVerilogPreParser.CO);
	    } else {
	        return this.getToken(SystemVerilogPreParser.CO, i);
	    }
	};


	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	string_literal() {
	    return this.getTypedRuleContext(String_literalContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterPragma_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_resetall_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	RESETALL_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.RESETALL_DIRECTIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterResetall_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_source_text_;
    }

	SOURCE_TEXT() {
	    return this.getToken(SystemVerilogPreParser.SOURCE_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterSource_text_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.exitSource_text_(this);
		}
	}


}



class String_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SystemVerilogPreParser.RULE_string_literal;
    }

	STRING_LITERAL() {
	    return this.getToken(SystemVerilogPreParser.STRING_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterString_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.exitString_literal(this);
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
        this.ruleIndex = SystemVerilogPreParser.RULE_text_macro_definition;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	DEFINE_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.DEFINE_DIRECTIVE, 0);
	};

	macro_name() {
	    return this.getTypedRuleContext(Macro_nameContext,0);
	};

	macro_text() {
	    return this.getTypedRuleContext(Macro_textContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterText_macro_definition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_text_macro_usage;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	macro_usage() {
	    return this.getTypedRuleContext(Macro_usageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterText_macro_usage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_time_precision;
    }

	TIME_VALUE() {
	    return this.getToken(SystemVerilogPreParser.TIME_VALUE, 0);
	};

	TIME_UNIT() {
	    return this.getToken(SystemVerilogPreParser.TIME_UNIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterTime_precision(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_time_unit;
    }

	TIME_VALUE() {
	    return this.getToken(SystemVerilogPreParser.TIME_VALUE, 0);
	};

	TIME_UNIT() {
	    return this.getToken(SystemVerilogPreParser.TIME_UNIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterTime_unit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_timescale_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	TIMESCALE_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.TIMESCALE_DIRECTIVE, 0);
	};

	time_unit() {
	    return this.getTypedRuleContext(Time_unitContext,0);
	};

	SL() {
	    return this.getToken(SystemVerilogPreParser.SL, 0);
	};

	time_precision() {
	    return this.getTypedRuleContext(Time_precisionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterTimescale_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_unconnected_drive_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	UNCONNECTED_DRIVE_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.UNCONNECTED_DRIVE_DIRECTIVE, 0);
	};

	unconnected_drive_value() {
	    return this.getTypedRuleContext(Unconnected_drive_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterUnconnected_drive_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_unconnected_drive_value;
    }

	UNCONNECTED_DRIVE_VALUE() {
	    return this.getToken(SystemVerilogPreParser.UNCONNECTED_DRIVE_VALUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterUnconnected_drive_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
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
        this.ruleIndex = SystemVerilogPreParser.RULE_undef_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	UNDEF_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.UNDEF_DIRECTIVE, 0);
	};

	macro_identifier() {
	    return this.getTypedRuleContext(Macro_identifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterUndef_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.exitUndef_directive(this);
		}
	}


}



class Undefineall_directiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SystemVerilogPreParser.RULE_undefineall_directive;
    }

	GA() {
	    return this.getToken(SystemVerilogPreParser.GA, 0);
	};

	UNDEFINEALL_DIRECTIVE() {
	    return this.getToken(SystemVerilogPreParser.UNDEFINEALL_DIRECTIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterUndefineall_directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.exitUndefineall_directive(this);
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
        this.ruleIndex = SystemVerilogPreParser.RULE_version_specifier;
    }

	VERSION_SPECIFIER() {
	    return this.getToken(SystemVerilogPreParser.VERSION_SPECIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.enterVersion_specifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SystemVerilogPreParserListener ) {
	        listener.exitVersion_specifier(this);
		}
	}


}




SystemVerilogPreParser.Source_textContext = Source_textContext; 
SystemVerilogPreParser.Compiler_directiveContext = Compiler_directiveContext; 
SystemVerilogPreParser.Begin_keywords_directiveContext = Begin_keywords_directiveContext; 
SystemVerilogPreParser.Celldefine_directiveContext = Celldefine_directiveContext; 
SystemVerilogPreParser.Default_nettype_directiveContext = Default_nettype_directiveContext; 
SystemVerilogPreParser.Default_nettype_valueContext = Default_nettype_valueContext; 
SystemVerilogPreParser.Else_directiveContext = Else_directiveContext; 
SystemVerilogPreParser.Elsif_directiveContext = Elsif_directiveContext; 
SystemVerilogPreParser.End_keywords_directiveContext = End_keywords_directiveContext; 
SystemVerilogPreParser.Endcelldefine_directiveContext = Endcelldefine_directiveContext; 
SystemVerilogPreParser.Endif_directiveContext = Endif_directiveContext; 
SystemVerilogPreParser.File_directiveContext = File_directiveContext; 
SystemVerilogPreParser.FilenameContext = FilenameContext; 
SystemVerilogPreParser.Group_of_linesContext = Group_of_linesContext; 
SystemVerilogPreParser.IdentifierContext = IdentifierContext; 
SystemVerilogPreParser.Ifdef_directiveContext = Ifdef_directiveContext; 
SystemVerilogPreParser.Ifndef_directiveContext = Ifndef_directiveContext; 
SystemVerilogPreParser.Include_directiveContext = Include_directiveContext; 
SystemVerilogPreParser.LevelContext = LevelContext; 
SystemVerilogPreParser.Line_directiveContext = Line_directiveContext; 
SystemVerilogPreParser.Line_directive_Context = Line_directive_Context; 
SystemVerilogPreParser.Macro_delimiterContext = Macro_delimiterContext; 
SystemVerilogPreParser.Macro_esc_newlineContext = Macro_esc_newlineContext; 
SystemVerilogPreParser.Macro_esc_quoteContext = Macro_esc_quoteContext; 
SystemVerilogPreParser.Macro_identifierContext = Macro_identifierContext; 
SystemVerilogPreParser.Macro_nameContext = Macro_nameContext; 
SystemVerilogPreParser.Macro_quoteContext = Macro_quoteContext; 
SystemVerilogPreParser.Macro_textContext = Macro_textContext; 
SystemVerilogPreParser.Macro_text_Context = Macro_text_Context; 
SystemVerilogPreParser.Macro_usageContext = Macro_usageContext; 
SystemVerilogPreParser.Nounconnected_drive_directiveContext = Nounconnected_drive_directiveContext; 
SystemVerilogPreParser.NumberContext = NumberContext; 
SystemVerilogPreParser.Pragma_directiveContext = Pragma_directiveContext; 
SystemVerilogPreParser.Pragma_expressionContext = Pragma_expressionContext; 
SystemVerilogPreParser.Pragma_keywordContext = Pragma_keywordContext; 
SystemVerilogPreParser.Pragma_nameContext = Pragma_nameContext; 
SystemVerilogPreParser.Pragma_valueContext = Pragma_valueContext; 
SystemVerilogPreParser.Resetall_directiveContext = Resetall_directiveContext; 
SystemVerilogPreParser.Source_text_Context = Source_text_Context; 
SystemVerilogPreParser.String_literalContext = String_literalContext; 
SystemVerilogPreParser.Text_macro_definitionContext = Text_macro_definitionContext; 
SystemVerilogPreParser.Text_macro_usageContext = Text_macro_usageContext; 
SystemVerilogPreParser.Time_precisionContext = Time_precisionContext; 
SystemVerilogPreParser.Time_unitContext = Time_unitContext; 
SystemVerilogPreParser.Timescale_directiveContext = Timescale_directiveContext; 
SystemVerilogPreParser.Unconnected_drive_directiveContext = Unconnected_drive_directiveContext; 
SystemVerilogPreParser.Unconnected_drive_valueContext = Unconnected_drive_valueContext; 
SystemVerilogPreParser.Undef_directiveContext = Undef_directiveContext; 
SystemVerilogPreParser.Undefineall_directiveContext = Undefineall_directiveContext; 
SystemVerilogPreParser.Version_specifierContext = Version_specifierContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
