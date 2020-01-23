// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fortran77/Fortran77Parser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { Fortran77ParserListener } from "./Fortran77ParserListener";
import { Fortran77ParserVisitor } from "./Fortran77ParserVisitor";


export class Fortran77Parser extends Parser {
	public static readonly PROGRAM = 1;
	public static readonly ENTRY = 2;
	public static readonly FUNCTION = 3;
	public static readonly BLOCK = 4;
	public static readonly SUBROUTINE = 5;
	public static readonly END = 6;
	public static readonly DIMENSION = 7;
	public static readonly REAL = 8;
	public static readonly EQUIVALENCE = 9;
	public static readonly COMMON = 10;
	public static readonly POINTER = 11;
	public static readonly IMPLICIT = 12;
	public static readonly NONE = 13;
	public static readonly CHARACTER = 14;
	public static readonly PARAMETER = 15;
	public static readonly EXTERNAL = 16;
	public static readonly INTRINSIC = 17;
	public static readonly SAVE = 18;
	public static readonly DATA = 19;
	public static readonly GO = 20;
	public static readonly GOTO = 21;
	public static readonly IF = 22;
	public static readonly THEN = 23;
	public static readonly ELSE = 24;
	public static readonly ENDIF = 25;
	public static readonly ELSEIF = 26;
	public static readonly DO = 27;
	public static readonly CONTINUE = 28;
	public static readonly STOP = 29;
	public static readonly ENDDO = 30;
	public static readonly PAUSE = 31;
	public static readonly WRITE = 32;
	public static readonly READ = 33;
	public static readonly PRINT = 34;
	public static readonly OPEN = 35;
	public static readonly FMT = 36;
	public static readonly UNIT = 37;
	public static readonly ERR = 38;
	public static readonly IOSTAT = 39;
	public static readonly FORMAT = 40;
	public static readonly LET = 41;
	public static readonly CALL = 42;
	public static readonly RETURN = 43;
	public static readonly CLOSE = 44;
	public static readonly DOUBLE = 45;
	public static readonly IOSTART = 46;
	public static readonly SEQUENTIAL = 47;
	public static readonly ICON = 48;
	public static readonly LABEL = 49;
	public static readonly FILE = 50;
	public static readonly STATUS = 51;
	public static readonly ACCESS = 52;
	public static readonly POSITION = 53;
	public static readonly FORM = 54;
	public static readonly RECL = 55;
	public static readonly BLANK = 56;
	public static readonly EXIST = 57;
	public static readonly OPENED = 58;
	public static readonly NUMBER = 59;
	public static readonly NAMED = 60;
	public static readonly NAME_ = 61;
	public static readonly FORMATTED = 62;
	public static readonly UNFORMATTED = 63;
	public static readonly NEXTREC = 64;
	public static readonly INQUIRE = 65;
	public static readonly BACKSPACE = 66;
	public static readonly ENDFILE = 67;
	public static readonly REWIND = 68;
	public static readonly DOLLAR = 69;
	public static readonly COMMA = 70;
	public static readonly LPAREN = 71;
	public static readonly RPAREN = 72;
	public static readonly COLON = 73;
	public static readonly ASSIGN = 74;
	public static readonly MINUS = 75;
	public static readonly PLUS = 76;
	public static readonly DIV = 77;
	public static readonly STAR = 78;
	public static readonly POWER = 79;
	public static readonly LNOT = 80;
	public static readonly LAND = 81;
	public static readonly LOR = 82;
	public static readonly EQV = 83;
	public static readonly NEQV = 84;
	public static readonly XOR = 85;
	public static readonly EOR = 86;
	public static readonly LT = 87;
	public static readonly LE = 88;
	public static readonly GT = 89;
	public static readonly GE = 90;
	public static readonly NE = 91;
	public static readonly EQ = 92;
	public static readonly TRUE = 93;
	public static readonly FALSE = 94;
	public static readonly XCON = 95;
	public static readonly PCON = 96;
	public static readonly FCON = 97;
	public static readonly CCON = 98;
	public static readonly HOLLERITH = 99;
	public static readonly CONCATOP = 100;
	public static readonly CTRLDIRECT = 101;
	public static readonly CTRLREC = 102;
	public static readonly TO = 103;
	public static readonly SUBPROGRAMBLOCK = 104;
	public static readonly DOBLOCK = 105;
	public static readonly AIF = 106;
	public static readonly THENBLOCK = 107;
	public static readonly ELSEBLOCK = 108;
	public static readonly CODEROOT = 109;
	public static readonly COMPLEX = 110;
	public static readonly PRECISION = 111;
	public static readonly INTEGER = 112;
	public static readonly LOGICAL = 113;
	public static readonly SCON = 114;
	public static readonly RCON = 115;
	public static readonly NAME = 116;
	public static readonly COMMENT = 117;
	public static readonly STRINGLITERAL = 118;
	public static readonly EOL = 119;
	public static readonly WS = 120;
	public static readonly RULE_program = 0;
	public static readonly RULE_executableUnit = 1;
	public static readonly RULE_mainProgram = 2;
	public static readonly RULE_functionSubprogram = 3;
	public static readonly RULE_subroutineSubprogram = 4;
	public static readonly RULE_blockdataSubprogram = 5;
	public static readonly RULE_otherSpecificationStatement = 6;
	public static readonly RULE_executableStatement = 7;
	public static readonly RULE_programStatement = 8;
	public static readonly RULE_entryStatement = 9;
	public static readonly RULE_functionStatement = 10;
	public static readonly RULE_blockdataStatement = 11;
	public static readonly RULE_subroutineStatement = 12;
	public static readonly RULE_namelist = 13;
	public static readonly RULE_statement = 14;
	public static readonly RULE_subprogramBody = 15;
	public static readonly RULE_wholeStatement = 16;
	public static readonly RULE_endStatement = 17;
	public static readonly RULE_dimensionStatement = 18;
	public static readonly RULE_arrayDeclarator = 19;
	public static readonly RULE_arrayDeclarators = 20;
	public static readonly RULE_arrayDeclaratorExtents = 21;
	public static readonly RULE_arrayDeclaratorExtent = 22;
	public static readonly RULE_equivalenceStatement = 23;
	public static readonly RULE_equivEntityGroup = 24;
	public static readonly RULE_equivEntity = 25;
	public static readonly RULE_commonStatement = 26;
	public static readonly RULE_commonName = 27;
	public static readonly RULE_commonItem = 28;
	public static readonly RULE_commonItems = 29;
	public static readonly RULE_commonBlock = 30;
	public static readonly RULE_commentStatement = 31;
	public static readonly RULE_typeStatement = 32;
	public static readonly RULE_typeStatementNameList = 33;
	public static readonly RULE_typeStatementName = 34;
	public static readonly RULE_typeStatementNameCharList = 35;
	public static readonly RULE_typeStatementNameChar = 36;
	public static readonly RULE_typeStatementLenSpec = 37;
	public static readonly RULE_typename = 38;
	public static readonly RULE_type = 39;
	public static readonly RULE_typenameLen = 40;
	public static readonly RULE_pointerStatement = 41;
	public static readonly RULE_pointerDecl = 42;
	public static readonly RULE_implicitStatement = 43;
	public static readonly RULE_implicitSpec = 44;
	public static readonly RULE_implicitSpecs = 45;
	public static readonly RULE_implicitNone = 46;
	public static readonly RULE_implicitLetter = 47;
	public static readonly RULE_implicitRange = 48;
	public static readonly RULE_implicitLetters = 49;
	public static readonly RULE_lenSpecification = 50;
	public static readonly RULE_characterWithLen = 51;
	public static readonly RULE_cwlLen = 52;
	public static readonly RULE_parameterStatement = 53;
	public static readonly RULE_paramlist = 54;
	public static readonly RULE_paramassign = 55;
	public static readonly RULE_externalStatement = 56;
	public static readonly RULE_intrinsicStatement = 57;
	public static readonly RULE_saveStatement = 58;
	public static readonly RULE_saveEntity = 59;
	public static readonly RULE_dataStatement = 60;
	public static readonly RULE_dataStatementItem = 61;
	public static readonly RULE_dataStatementMultiple = 62;
	public static readonly RULE_dataStatementEntity = 63;
	public static readonly RULE_dse1 = 64;
	public static readonly RULE_dse2 = 65;
	public static readonly RULE_dataImpliedDo = 66;
	public static readonly RULE_dataImpliedDoRange = 67;
	public static readonly RULE_dataImpliedDoList = 68;
	public static readonly RULE_dataImpliedDoListWhat = 69;
	public static readonly RULE_gotoStatement = 70;
	public static readonly RULE_unconditionalGoto = 71;
	public static readonly RULE_computedGoto = 72;
	public static readonly RULE_lblRef = 73;
	public static readonly RULE_labelList = 74;
	public static readonly RULE_assignedGoto = 75;
	public static readonly RULE_ifStatement = 76;
	public static readonly RULE_arithmeticIfStatement = 77;
	public static readonly RULE_logicalIfStatement = 78;
	public static readonly RULE_blockIfStatement = 79;
	public static readonly RULE_firstIfBlock = 80;
	public static readonly RULE_elseIfStatement = 81;
	public static readonly RULE_elseStatement = 82;
	public static readonly RULE_endIfStatement = 83;
	public static readonly RULE_doStatement = 84;
	public static readonly RULE_doVarArgs = 85;
	public static readonly RULE_doWithLabel = 86;
	public static readonly RULE_doBody = 87;
	public static readonly RULE_doWithEndDo = 88;
	public static readonly RULE_enddoStatement = 89;
	public static readonly RULE_continueStatement = 90;
	public static readonly RULE_stopStatement = 91;
	public static readonly RULE_pauseStatement = 92;
	public static readonly RULE_writeStatement = 93;
	public static readonly RULE_readStatement = 94;
	public static readonly RULE_printStatement = 95;
	public static readonly RULE_assignmentStatement = 96;
	public static readonly RULE_controlInfoList = 97;
	public static readonly RULE_controlErrSpec = 98;
	public static readonly RULE_controlInfoListItem = 99;
	public static readonly RULE_ioList = 100;
	public static readonly RULE_ioListItem = 101;
	public static readonly RULE_ioImpliedDoList = 102;
	public static readonly RULE_openStatement = 103;
	public static readonly RULE_openControl = 104;
	public static readonly RULE_controlFmt = 105;
	public static readonly RULE_controlUnit = 106;
	public static readonly RULE_controlRec = 107;
	public static readonly RULE_controlEnd = 108;
	public static readonly RULE_controlErr = 109;
	public static readonly RULE_controlIostat = 110;
	public static readonly RULE_controlFile = 111;
	public static readonly RULE_controlStatus = 112;
	public static readonly RULE_controlAccess = 113;
	public static readonly RULE_controlPosition = 114;
	public static readonly RULE_controlForm = 115;
	public static readonly RULE_controlRecl = 116;
	public static readonly RULE_controlBlank = 117;
	public static readonly RULE_controlExist = 118;
	public static readonly RULE_controlOpened = 119;
	public static readonly RULE_controlNumber = 120;
	public static readonly RULE_controlNamed = 121;
	public static readonly RULE_controlName = 122;
	public static readonly RULE_controlSequential = 123;
	public static readonly RULE_controlDirect = 124;
	public static readonly RULE_controlFormatted = 125;
	public static readonly RULE_controlUnformatted = 126;
	public static readonly RULE_controlNextrec = 127;
	public static readonly RULE_closeStatement = 128;
	public static readonly RULE_closeControl = 129;
	public static readonly RULE_inquireStatement = 130;
	public static readonly RULE_inquireControl = 131;
	public static readonly RULE_backspaceStatement = 132;
	public static readonly RULE_endfileStatement = 133;
	public static readonly RULE_rewindStatement = 134;
	public static readonly RULE_berFinish = 135;
	public static readonly RULE_berFinishItem = 136;
	public static readonly RULE_unitIdentifier = 137;
	public static readonly RULE_formatIdentifier = 138;
	public static readonly RULE_formatStatement = 139;
	public static readonly RULE_fmtSpec = 140;
	public static readonly RULE_formatsep = 141;
	public static readonly RULE_formatedit = 142;
	public static readonly RULE_editElement = 143;
	public static readonly RULE_statementFunctionStatement = 144;
	public static readonly RULE_sfArgs = 145;
	public static readonly RULE_callStatement = 146;
	public static readonly RULE_subroutineCall = 147;
	public static readonly RULE_callArgumentList = 148;
	public static readonly RULE_callArgument = 149;
	public static readonly RULE_returnStatement = 150;
	public static readonly RULE_expression = 151;
	public static readonly RULE_ncExpr = 152;
	public static readonly RULE_lexpr0 = 153;
	public static readonly RULE_lexpr1 = 154;
	public static readonly RULE_lexpr2 = 155;
	public static readonly RULE_lexpr3 = 156;
	public static readonly RULE_lexpr4 = 157;
	public static readonly RULE_aexpr0 = 158;
	public static readonly RULE_aexpr1 = 159;
	public static readonly RULE_aexpr2 = 160;
	public static readonly RULE_aexpr3 = 161;
	public static readonly RULE_aexpr4 = 162;
	public static readonly RULE_iexpr = 163;
	public static readonly RULE_iexprCode = 164;
	public static readonly RULE_iexpr1 = 165;
	public static readonly RULE_iexpr2 = 166;
	public static readonly RULE_iexpr3 = 167;
	public static readonly RULE_iexpr4 = 168;
	public static readonly RULE_constantExpr = 169;
	public static readonly RULE_arithmeticExpression = 170;
	public static readonly RULE_integerExpr = 171;
	public static readonly RULE_intRealDpExpr = 172;
	public static readonly RULE_arithmeticConstExpr = 173;
	public static readonly RULE_intConstantExpr = 174;
	public static readonly RULE_characterExpression = 175;
	public static readonly RULE_concatOp = 176;
	public static readonly RULE_logicalExpression = 177;
	public static readonly RULE_logicalConstExpr = 178;
	public static readonly RULE_arrayElementName = 179;
	public static readonly RULE_subscripts = 180;
	public static readonly RULE_varRef = 181;
	public static readonly RULE_varRefCode = 182;
	public static readonly RULE_substringApp = 183;
	public static readonly RULE_variableName = 184;
	public static readonly RULE_arrayName = 185;
	public static readonly RULE_subroutineName = 186;
	public static readonly RULE_functionName = 187;
	public static readonly RULE_constant = 188;
	public static readonly RULE_unsignedArithmeticConstant = 189;
	public static readonly RULE_complexConstant = 190;
	public static readonly RULE_logicalConstant = 191;
	public static readonly RULE_identifier = 192;
	public static readonly RULE_to = 193;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "executableUnit", "mainProgram", "functionSubprogram", "subroutineSubprogram", 
		"blockdataSubprogram", "otherSpecificationStatement", "executableStatement", 
		"programStatement", "entryStatement", "functionStatement", "blockdataStatement", 
		"subroutineStatement", "namelist", "statement", "subprogramBody", "wholeStatement", 
		"endStatement", "dimensionStatement", "arrayDeclarator", "arrayDeclarators", 
		"arrayDeclaratorExtents", "arrayDeclaratorExtent", "equivalenceStatement", 
		"equivEntityGroup", "equivEntity", "commonStatement", "commonName", "commonItem", 
		"commonItems", "commonBlock", "commentStatement", "typeStatement", "typeStatementNameList", 
		"typeStatementName", "typeStatementNameCharList", "typeStatementNameChar", 
		"typeStatementLenSpec", "typename", "type", "typenameLen", "pointerStatement", 
		"pointerDecl", "implicitStatement", "implicitSpec", "implicitSpecs", "implicitNone", 
		"implicitLetter", "implicitRange", "implicitLetters", "lenSpecification", 
		"characterWithLen", "cwlLen", "parameterStatement", "paramlist", "paramassign", 
		"externalStatement", "intrinsicStatement", "saveStatement", "saveEntity", 
		"dataStatement", "dataStatementItem", "dataStatementMultiple", "dataStatementEntity", 
		"dse1", "dse2", "dataImpliedDo", "dataImpliedDoRange", "dataImpliedDoList", 
		"dataImpliedDoListWhat", "gotoStatement", "unconditionalGoto", "computedGoto", 
		"lblRef", "labelList", "assignedGoto", "ifStatement", "arithmeticIfStatement", 
		"logicalIfStatement", "blockIfStatement", "firstIfBlock", "elseIfStatement", 
		"elseStatement", "endIfStatement", "doStatement", "doVarArgs", "doWithLabel", 
		"doBody", "doWithEndDo", "enddoStatement", "continueStatement", "stopStatement", 
		"pauseStatement", "writeStatement", "readStatement", "printStatement", 
		"assignmentStatement", "controlInfoList", "controlErrSpec", "controlInfoListItem", 
		"ioList", "ioListItem", "ioImpliedDoList", "openStatement", "openControl", 
		"controlFmt", "controlUnit", "controlRec", "controlEnd", "controlErr", 
		"controlIostat", "controlFile", "controlStatus", "controlAccess", "controlPosition", 
		"controlForm", "controlRecl", "controlBlank", "controlExist", "controlOpened", 
		"controlNumber", "controlNamed", "controlName", "controlSequential", "controlDirect", 
		"controlFormatted", "controlUnformatted", "controlNextrec", "closeStatement", 
		"closeControl", "inquireStatement", "inquireControl", "backspaceStatement", 
		"endfileStatement", "rewindStatement", "berFinish", "berFinishItem", "unitIdentifier", 
		"formatIdentifier", "formatStatement", "fmtSpec", "formatsep", "formatedit", 
		"editElement", "statementFunctionStatement", "sfArgs", "callStatement", 
		"subroutineCall", "callArgumentList", "callArgument", "returnStatement", 
		"expression", "ncExpr", "lexpr0", "lexpr1", "lexpr2", "lexpr3", "lexpr4", 
		"aexpr0", "aexpr1", "aexpr2", "aexpr3", "aexpr4", "iexpr", "iexprCode", 
		"iexpr1", "iexpr2", "iexpr3", "iexpr4", "constantExpr", "arithmeticExpression", 
		"integerExpr", "intRealDpExpr", "arithmeticConstExpr", "intConstantExpr", 
		"characterExpression", "concatOp", "logicalExpression", "logicalConstExpr", 
		"arrayElementName", "subscripts", "varRef", "varRefCode", "substringApp", 
		"variableName", "arrayName", "subroutineName", "functionName", "constant", 
		"unsignedArithmeticConstant", "complexConstant", "logicalConstant", "identifier", 
		"to",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'$'", 
		"','", "'('", "')'", "':'", "'='", "'-'", "'+'", "'/'", "'*'", "'**'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'XCON'", "'PCON'", "'FCON'", "'CCON'", "'HOLLERITH'", "'CONCATOP'", 
		"'CTRLDIRECT'", "'CTRLREC'", "'TO'", "'SUBPROGRAMBLOCK'", "'DOBLOCK'", 
		"'AIF'", "'THENBLOCK'", "'ELSEBLOCK'", "'CODEROOT'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PROGRAM", "ENTRY", "FUNCTION", "BLOCK", "SUBROUTINE", "END", 
		"DIMENSION", "REAL", "EQUIVALENCE", "COMMON", "POINTER", "IMPLICIT", "NONE", 
		"CHARACTER", "PARAMETER", "EXTERNAL", "INTRINSIC", "SAVE", "DATA", "GO", 
		"GOTO", "IF", "THEN", "ELSE", "ENDIF", "ELSEIF", "DO", "CONTINUE", "STOP", 
		"ENDDO", "PAUSE", "WRITE", "READ", "PRINT", "OPEN", "FMT", "UNIT", "ERR", 
		"IOSTAT", "FORMAT", "LET", "CALL", "RETURN", "CLOSE", "DOUBLE", "IOSTART", 
		"SEQUENTIAL", "ICON", "LABEL", "FILE", "STATUS", "ACCESS", "POSITION", 
		"FORM", "RECL", "BLANK", "EXIST", "OPENED", "NUMBER", "NAMED", "NAME_", 
		"FORMATTED", "UNFORMATTED", "NEXTREC", "INQUIRE", "BACKSPACE", "ENDFILE", 
		"REWIND", "DOLLAR", "COMMA", "LPAREN", "RPAREN", "COLON", "ASSIGN", "MINUS", 
		"PLUS", "DIV", "STAR", "POWER", "LNOT", "LAND", "LOR", "EQV", "NEQV", 
		"XOR", "EOR", "LT", "LE", "GT", "GE", "NE", "EQ", "TRUE", "FALSE", "XCON", 
		"PCON", "FCON", "CCON", "HOLLERITH", "CONCATOP", "CTRLDIRECT", "CTRLREC", 
		"TO", "SUBPROGRAMBLOCK", "DOBLOCK", "AIF", "THENBLOCK", "ELSEBLOCK", "CODEROOT", 
		"COMPLEX", "PRECISION", "INTEGER", "LOGICAL", "SCON", "RCON", "NAME", 
		"COMMENT", "STRINGLITERAL", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Fortran77Parser._LITERAL_NAMES, Fortran77Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Fortran77Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Fortran77Parser.g4"; }

	// @Override
	public get ruleNames(): string[] { return Fortran77Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Fortran77Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Fortran77Parser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Fortran77Parser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 388;
				this.executableUnit();
				}
				}
				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Fortran77Parser.PROGRAM) | (1 << Fortran77Parser.ENTRY) | (1 << Fortran77Parser.FUNCTION) | (1 << Fortran77Parser.BLOCK) | (1 << Fortran77Parser.SUBROUTINE) | (1 << Fortran77Parser.DIMENSION) | (1 << Fortran77Parser.REAL) | (1 << Fortran77Parser.EQUIVALENCE) | (1 << Fortran77Parser.COMMON) | (1 << Fortran77Parser.POINTER) | (1 << Fortran77Parser.IMPLICIT) | (1 << Fortran77Parser.PARAMETER) | (1 << Fortran77Parser.EXTERNAL) | (1 << Fortran77Parser.INTRINSIC) | (1 << Fortran77Parser.SAVE) | (1 << Fortran77Parser.DATA) | (1 << Fortran77Parser.GO) | (1 << Fortran77Parser.GOTO) | (1 << Fortran77Parser.IF) | (1 << Fortran77Parser.DO) | (1 << Fortran77Parser.CONTINUE) | (1 << Fortran77Parser.STOP) | (1 << Fortran77Parser.PAUSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Fortran77Parser.WRITE - 32)) | (1 << (Fortran77Parser.READ - 32)) | (1 << (Fortran77Parser.PRINT - 32)) | (1 << (Fortran77Parser.OPEN - 32)) | (1 << (Fortran77Parser.LET - 32)) | (1 << (Fortran77Parser.CALL - 32)) | (1 << (Fortran77Parser.RETURN - 32)) | (1 << (Fortran77Parser.CLOSE - 32)) | (1 << (Fortran77Parser.DOUBLE - 32)) | (1 << (Fortran77Parser.ICON - 32)) | (1 << (Fortran77Parser.LABEL - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Fortran77Parser.INQUIRE - 65)) | (1 << (Fortran77Parser.BACKSPACE - 65)) | (1 << (Fortran77Parser.ENDFILE - 65)) | (1 << (Fortran77Parser.REWIND - 65)) | (1 << (Fortran77Parser.LPAREN - 65)) | (1 << (Fortran77Parser.MINUS - 65)) | (1 << (Fortran77Parser.PLUS - 65)) | (1 << (Fortran77Parser.LNOT - 65)) | (1 << (Fortran77Parser.TRUE - 65)) | (1 << (Fortran77Parser.FALSE - 65)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (Fortran77Parser.HOLLERITH - 99)) | (1 << (Fortran77Parser.COMPLEX - 99)) | (1 << (Fortran77Parser.INTEGER - 99)) | (1 << (Fortran77Parser.LOGICAL - 99)) | (1 << (Fortran77Parser.SCON - 99)) | (1 << (Fortran77Parser.RCON - 99)) | (1 << (Fortran77Parser.NAME - 99)) | (1 << (Fortran77Parser.COMMENT - 99)))) !== 0));
			this.state = 396;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.EOL) {
				{
				{
				this.state = 393;
				this.match(Fortran77Parser.EOL);
				}
				}
				this.state = 398;
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
	public executableUnit(): ExecutableUnitContext {
		let _localctx: ExecutableUnitContext = new ExecutableUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Fortran77Parser.RULE_executableUnit);
		try {
			this.state = 403;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 399;
				this.functionSubprogram();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 400;
				this.mainProgram();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 401;
				this.subroutineSubprogram();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 402;
				this.blockdataSubprogram();
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
	public mainProgram(): MainProgramContext {
		let _localctx: MainProgramContext = new MainProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Fortran77Parser.RULE_mainProgram);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.PROGRAM) {
				{
				this.state = 405;
				this.programStatement();
				}
			}

			this.state = 408;
			this.subprogramBody();
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
	public functionSubprogram(): FunctionSubprogramContext {
		let _localctx: FunctionSubprogramContext = new FunctionSubprogramContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Fortran77Parser.RULE_functionSubprogram);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			this.functionStatement();
			this.state = 411;
			this.subprogramBody();
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
	public subroutineSubprogram(): SubroutineSubprogramContext {
		let _localctx: SubroutineSubprogramContext = new SubroutineSubprogramContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Fortran77Parser.RULE_subroutineSubprogram);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.subroutineStatement();
			this.state = 414;
			this.subprogramBody();
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
	public blockdataSubprogram(): BlockdataSubprogramContext {
		let _localctx: BlockdataSubprogramContext = new BlockdataSubprogramContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Fortran77Parser.RULE_blockdataSubprogram);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			this.blockdataStatement();
			this.state = 417;
			this.subprogramBody();
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
	public otherSpecificationStatement(): OtherSpecificationStatementContext {
		let _localctx: OtherSpecificationStatementContext = new OtherSpecificationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Fortran77Parser.RULE_otherSpecificationStatement);
		try {
			this.state = 423;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.DIMENSION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 419;
				this.dimensionStatement();
				}
				break;
			case Fortran77Parser.EQUIVALENCE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 420;
				this.equivalenceStatement();
				}
				break;
			case Fortran77Parser.INTRINSIC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 421;
				this.intrinsicStatement();
				}
				break;
			case Fortran77Parser.SAVE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 422;
				this.saveStatement();
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
	public executableStatement(): ExecutableStatementContext {
		let _localctx: ExecutableStatementContext = new ExecutableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Fortran77Parser.RULE_executableStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.REAL:
			case Fortran77Parser.NAME:
				{
				this.state = 425;
				this.assignmentStatement();
				}
				break;
			case Fortran77Parser.GO:
			case Fortran77Parser.GOTO:
				{
				this.state = 426;
				this.gotoStatement();
				}
				break;
			case Fortran77Parser.IF:
				{
				this.state = 427;
				this.ifStatement();
				}
				break;
			case Fortran77Parser.DO:
				{
				this.state = 428;
				this.doStatement();
				}
				break;
			case Fortran77Parser.CONTINUE:
				{
				this.state = 429;
				this.continueStatement();
				}
				break;
			case Fortran77Parser.STOP:
				{
				this.state = 430;
				this.stopStatement();
				}
				break;
			case Fortran77Parser.PAUSE:
				{
				this.state = 431;
				this.pauseStatement();
				}
				break;
			case Fortran77Parser.READ:
				{
				this.state = 432;
				this.readStatement();
				}
				break;
			case Fortran77Parser.WRITE:
				{
				this.state = 433;
				this.writeStatement();
				}
				break;
			case Fortran77Parser.PRINT:
				{
				this.state = 434;
				this.printStatement();
				}
				break;
			case Fortran77Parser.REWIND:
				{
				this.state = 435;
				this.rewindStatement();
				}
				break;
			case Fortran77Parser.BACKSPACE:
				{
				this.state = 436;
				this.backspaceStatement();
				}
				break;
			case Fortran77Parser.OPEN:
				{
				this.state = 437;
				this.openStatement();
				}
				break;
			case Fortran77Parser.CLOSE:
				{
				this.state = 438;
				this.closeStatement();
				}
				break;
			case Fortran77Parser.ENDFILE:
				{
				this.state = 439;
				this.endfileStatement();
				}
				break;
			case Fortran77Parser.INQUIRE:
				{
				this.state = 440;
				this.inquireStatement();
				}
				break;
			case Fortran77Parser.CALL:
				{
				this.state = 441;
				this.callStatement();
				}
				break;
			case Fortran77Parser.RETURN:
				{
				this.state = 442;
				this.returnStatement();
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
	public programStatement(): ProgramStatementContext {
		let _localctx: ProgramStatementContext = new ProgramStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Fortran77Parser.RULE_programStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.match(Fortran77Parser.PROGRAM);
			this.state = 446;
			this.match(Fortran77Parser.NAME);
			this.state = 447;
			this.match(Fortran77Parser.EOL);
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
	public entryStatement(): EntryStatementContext {
		let _localctx: EntryStatementContext = new EntryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Fortran77Parser.RULE_entryStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this.match(Fortran77Parser.ENTRY);
			this.state = 450;
			this.match(Fortran77Parser.NAME);
			this.state = 455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.LPAREN) {
				{
				this.state = 451;
				this.match(Fortran77Parser.LPAREN);
				this.state = 452;
				this.namelist();
				this.state = 453;
				this.match(Fortran77Parser.RPAREN);
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
	public functionStatement(): FunctionStatementContext {
		let _localctx: FunctionStatementContext = new FunctionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Fortran77Parser.RULE_functionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.REAL || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Fortran77Parser.DOUBLE - 45)) | (1 << (Fortran77Parser.ICON - 45)) | (1 << (Fortran77Parser.LPAREN - 45)) | (1 << (Fortran77Parser.MINUS - 45)) | (1 << (Fortran77Parser.PLUS - 45)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (Fortran77Parser.LNOT - 80)) | (1 << (Fortran77Parser.TRUE - 80)) | (1 << (Fortran77Parser.FALSE - 80)) | (1 << (Fortran77Parser.HOLLERITH - 80)) | (1 << (Fortran77Parser.COMPLEX - 80)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (Fortran77Parser.INTEGER - 112)) | (1 << (Fortran77Parser.LOGICAL - 112)) | (1 << (Fortran77Parser.SCON - 112)) | (1 << (Fortran77Parser.RCON - 112)) | (1 << (Fortran77Parser.NAME - 112)))) !== 0)) {
				{
				this.state = 457;
				this.type();
				}
			}

			this.state = 460;
			this.match(Fortran77Parser.FUNCTION);
			this.state = 461;
			this.match(Fortran77Parser.NAME);
			this.state = 462;
			this.match(Fortran77Parser.LPAREN);
			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.REAL || _la === Fortran77Parser.NAME) {
				{
				this.state = 463;
				this.namelist();
				}
			}

			this.state = 466;
			this.match(Fortran77Parser.RPAREN);
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
	public blockdataStatement(): BlockdataStatementContext {
		let _localctx: BlockdataStatementContext = new BlockdataStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Fortran77Parser.RULE_blockdataStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this.match(Fortran77Parser.BLOCK);
			this.state = 469;
			this.match(Fortran77Parser.NAME);
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
	public subroutineStatement(): SubroutineStatementContext {
		let _localctx: SubroutineStatementContext = new SubroutineStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Fortran77Parser.RULE_subroutineStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this.match(Fortran77Parser.SUBROUTINE);
			this.state = 472;
			this.match(Fortran77Parser.NAME);
			this.state = 478;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 473;
				this.match(Fortran77Parser.LPAREN);
				this.state = 475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Fortran77Parser.REAL || _la === Fortran77Parser.NAME) {
					{
					this.state = 474;
					this.namelist();
					}
				}

				this.state = 477;
				this.match(Fortran77Parser.RPAREN);
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
	public namelist(): NamelistContext {
		let _localctx: NamelistContext = new NamelistContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Fortran77Parser.RULE_namelist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
			this.identifier();
			this.state = 485;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 481;
				this.match(Fortran77Parser.COMMA);
				this.state = 482;
				this.identifier();
				}
				}
				this.state = 487;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Fortran77Parser.RULE_statement);
		try {
			this.state = 502;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 488;
				this.entryStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 489;
				this.implicitStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 490;
				this.parameterStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 491;
				this.typeStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 492;
				this.commonStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 493;
				this.pointerStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 494;
				this.externalStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 495;
				this.otherSpecificationStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 496;
				this.dataStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				{
				this.state = 497;
				this.statementFunctionStatement();
				}
				this.state = 498;
				this.statementFunctionStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 500;
				this.executableStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 501;
				this.commentStatement();
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
	public subprogramBody(): SubprogramBodyContext {
		let _localctx: SubprogramBodyContext = new SubprogramBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Fortran77Parser.RULE_subprogramBody);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 504;
					this.wholeStatement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 507;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 509;
			this.endStatement();
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
	public wholeStatement(): WholeStatementContext {
		let _localctx: WholeStatementContext = new WholeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Fortran77Parser.RULE_wholeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.LABEL) {
				{
				this.state = 511;
				this.match(Fortran77Parser.LABEL);
				}
			}

			this.state = 514;
			this.statement();
			this.state = 515;
			this.match(Fortran77Parser.EOL);
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
	public endStatement(): EndStatementContext {
		let _localctx: EndStatementContext = new EndStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, Fortran77Parser.RULE_endStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.LABEL) {
				{
				this.state = 517;
				this.match(Fortran77Parser.LABEL);
				}
			}

			this.state = 520;
			this.match(Fortran77Parser.END);
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
	public dimensionStatement(): DimensionStatementContext {
		let _localctx: DimensionStatementContext = new DimensionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Fortran77Parser.RULE_dimensionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			this.match(Fortran77Parser.DIMENSION);
			this.state = 523;
			this.arrayDeclarators();
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
	public arrayDeclarator(): ArrayDeclaratorContext {
		let _localctx: ArrayDeclaratorContext = new ArrayDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, Fortran77Parser.RULE_arrayDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			_la = this._input.LA(1);
			if (!(_la === Fortran77Parser.REAL || _la === Fortran77Parser.NAME)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 526;
			this.match(Fortran77Parser.LPAREN);
			this.state = 527;
			this.arrayDeclaratorExtents();
			this.state = 528;
			this.match(Fortran77Parser.RPAREN);
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
	public arrayDeclarators(): ArrayDeclaratorsContext {
		let _localctx: ArrayDeclaratorsContext = new ArrayDeclaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Fortran77Parser.RULE_arrayDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			this.arrayDeclarator();
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 531;
				this.match(Fortran77Parser.COMMA);
				this.state = 532;
				this.arrayDeclarator();
				}
				}
				this.state = 537;
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
	public arrayDeclaratorExtents(): ArrayDeclaratorExtentsContext {
		let _localctx: ArrayDeclaratorExtentsContext = new ArrayDeclaratorExtentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, Fortran77Parser.RULE_arrayDeclaratorExtents);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538;
			this.arrayDeclaratorExtent();
			this.state = 543;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 539;
				this.match(Fortran77Parser.COMMA);
				this.state = 540;
				this.arrayDeclaratorExtent();
				}
				}
				this.state = 545;
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
	public arrayDeclaratorExtent(): ArrayDeclaratorExtentContext {
		let _localctx: ArrayDeclaratorExtentContext = new ArrayDeclaratorExtentContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Fortran77Parser.RULE_arrayDeclaratorExtent);
		let _la: number;
		try {
			this.state = 555;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.ICON:
			case Fortran77Parser.LPAREN:
			case Fortran77Parser.MINUS:
			case Fortran77Parser.PLUS:
			case Fortran77Parser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 546;
				this.iexprCode();
				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Fortran77Parser.COLON) {
					{
					this.state = 547;
					this.match(Fortran77Parser.COLON);
					this.state = 550;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Fortran77Parser.ICON:
					case Fortran77Parser.LPAREN:
					case Fortran77Parser.MINUS:
					case Fortran77Parser.PLUS:
					case Fortran77Parser.NAME:
						{
						this.state = 548;
						this.iexprCode();
						}
						break;
					case Fortran77Parser.STAR:
						{
						this.state = 549;
						this.match(Fortran77Parser.STAR);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}

				}
				break;
			case Fortran77Parser.STAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 554;
				this.match(Fortran77Parser.STAR);
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
	public equivalenceStatement(): EquivalenceStatementContext {
		let _localctx: EquivalenceStatementContext = new EquivalenceStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Fortran77Parser.RULE_equivalenceStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 557;
			this.match(Fortran77Parser.EQUIVALENCE);
			this.state = 558;
			this.equivEntityGroup();
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 559;
				this.match(Fortran77Parser.COMMA);
				this.state = 560;
				this.equivEntityGroup();
				}
				}
				this.state = 565;
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
	public equivEntityGroup(): EquivEntityGroupContext {
		let _localctx: EquivEntityGroupContext = new EquivEntityGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, Fortran77Parser.RULE_equivEntityGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 566;
			this.match(Fortran77Parser.LPAREN);
			this.state = 567;
			this.equivEntity();
			this.state = 572;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 568;
				this.match(Fortran77Parser.COMMA);
				this.state = 569;
				this.equivEntity();
				}
				}
				this.state = 574;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 575;
			this.match(Fortran77Parser.RPAREN);
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
	public equivEntity(): EquivEntityContext {
		let _localctx: EquivEntityContext = new EquivEntityContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, Fortran77Parser.RULE_equivEntity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 577;
			this.varRef();
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
	public commonStatement(): CommonStatementContext {
		let _localctx: CommonStatementContext = new CommonStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, Fortran77Parser.RULE_commonStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 579;
			this.match(Fortran77Parser.COMMON);
			this.state = 589;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.DIV:
				{
				this.state = 580;
				this.commonBlock();
				this.state = 585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Fortran77Parser.COMMA) {
					{
					{
					this.state = 581;
					this.match(Fortran77Parser.COMMA);
					this.state = 582;
					this.commonBlock();
					}
					}
					this.state = 587;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case Fortran77Parser.REAL:
			case Fortran77Parser.NAME:
				{
				this.state = 588;
				this.commonItems();
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
	public commonName(): CommonNameContext {
		let _localctx: CommonNameContext = new CommonNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, Fortran77Parser.RULE_commonName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
			this.match(Fortran77Parser.DIV);
			this.state = 595;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.NAME:
				{
				this.state = 592;
				this.match(Fortran77Parser.NAME);
				this.state = 593;
				this.match(Fortran77Parser.DIV);
				}
				break;
			case Fortran77Parser.DIV:
				{
				this.state = 594;
				this.match(Fortran77Parser.DIV);
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
	public commonItem(): CommonItemContext {
		let _localctx: CommonItemContext = new CommonItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, Fortran77Parser.RULE_commonItem);
		try {
			this.state = 599;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 597;
				this.match(Fortran77Parser.NAME);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 598;
				this.arrayDeclarator();
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
	public commonItems(): CommonItemsContext {
		let _localctx: CommonItemsContext = new CommonItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, Fortran77Parser.RULE_commonItems);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this.commonItem();
			this.state = 606;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 602;
					this.match(Fortran77Parser.COMMA);
					this.state = 603;
					this.commonItem();
					}
					}
				}
				this.state = 608;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
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
	public commonBlock(): CommonBlockContext {
		let _localctx: CommonBlockContext = new CommonBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, Fortran77Parser.RULE_commonBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 609;
			this.commonName();
			this.state = 610;
			this.commonItems();
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
	public commentStatement(): CommentStatementContext {
		let _localctx: CommentStatementContext = new CommentStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, Fortran77Parser.RULE_commentStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
			this.match(Fortran77Parser.COMMENT);
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
	public typeStatement(): TypeStatementContext {
		let _localctx: TypeStatementContext = new TypeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, Fortran77Parser.RULE_typeStatement);
		try {
			this.state = 620;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 614;
				this.typename();
				this.state = 615;
				this.typeStatementNameList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 617;
				this.characterWithLen();
				this.state = 618;
				this.typeStatementNameCharList();
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
	public typeStatementNameList(): TypeStatementNameListContext {
		let _localctx: TypeStatementNameListContext = new TypeStatementNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, Fortran77Parser.RULE_typeStatementNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 622;
			this.typeStatementName();
			this.state = 627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 623;
				this.match(Fortran77Parser.COMMA);
				this.state = 624;
				this.typeStatementName();
				}
				}
				this.state = 629;
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
	public typeStatementName(): TypeStatementNameContext {
		let _localctx: TypeStatementNameContext = new TypeStatementNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, Fortran77Parser.RULE_typeStatementName);
		try {
			this.state = 632;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 630;
				this.match(Fortran77Parser.NAME);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 631;
				this.arrayDeclarator();
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
	public typeStatementNameCharList(): TypeStatementNameCharListContext {
		let _localctx: TypeStatementNameCharListContext = new TypeStatementNameCharListContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, Fortran77Parser.RULE_typeStatementNameCharList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this.typeStatementNameChar();
			this.state = 639;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 635;
				this.match(Fortran77Parser.COMMA);
				this.state = 636;
				this.typeStatementNameChar();
				}
				}
				this.state = 641;
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
	public typeStatementNameChar(): TypeStatementNameCharContext {
		let _localctx: TypeStatementNameCharContext = new TypeStatementNameCharContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, Fortran77Parser.RULE_typeStatementNameChar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this.typeStatementName();
			this.state = 644;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.STAR) {
				{
				this.state = 643;
				this.typeStatementLenSpec();
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
	public typeStatementLenSpec(): TypeStatementLenSpecContext {
		let _localctx: TypeStatementLenSpecContext = new TypeStatementLenSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Fortran77Parser.RULE_typeStatementLenSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 646;
			this.match(Fortran77Parser.STAR);
			this.state = 647;
			this.lenSpecification();
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
	public typename(): TypenameContext {
		let _localctx: TypenameContext = new TypenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, Fortran77Parser.RULE_typename);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 663;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 649;
				this.match(Fortran77Parser.REAL);
				}
				break;

			case 2:
				{
				this.state = 650;
				this.match(Fortran77Parser.COMPLEX);
				this.state = 655;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Fortran77Parser.STAR) {
					{
					this.state = 651;
					this.match(Fortran77Parser.STAR);
					this.state = 653;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Fortran77Parser.ICON) {
						{
						this.state = 652;
						this.match(Fortran77Parser.ICON);
						}
					}

					}
				}

				}
				break;

			case 3:
				{
				this.state = 657;
				this.match(Fortran77Parser.DOUBLE);
				this.state = 658;
				this.match(Fortran77Parser.COMPLEX);
				}
				break;

			case 4:
				{
				this.state = 659;
				this.match(Fortran77Parser.DOUBLE);
				this.state = 660;
				this.match(Fortran77Parser.PRECISION);
				}
				break;

			case 5:
				{
				this.state = 661;
				this.match(Fortran77Parser.INTEGER);
				}
				break;

			case 6:
				{
				this.state = 662;
				this.match(Fortran77Parser.LOGICAL);
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, Fortran77Parser.RULE_type);
		try {
			this.state = 667;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 665;
				this.typename();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 666;
				this.characterWithLen();
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
	public typenameLen(): TypenameLenContext {
		let _localctx: TypenameLenContext = new TypenameLenContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, Fortran77Parser.RULE_typenameLen);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			this.match(Fortran77Parser.STAR);
			this.state = 670;
			this.match(Fortran77Parser.ICON);
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
	public pointerStatement(): PointerStatementContext {
		let _localctx: PointerStatementContext = new PointerStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, Fortran77Parser.RULE_pointerStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this.match(Fortran77Parser.POINTER);
			this.state = 673;
			this.pointerDecl();
			this.state = 678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 674;
				this.match(Fortran77Parser.COMMA);
				this.state = 675;
				this.pointerDecl();
				}
				}
				this.state = 680;
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
	public pointerDecl(): PointerDeclContext {
		let _localctx: PointerDeclContext = new PointerDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, Fortran77Parser.RULE_pointerDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			this.match(Fortran77Parser.LPAREN);
			this.state = 682;
			this.match(Fortran77Parser.NAME);
			this.state = 683;
			this.match(Fortran77Parser.COMMA);
			this.state = 684;
			this.match(Fortran77Parser.NAME);
			this.state = 685;
			this.match(Fortran77Parser.RPAREN);
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
	public implicitStatement(): ImplicitStatementContext {
		let _localctx: ImplicitStatementContext = new ImplicitStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Fortran77Parser.RULE_implicitStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 687;
			this.match(Fortran77Parser.IMPLICIT);
			this.state = 690;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.NONE:
				{
				this.state = 688;
				this.implicitNone();
				}
				break;
			case Fortran77Parser.REAL:
			case Fortran77Parser.DOUBLE:
			case Fortran77Parser.ICON:
			case Fortran77Parser.LPAREN:
			case Fortran77Parser.MINUS:
			case Fortran77Parser.PLUS:
			case Fortran77Parser.LNOT:
			case Fortran77Parser.TRUE:
			case Fortran77Parser.FALSE:
			case Fortran77Parser.HOLLERITH:
			case Fortran77Parser.COMPLEX:
			case Fortran77Parser.INTEGER:
			case Fortran77Parser.LOGICAL:
			case Fortran77Parser.SCON:
			case Fortran77Parser.RCON:
			case Fortran77Parser.NAME:
				{
				this.state = 689;
				this.implicitSpecs();
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
	public implicitSpec(): ImplicitSpecContext {
		let _localctx: ImplicitSpecContext = new ImplicitSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, Fortran77Parser.RULE_implicitSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 692;
			this.type();
			this.state = 693;
			this.match(Fortran77Parser.LPAREN);
			this.state = 694;
			this.implicitLetters();
			this.state = 695;
			this.match(Fortran77Parser.RPAREN);
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
	public implicitSpecs(): ImplicitSpecsContext {
		let _localctx: ImplicitSpecsContext = new ImplicitSpecsContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, Fortran77Parser.RULE_implicitSpecs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 697;
			this.implicitSpec();
			this.state = 702;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 698;
				this.match(Fortran77Parser.COMMA);
				this.state = 699;
				this.implicitSpec();
				}
				}
				this.state = 704;
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
	public implicitNone(): ImplicitNoneContext {
		let _localctx: ImplicitNoneContext = new ImplicitNoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, Fortran77Parser.RULE_implicitNone);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 705;
			this.match(Fortran77Parser.NONE);
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
	public implicitLetter(): ImplicitLetterContext {
		let _localctx: ImplicitLetterContext = new ImplicitLetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, Fortran77Parser.RULE_implicitLetter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this.match(Fortran77Parser.NAME);
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
	public implicitRange(): ImplicitRangeContext {
		let _localctx: ImplicitRangeContext = new ImplicitRangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, Fortran77Parser.RULE_implicitRange);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 709;
			this.implicitLetter();
			this.state = 712;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.MINUS) {
				{
				this.state = 710;
				this.match(Fortran77Parser.MINUS);
				this.state = 711;
				this.implicitLetter();
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
	public implicitLetters(): ImplicitLettersContext {
		let _localctx: ImplicitLettersContext = new ImplicitLettersContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, Fortran77Parser.RULE_implicitLetters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
			this.implicitRange();
			this.state = 719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 715;
				this.match(Fortran77Parser.COMMA);
				this.state = 716;
				this.implicitRange();
				}
				}
				this.state = 721;
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
	public lenSpecification(): LenSpecificationContext {
		let _localctx: LenSpecificationContext = new LenSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, Fortran77Parser.RULE_lenSpecification);
		try {
			this.state = 734;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 722;
				this.match(Fortran77Parser.LPAREN);
				this.state = 723;
				this.match(Fortran77Parser.STAR);
				this.state = 724;
				this.match(Fortran77Parser.RPAREN);
				}
				this.state = 726;
				this.match(Fortran77Parser.LPAREN);
				this.state = 727;
				this.match(Fortran77Parser.STAR);
				this.state = 728;
				this.match(Fortran77Parser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 729;
				this.match(Fortran77Parser.ICON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 730;
				this.match(Fortran77Parser.LPAREN);
				this.state = 731;
				this.intConstantExpr();
				this.state = 732;
				this.match(Fortran77Parser.RPAREN);
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
	public characterWithLen(): CharacterWithLenContext {
		let _localctx: CharacterWithLenContext = new CharacterWithLenContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, Fortran77Parser.RULE_characterWithLen);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 736;
			this.characterExpression();
			this.state = 738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.STAR) {
				{
				this.state = 737;
				this.cwlLen();
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
	public cwlLen(): CwlLenContext {
		let _localctx: CwlLenContext = new CwlLenContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, Fortran77Parser.RULE_cwlLen);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 740;
			this.match(Fortran77Parser.STAR);
			this.state = 741;
			this.lenSpecification();
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
	public parameterStatement(): ParameterStatementContext {
		let _localctx: ParameterStatementContext = new ParameterStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, Fortran77Parser.RULE_parameterStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 743;
			this.match(Fortran77Parser.PARAMETER);
			this.state = 744;
			this.match(Fortran77Parser.LPAREN);
			this.state = 745;
			this.paramlist();
			this.state = 746;
			this.match(Fortran77Parser.RPAREN);
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
	public paramlist(): ParamlistContext {
		let _localctx: ParamlistContext = new ParamlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, Fortran77Parser.RULE_paramlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 748;
			this.paramassign();
			this.state = 753;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 749;
				this.match(Fortran77Parser.COMMA);
				this.state = 750;
				this.paramassign();
				}
				}
				this.state = 755;
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
	public paramassign(): ParamassignContext {
		let _localctx: ParamassignContext = new ParamassignContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, Fortran77Parser.RULE_paramassign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 756;
			this.match(Fortran77Parser.NAME);
			this.state = 757;
			this.match(Fortran77Parser.ASSIGN);
			this.state = 758;
			this.constantExpr();
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
	public externalStatement(): ExternalStatementContext {
		let _localctx: ExternalStatementContext = new ExternalStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, Fortran77Parser.RULE_externalStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 760;
			this.match(Fortran77Parser.EXTERNAL);
			this.state = 761;
			this.namelist();
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
	public intrinsicStatement(): IntrinsicStatementContext {
		let _localctx: IntrinsicStatementContext = new IntrinsicStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, Fortran77Parser.RULE_intrinsicStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 763;
			this.match(Fortran77Parser.INTRINSIC);
			this.state = 764;
			this.namelist();
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
	public saveStatement(): SaveStatementContext {
		let _localctx: SaveStatementContext = new SaveStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, Fortran77Parser.RULE_saveStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 766;
			this.match(Fortran77Parser.SAVE);
			this.state = 775;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.DIV || _la === Fortran77Parser.NAME) {
				{
				this.state = 767;
				this.saveEntity();
				this.state = 772;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Fortran77Parser.COMMA) {
					{
					{
					this.state = 768;
					this.match(Fortran77Parser.COMMA);
					this.state = 769;
					this.saveEntity();
					}
					}
					this.state = 774;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
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
	public saveEntity(): SaveEntityContext {
		let _localctx: SaveEntityContext = new SaveEntityContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, Fortran77Parser.RULE_saveEntity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 781;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.NAME:
				{
				this.state = 777;
				this.match(Fortran77Parser.NAME);
				}
				break;
			case Fortran77Parser.DIV:
				{
				this.state = 778;
				this.match(Fortran77Parser.DIV);
				this.state = 779;
				this.match(Fortran77Parser.NAME);
				this.state = 780;
				this.match(Fortran77Parser.DIV);
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
	public dataStatement(): DataStatementContext {
		let _localctx: DataStatementContext = new DataStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, Fortran77Parser.RULE_dataStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 783;
			this.match(Fortran77Parser.DATA);
			this.state = 784;
			this.dataStatementEntity();
			this.state = 791;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.REAL || _la === Fortran77Parser.COMMA || _la === Fortran77Parser.LPAREN || _la === Fortran77Parser.NAME) {
				{
				{
				this.state = 786;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Fortran77Parser.COMMA) {
					{
					this.state = 785;
					this.match(Fortran77Parser.COMMA);
					}
				}

				this.state = 788;
				this.dataStatementEntity();
				}
				}
				this.state = 793;
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
	public dataStatementItem(): DataStatementItemContext {
		let _localctx: DataStatementItemContext = new DataStatementItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, Fortran77Parser.RULE_dataStatementItem);
		try {
			this.state = 796;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.REAL:
			case Fortran77Parser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 794;
				this.varRef();
				}
				break;
			case Fortran77Parser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 795;
				this.dataImpliedDo();
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
	public dataStatementMultiple(): DataStatementMultipleContext {
		let _localctx: DataStatementMultipleContext = new DataStatementMultipleContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, Fortran77Parser.RULE_dataStatementMultiple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 800;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 798;
				_la = this._input.LA(1);
				if (!(_la === Fortran77Parser.ICON || _la === Fortran77Parser.NAME)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 799;
				this.match(Fortran77Parser.STAR);
				}
				break;
			}
			this.state = 804;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.ICON:
			case Fortran77Parser.LPAREN:
			case Fortran77Parser.MINUS:
			case Fortran77Parser.PLUS:
			case Fortran77Parser.TRUE:
			case Fortran77Parser.FALSE:
			case Fortran77Parser.HOLLERITH:
			case Fortran77Parser.SCON:
			case Fortran77Parser.RCON:
				{
				this.state = 802;
				this.constant();
				}
				break;
			case Fortran77Parser.NAME:
				{
				this.state = 803;
				this.match(Fortran77Parser.NAME);
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
	public dataStatementEntity(): DataStatementEntityContext {
		let _localctx: DataStatementEntityContext = new DataStatementEntityContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, Fortran77Parser.RULE_dataStatementEntity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 806;
			this.dse1();
			this.state = 807;
			this.dse2();
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
	public dse1(): Dse1Context {
		let _localctx: Dse1Context = new Dse1Context(this._ctx, this.state);
		this.enterRule(_localctx, 128, Fortran77Parser.RULE_dse1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 809;
			this.dataStatementItem();
			this.state = 814;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 810;
				this.match(Fortran77Parser.COMMA);
				this.state = 811;
				this.dataStatementItem();
				}
				}
				this.state = 816;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 817;
			this.match(Fortran77Parser.DIV);
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
	public dse2(): Dse2Context {
		let _localctx: Dse2Context = new Dse2Context(this._ctx, this.state);
		this.enterRule(_localctx, 130, Fortran77Parser.RULE_dse2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 819;
			this.dataStatementMultiple();
			this.state = 824;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 820;
				this.match(Fortran77Parser.COMMA);
				this.state = 821;
				this.dataStatementMultiple();
				}
				}
				this.state = 826;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 827;
			this.match(Fortran77Parser.DIV);
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
	public dataImpliedDo(): DataImpliedDoContext {
		let _localctx: DataImpliedDoContext = new DataImpliedDoContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, Fortran77Parser.RULE_dataImpliedDo);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 829;
			this.match(Fortran77Parser.LPAREN);
			this.state = 830;
			this.dataImpliedDoList();
			this.state = 831;
			this.match(Fortran77Parser.COMMA);
			this.state = 832;
			this.dataImpliedDoRange();
			this.state = 833;
			this.match(Fortran77Parser.RPAREN);
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
	public dataImpliedDoRange(): DataImpliedDoRangeContext {
		let _localctx: DataImpliedDoRangeContext = new DataImpliedDoRangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, Fortran77Parser.RULE_dataImpliedDoRange);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 835;
			this.match(Fortran77Parser.NAME);
			this.state = 836;
			this.match(Fortran77Parser.ASSIGN);
			this.state = 837;
			this.intConstantExpr();
			this.state = 838;
			this.match(Fortran77Parser.COMMA);
			this.state = 839;
			this.intConstantExpr();
			this.state = 842;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.COMMA) {
				{
				this.state = 840;
				this.match(Fortran77Parser.COMMA);
				this.state = 841;
				this.intConstantExpr();
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
	public dataImpliedDoList(): DataImpliedDoListContext {
		let _localctx: DataImpliedDoListContext = new DataImpliedDoListContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, Fortran77Parser.RULE_dataImpliedDoList);
		try {
			this.state = 847;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.REAL:
			case Fortran77Parser.LPAREN:
			case Fortran77Parser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 844;
				this.dataImpliedDoListWhat();
				}
				break;
			case Fortran77Parser.COMMA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 845;
				this.match(Fortran77Parser.COMMA);
				this.state = 846;
				this.dataImpliedDoList();
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
	public dataImpliedDoListWhat(): DataImpliedDoListWhatContext {
		let _localctx: DataImpliedDoListWhatContext = new DataImpliedDoListWhatContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, Fortran77Parser.RULE_dataImpliedDoListWhat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 851;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.REAL:
			case Fortran77Parser.NAME:
				{
				this.state = 849;
				this.varRef();
				}
				break;
			case Fortran77Parser.LPAREN:
				{
				this.state = 850;
				this.dataImpliedDo();
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
	public gotoStatement(): GotoStatementContext {
		let _localctx: GotoStatementContext = new GotoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, Fortran77Parser.RULE_gotoStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 853;
			_la = this._input.LA(1);
			if (!(_la === Fortran77Parser.GO || _la === Fortran77Parser.GOTO)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 854;
			this.to();
			}
			this.state = 859;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.ICON:
				{
				this.state = 856;
				this.unconditionalGoto();
				}
				break;
			case Fortran77Parser.LPAREN:
				{
				this.state = 857;
				this.computedGoto();
				}
				break;
			case Fortran77Parser.NAME:
				{
				this.state = 858;
				this.assignedGoto();
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
	public unconditionalGoto(): UnconditionalGotoContext {
		let _localctx: UnconditionalGotoContext = new UnconditionalGotoContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, Fortran77Parser.RULE_unconditionalGoto);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 861;
			this.lblRef();
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
	public computedGoto(): ComputedGotoContext {
		let _localctx: ComputedGotoContext = new ComputedGotoContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, Fortran77Parser.RULE_computedGoto);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 863;
			this.match(Fortran77Parser.LPAREN);
			this.state = 864;
			this.labelList();
			this.state = 865;
			this.match(Fortran77Parser.RPAREN);
			this.state = 867;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.COMMA) {
				{
				this.state = 866;
				this.match(Fortran77Parser.COMMA);
				}
			}

			this.state = 869;
			this.integerExpr();
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
	public lblRef(): LblRefContext {
		let _localctx: LblRefContext = new LblRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, Fortran77Parser.RULE_lblRef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 871;
			this.match(Fortran77Parser.ICON);
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
	public labelList(): LabelListContext {
		let _localctx: LabelListContext = new LabelListContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, Fortran77Parser.RULE_labelList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 873;
			this.lblRef();
			this.state = 878;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 874;
				this.match(Fortran77Parser.COMMA);
				this.state = 875;
				this.lblRef();
				}
				}
				this.state = 880;
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
	public assignedGoto(): AssignedGotoContext {
		let _localctx: AssignedGotoContext = new AssignedGotoContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, Fortran77Parser.RULE_assignedGoto);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 881;
			this.match(Fortran77Parser.NAME);
			this.state = 889;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.COMMA || _la === Fortran77Parser.LPAREN) {
				{
				this.state = 883;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Fortran77Parser.COMMA) {
					{
					this.state = 882;
					this.match(Fortran77Parser.COMMA);
					}
				}

				this.state = 885;
				this.match(Fortran77Parser.LPAREN);
				this.state = 886;
				this.labelList();
				this.state = 887;
				this.match(Fortran77Parser.RPAREN);
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
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, Fortran77Parser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 891;
			this.match(Fortran77Parser.IF);
			this.state = 892;
			this.match(Fortran77Parser.LPAREN);
			this.state = 893;
			this.logicalExpression();
			this.state = 894;
			this.match(Fortran77Parser.RPAREN);
			this.state = 898;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.THEN:
				{
				this.state = 895;
				this.blockIfStatement();
				}
				break;
			case Fortran77Parser.REAL:
			case Fortran77Parser.GO:
			case Fortran77Parser.GOTO:
			case Fortran77Parser.IF:
			case Fortran77Parser.DO:
			case Fortran77Parser.CONTINUE:
			case Fortran77Parser.STOP:
			case Fortran77Parser.PAUSE:
			case Fortran77Parser.WRITE:
			case Fortran77Parser.READ:
			case Fortran77Parser.PRINT:
			case Fortran77Parser.OPEN:
			case Fortran77Parser.CALL:
			case Fortran77Parser.RETURN:
			case Fortran77Parser.CLOSE:
			case Fortran77Parser.INQUIRE:
			case Fortran77Parser.BACKSPACE:
			case Fortran77Parser.ENDFILE:
			case Fortran77Parser.REWIND:
			case Fortran77Parser.NAME:
				{
				this.state = 896;
				this.logicalIfStatement();
				}
				break;
			case Fortran77Parser.ICON:
				{
				this.state = 897;
				this.arithmeticIfStatement();
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
	public arithmeticIfStatement(): ArithmeticIfStatementContext {
		let _localctx: ArithmeticIfStatementContext = new ArithmeticIfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, Fortran77Parser.RULE_arithmeticIfStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 900;
			this.lblRef();
			this.state = 901;
			this.match(Fortran77Parser.COMMA);
			this.state = 902;
			this.lblRef();
			this.state = 903;
			this.match(Fortran77Parser.COMMA);
			this.state = 904;
			this.lblRef();
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
	public logicalIfStatement(): LogicalIfStatementContext {
		let _localctx: LogicalIfStatementContext = new LogicalIfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, Fortran77Parser.RULE_logicalIfStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 906;
			this.executableStatement();
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
	public blockIfStatement(): BlockIfStatementContext {
		let _localctx: BlockIfStatementContext = new BlockIfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, Fortran77Parser.RULE_blockIfStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 908;
			this.firstIfBlock();
			this.state = 912;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 909;
					this.elseIfStatement();
					}
					}
				}
				this.state = 914;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			}
			this.state = 916;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.ELSE) {
				{
				this.state = 915;
				this.elseStatement();
				}
			}

			this.state = 918;
			this.endIfStatement();
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
	public firstIfBlock(): FirstIfBlockContext {
		let _localctx: FirstIfBlockContext = new FirstIfBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, Fortran77Parser.RULE_firstIfBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 920;
			this.match(Fortran77Parser.THEN);
			this.state = 922;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 921;
				this.wholeStatement();
				}
				}
				this.state = 924;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Fortran77Parser.ENTRY) | (1 << Fortran77Parser.DIMENSION) | (1 << Fortran77Parser.REAL) | (1 << Fortran77Parser.EQUIVALENCE) | (1 << Fortran77Parser.COMMON) | (1 << Fortran77Parser.POINTER) | (1 << Fortran77Parser.IMPLICIT) | (1 << Fortran77Parser.PARAMETER) | (1 << Fortran77Parser.EXTERNAL) | (1 << Fortran77Parser.INTRINSIC) | (1 << Fortran77Parser.SAVE) | (1 << Fortran77Parser.DATA) | (1 << Fortran77Parser.GO) | (1 << Fortran77Parser.GOTO) | (1 << Fortran77Parser.IF) | (1 << Fortran77Parser.DO) | (1 << Fortran77Parser.CONTINUE) | (1 << Fortran77Parser.STOP) | (1 << Fortran77Parser.PAUSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Fortran77Parser.WRITE - 32)) | (1 << (Fortran77Parser.READ - 32)) | (1 << (Fortran77Parser.PRINT - 32)) | (1 << (Fortran77Parser.OPEN - 32)) | (1 << (Fortran77Parser.LET - 32)) | (1 << (Fortran77Parser.CALL - 32)) | (1 << (Fortran77Parser.RETURN - 32)) | (1 << (Fortran77Parser.CLOSE - 32)) | (1 << (Fortran77Parser.DOUBLE - 32)) | (1 << (Fortran77Parser.ICON - 32)) | (1 << (Fortran77Parser.LABEL - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Fortran77Parser.INQUIRE - 65)) | (1 << (Fortran77Parser.BACKSPACE - 65)) | (1 << (Fortran77Parser.ENDFILE - 65)) | (1 << (Fortran77Parser.REWIND - 65)) | (1 << (Fortran77Parser.LPAREN - 65)) | (1 << (Fortran77Parser.MINUS - 65)) | (1 << (Fortran77Parser.PLUS - 65)) | (1 << (Fortran77Parser.LNOT - 65)) | (1 << (Fortran77Parser.TRUE - 65)) | (1 << (Fortran77Parser.FALSE - 65)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (Fortran77Parser.HOLLERITH - 99)) | (1 << (Fortran77Parser.COMPLEX - 99)) | (1 << (Fortran77Parser.INTEGER - 99)) | (1 << (Fortran77Parser.LOGICAL - 99)) | (1 << (Fortran77Parser.SCON - 99)) | (1 << (Fortran77Parser.RCON - 99)) | (1 << (Fortran77Parser.NAME - 99)) | (1 << (Fortran77Parser.COMMENT - 99)))) !== 0));
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
	public elseIfStatement(): ElseIfStatementContext {
		let _localctx: ElseIfStatementContext = new ElseIfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, Fortran77Parser.RULE_elseIfStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 929;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.ELSEIF:
				{
				this.state = 926;
				this.match(Fortran77Parser.ELSEIF);
				}
				break;
			case Fortran77Parser.ELSE:
				{
				{
				this.state = 927;
				this.match(Fortran77Parser.ELSE);
				this.state = 928;
				this.match(Fortran77Parser.IF);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 931;
			this.match(Fortran77Parser.LPAREN);
			this.state = 932;
			this.logicalExpression();
			this.state = 933;
			this.match(Fortran77Parser.RPAREN);
			this.state = 934;
			this.match(Fortran77Parser.THEN);
			this.state = 936;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 935;
				this.wholeStatement();
				}
				}
				this.state = 938;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Fortran77Parser.ENTRY) | (1 << Fortran77Parser.DIMENSION) | (1 << Fortran77Parser.REAL) | (1 << Fortran77Parser.EQUIVALENCE) | (1 << Fortran77Parser.COMMON) | (1 << Fortran77Parser.POINTER) | (1 << Fortran77Parser.IMPLICIT) | (1 << Fortran77Parser.PARAMETER) | (1 << Fortran77Parser.EXTERNAL) | (1 << Fortran77Parser.INTRINSIC) | (1 << Fortran77Parser.SAVE) | (1 << Fortran77Parser.DATA) | (1 << Fortran77Parser.GO) | (1 << Fortran77Parser.GOTO) | (1 << Fortran77Parser.IF) | (1 << Fortran77Parser.DO) | (1 << Fortran77Parser.CONTINUE) | (1 << Fortran77Parser.STOP) | (1 << Fortran77Parser.PAUSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Fortran77Parser.WRITE - 32)) | (1 << (Fortran77Parser.READ - 32)) | (1 << (Fortran77Parser.PRINT - 32)) | (1 << (Fortran77Parser.OPEN - 32)) | (1 << (Fortran77Parser.LET - 32)) | (1 << (Fortran77Parser.CALL - 32)) | (1 << (Fortran77Parser.RETURN - 32)) | (1 << (Fortran77Parser.CLOSE - 32)) | (1 << (Fortran77Parser.DOUBLE - 32)) | (1 << (Fortran77Parser.ICON - 32)) | (1 << (Fortran77Parser.LABEL - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Fortran77Parser.INQUIRE - 65)) | (1 << (Fortran77Parser.BACKSPACE - 65)) | (1 << (Fortran77Parser.ENDFILE - 65)) | (1 << (Fortran77Parser.REWIND - 65)) | (1 << (Fortran77Parser.LPAREN - 65)) | (1 << (Fortran77Parser.MINUS - 65)) | (1 << (Fortran77Parser.PLUS - 65)) | (1 << (Fortran77Parser.LNOT - 65)) | (1 << (Fortran77Parser.TRUE - 65)) | (1 << (Fortran77Parser.FALSE - 65)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (Fortran77Parser.HOLLERITH - 99)) | (1 << (Fortran77Parser.COMPLEX - 99)) | (1 << (Fortran77Parser.INTEGER - 99)) | (1 << (Fortran77Parser.LOGICAL - 99)) | (1 << (Fortran77Parser.SCON - 99)) | (1 << (Fortran77Parser.RCON - 99)) | (1 << (Fortran77Parser.NAME - 99)) | (1 << (Fortran77Parser.COMMENT - 99)))) !== 0));
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
	public elseStatement(): ElseStatementContext {
		let _localctx: ElseStatementContext = new ElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, Fortran77Parser.RULE_elseStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 940;
			this.match(Fortran77Parser.ELSE);
			this.state = 942;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 941;
				this.wholeStatement();
				}
				}
				this.state = 944;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Fortran77Parser.ENTRY) | (1 << Fortran77Parser.DIMENSION) | (1 << Fortran77Parser.REAL) | (1 << Fortran77Parser.EQUIVALENCE) | (1 << Fortran77Parser.COMMON) | (1 << Fortran77Parser.POINTER) | (1 << Fortran77Parser.IMPLICIT) | (1 << Fortran77Parser.PARAMETER) | (1 << Fortran77Parser.EXTERNAL) | (1 << Fortran77Parser.INTRINSIC) | (1 << Fortran77Parser.SAVE) | (1 << Fortran77Parser.DATA) | (1 << Fortran77Parser.GO) | (1 << Fortran77Parser.GOTO) | (1 << Fortran77Parser.IF) | (1 << Fortran77Parser.DO) | (1 << Fortran77Parser.CONTINUE) | (1 << Fortran77Parser.STOP) | (1 << Fortran77Parser.PAUSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Fortran77Parser.WRITE - 32)) | (1 << (Fortran77Parser.READ - 32)) | (1 << (Fortran77Parser.PRINT - 32)) | (1 << (Fortran77Parser.OPEN - 32)) | (1 << (Fortran77Parser.LET - 32)) | (1 << (Fortran77Parser.CALL - 32)) | (1 << (Fortran77Parser.RETURN - 32)) | (1 << (Fortran77Parser.CLOSE - 32)) | (1 << (Fortran77Parser.DOUBLE - 32)) | (1 << (Fortran77Parser.ICON - 32)) | (1 << (Fortran77Parser.LABEL - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Fortran77Parser.INQUIRE - 65)) | (1 << (Fortran77Parser.BACKSPACE - 65)) | (1 << (Fortran77Parser.ENDFILE - 65)) | (1 << (Fortran77Parser.REWIND - 65)) | (1 << (Fortran77Parser.LPAREN - 65)) | (1 << (Fortran77Parser.MINUS - 65)) | (1 << (Fortran77Parser.PLUS - 65)) | (1 << (Fortran77Parser.LNOT - 65)) | (1 << (Fortran77Parser.TRUE - 65)) | (1 << (Fortran77Parser.FALSE - 65)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (Fortran77Parser.HOLLERITH - 99)) | (1 << (Fortran77Parser.COMPLEX - 99)) | (1 << (Fortran77Parser.INTEGER - 99)) | (1 << (Fortran77Parser.LOGICAL - 99)) | (1 << (Fortran77Parser.SCON - 99)) | (1 << (Fortran77Parser.RCON - 99)) | (1 << (Fortran77Parser.NAME - 99)) | (1 << (Fortran77Parser.COMMENT - 99)))) !== 0));
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
	public endIfStatement(): EndIfStatementContext {
		let _localctx: EndIfStatementContext = new EndIfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, Fortran77Parser.RULE_endIfStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 949;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.ENDIF:
				{
				this.state = 946;
				this.match(Fortran77Parser.ENDIF);
				}
				break;
			case Fortran77Parser.END:
				{
				this.state = 947;
				this.match(Fortran77Parser.END);
				this.state = 948;
				this.match(Fortran77Parser.IF);
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
	public doStatement(): DoStatementContext {
		let _localctx: DoStatementContext = new DoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, Fortran77Parser.RULE_doStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 951;
			this.match(Fortran77Parser.DO);
			this.state = 954;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.ICON:
				{
				this.state = 952;
				this.doWithLabel();
				}
				break;
			case Fortran77Parser.NAME:
				{
				this.state = 953;
				this.doWithEndDo();
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
	public doVarArgs(): DoVarArgsContext {
		let _localctx: DoVarArgsContext = new DoVarArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, Fortran77Parser.RULE_doVarArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 956;
			this.variableName();
			this.state = 957;
			this.match(Fortran77Parser.ASSIGN);
			this.state = 958;
			this.intRealDpExpr();
			this.state = 959;
			this.match(Fortran77Parser.COMMA);
			this.state = 960;
			this.intRealDpExpr();
			this.state = 963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.COMMA) {
				{
				this.state = 961;
				this.match(Fortran77Parser.COMMA);
				this.state = 962;
				this.intRealDpExpr();
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
	public doWithLabel(): DoWithLabelContext {
		let _localctx: DoWithLabelContext = new DoWithLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, Fortran77Parser.RULE_doWithLabel);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 965;
			this.lblRef();
			this.state = 967;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.COMMA) {
				{
				this.state = 966;
				this.match(Fortran77Parser.COMMA);
				}
			}

			this.state = 969;
			this.doVarArgs();
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
	public doBody(): DoBodyContext {
		let _localctx: DoBodyContext = new DoBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, Fortran77Parser.RULE_doBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 972;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 971;
				this.wholeStatement();
				}
				}
				this.state = 974;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Fortran77Parser.ENTRY) | (1 << Fortran77Parser.DIMENSION) | (1 << Fortran77Parser.REAL) | (1 << Fortran77Parser.EQUIVALENCE) | (1 << Fortran77Parser.COMMON) | (1 << Fortran77Parser.POINTER) | (1 << Fortran77Parser.IMPLICIT) | (1 << Fortran77Parser.PARAMETER) | (1 << Fortran77Parser.EXTERNAL) | (1 << Fortran77Parser.INTRINSIC) | (1 << Fortran77Parser.SAVE) | (1 << Fortran77Parser.DATA) | (1 << Fortran77Parser.GO) | (1 << Fortran77Parser.GOTO) | (1 << Fortran77Parser.IF) | (1 << Fortran77Parser.DO) | (1 << Fortran77Parser.CONTINUE) | (1 << Fortran77Parser.STOP) | (1 << Fortran77Parser.PAUSE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Fortran77Parser.WRITE - 32)) | (1 << (Fortran77Parser.READ - 32)) | (1 << (Fortran77Parser.PRINT - 32)) | (1 << (Fortran77Parser.OPEN - 32)) | (1 << (Fortran77Parser.LET - 32)) | (1 << (Fortran77Parser.CALL - 32)) | (1 << (Fortran77Parser.RETURN - 32)) | (1 << (Fortran77Parser.CLOSE - 32)) | (1 << (Fortran77Parser.DOUBLE - 32)) | (1 << (Fortran77Parser.ICON - 32)) | (1 << (Fortran77Parser.LABEL - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Fortran77Parser.INQUIRE - 65)) | (1 << (Fortran77Parser.BACKSPACE - 65)) | (1 << (Fortran77Parser.ENDFILE - 65)) | (1 << (Fortran77Parser.REWIND - 65)) | (1 << (Fortran77Parser.LPAREN - 65)) | (1 << (Fortran77Parser.MINUS - 65)) | (1 << (Fortran77Parser.PLUS - 65)) | (1 << (Fortran77Parser.LNOT - 65)) | (1 << (Fortran77Parser.TRUE - 65)) | (1 << (Fortran77Parser.FALSE - 65)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (Fortran77Parser.HOLLERITH - 99)) | (1 << (Fortran77Parser.COMPLEX - 99)) | (1 << (Fortran77Parser.INTEGER - 99)) | (1 << (Fortran77Parser.LOGICAL - 99)) | (1 << (Fortran77Parser.SCON - 99)) | (1 << (Fortran77Parser.RCON - 99)) | (1 << (Fortran77Parser.NAME - 99)) | (1 << (Fortran77Parser.COMMENT - 99)))) !== 0));
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
	public doWithEndDo(): DoWithEndDoContext {
		let _localctx: DoWithEndDoContext = new DoWithEndDoContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, Fortran77Parser.RULE_doWithEndDo);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 976;
			this.doVarArgs();
			this.state = 977;
			this.doBody();
			this.state = 978;
			this.enddoStatement();
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
	public enddoStatement(): EnddoStatementContext {
		let _localctx: EnddoStatementContext = new EnddoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, Fortran77Parser.RULE_enddoStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 983;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.ENDDO:
				{
				this.state = 980;
				this.match(Fortran77Parser.ENDDO);
				}
				break;
			case Fortran77Parser.END:
				{
				{
				this.state = 981;
				this.match(Fortran77Parser.END);
				this.state = 982;
				this.match(Fortran77Parser.DO);
				}
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
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, Fortran77Parser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 985;
			this.match(Fortran77Parser.CONTINUE);
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
	public stopStatement(): StopStatementContext {
		let _localctx: StopStatementContext = new StopStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, Fortran77Parser.RULE_stopStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 987;
			this.match(Fortran77Parser.STOP);
			this.state = 989;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.ICON || _la === Fortran77Parser.HOLLERITH) {
				{
				this.state = 988;
				_la = this._input.LA(1);
				if (!(_la === Fortran77Parser.ICON || _la === Fortran77Parser.HOLLERITH)) {
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
	public pauseStatement(): PauseStatementContext {
		let _localctx: PauseStatementContext = new PauseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, Fortran77Parser.RULE_pauseStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 991;
			this.match(Fortran77Parser.PAUSE);
			this.state = 992;
			_la = this._input.LA(1);
			if (!(_la === Fortran77Parser.ICON || _la === Fortran77Parser.HOLLERITH)) {
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
	public writeStatement(): WriteStatementContext {
		let _localctx: WriteStatementContext = new WriteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, Fortran77Parser.RULE_writeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 994;
			this.match(Fortran77Parser.WRITE);
			this.state = 995;
			this.match(Fortran77Parser.LPAREN);
			this.state = 996;
			this.controlInfoList();
			this.state = 997;
			this.match(Fortran77Parser.RPAREN);
			this.state = 1006;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.REAL || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.COMMA - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (Fortran77Parser.LNOT - 80)) | (1 << (Fortran77Parser.TRUE - 80)) | (1 << (Fortran77Parser.FALSE - 80)) | (1 << (Fortran77Parser.HOLLERITH - 80)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (Fortran77Parser.SCON - 114)) | (1 << (Fortran77Parser.RCON - 114)) | (1 << (Fortran77Parser.NAME - 114)))) !== 0)) {
				{
				this.state = 1002;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 999;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Fortran77Parser.COMMA) {
						{
						this.state = 998;
						this.match(Fortran77Parser.COMMA);
						}
					}

					this.state = 1001;
					this.ioList();
					}
					}
					this.state = 1004;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === Fortran77Parser.REAL || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.COMMA - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (Fortran77Parser.LNOT - 80)) | (1 << (Fortran77Parser.TRUE - 80)) | (1 << (Fortran77Parser.FALSE - 80)) | (1 << (Fortran77Parser.HOLLERITH - 80)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (Fortran77Parser.SCON - 114)) | (1 << (Fortran77Parser.RCON - 114)) | (1 << (Fortran77Parser.NAME - 114)))) !== 0));
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
	public readStatement(): ReadStatementContext {
		let _localctx: ReadStatementContext = new ReadStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, Fortran77Parser.RULE_readStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1008;
			this.match(Fortran77Parser.READ);
			{
			this.state = 1009;
			this.formatIdentifier();
			this.state = 1016;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.COMMA) {
				{
				this.state = 1012;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1010;
					this.match(Fortran77Parser.COMMA);
					this.state = 1011;
					this.ioList();
					}
					}
					this.state = 1014;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === Fortran77Parser.COMMA);
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
	public printStatement(): PrintStatementContext {
		let _localctx: PrintStatementContext = new PrintStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, Fortran77Parser.RULE_printStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1018;
			this.match(Fortran77Parser.PRINT);
			{
			this.state = 1019;
			this.formatIdentifier();
			this.state = 1026;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.COMMA) {
				{
				this.state = 1022;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1020;
					this.match(Fortran77Parser.COMMA);
					this.state = 1021;
					this.ioList();
					}
					}
					this.state = 1024;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === Fortran77Parser.COMMA);
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
	public assignmentStatement(): AssignmentStatementContext {
		let _localctx: AssignmentStatementContext = new AssignmentStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, Fortran77Parser.RULE_assignmentStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1028;
			this.varRef();
			this.state = 1029;
			this.match(Fortran77Parser.ASSIGN);
			this.state = 1030;
			this.expression();
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
	public controlInfoList(): ControlInfoListContext {
		let _localctx: ControlInfoListContext = new ControlInfoListContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, Fortran77Parser.RULE_controlInfoList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1032;
			this.controlInfoListItem();
			this.state = 1037;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 1033;
				this.match(Fortran77Parser.COMMA);
				this.state = 1034;
				this.controlInfoListItem();
				}
				}
				this.state = 1039;
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
	public controlErrSpec(): ControlErrSpecContext {
		let _localctx: ControlErrSpecContext = new ControlErrSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, Fortran77Parser.RULE_controlErrSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1040;
			this.controlErr();
			this.state = 1041;
			this.match(Fortran77Parser.ASSIGN);
			this.state = 1044;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.ICON:
				{
				this.state = 1042;
				this.lblRef();
				}
				break;
			case Fortran77Parser.NAME:
				{
				this.state = 1043;
				this.match(Fortran77Parser.NAME);
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
	public controlInfoListItem(): ControlInfoListItemContext {
		let _localctx: ControlInfoListItemContext = new ControlInfoListItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, Fortran77Parser.RULE_controlInfoListItem);
		let _la: number;
		try {
			this.state = 1069;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1046;
				this.unitIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1047;
				_la = this._input.LA(1);
				if (!(_la === Fortran77Parser.HOLLERITH || _la === Fortran77Parser.SCON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1048;
				this.controlFmt();
				this.state = 1049;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1050;
				this.formatIdentifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1052;
				this.controlUnit();
				this.state = 1053;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1054;
				this.unitIdentifier();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1056;
				this.controlRec();
				this.state = 1057;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1058;
				this.integerExpr();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1060;
				this.controlEnd();
				this.state = 1061;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1062;
				this.lblRef();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1064;
				this.controlErrSpec();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1065;
				this.controlIostat();
				this.state = 1066;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1067;
				this.varRef();
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
	public ioList(): IoListContext {
		let _localctx: IoListContext = new IoListContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, Fortran77Parser.RULE_ioList);
		try {
			this.state = 1087;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1071;
				this.ioListItem();
				this.state = 1072;
				this.match(Fortran77Parser.COMMA);
				this.state = 1073;
				this.match(Fortran77Parser.NAME);
				this.state = 1074;
				this.match(Fortran77Parser.ASSIGN);
				}
				this.state = 1076;
				this.ioListItem();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1078;
				this.ioListItem();
				this.state = 1079;
				this.match(Fortran77Parser.COMMA);
				this.state = 1080;
				this.ioListItem();
				}
				this.state = 1082;
				this.ioListItem();
				this.state = 1083;
				this.match(Fortran77Parser.COMMA);
				this.state = 1084;
				this.ioList();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1086;
				this.ioListItem();
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
	public ioListItem(): IoListItemContext {
		let _localctx: IoListItemContext = new IoListItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, Fortran77Parser.RULE_ioListItem);
		try {
			this.state = 1098;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1089;
				this.match(Fortran77Parser.LPAREN);
				this.state = 1090;
				this.ioList();
				this.state = 1091;
				this.match(Fortran77Parser.COMMA);
				this.state = 1092;
				this.match(Fortran77Parser.NAME);
				this.state = 1093;
				this.match(Fortran77Parser.ASSIGN);
				}
				this.state = 1095;
				this.ioImpliedDoList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1097;
				this.expression();
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
	public ioImpliedDoList(): IoImpliedDoListContext {
		let _localctx: IoImpliedDoListContext = new IoImpliedDoListContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, Fortran77Parser.RULE_ioImpliedDoList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1100;
			this.match(Fortran77Parser.LPAREN);
			this.state = 1101;
			this.ioList();
			this.state = 1102;
			this.match(Fortran77Parser.COMMA);
			this.state = 1103;
			this.match(Fortran77Parser.NAME);
			this.state = 1104;
			this.match(Fortran77Parser.ASSIGN);
			this.state = 1105;
			this.intRealDpExpr();
			this.state = 1106;
			this.match(Fortran77Parser.COMMA);
			this.state = 1107;
			this.intRealDpExpr();
			this.state = 1110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.COMMA) {
				{
				this.state = 1108;
				this.match(Fortran77Parser.COMMA);
				this.state = 1109;
				this.intRealDpExpr();
				}
			}

			this.state = 1112;
			this.match(Fortran77Parser.RPAREN);
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
	public openStatement(): OpenStatementContext {
		let _localctx: OpenStatementContext = new OpenStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, Fortran77Parser.RULE_openStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1114;
			this.match(Fortran77Parser.OPEN);
			this.state = 1115;
			this.match(Fortran77Parser.LPAREN);
			this.state = 1116;
			this.openControl();
			this.state = 1121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 1117;
				this.match(Fortran77Parser.COMMA);
				this.state = 1118;
				this.openControl();
				}
				}
				this.state = 1123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1124;
			this.match(Fortran77Parser.RPAREN);
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
	public openControl(): OpenControlContext {
		let _localctx: OpenControlContext = new OpenControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, Fortran77Parser.RULE_openControl);
		try {
			this.state = 1163;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.ICON:
			case Fortran77Parser.LPAREN:
			case Fortran77Parser.MINUS:
			case Fortran77Parser.PLUS:
			case Fortran77Parser.STAR:
			case Fortran77Parser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1126;
				this.unitIdentifier();
				}
				break;
			case Fortran77Parser.UNIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1127;
				this.controlUnit();
				this.state = 1128;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1129;
				this.unitIdentifier();
				}
				break;
			case Fortran77Parser.ERR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1131;
				this.controlErrSpec();
				}
				break;
			case Fortran77Parser.FILE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1132;
				this.controlFile();
				this.state = 1133;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1134;
				this.characterExpression();
				}
				break;
			case Fortran77Parser.STATUS:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1136;
				this.controlStatus();
				this.state = 1137;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1138;
				this.characterExpression();
				}
				break;
			case Fortran77Parser.ACCESS:
			case Fortran77Parser.POSITION:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1142;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Fortran77Parser.ACCESS:
					{
					this.state = 1140;
					this.controlAccess();
					}
					break;
				case Fortran77Parser.POSITION:
					{
					this.state = 1141;
					this.controlPosition();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1144;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1145;
				this.characterExpression();
				}
				break;
			case Fortran77Parser.FORM:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1147;
				this.controlForm();
				this.state = 1148;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1149;
				this.characterExpression();
				}
				break;
			case Fortran77Parser.RECL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1151;
				this.controlRecl();
				this.state = 1152;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1153;
				this.integerExpr();
				}
				break;
			case Fortran77Parser.BLANK:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1155;
				this.controlBlank();
				this.state = 1156;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1157;
				this.characterExpression();
				}
				break;
			case Fortran77Parser.IOSTART:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1159;
				this.controlIostat();
				this.state = 1160;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1161;
				this.varRef();
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
	public controlFmt(): ControlFmtContext {
		let _localctx: ControlFmtContext = new ControlFmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, Fortran77Parser.RULE_controlFmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1165;
			this.match(Fortran77Parser.FMT);
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
	public controlUnit(): ControlUnitContext {
		let _localctx: ControlUnitContext = new ControlUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, Fortran77Parser.RULE_controlUnit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1167;
			this.match(Fortran77Parser.UNIT);
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
	public controlRec(): ControlRecContext {
		let _localctx: ControlRecContext = new ControlRecContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, Fortran77Parser.RULE_controlRec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1169;
			this.match(Fortran77Parser.NAME);
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
	public controlEnd(): ControlEndContext {
		let _localctx: ControlEndContext = new ControlEndContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, Fortran77Parser.RULE_controlEnd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1171;
			this.match(Fortran77Parser.END);
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
	public controlErr(): ControlErrContext {
		let _localctx: ControlErrContext = new ControlErrContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, Fortran77Parser.RULE_controlErr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1173;
			this.match(Fortran77Parser.ERR);
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
	public controlIostat(): ControlIostatContext {
		let _localctx: ControlIostatContext = new ControlIostatContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, Fortran77Parser.RULE_controlIostat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1175;
			this.match(Fortran77Parser.IOSTART);
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
	public controlFile(): ControlFileContext {
		let _localctx: ControlFileContext = new ControlFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, Fortran77Parser.RULE_controlFile);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1177;
			this.match(Fortran77Parser.FILE);
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
	public controlStatus(): ControlStatusContext {
		let _localctx: ControlStatusContext = new ControlStatusContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, Fortran77Parser.RULE_controlStatus);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1179;
			this.match(Fortran77Parser.STATUS);
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
	public controlAccess(): ControlAccessContext {
		let _localctx: ControlAccessContext = new ControlAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, Fortran77Parser.RULE_controlAccess);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1181;
			this.match(Fortran77Parser.ACCESS);
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
	public controlPosition(): ControlPositionContext {
		let _localctx: ControlPositionContext = new ControlPositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, Fortran77Parser.RULE_controlPosition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1183;
			this.match(Fortran77Parser.POSITION);
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
	public controlForm(): ControlFormContext {
		let _localctx: ControlFormContext = new ControlFormContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, Fortran77Parser.RULE_controlForm);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1185;
			this.match(Fortran77Parser.FORM);
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
	public controlRecl(): ControlReclContext {
		let _localctx: ControlReclContext = new ControlReclContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, Fortran77Parser.RULE_controlRecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1187;
			this.match(Fortran77Parser.RECL);
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
	public controlBlank(): ControlBlankContext {
		let _localctx: ControlBlankContext = new ControlBlankContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, Fortran77Parser.RULE_controlBlank);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1189;
			this.match(Fortran77Parser.BLANK);
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
	public controlExist(): ControlExistContext {
		let _localctx: ControlExistContext = new ControlExistContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, Fortran77Parser.RULE_controlExist);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1191;
			this.match(Fortran77Parser.EXIST);
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
	public controlOpened(): ControlOpenedContext {
		let _localctx: ControlOpenedContext = new ControlOpenedContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, Fortran77Parser.RULE_controlOpened);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1193;
			this.match(Fortran77Parser.OPENED);
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
	public controlNumber(): ControlNumberContext {
		let _localctx: ControlNumberContext = new ControlNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, Fortran77Parser.RULE_controlNumber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1195;
			this.match(Fortran77Parser.NUMBER);
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
	public controlNamed(): ControlNamedContext {
		let _localctx: ControlNamedContext = new ControlNamedContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, Fortran77Parser.RULE_controlNamed);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1197;
			this.match(Fortran77Parser.NAMED);
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
	public controlName(): ControlNameContext {
		let _localctx: ControlNameContext = new ControlNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, Fortran77Parser.RULE_controlName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1199;
			this.match(Fortran77Parser.NAME);
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
	public controlSequential(): ControlSequentialContext {
		let _localctx: ControlSequentialContext = new ControlSequentialContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, Fortran77Parser.RULE_controlSequential);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1201;
			this.match(Fortran77Parser.SEQUENTIAL);
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
	public controlDirect(): ControlDirectContext {
		let _localctx: ControlDirectContext = new ControlDirectContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, Fortran77Parser.RULE_controlDirect);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1203;
			this.match(Fortran77Parser.NAME);
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
	public controlFormatted(): ControlFormattedContext {
		let _localctx: ControlFormattedContext = new ControlFormattedContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, Fortran77Parser.RULE_controlFormatted);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1205;
			this.match(Fortran77Parser.FORMATTED);
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
	public controlUnformatted(): ControlUnformattedContext {
		let _localctx: ControlUnformattedContext = new ControlUnformattedContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, Fortran77Parser.RULE_controlUnformatted);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1207;
			this.match(Fortran77Parser.UNFORMATTED);
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
	public controlNextrec(): ControlNextrecContext {
		let _localctx: ControlNextrecContext = new ControlNextrecContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, Fortran77Parser.RULE_controlNextrec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1209;
			this.match(Fortran77Parser.NEXTREC);
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
	public closeStatement(): CloseStatementContext {
		let _localctx: CloseStatementContext = new CloseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, Fortran77Parser.RULE_closeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1211;
			this.match(Fortran77Parser.CLOSE);
			this.state = 1212;
			this.match(Fortran77Parser.LPAREN);
			this.state = 1213;
			this.closeControl();
			this.state = 1218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 1214;
				this.match(Fortran77Parser.COMMA);
				this.state = 1215;
				this.closeControl();
				}
				}
				this.state = 1220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1221;
			this.match(Fortran77Parser.RPAREN);
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
	public closeControl(): CloseControlContext {
		let _localctx: CloseControlContext = new CloseControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, Fortran77Parser.RULE_closeControl);
		try {
			this.state = 1237;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.ICON:
			case Fortran77Parser.LPAREN:
			case Fortran77Parser.MINUS:
			case Fortran77Parser.PLUS:
			case Fortran77Parser.STAR:
			case Fortran77Parser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1223;
				this.unitIdentifier();
				}
				break;
			case Fortran77Parser.UNIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1224;
				this.controlUnit();
				this.state = 1225;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1226;
				this.unitIdentifier();
				}
				break;
			case Fortran77Parser.ERR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1228;
				this.controlErrSpec();
				}
				break;
			case Fortran77Parser.STATUS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1229;
				this.controlStatus();
				this.state = 1230;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1231;
				this.characterExpression();
				}
				break;
			case Fortran77Parser.IOSTART:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1233;
				this.controlIostat();
				this.state = 1234;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1235;
				this.varRef();
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
	public inquireStatement(): InquireStatementContext {
		let _localctx: InquireStatementContext = new InquireStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, Fortran77Parser.RULE_inquireStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1239;
			this.match(Fortran77Parser.INQUIRE);
			this.state = 1240;
			this.match(Fortran77Parser.LPAREN);
			this.state = 1241;
			this.inquireControl();
			this.state = 1246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 1242;
				this.match(Fortran77Parser.COMMA);
				this.state = 1243;
				this.inquireControl();
				}
				}
				this.state = 1248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1249;
			this.match(Fortran77Parser.RPAREN);
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
	public inquireControl(): InquireControlContext {
		let _localctx: InquireControlContext = new InquireControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, Fortran77Parser.RULE_inquireControl);
		try {
			this.state = 1281;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1251;
				this.controlUnit();
				this.state = 1252;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1253;
				this.unitIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1255;
				this.controlFile();
				this.state = 1256;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1257;
				this.characterExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1259;
				this.controlErrSpec();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1275;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
				case 1:
					{
					this.state = 1260;
					this.controlIostat();
					}
					break;

				case 2:
					{
					this.state = 1261;
					this.controlExist();
					}
					break;

				case 3:
					{
					this.state = 1262;
					this.controlOpened();
					}
					break;

				case 4:
					{
					this.state = 1263;
					this.controlNumber();
					}
					break;

				case 5:
					{
					this.state = 1264;
					this.controlNamed();
					}
					break;

				case 6:
					{
					this.state = 1265;
					this.controlName();
					}
					break;

				case 7:
					{
					this.state = 1266;
					this.controlAccess();
					}
					break;

				case 8:
					{
					this.state = 1267;
					this.controlSequential();
					}
					break;

				case 9:
					{
					this.state = 1268;
					this.controlDirect();
					}
					break;

				case 10:
					{
					this.state = 1269;
					this.controlForm();
					}
					break;

				case 11:
					{
					this.state = 1270;
					this.controlFormatted();
					}
					break;

				case 12:
					{
					this.state = 1271;
					this.controlUnformatted();
					}
					break;

				case 13:
					{
					this.state = 1272;
					this.controlRecl();
					}
					break;

				case 14:
					{
					this.state = 1273;
					this.controlNextrec();
					}
					break;

				case 15:
					{
					this.state = 1274;
					this.controlBlank();
					}
					break;
				}
				this.state = 1277;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1278;
				this.varRef();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1280;
				this.unitIdentifier();
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
	public backspaceStatement(): BackspaceStatementContext {
		let _localctx: BackspaceStatementContext = new BackspaceStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, Fortran77Parser.RULE_backspaceStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1283;
			this.match(Fortran77Parser.BACKSPACE);
			this.state = 1284;
			this.berFinish();
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
	public endfileStatement(): EndfileStatementContext {
		let _localctx: EndfileStatementContext = new EndfileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, Fortran77Parser.RULE_endfileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1286;
			this.match(Fortran77Parser.ENDFILE);
			this.state = 1287;
			this.berFinish();
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
	public rewindStatement(): RewindStatementContext {
		let _localctx: RewindStatementContext = new RewindStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, Fortran77Parser.RULE_rewindStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1289;
			this.match(Fortran77Parser.REWIND);
			this.state = 1290;
			this.berFinish();
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
	public berFinish(): BerFinishContext {
		let _localctx: BerFinishContext = new BerFinishContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, Fortran77Parser.RULE_berFinish);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1306;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				{
				this.state = 1292;
				this.unitIdentifier();
				{
				this.state = 1293;
				this.unitIdentifier();
				}
				}
				break;

			case 2:
				{
				this.state = 1295;
				this.match(Fortran77Parser.LPAREN);
				this.state = 1296;
				this.berFinishItem();
				this.state = 1301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Fortran77Parser.COMMA) {
					{
					{
					this.state = 1297;
					this.match(Fortran77Parser.COMMA);
					this.state = 1298;
					this.berFinishItem();
					}
					}
					this.state = 1303;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1304;
				this.match(Fortran77Parser.RPAREN);
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
	public berFinishItem(): BerFinishItemContext {
		let _localctx: BerFinishItemContext = new BerFinishItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, Fortran77Parser.RULE_berFinishItem);
		try {
			this.state = 1318;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.ICON:
			case Fortran77Parser.LPAREN:
			case Fortran77Parser.MINUS:
			case Fortran77Parser.PLUS:
			case Fortran77Parser.STAR:
			case Fortran77Parser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1308;
				this.unitIdentifier();
				}
				break;
			case Fortran77Parser.UNIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1309;
				this.controlUnit();
				this.state = 1310;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1311;
				this.unitIdentifier();
				}
				break;
			case Fortran77Parser.ERR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1313;
				this.controlErrSpec();
				}
				break;
			case Fortran77Parser.IOSTART:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1314;
				this.controlIostat();
				this.state = 1315;
				this.match(Fortran77Parser.ASSIGN);
				this.state = 1316;
				this.varRef();
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
	public unitIdentifier(): UnitIdentifierContext {
		let _localctx: UnitIdentifierContext = new UnitIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, Fortran77Parser.RULE_unitIdentifier);
		try {
			this.state = 1322;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.ICON:
			case Fortran77Parser.LPAREN:
			case Fortran77Parser.MINUS:
			case Fortran77Parser.PLUS:
			case Fortran77Parser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1320;
				this.iexpr();
				}
				break;
			case Fortran77Parser.STAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1321;
				this.match(Fortran77Parser.STAR);
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
	public formatIdentifier(): FormatIdentifierContext {
		let _localctx: FormatIdentifierContext = new FormatIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, Fortran77Parser.RULE_formatIdentifier);
		let _la: number;
		try {
			this.state = 1327;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.HOLLERITH:
			case Fortran77Parser.SCON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1324;
				_la = this._input.LA(1);
				if (!(_la === Fortran77Parser.HOLLERITH || _la === Fortran77Parser.SCON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case Fortran77Parser.ICON:
			case Fortran77Parser.LPAREN:
			case Fortran77Parser.MINUS:
			case Fortran77Parser.PLUS:
			case Fortran77Parser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1325;
				this.iexpr();
				}
				break;
			case Fortran77Parser.STAR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1326;
				this.match(Fortran77Parser.STAR);
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
	public formatStatement(): FormatStatementContext {
		let _localctx: FormatStatementContext = new FormatStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, Fortran77Parser.RULE_formatStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1329;
			this.match(Fortran77Parser.FORMAT);
			this.state = 1330;
			this.match(Fortran77Parser.LPAREN);
			this.state = 1331;
			this.fmtSpec();
			this.state = 1332;
			this.match(Fortran77Parser.RPAREN);
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
	public fmtSpec(): FmtSpecContext {
		let _localctx: FmtSpecContext = new FmtSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, Fortran77Parser.RULE_fmtSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1339;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.ICON:
			case Fortran77Parser.LPAREN:
			case Fortran77Parser.MINUS:
			case Fortran77Parser.PLUS:
			case Fortran77Parser.XCON:
			case Fortran77Parser.PCON:
			case Fortran77Parser.FCON:
			case Fortran77Parser.HOLLERITH:
			case Fortran77Parser.SCON:
			case Fortran77Parser.NAME:
				{
				this.state = 1334;
				this.formatedit();
				}
				break;
			case Fortran77Parser.DOLLAR:
			case Fortran77Parser.COLON:
			case Fortran77Parser.DIV:
				{
				this.state = 1335;
				this.formatsep();
				this.state = 1337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (Fortran77Parser.XCON - 95)) | (1 << (Fortran77Parser.PCON - 95)) | (1 << (Fortran77Parser.FCON - 95)) | (1 << (Fortran77Parser.HOLLERITH - 95)) | (1 << (Fortran77Parser.SCON - 95)) | (1 << (Fortran77Parser.NAME - 95)))) !== 0)) {
					{
					this.state = 1336;
					this.formatedit();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Fortran77Parser.DOLLAR - 69)) | (1 << (Fortran77Parser.COMMA - 69)) | (1 << (Fortran77Parser.COLON - 69)) | (1 << (Fortran77Parser.DIV - 69)))) !== 0)) {
				{
				this.state = 1353;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Fortran77Parser.DOLLAR:
				case Fortran77Parser.COLON:
				case Fortran77Parser.DIV:
					{
					this.state = 1341;
					this.formatsep();
					this.state = 1343;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (Fortran77Parser.XCON - 95)) | (1 << (Fortran77Parser.PCON - 95)) | (1 << (Fortran77Parser.FCON - 95)) | (1 << (Fortran77Parser.HOLLERITH - 95)) | (1 << (Fortran77Parser.SCON - 95)) | (1 << (Fortran77Parser.NAME - 95)))) !== 0)) {
						{
						this.state = 1342;
						this.formatedit();
						}
					}

					}
					break;
				case Fortran77Parser.COMMA:
					{
					this.state = 1345;
					this.match(Fortran77Parser.COMMA);
					this.state = 1351;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Fortran77Parser.ICON:
					case Fortran77Parser.LPAREN:
					case Fortran77Parser.MINUS:
					case Fortran77Parser.PLUS:
					case Fortran77Parser.XCON:
					case Fortran77Parser.PCON:
					case Fortran77Parser.FCON:
					case Fortran77Parser.HOLLERITH:
					case Fortran77Parser.SCON:
					case Fortran77Parser.NAME:
						{
						this.state = 1346;
						this.formatedit();
						}
						break;
					case Fortran77Parser.DOLLAR:
					case Fortran77Parser.COLON:
					case Fortran77Parser.DIV:
						{
						this.state = 1347;
						this.formatsep();
						this.state = 1349;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (Fortran77Parser.XCON - 95)) | (1 << (Fortran77Parser.PCON - 95)) | (1 << (Fortran77Parser.FCON - 95)) | (1 << (Fortran77Parser.HOLLERITH - 95)) | (1 << (Fortran77Parser.SCON - 95)) | (1 << (Fortran77Parser.NAME - 95)))) !== 0)) {
							{
							this.state = 1348;
							this.formatedit();
							}
						}

						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1357;
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
	public formatsep(): FormatsepContext {
		let _localctx: FormatsepContext = new FormatsepContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, Fortran77Parser.RULE_formatsep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1358;
			_la = this._input.LA(1);
			if (!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (Fortran77Parser.DOLLAR - 69)) | (1 << (Fortran77Parser.COLON - 69)) | (1 << (Fortran77Parser.DIV - 69)))) !== 0))) {
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
	public formatedit(): FormateditContext {
		let _localctx: FormateditContext = new FormateditContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, Fortran77Parser.RULE_formatedit);
		let _la: number;
		try {
			this.state = 1374;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.XCON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1360;
				this.match(Fortran77Parser.XCON);
				}
				break;
			case Fortran77Parser.LPAREN:
			case Fortran77Parser.FCON:
			case Fortran77Parser.HOLLERITH:
			case Fortran77Parser.SCON:
			case Fortran77Parser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1361;
				this.editElement();
				}
				break;
			case Fortran77Parser.ICON:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1362;
				this.match(Fortran77Parser.ICON);
				this.state = 1363;
				this.editElement();
				}
				break;
			case Fortran77Parser.MINUS:
			case Fortran77Parser.PLUS:
			case Fortran77Parser.PCON:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS) {
					{
					this.state = 1364;
					_la = this._input.LA(1);
					if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
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

				this.state = 1367;
				this.match(Fortran77Parser.PCON);
				this.state = 1372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Fortran77Parser.ICON || _la === Fortran77Parser.LPAREN || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (Fortran77Parser.FCON - 97)) | (1 << (Fortran77Parser.HOLLERITH - 97)) | (1 << (Fortran77Parser.SCON - 97)) | (1 << (Fortran77Parser.NAME - 97)))) !== 0)) {
					{
					this.state = 1369;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === Fortran77Parser.ICON) {
						{
						this.state = 1368;
						this.match(Fortran77Parser.ICON);
						}
					}

					this.state = 1371;
					this.editElement();
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
	public editElement(): EditElementContext {
		let _localctx: EditElementContext = new EditElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, Fortran77Parser.RULE_editElement);
		let _la: number;
		try {
			this.state = 1381;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.FCON:
			case Fortran77Parser.HOLLERITH:
			case Fortran77Parser.SCON:
			case Fortran77Parser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1376;
				_la = this._input.LA(1);
				if (!(((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (Fortran77Parser.FCON - 97)) | (1 << (Fortran77Parser.HOLLERITH - 97)) | (1 << (Fortran77Parser.SCON - 97)) | (1 << (Fortran77Parser.NAME - 97)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case Fortran77Parser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1377;
				this.match(Fortran77Parser.LPAREN);
				this.state = 1378;
				this.fmtSpec();
				this.state = 1379;
				this.match(Fortran77Parser.RPAREN);
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
	public statementFunctionStatement(): StatementFunctionStatementContext {
		let _localctx: StatementFunctionStatementContext = new StatementFunctionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, Fortran77Parser.RULE_statementFunctionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1383;
			this.match(Fortran77Parser.LET);
			this.state = 1384;
			this.sfArgs();
			this.state = 1385;
			this.match(Fortran77Parser.ASSIGN);
			this.state = 1386;
			this.expression();
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
	public sfArgs(): SfArgsContext {
		let _localctx: SfArgsContext = new SfArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, Fortran77Parser.RULE_sfArgs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1388;
			this.match(Fortran77Parser.NAME);
			this.state = 1389;
			this.match(Fortran77Parser.LPAREN);
			this.state = 1390;
			this.namelist();
			this.state = 1391;
			this.match(Fortran77Parser.RPAREN);
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
	public callStatement(): CallStatementContext {
		let _localctx: CallStatementContext = new CallStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, Fortran77Parser.RULE_callStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1393;
			this.match(Fortran77Parser.CALL);
			this.state = 1394;
			this.subroutineCall();
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
	public subroutineCall(): SubroutineCallContext {
		let _localctx: SubroutineCallContext = new SubroutineCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, Fortran77Parser.RULE_subroutineCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1396;
			this.match(Fortran77Parser.NAME);
			this.state = 1402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.LPAREN) {
				{
				this.state = 1397;
				this.match(Fortran77Parser.LPAREN);
				this.state = 1399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Fortran77Parser.REAL || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)) | (1 << (Fortran77Parser.STAR - 48)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (Fortran77Parser.LNOT - 80)) | (1 << (Fortran77Parser.TRUE - 80)) | (1 << (Fortran77Parser.FALSE - 80)) | (1 << (Fortran77Parser.HOLLERITH - 80)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (Fortran77Parser.SCON - 114)) | (1 << (Fortran77Parser.RCON - 114)) | (1 << (Fortran77Parser.NAME - 114)))) !== 0)) {
					{
					this.state = 1398;
					this.callArgumentList();
					}
				}

				this.state = 1401;
				this.match(Fortran77Parser.RPAREN);
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
	public callArgumentList(): CallArgumentListContext {
		let _localctx: CallArgumentListContext = new CallArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, Fortran77Parser.RULE_callArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1404;
			this.callArgument();
			this.state = 1409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 1405;
				this.match(Fortran77Parser.COMMA);
				this.state = 1406;
				this.callArgument();
				}
				}
				this.state = 1411;
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
	public callArgument(): CallArgumentContext {
		let _localctx: CallArgumentContext = new CallArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, Fortran77Parser.RULE_callArgument);
		try {
			this.state = 1415;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.REAL:
			case Fortran77Parser.ICON:
			case Fortran77Parser.LPAREN:
			case Fortran77Parser.MINUS:
			case Fortran77Parser.PLUS:
			case Fortran77Parser.LNOT:
			case Fortran77Parser.TRUE:
			case Fortran77Parser.FALSE:
			case Fortran77Parser.HOLLERITH:
			case Fortran77Parser.SCON:
			case Fortran77Parser.RCON:
			case Fortran77Parser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1412;
				this.expression();
				}
				break;
			case Fortran77Parser.STAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1413;
				this.match(Fortran77Parser.STAR);
				this.state = 1414;
				this.lblRef();
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
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, Fortran77Parser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1417;
			this.match(Fortran77Parser.RETURN);
			this.state = 1419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || _la === Fortran77Parser.NAME) {
				{
				this.state = 1418;
				this.integerExpr();
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, Fortran77Parser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1421;
			this.ncExpr();
			this.state = 1424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.COLON) {
				{
				this.state = 1422;
				this.match(Fortran77Parser.COLON);
				this.state = 1423;
				this.ncExpr();
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
	public ncExpr(): NcExprContext {
		let _localctx: NcExprContext = new NcExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, Fortran77Parser.RULE_ncExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1426;
			this.lexpr0();
			this.state = 1432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.DIV) {
				{
				{
				this.state = 1427;
				this.concatOp();
				this.state = 1428;
				this.lexpr0();
				}
				}
				this.state = 1434;
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
	public lexpr0(): Lexpr0Context {
		let _localctx: Lexpr0Context = new Lexpr0Context(this._ctx, this.state);
		this.enterRule(_localctx, 306, Fortran77Parser.RULE_lexpr0);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1435;
			this.lexpr1();
			this.state = 1440;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.EQV || _la === Fortran77Parser.NEQV) {
				{
				{
				this.state = 1436;
				_la = this._input.LA(1);
				if (!(_la === Fortran77Parser.EQV || _la === Fortran77Parser.NEQV)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1437;
				this.lexpr1();
				}
				}
				this.state = 1442;
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
	public lexpr1(): Lexpr1Context {
		let _localctx: Lexpr1Context = new Lexpr1Context(this._ctx, this.state);
		this.enterRule(_localctx, 308, Fortran77Parser.RULE_lexpr1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1443;
			this.lexpr2();
			this.state = 1448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.LOR) {
				{
				{
				this.state = 1444;
				this.match(Fortran77Parser.LOR);
				this.state = 1445;
				this.lexpr2();
				}
				}
				this.state = 1450;
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
	public lexpr2(): Lexpr2Context {
		let _localctx: Lexpr2Context = new Lexpr2Context(this._ctx, this.state);
		this.enterRule(_localctx, 310, Fortran77Parser.RULE_lexpr2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1451;
			this.lexpr3();
			this.state = 1456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.LAND) {
				{
				{
				this.state = 1452;
				this.match(Fortran77Parser.LAND);
				this.state = 1453;
				this.lexpr3();
				}
				}
				this.state = 1458;
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
	public lexpr3(): Lexpr3Context {
		let _localctx: Lexpr3Context = new Lexpr3Context(this._ctx, this.state);
		this.enterRule(_localctx, 312, Fortran77Parser.RULE_lexpr3);
		try {
			this.state = 1462;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.LNOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1459;
				this.match(Fortran77Parser.LNOT);
				this.state = 1460;
				this.lexpr3();
				}
				break;
			case Fortran77Parser.REAL:
			case Fortran77Parser.ICON:
			case Fortran77Parser.LPAREN:
			case Fortran77Parser.MINUS:
			case Fortran77Parser.PLUS:
			case Fortran77Parser.TRUE:
			case Fortran77Parser.FALSE:
			case Fortran77Parser.HOLLERITH:
			case Fortran77Parser.SCON:
			case Fortran77Parser.RCON:
			case Fortran77Parser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1461;
				this.lexpr4();
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
	public lexpr4(): Lexpr4Context {
		let _localctx: Lexpr4Context = new Lexpr4Context(this._ctx, this.state);
		this.enterRule(_localctx, 314, Fortran77Parser.RULE_lexpr4);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1464;
			this.aexpr0();
			this.state = 1467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (Fortran77Parser.LT - 87)) | (1 << (Fortran77Parser.LE - 87)) | (1 << (Fortran77Parser.GT - 87)) | (1 << (Fortran77Parser.GE - 87)) | (1 << (Fortran77Parser.NE - 87)) | (1 << (Fortran77Parser.EQ - 87)))) !== 0)) {
				{
				this.state = 1465;
				_la = this._input.LA(1);
				if (!(((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (Fortran77Parser.LT - 87)) | (1 << (Fortran77Parser.LE - 87)) | (1 << (Fortran77Parser.GT - 87)) | (1 << (Fortran77Parser.GE - 87)) | (1 << (Fortran77Parser.NE - 87)) | (1 << (Fortran77Parser.EQ - 87)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1466;
				this.aexpr0();
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
	public aexpr0(): Aexpr0Context {
		let _localctx: Aexpr0Context = new Aexpr0Context(this._ctx, this.state);
		this.enterRule(_localctx, 316, Fortran77Parser.RULE_aexpr0);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1469;
			this.aexpr1();
			this.state = 1474;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1470;
					_la = this._input.LA(1);
					if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1471;
					this.aexpr1();
					}
					}
				}
				this.state = 1476;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
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
	public aexpr1(): Aexpr1Context {
		let _localctx: Aexpr1Context = new Aexpr1Context(this._ctx, this.state);
		this.enterRule(_localctx, 318, Fortran77Parser.RULE_aexpr1);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1477;
			this.aexpr2();
			this.state = 1482;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1478;
					_la = this._input.LA(1);
					if (!(_la === Fortran77Parser.DIV || _la === Fortran77Parser.STAR)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1479;
					this.aexpr2();
					}
					}
				}
				this.state = 1484;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
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
	public aexpr2(): Aexpr2Context {
		let _localctx: Aexpr2Context = new Aexpr2Context(this._ctx, this.state);
		this.enterRule(_localctx, 320, Fortran77Parser.RULE_aexpr2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS) {
				{
				{
				this.state = 1485;
				_la = this._input.LA(1);
				if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
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
				this.state = 1490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1491;
			this.aexpr3();
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
	public aexpr3(): Aexpr3Context {
		let _localctx: Aexpr3Context = new Aexpr3Context(this._ctx, this.state);
		this.enterRule(_localctx, 322, Fortran77Parser.RULE_aexpr3);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1493;
			this.aexpr4();
			this.state = 1498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.POWER) {
				{
				{
				this.state = 1494;
				this.match(Fortran77Parser.POWER);
				this.state = 1495;
				this.aexpr4();
				}
				}
				this.state = 1500;
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
	public aexpr4(): Aexpr4Context {
		let _localctx: Aexpr4Context = new Aexpr4Context(this._ctx, this.state);
		this.enterRule(_localctx, 324, Fortran77Parser.RULE_aexpr4);
		let _la: number;
		try {
			this.state = 1511;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1501;
				this.unsignedArithmeticConstant();
				}
				this.state = 1502;
				this.unsignedArithmeticConstant();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1504;
				_la = this._input.LA(1);
				if (!(_la === Fortran77Parser.HOLLERITH || _la === Fortran77Parser.SCON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1505;
				this.logicalConstant();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1506;
				this.varRef();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1507;
				this.match(Fortran77Parser.LPAREN);
				this.state = 1508;
				this.expression();
				this.state = 1509;
				this.match(Fortran77Parser.RPAREN);
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
	public iexpr(): IexprContext {
		let _localctx: IexprContext = new IexprContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, Fortran77Parser.RULE_iexpr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1513;
			this.iexpr1();
			this.state = 1518;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1514;
					_la = this._input.LA(1);
					if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1515;
					this.iexpr1();
					}
					}
				}
				this.state = 1520;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
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
	public iexprCode(): IexprCodeContext {
		let _localctx: IexprCodeContext = new IexprCodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, Fortran77Parser.RULE_iexprCode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1521;
			this.iexpr1();
			this.state = 1526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS) {
				{
				{
				this.state = 1522;
				_la = this._input.LA(1);
				if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1523;
				this.iexpr1();
				}
				}
				this.state = 1528;
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
	public iexpr1(): Iexpr1Context {
		let _localctx: Iexpr1Context = new Iexpr1Context(this._ctx, this.state);
		this.enterRule(_localctx, 330, Fortran77Parser.RULE_iexpr1);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1529;
			this.iexpr2();
			this.state = 1534;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1530;
					_la = this._input.LA(1);
					if (!(_la === Fortran77Parser.DIV || _la === Fortran77Parser.STAR)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1531;
					this.iexpr2();
					}
					}
				}
				this.state = 1536;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
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
	public iexpr2(): Iexpr2Context {
		let _localctx: Iexpr2Context = new Iexpr2Context(this._ctx, this.state);
		this.enterRule(_localctx, 332, Fortran77Parser.RULE_iexpr2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS) {
				{
				{
				this.state = 1537;
				_la = this._input.LA(1);
				if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
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
				this.state = 1542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1543;
			this.iexpr3();
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
	public iexpr3(): Iexpr3Context {
		let _localctx: Iexpr3Context = new Iexpr3Context(this._ctx, this.state);
		this.enterRule(_localctx, 334, Fortran77Parser.RULE_iexpr3);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1545;
			this.iexpr4();
			this.state = 1548;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.POWER) {
				{
				this.state = 1546;
				this.match(Fortran77Parser.POWER);
				this.state = 1547;
				this.iexpr3();
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
	public iexpr4(): Iexpr4Context {
		let _localctx: Iexpr4Context = new Iexpr4Context(this._ctx, this.state);
		this.enterRule(_localctx, 336, Fortran77Parser.RULE_iexpr4);
		try {
			this.state = 1556;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.ICON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1550;
				this.match(Fortran77Parser.ICON);
				}
				break;
			case Fortran77Parser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1551;
				this.varRefCode();
				}
				break;
			case Fortran77Parser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1552;
				this.match(Fortran77Parser.LPAREN);
				this.state = 1553;
				this.iexprCode();
				this.state = 1554;
				this.match(Fortran77Parser.RPAREN);
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
	public constantExpr(): ConstantExprContext {
		let _localctx: ConstantExprContext = new ConstantExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, Fortran77Parser.RULE_constantExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1558;
			this.expression();
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
	public arithmeticExpression(): ArithmeticExpressionContext {
		let _localctx: ArithmeticExpressionContext = new ArithmeticExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, Fortran77Parser.RULE_arithmeticExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1560;
			this.expression();
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
	public integerExpr(): IntegerExprContext {
		let _localctx: IntegerExprContext = new IntegerExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, Fortran77Parser.RULE_integerExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1562;
			this.iexpr();
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
	public intRealDpExpr(): IntRealDpExprContext {
		let _localctx: IntRealDpExprContext = new IntRealDpExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, Fortran77Parser.RULE_intRealDpExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1564;
			this.expression();
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
	public arithmeticConstExpr(): ArithmeticConstExprContext {
		let _localctx: ArithmeticConstExprContext = new ArithmeticConstExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, Fortran77Parser.RULE_arithmeticConstExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1566;
			this.expression();
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
	public intConstantExpr(): IntConstantExprContext {
		let _localctx: IntConstantExprContext = new IntConstantExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, Fortran77Parser.RULE_intConstantExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1568;
			this.expression();
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
	public characterExpression(): CharacterExpressionContext {
		let _localctx: CharacterExpressionContext = new CharacterExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, Fortran77Parser.RULE_characterExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1570;
			this.expression();
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
	public concatOp(): ConcatOpContext {
		let _localctx: ConcatOpContext = new ConcatOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, Fortran77Parser.RULE_concatOp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1572;
			this.match(Fortran77Parser.DIV);
			this.state = 1573;
			this.match(Fortran77Parser.DIV);
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
	public logicalExpression(): LogicalExpressionContext {
		let _localctx: LogicalExpressionContext = new LogicalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, Fortran77Parser.RULE_logicalExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1575;
			this.expression();
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
	public logicalConstExpr(): LogicalConstExprContext {
		let _localctx: LogicalConstExprContext = new LogicalConstExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, Fortran77Parser.RULE_logicalConstExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1577;
			this.expression();
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
	public arrayElementName(): ArrayElementNameContext {
		let _localctx: ArrayElementNameContext = new ArrayElementNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, Fortran77Parser.RULE_arrayElementName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1579;
			this.match(Fortran77Parser.NAME);
			this.state = 1580;
			this.match(Fortran77Parser.LPAREN);
			this.state = 1581;
			this.integerExpr();
			this.state = 1586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Fortran77Parser.COMMA) {
				{
				{
				this.state = 1582;
				this.match(Fortran77Parser.COMMA);
				this.state = 1583;
				this.integerExpr();
				}
				}
				this.state = 1588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1589;
			this.match(Fortran77Parser.RPAREN);
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
	public subscripts(): SubscriptsContext {
		let _localctx: SubscriptsContext = new SubscriptsContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, Fortran77Parser.RULE_subscripts);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1591;
			this.match(Fortran77Parser.LPAREN);
			this.state = 1600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.REAL || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (Fortran77Parser.LNOT - 80)) | (1 << (Fortran77Parser.TRUE - 80)) | (1 << (Fortran77Parser.FALSE - 80)) | (1 << (Fortran77Parser.HOLLERITH - 80)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (Fortran77Parser.SCON - 114)) | (1 << (Fortran77Parser.RCON - 114)) | (1 << (Fortran77Parser.NAME - 114)))) !== 0)) {
				{
				this.state = 1592;
				this.expression();
				this.state = 1597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Fortran77Parser.COMMA) {
					{
					{
					this.state = 1593;
					this.match(Fortran77Parser.COMMA);
					this.state = 1594;
					this.expression();
					}
					}
					this.state = 1599;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1602;
			this.match(Fortran77Parser.RPAREN);
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
	public varRef(): VarRefContext {
		let _localctx: VarRefContext = new VarRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, Fortran77Parser.RULE_varRef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1604;
			_la = this._input.LA(1);
			if (!(_la === Fortran77Parser.REAL || _la === Fortran77Parser.NAME)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1609;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				{
				this.state = 1605;
				this.subscripts();
				this.state = 1607;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
				case 1:
					{
					this.state = 1606;
					this.substringApp();
					}
					break;
				}
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
	public varRefCode(): VarRefCodeContext {
		let _localctx: VarRefCodeContext = new VarRefCodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, Fortran77Parser.RULE_varRefCode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1611;
			this.match(Fortran77Parser.NAME);
			this.state = 1616;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				{
				this.state = 1612;
				this.subscripts();
				this.state = 1614;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
				case 1:
					{
					this.state = 1613;
					this.substringApp();
					}
					break;
				}
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
	public substringApp(): SubstringAppContext {
		let _localctx: SubstringAppContext = new SubstringAppContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, Fortran77Parser.RULE_substringApp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1618;
			this.match(Fortran77Parser.LPAREN);
			this.state = 1620;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.REAL || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (Fortran77Parser.LNOT - 80)) | (1 << (Fortran77Parser.TRUE - 80)) | (1 << (Fortran77Parser.FALSE - 80)) | (1 << (Fortran77Parser.HOLLERITH - 80)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (Fortran77Parser.SCON - 114)) | (1 << (Fortran77Parser.RCON - 114)) | (1 << (Fortran77Parser.NAME - 114)))) !== 0)) {
				{
				this.state = 1619;
				this.ncExpr();
				}
			}

			this.state = 1622;
			this.match(Fortran77Parser.COLON);
			this.state = 1624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.REAL || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (Fortran77Parser.ICON - 48)) | (1 << (Fortran77Parser.LPAREN - 48)) | (1 << (Fortran77Parser.MINUS - 48)) | (1 << (Fortran77Parser.PLUS - 48)))) !== 0) || ((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (Fortran77Parser.LNOT - 80)) | (1 << (Fortran77Parser.TRUE - 80)) | (1 << (Fortran77Parser.FALSE - 80)) | (1 << (Fortran77Parser.HOLLERITH - 80)))) !== 0) || ((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & ((1 << (Fortran77Parser.SCON - 114)) | (1 << (Fortran77Parser.RCON - 114)) | (1 << (Fortran77Parser.NAME - 114)))) !== 0)) {
				{
				this.state = 1623;
				this.ncExpr();
				}
			}

			this.state = 1626;
			this.match(Fortran77Parser.RPAREN);
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
	public variableName(): VariableNameContext {
		let _localctx: VariableNameContext = new VariableNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, Fortran77Parser.RULE_variableName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1628;
			this.match(Fortran77Parser.NAME);
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
	public arrayName(): ArrayNameContext {
		let _localctx: ArrayNameContext = new ArrayNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, Fortran77Parser.RULE_arrayName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1630;
			this.match(Fortran77Parser.NAME);
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
	public subroutineName(): SubroutineNameContext {
		let _localctx: SubroutineNameContext = new SubroutineNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, Fortran77Parser.RULE_subroutineName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1632;
			this.match(Fortran77Parser.NAME);
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
	public functionName(): FunctionNameContext {
		let _localctx: FunctionNameContext = new FunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, Fortran77Parser.RULE_functionName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1634;
			this.match(Fortran77Parser.NAME);
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
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, Fortran77Parser.RULE_constant);
		let _la: number;
		try {
			this.state = 1642;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.ICON:
			case Fortran77Parser.LPAREN:
			case Fortran77Parser.MINUS:
			case Fortran77Parser.PLUS:
			case Fortran77Parser.RCON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS) {
					{
					this.state = 1636;
					_la = this._input.LA(1);
					if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
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

				this.state = 1639;
				this.unsignedArithmeticConstant();
				}
				break;
			case Fortran77Parser.HOLLERITH:
			case Fortran77Parser.SCON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1640;
				_la = this._input.LA(1);
				if (!(_la === Fortran77Parser.HOLLERITH || _la === Fortran77Parser.SCON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case Fortran77Parser.TRUE:
			case Fortran77Parser.FALSE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1641;
				this.logicalConstant();
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
	public unsignedArithmeticConstant(): UnsignedArithmeticConstantContext {
		let _localctx: UnsignedArithmeticConstantContext = new UnsignedArithmeticConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, Fortran77Parser.RULE_unsignedArithmeticConstant);
		let _la: number;
		try {
			this.state = 1646;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Fortran77Parser.ICON:
			case Fortran77Parser.RCON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1644;
				_la = this._input.LA(1);
				if (!(_la === Fortran77Parser.ICON || _la === Fortran77Parser.RCON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case Fortran77Parser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1645;
				this.complexConstant();
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
	public complexConstant(): ComplexConstantContext {
		let _localctx: ComplexConstantContext = new ComplexConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, Fortran77Parser.RULE_complexConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1648;
			this.match(Fortran77Parser.LPAREN);
			this.state = 1650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS) {
				{
				this.state = 1649;
				_la = this._input.LA(1);
				if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
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

			this.state = 1652;
			_la = this._input.LA(1);
			if (!(_la === Fortran77Parser.ICON || _la === Fortran77Parser.RCON)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1653;
			this.match(Fortran77Parser.COMMA);
			this.state = 1655;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS) {
				{
				this.state = 1654;
				_la = this._input.LA(1);
				if (!(_la === Fortran77Parser.MINUS || _la === Fortran77Parser.PLUS)) {
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

			this.state = 1657;
			_la = this._input.LA(1);
			if (!(_la === Fortran77Parser.ICON || _la === Fortran77Parser.RCON)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1658;
			this.match(Fortran77Parser.RPAREN);
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
	public logicalConstant(): LogicalConstantContext {
		let _localctx: LogicalConstantContext = new LogicalConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, Fortran77Parser.RULE_logicalConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1660;
			_la = this._input.LA(1);
			if (!(_la === Fortran77Parser.TRUE || _la === Fortran77Parser.FALSE)) {
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, Fortran77Parser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1662;
			_la = this._input.LA(1);
			if (!(_la === Fortran77Parser.REAL || _la === Fortran77Parser.NAME)) {
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
	public to(): ToContext {
		let _localctx: ToContext = new ToContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, Fortran77Parser.RULE_to);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1664;
			this.match(Fortran77Parser.NAME);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03z\u0685\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
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
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
		"\x04\xC3\t\xC3\x03\x02\x06\x02\u0188\n\x02\r\x02\x0E\x02\u0189\x03\x02" +
		"\x07\x02\u018D\n\x02\f\x02\x0E\x02\u0190\v\x02\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03\u0196\n\x03\x03\x04\x05\x04\u0199\n\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x05\b\u01AA\n\b\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\u01BE\n\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x05\v\u01CA\n\v\x03\f\x05\f\u01CD\n\f\x03\f\x03\f\x03\f" +
		"\x03\f\x05\f\u01D3\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u01DE\n\x0E\x03\x0E\x05\x0E\u01E1\n\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x07\x0F\u01E6\n\x0F\f\x0F\x0E\x0F\u01E9\v\x0F\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x05\x10\u01F9\n\x10\x03\x11\x06\x11\u01FC" +
		"\n\x11\r\x11\x0E\x11\u01FD\x03\x11\x03\x11\x03\x12\x05\x12\u0203\n\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x13\x05\x13\u0209\n\x13\x03\x13\x03\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x16\x07\x16\u0218\n\x16\f\x16\x0E\x16\u021B\v\x16\x03\x17\x03" +
		"\x17\x03\x17\x07\x17\u0220\n\x17\f\x17\x0E\x17\u0223\v\x17\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x05\x18\u0229\n\x18\x05\x18\u022B\n\x18\x03\x18\x05" +
		"\x18\u022E\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0234\n\x19\f" +
		"\x19\x0E\x19\u0237\v\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u023D" +
		"\n\x1A\f\x1A\x0E\x1A\u0240\v\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u024A\n\x1C\f\x1C\x0E\x1C\u024D\v\x1C" +
		"\x03\x1C\x05\x1C\u0250\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0256" +
		"\n\x1D\x03\x1E\x03\x1E\x05\x1E\u025A\n\x1E\x03\x1F\x03\x1F\x03\x1F\x07" +
		"\x1F\u025F\n\x1F\f\x1F\x0E\x1F\u0262\v\x1F\x03 \x03 \x03 \x03!\x03!\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u026F\n\"\x03#\x03#\x03#\x07#\u0274" +
		"\n#\f#\x0E#\u0277\v#\x03$\x03$\x05$\u027B\n$\x03%\x03%\x03%\x07%\u0280" +
		"\n%\f%\x0E%\u0283\v%\x03&\x03&\x05&\u0287\n&\x03\'\x03\'\x03\'\x03(\x03" +
		"(\x03(\x03(\x05(\u0290\n(\x05(\u0292\n(\x03(\x03(\x03(\x03(\x03(\x03(" +
		"\x05(\u029A\n(\x03)\x03)\x05)\u029E\n)\x03*\x03*\x03*\x03+\x03+\x03+\x03" +
		"+\x07+\u02A7\n+\f+\x0E+\u02AA\v+\x03,\x03,\x03,\x03,\x03,\x03,\x03-\x03" +
		"-\x03-\x05-\u02B5\n-\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x07/\u02BF" +
		"\n/\f/\x0E/\u02C2\v/\x030\x030\x031\x031\x032\x032\x032\x052\u02CB\n2" +
		"\x033\x033\x033\x073\u02D0\n3\f3\x0E3\u02D3\v3\x034\x034\x034\x034\x03" +
		"4\x034\x034\x034\x034\x034\x034\x034\x054\u02E1\n4\x035\x035\x055\u02E5" +
		"\n5\x036\x036\x036\x037\x037\x037\x037\x037\x038\x038\x038\x078\u02F2" +
		"\n8\f8\x0E8\u02F5\v8\x039\x039\x039\x039\x03:\x03:\x03:\x03;\x03;\x03" +
		";\x03<\x03<\x03<\x03<\x07<\u0305\n<\f<\x0E<\u0308\v<\x05<\u030A\n<\x03" +
		"=\x03=\x03=\x03=\x05=\u0310\n=\x03>\x03>\x03>\x05>\u0315\n>\x03>\x07>" +
		"\u0318\n>\f>\x0E>\u031B\v>\x03?\x03?\x05?\u031F\n?\x03@\x03@\x05@\u0323" +
		"\n@\x03@\x03@\x05@\u0327\n@\x03A\x03A\x03A\x03B\x03B\x03B\x07B\u032F\n" +
		"B\fB\x0EB\u0332\vB\x03B\x03B\x03C\x03C\x03C\x07C\u0339\nC\fC\x0EC\u033C" +
		"\vC\x03C\x03C\x03D\x03D\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x05E\u034D\nE\x03F\x03F\x03F\x05F\u0352\nF\x03G\x03G\x05G\u0356" +
		"\nG\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u035E\nH\x03I\x03I\x03J\x03J\x03" +
		"J\x03J\x05J\u0366\nJ\x03J\x03J\x03K\x03K\x03L\x03L\x03L\x07L\u036F\nL" +
		"\fL\x0EL\u0372\vL\x03M\x03M\x05M\u0376\nM\x03M\x03M\x03M\x03M\x05M\u037C" +
		"\nM\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x05N\u0385\nN\x03O\x03O\x03O\x03" +
		"O\x03O\x03O\x03P\x03P\x03Q\x03Q\x07Q\u0391\nQ\fQ\x0EQ\u0394\vQ\x03Q\x05" +
		"Q\u0397\nQ\x03Q\x03Q\x03R\x03R\x06R\u039D\nR\rR\x0ER\u039E\x03S\x03S\x03" +
		"S\x05S\u03A4\nS\x03S\x03S\x03S\x03S\x03S\x06S\u03AB\nS\rS\x0ES\u03AC\x03" +
		"T\x03T\x06T\u03B1\nT\rT\x0ET\u03B2\x03U\x03U\x03U\x05U\u03B8\nU\x03V\x03" +
		"V\x03V\x05V\u03BD\nV\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x05W\u03C6\nW" +
		"\x03X\x03X\x05X\u03CA\nX\x03X\x03X\x03Y\x06Y\u03CF\nY\rY\x0EY\u03D0\x03" +
		"Z\x03Z\x03Z\x03Z\x03[\x03[\x03[\x05[\u03DA\n[\x03\\\x03\\\x03]\x03]\x05" +
		"]\u03E0\n]\x03^\x03^\x03^\x03_\x03_\x03_\x03_\x03_\x05_\u03EA\n_\x03_" +
		"\x06_\u03ED\n_\r_\x0E_\u03EE\x05_\u03F1\n_\x03`\x03`\x03`\x03`\x06`\u03F7" +
		"\n`\r`\x0E`\u03F8\x05`\u03FB\n`\x03a\x03a\x03a\x03a\x06a\u0401\na\ra\x0E" +
		"a\u0402\x05a\u0405\na\x03b\x03b\x03b\x03b\x03c\x03c\x03c\x07c\u040E\n" +
		"c\fc\x0Ec\u0411\vc\x03d\x03d\x03d\x03d\x05d\u0417\nd\x03e\x03e\x03e\x03" +
		"e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03" +
		"e\x03e\x03e\x03e\x03e\x03e\x05e\u0430\ne\x03f\x03f\x03f\x03f\x03f\x03" +
		"f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x05f\u0442\nf\x03" +
		"g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x05g\u044D\ng\x03h\x03h\x03" +
		"h\x03h\x03h\x03h\x03h\x03h\x03h\x03h\x05h\u0459\nh\x03h\x03h\x03i\x03" +
		"i\x03i\x03i\x03i\x07i\u0462\ni\fi\x0Ei\u0465\vi\x03i\x03i\x03j\x03j\x03" +
		"j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x05" +
		"j\u0479\nj\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x03" +
		"j\x03j\x03j\x03j\x03j\x03j\x03j\x03j\x05j\u048E\nj\x03k\x03k\x03l\x03" +
		"l\x03m\x03m\x03n\x03n\x03o\x03o\x03p\x03p\x03q\x03q\x03r\x03r\x03s\x03" +
		"s\x03t\x03t\x03u\x03u\x03v\x03v\x03w\x03w\x03x\x03x\x03y\x03y\x03z\x03" +
		"z\x03{\x03{\x03|\x03|\x03}\x03}\x03~\x03~\x03\x7F\x03\x7F\x03\x80\x03" +
		"\x80\x03\x81\x03\x81\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x07\x82\u04C3" +
		"\n\x82\f\x82\x0E\x82\u04C6\v\x82\x03\x82\x03\x82\x03\x83\x03\x83\x03\x83" +
		"\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83" +
		"\x03\x83\x03\x83\x05\x83\u04D8\n\x83\x03\x84\x03\x84\x03\x84\x03\x84\x03" +
		"\x84\x07\x84\u04DF\n\x84\f\x84\x0E\x84\u04E2\v\x84\x03\x84\x03\x84\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u04FE\n\x85\x03\x85" +
		"\x03\x85\x03\x85\x03\x85\x05\x85\u0504\n\x85\x03\x86\x03\x86\x03\x86\x03" +
		"\x87\x03\x87\x03\x87\x03\x88\x03\x88\x03\x88\x03\x89\x03\x89\x03\x89\x03" +
		"\x89\x03\x89\x03\x89\x03\x89\x07\x89\u0516\n\x89\f\x89\x0E\x89\u0519\v" +
		"\x89\x03\x89\x03\x89\x05\x89\u051D\n\x89\x03\x8A\x03\x8A\x03\x8A\x03\x8A" +
		"\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u0529\n\x8A\x03" +
		"\x8B\x03\x8B\x05\x8B\u052D\n\x8B\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u0532" +
		"\n\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x03\x8E" +
		"\x05\x8E\u053C\n\x8E\x05\x8E\u053E\n\x8E\x03\x8E\x03\x8E\x05\x8E\u0542" +
		"\n\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u0548\n\x8E\x05\x8E\u054A" +
		"\n\x8E\x07\x8E\u054C\n\x8E\f\x8E\x0E\x8E\u054F\v\x8E\x03\x8F\x03\x8F\x03" +
		"\x90\x03\x90\x03\x90\x03\x90\x03\x90\x05\x90\u0558\n\x90\x03\x90\x03\x90" +
		"\x05\x90\u055C\n\x90\x03\x90\x05\x90\u055F\n\x90\x05\x90\u0561\n\x90\x03" +
		"\x91\x03\x91\x03\x91\x03\x91\x03\x91\x05\x91\u0568\n\x91\x03\x92\x03\x92" +
		"\x03\x92\x03\x92\x03\x92\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x94" +
		"\x03\x94\x03\x94\x03\x95\x03\x95\x03\x95\x05\x95\u057A\n\x95\x03\x95\x05" +
		"\x95\u057D\n\x95\x03\x96\x03\x96\x03\x96\x07\x96\u0582\n\x96\f\x96\x0E" +
		"\x96\u0585\v\x96\x03\x97\x03\x97\x03\x97\x05\x97\u058A\n\x97\x03\x98\x03" +
		"\x98\x05\x98\u058E\n\x98\x03\x99\x03\x99\x03\x99\x05\x99\u0593\n\x99\x03" +
		"\x9A\x03\x9A\x03\x9A\x03\x9A\x07\x9A\u0599\n\x9A\f\x9A\x0E\x9A\u059C\v" +
		"\x9A\x03\x9B\x03\x9B\x03\x9B\x07\x9B\u05A1\n\x9B\f\x9B\x0E\x9B\u05A4\v" +
		"\x9B\x03\x9C\x03\x9C\x03\x9C\x07\x9C\u05A9\n\x9C\f\x9C\x0E\x9C\u05AC\v" +
		"\x9C\x03\x9D\x03\x9D\x03\x9D\x07\x9D\u05B1\n\x9D\f\x9D\x0E\x9D\u05B4\v" +
		"\x9D\x03\x9E\x03\x9E\x03\x9E\x05\x9E\u05B9\n\x9E\x03\x9F\x03\x9F\x03\x9F" +
		"\x05\x9F\u05BE\n\x9F\x03\xA0\x03\xA0\x03\xA0\x07\xA0\u05C3\n\xA0\f\xA0" +
		"\x0E\xA0\u05C6\v\xA0\x03\xA1\x03\xA1\x03\xA1\x07\xA1\u05CB\n\xA1\f\xA1" +
		"\x0E\xA1\u05CE\v\xA1\x03\xA2\x07\xA2\u05D1\n\xA2\f\xA2\x0E\xA2\u05D4\v" +
		"\xA2\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA3\x07\xA3\u05DB\n\xA3\f\xA3" +
		"\x0E\xA3\u05DE\v\xA3\x03\xA4\x03\xA4\x03\xA4\x03\xA4\x03\xA4\x03\xA4\x03" +
		"\xA4\x03\xA4\x03\xA4\x03\xA4\x05\xA4\u05EA\n\xA4\x03\xA5\x03\xA5\x03\xA5" +
		"\x07\xA5\u05EF\n\xA5\f\xA5\x0E\xA5\u05F2\v\xA5\x03\xA6\x03\xA6\x03\xA6" +
		"\x07\xA6\u05F7\n\xA6\f\xA6\x0E\xA6\u05FA\v\xA6\x03\xA7\x03\xA7\x03\xA7" +
		"\x07\xA7\u05FF\n\xA7\f\xA7\x0E\xA7\u0602\v\xA7\x03\xA8\x07\xA8\u0605\n" +
		"\xA8\f\xA8\x0E\xA8\u0608\v\xA8\x03\xA8\x03\xA8\x03\xA9\x03\xA9\x03\xA9" +
		"\x05\xA9\u060F\n\xA9\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x05" +
		"\xAA\u0617\n\xAA\x03\xAB\x03\xAB\x03\xAC\x03\xAC\x03\xAD\x03\xAD\x03\xAE" +
		"\x03\xAE\x03\xAF\x03\xAF\x03\xB0\x03\xB0\x03\xB1\x03\xB1\x03\xB2\x03\xB2" +
		"\x03\xB2\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB5\x03\xB5\x03\xB5\x03\xB5" +
		"\x03\xB5\x07\xB5\u0633\n\xB5\f\xB5\x0E\xB5\u0636\v\xB5\x03\xB5\x03\xB5" +
		"\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x07\xB6\u063E\n\xB6\f\xB6\x0E\xB6\u0641" +
		"\v\xB6\x05\xB6\u0643\n\xB6\x03\xB6\x03\xB6\x03\xB7\x03\xB7\x03\xB7\x05" +
		"\xB7\u064A\n\xB7\x05\xB7\u064C\n\xB7\x03\xB8\x03\xB8\x03\xB8\x05\xB8\u0651" +
		"\n\xB8\x05\xB8\u0653\n\xB8\x03\xB9\x03\xB9\x05\xB9\u0657\n\xB9\x03\xB9" +
		"\x03\xB9\x05\xB9\u065B\n\xB9\x03\xB9\x03\xB9\x03\xBA\x03\xBA\x03\xBB\x03" +
		"\xBB\x03\xBC\x03\xBC\x03\xBD\x03\xBD\x03\xBE\x05\xBE\u0668\n\xBE\x03\xBE" +
		"\x03\xBE\x03\xBE\x05\xBE\u066D\n\xBE\x03\xBF\x03\xBF\x05\xBF\u0671\n\xBF" +
		"\x03\xC0\x03\xC0\x05\xC0\u0675\n\xC0\x03\xC0\x03\xC0\x03\xC0\x05\xC0\u067A" +
		"\n\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC1\x03\xC1\x03\xC2\x03\xC2\x03\xC3" +
		"\x03\xC3\x03\xC3\x02\x02\x02\xC4\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02" +
		":\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02" +
		"V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02" +
		"r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88" +
		"\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A" +
		"\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC" +
		"\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE" +
		"\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0" +
		"\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2" +
		"\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4" +
		"\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104" +
		"\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112" +
		"\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120" +
		"\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E" +
		"\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C" +
		"\x02\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A" +
		"\x02\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158" +
		"\x02\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166" +
		"\x02\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174" +
		"\x02\u0176\x02\u0178\x02\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182" +
		"\x02\u0184\x02\x02\x0F\x04\x02\n\nvv\x04\x0222vv\x03\x02\x16\x17\x04\x02" +
		"22ee\x04\x02eett\x05\x02GGKKOO\x03\x02MN\x06\x02cceettvv\x03\x02UV\x03" +
		"\x02Y^\x03\x02OP\x04\x0222uu\x03\x02_`\x02\u06AB\x02\u0187\x03\x02\x02" +
		"\x02\x04\u0195\x03\x02\x02\x02\x06\u0198\x03\x02\x02\x02\b\u019C\x03\x02" +
		"\x02\x02\n\u019F\x03\x02\x02\x02\f\u01A2\x03\x02\x02\x02\x0E\u01A9\x03" +
		"\x02\x02\x02\x10\u01BD\x03\x02\x02\x02\x12\u01BF\x03\x02\x02\x02\x14\u01C3" +
		"\x03\x02\x02\x02\x16\u01CC\x03\x02\x02\x02\x18\u01D6\x03\x02\x02\x02\x1A" +
		"\u01D9\x03\x02\x02\x02\x1C\u01E2\x03\x02\x02\x02\x1E\u01F8\x03\x02\x02" +
		"\x02 \u01FB\x03\x02\x02\x02\"\u0202\x03\x02\x02\x02$\u0208\x03\x02\x02" +
		"\x02&\u020C\x03\x02\x02\x02(\u020F\x03\x02\x02\x02*\u0214\x03\x02\x02" +
		"\x02,\u021C\x03\x02\x02\x02.\u022D\x03\x02\x02\x020\u022F\x03\x02\x02" +
		"\x022\u0238\x03\x02\x02\x024\u0243\x03\x02\x02\x026\u0245\x03\x02\x02" +
		"\x028\u0251\x03\x02\x02\x02:\u0259\x03\x02\x02\x02<\u025B\x03\x02\x02" +
		"\x02>\u0263\x03\x02\x02\x02@\u0266\x03\x02\x02\x02B\u026E\x03\x02\x02" +
		"\x02D\u0270\x03\x02\x02\x02F\u027A\x03\x02\x02\x02H\u027C\x03\x02\x02" +
		"\x02J\u0284\x03\x02\x02\x02L\u0288\x03\x02\x02\x02N\u0299\x03\x02\x02" +
		"\x02P\u029D\x03\x02\x02\x02R\u029F\x03\x02\x02\x02T\u02A2\x03\x02\x02" +
		"\x02V\u02AB\x03\x02\x02\x02X\u02B1\x03\x02\x02\x02Z\u02B6\x03\x02\x02" +
		"\x02\\\u02BB\x03\x02\x02\x02^\u02C3\x03\x02\x02\x02`\u02C5\x03\x02\x02" +
		"\x02b\u02C7\x03\x02\x02\x02d\u02CC\x03\x02\x02\x02f\u02E0\x03\x02\x02" +
		"\x02h\u02E2\x03\x02\x02\x02j\u02E6\x03\x02\x02\x02l\u02E9\x03\x02\x02" +
		"\x02n\u02EE\x03\x02\x02\x02p\u02F6\x03\x02\x02\x02r\u02FA\x03\x02\x02" +
		"\x02t\u02FD\x03\x02\x02\x02v\u0300\x03\x02\x02\x02x\u030F\x03\x02\x02" +
		"\x02z\u0311\x03\x02\x02\x02|\u031E\x03\x02\x02\x02~\u0322\x03\x02\x02" +
		"\x02\x80\u0328\x03\x02\x02\x02\x82\u032B\x03\x02\x02\x02\x84\u0335\x03" +
		"\x02\x02\x02\x86\u033F\x03\x02\x02\x02\x88\u0345\x03\x02\x02\x02\x8A\u0351" +
		"\x03\x02\x02\x02\x8C\u0355\x03\x02\x02\x02\x8E\u0357\x03\x02\x02\x02\x90" +
		"\u035F\x03\x02\x02\x02\x92\u0361\x03\x02\x02\x02\x94\u0369\x03\x02\x02" +
		"\x02\x96\u036B\x03\x02\x02\x02\x98\u0373\x03\x02\x02\x02\x9A\u037D\x03" +
		"\x02\x02\x02\x9C\u0386\x03\x02\x02\x02\x9E\u038C\x03\x02\x02\x02\xA0\u038E" +
		"\x03\x02\x02\x02\xA2\u039A\x03\x02\x02\x02\xA4\u03A3\x03\x02\x02\x02\xA6" +
		"\u03AE\x03\x02\x02\x02\xA8\u03B7\x03\x02\x02\x02\xAA\u03B9\x03\x02\x02" +
		"\x02\xAC\u03BE\x03\x02\x02\x02\xAE\u03C7\x03\x02\x02\x02\xB0\u03CE\x03" +
		"\x02\x02\x02\xB2\u03D2\x03\x02\x02\x02\xB4\u03D9\x03\x02\x02\x02\xB6\u03DB" +
		"\x03\x02\x02\x02\xB8\u03DD\x03\x02\x02\x02\xBA\u03E1\x03\x02\x02\x02\xBC" +
		"\u03E4\x03\x02\x02\x02\xBE\u03F2\x03\x02\x02\x02\xC0\u03FC\x03\x02\x02" +
		"\x02\xC2\u0406\x03\x02\x02\x02\xC4\u040A\x03\x02\x02\x02\xC6\u0412\x03" +
		"\x02\x02\x02\xC8\u042F\x03\x02\x02\x02\xCA\u0441\x03\x02\x02\x02\xCC\u044C" +
		"\x03\x02\x02\x02\xCE\u044E\x03\x02\x02\x02\xD0\u045C\x03\x02\x02\x02\xD2" +
		"\u048D\x03\x02\x02\x02\xD4\u048F\x03\x02\x02\x02\xD6\u0491\x03\x02\x02" +
		"\x02\xD8\u0493\x03\x02\x02\x02\xDA\u0495\x03\x02\x02\x02\xDC\u0497\x03" +
		"\x02\x02\x02\xDE\u0499\x03\x02\x02\x02\xE0\u049B\x03\x02\x02\x02\xE2\u049D" +
		"\x03\x02\x02\x02\xE4\u049F\x03\x02\x02\x02\xE6\u04A1\x03\x02\x02\x02\xE8" +
		"\u04A3\x03\x02\x02\x02\xEA\u04A5\x03\x02\x02\x02\xEC\u04A7\x03\x02\x02" +
		"\x02\xEE\u04A9\x03\x02\x02\x02\xF0\u04AB\x03\x02\x02\x02\xF2\u04AD\x03" +
		"\x02\x02\x02\xF4\u04AF\x03\x02\x02\x02\xF6\u04B1\x03\x02\x02\x02\xF8\u04B3" +
		"\x03\x02\x02\x02\xFA\u04B5\x03\x02\x02\x02\xFC\u04B7\x03\x02\x02\x02\xFE" +
		"\u04B9\x03\x02\x02\x02\u0100\u04BB\x03\x02\x02\x02\u0102\u04BD\x03\x02" +
		"\x02\x02\u0104\u04D7\x03\x02\x02\x02\u0106\u04D9\x03\x02\x02\x02\u0108" +
		"\u0503\x03\x02\x02\x02\u010A\u0505\x03\x02\x02\x02\u010C\u0508\x03\x02" +
		"\x02\x02\u010E\u050B\x03\x02\x02\x02\u0110\u051C\x03\x02\x02\x02\u0112" +
		"\u0528\x03\x02\x02\x02\u0114\u052C\x03\x02\x02\x02\u0116\u0531\x03\x02" +
		"\x02\x02\u0118\u0533\x03\x02\x02\x02\u011A\u053D\x03\x02\x02\x02\u011C" +
		"\u0550\x03\x02\x02\x02\u011E\u0560\x03\x02\x02\x02\u0120\u0567\x03\x02" +
		"\x02\x02\u0122\u0569\x03\x02\x02\x02\u0124\u056E\x03\x02\x02\x02\u0126" +
		"\u0573\x03\x02\x02\x02\u0128\u0576\x03\x02\x02\x02\u012A\u057E\x03\x02" +
		"\x02\x02\u012C\u0589\x03\x02\x02\x02\u012E\u058B\x03\x02\x02\x02\u0130" +
		"\u058F\x03\x02\x02\x02\u0132\u0594\x03\x02\x02\x02\u0134\u059D\x03\x02" +
		"\x02\x02\u0136\u05A5\x03\x02\x02\x02\u0138\u05AD\x03\x02\x02\x02\u013A" +
		"\u05B8\x03\x02\x02\x02\u013C\u05BA\x03\x02\x02\x02\u013E\u05BF\x03\x02" +
		"\x02\x02\u0140\u05C7\x03\x02\x02\x02\u0142\u05D2\x03\x02\x02\x02\u0144" +
		"\u05D7\x03\x02\x02\x02\u0146\u05E9\x03\x02\x02\x02\u0148\u05EB\x03\x02" +
		"\x02\x02\u014A";
	private static readonly _serializedATNSegment1: string =
		"\u05F3\x03\x02\x02\x02\u014C\u05FB\x03\x02\x02\x02\u014E\u0606\x03\x02" +
		"\x02\x02\u0150\u060B\x03\x02\x02\x02\u0152\u0616\x03\x02\x02\x02\u0154" +
		"\u0618\x03\x02\x02\x02\u0156\u061A\x03\x02\x02\x02\u0158\u061C\x03\x02" +
		"\x02\x02\u015A\u061E\x03\x02\x02\x02\u015C\u0620\x03\x02\x02\x02\u015E" +
		"\u0622\x03\x02\x02\x02\u0160\u0624\x03\x02\x02\x02\u0162\u0626\x03\x02" +
		"\x02\x02\u0164\u0629\x03\x02\x02\x02\u0166\u062B\x03\x02\x02\x02\u0168" +
		"\u062D\x03\x02\x02\x02\u016A\u0639\x03\x02\x02\x02\u016C\u0646\x03\x02" +
		"\x02\x02\u016E\u064D\x03\x02\x02\x02\u0170\u0654\x03\x02\x02\x02\u0172" +
		"\u065E\x03\x02\x02\x02\u0174\u0660\x03\x02\x02\x02\u0176\u0662\x03\x02" +
		"\x02\x02\u0178\u0664\x03\x02\x02\x02\u017A\u066C\x03\x02\x02\x02\u017C" +
		"\u0670\x03\x02\x02\x02\u017E\u0672\x03\x02\x02\x02\u0180\u067E\x03\x02" +
		"\x02\x02\u0182\u0680\x03\x02\x02\x02\u0184\u0682\x03\x02\x02\x02\u0186" +
		"\u0188\x05\x04\x03\x02\u0187\u0186\x03\x02\x02\x02\u0188\u0189\x03\x02" +
		"\x02\x02\u0189\u0187\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A" +
		"\u018E\x03\x02\x02\x02\u018B\u018D\x07y\x02\x02\u018C\u018B\x03\x02\x02" +
		"\x02\u018D\u0190\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018E\u018F" +
		"\x03\x02\x02\x02\u018F\x03\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02" +
		"\u0191\u0196\x05\b\x05\x02\u0192\u0196\x05\x06\x04\x02\u0193\u0196\x05" +
		"\n\x06\x02\u0194\u0196\x05\f\x07\x02\u0195\u0191\x03\x02\x02\x02\u0195" +
		"\u0192\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0194\x03\x02" +
		"\x02\x02\u0196\x05\x03\x02\x02\x02\u0197\u0199\x05\x12\n\x02\u0198\u0197" +
		"\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02" +
		"\u019A\u019B\x05 \x11\x02\u019B\x07\x03\x02\x02\x02\u019C\u019D\x05\x16" +
		"\f\x02\u019D\u019E\x05 \x11\x02\u019E\t\x03\x02\x02\x02\u019F\u01A0\x05" +
		"\x1A\x0E\x02\u01A0\u01A1\x05 \x11\x02\u01A1\v\x03\x02\x02\x02\u01A2\u01A3" +
		"\x05\x18\r\x02\u01A3\u01A4\x05 \x11\x02\u01A4\r\x03\x02\x02\x02\u01A5" +
		"\u01AA\x05&\x14\x02\u01A6\u01AA\x050\x19\x02\u01A7\u01AA\x05t;\x02\u01A8" +
		"\u01AA\x05v<\x02\u01A9\u01A5\x03\x02\x02\x02\u01A9\u01A6\x03\x02\x02\x02" +
		"\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01A8\x03\x02\x02\x02\u01AA\x0F\x03" +
		"\x02\x02\x02\u01AB\u01BE\x05\xC2b\x02\u01AC\u01BE\x05\x8EH\x02\u01AD\u01BE" +
		"\x05\x9AN\x02\u01AE\u01BE\x05\xAAV\x02\u01AF\u01BE\x05\xB6\\\x02\u01B0" +
		"\u01BE\x05\xB8]\x02\u01B1\u01BE\x05\xBA^\x02\u01B2\u01BE\x05\xBE`\x02" +
		"\u01B3\u01BE\x05\xBC_\x02\u01B4\u01BE\x05\xC0a\x02\u01B5\u01BE\x05\u010E" +
		"\x88\x02\u01B6\u01BE\x05\u010A\x86\x02\u01B7\u01BE\x05\xD0i\x02\u01B8" +
		"\u01BE\x05\u0102\x82\x02\u01B9\u01BE\x05\u010C\x87\x02\u01BA\u01BE\x05" +
		"\u0106\x84\x02\u01BB\u01BE\x05\u0126\x94\x02\u01BC\u01BE\x05\u012E\x98" +
		"\x02\u01BD\u01AB\x03\x02\x02\x02\u01BD\u01AC\x03\x02\x02\x02\u01BD\u01AD" +
		"\x03\x02\x02\x02\u01BD\u01AE\x03\x02\x02\x02\u01BD\u01AF\x03\x02\x02\x02" +
		"\u01BD\u01B0\x03\x02\x02\x02\u01BD\u01B1\x03\x02\x02\x02\u01BD\u01B2\x03" +
		"\x02\x02\x02\u01BD\u01B3\x03\x02\x02\x02\u01BD\u01B4\x03\x02\x02\x02\u01BD" +
		"\u01B5\x03\x02\x02\x02\u01BD\u01B6\x03\x02\x02\x02\u01BD\u01B7\x03\x02" +
		"\x02\x02\u01BD\u01B8\x03\x02\x02\x02\u01BD\u01B9\x03\x02\x02\x02\u01BD" +
		"\u01BA\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BC\x03\x02" +
		"\x02\x02\u01BE\x11\x03\x02\x02\x02\u01BF\u01C0\x07\x03\x02\x02\u01C0\u01C1" +
		"\x07v\x02\x02\u01C1\u01C2\x07y\x02\x02\u01C2\x13\x03\x02\x02\x02\u01C3" +
		"\u01C4\x07\x04\x02\x02\u01C4\u01C9\x07v\x02\x02\u01C5\u01C6\x07I\x02\x02" +
		"\u01C6\u01C7\x05\x1C\x0F\x02\u01C7\u01C8\x07J\x02\x02\u01C8\u01CA\x03" +
		"\x02\x02\x02\u01C9\u01C5\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA" +
		"\x15\x03\x02\x02\x02\u01CB\u01CD\x05P)\x02\u01CC\u01CB\x03\x02\x02\x02" +
		"\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01CF\x07" +
		"\x05\x02\x02\u01CF\u01D0\x07v\x02\x02\u01D0\u01D2\x07I\x02\x02\u01D1\u01D3" +
		"\x05\x1C\x0F\x02\u01D2\u01D1\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02" +
		"\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5\x07J\x02\x02\u01D5\x17\x03\x02" +
		"\x02\x02\u01D6\u01D7\x07\x06\x02\x02\u01D7\u01D8\x07v\x02\x02\u01D8\x19" +
		"\x03\x02\x02\x02\u01D9\u01DA\x07\x07\x02\x02\u01DA\u01E0\x07v\x02\x02" +
		"\u01DB\u01DD\x07I\x02\x02\u01DC\u01DE\x05\x1C\x0F\x02\u01DD\u01DC\x03" +
		"\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF" +
		"\u01E1\x07J\x02\x02\u01E0\u01DB\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02" +
		"\x02\u01E1\x1B\x03\x02\x02\x02\u01E2\u01E7\x05\u0182\xC2\x02\u01E3\u01E4" +
		"\x07H\x02\x02\u01E4\u01E6\x05\u0182\xC2\x02\u01E5\u01E3\x03\x02\x02\x02" +
		"\u01E6\u01E9\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03" +
		"\x02\x02\x02\u01E8\x1D\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA" +
		"\u01F9\x05\x14\v\x02\u01EB\u01F9\x05X-\x02\u01EC\u01F9\x05l7\x02\u01ED" +
		"\u01F9\x05B\"\x02\u01EE\u01F9\x056\x1C\x02\u01EF\u01F9\x05T+\x02\u01F0" +
		"\u01F9\x05r:\x02\u01F1\u01F9\x05\x0E\b\x02\u01F2\u01F9\x05z>\x02\u01F3" +
		"\u01F4\x05\u0122\x92\x02\u01F4\u01F5\x05\u0122\x92\x02\u01F5\u01F9\x03" +
		"\x02\x02\x02\u01F6\u01F9\x05\x10\t\x02\u01F7\u01F9\x05@!\x02\u01F8\u01EA" +
		"\x03\x02\x02\x02\u01F8\u01EB\x03\x02\x02\x02\u01F8\u01EC\x03\x02\x02\x02" +
		"\u01F8\u01ED\x03\x02\x02\x02\u01F8\u01EE\x03\x02\x02\x02\u01F8\u01EF\x03" +
		"\x02\x02\x02\u01F8\u01F0\x03\x02\x02\x02\u01F8\u01F1\x03\x02\x02\x02\u01F8" +
		"\u01F2\x03\x02\x02\x02\u01F8\u01F3\x03\x02\x02\x02\u01F8\u01F6\x03\x02" +
		"\x02\x02\u01F8\u01F7\x03\x02\x02\x02\u01F9\x1F\x03\x02\x02\x02\u01FA\u01FC" +
		"\x05\"\x12\x02\u01FB\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02" +
		"\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE\u01FF\x03" +
		"\x02\x02\x02\u01FF\u0200\x05$\x13\x02\u0200!\x03\x02\x02\x02\u0201\u0203" +
		"\x073\x02\x02\u0202\u0201\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02" +
		"\u0203\u0204\x03\x02\x02\x02\u0204\u0205\x05\x1E\x10\x02\u0205\u0206\x07" +
		"y\x02\x02\u0206#\x03\x02\x02\x02\u0207\u0209\x073\x02\x02\u0208\u0207" +
		"\x03\x02\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02" +
		"\u020A\u020B\x07\b\x02\x02\u020B%\x03\x02\x02\x02\u020C\u020D\x07\t\x02" +
		"\x02\u020D\u020E\x05*\x16\x02\u020E\'\x03\x02\x02\x02\u020F\u0210\t\x02" +
		"\x02\x02\u0210\u0211\x07I\x02\x02\u0211\u0212\x05,\x17\x02\u0212\u0213" +
		"\x07J\x02\x02\u0213)\x03\x02\x02\x02\u0214\u0219\x05(\x15\x02\u0215\u0216" +
		"\x07H\x02\x02\u0216\u0218\x05(\x15\x02\u0217\u0215\x03\x02\x02\x02\u0218" +
		"\u021B\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u0219\u021A\x03\x02" +
		"\x02\x02\u021A+\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021C\u0221" +
		"\x05.\x18\x02\u021D\u021E\x07H\x02\x02\u021E\u0220\x05.\x18\x02\u021F" +
		"\u021D\x03\x02\x02\x02\u0220\u0223\x03\x02\x02\x02\u0221\u021F\x03\x02" +
		"\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222-\x03\x02\x02\x02\u0223\u0221" +
		"\x03\x02\x02\x02\u0224\u022A\x05\u014A\xA6\x02\u0225\u0228\x07K\x02\x02" +
		"\u0226\u0229\x05\u014A\xA6\x02\u0227\u0229\x07P\x02\x02\u0228\u0226\x03" +
		"\x02\x02\x02\u0228\u0227\x03\x02\x02\x02\u0229\u022B\x03\x02\x02\x02\u022A" +
		"\u0225\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022E\x03\x02" +
		"\x02\x02\u022C\u022E\x07P\x02\x02\u022D\u0224\x03\x02\x02\x02\u022D\u022C" +
		"\x03\x02\x02\x02\u022E/\x03\x02\x02\x02\u022F\u0230\x07\v\x02\x02\u0230" +
		"\u0235\x052\x1A\x02\u0231\u0232\x07H\x02\x02\u0232\u0234\x052\x1A\x02" +
		"\u0233\u0231\x03\x02\x02\x02\u0234\u0237\x03\x02\x02\x02\u0235\u0233\x03" +
		"\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u02361\x03\x02\x02\x02\u0237" +
		"\u0235\x03\x02\x02\x02\u0238\u0239\x07I\x02\x02\u0239\u023E\x054\x1B\x02" +
		"\u023A\u023B\x07H\x02\x02\u023B\u023D\x054\x1B\x02\u023C\u023A\x03\x02" +
		"\x02\x02\u023D\u0240\x03\x02\x02\x02\u023E\u023C\x03\x02\x02\x02\u023E" +
		"\u023F\x03\x02\x02\x02\u023F\u0241\x03\x02\x02\x02\u0240\u023E\x03\x02" +
		"\x02\x02\u0241\u0242\x07J\x02\x02\u02423\x03\x02\x02\x02\u0243\u0244\x05" +
		"\u016C\xB7\x02\u02445\x03\x02\x02\x02\u0245\u024F\x07\f\x02\x02\u0246" +
		"\u024B\x05> \x02\u0247\u0248\x07H\x02\x02\u0248\u024A\x05> \x02\u0249" +
		"\u0247\x03\x02\x02\x02\u024A\u024D\x03\x02\x02\x02\u024B\u0249\x03\x02" +
		"\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u0250\x03\x02\x02\x02\u024D" +
		"\u024B\x03\x02\x02\x02\u024E\u0250\x05<\x1F\x02\u024F\u0246\x03\x02\x02" +
		"\x02\u024F\u024E\x03\x02\x02\x02\u02507\x03\x02\x02\x02\u0251\u0255\x07" +
		"O\x02\x02\u0252\u0253\x07v\x02\x02\u0253\u0256\x07O\x02\x02\u0254\u0256" +
		"\x07O\x02\x02\u0255\u0252\x03\x02\x02\x02\u0255\u0254\x03\x02\x02\x02" +
		"\u02569\x03\x02\x02\x02\u0257\u025A\x07v\x02\x02\u0258\u025A\x05(\x15" +
		"\x02\u0259\u0257\x03\x02\x02\x02\u0259\u0258\x03\x02\x02\x02\u025A;\x03" +
		"\x02\x02\x02\u025B\u0260\x05:\x1E\x02\u025C\u025D\x07H\x02\x02\u025D\u025F" +
		"\x05:\x1E\x02\u025E\u025C\x03\x02\x02\x02\u025F\u0262\x03\x02\x02\x02" +
		"\u0260\u025E\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261=\x03\x02" +
		"\x02\x02\u0262\u0260\x03\x02\x02\x02\u0263\u0264\x058\x1D\x02\u0264\u0265" +
		"\x05<\x1F\x02\u0265?\x03\x02\x02\x02\u0266\u0267\x07w\x02\x02\u0267A\x03" +
		"\x02\x02\x02\u0268\u0269\x05N(\x02\u0269\u026A\x05D#\x02\u026A\u026F\x03" +
		"\x02\x02\x02\u026B\u026C\x05h5\x02\u026C\u026D\x05H%\x02\u026D\u026F\x03" +
		"\x02\x02\x02\u026E\u0268\x03\x02\x02\x02\u026E\u026B\x03\x02\x02\x02\u026F" +
		"C\x03\x02\x02\x02\u0270\u0275\x05F$\x02\u0271\u0272\x07H\x02\x02\u0272" +
		"\u0274\x05F$\x02\u0273\u0271\x03\x02\x02\x02\u0274\u0277\x03\x02\x02\x02" +
		"\u0275\u0273\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276E\x03\x02" +
		"\x02\x02\u0277\u0275\x03\x02\x02\x02\u0278\u027B\x07v\x02\x02\u0279\u027B" +
		"\x05(\x15\x02\u027A\u0278\x03\x02\x02\x02\u027A\u0279\x03\x02\x02\x02" +
		"\u027BG\x03\x02\x02\x02\u027C\u0281\x05J&\x02\u027D\u027E\x07H\x02\x02" +
		"\u027E\u0280\x05J&\x02\u027F\u027D\x03\x02\x02\x02\u0280\u0283\x03\x02" +
		"\x02\x02\u0281\u027F\x03\x02\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282" +
		"I\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0284\u0286\x05F$\x02\u0285" +
		"\u0287\x05L\'\x02\u0286\u0285\x03\x02\x02\x02\u0286\u0287\x03\x02\x02" +
		"\x02\u0287K\x03\x02\x02\x02\u0288\u0289\x07P\x02\x02\u0289\u028A\x05f" +
		"4\x02\u028AM\x03\x02\x02\x02\u028B\u029A\x07\n\x02\x02\u028C\u0291\x07" +
		"p\x02\x02\u028D\u028F\x07P\x02\x02\u028E\u0290\x072\x02\x02\u028F\u028E" +
		"\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0292\x03\x02\x02\x02" +
		"\u0291\u028D\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292\u029A\x03" +
		"\x02\x02\x02\u0293\u0294\x07/\x02\x02\u0294\u029A\x07p\x02\x02\u0295\u0296" +
		"\x07/\x02\x02\u0296\u029A\x07q\x02\x02\u0297\u029A\x07r\x02\x02\u0298" +
		"\u029A\x07s\x02\x02\u0299\u028B\x03\x02\x02\x02\u0299\u028C\x03\x02\x02" +
		"\x02\u0299\u0293\x03\x02\x02\x02\u0299\u0295\x03\x02\x02\x02\u0299\u0297" +
		"\x03\x02\x02\x02\u0299\u0298\x03\x02\x02\x02\u029AO\x03\x02\x02\x02\u029B" +
		"\u029E\x05N(\x02\u029C\u029E\x05h5\x02\u029D\u029B\x03\x02\x02\x02\u029D" +
		"\u029C\x03\x02\x02\x02\u029EQ\x03\x02\x02\x02\u029F\u02A0\x07P\x02\x02" +
		"\u02A0\u02A1\x072\x02\x02\u02A1S\x03\x02\x02\x02\u02A2\u02A3\x07\r\x02" +
		"\x02\u02A3\u02A8\x05V,\x02\u02A4\u02A5\x07H\x02\x02\u02A5\u02A7\x05V," +
		"\x02\u02A6\u02A4\x03\x02\x02\x02\u02A7\u02AA\x03\x02\x02\x02\u02A8\u02A6" +
		"\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9U\x03\x02\x02\x02\u02AA" +
		"\u02A8\x03\x02\x02\x02\u02AB\u02AC\x07I\x02\x02\u02AC\u02AD\x07v\x02\x02" +
		"\u02AD\u02AE\x07H\x02\x02\u02AE\u02AF\x07v\x02\x02\u02AF\u02B0\x07J\x02" +
		"\x02\u02B0W\x03\x02\x02\x02\u02B1\u02B4\x07\x0E\x02\x02\u02B2\u02B5\x05" +
		"^0\x02\u02B3\u02B5\x05\\/\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B3" +
		"\x03\x02\x02\x02\u02B5Y\x03\x02\x02\x02\u02B6\u02B7\x05P)\x02\u02B7\u02B8" +
		"\x07I\x02\x02\u02B8\u02B9\x05d3\x02\u02B9\u02BA\x07J\x02\x02\u02BA[\x03" +
		"\x02\x02\x02\u02BB\u02C0\x05Z.\x02\u02BC\u02BD\x07H\x02\x02\u02BD\u02BF" +
		"\x05Z.\x02\u02BE\u02BC\x03\x02\x02\x02\u02BF\u02C2\x03\x02\x02\x02\u02C0" +
		"\u02BE\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1]\x03\x02\x02" +
		"\x02\u02C2\u02C0\x03\x02\x02\x02\u02C3\u02C4\x07\x0F\x02\x02\u02C4_\x03" +
		"\x02\x02\x02\u02C5\u02C6\x07v\x02\x02\u02C6a\x03\x02\x02\x02\u02C7\u02CA" +
		"\x05`1\x02\u02C8\u02C9\x07M\x02\x02\u02C9\u02CB\x05`1\x02\u02CA\u02C8" +
		"\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CBc\x03\x02\x02\x02\u02CC" +
		"\u02D1\x05b2\x02\u02CD\u02CE\x07H\x02\x02\u02CE\u02D0\x05b2\x02\u02CF" +
		"\u02CD\x03\x02\x02\x02\u02D0\u02D3\x03\x02\x02\x02\u02D1\u02CF\x03\x02" +
		"\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2e\x03\x02\x02\x02\u02D3\u02D1" +
		"\x03\x02\x02\x02\u02D4\u02D5\x07I\x02\x02\u02D5\u02D6\x07P\x02\x02\u02D6" +
		"\u02D7\x07J\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D9\x07I\x02\x02" +
		"\u02D9\u02DA\x07P\x02\x02\u02DA\u02E1\x07J\x02\x02\u02DB\u02E1\x072\x02" +
		"\x02\u02DC\u02DD\x07I\x02\x02\u02DD\u02DE\x05\u015E\xB0\x02\u02DE\u02DF" +
		"\x07J\x02\x02\u02DF\u02E1\x03\x02\x02\x02\u02E0\u02D4\x03\x02\x02\x02" +
		"\u02E0\u02DB\x03\x02\x02\x02\u02E0\u02DC\x03\x02\x02\x02\u02E1g\x03\x02" +
		"\x02\x02\u02E2\u02E4\x05\u0160\xB1\x02\u02E3\u02E5\x05j6\x02\u02E4\u02E3" +
		"\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5i\x03\x02\x02\x02\u02E6" +
		"\u02E7\x07P\x02\x02\u02E7\u02E8\x05f4\x02\u02E8k\x03\x02\x02\x02\u02E9" +
		"\u02EA\x07\x11\x02\x02\u02EA\u02EB\x07I\x02\x02\u02EB\u02EC\x05n8\x02" +
		"\u02EC\u02ED\x07J\x02\x02\u02EDm\x03\x02\x02\x02\u02EE\u02F3\x05p9\x02" +
		"\u02EF\u02F0\x07H\x02\x02\u02F0\u02F2\x05p9\x02\u02F1\u02EF\x03\x02\x02" +
		"\x02\u02F2\u02F5\x03\x02\x02\x02\u02F3\u02F1\x03\x02\x02\x02\u02F3\u02F4" +
		"\x03\x02\x02\x02\u02F4o\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F6" +
		"\u02F7\x07v\x02\x02\u02F7\u02F8\x07L\x02\x02\u02F8\u02F9\x05\u0154\xAB" +
		"\x02\u02F9q\x03\x02\x02\x02\u02FA\u02FB\x07\x12\x02\x02\u02FB\u02FC\x05" +
		"\x1C\x0F\x02\u02FCs\x03\x02\x02\x02\u02FD\u02FE\x07\x13\x02\x02\u02FE" +
		"\u02FF\x05\x1C\x0F\x02\u02FFu\x03\x02\x02\x02\u0300\u0309\x07\x14\x02" +
		"\x02\u0301\u0306\x05x=\x02\u0302\u0303\x07H\x02\x02\u0303\u0305\x05x=" +
		"\x02\u0304\u0302\x03\x02\x02\x02\u0305\u0308\x03\x02\x02\x02\u0306\u0304" +
		"\x03\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307\u030A\x03\x02\x02\x02" +
		"\u0308\u0306\x03\x02\x02\x02\u0309\u0301\x03\x02\x02\x02\u0309\u030A\x03" +
		"\x02\x02\x02\u030Aw\x03\x02\x02\x02\u030B\u0310\x07v\x02\x02\u030C\u030D" +
		"\x07O\x02\x02\u030D\u030E\x07v\x02\x02\u030E\u0310\x07O\x02\x02\u030F" +
		"\u030B\x03\x02\x02\x02\u030F\u030C\x03\x02\x02\x02\u0310y\x03\x02\x02" +
		"\x02\u0311\u0312\x07\x15\x02\x02\u0312\u0319\x05\x80A\x02\u0313\u0315" +
		"\x07H\x02\x02\u0314\u0313\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02" +
		"\u0315\u0316\x03\x02\x02\x02\u0316\u0318\x05\x80A\x02\u0317\u0314\x03" +
		"\x02\x02\x02\u0318\u031B\x03\x02\x02\x02\u0319\u0317\x03\x02\x02\x02\u0319" +
		"\u031A\x03\x02\x02\x02\u031A{\x03\x02\x02\x02\u031B\u0319\x03\x02\x02" +
		"\x02\u031C\u031F\x05\u016C\xB7\x02\u031D\u031F\x05\x86D\x02\u031E\u031C" +
		"\x03\x02\x02\x02\u031E\u031D\x03\x02\x02\x02\u031F}\x03\x02\x02\x02\u0320" +
		"\u0321\t\x03\x02\x02\u0321\u0323\x07P\x02\x02\u0322\u0320\x03\x02\x02" +
		"\x02\u0322\u0323\x03\x02\x02\x02\u0323\u0326\x03\x02\x02\x02\u0324\u0327" +
		"\x05\u017A\xBE\x02\u0325\u0327\x07v\x02\x02\u0326\u0324\x03\x02\x02\x02" +
		"\u0326\u0325\x03\x02\x02\x02\u0327\x7F\x03\x02\x02\x02\u0328\u0329\x05" +
		"\x82B\x02\u0329\u032A\x05\x84C\x02\u032A\x81\x03\x02\x02\x02\u032B\u0330" +
		"\x05|?\x02\u032C\u032D\x07H\x02\x02\u032D\u032F\x05|?\x02\u032E\u032C" +
		"\x03\x02\x02\x02\u032F\u0332\x03\x02\x02\x02\u0330\u032E\x03\x02\x02\x02" +
		"\u0330\u0331\x03\x02\x02\x02\u0331\u0333\x03\x02\x02\x02\u0332\u0330\x03" +
		"\x02\x02\x02\u0333\u0334\x07O\x02\x02\u0334\x83\x03\x02\x02\x02\u0335" +
		"\u033A\x05~@\x02\u0336\u0337\x07H\x02\x02\u0337\u0339\x05~@\x02\u0338" +
		"\u0336\x03\x02\x02\x02\u0339\u033C\x03\x02\x02\x02\u033A\u0338\x03\x02" +
		"\x02\x02\u033A\u033B\x03\x02\x02\x02\u033B\u033D\x03\x02\x02\x02\u033C" +
		"\u033A\x03\x02\x02\x02\u033D\u033E\x07O\x02\x02\u033E\x85\x03\x02\x02" +
		"\x02\u033F\u0340\x07I\x02\x02\u0340\u0341\x05\x8AF\x02\u0341\u0342\x07" +
		"H\x02\x02\u0342\u0343\x05\x88E\x02\u0343\u0344\x07J\x02\x02\u0344\x87" +
		"\x03\x02\x02\x02\u0345\u0346\x07v\x02\x02\u0346\u0347\x07L\x02\x02\u0347" +
		"\u0348\x05\u015E\xB0\x02\u0348\u0349\x07H\x02\x02\u0349\u034C\x05\u015E" +
		"\xB0\x02\u034A\u034B\x07H\x02\x02\u034B\u034D\x05\u015E\xB0\x02\u034C" +
		"\u034A\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\x89\x03\x02\x02" +
		"\x02\u034E\u0352\x05\x8CG\x02\u034F\u0350\x07H\x02\x02\u0350\u0352\x05" +
		"\x8AF\x02\u0351\u034E\x03\x02\x02\x02\u0351\u034F\x03\x02\x02\x02\u0352" +
		"\x8B\x03\x02\x02\x02\u0353\u0356\x05\u016C\xB7\x02\u0354\u0356\x05\x86" +
		"D\x02\u0355\u0353\x03\x02\x02\x02\u0355\u0354\x03\x02\x02\x02\u0356\x8D" +
		"\x03\x02\x02\x02\u0357\u0358\t\x04\x02\x02\u0358\u0359\x05\u0184\xC3\x02" +
		"\u0359\u035D\x03\x02\x02\x02\u035A\u035E\x05\x90I\x02\u035B\u035E\x05" +
		"\x92J\x02\u035C\u035E\x05\x98M\x02\u035D\u035A\x03\x02\x02\x02\u035D\u035B" +
		"\x03\x02\x02\x02\u035D\u035C\x03\x02\x02\x02\u035E\x8F\x03\x02\x02\x02" +
		"\u035F\u0360\x05\x94K\x02\u0360\x91\x03\x02\x02\x02\u0361\u0362\x07I\x02" +
		"\x02\u0362\u0363\x05\x96L\x02\u0363\u0365\x07J\x02\x02\u0364\u0366\x07" +
		"H\x02\x02\u0365\u0364\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366" +
		"\u0367\x03\x02\x02\x02\u0367\u0368\x05\u0158\xAD\x02\u0368\x93\x03\x02" +
		"\x02\x02\u0369\u036A\x072\x02\x02\u036A\x95\x03\x02\x02\x02\u036B\u0370" +
		"\x05\x94K\x02\u036C\u036D\x07H\x02\x02\u036D\u036F\x05\x94K\x02\u036E" +
		"\u036C\x03\x02\x02\x02\u036F\u0372\x03\x02\x02\x02\u0370\u036E\x03\x02" +
		"\x02\x02\u0370\u0371\x03\x02\x02\x02\u0371\x97\x03\x02\x02\x02\u0372\u0370" +
		"\x03\x02\x02\x02\u0373\u037B\x07v\x02\x02\u0374\u0376\x07H\x02\x02\u0375" +
		"\u0374\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\u0377\x03\x02" +
		"\x02\x02\u0377\u0378\x07I\x02\x02\u0378\u0379\x05\x96L\x02\u0379\u037A" +
		"\x07J\x02\x02\u037A\u037C\x03\x02\x02\x02\u037B\u0375\x03\x02\x02\x02" +
		"\u037B\u037C\x03\x02\x02\x02\u037C\x99\x03\x02\x02\x02\u037D\u037E\x07" +
		"\x18\x02\x02\u037E\u037F\x07I\x02\x02\u037F\u0380\x05\u0164\xB3\x02\u0380" +
		"\u0384\x07J\x02\x02\u0381\u0385\x05\xA0Q\x02\u0382\u0385\x05\x9EP\x02" +
		"\u0383\u0385\x05\x9CO\x02\u0384\u0381\x03\x02\x02\x02\u0384\u0382\x03" +
		"\x02\x02\x02\u0384\u0383\x03\x02\x02\x02\u0385\x9B\x03\x02\x02\x02\u0386" +
		"\u0387\x05\x94K\x02\u0387\u0388\x07H\x02\x02\u0388\u0389\x05\x94K\x02" +
		"\u0389\u038A\x07H\x02\x02\u038A\u038B\x05\x94K\x02\u038B\x9D\x03\x02\x02" +
		"\x02\u038C\u038D\x05\x10\t\x02\u038D\x9F\x03\x02\x02\x02\u038E\u0392\x05" +
		"\xA2R\x02\u038F\u0391\x05\xA4S\x02\u0390\u038F\x03\x02\x02\x02\u0391\u0394" +
		"\x03\x02\x02\x02\u0392\u0390\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02" +
		"\u0393\u0396\x03\x02\x02\x02\u0394\u0392\x03\x02\x02\x02\u0395\u0397\x05" +
		"\xA6T\x02\u0396\u0395\x03\x02\x02\x02\u0396\u0397\x03\x02\x02\x02\u0397" +
		"\u0398\x03\x02\x02\x02\u0398\u0399\x05\xA8U\x02\u0399\xA1\x03\x02\x02" +
		"\x02\u039A\u039C\x07\x19\x02\x02\u039B\u039D\x05\"\x12\x02\u039C\u039B" +
		"\x03\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\u039C\x03\x02\x02\x02" +
		"\u039E\u039F\x03\x02\x02\x02\u039F\xA3\x03\x02\x02\x02\u03A0\u03A4\x07" +
		"\x1C\x02\x02\u03A1\u03A2\x07\x1A\x02\x02\u03A2\u03A4\x07\x18\x02\x02\u03A3" +
		"\u03A0\x03\x02\x02\x02\u03A3\u03A1\x03\x02\x02\x02\u03A4\u03A5\x03\x02" +
		"\x02\x02\u03A5\u03A6\x07I\x02\x02\u03A6\u03A7\x05\u0164\xB3\x02\u03A7" +
		"\u03A8\x07J\x02\x02\u03A8\u03AA\x07\x19\x02\x02\u03A9\u03AB\x05\"\x12" +
		"\x02\u03AA\u03A9\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC\u03AA" +
		"\x03\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02\u03AD\xA5\x03\x02\x02\x02" +
		"\u03AE\u03B0\x07\x1A\x02\x02\u03AF\u03B1\x05\"\x12\x02\u03B0\u03AF\x03" +
		"\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B0\x03\x02\x02\x02\u03B2" +
		"\u03B3\x03\x02\x02\x02\u03B3\xA7\x03\x02\x02\x02\u03B4\u03B8\x07\x1B\x02" +
		"\x02\u03B5\u03B6\x07\b\x02\x02\u03B6\u03B8\x07\x18\x02\x02\u03B7\u03B4" +
		"\x03\x02\x02\x02\u03B7\u03B5\x03\x02\x02\x02\u03B8\xA9\x03\x02\x02\x02" +
		"\u03B9\u03BC\x07\x1D\x02\x02\u03BA\u03BD\x05\xAEX\x02\u03BB\u03BD\x05" +
		"\xB2Z\x02\u03BC\u03BA\x03\x02\x02\x02\u03BC\u03BB\x03\x02\x02\x02\u03BD" +
		"\xAB\x03\x02\x02\x02\u03BE\u03BF\x05\u0172\xBA\x02\u03BF\u03C0\x07L\x02" +
		"\x02\u03C0\u03C1\x05\u015A\xAE\x02\u03C1\u03C2\x07H\x02\x02\u03C2\u03C5" +
		"\x05\u015A\xAE\x02\u03C3\u03C4\x07H\x02\x02\u03C4\u03C6\x05\u015A\xAE" +
		"\x02\u03C5\u03C3\x03\x02\x02\x02\u03C5\u03C6\x03\x02\x02\x02\u03C6\xAD" +
		"\x03\x02\x02\x02\u03C7\u03C9\x05\x94K\x02\u03C8\u03CA\x07H\x02\x02\u03C9" +
		"\u03C8\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03CB\x03\x02" +
		"\x02\x02\u03CB\u03CC\x05\xACW\x02\u03CC\xAF\x03\x02\x02\x02\u03CD\u03CF" +
		"\x05\"\x12\x02\u03CE\u03CD\x03\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02" +
		"\u03D0\u03CE\x03\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1\xB1\x03" +
		"\x02\x02\x02\u03D2\u03D3\x05\xACW\x02\u03D3\u03D4\x05\xB0Y\x02\u03D4\u03D5" +
		"\x05\xB4[\x02\u03D5\xB3\x03\x02\x02\x02\u03D6\u03DA\x07 \x02\x02\u03D7" +
		"\u03D8\x07\b\x02\x02\u03D8\u03DA\x07\x1D\x02\x02\u03D9\u03D6\x03\x02\x02" +
		"\x02\u03D9\u03D7\x03\x02\x02\x02\u03DA\xB5\x03\x02\x02\x02\u03DB\u03DC" +
		"\x07\x1E\x02\x02\u03DC\xB7\x03\x02\x02\x02\u03DD\u03DF\x07\x1F\x02\x02" +
		"\u03DE\u03E0\t\x05\x02\x02\u03DF\u03DE\x03\x02\x02\x02\u03DF\u03E0\x03" +
		"\x02\x02\x02\u03E0\xB9\x03\x02\x02\x02\u03E1\u03E2\x07!\x02\x02\u03E2" +
		"\u03E3\t\x05\x02\x02\u03E3\xBB\x03\x02\x02\x02\u03E4\u03E5\x07\"\x02\x02" +
		"\u03E5\u03E6\x07I\x02\x02\u03E6\u03E7\x05\xC4c\x02\u03E7\u03F0\x07J\x02" +
		"\x02\u03E8\u03EA\x07H\x02\x02\u03E9\u03E8\x03\x02\x02\x02\u03E9\u03EA" +
		"\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB\u03ED\x05\xCAf\x02" +
		"\u03EC\u03E9\x03\x02\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03EC\x03" +
		"\x02\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03F1\x03\x02\x02\x02\u03F0" +
		"\u03EC\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\xBD\x03\x02\x02" +
		"\x02\u03F2\u03F3\x07#\x02\x02\u03F3\u03FA\x05\u0116\x8C\x02\u03F4\u03F5" +
		"\x07H\x02\x02\u03F5\u03F7\x05\xCAf\x02\u03F6\u03F4\x03\x02\x02\x02\u03F7" +
		"\u03F8\x03\x02\x02\x02\u03F8\u03F6\x03\x02\x02\x02\u03F8\u03F9\x03\x02" +
		"\x02\x02\u03F9\u03FB\x03\x02\x02\x02\u03FA\u03F6\x03\x02\x02\x02\u03FA" +
		"\u03FB\x03\x02\x02\x02\u03FB\xBF\x03\x02\x02\x02\u03FC\u03FD\x07$\x02" +
		"\x02\u03FD\u0404\x05\u0116\x8C\x02\u03FE\u03FF\x07H\x02\x02\u03FF\u0401" +
		"\x05\xCAf\x02\u0400\u03FE\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02" +
		"\u0402\u0400\x03\x02\x02\x02\u0402\u0403\x03\x02\x02\x02\u0403\u0405\x03" +
		"\x02\x02\x02\u0404\u0400\x03\x02\x02\x02\u0404\u0405\x03\x02\x02\x02\u0405" +
		"\xC1\x03\x02\x02\x02\u0406\u0407\x05\u016C\xB7\x02\u0407\u0408\x07L\x02" +
		"\x02\u0408\u0409\x05\u0130\x99\x02\u0409\xC3\x03\x02\x02\x02\u040A\u040F" +
		"\x05\xC8e\x02\u040B\u040C\x07H\x02\x02\u040C\u040E\x05\xC8e\x02\u040D" +
		"\u040B\x03\x02\x02\x02\u040E\u0411\x03\x02\x02\x02\u040F\u040D\x03\x02" +
		"\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\xC5\x03\x02\x02\x02\u0411\u040F" +
		"\x03\x02\x02\x02\u0412\u0413\x05\xDCo\x02\u0413\u0416\x07L\x02\x02\u0414" +
		"\u0417\x05\x94K\x02\u0415\u0417\x07v\x02\x02\u0416\u0414\x03\x02\x02\x02" +
		"\u0416\u0415\x03\x02\x02\x02\u0417\xC7\x03\x02\x02\x02\u0418\u0430\x05" +
		"\u0114\x8B\x02\u0419\u0430\t\x06\x02\x02\u041A\u041B\x05\xD4k\x02\u041B" +
		"\u041C\x07L\x02\x02\u041C\u041D\x05\u0116\x8C\x02\u041D\u0430\x03\x02" +
		"\x02\x02\u041E\u041F\x05\xD6l\x02\u041F\u0420\x07L\x02\x02\u0420\u0421" +
		"\x05\u0114\x8B\x02\u0421\u0430\x03\x02\x02\x02\u0422\u0423\x05\xD8m\x02" +
		"\u0423\u0424\x07L\x02\x02\u0424\u0425\x05\u0158\xAD\x02\u0425\u0430\x03" +
		"\x02\x02\x02\u0426\u0427\x05\xDAn\x02\u0427\u0428\x07L\x02\x02\u0428\u0429" +
		"\x05\x94K\x02\u0429\u0430\x03\x02\x02\x02\u042A\u0430\x05\xC6d\x02\u042B" +
		"\u042C\x05\xDEp\x02\u042C\u042D\x07L\x02\x02\u042D\u042E\x05\u016C\xB7" +
		"\x02\u042E\u0430\x03";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\x02\u042F\u0418\x03\x02\x02\x02\u042F\u0419\x03\x02\x02\x02\u042F" +
		"\u041A\x03\x02\x02\x02\u042F\u041E\x03\x02\x02\x02\u042F\u0422\x03\x02" +
		"\x02\x02\u042F\u0426\x03\x02\x02\x02\u042F\u042A\x03\x02\x02\x02\u042F" +
		"\u042B\x03\x02\x02\x02\u0430\xC9\x03\x02\x02\x02\u0431\u0432\x05\xCCg" +
		"\x02\u0432\u0433\x07H\x02\x02\u0433\u0434\x07v\x02\x02\u0434\u0435\x07" +
		"L\x02\x02\u0435\u0436\x03\x02\x02\x02\u0436\u0437\x05\xCCg\x02\u0437\u0442" +
		"\x03\x02\x02\x02\u0438\u0439\x05\xCCg\x02\u0439\u043A\x07H\x02\x02\u043A" +
		"\u043B\x05\xCCg\x02\u043B\u043C\x03\x02\x02\x02\u043C\u043D\x05\xCCg\x02" +
		"\u043D\u043E\x07H\x02\x02\u043E\u043F\x05\xCAf\x02\u043F\u0442\x03\x02" +
		"\x02\x02\u0440\u0442\x05\xCCg\x02\u0441\u0431\x03\x02\x02\x02\u0441\u0438" +
		"\x03\x02\x02\x02\u0441\u0440\x03\x02\x02\x02\u0442\xCB\x03\x02\x02\x02" +
		"\u0443\u0444\x07I\x02\x02\u0444\u0445\x05\xCAf\x02\u0445\u0446\x07H\x02" +
		"\x02\u0446\u0447\x07v\x02\x02\u0447\u0448\x07L\x02\x02\u0448\u0449\x03" +
		"\x02\x02\x02\u0449\u044A\x05\xCEh\x02\u044A\u044D\x03\x02\x02\x02\u044B" +
		"\u044D\x05\u0130\x99\x02\u044C\u0443\x03\x02\x02\x02\u044C\u044B\x03\x02" +
		"\x02\x02\u044D\xCD\x03\x02\x02\x02\u044E\u044F\x07I\x02\x02\u044F\u0450" +
		"\x05\xCAf\x02\u0450\u0451\x07H\x02\x02\u0451\u0452\x07v\x02\x02\u0452" +
		"\u0453\x07L\x02\x02\u0453\u0454\x05\u015A\xAE\x02\u0454\u0455\x07H\x02" +
		"\x02\u0455\u0458\x05\u015A\xAE\x02\u0456\u0457\x07H\x02\x02\u0457\u0459" +
		"\x05\u015A\xAE\x02\u0458\u0456\x03\x02\x02\x02\u0458\u0459\x03\x02\x02" +
		"\x02\u0459\u045A\x03\x02\x02\x02\u045A\u045B\x07J\x02\x02\u045B\xCF\x03" +
		"\x02\x02\x02\u045C\u045D\x07%\x02\x02\u045D\u045E\x07I\x02\x02\u045E\u0463" +
		"\x05\xD2j\x02\u045F\u0460\x07H\x02\x02\u0460\u0462\x05\xD2j\x02\u0461" +
		"\u045F\x03\x02\x02\x02\u0462\u0465\x03\x02\x02\x02\u0463\u0461\x03\x02" +
		"\x02\x02\u0463\u0464\x03\x02\x02\x02\u0464\u0466\x03\x02\x02\x02\u0465" +
		"\u0463\x03\x02\x02\x02\u0466\u0467\x07J\x02\x02\u0467\xD1\x03\x02\x02" +
		"\x02\u0468\u048E\x05\u0114\x8B\x02\u0469\u046A\x05\xD6l\x02\u046A\u046B" +
		"\x07L\x02\x02\u046B\u046C\x05\u0114\x8B\x02\u046C\u048E\x03\x02\x02\x02" +
		"\u046D\u048E\x05\xC6d\x02\u046E\u046F\x05\xE0q\x02\u046F\u0470\x07L\x02" +
		"\x02\u0470\u0471\x05\u0160\xB1\x02\u0471\u048E\x03\x02\x02\x02\u0472\u0473" +
		"\x05\xE2r\x02\u0473\u0474\x07L\x02\x02\u0474\u0475\x05\u0160\xB1\x02\u0475" +
		"\u048E\x03\x02\x02\x02\u0476\u0479\x05\xE4s\x02\u0477\u0479\x05\xE6t\x02" +
		"\u0478\u0476\x03\x02\x02\x02\u0478\u0477\x03\x02\x02\x02\u0479\u047A\x03" +
		"\x02\x02\x02\u047A\u047B\x07L\x02\x02\u047B\u047C\x05\u0160\xB1\x02\u047C" +
		"\u048E\x03\x02\x02\x02\u047D\u047E\x05\xE8u\x02\u047E\u047F\x07L\x02\x02" +
		"\u047F\u0480\x05\u0160\xB1\x02\u0480\u048E\x03\x02\x02\x02\u0481\u0482" +
		"\x05\xEAv\x02\u0482\u0483\x07L\x02\x02\u0483\u0484\x05\u0158\xAD\x02\u0484" +
		"\u048E\x03\x02\x02\x02\u0485\u0486\x05\xECw\x02\u0486\u0487\x07L\x02\x02" +
		"\u0487\u0488\x05\u0160\xB1\x02\u0488\u048E\x03\x02\x02\x02\u0489\u048A" +
		"\x05\xDEp\x02\u048A\u048B\x07L\x02\x02\u048B\u048C\x05\u016C\xB7\x02\u048C" +
		"\u048E\x03\x02\x02\x02\u048D\u0468\x03\x02\x02\x02\u048D\u0469\x03\x02" +
		"\x02\x02\u048D\u046D\x03\x02\x02\x02\u048D\u046E\x03\x02\x02\x02\u048D" +
		"\u0472\x03\x02\x02\x02\u048D\u0478\x03\x02\x02\x02\u048D\u047D\x03\x02" +
		"\x02\x02\u048D\u0481\x03\x02\x02\x02\u048D\u0485\x03\x02\x02\x02\u048D" +
		"\u0489\x03\x02\x02\x02\u048E\xD3\x03\x02\x02\x02\u048F\u0490\x07&\x02" +
		"\x02\u0490\xD5\x03\x02\x02\x02\u0491\u0492\x07\'\x02\x02\u0492\xD7\x03" +
		"\x02\x02\x02\u0493\u0494\x07v\x02\x02\u0494\xD9\x03\x02\x02\x02\u0495" +
		"\u0496\x07\b\x02\x02\u0496\xDB\x03\x02\x02\x02\u0497\u0498\x07(\x02\x02" +
		"\u0498\xDD\x03\x02\x02\x02\u0499\u049A\x070\x02\x02\u049A\xDF\x03\x02" +
		"\x02\x02\u049B\u049C\x074\x02\x02\u049C\xE1\x03\x02\x02\x02\u049D\u049E" +
		"\x075\x02\x02\u049E\xE3\x03\x02\x02\x02\u049F\u04A0\x076\x02\x02\u04A0" +
		"\xE5\x03\x02\x02\x02\u04A1\u04A2\x077\x02\x02\u04A2\xE7\x03\x02\x02\x02" +
		"\u04A3\u04A4\x078\x02\x02\u04A4\xE9\x03\x02\x02\x02\u04A5\u04A6\x079\x02" +
		"\x02\u04A6\xEB\x03\x02\x02\x02\u04A7\u04A8\x07:\x02\x02\u04A8\xED\x03" +
		"\x02\x02\x02\u04A9\u04AA\x07;\x02\x02\u04AA\xEF\x03\x02\x02\x02\u04AB" +
		"\u04AC\x07<\x02\x02\u04AC\xF1\x03\x02\x02\x02\u04AD\u04AE\x07=\x02\x02" +
		"\u04AE\xF3\x03\x02\x02\x02\u04AF\u04B0\x07>\x02\x02\u04B0\xF5\x03\x02" +
		"\x02\x02\u04B1\u04B2\x07v\x02\x02\u04B2\xF7\x03\x02\x02\x02\u04B3\u04B4" +
		"\x071\x02\x02\u04B4\xF9\x03\x02\x02\x02\u04B5\u04B6\x07v\x02\x02\u04B6" +
		"\xFB\x03\x02\x02\x02\u04B7\u04B8\x07@\x02\x02\u04B8\xFD\x03\x02\x02\x02" +
		"\u04B9\u04BA\x07A\x02\x02\u04BA\xFF\x03\x02\x02\x02\u04BB\u04BC\x07B\x02" +
		"\x02\u04BC\u0101\x03\x02\x02\x02\u04BD\u04BE\x07.\x02\x02\u04BE\u04BF" +
		"\x07I\x02\x02\u04BF\u04C4\x05\u0104\x83\x02\u04C0\u04C1\x07H\x02\x02\u04C1" +
		"\u04C3\x05\u0104\x83\x02\u04C2\u04C0\x03\x02\x02\x02\u04C3\u04C6\x03\x02" +
		"\x02\x02\u04C4\u04C2\x03\x02\x02\x02\u04C4\u04C5\x03\x02\x02\x02\u04C5" +
		"\u04C7\x03\x02\x02\x02\u04C6\u04C4\x03\x02\x02\x02\u04C7\u04C8\x07J\x02" +
		"\x02\u04C8\u0103\x03\x02\x02\x02\u04C9\u04D8\x05\u0114\x8B\x02\u04CA\u04CB" +
		"\x05\xD6l\x02\u04CB\u04CC\x07L\x02\x02\u04CC\u04CD\x05\u0114\x8B\x02\u04CD" +
		"\u04D8\x03\x02\x02\x02\u04CE\u04D8\x05\xC6d\x02\u04CF\u04D0\x05\xE2r\x02" +
		"\u04D0\u04D1\x07L\x02\x02\u04D1\u04D2\x05\u0160\xB1\x02\u04D2\u04D8\x03" +
		"\x02\x02\x02\u04D3\u04D4\x05\xDEp\x02\u04D4\u04D5\x07L\x02\x02\u04D5\u04D6" +
		"\x05\u016C\xB7\x02\u04D6\u04D8\x03\x02\x02\x02\u04D7\u04C9\x03\x02\x02" +
		"\x02\u04D7\u04CA\x03\x02\x02\x02\u04D7\u04CE\x03\x02\x02\x02\u04D7\u04CF" +
		"\x03\x02\x02\x02\u04D7\u04D3\x03\x02\x02\x02\u04D8\u0105\x03\x02\x02\x02" +
		"\u04D9\u04DA\x07C\x02\x02\u04DA\u04DB\x07I\x02\x02\u04DB\u04E0\x05\u0108" +
		"\x85\x02\u04DC\u04DD\x07H\x02\x02\u04DD\u04DF\x05\u0108\x85\x02\u04DE" +
		"\u04DC\x03\x02\x02\x02\u04DF\u04E2\x03\x02\x02\x02\u04E0\u04DE\x03\x02" +
		"\x02\x02\u04E0\u04E1\x03\x02\x02\x02\u04E1\u04E3\x03\x02\x02\x02\u04E2" +
		"\u04E0\x03\x02\x02\x02\u04E3\u04E4\x07J\x02\x02\u04E4\u0107\x03\x02\x02" +
		"\x02\u04E5\u04E6\x05\xD6l\x02\u04E6\u04E7\x07L\x02\x02\u04E7\u04E8\x05" +
		"\u0114\x8B\x02\u04E8\u0504\x03\x02\x02\x02\u04E9\u04EA\x05\xE0q\x02\u04EA" +
		"\u04EB\x07L\x02\x02\u04EB\u04EC\x05\u0160\xB1\x02\u04EC\u0504\x03\x02" +
		"\x02\x02\u04ED\u0504\x05\xC6d\x02\u04EE\u04FE\x05\xDEp\x02\u04EF\u04FE" +
		"\x05\xEEx\x02\u04F0\u04FE\x05\xF0y\x02\u04F1\u04FE\x05\xF2z\x02\u04F2" +
		"\u04FE\x05\xF4{\x02\u04F3\u04FE\x05\xF6|\x02\u04F4\u04FE\x05\xE4s\x02" +
		"\u04F5\u04FE\x05\xF8}\x02\u04F6\u04FE\x05\xFA~\x02\u04F7\u04FE\x05\xE8" +
		"u\x02\u04F8\u04FE\x05\xFC\x7F\x02\u04F9\u04FE\x05\xFE\x80\x02\u04FA\u04FE" +
		"\x05\xEAv\x02\u04FB\u04FE\x05\u0100\x81\x02\u04FC\u04FE\x05\xECw\x02\u04FD" +
		"\u04EE\x03\x02\x02\x02\u04FD\u04EF\x03\x02\x02\x02\u04FD\u04F0\x03\x02" +
		"\x02\x02\u04FD\u04F1\x03\x02\x02\x02\u04FD\u04F2\x03\x02\x02\x02\u04FD" +
		"\u04F3\x03\x02\x02\x02\u04FD\u04F4\x03\x02\x02\x02\u04FD\u04F5\x03\x02" +
		"\x02\x02\u04FD\u04F6\x03\x02\x02\x02\u04FD\u04F7\x03\x02\x02\x02\u04FD" +
		"\u04F8\x03\x02\x02\x02\u04FD\u04F9\x03\x02\x02\x02\u04FD\u04FA\x03\x02" +
		"\x02\x02\u04FD\u04FB\x03\x02\x02\x02\u04FD\u04FC\x03\x02\x02\x02\u04FE" +
		"\u04FF\x03\x02\x02\x02\u04FF\u0500\x07L\x02\x02\u0500\u0501\x05\u016C" +
		"\xB7\x02\u0501\u0504\x03\x02\x02\x02\u0502\u0504\x05\u0114\x8B\x02\u0503" +
		"\u04E5\x03\x02\x02\x02\u0503\u04E9\x03\x02\x02\x02\u0503\u04ED\x03\x02" +
		"\x02\x02\u0503\u04FD\x03\x02\x02\x02\u0503\u0502\x03\x02\x02\x02\u0504" +
		"\u0109\x03\x02\x02\x02\u0505\u0506\x07D\x02\x02\u0506\u0507\x05\u0110" +
		"\x89\x02\u0507\u010B\x03\x02\x02\x02\u0508\u0509\x07E\x02\x02\u0509\u050A" +
		"\x05\u0110\x89\x02\u050A\u010D\x03\x02\x02\x02\u050B\u050C\x07F\x02\x02" +
		"\u050C\u050D\x05\u0110\x89\x02\u050D\u010F\x03\x02\x02\x02\u050E\u050F" +
		"\x05\u0114\x8B\x02\u050F\u0510\x05\u0114\x8B\x02\u0510\u051D\x03\x02\x02" +
		"\x02\u0511\u0512\x07I\x02\x02\u0512\u0517\x05\u0112\x8A\x02\u0513\u0514" +
		"\x07H\x02\x02\u0514\u0516\x05\u0112\x8A\x02\u0515\u0513\x03\x02\x02\x02" +
		"\u0516\u0519\x03\x02\x02\x02\u0517\u0515\x03\x02\x02\x02\u0517\u0518\x03" +
		"\x02\x02\x02\u0518\u051A\x03\x02\x02\x02\u0519\u0517\x03\x02\x02\x02\u051A" +
		"\u051B\x07J\x02\x02\u051B\u051D\x03\x02\x02\x02\u051C\u050E\x03\x02\x02" +
		"\x02\u051C\u0511\x03\x02\x02\x02\u051D\u0111\x03\x02\x02\x02\u051E\u0529" +
		"\x05\u0114\x8B\x02\u051F\u0520\x05\xD6l\x02\u0520\u0521\x07L\x02\x02\u0521" +
		"\u0522\x05\u0114\x8B\x02\u0522\u0529\x03\x02\x02\x02\u0523\u0529\x05\xC6" +
		"d\x02\u0524\u0525\x05\xDEp\x02\u0525\u0526\x07L\x02\x02\u0526\u0527\x05" +
		"\u016C\xB7\x02\u0527\u0529\x03\x02\x02\x02\u0528\u051E\x03\x02\x02\x02" +
		"\u0528\u051F\x03\x02\x02\x02\u0528\u0523\x03\x02\x02\x02\u0528\u0524\x03" +
		"\x02\x02\x02\u0529\u0113\x03\x02\x02\x02\u052A\u052D\x05\u0148\xA5\x02" +
		"\u052B\u052D\x07P\x02\x02\u052C\u052A\x03\x02\x02\x02\u052C\u052B\x03" +
		"\x02\x02\x02\u052D\u0115\x03\x02\x02\x02\u052E\u0532\t\x06\x02\x02\u052F" +
		"\u0532\x05\u0148\xA5\x02\u0530\u0532\x07P\x02\x02\u0531\u052E\x03\x02" +
		"\x02\x02\u0531\u052F\x03\x02\x02\x02\u0531\u0530\x03\x02\x02\x02\u0532" +
		"\u0117\x03\x02\x02\x02\u0533\u0534\x07*\x02\x02\u0534\u0535\x07I\x02\x02" +
		"\u0535\u0536\x05\u011A\x8E\x02\u0536\u0537\x07J\x02\x02\u0537\u0119\x03" +
		"\x02\x02\x02\u0538\u053E\x05\u011E\x90\x02\u0539\u053B\x05\u011C\x8F\x02" +
		"\u053A\u053C\x05\u011E\x90\x02\u053B\u053A\x03\x02\x02\x02\u053B\u053C" +
		"\x03\x02\x02\x02\u053C\u053E\x03\x02\x02\x02\u053D\u0538\x03\x02\x02\x02" +
		"\u053D\u0539\x03\x02\x02\x02\u053E\u054D\x03\x02\x02\x02\u053F\u0541\x05" +
		"\u011C\x8F\x02\u0540\u0542\x05\u011E\x90\x02\u0541\u0540\x03\x02\x02\x02" +
		"\u0541\u0542\x03\x02\x02\x02\u0542\u054C\x03\x02\x02\x02\u0543\u0549\x07" +
		"H\x02\x02\u0544\u054A\x05\u011E\x90\x02\u0545\u0547\x05\u011C\x8F\x02" +
		"\u0546\u0548\x05\u011E\x90\x02\u0547\u0546\x03\x02\x02\x02\u0547\u0548" +
		"\x03\x02\x02\x02\u0548\u054A\x03\x02\x02\x02\u0549\u0544\x03\x02\x02\x02" +
		"\u0549\u0545\x03\x02\x02\x02\u054A\u054C\x03\x02\x02\x02\u054B\u053F\x03" +
		"\x02\x02\x02\u054B\u0543\x03\x02\x02\x02\u054C\u054F\x03\x02\x02\x02\u054D" +
		"\u054B\x03\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E\u011B\x03\x02" +
		"\x02\x02\u054F\u054D\x03\x02\x02\x02\u0550\u0551\t\x07\x02\x02\u0551\u011D" +
		"\x03\x02\x02\x02\u0552\u0561\x07a\x02\x02\u0553\u0561\x05\u0120\x91\x02" +
		"\u0554\u0555\x072\x02\x02\u0555\u0561\x05\u0120\x91\x02\u0556\u0558\t" +
		"\b\x02\x02\u0557\u0556\x03\x02\x02\x02\u0557\u0558\x03\x02\x02\x02\u0558" +
		"\u0559\x03\x02\x02\x02\u0559\u055E\x07b\x02\x02\u055A\u055C\x072\x02\x02" +
		"\u055B\u055A\x03\x02\x02\x02\u055B\u055C\x03\x02\x02\x02\u055C\u055D\x03" +
		"\x02\x02\x02\u055D\u055F\x05\u0120\x91\x02\u055E\u055B\x03\x02\x02\x02" +
		"\u055E\u055F\x03\x02\x02\x02\u055F\u0561\x03\x02\x02\x02\u0560\u0552\x03" +
		"\x02\x02\x02\u0560\u0553\x03\x02\x02\x02\u0560\u0554\x03\x02\x02\x02\u0560" +
		"\u0557\x03\x02\x02\x02\u0561\u011F\x03\x02\x02\x02\u0562\u0568\t\t\x02" +
		"\x02\u0563\u0564\x07I\x02\x02\u0564\u0565\x05\u011A\x8E\x02\u0565\u0566" +
		"\x07J\x02\x02\u0566\u0568\x03\x02\x02\x02\u0567\u0562\x03\x02\x02\x02" +
		"\u0567\u0563\x03\x02\x02\x02\u0568\u0121\x03\x02\x02\x02\u0569\u056A\x07" +
		"+\x02\x02\u056A\u056B\x05\u0124\x93\x02\u056B\u056C\x07L\x02\x02\u056C" +
		"\u056D\x05\u0130\x99\x02\u056D\u0123\x03\x02\x02\x02\u056E\u056F\x07v" +
		"\x02\x02\u056F\u0570\x07I\x02\x02\u0570\u0571\x05\x1C\x0F\x02\u0571\u0572" +
		"\x07J\x02\x02\u0572\u0125\x03\x02\x02\x02\u0573\u0574\x07,\x02\x02\u0574" +
		"\u0575\x05\u0128\x95\x02\u0575\u0127\x03\x02\x02\x02\u0576\u057C\x07v" +
		"\x02\x02\u0577\u0579\x07I\x02\x02\u0578\u057A\x05\u012A\x96\x02\u0579" +
		"\u0578\x03\x02\x02\x02\u0579\u057A\x03\x02\x02\x02\u057A\u057B\x03\x02" +
		"\x02\x02\u057B\u057D\x07J\x02\x02\u057C\u0577\x03\x02\x02\x02\u057C\u057D" +
		"\x03\x02\x02\x02\u057D\u0129\x03\x02\x02\x02\u057E\u0583\x05\u012C\x97" +
		"\x02\u057F\u0580\x07H\x02\x02\u0580\u0582\x05\u012C\x97\x02\u0581\u057F" +
		"\x03\x02\x02\x02\u0582\u0585\x03\x02\x02\x02\u0583\u0581\x03\x02\x02\x02" +
		"\u0583\u0584\x03\x02\x02\x02\u0584\u012B\x03\x02\x02\x02\u0585\u0583\x03" +
		"\x02\x02\x02\u0586\u058A\x05\u0130\x99\x02\u0587\u0588\x07P\x02\x02\u0588" +
		"\u058A\x05\x94K\x02\u0589\u0586\x03\x02\x02\x02\u0589\u0587\x03\x02\x02" +
		"\x02\u058A\u012D\x03\x02\x02\x02\u058B\u058D\x07-\x02\x02\u058C\u058E" +
		"\x05\u0158\xAD\x02\u058D\u058C\x03\x02\x02\x02\u058D\u058E\x03\x02\x02" +
		"\x02\u058E\u012F\x03\x02\x02\x02\u058F\u0592\x05\u0132\x9A\x02\u0590\u0591" +
		"\x07K\x02\x02\u0591\u0593\x05\u0132\x9A\x02\u0592\u0590\x03\x02\x02\x02" +
		"\u0592\u0593\x03\x02\x02\x02\u0593\u0131\x03\x02\x02\x02\u0594\u059A\x05" +
		"\u0134\x9B\x02\u0595\u0596\x05\u0162\xB2\x02\u0596\u0597\x05\u0134\x9B" +
		"\x02\u0597\u0599\x03\x02\x02\x02\u0598\u0595\x03\x02\x02\x02\u0599\u059C" +
		"\x03\x02\x02\x02\u059A\u0598\x03\x02\x02\x02\u059A\u059B\x03\x02\x02\x02" +
		"\u059B\u0133\x03\x02\x02\x02\u059C\u059A\x03\x02\x02\x02\u059D\u05A2\x05" +
		"\u0136\x9C\x02\u059E\u059F\t\n\x02\x02\u059F\u05A1\x05\u0136\x9C\x02\u05A0" +
		"\u059E\x03\x02\x02\x02\u05A1\u05A4\x03\x02\x02\x02\u05A2\u05A0\x03\x02" +
		"\x02\x02\u05A2\u05A3\x03\x02\x02\x02\u05A3\u0135\x03\x02\x02\x02\u05A4" +
		"\u05A2\x03\x02\x02\x02\u05A5\u05AA\x05\u0138\x9D\x02\u05A6\u05A7\x07T" +
		"\x02\x02\u05A7\u05A9\x05\u0138\x9D\x02\u05A8\u05A6\x03\x02\x02\x02\u05A9" +
		"\u05AC\x03\x02\x02\x02\u05AA\u05A8\x03\x02\x02\x02\u05AA\u05AB\x03\x02" +
		"\x02\x02\u05AB\u0137\x03\x02\x02\x02\u05AC\u05AA\x03\x02\x02\x02\u05AD" +
		"\u05B2\x05\u013A\x9E\x02\u05AE\u05AF\x07S\x02\x02\u05AF\u05B1\x05\u013A" +
		"\x9E\x02\u05B0\u05AE\x03\x02\x02\x02\u05B1\u05B4\x03\x02\x02\x02\u05B2" +
		"\u05B0\x03\x02\x02\x02\u05B2\u05B3\x03\x02\x02\x02\u05B3\u0139\x03\x02" +
		"\x02\x02\u05B4\u05B2\x03\x02\x02\x02\u05B5\u05B6\x07R\x02\x02\u05B6\u05B9" +
		"\x05\u013A\x9E\x02\u05B7\u05B9\x05\u013C\x9F\x02\u05B8\u05B5\x03\x02\x02" +
		"\x02\u05B8\u05B7\x03\x02\x02\x02\u05B9\u013B\x03\x02\x02\x02\u05BA\u05BD" +
		"\x05\u013E\xA0\x02\u05BB\u05BC\t\v\x02\x02\u05BC\u05BE\x05\u013E\xA0\x02" +
		"\u05BD\u05BB\x03\x02\x02\x02\u05BD\u05BE\x03\x02\x02\x02\u05BE\u013D\x03" +
		"\x02\x02\x02\u05BF\u05C4\x05\u0140\xA1\x02\u05C0\u05C1\t\b\x02\x02\u05C1" +
		"\u05C3\x05\u0140\xA1\x02\u05C2\u05C0\x03\x02\x02\x02\u05C3\u05C6\x03\x02" +
		"\x02\x02\u05C4\u05C2\x03\x02\x02\x02\u05C4\u05C5\x03\x02\x02\x02\u05C5" +
		"\u013F\x03\x02\x02\x02\u05C6\u05C4\x03\x02\x02\x02\u05C7\u05CC\x05\u0142" +
		"\xA2\x02\u05C8\u05C9\t\f\x02\x02\u05C9\u05CB\x05\u0142\xA2\x02\u05CA\u05C8" +
		"\x03\x02\x02\x02\u05CB\u05CE\x03\x02\x02\x02\u05CC\u05CA\x03\x02\x02\x02" +
		"\u05CC\u05CD\x03\x02\x02\x02\u05CD\u0141\x03\x02\x02\x02\u05CE\u05CC\x03" +
		"\x02\x02\x02\u05CF\u05D1\t\b\x02\x02\u05D0\u05CF\x03\x02\x02\x02\u05D1" +
		"\u05D4\x03\x02\x02\x02\u05D2\u05D0\x03\x02\x02\x02\u05D2\u05D3\x03\x02" +
		"\x02\x02\u05D3\u05D5\x03\x02\x02\x02\u05D4\u05D2\x03\x02\x02\x02\u05D5" +
		"\u05D6\x05\u0144\xA3\x02\u05D6\u0143\x03\x02\x02\x02\u05D7\u05DC\x05\u0146" +
		"\xA4\x02\u05D8\u05D9\x07Q\x02\x02\u05D9\u05DB\x05\u0146\xA4\x02\u05DA" +
		"\u05D8\x03\x02\x02\x02\u05DB\u05DE\x03\x02\x02\x02\u05DC\u05DA\x03\x02" +
		"\x02\x02\u05DC\u05DD\x03\x02\x02\x02\u05DD\u0145\x03\x02\x02\x02\u05DE" +
		"\u05DC\x03\x02\x02\x02\u05DF\u05E0\x05\u017C\xBF\x02\u05E0\u05E1\x05\u017C" +
		"\xBF\x02\u05E1\u05EA\x03\x02\x02\x02\u05E2\u05EA\t\x06\x02\x02\u05E3\u05EA" +
		"\x05\u0180\xC1\x02\u05E4\u05EA\x05\u016C\xB7\x02\u05E5\u05E6\x07I\x02" +
		"\x02\u05E6\u05E7\x05\u0130\x99\x02\u05E7\u05E8\x07J\x02\x02\u05E8\u05EA" +
		"\x03\x02\x02\x02\u05E9\u05DF\x03\x02\x02\x02\u05E9\u05E2\x03\x02\x02\x02" +
		"\u05E9\u05E3\x03\x02\x02\x02\u05E9\u05E4\x03\x02\x02\x02\u05E9\u05E5\x03" +
		"\x02\x02\x02\u05EA\u0147\x03\x02\x02\x02\u05EB\u05F0\x05\u014C\xA7\x02" +
		"\u05EC\u05ED\t\b\x02\x02\u05ED\u05EF\x05\u014C\xA7\x02\u05EE\u05EC\x03" +
		"\x02\x02\x02\u05EF\u05F2\x03\x02\x02\x02\u05F0\u05EE\x03\x02\x02\x02\u05F0" +
		"\u05F1\x03\x02\x02\x02\u05F1\u0149\x03\x02\x02\x02\u05F2\u05F0\x03\x02" +
		"\x02\x02\u05F3\u05F8\x05\u014C\xA7\x02\u05F4\u05F5\t\b\x02\x02\u05F5\u05F7" +
		"\x05\u014C\xA7\x02\u05F6\u05F4\x03\x02\x02\x02\u05F7\u05FA\x03\x02\x02" +
		"\x02\u05F8\u05F6\x03\x02\x02\x02\u05F8\u05F9\x03\x02\x02\x02\u05F9\u014B" +
		"\x03\x02\x02\x02\u05FA\u05F8\x03\x02\x02\x02\u05FB\u0600\x05\u014E\xA8" +
		"\x02\u05FC\u05FD\t\f\x02\x02\u05FD\u05FF\x05\u014E\xA8\x02\u05FE\u05FC" +
		"\x03\x02\x02\x02\u05FF\u0602\x03\x02\x02\x02\u0600\u05FE\x03\x02\x02\x02" +
		"\u0600\u0601\x03\x02\x02\x02\u0601\u014D\x03\x02\x02\x02\u0602\u0600\x03" +
		"\x02\x02\x02\u0603\u0605\t\b\x02\x02\u0604\u0603\x03\x02\x02\x02\u0605" +
		"\u0608\x03\x02\x02\x02\u0606\u0604\x03\x02\x02\x02\u0606\u0607\x03\x02" +
		"\x02\x02\u0607\u0609\x03\x02\x02\x02\u0608\u0606\x03\x02\x02\x02\u0609" +
		"\u060A\x05\u0150\xA9\x02\u060A\u014F\x03\x02\x02\x02\u060B\u060E\x05\u0152" +
		"\xAA\x02\u060C\u060D\x07Q\x02\x02\u060D\u060F\x05\u0150\xA9\x02\u060E" +
		"\u060C\x03\x02\x02\x02\u060E\u060F\x03\x02\x02\x02\u060F\u0151\x03\x02" +
		"\x02\x02\u0610\u0617\x072\x02\x02\u0611\u0617\x05\u016E\xB8\x02\u0612" +
		"\u0613\x07I\x02\x02\u0613\u0614\x05\u014A\xA6\x02\u0614\u0615\x07J\x02" +
		"\x02\u0615\u0617\x03\x02\x02\x02\u0616\u0610\x03\x02\x02\x02\u0616\u0611" +
		"\x03\x02\x02\x02\u0616\u0612\x03\x02\x02\x02\u0617\u0153\x03\x02\x02\x02" +
		"\u0618\u0619\x05\u0130\x99\x02\u0619\u0155\x03\x02\x02\x02\u061A\u061B" +
		"\x05\u0130\x99\x02\u061B\u0157\x03\x02\x02\x02\u061C\u061D\x05\u0148\xA5" +
		"\x02\u061D\u0159\x03\x02\x02\x02\u061E\u061F\x05\u0130\x99\x02\u061F\u015B" +
		"\x03\x02\x02\x02\u0620\u0621\x05\u0130\x99\x02\u0621\u015D\x03\x02\x02" +
		"\x02\u0622\u0623\x05\u0130\x99\x02\u0623\u015F\x03\x02\x02\x02\u0624\u0625" +
		"\x05\u0130\x99\x02\u0625\u0161\x03\x02\x02\x02\u0626\u0627\x07O\x02\x02" +
		"\u0627\u0628\x07O\x02\x02\u0628\u0163\x03\x02\x02\x02\u0629\u062A\x05" +
		"\u0130\x99\x02\u062A\u0165\x03\x02\x02\x02\u062B\u062C\x05\u0130\x99\x02" +
		"\u062C\u0167\x03\x02\x02\x02\u062D\u062E\x07v\x02\x02\u062E\u062F\x07" +
		"I\x02\x02\u062F\u0634\x05\u0158\xAD\x02\u0630\u0631\x07H\x02\x02\u0631" +
		"\u0633\x05\u0158\xAD\x02\u0632\u0630\x03\x02\x02\x02\u0633\u0636\x03\x02" +
		"\x02\x02\u0634\u0632\x03\x02\x02\x02\u0634\u0635\x03\x02\x02\x02\u0635" +
		"\u0637\x03\x02\x02\x02\u0636\u0634\x03\x02\x02\x02\u0637\u0638\x07J\x02" +
		"\x02\u0638\u0169\x03\x02\x02\x02\u0639\u0642\x07I\x02\x02\u063A\u063F" +
		"\x05\u0130\x99\x02\u063B\u063C\x07H\x02\x02\u063C\u063E\x05\u0130\x99" +
		"\x02\u063D\u063B\x03\x02\x02\x02\u063E\u0641\x03\x02\x02\x02\u063F\u063D" +
		"\x03\x02\x02\x02\u063F\u0640\x03\x02\x02\x02\u0640\u0643\x03\x02\x02\x02" +
		"\u0641\u063F\x03\x02\x02\x02\u0642\u063A\x03\x02\x02\x02\u0642\u0643\x03" +
		"\x02\x02\x02\u0643\u0644\x03\x02\x02\x02\u0644\u0645\x07J\x02\x02\u0645" +
		"\u016B\x03\x02\x02\x02\u0646\u064B\t\x02\x02\x02\u0647\u0649\x05\u016A" +
		"\xB6\x02\u0648\u064A\x05\u0170\xB9\x02\u0649\u0648\x03\x02\x02\x02\u0649" +
		"\u064A\x03\x02\x02\x02\u064A\u064C\x03\x02\x02\x02\u064B\u0647\x03\x02" +
		"\x02\x02\u064B\u064C\x03\x02\x02\x02\u064C\u016D\x03\x02\x02\x02\u064D" +
		"\u0652\x07v\x02\x02\u064E\u0650\x05\u016A\xB6\x02\u064F\u0651\x05\u0170" +
		"\xB9\x02\u0650\u064F\x03\x02\x02\x02\u0650\u0651\x03\x02\x02\x02\u0651" +
		"\u0653\x03\x02\x02\x02\u0652\u064E\x03\x02\x02\x02\u0652\u0653\x03\x02" +
		"\x02\x02\u0653\u016F\x03\x02\x02\x02\u0654\u0656\x07I\x02\x02\u0655\u0657" +
		"\x05\u0132\x9A\x02\u0656\u0655\x03\x02\x02\x02\u0656\u0657\x03\x02\x02" +
		"\x02\u0657\u0658\x03\x02\x02\x02\u0658\u065A\x07K\x02\x02\u0659\u065B" +
		"\x05\u0132\x9A\x02\u065A\u0659\x03\x02\x02\x02\u065A\u065B\x03\x02\x02" +
		"\x02\u065B\u065C\x03\x02\x02\x02\u065C\u065D\x07J\x02\x02\u065D\u0171" +
		"\x03\x02\x02\x02\u065E\u065F\x07v\x02\x02\u065F\u0173\x03\x02\x02\x02" +
		"\u0660\u0661\x07v\x02\x02\u0661\u0175\x03\x02\x02\x02\u0662\u0663\x07" +
		"v\x02\x02\u0663\u0177\x03\x02\x02\x02\u0664\u0665\x07v\x02\x02\u0665\u0179" +
		"\x03\x02\x02\x02\u0666\u0668\t\b\x02\x02\u0667\u0666\x03\x02\x02\x02\u0667" +
		"\u0668\x03\x02\x02\x02\u0668\u0669\x03\x02\x02\x02\u0669\u066D\x05\u017C" +
		"\xBF\x02\u066A\u066D\t\x06\x02\x02\u066B\u066D\x05\u0180\xC1\x02\u066C" +
		"\u0667\x03\x02\x02\x02\u066C\u066A\x03\x02\x02\x02\u066C\u066B\x03\x02" +
		"\x02\x02\u066D\u017B\x03\x02\x02\x02\u066E\u0671\t\r\x02\x02\u066F\u0671" +
		"\x05\u017E\xC0\x02\u0670\u066E\x03\x02\x02\x02\u0670\u066F\x03\x02\x02" +
		"\x02\u0671\u017D\x03\x02\x02\x02\u0672\u0674\x07I\x02\x02\u0673\u0675" +
		"\t\b\x02\x02\u0674\u0673\x03\x02\x02\x02\u0674\u0675\x03\x02\x02\x02\u0675" +
		"\u0676\x03\x02\x02\x02\u0676\u0677\t\r\x02\x02\u0677\u0679\x07H\x02\x02" +
		"\u0678\u067A\t\b\x02\x02\u0679\u0678\x03\x02\x02\x02\u0679\u067A\x03\x02" +
		"\x02\x02\u067A\u067B\x03\x02\x02\x02\u067B\u067C\t\r\x02\x02\u067C\u067D" +
		"\x07J\x02\x02\u067D\u017F\x03\x02\x02\x02\u067E\u067F\t\x0E\x02\x02\u067F" +
		"\u0181\x03\x02\x02\x02\u0680\u0681\t\x02\x02\x02\u0681\u0183\x03\x02\x02" +
		"\x02\u0682\u0683\x07v\x02\x02\u0683\u0185\x03\x02\x02\x02\x9A\u0189\u018E" +
		"\u0195\u0198\u01A9\u01BD\u01C9\u01CC\u01D2\u01DD\u01E0\u01E7\u01F8\u01FD" +
		"\u0202\u0208\u0219\u0221\u0228\u022A\u022D\u0235\u023E\u024B\u024F\u0255" +
		"\u0259\u0260\u026E\u0275\u027A\u0281\u0286\u028F\u0291\u0299\u029D\u02A8" +
		"\u02B4\u02C0\u02CA\u02D1\u02E0\u02E4\u02F3\u0306\u0309\u030F\u0314\u0319" +
		"\u031E\u0322\u0326\u0330\u033A\u034C\u0351\u0355\u035D\u0365\u0370\u0375" +
		"\u037B\u0384\u0392\u0396\u039E\u03A3\u03AC\u03B2\u03B7\u03BC\u03C5\u03C9" +
		"\u03D0\u03D9\u03DF\u03E9\u03EE\u03F0\u03F8\u03FA\u0402\u0404\u040F\u0416" +
		"\u042F\u0441\u044C\u0458\u0463\u0478\u048D\u04C4\u04D7\u04E0\u04FD\u0503" +
		"\u0517\u051C\u0528\u052C\u0531\u053B\u053D\u0541\u0547\u0549\u054B\u054D" +
		"\u0557\u055B\u055E\u0560\u0567\u0579\u057C\u0583\u0589\u058D\u0592\u059A" +
		"\u05A2\u05AA\u05B2\u05B8\u05BD\u05C4\u05CC\u05D2\u05DC\u05E9\u05F0\u05F8" +
		"\u0600\u0606\u060E\u0616\u0634\u063F\u0642\u0649\u064B\u0650\u0652\u0656" +
		"\u065A\u0667\u066C\u0670\u0674\u0679";
	public static readonly _serializedATN: string = Utils.join(
		[
			Fortran77Parser._serializedATNSegment0,
			Fortran77Parser._serializedATNSegment1,
			Fortran77Parser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Fortran77Parser.__ATN) {
			Fortran77Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Fortran77Parser._serializedATN));
		}

		return Fortran77Parser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public executableUnit(): ExecutableUnitContext[];
	public executableUnit(i: number): ExecutableUnitContext;
	public executableUnit(i?: number): ExecutableUnitContext | ExecutableUnitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExecutableUnitContext);
		} else {
			return this.getRuleContext(i, ExecutableUnitContext);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.EOL);
		} else {
			return this.getToken(Fortran77Parser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_program; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecutableUnitContext extends ParserRuleContext {
	public functionSubprogram(): FunctionSubprogramContext | undefined {
		return this.tryGetRuleContext(0, FunctionSubprogramContext);
	}
	public mainProgram(): MainProgramContext | undefined {
		return this.tryGetRuleContext(0, MainProgramContext);
	}
	public subroutineSubprogram(): SubroutineSubprogramContext | undefined {
		return this.tryGetRuleContext(0, SubroutineSubprogramContext);
	}
	public blockdataSubprogram(): BlockdataSubprogramContext | undefined {
		return this.tryGetRuleContext(0, BlockdataSubprogramContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_executableUnit; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterExecutableUnit) {
			listener.enterExecutableUnit(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitExecutableUnit) {
			listener.exitExecutableUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitExecutableUnit) {
			return visitor.visitExecutableUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MainProgramContext extends ParserRuleContext {
	public subprogramBody(): SubprogramBodyContext {
		return this.getRuleContext(0, SubprogramBodyContext);
	}
	public programStatement(): ProgramStatementContext | undefined {
		return this.tryGetRuleContext(0, ProgramStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_mainProgram; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterMainProgram) {
			listener.enterMainProgram(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitMainProgram) {
			listener.exitMainProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitMainProgram) {
			return visitor.visitMainProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionSubprogramContext extends ParserRuleContext {
	public functionStatement(): FunctionStatementContext {
		return this.getRuleContext(0, FunctionStatementContext);
	}
	public subprogramBody(): SubprogramBodyContext {
		return this.getRuleContext(0, SubprogramBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_functionSubprogram; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterFunctionSubprogram) {
			listener.enterFunctionSubprogram(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitFunctionSubprogram) {
			listener.exitFunctionSubprogram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitFunctionSubprogram) {
			return visitor.visitFunctionSubprogram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubroutineSubprogramContext extends ParserRuleContext {
	public subroutineStatement(): SubroutineStatementContext {
		return this.getRuleContext(0, SubroutineStatementContext);
	}
	public subprogramBody(): SubprogramBodyContext {
		return this.getRuleContext(0, SubprogramBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_subroutineSubprogram; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterSubroutineSubprogram) {
			listener.enterSubroutineSubprogram(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitSubroutineSubprogram) {
			listener.exitSubroutineSubprogram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitSubroutineSubprogram) {
			return visitor.visitSubroutineSubprogram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockdataSubprogramContext extends ParserRuleContext {
	public blockdataStatement(): BlockdataStatementContext {
		return this.getRuleContext(0, BlockdataStatementContext);
	}
	public subprogramBody(): SubprogramBodyContext {
		return this.getRuleContext(0, SubprogramBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_blockdataSubprogram; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterBlockdataSubprogram) {
			listener.enterBlockdataSubprogram(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitBlockdataSubprogram) {
			listener.exitBlockdataSubprogram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitBlockdataSubprogram) {
			return visitor.visitBlockdataSubprogram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OtherSpecificationStatementContext extends ParserRuleContext {
	public dimensionStatement(): DimensionStatementContext | undefined {
		return this.tryGetRuleContext(0, DimensionStatementContext);
	}
	public equivalenceStatement(): EquivalenceStatementContext | undefined {
		return this.tryGetRuleContext(0, EquivalenceStatementContext);
	}
	public intrinsicStatement(): IntrinsicStatementContext | undefined {
		return this.tryGetRuleContext(0, IntrinsicStatementContext);
	}
	public saveStatement(): SaveStatementContext | undefined {
		return this.tryGetRuleContext(0, SaveStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_otherSpecificationStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterOtherSpecificationStatement) {
			listener.enterOtherSpecificationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitOtherSpecificationStatement) {
			listener.exitOtherSpecificationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitOtherSpecificationStatement) {
			return visitor.visitOtherSpecificationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecutableStatementContext extends ParserRuleContext {
	public assignmentStatement(): AssignmentStatementContext | undefined {
		return this.tryGetRuleContext(0, AssignmentStatementContext);
	}
	public gotoStatement(): GotoStatementContext | undefined {
		return this.tryGetRuleContext(0, GotoStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public doStatement(): DoStatementContext | undefined {
		return this.tryGetRuleContext(0, DoStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public stopStatement(): StopStatementContext | undefined {
		return this.tryGetRuleContext(0, StopStatementContext);
	}
	public pauseStatement(): PauseStatementContext | undefined {
		return this.tryGetRuleContext(0, PauseStatementContext);
	}
	public readStatement(): ReadStatementContext | undefined {
		return this.tryGetRuleContext(0, ReadStatementContext);
	}
	public writeStatement(): WriteStatementContext | undefined {
		return this.tryGetRuleContext(0, WriteStatementContext);
	}
	public printStatement(): PrintStatementContext | undefined {
		return this.tryGetRuleContext(0, PrintStatementContext);
	}
	public rewindStatement(): RewindStatementContext | undefined {
		return this.tryGetRuleContext(0, RewindStatementContext);
	}
	public backspaceStatement(): BackspaceStatementContext | undefined {
		return this.tryGetRuleContext(0, BackspaceStatementContext);
	}
	public openStatement(): OpenStatementContext | undefined {
		return this.tryGetRuleContext(0, OpenStatementContext);
	}
	public closeStatement(): CloseStatementContext | undefined {
		return this.tryGetRuleContext(0, CloseStatementContext);
	}
	public endfileStatement(): EndfileStatementContext | undefined {
		return this.tryGetRuleContext(0, EndfileStatementContext);
	}
	public inquireStatement(): InquireStatementContext | undefined {
		return this.tryGetRuleContext(0, InquireStatementContext);
	}
	public callStatement(): CallStatementContext | undefined {
		return this.tryGetRuleContext(0, CallStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_executableStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterExecutableStatement) {
			listener.enterExecutableStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitExecutableStatement) {
			listener.exitExecutableStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitExecutableStatement) {
			return visitor.visitExecutableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgramStatementContext extends ParserRuleContext {
	public PROGRAM(): TerminalNode { return this.getToken(Fortran77Parser.PROGRAM, 0); }
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	public EOL(): TerminalNode { return this.getToken(Fortran77Parser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_programStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterProgramStatement) {
			listener.enterProgramStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitProgramStatement) {
			listener.exitProgramStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitProgramStatement) {
			return visitor.visitProgramStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntryStatementContext extends ParserRuleContext {
	public ENTRY(): TerminalNode { return this.getToken(Fortran77Parser.ENTRY, 0); }
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.LPAREN, 0); }
	public namelist(): NamelistContext | undefined {
		return this.tryGetRuleContext(0, NamelistContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_entryStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterEntryStatement) {
			listener.enterEntryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitEntryStatement) {
			listener.exitEntryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitEntryStatement) {
			return visitor.visitEntryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionStatementContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(Fortran77Parser.FUNCTION, 0); }
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public namelist(): NamelistContext | undefined {
		return this.tryGetRuleContext(0, NamelistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_functionStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterFunctionStatement) {
			listener.enterFunctionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitFunctionStatement) {
			listener.exitFunctionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitFunctionStatement) {
			return visitor.visitFunctionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockdataStatementContext extends ParserRuleContext {
	public BLOCK(): TerminalNode { return this.getToken(Fortran77Parser.BLOCK, 0); }
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_blockdataStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterBlockdataStatement) {
			listener.enterBlockdataStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitBlockdataStatement) {
			listener.exitBlockdataStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitBlockdataStatement) {
			return visitor.visitBlockdataStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubroutineStatementContext extends ParserRuleContext {
	public SUBROUTINE(): TerminalNode { return this.getToken(Fortran77Parser.SUBROUTINE, 0); }
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.RPAREN, 0); }
	public namelist(): NamelistContext | undefined {
		return this.tryGetRuleContext(0, NamelistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_subroutineStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterSubroutineStatement) {
			listener.enterSubroutineStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitSubroutineStatement) {
			listener.exitSubroutineStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitSubroutineStatement) {
			return visitor.visitSubroutineStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamelistContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_namelist; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterNamelist) {
			listener.enterNamelist(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitNamelist) {
			listener.exitNamelist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitNamelist) {
			return visitor.visitNamelist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public entryStatement(): EntryStatementContext | undefined {
		return this.tryGetRuleContext(0, EntryStatementContext);
	}
	public implicitStatement(): ImplicitStatementContext | undefined {
		return this.tryGetRuleContext(0, ImplicitStatementContext);
	}
	public parameterStatement(): ParameterStatementContext | undefined {
		return this.tryGetRuleContext(0, ParameterStatementContext);
	}
	public typeStatement(): TypeStatementContext | undefined {
		return this.tryGetRuleContext(0, TypeStatementContext);
	}
	public commonStatement(): CommonStatementContext | undefined {
		return this.tryGetRuleContext(0, CommonStatementContext);
	}
	public pointerStatement(): PointerStatementContext | undefined {
		return this.tryGetRuleContext(0, PointerStatementContext);
	}
	public externalStatement(): ExternalStatementContext | undefined {
		return this.tryGetRuleContext(0, ExternalStatementContext);
	}
	public otherSpecificationStatement(): OtherSpecificationStatementContext | undefined {
		return this.tryGetRuleContext(0, OtherSpecificationStatementContext);
	}
	public dataStatement(): DataStatementContext | undefined {
		return this.tryGetRuleContext(0, DataStatementContext);
	}
	public statementFunctionStatement(): StatementFunctionStatementContext[];
	public statementFunctionStatement(i: number): StatementFunctionStatementContext;
	public statementFunctionStatement(i?: number): StatementFunctionStatementContext | StatementFunctionStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementFunctionStatementContext);
		} else {
			return this.getRuleContext(i, StatementFunctionStatementContext);
		}
	}
	public executableStatement(): ExecutableStatementContext | undefined {
		return this.tryGetRuleContext(0, ExecutableStatementContext);
	}
	public commentStatement(): CommentStatementContext | undefined {
		return this.tryGetRuleContext(0, CommentStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_statement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubprogramBodyContext extends ParserRuleContext {
	public endStatement(): EndStatementContext {
		return this.getRuleContext(0, EndStatementContext);
	}
	public wholeStatement(): WholeStatementContext[];
	public wholeStatement(i: number): WholeStatementContext;
	public wholeStatement(i?: number): WholeStatementContext | WholeStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WholeStatementContext);
		} else {
			return this.getRuleContext(i, WholeStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_subprogramBody; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterSubprogramBody) {
			listener.enterSubprogramBody(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitSubprogramBody) {
			listener.exitSubprogramBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitSubprogramBody) {
			return visitor.visitSubprogramBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WholeStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public EOL(): TerminalNode { return this.getToken(Fortran77Parser.EOL, 0); }
	public LABEL(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.LABEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_wholeStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterWholeStatement) {
			listener.enterWholeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitWholeStatement) {
			listener.exitWholeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitWholeStatement) {
			return visitor.visitWholeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndStatementContext extends ParserRuleContext {
	public END(): TerminalNode { return this.getToken(Fortran77Parser.END, 0); }
	public LABEL(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.LABEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_endStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterEndStatement) {
			listener.enterEndStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitEndStatement) {
			listener.exitEndStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitEndStatement) {
			return visitor.visitEndStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimensionStatementContext extends ParserRuleContext {
	public DIMENSION(): TerminalNode { return this.getToken(Fortran77Parser.DIMENSION, 0); }
	public arrayDeclarators(): ArrayDeclaratorsContext {
		return this.getRuleContext(0, ArrayDeclaratorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_dimensionStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterDimensionStatement) {
			listener.enterDimensionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitDimensionStatement) {
			listener.exitDimensionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitDimensionStatement) {
			return visitor.visitDimensionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayDeclaratorContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public arrayDeclaratorExtents(): ArrayDeclaratorExtentsContext {
		return this.getRuleContext(0, ArrayDeclaratorExtentsContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.NAME, 0); }
	public REAL(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.REAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_arrayDeclarator; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterArrayDeclarator) {
			listener.enterArrayDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitArrayDeclarator) {
			listener.exitArrayDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitArrayDeclarator) {
			return visitor.visitArrayDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayDeclaratorsContext extends ParserRuleContext {
	public arrayDeclarator(): ArrayDeclaratorContext[];
	public arrayDeclarator(i: number): ArrayDeclaratorContext;
	public arrayDeclarator(i?: number): ArrayDeclaratorContext | ArrayDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayDeclaratorContext);
		} else {
			return this.getRuleContext(i, ArrayDeclaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_arrayDeclarators; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterArrayDeclarators) {
			listener.enterArrayDeclarators(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitArrayDeclarators) {
			listener.exitArrayDeclarators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitArrayDeclarators) {
			return visitor.visitArrayDeclarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayDeclaratorExtentsContext extends ParserRuleContext {
	public arrayDeclaratorExtent(): ArrayDeclaratorExtentContext[];
	public arrayDeclaratorExtent(i: number): ArrayDeclaratorExtentContext;
	public arrayDeclaratorExtent(i?: number): ArrayDeclaratorExtentContext | ArrayDeclaratorExtentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayDeclaratorExtentContext);
		} else {
			return this.getRuleContext(i, ArrayDeclaratorExtentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_arrayDeclaratorExtents; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterArrayDeclaratorExtents) {
			listener.enterArrayDeclaratorExtents(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitArrayDeclaratorExtents) {
			listener.exitArrayDeclaratorExtents(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitArrayDeclaratorExtents) {
			return visitor.visitArrayDeclaratorExtents(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayDeclaratorExtentContext extends ParserRuleContext {
	public iexprCode(): IexprCodeContext[];
	public iexprCode(i: number): IexprCodeContext;
	public iexprCode(i?: number): IexprCodeContext | IexprCodeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IexprCodeContext);
		} else {
			return this.getRuleContext(i, IexprCodeContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.COLON, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.STAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_arrayDeclaratorExtent; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterArrayDeclaratorExtent) {
			listener.enterArrayDeclaratorExtent(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitArrayDeclaratorExtent) {
			listener.exitArrayDeclaratorExtent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitArrayDeclaratorExtent) {
			return visitor.visitArrayDeclaratorExtent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EquivalenceStatementContext extends ParserRuleContext {
	public EQUIVALENCE(): TerminalNode { return this.getToken(Fortran77Parser.EQUIVALENCE, 0); }
	public equivEntityGroup(): EquivEntityGroupContext[];
	public equivEntityGroup(i: number): EquivEntityGroupContext;
	public equivEntityGroup(i?: number): EquivEntityGroupContext | EquivEntityGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EquivEntityGroupContext);
		} else {
			return this.getRuleContext(i, EquivEntityGroupContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_equivalenceStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterEquivalenceStatement) {
			listener.enterEquivalenceStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitEquivalenceStatement) {
			listener.exitEquivalenceStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitEquivalenceStatement) {
			return visitor.visitEquivalenceStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EquivEntityGroupContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public equivEntity(): EquivEntityContext[];
	public equivEntity(i: number): EquivEntityContext;
	public equivEntity(i?: number): EquivEntityContext | EquivEntityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EquivEntityContext);
		} else {
			return this.getRuleContext(i, EquivEntityContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_equivEntityGroup; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterEquivEntityGroup) {
			listener.enterEquivEntityGroup(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitEquivEntityGroup) {
			listener.exitEquivEntityGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitEquivEntityGroup) {
			return visitor.visitEquivEntityGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EquivEntityContext extends ParserRuleContext {
	public varRef(): VarRefContext {
		return this.getRuleContext(0, VarRefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_equivEntity; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterEquivEntity) {
			listener.enterEquivEntity(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitEquivEntity) {
			listener.exitEquivEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitEquivEntity) {
			return visitor.visitEquivEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommonStatementContext extends ParserRuleContext {
	public COMMON(): TerminalNode { return this.getToken(Fortran77Parser.COMMON, 0); }
	public commonBlock(): CommonBlockContext[];
	public commonBlock(i: number): CommonBlockContext;
	public commonBlock(i?: number): CommonBlockContext | CommonBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommonBlockContext);
		} else {
			return this.getRuleContext(i, CommonBlockContext);
		}
	}
	public commonItems(): CommonItemsContext | undefined {
		return this.tryGetRuleContext(0, CommonItemsContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_commonStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterCommonStatement) {
			listener.enterCommonStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitCommonStatement) {
			listener.exitCommonStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitCommonStatement) {
			return visitor.visitCommonStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommonNameContext extends ParserRuleContext {
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.DIV);
		} else {
			return this.getToken(Fortran77Parser.DIV, i);
		}
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_commonName; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterCommonName) {
			listener.enterCommonName(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitCommonName) {
			listener.exitCommonName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitCommonName) {
			return visitor.visitCommonName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommonItemContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.NAME, 0); }
	public arrayDeclarator(): ArrayDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, ArrayDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_commonItem; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterCommonItem) {
			listener.enterCommonItem(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitCommonItem) {
			listener.exitCommonItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitCommonItem) {
			return visitor.visitCommonItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommonItemsContext extends ParserRuleContext {
	public commonItem(): CommonItemContext[];
	public commonItem(i: number): CommonItemContext;
	public commonItem(i?: number): CommonItemContext | CommonItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommonItemContext);
		} else {
			return this.getRuleContext(i, CommonItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_commonItems; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterCommonItems) {
			listener.enterCommonItems(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitCommonItems) {
			listener.exitCommonItems(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitCommonItems) {
			return visitor.visitCommonItems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommonBlockContext extends ParserRuleContext {
	public commonName(): CommonNameContext {
		return this.getRuleContext(0, CommonNameContext);
	}
	public commonItems(): CommonItemsContext {
		return this.getRuleContext(0, CommonItemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_commonBlock; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterCommonBlock) {
			listener.enterCommonBlock(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitCommonBlock) {
			listener.exitCommonBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitCommonBlock) {
			return visitor.visitCommonBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentStatementContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(Fortran77Parser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_commentStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterCommentStatement) {
			listener.enterCommentStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitCommentStatement) {
			listener.exitCommentStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitCommentStatement) {
			return visitor.visitCommentStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStatementContext extends ParserRuleContext {
	public typename(): TypenameContext | undefined {
		return this.tryGetRuleContext(0, TypenameContext);
	}
	public typeStatementNameList(): TypeStatementNameListContext | undefined {
		return this.tryGetRuleContext(0, TypeStatementNameListContext);
	}
	public characterWithLen(): CharacterWithLenContext | undefined {
		return this.tryGetRuleContext(0, CharacterWithLenContext);
	}
	public typeStatementNameCharList(): TypeStatementNameCharListContext | undefined {
		return this.tryGetRuleContext(0, TypeStatementNameCharListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_typeStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterTypeStatement) {
			listener.enterTypeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitTypeStatement) {
			listener.exitTypeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitTypeStatement) {
			return visitor.visitTypeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStatementNameListContext extends ParserRuleContext {
	public typeStatementName(): TypeStatementNameContext[];
	public typeStatementName(i: number): TypeStatementNameContext;
	public typeStatementName(i?: number): TypeStatementNameContext | TypeStatementNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeStatementNameContext);
		} else {
			return this.getRuleContext(i, TypeStatementNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_typeStatementNameList; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterTypeStatementNameList) {
			listener.enterTypeStatementNameList(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitTypeStatementNameList) {
			listener.exitTypeStatementNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitTypeStatementNameList) {
			return visitor.visitTypeStatementNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStatementNameContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.NAME, 0); }
	public arrayDeclarator(): ArrayDeclaratorContext | undefined {
		return this.tryGetRuleContext(0, ArrayDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_typeStatementName; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterTypeStatementName) {
			listener.enterTypeStatementName(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitTypeStatementName) {
			listener.exitTypeStatementName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitTypeStatementName) {
			return visitor.visitTypeStatementName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStatementNameCharListContext extends ParserRuleContext {
	public typeStatementNameChar(): TypeStatementNameCharContext[];
	public typeStatementNameChar(i: number): TypeStatementNameCharContext;
	public typeStatementNameChar(i?: number): TypeStatementNameCharContext | TypeStatementNameCharContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeStatementNameCharContext);
		} else {
			return this.getRuleContext(i, TypeStatementNameCharContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_typeStatementNameCharList; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterTypeStatementNameCharList) {
			listener.enterTypeStatementNameCharList(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitTypeStatementNameCharList) {
			listener.exitTypeStatementNameCharList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitTypeStatementNameCharList) {
			return visitor.visitTypeStatementNameCharList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStatementNameCharContext extends ParserRuleContext {
	public typeStatementName(): TypeStatementNameContext {
		return this.getRuleContext(0, TypeStatementNameContext);
	}
	public typeStatementLenSpec(): TypeStatementLenSpecContext | undefined {
		return this.tryGetRuleContext(0, TypeStatementLenSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_typeStatementNameChar; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterTypeStatementNameChar) {
			listener.enterTypeStatementNameChar(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitTypeStatementNameChar) {
			listener.exitTypeStatementNameChar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitTypeStatementNameChar) {
			return visitor.visitTypeStatementNameChar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStatementLenSpecContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(Fortran77Parser.STAR, 0); }
	public lenSpecification(): LenSpecificationContext {
		return this.getRuleContext(0, LenSpecificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_typeStatementLenSpec; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterTypeStatementLenSpec) {
			listener.enterTypeStatementLenSpec(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitTypeStatementLenSpec) {
			listener.exitTypeStatementLenSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitTypeStatementLenSpec) {
			return visitor.visitTypeStatementLenSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypenameContext extends ParserRuleContext {
	public REAL(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.REAL, 0); }
	public COMPLEX(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.COMPLEX, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.DOUBLE, 0); }
	public PRECISION(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.PRECISION, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.INTEGER, 0); }
	public LOGICAL(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.LOGICAL, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.STAR, 0); }
	public ICON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ICON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_typename; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterTypename) {
			listener.enterTypename(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitTypename) {
			listener.exitTypename(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitTypename) {
			return visitor.visitTypename(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public typename(): TypenameContext | undefined {
		return this.tryGetRuleContext(0, TypenameContext);
	}
	public characterWithLen(): CharacterWithLenContext | undefined {
		return this.tryGetRuleContext(0, CharacterWithLenContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_type; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypenameLenContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(Fortran77Parser.STAR, 0); }
	public ICON(): TerminalNode { return this.getToken(Fortran77Parser.ICON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_typenameLen; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterTypenameLen) {
			listener.enterTypenameLen(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitTypenameLen) {
			listener.exitTypenameLen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitTypenameLen) {
			return visitor.visitTypenameLen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointerStatementContext extends ParserRuleContext {
	public POINTER(): TerminalNode { return this.getToken(Fortran77Parser.POINTER, 0); }
	public pointerDecl(): PointerDeclContext[];
	public pointerDecl(i: number): PointerDeclContext;
	public pointerDecl(i?: number): PointerDeclContext | PointerDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PointerDeclContext);
		} else {
			return this.getRuleContext(i, PointerDeclContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_pointerStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterPointerStatement) {
			listener.enterPointerStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitPointerStatement) {
			listener.exitPointerStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitPointerStatement) {
			return visitor.visitPointerStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointerDeclContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.NAME);
		} else {
			return this.getToken(Fortran77Parser.NAME, i);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(Fortran77Parser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_pointerDecl; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterPointerDecl) {
			listener.enterPointerDecl(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitPointerDecl) {
			listener.exitPointerDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitPointerDecl) {
			return visitor.visitPointerDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplicitStatementContext extends ParserRuleContext {
	public IMPLICIT(): TerminalNode { return this.getToken(Fortran77Parser.IMPLICIT, 0); }
	public implicitNone(): ImplicitNoneContext | undefined {
		return this.tryGetRuleContext(0, ImplicitNoneContext);
	}
	public implicitSpecs(): ImplicitSpecsContext | undefined {
		return this.tryGetRuleContext(0, ImplicitSpecsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_implicitStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterImplicitStatement) {
			listener.enterImplicitStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitImplicitStatement) {
			listener.exitImplicitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitImplicitStatement) {
			return visitor.visitImplicitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplicitSpecContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public implicitLetters(): ImplicitLettersContext {
		return this.getRuleContext(0, ImplicitLettersContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_implicitSpec; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterImplicitSpec) {
			listener.enterImplicitSpec(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitImplicitSpec) {
			listener.exitImplicitSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitImplicitSpec) {
			return visitor.visitImplicitSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplicitSpecsContext extends ParserRuleContext {
	public implicitSpec(): ImplicitSpecContext[];
	public implicitSpec(i: number): ImplicitSpecContext;
	public implicitSpec(i?: number): ImplicitSpecContext | ImplicitSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImplicitSpecContext);
		} else {
			return this.getRuleContext(i, ImplicitSpecContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_implicitSpecs; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterImplicitSpecs) {
			listener.enterImplicitSpecs(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitImplicitSpecs) {
			listener.exitImplicitSpecs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitImplicitSpecs) {
			return visitor.visitImplicitSpecs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplicitNoneContext extends ParserRuleContext {
	public NONE(): TerminalNode { return this.getToken(Fortran77Parser.NONE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_implicitNone; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterImplicitNone) {
			listener.enterImplicitNone(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitImplicitNone) {
			listener.exitImplicitNone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitImplicitNone) {
			return visitor.visitImplicitNone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplicitLetterContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_implicitLetter; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterImplicitLetter) {
			listener.enterImplicitLetter(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitImplicitLetter) {
			listener.exitImplicitLetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitImplicitLetter) {
			return visitor.visitImplicitLetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplicitRangeContext extends ParserRuleContext {
	public implicitLetter(): ImplicitLetterContext[];
	public implicitLetter(i: number): ImplicitLetterContext;
	public implicitLetter(i?: number): ImplicitLetterContext | ImplicitLetterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImplicitLetterContext);
		} else {
			return this.getRuleContext(i, ImplicitLetterContext);
		}
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_implicitRange; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterImplicitRange) {
			listener.enterImplicitRange(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitImplicitRange) {
			listener.exitImplicitRange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitImplicitRange) {
			return visitor.visitImplicitRange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplicitLettersContext extends ParserRuleContext {
	public implicitRange(): ImplicitRangeContext[];
	public implicitRange(i: number): ImplicitRangeContext;
	public implicitRange(i?: number): ImplicitRangeContext | ImplicitRangeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImplicitRangeContext);
		} else {
			return this.getRuleContext(i, ImplicitRangeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_implicitLetters; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterImplicitLetters) {
			listener.enterImplicitLetters(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitImplicitLetters) {
			listener.exitImplicitLetters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitImplicitLetters) {
			return visitor.visitImplicitLetters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LenSpecificationContext extends ParserRuleContext {
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.LPAREN);
		} else {
			return this.getToken(Fortran77Parser.LPAREN, i);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.STAR);
		} else {
			return this.getToken(Fortran77Parser.STAR, i);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.RPAREN);
		} else {
			return this.getToken(Fortran77Parser.RPAREN, i);
		}
	}
	public ICON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ICON, 0); }
	public intConstantExpr(): IntConstantExprContext | undefined {
		return this.tryGetRuleContext(0, IntConstantExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_lenSpecification; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterLenSpecification) {
			listener.enterLenSpecification(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitLenSpecification) {
			listener.exitLenSpecification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitLenSpecification) {
			return visitor.visitLenSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharacterWithLenContext extends ParserRuleContext {
	public characterExpression(): CharacterExpressionContext {
		return this.getRuleContext(0, CharacterExpressionContext);
	}
	public cwlLen(): CwlLenContext | undefined {
		return this.tryGetRuleContext(0, CwlLenContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_characterWithLen; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterCharacterWithLen) {
			listener.enterCharacterWithLen(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitCharacterWithLen) {
			listener.exitCharacterWithLen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitCharacterWithLen) {
			return visitor.visitCharacterWithLen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CwlLenContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(Fortran77Parser.STAR, 0); }
	public lenSpecification(): LenSpecificationContext {
		return this.getRuleContext(0, LenSpecificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_cwlLen; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterCwlLen) {
			listener.enterCwlLen(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitCwlLen) {
			listener.exitCwlLen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitCwlLen) {
			return visitor.visitCwlLen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterStatementContext extends ParserRuleContext {
	public PARAMETER(): TerminalNode { return this.getToken(Fortran77Parser.PARAMETER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public paramlist(): ParamlistContext {
		return this.getRuleContext(0, ParamlistContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_parameterStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterParameterStatement) {
			listener.enterParameterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitParameterStatement) {
			listener.exitParameterStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitParameterStatement) {
			return visitor.visitParameterStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamlistContext extends ParserRuleContext {
	public paramassign(): ParamassignContext[];
	public paramassign(i: number): ParamassignContext;
	public paramassign(i?: number): ParamassignContext | ParamassignContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamassignContext);
		} else {
			return this.getRuleContext(i, ParamassignContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_paramlist; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterParamlist) {
			listener.enterParamlist(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitParamlist) {
			listener.exitParamlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitParamlist) {
			return visitor.visitParamlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamassignContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(Fortran77Parser.ASSIGN, 0); }
	public constantExpr(): ConstantExprContext {
		return this.getRuleContext(0, ConstantExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_paramassign; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterParamassign) {
			listener.enterParamassign(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitParamassign) {
			listener.exitParamassign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitParamassign) {
			return visitor.visitParamassign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternalStatementContext extends ParserRuleContext {
	public EXTERNAL(): TerminalNode { return this.getToken(Fortran77Parser.EXTERNAL, 0); }
	public namelist(): NamelistContext {
		return this.getRuleContext(0, NamelistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_externalStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterExternalStatement) {
			listener.enterExternalStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitExternalStatement) {
			listener.exitExternalStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitExternalStatement) {
			return visitor.visitExternalStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntrinsicStatementContext extends ParserRuleContext {
	public INTRINSIC(): TerminalNode { return this.getToken(Fortran77Parser.INTRINSIC, 0); }
	public namelist(): NamelistContext {
		return this.getRuleContext(0, NamelistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_intrinsicStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterIntrinsicStatement) {
			listener.enterIntrinsicStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitIntrinsicStatement) {
			listener.exitIntrinsicStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitIntrinsicStatement) {
			return visitor.visitIntrinsicStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SaveStatementContext extends ParserRuleContext {
	public SAVE(): TerminalNode { return this.getToken(Fortran77Parser.SAVE, 0); }
	public saveEntity(): SaveEntityContext[];
	public saveEntity(i: number): SaveEntityContext;
	public saveEntity(i?: number): SaveEntityContext | SaveEntityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SaveEntityContext);
		} else {
			return this.getRuleContext(i, SaveEntityContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_saveStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterSaveStatement) {
			listener.enterSaveStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitSaveStatement) {
			listener.exitSaveStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitSaveStatement) {
			return visitor.visitSaveStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SaveEntityContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.NAME, 0); }
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.DIV);
		} else {
			return this.getToken(Fortran77Parser.DIV, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_saveEntity; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterSaveEntity) {
			listener.enterSaveEntity(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitSaveEntity) {
			listener.exitSaveEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitSaveEntity) {
			return visitor.visitSaveEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataStatementContext extends ParserRuleContext {
	public DATA(): TerminalNode { return this.getToken(Fortran77Parser.DATA, 0); }
	public dataStatementEntity(): DataStatementEntityContext[];
	public dataStatementEntity(i: number): DataStatementEntityContext;
	public dataStatementEntity(i?: number): DataStatementEntityContext | DataStatementEntityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataStatementEntityContext);
		} else {
			return this.getRuleContext(i, DataStatementEntityContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_dataStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterDataStatement) {
			listener.enterDataStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitDataStatement) {
			listener.exitDataStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitDataStatement) {
			return visitor.visitDataStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataStatementItemContext extends ParserRuleContext {
	public varRef(): VarRefContext | undefined {
		return this.tryGetRuleContext(0, VarRefContext);
	}
	public dataImpliedDo(): DataImpliedDoContext | undefined {
		return this.tryGetRuleContext(0, DataImpliedDoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_dataStatementItem; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterDataStatementItem) {
			listener.enterDataStatementItem(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitDataStatementItem) {
			listener.exitDataStatementItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitDataStatementItem) {
			return visitor.visitDataStatementItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataStatementMultipleContext extends ParserRuleContext {
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.NAME);
		} else {
			return this.getToken(Fortran77Parser.NAME, i);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.STAR, 0); }
	public ICON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ICON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_dataStatementMultiple; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterDataStatementMultiple) {
			listener.enterDataStatementMultiple(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitDataStatementMultiple) {
			listener.exitDataStatementMultiple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitDataStatementMultiple) {
			return visitor.visitDataStatementMultiple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataStatementEntityContext extends ParserRuleContext {
	public dse1(): Dse1Context {
		return this.getRuleContext(0, Dse1Context);
	}
	public dse2(): Dse2Context {
		return this.getRuleContext(0, Dse2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_dataStatementEntity; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterDataStatementEntity) {
			listener.enterDataStatementEntity(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitDataStatementEntity) {
			listener.exitDataStatementEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitDataStatementEntity) {
			return visitor.visitDataStatementEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dse1Context extends ParserRuleContext {
	public dataStatementItem(): DataStatementItemContext[];
	public dataStatementItem(i: number): DataStatementItemContext;
	public dataStatementItem(i?: number): DataStatementItemContext | DataStatementItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataStatementItemContext);
		} else {
			return this.getRuleContext(i, DataStatementItemContext);
		}
	}
	public DIV(): TerminalNode { return this.getToken(Fortran77Parser.DIV, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_dse1; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterDse1) {
			listener.enterDse1(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitDse1) {
			listener.exitDse1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitDse1) {
			return visitor.visitDse1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dse2Context extends ParserRuleContext {
	public dataStatementMultiple(): DataStatementMultipleContext[];
	public dataStatementMultiple(i: number): DataStatementMultipleContext;
	public dataStatementMultiple(i?: number): DataStatementMultipleContext | DataStatementMultipleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataStatementMultipleContext);
		} else {
			return this.getRuleContext(i, DataStatementMultipleContext);
		}
	}
	public DIV(): TerminalNode { return this.getToken(Fortran77Parser.DIV, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_dse2; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterDse2) {
			listener.enterDse2(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitDse2) {
			listener.exitDse2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitDse2) {
			return visitor.visitDse2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataImpliedDoContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public dataImpliedDoList(): DataImpliedDoListContext {
		return this.getRuleContext(0, DataImpliedDoListContext);
	}
	public COMMA(): TerminalNode { return this.getToken(Fortran77Parser.COMMA, 0); }
	public dataImpliedDoRange(): DataImpliedDoRangeContext {
		return this.getRuleContext(0, DataImpliedDoRangeContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_dataImpliedDo; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterDataImpliedDo) {
			listener.enterDataImpliedDo(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitDataImpliedDo) {
			listener.exitDataImpliedDo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitDataImpliedDo) {
			return visitor.visitDataImpliedDo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataImpliedDoRangeContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(Fortran77Parser.ASSIGN, 0); }
	public intConstantExpr(): IntConstantExprContext[];
	public intConstantExpr(i: number): IntConstantExprContext;
	public intConstantExpr(i?: number): IntConstantExprContext | IntConstantExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntConstantExprContext);
		} else {
			return this.getRuleContext(i, IntConstantExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_dataImpliedDoRange; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterDataImpliedDoRange) {
			listener.enterDataImpliedDoRange(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitDataImpliedDoRange) {
			listener.exitDataImpliedDoRange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitDataImpliedDoRange) {
			return visitor.visitDataImpliedDoRange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataImpliedDoListContext extends ParserRuleContext {
	public dataImpliedDoListWhat(): DataImpliedDoListWhatContext | undefined {
		return this.tryGetRuleContext(0, DataImpliedDoListWhatContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.COMMA, 0); }
	public dataImpliedDoList(): DataImpliedDoListContext | undefined {
		return this.tryGetRuleContext(0, DataImpliedDoListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_dataImpliedDoList; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterDataImpliedDoList) {
			listener.enterDataImpliedDoList(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitDataImpliedDoList) {
			listener.exitDataImpliedDoList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitDataImpliedDoList) {
			return visitor.visitDataImpliedDoList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataImpliedDoListWhatContext extends ParserRuleContext {
	public varRef(): VarRefContext | undefined {
		return this.tryGetRuleContext(0, VarRefContext);
	}
	public dataImpliedDo(): DataImpliedDoContext | undefined {
		return this.tryGetRuleContext(0, DataImpliedDoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_dataImpliedDoListWhat; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterDataImpliedDoListWhat) {
			listener.enterDataImpliedDoListWhat(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitDataImpliedDoListWhat) {
			listener.exitDataImpliedDoListWhat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitDataImpliedDoListWhat) {
			return visitor.visitDataImpliedDoListWhat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GotoStatementContext extends ParserRuleContext {
	public to(): ToContext | undefined {
		return this.tryGetRuleContext(0, ToContext);
	}
	public unconditionalGoto(): UnconditionalGotoContext | undefined {
		return this.tryGetRuleContext(0, UnconditionalGotoContext);
	}
	public computedGoto(): ComputedGotoContext | undefined {
		return this.tryGetRuleContext(0, ComputedGotoContext);
	}
	public assignedGoto(): AssignedGotoContext | undefined {
		return this.tryGetRuleContext(0, AssignedGotoContext);
	}
	public GO(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.GO, 0); }
	public GOTO(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.GOTO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_gotoStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterGotoStatement) {
			listener.enterGotoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitGotoStatement) {
			listener.exitGotoStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitGotoStatement) {
			return visitor.visitGotoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnconditionalGotoContext extends ParserRuleContext {
	public lblRef(): LblRefContext {
		return this.getRuleContext(0, LblRefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_unconditionalGoto; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterUnconditionalGoto) {
			listener.enterUnconditionalGoto(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitUnconditionalGoto) {
			listener.exitUnconditionalGoto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitUnconditionalGoto) {
			return visitor.visitUnconditionalGoto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComputedGotoContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public labelList(): LabelListContext {
		return this.getRuleContext(0, LabelListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	public integerExpr(): IntegerExprContext {
		return this.getRuleContext(0, IntegerExprContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_computedGoto; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterComputedGoto) {
			listener.enterComputedGoto(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitComputedGoto) {
			listener.exitComputedGoto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitComputedGoto) {
			return visitor.visitComputedGoto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LblRefContext extends ParserRuleContext {
	public ICON(): TerminalNode { return this.getToken(Fortran77Parser.ICON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_lblRef; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterLblRef) {
			listener.enterLblRef(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitLblRef) {
			listener.exitLblRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitLblRef) {
			return visitor.visitLblRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelListContext extends ParserRuleContext {
	public lblRef(): LblRefContext[];
	public lblRef(i: number): LblRefContext;
	public lblRef(i?: number): LblRefContext | LblRefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LblRefContext);
		} else {
			return this.getRuleContext(i, LblRefContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_labelList; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterLabelList) {
			listener.enterLabelList(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitLabelList) {
			listener.exitLabelList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitLabelList) {
			return visitor.visitLabelList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignedGotoContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.LPAREN, 0); }
	public labelList(): LabelListContext | undefined {
		return this.tryGetRuleContext(0, LabelListContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.RPAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_assignedGoto; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterAssignedGoto) {
			listener.enterAssignedGoto(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitAssignedGoto) {
			listener.exitAssignedGoto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitAssignedGoto) {
			return visitor.visitAssignedGoto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(Fortran77Parser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public logicalExpression(): LogicalExpressionContext {
		return this.getRuleContext(0, LogicalExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	public blockIfStatement(): BlockIfStatementContext | undefined {
		return this.tryGetRuleContext(0, BlockIfStatementContext);
	}
	public logicalIfStatement(): LogicalIfStatementContext | undefined {
		return this.tryGetRuleContext(0, LogicalIfStatementContext);
	}
	public arithmeticIfStatement(): ArithmeticIfStatementContext | undefined {
		return this.tryGetRuleContext(0, ArithmeticIfStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArithmeticIfStatementContext extends ParserRuleContext {
	public lblRef(): LblRefContext[];
	public lblRef(i: number): LblRefContext;
	public lblRef(i?: number): LblRefContext | LblRefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LblRefContext);
		} else {
			return this.getRuleContext(i, LblRefContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_arithmeticIfStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterArithmeticIfStatement) {
			listener.enterArithmeticIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitArithmeticIfStatement) {
			listener.exitArithmeticIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitArithmeticIfStatement) {
			return visitor.visitArithmeticIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalIfStatementContext extends ParserRuleContext {
	public executableStatement(): ExecutableStatementContext {
		return this.getRuleContext(0, ExecutableStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_logicalIfStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterLogicalIfStatement) {
			listener.enterLogicalIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitLogicalIfStatement) {
			listener.exitLogicalIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitLogicalIfStatement) {
			return visitor.visitLogicalIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockIfStatementContext extends ParserRuleContext {
	public firstIfBlock(): FirstIfBlockContext {
		return this.getRuleContext(0, FirstIfBlockContext);
	}
	public endIfStatement(): EndIfStatementContext {
		return this.getRuleContext(0, EndIfStatementContext);
	}
	public elseIfStatement(): ElseIfStatementContext[];
	public elseIfStatement(i: number): ElseIfStatementContext;
	public elseIfStatement(i?: number): ElseIfStatementContext | ElseIfStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseIfStatementContext);
		} else {
			return this.getRuleContext(i, ElseIfStatementContext);
		}
	}
	public elseStatement(): ElseStatementContext | undefined {
		return this.tryGetRuleContext(0, ElseStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_blockIfStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterBlockIfStatement) {
			listener.enterBlockIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitBlockIfStatement) {
			listener.exitBlockIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitBlockIfStatement) {
			return visitor.visitBlockIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FirstIfBlockContext extends ParserRuleContext {
	public THEN(): TerminalNode { return this.getToken(Fortran77Parser.THEN, 0); }
	public wholeStatement(): WholeStatementContext[];
	public wholeStatement(i: number): WholeStatementContext;
	public wholeStatement(i?: number): WholeStatementContext | WholeStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WholeStatementContext);
		} else {
			return this.getRuleContext(i, WholeStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_firstIfBlock; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterFirstIfBlock) {
			listener.enterFirstIfBlock(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitFirstIfBlock) {
			listener.exitFirstIfBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitFirstIfBlock) {
			return visitor.visitFirstIfBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseIfStatementContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public logicalExpression(): LogicalExpressionContext {
		return this.getRuleContext(0, LogicalExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	public THEN(): TerminalNode { return this.getToken(Fortran77Parser.THEN, 0); }
	public ELSEIF(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ELSEIF, 0); }
	public wholeStatement(): WholeStatementContext[];
	public wholeStatement(i: number): WholeStatementContext;
	public wholeStatement(i?: number): WholeStatementContext | WholeStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WholeStatementContext);
		} else {
			return this.getRuleContext(i, WholeStatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ELSE, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.IF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_elseIfStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterElseIfStatement) {
			listener.enterElseIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitElseIfStatement) {
			listener.exitElseIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitElseIfStatement) {
			return visitor.visitElseIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseStatementContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(Fortran77Parser.ELSE, 0); }
	public wholeStatement(): WholeStatementContext[];
	public wholeStatement(i: number): WholeStatementContext;
	public wholeStatement(i?: number): WholeStatementContext | WholeStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WholeStatementContext);
		} else {
			return this.getRuleContext(i, WholeStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_elseStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterElseStatement) {
			listener.enterElseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitElseStatement) {
			listener.exitElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitElseStatement) {
			return visitor.visitElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndIfStatementContext extends ParserRuleContext {
	public ENDIF(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ENDIF, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.END, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.IF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_endIfStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterEndIfStatement) {
			listener.enterEndIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitEndIfStatement) {
			listener.exitEndIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitEndIfStatement) {
			return visitor.visitEndIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoStatementContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(Fortran77Parser.DO, 0); }
	public doWithLabel(): DoWithLabelContext | undefined {
		return this.tryGetRuleContext(0, DoWithLabelContext);
	}
	public doWithEndDo(): DoWithEndDoContext | undefined {
		return this.tryGetRuleContext(0, DoWithEndDoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_doStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterDoStatement) {
			listener.enterDoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitDoStatement) {
			listener.exitDoStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoVarArgsContext extends ParserRuleContext {
	public variableName(): VariableNameContext {
		return this.getRuleContext(0, VariableNameContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(Fortran77Parser.ASSIGN, 0); }
	public intRealDpExpr(): IntRealDpExprContext[];
	public intRealDpExpr(i: number): IntRealDpExprContext;
	public intRealDpExpr(i?: number): IntRealDpExprContext | IntRealDpExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntRealDpExprContext);
		} else {
			return this.getRuleContext(i, IntRealDpExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_doVarArgs; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterDoVarArgs) {
			listener.enterDoVarArgs(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitDoVarArgs) {
			listener.exitDoVarArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitDoVarArgs) {
			return visitor.visitDoVarArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoWithLabelContext extends ParserRuleContext {
	public lblRef(): LblRefContext {
		return this.getRuleContext(0, LblRefContext);
	}
	public doVarArgs(): DoVarArgsContext {
		return this.getRuleContext(0, DoVarArgsContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_doWithLabel; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterDoWithLabel) {
			listener.enterDoWithLabel(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitDoWithLabel) {
			listener.exitDoWithLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitDoWithLabel) {
			return visitor.visitDoWithLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoBodyContext extends ParserRuleContext {
	public wholeStatement(): WholeStatementContext[];
	public wholeStatement(i: number): WholeStatementContext;
	public wholeStatement(i?: number): WholeStatementContext | WholeStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WholeStatementContext);
		} else {
			return this.getRuleContext(i, WholeStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_doBody; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterDoBody) {
			listener.enterDoBody(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitDoBody) {
			listener.exitDoBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitDoBody) {
			return visitor.visitDoBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoWithEndDoContext extends ParserRuleContext {
	public doVarArgs(): DoVarArgsContext {
		return this.getRuleContext(0, DoVarArgsContext);
	}
	public doBody(): DoBodyContext {
		return this.getRuleContext(0, DoBodyContext);
	}
	public enddoStatement(): EnddoStatementContext {
		return this.getRuleContext(0, EnddoStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_doWithEndDo; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterDoWithEndDo) {
			listener.enterDoWithEndDo(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitDoWithEndDo) {
			listener.exitDoWithEndDo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitDoWithEndDo) {
			return visitor.visitDoWithEndDo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnddoStatementContext extends ParserRuleContext {
	public ENDDO(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ENDDO, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.END, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.DO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_enddoStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterEnddoStatement) {
			listener.enterEnddoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitEnddoStatement) {
			listener.exitEnddoStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitEnddoStatement) {
			return visitor.visitEnddoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(Fortran77Parser.CONTINUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StopStatementContext extends ParserRuleContext {
	public STOP(): TerminalNode { return this.getToken(Fortran77Parser.STOP, 0); }
	public ICON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ICON, 0); }
	public HOLLERITH(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.HOLLERITH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_stopStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterStopStatement) {
			listener.enterStopStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitStopStatement) {
			listener.exitStopStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitStopStatement) {
			return visitor.visitStopStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PauseStatementContext extends ParserRuleContext {
	public PAUSE(): TerminalNode { return this.getToken(Fortran77Parser.PAUSE, 0); }
	public ICON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ICON, 0); }
	public HOLLERITH(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.HOLLERITH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_pauseStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterPauseStatement) {
			listener.enterPauseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitPauseStatement) {
			listener.exitPauseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitPauseStatement) {
			return visitor.visitPauseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WriteStatementContext extends ParserRuleContext {
	public WRITE(): TerminalNode { return this.getToken(Fortran77Parser.WRITE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public controlInfoList(): ControlInfoListContext {
		return this.getRuleContext(0, ControlInfoListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	public ioList(): IoListContext[];
	public ioList(i: number): IoListContext;
	public ioList(i?: number): IoListContext | IoListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IoListContext);
		} else {
			return this.getRuleContext(i, IoListContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_writeStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterWriteStatement) {
			listener.enterWriteStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitWriteStatement) {
			listener.exitWriteStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitWriteStatement) {
			return visitor.visitWriteStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReadStatementContext extends ParserRuleContext {
	public READ(): TerminalNode { return this.getToken(Fortran77Parser.READ, 0); }
	public formatIdentifier(): FormatIdentifierContext | undefined {
		return this.tryGetRuleContext(0, FormatIdentifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	public ioList(): IoListContext[];
	public ioList(i: number): IoListContext;
	public ioList(i?: number): IoListContext | IoListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IoListContext);
		} else {
			return this.getRuleContext(i, IoListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_readStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterReadStatement) {
			listener.enterReadStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitReadStatement) {
			listener.exitReadStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitReadStatement) {
			return visitor.visitReadStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintStatementContext extends ParserRuleContext {
	public PRINT(): TerminalNode { return this.getToken(Fortran77Parser.PRINT, 0); }
	public formatIdentifier(): FormatIdentifierContext | undefined {
		return this.tryGetRuleContext(0, FormatIdentifierContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	public ioList(): IoListContext[];
	public ioList(i: number): IoListContext;
	public ioList(i?: number): IoListContext | IoListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IoListContext);
		} else {
			return this.getRuleContext(i, IoListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_printStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterPrintStatement) {
			listener.enterPrintStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitPrintStatement) {
			listener.exitPrintStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitPrintStatement) {
			return visitor.visitPrintStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentStatementContext extends ParserRuleContext {
	public varRef(): VarRefContext {
		return this.getRuleContext(0, VarRefContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(Fortran77Parser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_assignmentStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterAssignmentStatement) {
			listener.enterAssignmentStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitAssignmentStatement) {
			listener.exitAssignmentStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitAssignmentStatement) {
			return visitor.visitAssignmentStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlInfoListContext extends ParserRuleContext {
	public controlInfoListItem(): ControlInfoListItemContext[];
	public controlInfoListItem(i: number): ControlInfoListItemContext;
	public controlInfoListItem(i?: number): ControlInfoListItemContext | ControlInfoListItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ControlInfoListItemContext);
		} else {
			return this.getRuleContext(i, ControlInfoListItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlInfoList; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlInfoList) {
			listener.enterControlInfoList(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlInfoList) {
			listener.exitControlInfoList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlInfoList) {
			return visitor.visitControlInfoList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlErrSpecContext extends ParserRuleContext {
	public controlErr(): ControlErrContext {
		return this.getRuleContext(0, ControlErrContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(Fortran77Parser.ASSIGN, 0); }
	public lblRef(): LblRefContext | undefined {
		return this.tryGetRuleContext(0, LblRefContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlErrSpec; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlErrSpec) {
			listener.enterControlErrSpec(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlErrSpec) {
			listener.exitControlErrSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlErrSpec) {
			return visitor.visitControlErrSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlInfoListItemContext extends ParserRuleContext {
	public unitIdentifier(): UnitIdentifierContext | undefined {
		return this.tryGetRuleContext(0, UnitIdentifierContext);
	}
	public HOLLERITH(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.HOLLERITH, 0); }
	public SCON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.SCON, 0); }
	public controlFmt(): ControlFmtContext | undefined {
		return this.tryGetRuleContext(0, ControlFmtContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ASSIGN, 0); }
	public formatIdentifier(): FormatIdentifierContext | undefined {
		return this.tryGetRuleContext(0, FormatIdentifierContext);
	}
	public controlUnit(): ControlUnitContext | undefined {
		return this.tryGetRuleContext(0, ControlUnitContext);
	}
	public controlRec(): ControlRecContext | undefined {
		return this.tryGetRuleContext(0, ControlRecContext);
	}
	public integerExpr(): IntegerExprContext | undefined {
		return this.tryGetRuleContext(0, IntegerExprContext);
	}
	public controlEnd(): ControlEndContext | undefined {
		return this.tryGetRuleContext(0, ControlEndContext);
	}
	public lblRef(): LblRefContext | undefined {
		return this.tryGetRuleContext(0, LblRefContext);
	}
	public controlErrSpec(): ControlErrSpecContext | undefined {
		return this.tryGetRuleContext(0, ControlErrSpecContext);
	}
	public controlIostat(): ControlIostatContext | undefined {
		return this.tryGetRuleContext(0, ControlIostatContext);
	}
	public varRef(): VarRefContext | undefined {
		return this.tryGetRuleContext(0, VarRefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlInfoListItem; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlInfoListItem) {
			listener.enterControlInfoListItem(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlInfoListItem) {
			listener.exitControlInfoListItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlInfoListItem) {
			return visitor.visitControlInfoListItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IoListContext extends ParserRuleContext {
	public ioListItem(): IoListItemContext[];
	public ioListItem(i: number): IoListItemContext;
	public ioListItem(i?: number): IoListItemContext | IoListItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IoListItemContext);
		} else {
			return this.getRuleContext(i, IoListItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.NAME, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ASSIGN, 0); }
	public ioList(): IoListContext | undefined {
		return this.tryGetRuleContext(0, IoListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_ioList; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterIoList) {
			listener.enterIoList(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitIoList) {
			listener.exitIoList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitIoList) {
			return visitor.visitIoList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IoListItemContext extends ParserRuleContext {
	public ioImpliedDoList(): IoImpliedDoListContext | undefined {
		return this.tryGetRuleContext(0, IoImpliedDoListContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.LPAREN, 0); }
	public ioList(): IoListContext | undefined {
		return this.tryGetRuleContext(0, IoListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.COMMA, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.NAME, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_ioListItem; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterIoListItem) {
			listener.enterIoListItem(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitIoListItem) {
			listener.exitIoListItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitIoListItem) {
			return visitor.visitIoListItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IoImpliedDoListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public ioList(): IoListContext {
		return this.getRuleContext(0, IoListContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(Fortran77Parser.ASSIGN, 0); }
	public intRealDpExpr(): IntRealDpExprContext[];
	public intRealDpExpr(i: number): IntRealDpExprContext;
	public intRealDpExpr(i?: number): IntRealDpExprContext | IntRealDpExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntRealDpExprContext);
		} else {
			return this.getRuleContext(i, IntRealDpExprContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_ioImpliedDoList; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterIoImpliedDoList) {
			listener.enterIoImpliedDoList(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitIoImpliedDoList) {
			listener.exitIoImpliedDoList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitIoImpliedDoList) {
			return visitor.visitIoImpliedDoList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpenStatementContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(Fortran77Parser.OPEN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public openControl(): OpenControlContext[];
	public openControl(i: number): OpenControlContext;
	public openControl(i?: number): OpenControlContext | OpenControlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OpenControlContext);
		} else {
			return this.getRuleContext(i, OpenControlContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_openStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterOpenStatement) {
			listener.enterOpenStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitOpenStatement) {
			listener.exitOpenStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitOpenStatement) {
			return visitor.visitOpenStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpenControlContext extends ParserRuleContext {
	public unitIdentifier(): UnitIdentifierContext | undefined {
		return this.tryGetRuleContext(0, UnitIdentifierContext);
	}
	public controlUnit(): ControlUnitContext | undefined {
		return this.tryGetRuleContext(0, ControlUnitContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ASSIGN, 0); }
	public controlErrSpec(): ControlErrSpecContext | undefined {
		return this.tryGetRuleContext(0, ControlErrSpecContext);
	}
	public controlFile(): ControlFileContext | undefined {
		return this.tryGetRuleContext(0, ControlFileContext);
	}
	public characterExpression(): CharacterExpressionContext | undefined {
		return this.tryGetRuleContext(0, CharacterExpressionContext);
	}
	public controlStatus(): ControlStatusContext | undefined {
		return this.tryGetRuleContext(0, ControlStatusContext);
	}
	public controlAccess(): ControlAccessContext | undefined {
		return this.tryGetRuleContext(0, ControlAccessContext);
	}
	public controlPosition(): ControlPositionContext | undefined {
		return this.tryGetRuleContext(0, ControlPositionContext);
	}
	public controlForm(): ControlFormContext | undefined {
		return this.tryGetRuleContext(0, ControlFormContext);
	}
	public controlRecl(): ControlReclContext | undefined {
		return this.tryGetRuleContext(0, ControlReclContext);
	}
	public integerExpr(): IntegerExprContext | undefined {
		return this.tryGetRuleContext(0, IntegerExprContext);
	}
	public controlBlank(): ControlBlankContext | undefined {
		return this.tryGetRuleContext(0, ControlBlankContext);
	}
	public controlIostat(): ControlIostatContext | undefined {
		return this.tryGetRuleContext(0, ControlIostatContext);
	}
	public varRef(): VarRefContext | undefined {
		return this.tryGetRuleContext(0, VarRefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_openControl; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterOpenControl) {
			listener.enterOpenControl(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitOpenControl) {
			listener.exitOpenControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitOpenControl) {
			return visitor.visitOpenControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlFmtContext extends ParserRuleContext {
	public FMT(): TerminalNode { return this.getToken(Fortran77Parser.FMT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlFmt; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlFmt) {
			listener.enterControlFmt(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlFmt) {
			listener.exitControlFmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlFmt) {
			return visitor.visitControlFmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlUnitContext extends ParserRuleContext {
	public UNIT(): TerminalNode { return this.getToken(Fortran77Parser.UNIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlUnit; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlUnit) {
			listener.enterControlUnit(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlUnit) {
			listener.exitControlUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlUnit) {
			return visitor.visitControlUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlRecContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlRec; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlRec) {
			listener.enterControlRec(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlRec) {
			listener.exitControlRec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlRec) {
			return visitor.visitControlRec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlEndContext extends ParserRuleContext {
	public END(): TerminalNode { return this.getToken(Fortran77Parser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlEnd; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlEnd) {
			listener.enterControlEnd(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlEnd) {
			listener.exitControlEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlEnd) {
			return visitor.visitControlEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlErrContext extends ParserRuleContext {
	public ERR(): TerminalNode { return this.getToken(Fortran77Parser.ERR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlErr; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlErr) {
			listener.enterControlErr(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlErr) {
			listener.exitControlErr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlErr) {
			return visitor.visitControlErr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlIostatContext extends ParserRuleContext {
	public IOSTART(): TerminalNode { return this.getToken(Fortran77Parser.IOSTART, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlIostat; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlIostat) {
			listener.enterControlIostat(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlIostat) {
			listener.exitControlIostat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlIostat) {
			return visitor.visitControlIostat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlFileContext extends ParserRuleContext {
	public FILE(): TerminalNode { return this.getToken(Fortran77Parser.FILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlFile; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlFile) {
			listener.enterControlFile(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlFile) {
			listener.exitControlFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlFile) {
			return visitor.visitControlFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlStatusContext extends ParserRuleContext {
	public STATUS(): TerminalNode { return this.getToken(Fortran77Parser.STATUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlStatus; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlStatus) {
			listener.enterControlStatus(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlStatus) {
			listener.exitControlStatus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlStatus) {
			return visitor.visitControlStatus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlAccessContext extends ParserRuleContext {
	public ACCESS(): TerminalNode { return this.getToken(Fortran77Parser.ACCESS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlAccess; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlAccess) {
			listener.enterControlAccess(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlAccess) {
			listener.exitControlAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlAccess) {
			return visitor.visitControlAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlPositionContext extends ParserRuleContext {
	public POSITION(): TerminalNode { return this.getToken(Fortran77Parser.POSITION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlPosition; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlPosition) {
			listener.enterControlPosition(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlPosition) {
			listener.exitControlPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlPosition) {
			return visitor.visitControlPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlFormContext extends ParserRuleContext {
	public FORM(): TerminalNode { return this.getToken(Fortran77Parser.FORM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlForm; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlForm) {
			listener.enterControlForm(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlForm) {
			listener.exitControlForm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlForm) {
			return visitor.visitControlForm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlReclContext extends ParserRuleContext {
	public RECL(): TerminalNode { return this.getToken(Fortran77Parser.RECL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlRecl; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlRecl) {
			listener.enterControlRecl(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlRecl) {
			listener.exitControlRecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlRecl) {
			return visitor.visitControlRecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlBlankContext extends ParserRuleContext {
	public BLANK(): TerminalNode { return this.getToken(Fortran77Parser.BLANK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlBlank; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlBlank) {
			listener.enterControlBlank(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlBlank) {
			listener.exitControlBlank(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlBlank) {
			return visitor.visitControlBlank(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlExistContext extends ParserRuleContext {
	public EXIST(): TerminalNode { return this.getToken(Fortran77Parser.EXIST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlExist; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlExist) {
			listener.enterControlExist(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlExist) {
			listener.exitControlExist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlExist) {
			return visitor.visitControlExist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlOpenedContext extends ParserRuleContext {
	public OPENED(): TerminalNode { return this.getToken(Fortran77Parser.OPENED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlOpened; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlOpened) {
			listener.enterControlOpened(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlOpened) {
			listener.exitControlOpened(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlOpened) {
			return visitor.visitControlOpened(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlNumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(Fortran77Parser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlNumber; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlNumber) {
			listener.enterControlNumber(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlNumber) {
			listener.exitControlNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlNumber) {
			return visitor.visitControlNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlNamedContext extends ParserRuleContext {
	public NAMED(): TerminalNode { return this.getToken(Fortran77Parser.NAMED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlNamed; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlNamed) {
			listener.enterControlNamed(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlNamed) {
			listener.exitControlNamed(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlNamed) {
			return visitor.visitControlNamed(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlName; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlName) {
			listener.enterControlName(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlName) {
			listener.exitControlName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlName) {
			return visitor.visitControlName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlSequentialContext extends ParserRuleContext {
	public SEQUENTIAL(): TerminalNode { return this.getToken(Fortran77Parser.SEQUENTIAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlSequential; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlSequential) {
			listener.enterControlSequential(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlSequential) {
			listener.exitControlSequential(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlSequential) {
			return visitor.visitControlSequential(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlDirectContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlDirect; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlDirect) {
			listener.enterControlDirect(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlDirect) {
			listener.exitControlDirect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlDirect) {
			return visitor.visitControlDirect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlFormattedContext extends ParserRuleContext {
	public FORMATTED(): TerminalNode { return this.getToken(Fortran77Parser.FORMATTED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlFormatted; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlFormatted) {
			listener.enterControlFormatted(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlFormatted) {
			listener.exitControlFormatted(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlFormatted) {
			return visitor.visitControlFormatted(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlUnformattedContext extends ParserRuleContext {
	public UNFORMATTED(): TerminalNode { return this.getToken(Fortran77Parser.UNFORMATTED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlUnformatted; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlUnformatted) {
			listener.enterControlUnformatted(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlUnformatted) {
			listener.exitControlUnformatted(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlUnformatted) {
			return visitor.visitControlUnformatted(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlNextrecContext extends ParserRuleContext {
	public NEXTREC(): TerminalNode { return this.getToken(Fortran77Parser.NEXTREC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_controlNextrec; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterControlNextrec) {
			listener.enterControlNextrec(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitControlNextrec) {
			listener.exitControlNextrec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitControlNextrec) {
			return visitor.visitControlNextrec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CloseStatementContext extends ParserRuleContext {
	public CLOSE(): TerminalNode { return this.getToken(Fortran77Parser.CLOSE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public closeControl(): CloseControlContext[];
	public closeControl(i: number): CloseControlContext;
	public closeControl(i?: number): CloseControlContext | CloseControlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CloseControlContext);
		} else {
			return this.getRuleContext(i, CloseControlContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_closeStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterCloseStatement) {
			listener.enterCloseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitCloseStatement) {
			listener.exitCloseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitCloseStatement) {
			return visitor.visitCloseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CloseControlContext extends ParserRuleContext {
	public unitIdentifier(): UnitIdentifierContext | undefined {
		return this.tryGetRuleContext(0, UnitIdentifierContext);
	}
	public controlUnit(): ControlUnitContext | undefined {
		return this.tryGetRuleContext(0, ControlUnitContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ASSIGN, 0); }
	public controlErrSpec(): ControlErrSpecContext | undefined {
		return this.tryGetRuleContext(0, ControlErrSpecContext);
	}
	public controlStatus(): ControlStatusContext | undefined {
		return this.tryGetRuleContext(0, ControlStatusContext);
	}
	public characterExpression(): CharacterExpressionContext | undefined {
		return this.tryGetRuleContext(0, CharacterExpressionContext);
	}
	public controlIostat(): ControlIostatContext | undefined {
		return this.tryGetRuleContext(0, ControlIostatContext);
	}
	public varRef(): VarRefContext | undefined {
		return this.tryGetRuleContext(0, VarRefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_closeControl; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterCloseControl) {
			listener.enterCloseControl(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitCloseControl) {
			listener.exitCloseControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitCloseControl) {
			return visitor.visitCloseControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InquireStatementContext extends ParserRuleContext {
	public INQUIRE(): TerminalNode { return this.getToken(Fortran77Parser.INQUIRE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public inquireControl(): InquireControlContext[];
	public inquireControl(i: number): InquireControlContext;
	public inquireControl(i?: number): InquireControlContext | InquireControlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InquireControlContext);
		} else {
			return this.getRuleContext(i, InquireControlContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_inquireStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterInquireStatement) {
			listener.enterInquireStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitInquireStatement) {
			listener.exitInquireStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitInquireStatement) {
			return visitor.visitInquireStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InquireControlContext extends ParserRuleContext {
	public controlUnit(): ControlUnitContext | undefined {
		return this.tryGetRuleContext(0, ControlUnitContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ASSIGN, 0); }
	public unitIdentifier(): UnitIdentifierContext | undefined {
		return this.tryGetRuleContext(0, UnitIdentifierContext);
	}
	public controlFile(): ControlFileContext | undefined {
		return this.tryGetRuleContext(0, ControlFileContext);
	}
	public characterExpression(): CharacterExpressionContext | undefined {
		return this.tryGetRuleContext(0, CharacterExpressionContext);
	}
	public controlErrSpec(): ControlErrSpecContext | undefined {
		return this.tryGetRuleContext(0, ControlErrSpecContext);
	}
	public varRef(): VarRefContext | undefined {
		return this.tryGetRuleContext(0, VarRefContext);
	}
	public controlIostat(): ControlIostatContext | undefined {
		return this.tryGetRuleContext(0, ControlIostatContext);
	}
	public controlExist(): ControlExistContext | undefined {
		return this.tryGetRuleContext(0, ControlExistContext);
	}
	public controlOpened(): ControlOpenedContext | undefined {
		return this.tryGetRuleContext(0, ControlOpenedContext);
	}
	public controlNumber(): ControlNumberContext | undefined {
		return this.tryGetRuleContext(0, ControlNumberContext);
	}
	public controlNamed(): ControlNamedContext | undefined {
		return this.tryGetRuleContext(0, ControlNamedContext);
	}
	public controlName(): ControlNameContext | undefined {
		return this.tryGetRuleContext(0, ControlNameContext);
	}
	public controlAccess(): ControlAccessContext | undefined {
		return this.tryGetRuleContext(0, ControlAccessContext);
	}
	public controlSequential(): ControlSequentialContext | undefined {
		return this.tryGetRuleContext(0, ControlSequentialContext);
	}
	public controlDirect(): ControlDirectContext | undefined {
		return this.tryGetRuleContext(0, ControlDirectContext);
	}
	public controlForm(): ControlFormContext | undefined {
		return this.tryGetRuleContext(0, ControlFormContext);
	}
	public controlFormatted(): ControlFormattedContext | undefined {
		return this.tryGetRuleContext(0, ControlFormattedContext);
	}
	public controlUnformatted(): ControlUnformattedContext | undefined {
		return this.tryGetRuleContext(0, ControlUnformattedContext);
	}
	public controlRecl(): ControlReclContext | undefined {
		return this.tryGetRuleContext(0, ControlReclContext);
	}
	public controlNextrec(): ControlNextrecContext | undefined {
		return this.tryGetRuleContext(0, ControlNextrecContext);
	}
	public controlBlank(): ControlBlankContext | undefined {
		return this.tryGetRuleContext(0, ControlBlankContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_inquireControl; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterInquireControl) {
			listener.enterInquireControl(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitInquireControl) {
			listener.exitInquireControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitInquireControl) {
			return visitor.visitInquireControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BackspaceStatementContext extends ParserRuleContext {
	public BACKSPACE(): TerminalNode { return this.getToken(Fortran77Parser.BACKSPACE, 0); }
	public berFinish(): BerFinishContext {
		return this.getRuleContext(0, BerFinishContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_backspaceStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterBackspaceStatement) {
			listener.enterBackspaceStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitBackspaceStatement) {
			listener.exitBackspaceStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitBackspaceStatement) {
			return visitor.visitBackspaceStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndfileStatementContext extends ParserRuleContext {
	public ENDFILE(): TerminalNode { return this.getToken(Fortran77Parser.ENDFILE, 0); }
	public berFinish(): BerFinishContext {
		return this.getRuleContext(0, BerFinishContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_endfileStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterEndfileStatement) {
			listener.enterEndfileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitEndfileStatement) {
			listener.exitEndfileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitEndfileStatement) {
			return visitor.visitEndfileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RewindStatementContext extends ParserRuleContext {
	public REWIND(): TerminalNode { return this.getToken(Fortran77Parser.REWIND, 0); }
	public berFinish(): BerFinishContext {
		return this.getRuleContext(0, BerFinishContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_rewindStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterRewindStatement) {
			listener.enterRewindStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitRewindStatement) {
			listener.exitRewindStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitRewindStatement) {
			return visitor.visitRewindStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BerFinishContext extends ParserRuleContext {
	public unitIdentifier(): UnitIdentifierContext[];
	public unitIdentifier(i: number): UnitIdentifierContext;
	public unitIdentifier(i?: number): UnitIdentifierContext | UnitIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnitIdentifierContext);
		} else {
			return this.getRuleContext(i, UnitIdentifierContext);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.LPAREN, 0); }
	public berFinishItem(): BerFinishItemContext[];
	public berFinishItem(i: number): BerFinishItemContext;
	public berFinishItem(i?: number): BerFinishItemContext | BerFinishItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BerFinishItemContext);
		} else {
			return this.getRuleContext(i, BerFinishItemContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_berFinish; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterBerFinish) {
			listener.enterBerFinish(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitBerFinish) {
			listener.exitBerFinish(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitBerFinish) {
			return visitor.visitBerFinish(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BerFinishItemContext extends ParserRuleContext {
	public unitIdentifier(): UnitIdentifierContext | undefined {
		return this.tryGetRuleContext(0, UnitIdentifierContext);
	}
	public controlUnit(): ControlUnitContext | undefined {
		return this.tryGetRuleContext(0, ControlUnitContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ASSIGN, 0); }
	public controlErrSpec(): ControlErrSpecContext | undefined {
		return this.tryGetRuleContext(0, ControlErrSpecContext);
	}
	public controlIostat(): ControlIostatContext | undefined {
		return this.tryGetRuleContext(0, ControlIostatContext);
	}
	public varRef(): VarRefContext | undefined {
		return this.tryGetRuleContext(0, VarRefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_berFinishItem; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterBerFinishItem) {
			listener.enterBerFinishItem(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitBerFinishItem) {
			listener.exitBerFinishItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitBerFinishItem) {
			return visitor.visitBerFinishItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnitIdentifierContext extends ParserRuleContext {
	public iexpr(): IexprContext | undefined {
		return this.tryGetRuleContext(0, IexprContext);
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.STAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_unitIdentifier; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterUnitIdentifier) {
			listener.enterUnitIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitUnitIdentifier) {
			listener.exitUnitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitUnitIdentifier) {
			return visitor.visitUnitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormatIdentifierContext extends ParserRuleContext {
	public SCON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.SCON, 0); }
	public HOLLERITH(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.HOLLERITH, 0); }
	public iexpr(): IexprContext | undefined {
		return this.tryGetRuleContext(0, IexprContext);
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.STAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_formatIdentifier; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterFormatIdentifier) {
			listener.enterFormatIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitFormatIdentifier) {
			listener.exitFormatIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitFormatIdentifier) {
			return visitor.visitFormatIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormatStatementContext extends ParserRuleContext {
	public FORMAT(): TerminalNode { return this.getToken(Fortran77Parser.FORMAT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public fmtSpec(): FmtSpecContext {
		return this.getRuleContext(0, FmtSpecContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_formatStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterFormatStatement) {
			listener.enterFormatStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitFormatStatement) {
			listener.exitFormatStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitFormatStatement) {
			return visitor.visitFormatStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FmtSpecContext extends ParserRuleContext {
	public formatedit(): FormateditContext[];
	public formatedit(i: number): FormateditContext;
	public formatedit(i?: number): FormateditContext | FormateditContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormateditContext);
		} else {
			return this.getRuleContext(i, FormateditContext);
		}
	}
	public formatsep(): FormatsepContext[];
	public formatsep(i: number): FormatsepContext;
	public formatsep(i?: number): FormatsepContext | FormatsepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormatsepContext);
		} else {
			return this.getRuleContext(i, FormatsepContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_fmtSpec; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterFmtSpec) {
			listener.enterFmtSpec(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitFmtSpec) {
			listener.exitFmtSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitFmtSpec) {
			return visitor.visitFmtSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormatsepContext extends ParserRuleContext {
	public DIV(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.DIV, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.COLON, 0); }
	public DOLLAR(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.DOLLAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_formatsep; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterFormatsep) {
			listener.enterFormatsep(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitFormatsep) {
			listener.exitFormatsep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitFormatsep) {
			return visitor.visitFormatsep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormateditContext extends ParserRuleContext {
	public XCON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.XCON, 0); }
	public editElement(): EditElementContext | undefined {
		return this.tryGetRuleContext(0, EditElementContext);
	}
	public ICON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ICON, 0); }
	public PCON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.PCON, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_formatedit; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterFormatedit) {
			listener.enterFormatedit(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitFormatedit) {
			listener.exitFormatedit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitFormatedit) {
			return visitor.visitFormatedit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EditElementContext extends ParserRuleContext {
	public FCON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.FCON, 0); }
	public SCON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.SCON, 0); }
	public HOLLERITH(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.HOLLERITH, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.NAME, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.LPAREN, 0); }
	public fmtSpec(): FmtSpecContext | undefined {
		return this.tryGetRuleContext(0, FmtSpecContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_editElement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterEditElement) {
			listener.enterEditElement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitEditElement) {
			listener.exitEditElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitEditElement) {
			return visitor.visitEditElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementFunctionStatementContext extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(Fortran77Parser.LET, 0); }
	public sfArgs(): SfArgsContext {
		return this.getRuleContext(0, SfArgsContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(Fortran77Parser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_statementFunctionStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterStatementFunctionStatement) {
			listener.enterStatementFunctionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitStatementFunctionStatement) {
			listener.exitStatementFunctionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitStatementFunctionStatement) {
			return visitor.visitStatementFunctionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SfArgsContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public namelist(): NamelistContext {
		return this.getRuleContext(0, NamelistContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_sfArgs; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterSfArgs) {
			listener.enterSfArgs(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitSfArgs) {
			listener.exitSfArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitSfArgs) {
			return visitor.visitSfArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallStatementContext extends ParserRuleContext {
	public CALL(): TerminalNode { return this.getToken(Fortran77Parser.CALL, 0); }
	public subroutineCall(): SubroutineCallContext {
		return this.getRuleContext(0, SubroutineCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_callStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterCallStatement) {
			listener.enterCallStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitCallStatement) {
			listener.exitCallStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitCallStatement) {
			return visitor.visitCallStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubroutineCallContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.RPAREN, 0); }
	public callArgumentList(): CallArgumentListContext | undefined {
		return this.tryGetRuleContext(0, CallArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_subroutineCall; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterSubroutineCall) {
			listener.enterSubroutineCall(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitSubroutineCall) {
			listener.exitSubroutineCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitSubroutineCall) {
			return visitor.visitSubroutineCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallArgumentListContext extends ParserRuleContext {
	public callArgument(): CallArgumentContext[];
	public callArgument(i: number): CallArgumentContext;
	public callArgument(i?: number): CallArgumentContext | CallArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CallArgumentContext);
		} else {
			return this.getRuleContext(i, CallArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_callArgumentList; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterCallArgumentList) {
			listener.enterCallArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitCallArgumentList) {
			listener.exitCallArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitCallArgumentList) {
			return visitor.visitCallArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallArgumentContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.STAR, 0); }
	public lblRef(): LblRefContext | undefined {
		return this.tryGetRuleContext(0, LblRefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_callArgument; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterCallArgument) {
			listener.enterCallArgument(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitCallArgument) {
			listener.exitCallArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitCallArgument) {
			return visitor.visitCallArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(Fortran77Parser.RETURN, 0); }
	public integerExpr(): IntegerExprContext | undefined {
		return this.tryGetRuleContext(0, IntegerExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public ncExpr(): NcExprContext[];
	public ncExpr(i: number): NcExprContext;
	public ncExpr(i?: number): NcExprContext | NcExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NcExprContext);
		} else {
			return this.getRuleContext(i, NcExprContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_expression; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NcExprContext extends ParserRuleContext {
	public lexpr0(): Lexpr0Context[];
	public lexpr0(i: number): Lexpr0Context;
	public lexpr0(i?: number): Lexpr0Context | Lexpr0Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Lexpr0Context);
		} else {
			return this.getRuleContext(i, Lexpr0Context);
		}
	}
	public concatOp(): ConcatOpContext[];
	public concatOp(i: number): ConcatOpContext;
	public concatOp(i?: number): ConcatOpContext | ConcatOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConcatOpContext);
		} else {
			return this.getRuleContext(i, ConcatOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_ncExpr; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterNcExpr) {
			listener.enterNcExpr(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitNcExpr) {
			listener.exitNcExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitNcExpr) {
			return visitor.visitNcExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lexpr0Context extends ParserRuleContext {
	public lexpr1(): Lexpr1Context[];
	public lexpr1(i: number): Lexpr1Context;
	public lexpr1(i?: number): Lexpr1Context | Lexpr1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Lexpr1Context);
		} else {
			return this.getRuleContext(i, Lexpr1Context);
		}
	}
	public NEQV(): TerminalNode[];
	public NEQV(i: number): TerminalNode;
	public NEQV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.NEQV);
		} else {
			return this.getToken(Fortran77Parser.NEQV, i);
		}
	}
	public EQV(): TerminalNode[];
	public EQV(i: number): TerminalNode;
	public EQV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.EQV);
		} else {
			return this.getToken(Fortran77Parser.EQV, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_lexpr0; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterLexpr0) {
			listener.enterLexpr0(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitLexpr0) {
			listener.exitLexpr0(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitLexpr0) {
			return visitor.visitLexpr0(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lexpr1Context extends ParserRuleContext {
	public lexpr2(): Lexpr2Context[];
	public lexpr2(i: number): Lexpr2Context;
	public lexpr2(i?: number): Lexpr2Context | Lexpr2Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Lexpr2Context);
		} else {
			return this.getRuleContext(i, Lexpr2Context);
		}
	}
	public LOR(): TerminalNode[];
	public LOR(i: number): TerminalNode;
	public LOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.LOR);
		} else {
			return this.getToken(Fortran77Parser.LOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_lexpr1; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterLexpr1) {
			listener.enterLexpr1(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitLexpr1) {
			listener.exitLexpr1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitLexpr1) {
			return visitor.visitLexpr1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lexpr2Context extends ParserRuleContext {
	public lexpr3(): Lexpr3Context[];
	public lexpr3(i: number): Lexpr3Context;
	public lexpr3(i?: number): Lexpr3Context | Lexpr3Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Lexpr3Context);
		} else {
			return this.getRuleContext(i, Lexpr3Context);
		}
	}
	public LAND(): TerminalNode[];
	public LAND(i: number): TerminalNode;
	public LAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.LAND);
		} else {
			return this.getToken(Fortran77Parser.LAND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_lexpr2; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterLexpr2) {
			listener.enterLexpr2(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitLexpr2) {
			listener.exitLexpr2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitLexpr2) {
			return visitor.visitLexpr2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lexpr3Context extends ParserRuleContext {
	public LNOT(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.LNOT, 0); }
	public lexpr3(): Lexpr3Context | undefined {
		return this.tryGetRuleContext(0, Lexpr3Context);
	}
	public lexpr4(): Lexpr4Context | undefined {
		return this.tryGetRuleContext(0, Lexpr4Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_lexpr3; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterLexpr3) {
			listener.enterLexpr3(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitLexpr3) {
			listener.exitLexpr3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitLexpr3) {
			return visitor.visitLexpr3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lexpr4Context extends ParserRuleContext {
	public aexpr0(): Aexpr0Context[];
	public aexpr0(i: number): Aexpr0Context;
	public aexpr0(i?: number): Aexpr0Context | Aexpr0Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Aexpr0Context);
		} else {
			return this.getRuleContext(i, Aexpr0Context);
		}
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.LT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.LE, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.EQ, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.NE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.GT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.GE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_lexpr4; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterLexpr4) {
			listener.enterLexpr4(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitLexpr4) {
			listener.exitLexpr4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitLexpr4) {
			return visitor.visitLexpr4(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Aexpr0Context extends ParserRuleContext {
	public aexpr1(): Aexpr1Context[];
	public aexpr1(i: number): Aexpr1Context;
	public aexpr1(i?: number): Aexpr1Context | Aexpr1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Aexpr1Context);
		} else {
			return this.getRuleContext(i, Aexpr1Context);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.PLUS);
		} else {
			return this.getToken(Fortran77Parser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.MINUS);
		} else {
			return this.getToken(Fortran77Parser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_aexpr0; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterAexpr0) {
			listener.enterAexpr0(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitAexpr0) {
			listener.exitAexpr0(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitAexpr0) {
			return visitor.visitAexpr0(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Aexpr1Context extends ParserRuleContext {
	public aexpr2(): Aexpr2Context[];
	public aexpr2(i: number): Aexpr2Context;
	public aexpr2(i?: number): Aexpr2Context | Aexpr2Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Aexpr2Context);
		} else {
			return this.getRuleContext(i, Aexpr2Context);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.STAR);
		} else {
			return this.getToken(Fortran77Parser.STAR, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.DIV);
		} else {
			return this.getToken(Fortran77Parser.DIV, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_aexpr1; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterAexpr1) {
			listener.enterAexpr1(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitAexpr1) {
			listener.exitAexpr1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitAexpr1) {
			return visitor.visitAexpr1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Aexpr2Context extends ParserRuleContext {
	public aexpr3(): Aexpr3Context {
		return this.getRuleContext(0, Aexpr3Context);
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.PLUS);
		} else {
			return this.getToken(Fortran77Parser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.MINUS);
		} else {
			return this.getToken(Fortran77Parser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_aexpr2; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterAexpr2) {
			listener.enterAexpr2(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitAexpr2) {
			listener.exitAexpr2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitAexpr2) {
			return visitor.visitAexpr2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Aexpr3Context extends ParserRuleContext {
	public aexpr4(): Aexpr4Context[];
	public aexpr4(i: number): Aexpr4Context;
	public aexpr4(i?: number): Aexpr4Context | Aexpr4Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Aexpr4Context);
		} else {
			return this.getRuleContext(i, Aexpr4Context);
		}
	}
	public POWER(): TerminalNode[];
	public POWER(i: number): TerminalNode;
	public POWER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.POWER);
		} else {
			return this.getToken(Fortran77Parser.POWER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_aexpr3; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterAexpr3) {
			listener.enterAexpr3(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitAexpr3) {
			listener.exitAexpr3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitAexpr3) {
			return visitor.visitAexpr3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Aexpr4Context extends ParserRuleContext {
	public unsignedArithmeticConstant(): UnsignedArithmeticConstantContext[];
	public unsignedArithmeticConstant(i: number): UnsignedArithmeticConstantContext;
	public unsignedArithmeticConstant(i?: number): UnsignedArithmeticConstantContext | UnsignedArithmeticConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnsignedArithmeticConstantContext);
		} else {
			return this.getRuleContext(i, UnsignedArithmeticConstantContext);
		}
	}
	public HOLLERITH(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.HOLLERITH, 0); }
	public SCON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.SCON, 0); }
	public logicalConstant(): LogicalConstantContext | undefined {
		return this.tryGetRuleContext(0, LogicalConstantContext);
	}
	public varRef(): VarRefContext | undefined {
		return this.tryGetRuleContext(0, VarRefContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_aexpr4; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterAexpr4) {
			listener.enterAexpr4(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitAexpr4) {
			listener.exitAexpr4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitAexpr4) {
			return visitor.visitAexpr4(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IexprContext extends ParserRuleContext {
	public iexpr1(): Iexpr1Context[];
	public iexpr1(i: number): Iexpr1Context;
	public iexpr1(i?: number): Iexpr1Context | Iexpr1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Iexpr1Context);
		} else {
			return this.getRuleContext(i, Iexpr1Context);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.PLUS);
		} else {
			return this.getToken(Fortran77Parser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.MINUS);
		} else {
			return this.getToken(Fortran77Parser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_iexpr; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterIexpr) {
			listener.enterIexpr(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitIexpr) {
			listener.exitIexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitIexpr) {
			return visitor.visitIexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IexprCodeContext extends ParserRuleContext {
	public iexpr1(): Iexpr1Context[];
	public iexpr1(i: number): Iexpr1Context;
	public iexpr1(i?: number): Iexpr1Context | Iexpr1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Iexpr1Context);
		} else {
			return this.getRuleContext(i, Iexpr1Context);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.PLUS);
		} else {
			return this.getToken(Fortran77Parser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.MINUS);
		} else {
			return this.getToken(Fortran77Parser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_iexprCode; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterIexprCode) {
			listener.enterIexprCode(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitIexprCode) {
			listener.exitIexprCode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitIexprCode) {
			return visitor.visitIexprCode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Iexpr1Context extends ParserRuleContext {
	public iexpr2(): Iexpr2Context[];
	public iexpr2(i: number): Iexpr2Context;
	public iexpr2(i?: number): Iexpr2Context | Iexpr2Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Iexpr2Context);
		} else {
			return this.getRuleContext(i, Iexpr2Context);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.STAR);
		} else {
			return this.getToken(Fortran77Parser.STAR, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.DIV);
		} else {
			return this.getToken(Fortran77Parser.DIV, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_iexpr1; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterIexpr1) {
			listener.enterIexpr1(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitIexpr1) {
			listener.exitIexpr1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitIexpr1) {
			return visitor.visitIexpr1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Iexpr2Context extends ParserRuleContext {
	public iexpr3(): Iexpr3Context {
		return this.getRuleContext(0, Iexpr3Context);
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.PLUS);
		} else {
			return this.getToken(Fortran77Parser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.MINUS);
		} else {
			return this.getToken(Fortran77Parser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_iexpr2; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterIexpr2) {
			listener.enterIexpr2(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitIexpr2) {
			listener.exitIexpr2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitIexpr2) {
			return visitor.visitIexpr2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Iexpr3Context extends ParserRuleContext {
	public iexpr4(): Iexpr4Context {
		return this.getRuleContext(0, Iexpr4Context);
	}
	public POWER(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.POWER, 0); }
	public iexpr3(): Iexpr3Context | undefined {
		return this.tryGetRuleContext(0, Iexpr3Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_iexpr3; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterIexpr3) {
			listener.enterIexpr3(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitIexpr3) {
			listener.exitIexpr3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitIexpr3) {
			return visitor.visitIexpr3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Iexpr4Context extends ParserRuleContext {
	public ICON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ICON, 0); }
	public varRefCode(): VarRefCodeContext | undefined {
		return this.tryGetRuleContext(0, VarRefCodeContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.LPAREN, 0); }
	public iexprCode(): IexprCodeContext | undefined {
		return this.tryGetRuleContext(0, IexprCodeContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_iexpr4; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterIexpr4) {
			listener.enterIexpr4(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitIexpr4) {
			listener.exitIexpr4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitIexpr4) {
			return visitor.visitIexpr4(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantExprContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_constantExpr; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterConstantExpr) {
			listener.enterConstantExpr(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitConstantExpr) {
			listener.exitConstantExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitConstantExpr) {
			return visitor.visitConstantExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArithmeticExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_arithmeticExpression; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterArithmeticExpression) {
			listener.enterArithmeticExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitArithmeticExpression) {
			listener.exitArithmeticExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitArithmeticExpression) {
			return visitor.visitArithmeticExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerExprContext extends ParserRuleContext {
	public iexpr(): IexprContext {
		return this.getRuleContext(0, IexprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_integerExpr; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterIntegerExpr) {
			listener.enterIntegerExpr(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitIntegerExpr) {
			listener.exitIntegerExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitIntegerExpr) {
			return visitor.visitIntegerExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntRealDpExprContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_intRealDpExpr; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterIntRealDpExpr) {
			listener.enterIntRealDpExpr(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitIntRealDpExpr) {
			listener.exitIntRealDpExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitIntRealDpExpr) {
			return visitor.visitIntRealDpExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArithmeticConstExprContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_arithmeticConstExpr; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterArithmeticConstExpr) {
			listener.enterArithmeticConstExpr(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitArithmeticConstExpr) {
			listener.exitArithmeticConstExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitArithmeticConstExpr) {
			return visitor.visitArithmeticConstExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntConstantExprContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_intConstantExpr; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterIntConstantExpr) {
			listener.enterIntConstantExpr(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitIntConstantExpr) {
			listener.exitIntConstantExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitIntConstantExpr) {
			return visitor.visitIntConstantExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharacterExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_characterExpression; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterCharacterExpression) {
			listener.enterCharacterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitCharacterExpression) {
			listener.exitCharacterExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitCharacterExpression) {
			return visitor.visitCharacterExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConcatOpContext extends ParserRuleContext {
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.DIV);
		} else {
			return this.getToken(Fortran77Parser.DIV, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_concatOp; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterConcatOp) {
			listener.enterConcatOp(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitConcatOp) {
			listener.exitConcatOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitConcatOp) {
			return visitor.visitConcatOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_logicalExpression; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterLogicalExpression) {
			listener.enterLogicalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitLogicalExpression) {
			listener.exitLogicalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitLogicalExpression) {
			return visitor.visitLogicalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalConstExprContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_logicalConstExpr; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterLogicalConstExpr) {
			listener.enterLogicalConstExpr(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitLogicalConstExpr) {
			listener.exitLogicalConstExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitLogicalConstExpr) {
			return visitor.visitLogicalConstExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayElementNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public integerExpr(): IntegerExprContext[];
	public integerExpr(i: number): IntegerExprContext;
	public integerExpr(i?: number): IntegerExprContext | IntegerExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntegerExprContext);
		} else {
			return this.getRuleContext(i, IntegerExprContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_arrayElementName; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterArrayElementName) {
			listener.enterArrayElementName(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitArrayElementName) {
			listener.exitArrayElementName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitArrayElementName) {
			return visitor.visitArrayElementName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubscriptsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.COMMA);
		} else {
			return this.getToken(Fortran77Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_subscripts; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterSubscripts) {
			listener.enterSubscripts(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitSubscripts) {
			listener.exitSubscripts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitSubscripts) {
			return visitor.visitSubscripts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarRefContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.NAME, 0); }
	public REAL(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.REAL, 0); }
	public subscripts(): SubscriptsContext | undefined {
		return this.tryGetRuleContext(0, SubscriptsContext);
	}
	public substringApp(): SubstringAppContext | undefined {
		return this.tryGetRuleContext(0, SubstringAppContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_varRef; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterVarRef) {
			listener.enterVarRef(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitVarRef) {
			listener.exitVarRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitVarRef) {
			return visitor.visitVarRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarRefCodeContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	public subscripts(): SubscriptsContext | undefined {
		return this.tryGetRuleContext(0, SubscriptsContext);
	}
	public substringApp(): SubstringAppContext | undefined {
		return this.tryGetRuleContext(0, SubstringAppContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_varRefCode; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterVarRefCode) {
			listener.enterVarRefCode(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitVarRefCode) {
			listener.exitVarRefCode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitVarRefCode) {
			return visitor.visitVarRefCode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubstringAppContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public COLON(): TerminalNode { return this.getToken(Fortran77Parser.COLON, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	public ncExpr(): NcExprContext[];
	public ncExpr(i: number): NcExprContext;
	public ncExpr(i?: number): NcExprContext | NcExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NcExprContext);
		} else {
			return this.getRuleContext(i, NcExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_substringApp; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterSubstringApp) {
			listener.enterSubstringApp(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitSubstringApp) {
			listener.exitSubstringApp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitSubstringApp) {
			return visitor.visitSubstringApp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_variableName; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterVariableName) {
			listener.enterVariableName(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitVariableName) {
			listener.exitVariableName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitVariableName) {
			return visitor.visitVariableName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_arrayName; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterArrayName) {
			listener.enterArrayName(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitArrayName) {
			listener.exitArrayName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitArrayName) {
			return visitor.visitArrayName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubroutineNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_subroutineName; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterSubroutineName) {
			listener.enterSubroutineName(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitSubroutineName) {
			listener.exitSubroutineName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitSubroutineName) {
			return visitor.visitSubroutineName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_functionName; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterFunctionName) {
			listener.enterFunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitFunctionName) {
			listener.exitFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitFunctionName) {
			return visitor.visitFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public unsignedArithmeticConstant(): UnsignedArithmeticConstantContext | undefined {
		return this.tryGetRuleContext(0, UnsignedArithmeticConstantContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.MINUS, 0); }
	public SCON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.SCON, 0); }
	public HOLLERITH(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.HOLLERITH, 0); }
	public logicalConstant(): LogicalConstantContext | undefined {
		return this.tryGetRuleContext(0, LogicalConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_constant; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnsignedArithmeticConstantContext extends ParserRuleContext {
	public ICON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.ICON, 0); }
	public RCON(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.RCON, 0); }
	public complexConstant(): ComplexConstantContext | undefined {
		return this.tryGetRuleContext(0, ComplexConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_unsignedArithmeticConstant; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterUnsignedArithmeticConstant) {
			listener.enterUnsignedArithmeticConstant(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitUnsignedArithmeticConstant) {
			listener.exitUnsignedArithmeticConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitUnsignedArithmeticConstant) {
			return visitor.visitUnsignedArithmeticConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComplexConstantContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Fortran77Parser.LPAREN, 0); }
	public COMMA(): TerminalNode { return this.getToken(Fortran77Parser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Fortran77Parser.RPAREN, 0); }
	public ICON(): TerminalNode[];
	public ICON(i: number): TerminalNode;
	public ICON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.ICON);
		} else {
			return this.getToken(Fortran77Parser.ICON, i);
		}
	}
	public RCON(): TerminalNode[];
	public RCON(i: number): TerminalNode;
	public RCON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.RCON);
		} else {
			return this.getToken(Fortran77Parser.RCON, i);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.PLUS);
		} else {
			return this.getToken(Fortran77Parser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Fortran77Parser.MINUS);
		} else {
			return this.getToken(Fortran77Parser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_complexConstant; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterComplexConstant) {
			listener.enterComplexConstant(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitComplexConstant) {
			listener.exitComplexConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitComplexConstant) {
			return visitor.visitComplexConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalConstantContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_logicalConstant; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterLogicalConstant) {
			listener.enterLogicalConstant(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitLogicalConstant) {
			listener.exitLogicalConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitLogicalConstant) {
			return visitor.visitLogicalConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.NAME, 0); }
	public REAL(): TerminalNode | undefined { return this.tryGetToken(Fortran77Parser.REAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_identifier; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ToContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Fortran77Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Fortran77Parser.RULE_to; }
	// @Override
	public enterRule(listener: Fortran77ParserListener): void {
		if (listener.enterTo) {
			listener.enterTo(this);
		}
	}
	// @Override
	public exitRule(listener: Fortran77ParserListener): void {
		if (listener.exitTo) {
			listener.exitTo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Fortran77ParserVisitor<Result>): Result {
		if (visitor.visitTo) {
			return visitor.visitTo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


