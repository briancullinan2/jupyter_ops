// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/vba/vba.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { vbaListener } from "./vbaListener";
import { vbaVisitor } from "./vbaVisitor";


export class vbaParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly ACCESS = 9;
	public static readonly ADDRESSOF = 10;
	public static readonly ALIAS = 11;
	public static readonly AND = 12;
	public static readonly ATTRIBUTE = 13;
	public static readonly APPACTIVATE = 14;
	public static readonly APPEND = 15;
	public static readonly AS = 16;
	public static readonly BEGIN = 17;
	public static readonly BEEP = 18;
	public static readonly BINARY = 19;
	public static readonly BOOLEAN = 20;
	public static readonly BYVAL = 21;
	public static readonly BYREF = 22;
	public static readonly BYTE = 23;
	public static readonly CALL = 24;
	public static readonly CASE = 25;
	public static readonly CHDIR = 26;
	public static readonly CHDRIVE = 27;
	public static readonly CLASS = 28;
	public static readonly CLOSE = 29;
	public static readonly COLLECTION = 30;
	public static readonly CONST = 31;
	public static readonly DATABASE = 32;
	public static readonly DATE = 33;
	public static readonly DECLARE = 34;
	public static readonly DEFBOOL = 35;
	public static readonly DEFBYTE = 36;
	public static readonly DEFDATE = 37;
	public static readonly DEFDBL = 38;
	public static readonly DEFDEC = 39;
	public static readonly DEFCUR = 40;
	public static readonly DEFINT = 41;
	public static readonly DEFLNG = 42;
	public static readonly DEFOBJ = 43;
	public static readonly DEFSNG = 44;
	public static readonly DEFSTR = 45;
	public static readonly DEFVAR = 46;
	public static readonly DELETESETTING = 47;
	public static readonly DIM = 48;
	public static readonly DO = 49;
	public static readonly DOUBLE = 50;
	public static readonly EACH = 51;
	public static readonly ELSE = 52;
	public static readonly ELSEIF = 53;
	public static readonly END_ENUM = 54;
	public static readonly END_FUNCTION = 55;
	public static readonly END_IF = 56;
	public static readonly END_PROPERTY = 57;
	public static readonly END_SELECT = 58;
	public static readonly END_SUB = 59;
	public static readonly END_TYPE = 60;
	public static readonly END_WITH = 61;
	public static readonly END = 62;
	public static readonly ENUM = 63;
	public static readonly EQV = 64;
	public static readonly ERASE = 65;
	public static readonly ERROR = 66;
	public static readonly EVENT = 67;
	public static readonly EXIT_DO = 68;
	public static readonly EXIT_FOR = 69;
	public static readonly EXIT_FUNCTION = 70;
	public static readonly EXIT_PROPERTY = 71;
	public static readonly EXIT_SUB = 72;
	public static readonly FALSE = 73;
	public static readonly FILECOPY = 74;
	public static readonly FRIEND = 75;
	public static readonly FOR = 76;
	public static readonly FUNCTION = 77;
	public static readonly GET = 78;
	public static readonly GLOBAL = 79;
	public static readonly GOSUB = 80;
	public static readonly GOTO = 81;
	public static readonly IF = 82;
	public static readonly IMP = 83;
	public static readonly IMPLEMENTS = 84;
	public static readonly IN = 85;
	public static readonly INPUT = 86;
	public static readonly IS = 87;
	public static readonly INTEGER = 88;
	public static readonly KILL = 89;
	public static readonly LOAD = 90;
	public static readonly LOCK = 91;
	public static readonly LONG = 92;
	public static readonly LOOP = 93;
	public static readonly LEN = 94;
	public static readonly LET = 95;
	public static readonly LIB = 96;
	public static readonly LIKE = 97;
	public static readonly LINE_INPUT = 98;
	public static readonly LOCK_READ = 99;
	public static readonly LOCK_WRITE = 100;
	public static readonly LOCK_READ_WRITE = 101;
	public static readonly LSET = 102;
	public static readonly MACRO_CONST = 103;
	public static readonly MACRO_IF = 104;
	public static readonly MACRO_ELSEIF = 105;
	public static readonly MACRO_ELSE = 106;
	public static readonly MACRO_END_IF = 107;
	public static readonly ME = 108;
	public static readonly MID = 109;
	public static readonly MKDIR = 110;
	public static readonly MOD = 111;
	public static readonly NAME = 112;
	public static readonly NEXT = 113;
	public static readonly NEW = 114;
	public static readonly NOT = 115;
	public static readonly NOTHING = 116;
	public static readonly NULL = 117;
	public static readonly ON = 118;
	public static readonly ON_ERROR = 119;
	public static readonly ON_LOCAL_ERROR = 120;
	public static readonly OPEN = 121;
	public static readonly OPTIONAL = 122;
	public static readonly OPTION_BASE = 123;
	public static readonly OPTION_EXPLICIT = 124;
	public static readonly OPTION_COMPARE = 125;
	public static readonly OPTION_PRIVATE_MODULE = 126;
	public static readonly OR = 127;
	public static readonly OUTPUT = 128;
	public static readonly PARAMARRAY = 129;
	public static readonly PRESERVE = 130;
	public static readonly PRINT = 131;
	public static readonly PRIVATE = 132;
	public static readonly PROPERTY_GET = 133;
	public static readonly PROPERTY_LET = 134;
	public static readonly PROPERTY_SET = 135;
	public static readonly PTRSAFE = 136;
	public static readonly PUBLIC = 137;
	public static readonly PUT = 138;
	public static readonly RANDOM = 139;
	public static readonly RANDOMIZE = 140;
	public static readonly RAISEEVENT = 141;
	public static readonly READ = 142;
	public static readonly READ_WRITE = 143;
	public static readonly REDIM = 144;
	public static readonly REM = 145;
	public static readonly RESET = 146;
	public static readonly RESUME = 147;
	public static readonly RETURN = 148;
	public static readonly RMDIR = 149;
	public static readonly RSET = 150;
	public static readonly SAVEPICTURE = 151;
	public static readonly SAVESETTING = 152;
	public static readonly SEEK = 153;
	public static readonly SELECT = 154;
	public static readonly SENDKEYS = 155;
	public static readonly SET = 156;
	public static readonly SETATTR = 157;
	public static readonly SHARED = 158;
	public static readonly SINGLE = 159;
	public static readonly SPC = 160;
	public static readonly STATIC = 161;
	public static readonly STEP = 162;
	public static readonly STOP = 163;
	public static readonly STRING = 164;
	public static readonly SUB = 165;
	public static readonly TAB = 166;
	public static readonly TEXT = 167;
	public static readonly THEN = 168;
	public static readonly TIME = 169;
	public static readonly TO = 170;
	public static readonly TRUE = 171;
	public static readonly TYPE = 172;
	public static readonly TYPEOF = 173;
	public static readonly UNLOAD = 174;
	public static readonly UNLOCK = 175;
	public static readonly UNTIL = 176;
	public static readonly VARIANT = 177;
	public static readonly VERSION = 178;
	public static readonly WEND = 179;
	public static readonly WHILE = 180;
	public static readonly WIDTH = 181;
	public static readonly WITH = 182;
	public static readonly WITHEVENTS = 183;
	public static readonly WRITE = 184;
	public static readonly XOR = 185;
	public static readonly AMPERSAND = 186;
	public static readonly ASSIGN = 187;
	public static readonly DIV = 188;
	public static readonly EQ = 189;
	public static readonly GEQ = 190;
	public static readonly GT = 191;
	public static readonly LEQ = 192;
	public static readonly LPAREN = 193;
	public static readonly LT = 194;
	public static readonly MINUS = 195;
	public static readonly MINUS_EQ = 196;
	public static readonly MULT = 197;
	public static readonly NEQ = 198;
	public static readonly PLUS = 199;
	public static readonly PLUS_EQ = 200;
	public static readonly POW = 201;
	public static readonly RPAREN = 202;
	public static readonly L_SQUARE_BRACKET = 203;
	public static readonly R_SQUARE_BRACKET = 204;
	public static readonly STRINGLITERAL = 205;
	public static readonly OCTLITERAL = 206;
	public static readonly HEXLITERAL = 207;
	public static readonly SHORTLITERAL = 208;
	public static readonly INTEGERLITERAL = 209;
	public static readonly DOUBLELITERAL = 210;
	public static readonly DATELITERAL = 211;
	public static readonly LINE_CONTINUATION = 212;
	public static readonly NEWLINE = 213;
	public static readonly REMCOMMENT = 214;
	public static readonly COMMENT = 215;
	public static readonly SINGLEQUOTE = 216;
	public static readonly COLON = 217;
	public static readonly UNDERSCORE = 218;
	public static readonly WS = 219;
	public static readonly IDENTIFIER = 220;
	public static readonly RULE_startRule = 0;
	public static readonly RULE_module = 1;
	public static readonly RULE_moduleHeader = 2;
	public static readonly RULE_moduleConfig = 3;
	public static readonly RULE_moduleConfigElement = 4;
	public static readonly RULE_moduleAttributes = 5;
	public static readonly RULE_moduleDeclarations = 6;
	public static readonly RULE_moduleOption = 7;
	public static readonly RULE_moduleDeclarationsElement = 8;
	public static readonly RULE_macroStmt = 9;
	public static readonly RULE_moduleBody = 10;
	public static readonly RULE_moduleBodyElement = 11;
	public static readonly RULE_attributeStmt = 12;
	public static readonly RULE_block = 13;
	public static readonly RULE_blockStmt = 14;
	public static readonly RULE_appactivateStmt = 15;
	public static readonly RULE_beepStmt = 16;
	public static readonly RULE_chdirStmt = 17;
	public static readonly RULE_chdriveStmt = 18;
	public static readonly RULE_closeStmt = 19;
	public static readonly RULE_constStmt = 20;
	public static readonly RULE_constSubStmt = 21;
	public static readonly RULE_dateStmt = 22;
	public static readonly RULE_declareStmt = 23;
	public static readonly RULE_deftypeStmt = 24;
	public static readonly RULE_deleteSettingStmt = 25;
	public static readonly RULE_doLoopStmt = 26;
	public static readonly RULE_endStmt = 27;
	public static readonly RULE_enumerationStmt = 28;
	public static readonly RULE_enumerationStmt_Constant = 29;
	public static readonly RULE_eraseStmt = 30;
	public static readonly RULE_errorStmt = 31;
	public static readonly RULE_eventStmt = 32;
	public static readonly RULE_exitStmt = 33;
	public static readonly RULE_filecopyStmt = 34;
	public static readonly RULE_forEachStmt = 35;
	public static readonly RULE_forNextStmt = 36;
	public static readonly RULE_functionStmt = 37;
	public static readonly RULE_getStmt = 38;
	public static readonly RULE_goSubStmt = 39;
	public static readonly RULE_goToStmt = 40;
	public static readonly RULE_ifThenElseStmt = 41;
	public static readonly RULE_ifBlockStmt = 42;
	public static readonly RULE_ifConditionStmt = 43;
	public static readonly RULE_ifElseIfBlockStmt = 44;
	public static readonly RULE_ifElseBlockStmt = 45;
	public static readonly RULE_implementsStmt = 46;
	public static readonly RULE_inputStmt = 47;
	public static readonly RULE_killStmt = 48;
	public static readonly RULE_letStmt = 49;
	public static readonly RULE_lineInputStmt = 50;
	public static readonly RULE_loadStmt = 51;
	public static readonly RULE_lockStmt = 52;
	public static readonly RULE_lsetStmt = 53;
	public static readonly RULE_macroConstStmt = 54;
	public static readonly RULE_macroIfThenElseStmt = 55;
	public static readonly RULE_macroIfBlockStmt = 56;
	public static readonly RULE_macroElseIfBlockStmt = 57;
	public static readonly RULE_macroElseBlockStmt = 58;
	public static readonly RULE_midStmt = 59;
	public static readonly RULE_mkdirStmt = 60;
	public static readonly RULE_nameStmt = 61;
	public static readonly RULE_onErrorStmt = 62;
	public static readonly RULE_onGoToStmt = 63;
	public static readonly RULE_onGoSubStmt = 64;
	public static readonly RULE_openStmt = 65;
	public static readonly RULE_outputList = 66;
	public static readonly RULE_outputList_Expression = 67;
	public static readonly RULE_printStmt = 68;
	public static readonly RULE_propertyGetStmt = 69;
	public static readonly RULE_propertySetStmt = 70;
	public static readonly RULE_propertyLetStmt = 71;
	public static readonly RULE_putStmt = 72;
	public static readonly RULE_raiseEventStmt = 73;
	public static readonly RULE_randomizeStmt = 74;
	public static readonly RULE_redimStmt = 75;
	public static readonly RULE_redimSubStmt = 76;
	public static readonly RULE_resetStmt = 77;
	public static readonly RULE_resumeStmt = 78;
	public static readonly RULE_returnStmt = 79;
	public static readonly RULE_rmdirStmt = 80;
	public static readonly RULE_rsetStmt = 81;
	public static readonly RULE_savepictureStmt = 82;
	public static readonly RULE_saveSettingStmt = 83;
	public static readonly RULE_seekStmt = 84;
	public static readonly RULE_selectCaseStmt = 85;
	public static readonly RULE_sC_Selection = 86;
	public static readonly RULE_sC_Case = 87;
	public static readonly RULE_sC_Cond = 88;
	public static readonly RULE_sendkeysStmt = 89;
	public static readonly RULE_setattrStmt = 90;
	public static readonly RULE_setStmt = 91;
	public static readonly RULE_stopStmt = 92;
	public static readonly RULE_subStmt = 93;
	public static readonly RULE_timeStmt = 94;
	public static readonly RULE_typeStmt = 95;
	public static readonly RULE_typeStmt_Element = 96;
	public static readonly RULE_typeOfStmt = 97;
	public static readonly RULE_unloadStmt = 98;
	public static readonly RULE_unlockStmt = 99;
	public static readonly RULE_valueStmt = 100;
	public static readonly RULE_variableStmt = 101;
	public static readonly RULE_variableListStmt = 102;
	public static readonly RULE_variableSubStmt = 103;
	public static readonly RULE_whileWendStmt = 104;
	public static readonly RULE_widthStmt = 105;
	public static readonly RULE_withStmt = 106;
	public static readonly RULE_writeStmt = 107;
	public static readonly RULE_fileNumber = 108;
	public static readonly RULE_explicitCallStmt = 109;
	public static readonly RULE_eCS_ProcedureCall = 110;
	public static readonly RULE_eCS_MemberProcedureCall = 111;
	public static readonly RULE_implicitCallStmt_InBlock = 112;
	public static readonly RULE_iCS_B_MemberProcedureCall = 113;
	public static readonly RULE_iCS_B_ProcedureCall = 114;
	public static readonly RULE_implicitCallStmt_InStmt = 115;
	public static readonly RULE_iCS_S_VariableOrProcedureCall = 116;
	public static readonly RULE_iCS_S_ProcedureOrArrayCall = 117;
	public static readonly RULE_iCS_S_MembersCall = 118;
	public static readonly RULE_iCS_S_MemberCall = 119;
	public static readonly RULE_iCS_S_DictionaryCall = 120;
	public static readonly RULE_argsCall = 121;
	public static readonly RULE_argCall = 122;
	public static readonly RULE_dictionaryCallStmt = 123;
	public static readonly RULE_argList = 124;
	public static readonly RULE_arg = 125;
	public static readonly RULE_argDefaultValue = 126;
	public static readonly RULE_subscripts = 127;
	public static readonly RULE_subscript = 128;
	public static readonly RULE_ambiguousIdentifier = 129;
	public static readonly RULE_asTypeClause = 130;
	public static readonly RULE_baseType = 131;
	public static readonly RULE_certainIdentifier = 132;
	public static readonly RULE_comparisonOperator = 133;
	public static readonly RULE_complexType = 134;
	public static readonly RULE_fieldLength = 135;
	public static readonly RULE_letterrange = 136;
	public static readonly RULE_lineLabel = 137;
	public static readonly RULE_literal = 138;
	public static readonly RULE_type = 139;
	public static readonly RULE_typeHint = 140;
	public static readonly RULE_visibility = 141;
	public static readonly RULE_ambiguousKeyword = 142;
	public static readonly RULE_remComment = 143;
	public static readonly RULE_comment = 144;
	public static readonly RULE_endOfLine = 145;
	public static readonly RULE_endOfStatement = 146;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"startRule", "module", "moduleHeader", "moduleConfig", "moduleConfigElement", 
		"moduleAttributes", "moduleDeclarations", "moduleOption", "moduleDeclarationsElement", 
		"macroStmt", "moduleBody", "moduleBodyElement", "attributeStmt", "block", 
		"blockStmt", "appactivateStmt", "beepStmt", "chdirStmt", "chdriveStmt", 
		"closeStmt", "constStmt", "constSubStmt", "dateStmt", "declareStmt", "deftypeStmt", 
		"deleteSettingStmt", "doLoopStmt", "endStmt", "enumerationStmt", "enumerationStmt_Constant", 
		"eraseStmt", "errorStmt", "eventStmt", "exitStmt", "filecopyStmt", "forEachStmt", 
		"forNextStmt", "functionStmt", "getStmt", "goSubStmt", "goToStmt", "ifThenElseStmt", 
		"ifBlockStmt", "ifConditionStmt", "ifElseIfBlockStmt", "ifElseBlockStmt", 
		"implementsStmt", "inputStmt", "killStmt", "letStmt", "lineInputStmt", 
		"loadStmt", "lockStmt", "lsetStmt", "macroConstStmt", "macroIfThenElseStmt", 
		"macroIfBlockStmt", "macroElseIfBlockStmt", "macroElseBlockStmt", "midStmt", 
		"mkdirStmt", "nameStmt", "onErrorStmt", "onGoToStmt", "onGoSubStmt", "openStmt", 
		"outputList", "outputList_Expression", "printStmt", "propertyGetStmt", 
		"propertySetStmt", "propertyLetStmt", "putStmt", "raiseEventStmt", "randomizeStmt", 
		"redimStmt", "redimSubStmt", "resetStmt", "resumeStmt", "returnStmt", 
		"rmdirStmt", "rsetStmt", "savepictureStmt", "saveSettingStmt", "seekStmt", 
		"selectCaseStmt", "sC_Selection", "sC_Case", "sC_Cond", "sendkeysStmt", 
		"setattrStmt", "setStmt", "stopStmt", "subStmt", "timeStmt", "typeStmt", 
		"typeStmt_Element", "typeOfStmt", "unloadStmt", "unlockStmt", "valueStmt", 
		"variableStmt", "variableListStmt", "variableSubStmt", "whileWendStmt", 
		"widthStmt", "withStmt", "writeStmt", "fileNumber", "explicitCallStmt", 
		"eCS_ProcedureCall", "eCS_MemberProcedureCall", "implicitCallStmt_InBlock", 
		"iCS_B_MemberProcedureCall", "iCS_B_ProcedureCall", "implicitCallStmt_InStmt", 
		"iCS_S_VariableOrProcedureCall", "iCS_S_ProcedureOrArrayCall", "iCS_S_MembersCall", 
		"iCS_S_MemberCall", "iCS_S_DictionaryCall", "argsCall", "argCall", "dictionaryCallStmt", 
		"argList", "arg", "argDefaultValue", "subscripts", "subscript", "ambiguousIdentifier", 
		"asTypeClause", "baseType", "certainIdentifier", "comparisonOperator", 
		"complexType", "fieldLength", "letterrange", "lineLabel", "literal", "type", 
		"typeHint", "visibility", "ambiguousKeyword", "remComment", "comment", 
		"endOfLine", "endOfStatement",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", "';'", "'#'", "'.'", "'!'", "'%'", "'@'", "'$'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'&'", "':='", undefined, "'='", "'>='", "'>'", "'<='", "'('", 
		"'<'", "'-'", "'-='", "'*'", "'<>'", "'+'", "'+='", "'^'", "')'", "'['", 
		"']'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'''", "':'", "'_'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "ACCESS", "ADDRESSOF", "ALIAS", "AND", "ATTRIBUTE", 
		"APPACTIVATE", "APPEND", "AS", "BEGIN", "BEEP", "BINARY", "BOOLEAN", "BYVAL", 
		"BYREF", "BYTE", "CALL", "CASE", "CHDIR", "CHDRIVE", "CLASS", "CLOSE", 
		"COLLECTION", "CONST", "DATABASE", "DATE", "DECLARE", "DEFBOOL", "DEFBYTE", 
		"DEFDATE", "DEFDBL", "DEFDEC", "DEFCUR", "DEFINT", "DEFLNG", "DEFOBJ", 
		"DEFSNG", "DEFSTR", "DEFVAR", "DELETESETTING", "DIM", "DO", "DOUBLE", 
		"EACH", "ELSE", "ELSEIF", "END_ENUM", "END_FUNCTION", "END_IF", "END_PROPERTY", 
		"END_SELECT", "END_SUB", "END_TYPE", "END_WITH", "END", "ENUM", "EQV", 
		"ERASE", "ERROR", "EVENT", "EXIT_DO", "EXIT_FOR", "EXIT_FUNCTION", "EXIT_PROPERTY", 
		"EXIT_SUB", "FALSE", "FILECOPY", "FRIEND", "FOR", "FUNCTION", "GET", "GLOBAL", 
		"GOSUB", "GOTO", "IF", "IMP", "IMPLEMENTS", "IN", "INPUT", "IS", "INTEGER", 
		"KILL", "LOAD", "LOCK", "LONG", "LOOP", "LEN", "LET", "LIB", "LIKE", "LINE_INPUT", 
		"LOCK_READ", "LOCK_WRITE", "LOCK_READ_WRITE", "LSET", "MACRO_CONST", "MACRO_IF", 
		"MACRO_ELSEIF", "MACRO_ELSE", "MACRO_END_IF", "ME", "MID", "MKDIR", "MOD", 
		"NAME", "NEXT", "NEW", "NOT", "NOTHING", "NULL", "ON", "ON_ERROR", "ON_LOCAL_ERROR", 
		"OPEN", "OPTIONAL", "OPTION_BASE", "OPTION_EXPLICIT", "OPTION_COMPARE", 
		"OPTION_PRIVATE_MODULE", "OR", "OUTPUT", "PARAMARRAY", "PRESERVE", "PRINT", 
		"PRIVATE", "PROPERTY_GET", "PROPERTY_LET", "PROPERTY_SET", "PTRSAFE", 
		"PUBLIC", "PUT", "RANDOM", "RANDOMIZE", "RAISEEVENT", "READ", "READ_WRITE", 
		"REDIM", "REM", "RESET", "RESUME", "RETURN", "RMDIR", "RSET", "SAVEPICTURE", 
		"SAVESETTING", "SEEK", "SELECT", "SENDKEYS", "SET", "SETATTR", "SHARED", 
		"SINGLE", "SPC", "STATIC", "STEP", "STOP", "STRING", "SUB", "TAB", "TEXT", 
		"THEN", "TIME", "TO", "TRUE", "TYPE", "TYPEOF", "UNLOAD", "UNLOCK", "UNTIL", 
		"VARIANT", "VERSION", "WEND", "WHILE", "WIDTH", "WITH", "WITHEVENTS", 
		"WRITE", "XOR", "AMPERSAND", "ASSIGN", "DIV", "EQ", "GEQ", "GT", "LEQ", 
		"LPAREN", "LT", "MINUS", "MINUS_EQ", "MULT", "NEQ", "PLUS", "PLUS_EQ", 
		"POW", "RPAREN", "L_SQUARE_BRACKET", "R_SQUARE_BRACKET", "STRINGLITERAL", 
		"OCTLITERAL", "HEXLITERAL", "SHORTLITERAL", "INTEGERLITERAL", "DOUBLELITERAL", 
		"DATELITERAL", "LINE_CONTINUATION", "NEWLINE", "REMCOMMENT", "COMMENT", 
		"SINGLEQUOTE", "COLON", "UNDERSCORE", "WS", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(vbaParser._LITERAL_NAMES, vbaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return vbaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "vba.g4"; }

	// @Override
	public get ruleNames(): string[] { return vbaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return vbaParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(vbaParser._ATN, this);
	}
	// @RuleVersion(0)
	public startRule(): StartRuleContext {
		let _localctx: StartRuleContext = new StartRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, vbaParser.RULE_startRule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 294;
			this.module();
			this.state = 295;
			this.match(vbaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public module(): ModuleContext {
		let _localctx: ModuleContext = new ModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, vbaParser.RULE_module);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 297;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 303;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 300;
					this.endOfLine();
					}
					}
				}
				this.state = 305;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.VERSION) {
				{
				this.state = 306;
				this.moduleHeader();
				this.state = 310;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 307;
						this.endOfLine();
						}
						}
					}
					this.state = 312;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				}
				}
			}

			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.BEGIN) {
				{
				this.state = 315;
				this.moduleConfig();
				}
			}

			this.state = 321;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 318;
					this.endOfLine();
					}
					}
				}
				this.state = 323;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.ATTRIBUTE) {
				{
				this.state = 324;
				this.moduleAttributes();
				}
			}

			this.state = 330;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 327;
					this.endOfLine();
					}
					}
				}
				this.state = 332;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 334;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 333;
				this.moduleDeclarations();
				}
				break;
			}
			this.state = 339;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 336;
					this.endOfLine();
					}
					}
				}
				this.state = 341;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (vbaParser.FRIEND - 75)) | (1 << (vbaParser.FUNCTION - 75)) | (1 << (vbaParser.GLOBAL - 75)) | (1 << (vbaParser.MACRO_CONST - 75)) | (1 << (vbaParser.MACRO_IF - 75)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (vbaParser.PRIVATE - 132)) | (1 << (vbaParser.PROPERTY_GET - 132)) | (1 << (vbaParser.PROPERTY_LET - 132)) | (1 << (vbaParser.PROPERTY_SET - 132)) | (1 << (vbaParser.PUBLIC - 132)) | (1 << (vbaParser.STATIC - 132)))) !== 0) || _la === vbaParser.SUB) {
				{
				this.state = 342;
				this.moduleBody();
				}
			}

			this.state = 348;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 345;
					this.endOfLine();
					}
					}
				}
				this.state = 350;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 351;
				this.match(vbaParser.WS);
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
	public moduleHeader(): ModuleHeaderContext {
		let _localctx: ModuleHeaderContext = new ModuleHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, vbaParser.RULE_moduleHeader);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this.match(vbaParser.VERSION);
			this.state = 355;
			this.match(vbaParser.WS);
			this.state = 356;
			this.match(vbaParser.DOUBLELITERAL);
			this.state = 357;
			this.match(vbaParser.WS);
			this.state = 358;
			this.match(vbaParser.CLASS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleConfig(): ModuleConfigContext {
		let _localctx: ModuleConfigContext = new ModuleConfigContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, vbaParser.RULE_moduleConfig);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.match(vbaParser.BEGIN);
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 213)) & ~0x1F) === 0 && ((1 << (_la - 213)) & ((1 << (vbaParser.NEWLINE - 213)) | (1 << (vbaParser.REMCOMMENT - 213)) | (1 << (vbaParser.COMMENT - 213)) | (1 << (vbaParser.WS - 213)))) !== 0)) {
				{
				{
				this.state = 361;
				this.endOfLine();
				}
				}
				this.state = 366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 368;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 367;
					this.moduleConfigElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 370;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 372;
			this.match(vbaParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleConfigElement(): ModuleConfigElementContext {
		let _localctx: ModuleConfigElementContext = new ModuleConfigElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, vbaParser.RULE_moduleConfigElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.ambiguousIdentifier();
			this.state = 376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 375;
				this.match(vbaParser.WS);
				}
			}

			this.state = 378;
			this.match(vbaParser.EQ);
			this.state = 380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 379;
				this.match(vbaParser.WS);
				}
			}

			this.state = 382;
			this.literal();
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 213)) & ~0x1F) === 0 && ((1 << (_la - 213)) & ((1 << (vbaParser.NEWLINE - 213)) | (1 << (vbaParser.REMCOMMENT - 213)) | (1 << (vbaParser.COMMENT - 213)) | (1 << (vbaParser.WS - 213)))) !== 0)) {
				{
				{
				this.state = 383;
				this.endOfLine();
				}
				}
				this.state = 388;
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
	public moduleAttributes(): ModuleAttributesContext {
		let _localctx: ModuleAttributesContext = new ModuleAttributesContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, vbaParser.RULE_moduleAttributes);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 389;
				this.attributeStmt();
				this.state = 391;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 390;
						this.endOfLine();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 393;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				}
				this.state = 397;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === vbaParser.ATTRIBUTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleDeclarations(): ModuleDeclarationsContext {
		let _localctx: ModuleDeclarationsContext = new ModuleDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, vbaParser.RULE_moduleDeclarations);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this.moduleDeclarationsElement();
			this.state = 409;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 401;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 400;
							this.endOfLine();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 403;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					this.state = 405;
					this.moduleDeclarationsElement();
					}
					}
				}
				this.state = 411;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 415;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 412;
					this.endOfLine();
					}
					}
				}
				this.state = 417;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
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
	public moduleOption(): ModuleOptionContext {
		let _localctx: ModuleOptionContext = new ModuleOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, vbaParser.RULE_moduleOption);
		let _la: number;
		try {
			this.state = 426;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case vbaParser.OPTION_BASE:
				_localctx = new OptionBaseStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 418;
				this.match(vbaParser.OPTION_BASE);
				this.state = 419;
				this.match(vbaParser.WS);
				this.state = 420;
				this.match(vbaParser.SHORTLITERAL);
				}
				break;
			case vbaParser.OPTION_COMPARE:
				_localctx = new OptionCompareStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 421;
				this.match(vbaParser.OPTION_COMPARE);
				this.state = 422;
				this.match(vbaParser.WS);
				this.state = 423;
				_la = this._input.LA(1);
				if (!(_la === vbaParser.BINARY || _la === vbaParser.DATABASE || _la === vbaParser.TEXT)) {
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
			case vbaParser.OPTION_EXPLICIT:
				_localctx = new OptionExplicitStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 424;
				this.match(vbaParser.OPTION_EXPLICIT);
				}
				break;
			case vbaParser.OPTION_PRIVATE_MODULE:
				_localctx = new OptionPrivateModuleStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 425;
				this.match(vbaParser.OPTION_PRIVATE_MODULE);
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
	public moduleDeclarationsElement(): ModuleDeclarationsElementContext {
		let _localctx: ModuleDeclarationsElementContext = new ModuleDeclarationsElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, vbaParser.RULE_moduleDeclarationsElement);
		try {
			this.state = 438;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 428;
				this.comment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 429;
				this.declareStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 430;
				this.enumerationStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 431;
				this.eventStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 432;
				this.constStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 433;
				this.implementsStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 434;
				this.variableStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 435;
				this.moduleOption();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 436;
				this.typeStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 437;
				this.macroStmt();
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
	public macroStmt(): MacroStmtContext {
		let _localctx: MacroStmtContext = new MacroStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, vbaParser.RULE_macroStmt);
		try {
			this.state = 442;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case vbaParser.MACRO_CONST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 440;
				this.macroConstStmt();
				}
				break;
			case vbaParser.MACRO_IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 441;
				this.macroIfThenElseStmt();
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
	public moduleBody(): ModuleBodyContext {
		let _localctx: ModuleBodyContext = new ModuleBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, vbaParser.RULE_moduleBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.moduleBodyElement();
			this.state = 454;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 446;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 445;
						this.endOfLine();
						}
						}
						this.state = 448;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (((((_la - 213)) & ~0x1F) === 0 && ((1 << (_la - 213)) & ((1 << (vbaParser.NEWLINE - 213)) | (1 << (vbaParser.REMCOMMENT - 213)) | (1 << (vbaParser.COMMENT - 213)) | (1 << (vbaParser.WS - 213)))) !== 0));
					this.state = 450;
					this.moduleBodyElement();
					}
					}
				}
				this.state = 456;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			}
			this.state = 460;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 457;
					this.endOfLine();
					}
					}
				}
				this.state = 462;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
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
	public moduleBodyElement(): ModuleBodyElementContext {
		let _localctx: ModuleBodyElementContext = new ModuleBodyElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, vbaParser.RULE_moduleBodyElement);
		try {
			this.state = 469;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 463;
				this.functionStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 464;
				this.propertyGetStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 465;
				this.propertySetStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 466;
				this.propertyLetStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 467;
				this.subStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 468;
				this.macroStmt();
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
	public attributeStmt(): AttributeStmtContext {
		let _localctx: AttributeStmtContext = new AttributeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, vbaParser.RULE_attributeStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this.match(vbaParser.ATTRIBUTE);
			this.state = 472;
			this.match(vbaParser.WS);
			this.state = 473;
			this.implicitCallStmt_InStmt();
			this.state = 475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 474;
				this.match(vbaParser.WS);
				}
			}

			this.state = 477;
			this.match(vbaParser.EQ);
			this.state = 479;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 478;
				this.match(vbaParser.WS);
				}
			}

			this.state = 481;
			this.literal();
			this.state = 492;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 483;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 482;
						this.match(vbaParser.WS);
						}
					}

					this.state = 485;
					this.match(vbaParser.T__0);
					this.state = 487;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 486;
						this.match(vbaParser.WS);
						}
					}

					this.state = 489;
					this.literal();
					}
					}
				}
				this.state = 494;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, vbaParser.RULE_block);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.blockStmt();
			this.state = 501;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 496;
					this.endOfStatement();
					this.state = 497;
					this.blockStmt();
					}
					}
				}
				this.state = 503;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			this.state = 504;
			this.endOfStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStmt(): BlockStmtContext {
		let _localctx: BlockStmtContext = new BlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, vbaParser.RULE_blockStmt);
		try {
			this.state = 573;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 506;
				this.lineLabel();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 507;
				this.appactivateStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 508;
				this.attributeStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 509;
				this.beepStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 510;
				this.chdirStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 511;
				this.chdriveStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 512;
				this.closeStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 513;
				this.constStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 514;
				this.dateStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 515;
				this.deleteSettingStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 516;
				this.deftypeStmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 517;
				this.doLoopStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 518;
				this.endStmt();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 519;
				this.eraseStmt();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 520;
				this.errorStmt();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 521;
				this.exitStmt();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 522;
				this.explicitCallStmt();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 523;
				this.filecopyStmt();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 524;
				this.forEachStmt();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 525;
				this.forNextStmt();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 526;
				this.getStmt();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 527;
				this.goSubStmt();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 528;
				this.goToStmt();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 529;
				this.ifThenElseStmt();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 530;
				this.implementsStmt();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 531;
				this.inputStmt();
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 532;
				this.killStmt();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 533;
				this.letStmt();
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 534;
				this.lineInputStmt();
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 535;
				this.loadStmt();
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 536;
				this.lockStmt();
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 537;
				this.lsetStmt();
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 538;
				this.macroStmt();
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 539;
				this.midStmt();
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 540;
				this.mkdirStmt();
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 541;
				this.nameStmt();
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 542;
				this.onErrorStmt();
				}
				break;

			case 38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 543;
				this.onGoToStmt();
				}
				break;

			case 39:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 544;
				this.onGoSubStmt();
				}
				break;

			case 40:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 545;
				this.openStmt();
				}
				break;

			case 41:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 546;
				this.printStmt();
				}
				break;

			case 42:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 547;
				this.putStmt();
				}
				break;

			case 43:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 548;
				this.raiseEventStmt();
				}
				break;

			case 44:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 549;
				this.randomizeStmt();
				}
				break;

			case 45:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 550;
				this.redimStmt();
				}
				break;

			case 46:
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 551;
				this.resetStmt();
				}
				break;

			case 47:
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 552;
				this.resumeStmt();
				}
				break;

			case 48:
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 553;
				this.returnStmt();
				}
				break;

			case 49:
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 554;
				this.rmdirStmt();
				}
				break;

			case 50:
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 555;
				this.rsetStmt();
				}
				break;

			case 51:
				this.enterOuterAlt(_localctx, 51);
				{
				this.state = 556;
				this.savepictureStmt();
				}
				break;

			case 52:
				this.enterOuterAlt(_localctx, 52);
				{
				this.state = 557;
				this.saveSettingStmt();
				}
				break;

			case 53:
				this.enterOuterAlt(_localctx, 53);
				{
				this.state = 558;
				this.seekStmt();
				}
				break;

			case 54:
				this.enterOuterAlt(_localctx, 54);
				{
				this.state = 559;
				this.selectCaseStmt();
				}
				break;

			case 55:
				this.enterOuterAlt(_localctx, 55);
				{
				this.state = 560;
				this.sendkeysStmt();
				}
				break;

			case 56:
				this.enterOuterAlt(_localctx, 56);
				{
				this.state = 561;
				this.setattrStmt();
				}
				break;

			case 57:
				this.enterOuterAlt(_localctx, 57);
				{
				this.state = 562;
				this.setStmt();
				}
				break;

			case 58:
				this.enterOuterAlt(_localctx, 58);
				{
				this.state = 563;
				this.stopStmt();
				}
				break;

			case 59:
				this.enterOuterAlt(_localctx, 59);
				{
				this.state = 564;
				this.timeStmt();
				}
				break;

			case 60:
				this.enterOuterAlt(_localctx, 60);
				{
				this.state = 565;
				this.unloadStmt();
				}
				break;

			case 61:
				this.enterOuterAlt(_localctx, 61);
				{
				this.state = 566;
				this.unlockStmt();
				}
				break;

			case 62:
				this.enterOuterAlt(_localctx, 62);
				{
				this.state = 567;
				this.variableStmt();
				}
				break;

			case 63:
				this.enterOuterAlt(_localctx, 63);
				{
				this.state = 568;
				this.whileWendStmt();
				}
				break;

			case 64:
				this.enterOuterAlt(_localctx, 64);
				{
				this.state = 569;
				this.widthStmt();
				}
				break;

			case 65:
				this.enterOuterAlt(_localctx, 65);
				{
				this.state = 570;
				this.withStmt();
				}
				break;

			case 66:
				this.enterOuterAlt(_localctx, 66);
				{
				this.state = 571;
				this.writeStmt();
				}
				break;

			case 67:
				this.enterOuterAlt(_localctx, 67);
				{
				this.state = 572;
				this.implicitCallStmt_InBlock();
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
	public appactivateStmt(): AppactivateStmtContext {
		let _localctx: AppactivateStmtContext = new AppactivateStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, vbaParser.RULE_appactivateStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 575;
			this.match(vbaParser.APPACTIVATE);
			this.state = 576;
			this.match(vbaParser.WS);
			this.state = 577;
			this.valueStmt(0);
			this.state = 586;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 579;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 578;
					this.match(vbaParser.WS);
					}
				}

				this.state = 581;
				this.match(vbaParser.T__0);
				this.state = 583;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 582;
					this.match(vbaParser.WS);
					}
				}

				this.state = 585;
				this.valueStmt(0);
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
	public beepStmt(): BeepStmtContext {
		let _localctx: BeepStmtContext = new BeepStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, vbaParser.RULE_beepStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this.match(vbaParser.BEEP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public chdirStmt(): ChdirStmtContext {
		let _localctx: ChdirStmtContext = new ChdirStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, vbaParser.RULE_chdirStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 590;
			this.match(vbaParser.CHDIR);
			this.state = 591;
			this.match(vbaParser.WS);
			this.state = 592;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public chdriveStmt(): ChdriveStmtContext {
		let _localctx: ChdriveStmtContext = new ChdriveStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, vbaParser.RULE_chdriveStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 594;
			this.match(vbaParser.CHDRIVE);
			this.state = 595;
			this.match(vbaParser.WS);
			this.state = 596;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public closeStmt(): CloseStmtContext {
		let _localctx: CloseStmtContext = new CloseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, vbaParser.RULE_closeStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 598;
			this.match(vbaParser.CLOSE);
			this.state = 614;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 599;
				this.match(vbaParser.WS);
				this.state = 600;
				this.fileNumber();
				this.state = 611;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 602;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 601;
							this.match(vbaParser.WS);
							}
						}

						this.state = 604;
						this.match(vbaParser.T__0);
						this.state = 606;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 605;
							this.match(vbaParser.WS);
							}
						}

						this.state = 608;
						this.fileNumber();
						}
						}
					}
					this.state = 613;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
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
	public constStmt(): ConstStmtContext {
		let _localctx: ConstStmtContext = new ConstStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, vbaParser.RULE_constStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.FRIEND || _la === vbaParser.GLOBAL || _la === vbaParser.PRIVATE || _la === vbaParser.PUBLIC) {
				{
				this.state = 616;
				this.visibility();
				this.state = 617;
				this.match(vbaParser.WS);
				}
			}

			this.state = 621;
			this.match(vbaParser.CONST);
			this.state = 622;
			this.match(vbaParser.WS);
			this.state = 623;
			this.constSubStmt();
			this.state = 634;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 625;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 624;
						this.match(vbaParser.WS);
						}
					}

					this.state = 627;
					this.match(vbaParser.T__0);
					this.state = 629;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 628;
						this.match(vbaParser.WS);
						}
					}

					this.state = 631;
					this.constSubStmt();
					}
					}
				}
				this.state = 636;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
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
	public constSubStmt(): ConstSubStmtContext {
		let _localctx: ConstSubStmtContext = new ConstSubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, vbaParser.RULE_constSubStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 637;
			this.ambiguousIdentifier();
			this.state = 639;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__2) | (1 << vbaParser.T__4) | (1 << vbaParser.T__5) | (1 << vbaParser.T__6) | (1 << vbaParser.T__7))) !== 0) || _la === vbaParser.AMPERSAND) {
				{
				this.state = 638;
				this.typeHint();
				}
			}

			this.state = 643;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 641;
				this.match(vbaParser.WS);
				this.state = 642;
				this.asTypeClause();
				}
				break;
			}
			this.state = 646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 645;
				this.match(vbaParser.WS);
				}
			}

			this.state = 648;
			this.match(vbaParser.EQ);
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 649;
				this.match(vbaParser.WS);
				}
			}

			this.state = 652;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateStmt(): DateStmtContext {
		let _localctx: DateStmtContext = new DateStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, vbaParser.RULE_dateStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 654;
			this.match(vbaParser.DATE);
			this.state = 656;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 655;
				this.match(vbaParser.WS);
				}
			}

			this.state = 658;
			this.match(vbaParser.EQ);
			this.state = 660;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 659;
				this.match(vbaParser.WS);
				}
			}

			this.state = 662;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declareStmt(): DeclareStmtContext {
		let _localctx: DeclareStmtContext = new DeclareStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, vbaParser.RULE_declareStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 667;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.FRIEND || _la === vbaParser.GLOBAL || _la === vbaParser.PRIVATE || _la === vbaParser.PUBLIC) {
				{
				this.state = 664;
				this.visibility();
				this.state = 665;
				this.match(vbaParser.WS);
				}
			}

			this.state = 669;
			this.match(vbaParser.DECLARE);
			this.state = 670;
			this.match(vbaParser.WS);
			this.state = 673;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.PTRSAFE) {
				{
				this.state = 671;
				this.match(vbaParser.PTRSAFE);
				this.state = 672;
				this.match(vbaParser.WS);
				}
			}

			this.state = 680;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case vbaParser.FUNCTION:
				{
				{
				this.state = 675;
				this.match(vbaParser.FUNCTION);
				this.state = 677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__2) | (1 << vbaParser.T__4) | (1 << vbaParser.T__5) | (1 << vbaParser.T__6) | (1 << vbaParser.T__7))) !== 0) || _la === vbaParser.AMPERSAND) {
					{
					this.state = 676;
					this.typeHint();
					}
				}

				}
				}
				break;
			case vbaParser.SUB:
				{
				this.state = 679;
				this.match(vbaParser.SUB);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 682;
			this.match(vbaParser.WS);
			this.state = 683;
			this.ambiguousIdentifier();
			this.state = 685;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__2) | (1 << vbaParser.T__4) | (1 << vbaParser.T__5) | (1 << vbaParser.T__6) | (1 << vbaParser.T__7))) !== 0) || _la === vbaParser.AMPERSAND) {
				{
				this.state = 684;
				this.typeHint();
				}
			}

			this.state = 687;
			this.match(vbaParser.WS);
			this.state = 688;
			this.match(vbaParser.LIB);
			this.state = 689;
			this.match(vbaParser.WS);
			this.state = 690;
			this.match(vbaParser.STRINGLITERAL);
			this.state = 695;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 691;
				this.match(vbaParser.WS);
				this.state = 692;
				this.match(vbaParser.ALIAS);
				this.state = 693;
				this.match(vbaParser.WS);
				this.state = 694;
				this.match(vbaParser.STRINGLITERAL);
				}
				break;
			}
			this.state = 701;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 698;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 697;
					this.match(vbaParser.WS);
					}
				}

				this.state = 700;
				this.argList();
				}
				break;
			}
			this.state = 705;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 703;
				this.match(vbaParser.WS);
				this.state = 704;
				this.asTypeClause();
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
	public deftypeStmt(): DeftypeStmtContext {
		let _localctx: DeftypeStmtContext = new DeftypeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, vbaParser.RULE_deftypeStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			_la = this._input.LA(1);
			if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (vbaParser.DEFBOOL - 35)) | (1 << (vbaParser.DEFBYTE - 35)) | (1 << (vbaParser.DEFDATE - 35)) | (1 << (vbaParser.DEFDBL - 35)) | (1 << (vbaParser.DEFDEC - 35)) | (1 << (vbaParser.DEFCUR - 35)) | (1 << (vbaParser.DEFINT - 35)) | (1 << (vbaParser.DEFLNG - 35)) | (1 << (vbaParser.DEFOBJ - 35)) | (1 << (vbaParser.DEFSNG - 35)) | (1 << (vbaParser.DEFSTR - 35)) | (1 << (vbaParser.DEFVAR - 35)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 708;
			this.match(vbaParser.WS);
			this.state = 709;
			this.letterrange();
			this.state = 720;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 711;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 710;
						this.match(vbaParser.WS);
						}
					}

					this.state = 713;
					this.match(vbaParser.T__0);
					this.state = 715;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 714;
						this.match(vbaParser.WS);
						}
					}

					this.state = 717;
					this.letterrange();
					}
					}
				}
				this.state = 722;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
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
	public deleteSettingStmt(): DeleteSettingStmtContext {
		let _localctx: DeleteSettingStmtContext = new DeleteSettingStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, vbaParser.RULE_deleteSettingStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 723;
			this.match(vbaParser.DELETESETTING);
			this.state = 724;
			this.match(vbaParser.WS);
			this.state = 725;
			this.valueStmt(0);
			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 726;
				this.match(vbaParser.WS);
				}
			}

			this.state = 729;
			this.match(vbaParser.T__0);
			this.state = 731;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 730;
				this.match(vbaParser.WS);
				}
			}

			this.state = 733;
			this.valueStmt(0);
			this.state = 742;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 735;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 734;
					this.match(vbaParser.WS);
					}
				}

				this.state = 737;
				this.match(vbaParser.T__0);
				this.state = 739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 738;
					this.match(vbaParser.WS);
					}
				}

				this.state = 741;
				this.valueStmt(0);
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
	public doLoopStmt(): DoLoopStmtContext {
		let _localctx: DoLoopStmtContext = new DoLoopStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, vbaParser.RULE_doLoopStmt);
		let _la: number;
		try {
			this.state = 771;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 744;
				this.match(vbaParser.DO);
				this.state = 745;
				this.endOfStatement();
				this.state = 747;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
				case 1:
					{
					this.state = 746;
					this.block();
					}
					break;
				}
				this.state = 749;
				this.match(vbaParser.LOOP);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 751;
				this.match(vbaParser.DO);
				this.state = 752;
				this.match(vbaParser.WS);
				this.state = 753;
				_la = this._input.LA(1);
				if (!(_la === vbaParser.UNTIL || _la === vbaParser.WHILE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 754;
				this.match(vbaParser.WS);
				this.state = 755;
				this.valueStmt(0);
				this.state = 756;
				this.endOfStatement();
				this.state = 758;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
				case 1:
					{
					this.state = 757;
					this.block();
					}
					break;
				}
				this.state = 760;
				this.match(vbaParser.LOOP);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 762;
				this.match(vbaParser.DO);
				this.state = 763;
				this.endOfStatement();
				this.state = 764;
				this.block();
				this.state = 765;
				this.match(vbaParser.LOOP);
				this.state = 766;
				this.match(vbaParser.WS);
				this.state = 767;
				_la = this._input.LA(1);
				if (!(_la === vbaParser.UNTIL || _la === vbaParser.WHILE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 768;
				this.match(vbaParser.WS);
				this.state = 769;
				this.valueStmt(0);
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
	public endStmt(): EndStmtContext {
		let _localctx: EndStmtContext = new EndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, vbaParser.RULE_endStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 773;
			this.match(vbaParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumerationStmt(): EnumerationStmtContext {
		let _localctx: EnumerationStmtContext = new EnumerationStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, vbaParser.RULE_enumerationStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 778;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.FRIEND || _la === vbaParser.GLOBAL || _la === vbaParser.PRIVATE || _la === vbaParser.PUBLIC) {
				{
				this.state = 775;
				this.visibility();
				this.state = 776;
				this.match(vbaParser.WS);
				}
			}

			this.state = 780;
			this.match(vbaParser.ENUM);
			this.state = 781;
			this.match(vbaParser.WS);
			this.state = 782;
			this.ambiguousIdentifier();
			this.state = 783;
			this.endOfStatement();
			this.state = 787;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0) || _la === vbaParser.IDENTIFIER) {
				{
				{
				this.state = 784;
				this.enumerationStmt_Constant();
				}
				}
				this.state = 789;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 790;
			this.match(vbaParser.END_ENUM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumerationStmt_Constant(): EnumerationStmt_ConstantContext {
		let _localctx: EnumerationStmt_ConstantContext = new EnumerationStmt_ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, vbaParser.RULE_enumerationStmt_Constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 792;
			this.ambiguousIdentifier();
			this.state = 801;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				{
				this.state = 794;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 793;
					this.match(vbaParser.WS);
					}
				}

				this.state = 796;
				this.match(vbaParser.EQ);
				this.state = 798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 797;
					this.match(vbaParser.WS);
					}
				}

				this.state = 800;
				this.valueStmt(0);
				}
				break;
			}
			this.state = 803;
			this.endOfStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eraseStmt(): EraseStmtContext {
		let _localctx: EraseStmtContext = new EraseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, vbaParser.RULE_eraseStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 805;
			this.match(vbaParser.ERASE);
			this.state = 806;
			this.match(vbaParser.WS);
			this.state = 807;
			this.valueStmt(0);
			this.state = 815;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 808;
					this.match(vbaParser.T__0);
					this.state = 810;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 809;
						this.match(vbaParser.WS);
						}
					}

					this.state = 812;
					this.valueStmt(0);
					}
					}
				}
				this.state = 817;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
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
	public errorStmt(): ErrorStmtContext {
		let _localctx: ErrorStmtContext = new ErrorStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, vbaParser.RULE_errorStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 818;
			this.match(vbaParser.ERROR);
			this.state = 819;
			this.match(vbaParser.WS);
			this.state = 820;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventStmt(): EventStmtContext {
		let _localctx: EventStmtContext = new EventStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, vbaParser.RULE_eventStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 825;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.FRIEND || _la === vbaParser.GLOBAL || _la === vbaParser.PRIVATE || _la === vbaParser.PUBLIC) {
				{
				this.state = 822;
				this.visibility();
				this.state = 823;
				this.match(vbaParser.WS);
				}
			}

			this.state = 827;
			this.match(vbaParser.EVENT);
			this.state = 828;
			this.match(vbaParser.WS);
			this.state = 829;
			this.ambiguousIdentifier();
			this.state = 831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 830;
				this.match(vbaParser.WS);
				}
			}

			this.state = 833;
			this.argList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exitStmt(): ExitStmtContext {
		let _localctx: ExitStmtContext = new ExitStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, vbaParser.RULE_exitStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 835;
			_la = this._input.LA(1);
			if (!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (vbaParser.EXIT_DO - 68)) | (1 << (vbaParser.EXIT_FOR - 68)) | (1 << (vbaParser.EXIT_FUNCTION - 68)) | (1 << (vbaParser.EXIT_PROPERTY - 68)) | (1 << (vbaParser.EXIT_SUB - 68)))) !== 0))) {
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
	public filecopyStmt(): FilecopyStmtContext {
		let _localctx: FilecopyStmtContext = new FilecopyStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, vbaParser.RULE_filecopyStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 837;
			this.match(vbaParser.FILECOPY);
			this.state = 838;
			this.match(vbaParser.WS);
			this.state = 839;
			this.valueStmt(0);
			this.state = 841;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 840;
				this.match(vbaParser.WS);
				}
			}

			this.state = 843;
			this.match(vbaParser.T__0);
			this.state = 845;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 844;
				this.match(vbaParser.WS);
				}
			}

			this.state = 847;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forEachStmt(): ForEachStmtContext {
		let _localctx: ForEachStmtContext = new ForEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, vbaParser.RULE_forEachStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 849;
			this.match(vbaParser.FOR);
			this.state = 850;
			this.match(vbaParser.WS);
			this.state = 851;
			this.match(vbaParser.EACH);
			this.state = 852;
			this.match(vbaParser.WS);
			this.state = 853;
			this.ambiguousIdentifier();
			this.state = 855;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__2) | (1 << vbaParser.T__4) | (1 << vbaParser.T__5) | (1 << vbaParser.T__6) | (1 << vbaParser.T__7))) !== 0) || _la === vbaParser.AMPERSAND) {
				{
				this.state = 854;
				this.typeHint();
				}
			}

			this.state = 857;
			this.match(vbaParser.WS);
			this.state = 858;
			this.match(vbaParser.IN);
			this.state = 859;
			this.match(vbaParser.WS);
			this.state = 860;
			this.valueStmt(0);
			this.state = 861;
			this.endOfStatement();
			this.state = 863;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 862;
				this.block();
				}
				break;
			}
			this.state = 865;
			this.match(vbaParser.NEXT);
			this.state = 868;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				{
				this.state = 866;
				this.match(vbaParser.WS);
				this.state = 867;
				this.ambiguousIdentifier();
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
	public forNextStmt(): ForNextStmtContext {
		let _localctx: ForNextStmtContext = new ForNextStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, vbaParser.RULE_forNextStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 870;
			this.match(vbaParser.FOR);
			this.state = 871;
			this.match(vbaParser.WS);
			this.state = 872;
			this.ambiguousIdentifier();
			this.state = 874;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__2) | (1 << vbaParser.T__4) | (1 << vbaParser.T__5) | (1 << vbaParser.T__6) | (1 << vbaParser.T__7))) !== 0) || _la === vbaParser.AMPERSAND) {
				{
				this.state = 873;
				this.typeHint();
				}
			}

			this.state = 878;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 876;
				this.match(vbaParser.WS);
				this.state = 877;
				this.asTypeClause();
				}
				break;
			}
			this.state = 881;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 880;
				this.match(vbaParser.WS);
				}
			}

			this.state = 883;
			this.match(vbaParser.EQ);
			this.state = 885;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 884;
				this.match(vbaParser.WS);
				}
			}

			this.state = 887;
			this.valueStmt(0);
			this.state = 888;
			this.match(vbaParser.WS);
			this.state = 889;
			this.match(vbaParser.TO);
			this.state = 890;
			this.match(vbaParser.WS);
			this.state = 891;
			this.valueStmt(0);
			this.state = 896;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				{
				this.state = 892;
				this.match(vbaParser.WS);
				this.state = 893;
				this.match(vbaParser.STEP);
				this.state = 894;
				this.match(vbaParser.WS);
				this.state = 895;
				this.valueStmt(0);
				}
				break;
			}
			this.state = 898;
			this.endOfStatement();
			this.state = 900;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 899;
				this.block();
				}
				break;
			}
			this.state = 902;
			this.match(vbaParser.NEXT);
			this.state = 905;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				{
				this.state = 903;
				this.match(vbaParser.WS);
				this.state = 904;
				this.ambiguousIdentifier();
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
	public functionStmt(): FunctionStmtContext {
		let _localctx: FunctionStmtContext = new FunctionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, vbaParser.RULE_functionStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 910;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.FRIEND || _la === vbaParser.GLOBAL || _la === vbaParser.PRIVATE || _la === vbaParser.PUBLIC) {
				{
				this.state = 907;
				this.visibility();
				this.state = 908;
				this.match(vbaParser.WS);
				}
			}

			this.state = 914;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.STATIC) {
				{
				this.state = 912;
				this.match(vbaParser.STATIC);
				this.state = 913;
				this.match(vbaParser.WS);
				}
			}

			this.state = 916;
			this.match(vbaParser.FUNCTION);
			this.state = 918;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 917;
				this.match(vbaParser.WS);
				}
			}

			this.state = 920;
			this.ambiguousIdentifier();
			this.state = 922;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				{
				this.state = 921;
				this.typeHint();
				}
				break;
			}
			this.state = 928;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				{
				this.state = 925;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 924;
					this.match(vbaParser.WS);
					}
				}

				this.state = 927;
				this.argList();
				}
				break;
			}
			this.state = 934;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 931;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 930;
					this.match(vbaParser.WS);
					}
				}

				this.state = 933;
				this.asTypeClause();
				}
				break;
			}
			this.state = 936;
			this.endOfStatement();
			this.state = 938;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__3) | (1 << vbaParser.T__4) | (1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.EXIT_DO - 64)) | (1 << (vbaParser.EXIT_FOR - 64)) | (1 << (vbaParser.EXIT_FUNCTION - 64)) | (1 << (vbaParser.EXIT_PROPERTY - 64)) | (1 << (vbaParser.EXIT_SUB - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LINE_INPUT - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.MACRO_CONST - 96)) | (1 << (vbaParser.MACRO_IF - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.ON_ERROR - 96)) | (1 << (vbaParser.ON_LOCAL_ERROR - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0) || _la === vbaParser.IDENTIFIER) {
				{
				this.state = 937;
				this.block();
				}
			}

			this.state = 940;
			this.match(vbaParser.END_FUNCTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getStmt(): GetStmtContext {
		let _localctx: GetStmtContext = new GetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, vbaParser.RULE_getStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 942;
			this.match(vbaParser.GET);
			this.state = 943;
			this.match(vbaParser.WS);
			this.state = 944;
			this.fileNumber();
			this.state = 946;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 945;
				this.match(vbaParser.WS);
				}
			}

			this.state = 948;
			this.match(vbaParser.T__0);
			this.state = 950;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				this.state = 949;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 953;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__3) | (1 << vbaParser.T__4) | (1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (vbaParser.LPAREN - 193)) | (1 << (vbaParser.MINUS - 193)) | (1 << (vbaParser.PLUS - 193)) | (1 << (vbaParser.STRINGLITERAL - 193)) | (1 << (vbaParser.OCTLITERAL - 193)) | (1 << (vbaParser.HEXLITERAL - 193)) | (1 << (vbaParser.SHORTLITERAL - 193)) | (1 << (vbaParser.INTEGERLITERAL - 193)) | (1 << (vbaParser.DOUBLELITERAL - 193)) | (1 << (vbaParser.DATELITERAL - 193)) | (1 << (vbaParser.IDENTIFIER - 193)))) !== 0)) {
				{
				this.state = 952;
				this.valueStmt(0);
				}
			}

			this.state = 956;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 955;
				this.match(vbaParser.WS);
				}
			}

			this.state = 958;
			this.match(vbaParser.T__0);
			this.state = 960;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 959;
				this.match(vbaParser.WS);
				}
			}

			this.state = 962;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public goSubStmt(): GoSubStmtContext {
		let _localctx: GoSubStmtContext = new GoSubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, vbaParser.RULE_goSubStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 964;
			this.match(vbaParser.GOSUB);
			this.state = 965;
			this.match(vbaParser.WS);
			this.state = 966;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public goToStmt(): GoToStmtContext {
		let _localctx: GoToStmtContext = new GoToStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, vbaParser.RULE_goToStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 968;
			this.match(vbaParser.GOTO);
			this.state = 969;
			this.match(vbaParser.WS);
			this.state = 970;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifThenElseStmt(): IfThenElseStmtContext {
		let _localctx: IfThenElseStmtContext = new IfThenElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, vbaParser.RULE_ifThenElseStmt);
		let _la: number;
		try {
			this.state = 997;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				_localctx = new InlineIfThenElseContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 972;
				this.match(vbaParser.IF);
				this.state = 973;
				this.match(vbaParser.WS);
				this.state = 974;
				this.ifConditionStmt();
				this.state = 975;
				this.match(vbaParser.WS);
				this.state = 976;
				this.match(vbaParser.THEN);
				this.state = 977;
				this.match(vbaParser.WS);
				this.state = 978;
				this.blockStmt();
				this.state = 983;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 979;
					this.match(vbaParser.WS);
					this.state = 980;
					this.match(vbaParser.ELSE);
					this.state = 981;
					this.match(vbaParser.WS);
					this.state = 982;
					this.blockStmt();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new BlockIfThenElseContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 985;
				this.ifBlockStmt();
				this.state = 989;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === vbaParser.ELSEIF) {
					{
					{
					this.state = 986;
					this.ifElseIfBlockStmt();
					}
					}
					this.state = 991;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 993;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.ELSE) {
					{
					this.state = 992;
					this.ifElseBlockStmt();
					}
				}

				this.state = 995;
				this.match(vbaParser.END_IF);
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
	public ifBlockStmt(): IfBlockStmtContext {
		let _localctx: IfBlockStmtContext = new IfBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, vbaParser.RULE_ifBlockStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 999;
			this.match(vbaParser.IF);
			this.state = 1000;
			this.match(vbaParser.WS);
			this.state = 1001;
			this.ifConditionStmt();
			this.state = 1002;
			this.match(vbaParser.WS);
			this.state = 1003;
			this.match(vbaParser.THEN);
			this.state = 1004;
			this.endOfStatement();
			this.state = 1006;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				{
				this.state = 1005;
				this.block();
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
	public ifConditionStmt(): IfConditionStmtContext {
		let _localctx: IfConditionStmtContext = new IfConditionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, vbaParser.RULE_ifConditionStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1008;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifElseIfBlockStmt(): IfElseIfBlockStmtContext {
		let _localctx: IfElseIfBlockStmtContext = new IfElseIfBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, vbaParser.RULE_ifElseIfBlockStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1010;
			this.match(vbaParser.ELSEIF);
			this.state = 1011;
			this.match(vbaParser.WS);
			this.state = 1012;
			this.ifConditionStmt();
			this.state = 1013;
			this.match(vbaParser.WS);
			this.state = 1014;
			this.match(vbaParser.THEN);
			this.state = 1015;
			this.endOfStatement();
			this.state = 1017;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 1016;
				this.block();
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
	public ifElseBlockStmt(): IfElseBlockStmtContext {
		let _localctx: IfElseBlockStmtContext = new IfElseBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, vbaParser.RULE_ifElseBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1019;
			this.match(vbaParser.ELSE);
			this.state = 1020;
			this.endOfStatement();
			this.state = 1022;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__3) | (1 << vbaParser.T__4) | (1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.EXIT_DO - 64)) | (1 << (vbaParser.EXIT_FOR - 64)) | (1 << (vbaParser.EXIT_FUNCTION - 64)) | (1 << (vbaParser.EXIT_PROPERTY - 64)) | (1 << (vbaParser.EXIT_SUB - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LINE_INPUT - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.MACRO_CONST - 96)) | (1 << (vbaParser.MACRO_IF - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.ON_ERROR - 96)) | (1 << (vbaParser.ON_LOCAL_ERROR - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0) || _la === vbaParser.IDENTIFIER) {
				{
				this.state = 1021;
				this.block();
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
	public implementsStmt(): ImplementsStmtContext {
		let _localctx: ImplementsStmtContext = new ImplementsStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, vbaParser.RULE_implementsStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1024;
			this.match(vbaParser.IMPLEMENTS);
			this.state = 1025;
			this.match(vbaParser.WS);
			this.state = 1026;
			this.ambiguousIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inputStmt(): InputStmtContext {
		let _localctx: InputStmtContext = new InputStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, vbaParser.RULE_inputStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1028;
			this.match(vbaParser.INPUT);
			this.state = 1029;
			this.match(vbaParser.WS);
			this.state = 1030;
			this.fileNumber();
			this.state = 1039;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1032;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 1031;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1034;
					this.match(vbaParser.T__0);
					this.state = 1036;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 1035;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1038;
					this.valueStmt(0);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1041;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public killStmt(): KillStmtContext {
		let _localctx: KillStmtContext = new KillStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, vbaParser.RULE_killStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1043;
			this.match(vbaParser.KILL);
			this.state = 1044;
			this.match(vbaParser.WS);
			this.state = 1045;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letStmt(): LetStmtContext {
		let _localctx: LetStmtContext = new LetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, vbaParser.RULE_letStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1049;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				{
				this.state = 1047;
				this.match(vbaParser.LET);
				this.state = 1048;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 1051;
			this.implicitCallStmt_InStmt();
			this.state = 1053;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1052;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1055;
			_la = this._input.LA(1);
			if (!(((((_la - 189)) & ~0x1F) === 0 && ((1 << (_la - 189)) & ((1 << (vbaParser.EQ - 189)) | (1 << (vbaParser.MINUS_EQ - 189)) | (1 << (vbaParser.PLUS_EQ - 189)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1057;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1056;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1059;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lineInputStmt(): LineInputStmtContext {
		let _localctx: LineInputStmtContext = new LineInputStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, vbaParser.RULE_lineInputStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1061;
			this.match(vbaParser.LINE_INPUT);
			this.state = 1062;
			this.match(vbaParser.WS);
			this.state = 1063;
			this.fileNumber();
			this.state = 1065;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1064;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1067;
			this.match(vbaParser.T__0);
			this.state = 1069;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1068;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1071;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loadStmt(): LoadStmtContext {
		let _localctx: LoadStmtContext = new LoadStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, vbaParser.RULE_loadStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1073;
			this.match(vbaParser.LOAD);
			this.state = 1074;
			this.match(vbaParser.WS);
			this.state = 1075;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lockStmt(): LockStmtContext {
		let _localctx: LockStmtContext = new LockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, vbaParser.RULE_lockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1077;
			this.match(vbaParser.LOCK);
			this.state = 1078;
			this.match(vbaParser.WS);
			this.state = 1079;
			this.valueStmt(0);
			this.state = 1094;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				{
				this.state = 1081;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1080;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1083;
				this.match(vbaParser.T__0);
				this.state = 1085;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1084;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1087;
				this.valueStmt(0);
				this.state = 1092;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
				case 1:
					{
					this.state = 1088;
					this.match(vbaParser.WS);
					this.state = 1089;
					this.match(vbaParser.TO);
					this.state = 1090;
					this.match(vbaParser.WS);
					this.state = 1091;
					this.valueStmt(0);
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
	public lsetStmt(): LsetStmtContext {
		let _localctx: LsetStmtContext = new LsetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, vbaParser.RULE_lsetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1096;
			this.match(vbaParser.LSET);
			this.state = 1097;
			this.match(vbaParser.WS);
			this.state = 1098;
			this.implicitCallStmt_InStmt();
			this.state = 1100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1099;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1102;
			this.match(vbaParser.EQ);
			this.state = 1104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1103;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1106;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroConstStmt(): MacroConstStmtContext {
		let _localctx: MacroConstStmtContext = new MacroConstStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, vbaParser.RULE_macroConstStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1108;
			this.match(vbaParser.MACRO_CONST);
			this.state = 1110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1109;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1112;
			this.ambiguousIdentifier();
			this.state = 1114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1113;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1116;
			this.match(vbaParser.EQ);
			this.state = 1118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1117;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1120;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroIfThenElseStmt(): MacroIfThenElseStmtContext {
		let _localctx: MacroIfThenElseStmtContext = new MacroIfThenElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, vbaParser.RULE_macroIfThenElseStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1122;
			this.macroIfBlockStmt();
			this.state = 1126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === vbaParser.MACRO_ELSEIF) {
				{
				{
				this.state = 1123;
				this.macroElseIfBlockStmt();
				}
				}
				this.state = 1128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.MACRO_ELSE) {
				{
				this.state = 1129;
				this.macroElseBlockStmt();
				}
			}

			this.state = 1132;
			this.match(vbaParser.MACRO_END_IF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroIfBlockStmt(): MacroIfBlockStmtContext {
		let _localctx: MacroIfBlockStmtContext = new MacroIfBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, vbaParser.RULE_macroIfBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1134;
			this.match(vbaParser.MACRO_IF);
			this.state = 1136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1135;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1138;
			this.ifConditionStmt();
			this.state = 1139;
			this.match(vbaParser.WS);
			this.state = 1140;
			this.match(vbaParser.THEN);
			this.state = 1141;
			this.endOfStatement();
			this.state = 1147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__3) | (1 << vbaParser.T__4) | (1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.EXIT_DO - 64)) | (1 << (vbaParser.EXIT_FOR - 64)) | (1 << (vbaParser.EXIT_FUNCTION - 64)) | (1 << (vbaParser.EXIT_PROPERTY - 64)) | (1 << (vbaParser.EXIT_SUB - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LINE_INPUT - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.MACRO_CONST - 96)) | (1 << (vbaParser.MACRO_IF - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.ON_ERROR - 96)) | (1 << (vbaParser.ON_LOCAL_ERROR - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OPTION_BASE - 96)) | (1 << (vbaParser.OPTION_EXPLICIT - 96)) | (1 << (vbaParser.OPTION_COMPARE - 96)) | (1 << (vbaParser.OPTION_PRIVATE_MODULE - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PROPERTY_GET - 128)) | (1 << (vbaParser.PROPERTY_LET - 128)) | (1 << (vbaParser.PROPERTY_SET - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0) || _la === vbaParser.COMMENT || _la === vbaParser.IDENTIFIER) {
				{
				this.state = 1145;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
				case 1:
					{
					this.state = 1142;
					this.moduleDeclarations();
					}
					break;

				case 2:
					{
					this.state = 1143;
					this.moduleBody();
					}
					break;

				case 3:
					{
					this.state = 1144;
					this.block();
					}
					break;
				}
				}
				this.state = 1149;
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
	public macroElseIfBlockStmt(): MacroElseIfBlockStmtContext {
		let _localctx: MacroElseIfBlockStmtContext = new MacroElseIfBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, vbaParser.RULE_macroElseIfBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1150;
			this.match(vbaParser.MACRO_ELSEIF);
			this.state = 1152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1151;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1154;
			this.ifConditionStmt();
			this.state = 1155;
			this.match(vbaParser.WS);
			this.state = 1156;
			this.match(vbaParser.THEN);
			this.state = 1157;
			this.endOfStatement();
			this.state = 1163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__3) | (1 << vbaParser.T__4) | (1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.EXIT_DO - 64)) | (1 << (vbaParser.EXIT_FOR - 64)) | (1 << (vbaParser.EXIT_FUNCTION - 64)) | (1 << (vbaParser.EXIT_PROPERTY - 64)) | (1 << (vbaParser.EXIT_SUB - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LINE_INPUT - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.MACRO_CONST - 96)) | (1 << (vbaParser.MACRO_IF - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.ON_ERROR - 96)) | (1 << (vbaParser.ON_LOCAL_ERROR - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OPTION_BASE - 96)) | (1 << (vbaParser.OPTION_EXPLICIT - 96)) | (1 << (vbaParser.OPTION_COMPARE - 96)) | (1 << (vbaParser.OPTION_PRIVATE_MODULE - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PROPERTY_GET - 128)) | (1 << (vbaParser.PROPERTY_LET - 128)) | (1 << (vbaParser.PROPERTY_SET - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0) || _la === vbaParser.COMMENT || _la === vbaParser.IDENTIFIER) {
				{
				this.state = 1161;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
				case 1:
					{
					this.state = 1158;
					this.moduleDeclarations();
					}
					break;

				case 2:
					{
					this.state = 1159;
					this.moduleBody();
					}
					break;

				case 3:
					{
					this.state = 1160;
					this.block();
					}
					break;
				}
				}
				this.state = 1165;
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
	public macroElseBlockStmt(): MacroElseBlockStmtContext {
		let _localctx: MacroElseBlockStmtContext = new MacroElseBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, vbaParser.RULE_macroElseBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1166;
			this.match(vbaParser.MACRO_ELSE);
			this.state = 1167;
			this.endOfStatement();
			this.state = 1173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__3) | (1 << vbaParser.T__4) | (1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.EXIT_DO - 64)) | (1 << (vbaParser.EXIT_FOR - 64)) | (1 << (vbaParser.EXIT_FUNCTION - 64)) | (1 << (vbaParser.EXIT_PROPERTY - 64)) | (1 << (vbaParser.EXIT_SUB - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LINE_INPUT - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.MACRO_CONST - 96)) | (1 << (vbaParser.MACRO_IF - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.ON_ERROR - 96)) | (1 << (vbaParser.ON_LOCAL_ERROR - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OPTION_BASE - 96)) | (1 << (vbaParser.OPTION_EXPLICIT - 96)) | (1 << (vbaParser.OPTION_COMPARE - 96)) | (1 << (vbaParser.OPTION_PRIVATE_MODULE - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PROPERTY_GET - 128)) | (1 << (vbaParser.PROPERTY_LET - 128)) | (1 << (vbaParser.PROPERTY_SET - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0) || _la === vbaParser.COMMENT || _la === vbaParser.IDENTIFIER) {
				{
				this.state = 1171;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
				case 1:
					{
					this.state = 1168;
					this.moduleDeclarations();
					}
					break;

				case 2:
					{
					this.state = 1169;
					this.moduleBody();
					}
					break;

				case 3:
					{
					this.state = 1170;
					this.block();
					}
					break;
				}
				}
				this.state = 1175;
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
	public midStmt(): MidStmtContext {
		let _localctx: MidStmtContext = new MidStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, vbaParser.RULE_midStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1176;
			this.match(vbaParser.MID);
			this.state = 1178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1177;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1180;
			this.match(vbaParser.LPAREN);
			this.state = 1182;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				{
				this.state = 1181;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 1184;
			this.argsCall();
			this.state = 1186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1185;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1188;
			this.match(vbaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mkdirStmt(): MkdirStmtContext {
		let _localctx: MkdirStmtContext = new MkdirStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, vbaParser.RULE_mkdirStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1190;
			this.match(vbaParser.MKDIR);
			this.state = 1191;
			this.match(vbaParser.WS);
			this.state = 1192;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameStmt(): NameStmtContext {
		let _localctx: NameStmtContext = new NameStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, vbaParser.RULE_nameStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1194;
			this.match(vbaParser.NAME);
			this.state = 1195;
			this.match(vbaParser.WS);
			this.state = 1196;
			this.valueStmt(0);
			this.state = 1197;
			this.match(vbaParser.WS);
			this.state = 1198;
			this.match(vbaParser.AS);
			this.state = 1199;
			this.match(vbaParser.WS);
			this.state = 1200;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public onErrorStmt(): OnErrorStmtContext {
		let _localctx: OnErrorStmtContext = new OnErrorStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, vbaParser.RULE_onErrorStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1202;
			_la = this._input.LA(1);
			if (!(_la === vbaParser.ON_ERROR || _la === vbaParser.ON_LOCAL_ERROR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1203;
			this.match(vbaParser.WS);
			this.state = 1210;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case vbaParser.GOTO:
				{
				this.state = 1204;
				this.match(vbaParser.GOTO);
				this.state = 1205;
				this.match(vbaParser.WS);
				this.state = 1206;
				this.valueStmt(0);
				}
				break;
			case vbaParser.RESUME:
				{
				this.state = 1207;
				this.match(vbaParser.RESUME);
				this.state = 1208;
				this.match(vbaParser.WS);
				this.state = 1209;
				this.match(vbaParser.NEXT);
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
	public onGoToStmt(): OnGoToStmtContext {
		let _localctx: OnGoToStmtContext = new OnGoToStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, vbaParser.RULE_onGoToStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1212;
			this.match(vbaParser.ON);
			this.state = 1213;
			this.match(vbaParser.WS);
			this.state = 1214;
			this.valueStmt(0);
			this.state = 1215;
			this.match(vbaParser.WS);
			this.state = 1216;
			this.match(vbaParser.GOTO);
			this.state = 1217;
			this.match(vbaParser.WS);
			this.state = 1218;
			this.valueStmt(0);
			this.state = 1229;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1220;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 1219;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1222;
					this.match(vbaParser.T__0);
					this.state = 1224;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 1223;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1226;
					this.valueStmt(0);
					}
					}
				}
				this.state = 1231;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 149, this._ctx);
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
	public onGoSubStmt(): OnGoSubStmtContext {
		let _localctx: OnGoSubStmtContext = new OnGoSubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, vbaParser.RULE_onGoSubStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1232;
			this.match(vbaParser.ON);
			this.state = 1233;
			this.match(vbaParser.WS);
			this.state = 1234;
			this.valueStmt(0);
			this.state = 1235;
			this.match(vbaParser.WS);
			this.state = 1236;
			this.match(vbaParser.GOSUB);
			this.state = 1237;
			this.match(vbaParser.WS);
			this.state = 1238;
			this.valueStmt(0);
			this.state = 1249;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1240;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 1239;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1242;
					this.match(vbaParser.T__0);
					this.state = 1244;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 1243;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1246;
					this.valueStmt(0);
					}
					}
				}
				this.state = 1251;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
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
	public openStmt(): OpenStmtContext {
		let _localctx: OpenStmtContext = new OpenStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, vbaParser.RULE_openStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1252;
			this.match(vbaParser.OPEN);
			this.state = 1253;
			this.match(vbaParser.WS);
			this.state = 1254;
			this.valueStmt(0);
			this.state = 1255;
			this.match(vbaParser.WS);
			this.state = 1256;
			this.match(vbaParser.FOR);
			this.state = 1257;
			this.match(vbaParser.WS);
			this.state = 1258;
			_la = this._input.LA(1);
			if (!(_la === vbaParser.APPEND || _la === vbaParser.BINARY || _la === vbaParser.INPUT || _la === vbaParser.OUTPUT || _la === vbaParser.RANDOM)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1263;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				{
				this.state = 1259;
				this.match(vbaParser.WS);
				this.state = 1260;
				this.match(vbaParser.ACCESS);
				this.state = 1261;
				this.match(vbaParser.WS);
				this.state = 1262;
				_la = this._input.LA(1);
				if (!(_la === vbaParser.READ || _la === vbaParser.READ_WRITE || _la === vbaParser.WRITE)) {
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
			}
			this.state = 1267;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				{
				this.state = 1265;
				this.match(vbaParser.WS);
				this.state = 1266;
				_la = this._input.LA(1);
				if (!(((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (vbaParser.LOCK_READ - 99)) | (1 << (vbaParser.LOCK_WRITE - 99)) | (1 << (vbaParser.LOCK_READ_WRITE - 99)))) !== 0) || _la === vbaParser.SHARED)) {
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
			}
			this.state = 1269;
			this.match(vbaParser.WS);
			this.state = 1270;
			this.match(vbaParser.AS);
			this.state = 1271;
			this.match(vbaParser.WS);
			this.state = 1272;
			this.fileNumber();
			this.state = 1283;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				{
				this.state = 1273;
				this.match(vbaParser.WS);
				this.state = 1274;
				this.match(vbaParser.LEN);
				this.state = 1276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1275;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1278;
				this.match(vbaParser.EQ);
				this.state = 1280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1279;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1282;
				this.valueStmt(0);
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
	public outputList(): OutputListContext {
		let _localctx: OutputListContext = new OutputListContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, vbaParser.RULE_outputList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1318;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1285;
				this.outputList_Expression();
				this.state = 1298;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1287;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1286;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1289;
						_la = this._input.LA(1);
						if (!(_la === vbaParser.T__0 || _la === vbaParser.T__1)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1291;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
						case 1:
							{
							this.state = 1290;
							this.match(vbaParser.WS);
							}
							break;
						}
						this.state = 1294;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
						case 1:
							{
							this.state = 1293;
							this.outputList_Expression();
							}
							break;
						}
						}
						}
					}
					this.state = 1300;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__3) | (1 << vbaParser.T__4) | (1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (vbaParser.LPAREN - 193)) | (1 << (vbaParser.MINUS - 193)) | (1 << (vbaParser.PLUS - 193)) | (1 << (vbaParser.STRINGLITERAL - 193)) | (1 << (vbaParser.OCTLITERAL - 193)) | (1 << (vbaParser.HEXLITERAL - 193)) | (1 << (vbaParser.SHORTLITERAL - 193)) | (1 << (vbaParser.INTEGERLITERAL - 193)) | (1 << (vbaParser.DOUBLELITERAL - 193)) | (1 << (vbaParser.DATELITERAL - 193)) | (1 << (vbaParser.IDENTIFIER - 193)))) !== 0)) {
					{
					this.state = 1301;
					this.outputList_Expression();
					}
				}

				this.state = 1314;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1305;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1304;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1307;
						_la = this._input.LA(1);
						if (!(_la === vbaParser.T__0 || _la === vbaParser.T__1)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1309;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
						case 1:
							{
							this.state = 1308;
							this.match(vbaParser.WS);
							}
							break;
						}
						this.state = 1312;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 165, this._ctx) ) {
						case 1:
							{
							this.state = 1311;
							this.outputList_Expression();
							}
							break;
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1316;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 166, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public outputList_Expression(): OutputList_ExpressionContext {
		let _localctx: OutputList_ExpressionContext = new OutputList_ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, vbaParser.RULE_outputList_Expression);
		let _la: number;
		try {
			this.state = 1337;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1320;
				this.valueStmt(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1321;
				_la = this._input.LA(1);
				if (!(_la === vbaParser.SPC || _la === vbaParser.TAB)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1335;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
				case 1:
					{
					this.state = 1323;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 1322;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1325;
					this.match(vbaParser.LPAREN);
					this.state = 1327;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
					case 1:
						{
						this.state = 1326;
						this.match(vbaParser.WS);
						}
						break;
					}
					this.state = 1329;
					this.argsCall();
					this.state = 1331;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 1330;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1333;
					this.match(vbaParser.RPAREN);
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
	public printStmt(): PrintStmtContext {
		let _localctx: PrintStmtContext = new PrintStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, vbaParser.RULE_printStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1339;
			this.match(vbaParser.PRINT);
			this.state = 1340;
			this.match(vbaParser.WS);
			this.state = 1341;
			this.fileNumber();
			this.state = 1343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1342;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1345;
			this.match(vbaParser.T__0);
			this.state = 1350;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				{
				this.state = 1347;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
				case 1:
					{
					this.state = 1346;
					this.match(vbaParser.WS);
					}
					break;
				}
				this.state = 1349;
				this.outputList();
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
	public propertyGetStmt(): PropertyGetStmtContext {
		let _localctx: PropertyGetStmtContext = new PropertyGetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, vbaParser.RULE_propertyGetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.FRIEND || _la === vbaParser.GLOBAL || _la === vbaParser.PRIVATE || _la === vbaParser.PUBLIC) {
				{
				this.state = 1352;
				this.visibility();
				this.state = 1353;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.STATIC) {
				{
				this.state = 1357;
				this.match(vbaParser.STATIC);
				this.state = 1358;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1361;
			this.match(vbaParser.PROPERTY_GET);
			this.state = 1362;
			this.match(vbaParser.WS);
			this.state = 1363;
			this.ambiguousIdentifier();
			this.state = 1365;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1364;
				this.typeHint();
				}
				break;
			}
			this.state = 1371;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				{
				this.state = 1368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1367;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1370;
				this.argList();
				}
				break;
			}
			this.state = 1375;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				{
				this.state = 1373;
				this.match(vbaParser.WS);
				this.state = 1374;
				this.asTypeClause();
				}
				break;
			}
			this.state = 1377;
			this.endOfStatement();
			this.state = 1379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__3) | (1 << vbaParser.T__4) | (1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.EXIT_DO - 64)) | (1 << (vbaParser.EXIT_FOR - 64)) | (1 << (vbaParser.EXIT_FUNCTION - 64)) | (1 << (vbaParser.EXIT_PROPERTY - 64)) | (1 << (vbaParser.EXIT_SUB - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LINE_INPUT - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.MACRO_CONST - 96)) | (1 << (vbaParser.MACRO_IF - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.ON_ERROR - 96)) | (1 << (vbaParser.ON_LOCAL_ERROR - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0) || _la === vbaParser.IDENTIFIER) {
				{
				this.state = 1378;
				this.block();
				}
			}

			this.state = 1381;
			this.match(vbaParser.END_PROPERTY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertySetStmt(): PropertySetStmtContext {
		let _localctx: PropertySetStmtContext = new PropertySetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, vbaParser.RULE_propertySetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.FRIEND || _la === vbaParser.GLOBAL || _la === vbaParser.PRIVATE || _la === vbaParser.PUBLIC) {
				{
				this.state = 1383;
				this.visibility();
				this.state = 1384;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.STATIC) {
				{
				this.state = 1388;
				this.match(vbaParser.STATIC);
				this.state = 1389;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1392;
			this.match(vbaParser.PROPERTY_SET);
			this.state = 1393;
			this.match(vbaParser.WS);
			this.state = 1394;
			this.ambiguousIdentifier();
			this.state = 1399;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				{
				this.state = 1396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1395;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1398;
				this.argList();
				}
				break;
			}
			this.state = 1401;
			this.endOfStatement();
			this.state = 1403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__3) | (1 << vbaParser.T__4) | (1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.EXIT_DO - 64)) | (1 << (vbaParser.EXIT_FOR - 64)) | (1 << (vbaParser.EXIT_FUNCTION - 64)) | (1 << (vbaParser.EXIT_PROPERTY - 64)) | (1 << (vbaParser.EXIT_SUB - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LINE_INPUT - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.MACRO_CONST - 96)) | (1 << (vbaParser.MACRO_IF - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.ON_ERROR - 96)) | (1 << (vbaParser.ON_LOCAL_ERROR - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0) || _la === vbaParser.IDENTIFIER) {
				{
				this.state = 1402;
				this.block();
				}
			}

			this.state = 1405;
			this.match(vbaParser.END_PROPERTY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyLetStmt(): PropertyLetStmtContext {
		let _localctx: PropertyLetStmtContext = new PropertyLetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, vbaParser.RULE_propertyLetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.FRIEND || _la === vbaParser.GLOBAL || _la === vbaParser.PRIVATE || _la === vbaParser.PUBLIC) {
				{
				this.state = 1407;
				this.visibility();
				this.state = 1408;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.STATIC) {
				{
				this.state = 1412;
				this.match(vbaParser.STATIC);
				this.state = 1413;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1416;
			this.match(vbaParser.PROPERTY_LET);
			this.state = 1417;
			this.match(vbaParser.WS);
			this.state = 1418;
			this.ambiguousIdentifier();
			this.state = 1423;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
			case 1:
				{
				this.state = 1420;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1419;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1422;
				this.argList();
				}
				break;
			}
			this.state = 1425;
			this.endOfStatement();
			this.state = 1427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__3) | (1 << vbaParser.T__4) | (1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.EXIT_DO - 64)) | (1 << (vbaParser.EXIT_FOR - 64)) | (1 << (vbaParser.EXIT_FUNCTION - 64)) | (1 << (vbaParser.EXIT_PROPERTY - 64)) | (1 << (vbaParser.EXIT_SUB - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LINE_INPUT - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.MACRO_CONST - 96)) | (1 << (vbaParser.MACRO_IF - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.ON_ERROR - 96)) | (1 << (vbaParser.ON_LOCAL_ERROR - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0) || _la === vbaParser.IDENTIFIER) {
				{
				this.state = 1426;
				this.block();
				}
			}

			this.state = 1429;
			this.match(vbaParser.END_PROPERTY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public putStmt(): PutStmtContext {
		let _localctx: PutStmtContext = new PutStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, vbaParser.RULE_putStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1431;
			this.match(vbaParser.PUT);
			this.state = 1432;
			this.match(vbaParser.WS);
			this.state = 1433;
			this.fileNumber();
			this.state = 1435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1434;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1437;
			this.match(vbaParser.T__0);
			this.state = 1439;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				{
				this.state = 1438;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 1442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__3) | (1 << vbaParser.T__4) | (1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (vbaParser.LPAREN - 193)) | (1 << (vbaParser.MINUS - 193)) | (1 << (vbaParser.PLUS - 193)) | (1 << (vbaParser.STRINGLITERAL - 193)) | (1 << (vbaParser.OCTLITERAL - 193)) | (1 << (vbaParser.HEXLITERAL - 193)) | (1 << (vbaParser.SHORTLITERAL - 193)) | (1 << (vbaParser.INTEGERLITERAL - 193)) | (1 << (vbaParser.DOUBLELITERAL - 193)) | (1 << (vbaParser.DATELITERAL - 193)) | (1 << (vbaParser.IDENTIFIER - 193)))) !== 0)) {
				{
				this.state = 1441;
				this.valueStmt(0);
				}
			}

			this.state = 1445;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1444;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1447;
			this.match(vbaParser.T__0);
			this.state = 1449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1448;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1451;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public raiseEventStmt(): RaiseEventStmtContext {
		let _localctx: RaiseEventStmtContext = new RaiseEventStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, vbaParser.RULE_raiseEventStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1453;
			this.match(vbaParser.RAISEEVENT);
			this.state = 1454;
			this.match(vbaParser.WS);
			this.state = 1455;
			this.ambiguousIdentifier();
			this.state = 1470;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				{
				this.state = 1457;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1456;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1459;
				this.match(vbaParser.LPAREN);
				this.state = 1461;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
				case 1:
					{
					this.state = 1460;
					this.match(vbaParser.WS);
					}
					break;
				}
				this.state = 1467;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 201, this._ctx) ) {
				case 1:
					{
					this.state = 1463;
					this.argsCall();
					this.state = 1465;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 1464;
						this.match(vbaParser.WS);
						}
					}

					}
					break;
				}
				this.state = 1469;
				this.match(vbaParser.RPAREN);
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
	public randomizeStmt(): RandomizeStmtContext {
		let _localctx: RandomizeStmtContext = new RandomizeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, vbaParser.RULE_randomizeStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1472;
			this.match(vbaParser.RANDOMIZE);
			this.state = 1475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				{
				this.state = 1473;
				this.match(vbaParser.WS);
				this.state = 1474;
				this.valueStmt(0);
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
	public redimStmt(): RedimStmtContext {
		let _localctx: RedimStmtContext = new RedimStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, vbaParser.RULE_redimStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1477;
			this.match(vbaParser.REDIM);
			this.state = 1478;
			this.match(vbaParser.WS);
			this.state = 1481;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 204, this._ctx) ) {
			case 1:
				{
				this.state = 1479;
				this.match(vbaParser.PRESERVE);
				this.state = 1480;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 1483;
			this.redimSubStmt();
			this.state = 1494;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1485;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 1484;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1487;
					this.match(vbaParser.T__0);
					this.state = 1489;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 1488;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1491;
					this.redimSubStmt();
					}
					}
				}
				this.state = 1496;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 207, this._ctx);
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
	public redimSubStmt(): RedimSubStmtContext {
		let _localctx: RedimSubStmtContext = new RedimSubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, vbaParser.RULE_redimSubStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1497;
			this.implicitCallStmt_InStmt();
			this.state = 1499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1498;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1501;
			this.match(vbaParser.LPAREN);
			this.state = 1503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1502;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1505;
			this.subscripts();
			this.state = 1507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1506;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1509;
			this.match(vbaParser.RPAREN);
			this.state = 1512;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				{
				this.state = 1510;
				this.match(vbaParser.WS);
				this.state = 1511;
				this.asTypeClause();
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
	public resetStmt(): ResetStmtContext {
		let _localctx: ResetStmtContext = new ResetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, vbaParser.RULE_resetStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1514;
			this.match(vbaParser.RESET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resumeStmt(): ResumeStmtContext {
		let _localctx: ResumeStmtContext = new ResumeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, vbaParser.RULE_resumeStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1516;
			this.match(vbaParser.RESUME);
			this.state = 1522;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 213, this._ctx) ) {
			case 1:
				{
				this.state = 1517;
				this.match(vbaParser.WS);
				this.state = 1520;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 212, this._ctx) ) {
				case 1:
					{
					this.state = 1518;
					this.match(vbaParser.NEXT);
					}
					break;

				case 2:
					{
					this.state = 1519;
					this.ambiguousIdentifier();
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
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, vbaParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1524;
			this.match(vbaParser.RETURN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rmdirStmt(): RmdirStmtContext {
		let _localctx: RmdirStmtContext = new RmdirStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, vbaParser.RULE_rmdirStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1526;
			this.match(vbaParser.RMDIR);
			this.state = 1527;
			this.match(vbaParser.WS);
			this.state = 1528;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rsetStmt(): RsetStmtContext {
		let _localctx: RsetStmtContext = new RsetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, vbaParser.RULE_rsetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1530;
			this.match(vbaParser.RSET);
			this.state = 1531;
			this.match(vbaParser.WS);
			this.state = 1532;
			this.implicitCallStmt_InStmt();
			this.state = 1534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1533;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1536;
			this.match(vbaParser.EQ);
			this.state = 1538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1537;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1540;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public savepictureStmt(): SavepictureStmtContext {
		let _localctx: SavepictureStmtContext = new SavepictureStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, vbaParser.RULE_savepictureStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1542;
			this.match(vbaParser.SAVEPICTURE);
			this.state = 1543;
			this.match(vbaParser.WS);
			this.state = 1544;
			this.valueStmt(0);
			this.state = 1546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1545;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1548;
			this.match(vbaParser.T__0);
			this.state = 1550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1549;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1552;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public saveSettingStmt(): SaveSettingStmtContext {
		let _localctx: SaveSettingStmtContext = new SaveSettingStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, vbaParser.RULE_saveSettingStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1554;
			this.match(vbaParser.SAVESETTING);
			this.state = 1555;
			this.match(vbaParser.WS);
			this.state = 1556;
			this.valueStmt(0);
			this.state = 1558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1557;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1560;
			this.match(vbaParser.T__0);
			this.state = 1562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1561;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1564;
			this.valueStmt(0);
			this.state = 1566;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1565;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1568;
			this.match(vbaParser.T__0);
			this.state = 1570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1569;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1572;
			this.valueStmt(0);
			this.state = 1574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1573;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1576;
			this.match(vbaParser.T__0);
			this.state = 1578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1577;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1580;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public seekStmt(): SeekStmtContext {
		let _localctx: SeekStmtContext = new SeekStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, vbaParser.RULE_seekStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1582;
			this.match(vbaParser.SEEK);
			this.state = 1583;
			this.match(vbaParser.WS);
			this.state = 1584;
			this.fileNumber();
			this.state = 1586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1585;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1588;
			this.match(vbaParser.T__0);
			this.state = 1590;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1589;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1592;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectCaseStmt(): SelectCaseStmtContext {
		let _localctx: SelectCaseStmtContext = new SelectCaseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, vbaParser.RULE_selectCaseStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1594;
			this.match(vbaParser.SELECT);
			this.state = 1595;
			this.match(vbaParser.WS);
			this.state = 1596;
			this.match(vbaParser.CASE);
			this.state = 1597;
			this.match(vbaParser.WS);
			this.state = 1598;
			this.valueStmt(0);
			this.state = 1599;
			this.endOfStatement();
			this.state = 1603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === vbaParser.CASE) {
				{
				{
				this.state = 1600;
				this.sC_Case();
				}
				}
				this.state = 1605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1606;
			this.match(vbaParser.END_SELECT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sC_Selection(): SC_SelectionContext {
		let _localctx: SC_SelectionContext = new SC_SelectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, vbaParser.RULE_sC_Selection);
		let _la: number;
		try {
			this.state = 1625;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 229, this._ctx) ) {
			case 1:
				_localctx = new CaseCondIsContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1608;
				this.match(vbaParser.IS);
				this.state = 1610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1609;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1612;
				this.comparisonOperator();
				this.state = 1614;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1613;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1616;
				this.valueStmt(0);
				}
				break;

			case 2:
				_localctx = new CaseCondToContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1618;
				this.valueStmt(0);
				this.state = 1619;
				this.match(vbaParser.WS);
				this.state = 1620;
				this.match(vbaParser.TO);
				this.state = 1621;
				this.match(vbaParser.WS);
				this.state = 1622;
				this.valueStmt(0);
				}
				break;

			case 3:
				_localctx = new CaseCondValueContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1624;
				this.valueStmt(0);
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
	public sC_Case(): SC_CaseContext {
		let _localctx: SC_CaseContext = new SC_CaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, vbaParser.RULE_sC_Case);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1627;
			this.match(vbaParser.CASE);
			this.state = 1628;
			this.match(vbaParser.WS);
			this.state = 1629;
			this.sC_Cond();
			this.state = 1630;
			this.endOfStatement();
			this.state = 1632;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				{
				this.state = 1631;
				this.block();
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
	public sC_Cond(): SC_CondContext {
		let _localctx: SC_CondContext = new SC_CondContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, vbaParser.RULE_sC_Cond);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1649;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 234, this._ctx) ) {
			case 1:
				_localctx = new CaseCondElseContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1634;
				this.match(vbaParser.ELSE);
				}
				break;

			case 2:
				_localctx = new CaseCondSelectionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1635;
				this.sC_Selection();
				this.state = 1646;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 233, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1637;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1636;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1639;
						this.match(vbaParser.T__0);
						this.state = 1641;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1640;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1643;
						this.sC_Selection();
						}
						}
					}
					this.state = 1648;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 233, this._ctx);
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
	public sendkeysStmt(): SendkeysStmtContext {
		let _localctx: SendkeysStmtContext = new SendkeysStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, vbaParser.RULE_sendkeysStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1651;
			this.match(vbaParser.SENDKEYS);
			this.state = 1652;
			this.match(vbaParser.WS);
			this.state = 1653;
			this.valueStmt(0);
			this.state = 1662;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 237, this._ctx) ) {
			case 1:
				{
				this.state = 1655;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1654;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1657;
				this.match(vbaParser.T__0);
				this.state = 1659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1658;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1661;
				this.valueStmt(0);
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
	public setattrStmt(): SetattrStmtContext {
		let _localctx: SetattrStmtContext = new SetattrStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, vbaParser.RULE_setattrStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1664;
			this.match(vbaParser.SETATTR);
			this.state = 1665;
			this.match(vbaParser.WS);
			this.state = 1666;
			this.valueStmt(0);
			this.state = 1668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1667;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1670;
			this.match(vbaParser.T__0);
			this.state = 1672;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1671;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1674;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setStmt(): SetStmtContext {
		let _localctx: SetStmtContext = new SetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, vbaParser.RULE_setStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1676;
			this.match(vbaParser.SET);
			this.state = 1677;
			this.match(vbaParser.WS);
			this.state = 1678;
			this.implicitCallStmt_InStmt();
			this.state = 1680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1679;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1682;
			this.match(vbaParser.EQ);
			this.state = 1684;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1683;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1686;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stopStmt(): StopStmtContext {
		let _localctx: StopStmtContext = new StopStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, vbaParser.RULE_stopStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1688;
			this.match(vbaParser.STOP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subStmt(): SubStmtContext {
		let _localctx: SubStmtContext = new SubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, vbaParser.RULE_subStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1693;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.FRIEND || _la === vbaParser.GLOBAL || _la === vbaParser.PRIVATE || _la === vbaParser.PUBLIC) {
				{
				this.state = 1690;
				this.visibility();
				this.state = 1691;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.STATIC) {
				{
				this.state = 1695;
				this.match(vbaParser.STATIC);
				this.state = 1696;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1699;
			this.match(vbaParser.SUB);
			this.state = 1701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1700;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1703;
			this.ambiguousIdentifier();
			this.state = 1708;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 246, this._ctx) ) {
			case 1:
				{
				this.state = 1705;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1704;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1707;
				this.argList();
				}
				break;
			}
			this.state = 1710;
			this.endOfStatement();
			this.state = 1712;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__3) | (1 << vbaParser.T__4) | (1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.EXIT_DO - 64)) | (1 << (vbaParser.EXIT_FOR - 64)) | (1 << (vbaParser.EXIT_FUNCTION - 64)) | (1 << (vbaParser.EXIT_PROPERTY - 64)) | (1 << (vbaParser.EXIT_SUB - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LINE_INPUT - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.MACRO_CONST - 96)) | (1 << (vbaParser.MACRO_IF - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.ON_ERROR - 96)) | (1 << (vbaParser.ON_LOCAL_ERROR - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0) || _la === vbaParser.IDENTIFIER) {
				{
				this.state = 1711;
				this.block();
				}
			}

			this.state = 1714;
			this.match(vbaParser.END_SUB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeStmt(): TimeStmtContext {
		let _localctx: TimeStmtContext = new TimeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, vbaParser.RULE_timeStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1716;
			this.match(vbaParser.TIME);
			this.state = 1718;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1717;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1720;
			this.match(vbaParser.EQ);
			this.state = 1722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 1721;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1724;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeStmt(): TypeStmtContext {
		let _localctx: TypeStmtContext = new TypeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, vbaParser.RULE_typeStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1729;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.FRIEND || _la === vbaParser.GLOBAL || _la === vbaParser.PRIVATE || _la === vbaParser.PUBLIC) {
				{
				this.state = 1726;
				this.visibility();
				this.state = 1727;
				this.match(vbaParser.WS);
				}
			}

			this.state = 1731;
			this.match(vbaParser.TYPE);
			this.state = 1732;
			this.match(vbaParser.WS);
			this.state = 1733;
			this.ambiguousIdentifier();
			this.state = 1734;
			this.endOfStatement();
			this.state = 1738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0) || _la === vbaParser.IDENTIFIER) {
				{
				{
				this.state = 1735;
				this.typeStmt_Element();
				}
				}
				this.state = 1740;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1741;
			this.match(vbaParser.END_TYPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeStmt_Element(): TypeStmt_ElementContext {
		let _localctx: TypeStmt_ElementContext = new TypeStmt_ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, vbaParser.RULE_typeStmt_Element);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1743;
			this.ambiguousIdentifier();
			this.state = 1758;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 256, this._ctx) ) {
			case 1:
				{
				this.state = 1745;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1744;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1747;
				this.match(vbaParser.LPAREN);
				this.state = 1752;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 254, this._ctx) ) {
				case 1:
					{
					this.state = 1749;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 1748;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1751;
					this.subscripts();
					}
					break;
				}
				this.state = 1755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1754;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1757;
				this.match(vbaParser.RPAREN);
				}
				break;
			}
			this.state = 1762;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				{
				this.state = 1760;
				this.match(vbaParser.WS);
				this.state = 1761;
				this.asTypeClause();
				}
				break;
			}
			this.state = 1764;
			this.endOfStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeOfStmt(): TypeOfStmtContext {
		let _localctx: TypeOfStmtContext = new TypeOfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, vbaParser.RULE_typeOfStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1766;
			this.match(vbaParser.TYPEOF);
			this.state = 1767;
			this.match(vbaParser.WS);
			this.state = 1768;
			this.valueStmt(0);
			this.state = 1773;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 258, this._ctx) ) {
			case 1:
				{
				this.state = 1769;
				this.match(vbaParser.WS);
				this.state = 1770;
				this.match(vbaParser.IS);
				this.state = 1771;
				this.match(vbaParser.WS);
				this.state = 1772;
				this.type();
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
	public unloadStmt(): UnloadStmtContext {
		let _localctx: UnloadStmtContext = new UnloadStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, vbaParser.RULE_unloadStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1775;
			this.match(vbaParser.UNLOAD);
			this.state = 1776;
			this.match(vbaParser.WS);
			this.state = 1777;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unlockStmt(): UnlockStmtContext {
		let _localctx: UnlockStmtContext = new UnlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, vbaParser.RULE_unlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1779;
			this.match(vbaParser.UNLOCK);
			this.state = 1780;
			this.match(vbaParser.WS);
			this.state = 1781;
			this.fileNumber();
			this.state = 1796;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 262, this._ctx) ) {
			case 1:
				{
				this.state = 1783;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1782;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1785;
				this.match(vbaParser.T__0);
				this.state = 1787;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1786;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1789;
				this.valueStmt(0);
				this.state = 1794;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 261, this._ctx) ) {
				case 1:
					{
					this.state = 1790;
					this.match(vbaParser.WS);
					this.state = 1791;
					this.match(vbaParser.TO);
					this.state = 1792;
					this.match(vbaParser.WS);
					this.state = 1793;
					this.valueStmt(0);
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

	public valueStmt(): ValueStmtContext;
	public valueStmt(_p: number): ValueStmtContext;
	// @RuleVersion(0)
	public valueStmt(_p?: number): ValueStmtContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ValueStmtContext = new ValueStmtContext(this._ctx, _parentState);
		let _prevctx: ValueStmtContext = _localctx;
		let _startState: number = 200;
		this.enterRecursionRule(_localctx, 200, vbaParser.RULE_valueStmt, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1858;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 274, this._ctx) ) {
			case 1:
				{
				_localctx = new VsLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 1799;
				this.literal();
				}
				break;

			case 2:
				{
				_localctx = new VsICSContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1800;
				this.implicitCallStmt_InStmt();
				}
				break;

			case 3:
				{
				_localctx = new VsStructContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1801;
				this.match(vbaParser.LPAREN);
				this.state = 1803;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1802;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1805;
				this.valueStmt(0);
				this.state = 1816;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === vbaParser.T__0 || _la === vbaParser.WS) {
					{
					{
					this.state = 1807;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 1806;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1809;
					this.match(vbaParser.T__0);
					this.state = 1811;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 1810;
						this.match(vbaParser.WS);
						}
					}

					this.state = 1813;
					this.valueStmt(0);
					}
					}
					this.state = 1818;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1819;
				this.match(vbaParser.RPAREN);
				}
				break;

			case 4:
				{
				_localctx = new VsNewContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1821;
				this.match(vbaParser.NEW);
				this.state = 1823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1822;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1825;
				this.valueStmt(28);
				}
				break;

			case 5:
				{
				_localctx = new VsTypeOfContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1826;
				this.typeOfStmt();
				}
				break;

			case 6:
				{
				_localctx = new VsMidContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1827;
				this.midStmt();
				}
				break;

			case 7:
				{
				_localctx = new VsAddressOfContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1828;
				this.match(vbaParser.ADDRESSOF);
				this.state = 1830;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1829;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1832;
				this.valueStmt(25);
				}
				break;

			case 8:
				{
				_localctx = new VsAssignContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1833;
				this.implicitCallStmt_InStmt();
				this.state = 1835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1834;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1837;
				this.match(vbaParser.ASSIGN);
				this.state = 1839;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1838;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1841;
				this.valueStmt(24);
				}
				break;

			case 9:
				{
				_localctx = new VsNegationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1843;
				this.match(vbaParser.MINUS);
				this.state = 1845;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1844;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1847;
				this.valueStmt(14);
				}
				break;

			case 10:
				{
				_localctx = new VsPlusContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1848;
				this.match(vbaParser.PLUS);
				this.state = 1850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1849;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1852;
				this.valueStmt(13);
				}
				break;

			case 11:
				{
				_localctx = new VsNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 1853;
				this.match(vbaParser.NOT);
				this.state = 1855;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 1854;
					this.match(vbaParser.WS);
					}
				}

				this.state = 1857;
				this.valueStmt(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2042;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 316, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2040;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 315, this._ctx) ) {
					case 1:
						{
						_localctx = new VsIsContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1860;
						if (!(this.precpred(this._ctx, 23))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 23)");
						}
						this.state = 1862;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1861;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1864;
						this.match(vbaParser.IS);
						this.state = 1866;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1865;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1868;
						this.valueStmt(24);
						}
						break;

					case 2:
						{
						_localctx = new VsLikeContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1869;
						if (!(this.precpred(this._ctx, 22))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 22)");
						}
						this.state = 1871;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1870;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1873;
						this.match(vbaParser.LIKE);
						this.state = 1875;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1874;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1877;
						this.valueStmt(23);
						}
						break;

					case 3:
						{
						_localctx = new VsGeqContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1878;
						if (!(this.precpred(this._ctx, 21))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 21)");
						}
						this.state = 1880;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1879;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1882;
						this.match(vbaParser.GEQ);
						this.state = 1884;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1883;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1886;
						this.valueStmt(22);
						}
						break;

					case 4:
						{
						_localctx = new VsLeqContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1887;
						if (!(this.precpred(this._ctx, 20))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 20)");
						}
						this.state = 1889;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1888;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1891;
						this.match(vbaParser.LEQ);
						this.state = 1893;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1892;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1895;
						this.valueStmt(21);
						}
						break;

					case 5:
						{
						_localctx = new VsGtContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1896;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 1898;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1897;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1900;
						this.match(vbaParser.GT);
						this.state = 1902;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1901;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1904;
						this.valueStmt(20);
						}
						break;

					case 6:
						{
						_localctx = new VsLtContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1905;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 1907;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1906;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1909;
						this.match(vbaParser.LT);
						this.state = 1911;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1910;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1913;
						this.valueStmt(19);
						}
						break;

					case 7:
						{
						_localctx = new VsNeqContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1914;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 1916;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1915;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1918;
						this.match(vbaParser.NEQ);
						this.state = 1920;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1919;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1922;
						this.valueStmt(18);
						}
						break;

					case 8:
						{
						_localctx = new VsEqContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1923;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 1925;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1924;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1927;
						this.match(vbaParser.EQ);
						this.state = 1929;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1928;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1931;
						this.valueStmt(17);
						}
						break;

					case 9:
						{
						_localctx = new VsPowContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1932;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 1934;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1933;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1936;
						this.match(vbaParser.POW);
						this.state = 1938;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1937;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1940;
						this.valueStmt(16);
						}
						break;

					case 10:
						{
						_localctx = new VsDivContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1941;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 1943;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1942;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1945;
						this.match(vbaParser.DIV);
						this.state = 1947;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1946;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1949;
						this.valueStmt(13);
						}
						break;

					case 11:
						{
						_localctx = new VsMultContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1950;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 1952;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1951;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1954;
						this.match(vbaParser.MULT);
						this.state = 1956;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1955;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1958;
						this.valueStmt(12);
						}
						break;

					case 12:
						{
						_localctx = new VsModContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1959;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 1961;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1960;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1963;
						this.match(vbaParser.MOD);
						this.state = 1965;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1964;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1967;
						this.valueStmt(11);
						}
						break;

					case 13:
						{
						_localctx = new VsAddContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1968;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 1970;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1969;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1972;
						this.match(vbaParser.PLUS);
						this.state = 1974;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1973;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1976;
						this.valueStmt(10);
						}
						break;

					case 14:
						{
						_localctx = new VsMinusContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1977;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 1979;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1978;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1981;
						this.match(vbaParser.MINUS);
						this.state = 1983;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1982;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1985;
						this.valueStmt(9);
						}
						break;

					case 15:
						{
						_localctx = new VsAmpContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1986;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 1988;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1987;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1990;
						this.match(vbaParser.AMPERSAND);
						this.state = 1992;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1991;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1994;
						this.valueStmt(8);
						}
						break;

					case 16:
						{
						_localctx = new VsImpContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 1995;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 1997;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 1996;
							this.match(vbaParser.WS);
							}
						}

						this.state = 1999;
						this.match(vbaParser.IMP);
						this.state = 2001;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 2000;
							this.match(vbaParser.WS);
							}
						}

						this.state = 2003;
						this.valueStmt(7);
						}
						break;

					case 17:
						{
						_localctx = new VsEqvContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 2004;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 2006;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 2005;
							this.match(vbaParser.WS);
							}
						}

						this.state = 2008;
						this.match(vbaParser.EQV);
						this.state = 2010;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 2009;
							this.match(vbaParser.WS);
							}
						}

						this.state = 2012;
						this.valueStmt(6);
						}
						break;

					case 18:
						{
						_localctx = new VsXorContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 2013;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 2015;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 2014;
							this.match(vbaParser.WS);
							}
						}

						this.state = 2017;
						this.match(vbaParser.XOR);
						this.state = 2019;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 2018;
							this.match(vbaParser.WS);
							}
						}

						this.state = 2021;
						this.valueStmt(5);
						}
						break;

					case 19:
						{
						_localctx = new VsOrContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 2022;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 2024;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 2023;
							this.match(vbaParser.WS);
							}
						}

						this.state = 2026;
						this.match(vbaParser.OR);
						this.state = 2028;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 2027;
							this.match(vbaParser.WS);
							}
						}

						this.state = 2030;
						this.valueStmt(4);
						}
						break;

					case 20:
						{
						_localctx = new VsAndContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, vbaParser.RULE_valueStmt);
						this.state = 2031;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 2033;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 2032;
							this.match(vbaParser.WS);
							}
						}

						this.state = 2035;
						this.match(vbaParser.AND);
						this.state = 2037;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 2036;
							this.match(vbaParser.WS);
							}
						}

						this.state = 2039;
						this.valueStmt(3);
						}
						break;
					}
					}
				}
				this.state = 2044;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 316, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableStmt(): VariableStmtContext {
		let _localctx: VariableStmtContext = new VariableStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, vbaParser.RULE_variableStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2048;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case vbaParser.DIM:
				{
				this.state = 2045;
				this.match(vbaParser.DIM);
				}
				break;
			case vbaParser.STATIC:
				{
				this.state = 2046;
				this.match(vbaParser.STATIC);
				}
				break;
			case vbaParser.FRIEND:
			case vbaParser.GLOBAL:
			case vbaParser.PRIVATE:
			case vbaParser.PUBLIC:
				{
				this.state = 2047;
				this.visibility();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2050;
			this.match(vbaParser.WS);
			this.state = 2053;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 318, this._ctx) ) {
			case 1:
				{
				this.state = 2051;
				this.match(vbaParser.WITHEVENTS);
				this.state = 2052;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 2055;
			this.variableListStmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableListStmt(): VariableListStmtContext {
		let _localctx: VariableListStmtContext = new VariableListStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, vbaParser.RULE_variableListStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2057;
			this.variableSubStmt();
			this.state = 2068;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 321, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2059;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 2058;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2061;
					this.match(vbaParser.T__0);
					this.state = 2063;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 2062;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2065;
					this.variableSubStmt();
					}
					}
				}
				this.state = 2070;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 321, this._ctx);
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
	public variableSubStmt(): VariableSubStmtContext {
		let _localctx: VariableSubStmtContext = new VariableSubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, vbaParser.RULE_variableSubStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2071;
			this.ambiguousIdentifier();
			this.state = 2089;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 327, this._ctx) ) {
			case 1:
				{
				this.state = 2073;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 2072;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2075;
				this.match(vbaParser.LPAREN);
				this.state = 2077;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 2076;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2083;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__3) | (1 << vbaParser.T__4) | (1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (vbaParser.LPAREN - 193)) | (1 << (vbaParser.MINUS - 193)) | (1 << (vbaParser.PLUS - 193)) | (1 << (vbaParser.STRINGLITERAL - 193)) | (1 << (vbaParser.OCTLITERAL - 193)) | (1 << (vbaParser.HEXLITERAL - 193)) | (1 << (vbaParser.SHORTLITERAL - 193)) | (1 << (vbaParser.INTEGERLITERAL - 193)) | (1 << (vbaParser.DOUBLELITERAL - 193)) | (1 << (vbaParser.DATELITERAL - 193)) | (1 << (vbaParser.IDENTIFIER - 193)))) !== 0)) {
					{
					this.state = 2079;
					this.subscripts();
					this.state = 2081;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 2080;
						this.match(vbaParser.WS);
						}
					}

					}
				}

				this.state = 2085;
				this.match(vbaParser.RPAREN);
				this.state = 2087;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 326, this._ctx) ) {
				case 1:
					{
					this.state = 2086;
					this.match(vbaParser.WS);
					}
					break;
				}
				}
				break;
			}
			this.state = 2092;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 328, this._ctx) ) {
			case 1:
				{
				this.state = 2091;
				this.typeHint();
				}
				break;
			}
			this.state = 2096;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 329, this._ctx) ) {
			case 1:
				{
				this.state = 2094;
				this.match(vbaParser.WS);
				this.state = 2095;
				this.asTypeClause();
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
	public whileWendStmt(): WhileWendStmtContext {
		let _localctx: WhileWendStmtContext = new WhileWendStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, vbaParser.RULE_whileWendStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2098;
			this.match(vbaParser.WHILE);
			this.state = 2099;
			this.match(vbaParser.WS);
			this.state = 2100;
			this.valueStmt(0);
			this.state = 2101;
			this.endOfStatement();
			this.state = 2103;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 330, this._ctx) ) {
			case 1:
				{
				this.state = 2102;
				this.block();
				}
				break;
			}
			this.state = 2105;
			this.match(vbaParser.WEND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public widthStmt(): WidthStmtContext {
		let _localctx: WidthStmtContext = new WidthStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, vbaParser.RULE_widthStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2107;
			this.match(vbaParser.WIDTH);
			this.state = 2108;
			this.match(vbaParser.WS);
			this.state = 2109;
			this.fileNumber();
			this.state = 2111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 2110;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2113;
			this.match(vbaParser.T__0);
			this.state = 2115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 2114;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2117;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withStmt(): WithStmtContext {
		let _localctx: WithStmtContext = new WithStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, vbaParser.RULE_withStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2119;
			this.match(vbaParser.WITH);
			this.state = 2120;
			this.match(vbaParser.WS);
			this.state = 2125;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 333, this._ctx) ) {
			case 1:
				{
				this.state = 2121;
				this.implicitCallStmt_InStmt();
				}
				break;

			case 2:
				{
				{
				this.state = 2122;
				this.match(vbaParser.NEW);
				this.state = 2123;
				this.match(vbaParser.WS);
				this.state = 2124;
				this.type();
				}
				}
				break;
			}
			this.state = 2127;
			this.endOfStatement();
			this.state = 2129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__3) | (1 << vbaParser.T__4) | (1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.EXIT_DO - 64)) | (1 << (vbaParser.EXIT_FOR - 64)) | (1 << (vbaParser.EXIT_FUNCTION - 64)) | (1 << (vbaParser.EXIT_PROPERTY - 64)) | (1 << (vbaParser.EXIT_SUB - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LINE_INPUT - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.MACRO_CONST - 96)) | (1 << (vbaParser.MACRO_IF - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.ON_ERROR - 96)) | (1 << (vbaParser.ON_LOCAL_ERROR - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0) || _la === vbaParser.IDENTIFIER) {
				{
				this.state = 2128;
				this.block();
				}
			}

			this.state = 2131;
			this.match(vbaParser.END_WITH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public writeStmt(): WriteStmtContext {
		let _localctx: WriteStmtContext = new WriteStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, vbaParser.RULE_writeStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2133;
			this.match(vbaParser.WRITE);
			this.state = 2134;
			this.match(vbaParser.WS);
			this.state = 2135;
			this.fileNumber();
			this.state = 2137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 2136;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2139;
			this.match(vbaParser.T__0);
			this.state = 2144;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 337, this._ctx) ) {
			case 1:
				{
				this.state = 2141;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 336, this._ctx) ) {
				case 1:
					{
					this.state = 2140;
					this.match(vbaParser.WS);
					}
					break;
				}
				this.state = 2143;
				this.outputList();
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
	public fileNumber(): FileNumberContext {
		let _localctx: FileNumberContext = new FileNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, vbaParser.RULE_fileNumber);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.T__2) {
				{
				this.state = 2146;
				this.match(vbaParser.T__2);
				}
			}

			this.state = 2149;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitCallStmt(): ExplicitCallStmtContext {
		let _localctx: ExplicitCallStmtContext = new ExplicitCallStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, vbaParser.RULE_explicitCallStmt);
		try {
			this.state = 2153;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 339, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2151;
				this.eCS_ProcedureCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2152;
				this.eCS_MemberProcedureCall();
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
	public eCS_ProcedureCall(): ECS_ProcedureCallContext {
		let _localctx: ECS_ProcedureCallContext = new ECS_ProcedureCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, vbaParser.RULE_eCS_ProcedureCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2155;
			this.match(vbaParser.CALL);
			this.state = 2156;
			this.match(vbaParser.WS);
			this.state = 2157;
			this.ambiguousIdentifier();
			this.state = 2159;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 340, this._ctx) ) {
			case 1:
				{
				this.state = 2158;
				this.typeHint();
				}
				break;
			}
			this.state = 2174;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 344, this._ctx) ) {
			case 1:
				{
				this.state = 2162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 2161;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2164;
				this.match(vbaParser.LPAREN);
				this.state = 2166;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 342, this._ctx) ) {
				case 1:
					{
					this.state = 2165;
					this.match(vbaParser.WS);
					}
					break;
				}
				this.state = 2168;
				this.argsCall();
				this.state = 2170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 2169;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2172;
				this.match(vbaParser.RPAREN);
				}
				break;
			}
			this.state = 2185;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 346, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2177;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 2176;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2179;
					this.match(vbaParser.LPAREN);
					this.state = 2180;
					this.subscripts();
					this.state = 2181;
					this.match(vbaParser.RPAREN);
					}
					}
				}
				this.state = 2187;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 346, this._ctx);
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
	public eCS_MemberProcedureCall(): ECS_MemberProcedureCallContext {
		let _localctx: ECS_MemberProcedureCallContext = new ECS_MemberProcedureCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, vbaParser.RULE_eCS_MemberProcedureCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2188;
			this.match(vbaParser.CALL);
			this.state = 2189;
			this.match(vbaParser.WS);
			this.state = 2191;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 347, this._ctx) ) {
			case 1:
				{
				this.state = 2190;
				this.implicitCallStmt_InStmt();
				}
				break;
			}
			this.state = 2193;
			this.match(vbaParser.T__3);
			this.state = 2194;
			this.ambiguousIdentifier();
			this.state = 2196;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 348, this._ctx) ) {
			case 1:
				{
				this.state = 2195;
				this.typeHint();
				}
				break;
			}
			this.state = 2211;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 352, this._ctx) ) {
			case 1:
				{
				this.state = 2199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 2198;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2201;
				this.match(vbaParser.LPAREN);
				this.state = 2203;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 350, this._ctx) ) {
				case 1:
					{
					this.state = 2202;
					this.match(vbaParser.WS);
					}
					break;
				}
				this.state = 2205;
				this.argsCall();
				this.state = 2207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 2206;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2209;
				this.match(vbaParser.RPAREN);
				}
				break;
			}
			this.state = 2222;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 354, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2214;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 2213;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2216;
					this.match(vbaParser.LPAREN);
					this.state = 2217;
					this.subscripts();
					this.state = 2218;
					this.match(vbaParser.RPAREN);
					}
					}
				}
				this.state = 2224;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 354, this._ctx);
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
	public implicitCallStmt_InBlock(): ImplicitCallStmt_InBlockContext {
		let _localctx: ImplicitCallStmt_InBlockContext = new ImplicitCallStmt_InBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, vbaParser.RULE_implicitCallStmt_InBlock);
		try {
			this.state = 2227;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 355, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2225;
				this.iCS_B_MemberProcedureCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2226;
				this.iCS_B_ProcedureCall();
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
	public iCS_B_MemberProcedureCall(): ICS_B_MemberProcedureCallContext {
		let _localctx: ICS_B_MemberProcedureCallContext = new ICS_B_MemberProcedureCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, vbaParser.RULE_iCS_B_MemberProcedureCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2230;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 356, this._ctx) ) {
			case 1:
				{
				this.state = 2229;
				this.implicitCallStmt_InStmt();
				}
				break;
			}
			this.state = 2232;
			this.match(vbaParser.T__3);
			this.state = 2233;
			this.ambiguousIdentifier();
			this.state = 2235;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 357, this._ctx) ) {
			case 1:
				{
				this.state = 2234;
				this.typeHint();
				}
				break;
			}
			this.state = 2239;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 358, this._ctx) ) {
			case 1:
				{
				this.state = 2237;
				this.match(vbaParser.WS);
				this.state = 2238;
				this.argsCall();
				}
				break;
			}
			this.state = 2242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 359, this._ctx) ) {
			case 1:
				{
				this.state = 2241;
				this.dictionaryCallStmt();
				}
				break;
			}
			this.state = 2253;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 361, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2245;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 2244;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2247;
					this.match(vbaParser.LPAREN);
					this.state = 2248;
					this.subscripts();
					this.state = 2249;
					this.match(vbaParser.RPAREN);
					}
					}
				}
				this.state = 2255;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 361, this._ctx);
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
	public iCS_B_ProcedureCall(): ICS_B_ProcedureCallContext {
		let _localctx: ICS_B_ProcedureCallContext = new ICS_B_ProcedureCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, vbaParser.RULE_iCS_B_ProcedureCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2256;
			this.certainIdentifier();
			this.state = 2259;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 362, this._ctx) ) {
			case 1:
				{
				this.state = 2257;
				this.match(vbaParser.WS);
				this.state = 2258;
				this.argsCall();
				}
				break;
			}
			this.state = 2270;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 364, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2262;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 2261;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2264;
					this.match(vbaParser.LPAREN);
					this.state = 2265;
					this.subscripts();
					this.state = 2266;
					this.match(vbaParser.RPAREN);
					}
					}
				}
				this.state = 2272;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 364, this._ctx);
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
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		let _localctx: ImplicitCallStmt_InStmtContext = new ImplicitCallStmt_InStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, vbaParser.RULE_implicitCallStmt_InStmt);
		try {
			this.state = 2277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 365, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2273;
				this.iCS_S_MembersCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2274;
				this.iCS_S_VariableOrProcedureCall();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2275;
				this.iCS_S_ProcedureOrArrayCall();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2276;
				this.iCS_S_DictionaryCall();
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
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext {
		let _localctx: ICS_S_VariableOrProcedureCallContext = new ICS_S_VariableOrProcedureCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, vbaParser.RULE_iCS_S_VariableOrProcedureCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2279;
			this.ambiguousIdentifier();
			this.state = 2281;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 366, this._ctx) ) {
			case 1:
				{
				this.state = 2280;
				this.typeHint();
				}
				break;
			}
			this.state = 2284;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 367, this._ctx) ) {
			case 1:
				{
				this.state = 2283;
				this.dictionaryCallStmt();
				}
				break;
			}
			this.state = 2295;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 369, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2287;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 2286;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2289;
					this.match(vbaParser.LPAREN);
					this.state = 2290;
					this.subscripts();
					this.state = 2291;
					this.match(vbaParser.RPAREN);
					}
					}
				}
				this.state = 2297;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 369, this._ctx);
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
	public iCS_S_ProcedureOrArrayCall(): ICS_S_ProcedureOrArrayCallContext {
		let _localctx: ICS_S_ProcedureOrArrayCallContext = new ICS_S_ProcedureOrArrayCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, vbaParser.RULE_iCS_S_ProcedureOrArrayCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2300;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 370, this._ctx) ) {
			case 1:
				{
				this.state = 2298;
				this.ambiguousIdentifier();
				}
				break;

			case 2:
				{
				this.state = 2299;
				this.baseType();
				}
				break;
			}
			this.state = 2303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__2) | (1 << vbaParser.T__4) | (1 << vbaParser.T__5) | (1 << vbaParser.T__6) | (1 << vbaParser.T__7))) !== 0) || _la === vbaParser.AMPERSAND) {
				{
				this.state = 2302;
				this.typeHint();
				}
			}

			this.state = 2306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 2305;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2308;
			this.match(vbaParser.LPAREN);
			this.state = 2310;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 373, this._ctx) ) {
			case 1:
				{
				this.state = 2309;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 2316;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 375, this._ctx) ) {
			case 1:
				{
				this.state = 2312;
				this.argsCall();
				this.state = 2314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 2313;
					this.match(vbaParser.WS);
					}
				}

				}
				break;
			}
			this.state = 2318;
			this.match(vbaParser.RPAREN);
			this.state = 2320;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 376, this._ctx) ) {
			case 1:
				{
				this.state = 2319;
				this.dictionaryCallStmt();
				}
				break;
			}
			this.state = 2331;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 378, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2323;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 2322;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2325;
					this.match(vbaParser.LPAREN);
					this.state = 2326;
					this.subscripts();
					this.state = 2327;
					this.match(vbaParser.RPAREN);
					}
					}
				}
				this.state = 2333;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 378, this._ctx);
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
	public iCS_S_MembersCall(): ICS_S_MembersCallContext {
		let _localctx: ICS_S_MembersCallContext = new ICS_S_MembersCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, vbaParser.RULE_iCS_S_MembersCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2336;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 379, this._ctx) ) {
			case 1:
				{
				this.state = 2334;
				this.iCS_S_VariableOrProcedureCall();
				}
				break;

			case 2:
				{
				this.state = 2335;
				this.iCS_S_ProcedureOrArrayCall();
				}
				break;
			}
			this.state = 2339;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2338;
					this.iCS_S_MemberCall();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2341;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 380, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2344;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 381, this._ctx) ) {
			case 1:
				{
				this.state = 2343;
				this.dictionaryCallStmt();
				}
				break;
			}
			this.state = 2355;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 383, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2347;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 2346;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2349;
					this.match(vbaParser.LPAREN);
					this.state = 2350;
					this.subscripts();
					this.state = 2351;
					this.match(vbaParser.RPAREN);
					}
					}
				}
				this.state = 2357;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 383, this._ctx);
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
	public iCS_S_MemberCall(): ICS_S_MemberCallContext {
		let _localctx: ICS_S_MemberCallContext = new ICS_S_MemberCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, vbaParser.RULE_iCS_S_MemberCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2358;
			_la = this._input.LA(1);
			if (!(_la === vbaParser.T__3 || _la === vbaParser.T__4)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 2361;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 384, this._ctx) ) {
			case 1:
				{
				this.state = 2359;
				this.iCS_S_VariableOrProcedureCall();
				}
				break;

			case 2:
				{
				this.state = 2360;
				this.iCS_S_ProcedureOrArrayCall();
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
	public iCS_S_DictionaryCall(): ICS_S_DictionaryCallContext {
		let _localctx: ICS_S_DictionaryCallContext = new ICS_S_DictionaryCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, vbaParser.RULE_iCS_S_DictionaryCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2363;
			this.dictionaryCallStmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argsCall(): ArgsCallContext {
		let _localctx: ArgsCallContext = new ArgsCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, vbaParser.RULE_argsCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2377;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 388, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2366;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__3) | (1 << vbaParser.T__4) | (1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (vbaParser.LPAREN - 193)) | (1 << (vbaParser.MINUS - 193)) | (1 << (vbaParser.PLUS - 193)) | (1 << (vbaParser.RPAREN - 193)) | (1 << (vbaParser.STRINGLITERAL - 193)) | (1 << (vbaParser.OCTLITERAL - 193)) | (1 << (vbaParser.HEXLITERAL - 193)) | (1 << (vbaParser.SHORTLITERAL - 193)) | (1 << (vbaParser.INTEGERLITERAL - 193)) | (1 << (vbaParser.DOUBLELITERAL - 193)) | (1 << (vbaParser.DATELITERAL - 193)) | (1 << (vbaParser.IDENTIFIER - 193)))) !== 0)) {
						{
						this.state = 2365;
						this.argCall();
						}
					}

					this.state = 2369;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 2368;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2371;
					_la = this._input.LA(1);
					if (!(_la === vbaParser.T__0 || _la === vbaParser.T__1)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 2373;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 387, this._ctx) ) {
					case 1:
						{
						this.state = 2372;
						this.match(vbaParser.WS);
						}
						break;
					}
					}
					}
				}
				this.state = 2379;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 388, this._ctx);
			}
			this.state = 2380;
			this.argCall();
			this.state = 2393;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 392, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2382;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 2381;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2384;
					_la = this._input.LA(1);
					if (!(_la === vbaParser.T__0 || _la === vbaParser.T__1)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 2386;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 390, this._ctx) ) {
					case 1:
						{
						this.state = 2385;
						this.match(vbaParser.WS);
						}
						break;
					}
					this.state = 2389;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 391, this._ctx) ) {
					case 1:
						{
						this.state = 2388;
						this.argCall();
						}
						break;
					}
					}
					}
				}
				this.state = 2395;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 392, this._ctx);
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
	public argCall(): ArgCallContext {
		let _localctx: ArgCallContext = new ArgCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, vbaParser.RULE_argCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2397;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 393, this._ctx) ) {
			case 1:
				{
				this.state = 2396;
				this.match(vbaParser.LPAREN);
				}
				break;
			}
			this.state = 2401;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 394, this._ctx) ) {
			case 1:
				{
				this.state = 2399;
				_la = this._input.LA(1);
				if (!(_la === vbaParser.BYVAL || _la === vbaParser.BYREF || _la === vbaParser.PARAMARRAY)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2400;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 2404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.RPAREN) {
				{
				this.state = 2403;
				this.match(vbaParser.RPAREN);
				}
			}

			this.state = 2406;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dictionaryCallStmt(): DictionaryCallStmtContext {
		let _localctx: DictionaryCallStmtContext = new DictionaryCallStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, vbaParser.RULE_dictionaryCallStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2408;
			this.match(vbaParser.T__4);
			this.state = 2409;
			this.ambiguousIdentifier();
			this.state = 2411;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 396, this._ctx) ) {
			case 1:
				{
				this.state = 2410;
				this.typeHint();
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
	public argList(): ArgListContext {
		let _localctx: ArgListContext = new ArgListContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, vbaParser.RULE_argList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2413;
			this.match(vbaParser.LPAREN);
			this.state = 2431;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 401, this._ctx) ) {
			case 1:
				{
				this.state = 2415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 2414;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2417;
				this.arg();
				this.state = 2428;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 400, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2419;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 2418;
							this.match(vbaParser.WS);
							}
						}

						this.state = 2421;
						this.match(vbaParser.T__0);
						this.state = 2423;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 2422;
							this.match(vbaParser.WS);
							}
						}

						this.state = 2425;
						this.arg();
						}
						}
					}
					this.state = 2430;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 400, this._ctx);
				}
				}
				break;
			}
			this.state = 2434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 2433;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2436;
			this.match(vbaParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arg(): ArgContext {
		let _localctx: ArgContext = new ArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, vbaParser.RULE_arg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2440;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 403, this._ctx) ) {
			case 1:
				{
				this.state = 2438;
				this.match(vbaParser.OPTIONAL);
				this.state = 2439;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 2444;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 404, this._ctx) ) {
			case 1:
				{
				this.state = 2442;
				_la = this._input.LA(1);
				if (!(_la === vbaParser.BYVAL || _la === vbaParser.BYREF)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2443;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 2448;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 405, this._ctx) ) {
			case 1:
				{
				this.state = 2446;
				this.match(vbaParser.PARAMARRAY);
				this.state = 2447;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 2450;
			this.ambiguousIdentifier();
			this.state = 2452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__2) | (1 << vbaParser.T__4) | (1 << vbaParser.T__5) | (1 << vbaParser.T__6) | (1 << vbaParser.T__7))) !== 0) || _la === vbaParser.AMPERSAND) {
				{
				this.state = 2451;
				this.typeHint();
				}
			}

			this.state = 2462;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 409, this._ctx) ) {
			case 1:
				{
				this.state = 2455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 2454;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2457;
				this.match(vbaParser.LPAREN);
				this.state = 2459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 2458;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2461;
				this.match(vbaParser.RPAREN);
				}
				break;
			}
			this.state = 2468;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 411, this._ctx) ) {
			case 1:
				{
				this.state = 2465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 2464;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2467;
				this.asTypeClause();
				}
				break;
			}
			this.state = 2474;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 413, this._ctx) ) {
			case 1:
				{
				this.state = 2471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 2470;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2473;
				this.argDefaultValue();
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
	public argDefaultValue(): ArgDefaultValueContext {
		let _localctx: ArgDefaultValueContext = new ArgDefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, vbaParser.RULE_argDefaultValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2476;
			this.match(vbaParser.EQ);
			this.state = 2478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 2477;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2480;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 254, vbaParser.RULE_subscripts);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2482;
			this.subscript();
			this.state = 2493;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 417, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2484;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 2483;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2486;
					this.match(vbaParser.T__0);
					this.state = 2488;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 2487;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2490;
					this.subscript();
					}
					}
				}
				this.state = 2495;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 417, this._ctx);
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
	public subscript(): SubscriptContext {
		let _localctx: SubscriptContext = new SubscriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, vbaParser.RULE_subscript);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2501;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 418, this._ctx) ) {
			case 1:
				{
				this.state = 2496;
				this.valueStmt(0);
				this.state = 2497;
				this.match(vbaParser.WS);
				this.state = 2498;
				this.match(vbaParser.TO);
				this.state = 2499;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 2503;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		let _localctx: AmbiguousIdentifierContext = new AmbiguousIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, vbaParser.RULE_ambiguousIdentifier);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2507;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 2507;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case vbaParser.IDENTIFIER:
						{
						this.state = 2505;
						this.match(vbaParser.IDENTIFIER);
						}
						break;
					case vbaParser.ACCESS:
					case vbaParser.ADDRESSOF:
					case vbaParser.ALIAS:
					case vbaParser.AND:
					case vbaParser.ATTRIBUTE:
					case vbaParser.APPACTIVATE:
					case vbaParser.APPEND:
					case vbaParser.AS:
					case vbaParser.BEGIN:
					case vbaParser.BEEP:
					case vbaParser.BINARY:
					case vbaParser.BOOLEAN:
					case vbaParser.BYVAL:
					case vbaParser.BYREF:
					case vbaParser.BYTE:
					case vbaParser.CALL:
					case vbaParser.CASE:
					case vbaParser.CHDIR:
					case vbaParser.CHDRIVE:
					case vbaParser.CLASS:
					case vbaParser.CLOSE:
					case vbaParser.COLLECTION:
					case vbaParser.CONST:
					case vbaParser.DATABASE:
					case vbaParser.DATE:
					case vbaParser.DECLARE:
					case vbaParser.DEFBOOL:
					case vbaParser.DEFBYTE:
					case vbaParser.DEFDATE:
					case vbaParser.DEFDBL:
					case vbaParser.DEFDEC:
					case vbaParser.DEFCUR:
					case vbaParser.DEFINT:
					case vbaParser.DEFLNG:
					case vbaParser.DEFOBJ:
					case vbaParser.DEFSNG:
					case vbaParser.DEFSTR:
					case vbaParser.DEFVAR:
					case vbaParser.DELETESETTING:
					case vbaParser.DIM:
					case vbaParser.DO:
					case vbaParser.DOUBLE:
					case vbaParser.EACH:
					case vbaParser.ELSE:
					case vbaParser.ELSEIF:
					case vbaParser.END:
					case vbaParser.ENUM:
					case vbaParser.EQV:
					case vbaParser.ERASE:
					case vbaParser.ERROR:
					case vbaParser.EVENT:
					case vbaParser.FALSE:
					case vbaParser.FILECOPY:
					case vbaParser.FRIEND:
					case vbaParser.FOR:
					case vbaParser.FUNCTION:
					case vbaParser.GET:
					case vbaParser.GLOBAL:
					case vbaParser.GOSUB:
					case vbaParser.GOTO:
					case vbaParser.IF:
					case vbaParser.IMP:
					case vbaParser.IMPLEMENTS:
					case vbaParser.IN:
					case vbaParser.INPUT:
					case vbaParser.IS:
					case vbaParser.INTEGER:
					case vbaParser.KILL:
					case vbaParser.LOAD:
					case vbaParser.LOCK:
					case vbaParser.LONG:
					case vbaParser.LOOP:
					case vbaParser.LEN:
					case vbaParser.LET:
					case vbaParser.LIB:
					case vbaParser.LIKE:
					case vbaParser.LSET:
					case vbaParser.ME:
					case vbaParser.MID:
					case vbaParser.MKDIR:
					case vbaParser.MOD:
					case vbaParser.NAME:
					case vbaParser.NEXT:
					case vbaParser.NEW:
					case vbaParser.NOT:
					case vbaParser.NOTHING:
					case vbaParser.NULL:
					case vbaParser.ON:
					case vbaParser.OPEN:
					case vbaParser.OPTIONAL:
					case vbaParser.OR:
					case vbaParser.OUTPUT:
					case vbaParser.PARAMARRAY:
					case vbaParser.PRESERVE:
					case vbaParser.PRINT:
					case vbaParser.PRIVATE:
					case vbaParser.PUBLIC:
					case vbaParser.PUT:
					case vbaParser.RANDOM:
					case vbaParser.RANDOMIZE:
					case vbaParser.RAISEEVENT:
					case vbaParser.READ:
					case vbaParser.REDIM:
					case vbaParser.REM:
					case vbaParser.RESET:
					case vbaParser.RESUME:
					case vbaParser.RETURN:
					case vbaParser.RMDIR:
					case vbaParser.RSET:
					case vbaParser.SAVEPICTURE:
					case vbaParser.SAVESETTING:
					case vbaParser.SEEK:
					case vbaParser.SELECT:
					case vbaParser.SENDKEYS:
					case vbaParser.SET:
					case vbaParser.SETATTR:
					case vbaParser.SHARED:
					case vbaParser.SINGLE:
					case vbaParser.SPC:
					case vbaParser.STATIC:
					case vbaParser.STEP:
					case vbaParser.STOP:
					case vbaParser.STRING:
					case vbaParser.SUB:
					case vbaParser.TAB:
					case vbaParser.TEXT:
					case vbaParser.THEN:
					case vbaParser.TIME:
					case vbaParser.TO:
					case vbaParser.TRUE:
					case vbaParser.TYPE:
					case vbaParser.TYPEOF:
					case vbaParser.UNLOAD:
					case vbaParser.UNLOCK:
					case vbaParser.UNTIL:
					case vbaParser.VARIANT:
					case vbaParser.VERSION:
					case vbaParser.WEND:
					case vbaParser.WHILE:
					case vbaParser.WIDTH:
					case vbaParser.WITH:
					case vbaParser.WITHEVENTS:
					case vbaParser.WRITE:
					case vbaParser.XOR:
						{
						this.state = 2506;
						this.ambiguousKeyword();
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
				this.state = 2509;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 420, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asTypeClause(): AsTypeClauseContext {
		let _localctx: AsTypeClauseContext = new AsTypeClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, vbaParser.RULE_asTypeClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2511;
			this.match(vbaParser.AS);
			this.state = 2513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 2512;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2517;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 422, this._ctx) ) {
			case 1:
				{
				this.state = 2515;
				this.match(vbaParser.NEW);
				this.state = 2516;
				this.match(vbaParser.WS);
				}
				break;
			}
			this.state = 2519;
			this.type();
			this.state = 2524;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 424, this._ctx) ) {
			case 1:
				{
				this.state = 2521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 2520;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2523;
				this.fieldLength();
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
	public baseType(): BaseTypeContext {
		let _localctx: BaseTypeContext = new BaseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, vbaParser.RULE_baseType);
		let _la: number;
		try {
			this.state = 2546;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case vbaParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2526;
				this.match(vbaParser.BOOLEAN);
				}
				break;
			case vbaParser.BYTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2527;
				this.match(vbaParser.BYTE);
				}
				break;
			case vbaParser.COLLECTION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2528;
				this.match(vbaParser.COLLECTION);
				}
				break;
			case vbaParser.DATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2529;
				this.match(vbaParser.DATE);
				}
				break;
			case vbaParser.DOUBLE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2530;
				this.match(vbaParser.DOUBLE);
				}
				break;
			case vbaParser.INTEGER:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2531;
				this.match(vbaParser.INTEGER);
				}
				break;
			case vbaParser.LONG:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2532;
				this.match(vbaParser.LONG);
				}
				break;
			case vbaParser.SINGLE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2533;
				this.match(vbaParser.SINGLE);
				}
				break;
			case vbaParser.STRING:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2534;
				this.match(vbaParser.STRING);
				this.state = 2543;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 427, this._ctx) ) {
				case 1:
					{
					this.state = 2536;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 2535;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2538;
					this.match(vbaParser.MULT);
					this.state = 2540;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === vbaParser.WS) {
						{
						this.state = 2539;
						this.match(vbaParser.WS);
						}
					}

					this.state = 2542;
					this.valueStmt(0);
					}
					break;
				}
				}
				break;
			case vbaParser.VARIANT:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2545;
				this.match(vbaParser.VARIANT);
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
	public certainIdentifier(): CertainIdentifierContext {
		let _localctx: CertainIdentifierContext = new CertainIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, vbaParser.RULE_certainIdentifier);
		try {
			let _alt: number;
			this.state = 2563;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case vbaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2548;
				this.match(vbaParser.IDENTIFIER);
				this.state = 2553;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 430, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 2551;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case vbaParser.ACCESS:
						case vbaParser.ADDRESSOF:
						case vbaParser.ALIAS:
						case vbaParser.AND:
						case vbaParser.ATTRIBUTE:
						case vbaParser.APPACTIVATE:
						case vbaParser.APPEND:
						case vbaParser.AS:
						case vbaParser.BEGIN:
						case vbaParser.BEEP:
						case vbaParser.BINARY:
						case vbaParser.BOOLEAN:
						case vbaParser.BYVAL:
						case vbaParser.BYREF:
						case vbaParser.BYTE:
						case vbaParser.CALL:
						case vbaParser.CASE:
						case vbaParser.CHDIR:
						case vbaParser.CHDRIVE:
						case vbaParser.CLASS:
						case vbaParser.CLOSE:
						case vbaParser.COLLECTION:
						case vbaParser.CONST:
						case vbaParser.DATABASE:
						case vbaParser.DATE:
						case vbaParser.DECLARE:
						case vbaParser.DEFBOOL:
						case vbaParser.DEFBYTE:
						case vbaParser.DEFDATE:
						case vbaParser.DEFDBL:
						case vbaParser.DEFDEC:
						case vbaParser.DEFCUR:
						case vbaParser.DEFINT:
						case vbaParser.DEFLNG:
						case vbaParser.DEFOBJ:
						case vbaParser.DEFSNG:
						case vbaParser.DEFSTR:
						case vbaParser.DEFVAR:
						case vbaParser.DELETESETTING:
						case vbaParser.DIM:
						case vbaParser.DO:
						case vbaParser.DOUBLE:
						case vbaParser.EACH:
						case vbaParser.ELSE:
						case vbaParser.ELSEIF:
						case vbaParser.END:
						case vbaParser.ENUM:
						case vbaParser.EQV:
						case vbaParser.ERASE:
						case vbaParser.ERROR:
						case vbaParser.EVENT:
						case vbaParser.FALSE:
						case vbaParser.FILECOPY:
						case vbaParser.FRIEND:
						case vbaParser.FOR:
						case vbaParser.FUNCTION:
						case vbaParser.GET:
						case vbaParser.GLOBAL:
						case vbaParser.GOSUB:
						case vbaParser.GOTO:
						case vbaParser.IF:
						case vbaParser.IMP:
						case vbaParser.IMPLEMENTS:
						case vbaParser.IN:
						case vbaParser.INPUT:
						case vbaParser.IS:
						case vbaParser.INTEGER:
						case vbaParser.KILL:
						case vbaParser.LOAD:
						case vbaParser.LOCK:
						case vbaParser.LONG:
						case vbaParser.LOOP:
						case vbaParser.LEN:
						case vbaParser.LET:
						case vbaParser.LIB:
						case vbaParser.LIKE:
						case vbaParser.LSET:
						case vbaParser.ME:
						case vbaParser.MID:
						case vbaParser.MKDIR:
						case vbaParser.MOD:
						case vbaParser.NAME:
						case vbaParser.NEXT:
						case vbaParser.NEW:
						case vbaParser.NOT:
						case vbaParser.NOTHING:
						case vbaParser.NULL:
						case vbaParser.ON:
						case vbaParser.OPEN:
						case vbaParser.OPTIONAL:
						case vbaParser.OR:
						case vbaParser.OUTPUT:
						case vbaParser.PARAMARRAY:
						case vbaParser.PRESERVE:
						case vbaParser.PRINT:
						case vbaParser.PRIVATE:
						case vbaParser.PUBLIC:
						case vbaParser.PUT:
						case vbaParser.RANDOM:
						case vbaParser.RANDOMIZE:
						case vbaParser.RAISEEVENT:
						case vbaParser.READ:
						case vbaParser.REDIM:
						case vbaParser.REM:
						case vbaParser.RESET:
						case vbaParser.RESUME:
						case vbaParser.RETURN:
						case vbaParser.RMDIR:
						case vbaParser.RSET:
						case vbaParser.SAVEPICTURE:
						case vbaParser.SAVESETTING:
						case vbaParser.SEEK:
						case vbaParser.SELECT:
						case vbaParser.SENDKEYS:
						case vbaParser.SET:
						case vbaParser.SETATTR:
						case vbaParser.SHARED:
						case vbaParser.SINGLE:
						case vbaParser.SPC:
						case vbaParser.STATIC:
						case vbaParser.STEP:
						case vbaParser.STOP:
						case vbaParser.STRING:
						case vbaParser.SUB:
						case vbaParser.TAB:
						case vbaParser.TEXT:
						case vbaParser.THEN:
						case vbaParser.TIME:
						case vbaParser.TO:
						case vbaParser.TRUE:
						case vbaParser.TYPE:
						case vbaParser.TYPEOF:
						case vbaParser.UNLOAD:
						case vbaParser.UNLOCK:
						case vbaParser.UNTIL:
						case vbaParser.VARIANT:
						case vbaParser.VERSION:
						case vbaParser.WEND:
						case vbaParser.WHILE:
						case vbaParser.WIDTH:
						case vbaParser.WITH:
						case vbaParser.WITHEVENTS:
						case vbaParser.WRITE:
						case vbaParser.XOR:
							{
							this.state = 2549;
							this.ambiguousKeyword();
							}
							break;
						case vbaParser.IDENTIFIER:
							{
							this.state = 2550;
							this.match(vbaParser.IDENTIFIER);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 2555;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 430, this._ctx);
				}
				}
				break;
			case vbaParser.ACCESS:
			case vbaParser.ADDRESSOF:
			case vbaParser.ALIAS:
			case vbaParser.AND:
			case vbaParser.ATTRIBUTE:
			case vbaParser.APPACTIVATE:
			case vbaParser.APPEND:
			case vbaParser.AS:
			case vbaParser.BEGIN:
			case vbaParser.BEEP:
			case vbaParser.BINARY:
			case vbaParser.BOOLEAN:
			case vbaParser.BYVAL:
			case vbaParser.BYREF:
			case vbaParser.BYTE:
			case vbaParser.CALL:
			case vbaParser.CASE:
			case vbaParser.CHDIR:
			case vbaParser.CHDRIVE:
			case vbaParser.CLASS:
			case vbaParser.CLOSE:
			case vbaParser.COLLECTION:
			case vbaParser.CONST:
			case vbaParser.DATABASE:
			case vbaParser.DATE:
			case vbaParser.DECLARE:
			case vbaParser.DEFBOOL:
			case vbaParser.DEFBYTE:
			case vbaParser.DEFDATE:
			case vbaParser.DEFDBL:
			case vbaParser.DEFDEC:
			case vbaParser.DEFCUR:
			case vbaParser.DEFINT:
			case vbaParser.DEFLNG:
			case vbaParser.DEFOBJ:
			case vbaParser.DEFSNG:
			case vbaParser.DEFSTR:
			case vbaParser.DEFVAR:
			case vbaParser.DELETESETTING:
			case vbaParser.DIM:
			case vbaParser.DO:
			case vbaParser.DOUBLE:
			case vbaParser.EACH:
			case vbaParser.ELSE:
			case vbaParser.ELSEIF:
			case vbaParser.END:
			case vbaParser.ENUM:
			case vbaParser.EQV:
			case vbaParser.ERASE:
			case vbaParser.ERROR:
			case vbaParser.EVENT:
			case vbaParser.FALSE:
			case vbaParser.FILECOPY:
			case vbaParser.FRIEND:
			case vbaParser.FOR:
			case vbaParser.FUNCTION:
			case vbaParser.GET:
			case vbaParser.GLOBAL:
			case vbaParser.GOSUB:
			case vbaParser.GOTO:
			case vbaParser.IF:
			case vbaParser.IMP:
			case vbaParser.IMPLEMENTS:
			case vbaParser.IN:
			case vbaParser.INPUT:
			case vbaParser.IS:
			case vbaParser.INTEGER:
			case vbaParser.KILL:
			case vbaParser.LOAD:
			case vbaParser.LOCK:
			case vbaParser.LONG:
			case vbaParser.LOOP:
			case vbaParser.LEN:
			case vbaParser.LET:
			case vbaParser.LIB:
			case vbaParser.LIKE:
			case vbaParser.LSET:
			case vbaParser.ME:
			case vbaParser.MID:
			case vbaParser.MKDIR:
			case vbaParser.MOD:
			case vbaParser.NAME:
			case vbaParser.NEXT:
			case vbaParser.NEW:
			case vbaParser.NOT:
			case vbaParser.NOTHING:
			case vbaParser.NULL:
			case vbaParser.ON:
			case vbaParser.OPEN:
			case vbaParser.OPTIONAL:
			case vbaParser.OR:
			case vbaParser.OUTPUT:
			case vbaParser.PARAMARRAY:
			case vbaParser.PRESERVE:
			case vbaParser.PRINT:
			case vbaParser.PRIVATE:
			case vbaParser.PUBLIC:
			case vbaParser.PUT:
			case vbaParser.RANDOM:
			case vbaParser.RANDOMIZE:
			case vbaParser.RAISEEVENT:
			case vbaParser.READ:
			case vbaParser.REDIM:
			case vbaParser.REM:
			case vbaParser.RESET:
			case vbaParser.RESUME:
			case vbaParser.RETURN:
			case vbaParser.RMDIR:
			case vbaParser.RSET:
			case vbaParser.SAVEPICTURE:
			case vbaParser.SAVESETTING:
			case vbaParser.SEEK:
			case vbaParser.SELECT:
			case vbaParser.SENDKEYS:
			case vbaParser.SET:
			case vbaParser.SETATTR:
			case vbaParser.SHARED:
			case vbaParser.SINGLE:
			case vbaParser.SPC:
			case vbaParser.STATIC:
			case vbaParser.STEP:
			case vbaParser.STOP:
			case vbaParser.STRING:
			case vbaParser.SUB:
			case vbaParser.TAB:
			case vbaParser.TEXT:
			case vbaParser.THEN:
			case vbaParser.TIME:
			case vbaParser.TO:
			case vbaParser.TRUE:
			case vbaParser.TYPE:
			case vbaParser.TYPEOF:
			case vbaParser.UNLOAD:
			case vbaParser.UNLOCK:
			case vbaParser.UNTIL:
			case vbaParser.VARIANT:
			case vbaParser.VERSION:
			case vbaParser.WEND:
			case vbaParser.WHILE:
			case vbaParser.WIDTH:
			case vbaParser.WITH:
			case vbaParser.WITHEVENTS:
			case vbaParser.WRITE:
			case vbaParser.XOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2556;
				this.ambiguousKeyword();
				this.state = 2559;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 2559;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case vbaParser.ACCESS:
						case vbaParser.ADDRESSOF:
						case vbaParser.ALIAS:
						case vbaParser.AND:
						case vbaParser.ATTRIBUTE:
						case vbaParser.APPACTIVATE:
						case vbaParser.APPEND:
						case vbaParser.AS:
						case vbaParser.BEGIN:
						case vbaParser.BEEP:
						case vbaParser.BINARY:
						case vbaParser.BOOLEAN:
						case vbaParser.BYVAL:
						case vbaParser.BYREF:
						case vbaParser.BYTE:
						case vbaParser.CALL:
						case vbaParser.CASE:
						case vbaParser.CHDIR:
						case vbaParser.CHDRIVE:
						case vbaParser.CLASS:
						case vbaParser.CLOSE:
						case vbaParser.COLLECTION:
						case vbaParser.CONST:
						case vbaParser.DATABASE:
						case vbaParser.DATE:
						case vbaParser.DECLARE:
						case vbaParser.DEFBOOL:
						case vbaParser.DEFBYTE:
						case vbaParser.DEFDATE:
						case vbaParser.DEFDBL:
						case vbaParser.DEFDEC:
						case vbaParser.DEFCUR:
						case vbaParser.DEFINT:
						case vbaParser.DEFLNG:
						case vbaParser.DEFOBJ:
						case vbaParser.DEFSNG:
						case vbaParser.DEFSTR:
						case vbaParser.DEFVAR:
						case vbaParser.DELETESETTING:
						case vbaParser.DIM:
						case vbaParser.DO:
						case vbaParser.DOUBLE:
						case vbaParser.EACH:
						case vbaParser.ELSE:
						case vbaParser.ELSEIF:
						case vbaParser.END:
						case vbaParser.ENUM:
						case vbaParser.EQV:
						case vbaParser.ERASE:
						case vbaParser.ERROR:
						case vbaParser.EVENT:
						case vbaParser.FALSE:
						case vbaParser.FILECOPY:
						case vbaParser.FRIEND:
						case vbaParser.FOR:
						case vbaParser.FUNCTION:
						case vbaParser.GET:
						case vbaParser.GLOBAL:
						case vbaParser.GOSUB:
						case vbaParser.GOTO:
						case vbaParser.IF:
						case vbaParser.IMP:
						case vbaParser.IMPLEMENTS:
						case vbaParser.IN:
						case vbaParser.INPUT:
						case vbaParser.IS:
						case vbaParser.INTEGER:
						case vbaParser.KILL:
						case vbaParser.LOAD:
						case vbaParser.LOCK:
						case vbaParser.LONG:
						case vbaParser.LOOP:
						case vbaParser.LEN:
						case vbaParser.LET:
						case vbaParser.LIB:
						case vbaParser.LIKE:
						case vbaParser.LSET:
						case vbaParser.ME:
						case vbaParser.MID:
						case vbaParser.MKDIR:
						case vbaParser.MOD:
						case vbaParser.NAME:
						case vbaParser.NEXT:
						case vbaParser.NEW:
						case vbaParser.NOT:
						case vbaParser.NOTHING:
						case vbaParser.NULL:
						case vbaParser.ON:
						case vbaParser.OPEN:
						case vbaParser.OPTIONAL:
						case vbaParser.OR:
						case vbaParser.OUTPUT:
						case vbaParser.PARAMARRAY:
						case vbaParser.PRESERVE:
						case vbaParser.PRINT:
						case vbaParser.PRIVATE:
						case vbaParser.PUBLIC:
						case vbaParser.PUT:
						case vbaParser.RANDOM:
						case vbaParser.RANDOMIZE:
						case vbaParser.RAISEEVENT:
						case vbaParser.READ:
						case vbaParser.REDIM:
						case vbaParser.REM:
						case vbaParser.RESET:
						case vbaParser.RESUME:
						case vbaParser.RETURN:
						case vbaParser.RMDIR:
						case vbaParser.RSET:
						case vbaParser.SAVEPICTURE:
						case vbaParser.SAVESETTING:
						case vbaParser.SEEK:
						case vbaParser.SELECT:
						case vbaParser.SENDKEYS:
						case vbaParser.SET:
						case vbaParser.SETATTR:
						case vbaParser.SHARED:
						case vbaParser.SINGLE:
						case vbaParser.SPC:
						case vbaParser.STATIC:
						case vbaParser.STEP:
						case vbaParser.STOP:
						case vbaParser.STRING:
						case vbaParser.SUB:
						case vbaParser.TAB:
						case vbaParser.TEXT:
						case vbaParser.THEN:
						case vbaParser.TIME:
						case vbaParser.TO:
						case vbaParser.TRUE:
						case vbaParser.TYPE:
						case vbaParser.TYPEOF:
						case vbaParser.UNLOAD:
						case vbaParser.UNLOCK:
						case vbaParser.UNTIL:
						case vbaParser.VARIANT:
						case vbaParser.VERSION:
						case vbaParser.WEND:
						case vbaParser.WHILE:
						case vbaParser.WIDTH:
						case vbaParser.WITH:
						case vbaParser.WITHEVENTS:
						case vbaParser.WRITE:
						case vbaParser.XOR:
							{
							this.state = 2557;
							this.ambiguousKeyword();
							}
							break;
						case vbaParser.IDENTIFIER:
							{
							this.state = 2558;
							this.match(vbaParser.IDENTIFIER);
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
					this.state = 2561;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 432, this._ctx);
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
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, vbaParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2565;
			_la = this._input.LA(1);
			if (!(_la === vbaParser.IS || _la === vbaParser.LIKE || ((((_la - 189)) & ~0x1F) === 0 && ((1 << (_la - 189)) & ((1 << (vbaParser.EQ - 189)) | (1 << (vbaParser.GEQ - 189)) | (1 << (vbaParser.GT - 189)) | (1 << (vbaParser.LEQ - 189)) | (1 << (vbaParser.LT - 189)) | (1 << (vbaParser.NEQ - 189)))) !== 0))) {
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
	public complexType(): ComplexTypeContext {
		let _localctx: ComplexTypeContext = new ComplexTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, vbaParser.RULE_complexType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2567;
			this.ambiguousIdentifier();
			this.state = 2572;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 434, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2568;
					_la = this._input.LA(1);
					if (!(_la === vbaParser.T__3 || _la === vbaParser.T__4)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 2569;
					this.ambiguousIdentifier();
					}
					}
				}
				this.state = 2574;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 434, this._ctx);
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
	public fieldLength(): FieldLengthContext {
		let _localctx: FieldLengthContext = new FieldLengthContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, vbaParser.RULE_fieldLength);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2575;
			this.match(vbaParser.MULT);
			this.state = 2577;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 2576;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2581;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case vbaParser.INTEGERLITERAL:
				{
				this.state = 2579;
				this.match(vbaParser.INTEGERLITERAL);
				}
				break;
			case vbaParser.ACCESS:
			case vbaParser.ADDRESSOF:
			case vbaParser.ALIAS:
			case vbaParser.AND:
			case vbaParser.ATTRIBUTE:
			case vbaParser.APPACTIVATE:
			case vbaParser.APPEND:
			case vbaParser.AS:
			case vbaParser.BEGIN:
			case vbaParser.BEEP:
			case vbaParser.BINARY:
			case vbaParser.BOOLEAN:
			case vbaParser.BYVAL:
			case vbaParser.BYREF:
			case vbaParser.BYTE:
			case vbaParser.CALL:
			case vbaParser.CASE:
			case vbaParser.CHDIR:
			case vbaParser.CHDRIVE:
			case vbaParser.CLASS:
			case vbaParser.CLOSE:
			case vbaParser.COLLECTION:
			case vbaParser.CONST:
			case vbaParser.DATABASE:
			case vbaParser.DATE:
			case vbaParser.DECLARE:
			case vbaParser.DEFBOOL:
			case vbaParser.DEFBYTE:
			case vbaParser.DEFDATE:
			case vbaParser.DEFDBL:
			case vbaParser.DEFDEC:
			case vbaParser.DEFCUR:
			case vbaParser.DEFINT:
			case vbaParser.DEFLNG:
			case vbaParser.DEFOBJ:
			case vbaParser.DEFSNG:
			case vbaParser.DEFSTR:
			case vbaParser.DEFVAR:
			case vbaParser.DELETESETTING:
			case vbaParser.DIM:
			case vbaParser.DO:
			case vbaParser.DOUBLE:
			case vbaParser.EACH:
			case vbaParser.ELSE:
			case vbaParser.ELSEIF:
			case vbaParser.END:
			case vbaParser.ENUM:
			case vbaParser.EQV:
			case vbaParser.ERASE:
			case vbaParser.ERROR:
			case vbaParser.EVENT:
			case vbaParser.FALSE:
			case vbaParser.FILECOPY:
			case vbaParser.FRIEND:
			case vbaParser.FOR:
			case vbaParser.FUNCTION:
			case vbaParser.GET:
			case vbaParser.GLOBAL:
			case vbaParser.GOSUB:
			case vbaParser.GOTO:
			case vbaParser.IF:
			case vbaParser.IMP:
			case vbaParser.IMPLEMENTS:
			case vbaParser.IN:
			case vbaParser.INPUT:
			case vbaParser.IS:
			case vbaParser.INTEGER:
			case vbaParser.KILL:
			case vbaParser.LOAD:
			case vbaParser.LOCK:
			case vbaParser.LONG:
			case vbaParser.LOOP:
			case vbaParser.LEN:
			case vbaParser.LET:
			case vbaParser.LIB:
			case vbaParser.LIKE:
			case vbaParser.LSET:
			case vbaParser.ME:
			case vbaParser.MID:
			case vbaParser.MKDIR:
			case vbaParser.MOD:
			case vbaParser.NAME:
			case vbaParser.NEXT:
			case vbaParser.NEW:
			case vbaParser.NOT:
			case vbaParser.NOTHING:
			case vbaParser.NULL:
			case vbaParser.ON:
			case vbaParser.OPEN:
			case vbaParser.OPTIONAL:
			case vbaParser.OR:
			case vbaParser.OUTPUT:
			case vbaParser.PARAMARRAY:
			case vbaParser.PRESERVE:
			case vbaParser.PRINT:
			case vbaParser.PRIVATE:
			case vbaParser.PUBLIC:
			case vbaParser.PUT:
			case vbaParser.RANDOM:
			case vbaParser.RANDOMIZE:
			case vbaParser.RAISEEVENT:
			case vbaParser.READ:
			case vbaParser.REDIM:
			case vbaParser.REM:
			case vbaParser.RESET:
			case vbaParser.RESUME:
			case vbaParser.RETURN:
			case vbaParser.RMDIR:
			case vbaParser.RSET:
			case vbaParser.SAVEPICTURE:
			case vbaParser.SAVESETTING:
			case vbaParser.SEEK:
			case vbaParser.SELECT:
			case vbaParser.SENDKEYS:
			case vbaParser.SET:
			case vbaParser.SETATTR:
			case vbaParser.SHARED:
			case vbaParser.SINGLE:
			case vbaParser.SPC:
			case vbaParser.STATIC:
			case vbaParser.STEP:
			case vbaParser.STOP:
			case vbaParser.STRING:
			case vbaParser.SUB:
			case vbaParser.TAB:
			case vbaParser.TEXT:
			case vbaParser.THEN:
			case vbaParser.TIME:
			case vbaParser.TO:
			case vbaParser.TRUE:
			case vbaParser.TYPE:
			case vbaParser.TYPEOF:
			case vbaParser.UNLOAD:
			case vbaParser.UNLOCK:
			case vbaParser.UNTIL:
			case vbaParser.VARIANT:
			case vbaParser.VERSION:
			case vbaParser.WEND:
			case vbaParser.WHILE:
			case vbaParser.WIDTH:
			case vbaParser.WITH:
			case vbaParser.WITHEVENTS:
			case vbaParser.WRITE:
			case vbaParser.XOR:
			case vbaParser.IDENTIFIER:
				{
				this.state = 2580;
				this.ambiguousIdentifier();
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
	public letterrange(): LetterrangeContext {
		let _localctx: LetterrangeContext = new LetterrangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, vbaParser.RULE_letterrange);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2583;
			this.certainIdentifier();
			this.state = 2592;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 439, this._ctx) ) {
			case 1:
				{
				this.state = 2585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 2584;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2587;
				this.match(vbaParser.MINUS);
				this.state = 2589;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 2588;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2591;
				this.certainIdentifier();
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
	public lineLabel(): LineLabelContext {
		let _localctx: LineLabelContext = new LineLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, vbaParser.RULE_lineLabel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2594;
			this.ambiguousIdentifier();
			this.state = 2595;
			this.match(vbaParser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, vbaParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2597;
			_la = this._input.LA(1);
			if (!(_la === vbaParser.FALSE || _la === vbaParser.NOTHING || _la === vbaParser.NULL || _la === vbaParser.TRUE || ((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & ((1 << (vbaParser.STRINGLITERAL - 205)) | (1 << (vbaParser.OCTLITERAL - 205)) | (1 << (vbaParser.HEXLITERAL - 205)) | (1 << (vbaParser.SHORTLITERAL - 205)) | (1 << (vbaParser.INTEGERLITERAL - 205)) | (1 << (vbaParser.DOUBLELITERAL - 205)) | (1 << (vbaParser.DATELITERAL - 205)))) !== 0))) {
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, vbaParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2601;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 440, this._ctx) ) {
			case 1:
				{
				this.state = 2599;
				this.baseType();
				}
				break;

			case 2:
				{
				this.state = 2600;
				this.complexType();
				}
				break;
			}
			this.state = 2611;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 443, this._ctx) ) {
			case 1:
				{
				this.state = 2604;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 2603;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2606;
				this.match(vbaParser.LPAREN);
				this.state = 2608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === vbaParser.WS) {
					{
					this.state = 2607;
					this.match(vbaParser.WS);
					}
				}

				this.state = 2610;
				this.match(vbaParser.RPAREN);
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
	public typeHint(): TypeHintContext {
		let _localctx: TypeHintContext = new TypeHintContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, vbaParser.RULE_typeHint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2613;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.T__2) | (1 << vbaParser.T__4) | (1 << vbaParser.T__5) | (1 << vbaParser.T__6) | (1 << vbaParser.T__7))) !== 0) || _la === vbaParser.AMPERSAND)) {
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
	public visibility(): VisibilityContext {
		let _localctx: VisibilityContext = new VisibilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, vbaParser.RULE_visibility);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2615;
			_la = this._input.LA(1);
			if (!(_la === vbaParser.FRIEND || _la === vbaParser.GLOBAL || _la === vbaParser.PRIVATE || _la === vbaParser.PUBLIC)) {
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
	public ambiguousKeyword(): AmbiguousKeywordContext {
		let _localctx: AmbiguousKeywordContext = new AmbiguousKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, vbaParser.RULE_ambiguousKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2617;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << vbaParser.ACCESS) | (1 << vbaParser.ADDRESSOF) | (1 << vbaParser.ALIAS) | (1 << vbaParser.AND) | (1 << vbaParser.ATTRIBUTE) | (1 << vbaParser.APPACTIVATE) | (1 << vbaParser.APPEND) | (1 << vbaParser.AS) | (1 << vbaParser.BEGIN) | (1 << vbaParser.BEEP) | (1 << vbaParser.BINARY) | (1 << vbaParser.BOOLEAN) | (1 << vbaParser.BYVAL) | (1 << vbaParser.BYREF) | (1 << vbaParser.BYTE) | (1 << vbaParser.CALL) | (1 << vbaParser.CASE) | (1 << vbaParser.CHDIR) | (1 << vbaParser.CHDRIVE) | (1 << vbaParser.CLASS) | (1 << vbaParser.CLOSE) | (1 << vbaParser.COLLECTION) | (1 << vbaParser.CONST))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (vbaParser.DATABASE - 32)) | (1 << (vbaParser.DATE - 32)) | (1 << (vbaParser.DECLARE - 32)) | (1 << (vbaParser.DEFBOOL - 32)) | (1 << (vbaParser.DEFBYTE - 32)) | (1 << (vbaParser.DEFDATE - 32)) | (1 << (vbaParser.DEFDBL - 32)) | (1 << (vbaParser.DEFDEC - 32)) | (1 << (vbaParser.DEFCUR - 32)) | (1 << (vbaParser.DEFINT - 32)) | (1 << (vbaParser.DEFLNG - 32)) | (1 << (vbaParser.DEFOBJ - 32)) | (1 << (vbaParser.DEFSNG - 32)) | (1 << (vbaParser.DEFSTR - 32)) | (1 << (vbaParser.DEFVAR - 32)) | (1 << (vbaParser.DELETESETTING - 32)) | (1 << (vbaParser.DIM - 32)) | (1 << (vbaParser.DO - 32)) | (1 << (vbaParser.DOUBLE - 32)) | (1 << (vbaParser.EACH - 32)) | (1 << (vbaParser.ELSE - 32)) | (1 << (vbaParser.ELSEIF - 32)) | (1 << (vbaParser.END - 32)) | (1 << (vbaParser.ENUM - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (vbaParser.EQV - 64)) | (1 << (vbaParser.ERASE - 64)) | (1 << (vbaParser.ERROR - 64)) | (1 << (vbaParser.EVENT - 64)) | (1 << (vbaParser.FALSE - 64)) | (1 << (vbaParser.FILECOPY - 64)) | (1 << (vbaParser.FRIEND - 64)) | (1 << (vbaParser.FOR - 64)) | (1 << (vbaParser.FUNCTION - 64)) | (1 << (vbaParser.GET - 64)) | (1 << (vbaParser.GLOBAL - 64)) | (1 << (vbaParser.GOSUB - 64)) | (1 << (vbaParser.GOTO - 64)) | (1 << (vbaParser.IF - 64)) | (1 << (vbaParser.IMP - 64)) | (1 << (vbaParser.IMPLEMENTS - 64)) | (1 << (vbaParser.IN - 64)) | (1 << (vbaParser.INPUT - 64)) | (1 << (vbaParser.IS - 64)) | (1 << (vbaParser.INTEGER - 64)) | (1 << (vbaParser.KILL - 64)) | (1 << (vbaParser.LOAD - 64)) | (1 << (vbaParser.LOCK - 64)) | (1 << (vbaParser.LONG - 64)) | (1 << (vbaParser.LOOP - 64)) | (1 << (vbaParser.LEN - 64)) | (1 << (vbaParser.LET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (vbaParser.LIB - 96)) | (1 << (vbaParser.LIKE - 96)) | (1 << (vbaParser.LSET - 96)) | (1 << (vbaParser.ME - 96)) | (1 << (vbaParser.MID - 96)) | (1 << (vbaParser.MKDIR - 96)) | (1 << (vbaParser.MOD - 96)) | (1 << (vbaParser.NAME - 96)) | (1 << (vbaParser.NEXT - 96)) | (1 << (vbaParser.NEW - 96)) | (1 << (vbaParser.NOT - 96)) | (1 << (vbaParser.NOTHING - 96)) | (1 << (vbaParser.NULL - 96)) | (1 << (vbaParser.ON - 96)) | (1 << (vbaParser.OPEN - 96)) | (1 << (vbaParser.OPTIONAL - 96)) | (1 << (vbaParser.OR - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (vbaParser.OUTPUT - 128)) | (1 << (vbaParser.PARAMARRAY - 128)) | (1 << (vbaParser.PRESERVE - 128)) | (1 << (vbaParser.PRINT - 128)) | (1 << (vbaParser.PRIVATE - 128)) | (1 << (vbaParser.PUBLIC - 128)) | (1 << (vbaParser.PUT - 128)) | (1 << (vbaParser.RANDOM - 128)) | (1 << (vbaParser.RANDOMIZE - 128)) | (1 << (vbaParser.RAISEEVENT - 128)) | (1 << (vbaParser.READ - 128)) | (1 << (vbaParser.REDIM - 128)) | (1 << (vbaParser.REM - 128)) | (1 << (vbaParser.RESET - 128)) | (1 << (vbaParser.RESUME - 128)) | (1 << (vbaParser.RETURN - 128)) | (1 << (vbaParser.RMDIR - 128)) | (1 << (vbaParser.RSET - 128)) | (1 << (vbaParser.SAVEPICTURE - 128)) | (1 << (vbaParser.SAVESETTING - 128)) | (1 << (vbaParser.SEEK - 128)) | (1 << (vbaParser.SELECT - 128)) | (1 << (vbaParser.SENDKEYS - 128)) | (1 << (vbaParser.SET - 128)) | (1 << (vbaParser.SETATTR - 128)) | (1 << (vbaParser.SHARED - 128)) | (1 << (vbaParser.SINGLE - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (vbaParser.SPC - 160)) | (1 << (vbaParser.STATIC - 160)) | (1 << (vbaParser.STEP - 160)) | (1 << (vbaParser.STOP - 160)) | (1 << (vbaParser.STRING - 160)) | (1 << (vbaParser.SUB - 160)) | (1 << (vbaParser.TAB - 160)) | (1 << (vbaParser.TEXT - 160)) | (1 << (vbaParser.THEN - 160)) | (1 << (vbaParser.TIME - 160)) | (1 << (vbaParser.TO - 160)) | (1 << (vbaParser.TRUE - 160)) | (1 << (vbaParser.TYPE - 160)) | (1 << (vbaParser.TYPEOF - 160)) | (1 << (vbaParser.UNLOAD - 160)) | (1 << (vbaParser.UNLOCK - 160)) | (1 << (vbaParser.UNTIL - 160)) | (1 << (vbaParser.VARIANT - 160)) | (1 << (vbaParser.VERSION - 160)) | (1 << (vbaParser.WEND - 160)) | (1 << (vbaParser.WHILE - 160)) | (1 << (vbaParser.WIDTH - 160)) | (1 << (vbaParser.WITH - 160)) | (1 << (vbaParser.WITHEVENTS - 160)) | (1 << (vbaParser.WRITE - 160)) | (1 << (vbaParser.XOR - 160)))) !== 0))) {
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
	public remComment(): RemCommentContext {
		let _localctx: RemCommentContext = new RemCommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, vbaParser.RULE_remComment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2619;
			this.match(vbaParser.REMCOMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, vbaParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2621;
			this.match(vbaParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endOfLine(): EndOfLineContext {
		let _localctx: EndOfLineContext = new EndOfLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, vbaParser.RULE_endOfLine);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === vbaParser.WS) {
				{
				this.state = 2623;
				this.match(vbaParser.WS);
				}
			}

			this.state = 2629;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case vbaParser.NEWLINE:
				{
				this.state = 2626;
				this.match(vbaParser.NEWLINE);
				}
				break;
			case vbaParser.COMMENT:
				{
				this.state = 2627;
				this.comment();
				}
				break;
			case vbaParser.REMCOMMENT:
				{
				this.state = 2628;
				this.remComment();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2632;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 446, this._ctx) ) {
			case 1:
				{
				this.state = 2631;
				this.match(vbaParser.WS);
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
	public endOfStatement(): EndOfStatementContext {
		let _localctx: EndOfStatementContext = new EndOfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, vbaParser.RULE_endOfStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2644;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 450, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 2642;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 449, this._ctx) ) {
					case 1:
						{
						this.state = 2634;
						this.endOfLine();
						}
						break;

					case 2:
						{
						this.state = 2636;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === vbaParser.WS) {
							{
							this.state = 2635;
							this.match(vbaParser.WS);
							}
						}

						this.state = 2638;
						this.match(vbaParser.COLON);
						this.state = 2640;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 448, this._ctx) ) {
						case 1:
							{
							this.state = 2639;
							this.match(vbaParser.WS);
							}
							break;
						}
						}
						break;
					}
					}
				}
				this.state = 2646;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 450, this._ctx);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 100:
			return this.valueStmt_sempred(_localctx as ValueStmtContext, predIndex);
		}
		return true;
	}
	private valueStmt_sempred(_localctx: ValueStmtContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 23);

		case 1:
			return this.precpred(this._ctx, 22);

		case 2:
			return this.precpred(this._ctx, 21);

		case 3:
			return this.precpred(this._ctx, 20);

		case 4:
			return this.precpred(this._ctx, 19);

		case 5:
			return this.precpred(this._ctx, 18);

		case 6:
			return this.precpred(this._ctx, 17);

		case 7:
			return this.precpred(this._ctx, 16);

		case 8:
			return this.precpred(this._ctx, 15);

		case 9:
			return this.precpred(this._ctx, 12);

		case 10:
			return this.precpred(this._ctx, 11);

		case 11:
			return this.precpred(this._ctx, 10);

		case 12:
			return this.precpred(this._ctx, 9);

		case 13:
			return this.precpred(this._ctx, 8);

		case 14:
			return this.precpred(this._ctx, 7);

		case 15:
			return this.precpred(this._ctx, 6);

		case 16:
			return this.precpred(this._ctx, 5);

		case 17:
			return this.precpred(this._ctx, 4);

		case 18:
			return this.precpred(this._ctx, 3);

		case 19:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 6;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xDE\u0A5A\x04" +
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
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x05\x03\u012D\n\x03\x03\x03\x07\x03\u0130\n\x03\f\x03" +
		"\x0E\x03\u0133\v\x03\x03\x03\x03\x03\x07\x03\u0137\n\x03\f\x03\x0E\x03" +
		"\u013A\v\x03\x05\x03\u013C\n\x03\x03\x03\x05\x03\u013F\n\x03\x03\x03\x07" +
		"\x03\u0142\n\x03\f\x03\x0E\x03\u0145\v\x03\x03\x03\x05\x03\u0148\n\x03" +
		"\x03\x03\x07\x03\u014B\n\x03\f\x03\x0E\x03\u014E\v\x03\x03\x03\x05\x03" +
		"\u0151\n\x03\x03\x03\x07\x03\u0154\n\x03\f\x03\x0E\x03\u0157\v\x03\x03" +
		"\x03\x05\x03\u015A\n\x03\x03\x03\x07\x03\u015D\n\x03\f\x03\x0E\x03\u0160" +
		"\v\x03\x03\x03\x05\x03\u0163\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x07\x05\u016D\n\x05\f\x05\x0E\x05\u0170\v" +
		"\x05\x03\x05\x06\x05\u0173\n\x05\r\x05\x0E\x05\u0174\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x05\x06\u017B\n\x06\x03\x06\x03\x06\x05\x06\u017F\n\x06\x03" +
		"\x06\x03\x06\x07\x06\u0183\n\x06\f\x06\x0E\x06\u0186\v\x06\x03\x07\x03" +
		"\x07\x06\x07\u018A\n\x07\r\x07\x0E\x07\u018B\x06\x07\u018E\n\x07\r\x07" +
		"\x0E\x07\u018F\x03\b\x03\b\x06\b\u0194\n\b\r\b\x0E\b\u0195\x03\b\x03\b" +
		"\x07\b\u019A\n\b\f\b\x0E\b\u019D\v\b\x03\b\x07\b\u01A0\n\b\f\b\x0E\b\u01A3" +
		"\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u01AD\n\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u01B9\n" +
		"\n\x03\v\x03\v\x05\v\u01BD\n\v\x03\f\x03\f\x06\f\u01C1\n\f\r\f\x0E\f\u01C2" +
		"\x03\f\x03\f\x07\f\u01C7\n\f\f\f\x0E\f\u01CA\v\f\x03\f\x07\f\u01CD\n\f" +
		"\f\f\x0E\f\u01D0\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u01D8\n" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01DE\n\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\u01E2\n\x0E\x03\x0E\x03\x0E\x05\x0E\u01E6\n\x0E\x03\x0E\x03\x0E" +
		"\x05\x0E\u01EA\n\x0E\x03\x0E\x07\x0E\u01ED\n\x0E\f\x0E\x0E\x0E\u01F0\v" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u01F6\n\x0F\f\x0F\x0E\x0F" +
		"\u01F9\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0240" +
		"\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0246\n\x11\x03\x11\x03" +
		"\x11\x05\x11\u024A\n\x11\x03\x11\x05\x11\u024D\n\x11\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x05\x15\u025D\n\x15\x03\x15\x03\x15\x05\x15\u0261" +
		"\n\x15\x03\x15\x07\x15\u0264\n\x15\f\x15\x0E\x15\u0267\v\x15\x05\x15\u0269" +
		"\n\x15\x03\x16\x03\x16\x03\x16\x05\x16\u026E\n\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x05\x16\u0274\n\x16\x03\x16\x03\x16\x05\x16\u0278\n\x16\x03" +
		"\x16\x07\x16\u027B\n\x16\f\x16\x0E\x16\u027E\v\x16\x03\x17\x03\x17\x05" +
		"\x17\u0282\n\x17\x03\x17\x03\x17\x05\x17\u0286\n\x17\x03\x17\x05\x17\u0289" +
		"\n\x17\x03\x17\x03\x17\x05\x17\u028D\n\x17\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x05\x18\u0293\n\x18\x03\x18\x03\x18\x05\x18\u0297\n\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x19\x05\x19\u029E\n\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x05\x19\u02A4\n\x19\x03\x19\x03\x19\x05\x19\u02A8\n\x19\x03\x19" +
		"\x05\x19\u02AB\n\x19\x03\x19\x03\x19\x03\x19\x05\x19\u02B0\n\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u02BA" +
		"\n\x19\x03\x19\x05\x19\u02BD\n\x19\x03\x19\x05\x19\u02C0\n\x19\x03\x19" +
		"\x03\x19\x05\x19\u02C4\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u02CA" +
		"\n\x1A\x03\x1A\x03\x1A\x05\x1A\u02CE\n\x1A\x03\x1A\x07\x1A\u02D1\n\x1A" +
		"\f\x1A\x0E\x1A\u02D4\v\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u02DA" +
		"\n\x1B\x03\x1B\x03\x1B\x05\x1B\u02DE\n\x1B\x03\x1B\x03\x1B\x05\x1B\u02E2" +
		"\n\x1B\x03\x1B\x03\x1B\x05\x1B\u02E6\n\x1B\x03\x1B\x05\x1B\u02E9\n\x1B" +
		"\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u02EE\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u02F9\n\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x05\x1C\u0306\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x05" +
		"\x1E\u030D\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0314" +
		"\n\x1E\f\x1E\x0E\x1E\u0317\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x05\x1F" +
		"\u031D\n\x1F\x03\x1F\x03\x1F\x05\x1F\u0321\n\x1F\x03\x1F\x05\x1F\u0324" +
		"\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x05 \u032D\n \x03 \x07" +
		" \u0330\n \f \x0E \u0333\v \x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x05" +
		"\"\u033C\n\"\x03\"\x03\"\x03\"\x03\"\x05\"\u0342\n\"\x03\"\x03\"\x03#" +
		"\x03#\x03$\x03$\x03$\x03$\x05$\u034C\n$\x03$\x03$\x05$\u0350\n$\x03$\x03" +
		"$\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u035A\n%\x03%\x03%\x03%\x03%\x03" +
		"%\x03%\x05%\u0362\n%\x03%\x03%\x03%\x05%\u0367\n%\x03&\x03&\x03&\x03&" +
		"\x05&\u036D\n&\x03&\x03&\x05&\u0371\n&\x03&\x05&\u0374\n&\x03&\x03&\x05" +
		"&\u0378\n&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u0383\n&" +
		"\x03&\x03&\x05&\u0387\n&\x03&\x03&\x03&\x05&\u038C\n&\x03\'\x03\'\x03" +
		"\'\x05\'\u0391\n\'\x03\'\x03\'\x05\'\u0395\n\'\x03\'\x03\'\x05\'\u0399" +
		"\n\'\x03\'\x03\'\x05\'\u039D\n\'\x03\'\x05\'\u03A0\n\'\x03\'\x05\'\u03A3" +
		"\n\'\x03\'\x05\'\u03A6\n\'\x03\'\x05\'\u03A9\n\'\x03\'\x03\'\x05\'\u03AD" +
		"\n\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x05(\u03B5\n(\x03(\x03(\x05(\u03B9" +
		"\n(\x03(\x05(\u03BC\n(\x03(\x05(\u03BF\n(\x03(\x03(\x05(\u03C3\n(\x03" +
		"(\x03(\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u03DA\n+\x03+\x03+\x07+\u03DE\n+" +
		"\f+\x0E+\u03E1\v+\x03+\x05+\u03E4\n+\x03+\x03+\x05+\u03E8\n+\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x05,\u03F1\n,\x03-\x03-\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x05.\u03FC\n.\x03/\x03/\x03/\x05/\u0401\n/\x030\x030" +
		"\x030\x030\x031\x031\x031\x031\x051\u040B\n1\x031\x031\x051\u040F\n1\x03" +
		"1\x061\u0412\n1\r1\x0E1\u0413\x032\x032\x032\x032\x033\x033\x053\u041C" +
		"\n3\x033\x033\x053\u0420\n3\x033\x033\x053\u0424\n3\x033\x033\x034\x03" +
		"4\x034\x034\x054\u042C\n4\x034\x034\x054\u0430\n4\x034\x034\x035\x035" +
		"\x035\x035\x036\x036\x036\x036\x056\u043C\n6\x036\x036\x056\u0440\n6\x03" +
		"6\x036\x036\x036\x036\x056\u0447\n6\x056\u0449\n6\x037\x037\x037\x037" +
		"\x057\u044F\n7\x037\x037\x057\u0453\n7\x037\x037\x038\x038\x058\u0459" +
		"\n8\x038\x038\x058\u045D\n8\x038\x038\x058\u0461\n8\x038\x038\x039\x03" +
		"9\x079\u0467\n9\f9\x0E9\u046A\v9\x039\x059\u046D\n9\x039\x039\x03:\x03" +
		":\x05:\u0473\n:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x07:\u047C\n:\f:\x0E" +
		":\u047F\v:\x03;\x03;\x05;\u0483\n;\x03;\x03;\x03;\x03;\x03;\x03;\x03;" +
		"\x07;\u048C\n;\f;\x0E;\u048F\v;\x03<\x03<\x03<\x03<\x03<\x07<\u0496\n" +
		"<\f<\x0E<\u0499\v<\x03=\x03=\x05=\u049D\n=\x03=\x03=\x05=\u04A1\n=\x03" +
		"=\x03=\x05=\u04A5\n=\x03=\x03=\x03>\x03>\x03>\x03>\x03?\x03?\x03?\x03" +
		"?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u04BD" +
		"\n@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u04C7\nA\x03A\x03A\x05" +
		"A\u04CB\nA\x03A\x07A\u04CE\nA\fA\x0EA\u04D1\vA\x03B\x03B\x03B\x03B\x03" +
		"B\x03B\x03B\x03B\x05B\u04DB\nB\x03B\x03B\x05B\u04DF\nB\x03B\x07B\u04E2" +
		"\nB\fB\x0EB\u04E5\vB\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03" +
		"C\x03C\x05C\u04F2\nC\x03C\x03C\x05C\u04F6\nC\x03C\x03C\x03C\x03C\x03C" +
		"\x03C\x03C\x05C\u04FF\nC\x03C\x03C\x05C\u0503\nC\x03C\x05C\u0506\nC\x03" +
		"D\x03D\x05D\u050A\nD\x03D\x03D\x05D\u050E\nD\x03D\x05D\u0511\nD\x07D\u0513" +
		"\nD\fD\x0ED\u0516\vD\x03D\x05D\u0519\nD\x03D\x05D\u051C\nD\x03D\x03D\x05" +
		"D\u0520\nD\x03D\x05D\u0523\nD\x06D\u0525\nD\rD\x0ED\u0526\x05D\u0529\n" +
		"D\x03E\x03E\x03E\x05E\u052E\nE\x03E\x03E\x05E\u0532\nE\x03E\x03E\x05E" +
		"\u0536\nE\x03E\x03E\x05E\u053A\nE\x05E\u053C\nE\x03F\x03F\x03F\x03F\x05" +
		"F\u0542\nF\x03F\x03F\x05F\u0546\nF\x03F\x05F\u0549\nF\x03G\x03G\x03G\x05" +
		"G\u054E\nG\x03G\x03G\x05G\u0552\nG\x03G\x03G\x03G\x03G\x05G\u0558\nG\x03" +
		"G\x05G\u055B\nG\x03G\x05G\u055E\nG\x03G\x03G\x05G\u0562\nG\x03G\x03G\x05" +
		"G\u0566\nG\x03G\x03G\x03H\x03H\x03H\x05H\u056D\nH\x03H\x03H\x05H\u0571" +
		"\nH\x03H\x03H\x03H\x03H\x05H\u0577\nH\x03H\x05H\u057A\nH\x03H\x03H\x05" +
		"H\u057E\nH\x03H\x03H\x03I\x03I\x03I\x05I\u0585\nI\x03I\x03I\x05I\u0589" +
		"\nI\x03I\x03I\x03I\x03I\x05I\u058F\nI\x03I\x05I\u0592\nI\x03I\x03I\x05" +
		"I\u0596\nI\x03I\x03I\x03J\x03J\x03J\x03J\x05J\u059E\nJ\x03J\x03J\x05J" +
		"\u05A2\nJ\x03J\x05J\u05A5\nJ\x03J\x05J\u05A8\nJ\x03J\x03J\x05J\u05AC\n" +
		"J\x03J\x03J\x03K\x03K\x03K\x03K\x05K\u05B4\nK\x03K\x03K\x05K\u05B8\nK" +
		"\x03K\x03K\x05K\u05BC\nK\x05K\u05BE\nK\x03K\x05K\u05C1\nK\x03L\x03L\x03" +
		"L\x05L\u05C6\nL\x03M\x03M\x03M\x03M\x05M\u05CC\nM\x03M\x03M\x05M\u05D0" +
		"\nM\x03M\x03M\x05M\u05D4\nM\x03M\x07M\u05D7\nM\fM\x0EM\u05DA\vM\x03N\x03" +
		"N\x05N\u05DE\nN\x03N\x03N\x05N\u05E2\nN\x03N\x03N\x05N\u05E6\nN\x03N\x03" +
		"N\x03N\x05N\u05EB\nN\x03O\x03O\x03P\x03P\x03P\x03P\x05P\u05F3\nP\x05P" +
		"\u05F5\nP\x03Q\x03Q\x03R\x03R\x03R\x03R\x03S\x03S\x03S\x03S\x05S\u0601" +
		"\nS\x03S\x03S\x05S\u0605\nS\x03S\x03S\x03T\x03T\x03T\x03T\x05T\u060D\n" +
		"T\x03T\x03T\x05T\u0611\nT\x03T\x03T\x03U\x03U\x03U\x03U\x05U\u0619\nU" +
		"\x03U\x03U\x05U\u061D\nU\x03U\x03U\x05U\u0621\nU\x03U\x03U\x05U\u0625" +
		"\nU\x03U\x03U\x05U\u0629\nU\x03U\x03U\x05U\u062D\nU\x03U\x03U\x03V\x03" +
		"V\x03V\x03V\x05V\u0635\nV\x03V\x03V\x05V\u0639\nV\x03V\x03V\x03W\x03W" +
		"\x03W\x03W\x03W\x03W\x03W\x07W\u0644\nW\fW\x0EW\u0647\vW\x03W\x03W\x03" +
		"X\x03X\x05X\u064D\nX\x03X\x03X\x05X\u0651\nX\x03X\x03X\x03X\x03X\x03X" +
		"\x03X\x03X\x03X\x03X\x05X\u065C\nX\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u0663" +
		"\nY\x03Z\x03Z\x03Z\x05Z\u0668\nZ\x03Z\x03Z\x05Z\u066C\nZ\x03Z\x07Z\u066F" +
		"\nZ\fZ\x0EZ\u0672\vZ\x05Z\u0674\nZ\x03[\x03[\x03[\x03[\x05[\u067A\n[\x03" +
		"[\x03[\x05[\u067E\n[\x03[\x05[\u0681\n[\x03\\\x03\\\x03\\\x03\\\x05\\" +
		"\u0687\n\\\x03\\\x03\\\x05\\\u068B\n\\\x03\\\x03\\\x03]\x03]\x03]\x03" +
		"]\x05]\u0693\n]\x03]\x03]\x05]\u0697\n]\x03]\x03]\x03^\x03^\x03_\x03_" +
		"\x03_\x05_\u06A0\n_\x03_\x03_\x05_\u06A4\n_\x03_\x03_\x05_\u06A8\n_\x03" +
		"_\x03_\x05_\u06AC\n_\x03_\x05_\u06AF\n_\x03_\x03_\x05_\u06B3\n_\x03_\x03" +
		"_\x03`\x03`\x05`\u06B9\n`\x03`\x03`\x05`\u06BD\n`\x03`\x03`\x03a\x03a" +
		"\x03a\x05a\u06C4\na\x03a\x03a\x03a\x03a\x03a\x07a\u06CB\na\fa\x0Ea\u06CE" +
		"\va\x03a\x03a\x03b\x03b\x05b\u06D4\nb\x03b\x03b\x05b\u06D8\nb\x03b\x05" +
		"b\u06DB\nb\x03b\x05b\u06DE\nb\x03b\x05b\u06E1\nb\x03b\x03b\x05b\u06E5" +
		"\nb\x03b\x03b\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x05c\u06F0\nc\x03d\x03" +
		"d\x03d\x03d\x03e\x03e\x03e\x03e\x05e\u06FA\ne\x03e\x03e\x05e\u06FE\ne" +
		"\x03e\x03e\x03e\x03e\x03e\x05e\u0705\ne\x05e\u0707\ne\x03f\x03f\x03f\x03" +
		"f\x03f\x05f\u070E\nf\x03f\x03f\x05f\u0712\nf\x03f\x03f\x05f\u0716\nf\x03" +
		"f\x07f\u0719\nf\ff\x0Ef\u071C\vf\x03f\x03f\x03f\x03f\x05f\u0722\nf\x03" +
		"f\x03f\x03f\x03f\x03f\x05f\u0729\nf\x03f\x03f\x03f\x05f\u072E\nf\x03f" +
		"\x03f\x05f\u0732\nf\x03f\x03f\x03f\x03f\x05f\u0738\nf\x03f\x03f\x03f\x05" +
		"f\u073D\nf\x03f\x03f\x03f\x05f\u0742\nf\x03f\x05f\u0745\nf\x03f\x03f\x05" +
		"f\u0749\nf\x03f\x03f\x05f\u074D\nf\x03f\x03f\x03f\x05f\u0752\nf\x03f\x03" +
		"f\x05f\u0756\nf\x03f\x03f\x03f\x05f\u075B\nf\x03f\x03f\x05f\u075F\nf\x03" +
		"f\x03f\x03f\x05f\u0764\nf\x03f\x03f\x05f\u0768\nf\x03f\x03f\x03f\x05f" +
		"\u076D\nf\x03f\x03f\x05f\u0771\nf\x03f\x03f\x03f\x05f\u0776\nf\x03f\x03" +
		"f\x05f\u077A\nf\x03f\x03f\x03f\x05f\u077F\nf\x03f\x03f\x05f\u0783\nf\x03" +
		"f\x03f\x03f\x05f\u0788\nf\x03f\x03f\x05f\u078C\nf\x03f\x03f\x03f\x05f" +
		"\u0791\nf\x03f\x03f\x05f\u0795\nf\x03f\x03f\x03f\x05f\u079A\nf\x03f\x03" +
		"f\x05f\u079E\nf\x03f\x03f\x03f\x05f\u07A3\nf\x03f\x03f\x05f\u07A7\nf\x03" +
		"f\x03f\x03f\x05f\u07AC\nf\x03f\x03f\x05f\u07B0\nf\x03f\x03f\x03f\x05f" +
		"\u07B5\nf\x03f\x03f\x05f\u07B9\nf\x03f\x03f\x03f\x05f\u07BE\nf\x03f\x03" +
		"f\x05f\u07C2\nf\x03f\x03f\x03f\x05f\u07C7\nf\x03f\x03f\x05f\u07CB\nf\x03" +
		"f\x03f\x03f\x05f\u07D0\nf\x03f\x03f\x05f\u07D4\nf\x03f\x03f\x03f\x05f" +
		"\u07D9\nf\x03f\x03f\x05f\u07DD\nf\x03f\x03f\x03f\x05f\u07E2\nf\x03f\x03" +
		"f\x05f\u07E6\nf\x03f\x03f\x03f\x05f\u07EB\nf\x03f\x03f\x05f\u07EF\nf\x03" +
		"f\x03f\x03f\x05f\u07F4\nf\x03f\x03f\x05f\u07F8\nf\x03f\x07f\u07FB\nf\f" +
		"f\x0Ef\u07FE\vf\x03g\x03g\x03g\x05g\u0803\ng\x03g\x03g\x03g\x05g\u0808" +
		"\ng\x03g\x03g\x03h\x03h\x05h\u080E\nh\x03h\x03h\x05h\u0812\nh\x03h\x07" +
		"h\u0815\nh\fh\x0Eh\u0818\vh\x03i\x03i\x05i\u081C\ni\x03i\x03i\x05i\u0820" +
		"\ni\x03i\x03i\x05i\u0824\ni\x05i\u0826\ni\x03i\x03i\x05i\u082A\ni\x05" +
		"i\u082C\ni\x03i\x05i\u082F\ni\x03i\x03i\x05i\u0833\ni\x03j\x03j\x03j\x03" +
		"j\x03j\x05j\u083A\nj\x03j\x03j\x03k\x03k\x03k\x03k\x05k\u0842\nk\x03k" +
		"\x03k\x05k\u0846\nk\x03k\x03k\x03l\x03l\x03l\x03l\x03l\x03l\x05l\u0850" +
		"\nl\x03l\x03l\x05l\u0854\nl\x03l\x03l\x03m\x03m\x03m\x03m\x05m\u085C\n" +
		"m\x03m\x03m\x05m\u0860\nm\x03m\x05m\u0863\nm\x03n\x05n\u0866\nn\x03n\x03" +
		"n\x03o\x03o\x05o\u086C\no\x03p\x03p\x03p\x03p\x05p\u0872\np\x03p\x05p" +
		"\u0875\np\x03p\x03p\x05p\u0879\np\x03p\x03p\x05p\u087D\np\x03p\x03p\x05" +
		"p\u0881\np\x03p\x05p\u0884\np\x03p\x03p\x03p\x03p\x07p\u088A\np\fp\x0E" +
		"p\u088D\vp\x03q\x03q\x03q\x05q\u0892\nq\x03q\x03q\x03q\x05q\u0897\nq\x03" +
		"q\x05q\u089A\nq\x03q\x03q\x05q\u089E\nq\x03q\x03q\x05q\u08A2\nq\x03q\x03" +
		"q\x05q\u08A6\nq\x03q\x05q\u08A9\nq\x03q\x03q\x03q\x03q\x07q\u08AF\nq\f" +
		"q\x0Eq\u08B2\vq\x03r\x03r\x05r\u08B6\nr\x03s\x05s\u08B9\ns\x03s\x03s\x03" +
		"s\x05s\u08BE\ns\x03s\x03s\x05s\u08C2\ns\x03s\x05s\u08C5\ns\x03s\x05s\u08C8" +
		"\ns\x03s\x03s\x03s\x03s\x07s\u08CE\ns\fs\x0Es\u08D1\vs\x03t\x03t\x03t" +
		"\x05t\u08D6\nt\x03t\x05t\u08D9\nt\x03t\x03t\x03t\x03t\x07t\u08DF\nt\f" +
		"t\x0Et\u08E2\vt\x03u\x03u\x03u\x03u\x05u\u08E8\nu\x03v\x03v\x05v\u08EC" +
		"\nv\x03v\x05v\u08EF\nv\x03v\x05v\u08F2\nv";
	private static readonly _serializedATNSegment1: string =
		"\x03v\x03v\x03v\x03v\x07v\u08F8\nv\fv\x0Ev\u08FB\vv\x03w\x03w\x05w\u08FF" +
		"\nw\x03w\x05w\u0902\nw\x03w\x05w\u0905\nw\x03w\x03w\x05w\u0909\nw\x03" +
		"w\x03w\x05w\u090D\nw\x05w\u090F\nw\x03w\x03w\x05w\u0913\nw\x03w\x05w\u0916" +
		"\nw\x03w\x03w\x03w\x03w\x07w\u091C\nw\fw\x0Ew\u091F\vw\x03x\x03x\x05x" +
		"\u0923\nx\x03x\x06x\u0926\nx\rx\x0Ex\u0927\x03x\x05x\u092B\nx\x03x\x05" +
		"x\u092E\nx\x03x\x03x\x03x\x03x\x07x\u0934\nx\fx\x0Ex\u0937\vx\x03y\x03" +
		"y\x03y\x05y\u093C\ny\x03z\x03z\x03{\x05{\u0941\n{\x03{\x05{\u0944\n{\x03" +
		"{\x03{\x05{\u0948\n{\x07{\u094A\n{\f{\x0E{\u094D\v{\x03{\x03{\x05{\u0951" +
		"\n{\x03{\x03{\x05{\u0955\n{\x03{\x05{\u0958\n{\x07{\u095A\n{\f{\x0E{\u095D" +
		"\v{\x03|\x05|\u0960\n|\x03|\x03|\x05|\u0964\n|\x03|\x05|\u0967\n|\x03" +
		"|\x03|\x03}\x03}\x03}\x05}\u096E\n}\x03~\x03~\x05~\u0972\n~\x03~\x03~" +
		"\x05~\u0976\n~\x03~\x03~\x05~\u097A\n~\x03~\x07~\u097D\n~\f~\x0E~\u0980" +
		"\v~\x05~\u0982\n~\x03~\x05~\u0985\n~\x03~\x03~\x03\x7F\x03\x7F\x05\x7F" +
		"\u098B\n\x7F\x03\x7F\x03\x7F\x05\x7F\u098F\n\x7F\x03\x7F\x03\x7F\x05\x7F" +
		"\u0993\n\x7F\x03\x7F\x03\x7F\x05\x7F\u0997\n\x7F\x03\x7F\x05\x7F\u099A" +
		"\n\x7F\x03\x7F\x03\x7F\x05\x7F\u099E\n\x7F\x03\x7F\x05\x7F\u09A1\n\x7F" +
		"\x03\x7F\x05\x7F\u09A4\n\x7F\x03\x7F\x05\x7F\u09A7\n\x7F\x03\x7F\x05\x7F" +
		"\u09AA\n\x7F\x03\x7F\x05\x7F\u09AD\n\x7F\x03\x80\x03\x80\x05\x80\u09B1" +
		"\n\x80\x03\x80\x03\x80\x03\x81\x03\x81\x05\x81\u09B7\n\x81\x03\x81\x03" +
		"\x81\x05\x81\u09BB\n\x81\x03\x81\x07\x81\u09BE\n\x81\f\x81\x0E\x81\u09C1" +
		"\v\x81\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x05\x82\u09C8\n\x82\x03" +
		"\x82\x03\x82\x03\x83\x03\x83\x06\x83\u09CE\n\x83\r\x83\x0E\x83\u09CF\x03" +
		"\x84\x03\x84\x05\x84\u09D4\n\x84\x03\x84\x03\x84\x05\x84\u09D8\n\x84\x03" +
		"\x84\x03\x84\x05\x84\u09DC\n\x84\x03\x84\x05\x84\u09DF\n\x84\x03\x85\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05" +
		"\x85\u09EB\n\x85\x03\x85\x03\x85\x05\x85\u09EF\n\x85\x03\x85\x05\x85\u09F2" +
		"\n\x85\x03\x85\x05\x85\u09F5\n\x85\x03\x86\x03\x86\x03\x86\x07\x86\u09FA" +
		"\n\x86\f\x86\x0E\x86\u09FD\v\x86\x03\x86\x03\x86\x03\x86\x06\x86\u0A02" +
		"\n\x86\r\x86\x0E\x86\u0A03\x05\x86\u0A06\n\x86\x03\x87\x03\x87\x03\x88" +
		"\x03\x88\x03\x88\x07\x88\u0A0D\n\x88\f\x88\x0E\x88\u0A10\v\x88\x03\x89" +
		"\x03\x89\x05\x89\u0A14\n\x89\x03\x89\x03\x89\x05\x89\u0A18\n\x89\x03\x8A" +
		"\x03\x8A\x05\x8A\u0A1C\n\x8A\x03\x8A\x03\x8A\x05\x8A\u0A20\n\x8A\x03\x8A" +
		"\x05\x8A\u0A23\n\x8A\x03\x8B\x03\x8B\x03\x8B\x03\x8C\x03\x8C\x03\x8D\x03" +
		"\x8D\x05\x8D\u0A2C\n\x8D\x03\x8D\x05\x8D\u0A2F\n\x8D\x03\x8D\x03\x8D\x05" +
		"\x8D\u0A33\n\x8D\x03\x8D\x05\x8D\u0A36\n\x8D\x03\x8E\x03\x8E\x03\x8F\x03" +
		"\x8F\x03\x90\x03\x90\x03\x91\x03\x91\x03\x92\x03\x92\x03\x93\x05\x93\u0A43" +
		"\n\x93\x03\x93\x03\x93\x03\x93\x05\x93\u0A48\n\x93\x03\x93\x05\x93\u0A4B" +
		"\n\x93\x03\x94\x03\x94\x05\x94\u0A4F\n\x94\x03\x94\x03\x94\x05\x94\u0A53" +
		"\n\x94\x07\x94\u0A55\n\x94\f\x94\x0E\x94\u0A58\v\x94\x03\x94\x03\u0331" +
		"\x02\x03\xCA\x95\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
		"\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
		"x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
		"\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E" +
		"\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0" +
		"\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2" +
		"\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4" +
		"\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6" +
		"\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8" +
		"\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108" +
		"\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116" +
		"\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124" +
		"\x02\u0126\x02\x02\x15\x05\x02\x15\x15\"\"\xA9\xA9\x03\x02%0\x04\x02\xB2" +
		"\xB2\xB6\xB6\x03\x02FJ\x05\x02\xBF\xBF\xC6\xC6\xCA\xCA\x03\x02yz\x07\x02" +
		"\x11\x11\x15\x15XX\x82\x82\x8D\x8D\x04\x02\x90\x91\xBA\xBA\x04\x02eg\xA0" +
		"\xA0\x03\x02\x03\x04\x04\x02\xA2\xA2\xA8\xA8\x03\x02\x06\x07\x04\x02\x17" +
		"\x18\x83\x83\x03\x02\x17\x18\x07\x02YYcc\xBF\xC2\xC4\xC4\xC8\xC8\x06\x02" +
		"KKvw\xAD\xAD\xCF\xD5\x05\x02\x05\x05\x07\n\xBC\xBC\x06\x02MMQQ\x86\x86" +
		"\x8B\x8B\v\x02\v7@EKchhnx{|\x81\x86\x8B\x90\x92\xBB\x02\u0C05\x02\u0128" +
		"\x03\x02\x02\x02\x04\u012C\x03\x02\x02\x02\x06\u0164\x03\x02\x02\x02\b" +
		"\u016A\x03\x02\x02\x02\n\u0178\x03\x02\x02\x02\f\u018D\x03\x02\x02\x02" +
		"\x0E\u0191\x03\x02\x02\x02\x10\u01AC\x03\x02\x02\x02\x12\u01B8\x03\x02" +
		"\x02\x02\x14\u01BC\x03\x02\x02\x02\x16\u01BE\x03\x02\x02\x02\x18\u01D7" +
		"\x03\x02\x02\x02\x1A\u01D9\x03\x02\x02\x02\x1C\u01F1\x03\x02\x02\x02\x1E" +
		"\u023F\x03\x02\x02\x02 \u0241\x03\x02\x02\x02\"\u024E\x03\x02\x02\x02" +
		"$\u0250\x03\x02\x02\x02&\u0254\x03\x02\x02\x02(\u0258\x03\x02\x02\x02" +
		"*\u026D\x03\x02\x02\x02,\u027F\x03\x02\x02\x02.\u0290\x03\x02\x02\x02" +
		"0\u029D\x03\x02\x02\x022\u02C5\x03\x02\x02\x024\u02D5\x03\x02\x02\x02" +
		"6\u0305\x03\x02\x02\x028\u0307\x03\x02\x02\x02:\u030C\x03\x02\x02\x02" +
		"<\u031A\x03\x02\x02\x02>\u0327\x03\x02\x02\x02@\u0334\x03\x02\x02\x02" +
		"B\u033B\x03\x02\x02\x02D\u0345\x03\x02\x02\x02F\u0347\x03\x02\x02\x02" +
		"H\u0353\x03\x02\x02\x02J\u0368\x03\x02\x02\x02L\u0390\x03\x02\x02\x02" +
		"N\u03B0\x03\x02\x02\x02P\u03C6\x03\x02\x02\x02R\u03CA\x03\x02\x02\x02" +
		"T\u03E7\x03\x02\x02\x02V\u03E9\x03\x02\x02\x02X\u03F2\x03\x02\x02\x02" +
		"Z\u03F4\x03\x02\x02\x02\\\u03FD\x03\x02\x02\x02^\u0402\x03\x02\x02\x02" +
		"`\u0406\x03\x02\x02\x02b\u0415\x03\x02\x02\x02d\u041B\x03\x02\x02\x02" +
		"f\u0427\x03\x02\x02\x02h\u0433\x03\x02\x02\x02j\u0437\x03\x02\x02\x02" +
		"l\u044A\x03\x02\x02\x02n\u0456\x03\x02\x02\x02p\u0464\x03\x02\x02\x02" +
		"r\u0470\x03\x02\x02\x02t\u0480\x03\x02\x02\x02v\u0490\x03\x02\x02\x02" +
		"x\u049A\x03\x02\x02\x02z\u04A8\x03\x02\x02\x02|\u04AC\x03\x02\x02\x02" +
		"~\u04B4\x03\x02\x02\x02\x80\u04BE\x03\x02\x02\x02\x82\u04D2\x03\x02\x02" +
		"\x02\x84\u04E6\x03\x02\x02\x02\x86\u0528\x03\x02\x02\x02\x88\u053B\x03" +
		"\x02\x02\x02\x8A\u053D\x03\x02\x02\x02\x8C\u054D\x03\x02\x02\x02\x8E\u056C" +
		"\x03\x02\x02\x02\x90\u0584\x03\x02\x02\x02\x92\u0599\x03\x02\x02\x02\x94" +
		"\u05AF\x03\x02\x02\x02\x96\u05C2\x03\x02\x02\x02\x98\u05C7\x03\x02\x02" +
		"\x02\x9A\u05DB\x03\x02\x02\x02\x9C\u05EC\x03\x02\x02\x02\x9E\u05EE\x03" +
		"\x02\x02\x02\xA0\u05F6\x03\x02\x02\x02\xA2\u05F8\x03\x02\x02\x02\xA4\u05FC" +
		"\x03\x02\x02\x02\xA6\u0608\x03\x02\x02\x02\xA8\u0614\x03\x02\x02\x02\xAA" +
		"\u0630\x03\x02\x02\x02\xAC\u063C\x03\x02\x02\x02\xAE\u065B\x03\x02\x02" +
		"\x02\xB0\u065D\x03\x02\x02\x02\xB2\u0673\x03\x02\x02\x02\xB4\u0675\x03" +
		"\x02\x02\x02\xB6\u0682\x03\x02\x02\x02\xB8\u068E\x03\x02\x02\x02\xBA\u069A" +
		"\x03\x02\x02\x02\xBC\u069F\x03\x02\x02\x02\xBE\u06B6\x03\x02\x02\x02\xC0" +
		"\u06C3\x03\x02\x02\x02\xC2\u06D1\x03\x02\x02\x02\xC4\u06E8\x03\x02\x02" +
		"\x02\xC6\u06F1\x03\x02\x02\x02\xC8\u06F5\x03\x02\x02\x02\xCA\u0744\x03" +
		"\x02\x02\x02\xCC\u0802\x03\x02\x02\x02\xCE\u080B\x03\x02\x02\x02\xD0\u0819" +
		"\x03\x02\x02\x02\xD2\u0834\x03\x02\x02\x02\xD4\u083D\x03\x02\x02\x02\xD6" +
		"\u0849\x03\x02\x02\x02\xD8\u0857\x03\x02\x02\x02\xDA\u0865\x03\x02\x02" +
		"\x02\xDC\u086B\x03\x02\x02\x02\xDE\u086D\x03\x02\x02\x02\xE0\u088E\x03" +
		"\x02\x02\x02\xE2\u08B5\x03\x02\x02\x02\xE4\u08B8\x03\x02\x02\x02\xE6\u08D2" +
		"\x03\x02\x02\x02\xE8\u08E7\x03\x02\x02\x02\xEA\u08E9\x03\x02\x02\x02\xEC" +
		"\u08FE\x03\x02\x02\x02\xEE\u0922\x03\x02\x02\x02\xF0\u0938\x03\x02\x02" +
		"\x02\xF2\u093D\x03\x02\x02\x02\xF4\u094B\x03\x02\x02\x02\xF6\u095F\x03" +
		"\x02\x02\x02\xF8\u096A\x03\x02\x02\x02\xFA\u096F\x03\x02\x02\x02\xFC\u098A" +
		"\x03\x02\x02\x02\xFE\u09AE\x03\x02\x02\x02\u0100\u09B4\x03\x02\x02\x02" +
		"\u0102\u09C7\x03\x02\x02\x02\u0104\u09CD\x03\x02\x02\x02\u0106\u09D1\x03" +
		"\x02\x02\x02\u0108\u09F4\x03\x02\x02\x02\u010A\u0A05\x03\x02\x02\x02\u010C" +
		"\u0A07\x03\x02\x02\x02\u010E\u0A09\x03\x02\x02\x02\u0110\u0A11\x03\x02" +
		"\x02\x02\u0112\u0A19\x03\x02\x02\x02\u0114\u0A24\x03\x02\x02\x02\u0116" +
		"\u0A27\x03\x02\x02\x02\u0118\u0A2B\x03\x02\x02\x02\u011A\u0A37\x03\x02" +
		"\x02\x02\u011C\u0A39\x03\x02\x02\x02\u011E\u0A3B\x03\x02\x02\x02\u0120" +
		"\u0A3D\x03\x02\x02\x02\u0122\u0A3F\x03\x02\x02\x02\u0124\u0A42\x03\x02" +
		"\x02\x02\u0126\u0A56\x03\x02\x02\x02\u0128\u0129\x05\x04\x03\x02\u0129" +
		"\u012A\x07\x02\x02\x03\u012A\x03\x03\x02\x02\x02\u012B\u012D\x07\xDD\x02" +
		"\x02\u012C\u012B\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u0131" +
		"\x03\x02\x02\x02\u012E\u0130\x05\u0124\x93\x02\u012F\u012E\x03\x02\x02" +
		"\x02\u0130\u0133\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132" +
		"\x03\x02\x02\x02\u0132\u013B\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02" +
		"\u0134\u0138\x05\x06\x04\x02\u0135\u0137\x05\u0124\x93\x02\u0136\u0135" +
		"\x03\x02\x02\x02\u0137\u013A\x03\x02\x02\x02\u0138\u0136\x03\x02\x02\x02" +
		"\u0138\u0139\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02\u013A\u0138\x03" +
		"\x02\x02\x02\u013B\u0134\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C" +
		"\u013E\x03\x02\x02\x02\u013D\u013F\x05\b\x05\x02\u013E\u013D\x03\x02\x02" +
		"\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0143\x03\x02\x02\x02\u0140\u0142" +
		"\x05\u0124\x93\x02\u0141\u0140\x03\x02\x02\x02\u0142\u0145\x03\x02\x02" +
		"\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0147" +
		"\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0146\u0148\x05\f\x07\x02" +
		"\u0147\u0146\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u014C\x03" +
		"\x02\x02\x02\u0149\u014B\x05\u0124\x93\x02\u014A\u0149\x03\x02\x02\x02" +
		"\u014B\u014E\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014C\u014D\x03" +
		"\x02\x02\x02\u014D\u0150\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014F" +
		"\u0151\x05\x0E\b\x02\u0150\u014F\x03\x02\x02\x02\u0150\u0151\x03\x02\x02" +
		"\x02\u0151\u0155\x03\x02\x02\x02\u0152\u0154\x05\u0124\x93\x02\u0153\u0152" +
		"\x03\x02\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02" +
		"\u0155\u0156\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02\u0157\u0155\x03" +
		"\x02\x02\x02\u0158\u015A\x05\x16\f\x02\u0159\u0158\x03\x02\x02\x02\u0159" +
		"\u015A\x03\x02\x02\x02\u015A\u015E\x03\x02\x02\x02\u015B\u015D\x05\u0124" +
		"\x93\x02\u015C\u015B\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E" +
		"\u015C\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0162\x03\x02" +
		"\x02\x02\u0160\u015E\x03\x02\x02\x02\u0161\u0163\x07\xDD\x02\x02\u0162" +
		"\u0161\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\x05\x03\x02\x02" +
		"\x02\u0164\u0165\x07\xB4\x02\x02\u0165\u0166\x07\xDD\x02\x02\u0166\u0167" +
		"\x07\xD4\x02\x02\u0167\u0168\x07\xDD\x02\x02\u0168\u0169\x07\x1E\x02\x02" +
		"\u0169\x07\x03\x02\x02\x02\u016A\u016E\x07\x13\x02\x02\u016B\u016D\x05" +
		"\u0124\x93\x02\u016C\u016B\x03\x02\x02\x02\u016D\u0170\x03\x02\x02\x02" +
		"\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0172\x03" +
		"\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0173\x05\n\x06\x02\u0172" +
		"\u0171\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0172\x03\x02" +
		"\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176" +
		"\u0177\x07@\x02\x02\u0177\t\x03\x02\x02\x02\u0178\u017A\x05\u0104\x83" +
		"\x02\u0179\u017B\x07\xDD\x02\x02\u017A\u0179\x03\x02\x02\x02\u017A\u017B" +
		"\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017E\x07\xBF\x02\x02" +
		"\u017D\u017F\x07\xDD\x02\x02\u017E\u017D\x03\x02\x02\x02\u017E\u017F\x03" +
		"\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0184\x05\u0116\x8C\x02" +
		"\u0181\u0183\x05\u0124\x93\x02\u0182\u0181\x03\x02\x02\x02\u0183\u0186" +
		"\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02" +
		"\u0185\v\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0187\u0189\x05\x1A" +
		"\x0E\x02\u0188\u018A\x05\u0124\x93\x02\u0189\u0188\x03\x02\x02\x02\u018A" +
		"\u018B\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02" +
		"\x02\x02\u018C\u018E\x03\x02\x02\x02\u018D\u0187\x03\x02\x02\x02\u018E" +
		"\u018F\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u018F\u0190\x03\x02" +
		"\x02\x02\u0190\r\x03\x02\x02\x02\u0191\u019B\x05\x12\n\x02\u0192\u0194" +
		"\x05\u0124\x93\x02\u0193\u0192\x03\x02\x02\x02\u0194\u0195\x03\x02\x02" +
		"\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0197" +
		"\x03\x02\x02\x02\u0197\u0198\x05\x12\n\x02\u0198\u019A\x03\x02\x02\x02" +
		"\u0199\u0193\x03\x02\x02\x02\u019A\u019D\x03\x02\x02\x02\u019B\u0199\x03" +
		"\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u01A1\x03\x02\x02\x02\u019D" +
		"\u019B\x03\x02\x02\x02\u019E\u01A0\x05\u0124\x93\x02\u019F\u019E\x03\x02" +
		"\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A1" +
		"\u01A2\x03\x02\x02\x02\u01A2\x0F\x03\x02\x02\x02\u01A3\u01A1\x03\x02\x02" +
		"\x02\u01A4\u01A5\x07}\x02\x02\u01A5\u01A6\x07\xDD\x02\x02\u01A6\u01AD" +
		"\x07\xD2\x02\x02\u01A7\u01A8\x07\x7F\x02\x02\u01A8\u01A9\x07\xDD\x02\x02" +
		"\u01A9\u01AD\t\x02\x02\x02\u01AA\u01AD\x07~\x02\x02\u01AB\u01AD\x07\x80" +
		"\x02\x02\u01AC\u01A4\x03\x02\x02\x02\u01AC\u01A7\x03\x02\x02\x02\u01AC" +
		"\u01AA\x03\x02\x02\x02\u01AC\u01AB\x03\x02\x02\x02\u01AD\x11\x03\x02\x02" +
		"\x02\u01AE\u01B9\x05\u0122\x92\x02\u01AF\u01B9\x050\x19\x02\u01B0\u01B9" +
		"\x05:\x1E\x02\u01B1\u01B9\x05B\"\x02\u01B2\u01B9\x05*\x16\x02\u01B3\u01B9" +
		"\x05^0\x02\u01B4\u01B9\x05\xCCg\x02\u01B5\u01B9\x05\x10\t\x02\u01B6\u01B9" +
		"\x05\xC0a\x02\u01B7\u01B9\x05\x14\v\x02\u01B8\u01AE\x03\x02\x02\x02\u01B8" +
		"\u01AF\x03\x02\x02\x02\u01B8\u01B0\x03\x02\x02\x02\u01B8\u01B1\x03\x02" +
		"\x02\x02\u01B8\u01B2\x03\x02\x02\x02\u01B8\u01B3\x03\x02\x02\x02\u01B8" +
		"\u01B4\x03\x02\x02\x02\u01B8\u01B5\x03\x02\x02\x02\u01B8\u01B6\x03\x02" +
		"\x02\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\x13\x03\x02\x02\x02\u01BA\u01BD" +
		"\x05n8\x02\u01BB\u01BD\x05p9\x02\u01BC\u01BA\x03\x02\x02\x02\u01BC\u01BB" +
		"\x03\x02\x02\x02\u01BD\x15\x03\x02\x02\x02\u01BE\u01C8\x05\x18\r\x02\u01BF" +
		"\u01C1\x05\u0124\x93\x02\u01C0\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02" +
		"\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3" +
		"\u01C4\x03\x02\x02\x02\u01C4\u01C5\x05\x18\r\x02\u01C5\u01C7\x03\x02\x02" +
		"\x02\u01C6\u01C0\x03\x02\x02\x02\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01C6" +
		"\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CE\x03\x02\x02\x02" +
		"\u01CA\u01C8\x03\x02\x02\x02\u01CB\u01CD\x05\u0124\x93\x02\u01CC\u01CB" +
		"\x03\x02\x02\x02\u01CD\u01D0\x03\x02\x02\x02\u01CE\u01CC\x03\x02\x02\x02" +
		"\u01CE\u01CF\x03\x02\x02\x02\u01CF\x17\x03\x02\x02\x02\u01D0\u01CE\x03" +
		"\x02\x02\x02\u01D1\u01D8\x05L\'\x02\u01D2\u01D8\x05\x8CG\x02\u01D3\u01D8" +
		"\x05\x8EH\x02\u01D4\u01D8\x05\x90I\x02\u01D5\u01D8\x05\xBC_\x02\u01D6" +
		"\u01D8\x05\x14\v\x02\u01D7\u01D1\x03\x02\x02\x02\u01D7\u01D2\x03\x02\x02" +
		"\x02\u01D7\u01D3\x03\x02\x02\x02\u01D7\u01D4\x03\x02\x02\x02\u01D7\u01D5" +
		"\x03\x02\x02\x02\u01D7\u01D6\x03\x02\x02\x02\u01D8\x19\x03\x02\x02\x02" +
		"\u01D9\u01DA\x07\x0F\x02\x02\u01DA\u01DB\x07\xDD\x02\x02\u01DB\u01DD\x05" +
		"\xE8u\x02\u01DC\u01DE\x07\xDD\x02\x02\u01DD\u01DC\x03\x02\x02\x02\u01DD" +
		"\u01DE\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E1\x07\xBF" +
		"\x02\x02\u01E0\u01E2\x07\xDD\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E1" +
		"\u01E2\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01EE\x05\u0116" +
		"\x8C\x02\u01E4\u01E6\x07\xDD\x02\x02\u01E5\u01E4\x03\x02\x02\x02\u01E5" +
		"\u01E6\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01E9\x07\x03" +
		"\x02\x02\u01E8\u01EA\x07\xDD\x02\x02\u01E9\u01E8\x03\x02\x02\x02\u01E9" +
		"\u01EA\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01ED\x05\u0116" +
		"\x8C\x02\u01EC\u01E5\x03\x02\x02\x02\u01ED\u01F0\x03\x02\x02\x02\u01EE" +
		"\u01EC\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\x1B\x03\x02\x02" +
		"\x02\u01F0\u01EE\x03\x02\x02\x02\u01F1\u01F7\x05\x1E\x10\x02\u01F2\u01F3" +
		"\x05\u0126\x94\x02\u01F3\u01F4\x05\x1E\x10\x02\u01F4\u01F6\x03\x02\x02" +
		"\x02\u01F5\u01F2\x03\x02\x02\x02\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5" +
		"\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01FA\x03\x02\x02\x02" +
		"\u01F9\u01F7\x03\x02\x02\x02\u01FA\u01FB\x05\u0126\x94\x02\u01FB\x1D\x03" +
		"\x02\x02\x02\u01FC\u0240\x05\u0114\x8B\x02\u01FD\u0240\x05 \x11\x02\u01FE" +
		"\u0240\x05\x1A\x0E\x02\u01FF\u0240\x05\"\x12\x02\u0200\u0240\x05$\x13" +
		"\x02\u0201\u0240\x05&\x14\x02\u0202\u0240\x05(\x15\x02\u0203\u0240\x05" +
		"*\x16\x02\u0204\u0240\x05.\x18\x02\u0205\u0240\x054\x1B\x02\u0206\u0240" +
		"\x052\x1A\x02\u0207\u0240\x056\x1C\x02\u0208\u0240\x058\x1D\x02\u0209" +
		"\u0240\x05> \x02\u020A\u0240\x05@!\x02\u020B\u0240\x05D#\x02\u020C\u0240" +
		"\x05\xDCo\x02\u020D\u0240\x05F$\x02\u020E\u0240\x05H%\x02\u020F\u0240" +
		"\x05J&\x02\u0210\u0240\x05N(\x02\u0211\u0240\x05P)\x02\u0212\u0240\x05" +
		"R*\x02\u0213\u0240\x05T+\x02\u0214\u0240\x05^0\x02\u0215\u0240\x05`1\x02" +
		"\u0216\u0240\x05b2\x02\u0217\u0240\x05d3\x02\u0218\u0240\x05f4\x02\u0219" +
		"\u0240\x05h5\x02\u021A\u0240\x05j6\x02\u021B\u0240\x05l7\x02\u021C\u0240" +
		"\x05\x14\v\x02\u021D\u0240\x05x=\x02\u021E\u0240\x05z>\x02\u021F\u0240" +
		"\x05|?\x02\u0220\u0240\x05~@\x02\u0221\u0240\x05\x80A\x02\u0222\u0240" +
		"\x05\x82B\x02\u0223\u0240\x05\x84C\x02\u0224\u0240\x05\x8AF\x02\u0225" +
		"\u0240\x05\x92J\x02\u0226\u0240\x05\x94K\x02\u0227\u0240\x05\x96L\x02" +
		"\u0228\u0240\x05\x98M\x02\u0229\u0240\x05\x9CO\x02\u022A\u0240\x05\x9E" +
		"P\x02\u022B\u0240\x05\xA0Q\x02\u022C\u0240\x05\xA2R\x02\u022D\u0240\x05" +
		"\xA4S\x02\u022E\u0240\x05\xA6T\x02\u022F\u0240\x05\xA8U\x02\u0230\u0240" +
		"\x05\xAAV\x02\u0231\u0240\x05\xACW\x02\u0232\u0240\x05\xB4[\x02\u0233" +
		"\u0240\x05\xB6\\\x02\u0234\u0240\x05\xB8]\x02\u0235\u0240\x05\xBA^\x02" +
		"\u0236\u0240\x05\xBE`\x02\u0237\u0240\x05\xC6d\x02\u0238\u0240\x05\xC8" +
		"e\x02\u0239\u0240\x05\xCCg\x02\u023A\u0240\x05\xD2j\x02\u023B\u0240\x05" +
		"\xD4k\x02\u023C\u0240\x05\xD6l\x02\u023D\u0240\x05\xD8m\x02\u023E\u0240" +
		"\x05\xE2r\x02\u023F\u01FC\x03\x02\x02\x02\u023F\u01FD\x03\x02\x02\x02" +
		"\u023F\u01FE\x03\x02\x02\x02\u023F\u01FF\x03\x02\x02\x02\u023F\u0200\x03" +
		"\x02\x02\x02\u023F\u0201\x03\x02\x02\x02\u023F\u0202\x03\x02\x02\x02\u023F" +
		"\u0203\x03\x02\x02\x02\u023F\u0204\x03\x02\x02\x02\u023F\u0205\x03\x02" +
		"\x02\x02\u023F\u0206\x03\x02\x02\x02\u023F\u0207\x03\x02\x02\x02\u023F" +
		"\u0208\x03\x02\x02\x02\u023F\u0209\x03\x02\x02\x02\u023F\u020A\x03\x02" +
		"\x02\x02\u023F\u020B\x03\x02\x02\x02\u023F\u020C\x03\x02\x02\x02\u023F" +
		"\u020D\x03\x02\x02\x02\u023F\u020E\x03\x02\x02\x02\u023F\u020F\x03\x02" +
		"\x02\x02\u023F\u0210\x03\x02\x02\x02\u023F\u0211\x03\x02\x02\x02\u023F" +
		"\u0212\x03\x02\x02\x02\u023F\u0213\x03\x02\x02\x02\u023F\u0214\x03\x02" +
		"\x02\x02\u023F\u0215\x03\x02\x02\x02\u023F\u0216\x03\x02\x02\x02\u023F" +
		"\u0217\x03\x02\x02\x02\u023F\u0218\x03\x02\x02\x02\u023F\u0219\x03\x02" +
		"\x02\x02\u023F\u021A\x03\x02\x02\x02\u023F\u021B\x03\x02\x02\x02\u023F" +
		"\u021C\x03\x02\x02\x02\u023F\u021D\x03\x02\x02\x02\u023F\u021E\x03\x02" +
		"\x02\x02\u023F\u021F\x03\x02\x02\x02\u023F\u0220\x03\x02\x02\x02\u023F" +
		"\u0221\x03\x02\x02\x02\u023F\u0222\x03\x02\x02\x02\u023F\u0223\x03\x02" +
		"\x02\x02\u023F\u0224\x03\x02\x02\x02\u023F\u0225\x03\x02\x02\x02\u023F" +
		"\u0226\x03\x02\x02\x02\u023F\u0227\x03\x02\x02\x02\u023F\u0228\x03\x02" +
		"\x02\x02\u023F\u0229\x03\x02\x02\x02\u023F\u022A\x03\x02\x02\x02\u023F" +
		"\u022B\x03\x02\x02\x02\u023F\u022C\x03\x02\x02\x02\u023F\u022D\x03\x02" +
		"\x02\x02\u023F\u022E\x03\x02\x02\x02\u023F\u022F\x03\x02\x02\x02\u023F" +
		"\u0230\x03\x02\x02\x02\u023F\u0231\x03\x02\x02\x02\u023F\u0232\x03\x02" +
		"\x02\x02\u023F\u0233\x03\x02\x02\x02\u023F\u0234\x03\x02\x02\x02\u023F" +
		"\u0235\x03\x02\x02\x02\u023F\u0236\x03\x02\x02\x02\u023F\u0237\x03\x02" +
		"\x02\x02\u023F\u0238\x03\x02\x02\x02\u023F\u0239\x03\x02\x02\x02\u023F" +
		"\u023A\x03\x02\x02\x02\u023F\u023B\x03\x02\x02\x02\u023F\u023C\x03\x02" +
		"\x02\x02\u023F\u023D\x03\x02\x02\x02\u023F\u023E\x03\x02\x02\x02\u0240" +
		"\x1F\x03\x02\x02\x02\u0241\u0242\x07\x10\x02\x02\u0242\u0243\x07\xDD\x02" +
		"\x02\u0243\u024C\x05\xCAf\x02\u0244\u0246\x07\xDD\x02\x02\u0245\u0244" +
		"\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02" +
		"\u0247\u0249\x07\x03\x02\x02\u0248\u024A\x07\xDD\x02\x02\u0249\u0248\x03" +
		"\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B" +
		"\u024D\x05\xCAf\x02\u024C\u0245\x03\x02\x02\x02\u024C\u024D\x03\x02\x02" +
		"\x02\u024D!\x03\x02\x02\x02\u024E\u024F\x07\x14\x02\x02\u024F#\x03\x02" +
		"\x02\x02\u0250\u0251\x07\x1C\x02\x02\u0251\u0252\x07\xDD\x02\x02\u0252" +
		"\u0253\x05\xCAf\x02\u0253%\x03\x02\x02\x02\u0254\u0255\x07\x1D\x02\x02" +
		"\u0255\u0256\x07\xDD\x02\x02\u0256\u0257\x05\xCAf\x02\u0257\'\x03\x02" +
		"\x02\x02\u0258\u0268\x07\x1F\x02\x02\u0259\u025A\x07\xDD\x02\x02\u025A" +
		"\u0265\x05\xDAn\x02\u025B\u025D\x07\xDD\x02\x02\u025C\u025B\x03\x02\x02" +
		"\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\u0260" +
		"\x07\x03\x02\x02\u025F\u0261\x07\xDD\x02\x02\u0260\u025F\x03\x02\x02\x02" +
		"\u0260\u0261\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262\u0264\x05" +
		"\xDAn\x02\u0263\u025C\x03\x02\x02\x02\u0264\u0267\x03\x02\x02\x02\u0265" +
		"\u0263\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266\u0269\x03\x02" +
		"\x02\x02\u0267\u0265\x03\x02\x02\x02\u0268\u0259\x03\x02\x02\x02\u0268" +
		"\u0269\x03\x02\x02\x02\u0269)\x03\x02\x02\x02\u026A\u026B\x05\u011C\x8F" +
		"\x02\u026B\u026C\x07\xDD\x02\x02\u026C\u026E\x03\x02\x02\x02\u026D\u026A" +
		"\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02" +
		"\u026F\u0270\x07!\x02\x02\u0270\u0271\x07\xDD\x02\x02\u0271\u027C\x05" +
		",\x17\x02\u0272\u0274\x07\xDD\x02\x02\u0273\u0272\x03\x02\x02\x02\u0273" +
		"\u0274\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0277\x07\x03" +
		"\x02\x02\u0276\u0278\x07\xDD\x02\x02\u0277\u0276\x03\x02\x02\x02\u0277" +
		"\u0278\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279\u027B\x05,\x17" +
		"\x02\u027A\u0273\x03\x02\x02\x02\u027B\u027E\x03\x02\x02\x02\u027C\u027A" +
		"\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D+\x03\x02\x02\x02\u027E" +
		"\u027C\x03\x02\x02\x02\u027F\u0281\x05\u0104\x83\x02\u0280\u0282\x05\u011A" +
		"\x8E\x02\u0281\u0280\x03\x02\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282" +
		"\u0285\x03\x02\x02\x02\u0283\u0284\x07\xDD\x02\x02\u0284\u0286\x05\u0106" +
		"\x84\x02\u0285";
	private static readonly _serializedATNSegment2: string =
		"\u0283\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0288\x03\x02" +
		"\x02\x02\u0287\u0289\x07\xDD\x02\x02\u0288\u0287\x03\x02\x02\x02\u0288" +
		"\u0289\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u028C\x07\xBF" +
		"\x02\x02\u028B\u028D\x07\xDD\x02\x02\u028C\u028B\x03\x02\x02\x02\u028C" +
		"\u028D\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u028F\x05\xCA" +
		"f\x02\u028F-\x03\x02\x02\x02\u0290\u0292\x07#\x02\x02\u0291\u0293\x07" +
		"\xDD\x02\x02\u0292\u0291\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293" +
		"\u0294\x03\x02\x02\x02\u0294\u0296\x07\xBF\x02\x02\u0295\u0297\x07\xDD" +
		"\x02\x02\u0296\u0295\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297" +
		"\u0298\x03\x02\x02\x02\u0298\u0299\x05\xCAf\x02\u0299/\x03\x02\x02\x02" +
		"\u029A\u029B\x05\u011C\x8F\x02\u029B\u029C\x07\xDD\x02\x02\u029C\u029E" +
		"\x03\x02\x02\x02\u029D\u029A\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02" +
		"\u029E\u029F\x03\x02\x02\x02\u029F\u02A0\x07$\x02\x02\u02A0\u02A3\x07" +
		"\xDD\x02\x02\u02A1\u02A2\x07\x8A\x02\x02\u02A2\u02A4\x07\xDD\x02\x02\u02A3" +
		"\u02A1\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A4\u02AA\x03\x02" +
		"\x02\x02\u02A5\u02A7\x07O\x02\x02\u02A6\u02A8\x05\u011A\x8E\x02\u02A7" +
		"\u02A6\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02AB\x03\x02" +
		"\x02\x02\u02A9\u02AB\x07\xA7\x02\x02\u02AA\u02A5\x03\x02\x02\x02\u02AA" +
		"\u02A9\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02AD\x07\xDD" +
		"\x02\x02\u02AD\u02AF\x05\u0104\x83\x02\u02AE\u02B0\x05\u011A\x8E\x02\u02AF" +
		"\u02AE\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B1\x03\x02" +
		"\x02\x02\u02B1\u02B2\x07\xDD\x02\x02\u02B2\u02B3\x07b\x02\x02\u02B3\u02B4" +
		"\x07\xDD\x02\x02\u02B4\u02B9\x07\xCF\x02\x02\u02B5\u02B6\x07\xDD\x02\x02" +
		"\u02B6\u02B7\x07\r\x02\x02\u02B7\u02B8\x07\xDD\x02\x02\u02B8\u02BA\x07" +
		"\xCF\x02\x02\u02B9\u02B5\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA" +
		"\u02BF\x03\x02\x02\x02\u02BB\u02BD\x07\xDD\x02\x02\u02BC\u02BB\x03\x02" +
		"\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE" +
		"\u02C0\x05\xFA~\x02\u02BF\u02BC\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02" +
		"\x02\u02C0\u02C3\x03\x02\x02\x02\u02C1\u02C2\x07\xDD\x02\x02\u02C2\u02C4" +
		"\x05\u0106\x84\x02\u02C3\u02C1\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02" +
		"\x02\u02C41\x03\x02\x02\x02\u02C5\u02C6\t\x03\x02\x02\u02C6\u02C7\x07" +
		"\xDD\x02\x02\u02C7\u02D2\x05\u0112\x8A\x02\u02C8\u02CA\x07\xDD\x02\x02" +
		"\u02C9\u02C8\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA\u02CB\x03" +
		"\x02\x02\x02\u02CB\u02CD\x07\x03\x02\x02\u02CC\u02CE\x07\xDD\x02\x02\u02CD" +
		"\u02CC\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02CF\x03\x02" +
		"\x02\x02\u02CF\u02D1\x05\u0112\x8A\x02\u02D0\u02C9\x03\x02\x02\x02\u02D1" +
		"\u02D4\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D2\u02D3\x03\x02" +
		"\x02\x02\u02D33\x03\x02\x02\x02\u02D4\u02D2\x03\x02\x02\x02\u02D5\u02D6" +
		"\x071\x02\x02\u02D6\u02D7\x07\xDD\x02\x02\u02D7\u02D9\x05\xCAf\x02\u02D8" +
		"\u02DA\x07\xDD\x02\x02\u02D9\u02D8\x03\x02\x02\x02\u02D9\u02DA\x03\x02" +
		"\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02DD\x07\x03\x02\x02\u02DC" +
		"\u02DE\x07\xDD\x02\x02\u02DD\u02DC\x03\x02\x02\x02\u02DD\u02DE\x03\x02" +
		"\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF\u02E8\x05\xCAf\x02\u02E0\u02E2" +
		"\x07\xDD\x02\x02\u02E1\u02E0\x03\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02" +
		"\u02E2\u02E3\x03\x02\x02\x02\u02E3\u02E5\x07\x03\x02\x02\u02E4\u02E6\x07" +
		"\xDD\x02\x02\u02E5\u02E4\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6" +
		"\u02E7\x03\x02\x02\x02\u02E7\u02E9\x05\xCAf\x02\u02E8\u02E1\x03\x02\x02" +
		"\x02\u02E8\u02E9\x03\x02\x02\x02\u02E95\x03\x02\x02\x02\u02EA\u02EB\x07" +
		"3\x02\x02\u02EB\u02ED\x05\u0126\x94\x02\u02EC\u02EE\x05\x1C\x0F\x02\u02ED" +
		"\u02EC\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02\x02\u02EE\u02EF\x03\x02" +
		"\x02\x02\u02EF\u02F0\x07_\x02\x02\u02F0\u0306\x03\x02\x02\x02\u02F1\u02F2" +
		"\x073\x02\x02\u02F2\u02F3\x07\xDD\x02\x02\u02F3\u02F4\t\x04\x02\x02\u02F4" +
		"\u02F5\x07\xDD\x02\x02\u02F5\u02F6\x05\xCAf\x02\u02F6\u02F8\x05\u0126" +
		"\x94\x02\u02F7\u02F9\x05\x1C\x0F\x02\u02F8\u02F7\x03\x02\x02\x02\u02F8" +
		"\u02F9\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA\u02FB\x07_\x02" +
		"\x02\u02FB\u0306\x03\x02\x02\x02\u02FC\u02FD\x073\x02\x02\u02FD\u02FE" +
		"\x05\u0126\x94\x02\u02FE\u02FF\x05\x1C\x0F\x02\u02FF\u0300\x07_\x02\x02" +
		"\u0300\u0301\x07\xDD\x02\x02\u0301\u0302\t\x04\x02\x02\u0302\u0303\x07" +
		"\xDD\x02\x02\u0303\u0304\x05\xCAf\x02\u0304\u0306\x03\x02\x02\x02\u0305" +
		"\u02EA\x03\x02\x02\x02\u0305\u02F1\x03\x02\x02\x02\u0305\u02FC\x03\x02" +
		"\x02\x02\u03067\x03\x02\x02\x02\u0307\u0308\x07@\x02\x02\u03089\x03\x02" +
		"\x02\x02\u0309\u030A\x05\u011C\x8F\x02\u030A\u030B\x07\xDD\x02\x02\u030B" +
		"\u030D\x03\x02\x02\x02\u030C\u0309\x03\x02\x02\x02\u030C\u030D\x03\x02" +
		"\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E\u030F\x07A\x02\x02\u030F\u0310" +
		"\x07\xDD\x02\x02\u0310\u0311\x05\u0104\x83\x02\u0311\u0315\x05\u0126\x94" +
		"\x02\u0312\u0314\x05<\x1F\x02\u0313\u0312\x03\x02\x02\x02\u0314\u0317" +
		"\x03\x02\x02\x02\u0315\u0313\x03\x02\x02\x02\u0315\u0316\x03\x02\x02\x02" +
		"\u0316\u0318\x03\x02\x02\x02\u0317\u0315\x03\x02\x02\x02\u0318\u0319\x07" +
		"8\x02\x02\u0319;\x03\x02\x02\x02\u031A\u0323\x05\u0104\x83\x02\u031B\u031D" +
		"\x07\xDD\x02\x02\u031C\u031B\x03\x02\x02\x02\u031C\u031D\x03\x02\x02\x02" +
		"\u031D\u031E\x03\x02\x02\x02\u031E\u0320\x07\xBF\x02\x02\u031F\u0321\x07" +
		"\xDD\x02\x02\u0320\u031F\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321" +
		"\u0322\x03\x02\x02\x02\u0322\u0324\x05\xCAf\x02\u0323\u031C\x03\x02\x02" +
		"\x02\u0323\u0324\x03\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u0326" +
		"\x05\u0126\x94\x02\u0326=\x03\x02\x02\x02\u0327\u0328\x07C\x02\x02\u0328" +
		"\u0329\x07\xDD\x02\x02\u0329\u0331\x05\xCAf\x02\u032A\u032C\x07\x03\x02" +
		"\x02\u032B\u032D\x07\xDD\x02\x02\u032C\u032B\x03\x02\x02\x02\u032C\u032D" +
		"\x03\x02\x02\x02\u032D\u032E\x03\x02\x02\x02\u032E\u0330\x05\xCAf\x02" +
		"\u032F\u032A\x03\x02\x02\x02\u0330\u0333\x03\x02\x02\x02\u0331\u0332\x03" +
		"\x02\x02\x02\u0331\u032F\x03\x02\x02\x02\u0332?\x03\x02\x02\x02\u0333" +
		"\u0331\x03\x02\x02\x02\u0334\u0335\x07D\x02\x02\u0335\u0336\x07\xDD\x02" +
		"\x02\u0336\u0337\x05\xCAf\x02\u0337A\x03\x02\x02\x02\u0338\u0339\x05\u011C" +
		"\x8F\x02\u0339\u033A\x07\xDD\x02\x02\u033A\u033C\x03\x02\x02\x02\u033B" +
		"\u0338\x03\x02\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C\u033D\x03\x02" +
		"\x02\x02\u033D\u033E\x07E\x02\x02\u033E\u033F\x07\xDD\x02\x02\u033F\u0341" +
		"\x05\u0104\x83\x02\u0340\u0342\x07\xDD\x02\x02\u0341\u0340\x03\x02\x02" +
		"\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343\u0344" +
		"\x05\xFA~\x02\u0344C\x03\x02\x02\x02\u0345\u0346\t\x05\x02\x02\u0346E" +
		"\x03\x02\x02\x02\u0347\u0348\x07L\x02\x02\u0348\u0349\x07\xDD\x02\x02" +
		"\u0349\u034B\x05\xCAf\x02\u034A\u034C\x07\xDD\x02\x02\u034B\u034A\x03" +
		"\x02\x02\x02\u034B\u034C\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D" +
		"\u034F\x07\x03\x02\x02\u034E\u0350\x07\xDD\x02\x02\u034F\u034E\x03\x02" +
		"\x02\x02\u034F\u0350\x03\x02\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351" +
		"\u0352\x05\xCAf\x02\u0352G\x03\x02\x02\x02\u0353\u0354\x07N\x02\x02\u0354" +
		"\u0355\x07\xDD\x02\x02\u0355\u0356\x075\x02\x02\u0356\u0357\x07\xDD\x02" +
		"\x02\u0357\u0359\x05\u0104\x83\x02\u0358\u035A\x05\u011A\x8E\x02\u0359" +
		"\u0358\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A\u035B\x03\x02" +
		"\x02\x02\u035B\u035C\x07\xDD\x02\x02\u035C\u035D\x07W\x02\x02\u035D\u035E" +
		"\x07\xDD\x02\x02\u035E\u035F\x05\xCAf\x02\u035F\u0361\x05\u0126\x94\x02" +
		"\u0360\u0362\x05\x1C\x0F\x02\u0361\u0360\x03\x02\x02\x02\u0361\u0362\x03" +
		"\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0366\x07s\x02\x02\u0364" +
		"\u0365\x07\xDD\x02\x02\u0365\u0367\x05\u0104\x83\x02\u0366\u0364\x03\x02" +
		"\x02\x02\u0366\u0367\x03\x02\x02\x02\u0367I\x03\x02\x02\x02\u0368\u0369" +
		"\x07N\x02\x02\u0369\u036A\x07\xDD\x02\x02\u036A\u036C\x05\u0104\x83\x02" +
		"\u036B\u036D\x05\u011A\x8E\x02\u036C\u036B\x03\x02\x02\x02\u036C\u036D" +
		"\x03\x02\x02\x02\u036D\u0370\x03\x02\x02\x02\u036E\u036F\x07\xDD\x02\x02" +
		"\u036F\u0371\x05\u0106\x84\x02\u0370\u036E\x03\x02\x02\x02\u0370\u0371" +
		"\x03\x02\x02\x02\u0371\u0373\x03\x02\x02\x02\u0372\u0374\x07\xDD\x02\x02" +
		"\u0373\u0372\x03\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374\u0375\x03" +
		"\x02\x02\x02\u0375\u0377\x07\xBF\x02\x02\u0376\u0378\x07\xDD\x02\x02\u0377" +
		"\u0376\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378\u0379\x03\x02" +
		"\x02\x02\u0379\u037A\x05\xCAf\x02\u037A\u037B\x07\xDD\x02\x02\u037B\u037C" +
		"\x07\xAC\x02\x02\u037C\u037D\x07\xDD\x02\x02\u037D\u0382\x05\xCAf\x02" +
		"\u037E\u037F\x07\xDD\x02\x02\u037F\u0380\x07\xA4\x02\x02\u0380\u0381\x07" +
		"\xDD\x02\x02\u0381\u0383\x05\xCAf\x02\u0382\u037E\x03\x02\x02\x02\u0382" +
		"\u0383\x03\x02\x02\x02\u0383\u0384\x03\x02\x02\x02\u0384\u0386\x05\u0126" +
		"\x94\x02\u0385\u0387\x05\x1C\x0F\x02\u0386\u0385\x03\x02\x02\x02\u0386" +
		"\u0387\x03\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388\u038B\x07s\x02" +
		"\x02\u0389\u038A\x07\xDD\x02\x02\u038A\u038C\x05\u0104\x83\x02\u038B\u0389" +
		"\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038CK\x03\x02\x02\x02\u038D" +
		"\u038E\x05\u011C\x8F\x02\u038E\u038F\x07\xDD\x02\x02\u038F\u0391\x03\x02" +
		"\x02\x02\u0390\u038D\x03\x02\x02\x02\u0390\u0391\x03\x02\x02\x02\u0391" +
		"\u0394\x03\x02\x02\x02\u0392\u0393\x07\xA3\x02\x02\u0393\u0395\x07\xDD" +
		"\x02\x02\u0394\u0392\x03\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395" +
		"\u0396\x03\x02\x02\x02\u0396\u0398\x07O\x02\x02\u0397\u0399\x07\xDD\x02" +
		"\x02\u0398\u0397\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399\u039A" +
		"\x03\x02\x02\x02\u039A\u039C\x05\u0104\x83\x02\u039B\u039D\x05\u011A\x8E" +
		"\x02\u039C\u039B\x03\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\u03A2" +
		"\x03\x02\x02\x02\u039E\u03A0\x07\xDD\x02\x02\u039F\u039E\x03\x02\x02\x02" +
		"\u039F\u03A0\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03A3\x05" +
		"\xFA~\x02\u03A2\u039F\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3" +
		"\u03A8\x03\x02\x02\x02\u03A4\u03A6\x07\xDD\x02\x02\u03A5\u03A4\x03\x02" +
		"\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6\u03A7\x03\x02\x02\x02\u03A7" +
		"\u03A9\x05\u0106\x84\x02\u03A8\u03A5\x03\x02\x02\x02\u03A8\u03A9\x03\x02" +
		"\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AC\x05\u0126\x94\x02\u03AB" +
		"\u03AD\x05\x1C\x0F\x02\u03AC\u03AB\x03\x02\x02\x02\u03AC\u03AD\x03\x02" +
		"\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03AF\x079\x02\x02\u03AFM\x03" +
		"\x02\x02\x02\u03B0\u03B1\x07P\x02\x02\u03B1\u03B2\x07\xDD\x02\x02\u03B2" +
		"\u03B4\x05\xDAn\x02\u03B3\u03B5\x07\xDD\x02\x02\u03B4\u03B3\x03\x02\x02" +
		"\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5\u03B6\x03\x02\x02\x02\u03B6\u03B8" +
		"\x07\x03\x02\x02\u03B7\u03B9\x07\xDD\x02\x02\u03B8\u03B7\x03\x02\x02\x02" +
		"\u03B8\u03B9\x03\x02\x02\x02\u03B9\u03BB\x03\x02\x02\x02\u03BA\u03BC\x05" +
		"\xCAf\x02\u03BB\u03BA\x03\x02\x02\x02\u03BB\u03BC\x03\x02\x02\x02\u03BC" +
		"\u03BE\x03\x02\x02\x02\u03BD\u03BF\x07\xDD\x02\x02\u03BE\u03BD\x03\x02" +
		"\x02\x02\u03BE\u03BF\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0" +
		"\u03C2\x07\x03\x02\x02\u03C1\u03C3\x07\xDD\x02\x02\u03C2\u03C1\x03\x02" +
		"\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4" +
		"\u03C5\x05\xCAf\x02\u03C5O\x03\x02\x02\x02\u03C6\u03C7\x07R\x02\x02\u03C7" +
		"\u03C8\x07\xDD\x02\x02\u03C8\u03C9\x05\xCAf\x02\u03C9Q\x03\x02\x02\x02" +
		"\u03CA\u03CB\x07S\x02\x02\u03CB\u03CC\x07\xDD\x02\x02\u03CC\u03CD\x05" +
		"\xCAf\x02\u03CDS\x03\x02\x02\x02\u03CE\u03CF\x07T\x02\x02\u03CF\u03D0" +
		"\x07\xDD\x02\x02\u03D0\u03D1\x05X-\x02\u03D1\u03D2\x07\xDD\x02\x02\u03D2" +
		"\u03D3\x07\xAA\x02\x02\u03D3\u03D4\x07\xDD\x02\x02\u03D4\u03D9\x05\x1E" +
		"\x10\x02\u03D5\u03D6\x07\xDD\x02\x02\u03D6\u03D7\x076\x02\x02\u03D7\u03D8" +
		"\x07\xDD\x02\x02\u03D8\u03DA\x05\x1E\x10\x02\u03D9\u03D5\x03\x02\x02\x02" +
		"\u03D9\u03DA\x03\x02\x02\x02\u03DA\u03E8\x03\x02\x02\x02\u03DB\u03DF\x05" +
		"V,\x02\u03DC\u03DE\x05Z.\x02\u03DD\u03DC\x03\x02\x02\x02\u03DE\u03E1\x03" +
		"\x02\x02\x02\u03DF\u03DD\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0" +
		"\u03E3\x03\x02\x02\x02\u03E1\u03DF\x03\x02\x02\x02\u03E2\u03E4\x05\\/" +
		"\x02\u03E3\u03E2\x03\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E5" +
		"\x03\x02\x02\x02\u03E5\u03E6\x07:\x02\x02\u03E6\u03E8\x03\x02\x02\x02" +
		"\u03E7\u03CE\x03\x02\x02\x02\u03E7\u03DB\x03\x02\x02\x02\u03E8U\x03\x02" +
		"\x02\x02\u03E9\u03EA\x07T\x02\x02\u03EA\u03EB\x07\xDD\x02\x02\u03EB\u03EC" +
		"\x05X-\x02\u03EC\u03ED\x07\xDD\x02\x02\u03ED\u03EE\x07\xAA\x02\x02\u03EE" +
		"\u03F0\x05\u0126\x94\x02\u03EF\u03F1\x05\x1C\x0F\x02\u03F0\u03EF\x03\x02" +
		"\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1W\x03\x02\x02\x02\u03F2\u03F3" +
		"\x05\xCAf\x02\u03F3Y\x03\x02\x02\x02\u03F4\u03F5\x077\x02\x02\u03F5\u03F6" +
		"\x07\xDD\x02\x02\u03F6\u03F7\x05X-\x02\u03F7\u03F8\x07\xDD\x02\x02\u03F8" +
		"\u03F9\x07\xAA\x02\x02\u03F9\u03FB\x05\u0126\x94\x02\u03FA\u03FC\x05\x1C" +
		"\x0F\x02\u03FB\u03FA\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02\x02\u03FC" +
		"[\x03\x02\x02\x02\u03FD\u03FE\x076\x02\x02\u03FE\u0400\x05\u0126\x94\x02" +
		"\u03FF\u0401\x05\x1C\x0F\x02\u0400\u03FF\x03\x02\x02\x02\u0400\u0401\x03" +
		"\x02\x02\x02\u0401]\x03\x02\x02\x02\u0402\u0403\x07V\x02\x02\u0403\u0404" +
		"\x07\xDD\x02\x02\u0404\u0405\x05\u0104\x83\x02\u0405_\x03\x02\x02\x02" +
		"\u0406\u0407\x07X\x02\x02\u0407\u0408\x07\xDD\x02\x02\u0408\u0411\x05" +
		"\xDAn\x02\u0409\u040B\x07\xDD\x02\x02\u040A\u0409\x03\x02\x02\x02\u040A" +
		"\u040B\x03\x02\x02\x02\u040B\u040C\x03\x02\x02\x02\u040C\u040E\x07\x03" +
		"\x02\x02\u040D\u040F\x07\xDD\x02\x02\u040E\u040D\x03\x02\x02\x02\u040E" +
		"\u040F\x03\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\u0412\x05\xCA" +
		"f\x02\u0411\u040A\x03\x02\x02\x02\u0412\u0413\x03\x02\x02\x02\u0413\u0411" +
		"\x03\x02\x02\x02\u0413\u0414\x03\x02\x02\x02\u0414a\x03\x02\x02\x02\u0415" +
		"\u0416\x07[\x02\x02\u0416\u0417\x07\xDD\x02\x02\u0417\u0418\x05\xCAf\x02" +
		"\u0418c\x03\x02\x02\x02\u0419\u041A\x07a\x02\x02\u041A\u041C\x07\xDD\x02" +
		"\x02\u041B\u0419\x03\x02\x02\x02\u041B\u041C\x03\x02\x02\x02\u041C\u041D" +
		"\x03\x02\x02\x02\u041D\u041F\x05\xE8u\x02\u041E\u0420\x07\xDD\x02\x02" +
		"\u041F\u041E\x03\x02\x02\x02\u041F\u0420\x03\x02\x02\x02\u0420\u0421\x03" +
		"\x02\x02\x02\u0421\u0423\t\x06\x02\x02\u0422\u0424\x07\xDD\x02\x02\u0423" +
		"\u0422\x03\x02\x02\x02\u0423\u0424\x03\x02\x02\x02\u0424\u0425\x03\x02" +
		"\x02\x02\u0425\u0426\x05\xCAf\x02\u0426e\x03\x02\x02\x02\u0427\u0428\x07" +
		"d\x02\x02\u0428\u0429\x07\xDD\x02\x02\u0429\u042B\x05\xDAn\x02\u042A\u042C" +
		"\x07\xDD\x02\x02\u042B\u042A\x03\x02\x02\x02\u042B\u042C\x03\x02\x02\x02" +
		"\u042C\u042D\x03\x02\x02\x02\u042D\u042F\x07\x03\x02\x02\u042E\u0430\x07" +
		"\xDD\x02\x02\u042F\u042E\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430" +
		"\u0431\x03\x02\x02\x02\u0431\u0432\x05\xCAf\x02\u0432g\x03\x02\x02\x02" +
		"\u0433\u0434\x07\\\x02\x02\u0434\u0435\x07\xDD\x02\x02\u0435\u0436\x05" +
		"\xCAf\x02\u0436i\x03\x02\x02\x02\u0437\u0438\x07]\x02\x02\u0438\u0439" +
		"\x07\xDD\x02\x02\u0439\u0448\x05\xCAf\x02\u043A\u043C\x07\xDD\x02\x02" +
		"\u043B\u043A\x03\x02\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C\u043D\x03" +
		"\x02\x02\x02\u043D\u043F\x07\x03\x02\x02\u043E\u0440\x07\xDD\x02\x02\u043F" +
		"\u043E\x03\x02\x02\x02\u043F\u0440\x03\x02\x02\x02\u0440\u0441\x03\x02" +
		"\x02\x02\u0441\u0446\x05\xCAf\x02\u0442\u0443\x07\xDD\x02\x02\u0443\u0444" +
		"\x07\xAC\x02\x02\u0444\u0445\x07\xDD\x02\x02\u0445\u0447\x05\xCAf\x02" +
		"\u0446\u0442\x03\x02\x02\x02\u0446\u0447\x03\x02\x02\x02\u0447\u0449\x03" +
		"\x02\x02\x02\u0448\u043B\x03\x02\x02\x02\u0448\u0449\x03\x02\x02\x02\u0449" +
		"k\x03\x02\x02\x02\u044A\u044B\x07h\x02\x02\u044B\u044C\x07\xDD\x02\x02" +
		"\u044C\u044E\x05\xE8u\x02\u044D\u044F\x07\xDD\x02\x02\u044E\u044D\x03" +
		"\x02\x02\x02\u044E\u044F\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450" +
		"\u0452\x07\xBF\x02\x02\u0451\u0453\x07\xDD\x02\x02\u0452\u0451\x03\x02" +
		"\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\u0454\x03\x02\x02\x02\u0454" +
		"\u0455\x05\xCAf\x02\u0455m\x03\x02\x02\x02\u0456\u0458\x07i\x02\x02\u0457" +
		"\u0459\x07\xDD\x02\x02\u0458\u0457\x03\x02\x02\x02\u0458\u0459\x03\x02" +
		"\x02\x02\u0459\u045A\x03\x02\x02\x02\u045A\u045C\x05\u0104\x83\x02\u045B" +
		"\u045D\x07\xDD\x02\x02\u045C\u045B\x03\x02\x02\x02\u045C\u045D\x03\x02" +
		"\x02\x02\u045D\u045E\x03\x02\x02\x02\u045E\u0460\x07\xBF\x02\x02\u045F" +
		"\u0461\x07\xDD\x02\x02\u0460\u045F\x03\x02\x02\x02\u0460\u0461\x03\x02" +
		"\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462\u0463\x05\xCAf\x02\u0463o\x03" +
		"\x02\x02\x02\u0464\u0468\x05r:\x02\u0465\u0467\x05t;\x02\u0466\u0465\x03" +
		"\x02\x02\x02\u0467\u046A\x03\x02\x02\x02\u0468\u0466\x03\x02\x02\x02\u0468" +
		"\u0469\x03\x02\x02\x02\u0469\u046C\x03\x02\x02\x02\u046A\u0468\x03\x02" +
		"\x02\x02\u046B\u046D\x05v<\x02\u046C\u046B\x03\x02\x02\x02\u046C\u046D" +
		"\x03\x02\x02\x02\u046D\u046E\x03\x02\x02\x02\u046E\u046F\x07m\x02\x02" +
		"\u046Fq\x03\x02\x02\x02\u0470\u0472\x07j\x02\x02\u0471\u0473\x07\xDD\x02" +
		"\x02\u0472\u0471\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473\u0474" +
		"\x03\x02\x02\x02\u0474\u0475\x05X-\x02\u0475\u0476\x07\xDD\x02\x02\u0476" +
		"\u0477\x07\xAA\x02\x02\u0477\u047D\x05\u0126\x94\x02\u0478\u047C\x05\x0E" +
		"\b\x02\u0479\u047C\x05\x16\f\x02\u047A\u047C\x05\x1C\x0F\x02\u047B\u0478" +
		"\x03\x02\x02\x02\u047B\u0479\x03\x02\x02\x02\u047B\u047A\x03\x02\x02\x02" +
		"\u047C\u047F\x03\x02\x02\x02\u047D\u047B\x03\x02\x02\x02\u047D\u047E\x03" +
		"\x02\x02\x02\u047Es\x03\x02\x02\x02\u047F\u047D\x03\x02\x02\x02\u0480" +
		"\u0482\x07k\x02\x02\u0481\u0483\x07\xDD\x02\x02\u0482\u0481\x03\x02\x02" +
		"\x02\u0482\u0483\x03\x02\x02\x02\u0483\u0484\x03\x02\x02\x02\u0484\u0485" +
		"\x05X-\x02\u0485\u0486\x07\xDD\x02\x02\u0486\u0487\x07\xAA\x02\x02\u0487" +
		"\u048D\x05\u0126\x94\x02\u0488\u048C\x05\x0E\b\x02\u0489\u048C\x05\x16" +
		"\f\x02\u048A\u048C\x05\x1C\x0F\x02\u048B\u0488\x03\x02\x02\x02\u048B\u0489" +
		"\x03\x02\x02\x02\u048B\u048A\x03\x02\x02\x02\u048C\u048F\x03\x02\x02\x02" +
		"\u048D\u048B\x03\x02\x02\x02\u048D\u048E\x03\x02\x02\x02\u048Eu\x03\x02" +
		"\x02\x02\u048F\u048D\x03\x02\x02\x02\u0490\u0491\x07l\x02\x02\u0491\u0497" +
		"\x05\u0126\x94\x02\u0492\u0496\x05\x0E\b\x02\u0493\u0496\x05\x16\f\x02" +
		"\u0494\u0496\x05\x1C\x0F\x02\u0495\u0492\x03\x02\x02\x02\u0495\u0493\x03" +
		"\x02\x02\x02\u0495\u0494\x03\x02\x02\x02\u0496\u0499\x03\x02\x02\x02\u0497" +
		"\u0495\x03\x02\x02\x02\u0497\u0498\x03\x02\x02\x02\u0498w\x03\x02\x02" +
		"\x02\u0499\u0497\x03\x02\x02\x02\u049A\u049C\x07o\x02\x02\u049B\u049D" +
		"\x07\xDD\x02\x02\u049C\u049B\x03\x02\x02\x02\u049C\u049D\x03\x02\x02\x02" +
		"\u049D\u049E\x03\x02\x02\x02\u049E\u04A0\x07\xC3\x02\x02\u049F\u04A1\x07" +
		"\xDD\x02\x02\u04A0\u049F\x03\x02\x02\x02\u04A0\u04A1\x03\x02\x02\x02\u04A1" +
		"\u04A2\x03\x02\x02\x02\u04A2\u04A4\x05\xF4{\x02\u04A3\u04A5\x07\xDD\x02" +
		"\x02\u04A4\u04A3\x03\x02\x02\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5\u04A6" +
		"\x03\x02\x02\x02\u04A6\u04A7\x07\xCC\x02\x02\u04A7y\x03\x02\x02\x02\u04A8" +
		"\u04A9\x07p\x02\x02\u04A9\u04AA\x07\xDD\x02\x02\u04AA\u04AB\x05\xCAf\x02" +
		"\u04AB{\x03\x02\x02\x02\u04AC\u04AD\x07r\x02\x02\u04AD\u04AE\x07\xDD\x02" +
		"\x02\u04AE\u04AF\x05\xCAf\x02\u04AF\u04B0\x07\xDD\x02\x02\u04B0\u04B1" +
		"\x07\x12\x02\x02\u04B1\u04B2\x07\xDD\x02\x02\u04B2\u04B3\x05\xCAf\x02" +
		"\u04B3}\x03\x02\x02\x02\u04B4\u04B5\t\x07\x02\x02\u04B5\u04BC\x07\xDD" +
		"\x02\x02\u04B6\u04B7\x07S\x02\x02\u04B7\u04B8\x07\xDD\x02\x02\u04B8\u04BD" +
		"\x05\xCAf\x02\u04B9\u04BA\x07\x95\x02\x02\u04BA\u04BB\x07\xDD\x02\x02" +
		"\u04BB\u04BD\x07s\x02\x02\u04BC\u04B6\x03\x02\x02\x02\u04BC\u04B9\x03" +
		"\x02\x02\x02\u04BD\x7F\x03\x02\x02\x02\u04BE\u04BF\x07x\x02\x02\u04BF" +
		"\u04C0\x07\xDD\x02\x02\u04C0\u04C1\x05\xCAf\x02\u04C1\u04C2\x07\xDD\x02" +
		"\x02\u04C2\u04C3\x07S\x02\x02\u04C3\u04C4\x07\xDD\x02\x02\u04C4\u04CF" +
		"\x05\xCAf\x02\u04C5\u04C7\x07\xDD\x02\x02\u04C6\u04C5\x03\x02\x02\x02" +
		"\u04C6\u04C7\x03\x02\x02\x02\u04C7\u04C8\x03\x02\x02\x02\u04C8\u04CA\x07" +
		"\x03\x02\x02\u04C9\u04CB\x07\xDD\x02\x02\u04CA\u04C9\x03\x02\x02\x02\u04CA" +
		"\u04CB\x03\x02\x02\x02\u04CB\u04CC\x03\x02\x02\x02\u04CC\u04CE\x05\xCA" +
		"f\x02\u04CD\u04C6\x03\x02\x02\x02\u04CE\u04D1\x03\x02\x02\x02\u04CF\u04CD" +
		"\x03\x02\x02\x02\u04CF\u04D0\x03\x02\x02\x02\u04D0\x81\x03\x02\x02\x02" +
		"\u04D1\u04CF\x03\x02\x02\x02\u04D2\u04D3\x07x\x02\x02\u04D3\u04D4\x07" +
		"\xDD\x02\x02\u04D4\u04D5\x05\xCAf\x02\u04D5\u04D6\x07\xDD\x02\x02\u04D6" +
		"\u04D7\x07R\x02\x02\u04D7\u04D8\x07\xDD\x02\x02\u04D8\u04E3\x05\xCAf\x02" +
		"\u04D9\u04DB\x07\xDD\x02\x02\u04DA\u04D9\x03\x02\x02\x02\u04DA\u04DB\x03" +
		"\x02\x02\x02\u04DB\u04DC\x03\x02\x02\x02\u04DC\u04DE\x07\x03\x02\x02\u04DD" +
		"\u04DF\x07\xDD\x02\x02\u04DE\u04DD\x03\x02\x02\x02\u04DE\u04DF\x03\x02" +
		"\x02\x02\u04DF\u04E0\x03\x02\x02\x02\u04E0\u04E2\x05\xCAf\x02\u04E1\u04DA" +
		"\x03\x02\x02\x02\u04E2\u04E5\x03\x02\x02\x02\u04E3\u04E1\x03\x02\x02\x02" +
		"\u04E3\u04E4\x03\x02\x02\x02\u04E4\x83\x03\x02\x02\x02\u04E5\u04E3\x03" +
		"\x02\x02\x02\u04E6\u04E7\x07{\x02\x02\u04E7\u04E8\x07\xDD\x02\x02\u04E8" +
		"\u04E9\x05\xCAf\x02\u04E9\u04EA\x07\xDD\x02\x02\u04EA\u04EB\x07N\x02\x02" +
		"\u04EB\u04EC\x07\xDD\x02\x02\u04EC\u04F1\t\b\x02\x02\u04ED\u04EE\x07\xDD" +
		"\x02\x02\u04EE\u04EF\x07\v\x02\x02\u04EF\u04F0\x07\xDD\x02\x02\u04F0\u04F2" +
		"\t\t\x02\x02\u04F1\u04ED\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F2" +
		"\u04F5\x03\x02\x02\x02\u04F3\u04F4\x07\xDD\x02\x02\u04F4\u04F6\t\n\x02" +
		"\x02\u04F5\u04F3\x03\x02\x02\x02\u04F5\u04F6\x03\x02\x02\x02\u04F6\u04F7" +
		"\x03\x02\x02\x02\u04F7\u04F8\x07\xDD\x02\x02\u04F8\u04F9\x07\x12\x02\x02" +
		"\u04F9\u04FA\x07\xDD\x02\x02\u04FA\u0505\x05\xDAn\x02\u04FB\u04FC\x07" +
		"\xDD\x02\x02\u04FC\u04FE\x07`\x02\x02\u04FD\u04FF\x07\xDD\x02\x02\u04FE" +
		"\u04FD\x03\x02\x02\x02\u04FE\u04FF\x03\x02\x02\x02\u04FF\u0500\x03\x02" +
		"\x02\x02\u0500\u0502\x07\xBF\x02\x02\u0501\u0503\x07\xDD\x02\x02\u0502" +
		"\u0501\x03\x02\x02\x02\u0502\u0503\x03\x02\x02\x02\u0503\u0504\x03\x02" +
		"\x02\x02\u0504\u0506\x05\xCAf\x02\u0505\u04FB\x03\x02\x02\x02\u0505\u0506" +
		"\x03\x02\x02\x02\u0506\x85\x03\x02\x02\x02\u0507\u0514\x05\x88E\x02\u0508" +
		"\u050A\x07\xDD\x02\x02\u0509\u0508\x03\x02\x02\x02\u0509\u050A\x03\x02" +
		"\x02\x02\u050A\u050B\x03\x02\x02\x02\u050B\u050D\t\v\x02\x02\u050C\u050E" +
		"\x07\xDD\x02\x02\u050D\u050C\x03\x02\x02\x02\u050D\u050E\x03\x02\x02\x02" +
		"\u050E\u0510\x03\x02\x02\x02\u050F\u0511\x05\x88E\x02\u0510\u050F\x03" +
		"\x02\x02\x02\u0510\u0511\x03\x02\x02\x02\u0511\u0513\x03\x02\x02\x02\u0512" +
		"\u0509\x03\x02\x02\x02\u0513\u0516\x03\x02\x02\x02\u0514\u0512\x03\x02" +
		"\x02\x02\u0514\u0515\x03\x02\x02\x02\u0515\u0529\x03\x02\x02\x02\u0516" +
		"\u0514\x03\x02\x02\x02\u0517\u0519\x05\x88E\x02\u0518\u0517\x03\x02\x02" +
		"\x02\u0518\u0519\x03\x02\x02\x02\u0519\u0524\x03\x02\x02\x02\u051A\u051C" +
		"\x07\xDD\x02\x02\u051B\u051A\x03\x02\x02\x02\u051B\u051C\x03\x02\x02\x02" +
		"\u051C\u051D\x03\x02\x02\x02\u051D\u051F\t\v\x02\x02\u051E\u0520\x07\xDD" +
		"\x02\x02\u051F\u051E\x03\x02\x02\x02\u051F\u0520\x03\x02\x02\x02\u0520" +
		"\u0522\x03\x02\x02\x02\u0521\u0523\x05\x88E\x02\u0522\u0521\x03\x02\x02" +
		"\x02\u0522\u0523\x03\x02\x02\x02\u0523\u0525\x03\x02\x02\x02\u0524\u051B" +
		"\x03\x02\x02\x02\u0525\u0526\x03\x02\x02\x02\u0526\u0524\x03\x02\x02\x02" +
		"\u0526\u0527\x03\x02\x02\x02\u0527\u0529\x03\x02\x02\x02\u0528\u0507\x03" +
		"\x02\x02\x02\u0528\u0518\x03\x02\x02\x02\u0529\x87\x03\x02\x02\x02\u052A" +
		"\u053C\x05\xCAf\x02\u052B\u0539\t\f\x02\x02\u052C\u052E\x07\xDD\x02\x02" +
		"\u052D\u052C\x03\x02\x02\x02\u052D\u052E\x03\x02\x02\x02\u052E\u052F\x03" +
		"\x02\x02\x02\u052F\u0531\x07\xC3\x02\x02\u0530\u0532\x07\xDD\x02\x02\u0531" +
		"\u0530\x03\x02\x02\x02\u0531\u0532\x03\x02\x02\x02\u0532\u0533\x03\x02" +
		"\x02\x02\u0533\u0535\x05\xF4{\x02\u0534\u0536\x07\xDD\x02\x02\u0535\u0534" +
		"\x03\x02\x02\x02\u0535\u0536\x03\x02\x02\x02\u0536\u0537\x03\x02\x02\x02" +
		"\u0537\u0538\x07\xCC\x02\x02\u0538\u053A\x03\x02\x02\x02\u0539\u052D\x03" +
		"\x02\x02\x02\u0539\u053A\x03\x02\x02\x02\u053A\u053C\x03\x02\x02\x02\u053B" +
		"\u052A\x03\x02\x02\x02\u053B\u052B\x03\x02\x02\x02\u053C\x89\x03\x02\x02" +
		"\x02\u053D\u053E\x07\x85\x02\x02\u053E\u053F\x07\xDD\x02\x02\u053F\u0541" +
		"\x05\xDAn\x02\u0540\u0542\x07\xDD\x02\x02\u0541\u0540\x03\x02\x02\x02" +
		"\u0541\u0542\x03\x02\x02\x02\u0542\u0543\x03\x02\x02\x02\u0543\u0548\x07" +
		"\x03\x02\x02\u0544\u0546\x07\xDD\x02\x02\u0545\u0544\x03";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\x02\u0545\u0546\x03\x02\x02\x02\u0546\u0547\x03\x02\x02\x02\u0547" +
		"\u0549\x05\x86D\x02\u0548\u0545\x03\x02\x02\x02\u0548\u0549\x03\x02\x02" +
		"\x02\u0549\x8B\x03\x02\x02\x02\u054A\u054B\x05\u011C\x8F\x02\u054B\u054C" +
		"\x07\xDD\x02\x02\u054C\u054E\x03\x02\x02\x02\u054D\u054A\x03\x02\x02\x02" +
		"\u054D\u054E\x03\x02\x02\x02\u054E\u0551\x03\x02\x02\x02\u054F\u0550\x07" +
		"\xA3\x02\x02\u0550\u0552\x07\xDD\x02\x02\u0551\u054F\x03\x02\x02\x02\u0551" +
		"\u0552\x03\x02\x02\x02\u0552\u0553\x03\x02\x02\x02\u0553\u0554\x07\x87" +
		"\x02\x02\u0554\u0555\x07\xDD\x02\x02\u0555\u0557\x05\u0104\x83\x02\u0556" +
		"\u0558\x05\u011A\x8E\x02\u0557\u0556\x03\x02\x02\x02\u0557\u0558\x03\x02" +
		"\x02\x02\u0558\u055D\x03\x02\x02\x02\u0559\u055B\x07\xDD\x02\x02\u055A" +
		"\u0559\x03\x02\x02\x02\u055A\u055B\x03\x02\x02\x02\u055B\u055C\x03\x02" +
		"\x02\x02\u055C\u055E\x05\xFA~\x02\u055D\u055A\x03\x02\x02\x02\u055D\u055E" +
		"\x03\x02\x02\x02\u055E\u0561\x03\x02\x02\x02\u055F\u0560\x07\xDD\x02\x02" +
		"\u0560\u0562\x05\u0106\x84\x02\u0561\u055F\x03\x02\x02\x02\u0561\u0562" +
		"\x03\x02\x02\x02\u0562\u0563\x03\x02\x02\x02\u0563\u0565\x05\u0126\x94" +
		"\x02\u0564\u0566\x05\x1C\x0F\x02\u0565\u0564\x03\x02\x02\x02\u0565\u0566" +
		"\x03\x02\x02\x02\u0566\u0567\x03\x02\x02\x02\u0567\u0568\x07;\x02\x02" +
		"\u0568\x8D\x03\x02\x02\x02\u0569\u056A\x05\u011C\x8F\x02\u056A\u056B\x07" +
		"\xDD\x02\x02\u056B\u056D\x03\x02\x02\x02\u056C\u0569\x03\x02\x02\x02\u056C" +
		"\u056D\x03\x02\x02\x02\u056D\u0570\x03\x02\x02\x02\u056E\u056F\x07\xA3" +
		"\x02\x02\u056F\u0571\x07\xDD\x02\x02\u0570\u056E\x03\x02\x02\x02\u0570" +
		"\u0571\x03\x02\x02\x02\u0571\u0572\x03\x02\x02\x02\u0572\u0573\x07\x89" +
		"\x02\x02\u0573\u0574\x07\xDD\x02\x02\u0574\u0579\x05\u0104\x83\x02\u0575" +
		"\u0577\x07\xDD\x02\x02\u0576\u0575\x03\x02\x02\x02\u0576\u0577\x03\x02" +
		"\x02\x02\u0577\u0578\x03\x02\x02\x02\u0578\u057A\x05\xFA~\x02\u0579\u0576" +
		"\x03\x02\x02\x02\u0579\u057A\x03\x02\x02\x02\u057A\u057B\x03\x02\x02\x02" +
		"\u057B\u057D\x05\u0126\x94\x02\u057C\u057E\x05\x1C\x0F\x02\u057D\u057C" +
		"\x03\x02\x02\x02\u057D\u057E\x03\x02\x02\x02\u057E\u057F\x03\x02\x02\x02" +
		"\u057F\u0580\x07;\x02\x02\u0580\x8F\x03\x02\x02\x02\u0581\u0582\x05\u011C" +
		"\x8F\x02\u0582\u0583\x07\xDD\x02\x02\u0583\u0585\x03\x02\x02\x02\u0584" +
		"\u0581\x03\x02\x02\x02\u0584\u0585\x03\x02\x02\x02\u0585\u0588\x03\x02" +
		"\x02\x02\u0586\u0587\x07\xA3\x02\x02\u0587\u0589\x07\xDD\x02\x02\u0588" +
		"\u0586\x03\x02\x02\x02\u0588\u0589\x03\x02\x02\x02\u0589\u058A\x03\x02" +
		"\x02\x02\u058A\u058B\x07\x88\x02\x02\u058B\u058C\x07\xDD\x02\x02\u058C" +
		"\u0591\x05\u0104\x83\x02\u058D\u058F\x07\xDD\x02\x02\u058E\u058D\x03\x02" +
		"\x02\x02\u058E\u058F\x03\x02\x02\x02\u058F\u0590\x03\x02\x02\x02\u0590" +
		"\u0592\x05\xFA~\x02\u0591\u058E\x03\x02\x02\x02\u0591\u0592\x03\x02\x02" +
		"\x02\u0592\u0593\x03\x02\x02\x02\u0593\u0595\x05\u0126\x94\x02\u0594\u0596" +
		"\x05\x1C\x0F\x02\u0595\u0594\x03\x02\x02\x02\u0595\u0596\x03\x02\x02\x02" +
		"\u0596\u0597\x03\x02\x02\x02\u0597\u0598\x07;\x02\x02\u0598\x91\x03\x02" +
		"\x02\x02\u0599\u059A\x07\x8C\x02\x02\u059A\u059B\x07\xDD\x02\x02\u059B" +
		"\u059D\x05\xDAn\x02\u059C\u059E\x07\xDD\x02\x02\u059D\u059C\x03\x02\x02" +
		"\x02\u059D\u059E\x03\x02\x02\x02\u059E\u059F\x03\x02\x02\x02\u059F\u05A1" +
		"\x07\x03\x02\x02\u05A0\u05A2\x07\xDD\x02\x02\u05A1\u05A0\x03\x02\x02\x02" +
		"\u05A1\u05A2\x03\x02\x02\x02\u05A2\u05A4\x03\x02\x02\x02\u05A3\u05A5\x05" +
		"\xCAf\x02\u05A4\u05A3\x03\x02\x02\x02\u05A4\u05A5\x03\x02\x02\x02\u05A5" +
		"\u05A7\x03\x02\x02\x02\u05A6\u05A8\x07\xDD\x02\x02\u05A7\u05A6\x03\x02" +
		"\x02\x02\u05A7\u05A8\x03\x02\x02\x02\u05A8\u05A9\x03\x02\x02\x02\u05A9" +
		"\u05AB\x07\x03\x02\x02\u05AA\u05AC\x07\xDD\x02\x02\u05AB\u05AA\x03\x02" +
		"\x02\x02\u05AB\u05AC\x03\x02\x02\x02\u05AC\u05AD\x03\x02\x02\x02\u05AD" +
		"\u05AE\x05\xCAf\x02\u05AE\x93\x03\x02\x02\x02\u05AF\u05B0\x07\x8F\x02" +
		"\x02\u05B0\u05B1\x07\xDD\x02\x02\u05B1\u05C0\x05\u0104\x83\x02\u05B2\u05B4" +
		"\x07\xDD\x02\x02\u05B3\u05B2\x03\x02\x02\x02\u05B3\u05B4\x03\x02\x02\x02" +
		"\u05B4\u05B5\x03\x02\x02\x02\u05B5\u05B7\x07\xC3\x02\x02\u05B6\u05B8\x07" +
		"\xDD\x02\x02\u05B7\u05B6\x03\x02\x02\x02\u05B7\u05B8\x03\x02\x02\x02\u05B8" +
		"\u05BD\x03\x02\x02\x02\u05B9\u05BB\x05\xF4{\x02\u05BA\u05BC\x07\xDD\x02" +
		"\x02\u05BB\u05BA\x03\x02\x02\x02\u05BB\u05BC\x03\x02\x02\x02\u05BC\u05BE" +
		"\x03\x02\x02\x02\u05BD\u05B9\x03\x02\x02\x02\u05BD\u05BE\x03\x02\x02\x02" +
		"\u05BE\u05BF\x03\x02\x02\x02\u05BF\u05C1\x07\xCC\x02\x02\u05C0\u05B3\x03" +
		"\x02\x02\x02\u05C0\u05C1\x03\x02\x02\x02\u05C1\x95\x03\x02\x02\x02\u05C2" +
		"\u05C5\x07\x8E\x02\x02\u05C3\u05C4\x07\xDD\x02\x02\u05C4\u05C6\x05\xCA" +
		"f\x02\u05C5\u05C3\x03\x02\x02\x02\u05C5\u05C6\x03\x02\x02\x02\u05C6\x97" +
		"\x03\x02\x02\x02\u05C7\u05C8\x07\x92\x02\x02\u05C8\u05CB\x07\xDD\x02\x02" +
		"\u05C9\u05CA\x07\x84\x02\x02\u05CA\u05CC\x07\xDD\x02\x02\u05CB\u05C9\x03" +
		"\x02\x02\x02\u05CB\u05CC\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02\x02\u05CD" +
		"\u05D8\x05\x9AN\x02\u05CE\u05D0\x07\xDD\x02\x02\u05CF\u05CE\x03\x02\x02" +
		"\x02\u05CF\u05D0\x03\x02\x02\x02\u05D0\u05D1\x03\x02\x02\x02\u05D1\u05D3" +
		"\x07\x03\x02\x02\u05D2\u05D4\x07\xDD\x02\x02\u05D3\u05D2\x03\x02\x02\x02" +
		"\u05D3\u05D4\x03\x02\x02\x02\u05D4\u05D5\x03\x02\x02\x02\u05D5\u05D7\x05" +
		"\x9AN\x02\u05D6\u05CF\x03\x02\x02\x02\u05D7\u05DA\x03\x02\x02\x02\u05D8" +
		"\u05D6\x03\x02\x02\x02\u05D8\u05D9\x03\x02\x02\x02\u05D9\x99\x03\x02\x02" +
		"\x02\u05DA\u05D8\x03\x02\x02\x02\u05DB\u05DD\x05\xE8u\x02\u05DC\u05DE" +
		"\x07\xDD\x02\x02\u05DD\u05DC\x03\x02\x02\x02\u05DD\u05DE\x03\x02\x02\x02" +
		"\u05DE\u05DF\x03\x02\x02\x02\u05DF\u05E1\x07\xC3\x02\x02\u05E0\u05E2\x07" +
		"\xDD\x02\x02\u05E1\u05E0\x03\x02\x02\x02\u05E1\u05E2\x03\x02\x02\x02\u05E2" +
		"\u05E3\x03\x02\x02\x02\u05E3\u05E5\x05\u0100\x81\x02\u05E4\u05E6\x07\xDD" +
		"\x02\x02\u05E5\u05E4\x03\x02\x02\x02\u05E5\u05E6\x03\x02\x02\x02\u05E6" +
		"\u05E7\x03\x02\x02\x02\u05E7\u05EA\x07\xCC\x02\x02\u05E8\u05E9\x07\xDD" +
		"\x02\x02\u05E9\u05EB\x05\u0106\x84\x02\u05EA\u05E8\x03\x02\x02\x02\u05EA" +
		"\u05EB\x03\x02\x02\x02\u05EB\x9B\x03\x02\x02\x02\u05EC\u05ED\x07\x94\x02" +
		"\x02\u05ED\x9D\x03\x02\x02\x02\u05EE\u05F4\x07\x95\x02\x02\u05EF\u05F2" +
		"\x07\xDD\x02\x02\u05F0\u05F3\x07s\x02\x02\u05F1\u05F3\x05\u0104\x83\x02" +
		"\u05F2\u05F0\x03\x02\x02\x02\u05F2\u05F1\x03\x02\x02\x02\u05F3\u05F5\x03" +
		"\x02\x02\x02\u05F4\u05EF\x03\x02\x02\x02\u05F4\u05F5\x03\x02\x02\x02\u05F5" +
		"\x9F\x03\x02\x02\x02\u05F6\u05F7\x07\x96\x02\x02\u05F7\xA1\x03\x02\x02" +
		"\x02\u05F8\u05F9\x07\x97\x02\x02\u05F9\u05FA\x07\xDD\x02\x02\u05FA\u05FB" +
		"\x05\xCAf\x02\u05FB\xA3\x03\x02\x02\x02\u05FC\u05FD\x07\x98\x02\x02\u05FD" +
		"\u05FE\x07\xDD\x02\x02\u05FE\u0600\x05\xE8u\x02\u05FF\u0601\x07\xDD\x02" +
		"\x02\u0600\u05FF\x03\x02\x02\x02\u0600\u0601\x03\x02\x02\x02\u0601\u0602" +
		"\x03\x02\x02\x02\u0602\u0604\x07\xBF\x02\x02\u0603\u0605\x07\xDD\x02\x02" +
		"\u0604\u0603\x03\x02\x02\x02\u0604\u0605\x03\x02\x02\x02\u0605\u0606\x03" +
		"\x02\x02\x02\u0606\u0607\x05\xCAf\x02\u0607\xA5\x03\x02\x02\x02\u0608" +
		"\u0609\x07\x99\x02\x02\u0609\u060A\x07\xDD\x02\x02\u060A\u060C\x05\xCA" +
		"f\x02\u060B\u060D\x07\xDD\x02\x02\u060C\u060B\x03\x02\x02\x02\u060C\u060D" +
		"\x03\x02\x02\x02\u060D\u060E\x03\x02\x02\x02\u060E\u0610\x07\x03\x02\x02" +
		"\u060F\u0611\x07\xDD\x02\x02\u0610\u060F\x03\x02\x02\x02\u0610\u0611\x03" +
		"\x02\x02\x02\u0611\u0612\x03\x02\x02\x02\u0612\u0613\x05\xCAf\x02\u0613" +
		"\xA7\x03\x02\x02\x02\u0614\u0615\x07\x9A\x02\x02\u0615\u0616\x07\xDD\x02" +
		"\x02\u0616\u0618\x05\xCAf\x02\u0617\u0619\x07\xDD\x02\x02\u0618\u0617" +
		"\x03\x02\x02\x02\u0618\u0619\x03\x02\x02\x02\u0619\u061A\x03\x02\x02\x02" +
		"\u061A\u061C\x07\x03\x02\x02\u061B\u061D\x07\xDD\x02\x02\u061C\u061B\x03" +
		"\x02\x02\x02\u061C\u061D\x03\x02\x02\x02\u061D\u061E\x03\x02\x02\x02\u061E" +
		"\u0620\x05\xCAf\x02\u061F\u0621\x07\xDD\x02\x02\u0620\u061F\x03\x02\x02" +
		"\x02\u0620\u0621\x03\x02\x02\x02\u0621\u0622\x03\x02\x02\x02\u0622\u0624" +
		"\x07\x03\x02\x02\u0623\u0625\x07\xDD\x02\x02\u0624\u0623\x03\x02\x02\x02" +
		"\u0624\u0625\x03\x02\x02\x02\u0625\u0626\x03\x02\x02\x02\u0626\u0628\x05" +
		"\xCAf\x02\u0627\u0629\x07\xDD\x02\x02\u0628\u0627\x03\x02\x02\x02\u0628" +
		"\u0629\x03\x02\x02\x02\u0629\u062A\x03\x02\x02\x02\u062A\u062C\x07\x03" +
		"\x02\x02\u062B\u062D\x07\xDD\x02\x02\u062C\u062B\x03\x02\x02\x02\u062C" +
		"\u062D\x03\x02\x02\x02\u062D\u062E\x03\x02\x02\x02\u062E\u062F\x05\xCA" +
		"f\x02\u062F\xA9\x03\x02\x02\x02\u0630\u0631\x07\x9B\x02\x02\u0631\u0632" +
		"\x07\xDD\x02\x02\u0632\u0634\x05\xDAn\x02\u0633\u0635\x07\xDD\x02\x02" +
		"\u0634\u0633\x03\x02\x02\x02\u0634\u0635\x03\x02\x02\x02\u0635\u0636\x03" +
		"\x02\x02\x02\u0636\u0638\x07\x03\x02\x02\u0637\u0639\x07\xDD\x02\x02\u0638" +
		"\u0637\x03\x02\x02\x02\u0638\u0639\x03\x02\x02\x02\u0639\u063A\x03\x02" +
		"\x02\x02\u063A\u063B\x05\xCAf\x02\u063B\xAB\x03\x02\x02\x02\u063C\u063D" +
		"\x07\x9C\x02\x02\u063D\u063E\x07\xDD\x02\x02\u063E\u063F\x07\x1B\x02\x02" +
		"\u063F\u0640\x07\xDD\x02\x02\u0640\u0641\x05\xCAf\x02\u0641\u0645\x05" +
		"\u0126\x94\x02\u0642\u0644\x05\xB0Y\x02\u0643\u0642\x03\x02\x02\x02\u0644" +
		"\u0647\x03\x02\x02\x02\u0645\u0643\x03\x02\x02\x02\u0645\u0646\x03\x02" +
		"\x02\x02\u0646\u0648\x03\x02\x02\x02\u0647\u0645\x03\x02\x02\x02\u0648" +
		"\u0649\x07<\x02\x02\u0649\xAD\x03\x02\x02\x02\u064A\u064C\x07Y\x02\x02" +
		"\u064B\u064D\x07\xDD\x02\x02\u064C\u064B\x03\x02\x02\x02\u064C\u064D\x03" +
		"\x02\x02\x02\u064D\u064E\x03\x02\x02\x02\u064E\u0650\x05\u010C\x87\x02" +
		"\u064F\u0651\x07\xDD\x02\x02\u0650\u064F\x03\x02\x02\x02\u0650\u0651\x03" +
		"\x02\x02\x02\u0651\u0652\x03\x02\x02\x02\u0652\u0653\x05\xCAf\x02\u0653" +
		"\u065C\x03\x02\x02\x02\u0654\u0655\x05\xCAf\x02\u0655\u0656\x07\xDD\x02" +
		"\x02\u0656\u0657\x07\xAC\x02\x02\u0657\u0658\x07\xDD\x02\x02\u0658\u0659" +
		"\x05\xCAf\x02\u0659\u065C\x03\x02\x02\x02\u065A\u065C\x05\xCAf\x02\u065B" +
		"\u064A\x03\x02\x02\x02\u065B\u0654\x03\x02\x02\x02\u065B\u065A\x03\x02" +
		"\x02\x02\u065C\xAF\x03\x02\x02\x02\u065D\u065E\x07\x1B\x02\x02\u065E\u065F" +
		"\x07\xDD\x02\x02\u065F\u0660\x05\xB2Z\x02\u0660\u0662\x05\u0126\x94\x02" +
		"\u0661\u0663\x05\x1C\x0F\x02\u0662\u0661\x03\x02\x02\x02\u0662\u0663\x03" +
		"\x02\x02\x02\u0663\xB1\x03\x02\x02\x02\u0664\u0674\x076\x02\x02\u0665" +
		"\u0670\x05\xAEX\x02\u0666\u0668\x07\xDD\x02\x02\u0667\u0666\x03\x02\x02" +
		"\x02\u0667\u0668\x03\x02\x02\x02\u0668\u0669\x03\x02\x02\x02\u0669\u066B" +
		"\x07\x03\x02\x02\u066A\u066C\x07\xDD\x02\x02\u066B\u066A\x03\x02\x02\x02" +
		"\u066B\u066C\x03\x02\x02\x02\u066C\u066D\x03\x02\x02\x02\u066D\u066F\x05" +
		"\xAEX\x02\u066E\u0667\x03\x02\x02\x02\u066F\u0672\x03\x02\x02\x02\u0670" +
		"\u066E\x03\x02\x02\x02\u0670\u0671\x03\x02\x02\x02\u0671\u0674\x03\x02" +
		"\x02\x02\u0672\u0670\x03\x02\x02\x02\u0673\u0664\x03\x02\x02\x02\u0673" +
		"\u0665\x03\x02\x02\x02\u0674\xB3\x03\x02\x02\x02\u0675\u0676\x07\x9D\x02" +
		"\x02\u0676\u0677\x07\xDD\x02\x02\u0677\u0680\x05\xCAf\x02\u0678\u067A" +
		"\x07\xDD\x02\x02\u0679\u0678\x03\x02\x02\x02\u0679\u067A\x03\x02\x02\x02" +
		"\u067A\u067B\x03\x02\x02\x02\u067B\u067D\x07\x03\x02\x02\u067C\u067E\x07" +
		"\xDD\x02\x02\u067D\u067C\x03\x02\x02\x02\u067D\u067E\x03\x02\x02\x02\u067E" +
		"\u067F\x03\x02\x02\x02\u067F\u0681\x05\xCAf\x02\u0680\u0679\x03\x02\x02" +
		"\x02\u0680\u0681\x03\x02\x02\x02\u0681\xB5\x03\x02\x02\x02\u0682\u0683" +
		"\x07\x9F\x02\x02\u0683\u0684\x07\xDD\x02\x02\u0684\u0686\x05\xCAf\x02" +
		"\u0685\u0687\x07\xDD\x02\x02\u0686\u0685\x03\x02\x02\x02\u0686\u0687\x03" +
		"\x02\x02\x02\u0687\u0688\x03\x02\x02\x02\u0688\u068A\x07\x03\x02\x02\u0689" +
		"\u068B\x07\xDD\x02\x02\u068A\u0689\x03\x02\x02\x02\u068A\u068B\x03\x02" +
		"\x02\x02\u068B\u068C\x03\x02\x02\x02\u068C\u068D\x05\xCAf\x02\u068D\xB7" +
		"\x03\x02\x02\x02\u068E\u068F\x07\x9E\x02\x02\u068F\u0690\x07\xDD\x02\x02" +
		"\u0690\u0692\x05\xE8u\x02\u0691\u0693\x07\xDD\x02\x02\u0692\u0691\x03" +
		"\x02\x02\x02\u0692\u0693\x03\x02\x02\x02\u0693\u0694\x03\x02\x02\x02\u0694" +
		"\u0696\x07\xBF\x02\x02\u0695\u0697\x07\xDD\x02\x02\u0696\u0695\x03\x02" +
		"\x02\x02\u0696\u0697\x03\x02\x02\x02\u0697\u0698\x03\x02\x02\x02\u0698" +
		"\u0699\x05\xCAf\x02\u0699\xB9\x03\x02\x02\x02\u069A\u069B\x07\xA5\x02" +
		"\x02\u069B\xBB\x03\x02\x02\x02\u069C\u069D\x05\u011C\x8F\x02\u069D\u069E" +
		"\x07\xDD\x02\x02\u069E\u06A0\x03\x02\x02\x02\u069F\u069C\x03\x02\x02\x02" +
		"\u069F\u06A0\x03\x02\x02\x02\u06A0\u06A3\x03\x02\x02\x02\u06A1\u06A2\x07" +
		"\xA3\x02\x02\u06A2\u06A4\x07\xDD\x02\x02\u06A3\u06A1\x03\x02\x02\x02\u06A3" +
		"\u06A4\x03\x02\x02\x02\u06A4\u06A5\x03\x02\x02\x02\u06A5\u06A7\x07\xA7" +
		"\x02\x02\u06A6\u06A8\x07\xDD\x02\x02\u06A7\u06A6\x03\x02\x02\x02\u06A7" +
		"\u06A8\x03\x02\x02\x02\u06A8\u06A9\x03\x02\x02\x02\u06A9\u06AE\x05\u0104" +
		"\x83\x02\u06AA\u06AC\x07\xDD\x02\x02\u06AB\u06AA\x03\x02\x02\x02\u06AB" +
		"\u06AC\x03\x02\x02\x02\u06AC\u06AD\x03\x02\x02\x02\u06AD\u06AF\x05\xFA" +
		"~\x02\u06AE\u06AB\x03\x02\x02\x02\u06AE\u06AF\x03\x02\x02\x02\u06AF\u06B0" +
		"\x03\x02\x02\x02\u06B0\u06B2\x05\u0126\x94\x02\u06B1\u06B3\x05\x1C\x0F" +
		"\x02\u06B2\u06B1\x03\x02\x02\x02\u06B2\u06B3\x03\x02\x02\x02\u06B3\u06B4" +
		"\x03\x02\x02\x02\u06B4\u06B5\x07=\x02\x02\u06B5\xBD\x03\x02\x02\x02\u06B6" +
		"\u06B8\x07\xAB\x02\x02\u06B7\u06B9\x07\xDD\x02\x02\u06B8\u06B7\x03\x02" +
		"\x02\x02\u06B8\u06B9\x03\x02\x02\x02\u06B9\u06BA\x03\x02\x02\x02\u06BA" +
		"\u06BC\x07\xBF\x02\x02\u06BB\u06BD\x07\xDD\x02\x02\u06BC\u06BB\x03\x02" +
		"\x02\x02\u06BC\u06BD\x03\x02\x02\x02\u06BD\u06BE\x03\x02\x02\x02\u06BE" +
		"\u06BF\x05\xCAf\x02\u06BF\xBF\x03\x02\x02\x02\u06C0\u06C1\x05\u011C\x8F" +
		"\x02\u06C1\u06C2\x07\xDD\x02\x02\u06C2\u06C4\x03\x02\x02\x02\u06C3\u06C0" +
		"\x03\x02\x02\x02\u06C3\u06C4\x03\x02\x02\x02\u06C4\u06C5\x03\x02\x02\x02" +
		"\u06C5\u06C6\x07\xAE\x02\x02\u06C6\u06C7\x07\xDD\x02\x02\u06C7\u06C8\x05" +
		"\u0104\x83\x02\u06C8\u06CC\x05\u0126\x94\x02\u06C9\u06CB\x05\xC2b\x02" +
		"\u06CA\u06C9\x03\x02\x02\x02\u06CB\u06CE\x03\x02\x02\x02\u06CC\u06CA\x03" +
		"\x02\x02\x02\u06CC\u06CD\x03\x02\x02\x02\u06CD\u06CF\x03\x02\x02\x02\u06CE" +
		"\u06CC\x03\x02\x02\x02\u06CF\u06D0\x07>\x02\x02\u06D0\xC1\x03\x02\x02" +
		"\x02\u06D1\u06E0\x05\u0104\x83\x02\u06D2\u06D4\x07\xDD\x02\x02\u06D3\u06D2" +
		"\x03\x02\x02\x02\u06D3\u06D4\x03\x02\x02\x02\u06D4\u06D5\x03\x02\x02\x02" +
		"\u06D5\u06DA\x07\xC3\x02\x02\u06D6\u06D8\x07\xDD\x02\x02\u06D7\u06D6\x03" +
		"\x02\x02\x02\u06D7\u06D8\x03\x02\x02\x02\u06D8\u06D9\x03\x02\x02\x02\u06D9" +
		"\u06DB\x05\u0100\x81\x02\u06DA\u06D7\x03\x02\x02\x02\u06DA\u06DB\x03\x02" +
		"\x02\x02\u06DB\u06DD\x03\x02\x02\x02\u06DC\u06DE\x07\xDD\x02\x02\u06DD" +
		"\u06DC\x03\x02\x02\x02\u06DD\u06DE\x03\x02\x02\x02\u06DE\u06DF\x03\x02" +
		"\x02\x02\u06DF\u06E1\x07\xCC\x02\x02\u06E0\u06D3\x03\x02\x02\x02\u06E0" +
		"\u06E1\x03\x02\x02\x02\u06E1\u06E4\x03\x02\x02\x02\u06E2\u06E3\x07\xDD" +
		"\x02\x02\u06E3\u06E5\x05\u0106\x84\x02\u06E4\u06E2\x03\x02\x02\x02\u06E4" +
		"\u06E5\x03\x02\x02\x02\u06E5\u06E6\x03\x02\x02\x02\u06E6\u06E7\x05\u0126" +
		"\x94\x02\u06E7\xC3\x03\x02\x02\x02\u06E8\u06E9\x07\xAF\x02\x02\u06E9\u06EA" +
		"\x07\xDD\x02\x02\u06EA\u06EF\x05\xCAf\x02\u06EB\u06EC\x07\xDD\x02\x02" +
		"\u06EC\u06ED\x07Y\x02\x02\u06ED\u06EE\x07\xDD\x02\x02\u06EE\u06F0\x05" +
		"\u0118\x8D\x02\u06EF\u06EB\x03\x02\x02\x02\u06EF\u06F0\x03\x02\x02\x02" +
		"\u06F0\xC5\x03\x02\x02\x02\u06F1\u06F2\x07\xB0\x02\x02\u06F2\u06F3\x07" +
		"\xDD\x02\x02\u06F3\u06F4\x05\xCAf\x02\u06F4\xC7\x03\x02\x02\x02\u06F5" +
		"\u06F6\x07\xB1\x02\x02\u06F6\u06F7\x07\xDD\x02\x02\u06F7\u0706\x05\xDA" +
		"n\x02\u06F8\u06FA\x07\xDD\x02\x02\u06F9\u06F8\x03\x02\x02\x02\u06F9\u06FA" +
		"\x03\x02\x02\x02\u06FA\u06FB\x03\x02\x02\x02\u06FB\u06FD\x07\x03\x02\x02" +
		"\u06FC\u06FE\x07\xDD\x02\x02\u06FD\u06FC\x03\x02\x02\x02\u06FD\u06FE\x03" +
		"\x02\x02\x02\u06FE\u06FF\x03\x02\x02\x02\u06FF\u0704\x05\xCAf\x02\u0700" +
		"\u0701\x07\xDD\x02\x02\u0701\u0702\x07\xAC\x02\x02\u0702\u0703\x07\xDD" +
		"\x02\x02\u0703\u0705\x05\xCAf\x02\u0704\u0700\x03\x02\x02\x02\u0704\u0705" +
		"\x03\x02\x02\x02\u0705\u0707\x03\x02\x02\x02\u0706\u06F9\x03\x02\x02\x02" +
		"\u0706\u0707\x03\x02\x02\x02\u0707\xC9\x03\x02\x02\x02\u0708\u0709\bf" +
		"\x01\x02\u0709\u0745\x05\u0116\x8C\x02\u070A\u0745\x05\xE8u\x02\u070B" +
		"\u070D\x07\xC3\x02\x02\u070C\u070E\x07\xDD\x02\x02\u070D\u070C\x03\x02" +
		"\x02\x02\u070D\u070E\x03\x02\x02\x02\u070E\u070F\x03\x02\x02\x02\u070F" +
		"\u071A\x05\xCAf\x02\u0710\u0712\x07\xDD\x02\x02\u0711\u0710\x03\x02\x02" +
		"\x02\u0711\u0712\x03\x02\x02\x02\u0712\u0713\x03\x02\x02\x02\u0713\u0715" +
		"\x07\x03\x02\x02\u0714\u0716\x07\xDD\x02\x02\u0715\u0714\x03\x02\x02\x02" +
		"\u0715\u0716\x03\x02\x02\x02\u0716\u0717\x03\x02\x02\x02\u0717\u0719\x05" +
		"\xCAf\x02\u0718\u0711\x03\x02\x02\x02\u0719\u071C\x03\x02\x02\x02\u071A" +
		"\u0718\x03\x02\x02\x02\u071A\u071B\x03\x02\x02\x02\u071B\u071D\x03\x02" +
		"\x02\x02\u071C\u071A\x03\x02\x02\x02\u071D\u071E\x07\xCC\x02\x02\u071E" +
		"\u0745\x03\x02\x02\x02\u071F\u0721\x07t\x02\x02\u0720\u0722\x07\xDD\x02" +
		"\x02\u0721\u0720\x03\x02\x02\x02\u0721\u0722\x03\x02\x02\x02\u0722\u0723" +
		"\x03\x02\x02\x02\u0723\u0745\x05\xCAf\x1E\u0724\u0745\x05\xC4c\x02\u0725" +
		"\u0745\x05x=\x02\u0726\u0728\x07\f\x02\x02\u0727\u0729\x07\xDD\x02\x02" +
		"\u0728\u0727\x03\x02\x02\x02\u0728\u0729\x03\x02\x02\x02\u0729\u072A\x03" +
		"\x02\x02\x02\u072A\u0745\x05\xCAf\x1B\u072B\u072D\x05\xE8u\x02\u072C\u072E" +
		"\x07\xDD\x02\x02\u072D\u072C\x03\x02\x02\x02\u072D\u072E\x03\x02\x02\x02" +
		"\u072E\u072F\x03\x02\x02\x02\u072F\u0731\x07\xBD\x02\x02\u0730\u0732\x07" +
		"\xDD\x02\x02\u0731\u0730\x03\x02\x02\x02\u0731\u0732\x03\x02\x02\x02\u0732" +
		"\u0733\x03\x02\x02\x02\u0733\u0734\x05\xCAf\x1A\u0734\u0745\x03\x02\x02" +
		"\x02\u0735\u0737\x07\xC5\x02\x02\u0736\u0738\x07\xDD\x02\x02\u0737\u0736" +
		"\x03\x02\x02\x02\u0737\u0738\x03\x02\x02\x02\u0738\u0739\x03\x02\x02\x02" +
		"\u0739\u0745\x05\xCAf\x10\u073A\u073C\x07\xC9\x02\x02\u073B\u073D\x07" +
		"\xDD\x02\x02\u073C\u073B\x03\x02\x02\x02\u073C\u073D\x03\x02\x02\x02\u073D" +
		"\u073E\x03\x02\x02\x02\u073E\u0745\x05\xCAf\x0F\u073F\u0741\x07u\x02\x02" +
		"\u0740\u0742\x07\xDD\x02\x02\u0741\u0740\x03\x02\x02\x02\u0741\u0742\x03" +
		"\x02\x02\x02\u0742\u0743\x03\x02\x02\x02\u0743\u0745\x05\xCAf\x03\u0744" +
		"\u0708\x03\x02\x02\x02\u0744\u070A\x03\x02\x02\x02\u0744\u070B\x03\x02" +
		"\x02\x02\u0744\u071F\x03\x02\x02\x02\u0744\u0724\x03\x02\x02\x02\u0744" +
		"\u0725\x03\x02\x02\x02\u0744\u0726\x03\x02\x02\x02\u0744\u072B\x03\x02" +
		"\x02\x02\u0744\u0735\x03\x02\x02\x02\u0744\u073A\x03\x02\x02\x02\u0744" +
		"\u073F\x03\x02\x02\x02\u0745\u07FC\x03\x02\x02\x02\u0746\u0748\f\x19\x02" +
		"\x02\u0747\u0749\x07\xDD\x02\x02\u0748\u0747\x03\x02\x02\x02\u0748\u0749" +
		"\x03\x02\x02\x02\u0749\u074A\x03\x02\x02\x02\u074A\u074C\x07Y\x02\x02" +
		"\u074B\u074D\x07\xDD\x02\x02\u074C\u074B\x03\x02\x02\x02\u074C\u074D\x03" +
		"\x02\x02\x02\u074D\u074E\x03\x02\x02\x02\u074E\u07FB\x05\xCAf\x1A\u074F" +
		"\u0751\f\x18\x02\x02\u0750\u0752\x07\xDD\x02\x02\u0751\u0750\x03\x02\x02" +
		"\x02\u0751\u0752\x03\x02\x02\x02\u0752\u0753\x03\x02\x02\x02\u0753\u0755" +
		"\x07c\x02\x02\u0754\u0756\x07\xDD\x02\x02\u0755\u0754\x03\x02\x02\x02" +
		"\u0755\u0756\x03\x02\x02\x02\u0756\u0757\x03\x02\x02\x02\u0757\u07FB\x05" +
		"\xCAf\x19\u0758\u075A\f\x17\x02\x02\u0759\u075B\x07\xDD\x02\x02\u075A" +
		"\u0759\x03\x02\x02\x02\u075A\u075B\x03\x02\x02\x02\u075B\u075C\x03\x02" +
		"\x02\x02\u075C\u075E\x07\xC0\x02\x02\u075D\u075F\x07\xDD\x02\x02\u075E" +
		"\u075D\x03\x02\x02\x02\u075E\u075F\x03\x02\x02\x02\u075F\u0760\x03\x02" +
		"\x02\x02\u0760\u07FB\x05\xCAf\x18\u0761\u0763\f\x16\x02\x02\u0762\u0764" +
		"\x07\xDD\x02\x02\u0763\u0762\x03\x02\x02\x02\u0763\u0764\x03\x02\x02\x02" +
		"\u0764\u0765\x03\x02\x02\x02\u0765\u0767\x07\xC2\x02\x02\u0766\u0768\x07" +
		"\xDD\x02\x02\u0767\u0766\x03\x02\x02\x02\u0767\u0768\x03\x02\x02\x02\u0768" +
		"\u0769\x03\x02\x02\x02\u0769\u07FB\x05\xCAf\x17\u076A\u076C\f\x15\x02" +
		"\x02\u076B\u076D\x07\xDD\x02\x02\u076C\u076B\x03\x02\x02\x02\u076C\u076D" +
		"\x03\x02\x02\x02\u076D\u076E\x03\x02\x02\x02\u076E\u0770\x07\xC1\x02\x02" +
		"\u076F\u0771\x07\xDD\x02\x02\u0770\u076F\x03\x02\x02\x02\u0770\u0771\x03" +
		"\x02\x02\x02\u0771\u0772\x03\x02\x02\x02\u0772\u07FB\x05\xCAf\x16\u0773" +
		"\u0775\f\x14\x02\x02\u0774\u0776\x07\xDD\x02\x02\u0775\u0774\x03\x02\x02" +
		"\x02\u0775\u0776\x03\x02\x02\x02\u0776\u0777\x03\x02\x02\x02\u0777\u0779" +
		"\x07\xC4\x02\x02\u0778\u077A\x07\xDD\x02\x02\u0779\u0778\x03\x02\x02\x02" +
		"\u0779\u077A\x03\x02\x02\x02\u077A\u077B\x03\x02\x02\x02\u077B\u07FB\x05" +
		"\xCAf\x15\u077C\u077E\f\x13\x02\x02\u077D\u077F\x07\xDD\x02\x02\u077E" +
		"\u077D\x03\x02\x02\x02\u077E\u077F\x03\x02\x02\x02\u077F\u0780\x03\x02" +
		"\x02\x02\u0780\u0782\x07\xC8\x02\x02\u0781\u0783\x07\xDD\x02\x02\u0782" +
		"\u0781\x03\x02\x02\x02\u0782\u0783\x03\x02\x02\x02\u0783\u0784\x03\x02" +
		"\x02\x02\u0784\u07FB\x05\xCAf\x14\u0785\u0787\f\x12\x02\x02\u0786\u0788" +
		"\x07\xDD\x02\x02\u0787\u0786\x03\x02\x02\x02\u0787\u0788\x03\x02\x02\x02" +
		"\u0788\u0789\x03\x02\x02\x02\u0789\u078B\x07\xBF\x02\x02\u078A\u078C\x07" +
		"\xDD\x02\x02\u078B\u078A\x03\x02\x02\x02\u078B\u078C\x03\x02\x02\x02\u078C" +
		"\u078D\x03\x02\x02\x02\u078D\u07FB\x05\xCAf\x13\u078E\u0790\f\x11\x02" +
		"\x02\u078F\u0791\x07\xDD\x02\x02\u0790\u078F\x03\x02\x02\x02\u0790\u0791" +
		"\x03\x02\x02\x02\u0791\u0792\x03\x02\x02\x02\u0792\u0794\x07\xCB\x02\x02" +
		"\u0793\u0795\x07\xDD\x02\x02\u0794\u0793\x03\x02\x02\x02\u0794\u0795\x03" +
		"\x02\x02\x02\u0795\u0796\x03\x02\x02\x02\u0796\u07FB\x05\xCAf\x12\u0797" +
		"\u0799\f\x0E\x02\x02\u0798\u079A\x07\xDD\x02\x02\u0799\u0798\x03\x02\x02" +
		"\x02\u0799\u079A\x03\x02\x02\x02\u079A\u079B\x03\x02\x02\x02\u079B\u079D" +
		"\x07\xBE\x02\x02\u079C\u079E\x07\xDD\x02\x02\u079D\u079C\x03\x02\x02\x02" +
		"\u079D\u079E\x03\x02\x02\x02\u079E\u079F\x03\x02\x02\x02\u079F\u07FB\x05" +
		"\xCAf\x0F\u07A0\u07A2\f\r\x02\x02\u07A1\u07A3\x07\xDD\x02\x02\u07A2\u07A1" +
		"\x03\x02\x02\x02\u07A2\u07A3\x03\x02\x02\x02\u07A3\u07A4\x03\x02\x02\x02" +
		"\u07A4\u07A6\x07\xC7\x02\x02\u07A5\u07A7\x07\xDD\x02\x02\u07A6\u07A5\x03" +
		"\x02\x02\x02\u07A6\u07A7\x03\x02\x02\x02\u07A7\u07A8\x03\x02\x02\x02\u07A8" +
		"\u07FB\x05\xCAf\x0E\u07A9\u07AB\f\f\x02\x02\u07AA\u07AC\x07\xDD\x02\x02" +
		"\u07AB\u07AA\x03\x02\x02\x02\u07AB\u07AC\x03\x02\x02\x02\u07AC\u07AD\x03" +
		"\x02\x02\x02\u07AD\u07AF\x07q\x02\x02\u07AE\u07B0\x07\xDD\x02\x02\u07AF" +
		"\u07AE\x03\x02\x02\x02\u07AF\u07B0\x03\x02\x02\x02\u07B0\u07B1\x03\x02" +
		"\x02\x02\u07B1\u07FB\x05\xCAf\r\u07B2\u07B4\f\v\x02\x02\u07B3\u07B5\x07" +
		"\xDD\x02\x02\u07B4\u07B3\x03\x02\x02\x02\u07B4\u07B5\x03\x02\x02\x02\u07B5" +
		"\u07B6\x03\x02\x02\x02\u07B6\u07B8\x07\xC9\x02\x02\u07B7\u07B9\x07\xDD" +
		"\x02\x02\u07B8\u07B7\x03\x02\x02\x02\u07B8\u07B9\x03\x02\x02\x02\u07B9" +
		"\u07BA\x03\x02\x02\x02\u07BA\u07FB\x05\xCAf\f\u07BB\u07BD\f\n\x02\x02" +
		"\u07BC\u07BE\x07\xDD\x02\x02\u07BD\u07BC\x03\x02\x02\x02\u07BD\u07BE\x03" +
		"\x02\x02\x02\u07BE\u07BF\x03\x02\x02\x02\u07BF\u07C1\x07\xC5\x02\x02\u07C0" +
		"\u07C2\x07\xDD\x02\x02\u07C1\u07C0\x03\x02\x02\x02\u07C1\u07C2\x03\x02" +
		"\x02\x02\u07C2\u07C3\x03\x02\x02\x02\u07C3\u07FB\x05\xCAf\v\u07C4\u07C6" +
		"\f\t\x02\x02\u07C5\u07C7\x07\xDD\x02\x02\u07C6\u07C5\x03\x02\x02\x02\u07C6" +
		"\u07C7\x03\x02\x02\x02\u07C7\u07C8\x03\x02\x02\x02\u07C8\u07CA\x07\xBC" +
		"\x02\x02\u07C9\u07CB\x07\xDD\x02\x02\u07CA\u07C9\x03\x02\x02\x02\u07CA" +
		"\u07CB\x03\x02\x02\x02\u07CB\u07CC\x03\x02\x02\x02\u07CC\u07FB\x05\xCA" +
		"f\n\u07CD\u07CF\f\b\x02\x02\u07CE\u07D0\x07\xDD\x02\x02\u07CF\u07CE\x03" +
		"\x02\x02\x02\u07CF\u07D0\x03\x02\x02\x02\u07D0\u07D1\x03\x02\x02\x02\u07D1" +
		"\u07D3\x07U\x02\x02\u07D2\u07D4\x07\xDD\x02\x02\u07D3\u07D2\x03\x02\x02" +
		"\x02\u07D3\u07D4\x03\x02\x02\x02\u07D4\u07D5\x03\x02\x02\x02\u07D5\u07FB" +
		"\x05\xCAf\t\u07D6\u07D8\f\x07\x02\x02\u07D7\u07D9\x07\xDD\x02\x02\u07D8" +
		"\u07D7\x03\x02\x02\x02\u07D8\u07D9\x03\x02\x02\x02\u07D9\u07DA\x03\x02" +
		"\x02\x02\u07DA\u07DC\x07B\x02\x02\u07DB\u07DD\x07\xDD\x02\x02\u07DC\u07DB" +
		"\x03\x02\x02\x02\u07DC\u07DD\x03\x02\x02\x02\u07DD\u07DE\x03\x02\x02\x02" +
		"\u07DE\u07FB\x05\xCAf\b\u07DF\u07E1\f\x06\x02\x02\u07E0\u07E2\x07\xDD" +
		"\x02\x02\u07E1\u07E0\x03\x02\x02\x02\u07E1\u07E2\x03\x02\x02\x02\u07E2" +
		"\u07E3\x03\x02\x02\x02\u07E3\u07E5\x07\xBB\x02\x02\u07E4\u07E6\x07\xDD" +
		"\x02\x02\u07E5\u07E4\x03\x02\x02\x02\u07E5\u07E6\x03\x02\x02\x02\u07E6" +
		"\u07E7\x03\x02\x02\x02\u07E7\u07FB\x05\xCAf\x07\u07E8\u07EA\f\x05\x02" +
		"\x02\u07E9\u07EB\x07\xDD\x02\x02\u07EA\u07E9\x03\x02\x02\x02\u07EA\u07EB" +
		"\x03\x02\x02\x02\u07EB\u07EC\x03\x02\x02\x02\u07EC\u07EE\x07\x81\x02\x02" +
		"\u07ED\u07EF\x07\xDD\x02\x02\u07EE\u07ED\x03\x02\x02\x02\u07EE\u07EF\x03" +
		"\x02\x02\x02\u07EF\u07F0\x03\x02\x02\x02\u07F0\u07FB\x05\xCAf\x06\u07F1" +
		"\u07F3\f\x04\x02";
	private static readonly _serializedATNSegment4: string =
		"\x02\u07F2\u07F4\x07\xDD\x02\x02\u07F3\u07F2\x03\x02\x02\x02\u07F3\u07F4" +
		"\x03\x02\x02\x02\u07F4\u07F5\x03\x02\x02\x02\u07F5\u07F7\x07\x0E\x02\x02" +
		"\u07F6\u07F8\x07\xDD\x02\x02\u07F7\u07F6\x03\x02\x02\x02\u07F7\u07F8\x03" +
		"\x02\x02\x02\u07F8\u07F9\x03\x02\x02\x02\u07F9\u07FB\x05\xCAf\x05\u07FA" +
		"\u0746\x03\x02\x02\x02\u07FA\u074F\x03\x02\x02\x02\u07FA\u0758\x03\x02" +
		"\x02\x02\u07FA\u0761\x03\x02\x02\x02\u07FA\u076A\x03\x02\x02\x02\u07FA" +
		"\u0773\x03\x02\x02\x02\u07FA\u077C\x03\x02\x02\x02\u07FA\u0785\x03\x02" +
		"\x02\x02\u07FA\u078E\x03\x02\x02\x02\u07FA\u0797\x03\x02\x02\x02\u07FA" +
		"\u07A0\x03\x02\x02\x02\u07FA\u07A9\x03\x02\x02\x02\u07FA\u07B2\x03\x02" +
		"\x02\x02\u07FA\u07BB\x03\x02\x02\x02\u07FA\u07C4\x03\x02\x02\x02\u07FA" +
		"\u07CD\x03\x02\x02\x02\u07FA\u07D6\x03\x02\x02\x02\u07FA\u07DF\x03\x02" +
		"\x02\x02\u07FA\u07E8\x03\x02\x02\x02\u07FA\u07F1\x03\x02\x02\x02\u07FB" +
		"\u07FE\x03\x02\x02\x02\u07FC\u07FA\x03\x02\x02\x02\u07FC\u07FD\x03\x02" +
		"\x02\x02\u07FD\xCB\x03\x02\x02\x02\u07FE\u07FC\x03\x02\x02\x02\u07FF\u0803" +
		"\x072\x02\x02\u0800\u0803\x07\xA3\x02\x02\u0801\u0803\x05\u011C\x8F\x02" +
		"\u0802\u07FF\x03\x02\x02\x02\u0802\u0800\x03\x02\x02\x02\u0802\u0801\x03" +
		"\x02\x02\x02\u0803\u0804\x03\x02\x02\x02\u0804\u0807\x07\xDD\x02\x02\u0805" +
		"\u0806\x07\xB9\x02\x02\u0806\u0808\x07\xDD\x02\x02\u0807\u0805\x03\x02" +
		"\x02\x02\u0807\u0808\x03\x02\x02\x02\u0808\u0809\x03\x02\x02\x02\u0809" +
		"\u080A\x05\xCEh\x02\u080A\xCD\x03\x02\x02\x02\u080B\u0816\x05\xD0i\x02" +
		"\u080C\u080E\x07\xDD\x02\x02\u080D\u080C\x03\x02\x02\x02\u080D\u080E\x03" +
		"\x02\x02\x02\u080E\u080F\x03\x02\x02\x02\u080F\u0811\x07\x03\x02\x02\u0810" +
		"\u0812\x07\xDD\x02\x02\u0811\u0810\x03\x02\x02\x02\u0811\u0812\x03\x02" +
		"\x02\x02\u0812\u0813\x03\x02\x02\x02\u0813\u0815\x05\xD0i\x02\u0814\u080D" +
		"\x03\x02\x02\x02\u0815\u0818\x03\x02\x02\x02\u0816\u0814\x03\x02\x02\x02" +
		"\u0816\u0817\x03\x02\x02\x02\u0817\xCF\x03\x02\x02\x02\u0818\u0816\x03" +
		"\x02\x02\x02\u0819\u082B\x05\u0104\x83\x02\u081A\u081C\x07\xDD\x02\x02" +
		"\u081B\u081A\x03\x02\x02\x02\u081B\u081C\x03\x02\x02\x02\u081C\u081D\x03" +
		"\x02\x02\x02\u081D\u081F\x07\xC3\x02\x02\u081E\u0820\x07\xDD\x02\x02\u081F" +
		"\u081E\x03\x02\x02\x02\u081F\u0820\x03\x02\x02\x02\u0820\u0825\x03\x02" +
		"\x02\x02\u0821\u0823\x05\u0100\x81\x02\u0822\u0824\x07\xDD\x02\x02\u0823" +
		"\u0822\x03\x02\x02\x02\u0823\u0824\x03\x02\x02\x02\u0824\u0826\x03\x02" +
		"\x02\x02\u0825\u0821\x03\x02\x02\x02\u0825\u0826\x03\x02\x02\x02\u0826" +
		"\u0827\x03\x02\x02\x02\u0827\u0829\x07\xCC\x02\x02\u0828\u082A\x07\xDD" +
		"\x02\x02\u0829\u0828\x03\x02\x02\x02\u0829\u082A\x03\x02\x02\x02\u082A" +
		"\u082C\x03\x02\x02\x02\u082B\u081B\x03\x02\x02\x02\u082B\u082C\x03\x02" +
		"\x02\x02\u082C\u082E\x03\x02\x02\x02\u082D\u082F\x05\u011A\x8E\x02\u082E" +
		"\u082D\x03\x02\x02\x02\u082E\u082F\x03\x02\x02\x02\u082F\u0832\x03\x02" +
		"\x02\x02\u0830\u0831\x07\xDD\x02\x02\u0831\u0833\x05\u0106\x84\x02\u0832" +
		"\u0830\x03\x02\x02\x02\u0832\u0833\x03\x02\x02\x02\u0833\xD1\x03\x02\x02" +
		"\x02\u0834\u0835\x07\xB6\x02\x02\u0835\u0836\x07\xDD\x02\x02\u0836\u0837" +
		"\x05\xCAf\x02\u0837\u0839\x05\u0126\x94\x02\u0838\u083A\x05\x1C\x0F\x02" +
		"\u0839\u0838\x03\x02\x02\x02\u0839\u083A\x03\x02\x02\x02\u083A\u083B\x03" +
		"\x02\x02\x02\u083B\u083C\x07\xB5\x02\x02\u083C\xD3\x03\x02\x02\x02\u083D" +
		"\u083E\x07\xB7\x02\x02\u083E\u083F\x07\xDD\x02\x02\u083F\u0841\x05\xDA" +
		"n\x02\u0840\u0842\x07\xDD\x02\x02\u0841\u0840\x03\x02\x02\x02\u0841\u0842" +
		"\x03\x02\x02\x02\u0842\u0843\x03\x02\x02\x02\u0843\u0845\x07\x03\x02\x02" +
		"\u0844\u0846\x07\xDD\x02\x02\u0845\u0844\x03\x02\x02\x02\u0845\u0846\x03" +
		"\x02\x02\x02\u0846\u0847\x03\x02\x02\x02\u0847\u0848\x05\xCAf\x02\u0848" +
		"\xD5\x03\x02\x02\x02\u0849\u084A\x07\xB8\x02\x02\u084A\u084F\x07\xDD\x02" +
		"\x02\u084B\u0850\x05\xE8u\x02\u084C\u084D\x07t\x02\x02\u084D\u084E\x07" +
		"\xDD\x02\x02\u084E\u0850\x05\u0118\x8D\x02\u084F\u084B\x03\x02\x02\x02" +
		"\u084F\u084C\x03\x02\x02\x02\u0850\u0851\x03\x02\x02\x02\u0851\u0853\x05" +
		"\u0126\x94\x02\u0852\u0854\x05\x1C\x0F\x02\u0853\u0852\x03\x02\x02\x02" +
		"\u0853\u0854\x03\x02\x02\x02\u0854\u0855\x03\x02\x02\x02\u0855\u0856\x07" +
		"?\x02\x02\u0856\xD7\x03\x02\x02\x02\u0857\u0858\x07\xBA\x02\x02\u0858" +
		"\u0859\x07\xDD\x02\x02\u0859\u085B\x05\xDAn\x02\u085A\u085C\x07\xDD\x02" +
		"\x02\u085B\u085A\x03\x02\x02\x02\u085B\u085C\x03\x02\x02\x02\u085C\u085D" +
		"\x03\x02\x02\x02\u085D\u0862\x07\x03\x02\x02\u085E\u0860\x07\xDD\x02\x02" +
		"\u085F\u085E\x03\x02\x02\x02\u085F\u0860\x03\x02\x02\x02\u0860\u0861\x03" +
		"\x02\x02\x02\u0861\u0863\x05\x86D\x02\u0862\u085F\x03\x02\x02\x02\u0862" +
		"\u0863\x03\x02\x02\x02\u0863\xD9\x03\x02\x02\x02\u0864\u0866\x07\x05\x02" +
		"\x02\u0865\u0864\x03\x02\x02\x02\u0865\u0866\x03\x02\x02\x02\u0866\u0867" +
		"\x03\x02\x02\x02\u0867\u0868\x05\xCAf\x02\u0868\xDB\x03\x02\x02\x02\u0869" +
		"\u086C\x05\xDEp\x02\u086A\u086C\x05\xE0q\x02\u086B\u0869\x03\x02\x02\x02" +
		"\u086B\u086A\x03\x02\x02\x02\u086C\xDD\x03\x02\x02\x02\u086D\u086E\x07" +
		"\x1A\x02\x02\u086E\u086F\x07\xDD\x02\x02\u086F\u0871\x05\u0104\x83\x02" +
		"\u0870\u0872\x05\u011A\x8E\x02\u0871\u0870\x03\x02\x02\x02\u0871\u0872" +
		"\x03\x02\x02\x02\u0872\u0880\x03\x02\x02\x02\u0873\u0875\x07\xDD\x02\x02" +
		"\u0874\u0873\x03\x02\x02\x02\u0874\u0875\x03\x02\x02\x02\u0875\u0876\x03" +
		"\x02\x02\x02\u0876\u0878\x07\xC3\x02\x02\u0877\u0879\x07\xDD\x02\x02\u0878" +
		"\u0877\x03\x02\x02\x02\u0878\u0879\x03\x02\x02\x02\u0879\u087A\x03\x02" +
		"\x02\x02\u087A\u087C\x05\xF4{\x02\u087B\u087D\x07\xDD\x02\x02\u087C\u087B" +
		"\x03\x02\x02\x02\u087C\u087D\x03\x02\x02\x02\u087D\u087E\x03\x02\x02\x02" +
		"\u087E\u087F\x07\xCC\x02\x02\u087F\u0881\x03\x02\x02\x02\u0880\u0874\x03" +
		"\x02\x02\x02\u0880\u0881\x03\x02\x02\x02\u0881\u088B\x03\x02\x02\x02\u0882" +
		"\u0884\x07\xDD\x02\x02\u0883\u0882\x03\x02\x02\x02\u0883\u0884\x03\x02" +
		"\x02\x02\u0884\u0885\x03\x02\x02\x02\u0885\u0886\x07\xC3\x02\x02\u0886" +
		"\u0887\x05\u0100\x81\x02\u0887\u0888\x07\xCC\x02\x02\u0888\u088A\x03\x02" +
		"\x02\x02\u0889\u0883\x03\x02\x02\x02\u088A\u088D\x03\x02\x02\x02\u088B" +
		"\u0889\x03\x02\x02\x02\u088B\u088C\x03\x02\x02\x02\u088C\xDF\x03\x02\x02" +
		"\x02\u088D\u088B\x03\x02\x02\x02\u088E\u088F\x07\x1A\x02\x02\u088F\u0891" +
		"\x07\xDD\x02\x02\u0890\u0892\x05\xE8u\x02\u0891\u0890\x03\x02\x02\x02" +
		"\u0891\u0892\x03\x02\x02\x02\u0892\u0893\x03\x02\x02\x02\u0893\u0894\x07" +
		"\x06\x02\x02\u0894\u0896\x05\u0104\x83\x02\u0895\u0897\x05\u011A\x8E\x02" +
		"\u0896\u0895\x03\x02\x02\x02\u0896\u0897\x03\x02\x02\x02\u0897\u08A5\x03" +
		"\x02\x02\x02\u0898\u089A\x07\xDD\x02\x02\u0899\u0898\x03\x02\x02\x02\u0899" +
		"\u089A\x03\x02\x02\x02\u089A\u089B\x03\x02\x02\x02\u089B\u089D\x07\xC3" +
		"\x02\x02\u089C\u089E\x07\xDD\x02\x02\u089D\u089C\x03\x02\x02\x02\u089D" +
		"\u089E\x03\x02\x02\x02\u089E\u089F\x03\x02\x02\x02\u089F\u08A1\x05\xF4" +
		"{\x02\u08A0\u08A2\x07\xDD\x02\x02\u08A1\u08A0\x03\x02\x02\x02\u08A1\u08A2" +
		"\x03\x02\x02\x02\u08A2\u08A3\x03\x02\x02\x02\u08A3\u08A4\x07\xCC\x02\x02" +
		"\u08A4\u08A6\x03\x02\x02\x02\u08A5\u0899\x03\x02\x02\x02\u08A5\u08A6\x03" +
		"\x02\x02\x02\u08A6\u08B0\x03\x02\x02\x02\u08A7\u08A9\x07\xDD\x02\x02\u08A8" +
		"\u08A7\x03\x02\x02\x02\u08A8\u08A9\x03\x02\x02\x02\u08A9\u08AA\x03\x02" +
		"\x02\x02\u08AA\u08AB\x07\xC3\x02\x02\u08AB\u08AC\x05\u0100\x81\x02\u08AC" +
		"\u08AD\x07\xCC\x02\x02\u08AD\u08AF\x03\x02\x02\x02\u08AE\u08A8\x03\x02" +
		"\x02\x02\u08AF\u08B2\x03\x02\x02\x02\u08B0\u08AE\x03\x02\x02\x02\u08B0" +
		"\u08B1\x03\x02\x02\x02\u08B1\xE1\x03\x02\x02\x02\u08B2\u08B0\x03\x02\x02" +
		"\x02\u08B3\u08B6\x05\xE4s\x02\u08B4\u08B6\x05\xE6t\x02\u08B5\u08B3\x03" +
		"\x02\x02\x02\u08B5\u08B4\x03\x02\x02\x02\u08B6\xE3\x03\x02\x02\x02\u08B7" +
		"\u08B9\x05\xE8u\x02\u08B8\u08B7\x03\x02\x02\x02\u08B8\u08B9\x03\x02\x02" +
		"\x02\u08B9\u08BA\x03\x02\x02\x02\u08BA\u08BB\x07\x06\x02\x02\u08BB\u08BD" +
		"\x05\u0104\x83\x02\u08BC\u08BE\x05\u011A\x8E\x02\u08BD\u08BC\x03\x02\x02" +
		"\x02\u08BD\u08BE\x03\x02\x02\x02\u08BE\u08C1\x03\x02\x02\x02\u08BF\u08C0" +
		"\x07\xDD\x02\x02\u08C0\u08C2\x05\xF4{\x02\u08C1\u08BF\x03\x02\x02\x02" +
		"\u08C1\u08C2\x03\x02\x02\x02\u08C2\u08C4\x03\x02\x02\x02\u08C3\u08C5\x05" +
		"\xF8}\x02\u08C4\u08C3\x03\x02\x02\x02\u08C4\u08C5\x03\x02\x02\x02\u08C5" +
		"\u08CF\x03\x02\x02\x02\u08C6\u08C8\x07\xDD\x02\x02\u08C7\u08C6\x03\x02" +
		"\x02\x02\u08C7\u08C8\x03\x02\x02\x02\u08C8\u08C9\x03\x02\x02\x02\u08C9" +
		"\u08CA\x07\xC3\x02\x02\u08CA\u08CB\x05\u0100\x81\x02\u08CB\u08CC\x07\xCC" +
		"\x02\x02\u08CC\u08CE\x03\x02\x02\x02\u08CD\u08C7\x03\x02\x02\x02\u08CE" +
		"\u08D1\x03\x02\x02\x02\u08CF\u08CD\x03\x02\x02\x02\u08CF\u08D0\x03\x02" +
		"\x02\x02\u08D0\xE5\x03\x02\x02\x02\u08D1\u08CF\x03\x02\x02\x02\u08D2\u08D5" +
		"\x05\u010A\x86\x02\u08D3\u08D4\x07\xDD\x02\x02\u08D4\u08D6\x05\xF4{\x02" +
		"\u08D5\u08D3\x03\x02\x02\x02\u08D5\u08D6\x03\x02\x02\x02\u08D6\u08E0\x03" +
		"\x02\x02\x02\u08D7\u08D9\x07\xDD\x02\x02\u08D8\u08D7\x03\x02\x02\x02\u08D8" +
		"\u08D9\x03\x02\x02\x02\u08D9\u08DA\x03\x02\x02\x02\u08DA\u08DB\x07\xC3" +
		"\x02\x02\u08DB\u08DC\x05\u0100\x81\x02\u08DC\u08DD\x07\xCC\x02\x02\u08DD" +
		"\u08DF\x03\x02\x02\x02\u08DE\u08D8\x03\x02\x02\x02\u08DF\u08E2\x03\x02" +
		"\x02\x02\u08E0\u08DE\x03\x02\x02\x02\u08E0\u08E1\x03\x02\x02\x02\u08E1" +
		"\xE7\x03\x02\x02\x02\u08E2\u08E0\x03\x02\x02\x02\u08E3\u08E8\x05\xEEx" +
		"\x02\u08E4\u08E8\x05\xEAv\x02\u08E5\u08E8\x05\xECw\x02\u08E6\u08E8\x05" +
		"\xF2z\x02\u08E7\u08E3\x03\x02\x02\x02\u08E7\u08E4\x03\x02\x02\x02\u08E7" +
		"\u08E5\x03\x02\x02\x02\u08E7\u08E6\x03\x02\x02\x02\u08E8\xE9\x03\x02\x02" +
		"\x02\u08E9\u08EB\x05\u0104\x83\x02\u08EA\u08EC\x05\u011A\x8E\x02\u08EB" +
		"\u08EA\x03\x02\x02\x02\u08EB\u08EC\x03\x02\x02\x02\u08EC\u08EE\x03\x02" +
		"\x02\x02\u08ED\u08EF\x05\xF8}\x02\u08EE\u08ED\x03\x02\x02\x02\u08EE\u08EF" +
		"\x03\x02\x02\x02\u08EF\u08F9\x03\x02\x02\x02\u08F0\u08F2\x07\xDD\x02\x02" +
		"\u08F1\u08F0\x03\x02\x02\x02\u08F1\u08F2\x03\x02\x02\x02\u08F2\u08F3\x03" +
		"\x02\x02\x02\u08F3\u08F4\x07\xC3\x02\x02\u08F4\u08F5\x05\u0100\x81\x02" +
		"\u08F5\u08F6\x07\xCC\x02\x02\u08F6\u08F8\x03\x02\x02\x02\u08F7\u08F1\x03" +
		"\x02\x02\x02\u08F8\u08FB\x03\x02\x02\x02\u08F9\u08F7\x03\x02\x02\x02\u08F9" +
		"\u08FA\x03\x02\x02\x02\u08FA\xEB\x03\x02\x02\x02\u08FB\u08F9\x03\x02\x02" +
		"\x02\u08FC\u08FF\x05\u0104\x83\x02\u08FD\u08FF\x05\u0108\x85\x02\u08FE" +
		"\u08FC\x03\x02\x02\x02\u08FE\u08FD\x03\x02\x02\x02\u08FF\u0901\x03\x02" +
		"\x02\x02\u0900\u0902\x05\u011A\x8E\x02\u0901\u0900\x03\x02\x02\x02\u0901" +
		"\u0902\x03\x02\x02\x02\u0902\u0904\x03\x02\x02\x02\u0903\u0905\x07\xDD" +
		"\x02\x02\u0904\u0903\x03\x02\x02\x02\u0904\u0905\x03\x02\x02\x02\u0905" +
		"\u0906\x03\x02\x02\x02\u0906\u0908\x07\xC3\x02\x02\u0907\u0909\x07\xDD" +
		"\x02\x02\u0908\u0907\x03\x02\x02\x02\u0908\u0909\x03\x02\x02\x02\u0909" +
		"\u090E\x03\x02\x02\x02\u090A\u090C\x05\xF4{\x02\u090B\u090D\x07\xDD\x02" +
		"\x02\u090C\u090B\x03\x02\x02\x02\u090C\u090D\x03\x02\x02\x02\u090D\u090F" +
		"\x03\x02\x02\x02\u090E\u090A\x03\x02\x02\x02\u090E\u090F\x03\x02\x02\x02" +
		"\u090F\u0910\x03\x02\x02\x02\u0910\u0912\x07\xCC\x02\x02\u0911\u0913\x05" +
		"\xF8}\x02\u0912\u0911\x03\x02\x02\x02\u0912\u0913\x03\x02\x02\x02\u0913" +
		"\u091D\x03\x02\x02\x02\u0914\u0916\x07\xDD\x02\x02\u0915\u0914\x03\x02" +
		"\x02\x02\u0915\u0916\x03\x02\x02\x02\u0916\u0917\x03\x02\x02\x02\u0917" +
		"\u0918\x07\xC3\x02\x02\u0918\u0919\x05\u0100\x81\x02\u0919\u091A\x07\xCC" +
		"\x02\x02\u091A\u091C\x03\x02\x02\x02\u091B\u0915\x03\x02\x02\x02\u091C" +
		"\u091F\x03\x02\x02\x02\u091D\u091B\x03\x02\x02\x02\u091D\u091E\x03\x02" +
		"\x02\x02\u091E\xED\x03\x02\x02\x02\u091F\u091D\x03\x02\x02\x02\u0920\u0923" +
		"\x05\xEAv\x02\u0921\u0923\x05\xECw\x02\u0922\u0920\x03\x02\x02\x02\u0922" +
		"\u0921\x03\x02\x02\x02\u0922\u0923\x03\x02\x02\x02\u0923\u0925\x03\x02" +
		"\x02\x02\u0924\u0926\x05\xF0y\x02\u0925\u0924\x03\x02\x02\x02\u0926\u0927" +
		"\x03\x02\x02\x02\u0927\u0925\x03\x02\x02\x02\u0927\u0928\x03\x02\x02\x02" +
		"\u0928\u092A\x03\x02\x02\x02\u0929\u092B\x05\xF8}\x02\u092A\u0929\x03" +
		"\x02\x02\x02\u092A\u092B\x03\x02\x02\x02\u092B\u0935\x03\x02\x02\x02\u092C" +
		"\u092E\x07\xDD\x02\x02\u092D\u092C\x03\x02\x02\x02\u092D\u092E\x03\x02" +
		"\x02\x02\u092E\u092F\x03\x02\x02\x02\u092F\u0930\x07\xC3\x02\x02\u0930" +
		"\u0931\x05\u0100\x81\x02\u0931\u0932\x07\xCC\x02\x02\u0932\u0934\x03\x02" +
		"\x02\x02\u0933\u092D\x03\x02\x02\x02\u0934\u0937\x03\x02\x02\x02\u0935" +
		"\u0933\x03\x02\x02\x02\u0935\u0936\x03\x02\x02\x02\u0936\xEF\x03\x02\x02" +
		"\x02\u0937\u0935\x03\x02\x02\x02\u0938\u093B\t\r\x02\x02\u0939\u093C\x05" +
		"\xEAv\x02\u093A\u093C\x05\xECw\x02\u093B\u0939\x03\x02\x02\x02\u093B\u093A" +
		"\x03\x02\x02\x02\u093C\xF1\x03\x02\x02\x02\u093D\u093E\x05\xF8}\x02\u093E" +
		"\xF3\x03\x02\x02\x02\u093F\u0941\x05\xF6|\x02\u0940\u093F\x03\x02\x02" +
		"\x02\u0940\u0941\x03\x02\x02\x02\u0941\u0943\x03\x02\x02\x02\u0942\u0944" +
		"\x07\xDD\x02\x02\u0943\u0942\x03\x02\x02\x02\u0943\u0944\x03\x02\x02\x02" +
		"\u0944\u0945\x03\x02\x02\x02\u0945\u0947\t\v\x02\x02\u0946\u0948\x07\xDD" +
		"\x02\x02\u0947\u0946\x03\x02\x02\x02\u0947\u0948\x03\x02\x02\x02\u0948" +
		"\u094A\x03\x02\x02\x02\u0949\u0940\x03\x02\x02\x02\u094A\u094D\x03\x02" +
		"\x02\x02\u094B\u0949\x03\x02\x02\x02\u094B\u094C\x03\x02\x02\x02\u094C" +
		"\u094E\x03\x02\x02\x02\u094D\u094B\x03\x02\x02\x02\u094E\u095B\x05\xF6" +
		"|\x02\u094F\u0951\x07\xDD\x02\x02\u0950\u094F\x03\x02\x02\x02\u0950\u0951" +
		"\x03\x02\x02\x02\u0951\u0952\x03\x02\x02\x02\u0952\u0954\t\v\x02\x02\u0953" +
		"\u0955\x07\xDD\x02\x02\u0954\u0953\x03\x02\x02\x02\u0954\u0955\x03\x02" +
		"\x02\x02\u0955\u0957\x03\x02\x02\x02\u0956\u0958\x05\xF6|\x02\u0957\u0956" +
		"\x03\x02\x02\x02\u0957\u0958\x03\x02\x02\x02\u0958\u095A\x03\x02\x02\x02" +
		"\u0959\u0950\x03\x02\x02\x02\u095A\u095D\x03\x02\x02\x02\u095B\u0959\x03" +
		"\x02\x02\x02\u095B\u095C\x03\x02\x02\x02\u095C\xF5\x03\x02\x02\x02\u095D" +
		"\u095B\x03\x02\x02\x02\u095E\u0960\x07\xC3\x02\x02\u095F\u095E\x03\x02" +
		"\x02\x02\u095F\u0960\x03\x02\x02\x02\u0960\u0963\x03\x02\x02\x02\u0961" +
		"\u0962\t\x0E\x02\x02\u0962\u0964\x07\xDD\x02\x02\u0963\u0961\x03\x02\x02" +
		"\x02\u0963\u0964\x03\x02\x02\x02\u0964\u0966\x03\x02\x02\x02\u0965\u0967" +
		"\x07\xCC\x02\x02\u0966\u0965\x03\x02\x02\x02\u0966\u0967\x03\x02\x02\x02" +
		"\u0967\u0968\x03\x02\x02\x02\u0968\u0969\x05\xCAf\x02\u0969\xF7\x03\x02" +
		"\x02\x02\u096A\u096B\x07\x07\x02\x02\u096B\u096D\x05\u0104\x83\x02\u096C" +
		"\u096E\x05\u011A\x8E\x02\u096D\u096C\x03\x02\x02\x02\u096D\u096E\x03\x02" +
		"\x02\x02\u096E\xF9\x03\x02\x02\x02\u096F\u0981\x07\xC3\x02\x02\u0970\u0972" +
		"\x07\xDD\x02\x02\u0971\u0970\x03\x02\x02\x02\u0971\u0972\x03\x02\x02\x02" +
		"\u0972\u0973\x03\x02\x02\x02\u0973\u097E\x05\xFC\x7F\x02\u0974\u0976\x07" +
		"\xDD\x02\x02\u0975\u0974\x03\x02\x02\x02\u0975\u0976\x03\x02\x02\x02\u0976" +
		"\u0977\x03\x02\x02\x02\u0977\u0979\x07\x03\x02\x02\u0978\u097A\x07\xDD" +
		"\x02\x02\u0979\u0978\x03\x02\x02\x02\u0979\u097A\x03\x02\x02\x02\u097A" +
		"\u097B\x03\x02\x02\x02\u097B\u097D\x05\xFC\x7F\x02\u097C\u0975\x03\x02" +
		"\x02\x02\u097D\u0980\x03\x02\x02\x02\u097E\u097C\x03\x02\x02\x02\u097E" +
		"\u097F\x03\x02\x02\x02\u097F\u0982\x03\x02\x02\x02\u0980\u097E\x03\x02" +
		"\x02\x02\u0981\u0971\x03\x02\x02\x02\u0981\u0982\x03\x02\x02\x02\u0982" +
		"\u0984\x03\x02\x02\x02\u0983\u0985\x07\xDD\x02\x02\u0984\u0983\x03\x02" +
		"\x02\x02\u0984\u0985\x03\x02\x02\x02\u0985\u0986\x03\x02\x02\x02\u0986" +
		"\u0987\x07\xCC\x02\x02\u0987\xFB\x03\x02\x02\x02\u0988\u0989\x07|\x02" +
		"\x02\u0989\u098B\x07\xDD\x02\x02\u098A\u0988\x03\x02\x02\x02\u098A\u098B" +
		"\x03\x02\x02\x02\u098B\u098E\x03\x02\x02\x02\u098C\u098D\t\x0F\x02\x02" +
		"\u098D\u098F\x07\xDD\x02\x02\u098E\u098C\x03\x02\x02\x02\u098E\u098F\x03" +
		"\x02\x02\x02\u098F\u0992\x03\x02\x02\x02\u0990\u0991\x07\x83\x02\x02\u0991" +
		"\u0993\x07\xDD\x02\x02\u0992\u0990\x03\x02\x02\x02\u0992\u0993\x03\x02" +
		"\x02\x02\u0993\u0994\x03\x02\x02\x02\u0994\u0996\x05\u0104\x83\x02\u0995" +
		"\u0997\x05\u011A\x8E\x02\u0996\u0995\x03\x02\x02\x02\u0996\u0997\x03\x02" +
		"\x02\x02\u0997\u09A0\x03\x02\x02\x02\u0998\u099A\x07\xDD\x02\x02\u0999" +
		"\u0998\x03\x02\x02\x02\u0999\u099A\x03\x02\x02\x02\u099A\u099B\x03\x02" +
		"\x02\x02\u099B\u099D\x07\xC3\x02\x02\u099C\u099E\x07\xDD\x02\x02\u099D" +
		"\u099C\x03\x02\x02\x02\u099D\u099E\x03\x02\x02\x02\u099E\u099F\x03\x02" +
		"\x02\x02\u099F\u09A1\x07\xCC\x02\x02\u09A0\u0999\x03\x02\x02\x02\u09A0" +
		"\u09A1\x03\x02\x02\x02\u09A1\u09A6\x03\x02\x02\x02\u09A2\u09A4\x07\xDD" +
		"\x02\x02\u09A3\u09A2\x03\x02\x02\x02\u09A3\u09A4\x03\x02\x02\x02\u09A4" +
		"\u09A5\x03\x02\x02\x02\u09A5\u09A7\x05\u0106\x84\x02\u09A6\u09A3\x03\x02" +
		"\x02\x02\u09A6\u09A7\x03\x02\x02\x02\u09A7\u09AC\x03\x02\x02\x02\u09A8" +
		"\u09AA\x07\xDD\x02\x02\u09A9\u09A8\x03\x02\x02\x02\u09A9\u09AA\x03\x02" +
		"\x02\x02\u09AA\u09AB\x03\x02\x02\x02\u09AB\u09AD\x05\xFE\x80\x02\u09AC" +
		"\u09A9\x03\x02\x02\x02\u09AC\u09AD\x03\x02\x02\x02\u09AD\xFD\x03\x02\x02" +
		"\x02\u09AE\u09B0\x07\xBF\x02\x02\u09AF\u09B1\x07\xDD\x02\x02\u09B0\u09AF" +
		"\x03\x02\x02\x02\u09B0\u09B1\x03\x02\x02\x02\u09B1\u09B2\x03\x02\x02\x02" +
		"\u09B2\u09B3\x05\xCAf\x02\u09B3\xFF\x03\x02\x02\x02\u09B4\u09BF\x05\u0102" +
		"\x82\x02\u09B5\u09B7\x07\xDD\x02\x02\u09B6\u09B5\x03\x02\x02\x02\u09B6" +
		"\u09B7\x03\x02\x02\x02\u09B7\u09B8\x03\x02\x02\x02\u09B8\u09BA\x07\x03" +
		"\x02\x02\u09B9\u09BB\x07\xDD\x02\x02\u09BA\u09B9\x03\x02\x02\x02\u09BA" +
		"\u09BB\x03\x02\x02\x02\u09BB\u09BC\x03\x02\x02\x02\u09BC\u09BE\x05\u0102" +
		"\x82\x02\u09BD\u09B6\x03\x02\x02\x02\u09BE\u09C1\x03\x02\x02\x02\u09BF" +
		"\u09BD\x03\x02\x02\x02\u09BF\u09C0\x03\x02\x02\x02\u09C0\u0101\x03\x02" +
		"\x02\x02\u09C1\u09BF\x03\x02\x02\x02\u09C2\u09C3\x05\xCAf\x02\u09C3\u09C4" +
		"\x07\xDD\x02\x02\u09C4\u09C5\x07\xAC\x02\x02\u09C5\u09C6\x07\xDD\x02\x02" +
		"\u09C6\u09C8\x03\x02\x02\x02\u09C7\u09C2\x03\x02\x02\x02\u09C7\u09C8\x03" +
		"\x02\x02\x02\u09C8\u09C9\x03\x02\x02\x02\u09C9\u09CA\x05\xCAf\x02\u09CA" +
		"\u0103\x03\x02\x02\x02\u09CB\u09CE\x07\xDE\x02\x02\u09CC\u09CE\x05\u011E" +
		"\x90\x02\u09CD\u09CB\x03\x02\x02\x02\u09CD\u09CC\x03\x02\x02\x02\u09CE" +
		"\u09CF\x03\x02\x02\x02\u09CF\u09CD\x03\x02\x02\x02\u09CF\u09D0\x03\x02" +
		"\x02\x02\u09D0\u0105\x03\x02\x02\x02\u09D1\u09D3\x07\x12\x02\x02\u09D2" +
		"\u09D4\x07\xDD\x02\x02\u09D3\u09D2\x03\x02\x02\x02\u09D3\u09D4\x03\x02" +
		"\x02\x02\u09D4\u09D7\x03\x02\x02\x02\u09D5\u09D6\x07t\x02\x02\u09D6\u09D8" +
		"\x07\xDD\x02\x02\u09D7\u09D5\x03\x02\x02\x02\u09D7\u09D8\x03\x02\x02\x02" +
		"\u09D8\u09D9\x03\x02\x02\x02\u09D9\u09DE\x05\u0118\x8D\x02\u09DA\u09DC" +
		"\x07\xDD\x02\x02\u09DB\u09DA\x03\x02\x02\x02\u09DB\u09DC\x03\x02\x02\x02" +
		"\u09DC\u09DD\x03\x02\x02\x02\u09DD\u09DF\x05\u0110\x89\x02\u09DE\u09DB" +
		"\x03\x02\x02\x02\u09DE\u09DF\x03\x02\x02\x02\u09DF\u0107\x03\x02\x02\x02" +
		"\u09E0\u09F5\x07\x16\x02\x02\u09E1\u09F5\x07\x19\x02\x02\u09E2\u09F5\x07" +
		" \x02\x02\u09E3\u09F5\x07#\x02\x02\u09E4\u09F5\x074\x02\x02\u09E5\u09F5" +
		"\x07Z\x02\x02\u09E6\u09F5\x07^\x02\x02\u09E7\u09F5\x07\xA1\x02\x02\u09E8" +
		"\u09F1\x07\xA6\x02\x02\u09E9\u09EB\x07\xDD\x02\x02\u09EA\u09E9\x03\x02" +
		"\x02\x02\u09EA\u09EB\x03\x02\x02\x02\u09EB\u09EC\x03\x02\x02\x02\u09EC" +
		"\u09EE\x07\xC7\x02\x02\u09ED\u09EF\x07\xDD\x02\x02\u09EE\u09ED\x03\x02" +
		"\x02\x02\u09EE\u09EF\x03\x02\x02\x02\u09EF\u09F0\x03\x02\x02\x02\u09F0" +
		"\u09F2\x05\xCAf\x02\u09F1\u09EA\x03\x02\x02\x02\u09F1\u09F2\x03\x02\x02" +
		"\x02\u09F2\u09F5\x03\x02\x02\x02\u09F3\u09F5\x07\xB3\x02\x02\u09F4\u09E0" +
		"\x03\x02\x02\x02\u09F4\u09E1\x03\x02\x02\x02\u09F4\u09E2\x03\x02\x02\x02" +
		"\u09F4\u09E3\x03\x02\x02\x02\u09F4\u09E4\x03\x02\x02\x02\u09F4\u09E5\x03" +
		"\x02\x02\x02\u09F4\u09E6\x03\x02\x02\x02\u09F4\u09E7\x03\x02\x02\x02\u09F4" +
		"\u09E8\x03\x02\x02\x02\u09F4\u09F3\x03\x02\x02\x02\u09F5\u0109\x03\x02" +
		"\x02\x02\u09F6\u09FB\x07\xDE\x02\x02\u09F7\u09FA\x05\u011E\x90\x02\u09F8" +
		"\u09FA\x07\xDE\x02\x02\u09F9\u09F7\x03\x02\x02\x02\u09F9\u09F8\x03\x02" +
		"\x02\x02\u09FA\u09FD\x03\x02\x02\x02\u09FB\u09F9\x03\x02\x02\x02\u09FB" +
		"\u09FC\x03\x02\x02\x02\u09FC\u0A06\x03\x02\x02\x02\u09FD\u09FB\x03\x02" +
		"\x02\x02\u09FE\u0A01\x05\u011E\x90\x02\u09FF\u0A02\x05\u011E\x90\x02\u0A00" +
		"\u0A02\x07\xDE\x02\x02\u0A01\u09FF\x03\x02\x02\x02\u0A01\u0A00\x03\x02" +
		"\x02\x02\u0A02\u0A03\x03\x02\x02\x02\u0A03\u0A01\x03\x02\x02\x02\u0A03" +
		"\u0A04\x03\x02\x02\x02\u0A04\u0A06\x03\x02\x02\x02\u0A05\u09F6\x03\x02" +
		"\x02\x02\u0A05\u09FE\x03\x02\x02\x02\u0A06\u010B\x03\x02\x02\x02\u0A07" +
		"\u0A08\t\x10\x02\x02\u0A08\u010D\x03\x02\x02\x02\u0A09\u0A0E\x05\u0104" +
		"\x83\x02\u0A0A\u0A0B\t\r\x02\x02\u0A0B\u0A0D\x05\u0104\x83\x02\u0A0C\u0A0A" +
		"\x03\x02\x02\x02\u0A0D\u0A10\x03\x02\x02\x02\u0A0E\u0A0C\x03\x02\x02\x02" +
		"\u0A0E\u0A0F\x03\x02\x02\x02\u0A0F\u010F\x03\x02\x02\x02\u0A10\u0A0E\x03" +
		"\x02\x02\x02\u0A11\u0A13\x07\xC7\x02\x02\u0A12\u0A14\x07\xDD\x02\x02\u0A13" +
		"\u0A12\x03\x02\x02\x02\u0A13\u0A14\x03\x02\x02\x02\u0A14\u0A17\x03\x02" +
		"\x02\x02\u0A15\u0A18\x07\xD3\x02\x02\u0A16\u0A18\x05\u0104\x83\x02\u0A17" +
		"\u0A15\x03\x02\x02\x02\u0A17\u0A16\x03\x02\x02\x02\u0A18\u0111\x03\x02" +
		"\x02\x02\u0A19\u0A22\x05\u010A\x86\x02\u0A1A\u0A1C\x07\xDD\x02\x02\u0A1B" +
		"\u0A1A\x03\x02\x02\x02\u0A1B\u0A1C\x03\x02\x02\x02\u0A1C\u0A1D\x03\x02" +
		"\x02\x02\u0A1D\u0A1F\x07\xC5\x02\x02\u0A1E\u0A20\x07\xDD\x02\x02\u0A1F" +
		"\u0A1E\x03\x02\x02\x02\u0A1F\u0A20\x03\x02\x02\x02\u0A20\u0A21\x03\x02" +
		"\x02\x02\u0A21\u0A23\x05\u010A\x86\x02\u0A22\u0A1B\x03\x02\x02\x02\u0A22" +
		"\u0A23\x03\x02\x02\x02\u0A23\u0113\x03\x02\x02\x02\u0A24\u0A25\x05\u0104" +
		"\x83\x02\u0A25\u0A26\x07\xDB\x02\x02\u0A26\u0115\x03\x02\x02\x02\u0A27" +
		"\u0A28\t\x11\x02\x02\u0A28\u0117\x03\x02\x02\x02\u0A29\u0A2C\x05\u0108" +
		"\x85\x02\u0A2A\u0A2C\x05\u010E\x88\x02\u0A2B\u0A29\x03\x02\x02\x02\u0A2B" +
		"\u0A2A\x03\x02\x02\x02\u0A2C\u0A35\x03\x02\x02\x02\u0A2D\u0A2F\x07\xDD" +
		"\x02\x02\u0A2E\u0A2D\x03\x02\x02\x02\u0A2E\u0A2F\x03\x02\x02\x02\u0A2F" +
		"\u0A30\x03\x02\x02\x02\u0A30\u0A32\x07\xC3\x02\x02\u0A31\u0A33\x07\xDD" +
		"\x02\x02\u0A32\u0A31\x03\x02\x02\x02\u0A32\u0A33\x03\x02\x02\x02\u0A33" +
		"\u0A34\x03\x02\x02\x02\u0A34\u0A36\x07\xCC\x02\x02\u0A35\u0A2E\x03\x02" +
		"\x02\x02\u0A35\u0A36\x03\x02\x02\x02\u0A36\u0119\x03\x02\x02\x02\u0A37" +
		"\u0A38\t\x12\x02\x02\u0A38\u011B\x03\x02\x02\x02\u0A39\u0A3A\t\x13\x02" +
		"\x02\u0A3A\u011D\x03\x02\x02\x02\u0A3B\u0A3C\t\x14\x02\x02\u0A3C\u011F" +
		"\x03\x02\x02\x02\u0A3D\u0A3E\x07\xD8\x02\x02\u0A3E\u0121\x03\x02\x02\x02" +
		"\u0A3F\u0A40\x07\xD9\x02\x02\u0A40\u0123\x03\x02\x02\x02\u0A41\u0A43\x07" +
		"\xDD\x02\x02\u0A42\u0A41\x03\x02\x02\x02\u0A42\u0A43\x03\x02\x02\x02\u0A43" +
		"\u0A47\x03\x02\x02\x02\u0A44\u0A48\x07\xD7\x02\x02\u0A45\u0A48\x05\u0122" +
		"\x92\x02\u0A46\u0A48\x05\u0120\x91\x02\u0A47\u0A44\x03\x02\x02\x02\u0A47" +
		"\u0A45\x03\x02\x02\x02\u0A47\u0A46\x03\x02\x02\x02\u0A48\u0A4A\x03\x02" +
		"\x02\x02\u0A49\u0A4B\x07\xDD\x02\x02\u0A4A\u0A49\x03\x02\x02\x02\u0A4A" +
		"\u0A4B\x03\x02\x02\x02\u0A4B\u0125\x03\x02\x02\x02\u0A4C\u0A55\x05\u0124" +
		"\x93\x02\u0A4D\u0A4F\x07\xDD\x02\x02\u0A4E\u0A4D\x03\x02\x02\x02\u0A4E" +
		"\u0A4F\x03\x02\x02\x02\u0A4F\u0A50\x03\x02\x02\x02\u0A50\u0A52\x07\xDB" +
		"\x02\x02\u0A51\u0A53\x07\xDD\x02\x02\u0A52\u0A51\x03\x02\x02\x02\u0A52" +
		"\u0A53\x03\x02\x02\x02\u0A53\u0A55\x03\x02\x02\x02\u0A54\u0A4C\x03\x02" +
		"\x02\x02\u0A54\u0A4E\x03\x02\x02\x02\u0A55\u0A58\x03\x02\x02\x02\u0A56" +
		"\u0A54\x03\x02\x02\x02\u0A56\u0A57\x03\x02\x02\x02\u0A57\u0127\x03\x02" +
		"\x02\x02\u0A58\u0A56\x03\x02\x02\x02\u01C5\u012C\u0131\u0138\u013B\u013E" +
		"\u0143\u0147\u014C\u0150\u0155\u0159\u015E\u0162\u016E\u0174\u017A\u017E" +
		"\u0184\u018B\u018F\u0195\u019B\u01A1\u01AC\u01B8\u01BC\u01C2\u01C8\u01CE" +
		"\u01D7\u01DD\u01E1\u01E5\u01E9\u01EE\u01F7\u023F\u0245\u0249\u024C\u025C" +
		"\u0260\u0265\u0268\u026D\u0273\u0277\u027C\u0281\u0285\u0288\u028C\u0292" +
		"\u0296\u029D\u02A3\u02A7\u02AA\u02AF\u02B9\u02BC\u02BF\u02C3\u02C9\u02CD" +
		"\u02D2\u02D9\u02DD\u02E1\u02E5\u02E8\u02ED\u02F8\u0305\u030C\u0315\u031C" +
		"\u0320\u0323\u032C\u0331\u033B\u0341\u034B\u034F\u0359\u0361\u0366\u036C" +
		"\u0370\u0373\u0377\u0382\u0386\u038B\u0390\u0394\u0398\u039C\u039F\u03A2" +
		"\u03A5\u03A8\u03AC\u03B4\u03B8\u03BB\u03BE\u03C2\u03D9\u03DF\u03E3\u03E7" +
		"\u03F0\u03FB\u0400\u040A\u040E\u0413\u041B\u041F\u0423\u042B\u042F\u043B" +
		"\u043F\u0446\u0448\u044E\u0452\u0458\u045C\u0460\u0468\u046C\u0472\u047B" +
		"\u047D\u0482\u048B\u048D\u0495\u0497\u049C\u04A0\u04A4\u04BC\u04C6\u04CA" +
		"\u04CF\u04DA\u04DE\u04E3\u04F1\u04F5\u04FE\u0502\u0505\u0509\u050D\u0510" +
		"\u0514\u0518\u051B\u051F\u0522\u0526\u0528\u052D\u0531\u0535\u0539\u053B" +
		"\u0541\u0545\u0548\u054D\u0551\u0557\u055A\u055D\u0561\u0565\u056C\u0570" +
		"\u0576\u0579\u057D\u0584\u0588\u058E\u0591\u0595\u059D\u05A1\u05A4\u05A7" +
		"\u05AB\u05B3\u05B7\u05BB\u05BD\u05C0\u05C5\u05CB\u05CF\u05D3\u05D8\u05DD" +
		"\u05E1\u05E5\u05EA\u05F2\u05F4\u0600\u0604\u060C\u0610\u0618\u061C\u0620" +
		"\u0624\u0628\u062C\u0634\u0638\u0645\u064C\u0650\u065B\u0662\u0667\u066B" +
		"\u0670\u0673\u0679\u067D\u0680\u0686\u068A\u0692\u0696\u069F\u06A3\u06A7" +
		"\u06AB\u06AE\u06B2\u06B8\u06BC\u06C3\u06CC\u06D3\u06D7\u06DA\u06DD\u06E0" +
		"\u06E4\u06EF\u06F9\u06FD\u0704\u0706\u070D\u0711\u0715\u071A\u0721\u0728" +
		"\u072D\u0731\u0737\u073C\u0741\u0744\u0748\u074C\u0751\u0755\u075A\u075E" +
		"\u0763\u0767\u076C\u0770\u0775\u0779\u077E\u0782\u0787\u078B\u0790\u0794" +
		"\u0799";
	private static readonly _serializedATNSegment5: string =
		"\u079D\u07A2\u07A6\u07AB\u07AF\u07B4\u07B8\u07BD\u07C1\u07C6\u07CA\u07CF" +
		"\u07D3\u07D8\u07DC\u07E1\u07E5\u07EA\u07EE\u07F3\u07F7\u07FA\u07FC\u0802" +
		"\u0807\u080D\u0811\u0816\u081B\u081F\u0823\u0825\u0829\u082B\u082E\u0832" +
		"\u0839\u0841\u0845\u084F\u0853\u085B\u085F\u0862\u0865\u086B\u0871\u0874" +
		"\u0878\u087C\u0880\u0883\u088B\u0891\u0896\u0899\u089D\u08A1\u08A5\u08A8" +
		"\u08B0\u08B5\u08B8\u08BD\u08C1\u08C4\u08C7\u08CF\u08D5\u08D8\u08E0\u08E7" +
		"\u08EB\u08EE\u08F1\u08F9\u08FE\u0901\u0904\u0908\u090C\u090E\u0912\u0915" +
		"\u091D\u0922\u0927\u092A\u092D\u0935\u093B\u0940\u0943\u0947\u094B\u0950" +
		"\u0954\u0957\u095B\u095F\u0963\u0966\u096D\u0971\u0975\u0979\u097E\u0981" +
		"\u0984\u098A\u098E\u0992\u0996\u0999\u099D\u09A0\u09A3\u09A6\u09A9\u09AC" +
		"\u09B0\u09B6\u09BA\u09BF\u09C7\u09CD\u09CF\u09D3\u09D7\u09DB\u09DE\u09EA" +
		"\u09EE\u09F1\u09F4\u09F9\u09FB\u0A01\u0A03\u0A05\u0A0E\u0A13\u0A17\u0A1B" +
		"\u0A1F\u0A22\u0A2B\u0A2E\u0A32\u0A35\u0A42\u0A47\u0A4A\u0A4E\u0A52\u0A54" +
		"\u0A56";
	public static readonly _serializedATN: string = Utils.join(
		[
			vbaParser._serializedATNSegment0,
			vbaParser._serializedATNSegment1,
			vbaParser._serializedATNSegment2,
			vbaParser._serializedATNSegment3,
			vbaParser._serializedATNSegment4,
			vbaParser._serializedATNSegment5,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!vbaParser.__ATN) {
			vbaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(vbaParser._serializedATN));
		}

		return vbaParser.__ATN;
	}

}

export class StartRuleContext extends ParserRuleContext {
	public module(): ModuleContext {
		return this.getRuleContext(0, ModuleContext);
	}
	public EOF(): TerminalNode { return this.getToken(vbaParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_startRule; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterStartRule) {
			listener.enterStartRule(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitStartRule) {
			listener.exitStartRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitStartRule) {
			return visitor.visitStartRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleContext extends ParserRuleContext {
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public endOfLine(): EndOfLineContext[];
	public endOfLine(i: number): EndOfLineContext;
	public endOfLine(i?: number): EndOfLineContext | EndOfLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndOfLineContext);
		} else {
			return this.getRuleContext(i, EndOfLineContext);
		}
	}
	public moduleHeader(): ModuleHeaderContext | undefined {
		return this.tryGetRuleContext(0, ModuleHeaderContext);
	}
	public moduleConfig(): ModuleConfigContext | undefined {
		return this.tryGetRuleContext(0, ModuleConfigContext);
	}
	public moduleAttributes(): ModuleAttributesContext | undefined {
		return this.tryGetRuleContext(0, ModuleAttributesContext);
	}
	public moduleDeclarations(): ModuleDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, ModuleDeclarationsContext);
	}
	public moduleBody(): ModuleBodyContext | undefined {
		return this.tryGetRuleContext(0, ModuleBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_module; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterModule) {
			listener.enterModule(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitModule) {
			listener.exitModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitModule) {
			return visitor.visitModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleHeaderContext extends ParserRuleContext {
	public VERSION(): TerminalNode { return this.getToken(vbaParser.VERSION, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public DOUBLELITERAL(): TerminalNode { return this.getToken(vbaParser.DOUBLELITERAL, 0); }
	public CLASS(): TerminalNode { return this.getToken(vbaParser.CLASS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_moduleHeader; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterModuleHeader) {
			listener.enterModuleHeader(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitModuleHeader) {
			listener.exitModuleHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitModuleHeader) {
			return visitor.visitModuleHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleConfigContext extends ParserRuleContext {
	public BEGIN(): TerminalNode { return this.getToken(vbaParser.BEGIN, 0); }
	public END(): TerminalNode { return this.getToken(vbaParser.END, 0); }
	public endOfLine(): EndOfLineContext[];
	public endOfLine(i: number): EndOfLineContext;
	public endOfLine(i?: number): EndOfLineContext | EndOfLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndOfLineContext);
		} else {
			return this.getRuleContext(i, EndOfLineContext);
		}
	}
	public moduleConfigElement(): ModuleConfigElementContext[];
	public moduleConfigElement(i: number): ModuleConfigElementContext;
	public moduleConfigElement(i?: number): ModuleConfigElementContext | ModuleConfigElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleConfigElementContext);
		} else {
			return this.getRuleContext(i, ModuleConfigElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_moduleConfig; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterModuleConfig) {
			listener.enterModuleConfig(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitModuleConfig) {
			listener.exitModuleConfig(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitModuleConfig) {
			return visitor.visitModuleConfig(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleConfigElementContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public EQ(): TerminalNode { return this.getToken(vbaParser.EQ, 0); }
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public endOfLine(): EndOfLineContext[];
	public endOfLine(i: number): EndOfLineContext;
	public endOfLine(i?: number): EndOfLineContext | EndOfLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndOfLineContext);
		} else {
			return this.getRuleContext(i, EndOfLineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_moduleConfigElement; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterModuleConfigElement) {
			listener.enterModuleConfigElement(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitModuleConfigElement) {
			listener.exitModuleConfigElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitModuleConfigElement) {
			return visitor.visitModuleConfigElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleAttributesContext extends ParserRuleContext {
	public attributeStmt(): AttributeStmtContext[];
	public attributeStmt(i: number): AttributeStmtContext;
	public attributeStmt(i?: number): AttributeStmtContext | AttributeStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeStmtContext);
		} else {
			return this.getRuleContext(i, AttributeStmtContext);
		}
	}
	public endOfLine(): EndOfLineContext[];
	public endOfLine(i: number): EndOfLineContext;
	public endOfLine(i?: number): EndOfLineContext | EndOfLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndOfLineContext);
		} else {
			return this.getRuleContext(i, EndOfLineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_moduleAttributes; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterModuleAttributes) {
			listener.enterModuleAttributes(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitModuleAttributes) {
			listener.exitModuleAttributes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitModuleAttributes) {
			return visitor.visitModuleAttributes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleDeclarationsContext extends ParserRuleContext {
	public moduleDeclarationsElement(): ModuleDeclarationsElementContext[];
	public moduleDeclarationsElement(i: number): ModuleDeclarationsElementContext;
	public moduleDeclarationsElement(i?: number): ModuleDeclarationsElementContext | ModuleDeclarationsElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleDeclarationsElementContext);
		} else {
			return this.getRuleContext(i, ModuleDeclarationsElementContext);
		}
	}
	public endOfLine(): EndOfLineContext[];
	public endOfLine(i: number): EndOfLineContext;
	public endOfLine(i?: number): EndOfLineContext | EndOfLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndOfLineContext);
		} else {
			return this.getRuleContext(i, EndOfLineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_moduleDeclarations; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterModuleDeclarations) {
			listener.enterModuleDeclarations(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitModuleDeclarations) {
			listener.exitModuleDeclarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitModuleDeclarations) {
			return visitor.visitModuleDeclarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleOptionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_moduleOption; }
	public copyFrom(ctx: ModuleOptionContext): void {
		super.copyFrom(ctx);
	}
}
export class OptionBaseStmtContext extends ModuleOptionContext {
	public OPTION_BASE(): TerminalNode { return this.getToken(vbaParser.OPTION_BASE, 0); }
	public WS(): TerminalNode { return this.getToken(vbaParser.WS, 0); }
	public SHORTLITERAL(): TerminalNode { return this.getToken(vbaParser.SHORTLITERAL, 0); }
	constructor(ctx: ModuleOptionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterOptionBaseStmt) {
			listener.enterOptionBaseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitOptionBaseStmt) {
			listener.exitOptionBaseStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitOptionBaseStmt) {
			return visitor.visitOptionBaseStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OptionCompareStmtContext extends ModuleOptionContext {
	public OPTION_COMPARE(): TerminalNode { return this.getToken(vbaParser.OPTION_COMPARE, 0); }
	public WS(): TerminalNode { return this.getToken(vbaParser.WS, 0); }
	public BINARY(): TerminalNode | undefined { return this.tryGetToken(vbaParser.BINARY, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.TEXT, 0); }
	public DATABASE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DATABASE, 0); }
	constructor(ctx: ModuleOptionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterOptionCompareStmt) {
			listener.enterOptionCompareStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitOptionCompareStmt) {
			listener.exitOptionCompareStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitOptionCompareStmt) {
			return visitor.visitOptionCompareStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OptionExplicitStmtContext extends ModuleOptionContext {
	public OPTION_EXPLICIT(): TerminalNode { return this.getToken(vbaParser.OPTION_EXPLICIT, 0); }
	constructor(ctx: ModuleOptionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterOptionExplicitStmt) {
			listener.enterOptionExplicitStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitOptionExplicitStmt) {
			listener.exitOptionExplicitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitOptionExplicitStmt) {
			return visitor.visitOptionExplicitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OptionPrivateModuleStmtContext extends ModuleOptionContext {
	public OPTION_PRIVATE_MODULE(): TerminalNode { return this.getToken(vbaParser.OPTION_PRIVATE_MODULE, 0); }
	constructor(ctx: ModuleOptionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterOptionPrivateModuleStmt) {
			listener.enterOptionPrivateModuleStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitOptionPrivateModuleStmt) {
			listener.exitOptionPrivateModuleStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitOptionPrivateModuleStmt) {
			return visitor.visitOptionPrivateModuleStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleDeclarationsElementContext extends ParserRuleContext {
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public declareStmt(): DeclareStmtContext | undefined {
		return this.tryGetRuleContext(0, DeclareStmtContext);
	}
	public enumerationStmt(): EnumerationStmtContext | undefined {
		return this.tryGetRuleContext(0, EnumerationStmtContext);
	}
	public eventStmt(): EventStmtContext | undefined {
		return this.tryGetRuleContext(0, EventStmtContext);
	}
	public constStmt(): ConstStmtContext | undefined {
		return this.tryGetRuleContext(0, ConstStmtContext);
	}
	public implementsStmt(): ImplementsStmtContext | undefined {
		return this.tryGetRuleContext(0, ImplementsStmtContext);
	}
	public variableStmt(): VariableStmtContext | undefined {
		return this.tryGetRuleContext(0, VariableStmtContext);
	}
	public moduleOption(): ModuleOptionContext | undefined {
		return this.tryGetRuleContext(0, ModuleOptionContext);
	}
	public typeStmt(): TypeStmtContext | undefined {
		return this.tryGetRuleContext(0, TypeStmtContext);
	}
	public macroStmt(): MacroStmtContext | undefined {
		return this.tryGetRuleContext(0, MacroStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_moduleDeclarationsElement; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterModuleDeclarationsElement) {
			listener.enterModuleDeclarationsElement(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitModuleDeclarationsElement) {
			listener.exitModuleDeclarationsElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitModuleDeclarationsElement) {
			return visitor.visitModuleDeclarationsElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroStmtContext extends ParserRuleContext {
	public macroConstStmt(): MacroConstStmtContext | undefined {
		return this.tryGetRuleContext(0, MacroConstStmtContext);
	}
	public macroIfThenElseStmt(): MacroIfThenElseStmtContext | undefined {
		return this.tryGetRuleContext(0, MacroIfThenElseStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_macroStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterMacroStmt) {
			listener.enterMacroStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitMacroStmt) {
			listener.exitMacroStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitMacroStmt) {
			return visitor.visitMacroStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleBodyContext extends ParserRuleContext {
	public moduleBodyElement(): ModuleBodyElementContext[];
	public moduleBodyElement(i: number): ModuleBodyElementContext;
	public moduleBodyElement(i?: number): ModuleBodyElementContext | ModuleBodyElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleBodyElementContext);
		} else {
			return this.getRuleContext(i, ModuleBodyElementContext);
		}
	}
	public endOfLine(): EndOfLineContext[];
	public endOfLine(i: number): EndOfLineContext;
	public endOfLine(i?: number): EndOfLineContext | EndOfLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndOfLineContext);
		} else {
			return this.getRuleContext(i, EndOfLineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_moduleBody; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterModuleBody) {
			listener.enterModuleBody(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitModuleBody) {
			listener.exitModuleBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitModuleBody) {
			return visitor.visitModuleBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleBodyElementContext extends ParserRuleContext {
	public functionStmt(): FunctionStmtContext | undefined {
		return this.tryGetRuleContext(0, FunctionStmtContext);
	}
	public propertyGetStmt(): PropertyGetStmtContext | undefined {
		return this.tryGetRuleContext(0, PropertyGetStmtContext);
	}
	public propertySetStmt(): PropertySetStmtContext | undefined {
		return this.tryGetRuleContext(0, PropertySetStmtContext);
	}
	public propertyLetStmt(): PropertyLetStmtContext | undefined {
		return this.tryGetRuleContext(0, PropertyLetStmtContext);
	}
	public subStmt(): SubStmtContext | undefined {
		return this.tryGetRuleContext(0, SubStmtContext);
	}
	public macroStmt(): MacroStmtContext | undefined {
		return this.tryGetRuleContext(0, MacroStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_moduleBodyElement; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterModuleBodyElement) {
			listener.enterModuleBodyElement(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitModuleBodyElement) {
			listener.exitModuleBodyElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitModuleBodyElement) {
			return visitor.visitModuleBodyElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeStmtContext extends ParserRuleContext {
	public ATTRIBUTE(): TerminalNode { return this.getToken(vbaParser.ATTRIBUTE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public EQ(): TerminalNode { return this.getToken(vbaParser.EQ, 0); }
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_attributeStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterAttributeStmt) {
			listener.enterAttributeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitAttributeStmt) {
			listener.exitAttributeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitAttributeStmt) {
			return visitor.visitAttributeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public blockStmt(): BlockStmtContext[];
	public blockStmt(i: number): BlockStmtContext;
	public blockStmt(i?: number): BlockStmtContext | BlockStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStmtContext);
		} else {
			return this.getRuleContext(i, BlockStmtContext);
		}
	}
	public endOfStatement(): EndOfStatementContext[];
	public endOfStatement(i: number): EndOfStatementContext;
	public endOfStatement(i?: number): EndOfStatementContext | EndOfStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndOfStatementContext);
		} else {
			return this.getRuleContext(i, EndOfStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_block; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStmtContext extends ParserRuleContext {
	public lineLabel(): LineLabelContext | undefined {
		return this.tryGetRuleContext(0, LineLabelContext);
	}
	public appactivateStmt(): AppactivateStmtContext | undefined {
		return this.tryGetRuleContext(0, AppactivateStmtContext);
	}
	public attributeStmt(): AttributeStmtContext | undefined {
		return this.tryGetRuleContext(0, AttributeStmtContext);
	}
	public beepStmt(): BeepStmtContext | undefined {
		return this.tryGetRuleContext(0, BeepStmtContext);
	}
	public chdirStmt(): ChdirStmtContext | undefined {
		return this.tryGetRuleContext(0, ChdirStmtContext);
	}
	public chdriveStmt(): ChdriveStmtContext | undefined {
		return this.tryGetRuleContext(0, ChdriveStmtContext);
	}
	public closeStmt(): CloseStmtContext | undefined {
		return this.tryGetRuleContext(0, CloseStmtContext);
	}
	public constStmt(): ConstStmtContext | undefined {
		return this.tryGetRuleContext(0, ConstStmtContext);
	}
	public dateStmt(): DateStmtContext | undefined {
		return this.tryGetRuleContext(0, DateStmtContext);
	}
	public deleteSettingStmt(): DeleteSettingStmtContext | undefined {
		return this.tryGetRuleContext(0, DeleteSettingStmtContext);
	}
	public deftypeStmt(): DeftypeStmtContext | undefined {
		return this.tryGetRuleContext(0, DeftypeStmtContext);
	}
	public doLoopStmt(): DoLoopStmtContext | undefined {
		return this.tryGetRuleContext(0, DoLoopStmtContext);
	}
	public endStmt(): EndStmtContext | undefined {
		return this.tryGetRuleContext(0, EndStmtContext);
	}
	public eraseStmt(): EraseStmtContext | undefined {
		return this.tryGetRuleContext(0, EraseStmtContext);
	}
	public errorStmt(): ErrorStmtContext | undefined {
		return this.tryGetRuleContext(0, ErrorStmtContext);
	}
	public exitStmt(): ExitStmtContext | undefined {
		return this.tryGetRuleContext(0, ExitStmtContext);
	}
	public explicitCallStmt(): ExplicitCallStmtContext | undefined {
		return this.tryGetRuleContext(0, ExplicitCallStmtContext);
	}
	public filecopyStmt(): FilecopyStmtContext | undefined {
		return this.tryGetRuleContext(0, FilecopyStmtContext);
	}
	public forEachStmt(): ForEachStmtContext | undefined {
		return this.tryGetRuleContext(0, ForEachStmtContext);
	}
	public forNextStmt(): ForNextStmtContext | undefined {
		return this.tryGetRuleContext(0, ForNextStmtContext);
	}
	public getStmt(): GetStmtContext | undefined {
		return this.tryGetRuleContext(0, GetStmtContext);
	}
	public goSubStmt(): GoSubStmtContext | undefined {
		return this.tryGetRuleContext(0, GoSubStmtContext);
	}
	public goToStmt(): GoToStmtContext | undefined {
		return this.tryGetRuleContext(0, GoToStmtContext);
	}
	public ifThenElseStmt(): IfThenElseStmtContext | undefined {
		return this.tryGetRuleContext(0, IfThenElseStmtContext);
	}
	public implementsStmt(): ImplementsStmtContext | undefined {
		return this.tryGetRuleContext(0, ImplementsStmtContext);
	}
	public inputStmt(): InputStmtContext | undefined {
		return this.tryGetRuleContext(0, InputStmtContext);
	}
	public killStmt(): KillStmtContext | undefined {
		return this.tryGetRuleContext(0, KillStmtContext);
	}
	public letStmt(): LetStmtContext | undefined {
		return this.tryGetRuleContext(0, LetStmtContext);
	}
	public lineInputStmt(): LineInputStmtContext | undefined {
		return this.tryGetRuleContext(0, LineInputStmtContext);
	}
	public loadStmt(): LoadStmtContext | undefined {
		return this.tryGetRuleContext(0, LoadStmtContext);
	}
	public lockStmt(): LockStmtContext | undefined {
		return this.tryGetRuleContext(0, LockStmtContext);
	}
	public lsetStmt(): LsetStmtContext | undefined {
		return this.tryGetRuleContext(0, LsetStmtContext);
	}
	public macroStmt(): MacroStmtContext | undefined {
		return this.tryGetRuleContext(0, MacroStmtContext);
	}
	public midStmt(): MidStmtContext | undefined {
		return this.tryGetRuleContext(0, MidStmtContext);
	}
	public mkdirStmt(): MkdirStmtContext | undefined {
		return this.tryGetRuleContext(0, MkdirStmtContext);
	}
	public nameStmt(): NameStmtContext | undefined {
		return this.tryGetRuleContext(0, NameStmtContext);
	}
	public onErrorStmt(): OnErrorStmtContext | undefined {
		return this.tryGetRuleContext(0, OnErrorStmtContext);
	}
	public onGoToStmt(): OnGoToStmtContext | undefined {
		return this.tryGetRuleContext(0, OnGoToStmtContext);
	}
	public onGoSubStmt(): OnGoSubStmtContext | undefined {
		return this.tryGetRuleContext(0, OnGoSubStmtContext);
	}
	public openStmt(): OpenStmtContext | undefined {
		return this.tryGetRuleContext(0, OpenStmtContext);
	}
	public printStmt(): PrintStmtContext | undefined {
		return this.tryGetRuleContext(0, PrintStmtContext);
	}
	public putStmt(): PutStmtContext | undefined {
		return this.tryGetRuleContext(0, PutStmtContext);
	}
	public raiseEventStmt(): RaiseEventStmtContext | undefined {
		return this.tryGetRuleContext(0, RaiseEventStmtContext);
	}
	public randomizeStmt(): RandomizeStmtContext | undefined {
		return this.tryGetRuleContext(0, RandomizeStmtContext);
	}
	public redimStmt(): RedimStmtContext | undefined {
		return this.tryGetRuleContext(0, RedimStmtContext);
	}
	public resetStmt(): ResetStmtContext | undefined {
		return this.tryGetRuleContext(0, ResetStmtContext);
	}
	public resumeStmt(): ResumeStmtContext | undefined {
		return this.tryGetRuleContext(0, ResumeStmtContext);
	}
	public returnStmt(): ReturnStmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnStmtContext);
	}
	public rmdirStmt(): RmdirStmtContext | undefined {
		return this.tryGetRuleContext(0, RmdirStmtContext);
	}
	public rsetStmt(): RsetStmtContext | undefined {
		return this.tryGetRuleContext(0, RsetStmtContext);
	}
	public savepictureStmt(): SavepictureStmtContext | undefined {
		return this.tryGetRuleContext(0, SavepictureStmtContext);
	}
	public saveSettingStmt(): SaveSettingStmtContext | undefined {
		return this.tryGetRuleContext(0, SaveSettingStmtContext);
	}
	public seekStmt(): SeekStmtContext | undefined {
		return this.tryGetRuleContext(0, SeekStmtContext);
	}
	public selectCaseStmt(): SelectCaseStmtContext | undefined {
		return this.tryGetRuleContext(0, SelectCaseStmtContext);
	}
	public sendkeysStmt(): SendkeysStmtContext | undefined {
		return this.tryGetRuleContext(0, SendkeysStmtContext);
	}
	public setattrStmt(): SetattrStmtContext | undefined {
		return this.tryGetRuleContext(0, SetattrStmtContext);
	}
	public setStmt(): SetStmtContext | undefined {
		return this.tryGetRuleContext(0, SetStmtContext);
	}
	public stopStmt(): StopStmtContext | undefined {
		return this.tryGetRuleContext(0, StopStmtContext);
	}
	public timeStmt(): TimeStmtContext | undefined {
		return this.tryGetRuleContext(0, TimeStmtContext);
	}
	public unloadStmt(): UnloadStmtContext | undefined {
		return this.tryGetRuleContext(0, UnloadStmtContext);
	}
	public unlockStmt(): UnlockStmtContext | undefined {
		return this.tryGetRuleContext(0, UnlockStmtContext);
	}
	public variableStmt(): VariableStmtContext | undefined {
		return this.tryGetRuleContext(0, VariableStmtContext);
	}
	public whileWendStmt(): WhileWendStmtContext | undefined {
		return this.tryGetRuleContext(0, WhileWendStmtContext);
	}
	public widthStmt(): WidthStmtContext | undefined {
		return this.tryGetRuleContext(0, WidthStmtContext);
	}
	public withStmt(): WithStmtContext | undefined {
		return this.tryGetRuleContext(0, WithStmtContext);
	}
	public writeStmt(): WriteStmtContext | undefined {
		return this.tryGetRuleContext(0, WriteStmtContext);
	}
	public implicitCallStmt_InBlock(): ImplicitCallStmt_InBlockContext | undefined {
		return this.tryGetRuleContext(0, ImplicitCallStmt_InBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_blockStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterBlockStmt) {
			listener.enterBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitBlockStmt) {
			listener.exitBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitBlockStmt) {
			return visitor.visitBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AppactivateStmtContext extends ParserRuleContext {
	public APPACTIVATE(): TerminalNode { return this.getToken(vbaParser.APPACTIVATE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_appactivateStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterAppactivateStmt) {
			listener.enterAppactivateStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitAppactivateStmt) {
			listener.exitAppactivateStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitAppactivateStmt) {
			return visitor.visitAppactivateStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeepStmtContext extends ParserRuleContext {
	public BEEP(): TerminalNode { return this.getToken(vbaParser.BEEP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_beepStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterBeepStmt) {
			listener.enterBeepStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitBeepStmt) {
			listener.exitBeepStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitBeepStmt) {
			return visitor.visitBeepStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChdirStmtContext extends ParserRuleContext {
	public CHDIR(): TerminalNode { return this.getToken(vbaParser.CHDIR, 0); }
	public WS(): TerminalNode { return this.getToken(vbaParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_chdirStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterChdirStmt) {
			listener.enterChdirStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitChdirStmt) {
			listener.exitChdirStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitChdirStmt) {
			return visitor.visitChdirStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChdriveStmtContext extends ParserRuleContext {
	public CHDRIVE(): TerminalNode { return this.getToken(vbaParser.CHDRIVE, 0); }
	public WS(): TerminalNode { return this.getToken(vbaParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_chdriveStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterChdriveStmt) {
			listener.enterChdriveStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitChdriveStmt) {
			listener.exitChdriveStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitChdriveStmt) {
			return visitor.visitChdriveStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CloseStmtContext extends ParserRuleContext {
	public CLOSE(): TerminalNode { return this.getToken(vbaParser.CLOSE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public fileNumber(): FileNumberContext[];
	public fileNumber(i: number): FileNumberContext;
	public fileNumber(i?: number): FileNumberContext | FileNumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FileNumberContext);
		} else {
			return this.getRuleContext(i, FileNumberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_closeStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterCloseStmt) {
			listener.enterCloseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitCloseStmt) {
			listener.exitCloseStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitCloseStmt) {
			return visitor.visitCloseStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstStmtContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(vbaParser.CONST, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public constSubStmt(): ConstSubStmtContext[];
	public constSubStmt(i: number): ConstSubStmtContext;
	public constSubStmt(i?: number): ConstSubStmtContext | ConstSubStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstSubStmtContext);
		} else {
			return this.getRuleContext(i, ConstSubStmtContext);
		}
	}
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_constStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterConstStmt) {
			listener.enterConstStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitConstStmt) {
			listener.exitConstStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitConstStmt) {
			return visitor.visitConstStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstSubStmtContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public EQ(): TerminalNode { return this.getToken(vbaParser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_constSubStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterConstSubStmt) {
			listener.enterConstSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitConstSubStmt) {
			listener.exitConstSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitConstSubStmt) {
			return visitor.visitConstSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateStmtContext extends ParserRuleContext {
	public DATE(): TerminalNode { return this.getToken(vbaParser.DATE, 0); }
	public EQ(): TerminalNode { return this.getToken(vbaParser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_dateStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterDateStmt) {
			listener.enterDateStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitDateStmt) {
			listener.exitDateStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitDateStmt) {
			return visitor.visitDateStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclareStmtContext extends ParserRuleContext {
	public DECLARE(): TerminalNode { return this.getToken(vbaParser.DECLARE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public LIB(): TerminalNode { return this.getToken(vbaParser.LIB, 0); }
	public STRINGLITERAL(): TerminalNode[];
	public STRINGLITERAL(i: number): TerminalNode;
	public STRINGLITERAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.STRINGLITERAL);
		} else {
			return this.getToken(vbaParser.STRINGLITERAL, i);
		}
	}
	public SUB(): TerminalNode | undefined { return this.tryGetToken(vbaParser.SUB, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public PTRSAFE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.PTRSAFE, 0); }
	public typeHint(): TypeHintContext[];
	public typeHint(i: number): TypeHintContext;
	public typeHint(i?: number): TypeHintContext | TypeHintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeHintContext);
		} else {
			return this.getRuleContext(i, TypeHintContext);
		}
	}
	public ALIAS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.ALIAS, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(vbaParser.FUNCTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_declareStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterDeclareStmt) {
			listener.enterDeclareStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitDeclareStmt) {
			listener.exitDeclareStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitDeclareStmt) {
			return visitor.visitDeclareStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeftypeStmtContext extends ParserRuleContext {
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public letterrange(): LetterrangeContext[];
	public letterrange(i: number): LetterrangeContext;
	public letterrange(i?: number): LetterrangeContext | LetterrangeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LetterrangeContext);
		} else {
			return this.getRuleContext(i, LetterrangeContext);
		}
	}
	public DEFBOOL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFBOOL, 0); }
	public DEFBYTE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFBYTE, 0); }
	public DEFINT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFINT, 0); }
	public DEFLNG(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFLNG, 0); }
	public DEFCUR(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFCUR, 0); }
	public DEFSNG(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFSNG, 0); }
	public DEFDBL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFDBL, 0); }
	public DEFDEC(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFDEC, 0); }
	public DEFDATE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFDATE, 0); }
	public DEFSTR(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFSTR, 0); }
	public DEFOBJ(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFOBJ, 0); }
	public DEFVAR(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFVAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_deftypeStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterDeftypeStmt) {
			listener.enterDeftypeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitDeftypeStmt) {
			listener.exitDeftypeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitDeftypeStmt) {
			return visitor.visitDeftypeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeleteSettingStmtContext extends ParserRuleContext {
	public DELETESETTING(): TerminalNode { return this.getToken(vbaParser.DELETESETTING, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_deleteSettingStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterDeleteSettingStmt) {
			listener.enterDeleteSettingStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitDeleteSettingStmt) {
			listener.exitDeleteSettingStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitDeleteSettingStmt) {
			return visitor.visitDeleteSettingStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoLoopStmtContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(vbaParser.DO, 0); }
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public LOOP(): TerminalNode { return this.getToken(vbaParser.LOOP, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WHILE, 0); }
	public UNTIL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.UNTIL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_doLoopStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterDoLoopStmt) {
			listener.enterDoLoopStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitDoLoopStmt) {
			listener.exitDoLoopStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitDoLoopStmt) {
			return visitor.visitDoLoopStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndStmtContext extends ParserRuleContext {
	public END(): TerminalNode { return this.getToken(vbaParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_endStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterEndStmt) {
			listener.enterEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitEndStmt) {
			listener.exitEndStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitEndStmt) {
			return visitor.visitEndStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumerationStmtContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(vbaParser.ENUM, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public END_ENUM(): TerminalNode { return this.getToken(vbaParser.END_ENUM, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public enumerationStmt_Constant(): EnumerationStmt_ConstantContext[];
	public enumerationStmt_Constant(i: number): EnumerationStmt_ConstantContext;
	public enumerationStmt_Constant(i?: number): EnumerationStmt_ConstantContext | EnumerationStmt_ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumerationStmt_ConstantContext);
		} else {
			return this.getRuleContext(i, EnumerationStmt_ConstantContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_enumerationStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterEnumerationStmt) {
			listener.enterEnumerationStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitEnumerationStmt) {
			listener.exitEnumerationStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitEnumerationStmt) {
			return visitor.visitEnumerationStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumerationStmt_ConstantContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(vbaParser.EQ, 0); }
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_enumerationStmt_Constant; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterEnumerationStmt_Constant) {
			listener.enterEnumerationStmt_Constant(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitEnumerationStmt_Constant) {
			listener.exitEnumerationStmt_Constant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitEnumerationStmt_Constant) {
			return visitor.visitEnumerationStmt_Constant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EraseStmtContext extends ParserRuleContext {
	public ERASE(): TerminalNode { return this.getToken(vbaParser.ERASE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_eraseStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterEraseStmt) {
			listener.enterEraseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitEraseStmt) {
			listener.exitEraseStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitEraseStmt) {
			return visitor.visitEraseStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorStmtContext extends ParserRuleContext {
	public ERROR(): TerminalNode { return this.getToken(vbaParser.ERROR, 0); }
	public WS(): TerminalNode { return this.getToken(vbaParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_errorStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterErrorStmt) {
			listener.enterErrorStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitErrorStmt) {
			listener.exitErrorStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitErrorStmt) {
			return visitor.visitErrorStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventStmtContext extends ParserRuleContext {
	public EVENT(): TerminalNode { return this.getToken(vbaParser.EVENT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public argList(): ArgListContext {
		return this.getRuleContext(0, ArgListContext);
	}
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_eventStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterEventStmt) {
			listener.enterEventStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitEventStmt) {
			listener.exitEventStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitEventStmt) {
			return visitor.visitEventStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExitStmtContext extends ParserRuleContext {
	public EXIT_DO(): TerminalNode | undefined { return this.tryGetToken(vbaParser.EXIT_DO, 0); }
	public EXIT_FOR(): TerminalNode | undefined { return this.tryGetToken(vbaParser.EXIT_FOR, 0); }
	public EXIT_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(vbaParser.EXIT_FUNCTION, 0); }
	public EXIT_PROPERTY(): TerminalNode | undefined { return this.tryGetToken(vbaParser.EXIT_PROPERTY, 0); }
	public EXIT_SUB(): TerminalNode | undefined { return this.tryGetToken(vbaParser.EXIT_SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_exitStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterExitStmt) {
			listener.enterExitStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitExitStmt) {
			listener.exitExitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitExitStmt) {
			return visitor.visitExitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilecopyStmtContext extends ParserRuleContext {
	public FILECOPY(): TerminalNode { return this.getToken(vbaParser.FILECOPY, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_filecopyStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterFilecopyStmt) {
			listener.enterFilecopyStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitFilecopyStmt) {
			listener.exitFilecopyStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitFilecopyStmt) {
			return visitor.visitFilecopyStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForEachStmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(vbaParser.FOR, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public EACH(): TerminalNode { return this.getToken(vbaParser.EACH, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext[];
	public ambiguousIdentifier(i: number): AmbiguousIdentifierContext;
	public ambiguousIdentifier(i?: number): AmbiguousIdentifierContext | AmbiguousIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AmbiguousIdentifierContext);
		} else {
			return this.getRuleContext(i, AmbiguousIdentifierContext);
		}
	}
	public IN(): TerminalNode { return this.getToken(vbaParser.IN, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public NEXT(): TerminalNode { return this.getToken(vbaParser.NEXT, 0); }
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_forEachStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterForEachStmt) {
			listener.enterForEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitForEachStmt) {
			listener.exitForEachStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitForEachStmt) {
			return visitor.visitForEachStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForNextStmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(vbaParser.FOR, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext[];
	public ambiguousIdentifier(i: number): AmbiguousIdentifierContext;
	public ambiguousIdentifier(i?: number): AmbiguousIdentifierContext | AmbiguousIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AmbiguousIdentifierContext);
		} else {
			return this.getRuleContext(i, AmbiguousIdentifierContext);
		}
	}
	public EQ(): TerminalNode { return this.getToken(vbaParser.EQ, 0); }
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public TO(): TerminalNode { return this.getToken(vbaParser.TO, 0); }
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public NEXT(): TerminalNode { return this.getToken(vbaParser.NEXT, 0); }
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public STEP(): TerminalNode | undefined { return this.tryGetToken(vbaParser.STEP, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_forNextStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterForNextStmt) {
			listener.enterForNextStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitForNextStmt) {
			listener.exitForNextStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitForNextStmt) {
			return visitor.visitForNextStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionStmtContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(vbaParser.FUNCTION, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public END_FUNCTION(): TerminalNode { return this.getToken(vbaParser.END_FUNCTION, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(vbaParser.STATIC, 0); }
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_functionStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterFunctionStmt) {
			listener.enterFunctionStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitFunctionStmt) {
			listener.exitFunctionStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitFunctionStmt) {
			return visitor.visitFunctionStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetStmtContext extends ParserRuleContext {
	public GET(): TerminalNode { return this.getToken(vbaParser.GET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public fileNumber(): FileNumberContext {
		return this.getRuleContext(0, FileNumberContext);
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_getStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterGetStmt) {
			listener.enterGetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitGetStmt) {
			listener.exitGetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitGetStmt) {
			return visitor.visitGetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GoSubStmtContext extends ParserRuleContext {
	public GOSUB(): TerminalNode { return this.getToken(vbaParser.GOSUB, 0); }
	public WS(): TerminalNode { return this.getToken(vbaParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_goSubStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterGoSubStmt) {
			listener.enterGoSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitGoSubStmt) {
			listener.exitGoSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitGoSubStmt) {
			return visitor.visitGoSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GoToStmtContext extends ParserRuleContext {
	public GOTO(): TerminalNode { return this.getToken(vbaParser.GOTO, 0); }
	public WS(): TerminalNode { return this.getToken(vbaParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_goToStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterGoToStmt) {
			listener.enterGoToStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitGoToStmt) {
			listener.exitGoToStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitGoToStmt) {
			return visitor.visitGoToStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenElseStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_ifThenElseStmt; }
	public copyFrom(ctx: IfThenElseStmtContext): void {
		super.copyFrom(ctx);
	}
}
export class InlineIfThenElseContext extends IfThenElseStmtContext {
	public IF(): TerminalNode { return this.getToken(vbaParser.IF, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getRuleContext(0, IfConditionStmtContext);
	}
	public THEN(): TerminalNode { return this.getToken(vbaParser.THEN, 0); }
	public blockStmt(): BlockStmtContext[];
	public blockStmt(i: number): BlockStmtContext;
	public blockStmt(i?: number): BlockStmtContext | BlockStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStmtContext);
		} else {
			return this.getRuleContext(i, BlockStmtContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.ELSE, 0); }
	constructor(ctx: IfThenElseStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterInlineIfThenElse) {
			listener.enterInlineIfThenElse(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitInlineIfThenElse) {
			listener.exitInlineIfThenElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitInlineIfThenElse) {
			return visitor.visitInlineIfThenElse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BlockIfThenElseContext extends IfThenElseStmtContext {
	public ifBlockStmt(): IfBlockStmtContext {
		return this.getRuleContext(0, IfBlockStmtContext);
	}
	public END_IF(): TerminalNode { return this.getToken(vbaParser.END_IF, 0); }
	public ifElseIfBlockStmt(): IfElseIfBlockStmtContext[];
	public ifElseIfBlockStmt(i: number): IfElseIfBlockStmtContext;
	public ifElseIfBlockStmt(i?: number): IfElseIfBlockStmtContext | IfElseIfBlockStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IfElseIfBlockStmtContext);
		} else {
			return this.getRuleContext(i, IfElseIfBlockStmtContext);
		}
	}
	public ifElseBlockStmt(): IfElseBlockStmtContext | undefined {
		return this.tryGetRuleContext(0, IfElseBlockStmtContext);
	}
	constructor(ctx: IfThenElseStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterBlockIfThenElse) {
			listener.enterBlockIfThenElse(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitBlockIfThenElse) {
			listener.exitBlockIfThenElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitBlockIfThenElse) {
			return visitor.visitBlockIfThenElse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfBlockStmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(vbaParser.IF, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getRuleContext(0, IfConditionStmtContext);
	}
	public THEN(): TerminalNode { return this.getToken(vbaParser.THEN, 0); }
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_ifBlockStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterIfBlockStmt) {
			listener.enterIfBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitIfBlockStmt) {
			listener.exitIfBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitIfBlockStmt) {
			return visitor.visitIfBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfConditionStmtContext extends ParserRuleContext {
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_ifConditionStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterIfConditionStmt) {
			listener.enterIfConditionStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitIfConditionStmt) {
			listener.exitIfConditionStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitIfConditionStmt) {
			return visitor.visitIfConditionStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfElseIfBlockStmtContext extends ParserRuleContext {
	public ELSEIF(): TerminalNode { return this.getToken(vbaParser.ELSEIF, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getRuleContext(0, IfConditionStmtContext);
	}
	public THEN(): TerminalNode { return this.getToken(vbaParser.THEN, 0); }
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_ifElseIfBlockStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterIfElseIfBlockStmt) {
			listener.enterIfElseIfBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitIfElseIfBlockStmt) {
			listener.exitIfElseIfBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitIfElseIfBlockStmt) {
			return visitor.visitIfElseIfBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfElseBlockStmtContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(vbaParser.ELSE, 0); }
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_ifElseBlockStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterIfElseBlockStmt) {
			listener.enterIfElseBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitIfElseBlockStmt) {
			listener.exitIfElseBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitIfElseBlockStmt) {
			return visitor.visitIfElseBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementsStmtContext extends ParserRuleContext {
	public IMPLEMENTS(): TerminalNode { return this.getToken(vbaParser.IMPLEMENTS, 0); }
	public WS(): TerminalNode { return this.getToken(vbaParser.WS, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_implementsStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterImplementsStmt) {
			listener.enterImplementsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitImplementsStmt) {
			listener.exitImplementsStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitImplementsStmt) {
			return visitor.visitImplementsStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputStmtContext extends ParserRuleContext {
	public INPUT(): TerminalNode { return this.getToken(vbaParser.INPUT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public fileNumber(): FileNumberContext {
		return this.getRuleContext(0, FileNumberContext);
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_inputStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterInputStmt) {
			listener.enterInputStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitInputStmt) {
			listener.exitInputStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitInputStmt) {
			return visitor.visitInputStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KillStmtContext extends ParserRuleContext {
	public KILL(): TerminalNode { return this.getToken(vbaParser.KILL, 0); }
	public WS(): TerminalNode { return this.getToken(vbaParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_killStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterKillStmt) {
			listener.enterKillStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitKillStmt) {
			listener.exitKillStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitKillStmt) {
			return visitor.visitKillStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetStmtContext extends ParserRuleContext {
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(vbaParser.EQ, 0); }
	public PLUS_EQ(): TerminalNode | undefined { return this.tryGetToken(vbaParser.PLUS_EQ, 0); }
	public MINUS_EQ(): TerminalNode | undefined { return this.tryGetToken(vbaParser.MINUS_EQ, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_letStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterLetStmt) {
			listener.enterLetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitLetStmt) {
			listener.exitLetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitLetStmt) {
			return visitor.visitLetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineInputStmtContext extends ParserRuleContext {
	public LINE_INPUT(): TerminalNode { return this.getToken(vbaParser.LINE_INPUT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public fileNumber(): FileNumberContext {
		return this.getRuleContext(0, FileNumberContext);
	}
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_lineInputStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterLineInputStmt) {
			listener.enterLineInputStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitLineInputStmt) {
			listener.exitLineInputStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitLineInputStmt) {
			return visitor.visitLineInputStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoadStmtContext extends ParserRuleContext {
	public LOAD(): TerminalNode { return this.getToken(vbaParser.LOAD, 0); }
	public WS(): TerminalNode { return this.getToken(vbaParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_loadStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterLoadStmt) {
			listener.enterLoadStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitLoadStmt) {
			listener.exitLoadStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitLoadStmt) {
			return visitor.visitLoadStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LockStmtContext extends ParserRuleContext {
	public LOCK(): TerminalNode { return this.getToken(vbaParser.LOCK, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(vbaParser.TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_lockStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterLockStmt) {
			listener.enterLockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitLockStmt) {
			listener.exitLockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitLockStmt) {
			return visitor.visitLockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LsetStmtContext extends ParserRuleContext {
	public LSET(): TerminalNode { return this.getToken(vbaParser.LSET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public EQ(): TerminalNode { return this.getToken(vbaParser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_lsetStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterLsetStmt) {
			listener.enterLsetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitLsetStmt) {
			listener.exitLsetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitLsetStmt) {
			return visitor.visitLsetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroConstStmtContext extends ParserRuleContext {
	public MACRO_CONST(): TerminalNode { return this.getToken(vbaParser.MACRO_CONST, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public EQ(): TerminalNode { return this.getToken(vbaParser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_macroConstStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterMacroConstStmt) {
			listener.enterMacroConstStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitMacroConstStmt) {
			listener.exitMacroConstStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitMacroConstStmt) {
			return visitor.visitMacroConstStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroIfThenElseStmtContext extends ParserRuleContext {
	public macroIfBlockStmt(): MacroIfBlockStmtContext {
		return this.getRuleContext(0, MacroIfBlockStmtContext);
	}
	public MACRO_END_IF(): TerminalNode { return this.getToken(vbaParser.MACRO_END_IF, 0); }
	public macroElseIfBlockStmt(): MacroElseIfBlockStmtContext[];
	public macroElseIfBlockStmt(i: number): MacroElseIfBlockStmtContext;
	public macroElseIfBlockStmt(i?: number): MacroElseIfBlockStmtContext | MacroElseIfBlockStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MacroElseIfBlockStmtContext);
		} else {
			return this.getRuleContext(i, MacroElseIfBlockStmtContext);
		}
	}
	public macroElseBlockStmt(): MacroElseBlockStmtContext | undefined {
		return this.tryGetRuleContext(0, MacroElseBlockStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_macroIfThenElseStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterMacroIfThenElseStmt) {
			listener.enterMacroIfThenElseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitMacroIfThenElseStmt) {
			listener.exitMacroIfThenElseStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitMacroIfThenElseStmt) {
			return visitor.visitMacroIfThenElseStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroIfBlockStmtContext extends ParserRuleContext {
	public MACRO_IF(): TerminalNode { return this.getToken(vbaParser.MACRO_IF, 0); }
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getRuleContext(0, IfConditionStmtContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public THEN(): TerminalNode { return this.getToken(vbaParser.THEN, 0); }
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public moduleDeclarations(): ModuleDeclarationsContext[];
	public moduleDeclarations(i: number): ModuleDeclarationsContext;
	public moduleDeclarations(i?: number): ModuleDeclarationsContext | ModuleDeclarationsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleDeclarationsContext);
		} else {
			return this.getRuleContext(i, ModuleDeclarationsContext);
		}
	}
	public moduleBody(): ModuleBodyContext[];
	public moduleBody(i: number): ModuleBodyContext;
	public moduleBody(i?: number): ModuleBodyContext | ModuleBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleBodyContext);
		} else {
			return this.getRuleContext(i, ModuleBodyContext);
		}
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_macroIfBlockStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterMacroIfBlockStmt) {
			listener.enterMacroIfBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitMacroIfBlockStmt) {
			listener.exitMacroIfBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitMacroIfBlockStmt) {
			return visitor.visitMacroIfBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroElseIfBlockStmtContext extends ParserRuleContext {
	public MACRO_ELSEIF(): TerminalNode { return this.getToken(vbaParser.MACRO_ELSEIF, 0); }
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getRuleContext(0, IfConditionStmtContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public THEN(): TerminalNode { return this.getToken(vbaParser.THEN, 0); }
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public moduleDeclarations(): ModuleDeclarationsContext[];
	public moduleDeclarations(i: number): ModuleDeclarationsContext;
	public moduleDeclarations(i?: number): ModuleDeclarationsContext | ModuleDeclarationsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleDeclarationsContext);
		} else {
			return this.getRuleContext(i, ModuleDeclarationsContext);
		}
	}
	public moduleBody(): ModuleBodyContext[];
	public moduleBody(i: number): ModuleBodyContext;
	public moduleBody(i?: number): ModuleBodyContext | ModuleBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleBodyContext);
		} else {
			return this.getRuleContext(i, ModuleBodyContext);
		}
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_macroElseIfBlockStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterMacroElseIfBlockStmt) {
			listener.enterMacroElseIfBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitMacroElseIfBlockStmt) {
			listener.exitMacroElseIfBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitMacroElseIfBlockStmt) {
			return visitor.visitMacroElseIfBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroElseBlockStmtContext extends ParserRuleContext {
	public MACRO_ELSE(): TerminalNode { return this.getToken(vbaParser.MACRO_ELSE, 0); }
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public moduleDeclarations(): ModuleDeclarationsContext[];
	public moduleDeclarations(i: number): ModuleDeclarationsContext;
	public moduleDeclarations(i?: number): ModuleDeclarationsContext | ModuleDeclarationsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleDeclarationsContext);
		} else {
			return this.getRuleContext(i, ModuleDeclarationsContext);
		}
	}
	public moduleBody(): ModuleBodyContext[];
	public moduleBody(i: number): ModuleBodyContext;
	public moduleBody(i?: number): ModuleBodyContext | ModuleBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleBodyContext);
		} else {
			return this.getRuleContext(i, ModuleBodyContext);
		}
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_macroElseBlockStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterMacroElseBlockStmt) {
			listener.enterMacroElseBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitMacroElseBlockStmt) {
			listener.exitMacroElseBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitMacroElseBlockStmt) {
			return visitor.visitMacroElseBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MidStmtContext extends ParserRuleContext {
	public MID(): TerminalNode { return this.getToken(vbaParser.MID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(vbaParser.LPAREN, 0); }
	public argsCall(): ArgsCallContext {
		return this.getRuleContext(0, ArgsCallContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(vbaParser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_midStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterMidStmt) {
			listener.enterMidStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitMidStmt) {
			listener.exitMidStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitMidStmt) {
			return visitor.visitMidStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MkdirStmtContext extends ParserRuleContext {
	public MKDIR(): TerminalNode { return this.getToken(vbaParser.MKDIR, 0); }
	public WS(): TerminalNode { return this.getToken(vbaParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_mkdirStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterMkdirStmt) {
			listener.enterMkdirStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitMkdirStmt) {
			listener.exitMkdirStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitMkdirStmt) {
			return visitor.visitMkdirStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameStmtContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(vbaParser.NAME, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public AS(): TerminalNode { return this.getToken(vbaParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_nameStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterNameStmt) {
			listener.enterNameStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitNameStmt) {
			listener.exitNameStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitNameStmt) {
			return visitor.visitNameStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnErrorStmtContext extends ParserRuleContext {
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public ON_ERROR(): TerminalNode | undefined { return this.tryGetToken(vbaParser.ON_ERROR, 0); }
	public ON_LOCAL_ERROR(): TerminalNode | undefined { return this.tryGetToken(vbaParser.ON_LOCAL_ERROR, 0); }
	public GOTO(): TerminalNode | undefined { return this.tryGetToken(vbaParser.GOTO, 0); }
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	public RESUME(): TerminalNode | undefined { return this.tryGetToken(vbaParser.RESUME, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.NEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_onErrorStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterOnErrorStmt) {
			listener.enterOnErrorStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitOnErrorStmt) {
			listener.exitOnErrorStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitOnErrorStmt) {
			return visitor.visitOnErrorStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnGoToStmtContext extends ParserRuleContext {
	public ON(): TerminalNode { return this.getToken(vbaParser.ON, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public GOTO(): TerminalNode { return this.getToken(vbaParser.GOTO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_onGoToStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterOnGoToStmt) {
			listener.enterOnGoToStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitOnGoToStmt) {
			listener.exitOnGoToStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitOnGoToStmt) {
			return visitor.visitOnGoToStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnGoSubStmtContext extends ParserRuleContext {
	public ON(): TerminalNode { return this.getToken(vbaParser.ON, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public GOSUB(): TerminalNode { return this.getToken(vbaParser.GOSUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_onGoSubStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterOnGoSubStmt) {
			listener.enterOnGoSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitOnGoSubStmt) {
			listener.exitOnGoSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitOnGoSubStmt) {
			return visitor.visitOnGoSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpenStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(vbaParser.OPEN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public FOR(): TerminalNode { return this.getToken(vbaParser.FOR, 0); }
	public AS(): TerminalNode { return this.getToken(vbaParser.AS, 0); }
	public fileNumber(): FileNumberContext {
		return this.getRuleContext(0, FileNumberContext);
	}
	public APPEND(): TerminalNode | undefined { return this.tryGetToken(vbaParser.APPEND, 0); }
	public BINARY(): TerminalNode | undefined { return this.tryGetToken(vbaParser.BINARY, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.INPUT, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.OUTPUT, 0); }
	public RANDOM(): TerminalNode | undefined { return this.tryGetToken(vbaParser.RANDOM, 0); }
	public ACCESS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.ACCESS, 0); }
	public LEN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LEN, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(vbaParser.EQ, 0); }
	public READ(): TerminalNode | undefined { return this.tryGetToken(vbaParser.READ, 0); }
	public WRITE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WRITE, 0); }
	public READ_WRITE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.READ_WRITE, 0); }
	public SHARED(): TerminalNode | undefined { return this.tryGetToken(vbaParser.SHARED, 0); }
	public LOCK_READ(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LOCK_READ, 0); }
	public LOCK_WRITE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LOCK_WRITE, 0); }
	public LOCK_READ_WRITE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LOCK_READ_WRITE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_openStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterOpenStmt) {
			listener.enterOpenStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitOpenStmt) {
			listener.exitOpenStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitOpenStmt) {
			return visitor.visitOpenStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputListContext extends ParserRuleContext {
	public outputList_Expression(): OutputList_ExpressionContext[];
	public outputList_Expression(i: number): OutputList_ExpressionContext;
	public outputList_Expression(i?: number): OutputList_ExpressionContext | OutputList_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OutputList_ExpressionContext);
		} else {
			return this.getRuleContext(i, OutputList_ExpressionContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_outputList; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterOutputList) {
			listener.enterOutputList(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitOutputList) {
			listener.exitOutputList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitOutputList) {
			return visitor.visitOutputList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputList_ExpressionContext extends ParserRuleContext {
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	public SPC(): TerminalNode | undefined { return this.tryGetToken(vbaParser.SPC, 0); }
	public TAB(): TerminalNode | undefined { return this.tryGetToken(vbaParser.TAB, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LPAREN, 0); }
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_outputList_Expression; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterOutputList_Expression) {
			listener.enterOutputList_Expression(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitOutputList_Expression) {
			listener.exitOutputList_Expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitOutputList_Expression) {
			return visitor.visitOutputList_Expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintStmtContext extends ParserRuleContext {
	public PRINT(): TerminalNode { return this.getToken(vbaParser.PRINT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public fileNumber(): FileNumberContext {
		return this.getRuleContext(0, FileNumberContext);
	}
	public outputList(): OutputListContext | undefined {
		return this.tryGetRuleContext(0, OutputListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_printStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterPrintStmt) {
			listener.enterPrintStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitPrintStmt) {
			listener.exitPrintStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitPrintStmt) {
			return visitor.visitPrintStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyGetStmtContext extends ParserRuleContext {
	public PROPERTY_GET(): TerminalNode { return this.getToken(vbaParser.PROPERTY_GET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public END_PROPERTY(): TerminalNode { return this.getToken(vbaParser.END_PROPERTY, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(vbaParser.STATIC, 0); }
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_propertyGetStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterPropertyGetStmt) {
			listener.enterPropertyGetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitPropertyGetStmt) {
			listener.exitPropertyGetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitPropertyGetStmt) {
			return visitor.visitPropertyGetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertySetStmtContext extends ParserRuleContext {
	public PROPERTY_SET(): TerminalNode { return this.getToken(vbaParser.PROPERTY_SET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public END_PROPERTY(): TerminalNode { return this.getToken(vbaParser.END_PROPERTY, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(vbaParser.STATIC, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_propertySetStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterPropertySetStmt) {
			listener.enterPropertySetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitPropertySetStmt) {
			listener.exitPropertySetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitPropertySetStmt) {
			return visitor.visitPropertySetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyLetStmtContext extends ParserRuleContext {
	public PROPERTY_LET(): TerminalNode { return this.getToken(vbaParser.PROPERTY_LET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public END_PROPERTY(): TerminalNode { return this.getToken(vbaParser.END_PROPERTY, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(vbaParser.STATIC, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_propertyLetStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterPropertyLetStmt) {
			listener.enterPropertyLetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitPropertyLetStmt) {
			listener.exitPropertyLetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitPropertyLetStmt) {
			return visitor.visitPropertyLetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PutStmtContext extends ParserRuleContext {
	public PUT(): TerminalNode { return this.getToken(vbaParser.PUT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public fileNumber(): FileNumberContext {
		return this.getRuleContext(0, FileNumberContext);
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_putStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterPutStmt) {
			listener.enterPutStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitPutStmt) {
			listener.exitPutStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitPutStmt) {
			return visitor.visitPutStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RaiseEventStmtContext extends ParserRuleContext {
	public RAISEEVENT(): TerminalNode { return this.getToken(vbaParser.RAISEEVENT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.RPAREN, 0); }
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_raiseEventStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterRaiseEventStmt) {
			listener.enterRaiseEventStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitRaiseEventStmt) {
			listener.exitRaiseEventStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitRaiseEventStmt) {
			return visitor.visitRaiseEventStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RandomizeStmtContext extends ParserRuleContext {
	public RANDOMIZE(): TerminalNode { return this.getToken(vbaParser.RANDOMIZE, 0); }
	public WS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WS, 0); }
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_randomizeStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterRandomizeStmt) {
			listener.enterRandomizeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitRandomizeStmt) {
			listener.exitRandomizeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitRandomizeStmt) {
			return visitor.visitRandomizeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RedimStmtContext extends ParserRuleContext {
	public REDIM(): TerminalNode { return this.getToken(vbaParser.REDIM, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public redimSubStmt(): RedimSubStmtContext[];
	public redimSubStmt(i: number): RedimSubStmtContext;
	public redimSubStmt(i?: number): RedimSubStmtContext | RedimSubStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RedimSubStmtContext);
		} else {
			return this.getRuleContext(i, RedimSubStmtContext);
		}
	}
	public PRESERVE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.PRESERVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_redimStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterRedimStmt) {
			listener.enterRedimStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitRedimStmt) {
			listener.exitRedimStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitRedimStmt) {
			return visitor.visitRedimStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RedimSubStmtContext extends ParserRuleContext {
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(vbaParser.LPAREN, 0); }
	public subscripts(): SubscriptsContext {
		return this.getRuleContext(0, SubscriptsContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(vbaParser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_redimSubStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterRedimSubStmt) {
			listener.enterRedimSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitRedimSubStmt) {
			listener.exitRedimSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitRedimSubStmt) {
			return visitor.visitRedimSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResetStmtContext extends ParserRuleContext {
	public RESET(): TerminalNode { return this.getToken(vbaParser.RESET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_resetStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterResetStmt) {
			listener.enterResetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitResetStmt) {
			listener.exitResetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitResetStmt) {
			return visitor.visitResetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResumeStmtContext extends ParserRuleContext {
	public RESUME(): TerminalNode { return this.getToken(vbaParser.RESUME, 0); }
	public WS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WS, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.NEXT, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_resumeStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterResumeStmt) {
			listener.enterResumeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitResumeStmt) {
			listener.exitResumeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitResumeStmt) {
			return visitor.visitResumeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(vbaParser.RETURN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_returnStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RmdirStmtContext extends ParserRuleContext {
	public RMDIR(): TerminalNode { return this.getToken(vbaParser.RMDIR, 0); }
	public WS(): TerminalNode { return this.getToken(vbaParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_rmdirStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterRmdirStmt) {
			listener.enterRmdirStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitRmdirStmt) {
			listener.exitRmdirStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitRmdirStmt) {
			return visitor.visitRmdirStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RsetStmtContext extends ParserRuleContext {
	public RSET(): TerminalNode { return this.getToken(vbaParser.RSET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public EQ(): TerminalNode { return this.getToken(vbaParser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_rsetStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterRsetStmt) {
			listener.enterRsetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitRsetStmt) {
			listener.exitRsetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitRsetStmt) {
			return visitor.visitRsetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SavepictureStmtContext extends ParserRuleContext {
	public SAVEPICTURE(): TerminalNode { return this.getToken(vbaParser.SAVEPICTURE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_savepictureStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterSavepictureStmt) {
			listener.enterSavepictureStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitSavepictureStmt) {
			listener.exitSavepictureStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitSavepictureStmt) {
			return visitor.visitSavepictureStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SaveSettingStmtContext extends ParserRuleContext {
	public SAVESETTING(): TerminalNode { return this.getToken(vbaParser.SAVESETTING, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_saveSettingStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterSaveSettingStmt) {
			listener.enterSaveSettingStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitSaveSettingStmt) {
			listener.exitSaveSettingStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitSaveSettingStmt) {
			return visitor.visitSaveSettingStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SeekStmtContext extends ParserRuleContext {
	public SEEK(): TerminalNode { return this.getToken(vbaParser.SEEK, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public fileNumber(): FileNumberContext {
		return this.getRuleContext(0, FileNumberContext);
	}
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_seekStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterSeekStmt) {
			listener.enterSeekStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitSeekStmt) {
			listener.exitSeekStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitSeekStmt) {
			return visitor.visitSeekStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectCaseStmtContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(vbaParser.SELECT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public CASE(): TerminalNode { return this.getToken(vbaParser.CASE, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public END_SELECT(): TerminalNode { return this.getToken(vbaParser.END_SELECT, 0); }
	public sC_Case(): SC_CaseContext[];
	public sC_Case(i: number): SC_CaseContext;
	public sC_Case(i?: number): SC_CaseContext | SC_CaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SC_CaseContext);
		} else {
			return this.getRuleContext(i, SC_CaseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_selectCaseStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterSelectCaseStmt) {
			listener.enterSelectCaseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitSelectCaseStmt) {
			listener.exitSelectCaseStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitSelectCaseStmt) {
			return visitor.visitSelectCaseStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SC_SelectionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_sC_Selection; }
	public copyFrom(ctx: SC_SelectionContext): void {
		super.copyFrom(ctx);
	}
}
export class CaseCondIsContext extends SC_SelectionContext {
	public IS(): TerminalNode { return this.getToken(vbaParser.IS, 0); }
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: SC_SelectionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterCaseCondIs) {
			listener.enterCaseCondIs(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitCaseCondIs) {
			listener.exitCaseCondIs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitCaseCondIs) {
			return visitor.visitCaseCondIs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CaseCondToContext extends SC_SelectionContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public TO(): TerminalNode { return this.getToken(vbaParser.TO, 0); }
	constructor(ctx: SC_SelectionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterCaseCondTo) {
			listener.enterCaseCondTo(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitCaseCondTo) {
			listener.exitCaseCondTo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitCaseCondTo) {
			return visitor.visitCaseCondTo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CaseCondValueContext extends SC_SelectionContext {
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(ctx: SC_SelectionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterCaseCondValue) {
			listener.enterCaseCondValue(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitCaseCondValue) {
			listener.exitCaseCondValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitCaseCondValue) {
			return visitor.visitCaseCondValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SC_CaseContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(vbaParser.CASE, 0); }
	public WS(): TerminalNode { return this.getToken(vbaParser.WS, 0); }
	public sC_Cond(): SC_CondContext {
		return this.getRuleContext(0, SC_CondContext);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_sC_Case; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterSC_Case) {
			listener.enterSC_Case(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitSC_Case) {
			listener.exitSC_Case(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitSC_Case) {
			return visitor.visitSC_Case(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SC_CondContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_sC_Cond; }
	public copyFrom(ctx: SC_CondContext): void {
		super.copyFrom(ctx);
	}
}
export class CaseCondElseContext extends SC_CondContext {
	public ELSE(): TerminalNode { return this.getToken(vbaParser.ELSE, 0); }
	constructor(ctx: SC_CondContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterCaseCondElse) {
			listener.enterCaseCondElse(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitCaseCondElse) {
			listener.exitCaseCondElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitCaseCondElse) {
			return visitor.visitCaseCondElse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CaseCondSelectionContext extends SC_CondContext {
	public sC_Selection(): SC_SelectionContext[];
	public sC_Selection(i: number): SC_SelectionContext;
	public sC_Selection(i?: number): SC_SelectionContext | SC_SelectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SC_SelectionContext);
		} else {
			return this.getRuleContext(i, SC_SelectionContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: SC_CondContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterCaseCondSelection) {
			listener.enterCaseCondSelection(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitCaseCondSelection) {
			listener.exitCaseCondSelection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitCaseCondSelection) {
			return visitor.visitCaseCondSelection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SendkeysStmtContext extends ParserRuleContext {
	public SENDKEYS(): TerminalNode { return this.getToken(vbaParser.SENDKEYS, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_sendkeysStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterSendkeysStmt) {
			listener.enterSendkeysStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitSendkeysStmt) {
			listener.exitSendkeysStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitSendkeysStmt) {
			return visitor.visitSendkeysStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetattrStmtContext extends ParserRuleContext {
	public SETATTR(): TerminalNode { return this.getToken(vbaParser.SETATTR, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_setattrStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterSetattrStmt) {
			listener.enterSetattrStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitSetattrStmt) {
			listener.exitSetattrStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitSetattrStmt) {
			return visitor.visitSetattrStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetStmtContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(vbaParser.SET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public EQ(): TerminalNode { return this.getToken(vbaParser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_setStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterSetStmt) {
			listener.enterSetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitSetStmt) {
			listener.exitSetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitSetStmt) {
			return visitor.visitSetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StopStmtContext extends ParserRuleContext {
	public STOP(): TerminalNode { return this.getToken(vbaParser.STOP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_stopStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterStopStmt) {
			listener.enterStopStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitStopStmt) {
			listener.exitStopStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitStopStmt) {
			return visitor.visitStopStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubStmtContext extends ParserRuleContext {
	public SUB(): TerminalNode { return this.getToken(vbaParser.SUB, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public END_SUB(): TerminalNode { return this.getToken(vbaParser.END_SUB, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(vbaParser.STATIC, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_subStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterSubStmt) {
			listener.enterSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitSubStmt) {
			listener.exitSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitSubStmt) {
			return visitor.visitSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeStmtContext extends ParserRuleContext {
	public TIME(): TerminalNode { return this.getToken(vbaParser.TIME, 0); }
	public EQ(): TerminalNode { return this.getToken(vbaParser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_timeStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterTimeStmt) {
			listener.enterTimeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitTimeStmt) {
			listener.exitTimeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitTimeStmt) {
			return visitor.visitTimeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStmtContext extends ParserRuleContext {
	public TYPE(): TerminalNode { return this.getToken(vbaParser.TYPE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public END_TYPE(): TerminalNode { return this.getToken(vbaParser.END_TYPE, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public typeStmt_Element(): TypeStmt_ElementContext[];
	public typeStmt_Element(i: number): TypeStmt_ElementContext;
	public typeStmt_Element(i?: number): TypeStmt_ElementContext | TypeStmt_ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeStmt_ElementContext);
		} else {
			return this.getRuleContext(i, TypeStmt_ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_typeStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterTypeStmt) {
			listener.enterTypeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitTypeStmt) {
			listener.exitTypeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitTypeStmt) {
			return visitor.visitTypeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStmt_ElementContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public subscripts(): SubscriptsContext | undefined {
		return this.tryGetRuleContext(0, SubscriptsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_typeStmt_Element; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterTypeStmt_Element) {
			listener.enterTypeStmt_Element(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitTypeStmt_Element) {
			listener.exitTypeStmt_Element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitTypeStmt_Element) {
			return visitor.visitTypeStmt_Element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeOfStmtContext extends ParserRuleContext {
	public TYPEOF(): TerminalNode { return this.getToken(vbaParser.TYPEOF, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public IS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.IS, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_typeOfStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterTypeOfStmt) {
			listener.enterTypeOfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitTypeOfStmt) {
			listener.exitTypeOfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitTypeOfStmt) {
			return visitor.visitTypeOfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnloadStmtContext extends ParserRuleContext {
	public UNLOAD(): TerminalNode { return this.getToken(vbaParser.UNLOAD, 0); }
	public WS(): TerminalNode { return this.getToken(vbaParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_unloadStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterUnloadStmt) {
			listener.enterUnloadStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitUnloadStmt) {
			listener.exitUnloadStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitUnloadStmt) {
			return visitor.visitUnloadStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnlockStmtContext extends ParserRuleContext {
	public UNLOCK(): TerminalNode { return this.getToken(vbaParser.UNLOCK, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public fileNumber(): FileNumberContext {
		return this.getRuleContext(0, FileNumberContext);
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(vbaParser.TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_unlockStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterUnlockStmt) {
			listener.enterUnlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitUnlockStmt) {
			listener.exitUnlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitUnlockStmt) {
			return visitor.visitUnlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_valueStmt; }
	public copyFrom(ctx: ValueStmtContext): void {
		super.copyFrom(ctx);
	}
}
export class VsLiteralContext extends ValueStmtContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsLiteral) {
			listener.enterVsLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsLiteral) {
			listener.exitVsLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsLiteral) {
			return visitor.visitVsLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsICSContext extends ValueStmtContext {
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsICS) {
			listener.enterVsICS(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsICS) {
			listener.exitVsICS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsICS) {
			return visitor.visitVsICS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsStructContext extends ValueStmtContext {
	public LPAREN(): TerminalNode { return this.getToken(vbaParser.LPAREN, 0); }
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(vbaParser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsStruct) {
			listener.enterVsStruct(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsStruct) {
			listener.exitVsStruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsStruct) {
			return visitor.visitVsStruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsNewContext extends ValueStmtContext {
	public NEW(): TerminalNode { return this.getToken(vbaParser.NEW, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WS, 0); }
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsNew) {
			listener.enterVsNew(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsNew) {
			listener.exitVsNew(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsNew) {
			return visitor.visitVsNew(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsTypeOfContext extends ValueStmtContext {
	public typeOfStmt(): TypeOfStmtContext {
		return this.getRuleContext(0, TypeOfStmtContext);
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsTypeOf) {
			listener.enterVsTypeOf(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsTypeOf) {
			listener.exitVsTypeOf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsTypeOf) {
			return visitor.visitVsTypeOf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsMidContext extends ValueStmtContext {
	public midStmt(): MidStmtContext {
		return this.getRuleContext(0, MidStmtContext);
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsMid) {
			listener.enterVsMid(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsMid) {
			listener.exitVsMid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsMid) {
			return visitor.visitVsMid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsAddressOfContext extends ValueStmtContext {
	public ADDRESSOF(): TerminalNode { return this.getToken(vbaParser.ADDRESSOF, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WS, 0); }
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsAddressOf) {
			listener.enterVsAddressOf(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsAddressOf) {
			listener.exitVsAddressOf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsAddressOf) {
			return visitor.visitVsAddressOf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsAssignContext extends ValueStmtContext {
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(vbaParser.ASSIGN, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsAssign) {
			listener.enterVsAssign(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsAssign) {
			listener.exitVsAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsAssign) {
			return visitor.visitVsAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsIsContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public IS(): TerminalNode { return this.getToken(vbaParser.IS, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsIs) {
			listener.enterVsIs(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsIs) {
			listener.exitVsIs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsIs) {
			return visitor.visitVsIs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsLikeContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public LIKE(): TerminalNode { return this.getToken(vbaParser.LIKE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsLike) {
			listener.enterVsLike(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsLike) {
			listener.exitVsLike(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsLike) {
			return visitor.visitVsLike(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsGeqContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public GEQ(): TerminalNode { return this.getToken(vbaParser.GEQ, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsGeq) {
			listener.enterVsGeq(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsGeq) {
			listener.exitVsGeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsGeq) {
			return visitor.visitVsGeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsLeqContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public LEQ(): TerminalNode { return this.getToken(vbaParser.LEQ, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsLeq) {
			listener.enterVsLeq(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsLeq) {
			listener.exitVsLeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsLeq) {
			return visitor.visitVsLeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsGtContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(vbaParser.GT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsGt) {
			listener.enterVsGt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsGt) {
			listener.exitVsGt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsGt) {
			return visitor.visitVsGt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsLtContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public LT(): TerminalNode { return this.getToken(vbaParser.LT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsLt) {
			listener.enterVsLt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsLt) {
			listener.exitVsLt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsLt) {
			return visitor.visitVsLt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsNeqContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public NEQ(): TerminalNode { return this.getToken(vbaParser.NEQ, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsNeq) {
			listener.enterVsNeq(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsNeq) {
			listener.exitVsNeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsNeq) {
			return visitor.visitVsNeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsEqContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public EQ(): TerminalNode { return this.getToken(vbaParser.EQ, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsEq) {
			listener.enterVsEq(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsEq) {
			listener.exitVsEq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsEq) {
			return visitor.visitVsEq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsPowContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public POW(): TerminalNode { return this.getToken(vbaParser.POW, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsPow) {
			listener.enterVsPow(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsPow) {
			listener.exitVsPow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsPow) {
			return visitor.visitVsPow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsNegationContext extends ValueStmtContext {
	public MINUS(): TerminalNode { return this.getToken(vbaParser.MINUS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WS, 0); }
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsNegation) {
			listener.enterVsNegation(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsNegation) {
			listener.exitVsNegation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsNegation) {
			return visitor.visitVsNegation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsPlusContext extends ValueStmtContext {
	public PLUS(): TerminalNode { return this.getToken(vbaParser.PLUS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WS, 0); }
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsPlus) {
			listener.enterVsPlus(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsPlus) {
			listener.exitVsPlus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsPlus) {
			return visitor.visitVsPlus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsDivContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public DIV(): TerminalNode { return this.getToken(vbaParser.DIV, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsDiv) {
			listener.enterVsDiv(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsDiv) {
			listener.exitVsDiv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsDiv) {
			return visitor.visitVsDiv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsMultContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public MULT(): TerminalNode { return this.getToken(vbaParser.MULT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsMult) {
			listener.enterVsMult(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsMult) {
			listener.exitVsMult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsMult) {
			return visitor.visitVsMult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsModContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public MOD(): TerminalNode { return this.getToken(vbaParser.MOD, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsMod) {
			listener.enterVsMod(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsMod) {
			listener.exitVsMod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsMod) {
			return visitor.visitVsMod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsAddContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public PLUS(): TerminalNode { return this.getToken(vbaParser.PLUS, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsAdd) {
			listener.enterVsAdd(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsAdd) {
			listener.exitVsAdd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsAdd) {
			return visitor.visitVsAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsMinusContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public MINUS(): TerminalNode { return this.getToken(vbaParser.MINUS, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsMinus) {
			listener.enterVsMinus(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsMinus) {
			listener.exitVsMinus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsMinus) {
			return visitor.visitVsMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsAmpContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public AMPERSAND(): TerminalNode { return this.getToken(vbaParser.AMPERSAND, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsAmp) {
			listener.enterVsAmp(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsAmp) {
			listener.exitVsAmp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsAmp) {
			return visitor.visitVsAmp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsImpContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public IMP(): TerminalNode { return this.getToken(vbaParser.IMP, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsImp) {
			listener.enterVsImp(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsImp) {
			listener.exitVsImp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsImp) {
			return visitor.visitVsImp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsEqvContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public EQV(): TerminalNode { return this.getToken(vbaParser.EQV, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsEqv) {
			listener.enterVsEqv(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsEqv) {
			listener.exitVsEqv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsEqv) {
			return visitor.visitVsEqv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsXorContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public XOR(): TerminalNode { return this.getToken(vbaParser.XOR, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsXor) {
			listener.enterVsXor(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsXor) {
			listener.exitVsXor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsXor) {
			return visitor.visitVsXor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsOrContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(vbaParser.OR, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsOr) {
			listener.enterVsOr(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsOr) {
			listener.exitVsOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsOr) {
			return visitor.visitVsOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsAndContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(vbaParser.AND, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsAnd) {
			listener.enterVsAnd(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsAnd) {
			listener.exitVsAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsAnd) {
			return visitor.visitVsAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsNotContext extends ValueStmtContext {
	public NOT(): TerminalNode { return this.getToken(vbaParser.NOT, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WS, 0); }
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVsNot) {
			listener.enterVsNot(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVsNot) {
			listener.exitVsNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVsNot) {
			return visitor.visitVsNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableStmtContext extends ParserRuleContext {
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public variableListStmt(): VariableListStmtContext {
		return this.getRuleContext(0, VariableListStmtContext);
	}
	public DIM(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DIM, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(vbaParser.STATIC, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public WITHEVENTS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WITHEVENTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_variableStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVariableStmt) {
			listener.enterVariableStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVariableStmt) {
			listener.exitVariableStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVariableStmt) {
			return visitor.visitVariableStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableListStmtContext extends ParserRuleContext {
	public variableSubStmt(): VariableSubStmtContext[];
	public variableSubStmt(i: number): VariableSubStmtContext;
	public variableSubStmt(i?: number): VariableSubStmtContext | VariableSubStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableSubStmtContext);
		} else {
			return this.getRuleContext(i, VariableSubStmtContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_variableListStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVariableListStmt) {
			listener.enterVariableListStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVariableListStmt) {
			listener.exitVariableListStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVariableListStmt) {
			return visitor.visitVariableListStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableSubStmtContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.RPAREN, 0); }
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public subscripts(): SubscriptsContext | undefined {
		return this.tryGetRuleContext(0, SubscriptsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_variableSubStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVariableSubStmt) {
			listener.enterVariableSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVariableSubStmt) {
			listener.exitVariableSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVariableSubStmt) {
			return visitor.visitVariableSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileWendStmtContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(vbaParser.WHILE, 0); }
	public WS(): TerminalNode { return this.getToken(vbaParser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public WEND(): TerminalNode { return this.getToken(vbaParser.WEND, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_whileWendStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterWhileWendStmt) {
			listener.enterWhileWendStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitWhileWendStmt) {
			listener.exitWhileWendStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitWhileWendStmt) {
			return visitor.visitWhileWendStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WidthStmtContext extends ParserRuleContext {
	public WIDTH(): TerminalNode { return this.getToken(vbaParser.WIDTH, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public fileNumber(): FileNumberContext {
		return this.getRuleContext(0, FileNumberContext);
	}
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_widthStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterWidthStmt) {
			listener.enterWidthStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitWidthStmt) {
			listener.exitWidthStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitWidthStmt) {
			return visitor.visitWidthStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithStmtContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(vbaParser.WITH, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public endOfStatement(): EndOfStatementContext {
		return this.getRuleContext(0, EndOfStatementContext);
	}
	public END_WITH(): TerminalNode { return this.getToken(vbaParser.END_WITH, 0); }
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext | undefined {
		return this.tryGetRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(vbaParser.NEW, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_withStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterWithStmt) {
			listener.enterWithStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitWithStmt) {
			listener.exitWithStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitWithStmt) {
			return visitor.visitWithStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WriteStmtContext extends ParserRuleContext {
	public WRITE(): TerminalNode { return this.getToken(vbaParser.WRITE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public fileNumber(): FileNumberContext {
		return this.getRuleContext(0, FileNumberContext);
	}
	public outputList(): OutputListContext | undefined {
		return this.tryGetRuleContext(0, OutputListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_writeStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterWriteStmt) {
			listener.enterWriteStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitWriteStmt) {
			listener.exitWriteStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitWriteStmt) {
			return visitor.visitWriteStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FileNumberContext extends ParserRuleContext {
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_fileNumber; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterFileNumber) {
			listener.enterFileNumber(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitFileNumber) {
			listener.exitFileNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitFileNumber) {
			return visitor.visitFileNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitCallStmtContext extends ParserRuleContext {
	public eCS_ProcedureCall(): ECS_ProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ECS_ProcedureCallContext);
	}
	public eCS_MemberProcedureCall(): ECS_MemberProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ECS_MemberProcedureCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_explicitCallStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterExplicitCallStmt) {
			listener.enterExplicitCallStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitExplicitCallStmt) {
			listener.exitExplicitCallStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitExplicitCallStmt) {
			return visitor.visitExplicitCallStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ECS_ProcedureCallContext extends ParserRuleContext {
	public CALL(): TerminalNode { return this.getToken(vbaParser.CALL, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.LPAREN);
		} else {
			return this.getToken(vbaParser.LPAREN, i);
		}
	}
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.RPAREN);
		} else {
			return this.getToken(vbaParser.RPAREN, i);
		}
	}
	public subscripts(): SubscriptsContext[];
	public subscripts(i: number): SubscriptsContext;
	public subscripts(i?: number): SubscriptsContext | SubscriptsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubscriptsContext);
		} else {
			return this.getRuleContext(i, SubscriptsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_eCS_ProcedureCall; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterECS_ProcedureCall) {
			listener.enterECS_ProcedureCall(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitECS_ProcedureCall) {
			listener.exitECS_ProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitECS_ProcedureCall) {
			return visitor.visitECS_ProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ECS_MemberProcedureCallContext extends ParserRuleContext {
	public CALL(): TerminalNode { return this.getToken(vbaParser.CALL, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext | undefined {
		return this.tryGetRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.LPAREN);
		} else {
			return this.getToken(vbaParser.LPAREN, i);
		}
	}
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.RPAREN);
		} else {
			return this.getToken(vbaParser.RPAREN, i);
		}
	}
	public subscripts(): SubscriptsContext[];
	public subscripts(i: number): SubscriptsContext;
	public subscripts(i?: number): SubscriptsContext | SubscriptsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubscriptsContext);
		} else {
			return this.getRuleContext(i, SubscriptsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_eCS_MemberProcedureCall; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterECS_MemberProcedureCall) {
			listener.enterECS_MemberProcedureCall(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitECS_MemberProcedureCall) {
			listener.exitECS_MemberProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitECS_MemberProcedureCall) {
			return visitor.visitECS_MemberProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplicitCallStmt_InBlockContext extends ParserRuleContext {
	public iCS_B_MemberProcedureCall(): ICS_B_MemberProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_B_MemberProcedureCallContext);
	}
	public iCS_B_ProcedureCall(): ICS_B_ProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_B_ProcedureCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_implicitCallStmt_InBlock; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterImplicitCallStmt_InBlock) {
			listener.enterImplicitCallStmt_InBlock(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitImplicitCallStmt_InBlock) {
			listener.exitImplicitCallStmt_InBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitImplicitCallStmt_InBlock) {
			return visitor.visitImplicitCallStmt_InBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_B_MemberProcedureCallContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext | undefined {
		return this.tryGetRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	public dictionaryCallStmt(): DictionaryCallStmtContext | undefined {
		return this.tryGetRuleContext(0, DictionaryCallStmtContext);
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.LPAREN);
		} else {
			return this.getToken(vbaParser.LPAREN, i);
		}
	}
	public subscripts(): SubscriptsContext[];
	public subscripts(i: number): SubscriptsContext;
	public subscripts(i?: number): SubscriptsContext | SubscriptsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubscriptsContext);
		} else {
			return this.getRuleContext(i, SubscriptsContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.RPAREN);
		} else {
			return this.getToken(vbaParser.RPAREN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_iCS_B_MemberProcedureCall; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterICS_B_MemberProcedureCall) {
			listener.enterICS_B_MemberProcedureCall(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitICS_B_MemberProcedureCall) {
			listener.exitICS_B_MemberProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitICS_B_MemberProcedureCall) {
			return visitor.visitICS_B_MemberProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_B_ProcedureCallContext extends ParserRuleContext {
	public certainIdentifier(): CertainIdentifierContext {
		return this.getRuleContext(0, CertainIdentifierContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.LPAREN);
		} else {
			return this.getToken(vbaParser.LPAREN, i);
		}
	}
	public subscripts(): SubscriptsContext[];
	public subscripts(i: number): SubscriptsContext;
	public subscripts(i?: number): SubscriptsContext | SubscriptsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubscriptsContext);
		} else {
			return this.getRuleContext(i, SubscriptsContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.RPAREN);
		} else {
			return this.getToken(vbaParser.RPAREN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_iCS_B_ProcedureCall; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterICS_B_ProcedureCall) {
			listener.enterICS_B_ProcedureCall(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitICS_B_ProcedureCall) {
			listener.exitICS_B_ProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitICS_B_ProcedureCall) {
			return visitor.visitICS_B_ProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplicitCallStmt_InStmtContext extends ParserRuleContext {
	public iCS_S_MembersCall(): ICS_S_MembersCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_MembersCallContext);
	}
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_VariableOrProcedureCallContext);
	}
	public iCS_S_ProcedureOrArrayCall(): ICS_S_ProcedureOrArrayCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_ProcedureOrArrayCallContext);
	}
	public iCS_S_DictionaryCall(): ICS_S_DictionaryCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_DictionaryCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_implicitCallStmt_InStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterImplicitCallStmt_InStmt) {
			listener.enterImplicitCallStmt_InStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitImplicitCallStmt_InStmt) {
			listener.exitImplicitCallStmt_InStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitImplicitCallStmt_InStmt) {
			return visitor.visitImplicitCallStmt_InStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_S_VariableOrProcedureCallContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public dictionaryCallStmt(): DictionaryCallStmtContext | undefined {
		return this.tryGetRuleContext(0, DictionaryCallStmtContext);
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.LPAREN);
		} else {
			return this.getToken(vbaParser.LPAREN, i);
		}
	}
	public subscripts(): SubscriptsContext[];
	public subscripts(i: number): SubscriptsContext;
	public subscripts(i?: number): SubscriptsContext | SubscriptsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubscriptsContext);
		} else {
			return this.getRuleContext(i, SubscriptsContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.RPAREN);
		} else {
			return this.getToken(vbaParser.RPAREN, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_iCS_S_VariableOrProcedureCall; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterICS_S_VariableOrProcedureCall) {
			listener.enterICS_S_VariableOrProcedureCall(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitICS_S_VariableOrProcedureCall) {
			listener.exitICS_S_VariableOrProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitICS_S_VariableOrProcedureCall) {
			return visitor.visitICS_S_VariableOrProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_S_ProcedureOrArrayCallContext extends ParserRuleContext {
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.LPAREN);
		} else {
			return this.getToken(vbaParser.LPAREN, i);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.RPAREN);
		} else {
			return this.getToken(vbaParser.RPAREN, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousIdentifierContext);
	}
	public baseType(): BaseTypeContext | undefined {
		return this.tryGetRuleContext(0, BaseTypeContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	public dictionaryCallStmt(): DictionaryCallStmtContext | undefined {
		return this.tryGetRuleContext(0, DictionaryCallStmtContext);
	}
	public subscripts(): SubscriptsContext[];
	public subscripts(i: number): SubscriptsContext;
	public subscripts(i?: number): SubscriptsContext | SubscriptsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubscriptsContext);
		} else {
			return this.getRuleContext(i, SubscriptsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_iCS_S_ProcedureOrArrayCall; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterICS_S_ProcedureOrArrayCall) {
			listener.enterICS_S_ProcedureOrArrayCall(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitICS_S_ProcedureOrArrayCall) {
			listener.exitICS_S_ProcedureOrArrayCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitICS_S_ProcedureOrArrayCall) {
			return visitor.visitICS_S_ProcedureOrArrayCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_S_MembersCallContext extends ParserRuleContext {
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_VariableOrProcedureCallContext);
	}
	public iCS_S_ProcedureOrArrayCall(): ICS_S_ProcedureOrArrayCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_ProcedureOrArrayCallContext);
	}
	public iCS_S_MemberCall(): ICS_S_MemberCallContext[];
	public iCS_S_MemberCall(i: number): ICS_S_MemberCallContext;
	public iCS_S_MemberCall(i?: number): ICS_S_MemberCallContext | ICS_S_MemberCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ICS_S_MemberCallContext);
		} else {
			return this.getRuleContext(i, ICS_S_MemberCallContext);
		}
	}
	public dictionaryCallStmt(): DictionaryCallStmtContext | undefined {
		return this.tryGetRuleContext(0, DictionaryCallStmtContext);
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.LPAREN);
		} else {
			return this.getToken(vbaParser.LPAREN, i);
		}
	}
	public subscripts(): SubscriptsContext[];
	public subscripts(i: number): SubscriptsContext;
	public subscripts(i?: number): SubscriptsContext | SubscriptsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubscriptsContext);
		} else {
			return this.getRuleContext(i, SubscriptsContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.RPAREN);
		} else {
			return this.getToken(vbaParser.RPAREN, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_iCS_S_MembersCall; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterICS_S_MembersCall) {
			listener.enterICS_S_MembersCall(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitICS_S_MembersCall) {
			listener.exitICS_S_MembersCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitICS_S_MembersCall) {
			return visitor.visitICS_S_MembersCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_S_MemberCallContext extends ParserRuleContext {
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_VariableOrProcedureCallContext);
	}
	public iCS_S_ProcedureOrArrayCall(): ICS_S_ProcedureOrArrayCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_ProcedureOrArrayCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_iCS_S_MemberCall; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterICS_S_MemberCall) {
			listener.enterICS_S_MemberCall(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitICS_S_MemberCall) {
			listener.exitICS_S_MemberCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitICS_S_MemberCall) {
			return visitor.visitICS_S_MemberCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_S_DictionaryCallContext extends ParserRuleContext {
	public dictionaryCallStmt(): DictionaryCallStmtContext {
		return this.getRuleContext(0, DictionaryCallStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_iCS_S_DictionaryCall; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterICS_S_DictionaryCall) {
			listener.enterICS_S_DictionaryCall(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitICS_S_DictionaryCall) {
			listener.exitICS_S_DictionaryCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitICS_S_DictionaryCall) {
			return visitor.visitICS_S_DictionaryCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsCallContext extends ParserRuleContext {
	public argCall(): ArgCallContext[];
	public argCall(i: number): ArgCallContext;
	public argCall(i?: number): ArgCallContext | ArgCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgCallContext);
		} else {
			return this.getRuleContext(i, ArgCallContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_argsCall; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterArgsCall) {
			listener.enterArgsCall(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitArgsCall) {
			listener.exitArgsCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitArgsCall) {
			return visitor.visitArgsCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgCallContext extends ParserRuleContext {
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LPAREN, 0); }
	public WS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WS, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.RPAREN, 0); }
	public BYVAL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.BYVAL, 0); }
	public BYREF(): TerminalNode | undefined { return this.tryGetToken(vbaParser.BYREF, 0); }
	public PARAMARRAY(): TerminalNode | undefined { return this.tryGetToken(vbaParser.PARAMARRAY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_argCall; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterArgCall) {
			listener.enterArgCall(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitArgCall) {
			listener.exitArgCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitArgCall) {
			return visitor.visitArgCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DictionaryCallStmtContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_dictionaryCallStmt; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterDictionaryCallStmt) {
			listener.enterDictionaryCallStmt(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitDictionaryCallStmt) {
			listener.exitDictionaryCallStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitDictionaryCallStmt) {
			return visitor.visitDictionaryCallStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(vbaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(vbaParser.RPAREN, 0); }
	public arg(): ArgContext[];
	public arg(i: number): ArgContext;
	public arg(i?: number): ArgContext | ArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgContext);
		} else {
			return this.getRuleContext(i, ArgContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_argList; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterArgList) {
			listener.enterArgList(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitArgList) {
			listener.exitArgList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitArgList) {
			return visitor.visitArgList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.OPTIONAL, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public PARAMARRAY(): TerminalNode | undefined { return this.tryGetToken(vbaParser.PARAMARRAY, 0); }
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.RPAREN, 0); }
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public argDefaultValue(): ArgDefaultValueContext | undefined {
		return this.tryGetRuleContext(0, ArgDefaultValueContext);
	}
	public BYVAL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.BYVAL, 0); }
	public BYREF(): TerminalNode | undefined { return this.tryGetToken(vbaParser.BYREF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_arg; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterArg) {
			listener.enterArg(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitArg) {
			listener.exitArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitArg) {
			return visitor.visitArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgDefaultValueContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(vbaParser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_argDefaultValue; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterArgDefaultValue) {
			listener.enterArgDefaultValue(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitArgDefaultValue) {
			listener.exitArgDefaultValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitArgDefaultValue) {
			return visitor.visitArgDefaultValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubscriptsContext extends ParserRuleContext {
	public subscript(): SubscriptContext[];
	public subscript(i: number): SubscriptContext;
	public subscript(i?: number): SubscriptContext | SubscriptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubscriptContext);
		} else {
			return this.getRuleContext(i, SubscriptContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_subscripts; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterSubscripts) {
			listener.enterSubscripts(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitSubscripts) {
			listener.exitSubscripts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitSubscripts) {
			return visitor.visitSubscripts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubscriptContext extends ParserRuleContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(vbaParser.TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_subscript; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitSubscript) {
			listener.exitSubscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitSubscript) {
			return visitor.visitSubscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AmbiguousIdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.IDENTIFIER);
		} else {
			return this.getToken(vbaParser.IDENTIFIER, i);
		}
	}
	public ambiguousKeyword(): AmbiguousKeywordContext[];
	public ambiguousKeyword(i: number): AmbiguousKeywordContext;
	public ambiguousKeyword(i?: number): AmbiguousKeywordContext | AmbiguousKeywordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AmbiguousKeywordContext);
		} else {
			return this.getRuleContext(i, AmbiguousKeywordContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_ambiguousIdentifier; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterAmbiguousIdentifier) {
			listener.enterAmbiguousIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitAmbiguousIdentifier) {
			listener.exitAmbiguousIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitAmbiguousIdentifier) {
			return visitor.visitAmbiguousIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsTypeClauseContext extends ParserRuleContext {
	public AS(): TerminalNode { return this.getToken(vbaParser.AS, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(vbaParser.NEW, 0); }
	public fieldLength(): FieldLengthContext | undefined {
		return this.tryGetRuleContext(0, FieldLengthContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_asTypeClause; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterAsTypeClause) {
			listener.enterAsTypeClause(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitAsTypeClause) {
			listener.exitAsTypeClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitAsTypeClause) {
			return visitor.visitAsTypeClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BaseTypeContext extends ParserRuleContext {
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.BOOLEAN, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.BYTE, 0); }
	public COLLECTION(): TerminalNode | undefined { return this.tryGetToken(vbaParser.COLLECTION, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DATE, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DOUBLE, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(vbaParser.INTEGER, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LONG, 0); }
	public SINGLE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.SINGLE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(vbaParser.STRING, 0); }
	public MULT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.MULT, 0); }
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	public VARIANT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.VARIANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_baseType; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterBaseType) {
			listener.enterBaseType(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitBaseType) {
			listener.exitBaseType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitBaseType) {
			return visitor.visitBaseType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CertainIdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.IDENTIFIER);
		} else {
			return this.getToken(vbaParser.IDENTIFIER, i);
		}
	}
	public ambiguousKeyword(): AmbiguousKeywordContext[];
	public ambiguousKeyword(i: number): AmbiguousKeywordContext;
	public ambiguousKeyword(i?: number): AmbiguousKeywordContext | AmbiguousKeywordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AmbiguousKeywordContext);
		} else {
			return this.getRuleContext(i, AmbiguousKeywordContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_certainIdentifier; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterCertainIdentifier) {
			listener.enterCertainIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitCertainIdentifier) {
			listener.exitCertainIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitCertainIdentifier) {
			return visitor.visitCertainIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LT, 0); }
	public LEQ(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LEQ, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.GT, 0); }
	public GEQ(): TerminalNode | undefined { return this.tryGetToken(vbaParser.GEQ, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(vbaParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(vbaParser.NEQ, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.IS, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LIKE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComplexTypeContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext[];
	public ambiguousIdentifier(i: number): AmbiguousIdentifierContext;
	public ambiguousIdentifier(i?: number): AmbiguousIdentifierContext | AmbiguousIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AmbiguousIdentifierContext);
		} else {
			return this.getRuleContext(i, AmbiguousIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_complexType; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterComplexType) {
			listener.enterComplexType(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitComplexType) {
			listener.exitComplexType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitComplexType) {
			return visitor.visitComplexType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldLengthContext extends ParserRuleContext {
	public MULT(): TerminalNode { return this.getToken(vbaParser.MULT, 0); }
	public INTEGERLITERAL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.INTEGERLITERAL, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousIdentifierContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_fieldLength; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterFieldLength) {
			listener.enterFieldLength(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitFieldLength) {
			listener.exitFieldLength(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitFieldLength) {
			return visitor.visitFieldLength(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetterrangeContext extends ParserRuleContext {
	public certainIdentifier(): CertainIdentifierContext[];
	public certainIdentifier(i: number): CertainIdentifierContext;
	public certainIdentifier(i?: number): CertainIdentifierContext | CertainIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CertainIdentifierContext);
		} else {
			return this.getRuleContext(i, CertainIdentifierContext);
		}
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.MINUS, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_letterrange; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterLetterrange) {
			listener.enterLetterrange(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitLetterrange) {
			listener.exitLetterrange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitLetterrange) {
			return visitor.visitLetterrange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineLabelContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(vbaParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_lineLabel; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterLineLabel) {
			listener.enterLineLabel(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitLineLabel) {
			listener.exitLineLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitLineLabel) {
			return visitor.visitLineLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public HEXLITERAL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.HEXLITERAL, 0); }
	public OCTLITERAL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.OCTLITERAL, 0); }
	public DATELITERAL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DATELITERAL, 0); }
	public DOUBLELITERAL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DOUBLELITERAL, 0); }
	public INTEGERLITERAL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.INTEGERLITERAL, 0); }
	public SHORTLITERAL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.SHORTLITERAL, 0); }
	public STRINGLITERAL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.STRINGLITERAL, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.FALSE, 0); }
	public NOTHING(): TerminalNode | undefined { return this.tryGetToken(vbaParser.NOTHING, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_literal; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public baseType(): BaseTypeContext | undefined {
		return this.tryGetRuleContext(0, BaseTypeContext);
	}
	public complexType(): ComplexTypeContext | undefined {
		return this.tryGetRuleContext(0, ComplexTypeContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_type; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeHintContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(vbaParser.AMPERSAND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_typeHint; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterTypeHint) {
			listener.enterTypeHint(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitTypeHint) {
			listener.exitTypeHint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitTypeHint) {
			return visitor.visitTypeHint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VisibilityContext extends ParserRuleContext {
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.PRIVATE, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(vbaParser.PUBLIC, 0); }
	public FRIEND(): TerminalNode | undefined { return this.tryGetToken(vbaParser.FRIEND, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.GLOBAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_visibility; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterVisibility) {
			listener.enterVisibility(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitVisibility) {
			listener.exitVisibility(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitVisibility) {
			return visitor.visitVisibility(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AmbiguousKeywordContext extends ParserRuleContext {
	public ACCESS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.ACCESS, 0); }
	public ADDRESSOF(): TerminalNode | undefined { return this.tryGetToken(vbaParser.ADDRESSOF, 0); }
	public ALIAS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.ALIAS, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(vbaParser.AND, 0); }
	public ATTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.ATTRIBUTE, 0); }
	public APPACTIVATE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.APPACTIVATE, 0); }
	public APPEND(): TerminalNode | undefined { return this.tryGetToken(vbaParser.APPEND, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.AS, 0); }
	public BEEP(): TerminalNode | undefined { return this.tryGetToken(vbaParser.BEEP, 0); }
	public BEGIN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.BEGIN, 0); }
	public BINARY(): TerminalNode | undefined { return this.tryGetToken(vbaParser.BINARY, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.BOOLEAN, 0); }
	public BYVAL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.BYVAL, 0); }
	public BYREF(): TerminalNode | undefined { return this.tryGetToken(vbaParser.BYREF, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.BYTE, 0); }
	public CALL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.CALL, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.CASE, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.CLASS, 0); }
	public CLOSE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.CLOSE, 0); }
	public CHDIR(): TerminalNode | undefined { return this.tryGetToken(vbaParser.CHDIR, 0); }
	public CHDRIVE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.CHDRIVE, 0); }
	public COLLECTION(): TerminalNode | undefined { return this.tryGetToken(vbaParser.COLLECTION, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(vbaParser.CONST, 0); }
	public DATABASE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DATABASE, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DATE, 0); }
	public DECLARE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DECLARE, 0); }
	public DEFBOOL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFBOOL, 0); }
	public DEFBYTE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFBYTE, 0); }
	public DEFCUR(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFCUR, 0); }
	public DEFDBL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFDBL, 0); }
	public DEFDATE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFDATE, 0); }
	public DEFDEC(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFDEC, 0); }
	public DEFINT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFINT, 0); }
	public DEFLNG(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFLNG, 0); }
	public DEFOBJ(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFOBJ, 0); }
	public DEFSNG(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFSNG, 0); }
	public DEFSTR(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFSTR, 0); }
	public DEFVAR(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DEFVAR, 0); }
	public DELETESETTING(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DELETESETTING, 0); }
	public DIM(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DIM, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DO, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.DOUBLE, 0); }
	public EACH(): TerminalNode | undefined { return this.tryGetToken(vbaParser.EACH, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.ELSE, 0); }
	public ELSEIF(): TerminalNode | undefined { return this.tryGetToken(vbaParser.ELSEIF, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(vbaParser.END, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(vbaParser.ENUM, 0); }
	public EQV(): TerminalNode | undefined { return this.tryGetToken(vbaParser.EQV, 0); }
	public ERASE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.ERASE, 0); }
	public ERROR(): TerminalNode | undefined { return this.tryGetToken(vbaParser.ERROR, 0); }
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.EVENT, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.FALSE, 0); }
	public FILECOPY(): TerminalNode | undefined { return this.tryGetToken(vbaParser.FILECOPY, 0); }
	public FRIEND(): TerminalNode | undefined { return this.tryGetToken(vbaParser.FRIEND, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(vbaParser.FOR, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(vbaParser.FUNCTION, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(vbaParser.GET, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.GLOBAL, 0); }
	public GOSUB(): TerminalNode | undefined { return this.tryGetToken(vbaParser.GOSUB, 0); }
	public GOTO(): TerminalNode | undefined { return this.tryGetToken(vbaParser.GOTO, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(vbaParser.IF, 0); }
	public IMP(): TerminalNode | undefined { return this.tryGetToken(vbaParser.IMP, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.IMPLEMENTS, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.IN, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.INPUT, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.IS, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(vbaParser.INTEGER, 0); }
	public KILL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.KILL, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LOAD, 0); }
	public LOCK(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LOCK, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LONG, 0); }
	public LOOP(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LOOP, 0); }
	public LEN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LEN, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LET, 0); }
	public LIB(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LIB, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LIKE, 0); }
	public LSET(): TerminalNode | undefined { return this.tryGetToken(vbaParser.LSET, 0); }
	public ME(): TerminalNode | undefined { return this.tryGetToken(vbaParser.ME, 0); }
	public MID(): TerminalNode | undefined { return this.tryGetToken(vbaParser.MID, 0); }
	public MKDIR(): TerminalNode | undefined { return this.tryGetToken(vbaParser.MKDIR, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(vbaParser.MOD, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(vbaParser.NAME, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.NEXT, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(vbaParser.NEW, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.NOT, 0); }
	public NOTHING(): TerminalNode | undefined { return this.tryGetToken(vbaParser.NOTHING, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.NULL, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(vbaParser.ON, 0); }
	public OPEN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.OPEN, 0); }
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.OPTIONAL, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(vbaParser.OR, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.OUTPUT, 0); }
	public PARAMARRAY(): TerminalNode | undefined { return this.tryGetToken(vbaParser.PARAMARRAY, 0); }
	public PRESERVE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.PRESERVE, 0); }
	public PRINT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.PRINT, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.PRIVATE, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(vbaParser.PUBLIC, 0); }
	public PUT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.PUT, 0); }
	public RANDOM(): TerminalNode | undefined { return this.tryGetToken(vbaParser.RANDOM, 0); }
	public RANDOMIZE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.RANDOMIZE, 0); }
	public RAISEEVENT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.RAISEEVENT, 0); }
	public READ(): TerminalNode | undefined { return this.tryGetToken(vbaParser.READ, 0); }
	public REDIM(): TerminalNode | undefined { return this.tryGetToken(vbaParser.REDIM, 0); }
	public REM(): TerminalNode | undefined { return this.tryGetToken(vbaParser.REM, 0); }
	public RESET(): TerminalNode | undefined { return this.tryGetToken(vbaParser.RESET, 0); }
	public RESUME(): TerminalNode | undefined { return this.tryGetToken(vbaParser.RESUME, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.RETURN, 0); }
	public RMDIR(): TerminalNode | undefined { return this.tryGetToken(vbaParser.RMDIR, 0); }
	public RSET(): TerminalNode | undefined { return this.tryGetToken(vbaParser.RSET, 0); }
	public SAVEPICTURE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.SAVEPICTURE, 0); }
	public SAVESETTING(): TerminalNode | undefined { return this.tryGetToken(vbaParser.SAVESETTING, 0); }
	public SEEK(): TerminalNode | undefined { return this.tryGetToken(vbaParser.SEEK, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.SELECT, 0); }
	public SENDKEYS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.SENDKEYS, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(vbaParser.SET, 0); }
	public SETATTR(): TerminalNode | undefined { return this.tryGetToken(vbaParser.SETATTR, 0); }
	public SHARED(): TerminalNode | undefined { return this.tryGetToken(vbaParser.SHARED, 0); }
	public SINGLE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.SINGLE, 0); }
	public SPC(): TerminalNode | undefined { return this.tryGetToken(vbaParser.SPC, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(vbaParser.STATIC, 0); }
	public STEP(): TerminalNode | undefined { return this.tryGetToken(vbaParser.STEP, 0); }
	public STOP(): TerminalNode | undefined { return this.tryGetToken(vbaParser.STOP, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(vbaParser.STRING, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(vbaParser.SUB, 0); }
	public TAB(): TerminalNode | undefined { return this.tryGetToken(vbaParser.TAB, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.TEXT, 0); }
	public THEN(): TerminalNode | undefined { return this.tryGetToken(vbaParser.THEN, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(vbaParser.TIME, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(vbaParser.TO, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.TRUE, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.TYPE, 0); }
	public TYPEOF(): TerminalNode | undefined { return this.tryGetToken(vbaParser.TYPEOF, 0); }
	public UNLOAD(): TerminalNode | undefined { return this.tryGetToken(vbaParser.UNLOAD, 0); }
	public UNLOCK(): TerminalNode | undefined { return this.tryGetToken(vbaParser.UNLOCK, 0); }
	public UNTIL(): TerminalNode | undefined { return this.tryGetToken(vbaParser.UNTIL, 0); }
	public VARIANT(): TerminalNode | undefined { return this.tryGetToken(vbaParser.VARIANT, 0); }
	public VERSION(): TerminalNode | undefined { return this.tryGetToken(vbaParser.VERSION, 0); }
	public WEND(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WEND, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WHILE, 0); }
	public WIDTH(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WIDTH, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WITH, 0); }
	public WITHEVENTS(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WITHEVENTS, 0); }
	public WRITE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.WRITE, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(vbaParser.XOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_ambiguousKeyword; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterAmbiguousKeyword) {
			listener.enterAmbiguousKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitAmbiguousKeyword) {
			listener.exitAmbiguousKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitAmbiguousKeyword) {
			return visitor.visitAmbiguousKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RemCommentContext extends ParserRuleContext {
	public REMCOMMENT(): TerminalNode { return this.getToken(vbaParser.REMCOMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_remComment; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterRemComment) {
			listener.enterRemComment(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitRemComment) {
			listener.exitRemComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitRemComment) {
			return visitor.visitRemComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(vbaParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_comment; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndOfLineContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(vbaParser.NEWLINE, 0); }
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public remComment(): RemCommentContext | undefined {
		return this.tryGetRuleContext(0, RemCommentContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_endOfLine; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterEndOfLine) {
			listener.enterEndOfLine(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitEndOfLine) {
			listener.exitEndOfLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitEndOfLine) {
			return visitor.visitEndOfLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndOfStatementContext extends ParserRuleContext {
	public endOfLine(): EndOfLineContext[];
	public endOfLine(i: number): EndOfLineContext;
	public endOfLine(i?: number): EndOfLineContext | EndOfLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndOfLineContext);
		} else {
			return this.getRuleContext(i, EndOfLineContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.COLON);
		} else {
			return this.getToken(vbaParser.COLON, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(vbaParser.WS);
		} else {
			return this.getToken(vbaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return vbaParser.RULE_endOfStatement; }
	// @Override
	public enterRule(listener: vbaListener): void {
		if (listener.enterEndOfStatement) {
			listener.enterEndOfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: vbaListener): void {
		if (listener.exitEndOfStatement) {
			listener.exitEndOfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: vbaVisitor<Result>): Result {
		if (visitor.visitEndOfStatement) {
			return visitor.visitEndOfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


