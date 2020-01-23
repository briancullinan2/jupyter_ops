// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sharc/SHARCParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SHARCParserListener } from "./SHARCParserListener";
import { SHARCParserVisitor } from "./SHARCParserVisitor";


export class SHARCParser extends Parser {
	public static readonly StringLiteral = 1;
	public static readonly CharLiteral = 2;
	public static readonly INT = 3;
	public static readonly WS = 4;
	public static readonly DOT_ADI_ = 5;
	public static readonly DOT_DATE_ = 6;
	public static readonly DOT_FILE_ = 7;
	public static readonly DOT_ALGIGN = 8;
	public static readonly DOT_COMPRESS = 9;
	public static readonly DOT_ELIF = 10;
	public static readonly DOT_ELSE = 11;
	public static readonly DOT_ENDIF = 12;
	public static readonly DOT_EXTERN = 13;
	public static readonly DOT_FILE = 14;
	public static readonly DOT_FILE_ATTR = 15;
	public static readonly DOT_FORCECOMPRESS = 16;
	public static readonly DOT_GLOBAL = 17;
	public static readonly DOT_IF = 18;
	public static readonly DOT_IMPORT = 19;
	public static readonly DOT_INCBINARY = 20;
	public static readonly DOT_LEFTMARGIN = 21;
	public static readonly DOT_LIST = 22;
	public static readonly DOT_LIST_DATA = 23;
	public static readonly DOT_LIST_DATFILE = 24;
	public static readonly DOT_LIST_DEFTAB = 25;
	public static readonly DOT_LIST_LOCTAB = 26;
	public static readonly DOT_LIST_WRAPDATA = 27;
	public static readonly DOT_NEWPAGE = 28;
	public static readonly DOT_NOCOMPRESS = 29;
	public static readonly DOT_NOLIST_DATA = 30;
	public static readonly DOT_NOLIST_DATFILE = 31;
	public static readonly DOT_NOLIST_WRAPDATA = 32;
	public static readonly DOT_PAGELENGTH = 33;
	public static readonly DOT_PAGEWIDTH = 34;
	public static readonly DOT_PRECISION = 35;
	public static readonly DOT_ROUND_MINUS = 36;
	public static readonly DOT_ROUND_NEAREST = 37;
	public static readonly DOT_ROUND_PLUS = 38;
	public static readonly DOT_ROUND_ZERO = 39;
	public static readonly DOT_PREVIOUS = 40;
	public static readonly DOT_SECTION = 41;
	public static readonly DOT_SEGMENT = 42;
	public static readonly DOT_ENDSEG = 43;
	public static readonly DOT_STRUCT = 44;
	public static readonly DOT_TYPE = 45;
	public static readonly DOT_VAR = 46;
	public static readonly DOT_WEAK = 47;
	public static readonly ABS = 48;
	public static readonly AC = 49;
	public static readonly ACS = 50;
	public static readonly ACT = 51;
	public static readonly ADDRESS = 52;
	public static readonly AND = 53;
	public static readonly ASHIFT = 54;
	public static readonly ASTAT = 55;
	public static readonly AV = 56;
	public static readonly B0 = 57;
	public static readonly B1 = 58;
	public static readonly B2 = 59;
	public static readonly B3 = 60;
	public static readonly B4 = 61;
	public static readonly B5 = 62;
	public static readonly B6 = 63;
	public static readonly B7 = 64;
	public static readonly B8 = 65;
	public static readonly B9 = 66;
	public static readonly B10 = 67;
	public static readonly B11 = 68;
	public static readonly B12 = 69;
	public static readonly B13 = 70;
	public static readonly B14 = 71;
	public static readonly B15 = 72;
	public static readonly BB = 73;
	public static readonly BCLR = 74;
	public static readonly BF = 75;
	public static readonly BIT = 76;
	public static readonly BITREV = 77;
	public static readonly BM = 78;
	public static readonly BSET = 79;
	public static readonly BTGL = 80;
	public static readonly BTST = 81;
	public static readonly BY = 82;
	public static readonly CA = 83;
	public static readonly CACHE = 84;
	public static readonly CALL = 85;
	public static readonly CH = 86;
	public static readonly CI = 87;
	public static readonly CJUMP = 88;
	public static readonly CL = 89;
	public static readonly CLR = 90;
	public static readonly CLIP = 91;
	public static readonly COMP = 92;
	public static readonly COPYSIGN = 93;
	public static readonly COS = 94;
	public static readonly CURLCNTR = 95;
	public static readonly DADDR = 96;
	public static readonly DB = 97;
	public static readonly DEC = 98;
	public static readonly DEF = 99;
	public static readonly DIM = 100;
	public static readonly DM = 101;
	public static readonly DMA1E = 102;
	public static readonly DMA1s = 103;
	public static readonly DMA2E = 104;
	public static readonly DMA2s = 105;
	public static readonly DMADR = 106;
	public static readonly DMABANK1 = 107;
	public static readonly DMABANK2 = 108;
	public static readonly DMABANK3 = 109;
	public static readonly DMAWAIT = 110;
	public static readonly DO = 111;
	public static readonly DOVL = 112;
	public static readonly EB = 113;
	public static readonly ECE = 114;
	public static readonly EF = 115;
	public static readonly ELSE = 116;
	public static readonly EMUCLK = 117;
	public static readonly EMUCLK2 = 118;
	public static readonly EMUIDLE = 119;
	public static readonly EMUN = 120;
	public static readonly EOS = 121;
	public static readonly EQ = 122;
	public static readonly EX = 123;
	public static readonly EXP = 124;
	public static readonly EXP2 = 125;
	public static readonly F0 = 126;
	public static readonly F1 = 127;
	public static readonly F2 = 128;
	public static readonly F3 = 129;
	public static readonly F4 = 130;
	public static readonly F5 = 131;
	public static readonly F6 = 132;
	public static readonly F7 = 133;
	public static readonly F8 = 134;
	public static readonly F9 = 135;
	public static readonly F10 = 136;
	public static readonly F11 = 137;
	public static readonly F12 = 138;
	public static readonly F13 = 139;
	public static readonly F14 = 140;
	public static readonly F15 = 141;
	public static readonly FADDR = 142;
	public static readonly FDEP = 143;
	public static readonly FEXT = 144;
	public static readonly FILE = 145;
	public static readonly FIX = 146;
	public static readonly FLAG0_IN = 147;
	public static readonly FLAG1_IN = 148;
	public static readonly FLAG2_IN = 149;
	public static readonly FLAG3_IN = 150;
	public static readonly FLOAT = 151;
	public static readonly FLUSH = 152;
	public static readonly FMERG = 153;
	public static readonly FOREVER = 154;
	public static readonly FPACK = 155;
	public static readonly FRACTIONAL = 156;
	public static readonly FTA = 157;
	public static readonly FTB = 158;
	public static readonly FTC = 159;
	public static readonly FUNPACK = 160;
	public static readonly GCC_COMPILED = 161;
	public static readonly GE = 162;
	public static readonly GT = 163;
	public static readonly I0 = 164;
	public static readonly I1 = 165;
	public static readonly I2 = 166;
	public static readonly I3 = 167;
	public static readonly I4 = 168;
	public static readonly I5 = 169;
	public static readonly I6 = 170;
	public static readonly I7 = 171;
	public static readonly I8 = 172;
	public static readonly I9 = 173;
	public static readonly I10 = 174;
	public static readonly I11 = 175;
	public static readonly I12 = 176;
	public static readonly I13 = 177;
	public static readonly I14 = 178;
	public static readonly I15 = 179;
	public static readonly IDLE = 180;
	public static readonly IDLE16 = 181;
	public static readonly IDLEI15 = 182;
	public static readonly IDLEI16 = 183;
	public static readonly IF = 184;
	public static readonly IMASK = 185;
	public static readonly IMASKP = 186;
	public static readonly INC = 187;
	public static readonly IRPTL = 188;
	public static readonly JUMP = 189;
	public static readonly L0 = 190;
	public static readonly L1 = 191;
	public static readonly L2 = 192;
	public static readonly L3 = 193;
	public static readonly L4 = 194;
	public static readonly L5 = 195;
	public static readonly L6 = 196;
	public static readonly L7 = 197;
	public static readonly L8 = 198;
	public static readonly L9 = 199;
	public static readonly L10 = 200;
	public static readonly L11 = 201;
	public static readonly L12 = 202;
	public static readonly L13 = 203;
	public static readonly L14 = 204;
	public static readonly L15 = 205;
	public static readonly LA = 206;
	public static readonly LADDR = 207;
	public static readonly LCE = 208;
	public static readonly LCNTR = 209;
	public static readonly LE = 210;
	public static readonly LEFTO = 211;
	public static readonly LEFTZ = 212;
	public static readonly LENGTH = 213;
	public static readonly LINE = 214;
	public static readonly LN = 215;
	public static readonly LOAD = 216;
	public static readonly LOG2 = 217;
	public static readonly LOGB = 218;
	public static readonly LOOP = 219;
	public static readonly LR = 220;
	public static readonly LSHIFT = 221;
	public static readonly LT = 222;
	public static readonly M0 = 223;
	public static readonly M1 = 224;
	public static readonly M2 = 225;
	public static readonly M3 = 226;
	public static readonly M4 = 227;
	public static readonly M5 = 228;
	public static readonly M6 = 229;
	public static readonly M7 = 230;
	public static readonly M8 = 231;
	public static readonly M9 = 232;
	public static readonly M10 = 233;
	public static readonly M11 = 234;
	public static readonly M12 = 235;
	public static readonly M13 = 236;
	public static readonly M14 = 237;
	public static readonly M15 = 238;
	public static readonly MANT = 239;
	public static readonly MAX = 240;
	public static readonly MBM = 241;
	public static readonly MIN = 242;
	public static readonly MOD = 243;
	public static readonly MODE1 = 244;
	public static readonly MODE2 = 245;
	public static readonly MODIFY = 246;
	public static readonly MR0B = 247;
	public static readonly MR0F = 248;
	public static readonly MR1B = 249;
	public static readonly MR1F = 250;
	public static readonly MR2B = 251;
	public static readonly MR2F = 252;
	public static readonly MRB = 253;
	public static readonly MRF = 254;
	public static readonly MS = 255;
	public static readonly MV = 256;
	public static readonly NBM = 257;
	public static readonly NE = 258;
	public static readonly NOFO = 259;
	public static readonly NOFZ = 260;
	public static readonly NOP = 261;
	public static readonly NOPSPECIAL = 262;
	public static readonly NOT = 263;
	public static readonly NU = 264;
	public static readonly NW = 265;
	public static readonly OFFSETOF = 266;
	public static readonly OR = 267;
	public static readonly P20 = 268;
	public static readonly P32 = 269;
	public static readonly P40 = 270;
	public static readonly PACK = 271;
	public static readonly PAGE = 272;
	public static readonly PASS = 273;
	public static readonly PC = 274;
	public static readonly PCSTK = 275;
	public static readonly PCSTKP = 276;
	public static readonly PM = 277;
	public static readonly PMADR = 278;
	public static readonly PMBANK1 = 279;
	public static readonly PMDAE = 280;
	public static readonly PMDAS = 281;
	public static readonly POP = 282;
	public static readonly POVL0 = 283;
	public static readonly POVL1 = 284;
	public static readonly PSA1E = 285;
	public static readonly PSA1S = 286;
	public static readonly PSA2E = 287;
	public static readonly PSA3E = 288;
	public static readonly PSA3S = 289;
	public static readonly PSA4E = 290;
	public static readonly PSA4S = 291;
	public static readonly PUSH = 292;
	public static readonly PX = 293;
	public static readonly PX1 = 294;
	public static readonly PX2 = 295;
	public static readonly RETAIN_NAME = 296;
	public static readonly R0 = 297;
	public static readonly R1 = 298;
	public static readonly R2 = 299;
	public static readonly R3 = 300;
	public static readonly R4 = 301;
	public static readonly R5 = 302;
	public static readonly R6 = 303;
	public static readonly R7 = 304;
	public static readonly R8 = 305;
	public static readonly R9 = 306;
	public static readonly R10 = 307;
	public static readonly R11 = 308;
	public static readonly R12 = 309;
	public static readonly R13 = 310;
	public static readonly R14 = 311;
	public static readonly R15 = 312;
	public static readonly READ = 313;
	public static readonly RECIPS = 314;
	public static readonly RFRAME = 315;
	public static readonly RND = 316;
	public static readonly ROT = 317;
	public static readonly RS = 318;
	public static readonly RSQRTS = 319;
	public static readonly RTI = 320;
	public static readonly RTS = 321;
	public static readonly SAT = 322;
	public static readonly SCALB = 323;
	public static readonly SCL = 324;
	public static readonly SE = 325;
	public static readonly SET = 326;
	public static readonly SF = 327;
	public static readonly SI = 328;
	public static readonly SIN = 329;
	public static readonly SIZE = 330;
	public static readonly SIZEOF = 331;
	public static readonly SQR = 332;
	public static readonly SR = 333;
	public static readonly SSF = 334;
	public static readonly SSFR = 335;
	public static readonly SSI = 336;
	public static readonly SSIR = 337;
	public static readonly ST = 338;
	public static readonly STEP = 339;
	public static readonly STKY = 340;
	public static readonly STRUCT = 341;
	public static readonly STS = 342;
	public static readonly SUF = 343;
	public static readonly SUFR = 344;
	public static readonly SUI = 345;
	public static readonly SV = 346;
	public static readonly SW = 347;
	public static readonly SZ = 348;
	public static readonly TAG = 349;
	public static readonly TCOUNT = 350;
	public static readonly TF = 351;
	public static readonly TGL = 352;
	public static readonly TPERIOD = 353;
	public static readonly TRUE = 354;
	public static readonly TRUNC = 355;
	public static readonly TST = 356;
	public static readonly TYPE = 357;
	public static readonly TRAP = 358;
	public static readonly UF = 359;
	public static readonly UI = 360;
	public static readonly UNPACK = 361;
	public static readonly UNTIL = 362;
	public static readonly UR = 363;
	public static readonly USF = 364;
	public static readonly USFR = 365;
	public static readonly USI = 366;
	public static readonly USIR = 367;
	public static readonly USTAT1 = 368;
	public static readonly USTAT2 = 369;
	public static readonly UUF = 370;
	public static readonly UUFR = 371;
	public static readonly UUI = 372;
	public static readonly UUIR = 373;
	public static readonly VAL = 374;
	public static readonly WITH = 375;
	public static readonly XOR = 376;
	public static readonly PLUS = 377;
	public static readonly MINUS = 378;
	public static readonly MULT = 379;
	public static readonly DIV = 380;
	public static readonly DIV_MOD = 381;
	public static readonly EQU = 382;
	public static readonly I_OR = 383;
	public static readonly I_XOR = 384;
	public static readonly COMMA = 385;
	public static readonly COLON = 386;
	public static readonly SEMICOLON = 387;
	public static readonly LPARENTHESE = 388;
	public static readonly RPARENTHESE = 389;
	public static readonly LBRACKET = 390;
	public static readonly RBRACKET = 391;
	public static readonly LBRACE = 392;
	public static readonly RBRACE = 393;
	public static readonly AT = 394;
	public static readonly NO_INIT = 395;
	public static readonly ZERO_INIT = 396;
	public static readonly RUNTIME_INIT = 397;
	public static readonly CODE = 398;
	public static readonly DATA = 399;
	public static readonly DATA64 = 400;
	public static readonly DMAONLY = 401;
	public static readonly SECTION = 402;
	public static readonly SECTION_INFO = 403;
	public static readonly STMT = 404;
	public static readonly ADDR = 405;
	public static readonly BIT_DATA = 406;
	public static readonly JUMP_INT = 407;
	public static readonly JUMP_PC = 408;
	public static readonly JUMP_MD = 409;
	public static readonly MODIFIER = 410;
	public static readonly MULTI_MOD = 411;
	public static readonly LABLE = 412;
	public static readonly VARDEF = 413;
	public static readonly ARRDEF = 414;
	public static readonly DM_ACCESS = 415;
	public static readonly PM_ACCESS = 416;
	public static readonly CONDITION = 417;
	public static readonly IF_STMT = 418;
	public static readonly VALUE_EXP = 419;
	public static readonly NULL = 420;
	public static readonly CHAR_LITERAL = 421;
	public static readonly STR_LITERAL = 422;
	public static readonly DIRECTIVE = 423;
	public static readonly NEGATE = 424;
	public static readonly ID = 425;
	public static readonly COMMENT = 426;
	public static readonly RULE_prog = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_stmt_atom = 2;
	public static readonly RULE_sec = 3;
	public static readonly RULE_seg = 4;
	public static readonly RULE_end_seg = 5;
	public static readonly RULE_seg_qualifier = 6;
	public static readonly RULE_seg_qualifier1 = 7;
	public static readonly RULE_seg_qualifier2 = 8;
	public static readonly RULE_seg_qualifier3 = 9;
	public static readonly RULE_seg_qualifier_1 = 10;
	public static readonly RULE_seg_qualifier_2 = 11;
	public static readonly RULE_seg_qualifier_3 = 12;
	public static readonly RULE_stmt = 13;
	public static readonly RULE_declaration = 14;
	public static readonly RULE_declaration_exp1 = 15;
	public static readonly RULE_declaration_exp2 = 16;
	public static readonly RULE_declaration_exp3 = 17;
	public static readonly RULE_declaration_exp4 = 18;
	public static readonly RULE_declaration_exp5 = 19;
	public static readonly RULE_declaration_exp_f1 = 20;
	public static readonly RULE_declaration_exp_f2 = 21;
	public static readonly RULE_initExpression = 22;
	public static readonly RULE_var_addr = 23;
	public static readonly RULE_value_exp = 24;
	public static readonly RULE_value_exp2 = 25;
	public static readonly RULE_term = 26;
	public static readonly RULE_factor = 27;
	public static readonly RULE_atom = 28;
	public static readonly RULE_compute = 29;
	public static readonly RULE_if_compute_mov = 30;
	public static readonly RULE_if_compute_mov_exp = 31;
	public static readonly RULE_compute_mov_exp = 32;
	public static readonly RULE_mov_exp_1 = 33;
	public static readonly RULE_mov_exp_1_1 = 34;
	public static readonly RULE_mov_exp_1_2 = 35;
	public static readonly RULE_mov_exp_3a = 36;
	public static readonly RULE_mov_exp_3b = 37;
	public static readonly RULE_mov_exp_3c = 38;
	public static readonly RULE_mov_exp_3d = 39;
	public static readonly RULE_mov_exp_4a = 40;
	public static readonly RULE_mov_exp_4b = 41;
	public static readonly RULE_mov_exp_4c = 42;
	public static readonly RULE_mov_exp_4d = 43;
	public static readonly RULE_mov_exp_5 = 44;
	public static readonly RULE_mov_exp_6a = 45;
	public static readonly RULE_mov_exp_6b = 46;
	public static readonly RULE_mov_exp_7 = 47;
	public static readonly RULE_mem_addr_ia_mb = 48;
	public static readonly RULE_mem_addr_ic_md = 49;
	public static readonly RULE_mem_addr_md_ic = 50;
	public static readonly RULE_mem_addr_mb_ia = 51;
	public static readonly RULE_mem_addr_ia_int = 52;
	public static readonly RULE_mem_addr_ic_int = 53;
	public static readonly RULE_mem_addr_int_ia = 54;
	public static readonly RULE_mem_addr_int_ic = 55;
	public static readonly RULE_mem_addr_int = 56;
	public static readonly RULE_mem_addr_int_ = 57;
	public static readonly RULE_mem_addr_dm_ia_mb = 58;
	public static readonly RULE_mem_addr_pm_ic_md = 59;
	public static readonly RULE_mem_addr_dm_mb_ia = 60;
	public static readonly RULE_mem_addr_pm_md_ic = 61;
	public static readonly RULE_mem_addr_dm_ia_int = 62;
	public static readonly RULE_mem_addr_pm_ic_int = 63;
	public static readonly RULE_mem_addr_dm_int_ia = 64;
	public static readonly RULE_mem_addr_pm_int_ic = 65;
	public static readonly RULE_mem_addr_dm_int = 66;
	public static readonly RULE_mem_addr_pm_int = 67;
	public static readonly RULE_fixpoint_alu_op = 68;
	public static readonly RULE_r_exp = 69;
	public static readonly RULE_floating_point_alu_op = 70;
	public static readonly RULE_f_exp = 71;
	public static readonly RULE_multi_op = 72;
	public static readonly RULE_multi_r = 73;
	public static readonly RULE_multi_exp_r = 74;
	public static readonly RULE_multi_exp_mrf = 75;
	public static readonly RULE_multi_exp_mrb = 76;
	public static readonly RULE_mr = 77;
	public static readonly RULE_shifter_op = 78;
	public static readonly RULE_shifter_exp = 79;
	public static readonly RULE_sec_op = 80;
	public static readonly RULE_sec_op2 = 81;
	public static readonly RULE_bit_data = 82;
	public static readonly RULE_add_or_sub = 83;
	public static readonly RULE_dual_op = 84;
	public static readonly RULE_dual_add_r = 85;
	public static readonly RULE_parallel_multi = 86;
	public static readonly RULE_flow_control_exp = 87;
	public static readonly RULE_flow_contorl_8 = 88;
	public static readonly RULE_flow_contorl_8_exp = 89;
	public static readonly RULE_flow_control_9_and_11 = 90;
	public static readonly RULE_flow_control_9_and_11_exp = 91;
	public static readonly RULE_flow_control_10 = 92;
	public static readonly RULE_flow_control_10_frag = 93;
	public static readonly RULE_flow_control_12 = 94;
	public static readonly RULE_lcntr_v = 95;
	public static readonly RULE_flow_control_13 = 96;
	public static readonly RULE_flow_control_8a = 97;
	public static readonly RULE_flow_control_8b = 98;
	public static readonly RULE_flow_control_9a = 99;
	public static readonly RULE_flow_control_9b = 100;
	public static readonly RULE_flow_control_11a = 101;
	public static readonly RULE_flow_control_11b = 102;
	public static readonly RULE_jump_addr_int_or_pc = 103;
	public static readonly RULE_jump_addr_md_or_pc = 104;
	public static readonly RULE_jump_addr_pc = 105;
	public static readonly RULE_jump_addr_int = 106;
	public static readonly RULE_jump_modifier = 107;
	public static readonly RULE_jump_modifier_ = 108;
	public static readonly RULE_jump_modifier_1 = 109;
	public static readonly RULE_jump_modifier2 = 110;
	public static readonly RULE_jump_modifier3 = 111;
	public static readonly RULE_jump_modifier3_ = 112;
	public static readonly RULE_jump_modifier3_1 = 113;
	public static readonly RULE_imm_mov_exp = 114;
	public static readonly RULE_imm_mov_14a = 115;
	public static readonly RULE_imm_mov_15a = 116;
	public static readonly RULE_imm_mov_14b = 117;
	public static readonly RULE_imm_mov_15b = 118;
	public static readonly RULE_imm_mov_16 = 119;
	public static readonly RULE_imm_mov_17 = 120;
	public static readonly RULE_u_reg2 = 121;
	public static readonly RULE_misc_exp = 122;
	public static readonly RULE_misc_20 = 123;
	public static readonly RULE_directive_exp = 124;
	public static readonly RULE_b_reg = 125;
	public static readonly RULE_l_reg = 126;
	public static readonly RULE_r_reg = 127;
	public static readonly RULE_f_reg = 128;
	public static readonly RULE_s_reg = 129;
	public static readonly RULE_ia = 130;
	public static readonly RULE_mb = 131;
	public static readonly RULE_ic = 132;
	public static readonly RULE_md = 133;
	public static readonly RULE_i_reg = 134;
	public static readonly RULE_m_reg = 135;
	public static readonly RULE_dag_reg = 136;
	public static readonly RULE_d_reg = 137;
	public static readonly RULE_u_reg = 138;
	public static readonly RULE_condition = 139;
	public static readonly RULE_ccondition = 140;
	public static readonly RULE_multi_mod1 = 141;
	public static readonly RULE_multi_mod1_ = 142;
	public static readonly RULE_multi_mod2 = 143;
	public static readonly RULE_multi_mod2_ = 144;
	public static readonly RULE_r3_0 = 145;
	public static readonly RULE_r7_4 = 146;
	public static readonly RULE_r11_8 = 147;
	public static readonly RULE_r15_12 = 148;
	public static readonly RULE_f3_0 = 149;
	public static readonly RULE_f7_4 = 150;
	public static readonly RULE_f11_8 = 151;
	public static readonly RULE_f15_12 = 152;
	public static readonly RULE_addr = 153;
	public static readonly RULE_mrf = 154;
	public static readonly RULE_mrb = 155;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "statement", "stmt_atom", "sec", "seg", "end_seg", "seg_qualifier", 
		"seg_qualifier1", "seg_qualifier2", "seg_qualifier3", "seg_qualifier_1", 
		"seg_qualifier_2", "seg_qualifier_3", "stmt", "declaration", "declaration_exp1", 
		"declaration_exp2", "declaration_exp3", "declaration_exp4", "declaration_exp5", 
		"declaration_exp_f1", "declaration_exp_f2", "initExpression", "var_addr", 
		"value_exp", "value_exp2", "term", "factor", "atom", "compute", "if_compute_mov", 
		"if_compute_mov_exp", "compute_mov_exp", "mov_exp_1", "mov_exp_1_1", "mov_exp_1_2", 
		"mov_exp_3a", "mov_exp_3b", "mov_exp_3c", "mov_exp_3d", "mov_exp_4a", 
		"mov_exp_4b", "mov_exp_4c", "mov_exp_4d", "mov_exp_5", "mov_exp_6a", "mov_exp_6b", 
		"mov_exp_7", "mem_addr_ia_mb", "mem_addr_ic_md", "mem_addr_md_ic", "mem_addr_mb_ia", 
		"mem_addr_ia_int", "mem_addr_ic_int", "mem_addr_int_ia", "mem_addr_int_ic", 
		"mem_addr_int", "mem_addr_int_", "mem_addr_dm_ia_mb", "mem_addr_pm_ic_md", 
		"mem_addr_dm_mb_ia", "mem_addr_pm_md_ic", "mem_addr_dm_ia_int", "mem_addr_pm_ic_int", 
		"mem_addr_dm_int_ia", "mem_addr_pm_int_ic", "mem_addr_dm_int", "mem_addr_pm_int", 
		"fixpoint_alu_op", "r_exp", "floating_point_alu_op", "f_exp", "multi_op", 
		"multi_r", "multi_exp_r", "multi_exp_mrf", "multi_exp_mrb", "mr", "shifter_op", 
		"shifter_exp", "sec_op", "sec_op2", "bit_data", "add_or_sub", "dual_op", 
		"dual_add_r", "parallel_multi", "flow_control_exp", "flow_contorl_8", 
		"flow_contorl_8_exp", "flow_control_9_and_11", "flow_control_9_and_11_exp", 
		"flow_control_10", "flow_control_10_frag", "flow_control_12", "lcntr_v", 
		"flow_control_13", "flow_control_8a", "flow_control_8b", "flow_control_9a", 
		"flow_control_9b", "flow_control_11a", "flow_control_11b", "jump_addr_int_or_pc", 
		"jump_addr_md_or_pc", "jump_addr_pc", "jump_addr_int", "jump_modifier", 
		"jump_modifier_", "jump_modifier_1", "jump_modifier2", "jump_modifier3", 
		"jump_modifier3_", "jump_modifier3_1", "imm_mov_exp", "imm_mov_14a", "imm_mov_15a", 
		"imm_mov_14b", "imm_mov_15b", "imm_mov_16", "imm_mov_17", "u_reg2", "misc_exp", 
		"misc_20", "directive_exp", "b_reg", "l_reg", "r_reg", "f_reg", "s_reg", 
		"ia", "mb", "ic", "md", "i_reg", "m_reg", "dag_reg", "d_reg", "u_reg", 
		"condition", "ccondition", "multi_mod1", "multi_mod1_", "multi_mod2", 
		"multi_mod2_", "r3_0", "r7_4", "r11_8", "r15_12", "f3_0", "f7_4", "f11_8", 
		"f15_12", "addr", "mrf", "mrb",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'_ADI_'", "'_DATE_'", 
		"'_FILE'", "'.align'", "'.compress'", "'.elif'", "'.else'", "'.endif'", 
		"'.extern'", "'.file'", "'.file_attr'", "'.forcecompress'", "'.global'", 
		"'.if'", "'.import'", "'.inc/binary'", "'.leftmargin'", "'.list'", "'.list_data'", 
		"'.list_datfile'", "'.list_deftab'", "'.list_loctab'", "'.list_wrapdata'", 
		"'.newpage'", "'.nocompress'", "'.nolist_data'", "'.nolist_datfile'", 
		"'.nolist_wrapdata'", "'.pagelength'", "'.pagewidth'", "'.precision'", 
		"'.round_minus'", "'.round_nearest'", "'.round_plus'", "'.round_zero'", 
		"'.previous'", "'.section'", "'.segment'", "'.endseg'", "'.struct'", "'.type'", 
		"'.var'", "'.weak'", "'abs'", "'ac'", "'acs'", "'act'", "'address'", "'and'", 
		"'ashift'", "'astat'", "'av'", "'b0'", "'b1'", "'b2'", "'b3'", "'b4'", 
		"'b5'", "'b6'", "'b7'", "'b8'", "'b9'", "'b10'", "'b11'", "'b12'", "'b13'", 
		"'b14'", "'b15'", "'bb'", "'bclr'", "'bf'", "'bit'", "'bitrev'", "'bm'", 
		"'bset'", "'btgl'", "'btst'", "'by'", "'ca'", "'cache'", "'call'", "'ch'", 
		"'ci'", "'cjump'", "'cl'", "'clr'", "'clip'", "'comp'", "'copysign'", 
		"'cos'", "'curlcntr'", "'daddr'", "'db'", "'dec'", "'def'", "'dim'", "'dm'", 
		"'dm1e'", "'dm1s'", "'dm2e'", "'dm2s'", "'dmadr'", "'dmabank1'", "'dmabank2'", 
		"'dmabank3'", "'dmawait'", "'do'", "'dovl'", "'eb'", "'ece'", "'ef'", 
		"'else'", "'emuclk'", "'emuclk2'", "'emuidle'", "'emun'", "'eos'", "'eq'", 
		"'ex'", "'exp'", "'exp2'", "'f0'", "'f1'", "'f2'", "'f3'", "'f4'", "'f5'", 
		"'f6'", "'f7'", "'f8'", "'f9'", "'f10'", "'f11'", "'f12'", "'f13'", "'f14'", 
		"'f15'", "'faddr'", "'fdep'", "'fext'", "'file'", "'fix'", "'flag0_in'", 
		"'flag1_in'", "'flag2_in'", "'flag3_in'", "'float'", "'flush'", "'fmerg'", 
		"'forever'", "'fpack'", "'fractional'", "'fta'", "'ftb'", "'ftc'", "'funpack'", 
		"'gcc_compiled'", "'ge'", "'gt'", "'i0'", "'i1'", "'i2'", "'i3'", "'i4'", 
		"'i5'", "'i6'", "'i7'", "'i8'", "'i9'", "'i10'", "'i11'", "'i12'", "'i13'", 
		"'i14'", "'i15'", "'idle'", "'idle16'", "'idlei15'", "'idlei16'", "'if'", 
		"'imask'", "'imaskp'", "'inc'", "'irptl'", "'jump'", "'l0'", "'l1'", "'l2'", 
		"'l3'", "'l4'", "'l5'", "'l6'", "'l7'", "'l8'", "'l9'", "'l10'", "'l11'", 
		"'l12'", "'l13'", "'l14'", "'l15'", "'la'", "'laddr'", "'lce'", "'lcntr'", 
		"'le'", "'lefto'", "'leftz'", "'length'", "'line'", "'ln'", "'load'", 
		"'log2'", "'logb'", "'loop'", "'lr'", "'lshift'", "'lt'", "'m0'", "'m1'", 
		"'m2'", "'m3'", "'m4'", "'m5'", "'m6'", "'m7'", "'m8'", "'m9'", "'m10'", 
		"'m11'", "'m12'", "'m13'", "'m14'", "'m15'", "'mant'", "'max'", "'mbm'", 
		"'min'", "'mod'", "'mode1'", "'mode2'", "'modify'", "'mr0b'", "'mr0f'", 
		"'mr1b'", "'mr1f'", "'mr2b'", "'mr2f'", "'mrb'", "'mrf'", "'ms'", "'mv'", 
		"'nbm'", "'ne'", "'nofo'", "'nofz'", "'nop'", "'nopspecial'", "'not'", 
		"'nu'", "'nw'", "'offsetof'", "'or'", "'p20'", "'p32'", "'p40'", "'pack'", 
		"'page'", "'pass'", "'pc'", "'pcstk'", "'pcstkp'", "'pm'", "'pmadr'", 
		"'pmbank1'", "'pmdae'", "'pmdas'", "'pop'", "'povl0'", "'povl1'", "'psa1e'", 
		"'psa1s'", "'psa2e'", "'psa3e'", "'psa3s'", "'psa4e'", "'psa4s'", "'push'", 
		"'px'", "'px1'", "'px2'", "'retain_name'", "'r0'", "'r1'", "'r2'", "'r3'", 
		"'r4'", "'r5'", "'r6'", "'r7'", "'r8'", "'r9'", "'r10'", "'r11'", "'r12'", 
		"'r13'", "'r14'", "'r15'", "'read'", "'recips'", "'rframe'", "'rnd'", 
		"'rot'", "'rs'", "'rsqrts'", "'rti'", "'rts'", "'sat'", "'scalb'", "'scl'", 
		"'se'", "'set'", "'sf'", "'si'", "'sin'", "'size'", "'sizeof'", "'sqr'", 
		"'sr'", "'ssf'", "'ssfr'", "'ssi'", "'ssir'", "'st'", "'step'", "'stky'", 
		"'struct'", "'sts'", "'suf'", "'sufr'", "'sui'", "'sv'", "'sw'", "'sz'", 
		"'tag'", "'tcount'", "'tf'", "'tgl'", "'tperiod'", "'true'", "'trunc'", 
		"'tst'", "'type'", "'trap'", "'uf'", "'ui'", "'unpack'", "'until'", "'ur'", 
		"'usf'", "'usfr'", "'usi'", "'usir'", "'ustat1'", "'ustat2'", "'uuf'", 
		"'uufr'", "'uui'", "'uuir'", "'val'", "'with'", "'xor'", "'+'", "'-'", 
		"'*'", "'/'", "'%'", "'='", "'|'", "'^'", "','", "':'", "';'", "'('", 
		"')'", "'['", "']'", "'{'", "'}'", "'@'", "'no_init'", "'zero_init'", 
		"'runtime_init'", "'code'", "'data'", "'data64'", "'dmaonly'", "'SECTION'", 
		"'SECTION_INFO'", "'STMT'", "'ADDR'", "'BIT_DATA'", "'JUMP_INT'", "'JUMP_PC'", 
		"'JUMP_MD'", "'MODIFIER'", "'MULTI_MOD'", "'LABLE'", "'VARDEF'", "'ARRDEF'", 
		"'DM_ACCESS'", "'PM_ACCESS'", "'CONDITION'", "'IF_STMT'", "'VALUE_EXP'", 
		"'NULL'", "'CHAR_LITERAL'", "'STR_LITERAL'", "'DIRECTIVE'", "'NEGATE'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "StringLiteral", "CharLiteral", "INT", "WS", "DOT_ADI_", "DOT_DATE_", 
		"DOT_FILE_", "DOT_ALGIGN", "DOT_COMPRESS", "DOT_ELIF", "DOT_ELSE", "DOT_ENDIF", 
		"DOT_EXTERN", "DOT_FILE", "DOT_FILE_ATTR", "DOT_FORCECOMPRESS", "DOT_GLOBAL", 
		"DOT_IF", "DOT_IMPORT", "DOT_INCBINARY", "DOT_LEFTMARGIN", "DOT_LIST", 
		"DOT_LIST_DATA", "DOT_LIST_DATFILE", "DOT_LIST_DEFTAB", "DOT_LIST_LOCTAB", 
		"DOT_LIST_WRAPDATA", "DOT_NEWPAGE", "DOT_NOCOMPRESS", "DOT_NOLIST_DATA", 
		"DOT_NOLIST_DATFILE", "DOT_NOLIST_WRAPDATA", "DOT_PAGELENGTH", "DOT_PAGEWIDTH", 
		"DOT_PRECISION", "DOT_ROUND_MINUS", "DOT_ROUND_NEAREST", "DOT_ROUND_PLUS", 
		"DOT_ROUND_ZERO", "DOT_PREVIOUS", "DOT_SECTION", "DOT_SEGMENT", "DOT_ENDSEG", 
		"DOT_STRUCT", "DOT_TYPE", "DOT_VAR", "DOT_WEAK", "ABS", "AC", "ACS", "ACT", 
		"ADDRESS", "AND", "ASHIFT", "ASTAT", "AV", "B0", "B1", "B2", "B3", "B4", 
		"B5", "B6", "B7", "B8", "B9", "B10", "B11", "B12", "B13", "B14", "B15", 
		"BB", "BCLR", "BF", "BIT", "BITREV", "BM", "BSET", "BTGL", "BTST", "BY", 
		"CA", "CACHE", "CALL", "CH", "CI", "CJUMP", "CL", "CLR", "CLIP", "COMP", 
		"COPYSIGN", "COS", "CURLCNTR", "DADDR", "DB", "DEC", "DEF", "DIM", "DM", 
		"DMA1E", "DMA1s", "DMA2E", "DMA2s", "DMADR", "DMABANK1", "DMABANK2", "DMABANK3", 
		"DMAWAIT", "DO", "DOVL", "EB", "ECE", "EF", "ELSE", "EMUCLK", "EMUCLK2", 
		"EMUIDLE", "EMUN", "EOS", "EQ", "EX", "EXP", "EXP2", "F0", "F1", "F2", 
		"F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", 
		"F14", "F15", "FADDR", "FDEP", "FEXT", "FILE", "FIX", "FLAG0_IN", "FLAG1_IN", 
		"FLAG2_IN", "FLAG3_IN", "FLOAT", "FLUSH", "FMERG", "FOREVER", "FPACK", 
		"FRACTIONAL", "FTA", "FTB", "FTC", "FUNPACK", "GCC_COMPILED", "GE", "GT", 
		"I0", "I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9", "I10", "I11", 
		"I12", "I13", "I14", "I15", "IDLE", "IDLE16", "IDLEI15", "IDLEI16", "IF", 
		"IMASK", "IMASKP", "INC", "IRPTL", "JUMP", "L0", "L1", "L2", "L3", "L4", 
		"L5", "L6", "L7", "L8", "L9", "L10", "L11", "L12", "L13", "L14", "L15", 
		"LA", "LADDR", "LCE", "LCNTR", "LE", "LEFTO", "LEFTZ", "LENGTH", "LINE", 
		"LN", "LOAD", "LOG2", "LOGB", "LOOP", "LR", "LSHIFT", "LT", "M0", "M1", 
		"M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12", "M13", 
		"M14", "M15", "MANT", "MAX", "MBM", "MIN", "MOD", "MODE1", "MODE2", "MODIFY", 
		"MR0B", "MR0F", "MR1B", "MR1F", "MR2B", "MR2F", "MRB", "MRF", "MS", "MV", 
		"NBM", "NE", "NOFO", "NOFZ", "NOP", "NOPSPECIAL", "NOT", "NU", "NW", "OFFSETOF", 
		"OR", "P20", "P32", "P40", "PACK", "PAGE", "PASS", "PC", "PCSTK", "PCSTKP", 
		"PM", "PMADR", "PMBANK1", "PMDAE", "PMDAS", "POP", "POVL0", "POVL1", "PSA1E", 
		"PSA1S", "PSA2E", "PSA3E", "PSA3S", "PSA4E", "PSA4S", "PUSH", "PX", "PX1", 
		"PX2", "RETAIN_NAME", "R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", 
		"R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "READ", "RECIPS", 
		"RFRAME", "RND", "ROT", "RS", "RSQRTS", "RTI", "RTS", "SAT", "SCALB", 
		"SCL", "SE", "SET", "SF", "SI", "SIN", "SIZE", "SIZEOF", "SQR", "SR", 
		"SSF", "SSFR", "SSI", "SSIR", "ST", "STEP", "STKY", "STRUCT", "STS", "SUF", 
		"SUFR", "SUI", "SV", "SW", "SZ", "TAG", "TCOUNT", "TF", "TGL", "TPERIOD", 
		"TRUE", "TRUNC", "TST", "TYPE", "TRAP", "UF", "UI", "UNPACK", "UNTIL", 
		"UR", "USF", "USFR", "USI", "USIR", "USTAT1", "USTAT2", "UUF", "UUFR", 
		"UUI", "UUIR", "VAL", "WITH", "XOR", "PLUS", "MINUS", "MULT", "DIV", "DIV_MOD", 
		"EQU", "I_OR", "I_XOR", "COMMA", "COLON", "SEMICOLON", "LPARENTHESE", 
		"RPARENTHESE", "LBRACKET", "RBRACKET", "LBRACE", "RBRACE", "AT", "NO_INIT", 
		"ZERO_INIT", "RUNTIME_INIT", "CODE", "DATA", "DATA64", "DMAONLY", "SECTION", 
		"SECTION_INFO", "STMT", "ADDR", "BIT_DATA", "JUMP_INT", "JUMP_PC", "JUMP_MD", 
		"MODIFIER", "MULTI_MOD", "LABLE", "VARDEF", "ARRDEF", "DM_ACCESS", "PM_ACCESS", 
		"CONDITION", "IF_STMT", "VALUE_EXP", "NULL", "CHAR_LITERAL", "STR_LITERAL", 
		"DIRECTIVE", "NEGATE", "ID", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SHARCParser._LITERAL_NAMES, SHARCParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SHARCParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SHARCParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return SHARCParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SHARCParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SHARCParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SHARCParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 312;
				this.statement();
				this.state = 313;
				this.match(SHARCParser.SEMICOLON);
				}
				}
				this.state = 317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (SHARCParser.DOT_ALGIGN - 8)) | (1 << (SHARCParser.DOT_COMPRESS - 8)) | (1 << (SHARCParser.DOT_EXTERN - 8)) | (1 << (SHARCParser.DOT_FILE - 8)) | (1 << (SHARCParser.DOT_FILE_ATTR - 8)) | (1 << (SHARCParser.DOT_FORCECOMPRESS - 8)) | (1 << (SHARCParser.DOT_GLOBAL - 8)) | (1 << (SHARCParser.DOT_IMPORT - 8)) | (1 << (SHARCParser.DOT_LEFTMARGIN - 8)) | (1 << (SHARCParser.DOT_LIST - 8)) | (1 << (SHARCParser.DOT_LIST_DATA - 8)) | (1 << (SHARCParser.DOT_LIST_DATFILE - 8)) | (1 << (SHARCParser.DOT_LIST_DEFTAB - 8)) | (1 << (SHARCParser.DOT_LIST_LOCTAB - 8)) | (1 << (SHARCParser.DOT_LIST_WRAPDATA - 8)) | (1 << (SHARCParser.DOT_NEWPAGE - 8)) | (1 << (SHARCParser.DOT_NOCOMPRESS - 8)) | (1 << (SHARCParser.DOT_NOLIST_DATA - 8)) | (1 << (SHARCParser.DOT_NOLIST_DATFILE - 8)) | (1 << (SHARCParser.DOT_NOLIST_WRAPDATA - 8)) | (1 << (SHARCParser.DOT_PAGELENGTH - 8)) | (1 << (SHARCParser.DOT_PAGEWIDTH - 8)) | (1 << (SHARCParser.DOT_PRECISION - 8)) | (1 << (SHARCParser.DOT_ROUND_MINUS - 8)) | (1 << (SHARCParser.DOT_ROUND_NEAREST - 8)) | (1 << (SHARCParser.DOT_ROUND_PLUS - 8)) | (1 << (SHARCParser.DOT_ROUND_ZERO - 8)))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (SHARCParser.DOT_PREVIOUS - 40)) | (1 << (SHARCParser.DOT_SECTION - 40)) | (1 << (SHARCParser.DOT_SEGMENT - 40)) | (1 << (SHARCParser.DOT_ENDSEG - 40)) | (1 << (SHARCParser.DOT_VAR - 40)) | (1 << (SHARCParser.DOT_WEAK - 40)) | (1 << (SHARCParser.ASTAT - 40)) | (1 << (SHARCParser.B0 - 40)) | (1 << (SHARCParser.B1 - 40)) | (1 << (SHARCParser.B2 - 40)) | (1 << (SHARCParser.B3 - 40)) | (1 << (SHARCParser.B4 - 40)) | (1 << (SHARCParser.B5 - 40)) | (1 << (SHARCParser.B6 - 40)) | (1 << (SHARCParser.B7 - 40)) | (1 << (SHARCParser.B8 - 40)) | (1 << (SHARCParser.B9 - 40)) | (1 << (SHARCParser.B10 - 40)) | (1 << (SHARCParser.B11 - 40)) | (1 << (SHARCParser.B12 - 40)) | (1 << (SHARCParser.B13 - 40)) | (1 << (SHARCParser.B14 - 40)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SHARCParser.B15 - 72)) | (1 << (SHARCParser.BIT - 72)) | (1 << (SHARCParser.BITREV - 72)) | (1 << (SHARCParser.BTST - 72)) | (1 << (SHARCParser.CALL - 72)) | (1 << (SHARCParser.CJUMP - 72)) | (1 << (SHARCParser.COMP - 72)) | (1 << (SHARCParser.CURLCNTR - 72)) | (1 << (SHARCParser.DADDR - 72)) | (1 << (SHARCParser.DM - 72)))) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (SHARCParser.DO - 111)) | (1 << (SHARCParser.F0 - 111)) | (1 << (SHARCParser.F1 - 111)) | (1 << (SHARCParser.F2 - 111)) | (1 << (SHARCParser.F3 - 111)) | (1 << (SHARCParser.F4 - 111)) | (1 << (SHARCParser.F5 - 111)) | (1 << (SHARCParser.F6 - 111)) | (1 << (SHARCParser.F7 - 111)) | (1 << (SHARCParser.F8 - 111)) | (1 << (SHARCParser.F9 - 111)) | (1 << (SHARCParser.F10 - 111)) | (1 << (SHARCParser.F11 - 111)) | (1 << (SHARCParser.F12 - 111)) | (1 << (SHARCParser.F13 - 111)) | (1 << (SHARCParser.F14 - 111)) | (1 << (SHARCParser.F15 - 111)) | (1 << (SHARCParser.FADDR - 111)))) !== 0) || ((((_la - 152)) & ~0x1F) === 0 && ((1 << (_la - 152)) & ((1 << (SHARCParser.FLUSH - 152)) | (1 << (SHARCParser.I0 - 152)) | (1 << (SHARCParser.I1 - 152)) | (1 << (SHARCParser.I2 - 152)) | (1 << (SHARCParser.I3 - 152)) | (1 << (SHARCParser.I4 - 152)) | (1 << (SHARCParser.I5 - 152)) | (1 << (SHARCParser.I6 - 152)) | (1 << (SHARCParser.I7 - 152)) | (1 << (SHARCParser.I8 - 152)) | (1 << (SHARCParser.I9 - 152)) | (1 << (SHARCParser.I10 - 152)) | (1 << (SHARCParser.I11 - 152)) | (1 << (SHARCParser.I12 - 152)) | (1 << (SHARCParser.I13 - 152)) | (1 << (SHARCParser.I14 - 152)) | (1 << (SHARCParser.I15 - 152)) | (1 << (SHARCParser.IDLE - 152)) | (1 << (SHARCParser.IDLE16 - 152)))) !== 0) || ((((_la - 184)) & ~0x1F) === 0 && ((1 << (_la - 184)) & ((1 << (SHARCParser.IF - 184)) | (1 << (SHARCParser.IMASK - 184)) | (1 << (SHARCParser.IMASKP - 184)) | (1 << (SHARCParser.IRPTL - 184)) | (1 << (SHARCParser.JUMP - 184)) | (1 << (SHARCParser.L0 - 184)) | (1 << (SHARCParser.L1 - 184)) | (1 << (SHARCParser.L2 - 184)) | (1 << (SHARCParser.L3 - 184)) | (1 << (SHARCParser.L4 - 184)) | (1 << (SHARCParser.L5 - 184)) | (1 << (SHARCParser.L6 - 184)) | (1 << (SHARCParser.L7 - 184)) | (1 << (SHARCParser.L8 - 184)) | (1 << (SHARCParser.L9 - 184)) | (1 << (SHARCParser.L10 - 184)) | (1 << (SHARCParser.L11 - 184)) | (1 << (SHARCParser.L12 - 184)) | (1 << (SHARCParser.L13 - 184)) | (1 << (SHARCParser.L14 - 184)) | (1 << (SHARCParser.L15 - 184)) | (1 << (SHARCParser.LADDR - 184)) | (1 << (SHARCParser.LCNTR - 184)))) !== 0) || ((((_la - 223)) & ~0x1F) === 0 && ((1 << (_la - 223)) & ((1 << (SHARCParser.M0 - 223)) | (1 << (SHARCParser.M1 - 223)) | (1 << (SHARCParser.M2 - 223)) | (1 << (SHARCParser.M3 - 223)) | (1 << (SHARCParser.M4 - 223)) | (1 << (SHARCParser.M5 - 223)) | (1 << (SHARCParser.M6 - 223)) | (1 << (SHARCParser.M7 - 223)) | (1 << (SHARCParser.M8 - 223)) | (1 << (SHARCParser.M9 - 223)) | (1 << (SHARCParser.M10 - 223)) | (1 << (SHARCParser.M11 - 223)) | (1 << (SHARCParser.M12 - 223)) | (1 << (SHARCParser.M13 - 223)) | (1 << (SHARCParser.M14 - 223)) | (1 << (SHARCParser.M15 - 223)) | (1 << (SHARCParser.MODE1 - 223)) | (1 << (SHARCParser.MODE2 - 223)) | (1 << (SHARCParser.MODIFY - 223)) | (1 << (SHARCParser.MR0B - 223)) | (1 << (SHARCParser.MR0F - 223)) | (1 << (SHARCParser.MR1B - 223)) | (1 << (SHARCParser.MR1F - 223)) | (1 << (SHARCParser.MR2B - 223)) | (1 << (SHARCParser.MR2F - 223)) | (1 << (SHARCParser.MRB - 223)) | (1 << (SHARCParser.MRF - 223)))) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & ((1 << (SHARCParser.NOP - 261)) | (1 << (SHARCParser.PC - 261)) | (1 << (SHARCParser.PCSTK - 261)) | (1 << (SHARCParser.PCSTKP - 261)) | (1 << (SHARCParser.PM - 261)) | (1 << (SHARCParser.POP - 261)) | (1 << (SHARCParser.PUSH - 261)))) !== 0) || ((((_la - 293)) & ~0x1F) === 0 && ((1 << (_la - 293)) & ((1 << (SHARCParser.PX - 293)) | (1 << (SHARCParser.PX1 - 293)) | (1 << (SHARCParser.PX2 - 293)) | (1 << (SHARCParser.R0 - 293)) | (1 << (SHARCParser.R1 - 293)) | (1 << (SHARCParser.R2 - 293)) | (1 << (SHARCParser.R3 - 293)) | (1 << (SHARCParser.R4 - 293)) | (1 << (SHARCParser.R5 - 293)) | (1 << (SHARCParser.R6 - 293)) | (1 << (SHARCParser.R7 - 293)) | (1 << (SHARCParser.R8 - 293)) | (1 << (SHARCParser.R9 - 293)) | (1 << (SHARCParser.R10 - 293)) | (1 << (SHARCParser.R11 - 293)) | (1 << (SHARCParser.R12 - 293)) | (1 << (SHARCParser.R13 - 293)) | (1 << (SHARCParser.R14 - 293)) | (1 << (SHARCParser.R15 - 293)) | (1 << (SHARCParser.RFRAME - 293)) | (1 << (SHARCParser.RTI - 293)) | (1 << (SHARCParser.RTS - 293)))) !== 0) || ((((_la - 340)) & ~0x1F) === 0 && ((1 << (_la - 340)) & ((1 << (SHARCParser.STKY - 340)) | (1 << (SHARCParser.TCOUNT - 340)) | (1 << (SHARCParser.TPERIOD - 340)) | (1 << (SHARCParser.USTAT1 - 340)) | (1 << (SHARCParser.USTAT2 - 340)))) !== 0) || _la === SHARCParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SHARCParser.RULE_statement);
		let _la: number;
		try {
			this.state = 327;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DOT_ALGIGN:
			case SHARCParser.DOT_COMPRESS:
			case SHARCParser.DOT_EXTERN:
			case SHARCParser.DOT_FILE:
			case SHARCParser.DOT_FILE_ATTR:
			case SHARCParser.DOT_FORCECOMPRESS:
			case SHARCParser.DOT_GLOBAL:
			case SHARCParser.DOT_IMPORT:
			case SHARCParser.DOT_LEFTMARGIN:
			case SHARCParser.DOT_LIST:
			case SHARCParser.DOT_LIST_DATA:
			case SHARCParser.DOT_LIST_DATFILE:
			case SHARCParser.DOT_LIST_DEFTAB:
			case SHARCParser.DOT_LIST_LOCTAB:
			case SHARCParser.DOT_LIST_WRAPDATA:
			case SHARCParser.DOT_NEWPAGE:
			case SHARCParser.DOT_NOCOMPRESS:
			case SHARCParser.DOT_NOLIST_DATA:
			case SHARCParser.DOT_NOLIST_DATFILE:
			case SHARCParser.DOT_NOLIST_WRAPDATA:
			case SHARCParser.DOT_PAGELENGTH:
			case SHARCParser.DOT_PAGEWIDTH:
			case SHARCParser.DOT_PRECISION:
			case SHARCParser.DOT_ROUND_MINUS:
			case SHARCParser.DOT_ROUND_NEAREST:
			case SHARCParser.DOT_ROUND_PLUS:
			case SHARCParser.DOT_ROUND_ZERO:
			case SHARCParser.DOT_PREVIOUS:
			case SHARCParser.DOT_SECTION:
			case SHARCParser.DOT_SEGMENT:
			case SHARCParser.DOT_ENDSEG:
			case SHARCParser.DOT_VAR:
			case SHARCParser.DOT_WEAK:
			case SHARCParser.ASTAT:
			case SHARCParser.B0:
			case SHARCParser.B1:
			case SHARCParser.B2:
			case SHARCParser.B3:
			case SHARCParser.B4:
			case SHARCParser.B5:
			case SHARCParser.B6:
			case SHARCParser.B7:
			case SHARCParser.B8:
			case SHARCParser.B9:
			case SHARCParser.B10:
			case SHARCParser.B11:
			case SHARCParser.B12:
			case SHARCParser.B13:
			case SHARCParser.B14:
			case SHARCParser.B15:
			case SHARCParser.BIT:
			case SHARCParser.BITREV:
			case SHARCParser.BTST:
			case SHARCParser.CALL:
			case SHARCParser.CJUMP:
			case SHARCParser.COMP:
			case SHARCParser.CURLCNTR:
			case SHARCParser.DADDR:
			case SHARCParser.DM:
			case SHARCParser.DO:
			case SHARCParser.F0:
			case SHARCParser.F1:
			case SHARCParser.F2:
			case SHARCParser.F3:
			case SHARCParser.F4:
			case SHARCParser.F5:
			case SHARCParser.F6:
			case SHARCParser.F7:
			case SHARCParser.F8:
			case SHARCParser.F9:
			case SHARCParser.F10:
			case SHARCParser.F11:
			case SHARCParser.F12:
			case SHARCParser.F13:
			case SHARCParser.F14:
			case SHARCParser.F15:
			case SHARCParser.FADDR:
			case SHARCParser.FLUSH:
			case SHARCParser.I0:
			case SHARCParser.I1:
			case SHARCParser.I2:
			case SHARCParser.I3:
			case SHARCParser.I4:
			case SHARCParser.I5:
			case SHARCParser.I6:
			case SHARCParser.I7:
			case SHARCParser.I8:
			case SHARCParser.I9:
			case SHARCParser.I10:
			case SHARCParser.I11:
			case SHARCParser.I12:
			case SHARCParser.I13:
			case SHARCParser.I14:
			case SHARCParser.I15:
			case SHARCParser.IDLE:
			case SHARCParser.IDLE16:
			case SHARCParser.IF:
			case SHARCParser.IMASK:
			case SHARCParser.IMASKP:
			case SHARCParser.IRPTL:
			case SHARCParser.JUMP:
			case SHARCParser.L0:
			case SHARCParser.L1:
			case SHARCParser.L2:
			case SHARCParser.L3:
			case SHARCParser.L4:
			case SHARCParser.L5:
			case SHARCParser.L6:
			case SHARCParser.L7:
			case SHARCParser.L8:
			case SHARCParser.L9:
			case SHARCParser.L10:
			case SHARCParser.L11:
			case SHARCParser.L12:
			case SHARCParser.L13:
			case SHARCParser.L14:
			case SHARCParser.L15:
			case SHARCParser.LADDR:
			case SHARCParser.LCNTR:
			case SHARCParser.M0:
			case SHARCParser.M1:
			case SHARCParser.M2:
			case SHARCParser.M3:
			case SHARCParser.M4:
			case SHARCParser.M5:
			case SHARCParser.M6:
			case SHARCParser.M7:
			case SHARCParser.M8:
			case SHARCParser.M9:
			case SHARCParser.M10:
			case SHARCParser.M11:
			case SHARCParser.M12:
			case SHARCParser.M13:
			case SHARCParser.M14:
			case SHARCParser.M15:
			case SHARCParser.MODE1:
			case SHARCParser.MODE2:
			case SHARCParser.MODIFY:
			case SHARCParser.MR0B:
			case SHARCParser.MR0F:
			case SHARCParser.MR1B:
			case SHARCParser.MR1F:
			case SHARCParser.MR2B:
			case SHARCParser.MR2F:
			case SHARCParser.MRB:
			case SHARCParser.MRF:
			case SHARCParser.NOP:
			case SHARCParser.PC:
			case SHARCParser.PCSTK:
			case SHARCParser.PCSTKP:
			case SHARCParser.PM:
			case SHARCParser.POP:
			case SHARCParser.PUSH:
			case SHARCParser.PX:
			case SHARCParser.PX1:
			case SHARCParser.PX2:
			case SHARCParser.R0:
			case SHARCParser.R1:
			case SHARCParser.R2:
			case SHARCParser.R3:
			case SHARCParser.R4:
			case SHARCParser.R5:
			case SHARCParser.R6:
			case SHARCParser.R7:
			case SHARCParser.R8:
			case SHARCParser.R9:
			case SHARCParser.R10:
			case SHARCParser.R11:
			case SHARCParser.R12:
			case SHARCParser.R13:
			case SHARCParser.R14:
			case SHARCParser.R15:
			case SHARCParser.RFRAME:
			case SHARCParser.RTI:
			case SHARCParser.RTS:
			case SHARCParser.STKY:
			case SHARCParser.TCOUNT:
			case SHARCParser.TPERIOD:
			case SHARCParser.USTAT1:
			case SHARCParser.USTAT2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 319;
				this.stmt_atom();
				}
				break;
			case SHARCParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 320;
					this.match(SHARCParser.ID);
					this.state = 321;
					this.match(SHARCParser.COLON);
					}
					}
					this.state = 324;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SHARCParser.ID);
				this.state = 326;
				this.stmt_atom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt_atom(): Stmt_atomContext {
		let _localctx: Stmt_atomContext = new Stmt_atomContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SHARCParser.RULE_stmt_atom);
		try {
			this.state = 334;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DOT_VAR:
			case SHARCParser.ASTAT:
			case SHARCParser.B0:
			case SHARCParser.B1:
			case SHARCParser.B2:
			case SHARCParser.B3:
			case SHARCParser.B4:
			case SHARCParser.B5:
			case SHARCParser.B6:
			case SHARCParser.B7:
			case SHARCParser.B8:
			case SHARCParser.B9:
			case SHARCParser.B10:
			case SHARCParser.B11:
			case SHARCParser.B12:
			case SHARCParser.B13:
			case SHARCParser.B14:
			case SHARCParser.B15:
			case SHARCParser.BIT:
			case SHARCParser.BITREV:
			case SHARCParser.BTST:
			case SHARCParser.CALL:
			case SHARCParser.CJUMP:
			case SHARCParser.COMP:
			case SHARCParser.CURLCNTR:
			case SHARCParser.DADDR:
			case SHARCParser.DM:
			case SHARCParser.DO:
			case SHARCParser.F0:
			case SHARCParser.F1:
			case SHARCParser.F2:
			case SHARCParser.F3:
			case SHARCParser.F4:
			case SHARCParser.F5:
			case SHARCParser.F6:
			case SHARCParser.F7:
			case SHARCParser.F8:
			case SHARCParser.F9:
			case SHARCParser.F10:
			case SHARCParser.F11:
			case SHARCParser.F12:
			case SHARCParser.F13:
			case SHARCParser.F14:
			case SHARCParser.F15:
			case SHARCParser.FADDR:
			case SHARCParser.FLUSH:
			case SHARCParser.I0:
			case SHARCParser.I1:
			case SHARCParser.I2:
			case SHARCParser.I3:
			case SHARCParser.I4:
			case SHARCParser.I5:
			case SHARCParser.I6:
			case SHARCParser.I7:
			case SHARCParser.I8:
			case SHARCParser.I9:
			case SHARCParser.I10:
			case SHARCParser.I11:
			case SHARCParser.I12:
			case SHARCParser.I13:
			case SHARCParser.I14:
			case SHARCParser.I15:
			case SHARCParser.IDLE:
			case SHARCParser.IDLE16:
			case SHARCParser.IF:
			case SHARCParser.IMASK:
			case SHARCParser.IMASKP:
			case SHARCParser.IRPTL:
			case SHARCParser.JUMP:
			case SHARCParser.L0:
			case SHARCParser.L1:
			case SHARCParser.L2:
			case SHARCParser.L3:
			case SHARCParser.L4:
			case SHARCParser.L5:
			case SHARCParser.L6:
			case SHARCParser.L7:
			case SHARCParser.L8:
			case SHARCParser.L9:
			case SHARCParser.L10:
			case SHARCParser.L11:
			case SHARCParser.L12:
			case SHARCParser.L13:
			case SHARCParser.L14:
			case SHARCParser.L15:
			case SHARCParser.LADDR:
			case SHARCParser.LCNTR:
			case SHARCParser.M0:
			case SHARCParser.M1:
			case SHARCParser.M2:
			case SHARCParser.M3:
			case SHARCParser.M4:
			case SHARCParser.M5:
			case SHARCParser.M6:
			case SHARCParser.M7:
			case SHARCParser.M8:
			case SHARCParser.M9:
			case SHARCParser.M10:
			case SHARCParser.M11:
			case SHARCParser.M12:
			case SHARCParser.M13:
			case SHARCParser.M14:
			case SHARCParser.M15:
			case SHARCParser.MODE1:
			case SHARCParser.MODE2:
			case SHARCParser.MODIFY:
			case SHARCParser.MR0B:
			case SHARCParser.MR0F:
			case SHARCParser.MR1B:
			case SHARCParser.MR1F:
			case SHARCParser.MR2B:
			case SHARCParser.MR2F:
			case SHARCParser.MRB:
			case SHARCParser.MRF:
			case SHARCParser.NOP:
			case SHARCParser.PC:
			case SHARCParser.PCSTK:
			case SHARCParser.PCSTKP:
			case SHARCParser.PM:
			case SHARCParser.POP:
			case SHARCParser.PUSH:
			case SHARCParser.PX:
			case SHARCParser.PX1:
			case SHARCParser.PX2:
			case SHARCParser.R0:
			case SHARCParser.R1:
			case SHARCParser.R2:
			case SHARCParser.R3:
			case SHARCParser.R4:
			case SHARCParser.R5:
			case SHARCParser.R6:
			case SHARCParser.R7:
			case SHARCParser.R8:
			case SHARCParser.R9:
			case SHARCParser.R10:
			case SHARCParser.R11:
			case SHARCParser.R12:
			case SHARCParser.R13:
			case SHARCParser.R14:
			case SHARCParser.R15:
			case SHARCParser.RFRAME:
			case SHARCParser.RTI:
			case SHARCParser.RTS:
			case SHARCParser.STKY:
			case SHARCParser.TCOUNT:
			case SHARCParser.TPERIOD:
			case SHARCParser.USTAT1:
			case SHARCParser.USTAT2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 329;
				this.stmt();
				}
				break;
			case SHARCParser.DOT_SECTION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 330;
				this.sec();
				}
				break;
			case SHARCParser.DOT_SEGMENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 331;
				this.seg();
				}
				break;
			case SHARCParser.DOT_ENDSEG:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 332;
				this.end_seg();
				}
				break;
			case SHARCParser.DOT_ALGIGN:
			case SHARCParser.DOT_COMPRESS:
			case SHARCParser.DOT_EXTERN:
			case SHARCParser.DOT_FILE:
			case SHARCParser.DOT_FILE_ATTR:
			case SHARCParser.DOT_FORCECOMPRESS:
			case SHARCParser.DOT_GLOBAL:
			case SHARCParser.DOT_IMPORT:
			case SHARCParser.DOT_LEFTMARGIN:
			case SHARCParser.DOT_LIST:
			case SHARCParser.DOT_LIST_DATA:
			case SHARCParser.DOT_LIST_DATFILE:
			case SHARCParser.DOT_LIST_DEFTAB:
			case SHARCParser.DOT_LIST_LOCTAB:
			case SHARCParser.DOT_LIST_WRAPDATA:
			case SHARCParser.DOT_NEWPAGE:
			case SHARCParser.DOT_NOCOMPRESS:
			case SHARCParser.DOT_NOLIST_DATA:
			case SHARCParser.DOT_NOLIST_DATFILE:
			case SHARCParser.DOT_NOLIST_WRAPDATA:
			case SHARCParser.DOT_PAGELENGTH:
			case SHARCParser.DOT_PAGEWIDTH:
			case SHARCParser.DOT_PRECISION:
			case SHARCParser.DOT_ROUND_MINUS:
			case SHARCParser.DOT_ROUND_NEAREST:
			case SHARCParser.DOT_ROUND_PLUS:
			case SHARCParser.DOT_ROUND_ZERO:
			case SHARCParser.DOT_PREVIOUS:
			case SHARCParser.DOT_WEAK:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 333;
				this.directive_exp();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sec(): SecContext {
		let _localctx: SecContext = new SecContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SHARCParser.RULE_sec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			this.match(SHARCParser.DOT_SECTION);
			this.state = 337;
			this.seg_qualifier();
			this.state = 338;
			this.match(SHARCParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public seg(): SegContext {
		let _localctx: SegContext = new SegContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SHARCParser.RULE_seg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.match(SHARCParser.DOT_SEGMENT);
			this.state = 341;
			this.seg_qualifier();
			this.state = 342;
			this.match(SHARCParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public end_seg(): End_segContext {
		let _localctx: End_segContext = new End_segContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SHARCParser.RULE_end_seg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this.match(SHARCParser.DOT_ENDSEG);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public seg_qualifier(): Seg_qualifierContext {
		let _localctx: Seg_qualifierContext = new Seg_qualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SHARCParser.RULE_seg_qualifier);
		try {
			this.state = 361;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 346;
				this.seg_qualifier1();
				this.state = 349;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 347;
					this.seg_qualifier2();
					}
					break;

				case 2:
					{
					this.state = 348;
					this.seg_qualifier3();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 351;
				this.seg_qualifier2();
				this.state = 354;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 352;
					this.seg_qualifier1();
					}
					break;

				case 2:
					{
					this.state = 353;
					this.seg_qualifier3();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 356;
				this.seg_qualifier3();
				this.state = 359;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 357;
					this.seg_qualifier1();
					}
					break;

				case 2:
					{
					this.state = 358;
					this.seg_qualifier2();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public seg_qualifier1(): Seg_qualifier1Context {
		let _localctx: Seg_qualifier1Context = new Seg_qualifier1Context(this._ctx, this.state);
		this.enterRule(_localctx, 14, SHARCParser.RULE_seg_qualifier1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 363;
			this.match(SHARCParser.DIV);
			this.state = 366;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.PM:
			case SHARCParser.CODE:
				{
				this.state = 364;
				this.seg_qualifier_1();
				}
				break;
			case SHARCParser.DM:
			case SHARCParser.DATA:
			case SHARCParser.DATA64:
				{
				this.state = 365;
				this.seg_qualifier_2();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public seg_qualifier2(): Seg_qualifier2Context {
		let _localctx: Seg_qualifier2Context = new Seg_qualifier2Context(this._ctx, this.state);
		this.enterRule(_localctx, 16, SHARCParser.RULE_seg_qualifier2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 368;
			this.match(SHARCParser.DIV);
			this.state = 369;
			this.seg_qualifier_3();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public seg_qualifier3(): Seg_qualifier3Context {
		let _localctx: Seg_qualifier3Context = new Seg_qualifier3Context(this._ctx, this.state);
		this.enterRule(_localctx, 18, SHARCParser.RULE_seg_qualifier3);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 371;
			this.match(SHARCParser.DIV);
			this.state = 372;
			this.match(SHARCParser.DMAONLY);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public seg_qualifier_1(): Seg_qualifier_1Context {
		let _localctx: Seg_qualifier_1Context = new Seg_qualifier_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 20, SHARCParser.RULE_seg_qualifier_1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			_la = this._input.LA(1);
			if (!(_la === SHARCParser.PM || _la === SHARCParser.CODE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public seg_qualifier_2(): Seg_qualifier_2Context {
		let _localctx: Seg_qualifier_2Context = new Seg_qualifier_2Context(this._ctx, this.state);
		this.enterRule(_localctx, 22, SHARCParser.RULE_seg_qualifier_2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			_la = this._input.LA(1);
			if (!(_la === SHARCParser.DM || _la === SHARCParser.DATA || _la === SHARCParser.DATA64)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public seg_qualifier_3(): Seg_qualifier_3Context {
		let _localctx: Seg_qualifier_3Context = new Seg_qualifier_3Context(this._ctx, this.state);
		this.enterRule(_localctx, 24, SHARCParser.RULE_seg_qualifier_3);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			_la = this._input.LA(1);
			if (!(((((_la - 395)) & ~0x1F) === 0 && ((1 << (_la - 395)) & ((1 << (SHARCParser.NO_INIT - 395)) | (1 << (SHARCParser.ZERO_INIT - 395)) | (1 << (SHARCParser.RUNTIME_INIT - 395)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SHARCParser.RULE_stmt);
		try {
			this.state = 387;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 380;
				this.compute();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 381;
				this.flow_control_exp();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 382;
				this.imm_mov_exp();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 383;
				this.misc_exp();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 384;
				this.declaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 385;
				this.if_compute_mov();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 386;
				this.compute_mov_exp();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SHARCParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.match(SHARCParser.DOT_VAR);
			this.state = 395;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 390;
				this.declaration_exp1();
				}
				break;

			case 2:
				{
				this.state = 391;
				this.declaration_exp2();
				}
				break;

			case 3:
				{
				this.state = 392;
				this.declaration_exp3();
				}
				break;

			case 4:
				{
				this.state = 393;
				this.declaration_exp4();
				}
				break;

			case 5:
				{
				this.state = 394;
				this.declaration_exp5();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration_exp1(): Declaration_exp1Context {
		let _localctx: Declaration_exp1Context = new Declaration_exp1Context(this._ctx, this.state);
		this.enterRule(_localctx, 30, SHARCParser.RULE_declaration_exp1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.match(SHARCParser.ID);
			this.state = 402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SHARCParser.COMMA) {
				{
				{
				this.state = 398;
				this.match(SHARCParser.COMMA);
				this.state = 399;
				this.match(SHARCParser.ID);
				}
				}
				this.state = 404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration_exp2(): Declaration_exp2Context {
		let _localctx: Declaration_exp2Context = new Declaration_exp2Context(this._ctx, this.state);
		this.enterRule(_localctx, 32, SHARCParser.RULE_declaration_exp2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			this.match(SHARCParser.EQU);
			this.state = 406;
			this.initExpression();
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SHARCParser.COMMA) {
				{
				{
				this.state = 407;
				this.match(SHARCParser.COMMA);
				this.state = 408;
				this.initExpression();
				}
				}
				this.state = 413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration_exp3(): Declaration_exp3Context {
		let _localctx: Declaration_exp3Context = new Declaration_exp3Context(this._ctx, this.state);
		this.enterRule(_localctx, 34, SHARCParser.RULE_declaration_exp3);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this.match(SHARCParser.ID);
			this.state = 415;
			this.match(SHARCParser.LBRACKET);
			this.state = 416;
			this.match(SHARCParser.RBRACKET);
			this.state = 419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SHARCParser.EQU) {
				{
				this.state = 417;
				this.match(SHARCParser.EQU);
				this.state = 418;
				this.declaration_exp_f2();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration_exp4(): Declaration_exp4Context {
		let _localctx: Declaration_exp4Context = new Declaration_exp4Context(this._ctx, this.state);
		this.enterRule(_localctx, 36, SHARCParser.RULE_declaration_exp4);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.match(SHARCParser.ID);
			this.state = 422;
			this.match(SHARCParser.LBRACKET);
			this.state = 423;
			this.value_exp();
			this.state = 424;
			this.match(SHARCParser.RBRACKET);
			this.state = 427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SHARCParser.EQU) {
				{
				this.state = 425;
				this.match(SHARCParser.EQU);
				this.state = 426;
				this.declaration_exp_f2();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration_exp5(): Declaration_exp5Context {
		let _localctx: Declaration_exp5Context = new Declaration_exp5Context(this._ctx, this.state);
		this.enterRule(_localctx, 38, SHARCParser.RULE_declaration_exp5);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.match(SHARCParser.ID);
			this.state = 430;
			this.match(SHARCParser.EQU);
			this.state = 431;
			this.value_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration_exp_f1(): Declaration_exp_f1Context {
		let _localctx: Declaration_exp_f1Context = new Declaration_exp_f1Context(this._ctx, this.state);
		this.enterRule(_localctx, 40, SHARCParser.RULE_declaration_exp_f1);
		let _la: number;
		try {
			this.state = 442;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.CharLiteral:
			case SHARCParser.INT:
			case SHARCParser.LENGTH:
			case SHARCParser.MINUS:
			case SHARCParser.LPARENTHESE:
			case SHARCParser.AT:
			case SHARCParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 433;
				this.initExpression();
				this.state = 438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SHARCParser.COMMA) {
					{
					{
					this.state = 434;
					this.match(SHARCParser.COMMA);
					this.state = 435;
					this.initExpression();
					}
					}
					this.state = 440;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case SHARCParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 441;
				this.match(SHARCParser.StringLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration_exp_f2(): Declaration_exp_f2Context {
		let _localctx: Declaration_exp_f2Context = new Declaration_exp_f2Context(this._ctx, this.state);
		this.enterRule(_localctx, 42, SHARCParser.RULE_declaration_exp_f2);
		try {
			this.state = 449;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 444;
				this.match(SHARCParser.LBRACE);
				this.state = 445;
				this.declaration_exp_f1();
				this.state = 446;
				this.match(SHARCParser.RBRACE);
				}
				break;
			case SHARCParser.StringLiteral:
			case SHARCParser.CharLiteral:
			case SHARCParser.INT:
			case SHARCParser.LENGTH:
			case SHARCParser.MINUS:
			case SHARCParser.LPARENTHESE:
			case SHARCParser.AT:
			case SHARCParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 448;
				this.declaration_exp_f1();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initExpression(): InitExpressionContext {
		let _localctx: InitExpressionContext = new InitExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SHARCParser.RULE_initExpression);
		try {
			this.state = 453;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.INT:
			case SHARCParser.LENGTH:
			case SHARCParser.MINUS:
			case SHARCParser.LPARENTHESE:
			case SHARCParser.AT:
			case SHARCParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 451;
				this.value_exp();
				}
				break;
			case SHARCParser.CharLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 452;
				this.match(SHARCParser.CharLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var_addr(): Var_addrContext {
		let _localctx: Var_addrContext = new Var_addrContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SHARCParser.RULE_var_addr);
		try {
			this.state = 461;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 455;
				this.match(SHARCParser.AT);
				this.state = 456;
				this.match(SHARCParser.ID);
				}
				break;
			case SHARCParser.LENGTH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 457;
				this.match(SHARCParser.LENGTH);
				this.state = 458;
				this.match(SHARCParser.LPARENTHESE);
				this.state = 459;
				this.match(SHARCParser.ID);
				this.state = 460;
				this.match(SHARCParser.RPARENTHESE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value_exp(): Value_expContext {
		let _localctx: Value_expContext = new Value_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SHARCParser.RULE_value_exp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this.value_exp2();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value_exp2(): Value_exp2Context {
		let _localctx: Value_exp2Context = new Value_exp2Context(this._ctx, this.state);
		this.enterRule(_localctx, 50, SHARCParser.RULE_value_exp2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this.term();
			this.state = 470;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 377)) & ~0x1F) === 0 && ((1 << (_la - 377)) & ((1 << (SHARCParser.PLUS - 377)) | (1 << (SHARCParser.MINUS - 377)) | (1 << (SHARCParser.MULT - 377)) | (1 << (SHARCParser.DIV - 377)) | (1 << (SHARCParser.DIV_MOD - 377)) | (1 << (SHARCParser.I_OR - 377)) | (1 << (SHARCParser.I_XOR - 377)))) !== 0)) {
				{
				{
				this.state = 466;
				_la = this._input.LA(1);
				if (!(((((_la - 377)) & ~0x1F) === 0 && ((1 << (_la - 377)) & ((1 << (SHARCParser.PLUS - 377)) | (1 << (SHARCParser.MINUS - 377)) | (1 << (SHARCParser.MULT - 377)) | (1 << (SHARCParser.DIV - 377)) | (1 << (SHARCParser.DIV_MOD - 377)) | (1 << (SHARCParser.I_OR - 377)) | (1 << (SHARCParser.I_XOR - 377)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 467;
				this.term();
				}
				}
				this.state = 472;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SHARCParser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SHARCParser.MINUS) {
				{
				this.state = 473;
				_localctx._op = this.match(SHARCParser.MINUS);
				}
			}

			this.state = 476;
			this.factor();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SHARCParser.RULE_factor);
		try {
			this.state = 483;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.INT:
			case SHARCParser.LENGTH:
			case SHARCParser.AT:
			case SHARCParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 478;
				this.atom();
				}
				break;
			case SHARCParser.LPARENTHESE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 479;
				this.match(SHARCParser.LPARENTHESE);
				this.state = 480;
				this.value_exp2();
				this.state = 481;
				this.match(SHARCParser.RPARENTHESE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SHARCParser.RULE_atom);
		try {
			this.state = 488;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.INT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 485;
				this.match(SHARCParser.INT);
				}
				break;
			case SHARCParser.LENGTH:
			case SHARCParser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 486;
				this.var_addr();
				}
				break;
			case SHARCParser.ID:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 487;
				this.match(SHARCParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compute(): ComputeContext {
		let _localctx: ComputeContext = new ComputeContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SHARCParser.RULE_compute);
		try {
			this.state = 495;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 490;
				this.dual_op();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 491;
				this.fixpoint_alu_op();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 492;
				this.floating_point_alu_op();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 493;
				this.multi_op();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 494;
				this.shifter_op();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_compute_mov(): If_compute_movContext {
		let _localctx: If_compute_movContext = new If_compute_movContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SHARCParser.RULE_if_compute_mov);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this.match(SHARCParser.IF);
			this.state = 498;
			this.condition();
			this.state = 499;
			this.if_compute_mov_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_compute_mov_exp(): If_compute_mov_expContext {
		let _localctx: If_compute_mov_expContext = new If_compute_mov_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SHARCParser.RULE_if_compute_mov_exp);
		try {
			this.state = 503;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 501;
				this.compute_mov_exp();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 502;
				this.compute();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compute_mov_exp(): Compute_mov_expContext {
		let _localctx: Compute_mov_expContext = new Compute_mov_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SHARCParser.RULE_compute_mov_exp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 505;
				this.compute();
				this.state = 506;
				this.match(SHARCParser.COMMA);
				}
				break;
			}
			this.state = 521;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 510;
				this.mov_exp_1();
				}
				break;

			case 2:
				{
				this.state = 511;
				this.mov_exp_3a();
				}
				break;

			case 3:
				{
				this.state = 512;
				this.mov_exp_3b();
				}
				break;

			case 4:
				{
				this.state = 513;
				this.mov_exp_3c();
				}
				break;

			case 5:
				{
				this.state = 514;
				this.mov_exp_3d();
				}
				break;

			case 6:
				{
				this.state = 515;
				this.mov_exp_4a();
				}
				break;

			case 7:
				{
				this.state = 516;
				this.mov_exp_4b();
				}
				break;

			case 8:
				{
				this.state = 517;
				this.mov_exp_4c();
				}
				break;

			case 9:
				{
				this.state = 518;
				this.mov_exp_4d();
				}
				break;

			case 10:
				{
				this.state = 519;
				this.mov_exp_5();
				}
				break;

			case 11:
				{
				this.state = 520;
				this.mov_exp_7();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mov_exp_1(): Mov_exp_1Context {
		let _localctx: Mov_exp_1Context = new Mov_exp_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 66, SHARCParser.RULE_mov_exp_1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.mov_exp_1_1();
			this.state = 524;
			this.match(SHARCParser.COMMA);
			this.state = 525;
			this.mov_exp_1_2();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mov_exp_1_1(): Mov_exp_1_1Context {
		let _localctx: Mov_exp_1_1Context = new Mov_exp_1_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 68, SHARCParser.RULE_mov_exp_1_1);
		try {
			this.state = 535;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 527;
				this.mem_addr_dm_ia_mb();
				this.state = 528;
				this.match(SHARCParser.EQU);
				this.state = 529;
				this.d_reg();
				}
				break;
			case SHARCParser.F0:
			case SHARCParser.F1:
			case SHARCParser.F2:
			case SHARCParser.F3:
			case SHARCParser.F4:
			case SHARCParser.F5:
			case SHARCParser.F6:
			case SHARCParser.F7:
			case SHARCParser.F8:
			case SHARCParser.F9:
			case SHARCParser.F10:
			case SHARCParser.F11:
			case SHARCParser.F12:
			case SHARCParser.F13:
			case SHARCParser.F14:
			case SHARCParser.F15:
			case SHARCParser.R0:
			case SHARCParser.R1:
			case SHARCParser.R2:
			case SHARCParser.R3:
			case SHARCParser.R4:
			case SHARCParser.R5:
			case SHARCParser.R6:
			case SHARCParser.R7:
			case SHARCParser.R8:
			case SHARCParser.R9:
			case SHARCParser.R10:
			case SHARCParser.R11:
			case SHARCParser.R12:
			case SHARCParser.R13:
			case SHARCParser.R14:
			case SHARCParser.R15:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 531;
				this.d_reg();
				this.state = 532;
				this.match(SHARCParser.EQU);
				this.state = 533;
				this.mem_addr_dm_ia_mb();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mov_exp_1_2(): Mov_exp_1_2Context {
		let _localctx: Mov_exp_1_2Context = new Mov_exp_1_2Context(this._ctx, this.state);
		this.enterRule(_localctx, 70, SHARCParser.RULE_mov_exp_1_2);
		try {
			this.state = 545;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.PM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 537;
				this.mem_addr_pm_ic_md();
				this.state = 538;
				this.match(SHARCParser.EQU);
				this.state = 539;
				this.d_reg();
				}
				break;
			case SHARCParser.F0:
			case SHARCParser.F1:
			case SHARCParser.F2:
			case SHARCParser.F3:
			case SHARCParser.F4:
			case SHARCParser.F5:
			case SHARCParser.F6:
			case SHARCParser.F7:
			case SHARCParser.F8:
			case SHARCParser.F9:
			case SHARCParser.F10:
			case SHARCParser.F11:
			case SHARCParser.F12:
			case SHARCParser.F13:
			case SHARCParser.F14:
			case SHARCParser.F15:
			case SHARCParser.R0:
			case SHARCParser.R1:
			case SHARCParser.R2:
			case SHARCParser.R3:
			case SHARCParser.R4:
			case SHARCParser.R5:
			case SHARCParser.R6:
			case SHARCParser.R7:
			case SHARCParser.R8:
			case SHARCParser.R9:
			case SHARCParser.R10:
			case SHARCParser.R11:
			case SHARCParser.R12:
			case SHARCParser.R13:
			case SHARCParser.R14:
			case SHARCParser.R15:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 541;
				this.d_reg();
				this.state = 542;
				this.match(SHARCParser.EQU);
				this.state = 543;
				this.mem_addr_pm_ic_md();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mov_exp_3a(): Mov_exp_3aContext {
		let _localctx: Mov_exp_3aContext = new Mov_exp_3aContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SHARCParser.RULE_mov_exp_3a);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DM:
				{
				this.state = 547;
				this.mem_addr_dm_ia_mb();
				}
				break;
			case SHARCParser.PM:
				{
				this.state = 548;
				this.mem_addr_pm_ic_md();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 551;
			this.match(SHARCParser.EQU);
			this.state = 552;
			this.u_reg();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mov_exp_3b(): Mov_exp_3bContext {
		let _localctx: Mov_exp_3bContext = new Mov_exp_3bContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SHARCParser.RULE_mov_exp_3b);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 556;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DM:
				{
				this.state = 554;
				this.mem_addr_dm_mb_ia();
				}
				break;
			case SHARCParser.PM:
				{
				this.state = 555;
				this.mem_addr_pm_md_ic();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 558;
			this.match(SHARCParser.EQU);
			this.state = 559;
			this.u_reg();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mov_exp_3c(): Mov_exp_3cContext {
		let _localctx: Mov_exp_3cContext = new Mov_exp_3cContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SHARCParser.RULE_mov_exp_3c);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			this.u_reg();
			this.state = 562;
			this.match(SHARCParser.EQU);
			this.state = 565;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DM:
				{
				this.state = 563;
				this.mem_addr_dm_ia_mb();
				}
				break;
			case SHARCParser.PM:
				{
				this.state = 564;
				this.mem_addr_pm_ic_md();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mov_exp_3d(): Mov_exp_3dContext {
		let _localctx: Mov_exp_3dContext = new Mov_exp_3dContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SHARCParser.RULE_mov_exp_3d);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 567;
			this.u_reg();
			this.state = 568;
			this.match(SHARCParser.EQU);
			this.state = 571;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DM:
				{
				this.state = 569;
				this.mem_addr_dm_mb_ia();
				}
				break;
			case SHARCParser.PM:
				{
				this.state = 570;
				this.mem_addr_pm_md_ic();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mov_exp_4a(): Mov_exp_4aContext {
		let _localctx: Mov_exp_4aContext = new Mov_exp_4aContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SHARCParser.RULE_mov_exp_4a);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 575;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DM:
				{
				this.state = 573;
				this.mem_addr_dm_ia_int();
				}
				break;
			case SHARCParser.PM:
				{
				this.state = 574;
				this.mem_addr_pm_ic_int();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 577;
			this.match(SHARCParser.EQU);
			this.state = 578;
			this.d_reg();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mov_exp_4b(): Mov_exp_4bContext {
		let _localctx: Mov_exp_4bContext = new Mov_exp_4bContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SHARCParser.RULE_mov_exp_4b);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 580;
			this.imm_mov_15a();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mov_exp_4c(): Mov_exp_4cContext {
		let _localctx: Mov_exp_4cContext = new Mov_exp_4cContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SHARCParser.RULE_mov_exp_4c);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 582;
			this.d_reg();
			this.state = 583;
			this.match(SHARCParser.EQU);
			this.state = 586;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DM:
				{
				this.state = 584;
				this.mem_addr_dm_ia_int();
				}
				break;
			case SHARCParser.PM:
				{
				this.state = 585;
				this.mem_addr_pm_ic_int();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mov_exp_4d(): Mov_exp_4dContext {
		let _localctx: Mov_exp_4dContext = new Mov_exp_4dContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SHARCParser.RULE_mov_exp_4d);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this.imm_mov_15b();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mov_exp_5(): Mov_exp_5Context {
		let _localctx: Mov_exp_5Context = new Mov_exp_5Context(this._ctx, this.state);
		this.enterRule(_localctx, 88, SHARCParser.RULE_mov_exp_5);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 590;
			this.u_reg2();
			this.state = 591;
			this.match(SHARCParser.EQU);
			this.state = 592;
			this.u_reg();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mov_exp_6a(): Mov_exp_6aContext {
		let _localctx: Mov_exp_6aContext = new Mov_exp_6aContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SHARCParser.RULE_mov_exp_6a);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 596;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DM:
				{
				this.state = 594;
				this.mem_addr_dm_ia_mb();
				}
				break;
			case SHARCParser.PM:
				{
				this.state = 595;
				this.mem_addr_pm_ic_md();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 598;
			this.match(SHARCParser.EQU);
			this.state = 599;
			this.d_reg();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mov_exp_6b(): Mov_exp_6bContext {
		let _localctx: Mov_exp_6bContext = new Mov_exp_6bContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SHARCParser.RULE_mov_exp_6b);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this.d_reg();
			this.state = 602;
			this.match(SHARCParser.EQU);
			this.state = 605;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DM:
				{
				this.state = 603;
				this.mem_addr_dm_ia_mb();
				}
				break;
			case SHARCParser.PM:
				{
				this.state = 604;
				this.mem_addr_pm_ic_md();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mov_exp_7(): Mov_exp_7Context {
		let _localctx: Mov_exp_7Context = new Mov_exp_7Context(this._ctx, this.state);
		this.enterRule(_localctx, 94, SHARCParser.RULE_mov_exp_7);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this.match(SHARCParser.MODIFY);
			this.state = 620;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 608;
				this.match(SHARCParser.LPARENTHESE);
				this.state = 609;
				this.ia();
				this.state = 610;
				this.match(SHARCParser.COMMA);
				this.state = 611;
				this.mb();
				this.state = 612;
				this.match(SHARCParser.RPARENTHESE);
				}
				break;

			case 2:
				{
				this.state = 614;
				this.match(SHARCParser.LPARENTHESE);
				this.state = 615;
				this.ic();
				this.state = 616;
				this.match(SHARCParser.COMMA);
				this.state = 617;
				this.md();
				this.state = 618;
				this.match(SHARCParser.RPARENTHESE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_ia_mb(): Mem_addr_ia_mbContext {
		let _localctx: Mem_addr_ia_mbContext = new Mem_addr_ia_mbContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, SHARCParser.RULE_mem_addr_ia_mb);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 622;
			this.match(SHARCParser.LPARENTHESE);
			this.state = 623;
			this.ia();
			this.state = 624;
			this.match(SHARCParser.COMMA);
			this.state = 625;
			this.mb();
			this.state = 626;
			this.match(SHARCParser.RPARENTHESE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_ic_md(): Mem_addr_ic_mdContext {
		let _localctx: Mem_addr_ic_mdContext = new Mem_addr_ic_mdContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SHARCParser.RULE_mem_addr_ic_md);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 628;
			this.match(SHARCParser.LPARENTHESE);
			this.state = 629;
			this.ic();
			this.state = 630;
			this.match(SHARCParser.COMMA);
			this.state = 631;
			this.md();
			this.state = 632;
			this.match(SHARCParser.RPARENTHESE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_md_ic(): Mem_addr_md_icContext {
		let _localctx: Mem_addr_md_icContext = new Mem_addr_md_icContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, SHARCParser.RULE_mem_addr_md_ic);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this.match(SHARCParser.LPARENTHESE);
			this.state = 635;
			this.md();
			this.state = 636;
			this.match(SHARCParser.COMMA);
			this.state = 637;
			this.ic();
			this.state = 638;
			this.match(SHARCParser.RPARENTHESE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_mb_ia(): Mem_addr_mb_iaContext {
		let _localctx: Mem_addr_mb_iaContext = new Mem_addr_mb_iaContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, SHARCParser.RULE_mem_addr_mb_ia);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
			this.match(SHARCParser.LPARENTHESE);
			this.state = 641;
			this.mb();
			this.state = 642;
			this.match(SHARCParser.COMMA);
			this.state = 643;
			this.ia();
			this.state = 644;
			this.match(SHARCParser.RPARENTHESE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_ia_int(): Mem_addr_ia_intContext {
		let _localctx: Mem_addr_ia_intContext = new Mem_addr_ia_intContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, SHARCParser.RULE_mem_addr_ia_int);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 646;
			this.match(SHARCParser.LPARENTHESE);
			this.state = 647;
			this.ia();
			this.state = 648;
			this.match(SHARCParser.COMMA);
			this.state = 649;
			this.value_exp();
			this.state = 650;
			this.match(SHARCParser.RPARENTHESE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_ic_int(): Mem_addr_ic_intContext {
		let _localctx: Mem_addr_ic_intContext = new Mem_addr_ic_intContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, SHARCParser.RULE_mem_addr_ic_int);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			this.match(SHARCParser.LPARENTHESE);
			this.state = 653;
			this.ic();
			this.state = 654;
			this.match(SHARCParser.COMMA);
			this.state = 655;
			this.value_exp();
			this.state = 656;
			this.match(SHARCParser.RPARENTHESE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_int_ia(): Mem_addr_int_iaContext {
		let _localctx: Mem_addr_int_iaContext = new Mem_addr_int_iaContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, SHARCParser.RULE_mem_addr_int_ia);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 658;
			this.match(SHARCParser.LPARENTHESE);
			this.state = 659;
			this.value_exp();
			this.state = 660;
			this.match(SHARCParser.COMMA);
			this.state = 661;
			this.ia();
			this.state = 662;
			this.match(SHARCParser.RPARENTHESE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_int_ic(): Mem_addr_int_icContext {
		let _localctx: Mem_addr_int_icContext = new Mem_addr_int_icContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, SHARCParser.RULE_mem_addr_int_ic);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 664;
			this.match(SHARCParser.LPARENTHESE);
			this.state = 665;
			this.value_exp();
			this.state = 666;
			this.match(SHARCParser.COMMA);
			this.state = 667;
			this.ic();
			this.state = 668;
			this.match(SHARCParser.RPARENTHESE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_int(): Mem_addr_intContext {
		let _localctx: Mem_addr_intContext = new Mem_addr_intContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, SHARCParser.RULE_mem_addr_int);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_int_(): Mem_addr_int_Context {
		let _localctx: Mem_addr_int_Context = new Mem_addr_int_Context(this._ctx, this.state);
		this.enterRule(_localctx, 114, SHARCParser.RULE_mem_addr_int_);
		let _la: number;
		try {
			this.state = 677;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 672;
				this.atom();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 673;
				this.atom();
				this.state = 674;
				_la = this._input.LA(1);
				if (!(_la === SHARCParser.PLUS || _la === SHARCParser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 675;
				this.atom();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_dm_ia_mb(): Mem_addr_dm_ia_mbContext {
		let _localctx: Mem_addr_dm_ia_mbContext = new Mem_addr_dm_ia_mbContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, SHARCParser.RULE_mem_addr_dm_ia_mb);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 679;
			this.match(SHARCParser.DM);
			this.state = 680;
			this.mem_addr_ia_mb();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_pm_ic_md(): Mem_addr_pm_ic_mdContext {
		let _localctx: Mem_addr_pm_ic_mdContext = new Mem_addr_pm_ic_mdContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, SHARCParser.RULE_mem_addr_pm_ic_md);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 682;
			this.match(SHARCParser.PM);
			this.state = 683;
			this.mem_addr_ic_md();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_dm_mb_ia(): Mem_addr_dm_mb_iaContext {
		let _localctx: Mem_addr_dm_mb_iaContext = new Mem_addr_dm_mb_iaContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, SHARCParser.RULE_mem_addr_dm_mb_ia);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 685;
			this.match(SHARCParser.DM);
			this.state = 686;
			this.mem_addr_mb_ia();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_pm_md_ic(): Mem_addr_pm_md_icContext {
		let _localctx: Mem_addr_pm_md_icContext = new Mem_addr_pm_md_icContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, SHARCParser.RULE_mem_addr_pm_md_ic);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 688;
			this.match(SHARCParser.PM);
			this.state = 689;
			this.mem_addr_md_ic();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_dm_ia_int(): Mem_addr_dm_ia_intContext {
		let _localctx: Mem_addr_dm_ia_intContext = new Mem_addr_dm_ia_intContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, SHARCParser.RULE_mem_addr_dm_ia_int);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 691;
			this.match(SHARCParser.DM);
			this.state = 692;
			this.mem_addr_ia_int();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_pm_ic_int(): Mem_addr_pm_ic_intContext {
		let _localctx: Mem_addr_pm_ic_intContext = new Mem_addr_pm_ic_intContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, SHARCParser.RULE_mem_addr_pm_ic_int);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 694;
			this.match(SHARCParser.PM);
			this.state = 695;
			this.mem_addr_ic_int();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_dm_int_ia(): Mem_addr_dm_int_iaContext {
		let _localctx: Mem_addr_dm_int_iaContext = new Mem_addr_dm_int_iaContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, SHARCParser.RULE_mem_addr_dm_int_ia);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 697;
			this.match(SHARCParser.DM);
			this.state = 698;
			this.mem_addr_int_ia();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_pm_int_ic(): Mem_addr_pm_int_icContext {
		let _localctx: Mem_addr_pm_int_icContext = new Mem_addr_pm_int_icContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, SHARCParser.RULE_mem_addr_pm_int_ic);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 700;
			this.match(SHARCParser.PM);
			this.state = 701;
			this.mem_addr_int_ic();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_dm_int(): Mem_addr_dm_intContext {
		let _localctx: Mem_addr_dm_intContext = new Mem_addr_dm_intContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, SHARCParser.RULE_mem_addr_dm_int);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 703;
			this.match(SHARCParser.DM);
			this.state = 704;
			this.mem_addr_int();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mem_addr_pm_int(): Mem_addr_pm_intContext {
		let _localctx: Mem_addr_pm_intContext = new Mem_addr_pm_intContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, SHARCParser.RULE_mem_addr_pm_int);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 706;
			this.match(SHARCParser.PM);
			this.state = 707;
			this.mem_addr_int();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fixpoint_alu_op(): Fixpoint_alu_opContext {
		let _localctx: Fixpoint_alu_opContext = new Fixpoint_alu_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, SHARCParser.RULE_fixpoint_alu_op);
		try {
			this.state = 720;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.R0:
			case SHARCParser.R1:
			case SHARCParser.R2:
			case SHARCParser.R3:
			case SHARCParser.R4:
			case SHARCParser.R5:
			case SHARCParser.R6:
			case SHARCParser.R7:
			case SHARCParser.R8:
			case SHARCParser.R9:
			case SHARCParser.R10:
			case SHARCParser.R11:
			case SHARCParser.R12:
			case SHARCParser.R13:
			case SHARCParser.R14:
			case SHARCParser.R15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 709;
				this.r_reg();
				this.state = 710;
				this.match(SHARCParser.EQU);
				this.state = 711;
				this.r_exp();
				}
				break;
			case SHARCParser.COMP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 713;
				this.match(SHARCParser.COMP);
				this.state = 714;
				this.match(SHARCParser.LPARENTHESE);
				this.state = 715;
				this.r_reg();
				this.state = 716;
				this.match(SHARCParser.COMMA);
				this.state = 717;
				this.r_reg();
				this.state = 718;
				this.match(SHARCParser.RPARENTHESE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public r_exp(): R_expContext {
		let _localctx: R_expContext = new R_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, SHARCParser.RULE_r_exp);
		let _la: number;
		try {
			this.state = 821;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 722;
				this.r_reg();
				this.state = 723;
				this.add_or_sub();
				this.state = 724;
				this.r_reg();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 726;
				this.r_reg();
				this.state = 727;
				this.match(SHARCParser.PLUS);
				this.state = 728;
				this.r_reg();
				this.state = 729;
				this.match(SHARCParser.PLUS);
				this.state = 730;
				this.match(SHARCParser.CI);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 732;
				this.r_reg();
				this.state = 733;
				this.match(SHARCParser.PLUS);
				this.state = 734;
				this.r_reg();
				this.state = 735;
				this.match(SHARCParser.PLUS);
				this.state = 736;
				this.match(SHARCParser.CI);
				this.state = 737;
				this.match(SHARCParser.MINUS);
				this.state = 738;
				this.match(SHARCParser.INT);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 740;
				this.match(SHARCParser.LPARENTHESE);
				this.state = 741;
				this.r_reg();
				this.state = 742;
				this.match(SHARCParser.PLUS);
				this.state = 743;
				this.r_reg();
				this.state = 744;
				this.match(SHARCParser.RPARENTHESE);
				this.state = 745;
				this.match(SHARCParser.DIV);
				this.state = 746;
				this.match(SHARCParser.INT);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 748;
				this.r_reg();
				this.state = 749;
				this.match(SHARCParser.PLUS);
				this.state = 750;
				this.match(SHARCParser.CI);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 752;
				this.r_reg();
				this.state = 753;
				this.match(SHARCParser.PLUS);
				this.state = 754;
				this.match(SHARCParser.CI);
				this.state = 755;
				this.match(SHARCParser.MINUS);
				this.state = 756;
				this.match(SHARCParser.INT);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 758;
				this.r_reg();
				this.state = 759;
				this.match(SHARCParser.PLUS);
				this.state = 760;
				this.match(SHARCParser.INT);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 762;
				this.r_reg();
				this.state = 763;
				this.match(SHARCParser.MINUS);
				this.state = 764;
				this.match(SHARCParser.INT);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 766;
				this.match(SHARCParser.MINUS);
				this.state = 767;
				this.r_reg();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 768;
				this.match(SHARCParser.ABS);
				this.state = 769;
				this.r_reg();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 770;
				this.match(SHARCParser.PASS);
				this.state = 771;
				this.r_reg();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 772;
				this.r_reg();
				this.state = 773;
				this.match(SHARCParser.AND);
				this.state = 774;
				this.r_reg();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 776;
				this.r_reg();
				this.state = 777;
				this.match(SHARCParser.OR);
				this.state = 778;
				this.r_reg();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 780;
				this.r_reg();
				this.state = 781;
				this.match(SHARCParser.XOR);
				this.state = 782;
				this.r_reg();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 784;
				this.match(SHARCParser.NOT);
				this.state = 785;
				this.r_reg();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 786;
				this.match(SHARCParser.MIN);
				this.state = 787;
				this.match(SHARCParser.LPARENTHESE);
				this.state = 788;
				this.r_reg();
				this.state = 789;
				this.match(SHARCParser.COMMA);
				this.state = 790;
				this.r_reg();
				this.state = 791;
				this.match(SHARCParser.RPARENTHESE);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 793;
				this.match(SHARCParser.MAX);
				this.state = 794;
				this.match(SHARCParser.LPARENTHESE);
				this.state = 795;
				this.r_reg();
				this.state = 796;
				this.match(SHARCParser.COMMA);
				this.state = 797;
				this.r_reg();
				this.state = 798;
				this.match(SHARCParser.RPARENTHESE);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 800;
				this.match(SHARCParser.CLIP);
				this.state = 801;
				this.r_reg();
				this.state = 802;
				this.match(SHARCParser.BY);
				this.state = 803;
				this.r_reg();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 805;
				this.match(SHARCParser.MANT);
				this.state = 806;
				this.f_reg();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 807;
				this.match(SHARCParser.LOGB);
				this.state = 808;
				this.f_reg();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 809;
				this.match(SHARCParser.FIX);
				this.state = 810;
				this.f_reg();
				this.state = 813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SHARCParser.BY) {
					{
					this.state = 811;
					this.match(SHARCParser.BY);
					this.state = 812;
					this.r_reg();
					}
				}

				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 815;
				this.match(SHARCParser.TRUNC);
				this.state = 816;
				this.f_reg();
				this.state = 819;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SHARCParser.BY) {
					{
					this.state = 817;
					this.match(SHARCParser.BY);
					this.state = 818;
					this.r_reg();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floating_point_alu_op(): Floating_point_alu_opContext {
		let _localctx: Floating_point_alu_opContext = new Floating_point_alu_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, SHARCParser.RULE_floating_point_alu_op);
		try {
			this.state = 834;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.F0:
			case SHARCParser.F1:
			case SHARCParser.F2:
			case SHARCParser.F3:
			case SHARCParser.F4:
			case SHARCParser.F5:
			case SHARCParser.F6:
			case SHARCParser.F7:
			case SHARCParser.F8:
			case SHARCParser.F9:
			case SHARCParser.F10:
			case SHARCParser.F11:
			case SHARCParser.F12:
			case SHARCParser.F13:
			case SHARCParser.F14:
			case SHARCParser.F15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 823;
				this.f_reg();
				this.state = 824;
				this.match(SHARCParser.EQU);
				this.state = 825;
				this.f_exp();
				}
				break;
			case SHARCParser.COMP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 827;
				this.match(SHARCParser.COMP);
				this.state = 828;
				this.match(SHARCParser.LPARENTHESE);
				this.state = 829;
				this.f_reg();
				this.state = 830;
				this.match(SHARCParser.COMMA);
				this.state = 831;
				this.f_reg();
				this.state = 832;
				this.match(SHARCParser.RPARENTHESE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public f_exp(): F_expContext {
		let _localctx: F_expContext = new F_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, SHARCParser.RULE_f_exp);
		let _la: number;
		try {
			this.state = 916;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 836;
				this.f_reg();
				this.state = 837;
				this.match(SHARCParser.PLUS);
				this.state = 838;
				this.f_reg();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 840;
				this.f_reg();
				this.state = 841;
				this.match(SHARCParser.MINUS);
				this.state = 842;
				this.f_reg();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 844;
				this.match(SHARCParser.ABS);
				this.state = 845;
				this.match(SHARCParser.LPARENTHESE);
				this.state = 846;
				this.f_reg();
				this.state = 847;
				this.match(SHARCParser.PLUS);
				this.state = 848;
				this.f_reg();
				this.state = 849;
				this.match(SHARCParser.RPARENTHESE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 851;
				this.match(SHARCParser.ABS);
				this.state = 852;
				this.match(SHARCParser.LPARENTHESE);
				this.state = 853;
				this.f_reg();
				this.state = 854;
				this.match(SHARCParser.MINUS);
				this.state = 855;
				this.f_reg();
				this.state = 856;
				this.match(SHARCParser.RPARENTHESE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 858;
				this.match(SHARCParser.LPARENTHESE);
				this.state = 859;
				this.f_reg();
				this.state = 860;
				this.match(SHARCParser.PLUS);
				this.state = 861;
				this.f_reg();
				this.state = 862;
				this.match(SHARCParser.RPARENTHESE);
				this.state = 863;
				this.match(SHARCParser.DIV);
				this.state = 864;
				this.match(SHARCParser.INT);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 866;
				this.match(SHARCParser.MINUS);
				this.state = 867;
				this.f_reg();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 868;
				this.match(SHARCParser.ABS);
				this.state = 869;
				this.f_reg();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 870;
				this.match(SHARCParser.PASS);
				this.state = 871;
				this.f_reg();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 872;
				this.match(SHARCParser.RND);
				this.state = 873;
				this.f_reg();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 874;
				this.match(SHARCParser.SCALB);
				this.state = 875;
				this.f_reg();
				this.state = 876;
				this.match(SHARCParser.BY);
				this.state = 877;
				this.r_reg();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 879;
				this.match(SHARCParser.FLOAT);
				this.state = 880;
				this.r_reg();
				this.state = 883;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SHARCParser.BY) {
					{
					this.state = 881;
					this.match(SHARCParser.BY);
					this.state = 882;
					this.r_reg();
					}
				}

				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 885;
				this.match(SHARCParser.RECIPS);
				this.state = 886;
				this.f_reg();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 887;
				this.match(SHARCParser.RSQRTS);
				this.state = 888;
				this.f_reg();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 889;
				this.f_reg();
				this.state = 890;
				this.match(SHARCParser.COPYSIGN);
				this.state = 891;
				this.f_reg();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 893;
				this.match(SHARCParser.MIN);
				this.state = 894;
				this.match(SHARCParser.LPARENTHESE);
				this.state = 895;
				this.f_reg();
				this.state = 896;
				this.match(SHARCParser.COMMA);
				this.state = 897;
				this.f_reg();
				this.state = 898;
				this.match(SHARCParser.RPARENTHESE);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 900;
				this.match(SHARCParser.MAX);
				this.state = 901;
				this.match(SHARCParser.LPARENTHESE);
				this.state = 902;
				this.f_reg();
				this.state = 903;
				this.match(SHARCParser.COMMA);
				this.state = 904;
				this.f_reg();
				this.state = 905;
				this.match(SHARCParser.RPARENTHESE);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 907;
				this.match(SHARCParser.CLIP);
				this.state = 908;
				this.f_reg();
				this.state = 909;
				this.match(SHARCParser.BY);
				this.state = 910;
				this.f_reg();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 912;
				this.f_reg();
				this.state = 913;
				this.match(SHARCParser.MULT);
				this.state = 914;
				this.f_reg();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multi_op(): Multi_opContext {
		let _localctx: Multi_opContext = new Multi_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, SHARCParser.RULE_multi_op);
		try {
			this.state = 945;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 918;
				this.r_reg();
				this.state = 919;
				this.match(SHARCParser.EQU);
				this.state = 920;
				this.multi_exp_r();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 922;
				this.match(SHARCParser.MRF);
				this.state = 923;
				this.match(SHARCParser.EQU);
				this.state = 924;
				this.multi_exp_mrf();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 925;
				this.match(SHARCParser.MRB);
				this.state = 926;
				this.match(SHARCParser.EQU);
				this.state = 927;
				this.multi_exp_mrb();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 928;
				this.mr();
				this.state = 929;
				this.match(SHARCParser.EQU);
				this.state = 930;
				this.match(SHARCParser.INT);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 934;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SHARCParser.MR0F:
				case SHARCParser.MR1F:
				case SHARCParser.MR2F:
					{
					this.state = 932;
					this.mrf();
					}
					break;
				case SHARCParser.MR0B:
				case SHARCParser.MR1B:
				case SHARCParser.MR2B:
					{
					this.state = 933;
					this.mrb();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 936;
				this.match(SHARCParser.EQU);
				this.state = 937;
				this.r_reg();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 939;
				this.r_reg();
				this.state = 940;
				this.match(SHARCParser.EQU);
				this.state = 943;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SHARCParser.MR0F:
				case SHARCParser.MR1F:
				case SHARCParser.MR2F:
					{
					this.state = 941;
					this.mrf();
					}
					break;
				case SHARCParser.MR0B:
				case SHARCParser.MR1B:
				case SHARCParser.MR2B:
					{
					this.state = 942;
					this.mrb();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multi_r(): Multi_rContext {
		let _localctx: Multi_rContext = new Multi_rContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, SHARCParser.RULE_multi_r);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 947;
			this.r_reg();
			this.state = 948;
			this.match(SHARCParser.MULT);
			this.state = 949;
			this.r_reg();
			this.state = 951;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SHARCParser.LPARENTHESE) {
				{
				this.state = 950;
				this.multi_mod2();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multi_exp_r(): Multi_exp_rContext {
		let _localctx: Multi_exp_rContext = new Multi_exp_rContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, SHARCParser.RULE_multi_exp_r);
		let _la: number;
		try {
			this.state = 969;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 953;
				this.multi_r();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 954;
				this.mr();
				this.state = 955;
				this.add_or_sub();
				this.state = 956;
				this.multi_r();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 958;
				this.match(SHARCParser.SAT);
				this.state = 959;
				this.mr();
				this.state = 961;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SHARCParser.LPARENTHESE) {
					{
					this.state = 960;
					this.multi_mod1();
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 963;
				this.match(SHARCParser.RND);
				this.state = 964;
				this.mr();
				this.state = 966;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SHARCParser.LPARENTHESE) {
					{
					this.state = 965;
					this.multi_mod1();
					}
				}

				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 968;
				this.mr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multi_exp_mrf(): Multi_exp_mrfContext {
		let _localctx: Multi_exp_mrfContext = new Multi_exp_mrfContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, SHARCParser.RULE_multi_exp_mrf);
		let _la: number;
		try {
			this.state = 986;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.R0:
			case SHARCParser.R1:
			case SHARCParser.R2:
			case SHARCParser.R3:
			case SHARCParser.R4:
			case SHARCParser.R5:
			case SHARCParser.R6:
			case SHARCParser.R7:
			case SHARCParser.R8:
			case SHARCParser.R9:
			case SHARCParser.R10:
			case SHARCParser.R11:
			case SHARCParser.R12:
			case SHARCParser.R13:
			case SHARCParser.R14:
			case SHARCParser.R15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 971;
				this.multi_r();
				}
				break;
			case SHARCParser.MRF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 972;
				this.match(SHARCParser.MRF);
				this.state = 973;
				this.add_or_sub();
				this.state = 974;
				this.multi_r();
				}
				break;
			case SHARCParser.SAT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 976;
				this.match(SHARCParser.SAT);
				this.state = 977;
				this.match(SHARCParser.MRF);
				this.state = 979;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SHARCParser.LPARENTHESE) {
					{
					this.state = 978;
					this.multi_mod1();
					}
				}

				}
				break;
			case SHARCParser.RND:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 981;
				this.match(SHARCParser.RND);
				this.state = 982;
				this.match(SHARCParser.MRF);
				this.state = 984;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SHARCParser.LPARENTHESE) {
					{
					this.state = 983;
					this.multi_mod1();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multi_exp_mrb(): Multi_exp_mrbContext {
		let _localctx: Multi_exp_mrbContext = new Multi_exp_mrbContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, SHARCParser.RULE_multi_exp_mrb);
		let _la: number;
		try {
			this.state = 1003;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.R0:
			case SHARCParser.R1:
			case SHARCParser.R2:
			case SHARCParser.R3:
			case SHARCParser.R4:
			case SHARCParser.R5:
			case SHARCParser.R6:
			case SHARCParser.R7:
			case SHARCParser.R8:
			case SHARCParser.R9:
			case SHARCParser.R10:
			case SHARCParser.R11:
			case SHARCParser.R12:
			case SHARCParser.R13:
			case SHARCParser.R14:
			case SHARCParser.R15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 988;
				this.multi_r();
				}
				break;
			case SHARCParser.MRB:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 989;
				this.match(SHARCParser.MRB);
				this.state = 990;
				this.add_or_sub();
				this.state = 991;
				this.multi_r();
				}
				break;
			case SHARCParser.SAT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 993;
				this.match(SHARCParser.SAT);
				this.state = 994;
				this.match(SHARCParser.MRB);
				this.state = 996;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SHARCParser.LPARENTHESE) {
					{
					this.state = 995;
					this.multi_mod1();
					}
				}

				}
				break;
			case SHARCParser.RND:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 998;
				this.match(SHARCParser.RND);
				this.state = 999;
				this.match(SHARCParser.MRB);
				this.state = 1001;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SHARCParser.LPARENTHESE) {
					{
					this.state = 1000;
					this.multi_mod1();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mr(): MrContext {
		let _localctx: MrContext = new MrContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, SHARCParser.RULE_mr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1005;
			_la = this._input.LA(1);
			if (!(_la === SHARCParser.MRB || _la === SHARCParser.MRF)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shifter_op(): Shifter_opContext {
		let _localctx: Shifter_opContext = new Shifter_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, SHARCParser.RULE_shifter_op);
		try {
			this.state = 1021;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.R0:
			case SHARCParser.R1:
			case SHARCParser.R2:
			case SHARCParser.R3:
			case SHARCParser.R4:
			case SHARCParser.R5:
			case SHARCParser.R6:
			case SHARCParser.R7:
			case SHARCParser.R8:
			case SHARCParser.R9:
			case SHARCParser.R10:
			case SHARCParser.R11:
			case SHARCParser.R12:
			case SHARCParser.R13:
			case SHARCParser.R14:
			case SHARCParser.R15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1007;
				this.r_reg();
				this.state = 1008;
				this.match(SHARCParser.EQU);
				this.state = 1009;
				this.shifter_exp();
				}
				break;
			case SHARCParser.BTST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1011;
				this.match(SHARCParser.BTST);
				this.state = 1012;
				this.r_reg();
				this.state = 1013;
				this.match(SHARCParser.BY);
				this.state = 1014;
				this.sec_op();
				}
				break;
			case SHARCParser.F0:
			case SHARCParser.F1:
			case SHARCParser.F2:
			case SHARCParser.F3:
			case SHARCParser.F4:
			case SHARCParser.F5:
			case SHARCParser.F6:
			case SHARCParser.F7:
			case SHARCParser.F8:
			case SHARCParser.F9:
			case SHARCParser.F10:
			case SHARCParser.F11:
			case SHARCParser.F12:
			case SHARCParser.F13:
			case SHARCParser.F14:
			case SHARCParser.F15:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1016;
				this.f_reg();
				this.state = 1017;
				this.match(SHARCParser.EQU);
				this.state = 1018;
				this.match(SHARCParser.FUNPACK);
				this.state = 1019;
				this.r_reg();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shifter_exp(): Shifter_expContext {
		let _localctx: Shifter_expContext = new Shifter_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, SHARCParser.RULE_shifter_exp);
		let _la: number;
		try {
			this.state = 1105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1023;
				this.match(SHARCParser.LSHIFT);
				this.state = 1024;
				this.r_reg();
				this.state = 1025;
				this.match(SHARCParser.BY);
				this.state = 1026;
				this.sec_op();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1028;
				this.r_reg();
				this.state = 1029;
				this.match(SHARCParser.OR);
				this.state = 1030;
				this.match(SHARCParser.LSHIFT);
				this.state = 1031;
				this.r_reg();
				this.state = 1032;
				this.match(SHARCParser.BY);
				this.state = 1033;
				this.sec_op();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1035;
				this.match(SHARCParser.ASHIFT);
				this.state = 1036;
				this.r_reg();
				this.state = 1037;
				this.match(SHARCParser.BY);
				this.state = 1038;
				this.sec_op();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1040;
				this.r_reg();
				this.state = 1041;
				this.match(SHARCParser.OR);
				this.state = 1042;
				this.match(SHARCParser.ASHIFT);
				this.state = 1043;
				this.r_reg();
				this.state = 1044;
				this.match(SHARCParser.BY);
				this.state = 1045;
				this.sec_op();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1047;
				this.match(SHARCParser.ROT);
				this.state = 1048;
				this.r_reg();
				this.state = 1049;
				this.match(SHARCParser.BY);
				this.state = 1050;
				this.sec_op();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1052;
				this.match(SHARCParser.BCLR);
				this.state = 1053;
				this.r_reg();
				this.state = 1054;
				this.match(SHARCParser.BY);
				this.state = 1055;
				this.sec_op();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1057;
				this.match(SHARCParser.BSET);
				this.state = 1058;
				this.r_reg();
				this.state = 1059;
				this.match(SHARCParser.BY);
				this.state = 1060;
				this.sec_op();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1062;
				this.match(SHARCParser.BTGL);
				this.state = 1063;
				this.r_reg();
				this.state = 1064;
				this.match(SHARCParser.BY);
				this.state = 1065;
				this.sec_op();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1067;
				this.match(SHARCParser.FDEP);
				this.state = 1068;
				this.r_reg();
				this.state = 1069;
				this.match(SHARCParser.BY);
				this.state = 1070;
				this.sec_op2();
				this.state = 1074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SHARCParser.LPARENTHESE) {
					{
					this.state = 1071;
					this.match(SHARCParser.LPARENTHESE);
					this.state = 1072;
					this.match(SHARCParser.SE);
					this.state = 1073;
					this.match(SHARCParser.RPARENTHESE);
					}
				}

				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1076;
				this.match(SHARCParser.FEXT);
				this.state = 1077;
				this.r_reg();
				this.state = 1078;
				this.match(SHARCParser.BY);
				this.state = 1079;
				this.sec_op2();
				this.state = 1083;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SHARCParser.LPARENTHESE) {
					{
					this.state = 1080;
					this.match(SHARCParser.LPARENTHESE);
					this.state = 1081;
					this.match(SHARCParser.SE);
					this.state = 1082;
					this.match(SHARCParser.RPARENTHESE);
					}
				}

				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1085;
				this.r_reg();
				this.state = 1086;
				this.match(SHARCParser.OR);
				this.state = 1087;
				this.match(SHARCParser.FDEP);
				this.state = 1088;
				this.r_reg();
				this.state = 1089;
				this.match(SHARCParser.BY);
				this.state = 1090;
				this.sec_op2();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1092;
				this.match(SHARCParser.EXP);
				this.state = 1093;
				this.r_reg();
				this.state = 1097;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SHARCParser.LPARENTHESE) {
					{
					this.state = 1094;
					this.match(SHARCParser.LPARENTHESE);
					this.state = 1095;
					this.match(SHARCParser.EX);
					this.state = 1096;
					this.match(SHARCParser.RPARENTHESE);
					}
				}

				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1099;
				this.match(SHARCParser.LEFTZ);
				this.state = 1100;
				this.r_reg();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1101;
				this.match(SHARCParser.LEFTO);
				this.state = 1102;
				this.r_reg();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1103;
				this.match(SHARCParser.FPACK);
				this.state = 1104;
				this.f_reg();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sec_op(): Sec_opContext {
		let _localctx: Sec_opContext = new Sec_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, SHARCParser.RULE_sec_op);
		try {
			this.state = 1111;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.R0:
			case SHARCParser.R1:
			case SHARCParser.R2:
			case SHARCParser.R3:
			case SHARCParser.R4:
			case SHARCParser.R5:
			case SHARCParser.R6:
			case SHARCParser.R7:
			case SHARCParser.R8:
			case SHARCParser.R9:
			case SHARCParser.R10:
			case SHARCParser.R11:
			case SHARCParser.R12:
			case SHARCParser.R13:
			case SHARCParser.R14:
			case SHARCParser.R15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1107;
				this.r_reg();
				}
				break;
			case SHARCParser.INT:
			case SHARCParser.LENGTH:
			case SHARCParser.AT:
			case SHARCParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1108;
				this.atom();
				}
				break;
			case SHARCParser.MINUS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1109;
				this.match(SHARCParser.MINUS);
				this.state = 1110;
				this.atom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sec_op2(): Sec_op2Context {
		let _localctx: Sec_op2Context = new Sec_op2Context(this._ctx, this.state);
		this.enterRule(_localctx, 162, SHARCParser.RULE_sec_op2);
		try {
			this.state = 1115;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.R0:
			case SHARCParser.R1:
			case SHARCParser.R2:
			case SHARCParser.R3:
			case SHARCParser.R4:
			case SHARCParser.R5:
			case SHARCParser.R6:
			case SHARCParser.R7:
			case SHARCParser.R8:
			case SHARCParser.R9:
			case SHARCParser.R10:
			case SHARCParser.R11:
			case SHARCParser.R12:
			case SHARCParser.R13:
			case SHARCParser.R14:
			case SHARCParser.R15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1113;
				this.r_reg();
				}
				break;
			case SHARCParser.INT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1114;
				this.bit_data();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bit_data(): Bit_dataContext {
		let _localctx: Bit_dataContext = new Bit_dataContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, SHARCParser.RULE_bit_data);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1117;
			this.match(SHARCParser.INT);
			this.state = 1118;
			this.match(SHARCParser.COLON);
			this.state = 1119;
			this.match(SHARCParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public add_or_sub(): Add_or_subContext {
		let _localctx: Add_or_subContext = new Add_or_subContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, SHARCParser.RULE_add_or_sub);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1121;
			_la = this._input.LA(1);
			if (!(_la === SHARCParser.PLUS || _la === SHARCParser.MINUS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dual_op(): Dual_opContext {
		let _localctx: Dual_opContext = new Dual_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, SHARCParser.RULE_dual_op);
		try {
			this.state = 1125;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1123;
				this.dual_add_r();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1124;
				this.parallel_multi();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dual_add_r(): Dual_add_rContext {
		let _localctx: Dual_add_rContext = new Dual_add_rContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, SHARCParser.RULE_dual_add_r);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1127;
			this.r_reg();
			this.state = 1128;
			this.match(SHARCParser.EQU);
			this.state = 1129;
			this.r_reg();
			this.state = 1130;
			this.match(SHARCParser.PLUS);
			this.state = 1131;
			this.r_reg();
			this.state = 1132;
			this.match(SHARCParser.COMMA);
			this.state = 1133;
			this.r_reg();
			this.state = 1134;
			this.match(SHARCParser.EQU);
			this.state = 1135;
			this.r_reg();
			this.state = 1136;
			this.match(SHARCParser.MINUS);
			this.state = 1137;
			this.r_reg();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parallel_multi(): Parallel_multiContext {
		let _localctx: Parallel_multiContext = new Parallel_multiContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, SHARCParser.RULE_parallel_multi);
		try {
			let _alt: number;
			this.state = 1153;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.MR0B:
			case SHARCParser.MR0F:
			case SHARCParser.MR1B:
			case SHARCParser.MR1F:
			case SHARCParser.MR2B:
			case SHARCParser.MR2F:
			case SHARCParser.MRB:
			case SHARCParser.MRF:
			case SHARCParser.R0:
			case SHARCParser.R1:
			case SHARCParser.R2:
			case SHARCParser.R3:
			case SHARCParser.R4:
			case SHARCParser.R5:
			case SHARCParser.R6:
			case SHARCParser.R7:
			case SHARCParser.R8:
			case SHARCParser.R9:
			case SHARCParser.R10:
			case SHARCParser.R11:
			case SHARCParser.R12:
			case SHARCParser.R13:
			case SHARCParser.R14:
			case SHARCParser.R15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1139;
				this.multi_op();
				this.state = 1142;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1140;
						this.match(SHARCParser.COMMA);
						this.state = 1141;
						this.fixpoint_alu_op();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1144;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SHARCParser.COMP:
			case SHARCParser.F0:
			case SHARCParser.F1:
			case SHARCParser.F2:
			case SHARCParser.F3:
			case SHARCParser.F4:
			case SHARCParser.F5:
			case SHARCParser.F6:
			case SHARCParser.F7:
			case SHARCParser.F8:
			case SHARCParser.F9:
			case SHARCParser.F10:
			case SHARCParser.F11:
			case SHARCParser.F12:
			case SHARCParser.F13:
			case SHARCParser.F14:
			case SHARCParser.F15:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1146;
				this.floating_point_alu_op();
				this.state = 1149;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1147;
						this.match(SHARCParser.COMMA);
						this.state = 1148;
						this.floating_point_alu_op();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1151;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_control_exp(): Flow_control_expContext {
		let _localctx: Flow_control_expContext = new Flow_control_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, SHARCParser.RULE_flow_control_exp);
		try {
			this.state = 1166;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1155;
				this.flow_contorl_8();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1156;
				this.flow_control_9_and_11();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1157;
				this.flow_control_10();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1158;
				this.flow_control_8a();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1159;
				this.flow_control_8b();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1160;
				this.flow_control_9a();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1161;
				this.flow_control_9b();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1162;
				this.flow_control_11a();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1163;
				this.flow_control_11b();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1164;
				this.flow_control_12();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1165;
				this.flow_control_13();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_contorl_8(): Flow_contorl_8Context {
		let _localctx: Flow_contorl_8Context = new Flow_contorl_8Context(this._ctx, this.state);
		this.enterRule(_localctx, 176, SHARCParser.RULE_flow_contorl_8);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1168;
			this.match(SHARCParser.IF);
			this.state = 1169;
			this.condition();
			this.state = 1170;
			this.flow_contorl_8_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_contorl_8_exp(): Flow_contorl_8_expContext {
		let _localctx: Flow_contorl_8_expContext = new Flow_contorl_8_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, SHARCParser.RULE_flow_contorl_8_exp);
		try {
			this.state = 1174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.JUMP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1172;
				this.flow_control_8a();
				}
				break;
			case SHARCParser.CALL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1173;
				this.flow_control_8b();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_control_9_and_11(): Flow_control_9_and_11Context {
		let _localctx: Flow_control_9_and_11Context = new Flow_control_9_and_11Context(this._ctx, this.state);
		this.enterRule(_localctx, 180, SHARCParser.RULE_flow_control_9_and_11);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1176;
			this.match(SHARCParser.IF);
			this.state = 1177;
			this.condition();
			this.state = 1178;
			this.flow_control_9_and_11_exp();
			this.state = 1179;
			this.match(SHARCParser.COMMA);
			this.state = 1180;
			this.match(SHARCParser.ELSE);
			this.state = 1181;
			this.compute();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_control_9_and_11_exp(): Flow_control_9_and_11_expContext {
		let _localctx: Flow_control_9_and_11_expContext = new Flow_control_9_and_11_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, SHARCParser.RULE_flow_control_9_and_11_exp);
		try {
			this.state = 1187;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.JUMP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1183;
				this.flow_control_9a();
				}
				break;
			case SHARCParser.CALL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1184;
				this.flow_control_9b();
				}
				break;
			case SHARCParser.RTS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1185;
				this.flow_control_11a();
				}
				break;
			case SHARCParser.RTI:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1186;
				this.flow_control_11b();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_control_10(): Flow_control_10Context {
		let _localctx: Flow_control_10Context = new Flow_control_10Context(this._ctx, this.state);
		this.enterRule(_localctx, 184, SHARCParser.RULE_flow_control_10);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1189;
			this.match(SHARCParser.IF);
			this.state = 1190;
			this.condition();
			this.state = 1191;
			this.match(SHARCParser.JUMP);
			this.state = 1192;
			this.flow_control_10_frag();
			this.state = 1193;
			this.match(SHARCParser.COMMA);
			this.state = 1194;
			this.match(SHARCParser.ELSE);
			this.state = 1198;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 1195;
				this.compute();
				this.state = 1196;
				this.match(SHARCParser.COMMA);
				}
				break;
			}
			this.state = 1200;
			this.mov_exp_1_1();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_control_10_frag(): Flow_control_10_fragContext {
		let _localctx: Flow_control_10_fragContext = new Flow_control_10_fragContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, SHARCParser.RULE_flow_control_10_frag);
		try {
			this.state = 1204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1202;
				this.mem_addr_md_ic();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1203;
				this.jump_addr_pc();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_control_12(): Flow_control_12Context {
		let _localctx: Flow_control_12Context = new Flow_control_12Context(this._ctx, this.state);
		this.enterRule(_localctx, 188, SHARCParser.RULE_flow_control_12);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1206;
			this.match(SHARCParser.LCNTR);
			this.state = 1207;
			this.match(SHARCParser.EQU);
			this.state = 1208;
			this.lcntr_v();
			{
			this.state = 1209;
			this.match(SHARCParser.COMMA);
			this.state = 1210;
			this.match(SHARCParser.DO);
			this.state = 1211;
			this.jump_addr_int_or_pc();
			this.state = 1212;
			this.match(SHARCParser.UNTIL);
			this.state = 1213;
			this.match(SHARCParser.LCE);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lcntr_v(): Lcntr_vContext {
		let _localctx: Lcntr_vContext = new Lcntr_vContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, SHARCParser.RULE_lcntr_v);
		try {
			this.state = 1217;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.INT:
			case SHARCParser.LENGTH:
			case SHARCParser.MINUS:
			case SHARCParser.LPARENTHESE:
			case SHARCParser.AT:
			case SHARCParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1215;
				this.value_exp();
				}
				break;
			case SHARCParser.ASTAT:
			case SHARCParser.B0:
			case SHARCParser.B1:
			case SHARCParser.B2:
			case SHARCParser.B3:
			case SHARCParser.B4:
			case SHARCParser.B5:
			case SHARCParser.B6:
			case SHARCParser.B7:
			case SHARCParser.B8:
			case SHARCParser.B9:
			case SHARCParser.B10:
			case SHARCParser.B11:
			case SHARCParser.B12:
			case SHARCParser.B13:
			case SHARCParser.B14:
			case SHARCParser.B15:
			case SHARCParser.CURLCNTR:
			case SHARCParser.DADDR:
			case SHARCParser.F0:
			case SHARCParser.F1:
			case SHARCParser.F2:
			case SHARCParser.F3:
			case SHARCParser.F4:
			case SHARCParser.F5:
			case SHARCParser.F6:
			case SHARCParser.F7:
			case SHARCParser.F8:
			case SHARCParser.F9:
			case SHARCParser.F10:
			case SHARCParser.F11:
			case SHARCParser.F12:
			case SHARCParser.F13:
			case SHARCParser.F14:
			case SHARCParser.F15:
			case SHARCParser.FADDR:
			case SHARCParser.I0:
			case SHARCParser.I1:
			case SHARCParser.I2:
			case SHARCParser.I3:
			case SHARCParser.I4:
			case SHARCParser.I5:
			case SHARCParser.I6:
			case SHARCParser.I7:
			case SHARCParser.I8:
			case SHARCParser.I9:
			case SHARCParser.I10:
			case SHARCParser.I11:
			case SHARCParser.I12:
			case SHARCParser.I13:
			case SHARCParser.I14:
			case SHARCParser.I15:
			case SHARCParser.IMASK:
			case SHARCParser.IMASKP:
			case SHARCParser.IRPTL:
			case SHARCParser.L0:
			case SHARCParser.L1:
			case SHARCParser.L2:
			case SHARCParser.L3:
			case SHARCParser.L4:
			case SHARCParser.L5:
			case SHARCParser.L6:
			case SHARCParser.L7:
			case SHARCParser.L8:
			case SHARCParser.L9:
			case SHARCParser.L10:
			case SHARCParser.L11:
			case SHARCParser.L12:
			case SHARCParser.L13:
			case SHARCParser.L14:
			case SHARCParser.L15:
			case SHARCParser.LADDR:
			case SHARCParser.LCNTR:
			case SHARCParser.M0:
			case SHARCParser.M1:
			case SHARCParser.M2:
			case SHARCParser.M3:
			case SHARCParser.M4:
			case SHARCParser.M5:
			case SHARCParser.M6:
			case SHARCParser.M7:
			case SHARCParser.M8:
			case SHARCParser.M9:
			case SHARCParser.M10:
			case SHARCParser.M11:
			case SHARCParser.M12:
			case SHARCParser.M13:
			case SHARCParser.M14:
			case SHARCParser.M15:
			case SHARCParser.MODE1:
			case SHARCParser.MODE2:
			case SHARCParser.PC:
			case SHARCParser.PCSTK:
			case SHARCParser.PCSTKP:
			case SHARCParser.PX:
			case SHARCParser.PX1:
			case SHARCParser.PX2:
			case SHARCParser.R0:
			case SHARCParser.R1:
			case SHARCParser.R2:
			case SHARCParser.R3:
			case SHARCParser.R4:
			case SHARCParser.R5:
			case SHARCParser.R6:
			case SHARCParser.R7:
			case SHARCParser.R8:
			case SHARCParser.R9:
			case SHARCParser.R10:
			case SHARCParser.R11:
			case SHARCParser.R12:
			case SHARCParser.R13:
			case SHARCParser.R14:
			case SHARCParser.R15:
			case SHARCParser.STKY:
			case SHARCParser.TCOUNT:
			case SHARCParser.TPERIOD:
			case SHARCParser.USTAT1:
			case SHARCParser.USTAT2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1216;
				this.u_reg();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_control_13(): Flow_control_13Context {
		let _localctx: Flow_control_13Context = new Flow_control_13Context(this._ctx, this.state);
		this.enterRule(_localctx, 192, SHARCParser.RULE_flow_control_13);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1219;
			this.match(SHARCParser.DO);
			this.state = 1220;
			this.jump_addr_int_or_pc();
			this.state = 1221;
			this.match(SHARCParser.UNTIL);
			this.state = 1222;
			this.condition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_control_8a(): Flow_control_8aContext {
		let _localctx: Flow_control_8aContext = new Flow_control_8aContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, SHARCParser.RULE_flow_control_8a);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1224;
			this.match(SHARCParser.JUMP);
			this.state = 1225;
			this.jump_addr_int();
			this.state = 1227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SHARCParser.LPARENTHESE) {
				{
				this.state = 1226;
				this.jump_modifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_control_8b(): Flow_control_8bContext {
		let _localctx: Flow_control_8bContext = new Flow_control_8bContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, SHARCParser.RULE_flow_control_8b);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1229;
			this.match(SHARCParser.CALL);
			this.state = 1230;
			this.jump_addr_int();
			this.state = 1232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SHARCParser.LPARENTHESE) {
				{
				this.state = 1231;
				this.jump_modifier2();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_control_9a(): Flow_control_9aContext {
		let _localctx: Flow_control_9aContext = new Flow_control_9aContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, SHARCParser.RULE_flow_control_9a);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1234;
			this.match(SHARCParser.JUMP);
			this.state = 1235;
			this.flow_control_10_frag();
			this.state = 1237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SHARCParser.LPARENTHESE) {
				{
				this.state = 1236;
				this.jump_modifier();
				}
			}

			this.state = 1241;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				{
				this.state = 1239;
				this.match(SHARCParser.COMMA);
				this.state = 1240;
				this.compute();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_control_9b(): Flow_control_9bContext {
		let _localctx: Flow_control_9bContext = new Flow_control_9bContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, SHARCParser.RULE_flow_control_9b);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1243;
			this.match(SHARCParser.CALL);
			this.state = 1244;
			this.flow_control_10_frag();
			this.state = 1246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SHARCParser.LPARENTHESE) {
				{
				this.state = 1245;
				this.jump_modifier2();
				}
			}

			this.state = 1250;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 1248;
				this.match(SHARCParser.COMMA);
				this.state = 1249;
				this.compute();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_control_11a(): Flow_control_11aContext {
		let _localctx: Flow_control_11aContext = new Flow_control_11aContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, SHARCParser.RULE_flow_control_11a);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1252;
			this.match(SHARCParser.RTS);
			this.state = 1254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SHARCParser.LPARENTHESE) {
				{
				this.state = 1253;
				this.jump_modifier3();
				}
			}

			this.state = 1258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 1256;
				this.match(SHARCParser.COMMA);
				this.state = 1257;
				this.compute();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flow_control_11b(): Flow_control_11bContext {
		let _localctx: Flow_control_11bContext = new Flow_control_11bContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, SHARCParser.RULE_flow_control_11b);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1260;
			this.match(SHARCParser.RTI);
			this.state = 1262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SHARCParser.LPARENTHESE) {
				{
				this.state = 1261;
				this.jump_modifier2();
				}
			}

			this.state = 1266;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 1264;
				this.match(SHARCParser.COMMA);
				this.state = 1265;
				this.compute();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jump_addr_int_or_pc(): Jump_addr_int_or_pcContext {
		let _localctx: Jump_addr_int_or_pcContext = new Jump_addr_int_or_pcContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, SHARCParser.RULE_jump_addr_int_or_pc);
		try {
			this.state = 1270;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1268;
				this.jump_addr_int();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1269;
				this.jump_addr_pc();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jump_addr_md_or_pc(): Jump_addr_md_or_pcContext {
		let _localctx: Jump_addr_md_or_pcContext = new Jump_addr_md_or_pcContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, SHARCParser.RULE_jump_addr_md_or_pc);
		try {
			this.state = 1274;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1272;
				this.mem_addr_md_ic();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1273;
				this.jump_addr_pc();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jump_addr_pc(): Jump_addr_pcContext {
		let _localctx: Jump_addr_pcContext = new Jump_addr_pcContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, SHARCParser.RULE_jump_addr_pc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1276;
			this.match(SHARCParser.LPARENTHESE);
			this.state = 1277;
			this.match(SHARCParser.PC);
			this.state = 1278;
			this.match(SHARCParser.COMMA);
			this.state = 1279;
			this.value_exp();
			this.state = 1280;
			this.match(SHARCParser.RPARENTHESE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jump_addr_int(): Jump_addr_intContext {
		let _localctx: Jump_addr_intContext = new Jump_addr_intContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, SHARCParser.RULE_jump_addr_int);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1282;
			this.value_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jump_modifier(): Jump_modifierContext {
		let _localctx: Jump_modifierContext = new Jump_modifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, SHARCParser.RULE_jump_modifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1284;
			this.jump_modifier_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jump_modifier_(): Jump_modifier_Context {
		let _localctx: Jump_modifier_Context = new Jump_modifier_Context(this._ctx, this.state);
		this.enterRule(_localctx, 216, SHARCParser.RULE_jump_modifier_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1286;
			this.match(SHARCParser.LPARENTHESE);
			this.state = 1290;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DB:
				{
				this.state = 1287;
				this.jump_modifier_1();
				}
				break;
			case SHARCParser.LA:
				{
				this.state = 1288;
				this.match(SHARCParser.LA);
				}
				break;
			case SHARCParser.CI:
				{
				this.state = 1289;
				this.match(SHARCParser.CI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1292;
			this.match(SHARCParser.RPARENTHESE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jump_modifier_1(): Jump_modifier_1Context {
		let _localctx: Jump_modifier_1Context = new Jump_modifier_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 218, SHARCParser.RULE_jump_modifier_1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1294;
			this.match(SHARCParser.DB);
			this.state = 1297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SHARCParser.COMMA) {
				{
				this.state = 1295;
				this.match(SHARCParser.COMMA);
				this.state = 1296;
				_la = this._input.LA(1);
				if (!(_la === SHARCParser.CI || _la === SHARCParser.LA)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jump_modifier2(): Jump_modifier2Context {
		let _localctx: Jump_modifier2Context = new Jump_modifier2Context(this._ctx, this.state);
		this.enterRule(_localctx, 220, SHARCParser.RULE_jump_modifier2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1299;
			this.match(SHARCParser.LPARENTHESE);
			this.state = 1300;
			this.match(SHARCParser.DB);
			this.state = 1301;
			this.match(SHARCParser.RPARENTHESE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jump_modifier3(): Jump_modifier3Context {
		let _localctx: Jump_modifier3Context = new Jump_modifier3Context(this._ctx, this.state);
		this.enterRule(_localctx, 222, SHARCParser.RULE_jump_modifier3);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1303;
			this.jump_modifier3_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jump_modifier3_(): Jump_modifier3_Context {
		let _localctx: Jump_modifier3_Context = new Jump_modifier3_Context(this._ctx, this.state);
		this.enterRule(_localctx, 224, SHARCParser.RULE_jump_modifier3_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1305;
			this.match(SHARCParser.LPARENTHESE);
			this.state = 1308;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DB:
				{
				this.state = 1306;
				this.jump_modifier3_1();
				}
				break;
			case SHARCParser.LR:
				{
				this.state = 1307;
				this.match(SHARCParser.LR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1310;
			this.match(SHARCParser.RPARENTHESE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jump_modifier3_1(): Jump_modifier3_1Context {
		let _localctx: Jump_modifier3_1Context = new Jump_modifier3_1Context(this._ctx, this.state);
		this.enterRule(_localctx, 226, SHARCParser.RULE_jump_modifier3_1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1312;
			this.match(SHARCParser.DB);
			this.state = 1315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SHARCParser.COMMA) {
				{
				this.state = 1313;
				this.match(SHARCParser.COMMA);
				this.state = 1314;
				this.match(SHARCParser.LR);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imm_mov_exp(): Imm_mov_expContext {
		let _localctx: Imm_mov_expContext = new Imm_mov_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, SHARCParser.RULE_imm_mov_exp);
		try {
			this.state = 1321;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1317;
				this.imm_mov_14a();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1318;
				this.imm_mov_14b();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1319;
				this.imm_mov_16();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1320;
				this.imm_mov_17();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imm_mov_14a(): Imm_mov_14aContext {
		let _localctx: Imm_mov_14aContext = new Imm_mov_14aContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, SHARCParser.RULE_imm_mov_14a);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1325;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DM:
				{
				this.state = 1323;
				this.mem_addr_dm_int();
				}
				break;
			case SHARCParser.PM:
				{
				this.state = 1324;
				this.mem_addr_pm_int();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1327;
			this.match(SHARCParser.EQU);
			this.state = 1328;
			this.u_reg();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imm_mov_15a(): Imm_mov_15aContext {
		let _localctx: Imm_mov_15aContext = new Imm_mov_15aContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, SHARCParser.RULE_imm_mov_15a);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1332;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DM:
				{
				this.state = 1330;
				this.mem_addr_dm_int_ia();
				}
				break;
			case SHARCParser.PM:
				{
				this.state = 1331;
				this.mem_addr_pm_int_ic();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1334;
			this.match(SHARCParser.EQU);
			this.state = 1335;
			this.u_reg();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imm_mov_14b(): Imm_mov_14bContext {
		let _localctx: Imm_mov_14bContext = new Imm_mov_14bContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, SHARCParser.RULE_imm_mov_14b);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1337;
			this.u_reg();
			this.state = 1338;
			this.match(SHARCParser.EQU);
			this.state = 1341;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DM:
				{
				this.state = 1339;
				this.mem_addr_dm_int();
				}
				break;
			case SHARCParser.PM:
				{
				this.state = 1340;
				this.mem_addr_pm_int();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imm_mov_15b(): Imm_mov_15bContext {
		let _localctx: Imm_mov_15bContext = new Imm_mov_15bContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, SHARCParser.RULE_imm_mov_15b);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1343;
			this.u_reg();
			this.state = 1344;
			this.match(SHARCParser.EQU);
			this.state = 1347;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DM:
				{
				this.state = 1345;
				this.mem_addr_dm_int_ia();
				}
				break;
			case SHARCParser.PM:
				{
				this.state = 1346;
				this.mem_addr_pm_int_ic();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imm_mov_16(): Imm_mov_16Context {
		let _localctx: Imm_mov_16Context = new Imm_mov_16Context(this._ctx, this.state);
		this.enterRule(_localctx, 238, SHARCParser.RULE_imm_mov_16);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1351;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DM:
				{
				this.state = 1349;
				this.mem_addr_dm_ia_mb();
				}
				break;
			case SHARCParser.PM:
				{
				this.state = 1350;
				this.mem_addr_pm_ic_md();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1353;
			this.match(SHARCParser.EQU);
			this.state = 1354;
			this.value_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imm_mov_17(): Imm_mov_17Context {
		let _localctx: Imm_mov_17Context = new Imm_mov_17Context(this._ctx, this.state);
		this.enterRule(_localctx, 240, SHARCParser.RULE_imm_mov_17);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1356;
			this.u_reg2();
			this.state = 1357;
			this.match(SHARCParser.EQU);
			this.state = 1358;
			this.value_exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public u_reg2(): U_reg2Context {
		let _localctx: U_reg2Context = new U_reg2Context(this._ctx, this.state);
		this.enterRule(_localctx, 242, SHARCParser.RULE_u_reg2);
		try {
			this.state = 1375;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.F0:
			case SHARCParser.F1:
			case SHARCParser.F2:
			case SHARCParser.F3:
			case SHARCParser.F4:
			case SHARCParser.F5:
			case SHARCParser.F6:
			case SHARCParser.F7:
			case SHARCParser.F8:
			case SHARCParser.F9:
			case SHARCParser.F10:
			case SHARCParser.F11:
			case SHARCParser.F12:
			case SHARCParser.F13:
			case SHARCParser.F14:
			case SHARCParser.F15:
			case SHARCParser.R0:
			case SHARCParser.R1:
			case SHARCParser.R2:
			case SHARCParser.R3:
			case SHARCParser.R4:
			case SHARCParser.R5:
			case SHARCParser.R6:
			case SHARCParser.R7:
			case SHARCParser.R8:
			case SHARCParser.R9:
			case SHARCParser.R10:
			case SHARCParser.R11:
			case SHARCParser.R12:
			case SHARCParser.R13:
			case SHARCParser.R14:
			case SHARCParser.R15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1360;
				this.d_reg();
				}
				break;
			case SHARCParser.PC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1361;
				this.match(SHARCParser.PC);
				}
				break;
			case SHARCParser.PCSTK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1362;
				this.match(SHARCParser.PCSTK);
				}
				break;
			case SHARCParser.PCSTKP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1363;
				this.match(SHARCParser.PCSTKP);
				}
				break;
			case SHARCParser.FADDR:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1364;
				this.match(SHARCParser.FADDR);
				}
				break;
			case SHARCParser.DADDR:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1365;
				this.match(SHARCParser.DADDR);
				}
				break;
			case SHARCParser.LADDR:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1366;
				this.match(SHARCParser.LADDR);
				}
				break;
			case SHARCParser.CURLCNTR:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1367;
				this.match(SHARCParser.CURLCNTR);
				}
				break;
			case SHARCParser.B0:
			case SHARCParser.B1:
			case SHARCParser.B2:
			case SHARCParser.B3:
			case SHARCParser.B4:
			case SHARCParser.B5:
			case SHARCParser.B6:
			case SHARCParser.B7:
			case SHARCParser.B8:
			case SHARCParser.B9:
			case SHARCParser.B10:
			case SHARCParser.B11:
			case SHARCParser.B12:
			case SHARCParser.B13:
			case SHARCParser.B14:
			case SHARCParser.B15:
			case SHARCParser.I0:
			case SHARCParser.I1:
			case SHARCParser.I2:
			case SHARCParser.I3:
			case SHARCParser.I4:
			case SHARCParser.I5:
			case SHARCParser.I6:
			case SHARCParser.I7:
			case SHARCParser.I8:
			case SHARCParser.I9:
			case SHARCParser.I10:
			case SHARCParser.I11:
			case SHARCParser.I12:
			case SHARCParser.I13:
			case SHARCParser.I14:
			case SHARCParser.I15:
			case SHARCParser.L0:
			case SHARCParser.L1:
			case SHARCParser.L2:
			case SHARCParser.L3:
			case SHARCParser.L4:
			case SHARCParser.L5:
			case SHARCParser.L6:
			case SHARCParser.L7:
			case SHARCParser.L8:
			case SHARCParser.L9:
			case SHARCParser.L10:
			case SHARCParser.L11:
			case SHARCParser.L12:
			case SHARCParser.L13:
			case SHARCParser.L14:
			case SHARCParser.L15:
			case SHARCParser.M0:
			case SHARCParser.M1:
			case SHARCParser.M2:
			case SHARCParser.M3:
			case SHARCParser.M4:
			case SHARCParser.M5:
			case SHARCParser.M6:
			case SHARCParser.M7:
			case SHARCParser.M8:
			case SHARCParser.M9:
			case SHARCParser.M10:
			case SHARCParser.M11:
			case SHARCParser.M12:
			case SHARCParser.M13:
			case SHARCParser.M14:
			case SHARCParser.M15:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1368;
				this.dag_reg();
				}
				break;
			case SHARCParser.PX1:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1369;
				this.match(SHARCParser.PX1);
				}
				break;
			case SHARCParser.PX2:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1370;
				this.match(SHARCParser.PX2);
				}
				break;
			case SHARCParser.PX:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1371;
				this.match(SHARCParser.PX);
				}
				break;
			case SHARCParser.TPERIOD:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1372;
				this.match(SHARCParser.TPERIOD);
				}
				break;
			case SHARCParser.TCOUNT:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1373;
				this.match(SHARCParser.TCOUNT);
				}
				break;
			case SHARCParser.ASTAT:
			case SHARCParser.IMASK:
			case SHARCParser.IMASKP:
			case SHARCParser.IRPTL:
			case SHARCParser.MODE1:
			case SHARCParser.MODE2:
			case SHARCParser.STKY:
			case SHARCParser.USTAT1:
			case SHARCParser.USTAT2:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1374;
				this.s_reg();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public misc_exp(): Misc_expContext {
		let _localctx: Misc_expContext = new Misc_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, SHARCParser.RULE_misc_exp);
		let _la: number;
		try {
			this.state = 1420;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1377;
				this.match(SHARCParser.BIT);
				this.state = 1378;
				_la = this._input.LA(1);
				if (!(_la === SHARCParser.CLR || ((((_la - 326)) & ~0x1F) === 0 && ((1 << (_la - 326)) & ((1 << (SHARCParser.SET - 326)) | (1 << (SHARCParser.TGL - 326)) | (1 << (SHARCParser.TST - 326)))) !== 0) || _la === SHARCParser.XOR)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1379;
				this.s_reg();
				this.state = 1380;
				this.value_exp();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1382;
				this.match(SHARCParser.BITREV);
				this.state = 1385;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
				case 1:
					{
					this.state = 1383;
					this.mem_addr_ia_int();
					}
					break;

				case 2:
					{
					this.state = 1384;
					this.mem_addr_ic_int();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1387;
				this.match(SHARCParser.MODIFY);
				this.state = 1388;
				this.match(SHARCParser.LPARENTHESE);
				this.state = 1389;
				this.ia();
				this.state = 1390;
				this.match(SHARCParser.COMMA);
				this.state = 1391;
				this.value_exp();
				this.state = 1392;
				this.match(SHARCParser.RPARENTHESE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1394;
				this.match(SHARCParser.MODIFY);
				this.state = 1395;
				this.match(SHARCParser.LPARENTHESE);
				this.state = 1396;
				this.ic();
				this.state = 1397;
				this.match(SHARCParser.COMMA);
				this.state = 1398;
				this.value_exp();
				this.state = 1399;
				this.match(SHARCParser.RPARENTHESE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1401;
				this.misc_20();
				this.state = 1406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SHARCParser.COMMA) {
					{
					{
					this.state = 1402;
					this.match(SHARCParser.COMMA);
					this.state = 1403;
					this.misc_20();
					}
					}
					this.state = 1408;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1409;
				this.match(SHARCParser.FLUSH);
				this.state = 1410;
				this.match(SHARCParser.CACHE);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1411;
				this.match(SHARCParser.NOP);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1412;
				this.match(SHARCParser.IDLE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1413;
				this.match(SHARCParser.IDLE16);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1414;
				this.match(SHARCParser.CJUMP);
				this.state = 1415;
				this.jump_addr_int_or_pc();
				this.state = 1417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SHARCParser.LPARENTHESE) {
					{
					this.state = 1416;
					this.jump_modifier2();
					}
				}

				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1419;
				this.match(SHARCParser.RFRAME);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public misc_20(): Misc_20Context {
		let _localctx: Misc_20Context = new Misc_20Context(this._ctx, this.state);
		this.enterRule(_localctx, 246, SHARCParser.RULE_misc_20);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1422;
			_la = this._input.LA(1);
			if (!(_la === SHARCParser.POP || _la === SHARCParser.PUSH)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1423;
			_la = this._input.LA(1);
			if (!(_la === SHARCParser.LOOP || _la === SHARCParser.PCSTK || _la === SHARCParser.STS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directive_exp(): Directive_expContext {
		let _localctx: Directive_expContext = new Directive_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, SHARCParser.RULE_directive_exp);
		let _la: number;
		try {
			this.state = 1491;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.DOT_ALGIGN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1425;
				this.match(SHARCParser.DOT_ALGIGN);
				this.state = 1426;
				this.match(SHARCParser.INT);
				}
				break;
			case SHARCParser.DOT_COMPRESS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1427;
				this.match(SHARCParser.DOT_COMPRESS);
				}
				break;
			case SHARCParser.DOT_EXTERN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1428;
				this.match(SHARCParser.DOT_EXTERN);
				this.state = 1429;
				this.match(SHARCParser.ID);
				this.state = 1434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SHARCParser.COMMA) {
					{
					{
					this.state = 1430;
					this.match(SHARCParser.COMMA);
					this.state = 1431;
					this.match(SHARCParser.ID);
					}
					}
					this.state = 1436;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case SHARCParser.DOT_FILE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1437;
				this.match(SHARCParser.DOT_FILE);
				this.state = 1438;
				this.match(SHARCParser.StringLiteral);
				}
				break;
			case SHARCParser.DOT_FILE_ATTR:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1439;
				this.match(SHARCParser.DOT_FILE_ATTR);
				this.state = 1440;
				this.matchWildcard();
				}
				break;
			case SHARCParser.DOT_FORCECOMPRESS:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1441;
				this.match(SHARCParser.DOT_FORCECOMPRESS);
				}
				break;
			case SHARCParser.DOT_GLOBAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1442;
				this.match(SHARCParser.DOT_GLOBAL);
				this.state = 1443;
				this.match(SHARCParser.ID);
				this.state = 1448;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SHARCParser.COMMA) {
					{
					{
					this.state = 1444;
					this.match(SHARCParser.COMMA);
					this.state = 1445;
					this.match(SHARCParser.ID);
					}
					}
					this.state = 1450;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case SHARCParser.DOT_IMPORT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1451;
				this.match(SHARCParser.DOT_IMPORT);
				this.state = 1452;
				this.match(SHARCParser.StringLiteral);
				this.state = 1457;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SHARCParser.COMMA) {
					{
					{
					this.state = 1453;
					this.match(SHARCParser.COMMA);
					this.state = 1454;
					this.match(SHARCParser.StringLiteral);
					}
					}
					this.state = 1459;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case SHARCParser.DOT_LEFTMARGIN:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1460;
				this.match(SHARCParser.DOT_LEFTMARGIN);
				this.state = 1461;
				this.value_exp();
				}
				break;
			case SHARCParser.DOT_LIST:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1462;
				this.match(SHARCParser.DOT_LIST);
				}
				break;
			case SHARCParser.DOT_LIST_DATA:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1463;
				this.match(SHARCParser.DOT_LIST_DATA);
				}
				break;
			case SHARCParser.DOT_LIST_DATFILE:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1464;
				this.match(SHARCParser.DOT_LIST_DATFILE);
				}
				break;
			case SHARCParser.DOT_LIST_DEFTAB:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1465;
				this.match(SHARCParser.DOT_LIST_DEFTAB);
				this.state = 1466;
				this.value_exp();
				}
				break;
			case SHARCParser.DOT_LIST_LOCTAB:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1467;
				this.match(SHARCParser.DOT_LIST_LOCTAB);
				this.state = 1468;
				this.value_exp();
				}
				break;
			case SHARCParser.DOT_LIST_WRAPDATA:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1469;
				this.match(SHARCParser.DOT_LIST_WRAPDATA);
				}
				break;
			case SHARCParser.DOT_NEWPAGE:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1470;
				this.match(SHARCParser.DOT_NEWPAGE);
				}
				break;
			case SHARCParser.DOT_NOCOMPRESS:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1471;
				this.match(SHARCParser.DOT_NOCOMPRESS);
				}
				break;
			case SHARCParser.DOT_NOLIST_DATA:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1472;
				this.match(SHARCParser.DOT_NOLIST_DATA);
				}
				break;
			case SHARCParser.DOT_NOLIST_DATFILE:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1473;
				this.match(SHARCParser.DOT_NOLIST_DATFILE);
				}
				break;
			case SHARCParser.DOT_NOLIST_WRAPDATA:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1474;
				this.match(SHARCParser.DOT_NOLIST_WRAPDATA);
				}
				break;
			case SHARCParser.DOT_PAGELENGTH:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1475;
				this.match(SHARCParser.DOT_PAGELENGTH);
				this.state = 1476;
				this.value_exp();
				}
				break;
			case SHARCParser.DOT_PAGEWIDTH:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1477;
				this.match(SHARCParser.DOT_PAGEWIDTH);
				this.state = 1478;
				this.value_exp();
				}
				break;
			case SHARCParser.DOT_PRECISION:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1479;
				this.match(SHARCParser.DOT_PRECISION);
				{
				this.state = 1481;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SHARCParser.EQU) {
					{
					this.state = 1480;
					this.match(SHARCParser.EQU);
					}
				}

				}
				this.state = 1483;
				this.match(SHARCParser.INT);
				}
				break;
			case SHARCParser.DOT_ROUND_MINUS:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1484;
				this.match(SHARCParser.DOT_ROUND_MINUS);
				}
				break;
			case SHARCParser.DOT_ROUND_NEAREST:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1485;
				this.match(SHARCParser.DOT_ROUND_NEAREST);
				}
				break;
			case SHARCParser.DOT_ROUND_PLUS:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1486;
				this.match(SHARCParser.DOT_ROUND_PLUS);
				}
				break;
			case SHARCParser.DOT_ROUND_ZERO:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 1487;
				this.match(SHARCParser.DOT_ROUND_ZERO);
				}
				break;
			case SHARCParser.DOT_PREVIOUS:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 1488;
				this.match(SHARCParser.DOT_PREVIOUS);
				}
				break;
			case SHARCParser.DOT_WEAK:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 1489;
				this.match(SHARCParser.DOT_WEAK);
				this.state = 1490;
				this.match(SHARCParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public b_reg(): B_regContext {
		let _localctx: B_regContext = new B_regContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, SHARCParser.RULE_b_reg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1493;
			_la = this._input.LA(1);
			if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (SHARCParser.B0 - 57)) | (1 << (SHARCParser.B1 - 57)) | (1 << (SHARCParser.B2 - 57)) | (1 << (SHARCParser.B3 - 57)) | (1 << (SHARCParser.B4 - 57)) | (1 << (SHARCParser.B5 - 57)) | (1 << (SHARCParser.B6 - 57)) | (1 << (SHARCParser.B7 - 57)) | (1 << (SHARCParser.B8 - 57)) | (1 << (SHARCParser.B9 - 57)) | (1 << (SHARCParser.B10 - 57)) | (1 << (SHARCParser.B11 - 57)) | (1 << (SHARCParser.B12 - 57)) | (1 << (SHARCParser.B13 - 57)) | (1 << (SHARCParser.B14 - 57)) | (1 << (SHARCParser.B15 - 57)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public l_reg(): L_regContext {
		let _localctx: L_regContext = new L_regContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, SHARCParser.RULE_l_reg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1495;
			_la = this._input.LA(1);
			if (!(((((_la - 190)) & ~0x1F) === 0 && ((1 << (_la - 190)) & ((1 << (SHARCParser.L0 - 190)) | (1 << (SHARCParser.L1 - 190)) | (1 << (SHARCParser.L2 - 190)) | (1 << (SHARCParser.L3 - 190)) | (1 << (SHARCParser.L4 - 190)) | (1 << (SHARCParser.L5 - 190)) | (1 << (SHARCParser.L6 - 190)) | (1 << (SHARCParser.L7 - 190)) | (1 << (SHARCParser.L8 - 190)) | (1 << (SHARCParser.L9 - 190)) | (1 << (SHARCParser.L10 - 190)) | (1 << (SHARCParser.L11 - 190)) | (1 << (SHARCParser.L12 - 190)) | (1 << (SHARCParser.L13 - 190)) | (1 << (SHARCParser.L14 - 190)) | (1 << (SHARCParser.L15 - 190)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public r_reg(): R_regContext {
		let _localctx: R_regContext = new R_regContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, SHARCParser.RULE_r_reg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1497;
			_la = this._input.LA(1);
			if (!(((((_la - 297)) & ~0x1F) === 0 && ((1 << (_la - 297)) & ((1 << (SHARCParser.R0 - 297)) | (1 << (SHARCParser.R1 - 297)) | (1 << (SHARCParser.R2 - 297)) | (1 << (SHARCParser.R3 - 297)) | (1 << (SHARCParser.R4 - 297)) | (1 << (SHARCParser.R5 - 297)) | (1 << (SHARCParser.R6 - 297)) | (1 << (SHARCParser.R7 - 297)) | (1 << (SHARCParser.R8 - 297)) | (1 << (SHARCParser.R9 - 297)) | (1 << (SHARCParser.R10 - 297)) | (1 << (SHARCParser.R11 - 297)) | (1 << (SHARCParser.R12 - 297)) | (1 << (SHARCParser.R13 - 297)) | (1 << (SHARCParser.R14 - 297)) | (1 << (SHARCParser.R15 - 297)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public f_reg(): F_regContext {
		let _localctx: F_regContext = new F_regContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, SHARCParser.RULE_f_reg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1499;
			_la = this._input.LA(1);
			if (!(((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (SHARCParser.F0 - 126)) | (1 << (SHARCParser.F1 - 126)) | (1 << (SHARCParser.F2 - 126)) | (1 << (SHARCParser.F3 - 126)) | (1 << (SHARCParser.F4 - 126)) | (1 << (SHARCParser.F5 - 126)) | (1 << (SHARCParser.F6 - 126)) | (1 << (SHARCParser.F7 - 126)) | (1 << (SHARCParser.F8 - 126)) | (1 << (SHARCParser.F9 - 126)) | (1 << (SHARCParser.F10 - 126)) | (1 << (SHARCParser.F11 - 126)) | (1 << (SHARCParser.F12 - 126)) | (1 << (SHARCParser.F13 - 126)) | (1 << (SHARCParser.F14 - 126)) | (1 << (SHARCParser.F15 - 126)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public s_reg(): S_regContext {
		let _localctx: S_regContext = new S_regContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, SHARCParser.RULE_s_reg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1501;
			_la = this._input.LA(1);
			if (!(_la === SHARCParser.ASTAT || ((((_la - 185)) & ~0x1F) === 0 && ((1 << (_la - 185)) & ((1 << (SHARCParser.IMASK - 185)) | (1 << (SHARCParser.IMASKP - 185)) | (1 << (SHARCParser.IRPTL - 185)))) !== 0) || _la === SHARCParser.MODE1 || _la === SHARCParser.MODE2 || ((((_la - 340)) & ~0x1F) === 0 && ((1 << (_la - 340)) & ((1 << (SHARCParser.STKY - 340)) | (1 << (SHARCParser.USTAT1 - 340)) | (1 << (SHARCParser.USTAT2 - 340)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ia(): IaContext {
		let _localctx: IaContext = new IaContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, SHARCParser.RULE_ia);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1503;
			_la = this._input.LA(1);
			if (!(((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (SHARCParser.I0 - 164)) | (1 << (SHARCParser.I1 - 164)) | (1 << (SHARCParser.I2 - 164)) | (1 << (SHARCParser.I3 - 164)) | (1 << (SHARCParser.I4 - 164)) | (1 << (SHARCParser.I5 - 164)) | (1 << (SHARCParser.I6 - 164)) | (1 << (SHARCParser.I7 - 164)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mb(): MbContext {
		let _localctx: MbContext = new MbContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, SHARCParser.RULE_mb);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1505;
			_la = this._input.LA(1);
			if (!(((((_la - 223)) & ~0x1F) === 0 && ((1 << (_la - 223)) & ((1 << (SHARCParser.M0 - 223)) | (1 << (SHARCParser.M1 - 223)) | (1 << (SHARCParser.M2 - 223)) | (1 << (SHARCParser.M3 - 223)) | (1 << (SHARCParser.M4 - 223)) | (1 << (SHARCParser.M5 - 223)) | (1 << (SHARCParser.M6 - 223)) | (1 << (SHARCParser.M7 - 223)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ic(): IcContext {
		let _localctx: IcContext = new IcContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, SHARCParser.RULE_ic);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1507;
			_la = this._input.LA(1);
			if (!(((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & ((1 << (SHARCParser.I8 - 172)) | (1 << (SHARCParser.I9 - 172)) | (1 << (SHARCParser.I10 - 172)) | (1 << (SHARCParser.I11 - 172)) | (1 << (SHARCParser.I12 - 172)) | (1 << (SHARCParser.I13 - 172)) | (1 << (SHARCParser.I14 - 172)) | (1 << (SHARCParser.I15 - 172)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public md(): MdContext {
		let _localctx: MdContext = new MdContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, SHARCParser.RULE_md);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1509;
			_la = this._input.LA(1);
			if (!(((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & ((1 << (SHARCParser.M8 - 231)) | (1 << (SHARCParser.M9 - 231)) | (1 << (SHARCParser.M10 - 231)) | (1 << (SHARCParser.M11 - 231)) | (1 << (SHARCParser.M12 - 231)) | (1 << (SHARCParser.M13 - 231)) | (1 << (SHARCParser.M14 - 231)) | (1 << (SHARCParser.M15 - 231)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public i_reg(): I_regContext {
		let _localctx: I_regContext = new I_regContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, SHARCParser.RULE_i_reg);
		try {
			this.state = 1513;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.I0:
			case SHARCParser.I1:
			case SHARCParser.I2:
			case SHARCParser.I3:
			case SHARCParser.I4:
			case SHARCParser.I5:
			case SHARCParser.I6:
			case SHARCParser.I7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1511;
				this.ia();
				}
				break;
			case SHARCParser.I8:
			case SHARCParser.I9:
			case SHARCParser.I10:
			case SHARCParser.I11:
			case SHARCParser.I12:
			case SHARCParser.I13:
			case SHARCParser.I14:
			case SHARCParser.I15:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1512;
				this.ic();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public m_reg(): M_regContext {
		let _localctx: M_regContext = new M_regContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, SHARCParser.RULE_m_reg);
		try {
			this.state = 1517;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.M0:
			case SHARCParser.M1:
			case SHARCParser.M2:
			case SHARCParser.M3:
			case SHARCParser.M4:
			case SHARCParser.M5:
			case SHARCParser.M6:
			case SHARCParser.M7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1515;
				this.mb();
				}
				break;
			case SHARCParser.M8:
			case SHARCParser.M9:
			case SHARCParser.M10:
			case SHARCParser.M11:
			case SHARCParser.M12:
			case SHARCParser.M13:
			case SHARCParser.M14:
			case SHARCParser.M15:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1516;
				this.md();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dag_reg(): Dag_regContext {
		let _localctx: Dag_regContext = new Dag_regContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, SHARCParser.RULE_dag_reg);
		try {
			this.state = 1523;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.I0:
			case SHARCParser.I1:
			case SHARCParser.I2:
			case SHARCParser.I3:
			case SHARCParser.I4:
			case SHARCParser.I5:
			case SHARCParser.I6:
			case SHARCParser.I7:
			case SHARCParser.I8:
			case SHARCParser.I9:
			case SHARCParser.I10:
			case SHARCParser.I11:
			case SHARCParser.I12:
			case SHARCParser.I13:
			case SHARCParser.I14:
			case SHARCParser.I15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1519;
				this.i_reg();
				}
				break;
			case SHARCParser.M0:
			case SHARCParser.M1:
			case SHARCParser.M2:
			case SHARCParser.M3:
			case SHARCParser.M4:
			case SHARCParser.M5:
			case SHARCParser.M6:
			case SHARCParser.M7:
			case SHARCParser.M8:
			case SHARCParser.M9:
			case SHARCParser.M10:
			case SHARCParser.M11:
			case SHARCParser.M12:
			case SHARCParser.M13:
			case SHARCParser.M14:
			case SHARCParser.M15:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1520;
				this.m_reg();
				}
				break;
			case SHARCParser.B0:
			case SHARCParser.B1:
			case SHARCParser.B2:
			case SHARCParser.B3:
			case SHARCParser.B4:
			case SHARCParser.B5:
			case SHARCParser.B6:
			case SHARCParser.B7:
			case SHARCParser.B8:
			case SHARCParser.B9:
			case SHARCParser.B10:
			case SHARCParser.B11:
			case SHARCParser.B12:
			case SHARCParser.B13:
			case SHARCParser.B14:
			case SHARCParser.B15:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1521;
				this.b_reg();
				}
				break;
			case SHARCParser.L0:
			case SHARCParser.L1:
			case SHARCParser.L2:
			case SHARCParser.L3:
			case SHARCParser.L4:
			case SHARCParser.L5:
			case SHARCParser.L6:
			case SHARCParser.L7:
			case SHARCParser.L8:
			case SHARCParser.L9:
			case SHARCParser.L10:
			case SHARCParser.L11:
			case SHARCParser.L12:
			case SHARCParser.L13:
			case SHARCParser.L14:
			case SHARCParser.L15:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1522;
				this.l_reg();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public d_reg(): D_regContext {
		let _localctx: D_regContext = new D_regContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, SHARCParser.RULE_d_reg);
		try {
			this.state = 1527;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.R0:
			case SHARCParser.R1:
			case SHARCParser.R2:
			case SHARCParser.R3:
			case SHARCParser.R4:
			case SHARCParser.R5:
			case SHARCParser.R6:
			case SHARCParser.R7:
			case SHARCParser.R8:
			case SHARCParser.R9:
			case SHARCParser.R10:
			case SHARCParser.R11:
			case SHARCParser.R12:
			case SHARCParser.R13:
			case SHARCParser.R14:
			case SHARCParser.R15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1525;
				this.r_reg();
				}
				break;
			case SHARCParser.F0:
			case SHARCParser.F1:
			case SHARCParser.F2:
			case SHARCParser.F3:
			case SHARCParser.F4:
			case SHARCParser.F5:
			case SHARCParser.F6:
			case SHARCParser.F7:
			case SHARCParser.F8:
			case SHARCParser.F9:
			case SHARCParser.F10:
			case SHARCParser.F11:
			case SHARCParser.F12:
			case SHARCParser.F13:
			case SHARCParser.F14:
			case SHARCParser.F15:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1526;
				this.f_reg();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public u_reg(): U_regContext {
		let _localctx: U_regContext = new U_regContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, SHARCParser.RULE_u_reg);
		try {
			this.state = 1545;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHARCParser.F0:
			case SHARCParser.F1:
			case SHARCParser.F2:
			case SHARCParser.F3:
			case SHARCParser.F4:
			case SHARCParser.F5:
			case SHARCParser.F6:
			case SHARCParser.F7:
			case SHARCParser.F8:
			case SHARCParser.F9:
			case SHARCParser.F10:
			case SHARCParser.F11:
			case SHARCParser.F12:
			case SHARCParser.F13:
			case SHARCParser.F14:
			case SHARCParser.F15:
			case SHARCParser.R0:
			case SHARCParser.R1:
			case SHARCParser.R2:
			case SHARCParser.R3:
			case SHARCParser.R4:
			case SHARCParser.R5:
			case SHARCParser.R6:
			case SHARCParser.R7:
			case SHARCParser.R8:
			case SHARCParser.R9:
			case SHARCParser.R10:
			case SHARCParser.R11:
			case SHARCParser.R12:
			case SHARCParser.R13:
			case SHARCParser.R14:
			case SHARCParser.R15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1529;
				this.d_reg();
				}
				break;
			case SHARCParser.PC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1530;
				this.match(SHARCParser.PC);
				}
				break;
			case SHARCParser.PCSTK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1531;
				this.match(SHARCParser.PCSTK);
				}
				break;
			case SHARCParser.PCSTKP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1532;
				this.match(SHARCParser.PCSTKP);
				}
				break;
			case SHARCParser.FADDR:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1533;
				this.match(SHARCParser.FADDR);
				}
				break;
			case SHARCParser.DADDR:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1534;
				this.match(SHARCParser.DADDR);
				}
				break;
			case SHARCParser.LADDR:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1535;
				this.match(SHARCParser.LADDR);
				}
				break;
			case SHARCParser.CURLCNTR:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1536;
				this.match(SHARCParser.CURLCNTR);
				}
				break;
			case SHARCParser.LCNTR:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1537;
				this.match(SHARCParser.LCNTR);
				}
				break;
			case SHARCParser.B0:
			case SHARCParser.B1:
			case SHARCParser.B2:
			case SHARCParser.B3:
			case SHARCParser.B4:
			case SHARCParser.B5:
			case SHARCParser.B6:
			case SHARCParser.B7:
			case SHARCParser.B8:
			case SHARCParser.B9:
			case SHARCParser.B10:
			case SHARCParser.B11:
			case SHARCParser.B12:
			case SHARCParser.B13:
			case SHARCParser.B14:
			case SHARCParser.B15:
			case SHARCParser.I0:
			case SHARCParser.I1:
			case SHARCParser.I2:
			case SHARCParser.I3:
			case SHARCParser.I4:
			case SHARCParser.I5:
			case SHARCParser.I6:
			case SHARCParser.I7:
			case SHARCParser.I8:
			case SHARCParser.I9:
			case SHARCParser.I10:
			case SHARCParser.I11:
			case SHARCParser.I12:
			case SHARCParser.I13:
			case SHARCParser.I14:
			case SHARCParser.I15:
			case SHARCParser.L0:
			case SHARCParser.L1:
			case SHARCParser.L2:
			case SHARCParser.L3:
			case SHARCParser.L4:
			case SHARCParser.L5:
			case SHARCParser.L6:
			case SHARCParser.L7:
			case SHARCParser.L8:
			case SHARCParser.L9:
			case SHARCParser.L10:
			case SHARCParser.L11:
			case SHARCParser.L12:
			case SHARCParser.L13:
			case SHARCParser.L14:
			case SHARCParser.L15:
			case SHARCParser.M0:
			case SHARCParser.M1:
			case SHARCParser.M2:
			case SHARCParser.M3:
			case SHARCParser.M4:
			case SHARCParser.M5:
			case SHARCParser.M6:
			case SHARCParser.M7:
			case SHARCParser.M8:
			case SHARCParser.M9:
			case SHARCParser.M10:
			case SHARCParser.M11:
			case SHARCParser.M12:
			case SHARCParser.M13:
			case SHARCParser.M14:
			case SHARCParser.M15:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1538;
				this.dag_reg();
				}
				break;
			case SHARCParser.PX1:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1539;
				this.match(SHARCParser.PX1);
				}
				break;
			case SHARCParser.PX2:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1540;
				this.match(SHARCParser.PX2);
				}
				break;
			case SHARCParser.PX:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1541;
				this.match(SHARCParser.PX);
				}
				break;
			case SHARCParser.TPERIOD:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1542;
				this.match(SHARCParser.TPERIOD);
				}
				break;
			case SHARCParser.TCOUNT:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1543;
				this.match(SHARCParser.TCOUNT);
				}
				break;
			case SHARCParser.ASTAT:
			case SHARCParser.IMASK:
			case SHARCParser.IMASKP:
			case SHARCParser.IRPTL:
			case SHARCParser.MODE1:
			case SHARCParser.MODE2:
			case SHARCParser.STKY:
			case SHARCParser.USTAT1:
			case SHARCParser.USTAT2:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1544;
				this.s_reg();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, SHARCParser.RULE_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1547;
			this.ccondition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ccondition(): CconditionContext {
		let _localctx: CconditionContext = new CconditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, SHARCParser.RULE_ccondition);
		try {
			this.state = 1595;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1549;
				this.match(SHARCParser.EQ);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1550;
				this.match(SHARCParser.LT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1551;
				this.match(SHARCParser.LE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1552;
				this.match(SHARCParser.AC);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1553;
				this.match(SHARCParser.AV);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1554;
				this.match(SHARCParser.MV);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1555;
				this.match(SHARCParser.MS);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1556;
				this.match(SHARCParser.SV);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1557;
				this.match(SHARCParser.SZ);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1558;
				this.match(SHARCParser.FLAG0_IN);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1559;
				this.match(SHARCParser.FLAG1_IN);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1560;
				this.match(SHARCParser.FLAG2_IN);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1561;
				this.match(SHARCParser.FLAG3_IN);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1562;
				this.match(SHARCParser.TF);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1563;
				this.match(SHARCParser.BM);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1564;
				this.match(SHARCParser.LCE);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1565;
				this.match(SHARCParser.NOT);
				this.state = 1566;
				this.match(SHARCParser.LCE);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1567;
				this.match(SHARCParser.NE);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1568;
				this.match(SHARCParser.GE);
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1569;
				this.match(SHARCParser.GT);
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1570;
				this.match(SHARCParser.NOT);
				this.state = 1571;
				this.match(SHARCParser.AC);
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1572;
				this.match(SHARCParser.NOT);
				this.state = 1573;
				this.match(SHARCParser.AV);
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1574;
				this.match(SHARCParser.NOT);
				this.state = 1575;
				this.match(SHARCParser.MV);
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1576;
				this.match(SHARCParser.NOT);
				this.state = 1577;
				this.match(SHARCParser.MS);
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1578;
				this.match(SHARCParser.NOT);
				this.state = 1579;
				this.match(SHARCParser.SV);
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1580;
				this.match(SHARCParser.NOT);
				this.state = 1581;
				this.match(SHARCParser.SZ);
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 1582;
				this.match(SHARCParser.NOT);
				this.state = 1583;
				this.match(SHARCParser.FLAG0_IN);
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 1584;
				this.match(SHARCParser.NOT);
				this.state = 1585;
				this.match(SHARCParser.FLAG1_IN);
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 1586;
				this.match(SHARCParser.NOT);
				this.state = 1587;
				this.match(SHARCParser.FLAG2_IN);
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 1588;
				this.match(SHARCParser.NOT);
				this.state = 1589;
				this.match(SHARCParser.FLAG3_IN);
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 1590;
				this.match(SHARCParser.NOT);
				this.state = 1591;
				this.match(SHARCParser.TF);
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 1592;
				this.match(SHARCParser.NBM);
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 1593;
				this.match(SHARCParser.FOREVER);
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 1594;
				this.match(SHARCParser.TRUE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multi_mod1(): Multi_mod1Context {
		let _localctx: Multi_mod1Context = new Multi_mod1Context(this._ctx, this.state);
		this.enterRule(_localctx, 282, SHARCParser.RULE_multi_mod1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1597;
			this.multi_mod1_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multi_mod1_(): Multi_mod1_Context {
		let _localctx: Multi_mod1_Context = new Multi_mod1_Context(this._ctx, this.state);
		this.enterRule(_localctx, 284, SHARCParser.RULE_multi_mod1_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1599;
			this.match(SHARCParser.LPARENTHESE);
			this.state = 1600;
			_la = this._input.LA(1);
			if (!(_la === SHARCParser.SF || _la === SHARCParser.SI || _la === SHARCParser.UF || _la === SHARCParser.UI)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1601;
			this.match(SHARCParser.RPARENTHESE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multi_mod2(): Multi_mod2Context {
		let _localctx: Multi_mod2Context = new Multi_mod2Context(this._ctx, this.state);
		this.enterRule(_localctx, 286, SHARCParser.RULE_multi_mod2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1603;
			this.multi_mod2_();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multi_mod2_(): Multi_mod2_Context {
		let _localctx: Multi_mod2_Context = new Multi_mod2_Context(this._ctx, this.state);
		this.enterRule(_localctx, 288, SHARCParser.RULE_multi_mod2_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1605;
			this.match(SHARCParser.LPARENTHESE);
			this.state = 1606;
			_la = this._input.LA(1);
			if (!(((((_la - 334)) & ~0x1F) === 0 && ((1 << (_la - 334)) & ((1 << (SHARCParser.SSF - 334)) | (1 << (SHARCParser.SSFR - 334)) | (1 << (SHARCParser.SSI - 334)) | (1 << (SHARCParser.SUF - 334)) | (1 << (SHARCParser.SUFR - 334)) | (1 << (SHARCParser.SUI - 334)) | (1 << (SHARCParser.USF - 334)) | (1 << (SHARCParser.USFR - 334)))) !== 0) || ((((_la - 366)) & ~0x1F) === 0 && ((1 << (_la - 366)) & ((1 << (SHARCParser.USI - 366)) | (1 << (SHARCParser.UUF - 366)) | (1 << (SHARCParser.UUFR - 366)) | (1 << (SHARCParser.UUI - 366)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1607;
			this.match(SHARCParser.RPARENTHESE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public r3_0(): R3_0Context {
		let _localctx: R3_0Context = new R3_0Context(this._ctx, this.state);
		this.enterRule(_localctx, 290, SHARCParser.RULE_r3_0);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1609;
			_la = this._input.LA(1);
			if (!(((((_la - 297)) & ~0x1F) === 0 && ((1 << (_la - 297)) & ((1 << (SHARCParser.R0 - 297)) | (1 << (SHARCParser.R2 - 297)) | (1 << (SHARCParser.R3 - 297)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public r7_4(): R7_4Context {
		let _localctx: R7_4Context = new R7_4Context(this._ctx, this.state);
		this.enterRule(_localctx, 292, SHARCParser.RULE_r7_4);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1611;
			_la = this._input.LA(1);
			if (!(((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (SHARCParser.R4 - 301)) | (1 << (SHARCParser.R5 - 301)) | (1 << (SHARCParser.R6 - 301)) | (1 << (SHARCParser.R7 - 301)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public r11_8(): R11_8Context {
		let _localctx: R11_8Context = new R11_8Context(this._ctx, this.state);
		this.enterRule(_localctx, 294, SHARCParser.RULE_r11_8);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1613;
			_la = this._input.LA(1);
			if (!(((((_la - 305)) & ~0x1F) === 0 && ((1 << (_la - 305)) & ((1 << (SHARCParser.R8 - 305)) | (1 << (SHARCParser.R9 - 305)) | (1 << (SHARCParser.R10 - 305)) | (1 << (SHARCParser.R11 - 305)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public r15_12(): R15_12Context {
		let _localctx: R15_12Context = new R15_12Context(this._ctx, this.state);
		this.enterRule(_localctx, 296, SHARCParser.RULE_r15_12);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1615;
			_la = this._input.LA(1);
			if (!(((((_la - 309)) & ~0x1F) === 0 && ((1 << (_la - 309)) & ((1 << (SHARCParser.R12 - 309)) | (1 << (SHARCParser.R13 - 309)) | (1 << (SHARCParser.R14 - 309)) | (1 << (SHARCParser.R15 - 309)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public f3_0(): F3_0Context {
		let _localctx: F3_0Context = new F3_0Context(this._ctx, this.state);
		this.enterRule(_localctx, 298, SHARCParser.RULE_f3_0);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1617;
			_la = this._input.LA(1);
			if (!(((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (SHARCParser.F0 - 126)) | (1 << (SHARCParser.F2 - 126)) | (1 << (SHARCParser.F3 - 126)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public f7_4(): F7_4Context {
		let _localctx: F7_4Context = new F7_4Context(this._ctx, this.state);
		this.enterRule(_localctx, 300, SHARCParser.RULE_f7_4);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1619;
			_la = this._input.LA(1);
			if (!(((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (SHARCParser.F4 - 130)) | (1 << (SHARCParser.F5 - 130)) | (1 << (SHARCParser.F6 - 130)) | (1 << (SHARCParser.F7 - 130)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public f11_8(): F11_8Context {
		let _localctx: F11_8Context = new F11_8Context(this._ctx, this.state);
		this.enterRule(_localctx, 302, SHARCParser.RULE_f11_8);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1621;
			_la = this._input.LA(1);
			if (!(((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (SHARCParser.F8 - 134)) | (1 << (SHARCParser.F9 - 134)) | (1 << (SHARCParser.F10 - 134)) | (1 << (SHARCParser.F11 - 134)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public f15_12(): F15_12Context {
		let _localctx: F15_12Context = new F15_12Context(this._ctx, this.state);
		this.enterRule(_localctx, 304, SHARCParser.RULE_f15_12);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1623;
			_la = this._input.LA(1);
			if (!(((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & ((1 << (SHARCParser.F12 - 138)) | (1 << (SHARCParser.F13 - 138)) | (1 << (SHARCParser.F14 - 138)) | (1 << (SHARCParser.F15 - 138)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addr(): AddrContext {
		let _localctx: AddrContext = new AddrContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, SHARCParser.RULE_addr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1625;
			_la = this._input.LA(1);
			if (!(_la === SHARCParser.INT || _la === SHARCParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mrf(): MrfContext {
		let _localctx: MrfContext = new MrfContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, SHARCParser.RULE_mrf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1627;
			_la = this._input.LA(1);
			if (!(((((_la - 248)) & ~0x1F) === 0 && ((1 << (_la - 248)) & ((1 << (SHARCParser.MR0F - 248)) | (1 << (SHARCParser.MR1F - 248)) | (1 << (SHARCParser.MR2F - 248)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mrb(): MrbContext {
		let _localctx: MrbContext = new MrbContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, SHARCParser.RULE_mrb);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1629;
			_la = this._input.LA(1);
			if (!(((((_la - 247)) & ~0x1F) === 0 && ((1 << (_la - 247)) & ((1 << (SHARCParser.MR0B - 247)) | (1 << (SHARCParser.MR1B - 247)) | (1 << (SHARCParser.MR2B - 247)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u01AC\u0662\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x03\x02\x03\x02\x03\x02\x06" +
		"\x02\u013E\n\x02\r\x02\x0E\x02\u013F\x03\x03\x03\x03\x03\x03\x06\x03\u0145" +
		"\n\x03\r\x03\x0E\x03\u0146\x03\x03\x05\x03\u014A\n\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x05\x04\u0151\n\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
		"\x05\b\u0160\n\b\x03\b\x03\b\x03\b\x05\b\u0165\n\b\x03\b\x03\b\x03\b\x05" +
		"\b\u016A\n\b\x05\b\u016C\n\b\x03\t\x03\t\x03\t\x05\t\u0171\n\t\x03\n\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0186\n\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u018E\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x07\x11\u0193\n\x11\f\x11\x0E\x11\u0196\v\x11\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x07\x12\u019C\n\x12\f\x12\x0E\x12\u019F\v" +
		"\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01A6\n\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u01AE\n\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x07\x16\u01B7\n\x16\f\x16" +
		"\x0E\x16\u01BA\v\x16\x03\x16\x05\x16\u01BD\n\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x05\x17\u01C4\n\x17\x03\x18\x03\x18\x05\x18\u01C8\n\x18" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01D0\n\x19\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u01D7\n\x1B\f\x1B\x0E\x1B" +
		"\u01DA\v\x1B\x03\x1C\x05\x1C\u01DD\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01E6\n\x1D\x03\x1E\x03\x1E\x03\x1E\x05" +
		"\x1E\u01EB\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01F2" +
		"\n\x1F\x03 \x03 \x03 \x03 \x03!\x03!\x05!\u01FA\n!\x03\"\x03\"\x03\"\x05" +
		"\"\u01FF\n\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x05\"\u020C\n\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$" +
		"\x03$\x03$\x03$\x05$\u021A\n$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%" +
		"\x05%\u0224\n%\x03&\x03&\x05&\u0228\n&\x03&\x03&\x03&\x03\'\x03\'\x05" +
		"\'\u022F\n\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x05(\u0238\n(\x03)" +
		"\x03)\x03)\x03)\x05)\u023E\n)\x03*\x03*\x05*\u0242\n*\x03*\x03*\x03*\x03" +
		"+\x03+\x03,\x03,\x03,\x03,\x05,\u024D\n,\x03-\x03-\x03.\x03.\x03.\x03" +
		".\x03/\x03/\x05/\u0257\n/\x03/\x03/\x03/\x030\x030\x030\x030\x050\u0260" +
		"\n0\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x031\x05" +
		"1\u026F\n1\x032\x032\x032\x032\x032\x032\x033\x033\x033\x033\x033\x03" +
		"3\x034\x034\x034\x034\x034\x034\x035\x035\x035\x035\x035\x035\x036\x03" +
		"6\x036\x036\x036\x036\x037\x037\x037\x037\x037\x037\x038\x038\x038\x03" +
		"8\x038\x038\x039\x039\x039\x039\x039\x039\x03:\x03:\x03;\x03;\x03;\x03" +
		";\x03;\x05;\u02A8\n;\x03<\x03<\x03<\x03=\x03=\x03=\x03>\x03>\x03>\x03" +
		"?\x03?\x03?\x03@\x03@\x03@\x03A\x03A\x03A\x03B\x03B\x03B\x03C\x03C\x03" +
		"C\x03D\x03D\x03D\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
		"F\x03F\x03F\x03F\x05F\u02D3\nF\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05" +
		"G\u0330\nG\x03G\x03G\x03G\x03G\x05G\u0336\nG\x05G\u0338\nG\x03H\x03H\x03" +
		"H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u0345\nH\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x05I\u0376\nI\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03" +
		"I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u0397\nI\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05" +
		"J\u03A9\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u03B2\nJ\x05J\u03B4" +
		"\nJ\x03K\x03K\x03K\x03K\x05K\u03BA\nK\x03L\x03L\x03L\x03L\x03L\x03L\x03" +
		"L\x03L\x05L\u03C4\nL\x03L\x03L\x03L\x05L\u03C9\nL\x03L\x05L\u03CC\nL\x03" +
		"M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x05M\u03D6\nM\x03M\x03M\x03M\x05" +
		"M\u03DB\nM\x05M\u03DD\nM\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x05N" +
		"\u03E7\nN\x03N\x03N\x03N\x05N\u03EC\nN\x05N\u03EE\nN\x03O\x03O\x03P\x03" +
		"P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x05P\u0400" +
		"\nP\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03" +
		"Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03" +
		"Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03" +
		"Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u0435\nQ\x03Q\x03" +
		"Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u043E\nQ\x03Q\x03Q\x03Q\x03Q\x03Q\x03" +
		"Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u044C\nQ\x03Q\x03Q\x03Q\x03Q\x03" +
		"Q\x03Q\x05Q\u0454\nQ\x03R\x03R\x03R\x03R\x05R\u045A\nR\x03S\x03S\x05S" +
		"\u045E\nS\x03T\x03T\x03T\x03T\x03U\x03U\x03V\x03V\x05V\u0468\nV\x03W\x03" +
		"W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03X\x03X\x03X\x06" +
		"X\u0479\nX\rX\x0EX\u047A\x03X\x03X\x03X\x06X\u0480\nX\rX\x0EX\u0481\x05" +
		"X\u0484\nX\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05" +
		"Y\u0491\nY\x03Z\x03Z\x03Z\x03Z\x03[\x03[\x05[\u0499\n[\x03\\\x03\\\x03" +
		"\\\x03\\\x03\\\x03\\\x03\\\x03]\x03]\x03]\x03]\x05]\u04A6\n]\x03^\x03" +
		"^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u04B1\n^\x03^\x03^\x03_\x03" +
		"_\x05_\u04B7\n_\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03`\x03a\x03" +
		"a\x05a\u04C4\na\x03b\x03b\x03b\x03b\x03b\x03c\x03c\x03c\x05c\u04CE\nc" +
		"\x03d\x03d\x03d\x05d\u04D3\nd\x03e\x03e\x03e\x05e\u04D8\ne\x03e\x03e\x05" +
		"e\u04DC\ne\x03f\x03f\x03f\x05f\u04E1\nf\x03f\x03f\x05f\u04E5\nf\x03g\x03" +
		"g\x05g\u04E9\ng\x03g\x03g\x05g\u04ED\ng\x03h\x03h\x05h\u04F1\nh\x03h\x03" +
		"h\x05h\u04F5\nh\x03i\x03i\x05i\u04F9\ni\x03j\x03j\x05j\u04FD\nj\x03k\x03" +
		"k\x03k\x03k\x03k\x03k\x03l\x03l\x03m\x03m\x03n\x03n\x03n\x03n\x05n\u050D" +
		"\nn\x03n\x03n\x03o\x03o\x03o\x05o\u0514\no\x03p\x03p\x03p\x03p\x03q\x03" +
		"q\x03r\x03r\x03r\x05r\u051F\nr\x03r\x03r\x03s\x03s\x03s\x05s\u0526\ns" +
		"\x03t\x03t\x03t\x03t\x05t\u052C\nt\x03u\x03u\x05u\u0530\nu\x03u\x03u\x03" +
		"u\x03v\x03v\x05v\u0537\nv\x03v\x03v\x03v\x03w\x03w\x03w\x03w\x05w\u0540" +
		"\nw\x03x\x03x\x03x\x03x\x05x\u0546\nx\x03y\x03y\x05y\u054A\ny\x03y\x03" +
		"y\x03y\x03z\x03z\x03z\x03z\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03{\x03" +
		"{\x03{\x03{\x03{\x03{\x03{\x03{\x05{\u0562\n{\x03|\x03|\x03|\x03|\x03" +
		"|\x03|\x03|\x03|\x05|\u056C\n|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03" +
		"|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x07|\u057F\n|\f|\x0E|\u0582" +
		"\v|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x05|\u058C\n|\x03|\x05|\u058F" +
		"\n|\x03}\x03}\x03}\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x07~\u059B\n~\f" +
		"~\x0E~\u059E\v~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x07~\u05A9" +
		"\n~\f~\x0E~\u05AC\v~\x03~\x03~\x03~\x03~\x07~\u05B2\n~\f~\x0E~\u05B5\v" +
		"~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03" +
		"~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x05~\u05CC\n~\x03~\x03~\x03~\x03" +
		"~\x03~\x03~\x03~\x03~\x05~\u05D6\n~\x03\x7F\x03\x7F\x03\x80\x03\x80\x03" +
		"\x81\x03\x81\x03\x82\x03\x82\x03\x83\x03\x83\x03\x84\x03\x84\x03\x85\x03" +
		"\x85\x03\x86\x03\x86\x03\x87\x03\x87\x03\x88\x03\x88\x05\x88\u05EC\n\x88" +
		"\x03\x89\x03\x89\x05\x89\u05F0\n\x89\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05" +
		"\x8A\u05F6\n\x8A\x03\x8B\x03\x8B\x05\x8B\u05FA\n\x8B\x03\x8C\x03\x8C\x03" +
		"\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03" +
		"\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u060C\n\x8C\x03\x8D\x03\x8D" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x03\x8E\x05\x8E\u063E\n\x8E\x03\x8F\x03\x8F\x03\x90\x03\x90\x03\x90\x03" +
		"\x90\x03\x91\x03\x91\x03\x92\x03\x92\x03\x92\x03\x92\x03\x93\x03\x93\x03" +
		"\x94\x03\x94\x03\x95\x03\x95\x03\x96\x03\x96\x03\x97\x03\x97\x03\x98\x03" +
		"\x98\x03\x99\x03\x99\x03\x9A\x03\x9A\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x03" +
		"\x9D\x03\x9D\x03\x9D\x02\x02\x02\x9E\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
		"\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
		"\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02" +
		"\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02" +
		"\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02" +
		"\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02" +
		"\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02" +
		"\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104" +
		"\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112" +
		"\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120" +
		"\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E" +
		"\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\x02\"\x04\x02\u0117" +
		"\u0117\u0190\u0190\x04\x02gg\u0191\u0192\x03\x02\u018D\u018F\x04\x02\u017B" +
		"\u017F\u0181\u0182\x03\x02\u017B\u017C\x03\x02\xFF\u0100\x04\x02YY\xD0" +
		"\xD0\x07\x02\\\\\u0148\u0148\u0162\u0162\u0166\u0166\u017A\u017A\x04\x02" +
		"\u011C\u011C\u0126\u0126\x05\x02\xDD\xDD\u0115\u0115\u0158\u0158\x03\x02" +
		";J\x03\x02\xC0\xCF\x03\x02\u012B\u013A\x03\x02\x80\x8F\b\x0299\xBB\xBC" +
		"\xBE\xBE\xF6\xF7\u0156\u0156\u0172\u0173\x03\x02\xA6\xAD\x03\x02\xE1\xE8" +
		"\x03\x02\xAE\xB5\x03\x02\xE9\xF0\x04\x02\u0149\u014A\u0169\u016A\x06\x02" +
		"\u0150\u0152\u0159\u015B\u016E\u0170\u0174\u0176\x04\x02\u012B\u012B\u012D" +
		"\u012E\x03\x02\u012F\u0132\x03\x02\u0133\u0136\x03\x02\u0137\u013A\x04" +
		"\x02\x80\x80\x82\x83\x03\x02\x84\x87\x03\x02\x88\x8B\x03\x02\x8C\x8F\x04" +
		"\x02\x05\x05\u01AB\u01AB\x05\x02\xFA\xFA\xFC\xFC\xFE\xFE\x05\x02\xF9\xF9" +
		"\xFB\xFB\xFD\xFD\x02\u0701\x02\u013D\x03\x02\x02\x02\x04\u0149\x03\x02" +
		"\x02\x02\x06\u0150\x03\x02\x02\x02\b\u0152\x03\x02\x02\x02\n\u0156\x03" +
		"\x02\x02\x02\f\u015A\x03\x02\x02\x02\x0E\u016B\x03\x02\x02\x02\x10\u016D" +
		"\x03\x02\x02\x02\x12\u0172\x03\x02\x02\x02\x14\u0175\x03\x02\x02\x02\x16" +
		"\u0178\x03\x02\x02\x02\x18\u017A\x03\x02\x02\x02\x1A\u017C\x03\x02\x02" +
		"\x02\x1C\u0185\x03\x02\x02\x02\x1E\u0187\x03\x02\x02\x02 \u018F\x03\x02" +
		"\x02\x02\"\u0197\x03\x02\x02\x02$\u01A0\x03\x02\x02\x02&\u01A7\x03\x02" +
		"\x02\x02(\u01AF\x03\x02\x02\x02*\u01BC\x03\x02\x02\x02,\u01C3\x03\x02" +
		"\x02\x02.\u01C7\x03\x02\x02\x020\u01CF\x03\x02\x02\x022\u01D1\x03\x02" +
		"\x02\x024\u01D3\x03\x02\x02\x026\u01DC\x03\x02\x02\x028\u01E5\x03\x02" +
		"\x02\x02:\u01EA\x03\x02\x02\x02<\u01F1\x03\x02\x02\x02>\u01F3\x03\x02" +
		"\x02\x02@\u01F9\x03\x02\x02\x02B\u01FE\x03\x02\x02\x02D\u020D\x03\x02" +
		"\x02\x02F\u0219\x03\x02\x02\x02H\u0223\x03\x02\x02\x02J\u0227\x03\x02" +
		"\x02\x02L\u022E\x03\x02\x02\x02N\u0233\x03\x02\x02\x02P\u0239\x03\x02" +
		"\x02\x02R\u0241\x03\x02\x02\x02T\u0246\x03\x02\x02\x02V\u0248\x03\x02" +
		"\x02\x02X\u024E\x03\x02\x02\x02Z\u0250\x03\x02\x02\x02\\\u0256\x03\x02" +
		"\x02\x02^\u025B\x03\x02\x02\x02`\u0261\x03\x02\x02\x02b\u0270\x03\x02" +
		"\x02\x02d\u0276\x03\x02\x02\x02f\u027C\x03\x02\x02\x02h\u0282\x03\x02" +
		"\x02\x02j\u0288\x03\x02\x02\x02l\u028E\x03\x02\x02\x02n\u0294\x03\x02" +
		"\x02\x02p\u029A\x03\x02\x02\x02r\u02A0\x03\x02\x02\x02t\u02A7\x03\x02" +
		"\x02\x02v\u02A9\x03\x02\x02\x02x\u02AC\x03\x02\x02\x02z\u02AF\x03\x02" +
		"\x02\x02|\u02B2\x03\x02\x02\x02~\u02B5\x03\x02\x02\x02\x80\u02B8\x03\x02" +
		"\x02\x02\x82\u02BB\x03\x02\x02\x02\x84\u02BE\x03\x02\x02\x02\x86\u02C1" +
		"\x03\x02\x02\x02\x88\u02C4\x03\x02\x02\x02\x8A\u02D2\x03\x02\x02\x02\x8C" +
		"\u0337\x03\x02\x02\x02\x8E\u0344\x03\x02\x02\x02\x90\u0396\x03\x02\x02" +
		"\x02\x92\u03B3\x03\x02\x02\x02\x94\u03B5\x03\x02\x02\x02\x96\u03CB\x03" +
		"\x02\x02\x02\x98\u03DC\x03\x02\x02\x02\x9A\u03ED\x03\x02\x02\x02\x9C\u03EF" +
		"\x03\x02\x02\x02\x9E\u03FF\x03\x02\x02\x02\xA0\u0453\x03\x02\x02\x02\xA2" +
		"\u0459\x03\x02\x02\x02\xA4\u045D\x03\x02\x02\x02\xA6\u045F\x03\x02\x02" +
		"\x02\xA8\u0463\x03\x02\x02\x02\xAA\u0467\x03\x02\x02\x02\xAC\u0469\x03" +
		"\x02\x02\x02\xAE\u0483\x03\x02\x02\x02\xB0\u0490\x03\x02\x02\x02\xB2\u0492" +
		"\x03\x02\x02\x02\xB4\u0498\x03\x02\x02\x02\xB6\u049A\x03\x02\x02\x02\xB8" +
		"\u04A5\x03\x02\x02\x02\xBA\u04A7\x03\x02\x02\x02\xBC\u04B6\x03\x02\x02" +
		"\x02\xBE\u04B8\x03\x02\x02\x02\xC0\u04C3\x03\x02\x02\x02\xC2\u04C5\x03" +
		"\x02\x02\x02\xC4\u04CA\x03\x02\x02\x02\xC6\u04CF\x03\x02\x02\x02\xC8\u04D4" +
		"\x03\x02\x02\x02\xCA\u04DD\x03\x02\x02\x02\xCC\u04E6\x03\x02\x02\x02\xCE" +
		"\u04EE\x03\x02\x02\x02\xD0\u04F8\x03\x02\x02\x02\xD2\u04FC\x03\x02\x02" +
		"\x02\xD4\u04FE\x03\x02\x02\x02\xD6\u0504\x03\x02\x02\x02\xD8\u0506\x03" +
		"\x02\x02\x02\xDA\u0508\x03\x02\x02\x02\xDC\u0510\x03\x02\x02\x02\xDE\u0515" +
		"\x03\x02\x02\x02\xE0\u0519\x03\x02\x02\x02\xE2\u051B\x03\x02\x02\x02\xE4" +
		"\u0522\x03\x02\x02\x02\xE6\u052B\x03\x02\x02\x02\xE8\u052F\x03\x02\x02" +
		"\x02\xEA\u0536\x03\x02\x02\x02\xEC\u053B\x03\x02\x02\x02\xEE\u0541\x03" +
		"\x02\x02\x02\xF0\u0549\x03\x02\x02\x02\xF2\u054E\x03\x02\x02\x02\xF4\u0561" +
		"\x03\x02\x02\x02\xF6\u058E\x03\x02\x02\x02\xF8\u0590\x03\x02\x02\x02\xFA" +
		"\u05D5\x03\x02\x02\x02\xFC\u05D7\x03\x02\x02\x02\xFE\u05D9\x03\x02\x02" +
		"\x02\u0100\u05DB\x03\x02\x02\x02\u0102\u05DD\x03\x02\x02\x02\u0104\u05DF" +
		"\x03\x02\x02\x02\u0106\u05E1\x03\x02\x02\x02\u0108\u05E3\x03\x02\x02\x02" +
		"\u010A\u05E5\x03\x02\x02\x02\u010C\u05E7\x03\x02\x02\x02\u010E\u05EB\x03" +
		"\x02\x02\x02\u0110\u05EF\x03\x02\x02\x02\u0112\u05F5\x03\x02\x02\x02\u0114" +
		"\u05F9\x03\x02\x02\x02\u0116\u060B\x03\x02\x02\x02\u0118\u060D\x03\x02" +
		"\x02\x02\u011A\u063D\x03\x02\x02\x02\u011C\u063F\x03\x02\x02\x02\u011E" +
		"\u0641\x03\x02\x02\x02\u0120\u0645\x03\x02\x02\x02\u0122\u0647\x03\x02" +
		"\x02\x02\u0124\u064B\x03\x02\x02\x02\u0126\u064D\x03\x02\x02\x02\u0128" +
		"\u064F\x03\x02\x02\x02\u012A\u0651\x03\x02\x02\x02\u012C\u0653\x03\x02" +
		"\x02\x02\u012E\u0655\x03\x02\x02\x02\u0130\u0657\x03\x02\x02\x02\u0132" +
		"\u0659\x03\x02\x02\x02\u0134\u065B\x03\x02\x02\x02\u0136\u065D\x03\x02" +
		"\x02\x02\u0138\u065F\x03\x02\x02\x02\u013A\u013B\x05\x04\x03\x02\u013B" +
		"\u013C\x07\u0185\x02\x02\u013C\u013E\x03\x02\x02\x02\u013D\u013A\x03\x02" +
		"\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F" +
		"\u0140\x03\x02\x02\x02\u0140\x03\x03\x02\x02\x02\u0141\u014A\x05\x06\x04" +
		"\x02\u0142\u0143\x07\u01AB\x02\x02\u0143\u0145\x07\u0184\x02\x02\u0144" +
		"\u0142\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u0144\x03\x02" +
		"\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148" +
		"\u014A\x05\x06\x04\x02\u0149\u0141\x03\x02\x02\x02\u0149\u0144\x03\x02" +
		"\x02\x02\u014A\x05\x03\x02\x02\x02\u014B\u0151\x05\x1C\x0F\x02\u014C\u0151" +
		"\x05\b\x05\x02\u014D\u0151\x05\n\x06\x02\u014E\u0151\x05\f\x07\x02\u014F" +
		"\u0151\x05\xFA~\x02\u0150\u014B\x03\x02\x02\x02\u0150\u014C\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\u0150\u014D\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0150" +
		"\u014F\x03\x02\x02\x02\u0151\x07\x03\x02\x02\x02\u0152\u0153\x07+\x02" +
		"\x02\u0153\u0154\x05\x0E\b\x02\u0154\u0155\x07\u01AB\x02\x02\u0155\t\x03" +
		"\x02\x02\x02\u0156\u0157\x07,\x02\x02\u0157\u0158\x05\x0E\b\x02\u0158" +
		"\u0159\x07\u01AB\x02\x02\u0159\v\x03\x02\x02\x02\u015A\u015B\x07-\x02" +
		"\x02\u015B\r\x03\x02\x02\x02\u015C\u015F\x05\x10\t\x02\u015D\u0160\x05" +
		"\x12\n\x02\u015E\u0160\x05\x14\v\x02\u015F\u015D\x03\x02\x02\x02\u015F" +
		"\u015E\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u016C\x03\x02" +
		"\x02\x02\u0161\u0164\x05\x12\n\x02\u0162\u0165\x05\x10\t\x02\u0163\u0165" +
		"\x05\x14\v\x02\u0164\u0162\x03\x02\x02\x02\u0164\u0163\x03\x02\x02\x02" +
		"\u0164\u0165\x03\x02\x02\x02\u0165\u016C\x03\x02\x02\x02\u0166\u0169\x05" +
		"\x14\v\x02\u0167\u016A\x05\x10\t\x02\u0168\u016A\x05\x12\n\x02\u0169\u0167" +
		"\x03\x02\x02\x02\u0169\u0168\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02" +
		"\u016A\u016C\x03\x02\x02\x02\u016B\u015C\x03\x02\x02\x02\u016B\u0161\x03" +
		"\x02\x02\x02\u016B\u0166\x03\x02\x02\x02\u016C\x0F\x03\x02\x02\x02\u016D" +
		"\u0170\x07\u017E\x02\x02\u016E\u0171\x05\x16\f\x02\u016F\u0171\x05\x18" +
		"\r\x02\u0170\u016E\x03\x02\x02\x02\u0170\u016F\x03\x02\x02\x02\u0171\x11" +
		"\x03\x02\x02\x02\u0172\u0173\x07\u017E\x02\x02\u0173\u0174\x05\x1A\x0E" +
		"\x02\u0174\x13\x03\x02\x02\x02\u0175\u0176\x07\u017E\x02\x02\u0176\u0177" +
		"\x07\u0193\x02\x02\u0177\x15\x03\x02\x02\x02\u0178\u0179\t\x02\x02\x02" +
		"\u0179\x17\x03\x02\x02\x02\u017A\u017B\t\x03\x02\x02\u017B\x19\x03\x02" +
		"\x02\x02\u017C\u017D\t\x04\x02\x02\u017D\x1B\x03\x02\x02\x02\u017E\u0186" +
		"\x05<\x1F\x02\u017F\u0186\x05\xB0Y\x02\u0180\u0186\x05\xE6t\x02\u0181" +
		"\u0186\x05\xF6|\x02\u0182\u0186\x05\x1E\x10\x02\u0183\u0186\x05> \x02" +
		"\u0184\u0186\x05B\"\x02\u0185\u017E\x03\x02\x02\x02\u0185\u017F\x03\x02" +
		"\x02\x02\u0185\u0180\x03\x02\x02\x02\u0185\u0181\x03\x02\x02\x02\u0185" +
		"\u0182\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02\u0185\u0184\x03\x02" +
		"\x02\x02\u0186\x1D\x03\x02\x02\x02\u0187\u018D\x070\x02\x02\u0188\u018E" +
		"\x05 \x11\x02\u0189\u018E\x05\"\x12\x02\u018A\u018E\x05$\x13\x02\u018B" +
		"\u018E\x05&\x14\x02\u018C\u018E\x05(\x15\x02\u018D\u0188\x03\x02\x02\x02" +
		"\u018D\u0189\x03\x02\x02\x02\u018D\u018A\x03\x02\x02\x02\u018D\u018B\x03" +
		"\x02\x02\x02\u018D\u018C\x03\x02\x02\x02\u018E\x1F\x03\x02\x02\x02\u018F" +
		"\u0194\x07\u01AB\x02\x02\u0190\u0191\x07\u0183\x02\x02\u0191\u0193\x07" +
		"\u01AB\x02\x02\u0192\u0190\x03\x02\x02\x02\u0193\u0196\x03\x02\x02\x02" +
		"\u0194\u0192\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195!\x03\x02" +
		"\x02\x02\u0196\u0194\x03\x02\x02\x02\u0197\u0198\x07\u0180\x02\x02\u0198" +
		"\u019D\x05.\x18\x02\u0199\u019A\x07\u0183\x02\x02\u019A\u019C\x05.\x18" +
		"\x02\u019B\u0199\x03\x02\x02\x02\u019C\u019F\x03\x02\x02\x02\u019D\u019B" +
		"\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E#\x03\x02\x02\x02\u019F" +
		"\u019D\x03\x02\x02\x02\u01A0\u01A1\x07\u01AB\x02\x02\u01A1\u01A2\x07\u0188" +
		"\x02\x02\u01A2\u01A5\x07\u0189\x02\x02\u01A3\u01A4\x07\u0180\x02\x02\u01A4" +
		"\u01A6\x05,\x17\x02\u01A5\u01A3\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02" +
		"\x02\u01A6%\x03\x02\x02\x02\u01A7\u01A8\x07\u01AB\x02\x02\u01A8\u01A9" +
		"\x07\u0188\x02\x02\u01A9\u01AA\x052\x1A\x02\u01AA\u01AD\x07\u0189\x02" +
		"\x02\u01AB\u01AC\x07\u0180\x02\x02\u01AC\u01AE\x05,\x17\x02\u01AD\u01AB" +
		"\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\'\x03\x02\x02\x02\u01AF" +
		"\u01B0\x07\u01AB\x02\x02\u01B0\u01B1\x07\u0180\x02\x02\u01B1\u01B2\x05" +
		"2\x1A\x02\u01B2)\x03\x02\x02\x02\u01B3\u01B8\x05.\x18\x02\u01B4\u01B5" +
		"\x07\u0183\x02\x02\u01B5\u01B7\x05.\x18\x02\u01B6\u01B4\x03\x02\x02\x02" +
		"\u01B7\u01BA\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B9\x03" +
		"\x02\x02\x02\u01B9\u01BD\x03\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BB" +
		"\u01BD\x07\x03\x02\x02\u01BC\u01B3\x03\x02\x02\x02\u01BC\u01BB\x03\x02" +
		"\x02\x02\u01BD+\x03\x02\x02\x02\u01BE\u01BF\x07\u018A\x02\x02\u01BF\u01C0" +
		"\x05*\x16\x02\u01C0\u01C1\x07\u018B\x02\x02\u01C1\u01C4\x03\x02\x02\x02" +
		"\u01C2\u01C4\x05*\x16\x02\u01C3\u01BE\x03\x02\x02\x02\u01C3\u01C2\x03" +
		"\x02\x02\x02\u01C4-\x03\x02\x02\x02\u01C5\u01C8\x052\x1A\x02\u01C6\u01C8" +
		"\x07\x04\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C6\x03\x02\x02\x02" +
		"\u01C8/\x03\x02\x02\x02\u01C9\u01CA\x07\u018C\x02\x02\u01CA\u01D0\x07" +
		"\u01AB\x02\x02\u01CB\u01CC\x07\xD7\x02\x02\u01CC\u01CD\x07\u0186\x02\x02" +
		"\u01CD\u01CE\x07\u01AB\x02\x02\u01CE\u01D0\x07\u0187\x02\x02\u01CF\u01C9" +
		"\x03\x02\x02\x02\u01CF\u01CB\x03\x02\x02\x02\u01D01\x03\x02\x02\x02\u01D1" +
		"\u01D2\x054\x1B\x02\u01D23\x03\x02\x02\x02\u01D3\u01D8\x056\x1C\x02\u01D4" +
		"\u01D5\t\x05\x02\x02\u01D5\u01D7\x056\x1C\x02\u01D6\u01D4\x03\x02\x02" +
		"\x02\u01D7\u01DA\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9" +
		"\x03\x02\x02\x02\u01D95\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB" +
		"\u01DD\x07\u017C\x02\x02\u01DC\u01DB\x03\x02\x02\x02\u01DC\u01DD\x03\x02" +
		"\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DF\x058\x1D\x02\u01DF7\x03" +
		"\x02\x02\x02\u01E0\u01E6\x05:\x1E\x02\u01E1\u01E2\x07\u0186\x02\x02\u01E2" +
		"\u01E3\x054\x1B\x02\u01E3\u01E4\x07\u0187\x02\x02\u01E4\u01E6\x03\x02" +
		"\x02\x02\u01E5\u01E0\x03\x02\x02\x02\u01E5\u01E1\x03\x02\x02\x02\u01E6" +
		"9\x03\x02\x02\x02\u01E7\u01EB\x07\x05\x02\x02\u01E8\u01EB\x050\x19\x02" +
		"\u01E9\u01EB\x07\u01AB\x02\x02\u01EA\u01E7\x03\x02\x02\x02\u01EA\u01E8" +
		"\x03\x02\x02\x02\u01EA\u01E9\x03\x02\x02\x02\u01EB;\x03\x02\x02\x02\u01EC" +
		"\u01F2\x05\xAAV\x02\u01ED\u01F2\x05\x8AF\x02\u01EE\u01F2\x05\x8EH\x02" +
		"\u01EF\u01F2\x05\x92J\x02\u01F0\u01F2\x05\x9EP\x02\u01F1\u01EC\x03\x02" +
		"\x02\x02\u01F1\u01ED\x03\x02\x02\x02\u01F1\u01EE\x03\x02\x02\x02\u01F1" +
		"\u01EF\x03\x02\x02\x02\u01F1\u01F0\x03\x02\x02\x02\u01F2=\x03\x02\x02" +
		"\x02\u01F3\u01F4\x07\xBA\x02\x02\u01F4\u01F5\x05\u0118\x8D\x02\u01F5\u01F6" +
		"\x05@!\x02\u01F6?\x03\x02\x02\x02\u01F7\u01FA\x05B\"\x02\u01F8\u01FA\x05" +
		"<\x1F\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01F8\x03\x02\x02\x02\u01FA" +
		"A\x03\x02\x02\x02\u01FB\u01FC\x05<\x1F\x02\u01FC\u01FD\x07\u0183\x02\x02" +
		"\u01FD\u01FF\x03\x02\x02\x02\u01FE\u01FB\x03\x02\x02\x02\u01FE\u01FF\x03" +
		"\x02\x02\x02\u01FF\u020B\x03\x02\x02\x02\u0200\u020C\x05D#\x02\u0201\u020C" +
		"\x05J&\x02\u0202\u020C\x05L\'\x02\u0203\u020C\x05N(\x02\u0204\u020C\x05" +
		"P)\x02\u0205\u020C\x05R*\x02\u0206\u020C\x05T+\x02\u0207\u020C\x05V,\x02" +
		"\u0208\u020C\x05X-\x02\u0209\u020C\x05Z.\x02\u020A\u020C\x05`1\x02\u020B" +
		"\u0200\x03\x02\x02\x02\u020B\u0201\x03\x02\x02\x02\u020B\u0202\x03\x02" +
		"\x02\x02\u020B\u0203\x03\x02\x02\x02\u020B\u0204\x03\x02\x02\x02\u020B" +
		"\u0205\x03\x02\x02\x02\u020B\u0206\x03\x02\x02\x02\u020B\u0207\x03\x02" +
		"\x02\x02\u020B\u0208\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020B" +
		"\u020A\x03\x02\x02\x02\u020CC\x03\x02\x02\x02\u020D\u020E\x05F$\x02\u020E" +
		"\u020F\x07\u0183\x02\x02\u020F\u0210\x05H%\x02\u0210E\x03\x02\x02\x02" +
		"\u0211\u0212\x05v<\x02\u0212\u0213\x07\u0180\x02\x02\u0213\u0214\x05\u0114" +
		"\x8B\x02\u0214\u021A\x03\x02\x02\x02\u0215\u0216\x05\u0114\x8B\x02\u0216" +
		"\u0217\x07\u0180\x02\x02\u0217\u0218\x05v<\x02\u0218\u021A\x03\x02\x02" +
		"\x02\u0219\u0211\x03\x02\x02\x02\u0219\u0215\x03\x02\x02\x02\u021AG\x03" +
		"\x02\x02\x02\u021B\u021C\x05x=\x02\u021C\u021D\x07\u0180\x02\x02\u021D" +
		"\u021E\x05\u0114\x8B\x02\u021E\u0224\x03\x02\x02\x02\u021F\u0220\x05\u0114" +
		"\x8B\x02\u0220\u0221\x07\u0180\x02\x02\u0221\u0222\x05x=\x02\u0222\u0224" +
		"\x03\x02\x02\x02\u0223\u021B\x03\x02\x02\x02\u0223\u021F\x03\x02\x02\x02" +
		"\u0224I\x03\x02\x02\x02\u0225\u0228\x05v<\x02\u0226\u0228\x05x=\x02\u0227" +
		"\u0225\x03\x02\x02\x02\u0227\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02" +
		"\x02\x02\u0229\u022A\x07\u0180\x02\x02\u022A\u022B\x05\u0116\x8C\x02\u022B" +
		"K\x03\x02\x02\x02\u022C\u022F\x05z>\x02\u022D\u022F\x05|?\x02\u022E\u022C" +
		"\x03\x02\x02\x02\u022E\u022D\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02" +
		"\u0230\u0231\x07\u0180\x02\x02\u0231\u0232\x05\u0116\x8C\x02\u0232M\x03" +
		"\x02\x02\x02\u0233\u0234\x05\u0116\x8C\x02\u0234\u0237\x07\u0180\x02\x02" +
		"\u0235\u0238\x05v<\x02\u0236\u0238\x05x=\x02\u0237\u0235\x03\x02\x02\x02" +
		"\u0237\u0236\x03\x02\x02\x02\u0238O\x03\x02\x02\x02\u0239\u023A\x05\u0116" +
		"\x8C\x02\u023A\u023D\x07\u0180\x02\x02\u023B\u023E\x05z>\x02\u023C\u023E" +
		"\x05|?\x02\u023D\u023B\x03\x02\x02\x02\u023D\u023C\x03\x02\x02\x02\u023E" +
		"Q\x03\x02\x02\x02\u023F\u0242\x05~@\x02\u0240\u0242\x05\x80A\x02\u0241" +
		"\u023F\x03\x02\x02\x02\u0241\u0240\x03\x02\x02\x02\u0242\u0243\x03\x02" +
		"\x02\x02\u0243\u0244\x07\u0180\x02\x02\u0244\u0245\x05\u0114\x8B\x02\u0245" +
		"S\x03\x02\x02\x02\u0246\u0247\x05\xEAv\x02\u0247U\x03\x02\x02\x02\u0248" +
		"\u0249\x05\u0114\x8B\x02\u0249\u024C\x07\u0180\x02\x02\u024A\u024D\x05" +
		"~@\x02\u024B\u024D\x05\x80A\x02\u024C\u024A\x03\x02\x02\x02\u024C\u024B" +
		"\x03\x02\x02\x02\u024DW\x03\x02\x02\x02\u024E\u024F\x05\xEEx\x02\u024F" +
		"Y\x03\x02\x02\x02\u0250\u0251\x05\xF4{\x02\u0251\u0252\x07\u0180\x02\x02" +
		"\u0252\u0253\x05\u0116\x8C\x02\u0253[\x03\x02\x02\x02\u0254\u0257\x05" +
		"v<\x02\u0255\u0257\x05x=\x02\u0256\u0254\x03\x02\x02\x02\u0256\u0255\x03" +
		"\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u0259\x07\u0180\x02\x02" +
		"\u0259\u025A\x05\u0114\x8B\x02\u025A]\x03\x02\x02\x02\u025B\u025C\x05" +
		"\u0114\x8B\x02\u025C\u025F\x07\u0180\x02\x02\u025D\u0260\x05v<\x02\u025E" +
		"\u0260\x05x=\x02\u025F\u025D\x03\x02\x02\x02\u025F\u025E\x03\x02\x02\x02" +
		"\u0260_\x03\x02\x02\x02\u0261\u026E\x07\xF8\x02\x02\u0262\u0263\x07\u0186" +
		"\x02\x02\u0263\u0264\x05\u0106\x84\x02\u0264\u0265\x07\u0183\x02\x02\u0265" +
		"\u0266\x05\u0108\x85\x02\u0266\u0267\x07\u0187\x02\x02\u0267\u026F\x03" +
		"\x02\x02\x02\u0268\u0269\x07\u0186\x02\x02\u0269\u026A\x05\u010A\x86\x02" +
		"\u026A\u026B\x07\u0183\x02\x02\u026B\u026C\x05\u010C\x87\x02\u026C\u026D" +
		"\x07\u0187\x02\x02\u026D\u026F\x03\x02\x02\x02\u026E\u0262\x03\x02\x02" +
		"\x02\u026E\u0268\x03\x02\x02\x02\u026Fa\x03\x02\x02\x02\u0270\u0271\x07" +
		"\u0186\x02\x02\u0271\u0272\x05\u0106\x84\x02\u0272\u0273\x07\u0183\x02" +
		"\x02\u0273\u0274\x05\u0108\x85\x02\u0274\u0275\x07\u0187\x02\x02\u0275" +
		"c\x03\x02\x02\x02\u0276\u0277\x07\u0186\x02\x02\u0277\u0278\x05\u010A" +
		"\x86\x02\u0278\u0279\x07\u0183\x02\x02\u0279\u027A\x05\u010C\x87\x02\u027A" +
		"\u027B\x07\u0187\x02\x02\u027Be\x03\x02\x02\x02\u027C\u027D\x07\u0186" +
		"\x02\x02\u027D\u027E\x05\u010C\x87\x02\u027E\u027F\x07\u0183\x02\x02\u027F" +
		"\u0280\x05\u010A\x86\x02\u0280\u0281\x07\u0187\x02\x02\u0281g\x03\x02" +
		"\x02\x02\u0282\u0283\x07\u0186\x02\x02\u0283\u0284\x05\u0108\x85\x02\u0284" +
		"\u0285\x07\u0183\x02\x02\u0285\u0286\x05\u0106\x84\x02\u0286\u0287\x07" +
		"\u0187\x02\x02\u0287i\x03\x02\x02\x02\u0288\u0289\x07\u0186\x02\x02\u0289" +
		"\u028A\x05\u0106\x84\x02\u028A\u028B\x07\u0183\x02\x02\u028B\u028C\x05" +
		"2\x1A\x02\u028C\u028D\x07\u0187\x02\x02\u028Dk\x03\x02\x02\x02\u028E\u028F" +
		"\x07\u0186\x02\x02\u028F\u0290\x05\u010A\x86\x02\u0290\u0291\x07\u0183" +
		"\x02\x02\u0291\u0292\x052\x1A\x02\u0292\u0293\x07\u0187\x02\x02\u0293" +
		"m\x03\x02\x02\x02\u0294\u0295\x07\u0186\x02\x02\u0295\u0296\x052\x1A\x02" +
		"\u0296\u0297\x07\u0183\x02\x02\u0297\u0298\x05\u0106\x84\x02\u0298\u0299" +
		"\x07\u0187\x02\x02\u0299o\x03\x02\x02\x02\u029A\u029B\x07\u0186\x02\x02" +
		"\u029B\u029C\x052\x1A\x02\u029C\u029D\x07\u0183\x02\x02\u029D\u029E\x05" +
		"\u010A\x86\x02\u029E\u029F\x07\u0187\x02\x02\u029Fq\x03\x02\x02\x02\u02A0" +
		"\u02A1\x03\x02\x02\x02\u02A1s\x03\x02\x02\x02\u02A2\u02A8\x05:\x1E\x02" +
		"\u02A3\u02A4\x05:\x1E\x02\u02A4\u02A5\t\x06\x02\x02\u02A5\u02A6\x05:\x1E" +
		"\x02\u02A6\u02A8\x03\x02\x02\x02\u02A7\u02A2\x03\x02\x02\x02\u02A7\u02A3" +
		"\x03\x02\x02\x02\u02A8u\x03\x02\x02\x02\u02A9\u02AA\x07g\x02\x02\u02AA" +
		"\u02AB\x05b2\x02\u02ABw\x03\x02\x02\x02\u02AC\u02AD\x07\u0117\x02\x02" +
		"\u02AD\u02AE\x05d3\x02\u02AEy\x03\x02\x02\x02\u02AF\u02B0\x07g\x02\x02" +
		"\u02B0\u02B1\x05h5\x02\u02B1{\x03\x02\x02\x02\u02B2\u02B3\x07\u0117\x02" +
		"\x02\u02B3\u02B4\x05f4\x02\u02B4}\x03\x02\x02\x02\u02B5\u02B6\x07g\x02" +
		"\x02\u02B6\u02B7\x05j6\x02\u02B7\x7F\x03\x02\x02\x02\u02B8\u02B9\x07\u0117" +
		"\x02\x02\u02B9\u02BA\x05l7\x02\u02BA\x81\x03\x02\x02\x02\u02BB\u02BC\x07" +
		"g\x02\x02\u02BC\u02BD\x05n8\x02\u02BD\x83\x03\x02\x02\x02\u02BE\u02BF" +
		"\x07\u0117\x02\x02\u02BF\u02C0\x05p9\x02\u02C0\x85\x03\x02\x02\x02\u02C1" +
		"\u02C2\x07g\x02\x02\u02C2\u02C3\x05r:\x02\u02C3\x87\x03\x02\x02\x02\u02C4" +
		"\u02C5\x07\u0117\x02\x02\u02C5\u02C6\x05r:\x02\u02C6\x89\x03\x02\x02\x02" +
		"\u02C7\u02C8\x05\u0100\x81\x02\u02C8\u02C9\x07\u0180\x02\x02\u02C9\u02CA" +
		"\x05\x8CG\x02\u02CA\u02D3\x03\x02\x02\x02\u02CB\u02CC\x07^\x02\x02\u02CC" +
		"\u02CD\x07\u0186\x02\x02\u02CD\u02CE\x05\u0100\x81\x02\u02CE\u02CF\x07" +
		"\u0183\x02\x02\u02CF\u02D0\x05\u0100\x81\x02\u02D0\u02D1\x07\u0187\x02" +
		"\x02\u02D1\u02D3\x03\x02\x02\x02\u02D2\u02C7\x03\x02\x02\x02\u02D2\u02CB" +
		"\x03\x02\x02\x02\u02D3\x8B\x03\x02\x02\x02\u02D4\u02D5\x05\u0100\x81\x02" +
		"\u02D5\u02D6\x05\xA8U\x02\u02D6\u02D7\x05\u0100\x81\x02\u02D7\u0338\x03" +
		"\x02\x02\x02\u02D8\u02D9\x05\u0100\x81\x02\u02D9\u02DA\x07\u017B\x02\x02" +
		"\u02DA\u02DB\x05\u0100\x81\x02\u02DB\u02DC\x07\u017B\x02\x02\u02DC\u02DD" +
		"\x07Y\x02\x02\u02DD\u0338\x03\x02\x02\x02\u02DE\u02DF\x05\u0100\x81\x02" +
		"\u02DF\u02E0\x07\u017B\x02\x02\u02E0\u02E1\x05\u0100\x81\x02\u02E1\u02E2" +
		"\x07\u017B\x02\x02\u02E2\u02E3\x07Y\x02\x02\u02E3\u02E4\x07\u017C\x02" +
		"\x02\u02E4\u02E5\x07\x05\x02\x02\u02E5\u0338\x03\x02\x02\x02\u02E6\u02E7" +
		"\x07\u0186\x02\x02\u02E7\u02E8\x05\u0100\x81\x02\u02E8\u02E9\x07\u017B" +
		"\x02\x02\u02E9\u02EA\x05\u0100\x81\x02\u02EA\u02EB\x07\u0187\x02\x02\u02EB" +
		"\u02EC\x07\u017E\x02\x02\u02EC\u02ED\x07\x05\x02\x02\u02ED\u0338\x03\x02" +
		"\x02\x02\u02EE\u02EF\x05\u0100\x81\x02\u02EF\u02F0\x07\u017B\x02\x02\u02F0" +
		"\u02F1\x07Y\x02\x02\u02F1\u0338\x03\x02\x02\x02\u02F2\u02F3\x05\u0100" +
		"\x81\x02\u02F3\u02F4\x07\u017B\x02\x02\u02F4\u02F5\x07Y\x02\x02\u02F5" +
		"\u02F6\x07\u017C\x02\x02\u02F6\u02F7\x07\x05\x02\x02\u02F7\u0338\x03\x02" +
		"\x02\x02\u02F8\u02F9\x05\u0100\x81\x02\u02F9\u02FA\x07\u017B\x02\x02\u02FA" +
		"\u02FB\x07\x05\x02\x02\u02FB\u0338\x03\x02\x02\x02\u02FC\u02FD\x05\u0100" +
		"\x81\x02\u02FD\u02FE\x07\u017C\x02\x02\u02FE\u02FF\x07\x05\x02\x02\u02FF" +
		"\u0338\x03\x02\x02\x02\u0300\u0301\x07\u017C\x02\x02\u0301\u0338\x05\u0100" +
		"\x81\x02\u0302\u0303\x072\x02\x02\u0303\u0338\x05\u0100\x81\x02\u0304" +
		"\u0305\x07\u0113\x02\x02\u0305\u0338\x05\u0100\x81\x02\u0306\u0307\x05" +
		"\u0100\x81\x02\u0307\u0308\x077\x02\x02\u0308\u0309\x05\u0100\x81\x02" +
		"\u0309\u0338\x03\x02\x02\x02\u030A\u030B\x05\u0100\x81\x02\u030B\u030C" +
		"\x07\u010D\x02\x02\u030C\u030D\x05\u0100\x81\x02\u030D\u0338\x03\x02\x02" +
		"\x02\u030E\u030F\x05\u0100\x81\x02\u030F\u0310\x07\u017A\x02\x02\u0310" +
		"\u0311\x05\u0100\x81\x02\u0311\u0338\x03\x02\x02\x02\u0312\u0313\x07\u0109" +
		"\x02\x02\u0313\u0338\x05\u0100\x81\x02\u0314\u0315\x07\xF4\x02\x02\u0315" +
		"\u0316\x07\u0186\x02\x02\u0316\u0317\x05\u0100\x81\x02\u0317\u0318\x07" +
		"\u0183\x02\x02\u0318\u0319\x05\u0100\x81\x02\u0319\u031A\x07\u0187\x02" +
		"\x02\u031A\u0338\x03\x02\x02\x02\u031B\u031C\x07\xF2\x02\x02\u031C\u031D" +
		"\x07\u0186\x02\x02\u031D\u031E\x05\u0100\x81\x02\u031E\u031F\x07\u0183" +
		"\x02\x02\u031F\u0320\x05\u0100\x81\x02\u0320\u0321\x07\u0187\x02\x02\u0321" +
		"\u0338\x03\x02\x02\x02\u0322\u0323\x07]\x02\x02\u0323\u0324\x05\u0100" +
		"\x81\x02\u0324\u0325\x07T\x02\x02\u0325\u0326\x05\u0100\x81\x02\u0326" +
		"\u0338\x03\x02\x02\x02\u0327\u0328\x07\xF1\x02\x02\u0328\u0338\x05\u0102" +
		"\x82\x02\u0329\u032A\x07\xDC\x02\x02\u032A\u0338\x05\u0102\x82\x02\u032B" +
		"\u032C\x07\x94\x02\x02\u032C\u032F\x05\u0102\x82\x02\u032D\u032E\x07T" +
		"\x02\x02\u032E\u0330\x05\u0100\x81\x02\u032F\u032D\x03\x02\x02\x02\u032F" +
		"\u0330\x03\x02\x02\x02\u0330\u0338\x03\x02\x02\x02\u0331\u0332\x07\u0165" +
		"\x02\x02\u0332\u0335\x05\u0102\x82\x02\u0333\u0334\x07T\x02\x02\u0334" +
		"\u0336\x05\u0100\x81\x02\u0335\u0333\x03\x02\x02\x02\u0335\u0336\x03\x02" +
		"\x02\x02\u0336\u0338\x03\x02\x02\x02\u0337\u02D4\x03\x02\x02\x02\u0337" +
		"\u02D8\x03\x02\x02\x02\u0337\u02DE\x03\x02\x02\x02\u0337\u02E6\x03\x02" +
		"\x02\x02\u0337\u02EE\x03\x02\x02\x02\u0337\u02F2\x03\x02\x02\x02\u0337" +
		"\u02F8\x03\x02\x02\x02\u0337\u02FC\x03\x02\x02\x02\u0337\u0300\x03\x02" +
		"\x02\x02\u0337\u0302\x03\x02\x02\x02\u0337\u0304\x03\x02\x02\x02\u0337" +
		"\u0306\x03\x02\x02\x02\u0337\u030A\x03\x02\x02\x02\u0337\u030E\x03\x02" +
		"\x02\x02\u0337\u0312\x03\x02\x02\x02\u0337\u0314\x03\x02\x02\x02\u0337" +
		"\u031B\x03\x02\x02\x02\u0337\u0322\x03\x02\x02\x02\u0337\u0327\x03\x02" +
		"\x02\x02\u0337\u0329\x03\x02\x02\x02\u0337\u032B\x03\x02\x02\x02\u0337" +
		"\u0331\x03\x02\x02\x02\u0338\x8D\x03\x02\x02\x02\u0339\u033A\x05\u0102" +
		"\x82\x02\u033A\u033B\x07\u0180\x02\x02\u033B\u033C\x05\x90I\x02\u033C" +
		"\u0345\x03\x02\x02\x02\u033D\u033E\x07^\x02\x02\u033E\u033F\x07\u0186" +
		"\x02\x02\u033F\u0340\x05\u0102\x82\x02\u0340\u0341\x07\u0183\x02\x02\u0341" +
		"\u0342\x05\u0102\x82\x02\u0342\u0343\x07\u0187\x02\x02\u0343\u0345\x03" +
		"\x02\x02\x02\u0344\u0339\x03\x02\x02\x02\u0344\u033D\x03\x02\x02\x02\u0345" +
		"\x8F\x03\x02\x02\x02\u0346\u0347\x05\u0102\x82\x02\u0347\u0348\x07\u017B" +
		"\x02\x02\u0348\u0349\x05\u0102\x82\x02\u0349\u0397\x03\x02\x02\x02\u034A" +
		"\u034B\x05\u0102\x82\x02\u034B\u034C\x07\u017C\x02\x02\u034C\u034D\x05" +
		"\u0102\x82\x02\u034D\u0397\x03\x02\x02\x02\u034E\u034F\x072\x02\x02\u034F" +
		"\u0350\x07\u0186\x02\x02\u0350\u0351\x05\u0102\x82\x02\u0351\u0352\x07" +
		"\u017B\x02\x02\u0352\u0353\x05\u0102\x82\x02\u0353\u0354\x07\u0187\x02" +
		"\x02\u0354\u0397\x03\x02\x02\x02\u0355\u0356\x072\x02\x02\u0356\u0357" +
		"\x07\u0186\x02\x02\u0357\u0358\x05\u0102\x82\x02\u0358\u0359\x07\u017C" +
		"\x02\x02\u0359\u035A\x05\u0102\x82\x02\u035A\u035B\x07\u0187\x02\x02\u035B" +
		"\u0397\x03\x02\x02\x02\u035C\u035D\x07\u0186\x02\x02\u035D\u035E\x05\u0102" +
		"\x82\x02\u035E\u035F\x07\u017B\x02\x02\u035F\u0360\x05\u0102\x82\x02\u0360" +
		"\u0361\x07\u0187\x02\x02\u0361\u0362\x07\u017E\x02\x02\u0362\u0363\x07" +
		"\x05\x02\x02\u0363\u0397\x03\x02\x02\x02\u0364\u0365\x07\u017C\x02\x02" +
		"\u0365\u0397\x05\u0102\x82\x02\u0366\u0367\x072\x02\x02\u0367\u0397\x05" +
		"\u0102\x82\x02\u0368\u0369\x07\u0113\x02\x02\u0369\u0397\x05\u0102\x82" +
		"\x02\u036A\u036B\x07\u013E\x02\x02\u036B\u0397\x05\u0102\x82\x02\u036C" +
		"\u036D\x07\u0145\x02\x02\u036D\u036E\x05\u0102\x82\x02\u036E\u036F\x07" +
		"T\x02\x02\u036F\u0370\x05\u0100\x81\x02\u0370\u0397\x03\x02\x02\x02\u0371" +
		"\u0372\x07\x99\x02\x02\u0372\u0375\x05\u0100\x81\x02\u0373\u0374\x07T" +
		"\x02\x02\u0374\u0376\x05\u0100\x81\x02\u0375\u0373\x03\x02\x02\x02\u0375" +
		"\u0376\x03\x02\x02\x02\u0376\u0397\x03\x02\x02\x02\u0377\u0378\x07\u013C" +
		"\x02\x02\u0378\u0397\x05\u0102\x82\x02\u0379\u037A\x07\u0141\x02\x02\u037A" +
		"\u0397\x05\u0102\x82\x02\u037B\u037C\x05\u0102\x82\x02\u037C\u037D\x07" +
		"_\x02\x02\u037D\u037E\x05\u0102\x82\x02\u037E\u0397\x03\x02\x02\x02\u037F" +
		"\u0380\x07\xF4\x02\x02\u0380\u0381\x07\u0186\x02\x02\u0381\u0382\x05\u0102" +
		"\x82\x02\u0382\u0383\x07\u0183\x02\x02\u0383\u0384\x05\u0102\x82\x02\u0384" +
		"\u0385\x07\u0187\x02\x02\u0385\u0397\x03\x02\x02\x02\u0386\u0387\x07\xF2" +
		"\x02\x02\u0387\u0388\x07\u0186\x02\x02\u0388\u0389\x05\u0102\x82\x02\u0389" +
		"\u038A\x07\u0183\x02\x02\u038A\u038B\x05\u0102\x82\x02\u038B\u038C\x07" +
		"\u0187\x02\x02\u038C\u0397\x03\x02\x02\x02\u038D\u038E\x07]\x02\x02\u038E" +
		"\u038F\x05\u0102\x82\x02\u038F\u0390\x07T\x02\x02\u0390\u0391\x05\u0102" +
		"\x82\x02\u0391\u0397\x03\x02\x02\x02\u0392\u0393\x05\u0102\x82\x02\u0393" +
		"\u0394\x07\u017D\x02\x02\u0394\u0395\x05\u0102\x82\x02\u0395\u0397\x03" +
		"\x02\x02\x02\u0396\u0346\x03\x02\x02\x02\u0396\u034A\x03\x02\x02\x02\u0396" +
		"\u034E\x03\x02\x02\x02\u0396\u0355\x03\x02\x02\x02\u0396\u035C\x03\x02" +
		"\x02\x02\u0396\u0364\x03\x02\x02\x02\u0396\u0366\x03\x02\x02\x02\u0396" +
		"\u0368\x03\x02\x02\x02\u0396\u036A\x03\x02\x02\x02\u0396\u036C\x03\x02" +
		"\x02\x02\u0396\u0371\x03\x02\x02\x02\u0396\u0377\x03\x02\x02\x02\u0396" +
		"\u0379\x03\x02\x02\x02\u0396\u037B\x03\x02\x02\x02\u0396\u037F\x03\x02" +
		"\x02\x02\u0396\u0386\x03\x02\x02\x02\u0396\u038D\x03\x02\x02\x02\u0396" +
		"\u0392\x03\x02\x02\x02\u0397\x91\x03\x02\x02\x02\u0398\u0399\x05\u0100" +
		"\x81\x02\u0399\u039A\x07\u0180\x02\x02\u039A\u039B\x05\x96L\x02\u039B" +
		"\u03B4\x03\x02\x02\x02\u039C\u039D\x07\u0100\x02\x02\u039D\u039E\x07\u0180" +
		"\x02\x02\u039E\u03B4\x05\x98M\x02\u039F\u03A0\x07\xFF\x02\x02\u03A0\u03A1" +
		"\x07\u0180\x02\x02\u03A1\u03B4\x05\x9AN\x02\u03A2\u03A3\x05\x9CO\x02\u03A3" +
		"\u03A4\x07\u0180\x02\x02\u03A4\u03A5\x07\x05\x02\x02\u03A5\u03B4\x03\x02" +
		"\x02\x02\u03A6\u03A9\x05\u0136\x9C\x02\u03A7\u03A9\x05\u0138\x9D\x02\u03A8" +
		"\u03A6\x03\x02\x02\x02\u03A8\u03A7\x03\x02\x02\x02\u03A9\u03AA\x03\x02" +
		"\x02\x02\u03AA\u03AB\x07\u0180\x02\x02\u03AB\u03AC\x05\u0100\x81\x02\u03AC" +
		"\u03B4\x03\x02\x02\x02\u03AD\u03AE\x05\u0100\x81\x02\u03AE\u03B1\x07\u0180" +
		"\x02\x02\u03AF\u03B2\x05\u0136\x9C\x02\u03B0\u03B2\x05\u0138\x9D\x02\u03B1" +
		"\u03AF\x03\x02\x02\x02\u03B1\u03B0\x03\x02\x02\x02\u03B2\u03B4\x03\x02" +
		"\x02\x02\u03B3\u0398\x03\x02\x02\x02\u03B3\u039C\x03\x02\x02\x02\u03B3" +
		"\u039F\x03\x02\x02\x02\u03B3\u03A2\x03\x02\x02\x02\u03B3\u03A8\x03\x02" +
		"\x02\x02\u03B3\u03AD\x03\x02\x02\x02\u03B4\x93\x03\x02\x02\x02\u03B5\u03B6" +
		"\x05\u0100\x81\x02\u03B6\u03B7\x07\u017D\x02\x02\u03B7\u03B9\x05\u0100" +
		"\x81\x02\u03B8\u03BA\x05\u0120\x91\x02\u03B9\u03B8\x03\x02\x02\x02\u03B9" +
		"\u03BA\x03\x02\x02\x02\u03BA\x95\x03\x02\x02\x02\u03BB\u03CC\x05\x94K" +
		"\x02\u03BC\u03BD\x05\x9CO\x02\u03BD\u03BE\x05\xA8U\x02\u03BE\u03BF\x05" +
		"\x94K\x02\u03BF\u03CC\x03\x02\x02\x02\u03C0\u03C1\x07\u0144\x02\x02\u03C1" +
		"\u03C3\x05\x9CO\x02\u03C2\u03C4\x05\u011C\x8F\x02\u03C3\u03C2\x03\x02" +
		"\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4\u03CC\x03\x02\x02\x02\u03C5" +
		"\u03C6\x07\u013E\x02\x02\u03C6\u03C8\x05\x9CO\x02\u03C7\u03C9\x05\u011C" +
		"\x8F\x02\u03C8\u03C7\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9" +
		"\u03CC\x03\x02\x02\x02\u03CA\u03CC\x05\x9CO\x02\u03CB\u03BB\x03\x02\x02" +
		"\x02\u03CB\u03BC\x03\x02\x02\x02\u03CB\u03C0\x03\x02\x02\x02\u03CB\u03C5" +
		"\x03\x02\x02\x02\u03CB\u03CA\x03\x02\x02\x02\u03CC\x97\x03\x02\x02\x02" +
		"\u03CD\u03DD\x05\x94K\x02\u03CE\u03CF\x07\u0100\x02\x02\u03CF\u03D0\x05" +
		"\xA8U\x02\u03D0\u03D1\x05\x94K\x02\u03D1\u03DD\x03\x02\x02\x02\u03D2\u03D3" +
		"\x07\u0144\x02\x02\u03D3\u03D5\x07\u0100\x02\x02\u03D4\u03D6\x05\u011C" +
		"\x8F\x02\u03D5\u03D4\x03\x02\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6" +
		"\u03DD\x03\x02\x02\x02\u03D7\u03D8\x07\u013E\x02\x02\u03D8\u03DA\x07\u0100" +
		"\x02\x02\u03D9\u03DB\x05\u011C\x8F\x02\u03DA\u03D9\x03\x02\x02\x02\u03DA" +
		"\u03DB\x03\x02\x02\x02\u03DB\u03DD\x03\x02\x02\x02\u03DC\u03CD\x03\x02" +
		"\x02\x02\u03DC\u03CE\x03\x02\x02\x02\u03DC\u03D2\x03\x02\x02\x02\u03DC" +
		"\u03D7\x03\x02\x02\x02\u03DD\x99\x03\x02\x02\x02\u03DE\u03EE\x05\x94K" +
		"\x02\u03DF\u03E0\x07\xFF\x02\x02\u03E0\u03E1\x05\xA8U\x02\u03E1\u03E2" +
		"\x05\x94K\x02\u03E2\u03EE\x03\x02\x02\x02\u03E3\u03E4\x07\u0144\x02\x02" +
		"\u03E4\u03E6\x07\xFF\x02\x02\u03E5\u03E7\x05\u011C\x8F\x02\u03E6\u03E5" +
		"\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03EE\x03\x02\x02\x02" +
		"\u03E8\u03E9\x07\u013E\x02\x02\u03E9\u03EB\x07\xFF\x02\x02\u03EA\u03EC" +
		"\x05\u011C\x8F\x02\u03EB\u03EA\x03\x02\x02\x02\u03EB\u03EC\x03\x02\x02" +
		"\x02\u03EC\u03EE\x03\x02\x02\x02\u03ED\u03DE\x03\x02\x02\x02\u03ED\u03DF" +
		"\x03\x02\x02\x02\u03ED\u03E3\x03\x02\x02\x02\u03ED\u03E8\x03\x02\x02\x02" +
		"\u03EE\x9B\x03\x02\x02\x02\u03EF\u03F0\t\x07\x02\x02\u03F0\x9D\x03\x02" +
		"\x02\x02\u03F1\u03F2\x05\u0100\x81\x02\u03F2\u03F3\x07\u0180\x02\x02\u03F3" +
		"\u03F4\x05\xA0Q\x02\u03F4\u0400\x03\x02\x02\x02\u03F5\u03F6\x07S\x02\x02" +
		"\u03F6\u03F7\x05\u0100\x81\x02\u03F7\u03F8\x07T\x02\x02\u03F8\u03F9\x05" +
		"\xA2R\x02\u03F9\u0400\x03\x02\x02\x02\u03FA\u03FB\x05\u0102\x82\x02\u03FB" +
		"\u03FC\x07\u0180\x02\x02\u03FC\u03FD\x07\xA2\x02\x02\u03FD\u03FE\x05\u0100" +
		"\x81\x02\u03FE\u0400\x03\x02\x02\x02\u03FF\u03F1\x03\x02\x02\x02\u03FF" +
		"\u03F5\x03\x02\x02\x02\u03FF\u03FA\x03\x02\x02\x02\u0400\x9F\x03\x02\x02" +
		"\x02\u0401\u0402\x07\xDF\x02\x02\u0402\u0403\x05\u0100\x81\x02\u0403\u0404" +
		"\x07T\x02\x02\u0404\u0405\x05\xA2R\x02\u0405\u0454\x03\x02\x02\x02\u0406" +
		"\u0407\x05\u0100\x81\x02\u0407\u0408\x07\u010D\x02\x02\u0408\u0409\x07" +
		"\xDF\x02\x02\u0409\u040A\x05\u0100\x81\x02\u040A\u040B\x07T\x02\x02\u040B" +
		"\u040C\x05\xA2R\x02\u040C\u0454\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u040D\u040E\x078\x02\x02\u040E\u040F\x05\u0100\x81\x02\u040F\u0410" +
		"\x07T\x02\x02\u0410\u0411\x05\xA2R\x02\u0411\u0454\x03\x02\x02\x02\u0412" +
		"\u0413\x05\u0100\x81\x02\u0413\u0414\x07\u010D\x02\x02\u0414\u0415\x07" +
		"8\x02\x02\u0415\u0416\x05\u0100\x81\x02\u0416\u0417\x07T\x02\x02\u0417" +
		"\u0418\x05\xA2R\x02\u0418\u0454\x03\x02\x02\x02\u0419\u041A\x07\u013F" +
		"\x02\x02\u041A\u041B\x05\u0100\x81\x02\u041B\u041C\x07T\x02\x02\u041C" +
		"\u041D\x05\xA2R\x02\u041D\u0454\x03\x02\x02\x02\u041E\u041F\x07L\x02\x02" +
		"\u041F\u0420\x05\u0100\x81\x02\u0420\u0421\x07T\x02\x02\u0421\u0422\x05" +
		"\xA2R\x02\u0422\u0454\x03\x02\x02\x02\u0423\u0424\x07Q\x02\x02\u0424\u0425" +
		"\x05\u0100\x81\x02\u0425\u0426\x07T\x02\x02\u0426\u0427\x05\xA2R\x02\u0427" +
		"\u0454\x03\x02\x02\x02\u0428\u0429\x07R\x02\x02\u0429\u042A\x05\u0100" +
		"\x81\x02\u042A\u042B\x07T\x02\x02\u042B\u042C\x05\xA2R\x02\u042C\u0454" +
		"\x03\x02\x02\x02\u042D\u042E\x07\x91\x02\x02\u042E\u042F\x05\u0100\x81" +
		"\x02\u042F\u0430\x07T\x02\x02\u0430\u0434\x05\xA4S\x02\u0431\u0432\x07" +
		"\u0186\x02\x02\u0432\u0433\x07\u0147\x02\x02\u0433\u0435\x07\u0187\x02" +
		"\x02\u0434\u0431\x03\x02\x02\x02\u0434\u0435\x03\x02\x02\x02\u0435\u0454" +
		"\x03\x02\x02\x02\u0436\u0437\x07\x92\x02\x02\u0437\u0438\x05\u0100\x81" +
		"\x02\u0438\u0439\x07T\x02\x02\u0439\u043D\x05\xA4S\x02\u043A\u043B\x07" +
		"\u0186\x02\x02\u043B\u043C\x07\u0147\x02\x02\u043C\u043E\x07\u0187\x02" +
		"\x02\u043D\u043A\x03\x02\x02\x02\u043D\u043E\x03\x02\x02\x02\u043E\u0454" +
		"\x03\x02\x02\x02\u043F\u0440\x05\u0100\x81\x02\u0440\u0441\x07\u010D\x02" +
		"\x02\u0441\u0442\x07\x91\x02\x02\u0442\u0443\x05\u0100\x81\x02\u0443\u0444" +
		"\x07T\x02\x02\u0444\u0445\x05\xA4S\x02\u0445\u0454\x03\x02\x02\x02\u0446" +
		"\u0447\x07~\x02\x02\u0447\u044B\x05\u0100\x81\x02\u0448\u0449\x07\u0186" +
		"\x02\x02\u0449\u044A\x07}\x02\x02\u044A\u044C\x07\u0187\x02\x02\u044B" +
		"\u0448\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C\u0454\x03\x02" +
		"\x02\x02\u044D\u044E\x07\xD6\x02\x02\u044E\u0454\x05\u0100\x81\x02\u044F" +
		"\u0450\x07\xD5\x02\x02\u0450\u0454\x05\u0100\x81\x02\u0451\u0452\x07\x9D" +
		"\x02\x02\u0452\u0454\x05\u0102\x82\x02\u0453\u0401\x03\x02\x02\x02\u0453" +
		"\u0406\x03\x02\x02\x02\u0453\u040D\x03\x02\x02\x02\u0453\u0412\x03\x02" +
		"\x02\x02\u0453\u0419\x03\x02\x02\x02\u0453\u041E\x03\x02\x02\x02\u0453" +
		"\u0423\x03\x02\x02\x02\u0453\u0428\x03\x02\x02\x02\u0453\u042D\x03\x02" +
		"\x02\x02\u0453\u0436\x03\x02\x02\x02\u0453\u043F\x03\x02\x02\x02\u0453" +
		"\u0446\x03\x02\x02\x02\u0453\u044D\x03\x02\x02\x02\u0453\u044F\x03\x02" +
		"\x02\x02\u0453\u0451\x03\x02\x02\x02\u0454\xA1\x03\x02\x02\x02\u0455\u045A" +
		"\x05\u0100\x81\x02\u0456\u045A\x05:\x1E\x02\u0457\u0458\x07\u017C\x02" +
		"\x02\u0458\u045A\x05:\x1E\x02\u0459\u0455\x03\x02\x02\x02\u0459\u0456" +
		"\x03\x02\x02\x02\u0459\u0457\x03\x02\x02\x02\u045A\xA3\x03\x02\x02\x02" +
		"\u045B\u045E\x05\u0100\x81\x02\u045C\u045E\x05\xA6T\x02\u045D\u045B\x03" +
		"\x02\x02\x02\u045D\u045C\x03\x02\x02\x02\u045E\xA5\x03\x02\x02\x02\u045F" +
		"\u0460\x07\x05\x02\x02\u0460\u0461\x07\u0184\x02\x02\u0461\u0462\x07\x05" +
		"\x02\x02\u0462\xA7\x03\x02\x02\x02\u0463\u0464\t\x06\x02\x02\u0464\xA9" +
		"\x03\x02\x02\x02\u0465\u0468\x05\xACW\x02\u0466\u0468\x05\xAEX\x02\u0467" +
		"\u0465\x03\x02\x02\x02\u0467\u0466\x03\x02\x02\x02\u0468\xAB\x03\x02\x02" +
		"\x02\u0469\u046A\x05\u0100\x81\x02\u046A\u046B\x07\u0180\x02\x02\u046B" +
		"\u046C\x05\u0100\x81\x02\u046C\u046D\x07\u017B\x02\x02\u046D\u046E\x05" +
		"\u0100\x81\x02\u046E\u046F\x07\u0183\x02\x02\u046F\u0470\x05\u0100\x81" +
		"\x02\u0470\u0471\x07\u0180\x02\x02\u0471\u0472\x05\u0100\x81\x02\u0472" +
		"\u0473\x07\u017C\x02\x02\u0473\u0474\x05\u0100\x81\x02\u0474\xAD\x03\x02" +
		"\x02\x02\u0475\u0478\x05\x92J\x02\u0476\u0477\x07\u0183\x02\x02\u0477" +
		"\u0479\x05\x8AF\x02\u0478\u0476\x03\x02\x02\x02\u0479\u047A\x03\x02\x02" +
		"\x02\u047A\u0478\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B\u0484" +
		"\x03\x02\x02\x02\u047C\u047F\x05\x8EH\x02\u047D\u047E\x07\u0183\x02\x02" +
		"\u047E\u0480\x05\x8EH\x02\u047F\u047D\x03\x02\x02\x02\u0480\u0481\x03" +
		"\x02\x02\x02\u0481\u047F\x03\x02\x02\x02\u0481\u0482\x03\x02\x02\x02\u0482" +
		"\u0484\x03\x02\x02\x02\u0483\u0475\x03\x02\x02\x02\u0483\u047C\x03\x02" +
		"\x02\x02\u0484\xAF\x03\x02\x02\x02\u0485\u0491\x05\xB2Z\x02\u0486\u0491" +
		"\x05\xB6\\\x02\u0487\u0491\x05\xBA^\x02\u0488\u0491\x05\xC4c\x02\u0489" +
		"\u0491\x05\xC6d\x02\u048A\u0491\x05\xC8e\x02\u048B\u0491\x05\xCAf\x02" +
		"\u048C\u0491\x05\xCCg\x02\u048D\u0491\x05\xCEh\x02\u048E\u0491\x05\xBE" +
		"`\x02\u048F\u0491\x05\xC2b\x02\u0490\u0485\x03\x02\x02\x02\u0490\u0486" +
		"\x03\x02\x02\x02\u0490\u0487\x03\x02\x02\x02\u0490\u0488\x03\x02\x02\x02" +
		"\u0490\u0489\x03\x02\x02\x02\u0490\u048A\x03\x02\x02\x02\u0490\u048B\x03" +
		"\x02\x02\x02\u0490\u048C\x03\x02\x02\x02\u0490\u048D\x03\x02\x02\x02\u0490" +
		"\u048E\x03\x02\x02\x02\u0490\u048F\x03\x02\x02\x02\u0491\xB1\x03\x02\x02" +
		"\x02\u0492\u0493\x07\xBA\x02\x02\u0493\u0494\x05\u0118\x8D\x02\u0494\u0495" +
		"\x05\xB4[\x02\u0495\xB3\x03\x02\x02\x02\u0496\u0499\x05\xC4c\x02\u0497" +
		"\u0499\x05\xC6d\x02\u0498\u0496\x03\x02\x02\x02\u0498\u0497\x03\x02\x02" +
		"\x02\u0499\xB5\x03\x02\x02\x02\u049A\u049B\x07\xBA\x02\x02\u049B\u049C" +
		"\x05\u0118\x8D\x02\u049C\u049D\x05\xB8]\x02\u049D\u049E\x07\u0183\x02" +
		"\x02\u049E\u049F\x07v\x02\x02\u049F\u04A0\x05<\x1F\x02\u04A0\xB7\x03\x02" +
		"\x02\x02\u04A1\u04A6\x05\xC8e\x02\u04A2\u04A6\x05\xCAf\x02\u04A3\u04A6" +
		"\x05\xCCg\x02\u04A4\u04A6\x05\xCEh\x02\u04A5\u04A1\x03\x02\x02\x02\u04A5" +
		"\u04A2\x03\x02\x02\x02\u04A5\u04A3\x03\x02\x02\x02\u04A5\u04A4\x03\x02" +
		"\x02\x02\u04A6\xB9\x03\x02\x02\x02\u04A7\u04A8\x07\xBA\x02\x02\u04A8\u04A9" +
		"\x05\u0118\x8D\x02\u04A9\u04AA\x07\xBF\x02\x02\u04AA\u04AB\x05\xBC_\x02" +
		"\u04AB\u04AC\x07\u0183\x02\x02\u04AC\u04B0\x07v\x02\x02\u04AD\u04AE\x05" +
		"<\x1F\x02\u04AE\u04AF\x07\u0183\x02\x02\u04AF\u04B1\x03\x02\x02\x02\u04B0" +
		"\u04AD\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04B2\x03\x02" +
		"\x02\x02\u04B2\u04B3\x05F$\x02\u04B3\xBB\x03\x02\x02\x02\u04B4\u04B7\x05" +
		"f4\x02\u04B5\u04B7\x05\xD4k\x02\u04B6\u04B4\x03\x02\x02\x02\u04B6\u04B5" +
		"\x03\x02\x02\x02\u04B7\xBD\x03\x02\x02\x02\u04B8\u04B9\x07\xD3\x02\x02" +
		"\u04B9\u04BA\x07\u0180\x02\x02\u04BA\u04BB\x05\xC0a\x02\u04BB\u04BC\x07" +
		"\u0183\x02\x02\u04BC\u04BD\x07q\x02\x02\u04BD\u04BE\x05\xD0i\x02\u04BE" +
		"\u04BF\x07\u016C\x02\x02\u04BF\u04C0\x07\xD2\x02\x02\u04C0\xBF\x03\x02" +
		"\x02\x02\u04C1\u04C4\x052\x1A\x02\u04C2\u04C4\x05\u0116\x8C\x02\u04C3" +
		"\u04C1\x03\x02\x02\x02\u04C3\u04C2\x03\x02\x02\x02\u04C4\xC1\x03\x02\x02" +
		"\x02\u04C5\u04C6\x07q\x02\x02\u04C6\u04C7\x05\xD0i\x02\u04C7\u04C8\x07" +
		"\u016C\x02\x02\u04C8\u04C9\x05\u0118\x8D\x02\u04C9\xC3\x03\x02\x02\x02" +
		"\u04CA\u04CB\x07\xBF\x02\x02\u04CB\u04CD\x05\xD6l\x02\u04CC\u04CE\x05" +
		"\xD8m\x02\u04CD\u04CC\x03\x02\x02\x02\u04CD\u04CE\x03\x02\x02\x02\u04CE" +
		"\xC5\x03\x02\x02\x02\u04CF\u04D0\x07W\x02\x02\u04D0\u04D2\x05\xD6l\x02" +
		"\u04D1\u04D3\x05\xDEp\x02\u04D2\u04D1\x03\x02\x02\x02\u04D2\u04D3\x03" +
		"\x02\x02\x02\u04D3\xC7\x03\x02\x02\x02\u04D4\u04D5\x07\xBF\x02\x02\u04D5" +
		"\u04D7\x05\xBC_\x02\u04D6\u04D8\x05\xD8m\x02\u04D7\u04D6\x03\x02\x02\x02" +
		"\u04D7\u04D8\x03\x02\x02\x02\u04D8\u04DB\x03\x02\x02\x02\u04D9\u04DA\x07" +
		"\u0183\x02\x02\u04DA\u04DC\x05<\x1F\x02\u04DB\u04D9\x03\x02\x02\x02\u04DB" +
		"\u04DC\x03\x02\x02\x02\u04DC\xC9\x03\x02\x02\x02\u04DD\u04DE\x07W\x02" +
		"\x02\u04DE\u04E0\x05\xBC_\x02\u04DF\u04E1\x05\xDEp\x02\u04E0\u04DF\x03" +
		"\x02\x02\x02\u04E0\u04E1\x03\x02\x02\x02\u04E1\u04E4\x03\x02\x02\x02\u04E2" +
		"\u04E3\x07\u0183\x02\x02\u04E3\u04E5\x05<\x1F\x02\u04E4\u04E2\x03\x02" +
		"\x02\x02\u04E4\u04E5\x03\x02\x02\x02\u04E5\xCB\x03\x02\x02\x02\u04E6\u04E8" +
		"\x07\u0143\x02\x02\u04E7\u04E9\x05\xE0q\x02\u04E8\u04E7\x03\x02\x02\x02" +
		"\u04E8\u04E9\x03\x02\x02\x02\u04E9\u04EC\x03\x02\x02\x02\u04EA\u04EB\x07" +
		"\u0183\x02\x02\u04EB\u04ED\x05<\x1F\x02\u04EC\u04EA\x03\x02\x02\x02\u04EC" +
		"\u04ED\x03\x02\x02\x02\u04ED\xCD\x03\x02\x02\x02\u04EE\u04F0\x07\u0142" +
		"\x02\x02\u04EF\u04F1\x05\xDEp\x02\u04F0\u04EF\x03\x02\x02\x02\u04F0\u04F1" +
		"\x03\x02\x02\x02\u04F1\u04F4\x03\x02\x02\x02\u04F2\u04F3\x07\u0183\x02" +
		"\x02\u04F3\u04F5\x05<\x1F\x02\u04F4\u04F2\x03\x02\x02\x02\u04F4\u04F5" +
		"\x03\x02\x02\x02\u04F5\xCF\x03\x02\x02\x02\u04F6\u04F9\x05\xD6l\x02\u04F7" +
		"\u04F9\x05\xD4k\x02\u04F8\u04F6\x03\x02\x02\x02\u04F8\u04F7\x03\x02\x02" +
		"\x02\u04F9\xD1\x03\x02\x02\x02\u04FA\u04FD\x05f4\x02\u04FB\u04FD\x05\xD4" +
		"k\x02\u04FC\u04FA\x03\x02\x02\x02\u04FC\u04FB\x03\x02\x02\x02\u04FD\xD3" +
		"\x03\x02\x02\x02\u04FE\u04FF\x07\u0186\x02\x02\u04FF\u0500\x07\u0114\x02" +
		"\x02\u0500\u0501\x07\u0183\x02\x02\u0501\u0502\x052\x1A\x02\u0502\u0503" +
		"\x07\u0187\x02\x02\u0503\xD5\x03\x02\x02\x02\u0504\u0505\x052\x1A\x02" +
		"\u0505\xD7\x03\x02\x02\x02\u0506\u0507\x05\xDAn\x02\u0507\xD9\x03\x02" +
		"\x02\x02\u0508\u050C\x07\u0186\x02\x02\u0509\u050D\x05\xDCo\x02\u050A" +
		"\u050D\x07\xD0\x02\x02\u050B\u050D\x07Y\x02\x02\u050C\u0509\x03\x02\x02" +
		"\x02\u050C\u050A\x03\x02\x02\x02\u050C\u050B\x03\x02\x02\x02\u050D\u050E" +
		"\x03\x02\x02\x02\u050E\u050F\x07\u0187\x02\x02\u050F\xDB\x03\x02\x02\x02" +
		"\u0510\u0513\x07c\x02\x02\u0511\u0512\x07\u0183\x02\x02\u0512\u0514\t" +
		"\b\x02\x02\u0513\u0511\x03\x02\x02\x02\u0513\u0514\x03\x02\x02\x02\u0514" +
		"\xDD\x03\x02\x02\x02\u0515\u0516\x07\u0186\x02\x02\u0516\u0517\x07c\x02" +
		"\x02\u0517\u0518\x07\u0187\x02\x02\u0518\xDF\x03\x02\x02\x02\u0519\u051A" +
		"\x05\xE2r\x02\u051A\xE1\x03\x02\x02\x02\u051B\u051E\x07\u0186\x02\x02" +
		"\u051C\u051F\x05\xE4s\x02\u051D\u051F\x07\xDE\x02\x02\u051E\u051C\x03" +
		"\x02\x02\x02\u051E\u051D\x03\x02\x02\x02\u051F\u0520\x03\x02\x02\x02\u0520" +
		"\u0521\x07\u0187\x02\x02\u0521\xE3\x03\x02\x02\x02\u0522\u0525\x07c\x02" +
		"\x02\u0523\u0524\x07\u0183\x02\x02\u0524\u0526\x07\xDE\x02\x02\u0525\u0523" +
		"\x03\x02\x02\x02\u0525\u0526\x03\x02\x02\x02\u0526\xE5\x03\x02\x02\x02" +
		"\u0527\u052C\x05\xE8u\x02\u0528\u052C\x05\xECw\x02\u0529\u052C\x05\xF0" +
		"y\x02\u052A\u052C\x05\xF2z\x02\u052B\u0527\x03\x02\x02\x02\u052B\u0528" +
		"\x03\x02\x02\x02\u052B\u0529\x03\x02\x02\x02\u052B\u052A\x03\x02\x02\x02" +
		"\u052C\xE7\x03\x02\x02\x02\u052D\u0530\x05\x86D\x02\u052E\u0530\x05\x88" +
		"E\x02\u052F\u052D\x03\x02\x02\x02\u052F\u052E\x03\x02\x02\x02\u0530\u0531" +
		"\x03\x02\x02\x02\u0531\u0532\x07\u0180\x02\x02\u0532\u0533\x05\u0116\x8C" +
		"\x02\u0533\xE9\x03\x02\x02\x02\u0534\u0537\x05\x82B\x02\u0535\u0537\x05" +
		"\x84C\x02\u0536\u0534\x03\x02\x02\x02\u0536\u0535\x03\x02\x02\x02\u0537" +
		"\u0538\x03\x02\x02\x02\u0538\u0539\x07\u0180\x02\x02\u0539\u053A\x05\u0116" +
		"\x8C\x02\u053A\xEB\x03\x02\x02\x02\u053B\u053C\x05\u0116\x8C\x02\u053C" +
		"\u053F\x07\u0180\x02\x02\u053D\u0540\x05\x86D\x02\u053E\u0540\x05\x88" +
		"E\x02\u053F\u053D\x03\x02\x02\x02\u053F\u053E\x03\x02\x02\x02\u0540\xED" +
		"\x03\x02\x02\x02\u0541\u0542\x05\u0116\x8C\x02\u0542\u0545\x07\u0180\x02" +
		"\x02\u0543\u0546\x05\x82B\x02\u0544\u0546\x05\x84C\x02\u0545\u0543\x03" +
		"\x02\x02\x02\u0545\u0544\x03\x02\x02\x02\u0546\xEF\x03\x02\x02\x02\u0547" +
		"\u054A\x05v<\x02\u0548\u054A\x05x=\x02\u0549\u0547\x03\x02\x02\x02\u0549" +
		"\u0548\x03\x02\x02\x02\u054A\u054B\x03\x02\x02\x02\u054B\u054C\x07\u0180" +
		"\x02\x02\u054C\u054D\x052\x1A\x02\u054D\xF1\x03\x02\x02\x02\u054E\u054F" +
		"\x05\xF4{\x02\u054F\u0550\x07\u0180\x02\x02\u0550\u0551\x052\x1A\x02\u0551" +
		"\xF3\x03\x02\x02\x02\u0552\u0562\x05\u0114\x8B\x02\u0553\u0562\x07\u0114" +
		"\x02\x02\u0554\u0562\x07\u0115\x02\x02\u0555\u0562\x07\u0116\x02\x02\u0556" +
		"\u0562\x07\x90\x02\x02\u0557\u0562\x07b\x02\x02\u0558\u0562\x07\xD1\x02" +
		"\x02\u0559\u0562\x07a\x02\x02\u055A\u0562\x05\u0112\x8A\x02\u055B\u0562" +
		"\x07\u0128\x02\x02\u055C\u0562\x07\u0129\x02\x02\u055D\u0562\x07\u0127" +
		"\x02\x02\u055E\u0562\x07\u0163\x02\x02\u055F\u0562\x07\u0160\x02\x02\u0560" +
		"\u0562\x05\u0104\x83\x02\u0561\u0552\x03\x02\x02\x02\u0561\u0553\x03\x02" +
		"\x02\x02\u0561\u0554\x03\x02\x02\x02\u0561\u0555\x03\x02\x02\x02\u0561" +
		"\u0556\x03\x02\x02\x02\u0561\u0557\x03\x02\x02\x02\u0561\u0558\x03\x02" +
		"\x02\x02\u0561\u0559\x03\x02\x02\x02\u0561\u055A\x03\x02\x02\x02\u0561" +
		"\u055B\x03\x02\x02\x02\u0561\u055C\x03\x02\x02\x02\u0561\u055D\x03\x02" +
		"\x02\x02\u0561\u055E\x03\x02\x02\x02\u0561\u055F\x03\x02\x02\x02\u0561" +
		"\u0560\x03\x02\x02\x02\u0562\xF5\x03\x02\x02\x02\u0563\u0564\x07N\x02" +
		"\x02\u0564\u0565\t\t\x02\x02\u0565\u0566\x05\u0104\x83\x02\u0566\u0567" +
		"\x052\x1A\x02\u0567\u058F\x03\x02\x02\x02\u0568\u056B\x07O\x02\x02\u0569" +
		"\u056C\x05j6\x02\u056A\u056C\x05l7\x02\u056B\u0569\x03\x02\x02\x02\u056B" +
		"\u056A\x03\x02\x02\x02\u056C\u058F\x03\x02\x02\x02\u056D\u056E\x07\xF8" +
		"\x02\x02\u056E\u056F\x07\u0186\x02\x02\u056F\u0570\x05\u0106\x84\x02\u0570" +
		"\u0571\x07\u0183\x02\x02\u0571\u0572\x052\x1A\x02\u0572\u0573\x07\u0187" +
		"\x02\x02\u0573\u058F\x03\x02\x02\x02\u0574\u0575\x07\xF8\x02\x02\u0575" +
		"\u0576\x07\u0186\x02\x02\u0576\u0577\x05\u010A\x86\x02\u0577\u0578\x07" +
		"\u0183\x02\x02\u0578\u0579\x052\x1A\x02\u0579\u057A\x07\u0187\x02\x02" +
		"\u057A\u058F\x03\x02\x02\x02\u057B\u0580\x05\xF8}\x02\u057C\u057D\x07" +
		"\u0183\x02\x02\u057D\u057F\x05\xF8}\x02\u057E\u057C\x03\x02\x02\x02\u057F" +
		"\u0582\x03\x02\x02\x02\u0580\u057E\x03\x02\x02\x02\u0580\u0581\x03\x02" +
		"\x02\x02\u0581\u058F\x03\x02\x02\x02\u0582\u0580\x03\x02\x02\x02\u0583" +
		"\u0584\x07\x9A\x02\x02\u0584\u058F\x07V\x02\x02\u0585\u058F\x07\u0107" +
		"\x02\x02\u0586\u058F\x07\xB6\x02\x02\u0587\u058F\x07\xB7\x02\x02\u0588" +
		"\u0589\x07Z\x02\x02\u0589\u058B\x05\xD0i\x02\u058A\u058C\x05\xDEp\x02" +
		"\u058B\u058A\x03\x02\x02\x02\u058B\u058C\x03\x02\x02\x02\u058C\u058F\x03" +
		"\x02\x02\x02\u058D\u058F\x07\u013D\x02\x02\u058E\u0563\x03\x02\x02\x02" +
		"\u058E\u0568\x03\x02\x02\x02\u058E\u056D\x03\x02\x02\x02\u058E\u0574\x03" +
		"\x02\x02\x02\u058E\u057B\x03\x02\x02\x02\u058E\u0583\x03\x02\x02\x02\u058E" +
		"\u0585\x03\x02\x02\x02\u058E\u0586\x03\x02\x02\x02\u058E\u0587\x03\x02" +
		"\x02\x02\u058E\u0588\x03\x02\x02\x02\u058E\u058D\x03\x02\x02\x02\u058F" +
		"\xF7\x03\x02\x02\x02\u0590\u0591\t\n\x02\x02\u0591\u0592\t\v\x02\x02\u0592" +
		"\xF9\x03\x02\x02\x02\u0593\u0594\x07\n\x02\x02\u0594\u05D6\x07\x05\x02" +
		"\x02\u0595\u05D6\x07\v\x02\x02\u0596\u0597\x07\x0F\x02\x02\u0597\u059C" +
		"\x07\u01AB\x02\x02\u0598\u0599\x07\u0183\x02\x02\u0599\u059B\x07\u01AB" +
		"\x02\x02\u059A\u0598\x03\x02\x02\x02\u059B\u059E\x03\x02\x02\x02\u059C" +
		"\u059A\x03\x02\x02\x02\u059C\u059D\x03\x02\x02\x02\u059D\u05D6\x03\x02" +
		"\x02\x02\u059E\u059C\x03\x02\x02\x02\u059F\u05A0\x07\x10\x02\x02\u05A0" +
		"\u05D6\x07\x03\x02\x02\u05A1\u05A2\x07\x11\x02\x02\u05A2\u05D6\v\x02\x02" +
		"\x02\u05A3\u05D6\x07\x12\x02\x02\u05A4\u05A5\x07\x13\x02\x02\u05A5\u05AA" +
		"\x07\u01AB\x02\x02\u05A6\u05A7\x07\u0183\x02\x02\u05A7\u05A9\x07\u01AB" +
		"\x02\x02\u05A8\u05A6\x03\x02\x02\x02\u05A9\u05AC\x03\x02\x02\x02\u05AA" +
		"\u05A8\x03\x02\x02\x02\u05AA\u05AB\x03\x02\x02\x02\u05AB\u05D6\x03\x02" +
		"\x02\x02\u05AC\u05AA\x03\x02\x02\x02\u05AD\u05AE\x07\x15\x02\x02\u05AE" +
		"\u05B3\x07\x03\x02\x02\u05AF\u05B0\x07\u0183\x02\x02\u05B0\u05B2\x07\x03" +
		"\x02\x02\u05B1\u05AF\x03\x02\x02\x02\u05B2\u05B5\x03\x02\x02\x02\u05B3" +
		"\u05B1\x03\x02\x02\x02\u05B3\u05B4\x03\x02\x02\x02\u05B4\u05D6\x03\x02" +
		"\x02\x02\u05B5\u05B3\x03\x02\x02\x02\u05B6\u05B7\x07\x17\x02\x02\u05B7" +
		"\u05D6\x052\x1A\x02\u05B8\u05D6\x07\x18\x02\x02\u05B9\u05D6\x07\x19\x02" +
		"\x02\u05BA\u05D6\x07\x1A\x02\x02\u05BB\u05BC\x07\x1B\x02\x02\u05BC\u05D6" +
		"\x052\x1A\x02\u05BD\u05BE\x07\x1C\x02\x02\u05BE\u05D6\x052\x1A\x02\u05BF" +
		"\u05D6\x07\x1D\x02\x02\u05C0\u05D6\x07\x1E\x02\x02\u05C1\u05D6\x07\x1F" +
		"\x02\x02\u05C2\u05D6\x07 \x02\x02\u05C3\u05D6\x07!\x02\x02\u05C4\u05D6" +
		"\x07\"\x02\x02\u05C5\u05C6\x07#\x02\x02\u05C6\u05D6\x052\x1A\x02\u05C7" +
		"\u05C8\x07$\x02\x02\u05C8\u05D6\x052\x1A\x02\u05C9\u05CB\x07%\x02\x02" +
		"\u05CA\u05CC\x07\u0180\x02\x02\u05CB\u05CA\x03\x02\x02\x02\u05CB\u05CC" +
		"\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02\x02\u05CD\u05D6\x07\x05\x02\x02" +
		"\u05CE\u05D6\x07&\x02\x02\u05CF\u05D6\x07\'\x02\x02\u05D0\u05D6\x07(\x02" +
		"\x02\u05D1\u05D6\x07)\x02\x02\u05D2\u05D6\x07*\x02\x02\u05D3\u05D4\x07" +
		"1\x02\x02\u05D4\u05D6\x07\u01AB\x02\x02\u05D5\u0593\x03\x02\x02\x02\u05D5" +
		"\u0595\x03\x02\x02\x02\u05D5\u0596\x03\x02\x02\x02\u05D5\u059F\x03\x02" +
		"\x02\x02\u05D5\u05A1\x03\x02\x02\x02\u05D5\u05A3\x03\x02\x02\x02\u05D5" +
		"\u05A4\x03\x02\x02\x02\u05D5\u05AD\x03\x02\x02\x02\u05D5\u05B6\x03\x02" +
		"\x02\x02\u05D5\u05B8\x03\x02\x02\x02\u05D5\u05B9\x03\x02\x02\x02\u05D5" +
		"\u05BA\x03\x02\x02\x02\u05D5\u05BB\x03\x02\x02\x02\u05D5\u05BD\x03\x02" +
		"\x02\x02\u05D5\u05BF\x03\x02\x02\x02\u05D5\u05C0\x03\x02\x02\x02\u05D5" +
		"\u05C1\x03\x02\x02\x02\u05D5\u05C2\x03\x02\x02\x02\u05D5\u05C3\x03\x02" +
		"\x02\x02\u05D5\u05C4\x03\x02\x02\x02\u05D5\u05C5\x03\x02\x02\x02\u05D5" +
		"\u05C7\x03\x02\x02\x02\u05D5\u05C9\x03\x02\x02\x02\u05D5\u05CE\x03\x02" +
		"\x02\x02\u05D5\u05CF\x03\x02\x02\x02\u05D5\u05D0\x03\x02\x02\x02\u05D5" +
		"\u05D1\x03\x02\x02\x02\u05D5\u05D2\x03\x02\x02\x02\u05D5\u05D3\x03\x02" +
		"\x02\x02\u05D6\xFB\x03\x02\x02\x02\u05D7\u05D8\t\f\x02\x02\u05D8\xFD\x03" +
		"\x02\x02\x02\u05D9\u05DA\t\r\x02\x02\u05DA\xFF\x03\x02\x02\x02\u05DB\u05DC" +
		"\t\x0E\x02\x02\u05DC\u0101\x03\x02\x02\x02\u05DD\u05DE\t\x0F\x02\x02\u05DE" +
		"\u0103\x03\x02\x02\x02\u05DF\u05E0\t\x10\x02\x02\u05E0\u0105\x03\x02\x02" +
		"\x02\u05E1\u05E2\t\x11\x02\x02\u05E2\u0107\x03\x02\x02\x02\u05E3\u05E4" +
		"\t\x12\x02\x02\u05E4\u0109\x03\x02\x02\x02\u05E5\u05E6\t\x13\x02\x02\u05E6" +
		"\u010B\x03\x02\x02\x02\u05E7\u05E8\t\x14\x02\x02\u05E8\u010D\x03\x02\x02" +
		"\x02\u05E9\u05EC\x05\u0106\x84\x02\u05EA\u05EC\x05\u010A\x86\x02\u05EB" +
		"\u05E9\x03\x02\x02\x02\u05EB\u05EA\x03\x02\x02\x02\u05EC\u010F\x03\x02" +
		"\x02\x02\u05ED\u05F0\x05\u0108\x85\x02\u05EE\u05F0\x05\u010C\x87\x02\u05EF" +
		"\u05ED\x03\x02\x02\x02\u05EF\u05EE\x03\x02\x02\x02\u05F0\u0111\x03\x02" +
		"\x02\x02\u05F1\u05F6\x05\u010E\x88\x02\u05F2\u05F6\x05\u0110\x89\x02\u05F3" +
		"\u05F6\x05\xFC\x7F\x02\u05F4\u05F6\x05\xFE\x80\x02\u05F5\u05F1\x03\x02" +
		"\x02\x02\u05F5\u05F2\x03\x02\x02\x02\u05F5\u05F3\x03\x02\x02\x02\u05F5" +
		"\u05F4\x03\x02\x02\x02\u05F6\u0113\x03\x02\x02\x02\u05F7\u05FA\x05\u0100" +
		"\x81\x02\u05F8\u05FA\x05\u0102\x82\x02\u05F9\u05F7\x03\x02\x02\x02\u05F9" +
		"\u05F8\x03\x02\x02\x02\u05FA\u0115\x03\x02\x02\x02\u05FB\u060C\x05\u0114" +
		"\x8B\x02\u05FC\u060C\x07\u0114\x02\x02\u05FD\u060C\x07\u0115\x02\x02\u05FE" +
		"\u060C\x07\u0116\x02\x02\u05FF\u060C\x07\x90\x02\x02\u0600\u060C\x07b" +
		"\x02\x02\u0601\u060C\x07\xD1\x02\x02\u0602\u060C\x07a\x02\x02\u0603\u060C" +
		"\x07\xD3\x02\x02\u0604\u060C\x05\u0112\x8A\x02\u0605\u060C\x07\u0128\x02" +
		"\x02\u0606\u060C\x07\u0129\x02\x02\u0607\u060C\x07\u0127\x02\x02\u0608" +
		"\u060C\x07\u0163\x02\x02\u0609\u060C\x07\u0160\x02\x02\u060A\u060C\x05" +
		"\u0104\x83\x02\u060B\u05FB\x03\x02\x02\x02\u060B\u05FC\x03\x02\x02\x02" +
		"\u060B\u05FD\x03\x02\x02\x02\u060B\u05FE\x03\x02\x02\x02\u060B\u05FF\x03" +
		"\x02\x02\x02\u060B\u0600\x03\x02\x02\x02\u060B\u0601\x03\x02\x02\x02\u060B" +
		"\u0602\x03\x02\x02\x02\u060B\u0603\x03\x02\x02\x02\u060B\u0604\x03\x02" +
		"\x02\x02\u060B\u0605\x03\x02\x02\x02\u060B\u0606\x03\x02\x02\x02\u060B" +
		"\u0607\x03\x02\x02\x02\u060B\u0608\x03\x02\x02\x02\u060B\u0609\x03\x02" +
		"\x02\x02\u060B\u060A\x03\x02\x02\x02\u060C\u0117\x03\x02\x02\x02\u060D" +
		"\u060E\x05\u011A\x8E\x02\u060E\u0119\x03\x02\x02\x02\u060F\u063E\x07|" +
		"\x02\x02\u0610\u063E\x07\xE0\x02\x02\u0611\u063E\x07\xD4\x02\x02\u0612" +
		"\u063E\x073\x02\x02\u0613\u063E\x07:\x02\x02\u0614\u063E\x07\u0102\x02" +
		"\x02\u0615\u063E\x07\u0101\x02\x02\u0616\u063E\x07\u015C\x02\x02\u0617" +
		"\u063E\x07\u015E\x02\x02\u0618\u063E\x07\x95\x02\x02\u0619\u063E\x07\x96" +
		"\x02\x02\u061A\u063E\x07\x97\x02\x02\u061B\u063E\x07\x98\x02\x02\u061C" +
		"\u063E\x07\u0161\x02\x02\u061D\u063E\x07P\x02\x02\u061E\u063E\x07\xD2" +
		"\x02\x02\u061F\u0620\x07\u0109\x02\x02\u0620\u063E\x07\xD2\x02\x02\u0621" +
		"\u063E\x07\u0104\x02\x02\u0622\u063E\x07\xA4\x02\x02\u0623\u063E\x07\xA5" +
		"\x02\x02\u0624\u0625\x07\u0109\x02\x02\u0625\u063E\x073\x02\x02\u0626" +
		"\u0627\x07\u0109\x02\x02\u0627\u063E\x07:\x02\x02\u0628\u0629\x07\u0109" +
		"\x02\x02\u0629\u063E\x07\u0102\x02\x02\u062A\u062B\x07\u0109\x02\x02\u062B" +
		"\u063E\x07\u0101\x02\x02\u062C\u062D\x07\u0109\x02\x02\u062D\u063E\x07" +
		"\u015C\x02\x02\u062E\u062F\x07\u0109\x02\x02\u062F\u063E\x07\u015E\x02" +
		"\x02\u0630\u0631\x07\u0109\x02\x02\u0631\u063E\x07\x95\x02\x02\u0632\u0633" +
		"\x07\u0109\x02\x02\u0633\u063E\x07\x96\x02\x02\u0634\u0635\x07\u0109\x02" +
		"\x02\u0635\u063E\x07\x97\x02\x02\u0636\u0637\x07\u0109\x02\x02\u0637\u063E" +
		"\x07\x98\x02\x02\u0638\u0639\x07\u0109\x02\x02\u0639\u063E\x07\u0161\x02" +
		"\x02\u063A\u063E\x07\u0103\x02\x02\u063B\u063E\x07\x9C\x02\x02\u063C\u063E" +
		"\x07\u0164\x02\x02\u063D\u060F\x03\x02\x02\x02\u063D\u0610\x03\x02\x02" +
		"\x02\u063D\u0611\x03\x02\x02\x02\u063D\u0612\x03\x02\x02\x02\u063D\u0613" +
		"\x03\x02\x02\x02\u063D\u0614\x03\x02\x02\x02\u063D\u0615\x03\x02\x02\x02" +
		"\u063D\u0616\x03\x02\x02\x02\u063D\u0617\x03\x02\x02\x02\u063D\u0618\x03" +
		"\x02\x02\x02\u063D\u0619\x03\x02\x02\x02\u063D\u061A\x03\x02\x02\x02\u063D" +
		"\u061B\x03\x02\x02\x02\u063D\u061C\x03\x02\x02\x02\u063D\u061D\x03\x02" +
		"\x02\x02\u063D\u061E\x03\x02\x02\x02\u063D\u061F\x03\x02\x02\x02\u063D" +
		"\u0621\x03\x02\x02\x02\u063D\u0622\x03\x02\x02\x02\u063D\u0623\x03\x02" +
		"\x02\x02\u063D\u0624\x03\x02\x02\x02\u063D\u0626\x03\x02\x02\x02\u063D" +
		"\u0628\x03\x02\x02\x02\u063D\u062A\x03\x02\x02\x02\u063D\u062C\x03\x02" +
		"\x02\x02\u063D\u062E\x03\x02\x02\x02\u063D\u0630\x03\x02\x02\x02\u063D" +
		"\u0632\x03\x02\x02\x02\u063D\u0634\x03\x02\x02\x02\u063D\u0636\x03\x02" +
		"\x02\x02\u063D\u0638\x03\x02\x02\x02\u063D\u063A\x03\x02\x02\x02\u063D" +
		"\u063B\x03\x02\x02\x02\u063D\u063C\x03\x02\x02\x02\u063E\u011B\x03\x02" +
		"\x02\x02\u063F\u0640\x05\u011E\x90\x02\u0640\u011D\x03\x02\x02\x02\u0641" +
		"\u0642\x07\u0186\x02\x02\u0642\u0643\t\x15\x02\x02\u0643\u0644\x07\u0187" +
		"\x02\x02\u0644\u011F\x03\x02\x02\x02\u0645\u0646\x05\u0122\x92\x02\u0646" +
		"\u0121\x03\x02\x02\x02\u0647\u0648\x07\u0186\x02\x02\u0648\u0649\t\x16" +
		"\x02\x02\u0649\u064A\x07\u0187\x02\x02\u064A\u0123\x03\x02\x02\x02\u064B" +
		"\u064C\t\x17\x02\x02\u064C\u0125\x03\x02\x02\x02\u064D\u064E\t\x18\x02" +
		"\x02\u064E\u0127\x03\x02\x02\x02\u064F\u0650\t\x19\x02\x02\u0650\u0129" +
		"\x03\x02\x02\x02\u0651\u0652\t\x1A\x02\x02\u0652\u012B\x03\x02\x02\x02" +
		"\u0653\u0654\t\x1B\x02\x02\u0654\u012D\x03\x02\x02\x02\u0655\u0656\t\x1C" +
		"\x02\x02\u0656\u012F\x03\x02\x02\x02\u0657\u0658\t\x1D\x02\x02\u0658\u0131" +
		"\x03\x02\x02\x02\u0659\u065A\t\x1E\x02\x02\u065A\u0133\x03\x02\x02\x02" +
		"\u065B\u065C\t\x1F\x02\x02\u065C\u0135\x03\x02\x02\x02\u065D\u065E\t " +
		"\x02\x02\u065E\u0137\x03\x02\x02\x02\u065F\u0660\t!\x02\x02\u0660\u0139" +
		"\x03\x02\x02\x02u\u013F\u0146\u0149\u0150\u015F\u0164\u0169\u016B\u0170" +
		"\u0185\u018D\u0194\u019D\u01A5\u01AD\u01B8\u01BC\u01C3\u01C7\u01CF\u01D8" +
		"\u01DC\u01E5\u01EA\u01F1\u01F9\u01FE\u020B\u0219\u0223\u0227\u022E\u0237" +
		"\u023D\u0241\u024C\u0256\u025F\u026E\u02A7\u02D2\u032F\u0335\u0337\u0344" +
		"\u0375\u0396\u03A8\u03B1\u03B3\u03B9\u03C3\u03C8\u03CB\u03D5\u03DA\u03DC" +
		"\u03E6\u03EB\u03ED\u03FF\u0434\u043D\u044B\u0453\u0459\u045D\u0467\u047A" +
		"\u0481\u0483\u0490\u0498\u04A5\u04B0\u04B6\u04C3\u04CD\u04D2\u04D7\u04DB" +
		"\u04E0\u04E4\u04E8\u04EC\u04F0\u04F4\u04F8\u04FC\u050C\u0513\u051E\u0525" +
		"\u052B\u052F\u0536\u053F\u0545\u0549\u0561\u056B\u0580\u058B\u058E\u059C" +
		"\u05AA\u05B3\u05CB\u05D5\u05EB\u05EF\u05F5\u05F9\u060B\u063D";
	public static readonly _serializedATN: string = Utils.join(
		[
			SHARCParser._serializedATNSegment0,
			SHARCParser._serializedATNSegment1,
			SHARCParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SHARCParser.__ATN) {
			SHARCParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SHARCParser._serializedATN));
		}

		return SHARCParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.SEMICOLON);
		} else {
			return this.getToken(SHARCParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_prog; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public stmt_atom(): Stmt_atomContext {
		return this.getRuleContext(0, Stmt_atomContext);
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.ID);
		} else {
			return this.getToken(SHARCParser.ID, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.COLON);
		} else {
			return this.getToken(SHARCParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_statement; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Stmt_atomContext extends ParserRuleContext {
	public stmt(): StmtContext | undefined {
		return this.tryGetRuleContext(0, StmtContext);
	}
	public sec(): SecContext | undefined {
		return this.tryGetRuleContext(0, SecContext);
	}
	public seg(): SegContext | undefined {
		return this.tryGetRuleContext(0, SegContext);
	}
	public end_seg(): End_segContext | undefined {
		return this.tryGetRuleContext(0, End_segContext);
	}
	public directive_exp(): Directive_expContext | undefined {
		return this.tryGetRuleContext(0, Directive_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_stmt_atom; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterStmt_atom) {
			listener.enterStmt_atom(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitStmt_atom) {
			listener.exitStmt_atom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitStmt_atom) {
			return visitor.visitStmt_atom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SecContext extends ParserRuleContext {
	public DOT_SECTION(): TerminalNode { return this.getToken(SHARCParser.DOT_SECTION, 0); }
	public seg_qualifier(): Seg_qualifierContext {
		return this.getRuleContext(0, Seg_qualifierContext);
	}
	public ID(): TerminalNode { return this.getToken(SHARCParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_sec; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterSec) {
			listener.enterSec(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitSec) {
			listener.exitSec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitSec) {
			return visitor.visitSec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SegContext extends ParserRuleContext {
	public DOT_SEGMENT(): TerminalNode { return this.getToken(SHARCParser.DOT_SEGMENT, 0); }
	public seg_qualifier(): Seg_qualifierContext {
		return this.getRuleContext(0, Seg_qualifierContext);
	}
	public ID(): TerminalNode { return this.getToken(SHARCParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_seg; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterSeg) {
			listener.enterSeg(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitSeg) {
			listener.exitSeg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitSeg) {
			return visitor.visitSeg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class End_segContext extends ParserRuleContext {
	public DOT_ENDSEG(): TerminalNode { return this.getToken(SHARCParser.DOT_ENDSEG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_end_seg; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterEnd_seg) {
			listener.enterEnd_seg(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitEnd_seg) {
			listener.exitEnd_seg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitEnd_seg) {
			return visitor.visitEnd_seg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Seg_qualifierContext extends ParserRuleContext {
	public seg_qualifier1(): Seg_qualifier1Context | undefined {
		return this.tryGetRuleContext(0, Seg_qualifier1Context);
	}
	public seg_qualifier2(): Seg_qualifier2Context | undefined {
		return this.tryGetRuleContext(0, Seg_qualifier2Context);
	}
	public seg_qualifier3(): Seg_qualifier3Context | undefined {
		return this.tryGetRuleContext(0, Seg_qualifier3Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_seg_qualifier; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterSeg_qualifier) {
			listener.enterSeg_qualifier(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitSeg_qualifier) {
			listener.exitSeg_qualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitSeg_qualifier) {
			return visitor.visitSeg_qualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Seg_qualifier1Context extends ParserRuleContext {
	public DIV(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DIV, 0); }
	public seg_qualifier_1(): Seg_qualifier_1Context | undefined {
		return this.tryGetRuleContext(0, Seg_qualifier_1Context);
	}
	public seg_qualifier_2(): Seg_qualifier_2Context | undefined {
		return this.tryGetRuleContext(0, Seg_qualifier_2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_seg_qualifier1; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterSeg_qualifier1) {
			listener.enterSeg_qualifier1(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitSeg_qualifier1) {
			listener.exitSeg_qualifier1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitSeg_qualifier1) {
			return visitor.visitSeg_qualifier1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Seg_qualifier2Context extends ParserRuleContext {
	public DIV(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DIV, 0); }
	public seg_qualifier_3(): Seg_qualifier_3Context | undefined {
		return this.tryGetRuleContext(0, Seg_qualifier_3Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_seg_qualifier2; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterSeg_qualifier2) {
			listener.enterSeg_qualifier2(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitSeg_qualifier2) {
			listener.exitSeg_qualifier2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitSeg_qualifier2) {
			return visitor.visitSeg_qualifier2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Seg_qualifier3Context extends ParserRuleContext {
	public DIV(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DIV, 0); }
	public DMAONLY(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DMAONLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_seg_qualifier3; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterSeg_qualifier3) {
			listener.enterSeg_qualifier3(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitSeg_qualifier3) {
			listener.exitSeg_qualifier3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitSeg_qualifier3) {
			return visitor.visitSeg_qualifier3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Seg_qualifier_1Context extends ParserRuleContext {
	public PM(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PM, 0); }
	public CODE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.CODE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_seg_qualifier_1; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterSeg_qualifier_1) {
			listener.enterSeg_qualifier_1(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitSeg_qualifier_1) {
			listener.exitSeg_qualifier_1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitSeg_qualifier_1) {
			return visitor.visitSeg_qualifier_1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Seg_qualifier_2Context extends ParserRuleContext {
	public DM(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DM, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DATA, 0); }
	public DATA64(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DATA64, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_seg_qualifier_2; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterSeg_qualifier_2) {
			listener.enterSeg_qualifier_2(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitSeg_qualifier_2) {
			listener.exitSeg_qualifier_2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitSeg_qualifier_2) {
			return visitor.visitSeg_qualifier_2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Seg_qualifier_3Context extends ParserRuleContext {
	public NO_INIT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.NO_INIT, 0); }
	public ZERO_INIT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.ZERO_INIT, 0); }
	public RUNTIME_INIT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RUNTIME_INIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_seg_qualifier_3; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterSeg_qualifier_3) {
			listener.enterSeg_qualifier_3(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitSeg_qualifier_3) {
			listener.exitSeg_qualifier_3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitSeg_qualifier_3) {
			return visitor.visitSeg_qualifier_3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public compute(): ComputeContext | undefined {
		return this.tryGetRuleContext(0, ComputeContext);
	}
	public flow_control_exp(): Flow_control_expContext | undefined {
		return this.tryGetRuleContext(0, Flow_control_expContext);
	}
	public imm_mov_exp(): Imm_mov_expContext | undefined {
		return this.tryGetRuleContext(0, Imm_mov_expContext);
	}
	public misc_exp(): Misc_expContext | undefined {
		return this.tryGetRuleContext(0, Misc_expContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public if_compute_mov(): If_compute_movContext | undefined {
		return this.tryGetRuleContext(0, If_compute_movContext);
	}
	public compute_mov_exp(): Compute_mov_expContext | undefined {
		return this.tryGetRuleContext(0, Compute_mov_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_stmt; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public DOT_VAR(): TerminalNode { return this.getToken(SHARCParser.DOT_VAR, 0); }
	public declaration_exp1(): Declaration_exp1Context | undefined {
		return this.tryGetRuleContext(0, Declaration_exp1Context);
	}
	public declaration_exp2(): Declaration_exp2Context | undefined {
		return this.tryGetRuleContext(0, Declaration_exp2Context);
	}
	public declaration_exp3(): Declaration_exp3Context | undefined {
		return this.tryGetRuleContext(0, Declaration_exp3Context);
	}
	public declaration_exp4(): Declaration_exp4Context | undefined {
		return this.tryGetRuleContext(0, Declaration_exp4Context);
	}
	public declaration_exp5(): Declaration_exp5Context | undefined {
		return this.tryGetRuleContext(0, Declaration_exp5Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_declaration; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declaration_exp1Context extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.ID);
		} else {
			return this.getToken(SHARCParser.ID, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.COMMA);
		} else {
			return this.getToken(SHARCParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_declaration_exp1; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterDeclaration_exp1) {
			listener.enterDeclaration_exp1(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitDeclaration_exp1) {
			listener.exitDeclaration_exp1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitDeclaration_exp1) {
			return visitor.visitDeclaration_exp1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declaration_exp2Context extends ParserRuleContext {
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public initExpression(): InitExpressionContext[];
	public initExpression(i: number): InitExpressionContext;
	public initExpression(i?: number): InitExpressionContext | InitExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitExpressionContext);
		} else {
			return this.getRuleContext(i, InitExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.COMMA);
		} else {
			return this.getToken(SHARCParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_declaration_exp2; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterDeclaration_exp2) {
			listener.enterDeclaration_exp2(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitDeclaration_exp2) {
			listener.exitDeclaration_exp2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitDeclaration_exp2) {
			return visitor.visitDeclaration_exp2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declaration_exp3Context extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(SHARCParser.ID, 0); }
	public LBRACKET(): TerminalNode { return this.getToken(SHARCParser.LBRACKET, 0); }
	public RBRACKET(): TerminalNode { return this.getToken(SHARCParser.RBRACKET, 0); }
	public EQU(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.EQU, 0); }
	public declaration_exp_f2(): Declaration_exp_f2Context | undefined {
		return this.tryGetRuleContext(0, Declaration_exp_f2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_declaration_exp3; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterDeclaration_exp3) {
			listener.enterDeclaration_exp3(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitDeclaration_exp3) {
			listener.exitDeclaration_exp3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitDeclaration_exp3) {
			return visitor.visitDeclaration_exp3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declaration_exp4Context extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(SHARCParser.ID, 0); }
	public LBRACKET(): TerminalNode { return this.getToken(SHARCParser.LBRACKET, 0); }
	public value_exp(): Value_expContext {
		return this.getRuleContext(0, Value_expContext);
	}
	public RBRACKET(): TerminalNode { return this.getToken(SHARCParser.RBRACKET, 0); }
	public EQU(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.EQU, 0); }
	public declaration_exp_f2(): Declaration_exp_f2Context | undefined {
		return this.tryGetRuleContext(0, Declaration_exp_f2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_declaration_exp4; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterDeclaration_exp4) {
			listener.enterDeclaration_exp4(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitDeclaration_exp4) {
			listener.exitDeclaration_exp4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitDeclaration_exp4) {
			return visitor.visitDeclaration_exp4(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declaration_exp5Context extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(SHARCParser.ID, 0); }
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public value_exp(): Value_expContext {
		return this.getRuleContext(0, Value_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_declaration_exp5; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterDeclaration_exp5) {
			listener.enterDeclaration_exp5(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitDeclaration_exp5) {
			listener.exitDeclaration_exp5(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitDeclaration_exp5) {
			return visitor.visitDeclaration_exp5(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declaration_exp_f1Context extends ParserRuleContext {
	public initExpression(): InitExpressionContext[];
	public initExpression(i: number): InitExpressionContext;
	public initExpression(i?: number): InitExpressionContext | InitExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitExpressionContext);
		} else {
			return this.getRuleContext(i, InitExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.COMMA);
		} else {
			return this.getToken(SHARCParser.COMMA, i);
		}
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_declaration_exp_f1; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterDeclaration_exp_f1) {
			listener.enterDeclaration_exp_f1(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitDeclaration_exp_f1) {
			listener.exitDeclaration_exp_f1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitDeclaration_exp_f1) {
			return visitor.visitDeclaration_exp_f1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Declaration_exp_f2Context extends ParserRuleContext {
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LBRACE, 0); }
	public declaration_exp_f1(): Declaration_exp_f1Context {
		return this.getRuleContext(0, Declaration_exp_f1Context);
	}
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_declaration_exp_f2; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterDeclaration_exp_f2) {
			listener.enterDeclaration_exp_f2(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitDeclaration_exp_f2) {
			listener.exitDeclaration_exp_f2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitDeclaration_exp_f2) {
			return visitor.visitDeclaration_exp_f2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitExpressionContext extends ParserRuleContext {
	public value_exp(): Value_expContext | undefined {
		return this.tryGetRuleContext(0, Value_expContext);
	}
	public CharLiteral(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.CharLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_initExpression; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterInitExpression) {
			listener.enterInitExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitInitExpression) {
			listener.exitInitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitInitExpression) {
			return visitor.visitInitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Var_addrContext extends ParserRuleContext {
	public AT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.AT, 0); }
	public ID(): TerminalNode { return this.getToken(SHARCParser.ID, 0); }
	public LENGTH(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LENGTH, 0); }
	public LPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); }
	public RPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_var_addr; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterVar_addr) {
			listener.enterVar_addr(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitVar_addr) {
			listener.exitVar_addr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitVar_addr) {
			return visitor.visitVar_addr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_expContext extends ParserRuleContext {
	public value_exp2(): Value_exp2Context {
		return this.getRuleContext(0, Value_exp2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_value_exp; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterValue_exp) {
			listener.enterValue_exp(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitValue_exp) {
			listener.exitValue_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitValue_exp) {
			return visitor.visitValue_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_exp2Context extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.PLUS);
		} else {
			return this.getToken(SHARCParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.MINUS);
		} else {
			return this.getToken(SHARCParser.MINUS, i);
		}
	}
	public MULT(): TerminalNode[];
	public MULT(i: number): TerminalNode;
	public MULT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.MULT);
		} else {
			return this.getToken(SHARCParser.MULT, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.DIV);
		} else {
			return this.getToken(SHARCParser.DIV, i);
		}
	}
	public DIV_MOD(): TerminalNode[];
	public DIV_MOD(i: number): TerminalNode;
	public DIV_MOD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.DIV_MOD);
		} else {
			return this.getToken(SHARCParser.DIV_MOD, i);
		}
	}
	public I_OR(): TerminalNode[];
	public I_OR(i: number): TerminalNode;
	public I_OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.I_OR);
		} else {
			return this.getToken(SHARCParser.I_OR, i);
		}
	}
	public I_XOR(): TerminalNode[];
	public I_XOR(i: number): TerminalNode;
	public I_XOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.I_XOR);
		} else {
			return this.getToken(SHARCParser.I_XOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_value_exp2; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterValue_exp2) {
			listener.enterValue_exp2(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitValue_exp2) {
			listener.exitValue_exp2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitValue_exp2) {
			return visitor.visitValue_exp2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public _op: Token;
	public factor(): FactorContext {
		return this.getRuleContext(0, FactorContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_term; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	public LPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); }
	public value_exp2(): Value_exp2Context | undefined {
		return this.tryGetRuleContext(0, Value_exp2Context);
	}
	public RPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_factor; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFactor) {
			return visitor.visitFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.INT, 0); }
	public var_addr(): Var_addrContext | undefined {
		return this.tryGetRuleContext(0, Var_addrContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_atom; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComputeContext extends ParserRuleContext {
	public dual_op(): Dual_opContext | undefined {
		return this.tryGetRuleContext(0, Dual_opContext);
	}
	public fixpoint_alu_op(): Fixpoint_alu_opContext | undefined {
		return this.tryGetRuleContext(0, Fixpoint_alu_opContext);
	}
	public floating_point_alu_op(): Floating_point_alu_opContext | undefined {
		return this.tryGetRuleContext(0, Floating_point_alu_opContext);
	}
	public multi_op(): Multi_opContext | undefined {
		return this.tryGetRuleContext(0, Multi_opContext);
	}
	public shifter_op(): Shifter_opContext | undefined {
		return this.tryGetRuleContext(0, Shifter_opContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_compute; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterCompute) {
			listener.enterCompute(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitCompute) {
			listener.exitCompute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitCompute) {
			return visitor.visitCompute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_compute_movContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(SHARCParser.IF, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public if_compute_mov_exp(): If_compute_mov_expContext {
		return this.getRuleContext(0, If_compute_mov_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_if_compute_mov; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterIf_compute_mov) {
			listener.enterIf_compute_mov(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitIf_compute_mov) {
			listener.exitIf_compute_mov(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitIf_compute_mov) {
			return visitor.visitIf_compute_mov(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_compute_mov_expContext extends ParserRuleContext {
	public compute_mov_exp(): Compute_mov_expContext | undefined {
		return this.tryGetRuleContext(0, Compute_mov_expContext);
	}
	public compute(): ComputeContext | undefined {
		return this.tryGetRuleContext(0, ComputeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_if_compute_mov_exp; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterIf_compute_mov_exp) {
			listener.enterIf_compute_mov_exp(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitIf_compute_mov_exp) {
			listener.exitIf_compute_mov_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitIf_compute_mov_exp) {
			return visitor.visitIf_compute_mov_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compute_mov_expContext extends ParserRuleContext {
	public mov_exp_1(): Mov_exp_1Context | undefined {
		return this.tryGetRuleContext(0, Mov_exp_1Context);
	}
	public mov_exp_3a(): Mov_exp_3aContext | undefined {
		return this.tryGetRuleContext(0, Mov_exp_3aContext);
	}
	public mov_exp_3b(): Mov_exp_3bContext | undefined {
		return this.tryGetRuleContext(0, Mov_exp_3bContext);
	}
	public mov_exp_3c(): Mov_exp_3cContext | undefined {
		return this.tryGetRuleContext(0, Mov_exp_3cContext);
	}
	public mov_exp_3d(): Mov_exp_3dContext | undefined {
		return this.tryGetRuleContext(0, Mov_exp_3dContext);
	}
	public mov_exp_4a(): Mov_exp_4aContext | undefined {
		return this.tryGetRuleContext(0, Mov_exp_4aContext);
	}
	public mov_exp_4b(): Mov_exp_4bContext | undefined {
		return this.tryGetRuleContext(0, Mov_exp_4bContext);
	}
	public mov_exp_4c(): Mov_exp_4cContext | undefined {
		return this.tryGetRuleContext(0, Mov_exp_4cContext);
	}
	public mov_exp_4d(): Mov_exp_4dContext | undefined {
		return this.tryGetRuleContext(0, Mov_exp_4dContext);
	}
	public mov_exp_5(): Mov_exp_5Context | undefined {
		return this.tryGetRuleContext(0, Mov_exp_5Context);
	}
	public mov_exp_7(): Mov_exp_7Context | undefined {
		return this.tryGetRuleContext(0, Mov_exp_7Context);
	}
	public compute(): ComputeContext | undefined {
		return this.tryGetRuleContext(0, ComputeContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_compute_mov_exp; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterCompute_mov_exp) {
			listener.enterCompute_mov_exp(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitCompute_mov_exp) {
			listener.exitCompute_mov_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitCompute_mov_exp) {
			return visitor.visitCompute_mov_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mov_exp_1Context extends ParserRuleContext {
	public mov_exp_1_1(): Mov_exp_1_1Context {
		return this.getRuleContext(0, Mov_exp_1_1Context);
	}
	public COMMA(): TerminalNode { return this.getToken(SHARCParser.COMMA, 0); }
	public mov_exp_1_2(): Mov_exp_1_2Context {
		return this.getRuleContext(0, Mov_exp_1_2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mov_exp_1; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMov_exp_1) {
			listener.enterMov_exp_1(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMov_exp_1) {
			listener.exitMov_exp_1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMov_exp_1) {
			return visitor.visitMov_exp_1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mov_exp_1_1Context extends ParserRuleContext {
	public mem_addr_dm_ia_mb(): Mem_addr_dm_ia_mbContext {
		return this.getRuleContext(0, Mem_addr_dm_ia_mbContext);
	}
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public d_reg(): D_regContext {
		return this.getRuleContext(0, D_regContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mov_exp_1_1; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMov_exp_1_1) {
			listener.enterMov_exp_1_1(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMov_exp_1_1) {
			listener.exitMov_exp_1_1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMov_exp_1_1) {
			return visitor.visitMov_exp_1_1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mov_exp_1_2Context extends ParserRuleContext {
	public mem_addr_pm_ic_md(): Mem_addr_pm_ic_mdContext {
		return this.getRuleContext(0, Mem_addr_pm_ic_mdContext);
	}
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public d_reg(): D_regContext {
		return this.getRuleContext(0, D_regContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mov_exp_1_2; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMov_exp_1_2) {
			listener.enterMov_exp_1_2(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMov_exp_1_2) {
			listener.exitMov_exp_1_2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMov_exp_1_2) {
			return visitor.visitMov_exp_1_2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mov_exp_3aContext extends ParserRuleContext {
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public u_reg(): U_regContext {
		return this.getRuleContext(0, U_regContext);
	}
	public mem_addr_dm_ia_mb(): Mem_addr_dm_ia_mbContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_dm_ia_mbContext);
	}
	public mem_addr_pm_ic_md(): Mem_addr_pm_ic_mdContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_pm_ic_mdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mov_exp_3a; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMov_exp_3a) {
			listener.enterMov_exp_3a(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMov_exp_3a) {
			listener.exitMov_exp_3a(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMov_exp_3a) {
			return visitor.visitMov_exp_3a(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mov_exp_3bContext extends ParserRuleContext {
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public u_reg(): U_regContext {
		return this.getRuleContext(0, U_regContext);
	}
	public mem_addr_dm_mb_ia(): Mem_addr_dm_mb_iaContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_dm_mb_iaContext);
	}
	public mem_addr_pm_md_ic(): Mem_addr_pm_md_icContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_pm_md_icContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mov_exp_3b; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMov_exp_3b) {
			listener.enterMov_exp_3b(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMov_exp_3b) {
			listener.exitMov_exp_3b(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMov_exp_3b) {
			return visitor.visitMov_exp_3b(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mov_exp_3cContext extends ParserRuleContext {
	public u_reg(): U_regContext {
		return this.getRuleContext(0, U_regContext);
	}
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public mem_addr_dm_ia_mb(): Mem_addr_dm_ia_mbContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_dm_ia_mbContext);
	}
	public mem_addr_pm_ic_md(): Mem_addr_pm_ic_mdContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_pm_ic_mdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mov_exp_3c; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMov_exp_3c) {
			listener.enterMov_exp_3c(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMov_exp_3c) {
			listener.exitMov_exp_3c(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMov_exp_3c) {
			return visitor.visitMov_exp_3c(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mov_exp_3dContext extends ParserRuleContext {
	public u_reg(): U_regContext {
		return this.getRuleContext(0, U_regContext);
	}
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public mem_addr_dm_mb_ia(): Mem_addr_dm_mb_iaContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_dm_mb_iaContext);
	}
	public mem_addr_pm_md_ic(): Mem_addr_pm_md_icContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_pm_md_icContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mov_exp_3d; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMov_exp_3d) {
			listener.enterMov_exp_3d(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMov_exp_3d) {
			listener.exitMov_exp_3d(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMov_exp_3d) {
			return visitor.visitMov_exp_3d(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mov_exp_4aContext extends ParserRuleContext {
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public d_reg(): D_regContext {
		return this.getRuleContext(0, D_regContext);
	}
	public mem_addr_dm_ia_int(): Mem_addr_dm_ia_intContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_dm_ia_intContext);
	}
	public mem_addr_pm_ic_int(): Mem_addr_pm_ic_intContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_pm_ic_intContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mov_exp_4a; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMov_exp_4a) {
			listener.enterMov_exp_4a(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMov_exp_4a) {
			listener.exitMov_exp_4a(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMov_exp_4a) {
			return visitor.visitMov_exp_4a(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mov_exp_4bContext extends ParserRuleContext {
	public imm_mov_15a(): Imm_mov_15aContext {
		return this.getRuleContext(0, Imm_mov_15aContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mov_exp_4b; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMov_exp_4b) {
			listener.enterMov_exp_4b(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMov_exp_4b) {
			listener.exitMov_exp_4b(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMov_exp_4b) {
			return visitor.visitMov_exp_4b(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mov_exp_4cContext extends ParserRuleContext {
	public d_reg(): D_regContext {
		return this.getRuleContext(0, D_regContext);
	}
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public mem_addr_dm_ia_int(): Mem_addr_dm_ia_intContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_dm_ia_intContext);
	}
	public mem_addr_pm_ic_int(): Mem_addr_pm_ic_intContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_pm_ic_intContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mov_exp_4c; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMov_exp_4c) {
			listener.enterMov_exp_4c(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMov_exp_4c) {
			listener.exitMov_exp_4c(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMov_exp_4c) {
			return visitor.visitMov_exp_4c(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mov_exp_4dContext extends ParserRuleContext {
	public imm_mov_15b(): Imm_mov_15bContext {
		return this.getRuleContext(0, Imm_mov_15bContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mov_exp_4d; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMov_exp_4d) {
			listener.enterMov_exp_4d(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMov_exp_4d) {
			listener.exitMov_exp_4d(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMov_exp_4d) {
			return visitor.visitMov_exp_4d(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mov_exp_5Context extends ParserRuleContext {
	public u_reg2(): U_reg2Context {
		return this.getRuleContext(0, U_reg2Context);
	}
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public u_reg(): U_regContext {
		return this.getRuleContext(0, U_regContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mov_exp_5; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMov_exp_5) {
			listener.enterMov_exp_5(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMov_exp_5) {
			listener.exitMov_exp_5(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMov_exp_5) {
			return visitor.visitMov_exp_5(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mov_exp_6aContext extends ParserRuleContext {
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public d_reg(): D_regContext {
		return this.getRuleContext(0, D_regContext);
	}
	public mem_addr_dm_ia_mb(): Mem_addr_dm_ia_mbContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_dm_ia_mbContext);
	}
	public mem_addr_pm_ic_md(): Mem_addr_pm_ic_mdContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_pm_ic_mdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mov_exp_6a; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMov_exp_6a) {
			listener.enterMov_exp_6a(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMov_exp_6a) {
			listener.exitMov_exp_6a(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMov_exp_6a) {
			return visitor.visitMov_exp_6a(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mov_exp_6bContext extends ParserRuleContext {
	public d_reg(): D_regContext {
		return this.getRuleContext(0, D_regContext);
	}
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public mem_addr_dm_ia_mb(): Mem_addr_dm_ia_mbContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_dm_ia_mbContext);
	}
	public mem_addr_pm_ic_md(): Mem_addr_pm_ic_mdContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_pm_ic_mdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mov_exp_6b; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMov_exp_6b) {
			listener.enterMov_exp_6b(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMov_exp_6b) {
			listener.exitMov_exp_6b(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMov_exp_6b) {
			return visitor.visitMov_exp_6b(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mov_exp_7Context extends ParserRuleContext {
	public MODIFY(): TerminalNode { return this.getToken(SHARCParser.MODIFY, 0); }
	public LPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); }
	public ia(): IaContext | undefined {
		return this.tryGetRuleContext(0, IaContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.COMMA, 0); }
	public mb(): MbContext | undefined {
		return this.tryGetRuleContext(0, MbContext);
	}
	public RPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); }
	public ic(): IcContext | undefined {
		return this.tryGetRuleContext(0, IcContext);
	}
	public md(): MdContext | undefined {
		return this.tryGetRuleContext(0, MdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mov_exp_7; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMov_exp_7) {
			listener.enterMov_exp_7(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMov_exp_7) {
			listener.exitMov_exp_7(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMov_exp_7) {
			return visitor.visitMov_exp_7(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_ia_mbContext extends ParserRuleContext {
	public LPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.LPARENTHESE, 0); }
	public ia(): IaContext {
		return this.getRuleContext(0, IaContext);
	}
	public COMMA(): TerminalNode { return this.getToken(SHARCParser.COMMA, 0); }
	public mb(): MbContext {
		return this.getRuleContext(0, MbContext);
	}
	public RPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.RPARENTHESE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_ia_mb; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_ia_mb) {
			listener.enterMem_addr_ia_mb(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_ia_mb) {
			listener.exitMem_addr_ia_mb(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_ia_mb) {
			return visitor.visitMem_addr_ia_mb(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_ic_mdContext extends ParserRuleContext {
	public LPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.LPARENTHESE, 0); }
	public ic(): IcContext {
		return this.getRuleContext(0, IcContext);
	}
	public COMMA(): TerminalNode { return this.getToken(SHARCParser.COMMA, 0); }
	public md(): MdContext {
		return this.getRuleContext(0, MdContext);
	}
	public RPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.RPARENTHESE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_ic_md; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_ic_md) {
			listener.enterMem_addr_ic_md(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_ic_md) {
			listener.exitMem_addr_ic_md(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_ic_md) {
			return visitor.visitMem_addr_ic_md(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_md_icContext extends ParserRuleContext {
	public LPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.LPARENTHESE, 0); }
	public md(): MdContext {
		return this.getRuleContext(0, MdContext);
	}
	public COMMA(): TerminalNode { return this.getToken(SHARCParser.COMMA, 0); }
	public ic(): IcContext {
		return this.getRuleContext(0, IcContext);
	}
	public RPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.RPARENTHESE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_md_ic; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_md_ic) {
			listener.enterMem_addr_md_ic(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_md_ic) {
			listener.exitMem_addr_md_ic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_md_ic) {
			return visitor.visitMem_addr_md_ic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_mb_iaContext extends ParserRuleContext {
	public LPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.LPARENTHESE, 0); }
	public mb(): MbContext {
		return this.getRuleContext(0, MbContext);
	}
	public COMMA(): TerminalNode { return this.getToken(SHARCParser.COMMA, 0); }
	public ia(): IaContext {
		return this.getRuleContext(0, IaContext);
	}
	public RPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.RPARENTHESE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_mb_ia; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_mb_ia) {
			listener.enterMem_addr_mb_ia(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_mb_ia) {
			listener.exitMem_addr_mb_ia(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_mb_ia) {
			return visitor.visitMem_addr_mb_ia(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_ia_intContext extends ParserRuleContext {
	public LPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.LPARENTHESE, 0); }
	public ia(): IaContext {
		return this.getRuleContext(0, IaContext);
	}
	public COMMA(): TerminalNode { return this.getToken(SHARCParser.COMMA, 0); }
	public value_exp(): Value_expContext {
		return this.getRuleContext(0, Value_expContext);
	}
	public RPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.RPARENTHESE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_ia_int; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_ia_int) {
			listener.enterMem_addr_ia_int(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_ia_int) {
			listener.exitMem_addr_ia_int(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_ia_int) {
			return visitor.visitMem_addr_ia_int(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_ic_intContext extends ParserRuleContext {
	public LPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.LPARENTHESE, 0); }
	public ic(): IcContext {
		return this.getRuleContext(0, IcContext);
	}
	public COMMA(): TerminalNode { return this.getToken(SHARCParser.COMMA, 0); }
	public value_exp(): Value_expContext {
		return this.getRuleContext(0, Value_expContext);
	}
	public RPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.RPARENTHESE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_ic_int; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_ic_int) {
			listener.enterMem_addr_ic_int(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_ic_int) {
			listener.exitMem_addr_ic_int(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_ic_int) {
			return visitor.visitMem_addr_ic_int(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_int_iaContext extends ParserRuleContext {
	public LPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.LPARENTHESE, 0); }
	public value_exp(): Value_expContext {
		return this.getRuleContext(0, Value_expContext);
	}
	public COMMA(): TerminalNode { return this.getToken(SHARCParser.COMMA, 0); }
	public ia(): IaContext {
		return this.getRuleContext(0, IaContext);
	}
	public RPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.RPARENTHESE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_int_ia; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_int_ia) {
			listener.enterMem_addr_int_ia(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_int_ia) {
			listener.exitMem_addr_int_ia(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_int_ia) {
			return visitor.visitMem_addr_int_ia(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_int_icContext extends ParserRuleContext {
	public LPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.LPARENTHESE, 0); }
	public value_exp(): Value_expContext {
		return this.getRuleContext(0, Value_expContext);
	}
	public COMMA(): TerminalNode { return this.getToken(SHARCParser.COMMA, 0); }
	public ic(): IcContext {
		return this.getRuleContext(0, IcContext);
	}
	public RPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.RPARENTHESE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_int_ic; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_int_ic) {
			listener.enterMem_addr_int_ic(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_int_ic) {
			listener.exitMem_addr_int_ic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_int_ic) {
			return visitor.visitMem_addr_int_ic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_intContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_int; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_int) {
			listener.enterMem_addr_int(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_int) {
			listener.exitMem_addr_int(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_int) {
			return visitor.visitMem_addr_int(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_int_Context extends ParserRuleContext {
	public atom(): AtomContext[];
	public atom(i: number): AtomContext;
	public atom(i?: number): AtomContext | AtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtomContext);
		} else {
			return this.getRuleContext(i, AtomContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_int_; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_int_) {
			listener.enterMem_addr_int_(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_int_) {
			listener.exitMem_addr_int_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_int_) {
			return visitor.visitMem_addr_int_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_dm_ia_mbContext extends ParserRuleContext {
	public DM(): TerminalNode { return this.getToken(SHARCParser.DM, 0); }
	public mem_addr_ia_mb(): Mem_addr_ia_mbContext {
		return this.getRuleContext(0, Mem_addr_ia_mbContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_dm_ia_mb; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_dm_ia_mb) {
			listener.enterMem_addr_dm_ia_mb(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_dm_ia_mb) {
			listener.exitMem_addr_dm_ia_mb(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_dm_ia_mb) {
			return visitor.visitMem_addr_dm_ia_mb(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_pm_ic_mdContext extends ParserRuleContext {
	public PM(): TerminalNode { return this.getToken(SHARCParser.PM, 0); }
	public mem_addr_ic_md(): Mem_addr_ic_mdContext {
		return this.getRuleContext(0, Mem_addr_ic_mdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_pm_ic_md; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_pm_ic_md) {
			listener.enterMem_addr_pm_ic_md(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_pm_ic_md) {
			listener.exitMem_addr_pm_ic_md(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_pm_ic_md) {
			return visitor.visitMem_addr_pm_ic_md(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_dm_mb_iaContext extends ParserRuleContext {
	public DM(): TerminalNode { return this.getToken(SHARCParser.DM, 0); }
	public mem_addr_mb_ia(): Mem_addr_mb_iaContext {
		return this.getRuleContext(0, Mem_addr_mb_iaContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_dm_mb_ia; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_dm_mb_ia) {
			listener.enterMem_addr_dm_mb_ia(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_dm_mb_ia) {
			listener.exitMem_addr_dm_mb_ia(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_dm_mb_ia) {
			return visitor.visitMem_addr_dm_mb_ia(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_pm_md_icContext extends ParserRuleContext {
	public PM(): TerminalNode { return this.getToken(SHARCParser.PM, 0); }
	public mem_addr_md_ic(): Mem_addr_md_icContext {
		return this.getRuleContext(0, Mem_addr_md_icContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_pm_md_ic; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_pm_md_ic) {
			listener.enterMem_addr_pm_md_ic(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_pm_md_ic) {
			listener.exitMem_addr_pm_md_ic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_pm_md_ic) {
			return visitor.visitMem_addr_pm_md_ic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_dm_ia_intContext extends ParserRuleContext {
	public DM(): TerminalNode { return this.getToken(SHARCParser.DM, 0); }
	public mem_addr_ia_int(): Mem_addr_ia_intContext {
		return this.getRuleContext(0, Mem_addr_ia_intContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_dm_ia_int; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_dm_ia_int) {
			listener.enterMem_addr_dm_ia_int(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_dm_ia_int) {
			listener.exitMem_addr_dm_ia_int(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_dm_ia_int) {
			return visitor.visitMem_addr_dm_ia_int(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_pm_ic_intContext extends ParserRuleContext {
	public PM(): TerminalNode { return this.getToken(SHARCParser.PM, 0); }
	public mem_addr_ic_int(): Mem_addr_ic_intContext {
		return this.getRuleContext(0, Mem_addr_ic_intContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_pm_ic_int; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_pm_ic_int) {
			listener.enterMem_addr_pm_ic_int(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_pm_ic_int) {
			listener.exitMem_addr_pm_ic_int(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_pm_ic_int) {
			return visitor.visitMem_addr_pm_ic_int(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_dm_int_iaContext extends ParserRuleContext {
	public DM(): TerminalNode { return this.getToken(SHARCParser.DM, 0); }
	public mem_addr_int_ia(): Mem_addr_int_iaContext {
		return this.getRuleContext(0, Mem_addr_int_iaContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_dm_int_ia; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_dm_int_ia) {
			listener.enterMem_addr_dm_int_ia(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_dm_int_ia) {
			listener.exitMem_addr_dm_int_ia(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_dm_int_ia) {
			return visitor.visitMem_addr_dm_int_ia(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_pm_int_icContext extends ParserRuleContext {
	public PM(): TerminalNode { return this.getToken(SHARCParser.PM, 0); }
	public mem_addr_int_ic(): Mem_addr_int_icContext {
		return this.getRuleContext(0, Mem_addr_int_icContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_pm_int_ic; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_pm_int_ic) {
			listener.enterMem_addr_pm_int_ic(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_pm_int_ic) {
			listener.exitMem_addr_pm_int_ic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_pm_int_ic) {
			return visitor.visitMem_addr_pm_int_ic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_dm_intContext extends ParserRuleContext {
	public DM(): TerminalNode { return this.getToken(SHARCParser.DM, 0); }
	public mem_addr_int(): Mem_addr_intContext {
		return this.getRuleContext(0, Mem_addr_intContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_dm_int; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_dm_int) {
			listener.enterMem_addr_dm_int(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_dm_int) {
			listener.exitMem_addr_dm_int(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_dm_int) {
			return visitor.visitMem_addr_dm_int(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mem_addr_pm_intContext extends ParserRuleContext {
	public PM(): TerminalNode { return this.getToken(SHARCParser.PM, 0); }
	public mem_addr_int(): Mem_addr_intContext {
		return this.getRuleContext(0, Mem_addr_intContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mem_addr_pm_int; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMem_addr_pm_int) {
			listener.enterMem_addr_pm_int(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMem_addr_pm_int) {
			listener.exitMem_addr_pm_int(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMem_addr_pm_int) {
			return visitor.visitMem_addr_pm_int(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fixpoint_alu_opContext extends ParserRuleContext {
	public r_reg(): R_regContext[];
	public r_reg(i: number): R_regContext;
	public r_reg(i?: number): R_regContext | R_regContext[] {
		if (i === undefined) {
			return this.getRuleContexts(R_regContext);
		} else {
			return this.getRuleContext(i, R_regContext);
		}
	}
	public EQU(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.EQU, 0); }
	public r_exp(): R_expContext | undefined {
		return this.tryGetRuleContext(0, R_expContext);
	}
	public COMP(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.COMP, 0); }
	public LPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.COMMA, 0); }
	public RPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_fixpoint_alu_op; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFixpoint_alu_op) {
			listener.enterFixpoint_alu_op(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFixpoint_alu_op) {
			listener.exitFixpoint_alu_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFixpoint_alu_op) {
			return visitor.visitFixpoint_alu_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class R_expContext extends ParserRuleContext {
	public r_reg(): R_regContext[];
	public r_reg(i: number): R_regContext;
	public r_reg(i?: number): R_regContext | R_regContext[] {
		if (i === undefined) {
			return this.getRuleContexts(R_regContext);
		} else {
			return this.getRuleContext(i, R_regContext);
		}
	}
	public add_or_sub(): Add_or_subContext | undefined {
		return this.tryGetRuleContext(0, Add_or_subContext);
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.PLUS);
		} else {
			return this.getToken(SHARCParser.PLUS, i);
		}
	}
	public CI(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.CI, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MINUS, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.INT, 0); }
	public LPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); }
	public RPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DIV, 0); }
	public ABS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.ABS, 0); }
	public PASS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PASS, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.OR, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.XOR, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.NOT, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MIN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.COMMA, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MAX, 0); }
	public CLIP(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.CLIP, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.BY, 0); }
	public MANT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MANT, 0); }
	public f_reg(): F_regContext | undefined {
		return this.tryGetRuleContext(0, F_regContext);
	}
	public LOGB(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LOGB, 0); }
	public FIX(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.FIX, 0); }
	public TRUNC(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.TRUNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_r_exp; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterR_exp) {
			listener.enterR_exp(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitR_exp) {
			listener.exitR_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitR_exp) {
			return visitor.visitR_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Floating_point_alu_opContext extends ParserRuleContext {
	public f_reg(): F_regContext[];
	public f_reg(i: number): F_regContext;
	public f_reg(i?: number): F_regContext | F_regContext[] {
		if (i === undefined) {
			return this.getRuleContexts(F_regContext);
		} else {
			return this.getRuleContext(i, F_regContext);
		}
	}
	public EQU(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.EQU, 0); }
	public f_exp(): F_expContext | undefined {
		return this.tryGetRuleContext(0, F_expContext);
	}
	public COMP(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.COMP, 0); }
	public LPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.COMMA, 0); }
	public RPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_floating_point_alu_op; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFloating_point_alu_op) {
			listener.enterFloating_point_alu_op(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFloating_point_alu_op) {
			listener.exitFloating_point_alu_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFloating_point_alu_op) {
			return visitor.visitFloating_point_alu_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class F_expContext extends ParserRuleContext {
	public f_reg(): F_regContext[];
	public f_reg(i: number): F_regContext;
	public f_reg(i?: number): F_regContext | F_regContext[] {
		if (i === undefined) {
			return this.getRuleContexts(F_regContext);
		} else {
			return this.getRuleContext(i, F_regContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MINUS, 0); }
	public ABS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.ABS, 0); }
	public LPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); }
	public RPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DIV, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.INT, 0); }
	public PASS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PASS, 0); }
	public RND(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RND, 0); }
	public SCALB(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.SCALB, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.BY, 0); }
	public r_reg(): R_regContext[];
	public r_reg(i: number): R_regContext;
	public r_reg(i?: number): R_regContext | R_regContext[] {
		if (i === undefined) {
			return this.getRuleContexts(R_regContext);
		} else {
			return this.getRuleContext(i, R_regContext);
		}
	}
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.FLOAT, 0); }
	public RECIPS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RECIPS, 0); }
	public RSQRTS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RSQRTS, 0); }
	public COPYSIGN(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.COPYSIGN, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MIN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.COMMA, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MAX, 0); }
	public CLIP(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.CLIP, 0); }
	public MULT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_f_exp; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterF_exp) {
			listener.enterF_exp(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitF_exp) {
			listener.exitF_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitF_exp) {
			return visitor.visitF_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multi_opContext extends ParserRuleContext {
	public r_reg(): R_regContext | undefined {
		return this.tryGetRuleContext(0, R_regContext);
	}
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public multi_exp_r(): Multi_exp_rContext | undefined {
		return this.tryGetRuleContext(0, Multi_exp_rContext);
	}
	public MRF(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MRF, 0); }
	public multi_exp_mrf(): Multi_exp_mrfContext | undefined {
		return this.tryGetRuleContext(0, Multi_exp_mrfContext);
	}
	public MRB(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MRB, 0); }
	public multi_exp_mrb(): Multi_exp_mrbContext | undefined {
		return this.tryGetRuleContext(0, Multi_exp_mrbContext);
	}
	public mr(): MrContext | undefined {
		return this.tryGetRuleContext(0, MrContext);
	}
	public INT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.INT, 0); }
	public mrf(): MrfContext | undefined {
		return this.tryGetRuleContext(0, MrfContext);
	}
	public mrb(): MrbContext | undefined {
		return this.tryGetRuleContext(0, MrbContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_multi_op; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMulti_op) {
			listener.enterMulti_op(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMulti_op) {
			listener.exitMulti_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMulti_op) {
			return visitor.visitMulti_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multi_rContext extends ParserRuleContext {
	public r_reg(): R_regContext[];
	public r_reg(i: number): R_regContext;
	public r_reg(i?: number): R_regContext | R_regContext[] {
		if (i === undefined) {
			return this.getRuleContexts(R_regContext);
		} else {
			return this.getRuleContext(i, R_regContext);
		}
	}
	public MULT(): TerminalNode { return this.getToken(SHARCParser.MULT, 0); }
	public multi_mod2(): Multi_mod2Context | undefined {
		return this.tryGetRuleContext(0, Multi_mod2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_multi_r; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMulti_r) {
			listener.enterMulti_r(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMulti_r) {
			listener.exitMulti_r(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMulti_r) {
			return visitor.visitMulti_r(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multi_exp_rContext extends ParserRuleContext {
	public multi_r(): Multi_rContext | undefined {
		return this.tryGetRuleContext(0, Multi_rContext);
	}
	public mr(): MrContext | undefined {
		return this.tryGetRuleContext(0, MrContext);
	}
	public add_or_sub(): Add_or_subContext | undefined {
		return this.tryGetRuleContext(0, Add_or_subContext);
	}
	public SAT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.SAT, 0); }
	public multi_mod1(): Multi_mod1Context | undefined {
		return this.tryGetRuleContext(0, Multi_mod1Context);
	}
	public RND(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_multi_exp_r; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMulti_exp_r) {
			listener.enterMulti_exp_r(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMulti_exp_r) {
			listener.exitMulti_exp_r(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMulti_exp_r) {
			return visitor.visitMulti_exp_r(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multi_exp_mrfContext extends ParserRuleContext {
	public multi_r(): Multi_rContext | undefined {
		return this.tryGetRuleContext(0, Multi_rContext);
	}
	public MRF(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MRF, 0); }
	public add_or_sub(): Add_or_subContext | undefined {
		return this.tryGetRuleContext(0, Add_or_subContext);
	}
	public SAT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.SAT, 0); }
	public multi_mod1(): Multi_mod1Context | undefined {
		return this.tryGetRuleContext(0, Multi_mod1Context);
	}
	public RND(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_multi_exp_mrf; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMulti_exp_mrf) {
			listener.enterMulti_exp_mrf(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMulti_exp_mrf) {
			listener.exitMulti_exp_mrf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMulti_exp_mrf) {
			return visitor.visitMulti_exp_mrf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multi_exp_mrbContext extends ParserRuleContext {
	public multi_r(): Multi_rContext | undefined {
		return this.tryGetRuleContext(0, Multi_rContext);
	}
	public MRB(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MRB, 0); }
	public add_or_sub(): Add_or_subContext | undefined {
		return this.tryGetRuleContext(0, Add_or_subContext);
	}
	public SAT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.SAT, 0); }
	public multi_mod1(): Multi_mod1Context | undefined {
		return this.tryGetRuleContext(0, Multi_mod1Context);
	}
	public RND(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_multi_exp_mrb; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMulti_exp_mrb) {
			listener.enterMulti_exp_mrb(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMulti_exp_mrb) {
			listener.exitMulti_exp_mrb(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMulti_exp_mrb) {
			return visitor.visitMulti_exp_mrb(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MrContext extends ParserRuleContext {
	public MRB(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MRB, 0); }
	public MRF(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MRF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mr; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMr) {
			listener.enterMr(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMr) {
			listener.exitMr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMr) {
			return visitor.visitMr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Shifter_opContext extends ParserRuleContext {
	public r_reg(): R_regContext {
		return this.getRuleContext(0, R_regContext);
	}
	public EQU(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.EQU, 0); }
	public shifter_exp(): Shifter_expContext | undefined {
		return this.tryGetRuleContext(0, Shifter_expContext);
	}
	public BTST(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.BTST, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.BY, 0); }
	public sec_op(): Sec_opContext | undefined {
		return this.tryGetRuleContext(0, Sec_opContext);
	}
	public f_reg(): F_regContext | undefined {
		return this.tryGetRuleContext(0, F_regContext);
	}
	public FUNPACK(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.FUNPACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_shifter_op; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterShifter_op) {
			listener.enterShifter_op(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitShifter_op) {
			listener.exitShifter_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitShifter_op) {
			return visitor.visitShifter_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Shifter_expContext extends ParserRuleContext {
	public LSHIFT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LSHIFT, 0); }
	public r_reg(): R_regContext[];
	public r_reg(i: number): R_regContext;
	public r_reg(i?: number): R_regContext | R_regContext[] {
		if (i === undefined) {
			return this.getRuleContexts(R_regContext);
		} else {
			return this.getRuleContext(i, R_regContext);
		}
	}
	public BY(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.BY, 0); }
	public sec_op(): Sec_opContext | undefined {
		return this.tryGetRuleContext(0, Sec_opContext);
	}
	public OR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.OR, 0); }
	public ASHIFT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.ASHIFT, 0); }
	public ROT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.ROT, 0); }
	public BCLR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.BCLR, 0); }
	public BSET(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.BSET, 0); }
	public BTGL(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.BTGL, 0); }
	public FDEP(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.FDEP, 0); }
	public sec_op2(): Sec_op2Context | undefined {
		return this.tryGetRuleContext(0, Sec_op2Context);
	}
	public LPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); }
	public SE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.SE, 0); }
	public RPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); }
	public FEXT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.FEXT, 0); }
	public EXP(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.EXP, 0); }
	public EX(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.EX, 0); }
	public LEFTZ(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LEFTZ, 0); }
	public LEFTO(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LEFTO, 0); }
	public FPACK(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.FPACK, 0); }
	public f_reg(): F_regContext | undefined {
		return this.tryGetRuleContext(0, F_regContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_shifter_exp; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterShifter_exp) {
			listener.enterShifter_exp(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitShifter_exp) {
			listener.exitShifter_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitShifter_exp) {
			return visitor.visitShifter_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Sec_opContext extends ParserRuleContext {
	public r_reg(): R_regContext | undefined {
		return this.tryGetRuleContext(0, R_regContext);
	}
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_sec_op; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterSec_op) {
			listener.enterSec_op(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitSec_op) {
			listener.exitSec_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitSec_op) {
			return visitor.visitSec_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Sec_op2Context extends ParserRuleContext {
	public r_reg(): R_regContext | undefined {
		return this.tryGetRuleContext(0, R_regContext);
	}
	public bit_data(): Bit_dataContext | undefined {
		return this.tryGetRuleContext(0, Bit_dataContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_sec_op2; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterSec_op2) {
			listener.enterSec_op2(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitSec_op2) {
			listener.exitSec_op2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitSec_op2) {
			return visitor.visitSec_op2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bit_dataContext extends ParserRuleContext {
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.INT);
		} else {
			return this.getToken(SHARCParser.INT, i);
		}
	}
	public COLON(): TerminalNode { return this.getToken(SHARCParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_bit_data; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterBit_data) {
			listener.enterBit_data(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitBit_data) {
			listener.exitBit_data(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitBit_data) {
			return visitor.visitBit_data(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Add_or_subContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_add_or_sub; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterAdd_or_sub) {
			listener.enterAdd_or_sub(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitAdd_or_sub) {
			listener.exitAdd_or_sub(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitAdd_or_sub) {
			return visitor.visitAdd_or_sub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dual_opContext extends ParserRuleContext {
	public dual_add_r(): Dual_add_rContext | undefined {
		return this.tryGetRuleContext(0, Dual_add_rContext);
	}
	public parallel_multi(): Parallel_multiContext | undefined {
		return this.tryGetRuleContext(0, Parallel_multiContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_dual_op; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterDual_op) {
			listener.enterDual_op(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitDual_op) {
			listener.exitDual_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitDual_op) {
			return visitor.visitDual_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dual_add_rContext extends ParserRuleContext {
	public r_reg(): R_regContext[];
	public r_reg(i: number): R_regContext;
	public r_reg(i?: number): R_regContext | R_regContext[] {
		if (i === undefined) {
			return this.getRuleContexts(R_regContext);
		} else {
			return this.getRuleContext(i, R_regContext);
		}
	}
	public EQU(): TerminalNode[];
	public EQU(i: number): TerminalNode;
	public EQU(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.EQU);
		} else {
			return this.getToken(SHARCParser.EQU, i);
		}
	}
	public PLUS(): TerminalNode { return this.getToken(SHARCParser.PLUS, 0); }
	public COMMA(): TerminalNode { return this.getToken(SHARCParser.COMMA, 0); }
	public MINUS(): TerminalNode { return this.getToken(SHARCParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_dual_add_r; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterDual_add_r) {
			listener.enterDual_add_r(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitDual_add_r) {
			listener.exitDual_add_r(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitDual_add_r) {
			return visitor.visitDual_add_r(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parallel_multiContext extends ParserRuleContext {
	public multi_op(): Multi_opContext | undefined {
		return this.tryGetRuleContext(0, Multi_opContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.COMMA);
		} else {
			return this.getToken(SHARCParser.COMMA, i);
		}
	}
	public fixpoint_alu_op(): Fixpoint_alu_opContext[];
	public fixpoint_alu_op(i: number): Fixpoint_alu_opContext;
	public fixpoint_alu_op(i?: number): Fixpoint_alu_opContext | Fixpoint_alu_opContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fixpoint_alu_opContext);
		} else {
			return this.getRuleContext(i, Fixpoint_alu_opContext);
		}
	}
	public floating_point_alu_op(): Floating_point_alu_opContext[];
	public floating_point_alu_op(i: number): Floating_point_alu_opContext;
	public floating_point_alu_op(i?: number): Floating_point_alu_opContext | Floating_point_alu_opContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Floating_point_alu_opContext);
		} else {
			return this.getRuleContext(i, Floating_point_alu_opContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_parallel_multi; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterParallel_multi) {
			listener.enterParallel_multi(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitParallel_multi) {
			listener.exitParallel_multi(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitParallel_multi) {
			return visitor.visitParallel_multi(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_control_expContext extends ParserRuleContext {
	public flow_contorl_8(): Flow_contorl_8Context | undefined {
		return this.tryGetRuleContext(0, Flow_contorl_8Context);
	}
	public flow_control_9_and_11(): Flow_control_9_and_11Context | undefined {
		return this.tryGetRuleContext(0, Flow_control_9_and_11Context);
	}
	public flow_control_10(): Flow_control_10Context | undefined {
		return this.tryGetRuleContext(0, Flow_control_10Context);
	}
	public flow_control_8a(): Flow_control_8aContext | undefined {
		return this.tryGetRuleContext(0, Flow_control_8aContext);
	}
	public flow_control_8b(): Flow_control_8bContext | undefined {
		return this.tryGetRuleContext(0, Flow_control_8bContext);
	}
	public flow_control_9a(): Flow_control_9aContext | undefined {
		return this.tryGetRuleContext(0, Flow_control_9aContext);
	}
	public flow_control_9b(): Flow_control_9bContext | undefined {
		return this.tryGetRuleContext(0, Flow_control_9bContext);
	}
	public flow_control_11a(): Flow_control_11aContext | undefined {
		return this.tryGetRuleContext(0, Flow_control_11aContext);
	}
	public flow_control_11b(): Flow_control_11bContext | undefined {
		return this.tryGetRuleContext(0, Flow_control_11bContext);
	}
	public flow_control_12(): Flow_control_12Context | undefined {
		return this.tryGetRuleContext(0, Flow_control_12Context);
	}
	public flow_control_13(): Flow_control_13Context | undefined {
		return this.tryGetRuleContext(0, Flow_control_13Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_flow_control_exp; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFlow_control_exp) {
			listener.enterFlow_control_exp(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFlow_control_exp) {
			listener.exitFlow_control_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFlow_control_exp) {
			return visitor.visitFlow_control_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_contorl_8Context extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(SHARCParser.IF, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public flow_contorl_8_exp(): Flow_contorl_8_expContext {
		return this.getRuleContext(0, Flow_contorl_8_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_flow_contorl_8; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFlow_contorl_8) {
			listener.enterFlow_contorl_8(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFlow_contorl_8) {
			listener.exitFlow_contorl_8(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFlow_contorl_8) {
			return visitor.visitFlow_contorl_8(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_contorl_8_expContext extends ParserRuleContext {
	public flow_control_8a(): Flow_control_8aContext | undefined {
		return this.tryGetRuleContext(0, Flow_control_8aContext);
	}
	public flow_control_8b(): Flow_control_8bContext | undefined {
		return this.tryGetRuleContext(0, Flow_control_8bContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_flow_contorl_8_exp; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFlow_contorl_8_exp) {
			listener.enterFlow_contorl_8_exp(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFlow_contorl_8_exp) {
			listener.exitFlow_contorl_8_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFlow_contorl_8_exp) {
			return visitor.visitFlow_contorl_8_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_control_9_and_11Context extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(SHARCParser.IF, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public flow_control_9_and_11_exp(): Flow_control_9_and_11_expContext {
		return this.getRuleContext(0, Flow_control_9_and_11_expContext);
	}
	public COMMA(): TerminalNode { return this.getToken(SHARCParser.COMMA, 0); }
	public ELSE(): TerminalNode { return this.getToken(SHARCParser.ELSE, 0); }
	public compute(): ComputeContext {
		return this.getRuleContext(0, ComputeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_flow_control_9_and_11; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFlow_control_9_and_11) {
			listener.enterFlow_control_9_and_11(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFlow_control_9_and_11) {
			listener.exitFlow_control_9_and_11(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFlow_control_9_and_11) {
			return visitor.visitFlow_control_9_and_11(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_control_9_and_11_expContext extends ParserRuleContext {
	public flow_control_9a(): Flow_control_9aContext | undefined {
		return this.tryGetRuleContext(0, Flow_control_9aContext);
	}
	public flow_control_9b(): Flow_control_9bContext | undefined {
		return this.tryGetRuleContext(0, Flow_control_9bContext);
	}
	public flow_control_11a(): Flow_control_11aContext | undefined {
		return this.tryGetRuleContext(0, Flow_control_11aContext);
	}
	public flow_control_11b(): Flow_control_11bContext | undefined {
		return this.tryGetRuleContext(0, Flow_control_11bContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_flow_control_9_and_11_exp; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFlow_control_9_and_11_exp) {
			listener.enterFlow_control_9_and_11_exp(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFlow_control_9_and_11_exp) {
			listener.exitFlow_control_9_and_11_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFlow_control_9_and_11_exp) {
			return visitor.visitFlow_control_9_and_11_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_control_10Context extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(SHARCParser.IF, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public JUMP(): TerminalNode { return this.getToken(SHARCParser.JUMP, 0); }
	public flow_control_10_frag(): Flow_control_10_fragContext {
		return this.getRuleContext(0, Flow_control_10_fragContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.COMMA);
		} else {
			return this.getToken(SHARCParser.COMMA, i);
		}
	}
	public ELSE(): TerminalNode { return this.getToken(SHARCParser.ELSE, 0); }
	public mov_exp_1_1(): Mov_exp_1_1Context {
		return this.getRuleContext(0, Mov_exp_1_1Context);
	}
	public compute(): ComputeContext | undefined {
		return this.tryGetRuleContext(0, ComputeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_flow_control_10; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFlow_control_10) {
			listener.enterFlow_control_10(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFlow_control_10) {
			listener.exitFlow_control_10(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFlow_control_10) {
			return visitor.visitFlow_control_10(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_control_10_fragContext extends ParserRuleContext {
	public mem_addr_md_ic(): Mem_addr_md_icContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_md_icContext);
	}
	public jump_addr_pc(): Jump_addr_pcContext | undefined {
		return this.tryGetRuleContext(0, Jump_addr_pcContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_flow_control_10_frag; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFlow_control_10_frag) {
			listener.enterFlow_control_10_frag(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFlow_control_10_frag) {
			listener.exitFlow_control_10_frag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFlow_control_10_frag) {
			return visitor.visitFlow_control_10_frag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_control_12Context extends ParserRuleContext {
	public LCNTR(): TerminalNode { return this.getToken(SHARCParser.LCNTR, 0); }
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public lcntr_v(): Lcntr_vContext {
		return this.getRuleContext(0, Lcntr_vContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.COMMA, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DO, 0); }
	public jump_addr_int_or_pc(): Jump_addr_int_or_pcContext | undefined {
		return this.tryGetRuleContext(0, Jump_addr_int_or_pcContext);
	}
	public UNTIL(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.UNTIL, 0); }
	public LCE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LCE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_flow_control_12; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFlow_control_12) {
			listener.enterFlow_control_12(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFlow_control_12) {
			listener.exitFlow_control_12(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFlow_control_12) {
			return visitor.visitFlow_control_12(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lcntr_vContext extends ParserRuleContext {
	public value_exp(): Value_expContext | undefined {
		return this.tryGetRuleContext(0, Value_expContext);
	}
	public u_reg(): U_regContext | undefined {
		return this.tryGetRuleContext(0, U_regContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_lcntr_v; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterLcntr_v) {
			listener.enterLcntr_v(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitLcntr_v) {
			listener.exitLcntr_v(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitLcntr_v) {
			return visitor.visitLcntr_v(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_control_13Context extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(SHARCParser.DO, 0); }
	public jump_addr_int_or_pc(): Jump_addr_int_or_pcContext {
		return this.getRuleContext(0, Jump_addr_int_or_pcContext);
	}
	public UNTIL(): TerminalNode { return this.getToken(SHARCParser.UNTIL, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_flow_control_13; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFlow_control_13) {
			listener.enterFlow_control_13(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFlow_control_13) {
			listener.exitFlow_control_13(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFlow_control_13) {
			return visitor.visitFlow_control_13(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_control_8aContext extends ParserRuleContext {
	public JUMP(): TerminalNode { return this.getToken(SHARCParser.JUMP, 0); }
	public jump_addr_int(): Jump_addr_intContext {
		return this.getRuleContext(0, Jump_addr_intContext);
	}
	public jump_modifier(): Jump_modifierContext | undefined {
		return this.tryGetRuleContext(0, Jump_modifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_flow_control_8a; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFlow_control_8a) {
			listener.enterFlow_control_8a(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFlow_control_8a) {
			listener.exitFlow_control_8a(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFlow_control_8a) {
			return visitor.visitFlow_control_8a(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_control_8bContext extends ParserRuleContext {
	public CALL(): TerminalNode { return this.getToken(SHARCParser.CALL, 0); }
	public jump_addr_int(): Jump_addr_intContext {
		return this.getRuleContext(0, Jump_addr_intContext);
	}
	public jump_modifier2(): Jump_modifier2Context | undefined {
		return this.tryGetRuleContext(0, Jump_modifier2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_flow_control_8b; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFlow_control_8b) {
			listener.enterFlow_control_8b(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFlow_control_8b) {
			listener.exitFlow_control_8b(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFlow_control_8b) {
			return visitor.visitFlow_control_8b(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_control_9aContext extends ParserRuleContext {
	public JUMP(): TerminalNode { return this.getToken(SHARCParser.JUMP, 0); }
	public flow_control_10_frag(): Flow_control_10_fragContext {
		return this.getRuleContext(0, Flow_control_10_fragContext);
	}
	public jump_modifier(): Jump_modifierContext | undefined {
		return this.tryGetRuleContext(0, Jump_modifierContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.COMMA, 0); }
	public compute(): ComputeContext | undefined {
		return this.tryGetRuleContext(0, ComputeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_flow_control_9a; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFlow_control_9a) {
			listener.enterFlow_control_9a(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFlow_control_9a) {
			listener.exitFlow_control_9a(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFlow_control_9a) {
			return visitor.visitFlow_control_9a(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_control_9bContext extends ParserRuleContext {
	public CALL(): TerminalNode { return this.getToken(SHARCParser.CALL, 0); }
	public flow_control_10_frag(): Flow_control_10_fragContext {
		return this.getRuleContext(0, Flow_control_10_fragContext);
	}
	public jump_modifier2(): Jump_modifier2Context | undefined {
		return this.tryGetRuleContext(0, Jump_modifier2Context);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.COMMA, 0); }
	public compute(): ComputeContext | undefined {
		return this.tryGetRuleContext(0, ComputeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_flow_control_9b; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFlow_control_9b) {
			listener.enterFlow_control_9b(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFlow_control_9b) {
			listener.exitFlow_control_9b(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFlow_control_9b) {
			return visitor.visitFlow_control_9b(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_control_11aContext extends ParserRuleContext {
	public RTS(): TerminalNode { return this.getToken(SHARCParser.RTS, 0); }
	public jump_modifier3(): Jump_modifier3Context | undefined {
		return this.tryGetRuleContext(0, Jump_modifier3Context);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.COMMA, 0); }
	public compute(): ComputeContext | undefined {
		return this.tryGetRuleContext(0, ComputeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_flow_control_11a; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFlow_control_11a) {
			listener.enterFlow_control_11a(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFlow_control_11a) {
			listener.exitFlow_control_11a(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFlow_control_11a) {
			return visitor.visitFlow_control_11a(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_control_11bContext extends ParserRuleContext {
	public RTI(): TerminalNode { return this.getToken(SHARCParser.RTI, 0); }
	public jump_modifier2(): Jump_modifier2Context | undefined {
		return this.tryGetRuleContext(0, Jump_modifier2Context);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.COMMA, 0); }
	public compute(): ComputeContext | undefined {
		return this.tryGetRuleContext(0, ComputeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_flow_control_11b; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterFlow_control_11b) {
			listener.enterFlow_control_11b(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitFlow_control_11b) {
			listener.exitFlow_control_11b(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitFlow_control_11b) {
			return visitor.visitFlow_control_11b(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Jump_addr_int_or_pcContext extends ParserRuleContext {
	public jump_addr_int(): Jump_addr_intContext | undefined {
		return this.tryGetRuleContext(0, Jump_addr_intContext);
	}
	public jump_addr_pc(): Jump_addr_pcContext | undefined {
		return this.tryGetRuleContext(0, Jump_addr_pcContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_jump_addr_int_or_pc; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterJump_addr_int_or_pc) {
			listener.enterJump_addr_int_or_pc(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitJump_addr_int_or_pc) {
			listener.exitJump_addr_int_or_pc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitJump_addr_int_or_pc) {
			return visitor.visitJump_addr_int_or_pc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Jump_addr_md_or_pcContext extends ParserRuleContext {
	public mem_addr_md_ic(): Mem_addr_md_icContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_md_icContext);
	}
	public jump_addr_pc(): Jump_addr_pcContext | undefined {
		return this.tryGetRuleContext(0, Jump_addr_pcContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_jump_addr_md_or_pc; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterJump_addr_md_or_pc) {
			listener.enterJump_addr_md_or_pc(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitJump_addr_md_or_pc) {
			listener.exitJump_addr_md_or_pc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitJump_addr_md_or_pc) {
			return visitor.visitJump_addr_md_or_pc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Jump_addr_pcContext extends ParserRuleContext {
	public LPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.LPARENTHESE, 0); }
	public PC(): TerminalNode { return this.getToken(SHARCParser.PC, 0); }
	public COMMA(): TerminalNode { return this.getToken(SHARCParser.COMMA, 0); }
	public value_exp(): Value_expContext {
		return this.getRuleContext(0, Value_expContext);
	}
	public RPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.RPARENTHESE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_jump_addr_pc; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterJump_addr_pc) {
			listener.enterJump_addr_pc(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitJump_addr_pc) {
			listener.exitJump_addr_pc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitJump_addr_pc) {
			return visitor.visitJump_addr_pc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Jump_addr_intContext extends ParserRuleContext {
	public value_exp(): Value_expContext {
		return this.getRuleContext(0, Value_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_jump_addr_int; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterJump_addr_int) {
			listener.enterJump_addr_int(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitJump_addr_int) {
			listener.exitJump_addr_int(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitJump_addr_int) {
			return visitor.visitJump_addr_int(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Jump_modifierContext extends ParserRuleContext {
	public jump_modifier_(): Jump_modifier_Context {
		return this.getRuleContext(0, Jump_modifier_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_jump_modifier; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterJump_modifier) {
			listener.enterJump_modifier(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitJump_modifier) {
			listener.exitJump_modifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitJump_modifier) {
			return visitor.visitJump_modifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Jump_modifier_Context extends ParserRuleContext {
	public LPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.LPARENTHESE, 0); }
	public RPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.RPARENTHESE, 0); }
	public jump_modifier_1(): Jump_modifier_1Context | undefined {
		return this.tryGetRuleContext(0, Jump_modifier_1Context);
	}
	public LA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LA, 0); }
	public CI(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.CI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_jump_modifier_; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterJump_modifier_) {
			listener.enterJump_modifier_(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitJump_modifier_) {
			listener.exitJump_modifier_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitJump_modifier_) {
			return visitor.visitJump_modifier_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Jump_modifier_1Context extends ParserRuleContext {
	public DB(): TerminalNode { return this.getToken(SHARCParser.DB, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.COMMA, 0); }
	public LA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LA, 0); }
	public CI(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.CI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_jump_modifier_1; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterJump_modifier_1) {
			listener.enterJump_modifier_1(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitJump_modifier_1) {
			listener.exitJump_modifier_1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitJump_modifier_1) {
			return visitor.visitJump_modifier_1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Jump_modifier2Context extends ParserRuleContext {
	public LPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.LPARENTHESE, 0); }
	public DB(): TerminalNode { return this.getToken(SHARCParser.DB, 0); }
	public RPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.RPARENTHESE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_jump_modifier2; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterJump_modifier2) {
			listener.enterJump_modifier2(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitJump_modifier2) {
			listener.exitJump_modifier2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitJump_modifier2) {
			return visitor.visitJump_modifier2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Jump_modifier3Context extends ParserRuleContext {
	public jump_modifier3_(): Jump_modifier3_Context {
		return this.getRuleContext(0, Jump_modifier3_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_jump_modifier3; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterJump_modifier3) {
			listener.enterJump_modifier3(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitJump_modifier3) {
			listener.exitJump_modifier3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitJump_modifier3) {
			return visitor.visitJump_modifier3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Jump_modifier3_Context extends ParserRuleContext {
	public LPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.LPARENTHESE, 0); }
	public RPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.RPARENTHESE, 0); }
	public jump_modifier3_1(): Jump_modifier3_1Context | undefined {
		return this.tryGetRuleContext(0, Jump_modifier3_1Context);
	}
	public LR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_jump_modifier3_; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterJump_modifier3_) {
			listener.enterJump_modifier3_(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitJump_modifier3_) {
			listener.exitJump_modifier3_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitJump_modifier3_) {
			return visitor.visitJump_modifier3_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Jump_modifier3_1Context extends ParserRuleContext {
	public DB(): TerminalNode { return this.getToken(SHARCParser.DB, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.COMMA, 0); }
	public LR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_jump_modifier3_1; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterJump_modifier3_1) {
			listener.enterJump_modifier3_1(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitJump_modifier3_1) {
			listener.exitJump_modifier3_1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitJump_modifier3_1) {
			return visitor.visitJump_modifier3_1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Imm_mov_expContext extends ParserRuleContext {
	public imm_mov_14a(): Imm_mov_14aContext | undefined {
		return this.tryGetRuleContext(0, Imm_mov_14aContext);
	}
	public imm_mov_14b(): Imm_mov_14bContext | undefined {
		return this.tryGetRuleContext(0, Imm_mov_14bContext);
	}
	public imm_mov_16(): Imm_mov_16Context | undefined {
		return this.tryGetRuleContext(0, Imm_mov_16Context);
	}
	public imm_mov_17(): Imm_mov_17Context | undefined {
		return this.tryGetRuleContext(0, Imm_mov_17Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_imm_mov_exp; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterImm_mov_exp) {
			listener.enterImm_mov_exp(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitImm_mov_exp) {
			listener.exitImm_mov_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitImm_mov_exp) {
			return visitor.visitImm_mov_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Imm_mov_14aContext extends ParserRuleContext {
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public u_reg(): U_regContext {
		return this.getRuleContext(0, U_regContext);
	}
	public mem_addr_dm_int(): Mem_addr_dm_intContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_dm_intContext);
	}
	public mem_addr_pm_int(): Mem_addr_pm_intContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_pm_intContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_imm_mov_14a; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterImm_mov_14a) {
			listener.enterImm_mov_14a(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitImm_mov_14a) {
			listener.exitImm_mov_14a(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitImm_mov_14a) {
			return visitor.visitImm_mov_14a(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Imm_mov_15aContext extends ParserRuleContext {
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public u_reg(): U_regContext {
		return this.getRuleContext(0, U_regContext);
	}
	public mem_addr_dm_int_ia(): Mem_addr_dm_int_iaContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_dm_int_iaContext);
	}
	public mem_addr_pm_int_ic(): Mem_addr_pm_int_icContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_pm_int_icContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_imm_mov_15a; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterImm_mov_15a) {
			listener.enterImm_mov_15a(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitImm_mov_15a) {
			listener.exitImm_mov_15a(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitImm_mov_15a) {
			return visitor.visitImm_mov_15a(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Imm_mov_14bContext extends ParserRuleContext {
	public u_reg(): U_regContext {
		return this.getRuleContext(0, U_regContext);
	}
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public mem_addr_dm_int(): Mem_addr_dm_intContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_dm_intContext);
	}
	public mem_addr_pm_int(): Mem_addr_pm_intContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_pm_intContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_imm_mov_14b; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterImm_mov_14b) {
			listener.enterImm_mov_14b(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitImm_mov_14b) {
			listener.exitImm_mov_14b(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitImm_mov_14b) {
			return visitor.visitImm_mov_14b(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Imm_mov_15bContext extends ParserRuleContext {
	public u_reg(): U_regContext {
		return this.getRuleContext(0, U_regContext);
	}
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public mem_addr_dm_int_ia(): Mem_addr_dm_int_iaContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_dm_int_iaContext);
	}
	public mem_addr_pm_int_ic(): Mem_addr_pm_int_icContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_pm_int_icContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_imm_mov_15b; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterImm_mov_15b) {
			listener.enterImm_mov_15b(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitImm_mov_15b) {
			listener.exitImm_mov_15b(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitImm_mov_15b) {
			return visitor.visitImm_mov_15b(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Imm_mov_16Context extends ParserRuleContext {
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public value_exp(): Value_expContext {
		return this.getRuleContext(0, Value_expContext);
	}
	public mem_addr_dm_ia_mb(): Mem_addr_dm_ia_mbContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_dm_ia_mbContext);
	}
	public mem_addr_pm_ic_md(): Mem_addr_pm_ic_mdContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_pm_ic_mdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_imm_mov_16; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterImm_mov_16) {
			listener.enterImm_mov_16(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitImm_mov_16) {
			listener.exitImm_mov_16(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitImm_mov_16) {
			return visitor.visitImm_mov_16(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Imm_mov_17Context extends ParserRuleContext {
	public u_reg2(): U_reg2Context {
		return this.getRuleContext(0, U_reg2Context);
	}
	public EQU(): TerminalNode { return this.getToken(SHARCParser.EQU, 0); }
	public value_exp(): Value_expContext {
		return this.getRuleContext(0, Value_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_imm_mov_17; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterImm_mov_17) {
			listener.enterImm_mov_17(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitImm_mov_17) {
			listener.exitImm_mov_17(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitImm_mov_17) {
			return visitor.visitImm_mov_17(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class U_reg2Context extends ParserRuleContext {
	public d_reg(): D_regContext | undefined {
		return this.tryGetRuleContext(0, D_regContext);
	}
	public PC(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PC, 0); }
	public PCSTK(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PCSTK, 0); }
	public PCSTKP(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PCSTKP, 0); }
	public FADDR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.FADDR, 0); }
	public DADDR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DADDR, 0); }
	public LADDR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LADDR, 0); }
	public CURLCNTR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.CURLCNTR, 0); }
	public dag_reg(): Dag_regContext | undefined {
		return this.tryGetRuleContext(0, Dag_regContext);
	}
	public PX1(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PX1, 0); }
	public PX2(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PX2, 0); }
	public PX(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PX, 0); }
	public TPERIOD(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.TPERIOD, 0); }
	public TCOUNT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.TCOUNT, 0); }
	public s_reg(): S_regContext | undefined {
		return this.tryGetRuleContext(0, S_regContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_u_reg2; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterU_reg2) {
			listener.enterU_reg2(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitU_reg2) {
			listener.exitU_reg2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitU_reg2) {
			return visitor.visitU_reg2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Misc_expContext extends ParserRuleContext {
	public BIT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.BIT, 0); }
	public s_reg(): S_regContext | undefined {
		return this.tryGetRuleContext(0, S_regContext);
	}
	public value_exp(): Value_expContext | undefined {
		return this.tryGetRuleContext(0, Value_expContext);
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.SET, 0); }
	public CLR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.CLR, 0); }
	public TGL(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.TGL, 0); }
	public TST(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.TST, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.XOR, 0); }
	public BITREV(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.BITREV, 0); }
	public mem_addr_ia_int(): Mem_addr_ia_intContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_ia_intContext);
	}
	public mem_addr_ic_int(): Mem_addr_ic_intContext | undefined {
		return this.tryGetRuleContext(0, Mem_addr_ic_intContext);
	}
	public MODIFY(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MODIFY, 0); }
	public LPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LPARENTHESE, 0); }
	public ia(): IaContext | undefined {
		return this.tryGetRuleContext(0, IaContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.COMMA);
		} else {
			return this.getToken(SHARCParser.COMMA, i);
		}
	}
	public RPARENTHESE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RPARENTHESE, 0); }
	public ic(): IcContext | undefined {
		return this.tryGetRuleContext(0, IcContext);
	}
	public misc_20(): Misc_20Context[];
	public misc_20(i: number): Misc_20Context;
	public misc_20(i?: number): Misc_20Context | Misc_20Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Misc_20Context);
		} else {
			return this.getRuleContext(i, Misc_20Context);
		}
	}
	public FLUSH(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.FLUSH, 0); }
	public CACHE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.CACHE, 0); }
	public NOP(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.NOP, 0); }
	public IDLE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.IDLE, 0); }
	public IDLE16(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.IDLE16, 0); }
	public CJUMP(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.CJUMP, 0); }
	public jump_addr_int_or_pc(): Jump_addr_int_or_pcContext | undefined {
		return this.tryGetRuleContext(0, Jump_addr_int_or_pcContext);
	}
	public jump_modifier2(): Jump_modifier2Context | undefined {
		return this.tryGetRuleContext(0, Jump_modifier2Context);
	}
	public RFRAME(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.RFRAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_misc_exp; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMisc_exp) {
			listener.enterMisc_exp(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMisc_exp) {
			listener.exitMisc_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMisc_exp) {
			return visitor.visitMisc_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Misc_20Context extends ParserRuleContext {
	public PUSH(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PUSH, 0); }
	public POP(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.POP, 0); }
	public LOOP(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LOOP, 0); }
	public STS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.STS, 0); }
	public PCSTK(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PCSTK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_misc_20; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMisc_20) {
			listener.enterMisc_20(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMisc_20) {
			listener.exitMisc_20(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMisc_20) {
			return visitor.visitMisc_20(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Directive_expContext extends ParserRuleContext {
	public DOT_ALGIGN(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_ALGIGN, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.INT, 0); }
	public DOT_COMPRESS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_COMPRESS, 0); }
	public DOT_EXTERN(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_EXTERN, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.ID);
		} else {
			return this.getToken(SHARCParser.ID, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.COMMA);
		} else {
			return this.getToken(SHARCParser.COMMA, i);
		}
	}
	public DOT_FILE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_FILE, 0); }
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SHARCParser.StringLiteral);
		} else {
			return this.getToken(SHARCParser.StringLiteral, i);
		}
	}
	public DOT_FILE_ATTR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_FILE_ATTR, 0); }
	public DOT_FORCECOMPRESS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_FORCECOMPRESS, 0); }
	public DOT_GLOBAL(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_GLOBAL, 0); }
	public DOT_IMPORT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_IMPORT, 0); }
	public DOT_LEFTMARGIN(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_LEFTMARGIN, 0); }
	public value_exp(): Value_expContext | undefined {
		return this.tryGetRuleContext(0, Value_expContext);
	}
	public DOT_LIST(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_LIST, 0); }
	public DOT_LIST_DATA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_LIST_DATA, 0); }
	public DOT_LIST_DATFILE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_LIST_DATFILE, 0); }
	public DOT_LIST_DEFTAB(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_LIST_DEFTAB, 0); }
	public DOT_LIST_LOCTAB(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_LIST_LOCTAB, 0); }
	public DOT_LIST_WRAPDATA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_LIST_WRAPDATA, 0); }
	public DOT_NEWPAGE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_NEWPAGE, 0); }
	public DOT_NOCOMPRESS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_NOCOMPRESS, 0); }
	public DOT_NOLIST_DATA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_NOLIST_DATA, 0); }
	public DOT_NOLIST_DATFILE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_NOLIST_DATFILE, 0); }
	public DOT_NOLIST_WRAPDATA(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_NOLIST_WRAPDATA, 0); }
	public DOT_PAGELENGTH(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_PAGELENGTH, 0); }
	public DOT_PAGEWIDTH(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_PAGEWIDTH, 0); }
	public DOT_PRECISION(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_PRECISION, 0); }
	public EQU(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.EQU, 0); }
	public DOT_ROUND_MINUS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_ROUND_MINUS, 0); }
	public DOT_ROUND_NEAREST(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_ROUND_NEAREST, 0); }
	public DOT_ROUND_PLUS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_ROUND_PLUS, 0); }
	public DOT_ROUND_ZERO(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_ROUND_ZERO, 0); }
	public DOT_PREVIOUS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_PREVIOUS, 0); }
	public DOT_WEAK(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DOT_WEAK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_directive_exp; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterDirective_exp) {
			listener.enterDirective_exp(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitDirective_exp) {
			listener.exitDirective_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitDirective_exp) {
			return visitor.visitDirective_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class B_regContext extends ParserRuleContext {
	public B0(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.B0, 0); }
	public B1(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.B1, 0); }
	public B2(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.B2, 0); }
	public B3(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.B3, 0); }
	public B4(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.B4, 0); }
	public B5(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.B5, 0); }
	public B6(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.B6, 0); }
	public B7(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.B7, 0); }
	public B8(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.B8, 0); }
	public B9(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.B9, 0); }
	public B10(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.B10, 0); }
	public B11(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.B11, 0); }
	public B12(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.B12, 0); }
	public B13(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.B13, 0); }
	public B14(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.B14, 0); }
	public B15(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.B15, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_b_reg; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterB_reg) {
			listener.enterB_reg(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitB_reg) {
			listener.exitB_reg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitB_reg) {
			return visitor.visitB_reg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class L_regContext extends ParserRuleContext {
	public L0(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.L0, 0); }
	public L1(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.L1, 0); }
	public L2(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.L2, 0); }
	public L3(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.L3, 0); }
	public L4(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.L4, 0); }
	public L5(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.L5, 0); }
	public L6(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.L6, 0); }
	public L7(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.L7, 0); }
	public L8(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.L8, 0); }
	public L9(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.L9, 0); }
	public L10(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.L10, 0); }
	public L11(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.L11, 0); }
	public L12(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.L12, 0); }
	public L13(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.L13, 0); }
	public L14(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.L14, 0); }
	public L15(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.L15, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_l_reg; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterL_reg) {
			listener.enterL_reg(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitL_reg) {
			listener.exitL_reg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitL_reg) {
			return visitor.visitL_reg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class R_regContext extends ParserRuleContext {
	public R0(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R0, 0); }
	public R1(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R1, 0); }
	public R2(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R2, 0); }
	public R3(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R3, 0); }
	public R4(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R4, 0); }
	public R5(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R5, 0); }
	public R6(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R6, 0); }
	public R7(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R7, 0); }
	public R8(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R8, 0); }
	public R9(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R9, 0); }
	public R10(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R10, 0); }
	public R11(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R11, 0); }
	public R12(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R12, 0); }
	public R13(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R13, 0); }
	public R14(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R14, 0); }
	public R15(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R15, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_r_reg; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterR_reg) {
			listener.enterR_reg(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitR_reg) {
			listener.exitR_reg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitR_reg) {
			return visitor.visitR_reg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class F_regContext extends ParserRuleContext {
	public F0(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F0, 0); }
	public F1(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F1, 0); }
	public F2(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F2, 0); }
	public F3(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F3, 0); }
	public F4(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F4, 0); }
	public F5(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F5, 0); }
	public F6(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F6, 0); }
	public F7(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F7, 0); }
	public F8(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F8, 0); }
	public F9(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F9, 0); }
	public F10(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F10, 0); }
	public F11(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F11, 0); }
	public F12(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F12, 0); }
	public F13(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F13, 0); }
	public F14(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F14, 0); }
	public F15(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F15, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_f_reg; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterF_reg) {
			listener.enterF_reg(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitF_reg) {
			listener.exitF_reg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitF_reg) {
			return visitor.visitF_reg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class S_regContext extends ParserRuleContext {
	public MODE1(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MODE1, 0); }
	public MODE2(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MODE2, 0); }
	public IRPTL(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.IRPTL, 0); }
	public IMASK(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.IMASK, 0); }
	public IMASKP(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.IMASKP, 0); }
	public ASTAT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.ASTAT, 0); }
	public STKY(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.STKY, 0); }
	public USTAT1(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.USTAT1, 0); }
	public USTAT2(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.USTAT2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_s_reg; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterS_reg) {
			listener.enterS_reg(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitS_reg) {
			listener.exitS_reg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitS_reg) {
			return visitor.visitS_reg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IaContext extends ParserRuleContext {
	public I0(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.I0, 0); }
	public I1(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.I1, 0); }
	public I2(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.I2, 0); }
	public I3(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.I3, 0); }
	public I4(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.I4, 0); }
	public I5(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.I5, 0); }
	public I6(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.I6, 0); }
	public I7(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.I7, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_ia; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterIa) {
			listener.enterIa(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitIa) {
			listener.exitIa(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitIa) {
			return visitor.visitIa(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MbContext extends ParserRuleContext {
	public M0(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.M0, 0); }
	public M1(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.M1, 0); }
	public M2(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.M2, 0); }
	public M3(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.M3, 0); }
	public M4(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.M4, 0); }
	public M5(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.M5, 0); }
	public M6(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.M6, 0); }
	public M7(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.M7, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mb; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMb) {
			listener.enterMb(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMb) {
			listener.exitMb(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMb) {
			return visitor.visitMb(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IcContext extends ParserRuleContext {
	public I8(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.I8, 0); }
	public I9(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.I9, 0); }
	public I10(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.I10, 0); }
	public I11(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.I11, 0); }
	public I12(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.I12, 0); }
	public I13(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.I13, 0); }
	public I14(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.I14, 0); }
	public I15(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.I15, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_ic; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterIc) {
			listener.enterIc(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitIc) {
			listener.exitIc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitIc) {
			return visitor.visitIc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MdContext extends ParserRuleContext {
	public M8(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.M8, 0); }
	public M9(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.M9, 0); }
	public M10(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.M10, 0); }
	public M11(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.M11, 0); }
	public M12(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.M12, 0); }
	public M13(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.M13, 0); }
	public M14(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.M14, 0); }
	public M15(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.M15, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_md; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMd) {
			listener.enterMd(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMd) {
			listener.exitMd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMd) {
			return visitor.visitMd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class I_regContext extends ParserRuleContext {
	public ia(): IaContext | undefined {
		return this.tryGetRuleContext(0, IaContext);
	}
	public ic(): IcContext | undefined {
		return this.tryGetRuleContext(0, IcContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_i_reg; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterI_reg) {
			listener.enterI_reg(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitI_reg) {
			listener.exitI_reg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitI_reg) {
			return visitor.visitI_reg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class M_regContext extends ParserRuleContext {
	public mb(): MbContext | undefined {
		return this.tryGetRuleContext(0, MbContext);
	}
	public md(): MdContext | undefined {
		return this.tryGetRuleContext(0, MdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_m_reg; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterM_reg) {
			listener.enterM_reg(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitM_reg) {
			listener.exitM_reg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitM_reg) {
			return visitor.visitM_reg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dag_regContext extends ParserRuleContext {
	public i_reg(): I_regContext | undefined {
		return this.tryGetRuleContext(0, I_regContext);
	}
	public m_reg(): M_regContext | undefined {
		return this.tryGetRuleContext(0, M_regContext);
	}
	public b_reg(): B_regContext | undefined {
		return this.tryGetRuleContext(0, B_regContext);
	}
	public l_reg(): L_regContext | undefined {
		return this.tryGetRuleContext(0, L_regContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_dag_reg; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterDag_reg) {
			listener.enterDag_reg(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitDag_reg) {
			listener.exitDag_reg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitDag_reg) {
			return visitor.visitDag_reg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class D_regContext extends ParserRuleContext {
	public r_reg(): R_regContext | undefined {
		return this.tryGetRuleContext(0, R_regContext);
	}
	public f_reg(): F_regContext | undefined {
		return this.tryGetRuleContext(0, F_regContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_d_reg; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterD_reg) {
			listener.enterD_reg(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitD_reg) {
			listener.exitD_reg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitD_reg) {
			return visitor.visitD_reg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class U_regContext extends ParserRuleContext {
	public d_reg(): D_regContext | undefined {
		return this.tryGetRuleContext(0, D_regContext);
	}
	public PC(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PC, 0); }
	public PCSTK(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PCSTK, 0); }
	public PCSTKP(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PCSTKP, 0); }
	public FADDR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.FADDR, 0); }
	public DADDR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.DADDR, 0); }
	public LADDR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LADDR, 0); }
	public CURLCNTR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.CURLCNTR, 0); }
	public LCNTR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LCNTR, 0); }
	public dag_reg(): Dag_regContext | undefined {
		return this.tryGetRuleContext(0, Dag_regContext);
	}
	public PX1(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PX1, 0); }
	public PX2(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PX2, 0); }
	public PX(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.PX, 0); }
	public TPERIOD(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.TPERIOD, 0); }
	public TCOUNT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.TCOUNT, 0); }
	public s_reg(): S_regContext | undefined {
		return this.tryGetRuleContext(0, S_regContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_u_reg; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterU_reg) {
			listener.enterU_reg(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitU_reg) {
			listener.exitU_reg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitU_reg) {
			return visitor.visitU_reg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public ccondition(): CconditionContext {
		return this.getRuleContext(0, CconditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_condition; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitCondition) {
			return visitor.visitCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CconditionContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.EQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LE, 0); }
	public AC(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.AC, 0); }
	public AV(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.AV, 0); }
	public MV(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MV, 0); }
	public MS(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MS, 0); }
	public SV(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.SV, 0); }
	public SZ(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.SZ, 0); }
	public FLAG0_IN(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.FLAG0_IN, 0); }
	public FLAG1_IN(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.FLAG1_IN, 0); }
	public FLAG2_IN(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.FLAG2_IN, 0); }
	public FLAG3_IN(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.FLAG3_IN, 0); }
	public TF(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.TF, 0); }
	public BM(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.BM, 0); }
	public LCE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.LCE, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.NOT, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.NE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.GE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.GT, 0); }
	public NBM(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.NBM, 0); }
	public FOREVER(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.FOREVER, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.TRUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_ccondition; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterCcondition) {
			listener.enterCcondition(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitCcondition) {
			listener.exitCcondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitCcondition) {
			return visitor.visitCcondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multi_mod1Context extends ParserRuleContext {
	public multi_mod1_(): Multi_mod1_Context {
		return this.getRuleContext(0, Multi_mod1_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_multi_mod1; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMulti_mod1) {
			listener.enterMulti_mod1(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMulti_mod1) {
			listener.exitMulti_mod1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMulti_mod1) {
			return visitor.visitMulti_mod1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multi_mod1_Context extends ParserRuleContext {
	public LPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.LPARENTHESE, 0); }
	public RPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.RPARENTHESE, 0); }
	public SI(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.SI, 0); }
	public UI(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.UI, 0); }
	public SF(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.SF, 0); }
	public UF(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.UF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_multi_mod1_; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMulti_mod1_) {
			listener.enterMulti_mod1_(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMulti_mod1_) {
			listener.exitMulti_mod1_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMulti_mod1_) {
			return visitor.visitMulti_mod1_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multi_mod2Context extends ParserRuleContext {
	public multi_mod2_(): Multi_mod2_Context {
		return this.getRuleContext(0, Multi_mod2_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_multi_mod2; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMulti_mod2) {
			listener.enterMulti_mod2(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMulti_mod2) {
			listener.exitMulti_mod2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMulti_mod2) {
			return visitor.visitMulti_mod2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multi_mod2_Context extends ParserRuleContext {
	public LPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.LPARENTHESE, 0); }
	public RPARENTHESE(): TerminalNode { return this.getToken(SHARCParser.RPARENTHESE, 0); }
	public SSI(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.SSI, 0); }
	public SUI(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.SUI, 0); }
	public USI(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.USI, 0); }
	public UUI(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.UUI, 0); }
	public SSF(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.SSF, 0); }
	public SUF(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.SUF, 0); }
	public USF(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.USF, 0); }
	public UUF(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.UUF, 0); }
	public SSFR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.SSFR, 0); }
	public SUFR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.SUFR, 0); }
	public USFR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.USFR, 0); }
	public UUFR(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.UUFR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_multi_mod2_; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMulti_mod2_) {
			listener.enterMulti_mod2_(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMulti_mod2_) {
			listener.exitMulti_mod2_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMulti_mod2_) {
			return visitor.visitMulti_mod2_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class R3_0Context extends ParserRuleContext {
	public R0(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R0, 0); }
	public R2(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R2, 0); }
	public R3(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R3, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_r3_0; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterR3_0) {
			listener.enterR3_0(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitR3_0) {
			listener.exitR3_0(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitR3_0) {
			return visitor.visitR3_0(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class R7_4Context extends ParserRuleContext {
	public R4(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R4, 0); }
	public R5(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R5, 0); }
	public R6(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R6, 0); }
	public R7(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R7, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_r7_4; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterR7_4) {
			listener.enterR7_4(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitR7_4) {
			listener.exitR7_4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitR7_4) {
			return visitor.visitR7_4(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class R11_8Context extends ParserRuleContext {
	public R8(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R8, 0); }
	public R9(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R9, 0); }
	public R10(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R10, 0); }
	public R11(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R11, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_r11_8; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterR11_8) {
			listener.enterR11_8(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitR11_8) {
			listener.exitR11_8(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitR11_8) {
			return visitor.visitR11_8(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class R15_12Context extends ParserRuleContext {
	public R12(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R12, 0); }
	public R13(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R13, 0); }
	public R14(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R14, 0); }
	public R15(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.R15, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_r15_12; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterR15_12) {
			listener.enterR15_12(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitR15_12) {
			listener.exitR15_12(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitR15_12) {
			return visitor.visitR15_12(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class F3_0Context extends ParserRuleContext {
	public F0(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F0, 0); }
	public F2(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F2, 0); }
	public F3(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F3, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_f3_0; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterF3_0) {
			listener.enterF3_0(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitF3_0) {
			listener.exitF3_0(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitF3_0) {
			return visitor.visitF3_0(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class F7_4Context extends ParserRuleContext {
	public F4(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F4, 0); }
	public F5(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F5, 0); }
	public F6(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F6, 0); }
	public F7(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F7, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_f7_4; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterF7_4) {
			listener.enterF7_4(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitF7_4) {
			listener.exitF7_4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitF7_4) {
			return visitor.visitF7_4(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class F11_8Context extends ParserRuleContext {
	public F8(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F8, 0); }
	public F9(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F9, 0); }
	public F10(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F10, 0); }
	public F11(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F11, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_f11_8; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterF11_8) {
			listener.enterF11_8(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitF11_8) {
			listener.exitF11_8(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitF11_8) {
			return visitor.visitF11_8(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class F15_12Context extends ParserRuleContext {
	public F12(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F12, 0); }
	public F13(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F13, 0); }
	public F14(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F14, 0); }
	public F15(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.F15, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_f15_12; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterF15_12) {
			listener.enterF15_12(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitF15_12) {
			listener.exitF15_12(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitF15_12) {
			return visitor.visitF15_12(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddrContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.ID, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_addr; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterAddr) {
			listener.enterAddr(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitAddr) {
			listener.exitAddr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitAddr) {
			return visitor.visitAddr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MrfContext extends ParserRuleContext {
	public MR0F(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MR0F, 0); }
	public MR1F(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MR1F, 0); }
	public MR2F(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MR2F, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mrf; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMrf) {
			listener.enterMrf(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMrf) {
			listener.exitMrf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMrf) {
			return visitor.visitMrf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MrbContext extends ParserRuleContext {
	public MR0B(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MR0B, 0); }
	public MR1B(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MR1B, 0); }
	public MR2B(): TerminalNode | undefined { return this.tryGetToken(SHARCParser.MR2B, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHARCParser.RULE_mrb; }
	// @Override
	public enterRule(listener: SHARCParserListener): void {
		if (listener.enterMrb) {
			listener.enterMrb(this);
		}
	}
	// @Override
	public exitRule(listener: SHARCParserListener): void {
		if (listener.exitMrb) {
			listener.exitMrb(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SHARCParserVisitor<Result>): Result {
		if (visitor.visitMrb) {
			return visitor.visitMrb(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


