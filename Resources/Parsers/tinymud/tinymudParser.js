// Generated from ./tinymud/tinymud.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import tinymudListener from './tinymudListener.js';
const serializedATN = [4,1,61,417,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,1,0,4,0,
128,8,0,11,0,12,0,129,1,0,5,0,133,8,0,10,0,12,0,136,9,0,1,1,1,1,3,1,140,
8,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,171,8,2,1,3,1,3,1,3,
1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,3,5,185,8,5,1,6,1,6,1,6,1,6,3,6,191,
8,6,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,3,9,202,8,9,1,10,1,10,3,10,206,8,
10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,3,12,219,8,12,
1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,3,14,231,8,14,1,15,1,15,
1,15,1,15,3,15,237,8,15,1,16,1,16,1,16,1,16,3,16,243,8,16,1,17,1,17,1,17,
1,17,5,17,249,8,17,10,17,12,17,252,9,17,1,17,1,17,3,17,256,8,17,1,18,1,18,
1,18,1,18,3,18,262,8,18,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,21,1,21,
1,21,1,21,3,21,276,8,21,1,21,1,21,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,
1,24,3,24,289,8,24,1,25,1,25,1,25,1,25,3,25,295,8,25,1,25,1,25,1,26,1,26,
1,26,1,27,1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,
30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,
329,8,30,1,31,1,31,1,31,1,32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,1,34,1,34,
1,34,1,35,1,35,1,35,1,36,1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,39,1,39,1,
39,1,39,1,40,1,40,1,40,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,44,
1,44,1,44,1,45,1,45,1,45,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,48,1,48,3,
48,387,8,48,1,49,1,49,1,50,1,50,1,51,1,51,1,52,1,52,1,53,1,53,1,54,1,54,
1,55,1,55,1,56,1,56,1,57,1,57,1,58,1,58,1,59,1,59,1,60,1,60,1,61,1,61,1,
62,1,62,1,62,0,0,63,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,
0,8,1,0,5,6,1,0,19,20,1,0,27,28,1,0,34,35,1,0,37,38,1,0,40,42,1,0,45,46,
1,0,48,49,415,0,127,1,0,0,0,2,139,1,0,0,0,4,170,1,0,0,0,6,172,1,0,0,0,8,
175,1,0,0,0,10,180,1,0,0,0,12,186,1,0,0,0,14,192,1,0,0,0,16,195,1,0,0,0,
18,197,1,0,0,0,20,203,1,0,0,0,22,207,1,0,0,0,24,212,1,0,0,0,26,220,1,0,0,
0,28,225,1,0,0,0,30,232,1,0,0,0,32,238,1,0,0,0,34,244,1,0,0,0,36,257,1,0,
0,0,38,263,1,0,0,0,40,268,1,0,0,0,42,271,1,0,0,0,44,279,1,0,0,0,46,281,1,
0,0,0,48,284,1,0,0,0,50,290,1,0,0,0,52,298,1,0,0,0,54,301,1,0,0,0,56,304,
1,0,0,0,58,307,1,0,0,0,60,328,1,0,0,0,62,330,1,0,0,0,64,333,1,0,0,0,66,336,
1,0,0,0,68,339,1,0,0,0,70,344,1,0,0,0,72,347,1,0,0,0,74,350,1,0,0,0,76,352,
1,0,0,0,78,354,1,0,0,0,80,359,1,0,0,0,82,362,1,0,0,0,84,364,1,0,0,0,86,369,
1,0,0,0,88,371,1,0,0,0,90,374,1,0,0,0,92,377,1,0,0,0,94,379,1,0,0,0,96,384,
1,0,0,0,98,388,1,0,0,0,100,390,1,0,0,0,102,392,1,0,0,0,104,394,1,0,0,0,106,
396,1,0,0,0,108,398,1,0,0,0,110,400,1,0,0,0,112,402,1,0,0,0,114,404,1,0,
0,0,116,406,1,0,0,0,118,408,1,0,0,0,120,410,1,0,0,0,122,412,1,0,0,0,124,
414,1,0,0,0,126,128,3,2,1,0,127,126,1,0,0,0,128,129,1,0,0,0,129,127,1,0,
0,0,129,130,1,0,0,0,130,134,1,0,0,0,131,133,5,60,0,0,132,131,1,0,0,0,133,
136,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,1,1,0,0,0,136,134,1,0,0,
0,137,140,3,4,2,0,138,140,3,60,30,0,139,137,1,0,0,0,139,138,1,0,0,0,140,
141,1,0,0,0,141,142,5,60,0,0,142,3,1,0,0,0,143,171,3,6,3,0,144,171,3,8,4,
0,145,171,3,10,5,0,146,171,3,12,6,0,147,171,3,14,7,0,148,171,3,16,8,0,149,
171,3,18,9,0,150,171,3,20,10,0,151,171,3,22,11,0,152,171,3,24,12,0,153,171,
3,26,13,0,154,171,3,28,14,0,155,171,3,30,15,0,156,171,3,32,16,0,157,171,
3,34,17,0,158,171,3,36,18,0,159,171,3,38,19,0,160,171,3,40,20,0,161,171,
3,42,21,0,162,171,3,44,22,0,163,171,3,46,23,0,164,171,3,48,24,0,165,171,
3,50,25,0,166,171,3,52,26,0,167,171,3,54,27,0,168,171,3,56,28,0,169,171,
3,58,29,0,170,143,1,0,0,0,170,144,1,0,0,0,170,145,1,0,0,0,170,146,1,0,0,
0,170,147,1,0,0,0,170,148,1,0,0,0,170,149,1,0,0,0,170,150,1,0,0,0,170,151,
1,0,0,0,170,152,1,0,0,0,170,153,1,0,0,0,170,154,1,0,0,0,170,155,1,0,0,0,
170,156,1,0,0,0,170,157,1,0,0,0,170,158,1,0,0,0,170,159,1,0,0,0,170,160,
1,0,0,0,170,161,1,0,0,0,170,162,1,0,0,0,170,163,1,0,0,0,170,164,1,0,0,0,
170,165,1,0,0,0,170,166,1,0,0,0,170,167,1,0,0,0,170,168,1,0,0,0,170,169,
1,0,0,0,171,5,1,0,0,0,172,173,5,1,0,0,173,174,3,100,50,0,174,7,1,0,0,0,175,
176,5,2,0,0,176,177,3,98,49,0,177,178,5,3,0,0,178,179,3,100,50,0,179,9,1,
0,0,0,180,181,5,4,0,0,181,184,3,102,51,0,182,183,5,3,0,0,183,185,3,106,53,
0,184,182,1,0,0,0,184,185,1,0,0,0,185,11,1,0,0,0,186,187,7,0,0,0,187,190,
3,98,49,0,188,189,5,3,0,0,189,191,3,104,52,0,190,188,1,0,0,0,190,191,1,0,
0,0,191,13,1,0,0,0,192,193,5,7,0,0,193,194,3,102,51,0,194,15,1,0,0,0,195,
196,5,8,0,0,196,17,1,0,0,0,197,198,5,9,0,0,198,201,3,102,51,0,199,200,5,
3,0,0,200,202,3,104,52,0,201,199,1,0,0,0,201,202,1,0,0,0,202,19,1,0,0,0,
203,205,5,10,0,0,204,206,3,102,51,0,205,204,1,0,0,0,205,206,1,0,0,0,206,
21,1,0,0,0,207,208,5,11,0,0,208,209,3,100,50,0,209,210,5,3,0,0,210,211,3,
4,2,0,211,23,1,0,0,0,212,213,5,12,0,0,213,214,3,98,49,0,214,218,5,3,0,0,
215,219,3,116,58,0,216,219,3,114,57,0,217,219,3,118,59,0,218,215,1,0,0,0,
218,216,1,0,0,0,218,217,1,0,0,0,219,25,1,0,0,0,220,221,5,13,0,0,221,222,
3,98,49,0,222,223,5,3,0,0,223,224,3,108,54,0,224,27,1,0,0,0,225,226,5,14,
0,0,226,227,3,98,49,0,227,228,5,3,0,0,228,230,3,102,51,0,229,231,3,110,55,
0,230,229,1,0,0,0,230,231,1,0,0,0,231,29,1,0,0,0,232,233,5,15,0,0,233,236,
3,100,50,0,234,235,5,3,0,0,235,237,3,110,55,0,236,234,1,0,0,0,236,237,1,
0,0,0,237,31,1,0,0,0,238,239,5,16,0,0,239,242,3,98,49,0,240,241,5,3,0,0,
241,243,3,112,56,0,242,240,1,0,0,0,242,243,1,0,0,0,243,33,1,0,0,0,244,245,
5,17,0,0,245,250,3,114,57,0,246,247,5,18,0,0,247,249,3,114,57,0,248,246,
1,0,0,0,249,252,1,0,0,0,250,248,1,0,0,0,250,251,1,0,0,0,251,255,1,0,0,0,
252,250,1,0,0,0,253,254,5,3,0,0,254,256,3,116,58,0,255,253,1,0,0,0,255,256,
1,0,0,0,256,35,1,0,0,0,257,258,7,1,0,0,258,261,3,98,49,0,259,260,5,3,0,0,
260,262,3,112,56,0,261,259,1,0,0,0,261,262,1,0,0,0,262,37,1,0,0,0,263,264,
5,21,0,0,264,265,3,110,55,0,265,266,5,3,0,0,266,267,3,110,55,0,267,39,1,
0,0,0,268,269,5,22,0,0,269,270,3,102,51,0,270,41,1,0,0,0,271,272,5,23,0,
0,272,273,3,98,49,0,273,275,5,3,0,0,274,276,5,24,0,0,275,274,1,0,0,0,275,
276,1,0,0,0,276,277,1,0,0,0,277,278,3,120,60,0,278,43,1,0,0,0,279,280,5,
25,0,0,280,45,1,0,0,0,281,282,5,26,0,0,282,283,3,100,50,0,283,47,1,0,0,0,
284,285,7,2,0,0,285,288,3,98,49,0,286,287,5,3,0,0,287,289,3,112,56,0,288,
286,1,0,0,0,288,289,1,0,0,0,289,49,1,0,0,0,290,294,5,29,0,0,291,292,3,98,
49,0,292,293,5,3,0,0,293,295,1,0,0,0,294,291,1,0,0,0,294,295,1,0,0,0,295,
296,1,0,0,0,296,297,3,118,59,0,297,51,1,0,0,0,298,299,5,30,0,0,299,300,3,
100,50,0,300,53,1,0,0,0,301,302,5,31,0,0,302,303,3,114,57,0,303,55,1,0,0,
0,304,305,5,32,0,0,305,306,3,98,49,0,306,57,1,0,0,0,307,308,5,33,0,0,308,
309,3,112,56,0,309,59,1,0,0,0,310,329,3,62,31,0,311,329,3,64,32,0,312,329,
3,66,33,0,313,329,3,68,34,0,314,329,3,70,35,0,315,329,3,72,36,0,316,329,
3,74,37,0,317,329,3,76,38,0,318,329,3,78,39,0,319,329,3,80,40,0,320,329,
3,82,41,0,321,329,3,84,42,0,322,329,3,86,43,0,323,329,3,88,44,0,324,329,
3,90,45,0,325,329,3,92,46,0,326,329,3,94,47,0,327,329,3,96,48,0,328,310,
1,0,0,0,328,311,1,0,0,0,328,312,1,0,0,0,328,313,1,0,0,0,328,314,1,0,0,0,
328,315,1,0,0,0,328,316,1,0,0,0,328,317,1,0,0,0,328,318,1,0,0,0,328,319,
1,0,0,0,328,320,1,0,0,0,328,321,1,0,0,0,328,322,1,0,0,0,328,323,1,0,0,0,
328,324,1,0,0,0,328,325,1,0,0,0,328,326,1,0,0,0,328,327,1,0,0,0,329,61,1,
0,0,0,330,331,7,3,0,0,331,332,3,98,49,0,332,63,1,0,0,0,333,334,5,36,0,0,
334,335,3,98,49,0,335,65,1,0,0,0,336,337,7,4,0,0,337,338,3,98,49,0,338,67,
1,0,0,0,339,340,5,39,0,0,340,341,3,100,50,0,341,342,5,3,0,0,342,343,3,122,
61,0,343,69,1,0,0,0,344,345,7,5,0,0,345,346,3,124,62,0,346,71,1,0,0,0,347,
348,5,43,0,0,348,349,3,112,56,0,349,73,1,0,0,0,350,351,5,44,0,0,351,75,1,
0,0,0,352,353,7,6,0,0,353,77,1,0,0,0,354,355,5,47,0,0,355,356,3,100,50,0,
356,357,5,3,0,0,357,358,3,106,53,0,358,79,1,0,0,0,359,360,7,7,0,0,360,361,
3,98,49,0,361,81,1,0,0,0,362,363,5,50,0,0,363,83,1,0,0,0,364,365,5,51,0,
0,365,366,3,100,50,0,366,367,5,3,0,0,367,368,3,112,56,0,368,85,1,0,0,0,369,
370,5,52,0,0,370,87,1,0,0,0,371,372,5,53,0,0,372,373,3,100,50,0,373,89,1,
0,0,0,374,375,5,54,0,0,375,376,3,112,56,0,376,91,1,0,0,0,377,378,5,55,0,
0,378,93,1,0,0,0,379,380,5,56,0,0,380,381,3,100,50,0,381,382,5,3,0,0,382,
383,3,112,56,0,383,95,1,0,0,0,384,386,5,57,0,0,385,387,3,100,50,0,386,385,
1,0,0,0,386,387,1,0,0,0,387,97,1,0,0,0,388,389,5,58,0,0,389,99,1,0,0,0,390,
391,5,58,0,0,391,101,1,0,0,0,392,393,5,58,0,0,393,103,1,0,0,0,394,395,5,
58,0,0,395,105,1,0,0,0,396,397,5,59,0,0,397,107,1,0,0,0,398,399,5,58,0,0,
399,109,1,0,0,0,400,401,5,58,0,0,401,111,1,0,0,0,402,403,5,58,0,0,403,113,
1,0,0,0,404,405,5,58,0,0,405,115,1,0,0,0,406,407,5,59,0,0,407,117,1,0,0,
0,408,409,5,58,0,0,409,119,1,0,0,0,410,411,5,59,0,0,411,121,1,0,0,0,412,
413,5,59,0,0,413,123,1,0,0,0,414,415,5,58,0,0,415,125,1,0,0,0,20,129,134,
139,170,184,190,201,205,218,230,236,242,250,255,261,275,288,294,328,386];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class tinymudParser extends antlr4.Parser {

    static grammarFileName = "tinymud.g4";
    static literalNames = [ null, "'@boot'", "'@chown'", "'='", "'@create'", 
                            "'@describe'", "'@desc'", "'@dig'", "'@dump'", 
                            "'@fail'", "'@find'", "'@force'", "'@link'", 
                            "'@lock'", "'@name'", "'@newpassword'", "'@ofail'", 
                            "'@open'", "';'", "'@osuccess'", "'@osucc'", 
                            "'@password'", "'@pcreate'", "'@set'", "'!'", 
                            "'@shutdown'", "'@stats'", "'@success'", "'@succ'", 
                            "'@teleport'", "'@toad'", "'@unlink'", "'@unlock'", 
                            "'@wall'", "'drop'", "'throw'", "'examine'", 
                            "'get'", "'take'", "'give'", "'go'", "'goto'", 
                            "'move'", "'gripe'", "'help'", "'inventory'", 
                            "'inv'", "'kill'", "'look'", "'read'", "'news'", 
                            "'page'", "'quit'", "'rob'", "'say'", "'score'", 
                            "'whisper'", "'who'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "STRING", "NUMBER", "EOL", "WS" ];
    static ruleNames = [ "prog", "line", "command", "bootcommand", "chowncommand", 
                         "createcommand", "describecommand", "digcommand", 
                         "dumpcommand", "failcommand", "findcommand", "forcecommand", 
                         "linkcommand", "lockcommand", "namecommand", "newpassswordcommand", 
                         "ofailcommand", "opencommand", "osuccesscommand", 
                         "passwordcommand", "pcreatecommand", "setcommand", 
                         "shutdowncommand", "statscommand", "successcommand", 
                         "teleportcommand", "toadcommand", "unlinkcommand", 
                         "unlockcommand", "wallcommand", "action", "dropaction", 
                         "examineaction", "getaction", "giveaction", "gotoaction", 
                         "gripeaction", "helpaction", "inventoryaction", 
                         "killaction", "lookaction", "newsaction", "pageaction", 
                         "quitaction", "robaction", "sayaction", "scoreaction", 
                         "whisperaction", "whoaction", "object_", "player", 
                         "name", "description", "cost", "key", "password", 
                         "message", "dir_", "number", "room", "flag", "pennies", 
                         "direction" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = tinymudParser.ruleNames;
        this.literalNames = tinymudParser.literalNames;
        this.symbolicNames = tinymudParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, tinymudParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 126;
	            this.line();
	            this.state = 129; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tinymudParser.T__0) | (1 << tinymudParser.T__1) | (1 << tinymudParser.T__3) | (1 << tinymudParser.T__4) | (1 << tinymudParser.T__5) | (1 << tinymudParser.T__6) | (1 << tinymudParser.T__7) | (1 << tinymudParser.T__8) | (1 << tinymudParser.T__9) | (1 << tinymudParser.T__10) | (1 << tinymudParser.T__11) | (1 << tinymudParser.T__12) | (1 << tinymudParser.T__13) | (1 << tinymudParser.T__14) | (1 << tinymudParser.T__15) | (1 << tinymudParser.T__16) | (1 << tinymudParser.T__18) | (1 << tinymudParser.T__19) | (1 << tinymudParser.T__20) | (1 << tinymudParser.T__21) | (1 << tinymudParser.T__22) | (1 << tinymudParser.T__24) | (1 << tinymudParser.T__25) | (1 << tinymudParser.T__26) | (1 << tinymudParser.T__27) | (1 << tinymudParser.T__28) | (1 << tinymudParser.T__29) | (1 << tinymudParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (tinymudParser.T__31 - 32)) | (1 << (tinymudParser.T__32 - 32)) | (1 << (tinymudParser.T__33 - 32)) | (1 << (tinymudParser.T__34 - 32)) | (1 << (tinymudParser.T__35 - 32)) | (1 << (tinymudParser.T__36 - 32)) | (1 << (tinymudParser.T__37 - 32)) | (1 << (tinymudParser.T__38 - 32)) | (1 << (tinymudParser.T__39 - 32)) | (1 << (tinymudParser.T__40 - 32)) | (1 << (tinymudParser.T__41 - 32)) | (1 << (tinymudParser.T__42 - 32)) | (1 << (tinymudParser.T__43 - 32)) | (1 << (tinymudParser.T__44 - 32)) | (1 << (tinymudParser.T__45 - 32)) | (1 << (tinymudParser.T__46 - 32)) | (1 << (tinymudParser.T__47 - 32)) | (1 << (tinymudParser.T__48 - 32)) | (1 << (tinymudParser.T__49 - 32)) | (1 << (tinymudParser.T__50 - 32)) | (1 << (tinymudParser.T__51 - 32)) | (1 << (tinymudParser.T__52 - 32)) | (1 << (tinymudParser.T__53 - 32)) | (1 << (tinymudParser.T__54 - 32)) | (1 << (tinymudParser.T__55 - 32)) | (1 << (tinymudParser.T__56 - 32)))) !== 0));
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tinymudParser.EOL) {
	            this.state = 131;
	            this.match(tinymudParser.EOL);
	            this.state = 136;
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



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, tinymudParser.RULE_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case tinymudParser.T__0:
	        case tinymudParser.T__1:
	        case tinymudParser.T__3:
	        case tinymudParser.T__4:
	        case tinymudParser.T__5:
	        case tinymudParser.T__6:
	        case tinymudParser.T__7:
	        case tinymudParser.T__8:
	        case tinymudParser.T__9:
	        case tinymudParser.T__10:
	        case tinymudParser.T__11:
	        case tinymudParser.T__12:
	        case tinymudParser.T__13:
	        case tinymudParser.T__14:
	        case tinymudParser.T__15:
	        case tinymudParser.T__16:
	        case tinymudParser.T__18:
	        case tinymudParser.T__19:
	        case tinymudParser.T__20:
	        case tinymudParser.T__21:
	        case tinymudParser.T__22:
	        case tinymudParser.T__24:
	        case tinymudParser.T__25:
	        case tinymudParser.T__26:
	        case tinymudParser.T__27:
	        case tinymudParser.T__28:
	        case tinymudParser.T__29:
	        case tinymudParser.T__30:
	        case tinymudParser.T__31:
	        case tinymudParser.T__32:
	            this.state = 137;
	            this.command();
	            break;
	        case tinymudParser.T__33:
	        case tinymudParser.T__34:
	        case tinymudParser.T__35:
	        case tinymudParser.T__36:
	        case tinymudParser.T__37:
	        case tinymudParser.T__38:
	        case tinymudParser.T__39:
	        case tinymudParser.T__40:
	        case tinymudParser.T__41:
	        case tinymudParser.T__42:
	        case tinymudParser.T__43:
	        case tinymudParser.T__44:
	        case tinymudParser.T__45:
	        case tinymudParser.T__46:
	        case tinymudParser.T__47:
	        case tinymudParser.T__48:
	        case tinymudParser.T__49:
	        case tinymudParser.T__50:
	        case tinymudParser.T__51:
	        case tinymudParser.T__52:
	        case tinymudParser.T__53:
	        case tinymudParser.T__54:
	        case tinymudParser.T__55:
	        case tinymudParser.T__56:
	            this.state = 138;
	            this.action();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 141;
	        this.match(tinymudParser.EOL);
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



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, tinymudParser.RULE_command);
	    try {
	        this.state = 170;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case tinymudParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 143;
	            this.bootcommand();
	            break;
	        case tinymudParser.T__1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 144;
	            this.chowncommand();
	            break;
	        case tinymudParser.T__3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 145;
	            this.createcommand();
	            break;
	        case tinymudParser.T__4:
	        case tinymudParser.T__5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 146;
	            this.describecommand();
	            break;
	        case tinymudParser.T__6:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 147;
	            this.digcommand();
	            break;
	        case tinymudParser.T__7:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 148;
	            this.dumpcommand();
	            break;
	        case tinymudParser.T__8:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 149;
	            this.failcommand();
	            break;
	        case tinymudParser.T__9:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 150;
	            this.findcommand();
	            break;
	        case tinymudParser.T__10:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 151;
	            this.forcecommand();
	            break;
	        case tinymudParser.T__11:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 152;
	            this.linkcommand();
	            break;
	        case tinymudParser.T__12:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 153;
	            this.lockcommand();
	            break;
	        case tinymudParser.T__13:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 154;
	            this.namecommand();
	            break;
	        case tinymudParser.T__14:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 155;
	            this.newpassswordcommand();
	            break;
	        case tinymudParser.T__15:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 156;
	            this.ofailcommand();
	            break;
	        case tinymudParser.T__16:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 157;
	            this.opencommand();
	            break;
	        case tinymudParser.T__18:
	        case tinymudParser.T__19:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 158;
	            this.osuccesscommand();
	            break;
	        case tinymudParser.T__20:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 159;
	            this.passwordcommand();
	            break;
	        case tinymudParser.T__21:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 160;
	            this.pcreatecommand();
	            break;
	        case tinymudParser.T__22:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 161;
	            this.setcommand();
	            break;
	        case tinymudParser.T__24:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 162;
	            this.shutdowncommand();
	            break;
	        case tinymudParser.T__25:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 163;
	            this.statscommand();
	            break;
	        case tinymudParser.T__26:
	        case tinymudParser.T__27:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 164;
	            this.successcommand();
	            break;
	        case tinymudParser.T__28:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 165;
	            this.teleportcommand();
	            break;
	        case tinymudParser.T__29:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 166;
	            this.toadcommand();
	            break;
	        case tinymudParser.T__30:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 167;
	            this.unlinkcommand();
	            break;
	        case tinymudParser.T__31:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 168;
	            this.unlockcommand();
	            break;
	        case tinymudParser.T__32:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 169;
	            this.wallcommand();
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



	bootcommand() {
	    let localctx = new BootcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, tinymudParser.RULE_bootcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.match(tinymudParser.T__0);
	        this.state = 173;
	        this.player();
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



	chowncommand() {
	    let localctx = new ChowncommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, tinymudParser.RULE_chowncommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.match(tinymudParser.T__1);
	        this.state = 176;
	        this.object_();
	        this.state = 177;
	        this.match(tinymudParser.T__2);
	        this.state = 178;
	        this.player();
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



	createcommand() {
	    let localctx = new CreatecommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, tinymudParser.RULE_createcommand);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.match(tinymudParser.T__3);
	        this.state = 181;
	        this.name();
	        this.state = 184;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tinymudParser.T__2) {
	            this.state = 182;
	            this.match(tinymudParser.T__2);
	            this.state = 183;
	            this.cost();
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



	describecommand() {
	    let localctx = new DescribecommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, tinymudParser.RULE_describecommand);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        _la = this._input.LA(1);
	        if(!(_la===tinymudParser.T__4 || _la===tinymudParser.T__5)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 187;
	        this.object_();
	        this.state = 190;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tinymudParser.T__2) {
	            this.state = 188;
	            this.match(tinymudParser.T__2);
	            this.state = 189;
	            this.description();
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



	digcommand() {
	    let localctx = new DigcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, tinymudParser.RULE_digcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.match(tinymudParser.T__6);
	        this.state = 193;
	        this.name();
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



	dumpcommand() {
	    let localctx = new DumpcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, tinymudParser.RULE_dumpcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(tinymudParser.T__7);
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



	failcommand() {
	    let localctx = new FailcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, tinymudParser.RULE_failcommand);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.match(tinymudParser.T__8);
	        this.state = 198;
	        this.name();
	        this.state = 201;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tinymudParser.T__2) {
	            this.state = 199;
	            this.match(tinymudParser.T__2);
	            this.state = 200;
	            this.description();
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



	findcommand() {
	    let localctx = new FindcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, tinymudParser.RULE_findcommand);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.match(tinymudParser.T__9);
	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tinymudParser.STRING) {
	            this.state = 204;
	            this.name();
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



	forcecommand() {
	    let localctx = new ForcecommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, tinymudParser.RULE_forcecommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(tinymudParser.T__10);
	        this.state = 208;
	        this.player();
	        this.state = 209;
	        this.match(tinymudParser.T__2);
	        this.state = 210;
	        this.command();
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



	linkcommand() {
	    let localctx = new LinkcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, tinymudParser.RULE_linkcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.match(tinymudParser.T__11);
	        this.state = 213;
	        this.object_();
	        this.state = 214;
	        this.match(tinymudParser.T__2);
	        this.state = 218;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 215;
	            this.number();
	            break;

	        case 2:
	            this.state = 216;
	            this.dir_();
	            break;

	        case 3:
	            this.state = 217;
	            this.room();
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



	lockcommand() {
	    let localctx = new LockcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, tinymudParser.RULE_lockcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.match(tinymudParser.T__12);
	        this.state = 221;
	        this.object_();
	        this.state = 222;
	        this.match(tinymudParser.T__2);
	        this.state = 223;
	        this.key();
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



	namecommand() {
	    let localctx = new NamecommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, tinymudParser.RULE_namecommand);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this.match(tinymudParser.T__13);
	        this.state = 226;
	        this.object_();
	        this.state = 227;
	        this.match(tinymudParser.T__2);
	        this.state = 228;
	        this.name();
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tinymudParser.STRING) {
	            this.state = 229;
	            this.password();
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



	newpassswordcommand() {
	    let localctx = new NewpassswordcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, tinymudParser.RULE_newpassswordcommand);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(tinymudParser.T__14);
	        this.state = 233;
	        this.player();
	        this.state = 236;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tinymudParser.T__2) {
	            this.state = 234;
	            this.match(tinymudParser.T__2);
	            this.state = 235;
	            this.password();
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



	ofailcommand() {
	    let localctx = new OfailcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, tinymudParser.RULE_ofailcommand);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(tinymudParser.T__15);
	        this.state = 239;
	        this.object_();
	        this.state = 242;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tinymudParser.T__2) {
	            this.state = 240;
	            this.match(tinymudParser.T__2);
	            this.state = 241;
	            this.message();
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



	opencommand() {
	    let localctx = new OpencommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, tinymudParser.RULE_opencommand);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this.match(tinymudParser.T__16);
	        this.state = 245;
	        this.dir_();
	        this.state = 250;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tinymudParser.T__17) {
	            this.state = 246;
	            this.match(tinymudParser.T__17);
	            this.state = 247;
	            this.dir_();
	            this.state = 252;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 255;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tinymudParser.T__2) {
	            this.state = 253;
	            this.match(tinymudParser.T__2);
	            this.state = 254;
	            this.number();
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



	osuccesscommand() {
	    let localctx = new OsuccesscommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, tinymudParser.RULE_osuccesscommand);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        _la = this._input.LA(1);
	        if(!(_la===tinymudParser.T__18 || _la===tinymudParser.T__19)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 258;
	        this.object_();
	        this.state = 261;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tinymudParser.T__2) {
	            this.state = 259;
	            this.match(tinymudParser.T__2);
	            this.state = 260;
	            this.message();
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



	passwordcommand() {
	    let localctx = new PasswordcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, tinymudParser.RULE_passwordcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(tinymudParser.T__20);
	        this.state = 264;
	        this.password();
	        this.state = 265;
	        this.match(tinymudParser.T__2);
	        this.state = 266;
	        this.password();
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



	pcreatecommand() {
	    let localctx = new PcreatecommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, tinymudParser.RULE_pcreatecommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this.match(tinymudParser.T__21);
	        this.state = 269;
	        this.name();
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



	setcommand() {
	    let localctx = new SetcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, tinymudParser.RULE_setcommand);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        this.match(tinymudParser.T__22);
	        this.state = 272;
	        this.object_();
	        this.state = 273;
	        this.match(tinymudParser.T__2);
	        this.state = 275;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tinymudParser.T__23) {
	            this.state = 274;
	            this.match(tinymudParser.T__23);
	        }

	        this.state = 277;
	        this.flag();
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



	shutdowncommand() {
	    let localctx = new ShutdowncommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, tinymudParser.RULE_shutdowncommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this.match(tinymudParser.T__24);
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



	statscommand() {
	    let localctx = new StatscommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, tinymudParser.RULE_statscommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        this.match(tinymudParser.T__25);
	        this.state = 282;
	        this.player();
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



	successcommand() {
	    let localctx = new SuccesscommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, tinymudParser.RULE_successcommand);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        _la = this._input.LA(1);
	        if(!(_la===tinymudParser.T__26 || _la===tinymudParser.T__27)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 285;
	        this.object_();
	        this.state = 288;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tinymudParser.T__2) {
	            this.state = 286;
	            this.match(tinymudParser.T__2);
	            this.state = 287;
	            this.message();
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



	teleportcommand() {
	    let localctx = new TeleportcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, tinymudParser.RULE_teleportcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.match(tinymudParser.T__28);
	        this.state = 294;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 291;
	            this.object_();
	            this.state = 292;
	            this.match(tinymudParser.T__2);

	        }
	        this.state = 296;
	        this.room();
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



	toadcommand() {
	    let localctx = new ToadcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, tinymudParser.RULE_toadcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this.match(tinymudParser.T__29);
	        this.state = 299;
	        this.player();
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



	unlinkcommand() {
	    let localctx = new UnlinkcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, tinymudParser.RULE_unlinkcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 301;
	        this.match(tinymudParser.T__30);
	        this.state = 302;
	        this.dir_();
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



	unlockcommand() {
	    let localctx = new UnlockcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, tinymudParser.RULE_unlockcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 304;
	        this.match(tinymudParser.T__31);
	        this.state = 305;
	        this.object_();
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



	wallcommand() {
	    let localctx = new WallcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, tinymudParser.RULE_wallcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.match(tinymudParser.T__32);
	        this.state = 308;
	        this.message();
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



	action() {
	    let localctx = new ActionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, tinymudParser.RULE_action);
	    try {
	        this.state = 328;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case tinymudParser.T__33:
	        case tinymudParser.T__34:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 310;
	            this.dropaction();
	            break;
	        case tinymudParser.T__35:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 311;
	            this.examineaction();
	            break;
	        case tinymudParser.T__36:
	        case tinymudParser.T__37:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 312;
	            this.getaction();
	            break;
	        case tinymudParser.T__38:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 313;
	            this.giveaction();
	            break;
	        case tinymudParser.T__39:
	        case tinymudParser.T__40:
	        case tinymudParser.T__41:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 314;
	            this.gotoaction();
	            break;
	        case tinymudParser.T__42:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 315;
	            this.gripeaction();
	            break;
	        case tinymudParser.T__43:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 316;
	            this.helpaction();
	            break;
	        case tinymudParser.T__44:
	        case tinymudParser.T__45:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 317;
	            this.inventoryaction();
	            break;
	        case tinymudParser.T__46:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 318;
	            this.killaction();
	            break;
	        case tinymudParser.T__47:
	        case tinymudParser.T__48:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 319;
	            this.lookaction();
	            break;
	        case tinymudParser.T__49:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 320;
	            this.newsaction();
	            break;
	        case tinymudParser.T__50:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 321;
	            this.pageaction();
	            break;
	        case tinymudParser.T__51:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 322;
	            this.quitaction();
	            break;
	        case tinymudParser.T__52:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 323;
	            this.robaction();
	            break;
	        case tinymudParser.T__53:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 324;
	            this.sayaction();
	            break;
	        case tinymudParser.T__54:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 325;
	            this.scoreaction();
	            break;
	        case tinymudParser.T__55:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 326;
	            this.whisperaction();
	            break;
	        case tinymudParser.T__56:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 327;
	            this.whoaction();
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



	dropaction() {
	    let localctx = new DropactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, tinymudParser.RULE_dropaction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
	        _la = this._input.LA(1);
	        if(!(_la===tinymudParser.T__33 || _la===tinymudParser.T__34)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 331;
	        this.object_();
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



	examineaction() {
	    let localctx = new ExamineactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, tinymudParser.RULE_examineaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 333;
	        this.match(tinymudParser.T__35);
	        this.state = 334;
	        this.object_();
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



	getaction() {
	    let localctx = new GetactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, tinymudParser.RULE_getaction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        _la = this._input.LA(1);
	        if(!(_la===tinymudParser.T__36 || _la===tinymudParser.T__37)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 337;
	        this.object_();
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



	giveaction() {
	    let localctx = new GiveactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, tinymudParser.RULE_giveaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 339;
	        this.match(tinymudParser.T__38);
	        this.state = 340;
	        this.player();
	        this.state = 341;
	        this.match(tinymudParser.T__2);
	        this.state = 342;
	        this.pennies();
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



	gotoaction() {
	    let localctx = new GotoactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, tinymudParser.RULE_gotoaction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        _la = this._input.LA(1);
	        if(!(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (tinymudParser.T__39 - 40)) | (1 << (tinymudParser.T__40 - 40)) | (1 << (tinymudParser.T__41 - 40)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 345;
	        this.direction();
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



	gripeaction() {
	    let localctx = new GripeactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, tinymudParser.RULE_gripeaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        this.match(tinymudParser.T__42);
	        this.state = 348;
	        this.message();
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



	helpaction() {
	    let localctx = new HelpactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, tinymudParser.RULE_helpaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 350;
	        this.match(tinymudParser.T__43);
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



	inventoryaction() {
	    let localctx = new InventoryactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, tinymudParser.RULE_inventoryaction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
	        _la = this._input.LA(1);
	        if(!(_la===tinymudParser.T__44 || _la===tinymudParser.T__45)) {
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



	killaction() {
	    let localctx = new KillactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, tinymudParser.RULE_killaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 354;
	        this.match(tinymudParser.T__46);
	        this.state = 355;
	        this.player();

	        this.state = 356;
	        this.match(tinymudParser.T__2);
	        this.state = 357;
	        this.cost();
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



	lookaction() {
	    let localctx = new LookactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, tinymudParser.RULE_lookaction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 359;
	        _la = this._input.LA(1);
	        if(!(_la===tinymudParser.T__47 || _la===tinymudParser.T__48)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 360;
	        this.object_();
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



	newsaction() {
	    let localctx = new NewsactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, tinymudParser.RULE_newsaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 362;
	        this.match(tinymudParser.T__49);
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



	pageaction() {
	    let localctx = new PageactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, tinymudParser.RULE_pageaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this.match(tinymudParser.T__50);
	        this.state = 365;
	        this.player();

	        this.state = 366;
	        this.match(tinymudParser.T__2);
	        this.state = 367;
	        this.message();
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



	quitaction() {
	    let localctx = new QuitactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, tinymudParser.RULE_quitaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 369;
	        this.match(tinymudParser.T__51);
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



	robaction() {
	    let localctx = new RobactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, tinymudParser.RULE_robaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 371;
	        this.match(tinymudParser.T__52);
	        this.state = 372;
	        this.player();
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



	sayaction() {
	    let localctx = new SayactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, tinymudParser.RULE_sayaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 374;
	        this.match(tinymudParser.T__53);
	        this.state = 375;
	        this.message();
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



	scoreaction() {
	    let localctx = new ScoreactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, tinymudParser.RULE_scoreaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        this.match(tinymudParser.T__54);
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



	whisperaction() {
	    let localctx = new WhisperactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, tinymudParser.RULE_whisperaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this.match(tinymudParser.T__55);
	        this.state = 380;
	        this.player();
	        this.state = 381;
	        this.match(tinymudParser.T__2);
	        this.state = 382;
	        this.message();
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



	whoaction() {
	    let localctx = new WhoactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, tinymudParser.RULE_whoaction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
	        this.match(tinymudParser.T__56);
	        this.state = 386;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tinymudParser.STRING) {
	            this.state = 385;
	            this.player();
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



	object_() {
	    let localctx = new Object_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, tinymudParser.RULE_object_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 388;
	        this.match(tinymudParser.STRING);
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



	player() {
	    let localctx = new PlayerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, tinymudParser.RULE_player);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 390;
	        this.match(tinymudParser.STRING);
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, tinymudParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 392;
	        this.match(tinymudParser.STRING);
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



	description() {
	    let localctx = new DescriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, tinymudParser.RULE_description);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 394;
	        this.match(tinymudParser.STRING);
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



	cost() {
	    let localctx = new CostContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, tinymudParser.RULE_cost);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396;
	        this.match(tinymudParser.NUMBER);
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



	key() {
	    let localctx = new KeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, tinymudParser.RULE_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 398;
	        this.match(tinymudParser.STRING);
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



	password() {
	    let localctx = new PasswordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, tinymudParser.RULE_password);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 400;
	        this.match(tinymudParser.STRING);
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



	message() {
	    let localctx = new MessageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, tinymudParser.RULE_message);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 402;
	        this.match(tinymudParser.STRING);
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



	dir_() {
	    let localctx = new Dir_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, tinymudParser.RULE_dir_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 404;
	        this.match(tinymudParser.STRING);
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
	    this.enterRule(localctx, 116, tinymudParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 406;
	        this.match(tinymudParser.NUMBER);
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



	room() {
	    let localctx = new RoomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, tinymudParser.RULE_room);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 408;
	        this.match(tinymudParser.STRING);
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



	flag() {
	    let localctx = new FlagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, tinymudParser.RULE_flag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 410;
	        this.match(tinymudParser.NUMBER);
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



	pennies() {
	    let localctx = new PenniesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, tinymudParser.RULE_pennies);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 412;
	        this.match(tinymudParser.NUMBER);
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



	direction() {
	    let localctx = new DirectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, tinymudParser.RULE_direction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 414;
	        this.match(tinymudParser.STRING);
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

tinymudParser.EOF = antlr4.Token.EOF;
tinymudParser.T__0 = 1;
tinymudParser.T__1 = 2;
tinymudParser.T__2 = 3;
tinymudParser.T__3 = 4;
tinymudParser.T__4 = 5;
tinymudParser.T__5 = 6;
tinymudParser.T__6 = 7;
tinymudParser.T__7 = 8;
tinymudParser.T__8 = 9;
tinymudParser.T__9 = 10;
tinymudParser.T__10 = 11;
tinymudParser.T__11 = 12;
tinymudParser.T__12 = 13;
tinymudParser.T__13 = 14;
tinymudParser.T__14 = 15;
tinymudParser.T__15 = 16;
tinymudParser.T__16 = 17;
tinymudParser.T__17 = 18;
tinymudParser.T__18 = 19;
tinymudParser.T__19 = 20;
tinymudParser.T__20 = 21;
tinymudParser.T__21 = 22;
tinymudParser.T__22 = 23;
tinymudParser.T__23 = 24;
tinymudParser.T__24 = 25;
tinymudParser.T__25 = 26;
tinymudParser.T__26 = 27;
tinymudParser.T__27 = 28;
tinymudParser.T__28 = 29;
tinymudParser.T__29 = 30;
tinymudParser.T__30 = 31;
tinymudParser.T__31 = 32;
tinymudParser.T__32 = 33;
tinymudParser.T__33 = 34;
tinymudParser.T__34 = 35;
tinymudParser.T__35 = 36;
tinymudParser.T__36 = 37;
tinymudParser.T__37 = 38;
tinymudParser.T__38 = 39;
tinymudParser.T__39 = 40;
tinymudParser.T__40 = 41;
tinymudParser.T__41 = 42;
tinymudParser.T__42 = 43;
tinymudParser.T__43 = 44;
tinymudParser.T__44 = 45;
tinymudParser.T__45 = 46;
tinymudParser.T__46 = 47;
tinymudParser.T__47 = 48;
tinymudParser.T__48 = 49;
tinymudParser.T__49 = 50;
tinymudParser.T__50 = 51;
tinymudParser.T__51 = 52;
tinymudParser.T__52 = 53;
tinymudParser.T__53 = 54;
tinymudParser.T__54 = 55;
tinymudParser.T__55 = 56;
tinymudParser.T__56 = 57;
tinymudParser.STRING = 58;
tinymudParser.NUMBER = 59;
tinymudParser.EOL = 60;
tinymudParser.WS = 61;

tinymudParser.RULE_prog = 0;
tinymudParser.RULE_line = 1;
tinymudParser.RULE_command = 2;
tinymudParser.RULE_bootcommand = 3;
tinymudParser.RULE_chowncommand = 4;
tinymudParser.RULE_createcommand = 5;
tinymudParser.RULE_describecommand = 6;
tinymudParser.RULE_digcommand = 7;
tinymudParser.RULE_dumpcommand = 8;
tinymudParser.RULE_failcommand = 9;
tinymudParser.RULE_findcommand = 10;
tinymudParser.RULE_forcecommand = 11;
tinymudParser.RULE_linkcommand = 12;
tinymudParser.RULE_lockcommand = 13;
tinymudParser.RULE_namecommand = 14;
tinymudParser.RULE_newpassswordcommand = 15;
tinymudParser.RULE_ofailcommand = 16;
tinymudParser.RULE_opencommand = 17;
tinymudParser.RULE_osuccesscommand = 18;
tinymudParser.RULE_passwordcommand = 19;
tinymudParser.RULE_pcreatecommand = 20;
tinymudParser.RULE_setcommand = 21;
tinymudParser.RULE_shutdowncommand = 22;
tinymudParser.RULE_statscommand = 23;
tinymudParser.RULE_successcommand = 24;
tinymudParser.RULE_teleportcommand = 25;
tinymudParser.RULE_toadcommand = 26;
tinymudParser.RULE_unlinkcommand = 27;
tinymudParser.RULE_unlockcommand = 28;
tinymudParser.RULE_wallcommand = 29;
tinymudParser.RULE_action = 30;
tinymudParser.RULE_dropaction = 31;
tinymudParser.RULE_examineaction = 32;
tinymudParser.RULE_getaction = 33;
tinymudParser.RULE_giveaction = 34;
tinymudParser.RULE_gotoaction = 35;
tinymudParser.RULE_gripeaction = 36;
tinymudParser.RULE_helpaction = 37;
tinymudParser.RULE_inventoryaction = 38;
tinymudParser.RULE_killaction = 39;
tinymudParser.RULE_lookaction = 40;
tinymudParser.RULE_newsaction = 41;
tinymudParser.RULE_pageaction = 42;
tinymudParser.RULE_quitaction = 43;
tinymudParser.RULE_robaction = 44;
tinymudParser.RULE_sayaction = 45;
tinymudParser.RULE_scoreaction = 46;
tinymudParser.RULE_whisperaction = 47;
tinymudParser.RULE_whoaction = 48;
tinymudParser.RULE_object_ = 49;
tinymudParser.RULE_player = 50;
tinymudParser.RULE_name = 51;
tinymudParser.RULE_description = 52;
tinymudParser.RULE_cost = 53;
tinymudParser.RULE_key = 54;
tinymudParser.RULE_password = 55;
tinymudParser.RULE_message = 56;
tinymudParser.RULE_dir_ = 57;
tinymudParser.RULE_number = 58;
tinymudParser.RULE_room = 59;
tinymudParser.RULE_flag = 60;
tinymudParser.RULE_pennies = 61;
tinymudParser.RULE_direction = 62;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_prog;
    }

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tinymudParser.EOL);
	    } else {
	        return this.getToken(tinymudParser.EOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitProg(this);
		}
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_line;
    }

	EOL() {
	    return this.getToken(tinymudParser.EOL, 0);
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	action() {
	    return this.getTypedRuleContext(ActionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitLine(this);
		}
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_command;
    }

	bootcommand() {
	    return this.getTypedRuleContext(BootcommandContext,0);
	};

	chowncommand() {
	    return this.getTypedRuleContext(ChowncommandContext,0);
	};

	createcommand() {
	    return this.getTypedRuleContext(CreatecommandContext,0);
	};

	describecommand() {
	    return this.getTypedRuleContext(DescribecommandContext,0);
	};

	digcommand() {
	    return this.getTypedRuleContext(DigcommandContext,0);
	};

	dumpcommand() {
	    return this.getTypedRuleContext(DumpcommandContext,0);
	};

	failcommand() {
	    return this.getTypedRuleContext(FailcommandContext,0);
	};

	findcommand() {
	    return this.getTypedRuleContext(FindcommandContext,0);
	};

	forcecommand() {
	    return this.getTypedRuleContext(ForcecommandContext,0);
	};

	linkcommand() {
	    return this.getTypedRuleContext(LinkcommandContext,0);
	};

	lockcommand() {
	    return this.getTypedRuleContext(LockcommandContext,0);
	};

	namecommand() {
	    return this.getTypedRuleContext(NamecommandContext,0);
	};

	newpassswordcommand() {
	    return this.getTypedRuleContext(NewpassswordcommandContext,0);
	};

	ofailcommand() {
	    return this.getTypedRuleContext(OfailcommandContext,0);
	};

	opencommand() {
	    return this.getTypedRuleContext(OpencommandContext,0);
	};

	osuccesscommand() {
	    return this.getTypedRuleContext(OsuccesscommandContext,0);
	};

	passwordcommand() {
	    return this.getTypedRuleContext(PasswordcommandContext,0);
	};

	pcreatecommand() {
	    return this.getTypedRuleContext(PcreatecommandContext,0);
	};

	setcommand() {
	    return this.getTypedRuleContext(SetcommandContext,0);
	};

	shutdowncommand() {
	    return this.getTypedRuleContext(ShutdowncommandContext,0);
	};

	statscommand() {
	    return this.getTypedRuleContext(StatscommandContext,0);
	};

	successcommand() {
	    return this.getTypedRuleContext(SuccesscommandContext,0);
	};

	teleportcommand() {
	    return this.getTypedRuleContext(TeleportcommandContext,0);
	};

	toadcommand() {
	    return this.getTypedRuleContext(ToadcommandContext,0);
	};

	unlinkcommand() {
	    return this.getTypedRuleContext(UnlinkcommandContext,0);
	};

	unlockcommand() {
	    return this.getTypedRuleContext(UnlockcommandContext,0);
	};

	wallcommand() {
	    return this.getTypedRuleContext(WallcommandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitCommand(this);
		}
	}


}



class BootcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_bootcommand;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterBootcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitBootcommand(this);
		}
	}


}



class ChowncommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_chowncommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterChowncommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitChowncommand(this);
		}
	}


}



class CreatecommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_createcommand;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	cost() {
	    return this.getTypedRuleContext(CostContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterCreatecommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitCreatecommand(this);
		}
	}


}



class DescribecommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_describecommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterDescribecommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitDescribecommand(this);
		}
	}


}



class DigcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_digcommand;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterDigcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitDigcommand(this);
		}
	}


}



class DumpcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_dumpcommand;
    }


	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterDumpcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitDumpcommand(this);
		}
	}


}



class FailcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_failcommand;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterFailcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitFailcommand(this);
		}
	}


}



class FindcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_findcommand;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterFindcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitFindcommand(this);
		}
	}


}



class ForcecommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_forcecommand;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterForcecommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitForcecommand(this);
		}
	}


}



class LinkcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_linkcommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	dir_() {
	    return this.getTypedRuleContext(Dir_Context,0);
	};

	room() {
	    return this.getTypedRuleContext(RoomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterLinkcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitLinkcommand(this);
		}
	}


}



class LockcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_lockcommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterLockcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitLockcommand(this);
		}
	}


}



class NamecommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_namecommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	password() {
	    return this.getTypedRuleContext(PasswordContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterNamecommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitNamecommand(this);
		}
	}


}



class NewpassswordcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_newpassswordcommand;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	password() {
	    return this.getTypedRuleContext(PasswordContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterNewpassswordcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitNewpassswordcommand(this);
		}
	}


}



class OfailcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_ofailcommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterOfailcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitOfailcommand(this);
		}
	}


}



class OpencommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_opencommand;
    }

	dir_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dir_Context);
	    } else {
	        return this.getTypedRuleContext(Dir_Context,i);
	    }
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterOpencommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitOpencommand(this);
		}
	}


}



class OsuccesscommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_osuccesscommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterOsuccesscommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitOsuccesscommand(this);
		}
	}


}



class PasswordcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_passwordcommand;
    }

	password = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PasswordContext);
	    } else {
	        return this.getTypedRuleContext(PasswordContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterPasswordcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitPasswordcommand(this);
		}
	}


}



class PcreatecommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_pcreatecommand;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterPcreatecommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitPcreatecommand(this);
		}
	}


}



class SetcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_setcommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	flag() {
	    return this.getTypedRuleContext(FlagContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterSetcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitSetcommand(this);
		}
	}


}



class ShutdowncommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_shutdowncommand;
    }


	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterShutdowncommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitShutdowncommand(this);
		}
	}


}



class StatscommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_statscommand;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterStatscommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitStatscommand(this);
		}
	}


}



class SuccesscommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_successcommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterSuccesscommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitSuccesscommand(this);
		}
	}


}



class TeleportcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_teleportcommand;
    }

	room() {
	    return this.getTypedRuleContext(RoomContext,0);
	};

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterTeleportcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitTeleportcommand(this);
		}
	}


}



class ToadcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_toadcommand;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterToadcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitToadcommand(this);
		}
	}


}



class UnlinkcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_unlinkcommand;
    }

	dir_() {
	    return this.getTypedRuleContext(Dir_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterUnlinkcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitUnlinkcommand(this);
		}
	}


}



class UnlockcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_unlockcommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterUnlockcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitUnlockcommand(this);
		}
	}


}



class WallcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_wallcommand;
    }

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterWallcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitWallcommand(this);
		}
	}


}



class ActionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_action;
    }

	dropaction() {
	    return this.getTypedRuleContext(DropactionContext,0);
	};

	examineaction() {
	    return this.getTypedRuleContext(ExamineactionContext,0);
	};

	getaction() {
	    return this.getTypedRuleContext(GetactionContext,0);
	};

	giveaction() {
	    return this.getTypedRuleContext(GiveactionContext,0);
	};

	gotoaction() {
	    return this.getTypedRuleContext(GotoactionContext,0);
	};

	gripeaction() {
	    return this.getTypedRuleContext(GripeactionContext,0);
	};

	helpaction() {
	    return this.getTypedRuleContext(HelpactionContext,0);
	};

	inventoryaction() {
	    return this.getTypedRuleContext(InventoryactionContext,0);
	};

	killaction() {
	    return this.getTypedRuleContext(KillactionContext,0);
	};

	lookaction() {
	    return this.getTypedRuleContext(LookactionContext,0);
	};

	newsaction() {
	    return this.getTypedRuleContext(NewsactionContext,0);
	};

	pageaction() {
	    return this.getTypedRuleContext(PageactionContext,0);
	};

	quitaction() {
	    return this.getTypedRuleContext(QuitactionContext,0);
	};

	robaction() {
	    return this.getTypedRuleContext(RobactionContext,0);
	};

	sayaction() {
	    return this.getTypedRuleContext(SayactionContext,0);
	};

	scoreaction() {
	    return this.getTypedRuleContext(ScoreactionContext,0);
	};

	whisperaction() {
	    return this.getTypedRuleContext(WhisperactionContext,0);
	};

	whoaction() {
	    return this.getTypedRuleContext(WhoactionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitAction(this);
		}
	}


}



class DropactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_dropaction;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterDropaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitDropaction(this);
		}
	}


}



class ExamineactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_examineaction;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterExamineaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitExamineaction(this);
		}
	}


}



class GetactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_getaction;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterGetaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitGetaction(this);
		}
	}


}



class GiveactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_giveaction;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	pennies() {
	    return this.getTypedRuleContext(PenniesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterGiveaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitGiveaction(this);
		}
	}


}



class GotoactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_gotoaction;
    }

	direction() {
	    return this.getTypedRuleContext(DirectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterGotoaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitGotoaction(this);
		}
	}


}



class GripeactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_gripeaction;
    }

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterGripeaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitGripeaction(this);
		}
	}


}



class HelpactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_helpaction;
    }


	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterHelpaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitHelpaction(this);
		}
	}


}



class InventoryactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_inventoryaction;
    }


	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterInventoryaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitInventoryaction(this);
		}
	}


}



class KillactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_killaction;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	cost() {
	    return this.getTypedRuleContext(CostContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterKillaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitKillaction(this);
		}
	}


}



class LookactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_lookaction;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterLookaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitLookaction(this);
		}
	}


}



class NewsactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_newsaction;
    }


	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterNewsaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitNewsaction(this);
		}
	}


}



class PageactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_pageaction;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterPageaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitPageaction(this);
		}
	}


}



class QuitactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_quitaction;
    }


	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterQuitaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitQuitaction(this);
		}
	}


}



class RobactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_robaction;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterRobaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitRobaction(this);
		}
	}


}



class SayactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_sayaction;
    }

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterSayaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitSayaction(this);
		}
	}


}



class ScoreactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_scoreaction;
    }


	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterScoreaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitScoreaction(this);
		}
	}


}



class WhisperactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_whisperaction;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterWhisperaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitWhisperaction(this);
		}
	}


}



class WhoactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_whoaction;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterWhoaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitWhoaction(this);
		}
	}


}



class Object_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_object_;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterObject_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitObject_(this);
		}
	}


}



class PlayerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_player;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterPlayer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitPlayer(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_name;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitName(this);
		}
	}


}



class DescriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_description;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterDescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitDescription(this);
		}
	}


}



class CostContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_cost;
    }

	NUMBER() {
	    return this.getToken(tinymudParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterCost(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitCost(this);
		}
	}


}



class KeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_key;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitKey(this);
		}
	}


}



class PasswordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_password;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterPassword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitPassword(this);
		}
	}


}



class MessageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_message;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterMessage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitMessage(this);
		}
	}


}



class Dir_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_dir_;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterDir_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitDir_(this);
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
        this.ruleIndex = tinymudParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(tinymudParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitNumber(this);
		}
	}


}



class RoomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_room;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterRoom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitRoom(this);
		}
	}


}



class FlagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_flag;
    }

	NUMBER() {
	    return this.getToken(tinymudParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterFlag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitFlag(this);
		}
	}


}



class PenniesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_pennies;
    }

	NUMBER() {
	    return this.getToken(tinymudParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterPennies(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitPennies(this);
		}
	}


}



class DirectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_direction;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterDirection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitDirection(this);
		}
	}


}




tinymudParser.ProgContext = ProgContext; 
tinymudParser.LineContext = LineContext; 
tinymudParser.CommandContext = CommandContext; 
tinymudParser.BootcommandContext = BootcommandContext; 
tinymudParser.ChowncommandContext = ChowncommandContext; 
tinymudParser.CreatecommandContext = CreatecommandContext; 
tinymudParser.DescribecommandContext = DescribecommandContext; 
tinymudParser.DigcommandContext = DigcommandContext; 
tinymudParser.DumpcommandContext = DumpcommandContext; 
tinymudParser.FailcommandContext = FailcommandContext; 
tinymudParser.FindcommandContext = FindcommandContext; 
tinymudParser.ForcecommandContext = ForcecommandContext; 
tinymudParser.LinkcommandContext = LinkcommandContext; 
tinymudParser.LockcommandContext = LockcommandContext; 
tinymudParser.NamecommandContext = NamecommandContext; 
tinymudParser.NewpassswordcommandContext = NewpassswordcommandContext; 
tinymudParser.OfailcommandContext = OfailcommandContext; 
tinymudParser.OpencommandContext = OpencommandContext; 
tinymudParser.OsuccesscommandContext = OsuccesscommandContext; 
tinymudParser.PasswordcommandContext = PasswordcommandContext; 
tinymudParser.PcreatecommandContext = PcreatecommandContext; 
tinymudParser.SetcommandContext = SetcommandContext; 
tinymudParser.ShutdowncommandContext = ShutdowncommandContext; 
tinymudParser.StatscommandContext = StatscommandContext; 
tinymudParser.SuccesscommandContext = SuccesscommandContext; 
tinymudParser.TeleportcommandContext = TeleportcommandContext; 
tinymudParser.ToadcommandContext = ToadcommandContext; 
tinymudParser.UnlinkcommandContext = UnlinkcommandContext; 
tinymudParser.UnlockcommandContext = UnlockcommandContext; 
tinymudParser.WallcommandContext = WallcommandContext; 
tinymudParser.ActionContext = ActionContext; 
tinymudParser.DropactionContext = DropactionContext; 
tinymudParser.ExamineactionContext = ExamineactionContext; 
tinymudParser.GetactionContext = GetactionContext; 
tinymudParser.GiveactionContext = GiveactionContext; 
tinymudParser.GotoactionContext = GotoactionContext; 
tinymudParser.GripeactionContext = GripeactionContext; 
tinymudParser.HelpactionContext = HelpactionContext; 
tinymudParser.InventoryactionContext = InventoryactionContext; 
tinymudParser.KillactionContext = KillactionContext; 
tinymudParser.LookactionContext = LookactionContext; 
tinymudParser.NewsactionContext = NewsactionContext; 
tinymudParser.PageactionContext = PageactionContext; 
tinymudParser.QuitactionContext = QuitactionContext; 
tinymudParser.RobactionContext = RobactionContext; 
tinymudParser.SayactionContext = SayactionContext; 
tinymudParser.ScoreactionContext = ScoreactionContext; 
tinymudParser.WhisperactionContext = WhisperactionContext; 
tinymudParser.WhoactionContext = WhoactionContext; 
tinymudParser.Object_Context = Object_Context; 
tinymudParser.PlayerContext = PlayerContext; 
tinymudParser.NameContext = NameContext; 
tinymudParser.DescriptionContext = DescriptionContext; 
tinymudParser.CostContext = CostContext; 
tinymudParser.KeyContext = KeyContext; 
tinymudParser.PasswordContext = PasswordContext; 
tinymudParser.MessageContext = MessageContext; 
tinymudParser.Dir_Context = Dir_Context; 
tinymudParser.NumberContext = NumberContext; 
tinymudParser.RoomContext = RoomContext; 
tinymudParser.FlagContext = FlagContext; 
tinymudParser.PenniesContext = PenniesContext; 
tinymudParser.DirectionContext = DirectionContext; 
