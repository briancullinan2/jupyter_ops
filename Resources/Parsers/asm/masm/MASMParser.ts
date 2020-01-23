// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/masm/MASM.g4 by ANTLR 4.7.3-SNAPSHOT

 
 	 package com.Ostermiller.Syntax;
 	 

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

import { MASMListener } from "./MASMListener";

export class MASMParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly Identifier = 10;
	public static readonly DS = 11;
	public static readonly ES = 12;
	public static readonly CS = 13;
	public static readonly SS = 14;
	public static readonly GS = 15;
	public static readonly FS = 16;
	public static readonly AH = 17;
	public static readonly AL = 18;
	public static readonly AX = 19;
	public static readonly BH = 20;
	public static readonly BL = 21;
	public static readonly BX = 22;
	public static readonly CH = 23;
	public static readonly CL = 24;
	public static readonly CX = 25;
	public static readonly DH = 26;
	public static readonly DL = 27;
	public static readonly DX = 28;
	public static readonly SI = 29;
	public static readonly DI = 30;
	public static readonly SP = 31;
	public static readonly BP = 32;
	public static readonly EAX = 33;
	public static readonly EBX = 34;
	public static readonly ECX = 35;
	public static readonly EDX = 36;
	public static readonly ESI = 37;
	public static readonly EDI = 38;
	public static readonly ESP = 39;
	public static readonly EBP = 40;
	public static readonly MOV = 41;
	public static readonly CMP = 42;
	public static readonly TEST = 43;
	public static readonly PUSH = 44;
	public static readonly POP = 45;
	public static readonly IDIV = 46;
	public static readonly INC = 47;
	public static readonly DEC = 48;
	public static readonly NEG = 49;
	public static readonly MUL = 50;
	public static readonly DIV = 51;
	public static readonly IMUL = 52;
	public static readonly NOT = 53;
	public static readonly SETPO = 54;
	public static readonly SETAE = 55;
	public static readonly SETNLE = 56;
	public static readonly SETC = 57;
	public static readonly SETNO = 58;
	public static readonly SETNB = 59;
	public static readonly SETP = 60;
	public static readonly SETNGE = 61;
	public static readonly SETL = 62;
	public static readonly SETGE = 63;
	public static readonly SETPE = 64;
	public static readonly SETNL = 65;
	public static readonly SETNZ = 66;
	public static readonly SETNE = 67;
	public static readonly SETNC = 68;
	public static readonly SETBE = 69;
	public static readonly SETNP = 70;
	public static readonly SETNS = 71;
	public static readonly SETO = 72;
	public static readonly SETNA = 73;
	public static readonly SETNAE = 74;
	public static readonly SETZ = 75;
	public static readonly SETLE = 76;
	public static readonly SETNBE = 77;
	public static readonly SETS = 78;
	public static readonly SETE = 79;
	public static readonly SETB = 80;
	public static readonly SETA = 81;
	public static readonly SETG = 82;
	public static readonly SETNG = 83;
	public static readonly XCHG = 84;
	public static readonly POPAD = 85;
	public static readonly AAA = 86;
	public static readonly POPA = 87;
	public static readonly POPFD = 88;
	public static readonly CWD = 89;
	public static readonly LAHF = 90;
	public static readonly PUSHAD = 91;
	public static readonly PUSHF = 92;
	public static readonly AAS = 93;
	public static readonly BSWAP = 94;
	public static readonly PUSHFD = 95;
	public static readonly CBW = 96;
	public static readonly CWDE = 97;
	public static readonly XLAT = 98;
	public static readonly AAM = 99;
	public static readonly AAD = 100;
	public static readonly CDQ = 101;
	public static readonly DAA = 102;
	public static readonly SAHF = 103;
	public static readonly DAS = 104;
	public static readonly INTO = 105;
	public static readonly IRET = 106;
	public static readonly CLC = 107;
	public static readonly STC = 108;
	public static readonly CMC = 109;
	public static readonly CLD = 110;
	public static readonly STD = 111;
	public static readonly CLI = 112;
	public static readonly STI = 113;
	public static readonly MOVSB = 114;
	public static readonly MOVSW = 115;
	public static readonly MOVSD = 116;
	public static readonly LODS = 117;
	public static readonly LODSB = 118;
	public static readonly LODSW = 119;
	public static readonly LODSD = 120;
	public static readonly STOS = 121;
	public static readonly STOSB = 122;
	public static readonly STOSW = 123;
	public static readonly SOTSD = 124;
	public static readonly SCAS = 125;
	public static readonly SCASB = 126;
	public static readonly SCASW = 127;
	public static readonly SCASD = 128;
	public static readonly CMPS = 129;
	public static readonly CMPSB = 130;
	public static readonly CMPSW = 131;
	public static readonly CMPSD = 132;
	public static readonly INSB = 133;
	public static readonly INSW = 134;
	public static readonly INSD = 135;
	public static readonly OUTSB = 136;
	public static readonly OUTSW = 137;
	public static readonly OUTSD = 138;
	public static readonly ADC = 139;
	public static readonly ADD = 140;
	public static readonly SUB = 141;
	public static readonly CBB = 142;
	public static readonly XOR = 143;
	public static readonly OR = 144;
	public static readonly JNBE = 145;
	public static readonly JNZ = 146;
	public static readonly JPO = 147;
	public static readonly JZ = 148;
	public static readonly JS = 149;
	public static readonly LOOPNZ = 150;
	public static readonly JGE = 151;
	public static readonly JB = 152;
	public static readonly JNB = 153;
	public static readonly JO = 154;
	public static readonly JP = 155;
	public static readonly JNO = 156;
	public static readonly JNL = 157;
	public static readonly JNAE = 158;
	public static readonly LOOPZ = 159;
	public static readonly JMP = 160;
	public static readonly JNP = 161;
	public static readonly LOOP = 162;
	public static readonly JL = 163;
	public static readonly JCXZ = 164;
	public static readonly JAE = 165;
	public static readonly JNGE = 166;
	public static readonly JA = 167;
	public static readonly LOOPNE = 168;
	public static readonly LOOPE = 169;
	public static readonly JG = 170;
	public static readonly JNLE = 171;
	public static readonly JE = 172;
	public static readonly JNC = 173;
	public static readonly JC = 174;
	public static readonly JNA = 175;
	public static readonly JBE = 176;
	public static readonly JLE = 177;
	public static readonly JPE = 178;
	public static readonly JNS = 179;
	public static readonly JECXZ = 180;
	public static readonly JNG = 181;
	public static readonly MOVZX = 182;
	public static readonly BSF = 183;
	public static readonly BSR = 184;
	public static readonly LES = 185;
	public static readonly LEA = 186;
	public static readonly LDS = 187;
	public static readonly INS = 188;
	public static readonly OUTS = 189;
	public static readonly XADD = 190;
	public static readonly CMPXCHG = 191;
	public static readonly SHL = 192;
	public static readonly SHR = 193;
	public static readonly ROR = 194;
	public static readonly ROL = 195;
	public static readonly RCL = 196;
	public static readonly SAL = 197;
	public static readonly RCR = 198;
	public static readonly SAR = 199;
	public static readonly SHRD = 200;
	public static readonly SHLD = 201;
	public static readonly BTR = 202;
	public static readonly BT = 203;
	public static readonly BTC = 204;
	public static readonly CALL = 205;
	public static readonly INT = 206;
	public static readonly RETN = 207;
	public static readonly RET = 208;
	public static readonly RETF = 209;
	public static readonly IN = 210;
	public static readonly OUT = 211;
	public static readonly REP = 212;
	public static readonly REPE = 213;
	public static readonly REPZ = 214;
	public static readonly REPNE = 215;
	public static readonly REPNZ = 216;
	public static readonly ALPHA = 217;
	public static readonly CONST = 218;
	public static readonly CREF = 219;
	public static readonly XCREF = 220;
	public static readonly DATA = 221;
	public static readonly DATA2 = 222;
	public static readonly DOSSEG = 223;
	public static readonly ERR = 224;
	public static readonly ERR1 = 225;
	public static readonly ERR2 = 226;
	public static readonly ERRE = 227;
	public static readonly ERRNZ = 228;
	public static readonly ERRDEF = 229;
	public static readonly ERRNDEF = 230;
	public static readonly ERRB = 231;
	public static readonly ERRNB = 232;
	public static readonly ERRIDN = 233;
	public static readonly ERRDIF = 234;
	public static readonly EVEN = 235;
	public static readonly LIST = 236;
	public static readonly WIDTH = 237;
	public static readonly MASK = 238;
	public static readonly SEQ = 239;
	public static readonly XLIST = 240;
	public static readonly EXIT = 241;
	public static readonly MODEL = 242;
	public static readonly BYTE = 243;
	public static readonly SBYTE = 244;
	public static readonly DB = 245;
	public static readonly WORD = 246;
	public static readonly SWORD = 247;
	public static readonly DW = 248;
	public static readonly DWORD = 249;
	public static readonly SDWORD = 250;
	public static readonly DD = 251;
	public static readonly FWORD = 252;
	public static readonly DF = 253;
	public static readonly QWORD = 254;
	public static readonly DQ = 255;
	public static readonly TBYTE = 256;
	public static readonly DT = 257;
	public static readonly REAL4 = 258;
	public static readonly REAL8 = 259;
	public static readonly REAL = 260;
	public static readonly FAR = 261;
	public static readonly NEAR = 262;
	public static readonly PROC = 263;
	public static readonly QUESTION = 264;
	public static readonly TIMES = 265;
	public static readonly Hexnum = 266;
	public static readonly Integer = 267;
	public static readonly Octalnum = 268;
	public static readonly FloatingPointLiteral = 269;
	public static readonly String = 270;
	public static readonly Etiqueta = 271;
	public static readonly Separator = 272;
	public static readonly WS = 273;
	public static readonly LINE_COMMENT = 274;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_segments = 1;
	public static readonly RULE_proc = 2;
	public static readonly RULE_code = 3;
	public static readonly RULE_binary_exp1 = 4;
	public static readonly RULE_unuary_exp1 = 5;
	public static readonly RULE_unuary_exp2 = 6;
	public static readonly RULE_binary_exp2 = 7;
	public static readonly RULE_notarguments = 8;
	public static readonly RULE_binary_exp3 = 9;
	public static readonly RULE_unuary_exp3 = 10;
	public static readonly RULE_binary_exp4 = 11;
	public static readonly RULE_binary_exp5 = 12;
	public static readonly RULE_binary_exp6 = 13;
	public static readonly RULE_binary_exp7 = 14;
	public static readonly RULE_binary_exp8 = 15;
	public static readonly RULE_binary_exp9 = 16;
	public static readonly RULE_unuary_exp4 = 17;
	public static readonly RULE_unuary_exp5 = 18;
	public static readonly RULE_binary_exp10 = 19;
	public static readonly RULE_binary_exp11 = 20;
	public static readonly RULE_binary_exp12 = 21;
	public static readonly RULE_directive_exp1 = 22;
	public static readonly RULE_variabledeclaration = 23;
	public static readonly RULE_memory = 24;
	public static readonly RULE_segmentos = 25;
	public static readonly RULE_register = 26;
	public static readonly RULE_o = 27;
	public static readonly RULE_op = 28;
	public static readonly RULE_ope = 29;
	public static readonly RULE_oper = 30;
	public static readonly RULE_opera = 31;
	public static readonly RULE_operat = 32;
	public static readonly RULE_operato = 33;
	public static readonly RULE_operator = 34;
	public static readonly RULE_l = 35;
	public static readonly RULE_x = 36;
	public static readonly RULE_s = 37;
	public static readonly RULE_sh = 38;
	public static readonly RULE_b = 39;
	public static readonly RULE_call = 40;
	public static readonly RULE_interruption = 41;
	public static readonly RULE_in = 42;
	public static readonly RULE_out = 43;
	public static readonly RULE_re = 44;
	public static readonly RULE_directives = 45;
	public static readonly RULE_ty = 46;
	public static readonly RULE_question = 47;
	public static readonly RULE_time = 48;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "segments", "proc", "code", "binary_exp1", "unuary_exp1", 
		"unuary_exp2", "binary_exp2", "notarguments", "binary_exp3", "unuary_exp3", 
		"binary_exp4", "binary_exp5", "binary_exp6", "binary_exp7", "binary_exp8", 
		"binary_exp9", "unuary_exp4", "unuary_exp5", "binary_exp10", "binary_exp11", 
		"binary_exp12", "directive_exp1", "variabledeclaration", "memory", "segmentos", 
		"register", "o", "op", "ope", "oper", "opera", "operat", "operato", "operator", 
		"l", "x", "s", "sh", "b", "call", "interruption", "in", "out", "re", "directives", 
		"ty", "question", "time",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'end'", "'segments'", "'para'", "'public'", "'ends'", "'endp'", 
		"'['", "'+'", "']'", undefined, "'ds'", "'es'", "'cs'", "'ss'", "'gs'", 
		"'fs'", "'ah'", "'al'", "'ax'", "'bh'", "'bl'", "'bx'", "'ch'", "'cl'", 
		"'cx'", "'dh'", "'dl'", "'dx'", "'si'", "'di'", "'sp'", "'bp'", "'eax'", 
		"'ebx'", "'ecx'", "'edx'", "'esi'", "'edi'", "'esp'", "'ebp'", "'mov'", 
		"'cmp'", "'test'", "'push'", "'pop'", "'idiv'", "'inc'", "'dec'", "'neg'", 
		"'mul'", "'div'", "'imul'", "'not'", "'setpo'", "'setae'", "'setnle'", 
		"'setc'", "'setno'", "'setnb'", "'setp'", "'setnge'", "'setl'", "'setge'", 
		"'setpe'", "'setnl'", "'setnz'", "'setne'", "'setnc'", "'setbe'", "'setnp'", 
		"'setns'", "'seto'", "'setna'", "'setnae'", "'setz'", "'setle'", "'setnbe'", 
		"'sets'", "'sete'", "'setb'", "'seta'", "'setg'", "'setng'", "'xchg'", 
		"'popad'", "'aaa'", "'popa'", "'popfd'", "'cwd'", "'lahf'", "'pushad'", 
		"'pushf'", "'aas'", "'bswap'", "'pushfd'", "'cbw'", "'cwde'", "'xlat'", 
		"'aam'", "'aad'", "'cdq'", "'daa'", "'sahf'", "'das'", "'into'", "'iret'", 
		"'clc'", "'stc'", "'cmc'", "'cld'", "'std'", "'cli'", "'sti'", "'movsb'", 
		"'movsw'", "'movsd'", "'lods'", "'lodsb'", "'lodsw'", "'lodsd'", "'stos'", 
		"'stosb'", "'stosw'", "'sotsd'", "'scas'", "'scasb'", "'scasw'", "'scasd'", 
		"'cmps'", "'cmpsb'", "'cmpsw'", "'cmpsd'", "'insb'", "'insw'", "'insd'", 
		"'outsb'", "'outsw'", "'outsd'", "'adc'", "'add'", "'sub'", "'cbb'", "'xor'", 
		"'or'", "'jnbe'", "'jnz'", "'jpo'", "'jz'", "'js'", "'loopnz'", "'jge'", 
		"'jb'", "'jnb'", "'jo'", "'jp'", "'jno'", "'jnl'", "'jnae'", "'loopz'", 
		"'jmp'", "'jnp'", "'loop'", "'jl'", "'jcxz'", "'jae'", "'jnge'", "'ja'", 
		"'loopne'", "'loope'", "'jg'", "'jnle'", "'je'", "'jnc'", "'jc'", "'jna'", 
		"'jbe'", "'jle'", "'jpe'", "'jns'", "'jecxz'", "'jng'", "'movzx'", "'bsf'", 
		"'bsr'", "'les'", "'lea'", "'lds'", "'ins'", "'outs'", "'xadd'", "'cmpxchg'", 
		"'shl'", "'shr'", "'ror'", "'rol'", "'rcl'", "'sal'", "'rcr'", "'sar'", 
		"'shrd'", "'shld'", "'btr'", "'bt'", "'btc'", "'call'", "'int'", "'retn'", 
		"'ret'", "'retf'", "'in'", "'out'", "'rep'", "'repe'", "'repz'", "'repne'", 
		"'repnz'", "'.alpha'", "'.const'", "'.cref'", "'.xcref'", "'data'", "'data?'", 
		"'dosseg'", "'.err'", "'.err1'", "'.err2'", "'.erre'", "'.errnz'", "'.errdef'", 
		"'.errndef'", "'.errb'", "'.errnb'", "'.erridn[i]'", "'.errdif[i]'", "'even'", 
		"'.list'", "'width'", "'mask'", "'.seq'", "'.xlist'", "'.exit'", "'.model'", 
		"'byte'", "'sbyte'", "'db'", "'word'", "'sword'", "'dw'", "'dword'", "'sdword'", 
		"'dd'", "'fword'", "'df'", "'qword'", "'dq'", "'tbyte'", "'dt'", "'real4'", 
		"'real8'", "'real'", "'far'", "'near'", "'proc'", "'?'", "'times'", undefined, 
		undefined, undefined, undefined, undefined, undefined, "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "Identifier", "DS", "ES", "CS", "SS", 
		"GS", "FS", "AH", "AL", "AX", "BH", "BL", "BX", "CH", "CL", "CX", "DH", 
		"DL", "DX", "SI", "DI", "SP", "BP", "EAX", "EBX", "ECX", "EDX", "ESI", 
		"EDI", "ESP", "EBP", "MOV", "CMP", "TEST", "PUSH", "POP", "IDIV", "INC", 
		"DEC", "NEG", "MUL", "DIV", "IMUL", "NOT", "SETPO", "SETAE", "SETNLE", 
		"SETC", "SETNO", "SETNB", "SETP", "SETNGE", "SETL", "SETGE", "SETPE", 
		"SETNL", "SETNZ", "SETNE", "SETNC", "SETBE", "SETNP", "SETNS", "SETO", 
		"SETNA", "SETNAE", "SETZ", "SETLE", "SETNBE", "SETS", "SETE", "SETB", 
		"SETA", "SETG", "SETNG", "XCHG", "POPAD", "AAA", "POPA", "POPFD", "CWD", 
		"LAHF", "PUSHAD", "PUSHF", "AAS", "BSWAP", "PUSHFD", "CBW", "CWDE", "XLAT", 
		"AAM", "AAD", "CDQ", "DAA", "SAHF", "DAS", "INTO", "IRET", "CLC", "STC", 
		"CMC", "CLD", "STD", "CLI", "STI", "MOVSB", "MOVSW", "MOVSD", "LODS", 
		"LODSB", "LODSW", "LODSD", "STOS", "STOSB", "STOSW", "SOTSD", "SCAS", 
		"SCASB", "SCASW", "SCASD", "CMPS", "CMPSB", "CMPSW", "CMPSD", "INSB", 
		"INSW", "INSD", "OUTSB", "OUTSW", "OUTSD", "ADC", "ADD", "SUB", "CBB", 
		"XOR", "OR", "JNBE", "JNZ", "JPO", "JZ", "JS", "LOOPNZ", "JGE", "JB", 
		"JNB", "JO", "JP", "JNO", "JNL", "JNAE", "LOOPZ", "JMP", "JNP", "LOOP", 
		"JL", "JCXZ", "JAE", "JNGE", "JA", "LOOPNE", "LOOPE", "JG", "JNLE", "JE", 
		"JNC", "JC", "JNA", "JBE", "JLE", "JPE", "JNS", "JECXZ", "JNG", "MOVZX", 
		"BSF", "BSR", "LES", "LEA", "LDS", "INS", "OUTS", "XADD", "CMPXCHG", "SHL", 
		"SHR", "ROR", "ROL", "RCL", "SAL", "RCR", "SAR", "SHRD", "SHLD", "BTR", 
		"BT", "BTC", "CALL", "INT", "RETN", "RET", "RETF", "IN", "OUT", "REP", 
		"REPE", "REPZ", "REPNE", "REPNZ", "ALPHA", "CONST", "CREF", "XCREF", "DATA", 
		"DATA2", "DOSSEG", "ERR", "ERR1", "ERR2", "ERRE", "ERRNZ", "ERRDEF", "ERRNDEF", 
		"ERRB", "ERRNB", "ERRIDN", "ERRDIF", "EVEN", "LIST", "WIDTH", "MASK", 
		"SEQ", "XLIST", "EXIT", "MODEL", "BYTE", "SBYTE", "DB", "WORD", "SWORD", 
		"DW", "DWORD", "SDWORD", "DD", "FWORD", "DF", "QWORD", "DQ", "TBYTE", 
		"DT", "REAL4", "REAL8", "REAL", "FAR", "NEAR", "PROC", "QUESTION", "TIMES", 
		"Hexnum", "Integer", "Octalnum", "FloatingPointLiteral", "String", "Etiqueta", 
		"Separator", "WS", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MASMParser._LITERAL_NAMES, MASMParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MASMParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MASM.g4"; }

	// @Override
	public get ruleNames(): string[] { return MASMParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MASMParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MASMParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MASMParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MASMParser.Identifier || ((((_la - 217)) & ~0x1F) === 0 && ((1 << (_la - 217)) & ((1 << (MASMParser.ALPHA - 217)) | (1 << (MASMParser.CONST - 217)) | (1 << (MASMParser.CREF - 217)) | (1 << (MASMParser.XCREF - 217)) | (1 << (MASMParser.DATA - 217)) | (1 << (MASMParser.DATA2 - 217)) | (1 << (MASMParser.DOSSEG - 217)) | (1 << (MASMParser.ERR - 217)) | (1 << (MASMParser.ERR1 - 217)) | (1 << (MASMParser.ERR2 - 217)) | (1 << (MASMParser.ERRE - 217)) | (1 << (MASMParser.ERRNZ - 217)) | (1 << (MASMParser.ERRDEF - 217)) | (1 << (MASMParser.ERRNDEF - 217)) | (1 << (MASMParser.ERRB - 217)) | (1 << (MASMParser.ERRNB - 217)) | (1 << (MASMParser.ERRIDN - 217)) | (1 << (MASMParser.ERRDIF - 217)) | (1 << (MASMParser.EVEN - 217)) | (1 << (MASMParser.LIST - 217)) | (1 << (MASMParser.WIDTH - 217)) | (1 << (MASMParser.MASK - 217)) | (1 << (MASMParser.SEQ - 217)) | (1 << (MASMParser.XLIST - 217)) | (1 << (MASMParser.EXIT - 217)) | (1 << (MASMParser.MODEL - 217)))) !== 0)) {
				{
				this.state = 100;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MASMParser.Identifier:
					{
					this.state = 98;
					this.segments();
					}
					break;
				case MASMParser.ALPHA:
				case MASMParser.CONST:
				case MASMParser.CREF:
				case MASMParser.XCREF:
				case MASMParser.DATA:
				case MASMParser.DATA2:
				case MASMParser.DOSSEG:
				case MASMParser.ERR:
				case MASMParser.ERR1:
				case MASMParser.ERR2:
				case MASMParser.ERRE:
				case MASMParser.ERRNZ:
				case MASMParser.ERRDEF:
				case MASMParser.ERRNDEF:
				case MASMParser.ERRB:
				case MASMParser.ERRNB:
				case MASMParser.ERRIDN:
				case MASMParser.ERRDIF:
				case MASMParser.EVEN:
				case MASMParser.LIST:
				case MASMParser.WIDTH:
				case MASMParser.MASK:
				case MASMParser.SEQ:
				case MASMParser.XLIST:
				case MASMParser.EXIT:
				case MASMParser.MODEL:
					{
					this.state = 99;
					this.directive_exp1();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 105;
			this.match(MASMParser.T__0);
			this.state = 106;
			this.match(MASMParser.Identifier);
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
	public segments(): SegmentsContext {
		let _localctx: SegmentsContext = new SegmentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MASMParser.RULE_segments);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.match(MASMParser.Identifier);
			this.state = 109;
			this.match(MASMParser.T__1);
			this.state = 110;
			this.match(MASMParser.T__2);
			this.state = 111;
			this.match(MASMParser.T__3);
			this.state = 116;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 114;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						this.state = 112;
						this.code();
						}
						break;

					case 2:
						{
						this.state = 113;
						this.proc();
						}
						break;
					}
					}
				}
				this.state = 118;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 119;
			this.match(MASMParser.Identifier);
			this.state = 120;
			this.match(MASMParser.T__4);
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
	public proc(): ProcContext {
		let _localctx: ProcContext = new ProcContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MASMParser.RULE_proc);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(MASMParser.Identifier);
			this.state = 123;
			this.match(MASMParser.PROC);
			this.state = 127;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 124;
					this.code();
					}
					}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 130;
			this.match(MASMParser.RET);
			this.state = 131;
			this.match(MASMParser.Identifier);
			this.state = 132;
			this.match(MASMParser.T__5);
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
	public code(): CodeContext {
		let _localctx: CodeContext = new CodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MASMParser.RULE_code);
		try {
			this.state = 154;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.MOV:
			case MASMParser.CMP:
			case MASMParser.TEST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 134;
				this.binary_exp1();
				}
				break;
			case MASMParser.IN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 135;
				this.binary_exp10();
				}
				break;
			case MASMParser.OUT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 136;
				this.binary_exp11();
				}
				break;
			case MASMParser.REP:
			case MASMParser.REPE:
			case MASMParser.REPZ:
			case MASMParser.REPNE:
			case MASMParser.REPNZ:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 137;
				this.binary_exp12();
				}
				break;
			case MASMParser.XCHG:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 138;
				this.binary_exp2();
				}
				break;
			case MASMParser.ADC:
			case MASMParser.ADD:
			case MASMParser.SUB:
			case MASMParser.CBB:
			case MASMParser.XOR:
			case MASMParser.OR:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 139;
				this.binary_exp3();
				}
				break;
			case MASMParser.MOVZX:
			case MASMParser.BSF:
			case MASMParser.BSR:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 140;
				this.binary_exp4();
				}
				break;
			case MASMParser.LES:
			case MASMParser.LEA:
			case MASMParser.LDS:
			case MASMParser.INS:
			case MASMParser.OUTS:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 141;
				this.binary_exp5();
				}
				break;
			case MASMParser.XADD:
			case MASMParser.CMPXCHG:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 142;
				this.binary_exp6();
				}
				break;
			case MASMParser.SHL:
			case MASMParser.SHR:
			case MASMParser.ROR:
			case MASMParser.ROL:
			case MASMParser.RCL:
			case MASMParser.SAL:
			case MASMParser.RCR:
			case MASMParser.SAR:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 143;
				this.binary_exp7();
				}
				break;
			case MASMParser.SHRD:
			case MASMParser.SHLD:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 144;
				this.binary_exp8();
				}
				break;
			case MASMParser.BTR:
			case MASMParser.BT:
			case MASMParser.BTC:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 145;
				this.binary_exp9();
				}
				break;
			case MASMParser.PUSH:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 146;
				this.unuary_exp1();
				}
				break;
			case MASMParser.POP:
			case MASMParser.IDIV:
			case MASMParser.INC:
			case MASMParser.DEC:
			case MASMParser.NEG:
			case MASMParser.MUL:
			case MASMParser.DIV:
			case MASMParser.IMUL:
			case MASMParser.NOT:
			case MASMParser.SETPO:
			case MASMParser.SETAE:
			case MASMParser.SETNLE:
			case MASMParser.SETC:
			case MASMParser.SETNO:
			case MASMParser.SETNB:
			case MASMParser.SETP:
			case MASMParser.SETNGE:
			case MASMParser.SETL:
			case MASMParser.SETGE:
			case MASMParser.SETPE:
			case MASMParser.SETNL:
			case MASMParser.SETNZ:
			case MASMParser.SETNE:
			case MASMParser.SETNC:
			case MASMParser.SETBE:
			case MASMParser.SETNP:
			case MASMParser.SETNS:
			case MASMParser.SETO:
			case MASMParser.SETNA:
			case MASMParser.SETNAE:
			case MASMParser.SETZ:
			case MASMParser.SETLE:
			case MASMParser.SETNBE:
			case MASMParser.SETS:
			case MASMParser.SETE:
			case MASMParser.SETB:
			case MASMParser.SETA:
			case MASMParser.SETG:
			case MASMParser.SETNG:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 147;
				this.unuary_exp2();
				}
				break;
			case MASMParser.JNBE:
			case MASMParser.JNZ:
			case MASMParser.JPO:
			case MASMParser.JZ:
			case MASMParser.JS:
			case MASMParser.LOOPNZ:
			case MASMParser.JGE:
			case MASMParser.JB:
			case MASMParser.JNB:
			case MASMParser.JO:
			case MASMParser.JP:
			case MASMParser.JNO:
			case MASMParser.JNL:
			case MASMParser.JNAE:
			case MASMParser.LOOPZ:
			case MASMParser.JMP:
			case MASMParser.JNP:
			case MASMParser.LOOP:
			case MASMParser.JL:
			case MASMParser.JCXZ:
			case MASMParser.JAE:
			case MASMParser.JNGE:
			case MASMParser.JA:
			case MASMParser.LOOPNE:
			case MASMParser.LOOPE:
			case MASMParser.JG:
			case MASMParser.JNLE:
			case MASMParser.JE:
			case MASMParser.JNC:
			case MASMParser.JC:
			case MASMParser.JNA:
			case MASMParser.JBE:
			case MASMParser.JLE:
			case MASMParser.JPE:
			case MASMParser.JNS:
			case MASMParser.JECXZ:
			case MASMParser.JNG:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 148;
				this.unuary_exp3();
				}
				break;
			case MASMParser.CALL:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 149;
				this.unuary_exp4();
				}
				break;
			case MASMParser.INT:
			case MASMParser.RETN:
			case MASMParser.RET:
			case MASMParser.RETF:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 150;
				this.unuary_exp5();
				}
				break;
			case MASMParser.POPAD:
			case MASMParser.AAA:
			case MASMParser.POPA:
			case MASMParser.POPFD:
			case MASMParser.CWD:
			case MASMParser.LAHF:
			case MASMParser.PUSHAD:
			case MASMParser.PUSHF:
			case MASMParser.AAS:
			case MASMParser.BSWAP:
			case MASMParser.PUSHFD:
			case MASMParser.CBW:
			case MASMParser.CWDE:
			case MASMParser.XLAT:
			case MASMParser.AAM:
			case MASMParser.AAD:
			case MASMParser.CDQ:
			case MASMParser.DAA:
			case MASMParser.SAHF:
			case MASMParser.DAS:
			case MASMParser.INTO:
			case MASMParser.IRET:
			case MASMParser.CLC:
			case MASMParser.STC:
			case MASMParser.CMC:
			case MASMParser.CLD:
			case MASMParser.STD:
			case MASMParser.CLI:
			case MASMParser.STI:
			case MASMParser.MOVSB:
			case MASMParser.MOVSW:
			case MASMParser.MOVSD:
			case MASMParser.LODS:
			case MASMParser.LODSB:
			case MASMParser.LODSW:
			case MASMParser.LODSD:
			case MASMParser.STOS:
			case MASMParser.STOSB:
			case MASMParser.STOSW:
			case MASMParser.SOTSD:
			case MASMParser.SCAS:
			case MASMParser.SCASB:
			case MASMParser.SCASW:
			case MASMParser.SCASD:
			case MASMParser.CMPS:
			case MASMParser.CMPSB:
			case MASMParser.CMPSW:
			case MASMParser.CMPSD:
			case MASMParser.INSB:
			case MASMParser.INSW:
			case MASMParser.INSD:
			case MASMParser.OUTSB:
			case MASMParser.OUTSW:
			case MASMParser.OUTSD:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 151;
				this.notarguments();
				}
				break;
			case MASMParser.Identifier:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 152;
				this.variabledeclaration();
				}
				break;
			case MASMParser.ALPHA:
			case MASMParser.CONST:
			case MASMParser.CREF:
			case MASMParser.XCREF:
			case MASMParser.DATA:
			case MASMParser.DATA2:
			case MASMParser.DOSSEG:
			case MASMParser.ERR:
			case MASMParser.ERR1:
			case MASMParser.ERR2:
			case MASMParser.ERRE:
			case MASMParser.ERRNZ:
			case MASMParser.ERRDEF:
			case MASMParser.ERRNDEF:
			case MASMParser.ERRB:
			case MASMParser.ERRNB:
			case MASMParser.ERRIDN:
			case MASMParser.ERRDIF:
			case MASMParser.EVEN:
			case MASMParser.LIST:
			case MASMParser.WIDTH:
			case MASMParser.MASK:
			case MASMParser.SEQ:
			case MASMParser.XLIST:
			case MASMParser.EXIT:
			case MASMParser.MODEL:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 153;
				this.directive_exp1();
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
	public binary_exp1(): Binary_exp1Context {
		let _localctx: Binary_exp1Context = new Binary_exp1Context(this._ctx, this.state);
		this.enterRule(_localctx, 8, MASMParser.RULE_binary_exp1);
		try {
			this.state = 171;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 156;
				this.o();
				this.state = 157;
				this.register();
				this.state = 158;
				this.match(MASMParser.Separator);
				this.state = 162;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MASMParser.AH:
				case MASMParser.AL:
				case MASMParser.AX:
				case MASMParser.BH:
				case MASMParser.BL:
				case MASMParser.BX:
				case MASMParser.CH:
				case MASMParser.CL:
				case MASMParser.CX:
				case MASMParser.DH:
				case MASMParser.DL:
				case MASMParser.DX:
				case MASMParser.SI:
				case MASMParser.DI:
				case MASMParser.SP:
				case MASMParser.BP:
				case MASMParser.EAX:
				case MASMParser.EBX:
				case MASMParser.ECX:
				case MASMParser.EDX:
				case MASMParser.ESI:
				case MASMParser.EDI:
				case MASMParser.ESP:
				case MASMParser.EBP:
					{
					this.state = 159;
					this.register();
					}
					break;
				case MASMParser.Integer:
					{
					this.state = 160;
					this.match(MASMParser.Integer);
					}
					break;
				case MASMParser.T__6:
					{
					this.state = 161;
					this.memory();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 164;
				this.o();
				this.state = 165;
				this.memory();
				this.state = 166;
				this.match(MASMParser.Separator);
				this.state = 169;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MASMParser.AH:
				case MASMParser.AL:
				case MASMParser.AX:
				case MASMParser.BH:
				case MASMParser.BL:
				case MASMParser.BX:
				case MASMParser.CH:
				case MASMParser.CL:
				case MASMParser.CX:
				case MASMParser.DH:
				case MASMParser.DL:
				case MASMParser.DX:
				case MASMParser.SI:
				case MASMParser.DI:
				case MASMParser.SP:
				case MASMParser.BP:
				case MASMParser.EAX:
				case MASMParser.EBX:
				case MASMParser.ECX:
				case MASMParser.EDX:
				case MASMParser.ESI:
				case MASMParser.EDI:
				case MASMParser.ESP:
				case MASMParser.EBP:
					{
					this.state = 167;
					this.register();
					}
					break;
				case MASMParser.Integer:
					{
					this.state = 168;
					this.match(MASMParser.Integer);
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
	public unuary_exp1(): Unuary_exp1Context {
		let _localctx: Unuary_exp1Context = new Unuary_exp1Context(this._ctx, this.state);
		this.enterRule(_localctx, 10, MASMParser.RULE_unuary_exp1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this.op();
			this.state = 177;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.Integer:
				{
				this.state = 174;
				this.match(MASMParser.Integer);
				}
				break;
			case MASMParser.AH:
			case MASMParser.AL:
			case MASMParser.AX:
			case MASMParser.BH:
			case MASMParser.BL:
			case MASMParser.BX:
			case MASMParser.CH:
			case MASMParser.CL:
			case MASMParser.CX:
			case MASMParser.DH:
			case MASMParser.DL:
			case MASMParser.DX:
			case MASMParser.SI:
			case MASMParser.DI:
			case MASMParser.SP:
			case MASMParser.BP:
			case MASMParser.EAX:
			case MASMParser.EBX:
			case MASMParser.ECX:
			case MASMParser.EDX:
			case MASMParser.ESI:
			case MASMParser.EDI:
			case MASMParser.ESP:
			case MASMParser.EBP:
				{
				this.state = 175;
				this.register();
				}
				break;
			case MASMParser.T__6:
				{
				this.state = 176;
				this.memory();
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
	public unuary_exp2(): Unuary_exp2Context {
		let _localctx: Unuary_exp2Context = new Unuary_exp2Context(this._ctx, this.state);
		this.enterRule(_localctx, 12, MASMParser.RULE_unuary_exp2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.ope();
			this.state = 182;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.AH:
			case MASMParser.AL:
			case MASMParser.AX:
			case MASMParser.BH:
			case MASMParser.BL:
			case MASMParser.BX:
			case MASMParser.CH:
			case MASMParser.CL:
			case MASMParser.CX:
			case MASMParser.DH:
			case MASMParser.DL:
			case MASMParser.DX:
			case MASMParser.SI:
			case MASMParser.DI:
			case MASMParser.SP:
			case MASMParser.BP:
			case MASMParser.EAX:
			case MASMParser.EBX:
			case MASMParser.ECX:
			case MASMParser.EDX:
			case MASMParser.ESI:
			case MASMParser.EDI:
			case MASMParser.ESP:
			case MASMParser.EBP:
				{
				this.state = 180;
				this.register();
				}
				break;
			case MASMParser.T__6:
				{
				this.state = 181;
				this.memory();
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
	public binary_exp2(): Binary_exp2Context {
		let _localctx: Binary_exp2Context = new Binary_exp2Context(this._ctx, this.state);
		this.enterRule(_localctx, 14, MASMParser.RULE_binary_exp2);
		try {
			this.state = 196;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 184;
				this.oper();
				this.state = 185;
				this.register();
				this.state = 186;
				this.match(MASMParser.Separator);
				this.state = 189;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MASMParser.AH:
				case MASMParser.AL:
				case MASMParser.AX:
				case MASMParser.BH:
				case MASMParser.BL:
				case MASMParser.BX:
				case MASMParser.CH:
				case MASMParser.CL:
				case MASMParser.CX:
				case MASMParser.DH:
				case MASMParser.DL:
				case MASMParser.DX:
				case MASMParser.SI:
				case MASMParser.DI:
				case MASMParser.SP:
				case MASMParser.BP:
				case MASMParser.EAX:
				case MASMParser.EBX:
				case MASMParser.ECX:
				case MASMParser.EDX:
				case MASMParser.ESI:
				case MASMParser.EDI:
				case MASMParser.ESP:
				case MASMParser.EBP:
					{
					this.state = 187;
					this.register();
					}
					break;
				case MASMParser.T__6:
					{
					this.state = 188;
					this.memory();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 191;
				this.oper();
				this.state = 192;
				this.memory();
				this.state = 193;
				this.match(MASMParser.Separator);
				this.state = 194;
				this.register();
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
	public notarguments(): NotargumentsContext {
		let _localctx: NotargumentsContext = new NotargumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MASMParser.RULE_notarguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.opera();
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
	public binary_exp3(): Binary_exp3Context {
		let _localctx: Binary_exp3Context = new Binary_exp3Context(this._ctx, this.state);
		this.enterRule(_localctx, 18, MASMParser.RULE_binary_exp3);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.operat();
			this.state = 203;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.AH:
			case MASMParser.AL:
			case MASMParser.AX:
			case MASMParser.BH:
			case MASMParser.BL:
			case MASMParser.BX:
			case MASMParser.CH:
			case MASMParser.CL:
			case MASMParser.CX:
			case MASMParser.DH:
			case MASMParser.DL:
			case MASMParser.DX:
			case MASMParser.SI:
			case MASMParser.DI:
			case MASMParser.SP:
			case MASMParser.BP:
			case MASMParser.EAX:
			case MASMParser.EBX:
			case MASMParser.ECX:
			case MASMParser.EDX:
			case MASMParser.ESI:
			case MASMParser.EDI:
			case MASMParser.ESP:
			case MASMParser.EBP:
				{
				this.state = 201;
				this.register();
				}
				break;
			case MASMParser.T__6:
				{
				this.state = 202;
				this.memory();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 205;
			this.match(MASMParser.Separator);
			this.state = 209;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.AH:
			case MASMParser.AL:
			case MASMParser.AX:
			case MASMParser.BH:
			case MASMParser.BL:
			case MASMParser.BX:
			case MASMParser.CH:
			case MASMParser.CL:
			case MASMParser.CX:
			case MASMParser.DH:
			case MASMParser.DL:
			case MASMParser.DX:
			case MASMParser.SI:
			case MASMParser.DI:
			case MASMParser.SP:
			case MASMParser.BP:
			case MASMParser.EAX:
			case MASMParser.EBX:
			case MASMParser.ECX:
			case MASMParser.EDX:
			case MASMParser.ESI:
			case MASMParser.EDI:
			case MASMParser.ESP:
			case MASMParser.EBP:
				{
				this.state = 206;
				this.register();
				}
				break;
			case MASMParser.Integer:
				{
				this.state = 207;
				this.match(MASMParser.Integer);
				}
				break;
			case MASMParser.T__6:
				{
				this.state = 208;
				this.memory();
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
	public unuary_exp3(): Unuary_exp3Context {
		let _localctx: Unuary_exp3Context = new Unuary_exp3Context(this._ctx, this.state);
		this.enterRule(_localctx, 20, MASMParser.RULE_unuary_exp3);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.operato();
			this.state = 212;
			this.match(MASMParser.Identifier);
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
	public binary_exp4(): Binary_exp4Context {
		let _localctx: Binary_exp4Context = new Binary_exp4Context(this._ctx, this.state);
		this.enterRule(_localctx, 22, MASMParser.RULE_binary_exp4);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.operator();
			this.state = 215;
			this.register();
			this.state = 216;
			this.match(MASMParser.Separator);
			this.state = 219;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.AH:
			case MASMParser.AL:
			case MASMParser.AX:
			case MASMParser.BH:
			case MASMParser.BL:
			case MASMParser.BX:
			case MASMParser.CH:
			case MASMParser.CL:
			case MASMParser.CX:
			case MASMParser.DH:
			case MASMParser.DL:
			case MASMParser.DX:
			case MASMParser.SI:
			case MASMParser.DI:
			case MASMParser.SP:
			case MASMParser.BP:
			case MASMParser.EAX:
			case MASMParser.EBX:
			case MASMParser.ECX:
			case MASMParser.EDX:
			case MASMParser.ESI:
			case MASMParser.EDI:
			case MASMParser.ESP:
			case MASMParser.EBP:
				{
				this.state = 217;
				this.register();
				}
				break;
			case MASMParser.T__6:
				{
				this.state = 218;
				this.memory();
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
	public binary_exp5(): Binary_exp5Context {
		let _localctx: Binary_exp5Context = new Binary_exp5Context(this._ctx, this.state);
		this.enterRule(_localctx, 24, MASMParser.RULE_binary_exp5);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this.l();
			this.state = 222;
			this.register();
			this.state = 223;
			this.match(MASMParser.Separator);
			this.state = 224;
			this.memory();
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
	public binary_exp6(): Binary_exp6Context {
		let _localctx: Binary_exp6Context = new Binary_exp6Context(this._ctx, this.state);
		this.enterRule(_localctx, 26, MASMParser.RULE_binary_exp6);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.x();
			this.state = 229;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.AH:
			case MASMParser.AL:
			case MASMParser.AX:
			case MASMParser.BH:
			case MASMParser.BL:
			case MASMParser.BX:
			case MASMParser.CH:
			case MASMParser.CL:
			case MASMParser.CX:
			case MASMParser.DH:
			case MASMParser.DL:
			case MASMParser.DX:
			case MASMParser.SI:
			case MASMParser.DI:
			case MASMParser.SP:
			case MASMParser.BP:
			case MASMParser.EAX:
			case MASMParser.EBX:
			case MASMParser.ECX:
			case MASMParser.EDX:
			case MASMParser.ESI:
			case MASMParser.EDI:
			case MASMParser.ESP:
			case MASMParser.EBP:
				{
				this.state = 227;
				this.register();
				}
				break;
			case MASMParser.T__6:
				{
				this.state = 228;
				this.memory();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 231;
			this.match(MASMParser.Separator);
			this.state = 232;
			this.register();
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
	public binary_exp7(): Binary_exp7Context {
		let _localctx: Binary_exp7Context = new Binary_exp7Context(this._ctx, this.state);
		this.enterRule(_localctx, 28, MASMParser.RULE_binary_exp7);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.s();
			this.state = 237;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.AH:
			case MASMParser.AL:
			case MASMParser.AX:
			case MASMParser.BH:
			case MASMParser.BL:
			case MASMParser.BX:
			case MASMParser.CH:
			case MASMParser.CL:
			case MASMParser.CX:
			case MASMParser.DH:
			case MASMParser.DL:
			case MASMParser.DX:
			case MASMParser.SI:
			case MASMParser.DI:
			case MASMParser.SP:
			case MASMParser.BP:
			case MASMParser.EAX:
			case MASMParser.EBX:
			case MASMParser.ECX:
			case MASMParser.EDX:
			case MASMParser.ESI:
			case MASMParser.EDI:
			case MASMParser.ESP:
			case MASMParser.EBP:
				{
				this.state = 235;
				this.register();
				}
				break;
			case MASMParser.T__6:
				{
				this.state = 236;
				this.memory();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 239;
			this.match(MASMParser.Separator);
			this.state = 242;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.Integer:
				{
				this.state = 240;
				this.match(MASMParser.Integer);
				}
				break;
			case MASMParser.AH:
			case MASMParser.AL:
			case MASMParser.AX:
			case MASMParser.BH:
			case MASMParser.BL:
			case MASMParser.BX:
			case MASMParser.CH:
			case MASMParser.CL:
			case MASMParser.CX:
			case MASMParser.DH:
			case MASMParser.DL:
			case MASMParser.DX:
			case MASMParser.SI:
			case MASMParser.DI:
			case MASMParser.SP:
			case MASMParser.BP:
			case MASMParser.EAX:
			case MASMParser.EBX:
			case MASMParser.ECX:
			case MASMParser.EDX:
			case MASMParser.ESI:
			case MASMParser.EDI:
			case MASMParser.ESP:
			case MASMParser.EBP:
				{
				this.state = 241;
				this.register();
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
	public binary_exp8(): Binary_exp8Context {
		let _localctx: Binary_exp8Context = new Binary_exp8Context(this._ctx, this.state);
		this.enterRule(_localctx, 30, MASMParser.RULE_binary_exp8);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.sh();
			this.state = 247;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.AH:
			case MASMParser.AL:
			case MASMParser.AX:
			case MASMParser.BH:
			case MASMParser.BL:
			case MASMParser.BX:
			case MASMParser.CH:
			case MASMParser.CL:
			case MASMParser.CX:
			case MASMParser.DH:
			case MASMParser.DL:
			case MASMParser.DX:
			case MASMParser.SI:
			case MASMParser.DI:
			case MASMParser.SP:
			case MASMParser.BP:
			case MASMParser.EAX:
			case MASMParser.EBX:
			case MASMParser.ECX:
			case MASMParser.EDX:
			case MASMParser.ESI:
			case MASMParser.EDI:
			case MASMParser.ESP:
			case MASMParser.EBP:
				{
				this.state = 245;
				this.register();
				}
				break;
			case MASMParser.T__6:
				{
				this.state = 246;
				this.memory();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 249;
			this.match(MASMParser.Separator);
			this.state = 250;
			this.register();
			this.state = 251;
			this.match(MASMParser.Separator);
			this.state = 254;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.AH:
			case MASMParser.AL:
			case MASMParser.AX:
			case MASMParser.BH:
			case MASMParser.BL:
			case MASMParser.BX:
			case MASMParser.CH:
			case MASMParser.CL:
			case MASMParser.CX:
			case MASMParser.DH:
			case MASMParser.DL:
			case MASMParser.DX:
			case MASMParser.SI:
			case MASMParser.DI:
			case MASMParser.SP:
			case MASMParser.BP:
			case MASMParser.EAX:
			case MASMParser.EBX:
			case MASMParser.ECX:
			case MASMParser.EDX:
			case MASMParser.ESI:
			case MASMParser.EDI:
			case MASMParser.ESP:
			case MASMParser.EBP:
				{
				this.state = 252;
				this.register();
				}
				break;
			case MASMParser.Integer:
				{
				this.state = 253;
				this.match(MASMParser.Integer);
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
	public binary_exp9(): Binary_exp9Context {
		let _localctx: Binary_exp9Context = new Binary_exp9Context(this._ctx, this.state);
		this.enterRule(_localctx, 32, MASMParser.RULE_binary_exp9);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.b();
			this.state = 259;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.AH:
			case MASMParser.AL:
			case MASMParser.AX:
			case MASMParser.BH:
			case MASMParser.BL:
			case MASMParser.BX:
			case MASMParser.CH:
			case MASMParser.CL:
			case MASMParser.CX:
			case MASMParser.DH:
			case MASMParser.DL:
			case MASMParser.DX:
			case MASMParser.SI:
			case MASMParser.DI:
			case MASMParser.SP:
			case MASMParser.BP:
			case MASMParser.EAX:
			case MASMParser.EBX:
			case MASMParser.ECX:
			case MASMParser.EDX:
			case MASMParser.ESI:
			case MASMParser.EDI:
			case MASMParser.ESP:
			case MASMParser.EBP:
				{
				this.state = 257;
				this.register();
				}
				break;
			case MASMParser.T__6:
				{
				this.state = 258;
				this.memory();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 261;
			this.match(MASMParser.Separator);
			this.state = 264;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.AH:
			case MASMParser.AL:
			case MASMParser.AX:
			case MASMParser.BH:
			case MASMParser.BL:
			case MASMParser.BX:
			case MASMParser.CH:
			case MASMParser.CL:
			case MASMParser.CX:
			case MASMParser.DH:
			case MASMParser.DL:
			case MASMParser.DX:
			case MASMParser.SI:
			case MASMParser.DI:
			case MASMParser.SP:
			case MASMParser.BP:
			case MASMParser.EAX:
			case MASMParser.EBX:
			case MASMParser.ECX:
			case MASMParser.EDX:
			case MASMParser.ESI:
			case MASMParser.EDI:
			case MASMParser.ESP:
			case MASMParser.EBP:
				{
				this.state = 262;
				this.register();
				}
				break;
			case MASMParser.T__6:
				{
				this.state = 263;
				this.memory();
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
	public unuary_exp4(): Unuary_exp4Context {
		let _localctx: Unuary_exp4Context = new Unuary_exp4Context(this._ctx, this.state);
		this.enterRule(_localctx, 34, MASMParser.RULE_unuary_exp4);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.call();
			this.state = 270;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.AH:
			case MASMParser.AL:
			case MASMParser.AX:
			case MASMParser.BH:
			case MASMParser.BL:
			case MASMParser.BX:
			case MASMParser.CH:
			case MASMParser.CL:
			case MASMParser.CX:
			case MASMParser.DH:
			case MASMParser.DL:
			case MASMParser.DX:
			case MASMParser.SI:
			case MASMParser.DI:
			case MASMParser.SP:
			case MASMParser.BP:
			case MASMParser.EAX:
			case MASMParser.EBX:
			case MASMParser.ECX:
			case MASMParser.EDX:
			case MASMParser.ESI:
			case MASMParser.EDI:
			case MASMParser.ESP:
			case MASMParser.EBP:
				{
				this.state = 267;
				this.register();
				}
				break;
			case MASMParser.T__6:
				{
				this.state = 268;
				this.memory();
				}
				break;
			case MASMParser.Integer:
				{
				this.state = 269;
				this.match(MASMParser.Integer);
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
	public unuary_exp5(): Unuary_exp5Context {
		let _localctx: Unuary_exp5Context = new Unuary_exp5Context(this._ctx, this.state);
		this.enterRule(_localctx, 36, MASMParser.RULE_unuary_exp5);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.interruption();
			this.state = 273;
			this.match(MASMParser.Integer);
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
	public binary_exp10(): Binary_exp10Context {
		let _localctx: Binary_exp10Context = new Binary_exp10Context(this._ctx, this.state);
		this.enterRule(_localctx, 38, MASMParser.RULE_binary_exp10);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.in();
			this.state = 276;
			this.register();
			this.state = 277;
			this.match(MASMParser.Separator);
			this.state = 280;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.AH:
			case MASMParser.AL:
			case MASMParser.AX:
			case MASMParser.BH:
			case MASMParser.BL:
			case MASMParser.BX:
			case MASMParser.CH:
			case MASMParser.CL:
			case MASMParser.CX:
			case MASMParser.DH:
			case MASMParser.DL:
			case MASMParser.DX:
			case MASMParser.SI:
			case MASMParser.DI:
			case MASMParser.SP:
			case MASMParser.BP:
			case MASMParser.EAX:
			case MASMParser.EBX:
			case MASMParser.ECX:
			case MASMParser.EDX:
			case MASMParser.ESI:
			case MASMParser.EDI:
			case MASMParser.ESP:
			case MASMParser.EBP:
				{
				this.state = 278;
				this.register();
				}
				break;
			case MASMParser.Integer:
				{
				this.state = 279;
				this.match(MASMParser.Integer);
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
	public binary_exp11(): Binary_exp11Context {
		let _localctx: Binary_exp11Context = new Binary_exp11Context(this._ctx, this.state);
		this.enterRule(_localctx, 40, MASMParser.RULE_binary_exp11);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.out();
			this.state = 285;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.AH:
			case MASMParser.AL:
			case MASMParser.AX:
			case MASMParser.BH:
			case MASMParser.BL:
			case MASMParser.BX:
			case MASMParser.CH:
			case MASMParser.CL:
			case MASMParser.CX:
			case MASMParser.DH:
			case MASMParser.DL:
			case MASMParser.DX:
			case MASMParser.SI:
			case MASMParser.DI:
			case MASMParser.SP:
			case MASMParser.BP:
			case MASMParser.EAX:
			case MASMParser.EBX:
			case MASMParser.ECX:
			case MASMParser.EDX:
			case MASMParser.ESI:
			case MASMParser.EDI:
			case MASMParser.ESP:
			case MASMParser.EBP:
				{
				this.state = 283;
				this.register();
				}
				break;
			case MASMParser.Integer:
				{
				this.state = 284;
				this.match(MASMParser.Integer);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 287;
			this.match(MASMParser.Separator);
			this.state = 288;
			this.register();
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
	public binary_exp12(): Binary_exp12Context {
		let _localctx: Binary_exp12Context = new Binary_exp12Context(this._ctx, this.state);
		this.enterRule(_localctx, 42, MASMParser.RULE_binary_exp12);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this.re();
			this.state = 291;
			this.opera();
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
	public directive_exp1(): Directive_exp1Context {
		let _localctx: Directive_exp1Context = new Directive_exp1Context(this._ctx, this.state);
		this.enterRule(_localctx, 44, MASMParser.RULE_directive_exp1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 293;
				this.directives();
				this.state = 294;
				this.match(MASMParser.Identifier);
				}
				break;

			case 2:
				{
				this.state = 296;
				this.directives();
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
	public variabledeclaration(): VariabledeclarationContext {
		let _localctx: VariabledeclarationContext = new VariabledeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, MASMParser.RULE_variabledeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(MASMParser.Identifier);
			this.state = 300;
			this.ty();
			this.state = 304;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.QUESTION:
				{
				this.state = 301;
				this.question();
				}
				break;
			case MASMParser.String:
				{
				this.state = 302;
				this.match(MASMParser.String);
				}
				break;
			case MASMParser.Integer:
				{
				this.state = 303;
				this.match(MASMParser.Integer);
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
	public memory(): MemoryContext {
		let _localctx: MemoryContext = new MemoryContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, MASMParser.RULE_memory);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.match(MASMParser.T__6);
			this.state = 309;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MASMParser.AH:
			case MASMParser.AL:
			case MASMParser.AX:
			case MASMParser.BH:
			case MASMParser.BL:
			case MASMParser.BX:
			case MASMParser.CH:
			case MASMParser.CL:
			case MASMParser.CX:
			case MASMParser.DH:
			case MASMParser.DL:
			case MASMParser.DX:
			case MASMParser.SI:
			case MASMParser.DI:
			case MASMParser.SP:
			case MASMParser.BP:
			case MASMParser.EAX:
			case MASMParser.EBX:
			case MASMParser.ECX:
			case MASMParser.EDX:
			case MASMParser.ESI:
			case MASMParser.EDI:
			case MASMParser.ESP:
			case MASMParser.EBP:
				{
				this.state = 307;
				this.register();
				}
				break;
			case MASMParser.Identifier:
				{
				this.state = 308;
				this.match(MASMParser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MASMParser.T__7) {
				{
				this.state = 311;
				this.match(MASMParser.T__7);
				this.state = 320;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MASMParser.AH:
				case MASMParser.AL:
				case MASMParser.AX:
				case MASMParser.BH:
				case MASMParser.BL:
				case MASMParser.BX:
				case MASMParser.CH:
				case MASMParser.CL:
				case MASMParser.CX:
				case MASMParser.DH:
				case MASMParser.DL:
				case MASMParser.DX:
				case MASMParser.SI:
				case MASMParser.DI:
				case MASMParser.SP:
				case MASMParser.BP:
				case MASMParser.EAX:
				case MASMParser.EBX:
				case MASMParser.ECX:
				case MASMParser.EDX:
				case MASMParser.ESI:
				case MASMParser.EDI:
				case MASMParser.ESP:
				case MASMParser.EBP:
					{
					{
					this.state = 312;
					this.register();
					this.state = 315;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === MASMParser.T__7) {
						{
						this.state = 313;
						this.match(MASMParser.T__7);
						this.state = 314;
						_la = this._input.LA(1);
						if (!(((((_la - 266)) & ~0x1F) === 0 && ((1 << (_la - 266)) & ((1 << (MASMParser.Hexnum - 266)) | (1 << (MASMParser.Integer - 266)) | (1 << (MASMParser.Octalnum - 266)))) !== 0))) {
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
					break;
				case MASMParser.Integer:
					{
					this.state = 317;
					this.match(MASMParser.Integer);
					}
					break;
				case MASMParser.Hexnum:
					{
					this.state = 318;
					this.match(MASMParser.Hexnum);
					}
					break;
				case MASMParser.Octalnum:
					{
					this.state = 319;
					this.match(MASMParser.Octalnum);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			this.state = 324;
			this.match(MASMParser.T__8);
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
	public segmentos(): SegmentosContext {
		let _localctx: SegmentosContext = new SegmentosContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, MASMParser.RULE_segmentos);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MASMParser.DS) | (1 << MASMParser.ES) | (1 << MASMParser.CS) | (1 << MASMParser.SS) | (1 << MASMParser.GS) | (1 << MASMParser.FS))) !== 0))) {
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
	public register(): RegisterContext {
		let _localctx: RegisterContext = new RegisterContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, MASMParser.RULE_register);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			_la = this._input.LA(1);
			if (!(((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & ((1 << (MASMParser.AH - 17)) | (1 << (MASMParser.AL - 17)) | (1 << (MASMParser.AX - 17)) | (1 << (MASMParser.BH - 17)) | (1 << (MASMParser.BL - 17)) | (1 << (MASMParser.BX - 17)) | (1 << (MASMParser.CH - 17)) | (1 << (MASMParser.CL - 17)) | (1 << (MASMParser.CX - 17)) | (1 << (MASMParser.DH - 17)) | (1 << (MASMParser.DL - 17)) | (1 << (MASMParser.DX - 17)) | (1 << (MASMParser.SI - 17)) | (1 << (MASMParser.DI - 17)) | (1 << (MASMParser.SP - 17)) | (1 << (MASMParser.BP - 17)) | (1 << (MASMParser.EAX - 17)) | (1 << (MASMParser.EBX - 17)) | (1 << (MASMParser.ECX - 17)) | (1 << (MASMParser.EDX - 17)) | (1 << (MASMParser.ESI - 17)) | (1 << (MASMParser.EDI - 17)) | (1 << (MASMParser.ESP - 17)) | (1 << (MASMParser.EBP - 17)))) !== 0))) {
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
	public o(): OContext {
		let _localctx: OContext = new OContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, MASMParser.RULE_o);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			_la = this._input.LA(1);
			if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (MASMParser.MOV - 41)) | (1 << (MASMParser.CMP - 41)) | (1 << (MASMParser.TEST - 41)))) !== 0))) {
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
	public op(): OpContext {
		let _localctx: OpContext = new OpContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, MASMParser.RULE_op);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.match(MASMParser.PUSH);
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
	public ope(): OpeContext {
		let _localctx: OpeContext = new OpeContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, MASMParser.RULE_ope);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			_la = this._input.LA(1);
			if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (MASMParser.POP - 45)) | (1 << (MASMParser.IDIV - 45)) | (1 << (MASMParser.INC - 45)) | (1 << (MASMParser.DEC - 45)) | (1 << (MASMParser.NEG - 45)) | (1 << (MASMParser.MUL - 45)) | (1 << (MASMParser.DIV - 45)) | (1 << (MASMParser.IMUL - 45)) | (1 << (MASMParser.NOT - 45)) | (1 << (MASMParser.SETPO - 45)) | (1 << (MASMParser.SETAE - 45)) | (1 << (MASMParser.SETNLE - 45)) | (1 << (MASMParser.SETC - 45)) | (1 << (MASMParser.SETNO - 45)) | (1 << (MASMParser.SETNB - 45)) | (1 << (MASMParser.SETP - 45)) | (1 << (MASMParser.SETNGE - 45)) | (1 << (MASMParser.SETL - 45)) | (1 << (MASMParser.SETGE - 45)) | (1 << (MASMParser.SETPE - 45)) | (1 << (MASMParser.SETNL - 45)) | (1 << (MASMParser.SETNZ - 45)) | (1 << (MASMParser.SETNE - 45)) | (1 << (MASMParser.SETNC - 45)) | (1 << (MASMParser.SETBE - 45)) | (1 << (MASMParser.SETNP - 45)) | (1 << (MASMParser.SETNS - 45)) | (1 << (MASMParser.SETO - 45)) | (1 << (MASMParser.SETNA - 45)) | (1 << (MASMParser.SETNAE - 45)) | (1 << (MASMParser.SETZ - 45)) | (1 << (MASMParser.SETLE - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (MASMParser.SETNBE - 77)) | (1 << (MASMParser.SETS - 77)) | (1 << (MASMParser.SETE - 77)) | (1 << (MASMParser.SETB - 77)) | (1 << (MASMParser.SETA - 77)) | (1 << (MASMParser.SETG - 77)) | (1 << (MASMParser.SETNG - 77)))) !== 0))) {
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
	public oper(): OperContext {
		let _localctx: OperContext = new OperContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, MASMParser.RULE_oper);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			this.match(MASMParser.XCHG);
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
	public opera(): OperaContext {
		let _localctx: OperaContext = new OperaContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, MASMParser.RULE_opera);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 338;
			_la = this._input.LA(1);
			if (!(((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (MASMParser.POPAD - 85)) | (1 << (MASMParser.AAA - 85)) | (1 << (MASMParser.POPA - 85)) | (1 << (MASMParser.POPFD - 85)) | (1 << (MASMParser.CWD - 85)) | (1 << (MASMParser.LAHF - 85)) | (1 << (MASMParser.PUSHAD - 85)) | (1 << (MASMParser.PUSHF - 85)) | (1 << (MASMParser.AAS - 85)) | (1 << (MASMParser.BSWAP - 85)) | (1 << (MASMParser.PUSHFD - 85)) | (1 << (MASMParser.CBW - 85)) | (1 << (MASMParser.CWDE - 85)) | (1 << (MASMParser.XLAT - 85)) | (1 << (MASMParser.AAM - 85)) | (1 << (MASMParser.AAD - 85)) | (1 << (MASMParser.CDQ - 85)) | (1 << (MASMParser.DAA - 85)) | (1 << (MASMParser.SAHF - 85)) | (1 << (MASMParser.DAS - 85)) | (1 << (MASMParser.INTO - 85)) | (1 << (MASMParser.IRET - 85)) | (1 << (MASMParser.CLC - 85)) | (1 << (MASMParser.STC - 85)) | (1 << (MASMParser.CMC - 85)) | (1 << (MASMParser.CLD - 85)) | (1 << (MASMParser.STD - 85)) | (1 << (MASMParser.CLI - 85)) | (1 << (MASMParser.STI - 85)) | (1 << (MASMParser.MOVSB - 85)) | (1 << (MASMParser.MOVSW - 85)) | (1 << (MASMParser.MOVSD - 85)))) !== 0) || ((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & ((1 << (MASMParser.LODS - 117)) | (1 << (MASMParser.LODSB - 117)) | (1 << (MASMParser.LODSW - 117)) | (1 << (MASMParser.LODSD - 117)) | (1 << (MASMParser.STOS - 117)) | (1 << (MASMParser.STOSB - 117)) | (1 << (MASMParser.STOSW - 117)) | (1 << (MASMParser.SOTSD - 117)) | (1 << (MASMParser.SCAS - 117)) | (1 << (MASMParser.SCASB - 117)) | (1 << (MASMParser.SCASW - 117)) | (1 << (MASMParser.SCASD - 117)) | (1 << (MASMParser.CMPS - 117)) | (1 << (MASMParser.CMPSB - 117)) | (1 << (MASMParser.CMPSW - 117)) | (1 << (MASMParser.CMPSD - 117)) | (1 << (MASMParser.INSB - 117)) | (1 << (MASMParser.INSW - 117)) | (1 << (MASMParser.INSD - 117)) | (1 << (MASMParser.OUTSB - 117)) | (1 << (MASMParser.OUTSW - 117)) | (1 << (MASMParser.OUTSD - 117)))) !== 0))) {
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
	public operat(): OperatContext {
		let _localctx: OperatContext = new OperatContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, MASMParser.RULE_operat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			_la = this._input.LA(1);
			if (!(((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (MASMParser.ADC - 139)) | (1 << (MASMParser.ADD - 139)) | (1 << (MASMParser.SUB - 139)) | (1 << (MASMParser.CBB - 139)) | (1 << (MASMParser.XOR - 139)) | (1 << (MASMParser.OR - 139)))) !== 0))) {
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
	public operato(): OperatoContext {
		let _localctx: OperatoContext = new OperatoContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, MASMParser.RULE_operato);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			_la = this._input.LA(1);
			if (!(((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & ((1 << (MASMParser.JNBE - 145)) | (1 << (MASMParser.JNZ - 145)) | (1 << (MASMParser.JPO - 145)) | (1 << (MASMParser.JZ - 145)) | (1 << (MASMParser.JS - 145)) | (1 << (MASMParser.LOOPNZ - 145)) | (1 << (MASMParser.JGE - 145)) | (1 << (MASMParser.JB - 145)) | (1 << (MASMParser.JNB - 145)) | (1 << (MASMParser.JO - 145)) | (1 << (MASMParser.JP - 145)) | (1 << (MASMParser.JNO - 145)) | (1 << (MASMParser.JNL - 145)) | (1 << (MASMParser.JNAE - 145)) | (1 << (MASMParser.LOOPZ - 145)) | (1 << (MASMParser.JMP - 145)) | (1 << (MASMParser.JNP - 145)) | (1 << (MASMParser.LOOP - 145)) | (1 << (MASMParser.JL - 145)) | (1 << (MASMParser.JCXZ - 145)) | (1 << (MASMParser.JAE - 145)) | (1 << (MASMParser.JNGE - 145)) | (1 << (MASMParser.JA - 145)) | (1 << (MASMParser.LOOPNE - 145)) | (1 << (MASMParser.LOOPE - 145)) | (1 << (MASMParser.JG - 145)) | (1 << (MASMParser.JNLE - 145)) | (1 << (MASMParser.JE - 145)) | (1 << (MASMParser.JNC - 145)) | (1 << (MASMParser.JC - 145)) | (1 << (MASMParser.JNA - 145)) | (1 << (MASMParser.JBE - 145)))) !== 0) || ((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & ((1 << (MASMParser.JLE - 177)) | (1 << (MASMParser.JPE - 177)) | (1 << (MASMParser.JNS - 177)) | (1 << (MASMParser.JECXZ - 177)) | (1 << (MASMParser.JNG - 177)))) !== 0))) {
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, MASMParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			_la = this._input.LA(1);
			if (!(((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & ((1 << (MASMParser.MOVZX - 182)) | (1 << (MASMParser.BSF - 182)) | (1 << (MASMParser.BSR - 182)))) !== 0))) {
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
	public l(): LContext {
		let _localctx: LContext = new LContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, MASMParser.RULE_l);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			_la = this._input.LA(1);
			if (!(((((_la - 185)) & ~0x1F) === 0 && ((1 << (_la - 185)) & ((1 << (MASMParser.LES - 185)) | (1 << (MASMParser.LEA - 185)) | (1 << (MASMParser.LDS - 185)) | (1 << (MASMParser.INS - 185)) | (1 << (MASMParser.OUTS - 185)))) !== 0))) {
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
	public x(): XContext {
		let _localctx: XContext = new XContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, MASMParser.RULE_x);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			_la = this._input.LA(1);
			if (!(_la === MASMParser.XADD || _la === MASMParser.CMPXCHG)) {
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
	public s(): SContext {
		let _localctx: SContext = new SContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, MASMParser.RULE_s);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			_la = this._input.LA(1);
			if (!(((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & ((1 << (MASMParser.SHL - 192)) | (1 << (MASMParser.SHR - 192)) | (1 << (MASMParser.ROR - 192)) | (1 << (MASMParser.ROL - 192)) | (1 << (MASMParser.RCL - 192)) | (1 << (MASMParser.SAL - 192)) | (1 << (MASMParser.RCR - 192)) | (1 << (MASMParser.SAR - 192)))) !== 0))) {
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
	public sh(): ShContext {
		let _localctx: ShContext = new ShContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, MASMParser.RULE_sh);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			_la = this._input.LA(1);
			if (!(_la === MASMParser.SHRD || _la === MASMParser.SHLD)) {
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
	public b(): BContext {
		let _localctx: BContext = new BContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, MASMParser.RULE_b);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			_la = this._input.LA(1);
			if (!(((((_la - 202)) & ~0x1F) === 0 && ((1 << (_la - 202)) & ((1 << (MASMParser.BTR - 202)) | (1 << (MASMParser.BT - 202)) | (1 << (MASMParser.BTC - 202)))) !== 0))) {
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
	public call(): CallContext {
		let _localctx: CallContext = new CallContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, MASMParser.RULE_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this.match(MASMParser.CALL);
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
	public interruption(): InterruptionContext {
		let _localctx: InterruptionContext = new InterruptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, MASMParser.RULE_interruption);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			_la = this._input.LA(1);
			if (!(((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (MASMParser.INT - 206)) | (1 << (MASMParser.RETN - 206)) | (1 << (MASMParser.RET - 206)) | (1 << (MASMParser.RETF - 206)))) !== 0))) {
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
	public in(): InContext {
		let _localctx: InContext = new InContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, MASMParser.RULE_in);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.match(MASMParser.IN);
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
	public out(): OutContext {
		let _localctx: OutContext = new OutContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, MASMParser.RULE_out);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			this.match(MASMParser.OUT);
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
	public re(): ReContext {
		let _localctx: ReContext = new ReContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, MASMParser.RULE_re);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			_la = this._input.LA(1);
			if (!(((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & ((1 << (MASMParser.REP - 212)) | (1 << (MASMParser.REPE - 212)) | (1 << (MASMParser.REPZ - 212)) | (1 << (MASMParser.REPNE - 212)) | (1 << (MASMParser.REPNZ - 212)))) !== 0))) {
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
	public directives(): DirectivesContext {
		let _localctx: DirectivesContext = new DirectivesContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, MASMParser.RULE_directives);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			_la = this._input.LA(1);
			if (!(((((_la - 217)) & ~0x1F) === 0 && ((1 << (_la - 217)) & ((1 << (MASMParser.ALPHA - 217)) | (1 << (MASMParser.CONST - 217)) | (1 << (MASMParser.CREF - 217)) | (1 << (MASMParser.XCREF - 217)) | (1 << (MASMParser.DATA - 217)) | (1 << (MASMParser.DATA2 - 217)) | (1 << (MASMParser.DOSSEG - 217)) | (1 << (MASMParser.ERR - 217)) | (1 << (MASMParser.ERR1 - 217)) | (1 << (MASMParser.ERR2 - 217)) | (1 << (MASMParser.ERRE - 217)) | (1 << (MASMParser.ERRNZ - 217)) | (1 << (MASMParser.ERRDEF - 217)) | (1 << (MASMParser.ERRNDEF - 217)) | (1 << (MASMParser.ERRB - 217)) | (1 << (MASMParser.ERRNB - 217)) | (1 << (MASMParser.ERRIDN - 217)) | (1 << (MASMParser.ERRDIF - 217)) | (1 << (MASMParser.EVEN - 217)) | (1 << (MASMParser.LIST - 217)) | (1 << (MASMParser.WIDTH - 217)) | (1 << (MASMParser.MASK - 217)) | (1 << (MASMParser.SEQ - 217)) | (1 << (MASMParser.XLIST - 217)) | (1 << (MASMParser.EXIT - 217)) | (1 << (MASMParser.MODEL - 217)))) !== 0))) {
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
	public ty(): TyContext {
		let _localctx: TyContext = new TyContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, MASMParser.RULE_ty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			_la = this._input.LA(1);
			if (!(((((_la - 243)) & ~0x1F) === 0 && ((1 << (_la - 243)) & ((1 << (MASMParser.BYTE - 243)) | (1 << (MASMParser.SBYTE - 243)) | (1 << (MASMParser.DB - 243)) | (1 << (MASMParser.WORD - 243)) | (1 << (MASMParser.SWORD - 243)) | (1 << (MASMParser.DW - 243)) | (1 << (MASMParser.DWORD - 243)) | (1 << (MASMParser.SDWORD - 243)) | (1 << (MASMParser.DD - 243)) | (1 << (MASMParser.FWORD - 243)) | (1 << (MASMParser.DF - 243)) | (1 << (MASMParser.QWORD - 243)) | (1 << (MASMParser.DQ - 243)) | (1 << (MASMParser.TBYTE - 243)) | (1 << (MASMParser.DT - 243)) | (1 << (MASMParser.REAL4 - 243)) | (1 << (MASMParser.REAL8 - 243)) | (1 << (MASMParser.REAL - 243)) | (1 << (MASMParser.FAR - 243)) | (1 << (MASMParser.NEAR - 243)) | (1 << (MASMParser.PROC - 243)))) !== 0))) {
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
	public question(): QuestionContext {
		let _localctx: QuestionContext = new QuestionContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, MASMParser.RULE_question);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this.match(MASMParser.QUESTION);
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
	public time(): TimeContext {
		let _localctx: TimeContext = new TimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, MASMParser.RULE_time);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 372;
			this.match(MASMParser.TIMES);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u0114\u0179\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x03\x02\x03" +
		"\x02\x07\x02g\n\x02\f\x02\x0E\x02j\v\x02\x03\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03u\n\x03\f\x03\x0E\x03" +
		"x\v\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04\x80\n" +
		"\x04\f\x04\x0E\x04\x83\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05\x9D\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06\xA5\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xAC" +
		"\n\x06\x05\x06\xAE\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xB4\n" +
		"\x07\x03\b\x03\b\x03\b\x05\b\xB9\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05" +
		"\t\xC0\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xC7\n\t\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x05\v\xCE\n\v\x03\v\x03\v\x03\v\x03\v\x05\v\xD4\n\v\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xDE\n\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xE8\n\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x05\x10\xF0\n\x10\x03" +
		"\x10\x03\x10\x03\x10\x05\x10\xF5\n\x10\x03\x11\x03\x11\x03\x11\x05\x11" +
		"\xFA\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0101\n\x11" +
		"\x03\x12\x03\x12\x03\x12\x05\x12\u0106\n\x12\x03\x12\x03\x12\x03\x12\x05" +
		"\x12\u010B\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0111\n\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u011B" +
		"\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u0120\n\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u012C" +
		"\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0133\n\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x05\x1A\u0138\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x05\x1A\u013E\n\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0143\n\x1A\x05\x1A" +
		"\u0145\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03" +
		"\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03" +
		"#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03" +
		"*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x030\x030\x03" +
		"1\x031\x032\x032\x032\x02\x02\x023\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02\x02\x14\x03\x02\u010C\u010E" +
		"\x03\x02\r\x12\x03\x02\x13*\x03\x02+-\x03\x02/U\x03\x02W\x8C\x03\x02\x8D" +
		"\x92\x03\x02\x93\xB7\x03\x02\xB8\xBA\x03\x02\xBB\xBF\x03\x02\xC0\xC1\x03" +
		"\x02\xC2\xC9\x03\x02\xCA\xCB\x03\x02\xCC\xCE\x03\x02\xD0\xD3\x03\x02\xD6" +
		"\xDA\x03\x02\xDB\xF4\x03\x02\xF5\u0109\x02\u0180\x02h\x03\x02\x02\x02" +
		"\x04n\x03\x02\x02\x02\x06|\x03\x02\x02\x02\b\x9C\x03\x02\x02\x02\n\xAD" +
		"\x03\x02\x02\x02\f\xAF\x03\x02\x02\x02\x0E\xB5\x03\x02\x02\x02\x10\xC6" +
		"\x03\x02\x02\x02\x12\xC8\x03\x02\x02\x02\x14\xCA\x03\x02\x02\x02\x16\xD5" +
		"\x03\x02\x02\x02\x18\xD8\x03\x02\x02\x02\x1A\xDF\x03\x02\x02\x02\x1C\xE4" +
		"\x03\x02\x02\x02\x1E\xEC\x03\x02\x02\x02 \xF6\x03\x02\x02\x02\"\u0102" +
		"\x03\x02\x02\x02$\u010C\x03\x02\x02\x02&\u0112\x03\x02\x02\x02(\u0115" +
		"\x03\x02\x02\x02*\u011C\x03\x02\x02\x02,\u0124\x03\x02\x02\x02.\u012B" +
		"\x03\x02\x02\x020\u012D\x03\x02\x02\x022\u0134\x03\x02\x02\x024\u0148" +
		"\x03\x02\x02\x026\u014A\x03\x02\x02\x028\u014C\x03\x02\x02\x02:\u014E" +
		"\x03\x02\x02\x02<\u0150\x03\x02\x02\x02>\u0152\x03\x02\x02\x02@\u0154" +
		"\x03\x02\x02\x02B\u0156\x03\x02\x02\x02D\u0158\x03\x02\x02\x02F\u015A" +
		"\x03\x02\x02\x02H\u015C\x03\x02\x02\x02J\u015E\x03\x02\x02\x02L\u0160" +
		"\x03\x02\x02\x02N\u0162\x03\x02\x02\x02P\u0164\x03\x02\x02\x02R\u0166" +
		"\x03\x02\x02\x02T\u0168\x03\x02\x02\x02V\u016A\x03\x02\x02\x02X\u016C" +
		"\x03\x02\x02\x02Z\u016E\x03\x02\x02\x02\\\u0170\x03\x02\x02\x02^\u0172" +
		"\x03\x02\x02\x02`\u0174\x03\x02\x02\x02b\u0176\x03\x02\x02\x02dg\x05\x04" +
		"\x03\x02eg\x05.\x18\x02fd\x03\x02\x02\x02fe\x03\x02\x02\x02gj\x03\x02" +
		"\x02\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02ik\x03\x02\x02\x02jh\x03\x02" +
		"\x02\x02kl\x07\x03\x02\x02lm\x07\f\x02\x02m\x03\x03\x02\x02\x02no\x07" +
		"\f\x02\x02op\x07\x04\x02\x02pq\x07\x05\x02\x02qv\x07\x06\x02\x02ru\x05" +
		"\b\x05\x02su\x05\x06\x04\x02tr\x03\x02\x02\x02ts\x03\x02\x02\x02ux\x03" +
		"\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02wy\x03\x02\x02\x02xv\x03" +
		"\x02\x02\x02yz\x07\f\x02\x02z{\x07\x07\x02\x02{\x05\x03\x02\x02\x02|}" +
		"\x07\f\x02\x02}\x81\x07\u0109\x02\x02~\x80\x05\b\x05\x02\x7F~\x03\x02" +
		"\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02" +
		"\x02\x02\x82\x84\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84\x85\x07\xD2" +
		"\x02\x02\x85\x86\x07\f\x02\x02\x86\x87\x07\b\x02\x02\x87\x07\x03\x02\x02" +
		"\x02\x88\x9D\x05\n\x06\x02\x89\x9D\x05(\x15\x02\x8A\x9D\x05*\x16\x02\x8B" +
		"\x9D\x05,\x17\x02\x8C\x9D\x05\x10\t\x02\x8D\x9D\x05\x14\v\x02\x8E\x9D" +
		"\x05\x18\r\x02\x8F\x9D\x05\x1A\x0E\x02\x90\x9D\x05\x1C\x0F\x02\x91\x9D" +
		"\x05\x1E\x10\x02\x92\x9D\x05 \x11\x02\x93\x9D\x05\"\x12\x02\x94\x9D\x05" +
		"\f\x07\x02\x95\x9D\x05\x0E\b\x02\x96\x9D\x05\x16\f\x02\x97\x9D\x05$\x13" +
		"\x02\x98\x9D\x05&\x14\x02\x99\x9D\x05\x12\n\x02\x9A\x9D\x050\x19\x02\x9B" +
		"\x9D\x05.\x18\x02\x9C\x88\x03\x02\x02\x02\x9C\x89\x03\x02\x02\x02\x9C" +
		"\x8A\x03\x02\x02\x02\x9C\x8B\x03\x02\x02\x02\x9C\x8C\x03\x02\x02\x02\x9C" +
		"\x8D\x03\x02\x02\x02\x9C\x8E\x03\x02\x02\x02\x9C\x8F\x03\x02\x02\x02\x9C" +
		"\x90\x03\x02\x02\x02\x9C\x91\x03\x02\x02\x02\x9C\x92\x03\x02\x02\x02\x9C" +
		"\x93\x03\x02\x02\x02\x9C\x94\x03\x02\x02\x02\x9C\x95\x03\x02\x02\x02\x9C" +
		"\x96\x03\x02\x02\x02\x9C\x97\x03\x02\x02\x02\x9C\x98\x03\x02\x02\x02\x9C" +
		"\x99\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9B\x03\x02\x02\x02\x9D" +
		"\t\x03\x02\x02\x02\x9E\x9F\x058\x1D\x02\x9F\xA0\x056\x1C\x02\xA0\xA4\x07" +
		"\u0112\x02\x02\xA1\xA5\x056\x1C\x02\xA2\xA5\x07\u010D\x02\x02\xA3\xA5" +
		"\x052\x1A\x02\xA4\xA1\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA4\xA3" +
		"\x03\x02\x02\x02\xA5\xAE\x03\x02\x02\x02\xA6\xA7\x058\x1D\x02\xA7\xA8" +
		"\x052\x1A\x02\xA8\xAB\x07\u0112\x02\x02\xA9\xAC\x056\x1C\x02\xAA\xAC\x07" +
		"\u010D\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAA\x03\x02\x02\x02\xAC\xAE" +
		"\x03\x02\x02\x02\xAD\x9E\x03\x02\x02\x02\xAD\xA6\x03\x02\x02\x02\xAE\v" +
		"\x03\x02\x02\x02\xAF\xB3\x05:\x1E\x02\xB0\xB4\x07\u010D\x02\x02\xB1\xB4" +
		"\x056\x1C\x02\xB2\xB4\x052\x1A\x02\xB3\xB0\x03\x02\x02\x02\xB3\xB1\x03" +
		"\x02\x02\x02\xB3\xB2\x03\x02\x02\x02\xB4\r\x03\x02\x02\x02\xB5\xB8\x05" +
		"<\x1F\x02\xB6\xB9\x056\x1C\x02\xB7\xB9\x052\x1A\x02\xB8\xB6\x03\x02\x02" +
		"\x02\xB8\xB7\x03\x02\x02\x02\xB9\x0F\x03\x02\x02\x02\xBA\xBB\x05> \x02" +
		"\xBB\xBC\x056\x1C\x02\xBC\xBF\x07\u0112\x02\x02\xBD\xC0\x056\x1C\x02\xBE" +
		"\xC0\x052\x1A\x02\xBF\xBD\x03\x02\x02\x02\xBF\xBE\x03\x02\x02\x02\xC0" +
		"\xC7\x03\x02\x02\x02\xC1\xC2\x05> \x02\xC2\xC3\x052\x1A\x02\xC3\xC4\x07" +
		"\u0112\x02\x02\xC4\xC5\x056\x1C\x02\xC5\xC7\x03\x02\x02\x02\xC6\xBA\x03" +
		"\x02\x02\x02\xC6\xC1\x03\x02\x02\x02\xC7\x11\x03\x02\x02\x02\xC8\xC9\x05" +
		"@!\x02\xC9\x13\x03\x02\x02\x02\xCA\xCD\x05B\"\x02\xCB\xCE\x056\x1C\x02" +
		"\xCC\xCE\x052\x1A\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCC\x03\x02\x02\x02" +
		"\xCE\xCF\x03\x02\x02\x02\xCF\xD3\x07\u0112\x02\x02\xD0\xD4\x056\x1C\x02" +
		"\xD1\xD4\x07\u010D\x02\x02\xD2\xD4\x052\x1A\x02\xD3\xD0\x03\x02\x02\x02" +
		"\xD3\xD1\x03\x02\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\x15\x03\x02\x02\x02" +
		"\xD5\xD6\x05D#\x02\xD6\xD7\x07\f\x02\x02\xD7\x17\x03\x02\x02\x02\xD8\xD9" +
		"\x05F$\x02\xD9\xDA\x056\x1C\x02\xDA\xDD\x07\u0112\x02\x02\xDB\xDE\x05" +
		"6\x1C\x02\xDC\xDE\x052\x1A\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDC\x03\x02" +
		"\x02\x02\xDE\x19\x03\x02\x02\x02\xDF\xE0\x05H%\x02\xE0\xE1\x056\x1C\x02" +
		"\xE1\xE2\x07\u0112\x02\x02\xE2\xE3\x052\x1A\x02\xE3\x1B\x03\x02\x02\x02" +
		"\xE4\xE7\x05J&\x02\xE5\xE8\x056\x1C\x02\xE6\xE8\x052\x1A\x02\xE7\xE5\x03" +
		"\x02\x02\x02\xE7\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEA\x07" +
		"\u0112\x02\x02\xEA\xEB\x056\x1C\x02\xEB\x1D\x03\x02\x02\x02\xEC\xEF\x05" +
		"L\'\x02\xED\xF0\x056\x1C\x02\xEE\xF0\x052\x1A\x02\xEF\xED\x03\x02\x02" +
		"\x02\xEF\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF4\x07\u0112" +
		"\x02\x02\xF2\xF5\x07\u010D\x02\x02\xF3\xF5\x056\x1C\x02\xF4\xF2\x03\x02" +
		"\x02\x02\xF4\xF3\x03\x02\x02\x02\xF5\x1F\x03\x02\x02\x02\xF6\xF9\x05N" +
		"(\x02\xF7\xFA\x056\x1C\x02\xF8\xFA\x052\x1A\x02\xF9\xF7\x03\x02\x02\x02" +
		"\xF9\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x07\u0112\x02" +
		"\x02\xFC\xFD\x056\x1C\x02\xFD\u0100\x07\u0112\x02\x02\xFE\u0101\x056\x1C" +
		"\x02\xFF\u0101\x07\u010D\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100\xFF\x03" +
		"\x02\x02\x02\u0101!\x03\x02\x02\x02\u0102\u0105\x05P)\x02\u0103\u0106" +
		"\x056\x1C\x02\u0104\u0106\x052\x1A\x02\u0105\u0103\x03\x02\x02\x02\u0105" +
		"\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u010A\x07\u0112" +
		"\x02\x02\u0108\u010B\x056\x1C\x02\u0109\u010B\x052\x1A\x02\u010A\u0108" +
		"\x03\x02\x02\x02\u010A\u0109\x03\x02\x02\x02\u010B#\x03\x02\x02\x02\u010C" +
		"\u0110\x05R*\x02\u010D\u0111\x056\x1C\x02\u010E\u0111\x052\x1A\x02\u010F" +
		"\u0111\x07\u010D\x02\x02\u0110\u010D\x03\x02\x02\x02\u0110\u010E\x03\x02" +
		"\x02\x02\u0110\u010F\x03\x02\x02\x02\u0111%\x03\x02\x02\x02\u0112\u0113" +
		"\x05T+\x02\u0113\u0114\x07\u010D\x02\x02\u0114\'\x03\x02\x02\x02\u0115" +
		"\u0116\x05V,\x02\u0116\u0117\x056\x1C\x02\u0117\u011A\x07\u0112\x02\x02" +
		"\u0118\u011B\x056\x1C\x02\u0119\u011B\x07\u010D\x02\x02\u011A\u0118\x03" +
		"\x02\x02\x02\u011A\u0119\x03\x02\x02\x02\u011B)\x03\x02\x02\x02\u011C" +
		"\u011F\x05X-\x02\u011D\u0120\x056\x1C\x02\u011E\u0120\x07\u010D\x02\x02" +
		"\u011F\u011D\x03\x02\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120\u0121\x03" +
		"\x02\x02\x02\u0121\u0122\x07\u0112\x02\x02\u0122\u0123\x056\x1C\x02\u0123" +
		"+\x03\x02\x02\x02\u0124\u0125\x05Z.\x02\u0125\u0126\x05@!\x02\u0126-\x03" +
		"\x02\x02\x02\u0127\u0128\x05\\/\x02\u0128\u0129\x07\f\x02\x02\u0129\u012C" +
		"\x03\x02\x02\x02\u012A\u012C\x05\\/\x02\u012B\u0127\x03\x02\x02\x02\u012B" +
		"\u012A\x03\x02\x02\x02\u012C/\x03\x02\x02\x02\u012D\u012E\x07\f\x02\x02" +
		"\u012E\u0132\x05^0\x02\u012F\u0133\x05`1\x02\u0130\u0133\x07\u0110\x02" +
		"\x02\u0131\u0133\x07\u010D\x02\x02\u0132\u012F\x03\x02\x02\x02\u0132\u0130" +
		"\x03\x02\x02\x02\u0132\u0131\x03\x02\x02\x02\u01331\x03\x02\x02\x02\u0134" +
		"\u0137\x07\t\x02\x02\u0135\u0138\x056\x1C\x02\u0136\u0138\x07\f\x02\x02" +
		"\u0137\u0135\x03\x02\x02\x02\u0137\u0136\x03\x02\x02\x02\u0138\u0144\x03" +
		"\x02\x02\x02\u0139\u0142\x07\n\x02\x02\u013A\u013D\x056\x1C\x02\u013B" +
		"\u013C\x07\n\x02\x02\u013C\u013E\t\x02\x02\x02\u013D\u013B\x03\x02\x02" +
		"\x02\u013D\u013E\x03\x02\x02\x02\u013E\u0143\x03\x02\x02\x02\u013F\u0143" +
		"\x07\u010D\x02\x02\u0140\u0143\x07\u010C\x02\x02\u0141\u0143\x07\u010E" +
		"\x02\x02\u0142\u013A\x03\x02\x02\x02\u0142\u013F\x03\x02\x02\x02\u0142" +
		"\u0140\x03\x02\x02\x02\u0142\u0141\x03\x02\x02\x02\u0143\u0145\x03\x02" +
		"\x02\x02\u0144\u0139\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145" +
		"\u0146\x03\x02\x02\x02\u0146\u0147\x07\v\x02\x02\u01473\x03\x02\x02\x02" +
		"\u0148\u0149\t\x03\x02\x02\u01495\x03\x02\x02\x02\u014A\u014B\t\x04\x02" +
		"\x02\u014B7\x03\x02\x02\x02\u014C\u014D\t\x05\x02\x02\u014D9\x03\x02\x02" +
		"\x02\u014E\u014F\x07.\x02\x02\u014F;\x03\x02\x02\x02\u0150\u0151\t\x06" +
		"\x02\x02\u0151=\x03\x02\x02\x02\u0152\u0153\x07V\x02\x02\u0153?\x03\x02" +
		"\x02\x02\u0154\u0155\t\x07\x02\x02\u0155A\x03\x02\x02\x02\u0156\u0157" +
		"\t\b\x02\x02\u0157C\x03\x02\x02\x02\u0158\u0159\t\t\x02\x02\u0159E\x03" +
		"\x02\x02\x02\u015A\u015B\t\n\x02\x02\u015BG\x03\x02\x02\x02\u015C\u015D" +
		"\t\v\x02\x02\u015DI\x03\x02\x02\x02\u015E\u015F\t\f\x02\x02\u015FK\x03" +
		"\x02\x02\x02\u0160\u0161\t\r\x02\x02\u0161M\x03\x02\x02\x02\u0162\u0163" +
		"\t\x0E\x02\x02\u0163O\x03\x02\x02\x02\u0164\u0165\t\x0F\x02\x02\u0165" +
		"Q\x03\x02\x02\x02\u0166\u0167\x07\xCF\x02\x02\u0167S\x03\x02\x02\x02\u0168" +
		"\u0169\t\x10\x02\x02\u0169U\x03\x02\x02\x02\u016A\u016B\x07\xD4\x02\x02" +
		"\u016BW\x03\x02\x02\x02\u016C\u016D\x07\xD5\x02\x02\u016DY\x03\x02\x02" +
		"\x02\u016E\u016F\t\x11\x02\x02\u016F[\x03\x02\x02\x02\u0170\u0171\t\x12" +
		"\x02\x02\u0171]\x03\x02\x02\x02\u0172\u0173\t\x13\x02\x02\u0173_\x03\x02" +
		"\x02\x02\u0174\u0175\x07\u010A\x02\x02\u0175a\x03\x02\x02\x02\u0176\u0177" +
		"\x07\u010B\x02\x02\u0177c\x03\x02\x02\x02\"fhtv\x81\x9C\xA4\xAB\xAD\xB3" +
		"\xB8\xBF\xC6\xCD\xD3\xDD\xE7\xEF\xF4\xF9\u0100\u0105\u010A\u0110\u011A" +
		"\u011F\u012B\u0132\u0137\u013D\u0142\u0144";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MASMParser.__ATN) {
			MASMParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MASMParser._serializedATN));
		}

		return MASMParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(MASMParser.Identifier, 0); }
	public segments(): SegmentsContext[];
	public segments(i: number): SegmentsContext;
	public segments(i?: number): SegmentsContext | SegmentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SegmentsContext);
		} else {
			return this.getRuleContext(i, SegmentsContext);
		}
	}
	public directive_exp1(): Directive_exp1Context[];
	public directive_exp1(i: number): Directive_exp1Context;
	public directive_exp1(i?: number): Directive_exp1Context | Directive_exp1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Directive_exp1Context);
		} else {
			return this.getRuleContext(i, Directive_exp1Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
}


export class SegmentsContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MASMParser.Identifier);
		} else {
			return this.getToken(MASMParser.Identifier, i);
		}
	}
	public code(): CodeContext[];
	public code(i: number): CodeContext;
	public code(i?: number): CodeContext | CodeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodeContext);
		} else {
			return this.getRuleContext(i, CodeContext);
		}
	}
	public proc(): ProcContext[];
	public proc(i: number): ProcContext;
	public proc(i?: number): ProcContext | ProcContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProcContext);
		} else {
			return this.getRuleContext(i, ProcContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_segments; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterSegments) {
			listener.enterSegments(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitSegments) {
			listener.exitSegments(this);
		}
	}
}


export class ProcContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MASMParser.Identifier);
		} else {
			return this.getToken(MASMParser.Identifier, i);
		}
	}
	public PROC(): TerminalNode { return this.getToken(MASMParser.PROC, 0); }
	public RET(): TerminalNode { return this.getToken(MASMParser.RET, 0); }
	public code(): CodeContext[];
	public code(i: number): CodeContext;
	public code(i?: number): CodeContext | CodeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodeContext);
		} else {
			return this.getRuleContext(i, CodeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_proc; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterProc) {
			listener.enterProc(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitProc) {
			listener.exitProc(this);
		}
	}
}


export class CodeContext extends ParserRuleContext {
	public binary_exp1(): Binary_exp1Context | undefined {
		return this.tryGetRuleContext(0, Binary_exp1Context);
	}
	public binary_exp10(): Binary_exp10Context | undefined {
		return this.tryGetRuleContext(0, Binary_exp10Context);
	}
	public binary_exp11(): Binary_exp11Context | undefined {
		return this.tryGetRuleContext(0, Binary_exp11Context);
	}
	public binary_exp12(): Binary_exp12Context | undefined {
		return this.tryGetRuleContext(0, Binary_exp12Context);
	}
	public binary_exp2(): Binary_exp2Context | undefined {
		return this.tryGetRuleContext(0, Binary_exp2Context);
	}
	public binary_exp3(): Binary_exp3Context | undefined {
		return this.tryGetRuleContext(0, Binary_exp3Context);
	}
	public binary_exp4(): Binary_exp4Context | undefined {
		return this.tryGetRuleContext(0, Binary_exp4Context);
	}
	public binary_exp5(): Binary_exp5Context | undefined {
		return this.tryGetRuleContext(0, Binary_exp5Context);
	}
	public binary_exp6(): Binary_exp6Context | undefined {
		return this.tryGetRuleContext(0, Binary_exp6Context);
	}
	public binary_exp7(): Binary_exp7Context | undefined {
		return this.tryGetRuleContext(0, Binary_exp7Context);
	}
	public binary_exp8(): Binary_exp8Context | undefined {
		return this.tryGetRuleContext(0, Binary_exp8Context);
	}
	public binary_exp9(): Binary_exp9Context | undefined {
		return this.tryGetRuleContext(0, Binary_exp9Context);
	}
	public unuary_exp1(): Unuary_exp1Context | undefined {
		return this.tryGetRuleContext(0, Unuary_exp1Context);
	}
	public unuary_exp2(): Unuary_exp2Context | undefined {
		return this.tryGetRuleContext(0, Unuary_exp2Context);
	}
	public unuary_exp3(): Unuary_exp3Context | undefined {
		return this.tryGetRuleContext(0, Unuary_exp3Context);
	}
	public unuary_exp4(): Unuary_exp4Context | undefined {
		return this.tryGetRuleContext(0, Unuary_exp4Context);
	}
	public unuary_exp5(): Unuary_exp5Context | undefined {
		return this.tryGetRuleContext(0, Unuary_exp5Context);
	}
	public notarguments(): NotargumentsContext | undefined {
		return this.tryGetRuleContext(0, NotargumentsContext);
	}
	public variabledeclaration(): VariabledeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariabledeclarationContext);
	}
	public directive_exp1(): Directive_exp1Context | undefined {
		return this.tryGetRuleContext(0, Directive_exp1Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_code; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterCode) {
			listener.enterCode(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitCode) {
			listener.exitCode(this);
		}
	}
}


export class Binary_exp1Context extends ParserRuleContext {
	public o(): OContext {
		return this.getRuleContext(0, OContext);
	}
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	public Separator(): TerminalNode { return this.getToken(MASMParser.Separator, 0); }
	public Integer(): TerminalNode | undefined { return this.tryGetToken(MASMParser.Integer, 0); }
	public memory(): MemoryContext | undefined {
		return this.tryGetRuleContext(0, MemoryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_binary_exp1; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterBinary_exp1) {
			listener.enterBinary_exp1(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitBinary_exp1) {
			listener.exitBinary_exp1(this);
		}
	}
}


export class Unuary_exp1Context extends ParserRuleContext {
	public op(): OpContext {
		return this.getRuleContext(0, OpContext);
	}
	public Integer(): TerminalNode | undefined { return this.tryGetToken(MASMParser.Integer, 0); }
	public register(): RegisterContext | undefined {
		return this.tryGetRuleContext(0, RegisterContext);
	}
	public memory(): MemoryContext | undefined {
		return this.tryGetRuleContext(0, MemoryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_unuary_exp1; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterUnuary_exp1) {
			listener.enterUnuary_exp1(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitUnuary_exp1) {
			listener.exitUnuary_exp1(this);
		}
	}
}


export class Unuary_exp2Context extends ParserRuleContext {
	public ope(): OpeContext {
		return this.getRuleContext(0, OpeContext);
	}
	public register(): RegisterContext | undefined {
		return this.tryGetRuleContext(0, RegisterContext);
	}
	public memory(): MemoryContext | undefined {
		return this.tryGetRuleContext(0, MemoryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_unuary_exp2; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterUnuary_exp2) {
			listener.enterUnuary_exp2(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitUnuary_exp2) {
			listener.exitUnuary_exp2(this);
		}
	}
}


export class Binary_exp2Context extends ParserRuleContext {
	public oper(): OperContext {
		return this.getRuleContext(0, OperContext);
	}
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	public Separator(): TerminalNode { return this.getToken(MASMParser.Separator, 0); }
	public memory(): MemoryContext | undefined {
		return this.tryGetRuleContext(0, MemoryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_binary_exp2; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterBinary_exp2) {
			listener.enterBinary_exp2(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitBinary_exp2) {
			listener.exitBinary_exp2(this);
		}
	}
}


export class NotargumentsContext extends ParserRuleContext {
	public opera(): OperaContext {
		return this.getRuleContext(0, OperaContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_notarguments; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterNotarguments) {
			listener.enterNotarguments(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitNotarguments) {
			listener.exitNotarguments(this);
		}
	}
}


export class Binary_exp3Context extends ParserRuleContext {
	public operat(): OperatContext {
		return this.getRuleContext(0, OperatContext);
	}
	public Separator(): TerminalNode { return this.getToken(MASMParser.Separator, 0); }
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	public memory(): MemoryContext[];
	public memory(i: number): MemoryContext;
	public memory(i?: number): MemoryContext | MemoryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemoryContext);
		} else {
			return this.getRuleContext(i, MemoryContext);
		}
	}
	public Integer(): TerminalNode | undefined { return this.tryGetToken(MASMParser.Integer, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_binary_exp3; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterBinary_exp3) {
			listener.enterBinary_exp3(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitBinary_exp3) {
			listener.exitBinary_exp3(this);
		}
	}
}


export class Unuary_exp3Context extends ParserRuleContext {
	public operato(): OperatoContext {
		return this.getRuleContext(0, OperatoContext);
	}
	public Identifier(): TerminalNode { return this.getToken(MASMParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_unuary_exp3; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterUnuary_exp3) {
			listener.enterUnuary_exp3(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitUnuary_exp3) {
			listener.exitUnuary_exp3(this);
		}
	}
}


export class Binary_exp4Context extends ParserRuleContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	public Separator(): TerminalNode { return this.getToken(MASMParser.Separator, 0); }
	public memory(): MemoryContext | undefined {
		return this.tryGetRuleContext(0, MemoryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_binary_exp4; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterBinary_exp4) {
			listener.enterBinary_exp4(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitBinary_exp4) {
			listener.exitBinary_exp4(this);
		}
	}
}


export class Binary_exp5Context extends ParserRuleContext {
	public l(): LContext {
		return this.getRuleContext(0, LContext);
	}
	public register(): RegisterContext {
		return this.getRuleContext(0, RegisterContext);
	}
	public Separator(): TerminalNode { return this.getToken(MASMParser.Separator, 0); }
	public memory(): MemoryContext {
		return this.getRuleContext(0, MemoryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_binary_exp5; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterBinary_exp5) {
			listener.enterBinary_exp5(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitBinary_exp5) {
			listener.exitBinary_exp5(this);
		}
	}
}


export class Binary_exp6Context extends ParserRuleContext {
	public x(): XContext {
		return this.getRuleContext(0, XContext);
	}
	public Separator(): TerminalNode { return this.getToken(MASMParser.Separator, 0); }
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	public memory(): MemoryContext | undefined {
		return this.tryGetRuleContext(0, MemoryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_binary_exp6; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterBinary_exp6) {
			listener.enterBinary_exp6(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitBinary_exp6) {
			listener.exitBinary_exp6(this);
		}
	}
}


export class Binary_exp7Context extends ParserRuleContext {
	public s(): SContext {
		return this.getRuleContext(0, SContext);
	}
	public Separator(): TerminalNode { return this.getToken(MASMParser.Separator, 0); }
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	public memory(): MemoryContext | undefined {
		return this.tryGetRuleContext(0, MemoryContext);
	}
	public Integer(): TerminalNode | undefined { return this.tryGetToken(MASMParser.Integer, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_binary_exp7; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterBinary_exp7) {
			listener.enterBinary_exp7(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitBinary_exp7) {
			listener.exitBinary_exp7(this);
		}
	}
}


export class Binary_exp8Context extends ParserRuleContext {
	public sh(): ShContext {
		return this.getRuleContext(0, ShContext);
	}
	public Separator(): TerminalNode[];
	public Separator(i: number): TerminalNode;
	public Separator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MASMParser.Separator);
		} else {
			return this.getToken(MASMParser.Separator, i);
		}
	}
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	public memory(): MemoryContext | undefined {
		return this.tryGetRuleContext(0, MemoryContext);
	}
	public Integer(): TerminalNode | undefined { return this.tryGetToken(MASMParser.Integer, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_binary_exp8; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterBinary_exp8) {
			listener.enterBinary_exp8(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitBinary_exp8) {
			listener.exitBinary_exp8(this);
		}
	}
}


export class Binary_exp9Context extends ParserRuleContext {
	public b(): BContext {
		return this.getRuleContext(0, BContext);
	}
	public Separator(): TerminalNode { return this.getToken(MASMParser.Separator, 0); }
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	public memory(): MemoryContext[];
	public memory(i: number): MemoryContext;
	public memory(i?: number): MemoryContext | MemoryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemoryContext);
		} else {
			return this.getRuleContext(i, MemoryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_binary_exp9; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterBinary_exp9) {
			listener.enterBinary_exp9(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitBinary_exp9) {
			listener.exitBinary_exp9(this);
		}
	}
}


export class Unuary_exp4Context extends ParserRuleContext {
	public call(): CallContext {
		return this.getRuleContext(0, CallContext);
	}
	public register(): RegisterContext | undefined {
		return this.tryGetRuleContext(0, RegisterContext);
	}
	public memory(): MemoryContext | undefined {
		return this.tryGetRuleContext(0, MemoryContext);
	}
	public Integer(): TerminalNode | undefined { return this.tryGetToken(MASMParser.Integer, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_unuary_exp4; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterUnuary_exp4) {
			listener.enterUnuary_exp4(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitUnuary_exp4) {
			listener.exitUnuary_exp4(this);
		}
	}
}


export class Unuary_exp5Context extends ParserRuleContext {
	public interruption(): InterruptionContext {
		return this.getRuleContext(0, InterruptionContext);
	}
	public Integer(): TerminalNode { return this.getToken(MASMParser.Integer, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_unuary_exp5; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterUnuary_exp5) {
			listener.enterUnuary_exp5(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitUnuary_exp5) {
			listener.exitUnuary_exp5(this);
		}
	}
}


export class Binary_exp10Context extends ParserRuleContext {
	public in(): InContext {
		return this.getRuleContext(0, InContext);
	}
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	public Separator(): TerminalNode { return this.getToken(MASMParser.Separator, 0); }
	public Integer(): TerminalNode | undefined { return this.tryGetToken(MASMParser.Integer, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_binary_exp10; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterBinary_exp10) {
			listener.enterBinary_exp10(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitBinary_exp10) {
			listener.exitBinary_exp10(this);
		}
	}
}


export class Binary_exp11Context extends ParserRuleContext {
	public out(): OutContext {
		return this.getRuleContext(0, OutContext);
	}
	public Separator(): TerminalNode { return this.getToken(MASMParser.Separator, 0); }
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	public Integer(): TerminalNode | undefined { return this.tryGetToken(MASMParser.Integer, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_binary_exp11; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterBinary_exp11) {
			listener.enterBinary_exp11(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitBinary_exp11) {
			listener.exitBinary_exp11(this);
		}
	}
}


export class Binary_exp12Context extends ParserRuleContext {
	public re(): ReContext {
		return this.getRuleContext(0, ReContext);
	}
	public opera(): OperaContext {
		return this.getRuleContext(0, OperaContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_binary_exp12; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterBinary_exp12) {
			listener.enterBinary_exp12(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitBinary_exp12) {
			listener.exitBinary_exp12(this);
		}
	}
}


export class Directive_exp1Context extends ParserRuleContext {
	public directives(): DirectivesContext | undefined {
		return this.tryGetRuleContext(0, DirectivesContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(MASMParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_directive_exp1; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterDirective_exp1) {
			listener.enterDirective_exp1(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitDirective_exp1) {
			listener.exitDirective_exp1(this);
		}
	}
}


export class VariabledeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(MASMParser.Identifier, 0); }
	public ty(): TyContext {
		return this.getRuleContext(0, TyContext);
	}
	public question(): QuestionContext | undefined {
		return this.tryGetRuleContext(0, QuestionContext);
	}
	public String(): TerminalNode | undefined { return this.tryGetToken(MASMParser.String, 0); }
	public Integer(): TerminalNode | undefined { return this.tryGetToken(MASMParser.Integer, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_variabledeclaration; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterVariabledeclaration) {
			listener.enterVariabledeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitVariabledeclaration) {
			listener.exitVariabledeclaration(this);
		}
	}
}


export class MemoryContext extends ParserRuleContext {
	public register(): RegisterContext[];
	public register(i: number): RegisterContext;
	public register(i?: number): RegisterContext | RegisterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RegisterContext);
		} else {
			return this.getRuleContext(i, RegisterContext);
		}
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(MASMParser.Identifier, 0); }
	public Integer(): TerminalNode | undefined { return this.tryGetToken(MASMParser.Integer, 0); }
	public Hexnum(): TerminalNode | undefined { return this.tryGetToken(MASMParser.Hexnum, 0); }
	public Octalnum(): TerminalNode | undefined { return this.tryGetToken(MASMParser.Octalnum, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_memory; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterMemory) {
			listener.enterMemory(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitMemory) {
			listener.exitMemory(this);
		}
	}
}


export class SegmentosContext extends ParserRuleContext {
	public DS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DS, 0); }
	public ES(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ES, 0); }
	public CS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CS, 0); }
	public SS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SS, 0); }
	public GS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.GS, 0); }
	public FS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.FS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_segmentos; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterSegmentos) {
			listener.enterSegmentos(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitSegmentos) {
			listener.exitSegmentos(this);
		}
	}
}


export class RegisterContext extends ParserRuleContext {
	public AH(): TerminalNode | undefined { return this.tryGetToken(MASMParser.AH, 0); }
	public AL(): TerminalNode | undefined { return this.tryGetToken(MASMParser.AL, 0); }
	public AX(): TerminalNode | undefined { return this.tryGetToken(MASMParser.AX, 0); }
	public BH(): TerminalNode | undefined { return this.tryGetToken(MASMParser.BH, 0); }
	public BL(): TerminalNode | undefined { return this.tryGetToken(MASMParser.BL, 0); }
	public BX(): TerminalNode | undefined { return this.tryGetToken(MASMParser.BX, 0); }
	public CH(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CH, 0); }
	public CL(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CL, 0); }
	public CX(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CX, 0); }
	public DH(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DH, 0); }
	public DL(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DL, 0); }
	public DX(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DX, 0); }
	public SI(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SI, 0); }
	public DI(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DI, 0); }
	public SP(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SP, 0); }
	public BP(): TerminalNode | undefined { return this.tryGetToken(MASMParser.BP, 0); }
	public EAX(): TerminalNode | undefined { return this.tryGetToken(MASMParser.EAX, 0); }
	public EBX(): TerminalNode | undefined { return this.tryGetToken(MASMParser.EBX, 0); }
	public ECX(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ECX, 0); }
	public EDX(): TerminalNode | undefined { return this.tryGetToken(MASMParser.EDX, 0); }
	public ESI(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ESI, 0); }
	public EDI(): TerminalNode | undefined { return this.tryGetToken(MASMParser.EDI, 0); }
	public ESP(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ESP, 0); }
	public EBP(): TerminalNode | undefined { return this.tryGetToken(MASMParser.EBP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_register; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterRegister) {
			listener.enterRegister(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitRegister) {
			listener.exitRegister(this);
		}
	}
}


export class OContext extends ParserRuleContext {
	public MOV(): TerminalNode | undefined { return this.tryGetToken(MASMParser.MOV, 0); }
	public CMP(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CMP, 0); }
	public TEST(): TerminalNode | undefined { return this.tryGetToken(MASMParser.TEST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_o; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterO) {
			listener.enterO(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitO) {
			listener.exitO(this);
		}
	}
}


export class OpContext extends ParserRuleContext {
	public PUSH(): TerminalNode { return this.getToken(MASMParser.PUSH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_op; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterOp) {
			listener.enterOp(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitOp) {
			listener.exitOp(this);
		}
	}
}


export class OpeContext extends ParserRuleContext {
	public POP(): TerminalNode | undefined { return this.tryGetToken(MASMParser.POP, 0); }
	public IDIV(): TerminalNode | undefined { return this.tryGetToken(MASMParser.IDIV, 0); }
	public INC(): TerminalNode | undefined { return this.tryGetToken(MASMParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DEC, 0); }
	public NEG(): TerminalNode | undefined { return this.tryGetToken(MASMParser.NEG, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(MASMParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DIV, 0); }
	public IMUL(): TerminalNode | undefined { return this.tryGetToken(MASMParser.IMUL, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(MASMParser.NOT, 0); }
	public SETPO(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETPO, 0); }
	public SETAE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETAE, 0); }
	public SETNLE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETNLE, 0); }
	public SETC(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETC, 0); }
	public SETNO(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETNO, 0); }
	public SETNB(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETNB, 0); }
	public SETP(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETP, 0); }
	public SETNGE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETNGE, 0); }
	public SETL(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETL, 0); }
	public SETGE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETGE, 0); }
	public SETPE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETPE, 0); }
	public SETNL(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETNL, 0); }
	public SETNZ(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETNZ, 0); }
	public SETNE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETNE, 0); }
	public SETNC(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETNC, 0); }
	public SETBE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETBE, 0); }
	public SETNP(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETNP, 0); }
	public SETNS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETNS, 0); }
	public SETO(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETO, 0); }
	public SETNA(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETNA, 0); }
	public SETNAE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETNAE, 0); }
	public SETZ(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETZ, 0); }
	public SETLE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETLE, 0); }
	public SETNBE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETNBE, 0); }
	public SETS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETS, 0); }
	public SETE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETE, 0); }
	public SETB(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETB, 0); }
	public SETA(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETA, 0); }
	public SETG(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETG, 0); }
	public SETNG(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SETNG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_ope; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterOpe) {
			listener.enterOpe(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitOpe) {
			listener.exitOpe(this);
		}
	}
}


export class OperContext extends ParserRuleContext {
	public XCHG(): TerminalNode { return this.getToken(MASMParser.XCHG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_oper; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterOper) {
			listener.enterOper(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitOper) {
			listener.exitOper(this);
		}
	}
}


export class OperaContext extends ParserRuleContext {
	public POPAD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.POPAD, 0); }
	public AAA(): TerminalNode | undefined { return this.tryGetToken(MASMParser.AAA, 0); }
	public POPA(): TerminalNode | undefined { return this.tryGetToken(MASMParser.POPA, 0); }
	public POPFD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.POPFD, 0); }
	public CWD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CWD, 0); }
	public LAHF(): TerminalNode | undefined { return this.tryGetToken(MASMParser.LAHF, 0); }
	public PUSHAD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.PUSHAD, 0); }
	public PUSHF(): TerminalNode | undefined { return this.tryGetToken(MASMParser.PUSHF, 0); }
	public AAS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.AAS, 0); }
	public BSWAP(): TerminalNode | undefined { return this.tryGetToken(MASMParser.BSWAP, 0); }
	public PUSHFD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.PUSHFD, 0); }
	public CBW(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CBW, 0); }
	public CWDE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CWDE, 0); }
	public XLAT(): TerminalNode | undefined { return this.tryGetToken(MASMParser.XLAT, 0); }
	public AAM(): TerminalNode | undefined { return this.tryGetToken(MASMParser.AAM, 0); }
	public AAD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.AAD, 0); }
	public CDQ(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CDQ, 0); }
	public DAA(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DAA, 0); }
	public SAHF(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SAHF, 0); }
	public DAS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DAS, 0); }
	public INTO(): TerminalNode | undefined { return this.tryGetToken(MASMParser.INTO, 0); }
	public IRET(): TerminalNode | undefined { return this.tryGetToken(MASMParser.IRET, 0); }
	public CLC(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CLC, 0); }
	public STC(): TerminalNode | undefined { return this.tryGetToken(MASMParser.STC, 0); }
	public CMC(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CMC, 0); }
	public CLD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CLD, 0); }
	public STD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.STD, 0); }
	public CLI(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CLI, 0); }
	public STI(): TerminalNode | undefined { return this.tryGetToken(MASMParser.STI, 0); }
	public MOVSB(): TerminalNode | undefined { return this.tryGetToken(MASMParser.MOVSB, 0); }
	public MOVSW(): TerminalNode | undefined { return this.tryGetToken(MASMParser.MOVSW, 0); }
	public MOVSD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.MOVSD, 0); }
	public LODS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.LODS, 0); }
	public LODSB(): TerminalNode | undefined { return this.tryGetToken(MASMParser.LODSB, 0); }
	public LODSW(): TerminalNode | undefined { return this.tryGetToken(MASMParser.LODSW, 0); }
	public LODSD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.LODSD, 0); }
	public STOS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.STOS, 0); }
	public STOSB(): TerminalNode | undefined { return this.tryGetToken(MASMParser.STOSB, 0); }
	public STOSW(): TerminalNode | undefined { return this.tryGetToken(MASMParser.STOSW, 0); }
	public SOTSD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SOTSD, 0); }
	public SCAS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SCAS, 0); }
	public SCASB(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SCASB, 0); }
	public SCASW(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SCASW, 0); }
	public SCASD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SCASD, 0); }
	public CMPS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CMPS, 0); }
	public CMPSB(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CMPSB, 0); }
	public CMPSW(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CMPSW, 0); }
	public CMPSD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CMPSD, 0); }
	public INSB(): TerminalNode | undefined { return this.tryGetToken(MASMParser.INSB, 0); }
	public INSW(): TerminalNode | undefined { return this.tryGetToken(MASMParser.INSW, 0); }
	public INSD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.INSD, 0); }
	public OUTSB(): TerminalNode | undefined { return this.tryGetToken(MASMParser.OUTSB, 0); }
	public OUTSW(): TerminalNode | undefined { return this.tryGetToken(MASMParser.OUTSW, 0); }
	public OUTSD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.OUTSD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_opera; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterOpera) {
			listener.enterOpera(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitOpera) {
			listener.exitOpera(this);
		}
	}
}


export class OperatContext extends ParserRuleContext {
	public ADC(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ADC, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SUB, 0); }
	public CBB(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CBB, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(MASMParser.XOR, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(MASMParser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_operat; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterOperat) {
			listener.enterOperat(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitOperat) {
			listener.exitOperat(this);
		}
	}
}


export class OperatoContext extends ParserRuleContext {
	public JNBE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JNBE, 0); }
	public JNZ(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JNZ, 0); }
	public JPO(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JPO, 0); }
	public JZ(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JZ, 0); }
	public JS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JS, 0); }
	public LOOPNZ(): TerminalNode | undefined { return this.tryGetToken(MASMParser.LOOPNZ, 0); }
	public JGE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JGE, 0); }
	public JB(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JB, 0); }
	public JNB(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JNB, 0); }
	public JO(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JO, 0); }
	public JP(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JP, 0); }
	public JNO(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JNO, 0); }
	public JNL(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JNL, 0); }
	public JNAE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JNAE, 0); }
	public LOOPZ(): TerminalNode | undefined { return this.tryGetToken(MASMParser.LOOPZ, 0); }
	public JMP(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JMP, 0); }
	public JNP(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JNP, 0); }
	public LOOP(): TerminalNode | undefined { return this.tryGetToken(MASMParser.LOOP, 0); }
	public JL(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JL, 0); }
	public JCXZ(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JCXZ, 0); }
	public JAE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JAE, 0); }
	public JNGE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JNGE, 0); }
	public JA(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JA, 0); }
	public LOOPNE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.LOOPNE, 0); }
	public LOOPE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.LOOPE, 0); }
	public JG(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JG, 0); }
	public JNLE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JNLE, 0); }
	public JE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JE, 0); }
	public JNC(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JNC, 0); }
	public JC(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JC, 0); }
	public JNA(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JNA, 0); }
	public JBE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JBE, 0); }
	public JLE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JLE, 0); }
	public JPE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JPE, 0); }
	public JNS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JNS, 0); }
	public JECXZ(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JECXZ, 0); }
	public JNG(): TerminalNode | undefined { return this.tryGetToken(MASMParser.JNG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_operato; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterOperato) {
			listener.enterOperato(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitOperato) {
			listener.exitOperato(this);
		}
	}
}


export class OperatorContext extends ParserRuleContext {
	public MOVZX(): TerminalNode | undefined { return this.tryGetToken(MASMParser.MOVZX, 0); }
	public BSF(): TerminalNode | undefined { return this.tryGetToken(MASMParser.BSF, 0); }
	public BSR(): TerminalNode | undefined { return this.tryGetToken(MASMParser.BSR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_operator; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterOperator) {
			listener.enterOperator(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitOperator) {
			listener.exitOperator(this);
		}
	}
}


export class LContext extends ParserRuleContext {
	public LES(): TerminalNode | undefined { return this.tryGetToken(MASMParser.LES, 0); }
	public LEA(): TerminalNode | undefined { return this.tryGetToken(MASMParser.LEA, 0); }
	public LDS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.LDS, 0); }
	public INS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.INS, 0); }
	public OUTS(): TerminalNode | undefined { return this.tryGetToken(MASMParser.OUTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_l; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterL) {
			listener.enterL(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitL) {
			listener.exitL(this);
		}
	}
}


export class XContext extends ParserRuleContext {
	public XADD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.XADD, 0); }
	public CMPXCHG(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CMPXCHG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_x; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterX) {
			listener.enterX(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitX) {
			listener.exitX(this);
		}
	}
}


export class SContext extends ParserRuleContext {
	public SHL(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SHL, 0); }
	public SHR(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SHR, 0); }
	public ROR(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ROR, 0); }
	public ROL(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ROL, 0); }
	public RCL(): TerminalNode | undefined { return this.tryGetToken(MASMParser.RCL, 0); }
	public SAL(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SAL, 0); }
	public RCR(): TerminalNode | undefined { return this.tryGetToken(MASMParser.RCR, 0); }
	public SAR(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_s; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterS) {
			listener.enterS(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitS) {
			listener.exitS(this);
		}
	}
}


export class ShContext extends ParserRuleContext {
	public SHRD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SHRD, 0); }
	public SHLD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SHLD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_sh; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterSh) {
			listener.enterSh(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitSh) {
			listener.exitSh(this);
		}
	}
}


export class BContext extends ParserRuleContext {
	public BTR(): TerminalNode | undefined { return this.tryGetToken(MASMParser.BTR, 0); }
	public BT(): TerminalNode | undefined { return this.tryGetToken(MASMParser.BT, 0); }
	public BTC(): TerminalNode | undefined { return this.tryGetToken(MASMParser.BTC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_b; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterB) {
			listener.enterB(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitB) {
			listener.exitB(this);
		}
	}
}


export class CallContext extends ParserRuleContext {
	public CALL(): TerminalNode { return this.getToken(MASMParser.CALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_call; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterCall) {
			listener.enterCall(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitCall) {
			listener.exitCall(this);
		}
	}
}


export class InterruptionContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(MASMParser.INT, 0); }
	public RETN(): TerminalNode | undefined { return this.tryGetToken(MASMParser.RETN, 0); }
	public RET(): TerminalNode | undefined { return this.tryGetToken(MASMParser.RET, 0); }
	public RETF(): TerminalNode | undefined { return this.tryGetToken(MASMParser.RETF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_interruption; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterInterruption) {
			listener.enterInterruption(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitInterruption) {
			listener.exitInterruption(this);
		}
	}
}


export class InContext extends ParserRuleContext {
	public IN(): TerminalNode { return this.getToken(MASMParser.IN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_in; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterIn) {
			listener.enterIn(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitIn) {
			listener.exitIn(this);
		}
	}
}


export class OutContext extends ParserRuleContext {
	public OUT(): TerminalNode { return this.getToken(MASMParser.OUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_out; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterOut) {
			listener.enterOut(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitOut) {
			listener.exitOut(this);
		}
	}
}


export class ReContext extends ParserRuleContext {
	public REP(): TerminalNode | undefined { return this.tryGetToken(MASMParser.REP, 0); }
	public REPE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.REPE, 0); }
	public REPZ(): TerminalNode | undefined { return this.tryGetToken(MASMParser.REPZ, 0); }
	public REPNE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.REPNE, 0); }
	public REPNZ(): TerminalNode | undefined { return this.tryGetToken(MASMParser.REPNZ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_re; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterRe) {
			listener.enterRe(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitRe) {
			listener.exitRe(this);
		}
	}
}


export class DirectivesContext extends ParserRuleContext {
	public ALPHA(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ALPHA, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CONST, 0); }
	public CREF(): TerminalNode | undefined { return this.tryGetToken(MASMParser.CREF, 0); }
	public XCREF(): TerminalNode | undefined { return this.tryGetToken(MASMParser.XCREF, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DATA, 0); }
	public DATA2(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DATA2, 0); }
	public DOSSEG(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DOSSEG, 0); }
	public ERR(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ERR, 0); }
	public ERR1(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ERR1, 0); }
	public ERR2(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ERR2, 0); }
	public ERRE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ERRE, 0); }
	public ERRNZ(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ERRNZ, 0); }
	public ERRDEF(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ERRDEF, 0); }
	public ERRNDEF(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ERRNDEF, 0); }
	public ERRB(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ERRB, 0); }
	public ERRNB(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ERRNB, 0); }
	public ERRIDN(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ERRIDN, 0); }
	public ERRDIF(): TerminalNode | undefined { return this.tryGetToken(MASMParser.ERRDIF, 0); }
	public EVEN(): TerminalNode | undefined { return this.tryGetToken(MASMParser.EVEN, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(MASMParser.LIST, 0); }
	public WIDTH(): TerminalNode | undefined { return this.tryGetToken(MASMParser.WIDTH, 0); }
	public MASK(): TerminalNode | undefined { return this.tryGetToken(MASMParser.MASK, 0); }
	public SEQ(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SEQ, 0); }
	public XLIST(): TerminalNode | undefined { return this.tryGetToken(MASMParser.XLIST, 0); }
	public EXIT(): TerminalNode | undefined { return this.tryGetToken(MASMParser.EXIT, 0); }
	public MODEL(): TerminalNode | undefined { return this.tryGetToken(MASMParser.MODEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_directives; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterDirectives) {
			listener.enterDirectives(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitDirectives) {
			listener.exitDirectives(this);
		}
	}
}


export class TyContext extends ParserRuleContext {
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.BYTE, 0); }
	public SBYTE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SBYTE, 0); }
	public DB(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DB, 0); }
	public WORD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.WORD, 0); }
	public SWORD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SWORD, 0); }
	public DW(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DW, 0); }
	public DWORD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DWORD, 0); }
	public SDWORD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.SDWORD, 0); }
	public DD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DD, 0); }
	public FWORD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.FWORD, 0); }
	public DF(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DF, 0); }
	public QWORD(): TerminalNode | undefined { return this.tryGetToken(MASMParser.QWORD, 0); }
	public DQ(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DQ, 0); }
	public TBYTE(): TerminalNode | undefined { return this.tryGetToken(MASMParser.TBYTE, 0); }
	public DT(): TerminalNode | undefined { return this.tryGetToken(MASMParser.DT, 0); }
	public REAL4(): TerminalNode | undefined { return this.tryGetToken(MASMParser.REAL4, 0); }
	public REAL8(): TerminalNode | undefined { return this.tryGetToken(MASMParser.REAL8, 0); }
	public REAL(): TerminalNode | undefined { return this.tryGetToken(MASMParser.REAL, 0); }
	public FAR(): TerminalNode | undefined { return this.tryGetToken(MASMParser.FAR, 0); }
	public NEAR(): TerminalNode | undefined { return this.tryGetToken(MASMParser.NEAR, 0); }
	public PROC(): TerminalNode | undefined { return this.tryGetToken(MASMParser.PROC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_ty; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterTy) {
			listener.enterTy(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitTy) {
			listener.exitTy(this);
		}
	}
}


export class QuestionContext extends ParserRuleContext {
	public QUESTION(): TerminalNode { return this.getToken(MASMParser.QUESTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_question; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterQuestion) {
			listener.enterQuestion(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitQuestion) {
			listener.exitQuestion(this);
		}
	}
}


export class TimeContext extends ParserRuleContext {
	public TIMES(): TerminalNode { return this.getToken(MASMParser.TIMES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MASMParser.RULE_time; }
	// @Override
	public enterRule(listener: MASMListener): void {
		if (listener.enterTime) {
			listener.enterTime(this);
		}
	}
	// @Override
	public exitRule(listener: MASMListener): void {
		if (listener.exitTime) {
			listener.exitTime(this);
		}
	}
}


