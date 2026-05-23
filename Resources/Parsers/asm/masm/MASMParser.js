// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/asm/masm/MASM.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MASMListener from './MASMListener.js';
const serializedATN = [4,1,274,376,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,1,
0,1,0,5,0,101,8,0,10,0,12,0,104,9,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,
1,1,5,1,116,8,1,10,1,12,1,119,9,1,1,1,1,1,1,1,1,2,1,2,1,2,5,2,127,8,2,10,
2,12,2,130,9,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,156,8,3,1,4,1,4,1,4,1,4,1,4,1,
4,3,4,164,8,4,1,4,1,4,1,4,1,4,1,4,3,4,171,8,4,3,4,173,8,4,1,5,1,5,1,5,1,
5,3,5,179,8,5,1,6,1,6,1,6,3,6,184,8,6,1,7,1,7,1,7,1,7,1,7,3,7,191,8,7,1,
7,1,7,1,7,1,7,1,7,3,7,198,8,7,1,8,1,8,1,9,1,9,1,9,3,9,205,8,9,1,9,1,9,1,
9,1,9,3,9,211,8,9,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,3,11,221,8,11,
1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,3,13,231,8,13,1,13,1,13,1,13,1,14,
1,14,1,14,3,14,239,8,14,1,14,1,14,1,14,3,14,244,8,14,1,15,1,15,1,15,3,15,
249,8,15,1,15,1,15,1,15,1,15,1,15,3,15,256,8,15,1,16,1,16,1,16,3,16,261,
8,16,1,16,1,16,1,16,3,16,266,8,16,1,17,1,17,1,17,1,17,3,17,272,8,17,1,18,
1,18,1,18,1,19,1,19,1,19,1,19,1,19,3,19,282,8,19,1,20,1,20,1,20,3,20,287,
8,20,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,22,3,22,299,8,22,1,23,
1,23,1,23,1,23,1,23,3,23,306,8,23,1,24,1,24,1,24,3,24,311,8,24,1,24,1,24,
1,24,1,24,3,24,317,8,24,1,24,1,24,1,24,3,24,322,8,24,3,24,324,8,24,1,24,
1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,
31,1,32,1,32,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,
1,39,1,39,1,40,1,40,1,41,1,41,1,42,1,42,1,43,1,43,1,44,1,44,1,45,1,45,1,
46,1,46,1,47,1,47,1,48,1,48,1,48,0,0,49,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,
74,76,78,80,82,84,86,88,90,92,94,96,0,18,1,0,266,268,1,0,11,16,1,0,17,40,
1,0,41,43,1,0,45,83,1,0,85,138,1,0,139,144,1,0,145,181,1,0,182,184,1,0,185,
189,1,0,190,191,1,0,192,199,1,0,200,201,1,0,202,204,1,0,206,209,1,0,212,
216,1,0,217,242,1,0,243,263,383,0,102,1,0,0,0,2,109,1,0,0,0,4,123,1,0,0,
0,6,155,1,0,0,0,8,172,1,0,0,0,10,174,1,0,0,0,12,180,1,0,0,0,14,197,1,0,0,
0,16,199,1,0,0,0,18,201,1,0,0,0,20,212,1,0,0,0,22,215,1,0,0,0,24,222,1,0,
0,0,26,227,1,0,0,0,28,235,1,0,0,0,30,245,1,0,0,0,32,257,1,0,0,0,34,267,1,
0,0,0,36,273,1,0,0,0,38,276,1,0,0,0,40,283,1,0,0,0,42,291,1,0,0,0,44,298,
1,0,0,0,46,300,1,0,0,0,48,307,1,0,0,0,50,327,1,0,0,0,52,329,1,0,0,0,54,331,
1,0,0,0,56,333,1,0,0,0,58,335,1,0,0,0,60,337,1,0,0,0,62,339,1,0,0,0,64,341,
1,0,0,0,66,343,1,0,0,0,68,345,1,0,0,0,70,347,1,0,0,0,72,349,1,0,0,0,74,351,
1,0,0,0,76,353,1,0,0,0,78,355,1,0,0,0,80,357,1,0,0,0,82,359,1,0,0,0,84,361,
1,0,0,0,86,363,1,0,0,0,88,365,1,0,0,0,90,367,1,0,0,0,92,369,1,0,0,0,94,371,
1,0,0,0,96,373,1,0,0,0,98,101,3,2,1,0,99,101,3,44,22,0,100,98,1,0,0,0,100,
99,1,0,0,0,101,104,1,0,0,0,102,100,1,0,0,0,102,103,1,0,0,0,103,105,1,0,0,
0,104,102,1,0,0,0,105,106,5,1,0,0,106,107,5,10,0,0,107,108,5,0,0,1,108,1,
1,0,0,0,109,110,5,10,0,0,110,111,5,2,0,0,111,112,5,3,0,0,112,117,5,4,0,0,
113,116,3,6,3,0,114,116,3,4,2,0,115,113,1,0,0,0,115,114,1,0,0,0,116,119,
1,0,0,0,117,115,1,0,0,0,117,118,1,0,0,0,118,120,1,0,0,0,119,117,1,0,0,0,
120,121,5,10,0,0,121,122,5,5,0,0,122,3,1,0,0,0,123,124,5,10,0,0,124,128,
5,263,0,0,125,127,3,6,3,0,126,125,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,
0,128,129,1,0,0,0,129,131,1,0,0,0,130,128,1,0,0,0,131,132,5,208,0,0,132,
133,5,10,0,0,133,134,5,6,0,0,134,5,1,0,0,0,135,156,3,8,4,0,136,156,3,38,
19,0,137,156,3,40,20,0,138,156,3,42,21,0,139,156,3,14,7,0,140,156,3,18,9,
0,141,156,3,22,11,0,142,156,3,24,12,0,143,156,3,26,13,0,144,156,3,28,14,
0,145,156,3,30,15,0,146,156,3,32,16,0,147,156,3,10,5,0,148,156,3,12,6,0,
149,156,3,20,10,0,150,156,3,34,17,0,151,156,3,36,18,0,152,156,3,16,8,0,153,
156,3,46,23,0,154,156,3,44,22,0,155,135,1,0,0,0,155,136,1,0,0,0,155,137,
1,0,0,0,155,138,1,0,0,0,155,139,1,0,0,0,155,140,1,0,0,0,155,141,1,0,0,0,
155,142,1,0,0,0,155,143,1,0,0,0,155,144,1,0,0,0,155,145,1,0,0,0,155,146,
1,0,0,0,155,147,1,0,0,0,155,148,1,0,0,0,155,149,1,0,0,0,155,150,1,0,0,0,
155,151,1,0,0,0,155,152,1,0,0,0,155,153,1,0,0,0,155,154,1,0,0,0,156,7,1,
0,0,0,157,158,3,54,27,0,158,159,3,52,26,0,159,163,5,272,0,0,160,164,3,52,
26,0,161,164,5,267,0,0,162,164,3,48,24,0,163,160,1,0,0,0,163,161,1,0,0,0,
163,162,1,0,0,0,164,173,1,0,0,0,165,166,3,54,27,0,166,167,3,48,24,0,167,
170,5,272,0,0,168,171,3,52,26,0,169,171,5,267,0,0,170,168,1,0,0,0,170,169,
1,0,0,0,171,173,1,0,0,0,172,157,1,0,0,0,172,165,1,0,0,0,173,9,1,0,0,0,174,
178,3,56,28,0,175,179,5,267,0,0,176,179,3,52,26,0,177,179,3,48,24,0,178,
175,1,0,0,0,178,176,1,0,0,0,178,177,1,0,0,0,179,11,1,0,0,0,180,183,3,58,
29,0,181,184,3,52,26,0,182,184,3,48,24,0,183,181,1,0,0,0,183,182,1,0,0,0,
184,13,1,0,0,0,185,186,3,60,30,0,186,187,3,52,26,0,187,190,5,272,0,0,188,
191,3,52,26,0,189,191,3,48,24,0,190,188,1,0,0,0,190,189,1,0,0,0,191,198,
1,0,0,0,192,193,3,60,30,0,193,194,3,48,24,0,194,195,5,272,0,0,195,196,3,
52,26,0,196,198,1,0,0,0,197,185,1,0,0,0,197,192,1,0,0,0,198,15,1,0,0,0,199,
200,3,62,31,0,200,17,1,0,0,0,201,204,3,64,32,0,202,205,3,52,26,0,203,205,
3,48,24,0,204,202,1,0,0,0,204,203,1,0,0,0,205,206,1,0,0,0,206,210,5,272,
0,0,207,211,3,52,26,0,208,211,5,267,0,0,209,211,3,48,24,0,210,207,1,0,0,
0,210,208,1,0,0,0,210,209,1,0,0,0,211,19,1,0,0,0,212,213,3,66,33,0,213,214,
5,10,0,0,214,21,1,0,0,0,215,216,3,68,34,0,216,217,3,52,26,0,217,220,5,272,
0,0,218,221,3,52,26,0,219,221,3,48,24,0,220,218,1,0,0,0,220,219,1,0,0,0,
221,23,1,0,0,0,222,223,3,70,35,0,223,224,3,52,26,0,224,225,5,272,0,0,225,
226,3,48,24,0,226,25,1,0,0,0,227,230,3,72,36,0,228,231,3,52,26,0,229,231,
3,48,24,0,230,228,1,0,0,0,230,229,1,0,0,0,231,232,1,0,0,0,232,233,5,272,
0,0,233,234,3,52,26,0,234,27,1,0,0,0,235,238,3,74,37,0,236,239,3,52,26,0,
237,239,3,48,24,0,238,236,1,0,0,0,238,237,1,0,0,0,239,240,1,0,0,0,240,243,
5,272,0,0,241,244,5,267,0,0,242,244,3,52,26,0,243,241,1,0,0,0,243,242,1,
0,0,0,244,29,1,0,0,0,245,248,3,76,38,0,246,249,3,52,26,0,247,249,3,48,24,
0,248,246,1,0,0,0,248,247,1,0,0,0,249,250,1,0,0,0,250,251,5,272,0,0,251,
252,3,52,26,0,252,255,5,272,0,0,253,256,3,52,26,0,254,256,5,267,0,0,255,
253,1,0,0,0,255,254,1,0,0,0,256,31,1,0,0,0,257,260,3,78,39,0,258,261,3,52,
26,0,259,261,3,48,24,0,260,258,1,0,0,0,260,259,1,0,0,0,261,262,1,0,0,0,262,
265,5,272,0,0,263,266,3,52,26,0,264,266,3,48,24,0,265,263,1,0,0,0,265,264,
1,0,0,0,266,33,1,0,0,0,267,271,3,80,40,0,268,272,3,52,26,0,269,272,3,48,
24,0,270,272,5,267,0,0,271,268,1,0,0,0,271,269,1,0,0,0,271,270,1,0,0,0,272,
35,1,0,0,0,273,274,3,82,41,0,274,275,5,267,0,0,275,37,1,0,0,0,276,277,3,
84,42,0,277,278,3,52,26,0,278,281,5,272,0,0,279,282,3,52,26,0,280,282,5,
267,0,0,281,279,1,0,0,0,281,280,1,0,0,0,282,39,1,0,0,0,283,286,3,86,43,0,
284,287,3,52,26,0,285,287,5,267,0,0,286,284,1,0,0,0,286,285,1,0,0,0,287,
288,1,0,0,0,288,289,5,272,0,0,289,290,3,52,26,0,290,41,1,0,0,0,291,292,3,
88,44,0,292,293,3,62,31,0,293,43,1,0,0,0,294,295,3,90,45,0,295,296,5,10,
0,0,296,299,1,0,0,0,297,299,3,90,45,0,298,294,1,0,0,0,298,297,1,0,0,0,299,
45,1,0,0,0,300,301,5,10,0,0,301,305,3,92,46,0,302,306,3,94,47,0,303,306,
5,270,0,0,304,306,5,267,0,0,305,302,1,0,0,0,305,303,1,0,0,0,305,304,1,0,
0,0,306,47,1,0,0,0,307,310,5,7,0,0,308,311,3,52,26,0,309,311,5,10,0,0,310,
308,1,0,0,0,310,309,1,0,0,0,311,323,1,0,0,0,312,321,5,8,0,0,313,316,3,52,
26,0,314,315,5,8,0,0,315,317,7,0,0,0,316,314,1,0,0,0,316,317,1,0,0,0,317,
322,1,0,0,0,318,322,5,267,0,0,319,322,5,266,0,0,320,322,5,268,0,0,321,313,
1,0,0,0,321,318,1,0,0,0,321,319,1,0,0,0,321,320,1,0,0,0,322,324,1,0,0,0,
323,312,1,0,0,0,323,324,1,0,0,0,324,325,1,0,0,0,325,326,5,9,0,0,326,49,1,
0,0,0,327,328,7,1,0,0,328,51,1,0,0,0,329,330,7,2,0,0,330,53,1,0,0,0,331,
332,7,3,0,0,332,55,1,0,0,0,333,334,5,44,0,0,334,57,1,0,0,0,335,336,7,4,0,
0,336,59,1,0,0,0,337,338,5,84,0,0,338,61,1,0,0,0,339,340,7,5,0,0,340,63,
1,0,0,0,341,342,7,6,0,0,342,65,1,0,0,0,343,344,7,7,0,0,344,67,1,0,0,0,345,
346,7,8,0,0,346,69,1,0,0,0,347,348,7,9,0,0,348,71,1,0,0,0,349,350,7,10,0,
0,350,73,1,0,0,0,351,352,7,11,0,0,352,75,1,0,0,0,353,354,7,12,0,0,354,77,
1,0,0,0,355,356,7,13,0,0,356,79,1,0,0,0,357,358,5,205,0,0,358,81,1,0,0,0,
359,360,7,14,0,0,360,83,1,0,0,0,361,362,5,210,0,0,362,85,1,0,0,0,363,364,
5,211,0,0,364,87,1,0,0,0,365,366,7,15,0,0,366,89,1,0,0,0,367,368,7,16,0,
0,368,91,1,0,0,0,369,370,7,17,0,0,370,93,1,0,0,0,371,372,5,264,0,0,372,95,
1,0,0,0,373,374,5,265,0,0,374,97,1,0,0,0,32,100,102,115,117,128,155,163,
170,172,178,183,190,197,204,210,220,230,238,243,248,255,260,265,271,281,
286,298,305,310,316,321,323];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MASMParser extends antlr4.Parser {

    static grammarFileName = "MASM.g4";
    static literalNames = [ null, "'end'", "'segments'", "'para'", "'public'", 
                            "'ends'", "'endp'", "'['", "'+'", "']'", null, 
                            "'ds'", "'es'", "'cs'", "'ss'", "'gs'", "'fs'", 
                            "'ah'", "'al'", "'ax'", "'bh'", "'bl'", "'bx'", 
                            "'ch'", "'cl'", "'cx'", "'dh'", "'dl'", "'dx'", 
                            "'si'", "'di'", "'sp'", "'bp'", "'eax'", "'ebx'", 
                            "'ecx'", "'edx'", "'esi'", "'edi'", "'esp'", 
                            "'ebp'", "'mov'", "'cmp'", "'test'", "'push'", 
                            "'pop'", "'idiv'", "'inc'", "'dec'", "'neg'", 
                            "'mul'", "'div'", "'imul'", "'not'", "'setpo'", 
                            "'setae'", "'setnle'", "'setc'", "'setno'", 
                            "'setnb'", "'setp'", "'setnge'", "'setl'", "'setge'", 
                            "'setpe'", "'setnl'", "'setnz'", "'setne'", 
                            "'setnc'", "'setbe'", "'setnp'", "'setns'", 
                            "'seto'", "'setna'", "'setnae'", "'setz'", "'setle'", 
                            "'setnbe'", "'sets'", "'sete'", "'setb'", "'seta'", 
                            "'setg'", "'setng'", "'xchg'", "'popad'", "'aaa'", 
                            "'popa'", "'popfd'", "'cwd'", "'lahf'", "'pushad'", 
                            "'pushf'", "'aas'", "'bswap'", "'pushfd'", "'cbw'", 
                            "'cwde'", "'xlat'", "'aam'", "'aad'", "'cdq'", 
                            "'daa'", "'sahf'", "'das'", "'into'", "'iret'", 
                            "'clc'", "'stc'", "'cmc'", "'cld'", "'std'", 
                            "'cli'", "'sti'", "'movsb'", "'movsw'", "'movsd'", 
                            "'lods'", "'lodsb'", "'lodsw'", "'lodsd'", "'stos'", 
                            "'stosb'", "'stosw'", "'sotsd'", "'scas'", "'scasb'", 
                            "'scasw'", "'scasd'", "'cmps'", "'cmpsb'", "'cmpsw'", 
                            "'cmpsd'", "'insb'", "'insw'", "'insd'", "'outsb'", 
                            "'outsw'", "'outsd'", "'adc'", "'add'", "'sub'", 
                            "'cbb'", "'xor'", "'or'", "'jnbe'", "'jnz'", 
                            "'jpo'", "'jz'", "'js'", "'loopnz'", "'jge'", 
                            "'jb'", "'jnb'", "'jo'", "'jp'", "'jno'", "'jnl'", 
                            "'jnae'", "'loopz'", "'jmp'", "'jnp'", "'loop'", 
                            "'jl'", "'jcxz'", "'jae'", "'jnge'", "'ja'", 
                            "'loopne'", "'loope'", "'jg'", "'jnle'", "'je'", 
                            "'jnc'", "'jc'", "'jna'", "'jbe'", "'jle'", 
                            "'jpe'", "'jns'", "'jecxz'", "'jng'", "'movzx'", 
                            "'bsf'", "'bsr'", "'les'", "'lea'", "'lds'", 
                            "'ins'", "'outs'", "'xadd'", "'cmpxchg'", "'shl'", 
                            "'shr'", "'ror'", "'rol'", "'rcl'", "'sal'", 
                            "'rcr'", "'sar'", "'shrd'", "'shld'", "'btr'", 
                            "'bt'", "'btc'", "'call'", "'int'", "'retn'", 
                            "'ret'", "'retf'", "'in'", "'out'", "'rep'", 
                            "'repe'", "'repz'", "'repne'", "'repnz'", "'.alpha'", 
                            "'.const'", "'.cref'", "'.xcref'", "'data'", 
                            "'data?'", "'dosseg'", "'.err'", "'.err1'", 
                            "'.err2'", "'.erre'", "'.errnz'", "'.errdef'", 
                            "'.errndef'", "'.errb'", "'.errnb'", "'.erridn[i]'", 
                            "'.errdif[i]'", "'even'", "'.list'", "'width'", 
                            "'mask'", "'.seq'", "'.xlist'", "'.exit'", "'.model'", 
                            "'byte'", "'sbyte'", "'db'", "'word'", "'sword'", 
                            "'dw'", "'dword'", "'sdword'", "'dd'", "'fword'", 
                            "'df'", "'qword'", "'dq'", "'tbyte'", "'dt'", 
                            "'real4'", "'real8'", "'real'", "'far'", "'near'", 
                            "'proc'", "'?'", "'times'", null, null, null, 
                            null, null, null, "','" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "Identifier", "DS", "ES", "CS", 
                             "SS", "GS", "FS", "AH", "AL", "AX", "BH", "BL", 
                             "BX", "CH", "CL", "CX", "DH", "DL", "DX", "SI", 
                             "DI", "SP", "BP", "EAX", "EBX", "ECX", "EDX", 
                             "ESI", "EDI", "ESP", "EBP", "MOV", "CMP", "TEST", 
                             "PUSH", "POP", "IDIV", "INC", "DEC", "NEG", 
                             "MUL", "DIV", "IMUL", "NOT", "SETPO", "SETAE", 
                             "SETNLE", "SETC", "SETNO", "SETNB", "SETP", 
                             "SETNGE", "SETL", "SETGE", "SETPE", "SETNL", 
                             "SETNZ", "SETNE", "SETNC", "SETBE", "SETNP", 
                             "SETNS", "SETO", "SETNA", "SETNAE", "SETZ", 
                             "SETLE", "SETNBE", "SETS", "SETE", "SETB", 
                             "SETA", "SETG", "SETNG", "XCHG", "POPAD", "AAA", 
                             "POPA", "POPFD", "CWD", "LAHF", "PUSHAD", "PUSHF", 
                             "AAS", "BSWAP", "PUSHFD", "CBW", "CWDE", "XLAT", 
                             "AAM", "AAD", "CDQ", "DAA", "SAHF", "DAS", 
                             "INTO", "IRET", "CLC", "STC", "CMC", "CLD", 
                             "STD", "CLI", "STI", "MOVSB", "MOVSW", "MOVSD", 
                             "LODS", "LODSB", "LODSW", "LODSD", "STOS", 
                             "STOSB", "STOSW", "SOTSD", "SCAS", "SCASB", 
                             "SCASW", "SCASD", "CMPS", "CMPSB", "CMPSW", 
                             "CMPSD", "INSB", "INSW", "INSD", "OUTSB", "OUTSW", 
                             "OUTSD", "ADC", "ADD", "SUB", "CBB", "XOR", 
                             "OR", "JNBE", "JNZ", "JPO", "JZ", "JS", "LOOPNZ", 
                             "JGE", "JB", "JNB", "JO", "JP", "JNO", "JNL", 
                             "JNAE", "LOOPZ", "JMP", "JNP", "LOOP", "JL", 
                             "JCXZ", "JAE", "JNGE", "JA", "LOOPNE", "LOOPE", 
                             "JG", "JNLE", "JE", "JNC", "JC", "JNA", "JBE", 
                             "JLE", "JPE", "JNS", "JECXZ", "JNG", "MOVZX", 
                             "BSF", "BSR", "LES", "LEA", "LDS", "INS", "OUTS", 
                             "XADD", "CMPXCHG", "SHL", "SHR", "ROR", "ROL", 
                             "RCL", "SAL", "RCR", "SAR", "SHRD", "SHLD", 
                             "BTR", "BT", "BTC", "CALL", "INT", "RETN", 
                             "RET", "RETF", "IN", "OUT", "REP", "REPE", 
                             "REPZ", "REPNE", "REPNZ", "ALPHA", "CONST", 
                             "CREF", "XCREF", "DATA", "DATA2", "DOSSEG", 
                             "ERR", "ERR1", "ERR2", "ERRE", "ERRNZ", "ERRDEF", 
                             "ERRNDEF", "ERRB", "ERRNB", "ERRIDN", "ERRDIF", 
                             "EVEN", "LIST", "WIDTH", "MASK", "SEQ", "XLIST", 
                             "EXIT", "MODEL", "BYTE", "SBYTE", "DB", "WORD", 
                             "SWORD", "DW", "DWORD", "SDWORD", "DD", "FWORD", 
                             "DF", "QWORD", "DQ", "TBYTE", "DT", "REAL4", 
                             "REAL8", "REAL", "FAR", "NEAR", "PROC", "QUESTION", 
                             "TIMES", "Hexnum", "Integer", "Octalnum", "FloatingPointLiteral", 
                             "String_", "Etiqueta", "Separator", "WS", "LINE_COMMENT" ];
    static ruleNames = [ "compilationUnit", "segments", "proc", "code", 
                         "binary_exp1", "unuary_exp1", "unuary_exp2", "binary_exp2", 
                         "notarguments", "binary_exp3", "unuary_exp3", "binary_exp4", 
                         "binary_exp5", "binary_exp6", "binary_exp7", "binary_exp8", 
                         "binary_exp9", "unuary_exp4", "unuary_exp5", "binary_exp10", 
                         "binary_exp11", "binary_exp12", "directive_exp1", 
                         "variabledeclaration", "memory", "segmentos", "register_", 
                         "o", "op", "ope", "oper", "opera", "operat", "operato", 
                         "operator_", "l", "x", "s", "sh", "b", "call", 
                         "interruption", "in_", "out", "re", "directives", 
                         "ty", "question", "time" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MASMParser.ruleNames;
        this.literalNames = MASMParser.literalNames;
        this.symbolicNames = MASMParser.symbolicNames;
    }



	compilationUnit() {
	    let localctx = new CompilationUnitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MASMParser.RULE_compilationUnit);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10 || ((((_la - 217)) & ~0x1f) === 0 && ((1 << (_la - 217)) & 67108863) !== 0)) {
	            this.state = 100;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 10:
	                this.state = 98;
	                this.segments();
	                break;
	            case 217:
	            case 218:
	            case 219:
	            case 220:
	            case 221:
	            case 222:
	            case 223:
	            case 224:
	            case 225:
	            case 226:
	            case 227:
	            case 228:
	            case 229:
	            case 230:
	            case 231:
	            case 232:
	            case 233:
	            case 234:
	            case 235:
	            case 236:
	            case 237:
	            case 238:
	            case 239:
	            case 240:
	            case 241:
	            case 242:
	                this.state = 99;
	                this.directive_exp1();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 105;
	        this.match(MASMParser.T__0);
	        this.state = 106;
	        this.match(MASMParser.Identifier);
	        this.state = 107;
	        this.match(MASMParser.EOF);
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



	segments() {
	    let localctx = new SegmentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MASMParser.RULE_segments);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(MASMParser.Identifier);
	        this.state = 110;
	        this.match(MASMParser.T__1);
	        this.state = 111;
	        this.match(MASMParser.T__2);
	        this.state = 112;
	        this.match(MASMParser.T__3);
	        this.state = 117;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 115;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 113;
	                    this.code();
	                    break;

	                case 2:
	                    this.state = 114;
	                    this.proc();
	                    break;

	                } 
	            }
	            this.state = 119;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	        this.state = 120;
	        this.match(MASMParser.Identifier);
	        this.state = 121;
	        this.match(MASMParser.T__4);
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



	proc() {
	    let localctx = new ProcContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MASMParser.RULE_proc);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(MASMParser.Identifier);
	        this.state = 124;
	        this.match(MASMParser.PROC);
	        this.state = 128;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 125;
	                this.code(); 
	            }
	            this.state = 130;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	        this.state = 131;
	        this.match(MASMParser.RET);
	        this.state = 132;
	        this.match(MASMParser.Identifier);
	        this.state = 133;
	        this.match(MASMParser.T__5);
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



	code() {
	    let localctx = new CodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MASMParser.RULE_code);
	    try {
	        this.state = 155;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 41:
	        case 42:
	        case 43:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 135;
	            this.binary_exp1();
	            break;
	        case 210:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 136;
	            this.binary_exp10();
	            break;
	        case 211:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 137;
	            this.binary_exp11();
	            break;
	        case 212:
	        case 213:
	        case 214:
	        case 215:
	        case 216:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 138;
	            this.binary_exp12();
	            break;
	        case 84:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 139;
	            this.binary_exp2();
	            break;
	        case 139:
	        case 140:
	        case 141:
	        case 142:
	        case 143:
	        case 144:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 140;
	            this.binary_exp3();
	            break;
	        case 182:
	        case 183:
	        case 184:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 141;
	            this.binary_exp4();
	            break;
	        case 185:
	        case 186:
	        case 187:
	        case 188:
	        case 189:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 142;
	            this.binary_exp5();
	            break;
	        case 190:
	        case 191:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 143;
	            this.binary_exp6();
	            break;
	        case 192:
	        case 193:
	        case 194:
	        case 195:
	        case 196:
	        case 197:
	        case 198:
	        case 199:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 144;
	            this.binary_exp7();
	            break;
	        case 200:
	        case 201:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 145;
	            this.binary_exp8();
	            break;
	        case 202:
	        case 203:
	        case 204:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 146;
	            this.binary_exp9();
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 147;
	            this.unuary_exp1();
	            break;
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 63:
	        case 64:
	        case 65:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	        case 77:
	        case 78:
	        case 79:
	        case 80:
	        case 81:
	        case 82:
	        case 83:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 148;
	            this.unuary_exp2();
	            break;
	        case 145:
	        case 146:
	        case 147:
	        case 148:
	        case 149:
	        case 150:
	        case 151:
	        case 152:
	        case 153:
	        case 154:
	        case 155:
	        case 156:
	        case 157:
	        case 158:
	        case 159:
	        case 160:
	        case 161:
	        case 162:
	        case 163:
	        case 164:
	        case 165:
	        case 166:
	        case 167:
	        case 168:
	        case 169:
	        case 170:
	        case 171:
	        case 172:
	        case 173:
	        case 174:
	        case 175:
	        case 176:
	        case 177:
	        case 178:
	        case 179:
	        case 180:
	        case 181:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 149;
	            this.unuary_exp3();
	            break;
	        case 205:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 150;
	            this.unuary_exp4();
	            break;
	        case 206:
	        case 207:
	        case 208:
	        case 209:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 151;
	            this.unuary_exp5();
	            break;
	        case 85:
	        case 86:
	        case 87:
	        case 88:
	        case 89:
	        case 90:
	        case 91:
	        case 92:
	        case 93:
	        case 94:
	        case 95:
	        case 96:
	        case 97:
	        case 98:
	        case 99:
	        case 100:
	        case 101:
	        case 102:
	        case 103:
	        case 104:
	        case 105:
	        case 106:
	        case 107:
	        case 108:
	        case 109:
	        case 110:
	        case 111:
	        case 112:
	        case 113:
	        case 114:
	        case 115:
	        case 116:
	        case 117:
	        case 118:
	        case 119:
	        case 120:
	        case 121:
	        case 122:
	        case 123:
	        case 124:
	        case 125:
	        case 126:
	        case 127:
	        case 128:
	        case 129:
	        case 130:
	        case 131:
	        case 132:
	        case 133:
	        case 134:
	        case 135:
	        case 136:
	        case 137:
	        case 138:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 152;
	            this.notarguments();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 153;
	            this.variabledeclaration();
	            break;
	        case 217:
	        case 218:
	        case 219:
	        case 220:
	        case 221:
	        case 222:
	        case 223:
	        case 224:
	        case 225:
	        case 226:
	        case 227:
	        case 228:
	        case 229:
	        case 230:
	        case 231:
	        case 232:
	        case 233:
	        case 234:
	        case 235:
	        case 236:
	        case 237:
	        case 238:
	        case 239:
	        case 240:
	        case 241:
	        case 242:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 154;
	            this.directive_exp1();
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



	binary_exp1() {
	    let localctx = new Binary_exp1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MASMParser.RULE_binary_exp1);
	    try {
	        this.state = 172;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 157;
	            this.o();
	            this.state = 158;
	            this.register_();
	            this.state = 159;
	            this.match(MASMParser.Separator);
	            this.state = 163;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 17:
	            case 18:
	            case 19:
	            case 20:
	            case 21:
	            case 22:
	            case 23:
	            case 24:
	            case 25:
	            case 26:
	            case 27:
	            case 28:
	            case 29:
	            case 30:
	            case 31:
	            case 32:
	            case 33:
	            case 34:
	            case 35:
	            case 36:
	            case 37:
	            case 38:
	            case 39:
	            case 40:
	                this.state = 160;
	                this.register_();
	                break;
	            case 267:
	                this.state = 161;
	                this.match(MASMParser.Integer);
	                break;
	            case 7:
	                this.state = 162;
	                this.memory();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 165;
	            this.o();
	            this.state = 166;
	            this.memory();
	            this.state = 167;
	            this.match(MASMParser.Separator);
	            this.state = 170;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 17:
	            case 18:
	            case 19:
	            case 20:
	            case 21:
	            case 22:
	            case 23:
	            case 24:
	            case 25:
	            case 26:
	            case 27:
	            case 28:
	            case 29:
	            case 30:
	            case 31:
	            case 32:
	            case 33:
	            case 34:
	            case 35:
	            case 36:
	            case 37:
	            case 38:
	            case 39:
	            case 40:
	                this.state = 168;
	                this.register_();
	                break;
	            case 267:
	                this.state = 169;
	                this.match(MASMParser.Integer);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
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



	unuary_exp1() {
	    let localctx = new Unuary_exp1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MASMParser.RULE_unuary_exp1);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.op();
	        this.state = 178;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 267:
	            this.state = 175;
	            this.match(MASMParser.Integer);
	            break;
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.state = 176;
	            this.register_();
	            break;
	        case 7:
	            this.state = 177;
	            this.memory();
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



	unuary_exp2() {
	    let localctx = new Unuary_exp2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MASMParser.RULE_unuary_exp2);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.ope();
	        this.state = 183;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.state = 181;
	            this.register_();
	            break;
	        case 7:
	            this.state = 182;
	            this.memory();
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



	binary_exp2() {
	    let localctx = new Binary_exp2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MASMParser.RULE_binary_exp2);
	    try {
	        this.state = 197;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 185;
	            this.oper();
	            this.state = 186;
	            this.register_();
	            this.state = 187;
	            this.match(MASMParser.Separator);
	            this.state = 190;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 17:
	            case 18:
	            case 19:
	            case 20:
	            case 21:
	            case 22:
	            case 23:
	            case 24:
	            case 25:
	            case 26:
	            case 27:
	            case 28:
	            case 29:
	            case 30:
	            case 31:
	            case 32:
	            case 33:
	            case 34:
	            case 35:
	            case 36:
	            case 37:
	            case 38:
	            case 39:
	            case 40:
	                this.state = 188;
	                this.register_();
	                break;
	            case 7:
	                this.state = 189;
	                this.memory();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 192;
	            this.oper();
	            this.state = 193;
	            this.memory();
	            this.state = 194;
	            this.match(MASMParser.Separator);
	            this.state = 195;
	            this.register_();
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



	notarguments() {
	    let localctx = new NotargumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MASMParser.RULE_notarguments);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.opera();
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



	binary_exp3() {
	    let localctx = new Binary_exp3Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MASMParser.RULE_binary_exp3);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.operat();
	        this.state = 204;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.state = 202;
	            this.register_();
	            break;
	        case 7:
	            this.state = 203;
	            this.memory();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 206;
	        this.match(MASMParser.Separator);
	        this.state = 210;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.state = 207;
	            this.register_();
	            break;
	        case 267:
	            this.state = 208;
	            this.match(MASMParser.Integer);
	            break;
	        case 7:
	            this.state = 209;
	            this.memory();
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



	unuary_exp3() {
	    let localctx = new Unuary_exp3Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MASMParser.RULE_unuary_exp3);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.operato();
	        this.state = 213;
	        this.match(MASMParser.Identifier);
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



	binary_exp4() {
	    let localctx = new Binary_exp4Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MASMParser.RULE_binary_exp4);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.operator_();
	        this.state = 216;
	        this.register_();
	        this.state = 217;
	        this.match(MASMParser.Separator);
	        this.state = 220;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.state = 218;
	            this.register_();
	            break;
	        case 7:
	            this.state = 219;
	            this.memory();
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



	binary_exp5() {
	    let localctx = new Binary_exp5Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, MASMParser.RULE_binary_exp5);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.l();
	        this.state = 223;
	        this.register_();
	        this.state = 224;
	        this.match(MASMParser.Separator);
	        this.state = 225;
	        this.memory();
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



	binary_exp6() {
	    let localctx = new Binary_exp6Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, MASMParser.RULE_binary_exp6);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this.x();
	        this.state = 230;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.state = 228;
	            this.register_();
	            break;
	        case 7:
	            this.state = 229;
	            this.memory();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 232;
	        this.match(MASMParser.Separator);
	        this.state = 233;
	        this.register_();
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



	binary_exp7() {
	    let localctx = new Binary_exp7Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MASMParser.RULE_binary_exp7);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.s();
	        this.state = 238;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.state = 236;
	            this.register_();
	            break;
	        case 7:
	            this.state = 237;
	            this.memory();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 240;
	        this.match(MASMParser.Separator);
	        this.state = 243;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 267:
	            this.state = 241;
	            this.match(MASMParser.Integer);
	            break;
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.state = 242;
	            this.register_();
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



	binary_exp8() {
	    let localctx = new Binary_exp8Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, MASMParser.RULE_binary_exp8);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        this.sh();
	        this.state = 248;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.state = 246;
	            this.register_();
	            break;
	        case 7:
	            this.state = 247;
	            this.memory();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 250;
	        this.match(MASMParser.Separator);
	        this.state = 251;
	        this.register_();
	        this.state = 252;
	        this.match(MASMParser.Separator);
	        this.state = 255;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.state = 253;
	            this.register_();
	            break;
	        case 267:
	            this.state = 254;
	            this.match(MASMParser.Integer);
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



	binary_exp9() {
	    let localctx = new Binary_exp9Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, MASMParser.RULE_binary_exp9);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this.b();
	        this.state = 260;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.state = 258;
	            this.register_();
	            break;
	        case 7:
	            this.state = 259;
	            this.memory();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 262;
	        this.match(MASMParser.Separator);
	        this.state = 265;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.state = 263;
	            this.register_();
	            break;
	        case 7:
	            this.state = 264;
	            this.memory();
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



	unuary_exp4() {
	    let localctx = new Unuary_exp4Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, MASMParser.RULE_unuary_exp4);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this.call();
	        this.state = 271;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.state = 268;
	            this.register_();
	            break;
	        case 7:
	            this.state = 269;
	            this.memory();
	            break;
	        case 267:
	            this.state = 270;
	            this.match(MASMParser.Integer);
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



	unuary_exp5() {
	    let localctx = new Unuary_exp5Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, MASMParser.RULE_unuary_exp5);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.interruption();
	        this.state = 274;
	        this.match(MASMParser.Integer);
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



	binary_exp10() {
	    let localctx = new Binary_exp10Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, MASMParser.RULE_binary_exp10);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.in_();
	        this.state = 277;
	        this.register_();
	        this.state = 278;
	        this.match(MASMParser.Separator);
	        this.state = 281;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.state = 279;
	            this.register_();
	            break;
	        case 267:
	            this.state = 280;
	            this.match(MASMParser.Integer);
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



	binary_exp11() {
	    let localctx = new Binary_exp11Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, MASMParser.RULE_binary_exp11);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.out();
	        this.state = 286;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.state = 284;
	            this.register_();
	            break;
	        case 267:
	            this.state = 285;
	            this.match(MASMParser.Integer);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 288;
	        this.match(MASMParser.Separator);
	        this.state = 289;
	        this.register_();
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



	binary_exp12() {
	    let localctx = new Binary_exp12Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, MASMParser.RULE_binary_exp12);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 291;
	        this.re();
	        this.state = 292;
	        this.opera();
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



	directive_exp1() {
	    let localctx = new Directive_exp1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, MASMParser.RULE_directive_exp1);
	    try {
	        this.state = 298;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 294;
	            this.directives();
	            this.state = 295;
	            this.match(MASMParser.Identifier);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 297;
	            this.directives();
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



	variabledeclaration() {
	    let localctx = new VariabledeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, MASMParser.RULE_variabledeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.match(MASMParser.Identifier);
	        this.state = 301;
	        this.ty();
	        this.state = 305;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 264:
	            this.state = 302;
	            this.question();
	            break;
	        case 270:
	            this.state = 303;
	            this.match(MASMParser.String_);
	            break;
	        case 267:
	            this.state = 304;
	            this.match(MASMParser.Integer);
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



	memory() {
	    let localctx = new MemoryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, MASMParser.RULE_memory);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.match(MASMParser.T__6);
	        this.state = 310;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.state = 308;
	            this.register_();
	            break;
	        case 10:
	            this.state = 309;
	            this.match(MASMParser.Identifier);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 323;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 312;
	            this.match(MASMParser.T__7);
	            this.state = 321;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 17:
	            case 18:
	            case 19:
	            case 20:
	            case 21:
	            case 22:
	            case 23:
	            case 24:
	            case 25:
	            case 26:
	            case 27:
	            case 28:
	            case 29:
	            case 30:
	            case 31:
	            case 32:
	            case 33:
	            case 34:
	            case 35:
	            case 36:
	            case 37:
	            case 38:
	            case 39:
	            case 40:
	                this.state = 313;
	                this.register_();
	                this.state = 316;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===8) {
	                    this.state = 314;
	                    this.match(MASMParser.T__7);
	                    this.state = 315;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 266)) & ~0x1f) === 0 && ((1 << (_la - 266)) & 7) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                }

	                break;
	            case 267:
	                this.state = 318;
	                this.match(MASMParser.Integer);
	                break;
	            case 266:
	                this.state = 319;
	                this.match(MASMParser.Hexnum);
	                break;
	            case 268:
	                this.state = 320;
	                this.match(MASMParser.Octalnum);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	        }

	        this.state = 325;
	        this.match(MASMParser.T__8);
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



	segmentos() {
	    let localctx = new SegmentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, MASMParser.RULE_segmentos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 327;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 129024) !== 0))) {
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



	register_() {
	    let localctx = new Register_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, MASMParser.RULE_register_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 329;
	        _la = this._input.LA(1);
	        if(!(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 16777215) !== 0))) {
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



	o() {
	    let localctx = new OContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, MASMParser.RULE_o);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        _la = this._input.LA(1);
	        if(!(((((_la - 41)) & ~0x1f) === 0 && ((1 << (_la - 41)) & 7) !== 0))) {
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



	op() {
	    let localctx = new OpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, MASMParser.RULE_op);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 333;
	        this.match(MASMParser.PUSH);
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



	ope() {
	    let localctx = new OpeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, MASMParser.RULE_ope);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        _la = this._input.LA(1);
	        if(!(((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 4294967295) !== 0) || ((((_la - 77)) & ~0x1f) === 0 && ((1 << (_la - 77)) & 127) !== 0))) {
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



	oper() {
	    let localctx = new OperContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, MASMParser.RULE_oper);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 337;
	        this.match(MASMParser.XCHG);
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



	opera() {
	    let localctx = new OperaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, MASMParser.RULE_opera);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 339;
	        _la = this._input.LA(1);
	        if(!(((((_la - 85)) & ~0x1f) === 0 && ((1 << (_la - 85)) & 4294967295) !== 0) || ((((_la - 117)) & ~0x1f) === 0 && ((1 << (_la - 117)) & 4194303) !== 0))) {
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



	operat() {
	    let localctx = new OperatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, MASMParser.RULE_operat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 341;
	        _la = this._input.LA(1);
	        if(!(((((_la - 139)) & ~0x1f) === 0 && ((1 << (_la - 139)) & 63) !== 0))) {
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



	operato() {
	    let localctx = new OperatoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, MASMParser.RULE_operato);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 343;
	        _la = this._input.LA(1);
	        if(!(((((_la - 145)) & ~0x1f) === 0 && ((1 << (_la - 145)) & 4294967295) !== 0) || ((((_la - 177)) & ~0x1f) === 0 && ((1 << (_la - 177)) & 31) !== 0))) {
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



	operator_() {
	    let localctx = new Operator_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, MASMParser.RULE_operator_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 345;
	        _la = this._input.LA(1);
	        if(!(((((_la - 182)) & ~0x1f) === 0 && ((1 << (_la - 182)) & 7) !== 0))) {
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



	l() {
	    let localctx = new LContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, MASMParser.RULE_l);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        _la = this._input.LA(1);
	        if(!(((((_la - 185)) & ~0x1f) === 0 && ((1 << (_la - 185)) & 31) !== 0))) {
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



	x() {
	    let localctx = new XContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, MASMParser.RULE_x);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 349;
	        _la = this._input.LA(1);
	        if(!(_la===190 || _la===191)) {
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



	s() {
	    let localctx = new SContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, MASMParser.RULE_s);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 351;
	        _la = this._input.LA(1);
	        if(!(((((_la - 192)) & ~0x1f) === 0 && ((1 << (_la - 192)) & 255) !== 0))) {
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



	sh() {
	    let localctx = new ShContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, MASMParser.RULE_sh);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 353;
	        _la = this._input.LA(1);
	        if(!(_la===200 || _la===201)) {
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



	b() {
	    let localctx = new BContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, MASMParser.RULE_b);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        _la = this._input.LA(1);
	        if(!(((((_la - 202)) & ~0x1f) === 0 && ((1 << (_la - 202)) & 7) !== 0))) {
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



	call() {
	    let localctx = new CallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, MASMParser.RULE_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 357;
	        this.match(MASMParser.CALL);
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



	interruption() {
	    let localctx = new InterruptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, MASMParser.RULE_interruption);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 359;
	        _la = this._input.LA(1);
	        if(!(((((_la - 206)) & ~0x1f) === 0 && ((1 << (_la - 206)) & 15) !== 0))) {
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



	in_() {
	    let localctx = new In_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, MASMParser.RULE_in_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 361;
	        this.match(MASMParser.IN);
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



	out() {
	    let localctx = new OutContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, MASMParser.RULE_out);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 363;
	        this.match(MASMParser.OUT);
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



	re() {
	    let localctx = new ReContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, MASMParser.RULE_re);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 365;
	        _la = this._input.LA(1);
	        if(!(((((_la - 212)) & ~0x1f) === 0 && ((1 << (_la - 212)) & 31) !== 0))) {
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



	directives() {
	    let localctx = new DirectivesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, MASMParser.RULE_directives);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 367;
	        _la = this._input.LA(1);
	        if(!(((((_la - 217)) & ~0x1f) === 0 && ((1 << (_la - 217)) & 67108863) !== 0))) {
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



	ty() {
	    let localctx = new TyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, MASMParser.RULE_ty);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 369;
	        _la = this._input.LA(1);
	        if(!(((((_la - 243)) & ~0x1f) === 0 && ((1 << (_la - 243)) & 2097151) !== 0))) {
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



	question() {
	    let localctx = new QuestionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, MASMParser.RULE_question);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 371;
	        this.match(MASMParser.QUESTION);
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



	time() {
	    let localctx = new TimeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, MASMParser.RULE_time);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        this.match(MASMParser.TIMES);
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

MASMParser.EOF = antlr4.Token.EOF;
MASMParser.T__0 = 1;
MASMParser.T__1 = 2;
MASMParser.T__2 = 3;
MASMParser.T__3 = 4;
MASMParser.T__4 = 5;
MASMParser.T__5 = 6;
MASMParser.T__6 = 7;
MASMParser.T__7 = 8;
MASMParser.T__8 = 9;
MASMParser.Identifier = 10;
MASMParser.DS = 11;
MASMParser.ES = 12;
MASMParser.CS = 13;
MASMParser.SS = 14;
MASMParser.GS = 15;
MASMParser.FS = 16;
MASMParser.AH = 17;
MASMParser.AL = 18;
MASMParser.AX = 19;
MASMParser.BH = 20;
MASMParser.BL = 21;
MASMParser.BX = 22;
MASMParser.CH = 23;
MASMParser.CL = 24;
MASMParser.CX = 25;
MASMParser.DH = 26;
MASMParser.DL = 27;
MASMParser.DX = 28;
MASMParser.SI = 29;
MASMParser.DI = 30;
MASMParser.SP = 31;
MASMParser.BP = 32;
MASMParser.EAX = 33;
MASMParser.EBX = 34;
MASMParser.ECX = 35;
MASMParser.EDX = 36;
MASMParser.ESI = 37;
MASMParser.EDI = 38;
MASMParser.ESP = 39;
MASMParser.EBP = 40;
MASMParser.MOV = 41;
MASMParser.CMP = 42;
MASMParser.TEST = 43;
MASMParser.PUSH = 44;
MASMParser.POP = 45;
MASMParser.IDIV = 46;
MASMParser.INC = 47;
MASMParser.DEC = 48;
MASMParser.NEG = 49;
MASMParser.MUL = 50;
MASMParser.DIV = 51;
MASMParser.IMUL = 52;
MASMParser.NOT = 53;
MASMParser.SETPO = 54;
MASMParser.SETAE = 55;
MASMParser.SETNLE = 56;
MASMParser.SETC = 57;
MASMParser.SETNO = 58;
MASMParser.SETNB = 59;
MASMParser.SETP = 60;
MASMParser.SETNGE = 61;
MASMParser.SETL = 62;
MASMParser.SETGE = 63;
MASMParser.SETPE = 64;
MASMParser.SETNL = 65;
MASMParser.SETNZ = 66;
MASMParser.SETNE = 67;
MASMParser.SETNC = 68;
MASMParser.SETBE = 69;
MASMParser.SETNP = 70;
MASMParser.SETNS = 71;
MASMParser.SETO = 72;
MASMParser.SETNA = 73;
MASMParser.SETNAE = 74;
MASMParser.SETZ = 75;
MASMParser.SETLE = 76;
MASMParser.SETNBE = 77;
MASMParser.SETS = 78;
MASMParser.SETE = 79;
MASMParser.SETB = 80;
MASMParser.SETA = 81;
MASMParser.SETG = 82;
MASMParser.SETNG = 83;
MASMParser.XCHG = 84;
MASMParser.POPAD = 85;
MASMParser.AAA = 86;
MASMParser.POPA = 87;
MASMParser.POPFD = 88;
MASMParser.CWD = 89;
MASMParser.LAHF = 90;
MASMParser.PUSHAD = 91;
MASMParser.PUSHF = 92;
MASMParser.AAS = 93;
MASMParser.BSWAP = 94;
MASMParser.PUSHFD = 95;
MASMParser.CBW = 96;
MASMParser.CWDE = 97;
MASMParser.XLAT = 98;
MASMParser.AAM = 99;
MASMParser.AAD = 100;
MASMParser.CDQ = 101;
MASMParser.DAA = 102;
MASMParser.SAHF = 103;
MASMParser.DAS = 104;
MASMParser.INTO = 105;
MASMParser.IRET = 106;
MASMParser.CLC = 107;
MASMParser.STC = 108;
MASMParser.CMC = 109;
MASMParser.CLD = 110;
MASMParser.STD = 111;
MASMParser.CLI = 112;
MASMParser.STI = 113;
MASMParser.MOVSB = 114;
MASMParser.MOVSW = 115;
MASMParser.MOVSD = 116;
MASMParser.LODS = 117;
MASMParser.LODSB = 118;
MASMParser.LODSW = 119;
MASMParser.LODSD = 120;
MASMParser.STOS = 121;
MASMParser.STOSB = 122;
MASMParser.STOSW = 123;
MASMParser.SOTSD = 124;
MASMParser.SCAS = 125;
MASMParser.SCASB = 126;
MASMParser.SCASW = 127;
MASMParser.SCASD = 128;
MASMParser.CMPS = 129;
MASMParser.CMPSB = 130;
MASMParser.CMPSW = 131;
MASMParser.CMPSD = 132;
MASMParser.INSB = 133;
MASMParser.INSW = 134;
MASMParser.INSD = 135;
MASMParser.OUTSB = 136;
MASMParser.OUTSW = 137;
MASMParser.OUTSD = 138;
MASMParser.ADC = 139;
MASMParser.ADD = 140;
MASMParser.SUB = 141;
MASMParser.CBB = 142;
MASMParser.XOR = 143;
MASMParser.OR = 144;
MASMParser.JNBE = 145;
MASMParser.JNZ = 146;
MASMParser.JPO = 147;
MASMParser.JZ = 148;
MASMParser.JS = 149;
MASMParser.LOOPNZ = 150;
MASMParser.JGE = 151;
MASMParser.JB = 152;
MASMParser.JNB = 153;
MASMParser.JO = 154;
MASMParser.JP = 155;
MASMParser.JNO = 156;
MASMParser.JNL = 157;
MASMParser.JNAE = 158;
MASMParser.LOOPZ = 159;
MASMParser.JMP = 160;
MASMParser.JNP = 161;
MASMParser.LOOP = 162;
MASMParser.JL = 163;
MASMParser.JCXZ = 164;
MASMParser.JAE = 165;
MASMParser.JNGE = 166;
MASMParser.JA = 167;
MASMParser.LOOPNE = 168;
MASMParser.LOOPE = 169;
MASMParser.JG = 170;
MASMParser.JNLE = 171;
MASMParser.JE = 172;
MASMParser.JNC = 173;
MASMParser.JC = 174;
MASMParser.JNA = 175;
MASMParser.JBE = 176;
MASMParser.JLE = 177;
MASMParser.JPE = 178;
MASMParser.JNS = 179;
MASMParser.JECXZ = 180;
MASMParser.JNG = 181;
MASMParser.MOVZX = 182;
MASMParser.BSF = 183;
MASMParser.BSR = 184;
MASMParser.LES = 185;
MASMParser.LEA = 186;
MASMParser.LDS = 187;
MASMParser.INS = 188;
MASMParser.OUTS = 189;
MASMParser.XADD = 190;
MASMParser.CMPXCHG = 191;
MASMParser.SHL = 192;
MASMParser.SHR = 193;
MASMParser.ROR = 194;
MASMParser.ROL = 195;
MASMParser.RCL = 196;
MASMParser.SAL = 197;
MASMParser.RCR = 198;
MASMParser.SAR = 199;
MASMParser.SHRD = 200;
MASMParser.SHLD = 201;
MASMParser.BTR = 202;
MASMParser.BT = 203;
MASMParser.BTC = 204;
MASMParser.CALL = 205;
MASMParser.INT = 206;
MASMParser.RETN = 207;
MASMParser.RET = 208;
MASMParser.RETF = 209;
MASMParser.IN = 210;
MASMParser.OUT = 211;
MASMParser.REP = 212;
MASMParser.REPE = 213;
MASMParser.REPZ = 214;
MASMParser.REPNE = 215;
MASMParser.REPNZ = 216;
MASMParser.ALPHA = 217;
MASMParser.CONST = 218;
MASMParser.CREF = 219;
MASMParser.XCREF = 220;
MASMParser.DATA = 221;
MASMParser.DATA2 = 222;
MASMParser.DOSSEG = 223;
MASMParser.ERR = 224;
MASMParser.ERR1 = 225;
MASMParser.ERR2 = 226;
MASMParser.ERRE = 227;
MASMParser.ERRNZ = 228;
MASMParser.ERRDEF = 229;
MASMParser.ERRNDEF = 230;
MASMParser.ERRB = 231;
MASMParser.ERRNB = 232;
MASMParser.ERRIDN = 233;
MASMParser.ERRDIF = 234;
MASMParser.EVEN = 235;
MASMParser.LIST = 236;
MASMParser.WIDTH = 237;
MASMParser.MASK = 238;
MASMParser.SEQ = 239;
MASMParser.XLIST = 240;
MASMParser.EXIT = 241;
MASMParser.MODEL = 242;
MASMParser.BYTE = 243;
MASMParser.SBYTE = 244;
MASMParser.DB = 245;
MASMParser.WORD = 246;
MASMParser.SWORD = 247;
MASMParser.DW = 248;
MASMParser.DWORD = 249;
MASMParser.SDWORD = 250;
MASMParser.DD = 251;
MASMParser.FWORD = 252;
MASMParser.DF = 253;
MASMParser.QWORD = 254;
MASMParser.DQ = 255;
MASMParser.TBYTE = 256;
MASMParser.DT = 257;
MASMParser.REAL4 = 258;
MASMParser.REAL8 = 259;
MASMParser.REAL = 260;
MASMParser.FAR = 261;
MASMParser.NEAR = 262;
MASMParser.PROC = 263;
MASMParser.QUESTION = 264;
MASMParser.TIMES = 265;
MASMParser.Hexnum = 266;
MASMParser.Integer = 267;
MASMParser.Octalnum = 268;
MASMParser.FloatingPointLiteral = 269;
MASMParser.String_ = 270;
MASMParser.Etiqueta = 271;
MASMParser.Separator = 272;
MASMParser.WS = 273;
MASMParser.LINE_COMMENT = 274;

MASMParser.RULE_compilationUnit = 0;
MASMParser.RULE_segments = 1;
MASMParser.RULE_proc = 2;
MASMParser.RULE_code = 3;
MASMParser.RULE_binary_exp1 = 4;
MASMParser.RULE_unuary_exp1 = 5;
MASMParser.RULE_unuary_exp2 = 6;
MASMParser.RULE_binary_exp2 = 7;
MASMParser.RULE_notarguments = 8;
MASMParser.RULE_binary_exp3 = 9;
MASMParser.RULE_unuary_exp3 = 10;
MASMParser.RULE_binary_exp4 = 11;
MASMParser.RULE_binary_exp5 = 12;
MASMParser.RULE_binary_exp6 = 13;
MASMParser.RULE_binary_exp7 = 14;
MASMParser.RULE_binary_exp8 = 15;
MASMParser.RULE_binary_exp9 = 16;
MASMParser.RULE_unuary_exp4 = 17;
MASMParser.RULE_unuary_exp5 = 18;
MASMParser.RULE_binary_exp10 = 19;
MASMParser.RULE_binary_exp11 = 20;
MASMParser.RULE_binary_exp12 = 21;
MASMParser.RULE_directive_exp1 = 22;
MASMParser.RULE_variabledeclaration = 23;
MASMParser.RULE_memory = 24;
MASMParser.RULE_segmentos = 25;
MASMParser.RULE_register_ = 26;
MASMParser.RULE_o = 27;
MASMParser.RULE_op = 28;
MASMParser.RULE_ope = 29;
MASMParser.RULE_oper = 30;
MASMParser.RULE_opera = 31;
MASMParser.RULE_operat = 32;
MASMParser.RULE_operato = 33;
MASMParser.RULE_operator_ = 34;
MASMParser.RULE_l = 35;
MASMParser.RULE_x = 36;
MASMParser.RULE_s = 37;
MASMParser.RULE_sh = 38;
MASMParser.RULE_b = 39;
MASMParser.RULE_call = 40;
MASMParser.RULE_interruption = 41;
MASMParser.RULE_in_ = 42;
MASMParser.RULE_out = 43;
MASMParser.RULE_re = 44;
MASMParser.RULE_directives = 45;
MASMParser.RULE_ty = 46;
MASMParser.RULE_question = 47;
MASMParser.RULE_time = 48;

class CompilationUnitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_compilationUnit;
    }

	Identifier() {
	    return this.getToken(MASMParser.Identifier, 0);
	};

	EOF() {
	    return this.getToken(MASMParser.EOF, 0);
	};

	segments = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SegmentsContext);
	    } else {
	        return this.getTypedRuleContext(SegmentsContext,i);
	    }
	};

	directive_exp1 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Directive_exp1Context);
	    } else {
	        return this.getTypedRuleContext(Directive_exp1Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterCompilationUnit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitCompilationUnit(this);
		}
	}


}



class SegmentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_segments;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MASMParser.Identifier);
	    } else {
	        return this.getToken(MASMParser.Identifier, i);
	    }
	};


	code = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CodeContext);
	    } else {
	        return this.getTypedRuleContext(CodeContext,i);
	    }
	};

	proc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProcContext);
	    } else {
	        return this.getTypedRuleContext(ProcContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterSegments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitSegments(this);
		}
	}


}



class ProcContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_proc;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MASMParser.Identifier);
	    } else {
	        return this.getToken(MASMParser.Identifier, i);
	    }
	};


	PROC() {
	    return this.getToken(MASMParser.PROC, 0);
	};

	RET() {
	    return this.getToken(MASMParser.RET, 0);
	};

	code = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CodeContext);
	    } else {
	        return this.getTypedRuleContext(CodeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterProc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitProc(this);
		}
	}


}



class CodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_code;
    }

	binary_exp1() {
	    return this.getTypedRuleContext(Binary_exp1Context,0);
	};

	binary_exp10() {
	    return this.getTypedRuleContext(Binary_exp10Context,0);
	};

	binary_exp11() {
	    return this.getTypedRuleContext(Binary_exp11Context,0);
	};

	binary_exp12() {
	    return this.getTypedRuleContext(Binary_exp12Context,0);
	};

	binary_exp2() {
	    return this.getTypedRuleContext(Binary_exp2Context,0);
	};

	binary_exp3() {
	    return this.getTypedRuleContext(Binary_exp3Context,0);
	};

	binary_exp4() {
	    return this.getTypedRuleContext(Binary_exp4Context,0);
	};

	binary_exp5() {
	    return this.getTypedRuleContext(Binary_exp5Context,0);
	};

	binary_exp6() {
	    return this.getTypedRuleContext(Binary_exp6Context,0);
	};

	binary_exp7() {
	    return this.getTypedRuleContext(Binary_exp7Context,0);
	};

	binary_exp8() {
	    return this.getTypedRuleContext(Binary_exp8Context,0);
	};

	binary_exp9() {
	    return this.getTypedRuleContext(Binary_exp9Context,0);
	};

	unuary_exp1() {
	    return this.getTypedRuleContext(Unuary_exp1Context,0);
	};

	unuary_exp2() {
	    return this.getTypedRuleContext(Unuary_exp2Context,0);
	};

	unuary_exp3() {
	    return this.getTypedRuleContext(Unuary_exp3Context,0);
	};

	unuary_exp4() {
	    return this.getTypedRuleContext(Unuary_exp4Context,0);
	};

	unuary_exp5() {
	    return this.getTypedRuleContext(Unuary_exp5Context,0);
	};

	notarguments() {
	    return this.getTypedRuleContext(NotargumentsContext,0);
	};

	variabledeclaration() {
	    return this.getTypedRuleContext(VariabledeclarationContext,0);
	};

	directive_exp1() {
	    return this.getTypedRuleContext(Directive_exp1Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterCode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitCode(this);
		}
	}


}



class Binary_exp1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_binary_exp1;
    }

	o() {
	    return this.getTypedRuleContext(OContext,0);
	};

	register_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Register_Context);
	    } else {
	        return this.getTypedRuleContext(Register_Context,i);
	    }
	};

	Separator() {
	    return this.getToken(MASMParser.Separator, 0);
	};

	Integer() {
	    return this.getToken(MASMParser.Integer, 0);
	};

	memory() {
	    return this.getTypedRuleContext(MemoryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterBinary_exp1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitBinary_exp1(this);
		}
	}


}



class Unuary_exp1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_unuary_exp1;
    }

	op() {
	    return this.getTypedRuleContext(OpContext,0);
	};

	Integer() {
	    return this.getToken(MASMParser.Integer, 0);
	};

	register_() {
	    return this.getTypedRuleContext(Register_Context,0);
	};

	memory() {
	    return this.getTypedRuleContext(MemoryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterUnuary_exp1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitUnuary_exp1(this);
		}
	}


}



class Unuary_exp2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_unuary_exp2;
    }

	ope() {
	    return this.getTypedRuleContext(OpeContext,0);
	};

	register_() {
	    return this.getTypedRuleContext(Register_Context,0);
	};

	memory() {
	    return this.getTypedRuleContext(MemoryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterUnuary_exp2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitUnuary_exp2(this);
		}
	}


}



class Binary_exp2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_binary_exp2;
    }

	oper() {
	    return this.getTypedRuleContext(OperContext,0);
	};

	register_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Register_Context);
	    } else {
	        return this.getTypedRuleContext(Register_Context,i);
	    }
	};

	Separator() {
	    return this.getToken(MASMParser.Separator, 0);
	};

	memory() {
	    return this.getTypedRuleContext(MemoryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterBinary_exp2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitBinary_exp2(this);
		}
	}


}



class NotargumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_notarguments;
    }

	opera() {
	    return this.getTypedRuleContext(OperaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterNotarguments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitNotarguments(this);
		}
	}


}



class Binary_exp3Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_binary_exp3;
    }

	operat() {
	    return this.getTypedRuleContext(OperatContext,0);
	};

	Separator() {
	    return this.getToken(MASMParser.Separator, 0);
	};

	register_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Register_Context);
	    } else {
	        return this.getTypedRuleContext(Register_Context,i);
	    }
	};

	memory = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MemoryContext);
	    } else {
	        return this.getTypedRuleContext(MemoryContext,i);
	    }
	};

	Integer() {
	    return this.getToken(MASMParser.Integer, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterBinary_exp3(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitBinary_exp3(this);
		}
	}


}



class Unuary_exp3Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_unuary_exp3;
    }

	operato() {
	    return this.getTypedRuleContext(OperatoContext,0);
	};

	Identifier() {
	    return this.getToken(MASMParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterUnuary_exp3(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitUnuary_exp3(this);
		}
	}


}



class Binary_exp4Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_binary_exp4;
    }

	operator_() {
	    return this.getTypedRuleContext(Operator_Context,0);
	};

	register_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Register_Context);
	    } else {
	        return this.getTypedRuleContext(Register_Context,i);
	    }
	};

	Separator() {
	    return this.getToken(MASMParser.Separator, 0);
	};

	memory() {
	    return this.getTypedRuleContext(MemoryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterBinary_exp4(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitBinary_exp4(this);
		}
	}


}



class Binary_exp5Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_binary_exp5;
    }

	l() {
	    return this.getTypedRuleContext(LContext,0);
	};

	register_() {
	    return this.getTypedRuleContext(Register_Context,0);
	};

	Separator() {
	    return this.getToken(MASMParser.Separator, 0);
	};

	memory() {
	    return this.getTypedRuleContext(MemoryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterBinary_exp5(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitBinary_exp5(this);
		}
	}


}



class Binary_exp6Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_binary_exp6;
    }

	x() {
	    return this.getTypedRuleContext(XContext,0);
	};

	Separator() {
	    return this.getToken(MASMParser.Separator, 0);
	};

	register_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Register_Context);
	    } else {
	        return this.getTypedRuleContext(Register_Context,i);
	    }
	};

	memory() {
	    return this.getTypedRuleContext(MemoryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterBinary_exp6(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitBinary_exp6(this);
		}
	}


}



class Binary_exp7Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_binary_exp7;
    }

	s() {
	    return this.getTypedRuleContext(SContext,0);
	};

	Separator() {
	    return this.getToken(MASMParser.Separator, 0);
	};

	register_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Register_Context);
	    } else {
	        return this.getTypedRuleContext(Register_Context,i);
	    }
	};

	memory() {
	    return this.getTypedRuleContext(MemoryContext,0);
	};

	Integer() {
	    return this.getToken(MASMParser.Integer, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterBinary_exp7(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitBinary_exp7(this);
		}
	}


}



class Binary_exp8Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_binary_exp8;
    }

	sh() {
	    return this.getTypedRuleContext(ShContext,0);
	};

	Separator = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MASMParser.Separator);
	    } else {
	        return this.getToken(MASMParser.Separator, i);
	    }
	};


	register_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Register_Context);
	    } else {
	        return this.getTypedRuleContext(Register_Context,i);
	    }
	};

	memory() {
	    return this.getTypedRuleContext(MemoryContext,0);
	};

	Integer() {
	    return this.getToken(MASMParser.Integer, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterBinary_exp8(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitBinary_exp8(this);
		}
	}


}



class Binary_exp9Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_binary_exp9;
    }

	b() {
	    return this.getTypedRuleContext(BContext,0);
	};

	Separator() {
	    return this.getToken(MASMParser.Separator, 0);
	};

	register_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Register_Context);
	    } else {
	        return this.getTypedRuleContext(Register_Context,i);
	    }
	};

	memory = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MemoryContext);
	    } else {
	        return this.getTypedRuleContext(MemoryContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterBinary_exp9(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitBinary_exp9(this);
		}
	}


}



class Unuary_exp4Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_unuary_exp4;
    }

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	register_() {
	    return this.getTypedRuleContext(Register_Context,0);
	};

	memory() {
	    return this.getTypedRuleContext(MemoryContext,0);
	};

	Integer() {
	    return this.getToken(MASMParser.Integer, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterUnuary_exp4(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitUnuary_exp4(this);
		}
	}


}



class Unuary_exp5Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_unuary_exp5;
    }

	interruption() {
	    return this.getTypedRuleContext(InterruptionContext,0);
	};

	Integer() {
	    return this.getToken(MASMParser.Integer, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterUnuary_exp5(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitUnuary_exp5(this);
		}
	}


}



class Binary_exp10Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_binary_exp10;
    }

	in_() {
	    return this.getTypedRuleContext(In_Context,0);
	};

	register_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Register_Context);
	    } else {
	        return this.getTypedRuleContext(Register_Context,i);
	    }
	};

	Separator() {
	    return this.getToken(MASMParser.Separator, 0);
	};

	Integer() {
	    return this.getToken(MASMParser.Integer, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterBinary_exp10(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitBinary_exp10(this);
		}
	}


}



class Binary_exp11Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_binary_exp11;
    }

	out() {
	    return this.getTypedRuleContext(OutContext,0);
	};

	Separator() {
	    return this.getToken(MASMParser.Separator, 0);
	};

	register_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Register_Context);
	    } else {
	        return this.getTypedRuleContext(Register_Context,i);
	    }
	};

	Integer() {
	    return this.getToken(MASMParser.Integer, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterBinary_exp11(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitBinary_exp11(this);
		}
	}


}



class Binary_exp12Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_binary_exp12;
    }

	re() {
	    return this.getTypedRuleContext(ReContext,0);
	};

	opera() {
	    return this.getTypedRuleContext(OperaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterBinary_exp12(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitBinary_exp12(this);
		}
	}


}



class Directive_exp1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_directive_exp1;
    }

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	Identifier() {
	    return this.getToken(MASMParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterDirective_exp1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitDirective_exp1(this);
		}
	}


}



class VariabledeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_variabledeclaration;
    }

	Identifier() {
	    return this.getToken(MASMParser.Identifier, 0);
	};

	ty() {
	    return this.getTypedRuleContext(TyContext,0);
	};

	question() {
	    return this.getTypedRuleContext(QuestionContext,0);
	};

	String_() {
	    return this.getToken(MASMParser.String_, 0);
	};

	Integer() {
	    return this.getToken(MASMParser.Integer, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterVariabledeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitVariabledeclaration(this);
		}
	}


}



class MemoryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_memory;
    }

	register_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Register_Context);
	    } else {
	        return this.getTypedRuleContext(Register_Context,i);
	    }
	};

	Identifier() {
	    return this.getToken(MASMParser.Identifier, 0);
	};

	Integer() {
	    return this.getToken(MASMParser.Integer, 0);
	};

	Hexnum() {
	    return this.getToken(MASMParser.Hexnum, 0);
	};

	Octalnum() {
	    return this.getToken(MASMParser.Octalnum, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterMemory(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitMemory(this);
		}
	}


}



class SegmentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_segmentos;
    }

	DS() {
	    return this.getToken(MASMParser.DS, 0);
	};

	ES() {
	    return this.getToken(MASMParser.ES, 0);
	};

	CS() {
	    return this.getToken(MASMParser.CS, 0);
	};

	SS() {
	    return this.getToken(MASMParser.SS, 0);
	};

	GS() {
	    return this.getToken(MASMParser.GS, 0);
	};

	FS() {
	    return this.getToken(MASMParser.FS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterSegmentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitSegmentos(this);
		}
	}


}



class Register_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_register_;
    }

	AH() {
	    return this.getToken(MASMParser.AH, 0);
	};

	AL() {
	    return this.getToken(MASMParser.AL, 0);
	};

	AX() {
	    return this.getToken(MASMParser.AX, 0);
	};

	BH() {
	    return this.getToken(MASMParser.BH, 0);
	};

	BL() {
	    return this.getToken(MASMParser.BL, 0);
	};

	BX() {
	    return this.getToken(MASMParser.BX, 0);
	};

	CH() {
	    return this.getToken(MASMParser.CH, 0);
	};

	CL() {
	    return this.getToken(MASMParser.CL, 0);
	};

	CX() {
	    return this.getToken(MASMParser.CX, 0);
	};

	DH() {
	    return this.getToken(MASMParser.DH, 0);
	};

	DL() {
	    return this.getToken(MASMParser.DL, 0);
	};

	DX() {
	    return this.getToken(MASMParser.DX, 0);
	};

	SI() {
	    return this.getToken(MASMParser.SI, 0);
	};

	DI() {
	    return this.getToken(MASMParser.DI, 0);
	};

	SP() {
	    return this.getToken(MASMParser.SP, 0);
	};

	BP() {
	    return this.getToken(MASMParser.BP, 0);
	};

	EAX() {
	    return this.getToken(MASMParser.EAX, 0);
	};

	EBX() {
	    return this.getToken(MASMParser.EBX, 0);
	};

	ECX() {
	    return this.getToken(MASMParser.ECX, 0);
	};

	EDX() {
	    return this.getToken(MASMParser.EDX, 0);
	};

	ESI() {
	    return this.getToken(MASMParser.ESI, 0);
	};

	EDI() {
	    return this.getToken(MASMParser.EDI, 0);
	};

	ESP() {
	    return this.getToken(MASMParser.ESP, 0);
	};

	EBP() {
	    return this.getToken(MASMParser.EBP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterRegister_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitRegister_(this);
		}
	}


}



class OContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_o;
    }

	MOV() {
	    return this.getToken(MASMParser.MOV, 0);
	};

	CMP() {
	    return this.getToken(MASMParser.CMP, 0);
	};

	TEST() {
	    return this.getToken(MASMParser.TEST, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterO(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitO(this);
		}
	}


}



class OpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_op;
    }

	PUSH() {
	    return this.getToken(MASMParser.PUSH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitOp(this);
		}
	}


}



class OpeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_ope;
    }

	POP() {
	    return this.getToken(MASMParser.POP, 0);
	};

	IDIV() {
	    return this.getToken(MASMParser.IDIV, 0);
	};

	INC() {
	    return this.getToken(MASMParser.INC, 0);
	};

	DEC() {
	    return this.getToken(MASMParser.DEC, 0);
	};

	NEG() {
	    return this.getToken(MASMParser.NEG, 0);
	};

	MUL() {
	    return this.getToken(MASMParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(MASMParser.DIV, 0);
	};

	IMUL() {
	    return this.getToken(MASMParser.IMUL, 0);
	};

	NOT() {
	    return this.getToken(MASMParser.NOT, 0);
	};

	SETPO() {
	    return this.getToken(MASMParser.SETPO, 0);
	};

	SETAE() {
	    return this.getToken(MASMParser.SETAE, 0);
	};

	SETNLE() {
	    return this.getToken(MASMParser.SETNLE, 0);
	};

	SETC() {
	    return this.getToken(MASMParser.SETC, 0);
	};

	SETNO() {
	    return this.getToken(MASMParser.SETNO, 0);
	};

	SETNB() {
	    return this.getToken(MASMParser.SETNB, 0);
	};

	SETP() {
	    return this.getToken(MASMParser.SETP, 0);
	};

	SETNGE() {
	    return this.getToken(MASMParser.SETNGE, 0);
	};

	SETL() {
	    return this.getToken(MASMParser.SETL, 0);
	};

	SETGE() {
	    return this.getToken(MASMParser.SETGE, 0);
	};

	SETPE() {
	    return this.getToken(MASMParser.SETPE, 0);
	};

	SETNL() {
	    return this.getToken(MASMParser.SETNL, 0);
	};

	SETNZ() {
	    return this.getToken(MASMParser.SETNZ, 0);
	};

	SETNE() {
	    return this.getToken(MASMParser.SETNE, 0);
	};

	SETNC() {
	    return this.getToken(MASMParser.SETNC, 0);
	};

	SETBE() {
	    return this.getToken(MASMParser.SETBE, 0);
	};

	SETNP() {
	    return this.getToken(MASMParser.SETNP, 0);
	};

	SETNS() {
	    return this.getToken(MASMParser.SETNS, 0);
	};

	SETO() {
	    return this.getToken(MASMParser.SETO, 0);
	};

	SETNA() {
	    return this.getToken(MASMParser.SETNA, 0);
	};

	SETNAE() {
	    return this.getToken(MASMParser.SETNAE, 0);
	};

	SETZ() {
	    return this.getToken(MASMParser.SETZ, 0);
	};

	SETLE() {
	    return this.getToken(MASMParser.SETLE, 0);
	};

	SETNBE() {
	    return this.getToken(MASMParser.SETNBE, 0);
	};

	SETS() {
	    return this.getToken(MASMParser.SETS, 0);
	};

	SETE() {
	    return this.getToken(MASMParser.SETE, 0);
	};

	SETB() {
	    return this.getToken(MASMParser.SETB, 0);
	};

	SETA() {
	    return this.getToken(MASMParser.SETA, 0);
	};

	SETG() {
	    return this.getToken(MASMParser.SETG, 0);
	};

	SETNG() {
	    return this.getToken(MASMParser.SETNG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterOpe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitOpe(this);
		}
	}


}



class OperContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_oper;
    }

	XCHG() {
	    return this.getToken(MASMParser.XCHG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterOper(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitOper(this);
		}
	}


}



class OperaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_opera;
    }

	POPAD() {
	    return this.getToken(MASMParser.POPAD, 0);
	};

	AAA() {
	    return this.getToken(MASMParser.AAA, 0);
	};

	POPA() {
	    return this.getToken(MASMParser.POPA, 0);
	};

	POPFD() {
	    return this.getToken(MASMParser.POPFD, 0);
	};

	CWD() {
	    return this.getToken(MASMParser.CWD, 0);
	};

	LAHF() {
	    return this.getToken(MASMParser.LAHF, 0);
	};

	PUSHAD() {
	    return this.getToken(MASMParser.PUSHAD, 0);
	};

	PUSHF() {
	    return this.getToken(MASMParser.PUSHF, 0);
	};

	AAS() {
	    return this.getToken(MASMParser.AAS, 0);
	};

	BSWAP() {
	    return this.getToken(MASMParser.BSWAP, 0);
	};

	PUSHFD() {
	    return this.getToken(MASMParser.PUSHFD, 0);
	};

	CBW() {
	    return this.getToken(MASMParser.CBW, 0);
	};

	CWDE() {
	    return this.getToken(MASMParser.CWDE, 0);
	};

	XLAT() {
	    return this.getToken(MASMParser.XLAT, 0);
	};

	AAM() {
	    return this.getToken(MASMParser.AAM, 0);
	};

	AAD() {
	    return this.getToken(MASMParser.AAD, 0);
	};

	CDQ() {
	    return this.getToken(MASMParser.CDQ, 0);
	};

	DAA() {
	    return this.getToken(MASMParser.DAA, 0);
	};

	SAHF() {
	    return this.getToken(MASMParser.SAHF, 0);
	};

	DAS() {
	    return this.getToken(MASMParser.DAS, 0);
	};

	INTO() {
	    return this.getToken(MASMParser.INTO, 0);
	};

	IRET() {
	    return this.getToken(MASMParser.IRET, 0);
	};

	CLC() {
	    return this.getToken(MASMParser.CLC, 0);
	};

	STC() {
	    return this.getToken(MASMParser.STC, 0);
	};

	CMC() {
	    return this.getToken(MASMParser.CMC, 0);
	};

	CLD() {
	    return this.getToken(MASMParser.CLD, 0);
	};

	STD() {
	    return this.getToken(MASMParser.STD, 0);
	};

	CLI() {
	    return this.getToken(MASMParser.CLI, 0);
	};

	STI() {
	    return this.getToken(MASMParser.STI, 0);
	};

	MOVSB() {
	    return this.getToken(MASMParser.MOVSB, 0);
	};

	MOVSW() {
	    return this.getToken(MASMParser.MOVSW, 0);
	};

	MOVSD() {
	    return this.getToken(MASMParser.MOVSD, 0);
	};

	LODS() {
	    return this.getToken(MASMParser.LODS, 0);
	};

	LODSB() {
	    return this.getToken(MASMParser.LODSB, 0);
	};

	LODSW() {
	    return this.getToken(MASMParser.LODSW, 0);
	};

	LODSD() {
	    return this.getToken(MASMParser.LODSD, 0);
	};

	STOS() {
	    return this.getToken(MASMParser.STOS, 0);
	};

	STOSB() {
	    return this.getToken(MASMParser.STOSB, 0);
	};

	STOSW() {
	    return this.getToken(MASMParser.STOSW, 0);
	};

	SOTSD() {
	    return this.getToken(MASMParser.SOTSD, 0);
	};

	SCAS() {
	    return this.getToken(MASMParser.SCAS, 0);
	};

	SCASB() {
	    return this.getToken(MASMParser.SCASB, 0);
	};

	SCASW() {
	    return this.getToken(MASMParser.SCASW, 0);
	};

	SCASD() {
	    return this.getToken(MASMParser.SCASD, 0);
	};

	CMPS() {
	    return this.getToken(MASMParser.CMPS, 0);
	};

	CMPSB() {
	    return this.getToken(MASMParser.CMPSB, 0);
	};

	CMPSW() {
	    return this.getToken(MASMParser.CMPSW, 0);
	};

	CMPSD() {
	    return this.getToken(MASMParser.CMPSD, 0);
	};

	INSB() {
	    return this.getToken(MASMParser.INSB, 0);
	};

	INSW() {
	    return this.getToken(MASMParser.INSW, 0);
	};

	INSD() {
	    return this.getToken(MASMParser.INSD, 0);
	};

	OUTSB() {
	    return this.getToken(MASMParser.OUTSB, 0);
	};

	OUTSW() {
	    return this.getToken(MASMParser.OUTSW, 0);
	};

	OUTSD() {
	    return this.getToken(MASMParser.OUTSD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterOpera(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitOpera(this);
		}
	}


}



class OperatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_operat;
    }

	ADC() {
	    return this.getToken(MASMParser.ADC, 0);
	};

	ADD() {
	    return this.getToken(MASMParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(MASMParser.SUB, 0);
	};

	CBB() {
	    return this.getToken(MASMParser.CBB, 0);
	};

	XOR() {
	    return this.getToken(MASMParser.XOR, 0);
	};

	OR() {
	    return this.getToken(MASMParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterOperat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitOperat(this);
		}
	}


}



class OperatoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_operato;
    }

	JNBE() {
	    return this.getToken(MASMParser.JNBE, 0);
	};

	JNZ() {
	    return this.getToken(MASMParser.JNZ, 0);
	};

	JPO() {
	    return this.getToken(MASMParser.JPO, 0);
	};

	JZ() {
	    return this.getToken(MASMParser.JZ, 0);
	};

	JS() {
	    return this.getToken(MASMParser.JS, 0);
	};

	LOOPNZ() {
	    return this.getToken(MASMParser.LOOPNZ, 0);
	};

	JGE() {
	    return this.getToken(MASMParser.JGE, 0);
	};

	JB() {
	    return this.getToken(MASMParser.JB, 0);
	};

	JNB() {
	    return this.getToken(MASMParser.JNB, 0);
	};

	JO() {
	    return this.getToken(MASMParser.JO, 0);
	};

	JP() {
	    return this.getToken(MASMParser.JP, 0);
	};

	JNO() {
	    return this.getToken(MASMParser.JNO, 0);
	};

	JNL() {
	    return this.getToken(MASMParser.JNL, 0);
	};

	JNAE() {
	    return this.getToken(MASMParser.JNAE, 0);
	};

	LOOPZ() {
	    return this.getToken(MASMParser.LOOPZ, 0);
	};

	JMP() {
	    return this.getToken(MASMParser.JMP, 0);
	};

	JNP() {
	    return this.getToken(MASMParser.JNP, 0);
	};

	LOOP() {
	    return this.getToken(MASMParser.LOOP, 0);
	};

	JL() {
	    return this.getToken(MASMParser.JL, 0);
	};

	JCXZ() {
	    return this.getToken(MASMParser.JCXZ, 0);
	};

	JAE() {
	    return this.getToken(MASMParser.JAE, 0);
	};

	JNGE() {
	    return this.getToken(MASMParser.JNGE, 0);
	};

	JA() {
	    return this.getToken(MASMParser.JA, 0);
	};

	LOOPNE() {
	    return this.getToken(MASMParser.LOOPNE, 0);
	};

	LOOPE() {
	    return this.getToken(MASMParser.LOOPE, 0);
	};

	JG() {
	    return this.getToken(MASMParser.JG, 0);
	};

	JNLE() {
	    return this.getToken(MASMParser.JNLE, 0);
	};

	JE() {
	    return this.getToken(MASMParser.JE, 0);
	};

	JNC() {
	    return this.getToken(MASMParser.JNC, 0);
	};

	JC() {
	    return this.getToken(MASMParser.JC, 0);
	};

	JNA() {
	    return this.getToken(MASMParser.JNA, 0);
	};

	JBE() {
	    return this.getToken(MASMParser.JBE, 0);
	};

	JLE() {
	    return this.getToken(MASMParser.JLE, 0);
	};

	JPE() {
	    return this.getToken(MASMParser.JPE, 0);
	};

	JNS() {
	    return this.getToken(MASMParser.JNS, 0);
	};

	JECXZ() {
	    return this.getToken(MASMParser.JECXZ, 0);
	};

	JNG() {
	    return this.getToken(MASMParser.JNG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterOperato(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitOperato(this);
		}
	}


}



class Operator_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_operator_;
    }

	MOVZX() {
	    return this.getToken(MASMParser.MOVZX, 0);
	};

	BSF() {
	    return this.getToken(MASMParser.BSF, 0);
	};

	BSR() {
	    return this.getToken(MASMParser.BSR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterOperator_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitOperator_(this);
		}
	}


}



class LContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_l;
    }

	LES() {
	    return this.getToken(MASMParser.LES, 0);
	};

	LEA() {
	    return this.getToken(MASMParser.LEA, 0);
	};

	LDS() {
	    return this.getToken(MASMParser.LDS, 0);
	};

	INS() {
	    return this.getToken(MASMParser.INS, 0);
	};

	OUTS() {
	    return this.getToken(MASMParser.OUTS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterL(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitL(this);
		}
	}


}



class XContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_x;
    }

	XADD() {
	    return this.getToken(MASMParser.XADD, 0);
	};

	CMPXCHG() {
	    return this.getToken(MASMParser.CMPXCHG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterX(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitX(this);
		}
	}


}



class SContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_s;
    }

	SHL() {
	    return this.getToken(MASMParser.SHL, 0);
	};

	SHR() {
	    return this.getToken(MASMParser.SHR, 0);
	};

	ROR() {
	    return this.getToken(MASMParser.ROR, 0);
	};

	ROL() {
	    return this.getToken(MASMParser.ROL, 0);
	};

	RCL() {
	    return this.getToken(MASMParser.RCL, 0);
	};

	SAL() {
	    return this.getToken(MASMParser.SAL, 0);
	};

	RCR() {
	    return this.getToken(MASMParser.RCR, 0);
	};

	SAR() {
	    return this.getToken(MASMParser.SAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterS(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitS(this);
		}
	}


}



class ShContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_sh;
    }

	SHRD() {
	    return this.getToken(MASMParser.SHRD, 0);
	};

	SHLD() {
	    return this.getToken(MASMParser.SHLD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterSh(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitSh(this);
		}
	}


}



class BContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_b;
    }

	BTR() {
	    return this.getToken(MASMParser.BTR, 0);
	};

	BT() {
	    return this.getToken(MASMParser.BT, 0);
	};

	BTC() {
	    return this.getToken(MASMParser.BTC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterB(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitB(this);
		}
	}


}



class CallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_call;
    }

	CALL() {
	    return this.getToken(MASMParser.CALL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitCall(this);
		}
	}


}



class InterruptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_interruption;
    }

	INT() {
	    return this.getToken(MASMParser.INT, 0);
	};

	RETN() {
	    return this.getToken(MASMParser.RETN, 0);
	};

	RET() {
	    return this.getToken(MASMParser.RET, 0);
	};

	RETF() {
	    return this.getToken(MASMParser.RETF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterInterruption(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitInterruption(this);
		}
	}


}



class In_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_in_;
    }

	IN() {
	    return this.getToken(MASMParser.IN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterIn_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitIn_(this);
		}
	}


}



class OutContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_out;
    }

	OUT() {
	    return this.getToken(MASMParser.OUT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterOut(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitOut(this);
		}
	}


}



class ReContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_re;
    }

	REP() {
	    return this.getToken(MASMParser.REP, 0);
	};

	REPE() {
	    return this.getToken(MASMParser.REPE, 0);
	};

	REPZ() {
	    return this.getToken(MASMParser.REPZ, 0);
	};

	REPNE() {
	    return this.getToken(MASMParser.REPNE, 0);
	};

	REPNZ() {
	    return this.getToken(MASMParser.REPNZ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterRe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitRe(this);
		}
	}


}



class DirectivesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_directives;
    }

	ALPHA() {
	    return this.getToken(MASMParser.ALPHA, 0);
	};

	CONST() {
	    return this.getToken(MASMParser.CONST, 0);
	};

	CREF() {
	    return this.getToken(MASMParser.CREF, 0);
	};

	XCREF() {
	    return this.getToken(MASMParser.XCREF, 0);
	};

	DATA() {
	    return this.getToken(MASMParser.DATA, 0);
	};

	DATA2() {
	    return this.getToken(MASMParser.DATA2, 0);
	};

	DOSSEG() {
	    return this.getToken(MASMParser.DOSSEG, 0);
	};

	ERR() {
	    return this.getToken(MASMParser.ERR, 0);
	};

	ERR1() {
	    return this.getToken(MASMParser.ERR1, 0);
	};

	ERR2() {
	    return this.getToken(MASMParser.ERR2, 0);
	};

	ERRE() {
	    return this.getToken(MASMParser.ERRE, 0);
	};

	ERRNZ() {
	    return this.getToken(MASMParser.ERRNZ, 0);
	};

	ERRDEF() {
	    return this.getToken(MASMParser.ERRDEF, 0);
	};

	ERRNDEF() {
	    return this.getToken(MASMParser.ERRNDEF, 0);
	};

	ERRB() {
	    return this.getToken(MASMParser.ERRB, 0);
	};

	ERRNB() {
	    return this.getToken(MASMParser.ERRNB, 0);
	};

	ERRIDN() {
	    return this.getToken(MASMParser.ERRIDN, 0);
	};

	ERRDIF() {
	    return this.getToken(MASMParser.ERRDIF, 0);
	};

	EVEN() {
	    return this.getToken(MASMParser.EVEN, 0);
	};

	LIST() {
	    return this.getToken(MASMParser.LIST, 0);
	};

	WIDTH() {
	    return this.getToken(MASMParser.WIDTH, 0);
	};

	MASK() {
	    return this.getToken(MASMParser.MASK, 0);
	};

	SEQ() {
	    return this.getToken(MASMParser.SEQ, 0);
	};

	XLIST() {
	    return this.getToken(MASMParser.XLIST, 0);
	};

	EXIT() {
	    return this.getToken(MASMParser.EXIT, 0);
	};

	MODEL() {
	    return this.getToken(MASMParser.MODEL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterDirectives(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitDirectives(this);
		}
	}


}



class TyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_ty;
    }

	BYTE() {
	    return this.getToken(MASMParser.BYTE, 0);
	};

	SBYTE() {
	    return this.getToken(MASMParser.SBYTE, 0);
	};

	DB() {
	    return this.getToken(MASMParser.DB, 0);
	};

	WORD() {
	    return this.getToken(MASMParser.WORD, 0);
	};

	SWORD() {
	    return this.getToken(MASMParser.SWORD, 0);
	};

	DW() {
	    return this.getToken(MASMParser.DW, 0);
	};

	DWORD() {
	    return this.getToken(MASMParser.DWORD, 0);
	};

	SDWORD() {
	    return this.getToken(MASMParser.SDWORD, 0);
	};

	DD() {
	    return this.getToken(MASMParser.DD, 0);
	};

	FWORD() {
	    return this.getToken(MASMParser.FWORD, 0);
	};

	DF() {
	    return this.getToken(MASMParser.DF, 0);
	};

	QWORD() {
	    return this.getToken(MASMParser.QWORD, 0);
	};

	DQ() {
	    return this.getToken(MASMParser.DQ, 0);
	};

	TBYTE() {
	    return this.getToken(MASMParser.TBYTE, 0);
	};

	DT() {
	    return this.getToken(MASMParser.DT, 0);
	};

	REAL4() {
	    return this.getToken(MASMParser.REAL4, 0);
	};

	REAL8() {
	    return this.getToken(MASMParser.REAL8, 0);
	};

	REAL() {
	    return this.getToken(MASMParser.REAL, 0);
	};

	FAR() {
	    return this.getToken(MASMParser.FAR, 0);
	};

	NEAR() {
	    return this.getToken(MASMParser.NEAR, 0);
	};

	PROC() {
	    return this.getToken(MASMParser.PROC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterTy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitTy(this);
		}
	}


}



class QuestionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_question;
    }

	QUESTION() {
	    return this.getToken(MASMParser.QUESTION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterQuestion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitQuestion(this);
		}
	}


}



class TimeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MASMParser.RULE_time;
    }

	TIMES() {
	    return this.getToken(MASMParser.TIMES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.enterTime(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MASMListener ) {
	        listener.exitTime(this);
		}
	}


}




MASMParser.CompilationUnitContext = CompilationUnitContext; 
MASMParser.SegmentsContext = SegmentsContext; 
MASMParser.ProcContext = ProcContext; 
MASMParser.CodeContext = CodeContext; 
MASMParser.Binary_exp1Context = Binary_exp1Context; 
MASMParser.Unuary_exp1Context = Unuary_exp1Context; 
MASMParser.Unuary_exp2Context = Unuary_exp2Context; 
MASMParser.Binary_exp2Context = Binary_exp2Context; 
MASMParser.NotargumentsContext = NotargumentsContext; 
MASMParser.Binary_exp3Context = Binary_exp3Context; 
MASMParser.Unuary_exp3Context = Unuary_exp3Context; 
MASMParser.Binary_exp4Context = Binary_exp4Context; 
MASMParser.Binary_exp5Context = Binary_exp5Context; 
MASMParser.Binary_exp6Context = Binary_exp6Context; 
MASMParser.Binary_exp7Context = Binary_exp7Context; 
MASMParser.Binary_exp8Context = Binary_exp8Context; 
MASMParser.Binary_exp9Context = Binary_exp9Context; 
MASMParser.Unuary_exp4Context = Unuary_exp4Context; 
MASMParser.Unuary_exp5Context = Unuary_exp5Context; 
MASMParser.Binary_exp10Context = Binary_exp10Context; 
MASMParser.Binary_exp11Context = Binary_exp11Context; 
MASMParser.Binary_exp12Context = Binary_exp12Context; 
MASMParser.Directive_exp1Context = Directive_exp1Context; 
MASMParser.VariabledeclarationContext = VariabledeclarationContext; 
MASMParser.MemoryContext = MemoryContext; 
MASMParser.SegmentosContext = SegmentosContext; 
MASMParser.Register_Context = Register_Context; 
MASMParser.OContext = OContext; 
MASMParser.OpContext = OpContext; 
MASMParser.OpeContext = OpeContext; 
MASMParser.OperContext = OperContext; 
MASMParser.OperaContext = OperaContext; 
MASMParser.OperatContext = OperatContext; 
MASMParser.OperatoContext = OperatoContext; 
MASMParser.Operator_Context = Operator_Context; 
MASMParser.LContext = LContext; 
MASMParser.XContext = XContext; 
MASMParser.SContext = SContext; 
MASMParser.ShContext = ShContext; 
MASMParser.BContext = BContext; 
MASMParser.CallContext = CallContext; 
MASMParser.InterruptionContext = InterruptionContext; 
MASMParser.In_Context = In_Context; 
MASMParser.OutContext = OutContext; 
MASMParser.ReContext = ReContext; 
MASMParser.DirectivesContext = DirectivesContext; 
MASMParser.TyContext = TyContext; 
MASMParser.QuestionContext = QuestionContext; 
MASMParser.TimeContext = TimeContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
